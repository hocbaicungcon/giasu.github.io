// Multiple-choice exam tools on a flat-OPC body package: analyse (parts, questions, options, marked answers),
// normalise (renumber, label format, aligned option layout), shuffle (versions) and answer-key tables.
// Everything works on strings: runs, equations, pictures are moved around verbatim, never re-serialised.
import { escapeXml } from './xml.js';

const PPR_ORDER = ['pStyle', 'keepNext', 'keepLines', 'pageBreakBefore', 'framePr', 'widowControl', 'numPr', 'suppressLineNumbers', 'pBdr', 'shd', 'tabs',
  'suppressAutoHyphens', 'kinsoku', 'wordWrap', 'overflowPunct', 'topLinePunct', 'autoSpaceDE', 'autoSpaceDN', 'bidi', 'adjustRightInd', 'snapToGrid',
  'spacing', 'ind', 'contextualSpacing', 'mirrorIndents', 'suppressOverlap', 'jc', 'textDirection', 'textAlignment', 'textboxTightWrap', 'outlineLvl',
  'divId', 'cnfStyle', 'rPr', 'sectPr', 'pPrChange'];

// ---------------------------------------------------------------- low-level XML splitting
/** Top-level child elements of an XML fragment as strings (text between them is dropped). */
export function splitChildren(xml) {
  const out = [];
  let i = 0;
  while (i < xml.length) {
    const lt = xml.indexOf('<', i);
    if (lt < 0) break;
    if (xml.startsWith('<!--', lt)) { i = xml.indexOf('-->', lt) + 3; continue; }
    const head = /^<([\w:.-]+)((?:\s+[^\s=/>]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>/.exec(xml.slice(lt, lt + 4000));
    if (!head) { i = lt + 1; continue; }
    const name = head[1];
    if (head[3]) { out.push(xml.slice(lt, lt + head[0].length)); i = lt + head[0].length; continue; }
    let depth = 1, pos = lt + head[0].length;
    const open = new RegExp(`<${name.replace(/[.]/g, '\\.')}(?=[\\s>/])|</${name.replace(/[.]/g, '\\.')}>`, 'g');
    open.lastIndex = pos;
    let m;
    while ((m = open.exec(xml))) {
      if (m[0][1] === '/') { if (--depth === 0) { pos = m.index + m[0].length; break; } } else {
        const gt = xml.indexOf('>', m.index);
        if (xml[gt - 1] !== '/') depth++;
      }
    }
    if (depth !== 0) throw new Error('unbalanced <' + name + '>');
    out.push(xml.slice(lt, pos));
    i = pos;
  }
  return out;
}
const tagName = (s) => /^<([\w:.-]+)/.exec(s)[1];

function parsePara(xml) {
  if (/^<w:p\b[^>]*\/>$/.test(xml)) return { open: xml.replace(/\/>$/, '>'), ppr: '', children: [] };
  const open = /^<w:p\b[^>]*>/.exec(xml)[0];
  let inner = xml.slice(open.length, xml.length - 6);
  let ppr = '';
  const m = /^\s*<w:pPr>[\s\S]*?<\/w:pPr>|^\s*<w:pPr\/>/.exec(inner);
  if (m) { ppr = m[0].trim(); inner = inner.slice(m[0].length); }
  return { open, ppr, children: splitChildren(inner) };
}
const buildPara = (p) => `${p.open}${p.ppr}${p.children.join('')}</w:p>`;

function pprChildren(ppr) {
  if (!ppr || ppr === '<w:pPr/>') return [];
  return splitChildren(ppr.replace(/^<w:pPr>/, '').replace(/<\/w:pPr>$/, ''));
}
function setPprChild(ppr, tag, xml) {   // xml null removes
  const kids = pprChildren(ppr).filter((k) => tagName(k) !== 'w:' + tag);
  if (xml) {
    const rank = (t) => { const r = PPR_ORDER.indexOf(t.replace(/^w:/, '')); return r < 0 ? 999 : r; };
    const at = kids.findIndex((k) => rank(tagName(k)) > rank('w:' + tag));
    if (at < 0) kids.push(xml); else kids.splice(at, 0, xml);
  }
  return kids.length ? `<w:pPr>${kids.join('')}</w:pPr>` : '';
}

const runText = (run) => {
  let t = '';
  for (const m of run.matchAll(/<w:t\b[^>]*>([^<]*)<\/w:t>|<w:tab\/>|<w:br\b[^>]*\/>|<w:noBreakHyphen\/>/g)) t += m[1] !== undefined ? unesc(m[1]) : (m[0] === '<w:tab/>' ? '\t' : m[0].startsWith('<w:br') ? '\n' : '-');
  return t;
};
const unesc = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
const isRun = (c) => /^<w:r[\s>]/.test(c);
const isMath = (c) => /^<m:oMath(Para)?[\s>]/.test(c);
const hasObject = (c) => /<w:object\b|<w:drawing|<w:pict|<mc:AlternateContent/.test(c);

/** Plain text of a child (runs only; equations and pictures count as one placeholder each). */
export function childText(c) {
  if (isRun(c)) return hasObject(c) ? '\uFFFC' : runText(c);
  if (isMath(c)) return '\uFFFD';
  if (/^<w:hyperlink[\s>]/.test(c)) return splitChildren(c.replace(/^<w:hyperlink\b[^>]*>/, '').replace(/<\/w:hyperlink>$/, '')).map(childText).join('');
  return '';
}
export const paragraphText = (p) => p.children.map(childText).join('');

/** Visual width in points of a child, from picture/object sizes or an average glyph width. */
function childWidth(c, pt) {
  if (isRun(c) && /<w:object\b/.test(c)) { const m = /style="[^"]*width:([\d.]+)pt/.exec(c); return m ? Number(m[1]) : 30; }
  if (isRun(c) && /<w:drawing/.test(c)) { const m = /<wp:extent cx="(\d+)"/.exec(c); return m ? Number(m[1]) / 12700 : 60; }
  if (isMath(c)) return ((c.match(/<m:t\b[^>]*>([^<]*)<\/m:t>/g) || []).join('').replace(/<[^>]+>/g, '').length * 0.5 + 2) * pt;
  return [...childText(c).replace(/\t/g, '')].length * pt * 0.47;
}

// ---------------------------------------------------------------- body package <-> blocks
export function parseBody(pkg) {
  const dm = /(<pkg:part pkg:name="\/word\/document\.xml"[^>]*>\s*<pkg:xmlData>)([\s\S]*?)(<\/pkg:xmlData>)/.exec(pkg);
  if (!dm) throw new Error('không có /word/document.xml');
  const doc = dm[2];
  const bm = /^([\s\S]*?<w:body>)([\s\S]*?)(<w:sectPr\b(?:(?!<w:sectPr)[\s\S])*?<\/w:sectPr>|<w:sectPr\/>)?(<\/w:body>[\s\S]*)$/.exec(doc);
  if (!bm) throw new Error('không đọc được w:body');
  const blocks = splitChildren(bm[2]).map((xml) => (tagName(xml) === 'w:p' ? { kind: 'p', ...parsePara(xml) } : { kind: 'other', xml }));
  return { pkg, dm, head: bm[1], blocks, sectPr: bm[3] || '', tail: bm[4] };
}

export function buildBody(model, blocks = model.blocks) {
  const body = blocks.map((b) => (b.kind === 'p' ? buildPara(b) : b.xml)).join('');
  const doc = model.head + body + model.sectPr + model.tail;
  const { pkg, dm } = model;
  return pkg.slice(0, dm.index) + dm[1] + doc + dm[3] + pkg.slice(dm.index + dm[0].length);
}

function pageTextWidthTwips(model) {
  const sz = /<w:pgSz\b[^>]*w:w="(\d+)"/.exec(model.sectPr), mar = /<w:pgMar\b[^>]*/.exec(model.sectPr);
  if (!sz || !mar) return 9638;
  const l = /w:left="(\d+)"/.exec(mar[0]), r = /w:right="(\d+)"/.exec(mar[0]);
  return Number(sz[1]) - Number(l ? l[1] : 1134) - Number(r ? r[1] : 1134);
}

// ---------------------------------------------------------------- analysis
const RE_PART = /^\s*PH[AẦ]N\s+(I{1,3}V?|IV|V|[1-4])\b\s*[.:)]?/i;
const RE_QUESTION = /^\s*(C[âa]u|B[àa]i)\s*(\d+)\s*([.:)\-–—]|\s+(?=[A-Z\p{L}(]))/iu;
const RE_OPT = /^\s*([A-D])\s*([.)])/;
const RE_STMT = /^\s*([a-d])\s*\)/;
const RE_END = /^[\s\-–—_*.]*(h[ếe]t\b|(bảng\s*)?đáp\s*án[^:：]{0,40}$|hướng\s*dẫn\s*chấm|cán\s*bộ\s*coi\s*thi)/i;
const RE_ANSWER_LINE = /^\s*(đáp\s*án|đáp\s*số|đs|kết\s*quả|trả\s*lời)\s*[:：]/i;
const RE_SHARED = /(sử\s*dụng|dựa\s*vào|dùng)\s+(chung\s+)?(thông\s*tin|dữ\s*kiện|đoạn|hình|bảng)[^.]{0,80}câu\s*\d+|(trả\s*lời|cho)\s+(các\s+)?câu\s*(hỏi\s*)?\d+\s*(,|và|đến|-|–)\s*\d+/i;
const RE_PINNED_OPTION = /^\s*(tất\s*cả|cả\s+(ba|bốn|hai|\w+)\s+(đáp\s*án|ý|phương\s*án|câu)|không\s*có\s*(đáp\s*án|phương\s*án)|các\s*(đáp\s*án|phương\s*án|ý)\s*(trên|còn\s*lại))/i;
const RE_OPTION_REF = /\b(A|B|C|D)\s*(,|và|&)\s*(A|B|C|D)\b.*(đúng|sai)|cả\s+[A-D]\s*(,|và)\s*[A-D]|(đáp\s*án|ý|phương\s*án)\s*[A-D]\b/i;

