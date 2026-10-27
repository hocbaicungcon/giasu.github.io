/* credit: giasu.ai.vn */
// Trợ lý Gia Sư: đọc đề ngắn của học sinh tiểu học rồi trả lời bằng gợi ý từng bước (gợi ý → lời giải → đáp số).
// Chạy hoàn toàn trên máy của học sinh, không gửi dữ liệu đi đâu. Hàm chính: tutorReply(text) → phản hồi hoặc null.
// Phản hồi: {kind, title, intro, hints: [string], solution: [string | {pre}], answer, topic}. hints rỗng = hiện luôn lời giải.

const NUM = '\\d+(?:[.,]\\d+)*';
const MINUS = /[−–—]/g;
const PLACES = ['đơn vị', 'chục', 'trăm', 'nghìn', 'chục nghìn', 'trăm nghìn', 'triệu', 'chục triệu', 'trăm triệu'];

export const toNum = (s) => (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(s) ? Number(s.replace(/\./g, '').replace(',', '.')) : Number(s.replace(',', '.')));
const round9 = (n) => Math.round(n * 1e9) / 1e9;
export function fmt(n) {
  if (!Number.isFinite(n)) return String(n);
  const r = Math.round(Math.abs(n) * 1e6) / 1e6, [i, f] = String(r).split('.');
  const g = i.length >= 5 ? i.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : i;
  return (n < 0 && r !== 0 ? '−' : '') + g + (f ? ',' + f : '');
}
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
const lcm = (a, b) => (a / gcd(a, b)) * b;
const nums = (s) => (s.match(new RegExp(NUM, 'g')) || []).map(toNum);
const first = (re, s) => { const m = re.exec(s); return m ? toNum(m[1]) : null; };
const unitOf = (re, s, d = '') => { const m = re.exec(s); return m ? m[1] : d; };

/* ---------- Biểu thức số học ---------- */
function tokenize(src) {
  const s = src.replace(MINUS, '-');
  const out = []; let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === ' ') { i++; continue; }
    const m = new RegExp('^' + NUM).exec(s.slice(i));
    if (m) { out.push({ t: 'n', v: toNum(m[0]) }); i += m[0].length; continue; }
    if ('+-×÷'.includes(c)) { out.push({ t: 'op', v: c === '-' ? '−' : c }); i++; continue; }
    if (c === '(' || c === ')') { out.push({ t: c }); i++; continue; }
    return null;
  }
  return out;
}
function validate(t) {   // n (op n)*, ngoặc cân bằng, không có số âm đứng đầu
  let depth = 0, expectNum = true;
  for (const x of t) {
    if (x.t === '(') { if (!expectNum) return false; depth++; } else if (x.t === ')') { if (expectNum || --depth < 0) return false; } else if (x.t === 'n') { if (!expectNum) return false; expectNum = false; } else { if (expectNum) return false; expectNum = true; }
  }
  return depth === 0 && !expectNum;
}
const applyOp = (a, op, b) => round9(op === '+' ? a + b : op === '−' ? a - b : op === '×' ? a * b : a / b);
const show = (t) => t.map((x) => (x.t === 'n' ? fmt(x.v) : x.t === 'op' ? ' ' + x.v + ' ' : x.t)).join('').replace(/\( /g, '(').replace(/ \)/g, ')');
const OPNAME = { '+': 'cộng', '−': 'trừ', '×': 'nhân', '÷': 'chia' };

/** Từng bước tính biểu thức: [{note, text}] hoặc {error}. */
export function evalSteps(tokens) {
  let t = tokens.slice(); const steps = [], hasParen = t.some((x) => x.t === '(');
  for (let guard = 0; t.length > 1 && guard < 60; guard++) {
    let lo = 0, hi = t.length, inParen = false;
    const close = t.findIndex((x) => x.t === ')');
    if (close >= 0) { let open = close; while (t[open].t !== '(') open--; lo = open + 1; hi = close; inParen = true; }
    const seg = t.slice(lo, hi);
    if (seg.length === 1) { t.splice(lo - 1, 3, seg[0]); steps.push({ note: 'Bỏ dấu ngoặc vì trong ngoặc chỉ còn một số.', text: show(t) }); continue; }
    let k = seg.findIndex((x) => x.t === 'op' && (x.v === '×' || x.v === '÷'));
    const mulFirst = k >= 0 && seg.some((x) => x.t === 'op' && (x.v === '+' || x.v === '−'));
    if (k < 0) k = seg.findIndex((x) => x.t === 'op');
    const a = seg[k - 1].v, op = seg[k].v, b = seg[k + 1].v;
    if (op === '÷' && b === 0) return { error: 'Không thể chia cho 0 em nhé! Em kiểm tra lại đề bài giúp mình.' };
    const r = applyOp(a, op, b);
    const why = inParen && hasParen ? 'Tính trong ngoặc trước' : mulFirst ? 'Nhân, chia trước; cộng, trừ sau' : seg.length > 3 ? 'Cùng cấp thì tính từ trái sang phải' : 'Thực hiện phép tính';
    steps.push({ note: `${why}: ${fmt(a)} ${op} ${fmt(b)} = ${fmt(r)}`, text: null });
    t.splice(lo + k - 1, 3, { t: 'n', v: r });
    steps[steps.length - 1].text = show(t);
  }
  return { steps, value: t[0].v };
}

/* ---------- Đặt tính ---------- */
const digitsOf = (n) => String(n).split('').map(Number);
const pad = (rows) => { const w = Math.max(...rows.map((r) => r.length)); return rows.map((r) => ' '.repeat(w - r.length) + r).join('\n'); };
const spread = (n) => String(n).split('').join(' ');
const col = (top, op, bot, res) => { const w = Math.max(spread(top).length, spread(bot).length + 2, spread(res).length) ; const L = (s) => ' '.repeat(w - s.length) + s; return [L(spread(top)), L(op + ' ' + spread(bot)), '-'.repeat(w), L(spread(res))].join('\n'); };

