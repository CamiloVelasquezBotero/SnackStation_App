import { redirect } from 'next/navigation'
import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
import ProductsSearchForm from '@/components/products/ProductsSearchForm';

type ProductsPageParams = {
  searchParams: {currentPage: string}
}

async function productCount() {
  return await prisma.product.count()
}

async function getProducts(page:number, pageSize:number) {
  const products = await prisma.product.findMany({
    include: {category: true},
    take: 10, // Only takes the first 10
    skip: (page - 1) * pageSize
  })
  return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({searchParams}:ProductsPageParams) { // Get the searchQuery from the url
  const params = await searchParams
  
  // Pagination
  const currentPage = Number(params.currentPage) || 1 // Set the page
  const pageSize = 10
  
  // Redirect if the page is lower than the totalPages
  if(currentPage < 0) return redirect('/admin/products')

  const productsData = getProducts(currentPage, pageSize)
  const totalProductsData = productCount()
  const [ products, totalProducts ] = await Promise.all([productsData, totalProductsData])

  const totalPages = Math.ceil(totalProducts / pageSize)

  // Redirect if the page is higher than the totalPages
  if(currentPage > totalPages) return redirect('/admin/products')
  
  return (
    <>
      <Heading>Manage Your Products</Heading>

      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <Link
          href={'/admin/products/new'}
          className='bg-amber-400 w-65 text-xl px-10 py-3 text-center font-bold cursor-pointer rounded-md hover:bg-amber-300 transition'
        >
          Create Product
        </Link>

        <ProductsSearchForm />  
      </div>

      <ProductsTable 
        products={products}
      />

      <ProductsPagination 
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  )
}
