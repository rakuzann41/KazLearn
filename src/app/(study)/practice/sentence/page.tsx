import BackButton from "@/components/BackButtonPractice";
import SentenceBuilder from "@/components/practice/SentenceBuilder";
import { sentenceExercises } from "@/data/sentences";

export default function SentencePracticePage() {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Сөйлем
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
          Сөйлем құрастыр
        </h1>

        <p className="mt-3 text-stone-600">
          Сөздерді дұрыс ретпен орналастырып, сөйлем құрастыр.
        </p>
      </div>

      <div className="space-y-6">
        {sentenceExercises.map((exercise) => (
          <SentenceBuilder
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>
    </div>
  );
}