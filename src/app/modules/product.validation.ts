import { z } from "zod";

const tVariantsValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const tInventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(tVariantsValidationSchema),
  inventory: tInventoryValidationSchema,
});

export default productValidationSchema;
