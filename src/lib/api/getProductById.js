const BASE_URL = "https://alzaf-frontend-2025.vercel.app/api";

export async function getProductbyId(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}`);
  }

  return res.json();
}
