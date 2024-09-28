'use client'

import React, { useState, useEffect, useRef } from "react";
import SmartHomeApp from "./mobile-app";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Import all animation data
import airConditionerData from '@/animations/airConditioner.json';
// import coffeeMakerData from '@/animations/coffeeMaker.json';
import fanData from '@/animations/fan.json';
import lightBulbData from '@/animations/lightBulb.json';
import speakerData from '@/animations/speaker.json';
import televisionData from '@/animations/television.json';  
import washingMachineData from '@/animations/washingMachine.json';

interface DeviceAnimationProps {
  animationData: any;
  isActive: boolean;
  className: string;
  size: string;
}

const DeviceAnimation: React.FC<DeviceAnimationProps> = ({ animationData, isActive, className, size }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isActive) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [isActive]);

  return (
    <div className={`absolute ${className} ${size} relative`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={false}
      />
    </div>
  );
};

export default function MobileApplicationPage() {
  const [activeDevice, setActiveDevice] = useState<string | null>(null);

  const handleDeviceAction = (deviceName: string) => {
    setActiveDevice(prevDevice => prevDevice === deviceName ? null : deviceName);
  };

  useEffect(() => {
    if (activeDevice) {
      const timer = setTimeout(() => setActiveDevice(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [activeDevice]);

  return (
    <div className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Control your home from your phone</h1>
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute left-1/4 flex flex-col gap-16">
        <DeviceAnimation animationData={lightBulbData} className="-translate-x-full" isActive={activeDevice === "Light"} size="w-24 h-24" />
        <DeviceAnimation animationData={fanData} className="-translate-x-full" isActive={activeDevice === "Air purifier"} size="w-48 h-48" />
        <DeviceAnimation animationData={speakerData} className="-translate-x-full" isActive={activeDevice === "Speaker"} size="w-40 h-40" />      
      </div>

      <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SmartHomeApp onDeviceAction={handleDeviceAction} />
      </div>

      <div className="absolute right-1/4 flex flex-col gap-16">
        <DeviceAnimation animationData={airConditionerData} className="translate-x-full" isActive={activeDevice === "Climate"} size="w-48 h-48" />
        <DeviceAnimation animationData={washingMachineData} className="translate-x-full" isActive={activeDevice === "Washing Machine"} size="w-52 h-52" />
        <DeviceAnimation animationData={televisionData} className="translate-x-full" isActive={activeDevice === "TV"} size="w-60 h-60" />
      </div>
    </div>
    </div>
  );
}