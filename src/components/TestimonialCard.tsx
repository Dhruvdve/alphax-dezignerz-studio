import { FadeIn } from "@/components/FadeIn";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  delay?: number;
};

export function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialCardProps) {
  return (
    <FadeIn delay={delay}>
      <figure className="h-full rounded-2xl border border-navy/5 bg-white p-8 shadow-soft">
        <blockquote className="text-base leading-relaxed text-navy sm:text-lg">
          “{quote}”
        </blockquote>
        <figcaption className="mt-6 text-sm">
          <p className="font-semibold text-navy">{author}</p>
          <p className="text-muted">{role}</p>
        </figcaption>
      </figure>
    </FadeIn>
  );
}
