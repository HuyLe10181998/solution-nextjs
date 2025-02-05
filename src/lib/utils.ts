import { clsx, type ClassValue } from 'clsx'
import { format } from 'date-fns'
import { twMerge } from 'tailwind-merge'
import { vi } from 'date-fns/locale'
import { cookies } from 'next/headers'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'dd MMMM, yyyy', { locale: vi })
}

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}')
}

export const removeStorage = (key: string) => {
  localStorage.removeItem(key)
}
export function transformData(data: any) {
  if(!data) return [];
  return data.slice(1).map((row:any) => {
    const headers = data[0];
    const [id, email, password, ...extra] = row;
  
    return {
      id: Number(id),
      email,
      password,
      data: (headers || []).slice(3).map((label:any, index:any) => ({
        label,
        field: toCamelCase(label), // Convert to camelCase-like field names
        value: extra[index]
      }))
    };
  });
}

function toCamelCase(str: any) {
  return str
      .replace(/\s(.)/g, (match: any) => match.toUpperCase()) // Capitalize first letter after space
      .replace(/\s/g, '') // Remove spaces
      .replace(/^(.)/, (match: any) => match.toLowerCase()); // Lowercase first letter
}

