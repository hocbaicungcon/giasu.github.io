// credit: giasu.ai.vn
// Máy chủ biên dịch LaTeX -> PDF cho trang Luyện tập (tùy chọn). GitHub Pages không chạy được pdflatex,
// nên nút "Tải PDF dựng bằng LaTeX" chỉ hiện khi build với WORKSHEET_COMPILE_URL trỏ tới máy chủ này.
//   ALLOW_ORIGIN=https://giasu.ai.vn PORT=8891 node scripts/worksheet-compile-server.cjs
// Cần pdflatex (TeX Live / TinyTeX) với: amsmath amssymb multicol xcolor graphicx needspace tikz tcolorbox eso-pic fancyhdr
// array colortbl psnfss vietnam/T5. Mỗi yêu cầu chạy trong thư mục tạm riêng, tắt shell-escape, giới hạn 60 giây và 1 yêu cầu/2 giây/IP.
const http = require('http'), fs = require('fs'), os = require('os'), path = require('path'), { spawn } = require('child_process');
const PORT = Number(process.env.PORT) || 8891, ORIGIN = process.env.ALLOW_ORIGIN || 'http://localhost:4173';
const lastSeen = new Map();

function compile({ tex, assets }) {
  return new Promise((resolve, reject) => {
    if (typeof tex !== 'string' || tex.length > 2e6) return reject(Error('tex không hợp lệ'));
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ws-'));
    const done = (err, pdf) => { fs.rmSync(dir, { recursive: true, force: true }); err ? reject(err) : resolve(pdf); };
    try {
      fs.writeFileSync(path.join(dir, 'main.tex'), tex);
      for (const a of assets || []) {
        if (!/^[A-Za-z0-9_-]+\.png$/.test(a.name)) throw Error('Tên ảnh không hợp lệ');   // không để máy khách chọn đường dẫn
        fs.writeFileSync(path.join(dir, a.name), Buffer.from(a.data, 'base64'));
      }
    } catch (e) { return done(e); }
    const run = spawn('pdflatex', ['-no-shell-escape', '-interaction=nonstopmode', '-halt-on-error', 'main.tex'], { cwd: dir });
    let log = ''; run.stdout.on('data', d => { log += d; });
    const timer = setTimeout(() => run.kill(), 60000);
    run.on('close', code => { clearTimeout(timer); code === 0 ? done(null, fs.readFileSync(path.join(dir, 'main.pdf'))) : done(Error(log.split('\n').filter(l => l.startsWith('!')).slice(0, 5).join('\n') || 'pdflatex lỗi')); });
    run.on('error', e => done(e));
  });
}

http.createServer((req, res) => {
  const cors = { 'Access-Control-Allow-Origin': ORIGIN, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
  if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }
  if (req.method !== 'POST') { res.writeHead(404, cors); return res.end('not found'); }
  const ip = req.socket.remoteAddress, now = Date.now();
  if (now - (lastSeen.get(ip) || 0) < 2000) { res.writeHead(429, cors); return res.end('Vui lòng thử lại sau vài giây.'); }
  lastSeen.set(ip, now);
  let body = '';
  req.on('data', d => { body += d; if (body.length > 30e6) req.destroy(); });
  req.on('end', async () => {
    try { const pdf = await compile(JSON.parse(body)); res.writeHead(200, { ...cors, 'Content-Type': 'application/pdf' }); res.end(pdf); }
    catch (e) { res.writeHead(400, { ...cors, 'Content-Type': 'text/plain; charset=utf-8' }); res.end(String(e.message || e)); }
  });
}).listen(PORT, '127.0.0.1', () => console.log(`POST http://localhost:${PORT}/  (CORS: ${ORIGIN})`));
