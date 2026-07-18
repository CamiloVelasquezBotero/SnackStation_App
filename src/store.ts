import { create } from 'zustand'
import { OrderItem } from './types'
import { Product } from './generated/prisma'

interface Store {
    order: OrderItem[]
    addToOrder: (product:Product) => void
    increaseQuantity: (id:Product['id']) => void
    decreaseQuantity: (id:Product['id']) => void
    removeItem: (id:Product['id']) => void
    clearOrder: () => void
}

export const useStore = create<Store>((set, get) => ({
    order: [],

    addToOrder: (product) => {
        /* we get rid of what we don't need */
        const { categoryId, image, ...data } = product
        let order:OrderItem[] = []

        // Check if the product already exist in the cart to increase the quantity
        if(get().order.find(item => item.id === product.id)) {
            order = get().order.map(item => {
                if(item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        subtotal: item.price * (item.quantity + 1)
                    }
                }
                return item
            })
        } else { /* if doesn't exists in the cart */
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }

        // Set the updated order
        set((state) => ({
            order
        }))
    },

    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        subtotal: item.price * (item.quantity + 1)
                    }
                }
                return item
            })
        }))
    },

    decreaseQuantity: (id) => {
        const order = get().order.map(item => item.id === id ? {
            ...item, 
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1)
        } : item)

        set((state) => ({
            order
        }))
    },

    removeItem: (id) => {
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }))
    },

    clearOrder: () => {
        set(() => ({
            order: []
        }))
    }
}))