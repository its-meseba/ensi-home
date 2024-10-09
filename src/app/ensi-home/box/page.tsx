'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IntroFeatureWithModel } from '@/components/common/intro-feature';
import { Case1 } from '@/components/common/sliding-cases';
import { Download, Zap, Shield, Maximize } from 'lucide-react';

const logos = [
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function BoxPage() {
  return (
    <motion.div
      className="container mx-auto px-4 py-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section className="mb-0" variants={itemVariants}>
        <IntroFeatureWithModel
          platform="Smart Home"
          title="Ensi Home Box - The Brain of Smart Living"
          description="Experience the future of home automation with the Ensi Home Box, the central hub that brings intelligence to your living space."
          checkPoints={[
            {
              title: 'Centralized Control',
              description:
                'Manage all your smart devices from a single interface.',
            },
            {
              title: 'High Compatibility',
              description:
                'Works seamlessly with a wide range of smart home devices.',
            },
            {
              title: 'Secure Connectivity',
              description:
                'Advanced encryption to keep your home network safe.',
            },
          ]}
          modelUrl="/assets/models/ensi-home-box.glb"
        />
      </motion.section>

      <motion.section className="mb-16" variants={containerVariants}>
        <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
          Key Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {[
            {
              icon: <Zap className="mr-2" />,
              title: 'Centralized Control',
              description:
                'Manage all your smart devices from a single, intuitive interface.',
            },
            {
              icon: <Shield className="mr-2" />,
              title: 'Secure Connectivity',
              description:
                'Advanced encryption and security protocols to protect your home network.',
            },
            {
              icon: <Maximize className="mr-2" />,
              title: 'High Compatibility',
              description:
                'Seamlessly integrates with a wide range of smart home devices and protocols.',
            },
            {
              icon: <Download className="mr-2" />,
              title: 'Scalability',
              description:
                'Easily expand your smart home system as your needs grow.',
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="mb-16" variants={containerVariants}>
        <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
          Technical Specifications
        </motion.h2>
        <motion.div className="bg-muted rounded-lg p-6" variants={itemVariants}>
          <ul className="list-inside list-disc space-y-2">
            <li>Processor: Quad-core ARM Cortex-A53</li>
            <li>Memory: 2GB RAM</li>
            <li>Storage: 16GB eMMC</li>
            <li>Connectivity: Wi-Fi 6, Bluetooth 5.0, Zigbee, Z-Wave</li>
            <li>Ports: 2x USB 3.0, 1x Ethernet</li>
            <li>Power: 12V DC input</li>
          </ul>
          <Button className="mt-4">
            <Download className="mr-2 size-4" /> Download Full Specifications
            (PDF)
          </Button>
        </motion.div>
      </motion.section>

      <motion.section className="mb-16" variants={containerVariants}>
        <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
          Integration Process
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-xl font-semibold">Easy Installation</h3>
            <p className="mb-4">
              The Ensi Home Box is designed for seamless integration during the
              construction phase or as an upgrade to existing homes. Our team of
              experts ensures a smooth installation process, minimizing
              disruption to your daily life.
            </p>
            <ol className="list-inside list-decimal space-y-2">
              <li>Site assessment and planning</li>
              <li>Wiring and infrastructure setup</li>
              <li>Box installation and configuration</li>
              <li>Device pairing and system testing</li>
              <li>User training and handover</li>
            </ol>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Ensi Home Box Installation"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="mb-16" variants={containerVariants}>
        <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
          Ensi Home Box in Action
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
        >
          {[
            {
              src: '/placeholder.svg?height=200&width=300',
              alt: 'Ensi Home Box in Living Room',
            },
            {
              src: '/placeholder.svg?height=200&width=300',
              alt: 'Ensi Home Box in Kitchen',
            },
            {
              src: '/placeholder.svg?height=200&width=300',
              alt: 'Ensi Home Box in Home Office',
            },
          ].map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mb-16 text-center"
        variants={containerVariants}
      >
        <motion.h2 className="mb-4 text-3xl font-bold" variants={itemVariants}>
          Ready to Transform Your Home?
        </motion.h2>
        <motion.p className="mb-8" variants={itemVariants}>
          Get in touch with our team for personalized assistance and technical
          details.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/contact">
            <Button size="lg">Contact Us for Technical Details</Button>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <Case1 title="Our Partners" logos={logos} interval={3000} />
      </motion.section>
    </motion.div>
  );
}
