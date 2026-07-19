import { prisma } from "@/src/lib/prisma"

export async function GET() {
    const orders = await prisma.order.findMany({
      where: { // Every with the state in pending
         status: false
      },
      include: { // We include the products of the orderProducts
         orderProducts: {
            include: {
               product: true
            }
         }
      }
   })
   /* console.log(JSON.stringify(orders, null, 2)) */ // To debug it
   return Response.json(orders)
}