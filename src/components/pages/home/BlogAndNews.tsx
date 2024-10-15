'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import * as m from '@/paraglide/messages';
interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
}

export default function BlogAndNews() {
  const [blogPosts, setBlogPosts] = useState<PostData[]>([]);
  const componentRef = useRef(null);
  const isInView = useInView(componentRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: PostData[] = await response.json();
        setBlogPosts(data.slice(0, 4)); // Get only the latest 4 posts
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="container mx-auto rounded-3xl bg-white px-4 py-16"
    >
      <h2 className="mb-8 text-center text-3xl font-bold">
        {m.main_blog_and_news()}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden rounded-3xl border transition-shadow duration-300 hover:shadow-lg">
              <Image
                src={post.coverImage || '/placeholder.jpg'}
                alt={post.title}
                width={400}
                height={200}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>
                  {new Date(post.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant="outline" className="w-full">
                    {m.main_blog_and_news_read_more()}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
