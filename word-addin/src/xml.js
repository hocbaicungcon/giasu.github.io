// Tiny namespace-agnostic XML parser (prefixes are kept in tag names) so the same code runs in node tests and in the
// Word web view. Elements: {name, attrs, children, text}; text nodes are strings inside children.
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };

export function unescapeXml(s) {
  return s.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-z]+);/g, (m, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return Object.prototype.hasOwnProperty.call(ENTITIES, e) ? ENTITIES[e] : m;
  });
}

export function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function parseXml(src) {
  const root = { name: '#root', attrs: {}, children: [] };
  const stack = [root];
  const re = /<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[^>]*>|<(\/?)([^\s/>]+)((?:\s+[^\s=/>]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>|([^<]+)/g;
  let m;
  while ((m = re.exec(src))) {
    const top = stack[stack.length - 1];
    if (m[1] !== undefined) { top.children.push(m[1]); continue; }
    if (m[6] !== undefined) { top.children.push(unescapeXml(m[6])); continue; }
    if (m[3] === undefined) continue;
    if (m[2] === '/') {
      if (stack.length > 1) stack.pop();
      continue;
    }
    const attrs = {};
    m[4].replace(/([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g, (_a, k, v1, v2) => { attrs[k] = unescapeXml(v1 !== undefined ? v1 : v2); return ''; });
    const el = { name: m[3], attrs, children: [] };
    top.children.push(el);
    if (!m[5]) stack.push(el);
  }
  return root.children.find((c) => typeof c !== 'string');
}

export const local = (el) => el.name.split(':').pop();
export const elements = (el) => el.children.filter((c) => typeof c !== 'string');
export function textOf(el) {
  return el.children.map((c) => (typeof c === 'string' ? c : textOf(c))).join('');
}
export function* descendants(el) {
  for (const c of elements(el)) { yield c; yield* descendants(c); }
}
