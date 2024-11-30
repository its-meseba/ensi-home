'use client';

import { IntroFeatureWithMobileAppMockup } from '@/components/common/intro-feature';
import { useEffect } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main>
      <IntroFeatureWithMobileAppMockup
        platform="Ensi Home Mobile App"
        title="Control Your Smart Home from Anywhere"
        description="Experience the future of home automation with our intuitive mobile application. Manage all your smart devices, monitor energy usage, and ensure your home's security with just a few taps."
        checkPoints={[
          {
            title: 'Unified Control',
            description: 'Manage all devices from one app',
          },
          {
            title: 'Energy Efficiency',
            description: 'Monitor and optimize energy usage',
          },
          {
            title: 'Enhanced Security',
            description: 'Keep your home safe, always',
          },
        ]}
        mockupUrl="https://demo.ensihome.solace.com.tr"
      />
      <MobileFeatures features={mobileFeatures} />
    </main>
  );
}

export const mobileFeatures = [
  {
    id: 'device-control',
    title: 'Control Your Devices Fully, Control Your Home Fully',
    description:
      'One app is all you need - no more switching between multiple apps. Take complete control of all your devices and your entire home from a single place.',
    image: '/images/pages/ensi-home/mobile-application/splash-screen.jpeg',
    features: [
      {
        id: 'one-app',
        title: 'One App, Zero Hassle',
        description:
          'Say goodbye to app-hopping - everything you need in one place',
      },
      {
        id: 'full-control',
        title: 'Full Device Control',
        description:
          'Access every feature and setting of each device without limitations',
      },
      {
        id: 'advanced-settings',
        title: 'Advanced Device Settings',
        description:
          'Fine-tune and customize every parameter of your smart devices',
      },
    ],
  },
  {
    id: 'ai-assistant',
    title: 'Talk to Your Home with Ensi AI Assistant',
    description:
      'Experience a new way of home control through natural conversation. With Ensi AI Assistant, simply talk to your home from anywhere and let your AI companion understand and execute your commands intelligently.',
    image: '/images/pages/ensi-home/mobile-application/voice-assistant.jpeg',
    features: [
      {
        id: 'natural-conversation',
        title: 'Natural Conversation Control',
        description:
          'Speak naturally to control your home - just like talking to a human assistant who understands your needs',
      },
      {
        id: 'remote-voice',
        title: 'Remote Voice Commands',
        description:
          "Control your home from anywhere through voice commands - whether you're at work, on vacation, or in bed",
      },
      {
        id: 'intelligent-understanding',
        title: 'Intelligent Understanding',
        description:
          'Ensi AI Assistant understands context and intent, executing complex commands and managing multiple devices intelligently',
      },
    ],
  },
  {
    id: 'smart-automations',
    title: 'Smart Automations',
    description:
      'Create powerful automations with AI assistance, ready-made templates, or build your own custom flows with complete freedom.',
    image: '/placeholder.svg?height=600&width=300',
    features: [
      {
        id: 'ai-automation',
        title: 'AI-Powered Automation',
        description:
          'Let AI suggest and create intelligent automations based on your habits',
      },
      {
        id: 'templates',
        title: 'Template Library',
        description:
          'Choose from a variety of pre-built automation templates for quick setup',
      },
      {
        id: 'custom-builder',
        title: 'Custom Automation Builder',
        description:
          'Design your own complex automations with unlimited flexibility',
      },
    ],
  },
  {
    id: 'customization',
    title: 'Your Home, Your Way',
    description:
      'Take control of your entire home from one customizable dashboard. Organize and manage your devices exactly how you want them, making home control effortless and intuitive.',
    image: '/images/pages/ensi-home/mobile-application/home-sub-screen.jpeg',
    features: [
      {
        id: 'dashboard',
        title: 'Customizable Dashboard',
        description:
          'Design your perfect home control center - arrange devices and controls exactly how you want them',
      },
      {
        id: 'quick-actions',
        title: 'Quick Actions',
        description:
          'Control multiple devices at once - turn off all lights, adjust all air conditioners, or create your own combinations',
      },
      {
        id: 'organization',
        title: 'Smart Device Organization',
        description:
          'Group and categorize your devices your way for quick access and efficient home management',
      },
    ],
  },
  {
    id: 'device-setup',
    title: 'Add Devices with Ease',
    description:
      'Seamlessly connect and integrate new smart devices to your home network with our intuitive device setup process. Get your devices up and running in minutes.',
    image: '/placeholder.svg?height=600&width=300',
    features: [
      {
        id: 'discovery',
        title: 'Quick Device Discovery',
        description:
          'Our app automatically detects compatible smart devices nearby, making the setup process fast and hassle-free',
      },
      {
        id: 'guided-setup',
        title: 'Guided Setup Process',
        description:
          'Step-by-step instructions guide you through connecting and configuring each new device for optimal performance',
      },
      {
        id: 'multi-device',
        title: 'Multi-Device Support',
        description:
          'Add and manage multiple devices simultaneously, with support for a wide range of smart home products and brands',
      },
    ],
  },
  {
    id: 'multi-home',
    title: 'Multi-Home Management & Access Control',
    description:
      'Seamlessly manage multiple properties and share access with family and guests. Control who can access what, when, and where across all your connected homes.',
    image: '/placeholder.svg?height=600&width=300',
    features: [
      {
        id: 'property-control',
        title: 'Multiple Property Control',
        description:
          'Monitor and control all your properties from a single app - perfect for managing your primary residence, vacation home, or rental properties',
      },
      {
        id: 'access-control',
        title: 'Family & Guest Access',
        description:
          'Invite family members and guests with customizable access levels - grant full control or limit access to specific rooms and devices',
      },
      {
        id: 'user-management',
        title: 'Advanced User Management',
        description:
          'Set time-based access, create user profiles, and maintain detailed access logs for complete oversight of your smart home ecosystem',
      },
    ],
  },
  {
    id: 'personalization',
    title: 'Personalize Your Experience',
    description:
      'Customize every aspect of your smart home app experience through our comprehensive preferences screen. From appearance to notifications, make the app truly yours.',
    image: '/images/pages/ensi-home/mobile-application/preferences.jpeg',
    features: [
      {
        id: 'appearance',
        title: 'App Appearance',
        description:
          'Choose between light and dark hhthemes, adjust text sizes, and customize the color scheme to match your style',
      },
      {
        id: 'notifications',
        title: 'Notification Settings',
        description:
          "Fine-tune which alerts you receive and how they're delivered - from device status updates to security notifications",
      },
      {
        id: 'regional',
        title: 'Regional Preferences',
        description:
          'Set your preferred temperature units, time formats, and language to make the app feel native to your region',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security at Your Fingertips',
    description:
      'Your home security, your rules - choose which smart security features to enable and maintain complete control over your privacy settings.',
    image: '/images/pages/ensi-home/mobile-application/preferences.jpeg',
    features: [
      {
        id: 'security-features',
        title: 'Customizable Security Features',
        description:
          'Activate or deactivate any security feature at will - you decide what works best for your home',
      },
      {
        id: 'ai-security',
        title: 'Optional AI Assistance',
        description:
          'Choose when to use AI security features and when to keep things simple - the control is always yours',
      },
      {
        id: 'privacy',
        title: 'Privacy-First Controls',
        description:
          'Full authority over your security settings and data - nothing happens without your explicit permission',
      },
    ],
  },
];

interface MobileFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  features: {
    id: string;
    title: string;
    description: string;
  }[];
}

interface MobileFeaturesProps {
  features: MobileFeature[];
}

export const MobileFeatures = ({ features }: MobileFeaturesProps) => (
  <div className="w-full py-20">
    <div className="container mx-auto">
      {features.map((feature, index) => (
        <div
          id={feature.id}
          key={feature.id}
          className={`flex flex-col gap-16 py-16 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="text-3xl font-bold lg:text-4xl">{feature.title}</h2>
            <p className="mt-4 text-xl text-gray-600">{feature.description}</p>
            <div className="mt-8 grid gap-4">
              {feature.features.map((subFeature) => (
                <div key={subFeature.id} className="flex items-start gap-2">
                  <Check className="mt-1 size-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">{subFeature.title}</h3>
                    <p className="text-gray-600">{subFeature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-8 border-gray-800 shadow-lg">
              <div className="absolute -right-[10px] top-[120px] h-[65px] w-[2px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute -left-[10px] top-[120px] h-[35px] w-[2px] rounded-r-lg bg-gray-800"></div>
              <div className="absolute -left-[10px] top-[165px] h-[35px] w-[2px] rounded-r-lg bg-gray-800"></div>
              <div className="size-full overflow-hidden rounded-[2.3rem] bg-white">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={600}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
