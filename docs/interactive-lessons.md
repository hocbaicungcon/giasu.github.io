# Bài học tương tác và tra cứu thuật ngữ

## Định hướng

Tham khảo [Byrne’s Euclid](https://www.c82.net/euclid/book1/) để dùng màu nhất quán giữa góc trong hình và phần giải thích; tham khảo [Mathigon](https://vi.mathigon.org/course/graph-theory/introduction) để đặt hoạt động quan sát, giải nghĩa tại chỗ và từng bước giải thích ngay trong dòng đọc. Không sao chép tài nguyên hay mã nguồn của hai trang.

## Hình học

Thêm khối sau vào Markdown:

```geometry
type: triangle-angles
```

Hoạt động có kéo đỉnh bằng chuột/cảm ứng, thanh trượt dùng bàn phím, ba hình mẫu và bốn bước chứng minh. A đỏ, B xanh dương, C xanh lá; nhãn chữ đi kèm màu. Số đo hiện một chữ số thập phân nên tổng các số đã làm tròn có thể lệch 0,1°, trong khi tổng thực luôn 180°.

SVG tĩnh được giữ thành một khối HTML trước khi dựng Markdown, tránh dòng trống làm phần hình bị chuyển thành mã nguồn.

## Bộ thuật ngữ

- `assets/data/math-glossary.json`: 518 mục lấy từ sheet **Tổng hợp tất cả** trong `assets/danh_sach_thuat_ngu_toan.xlsx`; 134 mục có định nghĩa nguồn; 384 mục thiếu được bổ sung ở tệp riêng. Giữ ID theo STT, tên nguồn và trang tra cứu.
- `assets/data/math-glossary-supplement.json`: giải nghĩa bổ sung của dự án, có nguồn riêng; hiện có 96 khái niệm bổ sung, chủ yếu cho tiểu học và THCS. Không sửa dữ liệu nguồn để điền định nghĩa tự biên soạn.
- `assets/data/math-glossary-definitions.json`: 384 giải nghĩa tự biên soạn gắn với ID nguồn, không thay đổi Excel. Mỗi mục giữ riêng nguồn của định nghĩa và tài liệu/trang tra cứu.
- `scripts/import-glossary.py`: đọc Excel bằng openpyxl và cập nhật JSON nguồn. Chạy sau khi thay Excel; commit JSON cùng thay đổi nguồn. Build thông thường không cần Python/openpyxl.
- `scripts/glossary.mjs`: tạo dữ liệu dùng trên website, biến thể `lí/lý`, `toạ/tọa`, công thức KaTeX và kiểm tra ID.
- `assets/glossary.js`: tự nhận diện trong bài Toán, ưu tiên cụm dài, ranh giới từ Unicode, tối đa hai lần đánh dấu mỗi thuật ngữ, gạch chân mảnh và ngắt dòng như văn bản thường. Không đánh dấu công thức, SVG, tiêu đề, liên kết, mã nguồn hay câu hỏi tương tác. Dùng `data-no-glossary` trên vùng cần loại trừ.

Học sinh bấm từ gạch chân để xem định nghĩa hoặc mở **Tra cứu thuật ngữ Toán**, tìm có/không dấu và lọc mục xuất hiện trong bài. Build kiểm tra tất cả 614 mục có giải nghĩa; giao diện vẫn có thông báo dự phòng nếu gặp dữ liệu thiếu. Dialog hỗ trợ bàn phím, Escape và trả focus về nút mở. Nội dung bài vẫn đọc được nếu JavaScript/dữ liệu không tải được.

Thêm mục bổ sung bằng đối tượng có `id`, `term`, `definition`, `aliases` tùy chọn. Định nghĩa là văn bản thuần với công thức `$...$`; HTML được escape khi build.

## Kiểm tra

`npm test` và `npm run build`; kiểm tra trình duyệt: hình SVG đủ phần, hình mẫu/slider/chứng minh, popup, tìm không dấu, định nghĩa có công thức, mục chỉ có trang tra cứu, Escape và không tràn ngang trên màn hình hẹp.


## Chia sẻ và đầu trang

Chia sẻ dùng một nút tròn nổi bên phải, phía trên nút lên đầu trang. Bấm mở bảng chọn nền tảng; đóng bằng nút đóng, Escape hoặc bấm bên ngoài. Facebook, X, Telegram mở màn hình soạn chia sẻ với liên kết công khai; sao chép và Web Share hỗ trợ ứng dụng trên thiết bị. Không gửi bài chấm, tên học sinh hoặc dữ liệu riêng.

Tài liệu [Telegram](https://core.telegram.org/widgets/share) hỗ trợ URL chia sẻ trực tiếp. Trang [plugin chia sẻ Zalo](https://developers.zalo.me/docs/social/share) hiện chuyển về chỉ mục tài liệu khi kiểm tra ngày 13/10/2026, nên Zalo dùng Web Share hoặc sao chép liên kết rồi mở Zalo Web; không dùng endpoint không được xác nhận. Người dùng tự chọn nơi gửi và xác nhận gửi trong ứng dụng.

Logo trang chấm thi là liên kết về trang chủ. Nút chấm thi dùng hai dòng chữ và badge Free, màu cùng tông logo. Mobile giữ đủ biểu tượng và tên website; nút chấm thi nằm sát bên trái menu, trên cùng một hàng. Dưới 360px giảm khoảng cách và kích thước để tránh tràn.

Giải nghĩa Dirac, Ore và Hamilton được đối chiếu [giáo trình của Joy Morris, Đại học Lethbridge](https://www.cs.uleth.ca/~morris/Combinatorics/html/sect_Euler-Hamilton.html); các giải nghĩa được viết ngắn riêng cho dự án. Khái niệm chu trình/đường đi đơn giản và sơ cấp ghi rõ quy ước tiếng Việt vì cách gọi khác nhau giữa các tài liệu.


## Hoạt động mở rộng và trải nghiệm đọc

- Bài 8: `type: angle-pairs`, `mode: vertical` — góc đối đỉnh và kề bù.
- Bài 9: `type: angle-pairs`, `mode: parallel` — đồng vị, so le trong, trong cùng phía.
- Bài 13: `type: triangle-sss` — chọn ba cạnh, xoay và chồng hai tam giác; kiểm tra bất đẳng thức tam giác trước khi vẽ.

Hình dùng san hô, xanh ngọc và vàng nhấn, cùng màu cho các đối tượng tương ứng và kèm chữ hoặc số vạch. Tiêu đề bài và đề mục dùng STIX Two Text, phần nội dung theo lựa chọn font của người đọc. Không đổi logo hoặc tùy chọn font đã lưu.

Quiz hỗ trợ trường `hint` tùy chọn. Trả lời sai cho phép thử lại trước khi mở lời giải; trả lời đúng mở giải thích. Thanh tiến độ đếm số câu đang trả lời đúng trong phiên; toàn bộ nội dung luôn truy cập được. Mọi hoạt động có thanh trượt dùng được bằng bàn phím, trạng thái có nhãn và hỗ trợ đọc màn hình.

## Ôn tập trên toàn bộ bài học

Các bài có loại `Bài học` được bổ sung thẻ tự kiểm tra bằng `scripts/lesson-activities.mjs`, ưu tiên điền cụm từ nhấn mạnh và thẻ nhớ lại từ đoạn văn hoặc bảng gốc. Bài chỉ có tài liệu liên kết nhận thẻ đọc tài liệu và ghi ý chính; nội dung quá ngắn dùng mô tả bài, được đánh dấu trong báo cáo để biên tập tiếp. Không tự tạo đáp án chuyên môn, không lấy lời giải quiz làm thẻ. Câu điền khuyết dùng danh sách chọn ngay tại dấu “…” trong đoạn trích; lựa chọn lấy từ các cụm từ nhấn mạnh trong cùng bài, đáp án đúng luôn xuất hiện một lần. Thẻ nhớ lại được học sinh tự đánh giá; tiến độ lưu trên thiết bị.

Sau mỗi lần dựng trang, `dist/assets/data/lesson-interactivity-audit.json` ghi số bài được bao phủ, số thẻ, câu điền khuyết, quiz và mô hình hình học để rà soát. Đây là lớp tương tác ôn tập dùng chung; các mô phỏng chuyên biệt vẫn cần biên soạn riêng theo từng chủ đề.

## Bố cục khóa học

Đối chiếu trực tiếp [trang Mathigon được yêu cầu](https://vi.mathigon.org/course/circles/spheres-cones-cylinders): Source Sans Pro, chữ nội dung 18px, dòng 30.6px, cột đọc tối đa 760px, mục lục trái 280px, nền trắng. `assets/style-course.css` áp dụng cho trang bài học; sidebar dùng màu thương hiệu gia sư. Công thức tiếp tục dùng KaTeX, cỡ 1em và có cuộn riêng khi quá dài. Trên màn hình nhỏ, mục lục chuyển thành phần mở/đóng.

## Theme phẳng và tra cứu tại chỗ

Mathigon dựng các phần tử công thức `mi`, `mn`, `mo`, `mfrac` trong `.math` bằng CSS và font Mathigon Symbol / Source Sans Pro (đối chiếu stylesheet công khai của trang). Website này giữ cấu trúc và các ký hiệu co giãn của KaTeX, chọn font không chân bằng `\mathsf` ngay lúc dựng KaTeX, để dấu góc được đặt theo đúng kích thước chữ; các bảng chữ chuyên biệt vẫn được giữ. Không ép font chữ của công thức bằng CSS sau khi đã tính bố cục.

Popup thuật ngữ mở ngay cạnh từ, đóng bằng Esc, nút ×, bấm ngoài hoặc cuộn trang. Tìm toàn bộ thuật ngữ vẫn có ở thanh tra cứu. Mục lục mobile dùng dialog và nút nổi, đóng khi chọn mục; mục lục gốc là phương án dự phòng khi JavaScript không chạy.

Theme chung dùng xanh lá, kem và cam, giảm khung nội dung. Ba nút nổi chia sẻ, lên đầu và mục lục là ngoại lệ hình tròn; các thành phần khác vuông góc. Chia sẻ nằm dưới nút lên đầu. Thanh lớp/môn gồm các ô bằng nhau, tự xuống dòng trên mobile và không dùng cuộn ngang.

CSS chấm thi được chuyển sang `assets/style-grading.css`, giới hạn trong `.grading-page` và gộp vào `assets/style.css`. `cham-thi/style.css` chỉ là đường dẫn tương thích. Service worker chấm thi lưu CSS chung để dùng offline; logic chấm và dữ liệu không thay đổi.
