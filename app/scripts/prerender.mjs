/**
 * Produces a crawlable static document for every public route after Vite builds.
 * The client app can replace #root after loading, but useful content and metadata
 * remain available when JavaScript is delayed or unavailable.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const outputDir = path.join(projectRoot, "dist", "public");
const metadata = JSON.parse(
  fs.readFileSync(path.join(projectRoot, "shared", "route-metadata.json"), "utf8"),
);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const absoluteUrl = (route) => `https://lunacymedia.ca${route === "/" ? "/" : route}`;

function metadataHead(route, page) {
  const canonical = absoluteUrl(route);
  return `<!-- ROUTE_METADATA_START -->
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(page.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(page.ogDescription)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Lunacy Media" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(page.ogDescription)}" />
    <!-- ROUTE_METADATA_END -->`;
}

function staticRouteMarkup(route, page) {
  const sections = page.sections
    .map(
      (section) => `<section>
        <h2>${escapeHtml(section.heading)}</h2>
        <p>${escapeHtml(section.body)}</p>
      </section>`,
    )
    .join("\n");
  return `<main data-prerendered-route="${route}" style="background:#080808;color:#f5f0e6;font-family:system-ui,sans-serif;min-height:100vh;padding:clamp(2rem,7vw,7rem);line-height:1.6">
    <header style="max-width:52rem;margin:0 auto 4rem">
      <p style="letter-spacing:.18em;font-size:.75rem;color:#d4af37">${escapeHtml(page.eyebrow)}</p>
      <h1 style="font-size:clamp(2.5rem,8vw,5.5rem);line-height:1.05;margin:.6rem 0 1.5rem">${escapeHtml(page.h1)}</h1>
      <p style="font-size:1.2rem;max-width:44rem;color:#d6d1c9">${escapeHtml(page.intro)}</p>
    </header>
    <div style="max-width:52rem;margin:0 auto;display:grid;gap:2.25rem">
      ${sections}
    </div>
  </main>`;
}

function buildRoute(route, page, baseHtml) {
  const withMetadata = baseHtml.replace(
    /<!-- ROUTE_METADATA_START -->[\s\S]*?<!-- ROUTE_METADATA_END -->/,
    metadataHead(route, page),
  );
  return withMetadata.replace('<div id="root"></div>', `<div id="root">${staticRouteMarkup(route, page)}</div>`);
}

const baseHtml = fs.readFileSync(path.join(outputDir, "index.html"), "utf8");
for (const [route, page] of Object.entries(metadata)) {
  const target = route === "/" ? path.join(outputDir, "index.html") : path.join(outputDir, route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, buildRoute(route, page, baseHtml));
}

console.log(`Pre-rendered ${Object.keys(metadata).length} public route documents.`);
