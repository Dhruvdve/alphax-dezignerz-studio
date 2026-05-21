"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ServiceOffering } from "@/content/services";
import { staggerContainer, staggerItem, viewport } from "@/lib/motion";

function PriceCell({ price, priceNote }: Pick<ServiceOffering, "price" | "priceNote">) {
  return (
    <div className="shrink-0 text-right sm:min-w-[9.5rem]">
      <p className="text-lg font-bold tabular-nums text-navy sm:text-xl">{price}</p>
      {priceNote ? (
        <p className="mt-0.5 text-xs font-medium text-navy/55">{priceNote}</p>
      ) : null}
    </div>
  );
}

type ProjectPricingListProps = {
  items: ServiceOffering[];
};

export function ProjectPricingList({ items }: ProjectPricingListProps) {
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
      <div className="hidden border-b border-navy/10 bg-surfaceMuted px-6 py-3 sm:grid sm:grid-cols-[1fr_auto] sm:gap-8">
        <span className="text-xs font-bold uppercase tracking-wide text-navy/60">Service</span>
        <span className="text-right text-xs font-bold uppercase tracking-wide text-navy/60">
          Price
        </span>
      </div>

      <motion.ul
        className="divide-y divide-navy/10"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={reduce ? undefined : staggerContainer(0.06)}
      >
        {items.map((item) => (
          <motion.li
            key={item.name}
            variants={reduce ? undefined : staggerItem}
            className="px-5 py-5 sm:grid sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:px-6 sm:py-6"
            whileHover={reduce ? undefined : { backgroundColor: "rgba(244, 246, 248, 0.9)" }}
          >
            <div className="flex items-start justify-between gap-4 sm:block">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-navy">{item.name}</h3>
                {item.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-navy/80">{item.description}</p>
                ) : null}
              </div>
              <div className="sm:hidden">
                <PriceCell price={item.price} priceNote={item.priceNote} />
              </div>
            </div>
            <div className="hidden sm:block">
              <PriceCell price={item.price} priceNote={item.priceNote} />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
