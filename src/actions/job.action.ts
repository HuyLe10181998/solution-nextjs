'use server'

import { fetchWithCredentials } from '@/lib/serverUtils'
import { Job } from '@/models/job.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function getJobs(page = 1, limit = 10, search = '') {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      search,
    })

    const response = await fetchWithCredentials(
      `${API_URL}/api/data/jobs?${queryParams}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch jobs:', error)
    throw new Error('Failed to fetch jobs')
  }
}

export async function getJobById(id: number) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/jobs/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch job:', error)
    throw new Error('Failed to fetch job')
  }
}

export async function createJob(jobData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/job`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(jobData),
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to create job:', error)
    throw new Error('Failed to create job')
  }
}

export async function updateJob(id: number, jobData: any) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/jobs/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      JSON.stringify(jobData),
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to update job:', error)
    throw new Error('Failed to update job')
  }
}

export async function deleteJob(id: number) {
  try {
    const response = await fetchWithCredentials(
      `${API_URL}/api/data/jobs/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return await response.json()
  } catch (error) {
    console.error('Failed to delete job:', error)
    throw new Error('Failed to delete job')
  }
}
