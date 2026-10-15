"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";

export function BeritaTerkaitSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();

  if (vehicle.relatedNews.length === 0) return null;

  return (
    <section id="berita" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("beritaTitle", locale)}
      </h2>

      <div className="divide-y divide-[#f1f5f9]">
        {vehicle.relatedNews.map((news, idx) => (
          <a
            key={idx}
            href={news.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
          >
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-wide text-[#155dfc]">{news.category}</p>
              <h3 className="mt-0.5 text-sm font-semibold text-[#0f172a] transition group-hover:text-[#155dfc]">
                {news.title}
              </h3>
            </div>
            <span className="shrink-0 text-xs text-[#94a3b8]">{news.date}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
