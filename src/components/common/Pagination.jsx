import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;

        return (
          <Link
            key={page}
            href={`/products?page=${page}`}
            className={`rounded px-3 py-1 text-sm ${
              page === currentPage
                ? "bg-black text-white"
                : "border text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
