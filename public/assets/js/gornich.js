const AREAS = ["Тель-Авив", "Яффо", "Рамат-Ган", "Холон", "Хайфа", "Петах-Тиква"];
const LANGS = ["русский", "иврит", "English"];
const SERVICES = ["Стандарт", "Генеральная", "После ремонта", "Окна", "Глажка"];
const SLOTS = ["08:30", "09:00", "10:00", "11:00", "12:00", "12:30", "13:00", "14:00", "15:00", "15:30", "16:00", "17:00", "18:00"];

const I18N = {
  ru: {
    sub: "часы уборки  ·  своя витрина  ·  свой час",
    navSearch: "Поиск",
    navVitrine: "Витрина",
    navRules: "Правила",
    gateKicker: "Тель-Авив  ·  час с лицом",
    gateTitle: "Две двери. Один прилавок.",
    gateLede: "Не группа в чате и не агентство без лица. Горничная ставит свой час. Клиент собирает визит: тариф, метраж, окно, слот.",
    doorClient: "Ищу уборку",
    doorClientP: "Найти час, слот и человека. Тип уборки меняет время, не чужой прайс.",
    doorMaid: "Я горничная",
    doorMaidP: "Открыть свою витрину. Свой час, услуги, районы — и заявки приходят сюда.",
    tagEnter: "вход",
    shelfToday: "НА ПОЛКЕ СЕГОДНЯ",
    tagHours: "час × оценка часов",
    gateFoot: "Цена часа видна  ·  без торга в чате  ·  заказ = запрос, не подтверждённый визит",
    clientTitle: "Свой час горничной.",
    clientLede: "Человек с лицом, своим прайсом и слотами. Тип уборки меняет часы — не подменяет чужую ставку.",
    calc: "РАСЧЁТ ВИЗИТА",
    city: "Город",
    meters: "Метраж",
    date: "Дата",
    type: "Тип",
    find: "Найти горничную",
    shelfTariffs: "ТАРИФЫ",
    how: "КАК ЭТО РАБОТАЕТ",
    how1t: "01  Тариф",
    how1: "Выбираете тип уборки. Он задаёт оценку часов, не чужой прайс.",
    how2t: "02  Метраж",
    how2: "Город, метры и дата. На экране сразу вилка времени.",
    how3t: "03  Витрина",
    how3: "Фильтр оставляет только тех, кто работает в этом городе и с этим типом.",
    how4t: "04  Запрос",
    how4: "Имя, телефон, слот и сумма доходят до кабинета горничной.",
    vitrine: "ВИТРИНА",
    noRating: "без рейтинга  ·  отзывы после визитов",
    reviewsAfter: "отзывы появятся после визитов",
    openWindow: "Открыть окно",
    footLive: "GORNICH  ·  витрина живёт, когда горничная открывает приём",
    areas: "РАЙОНЫ",
    langs: "ЯЗЫКИ",
    windowsCount: "витрин",
    shopCrumb: "Окно",
    herHour: "её час",
    shopServices: "УСЛУГИ",
    visitBuild: "СБОР ВИЗИТА",
    sumBefore: "Сумма до заявки. В чате цена не переписывается.",
    chooseOrder: "Выбрать и заказать",
    reviews: "ОТЗЫВЫ",
    reviewsNote: "Текста нет, пока не было визита. Рейтинга и бейджа «проверена» здесь нет.",
    orderTitle: "Собрать запрос",
    orderLede: "Имя и телефон уйдут горничной вместе со слотом и суммой. Это ещё не оплата.",
    rowType: "Тип",
    rowM2: "Метраж",
    rowHours: "Оценка времени",
    rowHour: "Час горничной",
    rowSlot: "Слот",
    rowSum: "Сумма",
    order: "Отправить запрос",
    loginTitle: "Вход в лавку",
    loginLede: "Только существующий аккаунт. Новое окно открывается регистрацией.",
    mail: "Почта",
    pass: "Пароль",
    enter: "Войти",
    create: "Нет окна — зарегистрироваться",
    cabinetTitle: "Ваша лавка",
    cabinetLede: "Открытый приём виден в поиске. Заявки клиентов появляются здесь.",
    profile: "ПРОФИЛЬ",
    nameField: "Имя на витрине",
    hourField: "Час, ₪",
    photo: "Фото",
    servicesShelf: "УСЛУГИ",
    slotsLabel: "СЛОТЫ",
    saveShop: "Сохранить лавку",
    openIntake: "Открыть приём",
    closeIntake: "Закрыть приём",
    intakeOn: "Приём открыт — вас видно в поиске",
    intakeOff: "Приём закрыт — в поиске вас нет",
    logout: "Выйти",
    clientSees: "ТАК ВИДИТ КЛИЕНТ",
    inbox: "ЗАЯВКИ",
    noOrders: "Пока нет заявок.",
    accept: "Принять",
    decline: "Отклонить",
    rulesTitle: "Правила рынка",
    rulesLede: "Что видно до заявки, кто подтверждает, чего здесь нет.",
    r1t: "Цена",
    r1: "На карточке стоит час горничной. Тип уборки умножает время. Сумма собирается до отправки и не торгуется в чате.",
    r2t: "Запрос",
    r2: "Клиент оставляет имя и телефон. Заявка падает в кабинет. Визит не подтверждён, пока горничная сама не примет.",
    r3t: "Пустой срез",
    r3: "Если фильтр никого не находит — список пустой. Чужие города не подмешиваем.",
    r4t: "Отзывы",
    r4: "Их нет, пока не было визита. Рейтинга и бейджа «проверена» не рисуем.",
    r5t: "Горничная",
    r5: "Регистрация публикует окно. Закрытый приём исчезает из поиска, заявки в кабинете остаются.",
    r6t: "Язык",
    r6: "Иврит и русский переключаются. На одном экране один язык.",
    hoursWord: "ч",
    hourWord: "час",
    anyType: "Любой тип",
    allCities: "Все города",
    emptyWindows: "В этом срезе окон нет.",
    registerTitle: "Открыть свою лавку",
    registerLede: "После регистрации окно сразу появляется у клиентов. Их заявки придут в кабинет.",
    registerSubmit: "Зарегистрироваться",
    haveAccount: "Уже есть лавка — войти",
    clientName: "Имя",
    clientPhone: "Телефон",
    yourOrder: "Ваш запрос",
    statusSent: "Запрос отправлен. Горничная ещё не ответила.",
    statusAccepted: "Горничная приняла запрос. Это ещё не оплата.",
    statusDeclined: "Горничная закрыла запрос. Слот не сошёлся.",
    saved: "Лавка сохранена",
    loading: "Загрузка…",
    needLogin: "Сначала войдите в лавку.",
    err_invalid: "Проверьте поля: имя, час, район, язык, услуга и слот.",
    err_unauthorized: "Неверная почта или пароль.",
    err_email_taken: "Эта почта уже открыла лавку.",
    err_not_found: "Окно не найдено или приём закрыт.",
    err_conflict: "Этот запрос уже закрыт.",
    err_no_database: "База ещё не подключена.",
    err_server: "Ошибка сервера.",
    err_network: "Нет связи с сервером.",
  },
  he: {
    sub: "שעות ניקיון  ·  חלון משלה  ·  שעה משלה",
    navSearch: "חיפוש",
    navVitrine: "חלון",
    navRules: "כללים",
    gateKicker: "תל אביב  ·  שעה עם פנים",
    gateTitle: "שתי דלתות. דלפק אחד.",
    gateLede: "לא קבוצה בצ׳אט ולא סוכנות בלי פנים. המנקה קובעת את השעה שלה. הלקוח מרכיב ביקור.",
    doorClient: "מחפשת ניקיון",
    doorClientP: "למצוא שעה, משבצת ואדם. סוג הניקיון משנה זמן, לא מחיר של מישהי אחרת.",
    doorMaid: "אני מנקה",
    doorMaidP: "לפתוח חלון משלי. שעה, שירותים, אזורים — והבקשות מגיעות לכאן.",
    tagEnter: "כניסה",
    shelfToday: "על המדף היום",
    tagHours: "שעה × הערכת שעות",
    gateFoot: "מחיר השעה גלוי  ·  בלי מיקוח  ·  הזמנה = בקשה, לא ביקור מאושר",
    clientTitle: "השעה של המנקה.",
    clientLede: "אדם עם פנים, מחיר משלה ומשבצות. סוג הניקיון משנה שעות.",
    calc: "חישוב ביקור",
    city: "עיר",
    meters: "מטרים",
    date: "תאריך",
    type: "סוג",
    find: "למצוא מנקה",
    shelfTariffs: "תעריפים",
    how: "איך זה עובד",
    how1t: "01  תעריף",
    how1: "בוחרים סוג ניקיון. הוא קובע הערכת שעות.",
    how2t: "02  מטרים",
    how2: "עיר, מטרים ותאריך. על המסך מיד טווח זמן.",
    how3t: "03  חלון",
    how3: "הסינון משאיר רק מי שעובדת בעיר הזאת ובסוג הזה.",
    how4t: "04  בקשה",
    how4: "שם, טלפון, משבצת וסכום מגיעים לחנות של המנקה.",
    vitrine: "חלון",
    noRating: "בלי דירוג  ·  ביקורות אחרי ביקורים",
    reviewsAfter: "ביקורות יופיעו אחרי ביקורים",
    openWindow: "לפתוח חלון",
    footLive: "GORNICH  ·  החלון חי כשהמנקה פותחת קבלה",
    areas: "אזורים",
    langs: "שפות",
    windowsCount: "חלונות",
    shopCrumb: "חלון",
    herHour: "השעה שלה",
    shopServices: "שירותים",
    visitBuild: "הרכבת ביקור",
    sumBefore: "הסכום לפני הבקשה. לא מתווכחים עליו בצ׳אט.",
    chooseOrder: "לבחור ולהזמין",
    reviews: "ביקורות",
    reviewsNote: "אין טקסט לפני ביקור. אין כוכבים ואין ״מאושרת״.",
    orderTitle: "להרכיב בקשה",
    orderLede: "השם והטלפון מגיעים למנקה יחד עם המשבצת והסכום. זה עדיין לא תשלום.",
    rowType: "סוג",
    rowM2: "מטרים",
    rowHours: "הערכת זמן",
    rowHour: "שעה של המנקה",
    rowSlot: "משבצת",
    rowSum: "סכום",
    order: "לשלוח בקשה",
    loginTitle: "כניסה לחנות",
    loginLede: "רק חשבון קיים. חלון חדש נפתח בהרשמה.",
    mail: "דוא״ל",
    pass: "סיסמה",
    enter: "להיכנס",
    create: "אין חלון — להירשם",
    cabinetTitle: "החנות שלך",
    cabinetLede: "קבלה פתוחה נראית בחיפוש. בקשות של לקוחות מופיעות כאן.",
    profile: "פרופיל",
    nameField: "שם בחלון",
    hourField: "שעה, ₪",
    photo: "תמונה",
    servicesShelf: "שירותים",
    slotsLabel: "משבצות",
    saveShop: "לשמור חנות",
    openIntake: "לפתוח קבלה",
    closeIntake: "לסגור קבלה",
    intakeOn: "הקבלה פתוחה — רואים אותך בחיפוש",
    intakeOff: "הקבלה סגורה — לא רואים אותך בחיפוש",
    logout: "יציאה",
    clientSees: "כך הלקוח רואה",
    inbox: "בקשות",
    noOrders: "עדיין אין בקשות.",
    accept: "לאשר",
    decline: "לדחות",
    rulesTitle: "כללי השוק",
    rulesLede: "מה רואים לפני הבקשה, מי מאשרת, ומה אין כאן.",
    r1t: "מחיר",
    r1: "על הכרטיס עומדת השעה של המנקה. סוג הניקיון מכפיל זמן.",
    r2t: "בקשה",
    r2: "הלקוח משאיר שם וטלפון. הבקשה נופלת לחנות. הביקור לא מאושר עד שהמנקה מאשרת.",
    r3t: "חיתוך ריק",
    r3: "אם הסינון לא מוצא אף אחת — הרשימה ריקה.",
    r4t: "ביקורות",
    r4: "אין ביקורות לפני ביקור. אין דירוג.",
    r5t: "מנקה",
    r5: "הרשמה מפרסמת חלון. קבלה סגורה נעלמת מהחיפוש.",
    r6t: "שפה",
    r6: "עברית ורוסית במתג. על מסך אחד שפה אחת.",
    hoursWord: "שע׳",
    hourWord: "שעה",
    anyType: "כל סוג",
    allCities: "כל הערים",
    emptyWindows: "אין חלונות בחיתוך הזה.",
    registerTitle: "לפתוח חנות",
    registerLede: "אחרי ההרשמה החלון מופיע אצל הלקוחות. הבקשות יגיעו לחנות.",
    registerSubmit: "להירשם",
    haveAccount: "כבר יש חנות — להיכנס",
    clientName: "שם",
    clientPhone: "טלפון",
    yourOrder: "הבקשה שלך",
    statusSent: "הבקשה נשלחה. המנקה עוד לא ענתה.",
    statusAccepted: "המנקה אישרה את הבקשה. זה עדיין לא תשלום.",
    statusDeclined: "המנקה סגרה את הבקשה.",
    saved: "החנות נשמרה",
    loading: "טוען…",
    needLogin: "קודם נכנסים לחנות.",
    err_invalid: "בדקו את השדות: שם, שעה, אזור, שפה, שירות ומשבצת.",
    err_unauthorized: "דוא״ל או סיסמה לא נכונים.",
    err_email_taken: "הדוא״ל הזה כבר פתח חנות.",
    err_not_found: "החלון לא נמצא או שהקבלה סגורה.",
    err_conflict: "הבקשה הזאת כבר נסגרה.",
    err_no_database: "מסד הנתונים עוד לא מחובר.",
    err_server: "שגיאת שרת.",
    err_network: "אין קשר לשרת.",
  },
};

