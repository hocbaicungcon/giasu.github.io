// Autocomplete + editing helpers for the LaTeX box: suggestions while typing "\frac", Vietnamese words ("tichphan"),
// templates with Tab stops, automatic closing brackets, skip-over of the closing bracket.
import { suggest, expandSnippet, tokenAt, nextStop, glyphOf } from '../src/latex-suggest.js';

const USAGE_KEY = 'texcraft-addin-latex-usage';
const PAIRS = { '(': ')', '[': ']', '{': '}' };
const CLOSERS = new Set([')', ']', '}']);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function caretCoordinates(el, pos) {   // where the caret is, relative to the viewport
  const div = document.createElement('div');
  const cs = getComputedStyle(el);
  for (const p of ['boxSizing', 'width', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'padding', 'borderWidth', 'borderStyle', 'whiteSpace', 'wordWrap', 'tabSize']) div.style[p] = cs[p];
  div.style.position = 'absolute'; div.style.visibility = 'hidden'; div.style.whiteSpace = 'pre-wrap'; div.style.wordWrap = 'break-word'; div.style.top = '0'; div.style.left = '-9999px';
  div.textContent = el.value.slice(0, pos);
  const span = document.createElement('span');
  span.textContent = el.value.slice(pos) || '.';
  div.appendChild(span);
  document.body.appendChild(div);
  const r = el.getBoundingClientRect();
  const x = r.left + span.offsetLeft - el.scrollLeft, y = r.top + span.offsetTop - el.scrollTop + (parseFloat(cs.lineHeight) || 16);
  div.remove();
  return { x, y };
}

export function attachLatexAutocomplete(field, { onChange = () => {} } = {}) {
  if (!field) return;
  let usage = {};
  try { usage = JSON.parse(localStorage.getItem(USAGE_KEY) || '{}') || {}; } catch { usage = {}; }
  const popup = document.createElement('div');
  popup.className = 'ac-popup';
  popup.hidden = true;
  document.body.appendChild(popup);
  let items = [], index = 0, token = null, composing = false;

  const hide = () => { popup.hidden = true; items = []; token = null; };
  const fire = () => { field.dispatchEvent(new Event('input', { bubbles: true })); onChange(); };
  const render = () => {
    popup.innerHTML = items.map((e, i) => `<div class="ac-item${i === index ? ' sel' : ''}" data-i="${i}"><span class="ac-glyph">${esc(glyphOf(e[0]))}</span><code>${esc(e[0])}</code><span class="ac-desc">${esc(e[2])}</span></div>`).join('') +
      '<div class="ac-hint">↑↓ chọn · Tab/Enter nhận · Esc đóng</div>';
    const sel = popup.querySelector('.sel');
    if (sel) sel.scrollIntoView({ block: 'nearest' });
  };
  const place = () => {
    const { x, y } = caretCoordinates(field, token ? token.start : field.selectionStart);
    popup.hidden = false;
    const w = popup.offsetWidth || 260, h = popup.offsetHeight || 200;
    popup.style.left = Math.max(4, Math.min(x, window.innerWidth - w - 4)) + 'px';
    popup.style.top = (y + h > window.innerHeight - 4 ? Math.max(4, y - h - 22) : y) + 'px';
  };
  const show = (force = false) => {
    if (composing) return;
    const caret = field.selectionStart;
    if (field.selectionEnd !== caret) { hide(); return; }
    const t = tokenAt(field.value, caret);
    if (!t && !force) { hide(); return; }
    token = t || { start: caret, token: '', bare: false };
    const list = suggest(token.token, { usage, bare: token.bare });
    if (!list.length || (token.bare && !force && list[0] && list[0][0].toLowerCase().replace(/^\\/, '') === token.token.toLowerCase() && list.length === 1 && false)) { hide(); return; }
    items = list; index = 0;
    render(); place();
  };
  const accept = (i = index) => {
    const entry = items[i];
    if (!entry || !token) return false;
    const { text, caret } = expandSnippet(entry[1]);
    const v = field.value, end = field.selectionStart;
    const before = v.slice(0, token.start), after = v.slice(end);
    field.value = before + text + after;
    const pos = before.length + caret;
    field.setSelectionRange(pos, pos);
    usage[entry[0]] = (usage[entry[0]] || 0) + 1;
    try { localStorage.setItem(USAGE_KEY, JSON.stringify(usage)); } catch { /* ignore */ }
    hide();
    fire();
    field.focus();
    return true;
  };

  field.addEventListener('compositionstart', () => { composing = true; });
  field.addEventListener('compositionend', () => { composing = false; show(); });
  field.addEventListener('input', (ev) => { if (!ev.isTrusted && popup.hidden) return; show(); });
  field.addEventListener('click', () => hide());
  field.addEventListener('blur', () => setTimeout(hide, 150));
  field.addEventListener('keydown', (ev) => {
    if (composing) return;
    if (!popup.hidden && items.length) {
      if (ev.key === 'ArrowDown') { ev.preventDefault(); index = (index + 1) % items.length; render(); return; }
      if (ev.key === 'ArrowUp') { ev.preventDefault(); index = (index - 1 + items.length) % items.length; render(); return; }
      if ((ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) ) { hide(); return; }   // Ctrl/Cmd+Enter = update Word, handled by the page
      if (ev.key === 'Enter' || ev.key === 'Tab') { ev.preventDefault(); accept(); return; }
      if (ev.key === 'Escape') { ev.preventDefault(); hide(); return; }
    }
    if (ev.ctrlKey && ev.code === 'Space') { ev.preventDefault(); show(true); return; }
    if (ev.key === 'Tab' && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {   // jump between the empty {} of a template
      const to = nextStop(field.value, field.selectionStart, ev.shiftKey);
      if (to >= 0) { ev.preventDefault(); field.setSelectionRange(to, to); }
      return;
    }
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    const { selectionStart: s, selectionEnd: e, value: v } = field;
    if (PAIRS[ev.key]) {   // ( [ {  -> insert the pair, wrap a selection
      ev.preventDefault();
      const close = PAIRS[ev.key];
      field.value = v.slice(0, s) + ev.key + v.slice(s, e) + close + v.slice(e);
      const pos = s === e ? s + 1 : e + 2;
      field.setSelectionRange(s === e ? pos : s + 1, s === e ? pos : e + 1);
      hide(); fire();
      return;
    }
    if (CLOSERS.has(ev.key) && s === e && v[s] === ev.key) { ev.preventDefault(); field.setSelectionRange(s + 1, s + 1); return; }   // skip over the closing bracket
    if (ev.key === 'Backspace' && s === e && s > 0 && PAIRS[v[s - 1]] === v[s]) {   // delete an empty pair together
      ev.preventDefault();
      field.value = v.slice(0, s - 1) + v.slice(s + 1);
      field.setSelectionRange(s - 1, s - 1);
      hide(); fire();
    }
  });
  popup.addEventListener('mousedown', (ev) => {
    const row = ev.target.closest('.ac-item');
    if (row) { ev.preventDefault(); accept(Number(row.dataset.i)); }
  });
  window.addEventListener('scroll', hide, true);
}
