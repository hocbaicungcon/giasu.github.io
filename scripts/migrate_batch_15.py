#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Chuyển tiếp 50 bài viết giáo dục tiếp theo (Batch 15) từ o2.edu.vn sang giasu.ai.vn.
Các bài viết bao gồm:
- Toán học (Lớp 10, 11, 12): Đề thi HSG các tỉnh, ôn kiến thức hàm số, xác suất có điều kiện, bài giảng đạo hàm, vectơ Oxyz.
- Ngữ văn (Lớp 12): Đề thi thử tác phẩm Việt Bắc, Tây Tiến; kỹ năng làm bài đọc hiểu, nghị luận xã hội, nghị luận tư tưởng đạo lí, cấu trúc mở - thân - kết bài.
- Ngoại ngữ (Tiếng Anh 6, 12 & cộng đồng): Đề thi thử THPT, đề minh họa 2024, đề vào 6 Nguyễn Tất Thành, TOP 200 idioms, từ vựng theo chủ đề.
- Địa lí: Tóm tắt kiến thức Địa lí thi tốt nghiệp THPT.
- CNTT: Trắc nghiệm Tin học 10, thủ thuật chuyển dòng cột và phím tắt Excel.
- Hóa học (Lớp 10, 11, 12): Đề thi HSG các tỉnh (Hà Nội, Long An, Gia Lai, Quảng Trị, Vĩnh Phúc, Đắk Lắk, Hải Dương, Thái Bình, TP.HCM, Chuyên Amsterdam); đề ôn tập học kì 1, học kì 2; đề thi thử TN THPT có lời giải chi tiết.
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from migrate_wpress import WpressReader, WPRESS_PATH, migrate_single_slug

