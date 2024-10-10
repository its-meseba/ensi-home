'use client';

import { useRouter } from 'next/navigation'; // For Next.js 13+
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CurvedBackground,
  CurvedBackgroundParallax,
} from '@/components/common/CurvyBackground';

const categories = [
  {
    name: 'Getting Started',
    icon: 'home',
    articles: [
      'Setting up Ensi Home Box',
      'Setting up Ensi Home Pro (Early 2023)',
      'Setting up Ensi Home Pro (2016 – 2019)',
    ],
  },
  {
    name: 'Devices & Zones',
    icon: 'zap',
    articles: [
      'Connecting your first device to Ensi Home',
      'Using Zone Activity',
      'Customizing Zones',
      'Connecting Devices (16)',
    ],
  },
  {
    name: 'Flow',
    icon: 'activity',
    articles: [
      'Creating your first Flow',
      'Starting a Flow from an iOS or Android widget',
      'Sharing Flows',
      'Using Or and Else in Flows',
    ],
  },
  {
    name: 'Insights',
    icon: 'bar-chart-2',
    articles: ['Viewing charts with Ensi Home Insights', 'Downloading charts'],
  },
  {
    name: 'Energy',
    icon: 'battery',
    articles: [
      'Saving energy with Ensi Home Energy',
      'Monitoring your batteries in Ensi Home Energy',
    ],
  },
  {
    name: 'Apps',
    icon: 'smartphone',
    articles: ['Installing Apps on Ensi Home', 'Updating Apps on Ensi Home'],
  },
];

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

export default function KnowledgeBaseClient() {
  const router = useRouter();

  return (
    <div className="bg-background relative min-h-screen">
      <CurvedBackgroundParallax
        imageSrc="/images/pages/knowledge-base/technical-knowledge-base/cover.jpg"
        title="Ensi Home Knowledge Base"
      />
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-8"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-between"
          >
            <h2 className="text-primary text-3xl font-bold">
              Ensi Home Support
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mb-12 flex items-center space-x-2"
          >
            <div className="relative grow">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="How can we help you?"
                className="w-full rounded-full py-2 pl-10 pr-4"
              />
            </div>
            <Button className="rounded-full">Search</Button>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="cursor-pointer transition-shadow duration-200 hover:shadow-lg"
                  onClick={() =>
                    router.push(
                      `/knowledge-base/technical-knowledge-base/${category.name
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .replace('&', '-')}`
                    )
                  }
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className={`icon-${category.icon}`}></span>
                      <span>{category.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li
                          key={articleIndex}
                          className="text-sm text-gray-600"
                        >
                          {article}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/knowledge-base/technical-knowledge-base/${category.name
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .replace('&', '-')}`}
                      className="mt-4 block text-sm text-blue-500 hover:underline"
                    >
                      All articles in {category.name}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
