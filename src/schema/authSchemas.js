import * as z from "zod";

export const registerSchema = z.object({
  username: z.string().min(6, "username tối thiểu 6 ký tự"),
  email: z.string().trim().email("email không hợp lệ"),
  password: z.string().trim().min(6).max(255),
});

export const loginSchema = z.object({
  username: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6).max(255),
});
