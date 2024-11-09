'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useVisitorType } from '@/context/VisitorTypeContext';
import { motion, AnimatePresence } from 'framer-motion';
import * as m from '@/paraglide/messages';

const visitorTypes = [
  { type: 'homeOwner', label: m.userType_homeOwner() },
  { type: 'constructionCompany', label: m.userType_constructionCompany() },
];

export function VisitorTypeModal() {
  const { visitorType, setVisitorType, showModal, setShowModal } =
    useVisitorType();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (type: 'homeOwner' | 'constructionCompany') => {
    setVisitorType(type);
    setShowModal(false);
  };

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            {m.userType_choose_modal()}
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
                  scale: hoveredIndex === index ? 1.05 : 1,
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
