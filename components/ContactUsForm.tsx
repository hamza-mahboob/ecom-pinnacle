"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().min(1, {
    message: "Company Name must be present"
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactUsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel className="text-[20px] font-semibold">Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="John David" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel className="text-[20px] font-semibold">Your Email *</FormLabel>
              <FormControl>
                <Input placeholder="john.david@example.com" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel className="text-[20px] font-semibold">Company</FormLabel>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel className="text-[20px] font-semibold">Subject *</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel className="text-[20px] font-semibold">Message *</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message here" {...field} as="textarea" rows={7} className="resize-none" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button className="flex items-center justify-center w-[193px] h-[61px] bg-primaryColor text-white text-[18px] rounded-2xl" type="submit">Submit</Button></div>
      </form>
    </Form>
  )
}
