#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Công cụ trích xuất và chuyển đổi bài viết từ file .wpress sang giasu.ai.vn Markdown.
Tự động trích xuất nội dung, hình ảnh từ .wpress và render KaTeX chuẩn.
"""

import os
import sys
import re
import html
import yaml
import urllib.parse

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WPRESS_PATH = os.path.join(WORKSPACE_ROOT, 'o2edu/o2-edu-vn-20260817-103826-pv05fp67rabp.wpress')
POST_DIR = os.path.join(WORKSPACE_ROOT, 'post')
ASSETS_IMG_DIR = os.path.join(WORKSPACE_ROOT, 'assets/images')
ASSETS_DOC_DIR = os.path.join(WORKSPACE_ROOT, 'assets/docs')
DRIVE_UPLOAD_DIR = os.path.join(WORKSPACE_ROOT, 'o2edu/drive_upload')
DRIVE_LINKS_FILE = os.path.join(WORKSPACE_ROOT, 'o2edu/drive_links.csv')
SLUG_MAP_FILE = os.path.join(WORKSPACE_ROOT, 'o2edu/slug_map.json')
MAX_LOCAL_DOC_SIZE = 5 * 1024 * 1024  # 5MB: Các file >= 5MB chuyển sang Google Drive

os.makedirs(ASSETS_IMG_DIR, exist_ok=True)
os.makedirs(ASSETS_DOC_DIR, exist_ok=True)
os.makedirs(POST_DIR, exist_ok=True)
os.makedirs(DRIVE_UPLOAD_DIR, exist_ok=True)

def load_slug_map():
    if os.path.exists(SLUG_MAP_FILE):
        import json
        try:
            with open(SLUG_MAP_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def load_drive_links():
    mapping = {}
    if os.path.exists(DRIVE_LINKS_FILE):
        with open(DRIVE_LINKS_FILE, 'r', encoding='utf-8') as f:
            lines = [l.strip() for l in f if l.strip()]
            for line in lines[1:]:
                parts = line.split(',', 3)
                if len(parts) >= 4 and parts[0]:
                    fn = parts[0].strip()
                    url = parts[3].strip()
                    if url:
                        mapping[fn] = url
    return mapping

def record_drive_pending(doc_name, file_size, slug):
    existing = []
    found = False
    if os.path.exists(DRIVE_LINKS_FILE):
        with open(DRIVE_LINKS_FILE, 'r', encoding='utf-8') as f:
            for line in f:
                line_str = line.strip()
                if not line_str: continue
                parts = line_str.split(',', 3)
                if parts[0] == doc_name:
                    found = True
                existing.append(line_str)
    else:
        existing.append('filename,file_size_mb,source_post,drive_url')
        
    if not found:
        size_mb = round(file_size / (1024 * 1024), 2)
        existing.append(f"{doc_name},{size_mb},{slug},")
        with open(DRIVE_LINKS_FILE, 'w', encoding='utf-8') as f:
            f.write('\n'.join(existing) + '\n')
        print(f"Recorded to {DRIVE_LINKS_FILE}: {doc_name} ({size_mb} MB)")

HEADER_SIZE = 4377
HEADER_CHUNK_EOF = bytes(HEADER_SIZE)

def read_from_buffer(buffer, start, end):
    chunk = buffer[start:end]
    idx = chunk.find(b'\x00')
    if idx != -1:
        chunk = chunk[:idx]
    return chunk.decode('utf-8', errors='replace')

class WpressReader:
    def __init__(self, path):
        self.path = path
        self.fd = open(path, 'rb')
        self.index = {}
        self._build_index()

    def _build_index(self):
        print(f"Indexing {self.path}...")
        self.fd.seek(0)
        count = 0
        while True:
            header_chunk = self.fd.read(HEADER_SIZE)
            if len(header_chunk) < HEADER_SIZE or header_chunk == HEADER_CHUNK_EOF:
                break
            name = read_from_buffer(header_chunk, 0, 255)
            size_str = read_from_buffer(header_chunk, 255, 269).strip()
            size = int(size_str) if size_str else 0
            prefix = read_from_buffer(header_chunk, 281, HEADER_SIZE)
            full_path = os.path.join(prefix, name) if prefix else name
            
            data_offset = self.fd.tell()
            self.index[full_path] = (size, data_offset)
            count += 1
            self.fd.seek(size, os.SEEK_CUR)
        print(f"Indexed {count:,} files from wpress.")

    def get_file(self, full_path):
        if full_path not in self.index:
            return None
        size, offset = self.index[full_path]
        self.fd.seek(offset)
        return self.fd.read(size)

    def close(self):
        self.fd.close()

def clean_text(text):
    return html.unescape(text)

def clean_math_body(math_str):
    # Remove HTML tags inside math
    math_str = re.sub(r'</?(?:p|br|span|div)[^>]*>', ' ', math_str)
    # Replace non-breaking spaces
    math_str = math_str.replace('\u00a0', ' ').replace('&nbsp;', ' ')
    # Unescape HTML entities
    math_str = html.unescape(math_str)
    # Convert \begin{align} to \begin{aligned} for KaTeX universal compatibility
    math_str = re.sub(r'\\begin\{align\*?\}', r'\\begin{aligned}', math_str)
    math_str = re.sub(r'\\end\{align\*?\}', r'\\end{aligned}', math_str)
    # Remove unsupported \hfill commands (MathType residue)
    math_str = re.sub(r'\\hfill\b', ' ', math_str)
    # Remove unsupported array column alignments from MathType: \begin{array}{*{20}{c}} -> \begin{array}{c}
    math_str = re.sub(r'\\begin\{array\}\s*\{\s*\*\s*\{\s*\d+\s*\}\s*\{([a-zA-Z]+)\}\s*\}', r'\\begin{array}{\1}', math_str)
    # Clean whitespace
    math_str = re.sub(r'[ \t]+', ' ', math_str).strip()
    return math_str

def normalize_markdown_formatting(text):
    # Clean malformed question numbers and options from bad bold tags
    text = re.sub(r'\*+Câu[\s*]*(\d+)[\s*]*:[\s*]*', r'**Câu \1:** ', text)
    text = re.sub(r'\*\*([A-Da-d])\s*\*+\.\s*\*+', r'**\1.** ', text)

    # Remove trailing runaway asterisks at end of lines
    text = re.sub(r'(?<=\S)\s*\*+\s*$', '', text, flags=re.MULTILINE)

    # Remove empty bold/italic tokens: ****, ******, ** **, * *
    text = re.sub(r'\*{4,}', '', text)
    text = re.sub(r'\*\*\s+\*\*', ' ', text)
    text = re.sub(r'(?<!\*)\*\s+\*(?!\*)', ' ', text)

    # 1. Triple bold-italic with missing space
    text = re.sub(r'(\*\*\*[^\*\r\n]+?\*\*\*)([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9*])', r'\1 \2', text)

    # 2. Bold with leading/trailing spaces inside markers
    def clean_bold(m):
        lead, body, trail = m.group(1), m.group(2).strip(), m.group(3)
        return ((' ' if lead else '') + f"**{body}**" + (' ' if trail else ''))
    text = re.sub(r'\*\*([\t\u00a0 ]*)([^\*\r\n]+?)([\t\u00a0 ]*)\*\*', clean_bold, text)

    # 3. Italic with leading/trailing spaces inside markers
    def clean_italic(m):
        lead, body, trail = m.group(1), m.group(2).strip(), m.group(3)
        return ((' ' if lead else '') + f"*{body}*" + (' ' if trail else ''))
    text = re.sub(r'(?<!\*)\*([\t\u00a0 ]*)([^\*\r\n]+?)([\t\u00a0 ]*)\*(?!\*)', clean_italic, text)

    # 4. Missing space after closing ** or * when followed by word character or punctuation followed by ([
    text = re.sub(r'(\*\*(?!\s)[^\*\r\n]+?(?<!\s)\*\*)([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9])', r'\1 \2', text)
    text = re.sub(r'(\*\*(?!\s)[^\*\r\n]+?[:.?!](?<!\s)\*\*)([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9(\[])', r'\1 \2', text)
    text = re.sub(r'((?<!\*)\*(?!\s)[^\*\r\n]+?(?<!\s)\*(?!\*))([A-Za-z0-9\u00C0-\u024F\u1EA0-\u1EF9])', r'\1 \2', text)

    # 5. Remove redundant download button artifacts: [Label](url)[Download](url)
    text = re.sub(r'(\[[^\]\r\n]+\]\(([^)\r\n]+)\))[ \t]*\[(?:Download|Tải về)\]\(\2\)', r'\1', text, flags=re.I)

    # 6. Ensure standalone download link lines are formatted as bullet list items
    def format_doc_bullet(m):
        indent, label, url = m.groups()
        cleaned_label = re.sub(r'[-_.\s]*giasu\.ai\.vn\b|[-_.\s]*o2\.edu\.vn\b', '', label, flags=re.I).strip()
        cleaned_label = cleaned_label if cleaned_label else label
        if cleaned_label.startswith('http'):
            cleaned_label = 'Link tải Google Drive'
        return f"{indent}- [{cleaned_label}]({url})"

    doc_pattern = r'^([ \t]*)\[([^\]\r\n]+)\]\(((?:/assets/docs/|https?://drive\.google\.com/)[^)\r\n]+)\)[ \t]*$'
    text = re.sub(doc_pattern, format_doc_bullet, text, flags=re.MULTILINE)

    # 7. Tighten consecutive download list items
    text = re.sub(r'(^[ \t]*-[ \t]+\[[^\]\r\n]+\]\(((?:/assets/docs/|https?://drive\.google\.com/)[^)\r\n]+)\))[ \t]*\n\n(?=[ \t]*-[ \t]+\[[^\]\r\n]+\]\(((?:/assets/docs/|https?://drive\.google\.com/)[^)\r\n]+)\))', r'\1\n', text, flags=re.MULTILINE)

    return text

def convert_html_to_markdown(raw_html, image_map, doc_map=None, slug=""):
    if doc_map is None:
        doc_map = {}
    text = raw_html

    # Step 1: Code blocks & Inline code (MUST BE EXTRACTED FIRST to protect programming symbols like $, $$, $var)
    code_blocks = {}
    def save_code(m):
        pre_tag, inner = m.group(1), m.group(2)
        lang = 'python' if ('python' in slug.lower() or 'thap-ha-noi' in slug.lower()) else ''
        lang_m = re.search(r'data-enlighter-language=[\"\']([^\"\']+)[\"\']', pre_tag, re.I)
        if lang_m and lang_m.group(1).lower() not in ('generic', 'none', 'null', 'raw'):
            lang = lang_m.group(1).lower()
        else:
            lang_class = re.search(r'language-([a-zA-Z0-9_-]+)', pre_tag, re.I)
            if lang_class:
                lang = lang_class.group(1).lower()
        code_text = re.sub(r'<br\s*/?>', '\n', inner)
        code_text = re.sub(r'<[^>]+>', '', code_text)
        code_text = html.unescape(code_text).strip('\n')
        key = f"__CODE_BLOCK_{len(code_blocks)}__"
        code_blocks[key] = f"\n\n```{lang}\n{code_text}\n```\n\n"
        return key
    text = re.sub(r'(<pre[^>]*>)([\s\S]*?)</pre>', save_code, text)

    inline_codes = {}
    text = re.sub(r'<code[^>]*>\s*(<a\s+[^>]*>)([\s\S]*?)</a>\s*</code>', r'\1<code>\2</code></a>', text)

    def save_inline_code(m):
        code_text = html.unescape(m.group(1))
        if '\n' in code_text or not code_text.strip():
            return code_text
        key = f"__CODE_INLINE_{len(inline_codes)}__"
        inline_codes[key] = f"`{code_text.strip()}`"
        return key

    text = re.sub(r'<code[^>]*>([\s\S]*?)</code>', save_inline_code, text)

    # Step 2: Normalize LaTeX delimiters & environment names
    text = re.sub(r'\\\[([\s\S]*?)\\\]', r'$$\1$$', text)
    text = re.sub(r'\\\(([\s\S]*?)\\\)', r'$\1$', text)
    # Convert \begin{align} / \begin{align*} to \begin{aligned} everywhere for universal KaTeX compatibility
    text = re.sub(r'\\begin\{align\*?\}', r'\\begin{aligned}', text)
    text = re.sub(r'\\end\{align\*?\}', r'\\end{aligned}', text)
    # Fix accidental double dollar typos with spaces: "$ $ABCD" -> "$ABCD"
    text = re.sub(r'\$\s+\$(?=[A-Za-z0-9\\])', '$', text)

    # Step 3: Protect Math tokens safely
    math_tokens = {}
    
    # 3.1 Display math $$ ... $$
    def replace_display_math(m):
        math_content = clean_math_body(m.group(1))
        token = f"__MATH_DISPLAY_{len(math_tokens)}__"
        math_tokens[token] = f"\n\n$$\n{math_content}\n$$\n\n"
        return token

    text = re.sub(r'\$\$([\s\S]*?)\$\$', replace_display_math, text)

    # 3.2 Inline math $ ... $ (ngăn match xuyên qua các thẻ block như </p>, </li>, v.v.)
    def replace_inline_math(m):
        math_content = clean_math_body(m.group(1))
        # Chuẩn hóa inline math trên 1 dòng duy nhất để tránh bị lỗi markdown tokenizer
        math_content = re.sub(r'\s*\n\s*', ' ', math_content)
        token = f"__MATH_INLINE_{len(math_tokens)}__"
        math_tokens[token] = f"${math_content}$"
        return token

    block_tags = r'</?(?:p|div|h[1-6]|li|ul|ol|table|pre)\b'
    text = re.sub(rf'(?<!\$)\$(?!\$)((?:(?!{block_tags})[^\$])+?)(?<!\$)\$(?!\$)', replace_inline_math, text)

    # 3.3 Standalone multiline environments: now only for those NOT already enclosed in $$ or $
    def replace_standalone_env(m):
        math_content = clean_math_body(m.group(1))
        token = f"__MATH_DISPLAY_{len(math_tokens)}__"
        math_tokens[token] = f"\n\n$$\n\\begin{{aligned}}\n{math_content}\n\\end{{aligned}}\n$$\n\n"
        return token

    text = re.sub(r'\\begin\{(?:aligned|gather\*?)\}([\s\S]*?)\\end\{(?:aligned|gather\*?)\}', replace_standalone_env, text)

    # Step 3: Images
    def replace_img(match):
        img_tag = match.group(0)
        src_m = re.search(r'src=[\"\']([^\"\']+)[\"\']', img_tag)
        alt_m = re.search(r'alt=[\"\']([^\"\']*)[\"\']', img_tag)
        if not src_m:
            return ''
        src = src_m.group(1).split('?')[0]
        alt = alt_m.group(1) if alt_m else ''
        local_src = image_map.get(src, src)
        return f"\n\n![{alt}]({local_src})\n\n"

    text = re.sub(r'<figure[^>]*>[\s\S]*?<img[^>]+>[\s\S]*?</figure>', lambda m: re.sub(r'<img[^>]+>', replace_img, m.group(0)), text)
    text = re.sub(r'<img[^>]+>', replace_img, text)

    # Step 4: Headings
    for h in [6, 5, 4, 3, 2, 1]:
        prefix = '#' * h
        text = re.sub(rf'<h{h}[^>]*>([\s\S]*?)</h{h}>', lambda m: f"\n\n{prefix} {re.sub(r'<[^>]+>', '', m.group(1)).strip()}\n\n", text)

    # Step 5: Lists (thụt lề các đoạn/ảnh/công thức con để bảo toàn cấu trúc danh sách)
    def parse_list(match, is_ol):
        list_html = match.group(1)
        items = re.findall(r'<li[^>]*>([\s\S]*?)</li>', list_html)
        res = []
        for i, item in enumerate(items, 1):
            bullet = f"{i}. " if is_ol else "- "
            indent = "   " if is_ol else "  "
            
            item_clean = item.strip()
            item_clean = re.sub(r'<br\s*/?>', '\n\n', item_clean)
            item_clean = re.sub(r'<p[^>]*>([\s\S]*?)</p>', r'\n\n\1\n\n', item_clean)
            item_clean = re.sub(r'</?(?:span|div)[^>]*>', '', item_clean).strip()
            # Tách các khối Display Math, Code blocks và hình ảnh thành các đoạn riêng để thụt lề chuẩn trong list item
            item_clean = re.sub(r'(__MATH_DISPLAY_\d+__|__CODE_BLOCK_\d+__|!\[[^\]]*\]\([^)]+\))', r'\n\n\1\n\n', item_clean)
            
            paras = [p.strip() for p in re.split(r'\n{2,}', item_clean) if p.strip()]
            if not paras:
                continue
                
            first_p = paras[0]
            other_ps = [
                '\n'.join(f"{indent}{l}" if l.strip() else "" for l in p.split('\n'))
                for p in paras[1:]
            ]
            res.append('\n\n'.join([f"{bullet}{first_p}"] + other_ps))
            
        return '\n\n' + '\n\n'.join(res) + '\n\n'

    text = re.sub(r'<ul[^>]*>([\s\S]*?)</ul>', lambda m: parse_list(m, False), text)
    text = re.sub(r'<ol[^>]*>([\s\S]*?)</ol>', lambda m: parse_list(m, True), text)

    # Step 5.5: File blocks (wp-block-file)
    text = re.sub(r'<a\s+[^>]*class=[\"\'][^\"\']*wp-block-file__button[^\"\']*[\"\'][^>]*>[\s\S]*?</a>', '', text)
    text = re.sub(r'<a\s+[^>]*\bdownload\b[^>]*>(?:\s*(?:Download|Tải về)\s*)</a>', '', text, flags=re.I)
    text = re.sub(r'<div\s+[^>]*class=[\"\'][^\"\']*wp-block-file[^\"\']*[\"\'][^>]*>([\s\S]*?)</div>', r'\n\n- \1\n\n', text)

    # Step 6: Links
    def replace_a(match):
        href = match.group(1).strip()
        link_text = match.group(2)
        clean_href = href.split('?')[0]
        if clean_href in doc_map:
            href = doc_map[clean_href]
        elif href.startswith('mailto:'):
            return f"[{re.sub(r'<[^>]+>', '', link_text).strip()}]({href})"
        elif 'o2.edu.vn' in href:
            if '?p=30821' in href:
                href = "/bai-viet/tong-hop-23-phuong-phap-giai-bai-tap-mon-hoa-hoc.html"
            elif href.rstrip('/') in ('http://o2.edu.vn', 'https://o2.edu.vn'):
                return re.sub(r'<[^>]+>', '', link_text).strip()
            else:
                p = re.sub(r'^https?://o2\.edu\.vn/', '', href).split('?')[0].strip('/')
                if p and not p.startswith('wp-content'):
                    href = f"/bai-viet/{p}.html"
        return f"[{re.sub(r'<[^>]+>', '', link_text).strip()}]({href})"
    text = re.sub(r'<a\s+[^>]*href=[\"\']([^\"\']+)[\"\'][^>]*>([\s\S]*?)</a>', replace_a, text)

    # Step 7: Tables
    def parse_table(match):
        tbl = match.group(0)
        rows = re.findall(r'<tr[^>]*>([\s\S]*?)</tr>', tbl)
        if not rows: return ''
        md_table, headers = [], []
        th_cells = re.findall(r'<th[^>]*>([\s\S]*?)</th>', rows[0])
        if th_cells:
            headers = [re.sub(r'<[^>]+>', '', c).strip() for c in th_cells]
            rows = rows[1:]
        elif rows:
            td_cells = re.findall(r'<td[^>]*>([\s\S]*?)</td>', rows[0])
            headers = [re.sub(r'<[^>]+>', '', c).strip() for c in td_cells]
            rows = rows[1:]
        if not headers: return ''
        md_table.append('| ' + ' | '.join(headers) + ' |')
        md_table.append('| ' + ' | '.join(['---'] * len(headers)) + ' |')
        for r in rows:
            cells = re.findall(r'<td[^>]*>([\s\S]*?)</td>', r)
            if cells:
                cell_texts = [re.sub(r'<[^>]+>', '', c).strip().replace('\n', ' ') for c in cells]
                while len(cell_texts) < len(headers): cell_texts.append('')
                md_table.append('| ' + ' | '.join(cell_texts[:len(headers)]) + ' |')
        return '\n\n' + '\n'.join(md_table) + '\n\n'

    text = re.sub(r'<table[^>]*>[\s\S]*?</table>', parse_table, text)

    # Step 8: Formatting
    # Clean empty strong/b/em/i tags and merge adjacent strong/b tags
    text = re.sub(r'<(strong|b)[^>]*>[\s\u00a0]*</\1>', '', text)
    text = re.sub(r'</(strong|b)>\s*<(strong|b)[^>]*>', ' ', text)
    text = re.sub(r'<(strong|b)[^>]*>([\s\S]*?)</\1>', lambda m: f"**{m.group(2).strip()}**" if m.group(2).strip() else "", text)
    text = re.sub(r'<(em|i)[^>]*>([\s\S]*?)</\1>', lambda m: f"*{m.group(2).strip()}*" if m.group(2).strip() else "", text)
    text = re.sub(r'<p[^>]*>([\s\S]*?)</p>', lambda m: f"\n\n{m.group(1).strip()}\n\n", text)
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'<hr[^>]*>', '\n\n---\n\n', text)

    # Step 9: Strip remaining HTML tags and clean up
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'<[a-zA-Z0-9_\-\"\'=\s]*$', '', text)
    text = html.unescape(text)

    # Step 10: Restore code blocks and math tokens
    for k, v in code_blocks.items():
        if v.startswith('\n\n```'):
            pattern = re.compile(rf'(^[ \t]*){re.escape(k)}', re.MULTILINE)
            def repl_indented_code(m):
                indent = m.group(1)
                lines = v.strip('\n').split('\n')
                indented = '\n'.join(f"{indent}{l}" if l.strip() else "" for l in lines)
                return f"\n\n{indented}\n\n"
            if pattern.search(text):
                text = pattern.sub(repl_indented_code, text)
            else:
                text = text.replace(k, v)
        else:
            text = text.replace(k, v)

    for k, v in inline_codes.items():
        text = text.replace(k, v)
        
    for k, v in math_tokens.items():
        if k.startswith('__MATH_DISPLAY_'):
            pattern = re.compile(rf'(^[ \t]*){re.escape(k)}', re.MULTILINE)
            def repl_indented(m):
                indent = m.group(1)
                lines = v.strip('\n').split('\n')
                indented = '\n'.join(f"{indent}{l}" if l.strip() else "" for l in lines)
                return f"\n\n{indented}\n\n"
            if pattern.search(text):
                text = pattern.sub(repl_indented, text)
            else:
                text = text.replace(k, v)
        else:
            text = text.replace(k, v)

    for k, v in math_tokens.items():
        if k in text:
            text = text.replace(k, v)

    text = re.sub(r'\n{3,}', '\n\n', text).strip()
    # Step 11: Normalize Markdown formatting
    text = normalize_markdown_formatting(text)
    return text

def migrate_single_slug(reader, slug, category=None, p_type='Bài học', grade=None, tags=None):
    cache_path = f"cache/all/{slug}/index.html"
    raw_html_bytes = reader.get_file(cache_path)
    if not raw_html_bytes:
        print(f"Error: Slug '{slug}' not found in wpress cache!")
        return False
        
    raw_html = raw_html_bytes.decode('utf-8', errors='replace')
    
    # Title
    h1_m = re.search(r'<h1[^>]*class=[\"\'][^\"\']*wp-block-post-title[^\"\']*[\"\'][^>]*>(.*?)</h1>', raw_html, re.DOTALL)
    if h1_m:
        title = clean_text(re.sub(r'<[^>]+>', '', h1_m.group(1))).strip()
    else:
        title_m = re.search(r'<title>(.*?)</title>', raw_html, re.IGNORECASE)
        title = title_m.group(1).split(' - ')[0].split(' – ')[0].strip() if title_m else slug
    title = re.sub(r'^[✅✔\s]+', '', title)
    
    # Description
    desc_m = re.search(r'<meta\s+name=[\"\']description[\"\']\s+content=[\"\'](.*?)[\"\']', raw_html, re.IGNORECASE)
    desc = html.unescape(desc_m.group(1)).strip() if desc_m else f"Nội dung và bài tập về {title}."
    desc = re.sub(r'^[✅✔\s]+', '', desc)
    if len(desc) > 250:
        desc = desc[:247] + '...'
        
    # Date
    date_m = re.search(r'<time[^>]*datetime=[\"\'](\d{4}-\d{2}-\d{2})', raw_html)
    date_val = date_m.group(1) if date_m else '2024-10-02'
    
    # Extract content
    idx_start = raw_html.find('entry-content')
    if idx_start != -1:
        open_div = raw_html.rfind('<div', 0, idx_start)
        end_markers = ['id="comments"', 'class="comments-area"', 'taxonomy-post_tag', 'wp-block-post-terms', '<!-- .entry-content -->', '</main>']
        indices = [raw_html.find(m, open_div) for m in end_markers if raw_html.find(m, open_div) != -1]
        idx_end = min(indices) if indices else len(raw_html)
        content_html = raw_html[open_div:idx_end]
    else:
        content_html = raw_html
        
    # Extract images
    img_urls = re.findall(r'<img[^>]+src=[\"\'](https://o2\.edu\.vn/wp-content/uploads/[^\"\']+)[\"\']', content_html)
    image_map = {}
    
    for full_url in set(img_urls):
        clean_url = full_url.split('?')[0]
        rel_path = clean_url.replace('https://o2.edu.vn/wp-content/', '')
        unquoted_rel_path = urllib.parse.unquote(rel_path)
        img_name = os.path.basename(unquoted_rel_path)
        dest_filename = f"{slug}-{img_name}"
        if len(dest_filename) > 180:
            name_part, ext_part = os.path.splitext(img_name)
            short_slug = slug[:60]
            short_name = name_part[:60]
            dest_filename = f"{short_slug}-{short_name}{ext_part}"
        dest_path = os.path.join(ASSETS_IMG_DIR, dest_filename)
        
        img_bytes = reader.get_file(unquoted_rel_path) or reader.get_file(rel_path)
        if img_bytes:
            with open(dest_path, 'wb') as img_out:
                img_out.write(img_bytes)
            local_link = f"assets/images/{dest_filename}"
            image_map[full_url] = local_link
            image_map[clean_url] = local_link
            image_map[urllib.parse.unquote(full_url)] = local_link
            image_map[urllib.parse.unquote(clean_url)] = local_link
            
    # Extract document attachments (.pdf, .docx, .zip, .mp4, etc.)
    doc_urls = re.findall(r'href=[\"\'](https?://o2\.edu\.vn/wp-content/uploads/[^\"\']+\.(?:pdf|docx?|xlsx?|pptx?|zip|rar|mp4|mp3))[\"\']', content_html, re.I)
    doc_map = {}
    drive_links = load_drive_links()
    
    for full_url in set(doc_urls):
        clean_url = full_url.split('?')[0]
        rel_path = re.sub(r'^https?://o2\.edu\.vn/wp-content/', '', clean_url)
        unquoted_rel_path = urllib.parse.unquote(rel_path)
        doc_name = os.path.basename(unquoted_rel_path)
        doc_name = re.sub(r'[-_]o2\.edu_\.vn_', '-giasu.ai.vn', doc_name)
        
        file_bytes = reader.get_file(unquoted_rel_path) or reader.get_file(rel_path)
        if not file_bytes:
            continue
            
        # Clean internal o2.edu.vn links in docx/pptx/xlsx files
        if doc_name.endswith(('.docx', '.pptx', '.xlsx')):
            try:
                import io, zipfile
                z_in = zipfile.ZipFile(io.BytesIO(file_bytes), 'r')
                bio_out = io.BytesIO()
                z_out = zipfile.ZipFile(bio_out, 'w', compression=zipfile.ZIP_DEFLATED)
                has_change = False
                for item in z_in.infolist():
                    data = z_in.read(item.filename)
                    if item.filename.endswith(('.xml', '.rels', '.txt')):
                        try:
                            text = data.decode('utf-8')
                            new_text = text
                            for tgt in ['http://o2.edu.vn/', 'http://o2.edu.vn', 'https://o2.edu.vn/', 'https://o2.edu.vn']:
                                new_text = new_text.replace(tgt, 'https://giasu.ai.vn/')
                            if new_text != text:
                                has_change = True
                                data = new_text.encode('utf-8')
                        except UnicodeDecodeError:
                            pass
                    z_out.writestr(item, data)
                z_out.close()
                z_in.close()
                if has_change:
                    file_bytes = bio_out.getvalue()
            except Exception:
                pass
            
        file_len = len(file_bytes)
        
        if file_len >= MAX_LOCAL_DOC_SIZE:
            # File lớn >= 5MB: Lưu vào thư mục chờ tải lên Google Drive
            drive_file_path = os.path.join(DRIVE_UPLOAD_DIR, doc_name)
            if not os.path.exists(drive_file_path):
                with open(drive_file_path, 'wb') as f_out:
                    f_out.write(file_bytes)
                print(f"Saved large file for Google Drive upload: {doc_name} ({file_len / (1024 * 1024):.2f} MB)")
                
            # Đảm bảo không để file lớn trong assets/docs
            local_dest = os.path.join(ASSETS_DOC_DIR, doc_name)
            if os.path.exists(local_dest):
                os.remove(local_dest)
                
            record_drive_pending(doc_name, file_len, slug)
            
            # Gán link Drive nếu đã có, hoặc link chờ
            if doc_name in drive_links and drive_links[doc_name].startswith('http'):
                final_link = drive_links[doc_name]
            else:
                final_link = f"#drive-pending-{doc_name}"
                
            doc_map[full_url] = final_link
            doc_map[clean_url] = final_link
            doc_map[urllib.parse.unquote(full_url)] = final_link
            doc_map[urllib.parse.unquote(clean_url)] = final_link
        else:
            # File nhẹ < 5MB: Lưu trữ trực tiếp trong assets/docs/
            dest_path = os.path.join(ASSETS_DOC_DIR, doc_name)
            if not os.path.exists(dest_path):
                with open(dest_path, 'wb') as f_out:
                    f_out.write(file_bytes)
                print(f"Extracted document: {doc_name} ({file_len:,} bytes)")
                
            local_doc_link = f"/assets/docs/{doc_name}"
            doc_map[full_url] = local_doc_link
            doc_map[clean_url] = local_doc_link
            doc_map[urllib.parse.unquote(full_url)] = local_doc_link
            doc_map[urllib.parse.unquote(clean_url)] = local_doc_link

    body_md = convert_html_to_markdown(content_html, image_map, doc_map, slug=slug)
    
    # Remove redundant top H1 if identical to title
    body_md = re.sub(rf'^#\s+{re.escape(title)}\s*\n+', '', body_md).strip()
    
    # Remove trailing WordPress comments and discussion sections
    body_md = re.split(r'\n##\s+(?:Comments|Bình luận)\b|\n###\s+(?:Leave a Reply|One response to|\d+\s+responses?\s+to)\b', body_md)[0].strip()
    slug_map = load_slug_map()
    target_slug = slug_map.get(slug, slug)
    out_file = os.path.join(POST_DIR, f"{target_slug}.md")
    existing_fm = {}
    if os.path.exists(out_file):
        try:
            with open(out_file, 'r', encoding='utf-8') as ef:
                parts = ef.read().split('---', 2)
                if len(parts) >= 3:
                    existing_fm = yaml.safe_load(parts[1]) or {}
        except Exception:
            pass

    # Category
    if existing_fm.get('category'):
        category = existing_fm['category']
    elif not category:
        category = 'Toán học' if 'toan' in slug else ('Hóa học' if 'hoa' in slug else 'Các môn khác')
        
    # Tags
    if existing_fm.get('tags'):
        tags = existing_fm['tags']
    elif not tags:
        tags = [category]

    # Type
    if existing_fm.get('type'):
        p_type = existing_fm['type']

    # Grade
    if existing_fm.get('grade') is not None:
        grade = existing_fm['grade']

    # Date
    if existing_fm.get('date'):
        date_val = existing_fm['date']
        
    front_matter_dict = {
        'title': title,
        'description': desc,
        'category': category,
        'type': p_type,
        'date': date_val,
        'tags': tags
    }
    if grade is not None:
        if isinstance(grade, str):
            grade_num = re.search(r'\d+', grade)
            if grade_num and 1 <= int(grade_num.group(0)) <= 12:
                front_matter_dict['grade'] = int(grade_num.group(0))
        elif isinstance(grade, int) and 1 <= grade <= 12:
            front_matter_dict['grade'] = grade
        
    front_matter_str = yaml.dump(front_matter_dict, allow_unicode=True, sort_keys=False).strip()
    full_post_md = f"---\n{front_matter_str}\n---\n\n{body_md}\n"
    
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(full_post_md)
        
    print(f"Migrated: {slug} -> {out_file} (Images: {len(image_map)}, Chars: {len(full_post_md):,})")
    return True

if __name__ == '__main__':
    if len(sys.argv) > 1:
        slug_arg = sys.argv[1]
        reader = WpressReader(WPRESS_PATH)
        migrate_single_slug(reader, slug_arg)
        reader.close()
    else:
        print("Usage: python3 scripts/migrate_wpress.py <slug>")
