'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { client } from '@/sanity/lib/client';

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required").max(50),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100),
  message: z.string().min(5, "Message must be at least 5 characters").max(200),
});

type FormType = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: FormType) {
    setSubmissionMessage(null);
    setErrorMessage(null);

    try {
      await client.create({
        _type: 'contactform',
        name: values.firstName,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });

      setSubmissionMessage('✅ Message sent successfully!');
      form.reset(); // Form reset after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('❌ Failed to send message. Please try again.');
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">First name</FormLabel>
                <FormControl>
                  <Input placeholder="abc" {...field} className='text-slate-400 '/>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input placeholder="abc@gmail.com" {...field} className='text-slate-400 '/>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter subject" {...field} className='text-slate-400 '/>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">Message</FormLabel>
                <FormControl>
                  <Input placeholder="Hi, I'd like to ask about..." {...field} className='text-slate-400 '/>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button type="submit" className="px-5 text-black py-2 border rounded-md font-semibold hover:bg-indigo-700">
            Submit
          </Button>
        </form>
      </Form>

      {/* ✅ Success Message */}
      {submissionMessage && <p className="text-green-600 text-center font-semibold">{submissionMessage}</p>}
      {/* ❌ Error Message */}
      {errorMessage && <p className="text-red-600 text-center font-semibold">{errorMessage}</p>}
    </div>
  );
}
