#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Chuyển tiếp 50 bài viết giáo dục tiếp theo (Batch 13) từ o2.edu.vn sang giasu.ai.vn.
Các bài viết bao gồm:
- Hóa học 10, 11, 12: Điện phân, bài tập este, chuỗi phản ứng, thủy phân, peptit, đề thi HK2.
- Toán học: 100 đề thi đại học Toán tự luận, từ vựng Toán tiếng Anh lớp 1, xác định hệ số bậc 2 máy tính Casio.
- Ngữ văn: Đề văn bài Chiều xuân.
- Ngoại ngữ: 40 câu thành ngữ tiếng Nga.
- CNTT & Kỹ năng sư phạm: Cách gõ công thức Toán Canva, phần mềm resize ảnh, mẫu PowerPoint cho giáo viên, STEM.
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from migrate_wpress import WpressReader, WPRESS_PATH, migrate_single_slug

BATCH_13_POSTS = [
    # --- Hóa học (Chuỗi phản ứng, hữu cơ, vô cơ) ---
    {
        'slug': 'cho-cac-so-do-phan-ung-xay-ra-theo-dung-ti-le-mol-e-2naoh-→-y-2z',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este', 'Chuỗi phản ứng']
    },
    {
        'slug': 'cho-so-do-chuyen-hoa-z-←-f-x-←-e-baoh2-e→y-f-→-z',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa vô cơ', 'Sơ đồ chuyển hóa']
    },
    {
        'slug': 'cho-so-do-phan-ung-e-naoh-→-x-y-f-naoh-→-x-z-2',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este', 'Phản ứng xà phòng hóa']
    },
    {
        'slug': 'cho-cac-so-do-phan-ung-xay-ra-theo-dung-ti-le-mol-e-2naoh-→-y-2z-f-2naoh-→-z-t-h2o',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este', 'Chuỗi phản ứng']
    },
    {
        'slug': 'cho-so-do-phan-ung-theo-dung-ti-le-mol-x-2naoh-→-y-z-h2o-t0',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este', 'Sơ đồ phản ứng']
    },
    {
        'slug': 'cho-so-do-cac-phan-ung-sau-x-baoh2-→-y-z',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa vô cơ', 'Sơ đồ phản ứng']
    },
    {
        'slug': 'cho-so-do-phan-ung-theo-dung-ti-le-mol-a-x-2naoh-→-x1-x2-x3-c-x2-hcl-→-x5-nacl',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este', 'Sơ đồ phản ứng']
    },
    {
        'slug': 'phan-tich-uu-diẻm-va-han-che-của-viẹc-lụa-chọn-va-sủ-dụng-pp-ktdh-trong-hoạt-dọng-dạy-học-gv-thục-hiẹn-trong-video',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': None,
        'tags': ['Hóa học', 'Phương pháp dạy học', 'Sư phạm Hóa học', 'Giáo viên']
    },
    {
        'slug': 'cho-so-do-cac-phan-ung-theo-dung-ti-le-mol-a-x-4agno3-6nh3-2h2o-→-x1-4ag-4nh4no3',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Phản ứng tráng bạc', 'Sơ đồ phản ứng']
    },
    {
        'slug': 'cho-e-z-f-t-deu-la-cac-hop-chat-huu-co-no-mach-ho-va-thoa-man-so-do-cac-phan-ung-e-naoh-→-x-y-z-2-x-hcl-→-f-nacl',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este', 'Sơ đồ phản ứng']
    },
    {
        'slug': 'ung-voi-cong-thuc-phan-tủ-c2h7o2n-x-co-bao-nhieu-chat-vua-phản-ung-duọc-voi-dung-dịch-naoh-vua-phản-ung',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Amin', 'Amino axit', 'Muối amoni']
    },
    {
        'slug': 'cho-01-mol-este-tao-boi-axit-2-lan-axit-hai-chuc-va-ancol-mot-ancol-don-chuc-tac-dung-hoan-toan-voi-dung-dich-naoh-thu-duoc-64-gam-ancol',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este hai chức', 'Bài tập este']
    },
    {
        'slug': 'cho-tu-tu-den-het-tung-giot-dung-dich-chua-a-mol-hcl-vao-dung-dich-chua-b-mol-na2co3-thu-duoc-v-lit-khi',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Hóa vô cơ', 'Muối cacbonat', 'Bài toán nhỏ từ từ']
    },
    {
        'slug': 'cach-viet-cong-thuc-toan-tren-canva',
        'category': 'Toán học',
        'type': 'Bài học',
        'grade': None,
        'tags': ['Toán học', 'Công thức Toán', 'Canva', 'CNTT', 'Phần mềm dạy học']
    },
    {
        'slug': 'de-van-bai-chieu-xuan',
        'category': 'Ngữ văn',
        'type': 'Bài tập',
        'grade': 11,
        'tags': ['Ngữ văn', 'Văn 11', 'Chiều xuân', 'Anh Thơ', 'Đề thi Văn']
    },
    {
        'slug': 'hon-hop-e-gom-bon-este-deu-co-cong-thuc-c8h8o2-va-co-vong-benzen-cho-1632-gam-e-tac-dung-toi-da',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Este của phenol', 'Đồng phân este']
    },
    {
        'slug': 'cho-m-gam-hon-hop-x-gom-axit-glutamic-va-glyxin-tac-dung-vua-du-voi-dung-dich-hcl-thu-duoc-dung-dich-chua-m-219-gam',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa hữu cơ', 'Amino axit', 'Axit glutamic', 'Glyxin']
    },
    {
        'slug': 'hon-hop-x-gom-na-ba-na2o-va-bao-hoa-tan-hoan-toan-219-gam-x-vao-nuoc-thu-duoc-112-lit-khi-h2',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa vô cơ', 'Kim loại kiềm', 'Quy đổi']
    },
    {
        'slug': 'cho-so-do-phan-ung-sau-x1-h2o-x2-x3-h2',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa vô cơ', 'Sơ đồ phản ứng']
    },
    {
        'slug': 'cho-163-gam-hon-hop-fe-al-mg-tac-dung-vua-du-voi-dung-dich-chua-hcl-va-h2so4',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Kim loại tác dụng với axit', 'Bảo toàn khối lượng']
    },
    {
        'slug': 'cho-28-gam-hon-hop-x-gom-cu-va-ag-phan-ung-hoan-toan-voi-dung-dich-hno3-du',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Kim loại tác dụng với HNO3', 'Oxi hóa khử']
    },
    {
        'slug': 'cho-081-gam-al-vao-100-ml-dung-dich-chua-feno33-01m-cuno32-04m-va-agno3-02m',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Dãy điện hóa', 'Kim loại tác dụng với muối']
    },
    {
        'slug': 'hon-hop-e-gom-hai-hidrocacbon-mach-ho-x-y-voi-mx-my-80-cho-01-mol-e-co-khoi-luong-47-gam',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Hidrocacbon', 'Hóa hữu cơ']
    },
    {
        'slug': 'hai-chat-ran-x-y-co-so-mol-bang-nhau-tien-hanh-cac-thi-nghiem-sau-thi-nghiem-1-hoa-tan-x',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Thí nghiệm hóa học', 'Hóa vô cơ']
    },
    {
        'slug': '100-de-thi-dai-hoc-toan-tu-luan',
        'category': 'Toán học',
        'type': 'Bài tập',
        'grade': 12,
        'tags': ['Toán học', 'Toán 12', 'Đề thi đại học', 'Toán tự luận', 'Ôn thi THPT']
    },
    {
        'slug': 'dien-phan-dung-dich-x-gom-x-mol-kcl-va-y-mol-cuno32-dien-cuc-tro-mang-ngan-xop',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Điện phân', 'Điện phân dung dịch']
    },
    {
        'slug': 'nung-nong-a-mol-hon-hop-x-gom-propen-axetilen-va-hidro-voi-xuc-tac-ni-trong-binh-kin-chi-xay-ra-phan-ung-cong-h2',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Hidrocacbon', 'Phản ứng cộng H2']
    },
    {
        'slug': 'stem-che-tao-binh-dien-phan-hoa-hoc-lop-10',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 10,
        'tags': ['Hóa học', 'Hóa 10', 'STEM', 'Bình điện phân', 'Giáo dục STEM']
    },
    {
        'slug': 'dot-hon-hop-x-gom-fe-va-cu-trong-o2-thu-duoc-m-gam-hon-hop-y-gom-fe-cu-fe3o4-va-cuo',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Kim loại', 'Bảo toàn khối lượng', 'Oxi hóa khử']
    },
    {
        'slug': 'cho-hon-hop-e-gom-hai-chat-huu-co-x-c3h11n3o5-va-y-c4h9no4-tao-boi-axit-cacboxylic-da-chuc-deu-mach-ho',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Muối amoni', 'Hóa hữu cơ vận dụng cao']
    },
    {
        'slug': 'cho-273-gam-hon-hop-x-gom-hai-este-no-don-chuc-tac-dung-vua-du-voi-dung-dich-koh-thu-duoc-308-gam-hon-hop',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Este đơn chức', 'Bài tập este']
    },
    {
        'slug': '5-mau-powerpoint-cho-giao-vien-mien-phi',
        'category': 'CNTT',
        'type': 'Bài học',
        'grade': None,
        'tags': ['CNTT', 'PowerPoint', 'Mẫu bài giảng', 'Giáo viên', 'Công nghệ']
    },
    {
        'slug': 'cho-308-gam-hon-hop-x-gom-fe-feo-feco3-mg-mgo-va-mgco3-tac-dung-vua-du-voi-dung-dich-h2so4-loang-thu-duoc-784-lit-dktc-hon-hop-khi',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Hóa vô cơ', 'Sắt và hợp chất', 'Magie']
    },
    {
        'slug': 'hoa-tan-hoan-toan-2754-gam-al2o3-bang-mot-luong-vua-du-dung-dich-hno3-thu-duoc-2675-gam-dung-dich-x',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Nhôm và hợp chất', 'Độ tan', 'Nồng độ phần trăm']
    },
    {
        'slug': 'hoa-tan-het-126-gam-hon-hop-al-va-mg-co-ty-le-mol-tuong-ung-la-2-3-trong-dung-dich-x-chua',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Kim loại tác dụng HNO3', 'Sản phẩm khử NH4NO3']
    },
    {
        'slug': 'tu-vung-toan-tieng-anh-lop-1',
        'category': 'Ngoại ngữ',
        'type': 'Bài học',
        'grade': 1,
        'tags': ['Ngoại ngữ', 'Tiếng Anh', 'Toán tiếng Anh', 'Toán 1', 'Từ vựng']
    },
    {
        'slug': 'xac-dinh-he-so-ham-so-bac-2-bang-may-tinh-casio',
        'category': 'Toán học',
        'type': 'Bài học',
        'grade': 10,
        'tags': ['Toán học', 'Toán 10', 'Hàm số bậc hai', 'Máy tính Casio', 'Thủ thuật máy tính']
    },
    {
        'slug': '40-cau-thanh-ngu-tieng-nga',
        'category': 'Ngoại ngữ',
        'type': 'Bài học',
        'grade': None,
        'tags': ['Ngoại ngữ', 'Tiếng Nga', 'Thành ngữ', 'Ngữ pháp tiếng Nga']
    },
    {
        'slug': 'hap-thu-448-lit-khi-co2-dktc-vao-200-ml-dung-dich-x-chua-na2co3-10m-va-koh-15m',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Bài toán CO2 tác dụng với dung dịch kiềm', 'Đồ thị']
    },
    {
        'slug': 'giao-an-hoa-11-bai-1-khai-niem-ve-can-bang-hoa-hoc-kntt',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Giáo án', 'Cân bằng hóa học', 'Kết nối tri thức']
    },
    {
        'slug': 'dien-phan-200-ml-dung-dich-feno32-voi-dong-dien-mot-chieu-cuong-do-dong-dien-1a',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 12,
        'tags': ['Hóa học', 'Hóa 12', 'Điện phân', 'Định luật Faraday']
    },
    {
        'slug': 'stem-san-xuat-tui-giay-tu-than-cay-chuoi-va-dau-an',
        'category': 'Khoa học tự nhiên',
        'type': 'Bài học',
        'grade': None,
        'tags': ['Khoa học tự nhiên', 'STEM', 'Bảo vệ môi trường', 'Giáo dục STEM']
    },
    {
        'slug': 'phan-mem-resize-anh-hang-loat-mien-phi',
        'category': 'CNTT',
        'type': 'Bài học',
        'grade': None,
        'tags': ['CNTT', 'Phần mềm', 'Xử lý ảnh', 'Công cụ máy tính']
    },
    {
        'slug': 'giao-an-chuyen-de-hoc-tap-bai-2-phan-ung-hat-nhan',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 10,
        'tags': ['Hóa học', 'Hóa 10', 'Chuyên đề học tập', 'Phản ứng hạt nhân', 'Giáo án']
    },
    {
        'slug': 'mau-bao-cao-bien-phap-nang-cao-chat-luong-giang-day-thi-giao-vien-gioi',
        'category': 'Các môn khác',
        'type': 'Bài học',
        'grade': None,
        'tags': ['Sư phạm', 'Giáo viên', 'Giáo viên dạy giỏi', 'Báo cáo biện pháp']
    },
    {
        'slug': 'phat-trien-nang-luc-van-dung-kien-thuc-ki-nang-cho-hoc-sinh-thong-qua-he-thong-bai-tap-chu-de-cau-tao-nguyen-tu-mon-hoa-hoc-10',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 10,
        'tags': ['Hóa học', 'Hóa 10', 'Cấu tạo nguyên tử', 'Sáng kiến kinh nghiệm', 'Sư phạm']
    },
    {
        'slug': 'crackinh-propan-thu-duoc-hon-hop-khi-x-gom-3-hidrocacbon-dan-toan-bo-x-qua-binh-dung-dung-dich-br2',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Crackinh', 'Ankan', 'Hidrocacbon']
    },
    {
        'slug': 'de-thi-hoc-ki-2-mon-hoa-lop-11-thpt-hoa-sen',
        'category': 'Hóa học',
        'type': 'Bài tập',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Đề thi học kì 2', 'THPT Hoa Sen', 'Đề thi']
    },
    {
        'slug': 'giao-an-powerpoint-hoa-11-bai-5-ammonia-muoi-ammonium-kntt',
        'category': 'Hóa học',
        'type': 'Bài học',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Ammonia', 'Muối ammonium', 'Giáo án', 'Kết nối tri thức']
    },
    {
        'slug': 'de-thi-giua-hoc-ki-2-lop-11-mon-hoa-hoc',
        'category': 'Hóa học',
        'type': 'Bài tập',
        'grade': 11,
        'tags': ['Hóa học', 'Hóa 11', 'Đề thi giữa kì 2', 'Đề thi']
    }
]

def main():
    print(f"Bắt đầu chuyển tiếp Batch 13 ({len(BATCH_13_POSTS)} bài)...")
    reader = WpressReader(WPRESS_PATH)
    
    success = 0
    failed = 0
    
    for item in BATCH_13_POSTS:
        slug = item['slug']
        cat = item['category']
        ptype = item['type']
        grade = item['grade']
        tags = item['tags']
        
        try:
            ok = migrate_single_slug(reader, slug, category=cat, p_type=ptype, grade=grade, tags=tags)
            if ok:
                success += 1
            else:
                failed += 1
                print(f"X Thất bại: {slug}")
        except Exception as e:
            failed += 1
            print(f"X Lỗi khi xử lý {slug}: {e}")
            
    reader.close()
    print(f"\n=== HOÀN THÀNH BATCH 13: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
