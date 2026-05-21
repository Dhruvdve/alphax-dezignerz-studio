import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { CategoryQuickLinks } from "@/components/home/CategoryQuickLinks";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { StickyPortfolioNav } from "@/components/StickyPortfolioNav";
import { portfolioPageCopy } from "@/content/portfolio";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata({
  alternates: { canonical: "/portfolio" },
});

export default function PortfolioPage() {
  return (
    <Section variant="white" id="portfolio-root" className="pt-12 sm:pt-16">
      <FadeIn>
        <span className="label-accent">{portfolioPageCopy.eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-navy sm:text-5xl">
          {portfolioPageCopy.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy/90">
          {portfolioPageCopy.subheadline}
        </p>
      </FadeIn>
      <div className="mt-10">
        <CategoryQuickLinks variant="inline" />
      </div>
      <div className="mt-12">
        <PortfolioGallery />
      </div>
      <StickyPortfolioNav />
    </Section>
  );
}
