// app/providers.tsx
'use client';

import React from 'react';
import { VisitorTypeProvider } from '@/context/VisitorTypeContext';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <VisitorTypeProvider>
      <ThemeProvider attribute="class">
        {children}
        <Toaster />
      </ThemeProvider>
    </VisitorTypeProvider>
  );
}
