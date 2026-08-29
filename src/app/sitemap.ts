import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.diarchmarketing.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/why-paper-bags",
    "/portfolio",
    "/gallery",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
