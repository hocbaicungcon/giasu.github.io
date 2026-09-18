# gia sư thông minh

Website chia sẻ bài học, bài tập lớp 1–12, triển khai trên GitHub Pages. Giao diện dùng màu từ `hocbaicungcon_round.svg`. Nội dung được tạo thành HTML tĩnh, công thức được dựng sẵn bằng KaTeX và dùng font lưu cùng website.

## Đăng bài Giải trí

Thêm tệp Markdown vào `post/` với thông tin như dưới đây. Bài tự xuất hiện tại `/giai-tri/` và trong thư viện. Có thể bỏ `grade` để dành cho mọi lớp; `type` có thể là `Giai thoại`, `Câu đố`, `Khám phá`, `Thí nghiệm vui`, `Lịch sử khoa học` hoặc `Mẹo học tập`. Các khối `quiz` tương tác vẫn sử dụng như bài học.

```yaml
---
title: "Câu đố tư duy: tìm quy luật"
description: "Một thử thách nhỏ để rèn khả năng suy luận."
category: Giải trí
type: Câu đố
date: "2026-09-18"
tags: ["câu đố IQ", "tư duy logic"]
---
```

Với giai thoại về nhà khoa học, dùng `type: Giai thoại` và các tag như `giai thoại`, `nhà khoa học` hoặc tên nhân vật.

## Đề Toán quốc tế

Giữ nguyên tệp `.tex` theo cấu trúc `baitap` hiện có. Tạo tệp `.yml` cùng tên, bổ sung các trường sau vào metadata tiêu đề, mô tả, ngày và tags thông thường:

```yaml
category: Toán học
type: Bài tập
exam_group: quốc tế
competition: AMC
level: AMC 10
year: 2025
language: en
tags: [toán quốc tế, đại số, hình học]
exam:
  duration: 75
  mode: auto
```

`competition`, `level` và `year` dùng để lọc đề. `language` nhận `vi`, `en`, `vi-en`; trường này mô tả ngôn ngữ nội dung, không tự dịch bài. Không cần `grade` nếu kỳ thi có cấp độ riêng. Đề cũ không có các trường này mặc định thuộc nhóm Việt Nam, tiếng Việt, chấm tự động theo đáp án đã có.

Với đề chứng minh như IMO, đặt `exam.mode: self-review` và thời lượng phù hợp. Người học có thể ghi nháp, đánh dấu hoàn thành trên giấy, lưu tiến độ và đối chiếu lời giải sau khi kết thúc. Chế độ này không chấm điểm. Lời giải tiếp tục lấy từ môi trường `traloi` nếu có; không tự tạo lời giải hoặc đáp án. Đề chưa có lời giải vẫn cho phép tự luyện và hiển thị rõ trạng thái.

Menu **Đề kiểm tra** có các lối vào Tất cả đề, Đề Việt Nam và Toán quốc tế. Trang đề hỗ trợ lọc kỳ thi, năm, cấp độ, ngôn ngữ, lớp, môn và chủ đề; URL giữ bộ lọc để chia sẻ.

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

Toán học, Tiếng Việt, Ngữ văn, Tiếng Anh, Tự nhiên và Xã hội, Khoa học, Khoa học tự nhiên, Vật lí, Hóa học, Sinh học, Lịch sử và Địa lí, Lịch sử, Địa lí, Đạo đức, Giáo dục KTPL, Tin học, CNTT, Công nghệ, Âm nhạc, Mĩ thuật, Giáo dục thể chất, Hoạt động trải nghiệm.

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

TikZ và bảng `tkz-tab` được biên dịch thành SVG, giữ độ sắc nét khi phóng to và nội dung bản gốc. Các chú thích không được dùng để tự sửa hình hoặc đáp án. Nếu nguồn có sai sót toán học thì bài chuyển đổi cũng giữ nguyên sai sót đó; cần kiểm tra nội dung trước khi đăng.

Đây là bộ chuyển đổi cho cấu trúc đề mẫu, không phải bộ xử lý mọi lệnh LaTeX. Lệnh tùy biến ngoài phạm vi được báo lỗi thay vì âm thầm bỏ nội dung. Preamble của tài liệu đầy đủ không được thực thi; hình dùng các gói `amsmath`, `amssymb`, `tikz`, `tkz-tab` và thư viện `arrows`, `arrows.meta`, `calc`, `patterns`. Chưa hỗ trợ nhập ảnh ngoài bằng `includegraphics`, file con `input/include`, danh sách lồng nhau hay tự suy luận đáp án. Đề không có đáp án được xuất thành câu hỏi tĩnh; muốn chấm tương tác, soạn thêm khối `quiz` trong bài Markdown.

### Theo dõi thư mục trên máy

```sh
npm run dev
```

