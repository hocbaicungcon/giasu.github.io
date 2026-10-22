import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { parseXml, descendants } from '../src/xml.js';
const core = ['eq', 'editor', 'exam', 'figures', 'about'];
for (const name of ['manifest.xml', 'manifest-full.xml', 'manifest.dev.xml']) {
  const xml = readFileSync(new URL('../' + name, import.meta.url), 'utf8');
  const all = [...descendants(parseXml(xml))];
  const versions = all.filter(el => el.name === 'VersionOverrides');
  assert.ok(versions.length >= 1);
  for (const version of versions) {
    // Only inspect this override's own controls, excluding a nested override with its separate resources.
    const direct = version.children.filter(el => typeof el !== 'string' && el.name !== 'VersionOverrides');
    const nodes = direct.flatMap(el => [el, ...descendants(el)]);
    const controls = nodes.filter(el => el.name === 'Control').map(el => el.attrs.id);
    for (const tab of core) assert.ok(controls.includes('TexCraft_' + tab), `${name}: missing ${tab}`);
    if (name === 'manifest.xml') assert.equal(controls.length, 5, 'all public users get five ribbon entries');
    const resources = new Set(nodes.map(el => el.attrs.id).filter(Boolean));
    for (const el of nodes) if (el.attrs.resid) assert.ok(resources.has(el.attrs.resid), `${name}: unresolved ${el.attrs.resid}`);
  }
  for (const el of all.filter(el => el.name === 'bt:Image' && el.attrs.DefaultValue)) {
    const url = new URL(el.attrs.DefaultValue), file = url.pathname.split('/').pop();
    assert.ok(existsSync(new URL('../taskpane/' + file, import.meta.url)));
    if (name !== 'manifest.dev.xml') assert.equal(url.origin, 'https://raw.githubusercontent.com', 'ribbon images load independently of the website DNS');
    const image = readFileSync(new URL('../taskpane/' + file, import.meta.url));
    assert.equal(image.readUInt32BE(16), Number(el.attrs.id.match(/\d+/)[0]));
  }
}
const html = readFileSync(new URL('../taskpane/taskpane.html', import.meta.url), 'utf8');
for (const tab of core) assert.ok(html.includes(`data-tab="${tab}"`));
assert.ok(html.includes('data-tab="figures">Vẽ hình'));
console.log('PASS: five public ribbon entries in both override versions, resolved resources and valid independent PNG URLs');