function colAdd(a, b) {
  const A = digitsOf(a).reverse(), B = digitsOf(b).reverse(), n = Math.max(A.length, B.length), lines = []; let carry = 0, out = '';
  for (let i = 0; i < n; i++) {
    const x = A[i] ?? 0, y = B[i] ?? 0, s = x + y + carry;
    lines.push(`Hàng ${PLACES[i] || 'tiếp theo'}: ${x} + ${y}${carry ? ` + ${carry} (nhớ)` : ''} = ${s}, viết ${s % 10}${s >= 10 ? ` nhớ ${Math.floor(s / 10)}` : ''}.`);
    out = (s % 10) + out; carry = Math.floor(s / 10);
  }
  if (carry) { lines.push(`Còn nhớ ${carry}, viết ${carry} vào hàng ${PLACES[n] || 'tiếp theo'}.`); out = carry + out; }
  return { lines, pre: col(a, '+', b, Number(out)) };
}
function colSub(a, b) {
  const A = digitsOf(a).reverse(), B = digitsOf(b).reverse(), lines = []; let borrow = 0, out = '';
  for (let i = 0; i < A.length; i++) {
    const x = A[i], y = (B[i] ?? 0) + borrow;
    if (x < y) { lines.push(`Hàng ${PLACES[i] || 'tiếp theo'}: ${x} không trừ được ${y}, lấy ${x + 10} − ${y} = ${x + 10 - y}, viết ${x + 10 - y} nhớ 1.`); out = (x + 10 - y) + out; borrow = 1; } else { lines.push(`Hàng ${PLACES[i] || 'tiếp theo'}: ${x} − ${y}${borrow ? ' (đã cộng nhớ)' : ''} = ${x - y}, viết ${x - y}.`); out = (x - y) + out; borrow = 0; }
  }
  return { lines, pre: col(a, '−', b, Number(out)) };
}
function colMul(a, b) {
  const lines = [], B = digitsOf(b).reverse(), partials = [];
  B.forEach((d, j) => {
    const A = digitsOf(a).reverse(); let carry = 0, out = '';
    const steps = [];
    for (let i = 0; i < A.length; i++) { const p = A[i] * d + carry; steps.push(`${A[i]} × ${d}${carry ? ` + ${carry}` : ''} = ${p}, viết ${p % 10}${p >= 10 ? ` nhớ ${Math.floor(p / 10)}` : ''}`); out = (p % 10) + out; carry = Math.floor(p / 10); }
    if (carry) out = carry + out;
    lines.push(B.length > 1 ? `Nhân ${fmt(a)} với chữ số hàng ${PLACES[j]} (${d})${j ? `, viết lùi sang trái ${j} cột` : ''}:` : `Nhân từng chữ số của ${fmt(a)} với ${d}, từ phải sang trái:`);
    lines.push(steps.join('; ') + '.');
    partials.push(Number(out) * 10 ** j);
  });
  const res = a * b, spreadW = spread(res).length + 2, L = (s) => ' '.repeat(Math.max(0, spreadW - s.length)) + s;
  const rows = [L(spread(a)), L('× ' + spread(b)), '-'.repeat(spreadW)];
  if (B.length > 1) { partials.forEach((p, j) => rows.push(L(spread(String(p / 10 ** j)) + '  '.repeat(j)))); rows.push('-'.repeat(spreadW)); }
  rows.push(L(spread(res)));
  if (B.length > 1) lines.push(`Cộng các tích lại: ${partials.map(fmt).join(' + ')} = ${fmt(res)}.`);
  return { lines, pre: rows.join('\n') };
}
function longDiv(a, b) {
  const s = String(a), lines = []; let cur = 0, i = 0, q = '', r = 0;
  for (; i < s.length;) { cur = cur * 10 + Number(s[i]); i++; if (cur >= b || i === s.length) break; lines.push(`${cur} chưa chia được cho ${b}, hạ thêm chữ số tiếp theo.`); }
  for (;;) {
    const d = Math.floor(cur / b); r = cur - d * b; q += d;
    lines.push(`${cur} : ${b} = ${d}, vì ${d} × ${b} = ${d * b}; ${cur} − ${d * b} = ${r}.`);
    if (i >= s.length) break;
    cur = r * 10 + Number(s[i]); lines.push(`Hạ ${s[i]} được ${cur}.`); i++;
  }
  const quo = Number(q);
  return { lines, quo, rem: r };
}

/* ---------- Trả lời ---------- */
const arith = (text) => {
  let s = text.replace(MINUS, '-').replace(/([\d)])\s*[xX*·×]\s*(?=[\d(])/g, '$1×').replace(/([\d)])\s*[:÷]\s*(?=[\d(])/g, '$1÷');
  s = s.replace(/\b(bằng|là)\s*$/i, '');
  let given = null;
  const eq = s.indexOf('=');
  if (eq >= 0) { const right = s.slice(eq + 1).trim(); const m = new RegExp('^(' + NUM + ')\\s*$').exec(right.replace(/[.!]$/, '')); if (m) given = toNum(m[1]); s = s.slice(0, eq); }
  const cands = (s.match(/[\d(][\d\s.,+\-×÷()]*[\d)]/g) || []).filter((c) => /[+\-×÷]/.test(c.replace(/^\s*-/, '')));
  cands.sort((x, y) => y.length - x.length);
  for (const c of cands) {
    const tokens = tokenize(c.trim());
    if (!tokens || !validate(tokens) || tokens.filter((x) => x.t === 'n').length < 2) continue;
    return { tokens, given, expr: c.trim() };
  }
  return null;
};

