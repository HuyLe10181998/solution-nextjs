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
    const indexEmail = headers.findIndex((header:any) => header.toLowerCase().includes('email'));
    const indexPassword = headers.findIndex((header:any) => header.toLowerCase().includes('password'));
    const emailValue = row[indexEmail]
    const passwordValue = row[indexPassword]
    return {
      id: row[0],
      email: emailValue,
      password: passwordValue,
      data: (headers || [])?.map((label:any, index:any) => {
        if(label.toLowerCase().includes('email') || label.toLowerCase().includes('password')){
          return null
        }
        const labelValue = label?.split('(')
        return ({
          label :labelValue[0],
          field: labelValue[1], // Convert to camelCase-like field names
          value: row[index]
        })
      })?.filter((item:any) => Boolean(item))
    };
  });
}
export function transformJobData(data:any){
  if(!data) return [];
  const arr = data?.slice(1)?.map((row:any)=>{
    const headers = data[0];
    let obj = {}
    headers.forEach((item:any,index:number)=>{
      if(item){
         const field = (((item?.split('('))?.[1]).split(')'))[0]

         if(field){
          (obj as any)[field] = row[index]

         }

      }
    })
    return obj

   
  })
  return arr
}

function toCamelCase(str: any) {
  return str
      .replace(/\s(.)/g, (match: any) => match.toUpperCase()) // Capitalize first letter after space
      .replace(/\s/g, '') // Remove spaces
      .replace(/^(.)/, (match: any) => match.toLowerCase()); // Lowercase first letter
}
export function saveToken(token:string) {
  const expiresAt = Date.now() + 5 * 60 * 1000; 
  localStorage.setItem("auth_token", token);
  localStorage.setItem("auth_expires_at", expiresAt.toString());
}

export function removeToken() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("auth_expires_at");
}

export function getToken() {
  const token = localStorage.getItem("auth_token");
  const expiresAt = localStorage.getItem("auth_expires_at");

  if (!token || !expiresAt || Date.now() > Number(expiresAt)) {
      removeToken();
      return null; 
  }

  return token; 
}
