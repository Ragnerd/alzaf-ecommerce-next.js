const BASE_URL = "https://alzaf-frontend-2025.vercel.app/api";

export async function getProducts(params = {}) {
  const searchParams = new URLSearchParams(params).toString();

  const url = `${BASE_URL}/products${searchParams ? `?${searchParams}` : ""}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProductbyId(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, { cache: "no-store" });

  if (res.status === 404) {
    return null;
  }

  if (res.status === 500) {
    throw new Error("Server error while fetching product");
  }

  return res.json();
}
