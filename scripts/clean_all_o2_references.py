#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script rà soát và làm sạch triệt để mọi xuất hiện của "o2.edu.vn", "o2.edu_.vn_", "o2edu"
trong tất cả các bài viết post/*.md.
"""

import os
import re
import glob

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
POST_DIR = os.path.join(WORKSPACE_ROOT, 'post')

def clean_label(label):
    cleaned = re.sub(r"[-_.\s]*(?:giasu\.ai\.vn|o2\.edu_?\.vn_?|o2\.edu|o2eduvn|o2edu)[-_.\s]*", "", label, flags=re.I).strip()
    return cleaned if cleaned else label

def clean_post_content(filepath, content):
    orig = content

    # 1. Image links wrapping local images to o2.edu.vn wp-content:
    # [![alt](assets/images/foo.jpg)](https://o2.edu.vn/wp-content/...) -> ![alt](assets/images/foo.jpg)
    content = re.sub(r'\[(\!\[[^\]]*\]\([^\)]+\))\]\(https?://o2\.edu\.vn/wp-content/[^\)]+\)', r'\1', content)

    # 2. Specific case: 100-de-toan-tin-tin-hoc-nha-truong.md
    content = content.replace('[PDF][100DeToanTin_o2.edu.vn]', '[File PDF: Lời giải 100 đề Toán Tin]')
    content = content.replace('[100DeToanTin_o2.edu.vn]', '[100 đề Toán Tin]')

    # 3. Clean anchor texts in markdown links: [label](url)
    def clean_link_anchor(match):
        label = match.group(1)
        url = match.group(2)
        new_label = clean_label(label)
        return f"[{new_label}]({url})"

    content = re.sub(r'\[([^\]]*o2[\._]?edu[^\]]*)\]\(([^\)]+)\)', clean_link_anchor, content, flags=re.I)

    # 4. Clean dead wp-content download URLs to #drive-pending-<doc_name>
    def clean_dead_wp_content(match):
        prefix = match.group(1)
        full_url = match.group(2)
        doc_name = os.path.basename(full_url.split('?')[0])
        return f"{prefix}(#drive-pending-{doc_name})"

    content = re.sub(r'(\[[^\]]+\])\(https?://o2\.edu\.vn/wp-content/uploads/[^\)]+\.([a-zA-Z0-9]+)\)', clean_dead_wp_content, content, flags=re.I)

    # 5. Email addresses
    content = re.sub(r'[a-zA-Z0-9._%+-]+@o2\.edu\.vn', 'lienhe@giasu.ai.vn', content, flags=re.I)

    # 6. Python example
    content = content.replace('Chuỗi nhập vào là o2.edu.vn thì đầu ra phải là O2.EDU.VN', 'Chuỗi nhập vào là giasu.ai.vn thì đầu ra phải là GIASU.AI.VN')

    # 7. Text mentions and comments
    content = re.sub(r'website\s+o2\.edu\.vn', 'website giasu.ai.vn', content, flags=re.I)
    content = re.sub(r'Web\s+o2\.edu\.vn', 'website giasu.ai.vn', content, flags=re.I)
    content = re.sub(r'cảm ơn\s+o2\.edu\.vn', 'cảm ơn GIA SƯ THÔNG MINH', content, flags=re.I)
    content = re.sub(r'Website\s+o2\.edu\.vn\s+gửi\s+đến', 'GIA SƯ THÔNG MINH gửi đến', content, flags=re.I)

    # 8. Broken blob images
    content = re.sub(r'!\[[^\]]*\]\(blob:https?://o2\.edu\.vn/[^\)]+\)\n*', '', content)

    # 9. Dead preview link
    content = re.sub(r'- \[Đề thi hsg lớp 12 môn hóa tỉnh Tuyên Quang năm 2008\]\(https://o2\.edu\.vn/\?p=47366&preview=true\)\n*', '', content)

    # 10. Comment author links
    content = content.replace('[minh](https://o2.edu.vn/)', 'minh')
    content = content.replace('[le nga](http://o2.edu)', 'le nga')
    content = content.replace('(http://o2.edu)', '')

    # 11. Watermark lines: standalone o2.edu.vn
    content = re.sub(r'^\s*o2\.edu\.vn\s*$\n?', '', content, flags=re.M | re.I)

    # 12. Frontmatter description in bai-tap-day-them-toan-9-chan-troi-sang-tao-file-word.md
    if 'Chương 1-Bài 1-ĐỀ BÀIo2.edu.vnDownload' in content:
        content = re.sub(r'description:\s*[\"\'\s]*Chương 1-Bài 1-ĐỀ BÀIo2\.edu\.vnDownload[^\n]*\n', 'description: Bài tập dạy thêm Toán 9 Chân Trời Sáng Tạo file Word có đề bài và lời giải chi tiết.\n', content)

    return content

def main():
    post_files = sorted(glob.glob(os.path.join(POST_DIR, '*.md')))
    modified_count = 0
    for pf in post_files:
        with open(pf, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = clean_post_content(pf, content)
        if new_content != content:
            with open(pf, 'w', encoding='utf-8') as f:
                f.write(new_content)
            modified_count += 1
            print(f"Cleaned: {os.path.basename(pf)}")

    print(f"\nDone! Modified {modified_count} files.")

if __name__ == '__main__':
    main()
