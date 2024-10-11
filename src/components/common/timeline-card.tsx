import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, Package, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Component() {
  const data = [
    {
      title: '1. Understanding Your Needs',
      icon: <Users className="text-primary size-8 sm:size-10" />,
      content: (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold sm:text-xl">
              Consultation & Customization
            </h3>
            <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  In-depth consultation to understand your specific requirements
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Site visits for accurate assessment of your space
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Customization options to tailor solutions to your needs
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <Image
                src="/placeholder.jpg?height=240&width=320"
                alt="Customer consultation"
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
              <Image
                src="/placeholder.jpg?height=240&width=320"
                alt="Home assessment"
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
      title: '2. Supplying Smart Devices',
      icon: <Package className="text-primary size-8 sm:size-10" />,
      content: (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold sm:text-xl">
              Procurement & Quality Assurance
            </h3>
            <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Efficient procurement process for all required smart devices
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Rigorous quality assurance measures for all equipment
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Coordination with construction timelines for seamless
                  integration
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <Image
                src="/placeholder.jpg?height=240&width=320"
                alt="Smart device selection"
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
              <Image
                src="/placeholder.jpg?height=240&width=320"
                alt="Quality assurance process"
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
      title: '3. Installation & Integration',
      icon: <Wrench className="text-primary size-8 sm:size-10" />,
      content: (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold sm:text-xl">
              On-site Support & Collaboration
            </h3>
            <ul className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Expert on-site support during installation
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Seamless collaboration with construction teams
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Comprehensive training for construction partners
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mr-2 size-4 shrink-0 sm:size-5" />
                <span className="text-sm sm:text-base">
                  Final testing and quality checks
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <Image
                src="/placeholder.jpg?height=240&width=320"
                alt="On-site installation"
                width={320}
                height={240}
                className="w-full rounded-lg object-cover shadow-lg"
              />
              <Image
                src="/placeholder.jpg?height=240&width=320"
                alt="Team collaboration"
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
        Our Collaborative Process
      </h2>
      <p className="text-muted-foreground mb-8 text-center text-base sm:mb-12 sm:text-xl">
        Seamless integration of smart home solutions for construction projects
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
                Benefits of Our Process
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start justify-center">
                  <ChevronRight className="text-primary mr-2 size-5 shrink-0 sm:mr-3 sm:size-6" />
                  <span className="text-sm sm:text-lg">
                    Minimizing disruptions to construction timelines
                  </span>
                </li>
                <li className="flex items-start justify-center">
                  <ChevronRight className="text-primary mr-2 size-5 shrink-0 sm:mr-3 sm:size-6" />
                  <span className="text-sm sm:text-lg">
                    Tailored solutions for each unique project
                  </span>
                </li>
                <li className="flex items-start justify-center">
                  <ChevronRight className="text-primary mr-2 size-5 shrink-0 sm:mr-3 sm:size-6" />
                  <span className="text-sm sm:text-lg">
                    Long-term support and maintenance
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
                Testimonials
              </h3>
              <blockquote className="border-primary border-l-4 pl-4 text-center text-sm italic sm:pl-6 sm:text-lg">
                &quot;Working with Ensi Home has streamlined our smart home
                integration process. Their team&apos;s expertise and support
                have been invaluable to our projects.&quot;
              </blockquote>
              <p className="mt-2 text-center text-sm sm:mt-4 sm:text-lg">
                - John Doe, Lead Architect at BuildSmart Construction
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
          Initiate a Partnership Today
        </Button>
      </motion.div>
    </div>
  );
}
