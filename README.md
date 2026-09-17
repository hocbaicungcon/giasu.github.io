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

Toán học, Tiếng Việt, Ngữ văn, Tiếng Anh, Tự nhiên và Xã hội, Khoa học, Khoa học tự nhiên, Vật lí, Hóa học, Sinh học, Lịch sử và Địa lí, Lịch sử, Địa lí, Đạo đức, Giáo dục công dân, Giáo dục kinh tế và pháp luật, Tin học, CNTT, Công nghệ, Âm nhạc, Mĩ thuật, Giáo dục thể chất, Hoạt động trải nghiệm.

Danh sách được khai báo tại `scripts/build.mjs`; dùng đúng tên trong `category`. Có thể bổ sung môn bằng cách sửa danh sách này.

## Cấu trúc

- `post/`: nội dung Markdown và metadata.
- `assets/style.css`: giao diện responsive.
- `assets/app.js`: tìm kiếm không dấu, lọc môn/lớp/loại/tag, sắp xếp và lưu bộ lọc trong URL.
- `scripts/build.mjs`: kiểm tra metadata, dựng Markdown, toán, trang danh sách và trang bài viết.
- `.github/workflows/pages.yml`: build và triển khai GitHub Pages.

Tài liệu GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

### Cấu hình HTTPS cho `giasu.ai.vn`

Trong nhà cung cấp DNS, tạo các bản ghi:

```text
@     A      185.199.108.153
@     A      185.199.109.153
@     A      185.199.110.153
@     A      185.199.111.153
www   CNAME  hocbaicungcon.github.io
```

Xóa các bản ghi A/CNAME cũ đang trỏ sang hosting khác. Trong GitHub vào **Settings → Pages → Custom domain**, nhập `giasu.ai.vn` và lưu. Chờ DNS cập nhật, sau đó bật **Enforce HTTPS**; GitHub thường cần thêm thời gian để cấp chứng chỉ TLS. Không dùng bản ghi URL redirect cho `@`; domain gốc phải dùng bốn bản ghi A ở trên.

## Nếu trang công khai hiển thị README thay vì giao diện

Vào **Settings → Pages → Build and deployment → Source**, chuyển từ **Deploy from a branch** sang **GitHub Actions**. Không chọn Jekyll: workflow của dự án dựng trang chủ trong `dist/index.html`. Sau đó chạy **Actions → Build and deploy GitHub Pages → Run workflow** trên nhánh mặc định. Nếu có workflow Jekyll tự tạo riêng, tắt workflow đó để tránh ghi đè bản deploy.

## Nhúng video YouTube

Chèn khối `youtube` ở bất kỳ vị trí nào trong bài. Thay URL mẫu bằng video bài giảng của bạn (video mẫu bên dưới là video giới thiệu trình phát của YouTube, không phải bài học):

````markdown
```youtube
url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE'
title: 'Tên video bài giảng'
```
````

Hỗ trợ URL `youtube.com/watch?v=...`, `youtu.be/...`, `/shorts/...`, `/embed/...` hoặc ID video 11 ký tự. Khung video tự co theo màn hình, không tự phát, có nút toàn màn hình và liên kết mở trên YouTube. Video phải công khai hoặc không công khai có cho phép nhúng; video riêng tư, bị xóa hoặc bị chủ sở hữu chặn nhúng sẽ không phát được. Tham số thời gian trong URL hiện không được áp dụng. Cần Internet để xem video.

## Câu hỏi tương tác

Chèn nhiều khối `quiz` trong cùng bài. Mỗi câu chấm độc lập, có phản hồi, giải thích và nút làm lại.

### Trắc nghiệm một đáp án

````markdown
```quiz
type: choice
question: 'Nghiệm của $2x+4=0$ là bao nhiêu?'
options:
  - '$x=2$'
  - '$x=-2$'
  - '$x=0$'
answer: 2
explanation: 'Chuyển vế được $2x=-4$, nên $x=-2$.'
```
````

`answer` là vị trí đáp án đúng, bắt đầu từ **1**. `options` cần ít nhất hai lựa chọn.

### Nhập đáp án ngắn

````markdown
```quiz
type: text
question: 'Tính $1/2+1/2$.'
answers: ['1', '1.0', '1,0']
explanation: 'Hai nửa cộng lại bằng một: $1/2+1/2=1$.'
```
````

