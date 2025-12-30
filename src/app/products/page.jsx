import { getProducts } from "@/lib/api/products";
import ProductGrid from "@/components/product/ProductGrid";
import ProductSort from "@/components/product/ProductSort";
import Pagination from "@/components/common/Pagination";

export default async function ProductsPage({ searchParams }) {
  const { category, sort, page = 1, limit = 10 } = searchParams;

  const response = await getProducts({
    category,
    sort,
    page,
    limit,
  });

  //   const products = response?.data?.products || response?.products || [];
  //   const pagination = response?.data?.pagination || response?.pagination || null;

  const { products = [], pagination = null } = response.data;
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <ProductSort currentSort={sort} />
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
        />
      )}
    </main>
  );
}
