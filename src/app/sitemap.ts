import type { MetadataRoute } from "next";
import { CITIES, getAllEvents } from "@/lib/events";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.1 },
    {
      url: `${siteUrl}/submit-event`,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    { url: `${siteUrl}/cities`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${siteUrl}/${city}`,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const eventRoutes: MetadataRoute.Sitemap = getAllEvents().map((event) => ({
    url: `${siteUrl}/${event.city}/${event.slug}`,
    lastModified: event.startDate,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...cityRoutes, ...eventRoutes];
}
