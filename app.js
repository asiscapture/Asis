
const SITE_ROOT = (() => {
  if (document.currentScript && document.currentScript.src) {
    return document.currentScript.src.replace(/app\.js(\?.*)?$/, "");
  }
  const scripts = document.getElementsByTagName("script");
  for (let i = scripts.length - 1; i >= 0; i--) {
    const src = scripts[i].src || "";
    if (src.includes("app.js")) return src.replace(/app\.js(\?.*)?$/, "");
  }
  return "";
})();
function siteUrl(path) {
  return SITE_ROOT + String(path || "").replace(/^\//, "");
}

/* Livis — camera hire catalogue */

/*
  Photos: put files in /images then refresh.
  Filenames are listed in images/README.txt
*/
const CATALOGUE = [
  /* ——— Digital cameras ——— */
  {
    id: "kodak-pixpro-fz55",
    name: "Kodak PIXPRO FZ55",
    category: "digital",
    tag: "Digital",
    detail: "32GB SD included",
    price: "$29",
    mostPopular: true,
    blurb:
      "A compact digicam with that early-2000s feel — crisp, shareable photos and Full HD video. Simple point-and-shoot so anyone can pick it up and shoot.",
    description:
      "Slim enough to pass around, with 5× optical zoom and a built-in flash for indoor and evening shots.",
    details: [
      { label: "Format", value: "Digital" },
      { label: "Storage", value: "32GB SD included" },
      { label: "Includes", value: "Camera, SD card, rechargeable battery" },
    ],
    tone: "cool",
    image: siteUrl("images/products/kodak-pixpro-fz55/front.png"),
    imageHover: siteUrl("images/products/kodak-pixpro-fz55/hover.png"),
    alt: "Kodak PIXPRO FZ55 digital camera for hire in Brisbane",
  },
  {
    id: "kodak-pixpro-c1",
    name: "Kodak PIXPRO C1",
    category: "digital",
    tag: "Digital",
    detail: "32GB SD included",
    price: "$29",
    blurb:
      "An easy compact digicam with a flip screen — made for selfies, group shots and nights when you just want to shoot.",
    description:
      "Digital photos ready to share, with no film or settings to learn. Lightweight and simple for anyone to use.",
    details: [
      { label: "Format", value: "Digital" },
      { label: "Storage", value: "32GB SD included" },
      { label: "Includes", value: "Camera, SD card, battery" },
    ],
    tone: "soft",
    image: siteUrl("images/products/kodak-pixpro-c1/front.png"),
    imageHover: siteUrl("images/products/kodak-pixpro-c1/hover.png"),
    gallery: [
      siteUrl("images/products/kodak-pixpro-c1/extra-1.png"),
      siteUrl("images/products/kodak-pixpro-c1/extra-2.png")
    ],
    alt: "Kodak PIXPRO C1 compact digital camera hire",
  },
  {
    id: "casio-exilim-ex-z110",
    name: "Casio Exilim EX-Z110",
    category: "digital",
    tag: "Digital",
    detail: "32GB SD included",
    price: "$29",
    blurb:
      "A silver mid-2000s digicam classic — compact, flashy and made for parties, nights out and that early digital look.",
    description:
      "6MP point-and-shoot with 3× optical zoom. Easy for anyone to pick up, pass around and shoot.",
    details: [
      { label: "Format", value: "Digital" },
      { label: "Storage", value: "32GB SD included" },
      { label: "Includes", value: "Camera, SD card, battery" },
    ],
    tone: "cool",
    image: siteUrl("images/products/casio-exilim-ex-z110/front.png"),
    imageHover: siteUrl("images/products/casio-exilim-ex-z110/hover.png"),
    gallery: [
      siteUrl("images/products/casio-exilim-ex-z110/extra-1.png")
    ],
    alt: "Casio Exilim EX-Z110 silver digital camera hire Brisbane",
  },
  {
    id: "fujifilm-finepix-z33wp",
    name: "Fujifilm FinePix Z33WP",
    category: "digital",
    tag: "Digital",
    detail: "Waterproof · 32GB SD included",
    price: "$29",
    blurb:
      "A waterproof compact digicam — take it to the beach, the pool or out in the rain. 3× zoom and simple point-and-shoot, with that early digital look.",
    description:
      "Sealed for the water, with a 3× Fujinon zoom. Easy enough for anyone to pick up, pass around and shoot.",
    details: [
      { label: "Format", value: "Digital · waterproof" },
      { label: "Storage", value: "32GB SD included" },
      { label: "Includes", value: "Camera, SD card, battery" },
    ],
    tone: "soft",
    comingSoon: true,
    image: siteUrl("images/products/fujifilm-finepix-z33wp/front.png"),
    imageHover: siteUrl("images/products/fujifilm-finepix-z33wp/hover.png"),
    gallery: [
      siteUrl("images/products/fujifilm-finepix-z33wp/extra-1.png"),
      siteUrl("images/products/fujifilm-finepix-z33wp/extra-2.png")
    ],
    alt: "Fujifilm FinePix Z33WP waterproof digital camera hire Brisbane",
  },
  {
    id: "olympus-vg-170",
    name: "Olympus VG-170",
    category: "digital",
    tag: "Digital",
    detail: "32GB SD included",
    price: "$29",
    blurb:
      "A black compact digicam with 5× wide zoom — simple point-and-shoot for parties, weekends and nights out.",
    description:
      "Wide enough for groups, with a built-in flash and easy controls anyone can pick up.",
    details: [
      { label: "Format", value: "Digital" },
      { label: "Storage", value: "32GB SD included" },
      { label: "Includes", value: "Camera, SD card, battery" },
    ],
    tone: "cool",
    comingSoon: true,
    image: siteUrl("images/products/olympus-vg-170/front.png"),
    imageHover: siteUrl("images/products/olympus-vg-170/hover.png"),
    alt: "Olympus VG-170 digital camera hire Brisbane",
  },

  /* ——— Film cameras ——— */
  {
    id: "kodak-ektar-h35",
    name: "Kodak Ektar H35",
    category: "film",
    tag: "Film (half frame)",
    detail: "Includes 1 colour roll · 72 shots",
    price: "$50",
    blurb:
      "A half-frame film camera for nostalgic colour without the fuss. One standard roll gives you up to 72 shots.",
    description:
      "Simple point-and-shoot with a built-in flash — light enough to carry all day.",
    details: [
      { label: "Format", value: "Film (half frame)" },
      { label: "Film", value: "1 colour roll · 36 exposures · up to 72 shots" },
      { label: "Includes", value: "Camera, film, battery" },
    ],
    tone: "warm",
    image: siteUrl("images/products/kodak-ektar-h35/front.png"),
    imageHover: siteUrl("images/products/kodak-ektar-h35/hover.png"),
    alt: "Kodak Ektar H35 half-frame film camera hire Brisbane",
  },
  {
    id: "kodak-m35",
    name: "Kodak M35",
    category: "film",
    tag: "Film",
    detail: "Includes 1 colour roll · 36 shots",
    price: "$50",
    blurb:
      "The nostalgic film look of a disposable — in a reusable, more sustainable design. Up to 36 photos per roll.",
    description:
      "Simple point-and-shoot with a built-in flash. Easy enough for anyone to use.",
    details: [
      { label: "Format", value: "Film (35mm)" },
      { label: "Film", value: "1 colour roll · 36 shots" },
      { label: "Includes", value: "Camera, film, battery" },
    ],
    tone: "soft",
    image: siteUrl("images/products/kodak-m35/front.png"),
    imageHover: siteUrl("images/products/kodak-m35/hover.png"),
    alt: "Kodak M35 yellow reusable 35mm film camera for hire",
  },

  /* ——— Polaroid cameras ——— */
  {
    id: "instax-mini-liplay",
    name: "Fujifilm Instax Mini LiPlay",
    category: "polaroid",
    tag: "Polaroid",
    detail: "Includes 2 Mini film packs · 20 shots",
    price: "$50",
    blurb:
      "A hybrid Polaroid camera — shoot and print Mini photos in the moment, or print from your phone. Easy enough for anyone to pick up and use.",
    description:
      "Classic Mini prints with a simple hybrid design — perfect for parties, tables and guest shots.",
    details: [
      { label: "Format", value: "Instax Mini" },
      { label: "Film", value: "2 Mini packs · 20 shots" },
      { label: "Includes", value: "Camera, film, battery" },
    ],
    tone: "soft",
    image: siteUrl("images/products/instax-mini-liplay/front.png"),
    imageHover: siteUrl("images/products/instax-mini-liplay/hover.png"),
    gallery: [
      siteUrl("images/products/instax-mini-liplay/extra-1.png")
    ],
    alt: "Fujifilm Instax Mini LiPlay polaroid camera hire",
  },
  {
    id: "instax-mini-12",
    name: "Fujifilm Instax Mini 12",
    category: "polaroid",
    tag: "Polaroid",
    detail: "Includes 2 Mini film packs · 20 shots",
    price: "$50",
    mostPopular: true,
    blurb:
      "The simplest Instax Mini — twist to turn on, shoot, and print in the moment. Classic Mini prints with no creative modes or settings to learn.",
    description:
      "Light enough to pass around, with automatic exposure for indoor and outdoor shots.",
    details: [
      { label: "Format", value: "Instax Mini" },
      { label: "Film", value: "2 Mini packs · 20 shots" },
      { label: "Includes", value: "Camera, film, battery" },
    ],
    tone: "warm",
    image: siteUrl("images/products/instax-mini-12/front.png"),
    imageHover: siteUrl("images/products/instax-mini-12/hover.png"),
    gallery: [
      siteUrl("images/products/instax-mini-12/extra-1.png")
    ],
    alt: "Fujifilm Instax Mini 12 polaroid camera hire",
  },
  {
    id: "instax-square-sq40",
    name: "Fujifilm Instax Square SQ40",
    category: "polaroid",
    tag: "Polaroid",
    detail: "Includes 2 Square film packs · 20 shots",
    price: "$50",
    blurb:
      "Square Polaroid prints with a classic retro look. A larger print than Mini, with simple controls.",
    description:
      "Perfect for people who want square Polaroid photos.",
    details: [
      { label: "Format", value: "Instax Square" },
      { label: "Film", value: "2 Square packs · 20 shots" },
      { label: "Includes", value: "Camera, film, battery" },
    ],
    tone: "cool",
    image: siteUrl("images/products/instax-square-sq40/front.png"),
    imageHover: siteUrl("images/products/instax-square-sq40/hover.png"),
    gallery: [
      siteUrl("images/products/instax-square-sq40/extra-1.png")
    ],
    alt: "Fujifilm Instax Square SQ40 polaroid camera for weddings and parties",
  },

  /* ——— Bundles ——— */
  {
    id: "holy-trinity-bundle",
    name: "The Full Mix",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Digital + film + Polaroid",
    detail: "3 cameras · Film & SD included",
    price: "$105",
    blurb:
      "One kit, three formats — digicam shareables, nostalgic film and square Polaroid prints. Curated so you don’t have to choose.",
    description:
      "Film and SD included.",
    details: [
      {
        label: "Cameras",
        value: [
          "Kodak PIXPRO FZ55 (digital)",
          "Kodak Ektar H35 (film)",
          "Fujifilm Instax Square SQ40 (Polaroid)",
        ],
      },
      {
        label: "Film",
        value: [
          "1 colour roll · 72 shots for Ektar H35",
          "1 Square pack · 10 shots",
        ],
      },
    ],
    tone: "cool",
    image: siteUrl("images/products/holy-trinity-bundle/front-dual-bg-backup.png"),
    gallery: [
      siteUrl("images/products/kodak-pixpro-fz55/front.png"),
      siteUrl("images/products/kodak-ektar-h35/front.png"),
      siteUrl("images/products/instax-square-sq40/front.png")
    ],
    alt: "The Full Mix camera hire bundle — FZ55, Ektar H35 and Instax Square SQ40",
  },
  {
    id: "weekender-bundle",
    name: "The Weekender",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Digicam + Instax Mini for a short escape",
    detail: "2 cameras · Film & SD included",
    price: "$65",
    mostPopular: true,
    blurb:
      "Light and easy for a short escape — digicam shareables plus Polaroid Mini prints.",
    description:
      "Two beginner-friendly cameras that travel light. Film and SD included.",
    details: [
      {
        label: "Cameras",
        value: [
          "Kodak PIXPRO C1 (digital)",
          "Fujifilm Instax Mini 12 (Polaroid)",
        ],
      },
      {
        label: "Film",
        value: ["1 Mini pack · 10 shots"],
      },
    ],
    tone: "warm",
    image: siteUrl("images/products/weekender-bundle/front-dual-bg-backup.png"),
    gallery: [
      siteUrl("images/products/kodak-pixpro-c1/front.png"),
      siteUrl("images/products/instax-mini-12/front.png")
    ],
    alt: "The Weekender camera hire bundle — PIXPRO C1 and Instax Mini 12",
  },
  {
    id: "party-bundle",
    name: "Party Camera Kit",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Digicam, film & Instax Mini",
    detail: "3 cameras · Extra Mini film",
    price: "$105",
    blurb:
      "Built for birthdays, hens and nights out — digicam, film and Instax Mini with extra packs for the crowd.",
    description:
      "Three easy point-and-shoot formats, plus extra Mini film so the Polaroid cameras last the night.",
    details: [
      {
        label: "Cameras",
        value: [
          "Fujifilm Instax Mini LiPlay (Polaroid)",
          "Kodak PIXPRO C1 (digital)",
          "Kodak M35 (film)",
        ],
      },
      {
        label: "Film",
        value: [
          "1 colour roll · 36 shots for M35",
          "3 Mini packs · 30 shots",
        ],
      },
    ],
    tone: "warm",
    image: siteUrl("images/products/party-bundle/front.png"),
    gallery: [
      siteUrl("images/products/instax-mini-liplay/front.png"),
      siteUrl("images/products/kodak-pixpro-c1/front.png"),
      siteUrl("images/products/kodak-m35/front.png")
    ],
    alt: "Party Camera Kit — Instax Mini LiPlay, PIXPRO C1 and Kodak M35",
  },
  {
    id: "wedding-table-pack",
    name: "Wedding Table Pack",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Polaroid cameras for guest tables",
    detail: "2 cameras · 40 shots included",
    price: "$75",
    blurb:
      "Pass Polaroid cameras around the tables — two Mini 12s, with enough Mini film for the night.",
    description:
      "Made for cameras circulating across tables. Guests shoot, print and share through the reception.",
    details: [
      {
        label: "Cameras",
        value: ["2× Fujifilm Instax Mini 12 (Polaroid)"],
      },
      {
        label: "Film",
        value: ["4 Mini packs · 40 shots"],
      },
    ],
    tone: "warm",
    image: siteUrl("images/products/wedding-table-pack/front.png"),
    gallery: [
      siteUrl("images/products/instax-mini-12/front.png"),
    ],
    alt: "Wedding Table Pack — two Instax Mini 12 Polaroid cameras for guest tables",
  },
  {
    id: "film-table-kit",
    name: "Film Table Kit",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Film cameras for guest tables · develop included",
    detail: "4 cameras · Film · Develop & scan included",
    price: "$299",
    blurb:
      "The disposable camera energy for your tables — four reusable Kodak M35s, loaded and ready, with develop & scan included.",
    description:
      "Guests shoot through the night. We develop & scan your four rolls (high resolution, about one week). Prefer max resolution? Ask when you enquire.",
    details: [
      {
        label: "Cameras",
        value: ["4× Kodak M35 marble grey (film)"],
      },
      {
        label: "Film",
        value: ["4 colour rolls · 144 shots"],
      },
      {
        label: "Also includes",
        value: [
          "Develop & scan · high resolution",
          "About one week turnaround",
        ],
      },
    ],
    tone: "soft",
    image: siteUrl("images/products/film-table-kit/front.png"),
    gallery: [siteUrl("images/products/film-table-kit/front.png")],
    alt: "Film Table Kit — four marble grey Kodak M35 film cameras for guest tables",
  },

  /* ——— Add-ons ——— */
  {
    id: "addon-prints",
    name: "Printed Photo Pack",
    category: "addons",
    tag: "Add-on",
    detail: "Per 35mm roll · Full set of 6×4 lustre prints",
    price: "$24",
    blurb:
      "A full set of 6×4 lustre prints from your 35mm roll — memories you can gift, pin up, or pass around.",
    description:
      "One print per frame. Half-frame (Ektar H35) needs two print orders.",
    details: [
      { label: "Type", value: "Add-on · per 35mm roll" },
      { label: "Prints", value: "Full set of 6×4 lustre prints" },
      { label: "Note", value: "Ektar H35 = two print orders" },
    ],
    tone: "warm",
    image: siteUrl("images/photos.jpg?v=2"),
    lifestyle: true,
    alt: "Printed photo pack from Livis",
  },
]



const CAMERA_CATEGORIES = new Set(["digital", "film", "polaroid"]);
const CAMERA_PAGE_CATEGORIES = new Set([
  "digital",
  "film",
  "polaroid",
  "bundles",
  "addons",
]);
const CART_STORAGE_KEY = "Livis-enquiry-cart";
const CUSTOM_BUNDLE_KEY = "Livis-custom-bundle";
const BUNDLE_DISCOUNT = 0.15;
const BUNDLE_MIN_CAMERAS = 3;
const catalogueScope = document.body.dataset.catalogue || "all";

const BROWSE_BY_SCOPE = {
  cameras: siteUrl("cameras/index.html"),
  home: siteUrl("index.html#explore-categories"),
  day: siteUrl("cameras/index.html"),
};

const state = {
  cart: new Map(), // id -> quantity
  filter: "all",
  draftQty: new Map(), // id -> qty on product card before add
  productId: null,
  galleryIndex: 0,
  productQty: 1,
};

const catalogueEl = document.getElementById("catalogue");
const selectionBar = document.getElementById("selection-bar");
const selectionCount = document.getElementById("selection-count");
const selectionNames = document.getElementById("selection-names");
const enquireSelection = document.getElementById("enquire-selection");
const selectedItemsField = document.getElementById("selected-items-field");
const form = document.getElementById("enquire-form");
const formStatus = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");
const yearEl = document.getElementById("year");
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const cartDrawer = document.getElementById("cart-drawer");
const cartBody = document.getElementById("cart-body");
const viewCartBtn = document.getElementById("view-cart-btn");
const cartClose = document.getElementById("cart-close");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartEnquireBtn = document.getElementById("cart-enquire-btn");
const productModal = document.getElementById("product-modal");
const productPanel = document.getElementById("product-panel");
const productBackdrop = document.getElementById("product-backdrop");

if (yearEl) yearEl.textContent = String(new Date().getFullYear());

function loadCart() {
  state.cart.clear();
  try {
    let raw = localStorage.getItem(CART_STORAGE_KEY);
    const legacy =
      localStorage.getItem("vera-enquiry-cart") ||
      localStorage.getItem("unposed-enquiry-cart");
    if (!raw && legacy) raw = legacy;
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.entries(data).forEach(([id, qty]) => {
      const n = Number(qty);
      if (getItem(id) && n > 0) state.cart.set(id, Math.min(99, n));
    });
    saveCart();
    localStorage.removeItem("vera-enquiry-cart");
    localStorage.removeItem("unposed-enquiry-cart");
  } catch {
    /* ignore bad storage */
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(Object.fromEntries(state.cart)));
  } catch {
    /* ignore quota errors */
  }
}

