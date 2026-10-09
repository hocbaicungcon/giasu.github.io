---
title: VietOCR – Phần mềm nhận dạng văn bản tiếng Việt
description: VietOCR là phần mềm nhận dạng văn bản tiếng Việt (Phần mềm OCR tiếng
  Việt, Phần mềm nhận dạng chữ viết tay tiếng Việt, Phần mềm quét chữ trên ảnh cho
  PC) từ
category: CNTT
type: Khám phá
date: '2024-10-02'
tags:
- Phần mềm
- OCR
- Tin học
- Công nghệ
---

[VietOCR](https://sourceforge.net/projects/vietocr/) là phần mềm nhận dạng văn bản tiếng Việt (Phần mềm OCR tiếng Việt, Phần mềm nhận dạng chữ viết tay tiếng Việt, Phần mềm quét chữ trên ảnh cho PC) từ các hình ảnh (bằng cách chụp màn hình hoặc các hình ảnh có chứa văn bản tiếng Việt). Nói cách khác, đây là phần mềm chuyển hình ảnh có chứa chữ thành văn bản và lưu dưới dạng file text (.txt).

## 1 Giới thiệu phần mềm VietOCR nhận dạng văn bản tiếng Việt

VietOCR là phần mềm mã nguồn mở (miễn phí) có các phiên bản cho Java và .NET executable, là một GUI frontend cho Tesseract OCR engine. Cả hai phiên bản đều có giao diện tương tự và có cùng khả năng nhận diện ký tự từ các loại dạng ảnh phổ thông. Chương trình còn có khả năng vận hành như một ứng dụng console, thi hành lệnh từ command line.

Batch processing cũng được hỗ trợ. Chương trình theo dõi một watch folder cho các tập tin ảnh mới, tự động xử lý chúng qua OCR engine, và xuất kết quả nhận dạng ra một output folder.

Language data cho Việt ngữ và Anh ngữ đã được đóng gói đi kèm sẵn với chương trình. Data cho các ngôn ngữ khác có thể hạ tải từ Tesseract website và cần đặt vào `tessdata` folder. Lưu ý rằng language data files cho Tesseract 2.0x và 3.0 có định dạng khác nhau và không hoán đổi cho nhau được, vì vậy hãy hạ tải files tương thích với phiên bản Tesseract bạn có ([2.0x – 3.02](https://sourceforge.net/projects/tesseract-ocr-alt/files/), [3.03](https://github.com/tesseract-ocr/tesseract/wiki/Data-Files), và [4.00](https://github.com/tesseract-ocr/tessdata)).

Lưu ý: Một số ngôn ngữ — như là Ả-Rập hoặc Ấn Độ — có *cube* components; chúng cũng cần được [downloaded](https://github.com/tesseract-ocr/tessdata) và copied vào `tessdata`.

## 2. Cài đặt phần mềm VietOCR

Phiên bản Java đòi hỏi [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 8 hoặc mới hơn ([hướng dẫn cài đặt](http://docs.oracle.com/javase/8/docs/technotes/guides/install/)).

Cho Linux, Tesseract và language data packages nằm trong Graphics (universe) repository. Chúng có thể được cài qua Synaptic hoặc từ lệnh sau:

`sudo apt-get install tesseract-ocr tesseract-ocr-vie`

Files sẽ được đặt trong `/usr/bin` và `/usr/share/tesseract-ocr/tessdata`, trong thứ tự đó.

Mặt khác, nếu Tesseract được xây dựng và cài từ [mã nguồn](https://github.com/tesseract-ocr), chúng sẽ được đặt trong `/usr/local/bin` và `/usr/local/share/tessdata`. Bạn cần chỉ định directory của Tesseract executable từ Settings menu của VietOCR. VietOCR được thiết kế để nhận biết các tập tin language data ở những địa điểm đó; tuy nhiên, trong trường hợp `tessdata` được để vào trong một directory khác với những directory đã đề cập, bạn sẽ cần đặt biến môi trường `TESSDATA_PREFIX` environment variable, ví dụ:

`export TESSDATA_PREFIX=/usr/local/share/`

(hoặc tương đương) trong `.profile` của bạn hoặc `setenv` để đặt biến môi trường. Hãy chú ý rằng đường dẫn tới directory phải kết với ký tự /.

Hỗ trợ tùy chọn cho thư viện [Tess4J](http://tess4j.sf.net/) được cung cấp. Xin lưu ý rằng bất cứ biệt lệ exception từ bên trong Tess4J sẽ làm ứng dụng crash.

Phiên bản .NET cần [Microsoft .NET Framework 4.8](https://dotnet.microsoft.com/download/dotnet-framework/net48). Nếu bạn gặp lỗi biệt lệ “*Exception has been thrown by the target of an invocation*” hoặc “* The program can’t start because VCRUNTIME140.dll is missing from your computer*“, xin hãy cài đặt [Microsoft Visual C++ 2015-2019 Redistributable Package](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads).

Hỗ trợ quét văn bản trên Windows được cung cấp qua Windows Image Acquisition Library v2.0, thư viện này đòi hỏi Windows XP Service Pack 1 (SP1) hoặc mới hơn; thư viện này trở thành thành phần tiêu chuẩn của Windows Vista và 7. Để cài đặt WIA Library trên Windows XP, copy file `wiaaut.dll` vào `System32` directory (thường đặt ở `C:\Windows\System32`) và chạy lệnh từ command line:

`regsvr32 C:\Windows\System32\wiaaut.dll`

Trên Linux, scanning đòi hỏi cài đặt các gói SANE packages:

`sudo apt-get install libsane sane sane-utils libsane-extras xsane`

Hỗ trợ cho PDF được khả thi qua [GPL Ghostscript](http://www.ghostscript.com/). Sau khi cài đặt thư viện, hãy bảo đảm shared library object (`gsdll32.dll` hoặc `libgs.so`) nằm trong search path bằng cách chỉnh biến môi trường phù hợp. Trên Windows, tiếp đuôi (append) đoạn sau vào giá trị của biến `Path` (truy cập được qua Control Panel > System > Advanced > Environment Variables) cho GS phiên bản 9.52:

`;C:\Program Files\gs\gs9.52\bin`

Để cài đặt GS trên Linux:

`sudo apt-get install ghostscript`

Để chỉnh đường dẫn:

`export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib`

nơi trong `/usr/local/lib`, `libgs.so` link tới `libgs.so.9.52` được đặt. Tuy nhiên, bước này có thể không cần bởi path có thể đã được chỉnh trong lúc cài đặt GS.

Tính năng Duyệt chính tả (spellcheck) có được qua Hunspell, mà các [dictionary](http://wiki.services.openoffice.org/wiki/Dictionaries) files trực thuộc (`.aff`, `.dic`) nên được đặt trong `dict` folder của VietOCR. `user.dic` là một file được mã hóa trong UTF-8 chứa một danh sách các từ riêng, một từ mỗi hàng.

Trên Linux, Hunspell và tự điển của nó có thể được cài đặt bởi Synaptic hoặc `apt`, như sau:

`sudo apt-get install hunspell hunspell-en-us`

## 3. Cách chuyển văn bản hình ảnh sang chữ dạng text

VietOCR là phần mềm chuyển hình ảnh thành văn bản tiếng Việt. Để sử dụng giao diện tiếng Việt, bạn chọn Setting – User interface language – Vietnamese (Tiếng Việt).

![phần mềm nhận dạng văn bản tiếng Việt, phần mềm OCR tiếng Việt](assets/images/vietocr-phan-mem-nhan-dang-van-ban-tieng-viet-Phan-mem-nhan-dang-van-ban-tieng-Viet.jpg)

- Các chữ trong hình ảnh dữ liệu **Vietnamese language data** trong phần mềm VietOCR được tạo cho các font Times New Roman, Arial, Verdana, và Courier New. Do đó, việc nhận dạng sẽ có kết quả cao hơn cho các ảnh có font glyphs tương tự. OCR ảnh có font glyph trông khác các font hỗ trợ thông thường sẽ đòi hỏi tập huấn Tesseract để tạo một bộ language data khác cụ thể cho những mặt chữ đó.

  Cập nhật: Thêm [language data](http://sourceforge.net/projects/vietocr/files/lang%20data%20for%20tesseract-ocr/) đã được tạo cho các kiểu font cũ Việt Nam, VNI và TCVN3 (ABC). Chúng có thể được tải xuống qua submenu *Tải dữ liệu ngôn ngữ*.

- Hình ảnh muốn được OCR cần quét ở độ phân giải từ 200 DPI (dot per inch) trở lên tới 400 trong trắng đen hoặc grayscale. Quét ảnh với độ phân giải cao hơn nữa chưa hẳn sẽ tăng sự chính xác của kết quả nhận dạng. Hiện tại, mức chính xác có thể lên trên 97% cho Tiếng Việt ([ảnh chuẩn](http://downloads.sourceforge.net/vietocr/vietsample.zip)), và phiên bản tới của Tesseract có thể nâng cao độ nhận dạng hơn nữa. Dầu vậy, độ chính xác thực thụ vẫn còn tùy thuộc rất lớn vào phẩm chất của ảnh quét.

- Thông số tiêu biểu cho quét ảnh là 300 DPI và 1 bpp (bit per pixel) trắng đen hoặc 8 bpp grayscale dạng không nén (uncompressed) TIFF hay PNG. PNG nhỏ gọn hơn những dạng ảnh khác mà vẫn giữ được chất lượng cao nhờ sử dụng thuật toán lossless data compression; TIFF có lợi điểm ở khả năng chứa nhiều trang ảnh (multi-page) trong một file.

- Chế độ *Screenshot Mode* cung cấp độ nhận dạng tốt hơn cho những hình ảnh có độ phân giải thấp, chẳng hạn như ảnh in màn hình, bằng cách rescaling chúng tới 300 DPI.

  Mẹo vặt: OCR trên các vùng khoanh chọn được định bởi rê chuột thường cho ra kết quả chính xác hơn.

- Ngoài thuật toán hậu xử lý xây trong chương trình, bạn có thể thêm cách thức thay thế từ ngữ đặc riêng của bạn qua một tập tin text UTF-8-encoded tab-delimited có tên `x.DangAmbigs.txt`, mà x là ISO639-3 language code. Cả hai cách thay thế text đơn giản và Regex đều được hỗ trợ.

- Vài công cụ gắn liền được cung cấp để nối nhiều file ảnh hoặc PDF vào một file đơn để thuận tiện cho các tác vụ OCR, hoặc tách một file PDF thành nhiều file nhỏ hơn nếu nó quá lớn, điều mà có thể gây ra biệt lệ cạn bộ nhớ. Chép ảnh (paste image) từ clipboard đã được hỗ trợ.

### Hậu xử lý

Các lỗi nhận diện ký tự Việt có thể phân làm ba loại. Nhiều lỗi thường bị bởi do lẫn lộn chữ hoa và chữ thường (upper and lower) — ví dụ: hOa, nhắC — có thể dễ dàng sửa chữa sử dụng các chương trình Unicode text editor. Lỗi do sự xử lý không chính xác, gây ra các lỗi như thiếu sót dấu, lầm với ký tự có hình dáng tương tự, v.v… — huu – hưu, mang – marg, h0a – hoa, la – 1a, uhìu – nhìn. Đa số các lỗi này cũng có thể dễ dàng sửa chữa dùng các phần mềm duyệt chính tả. Hàm Hậu xử lý của VietOCR có thể sửa được nhiều lỗi nêu trên.

Loại lỗi cuối cùng khó phát hiện hơn bởi chúng liên quan đến ngữ nghĩa, semantics, có nghĩa là những chữ đánh vần đúng (tức là mục từ có trong tự điển), nhưng sai nghĩa trong ngữ cảnh (context) — ví dụ: tinh – tình, vân – vấn. Những lỗi này cần phải có người đọc duyệt lại và sửa theo bản gốc trong hình.

Quy trình biên tập sau đây với sử dụng các chức năng được tích hợp sẵn được đề ý:

1. Gom dòng. Các hàng chữ (line) cần được gom lại theo từng đoạn (paragraph), bởi khi được OCR, mỗi hàng chữ trở thành đoạn 1-hàng tách riêng. Dùng tính năng *Nối dòng* trong menu *Định dạng*. Lưu ý rằng tác vụ này có thể không cần cho thi thơ.

2. Cũng trong menu *Định dạng*, bấm *Đổi ngữ cách* và chọn *Chữ hoa đầu câu* để sửa gần như tất cả các lỗi chữ hoa-thường. Hãy dò tìm và sửa các lỗi hoa-thường còn sót.

3. Sửa lỗi chính tả bằng công cụ *Dò chính tả*.

Qua các bước trên, hầu hết các lỗi thông thường sẽ được loại trừ. Những lỗi ngữ nghĩa semantic còn sót lại ít, nhưng đòi hỏi người duyệt đọc dò lại toàn bộ văn bản để được giống y như văn bản gốc quét. Nếu cần biên chỉnh nặng hơn, bạn có thể dùng các chương trình word processor hay text editor có đầy đủ tính năng — Word, Writer, Notepad, [VietPad](http://vietpad.sf.net/), v.v… — cho công đoạn đó.

### Hạn chế của phần mềm

Tesseract 2.0x không hỗ trợ dàn trang, cho nên chỉ có thể nhận diện văn bản có một cột text. Tesseract 3.0x đã tích hợp tính phân tích dàn trang, hỗ trợ nhận dạng các văn bản có nhiều cột.
