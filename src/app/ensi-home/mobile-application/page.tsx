'use client';

import * as m from '@/paraglide/messages';
import { IntroFeatureWithMobileAppMockup } from '@/components/common/intro-feature';
import { useEffect } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const mobileFeatures = [
  {
    id: 'device-control',
    title: m.ensi_mobileApp_mobileFeatures_device_control_title(),
    description: m.ensi_mobileApp_mobileFeatures_device_control_description(),
    image: '/images/pages/ensi-home/mobile-application/splash-screen.jpeg',
    features: [
      {
        id: 'one-app',
        title:
          m.ensi_mobileApp_mobileFeatures_device_control_feature_one_app_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_device_control_feature_one_app_description(),
      },
      {
        id: 'full-control',
        title:
          m.ensi_mobileApp_mobileFeatures_device_control_feature_full_control_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_device_control_feature_full_control_description(),
      },
      {
        id: 'advanced-settings',
        title:
          m.ensi_mobileApp_mobileFeatures_device_control_feature_advanced_settings_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_device_control_feature_advanced_settings_description(),
      },
    ],
  },
  {
    id: 'ai-assistant',
    title: m.ensi_mobileApp_mobileFeatures_ai_assistant_title(),
    description: m.ensi_mobileApp_mobileFeatures_ai_assistant_description(),
    image: '/images/pages/ensi-home/mobile-application/voice-assistant.jpeg',
    features: [
      {
        id: 'natural-conversation',
        title:
          m.ensi_mobileApp_mobileFeatures_ai_assistant_feature_natural_conversation_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_ai_assistant_feature_natural_conversation_description(),
      },
      {
        id: 'remote-voice',
        title:
          m.ensi_mobileApp_mobileFeatures_ai_assistant_feature_remote_voice_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_ai_assistant_feature_remote_voice_description(),
      },
      {
        id: 'intelligent-understanding',
        title:
          m.ensi_mobileApp_mobileFeatures_ai_assistant_feature_intelligent_understanding_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_ai_assistant_feature_intelligent_understanding_description(),
      },
    ],
  },
  {
    id: 'smart-automations',
    title: m.ensi_mobileApp_mobileFeatures_smart_automations_title(),
    description:
      m.ensi_mobileApp_mobileFeatures_smart_automations_description(),
    image: '/placeholder.svg?height=600&width=300',
    features: [
      {
        id: 'ai-automation',
        title:
          m.ensi_mobileApp_mobileFeatures_smart_automations_feature_ai_automation_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_smart_automations_feature_ai_automation_description(),
      },
      {
        id: 'templates',
        title:
          m.ensi_mobileApp_mobileFeatures_smart_automations_feature_templates_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_smart_automations_feature_templates_description(),
      },
      {
        id: 'custom-builder',
        title:
          m.ensi_mobileApp_mobileFeatures_smart_automations_feature_custom_builder_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_smart_automations_feature_custom_builder_description(),
      },
    ],
  },
  {
    id: 'customization',
    title: m.ensi_mobileApp_mobileFeatures_customization_title(),
    description: m.ensi_mobileApp_mobileFeatures_customization_description(),
    image: '/images/pages/ensi-home/mobile-application/home-sub-screen.jpeg',
    features: [
      {
        id: 'dashboard',
        title:
          m.ensi_mobileApp_mobileFeatures_customization_feature_dashboard_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_customization_feature_dashboard_description(),
      },
      {
        id: 'quick-actions',
        title:
          m.ensi_mobileApp_mobileFeatures_customization_feature_quick_actions_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_customization_feature_quick_actions_description(),
      },
      {
        id: 'organization',
        title:
          m.ensi_mobileApp_mobileFeatures_customization_feature_organization_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_customization_feature_organization_description(),
      },
    ],
  },
  {
    id: 'device-setup',
    title: m.ensi_mobileApp_mobileFeatures_device_setup_title(),
    description: m.ensi_mobileApp_mobileFeatures_device_setup_description(),
    image: '/placeholder.svg?height=600&width=300',
    features: [
      {
        id: 'discovery',
        title:
          m.ensi_mobileApp_mobileFeatures_device_setup_feature_discovery_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_device_setup_feature_discovery_description(),
      },
      {
        id: 'guided-setup',
        title:
          m.ensi_mobileApp_mobileFeatures_device_setup_feature_guided_setup_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_device_setup_feature_guided_setup_description(),
      },
      {
        id: 'multi-device',
        title:
          m.ensi_mobileApp_mobileFeatures_device_setup_feature_multi_device_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_device_setup_feature_multi_device_description(),
      },
    ],
  },
  {
    id: 'multi-home',
    title: m.ensi_mobileApp_mobileFeatures_multi_home_title(),
    description: m.ensi_mobileApp_mobileFeatures_multi_home_description(),
    image: '/placeholder.svg?height=600&width=300',
    features: [
      {
        id: 'property-control',
        title:
          m.ensi_mobileApp_mobileFeatures_multi_home_feature_property_control_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_multi_home_feature_property_control_description(),
      },
      {
        id: 'access-control',
        title:
          m.ensi_mobileApp_mobileFeatures_multi_home_feature_access_control_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_multi_home_feature_access_control_description(),
      },
      {
        id: 'user-management',
        title:
          m.ensi_mobileApp_mobileFeatures_multi_home_feature_user_management_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_multi_home_feature_user_management_description(),
      },
    ],
  },
  {
    id: 'personalization',
    title: m.ensi_mobileApp_mobileFeatures_personalization_title(),
    description: m.ensi_mobileApp_mobileFeatures_personalization_description(),
    image: '/images/pages/ensi-home/mobile-application/preferences.jpeg',
    features: [
      {
        id: 'appearance',
        title:
          m.ensi_mobileApp_mobileFeatures_personalization_feature_appearance_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_personalization_feature_appearance_description(),
      },
      {
        id: 'notifications',
        title:
          m.ensi_mobileApp_mobileFeatures_personalization_feature_notifications_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_personalization_feature_notifications_description(),
      },
      {
        id: 'regional',
        title:
          m.ensi_mobileApp_mobileFeatures_personalization_feature_regional_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_personalization_feature_regional_description(),
      },
    ],
  },
  {
    id: 'security',
    title: m.ensi_mobileApp_mobileFeatures_security_title(),
    description: m.ensi_mobileApp_mobileFeatures_security_description(),
    image: '/images/pages/ensi-home/mobile-application/preferences.jpeg',
    features: [
      {
        id: 'security-features',
        title:
          m.ensi_mobileApp_mobileFeatures_security_feature_security_features_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_security_feature_security_features_description(),
      },
      {
        id: 'ai-security',
        title:
          m.ensi_mobileApp_mobileFeatures_security_feature_ai_security_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_security_feature_ai_security_description(),
      },
      {
        id: 'privacy',
        title: m.ensi_mobileApp_mobileFeatures_security_feature_privacy_title(),
        description:
          m.ensi_mobileApp_mobileFeatures_security_feature_privacy_description(),
      },
    ],
  },
];

