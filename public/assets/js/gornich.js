const TARIFFS = ["Стандарт", "Генеральная", "После ремонта", "Окна", "Глажка"];

const SELLERS = [
  { id: "daria", name: "Дарья К.", hour: 92, areas: ["Тель-Авив", "Яффо"], areasText: "Тель-Авив, Яффо", langs: ["русский", "иврит"], langsText: "русский · иврит", services: ["Стандарт", "Глажка", "Окна"], slots: ["09:00", "11:00", "14:00", "16:00"], photo: "assets/photos/daria.png" },
  { id: "noa", name: "Noa R.", hour: 105, areas: ["Рамат-Ган"], areasText: "Рамат-Ган, Гиватаим", langs: ["иврит", "English"], langsText: "иврит · English", services: ["Генеральная", "Окна"], slots: ["10:00", "13:00", "15:00"], photo: "assets/photos/noa.png" },
  { id: "marina", name: "Марина Л.", hour: 85, areas: ["Холон"], areasText: "Холон, Бат-Ям", langs: ["русский", "иврит"], langsText: "русский · иврит", services: ["Стандарт", "После ремонта"], slots: ["09:00", "12:00", "16:00"], photo: "assets/photos/marina.png" },
  { id: "yael", name: "Yael S.", hour: 110, areas: ["Тель-Авив"], areasText: "Тель-Авив", langs: ["иврит", "English"], langsText: "иврит · English", services: ["Окна", "Генеральная"], slots: ["11:00", "14:00", "17:00"], photo: "assets/photos/yael.png" },
  { id: "olga", name: "Ольга П.", hour: 88, areas: ["Петах-Тиква"], areasText: "Петах-Тиква", langs: ["русский"], langsText: "русский", services: ["Стандарт", "Глажка", "Окна"], slots: ["08:30", "12:30", "15:30"], photo: "assets/photos/olga.png" },
  { id: "tamar", name: "Tamar B.", hour: 95, areas: ["Хайфа"], areasText: "Хайфа", langs: ["иврит", "русский"], langsText: "иврит · русский", services: ["Стандарт", "Генеральная"], slots: ["09:00", "13:00", "16:00"], photo: "assets/photos/tamar.png" },
];

