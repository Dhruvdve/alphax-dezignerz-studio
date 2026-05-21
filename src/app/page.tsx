import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Marquee } from "@/components/Marquee";
import { CategoryQuickLinks } from "@/components/home/CategoryQuickLinks";
import { ConversionTrustStrip } from "@/components/home/ConversionTrustStrip";
import { HomePortfolioCategories } from "@/components/home/HomePortfolioCategories";
import { OnboardingProcess } from "@/components/home/OnboardingProcess";
import { StickyPortfolioNav } from "@/components/StickyPortfolioNav";
import { Section } from "@/components/Section";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { HeroAdvanced } from "@/components/home/HeroAdvanced";
import { HomePricingOffer } from "@/components/home/HomePricingOffer";
import { TestimonialShowcase } from "@/components/home/TestimonialShowcase";
import { ResultsMetrics } from "@/components/ResultsMetrics";
import { FounderSection } from "@/components/FounderSection";
import { WhyAlphaXComparison } from "@/components/WhyAlphaXComparison";
import { InsightsNewsletter } from "@/components/InsightsNewsletter";
import { PrimaryCta } from "@/components/PrimaryCta";
import { BookingCta } from "@/components/BookingCta";
import { finalCta, homePortfolioCopy } from "@/content/conversion";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata({
  alternates: { canonical: "/" },
});

export default function HomePage() {
  return (
    <>
      <HeroAdvanced />
      <CategoryQuickLinks />
      <Marquee />
      <ConversionTrustStrip />

      <Section variant="white" id="work" className="!py-12 sm:!py-16">
        <FadeIn>
          <span className="label-accent">{homePortfolioCopy.eyebrow}</span>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            {homePortfolioCopy.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/90 sm:text-lg">
            {homePortfolioCopy.subheadline}
          </p>
        </FadeIn>
        <div className="mt-12">
          <HomePortfolioCategories />
        </div>
      </Section>

      <OnboardingProcess />
      <WhyAlphaXComparison />

      <Section variant="surface" id="pricing" className="!bg-white">
        <HomePricingOffer />
      </Section>

      <ResultsMetrics />
      <Section variant="white" id="testimonials">
        <FadeIn>
          <span className="label-accent">Testimonials</span>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
            What travel brands say
          </h2>
        </FadeIn>
        <TestimonialShowcase />
      </Section>
      <FounderSection />

      <Section variant="white" id="faq">
        <FadeIn>
          <span className="label-accent">FAQ</span>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Answers before you ask.
          </h2>
        </FadeIn>
        <FaqAccordion />
      </Section>

      <InsightsNewsletter />
      <StickyPortfolioNav />

      <Section variant="navy" id="cta">
        <FadeIn variant="scale">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{finalCta.headline}</h2>
            <p className="mt-4 text-lg text-white/75">{finalCta.subheadline}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryCta className="btn-cta px-10 py-3.5 text-base shadow-card" />
              <BookingCta className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15" />
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
