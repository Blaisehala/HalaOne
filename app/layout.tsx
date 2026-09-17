import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/company";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "HalaOne | IT Asset Management (ITAM)",
    template: "%s | HalaOne",
  },
  description:
    "HalaOne delivers IT Asset Management (ITAM) for organizations that need to inventory, track, and account for the technology assets and infrastructure supporting their operations.",
  keywords: [
    "IT asset management",
    "ITAM",
    "technology asset management",
    "asset inventory and audit",
    "technology infrastructure",
    "technology lifecycle management",
    "building technology",
  ],
  openGraph: {
    title: "HalaOne | IT Asset Management (ITAM)",
    description:
      "IT Asset Management for the technology assets and infrastructure that support your operations.",
    url: company.url,
    siteName: "HalaOne",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HalaOne | IT Asset Management (ITAM)",
    description:
      "HalaOne delivers IT Asset Management (ITAM) for organizations that need to inventory, track, and account for their technology assets and infrastructure.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <JsonLd />
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
