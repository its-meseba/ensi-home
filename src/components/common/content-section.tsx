import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as m from '@/paraglide/messages';

export interface ContentItemProps {
  id: string;
  title: string;
  href: string;
  buttonText: string;
  component: React.ReactNode;
}

interface ContentSectionProps {
  items: ContentItemProps[];
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContentItem: React.FC<ContentItemProps> = ({
  title,
  href,
  buttonText,
  component,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05 }}
      className="group relative h-[700px] w-full overflow-hidden rounded-3xl border-2 border-gray-300 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="relative h-[600px] w-full overflow-hidden bg-gray-50/10 p-4 dark:bg-gray-800/50">
        {component}
      </div>
      <motion.div
        className="absolute inset-x-0 bottom-0 flex h-[100px] flex-col items-center justify-center space-y-2 rounded-b-3xl bg-white px-6 transition-all duration-300 group-hover:h-[120px] dark:bg-gray-800"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <h3 className="text-center text-xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <Link href={href} className="w-full">
          <Button
            variant="secondary"
            className="w-full transition-all duration-300 hover:scale-105"
          >
            {buttonText}
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export const ContentSection: React.FC<ContentSectionProps> = ({ items }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={controls}
          className="mb-12 text-center text-3xl font-normal tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {m.main_threesome_title()}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <ContentItem key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