const painters = [];

function hoursFor(m2, type) {
  const n = Number(m2) || 72;
  if (type === "Генеральная" || type === "ניקיון כללי") return Math.max(1, Math.round(n / 12));
  if (type === "После ремонта" || type === "אחרי שיפוץ") return Math.max(1, Math.round(n / 10));
  if (type === "Окна" || type === "חלונות") return Math.max(1, Math.round(n / 24));
  if (type === "Глажка" || type === "גיהוץ") return Math.max(1, Math.round(n / 36));
  return Math.max(1, Math.round(n / 18));
}

function dict() { return I18N[getLang()]; }

function getLang() {
  return localStorage.getItem("gornich-lang") === "he" ? "he" : "ru";
}

function applyLang(lang) {
  localStorage.setItem("gornich-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  const pack = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key] != null) el.textContent = pack[key];
  });
  document.querySelectorAll(".switch button").forEach((button) => {
    button.classList.toggle("is-on", button.dataset.lang === lang);
  });
  painters.forEach((paint) => paint());
}

function qs(name, fallback) {
  const value = new URLSearchParams(location.search).get(name);
  return value == null || value === "" ? fallback : value;
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));
}

function safePhoto(src) {
  if (typeof src !== "string") return "";
  if (src.startsWith("/assets/photos/")) return src;
  if (src.startsWith("data:image/")) return src;
  return "";
}

