"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";

/**
 * Brand-level notes.
 *
 * This block is intentionally separate from model content: it is shared by
 * every model of the brand, so a Toyota page never has to invent its own
 * dealer-network copy, and brand copy changes in one place. Keeping it
 * visually distinct also stops same-brand pages from reading as clones.
 */
export function BrandNoteSection() {
  const { locale } = useLocale();
  const { brandInfo } = useVehicle();

  const items = [
    { label: t("brandService", locale), body: brandInfo.serviceNote },
    { label: t("brandDealer", locale), body: brandInfo.dealerNote },
    { label: t("brandResale", locale), body: brandInfo.resaleNote },
  ].filter((item) => item.body);

  if (items.length === 0) return null;

  return (
    <section id="brand" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-1 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("brandTitle", locale)}: {brandInfo.name}
      </h2>
      {brandInfo.intro && <p className="mb-4 text-sm leading-relaxed text-[#64748b]">{brandInfo.intro}</p>}

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
            <p className="text-sm font-bold text-[#0f172a]">{item.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
