import fs from 'node:fs';
import path from 'node:path';

const postDir = path.resolve('post');
const files = fs.readdirSync(postDir).filter(f => f.startsWith('toan-') && f.endsWith('.md'));

console.log(`Scanning ${files.length} Math posts...`);

const issues = {
  rawCodeLeaks: [],
  scriptIssues: [],
  svgWithoutDone: [],
  tableIssues: [],
};

for (const file of files) {
  const filePath = path.join(postDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // 1. Check for raw CSS/HTML leaks
  // Sometimes in markdown, indented code blocks (4 spaces) inadvertently turn HTML or CSS into <pre><code>!
  let inCodeBlock = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (!inCodeBlock) {
      // Check for 4-space indented HTML or style that might turn into code block
      if (/^ {4,}<(div|style|script|svg|table)/.test(line)) {
        issues.rawCodeLeaks.push({ file, line: i + 1, text: line.trim() });
      }
      // Check for stray CSS rules leaking in prose e.g. { display: flex; or margin: 10px;
      if (/^[a-zA-Z0-9_\-\.#]+ +\{\s*[\w\-]+:/.test(line)) {
        issues.rawCodeLeaks.push({ file, line: i + 1, text: line.trim() });
      }
    }
  }

  // 2. Check for interactive figure scripts
  if (content.includes('<script>') || content.includes('<script type=')) {
    // Check if DOMContentLoaded is used without fallback
    if ((content.includes("addEventListener('DOMContentLoaded'") || content.includes('addEventListener("DOMContentLoaded"')) && !content.includes('readyState')) {
      issues.scriptIssues.push({ file, reason: 'Uses DOMContentLoaded without readyState check' });
    }
  }

  // 3. Check for SVGs with scripts or custom interactive figures missing data-interactive-done
  const svgMatches = [...content.matchAll(/<svg\b([^>]*)>/g)];
  for (const match of svgMatches) {
    const attrs = match[1];
    // If post has a <script> that modifies SVG or mentions svg id, but the svg lacks data-interactive-done
    if (content.includes('<script>') && !attrs.includes('data-interactive-done') && !attrs.includes('data-geometry') && !attrs.includes('ui-symbol')) {
      // Check if this SVG has an id or circle that interactive-figures.js might hijack
      if (attrs.includes('id=') || match[0].includes('circle')) {
        issues.svgWithoutDone.push({ file, svgTag: match[0] });
      }
    }
  }

  // 4. Check for Table issues
  // Check markdown tables
  let inTable = false;
  let tableHeaderCols = 0;
  let tableLineStart = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      // Mask math and code blocks so pipes inside LaTeX formulas don't fool column split
      const maskedLine = line.replace(/(?<!\$)\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, 'MATH').replace(/`[^`]+`/g, 'CODE');
      const cols = maskedLine.split('|').length - 2;
      if (!inTable) {
        // Potential table header
        if (i + 1 < lines.length && /^\|(\s*:?-+:?\s*\|)+$/.test(lines[i + 1].trim())) {
          inTable = true;
          tableHeaderCols = cols;
          tableLineStart = i + 1;
        }
      } else {
        // Table row (skip delimiter row)
        if (!/^\|(\s*:?-+:?\s*\|)+$/.test(line)) {
          if (cols !== tableHeaderCols) {
            issues.tableIssues.push({
              file,
              line: i + 1,
              tableStart: tableLineStart,
              expected: tableHeaderCols,
              actual: cols,
              rowText: line.substring(0, 50) + '...'
            });
          }
        }
      }
    } else {
      inTable = false;
    }
  }
}

console.log('\n--- SCAN RESULTS ---');
console.log(`Raw Code Leaks: ${issues.rawCodeLeaks.length}`);
issues.rawCodeLeaks.slice(0, 10).forEach(x => console.log(`  ${x.file}:${x.line} -> ${x.text}`));

console.log(`Script issues (DOMContentLoaded without fallback): ${issues.scriptIssues.length}`);
issues.scriptIssues.forEach(x => console.log(`  ${x.file} -> ${x.reason}`));

console.log(`SVGs missing data-interactive-done (in posts with scripts): ${issues.svgWithoutDone.length}`);
issues.svgWithoutDone.forEach(x => console.log(`  ${x.file} -> ${x.svgTag}`));

console.log(`Table column mismatches: ${issues.tableIssues.length}`);
issues.tableIssues.slice(0, 15).forEach(x => console.log(`  ${x.file}:${x.line} (expected ${x.expected}, got ${x.actual}) -> ${x.rowText}`));