function sayError(code) {
  const pack = dict();
  return pack[`err_${code}`] || pack.err_server;
}

async function api(path, options = {}) {
  const { headers: extraHeaders, ...rest } = options;
  let response;
  try {
    response = await fetch(path, {
      credentials: "same-origin",
      ...rest,
      headers: { "content-type": "application/json", ...(extraHeaders || {}) },
    });
  } catch {
    throw new Error("network");
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "server");
  return data;
}

function showError(node, error) {
  if (!node) return;
  node.hidden = false;
  node.textContent = sayError(error instanceof Error ? error.message : "server");
}

function checkedValues(root, name) {
  return [...root.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function fillChoices(root) {
  const groups = {
    area: AREAS,
    lang: LANGS,
    service: SERVICES,
    slot: SLOTS,
  };
  Object.entries(groups).forEach(([name, values]) => {
    const box = root.querySelector(`[data-choices="${name}"]`);
    if (!box || box.childElementCount) return;
    box.innerHTML = values.map((value) =>
      `<label><input type="checkbox" name="${name}" value="${esc(value)}"><span>${esc(value)}</span></label>`,
    ).join("");
  });
}

function setChecked(root, name, values) {
  const picked = new Set(values || []);
  root.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.checked = picked.has(input.value);
  });
}

