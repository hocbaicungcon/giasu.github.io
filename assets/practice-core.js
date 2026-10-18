/* credit: giasu.ai.vn */
/* Biến bài tập do thư viện worksheet sinh ra (câu hỏi viết bằng LaTeX) thành bài tập tương tác trên web.
   Không dùng DOM, nên chạy được cả trong Node để kiểm thử. KaTeX được truyền vào từ bên ngoài. */

const BLANK = '§';

// ---------- đọc LaTeX ----------
function readGroup(s, i) {                       // s[i] === '{' -> [nội dung, vị trí sau '}']
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '\\') { j++; continue; }
    if (s[j] === '{') depth++;
    else if (s[j] === '}' && --depth === 0) return [s.slice(i + 1, j), j + 1];
  }
  return [s.slice(i + 1), s.length];
}
function readOptional(s, i) {                    // [..] ngay sau lệnh
  if (s[i] !== '[') return [null, i];
  const end = s.indexOf(']', i);
  return end < 0 ? [null, i] : [s.slice(i + 1, end), end + 1];
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ACCENTS = { "'": '\u0301', '`': '\u0300', '=': '\u0304', '^': '\u0302', '"': '\u0308', '~': '\u0303', v: '\u030c' };
const compose = (cmd, base) => (base + ACCENTS[cmd]).normalize('NFC');          // \'{e} -> é, \v{a} -> ǎ, \={o} -> ō
const hzChar = name => { const m = /^cjk-(zh|ja)-([0-9a-f]+)-/i.exec(name); return m ? { set: m[1], char: String.fromCodePoint(parseInt(m[2], 16)) } : null; };
const SPACE_CMDS = new Set(['quad', 'qquad', 'hfill', ',', ';', ' ', '!', 'noindent', 'medskip', 'smallskip', 'bigskip', 'par', 'centering', 'raggedright', 'small', 'normalsize', 'large', 'Large', 'footnotesize', 'newline']);
const SYMBOLS = { '%': '%', '&': '&', '_': '_', '#': '#', '$': '$', '{': '{', '}': '}', textbullet: '•', rightarrow: '→', ldots: '…', dots: '…', textasciitilde: '~' };

// Một "chỗ trống" cần học sinh điền: loại và các lựa chọn (nếu là ô chọn).
function blankFromMacro(cmd, arg) {
  if (cmd === 'ldots' || cmd === 'dots' || cmd === 'dotfill') return { kind: 'text' };
  if (cmd === 'underline' && /^\s*\\hspace\*?\{[^}]*\}\s*$/.test(arg)) return { kind: 'text' };
  if (cmd === 'makebox' && /\\dotfill/.test(arg)) return { kind: 'text', wide: true };
  if (cmd === 'fbox' && /^\s*\\rule\{[^}]*\}\{[^}]*\}\s*\\hspace\*?\{[^}]*\}\s*$/.test(arg)) return { kind: 'text', small: true };
  if ((cmd === 'boxed' || cmd === 'fbox') && /^\s*\\phantom\{(.*)\}\s*$/.test(arg)) {
    const ch = /\\phantom\{(.*)\}/.exec(arg)[1];
    if (ch === '>' || ch === '<' || ch === '=') return { kind: 'choice', options: ['>', '<', '='] };
    if (ch === '?' || ch === '.' || ch === '!') return { kind: 'choice', options: ['.', '?', '!'] };
    return { kind: 'text' };
  }
  return null;
}

/* Chuyển một chuỗi LaTeX (văn bản + $công thức$) thành các phần: {html} hoặc {blank}.
   Trả về { parts, ok, plain } — ok=false khi gặp lệnh chưa hỗ trợ (cả bài sẽ bị bỏ khỏi bản web). */
