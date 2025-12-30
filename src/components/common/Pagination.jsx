export default function Pagination({
  currentPage,
  totalPages,
  searchParams = {},
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const params = new URLSearchParams(searchParams);
        params.set("page", page);

        return (
          <a
            key={page}
            href={`/products?${params.toString()}`}
            className={`rounded px-3 py-1 text-sm ${
              page === currentPage
                ? "bg-black text-white"
                : "border text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </a>
        );
      })}
    </div>
  );
}
