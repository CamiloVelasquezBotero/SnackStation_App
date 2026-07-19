import { OrderWithProducts } from "@/src/types"

type LatestOrderItemProps = {
    order: OrderWithProducts
}

export default function LatestOrderItem({order}:LatestOrderItemProps) {
  return (
    <div className="bg-white  shadow-lg shadow-slate-400 hover:shadow-slate-600 transition p-5 space-y-5 rounded-lg">
        <p className="text-2xl font-bold text-slate-600">
            Cliente: {order.name}
        </p>

        <ul
            className="divide-y dividy-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500"
            role="list"
        >
            {order.orderProducts.map(product => (
                <li
                    key={product.id}
                    className="flex py-6 text-lg"
                >
                    <p>
                        <span className="font-bold">
                            ({product.quantity}) {' '}
                        </span>
                        {product.product.name}
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}
