"use client";

import { useEffect, useState } from "react";

export default function BannerCarousel({ banners }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!banners?.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [banners]);

  if (!banners?.length) return null;

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-lg">
      <div
        className="flex h-full transition-transform duration-1300 ease-[cubic-bezier(0.4,0,0.2,1)]
"
        style={{
          width: `${banners.length * 100}%`,
          transform: `translateX(-${current * (100 / banners.length)}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative h-full w-full flex-shrink-0"
            style={{ width: `${100 / banners.length}%` }}
          >
            {/* Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.15)), url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-10 text-white">
              <h2 className="text-4xl font-bold">{banner.title}</h2>
              <p className="mt-2 max-w-lg text-lg opacity-90">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === current ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
