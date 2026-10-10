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
    .replace(/\s*([\{\};:,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}
