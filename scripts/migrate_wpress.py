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
MAX_LOCAL_DOC_SIZE = 5 * 1024 * 1024  # 5MB: Các file >= 5MB chuyển sang Google Drive

os.makedirs(ASSETS_IMG_DIR, exist_ok=True)
os.makedirs(ASSETS_DOC_DIR, exist_ok=True)
os.makedirs(POST_DIR, exist_ok=True)
os.makedirs(DRIVE_UPLOAD_DIR, exist_ok=True)

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
    # Clean whitespace
    math_str = re.sub(r'[ \t]+', ' ', math_str).strip()
    return math_str

def convert_html_to_markdown(raw_html, image_map, doc_map=None):
    if doc_map is None:
        doc_map = {}
    text = raw_html

    # Step 0: Normalize LaTeX delimiters & environment names
    text = re.sub(r'\\\[([\s\S]*?)\\\]', r'$$\1$$', text)
    text = re.sub(r'\\\(([\s\S]*?)\\\)', r'$\1$', text)
    # Convert \begin{align} / \begin{align*} to \begin{aligned} everywhere for universal KaTeX compatibility
    text = re.sub(r'\\begin\{align\*?\}', r'\\begin{aligned}', text)
    text = re.sub(r'\\end\{align\*?\}', r'\\end{aligned}', text)
    # Fix accidental double dollar typos with spaces: "$ $ABCD" -> "$ABCD"
    text = re.sub(r'\$\s+\$(?=[A-Za-z0-9\\])', '$', text)

    # Step 1: Protect Math tokens safely
    math_tokens = {}
    
    # 1.1 Display math $$ ... $$
    def replace_display_math(m):
        math_content = clean_math_body(m.group(1))
        token = f"__MATH_DISPLAY_{len(math_tokens)}__"
        math_tokens[token] = f"\n\n$$\n{math_content}\n$$\n\n"
        return token

    text = re.sub(r'\$\$([\s\S]*?)\$\$', replace_display_math, text)

    # 1.2 Inline math $ ... $ (ngăn match xuyên qua các thẻ block như </p>, </li>, v.v.)
    def replace_inline_math(m):
        math_content = clean_math_body(m.group(1))
        # Chuẩn hóa inline math trên 1 dòng duy nhất để tránh bị lỗi markdown tokenizer
        math_content = re.sub(r'\s*\n\s*', ' ', math_content)
        token = f"__MATH_INLINE_{len(math_tokens)}__"
        math_tokens[token] = f"${math_content}$"
        return token

    block_tags = r'</?(?:p|div|h[1-6]|li|ul|ol|table|pre)\b'
    text = re.sub(rf'(?<!\$)\$(?!\$)((?:(?!{block_tags})[^\$])+?)(?<!\$)\$(?!\$)', replace_inline_math, text)

    # 1.3 Standalone multiline environments: now only for those NOT already enclosed in $$ or $
    def replace_standalone_env(m):
        math_content = clean_math_body(m.group(1))
        token = f"__MATH_DISPLAY_{len(math_tokens)}__"
        math_tokens[token] = f"\n\n$$\n\\begin{{aligned}}\n{math_content}\n\\end{{aligned}}\n$$\n\n"
        return token

    text = re.sub(r'\\begin\{(?:aligned|gather\*?)\}([\s\S]*?)\\end\{(?:aligned|gather\*?)\}', replace_standalone_env, text)

    # Step 2: Code blocks
    code_blocks = {}
    def save_code(m):
        key = f"__CODE_BLOCK_{len(code_blocks)}__"
        code_text = html.unescape(m.group(1))
        code_blocks[key] = f"\n```\n{code_text.strip()}\n```\n"
        return key
    text = re.sub(r'<pre[^>]*><code[^>]*>([\s\S]*?)</code></pre>', save_code, text)

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
            # Tách các khối Display Math và hình ảnh thành các đoạn riêng để thụt lề chuẩn trong list item
            item_clean = re.sub(r'(__MATH_DISPLAY_\d+__|!\[[^\]]*\]\([^)]+\))', r'\n\n\1\n\n', item_clean)
            
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

    # Step 6: Links
    def replace_a(match):
        href = match.group(1)
        link_text = match.group(2)
        clean_href = href.split('?')[0]
        if clean_href in doc_map:
            href = doc_map[clean_href]
        elif 'o2.edu.vn' in href:
            p = href.replace('https://o2.edu.vn/', '').strip('/')
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
    text = re.sub(r'<(strong|b)[^>]*>([\s\S]*?)</\1>', lambda m: f"**{m.group(2).strip()}**", text)
    text = re.sub(r'<(em|i)[^>]*>([\s\S]*?)</\1>', lambda m: f"*{m.group(2).strip()}*", text)
    text = re.sub(r'<p[^>]*>([\s\S]*?)</p>', lambda m: f"\n\n{m.group(1).strip()}\n\n", text)
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'<hr[^>]*>', '\n\n---\n\n', text)

    # Step 9: Strip remaining HTML tags and clean up
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'<[a-zA-Z0-9_\-\"\'=\s]*$', '', text)
    text = html.unescape(text)

    # Step 10: Restore code blocks and math tokens
    for k, v in code_blocks.items():
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
        idx_end = raw_html.find('taxonomy-post_tag', open_div)
        if idx_end == -1:
            idx_end = raw_html.find('wp-block-post-terms', open_div)
        if idx_end == -1:
            idx_end = raw_html.find('<!-- .entry-content -->', open_div)
        if idx_end == -1:
            idx_end = raw_html.find('</main>', open_div)
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
            
    # Extract document attachments (.pdf, .docx, .zip, etc.)
    doc_urls = re.findall(r'href=[\"\'](https://o2\.edu\.vn/wp-content/uploads/[^\"\']+\.(?:pdf|docx?|xlsx?|pptx?|zip|rar))[\"\']', content_html, re.I)
    doc_map = {}
    drive_links = load_drive_links()
    
    for full_url in set(doc_urls):
        clean_url = full_url.split('?')[0]
        rel_path = clean_url.replace('https://o2.edu.vn/wp-content/', '')
        unquoted_rel_path = urllib.parse.unquote(rel_path)
        doc_name = os.path.basename(unquoted_rel_path)
        
        file_bytes = reader.get_file(unquoted_rel_path) or reader.get_file(rel_path)
        if not file_bytes:
            continue
            
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

    body_md = convert_html_to_markdown(content_html, image_map, doc_map)
    
    # Remove redundant top H1 if identical to title
    body_md = re.sub(rf'^#\s+{re.escape(title)}\s*\n+', '', body_md).strip()
    
    # Default category fallback
    if not category:
        category = 'Toán học' if 'toan' in slug else ('Hóa học' if 'hoa' in slug else 'Các môn khác')
        
    if not tags:
        tags = [category]
        
    front_matter_dict = {
        'title': title,
        'description': desc,
        'category': category,
        'type': p_type,
        'date': date_val,
        'tags': tags
    }
    if grade:
        if isinstance(grade, str):
            grade_num = re.search(r'\d+', grade)
            if grade_num and 1 <= int(grade_num.group(0)) <= 12:
                front_matter_dict['grade'] = int(grade_num.group(0))
        elif isinstance(grade, int) and 1 <= grade <= 12:
            front_matter_dict['grade'] = grade
        
    front_matter_str = yaml.dump(front_matter_dict, allow_unicode=True, sort_keys=False).strip()
    full_post_md = f"---\n{front_matter_str}\n---\n\n{body_md}\n"
    
    out_file = os.path.join(POST_DIR, f"{slug}.md")
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
