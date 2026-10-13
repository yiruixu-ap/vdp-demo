"use client";

import Image from "next/image";
import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { asset } from "@/lib/asset";

export function BeritaTerkaitSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();

  if (vehicle.relatedNews.length === 0) return null;

  return (
    <section id="berita" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("beritaTitle", locale)}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {vehicle.relatedNews.map((news, idx) => (
          <article key={idx} className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
            <div className="relative h-36 w-full bg-[#f8fafc]">
              <Image src={asset(news.image)} alt={news.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#155dfc]">{news.category}</p>
              <h3 className="mt-1 font-[family-name:var(--font-poppins)] text-base font-bold text-[#0f172a]">
                {news.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-[#64748b]">{news.excerpt}</p>
              <p className="mt-2 text-xs text-[#94a3b8]">{news.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
