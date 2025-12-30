import "./globals.css";
import Header from "@/components/interface/Header";
import { getCategories } from "@/lib/api/categories";

export default async function RootLayout({ children }) {
  const response = await getCategories();
  const categories = response?.data?.categories ?? [];

  return (
    <html lang="en">
      <body>
        <Header categories={categories} />
        {children}
      </body>
    </html>
  );
}
