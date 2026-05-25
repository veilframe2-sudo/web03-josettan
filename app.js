/* ============================================================
   Josettan's Cinema Company — interactions
   Vanilla port of the React/Babel design prototype.
   ============================================================ */

/* ---------- Content data ---------- */
const HERO_FRAMES = [
  "images/biryani.png", "images/tharavadi-chicken.png", "images/sadya.png",
  "images/shawarma-rice.png", "images/tandoor.png", "images/fish-banana-leaf.png",
  "images/beef-parotta.png", "images/chicken-curry-pot.png", "images/parotta.png",
  "images/sesame-chicken.png", "images/fried-rice.png", "images/interior-1.png",
  "images/director-wall.png", "images/chicken-popcorn.png"
];

const OCCASIONS = [
  { id: "wedding", name: "Kalyanam", desc: "Christian, Hindu, Muslim wedding menus" },
  { id: "engagement", name: "Engagement", desc: "Intimate 30–80 guest sit-down service" },
  { id: "birthday", name: "Birthday / Anniversary", desc: "Restaurant takeover or home catering" },
  { id: "corporate", name: "Corporate", desc: "Office launches, AGMs, screening parties" },
  { id: "house", name: "House Function", desc: "Pal-kuduka, gruhapravesham, baby naming" },
  { id: "other", name: "Something Else", desc: "Tell us — we cater 50 to 2,000 plates" }
];

const CUISINES = [
  { id: "naadan", name: "Naadan Kerala", desc: "Banana-leaf sadya, Tharavadi, stew, Karimeen" },
  { id: "arabic", name: "Arabic / Mandi", desc: "Mandi, kabsa, shawaya, fattoush" },
  { id: "north", name: "North Indian", desc: "Butter chicken, dal makhani, rogan josh" },
  { id: "tandoor", name: "Tandoor", desc: "Tandoori, kababs, kulchas, naan" },
  { id: "chinese", name: "Indo-Chinese", desc: "Fried rice, manchurian, noodles" },
  { id: "veg", name: "All-Vegetarian", desc: "Sadya, paneer, dal, biryani" }
];

const MENU_TABS = ["Naadan", "Arabic", "Tandoor", "North Indian", "Chinese", "Veg & Sides"];

