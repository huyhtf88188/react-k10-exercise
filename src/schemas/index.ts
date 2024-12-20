import * as z from "zod";

export const productSchema = z.object({
  title: z.string().trim().min(6, "tối thiểu 6 ký tự"),
  price: z.number().min(0, "giá k được nhỏ hơn 0"),
  description: z.string().optional(),
});
