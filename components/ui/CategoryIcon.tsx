"use client"
import { Category } from "@/src/generated/prisma"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

type CategoryIconProps = {
   category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
   const params = useParams<{category:string}>()
   const isActive = category.slug === params.category

   return (
      <Link href={`/order/${category.slug}`}>
         <div className={`${isActive ? 'bg-amber-400 rounded-r-2xl' : ''} ${!isActive && 'hover:bg-amber-200'}
            flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b rounded-r-2xl
            hover:rounded-r-2xl hover:scale-102 transition cursor-pointer hover:shadow-md hover:shadow-gray-400`}>
            <div className="relative size-16">
               <Image
                  src={`/icon_${category.slug}.svg`}
                  alt={`Category of the image: ${category.name}`}
                  fill
               />
            </div>
            <p
               className="text-lg font-bold"
            >{category.name}</p>
         </div>
      </Link>
   )
}
