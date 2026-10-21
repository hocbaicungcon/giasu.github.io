// Service worker: keeps the add-in (pages, scripts, icons, KaTeX, QR libraries) and the big CDN files it needs
// (Office.js, Pyodide/SymPy) for about 30 days, so it opens without a network. Generated into sw.js by tools/build-sw.mjs.
const VERSION = '__VERSION__';
const CACHE = 'texcraft-app-' + VERSION, RUNTIME = 'texcraft-runtime', META = 'texcraft-meta';
const MAX_AGE = 30 * 24 * 3600 * 1000;
const FILES = __FILES__;
const CDN = [/^https:\/\/appsforoffice\.microsoft\.com\//, /^https:\/\/cdn\.jsdelivr\.net\/pyodide\//];

async function stamp(url) {
  const meta = await caches.open(META);
  await meta.put(url, new Response(String(Date.now())));
}
async function age(url) {
  const meta = await caches.open(META);
  const res = await meta.match(url);
  return res ? Date.now() - Number(await res.text()) : Infinity;
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const one = async (f) => { try { await cache.add(new Request(f, { cache: 'reload' })); await stamp(new URL(f, self.location).href); } catch (e) { /* one missing file must not block the install */ } };
    for (let i = 0; i < FILES.length; i += 6) await Promise.all(FILES.slice(i, i + 6).map(one));   // 6 at a time: gentle on weak machines
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('texcraft-app-') && k !== CACHE) await caches.delete(k);
    self.clients.claim();
  })());
});

// Coalesce simultaneous requests (e.g. two panels starting Python).
const pending = new Map();
async function handle(request) {
  const cdn = CDN.some((r) => r.test(request.url));
  const key = new URL(request.url);
  // Local queries choose a tab/edition in the same HTML. CDN queries may select different resources.
  if (!cdn) key.search = '';
  const url = key.href;
  const cache = await caches.open(cdn ? RUNTIME : CACHE);
  const hit = await cache.match(url);
  const fresh = hit ? (await age(url)) < MAX_AGE : false;
  // Versioned app files are replaced on the next worker install. Runtime files have versioned CDN URLs.
  // Re-fetching a fresh WASM/wheel file on every hit wastes tens of MB and stalls weak machines.
  if (hit && fresh) return hit;
  if (!pending.has(url)) {
    const work = fetch(request).then(async (res) => {
      if (res && (res.ok || res.type === 'opaque')) {
        try { await cache.put(url, res.clone()); await stamp(url); } catch (e) { /* quota */ }
      }
      return res;
    }).finally(() => pending.delete(url));
    pending.set(url, work);
  }
  try { return (await pending.get(url)).clone(); } catch (e) { if (hit) return hit; throw e; }
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

self.addEventListener('message', (event) => {
  if (event.data === 'status') {
    event.waitUntil((async () => {
    const keys = await (await caches.open(CACHE)).keys();
    const runtime = await (await caches.open(RUNTIME)).keys();
    event.source.postMessage({ type: 'status', version: VERSION, files: keys.length, runtime: runtime.length, maxAgeDays: 30 });
    })());
  }
});
