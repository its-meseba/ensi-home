import { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import { languageTag } from '@/paraglide/runtime.js';

type MetadataParams = {
  path?: string[];
};

export async function generateMetadata({
  params,
}: {
  params?: MetadataParams;
} = {}): Promise<Metadata> {
  const pathSegments = params?.path || [];
  const currentPath = pathSegments.join('/');

  const getPageTitle = (path: string) => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return siteConfig.title();

    const pathToTitle: Record<string, string> = {
      'ensi-home': 'Ensi Home',
      'knowledge-base': 'Knowledge Base',
      box: 'Ensi Home Box',
      'mobile-application': 'Mobile Application',
      'ai-voice-assistant': 'AI Voice Assistant',
      cloud: 'Cloud',
      'smart-life-areas': 'Smart Life Areas',
      'compatible-smart-devices': 'Compatible Smart Devices',
      faq: 'FAQ',
      contact: 'Contact',
      'how-it-is-done': 'How It Is Done',
      'supported-devices': 'Supported Devices',
      'how-it-works': 'How It Works',
    };

    const pageTitle = segments
      .map((segment) => {
        if (
          segments.includes('supported-devices') &&
          segment.match(/device\d+/)
        ) {
          return `Device ${segment.replace('device', '')}`;
        }
        return (
          pathToTitle[segment] ||
          segment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
      })
      .join(' - ');

    return pageTitle;
  };

  const pageTitle = getPageTitle(currentPath);
  const fullTitle = currentPath
    ? `${pageTitle} | ${siteConfig.title()}`
    : siteConfig.title();

  return {
    metadataBase: new URL(siteConfig.url()),
    title: {
      default: fullTitle,
      template: `%s | ${siteConfig.title()}`,
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
      url: `${siteConfig.url()}/${currentPath}`,
      title: fullTitle,
      description: siteConfig.description(),
      siteName: siteConfig.title(),
      images: siteConfig.cardImage,
      type: 'website',
      locale: languageTag(),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: siteConfig.description(),
      images: siteConfig.cardImage,
    },
  };
}
