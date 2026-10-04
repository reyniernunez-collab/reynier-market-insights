// Regenerates public/favicon.ico and public/apple-touch-icon.png from public/favicon.svg.
// Usage: node scripts/generate-favicons.mjs
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const svg = await readFile(new URL("../public/favicon.svg", import.meta.url));
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map(size => sharp(svg, { density: 384 }).resize(size, size).png().toBuffer())
);

// ICO container with PNG-encoded entries
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
const entries = [];
let offset = 6 + 16 * sizes.length;
sizes.forEach((size, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(size, 0);
  e.writeUInt8(size, 1);
  e.writeUInt8(0, 2);
  e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(pngs[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  entries.push(e);
});
await writeFile(
  new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([header, ...entries, ...pngs])
);

await sharp(svg, { density: 768 })
  .resize(180, 180)
  .png()
  .toFile(new URL("../public/apple-touch-icon.png", import.meta.url).pathname);

// eslint-disable-next-line no-console
console.log("favicon.ico + apple-touch-icon.png generated");