const partKind = (text) => (/đúng\s*sai|đúng\s*hoặc\s*sai/i.test(text) ? 'tf' : /trả\s*lời\s*ngắn|ngắn/i.test(text) ? 'short' : /nhiều\s*(phương\s*án|lựa\s*chọn)|trắc\s*nghiệm/i.test(text) ? 'mc' : 'other');

/** Is the run a "marked as correct" label? underline, red text or highlight. */
export function labelMark(run) {
  if (/<w:u\b(?![^>]*w:val="none")/.test(run)) return 'underline';
  if (/<w:color\b[^>]*w:val="(FF0000|C00000|E00000|FF0000|ff0000|c00000)"/.test(run)) return 'red';
  if (/<w:highlight\b(?![^>]*w:val="none")/.test(run)) return 'highlight';
  return null;
}
const stripMarks = (run) => run.replace(/<w:u\b[^>]*\/>/g, '').replace(/<w:highlight\b[^>]*\/>/g, '').replace(/<w:color\b[^>]*w:val="(?:FF0000|C00000|E00000|ff0000|c00000)"[^>]*\/>/g, '');

/** Split a simple run (rPr + one w:t) at a character offset of its text. Returns [left, right] or null. */
function splitRun(run, at) {
  run = run.replace(/<w:lastRenderedPageBreak\/>/g, '');   // a rendering hint only; Word rewrites it on save
  const m = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?\s*<w:t\b[^>]*>([^<]*)<\/w:t>\s*<\/w:r>$/.exec(run);
  if (!m) return null;
  const text = unesc(m[3]);
  const mk = (t) => (t ? `${m[1]}${m[2] || ''}<w:t xml:space="preserve">${escapeXml(t)}</w:t></w:r>` : '');
  return [mk(text.slice(0, at)), mk(text.slice(at))];
}

