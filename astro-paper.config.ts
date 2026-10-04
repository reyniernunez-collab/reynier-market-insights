import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://reyniernunez-collab.github.io/reynier-market-insights/",
    title: "Reynier Market Insights",
    // Default (Spanish) description. Localized versions live in src/i18n/lang/*.ts
    description:
      "Los mercados en 5 minutos: qué pasó, por qué importa y qué vigilo. Sin hype, solo lo que importa.",
    author: "Reynier Nunez Lopez",
    profile: "https://github.com/reyniernunez-collab",
    // No static file in public/ → the branded /og.png is generated at build time.
    ogImage: "og.png",
    lang: "es",
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
    { name: "instagram", url: "https://instagram.com/reyniermarketinsights" },
    { name: "github", url: "https://github.com/reyniernunez-collab" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=Reynier%20Market%20Insights&body=" },
  ],
  /**
   * Newsletter signup (disabled until you pick a provider).
   * Set `enabled: true` and paste the form action URL from your provider
   * (Buttondown, Beehiiv, Kit/ConvertKit, Substack embed, Mailchimp…).
   * Nothing is rendered while disabled.
   */
  newsletter: {
    enabled: false,
    provider: "",
    formAction: "",
    emailFieldName: "email",
  },
  /**
   * Privacy-friendly analytics (disabled until configured).
   * - Plausible: { provider: "plausible", domain: "your-domain" }
   * - Umami:     { provider: "umami", websiteId: "xxxx", src: "https://cloud.umami.is/script.js" }
   * - GoatCounter: { provider: "goatcounter", code: "yourcode" }
   */
  analytics: {
    provider: null,
  },
});
