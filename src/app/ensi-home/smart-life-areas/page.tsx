'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Lock,
  Heart,
  Trees,
  Sparkles,
} from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import * as m from '@/paraglide/messages';

const categories = [
  {
    title: 'Apps that help save energy',
    icon: <Zap className="size-6 text-yellow-400" />,
    description: 'Save on your energy bill while saving the planet.',
    apps: [
      {
        name: 'EcoCharge',
        company: 'GreenTech Solutions',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'SmartPower',
        company: 'EnergyWise Inc.',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'SolarSync',
        company: 'SunPower Systems',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'EnergySaver',
        company: 'EcoEnergy',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'PowerMonitor',
        company: 'GridGuard',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'ThermoSmart',
        company: 'HeatWave Tech',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    title: 'Apps for a safe home',
    icon: <Lock className="size-6 text-green-500" />,
    description: 'Feel safe at home.',
    apps: [
      {
        name: 'SecureGuard',
        company: 'SafeHouse Tech',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'SmartLock',
        company: 'IntelliSafe Solutions',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'HomeShield',
        company: 'ProtectPro Systems',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'AlertSafe',
        company: 'SecureNow',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'CamWatch',
        company: 'VisionTech',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'DoorSecure',
        company: 'LockMaster',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    title: 'Apps for a healthier life',
    icon: <Heart className="size-6 text-red-500" />,
    description: 'Boost your wellbeing with smart technology.',
    apps: [
      {
        name: 'FitTrack',
        company: 'HealthTech Innovations',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'NutriSmart',
        company: 'WellnessWare',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'SleepGuard',
        company: 'RestWell Technologies',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'MindCalm',
        company: 'PeaceMind',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'YogaFlow',
        company: 'FlexiLife',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'HydroTrack',
        company: 'AquaHealth',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    title: 'Bring the smart outdoors',
    icon: <Trees className="size-6 text-green-600" />,
    description: 'Extend your smart home to your garden and beyond.',
    apps: [
      {
        name: 'GardenGuru',
        company: 'GreenThumb Tech',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'OutdoorIQ',
        company: 'SmartYard Solutions',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'WeatherWise',
        company: 'ClimateControl Systems',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'PatioPerfect',
        company: 'OutdoorLiving',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'GardenGuard',
        company: 'EcoProtect',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'SolarGarden',
        company: 'Sunshine Tech',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
  {
    title: 'Beyond smart home',
    icon: <Sparkles className="size-6 text-purple-500" />,
    description: 'Discover the next level of smart living.',
    apps: [
      {
        name: 'CityConnect',
        company: 'UrbanTech Innovations',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'SmartCommute',
        company: 'MobilityPlus',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'EcoSphere',
        company: 'FutureLife Technologies',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'TravelMate',
        company: 'GlobeTrotter',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'HomeOffice',
        company: 'WorkSmart',
        image: '/placeholder.svg?height=200&width=300',
      },
      {
        name: 'LifeSync',
        company: 'HarmonyTech',
        image: '/placeholder.svg?height=200&width=300',
      },
    ],
  },
];

export default function SmartLifeAreas() {
  const [currentIndexes, setCurrentIndexes] = useState(categories.map(() => 0));

  const handlePrev = (index: number) => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) =>
        i === index ? Math.max(current - 1, 0) : current
      )
    );
  };

  const handleNext = (index: number) => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) =>
        i === index
          ? Math.min(current + 1, categories[i].apps.length - 3) // Show 3 apps at a time
          : current
      )
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white p-6 shadow-md">
        <h1 className="font-regular text-center text-5xl tracking-tighter md:text-7xl">
          {m.smart_life_areas()}
        </h1>
      </header>

      {/* Main Content */}
      <main className="grow p-6">
        <div className="mx-auto max-w-7xl space-y-12">
          {categories.map((category, index) => (
            <section key={index} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center space-x-3">
                {category.icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {category.title}
                </h2>
              </div>
              <p className="text-gray-600">{category.description}</p>

              {/* Carousel */}
              <div className="relative">
                {/* Previous Button */}
                {currentIndexes[index] > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white bg-opacity-75 p-2 hover:bg-opacity-100"
                    onClick={() => handlePrev(index)}
                  >
                    <ChevronLeft className="size-5 text-gray-700" />
                  </Button>
                )}

                {/* Cards Container */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${currentIndexes[index] * 270}px)`,
                    }}
                  >
                    {category.apps.map((app, appIndex) => (
                      <Card
                        key={appIndex}
                        className="mr-6 w-64 shrink-0 shadow-sm"
                      >
                        <CardContent className="p-0">
                          <img
                            src={app.image}
                            alt={app.name}
                            className="h-40 w-full rounded-t-lg object-cover"
                          />
                        </CardContent>
                        <CardFooter className="flex flex-col items-start space-y-2 p-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {app.name}
                          </h3>
                          <p className="text-sm text-gray-500">{app.company}</p>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                {currentIndexes[index] < category.apps.length - 3 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white bg-opacity-75 p-2 hover:bg-opacity-100"
                    onClick={() => handleNext(index)}
                  >
                    <ChevronRight className="size-5 text-gray-700" />
                  </Button>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-6 text-center text-gray-500 shadow-inner">
        © {new Date().getFullYear()} Smart Home App Gallery. All rights
        reserved.
      </footer>
    </div>
  );
}
