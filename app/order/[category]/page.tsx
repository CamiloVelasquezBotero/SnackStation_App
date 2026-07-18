import ProductCard from "@/components/products/ProductCard"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

type OrderPageParams = {
  params: Promise<{ category: string }>
}

async function getProducts(category:string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })
  return products
}

export default async function OrderPage({params}:OrderPageParams) {
  const { category } = await params
  const products = await getProducts(category)

  return (
    <>

      <Heading>Choose and customize your order below</Heading>

      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-start">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
