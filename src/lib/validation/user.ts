import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email address")
      .min(16, "Email must be at least 16 characters long")
      .max(50, "Email cannot be longer than 50 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(18, "Password cannot be longer than 18 characters"),

    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long")
      .max(18, "Confirm password cannot be longer than 18 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(16, "Email must be at least 16 characters long")
    .max(50, "Email cannot be longer than 50 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(18, "Password cannot be longer than 18 characters"),
});
