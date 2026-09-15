import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/contact", "/founder", "/privacy", "/terms"];
  return paths.map((path) => ({
    url: `${company.url}${path}`,
    lastModified: new Date("2026-09-15"),
  }));
}