const MENU_ITEMS = {
  "Naadan": [
    { name: "Malabar Kalyana Biryani", desc: "Wedding-style chicken biryani with raita & lime", price: 280, img: "images/biryani.png", badges: ["signature"] },
    { name: "Tharavadi Chicken", desc: "Traditional Kerala home-style curry, kudampuli finish", price: 320, img: "images/tharavadi-chicken.png", badges: ["signature"] },
    { name: "Chicken Stew Malaikotte", desc: "Coconut-milk stew, cracked black pepper", price: 280, img: "images/chicken-curry-pot.png", badges: ["spicy"] },
    { name: "Karimeen Pollichathu", desc: "Pearl-spot wrapped in banana leaf, grilled", price: 420, img: "images/fish-banana-leaf.png", badges: [] },
    { name: "Naadan Beef Ularthiyathu", desc: "Slow-fried beef with coconut shards & curry leaf", price: 340, img: "images/beef-fry.png", badges: [] },
    { name: "Beef Parotta Roll-up", desc: "Spiced beef fry served over flaked Malabar parotta", price: 260, img: "images/beef-parotta.png", badges: ["new"] },
    { name: "Onam Sadya Plate", desc: "26-item plantain-leaf feast (festive seasons)", price: 380, img: "images/sadya.png", badges: ["veg"] },
    { name: "Malabar Parotta", desc: "Flaked, layered, made-to-order", price: 35, img: "images/parotta.png", badges: ["veg"] }
  ],
  "Arabic": [
    { name: "Masala Shawaya Mandi", desc: "Saudi-style smoke-roasted chicken & saffron rice", price: 320, img: "images/shawarma-rice.png", badges: ["signature"] },
    { name: "Mutton Mandi", desc: "Slow-cooked mutton mandi with mahalbiya yoghurt", price: 460, img: null, badges: [] },
    { name: "Shawarma Rice Bowl", desc: "Shawarma slivers over fries, garlic mayo, pickles", price: 240, img: "images/shawarma-rice.png", badges: ["new"] },
    { name: "Kuzhi Mandi Family Tray", desc: "1.2 kg mandi, salata, fattoush, lime", price: 980, img: null, badges: [] },
    { name: "Saudi Kabsa", desc: "Spiced Arabic rice with whole leg of chicken", price: 380, img: null, badges: [] }
  ],
  "Tandoor": [
    { name: "Cinema Co. Half Tandoori", desc: "Slow-marinated half chicken, smoked in the tandoor", price: 320, img: "images/tandoor.png", badges: ["signature"] },
    { name: "Tandoori Pomfret", desc: "Whole pomfret, ajwain-yoghurt marinade", price: 540, img: null, badges: [] },
    { name: "Sesame Chicken Tikka", desc: "Hung-curd chicken rolled in toasted sesame", price: 280, img: "images/sesame-chicken.png", badges: ["new"] },
    { name: "Reshmi Kabab", desc: "Cream-marinated chicken, finished over coal", price: 290, img: null, badges: [] },
    { name: "Paneer Tikka 'Director's Cut'", desc: "Charred bell-pepper paneer skewers", price: 240, img: null, badges: ["veg"] }
  ],
  "North Indian": [
    { name: "Butter Chicken", desc: "Smoky tomato-cashew, slow-finished with cream", price: 320, img: "images/tharavadi-chicken.png", badges: [] },
    { name: "Dal Makhani", desc: "Black-urad, eight-hour simmer, white butter", price: 220, img: null, badges: ["veg"] },
    { name: "Rogan Josh", desc: "Kashmiri mutton, saffron, ratan jot", price: 420, img: null, badges: [] },
    { name: "Paneer Lababdar", desc: "Soft paneer in fenugreek-tomato gravy", price: 240, img: null, badges: ["veg"] }
  ],
  "Chinese": [
    { name: "Cinema Co. Fried Rice", desc: "House egg fried rice, scallion, soy", price: 220, img: "images/fried-rice.png", badges: [] },
    { name: "Crispy Chicken 'Popcorn'", desc: "Cornflake-crusted chicken bites, sweet chilli", price: 240, img: "images/chicken-popcorn.png", badges: ["new"] },
    { name: "Schezwan Chicken", desc: "Dry-tossed chicken, scallion, dried red chilli", price: 280, img: null, badges: ["spicy"] },
    { name: "Hakka Noodles", desc: "Wok-tossed noodles, julienne vegetables", price: 200, img: null, badges: ["veg"] }
  ],
  "Veg & Sides": [
    { name: "Appam (4 pcs)", desc: "Bowl-shaped lace-edge rice hopper", price: 60, img: null, badges: ["veg"] },
    { name: "Malabar Parotta", desc: "Flaked, layered, made-to-order", price: 35, img: "images/parotta.png", badges: ["veg"] },
    { name: "Coconut Stew", desc: "Vegetables in spiced coconut milk", price: 180, img: null, badges: ["veg"] },
    { name: "Avial", desc: "Fourteen vegetables, coconut, raw mango", price: 160, img: null, badges: ["veg"] },
    { name: "Pal Payasam", desc: "Slow-cooked rice & milk pudding", price: 90, img: null, badges: ["veg"] }
  ]
};

const GALLERY_IMAGES = [
  { src: "images/biryani.png", title: "Malabar Kalyana Biryani", layout: "s2x" },
  { src: "images/interior-1.png", title: "The Theatre Floor", layout: "w2" },
  { src: "images/director-amal.png", title: "Director's Wall — Amal Neerad", layout: "h2" },
  { src: "images/tharavadi-chicken.png", title: "Tharavadi Chicken", layout: "" },
  { src: "images/sadya.png", title: "Onam Sadya Plate", layout: "" },
  { src: "images/director-wall.png", title: "Director's Wall", layout: "w2" },
  { src: "images/fish-banana-leaf.png", title: "Karimeen Pollichathu", layout: "" },
  { src: "images/tandoor.png", title: "Cinema Co. Tandoori", layout: "" },
  { src: "images/beef-parotta.png", title: "Beef on Malabar Parotta", layout: "" },
  { src: "images/exterior.png", title: "The Premiere — Viyyur, Thrissur", layout: "w2" },
  { src: "images/interior-2.png", title: "Inside the auditorium", layout: "" },
  { src: "images/director-bharathan.png", title: "Director's Wall — Bharathan", layout: "" },
  { src: "images/shawarma-rice.png", title: "Mandi Tray", layout: "" },
  { src: "images/chicken-curry-pot.png", title: "Stew Pot", layout: "" }
];

