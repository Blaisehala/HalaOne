import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/get-started",
    "/services/audit",
    "/services/lifecycle",
    "/services/managed-program",
    "/industries/property-management",
    "/resources",
    "/resources/why-property-managers-lose-track-of-building-tech",
    "/resources/what-is-itam-and-why-it-matters",
    "/about",
    "/founder",
    "/privacy",
    "/terms",
  ];
  return paths.map((path) => ({
    url: `${company.url}${path}`,
    lastModified: new Date("2026-09-15"),
  }));
}
