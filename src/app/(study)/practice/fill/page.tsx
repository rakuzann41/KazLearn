import FillBlankExercise from "@/components/practice/FillBlankExercise";
import { fillExercises } from "@/data/fillExercises";
import BackButton from "@/components/BackButtonPractice";

export default function FillPracticePage() {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Сөздер
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
          Бос орынды толтыр
        </h1>

        <p className="mt-3 text-stone-600">
          Сөйлемге мағынасы бойынша дұрыс сөзді таңда.
        </p>
      </div>

      <div className="space-y-6">
        {fillExercises.map((exercise) => (
          <FillBlankExercise
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </div>
  );
}