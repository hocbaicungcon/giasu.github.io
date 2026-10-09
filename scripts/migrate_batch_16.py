#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Chuyển tiếp 50 bài viết giáo dục tiếp theo (Batch 16) từ o2.edu.vn sang giasu.ai.vn.
Các bài viết bao gồm:
- Toán học (Lớp 12 & Giải thuật): Hướng dẫn giải đề Toán THPT 2025, toán thực tế ứng dụng đạo hàm, tài liệu ôn thi tốt nghiệp THPT môn Toán 2025, so sánh chương trình toán 2006 và 2018, thuật toán Sudoku bằng quay lui.
- Ngữ văn (Lớp 9, 11, 12): Ôn thi vào 10 môn Văn (phần Tiếng Việt, tổng hợp đề Hà Nội 2015-2022); đề thi thử Vợ chồng A Phủ, Tây Tiến; đề thi Sở GD Hà Nội 2023; kỹ năng đọc hiểu; phân phối chương trình Văn 11, 12.
- Ngoại ngữ (Tiếng Anh, Tiếng Trung, Tiếng Nga): Đề và đáp án tiếng Anh 12 Sở GD Hà Nội; đề ôn thi vào 10 môn Tiếng Anh; TOP 500 tính từ thông dụng; từ vựng theo chủ đề; câu giao tiếp tiếng Trung thông dụng; phương pháp học tiếng Nga.
- CNTT & Giáo án điện tử: Giáo trình PowerPoint 2016; bộ giáo án PowerPoint Hóa học 11 KNTT theo bài.
- Hóa học (Lớp 10, 11, 12): Đề thi HSG các tỉnh/thành (Quỳnh Lưu, Lộc Ninh, Nguyễn Văn Cừ, Lạng Giang, Tân Uyên, Kim Bảng, Chuyên Nguyễn Du, Olympic Đắk Lắk, Yên Dũng, Chuyên Lê Khiết, Quảng Ngãi, Thị Xã Quảng Trị, Quảng Bình, Hà Tĩnh); đề học kì 1, 2 và đề thi thử tốt nghiệp THPT có đáp án chi tiết.
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from migrate_wpress import WpressReader, WPRESS_PATH, migrate_single_slug

