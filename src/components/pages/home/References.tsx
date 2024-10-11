'use client';

import { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const references = [
  {
    name: 'Company A',
    logo: '/placeholder.jpg?height=100&width=200',
    quote:
      'Ensi Home has revolutionized our approach to sustainable living. Their innovative solutions have not only improved our energy efficiency but also enhanced the overall quality of life for our residents.',
  },
  {
    name: 'Company B',
    logo: '/placeholder.jpg?height=100&width=200',
    quote:
      'Working with Ensi Home has been a game-changer for our construction projects. Their cutting-edge technologies and commitment to sustainability have set a new standard in the industry.',
  },
  {
    name: 'Company C',
    logo: '/placeholder.jpg?height=100&width=200',
    quote:
      "As a business owner, I've seen a significant improvement in workplace productivity and employee satisfaction since implementing Ensi Home solutions. It's been a worthwhile investment for our company.",
  },
  {
    name: 'Company D',
    logo: '/placeholder.jpg?height=100&width=200',
    quote:
      "Ensi Home's sustainable solutions have not only reduced our carbon footprint but also significantly lowered our operational costs. It's a win-win for our business and the environment.",
  },
];

export default function References() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="container mx-auto overflow-hidden rounded-3xl px-4 py-16"
    >
      <h2 className="mb-8 text-center text-3xl font-bold">
        What Our Clients Say
      </h2>
      <div className="flex snap-x space-x-4 overflow-x-auto pb-4">
        {references.map((reference, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full shrink-0 snap-center sm:w-80"
          >
            <Card className="h-full overflow-hidden rounded-3xl border">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 size-32 overflow-hidden rounded-3xl">
                  <Image
                    src={reference.logo}
                    alt={`${reference.name} logo`}
                    width={200}
                    height={100}
                    className="size-full object-cover"
                  />
                </div>
                <p className="mb-4 text-center italic">
                  &quot;{reference.quote}&quot;
                </p>
                <p className="text-center font-semibold">{reference.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
