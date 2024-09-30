// DeviceAnimation.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface DeviceAnimationProps {
  animationData: object;
  isActive: boolean;
  className: string;
  size: string;
  deviceRef: React.RefObject<HTMLDivElement>;
}

const DeviceAnimation: React.FC<DeviceAnimationProps> = ({
  animationData,
  isActive,
  className,
  size,
  deviceRef,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isActive) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [isActive]);

  return (
    <div
      ref={deviceRef}
      className={`${className} ${size} relative flex items-center justify-center`}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={false}
        className="size-full"
      />
    </div>
  );
};

export default DeviceAnimation;
