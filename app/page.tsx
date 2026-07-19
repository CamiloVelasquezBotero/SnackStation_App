import { redirect } from "next/navigation";

export default function Home() {
  // We don't have main page so i redirect to the category orders, and the user will can customize his order
  redirect('/order/coffee')
}
