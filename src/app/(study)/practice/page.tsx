import Link from "next/link";
import { readingExercises } from "@/data/exercises";

const practiceSections = [
  {
    title: "Оқу сауаттылығы",
    description:
      "Мәтінді оқып, сұрақтарға жауап бер. Мәтіннің мағынасын түсініп, негізгі ақпаратты анықта.",
    href: "/practice/1",
    label: "Оқуды бастау",
    number: "01",
  },
  {
    title: "Сөйлем құрастыр",
    description:
      "Берілген сөздерді дұрыс ретпен орналастырып, мағыналы сөйлем құрастыр.",
    href: "/practice/sentence",
    label: "Жаттығуды бастау",
    number: "02",
  },
  {
    title: "Бос орынды толтыр",
    description:
      "Сөйлемнің мағынасына сәйкес келетін дұрыс сөзді таңдап, бос орынды толтыр.",
    href: "/practice/fill",
    label: "Жаттығуды бастау",
    number: "03",
  },
];

export default function PracticePage() {
  return (
    <div>
      {/* Header */}
      <section className="mb-12">
        <p className="text-sm uppercase tracking-[0.28em] text-stone-500">
          Тәжірибе
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 sm:text-5xl md:text-6xl">
          Жаттығулар
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
          Қазақ тілін оқу, сөйлем құрастыру және сөздерді дұрыс қолдану арқылы
          тәжірибе жаса.
        </p>
      </section>

      {/* Main categories */}
      <section className="grid gap-5 lg:grid-cols-3">
        {practiceSections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border border-stone-300/60 bg-[#f7f0e5] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl text-[#9a6736]/25">
                  {section.number}
                </span>

                <span className="text-xl text-stone-400 transition duration-300 group-hover:translate-x-1 group-hover:text-stone-700">
                  →
                </span>
              </div>

              <h2 className="mt-8 font-serif text-2xl font-semibold text-stone-900 md:text-3xl">
                {section.title}
              </h2>

              <p className="mt-4 leading-7 text-stone-600">
                {section.description}
              </p>
            </div>

            <div className="mt-8 text-sm font-medium text-[#8b5a2b]">
              {section.label}
            </div>
          </Link>
        ))}
      </section>

      {/* Reading exercises */}
      <section className="mt-14">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-stone-500">
              Оқу
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold text-stone-900">
              Мәтіндер
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-stone-500">
            Қысқа мәтіндерді оқып, мазмұны бойынша сұрақтарға жауап бер.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {readingExercises.map((exercise, index) => (
            <Link
              key={exercise.id}
              href={`/practice/${exercise.id}`}
              className="group rounded-2xl border border-stone-300/60 bg-white/45 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                  Мәтін {index + 1}
                </span>

                <span className="text-stone-400 transition group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold text-stone-900">
                {exercise.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                {exercise.description}
              </p>

              <div className="mt-6 flex gap-2 text-xs text-stone-500">
                <span className="rounded-full border border-stone-300/70 px-3 py-1">
                  5 сұрақ
                </span>

                <span className="rounded-full border border-stone-300/70 px-3 py-1">
                  Оқу
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}