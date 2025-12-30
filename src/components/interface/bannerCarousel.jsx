import Image from "next/image";
import Link from "next/link";

export default function BannerCarousel({ banners }) {
  if (!Array.isArray(banners) || banners.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth">
        {banners.map((banner, index) => (
          <div
            key={banner.id || index}
            className="relative h-[90vh] w-full shrink-0 snap-start"
          >
            <Image
              src={banner.image}
              alt={banner.title || "Banner"}
              fill
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-center px-6 sm:px-10">
              <div className="max-w-xl text-white">
                {banner.title && (
                  <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    {banner.title}
                  </h1>
                )}

                {banner.subtitle && (
                  <p className="mt-4 text-sm sm:text-base">{banner.subtitle}</p>
                )}

                {banner.link && (
                  <Link
                    href={banner.link}
                    className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100"
                  >
                    Shop Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <span key={index} className="h-2 w-2 rounded-full bg-white/70" />
        ))}
      </div>
    </section>
  );
}
