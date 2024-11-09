'use client';

import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useVisitorType } from '@/context/VisitorTypeContext';
import { Home, Building2, Briefcase, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { m, motion, useInView } from 'framer-motion';
import * as message from '@/paraglide/messages';

export default function EnhancedCustomerBenefits() {
  const { visitorType, setVisitorType } = useVisitorType();
  const [activeTab, setActiveTab] = useState<string>('homeOwner');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (visitorType) {
      setActiveTab(visitorType);
    }
  }, [visitorType]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setVisitorType(value as 'homeOwner' | 'constructionCompany');
  };

  const benefitsData = {
    homeOwner: {
      title: message.main_customerBenefits_homeOwner_title(),
      description: message.main_customerBenefits_homeOwner_description(),
      image: '/placeholder.jpg?height=400&width=600',
      content: [
        {
          title: message.main_customerBenefits_homeOwner_content_1_title(),
          description:
            message.main_customerBenefits_homeOwner_content_1_description(),
          features: message
            .main_customerBenefits_homeOwner_content_1_features()
            .split(', '),
          imageUrl: '/placeholder.jpg?height=200&width=300',
        },
        {
          title: message.main_customerBenefits_homeOwner_content_2_title(),
          description:
            message.main_customerBenefits_homeOwner_content_2_description(),
          features: message
            .main_customerBenefits_homeOwner_content_2_features()
            .split(', '),
          imageUrl: '/placeholder.jpg?height=200&width=300',
        },
        {
          title: message.main_customerBenefits_homeOwner_content_3_title(),
          description:
            message.main_customerBenefits_homeOwner_content_3_description(),
          features: message
            .main_customerBenefits_homeOwner_content_3_features()
            .split(', '),
        },
        {
          title: message.main_customerBenefits_homeOwner_content_4_title(),
          description:
            message.main_customerBenefits_homeOwner_content_4_description(),
          features: message
            .main_customerBenefits_homeOwner_content_4_features()
            .split(', '),
          imageUrl: '/placeholder.jpg?height=200&width=300',
        },
      ],
      cta: message.main_customerBenefits_homeOwner_cta(),
    },
    constructionCompany: {
      title: message.main_customerBenefits_constructionCompany_title(),
      description:
        message.main_customerBenefits_constructionCompany_description(),
      image: '/placeholder.jpg?height=400&width=600',
      content: [
        {
          title:
            message.main_customerBenefits_constructionCompany_content_1_title(),
          description:
            message.main_customerBenefits_constructionCompany_content_1_description(),
          features: message
            .main_customerBenefits_constructionCompany_content_1_features()
            .split(', '),
        },
        {
          title:
            message.main_customerBenefits_constructionCompany_content_2_title(),
          description:
            message.main_customerBenefits_constructionCompany_content_2_description(),
          features: message
            .main_customerBenefits_constructionCompany_content_2_features()
            .split(', '),
        },
        {
          title:
            message.main_customerBenefits_constructionCompany_content_3_title(),
          description:
            message.main_customerBenefits_constructionCompany_content_3_description(),
          features: message
            .main_customerBenefits_constructionCompany_content_3_features()
            .split(', '),
        },
        {
          title:
            message.main_customerBenefits_constructionCompany_content_4_title(),
          description:
            message.main_customerBenefits_constructionCompany_content_4_description(),
          features: message
            .main_customerBenefits_constructionCompany_content_4_features()
            .split(', '),
        },
      ],
      cta: message.main_customerBenefits_constructionCompany_cta(),
    },
  };

  const renderContent = (content: typeof benefitsData.homeOwner.content) => (
    <div className="space-y-8">
      {content.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden rounded-3xl border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {section.title}
              </CardTitle>
              <CardDescription className="text-lg">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-3 mt-1 size-5 shrink-0 text-green-500" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {section.imageUrl && (
                  <div className="md:w-1/3">
                    <Image
                      src={section.imageUrl}
                      alt={section.title}
                      width={300}
                      height={200}
                      className="size-full rounded-xl object-cover"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mx-auto rounded-3xl border-gray-300 bg-white px-4 py-12"
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger
              value="homeOwner"
              className="flex items-center justify-center"
            >
              <Home className="mr-2 size-5" />
              <span className="hidden text-base sm:inline">
                {message.userType_homeOwner()}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="constructionCompany"
              className="flex items-center justify-center"
            >
              <Building2 className="mr-2 size-5" />
              <span className="hidden text-base sm:inline">
                {message.userType_constructionCompany()}
              </span>
            </TabsTrigger>
          </TabsList>
          {Object.entries(benefitsData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-normal tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {data.title}
                  </h2>
                  <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
                    {data.description}
                  </p>
                  {data.image && (
                    <div className="mb-12">
                      <Image
                        src={data.image}
                        alt={data.title}
                        width={600}
                        height={400}
                        className="mx-auto rounded-3xl shadow-lg"
                      />
                    </div>
                  )}
                </div>
                {renderContent(data.content)}
                <div className="mt-12 flex justify-center">
                  <Button
                    size="lg"
                    className="flex items-center px-8 py-6 text-lg"
                  >
                    {data.cta}
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
