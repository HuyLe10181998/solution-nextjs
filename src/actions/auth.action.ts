"use server";
import { cookies } from 'next/headers'
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function login(username: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.token) {
      cookies().set('access_token', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      })
      return { success: true, ...data };
    }
    return { success: false, error: data.Error };
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "Failed to login" };
  }
} 