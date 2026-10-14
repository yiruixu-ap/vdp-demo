export type Locale = "id" | "en" | "fil";

/** A localized string, one entry per supported locale. */
export type Localized = Record<Locale, string>;

export interface VehicleVariant {
  name: string;
  /** New-car price in millions of rupiah. */
  priceJuta: number;
  transmission: string;
  note?: string;
}

export interface VehicleSpec {
  /** Key used to look up the plain-language explanation in params-dictionary. */
  key: string;
  label: string;
  /** Raw numeric value. The unit field decides how it is formatted at render time. */
  value: string;
  /** Optional logical group for rendering under section headings. */
  group?: "performa" | "dimensi";
  /** Optional unit used by the formatter. */
  unit?: "ps" | "kw" | "nm" | "cc" | "kml" | "l100km" | "mm" | "l" | "kg";
}

export interface UserReviewItem {
  author: string;
  date: string;
  title: string;
  sentiment: "positif" | "netral" | "negatif";
}

export interface UserReviewSummary {
  rating: number;
  total: number;
  positive: number;
  neutral: number;
  negative: number;
  items: UserReviewItem[];
}

export interface ExpertReviewSection {
  title: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedNews {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
  date: string;
}

/**
 * A single column in the comparison table.
 * `isCurrent` marks the car that owns the page — it is highlighted.
 * Every comparison value is stored as raw data and formatted at render time,
 * so nothing has to be re-typed when prices change.
 */
export interface CompareCar {
  brand: string;
  model: string;
  isCurrent?: boolean;
  priceJuta: number;
  bodyType: string;
  seats: number;
  transmission: string;
  powerPs: number;
  /** Fuel consumption in km per litre — shown in the comparison table. */
  fuelConsumptionKmPerLiter: number;
}

/**
 * Brand-level content shared by every model of the same brand.
 * Keeping it separate from model content is what stops same-brand pages
 * from being carbon copies of each other.
 */
export interface BrandInfo {
  name: string;
  /** Short brand intro reused across all the brand's model pages. */
  intro: string;
  serviceNote: string;
  dealerNote: string;
  resaleNote: string;
}

/** Everything a vehicle detail page needs to render. */
export interface VehicleDetail {
  category: "mobil" | "motor";
  brand: string;
  brandSlug: string;
  model: string;
  modelSlug: string;
  year: number;
  bodyType: string;
  seats: number;
  fuel: string;
  transmission: string;
  image: string;

  /** Single reference price for a brand-new car (per optimisation #1). */
  priceJuta: number;
  priceNote: Localized;

  variants: VehicleVariant[];
  /** Feature rows aligned to `variants` by index. */
  variantSnapshot: { feature: string; values: string[] }[];
  specs: VehicleSpec[];

  financing: {
    defaultRatePct: number;
    minRatePct: number;
    maxRatePct: number;
    stepPct: number;
    downPaymentRates: number[];
    tenorsYears: number[];
  };

  monthlyCost: {
    fuelKmPerLiter: number;
    servicePerYearJuta: number;
    insurancePerYearJuta: number;
  };

  realPrice: {
    bbnJuta: number;
    insuranceJuta: number;
    adminJuta: number;
  };

  userReviews: UserReviewSummary;
  expertReview: ExpertReviewSection[];
  faq: FaqItem[];

  compare: CompareCar[];

  relatedNews: RelatedNews[];
  seoArticle: { title: Localized; paragraphs: Localized[] };

  brandInfo: BrandInfo;
}

/**
 * A vehicle file only owns model-level content.
 * Brand-level content is attached by the registry, so a new model of an
 * existing brand never has to repeat (or drift from) the brand copy.
 */
export type VehicleSeed = Omit<VehicleDetail, "brandInfo">;
