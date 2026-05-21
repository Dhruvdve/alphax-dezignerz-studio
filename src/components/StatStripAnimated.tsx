"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { statsForHome } from "@/content/site";

function CountUp({
  end,
  suffix,
  durationMs,
}: {
  end: number;
  suffix: string;
  durationMs: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(end);
      return;
    }

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.max(0, Math.round(end * eased)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, durationMs, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function StatStripAnimated() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsForHome.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          whileHover={
            reduce
              ? undefined
              : { y: -4, scale: 1.02, transition: { duration: 0.25 } }
          }
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_80px_-40px_rgba(0,0,0,0.55)] backdrop-blur-md"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-70" />
          <div className="relative">
            <p className="text-3xl font-bold text-white sm:text-4xl">
              {s.kind === "text" ? (
                s.value
              ) : (
                <CountUp end={s.end} suffix={s.suffix} durationMs={1100 + i * 120} />
              )}
            </p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
