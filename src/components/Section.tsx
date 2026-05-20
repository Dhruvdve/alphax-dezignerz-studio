import type { ReactNode } from "react";

type SectionVariant = "navy" | "white" | "surface";

const variantClass: Record<SectionVariant, string> = {
  navy: "bg-navy text-white",
  white: "bg-white text-navy",
  surface: "bg-surface text-navy",
};

type SectionProps = {
  variant: SectionVariant;
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ variant, id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`${variantClass[variant]} py-16 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
