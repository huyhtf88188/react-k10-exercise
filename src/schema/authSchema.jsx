import * as z from "zod";

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirm: z.string().min(8).max(255),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});
