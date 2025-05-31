import { prisma } from "@next-starter/db"

export async function getProductsCount() {
    const count = await prisma.product.count()
    return count
}