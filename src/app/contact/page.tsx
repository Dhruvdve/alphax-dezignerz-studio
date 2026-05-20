import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AlphaX Dezignerz Studio for travel social media design, branding, and retainers. WhatsApp, email, or the form — based in Ahmedabad, India.",
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Nirman House, 107, Ashram Rd, Navrangpura, Ahmedabad 380009",
)}&z=16&output=embed`;

export default function ContactPage() {
  return (
    <>
      <Section variant="navy" className="pt-12 sm:pt-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Contact</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let’s design your next season.</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            WhatsApp is the fastest channel for samples and timelines. Prefer email or the
            form? We respond within one business day.
          </p>
          <div className="mt-8">
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-card transition hover:bg-[#1ebe5d] sm:w-auto sm:px-12 sm:py-5 sm:text-lg"
            >
              Message on WhatsApp
            </Link>
          </div>
        </FadeIn>
      </Section>

      <Section variant="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy">Send a brief</h2>
            <p className="mt-2 text-muted">
              Include links to your current socials and any references you like — we will
              mirror your tone with sharper art direction.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
            <div className="mt-8 rounded-2xl border border-navy/5 bg-white p-6 text-sm text-muted shadow-soft">
              <p className="font-semibold text-navy">Email</p>
              <a
                className="mt-1 inline-block font-medium text-accent hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              <p className="mt-4 font-semibold text-navy">Phone</p>
              <a
                className="mt-1 inline-block font-medium text-accent hover:underline"
                href={`tel:${siteConfig.phoneTel}`}
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="text-2xl font-bold text-navy">Studio location</h2>
            <p className="mt-2 text-muted">
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