/** Find option labels (A-D) inside one paragraph. Returns {options, ok}; splits runs where label and text share a run. */
function findOptionsInParagraph(para, wanted = RE_OPT, upper = true) {
  const kids = para.children.slice();
  const found = [];
  let seenContent = false, lastWasGap = true;
  for (let i = 0; i < kids.length; i++) {
    const c = kids[i];
    const text = childText(c);
    if (isRun(c) && !hasObject(c)) {
      const m = wanted.exec(text);
      if (m && (lastWasGap || !seenContent)) {
        const labelEnd = m[0].length;
        const lead = text.length - text.trimStart().length;
        if (lead === 0 || !text.slice(0, lead).trim()) {
          const labelText = text.slice(0, labelEnd);
          if (labelEnd < text.length || /[A-Za-z]/.test(labelText)) {
            const parts = text.length > labelEnd ? splitRun(c, labelEnd) : [c, ''];
            if (!parts) return { options: [], ok: false };
            const label = parts[0];
            found.push({ at: i, letter: m[1], labelRun: label, rest: parts[1] });
            seenContent = true; lastWasGap = false;
            continue;
          }
        }
      }
    }
    const gap = !text.replace(/[\s\t\u00A0]/g, '');
    if (!gap) { lastWasGap = false; if (!found.length) return { options: [], ok: found.length > 0 }; } else if (/\t|\s{2,}/.test(text) || text === '') lastWasGap = true;
    if (isRun(c) && /<w:tab\/>/.test(c)) lastWasGap = true;
  }
  if (!found.length) return { options: [], ok: false };
  const opts = found.map((f, k) => {
    const end = k + 1 < found.length ? found[k + 1].at : kids.length;
    let content = [f.rest, ...kids.slice(f.at + 1, end)].filter(Boolean);
    return { letter: f.letter, labelRun: f.labelRun, content };
  });
  return { options: opts, ok: true };
}

function trimContent(content) {   // drop trailing/leading empty runs and tab runs
  const empty = (c) => isRun(c) && !hasObject(c) && !runText(c).replace(/[\s\t\u00A0]/g, '') && !/<w:br\b/.test(c);
  const out = content.slice();
  while (out.length && (empty(out[out.length - 1]) || /^<w:(proofErr|bookmark\w*)\b/.test(out[out.length - 1]))) out.pop();
  while (out.length && empty(out[0])) out.shift();
  return out;
}

/**
 * Analyse the blocks into parts/questions. Question: {number, start, end (block indexes, end exclusive), stemEnd,
 * options: [{letter,labelRun,content}] | null, optionParas:[blockIdx], statements, answer, flags: []}.
 */
