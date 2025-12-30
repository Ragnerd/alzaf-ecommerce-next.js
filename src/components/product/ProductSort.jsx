const SORT_OPTIONS = [
  { label: "Price ↑", value: "price-asc" },
  { label: "Price ↓", value: "price-desc" },
  { label: "Name A–Z", value: "name-asc" },
  { label: "Name Z–A", value: "name-desc" },
  { label: "Rating", value: "rating-desc" },
];

export default function ProductSort({ currentSort, searchParams = {} }) {
  const safeParams = Object.fromEntries(
    Object.entries(searchParams).filter(([, v]) => v !== undefined)
  );

  return (
    <div className="flex gap-4 text-sm">
      {SORT_OPTIONS.map((option) => {
        const params = new URLSearchParams(safeParams);
        params.set("sort", option.value);

        return (
          <a
            key={option.value}
            href={`/products?${params.toString()}`}
            className={option.value === currentSort ? "font-semibold" : ""}
          >
            {option.label}
          </a>
        );
      })}
    </div>
  );
}
