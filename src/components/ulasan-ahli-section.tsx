"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";

export function UlasanAhliSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();

  return (
    <section id="ulasan-ahli" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("ahliTitle", locale)}
      </h2>

      <div className="space-y-4">
        {vehicle.expertReview.map((section) => (
          <div key={section.title}>
            <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0f172a]">{section.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
