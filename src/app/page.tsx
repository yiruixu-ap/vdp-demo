import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8fafc] px-4 text-center">
      <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-extrabold text-[#0f172a]">
        otochannel VDP Demo
      </h1>
      <p className="mt-2 text-[#64748b]">Toyota Rush upgraded detail page</p>
      <Link
        href="/mobil/toyota/rush"
        className="mt-6 inline-flex h-11 items-center rounded-lg bg-[#155dfc] px-6 font-bold text-white transition hover:bg-blue-700"
      >
        Buka halaman Rush →
      </Link>
    </main>
  );
}