function loadCustomBundle() {
  try {
    const raw = sessionStorage.getItem(CUSTOM_BUNDLE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.cameras) || !data.cameras.length) return null;
    return data;
  } catch {
    return null;
  }
}

function saveCustomBundle(data) {
  try {
    if (!data) sessionStorage.removeItem(CUSTOM_BUNDLE_KEY);
    else sessionStorage.setItem(CUSTOM_BUNDLE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

function clearCustomBundle() {
  saveCustomBundle(null);
}

function cartMatchesCustomBundle(bundle) {
  if (!bundle?.cameras?.length) return false;
  const expected = new Map(bundle.cameras.map((row) => [row.id, Number(row.qty) || 0]));
  if (expected.size !== state.cart.size) return false;
  for (const [id, qty] of expected) {
    if ((state.cart.get(id) || 0) !== qty) return false;
  }
  return true;
}

function syncCustomBundleWithCart() {
  const bundle = loadCustomBundle();
  if (bundle && !cartMatchesCustomBundle(bundle)) clearCustomBundle();
}

function activeCustomBundle() {
  const bundle = loadCustomBundle();
  if (!bundle || !cartMatchesCustomBundle(bundle)) return null;
  return bundle;
}

function cartDisplayTotal() {
  const bundle = activeCustomBundle();
  if (bundle && Number.isFinite(bundle.bundleTotal)) return Number(bundle.bundleTotal);
  return cartTotal();
}

function scopedCatalogue() {
  if (catalogueScope === "cameras") {
    return CATALOGUE.filter((item) => CAMERA_PAGE_CATEGORIES.has(item.category));
  }
  if (catalogueScope === "home" || catalogueScope === "day") {
    return [];
  }
  return CATALOGUE;
}

function browseHref() {
  return BROWSE_BY_SCOPE[catalogueScope] || siteUrl("index.html#explore-categories");
}

function getItem(id) {
  return CATALOGUE.find((item) => item.id === id);
}

function cartEntries() {
  return [...state.cart.entries()]
    .map(([id, qty]) => ({ item: getItem(id), qty }))
    .filter((entry) => entry.item && entry.qty > 0);
}

function cartUnitCount() {
  return cartEntries().reduce((sum, entry) => sum + entry.qty, 0);
}

function parsePrice(price) {
  if (typeof price === "number" && Number.isFinite(price)) return price;
  if (!price) return 0;
  const match = String(price).replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function formatMoney(amount) {
  const rounded = Math.round(amount);
  return `$${rounded.toLocaleString("en-AU")}`;
}

function cartTotal() {
  return cartEntries().reduce((sum, { item, qty }) => sum + parsePrice(item.price) * qty, 0);
}

function cartTotalMarkup() {
  const total = cartTotal();
  return `<p class="cart-total"><span>Total</span><strong>${formatMoney(total)}</strong></p>`;
}

function getDraftQty(id) {
  return state.draftQty.get(id) ?? 1;
}

function setDraftQty(id, qty) {
  state.draftQty.set(id, Math.max(1, Math.min(99, qty)));
}

function setCartQty(id, qty) {
  const next = Math.max(0, Math.min(99, qty));
  if (next <= 0) state.cart.delete(id);
  else state.cart.set(id, next);
  saveCart();
}

function addToCart(id, qty = 1) {
  const item = CATALOGUE.find((entry) => entry.id === id);
  if (!item) {
    console.warn("[Livis] Unknown product id:", id);
    return false;
  }
  if (item.comingSoon) return false;
  const amount = Math.max(1, Math.min(99, Number(qty) || 1));
  const current = state.cart.get(id) || 0;
  setCartQty(id, current + amount);
  return true;
}

function getProductGallery(item) {
  const shots = [];
  const seen = new Set();

  const push = (src, alt) => {
    if (!src || seen.has(src)) return;
    seen.add(src);
    const lifestyle = !!item.lifestyle || /\.(jpe?g)$/i.test(src);
    shots.push({ src, alt, lifestyle });
  };

  push(item.image, item.alt || item.name);
  push(item.imageHover, `${item.name} — alternate angle`);
  (item.gallery || []).forEach((src, i) => {
    push(src, `${item.name} — photo ${i + 2}`);
  });

  return shots;
}

function openProduct(id) {
  const item = getItem(id);
  if (!item || !productModal || !productPanel) return;
  state.productId = id;
  state.galleryIndex = 0;
  state.productQty = getDraftQty(id) || 1;
  renderProductModal();
  productModal.hidden = false;
  document.body.classList.add("product-open");
  productPanel.querySelector(".product-close")?.focus();
}

function closeProduct() {
  if (!productModal) return;
  productModal.hidden = true;
  document.body.classList.remove("product-open");
  state.productId = null;
}

function renderProductModal() {
  const item = getItem(state.productId);
  if (!item || !productPanel) return;

  const gallery = getProductGallery(item);
  const active = gallery[state.galleryIndex] || gallery[0];
  const inCart = state.cart.get(item.id) || 0;
  const isPurchase = /purchase/i.test(item.tag || "") || /purchase/i.test(item.detail || "");
  const isAddon = item.category === "addons" || /add-?on/i.test(item.tag || "");

  const colours = (item.colours || [])
    .map(
      (c) => `
      <li class="product-colour">
        <span class="product-colour-swatch" style="--swatch:${c.swatch}" aria-hidden="true"></span>
        <span>${c.name}</span>
      </li>`
    )
    .join("");

  const howItWorks = (item.howItWorks || [])
    .map((step, i) => `<li><span class="product-step-num">${i + 1}</span><span>${step}</span></li>`)
    .join("");

  const detailValueMarkup = (value) => {
    if (Array.isArray(value)) {
      return `<ul class="product-detail-list">${value
        .map((line) => `<li>${line}</li>`)
        .join("")}</ul>`;
    }
    return value;
  };

  const detailsRows = (item.details || [])
    .map(
      (row) => `
      <div class="product-detail-row${Array.isArray(row.value) ? " has-list" : ""}">
        <dt>${row.label}</dt>
        <dd>${detailValueMarkup(row.value)}</dd>
      </div>`
    )
    .join("");

  const descriptionMarkup = Array.isArray(item.description)
    ? `<ul class="product-detail-list product-desc-list">${item.description
        .map((line) => `<li>${line}</li>`)
        .join("")}</ul>`
    : item.description
      ? `<p class="product-desc">${item.description}</p>`
      : "";

  const productCopy = `
        <p class="product-blurb">${item.blurb}</p>
        ${descriptionMarkup}
        ${
          detailsRows
            ? `<details class="product-hire-details">
                <summary>Details</summary>
                <dl class="product-details">${detailsRows}</dl>
              </details>`
            : ""
        }
      `;

  productPanel.innerHTML = `
    <button type="button" class="product-close" aria-label="Close product">Close</button>
    <div class="product-layout">
      <div class="product-gallery">
        <div class="product-stage${active?.lifestyle ? " is-lifestyle" : ""}${item.comingSoon ? " is-coming-soon" : ""}">
          ${
            active
              ? `<img src="${active.src}" alt="${active.alt}" id="product-main-image" />`
              : `<div class="photo-slot">Photo coming soon</div>`
          }
          ${item.comingSoon ? `<span class="coming-soon-badge">Coming soon</span>` : ""}
          ${item.mostPopular && !item.comingSoon ? `<span class="most-popular-badge">Most popular</span>` : ""}
        </div>
        ${
          gallery.length > 1
            ? `<div class="product-thumbs">
                ${gallery
                  .map(
                    (shot, i) => `
                  <button
                    type="button"
                    class="product-thumb${i === state.galleryIndex ? " is-active" : ""}${shot.lifestyle ? " is-lifestyle" : ""}"
                    data-gallery-index="${i}"
                    aria-label="View photo ${i + 1}"
                  >
                    <img src="${shot.src}" alt="" />
                  </button>`
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
      <div class="product-info">
        <p class="aside-label">${item.tag}</p>
        <h2 id="product-title">${item.name}</h2>
        ${item.subtitle ? `<p class="product-subtitle">${item.subtitle}</p>` : ""}
        <p class="product-price">${item.price}</p>
        <p class="product-price-note">${item.detail}</p>
        <div class="product-actions">
          ${
            item.comingSoon
              ? `<button type="button" class="btn btn-add" disabled>Coming soon</button>`
              : `${qtyControlsMarkup(item.id, state.productQty, "product")}
          <button type="button" class="btn btn-add" data-product-add="${item.id}">
            Add to enquiry
          </button>`
          }
        </div>
        ${inCart ? `<p class="in-cart-note">${inCart} already in cart</p>` : ""}
        ${
          item.note
            ? `<p class="product-note">${item.note}</p>`
            : isPurchase && (item.colours || []).length
              ? `<p class="product-note">Purchase · yours to keep · mention your preferred colour in the enquiry.</p>`
              : ""
        }
        ${productCopy}
        ${
          colours
            ? `<h3 class="product-subhead">Available colours</h3><ul class="product-colours">${colours}</ul>`
            : ""
        }
        ${
          howItWorks
            ? `<h3 class="product-subhead">How it works</h3><ol class="product-steps">${howItWorks}</ol>`
            : ""
        }
        <button type="button" class="text-link product-back" data-close-product>Back to catalogue</button>
      </div>
    </div>
  `;
}

function cardDescriptor(item) {
  const subtitle = (item.subtitle || "").trim();
  if (subtitle) return subtitle;

  const detail = (item.detail || "").trim();
  if (CAMERA_CATEGORIES.has(item.category)) {
    const type = item.tag || item.category;
    return detail ? `${type} · ${detail}` : type;
  }

  return detail;
}

function mediaMarkup(item) {
  if (!item.image) {
    return `<div class="photo-slot">Photo coming soon</div>`;
  }

  const filename = item.image.replace(/^images\//, "");
  const alt = item.alt || `${item.name} for hire`;
  const hoverSrc = item.imageHover || "";

  const primary = `<img class="item-photo item-photo-primary" src="${item.image}" alt="${alt}" loading="lazy" data-fallback="${filename}" />`;

  if (!hoverSrc) {
    return primary;
  }

  return `
    ${primary}
    <img class="item-photo item-photo-hover" src="${hoverSrc}" alt="" loading="lazy" aria-hidden="true" />
  `;
}

function qtyControlsMarkup(id, qty, scope) {
  return `
    <div class="qty" data-qty-scope="${scope}" data-id="${id}">
      <button type="button" class="qty-btn" data-qty-action="dec" aria-label="Decrease quantity">−</button>
      <span class="qty-value" aria-live="polite">${qty}</span>
      <button type="button" class="qty-btn" data-qty-action="inc" aria-label="Increase quantity">+</button>
    </div>
  `;
}

function matchesFilter(item, filter) {
  if (filter === "all") return true;
  if (filter === "cameras") return CAMERA_CATEGORIES.has(item.category);
  return item.category === filter;
}

function catalogueSortRank(item) {
  const order = {
    digital: 1,
    film: 2,
    polaroid: 3,
    bundles: 4,
    addons: 5,
  };
  return order[item.category] ?? 9;
}

function renderCatalogue() {
  if (!catalogueEl) return;
  catalogueEl.innerHTML = "";

  let visible = scopedCatalogue().filter((item) => matchesFilter(item, state.filter));

  if (catalogueScope === "cameras" && state.filter === "all") {
    visible = [...visible].sort((a, b) => catalogueSortRank(a) - catalogueSortRank(b));
  }

  visible.forEach((item, index) => {
    const draft = getDraftQty(item.id);
    const inCart = state.cart.get(item.id) || 0;
    const descriptor = cardDescriptor(item);

    const article = document.createElement("article");
    article.className = "item";
    article.dataset.category = item.category;
    article.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 70}ms`);

    article.innerHTML = `
      <button type="button" class="item-open" data-open-product="${item.id}" aria-label="View ${item.name}">
        <div class="item-media${item.image ? " has-photo" : ""}${item.lifestyle ? " is-lifestyle" : ""}${item.imageHover ? " has-hover" : ""}${item.comingSoon ? " is-coming-soon" : ""}" data-tone="${item.tone}">
          ${mediaMarkup(item)}
          ${item.comingSoon ? `<span class="coming-soon-badge">Coming soon</span>` : ""}
          ${item.mostPopular && !item.comingSoon ? `<span class="most-popular-badge">Most popular</span>` : ""}
        </div>
        <div class="item-body-preview">
          <h3>${item.name}</h3>
          ${descriptor ? `<p class="item-descriptor">${descriptor}</p>` : ""}
          <p class="item-price">${item.price}</p>
        </div>
      </button>
      <div class="item-actions">
        ${
          item.comingSoon
            ? `<button type="button" class="btn btn-add" disabled>Coming soon</button>`
            : `${qtyControlsMarkup(item.id, draft, "draft")}
        <button type="button" class="btn btn-add" data-add="${item.id}">
          Add to enquiry
        </button>`
        }
      </div>
      ${inCart ? `<p class="in-cart-note">${inCart} in cart</p>` : ""}
    `;

    catalogueEl.appendChild(article);
  });

  catalogueEl.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const parent = img.parentElement;
      if (!parent) return;
      parent.classList.remove("has-photo");
      img.replaceWith(
        Object.assign(document.createElement("div"), {
          className: "photo-slot",
          textContent: `Drop ${img.dataset.fallback}`,
        })
      );
    });
  });

  if (typeof refreshItemReveal === "function") {
    refreshItemReveal();
  }
}

