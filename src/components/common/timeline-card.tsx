'use client';

import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, Package, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import * as m from '@/paraglide/messages';

export default function Component() {
  const data = [
    {
      title: m.knowledge_base_how_it_is_done_understanding_your_needs_title(),
      icon: <Users className="text-primary size-8 sm:size-10" />,
      content: (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold sm:text-xl">
              {m.knowledge_base_how_it_is_done_consultation_customization()}
            </h3>
            <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_in_depth_consultation()}
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_site_visits()}
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_customization_options()}
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <Image
                src="/images/pages/knowledge-base/how-it-is-done/1_1.png"
                alt={m.knowledge_base_how_it_is_done_customer_consultation()}
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
              <Image
                // src="/placeholder.jpg?height=240&width=320"
                src="/images/pages/knowledge-base/how-it-is-done/1_2.png"
                alt={m.knowledge_base_how_it_is_done_home_assessment()}
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: m.knowledge_base_how_it_is_done_supplying_smart_devices_title(),
      icon: <Package className="text-primary size-8 sm:size-10" />,
      content: (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold sm:text-xl">
              {m.knowledge_base_how_it_is_done_procurement_quality_assurance()}
            </h3>
            <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_procurement_process()}
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_quality_assurance_measures()}
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_coordination_with_timelines()}
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <Image
                // src="/placeholder.jpg?height=240&width=320"
                src="/images/pages/knowledge-base/how-it-is-done/2_1.png"
                alt={m.knowledge_base_how_it_is_done_device_selection()}
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
              <Image
                // src="/placeholder.jpg?height=240&width=320"
                src="/images/pages/knowledge-base/how-it-is-done/2_2.png"
                alt={m.knowledge_base_how_it_is_done_quality_assurance()}
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: m.knowledge_base_how_it_is_done_installation_integration_title(),
      icon: <Wrench className="text-primary size-8 sm:size-10" />,
      content: (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold sm:text-xl">
              {m.knowledge_base_how_it_is_done_on_site_support()}
            </h3>
            <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_expert_support()}
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_collaboration_with_teams()}
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_training_for_partners()}
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  {m.knowledge_base_how_it_is_done_final_testing()}
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <Image
                //  src="/placeholder.jpg?height=240&width=320"
                src="/images/pages/knowledge-base/how-it-is-done/3_1.png"
                alt={m.knowledge_base_how_it_is_done_on_site_installation()}
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
              <Image
                // src="/placeholder.jpg?height=240&width=320"
                src="/images/pages/knowledge-base/how-it-is-done/3_2.png"
                alt={m.knowledge_base_how_it_is_done_team_collaboration()}
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      ),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-16">
      <h2 className="mb-4 text-center text-2xl font-bold sm:mb-6 sm:text-4xl">
        {m.knowledge_base_how_it_is_done_collaborative_process()}
      </h2>
      <p className="text-muted-foreground mb-8 text-center text-base sm:mb-12 sm:text-xl">
        {m.knowledge_base_how_it_is_done_seamless_integration()}
      </p>
      <Timeline data={data} />
      <div className="mt-8 flex flex-col items-center space-y-6 sm:mt-16 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-2xl">
            <CardContent className="p-4 sm:p-8">
              <h3 className="mb-4 text-center text-xl font-semibold sm:mb-6 sm:text-2xl">
                {m.knowledge_base_how_it_is_done_benefits_of_process()}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start justify-center">
                  <ChevronRight className="text-primary mr-2 size-5 shrink-0 sm:mr-3 sm:size-6" />
                  <span className="text-sm sm:text-lg">
                    {m.knowledge_base_how_it_is_done_minimizing_disruptions()}
                  </span>
                </li>
                <li className="flex items-start justify-center">
                  <ChevronRight className="text-primary mr-2 size-5 shrink-0 sm:mr-3 sm:size-6" />
                  <span className="text-sm sm:text-lg">
                    {m.knowledge_base_how_it_is_done_tailored_solutions()}
                  </span>
                </li>
                <li className="flex items-start justify-center">
                  <ChevronRight className="text-primary mr-2 size-5 shrink-0 sm:mr-3 sm:size-6" />
                  <span className="text-sm sm:text-lg">
                    {m.knowledge_base_how_it_is_done_long_term_support()}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="w-full max-w-2xl">
            <CardContent className="p-4 sm:p-8">
              <h3 className="mb-4 text-center text-xl font-semibold sm:mb-6 sm:text-2xl">
                {m.knowledge_base_how_it_is_done_testimonials()}
              </h3>
              <blockquote className="border-primary border-l-4 pl-4 text-center text-sm italic sm:pl-6 sm:text-lg">
                &quot;{m.knowledge_base_how_it_is_done_testimonial_quote()}
                &quot;
              </blockquote>
              <p className="mt-2 text-center text-sm sm:mt-4 sm:text-lg">
                - {m.knowledge_base_how_it_is_done_testimonial_author()}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 text-center sm:mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-3 text-base font-semibold shadow-md transition-all duration-300 hover:shadow-lg sm:px-8 sm:py-4 sm:text-lg"
        >
          {m.knowledge_base_how_it_is_done_initiate_partnership()}
        </Button>
      </motion.div>
    </div>
  );
}
