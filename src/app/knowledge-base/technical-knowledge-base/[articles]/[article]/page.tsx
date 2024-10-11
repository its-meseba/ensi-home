'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Clock,
  Tag,
  //   Search,
  //   Sun,
  //   Moon,
  //   Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ArticleContent {
  title: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: string;
  lastUpdated: string;
  estimatedReadTime: string;
  tags: string[];
  sections: ArticleSection[];
  relatedArticles: RelatedArticle[];
}

interface ArticleSection {
  id: string;
  title: string;
  type: 'paragraph' | 'video' | 'list' | 'note';
  content: string | string[] | { url: string };
}

interface RelatedArticle {
  title: string;
  slug: string;
  thumbnail: string;
}

// This would typically come from an API or database
const articleContent: Record<string, ArticleContent> = {
  'connecting-your-first-device-to-ensi-home': {
    title: 'Connecting your first device to Ensi Home',
    category: 'Devices & Zones',
    author: {
      name: 'Jane Doe',
      avatar: '/placeholder.jpg?height=40&width=40',
      bio: 'Jane is a smart home expert with over 5 years of experience in IoT technologies.',
    },
    publishDate: '2023-05-15',
    lastUpdated: '2023-06-01',
    estimatedReadTime: '5 min',
    tags: ['devices', 'setup', 'beginner'],
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        type: 'paragraph',
        content:
          'Ensi Home can control many devices from various brands simultaneously. Setting up new devices is straightforward. Follow the instructions below to get started.',
      },
      {
        id: 'video-tutorial',
        title: 'Video Tutorial',
        type: 'video',
        content: { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      },
      {
        id: 'pairing-instructions',
        title: 'Pairing Instructions',
        type: 'list',
        content: [
          'Open the Ensi Home app and tap Devices in the tab bar below.',
          'Tap the + symbol in the top right corner and choose New Device.',
          'Search for the brand name of your device and select the app corresponding to it.',
          "Found the device you'd like to add? Tap its icon, confirm to continue, and tap Connect.",
          'Follow the on-screen instructions.',
        ],
      },
      {
        id: 'important-note',
        title: 'Important Note',
        type: 'note',
        content:
          "Every device requires a different method of adding it to Ensi Home. Follow the on-screen instructions, and you'll be set in no time.",
      },
    ],
    relatedArticles: [
      {
        title: 'Using Zone Activity',
        slug: 'using-zone-activity',
        thumbnail: '/placeholder.jpg?height=80&width=120',
      },
      {
        title: 'Customizing Zones',
        slug: 'customizing-zones',
        thumbnail: '/placeholder.jpg?height=80&width=120',
      },
      {
        title: 'Troubleshooting device connections',
        slug: 'troubleshooting-device-connections',
        thumbnail: '/placeholder.jpg?height=80&width=120',
      },
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Breadcrumb: React.FC<{
  category: string;
  title: string;
  articles: string;
}> = ({ category, title, articles }) => (
  <motion.div variants={itemVariants} className="mb-6 text-sm">
    <Link
      href="/knowledge-base/technical-knowledge-base"
      className="text-blue-500 hover:underline"
    >
      Ensi Home Support
    </Link>
    <ChevronRight className="mx-2 inline-block size-4" />
    <Link
      href={`/knowledge-base/technical-knowledge-base/${articles}`}
      className="text-blue-500 hover:underline"
    >
      {category}
    </Link>
    <ChevronRight className="mx-2 inline-block size-4" />
    <span>{title}</span>
  </motion.div>
);

const ArticleHeader: React.FC<{
  title: string;
  estimatedReadTime: string;
  lastUpdated: string;
  tags: string[];
}> = ({ title, estimatedReadTime, lastUpdated, tags }) => (
  <>
    <motion.h1 variants={itemVariants} className="mb-4 text-4xl font-bold">
      {title}
    </motion.h1>
    <motion.div
      variants={itemVariants}
      className="mb-6 flex items-center text-sm text-gray-500"
    >
      <Clock className="mr-1 size-4" />
      <span>{estimatedReadTime} read</span>
      <Separator orientation="vertical" className="mx-2 h-4" />
      <span>Last updated: {lastUpdated}</span>
    </motion.div>
    <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="rounded bg-gray-200 px-2 py-1 text-sm text-gray-700"
        >
          <Tag className="mr-1 inline size-3" />
          {tag}
        </span>
      ))}
    </motion.div>
  </>
);

