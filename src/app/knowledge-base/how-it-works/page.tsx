'use client';

import React from 'react';
import {
  MapPin,
  Smartphone,
  Tv,
  Wifi,
  Box,
  Cpu,
  Cloud,
  Lock,
} from 'lucide-react';
import { IntroFeature } from '@/components/common/intro-feature';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CurvedBackground } from '@/components/common/CurvyBackground';

const steps = [
  {
    title: '1. Kurulum',
    description:
      'Bir Wi-Fi ağına bağlı ve Samsung hesabınıza giriş yaptığınızdan emin olun. SmartThings destekli bir cihazla, başlamaya hazırsınız.',
    icon: <Wifi className="size-16 text-blue-300" />,
    color: 'bg-blue-100',
  },
  {
    title: '2. Bağlantı',
    description:
      "Cihazınızı çalıştırın ve mobil cihazınızda SmartThings uygulamasını açın. Uygulama cihazınızı tespit ettiğinde ekranda bir açılır pencere belirecek. Bu açılır pencerede 'Ekle' üzerine hafifçe dokunmanız yeterli.",
    icon: <Smartphone className="size-16 text-green-300" />,
    color: 'bg-green-100',
  },
  {
    title: '3. Kontrol',
    description:
      "TV'nizi açıp kapamak, sesi ayarlamak veya kanal değiştirmek gibi daha fazla kontrol seçeneği için cihaz kartına hafifçe dokunun.",
    icon: <Tv className="size-16 text-purple-300" />,
    color: 'bg-purple-100',
  },
  {
    title: '4. Konum Yönetimi',
    description:
      'Evinizi, iş yerinizi veya SmartThings kullandığınız başka herhangi bir yeri konum olarak ekleyin. Coğrafi konumlandırma ayarını yaparak konumunuza göre harekete geçen rutinler oluşturabilirsiniz.',
    icon: <MapPin className="size-16 text-red-300" />,
    color: 'bg-red-100',
  },
];
const techStack = [
  { name: 'React Native', icon: '/icons/react-native.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'TensorFlow', icon: '/icons/tensorflow.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
];

const sections = [
  {
    title: 'Ensi Home Box',
    description: 'The central hub of your smart home system.',
    icon: <Box className="size-8 text-blue-500" />,
    details: [
      'Multi-protocol support (Wi-Fi, Zigbee, Z-Wave)',
      'Edge computing capabilities',
      'Secure local data processing',
    ],
  },
  {
    title: 'Mobile Application',
    description: 'Control your home from anywhere.',
    icon: <Smartphone className="size-8 text-green-500" />,
    details: [
      'Cross-platform compatibility (iOS & Android)',
      'Intuitive user interface',
      'Real-time device status updates',
    ],
  },
  {
    title: 'AI Voice Assistant',
    description: 'Your intelligent home companion.',
    icon: <Cpu className="size-8 text-purple-500" />,
    details: [
      'Natural Language Processing',
      'Context-aware responses',
      'Multi-language support',
    ],
  },
  {
    title: 'Cloud Services',
    description: 'Seamless integration and data management.',
    icon: <Cloud className="size-8 text-orange-500" />,
    details: [
      'Scalable architecture',
      'Data analytics and insights',
      'Automated firmware updates',
    ],
  },
];

export default function SmartHomeGuide() {
  return (
    <div className="flex flex-col items-center">
      <CurvedBackground
        imageSrc="/images/pages/knowledge-base/how-it-works/cover.jpg"
        title="How It Works?"
      />
      <div className="w-full bg-gray-50">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-12">
          {/* <h1 className="mb-12 text-center text-3xl font-bold">How It Works</h1> */}
          <IntroFeature
            platform="How It Works"
            title="Understanding Your Smart Home"
            description="Learn how to make the most of your Ensi Home system and explore its advanced technical features."
            checkPoints={[
              {
                title: 'Setup Guide',
                description: 'Step-by-step installation process.',
              },
              {
                title: 'Device Management',
                description: 'Easily manage and control your smart devices.',
              },
              {
                title: 'Technical Deep Dive',
                description:
                  'Explore the advanced technology powering your smart home.',
              },
            ]}
            imageUrl="/images/smart-home-overview.jpg"
          />

          <h2 className="mb-8 mt-16 text-2xl font-semibold">Getting Started</h2>
          <Carousel className="w-full max-w-[95%]">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card
                      className={`h-64 w-full overflow-hidden rounded-[2rem] transition-all duration-300 ease-in-out hover:shadow-lg ${step.color} cursor-pointer border-0`}
                    >
                      <CardHeader className="flex h-full items-center justify-center rounded-t-[2rem]">
                        {step.icon}
                      </CardHeader>
                    </Card>
                    <div className="mt-4 text-center">
                      <h3 className="mb-2 text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-sm">{step.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <h2 className="mb-8 mt-16 text-2xl font-semibold">
            Technology Stack
          </h2>
          <div className="mb-16 flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={tech.icon} alt={tech.name} width={64} height={64} />
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>

          <h2 className="mb-8 mt-16 text-2xl font-semibold">
            Technical Deep Dive
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {sections.map((section, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{section.description}</p>
                  <ul className="list-inside list-disc">
                    {section.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-semibold">Security First</h2>
            <p className="mb-8 max-w-2xl text-center">
              At Ensi Home, we prioritize the security and privacy of your data.
              Our systems employ end-to-end encryption, regular security audits,
              and follow best practices to ensure your smart home remains
              secure.
            </p>
            <Lock className="mb-4 size-16 text-green-500" />
          </div>

          <Button size="lg" className="mt-12">
            Request Technical Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}

// Purpose: To delve into the technical aspects and functionality of your solutions.

// Components:

// Introduction:

// Overview of the technology stack.
// Sections:

// Ensi Home Box:
// Technical architecture.
// Mobile Application:
// User interface design.
// Platform compatibility.
// AI Voice Assistant:
// AI algorithms.
// Language processing.
// Cloud Services:
// Data flow diagrams.
// Security protocols.
// Visuals:

// Diagrams, charts, and flowcharts.
// Call to Action:

// CTA Button: "Request Technical Documentation" - leads to a form or contact.
