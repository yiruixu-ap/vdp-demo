import type { BrandInfo } from "@/types";

/**
 * Brand-level content, shared by every model of the same brand.
 *
 * Why this file exists: if each model page repeated the dealer network,
 * service promise and resale note, every Toyota page would look identical.
 * Keeping brand-level copy here means:
 *   - adding a new model = only a vehicle file, no brand copy to rewrite;
 *   - editing brand copy once updates every model page.
 */
export const brands: Record<string, BrandInfo> = {
  toyota: {
    name: "Toyota",
    intro:
      "Toyota adalah merek dengan jaringan penjualan dan servis terluas di Indonesia, sehingga biaya kepemilikan jangka panjang relatif mudah diprediksi.",
    serviceNote:
      "Suku cadang tersedia luas dan bengkel resmi ada di hampir semua kota, sehingga servis rutin relatif terjangkau.",
    dealerNote:
      "Jaringan dealer resmi tersebar di seluruh Indonesia, termasuk kota kecil, memudahkan pembelian dan klaim garansi.",
    resaleNote:
      "Permintaan pasar terhadap Toyota umumnya kuat, sehingga nilai jual kembali cenderung stabil dibanding merek lain di kelasnya.",
  },
};

export function getBrand(brandSlug: string): BrandInfo | undefined {
  return brands[brandSlug.toLowerCase()];
}
