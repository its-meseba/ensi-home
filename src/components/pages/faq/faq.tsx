'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import * as m from '@/paraglide/messages';
import { Faq } from '@/types/faq';

export default function FaqSectionOne() {
  const faqListLocal: Faq[] = [
    {
      id: '0',
      question: m.faqSectionOne_question0(),
      answer: m.faqSectionOne_answer0(),
    },
    {
      id: '1',
      question: m.faqSectionOne_question1(),
      answer: m.faqSectionOne_answer1(),
    },
    {
      id: '2',
      question: m.faqSectionOne_question2(),
      answer: m.faqSectionOne_answer2(),
    },
    {
      id: '3',
      question: m.faqSectionOne_question3(),
      answer: m.faqSectionOne_answer3(),
    },
    {
      id: '4',
      question: m.faqSectionOne_question4(),
      answer: m.faqSectionOne_answer4(),
    },
    {
      id: '5',
      question: m.faqSectionOne_question5(),
      answer: m.faqSectionOne_answer5(),
    },
    {
      id: '6',
      question: m.faqSectionOne_question6(),
      answer: m.faqSectionOne_answer6(),
    },
    {
      id: '7',
      question: m.faqSectionOne_question7(),
      answer: m.faqSectionOne_answer7(),
    },
    {
      id: '8',
      question: m.faqSectionOne_question8(),
      answer: m.faqSectionOne_answer8(),
    },
    {
      id: '9',
      question: m.faqSectionOne_question9(),
      answer: m.faqSectionOne_answer9(),
    },
    {
      id: '10',
      question: m.faqSectionOne_question10(),
      answer: m.faqSectionOne_answer10(),
    },
    {
      id: '11',
      question: m.faqSectionOne_question11(),
      answer: m.faqSectionOne_answer11(),
    },
    {
      id: '12',
      question: m.faqSectionOne_question12(),
      answer: m.faqSectionOne_answer12(),
    },
    {
      id: '13',
      question: m.faqSectionOne_question13(),
      answer: m.faqSectionOne_answer13(),
    },
    {
      id: '14',
      question: m.faqSectionOne_question14(),
      answer: m.faqSectionOne_answer14(),
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="mb-12 w-4/5 bg-white sm:w-full md:w-4/5"
    >
      {faqListLocal.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={`item-${faq.id}`}
          className="border-b"
        >
          <AccordionTrigger className="p-4 text-lg font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="p-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
