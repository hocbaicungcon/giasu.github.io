---
title: 'Toán 8 Bài 18: Thu thập và phân loại dữ liệu'
description: 'Làm chủ Thu thập và phân loại dữ liệu Toán 8 Bài 18: Phương pháp thu thập trực tiếp và gián tiếp, phân biệt dữ liệu định tính và định lượng (rời rạc, liên tục), kiểm tra tính hợp lý của dữ liệu, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Thống kê 8
  - Thu thập dữ liệu
  - Phân loại dữ liệu
  - Dữ liệu định tính
  - Dữ liệu định lượng
  - Kết nối tri thức
grade: 8
---

# Bài 18. Thu thập và phân loại dữ liệu

Chúng ta đang sống trong kỷ nguyên bùng nổ thông tin — nơi mà **Dữ liệu (Data)** được ví như "nguồn dầu mỏ mới" của thế kỷ 21. Từ cách thuật toán YouTube đề xuất video yêu thích, dự báo thời tiết cảnh báo bão sớm, đến quy trình thử nghiệm vắc-xin cứu sống hàng triệu người — tất cả các công nghệ đột phá của nhân loại đều bắt đầu từ bước chân đầu tiên: **Thu thập và phân loại dữ liệu**.

Tuy nhiên, "Rác vào thì rác ra" (Garbage In, Garbage Out) là quy tắc bất biến của khoa học dữ liệu: Nếu dữ liệu thu thập bị sai lệch, thiếu khách quan hoặc không hợp lý, mọi tính toán và biểu đồ phía sau đều trở nên vô nghĩa, thậm chí dẫn tới những quyết định sai lầm tai hại.

Chương 5 mở ra bức tranh thực tiễn sinh động của **Thống kê hiện đại**, và bài học mở đầu sẽ giúp các em:
1. Nắm vững hai phương pháp thu thập dữ liệu: **Trực tiếp** và **Gián tiếp**.
2. Phân loại chuẩn xác dữ liệu thành **Dữ liệu định lượng** (số liệu rời rạc, số liệu liên tục) và **Dữ liệu định tính** (có thể sắp thứ tự hoặc không thể sắp thứ tự).
3. Rèn luyện con mắt sắc bén để **phát hiện dữ liệu không hợp lý** trong các bảng thống kê và báo cáo truyền thông.
4. Đánh giá **tính đại diện** của mẫu khảo sát để đưa ra các nhận định khách quan, công bằng.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ PHÂN LOẠI DỮ LIỆU THỐNG KÊ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương pháp thu thập dữ liệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Trực tiếp:</strong> Tự thực hiện quan sát, đếm, đo đạc, làm thí nghiệm, phát phiếu hỏi hoặc phỏng vấn.<br>• <strong>Gián tiếp:</strong> Thu thập từ nguồn có sẵn như sách báo, truyền hình, niên giám thống kê, cơ sở dữ liệu Internet.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Dữ liệu định lượng (Số liệu)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Số liệu rời rạc:</strong> Thường là số đếm, nhận các giá trị nguyên riêng biệt (ví dụ: số học sinh, số bàn thắng, số ngày mưa).<br>• <strong>Số liệu liên tục:</strong> Thu được qua đo lường, nhận mọi giá trị thực trong một khoảng (chiều cao, cân nặng, nhiệt độ, thời gian chạy).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dữ liệu định tính (Không là số)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Có thể sắp thứ tự:</strong> Thể hiện thứ bậc, cấp độ (Học lực: Tốt, Khá, Đạt; Mức độ hài lòng: Rất thích, Thích, Không thích).<br>• <strong>Không thể sắp thứ tự:</strong> Phản ánh danh mục phân loại thuần túy (Màu sắc yêu thích, Nơi sinh, Giới tính, Tên môn thể thao).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">4. Tính hợp lí & Tính đại diện</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Hợp lí:</strong> Đúng định dạng, nằm trong khoảng cho phép, tổng các thành phần bằng $100\%$.<br>• <strong>Đại diện:</strong> Mẫu khảo sát phải đủ lớn và được chọn ngẫu nhiên, không thiên vị hay cục bộ.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phương pháp:** Để biết điểm thi môn Toán của học sinh lớp 8A trong kỳ thi giữa kì vừa qua, giáo viên chủ nhiệm xem sổ điểm điện tử của trường. Đây là phương pháp thu thập dữ liệu trực tiếp hay gián tiếp?
2. **Nhận dạng:** Dãy dữ liệu: $38^\circ\text{C}; 36,5^\circ\text{C}; 37,2^\circ\text{C}; 39^\circ\text{C}$ (thân nhiệt học sinh) là dữ liệu định tính hay dữ liệu định lượng?
3. **Phân loại sâu:** Chiều cao của 5 bạn học sinh: $155\text{ cm}; 162\text{ cm}; 158,5\text{ cm}; 170\text{ cm}; 164,2\text{ cm}$ là số liệu rời rạc hay số liệu liên tục?
4. **Định tính:** Dãy dữ liệu về xếp loại học tập: "Xuất sắc, Tốt, Khá, Chưa đạt" có thể sắp xếp thứ tự được không?
5. **Bẫy hợp lí:** Bạn An ghi chép điểm kiểm tra Toán của 4 bạn trong tổ là: $8; 9; 12; 7$. Dữ liệu nào là không hợp lý? Vì sao?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Đây là thu thập **gián tiếp** (lấy từ cơ sở dữ liệu lưu sẵn).
> 2. Đây là **dữ liệu định lượng** (các giá trị được biểu thị bằng số).
> 3. Đây là **số liệu liên tục** (thu được qua dụng cụ đo lường thước dây).
> 4. **Có!** Vì các mức xếp loại thể hiện cấp bậc từ cao xuống thấp rõ ràng.
> 5. Giá trị **$12$** là không hợp lý vì thang điểm chuẩn bài kiểm tra chỉ từ $0$ đến $10$.

