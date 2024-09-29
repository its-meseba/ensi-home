// src/app/ensi-home/compatible-devices/[id]/page.tsx

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data structure (in a real app, replace with data fetching from an API or database)
const products = [
  {
    id: 1,
    name: 'Philips Hue',
    category: 'Lighting',
    technology: 'Zigbee',
    manufacturer: 'Signify',
    image: '/placeholder.svg?height=400&width=600',
    description: 'Smart lighting solution for your home',
    owner: 'Signify N.V.',
    supportedDevices: ['Bulbs', 'Light strips', 'Lamps'],
  },
  {
    id: 2,
    name: 'Aqara',
    category: 'Security',
    technology: 'Zigbee',
    manufacturer: 'Lumi United',
    image: '/placeholder.svg?height=400&width=600',
    description: 'Comprehensive smart home and security devices',
    owner: 'Lumi United Technology Co., Ltd.',
    supportedDevices: ['Sensors', 'Cameras', 'Locks'],
  },
  {
    id: 3,
    name: 'IKEA Trådfri',
    category: 'Lighting',
    technology: 'Zigbee',
    manufacturer: 'IKEA',
    image: '/placeholder.svg?height=400&width=600',
    description: 'Affordable smart lighting options',
    owner: 'IKEA of Sweden AB',
    supportedDevices: ['Bulbs', 'Panels', 'Drivers'],
  },
  {
    id: 4,
    name: 'Smart Presence',
    category: 'Security',
    technology: 'Cloud',
    manufacturer: 'Community',
    image: '/placeholder.svg?height=400&width=600',
    description: 'Advanced presence detection for smart homes',
    owner: 'Open Source Community',
    supportedDevices: [],
  },
  {
    id: 5,
    name: 'Tuya Zigbee',
    category: 'Lighting',
    technology: 'Zigbee',
    manufacturer: 'Tuya',
    image: '/placeholder.svg?height=400&width=600',
    description: 'Versatile smart home ecosystem',
    owner: 'Tuya Inc.',
    supportedDevices: ['Switches', 'Sensors', 'Controllers'],
  },
];

interface Product {
  id: number;
  name: string;
  category: string;
  technology: string;
  manufacturer: string;
  image: string;
  description: string;
  owner: string;
  supportedDevices: string[];
}

