'use client';

import { VisitorTypeModal } from '@/components/common/VisitorTypeModal';
import { LightModeProvider } from '@/context/LightModeProvider';
import { VisitorTypeProvider } from '@/context/VisitorTypeContext';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LightModeProvider>
      <VisitorTypeProvider>
        {children}
        <VisitorTypeModal />
      </VisitorTypeProvider>
    </LightModeProvider>
  );
}