interface MobileFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  features: {
    id: string;
    title: string;
    description: string;
  }[];
}

interface MobileFeaturesProps {
  features: MobileFeature[];
}

const MobileFeatures = ({ features }: MobileFeaturesProps) => (
  <div className="w-full py-20">
    <div className="container mx-auto">
      {features.map((feature, index) => (
        <div
          id={feature.id}
          key={feature.id}
          className={`flex flex-col gap-16 py-16 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} rounded-xl border lg:border-0 `}
        >
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="text-3xl font-bold lg:text-4xl">{feature.title}</h2>
            <p className="mt-4 text-xl text-gray-600">{feature.description}</p>
            <div className="mt-8 grid gap-4">
              {feature.features.map((subFeature) => (
                <div key={subFeature.id} className="flex items-start gap-2">
                  <Check className="mt-1 size-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">{subFeature.title}</h3>
                    <p className="text-gray-600">{subFeature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-8 border-gray-800 shadow-lg">
              <div className="absolute -right-[10px] top-[120px] h-[65px] w-[2px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute -left-[10px] top-[120px] h-[35px] w-[2px] rounded-r-lg bg-gray-800"></div>
              <div className="absolute -left-[10px] top-[165px] h-[35px] w-[2px] rounded-r-lg bg-gray-800"></div>
              <div className="size-full overflow-hidden rounded-[2.3rem] bg-white">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={600}
                  quality={100}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main>
      <IntroFeatureWithMobileAppMockup
        platform={m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_platform()}
        title={m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_title()}
        description={m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_description()}
        checkPoints={[
          {
            title:
              m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_checkPoints_unified_control_title(),
            description:
              m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_checkPoints_unified_control_description(),
          },
          {
            title:
              m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_checkPoints_energy_efficiency_title(),
            description:
              m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_checkPoints_energy_efficiency_description(),
          },
          {
            title:
              m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_checkPoints_enhanced_security_title(),
            description:
              m.ensi_mobileApp_intro_feature_with_mobileApp_mockup_checkPoints_enhanced_security_description(),
          },
        ]}
        mockupUrl="https://demo.ensihome.solace.com.tr"
      />
      <MobileFeatures features={mobileFeatures} />
    </main>
  );
}
