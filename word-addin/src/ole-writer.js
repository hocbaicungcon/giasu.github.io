// Build the OLE compound file of a MathType object: the three constant streams + a new "Equation Native" stream, laid
// out like a real MathType file (directory entries and tree pointers are copied from a real one).
import { STREAMS, TEMPLATE_OLE } from './mathtype-template.js';

const unb64 = (s) => { const bin = atob(s); const out = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i); return out; };
const END = 0xfffffffe, FREE = 0xffffffff, FATSECT = 0xfffffffd;
const SEC = 512, MINI = 64, CUTOFF = 4096;
const NAMES = ['\u0001Ole', '\u0001CompObj', '\u0003ObjInfo', 'Equation Native'];

let templateInfo = null;
function template() {
  if (templateInfo) return templateInfo;
  const data = unb64(TEMPLATE_OLE);
  const dv = new DataView(data.buffer);
  const dirStart = dv.getUint32(0x30, true);
  const fatSectors = [];
  for (let i = 0; i < dv.getUint32(0x2c, true); i++) fatSectors.push(dv.getUint32(0x4c + 4 * i, true));
  const fat = [];
  for (const s of fatSectors) for (let o = 0; o < SEC; o += 4) fat.push(dv.getUint32((s + 1) * SEC + o, true));
  const dirBytes = [];
  for (let s = dirStart; s < 0xfffffffa; s = fat[s]) dirBytes.push(data.subarray((s + 1) * SEC, (s + 2) * SEC));
  const dir = new Uint8Array(dirBytes.length * SEC);
  dirBytes.forEach((b, i) => dir.set(b, i * SEC));
  const entries = [];
  for (let o = 0; o + 128 <= dir.length; o += 128) {
    const raw = dir.slice(o, o + 128);
    const len = new DataView(raw.buffer).getUint16(64, true);
    let name = '';
    for (let k = 0; k + 2 <= len - 2 + 0 && k < 64; k += 2) name += String.fromCharCode(raw[k] | (raw[k + 1] << 8));
    entries.push({ raw, name: len ? name.replace(/\0+$/, '') : '' });
  }
  templateInfo = { header: data.slice(0, SEC), entries };
  return templateInfo;
}

/** equationStream: bytes of the "Equation Native" stream (28-byte header + MTEF). Returns the .bin file. */
export function buildOle(equationStream) {
  const { header, entries } = template();
  const streams = new Map([[NAMES[0], unb64(STREAMS[NAMES[0]])], [NAMES[1], unb64(STREAMS[NAMES[1]])], [NAMES[2], unb64(STREAMS[NAMES[2]])], [NAMES[3], equationStream]]);
  const small = NAMES.filter((n) => streams.get(n).length < CUTOFF);
  const big = NAMES.filter((n) => streams.get(n).length >= CUTOFF);
  // mini stream
  const miniStart = new Map();
  let miniCount = 0;
  for (const n of small) { miniStart.set(n, miniCount); miniCount += Math.ceil(streams.get(n).length / MINI); }
  const miniFat = new Uint32Array(Math.max(1, Math.ceil(miniCount / 128)) * 128).fill(FREE);
  for (const n of small) { const s = miniStart.get(n), c = Math.ceil(streams.get(n).length / MINI); for (let i = 0; i < c; i++) miniFat[s + i] = i === c - 1 ? END : s + i + 1; }
  const miniContainerSectors = Math.ceil(miniCount * MINI / SEC);
  const miniFatSectors = miniFat.length / 128;
  const dirSectors = Math.ceil(entries.length / 4);
  const bigSectors = big.map((n) => Math.ceil(streams.get(n).length / SEC));
  const nonFat = dirSectors + miniFatSectors + miniContainerSectors + bigSectors.reduce((a, b) => a + b, 0);
  let fatSectors = 1;
  while (fatSectors * 128 < fatSectors + nonFat) fatSectors++;
  if (fatSectors > 109) throw new Error('equation too large');
  let next = fatSectors;
  const dirStart = next; next += dirSectors;
  const miniFatStart = next; next += miniFatSectors;
  const miniContainerStart = miniContainerSectors ? next : END; next += miniContainerSectors;
  const bigStart = new Map();
  big.forEach((n, i) => { bigStart.set(n, next); next += bigSectors[i]; });
  const total = next;
  const fat = new Uint32Array(fatSectors * 128).fill(FREE);
  for (let i = 0; i < fatSectors; i++) fat[i] = FATSECT;
  const chain = (start, count) => { for (let i = 0; i < count; i++) fat[start + i] = i === count - 1 ? END : start + i + 1; };
  chain(dirStart, dirSectors);
  chain(miniFatStart, miniFatSectors);
  if (miniContainerSectors) chain(miniContainerStart, miniContainerSectors);
  big.forEach((n, i) => chain(bigStart.get(n), bigSectors[i]));

  const out = new Uint8Array(SEC * (1 + total));
  const dv = new DataView(out.buffer);
  out.set(header, 0);
  dv.setUint32(0x2c, fatSectors, true);
  dv.setUint32(0x30, dirStart, true);
  dv.setUint32(0x38, CUTOFF, true);
  dv.setUint32(0x3c, miniFatStart, true);
  dv.setUint32(0x40, miniFatSectors, true);
  dv.setUint32(0x44, END, true);
  dv.setUint32(0x48, 0, true);
  for (let i = 0; i < 109; i++) dv.setUint32(0x4c + 4 * i, i < fatSectors ? i : FREE, true);
  const sector = (i) => (i + 1) * SEC;
  for (let i = 0; i < fat.length; i++) dv.setUint32(sector(0) + 4 * i, fat[i], true);
  // directory
  entries.forEach((e, i) => {
    const raw = e.raw.slice();
    const rv = new DataView(raw.buffer);
    if (e.name === 'Root Entry') { rv.setUint32(116, miniContainerSectors ? miniContainerStart : END, true); rv.setUint32(120, miniCount * MINI, true); }
    else if (streams.has(e.name)) {
      const len = streams.get(e.name).length;
      rv.setUint32(116, len < CUTOFF ? miniStart.get(e.name) : bigStart.get(e.name), true);
      rv.setUint32(120, len, true);
      rv.setUint32(124, 0, true);
    }
    out.set(raw, sector(dirStart) + i * 128);
  });
  for (let i = 0; i < miniFat.length; i++) dv.setUint32(sector(miniFatStart) + 4 * i, miniFat[i], true);
  for (const n of small) out.set(streams.get(n), sector(miniContainerStart) + miniStart.get(n) * MINI);
  for (const n of big) out.set(streams.get(n), sector(bigStart.get(n)));
  return out;
}
