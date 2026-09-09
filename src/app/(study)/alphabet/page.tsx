import LetterCard from "@/components/alphabet/LetterCard";
import { alphabet } from "@/data/alphabet";

export default function AlphabetPage() {
  return (
    <main className="min-h-screen bg-[#eee5d5] px-5 py-16 text-stone-900 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">


          <h1 className="font-serif text-5xl font-semibold md:text-6xl">
            Қазақ әліпбиі
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 md:text-lg">
            Әріпті басып, оның айтылуын тыңда. Әріппен бірге мысал сөзді де
            үйрен.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {alphabet.map((letter) => (
            <LetterCard
              key={letter.upper}
              letter={letter}
            />
          ))}
        </div>
      </div>
    </main>
  );
}