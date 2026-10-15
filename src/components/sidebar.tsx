"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle, useSelectedVariant } from "@/hooks/use-vehicle";
import { useScrollSpy, scrollToSection } from "@/hooks/use-scroll-spy";
import { t, translations } from "@/data/translations";
import { formatJuta } from "@/lib/format";
import { useState, useCallback } from "react";

const quickLinks: { key: keyof typeof translations; href: string }[] = [
  { key: "anchorHarga", href: "#harga" },
  { key: "anchorCicilan", href: "#cicilan" },
  { key: "anchorUlasan", href: "#ulasan" },
  { key: "anchorFaq", href: "#faq" },
  { key: "anchorBandingkan", href: "#bandingkan" },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function Sidebar() {
  const { locale } = useLocale();
  const vehicle = useVehicle();
  const { variant } = useSelectedVariant();
  const spyActive = useScrollSpy(quickLinks.map((l) => l.href));
  const [clickedActive, setClickedActive] = useState<string | null>(null);
  const activeHref = clickedActive ?? spyActive;

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href, setClickedActive);
    window.setTimeout(() => setClickedActive(null), 600);
  }, []);

  return (
    <aside className="sidebar-scroll space-y-3 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
      <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
        <p className="text-sm font-semibold text-[#64748b]">{t("hargaNyataOfficial", locale)}</p>
        <p className="mt-1 font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-[#0f172a]">
          {formatJuta(variant.priceJuta)}
        </p>
        <p className="text-xs text-[#94a3b8]">{vehicle.priceNote[locale]}</p>
        <p className="mt-1 text-xs font-semibold text-[#155dfc]">{variant.name}</p>

        <div className="mt-4 space-y-2">
          <a
            href="#cicilan"
            onClick={(e) => handleClick(e, "#cicilan")}
            className="flex h-10 items-center justify-center rounded-lg bg-[#155dfc] text-sm font-bold text-white transition hover:bg-blue-700"
          >
            {t("heroCtaPrimary", locale)}
          </a>
          <a
            href="#harga-nyata"
            onClick={(e) => handleClick(e, "#harga-nyata")}
            className="flex h-10 items-center justify-center rounded-lg border border-[#155dfc] bg-white text-sm font-bold text-[#155dfc] transition hover:bg-blue-50"
          >
            {t("heroCtaSecondary", locale)}
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
        <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-sm font-bold text-[#0f172a]">
          {t("onThisPage", locale)}
        </h3>
        <div className="space-y-0.5">
          {quickLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`block rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  isActive
                    ? "bg-[#eff6ff] text-[#155dfc]"
                    : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a]"
                }`}
              >
                {t(link.key, locale)}
              </a>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
        <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-sm font-bold text-[#0f172a]">
          {t("bandingkanTitle", locale)}
        </h3>
        <div className="space-y-1.5 text-sm">
          {vehicle.compare
            .filter((car) => !car.isCurrent)
            .map((car) => {
              const content = (
                <>
                  <span className="text-[#64748b]">{car.brand} {car.model}</span>
                  <span className="font-semibold text-[#0f172a]">{car.bodyType}</span>
                </>
              );

              return car.href ? (
                <a
                  key={`${car.brand}-${car.model}`}
                  href={car.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg bg-[#f8fafc] px-3 py-2 transition hover:bg-[#eff6ff]"
                >
                  <span className="text-sm font-semibold text-[#64748b] transition group-hover:text-[#155dfc]">
                    {car.brand} {car.model}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0f172a]">
                    {car.bodyType}
                    <ArrowUpRight className="text-[#155dfc] transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              ) : (
                <div
                  key={`${car.brand}-${car.model}`}
                  className="flex items-center justify-between rounded-lg bg-[#f8fafc] px-3 py-2"
                >
                  {content}
                </div>
              );
            })}
        </div>
      </div>
    </aside>
  );
}
