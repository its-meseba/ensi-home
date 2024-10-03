import {
  AppWindow,
  BarChart2,
  GitBranch,
  Home,
  Layers,
  Zap,
} from 'lucide-react';

import FaqSectionOne from '@/components/pages/faq/faq';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const categories = [
  {
    title: 'Getting Started',
    icon: <Home className="size-5" />,
    items: [
      'Setting up Homey Bridge',
      'Setting up Homey Pro (Early 2023)',
      'Setting up Homey Pro (2016 – 2019)',
    ],
    link: 'All articles in Getting Started',
  },
  {
    title: 'Devices & Zones',
    icon: <Layers className="size-5" />,
    items: [
      'Connecting your first device to Homey',
      'Using Zone Activity',
      'Customizing Zones',
      'Connecting Devices (16)',
    ],
    link: 'All articles in Devices & Zones',
  },
  {
    title: 'Flow',
    icon: <GitBranch className="size-5" />,
    items: [
      'Creating your first Flow',
      'Starting a Flow from an iOS or Android widget',
      'Sharing Flows',
      'Using Or and Else in Flows',
    ],
    link: 'All articles in Flow',
  },
  {
    title: 'Insights',
    icon: <BarChart2 className="size-5" />,
    items: ['Viewing charts with Homey Insights'],
    link: 'All articles in Insights',
  },
  {
    title: 'Energy',
    icon: <Zap className="size-5" />,
    items: ['Saving energy with Homey Energy'],
    link: 'All articles in Energy',
  },
  {
    title: 'Apps',
    icon: <AppWindow className="size-5" />,
    items: ['Installing Apps on Homey'],
    link: 'All articles in Apps',
  },
];

export default function FAQPage() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold text-gray-800">
          Sıkça Sorulan Sorular
        </h2>
        <FaqSectionOne />
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="cursor-pointer bg-white shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-6 inline-block text-base font-medium text-blue-400 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-600"
                >
                  {category.link} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Purpose: To answer common questions from construction companies.

// Components:

// Categorized Questions:

// General
// Technical
// Process
// Expandable question and answer sections.
// Search Functionality:

// Quickly find relevant FAQs.
// Contact Prompt:

// Message: "Can't find what you're looking for?"
// CTA Button: "Contact Us" - links to /contact/
