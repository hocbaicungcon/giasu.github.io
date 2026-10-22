// Build MathType (DSMT) objects for a Word package: the w:object XML, the OLE + picture parts and their relationships.
import { latexToEquationStream, MT_FONTS } from './mtef-writer.js';
import { buildOle } from './ole-writer.js';
import { scanPackage, splitParts } from './ooxml.js';

const SHAPETYPE = `<v:shapetype id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f"><v:stroke joinstyle="miter"/><v:formulas><v:f eqn="if lineDrawn pixelLineWidth 0"/><v:f eqn="sum @0 1 0"/><v:f eqn="sum 0 0 @1"/><v:f eqn="prod @2 1 2"/><v:f eqn="prod @3 21600 pixelWidth"/><v:f eqn="prod @3 21600 pixelHeight"/><v:f eqn="sum @0 0 1"/><v:f eqn="prod @6 1 2"/><v:f eqn="prod @7 21600 pixelWidth"/><v:f eqn="sum @8 21600 0"/><v:f eqn="prod @7 21600 pixelHeight"/><v:f eqn="sum @10 21600 0"/></v:formulas><v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/><o:lock v:ext="edit" aspectratio="t"/></v:shapetype>`;
const NS = { v: 'urn:schemas-microsoft-com:vml', o: 'urn:schemas-microsoft-com:office:office', r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships', w: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main', m: 'http://schemas.openxmlformats.org/officeDocument/2006/math' };
const REL = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
const b64 = (bytes) => { let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(s).replace(/(.{76})/g, '$1\n'); };

/** One MathType object: {runXml, parts: [{name, type, data}], rels: [{id, type, target}]}. render(latex) -> {png, width, height, baseline} (points). */
let counter = Math.floor(Date.now() / 1000) % 100000;   // unique names across calls (and across sessions)

export async function mathTypeObject(latex, { render, style = 'times', inline = true, font = null, size = 12, vector = true, display = false }) {
  const fontKey = font || style;
  const pt = Number(size) > 0 ? Number(size) : 12;
  const stream = latexToEquationStream(latex, { style, inline, font: fontKey, size: pt });
  const ole = buildOle(stream);
  const pic = await render(latex, { size: pt, family: (MT_FONTS[fontKey] || MT_FONTS.times).family, vector, display });
  const useEmf = vector && pic.emf instanceof Uint8Array && pic.emf.length > 100;   // vector picture when it could be written, else the PNG
  const img = useEmf ? { ext: 'emf', type: 'image/x-emf', data: pic.emf } : { ext: 'png', type: 'image/png', data: pic.png };
  const n = ++counter;
  const rIdOle = `rIdTcOle${n}`, rIdImg = `rIdTcImg${n}`;
  const w = pic.width, h = pic.height;
  const runXml = `<w:r><w:rPr><w:position w:val="${-Math.round(pic.baseline * 2)}"/></w:rPr><w:object w:dxaOrig="${Math.round(w * 20)}" w:dyaOrig="${Math.round(h * 20)}">${SHAPETYPE}` +
    `<v:shape id="_x0000_i${n}" type="#_x0000_t75" style="width:${w.toFixed(1)}pt;height:${h.toFixed(1)}pt" o:ole=""><v:imagedata r:id="${rIdImg}" o:title=""/></v:shape>` +
    `<o:OLEObject Type="Embed" ProgID="Equation.DSMT4" ShapeID="_x0000_i${n}" DrawAspect="Content" ObjectID="_${n}${String(Date.now()).slice(-6)}" r:id="${rIdOle}"/></w:object></w:r>`;
  return {
    runXml,
    parts: [
      { name: `/word/embeddings/oleObjectTc${n}.bin`, type: 'application/vnd.openxmlformats-officedocument.oleObject', data: ole },
      { name: `/word/media/imageTc${n}.${img.ext}`, type: img.type, data: img.data },
    ],
    rels: [{ id: rIdOle, type: REL + 'oleObject', target: `embeddings/oleObjectTc${n}.bin` }, { id: rIdImg, type: REL + 'image', target: `media/imageTc${n}.${img.ext}` }],
  };
}

