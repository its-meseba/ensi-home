'use client';

import { IntroFeatureWithModel } from '@/components/common/intro-feature';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as m from '@/paraglide/messages';
import { cn } from '@/lib/utils';
import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { CurvedBackgroundParallaxHeaderVertical } from '@/components/common/CurvyBackground';
import { Check } from 'lucide-react';
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
          images={['/images/pages/ensi-home/box/hero-bg.jpg']}
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
        <h2 className="mb-4 text-3xl font-bold">Ensi Home Box</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl text-center">
          The central hub of your smart home ecosystem
        </p>
        <GLTFViewer modelUrl="/assets/models/ensi-box-3.glb" />
      </section>

      {/* Section 3: Installation Options */}
      <section id="installation" className="w-full py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 3.1 Ornamental Installation */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid items-center gap-12 lg:grid-cols-2"
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
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/pages/ensi-home/box/ornamental.jpg"
                  alt="Ornamental Installation"
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
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              {/* Image - Left Side */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/pages/ensi-home/box/electric-board.jpg"
                  alt="Electric Board Installation"
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
                Advanced hardware specifications designed for optimal smart home
                performance
              </p>
            </div>

            <div className="grid gap-16 lg:grid-cols-2">
              {/* Technical Specifications */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold">
                  Technical Specifications
                </h3>
                <div className="grid gap-6">
                  <SpecCard
                    icon={<Cpu className="size-5" />}
                    title="Processing Unit"
                    specs={[
                      'Quad-core ARM Cortex-A55 @ 2.0GHz',
                      'Neural Processing Unit (NPU)',
                      'Hardware encryption module',
                    ]}
                  />
                  <SpecCard
                    icon={<Microchip className="size-5" />}
                    title="Memory & Storage"
                    specs={[
                      '4GB LPDDR4X RAM',
                      '32GB eMMC 5.1 flash storage',
                      'Expandable via USB 3.0',
                    ]}
                  />
                  <SpecCard
                    icon={<Wifi className="size-5" />}
                    title="Connectivity"
                    specs={[
                      'Wi-Fi 6 (802.11ax)',
                      'Bluetooth 5.2',
                      'Gigabit Ethernet',
                      'Zigbee 3.0 & Z-Wave Plus',
                    ]}
                  />
                  <SpecCard
                    icon={<Power className="size-5" />}
                    title="Power & Performance"
                    specs={[
                      '12V DC input',
                      'Low power standby mode',
                      'UPS support',
                    ]}
                  />
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold">Key Features</h3>
                <div className="grid gap-6">
                  <FeatureCard
                    icon={<Shield className="size-5" />}
                    title="Advanced Security"
                    description="Enterprise-grade encryption and secure boot process protect your smart home network"
                    benefits={[
                      'End-to-end encryption',
                      'Secure element chip',
                      'Regular security updates',
                    ]}
                  />
                  <FeatureCard
                    icon={<Zap className="size-5" />}
                    title="Real-time Processing"
                    description="Local processing capabilities for faster response times and enhanced privacy"
                    benefits={[
                      'Edge computing support',
                      'Offline functionality',
                      'Low latency responses',
                    ]}
                  />
                  <FeatureCard
                    icon={<Network className="size-5" />}
                    title="Universal Compatibility"
                    description="Works seamlessly with major smart home ecosystems and protocols"
                    benefits={[
                      'Multi-protocol support',
                      'Easy device pairing',
                      'Expandable ecosystem',
                    ]}
                  />
                </div>
              </div>
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
