// Dev server for the add-in: https://localhost:3000 serving this folder. Needs a certificate Word trusts:
//   npm run cert   (office-addin-dev-certs if you have npx + network, else openssl self-signed, which you must trust once)
import https from 'node:https';
import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, normalize, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.xml': 'application/xml', '.json': 'application/json', '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' };

function handler(req, res) {
  const url = new URL(req.url, 'https://localhost');
  let path = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  if (path === '/' || path === '\\') path = '/taskpane/taskpane.html';
  const file = join(root, path);
  if (!file.startsWith(root) || !/^\/(taskpane|src|fixtures)\//.test(path.replace(/\\/g, '/')) && path !== '/manifest.xml' && path !== '/manifest.dev.xml' && path !== '/sw.js') { res.writeHead(404); res.end('not found'); return; }
  if (!existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' });
  res.end(readFileSync(file));
}

function findCert() {
  const candidates = [
    [join(homedir(), '.office-addin-dev-certs', 'localhost.key'), join(homedir(), '.office-addin-dev-certs', 'localhost.crt')],
    [join(root, 'certs', 'localhost.key'), join(root, 'certs', 'localhost.crt')],
  ];
  return candidates.find(([k, c]) => existsSync(k) && existsSync(c));
}

const cert = findCert();
if (cert && !process.env.HTTP_ONLY) {
  https.createServer({ key: readFileSync(cert[0]), cert: readFileSync(cert[1]) }, handler).listen(PORT, () => console.log(`https://localhost:${PORT}  (cert ${cert[1]})`));
} else {
  http.createServer(handler).listen(PORT, () => console.log(`http://localhost:${PORT}  (no certificate found: Word needs https, run "npm run cert"; http is fine for the browser mock)`));
}
