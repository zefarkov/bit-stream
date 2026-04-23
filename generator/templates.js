const TEMPLATE_BANK = {
  uz: {
    labels: {
      problem: "Muammo nimada?",
      solution: "Yechim",
      forWho: "Kimlar uchun mos",
      why: "Nega bu muhim",
      process: "Qanday ishlaymiz",
      faq: "Ko‘p beriladigan savollar",
      summary: "Xulosa",
      services: "Xizmatlar",
      request: "So‘rov yuborish",
      contact: "Bog‘lanish"
    },
    common: {
      processSteps: [
        "avval hozirgi holatni ko‘ramiz va muammoni aniq ajratamiz",
        "so‘ng ortiqcha murakkabliksiz ishlaydigan variantni taklif qilamiz",
        "oxirida tizimni foydalansa bo‘ladigan va keyin boshqarish oson holatga keltiramiz"
      ]
    },
    byType: {
      camera: {
        lead: (t,c,e) => `${t} ko‘p joyda muammo chiqqandan keyin esga tushadi. ${c}dagi biznes uchun kamera shunchaki rasm emas, nazorat, tartib va xotirjamlik masalasi. ${e}`.trim(),
        problem: (t) => `${t} bo‘yicha eng ko‘p uchraydigan holat shunday: kamera bor, lekin kerak paytda foydasi kam. Tasvir noaniq bo‘ladi, yozuv topilmaydi yoki telefondan ko‘rish noqulay ishlaydi.`,
        solution: (t) => `${t} uchun yondashuv oddiy: joylashuvni to‘g‘ri tanlash, yozuvni tartibga keltirish, masofadan ko‘rishni sozlash va tizimni real foydalanishga tayyor qilish.`,
        points: ["kameralar joyini vazifaga qarab tanlash","yozuv saqlash va masofadan ko‘rishni sozlash","tizimni keyin boshqarish oson bo‘lishini ta’minlash"],
        forWho: "Magazinlar, omborlar, ofislar, ishlab chiqarish joylari va nazorat muhim bo‘lgan barcha obyektlar uchun.",
        why: "Yaxshi kamera tizimi nafaqat ko‘rsatadi, balki nizo va yo‘qotishlarning oldini ham oladi.",
        faq1q: "Nechta kamera kerak bo‘ladi?", faq1a: "Bu joyning tuzilishi va vazifasiga qarab aniqlanadi. Maqsad ko‘proq kamera emas, to‘g‘ri qamrov.",
        faq2q: "Telefondan ko‘rish bo‘ladimi?", faq2a: "Ha, tizim to‘g‘ri sozlansa, telefon orqali kuzatish qulay ishlaydi."
      },
      network: {
        lead: (t,c,e) => `${t} bo‘yicha muammo ko‘p joyda bir xil bo‘ladi: internet bor, lekin ishga tayansa bo‘lmaydi. ${c}dagi ofislar uchun tarmoq oddiy ko‘rinadi, lekin noto‘g‘ri sozlama butun ish kunini sekinlashtiradi. ${e}`.trim(),
        problem: (t) => `${t} kerak bo‘lganda odatda shikoyat bitta bo‘ladi: Wi‑Fi ushlamaydi, zoom uziladi, printer ko‘rinmaydi, xodimlar bir xonadan boshqasiga o‘tganda aloqa uziladi. Muammo ko‘pincha tezlikda emas, tarmoq tartibida bo‘ladi.`,
        solution: (t) => `${t} uchun biz avval hozirgi holatni ko‘ramiz, keyin qamrov, yuklama va xavfsizlik bo‘yicha amaliy yechim beramiz. Maqsad — internetni shunchaki yoqib qo‘yish emas, ishga tayansa bo‘ladigan tarmoq qilish.`,
        points: ["qamrov va tezlik sust joylarni aniqlash","router, switch va access pointlarni tartib bilan sozlash","xodimlar va mehmonlar uchun tarmoqni ajratish"],
        forWho: "Ofislar, o‘quv markazlar, klinikalar, filialli bizneslar va internet uzilishi ishga ta’sir qiladigan jamoalar uchun.",
        why: "Tarmoq yaxshi bo‘lsa, odamlar ishini sezmay qilaveradi. Yomon bo‘lsa, hamma asabiylashadi va vaqt ketadi.",
        faq1q: "Bu ish qancha vaqt oladi?", faq1a: "Obyekt hajmiga qarab. Oddiy ofislar ko‘pincha tez yakunlanadi, murakkab joylarda esa bosqichma-bosqich qilinadi.",
        faq2q: "Yangi uskuna shartmi?", faq2a: "Har doim emas. Avval mavjud holat ko‘riladi, keyin nimani qoldirish va nimani almashtirish kerakligi aytiladi."
      },
      server: {
        lead: (t,c,e) => `${t} odatda oddiy ko‘rinadigan, lekin biznesni ushlab turgan masala bo‘ladi. ${c}dagi ko‘p kompaniyada server to‘xtasa, ish ham sekinlashadi yoki umuman turib qoladi. ${e}`.trim(),
        problem: (t) => `Server bilan muammo chiqqanda belgilar bir xil: 1C sekinlashadi, fayllar ochilmaydi, odamlar tizimga kira olmaydi, xatolar ko‘payadi. ${t}ni cho‘zib yurish keyin kattaroq zarar beradi.`,
        solution: (t) => `${t} bo‘yicha biz muammoni vaqtincha bosmaymiz. Sababni topamiz, tizimni tiklaymiz va keyin yana shu joydan yiqilmasligi uchun tartibga keltiramiz.`,
        points: ["sekinlashayotgan yoki yiqilayotgan joyni aniqlash","server va xizmatlarni tiklash","backup va keyingi barqarorlikni yo‘lga qo‘yish"],
        forWho: "Ofislar, 1C ishlatadigan kompaniyalar, ma’lumotga tayangan bizneslar va serveri ish yuritishda markaziy rol o‘ynaydigan joylar uchun.",
        why: "Server muammosi odatda bitta kompyuter muammosi emas. U butun jarayonni tortib tushiradi.",
        faq1q: "Eski serverni saqlab qolsa bo‘ladimi?", faq1a: "Ba’zan bo‘ladi. Ba’zan esa yangilash arzonroq va to‘g‘riroq chiqadi. Qaror diagnostikadan keyin aytiladi.",
        faq2q: "Backup ham qilasizmi?", faq2a: "Ha. Server bo‘lsa, backup majburiy qatlam bo‘lishi kerak."
      },
      access: {
        lead: (t,c,e) => `${t} — bu chiroyli gadjet emas, tartib masalasi. ${c}dagi bizneslar uchun kim qachon kirdi va kim qayerga kira oladi — bularning hammasi amalda ahamiyatli. ${e}`.trim(),
        problem: (t) => `Davomat qo‘lda yuritilsa, eshiklar nazoratsiz bo‘lsa yoki omborga istagan odam kirib yursa, keyin muammo albatta chiqadi. ${t} shu tartibsizlikni yopadi.`,
        solution: (t) => `${t} bo‘yicha tizim shunday quriladi: kirish qoidalari aniq bo‘ladi, rahbar tushunadigan hisobot paydo bo‘ladi, xodimlar uchun ham foydalanish oson qoladi.`,
        points: ["kirish huquqlarini to‘g‘ri ajratish","davomat va hisobotni ko‘rinadigan qilish","eshik, turniket yoki Face ID ni bitta tartibga keltirish"],
        forWho: "Ofislar, omborlar, zavodlar, klinikalar va xodimlar harakati nazorati muhim bo‘lgan obyektlar uchun.",
        why: "Nazorat bo‘lmasa, intizom gapda qoladi. Tizim bo‘lsa, hamma narsa aniq bo‘ladi.",
        faq1q: "Face ID yaxshimi yoki karta?", faq1a: "Vaziyatga qarab. Ba’zi joyda Face ID qulay, ba’zi joyda karta yoki aralash variant to‘g‘riroq bo‘ladi.",
        faq2q: "Hisobot olsa bo‘ladimi?", faq2a: "Ha, kirish-chiqish va davomat bo‘yicha hisobot beriladi."
      },
      telephony: {
        lead: (t,c,e) => `${t} ko‘p biznesda ko‘rinmaydigan, lekin pulga ta’sir qiladigan qatlam. ${c}da mijoz qo‘ng‘irog‘i yo‘qolsa, savdo ham qo‘ldan ketadi. ${e}`.trim(),
        problem: (t) => `Aloqa tartibsiz bo‘lsa, kim javob berdi, kim olmadi, qaysi qo‘ng‘iroq yo‘qoldi — noma’lum bo‘lib qoladi. ${t} shunaqa chalkashliklarni yig‘ishtiradi.`,
        solution: (t) => `${t} bilan ichki raqamlar, yo‘naltirish, yozib olish va mijozga tez javob berish tizimi yo‘lga qo‘yiladi.`,
        points: ["ichki raqamlar va yo‘naltirishni sozlash","qo‘ng‘iroqlar nazoratini tartibga keltirish","savdo va support jamoasi uchun qulay aloqa yaratish"],
        forWho: "Ofislar, savdo bo‘limlari, call centerlar va telefon orqali ishlaydigan bizneslar uchun.",
        why: "Aloqa tartibli bo‘lsa, mijoz kutib qolmaydi va ish yo‘qolmaydi.",
        faq1q: "Eski telefonlar bilan ishlaydimi?", faq1a: "Ba’zan ishlaydi, ba’zan yangilash kerak bo‘ladi. Bu mavjud tizimga qarab hal qilinadi.",
        faq2q: "Qo‘ng‘iroqlar yozib olinadimi?", faq2a: "Ha, kerak bo‘lsa yozib olish va keyin eshitish yo‘lga qo‘yiladi."
      },
      support: {
        lead: (t,c,e) => `${t} deganda ko‘p rahbar bitta narsani xohlaydi: muammo chiqsa, kimdir tez va normal hal qilib bersin. ${c}dagi biznesga aynan shunaqa yondashuv kerak bo‘ladi. ${e}`.trim(),
        problem: (t) => `Bir joyda printer ishlamaydi, boshqa joyda kamera, yana bir joyda internet. Doim alohida-alohida odam qidirish biznesni charchatadi. ${t} shu parchalanishni yopadi.`,
        solution: (t) => `${t} orqali texnik masalalar bitta konturda yuradi: support, nazorat, tartib va keyingi tavsiya.`,
        points: ["kundalik muammolarni tez yopish","tizimlarni nazorat ostiga olish","biznes uchun doimiy texnik tayanch yaratish"],
        forWho: "Kichik va o‘rta biznes, alohida shtat ochishni istamaydigan kompaniyalar va tartibli IT hamkor kerak bo‘lgan rahbarlar uchun.",
        why: "Doimiy texnik tayanch bo‘lsa, mayda muammolar katta bosh og‘riqqa aylanmaydi.",
        faq1q: "Faqat muammo bo‘lsa ishlaysizmi?", faq1a: "Yo‘q, maqsad faqat o‘chirish emas. Tartib va profilaktika ham bo‘ladi.",
        faq2q: "Abonent formatida ishlasa bo‘ladimi?", faq2a: "Ha, doimiy xizmat formati ham mumkin."
      },
      custom: {
        lead: (t,c,e) => `${t} bo‘yicha to‘g‘ri yondashuv — vaziyatni tushunib, foydali va ishlaydigan yechim berish. ${c}dagi biznes uchun ortiqcha murakkablik emas, amaliy natija kerak. ${e}`.trim(),
        problem: (t) => `${t} bilan bog‘liq muammo odatda ish jarayonini sekinlashtiradi, odamlarni chalg‘itadi va nazoratni kamaytiradi.`,
        solution: (t) => `${t} bo‘yicha maqsad — muammoni oddiy va ishonchli yo‘l bilan yopish, keyin foydalanishni ham qulay qilish.`,
        points: ["mavjud holatni baholash","ishlaydigan variantni tanlash","keyingi foydalanishni soddalashtirish"],
        forWho: "Aniq amaliy natija kerak bo‘lgan bizneslar uchun.",
        why: "IT to‘g‘ri bo‘lsa, biznes o‘z ishiga ko‘proq e’tibor beradi.",
        faq1q: "Narx qanday belgilanadi?", faq1a: "Vazifa, obyekt va kerakli natijaga qarab aniqlanadi.",
        faq2q: "Masofadan ishlasa bo‘ladimi?", faq2a: "Ba’zi vazifalarda ha, ba’zilarida joyiga chiqish kerak bo‘ladi."
      }
    }
  },
  ru: {
    labels: {
      problem: "В чём проблема?",
      solution: "Решение",
      forWho: "Кому подходит",
      why: "Почему это важно",
      process: "Как мы работаем",
      faq: "Частые вопросы",
      summary: "Итог",
      services: "Услуги",
      request: "Оставить заявку",
      contact: "Связаться"
    },
    common: {
      processSteps: [
        "сначала смотрим реальную ситуацию и отделяем главное от шума",
        "потом предлагаем рабочий вариант без лишней сложности",
        "в конце приводим систему в состояние, которым удобно пользоваться дальше"
      ]
    },
    byType: {
      camera: {
        lead: (t,c,e) => `${t} вспоминают особенно остро после неприятной ситуации. Для бизнеса в ${c} камеры — это не для галочки, а для контроля и спокойствия. ${e}`.trim(),
        problem: (t) => `Часто камера как будто есть, но пользы мало: запись не находится, картинка слабая, удалённый просмотр неудобный. Основная ошибка — поставить оборудование, но не довести систему до нормальной работы.`,
        solution: (t) => `По ${t} мы смотрим задачу целиком: где ставить камеры, как хранить записи и как сделать так, чтобы системой реально пользовались.`,
        points: ["подбираем точки установки под задачу","настраиваем запись и удалённый просмотр","делаем систему понятной в использовании"],
        forWho: "Для магазинов, складов, офисов, производств и любых объектов, где важен контроль.",
        why: "Хорошая система видеонаблюдения не просто показывает, а помогает предотвращать потери и споры.",
        faq1q: "Сколько камер нужно?", faq1a: "Зависит от объекта. Важнее не количество, а правильное покрытие.",
        faq2q: "Можно смотреть с телефона?", faq2a: "Да, если система настроена нормально."
      },
      network: {
        lead: (t,c,e) => `${t} — это не про “интернет вроде есть”. Для офиса в ${c} важна сеть, на которую можно опираться в работе каждый день. ${e}`.trim(),
        problem: (t) => `Обычно жалобы звучат одинаково: Wi‑Fi ловит не везде, звонки обрываются, принтеры пропадают из сети, сотрудники злятся. В таких задачах проблема часто не в тарифе, а в хаосе внутри сети.`,
        solution: (t) => `По ${t} мы сначала смотрим реальную картину, потом выстраиваем сеть так, чтобы она была стабильной, понятной и нормальной в повседневной работе.`,
        points: ["ищем слабые зоны по покрытию и скорости","наводим порядок в роутерах, switch и access point","разделяем сеть сотрудников и гостей"],
        forWho: "Для офисов, учебных центров, клиник, филиальных компаний и любых команд, где связь влияет на работу.",
        why: "Когда сеть работает хорошо, её никто не замечает. Когда плохо — страдает весь день.",
        faq1q: "Сколько это занимает?", faq1a: "Зависит от объекта. Небольшие офисы делаются быстро, сложные — поэтапно.",
        faq2q: "Нужна новая техника?", faq2a: "Не всегда. Сначала смотрим, что уже есть, и только потом решаем, что менять."
      },
      server: {
        lead: (t,c,e) => `${t} выглядит как техническая тема, но на деле это вопрос стабильности всего бизнеса. В ${c} многие компании слишком поздно понимают, насколько сервер держит на себе процессы. ${e}`.trim(),
        problem: (t) => `Когда сервер начинает сыпаться, это быстро видно: 1С тормозит, файлы открываются долго, сотрудники не могут войти в систему, растут ошибки. Тянуть с этим опасно.`,
        solution: (t) => `По ${t} мы не просто “поднимаем” систему на время, а ищем причину, восстанавливаем работу и приводим всё в более устойчивое состояние.`,
        points: ["находим узкое место и причину сбоя","восстанавливаем работу сервисов","наводим порядок с backup и стабильностью"],
        forWho: "Для офисов, компаний с 1С, организаций с важными данными и любых бизнесов, где сервер — рабочая основа.",
        why: "Проблема сервера редко остаётся только проблемой сервера. Обычно она тянет вниз весь рабочий день.",
        faq1q: "Старый сервер можно оставить?", faq1a: "Иногда да. Иногда выгоднее обновить. Решение принимается после проверки.",
        faq2q: "Backup тоже настраиваете?", faq2a: "Да, без backup серверная работа неполная."
      },
      access: {
        lead: (t,c,e) => `${t} — это не про красивый гаджет, а про порядок. Для бизнеса в ${c} важно понимать, кто, когда и куда прошёл. ${e}`.trim(),
        problem: (t) => `Если проход сотрудников ведётся вручную, а доступ на объект толком не контролируется, рано или поздно это превращается в проблему.`,
        solution: (t) => `По ${t} мы выстраиваем систему так, чтобы правила доступа были понятны, отчёты читались без боли, а пользоваться всем этим было удобно.`,
        points: ["разделяем права доступа","настраиваем учёт входа и выхода","связываем двери, турникет и Face ID в одну систему"],
        forWho: "Для офисов, складов, производств, клиник и всех объектов, где важна дисциплина и контроль.",
        why: "Когда доступа нет на уровне системы, контроль держится на словах. Это ненадёжно.",
        faq1q: "Что лучше: Face ID или карта?", faq1a: "Смотря где. Иногда удобнее лицо, иногда карта, иногда смешанный вариант.",
        faq2q: "Отчёты будут?", faq2a: "Да, входы, выходы и посещаемость можно видеть в отчётах."
      },
      telephony: {
        lead: (t,c,e) => `${t} кажется мелочью, пока бизнес не начинает терять звонки. Для компаний в ${c} это напрямую влияет на продажи и сервис. ${e}`.trim(),
        problem: (t) => `Когда телефония не собрана в систему, непонятно кто ответил, кто не ответил, где потерялся клиент и почему нет контроля по звонкам.`,
        solution: (t) => `По ${t} мы наводим порядок: внутренние номера, маршрутизация, запись звонков, понятная схема обработки обращений.`,
        points: ["настраиваем внутренние номера и логику маршрутизации","подключаем запись и контроль звонков","делаем телефонию удобной для команды"],
        forWho: "Для офисов, отделов продаж, call center и любых команд, которые работают через звонки.",
        why: "Когда звонки теряются, бизнес этого не видит сразу, но потом платит за это деньгами.",
        faq1q: "Старые аппараты подойдут?", faq1a: "Иногда да, иногда лучше обновить часть оборудования.",
        faq2q: "Запись звонков можно включить?", faq2a: "Да, если это нужно для контроля и качества."
      },
      support: {
        lead: (t,c,e) => `${t} нужен там, где устали каждый раз искать нового мастера под очередную мелкую аварию. Для бизнеса в ${c} удобнее, когда есть одна понятная точка ответственности. ${e}`.trim(),
        problem: (t) => `Сегодня не работает принтер, завтра интернет, послезавтра камера. По отдельности это мелочи, вместе — постоянный шум и потеря времени.`,
        solution: (t) => `По ${t} мы собираем поддержку в один контур: ежедневные вопросы, контроль, порядок и понятный контакт для бизнеса.`,
        points: ["быстро закрываем повседневные проблемы","держим под контролем ключевые системы","даём бизнесу постоянную техническую опору"],
        forWho: "Для малого и среднего бизнеса, компаний без своего IT-штата и руководителей, которым нужен нормальный технический партнёр.",
        why: "Когда есть постоянная IT-опора, мелкие проблемы перестают разрастаться в хаос.",
        faq1q: "Это только аварийная помощь?", faq1a: "Нет, сюда входит и порядок, и профилактика, и сопровождение.",
        faq2q: "Можно работать по абонентке?", faq2a: "Да, такой формат подходит многим компаниям."
      },
      custom: {
        lead: (t,c,e) => `${t} — это задача, где бизнесу нужен не красивый жаргон, а нормальный результат. В ${c} это особенно заметно в повседневной работе. ${e}`.trim(),
        problem: (t) => `${t} обычно проявляется просто: что-то тормозит, мешает, путает людей и сбивает процессы.`,
        solution: (t) => `По ${t} мы смотрим на реальную задачу и предлагаем рабочий вариант без лишнего усложнения.`,
        points: ["разбираем текущую ситуацию","предлагаем понятное решение","делаем так, чтобы этим было удобно пользоваться"],
        forWho: "Для бизнеса, которому нужен практичный и понятный результат.",
        why: "Хорошее IT не должно отвлекать от бизнеса, оно должно помогать ему идти ровно.",
        faq1q: "Как считается цена?", faq1a: "По задаче, объекту и ожидаемому результату.",
        faq2q: "Можно решить удалённо?", faq2a: "Часть задач — да, часть требует выезда на место."
      }
    }
  },
  en: {
    labels: {
      problem: "What is the problem?",
      solution: "Solution",
      forWho: "Who this is for",
      why: "Why it matters",
      process: "How we work",
      faq: "Frequently asked questions",
      summary: "Summary",
      services: "Services",
      request: "Send request",
      contact: "Contact"
    },
    common: {
      processSteps: [
        "first we look at the actual setup and separate the real issue from the noise",
        "then we propose a practical option without unnecessary complexity",
        "finally we make the system stable and easy to use later"
      ]
    },
    byType: {
      custom: {
        lead: (t,c,e) => `${t} should be explained in a practical way for real business readers in ${c}. ${e}`.trim(),
        problem: (t) => `The issue usually slows down daily operations, creates confusion, and affects control.`,
        solution: (t) => `The goal is to solve ${t} in a way that is useful, stable, and manageable later.`,
        points: ["assess the current setup","apply a practical fix","keep the result easy to use"],
        forWho: "For companies that want practical IT results.",
        why: "Good IT should reduce friction, not create more of it.",
        faq1q: "How is pricing defined?", faq1a: "By scope, conditions, and the required result.",
        faq2q: "Can this be done remotely?", faq2a: "Some tasks can, some require on-site work."
      }
    }
  }
};