"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { siteConfig } from "@/config/site-config";
import { formatJuta } from "@/lib/format";

export function BiayaBulananSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const { monthlyCost } = vehicle;

  // All numbers come from vehicle data + site config, never hard-coded.
  const fuelMonthlyJuta =
    ((siteConfig.annualMileageKm / monthlyCost.fuelKmPerLiter) * siteConfig.fuelPricePerLiter) / 12 / 1_000_000;
  const serviceMonthlyJuta = monthlyCost.servicePerYearJuta / 12;
  const insuranceMonthlyJuta = monthlyCost.insurancePerYearJuta / 12;
  const totalJuta = fuelMonthlyJuta + serviceMonthlyJuta + insuranceMonthlyJuta;

  return (
    <section id="biaya-bulanan" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("biayaTitle", locale)}
      </h2>

      <div className="rounded-xl bg-[#f8fafc] p-5 text-center">
        <p className="text-sm font-semibold text-[#64748b]">{t("biayaTitle", locale)}</p>
        <p className="mt-1 font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-[#155dfc]">
          {formatJuta(totalJuta)}
        </p>
        <p className="mt-1 text-xs text-[#94a3b8]">{t("biayaPerMonth", locale)}</p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <CostItem label={t("biayaFuel", locale)} value={formatJuta(fuelMonthlyJuta)} />
        <CostItem label={t("biayaService", locale)} value={formatJuta(serviceMonthlyJuta)} />
        <CostItem label={t("biayaInsurance", locale)} value={formatJuta(insuranceMonthlyJuta)} />
      </div>

      <p className="mt-4 text-xs text-[#94a3b8]">{t("biayaAssumption", locale)}</p>
    </section>
  );
}

function CostItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-white p-3 text-center">
      <p className="text-xs text-[#64748b]">{label}</p>
      <p className="mt-1 font-bold text-[#0f172a]">{value}</p>
    </div>
  );
}
