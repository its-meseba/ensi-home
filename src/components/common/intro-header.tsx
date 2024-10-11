import { MoveRight, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface IntroHeaderProps {
  badgeText: string;
  title: string;
  description: string;
  imageUrl: string;
  callToAction1: string;
  callToAction2: string;
}

interface IntroHeaderWithModelProps {
  badgeText: string;
  title: string;
  description: string;
  callToAction1: string;
  callToAction2: string;
  modelUrl: string;
}

export const IntroHeader = ({
  badgeText,
  title,
  description,
  imageUrl,
  callToAction1,
  callToAction2,
}: IntroHeaderProps) => (
  <div className="w-full py-12 md:py-20 lg:py-32">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Badge variant="outline" className="w-fit">
            {badgeText}
          </Badge>
          <h1 className="text-5xl font-normal tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed tracking-tight sm:text-xl">
            {description}
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" variant="outline">
              {callToAction1} <PhoneCall className="size-4" />
            </Button>
            <Button size="lg" className="gap-2">
              {callToAction2} <MoveRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="mx-auto aspect-square w-full max-w-2xl lg:col-span-5 lg:max-w-none">
          <div className="relative size-full overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
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
  modelUrl,
}: IntroHeaderWithModelProps) => (
  <div className="w-full py-12 md:py-20 lg:py-32">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Badge variant="outline" className="w-fit">
            {badgeText}
          </Badge>
          <h1 className="font-regular text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed tracking-tight sm:text-xl">
            {description}
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" variant="outline">
              {callToAction1} <PhoneCall className="size-4" />
            </Button>
            <Button size="lg" className="gap-2">
              {callToAction2} <MoveRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="mx-auto aspect-square w-full max-w-2xl lg:col-span-5 lg:max-w-none">
          <div className="bg-muted flex size-full items-center justify-center overflow-hidden rounded-2xl border border-gray-300">
            <GLTFViewer modelUrl={modelUrl} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
