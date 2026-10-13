/* credit: giasu.ai.vn */
import fs from 'node:fs';
import path from 'node:path';

// Source modules stay editable; Pages receives one stylesheet without extra requests.
export function bundleStylesheet(entry, ancestors = new Set()) {
  const filename = path.resolve(entry);
  if (ancestors.has(filename)) throw new Error(`Circular CSS import: ${filename}`);
  const stack = new Set(ancestors).add(filename);
  return fs.readFileSync(filename, 'utf8').replace(
    /@import\s+url\(["']([^"']+)["']\);/g,
    (_, relative) => {
      const imported = path.resolve(path.dirname(filename), relative);
      if (path.dirname(imported) !== path.dirname(filename)) {
        throw new Error(`CSS modules must share the asset directory: ${relative}`);
      }
      return bundleStylesheet(imported, stack);
    },
  );
}

export function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    // A space before :is/:not/:has can be a descendant combinator.
    .replace(/\s*([\{\};,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

// Migration helper for app-specific rules in the shared stylesheet.
export function scopeCss(css, scope='.grading-page') {
 const splitSelectors=value=>{let depth=0,start=0,result=[];for(let i=0;i<value.length;i++){if('(['.includes(value[i]))depth++;if(')]'.includes(value[i]))depth--;if(value[i]===','&&!depth){result.push(value.slice(start,i));start=i+1;}}result.push(value.slice(start));return result;};
 const selector=value=>{value=value.trim();if(/^(:root|body)\b/.test(value))return value.replace(/^(:root|body)/,scope);if(/^html\b/.test(value))return value.replace(/^html/,'html:has('+scope+')');return ':where('+scope+') '+value;};
 let result='',position=0;
 css=css.replace(/\/\*[\s\S]*?\*\//g,'');
 while(position<css.length){
  const open=css.indexOf('{',position);if(open<0){result+=css.slice(position);break;}
  const header=css.slice(position,open).trim();let depth=1,quote='',end=open+1;
  for(;end<css.length&&depth;end++){const ch=css[end];if(quote){if(ch===quote&&css[end-1]!=='\\')quote='';continue;}if(ch==='"'||ch==="'"){quote=ch;continue;}if(ch==='{')depth++;if(ch==='}')depth--;}
  const content=css.slice(open+1,end-1);
  result+=header.startsWith('@')?header+'{'+(/^@(?:media|supports|container|layer)\b/.test(header)?scopeCss(content,scope):content)+'}':splitSelectors(header).map(selector).join(',')+'{'+content+'}';
  position=end;
 }
 return result;
}
