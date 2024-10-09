'use client';

import {
  ContentSection,
  ContentItemProps,
} from '../components/common/content-section';
import { IntroHeader } from '../components/common/intro-header';
import AiAssistant from '@/components/pages/box/ai-assistant';
import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { EnsiHomeOrchestrator } from '@/components/pages/home/orchestrator';
import { AppleCardsCarouselDemo } from '@/components/common/apple-cards';
import {
  ThreeComponentiPhoneMockup,
  TwoComponentiPhoneMockup,
} from '@/components/common/apple-mockup';
import { VisitorTypeModal } from '@/components/common/VisitorTypeModal';
import { VisitorTypeSelector } from '@/components/common/VisitorTypeSelector';
import { useVisitorType } from '@/context/VisitorTypeContext';
import CustomerBenefits from '@/components/pages/home/CustomerBenefits';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import References from '@/components/pages/home/References';
import ApplyComponent from '@/components/pages/home/ApplyNow';
import BlogPostsSection from '@/components/pages/home/BlogAndNews';

export default function MainPage() {
  const items: ContentItemProps[] = [
    {
      id: 'mobile-app',
      title: 'Mobile Application',
      buttonText: 'Uygulamayi Gor',
      href: '/ensi-home/mobile-application',
      component: <MobileApp />,
    },
    {
      id: 'box',
      title: 'Box',
      buttonText: 'Uygulamayi Gor',
      href: '/ensi-home/box',
      component: <EnsiHomeBox />,
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant',
      buttonText: 'Asistani Gor',
      href: '/ensi-home/ai-voice-assistant',
      component: <AiAssistantPart />,
    },
  ];

  const backgroundMode =
    'dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col';
  const backgroundAssistance =
    'absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_700%,black)]';

  return (
    <section className={`min-h-screen from-gray-100 to-gray-200 px-4 py-12 `}>
      {/* <VisitorTypeModal /> */}

      {/* <div className={backgroundAssistance} /> */}
      {/* 0. sen kimsin? diye site acildiginda soru sorulacak */}
      {/* First Section, quick tour of all the things */}
      <div className="mx-auto w-full max-w-7xl">
        {/* 1. intro - greeting with Ensi Home */}
        <IntroHeader
          badgeText="Smart Home"
          title="Innovating the Future"
          description="We're at the forefront of mobile development, 3D visualization, and AI assistance. Our solutions are designed to transform your ideas into reality."
          imageUrl="/placeholder.svg?height=400&width=600&text=Company Overview"
          callToAction1="First"
          callToAction2="Second"
        />

        {/* 2. talking about the pillar features of Ensi Home */}
        <AppleCardsCarouselDemo />
        {/* 3. what are the main pillar technologies of Ensi Home */}
        <ContentSection items={items} />
      </div>

      {/* 4. further delve into Ensi Home with an indicator that the journey moves on */}
      {/* Second Section */}
      <EnsiHomeOrchestrator />
      <div className="mx-auto w-full max-w-7xl">
        {/* 1.1. BENEFITS FOR USER -         The perks of having an Ensi Home - VALUE PROPOSITION*/}
        {/* 1.2. BENEFITS FOR CONSTRUCTION - COMPANIES The perks of having an Ensi Home - VALUE PROPOSITION*/}
        {/* 1.3. BENEFITS FOR WORK/BUSINESS SITES -   The perks of having an Ensi Home - VALUE PROPOSITION*/}
        <CustomerBenefits />
        {/* 2. References -                  featured projects and testimonials*/}
        <References />
        {/* 3. Featuring Blog */}
        <BlogPostsSection />
        {/* 4. Have an Ensi Home now, apply now and we will reach to you*/}
        <ApplyComponent />
      </div>
    </section>
  );
}

function MobileApp() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[600px] w-[300px] rounded-lg bg-white shadow-lg">
        <div className="absolute left-0 top-0 size-full rounded-lg bg-white">
          <ThreeComponentiPhoneMockup>
            <div className="bg-white"></div>
          </ThreeComponentiPhoneMockup>
        </div>
        <div className="absolute bottom-0 left-0 h-10 w-full rounded-b-lg bg-white"></div>
      </div>
    </div>
  );
}

function EnsiHomeBox() {
  return (
    <div className="flex flex-col items-center">
      <GLTFViewer modelUrl="/assets/models/ensi-home-box.glb" />
    </div>
  );
}

function AiAssistantPart() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[400px] w-[300px] rounded-3xl shadow-lg">
        <div className="absolute left-0 top-0 size-full rounded-3xl bg-black">
          <AiAssistant />
        </div>
        <div className="absolute bottom-0 left-0 h-10 w-full rounded-3xl bg-black"></div>
      </div>
    </div>
  );
}