export function parseTex(src, { katex, sans = false, picUrl = id => `assets/worksheet/emoji-svg/${id}.svg` } = {}) {
  const parts = [];
  let ok = true, plain = '', html = '';
  const flush = () => { if (html) { parts.push({ html }); html = ''; } };
  const addBlank = blank => { flush(); parts.push({ blank }); plain += BLANK; };

  const sansify = tex => sans ? `\\mathsf{${tex.replace(/\\text\{/g, '\\textsf{')}}` : tex;   // chế độ game: chữ không chân
  const renderMath = (math) => {
    // phân số có ô trống ở tử hoặc mẫu: dựng bằng HTML để ô điền nằm đúng chỗ (tách công thức sẽ làm hỏng cặp ngoặc)
    const frac = /\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g;
    for (let f; (f = frac.exec(math));) {
      if (!/\\(?:ldots|dots)\b/.test(f[1]) && !/\\(?:ldots|dots)\b/.test(f[2])) continue;
      renderMath(math.slice(0, f.index));
      flush(); html += '<span class="pg-fr">';
      [['n', f[1]], ['d', f[2]]].forEach(([cls, arg]) => {
        html += `<span class="pg-fr-${cls}">`;
        if (/^\s*\\(?:ldots|dots)\s*$/.test(arg)) addBlank({ kind: 'text', small: true }); else renderMath(arg);
        flush(); html += '</span>';
      });
      html += '</span>';
      renderMath(math.slice(f.index + f[0].length));
      return;
    }
    // tách các chỗ trống trong công thức, dựng từng đoạn bằng KaTeX
    const pieces = [];
    let rest = math, m;
    const re = /\\(ldots|dots)\b|\\(boxed|fbox)\s*\{\s*\\phantom\{[^}]*\}\s*\}/;
    while ((m = re.exec(rest))) {
      pieces.push({ tex: rest.slice(0, m.index) });
      const blank = m[1] ? { kind: 'text' } : blankFromMacro(m[2], m[0].slice(m[0].indexOf('{') + 1, -1));
      pieces.push({ blank: blank || { kind: 'text' } });
      rest = rest.slice(m.index + m[0].length);
    }
    pieces.push({ tex: rest });
    if (pieces.length === 1) {                    // công thức không có chỗ trống: dựng nguyên khối
      if (!katex) { html += esc(math); plain += math; return; }
      try { html += katex.renderToString(sansify(math), { throwOnError: true, strict: 'ignore' }); plain += math; } catch { ok = false; }
      return;
    }
    for (const piece of pieces) {
      if (piece.blank) { addBlank(piece.blank); continue; }
      if (!piece.tex.trim()) { if (piece.tex) html += ' '; continue; }
      if (!katex) { html += esc(piece.tex); plain += piece.tex; continue; }
      try { html += katex.renderToString(`{}${sansify(piece.tex)}{}`, { throwOnError: true, strict: 'ignore' }); plain += piece.tex; }
      catch { ok = false; }
    }
  };

  const text = (s) => {
    for (let i = 0; i < s.length;) {
      const c = s[i];
      if (c === '\\') {
        const m = /^\\([A-Za-z]+|.)/.exec(s.slice(i));
        if (!m) { i++; continue; }
        const cmd = m[1];
        i += m[0].length;
        if (cmd === '\\') { [, i] = readOptional(s, i); html += '<br>'; plain += ''; continue; }
        if (SYMBOLS[cmd] !== undefined && !['ldots', 'dots'].includes(cmd)) { html += esc(SYMBOLS[cmd]); plain += SYMBOLS[cmd]; continue; }
        if (SPACE_CMDS.has(cmd)) { html += ' '; continue; }
        if (cmd === 'ldots' || cmd === 'dots' || cmd === 'dotfill') { addBlank({ kind: 'text', wide: cmd === 'dotfill' }); continue; }
        if (cmd === 'hspace' || cmd === 'hspace*' || cmd === 'vspace' || cmd === 'vspace*') { if (s[i] === '*') i++; [, i] = readGroup(s, i); html += ' '; continue; }
        if (ACCENTS[cmd] !== undefined && (cmd !== 'v' || s[i] === '{' || /\s/.test(s[i] || ''))) {
          while (cmd === 'v' && /\s/.test(s[i] || '')) i++;
          let base;
          if (s[i] === '{') [base, i] = readGroup(s, i); else { base = s[i] || ''; i++; }
          const ch = compose(cmd, plainTex(base)); html += esc(ch); plain += ch;
          continue;
        }
        if (cmd === 'wshz') {                                         // chữ Hán/Nhật: vẽ bằng phông chữ thay cho ảnh nét
          let skip; [skip, i] = readOptional(s, i);
          let name; [name, i] = readGroup(s, i);
          const hz = hzChar(name);
          if (!hz) { ok = false; continue; }
          html += `<span class="pg-hz" lang="${hz.set}">${esc(hz.char)}</span>`; plain += hz.char;
          continue;
        }
        if (cmd === 'wspic') {
          let opt; [opt, i] = readOptional(s, i);
          let name; [name, i] = readGroup(s, i);
          const cp = /^ws-([A-Za-z0-9_-]+)$/.exec(name);
          if (!cp) { ok = false; continue; }
          const h = Math.max(0.5, Math.min(3, parseFloat(opt) || 1));
          flush(); parts.push({ html: `<img class="pg-pic" src="${esc(picUrl(cp[1]))}" alt="" loading="lazy" style="height:${(h * 1.05).toFixed(2)}em">` });
          continue;
        }
        if (cmd === 'makebox') {
          let skip; [skip, i] = readOptional(s, i); [skip, i] = readOptional(s, i);
          let arg; [arg, i] = readGroup(s, i);
          const b = blankFromMacro('makebox', arg);
          if (b) addBlank(b); else text(arg);
          continue;
        }
        if (['textbf', 'textit', 'emph', 'underline', 'textcolor', 'boxed', 'fbox', 'wsbox', 'mbox', 'text', 'textsf', 'textrm', 'textsc'].includes(cmd)) {
          if (cmd === 'textcolor') { let col; [col, i] = readGroup(s, i); }
          let arg; [arg, i] = readGroup(s, i);
          const b = blankFromMacro(cmd, arg);
          if (b) { addBlank(b); continue; }
          const tag = { textbf: 'b', textit: 'i', emph: 'i', underline: 'u' }[cmd];
          if (cmd === 'wsbox' || cmd === 'fbox' || cmd === 'boxed') { flush(); html += '<span class="pg-tile">'; text(arg); flush(); html += '</span>'; continue; }
          if (tag) { html += `<${tag}>`; text(arg); html += `</${tag}>`; } else text(arg);
          continue;
        }
        ok = false;
        continue;
      }
      if (c === '$') { const end = s.indexOf('$', i + 1); if (end < 0) { i++; continue; } renderMath(s.slice(i + 1, end)); i = end + 1; continue; }
      if (c === '{' || c === '}') { i++; continue; }
      if (c === '~') { html += ' '; plain += ' '; i++; continue; }
      html += esc(c); plain += c; i++;
    }
  };

  text(src);
  flush();
  return { parts, ok, plain };
}

