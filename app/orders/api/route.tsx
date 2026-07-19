import { prisma } from "@/src/lib/prisma";

export async function GET() {
    const orders = await prisma.order.findMany({
        take: 5,
        where: {
            orderReadyAt: {
                not: null // Every order that doesn't have a null value
            }
        },
        orderBy: {
            orderReadyAt: 'desc'
        },
        include: {
            orderProducts: { // Include the orderProducts to show to the user
                include: {
                    product: true // And include every product too to have more description
                }
            }
        }
    })
    return Response.json(orders)
}