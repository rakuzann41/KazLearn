"use client";

import { useState } from "react";
import type { Rule } from "@/data/rules";

type RuleAccordionProps = {
  rule: Rule;
};

export default function RuleAccordion({ rule }: RuleAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-300/60 bg-[#f7f0e5]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-xl font-semibold text-stone-900">
          {rule.title}
        </span>

        <span
          className={`text-2xl transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-stone-300/50 px-6 py-5">
            <p className="leading-7 text-stone-700">
              {rule.description}
            </p>

            <div className="mt-4 space-y-2">
              {rule.examples.map((example) => (
                <div
                  key={example}
                  className="rounded-xl bg-white/60 px-4 py-3 text-stone-800"
                >
                  {example}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}