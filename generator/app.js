
function esc(s){
  return String(s ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function nlToBr(s){
  return esc(s).replace(/\n/g,'<br>');
}

function listFromTextarea(value){
  return String(value || '').split('\n').map(x => x.trim()).filter(Boolean);
}

function sectionHtml(title, bodyHtml){
  if(!String(bodyHtml || '').trim()) return '';
  return `<section class="article-box"><h2>${esc(title)}</h2>${bodyHtml}</section>`;
}

function autoSlug(){
  const topic = document.getElementById('h1').value.trim() || document.getElementById('title').value.trim();
  const slug = String(topic || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'') || 'new-page';
  document.getElementById('slug').value = slug;
}

function build(){
  const lang = document.getElementById('lang').value.trim() || 'uz';
  const slug = document.getElementById('slug').value.trim() || 'new-page';
  const title = document.getElementById('title').value.trim();
  const meta = document.getElementById('meta').value.trim();
  const canonical = document.getElementById('canonical').value.trim();
  const h1 = document.getElementById('h1').value.trim();
  const lead = document.getElementById('lead').value.trim();
  const problem = document.getElementById('problem').value.trim();
  const solution = document.getElementById('solution').value.trim();
  const bullets = listFromTextarea(document.getElementById('bullets').value);
  const forwho = document.getElementById('forwho').value.trim();
  const why = document.getElementById('why').value.trim();
  const process = listFromTextarea(document.getElementById('process').value);
  const faq1q = document.getElementById('faq1q').value.trim();
  const faq1a = document.getElementById('faq1a').value.trim();
  const faq2q = document.getElementById('faq2q').value.trim();
  const faq2a = document.getElementById('faq2a').value.trim();
  const summary = document.getElementById('summary').value.trim();
  const cta = document.getElementById('cta').value.trim();
  const ctaLink = document.getElementById('ctaLink').value.trim() || '../contacts.html';
  const contact = document.getElementById('contact').value.trim();

  const faqParts = [];
  if(faq1q || faq1a) faqParts.push(`<p><strong>${esc(faq1q)}</strong><br>${esc(faq1a)}</p>`);
  if(faq2q || faq2a) faqParts.push(`<p><strong>${esc(faq2q)}</strong><br>${esc(faq2a)}</p>`);

  const bulletHtml = bullets.length ? `<ul>${bullets.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const processHtml = process.length ? `<ul>${process.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const contactHtml = contact ? `<div class="contact-note">${nlToBr(contact)}</div>` : '';
  const ctaHtml = cta ? `<div class="quick-cta"><a class="btn btn-primary" href="${esc(ctaLink)}">${esc(cta)}</a></div>` : '';

  const preview = `
<div class="article-wrap">
  ${h1 || lead ? `
  <section class="article-hero">
    <div class="eyebrow">BITSTREAM</div>
    ${h1 ? `<h1>${esc(h1)}</h1>` : ''}
    ${lead ? `<p class="article-lead">${nlToBr(lead)}</p>` : ''}
    ${ctaHtml}
  </section>` : ''}

  ${sectionHtml(lang === 'ru' ? 'Проблема' : lang === 'en' ? 'Problem' : 'Muammo', problem ? `<p>${nlToBr(problem)}</p>` : '')}
  ${sectionHtml(lang === 'ru' ? 'Решение' : lang === 'en' ? 'Solution' : 'Yechim', (solution ? `<p>${nlToBr(solution)}</p>` : '') + bulletHtml)}
  ${sectionHtml(lang === 'ru' ? 'Для кого' : lang === 'en' ? 'Who this is for' : 'Kimlar uchun', forwho ? `<p>${nlToBr(forwho)}</p>` : '')}
  ${sectionHtml(lang === 'ru' ? 'Почему это важно' : lang === 'en' ? 'Why it matters' : 'Nega bu muhim', why ? `<p>${nlToBr(why)}</p>` : '')}
  ${sectionHtml(lang === 'ru' ? 'Как работаем' : lang === 'en' ? 'How we work' : 'Qanday ishlaymiz', processHtml)}
  ${sectionHtml('FAQ', faqParts.join(''))}
  ${sectionHtml(lang === 'ru' ? 'Итог' : lang === 'en' ? 'Summary' : 'Xulosa', (summary ? `<p>${nlToBr(summary)}</p>` : '') + contactHtml + ctaHtml)}
</div>`.trim();

  const html = `<!DOCTYPE html>
<html lang="${esc(lang)}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${title ? `<title>${esc(title)}</title>` : ''}
${meta ? `<meta name="description" content="${esc(meta)}">` : ''}
${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ''}
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
<body data-lang="${esc(lang)}" data-page="${esc(slug)}">
<!-- existing site header -->
<main class="section">
${preview}
</main>
<!-- existing site footer -->
</body>
</html>`;

  return {html, preview, slug};
}

function render(){
  const result = build();
  window.generatedHtml = result.html;
  window.generatedSlug = result.slug;
  document.getElementById('preview').innerHTML = result.preview;
  document.getElementById('code').textContent = result.html;
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
  const filename = (window.generatedSlug || 'new-page') + '.html';
  const blob = new Blob([window.generatedHtml || ''], {type:'text/html;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

document.getElementById('title').addEventListener('input', autoSlug);
document.getElementById('h1').addEventListener('input', autoSlug);
document.getElementById('generateBtn').addEventListener('click', render);
document.getElementById('copyBtn').addEventListener('click', copyHtml);
document.getElementById('downloadBtn').addEventListener('click', downloadHtml);
render();
