import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductsPage() {

  return (
    <>
      <Heading>New Product</Heading>

      <AddProductForm>
        <ProductForm /> {/* we passed the "ProductForm" like "Composition" to use it in the server and don't affect it when we use  the "use client" */}
      </AddProductForm>
    </>
  )
}
