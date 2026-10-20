// LMS export: multiple-choice questions of the open document -> one self-contained interactive HTML page
// (practice mode with instant feedback, or test mode with timer and scoring). Maths is written as LaTeX and typeset by KaTeX.
import { parseBody, analyze, answersOf, paragraphText } from './exam.js';
import { convertMathTypeInPackage, splitParts } from './ooxml.js';
import { ommlToLatex } from './omml.js';
import { unescapeXml } from './xml.js';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const RE_LABEL = /^\s*(?:C[âa]u|B[àa]i)\s*\d+\s*(?:[.:)\-–—]|\s)?\s*/iu;

/** Picture parts of the package: relationship id -> data URI (formats a browser can show only). */
function imageMap(pkg) {
  const parts = splitParts(pkg), map = new Map();
  const rels = parts.get('/word/_rels/document.xml.rels');
  if (!rels) return map;
  for (const tag of rels.body.match(/<Relationship\b[^>]*>/g) || []) {
    const id = /\bId="([^"]+)"/.exec(tag), target = /\bTarget="([^"]+)"/.exec(tag);
    if (!id || !target || /TargetMode="External"/.test(tag)) continue;
    const part = parts.get(target[1].startsWith('/') ? target[1] : '/word/' + target[1].replace(/^\.\//, ''));
    if (!part) continue;
    const type = /pkg:contentType="([^"]+)"/.exec(part.attrs), bin = /<pkg:binaryData>([\s\S]*?)<\/pkg:binaryData>/.exec(part.body);
    if (type && bin && /^image\/(png|jpe?g|gif|svg\+xml|webp|bmp)$/.test(type[1])) map.set(id[1], `data:${type[1]};base64,${bin[1].replace(/\s+/g, '')}`);
  }
  return map;
}

function runHtml(run, images, skip) {
  if (/<w:object\b|<w:pict\b|<mc:AlternateContent|<w:drawing/.test(run)) {
    if (skip.n) return '';
    const blip = /<a:blip\b[^>]*r:embed="([^"]+)"/.exec(run) || /<v:imagedata\b[^>]*r:id="([^"]+)"/.exec(run);
    const src = blip && images.get(blip[1]);
    if (src) {
      const ext = /<wp:extent cx="(\d+)"/.exec(run);
      const w = ext ? Math.round(Number(ext[1]) / 9525) : 0;
      return `<img src="${src}" alt=""${w ? ` style="max-width:100%;width:${w}px"` : ''}>`;
    }
    return '<span class="miss">[hình]</span>';
  }
  const rpr = /<w:rPr>([\s\S]*?)<\/w:rPr>/.exec(run)?.[1] || '';
  const on = (tag) => new RegExp(`<w:${tag}\\b(?![^>]*w:val="(?:0|false|none)")`).test(rpr);
  const sup = /<w:vertAlign w:val="superscript"/.test(rpr), sub = /<w:vertAlign w:val="subscript"/.test(rpr);
  let out = '';
  for (const m of run.matchAll(/<w:t\b[^>]*>([^<]*)<\/w:t>|<w:tab\/>|<w:br\b[^>]*\/>/g)) {
    if (m[0].startsWith('<w:tab')) { out += ' '; continue; }
    if (m[0].startsWith('<w:br')) { out += '<br>'; continue; }
    let t = unescapeXml(m[1]);
    if (skip.n) { const cut = Math.min(skip.n, t.length); t = t.slice(cut); skip.n -= cut; }
    out += esc(t);
  }
  if (!out) return '';
  if (on('b')) out = `<b>${out}</b>`;
  if (on('i')) out = `<i>${out}</i>`;
  if (on('u')) out = `<u>${out}</u>`;
  if (sup) out = `<sup>${out}</sup>`;
  if (sub) out = `<sub>${out}</sub>`;
  return out;
}

/** Children of a paragraph -> HTML (maths as \( \) / \[ \]). skip.n: number of leading characters to drop (the "Câu 1." label). */
function childrenHtml(children, images, skip = { n: 0 }) {
  let out = '';
  for (const c of children) {
    if (typeof c !== 'string') continue;
    if (/^<m:oMath(Para)?[\s>]/.test(c)) {
      if (skip.n) { skip.n--; continue; }
      try { const [tex, display] = ommlToLatex(c); out += display ? `\\[${esc(tex)}\\]` : `\\(${esc(tex)}\\)`; } catch { out += '<span class="miss">[công thức]</span>'; }
    } else if (/^<w:r[\s>]/.test(c)) out += runHtml(c, images, skip);
    else if (/^<w:hyperlink[\s>]/.test(c)) out += childrenHtml(c.replace(/^<w:hyperlink\b[^>]*>/, '').replace(/<\/w:hyperlink>$/, '').match(/<w:r[\s>][\s\S]*?<\/w:r>/g) || [], images, skip);
  }
  return out.replace(/(<br>)+$/, '').trim();
}

