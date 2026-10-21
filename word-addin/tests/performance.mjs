// Regression checks for costly cache/network work and concurrent Python startup. No network or Office required.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { loadSympy } from '../src/sympy-bridge.js';
import { latexToEquationStream } from '../src/mtef-writer.js';
import { buildOle } from '../src/ole-writer.js';
import { oleToLatex } from '../src/mtef.js';

const stores = new Map(), handlers = {};
const location = new URL('https://example.test/word-addin/sw.js');
const key = (r) => new URL(typeof r === 'string' ? r : r.url, location).href;
const caches = {
  async open(name) {
    if (!stores.has(name)) stores.set(name, new Map());
    const data = stores.get(name);
    return {
      async match(r) { return data.get(key(r))?.clone(); },
      async put(r, response) { data.set(key(r), response.clone()); },
      async keys() { return [...data.keys()].map((url) => new Request(url)); },
      async add(r) { await this.put(r, await fetcher(r)); },
    };
  },
  async keys() { return [...stores.keys()]; },
  async delete(name) { return stores.delete(name); },
};
let fetches = 0, fail = false;
const fetcher = async () => {
  fetches++;
  await new Promise((r) => setTimeout(r, 5));
  if (fail) throw new Error('offline');
  return new Response('payload-' + fetches);
};
const template = readFileSync(new URL('../sw.template.js', import.meta.url), 'utf8');
runInNewContext(template.replace('__VERSION__', 'test').replace('__FILES__', '[]'), {
  caches, fetch: fetcher, URL, Request, Response, Date, Map,
  self: { location, addEventListener(type, fn) { handlers[type] = fn; } },
});
function get(url) {
  let result;
  handlers.fetch({ request: new Request(new URL(url, location)), respondWith(p) { result = p; } });
  return result;
}

// One request serves concurrent readers; each gets an independently consumable response.
const [a, b] = await Promise.all([get('./src/a.js'), get('./src/a.js')]);
assert.equal(fetches, 1);
assert.equal(await a.text(), await b.text());
await get('./src/a.js?tab=editor');
assert.equal(fetches, 1, 'fresh local resources must not re-download for another tab');

// Independent timestamps survive parallel writes (the old shared JSON map lost entries).
await Promise.all([get('./src/b.js'), get('./src/c.js')]);
const beforeHits = fetches;
await Promise.all([get('./src/b.js'), get('./src/c.js')]);
assert.equal(fetches, beforeHits);

const wasm = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.asm.wasm';
await get(wasm);
const beforeWasm = fetches;
await get(wasm);
assert.equal(fetches, beforeWasm, 'fresh WASM must not download again in the background');
await get(wasm + '?variant=other');
assert.equal(fetches, beforeWasm + 1, 'CDN query parameters remain distinct');

// Expired cached data still works offline, and failed fetches can be retried later.
const meta = await caches.open('texcraft-meta');
await meta.put(new URL('./src/a.js', location).href, new Response('1'));
fail = true;
assert.ok((await (await get('./src/a.js')).text()).startsWith('payload-'));
await assert.rejects(get('./src/missing.js'), /offline/);
fail = false;
assert.ok((await (await get('./src/missing.js')).text()).startsWith('payload-'));

let statusWork, status;
handlers.message({ data: 'status', waitUntil(p) { statusWork = p; }, source: { postMessage(s) { status = s; } } });
await statusWork;
assert.equal(status.type, 'status');

// Failed Python startup is retryable; simultaneous callers share exactly one engine.
let starts = 0, packages = 0, setups = 0;
const py = { async loadPackage() { packages++; }, runPython() { setups++; } };
globalThis.loadPyodide = async () => {
  starts++;
  await new Promise((r) => setTimeout(r, 5));
  if (starts === 1) throw new Error('temporary download failure');
  return py;
};
try {
  const rejected = await Promise.allSettled([loadSympy(), loadSympy()]);
  assert.ok(rejected.every((r) => r.status === 'rejected'));
  assert.equal(starts, 1);
  const ready = await Promise.all([loadSympy(), loadSympy(), loadSympy()]);
  assert.ok(ready.every((r) => r === py));
  assert.equal(await loadSympy(), py);
  assert.deepEqual([starts, packages, setups], [2, 1, 1]);
} finally { delete globalThis.loadPyodide; }

assert.equal(oleToLatex(buildOle(latexToEquationStream('\\text{ℑ}')))[0], '\\text{ℑ}');
console.log('Performance regressions passed: cache reuse, concurrent downloads, offline retry, Python startup, MathType ℑ.');