const I18N = {
  ru: {
    folioL: "№ 18  ·  ВЫПУСК",
    folioR: "ИЗРАИЛЬ  ·  ЧАСЫ УБОРКИ",
    sub: "часы уборки  ·  своя витрина  ·  свой час",
    navSearch: "Поиск",
    navTariffs: "Тарифы",
    navVitrine: "Витрина",
    navRules: "Правила",
    gateKicker: "Утренний выпуск рынка часов",
    gateTitle: "Две двери. Один прилавок.",
    gateLede: "Не группа в чате и не агентство без лица. Горничная ставит свой час. Клиент собирает визит: тариф, метраж, окно, слот.",
    doorClient: "Ищу уборку",
    doorClientP: "Найти час, слот и человека. Тип уборки меняет время, не чужой прайс.",
    doorMaid: "Я горничная",
    doorMaidP: "Открыть свою витрину. Свой час, услуги, районы — как лавка.",
    tagEnter: "вход",
    tagNoChat: "без чата",
    shelfToday: "НА ПОЛКЕ СЕГОДНЯ",
    tagHours: "час × оценка часов",
    gateFoot: "Цена часа видна  ·  без торга в чате  ·  заказ = запрос, не подтверждённый визит  ·  отзывы только после визитов",
    gateFootR: "RU активен  ·  HE в переключателе",
    clientTitle: "Свой час горничной.",
    clientLede: "Не агентство и не группа в чате. Человек с лицом, своим прайсом и слотами. Тип уборки меняет часы — не подменяет чужую ставку.",
    calc: "РАСЧЁТ ВИЗИТА",
    city: "Город",
    meters: "Метраж",
    date: "Дата",
    type: "Тип",
    find: "Найти горничную",
    shelfTariffs: "ТАРИФЫ НА ПОЛКЕ",
    how: "КАК ЭТО РАБОТАЕТ",
    how1t: "01  Тариф",
    how1: "Выбираете тип уборки. Он задаёт оценку часов, не чужой прайс.",
    how2t: "02  Метраж",
    how2: "Город, метры и дата. На экране сразу вилка времени.",
    how3t: "03  Витрина",
    how3: "Смотрите окно: лицо, языки, районы, услуги, слоты, час.",
    how4t: "04  Запрос",
    how4: "Человек + слот + сумма. Это запрос, не подтверждённый визит.",
    vitrine: "ВИТРИНА",
    noRating: "без рейтинга  ·  отзывы после визитов",
    reviewsAfter: "отзывы появятся после визитов",
    openWindow: "Открыть окно",
    footLive: "GORNICH  ·  витрина живёт, когда горничная выставляет час  ·  города без окон не обещаем",
    areas: "РАЙОНЫ",
    langs: "ЯЗЫКИ",
    windowsCount: "витрин",
    shopCrumb: "Витрина  /  так выглядит окно",
    herHour: "её час",
    shopServices: "ЛАВКА УСЛУГ",
    timesM2: "× метраж",
    visitBuild: "СБОР ВИЗИТА",
    sumBefore: "Сумма до заявки. В чате цена не переписывается.",
    chooseOrder: "Выбрать и заказать",
    reviews: "ОТЗЫВЫ",
    reviewsNote: "Пустые линейки — не рейтинг. Отзывы появятся после визитов. Звёзд и «проверена» здесь нет.",
    orderTitle: "Собрать запрос",
    orderLede: "Человек, слот и сумма на одном бланке. Это ещё не подтверждённый визит и не оплата.",
    rowType: "Тип",
    rowM2: "Метраж",
    rowHours: "Оценка времени",
    rowHour: "Час горничной",
    rowSlot: "Слот",
    rowSum: "Сумма",
    order: "Заказать",
    stamp1: "ЗАПРОС",
    stamp2: "ОТПРАВЛЕН",
    stampP: "Горничная ещё подтверждает. Чаты и торг не открываются. Если слот не сойдётся — запрос просто закроется.",
    loginTitle: "Вход в витрину",
    loginLede: "Сначала вход. Лавку собираете уже внутри — услуга, час, район.",
    mail: "Почта",
    pass: "Пароль",
    enter: "Войти и открыть витрину",
    create: "Нет окна — создать витрину",
    cabinetTitle: "Ваша лавка",
    cabinetLede: "Лицо, час, услуги, районы, слоты — это же окно видит клиент.",
    profile: "ПРОФИЛЬ",
    nameField: "Имя на витрине",
    hourField: "Час, ₪",
    langsField: "Языки",
    areasField: "Районы",
    servicesShelf: "УСЛУГИ НА ПОЛКЕ",
    on: "вкл",
    off: "выкл",
    openIntake: "Открыть приём заказов",
    clientSees: "ТАК ВИДИТ КЛИЕНТ",
    cabinetNote: "Заказов, рейтинга и «уже 40 визитов» в кабинете нет. Сначала живая витрина, потом отзывы.",
    rulesTitle: "Правила рынка",
    rulesLede: "Не бейджи и не «проверена». Коротко: что видно до заявки, кто подтверждает, что нельзя обещать.",
    r1t: "Цена",
    r1: "На карточке стоит час горничной. Тип уборки умножает время. Сумма визита собирается до кнопки «Заказать» и не торгуется в чате.",
    r2t: "Запрос",
    r2: "Кнопка собирает человека, слот и ₪. Статус — «запрос отправлен». Визит не подтверждён, оплаты на экране нет.",
    r3t: "Пустой город",
    r3: "Если в городе нет окон — не рисуем фейковый список. Покрытие растёт вместе с витринами.",
    r4t: "Отзывы",
    r4: "Каркас есть. Текста нет, пока не было визита. Рейтинга 4.9, счётчиков и цитат не будет, пока их нет.",
    r5t: "Горничная",
    r5: "Свой час, своё лицо, свои районы. Доход и поток заказов платформа не гарантирует.",
    r6t: "Язык",
    r6: "Иврит и русский равны переключателем. На одном экране один язык.",
    hoursWord: "ч",
    hourWord: "час горничной",
  },
  he: {
    folioL: "מס׳ 18  ·  גיליון",
    folioR: "ישראל  ·  שעות ניקיון",
    sub: "שעות ניקיון  ·  חלון משלה  ·  שעה משלה",
    navSearch: "חיפוש",
    navTariffs: "תעריפים",
    navVitrine: "חלון",
    navRules: "כללים",
    gateKicker: "גיליון בוקר של שוק השעות",
    gateTitle: "שתי דלתות. דלפק אחד.",
    gateLede: "לא קבוצה בצ׳אט ולא סוכנות בלי פנים. המנקה קובעת את השעה שלה. הלקוח מרכיב ביקור: תעריף, מטרים, חלון, משבצת.",
    doorClient: "מחפשת ניקיון",
    doorClientP: "למצוא שעה, משבצת ואדם. סוג הניקיון משנה זמן, לא מחיר של מישהי אחרת.",
    doorMaid: "אני מנקה",
    doorMaidP: "לפתוח חלון משלי. שעה, שירותים, אזורים — כמו חנות.",
    tagEnter: "כניסה",
    tagNoChat: "בלי צ׳אט",
    shelfToday: "על המדף היום",
    tagHours: "שעה × הערכת שעות",
    gateFoot: "מחיר השעה גלוי  ·  בלי מיקוח בצ׳אט  ·  הזמנה = בקשה, לא ביקור מאושר",
    gateFootR: "HE פעיל  ·  RU במתג",
    clientTitle: "השעה של המנקה.",
    clientLede: "לא סוכנות ולא קבוצה בצ׳אט. אדם עם פנים, מחיר משלה ומשבצות. סוג הניקיון משנה שעות.",
    calc: "חישוב ביקור",
    city: "עיר",
    meters: "מטרים",
    date: "תאריך",
    type: "סוג",
    find: "למצוא מנקה",
    shelfTariffs: "תעריפים על המדף",
    how: "איך זה עובד",
    how1t: "01  תעריף",
    how1: "בוחרים סוג ניקיון. הוא קובע הערכת שעות, לא מחיר זר.",
    how2t: "02  מטרים",
    how2: "עיר, מטרים ותאריך. על המסך מיד טווח זמן.",
    how3t: "03  חלון",
    how3: "רואים חלון: פנים, שפות, אזורים, שירותים, משבצות, שעה.",
    how4t: "04  בקשה",
    how4: "אדם + משבצת + סכום. זו בקשה, לא ביקור מאושר.",
    vitrine: "חלון",
    noRating: "בלי דירוג  ·  ביקורות אחרי ביקורים",
    reviewsAfter: "ביקורות יופיעו אחרי ביקורים",
    openWindow: "לפתוח חלון",
    footLive: "GORNICH  ·  החלון חי כשהמנקה מציבה שעה  ·  לא מבטיחים ערים בלי חלונות",
    areas: "אזורים",
    langs: "שפות",
    windowsCount: "חלונות",
    shopCrumb: "חלון  /  כך נראה החלון",
    herHour: "השעה שלה",
    shopServices: "חנות שירותים",
    timesM2: "× מטרים",
    visitBuild: "הרכבת ביקור",
    sumBefore: "הסכום לפני הבקשה. לא מתווכחים עליו בצ׳אט.",
    chooseOrder: "לבחור ולהזמין",
    reviews: "ביקורות",
    reviewsNote: "קווים ריקים — לא דירוג. ביקורות אחרי ביקורים. אין כוכבים ואין ״מאושרת״.",
    orderTitle: "להרכיב בקשה",
    orderLede: "אדם, משבצת וסכום על טופס אחד. זה עדיין לא ביקור מאושר ולא תשלום.",
    rowType: "סוג",
    rowM2: "מטרים",
    rowHours: "הערכת זמן",
    rowHour: "שעה של המנקה",
    rowSlot: "משבצת",
    rowSum: "סכום",
    order: "להזמין",
    stamp1: "בקשה",
    stamp2: "נשלחה",
    stampP: "המנקה עדיין מאשרת. צ׳אט ומיקוח לא נפתחים.",
    loginTitle: "כניסה לחלון",
    loginLede: "קודם כניסה. את החנות אוספים בפנים.",
    mail: "דוא״ל",
    pass: "סיסמה",
    enter: "להיכנס ולפתוח חלון",
    create: "אין חלון — ליצור ויטרינה",
    cabinetTitle: "החנות שלך",
    cabinetLede: "פנים, שעה, שירותים, אזורים, משבצות — זה מה שהלקוח רואה.",
    profile: "פרופיל",
    nameField: "שם בחלון",
    hourField: "שעה, ₪",
    langsField: "שפות",
    areasField: "אזורים",
    servicesShelf: "שירותים על המדף",
    on: "פעיל",
    off: "כבוי",
    openIntake: "לפתוח קבלת הזמנות",
    clientSees: "כך רואה הלקוח",
    cabinetNote: "אין הזמנות ודירוג בארון. קודם חלון חי, אחר כך ביקורות.",
    rulesTitle: "כללי השוק",
    rulesLede: "לא תגים ולא ״מאושרת״. מה גלוי לפני בקשה, מי מאשר, מה אסור להבטיח.",
    r1t: "מחיר",
    r1: "על הכרטיס עומדת שעת המנקה. סוג הניקיון מכפיל זמן. הסכום נאסף לפני ״להזמין״ ולא מתווכחים בצ׳אט.",
    r2t: "בקשה",
    r2: "הכפתור אוסף אדם, משבצת ו־₪. סטטוס — ״בקשה נשלחה״. אין תשלום על המסך.",
    r3t: "עיר ריקה",
    r3: "אם אין חלונות בעיר — לא מציירים רשימה מזויפת.",
    r4t: "ביקורות",
    r4: "יש שלד. אין טקסט לפני ביקור. אין 4.9 ואין ציטוטים.",
    r5t: "מנקה",
    r5: "שעה משלה, פנים, אזורים. ההכנסה לא מובטחת.",
    r6t: "שפה",
    r6: "עברית ורוסית שוות במתג. על מסך אחד — שפה אחת.",
    hoursWord: "ש׳",
    hourWord: "שעת המנקה",
  },
};

