"use client";

import { useLocale } from "@/hooks/use-locale";
import { Locale } from "@/types";
import { t } from "@/data/translations";
import Link from "next/link";

const locales: { code: Locale; label: string; short: string }[] = [
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
  { code: "en", label: "English", short: "EN" },
  { code: "fil", label: "Filipino", short: "FIL" },
];

const navItems: { key: "navMobil" | "navMotor" | "navBerita" | "navLayanan" | "navPanduan"; href: string }[] = [
  { key: "navMobil", href: "/mobil/toyota/rush" },
  { key: "navMotor", href: "/motor/" },
  { key: "navBerita", href: "/berita/" },
  { key: "navLayanan", href: "/layanan-kota/" },
  { key: "navPanduan", href: "/panduan/" },
];

export function SiteHeader() {
  const { locale, setLocale } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link className="inline-flex items-center font-[family-name:var(--font-poppins)] text-xl font-extrabold tracking-tight text-[#0f172a]" href="/">
          otochannel
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold tracking-[0.01em] text-[#64748b] md:flex">
          {navItems.map((item) => (
            <Link key={item.key} className="transition hover:text-[#155dfc]" href={item.href}>
              {t(item.key, locale)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <details className="group relative">
            <summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-3 text-sm font-semibold text-[#64748b] transition hover:border-[#cbd5e1] hover:text-[#0f172a]">
              <GlobeIcon />
              <span>{locales.find((l) => l.code === locale)?.short}</span>
            </summary>
            <div className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-lg">
              {locales.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLocale(l.code)}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition ${
                    locale === l.code ? "bg-[#f1f5f9] font-semibold text-[#0f172a]" : "text-[#64748b] hover:bg-[#f8fafc]"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <GlobeIcon />
                    {l.label}
                  </span>
                  <span className="text-xs text-[#94a3b8]">{l.short}</span>
                </button>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#94a3b8]">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
