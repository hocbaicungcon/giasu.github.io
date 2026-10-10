#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Chuyển tiếp 50 bài viết giáo dục tiếp theo (Batch 17) từ o2.edu.vn sang giasu.ai.vn.
Các bài viết bao gồm:
- Toán học (Lớp 2, 4, 9, 10, 12): Tập hợp, hàm số bậc nhất, căn bậc hai, bồi dưỡng HSG tiểu học, trung bình cộng, quy tắc đếm, nguyên hàm tích phân, máy tính Casio.
- Ngữ văn (Lớp 10): Phân phối chương trình Ngữ Văn 10.
- Ngoại ngữ (Tiếng Anh 8, 12, Tiếng Trung, Tiếng Nhật): Chữ viết tiếng Nhật, từ ghép tiếng Trung, đề ôn tập tiếng Anh 8 & 12, truyện cổ tích song ngữ.
- CNTT (Dart/Flutter & Giáo án điện tử): Toán tử Dart, trọn bộ giáo án PowerPoint Hóa 11 KNTT.
- Hóa học (Lớp 10, 11, 12): Đề thi HSG các cụm trường Hà Nội, Bà Rịa Vũng Tàu, Thái Nguyên, Bình Định, Bạc Liêu, Sơn La, Nghệ An, Ninh Bình, Quảng Trị.
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from migrate_wpress import WpressReader, WPRESS_PATH, migrate_single_slug

