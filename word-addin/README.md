# TexCraft / GIASU.AI.VN – Word Add-in

> Tài liệu hướng dẫn kiến trúc, cẩm nang phát triển, hướng dẫn cài đặt và lộ trình nâng cấp ứng dụng Desktop (hỗ trợ bấm đúp sửa công thức MathType).

---

## 1. Tổng quan & Các tính năng chính

Add-in được xây dựng cho Microsoft Word (chạy trên Word Windows, Word macOS, Word Online và Word iPad) dựa trên nền tảng **Office.js Web Add-in** chuẩn của Microsoft. Dự án được phát triển và vận hành trực tiếp tại repository `giasu.github.io` (website chính thức: [giasu.ai.vn](https://giasu.ai.vn/word-addin/huong-dan.html)).

### Các chức năng chính hiện có

1. **Quét & Chuyển đổi công thức hai chiều (`tab-eq`)**:
   - MathType (OLE Object chứa nhị phân MTEF v2 - v5) $\rightarrow$ Word Equation (OMML).
   - Word Equation (OMML) / LaTeX $\rightarrow$ MathType (OLE Object) do `src/mtef-writer.js` và `src/ole-writer.js` xây dựng, chuẩn hóa theo mẫu `src/mathtype-template.js`.
   - Công thức dạng văn bản LaTeX (`$...$`, `$$...$$`, `\(...\)`, `\[...\]`) $\rightarrow$ Word Equation hoặc MathType.
   - Quét chọn lọc theo phạm vi (Đoạn đang chọn hoặc Toàn bộ tài liệu), có thanh tiến độ và nút khôi phục (backup).
   - Bộ giải mã thuần JavaScript: [`src/mtef.js`](./src/mtef.js), [`src/latex2omml.js`](./src/latex2omml.js), [`src/omml.js`](./src/omml.js).

2. **Trình soạn thảo & Sửa công thức trực quan (`tab-editor`)**:
   - Tự động nạp công thức đang chọn trong Word vào ô soạn thảo khi đặt con trỏ.
   - Xem trước công thức thời gian thực bằng KaTeX offline (`taskpane/katex/`).
   - Gợi ý mã lệnh thông minh (`taskpane/latex-autocomplete.js`): Gõ tắt tiếng Việt (`tichphan`, `vocuc`, `phan`...) hoặc `\fra...`, phím Tab nhảy qua các ô placeholder `{}`, tự đóng ngoặc, xóa cặp ngoặc rỗng.
   - Bảng ký tự Toán học trực quan 8 nhóm (`taskpane/editor-toolbar.js`): Cấu trúc, Giải tích, Hệ & ma trận, Phép toán, Tập hợp & logic, Hình học, Hy Lạp, Khoảng cách. 100% nút bấm được vẽ bằng SVG động (`src/mathrender.js`), co giãn responsive tốt ngay cả trên màn hình hẹp (< 300px).
   - Chèn kết quả vào Word dưới dạng **Công thức Word (OMML)** hoặc **MathType OLE Object**.

3. **Vẽ hình Toán học tương tác (`tab-figures`, `src/figures/`)**:
   - **Bảng biến thiên**: tự khảo sát từ hàm số, hoặc **tự vẽ** bằng cách nhập từng dòng x, y', y (hỗ trợ cột gián đoạn `trái|phải` và khoảng không xác định `//` được gạch chéo). Chữ trong bảng theo đúng cỡ chữ đang soạn.
   - **Kiểu chữ & cỡ chữ MathType** (`taskpane/mt-settings.js`): chọn Times New Roman / Palatino / Cambria (có chân) hoặc Arial (không chân), cỡ 10–14 pt hoặc theo văn bản xung quanh; có chế độ “Chuẩn hóa MathType” làm lại công thức hiện có.
   - **Đồ thị hàm số**: Đặt khoảng trục, ẩn/hiện lưới tọa độ, tiệm cận, điểm cực trị.
   - **Miền nghiệm hệ bất phương trình**: Gạch sọc hoặc tô màu miền nghiệm, nhãn đỉnh tự động tránh đè nhau.
   - **Hình học không gian & hình học phẳng chuẩn GDPT Việt Nam**: Tam giác, đường tròn, tứ giác, hình chóp (S.ABCD, S.ABC, chóp có cạnh vuông góc đáy), lăng trụ, hình hộp, hình lập phương, nón, trụ, cầu, hệ trục tọa độ $Oxyz$.
   - Xuất sang Word dưới dạng **Hình vẽ chỉnh sửa được** (DrawingML nhóm vector kết hợp hộp chữ công thức) hoặc ảnh PNG chất lượng cao.

4. **Tính toán đại số với SymPy (`tab-calc`, `src/sympy-bridge.js`)**:
   - Tích hợp SymPy chạy trên nền WebAssembly (Pyodide) trực tiếp trong trình duyệt, có cơ chế lưu cache offline 30 ngày qua Service Worker (`sw.js`).
   - Hỗ trợ rút gọn, khai triển, phân tích nhân tử, đạo hàm, nguyên hàm, tích phân, giới hạn, giải phương trình/hệ phương trình/bất phương trình, ma trận, số nguyên. Kết quả xuất trực tiếp vào Word.

5. **Chuẩn hóa & Trộn đề thi GDPT 2018 (`tab-exam`, `src/exam.js`)**:
   - Nhận diện đầy đủ 3 phần thi theo cấu trúc Bộ GD&ĐT:
     - **Phần I**: Trắc nghiệm nhiều phương án (A, B, C, D).
     - **Phần II**: Trắc nghiệm Đúng/Sai (các ý a, b, c, d).
     - **Phần III**: Trắc nghiệm trả lời ngắn (tự động đánh số lại câu `Câu 1.` đến `Câu 6.`).
   - Tự động nhận diện đáp án đúng qua định dạng (chữ đỏ, gạch chân, highlight vàng).
   - Đánh số lại câu hỏi theo từng phần hoặc liên tục toàn đề.
   - Căn chỉnh bố cục phương án (1 dòng, 2 dòng, 4 dòng).
   - Thuật toán trộn đề giữ nguyên các câu chung ngữ cảnh / dữ kiện và phương án cố định.
   - Lập bảng đáp án đa mã đề, xuất file Excel (`.xlsx`) theo 2 mẫu chuẩn: mẫu `GIASU.AI.VN` và mẫu `TEXCRAFT`.

6. **Xuất bài trình chiếu PowerPoint 16:9 tương tác Đúng/Sai (`src/pptx.js`)**:
   - Tạo file `.pptx` 16:9 widescreen thuần OpenXML từ trình duyệt, hoàn toàn offline.
   - Tạo kịch bản tương tác Đúng/Sai với các slide phản hồi và liên kết nội bộ `ppaction://hlinksldjump`.

7. **Tạo mã QR đáp án chấm thi (`src/answer-qr.js`)**:
   - Định dạng chuẩn tương thích 100% với hệ thống chấm thi [giasu.ai.vn/cham-thi](https://giasu.ai.vn/cham-thi).

---

## 2. Cấu trúc thư mục dự án

```text
word-addin/
├── manifest.xml           # Khai báo Add-in triển khai Web chính thức (trỏ https://giasu.ai.vn/word-addin)
├── manifest.dev.xml       # Khai báo Add-in cho môi trường Dev cục bộ (trỏ https://localhost:3000)
├── huong-dan.html         # Trang web hướng dẫn giáo viên cài đặt và sử dụng Add-in
├── package.json           # Scripts chạy dev server, kiểm thử và sinh bảng mã
├── server.js              # Dev server HTTPS nội bộ hỗ trợ localhost:3000 và CORS
├── sw.js                  # Service Worker lưu trữ offline (caching trang, script, KaTeX, SymPy)
├── sw.template.js         # Bản mẫu sinh sw.js qua mã băm sha1
├── certs/                 # Chứng chỉ SSL tự ký cho localhost (localhost.crt, localhost.key)
├── fixtures/              # Tài liệu giả lập Word OOXML để chạy thử nghiệm ngoài Word
├── src/                   # Mã nguồn thuật toán và xử lý nghiệp vụ lõi (thuần JS)
│   ├── app-core.js        # Điều phối nghiệp vụ chuyển đổi công thức
│   ├── ooxml.js           # Xử lý gói Word OpenXML (document.xml, relationships, embeddings)
│   ├── mtef.js            # Giải mã nhị phân MTEF (MathType Equation Format v2 -> v5) sang LaTeX
│   ├── mtef-writer.js     # Chuyển đổi LaTeX -> dòng byte nhị phân MTEF v5
│   ├── ole-writer.js      # Đóng gói dữ liệu MTEF vào định dạng tệp OLE Compound Document
│   ├── mathtype-object.js # Tạo cấu trúc thẻ nhúng Word <w:object>
│   ├── mathtype-template.js # Dữ liệu mẫu MTEF header/font chuẩn
│   ├── latex2omml.js      # Bộ sinh OMML XML từ mã nguồn LaTeX
│   ├── omml.js            # Bộ trích xuất LaTeX từ OMML XML
│   ├── mathrender.js      # Bộ vẽ công thức toán và sinh SVG/PNG
│   ├── sympy-bridge.js    # Cầu nối gọi Pyodide/SymPy tính toán đại số
│   ├── exam.js            # Phân tích cú pháp đề thi, chuẩn hóa và thuật toán trộn đề
│   ├── pptx.js            # Bộ sinh bài trình chiếu PowerPoint tương tác Đúng/Sai
│   ├── xlsx.js            # Bộ tạo bảng tính Excel .xlsx thuần JS
│   ├── answer-qr.js       # Sinh mã QR đáp án cho hệ thống chấm thi
│   ├── word-io.js         # Lớp trừu tượng tương tác với Office.js API
│   └── figures/           # Bộ sinh hình vẽ toán học (BBT, hàm số, hình học, miền nghiệm)
├── taskpane/              # Giao diện người dùng Add-in (HTML, CSS, JS, Assets)
│   ├── taskpane.html      # Trang giao diện chính
│   ├── taskpane.css       # Style giao diện (hỗ trợ responsive pane hẹp)
│   ├── taskpane.js        # Logic điều khiển các tab giao diện
│   ├── editor-toolbar.js  # Bảng ký hiệu toán học 8 nhóm
│   ├── latex-autocomplete.js # Gợi ý gõ tắt LaTeX
│   ├── exam-ui.js         # Giao diện tab Chuẩn hóa & Trộn đề
│   ├── figures-ui.js      # Giao diện tab Hình vẽ
│   ├── calc-ui.js         # Giao diện tab Tính toán
│   ├── mock-word.js       # Giả lập môi trường Word API để test ngay trên trình duyệt web
│   ├── katex/             # Thư viện KaTeX offline phục vụ preview công thức
│   ├── vendor/            # Thư viện ngoài (jsQR, qrcode)
│   └── icon-*-v2-*.png    # Bộ biểu tượng Ribbon thanh công cụ Word chất lượng cao
├── tests/                 # Toàn bộ test suite kiểm thử tự động
│   ├── unit.mjs           # Kiểm thử đơn vị các hàm lõi
│   ├── parity.mjs         # Kiểm thử đối chiếu đối ứng 100% với Python core/mtef.py
│   ├── roundtrip.mjs      # Kiểm thử vòng tròn LaTeX -> OMML -> LaTeX và so khớp Python
│   ├── mtef_fidelity.mjs  # So sánh byte-level MathType sinh ra với MathType gốc
│   ├── exam.mjs           # Kiểm thử chuẩn hóa đề thi trên file .docx thực tế
│   ├── xlsx.mjs           # Kiểm thử sinh file Excel đáp án
│   └── answer_qr.mjs      # Kiểm thử tính hợp lệ của mã QR chấm thi
└── tools/                 # Các công cụ hỗ trợ phát triển và build
    ├── build-hosted.sh    # Script build bundle xuất bản web
    ├── build-sw.mjs       # Script quét file và sinh sw.js với mã hash
    ├── install-mac.sh     # Script nạp add-in nhanh cho macOS (Word Sideloading)
    ├── make-cert.sh       # Script tạo chứng chỉ SSL cho localhost
    └── gen_*.mjs / *.py   # Các script sinh bảng ký tự MTEF, từ điển LaTeX
```

---

## 3. Hướng dẫn Lập trình viên & Kiểm thử

### Chạy thử giao diện không cần Word
Add-in tích hợp sẵn `taskpane/mock-word.js` mô phỏng đầy đủ tài liệu Word từ `fixtures/sample-body.xml`:
```bash
cd word-addin
HTTP_ONLY=1 PORT=3100 node server.js
# Mở trình duyệt tại: http://localhost:3100/taskpane/taskpane.html
```

### Cài đặt và Debug trên Word for Mac (Sideloading)
1. Chạy script cài đặt tự động từ Terminal:
   ```bash
   cd word-addin
   sh tools/install-mac.sh
   ```
2. Script sẽ tự tạo chứng chỉ SSL `certs/localhost.crt`, tin cậy vào System Keychain, chép `manifest.dev.xml` vào thư mục `~/Library/Containers/com.microsoft.Word/Data/Documents/wef/` và khởi động server `https://localhost:3000`.
3. Mở Microsoft Word $\rightarrow$ **Chèn (Insert) $\rightarrow$ Tiện ích (Add-ins) $\rightarrow$ My Add-ins $\rightarrow$ Developer Add-ins** $\rightarrow$ chọn **TexCraft Công thức**.

### Cài đặt trên Word for Windows
1. Đặt `manifest.dev.xml` vào một thư mục cục bộ (ví dụ: `C:\WordAddins`).
2. Chia sẻ thư mục (Properties $\rightarrow$ Sharing $\rightarrow$ Share).
3. Trong Word: **File $\rightarrow$ Options $\rightarrow$ Trust Center $\rightarrow$ Trust Center Settings $\rightarrow$ Trusted Add-in Catalogs**.
4. Dán đường dẫn thư mục chia sẻ mạng $\rightarrow$ tích **Show in Menu** $\rightarrow$ Khởi động lại Word.

### Chạy kiểm thử tự động (Test Suite)
Dự án có bộ kiểm thử tự động toàn diện đảm bảo không có sai số trong quá trình xử lý công thức toán:
```bash
# 1. Chạy unit test đơn vị:
node word-addin/tests/unit.mjs

# 2. Chạy kiểm thử vòng LaTeX -> OMML -> LaTeX:
node word-addin/tests/roundtrip.mjs

# 3. Chạy đối chiếu parity với dữ liệu corpus thực tế (hơn 63.000 công thức MathType):
node word-addin/tests/parity.mjs

# 4. Kiểm thử sinh Excel và QR:
node word-addin/tests/xlsx.mjs /tmp/texcraft-xlsx
node word-addin/tests/answer_qr.mjs

# 5. Chạy toàn bộ test suite của repository giasu.github.io:
npm test
```

---

## 4. Cẩm nang phát triển chuyên sâu: Ứng dụng Desktop hỗ trợ Bấm Đúp (Double-Click) sửa công thức MathType

### Vấn đề kỹ thuật với Web Add-in (Office.js)
Trong phiên bản Web Add-in hiện tại, người dùng phải **chọn công thức trên văn bản**, sau đó bấm nút **"Lấy từ Word"** trên Taskpane hoặc Ribbon để chỉnh sửa.
**Không thể bắt sự kiện "Bấm đúp chuột trực tiếp vào công thức trên trang Word để bật modal sửa" chỉ bằng Web Add-in**, bởi vì:
1. Web Add-in chạy trong WebView sandbox cách ly hoàn toàn với canvas hiển thị của Word.
2. Microsoft Office.js **không cung cấp sự kiện chuột (Mouse Double-Click)** trên văn bản cho Web Add-in.
3. Đối tượng OLE MathType được Word coi là một OLE Object nhúng hệ thống; Word tự động định tuyến sự kiện double-click ra hệ điều hành để gọi OLE Server đã đăng ký.

---

### Các phương án kiến trúc ứng dụng Desktop

```mermaid
flowchart TD
    User([Người dùng bấm đúp vào công thức MathType trong Word]) --> Choice{Kiến trúc ứng dụng Desktop}

    Choice -->|Hướng 1: Chuẩn OLE| OLE[Ứng dụng đóng vai trò OLE Server]
    OLE --> OLE_Call[Word tra Registry ProgID Equation.3 / Equation.DSMT4]
    OLE_Call --> OLE_Pop[Mở cửa sổ Desktop App chứa KaTeX/LaTeX Editor]
    OLE_Pop --> OLE_Save[Đóng cửa sổ -> Gọi IOleClientSite::SaveObject]
    OLE_Save --> Word_Update1[Word tự động cập nhật công thức nhúng]

    Choice -->|Hướng 2: Native Plugin| VSTO[VSTO / COM Add-in chạy trong Word]
    VSTO --> VSTO_Hook[Hook sự kiện chuột WM_LBUTTONDBLCLK / WindowBeforeDoubleClick]
    VSTO_Hook --> VSTO_Check{Vị trí click có phải OLE MathType / OMML?}
    VSTO_Check -->|Đúng| VSTO_Pop[Mở cửa sổ WPF/WinForms soạn thảo]
    VSTO_Pop --> VSTO_Write[Ghi đè InlineShape mới vào Word Range]
    VSTO_Write --> Word_Update2[Cập nhật trực tiếp vào văn bản]

    Choice -->|Hướng 3: Độc lập| Canvas[Ứng dụng soạn thảo văn bản riêng như CHITUP Office]
    Canvas --> Canvas_Click[App tự render văn bản trên Canvas/DOM]
    Canvas_Click --> Canvas_Pop[Bắt sự kiện dblclick native trên phần tử]
```

---

### Chi tiết kỹ thuật từng hướng tiếp cận

#### Hướng 1: Ứng dụng Desktop đóng vai trò OLE Server (Thay thế MathType hoàn toàn)
*Khuyên dùng nếu muốn trải nghiệm 100% giống MathType bản gốc mà người dùng không cần cài đặt phần mềm MathType.*

1. **Cơ chế**:
   - Khi cài đặt ứng dụng desktop (C++, C#, Electron hoặc Tauri có native module), ứng dụng đăng ký vào Windows Registry:
     ```text
     HKEY_CLASSES_ROOT\Equation.3\protocol\StdFileEditing\server = "C:\Path\To\YourApp.exe"
     HKEY_CLASSES_ROOT\Equation.DSMT4\protocol\StdFileEditing\server = "C:\Path\To\YourApp.exe"
     HKEY_CLASSES_ROOT\CLSID\{0002CE02-0000-0000-C000-000000000046}\LocalServer32 = "C:\Path\To\YourApp.exe"
     ```
2. **Luồng dữ liệu**:
   - Khi người dùng bấm đúp vào công thức MathType trong Word: Word gửi OLE verb `OLEIVERB_PRIMARY` đến `YourApp.exe`.
   - Nhận luồng dữ liệu nhị phân chứa stream OLE (header OLE + block MTEF).
   - Tái sử dụng module [`src/mtef.js`](./src/mtef.js) của dự án để giải mã MTEF sang LaTeX.
   - Hiển thị giao diện người dùng (gõ LaTeX, xem trước KaTeX, bảng ký hiệu Toán).
   - Khi người dùng đóng cửa sổ hoặc nhấn `Ctrl+S`, đóng gói lại dữ liệu MTEF mới qua [`src/mtef-writer.js`](./src/mtef-writer.js) và ảnh preview (WMF/EMF), sau đó gọi `IOleClientSite::SaveObject()`.
   - Word tự động cập nhật công thức mới vào văn bản tức thì.

#### Hướng 2: Làm VSTO Add-in / COM Add-in cho Microsoft Word (Windows)
*Dành cho môi trường Windows, tích hợp trực tiếp vào tiến trình `WINWORD.EXE`.*

1. **Công nghệ**: C# (.NET 8 hoặc .NET Framework 4.8), VSTO (Visual Studio Tools for Office).
2. **Cách bắt sự kiện**:
   ```csharp
   void Application_WindowBeforeDoubleClick(Word.Selection Sel, ref bool Cancel)
   {
       if (Sel.InlineShapes.Count == 1)
       {
           var shape = Sel.InlineShapes[1];
           if (shape.Type == Word.WdInlineShapeType.wdInlineShapeEmbeddedOLEObject &&
               shape.OLEFormat.ProgID.StartsWith("Equation"))
           {
               Cancel = true; // Ngăn Word mở phần mềm MathType mặc định
               OpenCustomEquationEditor(shape);
           }
       }
   }
   ```
   - Trích xuất dữ liệu OLE từ shape, chuyển sang LaTeX, hiển thị Form WPF đẹp mắt.
   - Khi chỉnh sửa xong, chèn lại đối tượng OMML hoặc OLE shape vào `Sel.Range`.

#### Hướng 3: Ứng dụng Desktop hoàn chỉnh độc lập
- Viết ứng dụng desktop riêng (Electron / Tauri / Flutter Desktop / Qt C++).
- Tự parse tệp `.docx`, giải nén các phần OOXML, render trang trên Canvas hoặc web engine.
- Toàn quyền bắt sự kiện `ondblclick` trên các node công thức để hiển thị modal chỉnh sửa và ghi lại vào tệp `.docx`.

---

## 5. Tài nguyên có thể tái sử dụng ngay từ mã nguồn hiện tại

Khi phát triển ứng dụng Desktop hoặc các module mở rộng, người tiếp theo có thể tái sử dụng ngay 100% các thuật toán cốt lõi sau:

| Tệp nguồn | Chức năng có thể tái sử dụng |
| :--- | :--- |
| [`src/mtef.js`](./src/mtef.js) | Giải mã nhị phân MTEF (MathType Equation Format v2 đến v5) sang LaTeX |
| [`src/mtef-writer.js`](./src/mtef-writer.js) | Chuyển đổi mã nguồn LaTeX sang luồng nhị phân MTEF v5 |
| [`src/ole-writer.js`](./src/ole-writer.js) | Đóng gói tệp OLE Compound Document chứa Equation Native stream |
| [`src/mathtype-object.js`](./src/mathtype-object.js) | Xây dựng thẻ OpenXML `<w:object>` hoàn chỉnh nhúng vào Word |
| [`src/latex2omml.js`](./src/latex2omml.js) | Chuyển đổi mã nguồn LaTeX sang OMML XML để nhúng vào Word |
| [`src/omml.js`](./src/omml.js) | Trích xuất công thức LaTeX từ thẻ OMML `<m:oMath>` |
| [`src/ooxml.js`](./src/ooxml.js) | Quét gói docx OOXML, tìm và thay thế OLE MathType, OMML, LaTeX |
| [`src/exam.js`](./src/exam.js) | Nhận dạng cấu trúc đề thi, chuẩn hóa câu hỏi, thuật toán trộn đề thông minh |
| [`src/pptx.js`](./src/pptx.js) | Bộ sinh trình chiếu PowerPoint 16:9 tương tác Đúng/Sai thuần OpenXML |
| [`src/xlsx.js`](./src/xlsx.js) | Bộ tạo file bảng tính Excel `.xlsx` thuần JS |
| [`src/figures/`](./src/figures/) | Toàn bộ engine sinh hình vẽ bảng biến thiên, hàm số, hình không gian và phẳng |
| [`src/sympy-bridge.js`](./src/sympy-bridge.js) | Bộ điều khiển tính toán đại số bằng SymPy/Pyodide |
