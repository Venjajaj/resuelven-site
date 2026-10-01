// Cifra los trabajos privados del archivo (resuelven.pro/archivo/).
//
//   node archivo/cifrar.mjs          cifra lo que haya cambiado y muestra el link
//
// Las fuentes viven en archivo/_privado/, que esta fuera del repo:
//   trabajos.json   la lista: titulo, creditos, video y portada de cada uno
//   *.mp4, *.jpg    los archivos sin cifrar
//   clave.txt       la clave (se crea sola la primera vez; si se pierde, el link deja de andar)
//
// Al repo solo va archivo/m/: cada archivo cifrado con AES-256-GCM y un nombre que no
// dice nada. La clave viaja en el fragmento del link (#...), que el navegador nunca
// manda al servidor. Sin la clave, la pagina muestra solo la galeria publica.
import { readFile, writeFile, mkdir, readdir, unlink, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { randomBytes, createCipheriv, createHmac, createHash } from "node:crypto";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const priv = join(here, "_privado");
const out = join(here, "m");
await mkdir(out, { recursive: true });

const keyFile = join(priv, "clave.txt");
if (!existsSync(keyFile)) {
  await writeFile(keyFile, randomBytes(32).toString("base64url") + "\n");
  console.log("clave nueva creada en archivo/_privado/clave.txt");
}
const keyText = (await readFile(keyFile, "utf8")).trim();
const key = Buffer.from(keyText, "base64url");
if (key.length !== 32) throw new Error("clave.txt no tiene una clave valida");

// aad ata cada pedazo a su lugar: no se puede cambiar de orden ni mezclar entre videos
const cifrar = (buf, aad) => {
  const iv = randomBytes(12), c = createCipheriv("aes-256-gcm", key, iv);
  if (aad) c.setAAD(Buffer.from(aad));
  return Buffer.concat([iv, c.update(buf), c.final(), c.getAuthTag()]);
};
// el nombre sale del contenido: mismo archivo, mismo nombre, y no se vuelve a subir
const nombre = (buf, ver = "") => createHmac("sha256", key).update(ver).update(createHash("sha256").update(buf).digest()).digest("hex").slice(0, 24);

// Los videos van en pedazos de 1 MB, cada uno en su archivo: el reproductor pide solo
// los que necesita y el video arranca enseguida, sin bajarse entero.
const PEDAZO = 1048576;
const pedazo = (id, n) => `${id}-${String(n).padStart(3, "0")}.bin`;

const { trabajos } = JSON.parse(await readFile(join(priv, "trabajos.json"), "utf8"));
const usados = new Set(["indice.bin"]);
const indice = [];

for (const t of trabajos) {
  const item = { cat: t.cat, titulo: t.titulo, meta: t.meta || "", roles: t.roles || "", alt: t.alt || "" };

  const poster = await readFile(join(priv, t.poster));
  const pid = nombre(poster), pdest = join(out, pid + ".bin");
  if (!existsSync(pdest)) { await writeFile(pdest, cifrar(poster)); console.log(`cifrado ${t.poster}`); }
  item.poster = pid; item.posterBytes = (await stat(pdest)).size;
  usados.add(pid + ".bin");

  const video = await readFile(join(priv, t.video));
  const vid = nombre(video, "v2"), n = Math.ceil(video.length / PEDAZO);
  for (let i = 0; i < n; i++) {
    const f = pedazo(vid, i);
    usados.add(f);
    if (!existsSync(join(out, f))) await writeFile(join(out, f), cifrar(video.subarray(i * PEDAZO, (i + 1) * PEDAZO), `${vid}:${i}`));
  }
  console.log(`${t.video}: ${n} pedazos`);
  Object.assign(item, { video: vid, videoSize: video.length, chunk: PEDAZO, chunks: n });
  indice.push(item);
}

// el indice solo se reescribe si cambio, para no ensuciar el historial
const plano = Buffer.from(JSON.stringify({ v: 1, trabajos: indice }));
const cache = join(priv, ".indice.json");
if (!existsSync(cache) || !(await readFile(cache)).equals(plano) || !existsSync(join(out, "indice.bin"))) {
  await writeFile(join(out, "indice.bin"), cifrar(plano));
  await writeFile(cache, plano);
  console.log("indice actualizado");
}

for (const f of await readdir(out)) {
  if (!usados.has(f)) { await unlink(join(out, f)); console.log(`borrado m/${f} (ya no se usa)`); }
}

console.log(`\n${trabajos.length} trabajos privados. Link para mandar:\nhttps://resuelven.pro/archivo/#${keyText}`);
