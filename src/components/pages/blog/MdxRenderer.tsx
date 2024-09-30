// src/components/MdxRenderer.tsx

'use client';

import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

const MdxRenderer: React.FC<MdxRendererProps> = ({ source }) => {
  return <MDXRemote {...source} />;
};

export default MdxRenderer;
