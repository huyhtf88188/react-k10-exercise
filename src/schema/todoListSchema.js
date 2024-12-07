import * as z from "zod";

export const todolistSchema = z.object({
  title: z.string().min(6),
  description: z.string().min(6),
});