// ---------- so khớp đáp án ----------
export function plainTex(src, keepSpace = false) {
  const out = String(src)
    .replace(/\\wshz(?:\[[^\]]*\])?\{([^{}]*)\}/g, (m, name) => hzChar(name)?.char || '')
    .replace(/\\(['`=^"~]|v(?![A-Za-z]))\s*\{([^{}]*)\}/g, (m, c, a) => compose(c, a))
    .replace(/\\(['`=^"~])([A-Za-z])/g, (m, c, a) => compose(c, a))
    .replace(/\\(?:dfrac|frac)\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '$1/$2')
    .replace(/\\(?:times|cdot)\b/g, '×').replace(/\\div\b/g, ':')
    .replace(/\\(?:ge|geq)\b/g, '≥').replace(/\\(?:le|leq)\b/g, '≤').replace(/\\(?:ne|neq)\b/g, '≠')
    .replace(/\\(?:left|right)\b/g, '').replace(/\\(?:text|textbf|textit|mathrm|underline|wsbox)\s*\{([^{}]*)\}/g, '$1')
    .replace(/\\wspic(?:\[[^\]]*\])?\{[^}]*\}/g, '')
    .replace(/\\\\(?:\[[^\]]*\])?/g, ' ')
    .replace(/\\(?:quad|qquad|hfill|noindent|medskip|smallskip)\b/g, ' ')
    .replace(/\\[,;!]/g, '').replace(/\\ /g, ' ').replace(/\\([%&_#$])/g, '$1').replace(/\\rightarrow\b/g, '→')
    .replace(/[${}~]+/g, '');
  return keepSpace ? out.replace(/\s+/g, ' ').trim() : out.replace(/\s+/g, '');
}
function plainQuestion(src, keepSpace = false) {
  return plainTex(src
    .replace(/\\(?:ldots|dots)\b/g, BLANK).replace(/\\dotfill\b/g, BLANK)
    .replace(/\\(?:boxed|fbox)\s*\{\s*\\phantom\{[^}]*\}\s*\}/g, BLANK)
    .replace(/\\underline\s*\{\s*\\hspace\*?\{[^}]*\}\s*\}/g, BLANK)
    .replace(/\\fbox\s*\{\s*\\rule\{[^}]*\}\{[^}]*\}\s*\\hspace\*?\{[^}]*\}\s*\}/g, BLANK)
    .replace(/\\makebox\s*(?:\[[^\]]*\]\s*){0,2}\{\s*\\dotfill\s*\}/g, BLANK), keepSpace);
}
const reEscape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const NUM = /^-?\d+(?:[.,]\d+)?$/;

