import {rebrandWidgetColors} from './lesson-figures.mjs';
import test from 'node:test';import assert from 'node:assert/strict';
import {renderLessonFigures} from './lesson-figures.mjs';
test('figures lose frames and use theme inks while retaining geometric data',()=>{
 const svg='<svg viewBox="0 0 480 220" style="background:#fff;border:1px solid;max-width:480px"><polygon fill="#fff" stroke="#2563eb" points="0,0 50,50 100,0"/><path stroke="#dc2626" d="M0 0L50 50" data-angle-size="20"/><text fill="#111827">A</text></svg>';
 const output=renderLessonFigures(svg);assert.match(output,/class="lesson-diagram"/);assert.doesNotMatch(output,/background:|border:/);assert.match(output,/max-width:480px/);assert.match(output,/fill="none"/);assert.match(output,/stroke="var\(--diagram-ink\)"/);assert.match(output,/stroke="var\(--diagram-coral\)"/);assert.match(output,/fill="var\(--diagram-label\)"/);assert.match(output,/data-angle-size="20"/);assert.match(output,/points="0,0 50,50 100,0"/);
});
test('formula accents and small UI icons remain unchanged',()=>{
 const math='<span class="katex"><span><svg viewBox="0 0 1062 239"><path fill="black"/></svg></span></span>';
 const icon='<svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#fff"/></svg>';
 assert.equal(renderLessonFigures(math+icon),math+icon);
});

test('opaque RGB lines and text keep their contrast; only translucent areas use a wash',()=>{
 const output=renderLessonFigures('<svg viewBox="0 0 480 220"><line stroke="rgb(37,99,235)"/><text fill="rgb(0,0,0)">A</text><polygon fill="rgba(37,99,235,0.07)"/></svg>');
 assert.match(output,/stroke="var\(--diagram-ink\)"/);assert.match(output,/fill="var\(--diagram-label\)"/);assert.match(output,/fill="var\(--diagram-wash\)"/);
});

test('widget palettes are mapped to brand colours and low-contrast text accents are darkened',()=>{
 const html=rebrandWidgetColors('<div style="background:#eff6ff;border:1px solid #bfdbfe;color:#10b981"><b style="color:#2563eb">x</b></div><pre><code>#2563eb</code></pre>');
 assert.match(html,/background:#e8f5ee/);assert.match(html,/border:1px solid #b7dcc8/);assert.match(html,/color: #047857/);assert.match(html,/color: #087858/);
 assert.match(html,/<pre><code>#2563eb<\/code><\/pre>/,'code samples keep their original text');
});
