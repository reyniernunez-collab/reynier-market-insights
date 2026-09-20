import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkToc, remarkCollapse, rehypeCallouts, config } from "./src/config/index.ts";

export default defineConfig({
  site: config.site.url,
  base: "/reynier-market-insights/",
  integrations: [
    mdx(),
    sitemap({
      filter: page => config.features?.showArchives!== false ||!page.endsWith("/archives/"),
    }),
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    rehypePlugins: [rehypeCallouts],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
