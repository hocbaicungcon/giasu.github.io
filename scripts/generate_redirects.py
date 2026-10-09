#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Tự động quét danh sách bài viết đã di chuyển từ o2.edu.vn sang giasu.ai.vn
và xuất ra 4 định dạng chuyển hướng 301 chuẩn:
1. o2edu/.htaccess & o2edu/redirects.htaccess (Apache / LiteSpeed)
2. o2edu/redirects.txt (Nginx & Cloudflare)
3. o2edu/redirects.csv (Nhập vào plugin Redirection, Rank Math, Yoast SEO)
4. o2edu/redirects.php (Plugin WordPress độc lập thả vào wp-content/plugins)
"""

import os

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
POST_DIR = os.path.join(WORKSPACE_ROOT, 'post')
O2EDU_DIR = os.path.join(WORKSPACE_ROOT, 'o2edu')
os.makedirs(O2EDU_DIR, exist_ok=True)

# Đọc toàn bộ slug bài viết từ thư mục post/
# Chỉ lấy những bài đã di chuyển từ o2.edu.vn (loại trừ các đề trắc nghiệm thi thử định dạng de-*)
all_posts = []
for f in os.listdir(POST_DIR):
    if f.endswith('.md'):
        slug = f[:-3]
        if not slug.startswith('de-') and not slug.startswith('11-2026-'):
            all_posts.append(slug)

all_posts = sorted(list(set(all_posts)))

# 1. Xuất .htaccess
htaccess_lines = [
    '# ============================================================================== #',
    '# QUY TẮC CHUYỂN HƯỚNG 301 TỪ O2.EDU.VN SANG GIASU.AI.VN                          #',
    '# Hướng dẫn: Dán khối này vào ĐẦU tệp .htaccess trên máy chủ o2.edu.vn           #',
    '# (Đặt TRƯỚC dòng "# BEGIN WordPress" để server chuyển hướng ngay, không nạp PHP) #',
    '# ============================================================================== #',
    '',
    '<IfModule mod_rewrite.c>',
    'RewriteEngine On',
    'RewriteBase /',
    ''
]
for s in all_posts:
    htaccess_lines.append(f'RewriteRule ^{s}/?$ https://giasu.ai.vn/bai-viet/{s}.html [R=301,L]')
htaccess_lines.extend(['</IfModule>', ''])

htaccess_content = '\n'.join(htaccess_lines)
with open(os.path.join(O2EDU_DIR, '.htaccess'), 'w', encoding='utf-8') as f:
    f.write(htaccess_content)
with open(os.path.join(O2EDU_DIR, 'redirects.htaccess'), 'w', encoding='utf-8') as f:
    f.write(htaccess_content)

# 2. Xuất redirects.txt (Nginx & Cloudflare)
txt_lines = [
    '# Bảng chuyển hướng 301 từ o2.edu.vn sang giasu.ai.vn',
    '# Định dạng URL trực tiếp:',
    ''
]
for s in all_posts:
    txt_lines.append(f'https://o2.edu.vn/{s}/ -> https://giasu.ai.vn/bai-viet/{s}.html')
txt_lines.extend(['', '# Cấu hình Nginx:', ''])
for s in all_posts:
    txt_lines.append(f'rewrite ^/{s}/?$ https://giasu.ai.vn/bai-viet/{s}.html permanent;')
txt_lines.append('')

with open(os.path.join(O2EDU_DIR, 'redirects.txt'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(txt_lines))

# 3. Xuất redirects.csv (Plugin Import)
csv_lines = ['source,target,code']
for s in all_posts:
    csv_lines.append(f'/{s}/,https://giasu.ai.vn/bai-viet/{s}.html,301')
csv_lines.append('')

with open(os.path.join(O2EDU_DIR, 'redirects.csv'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(csv_lines))

# 4. Xuất redirects.php (WordPress Plugin)
php_lines = [
    '<?php',
    '/**',
    ' * Plugin Name: Chuyển hướng 301 sang giasu.ai.vn',
    ' * Description: Tự động chuyển hướng các bài viết từ o2.edu.vn sang giasu.ai.vn bằng mã 301 chuẩn SEO.',
    f' * Version: 1.{len(all_posts)}',
    ' */',
    '',
    'add_action(\'template_redirect\', function() {',
    '    $redirects = ['
]
for s in all_posts:
    php_lines.append(f"        '/{s}/' => 'https://giasu.ai.vn/bai-viet/{s}.html',")
php_lines.extend([
    '    ];',
    '',
    '    $request_path = parse_url($_SERVER[\'REQUEST_URI\'], PHP_URL_PATH);',
    '    $trimmed_path = rtrim($request_path, \'/\');',
    '',
    '    foreach ($redirects as $old_path => $target_url) {',
    '        if (rtrim($old_path, \'/\') === $trimmed_path) {',
    '            wp_redirect($target_url, 301);',
    '            exit;',
    '        }',
    '    }',
    '});',
    ''
])

with open(os.path.join(O2EDU_DIR, 'redirects.php'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(php_lines))

print(f"Đã cập nhật thành công 4 định dạng redirect cho {len(all_posts)} bài viết vào thư mục o2edu/!")