---

## I. Lý thuyết trọng tâm & Bản chất thống kê

### 1. Các phương pháp thu thập dữ liệu

Thu thập dữ liệu là quá trình ghi chép, thu thập thông tin về một vấn đề quan tâm từ một đối tượng hoặc một nhóm đối tượng. Có hai con đường chính:

- **Thu thập trực tiếp:**
  - Người nghiên cứu tự mình tiến hành các hoạt động để lấy dữ liệu gốc.
  - *Các hình thức phổ biến:* Quan sát thực tế (đếm xe cộ qua ngã tư), tiến hành thí nghiệm (đo nhiệt độ nước sôi), phỏng vấn trực tiếp, phát phiếu điều tra khảo sát (Google Forms).
  - *Ưu điểm:* Dữ liệu cập nhật mới nhất, đúng mục tiêu nghiên cứu.
  - *Nhược điểm:* Tốn kém thời gian, công sức và chi phí.

- **Thu thập gián tiếp:**
  - Người nghiên cứu thu thập dữ liệu đã được công bố, xử lý và lưu trữ bởi các cơ quan, cá nhân khác.
  - *Các nguồn thông tin:* Báo chí, truyền hình, cổng thông tin Tổng cục Thống kê, niên giám thống kê của Bộ Giáo dục, sách giáo khoa, Internet.
  - *Ưu điểm:* Tiết kiệm thời gian, dễ dàng lấy được dữ liệu lịch sử nhiều năm.
  - *Nhược điểm:* Cần kiểm tra độ tin cậy và tính xác thực của nguồn trích dẫn.

---

### 2. Phân loại dữ liệu thống kê

Dữ liệu thu thập được bao gồm hai nhóm lớn:

#### A. Dữ liệu định lượng (Số liệu - Quantitative Data)
Là dữ liệu biểu thị bằng các con số thực hiện được các phép toán số học (cộng, trừ, tính trung bình). Dữ liệu định lượng chia thành 2 loại:
1. **Số liệu rời rạc:**
   - Là những số liệu chỉ nhận các giá trị riêng biệt, hữu hạn (thường là số tự nhiên thu được từ hoạt động **đếm**).
   - *Ví dụ:* Số học sinh trong một lớp ($35, 40$), số bàn thắng trong trận bóng đá ($0, 1, 2$), số vụ tai nạn giao thông trong một tuần.
2. **Số liệu liên tục:**
   - Là những số liệu có thể nhận mọi giá trị thực trong một khoảng xác định (thường thu được từ hoạt động **đo lường** bằng các dụng cụ đo).
   - *Ví dụ:* Chiều cao học sinh ($1,58\text{ m}$), khối lượng cơ thể ($48,5\text{ kg}$), nhiệt độ ngoài trời ($32,4^\circ\text{C}$), thời gian chạy $100\text{ m}$ ($13,42\text{ giây}$).

#### B. Dữ liệu định tính (Không là số - Qualitative Data)
Là dữ liệu phản ánh thuộc tính, đặc điểm, phẩm chất của đối tượng (thường biểu thị bằng từ ngữ hoặc chữ viết). Dữ liệu định tính chia thành 2 loại:
1. **Dữ liệu có thể sắp thứ tự:**
   - Các giá trị biểu thị cấp bậc, thang đo đánh giá rõ ràng.
   - *Ví dụ:* Kết quả xếp loại rèn luyện (Tốt, Khá, Đạt, Chưa đạt); Kích cỡ áo quần (S, M, L, XL, XXL); Mức độ ưa thích (Rất thích, Thích, Bình thường, Không thích).
2. **Dữ liệu không thể sắp thứ tự:**
   - Các giá trị thuần túy chỉ là tên gọi các nhóm phân loại, không có sự hơn kém về thứ bậc.
   - *Ví dụ:* Màu sắc ưa thích (Xanh, Đỏ, Vàng); Nơi sinh (Hà Nội, Đà Nẵng, TP. Hồ Chí Minh); Giới tính (Nam, Nữ); Thể loại phim (Hành động, Hài, Hoạt hình).

---

### 3. Kiểm tra tính hợp lý của dữ liệu

Sau khi thu thập, bước bắt buộc phải thực hiện là làm sạch dữ liệu (Data Cleaning) bằng cách kiểm tra các tiêu chí sau:

