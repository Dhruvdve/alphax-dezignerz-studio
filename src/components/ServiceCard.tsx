"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StaggerItem } from "@/components/Stagger";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  const reduce = useReducedMotion();

  return (
    <StaggerItem>
      <motion.div whileHover={reduce ? undefined : { y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
        <Link
          href={href}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-white via-white to-surface p-6 shadow-soft ring-1 ring-black/5 transition hover:border-navy/25 hover:shadow-card"
        >
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileHover={reduce ? undefined : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.35 }}
          />
          <div className="relative flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-navy">{title}</h3>
            <motion.span
              className="shrink-0 text-navy opacity-70"
              whileHover={reduce ? undefined : { x: 3, y: -3 }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.span>
          </div>
          <p className="relative mt-3 text-sm leading-relaxed text-navy/85">{description}</p>
        </Link>
      </motion.div>
    </StaggerItem>
  );
}
