import { paraglide } from '@inlang/paraglide-next/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'apps-cdn.athom.com',
      },
    ],
  },
};

export default paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './src/paraglide',
  },
  ...nextConfig,
});
