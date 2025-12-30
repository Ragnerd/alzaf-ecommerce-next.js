const BASE_URL = "https://alzaf-frontend-2025.vercel.app/api";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
