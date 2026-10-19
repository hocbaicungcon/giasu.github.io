// Visual (WYSIWYG) equation input for the "Soạn thảo" tab: a MathLive <math-field> kept in sync with the LaTeX box.
// MathLive (MIT, vendor/mathlive) is loaded on first use. The LaTeX textarea stays the single source of truth for
// everything else (preview, insert into Word), so the two modes can be switched at any time.

let libPromise = null;
function loadMathlive() {
  libPromise = libPromise || import('./vendor/mathlive/mathlive.min.mjs').then((m) => {
    const MF = m.MathfieldElement;
    MF.fontsDirectory = new URL('./vendor/mathlive/fonts', import.meta.url).href;
    MF.soundsDirectory = null;
    MF.plonkSound = null; MF.keypressSound = null;
    return MF;
  });
  return libPromise;
}

/** Palette snippet ("@" = caret / selected text, {} = empty argument) -> MathLive insert string with placeholders. */
export function toMathliveInsert(snippet, hasSelection = false) {
  // '#@' wraps the selection; with nothing selected the caret goes to an empty slot (not the atom before the caret)
  let s = snippet.includes('@') ? snippet.replace('@', hasSelection ? '#@' : '#?') : snippet;
  s = s.replace(/\{\}/g, '{#?}').replace(/&\s*(?=(&|\\\\|\\end))/g, '& #? ').replace(/\\\\\s*(?=(&|\\end))/g, '\\\\ #? ');
  return s;
}

/** MathLive's LaTeX -> plain LaTeX for the rest of the add-in (placeholders removed). */
export function cleanLatex(v) {
  return String(v || '').replace(/\\placeholder(\[[^\]]*\])?\{[^{}]*\}/g, '').replace(/\s+/g, ' ').trim();
}

export function createVisualEditor({ host, textarea, onChange }) {
  let mf = null, on = false, busy = false;
  async function ensure() {
    if (mf) return mf;
    const MF = await loadMathlive();
    mf = new MF();
    mf.setAttribute('math-virtual-keyboard-policy', 'manual');
    mf.setAttribute('aria-label', 'Nhập công thức trực quan');
    mf.smartFence = true;
    mf.addEventListener('input', () => {
      busy = true;
      textarea.value = cleanLatex(mf.getValue('latex'));
      busy = false;
      onChange();
    });
    host.appendChild(mf);
    return mf;
  }
  const pull = () => {   // textarea -> math-field (after the text changed from outside: load from Word, clear, palette in text mode)
    if (!on || !mf || busy) return;
    if (cleanLatex(mf.getValue('latex')) !== textarea.value.trim()) mf.setValue(textarea.value, { silenceNotifications: true });
  };
  return {
    active: () => on,
    pull,
    async setActive(v) {
      on = v; host.hidden = !v; textarea.hidden = v;
      if (v) { await ensure(); mf.setValue(textarea.value, { silenceNotifications: true }); mf.focus(); }
    },
    async insert(snippet) {
      await ensure();
      const hasSel = (mf.selection?.ranges || []).some(([a, b]) => a !== b);
      mf.insert(toMathliveInsert(snippet, hasSel), { format: 'latex', selectionMode: 'placeholder', focus: true });
    },
    focus: () => mf && mf.focus(),
  };
}