function maidVisual(maid) {
  const photo = safePhoto(maid.photo);
  if (photo) return `<div class="shot-wrap"><img class="shot" src="${esc(photo)}" alt=""><div class="price-badge">₪${esc(maid.hour)}<small>/${esc(dict().hourWord)}</small></div></div>`;
  const letter = esc((maid.name || "?").slice(0, 1));
  return `<div class="shot-wrap"><div class="shot-fallback">${letter}</div><div class="price-badge">₪${esc(maid.hour)}<small>/${esc(dict().hourWord)}</small></div></div>`;
}

function maidCard(maid, href) {
  const body = `${maidVisual(maid)}<div class="maid-body"><h3>${esc(maid.name)}</h3><p>${esc(maid.areasText || maid.areas.join(", "))}</p><p>${esc(maid.langsText || maid.langs.join(" · "))}</p><p class="services">${esc(maid.services.join(" · "))}</p><div class="slots">${maid.slots.map((slot) => `<span class="slot">${esc(slot)}</span>`).join("")}</div>${href ? `<span class="cta">${esc(dict().openWindow)}</span>` : ""}</div>`;
  return href ? `<a class="maid" href="${esc(href)}">${body}</a>` : `<article class="maid">${body}</article>`;
}

function matches(maid, areas, langs, type) {
  const okArea = !areas.length || maid.areas.some((area) => areas.includes(area));
  const okLang = !langs.length || maid.langs.some((lang) => langs.includes(lang));
  const okType = !type || maid.services.includes(type);
  return okArea && okLang && okType;
}

function visitQuery(extra) {
  const params = new URLSearchParams(extra || location.search);
  return params;
}

async function shrinkImage(file) {
  const bitmap = await createImageBitmap(file);
  const max = 960;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.82);
}

function bindSlots() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slots] button.slot");
    if (!button) return;
    const row = button.closest("[data-slots]");
    row.querySelectorAll(".slot").forEach((item) => item.classList.remove("is-on"));
    button.classList.add("is-on");
    row.dataset.selected = button.dataset.slot;
    updateMath();
  });
}