> [!IMPORTANT]
> **3 TIÊU CHÍ KIỂM TRA TÍNH HỢP LÝ CỦA DỮ LIỆU:**
> 1. **Đúng định dạng:** Số liệu phải là số, tên gọi phải là văn bản chữ (ví dụ: cột "Số con trong gia đình" mà ghi chữ "Nhiều" là sai định dạng).
> 2. **Nằm trong phạm vi cho phép:** Giá trị phải phù hợp với thực tế và quy định chuẩn (ví dụ: tuổi học sinh lớp 8 phải khoảng 13–14 tuổi, ghi 80 tuổi hoặc -2 tuổi là sai).
> 3. **Tính logic của tổng:**
>    - Tổng các tỉ lệ phần trăm thành phần trong biểu đồ quạt tròn phải đúng bằng $100\%$.
>    - Số lượng một nhóm thành phần không thể lớn hơn tổng số phần tử của toàn bộ mẫu khảo sát.

---

### 4. Tính đại diện của mẫu khảo sát

Một cuộc điều tra không thể khảo sát toàn bộ dân số cả nước mà chỉ khảo sát một **mẫu** (Sample). Để kết luận rút ra từ mẫu có giá trị phản ánh đúng toàn thể, mẫu khảo sát phải đảm bảo **tính đại diện**:
- **Quy mô mẫu đủ lớn:** Không thể khảo sát 2 người rồi kết luận xu hướng của 1000 người.
- **Tính ngẫu nhiên và đa dạng:** Các đối tượng được chọn phải bao phủ đầy đủ các thành phần (độ tuổi, giới tính, vùng miền, hoàn cảnh).
- *Ví dụ về mẫu thiếu tính đại diện:* Muốn điều tra môn thể thao học sinh toàn trường yêu thích nhất, nhưng bạn An chỉ khảo sát các bạn trong câu lạc bộ bóng đá của trường!

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Lựa chọn phương pháp thu thập dữ liệu phù hợp

**Phương pháp giải:**
- Nếu dữ liệu mang tính cá nhân, mới mẻ, chưa ai ghi chép $\to$ Dùng phương pháp **trực tiếp** (phát phiếu hỏi, quan sát, đo đạc).
- Nếu dữ liệu có tính quy mô quốc gia, lịch sử, đã được cơ quan nhà nước thống kê $\to$ Dùng phương pháp **gián tiếp** (tra cứu niên giám, tra cứu trang web chính thống).

---

#### Bài toán 1:
Em hãy đề xuất phương pháp thu thập dữ liệu (trực tiếp hay gián tiếp, và hình thức cụ thể) cho mỗi trường hợp sau:
a) Tìm hiểu về số lượng học sinh đeo kính cận trong khối 8 của trường em.
b) Tìm hiểu về sản lượng xuất khẩu gạo của Việt Nam qua các năm từ 2015 đến 2025.
c) Đánh giá mức độ hài lòng của phụ huynh đối với dịch vụ bán trú của trường học.
d) So sánh nhiệt độ trung bình các tháng trong năm qua tại thành phố Đà Nẵng.

**Lời giải:**

a) **Thu thập trực tiếp:** Phát phiếu khảo sát trực tiếp cho từng lớp khối 8 hoặc giáo viên y tế học đường đếm số học sinh đeo kính cận của từng lớp.
b) **Thu thập gián tiếp:** Tra cứu số liệu đã công bố trên website của Tổng cục Thống kê (GSO) hoặc Bộ Nông nghiệp và Phát triển nông thôn.
c) **Thu thập trực tiếp:** Gửi phiếu khảo sát lấy ý kiến phụ huynh (bằng giấy hoặc biểu mẫu trực tuyến Google Forms) trong buổi họp phụ huynh học sinh.
d) **Thu thập gián tiếp:** Tra cứu số liệu khí tượng thủy văn được lưu trữ tại Đài Khí tượng Thủy văn Quốc gia hoặc Niên giám thống kê thành phố Đà Nẵng.

---

### Dạng 2: Phân loại dữ liệu thống kê

**Phương pháp giải:**
1. Kiểm tra xem dữ liệu có phải là số không?
   - Là số $\to$ Dữ liệu định lượng: Có thể đếm được giá trị nguyên $\to$ Rời rạc; Thu được qua đo lường $\to$ Liên tục.
   - Không là số $\to$ Dữ liệu định tính: Có thể xếp thứ bậc cao/thấp $\to$ Sắp thứ tự; Thuần túy là tên gọi danh mục $\to$ Không thể sắp thứ tự.

---

#### Bài toán 2:
Hãy phân loại các dãy dữ liệu sau đây vào đúng nhóm: Định tính (có/không sắp thứ tự), Định lượng (rời rạc/liên tục):
a) Số lượng xe máy bán ra mỗi tháng của một đại lý: $120; 145; 98; 210$.
b) Thời gian (tính bằng phút) đi từ nhà đến trường của học sinh: $15; 22,5; 18,3; 30,5$.
c) Mức độ yêu thích đọc sách của học sinh: *Rất thích, Thích, Bình thường, Không thích*.
d) Tên các câu lạc bộ ngoại khóa trong trường: *Âm nhạc, Hội họa, Bóng rổ, Lập trình STEM*.

**Lời giải:**

