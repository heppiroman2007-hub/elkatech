const CATEGORIES = {
  all: 'Все товары',
  phones: 'Смартфоны',
  laptops: 'Ноутбуки',
  audio: 'Аудио',
  tv: 'Телевизоры',
  gaming: 'Игры',
  smart: 'Умные гаджеты',
  warm: 'Тепло от Деда Мороза',
};

const PRODUCTS = [
  { id: 1, photo: '1732747845735-0a51cca8e960', name: 'Смартфон Aurora X12', cat: 'phones', price: 54990, old: 64990, ill: 'phone', tint: '#4cc9f0', tag: 'хит сезона', desc: '6.7" AMOLED, 256 ГБ, камера 50 Мп' },
  { id: 2, photo: '1734035162495-47b168bb3c1c', name: 'Смартфон Snegir Lite', cat: 'phones', price: 18990, ill: 'phone', tint: '#e63946', desc: '6.5" IPS, 128 ГБ, батарея 5000 мА·ч' },
  { id: 3, photo: '1662252900942-2d7e1feb6494', name: 'Ноутбук Polaris Air 14', cat: 'laptops', price: 79990, old: 99990, ill: 'laptop', tint: '#7b8cff', tag: 'хит сезона', desc: '14" 2.8K, 16 ГБ ОЗУ, SSD 512 ГБ' },
  { id: 4, photo: '1607119967691-2cef21d2b0a7', name: 'Ноутбук Buran Pro 16', cat: 'laptops', price: 134990, ill: 'laptop', tint: '#2a9d8f', desc: '16" 165 Гц, 32 ГБ ОЗУ, SSD 1 ТБ' },
  { id: 5, photo: '1560472355-af30e12ec1bd', name: 'Наушники Metel Buds', cat: 'audio', price: 6990, old: 9990, ill: 'headphones', tint: '#ffd166', tag: 'идея подарка', desc: 'Беспроводные, шумоподавление, 30 часов с кейсом' },
  { id: 6, photo: '1598034989845-48532781987e', name: 'Колонка Kolokol Mini', cat: 'audio', price: 4490, ill: 'speaker', tint: '#e63946', desc: 'Bluetooth 5.3, защита от воды IPX7' },
  { id: 7, photo: '1606937295547-bc0f668595b3', name: 'Телевизор Siyanie 55" OLED', cat: 'tv', price: 89990, old: 119990, ill: 'tv', tint: '#4cc9f0', tag: 'хит сезона', desc: '4K, 120 Гц, Smart TV, HDR10+' },
  { id: 8, photo: '1575741878981-f76dfec7f11e', name: 'Телевизор Iney 43"', cat: 'tv', price: 32990, ill: 'tv', tint: '#7b8cff', desc: '4K, Smart TV, голосовое управление' },
  { id: 9, photo: '1665041950905-adcdd2aaab54', name: 'Игровая консоль Vyuga One', cat: 'gaming', price: 49990, ill: 'console', tint: '#2a9d8f', tag: 'идея подарка', desc: 'Портативная, экран 7", 256 ГБ, док-станция' },
  { id: 10, photo: '1671564933744-d3ccd194bf88', name: 'Геймпад Vyuga Pad', cat: 'gaming', price: 5490, ill: 'gamepad', tint: '#e63946', desc: 'Беспроводной, виброотдача, 40 часов' },
  { id: 11, photo: '1511345624864-d6cf46344e8c', name: 'Умные часы Kuranty Watch', cat: 'smart', price: 14990, old: 19990, ill: 'watch', tint: '#ffd166', tag: 'идея подарка', desc: 'AMOLED, GPS, пульс и сон, 10 дней' },
  { id: 12, photo: '1513885686838-c4000d2d1cf5', name: 'Умная гирлянда Ogonyok', cat: 'smart', price: 2990, ill: 'lights', tint: '#4cc9f0', desc: '200 светодиодов, управление со смартфона' },
  { id: 13, photo: '1767991989341-cacfae3b58ba', name: 'Перчатки с подогревом Varezhka Heat', cat: 'warm', price: 7990, old: 9990, ill: 'glove', tint: '#e63946', tag: 'идея подарка', desc: '3 режима нагрева, до 6 часов тепла, сенсорные пальцы' },
  { id: 14, photo: '1520718458542-6208153eb61a', name: 'Стельки с подогревом Valenki Warm', cat: 'warm', price: 3490, ill: 'insole', tint: '#ffd166', desc: 'Пульт в комплекте, до 8 часов тепла, размеры 36–46' },
  { id: 15, photo: '1643812304609-3bd20f58eb91', name: 'Термокружка Glintvein Smart', cat: 'warm', price: 4990, ill: 'mug', tint: '#2a9d8f', tag: 'идея подарка', desc: 'Держит тепло 12 часов, датчик температуры, 500 мл' },
];

const GIFT_TAGS = [
  { cat: 'audio', ill: 'headphones', name: 'Меломану', text: 'наушники и колонки' },
  { cat: 'gaming', ill: 'gamepad', name: 'Геймеру', text: 'консоли и геймпады' },
  { cat: 'smart', ill: 'watch', name: 'Непоседе', text: 'умные часы и гаджеты' },
  { cat: 'phones', ill: 'phone', name: 'Близким', text: 'новые смартфоны' },
  { cat: 'warm', ill: 'glove', name: 'Мерзлякам', text: 'тепло от Деда Мороза' },
];

