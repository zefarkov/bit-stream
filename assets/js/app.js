async function readJSON(path){ const r = await fetch(path); return await r.json(); }

function initLang(){
  const sel = document.querySelector('[data-lang-select]');
  if(!sel) return;
  sel.addEventListener('change', ()=> location.href = sel.value);
}

function pageLabels(lang){
  const m = {
    uz:{
      home:'Bosh sahifa', services:'Xizmatlar', projects:'Loyihalar', about:'Biz haqimizda', contacts:'Aloqa', ctcbtn:"Bog'lanish",
      hero1:'Biznes uchun ishonchli va barqaror IT infratuzilma',
      hero2:'BITSTREAM serverlar, tarmoqlar, xavfsizlik, monitoring, virtualizatsiya va texnik xizmat yo‘nalishlarini yagona boshqariladigan tizimga aylantiradi',
      heroP1:'Muammo chiqqanda chaqirish emas, muammo chiqmaydigan IT tizim kerak.',
      heroP2:'Tahlil, joriy etish, hujjatlashtirish va keyingi xizmat bitta mas’uliyat asosida olib boriladi.',
      heroP3:'Server • Tarmoq • Xavfsizlik • Backup • Monitoring • IP-telefoniya',
      ctaMain:'Maslahat oling', ctaSecond:'Xizmatlar',
      sectionStats:'BITSTREAM haqida asosiy faktlar',
      sectionStatsP:'Tajriba, xizmat yo‘nalishlari va ish yondashuvi asosiy ko‘rsatkichlarda jamlangan.',
      sectionServices:'Biz nima taklif qilamiz',
      sectionServicesP:'Alohida xizmatlar emas, yagona boshqariladigan IT tizimi.',
      sectionProjects:'Amaliy tajriba va bajarilgan loyihalar',
      sectionProjectsP:'Turli obyektlar uchun joriy etilgan yechimlar va real ishlar namunalari.',
      sectionAbout:'Biz haqimizda',
      sectionAboutP:'BITSTREAM — biznes uchun tartibli, ishonchli va barqaror IT hamkor.',
      sectionPartners:'Bizga ishonch bildirganlar',
      sectionPartnersP:'Turli sohalardagi kompaniyalar va tashkilotlar bilan ishlaganmiz.',
      sectionContact:'Bog‘lanish',
      sectionContactP:'Vazifangizni ayting. Biz uni texnik yechim va aniq reja ko‘rinishiga keltiramiz.',
      about1t:'Nima uchun BITSTREAM',
      about1p:'Serverlar, tarmoqlar, axborot xavfsizligi, video kuzatuv va IP-telefoniya yo‘nalishlarida professional xizmat ko‘rsatamiz. Biz tizimni shunchaki o‘rnatmaymiz — uni xavfsiz, tartibli va uzoq muddat ishlaydigan holatga keltiramiz.',
      about2t:'Qanday ishlaymiz',
      about2p:'Tahlil → ehtiyojni aniqlash → reja → joriy etish → sinov → hujjatlashtirish → keyingi xizmat. Asosiy maqsad — mijoz ishonchi, tizim barqarorligi va tezkor yordam.',
      contactCard1:'Ma’lumotlar',
      contactCard2:'So‘rov yuborish',
      contactHint:'Obyekt turi, foydalanuvchilar soni, filiallar mavjudligi, hozirgi muammo yoki kerakli xizmat turini yozing.',
      footerNote:'BITSTREAM — tijorat tashkilotlari uchun IT infratuzilma bo‘yicha texnik hamkor.',
      utility:'NEXT GENERATION NETWORK',
      sectionLink:'Sahifaga o‘tish',
      strictNote:'',
      serviceNotice:'Biz texnologiya emas, natija yetkazamiz.',
      contactNotice:'',
      ctaText:'Serverlar, tarmoqlar, xavfsizlik va support biznes uchun bitta boshqariladigan kontur bo‘lishi kerak.'
    },
    ru:{
      home:'Главная', services:'Услуги', projects:'Проекты', about:'О компании', contacts:'Контакты', ctcbtn:"Связаться",
      hero1:'Стабильная и управляемая IT-инфраструктура для бизнеса',
      hero2:'BITSTREAM собирает серверы, сети, безопасность, monitoring, виртуализацию и поддержку как одну рабочую систему.',
      heroP1:'Не разовый “вызов мастера”, а модель технического партнёра.',
      heroP2:'Аудит, внедрение, документация и дальнейшая поддержка — в одном контуре.',
      heroP3:'Серверы • Сети • Безопасность • Monitoring • Backup',
      ctaMain:'Получить консультацию', ctaSecond:'Услуги',
      sectionStats:'Факты, которые показывают серьёзность компании',
      sectionStatsP:'Содержательная база старого сайта перенесена в новую строгую структуру.',
      sectionServices:'Что мы предлагаем',
      sectionServicesP:'Не набор разрозненных работ, а единая управляемая инфраструктура.',
      sectionProjects:'Выполненные и типовые форматы проектов',
      sectionProjectsP:'Даже без раскрытия имён клиентов должен быть виден технический уровень.',
      sectionAbout:'О компании',
      sectionAboutP:'Bitstream — IT-компания с упором на стабильность, контроль и технический порядок.',
      sectionPartners:'Технологическая опора',
      sectionPartnersP:'Рабочий стек и практические экосистемы.',
      sectionContact:'Связаться',
      sectionContactP:'Опишите задачу. Мы переведём её в технический язык, план и решение.',
      about1t:'Позиция Bitstream',
      about1p:'BIT STREAM оказывает профессиональные услуги в направлениях серверной инфраструктуры, сетей, информационной безопасности, видеонаблюдения и IP-телефонии. Мы не просто устанавливаем систему, а доводим её до безопасного, документированного и стабильно работающего состояния.',
      about2t:'Как мы работаем',
      about2p:'Проверка текущей системы → выявление потребностей → предложение и план → внедрение и настройка → тестирование → передача документации → постоянная поддержка. Для нас важны доверие клиента, стабильность системы и быстрый технический отклик.',
      facts1:'Windows / Linux серверы: AD, DNS, DHCP, WEB, FTP, NTP, Print server',
      facts2:'Виртуализация: ESXi / Proxmox, распределение ресурсов, snapshot, оптимизация host',
      facts3:'Monitoring и backup: Zabbix, Grafana, NAS, автоматические backup, DR',
      facts4:'Безопасность и access: pfSense, Kerio, MikroTik, Fortinet, CCTV, Face ID, турникеты',
      contactCard1:'Основной контакт',
      contactCard2:'Что указать в первом сообщении',
      contactHint:'Напишите тип объекта, количество пользователей, наличие филиалов, текущую проблему или нужный тип решения.',
      footerNote:'BITSTREAM — технический партнёр по IT-инфраструктуре для коммерческих организаций.',
      utility:'NEXT GENERATION NETWORK',
      sectionLink:'Открыть страницу',
      strictNote:'',
      serviceNotice:'Приоритет не в том, чтобы продать больше оборудования. Приоритет — стабильная работа, контролируемый доступ, готовность backup и понятный регламент поддержки.',
      contactNotice:'В следующей итерации можно добавить форму, Telegram CTA, реальные логотипы клиентов, точнее отполировать SEO и усилить keyvisual.',
      ctaText:'Серверы, сети, безопасность и support должны работать как один управляемый контур для бизнеса.'
    },
    en:{
      home:'Home', services:'Services', projects:'Projects', about:'About', contacts:'Contacts', ctcbtn:"Contact",
      hero1:'Stable and controlled IT infrastructure for business',
      hero2:'BITSTREAM combines servers, networking, security, monitoring, virtualization, and support into one working system.',
      heroP1:'Not a one-off fixer model, but a technical partner model.',
      heroP2:'Audit, implementation, documentation, and ongoing support in one delivery line.',
      heroP3:'Servers • Networking • Security • Monitoring • Backup',
      ctaMain:'Get consultation', ctaSecond:'Services',
      sectionStats:'Facts that signal a serious company',
      sectionStatsP:'The legacy site’s service and positioning content has been migrated into the new stricter structure.',
      sectionServices:'What we offer',
      sectionServicesP:'Not disconnected tasks, but one controlled infrastructure model.',
      sectionProjects:'Delivered and typical project formats',
      sectionProjectsP:'The technical level should be visible even without exposing client names.',
      sectionAbout:'About the company',
      sectionAboutP:'Bitstream is an IT company focused on stability, control, and technical discipline.',
      sectionPartners:'Technology backbone',
      sectionPartnersP:'Working stacks and practical ecosystems.',
      sectionContact:'Contact',
      sectionContactP:'Send the scope. We will turn it into a technical plan and solution path.',
      about1t:'Where Bitstream stands',
      about1p:'BIT STREAM delivers professional services across server infrastructure, networking, information security, video surveillance, and IP telephony. We do not just install systems — we bring them into a secure, documented, and long-term stable operating state.',
      about2t:'How we work',
      about2p:'System review → needs definition → proposal and plan → deployment and configuration → testing → documentation handover → ongoing support. What matters to us is client trust, system stability, and fast technical response.',
      facts1:'Windows / Linux servers: AD, DNS, DHCP, WEB, FTP, NTP, Print server',
      facts2:'Virtualization: ESXi / Proxmox, resource allocation, snapshots, host optimization',
      facts3:'Monitoring and backup: Zabbix, Grafana, NAS, automated backup, DR',
      facts4:'Security and access: pfSense, Kerio, MikroTik, Fortinet, CCTV, Face ID, turnstiles',
      contactCard1:'Primary contact',
      contactCard2:'What to include in the first message',
      contactHint:'Send the site type, user count, branch structure, current issue, or the solution category you need.',
      footerNote:'BITSTREAM is an IT infrastructure partner for commercial organizations.',
      utility:'NEXT GENERATION NETWORK',
      sectionLink:'Open page',
      strictNote:'',
      serviceNotice:'The priority is not selling more hardware. The priority is stable operations, controlled access, backup readiness, and a clear support discipline.',
      contactNotice:'The next iteration can add a lead form, Telegram CTA, real client logos, tighter SEO polish, and a stronger key visual.',
      ctaText:'Servers, networks, security, and support should work as one controlled operating contour for the business.'
    }
  };
  return m[lang] || m.en;
}

