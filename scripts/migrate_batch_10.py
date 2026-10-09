# -*- coding: utf-8 -*-
"""
Script di chuyển Đợt 10 gồm 50 bài viết giáo dục chất lượng cao từ o2.edu.vn (.wpress) sang giasu.ai.vn
"""
import os
import sys
import yaml

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.migrate_wpress import WpressReader, migrate_single_slug, WPRESS_PATH, POST_DIR

batch_configs = [
    {
        'slug': 'cho-m-gam-hon-hop-x-gom-al-va-cuo-vao-dung-dich-chua-048-mol-hcl-sau-khi-cac-phan-ung-xay-ra-hoan-toan',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Nhôm', 'Kim loại', 'HCl']
    },
    {
        'slug': 'de-thi-thu-tot-nghiep-thpt-mon-hoa-thpt-phuc-trach-ha-tinh-lan-1',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Đề thi thử THPT Quốc gia', 'THPT Phúc Trạch']
    },
    {
        'slug': 'de-thi-hsg-lop-12-mon-hoa-thanh-pho-ho-chi-minh-nam-2021',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học sinh giỏi Hóa', 'TP Hồ Chí Minh']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-11-cum-truong-thach-that-quoc-oai-nam-2023-2024',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học sinh giỏi Hóa', 'Thạch Thất']
    },
    {
        'slug': 'de-thi-thu-tot-nghiep-thpt-2022-mon-hoa-thpt-hau-loc-4-thanh-hoa-lan-2-co-dap-an',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Đề thi thử THPT Quốc gia', 'THPT Hậu Lộc 4']
    },
    {
        'slug': 'cac-quy-tac-bieu-dien-hinh-trong-khong-gian',
        'category': 'Toán học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 11', 'Hình học không gian', 'Biểu diễn hình không gian']
    },
    {
        'slug': 'cac-bat-dang-thuc-thuong-su-dung',
        'category': 'Toán học',
        'grade': 10,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 10', 'Bất đẳng thức', 'Bất đẳng thức Cauchy', 'Bunhiacopxki']
    },
    {
        'slug': 'xem-con-vat-3d-bang-google-tren-dien-thoai',
        'category': 'CNTT',
        'grade': None,
        'type': 'Khám phá',
        'tags': ['Tin học', 'Công nghệ', 'Google 3D', 'Thực tế ảo AR']
    },
    {
        'slug': 'bai-toan-ve-nang-suat',
        'category': 'Toán học',
        'grade': 9,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 9', 'Giải bài toán bằng cách lập phương trình', 'Bài toán năng suất']
    },
    {
        'slug': 'hon-hop-x-gom-al-fexoy-tien-hanh-phan-ung-nhiet-nhom-hoan-toan-m-gam-hon-hop-x-trong-dieu-kien-khong-co-khong-khi-thu-duoc-hon-hop-y',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Nhiệt nhôm', 'Sắt', 'Nhôm']
    },
    {
        'slug': 'cau-hoi-trac-nghiem-bai-4-tach-tinh-dau-tu-cac-nguon-thao-moc-tu-nhien-chuyen-de-canh-dieu',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Chuyên đề Hóa học', 'Tách tinh dầu', 'Cánh diều']
    },
    {
        'slug': 'chia-399-gam-hon-hop-x-o-dang-bot-gom-na-al-fe-thanh-ba-phan-bang-nhau',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Kim loại kiềm', 'Nhôm', 'Sắt']
    },
    {
        'slug': 'de-bao-ve-vat-bang-sat-nguoi-ta-ma-ni-o-ben-ngoai-vat-bang-cach-dien-phan-dung-dich-muoi-ni2',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Điện phân', 'Mạ điện', 'Ăn mòn kim loại']
    },
    {
        'slug': 'nguyen-tac-6d-trong-hoc-tap-hieu-qua',
        'category': 'Các môn khác',
        'grade': None,
        'type': 'Mẹo học tập',
        'tags': ['Phương pháp học tập', 'Kĩ năng học tập', 'Quy trình 6D', 'Tự học']
    },
    {
        'slug': 'de-thi-hsg-lop-12-mon-hoa-cum-hiep-hoa-bac-giang',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Học sinh giỏi Hóa', 'Bắc Giang']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-10-tinh-thai-binh-nam-2023-2024-de-minh-hoa',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học sinh giỏi Hóa', 'Thái Bình']
    },
    {
        'slug': 'word-bai-tap-toan-9-ket-noi-tri-thuc',
        'category': 'Toán học',
        'grade': 9,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 9', 'Bài tập Toán 9', 'Kết nối tri thức']
    },
    {
        'slug': 'de-thi-hoc-ki-2-mon-hoa-lop-11-thpt-nguyen-thi-minh-khai',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học kì 2', 'THPT Nguyễn Thị Minh Khai']
    },
    {
        'slug': 'nung-nong-m-gam-hon-hop-al-va-fexoy-trong-moi-truong-khong-co-khong-khi-den-khi-phan-ung-xay-ra-hoan-toan',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Nhiệt nhôm', 'Nhôm', 'Oxit sắt']
    },
    {
        'slug': 'cho-so-do-chuyen-hoa-naoh-z-naoh-e-baco3',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Sơ đồ chuyển hóa', 'Hợp chất vô cơ', 'Bari']
    },
    {
        'slug': 'dien-phan-500-ml-dung-dich-alcl3-02m-trong-thoi-gian-12352-giay-voi-dong-dien-mot-chieu',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Điện phân', 'AlCl3', 'Định luật Faraday']
    },
    {
        'slug': 'python-bai-toan-xep-hau-su-dung-de-quy',
        'category': 'CNTT',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Tin học', 'Python', 'Đệ quy', 'Thuật toán quay lui', 'Bài toán 8 quân hậu']
    },
    {
        'slug': 'huong-dan-su-dung-phan-mem-doit',
        'category': 'CNTT',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Tin học', 'Phần mềm DoIT', 'Đạo văn', 'Công cụ học tập']
    },
    {
        'slug': 'stem-hoa-hoc-lop-11-su-dung-bap-cai-tim-lam-chat-chi-thi-axit-bazo',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 11', 'STEM Hóa học', 'Chất chỉ thị màu', 'Axit bazơ']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-10-11-so-ca-mau-nam-2022-2023',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học sinh giỏi Hóa', 'Cà Mau']
    },
    {
        'slug': 'de-thi-hsg-toan-tieng-anh-nam-2018-sgd-nam-dinh',
        'category': 'Toán học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 12', 'Toán tiếng Anh', 'Học sinh giỏi Toán', 'Nam Định']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-11-tinh-ha-tinh-nam-2023-2024',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học sinh giỏi Hóa', 'Hà Tĩnh']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-10-cap-truong-ha-noi-nam-2023-2024',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học sinh giỏi Hóa', 'Hà Nội']
    },
    {
        'slug': 'de-thi-giua-hoc-ki-1-lop-10-mon-hoa-thpt-tran-hung-dao',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Giữa kì 1', 'THPT Trần Hưng Đạo']
    },
    {
        'slug': 'giao-an-powerpoint-hoa-11-bai-1-khai-niem-ve-can-bang-hoa-hoc-kntt',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 11', 'Giáo án Powerpoint', 'Cân bằng hóa học', 'KNTT']
    },
    {
        'slug': 'giao-an-khbd-hoa-12-ctst-word-powerpoint-ca-nam',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 12', 'Giáo án Hóa học', 'Chân trời sáng tạo', 'KHBD']
    },
    {
        'slug': 'tai-lieu-lap-trinh-python-excel',
        'category': 'CNTT',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Tin học', 'Python', 'Excel', 'Lập trình Python', 'Openpyxl']
    },
    {
        'slug': 'de-kiem-tra-hoc-ki-2-lop-10-mon-hoa-thpt-mac-dinh-chi',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 10', 'Học kì 2', 'THPT Mạc Đĩnh Chi']
    },
    {
        'slug': 'khi-suc-tu-tu-den-du-khi-co2-vao-mot-coc-dung-dung-dich-caoh2-ket-qua-thi-nghiem-duoc-bieu-dien-tren-do-thi-hinh-ben',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Đồ thị Hóa học', 'CO2', 'Ca(OH)2']
    },
    {
        'slug': 'de-kiem-tra-hoc-ki-2-lop-11-mon-hoa-hoc-thpt-bui-thi-xuan-2',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học kì 2', 'THPT Bùi Thị Xuân']
    },
    {
        'slug': 'mot-loai-phan-npk-co-do-dinh-duong-duoc-ghi-tren-bao-bi-nhu-o-hinh-ben',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Phân bón hóa học', 'Phân NPK']
    },
    {
        'slug': 'thay-co-dua-vao-nhung-tieu-chi-danh-gia-nao-de-lua-chon-su-dung-pp-ktdh-cua-mot-chu-de-trong-mon-hoa-hoc',
        'category': 'Các môn khác',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Phương pháp dạy học', 'Tập huấn giáo viên', 'Kĩ thuật dạy học', 'Giáo dục']
    },
    {
        'slug': 'giao-an-chuyen-de-hoc-tap-bai-6-diem-chop-chay-nhiet-do-ngon-lua-nhiet-do-tu-boc-chay',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 11', 'Chuyên đề Hóa học', 'Cháy nổ', 'Nhiên liệu']
    },
    {
        'slug': 'cau-hoi-trac-nghiem-bai-7-nguon-goc-va-phan-loai-dau-mo-chuyen-de-canh-dieu',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Chuyên đề Hóa học', 'Dầu mỏ', 'Cánh diều']
    },
    {
        'slug': 'vecto-va-he-toa-do-trong-khong-gian-toan-12-ctst',
        'category': 'Toán học',
        'grade': 12,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 12', 'Vectơ trong không gian', 'Hệ tọa độ không gian', 'Chân trời sáng tạo']
    },
    {
        'slug': 'phuong-phap-suy-luan-don-gian',
        'category': 'Toán học',
        'grade': 5,
        'type': 'Bài học',
        'tags': ['Toán học', 'Toán 5', 'Suy luận logic', 'Toán tư duy']
    },
    {
        'slug': 'muoi-x-co-cong-thuc-phan-tu-c3h10o3n2-lay-1952-gam-x-cho-tac-dung-voi-200-ml-dung-dich-koh',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Hợp chất chứa nitơ', 'Muối amoni']
    },
    {
        'slug': 'cho-hon-hop-x-gom-2-chat-huu-co-co-cung-cong-thuc-phan-tu-c3h10n2o2-tac-dung-vua-du-voi-dung-dich-naoh',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Hợp chất hữu cơ chứa nitơ', 'Muối amoni']
    },
    {
        'slug': 'de-khao-sat-cuoi-nam-lop-3-mon-toan',
        'category': 'Toán học',
        'grade': 3,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 3', 'Khảo sát cuối năm', 'Đề kiểm tra']
    },
    {
        'slug': 'hoa-tan-hoan-toan-255-gam-al2o3-bang-mot-luong-vua-du-dung-dich-hno3-thu-duoc-2525-gam-dung-dich-x-lam-lanh-x-den-10c',
        'category': 'Hóa học',
        'grade': 12,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 12', 'Độ tan', 'Kết tinh', 'Al2O3']
    },
    {
        'slug': '11-tai-lieu-hoc-latex-hay-nhat',
        'category': 'CNTT',
        'grade': None,
        'type': 'Khám phá',
        'tags': ['Tin học', 'LaTeX', 'Tài liệu học tập', 'Soạn thảo văn bản khoa học']
    },
    {
        'slug': 'giao-an-hoa-10-bai-22-hydrogen-halide-muoi-halide',
        'category': 'Hóa học',
        'grade': 10,
        'type': 'Bài học',
        'tags': ['Hóa học', 'Hóa học 10', 'Giáo án Hóa học', 'Halogen', 'Hydrogen halide']
    },
    {
        'slug': 'bo-de-thi-hoc-ki-1-toan-10-ptnk-tp-hcm',
        'category': 'Toán học',
        'grade': 10,
        'type': 'Bài tập',
        'tags': ['Toán học', 'Toán 10', 'Học kì 1', 'Phổ thông Năng khiếu']
    },
    {
        'slug': 'de-thi-hsg-mon-hoa-lop-11-cum-truong-ung-hoa-my-duc-nam-2023-2024',
        'category': 'Hóa học',
        'grade': 11,
        'type': 'Bài tập',
        'tags': ['Hóa học', 'Hóa học 11', 'Học sinh giỏi Hóa', 'Ứng Hòa - Mỹ Đức']
    },
    {
        'slug': 'skkn-mot-so-bien-phap-xay-dung-goc-thu-vien-than-thien-gop-phan-hinh-thanh-thoi-quen-doc-sach-cho-tre-ngay-tu-nho',
        'category': 'Các môn khác',
        'grade': None,
        'type': 'Bài học',
        'tags': ['Sáng kiến kinh nghiệm', 'Thư viện thân thiện', 'Đọc sách', 'Giáo dục']
    }
]

def main():
    print(f"=== BẮT ĐẦU CHUYỂN ĐỔI BATCH 10 ({len(batch_configs)} BÀI) ===")
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
    print(f"\n=== HOÀN THÀNH: Thành công: {success}, Thất bại: {failed} ===")

if __name__ == '__main__':
    main()
