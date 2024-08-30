import { BASE_URL } from "@/constants/base-url";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
