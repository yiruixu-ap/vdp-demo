"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { formatJuta } from "@/lib/format";

export function Sidebar() {
  const { locale } = useLocale();
  const vehicle = useVehicle();

  return (
    <aside className="space-y-4 lg:sticky lg:top-6">
      <div className="rounded-xl border border-[#e2e8f0] bg-white p-5">
        <p className="text-sm font-semibold text-[#64748b]">{t("hargaNyataOfficial", locale)}</p>
        <p className="mt-1 font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-[#0f172a]">
          {formatJuta(vehicle.priceJuta)}
        </p>
        <p className="text-xs text-[#94a3b8]">{vehicle.priceNote[locale]}</p>

        <div className="mt-4 space-y-2">
          <a
            href="#cicilan"
            className="flex h-10 items-center justify-center rounded-lg bg-[#155dfc] text-sm font-bold text-white transition hover:bg-blue-700"
          >
            {t("heroCtaPrimary", locale)}
          </a>
          <a
            href="#harga-nyata"
            className="flex h-10 items-center justify-center rounded-lg border border-[#155dfc] bg-white text-sm font-bold text-[#155dfc] transition hover:bg-blue-50"
          >
            {t("heroCtaSecondary", locale)}
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-[#e2e8f0] bg-white p-5">
        <h3 className="mb-3 font-[family-name:var(--font-poppins)] text-base font-bold text-[#0f172a]">
          {t("bandingkanTitle", locale)}
        </h3>
        <div className="space-y-2 text-sm">
          {vehicle.compare
            .filter((car) => !car.isCurrent)
            .map((car) => (
              <a
                key={`${car.brand}-${car.model}`}
                href="#bandingkan"
                className="flex items-center justify-between rounded-lg bg-[#f8fafc] px-3 py-2 hover:bg-[#f1f5f9]"
              >
                <span className="text-[#64748b]">{car.brand} {car.model}</span>
                <span className="font-semibold text-[#0f172a]">{car.bodyType}</span>
              </a>
            ))}
        </div>
      </div>
    </aside>
  );
}