a) Dãy dữ liệu về số lượng xe máy ($120; 145; 98; 210$) là **dữ liệu định lượng — số liệu rời rạc** (vì đây là kết quả của phép đếm số xe, nhận giá trị nguyên).
b) Dãy dữ liệu về thời gian ($15; 22,5; 18,3; 30,5$) là **dữ liệu định lượng — số liệu liên tục** (vì thời gian là đại lượng đo lường bằng đồng hồ, có thể nhận mọi giá trị số thực).
c) Dãy dữ liệu về mức độ yêu thích (*Rất thích, Thích, Bình thường, Không thích*) là **dữ liệu định tính — có thể sắp thứ tự** (thể hiện các thang bậc cảm xúc từ cao xuống thấp).
d) Dãy dữ liệu về tên các câu lạc bộ (*Âm nhạc, Hội họa, Bóng rổ, Lập trình STEM*) là **dữ liệu định tính — không thể sắp thứ tự** (chỉ là tên gọi phân loại môn sinh hoạt, không có môn nào có thứ bậc cao hay thấp hơn).

---

### Dạng 3: Kiểm tra và phát hiện dữ liệu không hợp lý

**Phương pháp giải:**
So sánh từng giá trị trong bảng dữ liệu với thực tế vật lý, định dạng văn bản và các quy định học đường.

---

#### Bài toán 3:
Một bạn lớp phó học tập lập danh sách ghi chép thông tin của một nhóm học sinh khối 8 để chuẩn bị hội thao trường như bảng sau:

| STT | Họ và tên | Giới tính | Chiều cao (cm) | Cân nặng (kg) | Điểm kiểm tra chạy 100m (thang điểm 10) |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 1 | Nguyễn Văn An | Nam | 165 | 52 | 8 |
| 2 | Trần Thị Bình | Nữ | 158 | 45 | 9 |
| 3 | Lê Hoàng Cường | Nam | 260 | 50 | 10 |
| 4 | Phạm Minh Dũng | Nam | 162 | Không biết | 7 |
| 5 | Hoàng Thùy Linh | Nữ | 155 | 44 | -2 |

Hãy chỉ ra các điểm không hợp lý trong bảng dữ liệu trên và giải thích vì sao.

**Lời giải:**

Các điểm không hợp lý gồm có:
1. **Chiều cao của bạn Lê Hoàng Cường ($260\text{ cm}$):** Không hợp lý về mặt sinh học thực tế, vì học sinh lớp 8 không thể có chiều cao $2,6\text{ m}$ (người cao nhất thế giới hiện nay cũng chỉ khoảng $2,51\text{ m}$). Đây có thể là lỗi đánh máy nhầm từ $160\text{ cm}$.
2. **Cân nặng của bạn Phạm Minh Dũng ("Không biết"):** Không đúng định dạng dữ liệu định lượng (cột cân nặng yêu cầu điền số đo bằng kilôgam, không được điền văn bản chữ thể hiện thiếu số liệu).
3. **Điểm kiểm tra chạy 100m của bạn Hoàng Thùy Linh ($-2$):** Không hợp lý vì thang điểm chuẩn bài kiểm tra chỉ dao động trong khoảng từ $0$ đến $10$, không thể nhận giá trị âm.

---

### Dạng 4: Đánh giá tính đại diện của mẫu khảo sát

**Phương pháp giải:**
Phân tích xem nhóm người được hỏi có bị thiên vị về sở thích, địa bàn hay điều kiện tiếp cận hay không.

---

#### Bài toán 4:
Để chuẩn bị cho kế hoạch mở lớp bồi dưỡng năng khiếu nghệ thuật, ban giám hiệu một trường THCS có $1200$ học sinh muốn tìm hiểu xem học sinh toàn trường thích học môn năng khiếu nào nhất trong 3 môn: *Đàn guitar, Hội họa, Nhảy hiện đại*.
Có 3 bạn đề xuất các phương án khảo sát như sau:
- **Bạn Hùng:** Phát phiếu hỏi cho $50$ bạn học sinh đang tham gia câu lạc bộ ghi-ta của trường.
- **Bạn Mai:** Ra cổng trường vào giờ tan học và phỏng vấn $10$ học sinh đầu tiên bước ra cổng.
- **Bạn Nam:** Chọn ngẫu nhiên từ danh sách học sinh của mỗi lớp khối 6, 7, 8, 9 ra $5$ bạn (tổng cộng $4$ khối $\times 6$ lớp $\times 5$ bạn $= 120$ học sinh) để phát phiếu hỏi kín.
Theo em, phương án của bạn nào đảm bảo **tính đại diện** tốt nhất cho toàn thể học sinh trong trường? Vì sao hai phương án còn lại chưa tốt?

**Lời giải:**

- **Phương án của bạn Nam là tốt nhất** vì:
  1. Cỡ mẫu đủ lớn ($120$ học sinh, chiếm $10\%$ tổng số học sinh toàn trường).
  2. Mẫu được chọn ngẫu nhiên đồng đều ở tất cả các khối lớp (từ lớp 6 đến lớp 9), đảm bảo tính công bằng và bao quát được sở thích của mọi lứa tuổi học sinh trong trường.
