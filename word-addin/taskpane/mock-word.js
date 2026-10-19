// A small in-memory stand-in for Office.js / Word, enough for taskpane.js, so the UI can be exercised in any browser.
// It models the document as a flat-OPC package and implements the calls src/word-io.js uses.
import { splitParts } from '../src/ooxml.js';

export async function install(url) {
  const text = await (await fetch(url)).text();
  let pkg = text;
  const docPart = () => splitParts(pkg).get('/word/document.xml');
  const getDoc = () => /<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(docPart().body)[1];
  const setDoc = (xml) => { const p = docPart(); pkg = pkg.replace(p.body, () => p.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + xml + b)); };
  const bodyParts = () => {
    const d = getDoc();
    const m = /^([\s\S]*?<w:body>)([\s\S]*?)(<w:sectPr\/>)?(<\/w:body>[\s\S]*)$/.exec(d);
    const inner = m[2];
    const paras = [], re = /<w:p[ >][\s\S]*?<\/w:p>/g;
    let x;
    while ((x = re.exec(inner))) paras.push(x[0]);
    return { head: m[1], tail: (m[3] || '') + m[4], paras };
  };
  const packageWith = (paras) => { const { head, tail } = bodyParts(); const d = head + paras.join('') + tail; const p = docPart(); return pkg.replace(p.body, () => p.body.replace(/(<pkg:xmlData>)[\s\S]*(<\/pkg:xmlData>)/, (_m, a, b) => a + d + b)); };
  const state = { selection: [1, 2, 3] };

  const makeParagraph = (i) => ({
    index: i,
    getOoxml() { return { value: packageWith([bodyParts().paras[i]]) }; },
    getRange() { return this; },
    insertOoxml(newPkg) {
      const parts = bodyParts();
      const nd = /<pkg:part pkg:name="\/word\/document.xml"[\s\S]*?<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(newPkg)[1];
      const inner = /<w:body>([\s\S]*?)(<w:sectPr\/>)?<\/w:body>/.exec(nd)[1];
      const repl = [], re = /<w:p[ >][\s\S]*?<\/w:p>/g;
      let x;
      while ((x = re.exec(inner))) repl.push(x[0]);
      parts.paras.splice(i, 1, ...repl);
      setDoc(parts.head + parts.paras.join('') + parts.tail);
    },
    select() { state.selection = [i]; },
  });
  const collection = (idxFn) => ({ items: [], load() { this.items = idxFn().map(makeParagraph); } });

  window.Office = { onReady: async () => ({ host: 'Mock' }), context: { host: undefined, diagnostics: { host: 'mock', platform: 'browser', version: '0' }, requirements: { isSetSupported: () => true } } };
  window.Word = {
    run: async (fn) => fn({
      document: {
        body: { getOoxml: () => ({ value: pkg }), paragraphs: collection(() => bodyParts().paras.map((_p, i) => i)),
          insertOoxml(newPkg, where) {
            const nd = /<pkg:part pkg:name="\/word\/document.xml"[\s\S]*?<pkg:xmlData>([\s\S]*)<\/pkg:xmlData>/.exec(newPkg)[1];
            const inner = /<w:body>([\s\S]*?)(<w:sectPr[\s\S]*<\/w:sectPr>|<w:sectPr\/>)?<\/w:body>/.exec(nd)[1];
            const cur = bodyParts();
            const blocks = inner;
            const paras = [], re = /<w:p[ >][\s\S]*?<\/w:p>/g;
            let x;
            while ((x = re.exec(blocks))) paras.push(x[0]);
            setDoc(cur.head + (where === 'Replace' ? paras : cur.paras.concat(paras)).join('') + cur.tail);
          } },
        getSelection: () => ({
          paragraphs: collection(() => state.selection.filter((i) => i < bodyParts().paras.length)),
          getOoxml: () => makeParagraph(state.selection[0]).getOoxml(),
          insertOoxml: (newPkg) => makeParagraph(state.selection[0]).insertOoxml(newPkg),
        }),
      },
      application: { createDocument: () => ({ body: { insertOoxml() {} }, open() {} }) },
      sync: async () => {},
    }),
  };
  window.__mockDoc = { get pkg() { return pkg; }, paragraphs: () => bodyParts().paras };
}
