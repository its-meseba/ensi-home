'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function NewContactBulletin() {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Bulletin form submitted');

    try {
      const res = await fetch('/api/bulletin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setResponse('You have successfully subscribed to our bulletin!');
        setEmail('');
      } else {
        setResponse('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting bulletin form:', error);
      setResponse('An error occurred. Please try again later.');
    }
  };

  return (
    <motion.form
      className="space-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Label htmlFor="bulletin-email">Email</Label>
        <Input
          id="bulletin-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for updates"
          required
          className="mt-1"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      </motion.div>
      {response && (
        <motion.p
          className={`mt-2 text-center ${response.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {response}
        </motion.p>
      )}
    </motion.form>
  );
}