function navHTML(lang, page){
  const L = pageLabels(lang);
  const links = [
    ['index.html',L.home,'index'],
    ['services.html',L.services,'services'],
    ['projects.html',L.projects,'projects'],
    ['about.html',L.about,'about'],
    ['contacts.html',L.contacts,'contacts']
  ];
  return links.map(([href,label,key])=>`<a class="${page===key?'active':''}" href="${href}">${label}</a>`).join('');
}

function langOptions(page, lang){
  const pages = {
    index: ['../uz/index.html','../ru/index.html','../en/index.html'],
    services: ['../uz/services.html','../ru/services.html','../en/services.html'],
    projects: ['../uz/projects.html','../ru/projects.html','../en/projects.html'],
    about: ['../uz/about.html','../ru/about.html','../en/about.html'],
    contacts: ['../uz/contacts.html','../ru/contacts.html','../en/contacts.html']
  };
  const values = pages[page] || pages.index;
  const labels = ['UZ','RU','EN'];
  const ids = ['uz','ru','en'];
  return values.map((value,i)=>`<option value="${value}" ${ids[i]===lang?'selected':''}>${labels[i]}</option>`).join('');
}

function renderHero(lang){
  const L = pageLabels(lang);
  const node = document.querySelector('[data-home-hero]');
  if(!node) return;
  node.innerHTML = `
    <div class="hero-grid">
      <div class="panel hero-copy">
        <div class="eyebrow">BITSTREAM / IT INFRASTRUCTURE</div>
        <h1>${L.hero1}</h1>
        <p>${L.hero2}</p>
        <ul class="hero-list">
          <li>${L.heroP1}</li>
          <li>${L.heroP2}</li>
          <li>${L.heroP3}</li>
        </ul>
        <div class="actions">
          <a class="btn btn-primary" href="contacts.html">${L.ctaMain}</a>
          <a class="btn" href="services.html">${L.ctaSecond}</a>
        </div>
      </div>
      <div class="panel hero-visual">
        <img src="../assets/img/brand/hero-infra.webp" alt="IT infrastructure illustration">
      </div>
    </div>`;
}

