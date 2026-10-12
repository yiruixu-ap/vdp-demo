/**
 * Financing maths. Kept in one place so the installment table, the hero CTA
 * and the comparison table always agree — and so changing the formula never
 * means touching a component.
 */

/**
 * Flat annuity installment.
 * @param priceJuta   car price in millions of rupiah
 * @param dpRate      down-payment ratio, e.g. 0.2
 * @param ratePct     annual interest rate in percent, e.g. 8
 * @param years       tenor in years
 * @returns monthly installment in millions of rupiah
 */
export function monthlyInstallmentJuta(
  priceJuta: number,
  dpRate: number,
  ratePct: number,
  years: number,
): number {
  const principal = priceJuta * 1_000_000 * (1 - dpRate);
  const months = years * 12;
  const monthlyRate = ratePct / 100 / 12;

  if (monthlyRate === 0) {
    return round1(principal / months / 1_000_000);
  }

  const growth = Math.pow(1 + monthlyRate, months);
  const installment = (principal * monthlyRate * growth) / (growth - 1);
  return round1(installment / 1_000_000);
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}