function hoursFor(m2, type) {
  const n = Number(m2) || 72;
  if (type === "Генеральная" || type === "ניקיון כללי") return Math.max(1, Math.round(n / 12));
  if (type === "После ремонта" || type === "אחרי שיפוץ") return Math.max(1, Math.round(n / 10));
  if (type === "Окна" || type === "חלונות") return Math.max(1, Math.round(n / 24));
  if (type === "Глажка" || type === "גיהוץ") return Math.max(1, Math.round(n / 36));
  return Math.max(1, Math.round(n / 18));
}

function getLang() {
  return localStorage.getItem("gornich-lang") === "he" ? "he" : "ru";
}

function applyLang(lang) {
  localStorage.setItem("gornich-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll(".switch button").forEach((b) => {
    b.classList.toggle("is-on", b.dataset.lang === lang);
  });
  updateHoursRead();
}

function qs(name, fallback) {
  const v = new URLSearchParams(location.search).get(name);
  return v == null || v === "" ? fallback : v;
}

function sellerById(id) {
  return SELLERS.find((s) => s.id === id) || SELLERS[0];
}

function updateHoursRead() {
  const m2 = document.querySelector("[name=m2]");
  const type = document.querySelector("[name=type]");
  const out = document.querySelector("[data-hours-read]");
  if (!m2 || !type || !out) return;
  const h = hoursFor(m2.value, type.value);
  const dict = I18N[getLang()];
  out.textContent = `~ ${h} ${dict.hoursWord}  ×  ${dict.hourWord}`;
  out.dataset.hours = String(h);
}