let activeMaid = null;

function currentSlot() {
  const row = document.querySelector("[data-slots]");
  return row?.dataset.selected || row?.querySelector(".slot.is-on")?.dataset.slot || qs("slot", activeMaid?.slots?.[0] || "");
}

function updateMath() {
  if (!activeMaid) return;
  const m2 = Number(qs("m2", document.querySelector("[name=m2]")?.value || "72"));
  const type = qs("type", document.querySelector("[data-order] [name=type]")?.value || activeMaid.services[0] || "Стандарт");
  const hours = hoursFor(m2, type);
  const slot = currentSlot();
  const date = qs("date", document.querySelector("[name=date]")?.value || "");
  const sum = hours * activeMaid.hour;
  const line = document.querySelector("[data-sum-line]");
  if (line) line.textContent = `${hours} × ₪${activeMaid.hour}  =  ₪${sum}`;
  const visit = document.querySelector("[data-visit-line]");
  if (visit) visit.textContent = `${m2} м²  ·  ${type}  ·  ~${hours} ${dict().hoursWord}`;
  const box = document.querySelector("[data-order-math]");
  if (!box) return;
  const set = (key, value) => {
    const node = box.querySelector(`[data-row="${key}"]`);
    if (node) node.textContent = value;
  };
  set("type", type);
  set("m2", `${m2} м²`);
  set("hours", `~ ${hours} ${dict().hoursWord}`);
  set("hour", `₪${activeMaid.hour}`);
  set("slot", `${date} ${slot}`.trim());
  set("sum", `₪${sum}`);
}

function paintSlots(slots, preferred) {
  const row = document.querySelector("[data-slots]");
  if (!row) return;
  const picked = slots.includes(preferred) ? preferred : slots[0];
  row.dataset.selected = picked || "";
  row.innerHTML = slots.map((slot) =>
    `<button type="button" class="slot${slot === picked ? " is-on" : ""}" data-slot="${esc(slot)}">${esc(slot)}</button>`,
  ).join("");
}

function fillMaidView(maid) {
  activeMaid = maid;
  const photo = document.querySelector("[data-photo]");
  if (photo) {
    const src = safePhoto(maid.photo);
    if (src) photo.src = src;
    photo.alt = maid.name;
  }
  const name = document.querySelector("[data-name]");
  if (name) name.textContent = maid.name;
  const hour = document.querySelector("[data-hour]");
  if (hour) hour.textContent = `₪${maid.hour}/${dict().hourWord}`;
  const langs = document.querySelector("[data-langs]");
  if (langs) langs.textContent = maid.langsText || maid.langs.join(" · ");
  const areas = document.querySelector("[data-areas]");
  if (areas) areas.textContent = maid.areasText || maid.areas.join(", ");
  const services = document.querySelector("[data-service-row]");
  if (services) {
    services.innerHTML = maid.services.map((service) => `<span class="chip"><strong>${esc(service)}</strong></span>`).join("");
  }
  paintSlots(maid.slots, qs("slot", ""));
  updateMath();
}

