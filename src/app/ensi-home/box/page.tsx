'use client';
import Image from 'next/image';
import { IntroFeatureWithModel } from '@/components/common/intro-feature';
import { Check } from 'lucide-react';
import * as m from '@/paraglide/messages';
import { useEffect } from 'react';

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

const boxFeatures = [
  // First section with 2 images
  {
    id: 'key-features',
    title: m.ensi_box_key_features(),
    description: m.ensi_box_description(),
    images: [
      {
        src: '/images/pages/ensi-home/box/R1.jpg',
        alt: 'Ensi Box Key Features',
      },
      {
        src: '/images/pages/ensi-home/box/R5.jpg',
        alt: 'Ensi Box Features Overview',
      },
    ],
    features: [
      {
        id: 'centralized-control',
        title: m.ensi_box_centralized_control_feature_title(),
        description: m.ensi_box_centralized_control_feature_description(),
      },
      {
        id: 'secure-connectivity',
        title: m.ensi_box_secure_connectivity_feature_title(),
        description: m.ensi_box_secure_connectivity_feature_description(),
      },
      {
        id: 'high-compatibility',
        title: m.ensi_box_high_compatibility_feature_title(),
        description: m.ensi_box_high_compatibility_feature_description(),
      },
    ],
  },
  // Second section with 1 image
  {
    id: 'technical-specs',
    title: m.ensi_box_technical_specifications(),
    description:
      'Advanced hardware specifications designed for optimal smart home performance',
    images: [
      {
        src: '/images/pages/ensi-home/box/cpu.png',
        alt: 'Ensi Box Technical Specifications',
      },
    ],
    features: [
      {
        id: 'processor-memory',
        title: 'Processing Power',
        description: m.ensi_box_processor(),
      },
      {
        id: 'storage',
        title: 'Storage Capacity',
        description: m.ensi_box_storage(),
      },
      {
        id: 'connectivity',
        title: 'Connectivity Options',
        description: m.ensi_box_connectivity(),
      },
    ],
  },
  // Third section with 2 images
  {
    id: 'in-action',
    title: m.ensi_box_in_action(),
    description: 'See how Ensi Home Box transforms everyday living spaces',
    images: [
      {
        src: '/images/pages/ensi-home/box/in-action-1.jpeg',
        alt: m.ensi_box_in_living_room_alt(),
      },
      {
        src: '/images/pages/ensi-home/box/in-action-2.jpeg',
        alt: m.ensi_box_in_kitchen_alt(),
      },
    ],
    features: [
      {
        id: 'living-room',
        title: 'Living Room Integration',
        description:
          'Smart lighting, climate control, and entertainment system integration',
      },
      {
        id: 'kitchen',
        title: 'Kitchen Automation',
        description: 'Automated appliances and smart cooking assistance',
      },
      {
        id: 'security',
        title: 'Home Security',
        description: 'Advanced security features and monitoring capabilities',
      },
    ],
  },
];

interface BoxFeature {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  features: {
    id: string;
    title: string;
    description: string;
  }[];
}

interface BoxFeaturesProps {
  features: BoxFeature[];
}

const BoxFeatures = ({ features }: BoxFeaturesProps) => (
  <div className="w-full py-8 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {features.map((feature, index) => (
        <>
          <div
            id={feature.id}
            key={feature.id}
            className="flex flex-col gap-8 py-8 sm:gap-16 sm:py-16"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                {feature.title}
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:mt-4 sm:text-xl">
                {feature.description}
              </p>
              <div className="mt-6 grid gap-4 sm:mt-8">
                {feature.features.map((subFeature) => (
                  <div key={subFeature.id} className="flex items-start gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500 sm:size-5" />
                    <div>
                      <h3 className="text-sm font-semibold sm:text-base">
                        {subFeature.title}
                      </h3>
                      <p className="text-sm text-gray-600 sm:text-base">
                        {subFeature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`grid gap-4 sm:gap-6 ${feature.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}
            >
              {feature.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    quality={100}
                    className="h-auto w-full rounded-lg object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Placeholder for additional sections */}
          {index < features.length - 1 && (
            <div className="py-8 sm:py-16">
              {/* Placeholder for custom section */}
              <div className="flex h-24 w-full items-center justify-center rounded-lg bg-gray-100 sm:h-32">
                <p className="text-sm text-gray-500 sm:text-base">
                  Additional Section Placeholder
                </p>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  </div>
);

export default function BoxPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main>
      <IntroFeatureWithModel
        platform={m.ensi_box_platform()}
        title={m.ensi_box_title()}
        description={m.ensi_box_description()}
        checkPoints={[
          {
            title: m.ensi_box_centralized_control_title(),
            description: m.ensi_box_centralized_control_description(),
          },
          {
            title: m.ensi_box_high_compatibility_title(),
            description: m.ensi_box_high_compatibility_description(),
          },
          {
            title: m.ensi_box_secure_connectivity_title(),
            description: m.ensi_box_secure_connectivity_description(),
          },
        ]}
        modelUrl="/assets/models/ensi-box-3.glb"
      />
      <BoxFeatures features={boxFeatures} />
    </main>
  );
}
