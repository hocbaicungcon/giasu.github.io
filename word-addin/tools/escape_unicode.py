"""Rewrite non-ASCII characters in src/*.js as \\uXXXX escapes (the editing tools turn the escapes into raw characters)."""
import sys, pathlib
for p in pathlib.Path(__file__).resolve().parents[1].glob('src/*.js'):
    s = p.read_text(encoding='utf-8')
    out = ''.join(c if ord(c) < 128 else ('\\u%04x' % ord(c) if ord(c) < 0x10000 else '\\u{%x}' % ord(c)) for c in s)
    if out != s:
        p.write_text(out, encoding='utf-8'); print('escaped', p.name)
