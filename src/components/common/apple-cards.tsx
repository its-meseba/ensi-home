'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import * as m from '@/paraglide/messages';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="size-full py-20">
      <h3 className="mx-auto max-w-7xl pl-4 font-sans text-xl tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
        {m.main_appleCards_title()}
      </h3>

      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14"
          >
            <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl">
              <span className="font-bold text-neutral-700">
                {m.faqSectionOne_question0()}
              </span>{' '}
              {m.faqSectionOne_answer0()}
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="mx-auto size-full object-contain md:size-1/2"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: m.main_appleCards_card_1_category(),
    title: m.main_appleCards_card_1_title(),
    src: '/images/pages/main/apple-cards/warm-home-3.png',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_2_category(),
    title: m.main_appleCards_card_2_title(),
    src: '/images/pages/main/apple-cards/home-life.png',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_3_category(),
    title: m.main_appleCards_card_3_title(),
    src: '/images/pages/main/apple-cards/wind-turbine.png',
    content: <DummyContent />,
  },

  {
    category: m.main_appleCards_card_4_category(),
    title: m.main_appleCards_card_4_title(),
    src: '/images/pages/main/apple-cards/connected-ai-assistant.png',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_5_category(),
    title: m.main_appleCards_card_5_title(),
    src: '/images/pages/main/apple-cards/routine-tea.png',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_6_category(),
    title: m.main_appleCards_card_6_title(),
    src: '/images/pages/main/apple-cards/home.png',
    content: <DummyContent />,
  },
];
