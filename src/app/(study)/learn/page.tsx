import RuleAccordion from "@/components/learn/RuleAccordion";
import { rules } from "@/data/rules";

export default function LearnPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-serif text-5xl font-semibold text-stone-900">
          Ережелер
        </h1>

        <p className="mt-4 max-w-2xl text-stone-600">
          Қазақ тілінің негізгі грамматикалық ережелері.
          Тақырыпты басып, түсіндірмесін және мысалдарын қара.
        </p>
      </div>

      <div className="space-y-4">
        {rules.map((rule) => (
          <RuleAccordion key={rule.id} rule={rule} />
        ))}
      </div>
    </div>
  );
}