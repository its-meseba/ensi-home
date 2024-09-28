'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Plus, MoreVertical, Sun, Moon, Tv, Wind, Thermometer, Power, Speaker, WashingMachine } from 'lucide-react'

interface DeviceProps {
  name: string
  location: string
  status: string
  icon: React.ReactNode
  onAction: (name: string) => void
}

const Device: React.FC<DeviceProps> = ({ name, location, status, icon, onAction }) => (
  <Card className="w-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
    <CardContent className="flex items-center justify-between p-3 h-24">
      <div className="flex items-center">
        <div className="mr-3">{icon}</div>
        <div>
          <h3 className="font-semibold text-sm">{name}</h3>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xs text-gray-500 mb-2">{status}</p>
        <Button 
          size="sm" 
          variant="ghost" 
          className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          onClick={() => onAction(name)}
        >
          <Power className="h-3 w-3" />
        </Button>
      </div>
    </CardContent>
  </Card>
)

interface SmartHomeAppProps {
  onDeviceAction: (deviceName: string) => void
}

export default function SmartHomeApp({ onDeviceAction }: SmartHomeAppProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] h-[700px] bg-gray-50 rounded-[40px] shadow-xl border-4 border-gray-300 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-300 rounded-b-2xl"></div>
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-semibold text-sm transition-colors duration-300 hover:bg-secondary">
                    My home <ChevronDown className="ml-2 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Home 1</DropdownMenuItem>
                  <DropdownMenuItem>Home 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center space-x-2">
                <Button size="icon" variant="ghost" className="transition-colors duration-300 hover:bg-secondary">
                  <Plus className="h-3 w-3" />
                </Button>
                <Button size="icon" variant="ghost" className="transition-colors duration-300 hover:bg-secondary">
                  <MoreVertical className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Favorites</h2>
            <div className="flex space-x-4 mb-6">
              <Button className="flex-1 bg-yellow-100 text-yellow-800 text-xs transition-colors duration-300 hover:bg-yellow-200 border border-yellow-300">
                <Sun className="mr-2 h-3 w-3" /> Good morning
              </Button>
              <Button className="flex-1 bg-indigo-100 text-indigo-800 text-xs transition-colors duration-300 hover:bg-indigo-200 border border-indigo-300">
                <Moon className="mr-2 h-3 w-3" /> Good night
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Device name="Light" location="Living room" status="On" icon={<Sun className="h-8 w-8 text-yellow-500" />} onAction={onDeviceAction} />
              <Device name="Air purifier" location="Bedroom" status="On" icon={<Wind className="h-8 w-8 text-blue-500" />} onAction={onDeviceAction} />
              <Device name="Speaker" location="Front door" status="Active" icon={<Speaker className="h-8 w-8 text-green-500" />} onAction={onDeviceAction} />
              <Device name="Climate" location="Living room" status="22°C" icon={<Thermometer className="h-8 w-8 text-red-500" />} onAction={onDeviceAction} />
              <Device name="TV" location="Living room" status="Off" icon={<Tv className="h-8 w-8 text-gray-500" />} onAction={onDeviceAction} />
              <Device name="Washing Machine" location="Kitchen" status="Off" icon={<WashingMachine className="h-8 w-8 text-purple-500" />} onAction={onDeviceAction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}