// import { env } from '@/env.mjs';
import * as m from '@/paraglide/messages';

export const siteConfig = {
  title: m.meta_title,
  description: m.meta_description,
  cardImage: '/ensihome.png',
  keywords: () => [
    m.meta_keyword_ensi(),
    m.meta_keyword_ensi_home(),
    m.meta_keyword_ensi_starter(),
    m.meta_keyword_ensi_boilerplate(),
    m.meta_keyword_ensi_template(),
    m.meta_keyword_ensi_tailwindcss(),
    m.meta_keyword_ensi_typescript(),
    m.meta_keyword_ensi_shadcn_ui(),
    m.meta_keyword_ensi_next_auth(),
    m.meta_keyword_ensi_prisma(),
  ],
  // url: () => env.APP_URL,
  url: () => 'https://ensihome.solace.com.tr',
  // googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
  googleSiteVerificationId: () => '',
};
