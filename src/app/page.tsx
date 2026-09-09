import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
});

const navLinks = [
  { href: "/alphabet", label: "Әліпби" },
  { href: "/practice", label: "Жаттығулар" },
  { href: "/flashcards", label: "Карточкалар" },
  { href: "/learn", label: "Ережелер" },
];

export default function HomePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/images/hero-bg-new.png"
        alt="Kazakh steppe with yurt"
        fill
        priority
        className="object-cover blur-[1.4px] scale-105"
      />
      <Navbar />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6">
   

        <div className="flex flex-1 items-center justify-center text-center">
          <div className="max-w-4xl">

            <h1
              className={`${playfair.className} text-3xl font-semibold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-8xl`}
            >
              Қазақ тілін оңай үйрену
            </h1>

            <div className="mt-10">
              <Link
                href="/learn"
                className="inline-flex rounded-full bg-[#8B5A2B]/75 px-8 py-4 text-base font-semibold text-white shadow-lg ring-1 ring-white/30 backdrop-blur-[4px] transition hover:scale-[1.02] hover:bg-[#9A6432]/80"
              >
                Оқуды бастау
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}