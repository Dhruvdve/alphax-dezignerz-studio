import { resultsMetrics } from "@/content/experience";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

export function ResultsMetrics() {
  return (
    <Section variant="surface">
      <FadeIn>
        <span className="label-accent">Proof</span>
        <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
          Real results for real travel brands
        </h2>
      </FadeIn>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {resultsMetrics.map((item, i) => (
          <FadeIn key={item.stat} delay={i * 0.06}>
            <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-2xl font-bold text-navy sm:text-3xl">{item.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy/80 sm:text-base">
                {item.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
