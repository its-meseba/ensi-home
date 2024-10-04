// pages/_app.tsx
'use client';

import { VisitorTypeProvider } from '@/context/VisitorTypeContext';
import type { AppProps } from 'next/app';

function EnsiHomeApp({ Component, pageProps }: AppProps) {
  return (
    <VisitorTypeProvider>
      <Component {...pageProps} />
    </VisitorTypeProvider>
  );
}

export default EnsiHomeApp;
