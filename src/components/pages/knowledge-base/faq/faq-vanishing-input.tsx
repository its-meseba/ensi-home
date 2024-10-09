'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FaqVanishingInput({ className }: { className?: string }) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [response, setResponse] = useState('');
  const placeholders = [
    'How do I set up my Ensi Home system?',
    'Can I control my Ensi Home devices remotely?',
    'What smart devices are compatible with Ensi Home?',
    'How secure is the Ensi Home system?',
    'Can I integrate Ensi Home with other smart home platforms?',
    'How does the AI voice assistant work?',
    'What energy-saving features does Ensi Home offer?',
    'How do I update my Ensi Home software?',
    'Can Ensi Home learn my preferences over time?',
    'What kind of customer support does Ensi Home provide?',
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [animating, setAnimating] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!animating) {
      setValue(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Value: ', value);
    try {
      const res = await fetch('/api/faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });

      const data = await res.json();
      if (data.success) {
        setResponse('Email sent successfully!');
      } else {
        setResponse('Failed to send email.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponse('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const draw = useCallback(() => {
    if (!inputRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const computedStyles = getComputedStyle(inputRef.current);
    const fontSize = parseFloat(computedStyles.getPropertyValue('font-size'));
    ctx.font = `${fontSize}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = '#FFF';
    ctx.fillText(value, 16, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        if (
          pixelData[i] !== 0 ||
          pixelData[i + 1] !== 0 ||
          pixelData[i + 2] !== 0
        ) {
          newData.push({
            x,
            y,
            color: `rgba(${pixelData[i]}, ${pixelData[i + 1]}, ${pixelData[i + 2]}, ${pixelData[i + 3]})`,
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas) return;

        ctx.clearRect(pos, 0, canvas.width, canvas.height);
        newDataRef.current = newDataRef.current.filter((particle) => {
          if (particle.x < pos) return true;
          if (particle.r <= 0) return false;

          particle.x += Math.random() > 0.5 ? 1 : -1;
          particle.y += Math.random() > 0.5 ? 1 : -1;
          particle.r -= 0.05 * Math.random();

          ctx.beginPath();
          ctx.rect(particle.x, particle.y, particle.r, particle.r);
          ctx.fillStyle = particle.color;
          ctx.fill();

          return true;
        });

        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue('');
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    if (value && canvasRef.current) {
      const maxX = Math.max(
        ...newDataRef.current.map((particle) => particle.x)
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    onSubmit(e);
  };

  return (
    <div className={cn('w-full', className)}>
      <form
        className={cn(
          'relative mx-auto h-12 w-full overflow-hidden rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 dark:bg-zinc-800',
          value && 'bg-gray-50'
        )}
        onSubmit={handleSubmit}
      >
        <canvas
          className={cn(
            'pointer-events-none absolute inset-0 size-full',
            !animating ? 'opacity-0' : 'opacity-100'
          )}
          ref={canvasRef}
        />
        <div className="relative flex h-full items-center">
          <Search className="absolute left-3 size-5 text-gray-400" />
          <input
            onChange={onChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            value={value}
            type="text"
            className={cn(
              'size-full rounded-full border-none bg-transparent pl-10 pr-12 text-sm text-black focus:outline-none focus:ring-0 sm:pl-12 sm:text-base dark:text-white',
              animating && 'text-transparent dark:text-transparent'
            )}
            placeholder={placeholders[currentPlaceholder]}
            aria-label="Search FAQs"
          />
          <button
            disabled={!value}
            type="submit"
            className="absolute right-2 flex size-8 items-center justify-center rounded-full bg-black transition duration-200 disabled:bg-gray-100 dark:bg-zinc-900 dark:disabled:bg-zinc-800"
            aria-label="Submit search"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-gray-300"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <motion.path
                d="M5 12l14 0"
                initial={{ strokeDasharray: '50%', strokeDashoffset: '50%' }}
                animate={{ strokeDashoffset: value ? 0 : '50%' }}
                transition={{ duration: 0.3, ease: 'linear' }}
              />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </motion.svg>
          </button>
        </div>
      </form>
      {response && (
        <div
          className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400"
          aria-live="polite"
        >
          {response}
        </div>
      )}
    </div>
  );
}
