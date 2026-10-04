import type { UIStrings } from "../types";

export default {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
    languageName: "English",
    shortName: "EN",
  },
  site: {
    description:
      "Markets in 5 minutes: what happened, why it matters and what I'm watching. No hype, just what matters.",
  },
  langSwitch: {
    switchTo: "Read this page in English",
  },
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous post",
    nextPost: "Next post",
    readingTime: "{{minutes}} min read",
    keyTakeaways: "Key takeaways",
    sources: "Sources",
    infographic: "Infographic",
    openInfographic: "Open the infographic full screen",
    infographicSpanishOnly: "The infographic is available in Spanish only.",
    fallbackNotice:
      "This post isn't available in English yet. You're reading the original Spanish version.",
    availableIn: "Also available in",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    heroTitle: "Markets in 5 minutes",
    heroText:
      "No hype, just what matters: what happened, why it matters and what I'm watching in macro, FX, rates, oil and gold.",
    heroFollowBefore: "Daily analysis from Dallas, Texas. Follow me on",
    heroFollowAfter: "for real-time updates.",
    socialLinks: "Social links",
    featured: "Featured",
    recentPosts: "Latest analysis",
    allPosts: "All posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
    disclaimer:
      "Educational and informational content only. Nothing here is financial advice or a recommendation to buy or sell any asset. Trading involves risk of loss; do your own research.",
  },
  newsletter: {
    title: "Get the analysis by email",
    text: "One email with what matters in the markets. No spam.",
    placeholder: "your@email.com",
    button: "Subscribe",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the posts tagged",

    tagsTitle: "Tags",
    tagsDesc: "All the topics I cover.",

    postsTitle: "Posts",
    postsDesc: "All my market analysis, newest first.",

    archivesTitle: "Archives",
    archivesDesc: "All posts, grouped by month.",

    searchTitle: "Search",
    searchDesc: "Search any post…",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle light/dark theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page not found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
