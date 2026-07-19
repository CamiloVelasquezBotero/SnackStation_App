"use client"
import LatestOrderItem from "@/components/order/LatestOrderItem";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import useSWR from 'swr'

export default function OrdersPage() {
    const url = '/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).catch(error => console.error(`There was an error fetching the ready orders: ${error}`))
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000, // 1m Every min will revalidate the data
        /* revalidateOnFocus: false */
    })

    if(isLoading) return <p>Loading...</p>
    if(data) return (
        <>
            <div className="flex justify-center items-center gap-10">
                <Logo />
                <h1 className="text-center mt-10 text-5xl font-black">Ready Orders</h1>
            </div>

            {data.length ? (
                <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        <LatestOrderItem 
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : (
                <p className='mt-50 text-center text-lg'>There are no ready Orders</p>
            )}
        </>
    )
}
