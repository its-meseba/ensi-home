import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function KnowledgeBasePage() {
  const subLinks = [
    { href: '/knowledge-base/contact', label: 'Contact' },
    { href: '/knowledge-base/device-connections', label: 'Device Connections' },
    { href: '/knowledge-base/how-it-is-done', label: 'How It Is Done' },
    { href: '/knowledge-base/details', label: 'Details' },
    { href: '/knowledge-base/faq', label: 'FAQ' },
    { href: '/knowledge-base/how-it-works', label: 'How It Works' },
    {
      href: '/knowledge-base/technical-knowledge-base',
      label: 'Technical Knowledge Base',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-36">
      <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
        Knowledge Base
      </h1>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Find answers to your questions and learn more about Ensi Home products
        and services.
      </p>
      <div className="mx-auto grid max-w-3xl gap-4 md:gap-6">
        {subLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-background hover:bg-primary/5 border-border group flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <span className="group-hover:text-primary text-lg font-medium transition-colors">
              {link.label}
            </span>
            <ChevronRight className="text-muted-foreground group-hover:text-primary size-5 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
