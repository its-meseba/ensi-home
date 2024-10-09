'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { IntroFeatureWithRiveModel } from '@/components/common/intro-feature';
import AiAssistant from '@/components/pages/box/ai-assistant';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mic, Globe, Zap, Brain, Shield, Sparkles } from 'lucide-react';

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  // transition: { duration: 0.6 }
};

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AIVoiceAssistantPage() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="container mx-auto space-y-24 px-4 py-16">
      <motion.div initial="initial" animate="animate" variants={fadeIn}>
        <IntroFeatureWithRiveModel
          platform="AI Voice Assistant"
          title="Experience the Future of Home Control"
          description="Ensi Home's AI Voice Assistant brings unparalleled convenience and intelligence to your smart home. Speak naturally, control effortlessly, and live smarter."
          checkPoints={[
            {
              title: 'Natural Interaction',
              description:
                'Communicate with your home as you would with a person.',
            },
            {
              title: 'Multilingual Mastery',
              description:
                'Speak in your preferred language, no matter where you&apos;re from.',
            },
            {
              title: 'Seamless Integration',
              description:
                'Control all your smart devices with simple voice commands.',
            },
          ]}
        />
      </motion.div>

      <motion.section
        className="space-y-12"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.h2 className="text-center text-4xl font-bold" variants={fadeIn}>
          Unleash the Power of Voice
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={stagger}
        >
          {[
            {
              icon: Mic,
              title: 'Natural Language Processing',
              description: 'Understand context and intent, not just words.',
            },
            {
              icon: Globe,
              title: 'Multilingual Support',
              description: 'Communicate in multiple languages effortlessly.',
            },
            {
              icon: Zap,
              title: 'Smart Device Integration',
              description: 'Control your entire smart home ecosystem.',
            },
            {
              icon: Brain,
              title: 'Adaptive Learning',
              description: 'Improves and personalizes over time.',
            },
            {
              icon: Shield,
              title: 'Privacy-First Design',
              description: 'Your conversations stay private and secure.',
            },
            {
              icon: Sparkles,
              title: 'Contextual Awareness',
              description: 'Understands and responds to your environment.',
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <feature.icon className="text-primary size-12" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-12"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.h2 className="text-center text-4xl font-bold" variants={fadeIn}>
          Transform Your Living Experience
        </motion.h2>
        <motion.div variants={fadeIn}>
          <Tabs defaultValue="convenience" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="convenience">
                Unparalleled Convenience
              </TabsTrigger>
              <TabsTrigger value="accessibility">
                Enhanced Accessibility
              </TabsTrigger>
              <TabsTrigger value="efficiency">Boosted Efficiency</TabsTrigger>
            </TabsList>
            <TabsContent
              value="convenience"
              className="bg-secondary mt-6 rounded-lg p-6"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                Effortless Control at Your Command
              </h3>
              <p>
                Imagine adjusting your home&apos;s ambiance, managing your
                schedule, or controlling your devices - all without lifting a
                finger. Our AI Voice Assistant turns this vision into reality,
                offering unmatched convenience in your daily life.
              </p>
            </TabsContent>
            <TabsContent
              value="accessibility"
              className="bg-secondary mt-6 rounded-lg p-6"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                A Home That Responds to Everyone
              </h3>
              <p>
                We believe in creating inclusive smart homes. Our AI Voice
                Assistant empowers users of all abilities to interact with their
                living spaces effortlessly, ensuring that the future of home
                automation is accessible to everyone.
              </p>
            </TabsContent>
            <TabsContent
              value="efficiency"
              className="bg-secondary mt-6 rounded-lg p-6"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                Streamline Your Daily Routines
              </h3>
              <p>
                From managing your smart devices to providing timely
                information, our AI Voice Assistant acts as your personal home
                manager. It learns your preferences over time, anticipating your
                needs and helping you navigate your day with unprecedented
                efficiency.
              </p>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-12"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.h2 className="text-center text-4xl font-bold" variants={fadeIn}>
          Experience the Magic
        </motion.h2>
        <motion.div
          className="flex flex-col items-center space-y-8"
          variants={fadeIn}
        >
          <p className="max-w-2xl text-center">
            See our AI Voice Assistant in action. Interact with the demo below
            to experience the future of home control firsthand.
          </p>
          <Button
            size="lg"
            onClick={() => setShowDemo(!showDemo)}
            className="px-8 py-6 text-lg"
          >
            {showDemo ? 'Hide Interactive Demo' : 'Launch Interactive Demo'}
          </Button>
        </motion.div>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary mt-12 rounded-lg p-8 shadow-lg"
          >
            <AiAssistant />
          </motion.div>
        )}
      </motion.section>

      <motion.section
        className="from-primary to-secondary space-y-8 rounded-lg bg-gradient-to-r py-16 text-center text-white"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.h2 className="text-4xl font-bold" variants={fadeIn}>
          Ready to Revolutionize Your Home?
        </motion.h2>
        <motion.p className="mx-auto max-w-2xl text-lg" variants={fadeIn}>
          Join the future of smart living with Ensi Home&apos;s AI Voice
          Assistant. Experience unparalleled convenience, accessibility, and
          efficiency in your daily life.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
            Explore AI Solutions
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}

// Purpose: To present the AI Voice Assistant and its capabilities.

// Components:

// Hero Section:

// Headline: "Interact Naturally with Our AI Voice Assistant"
// Background Image: Illustration of a user speaking to a device.
// Assistant Overview:

// Explain the assistant's role in the ecosystem.
// Key Features:

// Natural language understanding.
// Multilingual support.
// Integration with all smart devices.
// Demonstration:

// Interactive component using AiAssistant to showcase voice commands.
// Benefits:

// Hands-free control.
// Accessibility.
// Personalization.
// Visuals:

// Videos or animations demonstrating use cases.
// Call to Action:

// CTA Button: "Learn More About Our AI Solutions" - links to contact or demo.
