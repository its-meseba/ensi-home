'use client';
import { useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { GoogleGeminiEffect } from './google-gemini-effect';

export function EnsiHomeOrchestrator() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="relative min-h-[400vh] w-full text-clip rounded-md bg-black pt-40 dark:border dark:border-white/[0.1]"
      ref={ref}
    >
      <GoogleGeminiEffect
        title="The Orchestrator"
        description="Ensi Home is the orchestra conductor of your Smart House. It will always make your house reachable, not just available."
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
