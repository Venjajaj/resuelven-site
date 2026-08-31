
const WA_NUMBER = "5493425973885";
const I18N = {
  en: {
    _title: "resuelven™ · Digital-native productions and hybrid shoots",
    _desc: "Audiovisual production company. We develop digital-native productions and hybrid shoots: teasers, trailers and scenes for film, campaign and pitch.",
    _wa: "Hey, Resuelven! I'd like to know more.",
    nav_work: "Work",
    nav_services: "Services",
    cta_chat: "Let's chat",
    cta_work: "See our work",
    flash_label: "Flashlight",
    hero_kicker: "HYBRID AUDIOVISUAL PRODUCTION",
    hero_title: "Your Vision.<br>Our Venue.",
    hero_sub: "We use creativity, judgment and technology to turn ideas, stories and visions into pieces ready for pitch, campaign or screen. We work as technical-creative allies to projects, agencies and production companies around the world.",
    work_kicker: "LAST WORK",
    work_more: "Show all projects",
    work_less: "Show less",
    cat_all: "All",
    cat_ficcion: "Fiction",
    cat_animacion: "Animation",
    cat_publicidad: "Advertising",
    services_kicker: "WHAT WE DO",
    studio_lead: "We develop digital-native productions and hybrid shoots, adapting the production to the creative vision, the budget and the time available.",
    studio_ai_title: "Digital-native production",
    studio_ai_desc: "Pieces built entirely with generative tools. It's the route when shooting isn't an option: an era with no record, a creature that doesn't exist, a world that still lives only in the script. It lets a project exist before there's a budget to shoot it.",
    studio_hy_title: "Hybrid shoot",
    studio_hy_desc: "We shoot, then extend that footage past where production stops: another scale, another era, another world. It lets a small shoot carry a big story.",
    philo_title: "The tool follows the project. The judgment is always human.",
    philo_desc: "Real camera, generation, or both combined: we work with whatever each story needs, without marrying any platform.",
    svc1_title: "Pre-production",
    svc1_desc: "Storyboards, animatics and previz to plan teasers, trailers and scenes before shooting or generating.",
    svc2_title: "Production",
    svc2_desc: "Teasers, trailers and scenes with a hybrid pipeline: generative AI woven into real footage.",
    svc3_title: "Post-production",
    svc3_desc: "Editing, color grading, motion graphics, captions, voiceover and sound design for every piece.",
    footer_title: "Got a project?<br>Let's make it move.",
    contact1_title: "New project",
    contact1_desc: "Tell us what you're making and your timeline. We reply fast.",
    contact2_title: "Production companies & agencies",
    contact2_desc: "Hybrid pipeline for your teasers, trailers or campaigns. We work as a technical-creative ally.",
    contact3_title: "Join the team",
    contact3_desc: "Work in the audiovisual industry and want to collaborate with Resuelven?",
    footer_note: "© Resuelven. All rights reserved.",
  },
  es: {
    _title: "resuelven™ · Producciones nativas digitales y rodajes híbridos",
    _desc: "Productora audiovisual. Desarrollamos producciones nativas digitales y rodajes híbridos: teasers, trailers y escenas para cine, campaña y pitch.",
    _wa: "¡Hola, Resuelven! Quiero saber más.",
    nav_work: "Trabajos",
    nav_services: "Servicios",
    cta_chat: "Hablemos",
    cta_work: "Ver trabajos",
    flash_label: "Linterna",
    hero_kicker: "PRODUCTORA AUDIOVISUAL HÍBRIDA",
    hero_title: "Tu visión.<br>Nuestro escenario.",
    hero_sub: "Usamos la creatividad, el criterio y la tecnología para convertir ideas, historias y visiones en piezas listas para pitch, campaña o pantalla. Trabajamos como aliados técnico-creativos de proyectos, agencias y productoras alrededor del mundo.",
    work_kicker: "ÚLTIMOS TRABAJOS",
    work_more: "Ver todos los proyectos",
    work_less: "Ver menos",
    cat_all: "Todos",
    cat_ficcion: "Ficción",
    cat_animacion: "Animación",
    cat_publicidad: "Publicidad",
    services_kicker: "QUÉ HACEMOS",
    studio_lead: "Desarrollamos producciones nativas digitales y rodajes híbridos, adaptando la producción a la visión creativa, el presupuesto y el tiempo disponible.",
    studio_ai_title: "Producción nativa digital",
    studio_ai_desc: "Piezas construidas enteramente con herramientas generativas. Es el camino cuando filmar no es una opción: una época sin registro, una criatura que no existe, un mundo que todavía está solo en el guion. Permite que un proyecto exista antes de tener con qué filmarlo.",
    studio_hy_title: "Rodaje híbrido",
    studio_hy_desc: "Filmamos, y después extendemos lo filmado hasta donde la producción no llega: otra escala, otra época, otro mundo. Permite que un rodaje chico sostenga una historia grande.",
    philo_title: "La herramienta la elige el proyecto. El criterio siempre es humano.",
    philo_desc: "Cámara real, generación, o las dos combinadas: trabajamos con lo que cada historia necesita, sin casarnos con ninguna plataforma.",
    svc1_title: "Preproducción",
    svc1_desc: "Storyboards, animatics y previz para planificar teasers, trailers y escenas antes de rodar o generar.",
    svc2_title: "Producción",
    svc2_desc: "Teasers, trailers y escenas con pipeline híbrido: IA generativa integrada con material real.",
    svc3_title: "Postproducción",
    svc3_desc: "Edición, corrección de color, motion graphics, subtítulos, locuciones y diseño sonoro para cada pieza.",
    footer_title: "¿Tenés un proyecto?<br>Hagamos que se mueva.",
    contact1_title: "Nuevo proyecto",
    contact1_desc: "Contanos qué estás armando y con qué timeline. Te respondemos rápido.",
    contact2_title: "Productoras y agencias",
    contact2_desc: "Pipeline híbrido para tus teasers, trailers o campañas. Trabajamos como aliados técnico-creativos.",
    contact3_title: "Sumate al equipo",
    contact3_desc: "¿Trabajás en la industria audiovisual y querés colaborar con Resuelven?",
    footer_note: "© Resuelven. Todos los derechos reservados.",
  },
};
const TYPE_LABELS = {
  en: { teaser: "Pitch teaser", trailer: "Trailer", cortometraje: "Short film", ad: "Commercial", scene: "Scene", scenetest: "Scene test", pitchscene: "Pitch scene", herovideo: "Hero video", corporate: "Corporate video", longform: "Long-form ad", animseries: "Animated series", promo: "Promo intro" },
  es: { teaser: "Pitch teaser", trailer: "Trailer", cortometraje: "Cortometraje", ad: "Publicidad", scene: "Escena", scenetest: "Scene test", pitchscene: "Pitch scene", herovideo: "Hero video", corporate: "Video corporativo", longform: "Long-form ad", animseries: "Serie animada", promo: "Intro promocional" },
};
const COUNTRY_LABELS = {
  en: { usa: "USA", uk: "UK", canada: "Canada", greece: "Greece", argentina: "Argentina", dubai: "Dubai" },
  es: { usa: "EE.UU.", uk: "Reino Unido", canada: "Canadá", greece: "Grecia", argentina: "Argentina", dubai: "Dubái" },
};
const ROLE_LABELS = {
  en: { guion: "Screenwriting", scriptdev: "Script development", direccion: "Direction", dof: "Cinematography", genanim: "Generative animation", genai: "AI generation", genvideo: "Video generation", genimg: "Image & video generation", edit: "Editing", sound: "Sound design", concept: "Concept development", sboards: "Storyboards", animatics: "Animatics", chardev: "Character visual development", vo: "Voice over", mograph: "Motion graphics", dlock: "Dialogue locking", oneshot: "One-shot direction" },
  es: { guion: "Guion", scriptdev: "Desarrollo de guion", direccion: "Dirección", dof: "Dirección de fotografía", genanim: "Animación generativa", genai: "Generación con IA", genvideo: "Generación de video", genimg: "Generación de imágenes y video", edit: "Montaje", sound: "Diseño sonoro", concept: "Desarrollo de concepto", sboards: "Storyboards", animatics: "Animatics", chardev: "Desarrollo visual de personaje", vo: "Voice over", mograph: "Motion graphics", dlock: "Sincronización de diálogos", oneshot: "Realización one-shot" },
};
const CATS_CYCLE = ["ficcion", "animacion", "publicidad"];
let lang = localStorage.getItem("resuelven_lang") || "es";
const urlLang = new URLSearchParams(location.search).get("lang");
if (urlLang === "en" || urlLang === "es") lang = urlLang;
function applyTexts() {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.title = dict._title;
  document.querySelector('meta[name="description"]').setAttribute("content", dict._desc);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  // WhatsApp links with language-specific prefilled message
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dict._wa)}`;
  document.querySelectorAll(".wa-link").forEach((a) => (a.href = waUrl));
  // "show more" button label
  const grid = document.getElementById("workgrid");
  const moreBtnLabel = document.querySelector("#moreWork span");
  if (moreBtnLabel) moreBtnLabel.textContent = grid.classList.contains("expanded") ? dict.work_less : dict.work_more;
  // filter pill labels + fichas de creditos
  if (typeof renderFilterPills === "function") renderFilterPills();
  if (typeof renderWorkCaptions === "function") renderWorkCaptions();
  // pill state
  const pill = document.getElementById("langpill");
  pill.classList.toggle("es", lang === "es");
  pill.querySelectorAll(".langpill__opt").forEach((o) => o.classList.toggle("active", o.dataset.lang === lang));
}
function setLang(next, animate = true) {
  if (next === lang) return;
  lang = next;
  localStorage.setItem("resuelven_lang", lang);
  if (!animate) { applyTexts(); return; }
  document.body.classList.add("lang-out");
  setTimeout(() => {
    applyTexts();
    document.body.classList.remove("lang-out");
  }, 230);
}
document.getElementById("langpill").addEventListener("click", () => {
  setLang(lang === "en" ? "es" : "en");
});
const grid = document.getElementById("workgrid");
const filterWrap = document.getElementById("workfilter");
const moreBtn = document.getElementById("moreWork");
let activeCat = "all";
const lightbox = document.getElementById("lightbox");
const lightboxMedia = document.getElementById("lightboxMedia");
function openLightbox(card) {
  const d = card.dataset;
  if (d.media === "video") {
    lightboxMedia.innerHTML = `<video src="${d.src}" ${d.poster ? `poster="${d.poster}"` : ""} controls controlsList="nofullscreen" disablePictureInPicture autoplay playsinline></video>`;
  } else {
    lightboxMedia.innerHTML = `<iframe src="${d.src}" allow="autoplay"></iframe>`;
  }
  lightbox.classList.add("open");
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxMedia.innerHTML = "";
}
lightbox.querySelector(".lightbox__backdrop").addEventListener("click", closeLightbox);
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
addEventListener("keydown", (e) => { if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox(); });
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement && lightboxMedia.contains(document.fullscreenElement)) document.exitFullscreen();
});
// Las fichas viven en el HTML para que las lean los buscadores; aca solo se traducen
// los creditos y se cablea el lightbox.
function workCaption(d) {
  const t = d.fmt ? TYPE_LABELS[lang][d.fmt] : "";
  const c = d.country ? COUNTRY_LABELS[lang][d.country] : "";
  return [t, d.client, c].filter(Boolean).join(" · ");
}
function renderWorkCaptions() {
  document.querySelectorAll(".work").forEach((card) => {
    const d = card.dataset;
    card.querySelector(".work__meta").textContent = workCaption(d);
    card.querySelector(".work__roles").textContent = (d.roles ? d.roles.split(",") : [])
      .map((r) => ROLE_LABELS[lang][r])
      .join(" · ");
  });
}
grid.querySelectorAll(".work").forEach((card) => {
  card.querySelector(".work__media").addEventListener("click", () => openLightbox(card));
});
renderWorkCaptions();
function renderFilterPills() {
  const dict = I18N[lang];
  const cats = ["all", ...CATS_CYCLE];
  filterWrap.innerHTML = cats
    .map((c) => `<button class="workfilter__pill${c === activeCat ? " active" : ""}" data-cat="${c}">${dict[`cat_${c}`]}</button>`)
    .join("");
  filterWrap.querySelectorAll(".workfilter__pill").forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.cat));
  });
}
function applyFilter(cat) {
  activeCat = cat;
  filterWrap.querySelectorAll(".workfilter__pill").forEach((btn) => btn.classList.toggle("active", btn.dataset.cat === cat));
  const cards = [...grid.children];
  const first = new Map(cards.map((el) => [el, el.getBoundingClientRect()]));
  moreBtn.parentElement.style.display = cat === "all" ? "" : "none";
  cards.forEach((el) => {
    if (cat === "all") {
      el.style.display = "";
      el.classList.toggle("work--hidden", el.dataset.hiddenByMore === "true" && !grid.classList.contains("expanded"));
    } else {
      el.classList.remove("work--hidden");
      el.style.display = el.dataset.cat === cat ? "" : "none";
    }
  });
  requestAnimationFrame(() => {
    cards.forEach((el) => {
      if (el.style.display === "none") return;
      const f = first.get(el);
      const l = el.getBoundingClientRect();
      const dx = f.left - l.left;
      const dy = f.top - l.top;
      if (dx || dy) {
        el.style.transition = "none";
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        requestAnimationFrame(() => {
          el.style.transition = "transform .45s cubic-bezier(.2,.8,.2,1)";
          el.style.transform = "";
        });
      }
    });
  });
}
moreBtn.addEventListener("click", () => {
  grid.classList.toggle("expanded");
  const dict = I18N[lang];
  document.querySelector("#moreWork span").textContent =
    grid.classList.contains("expanded") ? dict.work_less : dict.work_more;
  grid.querySelectorAll(".work--hidden").forEach((el) => el.classList.add("visible"));
});
renderFilterPills();
const heroEl = document.querySelector(".hero");
const heroBg = document.querySelector(".hero__bg");
let hmx = 0, hmy = 0, heroTick = false;
function heroFrame() {
  heroTick = false;
  const sy = Math.min(window.scrollY, window.innerHeight);
  heroBg.style.transform = `translate3d(${hmx}px, ${sy * 0.28 + hmy}px, 0) scale(1.08)`;
}
function heroQueue() { if (!heroTick) { heroTick = true; requestAnimationFrame(heroFrame); } }
addEventListener("scroll", heroQueue, { passive: true });
heroEl.addEventListener("mousemove", (e) => {
  hmx = (e.clientX / window.innerWidth - 0.5) * -16;
  hmy = (e.clientY / window.innerHeight - 0.5) * -10;
  heroQueue();
});
heroEl.addEventListener("mouseleave", () => { hmx = 0; hmy = 0; heroQueue(); });
heroEl.classList.add("flash-on");
const flashBtn = document.getElementById("flashBtn");
if (flashBtn) {
  flashBtn.addEventListener("click", () => {
    const on = heroEl.classList.toggle("flash-on");
    flashBtn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  heroEl.addEventListener("pointermove", (e) => {
    if (!heroEl.classList.contains("flash-on")) return;
    const r = heroEl.getBoundingClientRect();
    heroEl.style.setProperty("--fx", (e.clientX - r.left) + "px");
    heroEl.style.setProperty("--fy", (e.clientY - r.top) + "px");
  }, { passive: true });
}
const navEl = document.getElementById("nav");
addEventListener("scroll", () => navEl.classList.toggle("scrolled", scrollY > 30), { passive: true });
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav__links");
burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll(".svc-item, .work, .contact-item, .section__head").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
// los videos de los dos bloques de metodo: no se descargan hasta que entran en pantalla,
// arrancan solos en silencio y se pausan al salir
const studioVids = document.querySelectorAll(".studio-col__vid");
if (studioVids.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const vio = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) { v.play().catch(() => {}); }
      else if (!v.paused) { v.pause(); }
    }),
    { threshold: 0.35 }
  );
  studioVids.forEach((v) => vio.observe(v));
}
applyTexts();
(function opener() {
  const el = document.getElementById("opener");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen = sessionStorage.getItem("resuelven_opener");
  if (!el) { document.body.classList.add("ready"); return; }
  if (seen || reduce) {
    el.classList.add("opener--skip");
    document.body.classList.add("ready");
    return;
  }
  sessionStorage.setItem("resuelven_opener", "1");
  // el opener se autooculta por CSS (openerOut a los 3s); disparamos "ready" al iniciar su salida
  setTimeout(() => document.body.classList.add("ready"), 3000);
  setTimeout(() => { el.style.display = "none"; }, 3850);
})();
