import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductbyId } from "@/lib/api/getProductById";
import { formatPrice } from "@/lib/helpers/formatPrice";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  let response;

  try {
    response = await getProductbyId(id);
  } catch (error) {
    // product ID 1 always returns 500
    if (id === "1") {
      throw new Error("Internal Server Error");
    }

    // failure will return 404
    notFound();
  }

  const product = response?.data?.product;

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          <p className="mt-2 text-sm text-gray-500">Brand: {product.brand}</p>

          <div className="mt-4 text-xl font-bold">
            {formatPrice(product.price)}
          </div>

          <p className="mt-4 text-sm text-gray-700">{product.description}</p>

          <div className="mt-6 flex items-center gap-4 text-sm">
            <span>{product.rating}</span>
            <span
              className={product.stock > 0 ? "text-green-600" : "text-red-600"}
            >
              {product.stock > 0 ? "In stock" : "Out of stock"}
            </span>
          </div>

          <button
            disabled={product.stock === 0}
            className="mt-8 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
