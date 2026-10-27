// BITSTREAM site — build-time templates. Pure functions, no dependencies.
const SITE = {
  name: "BITSTREAM",
  domain: "https://bit-stream.uz",
  email: "info@bit-stream.uz",
  phone: "+998 91 004 66 51",
  phone2: "+998 93 311 31 99",
  phoneHref: "+998910046651",
  phone2Href: "+998933113199",
  telegram: "https://t.me/bitstreamuz",
  instagram: "https://instagram.com/bitstreamuz",
  ga: "G-HYNRQTZC4R",
  ym: "108738410",
};

export const LANGS = ["en", "ru", "uz"];

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const tel = (v) => `tel:${v.replace(/[^+\d]/g, "")}`;

function analytics() {
  return `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.ga}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${SITE.ga}');</script>
<!-- Yandex.Metrika -->
<script>(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${SITE.ym}','ym');ym(${SITE.ym},'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});</script>`;
}

function orgSchema() {
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/assets/img/brand/logo-bitstream.png`,
    email: SITE.email,
    telephone: SITE.phone2,
    address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
    sameAs: [SITE.instagram, SITE.telegram],
  })}</script>`;
}

function head({ lang, meta, prefix, pagePath }) {
  const canonical = `${SITE.domain}/${lang}/${pagePath}`;
  // Topic article slugs differ between RU and UZ, and there is no EN version.
  // Never publish hreflang links to pages that do not exist.
  const isTopic = pagePath.startsWith("services/");
  const alternates = pagePath === "services/index.html" ? ["ru", "uz"] : isTopic ? [lang] : LANGS;
  const alt = alternates.map(
    (l) => `<link rel="alternate" hreflang="${l}" href="${SITE.domain}/${l}/${pagePath}">`,
  ).join("\n");
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}">
<meta name="theme-color" content="#0b2e59">
<link rel="canonical" href="${canonical}">
${alt}
${isTopic ? "" : `<link rel="alternate" hreflang="x-default" href="${SITE.domain}/en/${pagePath}">`}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(meta.title)}">
<meta property="og:description" content="${esc(meta.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="BITSTREAM">
<meta property="og:image" content="${SITE.domain}/assets/img/brand/logo-bitstream.png">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(meta.title)}">
<meta name="twitter:description" content="${esc(meta.description)}">
<meta name="twitter:image" content="${SITE.domain}/assets/img/brand/logo-bitstream.png">
<link rel="icon" href="${prefix}assets/icons/favicon.ico" sizes="any">
<link rel="stylesheet" href="${prefix}assets/css/site.css">
<link rel="manifest" href="/site.webmanifest">
${orgSchema()}
${analytics()}
</head>`;
}

function header(c, lang, prefix, pagePath) {
  const nav = c.nav
    .map((n) => `<a href="${prefix}${lang}/${n.href}">${esc(n.label)}</a>`)
    .join("\n      ");
  const langs = LANGS.map((l) => {
    const target = pagePath.startsWith("services/") ? "services.html" : pagePath;
    const href = `${prefix}${l}/${target}`;
    return `<a lang="${l}" aria-label="${l.toUpperCase()}" href="${href}" class="${l === lang ? "active" : ""}" ${l === lang ? 'aria-current="true"' : ""}>${l.toUpperCase()}</a>`;
  }).join("");
  return `<header class="site-header">
  <div class="container header-wrap">
    <a class="brand" href="${prefix}${lang}/index.html">
      <img src="${prefix}assets/img/brand/logo-bitstream.png" alt="BITSTREAM" height="34">
    </a>
    <nav class="main-nav" aria-label="${esc(c.navLabel || 'Site navigation')}">
      ${nav}
    </nav>
    <div class="header-actions">
      <div class="lang-switch">${langs}</div>
      <a class="btn btn-primary" href="${SITE.telegram}" target="_blank" rel="noopener">${esc(c.headerCta)}</a>
    </div>
  </div>
</header>`;
}

function footer(c, lang, prefix) {
  const f = c.footer;
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <h3>BITSTREAM</h3>
      <p>${esc(f.tagline)}</p>
    </div>
    <div>
      <h4>${esc(f.servicesTitle)}</h4>
      ${f.services.map((s) => `<a href="${prefix}${lang}/services.html">${esc(s)}</a>`).join("\n      ")}
    </div>
    <div>
      <h4>${esc(f.contactTitle)}</h4>
      <a href="mailto:${SITE.email}">${SITE.email}</a>
      <a href="${SITE.telegram}" target="_blank" rel="noopener">Telegram</a>
      <a href="${tel(SITE.phone)}">${SITE.phone}</a>
    </div>
    <div>
      <h4>${esc(f.linksTitle)}</h4>
      ${f.links.map((l) => `<a href="${prefix}${lang}/${l.href}">${esc(l.label)}</a>`).join("\n      ")}
    </div>
  </div>
  <div class="container footer-bottom">${esc(f.copyright)}</div>
</footer>
<noscript><div><img src="https://mc.yandex.ru/watch/${SITE.ym}" style="position:absolute;left:-9999px" alt=""></div></noscript>
<script defer src="/tracker.js"></script>
</body>
</html>`;
}

