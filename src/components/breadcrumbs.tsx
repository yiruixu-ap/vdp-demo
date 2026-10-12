"use client";

import { useLocale } from "@/hooks/use-locale";
import { t } from "@/data/translations";
import Link from "next/link";

interface BreadcrumbsProps {
  brand: string;
  model: string;
}

export function Breadcrumbs({ brand, model }: BreadcrumbsProps) {
  const { locale } = useLocale();
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-[#64748b]">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link className="hover:text-[#155dfc]" href="/">{t("bcHome", locale)}</Link>
        </li>
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true">/</span>
          <Link className="hover:text-[#155dfc]" href={`/mobil/${brand.toLowerCase()}/`}>{brand}</Link>
        </li>
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-[#0f172a]">{model}</span>
        </li>
      </ol>
    </nav>
  );
}
