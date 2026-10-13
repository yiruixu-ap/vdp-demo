import type { VehicleSeed } from "@/types";

/**
 * Toyota Rush — model-level content only.
 *
 * Adding another Toyota model = copy this file, change the content, register it
 * in `src/data/vehicles/index.ts`. Brand-level copy (dealer network, resale)
 * is attached automatically and is NOT repeated here.
 */
export const rushSeed: VehicleSeed = {
  category: "mobil",
  brand: "Toyota",
  brandSlug: "toyota",
  model: "Rush",
  modelSlug: "rush",
  year: 2026,
  bodyType: "SUV",
  seats: 7,
  fuel: "Bensin",
  transmission: "Manual / AT",
  image: "/images/vehicles/mobil-rush.jpg",

  // Single, relatively accurate price for a brand-new car (optimisation #1).
  priceJuta: 282,
  priceNote: {
    id: "Harga mobil baru · OTR Jakarta",
    en: "New car price · OTR Jakarta",
    fil: "Presyo ng bagong kotse · OTR Jakarta",
  },

  variants: [
    { name: "Rush E", priceJuta: 282, transmission: "Manual", note: "2 bulan inden" },
    { name: "Rush G", priceJuta: 288, transmission: "Manual" },
    { name: "Rush G CVT", priceJuta: 294, transmission: "Otomatis" },
    { name: "Rush X CVT", priceJuta: 300, transmission: "Otomatis" },
    { name: "Rush V Premium", priceJuta: 306, transmission: "Otomatis" },
  ],

  variantSnapshot: [
    { feature: "Transmisi", values: ["Manual", "Manual", "Otomatis", "Otomatis", "Otomatis"] },
    { feature: "Kursi", values: ["7", "7", "7", "7", "7"] },
    { feature: "Velg", values: ["16\"", "16\"", "16\"", "16\"", "17\""] },
    { feature: "Layar", values: ["6.8\"", "6.8\"", "7\"", "7\"", "9\""] },
  ],

  specs: [
    { key: "Mesin", label: "Mesin", value: "1496 cc" },
    { key: "Tenaga", label: "Tenaga", value: "104 PS" },
    { key: "Torsi", label: "Torsi", value: "136 Nm" },
    { key: "Transmisi", label: "Transmisi", value: "Manual / AT" },
    { key: "Bahan Bakar", label: "Bahan Bakar", value: "Bensin" },
    { key: "Konsumsi BBM", label: "Konsumsi BBM", value: "13 km/L" },
    { key: "Kapasitas Bagasi", label: "Kapasitas Bagasi", value: "514 Liter" },
    { key: "Kursi", label: "Kursi", value: "7" },
    { key: "Tipe Body", label: "Tipe Body", value: "SUV" },
  ],

  financing: {
    defaultRatePct: 8,
    minRatePct: 4,
    maxRatePct: 16,
    stepPct: 0.5,
    downPaymentRates: [0.2, 0.3, 0.4],
    tenorsYears: [1, 3, 5],
  },

  monthlyCost: {
    fuelKmPerLiter: 13,
    servicePerYearJuta: 4.2,
    insurancePerYearJuta: 6,
  },

  realPrice: {
    bbnJuta: 10,
    insuranceJuta: 12,
    adminJuta: 3,
  },

  userReviews: {
    rating: 4.6,
    total: 127,
    positive: 118,
    neutral: 7,
    negative: 2,
    items: [
      { author: "Candra A.", date: "01 Ags 2026", title: "Toyota Rush nyaman untuk harian", sentiment: "positif" },
      { author: "Rina K.", date: "28 Jul 2026", title: "Kabin/ergonomi bagus, performa cukup", sentiment: "positif" },
      { author: "Bagus W.", date: "15 Jul 2026", title: "Value for money terbaik di kelas", sentiment: "positif" },
    ],
  },

  expertReview: [
    {
      title: "Ringkasan",
      content:
        "Toyota Rush menempati posisi SUV kompak 7-penumpang dengan harga yang masih terjangkau. Mesin 1.5 liter cukup untuk penggunaan kota dan jalan antarkota ringan. Suspensi cenderung empuk untuk keluarga, bukan untuk karakter sporty.",
    },
    {
      title: "Exterior",
      content:
        "Desain Rush mengadopsi garis tegas dengan ground clearance tinggi. Lampu depan LED memberikan pencahayaan baik saat malam, sementara overfender hitam menguatkan kesan SUV tanpa terlihat berlebihan.",
    },
    {
      title: "Interior",
      content:
        "Kabin cukup lapang untuk baris pertama dan kedua. Baris ketiga masih bisa dipakai untuk perjalanan menengah. Material dasbornya keras tetapi rakitan rapi dan tahan lama.",
    },
    {
      title: "Fitur",
      content:
        "Varian tertinggi mendapat head unit 9 inci, kamera mundur, dan Electronic Parking Brake. Fitur keselamatan mencakup ABS, EBD, dan dual SRS airbag di semua varian.",
    },
    {
      title: "Kesimpulan",
      content:
        "Rush cocok sebagai mobil keluarga pertama yang butuh 7 kursi dengan biaya perawatan Toyota. Pilihan varian G CVT atau X CVT menawarkan keseimbangan fitur dan harga terbaik.",
    },
  ],

  // One merged Q&A block (optimisation #5): FAQ + previously separate quick answers.
  // All items are expanded by default.
  faq: [
    {
      question: "Berapa cicilan Rush per bulan?",
      answer:
        "Cicilan paling ringan dimulai sekitar Rp 4,6 juta per bulan untuk skenario DP 20% dan tenor 5 tahun dengan suku bunga 8%. Gunakan slider di atas tabel Cicilan untuk melihat skenario DP 30%, DP 40%, atau tenor 1 tahun / 3 tahun. Angka final tetap tergantung persetujuan leasing dan dealer.",
    },
    {
      question: "Rush vs Terios vs BR-V, sebaiknya pilih yang mana?",
      answer:
        "Pilih Rush jika prioritasmu jaringan servis terluas dan nilai jual kembali stabil. Pilih Daihatsu Terios jika ingin mesin/sasis yang sama dengan harga beli sedikit lebih rendah. Pilih Honda BR-V jika butuh tenaga lebih besar (121 PS) dan transmisi CVT lebih halus, dengan anggaran sedikit lebih tinggi.",
    },
    {
      question: "Berapa total biaya yang perlu disiapkan untuk membeli Rush?",
      answer:
        "Selain harga mobil baru Rp 282 juta, siapkan biaya on-road sekitar Rp 307 juta. Selisih tersebut mencakup BBN-KB, asuransi all-risk, dan biaya administrasi. Diskon atau promo dari dealer bisa mengurangi nominal final, tetapi bervariasi tergantung waktu dan lokasi.",
    },
    {
      question: "Apa saja yang perlu diperiksa saat test drive Rush?",
      answer:
        "Periksa posisi duduk di baris kedua dan ketiga, kebisingan kabin saat kecepatan tinggi, respons transmisi otomatis, dan visibilitas saat parkir. Jangan lupa coba AC penuh muatan dan rem di tanjakan.",
    },
    {
      question: "Berapa kapasitas bagasi Rush saat baris ketiga dipakai?",
      answer:
        "Dengan baris ketiga terbuka, bagasi Rush tersisa sekitar 514 liter — cukup untuk beberapa koper ukuran medium atau belanjaan keluarga. Jika baris ketiga dilipat, ruang bagasi bertambah signifikan untuk keperluan luar kota.",
    },
    {
      question: "Apakah tersedia varian bertransmisi otomatis?",
      answer:
        "Ya. Dari lima varian Rush, tiga varian menggunakan transmisi otomatis: Rush G CVT, Rush X CVT, dan Rush V Premium. Varian E dan G tetap manual untuk mereka yang menginginkan kontrol lebih langsung dan biaya perawatan transmisi lebih ringan.",
    },
  ],

  // Rivals sit in the same 7-seat / ~Rp 250-300 juta band as Rush.
  compare: [
    { brand: "Toyota", model: "Rush", isCurrent: true, priceJuta: 282, bodyType: "SUV", seats: 7, transmission: "Manual / AT", powerPs: 104, fuelConsumptionKmPerLiter: 13 },
    { brand: "Toyota", model: "Avanza", priceJuta: 245, bodyType: "MPV", seats: 7, transmission: "Manual / CVT", powerPs: 106, fuelConsumptionKmPerLiter: 14 },
    { brand: "Daihatsu", model: "Terios", priceJuta: 258, bodyType: "SUV", seats: 7, transmission: "Manual / AT", powerPs: 104, fuelConsumptionKmPerLiter: 13 },
    { brand: "Honda", model: "BR-V", priceJuta: 289, bodyType: "SUV", seats: 7, transmission: "CVT", powerPs: 121, fuelConsumptionKmPerLiter: 14 },
  ],

  relatedNews: [
    {
      title: "7 SUV 7-Penumpang Terbaik untuk Keluarga Indonesia 2026",
      excerpt: "Perbandingan SUV dan LMPV bertiga baris yang paling banyak dicari, termasuk Toyota Rush.",
      image: "/images/vehicles/mobil-rush.jpg",
      href: "#",
      category: "SUV",
      date: "2026-10-05",
    },
    {
      title: "Toyota Rush vs Daihatsu Terios: Pilih yang Mana?",
      excerpt: "Perbandingan praktis dua SUV kembar untuk kebutuhan harian dan nilai jual kembali.",
      image: "/images/vehicles/mobil-rush.jpg",
      href: "#",
      category: "Komparasi",
      date: "2026-09-28",
    },
  ],

  seoArticle: {
    title: {
      id: "Panduan Lengkap Toyota Rush",
      en: "Toyota Rush In-Depth Guide",
      fil: "Detalyadong Gabay sa Toyota Rush",
    },
    paragraphs: [
      {
        id: "Toyota Rush tetap menjadi salah satu SUV kompak 7-penumpang yang paling banyak dipertimbangkan keluarga Indonesia. Dengan harga mobil baru mulai Rp 282 juta, Rush menawarkan kombinasi ground clearance tinggi, kabin luas, dan jaringan layanan Toyota yang tersebar luas. Dalam hal perawatan, suku cadang tersedia hampir di seluruh Indonesia dan biaya servis rutin relatif terjangkau.",
        en: "The Toyota Rush remains one of the most considered compact 7-seat SUVs for Indonesian families. With a new-car price starting at IDR 282 million, the Rush offers high ground clearance, a spacious cabin, and Toyota's wide service network. Maintenance parts are available almost everywhere in Indonesia and routine service costs are relatively affordable.",
        fil: "Ang Toyota Rush ay nananatiling isa sa pinakapinag-iisipang kompak na 7-upuang SUV para sa mga pamilyang Indones. Sa presyo ng bagong kotse na nagsisimula sa Rp 282 milyon, ang Rush ay nag-aalok ng mataas na ground clearance, maluwag na cabin, at malawak na serbisyong network ng Toyota.",
      },
      {
        id: "Mesin 1.5 liter menghasilkan 104 PS dan torsi 136 Nm, cukup untuk penggunaan harian dan perjalanan luar kota ringan. Pilihan transmisi manual dan otomatis memberikan fleksibilitas sesuai preferensi pengemudi. Untuk keluarga yang membutuhkan kendaraan serbaguna dengan nilai jual kembali kuat, Rush termasuk pilihan yang masuk akal.",
        en: "The 1.5-liter engine produces 104 PS and 136 Nm of torque, enough for daily use and light out-of-town trips. Manual and automatic transmission options provide flexibility according to driver preference. For families needing a versatile vehicle with strong resale value, the Rush is a sensible choice.",
        fil: "Ang makinang 1.5-liter ay naglilikha ng 104 PS at 136 Nm ng torque, sapat para sa pang-araw-araw na paggamit at mga magaang biyahe. Ang mga pagpipilian sa transmisyon ay nagbibigay ng kakayahan sa kagustuhan ng driver. Para sa mga pamilyang nangangailangan ng maraming-gamit na sasakyan na may malakas na resale value, ang Rush ay isang makatwirang pagpipilian.",
      },
    ],
  },
};
