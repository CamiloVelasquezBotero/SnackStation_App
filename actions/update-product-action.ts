"use server"

import { prisma } from "@/src/lib/prisma"
import { productSchema } from "@/src/zodSchema"
import { revalidatePath } from "next/cache"

export async function updateProduct(data:unknown, id:number) {
    const result = productSchema.safeParse(data)
    
    if(!result.success) {
        return { errors: result.error.issues }
    }

    await prisma.product.update({
        where: {
            id
        },
        data: result.data
    })

    // Revalidate the path for the user to remove the cache that next save
    revalidatePath('/admin/products')
}