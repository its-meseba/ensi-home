// Purpose: To detail the features and benefits of the Ensi Home Box (the brain device/hub).

// Components:

// Hero Section:

// Headline: "Ensi Home Box - The Brain of Smart Living"
// Background Image: 3D rendering of the Ensi Home Box.
// Product Overview:

// Describe what the Ensi Home Box is and its role.
// Emphasize its importance in the smart home ecosystem.
// Key Features:

// List features such as:
// Centralized control.
// High compatibility.
// Secure connectivity.
// Scalability.
// Technical Specifications:

// Provide detailed specs for technical teams.
// Downloadable PDF with full specifications.
// Integration Process:

// Explain how the box is installed during construction.
// Highlight ease of integration.
// Visuals:

// Interactive 3D model using GLTFViewer component.
// Images of the box in various settings.
// Call to Action:

// CTA Button: "Contact Us for Technical Details" - links to /contact/
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IntroFeatureWithModel } from '@/components/common/intro-feature';
import { Case1 } from '@/components/common/sliding-cases';
import { Download, Zap, Shield, Maximize } from 'lucide-react';

const logos = [
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
];

export default function BoxPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <IntroFeatureWithModel
          platform="Smart Home"
          title="Ensi Home Box - The Brain of Smart Living"
          description="Experience the future of home automation with the Ensi Home Box, the central hub that brings intelligence to your living space."
          checkPoints={[
            {
              title: 'Centralized Control',
              description:
                'Manage all your smart devices from a single interface.',
            },
            {
              title: 'High Compatibility',
              description:
                'Works seamlessly with a wide range of smart home devices.',
            },
            {
              title: 'Secure Connectivity',
              description:
                'Advanced encryption to keep your home network safe.',
            },
          ]}
          modelUrl="/assets/models/ensi-home-box.glb"
        />
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Key Features</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2" />
                Centralized Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Manage all your smart devices from a single, intuitive
                interface.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2" />
                Secure Connectivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Advanced encryption and security protocols to protect your home
                network.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Maximize className="mr-2" />
                High Compatibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Seamlessly integrates with a wide range of smart home devices
                and protocols.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="mr-2" />
                Scalability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Easily expand your smart home system as your needs grow.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Technical Specifications</h2>
        <div className="bg-muted rounded-lg p-6">
          <ul className="list-inside list-disc space-y-2">
            <li>Processor: Quad-core ARM Cortex-A53</li>
            <li>Memory: 2GB RAM</li>
            <li>Storage: 16GB eMMC</li>
            <li>Connectivity: Wi-Fi 6, Bluetooth 5.0, Zigbee, Z-Wave</li>
            <li>Ports: 2x USB 3.0, 1x Ethernet</li>
            <li>Power: 12V DC input</li>
          </ul>
          <Button className="mt-4">
            <Download className="mr-2 size-4" /> Download Full Specifications
            (PDF)
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Integration Process</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Easy Installation</h3>
            <p className="mb-4">
              The Ensi Home Box is designed for seamless integration during the
              construction phase or as an upgrade to existing homes. Our team of
              experts ensures a smooth installation process, minimizing
              disruption to your daily life.
            </p>
            <ol className="list-inside list-decimal space-y-2">
              <li>Site assessment and planning</li>
              <li>Wiring and infrastructure setup</li>
              <li>Box installation and configuration</li>
              <li>Device pairing and system testing</li>
              <li>User training and handover</li>
            </ol>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Ensi Home Box Installation"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Ensi Home Box in Action</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Ensi Home Box in Living Room"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Ensi Home Box in Kitchen"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Ensi Home Box in Home Office"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Transform Your Home?
        </h2>
        <p className="mb-8">
          Get in touch with our team for personalized assistance and technical
          details.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Us for Technical Details</Button>
        </Link>
      </section>

      <Case1 title="Our Partners" logos={logos} interval={3000} />
    </div>
  );
}
