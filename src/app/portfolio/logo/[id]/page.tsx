import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LogoCaseStudyView } from "@/components/LogoCaseStudyView";
import { Section } from "@/components/Section";
import {
  getLogoCaseStudy,
  logoCaseStudyIds,
} from "@/content/logo-case-studies";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return logoCaseStudyIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const study = getLogoCaseStudy(id);
  if (!study) return { title: "Case study" };

  return {
    title: `${study.clientName} — Logo process`,
    description: study.intro,
    alternates: { canonical: `/portfolio/logo/${id}` },
  };
}

export default async function LogoCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const study = getLogoCaseStudy(id);

  if (!study) {
    notFound();
  }

  return <LogoCaseStudyView study={study} />;
}
