// src/components/pages/blog/RelatedPosts.tsx

import React from 'react';
import Link from 'next/link';
import { PostData } from '@/lib/posts';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

interface RelatedPostsProps {
  relatedPosts: PostData[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ relatedPosts }) => {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">Related Posts</h2>
      <div className="grid gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.slug}>
            <CardContent>
              <CardTitle>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
