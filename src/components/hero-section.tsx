"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/hooks/use-locale";
import { useVehicle, useSelectedVariant } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";
import { formatJuta } from "@/lib/format";
import { asset } from "@/lib/asset";

export function HeroSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const { variant, index, setIndex } = useSelectedVariant();
  const [saved, setSaved] = useState(false);

  return (
    <section className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <div className="grid gap-6 md:grid-cols-5">
        {/* Left: a single hero image (optimisation #2) */}
        <div className="md:col-span-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
            <Image
              src={asset(vehicle.image)}
              alt={`${vehicle.brand} ${vehicle.model}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: decision info */}
        <div className="md:col-span-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#64748b]">
                <span>{vehicle.bodyType}</span>
                <span>·</span>
                <span>{vehicle.seats} {t("cmpKursi", locale).toLowerCase()}</span>
                <span>·</span>
                <span>{vehicle.fuel}</span>
              </div>
              <h1 className="mt-1 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-[#0f172a]">
                {vehicle.brand} {vehicle.model} {vehicle.year}
              </h1>
            </div>

            {/* Save button replacing the old "+ Compare" (optimisation #4) */}
            <button
              type="button"
              onClick={() => setSaved((v) => !v)}
              aria-pressed={saved}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                saved
                  ? "border-[#155dfc] bg-blue-50 text-[#155dfc]"
                  : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#155dfc] hover:text-[#155dfc]"
              }`}
            >
              <BookmarkIcon filled={saved} />
              {saved ? t("heroSaved", locale) : t("heroSave", locale)}
            </button>
          </div>

          <div className="mt-5">
            <p className="text-sm text-[#64748b]">{vehicle.priceNote[locale]}</p>
            <p className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-[#0f172a]">
              {formatJuta(variant.priceJuta)}
            </p>
            <p className="text-sm font-semibold text-[#155dfc]">{variant.name}</p>
          </div>

          <div className="mt-4 max-w-sm">
            <label className="mb-1.5 block text-sm font-semibold text-[#0f172a]">
              {t("heroVariantLabel", locale)}
            </label>
            <select
              value={index}
              onChange={(e) => setIndex(Number(e.target.value))}
              className="h-11 w-full rounded-lg border border-[#e2e8f0] bg-white px-3 text-sm text-[#0f172a] outline-none focus:border-[#155dfc]"
            >
              {vehicle.variants.map((v, idx) => (
                <option key={v.name} value={idx}>
                  {v.name} — {formatJuta(v.priceJuta)}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Chip text={vehicle.specs.find((s) => s.key === "Mesin")?.value ?? ""} />
            <Chip text={variant.transmission} />
            <Chip text={`${vehicle.seats} ${t("cmpKursi", locale).toLowerCase()}`} />
            <Chip text={vehicle.bodyType} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#cicilan"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#155dfc] px-6 text-base font-bold text-white transition hover:bg-blue-700"
            >
              {t("heroCtaPrimary", locale)}
            </a>
            <a
              href="#harga-nyata"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[#155dfc] bg-white px-6 text-base font-bold text-[#155dfc] transition hover:bg-blue-50"
            >
              {t("heroCtaSecondary", locale)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ text }: { text: string }) {
  if (!text) return null;
  return (
    <span className="inline-flex items-center rounded-full bg-[#f1f5f9] px-3 py-1 text-sm font-semibold text-[#64748b]">
      {text}
    </span>
  );
}

function BookmarkIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}
