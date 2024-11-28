"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/lib/validation/user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  function register(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-xl border border-gray-200 p-8 space-y-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Create Your Account
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(register)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe@gmail.com"
                      className="w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full border-gray-300 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button
                        type="button"
                        onClick={togglePasswordVisibility}
                        variant="ghost"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100"
                        aria-label={
                          isPasswordVisible ? "Hide password" : "Show password"
                        }
                      >
                        {isPasswordVisible ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="w-full border-gray-300 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button
                        type="button"
                        onClick={togglePasswordVisibility}
                        variant="ghost"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100"
                        aria-label={
                          isPasswordVisible ? "Hide password" : "Show password"
                        }
                      >
                        {isPasswordVisible ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
            >
              Create Account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
