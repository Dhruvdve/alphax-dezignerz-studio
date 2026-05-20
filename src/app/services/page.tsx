import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { serviceOfferings } from "@/content/services";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Social media posts, branding, retainers, and automation for travel agencies in India — transparent pricing from AlphaX Dezignerz Studio.",
  alternates: { canonical: "/services" },
  keywords: [
    "social media design travel company",
    "content calendar travel agency",
    "logo design travel company india",
  ],
};

export default function ServicesPage() {
  return (
    <Section variant="surface" className="pt-12 sm:pt-16">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Services</p>
        <h1 className="mt-3 text-4xl font-bold text-navy sm:text-5xl">Services & pricing</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Clear packages for travel brands. Retainers include calendars, strategy, and reel
          voiceover scripts. JSX automation is scoped to your workflow.
        </p>
      </FadeIn>

      <div className="mt-14 space-y-5">
        {serviceOfferings.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.05}>
            <article className="rounded-2xl border border-navy/5 bg-white p-6 shadow-soft transition hover:shadow-card sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-navy">{s.name}</h2>
                  {s.description ? (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {s.description}
                    </p>
                  ) : null}
                </div>
                <p className="text-lg font-semibold text-accent sm:text-right">{s.price}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.15}>
        <div className="mt-14 rounded-2xl border border-accent/20 bg-navy p-8 text-white shadow-card">
          <h2 className="text-2xl font-bold">Need a custom bundle?</h2>
          <p className="mt-3 text-white/75">
            Share your platforms, posting frequency, and campaign goals — we will propose a
            lean package. Reach us at{" "}
            <a className="font-semibold text-accent underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            or WhatsApp for the fastest reply.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
