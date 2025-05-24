import { prisma } from "@next-starter/db";

export async function getProducts() {
    const products = await prisma.product.findMany()
    return products
}