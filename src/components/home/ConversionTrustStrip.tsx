import { conversionTrustPoints } from "@/content/conversion";
import { FadeIn } from "@/components/FadeIn";

export function ConversionTrustStrip() {
  return (
    <section className="border-y border-navy/10 bg-surfaceMuted py-12 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {conversionTrustPoints.map((point, i) => (
          <FadeIn key={point.title} delay={i * 0.06}>
            <div className="text-center sm:text-left">
              <h3 className="text-base font-bold text-navy">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">{point.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