async function initClient() {
  const form = document.querySelector("[data-calc]");
  if (!form) return;
  const m2 = form.querySelector("[name=m2]");
  const type = form.querySelector("[name=type]");
  const city = form.querySelector("[name=city]");
  const date = form.querySelector("[name=date]");
  const read = document.querySelector("[data-hours-read]");
  if (qs("m2")) m2.value = qs("m2");
  if (qs("type")) type.value = qs("type");
  if (qs("city")) city.value = qs("city");
  if (qs("date")) date.value = qs("date");
  const paintHours = () => {
    const hours = hoursFor(m2.value, type.value);
    read.textContent = `~ ${hours} ${dict().hoursWord}  ×  ${dict().hourWord}`;
    read.dataset.hours = String(hours);
  };
  form.addEventListener("input", paintHours);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      city: city.value,
      m2: m2.value,
      date: date.value,
      type: type.value,
      hours: String(hoursFor(m2.value, type.value)),
    });
    location.href = `vitrine.html?${params}`;
  });
  document.querySelectorAll("[data-tariff]").forEach((button) => {
    button.addEventListener("click", () => {
      type.value = button.dataset.tariff;
      paintHours();
      document.getElementById("calc")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  painters.push(paintHours);
  paintHours();

  const live = document.querySelector("[data-live]");
  if (!live) return;
  const paint = async () => {
    try {
      const data = await api("/api/maids");
      const params = new URLSearchParams({
        city: city.value,
        m2: m2.value,
        date: date.value,
        type: type.value,
        hours: String(hoursFor(m2.value, type.value)),
      });
      live.innerHTML = data.maids.map((maid) => {
        params.set("id", maid.id);
        return maidCard(maid, `shop.html?${params}`);
      }).join("");
    } catch (error) {
      live.innerHTML = `<p class="empty">${esc(sayError(error.message))}</p>`;
    }
  };
  painters.push(paint);
  await paint();
  setInterval(paint, 8000);
}

async function initVitrine() {
  const root = document.querySelector("[data-market]");
  if (!root) return;
  const city = qs("city", "");
  const type = qs("type", "");
  if (city) {
    const box = root.querySelector(`input[name="area"][value="${CSS.escape(city)}"]`);
    if (box) box.checked = true;
  }
  const typeSelect = root.querySelector('select[name="type"]');
  if (type && typeSelect) typeSelect.value = type;
  const results = root.querySelector("[data-results]");
  const empty = root.querySelector("[data-empty]");
  const count = root.querySelector("[data-count]");
  const line = root.querySelector("[data-query-line]");
  let maids = [];

  const paint = () => {
    const areas = checkedValues(root, "area");
    const langs = checkedValues(root, "lang");
    const pickedType = typeSelect?.value || "";
    const visible = maids.filter((maid) => matches(maid, areas, langs, pickedType));
    const params = visitQuery();
    if (pickedType) params.set("type", pickedType);
    else params.delete("type");
    results.innerHTML = visible.map((maid) => {
      const href = new URLSearchParams(params);
      href.set("id", maid.id);
      return maidCard(maid, `shop.html?${href}`);
    }).join("");
    empty.textContent = dict().emptyWindows;
    empty.hidden = visible.length > 0;
    count.textContent = `${visible.length} ${dict().windowsCount}`;
    const bits = [
      areas[0] || city || dict().allCities,
      qs("m2") ? `${qs("m2")} м²` : "",
      qs("date", ""),
      pickedType || dict().anyType,
      qs("hours") ? `~${qs("hours")} ${dict().hoursWord}` : "",
    ].filter(Boolean);
    line.textContent = bits.join("   ·   ");
  };

  root.addEventListener("change", paint);
  painters.push(paint);
  const load = async () => {
    try {
      const data = await api("/api/maids");
      maids = data.maids;
      paint();
    } catch (error) {
      results.innerHTML = "";
      empty.hidden = false;
      empty.textContent = sayError(error.message);
    }
  };
  await load();
  setInterval(load, 8000);
}

async function initShop() {
  const id = qs("id", "");
  if (!id) return;
  try {
    const data = await api(`/api/maids/${encodeURIComponent(id)}`);
    fillMaidView(data.maid);
    const crumb = document.querySelector("[data-crumb]");
    if (crumb) crumb.textContent = `${dict().shopCrumb}  /  ${data.maid.name}`;
    painters.push(() => {
      if (crumb) crumb.textContent = `${dict().shopCrumb}  /  ${data.maid.name}`;
      const hour = document.querySelector("[data-hour]");
      if (hour) hour.textContent = `₪${data.maid.hour}/${dict().hourWord}`;
      updateMath();
    });
  } catch (error) {
    const main = document.querySelector("[data-shop]");
    if (main) main.innerHTML = `<p class="empty">${esc(sayError(error.message))}</p>`;
  }
  document.querySelector("[data-to-order]")?.addEventListener("click", (event) => {
    event.preventDefault();
    if (!activeMaid) return;
    const params = visitQuery();
    params.set("id", activeMaid.id);
    params.set("slot", currentSlot());
    if (!params.get("m2")) params.set("m2", "72");
    if (!params.get("type")) params.set("type", activeMaid.services[0] || "Стандарт");
    if (!params.get("date")) params.set("date", new Date().toISOString().slice(0, 10));
    location.href = `order.html?${params}`;
  });
}

function showStatus(order) {
  const panel = document.querySelector("[data-status]");
  const form = document.querySelector("[data-order-form]");
  if (form) form.hidden = true;
  if (!panel) return;
  panel.hidden = false;
  panel.className = `status status-${order.status}`;
  const label = order.status === "accepted" ? dict().statusAccepted : order.status === "declined" ? dict().statusDeclined : dict().statusSent;
  panel.innerHTML = `<strong>${esc(dict().yourOrder)}</strong><p>${esc(label)}</p><p class="muted">${esc(order.maidName)} · ${esc(order.date)} ${esc(order.slot)} · ₪${esc(order.sum)}</p>`;
}

function pollOrder(id, secret) {
  const tick = async () => {
    try {
      const data = await api(`/api/orders/${encodeURIComponent(id)}?secret=${encodeURIComponent(secret)}`);
      showStatus(data.order);
      if (data.order.status !== "sent") clearInterval(timer);
    } catch {
      /* keep the last status on screen */
    }
  };
  const timer = setInterval(tick, 4000);
  painters.push(() => tick());
}

async function initOrder() {
  const orderId = qs("order", "");
  const secret = qs("secret", "");
  if (orderId && secret) {
    try {
      const data = await api(`/api/orders/${encodeURIComponent(orderId)}?secret=${encodeURIComponent(secret)}`);
      const maid = await api(`/api/maids/${encodeURIComponent(data.order.maidId)}`);
      fillMaidView(maid.maid);
      showStatus(data.order);
      if (data.order.status === "sent") pollOrder(orderId, secret);
    } catch (error) {
      const panel = document.querySelector("[data-status]");
      if (panel) {
        panel.hidden = false;
        panel.textContent = sayError(error.message);
      }
    }
    return;
  }

  const id = qs("id", "");
  if (!id) return;
  try {
    const data = await api(`/api/maids/${encodeURIComponent(id)}`);
    fillMaidView(data.maid);
  } catch (error) {
    document.querySelector("[data-order]").innerHTML = `<p class="empty">${esc(sayError(error.message))}</p>`;
    return;
  }
  const city = document.querySelector("[data-order-form] [name=city]");
  if (city && qs("city")) city.value = qs("city");
  const date = qs("date", new Date().toISOString().slice(0, 10));
  if (!qs("date")) {
    const params = new URLSearchParams(location.search);
    params.set("date", date);
    history.replaceState(null, "", `${location.pathname}?${params}`);
  }
  updateMath();
  painters.push(updateMath);

  const form = document.querySelector("[data-order-form]");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const errorNode = form.querySelector("[data-error]");
    errorNode.hidden = true;
    const button = form.querySelector("button");
    button.disabled = true;
    try {
      const created = await api("/api/orders", {
        method: "POST",
        body: JSON.stringify({
          maidId: activeMaid.id,
          clientName: form.clientName.value,
          phone: form.phone.value,
          city: form.city.value,
          m2: Number(qs("m2", "72")),
          type: qs("type", activeMaid.services[0]),
          date: qs("date", date),
          slot: currentSlot(),
        }),
      });
      const params = visitQuery();
      params.set("order", created.order.id);
      params.set("secret", created.order.secret);
      history.replaceState(null, "", `${location.pathname}?${params}`);
      showStatus(created.order);
      pollOrder(created.order.id, created.order.secret);
    } catch (error) {
      showError(errorNode, error);
      button.disabled = false;
    }
  });
}

function bindAuth(selector, path, next) {
  const form = document.querySelector(selector);
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const errorNode = form.querySelector("[data-error]");
    errorNode.hidden = true;
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    try {
      await api(path, { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      location.href = next;
    } catch (error) {
      showError(errorNode, error);
      button.disabled = false;
    }
  });
}

function bindRegister() {
  const form = document.querySelector("[data-register]");
  if (!form) return;
  fillChoices(form);
  let photo = "";
  form.photo?.addEventListener("change", async () => {
    const file = form.photo.files?.[0];
    const preview = form.querySelector("[data-photo-preview]");
    if (!file) return;
    try {
      photo = await shrinkImage(file);
      preview.src = photo;
      preview.hidden = false;
    } catch {
      photo = "";
    }
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const errorNode = form.querySelector("[data-error]");
    errorNode.hidden = true;
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    try {
      await api("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: form.email.value,
          password: form.password.value,
          name: form.name.value,
          hour: Number(form.hour.value),
          photo,
          areas: checkedValues(form, "area"),
          langs: checkedValues(form, "lang"),
          services: checkedValues(form, "service"),
          slots: checkedValues(form, "slot"),
        }),
      });
      location.href = "cabinet.html";
    } catch (error) {
      showError(errorNode, error);
      button.disabled = false;
    }
  });
}

