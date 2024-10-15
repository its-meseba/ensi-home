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
      <h3 className="mx-auto max-w-7xl pl-4 font-sans text-2xl tracking-tighter sm:text-4xl md:text-6xl lg:text-6xl">
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
    src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_2_category(),
    title: m.main_appleCards_card_2_title(),
    src: 'https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_3_category(),
    title: m.main_appleCards_card_3_title(),
    src: 'https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },

  {
    category: m.main_appleCards_card_4_category(),
    title: m.main_appleCards_card_4_title(),
    src: 'https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_5_category(),
    title: m.main_appleCards_card_5_title(),
    src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },
  {
    category: m.main_appleCards_card_6_category(),
    title: m.main_appleCards_card_6_title(),
    src: 'https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },
];
