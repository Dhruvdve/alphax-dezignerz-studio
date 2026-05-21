"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut, viewport } from "@/lib/motion";

export type FadeInVariant = "up" | "down" | "left" | "right" | "scale" | "blur";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: FadeInVariant;
};

const variantMap: Record<FadeInVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  down: {
    hidden: { opacity: 0, y: -24 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 28 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "up",
}: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variantMap[variant]}
      transition={{ duration: 0.6, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}
