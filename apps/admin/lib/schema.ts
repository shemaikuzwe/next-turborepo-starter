import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  price: z.string().min(1, {
    message: "Price is required.",
  }),
  description: z.string().min(4, {
    message: "Description must be at least 4 characters.",
  }),
  isPopular: z.boolean().optional(),
  features: z
    .array(
      z.object({
        text: z.string().min(1, "Feature text is required"),
      }),
    )
    .min(1, "At least one feature is required")
})


export type AddProductFormValues = z.infer<typeof formSchema>;