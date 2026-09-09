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
      <div className="absolute inset-y-5 left-4 z-20 flex w-5 flex-col items-center justify-center gap-2 opacity-55">
        <span className="text-lg text-[#9a6736]">◇</span>
        <span className="text-lg text-[#9a6736]">◆</span>
        <span className="text-lg text-[#9a6736]">◇</span>
        <span className="text-lg text-[#9a6736]">◆</span>
        <span className="text-lg text-[#9a6736]">◇</span>
      </div>

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

      {/* Метка особой казахской буквы */}
      {letter.special && (
        <div className="absolute right-4 top-4 z-20 rounded-full border border-[#9a6736]/25 bg-[#9a6736]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#7a4f29]">
          қазақ әрпі
        </div>
      )}
    </button>
  );
}