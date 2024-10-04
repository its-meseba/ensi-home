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
import { BackgroundGradientAnimationDemo } from '@/components/common/bg-gradient-animation-demo';
import { TimelineDemo } from '@/components/common/timeline-card';

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
      <TimelineDemo />
      {/* 
Step 1: Understanding Your Needs

Consultation services.
Customization options.
Step 2: Supplying Smart Devices

Procurement process.
Quality assurance.
Step 3: Installation & Integration

On-site support.
Collaboration with construction teams.
Visual Timeline or Infographic

To illustrate the process flow. */}
    </div>
  );
}

// Purpose: To explain your process in detail to potential construction partners.

// Components:

// Hero Section:

// Headline: "Our Collaborative Process"
// Detailed Steps:

// Step 1: Understanding Your Needs
// Site visits, consultations.
// Custom solution planning.
// Step 2: Supplying Smart Devices
// Procurement process.
// Quality assurance measures.
// Step 3: Installation & Integration
// Coordination with construction timelines.
// Training for construction teams.
// Use visuals like icons or an infographic timeline.
// Benefits of Our Process:

// Minimizing disruptions.
// Tailored solutions.
// Long-term support.
// Testimonials:

// Quotes from construction partners highlighting smooth collaboration.
// Call to Action:

// CTA Button: "Initiate a Partnership Today" - links to /contact/
