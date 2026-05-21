"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LayoutGrid, PanelsTopLeft, PenTool, Video } from "lucide-react";
import { AnimatedArrow, MotionHoverGroup } from "@/components/AnimatedArrow";
import { MotionCategoryCard } from "@/components/MotionCategoryCard";
import { categoryNavCopy } from "@/content/conversion";
import { categoryQuickLinks } from "@/content/portfolio";
import { useCategoryHash } from "@/lib/useCategoryHash";

const icons = {
  video: Video,
  grid: LayoutGrid,
  pen: PenTool,
  pages: PanelsTopLeft,
} as const;

export function CategoryQuickLinks({ variant = "hero" }: { variant?: "hero" | "inline" }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const onPortfolio = pathname === "/portfolio";
  const canScrollHere = onHome || onPortfolio;
  const basePath = onPortfolio ? "/portfolio" : "/";
  const { activeHash, scrollToCategory } = useCategoryHash();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || hash === "work") return;
    const t = window.setTimeout(() => scrollToCategory(hash), 150);
    return () => window.clearTimeout(t);
  }, [pathname, scrollToCategory]);

  const isHero = variant === "hero";

  return (
    <section
      aria-label="Browse work by category"
      className={
        isHero
          ? "relative z-20 border-b border-white/10 bg-navy/95 px-4 pb-8 pt-2 backdrop-blur-md sm:px-6"
          : "mb-10"
      }
    >
      <div className={isHero ? "mx-auto max-w-6xl" : ""}>
        <div className={`text-center ${isHero ? "mb-3" : "mb-4"}`}>
          <p
            className={`text-xs font-bold uppercase tracking-[0.2em] ${
              isHero ? "text-white/55" : "text-navy/50"
            }`}
          >
            {categoryNavCopy.title}
          </p>
          <p
            className={`mt-1 text-sm ${isHero ? "text-white/75" : "text-navy/70"}`}
          >
            {categoryNavCopy.subtitle}
          </p>
        </div>

        <div
          className={
            isHero
              ? "rounded-2xl border border-white/15 bg-white/10 p-2 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-3"
              : "rounded-2xl border border-navy/10 bg-white p-2 shadow-soft sm:p-3"
          }
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {categoryQuickLinks.map((link) => {
              const Icon = icons[link.icon];
              const href = `${basePath}#${link.anchorId}`;
              const active = activeHash === link.anchorId;

              return (
                <MotionCategoryCard
                  key={link.anchorId}
                  href={href}
                  active={active}
                  isHero={isHero}
                  label={link.label}
                  Icon={Icon}
                  onClick={(e) => {
                    if (!canScrollHere) return;
                    e.preventDefault();
                    scrollToCategory(link.anchorId);
                  }}
                />
              );
            })}
          </div>

          <div className={`mt-2 border-t pt-2 ${isHero ? "border-white/10" : "border-navy/10"}`}>
            <Link
              href={onHome ? categoryNavCopy.seeAllHref : onPortfolio ? "/portfolio" : "/#work"}
              onClick={(e) => {
                if (!onHome && !onPortfolio) return;
                e.preventDefault();
                const target = document.getElementById(onHome ? "work" : "portfolio-root");
                target?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", onHome ? "/#work" : "/portfolio");
              }}
              className={`flex w-full items-center justify-center gap-1 rounded-xl py-3 text-sm font-semibold transition ${
                isHero
                  ? "text-white/90 hover:bg-white/10"
                  : "text-navy hover:bg-surfaceMuted"
              }`}
            >
              <MotionHoverGroup className="gap-2">
                {categoryNavCopy.seeAllWork}
                <AnimatedArrow />
              </MotionHoverGroup>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