BATCH_16_POSTS = [
    # --- Toán học (Lớp 12 & Giải thuật) ---
    {'slug': 'huong-dan-giai-de-toan-thpt-2025', 'category': 'Toán học', 'type': 'Bài học', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Đề thi THPT 2025']},
    {'slug': 'tong-hop-toan-thuc-te-ung-dung-dao-ham', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Toán thực tế', 'Đạo hàm']},
    {'slug': 'tong-hop-tai-lieu-on-thi-tot-nghiep-thpt-mon-toan-2025', 'category': 'Toán học', 'type': 'Bài học', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Ôn thi tốt nghiệp THPT']},
    {'slug': 'so-sanh-chuong-trinh-toan-2006-va-chuong-trinh-toan-2018-lop-12', 'category': 'Toán học', 'type': 'Bài học', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Chương trình GDPT']},
    {'slug': 'thuat-toan-giai-sudoku-bang-quay-lui-backtracking', 'category': 'Toán học', 'type': 'Bài học', 'grade': None, 'tags': ['Toán học', 'CNTT', 'Thuật toán', 'Sudoku']},

    # --- Ngữ văn (Lớp 9, 11, 12) ---
    {'slug': 'on-thi-vao-lop-10-mon-ngu-van-phan-tieng-viet', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 9, 'tags': ['Ngữ văn', 'Văn 9', 'Tiếng Việt', 'Thi vào 10']},
    {'slug': 'tong-hop-cac-de-thi-vo-chong-a-phu', 'category': 'Ngữ văn', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Vợ chồng A Phủ', 'Tô Hoài']},
    {'slug': 'de-va-dap-an-mon-van-lop-12-sgd-ha-noi-2023', 'category': 'Ngữ văn', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Đề thi Sở GD Hà Nội']},
    {'slug': 'tong-hop-de-thi-vao-10-mon-van-ha-noi-2015-2022', 'category': 'Ngữ văn', 'type': 'Bài tập', 'grade': 9, 'tags': ['Ngữ văn', 'Văn 9', 'Đề thi vào 10', 'Hà Nội']},
    {'slug': 'cach-mo-bai-tay-tien', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Tây Tiến', 'Mở bài']},
    {'slug': 'ki-nang-lam-bai-doc-hieu-ngu-van', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': None, 'tags': ['Ngữ văn', 'Kỹ năng làm bài', 'Đọc hiểu']},
    {'slug': 'ppct-mon-ngu-van-12', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Phân phối chương trình']},
    {'slug': 'ppct-mon-ngu-van-11', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 11, 'tags': ['Ngữ văn', 'Văn 11', 'Phân phối chương trình']},

    # --- Ngoại ngữ (Tiếng Anh, Tiếng Trung, Tiếng Nga) ---
    {'slug': 'de-va-dap-an-tieng-anh-12-sgd-ha-noi-2023', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngoại ngữ', 'Tiếng Anh 12', 'Đề thi Sở GD Hà Nội']},
    {'slug': 'de-on-tap-tieng-anh-vao-10-co-dap-an-so-1', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 9, 'tags': ['Ngoại ngữ', 'Tiếng Anh 9', 'Thi vào 10']},
    {'slug': 'top-500-tinh-tu-trong-tieng-anh-thong-dung-nhat', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Từ vựng tiếng Anh', 'Tính từ']},
    {'slug': 'tu-vung-tieng-anh-ve-cac-loai-cay', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Từ vựng tiếng Anh', 'Cây cối']},
    {'slug': 'tu-vung-tieng-anh-ve-cac-loai-thuoc', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Từ vựng tiếng Anh', 'Y tế']},
    {'slug': 'nhung-cau-giao-tiep-tieng-trung-thong-dung-hang-ngay', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Trung', 'Giao tiếp tiếng Trung']},
    {'slug': 'cach-hoc-tieng-nga-cho-nguoi-moi-bat-dau', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Nga', 'Phương pháp học tiếng Nga']},

    # --- CNTT & Giáo án điện tử ---
    {'slug': 'giao-trinh-powerpoint-2016-pdf', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'PowerPoint', 'Giáo trình']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-16-hydrocarbon-khong-no-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-25-on-tap-chuong-6-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-23-hop-chat-carbonyl-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-20-alcohol-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},
    {'slug': 'giao-an-powerpoint-hoa-11-bai-19-dan-xuat-halogen-kntt', 'category': 'CNTT', 'type': 'Bài học', 'grade': 11, 'tags': ['CNTT', 'Hóa học 11', 'Giáo án điện tử', 'KNTT']},

    # --- Hóa học (Lớp 10, 11, 12) ---
    {'slug': 'de-thi-hoc-ki-1-mon-hoa-lop-10-thpt-nguyen-truong-thuy', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Học kì 1']},
    {'slug': 'de-thi-hoc-ki-2-lop-10-mon-hoa-thpt-phu-my-2020-2021', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Học kì 2']},
    {'slug': 'de-thi-hoc-ki-2-lop-10-mon-hoa-so-gd-bac-giang-nam-2022-2023', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Học kì 2', 'Bắc Giang']},
    {'slug': 'de-on-tap-giua-hoc-ki-2-lop-12-mon-hoa-hoc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Giữa kì 2']},
    {'slug': 'de-thi-hoc-ki-1-lop-12-mon-hoa-thpt-le-quy-don-de-so-2', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Học kì 1']},
    {'slug': 'de-thi-hoc-ki-1-mon-hoa-lop-12-thpt-my-loc-de-so-3', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Học kì 1']},
    {'slug': 'de-thi-thu-tot-nghiep-thpt-2022-mon-hoa-so-19-file-word-va-loi-giai-chi-tiet', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Thi thử THPT']},
    {'slug': 'de-thi-thu-tn-thpt-2022-mon-hoa-so-gd-ha-tinh-lan-4-co-dap-an', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Thi thử THPT', 'Hà Tĩnh']},
    {'slug': 'de-thi-thu-tot-nghiep-thpt-2021-mon-hoa-file-word-co-loi-giai-so-5', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Thi thử THPT']},
    {'slug': 'de-thi-thu-tn-thpt-2022-mon-hoa-thpt-tinh-gia-1-thanh-hoa-lan-1-co-dap-an', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Thi thử THPT', 'Thanh Hóa']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-quynh-luu-2-nghe-an-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Nghệ An']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-loc-ninh-binh-phuoc-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Bình Phước']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-nguyen-van-cu-ha-noi-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-lang-giang-so-1-ha-tinh-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Tĩnh']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-cum-truong-tan-uyen-bac-giang-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Bắc Giang']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-a-kim-bang-ha-nam-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hà Nam']},
    {'slug': 'de-thi-hsg-lop-10-mon-hoa-thpt-chuyen-nguyen-du-dak-lak-nam-2022-2023', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Chuyên Đắk Lắk']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-olympic-dak-lak-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Olympic Đắk Lắk']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-cum-truong-yen-dung-bac-giang-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Bắc Giang']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-chuyen-le-khiet-quang-ngai-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Chuyên Lê Khiết']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-tinh-quang-ngai-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Quảng Ngãi']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-thi-xa-quang-tri-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Quảng Trị']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-tinh-quang-binh-vong-2-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Quảng Bình']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-hoc-tinh-ha-tinh-nam-2021-2022', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Hà Tĩnh']},
]

def main():
    print(f"Bắt đầu chuyển tiếp Batch 16 ({len(BATCH_16_POSTS)} bài)...")
    reader = WpressReader(WPRESS_PATH)
    
    success = 0
    failed = 0
    
    for item in BATCH_16_POSTS:
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
    print(f"\n=== HOÀN THÀNH BATCH 16: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
