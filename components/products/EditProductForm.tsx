"use client"
import { createProduct } from "@/actions/create-product-action"
import { productSchema } from "@/src/zodSchema"
import { redirect } from "next/navigation"
import { toast } from "react-toastify"
import { useParams } from "next/navigation"
import { updateProduct } from "@/actions/update-product-action"

export default function EditProductForm({children}:{children: React.ReactNode}) {
    const params = useParams()
    const id = Number(params.id)

    const handleSubmit = async (formData:FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image'),
        }

        const result = productSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => toast.error(issue.message))
            return
        }

        const response = await updateProduct(result.data, id)
        if(response?.errors) {
            response.errors.forEach(issue => toast.error(issue.message))
            return
        }

        // Passed the validation
        toast.success('Product Updated Successfully')
        redirect('/admin/products')
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md max-w-3xl mx-auto">
        <form 
            action={handleSubmit}
            className="space-y-5"
        >

            {/* ProductForm is passed by "Composition" because we're gonna use it like server component too */}
            {children}

            <input 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-800 transition text-white w-full  mt-5 p-3 uppercase font-bold cursor-pointer rounded-md"
                value={'Save Changes'}
            />
        </form>
    </div>
  )
}
