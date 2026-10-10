#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Rà soát và đổi tên các tệp có chứa o2.edu_.vn, o2.edu, o2edu thành giasu.ai.vn:
1. Đổi tên tệp trong assets/docs/, o2edu/drive_upload/, assets/images/
2. Cập nhật các liên kết trong post/*.md
3. Cập nhật o2edu/drive_links.csv
"""

import os
import glob
import re

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(WORKSPACE_ROOT, 'assets/docs')
DRIVE_DIR = os.path.join(WORKSPACE_ROOT, 'o2edu/drive_upload')
IMAGES_DIR = os.path.join(WORKSPACE_ROOT, 'assets/images')
POSTS_DIR = os.path.join(WORKSPACE_ROOT, 'post')
DRIVE_LINKS_FILE = os.path.join(WORKSPACE_ROOT, 'o2edu/drive_links.csv')

def get_new_name(name):
    orig = name
    name = re.sub(r'o2\.edu_?\.vn_?', '-giasu.ai.vn', name, flags=re.I)
    name = re.sub(r'o2\.edu', '-giasu.ai.vn', name, flags=re.I)
    name = re.sub(r'o2eduvn', '-giasu.ai.vn', name, flags=re.I)
    name = re.sub(r'o2edu', '-giasu.ai.vn', name, flags=re.I)
    name = re.sub(r'^o2-', 'giasu.ai.vn-', name, flags=re.I)
    name = re.sub(r'^-giasu\.ai\.vn-?', 'giasu.ai.vn-', name)
    name = re.sub(r'\.-giasu\.ai\.vn', '-giasu.ai.vn', name)
    name = re.sub(r'_+-giasu\.ai\.vn', '-giasu.ai.vn', name)
    name = re.sub(r'--+', '-', name)
    name = re.sub(r'-giasu\.ai\.vn\.', '-giasu.ai.vn.', name)
    return name

def rename_files():
    rename_map = {}

    for folder in [DOCS_DIR, DRIVE_DIR, IMAGES_DIR]:
        if not os.path.exists(folder):
            continue
        for fname in sorted(os.listdir(folder)):
            if re.search(r'o2\.edu|o2eduvn|o2edu|^o2-', fname, re.I):
                new_name = get_new_name(fname)
                if new_name != fname:
                    old_path = os.path.join(folder, fname)
                    new_path = os.path.join(folder, new_name)
                    os.rename(old_path, new_path)
                    rename_map[fname] = new_name
                    print(f"Renamed in {os.path.basename(folder)}: {fname} -> {new_name}")

    print(f"\nTổng số tệp đã đổi tên: {len(rename_map)}")

    # Cập nhật drive_links.csv
    if os.path.exists(DRIVE_LINKS_FILE):
        with open(DRIVE_LINKS_FILE, 'r', encoding='utf-8') as f:
            csv_content = f.read()
        for old_name, new_name in rename_map.items():
            if old_name in csv_content:
                csv_content = csv_content.replace(old_name, new_name)
        with open(DRIVE_LINKS_FILE, 'w', encoding='utf-8') as f:
            f.write(csv_content)
        print("✓ Đã cập nhật o2edu/drive_links.csv")

    # Cập nhật post/*.md
    posts = glob.glob(os.path.join(POSTS_DIR, '*.md'))
    updated_posts = 0
    total_replacements = 0

    for p in posts:
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = content
        post_replacements = 0
        for old_name, new_name in rename_map.items():
            if old_name in new_content:
                count = new_content.count(old_name)
                new_content = new_content.replace(old_name, new_name)
                post_replacements += count

        if post_replacements > 0:
            with open(p, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_posts += 1
            total_replacements += post_replacements

    print(f"✓ Đã cập nhật {total_replacements} liên kết trên {updated_posts} bài viết.")

if __name__ == '__main__':
    rename_files()
