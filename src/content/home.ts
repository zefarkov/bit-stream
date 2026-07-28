import type { Lang } from '../config/site';

type Item = {
  title: string;
  text: string;
};

type Solution = Item & {
  items: string[];
};

type Engagement = Solution & {
  mode: string;
};

type CaseStudy = Solution & {
  outcome: string;
};

export type HomeCopy = {
  title: string;
  lead: string;
  primary: string;
  secondary: string;
  trust: string[];
  panelTitle: string;
  signals: Array<[string, string]>;
  solutionsTitle: string;
  solutionsLead: string;
  solutions: Solution[];
  intlTitle: string;
  intlLead: string;
  benefits: Item[];
  engagementTitle: string;
  engagementLead: string;
  engagementNote: string;
  engagements: Engagement[];
  workTitle: string;
  workLead: string;
  cases: CaseStudy[];
  contactTitle: string;
  contactLead: string;
  type: string;
  types: string[];
  details: string;
  detailsPh: string;
  contact: string;
  contactPh: string;
  send: string;
  note: string;
  footer: string;
};

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    title: 'IT operations in Uzbekistan. One accountable partner.',
    lead: 'Infrastructure, equipment, on-site support and technical operations for companies that value speed, clarity and reliable execution.',
    primary: 'Request assistance',
    secondary: 'Call now',
    trust: ['English, Russian and Uzbek', 'On-site and remote support', 'Invoices and business documentation'],
    panelTitle: 'From request to working result — without vendor chaos.',
    signals: [
      ['First response', 'Clear next step'],
      ['Scope', 'Agreed before work'],
      ['Delivery', 'Procurement to handover'],
      ['Support', 'One-off, monthly or SLA'],
    ],
    solutionsTitle: 'What we take responsibility for',
    solutionsLead: 'Four areas, one point of contact and one accountable result.',
    solutions: [
      {
        title: 'IT support and operations',
        text: 'Daily employee issues, computers, printers, servers, 1C, email and on-site assistance.',
        items: ['Remote and on-site support', 'Incident resolution', 'Ongoing maintenance'],
      },
      {
        title: 'Office and infrastructure',
        text: 'Opening or upgrading an office, branch, warehouse or retail location.',
        items: ['Network and Wi-Fi', 'Workplaces and servers', 'Documentation and handover'],
      },
      {
        title: 'Security systems',
        text: 'Video surveillance, access control and reliable archive storage.',
        items: ['CCTV design and installation', 'Access control', 'Maintenance and recovery'],
      },
      {
        title: 'Equipment and procurement',
        text: 'We source, verify, deliver, install and support compatible equipment locally.',
        items: ['Local supplier coordination', 'Compatibility and warranty', 'One quote, one result'],
      },
    ],
    intlTitle: 'For international companies in Uzbekistan',
    intlLead: 'We work as your local technical team, remote hands and vendor coordinator — aligned with your head office or regional IT department.',
    benefits: [
      { title: 'English-speaking coordination', text: 'Clear communication with local staff, headquarters and external MSPs.' },
      { title: 'Local procurement', text: 'Compatible equipment, supplier coordination, delivery and installation.' },
      { title: 'Business-ready process', text: 'Scopes, invoices, documentation, photo reports and accountable handover.' },
      { title: 'Nationwide execution', text: 'Projects and support in Tashkent and other regions of Uzbekistan.' },
    ],
    engagementTitle: 'Choose the working model',
    engagementLead: 'The same team can close one task or take ongoing responsibility for the site.',
    engagementNote: 'Scope and commercial terms are agreed before work. Procurement, delivery, installation and support can be included in one proposal.',
    engagements: [
      {
        mode: 'Fixed scope',
        title: 'One-off task',
        text: 'For an incident, installation, office move, equipment purchase or a defined technical job.',
        items: ['Diagnosis and action plan', 'Agreed scope and price', 'Completion and handover'],
      },
      {
        mode: 'Monthly plan',
        title: 'Ongoing IT support',
        text: 'A single point of contact for employee requests, infrastructure maintenance and planned visits.',
        items: ['Remote and on-site help', 'Preventive maintenance', 'Monthly responsibility'],
      },
      {
        mode: 'SLA-based',
        title: 'Managed IT operations',
        text: 'For companies that need defined response terms, monitoring, reporting and vendor coordination.',
        items: ['Agreed response levels', 'Backup and infrastructure control', 'Reporting and documentation'],
      },
    ],
    workTitle: 'Delivered work',
    workLead: 'Systems we have already implemented and prepared for ongoing operation.',
    cases: [
      {
        title: 'Server and office infrastructure',
        text: 'Windows and Linux servers, AD, DNS, DHCP and web services were deployed and documented.',
        items: ['Configuration and migration', 'Documentation and handover', 'Prepared for stable operation'],
        outcome: 'A structured and supportable infrastructure instead of disconnected systems.',
      },
      {
        title: 'Video surveillance and access control',
        text: 'Cameras, Face ID and access-control systems were installed and configured for business sites.',
        items: ['Security coverage', 'Controlled staff and visitor access', 'Maintenance-ready configuration'],
        outcome: 'Better site visibility and controlled access.',
      },
      {
        title: 'Local procurement and installation',
        text: 'Compatible equipment and consumables were sourced locally, delivered and installed for an international office.',
        items: ['Compatibility check', 'Supplier coordination', 'Delivery and on-site installation'],
        outcome: 'One responsible contractor instead of a separate supplier and technician.',
      },
    ],
    contactTitle: 'Tell us what needs to work',
    contactLead: 'Leave a phone number, email, Telegram username or any link where we can reach you.',
    type: 'What do you need?',
    types: ['Urgent technical issue', 'Remote hands or local IT partner', 'Ongoing IT support', 'New office or branch', 'Cameras or access control', 'Equipment procurement', 'Network or Wi-Fi', 'Other request'],
    details: 'Task details',
    detailsPh: 'What happened, where is the site, and what result do you need?',
    contact: 'How should we contact you?',
    contactPh: 'Phone, email, @telegram or another link',
    send: 'Send request',
    note: 'The form opens Telegram with the prepared request. You can also call or email us directly.',
    footer: 'Local IT operations, infrastructure and support for business in Uzbekistan.',
  },
  ru: {
    title: 'IT-операции в Узбекистане. Один ответственный подрядчик.',
    lead: 'Инфраструктура, оборудование, выездная поддержка и технические работы для компаний, которым важны скорость, ясность и результат.',
    primary: 'Описать задачу',
    secondary: 'Позвонить',
    trust: ['Русский, английский и узбекский', 'Выездная и удалённая поддержка', 'Договоры, счета и документы'],
    panelTitle: 'От запроса до работающего результата — без хаоса подрядчиков.',
    signals: [
      ['Первый ответ', 'Понятный следующий шаг'],
      ['Объём работ', 'Согласуем до начала'],
      ['Исполнение', 'От закупки до сдачи'],
      ['Поддержка', 'Разово, ежемесячно или SLA'],
    ],
    solutionsTitle: 'За что мы отвечаем',
    solutionsLead: 'Четыре направления, одно контактное лицо и один ответственный результат.',
    solutions: [
      {
        title: 'IT-поддержка и обслуживание',
        text: 'Проблемы сотрудников, компьютеры, принтеры, серверы, 1С, почта и выезды.',
        items: ['Удалённая и выездная помощь', 'Устранение инцидентов', 'Постоянное обслуживание'],
      },
      {
        title: 'Офис и инфраструктура',
        text: 'Запуск или модернизация офиса, филиала, склада или магазина.',
        items: ['Сеть и Wi-Fi', 'Рабочие места и серверы', 'Документация и сдача'],
      },
      {
        title: 'Системы безопасности',
        text: 'Видеонаблюдение, контроль доступа и надёжное хранение архива.',
        items: ['Проектирование и монтаж камер', 'Контроль доступа', 'Обслуживание и восстановление'],
      },
      {
        title: 'Оборудование и закупки',
        text: 'Подберём, проверим, доставим, установим и возьмём оборудование на поддержку.',
        items: ['Работа с местными поставщиками', 'Совместимость и гарантия', 'Одно предложение, один результат'],
      },
    ],
    intlTitle: 'Для международных компаний в Узбекистане',
    intlLead: 'Работаем как локальная техническая команда, remote hands и координатор поставщиков — вместе с головным офисом или региональным IT-отделом.',
    benefits: [
      { title: 'Коммуникация на английском', text: 'Понятная связь с локальной командой, головным офисом и внешними MSP.' },
      { title: 'Локальные закупки', text: 'Совместимое оборудование, координация поставщиков, доставка и установка.' },
      { title: 'Корпоративный процесс', text: 'Сметы, счета, документация, фотоотчёты и ответственная сдача.' },
      { title: 'Работа по Узбекистану', text: 'Проекты и поддержка в Ташкенте и других регионах страны.' },
    ],
    engagementTitle: 'Выберите формат работы',
    engagementLead: 'Одна команда может закрыть отдельную задачу или взять постоянную ответственность за объект.',
    engagementNote: 'Объём и коммерческие условия согласуются до начала работ. Закупка, доставка, установка и поддержка могут входить в одно предложение.',
    engagements: [
      {
        mode: 'Фиксированный объём',
        title: 'Разовая задача',
        text: 'Для аварии, монтажа, переезда офиса, закупки оборудования или конкретной технической работы.',
        items: ['Диагностика и план действий', 'Согласованный объём и стоимость', 'Выполнение и сдача'],
      },
      {
        mode: 'Ежемесячный план',
        title: 'Постоянная IT-поддержка',
        text: 'Единая точка обращения для сотрудников, обслуживания инфраструктуры и плановых выездов.',
        items: ['Удалённая и выездная помощь', 'Профилактические работы', 'Ежемесячная ответственность'],
      },
      {
        mode: 'По SLA',
        title: 'Управляемые IT-операции',
        text: 'Для компаний, которым нужны согласованные сроки реакции, мониторинг, отчёты и координация подрядчиков.',
        items: ['Согласованные уровни реакции', 'Контроль backup и инфраструктуры', 'Отчётность и документация'],
      },
    ],
    workTitle: 'Выполненные работы',
    workLead: 'Системы, которые мы уже внедряли и подготавливали к дальнейшей эксплуатации.',
    cases: [
      {
        title: 'Серверная и офисная инфраструктура',
        text: 'Внедрены и задокументированы Windows и Linux серверы, AD, DNS, DHCP и web-сервисы.',
        items: ['Настройка и миграция', 'Документация и сдача', 'Подготовка к стабильной работе'],
        outcome: 'Управляемая инфраструктура вместо набора несвязанных систем.',
      },
      {
        title: 'Видеонаблюдение и контроль доступа',
        text: 'На бизнес-объектах установлены и настроены камеры, Face ID и системы контроля доступа.',
        items: ['Покрытие зон безопасности', 'Управление доступом сотрудников и гостей', 'Подготовка к обслуживанию'],
        outcome: 'Контролируемый доступ и лучшая видимость происходящего на объекте.',
      },
      {
        title: 'Локальная закупка и установка',
        text: 'Для офиса международной компании нашли совместимое оборудование и расходники, доставили и установили.',
        items: ['Проверка совместимости', 'Координация поставщиков', 'Доставка и установка на объекте'],
        outcome: 'Один ответственный подрядчик вместо отдельного поставщика и мастера.',
      },
    ],
    contactTitle: 'Расскажите, что должно работать',
    contactLead: 'Оставьте телефон, email, Telegram или любую ссылку, по которой с вами можно связаться.',
    type: 'Что требуется?',
    types: ['Срочная техническая проблема', 'Remote hands или локальный IT-партнёр', 'Постоянная IT-поддержка', 'Новый офис или филиал', 'Камеры или контроль доступа', 'Закупка оборудования', 'Сеть или Wi-Fi', 'Другая задача'],
    details: 'Описание задачи',
    detailsPh: 'Что произошло, где находится объект и какой результат нужен?',
    contact: 'Как с вами связаться?',
    contactPh: 'Телефон, email, @telegram или другая ссылка',
    send: 'Отправить заявку',
    note: 'Форма откроет Telegram с готовым текстом заявки. Также можно сразу позвонить или написать на почту.',
    footer: 'Локальные IT-операции, инфраструктура и поддержка бизнеса в Узбекистане.',
  },
  uz: {
    title: 'O‘zbekistondagi IT ishlaringiz. Bitta mas’ul hamkor.',
    lead: 'Tezlik, aniqlik va natijani qadrlaydigan kompaniyalar uchun infratuzilma, uskunalar va texnik xizmat.',
    primary: 'Vazifani yozish',
    secondary: 'Qo‘ng‘iroq qilish',
    trust: ['O‘zbek, rus va ingliz tillari', 'Joyida va masofaviy yordam', 'Shartnoma, hisob va hujjatlar'],
    panelTitle: 'So‘rovdan ishlaydigan natijagacha — ko‘p pudratchilarsiz.',
    signals: [
      ['Birinchi javob', 'Aniq keyingi qadam'],
      ['Ish hajmi', 'Boshlashdan oldin kelishiladi'],
      ['Bajarish', 'Xariddan topshirishgacha'],
      ['Xizmat', 'Bir martalik, oylik yoki SLA'],
    ],
    solutionsTitle: 'Nima uchun javob beramiz',
    solutionsLead: 'To‘rtta yo‘nalish, bitta aloqa nuqtasi va bitta mas’ul natija.',
    solutions: [
      {
        title: 'IT yordam va xizmat',
        text: 'Xodimlar, kompyuterlar, printerlar, serverlar, 1C, pochta va joyiga chiqish.',
        items: ['Masofaviy va joyida yordam', 'Nosozliklarni bartaraf etish', 'Doimiy xizmat'],
      },
      {
        title: 'Ofis va infratuzilma',
        text: 'Ofis, filial, ombor yoki savdo nuqtasini ishga tushirish va yangilash.',
        items: ['Tarmoq va Wi-Fi', 'Ish joylari va serverlar', 'Hujjatlashtirish va topshirish'],
      },
      {
        title: 'Xavfsizlik tizimlari',
        text: 'Videokuzatuv, kirishni nazorat qilish va ishonchli arxiv.',
        items: ['Kameralarni loyihalash va o‘rnatish', 'Kirish nazorati', 'Xizmat va tiklash'],
      },
      {
        title: 'Uskuna va xaridlar',
        text: 'Mos uskunani topamiz, tekshiramiz, yetkazamiz, o‘rnatamiz va xizmat ko‘rsatamiz.',
        items: ['Mahalliy yetkazib beruvchilar', 'Moslik va kafolat', 'Bitta taklif, bitta natija'],
      },
    ],
    intlTitle: 'O‘zbekistondagi xalqaro kompaniyalar uchun',
    intlLead: 'Bosh ofis yoki hududiy IT bo‘lim bilan birga mahalliy texnik jamoa, remote hands va yetkazib beruvchilar koordinatori sifatida ishlaymiz.',
    benefits: [
      { title: 'Ingliz tilida aloqa', text: 'Mahalliy jamoa, bosh ofis va tashqi MSP bilan aniq muloqot.' },
      { title: 'Mahalliy xaridlar', text: 'Mos uskuna, yetkazib beruvchilar koordinatsiyasi, yetkazish va o‘rnatish.' },
      { title: 'Biznes uchun tayyor jarayon', text: 'Smeta, hisob, hujjatlar, foto hisobot va mas’ul topshirish.' },
      { title: 'O‘zbekiston bo‘ylab', text: 'Toshkent va boshqa hududlarda loyihalar va xizmat.' },
    ],
    engagementTitle: 'Ish formatini tanlang',
    engagementLead: 'Bitta jamoa alohida vazifani bajarishi yoki obyekt uchun doimiy javobgarlikni olishi mumkin.',
    engagementNote: 'Ish hajmi va tijorat shartlari boshlashdan oldin kelishiladi. Xarid, yetkazish, o‘rnatish va xizmat bitta taklifga kiritilishi mumkin.',
    engagements: [
      {
        mode: 'Aniq hajm',
        title: 'Bir martalik vazifa',
        text: 'Nosozlik, montaj, ofis ko‘chishi, uskuna xaridi yoki aniq texnik ish uchun.',
        items: ['Diagnostika va harakat rejasi', 'Kelishilgan hajm va narx', 'Bajarish va topshirish'],
      },
      {
        mode: 'Oylik reja',
        title: 'Doimiy IT yordam',
        text: 'Xodimlar so‘rovlari, infratuzilma xizmati va rejalashtirilgan tashriflar uchun yagona aloqa nuqtasi.',
        items: ['Masofaviy va joyida yordam', 'Profilaktik xizmat', 'Oylik javobgarlik'],
      },
      {
        mode: 'SLA asosida',
        title: 'Boshqariladigan IT operatsiyalar',
        text: 'Aniq javob muddatlari, monitoring, hisobot va yetkazib beruvchilar koordinatsiyasi kerak bo‘lgan kompaniyalar uchun.',
        items: ['Kelishilgan javob darajalari', 'Backup va infratuzilma nazorati', 'Hisobot va hujjatlar'],
      },
    ],
    workTitle: 'Bajarilgan ishlar',
    workLead: 'Biz joriy qilgan va keyingi foydalanishga tayyorlagan tizimlar.',
    cases: [
      {
        title: 'Server va ofis infratuzilmasi',
        text: 'Windows va Linux serverlari, AD, DNS, DHCP va web xizmatlari joriy qilinib hujjatlashtirildi.',
        items: ['Sozlash va migratsiya', 'Hujjatlashtirish va topshirish', 'Barqaror ishlashga tayyorlash'],
        outcome: 'Alohida tizimlar o‘rniga boshqariladigan infratuzilma.',
      },
      {
        title: 'Videokuzatuv va kirish nazorati',
        text: 'Biznes obyektlarida kameralar, Face ID va kirishni nazorat qilish tizimlari o‘rnatildi va sozlandi.',
        items: ['Xavfsizlik zonalarini qamrab olish', 'Xodim va mehmonlar kirishini boshqarish', 'Xizmatga tayyor konfiguratsiya'],
        outcome: 'Obyektni yaxshiroq kuzatish va nazorat qilinadigan kirish.',
      },
      {
        title: 'Mahalliy xarid va o‘rnatish',
        text: 'Xalqaro kompaniya ofisi uchun mos uskuna va sarf materiallari topildi, yetkazildi va o‘rnatildi.',
        items: ['Moslikni tekshirish', 'Yetkazib beruvchilar koordinatsiyasi', 'Yetkazish va joyida o‘rnatish'],
        outcome: 'Alohida yetkazib beruvchi va ustaning o‘rniga bitta mas’ul pudratchi.',
      },
    ],
    contactTitle: 'Nima ishlashi kerakligini yozing',
    contactLead: 'Telefon, email, Telegram yoki siz bilan bog‘lanish mumkin bo‘lgan boshqa havolani qoldiring.',
    type: 'Nima kerak?',
    types: ['Shoshilinch texnik muammo', 'Remote hands yoki mahalliy IT hamkor', 'Doimiy IT yordam', 'Yangi ofis yoki filial', 'Kamera yoki kirish nazorati', 'Uskuna xaridi', 'Tarmoq yoki Wi-Fi', 'Boshqa vazifa'],
    details: 'Vazifa tavsifi',
    detailsPh: 'Nima bo‘ldi, obyekt qayerda va qanday natija kerak?',
    contact: 'Siz bilan qanday bog‘lanamiz?',
    contactPh: 'Telefon, email, @telegram yoki boshqa havola',
    send: 'So‘rov yuborish',
    note: 'Forma Telegram’da tayyor so‘rov matnini ochadi. Telefon yoki email orqali ham bog‘lanishingiz mumkin.',
    footer: 'O‘zbekistondagi biznes uchun IT infratuzilma va texnik xizmat.',
  },
};
