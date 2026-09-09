"use client";

import Image from "next/image";
import type { AlphabetLetter } from "@/data/alphabet";

type LetterCardProps = {
  letter: AlphabetLetter;
};

export default function LetterCard({ letter }: LetterCardProps) {
  const playAudio = () => {
    const audio = new Audio(letter.audio);

    audio.play().catch(() => {
      console.log(`Audio not found: ${letter.audio}`);
    });
  };

  return (
    <button
      onClick={playAudio}
      className={`group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border bg-[#f7f0e5] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] ${
        letter.special
          ? "border-[#9a6736]/60"
          : "border-stone-700/25"
      }`}
    >
      {/* Орнамент слева */}
 

      {/* Фоновая картинка или базовый ою */}
      <div className="absolute inset-0">
        {letter.image ? (
          <div className="relative h-full w-full">
            <Image
              src={letter.image}
              alt={letter.word ?? letter.upper}
              fill
              className="object-contain p-6 opacity-30 transition duration-300 group-hover:opacity-40"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
            <div className="text-[9rem] text-[#9a6736]">❖</div>
          </div>
        )}
      </div>

      {/* Затемнение для читаемости */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f0e5]/70" />

      {/* Контент */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="font-serif text-7xl font-semibold leading-none text-stone-950 md:text-8xl">
          {letter.upper}
          <span className="ml-1 text-5xl font-normal md:text-6xl">
            {letter.lower}
          </span>
        </div>

        {letter.word && (
          <div className="mt-5">
            <p className="text-xl font-medium text-stone-800">
              {letter.word}
            </p>

            {letter.translation && (
              <p className="mt-1 text-sm text-stone-500">
                {letter.translation}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Кнопка/индикатор звука */}
      <div className="absolute bottom-4 right-4 z-20 rounded-full border border-stone-700/20 bg-white/45 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur-sm transition group-hover:bg-white/65">
        тыңдау
      </div>

  
    </button>
  );
}