import { Product } from "@/src/generated/prisma"
import { formatCurrency, getImagePath } from "@/src/utils"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const imagePath = getImagePath(product.image)

    return (
        <div className="border border-slate-300 bg-white hover:bg-gray-100 shadow-lg shadow-slate-300 hover:shadow-slate-500 relative rounded-lg p-2 transition">

            <Image
                src={imagePath}
                alt={`Image for ${product.name}`}
                width={400}
                height={500}
            /* quality={100} */ // the 75 is the default
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatCurrency(product.price)}</p>
            </div>

            <AddProductButton
                product={product}
            />
        </div>
    )
}
