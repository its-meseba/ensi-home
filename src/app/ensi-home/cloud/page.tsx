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
import * as m from '@/paraglide/messages';

const sections = [
  { id: 'overview', title: m.ensi_cloud_overview_title(), icon: Cloud },
  { id: 'servers', title: m.ensi_cloud_server_systems_title(), icon: Server },
  { id: 'ai', title: m.ensi_cloud_ai_capabilities_title(), icon: Brain },
  { id: 'security', title: m.ensi_cloud_security_title(), icon: Lock },
  { id: 'benefits', title: m.ensi_cloud_benefits_title(), icon: Users },
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
      <h2 className="mb-4 px-4 text-lg font-semibold">
        {m.ensi_cloud_navigation_title()}
      </h2>
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
        {m.ensi_cloud_home_cloud_infrastructure()}
      </h1>

      {activeSection === 'overview' && (
        <Card>
          <CardHeader>
            <CardTitle>{m.ensi_cloud_overview_card_title()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{m.ensi_cloud_overview_card_description()}</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>{m.ensi_cloud_overview_card_list_1()}</li>
              <li>{m.ensi_cloud_overview_card_list_2()}</li>
              <li>{m.ensi_cloud_overview_card_list_3()}</li>
              <li>{m.ensi_cloud_overview_card_list_4()}</li>
              <li>{m.ensi_cloud_overview_card_list_5()}</li>
            </ul>
          </CardContent>
        </Card>
      )}

      {activeSection === 'servers' && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Users className="text-primary mb-2 size-8" />
              <CardTitle>
                {m.ensi_cloud_user_management_system_title()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{m.ensi_cloud_user_management_system_description()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BellRing className="text-primary mb-2 size-8" />
              <CardTitle>{m.ensi_cloud_notification_server_title()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{m.ensi_cloud_notification_server_description()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="text-primary mb-2 size-8" />
              <CardTitle>{m.ensi_cloud_proxy_server_title()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{m.ensi_cloud_proxy_server_description()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Server className="text-primary mb-2 size-8" />
              <CardTitle>
                {m.ensi_cloud_data_storage_processing_title()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{m.ensi_cloud_data_storage_processing_description()}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'ai' && (
        <Card>
          <CardHeader>
            <CardTitle>
              {m.ensi_cloud_artificial_intelligence_servers_title()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {m.ensi_cloud_artificial_intelligence_servers_description()}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Brain className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>{m.ensi_cloud_large_language_models_bold()}:</strong>{' '}
                  {m.ensi_cloud_large_language_models_description()}
                </span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>{m.ensi_cloud_speech_recognition_bold()}:</strong>{' '}
                  {m.ensi_cloud_speech_recognition_description()}
                </span>
              </li>
              <li className="flex items-start">
                <BellRing className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>{m.ensi_cloud_speech_generation_bold()}:</strong>{' '}
                  {m.ensi_cloud_speech_generation_description()}
                </span>
              </li>
              <li className="flex items-start">
                <Scale className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>{m.ensi_cloud_pattern_recognition_bold()}:</strong>{' '}
                  {m.ensi_cloud_pattern_recognition_description()}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      {activeSection === 'security' && (
        <Card>
          <CardHeader>
            <CardTitle>{m.ensi_cloud_security_privacy_title()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {m.ensi_cloud_security_privacy_description()}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Lock className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>{m.ensi_cloud_end_to_end_encryption_bold()}:</strong>{' '}
                  {m.ensi_cloud_end_to_end_encryption_description()}
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>
                    {m.ensi_cloud_regular_security_audits_bold()}:
                  </strong>{' '}
                  {m.ensi_cloud_regular_security_audits_description()}
                </span>
              </li>
              <li className="flex items-start">
                <RefreshCw className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>{m.ensi_cloud_automatic_updates_bold()}:</strong>{' '}
                  {m.ensi_cloud_automatic_updates_description()}
                </span>
              </li>
              <li className="flex items-start">
                <Users className="text-primary mr-2 size-6 shrink-0" />
                <span>
                  <strong>{m.ensi_cloud_data_privacy_controls_bold()}:</strong>{' '}
                  {m.ensi_cloud_data_privacy_controls_description()}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      )}

      {activeSection === 'benefits' && (
        <Card>
          <CardHeader>
            <CardTitle>
              {m.ensi_cloud_benefits_users_construction_title()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  {m.ensi_cloud_for_users()}
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>{m.ensi_cloud_user_benefit_1()}</li>
                  <li>{m.ensi_cloud_user_benefit_2()}</li>
                  <li>{m.ensi_cloud_user_benefit_3()}</li>
                  <li>{m.ensi_cloud_user_benefit_4()}</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  {m.ensi_cloud_for_construction_companies()}
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>{m.ensi_cloud_construction_benefit_1()}</li>
                  <li>{m.ensi_cloud_construction_benefit_2()}</li>
                  <li>{m.ensi_cloud_construction_benefit_3()}</li>
                  <li>{m.ensi_cloud_construction_benefit_4()}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 text-center">
        <Link href="/contact">
          <Button size="lg" className="px-8 py-4 text-lg">
            {m.ensi_cloud_more_about_cloud_solutions()}
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
              {m.ensi_cloud_sections_button()}
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
