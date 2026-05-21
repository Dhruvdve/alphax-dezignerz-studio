"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { springSnappy } from "@/lib/motion";

type MotionCategoryCardProps = {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  active: boolean;
  isHero: boolean;
  label: string;
  Icon: LucideIcon;
};

export function MotionCategoryCard({
  href,
  onClick,
  active,
  isHero,
  label,
  Icon,
}: MotionCategoryCardProps) {
  const reduce = useReducedMotion();

  const baseClass = `flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-center sm:px-4 sm:py-5 ${
    isHero
      ? active
        ? "border-white/40 bg-white/20 shadow-lg ring-2 ring-white/30"
        : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/12"
      : active
        ? "border-navy bg-surfaceMuted shadow-soft ring-2 ring-navy/15"
        : "border-navy/10 bg-surfaceMuted/50 hover:border-navy/25 hover:bg-surfaceMuted"
  }`;

  if (reduce) {
    return (
      <Link href={href} onClick={onClick} className={baseClass}>
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
            isHero
              ? "border-white/15 bg-white/10 text-white"
              : "border-navy/10 bg-white text-navy shadow-sm"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <span
          className={`text-xs font-semibold leading-tight sm:text-sm ${
            isHero ? "text-white" : "text-navy"
          }`}
        >
          {label}
        </span>
      </Link>
    );
  }

  return (
    <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.97 }} transition={springSnappy}>
      <Link href={href} onClick={onClick} className={baseClass}>
        <motion.span
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
            isHero
              ? "border-white/15 bg-white/10 text-white"
              : "border-navy/10 bg-white text-navy shadow-sm"
          }`}
          whileHover={{ scale: 1.08, rotate: isHero ? 0 : -3 }}
          transition={springSnappy}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </motion.span>
        <span
          className={`text-xs font-semibold leading-tight sm:text-sm ${
            isHero ? "text-white" : "text-navy"
          }`}
        >
          {label}
        </span>
      </Link>
    </motion.div>
  );
}
