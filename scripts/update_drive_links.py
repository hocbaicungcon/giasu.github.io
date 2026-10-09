#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Công cụ cập nhật liên kết Google Drive cho các bài viết.
Đọc danh sách từ o2edu/drive_links.csv và tự động cập nhật vào các tệp post/*.md.
"""

import os
import re
import csv

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
POST_DIR = os.path.join(WORKSPACE_ROOT, 'post')
DRIVE_LINKS_FILE = os.path.join(WORKSPACE_ROOT, 'o2edu/drive_links.csv')

def update_drive_links():
    if not os.path.exists(DRIVE_LINKS_FILE):
        print(f"Không tìm thấy tệp {DRIVE_LINKS_FILE}!")
        return

    mapping = {}
    with open(DRIVE_LINKS_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            fn = row.get('filename', '').strip()
            url = row.get('drive_url', '').strip()
            if fn and url and url.startswith(('http://', 'https://')):
                mapping[fn] = url

    if not mapping:
        print("Chưa có liên kết Google Drive nào được điền trong o2edu/drive_links.csv.")
        print("Vui lòng tải các tệp trong thư mục o2edu/drive_upload/ lên Google Drive và điền link vào tệp CSV.")
        return

    print(f"Tìm thấy {len(mapping)} liên kết Google Drive hợp lệ. Đang quét bài viết...")

    updated_files = 0
    total_replacements = 0

    for fname in os.listdir(POST_DIR):
        if not fname.endswith('.md'):
            continue
        post_path = os.path.join(POST_DIR, fname)
        with open(post_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        file_replacements = 0

        for doc_name, drive_url in mapping.items():
            # Match 1: Placeholder dạng #drive-pending-<doc_name>
            placeholder = f"#drive-pending-{doc_name}"
            if placeholder in new_content:
                new_content = new_content.replace(placeholder, drive_url)
                file_replacements += 1

            # Match 2: Đường dẫn cục bộ cũ dạng /assets/docs/<doc_name>
            local_path = f"/assets/docs/{doc_name}"
            if local_path in new_content:
                new_content = new_content.replace(local_path, drive_url)
                file_replacements += 1

        if file_replacements > 0:
            with open(post_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_files += 1
            total_replacements += file_replacements
            print(f"  ✓ Đã cập nhật {fname}: {file_replacements} liên kết.")

    print(f"\nHoàn tất! Đã cập nhật {total_replacements} liên kết trên {updated_files} bài viết.")

if __name__ == '__main__':
    update_drive_links()