export function analyze(model) {
  const parts = [];
  let part = { title: '', kind: 'mc', start: 0, questions: [], blockIndex: -1 };
  const text = (b) => (b.kind === 'p' ? paragraphText(b) : '');
  const starts = [];
  // everything from the closing line ("--- HẾT ---", "ĐÁP ÁN", "LỜI GIẢI"...) on stays where it is and is not analysed
  let limit = model.blocks.length, sawQuestion = false;
  const enders = [];
  for (let i = 0; i < model.blocks.length; i++) {
    const t = text(model.blocks[i]);
    if (RE_QUESTION.test(t)) sawQuestion = true;
    else if (sawQuestion && model.blocks[i].kind === 'p' && RE_END.test(t)) enders.push(i);
  }
  if (enders.length && enders.length <= 2) limit = enders[0];   // a marker repeated after every question is a heading of a solution bank, not an end line
  model.blocks.slice(0, limit).forEach((b, i) => {
    const t = text(b);
    if (b.kind === 'p' && RE_PART.test(t)) starts.push({ i, type: 'part', t });
    else if (b.kind === 'p' && RE_QUESTION.test(t)) starts.push({ i, type: 'q', t, number: Number(RE_QUESTION.exec(t)[2]) });
  });
  const mark = (i) => starts.findIndex((s) => s.i === i);
  starts.forEach((s, k) => {
    const next = k + 1 < starts.length ? starts[k + 1].i : limit;
    if (s.type === 'part') {
      part = { title: s.t.trim(), kind: partKind(s.t), blockIndex: s.i, questions: [] };
      parts.push(part);
      return;
    }
    if (!parts.length) { part = { title: '', kind: 'mc', blockIndex: -1, questions: [] }; parts.push(part); }
    // trailing non-question blocks that really belong to the next part (e.g. page break / section) stay with this question
    const q = { number: s.number, start: s.i, end: next, options: null, optionParas: [], statements: [], answer: null, flags: [] };
    const kind = part.kind;
    const stemText = [];
    let i = s.i;
    let optionsStarted = false;
    for (; i < next; i++) {
      const b = model.blocks[i];
      if (b.kind !== 'p') continue;
      const t = paragraphText(b);
      if (kind === 'mc' || kind === 'other') {
        const probe = RE_OPT.test(t) ? findOptionsInParagraph(b) : { ok: false };
        if (probe.ok && probe.options[0].letter === (q.options ? 'ABCD'[q.options.length] : 'A') || (probe.ok && q.options && 'ABCD'[q.options.length] === probe.options[0].letter)) {
          q.options = (q.options || []).concat(probe.options);
          q.optionParas.push(i);
          optionsStarted = true;
          continue;
        }
        if (optionsStarted && t.trim() && q.options.length < 4 && !q.flags.includes('complexOptions')) q.flags.push('complexOptions');   // a paragraph inside the option list that is not an option; after D it is just trailing text (solution, notes)
      }
      if (kind === 'tf') {
        const m = RE_STMT.exec(t);
        if (m) { q.statements.push({ block: i, letter: m[1] }); continue; }
      }
      if (RE_ANSWER_LINE.test(t)) { q.answer = { text: t.replace(RE_ANSWER_LINE, '').trim(), block: i }; continue; }
      if (!optionsStarted && i > s.i) stemText.push(t);
    }
    q.stemEnd = q.optionParas.length ? q.optionParas[0] : (q.statements.length ? q.statements[0].block : next);
    if (RE_SHARED.test(text(model.blocks[s.i]))) q.flags.push('shared');
    if (q.options) {
      const letters = q.options.map((o) => o.letter).join('');
      if (letters !== 'ABCD'.slice(0, q.options.length) || q.options.length !== 4) q.flags.push('optionCount:' + letters);
      if (q.options.some((o) => RE_OPTION_REF.test(o.content.map(childText).join('')))) q.flags.push('optionRefs');
    } else if (kind === 'mc') q.flags.push('noOptions');
    part.questions.push(q);
  });
  void mark;
  return { parts: parts.filter((p) => p.questions.length || p.blockIndex >= 0) };
}

// ---------------------------------------------------------------- answers
export function answersOf(model, analysis) {
  const rows = [];
  for (const part of analysis.parts) {
    for (const q of part.questions) {
      const row = { part: part.title, kind: part.kind, number: q.number };
      if (part.kind === 'mc' || part.kind === 'other') {
        const marked = (q.options || []).filter((o) => labelMark(o.labelRun)).map((o) => o.letter);
        row.value = marked.length === 1 ? marked[0] : marked.length ? marked.join('') : null;
        row.multiple = marked.length > 1;
      } else if (part.kind === 'tf') {
        const marks = q.statements.map((s) => {
          const b = model.blocks[s.block];
          const label = b.children.find((c) => isRun(c) && /[a-d]\s*\)/.test(runText(c)));
          return label ? Boolean(labelMark(label)) : false;
        });
        row.value = marks.some(Boolean) ? q.statements.map((s, i) => `${s.letter}${marks[i] ? 'Đ' : 'S'}`).join(' ') : null;
        row.tf = marks.some(Boolean) ? marks.map((m) => (m ? 'Đ' : 'S')) : null;   // per statement a..d
      } else if (part.kind === 'short') {
        row.value = q.answer ? q.answer.text : null;
      }
      rows.push(row);
    }
  }
  return rows;
}

// ---------------------------------------------------------------- option layout
const labelRunFor = (letter, template) => {
  const m = /^(<w:r\b[^>]*>)(\s*<w:rPr>[\s\S]*?<\/w:rPr>)?/.exec(template);
  let rpr = m && m[2] ? m[2] : '';
  if (rpr && !/<w:b\b/.test(rpr)) rpr = rpr.replace('<w:rPr>', '<w:rPr><w:b/>');
  if (!rpr) rpr = '<w:rPr><w:b/></w:rPr>';
  return `${m ? m[1] : '<w:r>'}${rpr}<w:t>${letter}.</w:t></w:r>`;
};

function fontPt(content, para) {
  for (const c of content) { const m = /<w:sz w:val="(\d+)"/.exec(c); if (m) return Number(m[1]) / 2; }
  const m = /<w:sz w:val="(\d+)"/.exec(para && para.ppr || '');
  return m ? Number(m[1]) / 2 : 13;
}

const SPACE_RUN = '<w:r><w:t xml:space="preserve"> </w:t></w:r>';
const TAB_RUN = '<w:r><w:tab/></w:r>';

