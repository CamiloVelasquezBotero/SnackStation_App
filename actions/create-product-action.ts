"use server"

import { prisma } from "@/src/lib/prisma"
import { productSchema } from "@/src/zodSchema"

export async function createProduct(data:unknown) {
    const result = productSchema.safeParse(data)
    //Return the errros
    if(!result.success) {
        return { errors: result.error.issues }
    }

    // Create the product
    await prisma.product.create({ data: result.data })
}