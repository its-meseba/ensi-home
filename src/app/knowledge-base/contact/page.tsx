'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NewContactForm } from '@/components/pages/contact/NewContactForm';
import { NewContactBulletin } from '@/components/pages/contact/NewBulletin';
import { CurvedBackgroundParallax } from '@/components/common/CurvyBackground';
import * as m from '@/paraglide/messages';

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

export default function ContactPage() {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <CurvedBackgroundParallax
        imageSrc="/images/pages/knowledge-base/contact/contact.png"
        title={m.contact_contact_us()}
      />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {m.contact_get_in_touch()}
            </h2>
            <NewContactForm />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {m.contact_contact_information()}
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center">
                <MapPin className="mr-2 shrink-0" />
                <p>
                  Ayazağa Mahallesi Kemerburgaz Caddesi, Vadi İstanbul Park
                  Sitesi, 7A Blok No:7B İç Kapı No: 4, Sarıyer İstanbul
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 shrink-0" />
                <p>solace@solace.com.tr</p>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-lg font-semibold md:text-xl">
              {m.contact_connect_with_us()}
            </h3>
            <a
              href="https://www.linkedin.com/company/ensihome"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Linkedin className="mr-2" />
              {m.contact_follow_us_on_linkedin()}
            </a>

            <a
              href="https://www.linkedin.com/company/ensihome"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pt-4 text-blue-600 hover:underline"
            >
              <Instagram className="mr-2" />
              {m.contact_follow_us_on_instagram()}
            </a>

            <div className="mt-8 md:mt-12">
              <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                {m.contact_stay_updated()}
              </h2>
              <NewContactBulletin />
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-12" variants={itemVariants}>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {m.contact_our_location()}
          </h2>
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.2262589562814!2d28.995751776191386!3d41.11392077134283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5e4c7a3e2e9%3A0x1f0c0b2f3c3c3c3c!2sEnsi%20Home!5e0!3m2!1sen!2str!4v1625123456789!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
