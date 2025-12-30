import Link from "next/link";

export default function Header({ categories = [] }) {
  if (!Array.isArray(categories) || categories.length === 0) return null;

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="hidden items-center justify-center gap-12 md:flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t md:hidden">
        <div className="flex gap-4 overflow-x-auto px-6 py-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-black"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
