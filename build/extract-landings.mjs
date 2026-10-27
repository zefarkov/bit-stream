// One-time extraction: pull title/description/h1/article body out of legacy
// landing pages into JSON fragments for the new template.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function clean(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<section class="section seo-breadcrumbs-wrap">[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section seo-article-hero-section">[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section">\s*<div class="container">\s*<h1[\s\S]*?<\/h1>[\s\S]*?<\/section>/i, "")
    .replace(/class="[^"]*"/g, "")
    .replace(/<a href="#[^"]*">/g, "<a>")
    .replace(/\s{2,}/g, " ")
    .trim();
}

for (const lang of ["ru", "uz"]) {
  const dir = join(ROOT, lang, "services");
  const outDir = join(ROOT, "build", "content", "landings", lang);
  mkdirSync(outDir, { recursive: true });
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".html") || file === "index.html") continue;
    const html = readFileSync(join(dir, file), "utf8");
    const title = /<title>([^<]*)<\/title>/i.exec(html)?.[1] ?? "";
    const description = /<meta name="description" content="([^"]*)"/i.exec(html)?.[1] ?? "";
    const main = /<main[^>]*>([\s\S]*)<\/main>/i.exec(html)?.[1] ?? "";
    const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(main)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
    const body = clean(main);
    writeFileSync(
      join(outDir, basename(file, ".html") + ".json"),
      JSON.stringify({ slug: basename(file, ".html"), title, description, h1, body }, null, 2),
    );
    console.log(lang, file, "->", h1.slice(0, 60));
  }
}
