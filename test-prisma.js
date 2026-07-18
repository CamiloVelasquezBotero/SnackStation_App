const { PrismaClient } = require('./src/generated/prisma/index.js');
const prisma = new PrismaClient({});
console.log('Prisma initialized successfully!');