Lệnh này build và phục vụ tại http://localhost:4173, theo dõi thay đổi trong `post/`, `assets/`, `scripts/`. Copy/sửa file sẽ tự build; tải lại trình duyệt để xem kết quả. Dừng máy chủ preview cũ trước nếu cổng 4173 đang được sử dụng.

Để build đề có TikZ trên máy cần `pdflatex`, các gói LaTeX nói trên và `dvisvgm` (hoặc `pdftocairo`) trong PATH. GitHub Actions đã tự cài `dvisvgm` khi có file `.tex`. Các lần build sau dùng cache hình trong `.generated/tikz/`; không commit thư mục `.generated/`.

GitHub Actions lưu riêng các SVG trong `.generated/tikz/*/figure.svg` giữa các lần chạy. Khi thêm hoặc sửa đề, workflow khôi phục cache gần nhất tương thích; bộ chuyển đổi dùng mã băm nội dung TikZ để tái sử dụng hình cũ và chỉ biên dịch hình chưa có. Cache mới được lưu sau khi job thành công. Khi sửa bộ chuyển đổi, CSS hoặc workflow, cache được tạo lại để tránh dùng hình từ cấu hình cũ. Lần đầu chạy hoặc sau khi xóa cache sẽ biên dịch lại hình. Website vẫn tạo đầy đủ HTML, danh sách bài và sitemap; LaTeX vẫn được cài để xử lý hình mới. Cache chỉ giúp rút ngắn thời gian tạo hình, không thay đổi nội dung `.tex`.

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
# Nội dung Giải trí từ database

Các trang trong `giai-tri/` được tạo tự động khi build từ `assets/riddles.csv`, `quotes.json`, `quote_authors.json`, `quote_categories.json`, `study_tips.json`, `study_tips_categories.json` và `jokes.json`. Giữ nguyên cấu trúc trường và ID liên kết khi cập nhật dữ liệu.

- CSV câu đố không có dòng tiêu đề, gồm 2 cột: câu hỏi, đáp án. Ô chứa dấu phẩy hoặc xuống dòng phải đặt trong dấu ngoặc kép theo chuẩn CSV.
- Danh ngôn lọc đồng thời theo tác giả và danh mục; mẹo học tập theo danh mục; truyện cười theo trường `cat`.
- Nút tiếp theo chọn ngẫu nhiên, tránh lặp ngay nội dung vừa xem. Đáp án đố vui so khớp chữ sau khi bỏ dấu câu, khoảng trắng và khác biệt chữ hoa; không chấm theo ngữ nghĩa.
- Cuối mỗi bài viết (`.article-end`) hiển thị một mẹo từ `study_tips.json`, tránh lặp mẹo vừa xem trong cùng phiên. Footer giữ câu “✦ Mỗi bài học, một bước tiến!”.
- Build chia dữ liệu thành nhóm 50 mục, trình duyệt chỉ tải nhóm cần hiển thị. Nội dung tiếng Anh giữ nguyên từ nguồn; nên rà soát nội dung trước khi xuất bản cho học sinh.
- Bài Markdown có category `Giải trí`, type `Câu đố` vào mục Câu đố IQ; type `Giai thoại` vào mục Giai thoại. Các loại bài khác vẫn xuất hiện trên trang Giải trí tổng hợp.
- Games tại `giai-tri/games.html` gồm 2048, Sói–Dê–Bắp cải (4 màn), Hai can nước (5 màn) và đoán từ 5 chữ trong 6 lượt. Bộ từ cơ bản chỉnh trong `assets/game-rules.js`; đây là trò chơi độc lập, không dùng dữ liệu của NYTimes. Trạng thái trò chơi chỉ giữ trong lần mở trang hiện tại.
- Qua sông: bấm nhân vật để lên thuyền, bấm hành khách trên thuyền để xuống, bấm thuyền để đi. Hai can nước: chọn can rồi bấm vòi/cống để đổ đầy/đổ hết, bấm can kia để rót; bấm lại can đang chọn để bỏ chọn. Mục tiêu 7 lít là tổng nước trong hai can 5 lít và 3 lít. Nút chơi lại/màn tiếp theo nằm trong cảnh.
- Cấu hình màn chơi ở `assets/puzzle-levels.js`. Kiểm tra tự động duyệt các trạng thái để bảo đảm mỗi màn có lời giải trong giới hạn lượt. Các hình trích từ `assets/wolf cabbage sheep.svg` và `assets/water_riddle.svg` khi build; file SVG gốc không bị sửa.
- Hai nút sắp xếp bài học/đề thi đổi chiều theo tên hoặc ngày đăng (`date` trong metadata), không phải năm diễn ra kỳ thi.
- Công cụ trong menu lưu mức chữ 80–130% và chế độ sáng/tối trên trình duyệt.
