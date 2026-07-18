"use client"
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"
import { CreateOrder } from "@/actions/create-order-action"
import { orderSchema } from "@/src/zodSchema"
import { toast } from "react-toastify"

export default function OrderSummary() {
   const order = useStore(state => state.order)
   const clearOrder = useStore(state => state.clearOrder)
   const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

   const handleCreateOrder = async (formData:FormData) => {
      const data = { 
         name: formData.get('name'), 
         total, 
         order 
      }
      
      // Validation in the Client
      const result = orderSchema.safeParse(data)
      if(!result.success) {
         return result.error.issues.forEach(issue => toast.error(issue.message))
      }
      // Validation in the Server
      const response = await CreateOrder(data)
      if(response?.errors) {
         return response.errors.forEach(issue => toast.error(issue.message))
      }

      // Notification and clean order
      toast.success('Order created successfully')
      clearOrder()
   }

   return (
      <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p-5">
         <h1 className="text-4xl text-center font-black">My Order</h1>

         {order.length === 0 ? (
            <div className="flex flex-col text-center my-10">
               <p className="text-center text-lg">The cart is empty</p>
               <p>Start by selecting {' '}<span className="text-amber-400 font-black">your order</span></p>
            </div>
         ) : (
            <div className="mt-5">
               {order.map(item => (
                  <ProductDetails
                     key={item.id}
                     item={item}
                  />
               ))}

               <p className="text-2xl mt-8 text-center">
                  Total: {' '}
                  <span className="font-bold">{formatCurrency(total)}</span>
               </p>

               <form
                  className="w-full mt-5 space-y-5"
                  action={handleCreateOrder}
               >

                  <input 
                     type="text" 
                     placeholder="Your Name"
                     className="bg-white border- border-gray-100 p-2 w-full"
                     name='name'
                  />

                  <input
                     type="submit"
                     className="py-2 rounded uppercase text-white bg-black hover:bg-gray-900 transition w-full text-center cursor-pointer font-bold"
                     value={'Confirm Order'}
                  />
               </form>
            </div>

         )}
      </aside>
   )
}