// Контурные иллюстрации товаров; класс "a" — золотой акцент
const ILLS = {
  phone: '<rect x="38" y="14" width="44" height="92" rx="8"/><path d="M54 23h12"/><path class="a" d="M60 46v24M49.6 52l20.8 12M49.6 64l20.8-12"/>',
  laptop: '<rect x="26" y="28" width="68" height="46" rx="5"/><path d="M14 84h92l-6 8H20z"/><path class="a" d="M60 41v20M51.3 46l17.4 10M51.3 56l17.4-10"/>',
  headphones: '<path d="M28 68V60a32 32 0 0 1 64 0v8"/><rect class="a" x="20" y="66" width="16" height="28" rx="7"/><rect class="a" x="84" y="66" width="16" height="28" rx="7"/>',
  speaker: '<rect x="36" y="16" width="48" height="88" rx="10"/><circle cx="60" cy="36" r="7"/><circle cx="60" cy="72" r="16"/><circle class="a" cx="60" cy="72" r="5"/>',
  tv: '<rect x="14" y="24" width="92" height="58" rx="5"/><path d="M60 82v16M44 98h32"/><path class="a" d="M60 41v24M49.6 47l20.8 12M49.6 59l20.8-12"/>',
  console: '<rect x="40" y="14" width="40" height="92" rx="6"/><path d="M53 14v92"/><circle class="a" cx="67" cy="30" r="3"/><path class="a" d="M62 94h10"/>',
  gamepad: '<path d="M34 44h52a20 20 0 0 1 19 26l-5 18a10 10 0 0 1-18 2l-6-10H44l-6 10a10 10 0 0 1-18-2l-5-18a20 20 0 0 1 19-26z"/><path d="M40 57v14M33 64h14"/><circle class="a" cx="77" cy="59" r="3.5"/><circle class="a" cx="88" cy="68" r="3.5"/>',
  watch: '<rect x="40" y="38" width="40" height="44" rx="10"/><path d="M46 38l3-20h22l3 20M46 82l3 20h22l3-20"/><path class="a" d="M60 49v11l7 5"/>',
  lights: '<path d="M10 30q50 40 100 0"/><path d="M30 43v5M60 50v5M90 43v5"/><ellipse class="a" cx="30" cy="58" rx="6" ry="9"/><ellipse class="a" cx="60" cy="65" rx="6" ry="9"/><ellipse class="a" cx="90" cy="58" rx="6" ry="9"/>',
  glove: '<path d="M40 104V70L26 54a8 8 0 0 1 12-10l8 9V32a16 16 0 0 1 16-16h6a16 16 0 0 1 16 16v72z"/><path d="M40 90h44"/><path class="a" d="M58 38q5 6 0 12t0 12M71 38q5 6 0 12t0 12"/>',
  insole: '<path d="M60 12c16 0 24 14 22 32-1 12-6 20-6 34 0 16-6 30-16 30s-16-12-16-28c0-14-6-22-7-36-1-18 7-32 23-32z"/><path class="a" d="M52 40q5 6 0 12t0 12M66 40q5 6 0 12t0 12"/>',
  mug: '<rect x="32" y="30" width="56" height="11" rx="4"/><path d="M37 41h46l-4 60a6 6 0 0 1-6 6H47a6 6 0 0 1-6-6z"/><path d="M39 62h42"/><path class="a" d="M52 22q5-5 0-11M68 22q5-5 0-11"/>',
};

const PROMO_CODE = 'НОВЫЙГОД';
const PROMO_RATE = 0.1;
const DEAL_RATE = 0.05;
const STORAGE_KEY = 'elkatech-cart';

// Подарок дня меняется каждые сутки и получает дополнительную скидку
const DEAL_ID = PRODUCTS[Math.floor(new Date().setHours(0, 0, 0, 0) / 86400000) % PRODUCTS.length].id;

const $ = (id) => document.getElementById(id);
const money = (n) => new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' ₽';
const pad = (n) => String(n).padStart(2, '0');
const ill = (name) => `<svg class="ill" viewBox="0 0 120 120" aria-hidden="true">${ILLS[name]}</svg>`;
// Фото с Unsplash лежит поверх иллюстрации; если не загрузилось — остаётся иллюстрация
const picture = (p, w, h) => `${ill(p.ill)}<img class="photo" src="https://images.unsplash.com/photo-${p.photo}?w=${w}&h=${h}&fit=crop&auto=format&q=75" alt="${p.name.replace(/"/g, '&quot;')}" loading="lazy" decoding="async" onerror="this.remove()">`;
const priceOf =(p) => (p.id === DEAL_ID ? Math.floor((p.price * (1 - DEAL_RATE)) / 10) * 10 : p.price);
// старая цена есть только у товаров со скидкой; у подарка дня ею служит обычная цена
const oldOf = (p) => p.old || (p.id === DEAL_ID ? p.price : 0);
const discountOf = (p) => (oldOf(p) ? Math.round((1 - priceOf(p) / oldOf(p)) * 100) : 0);
const bauble = (p) => !discountOf(p) ? '' : `<span class="bauble"><span class="bauble__cap"></span><span class="bauble__ball">−${discountOf(p)}%</span></span>`;

const state = {
  cat: 'all',
  query: '',
  sort: 'popular',
  cart: loadCart(),
  promo: false,
};

/* ---------- Бирки ---------- */

function renderTags() {
  $('tags').innerHTML = GIFT_TAGS.map((tag) => {
    const from = Math.min(...PRODUCTS.filter((p) => p.cat === tag.cat).map(priceOf));
    return `
    <button class="tag" type="button" data-pick="${tag.cat}">
      <span class="tag__paper">
        <span class="tag__to">кому</span>
        ${ill(tag.ill)}
        <span class="tag__name">${tag.name}</span>
        <span class="tag__text">${tag.text}</span>
        <span class="tag__price">от ${money(from)}</span>
      </span>
    </button>`;
  }).join('');
}

