"use client"
import { searchSchema } from "@/src/zodSchema"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"   

export default function ProductsSearchForm() {

   const handleSearchForm = (formData:FormData) => {
      const data = { search: formData.get('search') }

      const result = searchSchema.safeParse(data)
      if(!result.success) {
         result.error.issues.forEach(issue => toast.error(issue.message))
         return
      }

      redirect(`/admin/products/search?search=${result.data.search}`)
   }

   return (
      <form className="flex items-center mt-8 lg:mt-0" action={handleSearchForm}>
         <input 
            type="text" 
            placeholder="Search for product"
            className="p-2 placeholder-gray-400 w-full bg-white rounded"
            name="search"
         />

         <input 
            type="submit" 
            value={'Search'}
            className="bg-indigo-600 p-2 uppercase text-white cursor-pointer rounded hover:bg-indigo-800 transition font-bold"
         />
      </form>
   )
}
