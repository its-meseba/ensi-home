// components/AnimatedIcon.tsx
import { MessageCircleIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedIconProps {
  isOpen: boolean;
}

export function AnimatedIcon({ isOpen }: AnimatedIconProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isOpen ? (
        <motion.div
          key="close-icon"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          <X className="size-6" />
        </motion.div>
      ) : (
        <motion.div
          key="chat-icon"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircleIcon className="size-6" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
