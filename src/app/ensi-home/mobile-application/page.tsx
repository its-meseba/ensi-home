'use client';

import React, { useEffect, useRef, useState } from 'react';
import DeviceAnimation from './device-animation';
import SmartHomeApp from './mobile-app';

// Import all animation data
import airConditionerData from '@/animations/airConditioner.json';
import fanData from '@/animations/fan.json';
import lightBulbData from '@/animations/lightBulb.json';
import speakerData from '@/animations/speaker.json';
import televisionData from '@/animations/television.json';
import washingMachineData from '@/animations/washingMachine.json';

interface Line {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  active: boolean;
}

export default function MobileApplicationPage() {
  const [activeDevice, setActiveDevice] = useState<string | null>(null);
  const [activeLines, setActiveLines] = useState<{
    appToBox: boolean;
    boxToDevices: { [key: string]: boolean };
  }>({
    appToBox: false,
    boxToDevices: {},
  });

  // Refs for app, box, and devices
  const appRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const parentContainerRef = useRef<HTMLDivElement>(null);

  const deviceRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    Light: useRef<HTMLDivElement>(null),
    'Air purifier': useRef<HTMLDivElement>(null),
    Speaker: useRef<HTMLDivElement>(null),
    Climate: useRef<HTMLDivElement>(null),
    'Washing Machine': useRef<HTMLDivElement>(null),
    TV: useRef<HTMLDivElement>(null),
  };

  const [lines, setLines] = useState<Line[]>([]);

  // Handle device activation
  const handleDeviceAction = (deviceName: string) => {
    setActiveDevice((prevDevice) =>
      prevDevice === deviceName ? null : deviceName
    );

    if (deviceName !== activeDevice) {
      // Reset lines
      setActiveLines({
        appToBox: false,
        boxToDevices: {},
      });

      // Activate app-to-box line
      setTimeout(() => {
        setActiveLines((prev) => ({
          ...prev,
          appToBox: true,
        }));
      }, 0); // Immediate activation

      // Activate box-to-device line after a short delay
      setTimeout(() => {
        setActiveLines((prev) => ({
          ...prev,
          boxToDevices: { [deviceName]: true },
        }));
      }, 500); // 500ms delay
    }
  };

  // Reset active lines after 5 seconds
  useEffect(() => {
    if (activeDevice) {
      const timer = setTimeout(() => {
        setActiveDevice(null);
        setActiveLines({
          appToBox: false,
          boxToDevices: {},
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeDevice]);

  // Calculate positions and draw lines
  useEffect(() => {
    const computeLines = () => {
      if (
        appRef.current &&
        boxRef.current &&
        Object.values(deviceRefs).every((ref) => ref.current) &&
        parentContainerRef.current
      ) {
        const parentRect = parentContainerRef.current.getBoundingClientRect();
        const appRect = appRef.current.getBoundingClientRect();
        const boxRect = boxRef.current.getBoundingClientRect();

        // Calculate center positions relative to SVG
        const appCenter = {
          x: appRect.right - parentRect.left, // Right edge of app
          y: appRect.top + appRect.height / 2 - parentRect.top,
        };
        const boxCenter = {
          x: boxRect.left - parentRect.left, // Left edge of box
          y: boxRect.top + boxRect.height / 2 - parentRect.top,
        };

        // Line from app to box
        const appToBoxLine: Line = {
          id: 'appToBox',
          x1: appCenter.x,
          y1: appCenter.y,
          x2: boxCenter.x,
          y2: boxCenter.y,
          active: activeLines.appToBox,
        };

        // Lines from box to devices
        const boxToDevicesLines: Line[] = Object.entries(deviceRefs).map(
          ([name, ref]) => {
            const deviceRect = ref.current!.getBoundingClientRect();
            const deviceCenter = {
              x: deviceRect.left - parentRect.left, // Left edge of device
              y: deviceRect.top + deviceRect.height / 2 - parentRect.top,
            };
            return {
              id: `boxTo${name}`,
              x1: boxRect.right - parentRect.left, // Right edge of box
              y1: boxRect.top + boxRect.height / 2 - parentRect.top,
              x2: deviceCenter.x,
              y2: deviceCenter.y,
              active: activeLines.boxToDevices[name] || false,
            };
          }
        );

        setLines([appToBoxLine, ...boxToDevicesLines]);
      }
    };

    computeLines();
    window.addEventListener('resize', computeLines);
    return () => window.removeEventListener('resize', computeLines);
  }, [activeLines, deviceRefs]);

  return (
    <div
      ref={parentContainerRef}
      className="items-between relative flex h-screen w-full flex-col justify-between bg-gray-100 p-16"
    >
      <svg className="pointer-events-none absolute left-0 top-0 z-10 size-full">
        {lines.map((line) => (
          <line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.active ? '#1D4ED8' : '#000000'} // Blue when active, black otherwise
            strokeWidth={line.active ? 1 : 0.5}
            strokeDasharray="6"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Control your home from your phone
      </h1>

      <div className="relative flex h-[80vh] w-full flex-row items-center justify-around gap-16 bg-gray-100">
        <div ref={appRef} className="relative">
          <SmartHomeApp onDeviceAction={handleDeviceAction} />
        </div>

        <div className="relative flex items-center">
          <div
            ref={boxRef}
            className="flex h-16 w-24 items-center justify-center rounded-md border-2 border-gray-300 bg-white"
          >
            <span className="text-gray-700">Central Hub</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mb-16 flex flex-col justify-around gap-16">
            <DeviceAnimation
              animationData={lightBulbData}
              // className="translate-x-1/2"
              className=""
              isActive={activeDevice === 'Light'}
              size="w-24 h-24"
              deviceRef={deviceRefs.Light}
            />
            <DeviceAnimation
              animationData={fanData}
              // className="translate-x-1/2"
              className=""
              isActive={activeDevice === 'Air purifier'}
              size="w-48 h-48"
              deviceRef={deviceRefs['Air purifier']}
            />
            <DeviceAnimation
              animationData={speakerData}
              // className="translate-x-1/2"
              className=""
              isActive={activeDevice === 'Speaker'}
              size="w-40 h-40"
              deviceRef={deviceRefs.Speaker}
            />
          </div>

          {/* Second Column of Devices */}
          <div className="mt-16 flex flex-col justify-around gap-16">
            <DeviceAnimation
              animationData={airConditionerData}
              // className="translate-x-1/2"
              className=""
              isActive={activeDevice === 'Climate'}
              size="w-48 h-48"
              deviceRef={deviceRefs.Climate}
            />
            <DeviceAnimation
              animationData={washingMachineData}
              // className="translate-x-1/2"
              className=""
              isActive={activeDevice === 'Washing Machine'}
              size="w-60 h-60"
              deviceRef={deviceRefs['Washing Machine']}
            />
            <DeviceAnimation
              animationData={televisionData}
              // className="translate-x-1/2"
              className=""
              isActive={activeDevice === 'TV'}
              size="w-52 h-52"
              deviceRef={deviceRefs.TV}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Application Page (/ensi-home/mobile-application/)
// Purpose: To showcase the mobile app's capabilities and how it enhances user experience.

// Components:

// Hero Section:

// Headline: "Control at Your Fingertips with Our Mobile App"
// Background Image: Smartphone displaying the app interface.
// App Overview:

// Describe the app's role in controlling the smart home.
// Features:

// Remote device control.
// Real-time monitoring.
// Scheduling and automation.
// User-friendly interface.
// User Experience:

// Interactive demo using device-animation.tsx and mobile-app.tsx.
// Screenshots of different app screens.
// Customization:

// Highlight ability to customize settings per user preference.
// Benefits for Homeowners:

// Emphasize convenience, security, and efficiency.
// Call to Action:

// CTA Button: "See the App in Action" - opens a demo or video.