- **Phương án của bạn Hùng chưa tốt** vì mẫu khảo sát bị **thiên vị nghiêm trọng**: Chỉ hỏi các bạn trong câu lạc bộ ghi-ta thì chắc chắn kết quả trả lời môn *Đàn guitar* sẽ áp đảo tuyệt đối, không phản ánh đúng ý kiến của các học sinh khác.
- **Phương án của bạn Mai chưa tốt** vì cỡ mẫu quá nhỏ (chỉ có $10$ học sinh trên tổng số $1200$ học sinh) và $10$ bạn ra cổng đầu tiên có thể là một nhóm bạn thân cùng sở thích, không mang tính ngẫu nhiên đại diện.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Thuật toán phân loại dữ liệu người dùng của TikTok & YouTube
Mỗi thao tác của em trên mạng xã hội đều là một điểm dữ liệu (Data point):
- Thời gian em dừng lại xem một video ($3,5\text{ giây}$) là **số liệu liên tục**.
- Số lượt em nhấn nút thả tim, bình luận ($12$ lượt) là **số liệu rời rạc**.
- Thể loại video em xem (Hài kịch, Nhạc Rap, Khoa học) là **dữ liệu định tính không sắp thứ tự**.
Máy chủ AI tự động thu thập và phân loại hàng triệu dữ liệu này theo thời gian thực để "vẽ" nên chân dung sở thích của em, từ đó đề xuất đúng những nội dung khiến em thích thú nhất.

### 2. Thăm dò dư luận xã hội & Dự báo bầu cử
Trước mỗi cuộc bầu cử Tổng thống, các viện nghiên cứu (như Gallup) dự đoán chính xác ứng cử viên chiến thắng với sai số chỉ dưới $2\%$:
- Họ không thể phỏng vấn toàn bộ $200$ triệu cử tri. Thay vào đó, họ chỉ phỏng vấn một mẫu khoảng $1500 - 2000$ người.
- Bí quyết sống còn là **tính đại diện ngẫu nhiên phân tầng**: Mẫu khảo sát phải có tỉ lệ chính xác về độ tuổi, giới tính, mức thu nhập và nghề nghiệp tương đồng hoàn hảo với cơ cấu dân số toàn quốc.

### 3. Y tế cộng đồng & Thử nghiệm lâm sàng vắc-xin
Khi sản xuất một loại thuốc mới hoặc vắc-xin phòng bệnh:
- Các nhà dịch tễ học phải thu thập dữ liệu định lượng: Nồng độ kháng thể trong máu ($\text{UI/ml}$), huyết áp, nhịp tim.
- Dữ liệu định tính có sắp thứ tự: Mức độ tác dụng phụ (*Không đau, Đau nhẹ, Đau vừa, Rất đau*).
Nếu mẫu thử nghiệm chỉ khảo sát trên thanh niên khỏe mạnh mà bỏ qua người cao tuổi và trẻ em (thiếu tính đại diện), vắc-xin có thể gây ra những rủi ro khôn lường khi tiêm đại trà!

### 4. Thử nghiệm A/B Testing trong kinh doanh thương mại điện tử
Các sàn thương mại điện tử (Shopee, Tiki, Amazon) luôn liên tục thử nghiệm:
- Họ tạo ra hai giao diện nút mua hàng: Giao diện A (nút màu Cam) và Giao diện B (nút màu Xanh).
- Thu thập dữ liệu gián tiếp tự động: Tỉ lệ phần trăm khách hàng bấm nút mua hàng trên từng phiên bản.
Phân tích số liệu thực nghiệm giúp doanh nghiệp tăng doanh thu hàng triệu USD chỉ bằng một thay đổi màu sắc đơn giản!

