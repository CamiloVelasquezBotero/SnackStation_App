import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

type EditProductsPageParams = {
    params: { id: string }
}

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: { id }
    })
    // Check if the product exists
    if (!product) {
        /* return redirect('/404') */
        notFound()
    }

    return product
}

export default async function EditProductsPage({ params }: EditProductsPageParams) {
    const { id } = await params
    const product = await getProductById(Number(id))

    return (
        <>
            <Heading>Edit Product: {product.name}</Heading>

            <GoBackButton />

            <EditProductForm>
                <ProductForm
                    product={product}
                />
            </EditProductForm>
        </>
    )
}