$('tags').addEventListener('click', (e) => {
  const tag = e.target.closest('[data-pick]');
  if (!tag) return;
  setCategory(tag.dataset.pick);
  $('chips').scrollIntoView();
});

/* ---------- Подарок дня ---------- */

function renderDeal() {
  const p = PRODUCTS.find((item) => item.id === DEAL_ID);
  $('deal').innerHTML = `
    <div class="deal__image">${picture(p, 900, 600)}${bauble(p)}</div>
    <div>
      <p class="eyebrow">Подарок дня</p>
      <h2 class="deal__name">${p.name}</h2>
      <p class="deal__desc">${p.desc}. Сегодня — ещё −5% к праздничной цене.</p>
      <div class="deal__timer">
        <span>До конца дня</span>
        <div class="countdown__cell"><span id="dealHours">00</span><small>часов</small></div>
        <div class="countdown__cell"><span id="dealMinutes">00</span><small>минут</small></div>
        <div class="countdown__cell"><span id="dealSeconds">00</span><small>секунд</small></div>
      </div>
      <div class="deal__buy">
        <div>
          ${oldOf(p) ? `<span class="price__old">${money(oldOf(p))}</span>` : ''}
          <span class="price__now">${money(priceOf(p))}</span>
        </div>
        <button class="btn btn--primary" type="button" data-add="${p.id}">Забрать подарок</button>
      </div>
    </div>`;
}

/* ---------- Каталог ---------- */

function renderChips() {
  $('chips').innerHTML = Object.entries(CATEGORIES)
    .map(([key, label]) => `<button class="chip${key === state.cat ? ' is-active' : ''}" type="button" data-cat="${key}">${label}</button>`)
    .join('');
}

function visibleProducts() {
  const q = state.query.trim().toLowerCase();
  const list = PRODUCTS.filter((p) =>
    (state.cat === 'all' || p.cat === state.cat) &&
    (!q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );
  const sorters = {
    cheap: (a, b) => priceOf(a) - priceOf(b),
    expensive: (a, b) => priceOf(b) - priceOf(a),
    discount: (a, b) => discountOf(b) - discountOf(a),
  };
  if (sorters[state.sort]) list.sort(sorters[state.sort]);
  return list;
}

function renderProducts() {
  const list = visibleProducts();
  $('empty').hidden = list.length > 0;
  $('products').innerHTML = list.map((p) => {
    const tag = p.id === DEAL_ID ? 'подарок дня' : p.tag;
    return `
    <article class="product" style="--tint:${p.tint}40">
      ${bauble(p)}
      <div class="product__image">${picture(p, 600, 400)}</div>
      <div class="product__meta">
        <span class="product__cat">${CATEGORIES[p.cat]}</span>
        ${tag ? `<span class="product__tag">${tag}</span>` : ''}
      </div>
      <h3 class="product__name">${p.name}</h3>
      <p class="product__desc">${p.desc}</p>
      <div class="product__bottom">
        <div>
          ${oldOf(p) ? `<span class="price__old">${money(oldOf(p))}</span>` : ''}
          <span class="price__now">${money(priceOf(p))}</span>
        </div>
        <button class="product__add" type="button" data-add="${p.id}">В корзину</button>
      </div>
    </article>`;
  }).join('');
}

function setCategory(cat) {
  state.cat = cat;
  renderChips();
  renderProducts();
}

$('chips').addEventListener('click', (e) => {
  const chip = e.target.closest('[data-cat]');
  if (chip) setCategory(chip.dataset.cat);
});

$('search').addEventListener('input', (e) => {
  state.query = e.target.value;
  renderProducts();
});

$('sort').addEventListener('change', (e) => {
  state.sort = e.target.value;
  renderProducts();
});

$('catalog').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]');
  if (!btn) return;
  changeQty(Number(btn.dataset.add), 1);
  showToast('Положили под ёлку — товар в корзине');
});

/* ---------- Корзина ---------- */

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  } catch {
    // хранилище недоступно — корзина живёт до перезагрузки страницы
  }
}

function changeQty(id, delta) {
  const next = (state.cart[id] || 0) + delta;
  if (next > 0) state.cart[id] = next;
  else delete state.cart[id];
  saveCart();
  renderCart();
}

function renderCart() {
  const items = Object.entries(state.cart)
    .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === Number(id)), qty }))
    .filter((item) => item.product);

  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + priceOf(item.product) * item.qty, 0);
  const discount = state.promo ? subtotal * PROMO_RATE : 0;

  $('cartCount').textContent = count;
  $('cartTotal').textContent = money(subtotal - discount);
  $('discountRow').hidden = !discount;
  $('cartDiscount').textContent = '−' + money(discount);

  $('cartItems').innerHTML = items.length
    ? items.map(({ product, qty }) => `
      <div class="cart-item">
        <div class="cart-item__icon">${picture(product, 120, 120)}</div>
        <div>
          <div class="cart-item__name">${product.name}</div>
          <div class="cart-item__price">${money(priceOf(product) * qty)}</div>
        </div>
        <div class="qty">
          <button type="button" data-qty="-1" data-id="${product.id}" aria-label="Уменьшить количество">−</button>
          <span>${qty}</span>
          <button type="button" data-qty="1" data-id="${product.id}" aria-label="Увеличить количество">+</button>
        </div>
      </div>`).join('')
    : '<p class="cart__empty">Под ёлкой пока пусто.<br>Самое время выбрать подарок</p>';
}

