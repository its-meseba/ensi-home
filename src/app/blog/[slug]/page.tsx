// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { getPostData, getMdxContent } from '@/lib/posts';
import React from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import Head from 'next/head';
import MdxRenderer from '@/components/pages/blog/MdxRenderer';

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  // Explicitly type 'source' as MDXRemoteSerializeResult
  let source: MDXRemoteSerializeResult;

  try {
    const { content } = await getMdxContent(slug);
    source = await serialize(content, { parseFrontmatter: true });
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <div className="prose dark:prose-dark mx-auto px-4 py-12">
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <article>
        {postData.coverImage && (
          <Image
            src={postData.coverImage}
            alt={postData.title}
            width={800}
            height={400}
            className="h-auto w-full rounded-lg object-cover"
          />
        )}
        <h1 className="mt-6 text-3xl font-bold">{postData.title}</h1>
        <p className="text-gray-500">
          {new Date(postData.date).toLocaleDateString()}
        </p>
        {/* Pass the typed 'source' to the client component */}
        <MdxRenderer source={source} />
      </article>
    </div>
  );
};

export default PostPage;
