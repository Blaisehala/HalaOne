import { company } from "@/lib/company";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: company.url,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "McLean",
      addressRegion: "VA",
      addressCountry: "US",
    },
    description:
      "HalaOne helps organizations understand, organize, and manage technology assets and infrastructure.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
