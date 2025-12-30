import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <p className="mt-2 text-sm text-gray-500">
        The product you are looking for does not exist.
      </p>
      <Link
        href="/products"
        className="mt-6 rounded bg-black px-6 py-3 text-sm text-white"
      >
        Back to Products
      </Link>
    </div>
  );
}