/* Đoán đáp án cho từng chỗ trống từ câu hỏi và đáp án mẫu. Trả về mảng chuỗi hoặc null (khi đó học sinh tự đối chiếu). */
export function expectedValues(q, a, blanks) {
  const answer = plainTex(a, true);
  if (!answer) return null;
  if (blanks === 0) {
    const eq = /^([A-Za-z]\w*)\s*=\s*(.+)$/.exec(answer);
    if (eq) return { prefix: eq[1] + ' =', values: [eq[2]] };
    const lone = /^(-?\d+(?:[.,]\d+)?)(?:[^\d=;]{0,16})$/.exec(answer);
    if (lone) return { prefix: null, values: [lone[1]] };
    const numbers = answer.match(/\d+(?:[.,]\d+)?/g) || [];
    if (answer.length <= 30 && numbers.length === 1 && !/[=;()]/.test(answer)) return { prefix: null, values: [numbers[0]] };          // "số hạng bằng 2" -> 2
    if (answer.length <= 24 && !/[=;,()]/.test(answer)) return { prefix: null, values: [answer] };   // câu trả lời ngắn bằng chữ (thứ Hai, con dê…)
    return null;
  }
  const flexible = text => reEscape(text.trim()).replace(/\s+/g, '\\s*');
  const template = plainQuestion(q, true);
  if (template.split(BLANK).length - 1 === blanks) {
    const literals = template.split(BLANK);
    const attempt = (parts, text = answer) => { const m = new RegExp('^' + parts.map(flexible).join('\\s*(.+?)\\s*') + '$').exec(text); return m ? m.slice(1).map(v => v.trim()) : null; };
    const last = literals[literals.length - 1];
    const noHint = last.replace(/\s*\([^()]*\)\s*$/, '');
    const tails = [last, last.replace(/[.!?:;]+$/, ''), noHint, noHint.replace(/[.!?:;]+$/, '')];   // câu hỏi có thể kết bằng dấu câu hoặc gợi ý "(s / x)"
    let values = null;
    for (const dropPrefix of [false, true]) {
      if (dropPrefix && !literals[0].trim()) break;
      for (const tail of tails) {
        const parts = [...literals.slice(0, -1), tail];
        if (dropPrefix) parts[0] = '';
        values = attempt(parts, dropPrefix ? answer.replace(/\s*\([^()]*\)$/, '') : answer);
        if (values) break;
      }
      if (values) break;
    }
    if (values) return { values };
  }
  const trimmed = answer.replace(/\s*\([^()]*\)$/, '');
  if (blanks === 1) return { values: [trimmed] };
  const split = trimmed.split(/\s*[;,]\s*/).filter(Boolean);
  if (split.length === blanks) return { values: split };
  return null;
}

