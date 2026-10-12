import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import { LocaleProvider } from "@/hooks/use-locale";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toyota Rush 2026 - Harga OTR, Cicilan & Ulasan | otochannel",
  description:
    "Detail Toyota Rush 2026: harga OTR Jakarta, varian, cicilan, biaya bulanan, spesifikasi, ulasan pengguna & ahli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${lato.variable} ${poppins.variable} antialiased`}>
      <body className="flex min-h-full flex-col font-[family-name:var(--font-lato)]">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
