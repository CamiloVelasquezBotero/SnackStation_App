"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type AdminRouteProps = {
   link: {
      url: string;
      text: string;
      blank: boolean;
   }
}

export default function AdminRoute({ link }: AdminRouteProps) {
   const pathname = usePathname()
   const isActive = pathname.startsWith(link.url)

   return (
      <Link
         className={`${isActive && 'bg-amber-400 rounded-r-2xl'} ${!isActive && 'hover:bg-amber-200'}
            flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b
            rounded-r-2xl transition cursor-pointer hover:scale-102`}
         href={link.url}
         target={link.blank ? '_blank' : ''}
      >
         {link.text}
      </Link>     
   )
}