function cartLineMarkup(entry) {
  const { item, qty } = entry;
  const unit = parsePrice(item.price);
  const lineTotal = unit * qty;
  const priceLabel = item.price
    ? qty > 1
      ? `${item.price} ×${qty} · ${formatMoney(lineTotal)}`
      : item.price
    : "";
  const thumb = item.image
    ? `<img class="cart-thumb" src="${item.image}" alt="" width="64" height="64" loading="lazy" />`
    : `<span class="cart-thumb cart-thumb--empty" aria-hidden="true"></span>`;
  return `
    <div class="cart-line" data-id="${item.id}">
      ${thumb}
      <div class="cart-line-info">
        <strong>${item.name}</strong>
        <span>${item.tag}${priceLabel ? ` · ${priceLabel}` : ""}</span>
      </div>
      ${qtyControlsMarkup(item.id, qty, "cart")}
      <button type="button" class="cart-remove" data-remove="${item.id}">Remove</button>
    </div>
  `;
}

function updateCartUI() {
  syncCustomBundleWithCart();
  const entries = cartEntries();
  const units = cartUnitCount();
  const lines = entries.length;
  const browse = browseHref();
  const listTotal = cartTotal();
  const bundle = activeCustomBundle();
  const total = bundle ? Number(bundle.bundleTotal) : listTotal;
  const totalLabel = formatMoney(total);
  const listLabel = formatMoney(listTotal);

  if (selectionBar) selectionBar.hidden = units === 0;
  if (selectionCount) {
    selectionCount.textContent =
      units === 0
        ? "0 items"
        : `${units === 1 ? "1 item" : `${units} items`} · ${totalLabel}`;
  }
  if (selectionNames) {
    selectionNames.textContent = lines
      ? entries.map(({ item, qty }) => (qty > 1 ? `${item.name} ×${qty}` : item.name)).join(", ")
      : "Cart is empty";
  }

  if (selectedItemsField) {
    const lineText = entries
      .map(({ item, qty }) => {
        const lineTotal = parsePrice(item.price) * qty;
        return `${item.name} ×${qty} (${item.tag}${item.price ? ` · ${item.price}` : ""}${
          qty > 1 && item.price ? ` = ${formatMoney(lineTotal)}` : ""
        })`;
      })
      .join("; ");
    if (!units) {
      selectedItemsField.value = "";
    } else if (bundle) {
      selectedItemsField.value = formatCustomBundleEmailText(bundle, entries, listLabel, totalLabel);
    } else {
      selectedItemsField.value = `${lineText}; Total: ${totalLabel}`;
    }
  }

  if (cartBody) {
    if (!units) {
      cartBody.innerHTML = `<p class="cart-empty">Your cart is empty. <a href="${browse}">Browse products</a></p>`;
    } else {
      cartBody.innerHTML = entries.map(cartLineMarkup).join("");
    }
  }

  document.querySelectorAll(".cart-footer").forEach((footer) => {
    let totalEl = footer.querySelector(".cart-total");
    if (!totalEl) {
      totalEl = document.createElement("p");
      totalEl.className = "cart-total";
      footer.insertBefore(totalEl, footer.firstChild);
    }
    if (!units) {
      totalEl.hidden = true;
      totalEl.textContent = "";
    } else if (bundle) {
      totalEl.hidden = false;
      totalEl.innerHTML = `<span>Bundle (15% off)</span><strong>${totalLabel}</strong>`;
    } else {
      totalEl.hidden = false;
      totalEl.innerHTML = `<span>Total</span><strong>${totalLabel}</strong>`;
    }
  });

  if (enquireSelection) {
    if (!units) {
      enquireSelection.innerHTML = `
        <p class="enquire-empty">Cart is empty — <a href="${browse}">browse products</a>.</p>
      `;
    } else if (bundle) {
      enquireSelection.innerHTML = renderCustomBundleEnquireCard(
        bundle,
        entries,
        listLabel,
        totalLabel
      );
    } else {
      enquireSelection.innerHTML = `
        <div class="selected-chips">
          ${entries.map(cartLineMarkup).join("")}
        </div>
        ${cartTotalMarkup()}
      `;
    }
  }

  if (catalogueEl) {
    catalogueEl.querySelectorAll(".item").forEach((article) => {
      const addBtn = article.querySelector("[data-add]");
      if (!addBtn) return;
      const id = addBtn.dataset.add;
      const inCart = state.cart.get(id) || 0;
      let note = article.querySelector(".in-cart-note");
      if (inCart) {
        if (!note) {
          note = document.createElement("p");
          note.className = "in-cart-note";
          article.appendChild(note);
        }
        note.textContent = `${inCart} in cart`;
      } else if (note) {
        note.remove();
      }
    });
  }
}

