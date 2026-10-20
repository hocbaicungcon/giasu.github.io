// Write hosted/sw.js: the service worker with the list of files to keep. Usage: node tools/build-sw.mjs hosted
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';
const root = process.argv[2] || 'hosted';
const files = [];
const walk = (d) => { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else files.push(relative(root, p).replace(/\\/g, '/')); } };
walk(root);
const list = files.filter((f) => !/^(sw\.js|manifest(-full)?\.xml)$/.test(f) && !/\.(LICENSE|map)$/.test(f) && !/\.DS_Store$/.test(f)).sort();
const hash = createHash('sha1');
for (const f of list) hash.update(f).update(readFileSync(join(root, f)));
const version = hash.digest('hex').slice(0, 10);
const tpl = readFileSync(new URL('../sw.template.js', import.meta.url), 'utf8');
writeFileSync(join(root, 'sw.js'), tpl.replace('__VERSION__', version).replace('__FILES__', JSON.stringify(['./', ...list.map((f) => './' + f)], null, 1)));
console.log(`sw.js: ${list.length} files, version ${version}`);
