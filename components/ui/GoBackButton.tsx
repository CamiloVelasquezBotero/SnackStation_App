"use client"
import { useRouter } from "next/navigation";

export default function GoBackButton() {
    const router = useRouter()

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className='bg-amber-400 w-65 text-xl px-10 py-3 text-center font-bold cursor-pointer rounded-md hover:bg-amber-300 transition'
        >
            Go Back
        </button>
    )
}
