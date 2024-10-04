// components/AIHelperButton.tsx
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AnimatedIcon } from './AnimatedIcon';
import { AIChatbot } from './AiChatBot';

export function AIHelperButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Modal */}
      {isOpen && <AIChatbot onClose={toggleChatbot} />}

      {/* Floating Button */}
      <div
        className={cn(
          'fixed bottom-4 right-4 z-50',
          'flex items-center justify-center'
        )}
      >
        <Button
          onClick={toggleChatbot}
          className="size-12 rounded-full shadow-lg"
        >
          <AnimatedIcon isOpen={isOpen} />
          <span className="sr-only">
            {isOpen ? 'Close AI Chatbot' : 'Open AI Chatbot'}
          </span>
        </Button>
      </div>
    </>
  );
}
