import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group rounded-lg border p-4 transition hover:shadow-md"
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
      <div className="flex items-center justify-between">
        <p className="mt-1 text-sm font-semibold text-gray-800">
          ${product.price}
        </p>
        <p className="text-xs text-gray-500">⭐ {product.rating}</p>
      </div>
    </Link>
  );
}