BATCH_17_POSTS = [
    # --- Toán học (Lớp 2, 4, 9, 10, 12) ---
    {'slug': 'tap-hop-va-cac-phep-toan-tap-hop', 'category': 'Toán học', 'type': 'Bài học', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Tập hợp']},
    {'slug': 'ham-so-bac-nhat-he-phuong-trinh-bac-nhat', 'category': 'Toán học', 'type': 'Bài học', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Hàm số', 'Hệ phương trình']},
    {'slug': 'toan-9-cac-dang-toan-ve-can-bac-hai', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 9, 'tags': ['Toán học', 'Toán 9', 'Căn bậc hai']},
    {'slug': 'cac-phuong-phap-boi-duong-hoc-sinh-gioi-toan-tieu-hoc', 'category': 'Toán học', 'type': 'Bài học', 'grade': None, 'tags': ['Toán học', 'Toán tiểu học', 'Học sinh giỏi']},
    {'slug': 'de-thi-hoc-ki-1-toan-10-xuan-truong-b-nam-2020', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Học kì 1']},
    {'slug': 'de-thi-giua-ki-1-toan-10-nguyen-cong-tru', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Giữa kì 1']},
    {'slug': 'cau-do-hinh-hoc-cua-thu-tuong-nga', 'category': 'Toán học', 'type': 'Câu đố', 'grade': None, 'tags': ['Toán học', 'Câu đố', 'Hình học']},
    {'slug': 'cac-bai-toan-ve-trung-binh-cong-lop-4', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 4, 'tags': ['Toán học', 'Toán 4', 'Trung bình cộng']},
    {'slug': 'toan-lop-4-lap-so-tu-nhien-va-quy-tac-dem', 'category': 'Toán học', 'type': 'Bài học', 'grade': 4, 'tags': ['Toán học', 'Toán 4', 'Số tự nhiên', 'Quy tắc đếm']},
    {'slug': 'toan-2-so-bi-tru-so-tru-hieu', 'category': 'Toán học', 'type': 'Bài học', 'grade': 2, 'tags': ['Toán học', 'Toán 2', 'Số bị trừ', 'Số trừ']},
    {'slug': 'nguyen-ham-tich-phan-trong-de-thi-2020', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Nguyên hàm', 'Tích phân']},
    {'slug': 'huong-dan-su-dung-may-tinh-casio-giai-toan-trac-nghiem', 'category': 'Toán học', 'type': 'Bài học', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Casio', 'Máy tính cầm tay']},

    # --- Ngữ văn (Lớp 10) ---
    {'slug': 'ppct-mon-ngu-van-10', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 10, 'tags': ['Ngữ văn', 'Văn 10', 'Phân phối chương trình']},

    # --- Ngoại ngữ (Tiếng Anh, Tiếng Trung, Tiếng Nhật) ---
    {'slug': 'vi-sao-tieng-nhat-dung-3-loai-chu-kanji-hiragana-katakana', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Nhật', 'Kanji', 'Hiragana', 'Katakana']},
    {'slug': '500-tu-ghep-tieng-trung-boi', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Trung', 'Từ ghép']},
    {'slug': 'de-on-tap-tieng-anh-8-co-dap-an-so-1', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 8, 'tags': ['Ngoại ngữ', 'Tiếng Anh 8', 'Đề ôn tập']},
    {'slug': 'de-thi-thu-tieng-anh-co-dap-an-so-1', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngoại ngữ', 'Tiếng Anh 12', 'Đề thi thử THPT']},
    {'slug': 'de-on-tap-tn-thpt-tieng-anh-co-huong-dan-giai-so-5', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngoại ngữ', 'Tiếng Anh 12', 'Ôn thi tốt nghiệp THPT']},
    {'slug': '15-truyen-co-tich-tieng-anh-cho-be', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Truyện cổ tích', 'Song ngữ']},

    # --- CNTT (Dart/Flutter & Giáo án điện tử) ---
    {'slug': 'cac-phep-toan-trong-dart-toan-tu-dart-flutter', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'Lập trình', 'Dart', 'Flutter']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-22-on-tap-chuong-5-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-21-phenol-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-18-on-tap-chuong-4-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-17-arene-hydrocarbon-thom-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-15-alkane-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-14-on-tap-chuong-3-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-12-cong-thuc-phan-tu-hop-chat-huu-co-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-11-phuong-phap-tach-biet-va-tinh-che-hop-chat-huu-co-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},

    # --- Hóa học (Lớp 10, 11, 12) ---
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-chuc-dong-ha-noi-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-cum-truong-ung-hoa-my-duc-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-cum-truong-thach-that-quoc-oai-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-cum-truong-quang-trung-dong-da-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-lien-cum-truong-ha-noi-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-cum-truong-ha-dong-hoai-duc-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-truong-thpt-hai-ba-trung-dak-lac-nam-2022-2023', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Đắk Lắk']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-chuong-my-a-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-tinh-quang-binh-vong-1-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Quảng Bình']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-cum-truong-hoan-kiem-hai-ba-trung-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-chuyen-le-quy-don-ba-ria-vung-tau-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Chuyên Lê Quý Đôn']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-luong-ngoc-quyen-thai-nguyen-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Thái Nguyên']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-tinh-binh-dinh-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Bình Định']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-tinh-bac-lieu-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Bạc Liêu']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-tinh-ba-ria-vung-tau-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Bà Rịa Vũng Tàu']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-chuyen-son-la-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Chuyên Sơn La']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-quynh-luu-3-nghe-an-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Nghệ An']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-quynh-luu-2-nghe-an-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Nghệ An']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-nguyen-van-cu-ha-noi-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-tinh-ninh-binh-nam-2021', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Ninh Bình']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-thanh-pho-ha-noi-nam-hoc-2021-2022', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-tinh-quang-tri-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Quảng Trị']},
]

def main():
    print(f"Bắt đầu chuyển tiếp Batch 17 ({len(BATCH_17_POSTS)} bài)...")
    reader = WpressReader(WPRESS_PATH)
    
    success = 0
    failed = 0
    
    for item in BATCH_17_POSTS:
        slug = item['slug']
        cat = item['category']
        ptype = item['type']
        grade = item.get('grade')
        tags = item.get('tags')
        
        ok = migrate_single_slug(reader, slug, category=cat, p_type=ptype, grade=grade, tags=tags)
        if ok:
            success += 1
        else:
            failed += 1
            
    reader.close()
    print(f"\n=== HOÀN THÀNH BATCH 17: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
