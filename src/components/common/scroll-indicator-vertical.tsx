'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

interface VerticalScrollIndicatorProps {
  sections: Section[];
}

export default function VerticalScrollIndicator({
  sections,
}: VerticalScrollIndicatorProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const sectionElements = sections.map((section) =>
      document.getElementById(section.id)
    );
    const viewportHeight = window.innerHeight;

    sectionElements.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= viewportHeight / 2 &&
          rect.bottom >= viewportHeight / 2
        ) {
          setActiveSection(index);
        }
      }
    });
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // Adjust 80 as needed for any fixed headers

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed right-2 top-1/2 z-50 -translate-y-1/2 sm:right-4 md:right-6">
      <div className="flex flex-col items-end space-y-3 sm:space-y-4 md:space-y-6">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="group relative flex items-center"
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <AnimatePresence>
              {(hoveredSection === index || activeSection === index) && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary/10 text-primary absolute right-full mr-2 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-medium sm:mr-3 sm:px-2 sm:py-1 sm:text-xs"
                >
                  {section.label}
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="relative size-4 cursor-pointer sm:size-6 md:size-8"
              onClick={() => scrollToSection(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer ring */}
              <motion.div
                className="border-primary absolute inset-0 rounded-full border sm:border-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: index === activeSection ? 1 : 0.8,
                  opacity: index === activeSection ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Inner dot */}
              <motion.div
                className="bg-primary absolute inset-1 rounded-full sm:inset-1.5 md:inset-2"
                animate={{
                  scale: index === activeSection ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
