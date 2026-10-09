#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Chuẩn hóa hình thức các liên kết tải tài liệu trong toàn bộ các bài viết:
- Xóa các nút [Download] / [Tải về] thừa kế tiếp.
- Định dạng mỗi liên kết tải thành một dòng kiểu liệt kê (- [Tên file](URL)).
- Dọn sạch tên website gắn liền vào nhãn (giasu.ai.vn / o2.edu.vn).
- Gom các mục liệt kê tải liên tiếp thành danh sách gọn gàng (tight list).
"""

import glob
import os
import re

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
POST_DIR = os.path.join(WORKSPACE_ROOT, 'post')

DOC_EXTS = r"\.(?:docx?|pdf|xlsx?|pptx?|zip|rar|7z)"

def clean_label(label):
    cleaned = re.sub(r"[-_.\s]*giasu\.ai\.vn\b|[-_.\s]*o2\.edu\.vn\b", "", label, flags=re.I).strip()
    return cleaned if cleaned else label

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    orig = content

    # 1. Xóa nút Download / Tải về trùng link ngay sau liên kết chính
    content = re.sub(
        r"(\[[^\]\r\n]+\]\(([^)\r\n]+)\))[ \t]*\[(?:Download|Tải về)\]\(\2\)",
        r"\1",
        content,
        flags=re.I
    )

    # 2. Xử lý từng dòng để chuẩn hóa thành list item (- [Nhãn](URL))
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        line_s = line.strip()

        # Dạng: file word/pdf [label](url)
        m_wp = re.match(r"^(\s*)file\s+(word|pdf)\s+\[(.*?)\]\((.*?)\)\s*$", line, flags=re.I)
        if m_wp:
            indent, ftype, label, url = m_wp.groups()
            new_lines.append(f"{indent}- [File {ftype.upper()}: {clean_label(label)}]({url})")
            continue

        # Dạng: [label](url) đứng độc lập một dòng (chưa có bullet)
        m_doc = re.match(r"^(\s*)\[(.*?)\]\((.*?)\)\s*$", line)
        if m_doc:
            indent, label, url = m_doc.groups()
            is_doc = (
                "/assets/docs/" in url
                or re.search(DOC_EXTS, url, re.I)
                or ("drive.google.com" in url and ("file/d/" in url or "folders/" in url))
            )
            if is_doc:
                lbl = clean_label(label)
                if lbl.startswith("http"):
                    lbl = "Link tải Google Drive"
                new_lines.append(f"{indent}- [{lbl}]({url})")
                continue

        # Dạng: đã là bullet item (- [label](url)), dọn dẹp nhãn nếu có đuôi tên miền
        m_bullet = re.match(r"^(\s*[-*+]\s+)\[(.*?)\]\((.*?)\)\s*$", line)
        if m_bullet:
            indent, label, url = m_bullet.groups()
            is_doc = (
                "/assets/docs/" in url
                or re.search(DOC_EXTS, url, re.I)
                or "drive.google.com" in url
            )
            if is_doc:
                lbl = clean_label(label)
                new_lines.append(f"{indent}[{lbl}]({url})")
                continue

        new_lines.append(line)

    content = '\n'.join(new_lines)

    # 3. Gom các mục danh sách tải file liên tiếp cách nhau một dòng trống
    doc_link_item = r"(?:/assets/docs/|https?://drive\.google\.com/|\.(?:docx?|pdf|xlsx?|pptx?|zip|rar|7z))"
    tight_pattern = rf"(^[ \t]*-[ \t]+\[[^\]\r\n]+\]\({doc_link_item}[^)\r\n]*\))[ \t]*\n\n(?=[ \t]*-[ \t]+\[[^\]\r\n]+\]\({doc_link_item}[^)\r\n]*\))"
    content = re.sub(tight_pattern, r"\1\n", content, flags=re.MULTILINE)

    if content != orig:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    all_files = sorted(glob.glob(os.path.join(POST_DIR, '*.md')))
    modified_count = 0
    print(f"Quét {len(all_files)} bài viết trong post/...")
    for f in all_files:
        if process_file(f):
            modified_count += 1
            print(f"  Đã chuẩn hóa: {os.path.basename(f)}")
    print(f"\nHoàn thành: Đã chuẩn hóa {modified_count} bài viết.")

if __name__ == '__main__':
    main()
