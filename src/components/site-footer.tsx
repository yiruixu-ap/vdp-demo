"use client";

import { useLocale } from "@/hooks/use-locale";
import { t } from "@/data/translations";
import Link from "next/link";

export function SiteFooter() {
  const { locale } = useLocale();

  return (
    <footer className="mt-16 border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-[family-name:var(--font-poppins)] text-xl font-extrabold tracking-tight text-[#0f172a]">
              otochannel
            </div>
            <p className="mt-2 text-sm text-[#64748b]">{t("footerDesc", locale)}</p>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold text-[#0f172a]">{t("footerCategory", locale)}</div>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li><Link className="hover:text-[#155dfc]" href="/mobil/">{t("navMobil", locale)}</Link></li>
              <li><Link className="hover:text-[#155dfc]" href="/motor/">{t("navMotor", locale)}</Link></li>
              <li><Link className="hover:text-[#155dfc]" href="/berita/">{t("navBerita", locale)}</Link></li>
              <li><Link className="hover:text-[#155dfc]" href="/layanan-kota/">{t("navLayanan", locale)}</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold text-[#0f172a]">{t("footerLegal", locale)}</div>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li><Link className="hover:text-[#155dfc]" href="/tentang-kami/">{t("footerAbout", locale)}</Link></li>
              <li><Link className="hover:text-[#155dfc]" href="/kebijakan-privasi/">{t("footerPrivacy", locale)}</Link></li>
              <li><Link className="hover:text-[#155dfc]" href="/disclaimer/">{t("footerDisclaimer", locale)}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
