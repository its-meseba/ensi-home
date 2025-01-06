'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AccountDeletionPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!phone) {
      setError('Please enter your phone number');
      return;
    }

    try {
      const response = await fetch('/api/account-deletion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone,
          reason,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setSubmitted(true);
      setError('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="container mx-auto min-h-screen px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Account Deletion Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6">
              <Info className="size-4" />
              <AlertTitle>Important Information</AlertTitle>
              <AlertDescription>
                <p className="mt-2">
                  Before proceeding with your account deletion request, please
                  note:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>This action cannot be undone</li>
                  <li>All your personal data will be permanently deleted</li>
                  <li>Any active subscriptions will be cancelled</li>
                  <li>
                    The deletion process may take up to 30 days to complete
                  </li>
                </ul>
              </AlertDescription>
            </Alert>

            {submitted ? (
              <Alert className="bg-green-50">
                <CheckCircle2 className="size-4 text-green-600" />
                <AlertTitle className="text-green-600">
                  Request Received
                </AlertTitle>
                <AlertDescription className="text-green-600">
                  We have received your account deletion request. We will
                  process it and contact you at {email} with further
                  instructions within 2-3 business days.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Phone Number*
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="reason"
                    className="text-muted-foreground text-sm font-medium"
                  >
                    Reason for Deletion (Optional)
                  </label>
                  <Textarea
                    id="reason"
                    placeholder="Please let us know why you want to delete your account"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Deletion Request
                </Button>

                <p className="text-muted-foreground text-center text-sm">
                  Need help? Contact us at{' '}
                  <a
                    href="mailto:support@ensihome.com"
                    className="text-primary hover:underline"
                  >
                    solace@solace.com.tr
                  </a>
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
