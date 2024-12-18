'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Scale, FileText } from 'lucide-react';
import { CurvedBackgroundParallaxHeaderVertical } from '@/components/common/CurvyBackground';
import * as m from '@/paraglide/messages';

export default function LegalPage() {
  const legalDocs = [
    {
      title: 'Privacy Policy',
      description:
        'Learn how we collect, use, and protect your personal information.',
      icon: Shield,
      href: '/legal/privacy-policy',
    },
    // {
    //   title: 'Terms of Service',
    //   description:
    //     'Understand the rules and guidelines for using our services.',
    //   icon: Scale,
    //   href: '/legal/terms-of-service',
    // },
    // {
    //   title: 'Cookie Policy',
    //   description:
    //     'Information about how we use cookies and similar technologies.',
    //   icon: FileText,
    //   href: '/legal/cookie-policy',
    // },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <CurvedBackgroundParallaxHeaderVertical
        images={['/images/pages/legal/cover-3.png']}
        activateAnimation={false}
        title="Ensi Home Legal"
        titleStyle="text-center text-4xl font-bold text-white md:text-6xl"
        description="Find legal information and resources for Ensi Home"
        hasShadow={true}
      >
        <p></p>
      </CurvedBackgroundParallaxHeaderVertical>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {legalDocs.map((doc) => (
              <Link key={doc.title} href={doc.href}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <doc.icon className="size-6" />
                      {doc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {doc.description}
                    </p>
                    <Button variant="ghost" className="group">
                      Read more
                      <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
