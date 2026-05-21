/** Shared motion tokens — respects prefers-reduced-motion in components */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSnappy = { type: "spring", stiffness: 380, damping: 28 } as const;

export const viewport = { once: true, margin: "-8% 0px" as const };

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeOut },
  },
} as const;

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};
