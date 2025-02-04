import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns";
import { twMerge } from "tailwind-merge"
import { vi } from 'date-fns/locale';
import { cookies } from "next/headers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'dd MMMM, yyyy', { locale: vi });
};

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}');
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};


