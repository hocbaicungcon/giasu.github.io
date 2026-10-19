// QR code of the answer key in the format of https://giasu.ai.vn/cham-thi/ (js/answer-qr.js, js/inputs.js):
// {"101":"A_B_AB#DSDS_SSDD#1,5_-2", ...}  part I letters (O any, X skipped), part II 4 chars per question, part III numbers.
// Reuses the site's qrcode-generator (MIT) and jsQR (Apache-2.0) in taskpane/vendor/.

/** versions: [{code, answers:[{kind, number, value, tf}]}] (as built by src/exam.js). Returns {payloads: [{codes, text}], warnings}. */
export function examKeys(version, warnings = []) {
  const p1 = [], p2 = [], p3 = [];
  for (const a of version.answers) {
    if (a.kind === 'mc' || a.kind === 'other') {
      if (a.value && /^[A-D]{1,4}$/.test(a.value)) p1.push(a.value);
      else { p1.push('X'); warnings.push(`Mã đề ${version.code}: câu ${a.number} (phần I) chưa có đáp án — ghi X (bỏ qua).`); }
    } else if (a.kind === 'tf') {
      if (a.tf && a.tf.length === 4) p2.push(a.tf.map((c) => (c === 'Đ' ? 'D' : c)).join(''));
      else { p2.push('XXXX'); warnings.push(`Mã đề ${version.code}: câu ${a.number} (phần II) chưa có đáp án — ghi XXXX.`); }
    } else if (a.kind === 'short') {
      const v = String(a.value ?? '').trim().replace(/\s+/g, '');
      if (/^-?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(v)) p3.push(v);
      else { p3.push('X'); warnings.push(`Mã đề ${version.code}: câu ${a.number} (phần III) không phải số — ghi X.`); }
    }
  }
  if (p1.length > 40 || p2.length > 8 || p3.length > 6) throw new Error(`Mã đề ${version.code}: vượt mẫu phiếu (tối đa 40 câu phần I, 8 câu phần II, 6 câu phần III).`);
  if (!/^\d{1,4}$/.test(String(version.code))) throw new Error('Mã đề phải gồm 1 đến 4 chữ số để tạo QR.');
  return [p1.join('_'), p2.join('_'), p3.join('_')].join('#');
}

export function qrPayloads(versions, maxBytes = 700) {
  const warnings = [], payloads = [];
  let group = {}, codes = [];
  for (const v of versions) {
    const entry = examKeys(v, warnings);
    const next = { ...group, [v.code]: entry };
    if (codes.length && JSON.stringify(next).length > maxBytes) { payloads.push({ codes, text: JSON.stringify(group) }); group = { [v.code]: entry }; codes = [v.code]; } else { group = next; codes.push(v.code); }
  }
  if (codes.length) payloads.push({ codes, text: JSON.stringify(group) });
  return { payloads, warnings };
}

const loadScript = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Không tải được ' + src)); document.head.appendChild(s); });
let ready = null;
async function libs(base) {
  if (!ready) ready = Promise.all([typeof qrcode === 'undefined' ? loadScript(base + 'qrcode.js') : 0, typeof jsQR === 'undefined' ? loadScript(base + 'jsQR.js') : 0]);
  await ready;
}

function loadLogo(url) {
  return new Promise((res) => { const img = new Image(); img.onload = () => res(img); img.onerror = () => res(null); img.src = url; });
}

/** Draw the QR on a canvas (error correction H, centre logo as large as still reads back). Throws if it cannot be read back. */
export async function renderQr(text, { vendorBase = 'vendor/', logoUrl = 'icon-80.png' } = {}) {
  await libs(vendorBase);
  const qr = qrcode(0, 'H');
  qr.addData(text, 'Byte');
  try { qr.make(); } catch { throw new Error('Nội dung quá dài cho một mã QR.'); }
  const count = qr.getModuleCount(), cell = Math.max(6, Math.floor(1024 / (count + 8))), margin = 4 * cell;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = (count + 8) * cell;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = '#000';
  for (let y = 0; y < count; y++) for (let x = 0; x < count; x++) if (qr.isDark(y, x)) ctx.fillRect(margin + x * cell, margin + y * cell, cell, cell);
  const original = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const logo = await loadLogo(logoUrl);
  const read = () => { const p = ctx.getImageData(0, 0, canvas.width, canvas.height); const d = jsQR(p.data, p.width, p.height, { inversionAttempts: 'dontInvert' }); return d && d.data === text; };
  if (!logo) { if (read()) return canvas; throw new Error('QR chưa đọc lại chính xác.'); }
  for (const fraction of [0.15, 0.12, 0.09]) {
    ctx.putImageData(original, 0, 0);
    const modules = Math.max(3, Math.floor(count * fraction) | 1), side = modules * cell, offset = (canvas.width - side) / 2;
    ctx.drawImage(logo, offset, offset, side, side);
    if (read()) return canvas;
    await new Promise((r) => setTimeout(r, 0));
  }
  ctx.putImageData(original, 0, 0);   // without a logo it still has to read back
  if (read()) return canvas;
  throw new Error('QR chưa đọc lại chính xác. Hãy chọn ít mã đề hơn.');
}
