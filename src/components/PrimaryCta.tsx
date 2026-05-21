import Link from "next/link";
import { primaryCta } from "@/content/cta";

type PrimaryCtaProps = {
  className?: string;
};

export function PrimaryCta({ className = "btn-cta" }: PrimaryCtaProps) {
  return (
    <Link
      href={primaryCta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {primaryCta.label}
    </Link>
  );
}
