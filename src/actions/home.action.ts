'use server'

import { fetchWithCredentials } from '@/lib/serverUtils'
import { revalidatePath } from 'next/cache'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function getHome() {
  try {
    const response = await fetch(`${API_URL}/api/data/home`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.error('Failed to get home section:', error)
    throw new Error('Failed to get home section')
  }
}
export async function updateHero(heroData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/hero`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(heroData),
    )
    revalidatePath('/admin/home/hero')
    return await response.json()
  } catch (error) {
    console.error('Failed to update hero section:', error)
    throw new Error('Failed to update hero section')
  }
}

export async function getHero() {
  try {
    const response = await fetchWithCredentials(`${API_URL}/api/data/hero`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.error('Failed to get hero section:', error)
    throw new Error('Failed to get hero section')
  }
}

export async function updateTeam(teamData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/team`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(teamData),
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to update team section:', error)
    throw new Error('Failed to update team section')
  }
}
export async function getTeam() {
  try {
    const response = await fetchWithCredentials(`${API_URL}/api/data/team`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.error('Failed to get team section:', error)
    throw new Error('Failed to get team section')
  }
}

export async function updateAbout(aboutData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/about`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(aboutData),
    )
    revalidatePath('/admin/home/about')
    return await response.json()
  } catch (error) {
    console.error('Failed to update about section:', error)
    throw new Error('Failed to update about section')
  }
}
export async function getAbout() {
  try {
    const response = await fetchWithCredentials(`${API_URL}/api/data/about`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.error('Failed to get about section:', error)
    throw new Error('Failed to get about section')
  }
}
export async function updateService(serviceData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/service`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(serviceData),
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to update service section:', error)
    throw new Error('Failed to update service section')
  }
}
export async function getService() {
  try {
    const response = await fetchWithCredentials(`${API_URL}/api/data/service`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.error('Failed to get service section:', error)
    // throw new Error("Failed to get service section");
  }
}
export async function updateTestimonial(testimonialData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/testimonial`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(testimonialData),
    )
    revalidatePath('/admin/home/testimonial')
    return await response.json()
  } catch (error) {
    console.error('Failed to update testimonial section:', error)
    throw new Error('Failed to update testimonial section')
  }
}
export async function getTestimonial() {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/testimonial`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to get testimonial section:', error)
    throw new Error('Failed to get testimonial section')
  }
}