function openCart() {
  if (!cartDrawer) return;
  cartDrawer.hidden = false;
  document.body.classList.add("cart-open");
  cartClose?.focus();
}

function closeCart() {
  if (!cartDrawer) return;
  cartDrawer.hidden = true;
  document.body.classList.remove("cart-open");
}

function flashAddButton(btn) {
  if (!btn || !btn.isConnected) return;
  btn.classList.add("just-added");
  btn.textContent = "Added";
  window.setTimeout(() => {
    if (!btn.isConnected) return;
    btn.classList.remove("just-added");
    btn.textContent = "Add to enquiry";
  }, 900);
}

document.addEventListener("click", (event) => {
  const qtyBtn = event.target.closest("[data-qty-action]");
  if (qtyBtn) {
    const wrap = qtyBtn.closest(".qty");
    if (!wrap) return;
    const scope = wrap.dataset.qtyScope;
    if (scope === "draft") {
      const id = wrap.dataset.id;
      const current = getDraftQty(id);
      const next = qtyBtn.dataset.qtyAction === "inc" ? current + 1 : current - 1;
      setDraftQty(id, next);
      wrap.querySelector(".qty-value").textContent = String(getDraftQty(id));
      return;
    }
    if (scope === "product") {
      const next =
        qtyBtn.dataset.qtyAction === "inc" ? state.productQty + 1 : state.productQty - 1;
      state.productQty = Math.max(1, Math.min(99, next));
      wrap.querySelector(".qty-value").textContent = String(state.productQty);
      return;
    }
    return;
  }

  const cardAddBtn = event.target.closest("[data-add]");
  if (cardAddBtn && !cardAddBtn.disabled) {
    const id = cardAddBtn.dataset.add;
    if (!addToCart(id, getDraftQty(id))) return;
    setDraftQty(id, 1);
    const wrap = cardAddBtn.closest(".item")?.querySelector('.qty[data-qty-scope="draft"]');
    if (wrap) wrap.querySelector(".qty-value").textContent = "1";
    updateCartUI();
    flashAddButton(cardAddBtn);
    return;
  }

  const productAddBtn = event.target.closest("[data-product-add]");
  if (productAddBtn && !productAddBtn.disabled) {
    const id = productAddBtn.dataset.productAdd;
    if (!addToCart(id, state.productQty)) return;
    state.productQty = 1;
    updateCartUI();
    renderProductModal();
    flashAddButton(productPanel?.querySelector("[data-product-add]"));
    return;
  }

  if (event.target.closest("[data-close-product]") || event.target.closest(".product-close")) {
    closeProduct();
    return;
  }

  const thumb = event.target.closest("[data-gallery-index]");
  if (thumb && productPanel?.contains(thumb)) {
    state.galleryIndex = Number(thumb.dataset.galleryIndex);
    renderProductModal();
    return;
  }

  const openBtn = event.target.closest("[data-open-product]");
  if (openBtn) {
    event.preventDefault();
    openProduct(openBtn.dataset.openProduct);
  }
});

