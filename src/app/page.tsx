'use client';

import React from 'react';
import {
  ContentSection,
  ContentItemProps,
} from '../components/common/content-section';
import AiAssistant from '@/components/pages/box/ai-assistant';
import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { EnsiHomeOrchestrator } from '@/components/pages/home/orchestrator';
import { AppleCardsCarouselDemo } from '@/components/common/apple-cards';
import { ThreeComponentiPhoneMockup } from '@/components/common/apple-mockup';
import CustomerBenefits from '@/components/pages/home/CustomerBenefits';
import References from '@/components/pages/home/References';
import ApplyComponent from '@/components/pages/home/ApplyNow';
import BlogPostsSection from '@/components/pages/home/BlogAndNews';
import { CurvedBackgroundParallaxHeaderVertical } from '@/components/common/CurvyBackground';
import VerticalScrollIndicator from '@/components/common/scroll-indicator-vertical';
import * as m from '@/paraglide/messages';
import InfiniteScrollingMobileApplicationScreens from '@/components/pages/ensi-home/mobile-application/InfiniteScrollingMobileApplicationScreens';
import FlutterIframe from '@/components/pages/ensi-home/mobile-application/device-iframe';
import Image from 'next/image';

export default function MainPage() {
  // Define the main content items for the ContentSection component
  const items: ContentItemProps[] = [
    {
      id: 'mobile-app',
      title: m.mobile_app(),
      buttonText: m.main_threesome_mobileApp_button(),
      href: '/ensi-home/mobile-application',
      component: <MobileApp />,
    },
    {
      id: 'box',
      title: m.box(),
      buttonText: m.main_threesome_box_button(),
      href: '/ensi-home/box',
      component: <EnsiHomeBox />,
    },
    {
      id: 'ai-voice-assistant',
      title: m.ai_voice_assistant(),
      buttonText: m.main_threesome_voiceAssistant_button(),
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
    { id: 'intro', label: m.main_scroll_indicator_intro() },
    { id: 'features', label: m.main_scroll_indicator_features() },
    { id: 'mobile-app', label: m.main_scroll_indicator_mobile_app() },
    { id: 'ensi-home', label: m.main_scroll_indicator_ensi_home() },
    { id: 'benefits', label: m.main_scroll_indicator_benefits() },
    { id: 'references', label: m.main_scroll_indicator_references() },
    { id: 'blog', label: m.main_scroll_indicator_blog() },
    { id: 'apply', label: m.main_scroll_indicator_apply() },
  ];
  const appScreenshots = [
    {
      imageUrl: '/images/pages/ensi-home/mobile-application/splash-screen.jpeg',
      link: '/ensi-home/mobile-application#device-control',
      title: 'Device Control',
      description: 'Complete control of all your smart devices from one place',
    },
    {
      imageUrl:
        '/images/pages/ensi-home/mobile-application/voice-assistant.jpeg',
      link: '/ensi-home/mobile-application#ai-assistant',
      title: 'AI Assistant',
      description: 'Natural conversation control with Ensi AI',
    },
    {
      imageUrl:
        '/images/pages/ensi-home/mobile-application/home-sub-screen.jpeg',
      link: '/ensi-home/mobile-application#customization',
      title: 'Custom Dashboard',
      description: 'Your personalized home control center',
    },
    {
      imageUrl: '/images/pages/ensi-home/mobile-application/preferences.jpeg',
      link: '/ensi-home/mobile-application#personalization',
      title: 'Preferences',
      description: 'Customize your app experience',
    },
    {
      imageUrl: '/images/pages/ensi-home/mobile-application/splash-screen.jpeg',
      link: '/ensi-home/mobile-application#device-control',
      title: 'Device Control',
      description: 'Complete control of all your smart devices from one place',
    },
    {
      imageUrl:
        '/images/pages/ensi-home/mobile-application/voice-assistant.jpeg',
      link: '/ensi-home/mobile-application#ai-assistant',
      title: 'AI Assistant',
      description: 'Natural conversation control with Ensi AI',
    },
    {
      imageUrl:
        '/images/pages/ensi-home/mobile-application/home-sub-screen.jpeg',
      link: '/ensi-home/mobile-application#customization',
      title: 'Custom Dashboard',
      description: 'Your personalized home control center',
    },
    {
      imageUrl: '/images/pages/ensi-home/mobile-application/preferences.jpeg',
      link: '/ensi-home/mobile-application#personalization',
      title: 'Preferences',
      description: 'Customize your app experience',
    },
    // {
    //   imageUrl:
    //     '/images/pages/ensi-home/mobile-application/smart-automations.jpeg',
    //   link: '/ensi-home/mobile-application#smart-automations',
    //   title: 'Smart Automation',
    //   description: 'Create powerful AI-assisted automation flows',
    // },
  ];

  return (
    <section className={`min-h-screen from-gray-100 to-gray-200`}>
      {/* Add the VerticalScrollIndicator component */}
      <VerticalScrollIndicator sections={sections} />

      {/* Introduction Section */}
      <div id="intro">
        <CurvedBackgroundParallaxHeaderVertical
          imageSrc="/images/pages/main/background-3.png"
          title={m.main_intro_title()}
          titleStyle="text-center text-4xl font-bold text-white md:text-6xl"
          description={m.main_intro_description()}
        >
          {/* <EnsiHomeBox /> */}
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
        <InfiniteScrollingMobileApplicationScreens
          screenshots={appScreenshots}
        />
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
        {/* <div id="references">
          <References />
        </div> */}

        {/* Blog Posts Section */}
        {/* <div id="blog">
          <BlogPostsSection />
        </div> */}

        {/* Apply Now Section */}
        {/* <div id="apply">
          <ApplyComponent />
        </div> */}
      </div>
    </section>
  );
}

// MobileApp component for displaying a mobile app mockup
// function MobileApp() {
//   return (
//     <div className="flex flex-col items-center ">
//       <FlutterIframe
//         url="https://demo.ensihome.solace.com.tr"
//         isSmallCard={true}
//       />
//     </div>
//   );
// }

function MobileApp() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto h-[513px] w-[256px] rounded-[2.5rem] border-8 border-gray-800 shadow-lg">
        <div className="absolute -right-[10px] top-[90px] h-[36px] w-[2px] rounded-l-lg bg-gray-800"></div>
        <div className="absolute -left-[10px] top-[90px] h-[36px] w-[2px] rounded-r-lg bg-gray-800"></div>
        <div className="absolute -left-[10px] top-[137px] h-[36px] w-[2px] rounded-r-lg bg-gray-800"></div>
        <div className="size-full overflow-hidden rounded-[2.3rem] bg-white">
          <Image
            src="/images/pages/ensi-home/mobile-application/home-sub-screen.jpeg"
            alt="Ensi Home Mobile App"
            width={256}
            height={513}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
// EnsiHomeBox component for displaying the Ensi Home Box image
function EnsiHomeBox() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative size-[400px] ">
        <Image
          src="/images/pages/ensi-home/box/ensi-home-box-no-background.png"
          alt="Ensi Home Box"
          fill
          className="object-contain"
        />
      </div>
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
