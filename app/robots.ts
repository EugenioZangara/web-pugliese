import type { MetadataRoute } from "next";

const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://web-pugliese.vercel.app";

const siteUrl = rawSiteUrl.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}