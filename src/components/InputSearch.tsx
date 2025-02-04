"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Custom useDebounce hook
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default function InputSearch() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearch = useDebounce(searchTerm, 500) // 500ms delay

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        if (debouncedSearch) {
            params.set("search", debouncedSearch)
            params.set("page", "1")
            params.set("limit", "10")
        } else {
            params.delete("search")
        }
        router.push(`?${params.toString()}`)
    }, [debouncedSearch, router, searchParams])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return <input 
        type="text" 
        className="flex-1 !text-primary-text rounded-md p-2 focus:border focus:border-primary-text" 
        placeholder="Search..." 
        onChange={handleChange}
        value={searchTerm}
    />
}