export type FillExercise = {
  id: number;
  sentenceBefore: string;
  sentenceAfter: string;
  options: string[];
  correctAnswer: string;
};

export const fillExercises: FillExercise[] = [
  {
    id: 1,
    sentenceBefore: "Мен ертең университетке",
    sentenceAfter: "барамын.",
    options: ["автобуспен", "кітаппен", "үйде", "кеше"],
    correctAnswer: "автобуспен",
  },
  {
    id: 2,
    sentenceBefore: "Әкем таңертең",
    sentenceAfter: "барады.",
    options: ["жұмысқа", "кітап", "кешке", "досым"],
    correctAnswer: "жұмысқа",
  },
  {
    id: 3,
    sentenceBefore: "Мен кешке үйде",
    sentenceAfter: "оқимын.",
    options: ["кітап", "автобус", "тау", "дос"],
    correctAnswer: "кітап",
  },
  {
    id: 4,
    sentenceBefore: "Біз демалыс күні",
    sentenceAfter: "барамыз.",
    options: ["саябаққа", "кітапты", "таңертең", "үйден"],
    correctAnswer: "саябаққа",
  },
  {
    id: 5,
    sentenceBefore: "Ол қазақ тілін",
    sentenceAfter: "жүр.",
    options: ["үйреніп", "ішіп", "барып", "көріп"],
    correctAnswer: "үйреніп",
  },
];