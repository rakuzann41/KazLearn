"use client";

import { useState } from "react";
import type { FillExercise } from "@/data/fillExercises";

type Props = {
  exercise: FillExercise;
};

export default function FillBlankExercise({ exercise }: Props) {
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);

  const isCorrect = selected === exercise.correctAnswer;

  const reset = () => {
    setSelected("");
    setChecked(false);
  };

  return (
    <div className="rounded-3xl border border-stone-300/60 bg-[#f7f0e5] p-5 md:p-7">
      <h2 className="text-lg font-semibold text-stone-900">
        Бос орынды толтыр
      </h2>

      <div className="mt-5 rounded-2xl border border-stone-300 bg-white/50 p-4 text-lg text-stone-800">
        {exercise.sentenceBefore}{" "}
        <span
          className={`inline-block min-w-28 rounded-lg border-b-2 px-3 py-1 text-center ${
            checked
              ? isCorrect
                ? "border-green-500 bg-green-100/60"
                : "border-red-500 bg-red-100/60"
              : "border-stone-400"
          }`}
        >
          {selected || ""}
        </span>{" "}
        {exercise.sentenceAfter}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {exercise.options.map((option) => (
          <button
            key={option}
            onClick={() => {
              if (!checked) setSelected(option);
            }}
            className={`rounded-xl border px-4 py-2 text-stone-800 transition ${
              selected === option
                ? "border-[#9a6736]/50 bg-[#ead8c0]"
                : "border-stone-300 bg-white/70 hover:bg-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={!selected}
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
              onClick={reset}
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