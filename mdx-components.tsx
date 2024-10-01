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

// import type { MDXComponents } from 'mdx/types'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useMDXComponent } from 'next-contentlayer/hooks'
// import * as React from 'react'

// import { cn } from '@/lib/utils'
// import { Callout } from '@/components/callout'
// import { MdxCard } from '@/components/mdx-card'

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
// import { Button } from '@/components/ui/button'

// import { ExternalLink, Info } from 'lucide-react'

// const components: MDXComponents = {
//   h1: ({ className, ...props }) => (
//     <h1
//       className={cn(
//         "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h2: ({ className, ...props }) => (
//     <h2
//       className={cn(
//         "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h3: ({ className, ...props }) => (
//     <h3
//       className={cn(
//         "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h4: ({ className, ...props }) => (
//     <h4
//       className={cn(
//         "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h5: ({ className, ...props }) => (
//     <h5
//       className={cn(
//         "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h6: ({ className, ...props }) => (
//     <h6
//       className={cn(
//         "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   a: ({ className, ...props }) => (
//     <Link
//       className={cn("font-medium underline underline-offset-4", className)}
//       {...props}
//     />
//   ),
//   p: ({ className, ...props }) => (
//     <p
//       className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
//       {...props}
//     />
//   ),
//   ul: ({ className, ...props }) => (
//     <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
//   ),
//   ol: ({ className, ...props }) => (
//     <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
//   ),
//   li: ({ className, ...props }) => (
//     <li className={cn("mt-2", className)} {...props} />
//   ),
//   blockquote: ({ className, ...props }) => (
//     <blockquote
//       className={cn(
//         "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
//         className
//       )}
//       {...props}
//     />
//   ),
//   img: ({
//     className,
//     alt,
//     ...props
//   }: React.ImgHTMLAttributes<HTMLImageElement>) => (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img className={cn("rounded-md border", className)} alt={alt} {...props} />
//   ),
//   hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
//   table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
//     <div className="my-6 w-full overflow-y-auto">
//       <table className={cn("w-full", className)} {...props} />
//     </div>
//   ),
//   tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
//     <tr
//       className={cn("m-0 border-t p-0 even:bg-muted", className)}
//       {...props}
//     />
//   ),
//   th: ({ className, ...props }) => (
//     <th
//       className={cn(
//         "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   td: ({ className, ...props }) => (
//     <td
//       className={cn(
//         "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   pre: ({ className, ...props }) => (
//     <pre
//       className={cn(
//         "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
//         className
//       )}
//       {...props}
//     />
//   ),
//   code: ({ className, ...props }) => (
//     <code
//       className={cn(
//         "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
//         className
//       )}
//       {...props}
//     />
//   ),
//   Image,
//   Callout,
//   Card: MdxCard,
//   ExternalLink: ({ href, children }) => (
//     <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
//       {children}
//       <ExternalLink className="ml-1 h-4 w-4" />
//     </a>
//   ),
//   Button,
//   InfoTooltip: ({ content, children }) => (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <span className="inline-flex items-center">
//             {children}
//             <Info className="ml-1 h-4 w-4" />
//           </span>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>{content}</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   ),
// }

// interface MdxProps {
//   code: string
// }

// export function Mdx({ code }: MdxProps) {
//   const Component = useMDXComponent(code)

//   return (
//     <div className="mdx">
//       <Component components={components} />
//     </div>
//   )
// }

// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     ...components,
//     ...customComponents,
//   }
// }