const TableOfContents: React.FC<{ sections: ArticleSection[] }> = ({
  sections,
}) => (
  <motion.div
    variants={itemVariants}
    className="mb-8 rounded-lg bg-gray-100 p-4"
  >
    <h2 className="mb-2 text-xl font-bold">Table of Contents</h2>
    <ul className="space-y-1">
      {sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} className="text-blue-500 hover:underline">
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ArticleSection: React.FC<{ section: ArticleSection }> = ({ section }) => {
  switch (section.type) {
    case 'paragraph':
      return (
        <div id={section.id} className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">{section.title}</h2>
          <p>{section.content as string}</p>
        </div>
      );
    case 'video':
      return (
        <div id={section.id} className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">{section.title}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={(section.content as { url: string }).url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    case 'list':
      return (
        <div id={section.id} className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">{section.title}</h2>
          <ol className="list-inside list-decimal space-y-2">
            {(section.content as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      );
    case 'note':
      return (
        <div id={section.id} className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">{section.title}</h2>
          <div className="border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-700">
            <p className="font-bold">Note:</p>
            <p>{section.content as string}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const FeedbackSection: React.FC = () => (
  <motion.div variants={itemVariants} className="mb-8">
    <h2 className="mb-4 text-2xl font-bold">Was this article helpful?</h2>
    <div className="flex space-x-4">
      <Button variant="outline" className="flex items-center">
        <ThumbsUp className="mr-2 size-4" />
        Yes
      </Button>
      <Button variant="outline" className="flex items-center">
        <ThumbsDown className="mr-2 size-4" />
        No
      </Button>
    </div>
  </motion.div>
);

const RelatedArticles: React.FC<{
  articles: RelatedArticle[];
  category: string;
}> = ({ articles, category }) => (
  <motion.div variants={itemVariants}>
    <h2 className="mb-4 text-2xl font-bold">Related articles</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {articles.map((article, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={120}
              height={80}
              className="mb-2 rounded"
            />
            <Link
              href={`/knowledge-base/technical-knowledge-base/${category}/${article.slug}`}
              className="text-blue-500 hover:underline"
            >
              {article.title}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </motion.div>
);

const AuthorBio: React.FC<{ author: ArticleContent['author'] }> = ({
  author,
}) => (
  <motion.div
    variants={itemVariants}
    className="mb-8 flex items-start space-x-4"
  >
    <Avatar>
      <AvatarImage src={author.avatar} alt={author.name} />
      <AvatarFallback>
        {author.name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </AvatarFallback>
    </Avatar>
    <div>
      <h3 className="font-bold">{author.name}</h3>
      <p className="text-sm text-gray-600">{author.bio}</p>
    </div>
  </motion.div>
);

export default function ArticlePage({
  params,
}: {
  params: { articles: string; article: string };
}) {
  const article = articleContent[params.article];
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 h-2 origin-left bg-blue-500"
      />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Breadcrumb
            category={article.category}
            title={article.title}
            articles={params.articles}
          />
          {/* <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              <Moon className="h-4 w-4" />
            </div>
          </div> */}
        </div>
        <ArticleHeader
          title={article.title}
          estimatedReadTime={article.estimatedReadTime}
          lastUpdated={article.lastUpdated}
          tags={article.tags}
        />
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search within this article..."
            className="w-full"
          />
        </div>
        <div className="mb-8 md:hidden">
          <TableOfContents sections={article.sections} />
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="hidden md:block md:w-1/4">
            <div className="sticky top-4">
              <TableOfContents sections={article.sections} />
            </div>
          </div>
          <div className="md:w-3/4">
            {article.sections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ArticleSection section={section} />
              </motion.div>
            ))}
            <AuthorBio author={article.author} />
            <FeedbackSection />
            <RelatedArticles
              articles={article.relatedArticles}
              category={params.articles}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