function ensureNs(root) {
  let r = root;
  const head = r.match(/^<[^>]*>/)[0];
  for (const [p, uri] of Object.entries(NS)) if (!new RegExp(`xmlns:${p}=`).test(head)) r = r.replace(/^<([\w:]+)/, `<$1 xmlns:${p}="${uri}"`);
  return r;
}

/** Add parts and relationships to a flat-OPC package and swap the given document.xml text in. */
export function attachObjects(pkg, docXml, objects) {
  let out = pkg;
  const parts = splitParts(out);
  const docPart = parts.get('/word/document.xml');
  out = out.replace(docPart.body, () => docPart.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, c) => a + ensureNs(docXml.trimStart()) + c));
  const relsPart = splitParts(out).get('/word/_rels/document.xml.rels');
  const relXml = objects.flatMap((o) => o.rels).map((r) => `<Relationship Id="${r.id}" Type="${r.type}" Target="${r.target}"/>`).join('');
  if (relsPart) {
    out = out.replace(relsPart.body, () => relsPart.body.replace(/<Relationships\b([^>]*?)\s*\/>/, '<Relationships$1></Relationships>').replace('</Relationships>', relXml + '</Relationships>'));
  } else {
    const rels = `<pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relXml}</Relationships></pkg:xmlData></pkg:part>`;
    out = out.replace('</pkg:package>', rels + '</pkg:package>');
  }
  const partXml = objects.flatMap((o) => o.parts).map((p) => `<pkg:part pkg:name="${p.name}" pkg:contentType="${p.type}" pkg:compression="store"><pkg:binaryData>${b64(p.data)}</pkg:binaryData></pkg:part>`).join('');
  return out.replace('</pkg:package>', partXml + '</pkg:package>');
}

/**
 * Font size (points) of the text around the equation at doc[span]: the equation's own run size, else the nearest run size in
 * its paragraph, else the paragraph style / Normal style / document default.
 */
export function detectFontPt(doc, span, stylesXml = '', fallback = 12) {
  const half = (xml) => { const m = [...xml.matchAll(/<w:sz w:val="(\d+)"/g)]; return m.length ? Number(m[m.length - 1][1]) / 2 : null; };
  const pStart = Math.max(doc.lastIndexOf('<w:p>', span[0]), doc.lastIndexOf('<w:p ', span[0]));
  const pEndAt = doc.indexOf('</w:p>', span[1]);
  const para = doc.slice(Math.max(0, pStart), pEndAt < 0 ? doc.length : pEndAt);
  const rel = span[0] - Math.max(0, pStart);
  const own = half(doc.slice(span[0], span[1]));
  if (own) return own;
  const before = half(para.slice(0, rel).replace(/<w:pPr>[\s\S]*?<\/w:pPr>/, ''));
  if (before) return before;
  const after = half(para.slice(rel + (span[1] - span[0])).replace(/<w:pPr>[\s\S]*?<\/w:pPr>/, ''));
  if (after) return after;
  const styleSz = (id) => { const m = new RegExp(`<w:style [^>]*w:styleId="${id}"[\\s\\S]*?</w:style>`).exec(stylesXml); return m ? half(m[0]) : null; };
  const ps = /<w:pStyle w:val="([^"]+)"/.exec(para);
  const sz = (ps && styleSz(ps[1])) || styleSz('Normal') || half((/<w:docDefaults>[\s\S]*?<\/w:docDefaults>/.exec(stylesXml) || [''])[0]);
  return sz || fallback;
}

/**
 * Replace the Word (OMML) equations of a package by MathType objects. render(latex) -> picture description.
 * Returns {pkg, converted, kept: [{reason, latex}], changed}.
 */
