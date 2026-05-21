import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { FadeIn } from "@/components/FadeIn";

export function TestimonialShowcase() {
  return (
    <div className="relative mt-10 grid gap-5 sm:grid-cols-2">
      {testimonials.map((item, i) => (
        <FadeIn key={item.author} delay={i * 0.05}>
          <article className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:p-7">
            <Quote className="h-5 w-5 text-navy/35" aria-hidden />
            <p className="mt-4 flex-1 text-base leading-relaxed text-navy sm:text-lg">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-6 border-t border-navy/10 pt-4">
              <p className="font-semibold text-navy">{item.author}</p>
              <p className="mt-1 text-sm text-navy/70">{item.role}</p>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
