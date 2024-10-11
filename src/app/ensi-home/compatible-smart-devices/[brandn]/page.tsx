import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import productsDataRaw from '@/data/compatible-brands-and-devices.json';
import {
  isCompatibleBrand,
  CompatibleBrand,
  ProductsData,
  Device,
} from '@/data/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const productsData: ProductsData = productsDataRaw as ProductsData;

const allBrands: CompatibleBrand[] = productsData.categories.flatMap(
  (category) => category.compatible_brands
);

interface BrandDetailProps {
  params: { brandn: string };
}

export default function BrandDetail({ params }: BrandDetailProps) {
  const { brandn } = params;

  const brand = allBrands.find(
    (b) => b.name.toLowerCase().replace(/\s+/g, '-') === brandn.toString()
  );

  if (!brand || !isCompatibleBrand(brand)) {
    notFound();
  }

  const brandTechnologies = Array.from(
    new Set(brand.supported_devices.flatMap((device) => device.technologies))
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <BackLink />
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{brand.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-8 lg:flex-row">
              {brand.summary_image_url && (
                <div className="lg:w-2/5">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={brand.summary_image_url}
                      alt={`${brand.name} summary image`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
              <div className={brand.summary_image_url ? 'lg:w-3/5' : 'w-full'}>
                <p className="mb-4 text-gray-700">
                  {brand.description || 'Description not available.'}
                </p>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div>
                    <h2 className="mb-2 text-lg font-semibold">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                      {brandTechnologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg font-semibold">Summary</h2>
                    <p className="whitespace-pre-line text-gray-700">
                      {brand.summary_description ||
                        'No summary description available.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <SupportedDevices devices={brand.supported_devices} />
      </div>
    </div>
  );
}

function BackLink() {
  return (
    <Button variant="ghost" asChild className="mb-4">
      <Link
        href="/ensi-home/compatible-smart-devices"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        <ArrowLeft className="mr-2 size-4" />
        Back to Brands
      </Link>
    </Button>
  );
}

interface SupportedDevicesProps {
  devices: Device[];
}

function SupportedDevices({ devices }: SupportedDevicesProps) {
  if (devices.length === 0) {
    return (
      <p className="text-gray-500">
        This brand does not have any supported devices.
      </p>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Supported Devices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {devices.map((device, index) => (
            <DeviceCard key={index} device={device} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface DeviceCardProps {
  device: Device;
}

function DeviceCard({ device }: DeviceCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-square">
        <Image
          src={device.image_url || '/placeholder.jpg'}
          alt={`Image of ${device.device_name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className="object-contain p-2"
        />
      </div>
      <div className="p-2 text-center">
        <h4 className="mb-1 truncate text-sm font-semibold">
          {device.device_name}
        </h4>
        <p className="truncate text-xs text-gray-600">
          {device.technologies.join(', ')}
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return allBrands.map((brand) => ({
    brandn: brand.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}