async function initCabinet() {
  const root = document.querySelector("[data-cabinet]");
  if (!root) return;
  const gate = root.querySelector("[data-gate]");
  const app = root.querySelector("[data-app]");
  let me;
  try {
    me = (await api("/api/auth/me")).maid;
  } catch {
    gate.hidden = false;
    app.hidden = true;
    return;
  }
  gate.hidden = true;
  app.hidden = false;
  fillChoices(app);
  const form = app.querySelector("[data-profile]");
  form.name.value = me.name;
  form.hour.value = me.hour;
  setChecked(app, "area", me.areas);
  setChecked(app, "lang", me.langs);
  setChecked(app, "service", me.services);
  setChecked(app, "slot", me.slots);
  let photo = me.photo || "";
  const previewImg = form.querySelector("[data-photo-preview]");
  if (safePhoto(photo)) {
    previewImg.src = safePhoto(photo);
    previewImg.hidden = false;
  }
  form.photo?.addEventListener("change", async () => {
    const file = form.photo.files?.[0];
    if (!file) return;
    photo = await shrinkImage(file);
    previewImg.src = photo;
    previewImg.hidden = false;
    paintPreview();
  });

  const preview = app.querySelector("[data-preview]");
  const note = app.querySelector("[data-intake-note]");
  const toggle = app.querySelector("[data-toggle-open]");
  let open = me.open;

  const draft = () => ({
    name: form.name.value,
    hour: Number(form.hour.value),
    areas: checkedValues(app, "area"),
    langs: checkedValues(app, "lang"),
    services: checkedValues(app, "service"),
    slots: checkedValues(app, "slot"),
    photo,
    open,
    areasText: checkedValues(app, "area").join(", "),
    langsText: checkedValues(app, "lang").join(" · "),
  });

  const paintPreview = () => {
    const maid = draft();
    preview.innerHTML = maidCard(maid, null);
    note.textContent = open ? dict().intakeOn : dict().intakeOff;
    toggle.textContent = open ? dict().closeIntake : dict().openIntake;
    toggle.classList.toggle("is-on", open);
  };
  painters.push(paintPreview);
  form.addEventListener("input", paintPreview);
  form.addEventListener("change", paintPreview);
  paintPreview();

  const errorNode = form.querySelector("[data-error]");
  const okNode = form.querySelector("[data-ok]");
  const save = async (nextOpen) => {
    errorNode.hidden = true;
    okNode.hidden = true;
    open = nextOpen;
    const body = draft();
    const saved = await api("/api/me", { method: "PUT", body: JSON.stringify(body) });
    me = saved.maid;
    photo = me.photo || photo;
    open = me.open;
    okNode.hidden = false;
    okNode.textContent = dict().saved;
    paintPreview();
  };
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try { await save(open); } catch (error) { showError(errorNode, error); }
  });
  toggle.addEventListener("click", async () => {
    try { await save(!open); } catch (error) { showError(errorNode, error); }
  });
  app.querySelector("[data-logout]").addEventListener("click", async () => {
    await api("/api/auth/logout", { method: "POST", body: "{}" });
    location.href = "index.html";
  });

  const inbox = app.querySelector("[data-inbox]");
  const paintInbox = (orders) => {
    if (!orders.length) {
      inbox.innerHTML = `<p class="muted">${esc(dict().noOrders)}</p>`;
      return;
    }
    inbox.innerHTML = orders.map((order) => {
      const actions = order.status === "sent"
        ? `<div class="actions"><button class="cta" type="button" data-set="accepted" data-id="${esc(order.id)}">${esc(dict().accept)}</button><button class="ghost" type="button" data-set="declined" data-id="${esc(order.id)}">${esc(dict().decline)}</button></div>`
        : "";
      return `<article class="ticket"><h3>${esc(order.clientName)}</h3><p>${esc(order.phone)} · ${esc(order.city)}</p><p>${esc(order.type)} · ${esc(order.m2)} м² · ${esc(order.date)} ${esc(order.slot)}</p><p class="status-${esc(order.status)}"><strong>₪${esc(order.sum)}</strong> · ${esc(order.status === "accepted" ? dict().statusAccepted : order.status === "declined" ? dict().statusDeclined : dict().statusSent)}</p>${actions}</article>`;
    }).join("");
  };
  const loadOrders = async () => {
    try {
      const data = await api("/api/orders");
      paintInbox(data.orders);
    } catch (error) {
      inbox.innerHTML = `<p class="form-error">${esc(sayError(error.message))}</p>`;
    }
  };
  inbox.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-set]");
    if (!button) return;
    button.disabled = true;
    try {
      await api(`/api/orders/${encodeURIComponent(button.dataset.id)}`, {
        method: "PATCH",
        body: JSON.stringify({ status: button.dataset.set }),
      });
      await loadOrders();
    } catch (error) {
      showError(errorNode, error);
      button.disabled = false;
    }
  });
  await loadOrders();
  setInterval(loadOrders, 8000);
}

function initSwitch() {
  document.querySelectorAll(".switch button").forEach((button) => {
    button.addEventListener("click", () => applyLang(button.dataset.lang));
  });
  applyLang(getLang());
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  initSwitch();
  bindSlots();
  if (page === "client") initClient();
  if (page === "vitrine") initVitrine();
  if (page === "shop") initShop();
  if (page === "order") initOrder();
  if (page === "login") bindAuth("[data-login]", "/api/auth/login", "cabinet.html");
  if (page === "register") bindRegister();
  if (page === "cabinet") initCabinet();
});