const paraHtml = (b, images, skipLen = 0) => (b.kind === 'p' ? childrenHtml(b.children, images, { n: skipLen }) : '');

/**
 * Questions of a document package: [{number, part, kind: 'mc'|'tf'|'short', stem, options: [{letter, html}], statements: [{letter, html}], answer}].
 * answer: 'A'..'D' (mc), ['Đ'|'S', ...] (tf), text (short) or null when the document does not mark it.
 */
export function extractQuiz(pkg0) {
  const conv = convertMathTypeInPackage(pkg0, { convertMathType: true, convertLatex: true, display: false });
  const pkg = conv.changed ? conv.pkg : pkg0;
  const images = imageMap(pkg), model = parseBody(pkg), a = analyze(model), answers = answersOf(model, a);
  const questions = [], warnings = [];
  for (const part of a.parts) {
    for (const q of part.questions) {
      const ans = answers.find((x) => x.part === part.title && x.number === q.number);
      const kind = part.kind === 'tf' ? 'tf' : part.kind === 'short' ? 'short' : 'mc';
      const stemBlocks = model.blocks.slice(q.start, q.stemEnd);
      const html = stemBlocks.map((b, i) => paraHtml(b, images, i === 0 ? (RE_LABEL.exec(paragraphText(b)) || [''])[0].length : 0)).filter(Boolean);
      const item = { number: q.number, part: part.title, kind, stem: html.map((h) => `<p>${h}</p>`).join(''), options: [], statements: [], answer: null };
      if (kind === 'mc') {
        item.options = (q.options || []).map((o) => ({ letter: o.letter, html: childrenHtml(o.content, images, { n: 0 }).replace(/^\s*[A-D]\s*[.)]\s*/, '') }));
        if (!item.options.length) { warnings.push(`Câu ${q.number}: không thấy phương án A–D`); }
        if (ans?.value && ans.value.length === 1) item.answer = ans.value;
        else if (ans?.value) warnings.push(`Câu ${q.number}: có nhiều phương án được đánh dấu`);
      } else if (kind === 'tf') {
        item.statements = q.statements.map((s) => {
          const b = model.blocks[s.block];
          const li = b.children.findIndex((c) => /^<w:r[\s>]/.test(c) && /[a-d]\s*\)/.test(c.replace(/<[^>]+>/g, '')));
          const rest = li >= 0 ? b.children.slice(li + 1) : b.children;
          return { letter: s.letter, html: childrenHtml(rest, images, { n: 0 }).replace(/^\s*[a-d]\s*\)\s*/, '') };
        });
        if (ans?.tf) item.answer = ans.tf;
      } else if (ans?.value) item.answer = String(ans.value).trim();
      if (item.answer === null && !(kind === 'mc' && !item.options.length)) warnings.push(`Câu ${q.number}: chưa có đáp án`);
      questions.push(item);
    }
  }
  return { questions, warnings };
}

export const DEFAULT_LMS = { title: 'BÀI TRẮC NGHIỆM', mode: 'practice', minutes: 0, shuffleQ: false, shuffleO: false, askName: true, showKey: true };

const KATEX = 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist';
/** The interactive page. quiz: from extractQuiz; opts: see DEFAULT_LMS. */
export function buildQuizHtml(quiz, opts = {}) {
  const o = { ...DEFAULT_LMS, ...opts };
  const data = { title: o.title, mode: o.mode, minutes: Math.max(0, Number(o.minutes) || 0), shuffleQ: o.shuffleQ, shuffleO: o.shuffleO, askName: o.askName, showKey: o.showKey, questions: quiz.questions };
  const json = JSON.stringify(data).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, (c) => '\\u' + c.charCodeAt(0).toString(16));
  return `<!DOCTYPE html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(o.title)}</title>
<link rel="stylesheet" href="${KATEX}/katex.min.css">
<style>${PAGE_CSS}</style></head>
<body><div id="app"></div>
<script type="application/json" id="quiz-data">${json}</script>
<script defer src="${KATEX}/katex.min.js"></script>
<script defer src="${KATEX}/contrib/auto-render.min.js"></script>
<script>${PAGE_JS}</script>
</body></html>`;
}