function toggleCart(open) {
  $('cart').classList.toggle('is-open', open);
  $('cart').setAttribute('aria-hidden', String(!open));
  $('overlay').hidden = !open;
}

$('cartOpen').addEventListener('click', () => toggleCart(true));
$('cartClose').addEventListener('click', () => toggleCart(false));
$('overlay').addEventListener('click', () => toggleCart(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleCart(false);
});

$('cartItems').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-qty]');
  if (btn) changeQty(Number(btn.dataset.id), Number(btn.dataset.qty));
});

$('promoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = $('promoMsg');
  state.promo = $('promoInput').value.trim().toUpperCase() === PROMO_CODE;
  msg.textContent = state.promo ? 'Промокод применён: скидка 10%' : 'Такого промокода нет';
  msg.className = 'promo__msg ' + (state.promo ? 'is-ok' : 'is-error');
  renderCart();
});

$('checkout').addEventListener('click', () => {
  if (!Object.keys(state.cart).length) {
    showToast('Сначала добавьте товары в корзину');
    return;
  }
  toggleCart(false);
  $('orderTotal').textContent = $('cartTotal').textContent;
  $('order').showModal();
});

/* ---------- Правовые документы, cookie и форма заказа ---------- */

// Данные продавца: заменить на настоящие перед запуском
const SELLER = {
  name: '<mark>[ИП Фамилия И. О. или ООО «Название»]</mark>',
  inn: '<mark>[ИНН]</mark>',
  address: '<mark>[юридический адрес]</mark>',
  email: 'hello@elkatech.example',
};
const DEMO_NOTE = '<p class="paper__note">Это шаблон документа для демонстрационного сайта. Перед запуском настоящего магазина подставьте данные продавца и покажите текст юристу.</p>';

const DOCS = {
  privacy: {
    title: 'Политика обработки персональных данных',
    body: `${DEMO_NOTE}
      <h3>1. Общие положения</h3>
      <p>Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет, как ${SELLER.name} (ИНН ${SELLER.inn}, адрес: ${SELLER.address}; далее — Оператор) обрабатывает данные посетителей и покупателей сайта.</p>
      <h3>2. Какие данные мы обрабатываем</h3>
      <ul>
        <li>имя, номер телефона, адрес электронной почты, адрес доставки — их вы указываете при оформлении заказа;</li>
        <li>технические данные: cookie, сведения о браузере и устройстве, IP-адрес.</li>
      </ul>
      <h3>3. Зачем</h3>
      <ul>
        <li>чтобы принять, оплатить и доставить заказ, связаться с вами по нему;</li>
        <li>чтобы исполнять требования законодательства, в том числе о защите прав потребителей;</li>
        <li>чтобы присылать новости и акции — только если вы дали на это отдельное согласие.</li>
      </ul>
      <h3>4. Правовые основания</h3>
      <p>Ваше согласие на обработку персональных данных, заключение и исполнение договора купли-продажи, требования законодательства Российской Федерации.</p>
      <h3>5. Кому передаём</h3>
      <p>Только тем, без кого нельзя выполнить заказ: службам доставки и платёжным сервисам — в объёме, необходимом для их работы. Данные не продаются и не передаются для чужой рекламы.</p>
      <h3>6. Хранение и защита</h3>
      <p>Данные хранятся на серверах, расположенных в Российской Федерации, до достижения целей обработки или до отзыва согласия, если более долгий срок не установлен законом. Оператор принимает правовые, организационные и технические меры для их защиты.</p>
      <h3>7. Ваши права</h3>
      <p>Вы можете узнать, какие ваши данные обрабатываются, потребовать уточнить или удалить их, отозвать согласие. Для этого напишите на ${SELLER.email} — ответим в течение 10 рабочих дней.</p>
      <h3>8. Изменения</h3>
      <p>Актуальная редакция Политики всегда доступна на этой странице.</p>`,
  },
  consent: {
    title: 'Согласие на обработку персональных данных',
    body: `${DEMO_NOTE}
      <p>Отмечая флажок в форме заказа, я свободно, своей волей и в своём интересе даю ${SELLER.name} (ИНН ${SELLER.inn}, адрес: ${SELLER.address}) согласие на обработку моих персональных данных.</p>
      <h3>Какие данные</h3>
      <p>Имя, номер телефона, адрес электронной почты, адрес доставки.</p>
      <h3>Цели</h3>
      <p>Оформление, оплата и доставка заказа, связь со мной по заказу, исполнение обязательств продавца.</p>
      <h3>Действия с данными</h3>
      <p>Сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача службам доставки и платёжным сервисам в необходимом объёме, блокирование, удаление и уничтожение — с использованием средств автоматизации и без них.</p>
      <h3>Срок и отзыв</h3>
      <p>Согласие действует до достижения целей обработки или до его отзыва. Отозвать согласие можно в любой момент, написав на ${SELLER.email}.</p>
      <p>Согласие на рекламные рассылки даётся отдельным флажком и не является условием покупки.</p>`,
  },
  cookies: {
    title: 'Политика cookie',
    body: `${DEMO_NOTE}
      <p>Cookie и локальное хранилище — это небольшие записи, которые сайт сохраняет в вашем браузере.</p>
      <h3>Что мы сохраняем</h3>
      <ul>
        <li><b>Необходимые:</b> содержимое корзины и ваш выбор в этом уведомлении. Без них сайт не сможет запомнить товары.</li>
        <li><b>Аналитические и рекламные:</b> сейчас не используются. Если они появятся, включаться будут только после нажатия «Принять все».</li>
      </ul>
      <h3>Сторонние сервисы</h3>
      <p>Шрифты и фотографии товаров загружаются с внешних серверов; при этом им становится известен ваш IP-адрес.</p>
      <h3>Как отказаться</h3>
      <p>Выберите «Только необходимые» в уведомлении или удалите данные сайта в настройках браузера. Изменить выбор можно по ссылке «Настройки cookie» внизу страницы.</p>`,
  },
  terms: {
    title: 'Пользовательское соглашение',
    body: `${DEMO_NOTE}
      <h3>1. О сайте</h3>
      <p>Сайт принадлежит ${SELLER.name} и предназначен для знакомства с товарами и оформления заказов. Пользуясь сайтом, вы принимаете это соглашение.</p>
      <h3>2. Товары и цены</h3>
      <p>Описание, фотографии и цены носят справочный характер. Цена и наличие подтверждаются при обработке заказа. Скидки и промокоды действуют в сроки, указанные на сайте.</p>
      <h3>3. Заказ и оплата</h3>
      <p>Договор купли-продажи считается заключённым с момента, когда продавец подтвердил заказ. Способы оплаты и доставки сообщаются при подтверждении.</p>
      <h3>4. Ответственность</h3>
      <p>Продавец отвечает перед покупателем в пределах, установленных законодательством Российской Федерации, в том числе Законом «О защите прав потребителей».</p>
      <h3>5. Споры</h3>
      <p>Претензии направляйте на ${SELLER.email}. Если договориться не удалось, спор рассматривается в порядке, установленном законом.</p>`,
  },
  returns: {
    title: 'Доставка и возврат',
    body: `${DEMO_NOTE}
      <h3>Доставка</h3>
      <p>Заказы, оформленные до 30 декабря, доставляются до Нового года. Подарочная упаковка и открытка — бесплатно.</p>
      <h3>Отказ от товара</h3>
      <p>При покупке через интернет вы вправе отказаться от товара в любое время до его передачи, а после передачи — в течение 7 дней (ст. 26.1 Закона «О защите прав потребителей»), если сохранены товарный вид и потребительские свойства.</p>
      <h3>Обмен</h3>
      <p>Магазин дополнительно принимает товар надлежащего качества к обмену в течение 30 дней. Для технически сложных товаров действуют ограничения, установленные законодательством.</p>
      <h3>Гарантия</h3>
      <p>На технику действует гарантия 2 года. При обнаружении недостатка напишите на ${SELLER.email} — подскажем, как оформить ремонт, замену или возврат денег.</p>`,
  },
};

