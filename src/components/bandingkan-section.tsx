"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { siteConfig } from "@/config/site-config";
import { formatJuta } from "@/lib/format";
import { monthlyInstallmentJuta } from "@/lib/finance";

/**
 * Rival comparison — moved to the end of the page (optimisation #8).
 * Trimmed to the fields a buyer actually compares, rendered as one compact
 * table. The installment column is derived, so it never needs manual updates.
 */
export function BandingkanSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const cars = vehicle.compare;

  if (cars.length === 0) return null;

  const { dpRate, years } = siteConfig.compareInstallment;

  const rows: { label: string; render: (car: (typeof cars)[number]) => string }[] = [
    { label: t("hargaPrice", locale), render: (car) => formatJuta(car.priceJuta) },
    { label: t("cmpTipeBody", locale), render: (car) => car.bodyType },
    { label: t("cmpKursi", locale), render: (car) => String(car.seats) },
    { label: t("hargaTransmission", locale), render: (car) => car.transmission },
    { label: t("cmpTenaga", locale), render: (car) => `${car.powerPs} PS` },
    { label: t("cmpKonsumsiBbm", locale), render: (car) => `${car.fuelConsumptionKmPerLiter} km/L` },
    {
      label: t("cmpCicilan", locale),
      render: (car) => formatJuta(monthlyInstallmentJuta(car.priceJuta, dpRate, siteConfig.compareInstallment.ratePct, years)),
    },
  ];

  return (
    <section id="bandingkan" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("bandingkanTitle", locale)}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#e2e8f0]">
              <th className="py-3 pr-4 text-left font-semibold text-[#64748b]">{t("bandingkanParam", locale)}</th>
              {cars.map((car) => (
                <th
                  key={`${car.brand}-${car.model}`}
                  className={`px-3 py-3 text-center font-semibold ${
                    car.isCurrent ? "text-[#155dfc]" : "text-[#64748b]"
                  }`}
                >
                  <span className="block">{car.brand} {car.model}</span>
                  {car.isCurrent && (
                    <span className="mt-1 inline-flex rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#155dfc]">
                      {t("bandingkanThis", locale)}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-[#f1f5f9]">
                <td className="py-3 pr-4 font-semibold text-[#0f172a]">{row.label}</td>
                {cars.map((car) => (
                  <td
                    key={`${row.label}-${car.brand}-${car.model}`}
                    className={`px-3 py-3 text-center ${
                      car.isCurrent ? "bg-blue-50/50 font-bold text-[#0f172a]" : "text-[#64748b]"
                    }`}
                  >
                    {row.render(car)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-[#94a3b8]">{t("bandingkanNote", locale)}</p>
    </section>
  );
}
