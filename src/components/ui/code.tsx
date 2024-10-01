// components/ui/code.tsx
import React from 'react';

interface CodeProps {
  children: React.ReactNode;
}

export const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm dark:bg-gray-700">
      {children}
    </code>
  );
};
