import { siteConfig } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.jpg`,
  logo: `${siteConfig.url}/images/alphax-logo.svg`,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.linkedinUrl,
    siteConfig.behanceUrl,
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
