# Alzaf Frontend Assignment – E-Commerce (Next.js)

This project is a server-side rendered e-commerce frontend built using **Next.js App Router**, developed as part of the **Frontend Developer Task for Alzaf IT**.

The goal was to strictly follow the provided API contract, demonstrate strong SSR fundamentals, and implement clean, scalable frontend architecture.

---

## 🔗 Live Demo
👉 [https://YOUR-DEPLOYMENT-URL.vercel.app](https://alzaf-ecommerce-next-js.vercel.app/)

## 🔗 GitHub Repository
👉 [Github repo link](https://github.com/Ragnerd/alzaf-ecommerce-next.js/)

---

## ✅ Implemented Features

### Mandatory Requirements
- ✅ **Homepage**
  - Banner carousel (SSR)
  - Featured products grid (max 4 per row on large screens)
- ✅ **Products Listing Page**
  - Server-side data fetching
  - Category filtering
  - Price range filtering (min / max)
  - Search (name, description, brand)
  - Sorting (price, name, rating)
  - Pagination
- ✅ **Product Details Page**
  - Server-side fetch via `/products/{id}`
- ✅ **Header with category navigation**

---

### Optional / Bonus Implementations
- ✅ **Graceful 500 error handling**
  - Product ID `1` intentionally triggers a server error and is handled properly
- ✅ **404 handling**
  - Invalid product routes display a not-found page
- ✅ **Fully responsive**
- ✅ **Clean separation of concerns**
  - API layer (`lib/api`)
  - UI components
  - Page-level SSR

---

## 🧠 Technical Decisions

- **SSR First**: All data fetching is server-side using the App Router.
- **No client-side fetching hacks**: Query params drive UI state.
- **Dynamic rendering** where necessary to avoid stale data.
- **Scalable project structure** suitable for real production use.

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- API-driven architecture (no mock data)

---

## 🚀 Getting Started (Local)

```bash
npm install
npm run dev


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
