"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { AnimatedArrow, MotionHoverGroup } from "@/components/AnimatedArrow";
import { heroPills } from "@/content/experience";
import { heroCtas, heroSubline, studioSnapshot } from "@/content/conversion";
import { siteConfig } from "@/content/site";
import { PrimaryCta } from "@/components/PrimaryCta";
import { BookingCta } from "@/components/BookingCta";

export function HeroAdvanced() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-soft-light" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.14),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(26,59,93,0.9))]" />

      {!reduce ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-24 h-[420px] w-[420px] rounded-full bg-white/18 blur-3xl"
            animate={{ y: [0, 18, 0], opacity: [0.45, 0.65, 0.45] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-10 h-[380px] w-[380px] rounded-full bg-white/12 blur-3xl"
            animate={{ y: [0, -14, 0], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 lg:grid-cols-12 lg:px-8 lg:pt-28">
        <div className="lg:col-span-7">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="label-accent !mb-0 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AlphaX Dezignerz Studio
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-[1.65] text-white/88 sm:text-xl md:text-2xl md:leading-relaxed"
          >
            {heroSubline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {heroPills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur-md sm:text-sm"
              >
                {p}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <PrimaryCta className="btn-cta px-7 py-3.5 shadow-[0_12px_40px_-12px_rgba(197,34,111,0.45)] transition hover:-translate-y-0.5" />
            <BookingCta className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15" />
            <Link
              href={heroCtas.secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition hover:border-white/35 hover:bg-white/5 hover:text-white"
            >
              <MotionHoverGroup className="gap-2">
                {heroCtas.secondary.label}
                <AnimatedArrow />
              </MotionHoverGroup>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-8">
              <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400" aria-hidden />
                <span className="text-xs font-medium text-white/90">
                  {studioSnapshot.rating}
                </span>
              </div>

              <p className="mt-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-[1.65rem]">
                {studioSnapshot.heading}
              </p>

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="space-y-7">
                {studioSnapshot.rows.map((row) => (
                  <div key={row.label} className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                      {row.label}
                    </p>
                    <p className="mt-2.5 text-sm leading-snug text-white">
                      <span className="font-bold">{row.title}</span>
                      <span className="font-normal text-white/80"> — {row.detail}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 shadow-inner backdrop-blur-md ring-1 ring-white/10">
                <p className="text-sm italic leading-relaxed text-white/80">
                  &ldquo;{studioSnapshot.quoteBefore}
                  <span className="font-bold not-italic text-white">
                    {studioSnapshot.quoteEmphasis}
                  </span>
                  {studioSnapshot.quoteAfter}&rdquo;
                </p>
                <p className="mt-4 text-sm font-bold text-white">
                  {studioSnapshot.attribution.name}
                  <span className="font-normal text-white/60">
                    {" "}
                    · {studioSnapshot.attribution.role}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
