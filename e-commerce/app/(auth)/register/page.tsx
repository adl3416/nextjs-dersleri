"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { date, z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import { start } from 'repl'

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "FullName must be at least 2 characters.",
  }),


  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),


  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),


  email: z.string().email( {
    message: "Invalid Email Addres.",
  }),


  birtDate: z.string().refine(date=>{
   const birtDate= new Date(date)
   const age = new Date().getFullYear() - birtDate.getFullYear()
   return age >=18
  },{ 
    message: "You must be at least 18 years old",
  }),



  startDate:z.string().refine(date=>{
    const startDate= new Date(date)
    return startDate >= new Date()
  },{
    message:"Start date must be in the future",
  }),

  gender:z.enum(["Male", "Female", "Other"],{   //Sadece 1 tane secmek zorunda
    required_error:"Please select a gender"
  }),


  jobType:z.array(z.enum(["Remote", "Hybrid", "Office"])).min(1,{   //en az 1 tane secmek zorunda,cokta secebilir
    message:"You must select at least one job type",
  })
  

})

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}





const RegisterPage = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {

      fullname: "",
      username: "",
      password: "",
      email: "",
      birtDate: "",
      startDate: "",
      gender: "",
      jobType: []
      
     
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-4/5">
      <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validatLabel'>Fullname</FormLabel>
              <FormControl>
                <Input placeholder="Fullname" {...field} />
              </FormControl>
             
              <FormMessage className='validatError' />
            </FormItem>
            
          )}
        />



        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validatLabel'>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
             
              <FormMessage className='validatError' />
            </FormItem>
            
          )}
        />

<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validatLabel'>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
             
              <FormMessage  className='validatError' />
            </FormItem>
            
          )}
        />


<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validatLabel'>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
             
              <FormMessage className='validatError' />
            </FormItem>
            
          )}
        />

<FormField
          control={form.control}
          name="birtDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validatLabel'>BirtDate</FormLabel>
              <FormControl>
                <Input type='date' className='w-36' placeholder="birtDate" {...field} />
              </FormControl>
             
              <FormMessage  className='validatError' />
            </FormItem>
            
          )}
        />


<FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='startDate'>StartDate</FormLabel>
              <FormControl>
                <Input type='date'  className='w-36' placeholder="username" {...field} />
              </FormControl>
             
              <FormMessage className='validatError' />
            </FormItem>
            
          )}
        />

<FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validatLabel'>Gender</FormLabel>
              <FormControl>
                <Input placeholder="gender" {...field} />
              </FormControl>
             
              <FormMessage  className='validatError' />
            </FormItem>
            
          )}
        />


<FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validatLabel'>jobType</FormLabel>
              <FormControl>
                <Input placeholder="jobType" {...field} />
              </FormControl>
             
              <FormMessage  className='validatError' />
            </FormItem>
            
          )}
        />


        <Button type="submit">Submit</Button>
      </form>
      <div className='mt-8 space-x-10 '>
        <Label>Allready  an account</Label>
        <Link href="/login">
          Click Here Login
        </Link>

      </div>
    </Form>
  )
}

export default RegisterPage