// Minimal TrueType reader: glyph outlines of a font file as polygons (curves flattened), enough for the KaTeX fonts.
// parseTtf(bytes) -> {unitsPerEm, has(cp), outline(cp) -> {contours: [[x, y]...], ...}} (font units, y up).

export function parseTtf(buf) {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const tag = (o) => String.fromCharCode(dv.getUint8(o), dv.getUint8(o + 1), dv.getUint8(o + 2), dv.getUint8(o + 3));
  const tables = {};
  const n = dv.getUint16(4);
  for (let i = 0; i < n; i++) { const o = 12 + i * 16; tables[tag(o)] = { off: dv.getUint32(o + 8), len: dv.getUint32(o + 12) }; }
  if (!tables.glyf || !tables.loca || !tables.head || !tables.cmap) throw new Error('ttf: not a TrueType outline font');
  const unitsPerEm = dv.getUint16(tables.head.off + 18);
  const locaLong = dv.getInt16(tables.head.off + 50) === 1;
  const loca = (g) => (locaLong ? dv.getUint32(tables.loca.off + g * 4) : dv.getUint16(tables.loca.off + g * 2) * 2);

  // cmap: format 4 (BMP) and 12
  const cmap = new Map();
  const nt = dv.getUint16(tables.cmap.off + 2);
  let best = null;
  for (let i = 0; i < nt; i++) {
    const o = tables.cmap.off + 4 + i * 8, pid = dv.getUint16(o), eid = dv.getUint16(o + 2), off = tables.cmap.off + dv.getUint32(o + 4), fmt = dv.getUint16(off);
    if ((fmt === 12 || fmt === 4) && (!best || fmt === 12 || (pid === 3 && eid === 1))) best = { off, fmt };
  }
  if (!best) throw new Error('ttf: no usable cmap');
  if (best.fmt === 4) {
    const o = best.off, segX2 = dv.getUint16(o + 6), end = o + 14, start = end + segX2 + 2, delta = start + segX2, range = delta + segX2;
    for (let s = 0; s < segX2 / 2; s++) {
      const e = dv.getUint16(end + s * 2), st = dv.getUint16(start + s * 2), d = dv.getInt16(delta + s * 2), ro = dv.getUint16(range + s * 2);
      for (let c = st; c <= e && c < 0xffff; c++) {
        let g;
        if (ro === 0) g = (c + d) & 0xffff; else { const gi = dv.getUint16(range + s * 2 + ro + (c - st) * 2); g = gi === 0 ? 0 : (gi + d) & 0xffff; }
        if (g) cmap.set(c, g);
      }
    }
  } else {
    const o = best.off, ng = dv.getUint32(o + 12);
    for (let i = 0; i < ng; i++) { const g = o + 16 + i * 12, st = dv.getUint32(g), e = dv.getUint32(g + 4), sg = dv.getUint32(g + 8); for (let c = st; c <= e; c++) cmap.set(c, sg + (c - st)); }
  }

  const cache = new Map();
  function simple(g, depth = 0) {
    if (depth > 6) return [];
    const a = loca(g), b = loca(g + 1);
    if (a === b) return [];
    const o = tables.glyf.off + a, nc = dv.getInt16(o);
    if (nc >= 0) {
      const ends = []; let p = o + 10;
      for (let i = 0; i < nc; i++) { ends.push(dv.getUint16(p)); p += 2; }
      const np = nc ? ends[nc - 1] + 1 : 0;
      p += 2 + dv.getUint16(p);
      const flags = [];
      while (flags.length < np) { const f = dv.getUint8(p++); flags.push(f); if (f & 8) { let r = dv.getUint8(p++); while (r-- > 0) flags.push(f); } }
      const xs = [], ys = []; let v = 0;
      for (let i = 0; i < np; i++) { const f = flags[i]; if (f & 2) { const d = dv.getUint8(p++); v += f & 16 ? d : -d; } else if (!(f & 16)) { v += dv.getInt16(p); p += 2; } xs.push(v); }
      v = 0;
      for (let i = 0; i < np; i++) { const f = flags[i]; if (f & 4) { const d = dv.getUint8(p++); v += f & 32 ? d : -d; } else if (!(f & 32)) { v += dv.getInt16(p); p += 2; } ys.push(v); }
      const contours = []; let s = 0;
      for (const e of ends) { contours.push(flatten(xs.slice(s, e + 1), ys.slice(s, e + 1), flags.slice(s, e + 1))); s = e + 1; }
      return contours;
    }
    // composite glyph
    let p = o + 10, more = true; const out = [];
    while (more) {
      const fl = dv.getUint16(p), gi = dv.getUint16(p + 2); p += 4;
      let dx, dy;
      if (fl & 1) { dx = dv.getInt16(p); dy = dv.getInt16(p + 2); p += 4; } else { dx = dv.getInt8(p); dy = dv.getInt8(p + 1); p += 2; }
      let m = [1, 0, 0, 1];
      if (fl & 8) { const s = dv.getInt16(p) / 16384; m = [s, 0, 0, s]; p += 2; } else if (fl & 0x40) { m = [dv.getInt16(p) / 16384, 0, 0, dv.getInt16(p + 2) / 16384]; p += 4; } else if (fl & 0x80) { m = [dv.getInt16(p) / 16384, dv.getInt16(p + 2) / 16384, dv.getInt16(p + 4) / 16384, dv.getInt16(p + 6) / 16384]; p += 8; }
      if (!(fl & 2)) { dx = 0; dy = 0; }   // point-matching placement: not supported, keep the part where it is
      for (const c of simple(gi, depth + 1)) out.push(c.map(([x, y]) => [m[0] * x + m[2] * y + dx, m[1] * x + m[3] * y + dy]));
      more = Boolean(fl & 0x20);
    }
    return out;
  }
  function flatten(xs, ys, flags) {
    const n = xs.length; if (!n) return [];
    const pts = xs.map((x, i) => ({ x, y: ys[i], on: Boolean(flags[i] & 1) }));
    // start at an on-curve point (insert the midpoint of two off-curve points as needed)
    const seq = [];
    for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n]; seq.push(a); if (!a.on && !b.on) seq.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, on: true }); }
    const k = seq.findIndex((q) => q.on);
    const ring = k < 0 ? seq : seq.slice(k).concat(seq.slice(0, k));
    const out = [[ring[0].x, ring[0].y]];
    for (let i = 1; i <= ring.length; i++) {
      const q = ring[i % ring.length];
      if (q.on) { if (i < ring.length) out.push([q.x, q.y]); continue; }
      const prev = ring[i - 1], next = ring[(i + 1) % ring.length];   // off-curve control: quadratic prev -> next
      for (let t = 1; t <= 6; t++) { const u = t / 7, w = 1 - u; out.push([w * w * prev.x + 2 * w * u * q.x + u * u * next.x, w * w * prev.y + 2 * w * u * q.y + u * u * next.y]); }
      i++;
      if (i < ring.length) out.push([next.x, next.y]);
    }
    return out;
  }

  return {
    unitsPerEm,
    has: (cp) => cmap.has(cp),
    outline(cp) {
      if (!cmap.has(cp)) return null;
      const g = cmap.get(cp);
      if (!cache.has(g)) cache.set(g, simple(g));
      return cache.get(g);
    },
  };
}
