"use server";

import { fetchWithCredentials } from "@/lib/serverUtils";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function uploadImage(file: FormData) {
  try {
   

    const response = await fetchWithCredentials(`${API_URL}/api/upload`, {
      method: "POST",
    },file);
    return await response.json();
  } catch (error) {
    console.error("Failed to upload image:", error);
    throw new Error("Failed to upload image");
  }
} 