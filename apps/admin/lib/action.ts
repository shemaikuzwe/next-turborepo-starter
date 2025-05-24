"use server"
import { prisma } from "@next-starter/db"
import { AddProductFormValues, formSchema } from "./schema"

export async function addProduct(data: AddProductFormValues) {
    console.log(data);
    
    const validate = formSchema.safeParse(data)
    if (!validate.success) {
        throw new Error("Invalid form data")
    }
    await prisma.product.create({
        data: {
            name: validate.data.name,
            price: parseInt(validate.data.price),
            description: validate.data.description,
            isPopular: validate.data.isPopular,
            features: validate.data.features.map((feature) => feature.text),
        }
    })
}