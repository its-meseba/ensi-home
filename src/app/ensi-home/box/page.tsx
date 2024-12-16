'use client';

import { IntroFeatureWithModel } from '@/components/common/intro-feature';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as m from '@/paraglide/messages';
import { cn } from '@/lib/utils';
import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { CurvedBackgroundParallaxHeaderVertical } from '@/components/common/CurvyBackground';
import { Box, Check, Speaker, Usb } from 'lucide-react';
import {
  Cpu,
  Microchip,
  Wifi,
  Power,
  Shield,
  Zap,
  Network,
} from 'lucide-react';

export default function BoxPage() {
  return (
    <main className="relative w-full">
      {/* Section 1: Hero with Curved Background */}
      <section id="hero">
        <CurvedBackgroundParallaxHeaderVertical
          images={['/images/pages/ensi-home/box/R5.jpg']}
          title="Orchestration Conductor of Your Smart Home"
          titleStyle="text-center text-4xl font-bold text-white md:text-6xl"
          description="Seamlessly orchestrating your smart home experience with advanced technology and elegant design"
          hasShadow={false}
        >
          {/* <GLTFViewer modelUrl="/assets/models/ensi-box-3.glb" /> */}
          <></>
        </CurvedBackgroundParallaxHeaderVertical>
      </section>

      {/* Section 2: 3D Model Display */}
      <section
        id="model"
        className="flex min-h-screen w-full flex-col items-center justify-center"
      >
        <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Ensi Home Box
        </h2>
        <p className="text-muted-foreground mb-10 max-w-3xl text-center text-lg md:text-xl lg:text-2xl">
          The central hub of your smart home ecosystem
        </p>
        <GLTFViewer
          modelUrl="/assets/models/ensi-box-3.glb"
          height="min(50vh, 75vh)"
          width="min(50vh, 75vh)"
        />
      </section>

      {/* Section 3: Installation Options */}
      <section id="installation" className="w-full py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          {/* 3.1 Ornamental Installation */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24"
            >
              {/* Text Content - Left Side */}
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-bold">Elegant Visibility</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Transform your living space with the Ensi Home Box as a
                  sophisticated centerpiece. Designed to be both functional and
                  aesthetically pleasing, it serves as a statement piece that
                  reflects your commitment to modern living while providing easy
                  access to its smart features.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="size-4 text-white" />
                    </div>
                    <span>Seamless integration with modern interiors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="size-4 text-white" />
                    </div>
                    <span>Easy access to touch controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="size-4 text-white" />
                    </div>
                    <span>Status LED indicators</span>
                  </li>
                </ul>
              </div>

              {/* Image - Right Side */}
              <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
                <Image
                  src="/images/pages/ensi-home/box/R4.jpg"
                  alt="As an artpiece"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* 3.2 Electric Board Installation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24"
            >
              {/* Image - Left Side */}
              <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
                <Image
                  src="/images/pages/ensi-home/box/electric-panel.png"
                  alt="Electric Panel Installation"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text Content - Right Side */}
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-bold">Professional Integration</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  For those preferring a minimalist approach, the Ensi Home Box
                  can be seamlessly integrated into your home&apos;s electrical
                  board. This installation method ensures all the power of smart
                  home control while maintaining a clean, uncluttered living
                  space.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="size-4 text-white" />
                    </div>
                    <span>Hidden installation in electrical cabinet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="size-4 text-white" />
                    </div>
                    <span>Professional wiring integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="size-4 text-white" />
                    </div>
                    <span>Remote access via mobile app</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Technical Specifications and Features */}
      <section
        id="specifications"
        className="w-full bg-slate-50/50 py-24 dark:bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold">Technical Excellence</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Industry-leading hardware specifications engineered for
                unparalleled smart home performance
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SpecCard
                icon={<Cpu className="size-5" />}
                title="Processing & AI"
                specs={[
                  'Quad-core 64-bit Arm Cortex-A76',
                  '26 TOPS AI Processing Unit',
                  '4GB LPDDR4 RAM',
                  '32GB eMMC Storage',
                ]}
              />

              <SpecCard
                icon={<Speaker className="size-5" />}
                title="Audio System"
                specs={[
                  'Built-in 5W Speaker',
                  'Integrated Microphone Array',
                  'High-fidelity Audio Processing',
                  'Voice Control Ready',
                ]}
              />

              <SpecCard
                icon={<Usb className="size-5" />}
                title="Connectivity"
                specs={[
                  'USB-C Port with USB 3.0',
                  'MicroSD Expansion Slot',
                  'Optional Ethernet via USB Hub',
                  'External Device Support',
                ]}
              />

              <SpecCard
                icon={<Wifi className="size-5" />}
                title="Wireless Standards"
                specs={[
                  'Wi-Fi 6 Compatible',
                  'Bluetooth 5.0',
                  'Matter & Thread Protocol',
                  'Zigbee Smart Home Integration',
                ]}
              />

              <SpecCard
                icon={<Power className="size-5" />}
                title="Power System"
                specs={[
                  '12V DC Power Supply',
                  '3000 mAh UPS Battery Backup',
                  'Efficient Power Management',
                  'Uninterrupted Operation',
                ]}
              />

              <SpecCard
                icon={<Box className="size-5" />}
                title="Physical Design"
                specs={[
                  'Compact: 100 x 100 x 46 mm',
                  'Premium Materials: Walnut/Mahogany/Cherry',
                  '7075 Aircraft-grade Aluminum',
                  'White Marble Option Available',
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const SpecCard = ({
  icon,
  title,
  specs,
}: {
  icon: React.ReactNode;
  title: string;
  specs: string[];
}) => (
  <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
    <div className="flex items-center gap-4">
      {icon}
      <h4 className="font-semibold">{title}</h4>
    </div>
    <ul className="list-disc pl-6">
      {specs.map((spec, index) => (
        <li key={index}>{spec}</li>
      ))}
    </ul>
  </div>
);

const FeatureCard = ({
  icon,
  title,
  description,
  benefits,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}) => (
  <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
    <div className="flex items-center gap-4">
      {icon}
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-muted-foreground text-sm">{description}</p>
    <ul className="list-disc pl-6">
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
  </div>
);
