import { notFound } from "next/navigation";
import BackButton from "@/components/Buttons/BackButtonFlashcard";
import FlashcardTrainer from "@/components/flashcards/FlashcardTrainer";
import { flashcardSets } from "@/data/flashcards";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FlashcardSetPage({ params }: Props) {
  const { slug } = await params;

  const set = flashcardSets.find((item) => item.slug === slug);

  if (!set) {
    notFound();
  }

  return (
    <div>
      <BackButton />

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Карточкалар
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
          {set.title}
        </h1>

        <p className="mt-3 text-stone-600">
          {set.description}
        </p>
      </div>

      <FlashcardTrainer set={set} />
    </div>
  );
}