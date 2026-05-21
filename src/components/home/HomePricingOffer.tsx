import Link from "next/link";
import { homePricingCopy } from "@/content/conversion";
import { brandIdentityTiers, pricingTrustNote, retainerTiers } from "@/content/services";
import { BrandIdentityTierCards } from "@/components/BrandIdentityTierCards";
import { RetainerTierCards } from "@/components/RetainerTierCards";
import { RetainerComparisonTable } from "@/components/RetainerComparisonTable";
import { FadeIn } from "@/components/FadeIn";

export function HomePricingOffer() {
  return (
    <div className="space-y-20">
      <div id="retainers">
        <FadeIn>
          <span className="label-accent">{homePricingCopy.retainers.eyebrow}</span>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            {homePricingCopy.retainers.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/85 sm:text-lg">
            {homePricingCopy.retainers.subheadline}
          </p>
        </FadeIn>
        <RetainerTierCards tiers={retainerTiers} ringOffsetClass="ring-offset-white" />
        <RetainerComparisonTable />
      </div>

      <div id="branding">
        <FadeIn>
          <span className="label-accent">{homePricingCopy.branding.eyebrow}</span>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            {homePricingCopy.branding.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/85 sm:text-lg">
            {homePricingCopy.branding.subheadline}
          </p>
        </FadeIn>
        <BrandIdentityTierCards tiers={brandIdentityTiers} />
      </div>

      <FadeIn>
        <p className="text-center text-sm font-medium text-navy/70 sm:text-base">
          {pricingTrustNote}
        </p>
        <p className="mt-4 text-center">
          <Link
            href="/services#ala-carte"
            className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            View à la carte pricing (from ₹300/post) →
          </Link>
        </p>
      </FadeIn>
    </div>
  );
}