export function sameAnswer(expected, given) {
  const clean = s => String(s).normalize('NFC').toLowerCase().replace(/\s+/g, '').replace(/[.,;!?]+$/, '');
  const e = clean(expected), g = clean(given);
  if (!g) return false;
  const asNumber = s => NUM.test(s) ? Number(s.replace(',', '.')) : NaN;
  const ne = asNumber(e), ng = asNumber(g);
  if (!Number.isNaN(ne) && !Number.isNaN(ng)) return ne === ng;
  const strip = s => s.replace(/[×*x·]/g, '×').replace(/[()]/g, '');
  return e === g || strip(e) === strip(g);
}

/* Tiếng Trung/Nhật: pinyin hoặc romaji gõ không cần dấu thanh; đáp án có nhiều cách đọc ("ji, mimi", "ha(reru)") thì đúng với bất kỳ cách nào. */
const fold = v => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ü/g, 'u').replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9fff]/g, '');
export function readings(expected) {
  const out = new Set();
  for (const piece of String(expected).split(/\s*[,;/]\s*/)) {
    if (!piece.trim()) continue;
    out.add(fold(piece));
    out.add(fold(piece.replace(/\([^)]*\)/g, '')));
  }
  out.delete('');
  return [...out];
}
export const sameLoose = (expected, given) => !!fold(given) && readings(expected).includes(fold(given));

// ---------- bài tập ----------
/* sheet.blocks (từ Worksheet.generate().sheets[i]) -> các khối có thể làm trên web. Khối dùng hình vẽ TikZ,
   ghép nối, sơ đồ... (không có "items" đơn giản) bị bỏ qua và được báo trong `skipped`. */
export function buildExercises(sheet, opts = {}) {
  const exercises = [], skipped = [];
  for (const block of sheet.blocks) {
    if (block.body || !block.items.length) { skipped.push(block.name); continue; }
    const items = [];
    for (const item of block.items) {
      const choice = parseChoice(item, opts);                         // "khoanh chữ đúng": A. … B. … C. …
      if (choice) { items.push(choice); continue; }
      const q = parseTex(item.q, opts);
      if (!q.ok) continue;
      const blanks = q.parts.filter(p => p.blank).length;
      const guess = expectedValues(item.q, item.a, blanks);
      const answer = parseTex(item.a, { ...opts, katex: opts.katex });
      let extra = null;
      if (blanks === 0 && guess) extra = { prefix: guess.prefix };
      const total = blanks || (guess ? 1 : 0);
      items.push({
        parts: q.parts, blanks: total, extra, hint: (/\(([^()]*\/[^()]*)\)\s*$/.exec(plainTex(item.q, true)) || [, ''])[1].split('/').map(x => x.trim()).filter(Boolean),
        expected: guess ? guess.values : null,
        answerHtml: answer.parts.map(p => p.html || '').join(''),
        mode: guess ? 'auto' : 'self',
        ...describeItem(item, q, guess, opts)
      });
    }
    if (!items.length) { skipped.push(block.name); continue; }
    const instr = parseTex(block.instr, opts);
    exercises.push({ id: block.id, name: block.name, instrHtml: instr.parts.map(p => p.html || '').join(''), cols: block.cols, items });
  }
  return { exercises, skipped };
}

