"use client";

import { useState } from "react";
import type { SentenceExercise } from "@/data/sentences";

type Props = {
  exercise: SentenceExercise;
};

export default function SentenceBuilder({ exercise }: Props) {
  const [availableWords, setAvailableWords] = useState(exercise.words);
  const [answer, setAnswer] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const addWord = (word: string, index: number) => {
    if (checked) return;

    setAnswer((prev) => [...prev, word]);

    setAvailableWords((prev) =>
      prev.filter((_, wordIndex) => wordIndex !== index)
    );
  };

  const removeWord = (word: string, index: number) => {
    if (checked) return;

    setAvailableWords((prev) => [...prev, word]);

    setAnswer((prev) =>
      prev.filter((_, wordIndex) => wordIndex !== index)
    );
  };

  const isCorrect =
    answer.length === exercise.correctOrder.length &&
    answer.every(
      (word, index) => word === exercise.correctOrder[index]
    );

  const resetExercise = () => {
    setAvailableWords(exercise.words);
    setAnswer([]);
    setChecked(false);
  };

  return (
    <div className="rounded-3xl border border-stone-300/60 bg-[#f7f0e5] p-5 md:p-7">
      <h2 className="text-xl font-semibold text-stone-900">
        Сөйлем құрастыр
      </h2>

      <p className="mt-2 text-sm text-stone-600">
        Сөздерді дұрыс ретпен таңда.
      </p>

      {/* Answer area */}
      <div
        className={`mt-6 min-h-24 rounded-2xl border p-4 transition ${
          checked
            ? isCorrect
              ? "border-green-500/40 bg-green-100/60"
              : "border-red-500/40 bg-red-100/60"
            : "border-stone-300 bg-white/50"
        }`}
      >
        {answer.length === 0 ? (
          <p className="text-sm text-stone-400">
            Сөздерді осы жерге орналастыр
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {answer.map((word, index) => (
              <button
                key={`${word}-${index}`}
                onClick={() => removeWord(word, index)}
                className="rounded-xl border border-[#9a6736]/30 bg-[#ead8c0] px-4 py-2 text-stone-800 transition hover:bg-[#dfc5a5]"
              >
                {word}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Available words */}
      <div className="mt-5 flex flex-wrap gap-2">
        {availableWords.map((word, index) => (
          <button
            key={`${word}-${index}`}
            onClick={() => addWord(word, index)}
            className="rounded-xl border border-stone-300 bg-white/70 px-4 py-2 text-stone-800 transition hover:-translate-y-0.5 hover:bg-white"
          >
            {word}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={answer.length !== exercise.correctOrder.length}
            className="rounded-full bg-[#8b5a2b] px-6 py-3 font-medium text-white transition hover:bg-[#9b6636] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Тексеру
          </button>
        ) : (
          <>
            <div
              className={`rounded-full px-5 py-3 font-medium ${
                isCorrect
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {isCorrect ? "Дұрыс!" : "Қате"}
            </div>

            <button
              onClick={resetExercise}
              className="rounded-full border border-stone-400 px-6 py-3 text-stone-800 transition hover:bg-white/50"
            >
              Қайта өту
            </button>
          </>
        )}
      </div>
    </div>
  );
}