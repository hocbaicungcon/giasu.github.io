/* credit: giasu.ai.vn */
import {createHash} from 'node:crypto';
import {escapeHTML} from './interactive.mjs';
export const plainText=html=>String(html).replace(/<math\b[\s\S]*?<\/math>/gi,'').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
export function lessonActivities(post){
 if(post.type!=='Bài học')return [];
 const source=post.html.replace(/<(form|script|style|pre|svg)\b[\s\S]*?<\/\1>/gi,'');
 const headings=[...source.matchAll(/<h[23]\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/g)].map(m=>({index:m.index,id:m[1],title:plainText(m[2])}));
 const candidates=[];
 for(const m of source.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)){
  const html=m[1],text=plainText(html);
  if(text.length<(/<strong>/.test(html)?25:60)||text.length>650||/<(?:a|img|iframe|button|input)\b/i.test(html))continue;
  const heading=headings.filter(h=>h.index<m.index).at(-1);
  if(/đáp án|hướng dẫn chấm|barem|lời giải|kiểm tra \d+ phút/i.test(heading?.title||''))continue;
  let target=null,masked=html;
  for(const strong of html.matchAll(/<strong>([\s\S]*?)<\/strong>/g)){
   const phrase=plainText(strong[1]);
   if(phrase.length<5||phrase.length>65||phrase.split(/\s+/).length>10||/<|\d|[=:]/.test(phrase)||/katex/.test(strong[1])||/^(lời giải|ví dụ|bài toán|chú ý|định lý|định nghĩa|trả lời|chứng minh|câu |bước |lưu ý)/i.test(phrase))continue;
   target=phrase;masked=html.replace(strong[0],'<span class="recall-gap" aria-label="Cụm từ cần nhớ">…</span>');break;
  }
  candidates.push({id:createHash('sha256').update(html).digest('hex').slice(0,12),kind:target?'cloze':'recall',title:heading?.title||post.category,anchor:heading?.id||'',html,masked,target,sourceKind:'article'});
 }
 // Vocabulary and reference lessons often teach through tables rather than paragraphs.
 if(candidates.length<4)for(const row of source.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)){
  const section=[...source.slice(0,row.index).matchAll(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/g)].at(-1);
  if(/đáp án|hướng dẫn chấm|barem|lời giải|kiểm tra \d+ phút/i.test(plainText(section?.[1]||'')))continue;
  const cells=[...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)].map(m=>m[1]);
  if(cells.length<2)continue;
  const numericFirst=!/\p{L}/u.test(plainText(cells[0]));
  const title=numericFirst?`Mục ${plainText(cells[0])} · ${plainText(cells[1])}`:plainText(cells[0]),text=plainText(cells.slice(numericFirst?2:1).join(' '));
  if(!/\p{L}/u.test(numericFirst?text:title)||title.length>100||text.length<(numericFirst&&cells.length===3?1:15)||text.length>700)continue;
  const html=cells.slice(numericFirst?2:1).map(cell=>`<p>${cell}</p>`).join('');
  candidates.push({id:createHash('sha256').update(row[0]).digest('hex').slice(0,12),kind:'recall',title,anchor:'',html,masked:html,target:null,sourceKind:'article'});
 }
 if(!candidates.length)for(const link of post.html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)){
  const title=plainText(link[2]),href=plainText(link[1]);
  if(title.length<4||title.length>160||!/^https?:|^\/assets\//.test(href))continue;
  const html=`<p>${escapeHTML(post.description)}</p><p><a href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">Mở tài liệu: ${escapeHTML(title)}</a></p>`;
  candidates.push({id:createHash('sha256').update(href).digest('hex').slice(0,12),kind:'resource',title,anchor:'',html,masked:html,target:null,sourceKind:'resource'});
 }
 // Prefer actual highlighted concepts, then spread cards across distinct sections.
 candidates.sort((a,b)=>Number(b.kind==='cloze')-Number(a.kind==='cloze'));
 const selected=[],used=new Set();
 for(const card of candidates){if(used.has(card.title))continue;selected.push(card);used.add(card.title);if(selected.length===4)break;}
 if(!selected.length)selected.push({id:'overview',kind:'recall',title:post.title,anchor:'',html:escapeHTML(post.description),masked:escapeHTML(post.description),target:null,sourceKind:'description'});
 return selected;
}
export function renderLessonPractice(post,cards){
 if(!cards.length)return '';
 const data=JSON.stringify({slug:post.slug,cards}).replace(/</g,'\\u003c');
 return `<section class="lesson-practice" id="lesson-practice" data-lesson-practice aria-label="Tự kiểm tra bài học"><div class="practice-heading"><div><span class="practice-kicker">NHỚ LẠI · ĐỐI CHIẾU · ÔN TẬP</span><h2>Tự kiểm tra kiến thức</h2></div><span class="practice-position" aria-live="polite"></span></div><p class="practice-note">Các thẻ lấy từ nội dung bài học. Với câu điền khuyết, dùng cụm từ gốc của đoạn trích; với thẻ nhớ lại, em tự đối chiếu và đánh giá.</p><div class="practice-card"></div><div class="practice-navigation"><button type="button" data-practice-prev>← Thẻ trước</button><button type="button" data-practice-next>Thẻ tiếp →</button><button type="button" data-practice-reset>Làm lại</button></div><p class="practice-progress" role="status" aria-live="polite"></p><noscript>Bật JavaScript để ôn tập với thẻ nhớ lại và câu điền khuyết.</noscript><script type="application/json" data-practice-config>${data}</script></section>`;
}
