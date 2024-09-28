'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Faq } from '@/types/faq';

export default function FaqSectionOne() {
  const faqListLocal: Faq[] = [
    // {
    //   id: "0",
    //   question: "faq_faqSectionOne_question0",
    //   answer: "faq_faqSectionOne_answer0",
    // },
    // {
    //   id: "1",
    //   question: t("faq_faqSectionOne_question1"),
    //   answer: t("faq_faqSectionOne_answer1"),
    // },
    // {
    //   id: "2",
    //   question: t("faq_faqSectionOne_question2"),
    //   answer: t("faq_faqSectionOne_answer2"),
    // },
    // {
    //   id: "3",
    //   question: t("faq_faqSectionOne_question3"),
    //   answer: t("faq_faqSectionOne_answer3"),
    // },
    // {
    //   id: "4",
    //   question: t("faq_faqSectionOne_question4"),
    //   answer: t("faq_faqSectionOne_answer4"),
    // },
    // {
    //   id: "5",
    //   question: t("faq_faqSectionOne_question5"),
    //   answer: t("faq_faqSectionOne_answer5"),
    // },
    // {
    //   id: "6",
    //   question: t("faq_faqSectionOne_question6"),
    //   answer: t("faq_faqSectionOne_answer6"),
    // },
    // {
    //   id: "7",
    //   question: t("faq_faqSectionOne_question7"),
    //   answer: t("faq_faqSectionOne_answer7"),
    // },
    // {
    //   id: "8",
    //   question: t("faq_faqSectionOne_question8"),
    //   answer: t("faq_faqSectionOne_answer8"),
    // },
    // {
    //   id: "9",
    //   question: t("faq_faqSectionOne_question9"),
    //   answer: t("faq_faqSectionOne_answer9"),
    // },
    // {
    //   id: "10",
    //   question: t("faq_faqSectionOne_question10"),
    //   answer: t("faq_faqSectionOne_answer10"),
    // },
    // {
    //   id: "11",
    //   question: t("faq_faqSectionOne_question11"),
    //   answer: t("faq_faqSectionOne_answer11"),
    // },
    // {
    //   id: "12",
    //   question: t("faq_faqSectionOne_question12"),
    //   answer: t("faq_faqSectionOne_answer12"),
    // },
    // {
    //   id: "13",
    //   question: t("faq_faqSectionOne_question13"),
    //   answer: t("faq_faqSectionOne_answer13"),
    // },
    // {
    //   id: "14",
    //   question: t("faq_faqSectionOne_question14"),
    //   answer: t("faq_faqSectionOne_answer14"),
    // },
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
