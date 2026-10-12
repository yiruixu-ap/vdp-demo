"use client";

import { useLocale } from "@/hooks/use-locale";
import { t } from "@/data/translations";

export function DataSampleBadge() {
  const { locale } = useLocale();
  return (
    <span className="inline-flex items-center rounded-full bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#64748b]">
      {t("dataSample", locale)}
    </span>
  );
}
