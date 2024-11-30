'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  IntroFeature,
  IntroFeatureWithModel,
} from '@/components/common/intro-feature';
import { Case1 } from '@/components/common/sliding-cases';
import { Download, Zap, Shield, Maximize } from 'lucide-react';
import * as m from '@/paraglide/messages';

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
          // imageUrl="/images/pages/ensi-home/box/ensi-home-box.png"
          modelUrl="/assets/models/ensi-box-3.glb"
        />
      </motion.section>

      <motion.section className="mb-16" variants={containerVariants}>
        <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
          {m.ensi_box_key_features()}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {[
            {
              icon: <Zap className="mr-2" />,
              title: m.ensi_box_centralized_control_feature_title(),
              description: m.ensi_box_centralized_control_feature_description(),
            },
            {
              icon: <Shield className="mr-2" />,
              title: m.ensi_box_secure_connectivity_feature_title(),
              description: m.ensi_box_secure_connectivity_feature_description(),
            },
            {
              icon: <Maximize className="mr-2" />,
              title: m.ensi_box_high_compatibility_feature_title(),
              description: m.ensi_box_high_compatibility_feature_description(),
            },
            {
              icon: <Download className="mr-2" />,
              title: m.ensi_box_scalability_feature_title(),
              description: m.ensi_box_scalability_feature_description(),
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
          {m.ensi_box_technical_specifications()}
        </motion.h2>
        <motion.div className="bg-muted rounded-lg p-6" variants={itemVariants}>
          <ul className="list-inside list-disc space-y-2">
            <li>{m.ensi_box_processor()}</li>
            <li>{m.ensi_box_memory()}</li>
            <li>{m.ensi_box_storage()}</li>
            <li>{m.ensi_box_connectivity()}</li>
            <li>{m.ensi_box_ports()}</li>
            <li>{m.ensi_box_power()}</li>
          </ul>
          <Button className="mt-4">
            <Download className="mr-2 size-4" />{' '}
            {m.ensi_box_download_full_specifications()}
          </Button>
        </motion.div>
      </motion.section>

      <motion.section className="mb-16" variants={containerVariants}>
        <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
          {m.ensi_box_integration_process()}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-xl font-semibold">
              {m.ensi_box_easy_installation()}
            </h3>
            <p className="mb-4">{m.ensi_box_easy_installation_description()}</p>
            <ol className="list-inside list-decimal space-y-2">
              <li>{m.ensi_box_site_assessment_and_planning()}</li>
              <li>{m.ensi_box_wiring_and_infrastructure_setup()}</li>
              <li>{m.ensi_box_box_installation_and_configuration()}</li>
              <li>{m.ensi_box_device_pairing_and_system_testing()}</li>
              <li>{m.ensi_box_user_training_and_handover()}</li>
            </ol>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="/placeholder.jpg?height=300&width=400"
              alt={m.ensi_box_in_action_alt_living_room()}
              width={400}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="mb-16" variants={containerVariants}>
        <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
          {m.ensi_box_in_action()}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
        >
          {[
            {
              src: '/placeholder.jpg?height=200&width=300',
              alt: m.ensi_box_in_living_room_alt(),
            },
            {
              src: '/placeholder.jpg?height=200&width=300',
              alt: m.ensi_box_in_kitchen_alt(),
            },
            {
              src: '/placeholder.jpg?height=200&width=300',
              alt: m.ensi_box_in_home_office_alt(),
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
          {m.ensi_box_ready_to_transform_your_home()}
        </motion.h2>
        <motion.p className="mb-8" variants={itemVariants}>
          {m.ensi_box_get_in_touch()}
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/contact">
            <Button size="lg">
              {m.ensi_box_contact_us_for_technical_details()}
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <Case1
          title={m.ensi_box_our_partners()}
          logos={logos}
          interval={3000}
        />
      </motion.section>
    </motion.div>
  );
}
