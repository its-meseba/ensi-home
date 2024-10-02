// app/your-carousel-page/[modal]/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

const ModalPage = ({ params }: { params: { modal: string } }) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={handleClose}
        />
        <motion.div
          className="relative z-50 mx-4 w-full max-w-5xl rounded-lg bg-white p-6 dark:bg-neutral-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <button
            className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-black dark:bg-white"
            onClick={handleClose}
          >
            <IconX className="size-6 text-white dark:text-black" />
          </button>
          {/* Your modal content goes here */}
          <h2 className="text-2xl font-semibold">
            Modal Content for {params.modal}
          </h2>
          {/* Fetch and display the content based on params.modal */}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ModalPage;
