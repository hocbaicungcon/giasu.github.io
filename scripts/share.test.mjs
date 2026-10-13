/* credit: giasu.ai.vn */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {shareLinks,renderShare} from './share.mjs';
test('sharing encodes the exact public page and title',()=>{
 const url='https://giasu.ai.vn/bai-viet/test.html',title='Góc & tam giác';
 const links=shareLinks(url,title);
 assert.equal(new URL(links.facebook).searchParams.get('u'),url);
 assert.equal(new URL(links.x).searchParams.get('text'),title);
 assert.equal(new URL(links.telegram).searchParams.get('url'),url);
 const html=renderShare(url,title);
 assert.match(html,/noopener noreferrer/);assert.match(html,/data-share-copy/);assert.match(html,/data-share-zalo/);
 assert.doesNotMatch(html,/sdk|iframe/);
});
test('grading logo returns home and only public landing URL is shared',()=>{
 const html=fs.readFileSync(new URL('../cham-thi/index.html',import.meta.url),'utf8');
 assert.match(html,/<a class="brand" href="\.\.\/"/);
 assert.match(html,/data-share-url="https:\/\/giasu.ai.vn\/cham-thi\/"/);
});
