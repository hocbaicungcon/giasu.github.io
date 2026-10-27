/* credit: giasu.ai.vn */
// Giao diện Trợ lý Gia Sư: nạp lười khi mở khung; mọi chữ đưa vào trang bằng textContent; không lưu gì vào máy.
const host = document.querySelector('.study-help');
const mount = host && host.querySelector('[data-tutor]');
if (host && mount) {
  const root = new URL('../', import.meta.url);
  let engine = null, posts = null, built = false;
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const SAMPLES = ['345 + 678', '2 + 3 × 4', '1/2 + 1/3', 'Đổi 3 m ra cm', 'Bảng nhân 7'];

  async function loadEngine() {
    if (!engine) engine = await import('./tutor-engine.js');
    return engine;
  }
  async function loadPosts() {
    if (posts) return posts;
    try { const r = await fetch(new URL('assets/posts.json', root)); posts = r.ok ? await r.json() : []; } catch { posts = []; }
    return posts;
  }

  function build() {
    built = true;
    mount.textContent = '';
    const log = el('div', 'tutor-log'); log.setAttribute('role', 'log'); log.setAttribute('aria-live', 'polite'); log.setAttribute('aria-label', 'Cuộc trò chuyện với trợ lý');
    const chips = el('div', 'tutor-chips');
    const form = el('form', 'tutor-form'); form.autocomplete = 'off';
    const input = el('input'); input.type = 'text'; input.maxLength = 400; input.placeholder = 'Gõ phép tính hoặc đề bài…'; input.setAttribute('aria-label', 'Đề bài của em');
    const send = el('button', null, 'Hỏi'); send.type = 'submit';
    form.append(input, send);
    mount.append(log, chips, form);

    const bubble = (cls) => { const b = el('div', 'tutor-msg ' + cls); log.append(b); return b; };
    const scroll = () => { log.scrollTop = log.scrollHeight; };
    const say = (text) => { bubble('tutor-me').textContent = text; scroll(); };
    const botText = (title, text) => { const b = bubble('tutor-bot'); if (title) b.append(el('strong', null, title)); if (text) b.append(el('p', null, text)); scroll(); return b; };
    const lines = (parent, items) => items.forEach((x) => parent.append(typeof x === 'string' ? el('p', null, x) : el('pre', null, x.pre)));

    function render(r) {
      const b = botText(r.title, r.intro);
      if (!r.hints.length && !r.solution.length && r.answer == null) return;
      const body = el('div', 'tutor-body'), actions = el('div', 'tutor-actions');
      b.append(body, actions);
      let shown = 0;
      if (r.hints.length) {
        const hb = el('button', null, '💡 Gợi ý'); hb.type = 'button';
        hb.onclick = () => {
          if (shown < r.hints.length) { const h = el('p', 'tutor-hint', `Gợi ý ${shown + 1}: ${r.hints[shown]}`); body.append(h); shown++; }
          if (shown >= r.hints.length) { hb.disabled = true; hb.textContent = '💡 Hết gợi ý'; }
          scroll();
        };
        actions.append(hb);
      }
      if (r.solution.length || r.answer != null) {
        const sb = el('button', null, r.hints.length ? 'Xem lời giải' : 'Xem chi tiết'); sb.type = 'button';
        sb.onclick = () => {
          const s = el('div', 'tutor-solution'); lines(s, r.solution);
          if (r.answer != null) s.append(el('p', 'tutor-answer', 'Đáp số: ' + r.answer));
          body.append(s); sb.disabled = true; scroll();
        };
        actions.append(sb);
      }
      if (!r.hints.length && r.solution.length && r.kind !== 'error') actions.querySelector('button')?.click();
    }

    async function fallback(q) {
      const b = botText('Mình chưa hiểu đề này', 'Em thử gõ rõ hơn, ví dụ “345 + 678”, “chu vi hình vuông cạnh 6 cm”. Hoặc xem các bài này nhé:');
      const list = (await loadPosts()), found = engine.suggestLessons(list, q);
      const ul = el('ul', 'tutor-links');
      for (const p of found) { const a = el('a', null, p.title); a.href = new URL(`bai-viet/${p.slug}.html`, root).href; ul.append(el('li')); ul.lastChild.append(a); }
      const li = el('li'), a = el('a', null, 'Chọn bài luyện tập →'); a.href = new URL('luyen-tap/', root).href; li.append(a); ul.append(li);
      b.append(ul); scroll();
    }

    async function ask(q) {
      q = q.trim(); if (!q) return;
      say(q); input.value = '';
      try {
        await loadEngine();
        const r = engine.tutorReply(q);
        if (r) render(r); else await fallback(q);
      } catch { botText('Có lỗi nhỏ', 'Trợ lý đang gặp sự cố. Em thử lại sau nhé.'); }
    }
    form.addEventListener('submit', (e) => { e.preventDefault(); ask(input.value); });
    SAMPLES.forEach((s) => { const c = el('button', null, s); c.type = 'button'; c.onclick = () => ask(s); chips.append(c); });
    botText('Chào em!', 'Mình là Robot Gia Sư. Em gõ bài toán, mình gợi ý từng bước để em tự làm, rồi mới xem lời giải nhé.');
    loadEngine().catch(() => {});
  }

  const open = () => { if (host.open && !built) build(); };
  host.addEventListener('toggle', () => { open(); if (host.open) host.querySelector('input')?.focus({ preventScroll: true }); });
  open();
}
