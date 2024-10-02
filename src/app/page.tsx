'use client';

import Image from 'next/image';

import ContentSection from '../components/common/content-section';
import { IntroHeader } from '../components/common/intro-header'; // Import

import AiAssistant from '@/components/pages/box/ai-assistant';
import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { EnsiHomeOrchestrator } from '@/components/pages/home/orchestrator';
import { AppleCardsCarouselDemo } from '@/components/common/apple-cards';

export default function MainPage() {
  const items = [
    {
      id: 'mobile-app',
      title: 'Mobile Application',
      href: '/ensi-home/mobile-application',
      component: MobileApp,
    },
    { id: 'box', title: 'Box', href: '/ensi-home/box', component: EnsiHomeBox },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant',
      href: '/ensi-home/ai-voice-assistant',
      component: AiAssistantPart,
    },
  ];
  const backgroundMode =
    'dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col';
  const backgroundAssistance =
    'absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]';
  return (
    // <TracingBeam className="px-6">
    <section
      className={`min-h-screen from-gray-100 to-gray-200 px-4 py-12 ${backgroundMode}`}
    >
      <div className={backgroundAssistance} />
      <div className="mx-auto w-full max-w-7xl">
        {/* <GridBackgroundDemo /> */}
        <IntroHeader
          badgeText="New"
          title="Innovating the Future"
          description="We're at the forefront of mobile development, 3D visualization, and AI assistance. Our solutions are designed to transform your ideas into reality."
          imageUrl="/placeholder.svg?height=400&width=600&text=Company Overview" // Use the existing image URL
        />
        <AppleCardsCarouselDemo />
        {/* Use the new ContentSection component */}
        <ContentSection items={items} />
      </div>
      <EnsiHomeOrchestrator />
    </section>
    // </TracingBeam>
  );
}
function MobileApp() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-2xl font-bold">Mobile App Showcase</h2>
      <div className="relative h-[600px] w-[300px] rounded-lg bg-white shadow-lg">
        <div className="absolute left-0 top-0 size-full rounded-lg bg-white">
          <Image
            src="/path/to/iphone-mockup.png"
            alt="iPhone Mockup"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
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
      <div className="relative h-[600px] w-[300px] rounded-lg bg-black shadow-lg">
        <div className="absolute left-0 top-0 size-full rounded-lg bg-black">
          <AiAssistant />
        </div>
        <div className="absolute bottom-0 left-0 h-10 w-full rounded-b-lg bg-black"></div>
      </div>
    </div>
  );
}
