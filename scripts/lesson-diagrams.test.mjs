import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const source=fs.readFileSync(new URL('../post/toan-7-bai-15-cac-truong-hop-bang-nhau-cua-tam-giac-vuong.md',import.meta.url),'utf8');
const numbers=s=>s.match(/-?\d+(?:\.\d+)?/g).map(Number),unit=(p,o)=>{const x=p[0]-o[0],y=p[1]-o[1],n=Math.hypot(x,y);return [x/n,y/n];};
test('angle markers follow their actual rays and use perpendicular squares',()=>{
 const markers=[...source.matchAll(/<path\b[^>]*data-angle-kind="[^"]+"[^>]*>/g)];assert.ok(markers.length>=20);
 for(const [markup] of markers){const attr=name=>markup.match(new RegExp(`${name}="([^"]+)"`))[1],vertex=numbers(attr('data-angle-vertex')),rays=numbers(attr('data-angle-rays')),size=+attr('data-angle-size'),path=numbers(attr('d')),start=path.slice(0,2),end=path.slice(-2),u=unit(rays.slice(0,2),vertex),v=unit(rays.slice(2),vertex);
  for(let i=0;i<2;i++){assert.ok(Math.abs(start[i]-vertex[i]-u[i]*size)<.002);assert.ok(Math.abs(end[i]-vertex[i]-v[i]*size)<.002);}
  if(attr('data-angle-kind')==='right'){assert.ok(Math.abs(u[0]*v[0]+u[1]*v[1])<.0001);for(let i=0;i<2;i++)assert.ok(Math.abs(path[i+2]-start[i]-v[i]*size)<.002);}
 }
});
test('30-degree diagrams and equal sunlight inclination match their labels',()=>{
 const svgs=[...source.matchAll(/<svg\b[\s\S]*?<\/svg>/g)].map(m=>m[0]);
 const angles=index=>[...svgs[index].matchAll(/<path\b[^>]*data-angle-kind="arc"[^>]*>/g)].map(([m])=>{const o=numbers(m.match(/data-angle-vertex="([^"]+)"/)[1]),p=numbers(m.match(/data-angle-rays="([^"]+)"/)[1]),u=unit(p.slice(0,2),o),v=unit(p.slice(2),o);return Math.acos(u[0]*v[0]+u[1]*v[1])*180/Math.PI;});
 for(const angle of angles(6))assert.ok(Math.abs(angle-30)<.001);
 const sun=angles(8);assert.ok(Math.abs(sun[0]-sun[1])<.00001);
 assert.match(source,/\\frac\{AB\}\{AC\} = \\frac\{DE\}\{DF\}/);
});

test('angle annotations use vertices actually drawn in each SVG',()=>{
 for(const [svg] of source.matchAll(/<svg\b[\s\S]*?<\/svg>/g)){
  const points=[];
  for(const [m] of svg.matchAll(/<(?:circle|line|polygon)\b[^>]*>/g)){
   const get=name=>m.match(new RegExp(`${name}="([^"]+)"`))?.[1];
   if(get('points')){const xy=numbers(get('points'));for(let i=0;i<xy.length;i+=2)points.push(xy.slice(i,i+2));}
   else if(get('cx'))points.push([+get('cx'),+get('cy')]);
   else if(get('x1'))points.push([+get('x1'),+get('y1')],[+get('x2'),+get('y2')]);
  }
  for(const [m] of svg.matchAll(/<path\b[^>]*data-angle-kind="[^"]+"[^>]*>/g)){
   const xy=numbers(m.match(/data-angle-vertex="([^"]+)"/)[1]).concat(numbers(m.match(/data-angle-rays="([^"]+)"/)[1]));
   for(let i=0;i<xy.length;i+=2)assert.ok(points.some(p=>Math.hypot(p[0]-xy[i],p[1]-xy[i+1])<.002));
  }
 }
});
