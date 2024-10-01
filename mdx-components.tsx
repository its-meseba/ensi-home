// components/mdx-components.tsx
import React from 'react';
// import Image from 'next/image';
import { MDXComponents } from 'mdx/types';
// Uncomment and define these imports if you have custom components
// import { Code } from '@/components/ui/code';
// import { Alert } from '@/components/ui/alert';

const components: MDXComponents = {
  // Customize heading levels with Tailwind CSS classes
  h1: (props) => (
    <h1 className="my-6 border-b pb-2 text-4xl font-bold" {...props} />
  ),
  h2: (props) => (
    <h2 className="my-5 border-b pb-1 text-3xl font-semibold" {...props} />
  ),
  h3: (props) => <h3 className="my-4 text-2xl font-medium" {...props} />,
  p: (props) => <p className="my-2 leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-blue-600 transition-colors duration-200 hover:text-blue-500"
      {...props}
    />
  ),
  // img: ({ src, alt, ...rest }) => {
  //   if (!src) {
  //     // Render a fallback or skip rendering if src is undefined
  //     return <img alt={alt || 'Image'} {...rest} />;
  //   }

  //   return (
  //     <div className="relative w-full h-64 my-4">
  //       <Image
  //         src={src}
  //         alt={alt || 'Image'}
  //         layout="fill"
  //         objectFit="cover"
  //         className="rounded-md object-cover"
  //         // Optionally, add unoptimized if you're using external URLs without proper configuration
  //         // unoptimized
  //         {...rest}
  //       />
  //     </div>
  //   );
  // },
  // Uncomment if you have custom Code component
  // code: (props) => <Code {...props} />,
  pre: (props) => <div className="my-4">{props.children}</div>,
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-300 pl-4 italic"
      {...props}
    />
  ),
  // Uncomment and ensure Alert is properly imported
  // Alert: Alert,
};

export default components;
