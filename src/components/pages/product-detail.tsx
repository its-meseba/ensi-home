import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';

// Mock data structure (in a real app, this would be fetched from an API)
const products = [
  {
    id: 1,
    name: 'Philips Hue',
    category: 'Lighting',
    technology: 'Zigbee',
    manufacturer: 'Signify',
    image: '/placeholder.jpg?height=400&width=600',
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
    image: '/placeholder.jpg?height=400&width=600',
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
    image: '/placeholder.jpg?height=400&width=600',
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
    image: '/placeholder.jpg?height=400&width=600',
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
    image: '/placeholder.jpg?height=400&width=600',
    description: 'Versatile smart home ecosystem',
    owner: 'Tuya Inc.',
    supportedDevices: ['Switches', 'Sensors', 'Controllers'],
  },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-6">
          <Link
            href="/"
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
