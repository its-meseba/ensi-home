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
              src="/images/pages/main/apple-cards/warm-home-3.png"
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
const PersonalizedExperienceComponent = () => {
  return (
    <>
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#F5F5F7] to-[#E0E0E2] p-8 shadow-lg md:p-16">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800 md:text-3xl">
                {m.main_appleCards_card_1_inside_title()}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600">
                {m.main_appleCards_card_1_inside_description()}
              </p>
            </div>
            <ul className="list-none space-y-3 pl-4">
              {[
                m.main_appleCards_card_1_inside_list_1(),
                m.main_appleCards_card_1_inside_list_2(),
                m.main_appleCards_card_1_inside_list_3(),
                m.main_appleCards_card_1_inside_list_4(),
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base italic leading-relaxed text-neutral-500">
              {m.main_appleCards_card_1_inside_footer()}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pages/main/apple-cards/warm-home-3.png"
              alt={m.main_appleCards_card_1_title()}
              height="500"
              width="500"
              className="mx-auto size-full rounded-xl object-contain shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const AlwaysConnectedContent = () => {
  return (
    <>
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#F5F5F7] to-[#E0E0E2] p-8 shadow-lg md:p-16">
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800 md:text-3xl">
                {m.main_appleCards_card_2_inside_title()}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600">
                {m.main_appleCards_card_2_inside_description()}
              </p>
            </div>
            <ul className="list-none space-y-3 pl-4">
              {[
                m.main_appleCards_card_2_inside_list_1(),
                m.main_appleCards_card_2_inside_list_2(),
                m.main_appleCards_card_2_inside_list_3(),
                m.main_appleCards_card_2_inside_list_4(),
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base italic leading-relaxed text-neutral-500">
              {m.main_appleCards_card_2_inside_footer()}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pages/main/apple-cards/home-life.png"
              alt={m.main_appleCards_card_2_title()}
              height="500"
              width="500"
              className="mx-auto size-full rounded-xl object-contain shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const EfficiencyContent = () => {
  return (
    <>
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#F5F5F7] to-[#E0E0E2] p-8 shadow-lg md:p-16">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800 md:text-3xl">
                {m.main_appleCards_card_3_inside_title()}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600">
                {m.main_appleCards_card_3_inside_description()}
              </p>
            </div>
            <ul className="list-none space-y-3 pl-4">
              {[
                m.main_appleCards_card_3_inside_list_1(),
                m.main_appleCards_card_3_inside_list_2(),
                m.main_appleCards_card_3_inside_list_3(),
                m.main_appleCards_card_3_inside_list_4(),
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base italic leading-relaxed text-neutral-500">
              {m.main_appleCards_card_3_inside_footer()}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pages/main/apple-cards/wind-turbine.png"
              alt={m.main_appleCards_card_3_title()}
              height="500"
              width="500"
              className="mx-auto size-full rounded-xl object-contain shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const AdvancedVoiceAssistantContent = () => {
  return (
    <>
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#F5F5F7] to-[#E0E0E2] p-8 shadow-lg md:p-16">
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800 md:text-3xl">
                {m.main_appleCards_card_4_inside_title()}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600">
                {m.main_appleCards_card_4_inside_description()}
              </p>
            </div>
            <ul className="list-none space-y-3 pl-4">
              {[
                m.main_appleCards_card_4_inside_list_1(),
                m.main_appleCards_card_4_inside_list_2(),
                m.main_appleCards_card_4_inside_list_3(),
                m.main_appleCards_card_4_inside_list_4(),
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base italic leading-relaxed text-neutral-500">
              {m.main_appleCards_card_4_inside_footer()}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pages/main/apple-cards/connected-ai-assistant.png"
              alt={m.main_appleCards_card_4_title()}
              height="500"
              width="500"
              className="mx-auto size-full rounded-xl object-contain shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const AutomationAIContent = () => {
  return (
    <>
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#F5F5F7] to-[#E0E0E2] p-8 shadow-lg md:p-16">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800 md:text-3xl">
                {m.main_appleCards_card_5_inside_title()}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600">
                {m.main_appleCards_card_5_inside_description()}
              </p>
            </div>
            <ul className="list-none space-y-3 pl-4">
              {[
                m.main_appleCards_card_5_inside_list_1(),
                m.main_appleCards_card_5_inside_list_2(),
                m.main_appleCards_card_5_inside_list_3(),
                m.main_appleCards_card_5_inside_list_4(),
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base italic leading-relaxed text-neutral-500">
              {m.main_appleCards_card_5_inside_footer()}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pages/main/apple-cards/routine-tea.png"
              alt={m.main_appleCards_card_5_title()}
              height="500"
              width="500"
              className="mx-auto size-full rounded-xl object-contain shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SecurityContent = () => {
  return (
    <>
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-[#F5F5F7] to-[#E0E0E2] p-8 shadow-lg md:p-16">
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <div className="space-y-8 md:w-1/2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-800 md:text-3xl">
                {m.main_appleCards_card_6_inside_title()}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600">
                {m.main_appleCards_card_6_inside_description()}
              </p>
            </div>
            <ul className="list-none space-y-3 pl-4">
              {[
                m.main_appleCards_card_6_inside_list_1(),
                m.main_appleCards_card_6_inside_list_2(),
                m.main_appleCards_card_6_inside_list_3(),
                m.main_appleCards_card_6_inside_list_4(),
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base italic leading-relaxed text-neutral-500">
              {m.main_appleCards_card_6_inside_footer()}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pages/main/apple-cards/home.png"
              alt={m.main_appleCards_card_6_title()}
              height="500"
              width="500"
              className="mx-auto size-full rounded-xl object-contain shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    category: m.main_appleCards_card_1_category(),
    title: m.main_appleCards_card_1_title(),
    src: '/images/pages/main/apple-cards/warm-home-3.png',
    content: <PersonalizedExperienceComponent />,
  },
  {
    category: m.main_appleCards_card_2_category(),
    title: m.main_appleCards_card_2_title(),
    src: '/images/pages/main/apple-cards/home-life.png',
    content: <AlwaysConnectedContent />,
  },
  {
    category: m.main_appleCards_card_3_category(),
    title: m.main_appleCards_card_3_title(),
    src: '/images/pages/main/apple-cards/wind-turbine.png',
    content: <EfficiencyContent />,
  },
  {
    category: m.main_appleCards_card_4_category(),
    title: m.main_appleCards_card_4_title(),
    src: '/images/pages/main/apple-cards/connected-ai-assistant.png',
    content: <AdvancedVoiceAssistantContent />,
  },
  {
    category: m.main_appleCards_card_5_category(),
    title: m.main_appleCards_card_5_title(),
    src: '/images/pages/main/apple-cards/routine-tea.png',
    content: <AutomationAIContent />,
  },
  {
    category: m.main_appleCards_card_6_category(),
    title: m.main_appleCards_card_6_title(),
    src: '/images/pages/main/apple-cards/home.png',
    content: <SecurityContent />,
  },
];
