'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { IntroFeatureWithRiveModel } from '@/components/common/intro-feature';
import AiAssistant from '@/components/pages/box/ai-assistant';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mic, Globe, Zap, Brain, Shield, Sparkles } from 'lucide-react';
import * as m from '@/paraglide/messages';

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
          platform={m.ensi_ai_voice_assistant_ai_voice_assistant()}
          title={m.ensi_ai_voice_assistant_experience_the_future_of_home_control()}
          description={m.ensi_ai_voice_assistant_description()}
          checkPoints={[
            {
              title: m.ensi_ai_voice_assistant_natural_interaction(),
              description:
                m.ensi_ai_voice_assistant_communicate_with_your_home_as_you_would_with_a_person(),
            },
            {
              title: m.ensi_ai_voice_assistant_multilingual_mastery(),
              description:
                m.ensi_ai_voice_assistant_speak_in_your_preferred_language_no_matter_where_youre_from(),
            },
            {
              title: m.ensi_ai_voice_assistant_seamless_integration(),
              description:
                m.ensi_ai_voice_assistant_control_all_your_smart_devices_with_simple_voice_commands(),
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
          {m.ensi_ai_voice_assistant_unleash_the_power_of_voice()}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={stagger}
        >
          {[
            {
              icon: Mic,
              title: m.ensi_ai_voice_assistant_natural_language_processing(),
              description:
                m.ensi_ai_voice_assistant_understand_context_and_intent_not_just_words(),
            },
            {
              icon: Globe,
              title: m.ensi_ai_voice_assistant_multilingual_support(),
              description:
                m.ensi_ai_voice_assistant_communicate_in_multiple_languages_effortlessly(),
            },
            {
              icon: Zap,
              title: m.ensi_ai_voice_assistant_smart_device_integration(),
              description:
                m.ensi_ai_voice_assistant_control_your_entire_smart_home_ecosystem(),
            },
            {
              icon: Brain,
              title: m.ensi_ai_voice_assistant_adaptive_learning(),
              description:
                m.ensi_ai_voice_assistant_improves_and_personalizes_over_time(),
            },
            {
              icon: Shield,
              title: m.ensi_ai_voice_assistant_privacy_first_design(),
              description:
                m.ensi_ai_voice_assistant_your_conversations_stay_private_and_secure(),
            },
            {
              icon: Sparkles,
              title: m.ensi_ai_voice_assistant_contextual_awareness(),
              description:
                m.ensi_ai_voice_assistant_understands_and_responds_to_your_environment(),
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
          {m.ensi_ai_voice_assistant_transform_your_living_experience()}
        </motion.h2>
        <motion.div variants={fadeIn}>
          <Tabs defaultValue="convenience" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="convenience">
                {m.ensi_ai_voice_assistant_unparalleled_convenience()}
              </TabsTrigger>
              <TabsTrigger value="accessibility">
                {m.ensi_ai_voice_assistant_enhanced_accessibility()}
              </TabsTrigger>
              <TabsTrigger value="efficiency">
                {m.ensi_ai_voice_assistant_boosted_efficiency()}
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="convenience"
              className="bg-secondary mt-6 rounded-lg p-6"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {m.ensi_ai_voice_assistant_effortless_control_at_your_command()}
              </h3>
              <p>
                {m.ensi_ai_voice_assistant_effortless_control_description()}
              </p>
            </TabsContent>
            <TabsContent
              value="accessibility"
              className="bg-secondary mt-6 rounded-lg p-6"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {m.ensi_ai_voice_assistant_a_home_that_responds_to_everyone()}
              </h3>
              <p>
                {m.ensi_ai_voice_assistant_a_home_that_responds_to_everyone_description()}
              </p>
            </TabsContent>
            <TabsContent
              value="efficiency"
              className="bg-secondary mt-6 rounded-lg p-6"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {m.ensi_ai_voice_assistant_streamline_your_daily_routines()}
              </h3>
              <p>
                {m.ensi_ai_voice_assistant_streamline_your_daily_routines_description()}
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
          {m.ensi_ai_voice_assistant_experience_the_magic()}
        </motion.h2>
        <motion.div
          className="flex flex-col items-center space-y-8"
          variants={fadeIn}
        >
          <p className="max-w-2xl text-center">
            {m.ensi_ai_voice_assistant_see_our_ai_voice_assistant_in_action()}
          </p>
          <Button
            size="lg"
            onClick={() => setShowDemo(!showDemo)}
            className="px-8 py-6 text-lg"
          >
            {showDemo
              ? m.ensi_ai_voice_assistant_hide_interactive_demo()
              : m.ensi_ai_voice_assistant_launch_interactive_demo()}
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
          {m.ensi_ai_voice_assistant_ready_to_revolutionize_your_home()}
        </motion.h2>
        <motion.p className="mx-auto max-w-2xl text-lg" variants={fadeIn}>
          {m.ensi_ai_voice_assistant_join_the_future_of_smart_living()}
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
            {m.ensi_ai_voice_assistant_explore_ai_solutions()}
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
