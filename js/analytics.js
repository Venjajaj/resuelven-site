// Medicion del sitio, con dos herramientas gratuitas que contestan cosas distintas:
//   GA4     de donde viene la gente y si el reach de LinkedIn funciona
//   Clarity graba la sesion para ver que miraron y donde se fueron
//
// Mientras los dos IDs de abajo esten vacios no se carga nada ni se envia nada.
// Para prender la medicion se pegan los IDs aca y se publica.

const MEDICION = {
  ga4: "",      // el de Google Analytics, con forma G-XXXXXXXXXX
  clarity: "",  // el del proyecto de Clarity, diez caracteres
};

// El nombre del prospecto viaja en utm_campaign, por ejemplo
// resuelven.pro/?utm_source=linkedin&utm_medium=dm&utm_campaign=bordo-films
// Se guarda apenas entra porque el parametro desaparece si el visitante navega.
function prospecto() {
  const enURL = new URLSearchParams(location.search).get("utm_campaign");
  try {
    if (enURL) { sessionStorage.setItem("resuelven_prospecto", enURL); return enURL; }
    return sessionStorage.getItem("resuelven_prospecto") || "";
  } catch (e) {
    return enURL || "";
  }
}

function cargarGA4(id) {
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", id);
}

function cargarClarity(id) {
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", id);
  // Como etiqueta, el prospecto sirve para filtrar las grabaciones y ver la de una persona.
  const p = prospecto();
  if (p) window.clarity("set", "prospecto", p);
}

// Unico punto de entrada. Si no hay nada configurado no hace nada y no rompe.
window.medir = function (evento, datos) {
  const p = prospecto();
  const carga = p ? Object.assign({ prospecto: p }, datos) : (datos || {});
  if (window.gtag) gtag("event", evento, carga);
  if (window.clarity) window.clarity("event", evento);
};

if (MEDICION.ga4) cargarGA4(MEDICION.ga4);
if (MEDICION.clarity) cargarClarity(MEDICION.clarity);

// Contacto y mails se escuchan desde aca para no ensuciar el resto del codigo.
document.addEventListener("click", (e) => {
  const wa = e.target.closest(".wa-link");
  if (wa) {
    const lugar = wa.classList.contains("nav__cta") ? "nav"
      : wa.classList.contains("btn--big") ? "cierre"
      : "hero";
    window.medir("contacto", { lugar });
    return;
  }
  const mail = e.target.closest('a[href^="mailto:"]');
  if (mail) window.medir("mail", { direccion: mail.href.replace("mailto:", "") });
});
