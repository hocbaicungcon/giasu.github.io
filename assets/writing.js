/* credit: giasu.ai.vn */
/* Trang Luyện viết chữ Hán / chữ Nhật: lộ trình từ nét cơ bản đến chữ khó, xem hoạt ảnh nét, tô theo nét, tự viết, phát âm bằng giọng đọc của thiết bị, hình minh hoạ Twemoji.
   Dữ liệu trong assets/writing (xem scripts/import-writing-data.mjs); hoạt ảnh và chấm nét do Hanzi Writer (MIT). */

const root = document.querySelector('[data-writing-app]');
if (root) init(root);

function init(app) {
  const HanziWriter = window.HanziWriter;
  const $ = sel => app.querySelector(sel);
  const BASE = new URL('../assets/writing/', import.meta.url).href;
  const PIC = cp => new URL(`../assets/worksheet/emoji-svg/${cp}.svg`, import.meta.url).href;
  const picImg = (cp, cls = 'wr-pic') => cp ? `<img class="${cls}" src="${PIC(cp)}" alt="" width="56" height="56" loading="lazy">` : '';
  const pathEl = $('[data-path]'), levelEl = $('[data-level]'), padEl = $('[data-pad]'), tabs = [...app.querySelectorAll('[data-lang]')];
  if (!HanziWriter) { pathEl.textContent = 'Không tải được thư viện viết chữ. Hãy tải lại trang.'; return; }

  const state = {lang: 'zh', index: null, level: null, i: 0, mode: 'demo', writer: null, stroke: -1, token: 0};
  const cache = new Map();
  const esc = v => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // ---------- tiến độ (lưu trên thiết bị) ----------
  const KEY = 'giasu-writing:v1';
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { progress = {}; }
  const saveProgress = () => { try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch { /* bỏ qua */ } };
  const stars = (levelId, c) => progress[levelId]?.[c] || 0;
  const doneCount = levelId => Object.values(progress[levelId] || {}).filter(n => n > 0).length;

  // ---------- phát âm ----------
  const ICON = {
    sound: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 9.5v5h3.8L12 19V5L6.8 9.5H3z" fill="currentColor"/><path d="M15.4 9a4.2 4.2 0 0 1 0 6M18.2 6.4a8 8 0 0 1 0 11.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    play: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg>',
    step: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 5v14l9-7zM16 5h3v14h-3z" fill="currentColor"/></svg>',
    redo: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 5a7 7 0 1 0 6.7 9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M12 1.5l5 3.5-5 3.5z" fill="currentColor"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" fill="currentColor"/></svg>'
  };
  let voices = [];
  const loadVoices = () => { voices = window.speechSynthesis?.getVoices?.() || []; };
  loadVoices();
  window.speechSynthesis?.addEventListener?.('voiceschanged', loadVoices);
  function say(text, lang) {
    const synth = window.speechSynthesis;
    if (!synth || !text) return toast('Thiết bị chưa hỗ trợ phát âm.');
    const code = lang === 'ja' ? 'ja' : 'zh';
    const voice = voices.find(v => v.lang.toLowerCase().startsWith(code) && v.localService) || voices.find(v => v.lang.toLowerCase().startsWith(code));
    if (!voice && voices.length) return toast(lang === 'ja' ? 'Thiết bị chưa có giọng đọc tiếng Nhật.' : 'Thiết bị chưa có giọng đọc tiếng Trung.');
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'ja' ? 'ja-JP' : 'zh-CN'; u.rate = 0.8;
    if (voice) u.voice = voice;
    synth.speak(u);
  }
  const playAudio = (_id, text, lang) => say(text, lang);          // phát âm bằng giọng đọc của thiết bị
  let toastTimer = 0;
  function toast(text) {
    const el = $('[data-toast]');
    el.textContent = text; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 2800);
  }

  // ---------- dữ liệu ----------
  async function loadIndex() {
    if (!state.index) state.index = await fetch(BASE + 'index.json').then(r => r.json());
    return state.index;
  }
  async function loadLevel(id) {
    if (!cache.has(id)) cache.set(id, fetch(`${BASE}${id}.json`).then(r => { if (!r.ok) throw new Error(id); return r.json(); }));
    try { return await cache.get(id); } catch (e) { cache.delete(id); throw e; }
  }

  // ---------- lộ trình ----------
  const STAGE = ['Bắt đầu', 'Cơ bản', 'Cơ bản', 'Trung bình', 'Trung bình', 'Nâng cao', 'Nâng cao', 'Khó'];
  async function showPath() {
    stopWriter(); padEl.hidden = true; levelEl.hidden = true; pathEl.hidden = false;
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.lang === state.lang)));
    const list = (await loadIndex())[state.lang];
    pathEl.innerHTML = `<ol class="wr-path">${list.map((lv, n) => {
      const done = doneCount(lv.id), pct = Math.round(done / lv.count * 100);
      return `<li><button type="button" class="wr-level" data-level-id="${lv.id}" lang="${state.lang}">
        <span class="wr-step">${n + 1}</span>
        <span class="wr-level-body"><strong>${esc(lv.title)}</strong><span class="wr-tag">${STAGE[Math.min(n, STAGE.length - 1)]}</span><small>${esc(lv.desc)}</small>
        <span class="wr-bar" aria-hidden="true"><i style="width:${pct}%"></i></span><span class="wr-count">${done}/${lv.count} chữ</span></span>
        <span class="wr-preview" aria-hidden="true">${lv.preview.map(c => `<b>${esc(c)}</b>`).join('')}</span></button></li>`;
    }).join('')}</ol>`;
  }

  async function openLevel(id) {
    levelEl.hidden = false; pathEl.hidden = true; padEl.hidden = true;
    levelEl.innerHTML = '<p class="wr-loading">Đang tải…</p>';
    try { state.level = await loadLevel(id); } catch { levelEl.innerHTML = '<p>Không tải được cấp độ này. <button type="button" data-back>Quay lại</button></p>'; return; }
    renderLevel();
  }
  function renderLevel() {
    const lv = state.level, done = doneCount(lv.id);
    levelEl.innerHTML = `<div class="wr-level-head"><button type="button" class="wr-back" data-back>← Lộ trình</button><div><h2>${esc(lv.title)}</h2><p>${esc(lv.desc)}</p></div><span class="wr-count">${done}/${lv.items.length} chữ</span></div>
      <div class="wr-grid" lang="${lv.lang}">${lv.items.map((it, n) => `<button type="button" class="wr-tile" data-i="${n}" aria-label="Luyện viết chữ ${esc(it.c)}">${it.e ? picImg(it.e, 'wr-badge') : ''}<span class="wr-char">${esc(it.c)}</span><small>${esc(tileLabel(it))}</small><span class="wr-stars" aria-hidden="true">${[1, 2, 3].map(s => `<i class="${stars(lv.id, it.c) >= s ? 'on' : ''}">${ICON.star}</i>`).join('')}</span></button>`).join('')}</div>`;
    window.scrollTo({top: app.offsetTop - 70, behavior: 'smooth'});
  }
  const tileLabel = it => it.p || it.on?.[0]?.r || it.kun?.[0]?.r || '';


  // ---------- nét bút lông ----------
  /* Hanzi Writer chỉ vẽ nét người viết bằng một đường mảnh đều nhau. Ta ẩn đường đó và vẽ đè một nét bút lông
     (to, nét đầu mềm, đậm khi đi chậm, thon dần ở cuối) lên canvas; Hanzi Writer vẫn là bên chấm nét đúng/sai. */
  function attachBrush(board, size) {
    const svg = board.querySelector('svg');
    const canvas = document.createElement('canvas');
    canvas.className = 'wr-brush';
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = canvas.height = Math.round(size * dpr);
    canvas.style.width = canvas.style.height = size + 'px';
    board.append(canvas);
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const base = size * 0.07;                                     // bề ngang tối đa của nét bút
    const strokes = [];                                           // {pts, ended, endedAt, result, color}
    let current = null, raf = 0;

    const toLocal = event => { const r = (svg || board).getBoundingClientRect(); return {x: event.clientX - r.left, y: event.clientY - r.top, t: performance.now()}; };
    const tmp = document.createElement('canvas');                // mỗi nét vẽ lên canvas phụ rồi mới ghép, để độ trong suốt đều
    tmp.width = tmp.height = canvas.width;
    const tctx = tmp.getContext('2d');
    tctx.scale(dpr, dpr);

    function addPoint(stroke, raw) {
      const last = stroke.pts[stroke.pts.length - 1];
      if (!last) { stroke.pts.push({x: raw.x, y: raw.y, t: raw.t, w: base * 0.6}); stroke.raw = raw; return; }
      // làm mượt vị trí (loại bỏ rung tay), bỏ điểm quá gần để đường không bị răng cưa
      const sx = last.x + (raw.x - last.x) * 0.38, sy = last.y + (raw.y - last.y) * 0.38;
      const dist = Math.hypot(sx - last.x, sy - last.y);
      if (dist < 2) return;
      const speed = Math.hypot(raw.x - stroke.raw.x, raw.y - stroke.raw.y) / Math.max(1, raw.t - stroke.raw.t);   // px/ms
      stroke.raw = raw;
      const target = base * Math.max(0.5, Math.min(1.1, 1.15 - speed * 0.5));
      const step = Math.max(-base * 0.05, Math.min(base * 0.05, target - last.w));                       // bề ngang đổi từ từ
      stroke.pts.push({x: sx, y: sy, t: raw.t, w: last.w + step});
    }
    // đường cong Catmull-Rom đi qua các điểm đã làm mượt; mỗi mẫu có bề ngang nội suy
    function centerline(pts) {
      if (pts.length < 3) return pts.map(p => ({...p}));
      const out = [];
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
        for (let k = 0; k < 6; k++) {
          const t = k / 6, t2 = t * t, t3 = t2 * t;
          const f = (a, b, c, d) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
          out.push({x: f(p0.x, p1.x, p2.x, p3.x), y: f(p0.y, p1.y, p2.y, p3.y), w: p1.w + (p2.w - p1.w) * t});
        }
      }
      out.push({...pts[pts.length - 1]});
      return out;
    }
    function paint(stroke, alpha) {
      const {pts} = stroke;
      if (!pts.length) return;
      tctx.clearRect(0, 0, size, size);
      tctx.fillStyle = stroke.color;
      const line = centerline(pts);
      if (line.length < 2) { tctx.beginPath(); tctx.arc(line[0].x, line[0].y, base * 0.45, 0, Math.PI * 2); tctx.fill(); }
      else {
        const lens = [0];
        for (let i = 1; i < line.length; i++) lens.push(lens[i - 1] + Math.hypot(line[i].x - line[i - 1].x, line[i].y - line[i - 1].y));
        const total = lens[lens.length - 1], ramp = Math.min(base * 1.1, total * 0.35), tail = stroke.ended ? Math.min(base * 2.4, total * 0.5) : 0;
        const radiusAt = (i, s) => {
          let w = line[i].w;
          w *= 0.5 + 0.5 * Math.min(1, s / ramp);                                  // đầu nét mềm
          if (tail) w *= 0.2 + 0.8 * Math.min(1, (total - s) / tail) ** 0.8;       // cuối nét thon dần như nhấc bút
          return Math.max(0.9, w / 2);
        };
        for (let i = 1; i < line.length; i++) {                                    // in dấu mực tròn dọc theo đường, mật độ dày nên mép trơn
          const a = line[i - 1], b = line[i], len = lens[i] - lens[i - 1];
          const n = Math.max(1, Math.ceil(len / 0.9));
          for (let k = 0; k < n; k++) {
            const t = k / n, x = a.x + (b.x - a.x) * t, y = a.y + (b.y - a.y) * t, s = lens[i - 1] + len * t;
            tctx.beginPath(); tctx.arc(x, y, radiusAt(i, s), 0, Math.PI * 2); tctx.fill();
          }
        }
        tctx.beginPath(); tctx.arc(line[line.length - 1].x, line[line.length - 1].y, radiusAt(line.length - 1, total), 0, Math.PI * 2); tctx.fill();
      }
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.drawImage(tmp, 0, 0, size, size);
      ctx.restore();
    }
    function frame() {
      raf = 0;
      ctx.clearRect(0, 0, size, size);
      const now = performance.now();
      for (let i = strokes.length - 1; i >= 0; i--) {
        const st = strokes[i];
        let alpha = 0.94;
        if (st.ended) {
          const wait = st.result === null ? 450 : 0, age = now - st.endedAt - wait;   // chưa biết đúng sai thì giữ nét một lúc
          if (age > 0) alpha = Math.max(0, 0.94 * (1 - age / (st.result === false ? 380 : 220)));
          if (alpha <= 0) { strokes.splice(i, 1); continue; }
        }
        paint(st, alpha);
      }
      if (strokes.length) raf = requestAnimationFrame(frame);
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };

    const down = event => { if (event.button > 0) return; current = {pts: [], raw: null, ended: false, endedAt: 0, result: null, color: '#1d1a2b'}; strokes.push(current); addPoint(current, toLocal(event)); kick(); };
    const move = event => { if (!current) return; const list = event.getCoalescedEvents?.(); for (const e of (list && list.length ? list : [event])) addPoint(current, toLocal(e)); kick(); };
    const up = () => { if (!current) return; current.ended = true; current.endedAt = performance.now(); current = null; kick(); };
    board.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    return {
      resolve(ok) {                                                // nét vừa xong đúng hay sai
        const st = [...strokes].reverse().find(x => x.result === null);
        if (st) { st.result = ok; st.color = ok ? '#1d1a2b' : '#d94e48'; if (!st.ended) st.pending = ok; kick(); }
      },
      dispose() {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up);
        board.removeEventListener('pointerdown', down); canvas.remove();
      }
    };
  }

  // ---------- bảng viết ----------
  function stopWriter() {
    state.token++;
    state.brush?.dispose(); state.brush = null;
    try { state.writer?.cancelQuiz(); state.writer?.pauseAnimation?.(); } catch { /* bỏ qua */ }
    state.writer = null;
  }
  function boardSize() { return Math.max(240, Math.min(420, ($('[data-board-wrap]').clientWidth || 340) - 4)); }

  function openChar(i) {
    const lv = state.level;
    if (i < 0 || i >= lv.items.length) return;
    state.i = i; state.stroke = -1;
    levelEl.hidden = true; padEl.hidden = false;
    const it = lv.items[i];
    $('[data-pos]').textContent = `${i + 1}/${lv.items.length}`;
    $('[data-level-title]').textContent = lv.title;
    $('[data-prev]').disabled = i === 0; $('[data-next]').disabled = i === lv.items.length - 1;
    renderInfo(it);
    setMode('demo');
    padEl.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  function renderInfo(it) {
    const lv = state.level, lang = lv.lang;
    const rows = [];
    const sayBtn = (label, id, text, l = lang) => `<button type="button" class="wr-say" data-say="${esc(text)}" data-audio="${esc(id || '')}" data-sl="${l}" aria-label="Nghe phát âm ${esc(label)}">${ICON.sound}<span>${esc(label)}</span></button>`;
    if (lang === 'zh') {
      if (it.p) rows.push(`<div class="wr-read">${sayBtn(it.p, it.a, it.c)}</div>`);
      if (it.hv) rows.push(`<p class="wr-hv">Âm Hán Việt: <b>${esc(it.hv)}</b>${it.p ? ` · pinyin <b>${esc(it.p)}</b>` : ''}</p>`);
    } else if (lv.kind === 'kana') {
      rows.push(`<div class="wr-read">${sayBtn(it.p, '', it.c)}</div>`);
    } else if (it.on || it.kun) {
      const group = (name, list) => list?.length ? `<div class="wr-readings"><span>${name}</span>${list.map(r => sayBtn(`${r.k} · ${r.r}`, '', r.k.replace(/[()]/g, ''))).join('')}</div>` : '';
      rows.push(group('Âm On', it.on), group('Âm Kun', it.kun));
    } else if (it.hv) rows.push(`<p class="wr-hv">Âm Hán Việt: <b>${esc(it.hv)}</b></p>`);
    if (it.e) rows.push(`<div class="wr-meaning">${picImg(it.e)}<div><p class="wr-mean">${esc(it.v || it.m)}</p>${it.v && it.m ? `<p class="wr-en">${esc(it.m)}</p>` : ''}</div></div>`);
    else if (it.m) rows.push(`<p class="wr-mean">${esc(it.m)}</p>`);
    if (it.tip) rows.push(`<p class="wr-tip">${esc(it.tip)}</p>`);
    const facts = [`${it.n} nét`, it.r && it.r !== it.c ? `bộ ${it.r}` : '', it.j ? `JLPT N${it.j}` : ''].filter(Boolean);
    rows.push(`<p class="wr-facts">${facts.map(f => `<span>${esc(f)}</span>`).join('')}</p>`);
    if (it.w?.length) rows.push(`<div class="wr-words"><h3>Từ ví dụ</h3>${it.w.map(w => `<div class="wr-word" lang="zh">${picImg(w.e, 'wr-word-pic')}<span class="wr-word-h">${esc(w.h)}</span><span class="wr-word-p">${esc(w.p)}</span><span class="wr-word-m">${esc(w.v ? w.v + ' · ' + w.m : w.m)}</span><button type="button" class="wr-say wr-say-icon" data-say="${esc(w.h)}" data-audio="${esc(w.a || '')}" data-sl="zh" aria-label="Nghe phát âm ${esc(w.h)}">${ICON.sound}</button></div>`).join('')}</div>`);
    $('[data-info]').innerHTML = rows.join('');
  }

  function createWriter() {
    stopWriter();
    const board = $('[data-board]');
    board.replaceChildren();
    const it = state.level.items[state.i], size = boardSize();
    board.style.width = board.style.height = size + 'px';
    const data = state.level.data;
    state.writer = HanziWriter.create(board, it.c, {
      width: size, height: size, padding: 18, showCharacter: true, showOutline: true,
      strokeColor: '#2b2147', outlineColor: '#d8e4cf', highlightColor: '#ff9800', drawingColor: 'rgba(0,0,0,0)', drawingWidth: 2,
      strokeAnimationSpeed: Number($('[data-speed]').value) || 1, delayBetweenStrokes: 280, strokeFadeDuration: 250, showHintAfterMisses: 2, highlightOnComplete: true,
      charDataLoader: (c, onLoad, onError) => { const d = data[c]; if (d) onLoad({strokes: d.s, medians: d.m}); else onError(new Error('no data')); }
    });
    return state.writer;
  }

  function setMode(mode, {animate = true} = {}) {
    state.mode = mode; state.stroke = -1;
    app.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    $('[data-result]').hidden = true;
    const it = state.level.items[state.i], writer = createWriter(), token = state.token;
    const hint = {demo: 'Xem chữ được viết nét theo nét. Bấm "Từng nét" để xem chậm.', trace: 'Tô theo nét mờ. Viết đúng thứ tự và hướng từng nét.', free: 'Tự viết chữ không có nét mờ. Sai quá 2 lần sẽ có gợi ý.'}[mode];
    $('[data-hint]').textContent = hint;
    $('[data-strokeinfo]').textContent = `${it.n} nét`;
    if (mode === 'demo') {
      if (animate) writer.animateCharacter();
    } else {
      state.brush = attachBrush($('[data-board]'), boardSize());
      if (mode === 'free') writer.hideOutline();
      writer.hideCharacter();
      let mistakes = 0;
      writer.quiz({
        leniency: 1.25, showHintAfterMisses: mode === 'free' ? 2 : 1,
        onMistake: () => { state.brush?.resolve(false); mistakes++; $('[data-strokeinfo]').textContent = `Sai ${mistakes} lần`; },
        onCorrectStroke: d => { state.brush?.resolve(true); $('[data-strokeinfo]').textContent = `Nét ${d.strokeNum + 1}/${it.n} · sai ${mistakes}`; },
        onComplete: summary => { if (token === state.token) finish(summary.totalMistakes ?? mistakes); }
      });
    }
  }

  function finish(mistakes) {
    const lv = state.level, it = lv.items[state.i];
    const earned = Math.min(mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1, state.mode === 'trace' ? 2 : 3);
    progress[lv.id] = progress[lv.id] || {};
    progress[lv.id][it.c] = Math.max(progress[lv.id][it.c] || 0, earned);
    saveProgress();
    const msg = mistakes === 0 ? 'Rất đẹp! Không sai nét nào.' : mistakes <= 2 ? 'Giỏi lắm! Chỉ sai một vài lần.' : 'Hoàn thành! Luyện thêm lần nữa để viết đẹp hơn.';
    const box = $('[data-result]');
    box.hidden = false;
    box.innerHTML = `<span class="wr-stars big" aria-label="${earned} sao">${[1, 2, 3].map(s => `<i class="${earned >= s ? 'on' : ''}">${ICON.star}</i>`).join('')}</span><strong>${msg}</strong>${state.mode === 'trace' ? '<small>Thử chế độ "Tự viết" để lấy 3 sao.</small>' : ''}`;
  }

  // ---------- sự kiện ----------
  app.addEventListener('click', event => {
    const t = event.target;
    const level = t.closest('[data-level-id]');
    if (level) return void openLevel(level.dataset.levelId);
    if (t.closest('[data-back]')) return void showPath();
    const tile = t.closest('[data-i]');
    if (tile) return void openChar(Number(tile.dataset.i));
    const say_ = t.closest('[data-say]');
    if (say_) return void playAudio(say_.dataset.audio, say_.dataset.say, say_.dataset.sl);
    const mode = t.closest('[data-mode]');
    if (mode) return void setMode(mode.dataset.mode);
    if (t.closest('[data-close-pad]')) { padEl.hidden = true; stopWriter(); levelEl.hidden = false; renderLevel(); return; }
    if (t.closest('[data-prev]')) return void openChar(state.i - 1);
    if (t.closest('[data-next]')) return void openChar(state.i + 1);
    if (t.closest('[data-replay]')) { if (state.mode === 'demo') { state.stroke = -1; state.writer?.showCharacter(); state.writer?.animateCharacter(); } else setMode(state.mode); return; }
    if (t.closest('[data-step]')) { stepStroke(); return; }
    if (t.closest('[data-again]')) return void setMode(state.mode);
  });
  tabs.forEach(tab => tab.addEventListener('click', () => { state.lang = tab.dataset.lang; showPath(); }));
  $('[data-speed]').addEventListener('change', () => { if (state.mode === 'demo') setMode('demo'); });
  document.addEventListener('keydown', event => {
    if (padEl.hidden) return;
    if (event.key === 'ArrowRight') $('[data-next]').click();
    else if (event.key === 'ArrowLeft') $('[data-prev]').click();
  });

  function stepStroke() {                                         // xem từng nét một: mỗi lần bấm vẽ thêm một nét
    const it = state.level.items[state.i];
    if (state.mode !== 'demo' || state.stroke < 0 || state.stroke >= it.n - 1) {
      setMode('demo', {animate: false});
      state.writer.hideCharacter();
      state.stroke = -1;
    }
    state.stroke++;
    state.writer.animateStroke(state.stroke);
    $('[data-strokeinfo]').textContent = `Nét ${state.stroke + 1}/${it.n}`;
  }

  window.addEventListener('resize', () => { if (!padEl.hidden && state.writer && state.mode === 'demo') createWriter().animateCharacter(); });
  showPath();
}
