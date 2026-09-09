"use client";

import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-start justify-between px-8 py-7 md:px-12 lg:px-16">
        <Link
          href="/"
          className={`${playfair.className} -ml-1 text-3xl italic tracking-[0.22em] text-white`}
        >
          kz.
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/15 bg-black/10 backdrop-blur-sm transition hover:bg-black/20"
          >
            <span
              className={`h-[1.5px] w-5 bg-white transition duration-300 ${
                isOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-white transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-white transition duration-300 ${
                isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>

          <nav
            className={`absolute right-0 top-14 w-52 overflow-hidden rounded-2xl border border-white/15 bg-black/15 backdrop-blur-md transition-all duration-300 ease-out ${
              isOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-5 py-3 text-right text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}