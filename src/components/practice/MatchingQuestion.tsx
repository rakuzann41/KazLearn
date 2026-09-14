type Pair = {
  left: string;
  right: string;
};

type Props = {
  pairs: Pair[];
  answers: Record<string, string>;
  checked: boolean;
  onChange: (left: string, right: string) => void;
};

export default function MatchingQuestion({
  pairs,
  answers,
  checked,
  onChange,
}: Props) {
  const rightOptions = pairs.map((pair) => pair.right);

  return (
    <div className="rounded-2xl border border-stone-300/60 bg-[#f8f2e8] p-5">
      <h3 className="mb-5 text-lg font-semibold text-stone-900">
        Сәйкестендір
      </h3>

      <div className="space-y-4">
        {pairs.map((pair) => {
          const selected = answers[pair.left] ?? "";
          const isCorrect = checked && selected === pair.right;
          const isWrong = checked && selected !== "" && selected !== pair.right;

          return (
            <div
              key={pair.left}
              className="grid gap-3 sm:grid-cols-[1fr_1.5fr] sm:items-center"
            >
              <div className="font-medium text-stone-800">
                {pair.left}
              </div>

              <select
                value={selected}
                onChange={(e) => onChange(pair.left, e.target.value)}
                className={`rounded-xl  text-stone-800 border px-4 py-3 outline-none ${
                  isCorrect
                    ? "border-green-600/40 bg-green-100/70"
                    : isWrong
                    ? "border-red-500/40 bg-red-100/70"
                    : "border-stone-300 bg-white/70"
                }`}
              >
                <option value="">Таңдаңыз</option>

                {rightOptions.map((right) => (
                  <option key={right} value={right}>
                    {right}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}