#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Chuyển tiếp 50 bài viết giáo dục tiếp theo (Batch 14) từ o2.edu.vn sang giasu.ai.vn.
Các bài viết bao gồm:
- Toán học (Lớp 2, 5, 6, 9, 10, 11, 12): Hình học không gian, hàm số, nguyên hàm, tích phân, hình giải tích Oxyz, toán tiểu học & THCS.
- Ngữ văn 12: Đề thi thử tốt nghiệp THPT môn Văn, đề SGD Gia Lai.
- Ngoại ngữ (Tiếng Anh, Tiếng Nga, Tiếng Trung): Đề thi tuyển sinh vào 10, chuyên Anh 6, từ vựng và câu giao tiếp.
- Địa lí 9: Bộ đề bồi dưỡng học sinh giỏi môn Địa lí 9.
- Hóa học 10, 12: Trắc nghiệm liên kết hóa học, oxi hóa khử, vô cơ 12, đề thi tốt nghiệp THPT qua các năm.
- CNTT & Kỹ năng sư phạm: Tin học nhà trường, trắc nghiệm Python, hàm Excel & Google Sheets, thiết kế slide PowerPoint giáo án.
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from migrate_wpress import WpressReader, WPRESS_PATH, migrate_single_slug

BATCH_14_POSTS = [
    # --- Toán học (Lớp 2, 5, 6, 9, 10, 11, 12) ---
    {'slug': 'bai-tap-cac-phep-toan-vec-to', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Hình học 10', 'Vectơ']},
    {'slug': 'bai-tap-tap-hop-toan-10', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Đại số 10', 'Tập hợp']},
    {'slug': 'bai-tap-menh-de-toan-hoc', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Đại số 10', 'Mệnh đề']},
    {'slug': 'bai-tap-goc-va-khoang-cach-trong-khong-gian-lop-11', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Toán học', 'Toán 11', 'Hình học không gian']},
    {'slug': 'bai-tap-ham-so-luong-giac-toan-11', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Toán học', 'Toán 11', 'Lượng giác']},
    {'slug': 'bai-tap-day-them-toan-9-canh-dieu', 'category': 'Toán học', 'type': 'Bài học', 'grade': 9, 'tags': ['Toán học', 'Toán 9', 'Cánh diều', 'Tài liệu dạy thêm']},
    {'slug': 'bai-tap-day-them-toan-9-chan-troi-sang-tao-file-word', 'category': 'Toán học', 'type': 'Bài học', 'grade': 9, 'tags': ['Toán học', 'Toán 9', 'Chân trời sáng tạo', 'Tài liệu dạy thêm']},
    {'slug': 'bai-tap-duong-tiem-can-cua-do-thi-ham-so-toan-12-ctst', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hàm số', 'Tiệm cận']},
    {'slug': 'bai-tap-gia-tri-lon-nhat-nho-nhat-cua-ham-so-toan-12-ctst', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hàm số', 'GTLN GTNN']},
    {'slug': 'bai-tap-khao-sat-va-ve-do-thi-mot-so-ham-so-co-ban-toan-12-ctst', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Khảo sát hàm số']},
    {'slug': 'bai-tap-tinh-don-dieu-va-cuc-tri-cua-ham-so-toan-12-ctst', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hàm số', 'Cực trị']},
    {'slug': 'bai-tap-nguyen-ham-toan-12-canh-dieu', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Giải tích 12', 'Nguyên hàm']},
    {'slug': 'bai-tap-tich-phan-toan-12-canh-dieu', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Giải tích 12', 'Tích phân']},
    {'slug': 'bai-tap-ung-dung-hinh-hoc-cua-tich-phan-toan-12-canh-dieu', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Ứng dụng tích phân']},
    {'slug': 'bai-tap-phuong-trinh-duong-thang-toan-12-canh-dieu', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hình học 12', 'Phương trình đường thẳng']},
    {'slug': 'bai-tap-phuong-trinh-mat-phang-toan-12-canh-dieu', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hình học 12', 'Phương trình mặt phẳng']},
    {'slug': 'bai-tap-phuong-trinh-mat-cau-toan-12-canh-dieu', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hình học 12', 'Phương trình mặt cầu']},
    {'slug': 'bai-tap-thong-ke-toan-12-kntt', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Thống kê']},
    {'slug': 'bai-tap-trac-nghiem-dang-dung-sai-toan-12', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Trắc nghiệm đúng sai']},
    {'slug': '100-bai-tap-khoi-non-vdc', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hình học không gian', 'Khối nón']},
    {'slug': '100-bai-toan-co-loi-van-lop-2', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 2, 'tags': ['Toán học', 'Toán 2', 'Toán có lời văn']},
    {'slug': '100-bai-toan-luyen-hoc-sinh-gioi-lop-2', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 2, 'tags': ['Toán học', 'Toán 2', 'Học sinh giỏi']},
    {'slug': '80-bai-hoc-sinh-gioi-toan-lop-2', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 2, 'tags': ['Toán học', 'Toán 2', 'Học sinh giỏi']},
    {'slug': '120-bai-toan-thi-violympic-lop-5', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 5, 'tags': ['Toán học', 'Toán 5', 'Violympic']},
    {'slug': '100-de-thi-toan-vao-lop-6', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 6, 'tags': ['Toán học', 'Toán 6', 'Đề thi vào 6 chuyên']},
    {'slug': '150-bai-toan-tin', 'category': 'Toán học', 'type': 'Bài tập', 'grade': None, 'tags': ['Toán học', 'CNTT', 'Toán Tin']},
    
    # --- Ngữ văn 12 ---
    {'slug': '65-de-thi-thu-tot-nghiep-thpt-mon-van-2021-co-dap-an', 'category': 'Ngữ văn', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Đề thi thử THPT']},
    {'slug': '15-de-thi-tn-thpt-mon-van-co-dap-an-sgd-gia-lai', 'category': 'Ngữ văn', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Đề thi TN THPT']},

    # --- Ngoại ngữ (Tiếng Anh, Tiếng Nga, Tiếng Trung) ---
    {'slug': '15-de-thi-vao-10-mon-tieng-anh-co-dap-an', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 9, 'tags': ['Ngoại ngữ', 'Tiếng Anh 9', 'Đề thi vào 10']},
    {'slug': '5-de-thi-chuyen-tieng-anh-lop-6', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 6, 'tags': ['Ngoại ngữ', 'Tiếng Anh 6', 'Đề thi chuyên Anh']},
    {'slug': '1000-tu-tieng-nga-thong-dung-nhat', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Nga', 'Từ vựng tiếng Nga']},
    {'slug': '100-cau-tieng-trung-thong-dung', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Trung', 'Giao tiếp tiếng Trung']},
    {'slug': '400-cau-tieng-trung-thong-dung-viet-anh', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Trung', 'Song ngữ Trung Anh']},

    # --- Địa lí ---
    {'slug': '23-de-hoc-sinh-gioi-dia-ly-lop-9', 'category': 'Địa lí', 'type': 'Bài tập', 'grade': 9, 'tags': ['Địa lí', 'Địa lí 9', 'Học sinh giỏi Địa lí']},

    # --- Hóa học (Lớp 10, 12, Vô cơ, Hữu cơ, Đề thi) ---
    {'slug': '30-cau-hoi-trac-nghiem-lien-ket-hoa-hoc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Liên kết hóa học', 'Trắc nghiệm']},
    {'slug': '40-cau-hoi-trac-nghiem-phan-ung-oxi-hoa-khu', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Phản ứng oxi hóa khử', 'Trắc nghiệm']},
    {'slug': 'bai-tap-tong-hop-hoa-hoc-vo-co-12-co-loi-giai-chi-tiet', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Hóa vô cơ', 'Lời giải chi tiết']},
    {'slug': '8-de-thi-hoc-ki-1-lop-12-mon-hoa', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Đề thi học kì 1']},
    {'slug': '10-de-thi-thu-tot-nghiep-thpt-2022-mon-hoa-violet-file-word-co-loi-giai', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Đề thi thử THPT']},
    {'slug': '50-de-thi-thu-tot-nghiep-thpt-2022-mon-hoa-co-loi-giai', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Đề thi thử THPT']},
    {'slug': '24-ma-de-thi-tn-thpt-mon-hoa-nam-2021-cua-bo-giao-duc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Bộ Giáo dục', 'Đề thi tốt nghiệp']},
    {'slug': '4-ma-de-goc-thi-tot-nghiep-thpt-2022-mon-hoa', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Đề thi tốt nghiệp']},
    {'slug': '4-ma-de-thi-thpt-qg-nam-2019-mon-hoa-file-word', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Đề thi THPT QG']},
    {'slug': '4-ma-de-thi-thpt-qg-mon-hoa-nam-2017-cua-bo-giao-duc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Đề thi THPT QG']},

    # --- CNTT & Kỹ năng sư phạm / Học tập ---
    {'slug': '100-de-toan-tin-tin-hoc-nha-truong', 'category': 'CNTT', 'type': 'Bài tập', 'grade': None, 'tags': ['CNTT', 'Tin học', 'Toán Tin', 'Tin học nhà trường']},
    {'slug': '150-cau-hoi-trac-nghiem-python-co-dap-an', 'category': 'CNTT', 'type': 'Bài tập', 'grade': None, 'tags': ['CNTT', 'Lập trình', 'Python', 'Trắc nghiệm Python']},
    {'slug': '10-ham-excel-thong-dung-nhat', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'Tin học văn phòng', 'Excel']},
    {'slug': '10-ham-google-sheet-co-ma-excel-khong-co', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'Tin học văn phòng', 'Google Sheets']},
    {'slug': '10-nguyen-tac-thiet-ke-slide-powerpoint', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'PowerPoint', 'Thiết kế bài giảng']},
    {'slug': '150-mau-powerpoint-dep-mien-phi', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'PowerPoint', 'Mẫu slide giáo viên']},
]

def main():
    print(f"=== BẮT ĐẦU CHUYỂN BATCH 14 ({len(BATCH_14_POSTS)} BÀI VIẾT) ===")
    reader = WpressReader(WPRESS_PATH)
    success = 0
    failed = 0

    for item in BATCH_14_POSTS:
        slug = item['slug']
        cat = item['category']
        pt = item['type']
        gr = item['grade']
        tg = item['tags']

        ok = migrate_single_slug(reader, slug=slug, category=cat, p_type=pt, grade=gr, tags=tg)
        if ok:
            success += 1
        else:
            failed += 1
            print(f"FAILED: {slug}")

    reader.close()
    print(f"\n=== HOÀN THÀNH BATCH 14: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
