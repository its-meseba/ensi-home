'use client';

import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';
import GradientHeader from './headers';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

// interface CurvedBackgroundProps {
//   imageSrc: string;
//   title: string;
//   height?: string;
//   maxHeight?: string;
// }
interface CurvedBackgroundProperties {
  imageSrc: string;
  title: string;
  height?: string;
  maxHeight?: string;
}

interface CurvedBackgroundPropertiesWithShadow {
  images: string[];
  title: string;
  description?: string;
  children: ReactNode;
  titleStyle?: string;
  hasShadow?: boolean;
  activateAnimation?: boolean;
}

interface CurvedBackgroundPropertiesWithImageSrc {
  imageSrc: string;
  title: string;
  height?: string;
  maxHeight?: string;
  hasShadow?: boolean;
}

interface CurvedBackgroundWithChildrenProps {
  images: string[];
  title: string;
  description?: string;
  children: React.ReactNode;
  titleStyle?: string;
  hasShadow?: boolean;
}

interface CurvedBackgroundHorizontalProps {
  imageSrc: string;
  title: string;
  description?: string;
  height?: string;
  maxHeight?: string;
  children?: ReactNode;
  reversed?: boolean;
}

export const CurvedBackground: React.FC<CurvedBackgroundProperties> = ({
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

export const CurvedBackgroundParallax: React.FC<CurvedBackgroundProperties> = ({
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
      {/* <svg
        className="absolute bottom-0 h-16 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,80 L0,0 C360,60 1080,60 1440,0 L1440,80 Z"
        />
      </svg> */}
    </div>
  );
};

export const CurvedBackgroundParallaxHeader: React.FC<
  CurvedBackgroundPropertiesWithImageSrc
> = ({
  imageSrc,
  title,
  height = '45vw',
  maxHeight = '480px',
  hasShadow = false,
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
      {hasShadow && <div className="absolute inset-0 bg-black/30" />}
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

export const CurvedBackgroundParallaxHeaderVertical: React.FC<
  CurvedBackgroundPropertiesWithShadow
> = ({
  images,
  title,
  description,
  children,
  titleStyle,
  hasShadow = true,
  activateAnimation = true,
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useEffect(() => {
    if (!activateAnimation || images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activateAnimation, nextImageIndex, images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div ref={parallaxRef} className="absolute inset-0">
          <div className="relative size-full">
            <div
              className="absolute inset-0 transition-opacity duration-200"
              style={{
                opacity: isTransitioning ? 0 : 1,
              }}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Background ${currentImageIndex + 1}`}
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority
              />
            </div>
            <div
              className="absolute inset-0 transition-opacity duration-200"
              style={{
                opacity: isTransitioning ? 1 : 0,
              }}
            >
              <Image
                src={images[nextImageIndex]}
                alt={`Background ${nextImageIndex + 1}`}
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute inset-0 ${hasShadow ? 'bg-black/30' : ''}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-start py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="mt-24 px-4 text-center sm:mt-24 sm:px-6 md:mt-24 md:px-8 lg:mt-24">
          {titleStyle ? (
            <h1 className={titleStyle}>{title}</h1>
          ) : (
            <GradientHeader level="h1" isBold={true} isDarkMode={false}>
              {title}
            </GradientHeader>
          )}
          {description && (
            <p className="text-lg text-white sm:text-xl md:text-2xl">
              {description}
            </p>
          )}
        </div>
        <div className="mb-8 mt-4 w-full max-w-4xl px-4 sm:mb-12 sm:mt-6 sm:px-6 md:mb-16 md:mt-8 md:px-8 lg:mb-20 lg:mt-12">
          {children}
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
