#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Chuyển toàn bộ tài liệu >= 3MB từ assets/docs/ sang o2edu/drive_upload/
để tải lên Google Drive, đồng thời:
1. Ghi nhận vào o2edu/drive_links.csv
2. Cập nhật liên kết tạm thời (#drive-pending-...) trong các bài viết post/*.md
3. Giảm ngưỡng lưu trữ cục bộ MAX_LOCAL_DOC_SIZE trong migrate_wpress.py xuống 3MB
"""

import os
import glob
import shutil

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(WORKSPACE_ROOT, 'assets/docs')
POSTS_DIR = os.path.join(WORKSPACE_ROOT, 'post')
DRIVE_UPLOAD_DIR = os.path.join(WORKSPACE_ROOT, 'o2edu/drive_upload')
DRIVE_LINKS_FILE = os.path.join(WORKSPACE_ROOT, 'o2edu/drive_links.csv')
THRESHOLD = 3 * 1024 * 1024  # 3MB (3,145,728 bytes)

def offload_large_docs():
    os.makedirs(DRIVE_UPLOAD_DIR, exist_ok=True)

    # 1. Quét các file >= 3MB trong assets/docs/
    large_files = []
    for fname in sorted(os.listdir(DOCS_DIR)):
        fpath = os.path.join(DOCS_DIR, fname)
        if os.path.isfile(fpath):
            sz = os.path.getsize(fpath)
            if sz >= THRESHOLD:
                large_files.append((fname, sz))

    print(f"Tìm thấy {len(large_files)} tệp >= 3MB trong assets/docs/.")
    if not large_files:
        print("Không có tệp nào cần chuyển.")
        return

    # 2. Đọc danh sách drive_links.csv hiện tại
    existing_entries = {}
    csv_lines = []
    if os.path.exists(DRIVE_LINKS_FILE):
        with open(DRIVE_LINKS_FILE, 'r', encoding='utf-8') as f:
            csv_lines = [l.strip() for l in f if l.strip()]
        for line in csv_lines[1:]:
            parts = line.split(',', 3)
            if parts and parts[0]:
                existing_entries[parts[0].strip()] = line
    else:
        csv_lines.append('filename,file_size_mb,source_post,drive_url')

    # 3. Quét các bài viết để xác định bài viết nguồn
    posts = glob.glob(os.path.join(POSTS_DIR, '*.md'))
    post_data = {}
    for p in posts:
        slug = os.path.splitext(os.path.basename(p))[0]
        with open(p, 'r', encoding='utf-8') as f:
            post_data[p] = (slug, f.read())

    # 4. Di chuyển file và cập nhật liên kết
    moved_count = 0
    total_bytes = 0
    updated_posts = set()
    new_csv_rows = []

    for fname, sz in large_files:
        src = os.path.join(DOCS_DIR, fname)
        dst = os.path.join(DRIVE_UPLOAD_DIR, fname)

        # Copy sang drive_upload
        shutil.copy2(src, dst)
        if os.path.getsize(dst) != sz:
            raise RuntimeError(f"Lỗi sao chép tệp {fname}: kích thước không khớp!")

        # Xóa khỏi assets/docs
        os.remove(src)
        moved_count += 1
        total_bytes += sz

        # Tìm các bài viết chứa file này
        matched_slugs = []
        target_local_link = f"/assets/docs/{fname}"
        pending_link = f"#drive-pending-{fname}"

        for p_path, (slug, content) in list(post_data.items()):
            if target_local_link in content:
                matched_slugs.append(slug)
                new_content = content.replace(target_local_link, pending_link)
                post_data[p_path] = (slug, new_content)
                updated_posts.add(p_path)

        # Ghi nhận vào CSV
        if fname not in existing_entries:
            size_mb = round(sz / (1024 * 1024), 2)
            source_slug = ';'.join(matched_slugs) if matched_slugs else ''
            row_str = f"{fname},{size_mb},{source_slug},"
            csv_lines.append(row_str)
            new_csv_rows.append(row_str)

    # 5. Lưu lại các bài viết đã cập nhật
    for p_path in updated_posts:
        _, new_content = post_data[p_path]
        with open(p_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

    # 6. Ghi đè drive_links.csv
    with open(DRIVE_LINKS_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(csv_lines) + '\n')

    print(f"✓ Đã chuyển {moved_count} tệp ({total_bytes / (1024 * 1024):.2f} MB) sang o2edu/drive_upload/")
    print(f"✓ Đã cập nhật liên kết chờ trên {len(updated_posts)} bài viết.")
    print(f"✓ Đã bổ sung {len(new_csv_rows)} dòng vào o2edu/drive_links.csv.")

    # 7. Kiểm tra tệp còn lại trong assets/docs/
    remaining = [os.path.getsize(os.path.join(DOCS_DIR, f)) for f in os.listdir(DOCS_DIR) if os.path.isfile(os.path.join(DOCS_DIR, f))]
    max_rem = max(remaining) if remaining else 0
    print(f"Số tệp còn lại trong assets/docs/: {len(remaining)} tệp.")
    print(f"Kích thước tệp lớn nhất còn lại: {max_rem / (1024 * 1024):.2f} MB ({max_rem:,} bytes).")

if __name__ == '__main__':
    offload_large_docs()
