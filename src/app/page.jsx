import { getProducts } from "@/lib/api/products";
import { getBanners } from "@/lib/api/banner";
import BannerCarousel from "@/components/interface/bannerCarousel";
import ProductGrid from "@/components/product/ProductGrid";
import Link from "next/link";

export default async function HomePage() {
  const response = await getProducts({ page: 1, limit: 8 });
  const products = response?.data?.products ?? [];

  const bannerResponse = await getBanners();
  const banners = bannerResponse?.data?.banners ?? [];

  if (!Array.isArray(products)) {
    throw new Error("Invalid products response");
  }

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <BannerCarousel banners={banners} />
      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Products</h2>

          <Link
            href="/products"
            className="text-sm text-white font-semibold cursor-pointer px-4 py-2 rounded-2xl bg-black "
          >
            View all
          </Link>
        </div>

        {products.length === 0 ? (
          <p className="text-sm text-gray-500">No products available.</p>
        ) : (
          <ProductGrid products={products.slice(0, 4)} />
        )}
      </section>
    </main>
  );
}
