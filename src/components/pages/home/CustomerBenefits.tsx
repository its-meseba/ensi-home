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
import { motion, useInView } from 'framer-motion';

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
    setVisitorType(
      value as 'homeOwner' | 'constructionCompany' | 'businessOwner'
    );
  };

  const benefitsData = {
    homeOwner: {
      title: 'Benefits for Home Owners',
      description: 'Experience the future of sustainable living with Ensi Home',
      image: '/placeholder.svg?height=400&width=600',
      content: [
        {
          title: 'Energy Efficiency',
          description:
            'Ensi Homes are designed to maximize energy efficiency, reducing your carbon footprint and saving you money on utility bills.',
          features: [
            'Smart thermostats and energy management systems',
            'High-performance insulation and windows',
            'Energy-efficient appliances and LED lighting',
            'Solar panel integration for renewable energy generation',
          ],
          imageUrl: '/placeholder.svg?height=200&width=300',
        },
        {
          title: 'Comfort and Well-being',
          description:
            'Enjoy a healthier and more comfortable living environment tailored to your needs.',
          features: [
            'Advanced air filtration and purification systems',
            'Optimal humidity control',
            'Noise reduction technologies',
            'Circadian lighting systems for better sleep patterns',
          ],
          imageUrl: '/placeholder.svg?height=200&width=300',
        },
        {
          title: 'Smart Home Integration',
          description:
            'Control your home with ease and enhance your daily life with cutting-edge technology.',
          features: [
            'Voice-activated home assistants',
            'Automated security and access control',
            'Smart appliances and device connectivity',
            'Customizable automation routines',
          ],
        },
        {
          title: 'Sustainable Materials',
          description:
            'Live in a home built with eco-friendly materials that are both durable and beautiful.',
          features: [
            'Recycled and renewable building materials',
            'Low-VOC paints and finishes',
            'Sustainable flooring options',
            'Water-efficient plumbing fixtures',
          ],
          imageUrl: '/placeholder.svg?height=200&width=300',
        },
      ],
      cta: 'Schedule a Home Consultation',
    },
    constructionCompany: {
      title: 'Benefits for Construction Companies',
      description:
        "Revolutionize your projects with Ensi Home's innovative construction solutions",
      image: '/placeholder.svg?height=400&width=600',
      content: [
        {
          title: 'Efficient Building Processes',
          description:
            'Streamline your construction projects and improve overall efficiency.',
          features: [
            'Modular construction techniques for faster assembly',
            'Prefabricated components to reduce on-site labor',
            'Advanced project management tools and software',
            'Automated quality control processes',
          ],
        },
        {
          title: 'Sustainable Practices',
          description:
            'Lead the industry in sustainable construction and attract eco-conscious clients.',
          features: [
            'Access to a network of sustainable material suppliers',
            'Waste reduction strategies and recycling programs',
            'Green building certification assistance (LEED, BREEAM, etc.)',
            'Training programs for sustainable construction techniques',
          ],
        },
        {
          title: 'Technology Integration',
          description:
            'Stay ahead of the curve with cutting-edge construction technologies.',
          features: [
            'BIM (Building Information Modeling) integration',
            'IoT sensors for real-time monitoring during construction',
            'Drone surveying and 3D mapping capabilities',
            'AR and VR tools for project visualization',
          ],
        },
        {
          title: 'Market Differentiation',
          description:
            "Set your company apart in a competitive market with Ensi Home's unique offerings.",
          features: [
            "Exclusive access to Ensi Home's proprietary designs",
            'Co-branding opportunities for marketing purposes',
            'Specialized training for your team on Ensi Home systems',
            'Priority support and consultation services',
          ],
        },
      ],
      cta: 'Partner with Ensi Home',
    },
    businessOwner: {
      title: 'Benefits for Business Owners',
      description:
        'Transform your workspace into a sustainable, productive environment with Ensi Home',
      image: '/placeholder.svg?height=400&width=600',
      content: [
        {
          title: 'Enhanced Productivity',
          description:
            'Create an optimal work environment that boosts employee performance and satisfaction.',
          features: [
            'Ergonomic design principles for comfortable workspaces',
            'Biophilic elements to reduce stress and improve focus',
            'Flexible space configurations for various work styles',
            'Acoustic management for noise reduction',
          ],
        },
        {
          title: 'Energy Cost Savings',
          description:
            'Significantly reduce your operational costs with energy-efficient solutions.',
          features: [
            'Smart building management systems',
            'Energy usage analytics and optimization',
            'Automated lighting and HVAC controls',
            'On-site renewable energy integration options',
          ],
        },
        {
          title: 'Sustainability Credentials',
          description:
            'Enhance your brand image and attract eco-conscious clients and employees.',
          features: [
            'Green building certifications (LEED, WELL, etc.)',
            'Transparent sustainability reporting tools',
            'Employee engagement programs for sustainability',
            'Waste reduction and recycling initiatives',
          ],
        },
        {
          title: 'Future-Proof Workspace',
          description:
            'Invest in a workspace that adapts to evolving business needs and technologies.',
          features: [
            'Modular and adaptable office layouts',
            'Integrated smart technology infrastructure',
            'Scalable energy and water management systems',
            'Regular updates and upgrades to Ensi Home systems',
          ],
        },
      ],
      cta: 'Book a Business Consultation',
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
      className="container mx-auto rounded-3xl border-gray-300 bg-white px-4 py-12"
    >
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger
            value="homeOwner"
            className="flex items-center justify-center"
          >
            <Home className="mr-2 size-5" />
            <span className="hidden text-base sm:inline">Home Owner</span>
          </TabsTrigger>
          <TabsTrigger
            value="constructionCompany"
            className="flex items-center justify-center"
          >
            <Building2 className="mr-2 size-5" />
            <span className="hidden text-base sm:inline">
              Construction Company
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="businessOwner"
            className="flex items-center justify-center"
          >
            <Briefcase className="mr-2 size-5" />
            <span className="hidden text-base sm:inline">Business Owner</span>
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
                <h2 className="mb-4 text-4xl font-bold">{data.title}</h2>
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
  );
}
