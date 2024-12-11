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
import {
  CurvedBackground,
  CurvedBackgroundParallax,
} from '@/components/common/CurvyBackground';
import * as m from '@/paraglide/messages';

const categories = [
  {
    title: m.faqSection_categories_getting_started_title(),
    icon: <Home className="size-5" />,
    items: [
      m.faqSection_categories_getting_started_item_1(),
      m.faqSection_categories_getting_started_item_2(),
      m.faqSection_categories_getting_started_item_3(),
    ],
    link: m.faqSection_categories_getting_started_link(),
  },
  {
    title: m.faqSection_categories_mobile_application_title(),
    icon: <Smartphone className="size-5" />,
    items: [
      m.faqSection_categories_mobile_application_item_1(),
      m.faqSection_categories_mobile_application_item_2(),
      m.faqSection_categories_mobile_application_item_3(),
    ],
    link: m.faqSection_categories_mobile_application_link(),
  },
  {
    title: m.faqSection_categories_ai_voice_assistant_title(),
    icon: <Mic className="size-5" />,
    items: [
      m.faqSection_categories_ai_voice_assistant_item_1(),
      m.faqSection_categories_ai_voice_assistant_item_2(),
      m.faqSection_categories_ai_voice_assistant_item_3(),
    ],
    link: m.faqSection_categories_ai_voice_assistant_link(),
  },
  {
    title: m.faqSection_categories_security_title(),
    icon: <Shield className="size-5" />,
    items: [
      m.faqSection_categories_security_item_1(),
      m.faqSection_categories_security_item_2(),
      m.faqSection_categories_security_item_3(),
    ],
    link: m.faqSection_categories_security_link(),
  },
  {
    title: m.faqSection_categories_energy_management_title(),
    icon: <Zap className="size-5" />,
    items: [
      m.faqSection_categories_energy_management_item_1(),
      m.faqSection_categories_energy_management_item_2(),
      m.faqSection_categories_energy_management_item_3(),
    ],
    link: m.faqSection_categories_energy_management_link(),
  },
  {
    title: m.faqSection_categories_advanced_settings_title(),
    icon: <Settings className="size-5" />,
    items: [
      m.faqSection_categories_advanced_settings_item_1(),
      m.faqSection_categories_advanced_settings_item_2(),
      m.faqSection_categories_advanced_settings_item_3(),
    ],
    link: m.faqSection_categories_advanced_settings_link(),
  },
];

const faqItems = [
  {
    question: m.faqSection_faq_question_1(),
    answer: m.faqSection_faq_answer_1(),
  },
  {
    question: m.faqSection_faq_question_2(),
    answer: m.faqSection_faq_answer_2(),
  },
  {
    question: m.faqSection_faq_question_3(),
    answer: m.faqSection_faq_answer_3(),
  },
  {
    question: m.faqSection_faq_question_4(),
    answer: m.faqSection_faq_answer_4(),
  },
  {
    question: m.faqSection_faq_question_5(),
    answer: m.faqSection_faq_answer_5(),
  },
  {
    question: m.faqSection_faq_question_6(),
    answer: m.faqSection_faq_answer_6(),
  },
  {
    question: m.faqSection_faq_question_7(),
    answer: m.faqSection_faq_answer_7(),
  },
  {
    question: m.faqSection_faq_question_8(),
    answer: m.faqSection_faq_answer_8(),
  },
  {
    question: m.faqSection_faq_question_9(),
    answer: m.faqSection_faq_answer_9(),
  },
  {
    question: m.faqSection_faq_question_10(),
    answer: m.faqSection_faq_answer_10(),
  },
  // ... (diğer SSS öğeleri)
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
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <CurvedBackgroundParallax
        imageSrc="/images/pages/knowledge-base/faq/faq.png"
        title={m.faqSection_page_title()}
      />

      <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-16">
        <motion.h1
          className="mb-12 text-4xl font-bold text-gray-800"
          variants={itemVariants}
        >
          {m.faqSection_header_text()}
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
            {m.faqSection_heading_browse_by_category()}
          </motion.h2>
          <motion.div
            className="mb-6 flex items-center"
            variants={itemVariants}
          >
            <Search className="mr-2 size-5 text-gray-400" />
            <Input
              type="text"
              placeholder={m.faqSection_search_placeholder()}
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
                {m.faqSection_button_show_more_questions()}
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* <motion.h2
          className="mb-8 text-3xl font-bold text-gray-800"
          variants={itemVariants}
        >
          {m.faqSection_heading_browse_by_category()}
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
        </motion.div> */}

        {/* <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            {m.faqSection_heading_cant_find()}
          </h3>
          <Button asChild>
            <Link href="/contact">{m.faqSection_button_contact_us()}</Link>
          </Button>
        </motion.div> */}
      </div>
    </motion.div>
  );
}
