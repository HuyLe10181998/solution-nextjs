'use server'
import { cookies } from 'next/headers'
import { getSheetData } from './googleSheets'
import { revalidatePath } from 'next/cache'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function login(username: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()
    if (data.token) {
      cookies().set('access_token', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      })
      return { success: true, ...data }
    }
    return { success: false, error: data.Error }
  } catch (error) {
    console.error('Login failed:', error)
    return { error: 'Failed to login' }
  }
}

export async function getUserInfo() {
  try{
    const sheetInfo = await getSheetInfo()
    console.log("sheetInfo",sheetInfo)
    if(!sheetInfo){
      return { error: 'No sheet info' }
    }
     if(!sheetInfo?.sheetUserName || !sheetInfo?.range || !sheetInfo?.sheetId){
      return { error: 'No sheet info' }
     }
    const range = `${sheetInfo?.sheetUserName}!${sheetInfo?.range}`
    const data = await getSheetData(range,sheetInfo?.sheetId)
    return data
  }catch(error){
    console.error('Failed to get user info', error)
    return { error: 'Failed to get user info' }
  }
}
export async function getJobList(){
  try{
    const sheetInfo = await getSheetInfo()
    if(!sheetInfo){
      return { error: 'No sheet info' }
    }
     if(!sheetInfo?.sheetJobName || !sheetInfo?.range || !sheetInfo?.sheetId){
      return { error: 'No sheet info' }
     }
         const range = `${sheetInfo.sheetJobName}!A1:I`
         const data = await getSheetData(range,sheetInfo?.sheetId)

         return data
  }catch(e){
    console.error('Failed to get user infooo', e)
    // return { error: 'Failed to get user infoo' }
  }
}

export async function getSheetInfo(){
  try{
    const response = await fetch(`${API_URL}/api/data/sheet`,{
      headers:{
        'Content-Type': 'application/json',
    }
  })
  if(response.status !== 200){
    return { error: 'Failed to get sheet info' }
  }
   const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to get sheet info', error)
    return { error: 'Failed to get sheet info' }
  }
}
export async function updateSheetInfo(data: any){
  try{
    const response = await fetch(`${API_URL}/api/data/sheet`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    revalidatePath('/admin/sheet')
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Failed to update data', error)
    return { error: 'Failed to update data' }
  }


}