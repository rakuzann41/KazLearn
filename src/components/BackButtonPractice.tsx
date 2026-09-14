"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/40 px-4 py-2 text-sm font-medium text-stone-700 backdrop-blur-sm transition hover:bg-white/70 hover:text-stone-900"
    >
      <Link href="/practice">← Артқа</Link>
    </button>
  );
}