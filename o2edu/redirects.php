<?php
/**
 * Plugin Name: Chuyển hướng 301 sang giasu.ai.vn
 * Description: Tự động chuyển hướng các bài viết từ o2.edu.vn sang giasu.ai.vn bằng mã 301 chuẩn SEO.
 * Version: 1.1
 */

add_action('template_redirect', function() {
    $redirects = [
        '/2000-chu-kanji-thong-dung-nhat/' => 'https://giasu.ai.vn/bai-viet/2000-chu-kanji-thong-dung-nhat.html',
        '/50-bai-tap-lap-trinh-scratch/' => 'https://giasu.ai.vn/bai-viet/50-bai-tap-lap-trinh-scratch.html',
        '/50-bo-thu-thuong-dung-pdf/' => 'https://giasu.ai.vn/bai-viet/50-bo-thu-thuong-dung-pdf.html',
        '/bang-ky-tu-dac-biet-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/bang-ky-tu-dac-biet-thuong-dung.html',
        '/bien-luan-cong-thuc-cau-tao-etse-co-loi-giai-chi-tiet/' => 'https://giasu.ai.vn/bai-viet/bien-luan-cong-thuc-cau-tao-etse-co-loi-giai-chi-tiet.html',
        '/cac-bai-tho-van-trong-sgk-tieu-hoc-cu/' => 'https://giasu.ai.vn/bai-viet/cac-bai-tho-van-trong-sgk-tieu-hoc-cu.html',
        '/cac-bieu-hien-cua-nang-luc-toan-hoc/' => 'https://giasu.ai.vn/bai-viet/cac-bieu-hien-cua-nang-luc-toan-hoc.html',
        '/cach-nho-50-bo-thu-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/cach-nho-50-bo-thu-thuong-dung.html',
        '/cach-tinh-thang-du-thang-thieu-bang-ban-tay/' => 'https://giasu.ai.vn/bai-viet/cach-tinh-thang-du-thang-thieu-bang-ban-tay.html',
        '/cach-viet-50-bo-thu-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/cach-viet-50-bo-thu-thuong-dung.html',
        '/dien-phan-200-ml-dung-dich-cuso4-voi-dien-cuc-tro-bang-dong-dien-mot-chieu/' => 'https://giasu.ai.vn/bai-viet/dien-phan-200-ml-dung-dich-cuso4-voi-dien-cuc-tro-bang-dong-dien-mot-chieu.html',
        '/dot-chay-hoan-toan-132-gam-este-x-thu-duoc-06-mol-co2-va-06-mol-h2o-cong-thuc-phan-tu-cua-x-la/' => 'https://giasu.ai.vn/bai-viet/dot-chay-hoan-toan-132-gam-este-x-thu-duoc-06-mol-co2-va-06-mol-h2o-cong-thuc-phan-tu-cua-x-la.html',
        '/file-luyen-viet-50-bo-thu-thuong-dung/' => 'https://giasu.ai.vn/bai-viet/file-luyen-viet-50-bo-thu-thuong-dung.html',
        '/giai-bai-tap-chat-beo-theo-phuong-phap-don-chat/' => 'https://giasu.ai.vn/bai-viet/giai-bai-tap-chat-beo-theo-phuong-phap-don-chat.html',
        '/goc-giua-hai-duong-thang-trong-khong-gian/' => 'https://giasu.ai.vn/bai-viet/goc-giua-hai-duong-thang-trong-khong-gian.html',
        '/hoc-nhanh-214-bo-thu-chu-han-qua-bai-tho-82-cau/' => 'https://giasu.ai.vn/bai-viet/hoc-nhanh-214-bo-thu-chu-han-qua-bai-tho-82-cau.html',
        '/luong-dien-tieu-thu-trung-binh-1-gia-dinh-la-bao-nhieu/' => 'https://giasu.ai.vn/bai-viet/luong-dien-tieu-thu-trung-binh-1-gia-dinh-la-bao-nhieu.html',
        '/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat/' => 'https://giasu.ai.vn/bai-viet/ly-thuyet-va-bai-tap-dau-nhi-thuc-bac-nhat.html',
        '/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai/' => 'https://giasu.ai.vn/bai-viet/ly-thuyet-va-bai-tap-dau-tam-thuc-bac-hai.html',
        '/ly-thuyet-va-bai-tap-dien-phan-co-loi-giai-chi-tiet/' => 'https://giasu.ai.vn/bai-viet/ly-thuyet-va-bai-tap-dien-phan-co-loi-giai-chi-tiet.html',
        '/phuong-trinh-chua-can-bat-phuong-trinh-chua-can/' => 'https://giasu.ai.vn/bai-viet/phuong-trinh-chua-can-bat-phuong-trinh-chua-can.html',
        '/phuong-trinh-chua-tri-tuyet-doi/' => 'https://giasu.ai.vn/bai-viet/phuong-trinh-chua-tri-tuyet-doi.html',
        '/so-sanh-1-so-voi-2-nghiem-cua-phuong-trinh-bac-hai/' => 'https://giasu.ai.vn/bai-viet/so-sanh-1-so-voi-2-nghiem-cua-phuong-trinh-bac-hai.html',
        '/thuy-phan-hoan-toan-148-gam-este-don-chuc-x-bang-dung-dich-naoh-du-dun-nong-thu-duoc-164-gam-muoi-y/' => 'https://giasu.ai.vn/bai-viet/thuy-phan-hoan-toan-148-gam-este-don-chuc-x-bang-dung-dich-naoh-du-dun-nong-thu-duoc-164-gam-muoi-y.html',
        '/tim-dieu-kien-de-tam-thuc-bac-hai-luon-duong/' => 'https://giasu.ai.vn/bai-viet/tim-dieu-kien-de-tam-thuc-bac-hai-luon-duong.html',
        '/tong-hop-50-bai-tap-chat-beo-co-loi-giai-chi-tiet/' => 'https://giasu.ai.vn/bai-viet/tong-hop-50-bai-tap-chat-beo-co-loi-giai-chi-tiet.html',
        '/tong-hop-bai-tap-huu-co-hay-va-kho/' => 'https://giasu.ai.vn/bai-viet/tong-hop-bai-tap-huu-co-hay-va-kho.html',
        '/tong-hop-cac-chuyen-de-hoa-hoc-lop-11/' => 'https://giasu.ai.vn/bai-viet/tong-hop-cac-chuyen-de-hoa-hoc-lop-11.html',
        '/vo-ghi-bai-hoc-hoa-11-kntt-ca-nam/' => 'https://giasu.ai.vn/bai-viet/vo-ghi-bai-hoc-hoa-11-kntt-ca-nam.html',
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

