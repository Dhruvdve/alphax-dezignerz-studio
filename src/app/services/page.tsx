import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { BrandIdentityTierCards } from "@/components/BrandIdentityTierCards";
import { ProjectPricingList } from "@/components/ProjectPricingList";
import { RetainerTierCards } from "@/components/RetainerTierCards";
import { RetainerComparisonTable } from "@/components/RetainerComparisonTable";
import { PrimaryCta } from "@/components/PrimaryCta";
import { BookingCta } from "@/components/BookingCta";
import { Section } from "@/components/Section";
import { homePricingCopy } from "@/content/conversion";
import { pageMetadata } from "@/content/seo";
import {
  brandIdentityTiers,
  discoveryCallCta,
  pricingTrustNote,
  projectOfferings,
  retainerTiers,
  retainerValueNotes,
} from "@/content/services";

export const metadata: Metadata = pageMetadata({
  alternates: { canonical: "/services" },
});

export default function ServicesPage() {
  return (
    <Section variant="surface" className="pt-12 sm:pt-16">
      <FadeIn>
        <span className="label-accent">Services</span>
        <h1 className="mt-3 text-4xl font-bold text-navy sm:text-5xl">Services & pricing</h1>
        <p className="mt-4 max-w-2xl text-lg text-navy/90">
          Predictable monthly content for travel brands — plus one-time identity systems built
          exclusively for travel.
        </p>
        <p className="mt-3 text-sm font-medium text-navy/70">{pricingTrustNote}</p>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="mt-12 grid gap-6 rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:grid-cols-3 sm:p-8">
          {retainerValueNotes.map((note) => (
            <div key={note.title}>
              <p className="text-sm font-bold text-navy">{note.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">{note.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="mt-16" id="pricing">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {homePricingCopy.retainers.headline}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-navy/85 sm:text-base">
            {homePricingCopy.retainers.subheadline}
          </p>
        </FadeIn>
        <RetainerTierCards tiers={retainerTiers} />
        <RetainerComparisonTable />
      </div>

      <div className="mt-20" id="branding">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            {homePricingCopy.branding.headline}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-navy/85 sm:text-base">
            {homePricingCopy.branding.subheadline}
          </p>
        </FadeIn>
        <BrandIdentityTierCards tiers={brandIdentityTiers} />
      </div>

      <FadeIn delay={0.15}>
        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-navy/10 bg-surfaceMuted px-6 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-xl text-base font-medium text-navy">{discoveryCallCta.line}</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <PrimaryCta className="btn-cta shrink-0 px-6 py-3" />
            <BookingCta />
          </div>
        </div>
      </FadeIn>

      <div className="mt-16" id="ala-carte">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">À la carte pricing</h2>
          <p className="mt-2 max-w-2xl text-sm text-navy/85 sm:text-base">
            One-off posts, reels, flyers, and web — outside monthly retainers.
          </p>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-8">
          <ProjectPricingList items={projectOfferings} />
        </FadeIn>
      </div>
    </Section>
  );
}