export async function convertNativeToMathType(pkg, { render, style = 'times', font = null, size = 'auto', defaultSize = 12, vector = true, display = false, signal, onProgress = () => {} } = {}) {
  const scan = scanPackage(pkg);
  const styles = splitParts(pkg).get('/word/styles.xml')?.body || '';
  let doc = scan.doc;
  const result = { pkg, converted: 0, kept: [], changed: false };
  const edits = [], objects = [];
  const native = scan.equations.filter(eq => eq.kind === 'native');
  let completed = 0;
  const checkpoint = () => {
    if (signal?.aborted) {
      const error = new Error('Đã hủy chuyển đổi.');
      error.name = 'AbortError';
      throw error;
    }
  };
  for (const eq of native) {
    checkpoint();
    // Let the cancel button and progress paint even when rendering resolves immediately.
    if (completed % 8 === 0) { await new Promise(resolve => setTimeout(resolve, 0)); checkpoint(); }
    if (eq.kind !== 'native') continue;
    if (eq.latex === null) { result.kept.push({ reason: eq.error }); onProgress(++completed, native.length); continue; }
    try {
      let [start, end] = eq.span;
      const pt = size === 'auto' ? detectFontPt(doc, eq.span, styles, defaultSize) : Number(size);
      const obj = await mathTypeObject(eq.latex, { render, style, font, size: pt, vector, display });
      const before = doc.slice(0, start), after = doc.slice(end);
      const para = /<m:oMathPara>\s*$/.exec(before), paraEnd = /^\s*<\/m:oMathPara>/.exec(after);
      if (para && paraEnd) { start -= para[0].length; end += paraEnd[0].length; }   // a display equation becomes an inline object
      edits.push({ start, end, repl: obj.runXml });
      objects.push(obj);
    } catch (e) { result.kept.push({ reason: e.message, latex: eq.latex }); }
    onProgress(++completed, native.length);
  }
  checkpoint();
  if (!edits.length) return result;
  edits.sort((a, b) => b.start - a.start);
  for (const e of edits) doc = doc.slice(0, e.start) + e.repl + doc.slice(e.end);
  result.pkg = attachObjects(pkg, doc, objects);
  result.converted = objects.length;
  result.changed = true;
  return result;
}

/** A package holding just one paragraph with one MathType object, for selection.insertOoxml (the equation editor). */
export async function makeMathTypePackage(latex, { render, style = 'times', inline = true, font = null, size = 12, vector = true, display = false } = {}) {
  const obj = await mathTypeObject(latex, { render, style, inline, font, size, vector, display });
  const base = `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document xmlns:w="${NS.w}"><w:body><w:p>${obj.runXml}</w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
  const doc = /<w:document[\s\S]*<\/w:document>/.exec(base)[0];
  return attachObjects(base, doc, [obj]);
}

/** Browser: draw a LaTeX equation as the picture Word shows for a MathType object. */
export async function browserRender(latex, { size = 12, family = 'times', vector = true, display = false } = {}) {
  // the same layout as the live preview (KaTeX), as outlines: sharp EMF, or PNG if the vector picture cannot be written
  try {
    const { katexOutlines, outlinesToPng } = await import('./katex-render.js');
    const r = await katexOutlines(latex, size, { display });
    let emf = null;
    if (vector) { try { const { polygonsToEmf } = await import('./emf.js'); emf = polygonsToEmf(r.groups, r.width, r.height); } catch { emf = null; } }
    return { png: emf ? null : outlinesToPng(r, 8), emf, width: r.width, height: r.height, baseline: r.baseline };
  } catch { /* KaTeX missing or it rejects this LaTeX: the built-in layout below */ }
  const { renderLatex, svgToPng, charAdvance } = await import('./mathrender.js');
  const r = renderLatex(latex, { fontSize: size, family });
  let emf = null;
  if (vector) { try { const { svgToEmf } = await import('./emf.js'); emf = svgToEmf(r.svg, charAdvance); } catch { emf = null; } }   // any problem: keep the PNG
  return { png: emf ? null : await svgToPng(r.svg, r.width, r.height, 4), emf, width: r.width, height: r.height, baseline: r.baseline };
}
