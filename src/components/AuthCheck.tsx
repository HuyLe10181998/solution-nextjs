'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthCheck() {
  const router = useRouter()

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      router.push('/login')
    }
  }, [router])

  return null
}