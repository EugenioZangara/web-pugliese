import type { MetadataRoute } from "next";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://dr-victor-pugliese.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/quien-soy",
        "/cirugia-mamaria",
        "/abdomen",
        "/gluteos",
        "/rinoplastia",
    ];

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}