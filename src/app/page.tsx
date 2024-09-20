import { ArrowRight, Box, Smartphone, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Ensi Home: The Future of Smart Living
          </h1>
          <p className="mb-8 text-xl">
            Transform your home with our intelligent system, combining a
            powerful mobile app and the Ensi Home Box.
          </p>
          <Button size="lg" asChild>
            <Link href="#features">
              Discover More
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="grow">
        <section id="features" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon={<Smartphone className="size-12 text-blue-500" />}
                title="Mobile App"
                description="Control your entire home from anywhere with our intuitive mobile application."
              />
              <FeatureCard
                icon={<Box className="size-12 text-indigo-500" />}
                title="Ensi Home Box"
                description="The central hub that connects and manages all your smart devices seamlessly."
              />
              <FeatureCard
                icon={<Zap className="size-12 text-yellow-500" />}
                title="Energy Efficient"
                description="Optimize your energy usage and reduce bills with smart automation."
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <Image
                  src="/images/mobile-app-mockup.png"
                  alt="Ensi Home Mobile App"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="mb-4 text-3xl font-bold">
                  Ensi Home Mobile App
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Take control of your smart home from anywhere. Our mobile app
                  provides an intuitive interface to manage all your connected
                  devices, set routines, and monitor your home&#39;s
                  performance.
                </p>
                <Button>Learn More About the App</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <Image
                  src="/images/ensi-home-box.png"
                  alt="Ensi Home Box"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h2 className="mb-4 text-3xl font-bold">Ensi Home Box</h2>
                <p className="mb-6 text-lg text-gray-600">
                  The brain of your smart home system. The Ensi Home Box
                  connects all your smart devices, enabling seamless integration
                  and powerful automation capabilities.
                </p>
                <Button>Discover the Ensi Home Box</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ensi Home. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="rounded-lg bg-white p-6 shadow-md">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
