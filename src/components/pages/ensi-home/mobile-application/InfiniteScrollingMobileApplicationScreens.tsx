'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AppScreenshot {
  imageUrl: string;
  link: string;
  title: string;
}

interface InfiniteScrollingMobileApplicationScreensProps {
  screenshots: AppScreenshot[];
}

const InfiniteScrollingMobileApplicationScreens: React.FC<
  InfiniteScrollingMobileApplicationScreensProps
> = ({ screenshots }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer && !isHovered) {
      let animationId: number;

      const scroll = () => {
        scrollContainer.scrollLeft += 1;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }

        animationId = requestAnimationFrame(scroll);
      };

      animationId = requestAnimationFrame(scroll);

      return () => cancelAnimationFrame(animationId);
    }
  }, [isHovered]);

  return (
    <div className="w-full overflow-hidden p-8 sm:p-8 md:p-16 lg:p-16">
      <h2 className="mb-8 text-center text-2xl font-normal tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        Experience Ensi Home on Your Device
      </h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="group mx-4 w-56 flex-none transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={screenshot.link} passHref>
              <div className="relative h-[450px] w-56 cursor-pointer overflow-hidden rounded-[2.5rem] border-8 border-gray-800 shadow-xl">
                <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
                <Image
                  src={screenshot.imageUrl}
                  alt={`Ensi Home App Screen ${index + 1}`}
                  fill
                  className="rounded-[2rem] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-white drop-shadow-lg">
                      {screenshot.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollingMobileApplicationScreens;
