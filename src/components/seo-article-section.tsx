"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";

/** Full editorial article — expanded by default (optimisation #10). */
export function SeoArticleSection() {
  const { locale } = useLocale();
  const { seoArticle } = useVehicle();

  return (
    <section className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <details className="group" open>
        <summary className="flex cursor-pointer list-none items-center justify-between font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0f172a]">
          {seoArticle.title[locale]}
          <span className="ml-2 text-[#94a3b8] transition group-open:rotate-180">⌄</span>
        </summary>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#64748b]">
          {seoArticle.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph[locale]}</p>
          ))}
        </div>
      </details>
    </section>
  );
}
