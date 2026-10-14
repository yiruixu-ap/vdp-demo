"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle, useSelectedVariant } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { formatJuta } from "@/lib/format";

export function HargaNyataSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const { variant } = useSelectedVariant();
  const { realPrice } = vehicle;

  // Single on-road estimate: selected variant price + BBN-KB + insurance + admin fee.
  const onRoadJuta = variant.priceJuta + realPrice.bbnJuta + realPrice.insuranceJuta + realPrice.adminJuta;

  return (
    <section id="harga-nyata" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("hargaNyataTitle", locale)}
      </h2>

      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
          <span className="text-sm font-semibold text-[#64748b]">{t("hargaNyataOfficial", locale)}</span>
          <span className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0f172a]">
            {formatJuta(variant.priceJuta)}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-[#e2e8f0] bg-white p-4">
          <span className="text-sm font-semibold text-[#64748b]">{t("hargaNyataOnRoad", locale)}</span>
          <span className="font-[family-name:var(--font-poppins)] font-bold text-[#0f172a]">
            ~{formatJuta(onRoadJuta)}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
        {t("hargaNyataDisclaimer", locale)}
      </p>
    </section>
  );
}
