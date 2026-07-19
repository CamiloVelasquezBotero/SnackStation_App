
export default function Heading({ children }:{children: React.ReactNode}) {
   return (
      <h1 className="text-3xl font-black my-5">
         {children}
      </h1>
   )
}
