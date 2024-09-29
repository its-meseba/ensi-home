import { MoveRight, PhoneCall } from 'lucide-react';
import Image from 'next/image'; // Import Next.js Image component

import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface IntroHeaderProps {
  badgeText: string;
  title: string;
  description: string;
  imageUrl: string; // Add imageUrl to the props
}

interface IntroHeaderWithModelProps {
  badgeText: string;
  title: string;
  description: string;
  callToAction1: string;
  callToAction2: string;
  modelUrl: string; // Add imageUrl to the props
}

export const IntroHeader = ({
  badgeText,
  title,
  description,
  imageUrl, // Destructure imageUrl from props
}: IntroHeaderProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">{badgeText}</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl">
              {title}
            </h1>
            <p className="text-muted-foreground max-w-md text-left text-xl leading-relaxed tracking-tight">
              {description}
            </p>
          </div>
          {/* <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline" onClick={() => console.log('Contact Us clicked')}>
              {callToAction1} <PhoneCall className="size-4" />
            </Button>
            <Button size="lg" className="gap-4" onClick={() => console.log('Learn More clicked')}>
              {callToAction2} <MoveRight className="size-4" />
            </Button>
          </div> */}
        </div>
        <div className="bg-muted aspect-square rounded-md">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />{' '}
          {/* Add Image component */}
        </div>
      </div>
    </div>
  </div>
);

export const IntroHeaderWithModel = ({
  badgeText,
  title,
  description,
  callToAction1,
  callToAction2,
  modelUrl, // Destructure imageUrl from props
}: IntroHeaderWithModelProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">{badgeText}</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl">
              {title}
            </h1>
            <p className="text-muted-foreground max-w-md text-left text-xl leading-relaxed tracking-tight">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              {callToAction1} <PhoneCall className="size-4" />
            </Button>
            <Button size="lg" className="gap-4">
              {callToAction2} <MoveRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted flex aspect-square items-center justify-center rounded-md border border-gray-300">
          <GLTFViewer modelUrl={modelUrl} />
        </div>
      </div>
    </div>
  </div>
);
