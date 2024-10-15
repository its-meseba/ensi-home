import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import { LanguageProvider } from '@inlang/paraglide-next';
import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import NewNavbar from '@/components/navbar/new-navbar';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { languageTag } from '@/paraglide/runtime.js';

import { VisitorTypeSelector } from '@/components/common/VisitorTypeSelector';
import { AIHelperButton } from '@/components/common/AiHelperButton';
import { AppWrapper } from '@/wrapper/VisitorWrapper';

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
        <body
          className={cn(
            'bg-background text-foreground min-h-screen font-sans',
            fonts
          )}
        >
          {/* <Providers> */}
          <AppWrapper>
            <NewNavbar />
            <main className="pt-0">{children}</main>
            <Footer />
            {/* Place the VisitorTypeSelector at the bottom left */}
            <div className="fixed bottom-4 left-4 z-50">
              <VisitorTypeSelector />
            </div>
            <AIHelperButton />
          </AppWrapper>
          {/* </Providers> */}
        </body>
      </html>
    </LanguageProvider>
  );
};

export default RootLayout;
