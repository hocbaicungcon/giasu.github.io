# gia sư thông minh

Website chia sẻ bài học, bài tập lớp 1–12, triển khai trên GitHub Pages. Giao diện dùng màu từ `hocbaicungcon_round.svg`. Nội dung được tạo thành HTML tĩnh, công thức được dựng sẵn bằng KaTeX và dùng font lưu cùng website.

## Chạy trên máy

Cần Node.js 22 và Python 3 (chỉ dùng cho máy chủ xem thử).

```sh
npm ci
npm test
npm run build
npm run preview
```

Mở http://localhost:4173. Sau khi sửa bài hoặc giao diện, chạy lại `npm run build` rồi tải lại trang. Không sửa trực tiếp `dist/` vì đây là thư mục được sinh tự động.

## Xuất bản trên GitHub Pages

1. Đẩy các file lên nhánh `main` hoặc `master` của repository.
2. Vào **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**.
3. Workflow **Build and deploy GitHub Pages** sẽ build, kiểm tra và triển khai. Có thể chạy lại bằng **Actions → Build and deploy GitHub Pages → Run workflow**.
4. Xem địa chỉ website trong Settings → Pages hoặc trong kết quả bước Deploy. Repository này nằm tại `hocbaicungcon/giasu.github.io`, vì vậy địa chỉ mặc định dự kiến là `https://hocbaicungcon.github.io/giasu.github.io/` (không phải tên miền giasu.ai.vn).

Pull request vào `main` hoặc `master` được kiểm thử và build, không deploy. Chỉ nhánh mặc định của repository được deploy; nhánh mặc định cần là `main` hoặc `master` để tự chạy khi push.

Mỗi lần commit và push bài mới vào `post/` trên nhánh mặc định, workflow tự cập nhật trang chủ, tags, danh mục, trang bài viết và bài liên quan. Chỉ lưu file trên máy chưa cập nhật website công khai. Các đường dẫn tương đối hỗ trợ cả project Pages và tên miền riêng. Muốn dùng `giasu.ai.vn`, cấu hình tên miền trong Settings → Pages và DNS riêng; dự án chưa tự thay đổi DNS.

## Viết bài mới

Tạo `post/ten-bai-khong-dau.md` (tên duy nhất, chữ thường, số và dấu gạch ngang):

```markdown
---
title: "Tên bài viết"
description: "Mô tả ngắn xuất hiện trên thẻ bài viết."
category: "Toán học"
grade: 10
type: "Bài học"
date: "2026-09-17"
tags: ["toán 10", "đại số"]
---

## Kiến thức cần nhớ

Công thức trong dòng: $y=ax^2+bx+c$.

Công thức riêng một dòng (để dòng trống trước và sau):

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

## Bài tập

1. Câu hỏi đầu tiên.

## Đáp án

Lời giải và giải thích.
```

- `grade`: số nguyên từ 1 đến 12; `type`: `Bài học` hoặc `Bài tập`.
- `date`: ngày có thật theo định dạng YYYY-MM-DD, đặt trong dấu ngoặc kép.
- `tags`: danh sách chủ đề; có thể tự thêm tag mới, không cần sửa mã.
- Hỗ trợ tiêu đề, bảng, danh sách, trích dẫn, liên kết, ảnh và khối mã Markdown.
- Ảnh: đặt tại `assets/images/`, trong bài dùng `![Mô tả](../assets/images/ten-anh.png)`.
- Liên kết bài khác: `[Tên bài](./ten-bai.html)`.
- KaTeX hỗ trợ `$...$` và `$$...$$`; dấu `$` thông thường có thể viết `\$`.
- Không đặt công thức trong khối mã nếu muốn hiển thị thành toán học.
- Bài viết được coi là nội dung đáng tin cậy từ người quản lý repository; Markdown cho phép HTML. Không nhập HTML từ nguồn chưa được kiểm tra.
- Tất cả file `.md` trong `post/` đều được đăng; giữ bản nháp ngoài thư mục này. Ngày trong metadata dùng để sắp xếp, không hẹn lịch đăng.
- Sáu bài có sẵn là nội dung mẫu có thể thay thế hoặc xóa.

## Các môn học

Toán học, Tiếng Việt, Ngữ văn, Tiếng Anh, Tự nhiên và Xã hội, Khoa học, Khoa học tự nhiên, Vật lí, Hóa học, Sinh học, Lịch sử và Địa lí, Lịch sử, Địa lí, Đạo đức, Giáo dục công dân, Giáo dục kinh tế và pháp luật, Tin học, Công nghệ, Âm nhạc, Mĩ thuật, Giáo dục thể chất, Hoạt động trải nghiệm.

Danh sách được khai báo tại `scripts/build.mjs`; dùng đúng tên trong `category`. Có thể bổ sung môn bằng cách sửa danh sách này.

## Cấu trúc

- `post/`: nội dung Markdown và metadata.
- `assets/style.css`: giao diện responsive.
- `assets/app.js`: tìm kiếm không dấu, lọc môn/lớp/loại/tag, sắp xếp và lưu bộ lọc trong URL.
- `scripts/build.mjs`: kiểm tra metadata, dựng Markdown, toán, trang danh sách và trang bài viết.
- `.github/workflows/pages.yml`: build và triển khai GitHub Pages.

Tài liệu GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Nếu trang công khai hiển thị README thay vì giao diện

Vào **Settings → Pages → Build and deployment → Source**, chuyển từ **Deploy from a branch** sang **GitHub Actions**. Không chọn Jekyll: workflow của dự án dựng trang chủ trong `dist/index.html`. Sau đó chạy **Actions → Build and deploy GitHub Pages → Run workflow** trên nhánh mặc định. Nếu có workflow Jekyll tự tạo riêng, tắt workflow đó để tránh ghi đè bản deploy.
