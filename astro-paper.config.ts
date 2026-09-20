import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://reyniernunez-collab.github.io/reynier-market-insights/",
    title: "Reynier Market Insights",
    description: "Market Insights in 5 minutes. No hype, just what matters.",
    author: "Reynier Nunez Lopez",
    profile: "https://github.com/reyniernunez-collab",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Chicago",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/reyniernunez-collab" },
    { name: "instagram", url: "https://instagram.com/reyniermarketinsights" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
