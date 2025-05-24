"use server"
import { prisma } from "@next-starter/db"
import { AddProductFormValues, formSchema } from "./schema"

export async function addProduct(data: AddProductFormValues) { 
    const validate = formSchema.safeParse(data)
    if (!validate.success) {
        throw validate.error.cause
    }

    await prisma.product.create({
        data: {
            name: validate.data.name,
            price: parseInt(validate.data.price),
            description: validate.data.description,
            isPopular: validate.data.isPopular,
            features: validate.data.features ? validate.data.features.filter(feature => feature?.text).map(feature => feature!.text) : [],
        }
    })
}