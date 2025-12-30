"use client";

export default function ProductError({ error, reset }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">
        Opps! Internal Server Error 🤖
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Something went wrong while loading this product
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-2xl bg-black font-semibold px-6 py-3 text-sm text-white"
      >
        Try again
      </button>
    </div>
  );
}
