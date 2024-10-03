import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface ContentSectionProps {
  items: { id: string; title: string; href: string; component: React.FC }[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ items }) => (
  <div className="size-full py-20">
    <h2 className="mx-auto max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 md:text-5xl dark:text-neutral-200">
      Ensi Home&apos;u var edenler.
    </h2>
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative h-[600px] w-full content-center overflow-hidden rounded-3xl shadow-lg"
        >
          <div className="absolute inset-0 bg-gray-500/20"></div>
          <item.component />
          <div className="absolute inset-x-0 bottom-0 flex h-24 items-center justify-between bg-gray-500/50 px-4">
            <p className="font-semibold text-white">{item.title}</p>
            <Link href={item.href}>
              <Button variant="outline" className="ml-4">
                Visit the Page
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContentSection;
