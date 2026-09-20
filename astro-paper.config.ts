import { defineConfig } from "./src/config/types/config";

export default defineConfig({
  site: {
    title: "Reynier Market Insights",
    desc: "Market Insights in 5 minutes. No hype, just what matters. What happened, why it matters, what I'm doing.",
    website: "https://reyniernunez-collab.github.io/reynier-market-insights/",
    author: "Reynier Nunez",
    ogImage: "default-og.jpg",
  },
  posts: {
    perPage: 6,
  },
  socials: [
    {
      name: "Github",
      href: "https://github.com/reyniernunez-collab",
      linkTitle: "Reynier on Github",
      active: true,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/reyniermarketinsights",
      linkTitle: "Reynier on Instagram",
      active: true,
    },
  ],
});