function parseChoice(item, opts) {
  const first = /\\textbf\{A\.\}/.exec(item.q), answer = /^([A-Z])\b/.exec(plainTex(item.a, true));
  if (!first || !answer) return null;
  const stem = parseTex(item.q.slice(first.index), opts), head = parseTex(item.q.slice(0, first.index), opts);
  const pieces = item.q.slice(first.index).split(/\\textbf\{([A-Z])\.\}/);            // ['', 'A', ' …', 'B', ' …']
  const options = [];
  for (let i = 1; i < pieces.length; i += 2) {
    const parsed = parseTex(pieces[i + 1].replace(/\\(?:qquad|quad|hfill)\b/g, ' '), opts);
    if (!parsed.ok) return null;
    options.push(parsed.parts.map(p => p.html || '').join(''));
  }
  const correct = answer[1].charCodeAt(0) - 65;
  if (!head.ok || stem === null || options.length < 2 || correct < 0 || correct >= options.length) return null;
  const answerParsed = parseTex(item.a, opts);
  return { parts: head.parts, blanks: 0, extra: null, expected: [answer[1]], hint: [], pic: head.parts.some(p => p.html && p.html.includes('pg-pic')), glyph: false, candidates: [], caseOnly: false, tiles: null,
    mode: 'choice', options, correct, answerHtml: answerParsed.parts.map(p => p.html || '').join('') };
}

const letters = v => String(v).toLowerCase().replace(/[^a-zà-ỹ0-9]/g, '');
const lead = v => (/^-?\d+(?:[.,]\d+)?/.exec(v) || [''])[0];

/* Thông tin giúp game chọn kiểu câu hỏi và đáp án nhiễu liên quan:
   candidates: các từ/số được liệt kê ngay trong câu hỏi (tìm số khác loại, khoanh từ khác loại…);
   pic: câu có hình minh hoạ; caseOnly: chỉ phải sửa hoa/thường; tiles: đáp án là một dãy có thể xếp từ các thẻ. */
function describeItem(item, q, guess, opts = {}) {
  const out = { pic: q.parts.some(p => p.html && p.html.includes('pg-pic')), glyph: q.parts.some(p => p.html && p.html.includes('pg-hz')), candidates: [], caseOnly: false, tiles: null, alts: false };
  const values = guess?.values;
  if (!values) return out;
  if (opts.alts && values.some(v => /[,;()]/.test(v))) { out.alts = true; return out; }       // nhiều cách đọc, không phải một dãy cần xếp
  const visible = plainQuestion(item.q, true).replace(new RegExp(BLANK, 'g'), ' ').replace(/\([^()]*\/[^()]*\)\s*$/, '');
  if (values.length === 1) {
    const only = values[0], numeric = isNumber(only);
    const tokens = new Set();
    for (const m of item.q.matchAll(/\\wsbox\{([^{}]*)\}/g)) tokens.add(plainTex(m[1], true));
    for (const piece of plainTex(item.q.replace(/\\(?:ldots|dots|dotfill)\b/g, ' '), true).split(/\s*[\/,;]\s*/)) { const t = numeric ? lead(piece.trim()) : piece.trim(); if (t && t.length <= 30 && !t.includes(BLANK)) tokens.add(t); }
    if (tokens.has(only)) out.candidates = [...tokens].filter(t => t !== only);
    if (/[A-Za-zÀ-ỹ]/.test(only) && only.split(/\s+/).length >= 2 && letters(visible) === letters(only)) out.caseOnly = true;
    if (isLongAnswer(values) && !out.caseOnly) {
      const parts = only.includes(',') ? only.split(/\s*,\s*/) : only.split(/\s+/);
      if (parts.length >= 3 && parts.length <= 9 && new Set(parts).size > 1) out.tiles = { tokens: parts, glue: only.includes(',') ? ', ' : ' ' };
    }
  } else if (values.length >= 3 && values.every(isNumber)) {                // "từ bé đến lớn": xếp các số
    const nums = values.map(v => Number(v.replace(',', '.')));
    const up = nums.every((n, i) => i === 0 || n >= nums[i - 1]), down = nums.every((n, i) => i === 0 || n <= nums[i - 1]);
    if ((up || down) && new Set(values).size > 1) out.tiles = { tokens: values, glue: '', numeric: true };
  }
  return out;
}