function openDoc(key) {
  const doc = DOCS[key];
  if (!doc) return;
  $('legalTitle').textContent = doc.title;
  $('legalBody').innerHTML = doc.body;
  $('legalBody').scrollTop = 0;
  $('legal').showModal();
}

document.addEventListener('click', (e) => {
  const docLink = e.target.closest('[data-doc]');
  if (docLink) {
    openDoc(docLink.dataset.doc);
    return;
  }
  const closer = e.target.closest('[data-close]');
  if (closer) closer.closest('dialog').close();
});

// щелчок по затемнению вокруг документа закрывает его
document.querySelectorAll('dialog.paper').forEach((dialog) => {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
});

const COOKIE_KEY = 'elkatech-cookies';

function cookieChoice() {
  try {
    return localStorage.getItem(COOKIE_KEY);
  } catch {
    return null;
  }
}

$('cookieBar').hidden = Boolean(cookieChoice());

$('cookieBar').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-cookies]');
  if (!btn) return;
  try {
    localStorage.setItem(COOKIE_KEY, btn.dataset.cookies);
  } catch {
    // без хранилища выбор действует до перезагрузки
  }
  $('cookieBar').hidden = true;
});

$('cookieReopen').addEventListener('click', () => {
  $('cookieBar').hidden = false;
});

$('orderForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // демо: данные формы никуда не отправляются и не сохраняются
  e.target.reset();
  $('order').close();
  showToast('Это демо-сайт: заказ не отправлен, данные не сохранены. С наступающим!');
});

/* ---------- Уведомления ---------- */

let toastTimer;
function showToast(text) {
  const toast = $('toast');
  toast.textContent = text;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

/* ---------- Таймеры ---------- */

function tick() {
  const now = new Date();

  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const toNewYear = Math.max(0, newYear - now);
  $('cdDays').textContent = pad(Math.floor(toNewYear / 86400000));
  $('cdHours').textContent = pad(Math.floor(toNewYear / 3600000) % 24);
  $('cdMinutes').textContent = pad(Math.floor(toNewYear / 60000) % 60);
  $('cdSeconds').textContent = pad(Math.floor(toNewYear / 1000) % 60);

  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const toMidnight = Math.max(0, midnight - now);
  $('dealHours').textContent = pad(Math.floor(toMidnight / 3600000));
  $('dealMinutes').textContent = pad(Math.floor(toMidnight / 60000) % 60);
  $('dealSeconds').textContent = pad(Math.floor(toMidnight / 1000) % 60);
}

/* ---------- Надпись из еловых веток ---------- */

// Дуга эллипса в виде ломаной; углы в градусах, 0° — вправо, 90° — вниз
function arc(cx, cy, rx, ry, from, to) {
  const points = [];
  for (let i = 0; i <= 24; i++) {
    const a = ((from + ((to - from) * i) / 24) * Math.PI) / 180;
    points.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]);
  }
  return points;
}

