export default function ProductFilters({ categories }) {
  return (
    <form
      method="GET"
      action="/products"
      className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {/* Search */}
      <input
        name="search"
        placeholder="Search products"
        className="rounded border px-3 py-2 text-sm"
      />

      {/* Category */}
      <select name="category" className="rounded border px-3 py-2 text-sm">
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Min Price */}
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        className="rounded border px-3 py-2 text-sm"
      />

      {/* Max Price */}
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        className="rounded border px-3 py-2 text-sm"
      />

      {/* Submit */}
      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-sm text-white sm:col-span-2 lg:col-span-4"
      >
        Apply Filters
      </button>
    </form>
  );
}
