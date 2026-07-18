import { z } from 'zod'

export const orderSchema = z.object({
    name: z.string()
            .min(1, 'Your name is obligatory'),
    total: z.number().min(1, 'There are errors in the order'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})

export const OrderIdSchema = z.object({
    order_id: z.string()
                    .transform((value) => parseInt(value)) // We do a transform of the data that we got
                    .refine((value) => value > 0, {message: 'There are errors tryig to get the order_id'})
})

export const searchSchema = z.object({
    search: z.string()
                .trim()
                .min(1, {message: 'The search cannot be empty'})
})

export const productSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'The name of the product cannot be empty'}),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value)) 
        .refine((value) => value > 0, { message: 'Invalid price' })
        .or(z.number().min(1, {message: 'The price is obligatory' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value)) 
        .refine((value) => value > 0, { message: 'The category is obligatory' })
        .or(z.number().min(1, {message: 'The category is obligatory' })),
    image: z.string()
        .min(1, {message: 'The image is obligatory'})
})