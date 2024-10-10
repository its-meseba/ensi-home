'use client';

import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

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

export const CurvedBackgroundParallax: React.FC<CurvedBackgroundProps> = ({
  imageSrc,
  title,
  height = '45vw',
  maxHeight = '480px',
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden`}
      style={{ height, maxHeight }}
    >
      <div ref={parallaxRef} className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>
      </div>
      {/* <svg
        className="absolute bottom-0 h-16 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
        ></path>
      </svg> */}
      <svg
        className="absolute bottom-0 h-16 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,80 L0,0 C360,60 1080,60 1440,0 L1440,80 Z"
        />
      </svg>
    </div>
  );
};

export const CurvedBackgroundParallaxHeader: React.FC<
  CurvedBackgroundProps
> = ({ imageSrc, title, height = '45vw', maxHeight = '480px' }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height, maxHeight }}
    >
      <div ref={parallaxRef} className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />
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
          d="M0,80 L0,0 C360,60 1080,60 1440,0 L1440,80 Z"
        />
      </svg>
    </div>
  );
};

interface CurvedBackgroundProps {
  imageSrc: string;
  title: string;
  description?: string;
  height?: string;
  maxHeight?: string;
  children?: ReactNode;
}

export const CurvedBackgroundParallaxHeaderVertical: React.FC<
  CurvedBackgroundProps
> = ({
  imageSrc,
  title,
  description,
  height = '45vw',
  maxHeight = '480px',
  children,
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative h-5/6 w-full overflow-hidden"
      style={{ height, maxHeight }}
    >
      <div ref={parallaxRef} className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-between py-8">
        <div className="w-full max-w-4xl">{children}</div>
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-white md:text-2xl">{description}</p>
          )}
        </div>
      </div>
      <svg
        className="absolute bottom-0 h-16 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,80 L0,0 C360,60 1080,60 1440,0 L1440,80 Z"
        />
      </svg>
    </div>
  );
};

interface CurvedBackgroundHorizontalProps extends CurvedBackgroundProps {
  reversed?: boolean;
}

export const CurvedBackgroundParallaxHeaderHorizontal: React.FC<
  CurvedBackgroundHorizontalProps
> = ({
  imageSrc,
  title,
  description,
  height = '45vw',
  maxHeight = '480px',
  children,
  reversed = false,
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height, maxHeight }}
    >
      <div ref={parallaxRef} className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />
      <div
        className={`absolute inset-0 flex items-center justify-center ${reversed ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div className="w-1/2 p-8">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-white md:text-2xl">{description}</p>
          )}
        </div>
        <div className="w-1/2 p-8">{children}</div>
      </div>
      <svg
        className="absolute bottom-0 h-16 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,80 L0,0 C360,60 1080,60 1440,0 L1440,80 Z"
        />
      </svg>
    </div>
  );
};