/** Build the option paragraphs for one question. layout: 'auto' | 4 | 2 | 1 (options per line). */
export function layoutOptions(model, options, templatePara, layout = 'auto') {
  const W = pageTextWidthTwips(model);
  const pt = fontPt(options.flatMap((o) => o.content), templatePara);
  const widths = options.map((o) => 14 + trimContent(o.content).reduce((s, c) => s + childWidth(c, pt), 0));   // label ~14pt
  const maxW = Math.max(...widths) * 20 + 120;
  let per = layout === 'auto' ? (maxW <= W / 4 ? 4 : maxW <= W / 2 ? 2 : 1) : Number(layout);
  if (options.length < per) per = options.length;
  const base = setPprChild(templatePara ? templatePara.ppr : '', 'tabs', null);
  const colTabs = per > 1 ? `<w:tabs>${Array.from({ length: per - 1 }, (_x, k) => `<w:tab w:val="left" w:pos="${Math.round(W / per * (k + 1))}"/>`).join('')}</w:tabs>` : '';
  const lines = [];
  for (let i = 0; i < options.length; i += per) lines.push(options.slice(i, i + per));
  const paras = lines.map((line, li) => {
    const kids = [];
    line.forEach((o, k) => {
      if (k > 0) kids.push(TAB_RUN);
      const body = trimContent(o.content);
      const lead = body.length && isRun(body[0]) && !hasObject(body[0]) && /^\s/.test(runText(body[0]));   // content already starts with a space
      kids.push(o.labelRun, ...(lead ? [] : [SPACE_RUN]), ...body);
    });
    let ppr = per > 1 ? setPprChild(base, 'tabs', colTabs) : base;
    if (li < lines.length - 1) ppr = setPprChild(ppr, 'keepNext', '<w:keepNext/>');
    return { kind: 'p', open: templatePara ? templatePara.open.replace(/\s+w14:paraId="[^"]*"|\s+w14:textId="[^"]*"/g, '') : '<w:p>', ppr, children: kids };
  });
  return { paras, perLine: per };
}

// ---------------------------------------------------------------- normalise
/**
 * Renumbers the question label ("Câu N." / "Bài N.") in paragraph p, supporting single or multi-run labels.
 * formatTemplate: optional run whose rPr formatting should be applied to the label run.
 */
export function renumberQuestionInParagraph(p, newNumber, { formatTemplate, word = 'keep' } = {}) {
  if (!p || !p.children) return false;
  const fullText = paragraphText(p);
  const m = RE_QUESTION.exec(fullText);
  if (!m) return false;

  let charPos = 0;
  const runMap = [];
  for (let i = 0; i < p.children.length; i++) {
    const c = p.children[i];
    if (isRun(c) && !hasObject(c)) {
      const t = runText(c);
      if (t.length > 0) {
        runMap.push({ i, start: charPos, end: charPos + t.length, text: t, runXml: c });
        charPos += t.length;
        continue;
      }
    }
    charPos += childText(c).length;
  }

  const matchStart = m.index;
  const matchEnd = m.index + m[0].length;
  const delim = (m[3] && /[.:)]/.test(m[3])) ? m[3] : '.';
  const label = word === 'Câu' || word === 'Bài' ? word : m[1];   // 'keep': the word the document already uses (Câu / Bài / bài ...)
  const replacementLabel = `${label} ${newNumber}${delim}`;

  const affected = runMap.filter((r) => r.start < matchEnd && r.end > matchStart);
  if (!affected.length) return false;

  const applyFormat = (runXml) => {
    if (!formatTemplate) return runXml;
    const rprMatch = /<w:rPr>[\s\S]*?<\/w:rPr>/.exec(formatTemplate);
    if (!rprMatch) return runXml;
    const rHead = /^(<w:r\b[^>]*>)(?:\s*<w:rPr>[\s\S]*?<\/w:rPr>)?/.exec(runXml);
    if (!rHead) return runXml;
    return `${rHead[1]}${rprMatch[0]}${runXml.slice(rHead[0].length)}`;
  };

  if (affected.length === 1) {
    const r = affected[0];
    const localStart = matchStart - r.start;
    const localEnd = matchEnd - r.start;

    let hasTrailingSpace = r.text.slice(localEnd).startsWith(' ') || r.text.slice(localEnd).startsWith('\t');
    if (!hasTrailingSpace && localEnd >= r.text.length) {
      for (let j = r.i + 1; j < p.children.length; j++) {
        const nextRun = p.children[j];
        const nt = childText(nextRun);
        if (nt.length > 0) {
          if (nt.startsWith(' ') || nt.startsWith('\t')) hasTrailingSpace = true;
          break;
        }
      }
    }
    const needSpace = !hasTrailingSpace;

    const before = r.text.slice(0, localStart);
    const after = r.text.slice(localEnd);
    const combined = before + replacementLabel + (needSpace ? ' ' : '') + after;
    let newRun = r.runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, `<w:t xml:space="preserve">${escapeXml(combined)}</w:t>`);
    if (formatTemplate) newRun = applyFormat(newRun);
    p.children[r.i] = newRun;
    return true;
  }

  // Multi-run case:
  const first = affected[0];
  const last = affected[affected.length - 1];
  const firstPrefix = first.text.slice(0, matchStart - first.start);
  const lastSuffix = last.text.slice(matchEnd - last.start);

  let hasTrailingSpace = lastSuffix.startsWith(' ') || lastSuffix.startsWith('\t');
  if (!hasTrailingSpace && lastSuffix.length === 0) {
    for (let j = last.i + 1; j < p.children.length; j++) {
      const nextRun = p.children[j];
      const nt = childText(nextRun);
      if (nt.length > 0) {
        if (nt.startsWith(' ') || nt.startsWith('\t')) hasTrailingSpace = true;
        break;
      }
    }
  }
  const needSpace = !hasTrailingSpace;

  const firstCombined = firstPrefix + replacementLabel + (needSpace ? ' ' : '');
  let newFirstRun = first.runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, `<w:t xml:space="preserve">${escapeXml(firstCombined)}</w:t>`);
  if (formatTemplate) newFirstRun = applyFormat(newFirstRun);
  p.children[first.i] = newFirstRun;

  for (let k = 1; k < affected.length - 1; k++) {
    p.children[affected[k].i] = affected[k].runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, '');
  }

  p.children[last.i] = last.runXml.replace(/<w:t\b[^>]*>[\s\S]*?<\/w:t>/, lastSuffix ? `<w:t xml:space="preserve">${escapeXml(lastSuffix)}</w:t>` : '');
  return true;
}

