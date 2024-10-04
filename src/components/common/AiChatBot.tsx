// components/AIChatbot.tsx
'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ActionProvider from '@/chatbot/ActionProvider';
import MessageParser from '@/chatbot/MessageParser';
import config from '@/chatbot/configs';

interface AIChatbotProps {
  onClose: () => void;
}

export function AIChatbot({ onClose }: AIChatbotProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-0 right-0 z-50',
        'm-4 w-full max-w-sm rounded-lg border',
        'bg-white shadow-lg'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b p-2">
        <h2 className="text-lg font-medium">AI Assistant</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      {/* Chatbot Interface */}
      <div className="p-2">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

// 'use client';

// import { useEffect, useRef } from 'react';
// import { X } from 'lucide-react';
// import { useChat } from 'ai/react';
// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

// interface AIChatbotProps {
//   onClose: () => void;
// }

// export function AIChatbot({ onClose }: AIChatbotProps) {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (typeof document !== 'undefined') {
//       document.body.style.overflow = 'hidden';
//     }
//     return () => {
//       if (typeof document !== 'undefined') {
//         document.body.style.overflow = '';
//       }
//     };
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div
//       className={cn(
//         'fixed bottom-0 right-0 z-50',
//         'm-4 w-full max-w-sm rounded-lg border',
//         'bg-background shadow-lg flex flex-col'
//       )}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b">
//         <h2 className="text-lg font-medium">AI Assistant</h2>
//         <Button variant="ghost" size="icon" onClick={onClose}>
//           <X className="h-5 w-5" />
//           <span className="sr-only">Close</span>
//         </Button>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={cn(
//               'flex',
//               message.role === 'user' ? 'justify-end' : 'justify-start'
//             )}
//           >
//             <div
//               className={cn(
//                 'rounded-lg px-4 py-2 max-w-[80%]',
//                 message.role === 'user'
//                   ? 'bg-primary text-primary-foreground'
//                   : 'bg-muted'
//               )}
//             >
//               {message.content}
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <form onSubmit={handleSubmit} className="border-t p-4">
//         <div className="flex space-x-2">
//           <Input
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Type your message..."
//             className="flex-1"
//           />
//           <Button type="submit">Send</Button>
//         </div>
//       </form>
//     </div>
//   );
// }
