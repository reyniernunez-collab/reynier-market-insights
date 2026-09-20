import {
  defineConfig,
  envField,
  fontProviders,
  svgOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeCallouts from "rehype-callouts";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";

export default defineConfig({
  site: config.site.url,
  base: "/reynier-market-insights/",
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives!== false ||!page.endsWith("/archives/"),
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
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
      transformers: [
        transformerFileName(),
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
