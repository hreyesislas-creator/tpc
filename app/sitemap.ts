import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { LANDING_SLUGS } from "@/lib/landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.origin,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Hub / topical-authority pages
    ...["vehicles", "service-areas"].map((slug) => ({
      url: `${SITE.origin}/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...LANDING_SLUGS.map((slug) => ({
      url: `${SITE.origin}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
