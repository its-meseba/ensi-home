import { paraglide } from '@inlang/paraglide-next/plugin';
import withMDX from '@next/mdx'; // {{ edit_1 }}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'apps-cdn.athom.com'],
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
