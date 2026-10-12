"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { explainParam } from "@/config/params-dictionary";

export function SpesifikasiSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();

  return (
    <section id="spesifikasi" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("specTitle", locale)}
      </h2>

      <div className="space-y-0">
        {vehicle.specs.map((spec) => {
          const explanation = explainParam(spec.key, locale);
          return (
            <div
              key={spec.key}
              className="grid items-center border-b border-[#f1f5f9] py-3 md:grid-cols-[minmax(0,1fr)_190px]"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#0f172a]">{spec.label}</span>
                {explanation && (
                  <span className="group relative inline-flex">
                    <span className="flex h-4 w-4 cursor-help items-center justify-center rounded-full bg-[#e2e8f0] text-[10px] font-bold text-[#64748b]">
                      ?
                    </span>
                    <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-56 -translate-x-1/2 rounded-lg border border-[#e2e8f0] bg-white p-2 text-xs text-[#64748b] shadow-lg group-hover:block">
                      {explanation}
                    </span>
                  </span>
                )}
              </div>
              <span className="mt-1 text-sm font-semibold text-[#0f172a] md:mt-0 md:text-right">{spec.value}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
