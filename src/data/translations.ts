import { Locale } from "@/types";

export const translations: Record<string, Record<Locale, string>> = {
  // Navigation
  navMobil: { id: "Mobil", en: "Cars", fil: "Kotse" },
  navMotor: { id: "Motor", en: "Bikes", fil: "Motor" },
  navBerita: { id: "Berita", en: "News", fil: "Balita" },
  navLayanan: { id: "Layanan Kota", en: "City Services", fil: "Serbisyo" },
  navPanduan: { id: "Panduan", en: "Guides", fil: "Gabay" },

  // Breadcrumb
  bcHome: { id: "Beranda", en: "Home", fil: "Home" },

  // Hero
  heroSave: { id: "Simpan", en: "Save", fil: "I-save" },
  heroSaved: { id: "Tersimpan", en: "Saved", fil: "Nai-save" },
  heroVariantLabel: { id: "Pilih varian", en: "Choose variant", fil: "Pumili ng variant" },
  heroCtaPrimary: { id: "Hitung cicilan", en: "Calculate installment", fil: "Kalkulahin hulog" },
  heroCtaSecondary: { id: "Lihat harga nyata", en: "See real price", fil: "Tingnan totoong presyo" },

  // Decision anchor strip (optimisation #9 — covers every section)
  anchorHarga: { id: "Harga", en: "Price", fil: "Presyo" },
  anchorSpesifikasi: { id: "Spesifikasi", en: "Specs", fil: "Espesipikasyon" },
  anchorCicilan: { id: "Cicilan", en: "Installment", fil: "Hulog" },
  anchorHargaNyata: { id: "Harga nyata", en: "Real price", fil: "Tunay na presyo" },
  anchorBiayaBulanan: { id: "Biaya bulanan", en: "Monthly cost", fil: "Buwanang gastos" },
  anchorUlasan: { id: "Ulasan", en: "Reviews", fil: "Review" },
  anchorFaq: { id: "Tanya jawab", en: "Q&A", fil: "Tanong-sagot" },
  anchorUlasanAhli: { id: "Ulasan ahli", en: "Expert review", fil: "Review ng eksperto" },
  anchorBrand: { id: "Catatan merek", en: "Brand notes", fil: "Tala ng brand" },
  anchorBerita: { id: "Berita", en: "News", fil: "Balita" },
  anchorBandingkan: { id: "Pesaing", en: "Rivals", fil: "Kalaban" },

  // Cicilan
  cicilanTitle: { id: "Cicilan per Bulan", en: "Monthly Installment", fil: "Buwanang Hulog" },
  cicilanRateLabel: { id: "Suku bunga tahunan", en: "Annual interest rate", fil: "Taunang interes" },
  cicilanRateHint: { id: "Geser untuk mengubah suku bunga", en: "Drag to change the rate", fil: "I-drag para baguhin ang rate" },
  cicilanDisclaimer: {
    id: "Estimasi. Konfirmasi ke dealer.",
    en: "Estimate. Confirm with dealer.",
    fil: "Tantiya. Kumpirmahin sa dealer.",
  },
  cicilanDp: { id: "DP", en: "DP", fil: "DP" },
  cicilanYears: { id: "tahun", en: "years", fil: "taon" },
  cicilanDpTenor: { id: "DP / Tenor", en: "DP / Tenor", fil: "DP / Tenor" },
  cicilanPerMonth: { id: "/ bulan", en: "/ month", fil: "/ buwan" },

  // Harga Nyata
  hargaNyataTitle: { id: "Harga Nyata", en: "Real Price Reference", fil: "Tunay na Presyo" },
  hargaNyataOfficial: { id: "Harga mobil baru", en: "New car price", fil: "Presyo ng bagong kotse" },
  hargaNyataOnRoad: { id: "Estimasi on-road", en: "Estimated on-road", fil: "Tinantiyang on-road" },
  hargaNyataDisclaimer: {
    id: "Harga resmi OTR Jakarta. Diskon dan promo bervariasi tergantung dealer dan waktu.",
    en: "Official OTR Jakarta price. Discounts and promos vary by dealer and time.",
    fil: "Opisyal na presyo OTR Jakarta. Ang mga diskwento at promo ay nag-iiba ayon sa dealer at oras.",
  },

  // Harga variants
  hargaSectionTitle: { id: "Harga", en: "Price", fil: "Presyo" },
  hargaVariant: { id: "Varian", en: "Variant", fil: "Variant" },
  hargaPrice: { id: "Harga", en: "Price", fil: "Presyo" },
  hargaTransmission: { id: "Transmisi", en: "Transmission", fil: "Transmisyon" },
  hargaNote: { id: "Catatan", en: "Note", fil: "Tala" },
  hargaSnapshotTitle: { id: "Perbedaan Varian", en: "Variant Differences", fil: "Pagkakaiba ng Variant" },

  // Spesifikasi
  specTitle: { id: "Spesifikasi & Fitur", en: "Specifications & Features", fil: "Mga Espesipikasyon" },

  // Bandingkan (moved to the end, trimmed to key fields)
  bandingkanTitle: { id: "Bandingkan dengan Pesaing", en: "Compare with Rivals", fil: "Ihambing sa Kalaban" },
  bandingkanParam: { id: "Parameter", en: "Parameter", fil: "Parameter" },
  bandingkanThis: { id: "Model ini", en: "This model", fil: "Modelong ito" },
  cmpTipeBody: { id: "Tipe Body", en: "Body type", fil: "Uri ng katawan" },
  cmpKursi: { id: "Kursi", en: "Seats", fil: "Upuan" },
  cmpTenaga: { id: "Tenaga", en: "Power", fil: "Lakas" },
  cmpKonsumsiBbm: { id: "Konsumsi BBM", en: "Fuel consumption", fil: "Konsumo ng gasolina" },
  cmpCicilan: { id: "Cicilan est.", en: "Est. installment", fil: "Tantiyang hulog" },
  bandingkanNote: {
    id: "Estimasi cicilan: DP 20%, tenor 5 tahun, bunga 8%/tahun.",
    en: "Installment estimate: 20% DP, 5-year tenor, 8%/year.",
    fil: "Tantiyang hulog: 20% DP, 5-taong tenor, 8%/taon.",
  },

  // Biaya Bulanan
  biayaTitle: { id: "Biaya Bulanan", en: "Monthly Cost", fil: "Buwanang Gastos" },
  biayaFuel: { id: "Bensin", en: "Fuel", fil: "Gasolina" },
  biayaService: { id: "Servis", en: "Service", fil: "Serbisyo" },
  biayaInsurance: { id: "Asuransi", en: "Insurance", fil: "Seguro" },
  biayaPerMonth: { id: "/ bulan", en: "/ month", fil: "/ buwan" },
  biayaAssumption: {
    id: "Estimasi berdasarkan konsumsi BBM resmi, jarak tempuh tahunan, dan harga BBM rata-rata (referensi).",
    en: "Estimate based on official fuel consumption, annual mileage, and average fuel price (reference).",
    fil: "Tantiyang batay sa opisyal na konsumo ng gasolina, taunang distansya, at karaniwang presyo ng gasolina (reference).",
  },

  // Ulasan
  ulasanTitle: { id: "Ulasan Pengguna", en: "User Reviews", fil: "Mga Review ng User" },
  ulasanBasedOn: { id: "ulasan pengguna", en: "user reviews", fil: "review ng user" },
  ulasanPositive: { id: "Positif", en: "Positive", fil: "Positibo" },
  ulasanNeutral: { id: "Netral", en: "Neutral", fil: "Neutral" },
  ulasanNegative: { id: "Negatif", en: "Negative", fil: "Negatibo" },

  // Ahli
  ahliTitle: { id: "Ulasan Ahli", en: "Expert Review", fil: "Review ng Eksperto" },

  // Brand note (brand-level content, shared across a brand's models)
  brandTitle: { id: "Catatan Merek", en: "Brand Notes", fil: "Tala ng Brand" },
  brandService: { id: "Servis & suku cadang", en: "Service & parts", fil: "Serbisyo at piyesa" },
  brandDealer: { id: "Jaringan dealer", en: "Dealer network", fil: "Network ng dealer" },
  brandResale: { id: "Nilai jual kembali", en: "Resale value", fil: "Resale value" },

  // FAQ (merged Q&A block)
  faqTitle: { id: "Pertanyaan Umum", en: "Questions & Answers", fil: "Mga Tanong at Sagot" },

  // Berita
  beritaTitle: { id: "Berita Terkait", en: "Related News", fil: "Kaugnay na Balita" },

  // Footer
  footerDesc: {
    id: "Portal otomotif Indonesia: mobil, motor, berita, dan layanan kota.",
    en: "Indonesian automotive portal: cars, bikes, news, and city services.",
    fil: "Portal ng otomotib sa Indonesia: kotse, motor, balita, at serbisyo.",
  },
  footerCategory: { id: "Kategori", en: "Categories", fil: "Kategorya" },
  footerLegal: { id: "Legal", en: "Legal", fil: "Legal" },
  footerAbout: { id: "Tentang Kami", en: "About Us", fil: "Tungkol Sa Amin" },
  footerPrivacy: { id: "Kebijakan Privasi", en: "Privacy Policy", fil: "Patakaran sa Pagkapribado" },
  footerDisclaimer: { id: "Disclaimer", en: "Disclaimer", fil: "Disclaimer" },

  // Common
  dataSample: { id: "Data contoh", en: "Sample data", fil: "Sample data" },
};

export function t(key: keyof typeof translations, locale: Locale): string {
  return translations[key][locale];
}