// Каркас букв: ширина и набор «веток» в поле высотой 100
const FIR_LETTERS = {
  'А': { w: 84, s: [[[6, 100], [42, 0], [78, 100]], [[20, 64], [64, 64]]] },
  'Б': { w: 80, s: [[[8, 100], [8, 0], [64, 0]], [[8, 46], [44, 46], ...arc(44, 73, 28, 27, -90, 90), [8, 100]]] },
  'В': { w: 80, s: [[[8, 100], [8, 0], [40, 0], ...arc(40, 23, 24, 23, -90, 90), [8, 46]], [[8, 46], [44, 46], ...arc(44, 73, 28, 27, -90, 90), [8, 100]]] },
  'Г': { w: 68, s: [[[8, 100], [8, 0], [64, 0]]] },
  'Д': { w: 100, s: [[[20, 82], [36, 0], [80, 0], [80, 82]], [[6, 82], [94, 82], [94, 102]], [[6, 82], [6, 102]]] },
  'Е': { w: 72, s: [[[64, 0], [8, 0], [8, 100], [64, 100]], [[8, 50], [54, 50]]] },
  'Л': { w: 84, s: [[[6, 100], [42, 0], [78, 100]]] },
  'Н': { w: 80, s: [[[8, 0], [8, 100]], [[72, 0], [72, 100]], [[8, 50], [72, 50]]] },
  'О': { w: 88, s: [arc(44, 50, 38, 50, -90, 270)] },
  'С': { w: 82, s: [arc(44, 50, 38, 50, -42, -318)] },
  'Т': { w: 80, s: [[[4, 0], [76, 0]], [[40, 0], [40, 100]]] },
  'Ш': { w: 108, s: [[[8, 0], [8, 100], [100, 100], [100, 0]], [[54, 0], [54, 100]]] },
};

