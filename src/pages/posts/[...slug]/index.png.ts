// Spanish (default locale, served at the root)
import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getOgImagePaths } from "@/utils/staticPaths";
import { renderPostOgImage } from "@/utils/ogImage";

export async function getStaticPaths() {
  return getOgImagePaths("es");
}

export const GET: APIRoute = async ({ props }) =>
  renderPostOgImage(props as CollectionEntry<"posts">);
