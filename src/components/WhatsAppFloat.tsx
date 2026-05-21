"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { primaryCta } from "@/content/cta";

export function WhatsAppFloat() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={reduce ? false : { opacity: 0, scale: 0.6, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.8 }}
    >
      <Link
        href={primaryCta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-110 hover:shadow-lg focus-visible:focus-ring ${
          reduce ? "" : "animate-wa-pulse"
        }`}
        aria-label={primaryCta.label}
      >
        <MessageCircle className="h-7 w-7" />
      </Link>
    </motion.div>
  );
}
