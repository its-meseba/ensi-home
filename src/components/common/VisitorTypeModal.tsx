'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useVisitorType } from '@/context/VisitorTypeContext';
import { motion, AnimatePresence } from 'framer-motion';

const visitorTypes = [
  { type: 'homeOwner', label: 'Home Owner' },
  { type: 'constructionCompany', label: 'Construction Company' },
  { type: 'businessOwner', label: 'Business Owner' },
];

export function VisitorTypeModal() {
  const { visitorType, setVisitorType, showModal, setShowModal } =
    useVisitorType();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (
    type: 'homeOwner' | 'constructionCompany' | 'businessOwner'
  ) => {
    setVisitorType(type);
    setShowModal(false);
  };

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Welcome! What type of visitor are you?
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AnimatePresence>
            {visitorTypes.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale:
                    hoveredIndex === index
                      ? 1.05
                      : hoveredIndex === null
                        ? 1
                        : 0.95,
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.15, duration: 0.3 }}
              >
                <Button
                  className="w-full py-6 text-lg transition-all duration-300"
                  onClick={() => handleSelect(item.type as any)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
