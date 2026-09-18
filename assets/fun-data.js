export async function loadData(file) {
 const response=await fetch(new URL(`./fun/${file}.json`,import.meta.url));
 if(!response.ok)throw Error('Không tải được dữ liệu. Hãy thử lại.');
 return response.json();
}
export function normalizeAnswer(value){return value.normalize('NFKC').toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]/gu,'');}
export function choose(items,previous){const candidates=items.filter(x=>x!==previous);return (candidates.length?candidates:items)[Math.floor(Math.random()*(candidates.length||items.length))];}