const PAGE_CSS = `
:root{--bg:#f6f8fa;--card:#fff;--fg:#1c2330;--muted:#667085;--line:#d9dee7;--accent:#1f6f4f;--ok:#1a7f45;--okbg:#e4f5ea;--bad:#c0362c;--badbg:#fdeaea;--sel:#e8f0fe}
@media(prefers-color-scheme:dark){:root{--bg:#12161c;--card:#1b212b;--fg:#e6eaf0;--muted:#98a2b3;--line:#323b49;--accent:#4cc38a;--ok:#4cc38a;--okbg:#17352a;--bad:#ff7b72;--badbg:#3a1c1c;--sel:#22304a}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
#app{max-width:820px;margin:0 auto;padding:12px 14px 60px}
h1{font-size:1.4rem;margin:.6em 0 .2em}.muted{color:var(--muted)}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin:12px 0}
.bar{position:sticky;top:0;z-index:5;display:flex;gap:12px;align-items:center;justify-content:space-between;background:var(--card);border-bottom:1px solid var(--line);padding:8px 14px;margin:0 -14px}
.bar .prog{flex:1;height:8px;border-radius:4px;background:var(--line);overflow:hidden}.bar .prog i{display:block;height:100%;background:var(--accent);width:0}
button,input[type=text]{font:inherit}
button.pri{background:var(--accent);color:#fff;border:0;border-radius:8px;padding:8px 18px;cursor:pointer}button.sec{background:none;border:1px solid var(--line);color:var(--fg);border-radius:8px;padding:7px 14px;cursor:pointer}
input[type=text]{width:100%;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg)}
.q h3{margin:0 0 6px;font-size:1rem;color:var(--accent)}.q .stem p{margin:.3em 0}.q img{max-width:100%}
.opt{display:flex;gap:10px;align-items:flex-start;width:100%;text-align:left;background:none;color:var(--fg);border:1px solid var(--line);border-radius:10px;padding:8px 12px;margin:6px 0;cursor:pointer}
.opt:hover{background:var(--sel)}.opt .l{flex:0 0 1.7em;height:1.7em;border-radius:50%;border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:.9em}
.opt.sel{background:var(--sel);border-color:var(--accent)}.opt.sel .l{background:var(--accent);color:#fff;border-color:var(--accent)}
.opt.ok{background:var(--okbg);border-color:var(--ok)}.opt.bad{background:var(--badbg);border-color:var(--bad)}.locked .opt{cursor:default}
.tf{display:grid;grid-template-columns:1fr auto;gap:6px 10px;align-items:center;margin:8px 0;padding:6px 0;border-bottom:1px dashed var(--line)}
.tf .yn{display:flex;gap:6px}.tf .yn button{min-width:56px}.tf .yn .opt{margin:0;padding:5px 10px;justify-content:center}
.fb{margin-top:8px;font-weight:600}.fb.ok{color:var(--ok)}.fb.bad{color:var(--bad)}
.res{text-align:center}.res .score{font-size:2.4rem;font-weight:800;color:var(--accent)}
.miss{color:var(--muted);font-style:italic}.sel-q{display:flex;flex-wrap:wrap;gap:6px}.dot{width:30px;height:30px;border-radius:6px;border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center;font-size:.8rem;cursor:pointer;background:var(--card);color:var(--fg)}
.dot.done{background:var(--sel);border-color:var(--accent)}.dot.ok{background:var(--okbg);border-color:var(--ok)}.dot.bad{background:var(--badbg);border-color:var(--bad)}
`;

