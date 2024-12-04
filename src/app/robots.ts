import { MetadataRoute } from 'next';
import { env } from '@/env.mjs';
import * as m from '@/paraglide/messages';
import { routes } from '@/app/routes';

function getAllowedPaths() {
  // Get all supported locales
  const locales = ['en']; // Add all your supported locales

  // Base paths that should be allowed
  const basePaths = ['/', '/ensi-home', '/knowledge-base'];

  // Get all routes from the centralized configuration
  const allRoutes = [...routes.solutions, ...routes.knowledgeBase];

  // Generate all localized paths
  const localizedPaths = locales.flatMap((locale) => {
    // Add the root locale path
    const paths = [`/${locale}`];

    // Add all routes with locale prefix
    allRoutes.forEach((route) => {
      paths.push(`/${locale}${route.path}`);
    });

    return paths;
  });

  return [...basePaths, ...localizedPaths];
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: getAllowedPaths(),
        disallow: ['/api'],
      },
    ],
    sitemap: `${env.APP_URL}/sitemap.xml`,
  };
}
