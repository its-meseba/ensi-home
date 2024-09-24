'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface Case1Props {
  title: string;
  logos: string[];
  interval: number;
}

export const Case1 = ({ title, logos, interval }: Case1Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, interval);

    return () => clearTimeout(timer);
  }, [api, current, interval]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="font-regular text-left text-xl tracking-tighter md:text-3xl lg:max-w-xl lg:text-5xl">
            {title}
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="bg-muted flex aspect-square items-center justify-center rounded-md p-6">
                    <Image
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="size-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