function arithmeticReply(tokens, given) {
  const ev = evalSteps(tokens);
  if (ev.error) return { kind: 'error', title: 'Chưa tính được', intro: ev.error, hints: [], solution: [], answer: null };
  const exprText = show(tokens), value = ev.value, ops = tokens.filter((x) => x.t === 'op');
  const single = tokens.length === 3 && ops.length === 1 && Number.isInteger(tokens[0].v) && Number.isInteger(tokens[2].v) && tokens[0].v >= 0 && tokens[2].v >= 0 && tokens[0].v < 1e9 && tokens[2].v < 1e9;
  const solution = []; const hints = [];
  const [A, B] = [tokens[0].v, tokens[2].v], op = ops[0] && ops[0].v;
  let title = `Tính ${exprText}`;
  if (given !== null) title = Math.abs(given - value) < 1e-9 ? 'Em kiểm tra kết quả rất tốt!' : 'Mình cùng kiểm tra lại nhé';
  if (single) {
    const kind = OPNAME[op];
    hints.push(`Đây là phép ${kind}. ${op === '+' || op === '−' || op === '×' ? 'Em đặt tính thẳng cột (hàng đơn vị thẳng hàng đơn vị), tính từ phải sang trái.' : 'Em đặt phép chia, lấy từng chữ số của số bị chia từ trái sang phải.'}`);
    hints.push({ '+': 'Cộng từng hàng, bắt đầu từ hàng đơn vị. Nếu tổng của một hàng từ 10 trở lên thì viết chữ số hàng đơn vị và nhớ 1 sang hàng bên trái.', '−': 'Trừ từng hàng, bắt đầu từ hàng đơn vị. Nếu chữ số trên nhỏ hơn chữ số dưới thì mượn 1 từ hàng bên trái (thành 10 ở hàng này).', '×': 'Nhân số thứ nhất lần lượt với từng chữ số của số thứ hai, bắt đầu từ hàng đơn vị. Mỗi dòng sau viết lùi sang trái một chữ số.', '÷': 'Chia từng bước: chia, nhân, trừ, rồi hạ chữ số tiếp theo xuống.' }[op]);
    if (op === '−' && A < B) { return { kind: 'error', title: 'Em xem lại đề nhé', intro: `${fmt(A)} nhỏ hơn ${fmt(B)} nên ở tiểu học mình chưa trừ được (chưa học số âm). Em kiểm tra xem có chép nhầm số bị trừ và số trừ không.`, hints: [], solution: [], answer: null }; }
    if (op === '÷') {
      const d = longDiv(A, B);
      solution.push(`Chia ${fmt(A)} cho ${fmt(B)}, lần lượt từng bước:`, ...d.lines);
      solution.push(d.rem ? `Vậy ${fmt(A)} : ${fmt(B)} = ${fmt(d.quo)} (dư ${fmt(d.rem)}).${A % B ? ` Nếu chia tiếp ra số thập phân: ${fmt(A)} : ${fmt(B)} = ${fmt(value)}.` : ''}` : `Vậy ${fmt(A)} : ${fmt(B)} = ${fmt(d.quo)}.`);
      hints.push(`Bước đầu: ${d.lines[0]}`);
      var answer = d.rem ? `${fmt(d.quo)} (dư ${fmt(d.rem)})` : fmt(d.quo);
    } else {
      const c = op === '+' ? colAdd(A, B) : op === '−' ? colSub(A, B) : colMul(A, B);
      solution.push({ pre: c.pre }, ...c.lines);
      hints.push(`Bước đầu: ${c.lines[0]}`);
      solution.push(`Kiểm tra bằng phép tính ngược: ${op === '+' ? `${fmt(value)} − ${fmt(B)} = ${fmt(A)}` : op === '−' ? `${fmt(value)} + ${fmt(B)} = ${fmt(A)}` : `${fmt(value)} : ${fmt(B)} = ${fmt(A)}`}.`);
    }
    answer = answer || fmt(value);
    if (given !== null) return checkReply(exprText, given, value, answer, hints, solution, title);
    return { kind: 'arith', title, intro: 'Mình không đưa đáp án ngay. Em thử tự làm theo gợi ý nhé!', hints, solution, answer: `${exprText} = ${answer}`, topic: 'phép tính' };
  }
  hints.push(ops.length > 1 ? 'Có nhiều phép tính. Nhớ thứ tự: trong ngoặc trước; nhân, chia trước, cộng, trừ sau; cùng cấp thì từ trái sang phải.' : 'Em đọc kĩ phép tính rồi tính từng bước.');
  hints.push(`Bước đầu: ${ev.steps[0].note}`);
  ev.steps.forEach((st) => { solution.push(st.note); solution.push({ pre: '= ' + st.text }); });
  const answer2 = fmt(value);
  if (given !== null) return checkReply(exprText, given, value, answer2, hints, solution, title);
  return { kind: 'arith', title, intro: 'Em thử tự tính từng bước, cần thì bấm xem gợi ý nhé!', hints, solution, answer: `${exprText} = ${answer2}`, topic: 'thứ tự thực hiện phép tính' };
}
function checkReply(exprText, given, value, answer, hints, solution, title) {
  if (Math.abs(given - value) < 1e-9) return { kind: 'check', title, intro: `Đúng rồi! ${exprText} = ${fmt(given)}. Giỏi quá! Em có thể xem cách thử lại bằng phép tính ngược.`, hints: [], solution: solution.filter((x) => typeof x === 'string' && x.startsWith('Kiểm tra')), answer: null, ok: true };
  return { kind: 'check', title, intro: `Em tính ${exprText} = ${fmt(given)}, nhưng kết quả này chưa đúng rồi. Không sao đâu, mình cùng tìm lỗi nhé!`, hints: [`Em thử tính lại từng bước, nhớ kiểm tra phần nhớ (nếu có).`, ...hints.slice(1, 2)], solution, answer: `${exprText} = ${answer}`, ok: false, topic: 'phép tính' };
}

