// Service worker del archivo privado.
// Sirve /archivo/v/<id>.mp4 descifrando los pedazos de archivo/m/ a medida que el
// reproductor los pide, asi el video arranca enseguida en vez de bajarse entero.
// La clave la manda la pagina; si este worker se reinicia y la perdio, se la vuelve a pedir.
"use strict";
let KEY = null, FILES = {};

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("message", (e) => { if (e.data && e.data.type === "clave") e.waitUntil(guardar(e.data)); });

async function guardar(d) {
  KEY = await crypto.subtle.importKey("raw", d.raw, "AES-GCM", false, ["decrypt"]);
  FILES = d.files || {};
}
async function pedirClave(clientId) {
  const c = (clientId && await self.clients.get(clientId)) || (await self.clients.matchAll({ type: "window" }))[0];
  if (!c) throw new Error("sin pagina");
  const ch = new MessageChannel();
  const r = new Promise((ok, ko) => { ch.port1.onmessage = (e) => ok(e.data); setTimeout(() => ko(new Error("sin respuesta")), 4000); });
  c.postMessage({ type: "pedir-clave" }, [ch.port2]);
  await guardar(await r);
}

const memo = new Map();
function pedazo(id, n) {
  const k = `${id}:${n}`;
  if (memo.has(k)) return memo.get(k);
  const p = (async () => {
    const r = await fetch(`/archivo/m/${id}-${String(n).padStart(3, "0")}.bin`);
    if (!r.ok) throw new Error(String(r.status));
    const b = new Uint8Array(await r.arrayBuffer());
    const iv = b.subarray(0, 12), datos = b.subarray(12);
    return new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv, additionalData: new TextEncoder().encode(k) }, KEY, datos));
  })();
  memo.set(k, p);
  p.catch(() => memo.delete(k));
  if (memo.size > 16) memo.delete(memo.keys().next().value);
  return p;
}

self.addEventListener("fetch", (e) => {
  const m = new URL(e.request.url).pathname.match(/\/archivo\/v\/([0-9a-f]+)\.mp4$/);
  if (m) e.respondWith(servir(e, m[1]));
});

async function servir(e, id) {
  try {
    if (!KEY || !FILES[id]) await pedirClave(e.clientId);
    const f = FILES[id];
    if (!f) return new Response(null, { status: 404 });
    const tipo = { "Content-Type": "video/mp4", "Accept-Ranges": "bytes" };
    const rango = e.request.headers.get("range");

    if (!rango) {   // sin rango: el video entero, pedazo por pedazo
      let i = 0;
      const cuerpo = new ReadableStream({
        async pull(ctrl) { if (i >= f.chunks) return ctrl.close(); ctrl.enqueue(await pedazo(id, i++)); },
      });
      return new Response(cuerpo, { status: 200, headers: { ...tipo, "Content-Length": String(f.size) } });
    }

    const m = /bytes=(\d*)-(\d*)/.exec(rango) || [];
    let ini = m[1] ? +m[1] : 0, fin = m[2] ? +m[2] : f.size - 1;
    if (!m[1] && m[2]) { ini = Math.max(0, f.size - +m[2]); fin = f.size - 1; }
    if (ini >= f.size) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${f.size}` } });
    // como mucho dos pedazos por respuesta; el reproductor pide lo que sigue solo
    const n0 = Math.floor(ini / f.chunk);
    fin = Math.min(fin, f.size - 1, (n0 + 2) * f.chunk - 1);
    const n1 = Math.floor(fin / f.chunk);
    const partes = await Promise.all(Array.from({ length: n1 - n0 + 1 }, (_, i) => pedazo(id, n0 + i)));
    if (n1 + 1 < f.chunks) pedazo(id, n1 + 1).catch(() => {});   // adelantar el siguiente

    const junto = new Uint8Array(partes.reduce((s, p) => s + p.length, 0));
    let o = 0; for (const p of partes) { junto.set(p, o); o += p.length; }
    const cuerpo = junto.subarray(ini - n0 * f.chunk, fin - n0 * f.chunk + 1);
    return new Response(cuerpo, { status: 206, headers: { ...tipo,
      "Content-Range": `bytes ${ini}-${fin}/${f.size}`, "Content-Length": String(cuerpo.length) } });
  } catch {
    return new Response(null, { status: 500 });
  }
}
