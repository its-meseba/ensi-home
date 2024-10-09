'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Smartphone,
  Mic,
  Shield,
  Zap,
  Settings,
  Search,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaqVanishingInput } from '@/components/pages/knowledge-base/faq/faq-vanishing-input';
import Link from 'next/link';

const categories = [
  {
    title: 'Getting Started',
    icon: <Home className="size-5" />,
    items: [
      'How do I set up my Ensi Home system?',
      'What devices are compatible with Ensi Home?',
      'How to connect my first smart device?',
    ],
    link: 'All articles in Getting Started',
  },
  {
    title: 'Mobile Application',
    icon: <Smartphone className="size-5" />,
    items: [
      'How to download the Ensi Home app?',
      'Setting up remote access',
      'Customizing your dashboard',
    ],
    link: 'All articles about Mobile Application',
  },
  {
    title: 'AI Voice Assistant',
    icon: <Mic className="size-5" />,
    items: [
      'How to activate the AI voice assistant?',
      'Voice commands for Ensi Home',
      'Personalizing your AI assistant',
    ],
    link: 'All articles about AI Voice Assistant',
  },
  {
    title: 'Security',
    icon: <Shield className="size-5" />,
    items: [
      'Ensi Home security features',
      'Setting up smart locks',
      'Configuring security cameras',
    ],
    link: 'All articles about Security',
  },
  {
    title: 'Energy Management',
    icon: <Zap className="size-5" />,
    items: [
      'Monitoring energy consumption',
      'Setting up energy-saving routines',
      'Integrating solar panels with Ensi Home',
    ],
    link: 'All articles about Energy Management',
  },
  {
    title: 'Advanced Settings',
    icon: <Settings className="size-5" />,
    items: [
      'Configuring Ensi Home Box',
      'Creating custom automations',
      'Integrating third-party devices',
    ],
    link: 'All articles about Advanced Settings',
  },
];

const faqItems = [
  {
    question: 'What is Ensi Home?',
    answer:
      'Ensi Home is a comprehensive smart home system that integrates various smart devices, AI voice assistance, and energy management features to create a more comfortable, efficient, and secure living environment.',
  },
  {
    question: 'How does the Ensi Home Box work?',
    answer:
      'The Ensi Home Box serves as the central hub for your smart home system. It connects and controls all your smart devices, processes data locally for enhanced privacy, and enables seamless integration between different smart home components.',
  },
  {
    question: "Can I control my Ensi Home system when I'm away?",
    answer:
      'Yes, you can control your Ensi Home system remotely using the Ensi Home mobile application. This allows you to monitor and manage your smart home from anywhere with an internet connection.',
  },
  {
    question: 'How secure is the Ensi Home system?',
    answer:
      "Ensi Home prioritizes security with end-to-end encryption, regular security updates, and local data processing. We also offer advanced security features like smart locks and camera integration to enhance your home's physical security.",
  },
  {
    question: 'What energy-saving features does Ensi Home offer?',
    answer:
      'Ensi Home provides various energy-saving features, including smart thermostat control, automated lighting schedules, energy consumption monitoring, and integration with solar panel systems for optimized energy usage.',
  },
  {
    question: 'How do I set up my Ensi Home system?',
    answer:
      'Setting up your Ensi Home system is easy. Start by installing the Ensi Home Box, download the mobile app, and follow the step-by-step instructions to connect your smart devices and configure your preferences.',
  },
  {
    question: 'What types of devices can I connect to Ensi Home?',
    answer:
      'Ensi Home is compatible with a wide range of smart devices, including lights, thermostats, locks, cameras, sensors, and appliances from various manufacturers. Check our compatibility list for specific device models.',
  },
  {
    question: 'How does the AI voice assistant work?',
    answer:
      'The Ensi Home AI voice assistant uses natural language processing to understand and execute your voice commands. You can control devices, ask questions, and set up routines using voice interactions.',
  },
  {
    question: 'Can Ensi Home integrate with other smart home platforms?',
    answer:
      'Yes, Ensi Home can integrate with popular smart home platforms like Google Home, Amazon Alexa, and Apple HomeKit, allowing you to use your preferred voice assistant and expand your smart home ecosystem.',
  },
  {
    question: 'What kind of customer support does Ensi Home provide?',
    answer:
      'Ensi Home offers comprehensive customer support, including 24/7 online chat, phone support, email assistance, and an extensive knowledge base. We also provide professional installation services if needed.',
  },
  // ... (remaining 15 FAQ items)
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

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedFAQs = showAllQuestions
    ? filteredFAQs
    : filteredFAQs.slice(0, 10);

  return (
    <motion.div
      className="w-full bg-gradient-to-b from-gray-50 to-gray-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-16">
        <motion.h1
          className="mb-12 text-4xl font-bold text-gray-800"
          variants={itemVariants}
        >
          Ensi Home Knowledge Base
        </motion.h1>

        <motion.div className="w-full max-w-2xl" variants={itemVariants}>
          <FaqVanishingInput className="mb-12" />
        </motion.div>

        <motion.div
          className="my-12 w-full max-w-2xl"
          variants={containerVariants}
        >
          <motion.h2
            className="mb-6 text-2xl font-bold text-gray-800"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="mb-6 flex items-center"
            variants={itemVariants}
          >
            <Search className="mr-2 size-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </motion.div>
          <AnimatePresence>
            {displayedFAQs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mb-4 overflow-hidden">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() =>
                      setExpandedItem(expandedItem === index ? null : index)
                    }
                  >
                    <CardTitle className="flex items-center justify-between text-lg">
                      {item.question}
                      {expandedItem === index ? (
                        <ChevronUp className="size-5" />
                      ) : (
                        <ChevronDown className="size-5" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent>
                          <p className="text-gray-600">{item.answer}</p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
          {!showAllQuestions && filteredFAQs.length > 10 && (
            <motion.div className="mt-6 text-center" variants={itemVariants}>
              <Button onClick={() => setShowAllQuestions(true)}>
                Show More Questions
              </Button>
            </motion.div>
          )}
        </motion.div>

        <motion.h2
          className="mb-8 text-3xl font-bold text-gray-800"
          variants={itemVariants}
        >
          Browse by Category
        </motion.h2>
        <motion.div
          className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="cursor-pointer bg-white shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
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
                  <Link
                    href="#"
                    className="mt-6 inline-block text-base font-medium text-blue-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-800"
                  >
                    {category.link} →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
