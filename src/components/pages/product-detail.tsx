import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock data structure (in a real app, this would be fetched from an API)
const products = [
  { id: 1, name: "Philips Hue", category: "Lighting", technology: "Zigbee", manufacturer: "Signify", image: "/placeholder.svg?height=400&width=600", description: "Smart lighting solution for your home", owner: "Signify N.V.", supportedDevices: ["Bulbs", "Light strips", "Lamps"] },
  { id: 2, name: "Aqara", category: "Security", technology: "Zigbee", manufacturer: "Lumi United", image: "/placeholder.svg?height=400&width=600", description: "Comprehensive smart home and security devices", owner: "Lumi United Technology Co., Ltd.", supportedDevices: ["Sensors", "Cameras", "Locks"] },
  { id: 3, name: "IKEA Trådfri", category: "Lighting", technology: "Zigbee", manufacturer: "IKEA", image: "/placeholder.svg?height=400&width=600", description: "Affordable smart lighting options", owner: "IKEA of Sweden AB", supportedDevices: ["Bulbs", "Panels", "Drivers"] },
  { id: 4, name: "Smart Presence", category: "Security", technology: "Cloud", manufacturer: "Community", image: "/placeholder.svg?height=400&width=600", description: "Advanced presence detection for smart homes", owner: "Open Source Community", supportedDevices: [] },
  { id: 5, name: "Tuya Zigbee", category: "Lighting", technology: "Zigbee", manufacturer: "Tuya", image: "/placeholder.svg?height=400&width=600", description: "Versatile smart home ecosystem", owner: "Tuya Inc.", supportedDevices: ["Switches", "Sensors", "Controllers"] },
]

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === Number(id))

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-6">Manufacturer: {product.manufacturer} | Owner: {product.owner}</p>
          
          <div className="md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              <p className="mb-2"><strong>Category:</strong> {product.category}</p>
              <p className="mb-2"><strong>Technology:</strong> {product.technology}</p>
              <p className="mb-4"><strong>Manufacturer:</strong> {product.manufacturer}</p>
              <h3 className="text-lg font-semibold mb-2">Supported Devices</h3>
              {product.supportedDevices.length > 0 ? (
                <ul className="list-disc pl-5 mb-4">
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
  )
}
