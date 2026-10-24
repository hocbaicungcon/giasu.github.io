// Word on older Windows uses the Edge 18 web view, which lacks a few newer built-ins. Each one is added only when missing.
const def = (obj, name, fn) => { if (!obj[name]) Object.defineProperty(obj, name, { value: fn, writable: true, configurable: true }); };
if (typeof globalThis === 'undefined') self.globalThis = self;
def(Object, 'fromEntries', function (it) { const o = {}; for (const [k, v] of it) o[k] = v; return o; });
def(Array.prototype, 'flat', function flat(d = 1) { return this.reduce((a, v) => (Array.isArray(v) && d > 0 ? a.concat(v.flat(d - 1)) : a.concat([v])), []); });
def(Array.prototype, 'flatMap', function (f, t) { return this.map(f, t).flat(1); });
def(Array.prototype, 'at', function (i) { i = Math.trunc(i) || 0; if (i < 0) i += this.length; return this[i]; });
def(String.prototype, 'trimStart', String.prototype.trimLeft || function () { return this.replace(/^\s+/, ''); });
def(String.prototype, 'trimEnd', String.prototype.trimRight || function () { return this.replace(/\s+$/, ''); });
def(String.prototype, 'replaceAll', function (a, b) { return a instanceof RegExp ? this.replace(a, b) : this.split(a).join(b); });
def(String.prototype, 'at', function (i) { i = Math.trunc(i) || 0; if (i < 0) i += this.length; return this[i]; });
def(String.prototype, 'matchAll', function* (re) {
  const r = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
  for (let m; (m = r.exec(this));) { yield m; if (m[0] === '') r.lastIndex++; }
});
def(Promise.prototype, 'finally', function (f) { return this.then((v) => Promise.resolve(f()).then(() => v), (e) => Promise.resolve(f()).then(() => { throw e; })); });
