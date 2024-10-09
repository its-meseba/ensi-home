'use client';
import { cn } from '@/lib/utils';
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useInView,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    if (isInView) {
      // Perform any animation or state updates needed when the component is in view
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-black',
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none absolute  inset-0" />
      <motion.div
        className="bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
                        radial-gradient(
                          200px circle at ${mouseX}px ${mouseY}px,
                          black 0%,
                          transparent 100%
                        )
                      `,
          maskImage: useMotionTemplate`
                        radial-gradient(
                          200px circle at ${mouseX}px ${mouseY}px,
                          black 0%,
                          transparent 100%
                        )
                      `,
        }}
      />

      <div className={cn('container relative z-20', className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `from-primary relative inline-block rounded-lg bg-gradient-to-r to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