/**
 * opts: renumber ('part'|'continuous'|false), labelWord ('keep'|'Câu'|'Bài': the word of the "Câu N." / "Bài N." label), labels (bool), questionFormat (bool: copy first "Câu" label format),
 * layout ('auto'|4|2|1|false), keepNext (bool). Returns {pkg, report}.
 */
export function normalize(pkg, opts = {}) {
  const model = parseBody(pkg);
  const analysis = analyze(model);
  const report = { questions: 0, renumbered: 0, relaid: 0, skipped: [], notes: [] };
  const replacements = new Map();   // block index -> array of paragraphs (replace block)
  let counter = 0, firstLabel = null;
  for (const part of analysis.parts) {
    if (opts.renumber === 'part') counter = 0;
    for (const q of part.questions) {
      report.questions++;
      const b = model.blocks[q.start];
      const newNumber = ++counter;
      if (!firstLabel) {
        const foundRun = b.children.find((c) => isRun(c) && RE_QUESTION.test(runText(c)));
        if (foundRun) firstLabel = foundRun;
      }
      const fmt = opts.questionFormat ? firstLabel : null;
      if (opts.renumber && (opts.renumber === 'continuous' || q.number !== newNumber)) {
        const ok = renumberQuestionInParagraph(b, newNumber, { formatTemplate: fmt, word: opts.labelWord });
        if (ok) report.renumbered++;
        else report.skipped.push(`Câu ${q.number}: không tìm thấy nhãn “Câu” / “Bài”`);
      } else if (opts.renumber || opts.questionFormat) {
        renumberQuestionInParagraph(b, newNumber, { formatTemplate: fmt, word: opts.labelWord });
      }
      if (opts.keepNext) {
        for (let i = q.start; i < q.stemEnd; i++) if (model.blocks[i].kind === 'p' && i + 1 <= q.stemEnd && (q.options || q.statements.length)) model.blocks[i].ppr = setPprChild(model.blocks[i].ppr, 'keepNext', '<w:keepNext/>');
      }
      if (part.kind === 'mc' && q.options && opts.layout !== false) {
        if (q.flags.some((f) => f === 'complexOptions' || f.startsWith('optionCount'))) { report.skipped.push(`Câu ${q.number}: phương án không chuẩn (${q.flags.join(', ')}), giữ nguyên bố cục`); continue; }
        const template = model.blocks[q.optionParas[0]];
        const options = q.options.map((o, k) => ({ ...o, labelRun: opts.labels === false ? o.labelRun : labelRunFor('ABCD'[k], o.labelRun) }));
        const { paras } = layoutOptions(model, options, template, opts.layout || 'auto');
        replacements.set(q.optionParas[0], { paras, remove: q.optionParas.slice(1) });
        report.relaid++;
      }
    }
  }
  const blocks = [];
  const removed = new Set();
  for (const r of replacements.values()) r.remove.forEach((i) => removed.add(i));
  model.blocks.forEach((b, i) => {
    if (removed.has(i)) return;
    if (replacements.has(i)) blocks.push(...replacements.get(i).paras);
    else blocks.push(b);
  });
  return { pkg: buildBody(model, blocks), report };
}

// ---------------------------------------------------------------- shuffle
export function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function shuffleInPlace(arr, rand) {
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}

/**
 * Build one shuffled version. opts: seed, code (new Mã đề), shuffleQuestions, shuffleOptions, shuffleStatements,
 * stripMarks, renumber, layout. Returns {pkg, report, answers}.
 */
