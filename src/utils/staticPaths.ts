import { getCollection } from "astro:content";
import type { PaginateFunction } from "astro";
import { getLocalizedPosts, getAvailableLocales } from "./localizedPosts";
import { getPostSlug } from "./getPostPaths";
import { getUniqueTags } from "./getUniqueTags";
import { slugifyAll } from "./slugify";
import type { Locale } from "@/i18n/locales";
import config from "@/config";

/** Paginated post listing for one UI locale. */
export async function getPostsPagePaths(
  locale: Locale,
  paginate: PaginateFunction
) {
  const posts = await getCollection("posts");
  return paginate(getLocalizedPosts(posts, locale), {
    pageSize: config.posts.perPage,
  });
}

/** One page per post slug for one UI locale (falls back to the other language). */
export async function getPostDetailPaths(locale: Locale) {
  const all = await getCollection("posts");
  const posts = getLocalizedPosts(all, locale);

  return posts.map((post, index) => {
    const prev = posts[index + 1];
    const next = posts[index - 1];
    return {
      params: { slug: getPostSlug(post.id) },
      props: {
        post,
        availableLocales: getAvailableLocales(all, post),
        // posts is newest-first, so "older" (prev) is a higher index
        prevPost: prev
          ? { id: prev.id, title: prev.data.title, filePath: prev.filePath }
          : null,
        nextPost: next
          ? { id: next.id, title: next.data.title, filePath: next.filePath }
          : null,
      },
    };
  });
}

/** Paginated tag pages for one UI locale. */
export async function getTagPagePaths(
  locale: Locale,
  paginate: PaginateFunction
) {
  const posts = getLocalizedPosts(await getCollection("posts"), locale);
  const tags = getUniqueTags(posts);

  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = posts.filter(({ data }) =>
      slugifyAll(data.tags).includes(tag)
    );
    return paginate(tagPosts, {
      params: { tag },
      props: { tagName },
      pageSize: config.posts.perPage,
    });
  });
}

/** Paths for per-post OG images in one UI locale. */
export async function getOgImagePaths(locale: Locale) {
  if (!config.features.dynamicOgImage) return [];
  const posts = getLocalizedPosts(await getCollection("posts"), locale).filter(
    ({ data }) => !data.ogImage
  );
  return posts.map(post => ({
    params: { slug: getPostSlug(post.id) },
    props: post,
  }));
}
