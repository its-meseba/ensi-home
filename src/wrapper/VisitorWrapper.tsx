'use client';

import { VisitorTypeModal } from '@/components/common/VisitorTypeModal';
import { VisitorTypeProvider } from '@/context/VisitorTypeContext';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <VisitorTypeProvider>
      {children}
      <VisitorTypeModal />
    </VisitorTypeProvider>
  );
}
