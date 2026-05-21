import Link from "next/link";
import { PrimaryCta } from "@/components/PrimaryCta";
import { ArrowLeft, X } from "lucide-react";
import type { LogoCaseStudy } from "@/content/logo-case-studies";
import { CaseStudyImage } from "@/components/CaseStudyImage";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

type LogoCaseStudyViewProps = {
  study: LogoCaseStudy;
};

export function LogoCaseStudyView({ study }: LogoCaseStudyViewProps) {
  return (
    <>
      <Section variant="white" className="pt-10 sm:pt-14">
        <FadeIn>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-navy/60">
            <Link href="/portfolio" className="font-semibold text-navy/80 hover:text-navy">
              Portfolio
            </Link>
            <span aria-hidden>/</span>
            <Link
              href="/#branding"
              className="font-semibold text-navy/80 hover:text-navy"
            >
              Logo & Branding
            </Link>
            <span aria-hidden>/</span>
            <span className="text-navy">{study.clientName}</span>
          </nav>

          <Link
            href="/portfolio"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy/75 transition hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <span className="label-accent mt-8">{study.industry}</span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            {study.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy/85">{study.intro}</p>
        </FadeIn>
      </Section>

      <Section variant="surface" className="!py-12 sm:!py-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-navy sm:text-2xl">The brief</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-navy/85">{study.challenge}</p>
        </FadeIn>
      </Section>

      <Section variant="white" className="!py-12 sm:!py-20">
        <FadeIn>
          <span className="label-accent">Process</span>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            Directions we explored — and why they stopped
          </h2>
          <p className="mt-3 max-w-2xl text-navy/75">
            Early concepts are part of the story. Here is what each direction meant, and why
            the client chose not to move forward.
          </p>
        </FadeIn>

        <ol className="mt-10 space-y-8 sm:space-y-10">
          {study.rejects.map((reject, i) => (
            <FadeIn key={reject.id} delay={i * 0.05}>
              <li className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="relative">
                    <CaseStudyImage
                      src={reject.imageSrc}
                      alt={reject.title}
                      aspectClass="aspect-square lg:aspect-[4/3] lg:min-h-full"
                      className="rounded-none lg:rounded-l-2xl lg:rounded-r-none"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                      <X className="h-3.5 w-3.5" aria-hidden />
                      Not selected
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-navy/50">
                      Exploration {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-navy">{reject.title}</h3>
                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy/85 sm:text-base">
                      <div>
                        <p className="font-semibold text-navy">What it meant</p>
                        <p className="mt-1">{reject.intent}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-navy">Why we moved on</p>
                        <p className="mt-1">{reject.whyRejected}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Section>

      <Section variant="navy" className="grain">
        <FadeIn>
          <span className="label-accent !bg-white/10 !text-white">Final identity</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{study.final.title}</h2>
          <p className="mt-4 max-w-2xl text-white/75">{study.final.summary}</p>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn delay={0.05}>
            <CaseStudyImage
              src={study.final.imageSrc}
              alt={`${study.clientName} final logo`}
              aspectClass="aspect-square"
              className="ring-white/20"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">What the final mark means</h3>
              <ul className="space-y-5">
                {study.final.meaning.map((point) => (
                  <li
                    key={point.title}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <p className="font-semibold text-white">{point.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                      {point.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="!py-12 sm:!py-20">
        <FadeIn>
          <span className="label-accent">In the wild</span>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            How it looks on real touchpoints
          </h2>
          <p className="mt-3 max-w-2xl text-navy/75">
            The approved system applied to social, print, and partner materials — so clients see
            the brand as they will use it day to day.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-8">
          <CaseStudyImage
            src={study.appliedImageSrc}
            alt={`${study.clientName} brand applied`}
            aspectClass="aspect-[4/3] sm:aspect-[16/10]"
          />
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-8 max-w-3xl leading-relaxed text-navy/85">{study.outcome}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryCta className="btn-cta" />
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition hover:border-navy/30"
            >
              More identity work →
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
