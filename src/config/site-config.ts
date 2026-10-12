/**
 * Central site configuration — variables that are the same for every vehicle.
 * Per-vehicle numbers (price, fuel consumption, service cost) live in the
 * vehicle files, not here.
 */

export const siteConfig = {
  /**
   * Generic reference fuel price used by the monthly-cost estimate.
   * Not displayed on the page.
   */
  fuelPricePerLiter: 13_500,
  /** Assumed annual mileage for the monthly-cost estimate. */
  annualMileageKm: 20_000,
  /** Assumption shown next to the comparison table's installment column. */
  compareInstallment: { dpRate: 0.2, years: 5, ratePct: 8 },
} as const;

export type SiteConfig = typeof siteConfig;