productBackdrop?.addEventListener("click", closeProduct);

function handleCartQtyClick(event) {
  const removeBtn = event.target.closest("[data-remove]");
  if (removeBtn) {
    setCartQty(removeBtn.dataset.remove, 0);
    updateCartUI();
    return;
  }

  const qtyBtn = event.target.closest("[data-qty-action]");
  if (!qtyBtn) return;
  const wrap = qtyBtn.closest(".qty");
  if (!wrap || wrap.dataset.qtyScope !== "cart") return;
  const id = wrap.dataset.id;
  const current = state.cart.get(id) || 0;
  const next = qtyBtn.dataset.qtyAction === "inc" ? current + 1 : current - 1;
  setCartQty(id, next);
  updateCartUI();
}

cartBody?.addEventListener("click", handleCartQtyClick);
enquireSelection?.addEventListener("click", handleCartQtyClick);

viewCartBtn?.addEventListener("click", openCart);
cartClose?.addEventListener("click", closeCart);
cartBackdrop?.addEventListener("click", closeCart);
cartEnquireBtn?.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (productModal && !productModal.hidden) closeProduct();
  else if (cartDrawer && !cartDrawer.hidden) closeCart();
});

document.querySelectorAll(".filter").forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    setCatalogueFilter(filterBtn.dataset.filter);
  });
});

function setCatalogueFilter(filter) {
  const btn = document.querySelector(`.filter[data-filter="${filter}"]`);
  if (!btn) return;
  state.filter = filter;
  document.querySelectorAll(".filter").forEach((el) => {
    const active = el === btn;
    el.classList.toggle("is-active", active);
    el.setAttribute("aria-selected", String(active));
  });
  renderCatalogue();
  updateCartUI();
}

function applyFilterFromUrl() {
  const params = new URLSearchParams(window.location.search);
  let filter = params.get("filter");
  if (filter === "instant") filter = "polaroid";
  if (filter === "keepsakes" || filter === "guestbooks") filter = "all";
  if (filter) setCatalogueFilter(filter);
}

function applyProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  let productId = params.get("product");
  if (productId === "instax-mini-evo") productId = "instax-mini-liplay";
  if (!productId || !getItem(productId)) return;
  // Open after catalogue is ready so focus/modal markup is available
  requestAnimationFrame(() => openProduct(productId));
}

navToggle?.addEventListener("click", () => {
  if (!nav) return;
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});


form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!formStatus || !submitBtn || !selectedItemsField) return;
  formStatus.textContent = "";
  formStatus.classList.remove("is-error");

  const accessKey = form.querySelector('[name="access_key"]').value.trim();
  if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
    formStatus.textContent =
      "Almost there — add your Web3Forms access key in / so enquiries reach livis.hires@gmail.com.";
    formStatus.classList.add("is-error");
    return;
  }

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const eventType = (data.get("event_type") || "").toString().trim();

  if (!name) {
    formStatus.textContent = "Please enter your name.";
    formStatus.classList.add("is-error");
    form.querySelector('[name="name"]')?.focus();
    return;
  }

  data.set("name", name);
  data.set(
    "message",
    `${data.get("message") || ""}\n\nEnquiry cart: ${selectedItemsField.value || "None"}\nEvent type: ${eventType || "—"}`
  );

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Something went wrong");
    }

    form.reset();
    state.cart.clear();
    saveCart();
    clearCustomBundle();
    updateCartUI();
    renderCatalogue();
    formStatus.textContent = "Enquiry sent — we’ll aim to reply within one business day.";
  } catch (error) {
    formStatus.textContent =
      "Couldn’t send just now. Please try again, or email livis.hires@gmail.com.";
    formStatus.classList.add("is-error");
    console.error(error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send enquiry";
  }
});