/* ---------- Phân số ---------- */
const frac = (n, d) => { const g = gcd(n, d) || 1; return [n / g, d / g]; };
const fs = ([n, d]) => (d === 1 ? String(n) : `${fmt(n)}/${fmt(d)}`);
const mixed = ([n, d]) => (d > 1 && n > d ? `${Math.floor(n / d)} ${fmt(n % d)}/${fmt(d)}` : null);
function fractionReply(text) {
  const fr = [...text.matchAll(/(\d+)\s*\/\s*(\d+)/g)].map((m) => [Number(m[1]), Number(m[2]), m.index, m[0].length]);
  if (!fr.length || fr.some((f) => f[1] === 0)) return null;
  const low = text.toLowerCase(), A = [fr[0][0], fr[0][1]];
  const done = (title, hints, solution, answer, topic = 'phân số') => ({ kind: 'fraction', title, intro: 'Cùng làm từng bước với phân số nhé!', hints, solution, answer, topic });
  if (fr.length === 1 && /rút gọn|tối giản/.test(low)) {
    const g = gcd(A[0], A[1]), r = frac(...A);
    return done(`Rút gọn ${fs(A)}`, ['Rút gọn là chia cả tử số và mẫu số cho cùng một số lớn hơn 1.', `Tìm số chia được cả ${A[0]} và ${A[1]} (ước chung lớn nhất).`], [`Ước chung lớn nhất của ${A[0]} và ${A[1]} là ${g}.`, `${A[0]} : ${g} = ${A[0] / g}; ${A[1]} : ${g} = ${A[1] / g}.`, g === 1 ? 'Phân số đã tối giản rồi.' : `Vậy ${fs(A)} = ${fs(r)}.`], fs(r));
  }
  if (fr.length >= 2) {
    const B = [fr[1][0], fr[1][1]], between = low.slice(fr[0][2] + fr[0][3], fr[1][2]);
    if (/so sánh|lớn hơn|bé hơn|nhỏ hơn|>|</.test(low)) {
      const L = lcm(A[1], B[1]), a = A[0] * (L / A[1]), b = B[0] * (L / B[1]), sign = a > b ? '>' : a < b ? '<' : '=';
      return done(`So sánh ${fs(A)} và ${fs(B)}`, ['Muốn so sánh hai phân số khác mẫu, em quy đồng mẫu số rồi so sánh tử số.', `Mẫu số chung có thể là ${L}.`], [`Quy đồng mẫu số chung ${L}:`, `${fs(A)} = ${a}/${L}; ${fs(B)} = ${b}/${L}.`, `So sánh tử số: ${a} ${sign} ${b}.`], `${fs(A)} ${sign} ${fs(B)}`);
    }
    let op = null;
    if (/\+|cộng/.test(between)) op = '+'; else if (/-|−|–|trừ/.test(between)) op = '−'; else if (/[x×*]|nhân/.test(between)) op = '×'; else if (/[:÷]|chia/.test(between)) op = '÷';
    if (!op) return null;
    const sol = []; let res, raw;
    if (op === '+' || op === '−') {
      const L = lcm(A[1], B[1]), a = A[0] * (L / A[1]), b = B[0] * (L / B[1]);
      if (A[1] !== B[1]) sol.push(`Quy đồng mẫu số: mẫu số chung là ${L}.`, `${fs(A)} = ${a}/${L}; ${fs(B)} = ${b}/${L}.`); else sol.push('Hai phân số cùng mẫu số, giữ nguyên mẫu số.');
      if (op === '−' && a < b) return { kind: 'error', title: 'Em xem lại đề nhé', intro: `${fs(A)} bé hơn ${fs(B)} nên chưa trừ được ở tiểu học.`, hints: [], solution: [], answer: null };
      const n = op === '+' ? a + b : a - b; sol.push(`${op === '+' ? 'Cộng' : 'Trừ'} hai tử số: ${a} ${op} ${b} = ${n}, mẫu số giữ nguyên ${L}: ${n}/${L}.`); raw = `${n}/${L}`;
      res = frac(n, L);
    } else if (op === '×') { sol.push(`Nhân tử số với tử số, mẫu số với mẫu số: (${A[0]} × ${B[0]}) / (${A[1]} × ${B[1]}) = ${A[0] * B[0]}/${A[1] * B[1]}.`); raw = `${A[0] * B[0]}/${A[1] * B[1]}`; res = frac(A[0] * B[0], A[1] * B[1]); } else {
      if (B[0] === 0) return { kind: 'error', title: 'Không chia được', intro: 'Không thể chia cho phân số có tử số bằng 0.', hints: [], solution: [], answer: null };
      sol.push(`Chia cho một phân số là nhân với phân số đảo ngược: ${fs(A)} : ${fs(B)} = ${fs(A)} × ${B[1]}/${B[0]}.`, `= ${A[0] * B[1]}/${A[1] * B[0]}.`); raw = `${A[0] * B[1]}/${A[1] * B[0]}`; res = frac(A[0] * B[1], A[1] * B[0]);
    }
    if (raw !== fs(res)) sol.push(`Rút gọn: ${raw} = ${fs(res)}.`); else sol.push(`${raw} đã là phân số tối giản.`);
    const m = mixed(res); if (m) sol.push(`Viết thành hỗn số: ${fs(res)} = ${m}.`);
    const hints = [op === '+' || op === '−' ? 'Hai phân số khác mẫu số thì quy đồng mẫu số trước.' : op === '×' ? 'Nhân phân số: tử nhân tử, mẫu nhân mẫu. Có thể rút gọn trước cho dễ tính.' : 'Chia phân số: giữ phân số thứ nhất, nhân với phân số thứ hai đã đảo ngược.', `Bước đầu: ${sol[0]}`];
    return done(`Tính ${fs(A)} ${op} ${fs(B)}`, hints, sol, `${fs(A)} ${op} ${fs(B)} = ${fs(res)}${m ? ` = ${m}` : ''}`);
  }
  return null;
}

