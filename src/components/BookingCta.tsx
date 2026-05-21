import Link from "next/link";
import { Calendar } from "lucide-react";
import { discoveryBookingCta } from "@/content/cta";

type BookingCtaProps = {
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
};

export function BookingCta({
  className = "inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition hover:border-navy/30 hover:shadow-card",
  showIcon = true,
  onClick,
}: BookingCtaProps) {
  return (
    <Link
      href={discoveryBookingCta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {showIcon ? <Calendar className="h-4 w-4 shrink-0" aria-hidden /> : null}
      {discoveryBookingCta.label}
    </Link>
  );
}
