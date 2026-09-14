type Props = {
  question: string;
  options: string[];
  selected?: number;
  correctAnswer: number;
  checked: boolean;
  onSelect: (index: number) => void;
};

export default function MultipleChoiceQuestion({
  question,
  options,
  selected,
  correctAnswer,
  checked,
  onSelect,
}: Props) {
  return (
    <div className="rounded-2xl border border-stone-300/60 bg-[#f8f2e8] p-5">
      <h3 className="mb-4 text-lg font-semibold text-stone-900">
        {question}
      </h3>

      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = checked && index === correctAnswer;
          const isWrong = checked && isSelected && index !== correctAnswer;

          return (
            <button
              key={option}
              onClick={() => onSelect(index)}
              className={`w-full rounded-xl border px-4 py-3 text-left text-stone-800  transition ${
                isCorrect
                  ? "border-green-600/40 bg-green-100/70"
                  : isWrong
                  ? "border-red-500/40 bg-red-100/70"
                  : isSelected
                  ? "border-[#9a6736]/60 bg-[#ead8c0]"
                  : "border-stone-300 bg-white/60 hover:bg-white"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}