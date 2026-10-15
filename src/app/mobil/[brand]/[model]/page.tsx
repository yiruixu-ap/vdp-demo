import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroSection } from "@/components/hero-section";
import { DecisionAnchors } from "@/components/decision-anchors";
import { Sidebar } from "@/components/sidebar";
import { HargaSection } from "@/components/harga-section";
import { SpesifikasiSection } from "@/components/spesifikasi-section";
import { CicilanSection } from "@/components/cicilan-section";
import { HargaNyataSection } from "@/components/harga-nyata-section";
import { BiayaBulananSection } from "@/components/biaya-bulanan-section";
import { UlasanPenggunaSection } from "@/components/ulasan-pengguna-section";
import { UlasanAhliSection } from "@/components/ulasan-ahli-section";
import { BrandNoteSection } from "@/components/brand-note-section";
import { FaqSection } from "@/components/faq-section";
import { BeritaTerkaitSection } from "@/components/berita-terkait-section";
import { SeoArticleSection } from "@/components/seo-article-section";
import { BandingkanSection } from "@/components/bandingkan-section";
import { VehicleProvider } from "@/hooks/use-vehicle";
import { getVehicleDetail, allVehicles } from "@/data/vehicles";

export function generateStaticParams() {
  return allVehicles.map((v) => ({ brand: v.brandSlug, model: v.modelSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string; model: string }> }) {
  const { brand, model } = await params;
  const vehicle = getVehicleDetail(brand, model);
  if (!vehicle) return {};
  const canonical = `/mobil/${brand}/${model}`;
  return {
    title: `${vehicle.brand} ${vehicle.model} ${vehicle.year} - Harga Baru, Cicilan & Ulasan | otochannel`,
    description: `Detail ${vehicle.brand} ${vehicle.model} ${vehicle.year}: harga mobil baru, varian, cicilan, biaya bulanan, spesifikasi, ulasan pengguna & ahli.`,
    alternates: {
      languages: {
        "id-ID": canonical,
        "en": `${canonical}?lang=en`,
        "fil-PH": `${canonical}?lang=fil`,
        "x-default": canonical,
      },
    },
  };
}

/**
 * Generic vehicle detail page. Every vehicle registered in
 * `src/data/vehicles` renders through this same component tree — adding a
 * model never means creating a new page.
 */
export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand, model } = await params;
  const vehicle = getVehicleDetail(brand, model);
  if (!vehicle) notFound();

  return (
    <VehicleProvider vehicle={vehicle}>
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6">
        <Breadcrumbs brand={vehicle.brand} model={vehicle.model} />

        <div className="space-y-6">
          {/* Decision-first hero */}
          <HeroSection />

          {/* Section navigation */}
          <DecisionAnchors />

          {/* Main two-column layout */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            {/* Left: main content */}
            <div className="space-y-6">
              {/* 1. Price — the first thing a buyer looks for */}
              <HargaSection />

              {/* 2. Specs & features — right after price */}
              <SpesifikasiSection />

              {/* 3. Financing */}
              <CicilanSection />
              <HargaNyataSection />
              <BiayaBulananSection />

              {/* 4. What owners say */}
              <UlasanPenggunaSection />
              <UlasanAhliSection />

              {/* 5. Brand-level notes (shared across the brand's models) */}
              <BrandNoteSection />

              {/* 6. Q&A — FAQ and quick answers merged into one block */}
              <FaqSection />

              {/* 7. Editorial, fully expanded by default */}
              <SeoArticleSection />

              {/* 8. Rivals — always last */}
              <BandingkanSection />

              {/* 9. Related news — after rivals */}
              <BeritaTerkaitSection />
            </div>

            {/* Right: sticky sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>

      <SiteFooter />
    </VehicleProvider>
  );
}
