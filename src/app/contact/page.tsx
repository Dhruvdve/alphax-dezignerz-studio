import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { PrimaryCta } from "@/components/PrimaryCta";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/content/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  alternates: { canonical: "/contact" },
});

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Nirman House, 107, Ashram Rd, Navrangpura, Ahmedabad 380009",
)}&z=16&output=embed`;

export default function ContactPage() {
  return (
    <>
      <Section variant="navy" className="pt-12 sm:pt-16">
        <FadeIn>
          <span className="label-accent">Contact</span>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let’s design your next season.</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            WhatsApp is the fastest channel for samples and timelines. Prefer email or the
            form? We respond within one business day.
          </p>
          <div className="mt-8">
            <PrimaryCta className="btn-cta w-full px-8 py-4 text-base sm:w-auto sm:px-12 sm:py-5 sm:text-lg" />
          </div>
        </FadeIn>
      </Section>

      <Section variant="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy">Send a brief</h2>
            <p className="mt-2 text-navy/90">
              Include links to your current socials and any references you like — we will
              mirror your tone with sharper art direction.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
            <div className="mt-8 rounded-2xl border border-navy/5 bg-white p-6 text-sm text-navy/80 shadow-soft">
              <p className="font-semibold text-navy">Email</p>
              <a
                className="mt-1 inline-block font-medium text-navy underline decoration-navy/30 hover:decoration-navy"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              <p className="mt-4 font-semibold text-navy">Phone</p>
              <a
                className="mt-1 inline-block font-medium text-navy underline decoration-navy/30 hover:decoration-navy"
                href={`tel:${siteConfig.phoneTel}`}
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="text-2xl font-bold text-navy">Studio location</h2>
            <p className="mt-2 text-navy/85">
              {siteConfig.address.line1}, {siteConfig.address.city} {siteConfig.address.postalCode}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-navy/10 shadow-card">
              <iframe
                title="AlphaX Dezignerz Studio on Google Maps"
                src={mapSrc}
                className="h-80 w-full border-0 lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