function setupReveal() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const nodes = [
    ...document.querySelectorAll(".trust-list li"),
    ...document.querySelectorAll(".discover-head"),
    ...document.querySelectorAll(".discover-item"),
    ...document.querySelectorAll(".featured-card"),
    ...document.querySelectorAll(".how .section-head"),
    ...document.querySelectorAll(".steps li"),
    ...document.querySelectorAll(".proof-item"),
    ...document.querySelectorAll(".story-copy, .story-aside"),
    ...document.querySelectorAll(".faq .section-head"),
    ...document.querySelectorAll(".faq-list details"),
    ...document.querySelectorAll(".enquire-intro, .enquire-form"),
    ...document.querySelectorAll(".section-head"),
    ...document.querySelectorAll(".filters"),
    ...document.querySelectorAll(".item"),
  ];

  const unique = [...new Set(nodes)];

  unique.forEach((node) => {
    if (!node.classList.contains("item")) {
      node.classList.add("reveal");
    }
    if (node.matches(".proof-item, .story-aside")) {
      node.classList.add("reveal--media");
    }
    if (node.matches(".featured-card, .story-copy, .discover-head")) {
      node.classList.add("reveal--lift");
    }
  });

  document.querySelectorAll(".trust-list, #explore-categories .discover-grid, .discover-grid--four, .steps, .catalogue").forEach((group) => {
    [...group.children].forEach((child, index) => {
      if (!child.classList.contains("reveal") && !child.classList.contains("item")) return;
      child.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 85}ms`);
    });
  });

  document.querySelectorAll(".proof-item").forEach((child) => {
    child.style.setProperty("--reveal-delay", "0ms");
  });

  if (reduced || !("IntersectionObserver" in window)) {
    unique.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  unique.forEach((node) => {
    if (node.classList.contains("is-visible")) return;
    observer.observe(node);
  });

  window.__LivisRevealObserver = observer;
}

function refreshItemReveal() {
  const observer = window.__LivisRevealObserver;
  const items = document.querySelectorAll(".item:not(.is-visible)");
  if (!observer) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  items.forEach((item) => observer.observe(item));
}

function setupHeroParallax() {
  const media = document.querySelector(".hero-media img");
  if (!media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    if (y > window.innerHeight * 1.2) return;
    media.style.transform = `translate3d(0, ${y * 0.28}px, 0) scale(1.08)`;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

loadCart();
applyFilterFromUrl();
setupReveal();
setupHeroParallax();

(function setupHomeHeader() {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  if (!header || !hero || document.body.dataset.catalogue !== "home") return;

  const update = () => {
    const fadeAt = Math.max(hero.offsetHeight - header.offsetHeight * 1.4, 80);
    header.classList.toggle("is-scrolled", window.scrollY > fadeAt);
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
renderCatalogue();
updateCartUI();
applyProductFromUrl();

function setupFilmGuide() {
  const guestsEl = document.getElementById("guest-count");
  const shotsEl = document.getElementById("shots-per-guest");
  const out = document.getElementById("film-guide-result");
  const guide = document.getElementById("film-guide");
  if (!guestsEl || !shotsEl || !out) return;

  const isParty = guide?.dataset.variant === "party";

  const update = () => {
    const guests = Math.max(1, Number(guestsEl.value) || 0);
    const per = Number(shotsEl.value) || 2.5;
    const shots = Math.ceil(guests * per);
    const packs = Math.ceil(shots / 10);
    let tip = `About <strong>${shots} shots</strong> → <strong>${packs} Instax Mini packs</strong> · 10 shots each.`;

    if (isParty) {
      if (shots <= 20) {
        tip += ` The <strong>Weekender</strong> (1 Mini pack included) plus an extra pack usually covers a smaller night.`;
      } else if (shots <= 30) {
        tip += ` The <strong>Party Camera Kit</strong> already includes 3 Mini packs · 30 shots — a strong match for this count.`;
      } else if (shots <= 50) {
        tip += ` Start with the <strong>Party Camera Kit</strong> and ask us for more Mini packs on enquiry so guests don’t run out.`;
      } else {
        tip += ` Ask us to build a bigger Polaroid kit for the crowd when you enquire.`;
      }
    } else {
      if (packs <= 4) {
        tip += ` The <strong>Wedding Table Pack</strong> includes 4 Mini packs · 40 shots — a strong match for cameras on the tables.`;
      } else {
        tip += ` Start with the <strong>Wedding Table Pack</strong> and ask for extra Mini packs on enquiry so guests don’t run out.`;
      }
    }

    out.innerHTML = tip;
  };

  guestsEl.addEventListener("input", update);
  shotsEl.addEventListener("change", update);
  update();
}

setupFilmGuide();
setupBundleBuilder();
applyCustomBundleEnquirePrefill();

/* ——— Bundle builder ——— */
function hireableCameras() {
  return CATALOGUE.filter(
    (item) =>
      !item.comingSoon &&
      (item.category === "digital" || item.category === "film" || item.category === "polaroid")
  );
}

function polaroidIncludedShots(item) {
  if (item.category !== "polaroid") return { mini: 0, square: 0 };
  if (/square/i.test(item.name) || /square/i.test(item.detail || "")) {
    return { mini: 0, square: 20 };
  }
  return { mini: 20, square: 0 };
}

function filmIncludedShots(item) {
  if (item.category !== "film") return 0;
  if (/half/i.test(item.tag || "") || /h35/i.test(item.id)) return 72;
  return 36;
}

/** Film format each hire camera uses — for builder labels & extra-film matching. */
function cameraFilmInfo(item) {
  if (!item) return { kind: "none", label: "", short: "", included: "" };
  if (item.category === "digital") {
    return {
      kind: "digital",
      label: "SD included",
      short: "Digital",
      included: "32GB SD",
    };
  }
  if (item.category === "film") {
    const half = /half/i.test(item.tag || "") || /h35/i.test(item.id);
    return {
      kind: "rolls",
      label: half ? "Colour 35mm film · half-frame" : "Colour 35mm film",
      short: "Colour roll",
      included: half ? "1 colour roll · up to 72 shots" : "1 colour roll · 36 shots",
    };
  }
  if (item.category === "polaroid") {
    if (/square/i.test(item.name) || /square/i.test(item.detail || "") || /sq40/i.test(item.id)) {
      return {
        kind: "square",
        label: "Instax Square film",
        short: "Square packs",
        included: "2 Square packs · 20 shots",
      };
    }
    return {
      kind: "mini",
      label: "Instax Mini film",
      short: "Mini packs",
      included: "2 Mini packs · 20 shots",
    };
  }
  return { kind: "none", label: "", short: "", included: "" };
}

function setupBundleBuilder() {
  const root = document.getElementById("bundle-builder");
  const grid = document.getElementById("builder-camera-grid");
  if (!root || !grid) return;

  const eventSection = document.getElementById("builder-event");
  const eventTypeEl = document.getElementById("builder-event-type");
  const guestsEl = document.getElementById("builder-guests");
  const shotsEl = document.getElementById("builder-shots");
  const filmTipEl = document.getElementById("builder-film-tip");
  const statGuestsEl = document.getElementById("builder-stat-guests");
  const statShotsEl = document.getElementById("builder-stat-shots");
  const statPacksEl = document.getElementById("builder-stat-packs");
  const coverageEl = document.getElementById("builder-film-coverage");
  const rollNoteEl = document.getElementById("builder-film-roll-note");
  const matchWrap = document.getElementById("builder-match-wrap");
  const summaryStatus = document.getElementById("builder-summary-status");
  const summaryList = document.getElementById("builder-summary-list");
  const summaryEmpty = document.getElementById("builder-summary-empty");
  const pricingEl = document.getElementById("builder-pricing");
  const listPriceEl = document.getElementById("builder-list-price");
  const bundlePriceEl = document.getElementById("builder-bundle-price");
  const enquireBtn = document.getElementById("builder-enquire-btn");
  const cameraCountEl = document.getElementById("builder-camera-count");
  const progressEl = document.getElementById("builder-progress");
  const mobileCta = document.getElementById("builder-mobile-cta");
  const mobilePrice = document.getElementById("builder-mobile-price");
  const mobileStatus = document.getElementById("builder-mobile-status");
  const mobileEnquire = document.getElementById("builder-mobile-enquire");
  const extraMiniQtyEl = document.getElementById("builder-extra-mini-qty");
  const extraSquareQtyEl = document.getElementById("builder-extra-square-qty");
  const extraRollQtyEl = document.getElementById("builder-extra-roll-qty");
  const extraMiniAppliesEl = document.getElementById("builder-extra-mini-applies");
  const extraSquareAppliesEl = document.getElementById("builder-extra-square-applies");
  const extraRollAppliesEl = document.getElementById("builder-extra-roll-applies");
  const extraMiniRow = document.getElementById("builder-extra-mini-row");
  const extraSquareRow = document.getElementById("builder-extra-square-row");
  const extraRollRow = document.getElementById("builder-extra-roll-row");
  const extraEmpty = document.getElementById("builder-extra-empty");
  const matchFilmTipBtn = document.getElementById("builder-match-film-tip");
  const stepEls = [...document.querySelectorAll("[data-builder-step]")];

  const qtyById = new Map();
  const extraFilm = { mini: 0, square: 0, rolls: 0 };
  let activeFilter = "all";

  const cameras = hireableCameras();
  const categoryOrder = ["digital", "polaroid", "film"];
  const categoryLabels = {
    digital: "Digital",
    polaroid: "Polaroid",
    film: "Film",
  };

  const selectedEntries = () =>
    cameras
      .map((item) => ({ item, qty: qtyById.get(item.id) || 0 }))
      .filter((row) => row.qty > 0);

  const cameraCount = () => selectedEntries().reduce((sum, row) => sum + row.qty, 0);

  const listTotal = () =>
    selectedEntries().reduce((sum, { item, qty }) => sum + parsePrice(item.price) * qty, 0);

  function setExtraFilm(kind, qty) {
    const next = Math.max(0, Math.min(99, Number(qty) || 0));
    if (kind === "mini") extraFilm.mini = next;
    if (kind === "square") extraFilm.square = next;
    if (kind === "rolls") extraFilm.rolls = next;
    renderSummary();
  }

  function camerasForFilmKind(kind) {
    return selectedEntries().filter(({ item }) => cameraFilmInfo(item).kind === kind);
  }

  function formatAppliesLabel(kind) {
    const rows = camerasForFilmKind(kind);
    if (!rows.length) return "";
    return `For: ${rows
      .map(({ item, qty }) => (qty > 1 ? `${item.name} ×${qty}` : item.name))
      .join(" · ")}`;
  }

  function updateExtraFilmApplies() {
    const miniCams = camerasForFilmKind("mini");
    const squareCams = camerasForFilmKind("square");
    const rollCams = camerasForFilmKind("rolls");
    const anyFilm = miniCams.length || squareCams.length || rollCams.length;

    if (extraMiniAppliesEl) extraMiniAppliesEl.textContent = formatAppliesLabel("mini");
    if (extraSquareAppliesEl) extraSquareAppliesEl.textContent = formatAppliesLabel("square");
    if (extraRollAppliesEl) extraRollAppliesEl.textContent = formatAppliesLabel("rolls");

    if (extraMiniRow) extraMiniRow.hidden = miniCams.length === 0;
    if (extraSquareRow) extraSquareRow.hidden = squareCams.length === 0;
    if (extraRollRow) extraRollRow.hidden = rollCams.length === 0;
    if (extraEmpty) extraEmpty.hidden = !!anyFilm;

    if (!miniCams.length && extraFilm.mini) extraFilm.mini = 0;
    if (!squareCams.length && extraFilm.square) extraFilm.square = 0;
    if (!rollCams.length && extraFilm.rolls) extraFilm.rolls = 0;
  }

  function filmAdvice() {
    const guests = Math.max(1, Number(guestsEl?.value) || 0);
    const per = Number(shotsEl?.value) || 2.5;
    const shots = Math.ceil(guests * per);
    const packsNeeded = Math.ceil(shots / 10);

    let includedMini = 0;
    let includedSquare = 0;
    let includedFilmShots = 0;
    let polaroidUnits = 0;
    let filmUnits = 0;

    selectedEntries().forEach(({ item, qty }) => {
      const pol = polaroidIncludedShots(item);
      includedMini += pol.mini * qty;
      includedSquare += pol.square * qty;
      includedFilmShots += filmIncludedShots(item) * qty;
      if (item.category === "polaroid") polaroidUnits += qty;
      if (item.category === "film") filmUnits += qty;
    });

    const includedMiniPacks = Math.round(includedMini / 10);
    const includedSquarePacks = Math.round(includedSquare / 10);
    const suggestedExtraMini = Math.max(0, packsNeeded - includedMiniPacks);

    let coverage = "";
    if (polaroidUnits > 0) {
      if (suggestedExtraMini > 0) {
        coverage = `Your Polaroid cameras include <strong>${includedMiniPacks} Mini pack${
          includedMiniPacks === 1 ? "" : "s"
        }</strong>. Add <strong>${suggestedExtraMini} more</strong>.`;
      } else {
        coverage = `Your Polaroid cameras already cover this (<strong>${includedMiniPacks} Mini pack${
          includedMiniPacks === 1 ? "" : "s"
        }</strong>).`;
      }
      if (includedSquarePacks) {
        coverage += ` Also includes <strong>${includedSquarePacks} Square</strong>.`;
      }
    } else {
      coverage = `No Polaroid camera yet — add Mini 12 or LiPlay to use Instant film.`;
    }

    if (extraFilm.mini || extraFilm.square || extraFilm.rolls) {
      const bits = [];
      if (extraFilm.mini) bits.push(`${extraFilm.mini} Mini`);
      if (extraFilm.square) bits.push(`${extraFilm.square} Square`);
      if (extraFilm.rolls) bits.push(`${extraFilm.rolls} colour`);
      coverage += ` Extras selected: <strong>${bits.join(", ")}</strong>.`;
    }

    const rollNote =
      filmUnits > 0
        ? `Colour film in your kit: <strong>~${includedFilmShots} shots</strong> on the loaded rolls.`
        : "";

    const plain = [
      `${guests} guests`,
      `~${shots} Polaroid shots`,
      `${packsNeeded} Mini packs`,
      coverage.replace(/<[^>]+>/g, ""),
      rollNote.replace(/<[^>]+>/g, ""),
    ]
      .filter(Boolean)
      .join(". ");

    return {
      guests,
      shots,
      packsNeeded,
      suggestedExtraMini,
      coverage,
      rollNote,
      plain,
    };
  }

  function visibleCameras() {
    if (activeFilter === "all") return cameras;
    return cameras.filter((item) => item.category === activeFilter);
  }

  function renderGrid() {
    const visible = visibleCameras();
    if (!visible.length) {
      grid.innerHTML = `<p class="builder-filter-empty">No cameras in this filter.</p>`;
      return;
    }

    const groups = categoryOrder
      .map((cat) => ({
        cat,
        items: visible.filter((item) => item.category === cat),
      }))
      .filter((group) => group.items.length);

    grid.innerHTML = groups
      .map((group) => {
        const cards = group.items
          .map((item) => {
            const qty = qtyById.get(item.id) || 0;
            const selected = qty > 0;
            const film = cameraFilmInfo(item);
            return `
        <article class="builder-cam${selected ? " is-selected" : ""}" data-builder-id="${item.id}" data-film-kind="${film.kind}">
          <button type="button" class="builder-cam-toggle" data-builder-toggle="${item.id}" aria-pressed="${selected}">
            <div class="builder-cam-media">
              ${
                item.image
                  ? `<img src="${item.image}" alt="${item.alt || item.name}" width="400" height="400" loading="lazy" />`
                  : `<div class="photo-slot">Photo coming soon</div>`
              }
              ${selected ? `<span class="builder-cam-check" aria-hidden="true">✓</span>` : ""}
            </div>
            <div class="builder-cam-body">
              <p class="builder-cam-tag">${item.tag || item.category}</p>
              <h3 class="builder-cam-name">${item.name}</h3>
              <p class="builder-cam-film"><span class="builder-film-pill">${film.label}</span></p>
              <p class="builder-cam-meta">${item.price}${
              film.included ? ` · includes ${film.included}` : ""
            }</p>
            </div>
          </button>
          <div class="builder-cam-qty" data-builder-qty-wrap="${item.id}" ${selected ? "" : "hidden"}>
            <button type="button" data-builder-dec="${item.id}" aria-label="Fewer ${item.name}">−</button>
            <span data-builder-qty="${item.id}">${qty}</span>
            <button type="button" data-builder-inc="${item.id}" aria-label="More ${item.name}">+</button>
          </div>
        </article>`;
          })
          .join("");

        const showHeading = activeFilter === "all";
        return `
        <div class="builder-cam-group" data-group="${group.cat}">
          ${showHeading ? `<h3 class="builder-cam-group-title">${categoryLabels[group.cat]}</h3>` : ""}
          <div class="builder-cam-group-grid">${cards}</div>
        </div>`;
      })
      .join("");
  }

  function updateSteps(count, ready) {
    stepEls.forEach((el) => {
      const step = Number(el.dataset.builderStep);
      el.classList.toggle("is-active", step === 1 || (step === 2 && count > 0) || (step === 3 && ready));
      el.classList.toggle("is-done", (step === 1 && count > 0) || (step === 2 && ready));
    });
  }

  function submitBundle() {
    if (cameraCount() < BUNDLE_MIN_CAMERAS) return;
    const entries = selectedEntries();
    const list = listTotal();
    const bundleTotal = Math.round(list * (1 - BUNDLE_DISCOUNT));
    const tip = filmAdvice();

    state.cart.clear();
    clearCustomBundle();
    entries.forEach(({ item, qty }) => {
      state.cart.set(item.id, qty);
    });
    saveCart();

    saveCustomBundle({
      cameras: entries.map(({ item, qty }) => ({
        id: item.id,
        name: item.name,
        qty,
        price: parsePrice(item.price),
      })),
      listTotal: list,
      bundleTotal,
      eventType: eventTypeEl?.value || "",
      guests: tip.guests,
      shots: tip.shots,
      packsNeeded: tip.packsNeeded,
      extraFilm: { ...extraFilm },
      filmTipPlain: tip.plain,
      coveragePlain: String(tip.coverage || "").replace(/<[^>]+>/g, ""),
    });

    updateCartUI();
    window.location.href = siteUrl("index.html#enquire");
  }

  function renderSummary() {
    updateExtraFilmApplies();
    const entries = selectedEntries();
    const count = cameraCount();
    const ready = count >= BUNDLE_MIN_CAMERAS;
    const list = listTotal();
    const bundle = Math.round(list * (1 - BUNDLE_DISCOUNT));
    const tip = filmAdvice();
    const unlocked = count > 0;

    eventSection?.classList.toggle("is-locked", !unlocked);
    updateSteps(count, ready);

    if (cameraCountEl) {
      cameraCountEl.textContent = `${count} / ${BUNDLE_MIN_CAMERAS}`;
      cameraCountEl.classList.toggle("is-ready", ready);
    }

    if (progressEl) {
      [...progressEl.children].forEach((dot, i) => {
        dot.classList.toggle("is-on", count > i);
      });
    }

    if (statGuestsEl) statGuestsEl.textContent = String(tip.guests);
    if (statShotsEl) statShotsEl.textContent = `~${tip.shots}`;
    if (statPacksEl) statPacksEl.textContent = String(tip.packsNeeded);
    if (coverageEl) coverageEl.innerHTML = tip.coverage;
    if (rollNoteEl) {
      rollNoteEl.hidden = !tip.rollNote;
      rollNoteEl.innerHTML = tip.rollNote || "";
    }
    if (matchWrap) {
      matchWrap.hidden = !(
        tip.suggestedExtraMini > 0 && camerasForFilmKind("mini").length > 0
      );
    }
    if (extraMiniQtyEl) extraMiniQtyEl.textContent = String(extraFilm.mini);
    if (extraSquareQtyEl) extraSquareQtyEl.textContent = String(extraFilm.square);
    if (extraRollQtyEl) extraRollQtyEl.textContent = String(extraFilm.rolls);

    if (summaryEmpty) summaryEmpty.hidden = entries.length > 0;

    if (summaryList) {
      const lines = entries.map(({ item, qty }) => {
        const film = cameraFilmInfo(item);
        return `<li><span>${qty > 1 ? `${item.name} ×${qty}` : item.name}<em class="builder-summary-film">${
          film.short
        }</em></span><span>${formatMoney(parsePrice(item.price) * qty)}</span></li>`;
      });
      if (extraFilm.mini) {
        lines.push(
          `<li><span>Extra Mini packs ×${extraFilm.mini}<em class="builder-summary-film">for Mini cameras</em></span><span>on enquire</span></li>`
        );
      }
      if (extraFilm.square) {
        lines.push(
          `<li><span>Extra Square packs ×${extraFilm.square}<em class="builder-summary-film">for SQ40</em></span><span>on enquire</span></li>`
        );
      }
      if (extraFilm.rolls) {
        lines.push(
          `<li><span>Extra colour rolls ×${extraFilm.rolls}<em class="builder-summary-film">for M35 / Ektar</em></span><span>on enquire</span></li>`
        );
      }
      summaryList.innerHTML = lines.join("");
    }

    if (summaryStatus) {
      summaryStatus.classList.toggle("is-ready", ready);
      if (!count) {
        summaryStatus.textContent = `Choose at least ${BUNDLE_MIN_CAMERAS} cameras to unlock 15% off.`;
      } else if (!ready) {
        summaryStatus.textContent = `${count} of ${BUNDLE_MIN_CAMERAS} — add ${
          BUNDLE_MIN_CAMERAS - count
        } more for 15% off.`;
      } else {
        summaryStatus.textContent = `${count} cameras · 15% off unlocked. Plan film, then enquire.`;
      }
    }

    if (pricingEl) pricingEl.hidden = !ready;
    if (listPriceEl) listPriceEl.textContent = formatMoney(list);
    if (bundlePriceEl) bundlePriceEl.textContent = formatMoney(bundle);
    if (enquireBtn) {
      enquireBtn.disabled = !ready;
      enquireBtn.textContent = ready ? "Add bundle to enquiry" : `Add ${Math.max(0, BUNDLE_MIN_CAMERAS - count)} more camera${BUNDLE_MIN_CAMERAS - count === 1 ? "" : "s"}`;
    }

    if (mobileCta) mobileCta.hidden = count === 0;
    if (mobilePrice) mobilePrice.textContent = ready ? formatMoney(bundle) : formatMoney(list);
    if (mobileStatus) {
      mobileStatus.textContent = ready
        ? `${count} cameras · 15% off`
        : `${count} / ${BUNDLE_MIN_CAMERAS} cameras`;
    }
    if (mobileEnquire) {
      mobileEnquire.disabled = !ready;
      mobileEnquire.textContent = ready ? "Enquire" : "Keep picking";
    }
  }

  function setQty(id, qty) {
    const next = Math.max(0, Math.min(99, Number(qty) || 0));
    if (next <= 0) qtyById.delete(id);
    else qtyById.set(id, next);
    renderGrid();
    renderSummary();
  }

  grid.addEventListener("click", (event) => {
    const t = event.target.closest("[data-builder-toggle], [data-builder-inc], [data-builder-dec]");
    if (!t) return;
    event.preventDefault();
    if (t.dataset.builderToggle) {
      const id = t.dataset.builderToggle;
      const current = qtyById.get(id) || 0;
      setQty(id, current > 0 ? 0 : 1);
      return;
    }
    if (t.dataset.builderInc) {
      setQty(t.dataset.builderInc, (qtyById.get(t.dataset.builderInc) || 0) + 1);
      return;
    }
    if (t.dataset.builderDec) {
      setQty(t.dataset.builderDec, (qtyById.get(t.dataset.builderDec) || 0) - 1);
    }
  });

  document.querySelectorAll("[data-builder-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.builderFilter || "all";
      document.querySelectorAll("[data-builder-filter]").forEach((el) => {
        el.classList.toggle("is-active", el === btn);
      });
      renderGrid();
    });
  });

  document.getElementById("builder-extra-mini-inc")?.addEventListener("click", () =>
    setExtraFilm("mini", extraFilm.mini + 1)
  );
  document.getElementById("builder-extra-mini-dec")?.addEventListener("click", () =>
    setExtraFilm("mini", extraFilm.mini - 1)
  );
  document.getElementById("builder-extra-square-inc")?.addEventListener("click", () =>
    setExtraFilm("square", extraFilm.square + 1)
  );
  document.getElementById("builder-extra-square-dec")?.addEventListener("click", () =>
    setExtraFilm("square", extraFilm.square - 1)
  );
  document.getElementById("builder-extra-roll-inc")?.addEventListener("click", () =>
    setExtraFilm("rolls", extraFilm.rolls + 1)
  );
  document.getElementById("builder-extra-roll-dec")?.addEventListener("click", () =>
    setExtraFilm("rolls", extraFilm.rolls - 1)
  );

  matchFilmTipBtn?.addEventListener("click", () => {
    const tip = filmAdvice();
    setExtraFilm("mini", tip.suggestedExtraMini);
  });

  [eventTypeEl, guestsEl, shotsEl].forEach((el) => {
    el?.addEventListener("input", renderSummary);
    el?.addEventListener("change", renderSummary);
  });

  enquireBtn?.addEventListener("click", submitBundle);
  mobileEnquire?.addEventListener("click", () => {
    if (cameraCount() < BUNDLE_MIN_CAMERAS) {
      document.getElementById("builder-cameras")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    submitBundle();
  });

  renderGrid();
  renderSummary();
}


function formatCustomBundleExtras(bundle) {
  if (!bundle?.extraFilm) return "";
  const bits = [];
  if (bundle.extraFilm.mini) {
    bits.push(`${bundle.extraFilm.mini} Mini pack${bundle.extraFilm.mini === 1 ? "" : "s"}`);
  }
  if (bundle.extraFilm.square) {
    bits.push(`${bundle.extraFilm.square} Square pack${bundle.extraFilm.square === 1 ? "" : "s"}`);
  }
  if (bundle.extraFilm.rolls) {
    bits.push(`${bundle.extraFilm.rolls} colour roll${bundle.extraFilm.rolls === 1 ? "" : "s"}`);
  }
  return bits.join(" · ");
}

function formatCustomBundleEmailText(bundle, entries, listLabel, totalLabel) {
  const extras = formatCustomBundleExtras(bundle);
  const lines = [
    "CUSTOM BUNDLE (15% off)",
    ...entries.map(({ item, qty }) => `- ${item.name} ×${qty}`),
    `List ${listLabel} → Bundle ${totalLabel}`,
  ];
  if (bundle.eventType) lines.push(`Event: ${bundle.eventType}`);
  if (bundle.guests) lines.push(`Guests: ${bundle.guests}`);
  if (bundle.shots && bundle.packsNeeded) {
    lines.push(`Polaroid plan: ~${bundle.shots} shots · ${bundle.packsNeeded} Mini packs`);
  }
  if (bundle.coveragePlain) lines.push(bundle.coveragePlain);
  if (extras) lines.push(`Extra film: ${extras}`);
  return lines.join("\n");
}

function renderCustomBundleEnquireCard(bundle, entries, listLabel, totalLabel) {
  const extras = formatCustomBundleExtras(bundle);
  const cameras = entries
    .map(({ item, qty }) => {
      const film = cameraFilmInfo(item);
      return `<li><span>${qty > 1 ? `${item.name} ×${qty}` : item.name}<em>${
        film.short
      }</em></span></li>`;
    })
    .join("");

  return `
    <div class="enquire-bundle-card">
      <p class="enquire-bundle-badge">Custom bundle · 15% off</p>
      <ul class="enquire-bundle-cameras">${cameras}</ul>
      <dl class="enquire-bundle-meta">
        ${bundle.eventType ? `<div><dt>Event</dt><dd>${bundle.eventType}</dd></div>` : ""}
        ${bundle.guests ? `<div><dt>Guests</dt><dd>${bundle.guests}</dd></div>` : ""}
        ${
          bundle.packsNeeded
            ? `<div><dt>Polaroid</dt><dd>~${bundle.shots} shots · ${bundle.packsNeeded} Mini packs</dd></div>`
            : ""
        }
        ${extras ? `<div><dt>Extra film</dt><dd>${extras}</dd></div>` : ""}
      </dl>
      <p class="cart-total"><span>Bundle total</span><strong>${totalLabel}</strong></p>
      <p class="enquire-bundle-list">List price ${listLabel}</p>
      <p class="enquire-bundle-edit"><a href="${siteUrl("bundle-builder/index.html")}">Edit bundle</a></p>
    </div>
  `;
}

function applyCustomBundleEnquirePrefill() {
  const bundle = activeCustomBundle() || loadCustomBundle();
  if (!bundle) return;

  const eventEl = form?.querySelector('[name="event_type"]');
  if (eventEl && bundle.eventType) {
    eventEl.value = bundle.eventType;
  }

  const messageEl = form?.querySelector('[name="message"]');
  if (messageEl && !messageEl.value.trim()) {
    messageEl.placeholder =
      "Anything else? Pickup/delivery preference, photo export, timing notes…";
  }
}

/* ——— From the day modal ——— */
const dayModal = document.getElementById("day-modal");
const dayBackdrop = document.getElementById("day-backdrop");
const dayClose = document.getElementById("day-close");
const dayShotImg = document.getElementById("day-shot-img");
const dayCameraLink = document.getElementById("day-camera-link");
const dayCameraImg = document.getElementById("day-camera-img");
const dayCameraName = document.getElementById("day-camera-name");
const dayCameraDetail = document.getElementById("day-camera-detail");
const dayCameraPrice = document.getElementById("day-camera-price");

function closeDayModal() {
  if (!dayModal || dayModal.hidden) return;
  dayModal.hidden = true;
  document.body.classList.remove("day-open");
}

function openDayModal({ photo, alt, cameraId }) {
  if (!dayModal || !dayShotImg || !dayCameraLink) return;
  const camera = getItem(cameraId);
  if (!camera) return;

  dayShotImg.src = photo;
  dayShotImg.alt = alt || "From the day";

  dayCameraImg.src = camera.image;
  dayCameraImg.alt = camera.alt || camera.name;
  dayCameraName.textContent = camera.name;
  dayCameraDetail.textContent = camera.detail || camera.tag || "";
  dayCameraPrice.textContent = camera.price || "";
  dayCameraLink.dataset.dayCamera = camera.id;

  dayModal.hidden = false;
  document.body.classList.add("day-open");
  dayClose?.focus();
}

document.querySelectorAll("[data-day-photo]").forEach((btn) => {
  btn.addEventListener("click", () => {
    openDayModal({
      photo: btn.dataset.dayPhoto,
      alt: btn.dataset.dayAlt,
      cameraId: btn.dataset.dayCamera || "kodak-pixpro-fz55",
    });
  });
});

dayBackdrop?.addEventListener("click", closeDayModal);
dayClose?.addEventListener("click", closeDayModal);

dayCameraLink?.addEventListener("click", () => {
  const cameraId = dayCameraLink.dataset.dayCamera;
  if (!cameraId) return;
  closeDayModal();
  if (productModal && productPanel) {
    openProduct(cameraId);
  } else {
    window.location.href = siteUrl(`cameras/index.html?product=${encodeURIComponent(cameraId)}`);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dayModal && !dayModal.hidden) {
    closeDayModal();
  }
});
