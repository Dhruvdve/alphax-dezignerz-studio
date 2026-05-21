"use client";

import { motion, useReducedMotion } from "framer-motion";
import { problemSolutionSection } from "@/content/conversion";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { viewport } from "@/lib/motion";

export function ProblemSolution() {
  const reduce = useReducedMotion();
  const { oldWay, alphaXWay } = problemSolutionSection;

  return (
    <Section variant="white" id="logic">
      <FadeIn>
        <span className="label-accent">{problemSolutionSection.eyebrow}</span>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
          {problemSolutionSection.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/90 sm:text-lg">
          {problemSolutionSection.intro}
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <motion.article
          className="rounded-2xl border border-navy/10 bg-surfaceMuted p-6 sm:p-8"
          initial={reduce ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-navy/55">
            {oldWay.label}
          </p>
          <ul className="mt-5 space-y-4">
            {oldWay.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-navy/85 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/35" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="rounded-2xl border border-navy/15 bg-navy p-6 text-white shadow-card sm:p-8"
          initial={reduce ? false : { opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
            {alphaXWay.label}
          </p>
          <ul className="mt-5 space-y-4">
            {alphaXWay.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-white/88 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>

      <FadeIn delay={0.1}>
        <p className="mt-10 text-center text-lg font-semibold text-navy sm:text-xl">
          {problemSolutionSection.tagline}
        </p>
      </FadeIn>
    </Section>
  );
}
