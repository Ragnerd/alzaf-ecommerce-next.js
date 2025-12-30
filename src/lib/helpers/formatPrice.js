export async function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}
