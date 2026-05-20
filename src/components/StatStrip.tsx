import { stats } from "@/content/site";
import { FadeIn } from "@/components/FadeIn";

export function StatStrip() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <FadeIn key={s.label} delay={i * 0.05}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
