const BASE_URL = "https://alzaf-frontend-2025.vercel.app/api";

export async function getBanner() {
  const res = await fetch(
    `https://alzaf-frontend-2025.vercel.app/api/banners`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch banner");
  }

  return res.json();
}
