import { Check } from 'lucide-react';
import Image from 'next/image'; // Import Next.js Image component

import AiAssistant from '@/components/pages/box/ai-assistant';
import GLTFViewer from '@/components/pages/box/gltf-viewer';
import { Badge } from '@/components/ui/badge';
import FlutterIframe from '@/components/pages/ensi-home/mobile-application/device-iframe';

interface IntroFeatureProps {
  platform: string;
  title: string;
  description: string;
  checkPoints: { title: string; description: string }[];
  imageUrl: string; // Add imageUrl to the props
}

interface IntroFeatureWithModelProps {
  platform: string;
  title: string;
  description: string;
  checkPoints: { title: string; description: string }[];
  modelUrl: string; // Add modelUrl to the props
}

interface IntroFeatureWithRiveModelProps {
  platform: string;
  title: string;
  description: string;
  checkPoints: { title: string; description: string }[];
}

export const IntroFeature = ({
  platform,
  title,
  description,
  checkPoints,
  imageUrl, // Destructure imageUrl from props
}: IntroFeatureProps) => (
  <div className="w-full py-28 lg:py-40">
    <div className="container mx-auto px-2 lg:px-8">
      <div className="container grid grid-cols-1 items-center gap-4 rounded-lg p-0 lg:grid-cols-2 lg:gap-8 lg:p-8">
        <div className="order-2 flex flex-col gap-6 lg:order-1 lg:gap-10">
          <div className="flex flex-col gap-3 lg:gap-4">
            <div>
              <Badge variant="outline">{platform}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-left text-2xl tracking-tighter lg:text-3xl xl:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground max-w-xl text-left text-base leading-relaxed tracking-tight lg:text-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-1 lg:gap-6 lg:pl-6">
            {checkPoints.map((checkPoint, index) => (
              <div
                key={index}
                className="flex flex-row items-start gap-3 lg:gap-6"
              >
                <Check className="text-primary mt-1 size-4 lg:mt-2" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm lg:text-base">{checkPoint.title}</p>
                  <p className="text-muted-foreground text-xs lg:text-sm">
                    {checkPoint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 flex aspect-square items-center justify-center  rounded-md lg:order-2">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

export const IntroFeatureWithModel = ({
  platform,
  title,
  description,
  checkPoints,
  modelUrl, // Destructure modelUrl from props
}: IntroFeatureWithModelProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="container grid grid-cols-1 items-center gap-8 rounded-lg py-8 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="outline">{platform}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
            {checkPoints.map((checkPoint, index) => (
              <div key={index} className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 size-4" />
                <div className="flex flex-col gap-1">
                  <p>{checkPoint.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {checkPoint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex aspect-square items-center justify-center rounded-md bg-opacity-50 backdrop-blur-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <GLTFViewer modelUrl={modelUrl} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const IntroFeatureWithRiveModel = ({
  platform,
  title,
  description,
  checkPoints,
}: IntroFeatureWithRiveModelProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="container grid grid-cols-1 items-center gap-8 rounded-lg py-8 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="outline">{platform}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
            {checkPoints.map((checkPoint, index) => (
              <div key={index} className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 size-4" />
                <div className="flex flex-col gap-1">
                  <p>{checkPoint.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {checkPoint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-md bg-black">
          <AiAssistant />
        </div>
      </div>
    </div>
  </div>
);

interface IntroFeatureWithMobileAppMockupProps {
  platform: string;
  title: string;
  description: string;
  checkPoints: { title: string; description: string }[];
  mockupUrl: string;
}

export const IntroFeatureWithMobileAppMockup = ({
  platform,
  title,
  description,
  checkPoints,
  mockupUrl,
}: IntroFeatureWithMobileAppMockupProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="container grid grid-cols-1 items-center gap-8 rounded-lg py-8 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="outline">{platform}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter lg:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
            {checkPoints.map((checkPoint, index) => (
              <div key={index} className="flex flex-row items-start gap-6">
                <Check className="text-primary mt-2 size-4" />
                <div className="flex flex-col gap-1">
                  <p>{checkPoint.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {checkPoint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden aspect-square items-center justify-center rounded-md lg:flex">
          <FlutterIframe url={mockupUrl} />
        </div>
      </div>
    </div>
  </div>
);