### 5. Chuẩn bị dữ liệu cho Trí tuệ nhân tạo (Data Labeling for AI)
Trước khi xe ô tô tự lái có thể tự chạy trên đường:
- Hàng triệu bức ảnh chụp đường phố phải được con người dán nhãn phân loại (Data Annotation): Biển báo tốc độ, người đi bộ, làn đường, đèn đỏ.
- Dữ liệu sạch, phân loại chính xác $100\%$ là yếu tố quyết định giúp hệ thống lái tự động nhận diện chướng ngại vật chuẩn xác, không gây tai nạn.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Để biết số bàn thắng của một cầu thủ trong một giải đấu bóng đá đã kết thúc, phương pháp thu thập dữ liệu nào sau đây là thuận tiện và chính xác nhất?",
  "options": [
    "Đến tận sân vận động xem lại tất cả các trận đấu",
    "Phỏng vấn trực tiếp tất cả các thủ môn tham gia giải đấu",
    "Tra cứu trên trang web chính thức của ban tổ chức giải đấu",
    "Phát phiếu hỏi cho khán giả xem bóng đá"
  ],
  "answer": 2,
  "explanation": "Tra cứu trên trang web chính thức của ban tổ chức là phương pháp thu thập gián tiếp nhanh chóng, tiết kiệm và đảm bảo tính chính xác cao nhất."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Dãy dữ liệu nào sau đây là dữ liệu định lượng (số liệu)?",
  "options": [
    "Tên các môn học: Toán, Ngữ văn, Tiếng Anh",
    "Màu mắt của học sinh: Đen, Nâu, Xanh",
    "Nhiệt độ cơ thể đo được: 36.5°C; 37°C; 38.2°C",
    "Xếp loại rèn luyện: Tốt, Khá, Đạt"
  ],
  "answer": 2,
  "explanation": "Nhiệt độ cơ thể được biểu diễn bằng các con số (36.5; 37; 38.2) nên là dữ liệu định lượng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Dãy dữ liệu nào sau đây là số liệu rời rạc?",
  "options": [
    "Chiều cao của học sinh trong lớp: 152 cm, 160.5 cm, 158 cm",
    "Số học sinh vắng mặt mỗi ngày của một lớp: 0, 1, 2, 0, 3",
    "Thời gian bơi 50m của vận động viên: 25.4 giây, 26.1 giây",
    "Cân nặng của các bao gạo: 50.2 kg, 49.8 kg, 50.5 kg"
  ],
  "answer": 1,
  "explanation": "Số học sinh vắng mặt là kết quả của phép đếm, chỉ nhận các giá trị nguyên riêng biệt (0, 1, 2, 3...) nên là số liệu rời rạc."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Dãy dữ liệu nào sau đây là dữ liệu định tính có thể sắp thứ tự?",
  "options": [
    "Giới tính học sinh: Nam, Nữ",
    "Nơi sinh của học sinh: Hà Nội, Hải Phòng, Huế",
    "Mức độ hài lòng của khách hàng: Rất hài lòng, Hài lòng, Không hài lòng",
    "Biển số xe máy: 29, 30, 14, 43"
  ],
  "answer": 2,
  "explanation": "Mức độ hài lòng thể hiện các thang bậc đánh giá từ cao xuống thấp rõ ràng nên là dữ liệu định tính có thể sắp thứ tự."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong một cuộc khảo sát về số giờ ngủ mỗi đêm của 5 bạn học sinh, ghi nhận được dãy số liệu: 7 giờ; 8 giờ; 25 giờ; 6.5 giờ; 7.5 giờ. Số liệu nào là không hợp lý?",
  "options": [
    "7 giờ",
    "6.5 giờ",
    "25 giờ",
    "8 giờ"
  ],
  "answer": 2,
  "explanation": "Một ngày đêm chỉ có tối đa 24 giờ, do đó một người không thể ngủ 25 giờ trong một đêm. Đây là số liệu hoàn toàn không hợp lý."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Để khảo sát thời gian sử dụng điện thoại thông minh trung bình mỗi ngày của học sinh khối 8, cách chọn mẫu nào sau đây đảm bảo tính đại diện tốt nhất?",
  "options": [
    "Chỉ chọn các bạn học sinh trong câu lạc bộ chơi game online",
    "Chọn ngẫu nhiên 30 học sinh từ danh sách toàn bộ khối 8",
    "Chỉ chọn 10 bạn học sinh giỏi nhất khối 8",
    "Chỉ chọn các bạn học sinh nam khối 8"
  ],
  "answer": 1,
  "explanation": "Chọn ngẫu nhiên 30 học sinh từ danh sách toàn thể khối 8 đảm bảo tính ngẫu nhiên, đa dạng và không thiên vị đối tượng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "Số liệu liên tục thường thu được từ phép đếm.",
    "Dữ liệu định tính luôn luôn không thể sắp xếp thứ tự.",
    "Dữ liệu định lượng là dữ liệu biểu thị bằng số và có thể thực hiện các phép toán tính toán.",
    "Thu thập dữ liệu trực tiếp luôn nhanh hơn và rẻ hơn thu thập gián tiếp."
  ],
  "answer": 2,
  "explanation": "Dữ liệu định lượng là các con số phản ánh số lượng, kích thước và có thể cộng, trừ, tính trung bình."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một biểu đồ hình quạt tròn thể hiện tỉ lệ phần trăm phương tiện đến trường của học sinh gồm: Xe đạp (45%), Đi bộ (30%), Xe buýt (35%). Dữ liệu trên có hợp lý không?",
  "options": [
    "Hợp lý vì tất cả đều là số dương",
    "Không hợp lý vì tổng phần trăm bằng 110% (vượt quá 100%)",
    "Hợp lý vì tỉ lệ xe đạp lớn nhất",
    "Chưa thể xác định"
  ],
  "answer": 1,
  "explanation": "Trong biểu đồ hình quạt tròn, tổng tỉ lệ phần trăm của các thành phần bắt buộc phải bằng đúng 100%. Tổng ở đây là 45% + 30% + 35% = 110% nên dữ liệu không hợp lý."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Bác sĩ đo nồng độ cồn trong hơi thở của tài xế bằng máy thổi chuyên dụng. Đây là phương pháp thu thập dữ liệu:",
  "options": [
    "Gián tiếp qua phỏng vấn",
    "Trực tiếp bằng phép đo lường",
    "Gián tiếp qua niên giám thống kê",
    "Trực tiếp qua phát phiếu hỏi"
  ],
  "answer": 1,
  "explanation": "Bác sĩ tự mình dùng thiết bị đo đạc lấy số liệu thực tế tại chỗ nên là thu thập trực tiếp bằng phép đo lường."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Dữ liệu về kích cỡ giày của khách hàng trong một cửa hàng giày dép (size 36, 37, 38, 39, 40, 41, 42) thuộc loại dữ liệu nào?",
  "options": [
    "Số liệu liên tục",
    "Dữ liệu định tính không sắp thứ tự",
    "Dữ liệu định lượng rời rạc (hoặc định tính có thứ tự theo size chuẩn)",
    "Dữ liệu không xác định"
  ],
  "answer": 2,
  "explanation": "Kích cỡ giày được đánh số theo các nấc quy ước rời rạc có thứ tự từ nhỏ đến lớn."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### 1. Ma trận đề kiểm tra 45 phút — Thu thập và phân loại dữ liệu

