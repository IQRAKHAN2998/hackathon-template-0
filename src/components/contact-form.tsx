"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { client } from '@/sanity/lib/client'

const formSchema = z.object({
  firstName: z.string().min(1).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(5).max(200)
})
type FormType = z.infer<typeof formSchema>

export default function ContactForm() {

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email : "",
      subject: "",
      message: ""
    },
  })
  async function onSubmit(values: FormType) {
    // try {
      await client.create({
        _type: "contactform",
        name: values.firstName,
        email: values.email,
        subject: values.subject,
        message: values.message
      })
    //   console.log("data submit")
    //   }catch (error) {
    //     console.log("data not submit")
    //   }
    // }
        // console.log(values)
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
                <FormLabel className="block text-sm font-medium text-gray-700 ">First name</FormLabel>
                <FormControl className="mt-1 block w-full border py-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <Input placeholder="abc" {...field} />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                <FormControl className="mt-1 block w-full rounded-md border py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <Input placeholder="abc@gmail.com" {...field} />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">Subject</FormLabel>
                <FormControl className="mt-1 block w-full rounded-md border py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <Input placeholder="this is an optional" {...field} />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="block text-sm font-medium text-gray-700 ">
                <FormLabel >Message</FormLabel>
                <FormControl className="mt-1 block w-full rounded-md border py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <Input placeholder="Hi i'd like to ask about" {...field} />
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
          <Button type="submit" className="px-5 text-black py-2 border  rounded-md font-semibold hover:bg-indigo-700">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
