/* Turns the pictures a worksheet uses into PNG files (browser only, canvas).
   const assets = await WorksheetAssets.build(result, { assetsBase: '/worksheet-assets' });
   -> [{ name: 'ws-1f34e.png', type: 'image/png', data: '<base64>' }, ...]
   Send them to the LaTeX compiler next to result.tex (the file names are what the .tex refers to). */
(function (root) {
  'use strict';
  const cache = new Map(), strokeSets = {};

  // black-and-white print: pale grey fills with dark edges
  function toLineArt(canvas) {
    const size = canvas.width, ctx = canvas.getContext('2d'), image = ctx.getImageData(0, 0, size, size), d = image.data, out = new Uint8ClampedArray(d.length);
    const alpha = (x, y) => x < 0 || y < 0 || x >= size || y >= size ? 0 : d[(y * size + x) * 4 + 3];
    const grey = i => 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      if (d[i + 3] >= 128) {
        const right = x + 1 < size && d[i + 7] >= 128 ? grey(i + 4) : grey(i), down = y + 1 < size && d[i + size * 4 + 3] >= 128 ? grey(i + size * 4) : grey(i), g = grey(i);
        const v = Math.abs(g - right) > 38 || Math.abs(g - down) > 38 ? 70 : 255 - (255 - g) * 0.45;
        out[i] = out[i + 1] = out[i + 2] = v; out[i + 3] = 255;
      } else {
        let near = false;
        for (let dy = -3; dy <= 3 && !near; dy++) for (let dx = -3; dx <= 3; dx++) if (alpha(x + dx, y + dy) >= 128) { near = true; break; }
        if (near) { out[i] = out[i + 1] = out[i + 2] = 45; out[i + 3] = 255; }
      }
    }
    ctx.clearRect(0, 0, size, size); ctx.putImageData(new ImageData(out, size, size), 0, 0);
  }
  async function svgToPng(svgText, { bw = false, white = false } = {}) {
    const url = URL.createObjectURL(new Blob([svgText], { type: 'image/svg+xml' }));
    try {
      const img = new Image(); img.src = url; await img.decode();
      const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (white) { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 256, 256); }
      ctx.drawImage(img, 0, 0, 256, 256);
      if (bw) toLineArt(canvas);
      return canvas.toDataURL('image/png').split(',')[1];
    } finally { URL.revokeObjectURL(url); }
  }
  const memo = (key, make) => { if (!cache.has(key)) { const p = make(); cache.set(key, p); p.catch(() => cache.delete(key)); } return cache.get(key); };

  function emoji(cp, base, bw) {
    return memo((bw ? 'g' : 'c') + cp, async () => {
      const text = await fetch(`${base}/emoji-svg/${cp}.svg`).then(r => { if (!r.ok) throw Error('Không tải được hình ' + cp); return r.text(); });
      return { name: `ws-${cp}.png`, type: 'image/png', data: await svgToPng(text.replace('<svg ', '<svg width="256" height="256" '), { bw }) };
    });
  }
  const loadStrokes = (set, base) => strokeSets[set] || (strokeSets[set] = fetch(`${base}/cjk/${set}-strokes.json`).then(r => { if (!r.ok) throw Error('Không tải được nét chữ ' + set); return r.json(); }).catch(e => { delete strokeSets[set]; throw e; }));
  function cjk(name, base) {
    return memo(name, async () => {
      const [, set, hex, mode] = name.match(/^cjk-(zh|ja)-([0-9a-f]+)-([fts]\d*)$/) || [];
      if (!set) throw Error('Tên hình chữ không hợp lệ: ' + name);
      const paths = (await loadStrokes(set, base))[hex];
      if (!paths) throw Error('Không có nét chữ ' + hex);
      const shown = mode[0] === 's' ? paths.slice(0, Number(mode.slice(1))) : paths;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 1024 1024"><g fill="${mode[0] === 't' ? '#c2c2c2' : '#111'}">${shown.map(d => `<path d="${d}"/>`).join('')}</g></svg>`;
      return { name: name + '.png', type: 'image/png', data: await svgToPng(svg, { white: true }) };
    });
  }
  /** result = Worksheet.generate(...). options.assetsBase = URL of the assets folder (default '/worksheet-assets'). */
  function build(result, options = {}) {
    const base = (options.assetsBase || '/worksheet-assets').replace(/\/$/, '');
    return Promise.all([...(result.emoji || []).map(cp => emoji(cp, base, !!result.bw)), ...(result.cjk || []).map(name => cjk(name, base))]);
  }
  root.WorksheetAssets = { build, svgToPng };
})(window);
