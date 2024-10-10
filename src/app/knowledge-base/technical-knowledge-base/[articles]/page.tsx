'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const categories = {
  'getting-started': {
    name: 'Getting Started',
    icon: 'home',
    sections: [
      {
        name: 'Setup Guides',
        articles: [
          'Setting up Ensi Home Box',
          'Setting up Ensi Home Pro (Early 2023)',
          'Setting up Ensi Home Pro (2016 – 2019)',
          'Connecting Ensi Home to your Wi-Fi network',
          'Updating Ensi Home firmware',
        ],
      },
      {
        name: 'First Steps',
        articles: [
          'Creating your Ensi Home account',
          'Downloading the Ensi Home app',
          'Navigating the Ensi Home dashboard',
          "Understanding Ensi Home's capabilities",
        ],
      },
    ],
  },
  'devices-zones': {
    name: 'Devices & Zones',
    icon: 'zap',
    sections: [
      {
        name: 'Device Management',
        articles: [
          'Connecting your first device to Ensi Home',
          'Adding Z-Wave devices',
          'Adding Zigbee devices',
          'Adding Wi-Fi devices',
          'Troubleshooting device connections',
        ],
      },
      {
        name: 'Zones',
        articles: [
          'Creating and managing zones',
          'Using Zone Activity',
          'Customizing Zones',
          'Assigning devices to zones',
        ],
      },
      {
        name: 'Popular Devices',
        articles: [
          'Connecting Philips Hue with Ensi Home',
          'Connecting Sonos with Ensi Home',
          'Connecting Nest devices with Ensi Home',
          'Connecting IKEA Trådfri with Ensi Home',
        ],
      },
    ],
  },
  flow: {
    name: 'Flow',
    icon: 'activity',
    sections: [
      {
        name: 'Basics',
        articles: [
          'Creating your first Flow',
          'Understanding Flow cards',
          'Flow triggers, conditions, and actions',
          'Testing and debugging Flows',
        ],
      },
      {
        name: 'Advanced Flow Techniques',
        articles: [
          'Using variables in Flows',
          'Creating complex multi-step Flows',
          'Using Or and Else in Flows',
          'Creating Flows with time-based triggers',
        ],
      },
      {
        name: 'Flow Management',
        articles: [
          'Organizing and categorizing Flows',
          'Sharing Flows with other users',
          'Importing and exporting Flows',
          'Starting a Flow from an iOS or Android widget',
        ],
      },
    ],
  },
  insights: {
    name: 'Insights',
    icon: 'bar-chart-2',
    sections: [
      {
        name: 'Data Visualization',
        articles: [
          'Viewing charts with Ensi Home Insights',
          'Understanding different chart types',
          'Customizing chart appearance',
          'Analyzing long-term trends',
        ],
      },
      {
        name: 'Data Management',
        articles: [
          'Configuring data logging for devices',
          'Setting up custom Insights',
          'Downloading charts and raw data',
          'Managing Insights storage',
        ],
      },
    ],
  },
  energy: {
    name: 'Energy',
    icon: 'battery',
    sections: [
      {
        name: 'Energy Monitoring',
        articles: [
          'Setting up Ensi Home Energy',
          'Connecting smart meters to Ensi Home',
          'Monitoring real-time energy consumption',
          'Understanding your energy reports',
        ],
      },
      {
        name: 'Energy Saving',
        articles: [
          'Saving energy with Ensi Home Energy',
          'Creating energy-saving Flows',
          'Optimizing device schedules for energy efficiency',
          'Using Insights to identify energy-saving opportunities',
        ],
      },
      {
        name: 'Battery Management',
        articles: [
          'Monitoring your batteries in Ensi Home Energy',
          'Setting up low battery alerts',
          'Maximizing battery life for your devices',
          'Replacing batteries in Ensi Home-connected devices',
        ],
      },
    ],
  },
  apps: {
    name: 'Apps',
    icon: 'smartphone',
    sections: [
      {
        name: 'App Management',
        articles: [
          'Understanding Ensi Home Apps',
          'Finding and installing Apps on Ensi Home',
          'Updating Apps on Ensi Home',
          'Removing or disabling Apps',
        ],
      },
      {
        name: 'Popular Apps',
        articles: [
          'Using the Spotify App with Ensi Home',
          'Controlling your TV with the Ensi Home App',
          'Integrating weather forecasts with Ensi Home',
          'Using voice assistants with Ensi Home',
        ],
      },
      {
        name: 'Troubleshooting',
        articles: [
          'Resolving App conflicts',
          'Debugging App issues',
          'Contacting App developers for support',
          'Reporting bugs in Ensi Home Apps',
        ],
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

export default function CategoryPage({
  params,
}: {
  params: { articles: string };
}) {
  const category = categories[params.articles];
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <Link
          href="/knowledge-base/technical-knowledge-base"
          className="text-blue-500 hover:underline"
        >
          Ensi Support
        </Link>
        <ChevronRight className="mx-2 inline-block size-4" />
        <span>{category.name}</span>
      </motion.div>
      <motion.h1 variants={itemVariants} className="mb-8 text-3xl font-bold">
        {category.name}
      </motion.h1>
      {category.sections.map((section, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">{section.name}</h2>
              <ul className="space-y-2">
                {section.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <Link
                      href={`/knowledge-base/technical-knowledge-base/${params.articles}/${article.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-500 hover:underline"
                    >
                      {article}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="mt-4 block text-blue-500 hover:underline"
              >
                All {section.articles.length} articles in {section.name}
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
