"use server";

import { fetchWithCredentials } from "@/lib/serverUtils";



const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getInfo(role?: string) {
  let response;
  try {
    
    if(role === 'user'){
      response = await fetch(`${API_URL}/api/data/info?role=${role}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }else{
      response = await fetchWithCredentials(`${API_URL}/api/data/info`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    if([403,401].includes(response.status)){
        return {error: 'Unauthorized'}
    }
    return await response.json();

  } catch (error) {
    console.error("Failed to fetch info:", error);
    throw new Error("Failed to fetch info");
  }
}


export async function getHeaderData(role?: string){
    const response = await fetchWithCredentials(`${API_URL}/api/data/header?role=${role || 'admin'}`,{
      headers: {
        'Content-Type': 'application/json',
      },

    });
    return await response.json();
}

export async function updateDataInfo(data: any){

    const response = await fetchWithCredentials(`${API_URL}/api/data/info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },JSON.stringify(data));
    return await response.json();
}