export const countItems = exercises => exercises.reduce((n, e) => n + e.items.length, 0);

// ---------- trắc nghiệm ----------
const isNumber = v => NUM.test(String(v).replace(/\s+/g, ''));
const shuffled = (list, rand) => { const a = [...list]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const DAYS = ['thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy', 'Chủ nhật'];

function wrongNumbers(value, rand) {
  const raw = String(value).replace(/\s+/g, ''), sep = raw.includes(',') ? ',' : '.';
  const n = Number(raw.replace(',', '.')), places = /[.,]/.test(raw) ? raw.split(/[.,]/)[1].length : 0;
  const unit = 10 ** -places, fmt = x => places ? x.toFixed(places).replace('.', sep) : String(Math.round(x));
  const steps = [unit, 2 * unit, 10 * unit, 5 * unit, 100 * unit].filter(d => d <= Math.max(Math.abs(n), 10) * 1.01 + unit);
  const candidates = new Set();
  for (const d of steps) { candidates.add(n + d); candidates.add(n - d); }
  if (!places && Math.abs(n) >= 10) { const t = String(Math.abs(n)); candidates.add(Number(t.slice(0, -2) + t[t.length - 1] + t[t.length - 2]) * Math.sign(n)); }
  if (Math.abs(n) > 0 && Math.abs(n) < 100) { candidates.add(n * 10); if (Number.isInteger(n / 10)) candidates.add(n / 10); }
  const near = [...candidates].filter(x => Number.isFinite(x) && x !== n && (n < 0 || x >= 0) && (places || Number.isInteger(x)));
  near.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));              // ưu tiên số gần đáp án đúng, nhìn như nhầm thật
  return [...shuffled(near.slice(0, 4), rand), ...shuffled(near.slice(4), rand)].map(fmt);
}

function caseVariants(v, rand) {                               // sai hoa/thường: "We go to school on Monday."
  const words = v.split(/\s+/), out = new Set();
  for (let k = 0; k < 14 && out.size < 6; k++) {
    const c = [...words], i = Math.floor(rand() * c.length), w = c[i], first = w[0];
    if (!first || !/[A-Za-zÀ-ỹ]/.test(first)) continue;
    c[i] = first === first.toUpperCase() ? first.toLowerCase() + w.slice(1) : first.toUpperCase() + w.slice(1);
    if (rand() < 0.3) { const j = Math.floor(rand() * c.length); if (j !== i && c[j]) c[j] = c[j][0] === c[j][0].toUpperCase() ? c[j][0].toLowerCase() + c[j].slice(1) : c[j][0].toUpperCase() + c[j].slice(1); }
    const joined = c.join(' ');
    if (joined !== v) out.add(joined);
  }
  return [...out];
}