| Cấp độ nhận thức | Trắc nghiệm khách quan (3,0 điểm) | Tự luận (7,0 điểm) | Tổng điểm |
| :--- | :---: | :---: | :---: |
| **Nhận biết** | 3 câu (1,5 đ) | Bài 1 (2,0 đ) | **3,5 điểm (35%)** |
| **Thông hiểu** | 2 câu (1,0 đ) | Bài 2 (2,0 đ) | **3,0 điểm (30%)** |
| **Vận dụng** | 1 câu (0,5 đ) | Bài 3 (2,0 đ) | **2,5 điểm (25%)** |
| **Vận dụng cao** | 0 câu | Bài 4 (1,0 đ) | **1,0 điểm (10%)** |
| **Tổng cộng** | **6 câu (3,0 đ)** | **4 bài (7,0 đ)** | **10,0 điểm (100%)** |

---

### 2. Đề bài chi tiết

#### PHẦN I: TRẮC NGHIỆM KHÁCH QUAN (3,0 điểm — Mỗi câu 0,5 điểm)

**Câu 1:** Dữ liệu nào sau đây là dữ liệu định tính không thể sắp thứ tự?
- A. Điểm thi môn Tiếng Anh: $7; 8; 9; 10$
- B. Thể loại phim yêu thích: *Kinh dị, Hài, Trinh thám, Hoạt hình*
- C. Kích thước áo: *S, M, L, XL*
- D. Xếp loại rèn luyện: *Tốt, Khá, Đạt, Chưa đạt*

**Câu 2:** Dữ liệu nào sau đây là số liệu liên tục?
- A. Số bàn thắng ghi được trong một mùa giải
- B. Số cây xanh trồng được trong đợt phát động Tết trồng cây
- C. Khối lượng của quả dưa hấu thu hoạch: $2,5\text{ kg}; 3,2\text{ kg}; 2,8\text{ kg}$
- D. Số lượng học sinh có mặt trong phòng học

**Câu 3:** Bạn Bình đọc báo cáo trên cổng thông tin điện tử của Bộ Y tế về tỉ lệ tiêm chủng vắc-xin cả nước. Đây là hình thức thu thập dữ liệu:
- A. Trực tiếp
- B. Gián tiếp
- C. Phỏng vấn
- D. Làm thí nghiệm

**Câu 4:** Ghi chép nhiệt độ không khí lúc 12 giờ trưa tại Hà Nội trong 4 ngày là: $32^\circ\text{C}; 33,5^\circ\text{C}; 120^\circ\text{C}; 31^\circ\text{C}$. Giá trị không hợp lý là:
- A. $32^\circ\text{C}$
- B. $33,5^\circ\text{C}$
- C. $120^\circ\text{C}$
- D. $31^\circ\text{C}$

**Câu 5:** Dữ liệu nào sau đây là số liệu rời rạc?
- A. Quãng đường đi từ nhà đến trường ($3,5\text{ km}; 4,2\text{ km}$)
- B. Chiều cao của các vận động viên bóng chuyền
- C. Số quyển sách mỗi bạn học sinh đã đọc trong hè: $2; 5; 3; 8$
- D. Thời gian làm xong một bài kiểm tra ($35\text{ phút}; 42,5\text{ phút}$)

**Câu 6:** Để đánh giá mức độ yêu thích môn Thể dục của học sinh toàn trường, nhóm nghiên cứu phỏng vấn $20$ bạn học sinh đang chơi bóng đá ở sân trường. Nhận xét nào sau đây ĐÚNG về mẫu khảo sát này?
- A. Mẫu khảo sát rất tốt vì đủ số lượng.
- B. Mẫu khảo sát không có tính đại diện vì chỉ hỏi những bạn đang chơi thể thao ở sân bóng đá.
- C. Mẫu khảo sát có tính đại diện cao cho học sinh toàn trường.
- D. Mẫu khảo sát hoàn toàn ngẫu nhiên.

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
Hãy xác định loại dữ liệu (Định tính: có/không sắp thứ tự; Định lượng: rời rạc/liên tục) cho các trường hợp sau:
a) Xếp loại kết quả học tập học kỳ I của học sinh lớp 8A: *Tốt, Khá, Đạt, Chưa đạt*.
b) Chiều dài sải cánh của các loài chim đo được trong vườn quốc gia Cúc Phương: $25,4\text{ cm}; 30,2\text{ cm}; 18,5\text{ cm}$.
c) Số lượng tin nhắn rác mà một thuê bao điện thoại nhận được trong mỗi tuần: $3; 5; 0; 2; 7$.
d) Tên nhà mạng viễn thông mà các hộ gia đình đang sử dụng: *Viettel, VNPT, Mobifone, FPT*.

**Bài 2 (2,0 điểm):**
Một cuộc khảo sát về số giờ sử dụng máy vi tính phục vụ học tập trong một tuần của 6 bạn học sinh tổ 1 lớp 8B thu được bảng sau:

| Tên học sinh | Nam | An | Bình | Cường | Dung | Hoa |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Số giờ sử dụng trong tuần | 8 | 12 | 169 | 10,5 | Bận học | 14 |

a) Dữ liệu "Số giờ sử dụng trong tuần" là loại dữ liệu nào?
b) Hãy tìm các điểm không hợp lý trong bảng dữ liệu trên và giải thích lý do.

