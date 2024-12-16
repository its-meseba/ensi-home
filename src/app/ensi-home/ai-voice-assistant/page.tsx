'use client';

import { CurvedBackgroundParallaxHeaderVertical } from '@/components/common/CurvyBackground';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import * as m from '@/paraglide/messages';
import { Mic, Globe, Zap, Brain, Shield, Sparkles } from 'lucide-react';

export default function AIVoiceAssistantPage() {
  return (
    <div className="relative min-h-screen w-full">
      <CurvedBackgroundParallaxHeaderVertical
        images={[
          '/images/pages/ensi-home/ai-voice-assistant/cover.jpeg',
          '/images/pages/ensi-home/ai-voice-assistant/cover.jpeg',
        ]}
        title="A House That Understands"
        titleStyle="text-center text-3xl sm:text-4xl font-bold text-white md:text-6xl"
        description={m.ensi_ai_voice_assistant_description()}
        hasShadow={true}
      >
        <></>
      </CurvedBackgroundParallaxHeaderVertical>

      <main className="container mx-auto space-y-12 px-4 py-8 md:space-y-24 md:py-16">
        {/* Mobile & House Integration Section */}
        <section className="grid gap-6 md:grid-cols-2 md:gap-12">
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <img
                src="/images/pages/ensi-home/ai-voice-assistant/voice-assistant.jpg"
                alt="Mobile Voice Assistant"
                className="hidden size-full object-cover sm:block"
              />
              <img
                src="/images/pages/ensi-home/ai-voice-assistant/voice-assistant-small.jpg"
                alt="Mobile Voice Assistant"
                className="block size-full object-cover sm:hidden"
              />
            </div>
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
                {m.ensi_mobileApp_mobileFeatures_ai_assistant_title()}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {m.ensi_mobileApp_mobileFeatures_ai_assistant_description()}
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <img
                src="/images/pages/ensi-home/ai-voice-assistant/house-microphone.png"
                alt="Home Voice Control"
                className="size-full object-cover"
              />
            </div>
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
                Room-by-Room Voice Control
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Our IoT voice control devices are installed in every room,
                creating a seamless network for natural communication with your
                home. Each unit features high-quality microphones and speakers,
                ensuring your voice commands are heard clearly from anywhere in
                your house.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="space-y-8 md:space-y-12">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            {m.ensi_ai_voice_assistant_unleash_the_power_of_voice()}
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="space-y-3 p-4 md:space-y-4 md:p-6">
                  <feature.icon className="text-primary size-8 md:size-10" />
                  <h3 className="text-lg font-semibold md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
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
];
