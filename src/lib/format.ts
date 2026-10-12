/**
 * All vehicle-page money formatting lives here so no component hard-codes
 * a currency pattern.
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
