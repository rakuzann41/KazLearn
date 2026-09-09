import Image from "next/image";

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Общий фон */}
      <Image
        src="/images/hero-bg-new.png"
        alt=""
        fill
        priority
        className="fixed object-cover"
      />

      {/* Затемнение и blur */}
      <div className="fixed inset-0 bg-black/35 backdrop-blur-[2px]" />

      {/* Центральная учебная панель */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-9rem)] rounded-[2rem] border border-white/20 bg-[#eee5d5]/95 p-6 shadow-2xl backdrop-blur-md md:p-10">
          {children}
        </div>
      </div>
    </main>
  );
}