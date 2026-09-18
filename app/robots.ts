import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://prashant-112-coder.github.io/myportfolio/sitemap.xml",
  };
}