/* ---------- Hình học ---------- */
const PI = 3.14;
function geometryReply(text) {
  const t = text.toLowerCase().replace(/[−–]/g, '-');
  const wantP = /chu vi/.test(t), wantS = /diện tích/.test(t);
  if (!wantP && !wantS) return null;
  const n = (re) => first(new RegExp(re + '[^\\d]{0,24}?(' + NUM + ')'), t);
  const u = unitOf(/\d\s*(km|hm|dam|dm|cm|mm|m)\b/, t, 'cm');
  const sq = u + '²';
  const mk = (title, formula, steps, answer, hints) => ({ kind: 'geometry', title, intro: 'Cùng nhớ công thức rồi thay số nhé!', hints: hints || [`Công thức cần dùng: ${formula}`, 'Em thay số vào công thức rồi tính, nhớ viết đơn vị.'], solution: steps, answer, topic: title });
  const need = (shape, what, formula) => ({ kind: 'geometry', title: `${what} ${shape}`, intro: `Mình chưa thấy đủ số trong đề. Công thức: ${formula}. Em gõ lại đề kèm các số đo, ví dụ: “${what} ${shape} …”.`, hints: [], solution: [], answer: null, topic: shape });
  const what = wantP && !wantS ? 'Chu vi' : wantS && !wantP ? 'Diện tích' : 'Chu vi và diện tích';
  if (/hình chữ nhật/.test(t)) {
    const a = n('(?:chiều dài|dài)'), b = n('(?:chiều rộng|rộng)');
    if (a === null || b === null) return need('hình chữ nhật', what, 'Chu vi = (dài + rộng) × 2; Diện tích = dài × rộng');
    const st = []; const ans = [];
    if (wantP) { st.push(`Chu vi = (${fmt(a)} + ${fmt(b)}) × 2 = ${fmt(round9((a + b) * 2))} ${u}.`); ans.push(`Chu vi: ${fmt(round9((a + b) * 2))} ${u}`); }
    if (wantS) { st.push(`Diện tích = ${fmt(a)} × ${fmt(b)} = ${fmt(round9(a * b))} ${sq}.`); ans.push(`Diện tích: ${fmt(round9(a * b))} ${sq}`); }
    return mk(`${what} hình chữ nhật`, 'Chu vi = (dài + rộng) × 2; Diện tích = dài × rộng', st, ans.join('; '));
  }
  if (/hình vuông/.test(t)) {
    const a = n('cạnh');
    if (a === null) return need('hình vuông', what, 'Chu vi = cạnh × 4; Diện tích = cạnh × cạnh');
    const st = [], ans = [];
    if (wantP) { st.push(`Chu vi = ${fmt(a)} × 4 = ${fmt(round9(a * 4))} ${u}.`); ans.push(`Chu vi: ${fmt(round9(a * 4))} ${u}`); }
    if (wantS) { st.push(`Diện tích = ${fmt(a)} × ${fmt(a)} = ${fmt(round9(a * a))} ${sq}.`); ans.push(`Diện tích: ${fmt(round9(a * a))} ${sq}`); }
    return mk(`${what} hình vuông`, 'Chu vi = cạnh × 4; Diện tích = cạnh × cạnh', st, ans.join('; '));
  }
  if (/hình tròn|đường tròn/.test(t)) {
    let r = n('bán kính'); const d = n('đường kính'); if (r === null && d !== null) r = d / 2;
    if (r === null) return need('hình tròn', what, 'Chu vi = bán kính × 2 × 3,14; Diện tích = bán kính × bán kính × 3,14');
    const st = [`Bán kính r = ${fmt(r)} ${u}${d !== null ? ` (vì đường kính ${fmt(d)} : 2)` : ''}.`], ans = [];
    if (wantP) { st.push(`Chu vi = ${fmt(r)} × 2 × 3,14 = ${fmt(round9(r * 2 * PI))} ${u}.`); ans.push(`Chu vi: ${fmt(round9(r * 2 * PI))} ${u}`); }
    if (wantS) { st.push(`Diện tích = ${fmt(r)} × ${fmt(r)} × 3,14 = ${fmt(round9(r * r * PI))} ${sq}.`); ans.push(`Diện tích: ${fmt(round9(r * r * PI))} ${sq}`); }
    return mk(`${what} hình tròn`, 'Chu vi = r × 2 × 3,14; Diện tích = r × r × 3,14', st, ans.join('; '));
  }
  if (/hình thang/.test(t) && wantS && !wantP) {
    const big = n('đáy lớn'), small = n('đáy bé'), h = n('(?:chiều cao|cao)');
    if (big === null || small === null || h === null) return need('hình thang', 'Diện tích', '(đáy lớn + đáy bé) × chiều cao : 2');
    return mk('Diện tích hình thang', '(đáy lớn + đáy bé) × chiều cao : 2', [`Diện tích = (${fmt(big)} + ${fmt(small)}) × ${fmt(h)} : 2 = ${fmt(round9((big + small) * h / 2))} ${sq}.`], `Diện tích: ${fmt(round9((big + small) * h / 2))} ${sq}`);
  }
  if (/tam giác/.test(t) && wantS && !wantP) {
    const a = n('đáy'), h = n('(?:chiều cao|cao)');
    if (a === null || h === null) return need('tam giác', 'Diện tích', 'đáy × chiều cao : 2');
    return mk('Diện tích tam giác', 'đáy × chiều cao : 2', [`Diện tích = ${fmt(a)} × ${fmt(h)} : 2 = ${fmt(round9(a * h / 2))} ${sq}.`], `Diện tích: ${fmt(round9(a * h / 2))} ${sq}`);
  }
  if (/hình bình hành/.test(t) && wantS && !wantP) {
    const a = n('đáy'), h = n('(?:chiều cao|cao)');
    if (a === null || h === null) return need('hình bình hành', 'Diện tích', 'đáy × chiều cao');
    return mk('Diện tích hình bình hành', 'đáy × chiều cao', [`Diện tích = ${fmt(a)} × ${fmt(h)} = ${fmt(round9(a * h))} ${sq}.`], `Diện tích: ${fmt(round9(a * h))} ${sq}`);
  }
  if (/hình thoi/.test(t) && wantS && !wantP) {
    const d = [...t.matchAll(new RegExp('đường chéo[^\\d]{0,24}?(' + NUM + ')', 'g'))].map((m) => toNum(m[1]));
    if (d.length < 2) return need('hình thoi', 'Diện tích', 'tích hai đường chéo : 2');
    return mk('Diện tích hình thoi', 'đường chéo 1 × đường chéo 2 : 2', [`Diện tích = ${fmt(d[0])} × ${fmt(d[1])} : 2 = ${fmt(round9(d[0] * d[1] / 2))} ${sq}.`], `Diện tích: ${fmt(round9(d[0] * d[1] / 2))} ${sq}`);
  }
  if (/tam giác/.test(t) && wantP) {
    const sides = [...t.matchAll(new RegExp('(' + NUM + ')\\s*(?:cm|dm|m|mm)?', 'g'))].map((m) => toNum(m[1]));
    if (sides.length === 3) return mk('Chu vi tam giác', 'cộng độ dài ba cạnh', [`Chu vi = ${sides.map(fmt).join(' + ')} = ${fmt(round9(sides.reduce((x, y) => x + y)))} ${u}.`], `Chu vi: ${fmt(round9(sides.reduce((x, y) => x + y)))} ${u}`);
    return need('tam giác', 'Chu vi', 'cộng độ dài ba cạnh');
  }
  return null;
}

