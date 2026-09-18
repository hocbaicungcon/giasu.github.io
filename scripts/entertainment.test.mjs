import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseCSV} from './entertainment.mjs';
import {normalizeAnswer,choose} from '../assets/fun-data.js';
test('CSV retains quoted commas, escaped quotes, multiline answers and first row',()=>{
 assert.deepEqual(parseCSV('First?,One.\r\n"Two, three?","A ""quote""\nNext line"\r\n'),[['First?','One.'],['Two, three?','A "quote"\nNext line']]);
 assert.throws(()=>parseCSV('a,b,c'),/2 cột/);assert.throws(()=>parseCSV('"open'),/chưa đóng/);
});
test('answer matching ignores punctuation and case but rejects different answers',()=>{
 assert.equal(normalizeAnswer('  A Light-house! '),normalizeAnswer('a lighthouse.'));
 assert.notEqual(normalizeAnswer('five'),normalizeAnswer('four'));
});
test('next item excludes previous and supports singleton or empty filters',()=>{
 assert.equal(choose([1,2],1),2);assert.equal(choose([1],1),1);assert.equal(choose([],1),undefined);
});