export function shuffleVersion(pkg, opts = {}) {
  const model = parseBody(pkg);
  const analysis = analyze(model);
  const rand = rng(opts.seed || 1);
  const report = { pinnedQuestions: [], pinnedOptions: [], sharedParts: [], questions: 0, notes: [] };
  const newBlocks = model.blocks.slice();
  const outBlocks = [];
  const consumed = new Set();
  // 1. options (in place, before reordering questions)
  const optionOut = new Map();
  for (const part of analysis.parts) {
    for (const q of part.questions) {
      report.questions++;
      if (part.kind === 'mc' && q.options && opts.shuffleOptions !== false) {
        if (q.flags.some((f) => f === 'complexOptions' || f.startsWith('optionCount') || f === 'optionRefs')) { report.pinnedQuestions.push(q.number); continue; }
        const idx = q.options.map((_o, i) => i);
        const free = idx.filter((i) => !RE_PINNED_OPTION.test(q.options[i].content.map(childText).join('')));
        const order = idx.slice();
        const shuffled = shuffleInPlace(free.slice(), rand);
        free.forEach((slot, k) => { order[slot] = shuffled[k]; });
        if (free.length < 4) report.pinnedOptions.push(q.number);
        const options = order.map((src, k) => ({ ...q.options[src], labelRun: labelRunFor('ABCD'[k], q.options[src].labelRun) }));
        // the label run is copied from the source option, so an underline / red / highlight mark travels with it
        const { paras } = layoutOptions(model, options, model.blocks[q.optionParas[0]], opts.layout || 'auto');
        optionOut.set(q.optionParas[0], paras);
        q.optionParas.slice(1).forEach((i) => consumed.add(i));
      } else if (part.kind === 'tf' && opts.shuffleStatements && q.statements.length === 4) {
        const stmts = q.statements.map((s) => model.blocks[s.block]);
        const order = shuffleInPlace([0, 1, 2, 3], rand);
        order.forEach((src, k) => {
          const p = { ...stmts[src], children: stmts[src].children.slice() };
          const li = p.children.findIndex((c) => isRun(c) && RE_STMT.test(runText(c)));
          if (li >= 0) {
            const run = p.children[li];
            const mm = RE_STMT.exec(runText(run));
            const sp = splitRun(run, mm[0].length);
            if (sp) { p.children[li] = sp[0].replace(/<w:t\b[^>]*>[^<]*<\/w:t>/, `<w:t>${'abcd'[k]})</w:t>`); if (sp[1]) p.children.splice(li + 1, 0, sp[1]); }
          }
          optionOut.set(q.statements[k].block, [p]);
        });
      }
    }
  }
  // 2. question order inside each part
  const questionOrder = new Map();   // start block -> replaced content
  for (const part of analysis.parts) {
    const qs = part.questions;
    if (opts.shuffleQuestions === false || qs.length < 2) continue;
    if (qs.some((q) => q.flags.includes('shared'))) { report.sharedParts.push(part.title || '(không tiêu đề)'); continue; }
    const order = shuffleInPlace(qs.map((_q, i) => i), rand);
    const segments = qs.map((q) => ({ start: q.start, end: q.end }));
    const slots = qs.map((q) => ({ start: q.start, end: q.end }));
    order.forEach((src, k) => questionOrder.set(slots[k].start, segments[src]));
  }
  const emitRange = (start, end) => {
    for (let i = start; i < end; i++) {
      if (consumed.has(i)) continue;
      if (optionOut.has(i)) outBlocks.push(...optionOut.get(i));
      else outBlocks.push(newBlocks[i]);
    }
  };
  const handled = new Set();
  const firstQ = Math.min(...analysis.parts.flatMap((p) => p.questions.map((q) => q.start)), model.blocks.length);
  emitRange(0, firstQ);
  let i = firstQ;
  while (i < model.blocks.length) {
    if (questionOrder.has(i)) {
      const seg = questionOrder.get(i);
      const slotEnd = analysis.parts.flatMap((p) => p.questions).find((q) => q.start === i).end;
      emitRange(seg.start, seg.end);
      handled.add(i);
      i = slotEnd;
    } else {
      const q = analysis.parts.flatMap((p) => p.questions).find((x) => x.start === i);
      const end = q ? q.end : i + 1;
      emitRange(i, end);
      i = end;
    }
  }
  // 3. renumber, code, marks
  let result = buildBody(model, outBlocks);
  const stage = parseBody(result);
  const st = analyze(stage);
  let counter = 0;
  for (const part of st.parts) {
    if (opts.renumber !== 'continuous') counter = 0;
    for (const q of part.questions) {
      counter++;
      q.number = counter;   // the key must use the new numbers
      const b = stage.blocks[q.start];
      const ok = renumberQuestionInParagraph(b, counter, { word: opts.labelWord });
      if (!ok) report.notes.push(`Câu ${counter}: không đổi được số thứ tự`);
    }
  }
  const answers = answersOf(stage, st);
  if (opts.code) {
    let replaced = 0;
    for (const b of stage.blocks) {
      if (b.kind !== 'p') continue;
      b.children = b.children.map((c) => {
        if (!isRun(c)) return c;
        const t = runText(c);
        if (!/Mã\s*đề/i.test(t) && !/^\s*\d{2,4}\s*$/.test(t)) return c;
        return c;
      });
      const text = paragraphText(b);
      if (/Mã\s*đề\s*(thi)?\s*[:：]?\s*\d+/i.test(text)) {
        // the number may sit in its own run after the words "Mã đề:"
        let seen = false;
        b.children = b.children.map((c) => {
          if (!isRun(c)) return c;
          const t = runText(c);
          if (/Mã\s*đề/i.test(t)) {
            seen = true;
            if (/\d/.test(t)) { replaced++; return c.replace(/(<w:t\b[^>]*>)([^<]*?)(\d+)([^<]*<\/w:t>)/, (_m, a, bb, _d, e) => `${a}${bb}${opts.code}${e}`); }
            return c;
          }
          if (seen && /^\s*\d+\s*$/.test(t)) { seen = false; replaced++; return c.replace(/(<w:t\b[^>]*>)(\s*)\d+(\s*<\/w:t>)/, `$1$2${opts.code}$3`); }
          return c;
        });
      }
    }
    if (!replaced) report.notes.push('không tìm thấy “Mã đề” để đổi số');
  }
  if (opts.stripMarks !== false) {
    for (const part of st.parts) for (const q of part.questions) {
      const touch = (blockIdx) => {
        const b = stage.blocks[blockIdx];
        b.children = b.children.map((c) => (isRun(c) && (RE_OPT.test(runText(c)) || RE_STMT.test(runText(c))) ? stripMarks(c) : c));
      };
      q.optionParas.forEach(touch);
      q.statements.forEach((s) => touch(s.block));
    }
  }
  result = buildBody(stage);
  return { pkg: result, report, answers };
}

