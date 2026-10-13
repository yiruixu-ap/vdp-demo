"use client";

import { useLocale } from "@/hooks/use-locale";
import { useVehicle } from "@/hooks/use-vehicle";
import { t } from "@/data/translations";

/**
 * Single Q&A block. All items are expanded by default; users can still
 * collapse them manually. Everything stays in the DOM for crawlers.
 */
export function FaqSection() {
  const { locale } = useLocale();
  const vehicle = useVehicle();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: vehicle.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="rounded-xl border border-[#e2e8f0] bg-white p-5 md:p-6">
      <h2 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#0f172a]">
        {t("faqTitle", locale)}
      </h2>

      <div className="space-y-2">
        {vehicle.faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#e2e8f0] bg-white"
            open
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-base font-semibold text-[#0f172a]">
              {item.question}
              <span className="ml-2 text-[#94a3b8] transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-sm leading-relaxed text-[#64748b]">{item.answer}</div>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
