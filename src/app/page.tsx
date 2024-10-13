'use client';

import React from 'react';
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
import PageHeader from '@/components/common/PageHeader';
import {
  CurvedBackgroundParallax,
  CurvedBackgroundParallaxHeader,
  CurvedBackgroundParallaxHeaderVertical,
} from '@/components/common/CurvyBackground';
import InfiniteScrollingMobileApplicationScreens from '@/components/pages/ensi-home/mobile-application/InfiniteScrollingMobileApplicationScreens';
import GradientHeader from '@/components/common/headers';
import VerticalScrollIndicator from '@/components/common/scroll-indicator-vertical';

export default function MainPage() {
  // Define the main content items for the ContentSection component
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
      buttonText: 'Kutuyu Gor',
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

  // Define background styles
  const backgroundMode =
    'dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col';
  const backgroundAssistance =
    'absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_700%,black)]';

  // Define sections for the VerticalScrollIndicator
  const sections = [
    { id: 'intro', label: 'Intro' },
    { id: 'features', label: 'Features' },
    { id: 'mobile-app', label: 'Mobile App' },
    { id: 'ensi-home', label: 'Ensi Home' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'references', label: 'References' },
    { id: 'blog', label: 'Blog' },
    { id: 'apply', label: 'Apply' },
  ];

  return (
    <section className={`min-h-screen from-gray-100 to-gray-200`}>
      {/* Add the VerticalScrollIndicator component */}
      <VerticalScrollIndicator sections={sections} />

      {/* Introduction Section */}
      <div id="intro">
        <CurvedBackgroundParallaxHeaderVertical
          imageSrc="/images/pages/main/cover2.jpg"
          title="We are presenting Ensi Home!"
          description="The world's most advanced smart home platform."
        >
          <EnsiHomeBox />
        </CurvedBackgroundParallaxHeaderVertical>
      </div>

      {/* Features Section */}
      <div className="mx-auto w-full max-w-7xl">
        <div id="features">
          <AppleCardsCarouselDemo />
        </div>
      </div>

      {/* Mobile App Section */}
      <div id="mobile-app">
        <InfiniteScrollingMobileApplicationScreens />
      </div>

      {/* Content Section for Mobile App, Box, and AI Voice Assistant */}
      <div className="mx-auto w-full max-w-7xl">
        <ContentSection items={items} />
      </div>

      {/* Ensi Home Orchestrator Section */}
      <div id="ensi-home">
        <EnsiHomeOrchestrator />
      </div>

      {/* Additional Sections */}
      <div className="mx-auto w-full max-w-full">
        {/* Customer Benefits Section */}
        <div id="benefits">
          <CustomerBenefits />
        </div>

        {/* References Section */}
        <div id="references">
          <References />
        </div>

        {/* Blog Posts Section */}
        <div id="blog">
          <BlogPostsSection />
        </div>

        {/* Apply Now Section */}
        <div id="apply">
          <ApplyComponent />
        </div>
      </div>
    </section>
  );
}

// MobileApp component for displaying a mobile app mockup
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

// EnsiHomeBox component for displaying the Ensi Home Box 3D model
function EnsiHomeBox() {
  return (
    <div className="flex flex-col items-center">
      <GLTFViewer modelUrl="/assets/models/ensi-home-box.glb" />
    </div>
  );
}

// AiAssistantPart component for displaying the AI Voice Assistant interface
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
