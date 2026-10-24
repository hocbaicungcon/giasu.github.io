// Shared "font / size" choice for MathType objects and figure labels (kept in localStorage, synced between every panel that shows it).
import { MT_FONTS } from '../src/mtef-writer.js';
import * as io from '../src/word-io.js';

const KEY = 'texcraft.mt';
const SIZES = ['auto', '10', '10.5', '11', '12', '13', '14'];
let state = { font: 'times', size: 'auto', picture: 'emf', layout: 'classic' };
try { Object.assign(state, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { /* storage unavailable */ }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ } };

/** Font size (pt) of the text at the Word cursor; 12 when Word is not available. */
export async function surroundingPt(fallback = 12) {
  try { const v = await io.selectionFontSize(); return v > 0 ? v : fallback; } catch { return fallback; }
}

/** {font, size} ready for makeMathTypePackage: size 'auto' is resolved from the cursor. */
export async function mtOptions({ withFont = true } = {}) {
  const size = state.size === 'auto' ? await surroundingPt() : Number(state.size);
  return { font: withFont ? state.font : null, size, vector: state.picture !== 'png', display: state.layout === 'classic' };
}
/** True when MathType objects are drawn in the classic style (full-size fractions and big operators even inline). */
export const classicLayout = () => state.layout === 'classic';
/** For convertNativeToMathType: 'auto' stays per-equation. */
export const mtConvertOptions = () => ({ font: state.font, size: state.size === 'auto' ? 'auto' : Number(state.size), vector: state.picture !== 'png', display: state.layout === 'classic' });
export const figurePt = () => (state.size === 'auto' ? surroundingPt() : Promise.resolve(Number(state.size)));

/** Mount the two selects into `root`; onChange fires for any panel's change. */
export function mountMtSettings(root, { fontRow = true, onChange } = {}) {
  root.classList.add('mt-settings');
  root.innerHTML = (fontRow ? `<label class="field"><span>Kiểu chữ</span><select data-mt="font">${Object.entries(MT_FONTS).map(([k, f]) => `<option value="${k}">${f.label}</option>`).join('')}</select></label>` : '') +
    (fontRow ? `<label class="field"><span>Kiểu hiển thị</span><select data-mt="layout"><option value="classic">Cổ điển: cỡ lớn như riêng dòng</option><option value="compact">Gọn: nhỏ theo dòng chữ</option></select></label>` : '') +
    (fontRow ? `<label class="field"><span>Ảnh</span><select data-mt="picture"><option value="emf">Vector EMF (nét)</option><option value="png">Ảnh PNG</option></select></label>` : '') +
    `<label class="field"><span>Cỡ chữ</span><select data-mt="size">${SIZES.map((s) => `<option value="${s}">${s === 'auto' ? 'Theo văn bản (tự động)' : s + ' pt'}</option>`).join('')}<option value="custom">Số khác…</option></select><input type="number" data-mt-custom min="4" max="200" step="0.5" placeholder="pt" style="width:70px;margin-left:6px" hidden></label>` +
    (fontRow ? '<div class="hint">Kiểu chữ có tác dụng khi mở lại bằng MathType; font ghi “cần cài font” phải có trên máy mở tài liệu.</div>' : '');
  const sync = () => document.querySelectorAll('.mt-settings select').forEach((el) => {
    const v = String(state[el.dataset.mt]);
    if (el.dataset.mt !== 'size') { el.value = v; return; }
    const custom = !SIZES.includes(v) || customOpen;
    el.value = custom ? 'custom' : v;
    const num = el.parentNode.querySelector('[data-mt-custom]');
    if (num) { num.hidden = !custom; if (custom && document.activeElement !== num) num.value = SIZES.includes(v) ? '' : v; }
  });
  let customOpen = false;
  root.addEventListener('input', (ev) => {
    const num = ev.target.closest('[data-mt-custom]');
    if (!num) return;
    const n = parseFloat(String(num.value).replace(',', '.'));
    if (!(n >= 4 && n <= 200)) return;
    state.size = String(n); save();
    document.querySelectorAll('.mt-settings [data-mt-custom]').forEach((o) => { if (o !== num) o.value = num.value; });
    if (onChange) onChange();
  });
  root.addEventListener('change', (ev) => {
    const el = ev.target.closest('select[data-mt]');
    if (!el) return;
    if (el.dataset.mt === 'size' && el.value === 'custom') {
      customOpen = true; sync();
      const num = el.parentNode.querySelector('[data-mt-custom]'); if (num) num.focus();
      return;
    }
    customOpen = false;
    state[el.dataset.mt] = el.value; save(); sync();
    if (onChange) onChange();
  });
  sync();
}
