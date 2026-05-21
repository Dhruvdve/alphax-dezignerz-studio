"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { processSteps } from "@/content/experience";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { easeOut, viewport } from "@/lib/motion";

export function ProcessTimeline() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-14">
      <motion.div
        className="absolute left-[18px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-white/45 via-white/15 to-transparent sm:left-[22px]"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={viewport}
        transition={{ duration: 1.1, ease: easeOut }}
      />
      <StaggerGroup className="space-y-10" stagger={0.12}>
        {processSteps.map((step, i) => (
          <StaggerItem key={step.title}>
            <div className="relative grid gap-4 pl-14 sm:grid-cols-12 sm:gap-8 sm:pl-16">
              <motion.div
                className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 bg-white text-navy shadow-soft sm:left-1 sm:h-11 sm:w-11"
                whileInView={reduce ? undefined : { scale: [0.85, 1.05, 1] }}
                viewport={viewport}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Check className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <div className="sm:col-span-4">
                <span className="label-accent !mb-2">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/70 sm:col-span-8 sm:pt-7 sm:text-base">
                {step.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
