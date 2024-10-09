'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function ApplyComponent() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted with email:', email);
    // Reset form
    setEmail('');
  };

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="container mx-auto rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-16"
    >
      <Card className="mx-auto max-w-2xl overflow-hidden rounded-3xl border-0 bg-white bg-opacity-90 shadow-2xl backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
            Have an Ensi Home Now
          </CardTitle>
          <CardDescription className="mt-2 text-lg">
            Apply now and we will reach out to you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-lg font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 rounded-xl p-3 text-lg"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-6 text-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
            >
              Apply Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
