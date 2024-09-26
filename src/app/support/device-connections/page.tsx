'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const devices = [
  { id: 'sonos', name: 'Connecting Sonos with Homey' },
  { id: 'tuya', name: 'Connecting Tuya with Homey' },
  { id: 'netatmo', name: 'Connecting Netatmo with Homey' },
  { id: 'philips', name: 'Connecting Philips Hue with Homey' },
  { id: 'ikea', name: 'Connecting IKEA Trådfri with Homey' },
  { id: 'aqara', name: 'Connecting Aqara Xiaomi with Homey' },
  { id: 'innr', name: 'Connecting Innr with Homey' },
];

const deviceContent = {
  sonos: {
    title: 'Connecting Sonos with Homey',
    content:
      "Homey works with numerous Sonos smart speakers. We've documented the pairing process below.",
    videoId: 'dQw4w9WgXcQ', // Replace with actual Sonos video ID
  },
  tuya: {
    title: 'Connecting Tuya with Homey',
    content:
      'Learn how to connect your Tuya-compatible devices with Homey for seamless smart home integration.',
    videoId: 'abcdefghijk', // Replace with actual Tuya video ID
  },
  netatmo: {
    title: 'Connecting Netatmo with Homey',
    content:
      'Discover the steps to connect your Netatmo weather station and other devices to Homey.',
    videoId: 'lmnopqrstuv', // Replace with actual Netatmo video ID
  },
  philips: {
    title: 'Connecting Philips Hue with Homey',
    content:
      'Follow our guide to connect your Philips Hue lighting system with Homey for enhanced control.',
    videoId: 'wxyzabcdefg', // Replace with actual Philips Hue video ID
  },
  ikea: {
    title: 'Connecting IKEA Trådfri with Homey',
    content:
      'Learn how to integrate your IKEA Trådfri smart lighting products with Homey.',
    videoId: 'hijklmnopqr', // Replace with actual IKEA Trådfri video ID
  },
  aqara: {
    title: 'Connecting Aqara Xiaomi with Homey',
    content:
      'Follow our step-by-step guide to connect your Aqara Xiaomi devices with Homey.',
    videoId: 'stuvwxyzabc', // Replace with actual Aqara Xiaomi video ID
  },
  innr: {
    title: 'Connecting Innr with Homey',
    content:
      'Discover how to pair your Innr smart lighting products with Homey for seamless control.',
    videoId: 'defghijklmn', // Replace with actual Innr video ID
  },
};

export default function ConnectingDevices() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-10 text-center text-4xl font-bold">
          Connecting Devices
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <AnimatePresence mode="wait">
            {!selectedDevice ? (
              <motion.div
                key="device-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-1 md:col-span-4"
              >
                <div className="mb-6">
                  <Input
                    type="text"
                    placeholder="Search devices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mx-auto w-full max-w-md"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {filteredDevices.map((device) => (
                    <Card
                      key={device.id}
                      className="h-48 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                      onClick={() => setSelectedDevice(device.id)}
                    >
                      <CardContent className="flex h-full flex-col items-center justify-center p-4">
                        <span className="text-center text-lg">
                          {device.name}
                        </span>
                        <ChevronRight className="mt-3 size-6" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ) : (
              <>
                <motion.div
                  key="device-sidebar"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  className="col-span-1"
                >
                  <h2 className="mb-4 text-xl font-semibold">
                    Articles in this section
                  </h2>
                  {devices.map((device) => (
                    <div
                      key={device.id}
                      className={`mb-2 cursor-pointer rounded p-3 text-lg transition-colors duration-200 ${selectedDevice === device.id ? 'bg-blue-200 text-blue-800' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedDevice(device.id)}
                    >
                      {device.name}
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  key="device-content"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  className="col-span-1 flex items-center justify-center md:col-span-3"
                >
                  <Card className="size-full p-8 shadow-lg">
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedDevice(null)}
                      className="mb-6"
                    >
                      <ChevronLeft className="mr-2 size-5" /> Back to device
                      list
                    </Button>
                    <h2 className="mb-6 text-3xl font-bold">
                      {
                        deviceContent[
                          selectedDevice as keyof typeof deviceContent
                        ].title
                      }
                    </h2>
                    <p className="mb-6 text-lg">
                      {
                        deviceContent[
                          selectedDevice as keyof typeof deviceContent
                        ].content
                      }
                    </p>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${deviceContent[selectedDevice as keyof typeof deviceContent].videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="size-full"
                      ></iframe>
                    </div>
                  </Card>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
