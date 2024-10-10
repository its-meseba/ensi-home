'use client';

import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const gradients = [
    'bg-gradient-to-r from-pink-500 to-purple-500',
    'bg-gradient-to-r from-purple-500 to-indigo-500',
    'bg-gradient-to-r from-indigo-500 to-blue-500',
    'bg-gradient-to-r from-blue-500 to-green-500',
    'bg-gradient-to-r from-green-500 to-yellow-500',
    'bg-gradient-to-r from-yellow-500 to-orange-500',
    'bg-gradient-to-r from-orange-500 to-red-500',
  ];

  return (
    <div
      className="w-full bg-white font-sans md:px-10 dark:bg-neutral-950"
      ref={containerRef}
    >
      <div ref={ref} className="relative mx-auto max-w-full pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            gradients={gradients}
          />
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8  dark:via-neutral-700 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-0% via-blue-500 via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({
  item,
  index,
  gradients,
}: {
  item: TimelineEntry;
  index: number;
  gradients: string[];
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const renderTitle = (title: string) => {
    const parts = title.split('. ');
    if (parts.length === 2) {
      return (
        <>
          <span className="text-2xl md:text-6xl">{parts[0]}.</span> <br></br>
          <span className="text-xl md:text-3xl">{parts[1]}</span>
        </>
      );
    }
    return title;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex justify-start pt-10 md:gap-10 md:pt-40"
    >
      <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black"
        >
          <div className="size-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className={`hidden text-xl font-bold md:block md:pl-20 md:text-4xl ${gradients[index % gradients.length]} bg-clip-text text-transparent`}
        >
          {renderTitle(item.title)}
        </motion.h3>
      </div>

      <div className="relative w-full pl-20 pr-4 md:pl-4">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className={`mb-4 block text-left text-2xl font-bold md:hidden ${gradients[index % gradients.length]} bg-clip-text text-transparent`}
        >
          {renderTitle(item.title)}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
        >
          {item.content}
        </motion.div>
      </div>
    </motion.div>
  );
};
