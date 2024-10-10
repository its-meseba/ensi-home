'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import {
  AlertCircle,
  BellRing,
  Brain,
  ChevronUp,
  Cloud,
  Globe,
  Lock,
  RefreshCw,
  Scale,
  Server,
  Shield,
  Users,
} from 'lucide-react';

const sections = [
  { id: 'overview', title: 'Overview', icon: Cloud },
  { id: 'servers', title: 'Server Systems', icon: Server },
  { id: 'ai', title: 'AI Capabilities', icon: Brain },
  { id: 'security', title: 'Security', icon: Lock },
  { id: 'benefits', title: 'Benefits', icon: Users },
];

export default function CloudPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const NavigationContent = ({ closeNav }: { closeNav?: () => void }) => (
    <div className="py-4">
      <h2 className="mb-4 px-4 text-lg font-semibold">Cloud Infrastructure</h2>
      <div className="space-y-2 px-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              setActiveSection(section.id);
              if (closeNav) closeNav();
            }}
            className={`flex w-full items-center rounded-3xl px-4 py-2 text-sm transition-colors ${
              activeSection === section.id
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            <section.icon className="mr-2 size-4" />
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );

  const Content = () => (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="mb-6 text-3xl font-bold">
        Ensi Home Cloud Infrastructure
      </h1>

      {activeSection === 'overview' && (
        <Card>
          <CardHeader>
            <CardTitle>Cloud Infrastructure Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our cloud infrastructure provides a robust, scalable, and secure
              foundation for your smart home experience:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Distributed data centers for high availability and low latency
              </li>
              <li>Redundant systems to ensure 99.99% uptime</li>
              <li>State-of-the-art encryption for data protection</li>
              <li>
                Scalable architecture to accommodate growing smart home needs
              </li>
              <li>
                Continuous monitoring and automatic updates for optimal
                performance
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      {activeSection === 'servers' && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Users className="text-primary mb-2 size-8" />
              <CardTitle>User Management System</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Centralized user authentication and authorization, ensuring
                secure access to your Ensi Home ecosystem from any device.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BellRing className="text-primary mb-2 size-8" />
              <CardTitle>Notification Server</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Real-time notification system that keeps you informed about
                important events in your smart home, from security alerts to
                energy-saving tips.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="text-primary mb-2 size-8" />
              <CardTitle>Proxy Server</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Maintains a secure connection between your mobile application
                and the Ensi Home Box, allowing you to control your smart home
                from anywhere in the world.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Server className="text-primary mb-2 size-8" />
              <CardTitle>Data Storage and Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Secure storage and processing of your smart home data, enabling
                advanced analytics and personalized recommendations.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'ai' && (
        <Card>
          <CardHeader>
            <CardTitle>Artificial Intelligence Servers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our AI servers power various intelligent features of your Ensi
              Home:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Brain className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>Large Language Models:</strong> Enable natural
                  language understanding for intuitive voice commands and
                  chatbot interactions.
                </span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>Speech Recognition:</strong> Accurately interpret
                  voice commands in multiple languages.
                </span>
              </li>
              <li className="flex items-start">
                <BellRing className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>Speech Generation:</strong> Provide natural-sounding
                  voice responses and notifications.
                </span>
              </li>
              <li className="flex items-start">
                <Scale className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>Pattern Recognition:</strong> Analyze usage patterns
                  to optimize energy consumption and enhance home security.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      {activeSection === 'security' && (
        <Card>
          <CardHeader>
            <CardTitle>Security and Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We prioritize the security and privacy of your data:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Lock className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>End-to-End Encryption:</strong> All data transmitted
                  between your devices and our servers is encrypted.
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>Regular Security Audits:</strong> We conduct frequent
                  penetration testing and security assessments.
                </span>
              </li>
              <li className="flex items-start">
                <RefreshCw className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>Automatic Updates:</strong> Security patches are
                  applied automatically to keep your system protected.
                </span>
              </li>
              <li className="flex items-start">
                <Users className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>Data Privacy Controls:</strong> Granular controls
                  allow you to manage what data is stored and how it&apos;s
                  used.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      {activeSection === 'benefits' && (
        <Card>
          <CardHeader>
            <CardTitle>Benefits for Users and Construction Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">For Users:</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Seamless control of your smart home from anywhere</li>
                  <li>Enhanced security and privacy protection</li>
                  <li>Personalized AI-driven recommendations</li>
                  <li>Continuous improvements through automatic updates</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  For Construction Companies:
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Differentiate your offerings with cutting-edge smart home
                    technology
                  </li>
                  <li>Long-term support and updates for installed systems</li>
                  <li>Scalable solutions for projects of any size</li>
                  <li>
                    Enhanced property value through advanced home automation
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 text-center">
        <Link href="/contact">
          <Button size="lg" className="px-8 py-4 text-lg">
            More About Our Cloud Solutions
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="flex">
        {isLargeScreen && (
          <div className="bg-background h-screen w-64 overflow-y-auto rounded-r-3xl border-r">
            <NavigationContent />
          </div>
        )}
        <div className="flex-1">
          <Content />
        </div>
      </div>
      {!isLargeScreen && (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full"
            >
              <ChevronUp className="mr-2 size-4" />
              Sections
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[50vh] rounded-t-[24px]">
            <NavigationContent closeNav={() => {}} />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
