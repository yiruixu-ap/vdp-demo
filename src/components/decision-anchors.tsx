"use client";

import { useLocale } from "@/hooks/use-locale";
import { t, translations } from "@/data/translations";

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
  { key: "anchorBerita", href: "#berita" },
  { key: "anchorBandingkan", href: "#bandingkan" },
];

export function DecisionAnchors() {
  const { locale } = useLocale();
  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-16 z-40 rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-sm md:px-6"
    >
      <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
        {anchors.map((a, idx) => (
          <span key={a.key} className="inline-flex items-center">
            <a
              href={a.href}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold text-[#64748b] transition hover:bg-[#f1f5f9] hover:text-[#0f172a]"
            >
              {t(a.key, locale)}
            </a>
            {idx < anchors.length - 1 && <span className="mx-1 text-[#cbd5e1]">·</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
