import { faqs } from "@/content/experience";
import { FadeIn } from "@/components/FadeIn";

/** All answers visible — no hidden collapsed state (fixes trust / “broken” accordion). */
export function FaqAccordion() {
  return (
    <FadeIn delay={0.05} className="mt-14">
      <dl className="divide-y divide-navy/10 rounded-3xl border border-navy/10 bg-white shadow-soft">
        {faqs.map((item) => (
          <div key={item.q} className="px-5 py-6 sm:px-7 sm:py-7">
            <dt className="text-base font-semibold text-navy sm:text-lg">{item.q}</dt>
            <dd className="mt-3 text-sm leading-relaxed text-navy/90 sm:text-base">{item.a}</dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}
