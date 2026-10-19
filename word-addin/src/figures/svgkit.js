// Tiny SVG helpers shared by the figure generators.
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const n2 = (v) => (Math.round(v * 100) / 100).toString();
export const FONT = "'Times New Roman', 'STIX Two Text', serif";
export const svgDoc = (w, h, body, { bg = '#fff' } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="${n2(w)}" height="${n2(h)}" viewBox="0 0 ${n2(w)} ${n2(h)}" font-family="${FONT}"><rect width="100%" height="100%" fill="${bg}"/>${body}</svg>`;
export const line = (x1, y1, x2, y2, { stroke = '#000', width = 1.4, dash = '', cap = 'round' } = {}) => `<line x1="${n2(x1)}" y1="${n2(y1)}" x2="${n2(x2)}" y2="${n2(y2)}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="${cap}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
export const text = (x, y, s, { size = 15, anchor = 'middle', italic = false, fill = '#000', weight = '', base = 'alphabetic' } = {}) => `<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" text-anchor="${anchor}" dominant-baseline="${base}" fill="${fill}"${italic ? ' font-style="italic"' : ''}${weight ? ` font-weight="${weight}"` : ''}>${esc(s)}</text>`;
export const path = (d, { stroke = '#000', width = 1.4, fill = 'none', dash = '', opacity = 1 } = {}) => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}${opacity !== 1 ? ` opacity="${opacity}"` : ''}/>`;
export const poly = (pts, opts = {}) => path(`M${pts.map((p) => `${n2(p[0])} ${n2(p[1])}`).join('L')}Z`, opts);
export const circle = (cx, cy, r, { stroke = '#000', width = 1.4, fill = 'none' } = {}) => `<circle cx="${n2(cx)}" cy="${n2(cy)}" r="${n2(r)}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;
export const dot = (x, y, r = 2.6, fill = '#000') => `<circle cx="${n2(x)}" cy="${n2(y)}" r="${r}" fill="${fill}"/>`;
export const arrowHead = (x, y, ang, size = 7, fill = '#000') => `<path d="M${n2(x)} ${n2(y)} L${n2(x - size * Math.cos(ang - 0.4))} ${n2(y - size * Math.sin(ang - 0.4))} L${n2(x - size * Math.cos(ang + 0.4))} ${n2(y - size * Math.sin(ang + 0.4))}Z" fill="${fill}"/>`;
export const arrow = (x1, y1, x2, y2, opts = {}) => line(x1, y1, x2, y2, opts) + arrowHead(x2, y2, Math.atan2(y2 - y1, x2 - x1), opts.head || 7, opts.stroke || '#000');

/** "Nice" number text: integers, simple fractions p/q, square roots, else up to 2 decimals. */
export function fmtNum(v) {
  if (!Number.isFinite(v)) return v > 0 ? '+∞' : v < 0 ? '-∞' : '';
  if (Math.abs(v) < 1e-9) return '0';
  const tol = 1e-7 * Math.max(1, Math.abs(v));
  if (Math.abs(v - Math.round(v)) < tol) return String(Math.round(v));
  for (let q = 2; q <= 12; q++) { const p = Math.round(v * q); if (Math.abs(v - p / q) < tol) return `${p}/${q}`; }
  const sq = v * v;
  for (let k = 1; k <= 3; k++) { const r = sq / (k * k); if (Math.abs(r - Math.round(r)) < 1e-6 * Math.max(1, r) && Math.round(r) <= 400 && Math.round(r) > 0) return `${v < 0 ? '-' : ''}${k > 1 ? k : ''}√${Math.round(r)}`; }
  return String(Math.round(v * 100) / 100).replace(/\.?0+$/, (m) => (m.includes('.') ? '' : m));
}

export function niceStep(range, target = 8) {
  const raw = range / target, mag = 10 ** Math.floor(Math.log10(raw)), f = raw / mag;
  return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * mag;
}

/** Number as LaTeX: integers, \frac{p}{q}, k\sqrt{r}, ±\infty, decimals with a comma. */
export function numLatex(v) {
  if (!Number.isFinite(v)) return v > 0 ? '+\\infty' : v < 0 ? '-\\infty' : '';
  if (Math.abs(v) < 1e-9) return '0';
  const tol = 1e-7 * Math.max(1, Math.abs(v)), neg = v < 0 ? '-' : '', a = Math.abs(v);
  if (Math.abs(a - Math.round(a)) < tol) return neg + Math.round(a);
  for (let q = 2; q <= 12; q++) { const p = Math.round(a * q); if (Math.abs(a - p / q) < tol) return `${neg}\\frac{${p}}{${q}}`; }
  const sq = a * a;
  for (let k = 1; k <= 3; k++) { const r = sq / (k * k); if (Math.abs(r - Math.round(r)) < 1e-6 * Math.max(1, r) && Math.round(r) <= 400 && Math.round(r) > 0) return `${neg}${k > 1 ? k : ''}\\sqrt{${Math.round(r)}}`; }
  return neg + String(Math.round(a * 100) / 100).replace('.', '{,}');
}