/* ---------- Toán có lời văn điển hình ---------- */
const diagram = (rows) => ({ pre: rows.join('\n') });
function wordReply(text) {
  const t = text.toLowerCase().replace(/[−–]/g, '-'), N = '(' + NUM + ')';
  const sum = first(new RegExp('tổng[^\\d]{0,40}?' + N), t), diff = first(new RegExp('hiệu[^\\d]{0,40}?' + N), t);
  let ratio = null;
  const fm = /(\d+)\s*\/\s*(\d+)/.exec(t), tm = /gấp\s*(\d+(?:[.,]\d+)?)\s*lần/.exec(t);
  if (fm) ratio = [Number(fm[1]), Number(fm[2])]; else if (tm) ratio = [toNum(tm[1]), 1];
  const mk = (title, hints, solution, answer, topic) => ({ kind: 'word', title, intro: 'Đây là dạng toán quen thuộc. Mình cùng vẽ sơ đồ đoạn thẳng nhé!', hints, solution, answer, topic });
  if (sum !== null && diff !== null) {
    if (sum < diff) return { kind: 'error', title: 'Em xem lại đề nhé', intro: 'Tổng phải lớn hơn hoặc bằng hiệu. Em kiểm tra lại số liệu nhé.', hints: [], solution: [], answer: null };
    const big = round9((sum + diff) / 2), small = round9((sum - diff) / 2);
    return mk('Tìm hai số khi biết tổng và hiệu', ['Vẽ sơ đồ: số bé là một đoạn, số lớn dài hơn số bé đúng bằng hiệu.', 'Nếu bớt phần hơn đi thì hai số bằng nhau, và tổng chỉ còn bằng hai lần số bé.'],
      [diagram(['Số lớn: |——————|—hiệu—|', 'Số bé:  |——————|', `Tổng = ${fmt(sum)}, hiệu = ${fmt(diff)}`]), `Số lớn = (tổng + hiệu) : 2 = (${fmt(sum)} + ${fmt(diff)}) : 2 = ${fmt(big)}.`, `Số bé = (tổng − hiệu) : 2 = (${fmt(sum)} − ${fmt(diff)}) : 2 = ${fmt(small)}.`, `Kiểm tra: ${fmt(big)} + ${fmt(small)} = ${fmt(round9(big + small))}; ${fmt(big)} − ${fmt(small)} = ${fmt(round9(big - small))}.`], `Số lớn ${fmt(big)}, số bé ${fmt(small)}`, 'tổng hiệu');
  }
  if (sum !== null && ratio && ratio[0] > 0 && ratio[1] > 0) {
    const [a, b] = ratio, parts = a + b, one = round9(sum / parts);
    return mk('Tìm hai số khi biết tổng và tỉ số', ['Vẽ sơ đồ: mỗi số là mấy phần bằng nhau? Đếm tổng số phần.', 'Muốn tìm giá trị một phần, em lấy tổng chia cho tổng số phần.'],
      [diagram([`Số thứ nhất: ${'|—'.repeat(a)}|`, `Số thứ hai:  ${'|—'.repeat(b)}|`, `Tổng = ${fmt(sum)}`]), `Tổng số phần bằng nhau: ${a} + ${b} = ${parts} (phần).`, `Giá trị một phần: ${fmt(sum)} : ${parts} = ${fmt(one)}.`, `Số thứ nhất (${a} phần): ${fmt(one)} × ${a} = ${fmt(round9(one * a))}.`, `Số thứ hai (${b} phần): ${fmt(one)} × ${b} = ${fmt(round9(one * b))}.`], `${fmt(round9(one * a))} và ${fmt(round9(one * b))}`, 'tổng tỉ số');
  }
  if (diff !== null && ratio && ratio[0] !== ratio[1] && ratio[0] > 0 && ratio[1] > 0) {
    const [a, b] = ratio, d = Math.abs(a - b), one = round9(diff / d);
    return mk('Tìm hai số khi biết hiệu và tỉ số', ['Vẽ sơ đồ: hiệu của hai số chính là phần dài hơn, ứng với bao nhiêu phần?', 'Muốn tìm giá trị một phần, em lấy hiệu chia cho hiệu số phần.'],
      [diagram([`Số thứ nhất: ${'|—'.repeat(a)}|`, `Số thứ hai:  ${'|—'.repeat(b)}|`, `Hiệu = ${fmt(diff)}`]), `Hiệu số phần bằng nhau: ${Math.max(a, b)} − ${Math.min(a, b)} = ${d} (phần).`, `Giá trị một phần: ${fmt(diff)} : ${d} = ${fmt(one)}.`, `Số thứ nhất (${a} phần): ${fmt(one)} × ${a} = ${fmt(round9(one * a))}.`, `Số thứ hai (${b} phần): ${fmt(one)} × ${b} = ${fmt(round9(one * b))}.`], `${fmt(round9(one * a))} và ${fmt(round9(one * b))}`, 'hiệu tỉ số');
  }
  if (/trung bình cộng/.test(t)) {
    const list = nums(t.slice(t.indexOf('trung bình cộng')));
    if (list.length >= 2) {
      const s = round9(list.reduce((x, y) => x + y, 0));
      return mk('Trung bình cộng', ['Trung bình cộng của nhiều số: cộng các số lại rồi chia cho số các số hạng.', `Có ${list.length} số, em cộng chúng trước.`],
        [`Tổng các số: ${list.map(fmt).join(' + ')} = ${fmt(s)}.`, `Có ${list.length} số, nên trung bình cộng = ${fmt(s)} : ${list.length} = ${fmt(round9(s / list.length))}.`], fmt(round9(s / list.length)), 'trung bình cộng');
    }
  }
  const pm = new RegExp(N + '\\s*%\\s*(?:của|số)?[^\\d]{0,12}?' + N).exec(t);
  if (pm && /của|số|tính/.test(t) && !/bao nhiêu phần trăm/.test(t)) {
    const p = toNum(pm[1]), y = toNum(pm[2]), one = round9(y / 100);
    return mk(`Tìm ${fmt(p)}% của ${fmt(y)}`, ['1% của một số là số đó chia cho 100.', 'Rồi nhân với số phần trăm cần tìm.'], [`1% của ${fmt(y)} là ${fmt(y)} : 100 = ${fmt(one)}.`, `${fmt(p)}% của ${fmt(y)} là ${fmt(one)} × ${fmt(p)} = ${fmt(round9(one * p))}.`, 'Cách khác: lấy số đó nhân với số phần trăm rồi chia cho 100.'], fmt(round9(one * p)), 'tỉ số phần trăm');
  }
  const rm = new RegExp('tỉ số phần trăm[^\\d]{0,20}?' + N + '[^\\d]{1,16}?' + N).exec(t) || new RegExp('bao nhiêu phần trăm[^\\d]{0,40}?' + N + '[^\\d]{1,24}?' + N).exec(t);
  if (rm) {
    const a = toNum(rm[1]), b = toNum(rm[2]);
    if (b !== 0) return mk(`Tỉ số phần trăm của ${fmt(a)} và ${fmt(b)}`, ['Tìm thương của hai số, rồi nhân với 100 và viết thêm kí hiệu %.', `Chia ${fmt(a)} cho ${fmt(b)} trước.`], [`${fmt(a)} : ${fmt(b)} = ${fmt(round9(a / b))}.`, `${fmt(round9(a / b))} × 100 = ${fmt(round9(a / b * 100))}.`], `${fmt(round9(a / b * 100))}%`, 'tỉ số phần trăm');
  }
  return null;
}

