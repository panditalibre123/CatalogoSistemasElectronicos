const products = [
  {
    id: "fluke-117", name: "Multímetro digital 117", brand: "Fluke", category: "Voltímetros",
    categoryId: "voltimetros", price: 7890,
    tag: "Profesional", image: "https://media.fluke.com/e55511c8-92e6-46b2-b9ae-b108002dd7fa_original__size.jpg",
    imageSource: "https://www.fluke.com/en-us/product/electrical-testing/digital-multimeters/fluke-117",
    description: "Multímetro de verdadero valor eficaz, diseñado para electricistas comerciales. Incluye detección de voltaje sin contacto VoltAlert y modo de baja impedancia para reducir lecturas fantasma.",
    specs: [["Voltaje AC/DC", "0.1 mV a 600 V"], ["Seguridad", "CAT III 600 V"], ["Funciones", "VoltAlert, LoZ, continuidad"], ["Pantalla", "Retroiluminada, 6000 cuentas"], ["Alimentación", "Batería 9 V"]]
  },
  {
    id: "uni-t-ut61e", name: "Multímetro digital UT61E+", brand: "UNI-T", category: "Voltímetros",
    categoryId: "voltimetros", price: 2490,
    tag: "Muy elegido", image: "https://meters.uni-trend.com/wp-content/uploads/2022/04/UT61E_1.jpg",
    imageSource: "https://meters.uni-trend.com/product/ut61plus-series/",
    description: "Multímetro de amplio rango con verdadero valor eficaz, conexión USB y registro de datos. Una opción versátil para electrónica, mantenimiento y laboratorio educativo.",
    specs: [["Voltaje AC/DC", "0.1 mV a 1000 V DC"], ["Resolución", "22 000 cuentas"], ["Funciones", "AC/DC, capacitancia, frecuencia"], ["Conectividad", "USB para registro"], ["Seguridad", "CAT III 1000 V"]]
  },
  {
    id: "klein-mm600", name: "Multímetro digital MM600", brand: "Klein Tools", category: "Voltímetros",
    categoryId: "voltimetros", price: 1890,
    tag: "Uso rudo", image: "https://media.kleintools.io/images/original/klein/mm600.jpg",
    imageSource: "https://www.kleintools.com/catalog/multimeters/digital-multimeter-auto-ranging-1000v",
    description: "Medidor de rango automático con funciones para instalaciones eléctricas y diagnóstico general. Su carcasa está diseñada para soportar el uso cotidiano en campo.",
    specs: [["Voltaje AC/DC", "Hasta 1000 V"], ["Funciones", "Resistencia, capacitancia, temperatura"], ["Seguridad", "CAT III 1000 V / CAT IV 600 V"], ["Pantalla", "Retroiluminada"], ["Accesorios", "Puntas y termopar tipo K"]]
  },
  {
    id: "fluke-323", name: "Pinza amperimétrica 323", brand: "Fluke", category: "Amperímetros",
    categoryId: "amperimetros", price: 4690,
    tag: "Profesional", image: "https://media.fluke.com/c0eacec0-218d-47a2-9ca4-b108002e0817_original__size.jpg",
    imageSource: "https://www.fluke.com/en-us/product/electrical-testing/clamp-meters/fluke-323",
    description: "Pinza compacta para medir corriente AC sin interrumpir el circuito. También mide voltaje AC/DC, resistencia y continuidad; ideal para mantenimiento eléctrico.",
    specs: [["Corriente AC", "Hasta 400 A"], ["Voltaje AC/DC", "Hasta 600 V"], ["Apertura de mordaza", "30 mm"], ["Seguridad", "CAT III 600 V / CAT IV 300 V"], ["Funciones", "Resistencia y continuidad"]]
  },
  {
    id: "uni-t-ut210e", name: "Mini pinza amperimétrica UT210E", brand: "UNI-T", category: "Amperímetros",
    categoryId: "amperimetros", price: 990,
    tag: "Compacto", image: "https://meters.uni-trend.com/wp-content/uploads/2022/04/UT210E_1.jpg",
    imageSource: "https://meters.uni-trend.com/product/ut210-series/",
    description: "Pinza pequeña para electrónica, automatización y diagnóstico. Ofrece medición de corriente AC/DC de baja intensidad y funciones de multímetro en un formato portátil.",
    specs: [["Corriente AC/DC", "Hasta 100 A"], ["Voltaje AC/DC", "Hasta 600 V"], ["Funciones", "Resistencia, capacitancia, continuidad"], ["Apertura de mordaza", "17 mm"], ["Seguridad", "CAT II 600 V"]]
  },
  {
    id: "fluke-1507", name: "Medidor de aislamiento 1507", brand: "Fluke", category: "Óhmetros",
    categoryId: "ohmetros", price: 16990,
    tag: "Profesional",
    image: "https://media.fluke.com/2882fbd6-a477-4823-8210-b108002ddc22_product_slideshow_main.jpg",
    imageSource: "https://www.fluke.com/en-us/product/electrical-testing/insulation-testers/fluke-1507",
    description: "Probador portátil de resistencia de aislamiento para instalaciones, motores y equipos. También mide resistencia de baja tensión y voltaje AC/DC.",
    specs: [["Prueba de aislamiento", "50 V, 100 V, 250 V, 500 V, 1000 V"], ["Rango de aislamiento", "0.01 MΩ a 10 GΩ"], ["Resistencia", "0.01 Ω a 20 kΩ"], ["Voltaje AC/DC", "Hasta 600 V"], ["Seguridad", "CAT IV 600 V"]]
  },
  {
    id: "uni-t-ut501c", name: "Probador de aislamiento UT501C", brand: "UNI-T", category: "Óhmetros",
    categoryId: "ohmetros", price: 2390,
    tag: "Aislamiento", image: "https://meters.uni-trend.com/wp-content/uploads/2022/04/UT501C-1.jpg",
    imageSource: "https://meters.uni-trend.com/product/ut501c/",
    description: "Probador de resistencia de aislamiento UNI-T UT501C para mantenimiento y revisión de motores, transformadores, cables y equipos eléctricos.",
    specs: [["Instrumento", "Probador de resistencia de aislamiento"], ["Aplicaciones", "Motores, transformadores y cableado"], ["Mediciones", "Resistencia de aislamiento y voltaje AC"], ["Fabricante", "UNI-T"], ["Estado", "Modelo descontinuado; verificar disponibilidad"]]
  },
  {
    id: "gw-instek-gfc-8010h", name: "Contador de frecuencia GFC-8010H", brand: "GW Instek", category: "Frecuencímetros",
    categoryId: "frecuencimetros", price: 8390,
    tag: "Laboratorio", image: "https://www.gwinstek.com/upload/website/product/normal/8010H_17020316557.jpg",
    imageSource: "https://www.gwinstek.com/en-global/products/detail/GFC-8010H",
    description: "Frecuencímetro de banco para medición de señales en laboratorio y servicio. Su entrada de alta frecuencia permite trabajar con sistemas de RF y electrónica.",
    specs: [["Rango de frecuencia", "Hasta 1.3 GHz"], ["Resolución", "8 dígitos"], ["Sensibilidad", "Desde 25 mV RMS (según rango)"], ["Funciones", "Frecuencia, periodo, totalización"], ["Formato", "Instrumento de banco"]]
  },
  {
    id: "siglent-sds1104x-u", name: "Osciloscopio SDS1104X-U", brand: "Siglent", category: "Osciloscopios",
    categoryId: "osciloscopios", price: 13990,
    tag: "4 canales", image: "https://siglentna.com/wp-content/uploads/2020/11/SDS1000XU_2.png",
    imageSource: "https://siglentna.com/product/sds1104x-u/",
    description: "Osciloscopio digital de cuatro canales para pruebas y depuración de circuitos. Cuenta con decodificación de buses seriales y pantalla a color de alta resolución.",
    specs: [["Ancho de banda", "100 MHz"], ["Canales", "4 analógicos"], ["Frecuencia de muestreo", "1 GSa/s"], ["Memoria", "14 Mpts"], ["Conectividad", "USB, LAN"]]
  },
  {
    id: "rigol-ds1054z", name: "Osciloscopio digital DS1054Z", brand: "Rigol", category: "Osciloscopios",
    categoryId: "osciloscopios", price: 10990,
    tag: "Popular", image: "https://www.rigolna.com/images/products/1000Z.jpg",
    imageSource: "https://www.rigolna.com/products/digital-oscilloscopes/1000z/",
    description: "Osciloscopio de cuatro canales pensado para laboratorio, educación y desarrollo. Incluye funciones de análisis y pantalla a color amplia.",
    specs: [["Ancho de banda", "50 MHz"], ["Canales", "4 analógicos"], ["Frecuencia de muestreo", "1 GSa/s"], ["Memoria", "12 Mpts"], ["Pantalla", "7 pulgadas, WVGA"]]
  },
  {
    id: "siglent-sdg1032x", name: "Generador SDG1032X", brand: "Siglent", category: "Generadores",
    categoryId: "generadores", price: 12990,
    tag: "Arbitrario", image: "https://siglentna.com/wp-content/uploads/2017/09/713839551390.MAIN_.jpg",
    imageSource: "https://siglentna.com/product/sdg1032x/",
    description: "Generador de funciones y formas arbitrarias con tecnología TrueArb. Adecuado para pruebas de circuitos analógicos, digitales y proyectos de laboratorio.",
    specs: [["Canales", "2"], ["Frecuencia máxima", "30 MHz"], ["Formas de onda", "Seno, cuadrada, pulso, arbitraria"], ["Resolución vertical", "16 bits"], ["Conectividad", "USB, LAN"]]
  },
  {
    id: "owon-ag1022f", name: "Generador de funciones AG1022F", brand: "OWON", category: "Generadores",
    categoryId: "generadores", price: 5890,
    tag: "Buena relación", image: "https://www.owon.com.hk/Upload/PicFiles/20173238531.png",
    imageSource: "https://www.owon.com.hk/list_dual_channels",
    description: "Generador de formas de onda de dos canales con funciones de modulación y barrido. Una alternativa de banco para prácticas, servicio y pruebas generales.",
    specs: [["Canales", "2"], ["Frecuencia máxima", "25 MHz"], ["Formas de onda", "Seno, cuadrada, rampa, pulso"], ["Modulación", "AM, FM, PM, FSK"], ["Pantalla", "LCD a color"]]
  }
];const categories = [
  { id: "todos", label: "Todos los instrumentos" },
  { id: "voltimetros", label: "Voltímetros" },
  { id: "amperimetros", label: "Amperímetros" },
  { id: "ohmetros", label: "Óhmetros" },
  { id: "frecuencimetros", label: "Frecuencímetros" },
  { id: "osciloscopios", label: "Osciloscopios" },
  { id: "generadores", label: "Generadores de frecuencia" }
];const state = {
  category: "todos",
  query: "",
  sort: "featured",
  favoritesOnly: false,
  favorites: new Set(),
  cart: new Map()
};const productGrid = document.querySelector("#product-grid");
const categoryList = document.querySelector("#category-list");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const favoritesToggle = document.querySelector("#favorites-toggle");
const productDialog = document.querySelector("#product-dialog");
const cartDialog = document.querySelector("#cart-dialog");
let toastTimer;function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(price);
}function getVisibleProducts() {
  let visible = products.filter((product) => {    const matchesCategory = state.category === "todos" || product.categoryId === state.category;    const searchableText = `${product.name} ${product.brand} ${product.category} ${product.description}`.toLocaleLowerCase("es-MX");
    const matchesQuery = searchableText.includes(state.query.toLocaleLowerCase("es-MX"));    const matchesFavorite = !state.favoritesOnly || state.favorites.has(product.id);
    return matchesCategory && matchesQuery && matchesFavorite;
  });

  if (state.sort === "price-low") visible = visible.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") visible = visible.sort((a, b) => b.price - a.price);
  return visible;
}function renderCategories() {
  categoryList.innerHTML = categories.map((category) => {
    const count = category.id === "todos"
      ? products.length
      : products.filter((product) => product.categoryId === category.id).length;
    const active = state.category === category.id;
    return `<button class="category-option${active ? " active" : ""}" type="button" data-category="${category.id}" aria-pressed="${active}">
      <span>${category.label}</span><span>${count}</span>
    </button>`;
  }).join("");
}function renderProducts() {
  const visible = getVisibleProducts();
  const totalLabel = state.favoritesOnly ? "favoritos" : "instrumentos";
  resultsCount.innerHTML = `<strong>${visible.length}</strong> ${totalLabel}${visible.length === 1 ? "" : " encontrados"}`;
  emptyState.hidden = visible.length > 0;
  productGrid.hidden = visible.length === 0;
  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('image-unavailable')">
        <span class="product-tag">${product.tag}</span>
        <button class="favorite-button${state.favorites.has(product.id) ? " is-favorite" : ""}" type="button" data-favorite="${product.id}" aria-label="${state.favorites.has(product.id) ? "Quitar de" : "Agregar a"} favoritos" aria-pressed="${state.favorites.has(product.id)}">♡</button>
      </div>
      <div class="product-content">
        <div class="product-brand">${product.brand} <span>· ${product.category}</span></div>
        <h3>${product.name}</h3>
        <div class="product-rating"><span class="product-category-label">Modelo destacado · ${product.category}</span></div>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div class="price-caption">Precio referencial · MXN</div>
        <div class="product-actions">
          <button class="add-cart" type="button" data-add="${product.id}">Agregar al carrito</button>
          <button class="details-button" type="button" data-details="${product.id}" aria-label="Ver detalles de ${product.name}">↗</button>
        </div>
      </div>
    </article>
  `).join("");
  renderCategories();
  updateCounts();
}function updateCounts() {
  document.querySelector("#favorite-count").textContent = state.favorites.size;
  document.querySelector("#cart-count").textContent = [...state.cart.values()].reduce((sum, quantity) => sum + quantity, 0);
  favoritesToggle.setAttribute("aria-pressed", String(state.favoritesOnly));
  favoritesToggle.classList.toggle("active", state.favoritesOnly);
}function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}function findProduct(id) {
  return products.find((product) => product.id === id);
}function toggleFavorite(id) {
  const product = findProduct(id);
  if (!product) return;
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`${product.name} se quitó de favoritos.`);
  } else {
    state.favorites.add(id);
    showToast(`${product.name} se agregó a favoritos.`);
  }
  renderProducts();
}function addToCart(id) {
  const product = findProduct(id);
  if (!product) return;
  state.cart.set(id, (state.cart.get(id) || 0) + 1);
  updateCounts();
  showToast(`${product.name} se agregó al carrito de comparación.`);
}function showProductDetails(id) {
  const product = findProduct(id);
  if (!product) return;
  document.querySelector("#dialog-content").innerHTML = `
    <div class="dialog-product">
      <div class="dialog-image"><img src="${product.image}" alt="${product.name}" onerror="this.hidden=true;this.parentElement.classList.add('image-unavailable')"></div>
      <div class="dialog-details">
        <span class="eyebrow">${product.brand} · ${product.category}</span>
        <h2>${product.name}</h2>
        <div class="product-rating"><span class="product-category-label">Modelo destacado · ${product.category}</span></div>
        <div class="dialog-price">${formatPrice(product.price)} <span class="price-caption">MXN · precio referencial</span></div>
        <p class="dialog-description">${product.description}</p>
        <ul class="spec-list">${product.specs.map(([label, value]) => `<li><strong>${label}</strong>${value}</li>`).join("")}</ul>
        <a class="manufacturer-link" href="${product.imageSource}" target="_blank" rel="noopener noreferrer">Ver ficha e imagen del fabricante ↗</a>
        <button class="dialog-cart" type="button" data-add="${product.id}">Agregar al carrito de comparación</button>
      </div>
    </div>`;
  productDialog.showModal();
}function renderCart() {
  const cartItems = document.querySelector("#cart-items");
  const entries = [...state.cart.entries()];
  if (entries.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Aún no has agregado instrumentos.</div>';
    document.querySelector("#cart-total").innerHTML = "";
    return;
  }
  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = findProduct(id);
    return `<div class="cart-row">
      <div class="cart-item-name">${product.name}<small>${product.brand} · ${formatPrice(product.price)} c/u</small></div>
      <div class="cart-quantity">
        <button type="button" data-quantity="-1" data-id="${id}" aria-label="Quitar una unidad">−</button>
        <span>${quantity}</span>
        <button type="button" data-quantity="1" data-id="${id}" aria-label="Agregar una unidad">+</button>
      </div>
      <button class="remove-cart" type="button" data-remove="${id}" aria-label="Eliminar ${product.name}">×</button>
    </div>`;
  }).join("");
  const total = entries.reduce((sum, [id, quantity]) => sum + findProduct(id).price * quantity, 0);
  document.querySelector("#cart-total").innerHTML = `<span>Subtotal referencial</span><strong>${formatPrice(total)}</strong>`;
}function resetFilters() {
  state.category = "todos";
  state.query = "";
  state.favoritesOnly = false;
  searchInput.value = "";
  renderProducts();
}document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  state.favoritesOnly = false;
  favoritesToggle.setAttribute("aria-pressed", "false");
  renderProducts();
});searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim();
  state.favoritesOnly = false;
  renderProducts();
});sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.favoritesOnly = false;
  renderProducts();
});productGrid.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) return toggleFavorite(favorite.dataset.favorite);
  const add = event.target.closest("[data-add]");
  if (add) return addToCart(add.dataset.add);
  const details = event.target.closest("[data-details]");
  if (details) showProductDetails(details.dataset.details);
});document.querySelector("#dialog-content").addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add);
    productDialog.close();
  }
});favoritesToggle.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  renderProducts();
});document.querySelector("#clear-filters").addEventListener("click", resetFilters);
document.querySelector("#reset-search").addEventListener("click", resetFilters);document.querySelector("#mobile-filter").addEventListener("click", () => {
  document.querySelector(".filters").classList.toggle("mobile-open");
});document.querySelector("#dialog-close").addEventListener("click", () => productDialog.close());
document.querySelector("#cart-toggle").addEventListener("click", () => {  renderCart();
  cartDialog.showModal();
});
document.querySelector("#cart-close").addEventListener("click", () => cartDialog.close());document.querySelector("#cart-items").addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const id = quantityButton.dataset.id;    const nextQuantity = (state.cart.get(id) || 0) + Number(quantityButton.dataset.quantity);    if (nextQuantity <= 0) state.cart.delete(id);
    else state.cart.set(id, nextQuantity);
    updateCounts();
    renderCart();
    return;
  }
  const remove = event.target.closest("[data-remove]");
  if (remove) {
    state.cart.delete(remove.dataset.remove);
    updateCounts();
    renderCart();
  }
});renderProducts(); 
