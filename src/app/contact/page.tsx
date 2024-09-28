'use client'

import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Paperclip } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const formSchema = z.object({
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  question: z.string().min(10, {
    message: "Question must be at least 10 characters.",
  }),
  attachment: z.instanceof(File).optional(),
})

export default function SupportForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      question: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append('to', 'support@ensihome.com');
      formData.append('subject', values.subject);
      formData.append('message', values.question);
      if (values.attachment) {
        formData.append('attachment', values.attachment);
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // You can add a success message or redirect the user here
      } else {
        console.error('Failed to send email');
        // You can add an error message for the user here
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // You can add an error message for the user here
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8 p-4">
      <motion.div 
        className="w-full md:w-3/5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6" />
              <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
            </div>
            <CardDescription>
              Please provide as much detail as possible. This will help us to answer you faster and better.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject (required)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="What's your question about?" 
                          {...field} 
                          className="transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your question? (required)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please include as much details as you can." 
                          className="min-h-[100px] transition-all duration-300"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="attachment"
                  render={({ field: { onChange, ...field } }) => (
                    <FormItem>
                      <FormLabel>Attachments</FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="file"
                            {...field}
                            ref={fileInputRef}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                onChange(file);
                              }
                            }}
                            className="hidden"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full"
                          >
                            <Paperclip className="mr-2 h-4 w-4" />
                            Choose File
                          </Button>
                        </div>
                      </FormControl>
                      <FormDescription>
                        You can upload a file to help explain your question.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full md:w-2/5 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/contact-us.png"
          alt="Support illustration"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  )
}