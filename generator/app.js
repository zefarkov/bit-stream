function esc(s){
  return String(s ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function slugify(text){
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'') || 'new-service-page';
}

function getPack(lang, type){
  const langPack = TEMPLATE_BANK[lang] || TEMPLATE_BANK.uz;
  const typePack = langPack.byType[type] || langPack.byType.custom || TEMPLATE_BANK.en.byType.custom;
  return { labels: langPack.labels, common: langPack.common, typePack };
}

function buildPage(){
  const lang = document.getElementById('lang').value;
  const type = document.getElementById('serviceType').value;
  const topic = document.getElementById('topic').value.trim() || 'New service page';
  const city = document.getElementById('city').value.trim() || 'Tashkent';
  const extra = document.getElementById('extra').value.trim();
  const company = document.getElementById('company').value.trim() || 'BITSTREAM';
  const domain = document.getElementById('domain').value.trim() || 'https://bit-stream.uz/services/';
  const cta = document.getElementById('cta').value.trim() || (lang === 'uz' ? 'Bog‘lanish' : 'Связаться');
  const contact = document.getElementById('contact').value.trim() || '+998 90 000 00 00';
  const slugInput = document.getElementById('slug');
  if(!slugInput.value.trim()) slugInput.value = slugify(topic);
  const slug = slugInput.value.trim() || slugify(topic);

  const { labels, common, typePack } = getPack(lang, type);
  const lead = typePack.lead(topic, city, extra);
  const problem = typePack.problem(topic);
  const solution = typePack.solution(topic);
  const [step1, step2, step3] = common.processSteps;
  const conclusion = lang === 'uz'
    ? `${topic} bo‘yicha maqsad bitta: tizim ishlasin, odamlar qiynalmasin va biznes o‘z ishiga chalg‘imasdan davom etsin.`
    : lang === 'ru'
    ? `${topic} нужен не ради красивой технологии, а ради нормальной, спокойной и управляемой работы бизнеса.`
    : `${topic} should support calm, reliable, and manageable business operations.`;

  const metaTitle = `${topic} | ${company}`;
  const metaDescription = lang === 'uz'
    ? `${topic}. ${company} tomonidan biznes uchun amaliy va ishonchli IT yechim.`
    : lang === 'ru'
    ? `${topic}. Практичное и надёжное IT-решение для бизнеса от ${company}.`
    : `${topic}. Practical and reliable IT solution for business from ${company}.`;
  const canonical = `${domain.replace(/\/?$/,'/')}${slug}.html`;

  const pageHtml = `<!DOCTYPE html>
<html lang="${esc(lang)}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(metaTitle)}</title>
<meta name="description" content="${esc(metaDescription)}">
<link rel="canonical" href="${esc(canonical)}">
<link rel="stylesheet" href="../assets/css/style.css">
<style>
.article-wrap{max-width:980px;margin:0 auto;padding:24px 0 48px}
.article-hero,.article-box{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow)}
.article-hero{margin-bottom:18px}.article-box{margin-top:18px}
.article-lead{font-size:18px;line-height:1.7;color:var(--ink)}
.article-box h2{margin-bottom:10px}.article-box ul{padding-left:20px;margin:0}.article-box li{margin:8px 0}
.quick-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
.contact-note{padding:14px 16px;border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:8px;background:var(--surface-2)}
@media(max-width:720px){.article-hero,.article-box{padding:18px}.article-lead{font-size:16px}}
</style>
</head>
<body data-lang="${esc(lang)}">
<!-- existing site header -->
<main class="section">
<div class="container article-wrap">

<section class="article-hero">
<div class="eyebrow">${esc(company)}</div>
<h1>${esc(topic)}</h1>
<p class="article-lead">${esc(lead)}</p>
<div class="quick-cta">
<a class="btn btn-primary" href="../contacts.html">${esc(cta)}</a>
<a class="btn" href="../services.html">${esc(labels.services)}</a>
</div>
</section>

<section class="article-box">
<h2>${esc(labels.problem)}</h2>
<p>${esc(problem)}</p>
</section>

<section class="article-box">
<h2>${esc(labels.solution)}</h2>
<p>${esc(solution)}</p>
<ul>
<li>${esc(typePack.points[0])}</li>
<li>${esc(typePack.points[1])}</li>
<li>${esc(typePack.points[2])}</li>
</ul>
</section>

<section class="article-box">
<h2>${esc(labels.forWho)}</h2>
<p>${esc(typePack.forWho)}</p>
</section>

<section class="article-box">
<h2>${esc(labels.why)}</h2>
<p>${esc(typePack.why)}</p>
</section>

<section class="article-box">
<h2>${esc(labels.process)}</h2>
<ul>
<li>${esc(step1)}</li>
<li>${esc(step2)}</li>
<li>${esc(step3)}</li>
</ul>
</section>

<section class="article-box">
<h2>${esc(labels.faq)}</h2>
<p><strong>${esc(typePack.faq1q)}</strong><br>${esc(typePack.faq1a)}</p>
<p><strong>${esc(typePack.faq2q)}</strong><br>${esc(typePack.faq2a)}</p>
</section>

<section class="article-box">
<h2>${esc(labels.summary)}</h2>
<p>${esc(conclusion)}</p>
<div class="contact-note">${esc(contact)}</div>
<div class="quick-cta">
<a class="btn btn-primary" href="../contacts.html">${esc(labels.request)}</a>
</div>
</section>

</div>
</main>
<!-- existing site footer -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Service",
  "name":"${esc(topic)}",
  "provider":{"@type":"Organization","name":"${esc(company)}","url":"https://bit-stream.uz"},
  "url":"${esc(canonical)}",
  "areaServed":"Uzbekistan",
  "description":"${esc(metaDescription)}"
}
</script>
</body>
</html>`;

  const previewHtml = `
<div class="article-wrap">
  <section class="article-hero">
    <div class="eyebrow">${esc(company)}</div>
    <h1>${esc(topic)}</h1>
    <p class="article-lead">${esc(lead)}</p>
    <div class="quick-cta">
      <a class="btn btn-primary" href="#">${esc(cta)}</a>
      <a class="btn" href="#">${esc(labels.services)}</a>
    </div>
  </section>

  <section class="article-box">
    <h2>${esc(labels.problem)}</h2>
    <p>${esc(problem)}</p>
  </section>

  <section class="article-box">
    <h2>${esc(labels.solution)}</h2>
    <p>${esc(solution)}</p>
    <ul>
      <li>${esc(typePack.points[0])}</li>
      <li>${esc(typePack.points[1])}</li>
      <li>${esc(typePack.points[2])}</li>
    </ul>
  </section>

  <section class="article-box">
    <h2>${esc(labels.forWho)}</h2>
    <p>${esc(typePack.forWho)}</p>
  </section>

  <section class="article-box">
    <h2>${esc(labels.why)}</h2>
    <p>${esc(typePack.why)}</p>
  </section>

  <section class="article-box">
    <h2>${esc(labels.process)}</h2>
    <ul>
      <li>${esc(step1)}</li>
      <li>${esc(step2)}</li>
      <li>${esc(step3)}</li>
    </ul>
  </section>

  <section class="article-box">
    <h2>${esc(labels.faq)}</h2>
    <p><strong>${esc(typePack.faq1q)}</strong><br>${esc(typePack.faq1a)}</p>
    <p><strong>${esc(typePack.faq2q)}</strong><br>${esc(typePack.faq2a)}</p>
  </section>

  <section class="article-box">
    <h2>${esc(labels.summary)}</h2>
    <p>${esc(conclusion)}</p>
    <div class="contact-note">${esc(contact)}</div>
  </section>
</div>`;

  return { html: pageHtml, preview: previewHtml, slug };
}

function render(){
  const { html, preview } = buildPage();
  document.getElementById('preview').innerHTML = preview;
  document.getElementById('code').textContent = html;
  window.generatedHtml = html;
}

async function copyHtml(){
  if(!window.generatedHtml) render();
  try{
    await navigator.clipboard.writeText(window.generatedHtml || '');
    alert('HTML copied');
  }catch(e){
    alert('Copy failed');
  }
}

function downloadHtml(){
  if(!window.generatedHtml) render();
  const slug = (document.getElementById('slug').value.trim() || 'new-service-page') + '.html';
  const blob = new Blob([window.generatedHtml || ''], {type:'text/html;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = slug;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
}

document.getElementById('topic').addEventListener('input', (e)=>{
  document.getElementById('slug').value = slugify(e.target.value);
});
document.getElementById('generateBtn').addEventListener('click', render);
document.getElementById('downloadBtn').addEventListener('click', downloadHtml);
document.getElementById('copyBtn').addEventListener('click', copyHtml);
render();