function bindCalc() {
  const form = document.querySelector("[data-calc]");
  if (!form) return;
  const m2 = form.querySelector("[name=m2]");
  const type = form.querySelector("[name=type]");
  const city = form.querySelector("[name=city]");
  const date = form.querySelector("[name=date]");
  if (qs("m2")) m2.value = qs("m2");
  if (qs("type")) type.value = qs("type");
  if (qs("city")) city.value = qs("city");
  if (qs("date")) date.value = qs("date");
  form.addEventListener("input", updateHoursRead);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const h = hoursFor(m2.value, type.value);
    const q = new URLSearchParams({
      city: city.value,
      m2: m2.value,
      date: date.value,
      type: type.value,
      hours: String(h),
    });
    location.href = `vitrine.html?${q}`;
  });
  document.querySelectorAll("[data-tariff]").forEach((btn) => {
    btn.addEventListener("click", () => {
      type.value = btn.dataset.tariff;
      updateHoursRead();
      document.getElementById("calc")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  updateHoursRead();
}

function bindFilters() {
  const root = document.querySelector("[data-market]");
  if (!root) return;
  const apply = () => {
    const areas = [...root.querySelectorAll("[name=area]:checked")].map((i) => i.value);
    const langs = [...root.querySelectorAll("[name=lang]:checked")].map((i) => i.value);
    let n = 0;
    root.querySelectorAll("[data-seller]").forEach((card) => {
      const s = sellerById(card.dataset.seller);
      const okArea = !areas.length || s.areas.some((a) => areas.includes(a));
      const okLang = !langs.length || s.langs.some((l) => langs.includes(l));
      const show = okArea && okLang;
      card.classList.toggle("hidden", !show);
      if (show) n += 1;
    });
    const count = root.querySelector("[data-count]");
    if (count) count.textContent = `${n} ${I18N[getLang()].windowsCount}`;
  };
  root.addEventListener("change", apply);
  apply();
}

function bindSlots() {
  document.querySelectorAll("[data-slots]").forEach((row) => {
    row.addEventListener("click", (e) => {
      const btn = e.target.closest(".slot");
      if (!btn) return;
      row.querySelectorAll(".slot").forEach((b) => b.classList.remove("is-on"));
      btn.classList.add("is-on");
      row.dataset.selected = btn.dataset.slot;
      const url = new URL(location.href);
      if (url.pathname.endsWith("shop.html") || url.pathname.endsWith("order.html")) {
        url.searchParams.set("slot", btn.dataset.slot);
        history.replaceState(null, "", url);
      }
      updateOrderMath();
    });
  });
}

function updateOrderMath() {
  const box = document.querySelector("[data-order-math]");
  if (!box) return;
  const s = sellerById(qs("id", "daria"));
  const m2 = Number(qs("m2", "72"));
  const type = qs("type", "Стандарт");
  const hours = Number(qs("hours", hoursFor(m2, type)));
  const slot = document.querySelector("[data-slots]")?.dataset.selected || qs("slot", "14:00");
  const sum = hours * s.hour;
  const set = (key, val) => {
    const el = box.querySelector(`[data-row=${key}]`);
    if (el) el.textContent = val;
  };
  set("type", type);
  set("m2", `${m2} м²`);
  set("hours", `~ ${hours} часа`);
  set("hour", `₪${s.hour}`);
  set("slot", `${qs("date", "2026-10-12")}, ${slot}`);
  set("sum", `₪${sum}`);
  const line = document.querySelector("[data-sum-line]");
  if (line) line.textContent = `${hours} × ₪${s.hour}  =  ₪${sum}`;
}

function bindOrder() {
  const btn = document.querySelector("[data-send-order]");
  const stamp = document.querySelector("[data-stamp]");
  if (!btn || !stamp) return;
  updateOrderMath();
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    stamp.classList.add("is-on");
    btn.textContent = I18N[getLang()].stamp2;
    stamp.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function bindShopCta() {
  const btn = document.querySelector("[data-to-order]");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = qs("id", "daria");
    const slot = document.querySelector("[data-slots]")?.dataset.selected || qs("slot", "14:00");
    const m2 = qs("m2", "72");
    const type = qs("type", "Стандарт");
    const hours = qs("hours", String(hoursFor(m2, type)));
    const date = qs("date", "2026-10-12");
    location.href = `order.html?id=${id}&slot=${encodeURIComponent(slot)}&m2=${m2}&type=${encodeURIComponent(type)}&hours=${hours}&date=${date}`;
  });
}

function bindLogin() {
  const form = document.querySelector("[data-login]");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    location.href = "cabinet.html";
  });
}

