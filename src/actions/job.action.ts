"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getJobs(page = 1, limit = 10, search = "") {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      search,
    });

    const response = await fetch(`${API_URL}/api/data/jobs?${queryParams}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    throw new Error("Failed to fetch jobs");
  }
}

export async function getJobById(id: number) {
  try {
    const response = await fetch(`${API_URL}/api/data/jobs/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch job:", error);
    throw new Error("Failed to fetch job");
  }
}

export async function createJob(jobData: {
  place: string;
  benefit: string;
  jobDescription: string;
  salary: string;
  company: string;
  salaryVND: string;
  estimatedFilingDate: string;
  note?: string;
  signature?: string;
  spot: string;
}) {
  try {
    const response = await fetch(`${API_URL}/api/data/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(jobData),
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to create job:", error);
    throw new Error("Failed to create job");
  }
}

export async function updateJob(id: number, jobData: any) {
  try {
    const response = await fetch(`${API_URL}/api/data/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(jobData),
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to update job:", error);
    throw new Error("Failed to update job");
  }
}

export async function deleteJob(id: number) {
  try {
    const response = await fetch(`${API_URL}/api/data/jobs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to delete job:", error);
    throw new Error("Failed to delete job");
  }
} 