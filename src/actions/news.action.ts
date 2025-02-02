"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getNews(page = 1, limit = 10, search = "", categoryIds: number[] = []):Promise<any> {
  console.log('page', page);
  console.log('limit', limit);

  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      search,
      categoryIds: categoryIds.join(","),
    });

    const response = await fetch(`${API_URL}/api/data/blogs?${queryParams}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}

export async function getNewById(id: number) {
  try {
    const response = await fetch(`${API_URL}/api/data/blogs/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    throw new Error("Failed to fetch blog");
  }
}

export async function createNew(blogData: {
  title: string;
  description: string;
  author: string;
  categoryIds: number[];
  content: string;
  thumb: string;
}) {
  try {
    const response = await fetch(`${API_URL}/api/data/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(blogData),
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to create blog:", error);
    throw new Error("Failed to create blog");
  }
}

export async function updateNew(
  id: number,
  blogData: {
    title: string;
    description: string;
    author: string;
    categoryIds: number[];
    content: string;
    thumb: string;
    date: string;
  }
) {
  try {
    const response = await fetch(`${API_URL}/api/data/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(blogData),
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to update blog:", error);
    throw new Error("Failed to update blog");
  }
}

export async function deleteNew(id: number) {
  try {
    const response = await fetch(`${API_URL}/api/data/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Failed to delete blog:", error);
    throw new Error("Failed to delete blog");
  }
} 