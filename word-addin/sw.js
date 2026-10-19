// Service worker: keeps the add-in (pages, scripts, icons, KaTeX, QR libraries) and the big CDN files it needs
// (Office.js, Pyodide/SymPy) for about 30 days, so it opens without a network. Generated into sw.js by tools/build-sw.mjs.
const VERSION = 'e265a2a3ca';
const CACHE = 'texcraft-app-' + VERSION, RUNTIME = 'texcraft-runtime', META = 'texcraft-meta';
const MAX_AGE = 30 * 24 * 3600 * 1000;
const FILES = [
 "./",
 "./src/answer-qr.js",
 "./src/app-core.js",
 "./src/emf.js",
 "./src/exam.js",
 "./src/figures/analysis.js",
 "./src/figures/bbt.js",
 "./src/figures/expr.js",
 "./src/figures/geometry.js",
 "./src/figures/plot.js",
 "./src/figures/region.js",
 "./src/figures/scene.js",
 "./src/figures/svgkit.js",
 "./src/latex-dict.js",
 "./src/latex-suggest.js",
 "./src/latex2omml.js",
 "./src/mathrender.js",
 "./src/mathtype-object.js",
 "./src/mathtype-template.js",
 "./src/mtef-writer.js",
 "./src/mtef.js",
 "./src/mtefchars.js",
 "./src/ole-writer.js",
 "./src/omml.js",
 "./src/ooxml.js",
 "./src/picture.js",
 "./src/pptx.js",
 "./src/sympy-bridge.js",
 "./src/tables.js",
 "./src/word-io.js",
 "./src/worksheet-docx.js",
 "./src/xlsx.js",
 "./src/xml.js",
 "./taskpane/calc-ui.js",
 "./taskpane/editor-toolbar.js",
 "./taskpane/exam-ui.js",
 "./taskpane/figures-ui.js",
 "./taskpane/icon-16.png",
 "./taskpane/icon-32.png",
 "./taskpane/icon-64.png",
 "./taskpane/icon-80.png",
 "./taskpane/icon-about-16.png",
 "./taskpane/icon-about-32.png",
 "./taskpane/icon-about-80.png",
 "./taskpane/icon-about-v2-16.png",
 "./taskpane/icon-about-v2-32.png",
 "./taskpane/icon-about-v2-80.png",
 "./taskpane/icon-calc-16.png",
 "./taskpane/icon-calc-32.png",
 "./taskpane/icon-calc-80.png",
 "./taskpane/icon-calc-v2-16.png",
 "./taskpane/icon-calc-v2-32.png",
 "./taskpane/icon-calc-v2-80.png",
 "./taskpane/icon-edit-16.png",
 "./taskpane/icon-edit-32.png",
 "./taskpane/icon-edit-80.png",
 "./taskpane/icon-edit-v2-16.png",
 "./taskpane/icon-edit-v2-32.png",
 "./taskpane/icon-edit-v2-80.png",
 "./taskpane/icon-eq-16.png",
 "./taskpane/icon-eq-32.png",
 "./taskpane/icon-eq-80.png",
 "./taskpane/icon-eq-v2-16.png",
 "./taskpane/icon-eq-v2-32.png",
 "./taskpane/icon-eq-v2-80.png",
 "./taskpane/icon-exam-16.png",
 "./taskpane/icon-exam-32.png",
 "./taskpane/icon-exam-80.png",
 "./taskpane/icon-exam-v2-16.png",
 "./taskpane/icon-exam-v2-32.png",
 "./taskpane/icon-exam-v2-80.png",
 "./taskpane/icon-fig-16.png",
 "./taskpane/icon-fig-32.png",
 "./taskpane/icon-fig-80.png",
 "./taskpane/icon-fig-v2-16.png",
 "./taskpane/icon-fig-v2-32.png",
 "./taskpane/icon-fig-v2-80.png",
 "./taskpane/icon-replace-16.png",
 "./taskpane/icon-replace-32.png",
 "./taskpane/icon-replace-80.png",
 "./taskpane/icon-ws-v2-16.png",
 "./taskpane/icon-ws-v2-32.png",
 "./taskpane/icon-ws-v2-80.png",
 "./taskpane/katex/fonts/KaTeX_AMS-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_AMS-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_AMS-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Caligraphic-Bold.ttf",
 "./taskpane/katex/fonts/KaTeX_Caligraphic-Bold.woff",
 "./taskpane/katex/fonts/KaTeX_Caligraphic-Bold.woff2",
 "./taskpane/katex/fonts/KaTeX_Caligraphic-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Caligraphic-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Caligraphic-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Fraktur-Bold.ttf",
 "./taskpane/katex/fonts/KaTeX_Fraktur-Bold.woff",
 "./taskpane/katex/fonts/KaTeX_Fraktur-Bold.woff2",
 "./taskpane/katex/fonts/KaTeX_Fraktur-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Fraktur-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Fraktur-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Main-Bold.ttf",
 "./taskpane/katex/fonts/KaTeX_Main-Bold.woff",
 "./taskpane/katex/fonts/KaTeX_Main-Bold.woff2",
 "./taskpane/katex/fonts/KaTeX_Main-BoldItalic.ttf",
 "./taskpane/katex/fonts/KaTeX_Main-BoldItalic.woff",
 "./taskpane/katex/fonts/KaTeX_Main-BoldItalic.woff2",
 "./taskpane/katex/fonts/KaTeX_Main-Italic.ttf",
 "./taskpane/katex/fonts/KaTeX_Main-Italic.woff",
 "./taskpane/katex/fonts/KaTeX_Main-Italic.woff2",
 "./taskpane/katex/fonts/KaTeX_Main-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Main-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Main-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Math-BoldItalic.ttf",
 "./taskpane/katex/fonts/KaTeX_Math-BoldItalic.woff",
 "./taskpane/katex/fonts/KaTeX_Math-BoldItalic.woff2",
 "./taskpane/katex/fonts/KaTeX_Math-Italic.ttf",
 "./taskpane/katex/fonts/KaTeX_Math-Italic.woff",
 "./taskpane/katex/fonts/KaTeX_Math-Italic.woff2",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Bold.ttf",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Bold.woff",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Bold.woff2",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Italic.ttf",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Italic.woff",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Italic.woff2",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_SansSerif-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Script-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Script-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Script-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Size1-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Size1-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Size1-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Size2-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Size2-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Size2-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Size3-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Size3-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Size3-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Size4-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Size4-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Size4-Regular.woff2",
 "./taskpane/katex/fonts/KaTeX_Typewriter-Regular.ttf",
 "./taskpane/katex/fonts/KaTeX_Typewriter-Regular.woff",
 "./taskpane/katex/fonts/KaTeX_Typewriter-Regular.woff2",
 "./taskpane/katex/katex.min.css",
 "./taskpane/katex/katex.min.js",
 "./taskpane/latex-autocomplete.js",
 "./taskpane/mt-settings.js",
 "./taskpane/qr-bidv.jpg",
 "./taskpane/taskpane.css",
 "./taskpane/taskpane.html",
 "./taskpane/taskpane.js",
 "./taskpane/vendor/jsQR.js",
 "./taskpane/vendor/qrcode.js",
 "./taskpane/vendor/worksheet.js",
 "./taskpane/worksheet-ui.js"
];
const CDN = [/^https:\/\/appsforoffice\.microsoft\.com\//, /^https:\/\/cdn\.jsdelivr\.net\/pyodide\//];

async function stamp(url) {
  const meta = await caches.open(META);
  const res = await meta.match('times');
  const times = res ? await res.json() : {};
  times[url] = Date.now();
  await meta.put('times', new Response(JSON.stringify(times)));
}
async function age(url) {
  const meta = await caches.open(META);
  const res = await meta.match('times');
  const times = res ? await res.json() : {};
  return times[url] ? Date.now() - times[url] : Infinity;
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(FILES.map(async (f) => { try { await cache.add(new Request(f, { cache: 'reload' })); await stamp(new URL(f, self.location).href); } catch (e) { /* one missing file must not block the install */ } }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('texcraft-app-') && k !== CACHE) await caches.delete(k);
    self.clients.claim();
  })());
});

