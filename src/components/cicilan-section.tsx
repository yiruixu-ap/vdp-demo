"use client";

import { useState } from "react";
import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { formatJuta } from "@/lib/format";
import { monthlyInstallmentJuta } from "@/lib/finance";
import { DataSampleBadge } from "./data-sample-badge";

export function CicilanSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const { financing } = vehicle;

  // Optimisation #6: the annual rate is user-adjustable via a single slider.
  const [ratePct, setRatePct] = useState(financing.defaultRatePct);

  return (
    <section id="cicilan" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
          {t("cicilanTitle", locale)}
        </h2>
        <DataSampleBadge />
      </div>

      <div className="mb-5 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="rate-slider" className="text-sm font-semibold text-[#0f172a]">
            {t("cicilanRateLabel", locale)}
          </label>
          <span className="font-[family-name:var(--font-poppins)] text-lg font-extrabold text-[#155dfc]">
            {ratePct}%
          </span>
        </div>
        <div className="py-2">
          <input
            id="rate-slider"
            type="range"
            min={financing.minRatePct}
            max={financing.maxRatePct}
            step={financing.stepPct}
            value={ratePct}
            onChange={(e) => setRatePct(Number(e.target.value))}
            className="h-6 w-full cursor-pointer appearance-none bg-transparent accent-[#155dfc]
              [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#155dfc] [&::-webkit-slider-thumb]:shadow-sm
              [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[#e2e8f0]
              [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#155dfc] [&::-moz-range-thumb]:shadow-sm
              [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-[#e2e8f0]"
          />
        </div>
        <p className="text-xs text-[#94a3b8]">
          {t("cicilanRateHint", locale)} ({financing.minRatePct}% – {financing.maxRatePct}%)
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#e2e8f0]">
              <th className="py-3 pr-4 text-left font-semibold text-[#64748b]">{t("cicilanDpTenor", locale)}</th>
              {financing.tenorsYears.map((year) => (
                <th key={year} className="px-3 py-3 text-right font-semibold text-[#64748b]">
                  {year} {t("cicilanYears", locale)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {financing.downPaymentRates.map((dp) => (
              <tr key={dp} className="border-b border-[#f1f5f9]">
                <td className="py-3 pr-4 font-semibold text-[#0f172a]">
                  {t("cicilanDp", locale)} {Math.round(dp * 100)}%
                </td>
                {financing.tenorsYears.map((year) => (
                  <td key={year} className="px-3 py-3 text-right">
                    <span className="font-bold text-[#0f172a]">
                      {formatJuta(monthlyInstallmentJuta(vehicle.priceJuta, dp, ratePct, year))}
                    </span>
                    <span className="ml-1 text-xs text-[#94a3b8]">{t("cicilanPerMonth", locale)}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-[#64748b]">{t("cicilanDisclaimer", locale)}</p>
    </section>
  );
}
