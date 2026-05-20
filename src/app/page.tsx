import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Marquee } from "@/components/Marquee";
import { PortfolioPreviewGrid } from "@/components/PortfolioPreviewGrid";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { StatStrip } from "@/components/StatStrip";
import { TestimonialCard } from "@/components/TestimonialCard";
import { homeServiceOverview, siteConfig } from "@/content/site";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium social media design and branding for Indian travel agencies. Design that drives bookings.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="grain pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-soft-light" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              AlphaX Dezignerz Studio
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
              Premium social media design and branding for Indian travel agencies.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-card transition hover:-translate-y-0.5 hover:bg-surface"
              >
                See Our Work
              </Link>
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Get a Free Sample
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Marquee />

      <Section variant="surface" id="services">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Capabilities
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-navy sm:text-4xl">
            Everything your travel brand needs to look premium online.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            From daily posts to full retainers — crafted for agencies, DMCs, and tour
            operators who want clarity, consistency, and conversions.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServiceOverview.map((s, i) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              href={s.href}
              delay={i * 0.08}
            />
          ))}
        </div>
      </Section>

      <Section variant="navy" id="results">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Proof
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Results that compound.</h2>
            <p className="mt-4 text-white/75">
              Built with cold outreach, refined on retainers, and trusted by travel teams
              across India.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12">
          <StatStrip />
        </div>
      </Section>

      <Section variant="white" id="work">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
                Selected work for travel brands.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-accent transition hover:text-navy"
            >
              Explore all →
            </Link>
          </div>
        </FadeIn>
        <div className="mt-12">
          <PortfolioPreviewGrid />
        </div>
      </Section>

      <Section variant="surface" id="testimonials">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
            Trusted by teams who live in bookings.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.author}
              quote={t.quote}
              author={t.author}
              role={t.role}
              delay={i * 0.08}
            />
          ))}
        </div>
      </Section>

      <Section variant="navy" id="cta">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to grow your travel brand?</h2>
            <p className="mt-4 text-lg text-white/75">
              Tell us about your itineraries, offers, and platforms — we will reply on
              WhatsApp with next steps.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-[#1ebe5d] sm:w-auto"
              >
                Chat on WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                Contact form
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
