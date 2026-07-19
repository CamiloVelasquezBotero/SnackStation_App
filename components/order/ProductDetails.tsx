import { useStore } from "@/src/store"
import { OrderItem } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/16/solid"
import { useMemo } from "react"

type ProductDetailsProps = {
   item: OrderItem
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export default function ProductDetails({ item }: ProductDetailsProps) {
   const increaseQuantity = useStore(state => state.increaseQuantity)
   const decreaseQuantity = useStore(state => state.decreaseQuantity)
   const removeItem = useStore(state => state.removeItem)
   const disableDecreaseButton = useMemo(() => item.quantity === MIN_ITEMS, [item])
   const disableIncreaseButton = useMemo(() => item.quantity === MAX_ITEMS, [item])

   return (
      <div className="shadow-md space-y-1 p-4 bg-white  border-t border-gray-200 shadow-gray-300 rounded-md">
         <div className="space-y-4">
            <div className="flex justify-between items-start">
               <p className="text-xl font-bold">{item.name} </p>

               <button
                  type="button"
                  onClick={() => removeItem(item.id)}
               >
                  <XCircleIcon className="text-red-600 hover:text-red-700 transition h-8 w-8 cursor-pointer rounded-full shadow-md hover:shadow-slate-300 hover:scale-102" />
               </button>
            </div>
            <p className="text-2xl text-amber-500 font-black">
               {formatCurrency(item.price)}
            </p>
            <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg shadow-md shadow-gray-300">
               <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={disableDecreaseButton}
                  className="disabled:opacity-20"
               >
                  <MinusIcon className={`h-6 w-6 cursor-pointer ${disableDecreaseButton ? '' : 'hover:text-amber-500 transition'}`}/>
               </button>

               <p className="text-lg font-black ">
                  {item.quantity}
               </p>

               <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  disabled={disableIncreaseButton}
                  className="disabled:opacity-20"
               >
                  <PlusIcon className={`h-6 w-6 cursor-pointer ${disableIncreaseButton ? '' : 'hover:text-amber-500 transition'}`} />
               </button>
            </div>
            <p className="text-xl font-black text-gray-700">
               Subtotal: {''}
               <span className="font-normal">
                  {formatCurrency(item.subtotal)}
               </span>
            </p>
         </div>
      </div>
   )
}
