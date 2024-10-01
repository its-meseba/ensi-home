'use client';

import React from 'react';
import {
  ChevronDown,
  // Moon,
  MoreVertical,
  Plus,
  Power,
  Speaker,
  Sun,
  Thermometer,
  Tv,
  WashingMachine,
  Wind,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DeviceProps {
  name: string;
  location: string;
  status: string;
  icon: React.ReactNode;
  onAction: (name: string) => void;
}

const Device: React.FC<DeviceProps> = ({
  name,
  location,
  status,
  icon,
  onAction,
}) => (
  <Card className="w-full border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
    <CardContent className="flex h-24 items-center justify-between p-3">
      <div className="flex items-center">
        <div className="mr-3">{icon}</div>
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="mb-2 text-xs text-gray-500">{status}</p>
        <Button
          size="sm"
          variant="ghost"
          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          onClick={() => onAction(name)}
        >
          <Power className="size-3" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

interface SmartHomeAppProps {
  onDeviceAction: (deviceName: string) => void;
}

export default function SmartHomeApp({ onDeviceAction }: SmartHomeAppProps) {
  return (
    <div className="flex size-fit items-center justify-center">
      <div className="relative h-[700px] w-[400px] overflow-hidden rounded-[40px] border-4 border-gray-300 bg-gray-50 shadow-xl">
        <div className="absolute left-1/2 top-0 h-7 w-1/3 -translate-x-1/2 rounded-b-2xl bg-gray-300"></div>
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 z-10 border-b border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-secondary text-sm font-semibold transition-colors duration-300"
                  >
                    My home <ChevronDown className="ml-2 size-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Home 1</DropdownMenuItem>
                  <DropdownMenuItem>Home 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-secondary transition-colors duration-300"
                >
                  <Plus className="size-3" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-secondary transition-colors duration-300"
                >
                  <MoreVertical className="size-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="mb-4 text-lg font-bold">Favorites</h2>
            <div className="mb-6 flex space-x-4">
              {/* <Button className="flex-1 border border-yellow-300 bg-yellow-100 text-xs text-yellow-800 transition-colors duration-300 hover:bg-yellow-200">
                <Sun className="mr-2 size-3" /> Good morning
              </Button>
              <Button className="flex-1 border border-indigo-300 bg-indigo-100 text-xs text-indigo-800 transition-colors duration-300 hover:bg-indigo-200">
                <Moon className="mr-2 size-3" /> Good night
              </Button> */}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Device
                name="Light"
                location="Living room"
                status="On"
                icon={<Sun className="size-8 text-yellow-500" />}
                onAction={onDeviceAction}
              />
              <Device
                name="Air purifier"
                location="Bedroom"
                status="On"
                icon={<Wind className="size-8 text-blue-500" />}
                onAction={onDeviceAction}
              />
              <Device
                name="Speaker"
                location="Front door"
                status="Active"
                icon={<Speaker className="size-8 text-green-500" />}
                onAction={onDeviceAction}
              />
              <Device
                name="Climate"
                location="Living room"
                status="22°C"
                icon={<Thermometer className="size-8 text-red-500" />}
                onAction={onDeviceAction}
              />
              <Device
                name="TV"
                location="Living room"
                status="Off"
                icon={<Tv className="size-8 text-gray-500" />}
                onAction={onDeviceAction}
              />
              <Device
                name="Washing Machine"
                location="Kitchen"
                status="Off"
                icon={<WashingMachine className="size-8 text-purple-500" />}
                onAction={onDeviceAction}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
