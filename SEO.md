# SEO của giasu.ai.vn

## Đã triển khai
- Liên kết giữa các bài được dựng sẵn trong HTML: tối đa 3 bài “Đọc tiếp cùng chủ đề” trong phần đọc và 6 bài liên quan cuối trang, không trùng nhau. Ưu tiên thẻ chủ đề cụ thể, đối chiếu tiêu đề, cùng môn/lớp và kết nối bài học với bài tập; không ghép bài khác môn chỉ vì cùng lớp hoặc loại bài. Khi không tìm được chủ đề chung, chỉ gợi ý bài cùng môn/lớp (hoặc cùng loại với bài không phân lớp). Không cố điền đủ số liên kết khi thiếu bài phù hợp.
- Audit kiểm tra đích liên kết gợi ý tồn tại, cùng môn, không tự liên kết hoặc lặp giữa hai khối và thống kê độ phủ trên kho bài. Chọn liên kết từ metadata đã được build nạp, không đọc lại toàn bộ nội dung Markdown.
- Mỗi trang HTML công khai có title, description, canonical HTTPS và schema phù hợp. Ảnh chia sẻ lấy đường dẫn tuyệt đối hợp lệ, dùng ảnh mặc định khi ảnh bài viết không phù hợp.
- Trang `/cham-thi/` có H1 và nội dung tĩnh bằng tiếng Việt, hướng dẫn, câu hỏi thường gặp, liên kết phiếu/Excel mẫu và các trang liên quan. Nội dung có sẵn trong HTML, không chờ JavaScript nhận dạng. Các script chấm thi dùng defer và giữ nguyên thứ tự phụ thuộc.
- Schema WebApplication, WebPage, BreadcrumbList, Organization, WebSite mô tả đúng chức năng miễn phí. Không khai báo đánh giá hoặc số sao khi chưa có dữ liệu thật. WebApplication hiện giúp mô tả thực thể; không cam kết được rich result ứng dụng vì Google còn yêu cầu đánh giá thật.
- Ảnh chia sẻ `cham-thi/og-cham-thi.png`: 1200 × 630, khoảng 35 KB. Canonical duy nhất: https://giasu.ai.vn/cham-thi/.
- Sitemap tự sinh chứa các URL công khai, loại 404 và o2edu. Chỉ ghi lastmod cho bài có ngày nội dung đã biết; không lấy ngày build cho các trang còn lại. Trang 404 dùng noindex và liên kết khôi phục điều hướng.
- CI chạy `npm run audit:seo` sau build; lỗi canonical, mô tả, H1, JSON-LD, ảnh chia sẻ hay URL thiếu trong sitemap sẽ chặn triển khai.

- Build chuẩn hoá thẻ tìm kiếm: chỉ gắn hậu tố “· gia sư thông minh” khi tiêu đề ≤ 65 ký tự; mô tả trùng tiêu đề hoặc quá ngắn được bổ sung loại bài, môn, lớp; mô tả dài được cắt ở 160 ký tự theo ranh giới từ. og:title/twitter:title dùng tiêu đề không hậu tố.
- Trang làm đề `/de-kiem-tra/<slug>.html` có tiêu đề “Làm online: …” và mô tả riêng (số câu, thời lượng, cách chấm) để không trùng bài viết cùng nguồn; sitemap ghi lastmod theo ngày của bài.
- Ảnh thứ hai trở đi dùng `loading="lazy" decoding="async"`; font Google tải không chặn hiển thị. Audit chặn tiêu đề trùng và mô tả > 160 ký tự.

## Quy trình kiểm tra
```
npm test
npm run build
npm run audit:seo
```
Sau khi cập nhật trang chấm thi, tăng phiên bản CSS/JS và CACHE service worker khi cần; cập nhật offline-assets.json để người dùng ngoại tuyến nhận đúng tài nguyên. Tránh thêm keyword lặp, đánh giá giả hoặc trang mỏng trùng nội dung.

## Theo dõi sau xuất bản
Chủ website dùng Google Search Console của domain `giasu.ai.vn` để gửi `https://giasu.ai.vn/sitemap.xml`, kiểm tra URL `/cham-thi/`, yêu cầu lập chỉ mục và theo dõi truy vấn, CTR, trang được lập chỉ mục, Core Web Vitals. Các bước này cần quyền Search Console; việc build/deploy không đồng nghĩa Google đã lập chỉ mục. Chưa có dữ liệu Search Console hoặc số đo người dùng thực tế trong lần tối ưu này.

Tài liệu chính thức:
- https://developers.google.com/search/docs/appearance/structured-data/software-app
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/title-link
