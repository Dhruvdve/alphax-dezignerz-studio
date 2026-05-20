import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <Link
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105 hover:shadow-lg focus-visible:focus-ring"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