function wrongFor(value, siblings, rand, style) {
  if (style === 'case') return shuffled(caseVariants(String(value).trim(), rand), rand);
  const v = String(value).trim();
  if (['<', '>', '='].includes(v)) return ['<', '>', '='].filter(x => x !== v);
  if (['.', '?', '!'].includes(v)) return ['.', '?', '!'].filter(x => x !== v);
  if (isNumber(v)) return [...shuffled(siblings.filter(x => x !== v && isNumber(x)), rand), ...wrongNumbers(v, rand)];
  const frac = /^(\d+)\s*\/\s*(\d+)$/.exec(v);
  if (frac) {
    const a = Number(frac[1]), b = Number(frac[2]);
    return shuffled([[a + 1, b], [a, b + 1], [Math.max(1, a - 1), b], [b, a], [a + 1, b + 1], [a, Math.max(1, b - 1)]].filter(([x, y]) => x !== a || y !== b).map(([x, y]) => `${x}/${y}`), rand);
  }
  if (DAYS.some(d => d.toLowerCase() === v.toLowerCase())) return shuffled(DAYS.filter(d => d.toLowerCase() !== v.toLowerCase()), rand);
  const out = new Set(siblings.filter(x => x && x !== v && !isNumber(x)));
  const numberTokens = [...v.matchAll(/\d+/g)];
  if (numberTokens.length) {                                                 // "7 giờ 30 phút": đổi một con số
    for (const m of numberTokens) for (const w of wrongNumbers(m[0], rand).slice(0, 3)) out.add(v.slice(0, m.index) + w + v.slice(m.index + m[0].length));
  }
  const list = /,/.test(v) ? v.split(/\s*,\s*/) : v.split(/\s+/), glue = /,/.test(v) ? ', ' : ' ';
  if (list.length >= 3) {                                                    // đổi chỗ hai phần tử: sai thứ tự
    for (let k = 0; k < 8; k++) {
      const c = [...list], i = Math.floor(rand() * c.length), j = Math.floor(rand() * c.length);
      if (i === j) continue;
      const lastPunct = /[.!?]$/.exec(c[c.length - 1]);
      if (lastPunct && (i === c.length - 1 || j === c.length - 1)) continue;
      [c[i], c[j]] = [c[j], c[i]];
      if (/^[A-ZÀ-Ỹ]/.test(list[0]) && !/^[A-ZÀ-Ỹ]/.test(c[0])) c[0] = c[0][0].toUpperCase() + c[0].slice(1);
      const joined = c.join(glue);
      if (joined !== v) out.add(joined);
    }
  }
  return shuffled([...out], rand);
}

/* Các cách trả lời tương ứng với một câu có ô trống: đáp án đúng cùng 3 đáp án nhiễu hợp lý.
   values: đáp án đúng cho từng ô; siblings[i]: các đáp án của ô thứ i ở những câu cùng dạng bài. Trả về null nếu không đủ đáp án nhiễu. */
export function makeChoices(values, siblings = [], rand = Math.random, want = 4, style = '') {
  const key = list => list.map(x => String(x).replace(/\s+/g, '').toLowerCase()).join('|');
  if (values.length !== 1) return null;                                   // nhiều ô thì điền hoặc xếp thẻ, không làm trắc nghiệm
  const options = [values.map(String)], seen = new Set([key(options[0])]);
  const pools = values.map((v, i) => wrongFor(v, siblings[i] || [], rand, style));
  for (let round = 0; options.length < want && round < 30; round++) {
    const pick = values.map(String);
    const i = values.length === 1 ? 0 : Math.floor(rand() * values.length);
    const pool = pools[i];
    if (!pool.length) { if (values.length === 1) break; continue; }
    pick[i] = pool[round % pool.length];
    if (values.length > 1 && rand() < 0.35) { const j = Math.floor(rand() * values.length); if (j !== i && pools[j].length) pick[j] = pools[j][(round + 1) % pools[j].length]; }
    if (!seen.has(key(pick))) { seen.add(key(pick)); options.push(pick); }
  }
  if (options.length < 3) return null;
  const order = shuffled(options.map((_, i) => i), rand);
  return { options: order.map(i => options[i]), correct: order.indexOf(0) };
}

/* Đáp án phải gõ cả câu hay cả danh sách từ: không hợp để gõ tay, chỉ hợp với trắc nghiệm. */
export const isLongAnswer = values => values.some(v => /[,;?!]/.test(v) || v.trim().split(/\s+/).length > 3 || v.length > 18);
