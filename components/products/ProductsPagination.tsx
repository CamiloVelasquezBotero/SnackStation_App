import Link from "next/link";

type ProductsPaginationProps = {
   currentPage: number,
   totalPages: number
}

export default function ProductsPagination({ currentPage, totalPages }: ProductsPaginationProps) {
   const pages = Array.from({length: totalPages}, (_, i) => i + 1)

   return (
      <nav className="flex justify-center py-10">

         {/* LEFT */}
         {currentPage > 1 && (
            <Link
               href={`/admin/products?currentPage=${currentPage - 1}`}
               className="hover:scale-110 transition hover:font-bold hover:bg-amber-200 rounded-md bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 w-10"
            >&laquo;</Link>
         )}

         {/* Pagination */}
         {pages.map(page => (
            <Link
               key={page}
               href={`/admin/products?currentPage=${page}`}
               className={`${currentPage === page && 'bg-amber-400'} ${currentPage !== page && 'hover:bg-amber-200 hover:scale-110 transition hover:font-bold'}
                   rounded-md px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 w-10`}
            >
               {page}
            </Link>
         ))}

         {/* RIGHT */}
         {currentPage < totalPages && (
            <Link
               href={`/admin/products?currentPage=${currentPage + 1}`}
               className="hover:bg-amber-200 hover:scale-110 transition hover:font-bold rounded-md bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 w-10"
            >&raquo;</Link>
         )}
      </nav>
   )
}
