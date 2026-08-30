import { projects } from "@/data/projects";

const BASE = "https://pradeepyadav.dev";

export default function sitemap() {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${BASE}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    })),
  ];
}
