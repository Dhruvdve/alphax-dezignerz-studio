import Link from "next/link";
import { Section } from "@/components/Section";

export default function LogoCaseStudyNotFound() {
  return (
    <Section variant="white" className="pt-20 text-center">
      <h1 className="text-2xl font-bold text-navy">Case study not found</h1>
      <p className="mt-3 text-navy/75">This logo project does not exist or was moved.</p>
      <Link href="/portfolio" className="btn-cta mt-8 inline-flex">
        Back to portfolio
      </Link>
    </Section>
  );
}
