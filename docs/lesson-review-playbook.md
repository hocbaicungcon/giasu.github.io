# Sổ tay rà soát và sửa bài học

Tài liệu cho người tiếp quản: các lỗi đã gặp khi rà soát bài học (Oct 2026), cách phát hiện và cách xử lý. Lỗi ở đây thường **im lặng** (build vẫn qua), chỉ thấy khi dựng và xem trang; vì vậy sau mỗi thay đổi lớn hãy chạy quy trình ở cuối.

## Các lỗi đã gặp và cách xử lý

| Lỗi | Dấu hiệu | Cách xử lý / nơi sửa |
|---|---|---|
| Widget HTML bọc trong ```` ```html ```` | Hình tương tác hiện thành mã nguồn | Dùng khối ```` ```widget ```` (`scripts/build.mjs`, trình dựng `code`). ```` ```html ```` chỉ để hiển thị mã. |
| Khối mã không đóng | Toàn bộ phần sau (bài tập, lời giải) bị nuốt | Build báo lỗi nếu lộ dấu giữ chỗ `@@PROTECTED_TOKEN`. Regex bảo vệ hiểu rào 3+ dấu huyền/`~` và đóng bằng cùng độ dài. |
| Bộ trắc nghiệm nhiều câu (````` ````quiz ````` + `questions`) | Hiện chữ `@@PROTECTED_TOKEN` hoặc không có quiz | `renderQuizSet` trong `scripts/interactive.mjs`. `answer` tính **từ 0** trong bộ nhiều câu, từ 1 trong khối một câu. Có xáo thứ tự lựa chọn (giữ nguyên lựa chọn kiểu "Cả A và B"). |
| Quiz cũ `<div class="quiz-item" data-quiz='{…}'>` | JSON lộ thành chữ, quiz không chạy | `convertQuizItems` đổi cả dãy khối liền nhau thành một bộ quiz. Hiểu `answer` là số, là nguyên văn lựa chọn, hoặc `correct`. Bảo vệ `\frac`, `\bar`, `\times`, `\neq` khỏi bị JSON đổi thành ký tự điều khiển, gộp `\\vec` thành `\vec`, đổi `\n` nguyên văn thành xuống dòng. |
| LaTeX trần trong quiz (`C) \sqrt{7}`) | Mã LaTeX hiện nguyên văn | `normalizeQuizMath` tự bọc vào `$…$`, chỉ khi KaTeX chấp nhận đoạn đó. |
| `$` ghép lệch khi nhập từ nguồn ngoài | Chữ tiếng Việt thành công thức, `\widehat` hiện nguyên | Sửa tay nguồn `post/*.md` (`$ H $là` → `$H$ là`). Mẫu quét: công thức dựng ra mà nội dung là chữ có dấu. |
| Công thức nhiều dòng viết bằng `$…$` | Mã LaTeX lộ ra | Đổi sang khối `$$…$$`. |
| Script widget hỏng cú pháp | Widget không chạy | Kiểm `new vm.Script` cho từng `<script>` trong bài đã dựng. Một lần sửa hàng loạt bằng regex từng làm hỏng 8 bài. |
| Thẻ HTML nằm trong `$…$` | Widget báo `null.textContent` | KaTeX nuốt thẻ; đặt thẻ ngoài công thức. |
| Widget cho nhập số vượt `min`/`max` | `NaN` | Kẹp giá trị theo `min`/`max` của ô nhập. |
| Điểm kéo/nhãn ra ngoài khung SVG | Điểm biến mất, nhãn bị cắt | `interactive-figures.js` có `keepLabelInside`; widget tự viết cần kẹp tọa độ. Hình có `viewBox` quá nhỏ thì mở rộng viewBox. |
| Đề và lời giải lệch nhau | Có "Wait!", "Khoan!" giữa lời giải | Sửa đề cho khớp lời giải, viết lại lời giải gọn. Tìm: `grep -nE "Wait|Khoan[,! ]|Khoan đã"`. |
| Khóa đáp án sai | Đáp án đánh dấu khác đáp án trong lời giải | Đối chiếu đáp án với phần giải thích, rồi tự tính lại câu nghi ngờ. |

## Công thức dài (`scripts/math.mjs`)
Xem thêm `docs/LESSON_GUIDELINES.md`, mục "Công thức dài". Điểm chính:
- `visualWidth` ước lượng độ rộng hiển thị; `wrapLongDisplayFormula` ngắt theo độ rộng đó (quy hoạch động, dấu `=` thẳng hàng, ngắt ở `+`/`−` ngoài ngoặc, mỗi dấu suy ra một dòng). Dùng `aligned`, **không** dùng `array` (chữ inline làm phân số nhỏ).
- `normalizeImportedFormula` xử lý công thức dán từ Word/MathType: gỡ cặp `\left.`…`\right.` vô hình (làm bộ ngắt coi cả công thức là một nhóm), tách hàng dính liền trong `array` thiếu `\\`.
- Công thức inline từ khoảng 44 ký tự hiển thị trở lên được tách thành khối riêng. Phần còn lại không ngắt được (một phân số khổng lồ, một dòng duy nhất của hệ) cuộn trong khung riêng, **không hiện thanh cuộn**; muốn hết hẳn phải sửa tay nguồn.

## Hình minh họa và màu
- SVG nhúng bằng `<img>` chỉ có `viewBox` sẽ giãn đầy cột: `svgDesignSize` gắn `width`/`height` theo viewBox, CSS giới hạn 420px (`style-lessons.css`).
- Tên mặt phẳng viết `(P)`, `(Q)`, không kèm cung; dấu vuông góc vẽ ở **chân** đường vuông góc theo hình bình hành giữa hai hướng; cung góc có đầu mút nằm đúng trên hai tia.
- Màu widget viết tay được đổi lúc build sang bảng màu thương hiệu (`rebrandWidgetColors`, `scripts/lesson-figures.mjs`); trong giao diện tối widget là một "đảo sáng" (`style-dark.css`).

## Quy trình kiểm tra sau thay đổi lớn
1. `npm test`, `npm run build`, `npm run audit:seo`.
2. Quét bài đã dựng (`dist/bai-viet/*.html`) để tìm: LaTeX lộ ngoài công thức (bỏ qua `<script>`, `<pre>`, `<code>`, `.katex`), dấu giữ chỗ `@@…@@`, `data-quiz='`, công thức mà nội dung là chữ.
3. Mở bài trong trình duyệt ở 390 px và 1280 px: `document.documentElement.scrollWidth` bằng chiều rộng khung nhìn, không có `NaN` hay lỗi console; thử cả giao diện sáng/tối.
4. Với widget: nạp bài, bấm mọi nút, kéo mọi điểm, đặt thanh trượt ở hai đầu; kiểm tra lỗi script, `NaN`, nhãn ra ngoài khung (so `getBoundingClientRect` của chữ với của `<svg>`, không dùng `getBBox` khi chữ nằm trong nhóm `transform`).
5. Công cụ kiểm tra bằng trình duyệt là tệp tạm trong `dist/_*.js` (bị gitignore); viết lại khi cần, không commit.

## Video YouTube
- Nhúng bằng khối ```` ```youtube ```` (xem README). Link YouTube dán trơ trong bài chỉ là liên kết, không phải khung nhúng.
- `npm run check:videos` (cần mạng) hỏi oEmbed của YouTube cho mọi video được nhắc trong `post/`: 404 = đã xóa hoặc riêng tư, 401/403 = cấm nhúng. Oct 2026: 15/21 video đã chết; các mục chỉ chứa video chết (cả tiêu đề mục) được xóa cùng lời dẫn "xem trong video sau", đánh lại số mục khi cần. Video 403 nằm trong liên kết của bảng được giữ.
- Chạy lại định kỳ vì video có thể bị gỡ bất kỳ lúc nào.

## Việc còn lại (đã biết)
- Công thức rộng không ngắt được (xem trên); công thức inline vẫn cuộn trong khung.
- Màu nhấn do tác giả chọn kém tương phản trên nền sáng ở một số widget (giao diện sáng cũng vậy).
- Đáp án của ~1.700 câu trắc nghiệm chuyển từ `quiz-item` chưa được kiểm từng câu.
- `de-2026-003`: công thức lạ sinh từ file `.tex`; sửa ở nguồn `.tex`.
