import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface ContentSectionProps {
  items: { id: string; title: string; href: string; component: React.FC }[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ items }) => (
  <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
    {items.map((item) => (
      <div
        key={item.id}
        className="relative h-[600px] w-full overflow-hidden rounded-lg bg-black shadow-lg"
      >
        <div className="absolute inset-0 bg-gray-500 bg-opacity-30"></div>
        <item.component />
        <div className="absolute inset-x-0 bottom-0 flex h-24 items-center justify-between bg-gray-500 bg-opacity-50 px-4">
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
);

export default ContentSection;
