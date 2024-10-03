'use client';

import React from 'react';
import { MapPin, Smartphone, Tv, Wifi } from 'lucide-react';

import { IntroFeature } from '@/components/common/intro-feature';
import { Card, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

export default function SmartHomeGuide() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-50">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-12">
          <h1 className="mb-12 text-center text-3xl font-bold">How It Works</h1>
          <IntroFeature
            platform="How It Works"
            title="Understanding Your Smart Home"
            description="Learn how to make the most of your Ensi Home system."
            checkPoints={[
              {
                title: 'Setup Guide',
                description: 'Step-by-step installation.',
              },
              {
                title: 'Device Management',
                description: 'Easily manage your devices.',
              },
            ]}
            imageUrl="/path/to/image.jpg" // Provide the correct image URL
          />
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
