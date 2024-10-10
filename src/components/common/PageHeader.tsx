import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description?: string;
  imageSrc1?: string;
  imageSrc2?: string;
}

export default function PageHeader({
  title,
  description,
  imageSrc1,
  imageSrc2,
}: PageHeaderProps) {
  return (
    <div className="from-primary to-primary-dark relative w-full overflow-hidden bg-gradient-to-br text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {imageSrc1 && (
                <div className="relative h-64 w-full md:h-80">
                  <Image
                    src={imageSrc1}
                    alt="Feature image 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
              {imageSrc2 && (
                <div className="relative h-64 w-full md:h-80">
                  <Image
                    src={imageSrc2}
                    alt="Feature image 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
              {!imageSrc1 && !imageSrc2 && (
                <div className="col-span-2 flex h-64 w-full items-center justify-center rounded-lg bg-gray-700 shadow-lg md:h-80">
                  <span className="text-lg text-gray-300">
                    3D Object Placeholder
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
            {description && <p className="text-lg md:text-xl">{description}</p>}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120C240 120 480 120 720 120C960 120 1200 120 1440 120V80C1320 93.3 1200 106.7 1080 106.7C960 106.7 840 93.3 720 80C600 66.7 480 53.3 360 53.3C240 53.3 120 66.7 0 80V120Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
