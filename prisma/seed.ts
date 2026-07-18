import { categories } from './data/categories'
import { products } from './data/product' // take from the compiled files already created
import { PrismaClient } from '../src/generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'

// Create the adapte to PostgreSQL
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
// Create the instance of prisma passing it the adapter
const prisma = new PrismaClient({ adapter })

async function main() {
    try {
        await prisma.category.createMany({
            data: categories
        })
        await prisma.product.createMany({
            data: products
        })
        console.log('Seed executed sucessfully')
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect() // Disconnect prisma
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1) // Stop the full script
    })