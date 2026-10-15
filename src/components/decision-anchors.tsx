"use client";

import { useLocale } from "@/hooks/use-locale";
import { useScrollSpy, scrollToSection } from "@/hooks/use-scroll-spy";
import { t, translations } from "@/data/translations";
import { useState, useCallback } from "react";

/** Anchor for every section on the page (optimisation #9). */
const anchors: { key: keyof typeof translations; href: string }[] = [
  { key: "anchorHarga", href: "#harga" },
  { key: "anchorSpesifikasi", href: "#spesifikasi" },
  { key: "anchorCicilan", href: "#cicilan" },
  { key: "anchorHargaNyata", href: "#harga-nyata" },
  { key: "anchorBiayaBulanan", href: "#biaya-bulanan" },
  { key: "anchorUlasan", href: "#ulasan" },
  { key: "anchorUlasanAhli", href: "#ulasan-ahli" },
  { key: "anchorBrand", href: "#brand" },
  { key: "anchorFaq", href: "#faq" },
  { key: "anchorBandingkan", href: "#bandingkan" },
  { key: "anchorBerita", href: "#berita" },
];

export function DecisionAnchors() {
  const { locale } = useLocale();
  const spyActive = useScrollSpy(anchors.map((a) => a.href));
  const [clickedActive, setClickedActive] = useState<string | null>(null);

  const activeHref = clickedActive ?? spyActive;

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href, setClickedActive);
    // Let scroll-spy take over after smooth scrolling settles.
    window.setTimeout(() => setClickedActive(null), 600);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-16 z-40 rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-sm md:px-6"
    >
      <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
        {anchors.map((a, idx) => {
          const isActive = activeHref === a.href;
          return (
            <span key={a.key} className="inline-flex items-center">
              <a
                href={a.href}
                onClick={(e) => handleClick(e, a.href)}
                aria-current={isActive ? "true" : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#eff6ff] text-[#155dfc]"
                    : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a]"
                }`}
              >
                {t(a.key, locale)}
              </a>
              {idx < anchors.length - 1 && <span className="mx-1 text-[#cbd5e1]">·</span>}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