async function renderStats(lang){
  const data = await readJSON('../assets/data/stats.json');
  const node = document.querySelector('[data-stats]');
  if(!node) return;
  node.innerHTML = data.map(x=>`<article class="stat-card"><strong>${x.value}${x.suffix||''}</strong><span>${x.label[lang]||x.label.en}</span><div class="mini">${x.note[lang]||x.note.en}</div></article>`).join('');
}

async function renderServices(lang){
  const data = await readJSON('../assets/data/services.json');
  const node = document.querySelector('[data-services]');
  if(!node) return;
  node.innerHTML = data.map(x=>`<article class="service-card"><div class="inner"><h3>${x.title[lang]||x.title.en}</h3><p>${x.text[lang]||x.text.en}</p></div></article>`).join('');
}

async function renderCases(lang){
  const data = await readJSON('../assets/data/cases.json');
  const node = document.querySelector('[data-cases]');
  if(!node) return;
  const imgs = [
    '../assets/img/cases/projects_server.webp',
    '../assets/img/cases/projects_cctv.webp',
    '../assets/img/cases/projects_backup.webp',
    '../assets/img/cases/projects_net_sec.webp',
    '../assets/img/cases/projects_voip.webp',
    '../assets/img/cases/projects_faceid.webp'
  ];
  node.innerHTML = data.map((x,idx)=>`<article class="case-card panel">
      <div class="case-media"><img src="${imgs[idx % imgs.length]}" alt="${x.title[lang]||x.title.en}"></div>
      <div class="inner">
        <h3>${x.title[lang]||x.title.en}</h3>
        <p>${x.summary[lang]||x.summary.en}</p>
        <div class="chips">${x.stack.map(s=>`<span class="chip">${s}</span>`).join('')}</div>
      </div>
    </article>`).join('');
}

