# -*- coding: utf-8 -*-
"""
Script di chuyển Đợt 12 gồm 50 bài viết giáo dục chất lượng cao từ o2.edu.vn (.wpress) sang giasu.ai.vn
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.migrate_wpress import WpressReader, migrate_single_slug, WPRESS_PATH

batch_configs = [
    {
        'slug': 'de-kiem-tra-hoc-ki-2-lop-11-mon-hoa-hoc-thpt-hai-ba-trung',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học kì 2', 'THPT Hai Bà Trưng']
    },
    {
        'slug': 'de-thi-hoc-ki-2-lop-12-mon-hoa-thpt-hung-vuong',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học kì 2', 'THPT Hùng Vương']
    },
    {
        'slug': 'lien-he-giua-cung-va-day-cung',
        'category': 'Toán học',
        'grade': 9,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 9', 'Hình học 9', 'Đường tròn', 'Cung và dây cung']
    },
    {
        'slug': 'cach-noi-i-love-you-bang-nhieu-thu-tieng',
        'category': 'Ngoại ngữ',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Ngoại ngữ', 'Từ vựng', 'Giao tiếp', 'Ngôn ngữ thế giới']
    },
    {
        'slug': 'he-thong-cau-hoi-trac-nghiem-ancol-phenol',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Ancol', 'Phenol', 'Trắc nghiệm Hóa 11']
    },
    {
        'slug': 'tim-m-de-ham-so-dong-bien',
        'category': 'Toán học',
        'grade': 12,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 12', 'Đơn điệu hàm số', 'Đồng biến nghịch biến', 'Khảo sát hàm số']
    },
    {
        'slug': 'cach-ve-hinh-toan-hoc',
        'category': 'Toán học',
        'grade': None,
        'type': 'Mẹo học tập',
        'tags': ['Toán học', 'Vẽ hình Toán', 'GeoGebra', 'Kĩ năng vẽ hình']
    },
    {
        'slug': 'cho-156-gam-mot-kim-loai-kiem-x-tac-dung-voi-nuoc-du-sau-phan-ung-thu-duoc-448-lit-khi-hidro',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kim loại kiềm', 'Hiđro']
    },
    {
        'slug': 'dien-phan-200-ml-dung-dich-cuso4-voi-dien-cuc-tro-bang-dong-dien-mot-chieu-i-965-a',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Điện phân', 'CuSO4', 'Định luật Faraday']
    },
    {
        'slug': 'hon-hop-e-gom-axit-cacboxylic-don-chuc-x-ancol-no-da-chuc-y-va-chat-z-la-san-pham-cua-phan-ung-este-hoa-giua-x-voi-y',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Este hóa', 'Axit cacboxylic', 'Ancol']
    },
    {
        'slug': 'phuong-phap-dung-so-do-doan-thang-giai-toan-tieu-hoc',
        'category': 'Toán học',
        'grade': 5,
        'type': 'Mẹo học tập',
        'tags': ['Toán học', 'Toán 5', 'Toán tiểu học', 'Sơ đồ đoạn thẳng', 'Phương pháp giải toán']
    },
    {
        'slug': 'nhung-mot-thanh-mg-du-vao-100-ml-dung-dich-chua-fe2so43-02m-va-cuso4-04m',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Magie', 'Dãy điện hóa kim loại']
    },
    {
        'slug': 'bao-cao-day-toan-bang-tieng-anh-cap-so-cong',
        'category': 'Toán học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 11', 'Toán tiếng Anh', 'Cấp số cộng']
    },
    {
        'slug': 'cho-52-gam-zn-vao-100-ml-dung-dich-chua-feno33-05m-cuno32-02m-va-agno3-03m',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kẽm', 'Dãy điện hóa kim loại', 'AgNO3']
    },
    {
        'slug': 'phuong-phap-phan-chia-khoi-da-dien',
        'category': 'Toán học',
        'grade': 12,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 12', 'Hình học không gian', 'Thể tích khối đa diện', 'Phân chia khối đa diện']
    },
    {
        'slug': 'cau-hoi-trac-nghiem-bai-2-phan-bon-vo-co-chuyen-de-canh-dieu',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Chuyên đề Hóa học', 'Phân bón vô cơ', 'Cánh diều']
    },
    {
        'slug': 'giai-bai-toan-chuyen-dong-lop-9',
        'category': 'Toán học',
        'grade': 9,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 9', 'Toán chuyển động', 'Giải bài toán bằng cách lập hệ phương trình']
    },
    {
        'slug': 'giao-an-chuyen-de-hoc-tap-bai-3-nang-luong-hoat-hoa-cua-phan-ung-hoa-hoc',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 10', 'Chuyên đề Hóa học', 'Năng lượng hoạt hóa', 'Tốc độ phản ứng']
    },
    {
        'slug': 'hoa-tan-hoan-toan-20-gam-hon-hop-x-gom-mg-al-fe-zn-vao-dung-dich-hcl-sau-phan-ung-thu-duoc',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kim loại tác dụng với axit', 'HCl', 'Định luật bảo toàn']
    },
    {
        'slug': 'mot-loai-chat-beo-la-trieste-cua-axit-panmitic-va-glixerol-dun-nong-403-kg-chat-beo-tren',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Chất béo', 'Xà phòng hóa', 'Axit panmitic']
    },
    {
        'slug': 'cau-hoi-trac-nghiem-bai-4-tach-tinh-dau-tu-cac-nguon-thao-moc-tu-nhien-chuyen-de-ctst',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Chuyên đề Hóa học', 'Tách tinh dầu', 'Chân trời sáng tạo']
    },
    {
        'slug': '49-bai-toan-lop-4-thu-thach-tri-thong-minh',
        'category': 'Toán học',
        'grade': 4,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 4', 'Toán tư duy', 'Thử thách trí thông minh']
    },
    {
        'slug': 'cho-m-gam-mg-tan-hoan-toan-trong-dung-dich-hno3-phan-ung-lam-giai-phong-ra-khi-n2o',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Magie', 'HNO3', 'N2O']
    },
    {
        'slug': 'huong-dan-cach-them-lut-mau-vao-final-cut-pro-x',
        'category': 'CNTT',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Tin học', 'Final Cut Pro', 'Dựng phim', 'LUT màu']
    },
    {
        'slug': 'cho-m-gam-hon-hop-cu-va-fe2o3-trong-dung-dich-h2so4-loang-du-thu-duoc-dung-dich-x-va-0328m-gam',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Đồng', 'Fe2O3', 'H2SO4']
    },
    {
        'slug': 'quy-trinh-lua-chon-va-su-dung-pp-ktdh-cho-mot-chu-de-bai-hoc-trong-mon-hoa-hoc-o-thpt',
        'category': 'Các môn khác',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Phương pháp dạy học', 'Tập huấn giáo viên', 'Kĩ thuật dạy học', 'Giáo dục']
    },
    {
        'slug': 'hon-hop-x-gom-feno32-va-kcl-cho-807-gam-x-tan-het-vao-h2o-thu-duoc-dung-dich-y',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Sắt', 'Điện phân', 'Fe(NO3)2']
    },
    {
        'slug': 'de-thi-hoc-ki-1-lop-10-mon-hoa-thpt-nguyen-khuyen',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học kì 1', 'THPT Nguyễn Khuyến']
    },
    {
        'slug': 'de-thi-hsg-lop-12-mon-hoa-thanh-pho-ho-chi-minh-nam-2020',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học sinh giỏi Hóa', 'TP Hồ Chí Minh']
    },
    {
        'slug': 'de-thi-hsg-lop-10-mon-hoa-thpt-mai-anh-tuan-nam-2022-2023',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học sinh giỏi Hóa', 'THPT Mai Anh Tuấn']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-tinh-thai-binh-nam-2022',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học sinh giỏi Hóa', 'Thái Bình']
    },
    {
        'slug': 'hon-hop-x-gom-fe-cu-co-khoi-luong-6-gam-ti-le-khoi-luong-giua-fe-va-cu-la-78',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Sắt', 'Đồng', 'Tỉ lệ khối lượng']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-11-thpt-lac-son-hoa-binh-nam-2023-2024',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học sinh giỏi Hóa', 'Hòa Bình']
    },
    {
        'slug': 'de-kiem-tra-hoc-ki-2-lop-10-mon-hoa-thpt-nguyen-tat-thanh',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học kì 2', 'THPT Nguyễn Tất Thành']
    },
    {
        'slug': 'dung-dich-a-chua-002-mol-feno33-va-03-mol-hcl-co-kha-nang-hoa-tan-duoc-cu-voi-khoi-luong-toi-da-la',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Đồng', 'Fe(NO3)3', 'HCl']
    },
    {
        'slug': 'de-thi-hoc-ki-2-lop-10-mon-hoa-tinh-nam-dinh-nam-2021',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học kì 2', 'Nam Định']
    },
    {
        'slug': 'de-thi-hsg-lop-10-mon-hoa-cum-thach-that-quoc-oai-ha-noi-nam-2022-2023',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học sinh giỏi Hóa', 'Thạch Thất', 'Hà Nội']
    },
    {
        'slug': 'giao-an-khbd-hoa-12-cd-word-powerpoint-ca-nam',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 12', 'Giáo án Hóa học', 'Cánh diều', 'KHBD']
    },
    {
        'slug': 'de-thi-hoc-ki-2-mon-hoa-lop-12-thpt-nguyen-huu-tho',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học kì 2', 'THPT Nguyễn Hữu Thọ']
    },
    {
        'slug': 'xac-dinh-thiet-dien-bang-phuong-phap-giao-tuyen-goc',
        'category': 'Toán học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 11', 'Hình học không gian', 'Thiết diện']
    },
    {
        'slug': 'polietylen-terephtalat-viet-tat-la-pet-la-mot-polime-duoc-dieu-che-tu-axit-terephtalic-va-etylen-glicol',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Polime', 'Nhựa PET', 'Tổng hợp polime']
    },
    {
        'slug': 'phuong-phap-khai-thac-do-bat-bao-hoa',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 12', 'Hóa học hữu cơ', 'Độ bất bão hòa', 'Phương pháp giải toán']
    },
    {
        'slug': 'bai-tap-phuong-phap-toa-do-trong-mat-phang',
        'category': 'Toán học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 10', 'Hình học phẳng', 'Phương pháp tọa độ', 'Đường tròn và elip']
    },
    {
        'slug': 'cach-doc-bang-chu-cai-tieng-nga',
        'category': 'Ngoại ngữ',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Ngoại ngữ', 'Tiếng Nga', 'Bảng chữ cái tiếng Nga', 'Phát âm tiếng Nga']
    },
    {
        'slug': 'cho-cac-phat-bieu-sau-cho-mg-tac-dung-voi-dung-dich-fecl3-du-thu-duoc-kim-loai-fe',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Phát biểu đúng sai', 'Kim loại tác dụng với muối']
    },
    {
        'slug': 'thuat-toan-sinh-cac-day-nhi-phan-co-do-dai-n',
        'category': 'CNTT',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Tin học', 'Thuật toán sinh', 'Dãy nhị phân', 'C++', 'Python']
    },
    {
        'slug': 'cho-hai-chat-huu-co-mach-ho-e-f-co-cung-cong-thuc-don-gian-nhat-la-ch2o-cac-chat-e-f-x-tham-gia-phan-ung',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Hóa học hữu cơ', 'Este', 'Công thức đơn giản nhất']
    },
    {
        'slug': 'crackinh-c4h10-thu-duoc-35-lit-hon-hop-x-gom-ch4-c2h6-c2h4-c3h6-c4h8-c4h10-va-h2',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Hiđrocacbon', 'Cracking butan', 'Ankan']
    },
    {
        'slug': 'cho-hai-hop-chat-huu-co-x-y-co-cong-thuc-phan-tu-la-c3h9no2-cho-hon-hop-x-va-y-phan-ung-voi',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Hợp chất hữu cơ chứa nitơ', 'Muối amoni', 'Amino axit']
    },
    {
        'slug': 'thuy-phan-het-mot-luong-pentapeptit-t-thu-duoc-3288-gam-ala-gly-ala-gly-1085-gam-ala-gly-ala',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Peptit', 'Thủy phân peptit', 'Amino axit']
    }
]

def main():
    print(f"=== BẮT ĐẦU CHUYỂN ĐỔI BATCH 12 ({len(batch_configs)} BÀI) ===")
    reader = WpressReader(WPRESS_PATH)
    success = 0
    failed = 0
    for cfg in batch_configs:
        slug = cfg['slug']
        try:
            ok = migrate_single_slug(
                reader=reader,
                slug=slug,
                category=cfg['category'],
                p_type=cfg['type'],
                grade=cfg['grade'],
                tags=cfg['tags']
            )
            if ok:
                success += 1
            else:
                failed += 1
                print(f"[FAIL] {slug}")
        except Exception as e:
            failed += 1
            print(f"[ERROR] {slug}: {e}")

    reader.close()
    print(f"\n=== HOÀN THÀNH BATCH 12: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
