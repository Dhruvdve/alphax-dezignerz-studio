"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { springSnappy } from "@/lib/motion";

type AnimatedArrowProps = {
  direction?: "right" | "upRight";
  className?: string;
  /** `group` = animate when a parent has Tailwind `group` + hover; `motion` = parent uses MotionHoverGroup */
  trigger?: "group" | "motion";
};

/**
 * Arrow slides on hover; a line grows behind it. Use `trigger="group"` inside `group` cards.
 */
export function AnimatedArrow({
  direction = "right",
  className = "h-4 w-4",
  trigger = "motion",
}: AnimatedArrowProps) {
  const reduce = useReducedMotion();
  const Icon = direction === "upRight" ? ArrowUpRight : ArrowRight;

  if (reduce) {
    return <Icon className={className} aria-hidden />;
  }

  if (trigger === "group") {
    return (
      <span
        className="relative inline-flex h-4 w-7 items-center justify-end overflow-visible"
        aria-hidden
      >
        <span
          className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 origin-left scale-x-0 rounded-full bg-current opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:opacity-85`}
        />
        <Icon
          className={`relative z-[1] ${className} transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 ${
            direction === "upRight" ? "group-hover:-translate-y-1" : ""
          }`}
          strokeWidth={2.25}
        />
      </span>
    );
  }

  const hoverMotion =
    direction === "upRight"
      ? { x: 4, y: -4, rotate: 0 }
      : { x: 6, y: 0, rotate: 0 };

  return (
    <span
      className="relative inline-flex h-4 w-7 items-center justify-end overflow-visible"
      aria-hidden
    >
      <motion.span
        className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-current"
        initial={{ scaleX: 0, opacity: 0 }}
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 0.85 },
        }}
        style={{ originX: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="relative z-[1] inline-flex"
        variants={{
          rest: { x: 0, y: 0 },
          hover: hoverMotion,
        }}
        transition={springSnappy}
      >
        <Icon className={className} strokeWidth={2.25} />
      </motion.span>
    </span>
  );
}

/** Wrap link/button with `group` + motion hover so AnimatedArrow variants fire */
export function MotionHoverGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={`group ${className}`}>{children}</span>;
  }

  return (
    <motion.span
      className={`group inline-flex items-center ${className}`}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      variants={{
        rest: {},
        hover: {},
      }}
    >
      {children}
    </motion.span>
  );
}
