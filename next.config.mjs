import { paraglide } from '@inlang/paraglide-next/plugin';
import withMDX from '@next/mdx'; // {{ edit_1 }}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloud Run image (Dockerfile sets NEXT_STANDALONE=1); Vercel-style builds stay unchanged.
  ...(process.env.NEXT_STANDALONE === '1' ? { output: 'standalone' } : {}),
  images: {
    dangerouslyAllowSVG: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "avatars.githubusercontent.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "apps-cdn.athom.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "assets.aceternity.com",
    //   },
    // ],
    domains: ['avatars.githubusercontent.com', 'apps-cdn.athom.com', 'images.unsplash.com', 'assets.aceternity.com'],
  },

  transpilePackages: ['next-mdx-remote'],
};

const mdxConfig = withMDX({ // {{ edit_2 }}
  extension: /\.mdx?$/,
  options: {
    // You can specify remark plugins here
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './src/paraglide',
  },
  ...nextConfig,
  ...mdxConfig, // {{ edit_3 }}
});