async function renderTeam(lang){
  const data = await readJSON('../assets/data/team.json');
  const node = document.querySelector('[data-team]');
  if(!node) return;
  const imgs = [
    '../assets/img/team/abdulaziz.webp',
    '../assets/img/team/farrux.png',
/** '../assets/img/team/nurmurod.webp',*/ 
    '../assets/img/team/bahrom.webp',
/**    '../assets/img/team/sobitxon.webp', */
/**    '../assets/img/team/dilshod.webp' */
  ];
  node.innerHTML = data.map((x,idx)=>`<article class="team-card panel">
      <div class="case-media"><img src="${imgs[idx % imgs.length]}" alt="${x.name}"></div>
      <div class="inner"><h3>${x.name}</h3><p><strong>${x.role[lang]||x.role.en}</strong></p><p>${x.bio[lang]||x.bio.en}</p></div>
    </article>`).join('');
}

async function renderPartners(){
  const data = await readJSON('../assets/data/partners.json');
  const node = document.querySelector('[data-partners]');
  if(!node) return;
  node.innerHTML = data.map(x=>`<article class="partner-card">${x}</article>`).join('');
}

async function renderSite(lang){
  const site = await readJSON('../assets/data/site.json');
  const c = site.company;
  document.querySelectorAll('[data-company-name]').forEach(el=>el.textContent=c.name);
  document.querySelectorAll('[data-company-tagline]').forEach(el=>el.textContent=c.tagline[lang]||c.tagline.en);
  document.querySelectorAll('[data-company-domain]').forEach(el=>{el.textContent=c.domain; el.href='https://'+c.domain;});
  document.querySelectorAll('[data-company-email]').forEach(el=>{el.textContent=c.email; el.href='mailto:'+c.email;});
  document.querySelectorAll('[data-company-phone]').forEach(el=>{el.textContent=c.phone; el.href='tel:'+c.phone.replace(/\s+/g,'');});
  document.querySelectorAll('[data-company-phone2]').forEach(el=>{el.textContent=c.phone2; el.href='tel:'+c.phone2.replace(/\s+/g,'');});
  document.querySelectorAll('[data-company-instagram]').forEach(el=>{el.textContent='@bitstreamuz'; el.href=c.instagram;});
  document.querySelectorAll('[data-company-telegram]').forEach(el=>{el.textContent='t.me/bitstreamuz'; el.href=c.telegram;});
  document.querySelectorAll('[data-company-address]').forEach(el=>el.textContent=c.address[lang]||c.address.en);
}

