import { prisma } from '../../src/lib/prisma' // The global prisma created in lib
import CategoryIcon from '../ui/CategoryIcon'
import Logo from '../ui/Logo'

async function getCategories() {
   return await prisma.category.findMany()
}

// Since this is a server component so we can convert it to "async component" in the client components we can't do it
export default async function OrderSidebar() {
   const categories = await getCategories()

   return (
      <aside className='md:w-72 md:h-screen bg-white'>
         <Logo />
         <nav className='mt-10'>
            {categories.map(category => (
               <CategoryIcon 
                  key={category.id}
                  category={category}
               />
            ))}
         </nav>
      </aside>
   )
}
