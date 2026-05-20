import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Social posts, logos, print, and motion work for Indian travel agencies — AlphaX Dezignerz Studio.",
  alternates: { canonical: "/portfolio" },
  keywords: ["graphic designer for travel agency india", "travel agency branding ahmedabad"],
};

export default function PortfolioPage() {
  return (
    <Section variant="white" className="pt-12 sm:pt-16">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Portfolio</p>
        <h1 className="mt-3 text-4xl font-bold text-navy sm:text-5xl">Work that travels well.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A curated mix of social, identity, print, and motion explorations for travel teams.
          Filter by category — each tile is a placeholder frame ready for your final exports.
        </p>
      </FadeIn>
      <div className="mt-12">
        <PortfolioGallery />
      </div>
    </Section>
  );
}