/* ---------- Đổi đơn vị, bảng nhân ---------- */
const LADDER = [['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], ['tấn', 'tạ', 'yến', 'kg', 'hg', 'dag', 'g']];
const TIME = { giây: 1, phút: 60, giờ: 3600, ngày: 86400, tuần: 604800 };
function unitReply(text) {
  const t = text.toLowerCase();
  const all = [...LADDER[0], ...LADDER[1], ...Object.keys(TIME)].sort((a, b) => b.length - a.length).join('|');
  const m = new RegExp('(' + NUM + ')\\s*(' + all + ')\\s*(?:=|ra|sang|thành|bằng|đổi ra)\\s*\\??\\s*(' + all + ')(?![\\p{L}])', 'u').exec(t);
  if (!m) return null;
  const v = toNum(m[1]), from = m[2], to = m[3];
  const lad = LADDER.find((l) => l.includes(from) && l.includes(to));
  if (lad) {
    const i = lad.indexOf(from), j = lad.indexOf(to), k = j - i;
    const res = k >= 0 ? round9(v * 10 ** k) : round9(v / 10 ** -k);
    const path = lad.slice(Math.min(i, j), Math.max(i, j) + 1);
    return { kind: 'unit', title: `Đổi ${fmt(v)} ${from} ra ${to}`, intro: 'Mình cùng đếm số bậc trên “cầu thang” đơn vị nhé!', hints: [`Hai đơn vị liền nhau hơn kém nhau 10 lần. Từ ${from} đến ${to} em đi mấy bậc?`, k >= 0 ? 'Đi sang đơn vị bé hơn thì nhân với 10 cho mỗi bậc.' : 'Đi sang đơn vị lớn hơn thì chia cho 10 cho mỗi bậc.'],
      solution: [{ pre: lad.join(' → ') }, `Từ ${from} đến ${to} là ${Math.abs(k)} bậc: ${path.join(' → ')}.`, k === 0 ? 'Cùng một đơn vị nên không đổi.' : k > 0 ? `Mỗi bậc nhân 10, nên nhân ${fmt(10 ** k)}: ${fmt(v)} × ${fmt(10 ** k)} = ${fmt(res)}.` : `Mỗi bậc chia 10, nên chia ${fmt(10 ** -k)}: ${fmt(v)} : ${fmt(10 ** -k)} = ${fmt(res)}.`], answer: `${fmt(v)} ${from} = ${fmt(res)} ${to}`, topic: 'đổi đơn vị đo' };
  }
  if (TIME[from] && TIME[to]) {
    const res = round9(v * TIME[from] / TIME[to]);
    return { kind: 'unit', title: `Đổi ${fmt(v)} ${from} ra ${to}`, intro: 'Em nhớ các mối quan hệ về thời gian nhé!', hints: ['1 giờ = 60 phút; 1 phút = 60 giây; 1 ngày = 24 giờ; 1 tuần = 7 ngày.'], solution: [`1 ${from} = ${fmt(round9(TIME[from] / TIME[to]))} ${to}.`, `${fmt(v)} × ${fmt(round9(TIME[from] / TIME[to]))} = ${fmt(res)}.`], answer: `${fmt(v)} ${from} = ${fmt(res)} ${to}`, topic: 'đổi đơn vị thời gian' };
  }
  return null;
}
function tableReply(text) {
  const m = /(?:bảng|học)\s*(?:nhân|cửu chương)\s*(\d{1,2})\b/i.exec(text) || /bảng\s*(\d{1,2})\b/i.exec(text);
  if (!m) return null;
  const n = Number(m[1]); if (n < 1 || n > 12) return null;
  const rows = Array.from({ length: 10 }, (_, i) => `${n} × ${i + 1} = ${n * (i + 1)}`);
  const tips = { 2: 'Nhân 2 là gấp đôi: 2 × 6 = 6 + 6.', 5: 'Kết quả bảng 5 luôn tận cùng bằng 0 hoặc 5.', 9: 'Bảng 9: tổng các chữ số của kết quả luôn bằng 9 (9 × 3 = 27, 2 + 7 = 9).', 10: 'Nhân 10: viết thêm một chữ số 0 vào bên phải.', 11: 'Nhân 11 với số có một chữ số: lặp lại chữ số đó (11 × 4 = 44).' };
  return { kind: 'table', title: `Bảng nhân ${n}`, intro: tips[n] || `Bảng nhân ${n}: mỗi dòng hơn dòng trước ${n} đơn vị. Em đọc to rồi che kết quả để tự đố mình nhé!`, hints: [], solution: [{ pre: rows.join('\n') }], answer: null, topic: 'bảng nhân' };
}

/* ---------- Hướng dẫn chung ---------- */
const METHOD = ['Bước 1 – Đọc kĩ đề: bài cho biết gì? bài hỏi gì? Gạch chân số liệu và câu hỏi.', 'Bước 2 – Tóm tắt đề bằng lời ngắn gọn hoặc vẽ sơ đồ đoạn thẳng.', 'Bước 3 – Chọn phép tính: “thêm, tất cả, tổng” thường là cộng; “bớt, còn lại, ít hơn” thường là trừ; “mỗi, gấp” thường là nhân; “chia đều, chia thành” thường là chia.', 'Bước 4 – Viết lời giải, phép tính và đáp số (có đơn vị).', 'Bước 5 – Kiểm tra: đáp số có hợp lí không? Thử lại bằng phép tính ngược.'];
function methodReply() { return { kind: 'method', title: '5 bước giải toán có lời văn', intro: 'Em làm theo từng bước này với mọi bài toán nhé. Em gõ đề bài vào đây, mình sẽ cùng phân tích!', hints: [], solution: METHOD, answer: null, topic: 'giải toán có lời văn' }; }
const OPWORDS = [[/thêm|tất cả|cả hai|tổng|cộng|gộp|nhiều hơn/, 'cộng (hoặc trừ nếu hỏi “nhiều hơn bao nhiêu”)'], [/bớt|còn lại|ít hơn|cho đi|bán đi|ăn mất|lấy đi/, 'trừ'], [/mỗi|gấp|mỗi .* có|lần/, 'nhân'], [/chia đều|chia thành|chia cho|mỗi .* được/, 'chia']];
function genericWord(text) {
  const sentences = text.split(/(?<=[.?!])\s+/).map((s) => s.trim()).filter(Boolean);
  const q = [...sentences].reverse().find((s) => /\?|hỏi|tính|tìm|bao nhiêu/i.test(s)) || sentences[sentences.length - 1];
  const given = nums(text);
  const ops = OPWORDS.filter(([re]) => re.test(text.toLowerCase())).map(([, o]) => o);
  return { kind: 'word', title: 'Cùng phân tích bài toán', intro: 'Mình chưa tự giải được dạng này, nhưng mình giúp em hiểu đề và chọn phép tính nhé!',
    hints: [`Đề hỏi: “${q}”. Em tìm xem cần tìm cái gì.`, given.length ? `Các số trong đề: ${given.map(fmt).join('; ')}. Em xem mỗi số nói về cái gì (đơn vị gì).` : 'Em tìm các số và đơn vị trong đề.', ops.length ? `Từ khóa trong đề gợi ý phép: ${ops.join('; ')}. Em suy nghĩ xem có hợp lí không.` : 'Em thử vẽ sơ đồ đoạn thẳng để thấy các số liên hệ với nhau thế nào.'],
    solution: METHOD, answer: null, topic: 'toán có lời văn' };
}

export function tutorReply(raw) {
  const text = String(raw || '').trim();
  if (!text) return null;
  const low = text.toLowerCase();
  if (/^(xin )?chào|^(hello|hi|alo)(?![\p{L}])/u.test(low)) return { kind: 'chat', title: 'Chào em!', intro: 'Mình là Robot Gia Sư. Em gõ một phép tính, bài toán, hoặc hỏi “bảng nhân 7”, “đổi 3 m ra cm”… mình sẽ gợi ý từng bước để em tự làm nhé.', hints: [], solution: [], answer: null };
  if (/cảm ơn|cám ơn/.test(low)) return { kind: 'chat', title: 'Không có gì!', intro: 'Em học chăm quá! Cứ hỏi mình khi cần nhé.', hints: [], solution: [], answer: null };
  if (/(cách|làm sao|hướng dẫn).{0,25}(toán đố|lời văn|giải toán)|toán có lời văn$|^giải toán$/.test(low)) return methodReply();
  return tableReply(text) || unitReply(text) || geometryReply(text) || wordReply(text) || fractionReply(text) || ((a) => (a ? arithmeticReply(a.tokens, a.given) : null))(arith(text)) || (/\d/.test(text) && text.length > 45 ? genericWord(text) : null);
}

/** Điểm gợi ý bài học cho posts.json: ưu tiên tiểu học. */
export function suggestLessons(posts, query, limit = 3) {
  const strip = (s) => s.toLowerCase().normalize('NFC');
  const words = strip(query).split(/[^\p{L}\d]+/u).filter((w) => w.length >= 2 && !/^\d+$/.test(w));
  if (!words.length) return [];
  return posts.filter((p) => Number(p.grade) >= 1 && Number(p.grade) <= 5).map((p) => {
    const hay = strip(`${p.title} ${(p.tags || []).join(' ')} ${p.description || ''}`);
    let score = 0; for (const w of words) if (hay.includes(w)) score += strip(p.title).includes(w) ? 3 : 1;
    return { p, score };
  }).filter((x) => x.score > 0).sort((a, b) => b.score - a.score || b.p.date.localeCompare(a.p.date)).slice(0, limit).map((x) => x.p);
}
