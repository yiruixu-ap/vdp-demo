"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import {
  formatPower,
  formatFuelEconomy,
  formatLength,
  formatVolume,
  formatWeight,
} from "@/lib/format";
import type { VehicleSpec } from "@/types";

const GROUP_ORDER: { key: VehicleSpec["group"]; labelKey: string }[] = [
  { key: "performa", labelKey: "specGroupPerforma" },
  { key: "dimensi", labelKey: "specGroupDimensi" },
  { key: undefined, labelKey: "specGroupOther" },
];

function formatSpecValue(spec: VehicleSpec): string {
  if (!spec.unit) return spec.value;

  switch (spec.unit) {
    case "ps":
      return formatPower(Number(spec.value));
    case "kml":
      return formatFuelEconomy(Number(spec.value));
    case "mm":
      if (spec.value.includes("×")) return `${spec.value} mm`;
      return formatLength(Number(spec.value));
    case "l":
      return formatVolume(Number(spec.value));
    case "kg":
      return formatWeight(Number(spec.value));
    case "cc":
      return `${Number(spec.value).toLocaleString("id-ID")} cc`;
    case "nm":
      return `${Number(spec.value).toLocaleString("id-ID")} Nm`;
    default:
      return spec.value;
  }
}

export function SpesifikasiSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();

  const grouped = GROUP_ORDER.map(({ key, labelKey }) => ({
    title: t(labelKey as Parameters<typeof t>[0], locale),
    items: vehicle.specs.filter((spec) => spec.group === key),
  })).filter((group) => group.items.length > 0);

  return (
    <section id="spesifikasi" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("specTitle", locale)}
      </h2>

      <div className="space-y-6">
        {grouped.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0f172a]">
              {group.title}
            </h3>
            <div className="space-y-0">
              {group.items.map((spec) => (
                <div
                  key={spec.key}
                  className="grid items-center border-b border-[#f1f5f9] py-3 md:grid-cols-[minmax(0,1fr)_190px]"
                >
                    <span className="text-sm font-semibold text-[#0f172a]">{spec.label}</span>
                    <span className="mt-1 text-sm font-semibold text-[#0f172a] md:mt-0 md:text-right">
                      {formatSpecValue(spec)}
                    </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
