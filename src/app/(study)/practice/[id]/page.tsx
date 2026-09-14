import ReadingExercise from "@/components/practice/ReadingExercise";
import { readingExercises } from "@/data/exercises";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButtonPractice";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ExercisePage({ params }: Props) {
  const { id } = await params;

  const exercise = readingExercises.find(
    (item) => item.id === Number(id)
  );

  if (!exercise) {
    notFound();
  }

 return (
  <>
    <BackButton />
    <ReadingExercise exercise={exercise} />
  </>
);
}