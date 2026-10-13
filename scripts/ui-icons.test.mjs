import test from 'node:test';
import assert from 'node:assert/strict';
import {vectorizeInterface} from '../assets/ui-icons.js';
test('vector icons replace visible emoji while keeping code, math and attributes intact',()=>{
 const source='<h2>💡 Gợi ý</h2><p>⚠️ Lưu ý</p><code>💡</code><math><mtext>💡</mtext></math><a title="💡">📑 Mục lục</a>';
 const result=vectorizeInterface(source);
 assert.match(result,/<h2><svg[^>]*aria-hidden="true"/);
 assert.match(result,/<p><svg/);
 assert.match(result,/<code>💡<\/code>/);
 assert.match(result,/<math><mtext>💡<\/mtext><\/math>/);
 assert.match(result,/<a title="💡"><svg/);
 assert.match(vectorizeInterface('<option>💡 Gợi ý</option>'),/<option> Gợi ý<\/option>/);
 assert.equal(vectorizeInterface(result),result);
});
