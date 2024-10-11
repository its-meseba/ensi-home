'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const initialMockupData = [
  {
    title: 'First',
    image:
      '/images/pages/ensi-home/mobile-application/first.jpeg?height=400&width=200',
  },
  {
    title: 'Second',
    image:
      '/images/pages/ensi-home/mobile-application/second.jpeg?height=400&width=200',
  },
  {
    title: 'Third',
    image:
      '/images/pages/ensi-home/mobile-application/third.jpeg?height=400&width=200',
  },
];

export default function Component() {
  const [mockupData, setMockupData] = useState(initialMockupData);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTimestamp = 0;
    const scrollSpeed = 0.1; // Reduced speed for smoother scrolling

    const animate = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered) {
        scrollContainer.scrollLeft += scrollSpeed * deltaTime;
      }

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth - 100
      ) {
        const newItems = [...initialMockupData].map((item, index) => ({
          ...item,
          title: `${item.title} ${mockupData.length + index + 1}`,
        }));
        setMockupData((prevData) => [...prevData, ...newItems]);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered, mockupData.length]);

  return (
    <div className="mx-auto w-full max-w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4 py-8 sm:py-16">
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
        An app you&apos;ll love.
      </h2>
      <p className="mb-8 text-center text-base text-gray-600 sm:mb-12 sm:text-lg">
        Designed to make controlling, automating and monitoring your smart home
        intuitive and fun.
      </p>
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-hidden py-8 sm:space-x-12 sm:py-12 md:space-x-20 md:py-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {mockupData.map((mockup, index) => (
          <motion.div
            key={index}
            className="shrink-0"
            whileHover={{ y: -20, transition: { duration: 0.3 } }}
          >
            <div className="relative h-[400px] w-[200px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl sm:h-[480px] sm:w-[240px] sm:rounded-[2.5rem] sm:shadow-2xl md:h-[580px] md:w-[280px] md:rounded-[3rem]">
              <div className="absolute left-1/2 top-0 h-6 w-1/2 -translate-x-1/2 rounded-b-2xl bg-gray-900 sm:h-8 sm:rounded-b-3xl"></div>
              <div className="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-full bg-gray-800 sm:top-3 sm:w-16"></div>
              <div className="absolute right-4 top-1 size-1.5 rounded-full bg-gray-700 ring-1 ring-gray-600 sm:right-6 sm:top-2 sm:size-2"></div>
              <div className="absolute inset-1.5 overflow-hidden rounded-[1.75rem] bg-white shadow-inner sm:inset-2 sm:rounded-[2.25rem] md:rounded-[2.75rem]">
                <img
                  src={mockup.image}
                  alt={`App mockup for ${mockup.title}`}
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute bottom-1.5 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-gray-700 sm:bottom-2"></div>
              <div className="absolute -left-16 top-1/4 h-60 w-20 rotate-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-20 blur-2xl sm:-left-20 sm:h-72 sm:w-24"></div>
              <div className="absolute -right-16 bottom-1/4 h-60 w-20 -rotate-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-20 blur-2xl sm:-right-20 sm:h-72 sm:w-24"></div>
            </div>
            <h3 className="mt-4 text-center text-lg font-medium text-gray-800 sm:mt-6 sm:text-xl md:mt-8">
              {mockup.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