// Runs inside the exported page (not in the add-in). Kept as plain ES5-ish JavaScript.
const PAGE_JS = `
(function(){
var D=JSON.parse(document.getElementById('quiz-data').textContent),app=document.getElementById('app');
var TEST=D.mode==='test',st={name:'',started:false,t0:0,left:0,timer:null,done:false,items:[],ans:{},locked:{}};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function rnd(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function typeset(el){if(window.renderMathInElement)try{renderMathInElement(el||document.body,{delimiters:[{left:'\\\\[',right:'\\\\]',display:true},{left:'\\\\(',right:'\\\\)',display:false}],throwOnError:false})}catch(e){}}
window.addEventListener('load',function(){typeset()});
function norm(s){return String(s).toLowerCase().replace(/\\s+/g,'').replace(/,/g,'.').replace(/^[-−–]/,'-').replace(/−/g,'-')}
function prepare(){
  var qs=D.questions.map(function(q,i){return{q:q,id:i}});
  if(D.shuffleQ){var by={},order=[];qs.forEach(function(x){var k=x.q.part;if(!by[k]){by[k]=[];order.push(k)}by[k].push(x)});qs=[];order.forEach(function(k){qs=qs.concat(rnd(by[k]))})}
  st.items=qs.map(function(x){var q=x.q,opts=q.options.slice();if(D.shuffleO&&q.kind==='mc')opts=rnd(opts);return{id:x.id,q:q,opts:opts}});
}
function start(){
  if(D.askName){var v=document.getElementById('nm').value.trim();if(!v){document.getElementById('nm').focus();return}st.name=v}
  prepare();st.started=true;st.t0=Date.now();
  if(D.minutes>0){st.left=D.minutes*60;st.timer=setInterval(tick,1000)}
  renderQuiz();
}
function tick(){st.left--;var e=document.getElementById('clock');if(e)e.textContent=fmt(st.left);if(st.left<=0){clearInterval(st.timer);submit(true)}}
function fmt(s){s=Math.max(0,s);var m=Math.floor(s/60),r=s%60;return m+':'+(r<10?'0':'')+r}
function renderStart(){
  var h='<h1>'+esc(D.title)+'</h1><div class="card"><div class="muted">'+D.questions.length+' câu hỏi'+(D.minutes>0?' · thời gian '+D.minutes+' phút':'')+' · '+(TEST?'Chế độ kiểm tra: chấm điểm sau khi nộp bài':'Chế độ luyện tập: báo đúng/sai ngay sau mỗi câu')+'</div>';
  if(D.askName)h+='<p><input type="text" id="nm" placeholder="Họ và tên" autocomplete="name"></p>';
  h+='<p><button class="pri" id="go">Bắt đầu làm bài</button></p></div>';
  app.innerHTML=h;document.getElementById('go').onclick=start;
  var nm=document.getElementById('nm');if(nm)nm.onkeydown=function(e){if(e.key==='Enter')start()};
}
function qHtml(it,n){
  var q=it.q,h='<div class="card q" id="q'+it.id+'"><h3>Câu '+n+'</h3><div class="stem">'+q.stem+'</div><div class="body">';
  if(q.kind==='mc'){it.opts.forEach(function(o,i){h+='<button class="opt" data-q="'+it.id+'" data-l="'+o.letter+'"><span class="l">'+'ABCD'.charAt(i)+'</span><span>'+o.html+'</span></button>'})}
  else if(q.kind==='tf'){q.statements.forEach(function(s,i){h+='<div class="tf"><div><b>'+s.letter+')</b> '+s.html+'</div><div class="yn"><button class="opt" data-q="'+it.id+'" data-s="'+i+'" data-v="Đ">Đúng</button><button class="opt" data-q="'+it.id+'" data-s="'+i+'" data-v="S">Sai</button></div></div>'})}
  else{h+='<input type="text" class="sa" data-q="'+it.id+'" placeholder="Nhập đáp án" autocomplete="off">'+(TEST?'':' <button class="sec chk" data-q="'+it.id+'">Kiểm tra</button>')}
  return h+'</div><div class="fb"></div></div>';
}
function renderQuiz(){
  var h='<div class="bar"><b id="cnt"></b><div class="prog"><i id="pg"></i></div>'+(D.minutes>0?'<b id="clock">'+fmt(st.left)+'</b>':'')+(TEST?'<button class="pri" id="sub">Nộp bài</button>':'<button class="sec" id="fin">Xem kết quả</button>')+'</div>';
  var n=0,part=null;
  st.items.forEach(function(it){n++;if(it.q.part&&it.q.part!==part){part=it.q.part;h+='<h2 style="font-size:1.05rem;margin:18px 0 0">'+esc(part)+'</h2>'}h+=qHtml(it,n)});
  app.innerHTML=h;typeset(app);bind();progress();
  document.getElementById(TEST?'sub':'fin').onclick=function(){submit(false)};
}
function bind(){
  app.onclick=function(e){
    var b=e.target.closest('button');if(!b||st.done)return;
    var id=b.getAttribute('data-q');if(id===null)return;id=+id;var it=find(id);
    if(b.classList.contains('chk')){checkShort(it);return}
    if(st.locked[id])return;
    if(b.hasAttribute('data-l')){st.ans[id]=b.getAttribute('data-l');mark(it)}
    else if(b.hasAttribute('data-s')){var a=st.ans[id]||[];a[+b.getAttribute('data-s')]=b.getAttribute('data-v');st.ans[id]=a;mark(it)}
    if(!TEST&&isAnswered(it)&&it.q.kind!=='short')lockAndShow(it);
    progress();
  };
  app.oninput=function(e){var t=e.target;if(t.classList.contains('sa')){st.ans[+t.getAttribute('data-q')]=t.value;progress()}};
  app.onkeydown=function(e){if(e.key==='Enter'&&e.target.classList.contains('sa')&&!TEST){checkShort(find(+e.target.getAttribute('data-q')))}};
}
function find(id){for(var i=0;i<st.items.length;i++)if(st.items[i].id===id)return st.items[i]}
function isAnswered(it){var a=st.ans[it.id];if(a==null)return false;if(it.q.kind==='tf')return it.q.statements.every(function(_,i){return a[i]});return String(a).trim()!==''}
function mark(it){
  var card=document.getElementById('q'+it.id),a=st.ans[it.id];
  card.querySelectorAll('.opt').forEach(function(b){
    var on=b.hasAttribute('data-l')?a===b.getAttribute('data-l'):(a&&a[+b.getAttribute('data-s')]===b.getAttribute('data-v'));
    b.classList.toggle('sel',!!on)});
}
function checkShort(it){if(!isAnswered(it))return;lockAndShow(it)}
function lockAndShow(it){st.locked[it.id]=true;reveal(it,true)}
function score(it){ // 0..1 or null when the document has no key
  var q=it.q,a=st.ans[it.id];if(q.answer==null)return null;
  if(q.kind==='mc')return a===q.answer?1:0;
  if(q.kind==='short')return a!=null&&norm(a)===norm(q.answer)?1:0;
  var k=0;q.statements.forEach(function(_,i){if(a&&a[i]===q.answer[i])k++});return [0,.1,.25,.5,1][Math.min(4,Math.round(k/q.statements.length*4))];
}
function reveal(it,feedback){
  var card=document.getElementById('q'+it.id),q=it.q,a=st.ans[it.id],fb=card.querySelector('.fb');
  card.classList.add('locked');
  if(q.answer==null){fb.textContent='Câu này chưa có đáp án.';return}
  if(q.kind==='mc')card.querySelectorAll('.opt').forEach(function(b){var l=b.getAttribute('data-l');b.classList.remove('sel');if(l===q.answer)b.classList.add('ok');else if(l===a)b.classList.add('bad')});
  else if(q.kind==='tf')card.querySelectorAll('.opt').forEach(function(b){var i=+b.getAttribute('data-s'),v=b.getAttribute('data-v');b.classList.remove('sel');if(q.answer[i]===v)b.classList.add('ok');else if(a&&a[i]===v)b.classList.add('bad')});
  var s=score(it);
  if(D.showKey||feedback){fb.className='fb '+(s===1?'ok':'bad');
    fb.textContent=(s===1?'Chính xác!':s>0?'Đúng một phần.':'Chưa đúng.')+(q.kind==='short'&&s!==1?' Đáp án: '+q.answer:'')+(q.kind==='mc'&&s!==1?' Đáp án: '+shown(it):'')}
  typeset(card);
}
function shown(it){for(var i=0;i<it.opts.length;i++)if(it.opts[i].letter===it.q.answer)return 'ABCD'.charAt(i);return it.q.answer}
function progress(){
  var done=st.items.filter(isAnswered).length;
  document.getElementById('cnt').textContent=done+'/'+st.items.length+' câu';
  document.getElementById('pg').style.width=(100*done/st.items.length)+'%';
}
function submit(auto){
  if(st.done)return;
  var un=st.items.length-st.items.filter(isAnswered).length;
  if(!auto&&TEST&&un&&!confirm('Còn '+un+' câu chưa trả lời. Nộp bài?'))return;
  st.done=true;if(st.timer)clearInterval(st.timer);
  var sum=0,max=0;
  st.items.forEach(function(it){var s=score(it);if(s!==null){sum+=s;max++}reveal(it,false)});
  var pts=max?Math.round(sum/max*100)/10:0,secs=Math.round((Date.now()-st.t0)/1000);
  var r='<div class="card res"><div class="muted">'+(st.name?esc(st.name)+' · ':'')+'thời gian làm bài '+fmt(secs)+'</div><div class="score">'+pts+' / 10</div><div class="muted">'+Math.round(sum*100)/100+' / '+max+' câu tính điểm</div>'+
    '<p><button class="sec" id="again">Làm lại</button> <button class="sec" id="copy">Sao chép kết quả</button></p></div>';
  app.insertAdjacentHTML('afterbegin',r);window.scrollTo(0,0);
  var bar=app.querySelector('.bar');if(bar)bar.style.display='none';
  document.getElementById('again').onclick=function(){location.reload()};
  document.getElementById('copy').onclick=function(){var t=D.title+(st.name?' - '+st.name:'')+': '+pts+'/10 ('+fmt(secs)+')';if(navigator.clipboard)navigator.clipboard.writeText(t);this.textContent='Đã sao chép'};
}
renderStart();
})();
`;
