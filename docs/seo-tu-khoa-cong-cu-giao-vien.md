# Cụm hướng dẫn công cụ giáo viên — 22/10/2026

## Khảo sát và giới hạn dữ liệu

Đã tìm kiếm các nhóm “MathType Macbook gõ công thức”, “trộn đề Macbook” và “phần mềm chấm trắc nghiệm miễn phí” trên web. Kết quả quan sát có cả hướng dẫn cài MathType cũ, bài tổng hợp phần mềm và bài giải đáp về tương thích Mac. Đây là khảo sát định tính ý định tìm kiếm, không phải dữ liệu lượng tìm kiếm, độ khó SEO hoặc dự báo thứ hạng. Chưa truy cập Google Search Console/Keyword Planner.

Suy luận biên tập: nên trả lời trực tiếp nhu cầu thao tác, nêu rõ TexCraft là tiện ích độc lập, tách từng công việc để giảm lặp nội dung. Không giới thiệu TexCraft như MathType chính hãng, không hứa chuyển mọi công thức hoặc đọc mọi phiếu.

## Bản đồ từ khóa và bài viết

| Từ khóa chính | Biến thể cùng ý định | Slug | Nội dung riêng |
| --- | --- | --- | --- |
| Gõ MathType trên MacBook | cài MathType Word Mac; sửa MathType trên Mac | go-mathtype-tren-macbook | Cài TexCraft, soạn mới, định dạng đầu ra, lấy từ Word |
| Soạn công thức toán MacBook | gõ phân số Word Mac; LaTeX trong Word; viết công thức toán trên Mac | soan-cong-thuc-toan-macbook | Mã mẫu, nhập trực quan, bảng biến thiên, quy trình soạn tài liệu |
| Chuẩn hóa công thức MathType MacBook | đổi font MathType Mac; đổi cỡ MathType; chuyển MathType sang Word Mac | chuan-hoa-cong-thuc-mathtype-macbook | Quét, làm lại đối tượng, thử phạm vi nhỏ, chuyển đổi và đối chiếu |
| Trộn đề trên MacBook | phần mềm trộn đề Mac; trộn đề Word Mac; xuất đáp án Excel | tron-de-tren-macbook | Phân tích, nhận đáp án, cấu hình trộn, bản phát học sinh, xuất đáp án |
| Phần mềm chấm trắc nghiệm miễn phí | chấm bằng điện thoại; chấm ảnh PDF; chấm trắc nghiệm MacBook | phan-mem-cham-trac-nghiem-mien-phi | Mẫu phiếu, thang điểm, đáp án/QR, tải bài, camera, kiểm tra, xuất điểm |

Đường dẫn xuất bản của các bài là `/bai-viet/<slug>.html`. Liên kết tương đối giữa các bài dùng `./<slug>.html`; liên kết công cụ dùng `../word-addin/` và `../cham-thi/`.

## Nguồn đối chiếu

- Wiris: https://docs.wiris.com/en_US/mathtype-7/installing-mathtype-7-for-windows-and-mac — bảng yêu cầu Mac của MathType 7 cũ, phân biệt với add-in Office.
- Wiris: https://msaddin.wiris.net/ — sản phẩm MathType cho Office.
- Microsoft: https://learn.microsoft.com/en-us/office/math/latex — LaTeX và OMML, cú pháp được hỗ trợ.
- Tài liệu nội bộ: `word-addin/README.md`, `word-addin/su-dung.html`, `word-addin/huong-dan.html`.
- Giao diện và nghiệp vụ: `word-addin/taskpane/taskpane.html`, `exam-ui.js`, `src/exam.js`; `cham-thi/index.html`, `app.js`.

## Kết quả khảo sát bổ sung khi tiếp tục bản thảo

Khảo sát web ngày 22/10/2026 bằng năm nhóm từ khóa trong bảng, bổ sung “soạn công thức toán Macbook Word LaTeX” và “chuẩn hóa công thức macbook”. Kết quả chỉ phản ánh những trang tìm được trong lượt khảo sát; không có số liệu lượng tìm kiếm, CPC, độ khó hay dữ liệu Search Console. Không dùng ngày thu thập hoặc ngày cập nhật trên kết quả tìm kiếm để suy ra chất lượng sản phẩm.

| Nhóm | Quan sát | Quyết định biên tập |
| --- | --- | --- |
| Gõ MathType trên MacBook | Có hướng dẫn cài MathType chung lẫn thao tác dành cho Windows | Nêu ngay phạm vi TexCraft, phân biệt MathType của Wiris và đối tượng MathType; hướng dẫn cài manifest cho Word Mac |
| Soạn công thức toán MacBook | Có hướng dẫn Equation, LaTeX và Pages | Tập trung quy trình Word/TexCraft, cung cấp mã có thể sao chép, phân biệt ô công thức và LaTeX nằm trong văn bản |
| Chuẩn hóa MathType MacBook | Kết quả có công cụ chuẩn hóa tài liệu nhưng ít nội dung khớp chính xác cả thao tác và nền tảng trong lượt khảo sát | Viết quy trình font/cỡ chữ, chuyển định dạng, đọc báo cáo và đối chiếu; không suy ra từ khóa ít cạnh tranh |
| Trộn đề MacBook | Trang nhà cung cấp eBIB có nêu bản Mac và chức năng nhận công thức, xuất nhiều mã đề | Giải quyết nhu cầu bằng quy trình TexCraft có sẵn; kiểm tra đáp án, bản phát học sinh và Excel/QR, không khẳng định đây là công cụ duy nhất trên Mac |
| Chấm trắc nghiệm miễn phí | Có bài tổng hợp phần mềm và công cụ tạo bài online, dễ lẫn với đọc phiếu giấy | Nêu rõ đọc ô tô theo mẫu; cung cấp phiếu demo, 20 đáp án, điểm mong đợi và ảnh từng bước, tách cảnh báo nhận dạng khỏi kết quả tính điểm |

