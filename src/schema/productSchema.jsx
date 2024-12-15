import * as Z from "zod";

export const productSchema = Z.object({
  title: Z.string().min(6),
  price: Z.number().min(0),
  description: Z.string().optional(),
});
