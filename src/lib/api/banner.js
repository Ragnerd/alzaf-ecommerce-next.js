const BASE_URL = "https://alzaf-frontend-2025.vercel.app/api";

export async function getBanners() {
  const res = await fetch(`${BASE_URL}/banners`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch banners");
  }

  return res.json();
}