function bindCabinet() {
  const root = document.querySelector("[data-cabinet]");
  if (!root) return;
  const name = root.querySelector("[name=name]");
  const hour = root.querySelector("[name=hour]");
  const langs = root.querySelector("[name=langs]");
  const areas = root.querySelector("[name=areas]");
  const preview = root.querySelector("[data-preview]");
  const sync = () => {
    if (!preview) return;
    preview.querySelector("[data-pv-name]").textContent = name.value;
    preview.querySelector("[data-pv-hour]").textContent = `₪${hour.value}/ч`;
    preview.querySelector("[data-pv-langs]").textContent = langs.value;
    preview.querySelector("[data-pv-areas]").textContent = areas.value;
    const on = [...root.querySelectorAll("[data-service].is-on")].map((b) => b.dataset.service);
    preview.querySelector("[data-pv-services]").textContent = on.join(" · ");
  };
  const intake = root.querySelector("[data-i18n=openIntake]");
  if (intake) {
    intake.addEventListener("click", () => {
      intake.classList.add("is-on");
      intake.textContent = getLang() === "he" ? "הקבלה פתוחה" : "Приём открыт";
    });
  }
  root.addEventListener("input", sync);
  root.querySelectorAll("[data-service]").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-on");
      const small = btn.querySelector("small");
      if (small) small.textContent = btn.classList.contains("is-on") ? I18N[getLang()].on : I18N[getLang()].off;
      sync();
    });
  });
  sync();
}

function initSwitch() {
  document.querySelectorAll(".switch button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });
  applyLang(getLang());
}

document.addEventListener("DOMContentLoaded", () => {
  initSwitch();
  bindCalc();
  bindFilters();
  bindSlots();
  bindOrder();
  bindShopCta();
  bindLogin();
  bindCabinet();
});
