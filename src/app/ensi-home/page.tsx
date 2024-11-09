import Link from 'next/link';
import {
  ChevronRight,
  Mic,
  Box,
  FileText,
  Smartphone,
  Cloud,
  Home,
  Zap,
  Layers,
} from 'lucide-react';

export default function EnsiHomePage() {
  const subLinks = [
    {
      href: '/ensi-home/ai-voice-assistant',
      label: 'AI Voice Assistant',
      icon: Mic,
    },
    { href: '/ensi-home/box', label: 'Ensi Box', icon: Box },
    { href: '/ensi-home/case-studies', label: 'Case Studies', icon: FileText },
    {
      href: '/ensi-home/compatible-smart-devices',
      label: 'Compatible Smart Devices',
      icon: Zap,
    },
    {
      href: '/ensi-home/mobile-application',
      label: 'Mobile Application',
      icon: Smartphone,
    },
    { href: '/ensi-home/cloud', label: 'Cloud Services', icon: Cloud },
    {
      href: '/ensi-home/smart-life-areas',
      label: 'Smart Life Areas',
      icon: Home,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-36">
      <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
        Ensi Home
      </h1>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Discover the future of smart living with Ensi Home&apos;s innovative
        solutions and services.
      </p>
      <div className="mx-auto grid max-w-3xl gap-4 md:gap-6">
        {subLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-background hover:bg-primary/5 border-border group flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div className="flex items-center">
              <link.icon className="text-muted-foreground group-hover:text-primary mr-3 size-6 transition-colors" />
              <span className="group-hover:text-primary text-lg font-medium transition-colors">
                {link.label}
              </span>
            </div>
            <ChevronRight className="text-muted-foreground group-hover:text-primary size-5 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
