import { Metadata } from 'next';

type OpenGraphType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: OpenGraphType;
};

const defaultMetadata = {
  title: 'Solace Smart Technologies',
  description: 'Smart home solutions for a better living experience',
  keywords: ['smart home', 'IoT', 'automation', 'technology'],
  image: '/images/og-image.jpg',
  url: 'https://solace.com.tr',
  type: 'website' as OpenGraphType,
};

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type,
}: MetadataProps = {}): Metadata {
  const metadata: Metadata = {
    title: title
      ? `${title} | ${defaultMetadata.title}`
      : defaultMetadata.title,
    description: description || defaultMetadata.description,
    keywords: keywords || defaultMetadata.keywords,
    authors: [{ name: 'Solace Smart Technologies' }],
    openGraph: {
      title: title
        ? `${title} | ${defaultMetadata.title}`
        : defaultMetadata.title,
      description: description || defaultMetadata.description,
      url: url || defaultMetadata.url,
      siteName: defaultMetadata.title,
      images: [
        {
          url: image || defaultMetadata.image,
          width: 1200,
          height: 630,
          alt: title || defaultMetadata.title,
        },
      ],
      type: type || defaultMetadata.type,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: title
        ? `${title} | ${defaultMetadata.title}`
        : defaultMetadata.title,
      description: description || defaultMetadata.description,
      images: [image || defaultMetadata.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };

  return metadata;
}
