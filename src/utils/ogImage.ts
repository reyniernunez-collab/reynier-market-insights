import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { CollectionEntry } from "astro:content";
import satori from "satori";
import sharp from "sharp";
import config from "@/config";

/**
 * Branded Open Graph images (1200×630) rendered at build time with satori.
 * Fonts are read from the locally installed @fontsource package, so the build
 * never fetches anything over the network.
 */

const fontFile = (name: string) =>
  resolve(process.cwd(), "node_modules/@fontsource/inter/files", name);

const BRAND = {
  navy: "#0a0e17",
  surface: "#121a2a",
  border: "#1e293b",
  orange: "#fb923c",
  text: "#f1f5f9",
  muted: "#94a3b8",
};

let fontCache: { regular: Buffer; bold: Buffer } | undefined;

async function loadFonts() {
  if (fontCache) return fontCache;
  const [regular, bold] = await Promise.all([
    readFile(fontFile("inter-latin-400-normal.woff")),
    readFile(fontFile("inter-latin-700-normal.woff")),
  ]);
  fontCache = { regular, bold };
  return fontCache;
}

type Node = {
  type: string;
  props: Record<string, unknown> & { style?: Record<string, unknown> };
};

const h = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown
): Node => ({ type, props: { style, children } });

function frame(children: Node[]): Node {
  return h(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: BRAND.navy,
      color: BRAND.text,
      fontFamily: "Inter",
      padding: "64px 72px",
      borderTop: `14px solid ${BRAND.orange}`,
    },
    children
  );
}

function brandRow(right?: string): Node {
  return h(
    "div",
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 28,
      color: BRAND.muted,
    },
    [
      h("div", { display: "flex", alignItems: "center" }, [
        h(
          "div",
          {
            width: 52,
            height: 52,
            borderRadius: 12,
            background: BRAND.orange,
            color: BRAND.navy,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 34,
            marginRight: 18,
          },
          "R"
        ),
        h("span", { color: BRAND.text, fontWeight: 700 }, config.site.title),
      ]),
      h("span", {}, right ?? ""),
    ]
  );
}

async function toPng(tree: Node): Promise<Response> {
  const { regular, bold } = await loadFonts();
  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Inter", data: regular, weight: 400, style: "normal" },
      { name: "Inter", data: bold, weight: 700, style: "normal" },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
}

/** Default site image (/og.png): bilingual tagline. */
export function renderDefaultOgImage() {
  return toPng(
    frame([
      brandRow(),
      h("div", { display: "flex", flexDirection: "column" }, [
        h(
          "div",
          { fontSize: 76, fontWeight: 700, lineHeight: 1.1, color: BRAND.text },
          "Los mercados en 5 minutos"
        ),
        h(
          "div",
          { fontSize: 44, fontWeight: 700, color: BRAND.orange, marginTop: 16 },
          "Markets in 5 minutes"
        ),
        h(
          "div",
          { fontSize: 30, color: BRAND.muted, marginTop: 28 },
          "Macro · FX · Rates · Oil · Gold — No hype, just what matters."
        ),
      ]),
      h(
        "div",
        { display: "flex", fontSize: 24, color: BRAND.muted },
        "Dallas, Texas"
      ),
    ])
  );
}

/** Per-post image: title + date + brand. */
export function renderPostOgImage(post: CollectionEntry<"posts">) {
  const lang = post.id.split("/")[0] === "en" ? "en" : "es";
  const date = new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: config.site.timezone,
  }).format(post.data.pubDatetime);

  const title = post.data.title;
  const fontSize = title.length > 90 ? 52 : title.length > 60 ? 60 : 68;

  return toPng(
    frame([
      brandRow(date),
      h(
        "div",
        {
          display: "flex",
          fontSize,
          fontWeight: 700,
          lineHeight: 1.15,
          color: BRAND.text,
          maxHeight: 360,
          overflow: "hidden",
        },
        title
      ),
      h(
        "div",
        {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
          color: BRAND.muted,
        },
        [
          h("span", {}, `${lang === "en" ? "by" : "por"} ${post.data.author}`),
          h(
            "span",
            { color: BRAND.orange, fontWeight: 700 },
            lang === "en" ? "Markets in 5 minutes" : "Los mercados en 5 minutos"
          ),
        ]
      ),
    ])
  );
}
