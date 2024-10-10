'use client';

import Image from 'next/image';

interface CurvedBackgroundProps {
  imageSrc: string;
  title: string;
  height?: string;
  maxHeight?: string;
}

export const CurvedBackground: React.FC<CurvedBackgroundProps> = ({
  imageSrc,
  title,
  height = '45vw',
  maxHeight = '480px',
}) => (
  <div
    className={`relative w-full overflow-hidden`}
    style={{ height, maxHeight }}
  >
    <Image
      src={imageSrc}
      alt="Background"
      layout="fill"
      objectFit="cover"
      priority
    />
    {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-blue-600/50"></div> */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
        {title}
      </h1>
    </div>
    <svg
      className="absolute bottom-0 h-16 w-full"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
      ></path>
    </svg>
  </div>
);
