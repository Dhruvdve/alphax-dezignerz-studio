import { marqueeClients } from "@/content/site";

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy py-4 text-white">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 items-center justify-around gap-8 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-base">
          {marqueeClients.map((name) => (
            <span key={name} className="whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
        <div
          className="flex w-1/2 items-center justify-around gap-8 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-base"
          aria-hidden
        >
          {marqueeClients.map((name) => (
            <span key={`dup-${name}`} className="whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
