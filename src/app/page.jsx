import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/api/products";
import { getBanner } from "@/lib/api/banner";
import BannerCarousel from "@/components/interface/bannerCarousel";
import { formatPrice } from "@/lib/helpers/formatPrice";

export default async function HomePage() {
  const response = await getProducts();
  const products = response?.data?.products ?? [];
  const featuredProducts = products.slice(0, 4);

  const bannerResponse = await getBanner();
  const banners = bannerResponse?.data?.banners ?? [];

  if (!Array.isArray(products)) {
    throw new Error("Invalid products response");
  }

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <BannerCarousel banners={banners} />
      {/* Featured Products */}
      <section className="px-6 sm:px-10 py-12">
        <div className="mb-6 flex items-center justify-left gap-4">
          <h2 className="text-lg font-semibold sm:text-xl">
            Featured Products
          </h2>
          <Link
            href="/products"
            className="text-sm text-gray-600 hover:underline"
          >
            View all
          </Link>
        </div>

        {featuredProducts.length === 0 ? (
          <p className="text-sm text-gray-500">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group rounded-lg border p-4 transition hover:shadow-md"
              >
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>

                <h3 className="text-sm font-medium">{product.title}</h3>

                <div className="mt-1 flex items-center gap-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-sm font-semibold">
                        {formatPrice(product.discountPrice)}
                      </span>
                      <span className="text-xs text-gray-500 line-through">
                        {formatPrice(product.price)}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-semibold">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