/* ---------- helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const el = (tag, props = {}, ...kids) => {
  const node = Object.assign(document.createElement(tag), props);
  for (const k of kids) node.append(k);
  return node;
};
const fmtINR = (n) => "₹" + n.toLocaleString("en-IN");

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFilmstrip();
  initCatering();
  initMenu();
  initGallery();
  initReserve();
});

/* ---------- Nav: scroll-spy + smooth scroll ---------- */
function initNav() {
  const spyIds = ["home", "menu", "catering", "gallery", "reserve"];
  const links = $$(".nav-links a[data-nav]");

  const setActive = (id) => {
    links.forEach((a) => a.classList.toggle("active", a.dataset.nav === id));
  };

  const onScroll = () => {
    const y = window.scrollY + 200;
    for (const id of spyIds) {
      const sec = document.getElementById(id);
      if (!sec) continue;
      const top = sec.offsetTop;
      if (y >= top && y < top + sec.offsetHeight) { setActive(id); return; }
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const go = (id) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    setActive(id);
    window.scrollTo({ top: sec.offsetTop - 60, behavior: "smooth" });
  };

  // any element opting into nav (links, buttons, posters)
  $$("[data-nav]").forEach((node) => {
    node.addEventListener("click", (e) => {
      e.preventDefault();
      go(node.dataset.nav);
    });
  });
}

/* ---------- Filmstrip beneath nav ---------- */
function initFilmstrip() {
  const track = $("#filmstrip-track");
  if (!track) return;
  const frag = document.createDocumentFragment();
  for (let r = 0; r < 4; r++) {
    HERO_FRAMES.forEach((src) => {
      const frame = el("div", { className: "filmstrip-frame" });
      frame.append(el("img", { src, alt: "", loading: "lazy" }));
      frag.append(frame);
    });
  }
  track.append(frag);
}

/* ---------- Catering multi-step inquiry ---------- */
function initCatering() {
  const form = $("#cat-form");
  if (!form) return;

  const TOTAL = 4;
  const STEP_NAMES = ["", "Occasion", "Menu", "Logistics", "Contact"];
  const state = {
    step: 1,
    occasion: null,
    cuisines: [],
    guests: 150,
    date: "",
    venue: "",
    name: "",
    phone: "",
    notes: ""
  };

  // build occasion choices
  const occGrid = $("#occasion-grid");
  OCCASIONS.forEach((o) => {
    const btn = el("button", { type: "button", className: "choice" });
    btn.append(el("span", { className: "name", textContent: o.name }));
    btn.append(el("span", { className: "desc", textContent: o.desc }));
    btn.addEventListener("click", () => {
      state.occasion = o.id;
      $$("#occasion-grid .choice").forEach((c) => c.classList.remove("selected"));
      btn.classList.add("selected");
      render();
    });
    occGrid.append(btn);
  });

  // build cuisine choices (multi-select)
  const cuiGrid = $("#cuisine-grid");
  CUISINES.forEach((c) => {
    const btn = el("button", { type: "button", className: "choice" });
    btn.append(el("span", { className: "name", textContent: c.name }));
    btn.append(el("span", { className: "desc", textContent: c.desc }));
    btn.addEventListener("click", () => {
      const i = state.cuisines.indexOf(c.id);
      if (i >= 0) state.cuisines.splice(i, 1);
      else state.cuisines.push(c.id);
      btn.classList.toggle("selected");
      render();
    });
    cuiGrid.append(btn);
  });

  // logistics
  $("#guests-dec").addEventListener("click", () => { state.guests = Math.max(50, state.guests - 25); render(); });
  $("#guests-inc").addEventListener("click", () => { state.guests = Math.min(2000, state.guests + 25); render(); });
  $("#cat-date").addEventListener("input", (e) => { state.date = e.target.value; render(); });
  $("#cat-venue").addEventListener("input", (e) => { state.venue = e.target.value; });

  // contact
  $("#cat-name").addEventListener("input", (e) => { state.name = e.target.value; });
  $("#cat-phone").addEventListener("input", (e) => { state.phone = e.target.value; });
  $("#cat-notes").addEventListener("input", (e) => { state.notes = e.target.value; });

  const canAdvance = () => {
    switch (state.step) {
      case 1: return !!state.occasion;
      case 2: return state.cuisines.length > 0;
      case 3: return !!state.date && state.guests > 0;
      case 4: return !!state.name && state.phone.length >= 7;
      default: return false;
    }
  };

  $("#cat-back").addEventListener("click", () => {
    state.step = Math.max(1, state.step - 1);
    render();
  });
  $("#cat-next").addEventListener("click", () => {
    if (!canAdvance()) return;
    if (state.step < TOTAL) { state.step += 1; render(); }
    else showToast(`Inquiry sent · ${state.name || "you"}, ${state.guests} guests`);
  });

  function render() {
    // panels
    $$(".cat-panel").forEach((p) => { p.hidden = Number(p.dataset.panel) !== state.step; });
    // step pills
    $$(".cat-step-pill").forEach((pill) => {
      const n = Number(pill.dataset.pill);
      pill.classList.toggle("done", n < state.step);
      pill.classList.toggle("active", n === state.step);
    });
    // step label
    $("#cat-step-now").textContent = String(state.step).padStart(2, "0");
    $("#cat-step-name").textContent = STEP_NAMES[state.step];
    // cuisine count
    $("#cuisine-count").textContent = state.cuisines.length;
    // back / next
    $("#cat-back").disabled = state.step === 1;
    $("#cat-next-label").textContent = state.step === TOTAL ? "Send Inquiry" : "Continue →";

    // live receipt
    $("#rc-occasion").textContent = state.occasion
      ? (OCCASIONS.find((o) => o.id === state.occasion) || {}).name
      : "—";
    $("#rc-cuisines").textContent = state.cuisines
      .map((id) => (CUISINES.find((c) => c.id === id) || {}).name)
      .join(", ") || "—";
    $("#rc-guests").textContent = state.guests;
    $("#guests-val").textContent = state.guests;
    $("#rc-date").textContent = state.date || "—";

    const pricePerPlate = 650 + state.cuisines.length * 90;
    const low = pricePerPlate * state.guests;
    const high = Math.round(low * 1.35);
    $("#rc-estimate").textContent = state.cuisines.length > 0
      ? `${fmtINR(low)} – ${fmtINR(high)}`
      : "—";
  }

  render();
}

/* ---------- Menu browser ---------- */
function initMenu() {
  const tabsWrap = $("#menu-tabs");
  const grid = $("#menu-grid");
  if (!tabsWrap || !grid) return;

  let active = MENU_TABS[0];

  const renderGrid = () => {
    grid.replaceChildren();
    (MENU_ITEMS[active] || []).forEach((it) => {
      const row = el("article", { className: "menu-row" });

      if (it.img) {
        const thumb = el("div", { className: "menu-row-thumb" });
        thumb.append(el("img", { src: it.img, alt: it.name, loading: "lazy" }));
        row.append(thumb);
      } else {
        const label = it.name.split(" ").slice(0, 2).join(" ");
        row.append(el("div", { className: "menu-row-thumb placeholder", textContent: label, ariaLabel: it.name }));
      }

      const mid = el("div");
      mid.append(el("h3", { className: "menu-row-name", textContent: it.name }));
      mid.append(el("p", { className: "menu-row-desc", textContent: it.desc }));
      if (it.badges.length) {
        const badges = el("div", { className: "menu-row-badges" });
        it.badges.forEach((b) => badges.append(el("span", { className: `badge ${b}`, textContent: b })));
        mid.append(badges);
      }
      row.append(mid);

      const actions = el("div", { className: "menu-row-actions" });
      actions.append(el("div", { className: "menu-row-price", textContent: `₹${it.price}` }));
      const reserve = el("button", { className: "menu-reserve-btn", type: "button", textContent: "+ Reserve" });
      reserve.addEventListener("click", () => showToast(`Added — ${it.name}`));
      actions.append(reserve);
      row.append(actions);

      grid.append(row);
    });
  };

  MENU_TABS.forEach((t) => {
    const btn = el("button", { className: "menu-tab", textContent: t });
    if (t === active) btn.classList.add("active");
    btn.addEventListener("click", () => {
      active = t;
      $$(".menu-tab", tabsWrap).forEach((b) => b.classList.toggle("active", b.textContent === t));
      renderGrid();
    });
    tabsWrap.append(btn);
  });

  renderGrid();
}

/* ---------- Gallery + lightbox ---------- */
function initGallery() {
  const grid = $("#gallery-grid");
  if (!grid) return;

  GALLERY_IMAGES.forEach((g, i) => {
    const item = el("div", {
      className: `gallery-item ${g.layout}`.trim(),
      role: "button",
      tabIndex: 0
    });
    item.append(el("img", { src: g.src, alt: g.title, loading: "lazy" }));
    item.addEventListener("click", () => openLightbox(i));
    item.addEventListener("keydown", (e) => { if (e.key === "Enter") openLightbox(i); });
    grid.append(item);
  });

  const box = $("#lightbox");
  const img = $("#lb-img");
  const meta = $("#lb-meta");
  let idx = null;

  function openLightbox(i) {
    idx = i;
    paint();
    box.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close() {
    idx = null;
    box.hidden = true;
    document.body.style.overflow = "";
  }
  function step(d) {
    if (idx == null) return;
    idx = (idx + d + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    paint();
  }
  function paint() {
    const g = GALLERY_IMAGES[idx];
    img.src = g.src;
    img.alt = g.title;
    meta.textContent = `Frame ${String(idx + 1).padStart(2, "0")} / ${String(GALLERY_IMAGES.length).padStart(2, "0")} · ${g.title}`;
  }

  box.addEventListener("click", close);
  $("#lb-close").addEventListener("click", (e) => { e.stopPropagation(); close(); });
  $("#lb-prev").addEventListener("click", (e) => { e.stopPropagation(); step(-1); });
  $("#lb-next").addEventListener("click", (e) => { e.stopPropagation(); step(1); });
  img.addEventListener("click", (e) => e.stopPropagation());
  window.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

/* ---------- Reserve (seat map) ---------- */
function initReserve() {
  const form = $("#reserve-form");
  if (!form) return;

  const ROWS = 6, COLS = 8;
  const taken = new Set([2, 5, 9, 11, 17, 18, 21, 28, 33, 36, 40, 42, 47]);
  const map = $("#seat-map");
  const seatLabelEl = $("#seat-label");
  const submitLabel = $("#res-submit-label");

  const state = { seat: null, date: "", time: "20:00", party: 2, name: "", phone: "" };

  const seatName = (i) => `${String.fromCharCode(65 + Math.floor(i / COLS))}${(i % COLS) + 1}`;

  // build seats (the .seat.screen is already in markup as first child)
  for (let i = 0; i < ROWS * COLS; i++) {
    const seat = el("div", {
      className: "seat" + (taken.has(i) ? " taken" : ""),
      title: `Row ${String.fromCharCode(65 + Math.floor(i / COLS))} · Seat ${(i % COLS) + 1}`
    });
    if (!taken.has(i)) {
      seat.addEventListener("click", () => {
        state.seat = i;
        $$(".seat", map).forEach((s) => s.classList.remove("selected"));
        seat.classList.add("selected");
        update();
      });
    }
    map.append(seat);
  }

  const canSubmit = () => !!state.date && !!state.name && state.phone.length >= 7;

  function update() {
    const label = state.seat == null ? "—" : seatName(state.seat);
    seatLabelEl.textContent = label;
    submitLabel.textContent = canSubmit()
      ? `Book ${label} for ${state.party}`
      : "Fill in the details";
  }

  $("#res-date").addEventListener("input", (e) => { state.date = e.target.value; update(); });
  $("#res-time").addEventListener("change", (e) => { state.time = e.target.value; });
  $("#res-phone").addEventListener("input", (e) => { state.phone = e.target.value; update(); });
  $("#res-name").addEventListener("input", (e) => { state.name = e.target.value; update(); });
  $("#party-dec").addEventListener("click", () => { state.party = Math.max(1, state.party - 1); $("#party-val").textContent = state.party; update(); });
  $("#party-inc").addEventListener("click", () => { state.party = Math.min(12, state.party + 1); $("#party-val").textContent = state.party; update(); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!canSubmit()) return;
    const label = state.seat == null ? "—" : seatName(state.seat);
    showToast(`Seat ${label} booked · ${state.date} ${state.time}`);
  });

  update();
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(message) {
  const root = $("#toast-root");
  root.replaceChildren();
  const toast = el("div", { className: "toast" });
  toast.append(el("span", { className: "check", textContent: "●" }));
  toast.append(el("span", { textContent: message }));
  root.append(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => root.replaceChildren(), 3200);
}
