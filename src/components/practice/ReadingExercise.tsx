"use client";

import { useState } from "react";
import type { ReadingExercise as ReadingExerciseType } from "@/data/exercises";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import MatchingQuestion from "./MatchingQuestion";

type Props = {
  exercise: ReadingExerciseType;
};

export default function ReadingExercise({ exercise }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [matchingAnswers, setMatchingAnswers] = useState<Record<string, string>>(
    {}
  );
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers({});
    setMatchingAnswers({});
    setChecked(false);
  };

  const multipleChoiceScore = exercise.questions.reduce((score, question) => {
    return answers[question.id] === question.correctAnswer
      ? score + 1
      : score;
  }, 0);

  const matchingCorrect = exercise.matching.pairs.every(
    (pair) => matchingAnswers[pair.left] === pair.right
  );

  const totalScore = multipleChoiceScore + (matchingCorrect ? 1 : 0);

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Оқу сауаттылығы
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
          {exercise.title}
        </h1>

        <p className="mt-3 text-stone-600">
          {exercise.description}
        </p>
      </div>

      <article className="mb-8 rounded-3xl border border-stone-300/60 bg-[#f7f0e5] p-6 leading-8 text-stone-800 shadow-sm md:p-8">
        {exercise.text.split("\n\n").map((paragraph) => (
          <p key={paragraph} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </article>

      <div className="space-y-5">
        {exercise.questions.map((question) => (
          <MultipleChoiceQuestion
            key={question.id}
            question={question.question}
            options={question.options}
            selected={answers[question.id]}
            correctAnswer={question.correctAnswer}
            checked={checked}
            onSelect={(index) =>
              setAnswers((prev) => ({
                ...prev,
                [question.id]: index,
              }))
            }
          />
        ))}

        <MatchingQuestion
          pairs={exercise.matching.pairs}
          answers={matchingAnswers}
          checked={checked}
          onChange={(left, right) =>
            setMatchingAnswers((prev) => ({
              ...prev,
              [left]: right,
            }))
          }
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {!checked ? (
          <button
            onClick={handleCheck}
            className="rounded-full bg-[#8b5a2b] px-7 py-3 font-semibold text-white transition hover:bg-[#9b6636]"
          >
            Тексеру
          </button>
        ) : (
          <>
            <div className="rounded-full border border-stone-300 bg-white/60 px-5 py-3 font-medium text-stone-800">
              Нәтиже: {totalScore} / 5
            </div>

            <button
              onClick={handleReset}
              className="rounded-full border border-stone-400 px-7 py-3 font-medium text-stone-800 transition hover:bg-white/50"
            >
              Қайта өту
            </button>
          </>
        )}
      </div>
    </div>
  );
}