BATCH_15_POSTS = [
    # --- Toán học (Lớp 10, 11, 12) ---
    {'slug': 'tong-hop-de-thi-hsg-toan-11-nam-2024-2025', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Toán học', 'Toán 11', 'Học sinh giỏi']},
    {'slug': 'tong-hop-de-thi-hsg-toan-10-nam-2024-2025', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Toán học', 'Toán 10', 'Học sinh giỏi']},
    {'slug': 'on-kien-thuc-luyen-ky-nang-ham-so-toan-12', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hàm số']},
    {'slug': 'cac-dang-bai-tap-xac-suat-co-dieu-kien-toan-12-ctst', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Xác suất', 'Chân trời sáng tạo']},
    {'slug': 'cac-dang-bai-tap-mot-so-yeu-to-xac-suat-toan-12-canh-dieu', 'category': 'Toán học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Xác suất', 'Cánh diều']},
    {'slug': 'toan-12-bai-giang-ung-dung-dao-ham-de-khao-sat-va-ve-do-thi-ham-so-kntt', 'category': 'Toán học', 'type': 'Bài học', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Đạo hàm', 'Khảo sát hàm số', 'KNTT']},
    {'slug': 'toan-12-bai-giang-vecto-va-he-truc-toa-do-trong-khong-gian-kntt', 'category': 'Toán học', 'type': 'Bài học', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Hình học 12', 'Oxyz', 'KNTT']},
    {'slug': 'toan-12-bai-giang-ung-dung-dao-ham-de-khao-sat-ham-so-ctst', 'category': 'Toán học', 'type': 'Bài học', 'grade': 12, 'tags': ['Toán học', 'Toán 12', 'Đạo hàm', 'Chân trời sáng tạo']},

    # --- Ngữ văn (Lớp 12 & phương pháp làm bài) ---
    {'slug': 'bo-de-thi-thu-tac-pham-viet-bac', 'category': 'Ngữ văn', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Việt Bắc', 'Tố Hữu']},
    {'slug': 'bo-de-thi-thu-van-tac-pham-tay-tien', 'category': 'Ngữ văn', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Tây Tiến', 'Quang Dũng']},
    {'slug': 'cach-lam-bai-doc-hieu-ngu-van-12', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Đọc hiểu', 'Kỹ năng làm bài']},
    {'slug': 'cach-lam-bai-nghi-luan-ve-mot-su-viec-hien-tuong-doi-song', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Nghị luận xã hội']},
    {'slug': 'cach-lam-bai-nghi-luan-ve-mot-van-de-tu-tuong-dao-li', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Nghị luận xã hội', 'Tư tưởng đạo lí']},
    {'slug': 'cach-viet-mo-bai-nghi-luan-xa-hoi', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Mở bài', 'Nghị luận xã hội']},
    {'slug': 'cach-viet-than-bai-nghi-luan', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Thân bài', 'Nghị luận']},
    {'slug': 'cach-viet-ket-bai-trong-van-nghi-luan', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': 12, 'tags': ['Ngữ văn', 'Văn 12', 'Kết bài', 'Nghị luận']},
    {'slug': 'van-nghi-luan-la-gi', 'category': 'Ngữ văn', 'type': 'Bài học', 'grade': None, 'tags': ['Ngữ văn', 'Phương pháp làm văn', 'Văn nghị luận']},

    # --- Ngoại ngữ (Tiếng Anh) ---
    {'slug': 'de-thi-thu-tieng-anh-12-co-dap-an', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngoại ngữ', 'Tiếng Anh 12', 'Đề thi thử THPT']},
    {'slug': 'de-minh-hoa-tieng-anh-2024-file-word-co-dap-an', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 12, 'tags': ['Ngoại ngữ', 'Tiếng Anh 12', 'Đề minh họa']},
    {'slug': 'de-thi-tieng-anh-vao-lop-6-truong-nguyen-tat-thanh-hn', 'category': 'Ngoại ngữ', 'type': 'Bài tập', 'grade': 6, 'tags': ['Ngoại ngữ', 'Tiếng Anh 6', 'Đề thi vào 6']},
    {'slug': 'cac-idioms-thong-dung-trong-tieng-anh', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Idioms', 'Thành ngữ']},
    {'slug': 'tu-vung-tieng-anh-ve-mau-sac', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Từ vựng tiếng Anh', 'Màu sắc']},
    {'slug': 'tu-vung-tieng-anh-ve-cac-loai-hoa', 'category': 'Ngoại ngữ', 'type': 'Bài học', 'grade': None, 'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Từ vựng tiếng Anh', 'Các loài hoa']},

    # --- Địa lí ---
    {'slug': 'tom-tat-kien-thuc-dia-li-thi-tot-nghiep-thpt', 'category': 'Địa lí', 'type': 'Bài học', 'grade': 12, 'tags': ['Địa lí', 'Địa lí 12', 'Ôn thi tốt nghiệp THPT']},

    # --- CNTT ---
    {'slug': 'cau-hoi-trac-nghiem-tin-hoc-10', 'category': 'CNTT', 'type': 'Bài tập', 'grade': 10, 'tags': ['CNTT', 'Tin học 10', 'Trắc nghiệm Tin học']},
    {'slug': 'huong-dan-cach-chuyen-dong-thanh-cot-trong-excel', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'Excel', 'Tin học văn phòng']},
    {'slug': 'cac-phim-tat-trong-excel-tren-macbook', 'category': 'CNTT', 'type': 'Bài học', 'grade': None, 'tags': ['CNTT', 'Excel', 'Phím tắt']},

    # --- Hóa học (Lớp 10, 11, 12) ---
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-tinh-long-an-vong-1-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Long An']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-tinh-gia-lai-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Gia Lai']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-tinh-quang-tri-nam-2021-2022', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Quảng Trị']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-thanh-pho-ha-noi-nam-2011', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-lop-12-mon-hoa-thanh-pho-ha-noi-nam-2005', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'HSG Hà Nội']},
    {'slug': 'tong-hop-de-thi-hsg-lop-11-mon-hoa-hoc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'Học sinh giỏi']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-tinh-vinh-phuc-nam-2015', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Vĩnh Phúc']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-chuong-my-a-ha-noi-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG Hà Nội']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-vinh-loc-tphcm-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'HSG TPHCM']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-chuyen-ha-noi-amsterdam-nam-2022-2023', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Chuyên Amsterdam']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-truong-thpt-nguyen-cong-tru-dak-lac-nam-2022-2023', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Đắk Lắk']},
    {'slug': 'de-thi-hsg-lop-10-mon-hoa-cum-truong-thpt-hai-duong-nam-2022-2023', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Hải Dương']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-tinh-thai-binh-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG Thái Bình']},
    {'slug': 'de-thi-hsg-mon-hoa-lop-10-thpt-viet-au-tphcm-nam-2023-2024', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'HSG TPHCM']},
    {'slug': 'cau-hoi-trac-nghiem-kim-loai-kiem', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Kim loại kiềm']},
    {'slug': 'de-on-tap-hoc-ki-2-lop-10-mon-hoa-hoc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Học kì 2']},
    {'slug': 'de-on-tap-giua-hoc-ki-2-lop-10-mon-hoa-hoc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Giữa kì 2']},
    {'slug': 'de-thi-hoc-ki-1-mon-hoa-lop-10-thpt-truc-ninh', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Học kì 1']},
    {'slug': 'de-thi-hoc-ki-1-lop-10-mon-hoa-thpt-luong-the-vinh', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 10, 'tags': ['Hóa học', 'Hóa 10', 'Học kì 1']},
    {'slug': 'de-kiem-tra-giua-hoc-ki-2-lop-11-mon-hoa-hoc-2', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'Giữa kì 2']},
    {'slug': 'de-kiem-tra-hoc-ki-ii-lop-11-mon-hoa-hoc', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 11, 'tags': ['Hóa học', 'Hóa 11', 'Học kì 2']},
    {'slug': 'de-thi-thu-tn-thpt-nam-2021-mon-hoa-hoc-file-word-co-loi-giai-de-so-30', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Thi thử tốt nghiệp THPT']},
    {'slug': 'de-thi-thu-tot-nghiep-thpt-mon-hoa-nam-2021-file-word-co-loi-giai-de-so-13', 'category': 'Hóa học', 'type': 'Bài tập', 'grade': 12, 'tags': ['Hóa học', 'Hóa 12', 'Thi thử tốt nghiệp THPT']},
]

def main():
    print(f"Bắt đầu chuyển tiếp Batch 15 ({len(BATCH_15_POSTS)} bài)...")
    reader = WpressReader(WPRESS_PATH)
    
    success = 0
    failed = 0
    
    for item in BATCH_15_POSTS:
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
    print(f"\n=== HOÀN THÀNH BATCH 15: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
