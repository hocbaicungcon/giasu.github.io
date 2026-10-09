<?php
/**
 * Plugin Name: Chuyển hướng 301 sang giasu.ai.vn
 * Description: Tự động chuyển hướng các bài viết từ o2.edu.vn sang giasu.ai.vn bằng mã 301 chuẩn SEO.
 * Version: 1.59
 */

add_action('template_redirect', function() {
    $redirects = [
        '/2000-chu-kanji-thong-dung-nhat/' => 'https://giasu.ai.vn/bai-viet/2000-chu-kanji-thong-dung-nhat.html',
        '/214-bo-thu-han-ngu/' => 'https://giasu.ai.vn/bai-viet/214-bo-thu-han-ngu.html',
        '/50-bai-tap-lap-trinh-scratch/' => 'https://giasu.ai.vn/bai-viet/50-bai-tap-lap-trinh-scratch.html',
        '/50-bo-thu-thuong-dung-pdf/' => 'https://giasu.ai.vn/bai-viet/50-bo-thu-thuong-dung-pdf.html',
        '/bai-toan-cau-ca-dirac/' => 'https://giasu.ai.vn/bai-viet/bai-toan-cau-ca-dirac.html',
        '/bang-ky-tu-dac-biet-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/bang-ky-tu-dac-biet-thuong-dung.html',
        '/bien-luan-cong-thuc-cau-tao-etse-co-loi-giai-chi-tiet/' => 'https://giasu.ai.vn/bai-viet/bien-luan-cong-thuc-cau-tao-etse-co-loi-giai-chi-tiet.html',
        '/bo-go-tieng-viet-cho-mac/' => 'https://giasu.ai.vn/bai-viet/bo-go-tieng-viet-cho-mac.html',
        '/cac-bai-tho-van-trong-sgk-tieu-hoc-cu/' => 'https://giasu.ai.vn/bai-viet/cac-bai-tho-van-trong-sgk-tieu-hoc-cu.html',
        '/cac-bieu-hien-cua-nang-luc-toan-hoc/' => 'https://giasu.ai.vn/bai-viet/cac-bieu-hien-cua-nang-luc-toan-hoc.html',
        '/cach-giai-rubic-2x2/' => 'https://giasu.ai.vn/bai-viet/cach-giai-rubic-2x2.html',
        '/cach-giai-rubik-3x3-don-gian-nhat/' => 'https://giasu.ai.vn/bai-viet/cach-giai-rubik-3x3-don-gian-nhat.html',
        '/cach-nho-50-bo-thu-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/cach-nho-50-bo-thu-thuong-dung.html',
        '/cach-nho-bo-thu-tieng-trung/' => 'https://giasu.ai.vn/bai-viet/cach-nho-bo-thu-tieng-trung.html',
        '/cach-nho-cac-bo-thu-trong-tieng-trung/' => 'https://giasu.ai.vn/bai-viet/cach-nho-cac-bo-thu-trong-tieng-trung.html',
        '/cach-tinh-goc-giua-duong-thang-va-mat-phang-lop-11/' => 'https://giasu.ai.vn/bai-viet/cach-tinh-goc-giua-duong-thang-va-mat-phang-lop-11.html',
        '/cach-tinh-goc-giua-hai-mat-phang-trong-khong-gian/' => 'https://giasu.ai.vn/bai-viet/cach-tinh-goc-giua-hai-mat-phang-trong-khong-gian.html',
        '/cach-tinh-khoang-cach-tu-mot-diem-den-mot-mat-phang/' => 'https://giasu.ai.vn/bai-viet/cach-tinh-khoang-cach-tu-mot-diem-den-mot-mat-phang.html',
        '/cach-tinh-thang-du-thang-thieu-bang-ban-tay/' => 'https://giasu.ai.vn/bai-viet/cach-tinh-thang-du-thang-thieu-bang-ban-tay.html',
        '/cach-viet-50-bo-thu-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/cach-viet-50-bo-thu-thuong-dung.html',
        '/cau-do-chin-diem/' => 'https://giasu.ai.vn/bai-viet/cau-do-chin-diem.html',
        '/cau-do-day-so-bi-an/' => 'https://giasu.ai.vn/bai-viet/cau-do-day-so-bi-an.html',
        '/chat-x-co-cong-thuc-phan-tu-c6h8o4-cho-1-mol-x-phan-ung-het-voi-dung-dich-naoh-thu-duoc-chat-y-va-2-mol-chat-z/' => 'https://giasu.ai.vn/bai-viet/chat-x-co-cong-thuc-phan-tu-c6h8o4-cho-1-mol-x-phan-ung-het-voi-dung-dich-naoh-thu-duoc-chat-y-va-2-mol-chat-z.html',
        '/cho-1-mol-chat-x-c9h8o4-chua-vong-benzen-tac-dung-het-voi-naoh-du-thu-duoc-2-mol-chat-y-1-mol-chat-z-va-1-mol-h2o/' => 'https://giasu.ai.vn/bai-viet/cho-1-mol-chat-x-c9h8o4-chua-vong-benzen-tac-dung-het-voi-naoh-du-thu-duoc-2-mol-chat-y-1-mol-chat-z-va-1-mol-h2o.html',
        '/cho-este-hai-chuc-mach-ho-x-c7h10o4-tac-dung-voi-luong-du-dung-dich-naoh-dun-nong-thu-duoc-ancol-y-no-hai-chuc-va-hai-muoi/' => 'https://giasu.ai.vn/bai-viet/cho-este-hai-chuc-mach-ho-x-c7h10o4-tac-dung-voi-luong-du-dung-dich-naoh-dun-nong-thu-duoc-ancol-y-no-hai-chuc-va-hai-muoi.html',
        '/chon-diem-roi-trong-bat-dang-thuc-cosi/' => 'https://giasu.ai.vn/bai-viet/chon-diem-roi-trong-bat-dang-thuc-cosi.html',
        '/co-bao-nhieu-con-meo/' => 'https://giasu.ai.vn/bai-viet/co-bao-nhieu-con-meo.html',
        '/dien-phan-200-ml-dung-dich-cuso4-voi-dien-cuc-tro-bang-dong-dien-mot-chieu/' => 'https://giasu.ai.vn/bai-viet/dien-phan-200-ml-dung-dich-cuso4-voi-dien-cuc-tro-bang-dong-dien-mot-chieu.html',
        '/dot-chay-hoan-toan-132-gam-este-x-thu-duoc-06-mol-co2-va-06-mol-h2o-cong-thuc-phan-tu-cua-x-la/' => 'https://giasu.ai.vn/bai-viet/dot-chay-hoan-toan-132-gam-este-x-thu-duoc-06-mol-co2-va-06-mol-h2o-cong-thuc-phan-tu-cua-x-la.html',
        '/este-x-co-cong-thuc-phan-tu-c6h10o4-xa-phong-hoa-hoan-toan-x-bang-dung-dich-naoh-thu-duoc-ba-chat-huu-co-y-z-t/' => 'https://giasu.ai.vn/bai-viet/este-x-co-cong-thuc-phan-tu-c6h10o4-xa-phong-hoa-hoan-toan-x-bang-dung-dich-naoh-thu-duoc-ba-chat-huu-co-y-z-t.html',
        '/file-luyen-viet-50-bo-thu-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/file-luyen-viet-50-bo-thu-thuong-dung.html',
        '/giai-bai-tap-chat-beo-theo-phuong-phap-don-chat/' => 'https://giasu.ai.vn/bai-viet/giai-bai-tap-chat-beo-theo-phuong-phap-don-chat.html',
        '/giai-thoai-archimedes/' => 'https://giasu.ai.vn/bai-viet/giai-thoai-archimedes.html',
        '/goc-giua-hai-duong-thang-trong-khong-gian/' => 'https://giasu.ai.vn/bai-viet/goc-giua-hai-duong-thang-trong-khong-gian.html',
        '/ham-so-bac-hai/' => 'https://giasu.ai.vn/bai-viet/ham-so-bac-hai.html',
        '/he-thuc-luong-trong-tam-giac-lop-10/' => 'https://giasu.ai.vn/bai-viet/he-thuc-luong-trong-tam-giac-lop-10.html',
        '/hoc-nhanh-214-bo-thu-chu-han-qua-bai-tho-82-cau/' => 'https://giasu.ai.vn/bai-viet/hoc-nhanh-214-bo-thu-chu-han-qua-bai-tho-82-cau.html',
        '/hop-chat-huu-co-mach-ho-x-c8h12o5-tac-dung-voi-luong-du-dung-dich-naoh-dun-nong-thu-duoc-glixerol-va-hon-hop-2-muoi-cacboxylat-y-va-z/' => 'https://giasu.ai.vn/bai-viet/hop-chat-huu-co-mach-ho-x-c8h12o5-tac-dung-voi-luong-du-dung-dich-naoh-dun-nong-thu-duoc-glixerol-va-hon-hop-2-muoi-cacboxylat-y-va-z.html',
        '/hop-chat-huu-co-x-co-cong-thuc-phan-tu-c5h6o4-x-tac-dung-voi-naoh-trong-dung-dich-theo-ti-le-mol-1-2-tao-ra-muoi-cua-axit-no-y-va-ancol-z/' => 'https://giasu.ai.vn/bai-viet/hop-chat-huu-co-x-co-cong-thuc-phan-tu-c5h6o4-x-tac-dung-voi-naoh-trong-dung-dich-theo-ti-le-mol-1-2-tao-ra-muoi-cua-axit-no-y-va-ancol-z.html',
        '/khoang-cach-giua-hai-duong-thang-cheo-nhau/' => 'https://giasu.ai.vn/bai-viet/khoang-cach-giua-hai-duong-thang-cheo-nhau.html',
        '/luong-dien-tieu-thu-trung-binh-1-gia-dinh-la-bao-nhieu/' => 'https://giasu.ai.vn/bai-viet/luong-dien-tieu-thu-trung-binh-1-gia-dinh-la-bao-nhieu.html',
        '/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat/' => 'https://giasu.ai.vn/bai-viet/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat.html',
        '/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai/' => 'https://giasu.ai.vn/bai-viet/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai.html',
        '/ly-thuyet-va-bai-tap-dien-phan-co-loi-giai-chi-tiet/' => 'https://giasu.ai.vn/bai-viet/ly-thuyet-va-bai-tap-dien-phan-co-loi-giai-chi-tiet.html',
        '/phan-so-bang-nhau/' => 'https://giasu.ai.vn/bai-viet/phan-so-bang-nhau.html',
        '/phuong-trinh-chua-can-bat-phuong-trinh-chua-can/' => 'https://giasu.ai.vn/bai-viet/phuong-trinh-chua-can-bat-phuong-trinh-chua-can.html',
        '/phuong-trinh-chua-tri-tuyet-doi/' => 'https://giasu.ai.vn/bai-viet/phuong-trinh-chua-tri-tuyet-doi.html',
        '/present-simple/' => 'https://giasu.ai.vn/bai-viet/present-simple.html',
        '/so-sanh-1-so-voi-2-nghiem-cua-phuong-trinh-bac-hai/' => 'https://giasu.ai.vn/bai-viet/so-sanh-1-so-voi-2-nghiem-cua-phuong-trinh-bac-hai.html',
        '/thi-nghiem-mat-nuoc/' => 'https://giasu.ai.vn/bai-viet/thi-nghiem-mat-nuoc.html',
        '/thuy-phan-hoan-toan-148-gam-este-don-chuc-x-bang-dung-dich-naoh-du-dun-nong-thu-duoc-164-gam-muoi-y/' => 'https://giasu.ai.vn/bai-viet/thuy-phan-hoan-toan-148-gam-este-don-chuc-x-bang-dung-dich-naoh-du-dun-nong-thu-duoc-164-gam-muoi-y.html',
        '/tim-dieu-kien-de-tam-thuc-bac-hai-luon-duong/' => 'https://giasu.ai.vn/bai-viet/tim-dieu-kien-de-tam-thuc-bac-hai-luon-duong.html',
        '/toc-do-chuyen-dong/' => 'https://giasu.ai.vn/bai-viet/toc-do-chuyen-dong.html',
        '/tong-hop-50-bai-tap-chat-beo-co-loi-giai-chi-tiet/' => 'https://giasu.ai.vn/bai-viet/tong-hop-50-bai-tap-chat-beo-co-loi-giai-chi-tiet.html',
        '/tong-hop-bai-tap-huu-co-hay-va-kho/' => 'https://giasu.ai.vn/bai-viet/tong-hop-bai-tap-huu-co-hay-va-kho.html',
        '/tong-hop-cac-chuyen-de-hoa-hoc-lop-11/' => 'https://giasu.ai.vn/bai-viet/tong-hop-cac-chuyen-de-hoa-hoc-lop-11.html',
        '/viet-doan-van-cam-nhan/' => 'https://giasu.ai.vn/bai-viet/viet-doan-van-cam-nhan.html',
        '/vo-ghi-bai-hoc-hoa-11-kntt-ca-nam/' => 'https://giasu.ai.vn/bai-viet/vo-ghi-bai-hoc-hoa-11-kntt-ca-nam.html',
        '/xac-suat-tung-dong-xu/' => 'https://giasu.ai.vn/bai-viet/xac-suat-tung-dong-xu.html',
    ];

    $request_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $trimmed_path = rtrim($request_path, '/');

    foreach ($redirects as $old_path => $target_url) {
        if (rtrim($old_path, '/') === $trimmed_path) {
            wp_redirect($target_url, 301);
            exit;
        }
    }
});