`answers` liệt kê các cách trả lời được chấp nhận; luôn đặt giá trị trong dấu nháy. Hệ thống bỏ khoảng trắng thừa và không phân biệt chữ hoa/thường, nhưng vẫn phân biệt dấu tiếng Việt. Không tự biến đổi biểu thức toán hoặc chấm bài tự luận; hãy liệt kê các cách viết tương đương nếu cần. Dùng dấu nháy đơn cho chuỗi LaTeX có dấu `\` để YAML giữ nguyên công thức.

Câu hỏi, lựa chọn và giải thích hỗ trợ Markdown trong dòng và `$...$`. Kết quả chỉ hiển thị trong phiên hiện tại, tải lại trang sẽ xóa lựa chọn; không gửi điểm về máy chủ. Đáp án có trong HTML nên tính năng phù hợp để tự luyện, không dùng làm bài thi bảo mật. Xem ví dụ hoạt động trong `post/ham-so-bac-hai.md`.

### Bài kiến thức chung

Có thể bỏ trường `grade` nếu bài không thuộc riêng lớp nào; website hiển thị **Mọi lớp**. Bài này xuất hiện khi chọn **Tất cả lớp**. Nếu ghi `grade`, vẫn phải là số nguyên từ 1 đến 12. Tên `category` không phân biệt hoa/thường (ví dụ `Công Nghệ` được chuẩn hóa thành `Công nghệ`).

## Tự động nhập bài từ LaTeX

Copy file **UTF-8 `.tex`** vào `post/` rồi commit và push. Workflow tự chuyển sang Markdown, biên dịch các hình TikZ và xuất bản như bài Markdown thông thường. Không cần cài LaTeX trên máy nếu chỉ dùng GitHub Actions.

Ví dụ:

```text
post/
  de-001.tex
  de-001.yml    # tùy chọn: metadata của bài
