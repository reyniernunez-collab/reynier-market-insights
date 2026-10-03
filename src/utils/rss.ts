import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getLocalizedPosts } from "./localizedPosts";
import { getPostLocale, getPostUrl } from "./getPostPaths";
import { useTranslations } from "@/i18n";
import type { Locale } from "@/i18n/locales";
import config from "@/config";

/** RSS feed for one language: /rss.xml (ES) and /en/rss.xml (EN). */
export async function getLocalizedRss(locale: Locale) {
  const t = useTranslations(locale);
  // Only real translations go in each feed (no fallback duplicates).
  const posts = getLocalizedPosts(await getCollection("posts"), locale).filter(
    post => getPostLocale(post) === locale
  );

  return rss({
    title: `${config.site.title} (${t.meta.shortName})`,
    description: t.site.description,
    site: config.site.url,
    customData: `<language>${t.meta.htmlLang}</language>`,
    items: posts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, locale),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      categories: data.tags,
    })),
  });
}
