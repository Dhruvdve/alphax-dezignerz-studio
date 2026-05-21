"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { RetainerTier } from "@/content/services";
import { PrimaryCta } from "@/components/PrimaryCta";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

type RetainerTierCardsProps = {
  tiers: RetainerTier[];
  /** Homepage uses white ring offset; services page uses surface */
  ringOffsetClass?: string;
};

export function RetainerTierCards({
  tiers,
  ringOffsetClass = "ring-offset-surfaceMuted",
}: RetainerTierCardsProps) {
  const reduce = useReducedMotion();

  return (
    <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3" stagger={0.1}>
      {tiers.map((tier) => (
        <StaggerItem key={tier.id}>
          <motion.article
            className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft sm:p-8 ${
              tier.recommended
                ? `border-navy ring-2 ring-navy/15 ring-offset-2 ${ringOffsetClass}`
                : "border-navy/10"
            }`}
            whileHover={
              reduce
                ? undefined
                : { y: -8, boxShadow: "0 12px 40px -12px rgba(26, 59, 93, 0.18)" }
            }
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
          >
            {tier.badge ? (
              <span
                className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-sm ${
                  tier.badge === "Most Popular"
                    ? "text-white"
                    : "bg-white text-navy ring-2 ring-navy/20"
                }`}
                style={
                  tier.badge === "Most Popular" ? { backgroundColor: "#2E4BDB" } : undefined
                }
              >
                {tier.badge}
              </span>
            ) : null}
            <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
            <p className="mt-3 text-2xl font-semibold text-navy">{tier.price}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm text-navy/90">
              {tier.features.map((f) => (
                <li key={f.title} className="leading-snug font-medium text-navy">
                  {f.title}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic text-navy/75">{tier.bestFor}</p>
            <PrimaryCta
              className={`mt-6 w-full justify-center py-3 text-center text-sm ${
                tier.recommended ? "btn-cta" : "btn-cta"
              }`}
            />
          </motion.article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
