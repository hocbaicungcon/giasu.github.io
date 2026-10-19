import { latexToOmml } from '../src/latex2omml.js';
import { ommlToLatex } from '../src/omml.js';
const B = '\\';
for (const t of [`${B}frac{a}{b+1}`, `x^2+${B}sqrt[3]{y}`, `${B}int_0^1 f(x)${B},dx = F`, `${B}left${B}{ ${B}begin{array}{l} x=1 ${B}${B} y=2 ${B}end{array} ${B}right.`,
  `${B}lim_{x${B}to 0}${B}frac{${B}sin x}{x}=1`, `${B}sum_{i=1}^n i^2`, `30^{${B}circ}`]) {
  try { console.log(t, '=>', ommlToLatex(latexToOmml(t))[0]); } catch (e) { console.log(t, 'ERR', e.message); }
}
