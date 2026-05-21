"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clapperboard, Layers, Mic, Target } from "lucide-react";
import { bentoFeatures } from "@/content/experience";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

const icons = {
  layers: Layers,
  target: Target,
  clapperboard: Clapperboard,
  mic: Mic,
} as const;

export function BentoFeatures() {
  const reduce = useReducedMotion();

  return (
    <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2" stagger={0.1}>
      {bentoFeatures.map((item) => {
        const Icon = icons[item.icon];
        return (
          <StaggerItem key={item.title}>
            <motion.div
              className="group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-white via-white to-surface p-7 shadow-soft"
              whileHover={
                reduce
                  ? undefined
                  : { y: -8, boxShadow: "0 12px 40px -12px rgba(26, 59, 93, 0.22)" }
              }
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
            >
              <motion.div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-navy/8 blur-2xl"
                animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <motion.div
                  className="inline-flex rounded-2xl border border-navy/10 bg-white p-3 shadow-sm"
                  whileHover={reduce ? undefined : { rotate: [-2, 2, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="h-6 w-6 text-navy" />
                </motion.div>
                <span className="rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy/55">
                  Premium ops
                </span>
              </div>
              <h3 className="relative mt-5 text-xl font-bold text-navy">{item.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-navy/85">{item.description}</p>
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
