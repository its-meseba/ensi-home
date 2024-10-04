// app/layout.tsx
import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { LanguageProvider } from '@inlang/paraglide-next';
import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { NewNavbar } from '@/components/navbar/new-navbar';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { languageTag } from '@/paraglide/runtime.js';

import { Providers } from './providers'; // Import the Providers component
import { VisitorTypeSelector } from '@/components/common/VisitorTypeSelector';
import { AIHelperButton } from '@/components/common/AiHelperButton';

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title(),
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description(),
  keywords: siteConfig.keywords(),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: siteConfig.url(),
    title: siteConfig.title(),
    description: siteConfig.description(),
    siteName: siteConfig.title(),
    images: siteConfig.cardImage,
    type: 'website',
    locale: languageTag(),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title(),
    description: siteConfig.description(),
    images: siteConfig.cardImage,
  },
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <LanguageProvider>
      <html lang={languageTag()} suppressHydrationWarning>
        <body className={cn('min-h-screen font-sans', fonts)}>
          <Providers>
            <NewNavbar />
            <main className="pt-20">{children}</main>
            <Footer />
            {/* Place the VisitorTypeSelector at the bottom left */}
            <div className="fixed bottom-4 left-4 z-50">
              <VisitorTypeSelector />
            </div>
            {/* Place the AIHelperButton at the bottom right */}
            <AIHelperButton />
          </Providers>
        </body>
      </html>
    </LanguageProvider>
  );
};

export default RootLayout;
