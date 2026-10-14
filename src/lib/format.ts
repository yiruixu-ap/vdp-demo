/**
 * All vehicle-page money and unit formatting lives here so no component hard-codes
 * a currency pattern or a unit string.
 */

/** Format a value already expressed in millions of rupiah, e.g. 282 -> "Rp 282 Juta". */
export function formatJuta(valueJuta: number): string {
  const rounded = Math.round(valueJuta * 10) / 10;
  const text = Number.isInteger(rounded)
    ? String(rounded)
    : rounded.toFixed(1).replace(".", ",");
  return `Rp ${text} Juta`;
}

/** Format a plain rupiah amount, e.g. 13500 -> "Rp 13.500". */
export function formatRupiah(value: number): string {
  return `Rp ${Math.round(value).toLocaleString("id-ID")}`;
}

/** Format power: PS with kW equivalent. */
export function formatPower(ps: number): string {
  const kw = Math.round(ps * 0.73549875);
  return `${ps} PS (${kw} kW)`;
}

/** Format fuel economy: km/L with L/100km equivalent. */
export function formatFuelEconomy(kmPerLiter: number): string {
  const lPer100km = (100 / kmPerLiter).toFixed(1).replace(".", ",");
  return `${kmPerLiter} km/L (${lPer100km} L/100km)`;
}

/** Format a millimetre length with Indonesian thousands separator. */
export function formatLength(mm: number): string {
  return `${mm.toLocaleString("id-ID")} mm`;
}

/** Format a litre volume with Indonesian thousands separator. */
export function formatVolume(l: number): string {
  return `${l.toLocaleString("id-ID")} L`;
}

/** Format a kilogram weight with Indonesian thousands separator. */
export function formatWeight(kg: number): string {
  return `${kg.toLocaleString("id-ID")} kg`;
}
