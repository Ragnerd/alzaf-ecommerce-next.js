import Link from "next/link";

export default function Header({ categories }) {
  return (
    <header className="border-b">
      <div className="flex mx-auto items-center justify-between max-w-7xl px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Store
        </Link>

        <nav className="hidden gap-6 md:flex">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="text-sm text-gray-700 hover:text-black"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <Link href="/cart" className="text-sm text-gray-700 hover:text-black">
          Cart
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t md:hidden">
        <div className="flex overflow-x-auto px-6 py-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="mr-4 whitespace-nowrap text-sm text-gray-700"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
