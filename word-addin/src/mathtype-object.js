// Build MathType (DSMT) objects for a Word package: the w:object XML, the OLE + picture parts and their relationships.
import { latexToEquationStream } from './mtef-writer.js';
import { buildOle } from './ole-writer.js';
import { scanPackage, splitParts } from './ooxml.js';

const SHAPETYPE = `<v:shapetype id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f"><v:stroke joinstyle="miter"/><v:formulas><v:f eqn="if lineDrawn pixelLineWidth 0"/><v:f eqn="sum @0 1 0"/><v:f eqn="sum 0 0 @1"/><v:f eqn="prod @2 1 2"/><v:f eqn="prod @3 21600 pixelWidth"/><v:f eqn="prod @3 21600 pixelHeight"/><v:f eqn="sum @0 0 1"/><v:f eqn="prod @6 1 2"/><v:f eqn="prod @7 21600 pixelWidth"/><v:f eqn="sum @8 21600 0"/><v:f eqn="prod @7 21600 pixelHeight"/><v:f eqn="sum @10 21600 0"/></v:formulas><v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/><o:lock v:ext="edit" aspectratio="t"/></v:shapetype>`;
const NS = { v: 'urn:schemas-microsoft-com:vml', o: 'urn:schemas-microsoft-com:office:office', r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships', w: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main', m: 'http://schemas.openxmlformats.org/officeDocument/2006/math' };
const REL = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
const b64 = (bytes) => { let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(s).replace(/(.{76})/g, '$1\n'); };

/** One MathType object: {runXml, parts: [{name, type, data}], rels: [{id, type, target}]}. render(latex) -> {png, width, height, baseline} (points). */
let counter = Math.floor(Date.now() / 1000) % 100000;   // unique names across calls (and across sessions)

export async function mathTypeObject(latex, { render, style = 'times', inline = true }) {
  const stream = latexToEquationStream(latex, { style, inline });
  const ole = buildOle(stream);
  const pic = await render(latex);
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
      { name: `/word/media/imageTc${n}.png`, type: 'image/png', data: pic.png },
    ],
    rels: [{ id: rIdOle, type: REL + 'oleObject', target: `embeddings/oleObjectTc${n}.bin` }, { id: rIdImg, type: REL + 'image', target: `media/imageTc${n}.png` }],
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
  out = out.replace(relsPart.body, () => relsPart.body.replace('</Relationships>', relXml + '</Relationships>'));
  const partXml = objects.flatMap((o) => o.parts).map((p) => `<pkg:part pkg:name="${p.name}" pkg:contentType="${p.type}" pkg:compression="store"><pkg:binaryData>${b64(p.data)}</pkg:binaryData></pkg:part>`).join('');
  return out.replace('</pkg:package>', partXml + '</pkg:package>');
}

/**
 * Replace the Word (OMML) equations of a package by MathType objects. render(latex) -> picture description.
 * Returns {pkg, converted, kept: [{reason, latex}], changed}.
 */
export async function convertNativeToMathType(pkg, { render, style = 'times' } = {}) {
  const scan = scanPackage(pkg);
  let doc = scan.doc;
  const result = { pkg, converted: 0, kept: [], changed: false };
  const edits = [], objects = [];
  for (const eq of scan.equations) {
    if (eq.kind !== 'native') continue;
    if (eq.latex === null) { result.kept.push({ reason: eq.error }); continue; }
    try {
      const obj = await mathTypeObject(eq.latex, { render, style, });
      let [start, end] = eq.span;
      const before = doc.slice(0, start), after = doc.slice(end);
      const para = /<m:oMathPara>\s*$/.exec(before), paraEnd = /^\s*<\/m:oMathPara>/.exec(after);
      if (para && paraEnd) { start -= para[0].length; end += paraEnd[0].length; }   // a display equation becomes an inline object
      edits.push({ start, end, repl: obj.runXml });
      objects.push(obj);
    } catch (e) { result.kept.push({ reason: e.message, latex: eq.latex }); }
  }
  if (!edits.length) return result;
  edits.sort((a, b) => b.start - a.start);
  for (const e of edits) doc = doc.slice(0, e.start) + e.repl + doc.slice(e.end);
  result.pkg = attachObjects(pkg, doc, objects);
  result.converted = objects.length;
  result.changed = true;
  return result;
}

/** A package holding just one paragraph with one MathType object, for selection.insertOoxml (the equation editor). */
export async function makeMathTypePackage(latex, { render, style = 'times', inline = true } = {}) {
  const obj = await mathTypeObject(latex, { render, style, inline });
  const base = `<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/_rels/document.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document xmlns:w="${NS.w}"><w:body><w:p>${obj.runXml}</w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>`;
  const doc = /<w:document[\s\S]*<\/w:document>/.exec(base)[0];
  return attachObjects(base, doc, [obj]);
}

/** Browser: draw a LaTeX equation as the picture Word shows for a MathType object. */
export async function browserRender(latex) {
  const { renderLatex, svgToPng } = await import('./mathrender.js');
  const r = renderLatex(latex, { fontSize: 12 });
  return { png: await svgToPng(r.svg, r.width, r.height, 4), width: r.width, height: r.height, baseline: r.baseline };
}
