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
- `assets/data/math-glossary-supplement.json`: giải nghĩa bổ sung của dự án, có nguồn riêng; hiện có 98 khái niệm bổ sung, chủ yếu cho tiểu học và THCS. Không sửa dữ liệu nguồn để điền định nghĩa tự biên soạn.
- `assets/data/math-glossary-definitions.json`: 384 giải nghĩa tự biên soạn gắn với ID nguồn, không thay đổi Excel. Mỗi mục giữ riêng nguồn của định nghĩa và tài liệu/trang tra cứu.
- `scripts/import-glossary.py`: đọc Excel bằng openpyxl và cập nhật JSON nguồn. Chạy sau khi thay Excel; commit JSON cùng thay đổi nguồn. Build thông thường không cần Python/openpyxl.
- `scripts/glossary.mjs`: tạo dữ liệu dùng trên website, biến thể `lí/lý`, `toạ/tọa`, công thức KaTeX và kiểm tra ID.
- `assets/glossary.js`: tự nhận diện trong bài Toán, ưu tiên cụm dài, ranh giới từ Unicode, tối đa hai lần đánh dấu mỗi thuật ngữ, gạch chân mảnh và ngắt dòng như văn bản thường. Không đánh dấu công thức, SVG, tiêu đề, liên kết, mã nguồn hay câu hỏi tương tác. Dùng `data-no-glossary` trên vùng cần loại trừ.

Học sinh bấm từ gạch chân để xem định nghĩa hoặc mở **Tra cứu thuật ngữ Toán**, tìm có/không dấu và lọc mục xuất hiện trong bài. Build kiểm tra tất cả 616 mục có giải nghĩa; giao diện vẫn có thông báo dự phòng nếu gặp dữ liệu thiếu. Dialog hỗ trợ bàn phím, Escape và trả focus về nút mở. Nội dung bài vẫn đọc được nếu JavaScript/dữ liệu không tải được.

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


### Khám phá bằng thay đổi dữ liệu

`assets/explorations.js` bổ sung mô hình vào những bài Toán có chủ đề phù hợp: tìm ƯCLN bằng chọn ước, tung đồng xu nhiều lần và thay đổi hệ số của parabol. `scripts/explorations.mjs` chọn chủ đề, không gắn mô hình vào bài chỉ có từ “căn bậc hai”. Các mô hình tính toán nằm trong `assets/exploration-models.js` và được kiểm tra độc lập. Báo cáo tương tác ghi loại mô hình ở trường `exploration`.

