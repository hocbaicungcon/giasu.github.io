// Markdown copied as plain text into Word -> native Word formatting and equations.
import { Lexer } from '../taskpane/vendor/marked.js';
import { splitParts, latexToOmml } from './ooxml.js';
import { splitChildren } from './exam.js';
import { escapeXml, unescapeXml } from './xml.js';

const run = (text, pr = '') => text ? `<w:r>${pr ? `<w:rPr>${pr}</w:rPr>` : ''}<w:t xml:space="preserve">${escapeXml(text)}</w:t></w:r>` : '';

export function markdownToWord(text) {
  const math = [], kept = [];
  let converted = 0;
  // Lex math before Markdown, which otherwise interprets TeX backslashes, * and _.
  // Exclude code spans and fenced blocks from math recognition.
  const protectedText = text.replace(/(^ {0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?^ {0,3}\2[^\n]*(?:\n|$))|(`+)[^\n]*?\3|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$|(?<![\\$])\$(?![\s$])[^\n]*?(?<![\\\s])\$(?!\$)/gm, (raw, fence, ticks, code) => {
    if (fence || code) return raw;
    const display = raw.startsWith('$$') || raw.startsWith('\\[');
    const n = raw.startsWith('$') ? (display ? 2 : 1) : 2;
    const latex = raw.slice(n, -n);
    let xml;
    try { xml = latexToOmml(latex, { display: false }); converted++; }
    catch (e) { kept.push({ reason: 'LaTeX→Word: ' + e.message, latex }); xml = run(raw); }
    const id = math.push({ xml, display }) - 1;
    return `\uE000${id}\uE001`;
  });
  const plain = (value, pr) => value.split(/(\uE000\d+\uE001)/).map(s => {
    const m = /^\uE000(\d+)\uE001$/.exec(s);
    return m ? math[+m[1]].xml : run(unescapeXml(s), pr);
  }).join('');
  const inline = (tokens, pr = '') => (tokens || []).map(t => {
    switch (t.type) {
      case 'strong': return inline(t.tokens, pr + '<w:b/>');
      case 'em': return inline(t.tokens, pr + '<w:i/>');
      case 'del': return inline(t.tokens, pr + '<w:strike/>');
      case 'codespan': return run(t.text, pr + '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/>');
      case 'br': return '<w:r><w:br/></w:r>';
      case 'link': return inline(t.tokens, pr + '<w:u w:val="single"/>') + run(` (${t.href})`, pr);
      case 'image': return run(`[Ảnh: ${t.text || ''}] (${t.href})`, pr);
      default: return t.tokens ? inline(t.tokens, pr) : plain(t.text ?? t.raw ?? '', pr);
    }
  }).join('');
  const paragraph = (content, props = '') => `<w:p>${props ? `<w:pPr>${props}</w:pPr>` : ''}${content}</w:p>`;
  const addProps = (xml, props, all = false) => xml.replace(all ? /<w:p>(<w:pPr>)?/g : /<w:p>(<w:pPr>)?/, (_, ppr) => `<w:p><w:pPr>${props}${ppr ? '' : '</w:pPr>'}`);
  function blocks(tokens, depth = 0) {
    return tokens.map(t => {
      switch (t.type) {
        case 'space': return '';
        case 'heading': return paragraph(inline(t.tokens, '<w:b/>' + `<w:sz w:val="${[0, 36, 32, 28, 26, 24, 24][t.depth]}"/>`), `<w:keepNext/><w:outlineLvl w:val="${t.depth - 1}"/>`);
        case 'paragraph': case 'text': {
          const solo = /^\s*\uE000(\d+)\uE001\s*$/.exec(t.text || '');
          const formula = solo && math[+solo[1]];
          return formula?.display ? paragraph(`<m:oMathPara>${formula.xml}</m:oMathPara>`) : paragraph(inline(t.tokens || [{ type: 'text', text: t.text }]));
        }
        case 'list': return t.items.map((item, i) => {
          const marker = t.ordered ? `${Number(t.start) + i}. ` : '• ';
          const content = blocks(item.tokens, depth + 1);
          const prefix = item.task ? (item.checked ? '☑ ' : '☐ ') : '';
          return addProps(content, `<w:ind w:left="${(depth + 1) * 360}" w:hanging="240"/>`).replace(/(<w:p>[\s\S]*?<\/w:pPr>)/, (_, start) => start + run(marker + prefix));
        }).join('');
        case 'blockquote': return addProps(blocks(t.tokens, depth), '<w:pBdr><w:left w:val="single" w:sz="12" w:space="8" w:color="888888"/></w:pBdr>', true);
        case 'code': return t.text.split('\n').map(line => paragraph(run(line, '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/>'))).join('');
        case 'hr': return paragraph('', '<w:pBdr><w:bottom w:val="single" w:sz="6"/></w:pBdr>');
        case 'table': {
          const row = (cells, header = false) => `<w:tr>${cells.map((c, i) => `<w:tc><w:tcPr><w:tcW w:w="0" w:type="auto"/></w:tcPr>${paragraph(inline(c.tokens, header ? '<w:b/>' : ''), t.align[i] ? `<w:jc w:val="${t.align[i]}"/>` : '')}</w:tc>`).join('')}</w:tr>`;
          return '<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/><w:tblBorders>' + ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(side => `<w:${side} w:val="single" w:sz="4" w:color="AAAAAA"/>`).join('') + '</w:tblBorders></w:tblPr><w:tblGrid>' + t.header.map(() => '<w:gridCol w:w="1800"/>').join('') + '</w:tblGrid>' + row(t.header, true) + t.rows.map(r => row(r)).join('') + '</w:tbl><w:p/>';
        }
        default: return paragraph(run(t.raw || t.text || ''));
      }
    }).join('');
  }
  const order = ['keepNext', 'pBdr', 'ind', 'jc', 'outlineLvl'];
  const xml = blocks(Lexer.lex(protectedText, { gfm: true })).replace(/<w:pPr>([\s\S]*?)<\/w:pPr>/g, (_, props) => {
    const children = [...new Map(splitChildren(props).map(child => [/^<w:(\w+)/.exec(child)[1], child])).values()];
    children.sort((a, b) => order.indexOf(/^<w:(\w+)/.exec(a)[1]) - order.indexOf(/^<w:(\w+)/.exec(b)[1]));
    return '<w:pPr>' + children.join('') + '</w:pPr>';
  });
  return { xml, converted, kept };
}

/** Preserve non-text Word content and all package dependencies; convert consecutive text paragraphs. */
export function convertMarkdownInPackage(pkg, { countOnly = false } = {}) {
  const part = splitParts(pkg).get('/word/document.xml');
  const result = { pkg, converted: 0, kept: [], changed: false, markdownBlocks: 0 };
  if (!part) return result;
  const doc = /<pkg:xmlData>([\s\S]*?)<\/pkg:xmlData>/.exec(part.body)?.[1];
  if (!doc) return result;
  function contents(body) {
    const output = [], group = [];
    function flush() {
      if (!group.length) return;
      const text = group.map(p => [...p.matchAll(/<w:t\b[^>]*>([^<]*)<\/w:t>|<w:(br|tab)\b[^>]*\/>/g)].map(m => m[2] ? (m[2] === 'br' ? '\n' : '\t') : unescapeXml(m[1])).join('')).join('\n');
      if (!text.trim()) { output.push(...group); group.length = 0; return; }
      if (countOnly) {
        result.markdownBlocks += group.length;
        output.push(...group); group.length = 0; return;
      }
      const r = markdownToWord(text);
      result.converted += r.converted;
      result.kept.push(...r.kept);
      result.markdownBlocks += group.length;
      output.push(r.xml || '<w:p/>');
      group.length = 0;
    }
    for (const child of splitChildren(body)) {
      // Only rewrite plain text: existing equations, pictures, links and fields stay intact. Existing tables keep their structure.
      const simple = /^<w:p\b/.test(child) && !/<(?:m:|w:(?:drawing|object|pict|hyperlink|fldChar|instrText|sdt|sectPr|txbxContent|sym|footnoteReference|endnoteReference|commentReference|commentRangeStart|commentRangeEnd|bookmarkStart|bookmarkEnd|ins|del)\b)/.test(child);
      if (simple) group.push(child);
      else {
        flush();
        const container = /^(<w:(tbl|tr|tc)\b[^>]*>)([\s\S]*)(<\/w:\2>)$/.exec(child);
        output.push(container ? container[1] + contents(container[3]) + container[4] : child);
      }
    }
    flush();
    return output.join('');
  }
  const newDoc = doc.replace(/(<w:body\b[^>]*>)([\s\S]*)(<\/w:body>)/, (_, open, body, close) => open + contents(body) + close);
  if (countOnly || !result.markdownBlocks) return result;
  const namespaced = /xmlns:m=/.test(newDoc) ? newDoc : newDoc.replace('<w:document', '<w:document xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"');
  const body = part.body.replace(doc, () => namespaced);
  result.pkg = pkg.slice(0, part.start) + `<pkg:part${part.attrs}>${body}</pkg:part>` + pkg.slice(part.end);
  result.changed = true;
  return result;
}