```

File `.yml` cùng tên cho phép đặt thông tin bài:

```yaml
title: 'Đề 001 — Hàm số và cực trị'
description: 'Đề luyện tập về hàm số.'
category: 'Toán học'
grade: 12
type: 'Bài tập'
date: '2026-09-17'
tags: ['toán 12', 'đạo hàm']
```

Nếu không có `.yml`, hệ thống lấy tiêu đề từ khối `center` có `textbf` hoặc tên file; mặc định môn **Toán học**, loại **Bài tập**, **Mọi lớp**, tags `toán học` và `đề luyện tập`. Ngày lấy từ commit gần nhất của file; file chưa commit dùng ngày sửa file. Có thể đặt ngày cố định trong `.yml`.

- Mỗi `.tex` tạo một bài. Tên file tiếng Việt và khoảng trắng được chuyển thành slug không dấu.
- Không để `.md` và `.tex` có cùng slug; hệ thống báo lỗi để tránh ghi đè.
- Markdown được sinh tại `.generated/<slug>.md`, không ghi đè nguồn trong `post/`. Website cũng xuất bản bản Markdown tại `markdown/<slug>.md`.
- Khi sửa `.tex`, Markdown tự sinh và bài trên web sẽ cập nhật trong lần build tiếp theo. Sửa nguồn `.tex` hoặc `.yml`, không sửa Markdown trong `.generated/`.
- Muốn chuyển hẳn sang biên tập Markdown: lấy bản `.generated/<slug>.md` vào `post/`, chuyển hình được tham chiếu từ `dist/assets/latex/` sang `assets/latex/`, rồi chuyển file `.tex` ra ngoài `post/`.

### Các cú pháp LaTeX được hỗ trợ

Hỗ trợ cấu trúc giống `post/de-001.tex`: `baitap`, `enumerate` với `item`, tiêu đề `section`/`subsection`/`subsubsection`, `textbf`, `textit`, `emph`, `center`, `minipage`, `multicols`, `setcounter{bt}{0}`, công thức `$...$`, `$$...$$`, `\(...\)`, `\[...\]`, và `\si{m/s}` trong công thức. Mã sau `%` được coi là chú thích; `\%` giữ nguyên ký hiệu phần trăm.

TikZ và bảng `tkz-tab` được biên dịch thành PNG độ phân giải cao, giữ nội dung bản gốc. Các chú thích không được dùng để tự sửa hình hoặc đáp án. Nếu nguồn có sai sót toán học thì bài chuyển đổi cũng giữ nguyên sai sót đó; cần kiểm tra nội dung trước khi đăng.

Đây là bộ chuyển đổi cho cấu trúc đề mẫu, không phải bộ xử lý mọi lệnh LaTeX. Lệnh tùy biến ngoài phạm vi được báo lỗi thay vì âm thầm bỏ nội dung. Preamble của tài liệu đầy đủ không được thực thi; hình dùng các gói `amsmath`, `amssymb`, `tikz`, `tkz-tab` và thư viện `arrows`, `arrows.meta`, `calc`, `patterns`. Chưa hỗ trợ nhập ảnh ngoài bằng `includegraphics`, file con `input/include`, danh sách lồng nhau hay tự suy luận đáp án. Đề không có đáp án được xuất thành câu hỏi tĩnh; muốn chấm tương tác, soạn thêm khối `quiz` trong bài Markdown.

### Theo dõi thư mục trên máy

```sh
npm run dev
```

Lệnh này build và phục vụ tại http://localhost:4173, theo dõi thay đổi trong `post/`, `assets/`, `scripts/`. Copy/sửa file sẽ tự build; tải lại trình duyệt để xem kết quả. Dừng máy chủ preview cũ trước nếu cổng 4173 đang được sử dụng.

Để build đề có TikZ trên máy cần `pdflatex`, các gói LaTeX nói trên và `pdftoppm` (Poppler) trong PATH. GitHub Actions đã tự cài các công cụ này khi có file `.tex`. Các lần build sau dùng cache hình trong `.generated/tikz/`; không commit thư mục `.generated/`.

## Đề kiểm tra trực tuyến từ LaTeX

Mọi file `.tex` có môi trường `baitap` được thêm vào mục **Đề kiểm tra** (`de-kiem-tra/`). Bài đọc có nút **Làm đề trực tuyến**. Hỗ trợ chọn một đáp án, đúng/sai từng ý, nhập đáp án ngắn, đồng hồ đếm ngược, nộp bài, tự nộp khi hết giờ và xem lời giải. Đề đang làm và kết quả lưu trong trình duyệt hiện tại; tải lại vẫn giữ hạn nộp ban đầu. Khi nội dung đề đổi, bài làm cũ không áp dụng cho phiên bản mới.

Trong **mỗi** `baitap`, đặt lời giải trong `traloi` và ghi đáp án rõ bằng `\dapan{...}`:

```latex
\begin{baitap}
Nghiệm của $2x+4=0$ là:
\begin{enumerate}[A.]
\item $x=2$.
\item $x=-2$.
\end{enumerate}
\begin{traloi}
\dapan{B}
Ta có $2x=-4$, suy ra $x=-2$.
\end{traloi}
\end{baitap}
```

- Trắc nghiệm: `\dapan{B}`; cũng đọc câu rõ ràng `Chọn B.` hoặc `Đáp án: B.` trong lời giải.
- Đúng/sai: dùng `enumerate[a)]` hoặc phần có tiêu đề `Phần II. ...`, rồi ghi `\dapan{Đ,S,Đ,S}` đúng thứ tự số ý. Chấp nhận `Đúng,Sai,Đúng,Sai`.
- Trả lời ngắn: câu không có `enumerate`, ghi `\dapan{2,5}`. Hệ thống coi `2,5` và `2.5` tương đương; không tự biến đổi mọi biểu thức toán. Các cách viết khác có thể liệt kê bằng dấu `|`, ví dụ `\dapan{0,5|1/2}`. Trong `dapan` dùng văn bản thuần, không dùng công thức LaTeX có ngoặc nhọn lồng nhau.
- Công thức và TikZ trong `traloi` được giữ lại, chỉ hiển thị sau khi nộp. Trang đọc đề không hiển thị `traloi`.
- Thiếu đáp án hoặc lời giải chỉ có diễn giải không xác định được đáp án: vẫn làm đề, nhưng không tính tổng điểm. Từng câu thiếu đáp án được ghi rõ. Không tự giải bài để đoán đáp án.

Đặt thời gian trong `.yml` cùng tên (mặc định 90 phút):

```yaml
exam:
  duration: 90
```

**Quy tắc chấm hiện tại:** mỗi câu có trọng số bằng nhau; đúng/sai tính tỉ lệ ý đúng; tổng quy đổi thang 10. Đây là thang tự luyện của website, không mặc định áp dụng quy tắc chấm thi tốt nghiệp. Câu chưa trả lời tính 0 khi có đáp án.

Thử file `post/de-mau-tuong-tac.tex` và `.yml` để xem ví dụ đủ 3 dạng. Kết quả không gửi về giáo viên, chưa có tài khoản hay bảng xếp hạng chung. GitHub Pages là website tĩnh nên đáp án nằm trong dữ liệu trang: phù hợp tự luyện, không dùng để bảo mật đáp án thi chính thức.
