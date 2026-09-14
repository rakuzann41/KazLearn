import Link from "next/link";
import { flashcardSets } from "@/data/flashcards";

export default function FlashcardsPage() {
  return (
    <div>
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Сөздік
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 sm:text-5xl">
          Карточкалар
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-stone-600">
          Тақырыпты таңда. Сөзді көріп, аудармасын тексер және оны білетініңді
          белгіле.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {flashcardSets.map((set, index) => (
          <Link
            key={set.slug}
            href={`/flashcards/${set.slug}`}
            className="group rounded-3xl border border-stone-300/60 bg-[#f7f0e5] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-4xl text-[#9a6736]/25">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-stone-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>

            <h2 className="mt-8 font-serif text-2xl font-semibold text-stone-900">
              {set.title}
            </h2>

            <p className="mt-3 leading-6 text-stone-600">
              {set.description}
            </p>

            <div className="mt-6 text-sm text-stone-500">
              {set.cards.length} сөз
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}