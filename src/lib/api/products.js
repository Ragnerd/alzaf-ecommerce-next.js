const BASE_URL = "https://alzaf-frontend-2025.vercel.app/api";

export async function getProducts(params = {}) {
  const query = new URLSearchParams();
  if (params.category) query.append("category", params.category);
  if (params.sort) query.append("sort", params.sort);
  if (params.page) query.append("page", params.page);
  if (params.limit) query.append("limit", params.limit);
  if (params.search) query.append("search", params.search);
  if (params.minPrice) query.append("minPrice", params.minPrice);
  if (params.maxPrice) query.append("maxPrice", params.maxPrice);

  const url =
    query.toString().length > 0
      ? `${BASE_URL}/products?${query.toString()}`
      : `${BASE_URL}/products`;

  const res = await fetch(url, { cache: "no-store" });

  console.log("FETCHING PRODUCTS WITH PARAMS:", params);
  console.log("FINAL URL:", url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