**Bài 3 (2,0 điểm):**
Để tìm hiểu về thói quen ăn sáng của học sinh trong một trường THCS có $1000$ học sinh, ba bạn đề xuất các cách thu thập dữ liệu sau:
- **Bạn Minh:** Phát phiếu khảo sát cho $20$ bạn học sinh trong đội tuyển bơi lội của trường.
- **Bạn Lan:** Đứng trước cổng trường vào lúc 6h30 sáng và phỏng vấn $15$ học sinh đi qua.
- **Bạn Tuấn:** Chọn ngẫu nhiên từ sổ danh sách học sinh của mỗi lớp trong trường ra $4$ học sinh (trường có $25$ lớp, tổng cộng $100$ học sinh) để gửi phiếu khảo sát kín.
a) Theo em, cách chọn mẫu của bạn nào đảm bảo tính đại diện nhất cho học sinh toàn trường? Giải thích vì sao.
b) Nêu những nhược điểm của hai cách chọn mẫu còn lại.

**Bài 4 (1,0 điểm — Vận dụng cao):**
Một bảng thống kê báo cáo kết quả xếp loại học tập cuối năm của khối 8 gồm $200$ học sinh được trình bày như sau:
- Tỉ lệ học sinh xếp loại Tốt: $35\%$.
- Tỉ lệ học sinh xếp loại Khá: $45\%$.
- Tỉ lệ học sinh xếp loại Đạt: $25\%$.
- Tỉ lệ học sinh xếp loại Chưa đạt: $5\%$.
a) Số liệu trên có hợp lý không? Vì sao?
b) Giả sử sau khi kiểm tra lại, tỉ lệ đúng của loại Tốt là $35\%$, Khá là $40\%$, Đạt là $20\%$ và còn lại là Chưa đạt. Hãy tính số lượng học sinh thực tế của từng loại xếp loại trong khối 8.

---

### 3. Đáp án & Barem chấm điểm chi tiết

#### PHẦN I: TRẮC NGHIỆM (3,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **B** | **C** | **B** | **C** | **C** | **B** |
| **Điểm** | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ |

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) Dữ liệu định tính — có thể sắp thứ tự *(0,5 đ)*.
- b) Dữ liệu định lượng — số liệu liên tục *(0,5 đ)*.
- c) Dữ liệu định lượng — số liệu rời rạc *(0,5 đ)*.
- d) Dữ liệu định tính — không thể sắp thứ tự *(0,5 đ)*.

**Bài 2 (2,0 điểm):**
- a) (0,5 điểm)
  - Số giờ sử dụng máy vi tính là **dữ liệu định lượng — số liệu liên tục** (thời gian đo lường) *(0,5 đ)*.
- b) (1,5 điểm)
  - Điểm không hợp lý 1: Số giờ của bạn Cường là $169\text{ giờ}$. Một tuần chỉ có $7 \times 24 = 168\text{ giờ}$, do đó số giờ sử dụng máy tính không thể vượt quá $168\text{ giờ}$ *(0,75 đ)*.
  - Điểm không hợp lý 2: Số liệu của bạn Dung là "Bận học". Cột này yêu cầu số liệu định lượng (điền số giờ), điền chữ "Bận học" là sai định dạng dữ liệu *(0,75 đ)*.

**Bài 3 (2,0 điểm):**
- a) (1,0 điểm)
  - Cách chọn mẫu của **bạn Tuấn** đảm bảo tính đại diện nhất *(0,25 đ)*.
  - Lý do: Quy mô mẫu đủ lớn ($100$ học sinh, chiếm $10\%$ học sinh toàn trường) và được chọn ngẫu nhiên đồng đều ở tất cả các lớp trong trường, không thiên vị một nhóm đối tượng cụ thể nào *(0,75 đ)*.
- b) (1,0 điểm)
  - Nhược điểm của bạn Minh: Mẫu bị thiên vị (chỉ chọn đội bơi lội, những bạn chơi thể thao thường có chế độ ăn sáng đặc thù nhiều năng lượng hơn học sinh bình thường) *(0,5 đ)*.
  - Nhược điểm của bạn Lan: Cỡ mẫu quá nhỏ ($15$ bạn) và những bạn đến trường lúc 6h30 có thể cùng một nhóm thói quen đi học sớm, chưa bao quát được toàn bộ học sinh *(0,5 đ)*.

**Bài 4 (1,0 điểm):**
- a) (0,5 điểm)
  - Số liệu trên **không hợp lý** *(0,25 đ)*.
  - Giải thích: Tổng tỉ lệ phần trăm của 4 loại là:
    $$35\% + 45\% + 25\% + 5\% = 110\%$$
    Vượt quá $100\%$ (tổng các thành phần trong cùng một tổng thể bắt buộc phải bằng $100\%$) *(0,25 đ)*.
- b) (0,5 điểm)
  - Tỉ lệ học sinh Chưa đạt là: $100\% - (35\% + 40\% + 20\%) = 5\%$ *(0,1 đ)*.
  - Số học sinh xếp loại Tốt: $200 \times 35\% = 70\text{ học sinh}$ *(0,1 đ)*.
  - Số học sinh xếp loại Khá: $200 \times 40\% = 80\text{ học sinh}$ *(0,1 đ)*.
  - Số học sinh xếp loại Đạt: $200 \times 20\% = 40\text{ học sinh}$ *(0,1 đ)*.
  - Số học sinh xếp loại Chưa đạt: $200 \times 5\% = 10\text{ học sinh}$ *(0,1 đ)*.
