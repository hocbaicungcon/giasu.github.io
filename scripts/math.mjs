import katex from 'katex';

// Select the font before layout so accents use the actual glyph metrics.
export function renderMath(tex,options={}){
 const source=String(tex);
 const html=katex.renderToString(`\\mathsf{${source}\n}`,{...options,macros:{...options.macros,"\\mathrm":"\\mathsf","\\textrm":"\\textsf","\\textnormal":"\\textsf","\\text":"\\textsf"}});
 const escaped=source.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'}[c]));
 return html.replace(/(<annotation encoding="application\/x-tex">)[\s\S]*?(<\/annotation>)/,(_,start,end)=>start+escaped+end);
}
