'use client';

import React from 'react';
import {
  AppWindow,
  BarChart2,
  GitBranch,
  Home,
  Layers,
  MapPin,
  Smartphone,
  Tv,
  Wifi,
  Zap,
} from 'lucide-react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
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

const categories = [
  {
    title: 'Getting Started',
    icon: <Home className="size-5" />,
    items: [
      'Setting up Homey Bridge',
      'Setting up Homey Pro (Early 2023)',
      'Setting up Homey Pro (2016 – 2019)',
    ],
    link: 'All articles in Getting Started',
  },
  {
    title: 'Devices & Zones',
    icon: <Layers className="size-5" />,
    items: [
      'Connecting your first device to Homey',
      'Using Zone Activity',
      'Customizing Zones',
      'Connecting Devices (16)',
    ],
    link: 'All articles in Devices & Zones',
  },
  {
    title: 'Flow',
    icon: <GitBranch className="size-5" />,
    items: [
      'Creating your first Flow',
      'Starting a Flow from an iOS or Android widget',
      'Sharing Flows',
      'Using Or and Else in Flows',
    ],
    link: 'All articles in Flow',
  },
  {
    title: 'Insights',
    icon: <BarChart2 className="size-5" />,
    items: ['Viewing charts with Homey Insights'],
    link: 'All articles in Insights',
  },
  {
    title: 'Energy',
    icon: <Zap className="size-5" />,
    items: ['Saving energy with Homey Energy'],
    link: 'All articles in Energy',
  },
  {
    title: 'Apps',
    icon: <AppWindow className="size-5" />,
    items: ['Installing Apps on Homey'],
    link: 'All articles in Apps',
  },
];

export default function SmartHomeGuide() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-50">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-12">
          <h1 className="mb-12 text-center text-3xl font-bold">
            Nasıl kullanılır?
          </h1>

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

      <div className="w-full bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 py-16">
          <h2 className="mb-12 text-3xl font-bold text-gray-800">
            Daha Fazla Destek
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="cursor-pointer bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    {category.icon}
                    <span className="ml-2">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-6 block text-base font-medium text-blue-400 hover:text-blue-600"
                  >
                    {category.link} →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