function renderFirTitle() {
  const canvas = $('firTitle');
  const ctx = canvas.getContext('2d');
  const lines = ['ДО', 'НОВОГОДНЕГО', 'ВОЛШЕБСТВА'];
  const GAP = 30;
  const LINE = 138;
  const PAD = 30;
  const TOP = 66; // запас сверху под шапку
  const SCALE = 1.5;

  const widths = lines.map((line) => [...line].reduce((sum, ch) => sum + FIR_LETTERS[ch].w + GAP, -GAP));
  const W = Math.max(...widths) + PAD * 2;
  const H = TOP + PAD + LINE * (lines.length - 1) + 100;
  canvas.width = W * SCALE;
  canvas.height = H * SCALE;
  ctx.scale(SCALE, SCALE);
  ctx.lineCap = 'round';

  // генератор с фиксированным зерном, чтобы ветки не «прыгали» между загрузками
  let seed = 2027;
  const rand = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  // точки вдоль веток: из каждой растут иголки
  const samples = [];
  const letters = [];
  lines.forEach((line, row) => {
    let x = (W - widths[row]) / 2;
    const y = TOP + row * LINE;
    for (const ch of line) {
      const start = samples.length;
      for (const stroke of FIR_LETTERS[ch].s) {
        for (let i = 0; i < stroke.length - 1; i++) {
          const [px, py] = stroke[i];
          const [qx, qy] = stroke[i + 1];
          const length = Math.hypot(qx - px, qy - py);
          const angle = Math.atan2(qy - py, qx - px);
          for (let d = 0; d < length; d += 1.3) {
            samples.push({ x: x + px + Math.cos(angle) * d, y: y + py + Math.sin(angle) * d, angle, row });
          }
        }
      }
      letters.push([start, samples.length]);
      x += FIR_LETTERS[ch].w + GAP;
    }
  });

  const layers = [
    { color: '#0e3a22', min: 16, max: 25, width: 1.7, skip: 0, shadow: true },
    { color: '#1b6b3c', min: 13, max: 22, width: 1.3, skip: 0 },
    { color: '#3d9c5c', min: 9, max: 18, width: 1.1, skip: 0.35 },
    { color: '#bfe8c6', min: 6, max: 13, width: 0.9, skip: 0.82 },
  ];
  const drawNeedles = () => {
   for (const layer of layers) {
    ctx.beginPath();
    for (const s of samples) {
      for (const side of [-1, 1]) {
        if (rand() < layer.skip) continue;
        const angle = s.angle + side * (0.5 + rand() * 0.65);
        const length = layer.min + rand() * (layer.max - layer.min);
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + Math.cos(angle) * length, s.y + Math.sin(angle) * length);
      }
    }
    ctx.shadowColor = layer.shadow ? 'rgba(0, 0, 0, 0.55)' : 'transparent';
    ctx.shadowBlur = layer.shadow ? 10 : 0;
    ctx.strokeStyle = layer.color;
    ctx.lineWidth = layer.width;
    ctx.stroke();
   }
  };
  drawNeedles();

  // нитка белых бус, которая видна только поверх веток
  ctx.fillStyle = '#ffffff';
  lines.forEach((_, row) => {
    const middle = TOP + row * LINE + 50;
    for (let x = 0; x < W; x += 6.5) {
      const y = middle + Math.sin(x / 58 + row * 2) * 40;
      if (!samples.some((s) => s.row === row && (s.x - x) ** 2 + (s.y - y) ** 2 < 150)) continue;
      ctx.beginPath();
      ctx.arc(x, y, 2.1, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // серебряные шары
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 2;
  for (const [start, end] of letters) {
    const count = rand() < 0.45 ? 2 : 1;
    for (let i = 0; i < count; i++) {
      const s = samples[start + Math.floor(rand() * (end - start))];
      const r = 7 + rand() * 5;
      const fill = ctx.createRadialGradient(s.x - r * 0.35, s.y - r * 0.4, r * 0.1, s.x, s.y, r);
      fill.addColorStop(0, '#ffffff');
      fill.addColorStop(0.55, '#cdd4de');
      fill.addColorStop(1, '#6f7a8a');
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const firstLineX = (W - widths[0]) / 2;

  // шапка Санты: бархатный колпак со складкой, меховая опушка и помпон из отдельных ворсинок
  const HAT_RES = 4;
  const hatCanvas = document.createElement('canvas');
  hatCanvas.width = 140 * HAT_RES;
  hatCanvas.height = 100 * HAT_RES;
  const hc = hatCanvas.getContext('2d');
  hc.scale(HAT_RES, HAT_RES);
  hc.translate(50, 80);
  hc.lineCap = 'round';

  const hatShape = () => {
    hc.beginPath();
    hc.moveTo(-33, 2);
    hc.bezierCurveTo(-31, -36, -12, -62, 12, -60);
    hc.bezierCurveTo(34, -58, 50, -40, 55, -14);
    hc.bezierCurveTo(47, -27, 38, -25, 33, 2);
    hc.closePath();
  };
  const velvet = hc.createLinearGradient(-30, -52, 50, 0);
  velvet.addColorStop(0, '#ff5b66');
  velvet.addColorStop(0.3, '#e31d2d');
  velvet.addColorStop(0.7, '#b90f1e');
  velvet.addColorStop(1, '#7d0813');
  hc.fillStyle = velvet;
  hatShape();
  hc.fill();

  hc.save();
  hatShape();
  hc.clip();
  hc.filter = 'blur(2.5px)';
  // блик на левом боку
  hc.strokeStyle = 'rgba(255, 190, 195, 0.5)';
  hc.lineWidth = 6;
  hc.beginPath();
  hc.moveTo(-23, -8);
  hc.bezierCurveTo(-21, -32, -8, -48, 8, -51);
  hc.stroke();
  // складка там, где кончик колпака загибается вниз
  hc.strokeStyle = 'rgba(70, 0, 10, 0.6)';
  hc.lineWidth = 5;
  hc.beginPath();
  hc.moveTo(20, -58);
  hc.bezierCurveTo(31, -46, 35, -30, 31, -8);
  hc.stroke();
  hc.strokeStyle = 'rgba(70, 0, 10, 0.35)';
  hc.beginPath();
  hc.moveTo(-6, -20);
  hc.bezierCurveTo(4, -26, 14, -22, 22, -10);
  hc.stroke();
  hc.filter = 'none';
  // тень от опушки на бархате
  const brimShadow = hc.createLinearGradient(0, -16, 0, -2);
  brimShadow.addColorStop(0, 'rgba(60, 0, 8, 0)');
  brimShadow.addColorStop(1, 'rgba(60, 0, 8, 0.65)');
  hc.fillStyle = brimShadow;
  hc.fillRect(-40, -16, 80, 18);
  hc.restore();

  const fur = (cx, cy, rx, ry, count) => {
    const base = hc.createRadialGradient(cx - rx * 0.3, cy - ry * 0.5, 1, cx, cy, Math.max(rx, ry));
    base.addColorStop(0, '#ffffff');
    base.addColorStop(1, '#d3dae4');
    hc.fillStyle = base;
    hc.beginPath();
    hc.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    hc.fill();
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2;
      const dist = Math.sqrt(rand());
      const x = cx + Math.cos(a) * rx * dist;
      const y = cy + Math.sin(a) * ry * dist;
      const dir = a + (rand() - 0.5) * 1.4;
      const length = 2.5 + rand() * 4.5;
      const shaded = y > cy + ry * 0.25 && rand() < 0.55;
      hc.strokeStyle = shaded ? 'rgba(170, 183, 201, 0.75)' : `rgba(255, 255, 255, ${0.55 + rand() * 0.45})`;
      hc.lineWidth = 0.7 + rand() * 0.7;
      hc.beginPath();
      hc.moveTo(x, y);
      hc.lineTo(x + Math.cos(dir) * length, y + Math.sin(dir) * length);
      hc.stroke();
    }
  };
  fur(0, 3, 37, 10, 1500);
  fur(55, -9, 11, 11, 600);

  ctx.drawImage(hatCanvas, firstLineX + 58 - 50, TOP - 6 - 80, 140, 100);
  // леденец-трость — небольшая игрушка на ветке: крючок перекинут через перекладину «Т»,
  // его короткий конец уходит за хвою, а палочка свисает спереди под перекладиной
  const caneAt = lines[2].indexOf('Т');
  const caneLetterX = [...lines[2]].slice(0, caneAt).reduce((x, ch) => x + FIR_LETTERS[ch].w + GAP, (W - widths[2]) / 2);
  const HOOK = 11;
  const STICK = 52;
  const TUBE = 9;
  const CANE_RES = 4;
  const caneCanvas = document.createElement('canvas');
  caneCanvas.width = (HOOK * 2 + TUBE + 20) * CANE_RES;
  caneCanvas.height = (HOOK + STICK + TUBE + 20) * CANE_RES;
  const cc = caneCanvas.getContext('2d');
  cc.scale(CANE_RES, CANE_RES);
  cc.translate(HOOK + TUBE / 2 + 10, HOOK + TUBE / 2 + 10);

  const canePath = () => {
    cc.beginPath();
    cc.moveTo(HOOK, STICK);
    cc.lineTo(HOOK, 0);
    cc.arc(0, 0, HOOK, 0, Math.PI, true);
    cc.lineTo(-HOOK, 10);
  };
  cc.lineCap = 'round';
  cc.lineWidth = TUBE;
  cc.strokeStyle = '#fdfdfd';
  canePath();
  cc.stroke();
  cc.globalCompositeOperation = 'source-atop';

  // точки вдоль оси трости с направлением — по ним закручиваются полоски
  const axis = [];
  for (let y = STICK + TUBE; y > 0; y -= 0.5) axis.push({ x: HOOK, y, tx: 0, ty: -1 });
  for (let a = 0; a < Math.PI; a += 0.5 / HOOK) axis.push({ x: Math.cos(a) * HOOK, y: -Math.sin(a) * HOOK, tx: -Math.sin(a), ty: -Math.cos(a) });
  for (let y = 0; y < 10 + TUBE; y += 0.5) axis.push({ x: -HOOK, y, tx: 0, ty: 1 });
  const stripe = (p, width, color) => {
    cc.strokeStyle = color;
    cc.lineWidth = width;
    cc.beginPath();
    cc.moveTo(p.x - p.ty * 10 + p.tx * 7, p.y + p.tx * 10 + p.ty * 7);
    cc.lineTo(p.x + p.ty * 10 - p.tx * 7, p.y - p.tx * 10 - p.ty * 7);
    cc.stroke();
  };
  cc.lineCap = 'butt';
  for (let i = 4; i < axis.length; i += 24) {
    stripe(axis[i], 4.2, '#d81e2c');
    if (axis[i + 9]) stripe(axis[i + 9], 1.3, '#d81e2c');
    if (axis[i + 14]) stripe(axis[i + 14], 1, '#2f9a5c');
  }

  // объём: тень по правому краю и блик по левому
  cc.lineCap = 'round';
  cc.filter = 'blur(1.2px)';
  cc.save();
  cc.translate(2.6, 1.2);
  cc.strokeStyle = 'rgba(70, 10, 30, 0.38)';
  cc.lineWidth = 3.6;
  canePath();
  cc.stroke();
  cc.restore();
  cc.filter = 'blur(0.5px)';
  cc.save();
  cc.translate(-1.8, -1);
  cc.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  cc.lineWidth = 1.6;
  canePath();
  cc.stroke();
  cc.restore();

  const hookX = caneLetterX + 58;
  const hookY = TOP + LINE * 2 - 5;
  ctx.drawImage(
    caneCanvas,
    hookX - HOOK - TUBE / 2 - 10,
    hookY - HOOK - TUBE / 2 - 10,
    caneCanvas.width / CANE_RES,
    caneCanvas.height / CANE_RES
  );

  // хвоя перекладины поверх короткого конца крючка — так трость действительно «надета» на ветку
  ctx.save();
  ctx.beginPath();
  ctx.rect(hookX - HOOK - TUBE, hookY - 3, HOOK + TUBE - 1, 40);
  ctx.clip();
  ctx.shadowOffsetY = 0;
  drawNeedles();
  ctx.restore();
}
/* ---------- Гирлянда ---------- */

function renderGarland() {
  const colors = ['#e63946', '#ffd166', '#2a9d8f', '#4cc9f0', '#f72585'];
  const count = Math.max(12, Math.floor(window.innerWidth / 48));
  $('garland').innerHTML = Array.from({ length: count }, (_, i) =>
    `<span style="--c:${colors[i % colors.length]};animation-delay:${(i % 5) * 0.3}s"></span>`
  ).join('');
}

/* ---------- Снег ---------- */

const snow = (() => {
  const canvas = $('snow');
  const ctx = canvas.getContext('2d');
  let flakes = [];
  let frame = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(160, Math.floor(window.innerWidth / 9));
    flakes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.6 + 0.8,
      speed: Math.random() * 0.9 + 0.4,
      drift: Math.random() * 0.8 - 0.4,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    for (const f of flakes) {
      f.phase += 0.01;
      f.y += f.speed;
      f.x += f.drift + Math.sin(f.phase) * 0.4;
      if (f.y > canvas.height + 4) {
        f.y = -4;
        f.x = Math.random() * canvas.width;
      }
      if (f.x > canvas.width + 4) f.x = -4;
      if (f.x < -4) f.x = canvas.width + 4;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    }
    frame = requestAnimationFrame(draw);
  }

  function start() {
    if (frame === null) draw();
  }

  function stop() {
    cancelAnimationFrame(frame);
    frame = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return { resize, start, stop, isRunning: () => frame !== null };
})();

$('snowToggle').addEventListener('click', (e) => {
  if (snow.isRunning()) snow.stop();
  else snow.start();
  e.currentTarget.setAttribute('aria-pressed', String(snow.isRunning()));
});

// на телефоне resize срабатывает при каждом скрытии адресной строки — реагируем только на смену ширины
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if (window.innerWidth === lastWidth) return;
  lastWidth = window.innerWidth;
  snow.resize();
  renderGarland();
});

/* ---------- Запуск ---------- */

renderTags();
renderDeal();
renderChips();
renderProducts();
renderCart();
renderGarland();
renderFirTitle();
tick();
setInterval(tick, 1000);

snow.resize();
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  $('snowToggle').setAttribute('aria-pressed', 'false');
} else {
  snow.start();
}