Trang kết quả dùng để khảo sát ý định, không dùng thay tài liệu kỹ thuật:

- [Trang eBIB của nhà cung cấp](https://store.thuvienhoclieu.vn/apps/software/download): thông tin sản phẩm trộn đề, có liệt kê bản Mac. Không kiểm thử hay khuyến nghị mua sản phẩm này.
- [Apple: thêm phương trình trong Pages trên Mac](https://support.apple.com/vi-vn/guide/pages/tanca5a4fbd9/15.3/mac/1.0): xác nhận nhu cầu soạn công thức trên Mac rộng hơn Word.
- [Microsoft: phương trình UnicodeMath và LaTeX](https://support.microsoft.com/vi-vn/word/linear-format-equations-using-unicodemath-and-latex-in-word): nguồn hướng dẫn công thức của Word; các mã mẫu trong bài vẫn dành cho TexCraft.

## Tình trạng ảnh sau khi tiếp tục

Đã đưa loạt ảnh chụp sẵn trong thư mục làm việc của Claude vào đúng bước hướng dẫn. Không tạo ảnh giao diện bằng AI. Giữ ảnh tại `word-addin/guide/` vì các tệp đã có ở đây và thư mục này được xuất bản nguyên trạng; tránh sao chép cùng ảnh sang `assets/images/`.

| Bài | Ảnh trong bài | Phạm vi |
| --- | --- | --- |
| Gõ MathType | 5 | Soạn LaTeX, chọn MathType, thông báo chèn, tùy chọn 12 pt, quét tài liệu |
| Soạn công thức | 7 | LaTeX, hệ/ma trận, trực quan, chuyển đổi, quét, bảng biến thiên, chuẩn hóa đề |
| Chuẩn hóa MathType | 7 | Quét, cỡ 12 pt, báo cáo, MathType → Word, quét lại, chuẩn hóa đề |
| Trộn đề | 5 | Phân tích, chuẩn hóa, bốn mã đề/Excel, QR, PowerPoint |
| Chấm trắc nghiệm | 9 | Hai ảnh mẫu phiếu/QR và bảy ảnh giao diện: cấu hình, đáp án, nạp phiếu, chấm xong, phiếu/camera, kiểm tra, xuất điểm |

Các ảnh TexCraft là ảnh chụp giao diện thật chạy ở chế độ thử trong trình duyệt với tài liệu mẫu, chưa phải ảnh chạy trong Word cho Mac. Thông báo chèn/chuyển trong môi trường này không chứng minh thao tác Office.js đã thành công trong Word thật. Bài đã ghi rõ môi trường chụp, không khẳng định đã kiểm thử tích hợp Word Mac.

Ảnh chấm bài dùng phiếu demo tạo sẵn; ảnh gốc để tải là `word-addin/guide/cham-phieu-demo.png`. Bộ đáp án trong bài cho 15/20 câu đúng (7,5 điểm), sai ở câu 3, 8, 12, 16, 19. Vùng SBD demo có tô nhiều ô để minh họa cảnh báo. Không đọc hoặc dùng dữ liệu trong `cham-thi/data/`.

Chú thích phân biệt đúng nguồn/đích và phạm vi trên ảnh với thao tác được hướng dẫn. Ảnh QR trộn đề còn cảnh báo đáp án đúng/sai chưa đủ; bài yêu cầu sửa và tạo lại trước khi chấm, giải thích X là bỏ qua câu/ý. Ảnh trộn đề đang bật kèm đáp án cuối đề; bài nhắc tắt khi tạo bản phát học sinh.

## Kiểm tra và giới hạn bàn giao

Chỉ thay nội dung Markdown, giữ nguyên mã chức năng Claude đang sửa. Kiểm tra bằng hàm `parsePost` của dự án trên đúng năm bài: metadata, dựng Markdown, các khối mã LaTeX, ảnh và liên kết nội bộ. Đối chiếu trực quan các ảnh chấm bài, cỡ MathType và cấu hình trộn đề được sử dụng để sửa chú thích. Đã chạy kiểm tra bằng Node gọi `parsePost`: 5 bài, 33 ảnh và 25 liên kết nội bộ đều hợp lệ; 6 khối mã LaTeX dựng được bằng KaTeX. Dùng chính `cham-thi/js/grading.js` xác nhận bộ đáp án trong bài cho 7,5/10 và đúng năm câu sai đã nêu. `git diff --check` không báo lỗi tại thời điểm kiểm tra. Không chạy build toàn site hoặc toàn bộ test vì không thay build/template/CSS, theo `AGENTS.md`.

Chưa xác nhận trực quan năm trang xuất bản ở desktop/mobile và theme sáng/tối trong trình duyệt. Chưa chạy Word Mac thật hoặc quét camera điện thoại thật. Nếu bổ sung ảnh sau, ưu tiên ảnh công thức đã chèn trong tài liệu Word Mac, chuyển LaTeX → Word đúng cấu hình và camera trên điện thoại với phiếu demo. Không dùng ảnh dựng để thay các bằng chứng này.