Tham khảo cách học qua dự đoán và thay đổi dữ liệu tại [Quadratic Equations](https://mathigon.org/course/quadratics/introduction) và [Probability](https://vi.mathigon.org/course/probability/introduction). Nội dung, số liệu và mô hình của dự án được biên soạn riêng.

`style-brand.css` định nghĩa sắc xanh lá, san hô và vàng cùng header, khu chọn lớp/môn chung. `style-typography.css` dùng một thang chữ theo rem để nút tăng/giảm cỡ chữ hoạt động nhất quán. Nhãn tiếng Việt trong công thức được giữ nguyên Unicode và dùng Source Sans Pro; phần hình học, dấu mũ và phân số vẫn dùng bộ đo chữ KaTeX. Nội dung MathML và nguồn TeX được giữ để hỗ trợ đọc và sao chép.

Bộ đọc Markdown bảo vệ công thức có ký hiệu `<` trước khi xử lý chữ đậm. Quy tắc dọn dấu sao chỉ nhận khoảng trắng ngang, tránh xóa dấu đóng/mở chữ đậm giữa hai đoạn.

### Sắp xếp sự kiện xác suất

Các bài xác suất thực nghiệm có thêm danh sách sáu sự kiện để sắp xếp từ dễ xảy ra đến khó xảy ra, tham khảo nhịp trình bày của https://vi.mathigon.org/course/probability/introduction. Sự kiện dùng đồng xu/xúc xắc cân đối với xác suất chính xác (1, 5/6, 1/2, 1/6, 1/36, 0), tránh ví dụ đời sống thiếu giả thiết. Các icon là SVG nội bộ.

Có thể kéo tay cầm bằng chuột/cảm ứng, bấm nút lên/xuống hoặc dùng phím mũi tên trên tay cầm. Danh sách có thông báo vị trí, nút kiểm tra/làm lại và lời giải sau khi đúng. Mô hình thứ tự được kiểm thử trong `scripts/explorations.test.mjs`; hành vi giao diện nằm ở `assets/probability-sort.js`.

`style-dark.css` thống nhất bảng màu tối; `style-open-layout.css` mở rộng bố cục và giảm khung quanh các khối nội dung. Giữ nền phân biệt cho các phần có thao tác như lựa chọn quiz, ô nhập và hàng kéo thả.

Bộ nhận diện `assets/glossary-matcher.js` ưu tiên cụm dài, nhận khoảng trắng linh hoạt và bỏ highlight các từ đơn dễ nhầm (điểm, đỉnh, cạnh, đoạn, khoảng, khuyên). “Khoảng cách” và “Mẫu số liệu” có giải nghĩa riêng; không gắn “số đối” vào “số đối tượng” hoặc “trọng tâm” vào “kiến thức trọng tâm”.

### Thẻ giấy note trong bản đồ kiến thức

`scripts/knowledge-notes.mjs` chuẩn hóa các khối `flowchart-container` có tiêu đề BẢN ĐỒ KIẾN THỨC hoặc SƠ ĐỒ KIẾN THỨC, giữ nguyên nội dung, công thức và ID tiêu đề. Các thẻ dùng lớp `knowledge-note`, góc gấp CSS và ghim SVG nội bộ `assets/note-pin.svg`. Lưới hai cột chuyển thành một cột trên di động; bảng màu tối có nền riêng. Các sơ đồ quy trình khác không bị đổi kiểu tự động.

`scripts/lesson-figures.mjs` bỏ nền/viền của SVG minh họa và chuyển nét vẽ, nhãn sang biến màu theo theme. Giữ nguyên tọa độ, hình học và các thông số góc; loại trừ SVG trong KaTeX và icon giao diện. `style-figures.css` làm nền hình và vùng chứa trong suốt. Hình tương tác cũng dùng cùng bảng màu.

## Luyện tập tương tác và phiếu bài tập (`/luyen-tap/`)

Trang sinh bài từ thư viện **worksheet** (dự án `latex_bank/worksheet-lib`, bản đóng gói ở `assets/worksheet/worksheet.js`). Môn Toán, Tiếng Việt, Tiếng Anh, Tiếng Trung, Tiếng Nhật, lớp 1–5 (Tiếng Trung/Nhật: chữ Hán/Nhật vẽ bằng phông Noto Sans SC/JP thay cho ảnh nét, gõ pinyin/romaji không cần dấu thanh, "khoanh chữ đúng" thành trắc nghiệm; dạng tập viết/nối hình chưa có trên web, và nút PDF dựng bằng LaTeX bị ẩn vì chưa có nét chữ trong bộ tệp web). Cùng `seed` thì ra cùng bài; liên kết `#s=…&g=…&seed=…&t=…&m=…` chia sẻ đúng đề đang xem.

- `assets/practice-core.js` (không dùng DOM, có test `scripts/practice-core.test.mjs`): chuyển câu hỏi LaTeX của thư viện sang HTML (KaTeX), đổi `\ldots`, `\underline{\hspace}`, `\boxed{\phantom}` thành ô điền hoặc ô chọn, suy đáp án từng ô từ đáp án mẫu (`expectedValues`). Câu không suy được thì tự đối chiếu (nút "Xem đáp án"). Lệnh LaTeX chưa hỗ trợ (hình TikZ, đồng hồ, nối hình, sơ đồ) làm cả câu bị bỏ khỏi bản web; dạng bài không còn câu nào bị ẩn khỏi danh sách.
- `assets/practice.js`: giao diện phiếu (chấm bài, làm lại, in), **Game mode** và âm thanh tổng hợp bằng Web Audio (nút tắt tiếng, không cần tệp âm thanh).
  - Game: 10 câu lần lượt, toàn màn hình, chữ Baloo 2 không chân, thú cưng đồng hành (Twemoji). Đồng hồ chạy tiến theo đường cong tăng tốc (`done²`) theo độ khó Dễ 40s / Vừa 25s / Khó 12s (cộng thêm theo số ô, trắc nghiệm ×0,8); hết giờ tên lửa bay đi. Điểm thưởng theo tốc độ và chuỗi đúng, kỷ lục lưu trên thiết bị.
  - Kiểu câu hỏi: **điền đáp án**, **trắc nghiệm**, **xếp thẻ** (câu trả lời là cả câu/dãy từ, hoặc xếp số theo thứ tự), **nối cặp** (hình/phép tính với đáp án). Chế độ "Trộn lẫn" giữ trắc nghiệm không quá 3/10 câu. Đáp án nhiễu của trắc nghiệm chỉ lấy từ chính câu hỏi (các từ/số được liệt kê, gợi ý "a / b", số lân cận, đổi chỗ, sai hoa/thường; câu có hình lấy thêm tên các hình cùng dạng bài); câu nhiều ô không làm trắc nghiệm.
- **PDF**: GitHub Pages không chạy `pdflatex`, nên "In / Lưu PDF" dựng phiếu in sạch (kèm đáp án nếu chọn) và dùng hộp thoại in của trình duyệt. "Tải mã LaTeX" tải `.tex` đầy đủ (cần `pdflatex`, bảng mã T5). Muốn nút "PDF dựng bằng LaTeX", chạy `scripts/worksheet-compile-server.cjs` trên một máy có TeX Live rồi build với `WORKSHEET_COMPILE_URL=https://…`.
- Cập nhật thư viện: sửa nguồn ở `latex_bank/web/studio-worksheet-*.js`, chạy `node build.cjs` trong `worksheet-lib`, rồi chép `dist/worksheet.js`, `dist/assets-browser.js` và `assets/emoji-svg/` vào `assets/worksheet/`. Thư viện đã được thêm trường `sheets` (các khối bài có cấu trúc) vào kết quả của `generate()`.
- Hình minh hoạ Twemoji (CC-BY 4.0): giấy phép ở `assets/worksheet/LICENSE-GRAPHICS.txt`, phiếu in có dòng ghi công.
- Menu: mục **Luyện tập** gồm Phiếu bài tập (`/luyen-tap/#m=sheet`), Đề thi Việt Nam, Đề thi quốc tế (`/de-kiem-tra/?group=…`) và Luyện tập tương tác (`/luyen-tap/#m=game`).
- Kiểm tra trình duyệt nên làm sau thay đổi lớn: duyệt mọi dạng bài ở 375 px (trong trang có `app.pgGame` để đọc câu hỏi đang chơi), không tràn ngang, không lộ LaTeX, đáp án nhiễu liên quan đến câu hỏi.
- Trang chủ có banner game ngay sau hero (`assets/style-home.css`, markup trong `scripts/build.mjs`), thấp, không bo góc, liền sát hero; hero thu gọn trên điện thoại. Câu có ô trống trong phân số (`\\dfrac{…}{6}`) được dựng bằng HTML (`.pg-fr`) vì tách công thức KaTeX làm hỏng cặp ngoặc. Hình minh hoạ lỗi mạng tự tải lại một lần rồi thay bằng chấm tròn.

## Luyện viết chữ Hán / Nhật (`/luyen-viet/`) và nhóm trang Luyện tập

- Địa chỉ riêng cho từng công cụ để công cụ tìm kiếm lập chỉ mục: `/luyen-tap/` (tổng quan, chuyển hướng liên kết cũ có `#`), `/phieu-bai-tap/`, `/game-luyen-tap/`, `/luyen-viet/`. Tiêu đề, mô tả, hỏi đáp và JSON-LD (WebApplication, FAQPage, ItemList, BreadcrumbList) nằm ở `scripts/practice-pages.mjs`; có test `scripts/practice-pages.test.mjs`. Thêm trang mới thì thêm mục vào `practicePages`.
- Dữ liệu: `scripts/import-writing-data.mjs "<thư mục Kanji-HSK Database>"` dựng `assets/writing/*.json` (mỗi cấp một tệp gồm danh sách chữ và nét chữ định dạng Hanzi Writer) và gắn hình minh hoạ Twemoji cùng nghĩa tiếng Việt cho các chữ/từ có khái niệm trong thư viện hình (ghép nghĩa tiếng Anh, bảng alias và `CHAR_PIC` trong script). Nguồn: AnimCJK (graphics*.txt và dictionary*.txt, Arphic Public License), danh sách HSK 2012, kanji-data (cấp lớp, âm on/kun). Kết quả được commit, chỉ chạy lại khi muốn cập nhật.
- Lộ trình tiếng Trung: Nét cơ bản, Bộ thủ, HSK 1–6 (2.663 chữ). Tiếng Nhật: Nét cơ bản, Hiragana, Katakana, âm đục/chữ nhỏ, Bộ thủ, Kanji lớp 1–6 (1.006 chữ). Tên bộ thủ Hán Việt, tên nét và mẹo viết do dự án tự biên soạn bằng tiếng Việt (nội dung trong script nhập dữ liệu).
- `assets/writing.js` dùng Hanzi Writer 3.7.3 (`assets/vendor/hanzi-writer.min.js`, MIT): Xem mẫu (hoạt ảnh, từng nét), Tô theo nét (tối đa 2 sao), Tự viết (tối đa 3 sao). Tiến độ lưu trên thiết bị. Phát âm dùng giọng đọc của thiết bị (Web Speech API), không có tệp âm thanh; nếu máy chưa có giọng đọc thì hiện thông báo.