export function page({ c, lang, prefix, meta, pagePath, body, scripts = "" }) {
  return `${head({ lang, meta, prefix, pagePath })}
<body>
${header(c, lang, prefix, pagePath)}
<main>
${body}
</main>
${scripts}
${footer(c, lang, prefix)}
`;
}

/* ---------------- page bodies ---------------- */

function partnersSection(c, lang, prefix, data) {
  if (!data.partners || !data.partners.length) return "";
  const label = c.home.partners ? c.home.partners.title : "";
  return `
<section class="section partners-section">
  <div class="container">
    ${label ? `<p class="partners-label">${esc(label)}</p>` : ""}
    <div class="partner-grid">
      ${data.partners
        .map((p) => {
          const src = p.logo.replace(/^(\.\.\/)+/, "");
          return `<div class="partner"><img src="${prefix}${src}" alt="${esc(p.name)}" loading="lazy"></div>`;
        })
        .join("\n      ")}
    </div>
  </div>
</section>`;
}

export function homeBody(c, lang, prefix, data) {
  const h = c.home;
  return `
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${esc(h.hero.eyebrow)}</p>
      <h1>${esc(h.hero.title)}</h1>
      <p class="lead">${esc(h.hero.lead)}</p>
      <ul class="hero-points">
        ${h.hero.points.map((p) => `<li>${esc(p)}</li>`).join("\n        ")}
      </ul>
      <div class="actions">
        <a class="btn btn-primary btn-lg" href="${SITE.telegram}" target="_blank" rel="noopener">${esc(h.hero.primary)}</a>
        <a class="btn btn-lg" href="${prefix}${lang}/services.html">${esc(h.hero.secondary)}</a>
      </div>
    </div>
    <div class="hero-visual">
      <canvas id="globe" width="560" height="560" data-src="${prefix}assets/img/earth-land.png" aria-label="${esc(c.globeAlt)}" role="img"></canvas>
    </div>
  </div>
</section>
<section class="quick-section" aria-label="${esc(h.process.title)}">
  <div class="container quick-grid">
    ${h.quickFacts.map((item) => `<div class="quick-item"><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p></div>`).join("\n    ")}
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head">
      <h2>${esc(h.services.title)}</h2>
      ${h.services.lead ? `<p>${esc(h.services.lead)}</p>` : ""}
    </div>
    <div class="service-grid">
      ${data.services
        .map(
          (s) => `<a class="card" href="${prefix}${lang}/services.html">
        <h3>${esc(s.title[lang])}</h3>
        <p>${esc(s.text[lang])}</p>
      </a>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head">
      <h2>${esc(h.cases.title)}</h2>
      ${h.cases.lead ? `<p>${esc(h.cases.lead)}</p>` : ""}
    </div>
    <div class="cases-grid">
      ${data.cases
        .slice(0, 6)
        .map(
          (cs, i) => `<article class="case-card">
        ${cs.image ? `<img src="${prefix}${cs.image}" alt="${esc(cs.title[lang])}" loading="lazy">` : ""}
        <div class="body">
          <h3>${esc(cs.title[lang])}</h3>
          <p>${esc(cs.summary[lang])}</p>
        </div>
      </article>`,
        )
        .join("\n      ")}
    </div>
  </div>
</section>
${partnersSection(c, lang, prefix, data)}
<section class="section">
  <div class="container">
    <div class="cta-strip">
      <div>
        <h3>${esc(h.cta.title)}</h3>
        <p>${esc(h.cta.text)}</p>
      </div>
      <a class="btn btn-primary btn-lg" href="${SITE.telegram}" target="_blank" rel="noopener">${esc(h.cta.button)}</a>
    </div>
  </div>
</section>`;
}

export function servicesBody(c, lang, prefix) {
  const p = c.servicesPage;
  return `
<section class="page-hero">
  <div class="container">
    <h1>${esc(p.title)}</h1>
    <p>${esc(p.lead)}</p>
  </div>
</section>
<section class="section">
  <div class="container service-grid">
    ${p.items
      .map(
        (s) => `<div class="card">
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
      <ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    </div>`,
      )
      .join("\n    ")}
  </div>
</section>
${p.topicsLink ? `<section class="section topics-bridge"><div class="container"><div class="cta-strip"><div><h3>${esc(p.topicsLink.title)}</h3><p>${esc(p.topicsLink.text)}</p></div><a class="btn" href="${prefix}${lang}/services/index.html">${esc(p.topicsLink.button)}</a></div></div></section>` : ""}
<section class="section alt">
  <div class="container">
    <div class="cta-strip">
      <div>
        <h3>${esc(p.cta.title)}</h3>
        <p>${esc(p.cta.text)}</p>
      </div>
      <a class="btn btn-primary btn-lg" href="${SITE.telegram}" target="_blank" rel="noopener">${esc(p.cta.button)}</a>
    </div>
  </div>
</section>`;
}

export function projectsBody(c, lang, prefix, data) {
  const p = c.projectsPage;
  return `
<section class="page-hero">
  <div class="container">
    <h1>${esc(p.title)}</h1>
    <p>${esc(p.lead)}</p>
  </div>
</section>
<section class="section">
  <div class="container cases-grid">
    ${data.cases
      .map(
        (cs, i) => `<article class="case-card">
      ${cs.image ? `<img src="${prefix}${cs.image}" alt="${esc(cs.title[lang])}" loading="lazy">` : ""}
      <div class="body">
        <h3>${esc(cs.title[lang])}</h3>
        <p>${esc(cs.summary[lang])}</p>
      </div>
    </article>`,
      )
      .join("\n    ")}
  </div>
</section>
<section class="section alt">
  <div class="container">
    <div class="cta-strip">
      <div>
        <h3>${esc(p.cta.title)}</h3>
        <p>${esc(p.cta.text)}</p>
      </div>
      <a class="btn btn-primary btn-lg" href="${SITE.telegram}" target="_blank" rel="noopener">${esc(p.cta.button)}</a>
    </div>
  </div>
</section>`;
}

export function contactsBody(c) {
  const p = c.contactsPage;
  return `
<section class="page-hero">
  <div class="container">
    <h1>${esc(p.title)}</h1>
    <p>${esc(p.lead)}</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-block"><h3>${esc(p.blocks.telegram)}</h3><a href="${SITE.telegram}" target="_blank" rel="noopener">@bitstreamuz</a></div>
      <div class="contact-block"><h3>${esc(p.blocks.email)}</h3><a href="mailto:${SITE.email}">${SITE.email}</a></div>
      <div class="contact-block"><h3>${esc(p.blocks.phone)}</h3><a href="${tel(SITE.phone)}">${SITE.phone}</a><br><a href="${tel(SITE.phone2)}">${SITE.phone2}</a></div>
      <div class="contact-block"><h3>${esc(p.blocks.instagram)}</h3><a href="${SITE.instagram}" target="_blank" rel="noopener">@bitstreamuz</a></div>
    </div>
    <div class="promise">${esc(p.promise)}</div>
  </div>
</section>`;
}

export function aboutBody(c) {
  const p = c.aboutPage;
  return `
<section class="page-hero">
  <div class="container">
    <h1>${esc(p.title)}</h1>
    <p>${esc(p.lead)}</p>
  </div>
</section>
<section class="section">
  <div class="container" style="max-width:46em">
    ${p.blocks
      .map(
        (b) => `<div class="about-block">
      <h3>${esc(b.title)}</h3>
      <p>${esc(b.text)}</p>
    </div>`,
      )
      .join("\n    ")}
  </div>
</section>`;
}

export function landingBody(c, lang, frag) {
  const L = c.landing;
  return `
<section class="article-hero">
  <div class="container">
    <nav class="breadcrumbs">
      <a href="../index.html">${esc(L.labels.breadcrumbHome)}</a> ·
      <a href="index.html">${esc(L.labels.breadcrumbServices)}</a>
    </nav>
    <h1>${esc(frag.h1)}</h1>
    <p class="article-intro">${esc(frag.description)}</p>
  </div>
</section>
<div class="container">
  <div class="article-body">
    ${frag.body}
    <div class="cta-strip">
      <div>
        <h3>${esc(L.ctaTitle)}</h3>
        <p>${esc(L.ctaText)}</p>
      </div>
      <a class="btn btn-primary btn-lg" href="${SITE.telegram}" target="_blank" rel="noopener">${esc(L.ctaButton)}</a>
    </div>
  </div>
</div>`;
}

export function articleIndexBody(c, lang, frags) {
  const L = c.landing;
  return `
<section class="page-hero">
  <div class="container">
    <h1>${esc(L.labels.breadcrumbServices)}</h1>
    <p>${esc(c.servicesPage.lead)}</p>
  </div>
</section>
<section class="section">
  <div class="container service-grid">
    ${frags
      .map(
        (f) => `<a class="card" href="${f.slug}.html">
      <h3>${esc(f.h1)}</h3>
      <p>${esc(f.description)}</p>
    </a>`,
      )
      .join("\n    ")}
  </div>
</section>`;
}

export { SITE, esc };
