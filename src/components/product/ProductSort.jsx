import Link from "next/link";

const SORT_OPTIONS = [
  { label: "Price ↑", value: "price-asc" },
  { label: "Price ↓", value: "price-desc" },
  { label: "Name A–Z", value: "name-asc" },
  { label: "Name Z–A", value: "name-desc" },
  { label: "Rating", value: "rating-desc" },
];

export default function ProductSort({ currentSort }) {
  return (
    <div className="flex gap-4 text-sm">
      {SORT_OPTIONS.map((option) => (
        <Link
          key={option.value}
          href={`/products?sort=${option.value}`}
          className={
            currentSort === option.value
              ? "font-semibold text-black"
              : "text-gray-500 hover:text-black"
          }
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}
