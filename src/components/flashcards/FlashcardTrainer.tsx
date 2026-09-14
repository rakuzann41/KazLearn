"use client";

import { useState } from "react";
import type { FlashcardSet } from "@/data/flashcards";

type Props = {
  set: FlashcardSet;
};

export default function FlashcardTrainer({ set }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [unknownCount, setUnknownCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentCard = set.cards[currentIndex];

  const handleAnswer = (known: boolean) => {
    if (known) {
      setKnownCount((prev) => prev + 1);
    } else {
      setUnknownCount((prev) => prev + 1);
    }

    if (currentIndex === set.cards.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setFlipped(false);
  };

  const restart = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setKnownCount(0);
    setUnknownCount(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-[2rem] border border-stone-300/60 bg-[#f7f0e5] p-8 text-center shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Нәтиже
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-stone-900">
            Жаттығу аяқталды
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-green-100/70 p-5">
              <div className="text-3xl font-semibold text-green-800">
                {knownCount}
              </div>

              <div className="mt-1 text-sm text-green-700">
                Білемін
              </div>
            </div>

            <div className="rounded-2xl bg-red-100/70 p-5">
              <div className="text-3xl font-semibold text-red-800">
                {unknownCount}
              </div>

              <div className="mt-1 text-sm text-red-700">
                Білмеймін
              </div>
            </div>
          </div>

          <button
            onClick={restart}
            className="mt-8 rounded-full bg-[#8b5a2b] px-7 py-3 font-medium text-white transition hover:bg-[#9b6636]"
          >
            Қайта бастау
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-5 flex items-center justify-between text-sm text-stone-500">
        <span>
          {currentIndex + 1} / {set.cards.length}
        </span>

        <span>{set.title}</span>
      </div>

      <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-stone-300/60">
        <div
          className="h-full rounded-full bg-[#8b5a2b] transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / set.cards.length) * 100}%`,
          }}
        />
      </div>

      {/* Flashcard */}
      <button
        onClick={() => setFlipped((prev) => !prev)}
        className="relative min-h-[380px] w-full rounded-[2rem] border border-stone-300/70 bg-[#f7f0e5] p-8 text-center shadow-md transition duration-300 hover:shadow-xl md:min-h-[430px]"
      >
        {!flipped ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
              Қазақша
            </p>

            <h2 className="mt-6 font-serif text-6xl font-semibold text-stone-900 md:text-7xl">
              {currentCard.word}
            </h2>

            <p className="mt-10 text-sm text-stone-400">
              Аудару үшін бас
            </p>
          </div>
        ) : (
          <div className="flex min-h-[320px] flex-col items-center justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
              Орысша
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
              {currentCard.translation}
            </h2>

            <div className="my-8 h-px w-20 bg-stone-300" />

            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
              Мысал
            </p>

            <p className="mt-3 text-lg leading-7 text-stone-700">
              {currentCard.example}
            </p>
          </div>
        )}
      </button>

      {/* Controls */}
      {flipped && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleAnswer(false)}
            className="rounded-2xl border border-red-300/70 bg-red-100/70 px-5 py-4 font-medium text-red-800 transition hover:bg-red-100"
          >
            Білмеймін
          </button>

          <button
            onClick={() => handleAnswer(true)}
            className="rounded-2xl border border-green-300/70 bg-green-100/70 px-5 py-4 font-medium text-green-800 transition hover:bg-green-100"
          >
            Білемін
          </button>
        </div>
      )}
    </div>
  );
}