// ---------------------------------------------------------------- answer tables
export function answerTable(rowsByVersion) {
  // rowsByVersion: [{code, answers:[{part,kind,number,value}]}] -> {header, rows, csv}
  const kinds = ['mc', 'tf', 'short', 'other'];
  const out = [];
  for (const v of rowsByVersion) {
    for (const kind of kinds) {
      const rows = v.answers.filter((a) => a.kind === kind);
      if (!rows.length) continue;
      out.push({ code: v.code, kind, title: rows[0].part, items: rows.map((r) => ({ number: r.number, value: r.value })) });
    }
  }
  const csv = out.map((g) => [g.code, g.title || g.kind, ...g.items.map((i) => `${i.number}:${i.value ?? '?'}`)].join(',')).join('\n');
  return { groups: out, csv };
}

const cell = (text, w, bold) => `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/></w:tcPr><w:p><w:pPr><w:spacing w:before="20" w:after="20"/><w:jc w:val="center"/></w:pPr><w:r>${bold ? '<w:rPr><w:b/></w:rPr>' : ''}<w:t xml:space="preserve">${escapeXml(String(text))}</w:t></w:r></w:p></w:tc>`;

/** WordprocessingML for the answer tables: a heading and, per group, rows of at most 10 questions. */
export function answerTableXml(groups, title = 'BẢNG ĐÁP ÁN') {
  const borders = '<w:tblBorders>' + ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map((s) => `<w:${s} w:val="single" w:sz="4" w:space="0" w:color="808080"/>`).join('') + '</w:tblBorders>';
  let xml = `<w:p><w:pPr><w:pageBreakBefore/><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>${escapeXml(title)}</w:t></w:r></w:p>`;
  const byCode = new Map();
  for (const g of groups) { if (!byCode.has(g.code)) byCode.set(g.code, []); byCode.get(g.code).push(g); }
  for (const [code, gs] of byCode) {
    xml += `<w:p><w:pPr><w:keepNext/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Mã đề ${escapeXml(String(code))}</w:t></w:r></w:p>`;
    for (const g of gs) {
      const per = g.kind === 'mc' ? 10 : g.kind === 'tf' ? 4 : 6;
      xml += `<w:p><w:pPr><w:keepNext/></w:pPr><w:r><w:t xml:space="preserve">${escapeXml(g.title || '')}</w:t></w:r></w:p>`;
      for (let i = 0; i < g.items.length; i += per) {
        const chunk = g.items.slice(i, i + per);
        const w = Math.floor(9000 / (g.kind === 'tf' ? chunk.length : per + 1));
        const top = `<w:tr>${cell('Câu', w, true)}${chunk.map((c) => cell(c.number, w, true)).join('')}</w:tr>`;
        const bot = `<w:tr>${cell('Đáp án', w, true)}${chunk.map((c) => cell(c.value ?? '?', w, false)).join('')}</w:tr>`;
        xml += `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/>${borders}</w:tblPr><w:tblGrid>${Array.from({ length: chunk.length + 1 }, () => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${top}${bot}</w:tbl><w:p/>`;
      }
    }
  }
  return xml;
}

/** Append raw body XML (paragraphs/tables) to a package, before the final sectPr. */
export function appendToBody(pkg, bodyXml) {
  const model = parseBody(pkg);
  model.blocks.push(...splitChildren(bodyXml).map((xml) => (tagName(xml) === 'w:p' ? { kind: 'p', ...parsePara(xml) } : { kind: 'other', xml })));
  return buildBody(model);
}

/** Questions without a marked answer, each with the index of its paragraph in Word's body.paragraphs (tables count too). */
export function unansweredQuestions(model, analysis) {
  const ordinal = [];
  let n = 0;
  for (const b of model.blocks) {
    ordinal.push(n);
    n += b.kind === 'p' ? 1 : (b.xml.match(/<w:p[ >\/]/g) || []).length;
  }
  const rows = answersOf(model, analysis), out = [];
  let i = 0;
  for (const part of analysis.parts) {
    for (const q of part.questions) {
      const row = rows[i++];
      if (row && (row.value === null || row.value === undefined)) {
        const roman = (/^\s*PH[AẦ]N\s+([IVX\d]+)/i.exec(part.title) || [])[1];
        out.push({ label: `${roman ? 'Phần ' + roman + ' · ' : ''}Câu ${q.number}`, kind: part.kind, number: q.number, block: q.start, paragraph: ordinal[q.start] });
      }
    }
  }
  return out;
}
