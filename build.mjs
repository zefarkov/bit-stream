// BITSTREAM site generator: content JSONs + templates -> static HTML.
// Usage: node build.mjs
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  LANGS, SITE, esc, page,
  homeBody, servicesBody, projectsBody, contactsBody, aboutBody,
  landingBody, articleIndexBody,
} from "./build/templates.mjs";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const J = (p) => JSON.parse(readFileSync(join(ROOT, p), "utf8"));
const read = (p) => readFileSync(join(ROOT, p), "utf8");

const data = {
  services: J("assets/data/services.json"),
  cases: J("assets/data/cases.json"),
  partners: J("assets/data/partners.json"),
  caseImages: [
    "projects_server.webp",
    "projects_cctv.webp",
    "projects_backup.webp",
    "projects_net_sec.webp",
    "projects_voip.webp",
    "projects_faceid.webp",
  ],
};

const sitemapUrls = [];
const write = (rel, html, inSitemap = true) => {
  writeFileSync(join(ROOT, rel), html);
  if (inSitemap) sitemapUrls.push(`${SITE.domain}/${rel.replace(/\\/g, "/")}`);
  console.log("wrote", rel);
};

for (const lang of LANGS) {
  const c = J(`build/content/${lang}.json`);
  const prefix = "../";
  const base = { c, lang, prefix };

  write(`${lang}/index.html`, page({ ...base, meta: c.meta.home, pagePath: "index.html", body: homeBody(c, lang, prefix, data), scripts: `<script defer src="${prefix}assets/js/globe.js"></script>` }));
  write(`${lang}/services.html`, page({ ...base, meta: c.meta.services, pagePath: "services.html", body: servicesBody(c, lang, prefix) }));
  write(`${lang}/projects.html`, page({ ...base, meta: c.meta.projects, pagePath: "projects.html", body: projectsBody(c, lang, prefix, data) }));
  write(`${lang}/contacts.html`, page({ ...base, meta: c.meta.contacts, pagePath: "contacts.html", body: contactsBody(c) }));
  write(`${lang}/about.html`, page({ ...base, meta: c.meta.about, pagePath: "about.html", body: aboutBody(c) }));

  // landing pages (ru/uz only — en has none in the source structure)
  const ldir = join(ROOT, "build", "content", "landings", lang);
  let frags = [];
  try {
    frags = readdirSync(ldir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => J(`build/content/landings/${lang}/${f}`));
  } catch {}
  if (frags.length) {
    const lp = "../../";
    for (const frag of frags) {
      write(
        `${lang}/services/${frag.slug}.html`,
        page({
          c, lang, prefix: lp,
          meta: { title: frag.title || frag.h1, description: frag.description || frag.h1 },
          pagePath: `services/${frag.slug}.html`,
          body: landingBody(c, lang, frag),
        }),
      );
    }
    write(
      `${lang}/services/index.html`,
      page({
        c, lang, prefix: lp,
        meta: { title: c.meta.services.title, description: c.meta.services.description },
        pagePath: "services/index.html",
        body: articleIndexBody(c, lang, frags),
      }),
    );
  }

  // thank-you page (kept, restyled, noindex)
  write(
    `${lang}/rahmat.html`,
    page({
      c, lang, prefix,
      meta: { title: lang === "ru" ? "Спасибо | BITSTREAM" : lang === "uz" ? "Rahmat | BITSTREAM" : "Thank you | BITSTREAM", description: "BITSTREAM" },
      pagePath: "rahmat.html",
      body: `<section class="page-hero"><div class="container"><h1>${
        lang === "ru" ? "Свяжитесь с нами" : lang === "uz" ? "Biz bilan bog‘laning" : "Contact us"
      }</h1><p>${
        lang === "ru" ? "Чтобы передать задачу, напишите в Telegram или позвоните." :
        lang === "uz" ? "Vazifani yuborish uchun Telegramga yozing yoki qo‘ng‘iroq qiling." :
        "To send us your request, message us on Telegram or call."
      }</p><a class="btn btn-primary" href="${SITE.telegram}">${c.headerCta}</a></div></section>`,
    }).replace("index,follow", "noindex,follow"),
    false,
  );
}

// root redirect: detect ru/uz, default en
write(
  "index.html",
  `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>BITSTREAM</title>
<meta name="robots" content="noindex,follow"><link rel="canonical" href="${SITE.domain}/">
<meta http-equiv="refresh" content="0; url=en/index.html">
<link rel="alternate" hreflang="uz" href="${SITE.domain}/uz/index.html">
<link rel="alternate" hreflang="ru" href="${SITE.domain}/ru/index.html">
<link rel="alternate" hreflang="en" href="${SITE.domain}/en/index.html">
<link rel="alternate" hreflang="x-default" href="${SITE.domain}/en/index.html">
<link rel="icon" href="assets/icons/favicon.ico">
<style>body{margin:0;font-family:system-ui,sans-serif;background:#f7f9fc;color:#101d30;display:grid;place-items:center;min-height:100vh}a{color:#0b5ed7}</style>
<script>var l=(navigator.language||"en").slice(0,2);location.replace(l==="ru"?"ru/index.html":l==="uz"?"uz/index.html":"en/index.html");</script>
</head><body><p>BITSTREAM — <a href="en/index.html">EN</a> · <a href="ru/index.html">RU</a> · <a href="uz/index.html">UZ</a></p></body></html>`,
  false,
);

// Error page copy is also JSON-owned (no claims or promotional slogans).
const notFound = Object.fromEntries(LANGS.map((l) => [l, J(`build/content/${l}.json`).notFound]));
writeFileSync(join(ROOT, "404.html"), `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>404 | BITSTREAM</title><link rel="icon" href="/assets/icons/favicon.ico"><link rel="stylesheet" href="/assets/css/site.css"></head><body><header class="site-header"><div class="container header-wrap"><a class="brand" href="/en/index.html"><img alt="BITSTREAM" height="32" src="/assets/img/brand/logo-bitstream.png"></a></div></header><main><section class="page-hero"><div class="container"><p class="eyebrow">404</p><h1 id="error-title">${esc(notFound.en.title)}</h1><p id="error-text">${esc(notFound.en.text)}</p><p style="margin-top:25px"><a class="btn btn-primary" id="error-home" href="/en/index.html">${esc(notFound.en.button)}</a></p></div></section></main><script>const copy=${JSON.stringify(notFound)};const candidate=location.pathname.split('/')[1]||navigator.language.slice(0,2);const lang=copy[candidate]?candidate:(copy[navigator.language.slice(0,2)]?navigator.language.slice(0,2):'en');document.documentElement.lang=lang;document.getElementById('error-title').textContent=copy[lang].title;document.getElementById('error-text').textContent=copy[lang].text;document.getElementById('error-home').textContent=copy[lang].button;document.getElementById('error-home').href='/'+lang+'/index.html';</script></body></html>`);

// sitemap
writeFileSync(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);
console.log(`\nDone: ${sitemapUrls.length} URLs in sitemap.`);
