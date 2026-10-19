import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

export function corpusFiles() {
  const dirs = [join(homedir(), 'Documents/TOAN_WORD THEO BAI/Khối 12/_Toán Từ Tâm 12 PHUONG'), join(homedir(), 'Downloads')];
  const out = [];
  const walk = (d, depth) => {
    if (!existsSync(d) || depth > 4) return;
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p, depth + 1);
      else if (/\.docx$/i.test(e.name) && !e.name.startsWith('~$')) out.push(p);
    }
  };
  dirs.forEach((d) => walk(d, 0));
  return out;
}
