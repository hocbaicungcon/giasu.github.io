<!-- credit: giasu.ai.vn -->
# Gia sư thông minh — giasu.ai.vn

Website bài học, bài tập và đề kiểm tra lớp 1–12, xuất bản trên GitHub Pages. Nội dung viết bằng Markdown (hoặc LaTeX), được dựng thành HTML tĩnh; công thức dựng sẵn bằng KaTeX, font lưu cùng website nên không phụ thuộc máy chủ riêng.

Địa chỉ: https://giasu.ai.vn/

## Tính năng

- **Bài học và bài tập** theo môn, lớp, loại, thẻ; tìm kiếm không dấu, bộ lọc lưu trong URL.
- **Tương tác trong bài**: câu hỏi `quiz` (trắc nghiệm, nhập đáp án ngắn), hình `widget` HTML, video YouTube.
- **Đề kiểm tra trực tuyến** dựng từ file LaTeX `.tex`: đồng hồ đếm ngược, chấm tự động, xem lời giải; có nhóm đề Toán quốc tế (AMC, IMO...).
- **Giải trí**: câu đố, danh ngôn, giai thoại, mẹo học tập và trò chơi (2048, Qua sông, Đong nước, đoán từ).
- **Chấm thi trắc nghiệm** (`cham-thi/`): ứng dụng tĩnh chạy ngay trên trình duyệt, hỗ trợ offline.
- **Word add-in** (`word-addin/`): tiện ích cho Microsoft Word để soạn công thức và đề.

## Bắt đầu nhanh

Cần Node.js 22 (và Python 3 nếu dùng `npm run preview`).

```sh
npm ci
npm run build     # dựng website vào dist/
npm run preview   # xem thử tại http://localhost:4173
```

Khi soạn bài, dùng `npm run dev`: build, phục vụ tại http://localhost:4173 và tự build lại khi `post/`, `assets/`, `scripts/` thay đổi. Không sửa trực tiếp `dist/` (thư mục sinh tự động).

| Lệnh | Tác dụng |
| --- | --- |
| `npm test` | Chạy toàn bộ test (`scripts/*.test.mjs`) |
| `node --test scripts/<tên>.test.mjs` | Chạy một tệp test |
| `npm run audit:seo` | Kiểm tra SEO các trang đã dựng |
| `npm run check:videos` | Kiểm tra video YouTube nhúng trong bài |

Để biên dịch hình TikZ trong file `.tex` trên máy cần `pdflatex` và `dvisvgm` (hoặc `pdftocairo`). GitHub Actions tự cài khi cần.

## Đăng bài

Thêm tệp `post/ten-bai-khong-dau.md` (tên duy nhất, chữ thường, số và dấu gạch ngang) với front matter:

```markdown
---
title: "Tên bài viết"
description: "Mô tả ngắn hiện trên thẻ bài."
category: "Toán học"
grade: 10
type: "Bài học"
date: "2026-09-17"
tags: ["toán 10", "đại số"]
---

Nội dung Markdown. Công thức: $y=ax^2+bx+c$ hoặc khối $$ ... $$.
```

- `grade`: số nguyên 1–12, có thể bỏ nếu bài dành cho mọi lớp. `type`: `Bài học` hoặc `Bài tập`.
- `category`: tên môn hợp lệ (danh sách khai báo trong `scripts/build.mjs`).
- `date`: dạng `YYYY-MM-DD`, đặt trong ngoặc kép; dùng để sắp xếp, không hẹn lịch đăng.
- Ảnh đặt trong `assets/images/`, chèn bằng `![Mô tả](../assets/images/ten-anh.png)`.
- Mọi `.md` trong `post/` đều được đăng; giữ bản nháp ngoài thư mục này.
- File `.tex` bỏ vào `post/` cũng được chuyển thành bài (kèm `.yml` cùng tên để đặt metadata).

Cú pháp quiz, widget, YouTube, nhập từ LaTeX, đề kiểm tra, đề Toán quốc tế, nội dung Giải trí và cấu trúc CSS xem [docs/huong-dan-soan-bai.md](docs/huong-dan-soan-bai.md).

## Cấu trúc thư mục

| Đường dẫn | Nội dung |
| --- | --- |
| `post/` | Bài học, bài tập, đề (Markdown, `.tex`, `.yml`) |
| `assets/` | CSS theo module, JavaScript giao diện, font, ảnh, dữ liệu Giải trí |
| `scripts/` | `build.mjs` (trình dựng chính), bộ chuyển LaTeX, trang đề, test |
| `docs/` | Quy định biên soạn và hướng dẫn chi tiết |
| `cham-thi/` | Ứng dụng chấm thi trắc nghiệm |
| `word-addin/` | Word add-in (có README riêng) |
| `.github/workflows/pages.yml` | Test, build và deploy GitHub Pages |
| `CNAME` | Tên miền `giasu.ai.vn` |

`dist/` và `.generated/` là thư mục sinh ra khi build, không commit.

## Tài liệu liên quan

- [docs/LESSON_GUIDELINES.md](docs/LESSON_GUIDELINES.md): quy định soạn bài, giao diện, công thức, hình tương tác.
- [docs/lesson-review-playbook.md](docs/lesson-review-playbook.md): lỗi thường gặp và cách rà soát bài.
- [docs/interactive-lessons.md](docs/interactive-lessons.md): bài học tương tác.
- [SEO.md](SEO.md): các biện pháp SEO đã triển khai.
- [word-addin/README.md](word-addin/README.md), [cham-thi/README.md](cham-thi/README.md): tài liệu từng thành phần.

## Xuất bản

1. Vào **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions** (không chọn Jekyll).
2. Đẩy lên nhánh `main`: workflow **Build and deploy GitHub Pages** chạy test, build rồi deploy. Pull request chỉ test và build, không deploy.
3. Có thể chạy lại bằng **Actions → Build and deploy GitHub Pages → Run workflow**.

Chỉ lưu file trên máy thì website công khai chưa thay đổi; cần commit và push. Nếu trang công khai hiện README thay vì giao diện, kiểm tra lại Source ở bước 1.

### Tên miền riêng

`giasu.ai.vn` dùng bốn bản ghi A cho tên miền gốc, `www` là CNAME:

```text
@     A      185.199.108.153
@     A      185.199.109.153
@     A      185.199.110.153
@     A      185.199.111.153
www   CNAME  hocbaicungcon.github.io
```

Khai báo tên miền trong **Settings → Pages → Custom domain**, chờ DNS cập nhật rồi bật **Enforce HTTPS**. Không dùng URL redirect cho tên miền gốc.

## Lưu ý

- Bài viết là nội dung đáng tin cậy do người quản lý repository soạn; Markdown cho phép HTML và `widget` chạy JavaScript. Không dán mã từ nguồn chưa kiểm tra.
- Đáp án nằm trong HTML của trang: phù hợp tự luyện, không dùng để bảo mật đề thi chính thức.
- Không commit bài làm của học sinh (`cham-thi/data/` là dữ liệu riêng).
