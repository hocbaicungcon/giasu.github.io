/* Match complete mathematical phrases; ambiguous prose stays unhighlighted. */
export const normalizeGlossaryText=s=>s.normalize('NFC').toLocaleLowerCase('vi').replace(/\s+/g,' ').trim();
const ambiguous=new Set(['điểm','đỉnh','cạnh','đoạn','khoảng','khuyên']);
const escapeRegex=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
export function createGlossaryMatcher(terms){
 const aliases=new Map();for(const term of terms)for(const raw of term.aliases){const alias=normalizeGlossaryText(raw);if(!ambiguous.has(alias)&&!aliases.has(alias))aliases.set(alias,term.id);}
 const phrases=[...aliases.keys()].sort((a,b)=>b.length-a.length);
 const pattern=phrases.length?new RegExp(`(?<![\\p{L}\\p{N}_])(?:${phrases.map(s=>escapeRegex(s).replace(/\s+/g,'\\s+')).join('|')})(?![\\p{L}\\p{N}_])`,'giu'):null;
 return text=>{
  if(!pattern)return [];pattern.lastIndex=0;
  return [...text.matchAll(pattern)].filter(match=>{
   const alias=normalizeGlossaryText(match[0]),after=normalizeGlossaryText(text.slice(match.index+match[0].length)),before=normalizeGlossaryText(text.slice(0,match.index));
   if(alias==='số đối'&&/^(tượng|tác)\b/u.test(after))return false;
   if(alias==='mẫu số'&&/^liệu\b/u.test(after))return false;
   if(alias==='tam giác đều'&&(/^(vuông|cân|nhọn|tù)\b/u.test(after)||(/(hai|các|những)\s*$/u.test(before)&&/^(có|phải|bằng|đồng dạng)\b/u.test(after))))return false;
   if(alias==='trọng tâm'&&/(kiến thức|nội dung|vấn đề|bài học|dạng toán)\s*$/u.test(before))return false;
   return true;
  }).map(match=>({index:match.index,text:match[0],id:aliases.get(normalizeGlossaryText(match[0]))}));
 };
}
