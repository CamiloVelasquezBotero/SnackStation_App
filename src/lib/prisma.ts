import { PrismaClient } from '@/src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

// we create the adapter first to pass it to the PrismaConfig
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ['query'],
  })
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma