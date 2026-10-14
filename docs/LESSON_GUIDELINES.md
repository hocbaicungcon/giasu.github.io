# Quy định biên soạn và trình bày bài học

Tài liệu bàn giao cho người tiếp tục phát triển giasu.ai.vn. Cập nhật cùng thay đổi giao diện hoặc hoạt động học tập.

## Nguồn và quy trình

- Nội dung ở `post/*.md`, front matter YAML: title, description, category, type, date, tags, grade. Không sửa trực tiếp `dist/`: thư mục này được tạo lại khi build.
- Tên bài bỏ tiền tố tên lớp như “Toán 6”, “Toán 7” (áp dụng cả các lớp khác); giữ lớp trong metadata và đường dẫn để lọc bài, tránh làm hỏng liên kết.
- Mục Khởi động không đánh số 0. Build giữ anchor cũ có `0-` để tương thích liên kết đã chia sẻ. Mục lục dùng tên và anchor mới.
- Chạy `npm test`, `npm run build`, kiểm tra trực quan trước khi bàn giao. Kiểm tra cả sáng/tối, desktop/mobile, bàn phím và tương tác cảm ứng.

## Phong cách

- Tham khảo cách tổ chức bài học Mathigon: rộng, gọn, thoáng, ít khung; không sao chép tài sản hay nội dung của họ. Giữ bản sắc logo xanh lá, cam hồng, vàng; tránh xanh dương.
- CSS dùng chung từ `assets/style.css`; các lớp theme cuối nằm trong style-dark, style-open-layout, style-notes, style-figures. Phần chấm thi cũng dùng CSS chung.
- Mặc định không bo góc; ngoại lệ: popup thuật ngữ bo nhẹ, nút nổi share/mục lục/lên đầu hình tròn, mascot có vòng tròn, lựa chọn lớp/môn bo vừa phải.
- Header gọn, chấm thi cạnh tên website, badge Free không che chữ. Hover không đổi nền, không khung, không gạch chân. Submenu mobile cùng nền header. Desktop gom tùy chỉnh hiển thị thành một nút.
- Lớp/môn nằm chung khu chọn học, tự xuống dòng, không cuộn ngang. Tag bài học ở theme tối không có nền và viền.
- Dùng SVG cho icon, không emoji. Không ghi đè màu cứng lên thành phần khi chưa kiểm tra theme tối.

## Giấy note

- Bản đồ kiến thức dùng `knowledge-note`, xử lý qua `scripts/knowledge-notes.mjs`.
- Callout Markdown: `> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]`.
- Màu cố định theo ý nghĩa: NOTE vàng, TIP xanh lá, IMPORTANT cam hồng, WARNING vàng cam, CAUTION tím. Phiên bản tối dùng nền tương ứng sẫm, chữ sáng.
- Giấy note giữ góc gấp, không có ghim trang trí; không thêm khung lồng nhau. Chừa chỗ cho góc gấp.
- Thẻ bài học trong danh sách ở theme sáng có viền mảnh theo `--line`; theme tối giữ trình bày không khung.

## Công thức

- Dùng `$...$` trong dòng, `$$...$$` cho công thức riêng; đi qua `scripts/math.mjs` và KaTeX. Không viết TeX thô trong quiz HTML.
- Công thức dùng sans serif; chữ tiếng Việt trong `\\text{...}` được xử lý để giữ dấu và hỗ trợ đọc máy. Không thay font trực tiếp cho dấu góc, căn, phân số: sẽ làm lệch vị trí ký hiệu.
- Công thức trong `**...**` phải cùng độ đậm với phần chữ. CSS áp dụng độ đậm đến các span KaTeX; kiểm tra cả chữ tiếng Việt, chữ số và ký hiệu. Công thức dùng ký hiệu phức tạp vẫn cần kiểm tra trực quan.

## Hình và tương tác

- Hình SVG bài học nền trong suốt, bỏ khung; dùng biến `--diagram-ink`, `--diagram-coral`, `--diagram-gold`, `--diagram-label`, `--diagram-outline`, `--diagram-wash`. Không làm trong suốt vùng tô có ý nghĩa toán học.
- `scripts/lesson-figures.mjs` chuẩn hóa SVG tĩnh. Không đổi tọa độ hình để chữa lỗi chỉ bằng CSS. Góc phải vẽ từ đúng đỉnh và hai tia; ký hiệu góc vuông theo hai cạnh thật. Các hình Bài 15 có metadata và kiểm tra hình học.
- Hoạt động dùng fenced block `geometry` với YAML `type`: triangle-angles, triangle-sss, angle-pairs (mode vertical/parallel), right-triangles. Renderer: scripts/interactive.mjs và scripts/geometry.mjs; runtime: assets/lesson.js, geometry.js, right-triangles.js.
- Triangle-angles: kéo đỉnh, đổi hình, kiểm chứng tổng góc. Triangle-sss: đổi ba cạnh, xoay, chồng hình, báo điều kiện tạo tam giác. Angle-pairs: đổi cát tuyến, chọn cặp góc. Right-triangles: kéo B/C hoặc dùng slider, chọn dữ kiện bằng nhau, chồng hai tam giác; giữ góc vuông và các cạnh tương ứng bằng nhau.
- Hoạt động mới phải có mục tiêu học, dữ kiện đúng, trạng thái phản hồi và nút đặt lại. Giữ SVG/root ổn định để pointer capture không mất khi render lại. Có thao tác bàn phím thay thế kéo và nội dung khi tắt JavaScript. Không biến hình chứng minh tĩnh thành hình kéo tùy ý làm sai giả thiết.
- Các khám phá ƯCLN/xác suất/hàm bậc hai nằm trong scripts/explorations.mjs và assets/explorations.js. Sắp xếp xác suất hỗ trợ kéo, bàn phím, nút lên/xuống, kiểm tra và giải thích; tránh bài chỉ trang trí.
- Bài điền khuyết ưu tiên chọn từ danh sách. Quiz có phản hồi và giải thích, không lộ đáp án trước thao tác.

## Tra cứu thuật ngữ

- Dữ liệu sinh từ bảng thuật ngữ và bổ sung trong scripts/glossary.mjs. Ghép cụm dài trước, đúng ranh giới từ, tránh highlight từ thông thường như “khoảng” thay cho “khoảng cách”.
- Không highlight trong công thức, hình, biểu mẫu hay điều khiển. Popup ngắn gọn, đặt gần từ, thao tác đóng thuận tiện. Quy tắc matching có kiểm tra trong glossary-matcher.test.mjs.

## Bàn giao

Nêu rõ bài nào đã có tương tác, bài nào còn hình tĩnh, kiểm tra đã chạy và hạn chế còn lại. Không khẳng định tất cả bài đã tương tác nếu chưa rà từng bài. Giữ tương thích slug, anchor cũ và dữ liệu lưu của người học.

## Bài kiểm tra online

- Thanh đồng hồ sticky đặt dưới `--site-header-height`, nền xanh lá đậm, chữ trắng, nút nộp vàng, chỉ bo hai góc dưới; kiểm tra sáng/tối và khi cuộn.
- Phương án được render bằng Markdown inline để số có dấu chấm (ví dụ `24.`) không biến thành danh sách. Cùng cỡ chữ và công thức, cùng độ rộng/padding; cho phép phương án dài xuống dòng tự nhiên, không ép chiều cao làm mất nội dung.

- Công thức đề thi và lời giải dùng cùng cỡ chữ với văn bản; dấu câu sau công thức được nối bằng word joiner để không đứng riêng dòng. Hình ảnh LaTeX đen/trắng ở theme tối dùng invert và screen; SVG dùng biến màu theme, vùng tô nhạt dùng diagram-wash.

- Ô tìm đề và ô tìm bài học/chủ đề: khi focus chỉ đổi viền ngoài sang màu theme; bỏ outline/box-shadow của input bên trong để không xuất hiện khung màu thứ hai.
