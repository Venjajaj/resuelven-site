
const WA_NUMBER = "5493425973885";
// El titulo del hero es una sola palabra: "re" queda fijo y cambia el resto (resuelven,
// revuelven, redoblan...). Aca va lo que sigue despues de "re". Para sumar o sacar palabras
// se toca solo esta lista; la primera es la de la marca.
const HERO_TAILS = ["suelven", "vuelven", "doblan", "velan", "crean", "montan", "inventan", "nuevan", "escriben", "encuadran", "tocan", "viven", "latan", "gistran"];
const HERO_TITLE = '<span class="hero__line"><span>re<span class="hero__roll" aria-hidden="true"><span class="hero__tail">suelven</span></span></span></span>';
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
    hero_kicker: "AUDIOVISUAL PRODUCTION COMPANY",
    hero_title: HERO_TITLE,
    hero_now: "On screen",
    hero_sub: "We turn ideas, stories and visions into pieces ready for pitch, campaign or screen. We work as technical-creative allies to projects, agencies and production companies around the world.",
    work_kicker: "Work",
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
    svc1_desc: "Storyboards, animatics and previz. This is where we decide what gets shot and what gets generated, before that decision costs a shooting day.",
    svc2_title: "Production",
    svc2_desc: "Teasers, trailers and scenes. Shot, generated, or both within the same piece. The decision is made shot by shot, not project by project.",
    svc3_title: "Post-production",
    svc3_desc: "Editing, VFX, color grading, motion graphics, captions, voiceover and sound design. This is where everything ends up looking like it came from the same camera, whether it was shot or rendered.",
    footer_title: "Got a project?<br>Let's make it move.",
    contact1_title: "New project",
    contact1_desc: "Tell us what you're making and your timeline. We reply fast.",
    contact2_title: "Production companies & agencies",
    contact2_desc: "Shot, generated, or both for your teasers, trailers or campaigns. We work as a technical-creative ally.",
    contact3_title: "Join the team",
    contact3_desc: "Work in the audiovisual industry and want to collaborate with Resuelven?",
    footer_note: "© Resuelven. All rights reserved.",
    lb_close: "Close",
    lb_prev: "Previous project",
    lb_next: "Next project",
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
    hero_kicker: "PRODUCTORA AUDIOVISUAL",
    hero_title: HERO_TITLE,
    hero_now: "En pantalla",
    hero_sub: "Convertimos ideas, historias y visiones en piezas listas para pitch, campaña o pantalla. Trabajamos como aliados técnico-creativos de proyectos, agencias y productoras alrededor del mundo.",
    work_kicker: "Trabajos",
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
    svc1_desc: "Storyboards, animatics y previz. Acá se decide qué se filma y qué se genera, antes de que esa decisión cueste un día de rodaje.",
    svc2_title: "Producción",
    svc2_desc: "Teasers, trailers y escenas. Rodaje, generación, o las dos cosas en la misma pieza. La decisión es por plano, no por proyecto.",
    svc3_title: "Postproducción",
    svc3_desc: "Edición, VFX, corrección de color, motion graphics, subtítulos, locuciones y diseño sonoro. Es donde todo termina pareciendo filmado por la misma cámara, venga de cámara o de render.",
    footer_title: "¿Tenés un proyecto?<br>Hagamos que se mueva.",
    contact1_title: "Nuevo proyecto",
    contact1_desc: "Contanos qué estás armando y con qué timeline. Te respondemos rápido.",
    contact2_title: "Productoras y agencias",
    contact2_desc: "Rodaje, generación, o las dos cosas para tus teasers, trailers o campañas. Trabajamos como aliados técnico-creativos.",
    contact3_title: "Sumate al equipo",
    contact3_desc: "¿Trabajás en la industria audiovisual y querés colaborar con Resuelven?",
    footer_note: "© Resuelven. Todos los derechos reservados.",
    lb_close: "Cerrar",
    lb_prev: "Proyecto anterior",
    lb_next: "Proyecto siguiente",
  },
};
const TYPE_LABELS = {
  en: { teaser: "Pitch teaser", trailer: "Trailer", cortometraje: "Short film", ad: "Commercial", scene: "Scene", scenetest: "Scene test", pitchscene: "Pitch scene", herovideo: "Hero video", corporate: "Corporate video", longform: "Long-form ad", animseries: "Animated series", promo: "Promo intro", socialcine: "Social media cinematic", vseries: "Vertical series" },
  es: { teaser: "Pitch teaser", trailer: "Trailer", cortometraje: "Cortometraje", ad: "Publicidad", scene: "Escena", scenetest: "Scene test", pitchscene: "Pitch scene", herovideo: "Hero video", corporate: "Video corporativo", longform: "Long-form ad", animseries: "Serie animada", promo: "Intro promocional", socialcine: "Cinematic para redes", vseries: "Serie vertical" },
};
const COUNTRY_LABELS = {
  en: { usa: "USA", uk: "UK", canada: "Canada", greece: "Greece", argentina: "Argentina", dubai: "Dubai" },
  es: { usa: "EE.UU.", uk: "Reino Unido", canada: "Canadá", greece: "Grecia", argentina: "Argentina", dubai: "Dubái" },
};
const ROLE_LABELS = {
  en: { guion: "Screenwriting", scriptdev: "Script development", direccion: "Direction", dof: "Cinematography", genanim: "Generative animation", genai: "AI generation", genvideo: "Video generation", genimg: "Image & video generation", edit: "Editing", sound: "Sound design", concept: "Concept development", sboards: "Storyboards", animatics: "Animatics", chardev: "Character visual development", vo: "Voice over", mograph: "Motion graphics", dlock: "Dialogue locking", oneshot: "One-shot direction", color: "Color grading", visualdir: "Character and location visual direction", adapt: "Book adaptation", integral: "End-to-end production" },
  es: { guion: "Guion", scriptdev: "Desarrollo de guion", direccion: "Dirección", dof: "Dirección de fotografía", genanim: "Animación generativa", genai: "Generación con IA", genvideo: "Generación de video", genimg: "Generación de imágenes y video", edit: "Montaje", sound: "Diseño sonoro", concept: "Desarrollo de concepto", sboards: "Storyboards", animatics: "Animatics", chardev: "Desarrollo visual de personaje", vo: "Voice over", mograph: "Motion graphics", dlock: "Sincronización de diálogos", oneshot: "Realización one-shot", color: "Corrección de color", visualdir: "Dirección visual de personajes y locación", adapt: "Adaptación del libro", integral: "Realización integral" },
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
  // etiquetas del lightbox para lectores de pantalla
  [["lightboxClose", "lb_close"], ["lightboxPrev", "lb_prev"], ["lightboxNext", "lb_next"]].forEach(([id, key]) => {
    document.getElementById(id)?.setAttribute("aria-label", dict[key]);
  });
  // pill state
  const pill = document.getElementById("langpill");
  pill.classList.toggle("es", lang === "es");
  pill.querySelectorAll(".langpill__opt").forEach((o) => o.classList.toggle("active", o.dataset.lang === lang));
}
function setLang(next, animate = true) {
  if (next === lang) return;
  lang = next;
  localStorage.setItem("resuelven_lang", lang);
  window.medir?.("idioma", { a: lang });
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
let lightboxCard = null;
let lightboxReturn = null;
// las fichas que se ven ahora mismo, en el orden de la galeria (respeta filtro y "ver todos")
function lightboxList() {
  return [...grid.querySelectorAll(".work")].filter((el) => el.offsetParent !== null);
}
function openLightbox(card) {
  const d = card.dataset;
  if (!lightbox.classList.contains("open")) lightboxReturn = document.activeElement;
  lightboxCard = card;
  lightbox.style.setProperty("--ar", card.style.getPropertyValue("--ar") || "1.778");
  if (d.media === "video") {
    lightboxMedia.innerHTML = `<video src="${d.src}" ${d.poster ? `poster="${d.poster}"` : ""} controls controlsList="nofullscreen" disablePictureInPicture autoplay playsinline></video>`;
  } else {
    lightboxMedia.innerHTML = `<iframe src="${d.src}" allow="autoplay"></iframe>`;
  }
  document.getElementById("lightboxTitle").textContent = card.querySelector(".work__title")?.textContent.trim() || "";
  document.getElementById("lightboxMeta").textContent = card.querySelector(".work__meta")?.textContent || "";
  document.getElementById("lightboxRoles").textContent = card.querySelector(".work__roles")?.textContent || "";
  const list = lightboxList();
  const i = list.indexOf(card);
  document.getElementById("lightboxCount").textContent = i >= 0 ? `${i + 1} / ${list.length}` : "";
  lightbox.querySelector(".lightbox__nav").hidden = list.length < 2;
  lightbox.classList.add("open");
  if (!lightbox.contains(document.activeElement)) document.getElementById("lightboxClose").focus();
  window.medir?.("trabajo_abierto", { trabajo: card.querySelector(".work__title")?.textContent.trim() || d.src });
}
function stepLightbox(dir) {
  const list = lightboxList();
  if (list.length < 2) return;
  const i = list.indexOf(lightboxCard);
  openLightbox(list[(i + dir + list.length) % list.length]);
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxMedia.innerHTML = "";
  lightboxCard = null;
  lightboxReturn?.focus?.();
  lightboxReturn = null;
}
lightbox.querySelector(".lightbox__backdrop").addEventListener("click", closeLightbox);
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));
addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  // con el foco en el video las flechas son del reproductor (adelantar y retroceder)
  else if (e.target.tagName === "VIDEO") return;
  else if (e.key === "ArrowRight") stepLightbox(1);
  else if (e.key === "ArrowLeft") stepLightbox(-1);
});
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement && lightboxMedia.contains(document.fullscreenElement)) document.exitFullscreen();
});
// Las fichas viven en el HTML para que las lean los buscadores; aca solo se traducen
// los creditos y se cablea el lightbox.
function workCaption(d) {
  const t = d.fmt ? TYPE_LABELS[lang][d.fmt] : "";
  const c = d.country ? COUNTRY_LABELS[lang][d.country] : "";
  return [t, d.client, c].filter(Boolean).join(", ");
}
function renderWorkCaptions() {
  document.querySelectorAll(".work").forEach((card) => {
    const d = card.dataset;
    card.querySelector(".work__meta").textContent = workCaption(d);
    // como en los creditos: una frase, con mayuscula solo al principio
    card.querySelector(".work__roles").textContent = (d.roles ? d.roles.split(",") : [])
      .map((r, i) => { const s = ROLE_LABELS[lang][r]; return i && !/^[A-Z]{2}/.test(s) ? s[0].toLowerCase() + s.slice(1) : s; })
      .join(", ");
  });
}
grid.querySelectorAll(".work").forEach((card) => {
  card.querySelector(".work__media").addEventListener("click", () => openLightbox(card));
});
renderWorkCaptions();
// preview en movimiento al pasar el mouse: un clip mudo de 6 segundos por pieza, en
// assets/previews/ con el mismo nombre que el video. Se descarga recien en el primer hover.
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  grid.querySelectorAll('.work[data-media="video"]').forEach((card) => {
    const media = card.querySelector(".work__media");
    let v = null, dead = false, over = false, timer = 0;
    media.addEventListener("pointerenter", () => {
      over = true;
      // una pasada rapida del mouse por encima no dispara la descarga
      timer = setTimeout(() => {
        if (dead) return;
        if (!v) {
          v = document.createElement("video");
          v.className = "work__preview";
          v.muted = true; v.loop = true; v.playsInline = true; v.preload = "auto";
          v.setAttribute("aria-hidden", "true");
          v.addEventListener("playing", () => { if (over) media.classList.add("previewing"); });
          v.addEventListener("error", () => { dead = true; v.remove(); media.classList.remove("previewing"); });
          v.src = card.dataset.src.replace("assets/videos/", "assets/previews/");
          media.appendChild(v);
        }
        v.play().catch(() => {});
      }, 140);
    });
    media.addEventListener("pointerleave", () => {
      over = false;
      clearTimeout(timer);
      media.classList.remove("previewing");
      if (v && !dead) v.pause();
    });
  });
}
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
const navEl = document.getElementById("nav");
addEventListener("scroll", () => navEl.classList.toggle("scrolled", scrollY > 30), { passive: true });
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav__links");
burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));
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
// La linea de montaje del hero: un bloque por plano del reel, del ancho de su duracion.
// Muestra que pieza esta en pantalla, deja saltar a cualquier plano y abre la pieza.
// Los tiempos son los cortes reales de assets/videos/reel.mp4 (el orden esta en
// branding/reel-planos.txt). Si se rearma el reel, hay que rehacer esta lista.
(function heroCue() {
  const video = document.querySelector(".hero__bg");
  const cue = document.getElementById("heroCue");
  const track = document.getElementById("heroTrack");
  const now = document.getElementById("heroNow");
  const nowTitle = document.getElementById("heroNowTitle");
  if (!video || !cue) return;
  const END = 44.375;
  // [segundo en que arranca el plano, pieza]; "" es un plano que no esta en la galeria
  const SHOTS = [
    [0, ""], [2.417, "villamoises"], [4.25, "prologue"], [6.25, "video09"], [8.75, "video17"],
    [11.583, "prologue"], [12.708, "coolerkid-portfolio"], [14.333, "video10"], [16.125, "kodex1"],
    [17.958, "prologue"], [20.083, "video19"], [21.292, "prologue"], [23.125, "prologue"],
    [25.125, "coolerkid-portfolio"], [26.333, "coolerkid-portfolio"], [27.958, "drive.google"],
    [29.667, "drive.google"], [31.375, "drive.google"], [34.375, "prologue"], [36.375, ""],
    [38.375, "villamoises"], [40.375, "prologue"], [42.375, "villamoises"],
  ];
  const cardOf = (key) => key ? [...grid.querySelectorAll(".work")].find((c) => c.dataset.src.includes(key)) : null;
  const shots = SHOTS.map(([start, key], i) => {
    const end = i + 1 < SHOTS.length ? SHOTS[i + 1][0] : END;
    const seg = document.createElement("button");
    seg.type = "button";
    seg.tabIndex = -1;
    seg.className = "hero__seg";
    seg.style.flexGrow = (end - start).toFixed(3);
    seg.innerHTML = "<i></i>";
    track.appendChild(seg);
    return { start, end, card: cardOf(key), seg, fill: seg.firstChild };
  });
  let current = -1, hovered = -1;
  const titleOf = (i) => shots[i]?.card?.querySelector(".work__title")?.textContent.trim() || "";
  function showTitle() {
    const t = titleOf(hovered >= 0 ? hovered : current);
    nowTitle.textContent = t;
    now.classList.toggle("empty", !t);
    now.tabIndex = t ? 0 : -1;
  }
  shots.forEach((sh, i) => {
    sh.seg.addEventListener("pointerenter", () => { hovered = i; showTitle(); });
    sh.seg.addEventListener("pointerleave", () => { hovered = -1; showTitle(); });
    sh.seg.addEventListener("click", () => {
      video.currentTime = sh.start + 0.02;
      video.play().catch(() => {});
    });
  });
  now.addEventListener("click", () => {
    const card = shots[current]?.card;
    if (card) openLightbox(card);
  });
  function tick() {
    const t = video.currentTime;
    let i = shots.findIndex((sh) => t < sh.end);
    if (i < 0) i = shots.length - 1;
    if (i !== current) {
      current = i;
      shots.forEach((sh, k) => {
        sh.seg.classList.toggle("on", k === i);
        if (k !== i) sh.fill.style.transform = `scaleX(${k < i ? 1 : 0})`;
      });
      if (hovered < 0) showTitle();
      document.dispatchEvent(new CustomEvent("reelcut"));
    }
    const sh = shots[i];
    sh.fill.style.transform = `scaleX(${Math.min(1, Math.max(0, (t - sh.start) / (sh.end - sh.start))).toFixed(4)})`;
    requestAnimationFrame(tick);
  }
  cue.hidden = false;
  requestAnimationFrame(tick);
  // el reel no compite con el video del lightbox
  new MutationObserver(() => {
    if (lightbox.classList.contains("open")) video.pause();
    else video.play().catch(() => {});
  }).observe(lightbox, { attributes: true, attributeFilter: ["class"] });
})();
// Un solo efecto, el del logo: la palabra se rompe en cuadrados y la siguiente se resuelve
// desde esos cuadrados. Se dibuja en un canvas encima del texto real. Cada cambio sale
// distinto: el recorrido (barrido, desde el centro, por filas, al azar), la duracion y que
// cuadrados faltan, se corren o salen en azul se sortean en el momento.
(function heroWords() {
  const firstTail = document.querySelector(".hero__tail");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { firstTail?.classList.remove("pre"); return; }
  let bag = [];       // todas las palabras, mezcladas; se rearma cuando se vacia
  let holdUntil = 0;  // la palabra que cayo se queda quieta hasta este momento
  let last = performance.now();
  let busy = true;    // ocupado hasta que termina la entrada
  const canvas = document.createElement("canvas");
  canvas.className = "hero__px";
  canvas.setAttribute("aria-hidden", "true");
  const ctx = canvas.getContext("2d");
  const wait = (ms) => new Promise((ok) => setTimeout(ok, ms));
  const frame = () => new Promise((ok) => requestAnimationFrame(ok));
  const rnd = (a, b, c, d) => { const v = Math.sin(a * 127.1 + b * 311.7 + c * 74.7 + d * 19.19) * 43758.5453; return v - Math.floor(v); };
  const dprNow = () => Math.min(devicePixelRatio || 1, 2);
  // dibuja la palabra fuera de pantalla, en el mismo lugar y con la misma letra que el texto real
  function sample(roll, tail, text) {
    const cs = getComputedStyle(tail);
    const fs = parseFloat(cs.fontSize);
    const k = dprNow();
    const rr = roll.getBoundingClientRect();
    const probe = document.createElement("span");
    probe.style.cssText = "display:inline-block;width:0;height:0;vertical-align:baseline";
    tail.appendChild(probe);
    const base = probe.getBoundingClientRect().top - rr.top;
    probe.remove();
    const up = Math.round(fs * 0.15);
    const fx0 = Math.round(rr.left * k) / k - rr.left, fy0 = Math.round((rr.top - up) * k) / k - (rr.top - up);
    const img = document.createElement("canvas");
    const c2 = img.getContext("2d", { willReadFrequently: true });
    const font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
    c2.font = font;
    if ("letterSpacing" in c2) c2.letterSpacing = cs.letterSpacing;
    const w = Math.ceil(c2.measureText(text).width + fs * 0.2), h = Math.ceil(rr.height + up * 2);
    img.width = Math.max(1, w * k);
    img.height = Math.max(1, h * k);
    c2.scale(k, k);
    c2.font = font;
    if ("letterSpacing" in c2) c2.letterSpacing = cs.letterSpacing;
    c2.fillStyle = "#f2f5f9";
    c2.fillText(text, -fx0, base + up - fy0);
    return { w, h, fs, up, k, img, fx: fx0, fy: fy0, a: c2.getImageData(0, 0, img.width, img.height).data };
  }
  const alpha = (s, x, y) => (x < 0 || y < 0 || x >= s.w || y >= s.h) ? 0 : s.a[(Math.floor(y * s.k) * s.img.width + Math.floor(x * s.k)) * 4 + 3];
  // cuanto tarda en empezar cada zona de la palabra, de 0 a 1, segun el recorrido sorteado
  function delay(mode, mx, my, cols, rows, seed) {
    if (mode === 0) return rnd(mx, my, seed, 1);
    if (mode === 1) return mx / Math.max(1, cols - 1);
    if (mode === 2) return 1 - mx / Math.max(1, cols - 1);
    if (mode === 3) return Math.min(1, Math.abs(mx - (cols - 1) / 2) / ((cols - 1) / 2 || 1));
    return rnd(my, seed, 7, 3);
  }
  // force: si viene, toda la palabra B se pinta con ese tamano de cuadrado (0 fino a 3 grueso).
  // force -1 es el asentado: cada zona pasa del cuadrado fino a la letra nitida, sin volver a romperse.
  // tint: que parte de los cuadrados sale en el azul del logo (alto mientras gira, cero al quedar).
  function render(A, B, p, mode, seed, tick, force, tint = 0) {
    const W = Math.max(A.w, B.w), H = Math.max(A.h, B.h), fs = B.fs, k = dprNow();
    const M = Math.max(16, Math.round(fs / 4 / 8) * 8);
    canvas.width = W * k;
    canvas.height = H * k;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    canvas.style.top = -B.up + "px";
    // corrido para que caiga en pixeles enteros de pantalla: si no, la letra del canvas se ve
    // apenas movida respecto de la real y al cambiar una por otra se nota un salto
    canvas.style.transform = `translate(${B.fx}px, ${B.fy}px)`;
    ctx.setTransform(k, 0, 0, k, 0, 0);
    const cols = Math.ceil(W / M), rows = Math.ceil(H / M);
    for (let my = 0; my < rows; my++) for (let mx = 0; mx < cols; mx++) {
      const settle = force === -1;
      const ph = settle ? (p > delay(mode, mx, my, cols, rows, seed) * 0.85 ? 1 : 0.5)
        : force != null ? 0.5 : Math.min(1, Math.max(0, (p - delay(mode, mx, my, cols, rows, seed) * 0.5) / 0.5));
      const S = force == null && ph < 0.5 ? A : B;
      const x0 = mx * M, y0 = my * M;
      if (ph <= 0 || ph >= 1) {
        // esta zona todavia no empezo o ya termino: va la letra nitida
        if (x0 < S.w && y0 < S.h) ctx.drawImage(S.img, x0 * S.k, y0 * S.k, M * S.k, M * S.k, x0, y0, M, M);
        continue;
      }
      // en el medio del cambio los cuadrados son los mas grandes
      const lvl = settle ? 0 : force != null ? force : Math.min(3, Math.floor((1 - Math.abs(ph * 2 - 1)) * 4));
      const c = M / (8 >> lvl);
      const gap = Math.max(1, c * 0.14);
      for (let y = y0; y < y0 + M; y += c) for (let x = x0; x < x0 + M; x += c) {
        let hit = 0;
        for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) {
          if (alpha(S, x + (i + 0.5) * c / 4, y + (j + 0.5) * c / 4) > 127) hit++;
        }
        const r = rnd(x, y, seed, tick);
        let blue = false;
        if (hit >= 8) {
          if (r < 0.05 * lvl) continue;         // algunos cuadrados faltan
          blue = r > 1 - Math.max(0.07 * lvl, tint);            // y algunos salen en el azul del logo
        } else if (hit >= 3 || (hit >= 1 && lvl >= 2 && r > 0.8)) blue = true;
        else continue;
        ctx.fillStyle = blue ? "rgba(136,172,214,0.9)" : "#f2f5f9";
        // los grandes se corren un poco de la grilla
        const jx = lvl >= 2 ? (rnd(y, x, tick, seed) - 0.5) * c * 0.36 : 0;
        const jy = lvl >= 2 ? (rnd(x, tick, y, seed) - 0.5) * c * 0.36 : 0;
        ctx.fillRect(x + gap / 2 + jx, y + gap / 2 + jy, c - gap, c - gap);
      }
    }
  }
  async function morph(word, opts = {}) {
    // el titulo se reescribe al cambiar de idioma: se busca de nuevo cada vez
    const roll = document.querySelector(".hero__roll");
    const tail = roll?.querySelector(".hero__tail");
    if (!roll || !tail) return;
    busy = true;
    try {
      const A = sample(roll, tail, opts.from ?? tail.textContent);
      tail.style.visibility = "hidden";
      tail.classList.remove("pre");
      tail.textContent = word;
      const B = sample(roll, tail, word);
      roll.appendChild(canvas);
      const seed = Math.random() * 1000;
      const mode = opts.mode ?? Math.floor(Math.random() * 5);
      const dur = opts.dur ?? 200 + Math.random() * 160;
      const t0 = performance.now();
      let tick = -1;
      for (;;) {
        const t = performance.now() - t0;
        // avanza a saltos de 42 ms, como los cuadros del reel
        const now = Math.floor(t / 42);
        if (now !== tick) { tick = now; render(A, B, Math.min(1, t / dur), mode, seed, tick); }
        if (t >= dur || !canvas.isConnected) break;
        await frame();
      }
      tail.style.visibility = "";
    } finally {
      canvas.remove();
      busy = false;
      last = performance.now();
    }
  }
  // Ritmo de tragamonedas: las palabras pasan rapidisimo en cuadrados gruesos, van frenando
  // y afinandose, y la ultima se resuelve nitida. Despues queda quieta un momento.
  // La curva del frenado: SPIN_FAST es lo que dura cada palabra a toda velocidad, SPIN_SLOW lo
  // que dura la ultima, y SPIN_CURVE cuanto aguanta rapido antes de frenar de golpe (mas alto,
  // frena mas tarde y mas brusco).
  const SPIN_STEPS = 12, SPIN_FAST = 26, SPIN_SLOW = 170, SPIN_CURVE = 3.4;
  const SPIN = Array.from({ length: SPIN_STEPS }, (_, i) =>
    Math.round(SPIN_FAST + (SPIN_SLOW - SPIN_FAST) * Math.pow(i / (SPIN_STEPS - 1), SPIN_CURVE)));
  async function spin(word) {
    const roll = document.querySelector(".hero__roll");
    const tail = roll?.querySelector(".hero__tail");
    if (!roll || !tail) return;
    busy = true;
    let prev = tail.textContent;
    try {
      tail.style.visibility = "hidden";
      roll.appendChild(canvas);
      const steps = SPIN.length;
      let S = null;
      for (let i = 0; i < steps && canvas.isConnected; i++) {
        // la ultima vuelta ya es la palabra que queda: no hay un cambio mas despues de frenar
        let w = word;
        if (i < steps - 1) { do { w = HERO_TAILS[Math.floor(Math.random() * HERO_TAILS.length)]; } while (w === prev || w === word); }
        prev = w;
        S = sample(roll, tail, w);
        // arranca grueso y se va afinando a medida que frena
        // y arranca azul: el azul se va yendo con el frenado y la palabra que queda llega casi blanca
        const tint = i < steps - 1 ? 0.6 - 0.3 * (i / (steps - 2)) : 0.22;
        render(S, S, 0.5, 0, Math.random() * 1000, i, i < steps * 0.6 ? 2 : i < steps * 0.85 ? 1 : 0, tint);
        await wait(SPIN[i]);
      }
      // asentado: los cuadrados finos de esa misma palabra se vuelven letra, zona por zona
      if (S && canvas.isConnected) {
        tail.textContent = word;
        const seed = Math.random() * 1000, t0 = performance.now(), dur = 160;
        for (;;) {
          const t = performance.now() - t0;
          render(S, S, Math.min(1, t / dur), 0, seed, Math.floor(t / 42), -1, 0.22 * (1 - Math.min(1, t / dur)));
          if (t >= dur || !canvas.isConnected) break;
          await frame();
        }
      }
      tail.textContent = word;
      tail.style.visibility = "";
    } finally {
      canvas.remove();
      busy = false;
      last = performance.now();
    }
  }
  function change() {
    if (busy || document.hidden) return;
    const now = performance.now();
    if (now < holdUntil) return;
    // "resuelven" es una palabra mas: sale cuando le toca en la mezcla, sin trato especial
    if (!bag.length) bag = HERO_TAILS.slice().sort(() => Math.random() - 0.5);
    let word = bag.pop();
    const shown = document.querySelector(".hero__tail")?.textContent;
    if (word === shown) { bag.unshift(word); word = bag.pop(); }
    spin(word).then(() => { holdUntil = performance.now() + 450 + Math.random() * 250; });
  }
  // entrada: la palabra de la marca se resuelve desde cuadrados, del centro hacia afuera, una sola vez
  (async function intro() {
    try { await document.fonts.ready; } catch {}
    while (!document.body.classList.contains("ready")) await wait(80);
    await morph(HERO_TAILS[0], { from: "", mode: 3, dur: 700 });
    holdUntil = performance.now() + 1400;
    // cuando ya paso el descanso, la tirada siguiente arranca en el proximo corte del reel
    document.addEventListener("reelcut", change);
    // y si el corte tarda, arranca igual (esto ademas la mantiene andando si el reel no arranca)
    setInterval(() => { if (performance.now() > holdUntil + 250) change(); }, 80);
  })();
})();
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