interface ProductDetailProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;
  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  // If product not found, render 404 page
  if (!product) {
    console.log('wha tis happening');
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-6">
          <Link
            href="/ensi-home/compatible-smart-devices"
            className="mb-4 inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Products
          </Link>
          <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
          <p className="mb-4 text-gray-600">{product.description}</p>
          <p className="mb-6 text-sm text-gray-500">
            Manufacturer: {product.manufacturer} | Owner: {product.owner}
          </p>

          <div className="md:flex">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h2 className="mb-4 text-xl font-semibold">Product Details</h2>
              <p className="mb-2">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="mb-2">
                <strong>Technology:</strong> {product.technology}
              </p>
              <p className="mb-4">
                <strong>Manufacturer:</strong> {product.manufacturer}
              </p>
              <h3 className="mb-2 text-lg font-semibold">Supported Devices</h3>
              {product.supportedDevices.length > 0 ? (
                <ul className="mb-4 list-disc pl-5">
                  {product.supportedDevices.map((device, index) => (
                    <li key={index}>{device}</li>
                  ))}
                </ul>
              ) : (
                <p>This is a service and does not have supported devices.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Optionally, you can use generateStaticParams for Static Generation
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
// import { notFound } from "next/navigation";
// import productsDataRaw from "@/data/compatible-brands-and-devices.json"; // Adjust the path as necessary
// import { SupportedDevice, CompatibleBrand, ProductsData, isCompatibleBrand } from "@/data/types"; // Adjust the path as necessary

// // Import Icons
// import { Lightbulb, Video, Music, Tv, Shield, Thermometer, Hammer, Wifi, Globe, Zap,
//   Cloud, Bluetooth, Radio, Fence, Antenna, Waves, Network, Hexagon, GitBranch } from "lucide-react";

// // Create icon mappings for categories
// const categoryIconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {};
// productsDataRaw.categories.forEach(cat => {
//   switch (cat.category_name.toLowerCase()) {
//     case "lighting":
//       categoryIconMap[cat.category_name] = Lightbulb;
//       break;
//     case "video":
//       categoryIconMap[cat.category_name] = Video;
//       break;
//     case "music":
//       categoryIconMap[cat.category_name] = Music;
//       break;
//     case "appliances":
//       categoryIconMap[cat.category_name] = Tv;
//       break;
//     case "security":
//       categoryIconMap[cat.category_name] = Shield;
//       break;
//     case "climate":
//       categoryIconMap[cat.category_name] = Thermometer;
//       break;
//     case "tools":
//       categoryIconMap[cat.category_name] = Hammer;
//       break;
//     case "internet":
//       categoryIconMap[cat.category_name] = Wifi;
//       break;
//     case "localization":
//       categoryIconMap[cat.category_name] = Globe;
//       break;
//     case "energy":
//       categoryIconMap[cat.category_name] = Zap;
//       break;
//     default:
//       categoryIconMap[cat.category_name] = Lightbulb; // Default icon
//       break;
//   }
// });

// // Create icon mappings for technologies
// const technologyIconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {};
// const allTechnologies = productsDataRaw.categories.flatMap(cat =>
//   cat.compatible_brands.flatMap(brand =>
//     brand.supported_devices.flatMap(device => device.technologies)
//   )
// );
// const uniqueTechnologies = Array.from(new Set(allTechnologies));

// uniqueTechnologies.forEach(tech => {
//   switch (tech.toLowerCase()) {
//     case "cloud":
//       technologyIconMap[tech] = Cloud;
//       break;
//     case "ble":
//       technologyIconMap[tech] = Bluetooth;
//       break;
//     case "z-wave":
//       technologyIconMap[tech] = Radio;
//       break;
//     case "zigbee":
//       technologyIconMap[tech] = Fence;
//       break;
//     case "infrared":
//       technologyIconMap[tech] = Antenna;
//       break;
//     case "433 mhz":
//       technologyIconMap[tech] = Waves;
//       break;
//     case "lan":
//       technologyIconMap[tech] = Network;
//       break;
//     case "matter":
//       technologyIconMap[tech] = Hexagon;
//       break;
//     case "thread":
//       technologyIconMap[tech] = GitBranch;
//       break;
//     default:
//       technologyIconMap[tech] = Cloud; // Default icon
//       break;
//   }
// });

// // Type assertion for JSON data
// const productsData: ProductsData = productsDataRaw as ProductsData;

// // Extract all brands
// const allBrands: CompatibleBrand[] = productsData.categories.flatMap(category => category.compatible_brands);

// interface BrandDetailProps {
//   params: { brandn: string };
// }

// export default function BrandDetail({ params }: BrandDetailProps) {
//   const { brandn } = params;

//   // Find the brand by slugified name
//   console.log("inside the thing")
//   const brand = allBrands.find(
//     b => b.name.toLowerCase().replace(/\s+/g, '-') === brandn
//   );

//   // Validate the brand object using the type guard
//   if (!brand || !isCompatibleBrand(brand)) {
//     console.log("----------")
//     console.log(brand )
//     console.log(isCompatibleBrand(brand))

//     notFound(); // Render 404 page if brand is invalid
//   }

//   // Find the category of the brand
//   const category = productsData.categories.find(cat => cat.compatible_brands.includes(brand));

//   // Extract unique technologies for the brand
//   const brandTechnologies = Array.from(new Set(
//     brand.supported_devices.flatMap(device => device.technologies)
//   ));

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           {/* Back Link */}
//           <Link href="/compatible-smart-devices" className="inline-flex items-center text-blue-600 hover:underline mb-4">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Brands
//           </Link>

//           {/* Brand Title */}
//           <h1 className="text-3xl font-bold mb-2">{brand.name}</h1>

//           {/* Brand Description */}
//           <p className="text-gray-600 mb-4">{brand.description || "Description not available."}</p>

//           {/* Company Info */}
//           <p className="text-sm text-gray-500 mb-6">
//             Company: {brand.company || "N/A"}
//           </p>

//           {/* Brand Image and Details */}
//           <div className="md:flex">
//             {/* Brand Image */}
//             <div className="md:w-1/2 mb-6 md:mb-0">
//               <Image
//                 src={brand.summary_image_url || "/placeholder.svg"} // Provide a fallback image if null
//                 alt={brand.name}
//                 width={600}
//                 height={400}
//                 className="w-full h-auto rounded-lg object-cover"
//                 priority
//               />
//             </div>

//             {/* Brand Details */}
//             <div className="md:w-1/2 md:pl-6">
//               <h2 className="text-xl font-semibold mb-4">Brand Details</h2>
//               {category ? (
//                 <p className="mb-2">
//                   <strong>Category:</strong> {capitalizeFirstLetter(category.category_name)}
//                 </p>
//               ) : (
//                 <p className="mb-2">
//                   <strong>Category:</strong> Not Available
//                 </p>
//               )}
//               {/* Aggregate Technologies */}
//               <p className="mb-2">
//                 <strong>Technology:</strong> {brandTechnologies.join(', ')}
//               </p>
//               <p className="mb-4"><strong>Company:</strong> {brand.company || "N/A"}</p>

//               {/* Supported Devices */}
//               <h3 className="text-lg font-semibold mb-2">Supported Devices</h3>
//               {brand.supported_devices.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {brand.supported_devices.map((device) => (
//                     <motion.div
//                       key={device.data_driver_id}
//                       className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
//                       whileHover={{ scale: 1.02 }}
//                     >
//                       {/* Device Image */}
//                       <div className="relative h-40 w-full">
//                         <Image
//                           src={device.image_url || "/placeholder.svg"} // Provide a fallback image if null
//                           alt={`Image of ${device.device_name}`}
//                           fill
//                           style={{ objectFit: "cover" }}
//                           className="object-cover"
//                           placeholder="blur"
//                           blurDataURL="/placeholder.svg" // Ensure this image exists in your public directory
//                         />
//                       </div>

//                       {/* Device Info */}
//                       <div className="p-4">
//                         <h4 className="text-md font-semibold mb-1">{device.device_name}</h4>
//                         <p className="text-sm text-gray-600">
//                           Technologies: {device.technologies.join(', ')}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-500">This brand does not have any supported devices.</p>
//               )}
//             </div>
//           </div>

//           {/* Summary Description */}
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold mb-2">Summary Description</h2>
//             <p className="text-gray-700 whitespace-pre-line">{brand.summary_description || "No summary description available."}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function capitalizeFirstLetter(string: string): string {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// /**
//  * Optionally, you can use generateStaticParams for Static Generation
//  * (if using Next.js 13+ with the App Router)
//  */
// export async function generateStaticParams() {
//   const allBrands = productsData.categories.flatMap(category => category.compatible_brands);
//   return allBrands.map(brand => ({
//     brandn: brand.name.toLowerCase().replace(/\s+/g, '-'), // e.g., "Philips Hue" -> "philips-hue"
//   }));
// }

// /**
//  * Custom Chevron Icons for Sidebar Toggle
//  * Using ChevronLeft and ChevronRight instead of ChevronUp and ChevronDown
//  * to better represent the collapse/expand direction.
//  */
// const ChevronLeftIcon = () => (
//   <ChevronLeft className="w-4 h-4" />
// );

// const ChevronRightIcon = () => (
//   <ChevronRight className="w-4 h-4" />
// );
