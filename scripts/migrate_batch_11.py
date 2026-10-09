# -*- coding: utf-8 -*-
"""
Script di chuyển Đợt 11 gồm 50 bài viết giáo dục chất lượng cao từ o2.edu.vn (.wpress) sang giasu.ai.vn
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.migrate_wpress import WpressReader, migrate_single_slug, WPRESS_PATH

batch_configs = [
    {
        'slug': 'de-kiem-tra-hoc-ki-2-lop-10-mon-hoa-thpt-nguyen-thi-minh-khai',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học kì 2', 'THPT Nguyễn Thị Minh Khai']
    },
    {
        'slug': 'de-thi-hoc-ki-2-lop-11-mon-hoa-hoc-thpt-nguyen-du',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học kì 2', 'THPT Nguyễn Du']
    },
    {
        'slug': 'skkn-long-ghep-tro-choi-dan-gian-vao-hoat-dong-giao-duc-the-chat-lop-5-nham-gop-phan-phat-trien-pham-chat-va-nang-luc-cho-hoc-sinh',
        'category': 'Các môn khác',
        'grade': 5,
        'type': 'Bài học',
        'tags': ['Sáng kiến kinh nghiệm', 'Giáo dục thể chất', 'Trò chơi dân gian', 'Tiểu học']
    },
    {
        'slug': 'toan-9-giai-bai-toan-bang-cach-lap-he-phuong-trinh',
        'category': 'Toán học',
        'grade': 9,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 9', 'Hệ phương trình', 'Giải bài toán bằng cách lập hệ phương trình']
    },
    {
        'slug': 'giai-phuong-trinh-bang-phuong-phap-nhan-lien-hop',
        'category': 'Toán học',
        'grade': 10,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 10', 'Phương trình vô tỉ', 'Nhân liên hợp']
    },
    {
        'slug': 'tien-hanh-thi-nghiem-theo-cac-buoc-sau-buoc-1-cho-vao-bat-su-nho-khoang-1-gam-dau-thuc-vat-va-3-ml-dung-dich-naoh-40',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Xà phòng hóa', 'Chất béo', 'Thí nghiệm hóa học']
    },
    {
        'slug': 'huong-dan-cach-tao-slide-powerpoint-tu-file-word',
        'category': 'CNTT',
        'grade': None,
        'type': 'Mẹo học tập',
        'tags': ['Tin học', 'PowerPoint', 'Microsoft Word', 'Thủ thuật máy tính']
    },
    {
        'slug': 'de-tieng-anh-sgd-nam-dinh-2023',
        'category': 'Tiếng Anh',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Tiếng Anh', 'Tiếng Anh 12', 'Đề thi thử THPT Quốc gia', 'Nam Định']
    },
    {
        'slug': 'dung-dich-x-gom-cuso4-va-nacl-tien-hanh-dien-phan-dung-dich-x-voi-dien-cuc-tro-mang-ngan-xop-cuong-do-dong-dien-05a',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Điện phân', 'CuSO4', 'NaCl']
    },
    {
        'slug': 'giao-an-chuyen-de-hoc-tap-bai-4-entropy-va-bien-thien-nang-luong-tu-do-gibbs',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 10', 'Chuyên đề Hóa học', 'Entropy', 'Năng lượng Gibbs']
    },
    {
        'slug': 'cho-e-c3h6o3-va-f-c4h6o4-la-hai-chat-huu-co-mach-ho-deu-tao-tu-axit-cacboxylic-va-ancol-tu-e-va-f-thuc-hien-so-do-cac-phan-ung-sau-3',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Este', 'Axit cacboxylic', 'Sơ đồ phản ứng']
    },
    {
        'slug': 'cho-1136-gam-hon-hop-gom-fe-feo-fe2o3-fe3o4-phan-ung-het-voi-dung-dich-hno3-loang-du',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Sắt', 'Oxit sắt', 'HNO3']
    },
    {
        'slug': 'tien-hanh-thi-nghiem-theo-cac-buoc-sau-buoc-1-lay-hai-ong-nghiem-kho-sau-do-cho-khoang-5-ml-dung-dich-h2so4-1m',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Thí nghiệm hóa học', 'H2SO4', 'Ăn mòn kim loại']
    },
    {
        'slug': 'cho-702-gam-hon-hop-bot-al-fe-va-cu-vao-binh-a-chua-dung-dich-hcl-du-thu-duoc-khi-b',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kim loại', 'HCl', 'Nhôm']
    },
    {
        'slug': 'giao-an-hoa-11-bai-2-can-bang-trong-dung-dich-nuoc-kntt',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 11', 'Giáo án Hóa học', 'Cân bằng trong dung dịch', 'KNTT']
    },
    {
        'slug': 'hon-hop-e-gom-hai-chat-huu-co-deu-no-mach-ho-co-cong-thuc-phan-tu-la-x-c2h8o3n2-va-y-c3h10o4n2',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Hợp chất hữu cơ chứa nitơ', 'Muối amoni']
    },
    {
        'slug': 'gieo-mam-tren-sa-mac-ebook',
        'category': 'Các môn khác',
        'grade': None,
        'type': 'Khám phá',
        'tags': ['Sách hay', 'Ebook', 'Kĩ năng sống', 'Đọc sách']
    },
    {
        'slug': 'de-kiem-tra-hoc-ki-2-lop-10-mon-hoa-thpt-marie-curie',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học kì 2', 'THPT Marie Curie']
    },
    {
        'slug': 'hoa-tan-het-1360-gam-hon-hop-hai-kim-loai-x-y-trong-dung-dich-h2so4-loang-thu-duoc',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kim loại', 'H2SO4', 'H2']
    },
    {
        'slug': 'cach-chia-tinh-tu-trong-tieng-duc',
        'category': 'Ngoại ngữ',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Ngoại ngữ', 'Tiếng Đức', 'Ngữ pháp tiếng Đức', 'Tính từ tiếng Đức']
    },
    {
        'slug': 'tien-hanh-cac-buoc-thi-nghiem-nhu-sau-buoc-1-cho-mot-nhum-bong-vao-coc-dung-dung-dich-h2so4-70',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Thí nghiệm hóa học', 'Xenlulozơ', 'Thủy phân']
    },
    {
        'slug': 'tu-vung-tieng-nhat-cho-brse',
        'category': 'Ngoại ngữ',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Ngoại ngữ', 'Tiếng Nhật', 'Từ vựng tiếng Nhật', 'CNTT', 'BrSE']
    },
    {
        'slug': 'so-ha-han-gioi-la-gi',
        'category': 'Các môn khác',
        'grade': None,
        'type': 'Khám phá',
        'tags': ['Lịch sử', 'Văn hóa', 'Cờ tướng', 'Sở Hà Hán Giới']
    },
    {
        'slug': 'bai-toan-nhiet-phan-va-cracking-ankan',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Ankan', 'Nhiệt phân', 'Cracking ankan']
    },
    {
        'slug': 'bo-de-thi-thu-van-tac-pham-vo-nhat',
        'category': 'Ngữ văn',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Ngữ văn', 'Ngữ văn 12', 'Vợ Nhặt', 'Kim Lân', 'Ôn thi THPT Quốc gia']
    },
    {
        'slug': 'phuong-phap-gia-thiet-tam',
        'category': 'Toán học',
        'grade': 5,
        'type': 'Mẹo học tập',
        'tags': ['Toán học', 'Toán 5', 'Phương pháp giả thiết tạm', 'Toán tiểu học']
    },
    {
        'slug': 'cho-mgam-kim-loai-fe-vao-1-lit-dung-dich-chua-agno3-01m-va-cuno32-01m',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Sắt', 'AgNO3', 'Cu(NO3)2']
    },
    {
        'slug': 'monochloro-hoa-propane-co-chieu-sang-o-25c-thu-duoc-45-1-chloropropane',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Ankan', 'Clo hóa propane', 'Đồng phân']
    },
    {
        'slug': 'cach-don-van-ban-nam-tron-trong-mot-trang-word',
        'category': 'CNTT',
        'grade': None,
        'type': 'Mẹo học tập',
        'tags': ['Tin học', 'Microsoft Word', 'Thủ thuật văn phòng', 'Soạn thảo văn bản']
    },
    {
        'slug': 'khi-cho-200-gam-hon-hop-x-gom-mg-al-zn-va-fe-phan-ung-hoan-toan-voi-luong-du-dung-dich-hcl',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kim loại', 'HCl', 'Định luật bảo toàn']
    },
    {
        'slug': 'cho-01-mol-hop-chat-hua-co-x-co-cong-thuc-phan-tu-ch6o3n2-tac-dung-voi-dung-dich-chua-01-mol-naoh',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Hợp chất hữu cơ chứa nitơ', 'Muối amoni']
    },
    {
        'slug': 'bai-tap-gia-tri-luong-giac-cua-goc-tu-0-den-180',
        'category': 'Toán học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 10', 'Lượng giác', 'Giá trị lượng giác']
    },
    {
        'slug': 'cau-hoi-trac-nghiem-bai-1-gioi-thieu-chung-ve-phan-bon-chuyen-de-kntt',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Chuyên đề Hóa học', 'Phân bón', 'KNTT']
    },
    {
        'slug': 'bai-tap-vecto-va-he-toa-do-trong-khong-gian-toan-12-ctst',
        'category': 'Toán học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 12', 'Vectơ không gian', 'Hệ tọa độ không gian', 'Chân trời sáng tạo']
    },
    {
        'slug': 'chat-x-c5h14o2n2-la-muoi-amoni-cua-amino-axit-chat-y-c9h20o4n4-mach-ho-la-muoi-amoni-cua-tripeptit',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Peptit', 'Amino axit', 'Muối amoni']
    },
    {
        'slug': 'suc-448-lit-dktc-co2-vao-100-ml-dung-dich-hon-hop-gom-koh-1m-va-baoh2-075m',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'CO2', 'Ba(OH)2', 'KOH']
    },
    {
        'slug': 'giao-an-chuyen-de-toan-12-canh-dieu',
        'category': 'Toán học',
        'grade': 12,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 12', 'Giáo án Toán', 'Chuyên đề Toán 12', 'Cánh diều']
    },
    {
        'slug': 'cho-185-gam-chat-huu-co-a-co-cong-thuc-phan-tu-c3h11n3o6-tac-dung-vua-du-voi-300-ml-dung-dich-naoh',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Hợp chất hữu cơ chứa nitơ', 'Muối amoni']
    },
    {
        'slug': 'nung-2808-gam-hon-hop-x-gom-al-va-mot-oxit-sat-trong-moi-truong-khong-co-khong-khi',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Nhiệt nhôm', 'Al', 'Oxit sắt']
    },
    {
        'slug': 'cau-hoi-trac-nghiem-va-phan-dang-bai-tap-theo-tung-bai-hoa-11-ca-nam',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Trắc nghiệm Hóa 11', 'Phân dạng bài tập']
    },
    {
        'slug': 'de-thi-hsg-lop-10-mon-hoa-truong-thpt-chuyen-nguyen-du-dak-lac-nam-2022-2023',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học sinh giỏi Hóa', 'Chuyên Nguyễn Du', 'Đắk Lắk']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-10-tinh-ha-nam-nam-2023-2024',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học sinh giỏi Hóa', 'Hà Nam']
    },
    {
        'slug': 'skkn-ung-dung-kahoot-quizizz-vao-day-hoc-tich-cuc-trong-mon-gdcd-o-truong-thpt',
        'category': 'Giáo dục KTPL',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Sáng kiến kinh nghiệm', 'Giáo dục KTPL', 'Kahoot', 'Quizizz', 'Dạy học tích cực']
    },
    {
        'slug': 'de-thi-hsg-lop-12-mon-hoa-tinh-nghe-an-nam-2018',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học sinh giỏi Hóa', 'Nghệ An']
    },
    {
        'slug': 'hoa-tan-426-g-hon-hop-mot-oxit-kim-loai-kiem-va-mot-oxit-kim-loai-kiem-tho-bang-dd-hcl-du-thu-duoc-dd-x',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kim loại kiềm', 'Kim loại kiềm thổ', 'HCl']
    },
    {
        'slug': 'de-thi-hoc-ki-2-mon-hoa-lop-12-thpt-nguyen-hien',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học kì 2', 'THPT Nguyễn Hiền']
    },
    {
        'slug': 'de-thi-giua-hoc-ki-1-mon-hoa-lop-10-thpt-nguyen-khuyen',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Giữa kì 1', 'THPT Nguyễn Khuyến']
    },
    {
        'slug': 'de-thi-hsg-vinh-phuc-mon-hoa-hoc-nam-2018',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học sinh giỏi Hóa', 'Vĩnh Phúc']
    },
    {
        'slug': 'giao-an-powerpoint-hoa-11-bai-24-carboxylic-acid-kntt',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 11', 'Giáo án Powerpoint', 'Carboxylic acid', 'KNTT']
    },
    {
        'slug': 'de-thi-hsg-lop-10-mon-hoa-thpt-ha-trung-thanh-hoa-nam-2022-2023',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học sinh giỏi Hóa', 'Hà Trung', 'Thanh Hóa']
    }
]

def main():
    print(f"=== BẮT ĐẦU CHUYỂN ĐỔI BATCH 11 ({len(batch_configs)} BÀI) ===")
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
    print(f"\n=== HOÀN THÀNH BATCH 11: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