async function handle(request) {
  const url = request.url;
  const cache = await caches.open(CDN.some((r) => r.test(url)) ? RUNTIME : CACHE);
  const hit = await cache.match(request, { ignoreSearch: true });
  const fresh = hit ? (await age(url)) < MAX_AGE : false;
  const network = () => fetch(request).then(async (res) => { if (res && (res.ok || res.type === 'opaque')) { try { await cache.put(request, res.clone()); await stamp(url); } catch (e) { /* quota */ } } return res; });
  if (hit && fresh) { network().catch(() => {}); return hit; }   // serve the saved copy now, refresh quietly for next time
  try { return await network(); } catch (e) { if (hit) return hit; throw e; }
}

self.addEventListener('fetch', (event) => {
  const r = event.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);
  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin && !CDN.some((re) => re.test(r.url))) return;
  if (sameOrigin && url.pathname.endsWith('/manifest.xml')) return;
  event.respondWith(handle(r));
});

self.addEventListener('message', async (event) => {
  if (event.data === 'status') {
    const keys = await (await caches.open(CACHE)).keys();
    const runtime = await (await caches.open(RUNTIME)).keys();
    event.source.postMessage({ type: 'status', version: VERSION, files: keys.length, runtime: runtime.length, maxAgeDays: 30 });
  }
});
