// Service worker: keeps the add-in (pages, scripts, icons, KaTeX, QR libraries) and the big CDN files it needs
// (Office.js, Pyodide/SymPy) for about 30 days, so it opens without a network. Generated into sw.js by tools/build-sw.mjs.
const VERSION = '__VERSION__';
const CACHE = 'texcraft-app-' + VERSION, RUNTIME = 'texcraft-runtime', META = 'texcraft-meta';
const MAX_AGE = 30 * 24 * 3600 * 1000;
const FILES = __FILES__;
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
