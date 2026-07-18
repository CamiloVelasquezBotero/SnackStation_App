import ProductsSearchForm from "@/components/products/ProductsSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive' // To be abel to search with lowercase and uppercase it doesn't matter
            }
        },
        include: { category: true } // we include the category in the products too
    })
    return products
}

type SearchPageParams = {
    searchParams: { search: string }
}

export default async function SearchPage({ searchParams }: SearchPageParams) {
    const params = await searchParams
    const products = await searchProducts(params.search)

    return (
        <>
            <Heading>Search Results</Heading>

            <div className='flex flex-col lg:flex-row lg:justify-between'>
                <Link
                    href={'/admin/products/new'}
                    className='bg-amber-400 w-65 text-xl px-10 py-3 text-center font-bold cursor-pointer rounded-md hover:bg-amber-300 transition'
                >
                    Create Product
                </Link>

                <ProductsSearchForm />
            </div>

            {products.length ? (
                <ProductsTable products={products} />
            ) : (
                <p className="text-3xl font-black my-10 text-center">
                    There are no results
                </p>
            )}
        </>
    )
}
