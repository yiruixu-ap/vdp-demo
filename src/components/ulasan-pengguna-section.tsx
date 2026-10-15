"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";

export function UlasanPenggunaSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const reviews = vehicle.userReviews;

  return (
    <section id="ulasan" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("ulasanTitle", locale)}
      </h2>

      <div className="flex flex-wrap items-end gap-4 border-b border-[#f1f5f9] pb-5">
        <div>
          <p className="font-[family-name:var(--font-poppins)] text-5xl font-extrabold text-[#0f172a]">
            {reviews.rating.toFixed(1)}
          </p>
          <p className="text-sm text-[#64748b]">
            {reviews.total} {t("ulasanBasedOn", locale)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {reviews.positive > 0 && (
            <SentimentBadge label={t("ulasanPositive", locale)} count={reviews.positive} tone="positive" />
          )}
          {reviews.neutral > 0 && (
            <SentimentBadge label={t("ulasanNeutral", locale)} count={reviews.neutral} tone="neutral" />
          )}
          {reviews.negative > 0 && (
            <SentimentBadge label={t("ulasanNegative", locale)} count={reviews.negative} tone="negative" />
          )}
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {reviews.items.map((review) => (
          <div key={review.author} className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[#0f172a]">{review.author}</p>
              <p className="text-xs text-[#94a3b8]">{review.date}</p>
            </div>
            <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-[#eff6ff] px-2 py-0.5">
              <span className="text-xs font-bold text-[#155dfc]">{review.rating.toFixed(1)}</span>
              <span className="text-[10px] font-semibold text-[#64748b]">/5</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-[#0f172a]">{review.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SentimentBadge({
  label,
  count,
  tone,
}: {
  label: string;
  count: number;
  tone: "positive" | "neutral" | "negative";
}) {
  const toneClasses = {
    positive: "bg-emerald-50 text-emerald-700",
    neutral: "bg-[#f1f5f9] text-[#64748b]",
    negative: "bg-red-50 text-red-700",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ${toneClasses[tone]}`}>
      {label}
      <span className="text-xs opacity-80">({count})</span>
    </span>
  );
}
