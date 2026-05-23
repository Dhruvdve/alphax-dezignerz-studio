import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { ScarcityBanner } from "@/components/ScarcityBanner";
import { LeadMagnetPopup } from "@/components/LeadMagnetPopup";
import { rootMetadata } from "@/content/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#1A3B5D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className={`min-h-screen ${plusJakarta.className}`}>
        <JsonLd />
        <ScarcityBanner />
        <SiteHeader />
        <main className="pb-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <LeadMagnetPopup />
      </body>
    </html>
  );
}
