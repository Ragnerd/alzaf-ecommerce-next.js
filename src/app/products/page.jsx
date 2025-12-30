export const dynamic = "force-dynamic";

import { getProducts } from "@/lib/api/products";
import { getCategories } from "@/lib/api/categories";
import ProductGrid from "@/components/product/ProductGrid";
import ProductSort from "@/components/product/ProductSort";
import Pagination from "@/components/common/Pagination";
import ProductFilters from "@/components/product/ProductFilters";

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;

  const category =
    typeof params.category === "string" ? params.category : undefined;
  const search = typeof params.search === "string" ? params.search : undefined;

  const minPrice =
    typeof params.minPrice === "string" && params.minPrice !== ""
      ? params.minPrice
      : undefined;

  const maxPrice =
    typeof params.maxPrice === "string" && params.maxPrice !== ""
      ? params.maxPrice
      : undefined;

  const page = typeof params.page === "string" ? Number(params.page) : 1;
  const limit = typeof params.limit === "string" ? Number(params.limit) : 10;
  const sort = typeof params.sort === "string" ? params.sort : undefined;

  const response = await getProducts({
    category,
    search,
    minPrice,
    maxPrice,
    sort,
    page,
    limit,
  });

  const resCategories = await getCategories();
  const categories = resCategories?.data?.categories || [];

  const { products = [], pagination = null } = response.data;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <ProductFilters categories={categories} searchParams={params} />

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <ProductSort currentSort={sort} searchParams={params} />
      </div>

      {products.length === 0 ? (
        <p className="text-sm text-gray-500">No products found.</p>
      ) : (
        <ProductGrid products={products} />
      )}

      {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          searchParams={params}
        />
      )}
    </main>
  );
}
