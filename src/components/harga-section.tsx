"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle, useSelectedVariant } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { formatJuta } from "@/lib/format";

export function HargaSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const { index: selectedIndex } = useSelectedVariant();

  return (
    <section id="harga" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-1 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("hargaSectionTitle", locale)} {vehicle.brand} {vehicle.model}
      </h2>
      <p className="mb-4 text-sm text-[#64748b]">{vehicle.priceNote[locale]}</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#e2e8f0]">
              <th className="py-3 pr-4 text-left font-semibold text-[#64748b]">{t("hargaVariant", locale)}</th>
              <th className="px-3 py-3 text-left font-semibold text-[#64748b]">{t("hargaTransmission", locale)}</th>
              <th className="px-3 py-3 text-right font-semibold text-[#64748b]">{t("hargaPrice", locale)}</th>
              <th className="px-3 py-3 text-left font-semibold text-[#64748b]">{t("hargaNote", locale)}</th>
            </tr>
          </thead>
          <tbody>
            {vehicle.variants.map((v, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <tr
                  key={v.name}
                  className={`border-b border-[#f1f5f9] ${isSelected ? "bg-blue-50/60" : ""}`}
                >
                  <td className={`py-3 pr-4 font-semibold text-[#0f172a] ${isSelected ? "border-l-2 border-l-[#155dfc] pl-3" : ""}`}>
                    {v.name}
                    {isSelected && (
                      <span className="ml-2 inline-flex items-center rounded bg-[#155dfc] px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {t("variantSelected", locale)}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-[#64748b]">{v.transmission}</td>
                  <td className="px-3 py-3 text-right font-bold text-[#0f172a]">{formatJuta(v.priceJuta)}</td>
                  <td className="px-3 py-3 text-[#64748b]">{v.note || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {vehicle.variantSnapshot.length > 0 && (
        <>
          <h3 className="mb-3 mt-6 font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0f172a]">
            {t("hargaSnapshotTitle", locale)}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="py-2 pr-4 text-left font-semibold text-[#64748b]">{t("bandingkanParam", locale)}</th>
                  {vehicle.variants.map((v, idx) => (
                    <th
                      key={v.name}
                      className={`px-2 py-2 text-center font-semibold text-[#64748b] ${
                        idx === selectedIndex ? "bg-blue-50/60 font-bold" : ""
                      }`}
                    >
                      {v.name.replace(`${vehicle.model} `, "")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vehicle.variantSnapshot.map((row) => (
                  <tr key={row.feature} className="border-b border-[#f1f5f9]">
                    <td className="py-2 pr-4 font-semibold text-[#0f172a]">{row.feature}</td>
                    {row.values.map((value, idx) => (
                      <td
                        key={idx}
                        className={`px-2 py-2 text-center ${
                          idx === selectedIndex
                            ? "bg-blue-50/60 font-semibold text-[#0f172a]"
                            : "text-[#64748b]"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
