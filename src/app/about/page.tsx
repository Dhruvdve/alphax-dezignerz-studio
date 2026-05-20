import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AlphaX Dezignerz Studio is a solo freelance design practice in Ahmedabad focused on travel agencies across India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Section variant="surface" className="pt-12 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">About</p>
          <h1 className="mt-3 text-4xl font-bold text-navy sm:text-5xl">
            A studio built for travel, not generic feeds.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            AlphaX Dezignerz Studio is a solo freelance practice based in{" "}
            <span className="font-semibold text-navy">Ahmedabad, Gujarat</span>, specializing
            exclusively in travel agency design. What started with cold outreach is now a
            roster of retainer clients across India — from Ladakh bike trip brands to B2B
            DMCs and honeymoon specialists who need visuals that convert.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Every layout is informed by how travelers actually decide: clarity on routes,
            confidence in operators, and urgency on limited seats. That is the lens behind
            every post, flyer, and reel frame.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-navy/5 bg-white p-8 shadow-card">
            <h2 className="text-xl font-bold text-navy">Led by {siteConfig.owner}</h2>
            <p className="mt-2 text-sm font-semibold text-accent">{siteConfig.ownerTitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Hands-on creative direction on every engagement — from discovery to delivery.
            </p>
            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-navy">Core toolkit</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>Adobe Illustrator — precision layouts and scalable brand systems</li>
                <li>Adobe Photoshop — retouching, composites, campaign assets</li>
                <li>After Effects — motion-first reels and story-driven animations</li>
                <li>Custom JSX automation — faster variants without sacrificing craft</li>
              </ul>
            </div>
            <div className="mt-8 rounded-2xl bg-surface p-5">
              <p className="text-sm font-semibold text-navy">Let’s collaborate</p>
              <p className="mt-2 text-sm text-muted">
                Share a brief or sample itinerary — we will show you how the feed could look
                in week one.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
