"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { PrimaryCta } from "@/components/PrimaryCta";
import { BookingCta } from "@/components/BookingCta";
import { primaryCta } from "@/content/cta";
import { easeOut } from "@/lib/motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-navy"
      initial={false}
      animate={{
        boxShadow: scrolled
          ? "0 8px 32px -8px rgba(0,0,0,0.45)"
          : "0 0 0 0 rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35, ease: easeOut }}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <BrandLogo onClick={close} className="shrink-0" />

        <nav
          className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-lg px-3.5 py-2 text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <BookingCta className="hidden rounded-full border border-white/20 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-white/10 xl:inline-flex xl:text-xs" showIcon={false} />
          <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <PrimaryCta className="btn-cta hidden px-3.5 py-2 text-xs sm:inline-flex sm:px-4 sm:text-sm max-lg:[&]:text-[11px] max-lg:[&]:px-3" />
          </motion.div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <BookingCta
                className="mt-4 w-full justify-center rounded-full border border-white/20 bg-white/10 py-3.5 text-center text-sm font-semibold text-white"
                onClick={close}
              />
              <Link
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="btn-cta mt-3 w-full py-3.5 text-center text-sm"
              >
                {primaryCta.label}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