function renderStatic(lang,page){
  const L = pageLabels(lang);
  const nav = document.querySelector('[data-nav]');
  if(nav) nav.innerHTML = navHTML(lang,page);

  const sel = document.querySelector('[data-lang-select]');
  if(sel) sel.innerHTML = langOptions(page,lang);

  const fill = (selector, value) => { document.querySelectorAll(selector).forEach(el=>el.innerHTML = value); };
  fill('[data-home-title]', L.sectionStats);
  fill('[data-home-subtitle]', L.sectionStatsP);
  fill('[data-services-title]', L.sectionServices);
  fill('[data-services-subtitle]', L.sectionServicesP);
  fill('[data-projects-title]', L.sectionProjects);
  fill('[data-projects-subtitle]', L.sectionProjectsP);
  fill('[data-about-title]', L.sectionAbout);
  fill('[data-about-subtitle]', L.sectionAboutP);
  fill('[data-partners-title]', L.sectionPartners);
  fill('[data-partners-subtitle]', L.sectionPartnersP);
  fill('[data-contact-title]', L.sectionContact);
  fill('[data-contact-subtitle]', L.sectionContactP);
  fill('[data-about1t]', L.about1t);
  fill('[data-about1p]', L.about1p);
  fill('[data-about2t]', L.about2t);
  fill('[data-about2p]', L.about2p);
  fill('[data-fact1]', L.facts1);
  fill('[data-fact2]', L.facts2);
  fill('[data-fact3]', L.facts3);
  fill('[data-fact4]', L.facts4);
  fill('[data-contact-card1]', L.contactCard1);
  fill('[data-contact-card2]', L.contactCard2);
  fill('[data-contact-hint]', L.contactHint);
  fill('[data-footer-note]', L.footerNote);
  fill('[data-utility]', L.utility);
  fill('[data-section-link]', L.sectionLink);
  fill('[data-strict-note]', L.strictNote);
  fill('[data-service-notice]', L.serviceNotice);
  fill('[data-contact-notice]', L.contactNotice);
  fill('[data-cta-text]', L.ctaText);
  document.querySelectorAll('[data-contact-btn]').forEach(el=>el.textContent=L.ctcbtn);
}

document.addEventListener('DOMContentLoaded', async ()=>{
  initLang();
  const lang = document.body.dataset.lang || 'uz';
  const page = document.body.dataset.page || 'index';
  renderStatic(lang,page);
  await renderSite(lang);
  renderHero(lang);
  await Promise.all([
    renderStats(lang),
    renderServices(lang),
    renderCases(lang),
    renderTeam(lang),
    renderPartners()
  ]);
});
