'use server'

import { fetchWithCredentials } from '@/lib/serverUtils'
import { revalidatePath } from 'next/cache'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function getNews(
  page = 1,
  limit = 10,
  search = '',
  categoryIds: number[] = [],
): Promise<any> {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      search,
      categoryIds: categoryIds.join(','),
    })
     
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/blogs?${queryParams}`,
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch blogs:', error)
    throw new Error('Failed to fetch blogs')
  }
}

export async function getPopularNews() {
  try {
    const response = await fetch(
      `${API_URL}/api/data/blogs/popular`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch popular blogs:', error)
    throw new Error('Failed to fetch popular blogs')
  }
}

export async function getNewById(id: number) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/blogs/${id}`,
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch blog:', error)
    throw new Error('Failed to fetch blog')
  }
}

export async function createNew(blogData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/blogs`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(blogData),
    )
    revalidatePath(`/admin/news`)
    return await response.json()
  } catch (error) {
    console.error('Failed to create blog:', error)
    throw new Error('Failed to create blog')
  }
}

export async function updateNew(id: number, blogData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/blogs/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(blogData),
    )
    revalidatePath(`/admin/news/edit/${id}`)
    return await response.json()
  } catch (error) {
    console.error('Failed to update blog:', error)
    throw new Error('Failed to update blog')
  }
}

export async function deleteNew(id: number) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/blogs/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    revalidatePath(`/admin/news`)
    return await response.json()
  } catch (error) {
    console.error('Failed to delete blog:', error)
    throw new Error('Failed to delete blog')
  }
}
