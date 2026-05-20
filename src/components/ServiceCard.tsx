import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  delay?: number;
};

export function ServiceCard({ title, description, href, delay = 0 }: ServiceCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-navy/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/20 hover:shadow-card"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-accent opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </Link>
    </FadeIn>
  );
}
