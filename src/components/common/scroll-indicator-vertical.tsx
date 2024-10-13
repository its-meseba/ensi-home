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
    <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2">
      <div className="flex flex-col items-end space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="group flex items-center"
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div
              className="relative flex items-center"
              onClick={() => scrollToSection(index)}
            >
              <AnimatePresence>
                {(hoveredSection === index || activeSection === index) && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-primary mr-2 whitespace-nowrap rounded-full px-2 py-1 text-xs text-white"
                  >
                    {section.label}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection(index);
                }}
                animate={{
                  scale: index === activeSection ? 1 : 0.8,
                  backgroundColor:
                    index === activeSection ? '#408B91' : '#D1D5DB',
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="size-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={`Scroll to ${section.label} section`}
              />
              <div
                className="absolute right-full h-full w-6 cursor-pointer"
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
