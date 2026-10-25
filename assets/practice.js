/* credit: giasu.ai.vn */
/* Trang Luyện tập: sinh bài từ thư viện worksheet, làm và chấm trực tiếp trên web, in/tải phiếu PDF. */
import {buildExercises,countItems,sameAnswer,sameLoose,parseTex,makeChoices,isLongAnswer} from './practice-core.js?v=be95332ce618';

const SUBJECTS = ['math', 'vi', 'en', 'zh', 'ja'];
const LOOSE = new Set(['zh', 'ja']);              // pinyin/romaji: không bắt buộc dấu thanh, chấp nhận nhiều cách đọc
const SIZE_LABEL = {short: 'Ít (khoảng 3 câu mỗi bài)', normal: 'Vừa', long: 'Nhiều'};
const BASE = new URL('../assets/worksheet/', import.meta.url).href.replace(/\/$/, '');
const picUrl = id => `${BASE}/emoji-svg/${id}.svg`;

function init(app) {
  const W = window.Worksheet, katex = window.katex;
  const $ = sel => app.querySelector(sel);
  const form = $('[data-controls]'), sheetEl = $('[data-sheet]'), printEl = $('[data-print-sheet]'), summaryEl = $('[data-summary]'), topicsEl = $('[data-topics]');
  if (!W || !katex) { sheetEl.textContent = 'Không tải được thư viện tạo bài. Hãy tải lại trang.'; return; }
  const compileUrl = app.dataset.compileUrl || '';

  const buildOpts = (extra = {}) => ({katex, picUrl, alts: LOOSE.has(cfg.subject), sans: true, ...extra});   // công thức không chân, như các bài học
  const matches = (item, expected, given) => item.alts || LOOSE.has(cfg.subject) ? sameLoose(expected, given) : sameAnswer(expected, given);
  const cfg = {subject: 'math', grade: 3, level: 0, size: 'normal', topics: null, seed: 1, mode: 'sheet'};
  const supportCache = new Map();
  let current = null;                                   // {result, exercises, skipped}

  // ---------- chọn dạng bài ----------
  const webTopics = (subject, grade) => {               // các dạng bài có thể làm trực tiếp trên web
    const key = subject + grade;
    if (!supportCache.has(key)) {
      const list = [];
      for (const topic of W.topicsFor(subject, grade, 'color')) {
        try {
          const result = W.generate({subject, grade, topics: [topic.id], seed: 11, answers: false, color: 'color'});
          const {exercises} = buildExercises(result.sheets[0], buildOpts());
          if (countItems(exercises)) list.push(topic);
        } catch { /* dạng bài không dựng được thì bỏ qua */ }
      }
      supportCache.set(key, list);
    }
    return supportCache.get(key);
  };
  const defaultTopicIds = (subject, grade) => {
    const web = webTopics(subject, grade), defaults = new Set(W.defaultTopics(subject, grade, 'color'));
    const chosen = web.filter(t => defaults.has(t.id)).map(t => t.id);
    return chosen.length ? chosen : web.slice(0, 4).map(t => t.id);
  };

  // ---------- điều khiển ----------
  const field = name => form.elements[name];
  function fillControls() {
    field('subject').replaceChildren(...SUBJECTS.map(id => new Option(W.SUBJECTS[id].name, id)));
    field('size').replaceChildren(...Object.entries(SIZE_LABEL).map(([v, l]) => new Option(l, v)));
  }
  function syncControls() {
    const subject = W.SUBJECTS[cfg.subject];
    field('subject').value = cfg.subject;
    field('grade').replaceChildren(...subject.grades.map(g => new Option('Lớp ' + g, g)));
    if (!subject.grades.includes(cfg.grade)) cfg.grade = subject.grades[0];
    field('grade').value = String(cfg.grade);
    field('level').replaceChildren(...[0, 1].map(l => new Option(subject.levelLabel ? subject.levelLabel(cfg.grade, l) : l ? 'Nâng cao' : 'Cơ bản', l)));
    field('level').value = String(cfg.level);
    field('size').value = cfg.size;
    const web = webTopics(cfg.subject, cfg.grade);
    if (!cfg.topics) cfg.topics = defaultTopicIds(cfg.subject, cfg.grade);
    cfg.topics = cfg.topics.filter(id => web.some(t => t.id === id));
    topicsEl.replaceChildren(...web.map(topic => {
      const label = document.createElement('label'), input = document.createElement('input');
      input.type = 'checkbox'; input.value = topic.id; input.checked = cfg.topics.includes(topic.id);
      label.append(input, ' ', topic.name);
      return label;
    }));
    syncPdfButton?.();
    $('[data-topic-count]').textContent = `${web.length} dạng bài làm được trên web`;
  }
  const readTopics = () => [...topicsEl.querySelectorAll('input:checked')].map(i => i.value);

  // ---------- liên kết chia sẻ: cùng liên kết ra cùng một bài ----------
  const writeHash = () => {
    const p = new URLSearchParams({s: cfg.subject, g: cfg.grade, l: cfg.level, n: cfg.size, seed: cfg.seed, t: cfg.topics.join(','), m: cfg.mode});
    try { history.replaceState(null, '', '#' + p); } catch { /* bỏ qua */ }
  };
  const readHash = () => {
    const p = new URLSearchParams(location.hash.slice(1));
    if (SUBJECTS.includes(p.get('s'))) cfg.subject = p.get('s');
    const g = Number(p.get('g')); if (W.SUBJECTS[cfg.subject].grades.includes(g)) cfg.grade = g;
    if (p.get('l') === '1') cfg.level = 1;
    if (SIZE_LABEL[p.get('n')]) cfg.size = p.get('n');
    const seed = Number(p.get('seed')); if (Number.isInteger(seed) && seed > 0) cfg.seed = seed;
    cfg.mode = p.get('m') === 'game' || p.get('m') === 'sheet' ? p.get('m') : (app.dataset.defaultMode === 'game' ? 'game' : 'sheet');
    if (p.get('t')) cfg.topics = p.get('t').split(',').filter(Boolean);
  };

  // ---------- dựng bài ----------
  const options = (extra = {}) => ({subject: cfg.subject, grade: cfg.grade, level: cfg.level, size: cfg.size, topics: cfg.topics, seed: cfg.seed, color: 'color', ...extra});

  function generate() {
    if (!cfg.topics.length) { current = null; sheetEl.innerHTML = '<p class="pg-empty">Hãy chọn ít nhất một dạng bài.</p>'; summaryEl.textContent = ''; return; }
    const result = W.generate(options({answers: false}));
    const {exercises, skipped} = buildExercises(result.sheets[0], buildOpts());
    current = {result, exercises, skipped};
    writeHash();
    renderSheet();
  }

  const NUMERIC = /^-?\d+(?:[.,]\d+)?$/;
  const blankHtml = (blank, label, expected = '') => {
    if (blank.kind === 'choice') return `<select class="pg-input pg-choice" aria-label="${label}"><option value="">…</option>${blank.options.map(o => `<option>${o}</option>`).join('')}</select>`;
    return `<input class="pg-input${blank.wide ? ' pg-wide' : ''}" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" inputmode="${NUMERIC.test(String(expected).replace(/\s+/g, '')) ? 'decimal' : 'text'}" enterkeyhint="done" aria-label="${label}">`;
  };

  function itemHtml(item, number) {
    let k = 0;
    let html = item.parts.map(p => p.html != null ? p.html : blankHtml(p.blank, `Câu ${number}, ô ${++k}`, item.expected?.[k - 1])).join('');
    if (item.extra) html += `<div class="pg-answerrow"><span class="pg-extra">${(item.extra.prefix || 'Đáp số:').replace(/^([A-Za-z])( =)/, '<i>$1</i>$2')}</span>${blankHtml({kind: 'text'}, `Câu ${number}, đáp số`, item.expected?.[0])}</div>`;
    if (item.mode === 'choice') html += `<div class="pg-choices" role="radiogroup">${item.options.map((o, i) => `<label class="pg-ch"><input type="radio" name="ch-${number}-${Math.random().toString(36).slice(2, 6)}" value="${i}"><span><b>${'ABCD'[i]}.</b> ${o}</span></label>`).join('')}</div>`;
    if (item.mode === 'self') html += '<div class="pg-self"><input class="pg-note" type="text" placeholder="Ghi kết quả của em…" autocomplete="off" aria-label="Kết quả của em"> <button type="button" class="pg-reveal">Xem đáp án</button></div>';
    return html;
  }

  function renderSheet() {
    const {exercises} = current;
    sheetEl.replaceChildren();
    exercises.forEach((ex, i) => {
      const section = document.createElement('section');
      section.className = 'pg-block';
      section.innerHTML = `<h2 class="pg-instr"><span class="pg-num">${i + 1}</span><span>${ex.instrHtml}</span></h2><ol class="pg-items pg-cols-${ex.cols}">${ex.items.map((item, j) => `<li class="pg-item" data-block="${i}" data-item="${j}"><div class="pg-q">${itemHtml(item, j + 1)}</div><span class="pg-mark" aria-live="polite"></span><div class="pg-answer" hidden>Đáp án: <span>${item.answerHtml}</span></div></li>`).join('')}</ol>`;
      sheetEl.append(section);
    });
    summaryEl.textContent = `${countItems(exercises)} câu · tự chấm được ${exercises.flatMap(e => e.items).filter(i => i.mode !== 'self').length} câu`;
    $('[data-skipped]').hidden = !current.skipped.length || cfg.mode === 'game';
    updateProgress();
  }

  // ---------- chấm bài ----------
  const itemOf = li => current.exercises[li.dataset.block].items[li.dataset.item];
  const inputsOf = li => [...li.querySelectorAll('.pg-q .pg-input')].filter(el => !el.classList.contains('pg-note'));
  const mark = (li, state, text) => { li.dataset.state = state; li.querySelector('.pg-mark').textContent = text; };

  function checkItem(li, reveal) {
    const item = itemOf(li), box = li.querySelector('.pg-answer');
    if (item.mode === 'self') {
      if (reveal) box.hidden = false;
      return li.dataset.state === 'right' ? 1 : 0;
    }
    if (item.mode === 'choice') {
      const picked = li.querySelector('.pg-ch input:checked');
      if (!picked) { mark(li, reveal ? 'wrong' : '', reveal ? '✗ Chưa chọn' : ''); if (reveal) box.hidden = false; return 0; }
      const ok = Number(picked.value) === item.correct;
      mark(li, ok ? 'right' : 'wrong', ok ? '✓ Đúng' : '✗ Chưa đúng');
      box.hidden = ok || !reveal;
      return ok ? 1 : 0;
    }
    const inputs = inputsOf(li);
    const filled = inputs.some(el => el.value.trim());
    if (!filled) { mark(li, reveal ? 'wrong' : '', reveal ? '✗ Chưa làm' : ''); if (reveal) box.hidden = false; return 0; }
    const right = inputs.every((el, i) => matches(item, item.expected[i], el.value));
    mark(li, right ? 'right' : 'wrong', right ? '✓ Đúng' : '✗ Chưa đúng');
    box.hidden = right || !reveal;
    return right ? 1 : 0;
  }

  function updateProgress() {
    const lis = [...sheetEl.querySelectorAll('.pg-item')];
    const right = lis.filter(li => li.dataset.state === 'right').length;
    $('[data-progress]').textContent = lis.length ? `Đúng ${right}/${lis.length} câu` : '';
  }

  function gradeAll(reveal) {
    sheetEl.querySelectorAll('.pg-item').forEach(li => checkItem(li, reveal));
    updateProgress();
    const lis = [...sheetEl.querySelectorAll('.pg-item')], right = lis.filter(li => li.dataset.state === 'right').length;
    $('[data-result]').textContent = reveal ? `Kết quả: ${right}/${lis.length} câu đúng. Các câu chưa đúng đã hiện đáp án; câu "Xem đáp án" em tự đối chiếu và bấm Đúng/Chưa đúng.` : '';
    $('[data-result]').hidden = !reveal;
  }

  sheetEl.addEventListener('keydown', event => {
    if (event.key !== 'Enter' || !event.target.matches('.pg-input')) return;
    event.preventDefault();
    const li = event.target.closest('.pg-item');
    if (itemOf(li).mode === 'auto') { checkItem(li, false); updateProgress(); }
    const all = [...sheetEl.querySelectorAll('.pg-q .pg-input:not(.pg-note)')], next = all[all.indexOf(event.target) + 1];
    if (next) next.focus();
  });
  sheetEl.addEventListener('change', event => {
    const li = event.target.closest('.pg-item');
    if (li && event.target.matches('select.pg-input, .pg-ch input')) { checkItem(li, false); updateProgress(); }
  });
  sheetEl.addEventListener('input', event => {
    const li = event.target.closest('.pg-item');
    if (li && itemOf(li).mode !== 'self' && li.dataset.state) { mark(li, '', ''); li.querySelector('.pg-answer').hidden = true; updateProgress(); }
  });
  sheetEl.addEventListener('click', event => {
    const button = event.target.closest('.pg-reveal');
    if (!button) return;
    const li = button.closest('.pg-item');
    li.querySelector('.pg-answer').hidden = false;
    if (!li.querySelector('.pg-judge')) {
      const judge = document.createElement('span');
      judge.className = 'pg-judge';
      judge.innerHTML = '<button type="button" data-judge="right">Em làm đúng</button> <button type="button" data-judge="wrong">Chưa đúng</button>';
      li.querySelector('.pg-answer').after(judge);
    }
  });
  sheetEl.addEventListener('click', event => {
    const button = event.target.closest('[data-judge]');
    if (!button) return;
    const li = button.closest('.pg-item'), right = button.dataset.judge === 'right';
    mark(li, right ? 'right' : 'wrong', right ? '✓ Em tự chấm: đúng' : '✗ Em tự chấm: chưa đúng');
    updateProgress();
  });

  function clearAnswers() {
    sheetEl.querySelectorAll('.pg-item').forEach(li => {
      li.dataset.state = ''; li.querySelector('.pg-mark').textContent = '';
      li.querySelector('.pg-answer').hidden = true; li.querySelector('.pg-judge')?.remove();
      li.querySelectorAll('.pg-input').forEach(el => { el.value = ''; });
      li.querySelectorAll('.pg-ch input').forEach(el => { el.checked = false; });
    });
    $('[data-result]').hidden = true;
    updateProgress();
  }

  // ---------- phiếu in / PDF ----------
  const lineHtml = (blank, wide) => blank.kind === 'choice' ? '<span class="pg-box"></span>' : `<span class="pg-line${wide || blank.wide ? ' pg-line-wide' : ''}"></span>`;
  function printHtml(withAnswers) {
    const {exercises, result} = current, subject = W.SUBJECTS[cfg.subject];
    const level = subject.levelLabel ? subject.levelLabel(cfg.grade, cfg.level) : `Lớp ${cfg.grade}`;
    const usesPictures = result.emoji.length > 0;
    const blocks = exercises.map((ex, i) => `<section class="ps-block"><h2><span class="ps-num">${i + 1}</span> ${ex.instrHtml}</h2><ol class="ps-items ps-cols-${ex.cols}">${ex.items.map(item => {
      let html = item.parts.map(p => p.html != null ? p.html.replace(/ loading="lazy"/g, '') : lineHtml(p.blank)).join('');
      if (item.extra) html += `<div class="ps-answerrow">${(item.extra.prefix || 'Đáp số:').replace(/^([A-Za-z])( =)/, '<i>$1</i>$2')} ${lineHtml({kind: 'text'})}</div>`;
      if (item.mode === 'choice') html += `<div class="ps-choices">${item.options.map((o, i) => `<span><b>${'ABCD'[i]}.</b> ${o}</span>`).join('')}</div>`;
      if (item.mode === 'self') html += '<span class="ps-work"></span>';
      return `<li>${html}</li>`;
    }).join('')}</ol></section>`).join('');
    const key = withAnswers ? `<section class="ps-key"><h2>Đáp án</h2>${exercises.map((ex, i) => `<p><b>Bài ${i + 1}.</b> ${ex.items.map((item, j) => `${j + 1}) ${item.answerHtml}`).join(' &nbsp; ')}</p>`).join('')}</section>` : '';
    return `<header class="ps-head"><h1>PHIẾU BÀI TẬP ${subject.title.toUpperCase()}</h1><p>${level}</p><p class="ps-who">Họ và tên: <span class="pg-line pg-line-wide"></span> Lớp: <span class="pg-line"></span> Ngày: <span class="pg-line"></span></p></header>${blocks}${key}<footer class="ps-foot">Gia sư thông minh · https://giasu.ai.vn${usesPictures ? ' · Hình minh hoạ: Twemoji (CC-BY 4.0)' : ''}</footer>`;
  }
  async function printSheet(withAnswers) {
    if (!current) return;
    printEl.innerHTML = printHtml(withAnswers);
    await Promise.all([...printEl.querySelectorAll('img')].map(img => img.decode().catch(() => {})));
    document.body.classList.add('pg-printing');
    const done = () => { document.body.classList.remove('pg-printing'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    window.print();
  }

  // ---------- tệp LaTeX và PDF LaTeX ----------
  const download = (blob, name) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  };
  const fullResult = () => W.generate(options({answers: true}));
  const status = text => { $('[data-export-status]').textContent = text; };
  async function compilePdf() {
    status('Đang dựng PDF bằng LaTeX…');
    try {
      const result = fullResult();
      const assets = await window.WorksheetAssets.build(result, {assetsBase: BASE});
      const res = await fetch(compileUrl, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({tex: result.tex, assets})});
      if (!res.ok) throw new Error(await res.text());
      download(await res.blob(), result.filename.replace(/\.tex$/, '.pdf'));
      status('Đã tải PDF.');
    } catch (error) { status('Không dựng được PDF: ' + (error.message || error)); }
  }



  // ---------- âm thanh (tổng hợp bằng Web Audio, không cần tệp) ----------
  let audio = null, muted = false;
  try { muted = localStorage.getItem('giasu-game-muted') === '1'; } catch { /* bỏ qua */ }
  const audioCtx = () => {
    if (!audio) { const Ctx = window.AudioContext || window.webkitAudioContext; if (Ctx) audio = new Ctx(); }
    if (audio?.state === 'suspended') audio.resume();
    return audio;
  };
  function tone(freq, start, length, {type = 'sine', gain = 0.16, slide = 0} = {}) {
    const ctx = audioCtx();
    if (!ctx || muted) return;
    const osc = ctx.createOscillator(), amp = ctx.createGain(), t0 = ctx.currentTime + start;
    osc.type = type; osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + length);
    amp.gain.setValueAtTime(0.0001, t0); amp.gain.exponentialRampToValueAtTime(gain, t0 + 0.02); amp.gain.exponentialRampToValueAtTime(0.0001, t0 + length);
    osc.connect(amp).connect(ctx.destination); osc.start(t0); osc.stop(t0 + length + 0.05);
  }
  const SOUND = {
    start: () => [523, 659, 784].forEach((f, i) => tone(f, i * 0.09, 0.18, {type: 'triangle'})),
    right: () => [659, 880, 1175].forEach((f, i) => tone(f, i * 0.07, 0.22, {type: 'triangle', gain: 0.2})),
    wrong: () => { tone(220, 0, 0.28, {type: 'sawtooth', gain: 0.12, slide: -90}); tone(165, 0.12, 0.3, {type: 'sawtooth', gain: 0.1, slide: -60}); },
    timeout: () => [440, 330, 247].forEach((f, i) => tone(f, i * 0.12, 0.2, {type: 'square', gain: 0.07})),
    tick: () => tone(1000, 0, 0.06, {type: 'square', gain: 0.05}),
    win: () => [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.11, 0.26, {type: 'triangle', gain: 0.2})),
    pop: () => tone(740, 0, 0.08, {type: 'sine', gain: 0.1}),
    whoosh: () => tone(260, 0.05, 0.7, {type: 'sawtooth', gain: 0.06, slide: 1400})
  };
  const play = name => { try { SOUND[name]?.(); } catch { /* âm thanh không bắt buộc */ } };

  // ---------- Game mode ----------
  const LEVELS = {easy: {label: 'Dễ', base: 40, step: 8, min: 15}, normal: {label: 'Vừa', base: 25, step: 6, min: 10}, hard: {label: 'Khó', base: 12, step: 4, min: 6}};
  const ROUND = 10;
  const MASCOTS = ['1f43c', '1f98a', '1f981', '1f430', '1f431', '1f438', '1f428', '1f427', '1f42f', '1f434'];
  const PRAISE = ['Giỏi quá!', 'Tuyệt vời!', 'Chính xác!', 'Siêu đẳng!', 'Quá đỉnh!', 'Hoan hô!'];
  const emoji = cp => `${BASE}/emoji-svg/${cp}.svg`;
  const gameEl = $('[data-game]');
  const g = sel => gameEl.querySelector(sel);
  const game = {state: null, timer: 0, advance: 0};
  app.pgGame = game;                                      // để kiểm thử trong trình duyệt
  const bestKey = () => `giasu-game-best:${cfg.subject}${cfg.grade}:${gameLevel()}`;
  const gameLevel = () => gameEl.querySelector('[name=gamelevel]:checked').value;
  const readBest = () => { try { return Number(localStorage.getItem(bestKey())) || 0; } catch { return 0; } };
  const writeBest = score => { try { localStorage.setItem(bestKey(), String(score)); } catch { /* bỏ qua */ } };
  // Bàn phím ảo che màn hình: đo vùng nhìn thấy (visualViewport) để lớp phủ game chỉ nằm trong phần chưa bị che, và gọn lại khi bàn phím mở.
  const vv = window.visualViewport;
  function fitViewport() {
    const root = document.documentElement.style;
    if (!vv || !gameEl.classList.contains('pg-overlay')) { root.removeProperty('--pg-vvh'); root.removeProperty('--pg-vvt'); gameEl.classList.remove('pg-kbd'); return; }
    root.setProperty('--pg-vvh', vv.height + 'px');
    root.setProperty('--pg-vvt', vv.offsetTop + 'px');
    gameEl.classList.toggle('pg-kbd', vv.height < window.innerHeight * 0.78);
  }
  vv?.addEventListener('resize', fitViewport);
  vv?.addEventListener('scroll', fitViewport);
  const showPanel = name => {
    for (const part of ['start', 'play', 'end']) g(`[data-game-${part}]`).hidden = part !== name;
    const overlay = name !== 'start';
    gameEl.classList.toggle('pg-overlay', overlay);
    document.body.classList.toggle('pg-game-open', overlay);
    fitViewport();
    if (!overlay) clearTimeout(game.advance);
  };
  const shuffle = list => { const a = [...list]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const secondsFor = (q, level) => Math.max(level.min, Math.round((level.base + level.step * ((q.blanks || 1) - 1)) * (q.kind === 'mc' ? 0.8 : 1)));
  const refreshBest = () => { const best = readBest(); g('[data-game-best]').textContent = best ? `Điểm cao nhất của em ở mức này: ${best}` : 'Chưa có điểm cao nhất ở mức này.'; };

  const escHtml = v => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const optionHtml = values => values.map(v => {
    const f = /^(\d+)\/(\d+)$/.exec(v);
    return f ? katex.renderToString(`\\mathsf{\\dfrac{${f[1]}}{${f[2]}}}`, {throwOnError: false}) : escHtml(v);
  }).join('<span class="pg-sep"> · </span>');
  const gameType = () => gameEl.querySelector('[name=gametype]:checked').value;

  function gamePool() {
    const mode = gameType(), seed = 1 + Math.floor(Math.random() * 99999), opts = buildOpts({sans: true});
    const result = W.generate(options({size: 'long', seed, answers: false}));
    const {exercises} = buildExercises(result.sheets[0], opts);
    const pool = [], roll = () => Math.random();
    for (const ex of exercises) {
      const sibling = i => ex.items.map(it => it.expected?.[i]).filter(Boolean);
      for (const item of ex.items) {
        if (item.mode === 'choice') {                         // "khoanh chữ đúng": thành câu trắc nghiệm
          if (mode !== 'type') pool.push({kind: 'mc', instrHtml: ex.instrHtml, parts: item.parts, blanks: 1, expected: item.expected, options: item.options, correct: item.correct});
          continue;
        }
        if (item.mode !== 'auto') continue;
        const long = isLongAnswer(item.expected) && !item.alts;
        // đáp án nhiễu chỉ lấy từ chính câu hỏi (các từ/số được liệt kê, gợi ý a / b); câu có hình thì lấy thêm tên các hình cùng dạng bài
        const extras = item.expected.map((_, i) => [...item.hint, ...item.candidates, ...((item.pic || item.glyph) && !long ? sibling(i) : [])]);
        const choices = makeChoices(item.expected, extras, Math.random, 4, item.caseOnly ? 'case' : '');
        let kind = null;
        if (mode === 'mc') kind = choices ? 'mc' : null;
        else if (long) kind = item.tiles ? 'tiles' : (choices ? 'mc' : null);
        else if (item.tiles?.numeric) kind = mode === 'mix' && roll() < 0.5 ? 'tiles' : 'type';
        else if (mode === 'mix' && choices && roll() < 0.3) kind = 'mc';
        else kind = 'type';
        if (!kind) continue;
        pool.push({kind, instrHtml: ex.instrHtml, parts: item.parts, extra: item.extra, blanks: kind === 'tiles' ? Math.ceil(item.tiles.tokens.length / 2) : item.blanks, expected: item.expected, tiles: item.tiles, alts: item.alts,
          options: kind === 'mc' ? choices.options.map(optionHtml) : null, correct: kind === 'mc' ? choices.correct : -1});
      }
    }
    const matches = [];                                       // nối cặp: hình/phép tính ở bên trái, đáp án ở bên phải
    for (const ex of exercises) {
      const usable = [];
      for (const item of ex.items) {
        const blank = item.parts.find(p => p.blank);
        if (item.mode !== 'auto' || item.blanks !== 1 || item.extra || blank?.blank.kind !== 'text') continue;
        const right = item.expected[0];
        if (!right || right.length > 14 || isLongAnswer(item.expected) || usable.some(u => u.right.toLowerCase() === right.toLowerCase())) continue;
        const hasPic = item.parts.some(p => p.html && p.html.includes('pg-pic'));
        const left = item.parts.map(p => p.html != null ? p.html : hasPic ? '' : '<span class="pg-gap">?</span>').join('');
        if (!/pg-pic|katex/.test(left)) continue;
        const probe = document.createElement('div');                       // vế trái phải gọn: tối đa 3 hình và một dòng ngắn
        probe.innerHTML = left;
        probe.querySelectorAll('.katex-mathml').forEach(e => e.remove());
        const pics = probe.querySelectorAll('img').length;
        probe.querySelectorAll('img').forEach(e => e.remove());
        if (pics > 3 || probe.textContent.trim().length > 22) continue;
        usable.push({left, right});
      }
      const rest = shuffle(usable);
      while (rest.length >= 4) {                             // mỗi lượt nối 4–5 cặp
        const take = rest.length >= 9 || rest.length === 5 ? 5 : 4, pairs = rest.splice(0, take);
        matches.push({kind: 'match', instrHtml: 'Nối mỗi ô với đáp án đúng:', blanks: Math.round(pairs.length * 1.2), pairs});
      }
    }
    let native = [];
    if (mode !== 'type') {                                  // câu trắc nghiệm có sẵn của thư viện (dạng đề kiểm tra)
      try {
        const exam = W.generate(options({kind: 'exam', mcCount: 12, size: 'short', seed, answers: false}));
        for (const mc of exam.sheets[0].mc || []) {
          const stem = parseTex(mc.stem, opts), choices = mc.options.map(o => parseTex(o, opts));
          if (!stem.ok || choices.some(c => !c.ok)) continue;
          native.push({kind: 'mc', instrHtml: 'Chọn đáp án đúng:', parts: stem.parts, blanks: 1, options: choices.map(c => c.parts.map(p => p.html || '').join('')), correct: mc.correct});
        }
      } catch { /* môn không có đề kiểm tra thì bỏ qua */ }
    }
    if (mode === 'mix') native = shuffle(native).slice(0, 2);        // trắc nghiệm chỉ là một trong các kiểu
    if (mode === 'match') return shuffle(matches).slice(0, ROUND);
    if (mode === 'tiles') return shuffle(pool.filter(q => q.kind === 'tiles')).slice(0, ROUND);
    const picked = shuffle([...pool, ...native, ...shuffle(matches).slice(0, mode === 'mix' ? 2 : 0)]);
    if (mode === 'mix') {                                            // giữ trắc nghiệm không quá 3 câu trong 10 câu
      let mcCount = 0;
      return picked.filter(q => q.kind !== 'mc' || ++mcCount <= 3).slice(0, ROUND);
    }
    return picked.slice(0, ROUND);
  }

  function fitCard() {                                      // công thức dài thì thu nhỏ chữ cho vừa khung
    const card = g('[data-game-card]');
    card.style.fontSize = '';
    let size = parseFloat(getComputedStyle(card).fontSize);
    for (let i = 0; i < 24 && card.scrollWidth > card.clientWidth + 1 && size > 13; i++) { size *= 0.93; card.style.fontSize = size + 'px'; }
  }
  window.addEventListener('resize', () => { if (game.state && !gameEl.hidden) fitCard(); });

  function confetti(count = 26, stars = false) {
    const box = g('[data-game-confetti]');
    if (!box) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) count = Math.min(count, 10);
    const colors = ['#ff5c8a', '#ffd93b', '#4dd0e1', '#7c4dff', '#66bb6a', '#ff9800'];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement(stars && i % 3 === 0 ? 'img' : 'i');
      piece.className = 'pg-piece';
      if (piece.tagName === 'IMG') { piece.src = emoji('2b50'); piece.alt = ''; } else piece.style.background = colors[i % colors.length];
      piece.style.setProperty('--x', (Math.random() * 100).toFixed(1) + '%');
      piece.style.setProperty('--dx', (Math.random() * 160 - 80).toFixed(0) + 'px');
      piece.style.setProperty('--d', (0.9 + Math.random() * 0.9).toFixed(2) + 's');
      piece.style.setProperty('--r', (Math.random() * 720 - 360).toFixed(0) + 'deg');
      box.append(piece);
      setTimeout(() => piece.remove(), 2200);
    }
  }
  function setMood(mood) {
    const buddy = g('[data-game-buddy]');
    buddy.dataset.mood = mood;
    g('[data-game-face]').src = emoji(mood === 'happy' ? '1f600' : mood === 'sad' ? '1f622' : mood === 'wow' ? '1f62e' : '1f600');
  }
  function renderDots() {
    const s = game.state;
    g('[data-game-dots]').innerHTML = s.questions.map((_, i) => `<i data-r="${s.results[i] || ''}"${i === s.index ? ' data-now="true"' : ''}></i>`).join('');
  }

  function startGame() {
    if (!cfg.topics.length) { g('[data-game-best]').textContent = 'Hãy chọn ít nhất một dạng bài.'; return; }
    const questions = gamePool();
    if (!questions.length) { g('[data-game-best]').textContent = 'Các dạng bài đã chọn chưa chơi được ở chế độ này.'; return; }
    game.state = {questions, index: 0, score: 0, streak: 0, best: 0, right: 0, spent: 0, level: LEVELS[gameLevel()], levelId: gameLevel(), results: []};
    g('[data-game-mascot]').src = emoji(MASCOTS[Math.floor(Math.random() * MASCOTS.length)]);
    showPanel('play');
    play('start');
    syncSoundButton();
    nextQuestion();
  }

  const card_replay = () => { const c = g('[data-game-card]'); c.classList.remove('pg-in'); void c.offsetWidth; c.classList.add('pg-in'); };

  // ---------- nối cặp ----------
  function setupMatch(q) {
    const card = g('[data-game-card]'), mismatch = {n: 0}, rights = shuffle(q.pairs.map((p, i) => ({i, text: p.right})));
    q.state = {mismatch, matched: 0, picked: null};
    card.innerHTML = `<div class="pg-match"><div class="pg-match-col">${q.pairs.map((p, i) => `<button type="button" class="pg-m pg-m-left" data-pair="${i}">${p.left}</button>`).join('')}</div><div class="pg-match-col">${rights.map(r => `<button type="button" class="pg-m pg-m-right" data-pair="${r.i}">${escHtml(r.text)}</button>`).join('')}</div></div>`;
  }
  g('[data-game-card]').addEventListener('click', event => {
    const b = event.target.closest('.pg-m'), s = game.state;
    if (!b || !s || s.locked || b.disabled) return;
    const q = s.questions[s.index], st = q.state, side = b.classList.contains('pg-m-left') ? 'left' : 'right';
    const card = g('[data-game-card]');
    if (!st.picked || st.picked.side === side) {                           // chọn (hoặc đổi) ô đầu tiên
      card.querySelectorAll(`.pg-m-${side}.is-pick`).forEach(x => x.classList.remove('is-pick'));
      b.classList.add('is-pick'); st.picked = {side, el: b}; play('pop');
      return;
    }
    const a = st.picked.el; st.picked = null;
    a.classList.remove('is-pick');
    if (a.dataset.pair === b.dataset.pair) {
      [a, b].forEach(x => { x.classList.add('is-done'); x.disabled = true; });
      st.matched++; play('right');
      if (st.matched === q.pairs.length) finishQuestion(st.mismatch.n === 0, false);
    } else {
      st.mismatch.n++; play('wrong');
      [a, b].forEach(x => { x.classList.add('is-bad'); setTimeout(() => x.classList.remove('is-bad'), 450); });
    }
  });

  // ---------- xếp thẻ ----------
  function setupTiles(q) {
    const box = g('[data-game-tilebox]'), slots = g('[data-game-slots]'), bank = g('[data-game-bank]');
    box.hidden = q.kind !== 'tiles';
    slots.replaceChildren(); bank.replaceChildren();
    if (q.kind !== 'tiles') return;
    let order = shuffle(q.tiles.tokens.map((text, i) => ({text, i})));
    for (let t = 0; t < 5 && order.every((x, i) => x.text === q.tiles.tokens[i]); t++) order = shuffle(order);
    for (const {text, i} of order) {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'pg-tilebtn'; b.dataset.tile = i; b.textContent = text;
      bank.append(b);
    }
  }
  const placedTiles = () => [...g('[data-game-slots]').querySelectorAll('.pg-tilebtn')];
  g('[data-game-tilebox]').addEventListener('click', event => {
    const b = event.target.closest('.pg-tilebtn'), s = game.state;
    if (!b || !s || s.locked) return;
    const inSlots = b.parentElement === g('[data-game-slots]');
    (inSlots ? g('[data-game-bank]') : g('[data-game-slots]')).append(b);
    play('pop');
  });

  function nextQuestion() {
    const s = game.state, q = s.questions[s.index], mc = q.kind === 'mc';
    s.total = secondsFor(q, s.level); s.startedAt = performance.now(); s.locked = false; s.lastTick = 0;
    g('.pg-timer').classList.remove('is-fly');
    g('[data-game-pos]').textContent = `Câu ${s.index + 1}/${s.questions.length}`;
    g('[data-game-score]').textContent = s.score;
    g('[data-game-streak]').textContent = s.streak > 1 ? `x${s.streak}` : '';
    g('[data-game-streakwrap]').hidden = s.streak < 2;
    setMood('idle');
    renderDots();
    card_replay();
    g('[data-game-instr]').innerHTML = q.instrHtml;
    const card = g('[data-game-card]');
    let k = 0;
    const tiles = q.kind === 'tiles';
    if (q.kind === 'match') setupMatch(q);
    else card.innerHTML = q.parts.map(p => p.html != null ? p.html : tiles ? '' : mc ? '<span class="pg-gap">?</span>' : blankHtml(p.blank, `Ô ${++k}`, q.expected?.[k - 1])).join('')
      + (q.extra ? `<div class="pg-answerrow"><span class="pg-extra">${(q.extra.prefix || '').replace(/^([A-Za-z])( =)/, '<i>$1</i>$2')}</span>${mc ? '<span class="pg-gap">?</span>' : blankHtml({kind: 'text'}, 'Đáp số', q.expected?.[0])}</div>` : '');
    card.dataset.state = '';
    if (tiles) card.querySelectorAll('.pg-tile').forEach(t => t.remove());          // thẻ đề bài trùng với thẻ để xếp
    card.hidden = tiles && !card.textContent.trim() && !card.querySelector('img');
    g('[data-game-card]').classList.toggle('pg-card-match', q.kind === 'match');        // thẻ đề bài trùng với thẻ để xếp
    setupTiles(q);
    const options = g('[data-game-options]');
    options.innerHTML = mc ? q.options.map((html, i) => `<button type="button" class="pg-opt pg-opt-${i}" data-opt="${i}"><b>${'ABCD'[i]}</b><span>${html}</span></button>`).join('') : '';
    options.hidden = !mc;
    g('[data-game-feedback]').textContent = '';
    g('[data-game-answer]').hidden = mc || q.kind === 'match'; g('[data-game-next]').hidden = true;
    fitCard();
    const first = card.querySelector('.pg-input');
    if (first) first.focus({preventScroll: true});
    clearInterval(game.timer);
    game.timer = setInterval(tick, 100);
    tick();
  }

  function tick() {
    const s = game.state;
    if (!s || s.locked) return;
    const left = Math.max(0, s.total - (performance.now() - s.startedAt) / 1000), done = 1 - left / s.total;   // thanh chạy tiến từ trái sang phải
    const bar = g('[data-game-bar]'), pos = done ** 2;                        // càng gần hết giờ càng chạy nhanh
    bar.style.width = (pos * 100).toFixed(1) + '%';
    bar.dataset.low = done > 0.66 ? 'true' : 'false';
    g('[data-game-rocket]').style.left = `calc(${(pos * 100).toFixed(1)}% - 17px)`;
    const secs = Math.ceil(left);
    g('[data-game-secs]').textContent = secs + 's';
    if (secs <= 5 && secs > 0 && s.lastTick !== secs) { s.lastTick = secs; play('tick'); }
    if (left <= 0) finishQuestion(false, true);
  }

  function finishQuestion(correct, timedOut, picked = -1) {
    const s = game.state;
    if (!s || s.locked) return;
    s.locked = true; clearInterval(game.timer);
    const q = s.questions[s.index], used = (performance.now() - s.startedAt) / 1000;
    s.spent += Math.min(used, s.total);
    const card = g('[data-game-card]');
    card.querySelectorAll('.pg-input').forEach(el => { el.disabled = true; });
    g('[data-game-tilebox]').querySelectorAll('button').forEach(b => { b.disabled = true; });
    const optionButtons = [...g('[data-game-options]').querySelectorAll('.pg-opt')];
    optionButtons.forEach((b, i) => { b.disabled = true; if (i === q.correct) b.classList.add('is-right'); else if (i === picked) b.classList.add('is-wrong'); });
    card.querySelectorAll('.pg-m').forEach(b => { b.disabled = true; });
    const answerText = q.kind === 'mc' ? optionButtons[q.correct].querySelector('span').textContent
      : q.kind === 'match' ? q.pairs.map(p => `${(() => { const d = document.createElement('div'); d.innerHTML = p.left.replace(/<img[^>]*>/g, '🖼'); d.querySelectorAll('.katex-mathml').forEach(e => e.remove()); return d.textContent.replace(/\s+/g, ' ').trim(); })()} → ${p.right}`).join('; ')
      : q.expected.join('; ');
    let text;
    if (correct) {
      s.streak++; s.right++;
      const gained = 100 + Math.round(Math.max(0, 1 - used / s.total) * 100) + Math.min(s.streak - 1, 5) * 10;
      s.score += gained;
      text = `${PRAISE[Math.floor(Math.random() * PRAISE.length)]} +${gained}`;
      play('right'); setMood('happy'); confetti(22);
    } else {
      s.streak = 0;
      text = `${timedOut ? 'Hết giờ rồi!' : 'Chưa đúng rồi.'} Đáp án: ${answerText}`;
      play(timedOut ? 'timeout' : 'wrong'); setMood(timedOut ? 'wow' : 'sad');
      if (timedOut) { g('.pg-timer').classList.add('is-fly'); play('whoosh'); }       // hết giờ: tên lửa bay đi
    }
    card.dataset.state = correct ? 'right' : 'wrong';
    g('[data-game-feedback]').textContent = text;
    g('[data-game-score]').textContent = s.score;
    s.results[s.index] = correct ? 'right' : 'wrong';
    renderDots();
    g('[data-game-answer]').hidden = true;
    const next = g('[data-game-next]');
    next.textContent = s.index + 1 >= s.questions.length ? 'Xem kết quả' : 'Tiếp →';
    next.hidden = correct;                       // đúng thì tự sang câu sau, sai thì cho em đọc đáp án
    next.focus({preventScroll: true});
    clearTimeout(game.advance);
    if (correct) game.advance = setTimeout(goNext, 1100);
    fitCard();
  }

  function submitAnswer() {
    const s = game.state;
    if (!s || s.locked) return;
    const q = s.questions[s.index];
    if (q.kind === 'mc') return;
    if (q.kind === 'tiles') {
      const placed = placedTiles().map(b => b.textContent);
      if (!placed.length) return;
      const right = q.tiles.numeric ? placed.length === q.expected.length && placed.every((v, i) => sameAnswer(q.expected[i], v)) : sameAnswer(q.expected[0], placed.join(q.tiles.glue));
      finishQuestion(right, false);
      return;
    }
    const inputs = [...g('[data-game-card]').querySelectorAll('.pg-input')];
    if (!inputs.some(el => el.value.trim())) return;
    finishQuestion(inputs.every((el, i) => matches(q, q.expected[i], el.value)), false);
  }

  function endGame() {
    const s = game.state;
    clearInterval(game.timer);
    const best = readBest(), isBest = s.score > best;
    if (isBest) writeBest(s.score);
    showPanel('end');
    play(s.right >= s.questions.length / 2 ? 'win' : 'timeout');
    const ratio = s.right / s.questions.length, stars = ratio >= 0.9 ? 3 : ratio >= 0.6 ? 2 : ratio > 0 ? 1 : 0;
    g('[data-game-stars]').innerHTML = [0, 1, 2].map(i => `<img src="${emoji('2b50')}" alt="" class="${i < stars ? 'on' : 'off'}" style="animation-delay:${0.25 + i * 0.25}s">`).join('');
    g('[data-game-title]').textContent = stars === 3 ? 'Xuất sắc!' : stars === 2 ? 'Giỏi lắm!' : stars === 1 ? 'Cố gắng tốt!' : 'Thử lại nhé!';
    g('[data-game-final]').textContent = `${s.score} điểm${isBest && s.score > 0 ? ' · Kỷ lục mới!' : ''}`;
    if (stars >= 2) confetti(60, true);
    g('[data-game-detail]').textContent = `Đúng ${s.right}/${s.questions.length} câu · Mức ${s.level.label} · Thời gian trung bình ${(s.spent / s.questions.length).toFixed(1)} giây/câu.`;
  }

  g('[data-game-go]').addEventListener('click', startGame);
  g('[data-game-again]').addEventListener('click', startGame);
  g('[data-game-menu]').addEventListener('click', () => { refreshBest(); showPanel('start'); });
  g('[data-game-quit]').addEventListener('click', () => { clearInterval(game.timer); clearTimeout(game.advance); game.state = null; refreshBest(); showPanel('start'); });
  g('[data-game-answer]').addEventListener('click', submitAnswer);
  g('[data-game-options]').addEventListener('click', event => {
    const b = event.target.closest('.pg-opt'), s = game.state;
    if (!b || !s || s.locked) return;
    const i = Number(b.dataset.opt);
    finishQuestion(i === s.questions[s.index].correct, false, i);
  });
  function goNext() {
    const s = game.state;
    if (!s || !s.locked) return;
    clearTimeout(game.advance);
    if (++s.index >= s.questions.length) endGame(); else { play('pop'); nextQuestion(); }
  }
  g('[data-game-next]').addEventListener('click', goNext);
  const SOUND_ICON = {
    on: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M3 9.5v5h3.8L12 19V5L6.8 9.5H3z" fill="#7c4dff"/><path d="M15.4 9a4.2 4.2 0 0 1 0 6M18.2 6.4a8 8 0 0 1 0 11.2" fill="none" stroke="#ff9800" stroke-width="2.2" stroke-linecap="round"/></svg>',
    off: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M3 9.5v5h3.8L12 19V5L6.8 9.5H3z" fill="#a79ccb"/><path d="M15.6 9.6l5 4.8M20.6 9.6l-5 4.8" stroke="#ff5c8a" stroke-width="2.4" stroke-linecap="round"/></svg>'
  };
  const syncSoundButton = () => { const b = g('[data-game-sound]'); b.innerHTML = muted ? SOUND_ICON.off : SOUND_ICON.on; b.setAttribute('aria-pressed', String(!muted)); b.title = muted ? 'Bật âm thanh' : 'Tắt âm thanh'; };
  syncSoundButton();
  g('[data-game-sound]').addEventListener('click', () => { muted = !muted; try { localStorage.setItem('giasu-game-muted', muted ? '1' : '0'); } catch { /* bỏ qua */ } syncSoundButton(); play('pop'); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && gameEl.classList.contains('pg-overlay')) g('[data-game-quit]').click(); });
  gameEl.addEventListener('change', event => { if (event.target.name === 'gamelevel') refreshBest(); else if (event.target.matches('select.pg-input')) submitAnswer(); });
  gameEl.addEventListener('keydown', event => {
    if (game.state && !game.state.locked && game.state.questions[game.state.index].kind === 'mc') {
      const i = '1234'.indexOf(event.key) >= 0 ? '1234'.indexOf(event.key) : 'abcd'.indexOf(event.key.toLowerCase());
      if (event.key.length === 1 && i >= 0) { g(`[data-opt="${i}"]`)?.click(); return; }
    }
    if (event.key !== 'Enter' || !game.state) return;
    if (event.target.matches('.pg-input')) { event.preventDefault(); submitAnswer(); }
    else if (!game.state.locked && game.state.questions[game.state.index].kind === 'tiles' && !event.target.closest('button')) { event.preventDefault(); submitAnswer(); }
    else if (game.state.locked && !event.target.closest('button')) goNext();
  });

  // ---------- chuyển chế độ ----------
  function setMode(mode) {
    const playing = mode === 'game';
    app.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.mode === mode)));
    app.querySelectorAll('[data-sheet-only]').forEach(el => { el.hidden = playing; });
    if (!playing && current?.skipped.length === 0) $('[data-skipped]').hidden = true;
    gameEl.hidden = !playing;
    if (playing) { clearInterval(game.timer); clearTimeout(game.advance); game.state = null; refreshBest(); showPanel('start'); }
    else { clearInterval(game.timer); $('[data-skipped]').hidden = !current?.skipped.length; }
    cfg.mode = mode;
    if (current) writeHash();
  }
  app.querySelector('.pg-modes').addEventListener('click', event => { const b = event.target.closest('[data-mode]'); if (b) setMode(b.dataset.mode); });

  // ---------- sự kiện ----------
  const regenerate = () => { cfg.topics = readTopics(); generate(); };
  form.addEventListener('change', event => {
    if (event.target.name === 'subject') { cfg.subject = event.target.value; cfg.topics = null; cfg.grade = W.SUBJECTS[cfg.subject].grades.includes(cfg.grade) ? cfg.grade : W.SUBJECTS[cfg.subject].grades[0]; syncControls(); generate(); }
    else if (event.target.name === 'grade') { cfg.grade = Number(event.target.value); cfg.topics = null; syncControls(); generate(); }
    else if (event.target.name === 'level') { cfg.level = Number(event.target.value); generate(); }
    else if (event.target.name === 'size') { cfg.size = event.target.value; generate(); }
  });
  topicsEl.addEventListener('change', regenerate);
  $('[data-all]').addEventListener('click', () => { topicsEl.querySelectorAll('input').forEach(i => { i.checked = true; }); regenerate(); });
  $('[data-none]').addEventListener('click', () => { topicsEl.querySelectorAll('input').forEach(i => { i.checked = false; }); regenerate(); });
  $('[data-new]').addEventListener('click', () => { cfg.seed = 1 + Math.floor(Math.random() * 99999); generate(); });
  $('[data-grade]').addEventListener('click', () => gradeAll(true));
  $('[data-reset]').addEventListener('click', clearAnswers);
  $('[data-print]').addEventListener('click', () => printSheet(false));
  $('[data-print-key]').addEventListener('click', () => printSheet(true));
  $('[data-tex]').addEventListener('click', () => { const r = fullResult(); download(new Blob([r.tex], {type: 'text/plain;charset=utf-8'}), r.filename); status('Đã tải tệp .tex (cần pdflatex hoặc Overleaf để dựng PDF).'); });
  const pdfButton = $('[data-pdf]');
  if (compileUrl && window.WorksheetAssets) pdfButton.addEventListener('click', compilePdf);
  const syncPdfButton = () => { pdfButton.hidden = !(compileUrl && window.WorksheetAssets) || LOOSE.has(cfg.subject); };   // nét chữ Hán/Nhật chưa có trong bộ tệp web

  window.addEventListener('hashchange', () => {            // liên kết menu đổi giữa phiếu và game khi đang ở trang
    const m = new URLSearchParams(location.hash.slice(1)).get('m');
    if ((m === 'game' || m === 'sheet') && m !== cfg.mode) setMode(m);
  });

  app.addEventListener('error', event => {                  // hình minh hoạ lỗi mạng: thử tải lại một lần, vẫn lỗi thì thay bằng chấm tròn để vẫn đếm được
    const img = event.target;
    if (!(img instanceof HTMLImageElement) || !img.classList.contains('pg-pic')) return;
    if (!img.dataset.retry) { img.dataset.retry = '1'; setTimeout(() => { img.src = img.src.split('?')[0] + '?r=' + Date.now(); }, 400); return; }
    const dot = document.createElement('span');
    dot.className = 'pg-dot'; dot.setAttribute('aria-hidden', 'true');
    img.replaceWith(dot);
  }, true);

  fillControls();
  readHash();
  if (!cfg.topics) cfg.topics = null;
  syncControls();
  generate();
  if (cfg.mode === 'game') setMode('game');
}

const root = document.querySelector('[data-practice-app]');
if (root) init(root);
