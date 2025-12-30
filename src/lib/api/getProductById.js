import { getProducts } from "./products.js";

export async function getProductById(id) {
  const products = await getProducts();
  return products.find((product) => product.id === id) || null;
}
