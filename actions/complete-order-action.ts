"use server"
import { revalidatePath } from 'next/cache'
import { prisma } from "@/src/lib/prisma"
import { OrderIdSchema } from "@/src/zodSchema"

export async function completeOrder(formData: FormData) {
    const data = {
        order_id: formData.get('order_id')
    }
    const result = OrderIdSchema.safeParse(data)
    if (result.success) {
        try {
            await prisma.order.update({
                where: {
                    id: result.data.order_id
                },
                data: {
                    status: true,
                    orderReadyAt: new Date(Date.now())
                }
            })

            // Revalidate the path (url) with the "revalidatePath" from next/cache
            revalidatePath('/admin/orders')
        } catch (error) {
            console.error(`There was an error completing the order`)
        }
    }
}