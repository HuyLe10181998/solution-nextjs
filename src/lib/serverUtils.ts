'use server'
import { cookies } from 'next/headers'

export const fetchWithCredentials = (
  url: string,
  options: RequestInit = {},
  body?: any,
) => {
  const token = cookies().get('access_token')?.value
  
  return fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
    body,
  })
}
