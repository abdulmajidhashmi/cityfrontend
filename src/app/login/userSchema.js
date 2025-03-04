import * as z from 'zod';

export const signupSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    number: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    otp: z.string().length(6, "OTP must be exactly 6 digits"),
    role: z.enum(["user", "creator"], { message: "Select a valid role" }),
  });

export const loginSchema = z.object({
    number: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    otp: z.string().length(6, "OTP must be exactly 6 digits")
  });

  