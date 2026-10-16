---
title: 'Bài 17: Thu thập và phân loại dữ liệu - Lý thuyết, Dạng toán và Chuyên đề Khoa học Dữ liệu'
description: 'Làm chủ phương pháp thu thập dữ liệu trực tiếp và gián tiếp, phân loại dữ liệu định tính và định lượng, đánh giá tính hợp lý và tính đại diện của mẫu, 5 dạng toán trọng tâm và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Thống kê 7
  - Thu thập dữ liệu
  - Phân loại dữ liệu
  - Dữ liệu định tính
  - Dữ liệu định lượng
  - Kết nối tri thức
grade: 7
---

# Bài 17. Thu thập và phân loại dữ liệu

Trong kỷ nguyên số thế kỷ XXI, người ta thường ví von: *"Dữ liệu chính là mỏ dầu mới của nhân loại"*. Mọi thuật toán trí tuệ nhân tạo (AI), các dự báo thời tiết siêu bão, hay chiến lược sản xuất của các tập đoàn hàng đầu thế giới đều khởi đầu từ một bước đi nền tảng duy nhất: **Thu thập và phân loại dữ liệu**.

Thế nhưng, nếu dữ liệu thu thập bị sai lệch, không có tính đại diện hoặc phân loại nhầm lẫn, mọi kết luận rút ra đều trở nên vô nghĩa, thậm chí gây ra những thiệt hại khổng lồ. Bài học này sẽ trang bị cho các em tư duy sắc bén của một nhà khoa học dữ liệu thực thụ: biết cách thu thập thông tin chuẩn xác, phân biệt rành rọt dữ liệu định tính và định lượng, phát hiện những con số bất hợp lý và đánh giá tính công bằng, khách quan của một cuộc điều tra mẫu.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 17: THU THẬP VÀ PHÂN LOẠI DỮ LIỆU</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương pháp thu thập</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <b>Trực tiếp:</b> Quan sát, đếm, đo đạc, phỏng vấn, phát phiếu hỏi, làm thí nghiệm.<br>• <b>Gián tiếp:</b> Sách báo, internet, cổng dữ liệu thống kê, báo cáo lưu trữ.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Phân loại dữ liệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <b>Định lượng (Số):</b><br>&nbsp;&nbsp;- Rời rạc (số đếm: HS, xe đạp...)<br>&nbsp;&nbsp;- Liên tục (số đo: chiều cao, nhiệt độ...)<br>• <b>Định tính (Chữ/Ý kiến):</b><br>&nbsp;&nbsp;- Có thứ tự (Xuất sắc, Giỏi; S, M, L)<br>&nbsp;&nbsp;- Không thứ tự (màu sắc, giới tính, quê quán)</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính hợp lý của dữ liệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đúng định dạng yêu cầu.<br>• Nằm trong khoảng biến thiên thực tế (tuổi học sinh, điểm thi thang 10, tỉ lệ cộng lại bằng $100\%$).<br>• Không mâu thuẫn nội tại logic.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tính đại diện của mẫu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Mẫu khảo sát phải phản ánh đúng đặc trưng của toàn thể.<br>• Quy mô mẫu đủ lớn.<br>• Tránh thiên lệch (Selection Bias) do cách chọn đối tượng.</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Các em hãy cùng thực hiện nhanh $5$ câu hỏi khởi động sau đây:

1. **Khái niệm dữ liệu:** Dữ liệu thu thập được từ một cuộc khảo sát có thể tồn tại dưới những dạng nào? Nêu ví dụ.
2. **Số đếm và số đo:** Số học sinh của một lớp học và thời gian chạy cự ly $100\text{ m}$ của một học sinh khác nhau ở điểm cơ bản nào?
3. **Phát hiện lỗi sai:** Một bạn ghi chép nhiệt độ không khí tại Hà Nội trong 4 ngày liên tiếp là: $24^\circ\text{C}, 26^\circ\text{C}, 130^\circ\text{C}, 25^\circ\text{C}$. Em hãy chỉ ra con số bất thường và giải thích vì sao.
4. **Ý kiến chủ quan:** Khi hỏi học sinh: *"Bạn có thích môn Toán không?"*, câu trả lời *"Rất thích", "Bình thường", "Không thích"* có phải là số liệu không?
5. **Chọn mẫu khách quan:** Muốn tìm hiểu về chiều cao trung bình của học sinh toàn trường, nếu chỉ đo chiều cao của các bạn trong đội tuyển bóng rổ thì kết quả có đáng tin cậy không? Vì sao?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** Dữ liệu có thể tồn tại dưới dạng con số (chiều cao, cân nặng, điểm số) hoặc chữ viết, ký hiệu, hình ảnh, âm thanh (tên gọi, xếp loại, cảm nhận, mức độ hài lòng).
2. **Trả lời:** Số học sinh luôn là số tự nhiên nguyên dương ($35, 40$ học sinh, không thể là $38.7$ học sinh) — đây là số đếm rời rạc. Còn thời gian chạy là số đo, có thể nhận giá trị thập phân bất kỳ ($14.25\text{ giây}, 13.8\text{ giây}$) — đây là đại lượng liên tục.
3. **Trả lời:** Con số $130^\circ\text{C}$ là hoàn toàn vô lý đối với thời tiết khí hậu tự nhiên trên Trái Đất (nhiệt độ không khí thông thường chỉ dao động từ dưới $0^\circ\text{C}$ đến khoảng $45^\circ\text{C}$). Có thể bạn học sinh đã gõ nhầm từ $30^\circ\text{C}$.
4. **Trả lời:** Không phải là số liệu. Đây là dữ liệu định tính (chữ viết biểu thị ý kiến, cảm xúc của người được hỏi).
5. **Trả lời:** Kết quả không đáng tin cậy vì các học sinh trong đội tuyển bóng rổ thường có chiều cao vượt trội so với mặt bằng chung, không đại diện cho toàn thể học sinh trong trường.
</details>

---

## I. Lý thuyết trọng tâm

### 1. Thu thập dữ liệu: Trực tiếp và Gián tiếp

> [!IMPORTANT]
> **ĐỊNH NGHĨA DỮ LIỆU VÀ THU THẬP DỮ LIỆU:**
> - Các thông tin thu thập được như: số, chữ, hình ảnh, ký hiệu... được gọi là **dữ liệu**. Dữ liệu dưới dạng số được gọi là **số liệu**.
> - Có hai phương pháp cơ bản để thu thập dữ liệu:
>   1. **Thu thập trực tiếp:** Người thu thập tự mình thực hiện (đếm, đo, quan sát, phỏng vấn, phát phiếu điều tra, làm thí nghiệm).
>   2. **Thu thập gián tiếp:** Người thu thập khai thác nguồn dữ liệu có sẵn (sách, báo, truyền hình, internet, cơ sở dữ liệu quốc gia, niên giám thống kê).

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" style="width: 100%; max-width: 560px; height: auto;" class="lesson-diagram" role="img" aria-label="Sơ đồ hai phương pháp thu thập dữ liệu">
    <rect x="20" y="20" width="240" height="180" rx="12" fill="rgba(37,99,235,0.06)" stroke="#2563eb" stroke-width="2" />
    <text x="140" y="52" text-anchor="middle" font-family="Source Sans Pro, sans-serif" font-weight="bold" font-size="16" fill="#1d4ed8">THU THẬP TRỰC TIẾP</text>
    <line x1="40" y1="65" x2="240" y2="65" stroke="#93c5fd" stroke-width="1.5" />
    <text x="40" y="95" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Đếm số lượng, kiểm kê</text>
    <text x="40" y="122" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Dùng thước đo chiều dài, khối lượng</text>
    <text x="40" y="149" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Phỏng vấn, phát phiếu câu hỏi</text>
    <text x="40" y="176" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Thực hiện thí nghiệm khoa học</text>

    <rect x="300" y="20" width="240" height="180" rx="12" fill="rgba(16,185,129,0.06)" stroke="#10b981" stroke-width="2" />
    <text x="420" y="52" text-anchor="middle" font-family="Source Sans Pro, sans-serif" font-weight="bold" font-size="16" fill="#047857">THU THẬP GIÁN TIẾP</text>
    <line x1="320" y1="65" x2="520" y2="65" stroke="#a7f3d0" stroke-width="1.5" />
    <text x="320" y="95" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Tra cứu sách, báo, tạp chí</text>
    <text x="320" y="122" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Tra cứu Cổng thông tin Chính phủ</text>
    <text x="320" y="149" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Tổng cục Thống kê, Niên giám</text>
    <text x="320" y="176" font-family="Source Sans Pro, sans-serif" font-size="13" fill="#1e293b">• Cơ sở dữ liệu số trên Internet</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Sơ đồ: Hai con đường chính để thu thập dữ liệu trong nghiên cứu và đời sống</em></p>
</div>

---

### 2. Phân loại dữ liệu: Định tính và Định lượng

Dữ liệu thu thập được rất đa dạng. Để máy tính và con người có thể xử lý, chúng ta phân loại chúng thành hai nhánh lớn:

```
                      DỮ LIỆU (DATA)
                     /              \
        DỮ LIỆU ĐỊNH TÍNH          DỮ LIỆU ĐỊNH LƯỢNG
     (Không phải là số / Chữ)        (Số liệu / Đo đếm)
          /            \                 /           \
  Có thể xếp thứ tự  Không xếp thứ tự  Rời rạc      Liên tục
 (Ordinal Data)      (Nominal Data)  (Số đếm)     (Số đo)
```

> [!NOTE]
> **CHI TIẾT VỀ CÁC LOẠI DỮ LIỆU:**
> 1. **Dữ liệu định lượng (Quantitative data / Số liệu):**
>    - Là các dữ liệu biểu thị bằng con số, có thể thực hiện các phép toán cộng, trừ, nhân, chia, tính trung bình cộng...
>    - **Số đếm rời rạc:** Nhận các giá trị số tự nhiên rời rạc (ví dụ: số bàn thắng, số học sinh trong lớp, số lỗi chính tả trong bài tập làm văn).
>    - **Số đo liên tục:** Nhận các giá trị thực bất kỳ trong một khoảng (ví dụ: nhiệt độ $28.4^\circ\text{C}$, thời gian chạy $12.35\text{ s}$, diện tích thửa ruộng $450.8\text{ m}^2$).
> 
> 2. **Dữ liệu định tính (Qualitative data / Không là số):**
>    - Là các dữ liệu biểu thị bằng từ ngữ, chữ cái, hình ảnh, âm thanh...
>    - **Có thể sắp xếp thứ tự:** Các giá trị có quan hệ hơn kém, cấp bậc rõ ràng (ví dụ: xếp loại học lực: *Xuất sắc > Giỏi > Khá > Đạt*; kích cỡ áo: *S < M < L < XL*; mức độ hài lòng: *Rất hài lòng > Hài lòng > Tạm được > Không hài lòng*).
>    - **Không thể sắp xếp thứ tự:** Các giá trị ngang hàng, chỉ mang tính phân loại tên gọi (ví dụ: màu sắc yêu thích: *đỏ, xanh, vàng*; quê quán: *Hà Nội, Đà Nẵng, TP.HCM*; giới tính: *nam, nữ*; nhóm máu: *A, B, AB, O*).

---

### 3. Tính hợp lý và tính đại diện của dữ liệu

Khi tiếp nhận một bảng dữ liệu, nhà thống kê cần đặt ra hai câu hỏi quan trọng:
1. **Dữ liệu có hợp lý không?**
   - Đúng định dạng (ngày tháng, số thực, chuỗi ký tự).
   - Nằm trong phạm vi cho phép (ví dụ: điểm kiểm tra trên thang điểm $10$ thì $x \in [0; 10]$; tỉ lệ phần trăm các thành phần gộp lại phải bằng $100\%$; số người không thể là số âm hay số thập phân).
   - Logic đời sống: chiều cao của học sinh lớp 7 dao động từ $1.3\text{ m}$ đến $1.8\text{ m}$, nếu ghi $3.5\text{ m}$ là hoàn toàn vô lý.
2. **Mẫu khảo sát có tính đại diện không?**
   - Trong thực tế, không thể khảo sát toàn bộ $100$ triệu người dân Việt Nam. Người ta phải chọn ra một tập con gọi là **mẫu khảo sát**.
   - Mẫu khảo sát muốn đại diện được cho toàn thể thì phải:
     + Được chọn một cách **ngẫu nhiên**, không có thiên kiến cá nhân.
     + Kích thước mẫu phải **đủ lớn**.
     + Phải bao quát được các nhóm đối tượng khác nhau (độ tuổi, vùng miền, giới tính...).

---

## II. Các dạng toán trọng tâm và Phương pháp giải

### Dạng 1: Lựa chọn phương pháp thu thập dữ liệu thích hợp

**Phương pháp giải:**
- Nếu đối tượng nghiên cứu ở ngay trong phạm vi lớp học, trường học, gia đình hoặc cần số liệu tức thời: chọn **thu thập trực tiếp** (đo, đếm, phát phiếu hỏi).
- Nếu đối tượng nghiên cứu rộng lớn (dân số cả nước, diện tích các tỉnh thành, lịch sử các triều đại, sản lượng lúa cả nước): chọn **thu thập gián tiếp** (tra cứu internet, tổng cục thống kê, sách báo).

#### Ví dụ 1
Em hãy lựa chọn phương pháp thu thập dữ liệu phù hợp nhất cho mỗi tình huống sau:
a) Thầy giáo dạy thể dục muốn biết thành tích nhảy xa của $42$ học sinh lớp 7A.
b) Một nhóm học sinh muốn tìm hiểu diện tích và dân số của $11$ quốc gia Đông Nam Á.
c) Ban giám hiệu muốn thăm dò mức độ hài lòng của phụ huynh học sinh đối với các bữa ăn bán trú tại trường.
d) Một viện nghiên cứu sinh học muốn xác định tác dụng của một loại phân bón sinh học mới đối với tốc độ nảy mầm của hạt ngô.

**Lời giải chi tiết:**
a) **Thu thập trực tiếp bằng cách đo đạc:** Thầy giáo cho học sinh thực hiện nhảy xa và dùng thước dây đo chính xác thành tích từng em.
b) **Thu thập gián tiếp:** Tra cứu từ Niên giám thống kê quốc tế, Cổng thông tin điện tử của Hiệp hội các quốc gia Đông Nam Á (ASEAN) hoặc cơ sở dữ liệu của Ngân hàng Thế giới (World Bank).
c) **Thu thập trực tiếp bằng phiếu khảo sát (phiếu hỏi online hoặc giấy):** Gửi phiếu hỏi ẩn danh đến toàn bộ phụ huynh để lấy ý kiến khách quan.
d) **Thu thập trực tiếp bằng làm thí nghiệm:** Bố trí hai lô hạt giống ngô (một lô có phân bón, một lô đối chứng không có) và theo dõi, ghi chép tỉ lệ nảy mầm hàng ngày.

---

### Dạng 2: Phân loại dữ liệu định tính và định lượng

**Phương pháp giải:**
- Bước 1: Xem dữ liệu là **con số** hay **từ ngữ/chữ cái**.
  + Nếu là số $\implies$ Dữ liệu định lượng.
  + Nếu không là số $\implies$ Dữ liệu định tính.
- Bước 2: Phân loại chi tiết:
  + Dữ liệu định lượng: Hỏi xem có giá trị thập phân tùy ý không? Nếu chỉ đếm từng đơn vị $\implies$ rời rạc; nếu đo lường liên tục $\implies$ liên tục.
  + Dữ liệu định tính: Hỏi xem các giá trị có quan hệ hơn kém, cao thấp được không? Nếu có $\implies$ xếp thứ tự được; nếu không $\implies$ không xếp thứ tự.

#### Ví dụ 2
Một bảng điều tra tại một câu lạc bộ bóng đá học sinh ghi nhận các thông tin sau:
1. Họ và tên học sinh.
2. Số áo thi đấu (ví dụ: $7, 10, 11$).
3. Vị trí thi đấu (Thủ môn, Hậu vệ, Tiền vệ, Tiền đạo).
4. Chiều cao (đơn vị $\text{cm}$).
5. Số bàn thắng đã ghi được trong mùa giải.
6. Mức độ thể lực được huấn luyện viên đánh giá (Rất tốt, Tốt, Trung bình, Yếu).

Em hãy phân loại từng dữ liệu trên vào các nhóm phù hợp.

**Lời giải chi tiết:**
- **Dữ liệu 1 (Họ và tên):** Dữ liệu định tính, không thể xếp thứ tự.
- **Dữ liệu 2 (Số áo thi đấu):** Dù được viết bằng con số ($7, 10, 11$) nhưng đây chỉ là ký hiệu định danh cho cầu thủ, không mang ý nghĩa đo đếm và không thể tính trung bình cộng (cầu thủ số $10$ không có nghĩa là gấp đôi cầu thủ số $5$). Do đó đây là **dữ liệu định tính, không thể xếp thứ tự**.
- **Dữ liệu 3 (Vị trí thi đấu):** Dữ liệu định tính, không thể xếp thứ tự.
- **Dữ liệu 4 (Chiều cao):** Dữ liệu định lượng, số đo liên tục (có thể là $165.5\text{ cm}, 170.2\text{ cm}$).
- **Dữ liệu 5 (Số bàn thắng):** Dữ liệu định lượng, số đếm rời rạc (chỉ nhận số nguyên không âm: $0, 1, 2, 3...$).
- **Dữ liệu 6 (Mức độ thể lực):** Dữ liệu định tính, có thể xếp thứ tự (*Rất tốt > Tốt > Trung bình > Yếu*).

---

### Dạng 3: Nhận biết tính không hợp lý của dữ liệu

**Phương pháp giải:**
- So sánh các số liệu với giới hạn thực tế (tuổi, điểm, nhiệt độ, chiều cao).
- Kiểm tra tổng các phần trăm (phải bằng $100\%$).
- Kiểm tra tính logic mâu thuẫn giữa các cột dữ liệu.

#### Ví dụ 3
Bạn Minh thu thập kết quả điểm kiểm tra cuối học kỳ môn Toán của $40$ học sinh lớp 7B và ghi lại bảng thống kê như sau:

| Điểm số ($x$) | Số học sinh ($n$) | Tỉ lệ phần trăm |
| :---: | :---: | :---: |
| Dưới $5$ | $3$ | $7.5\%$ |
| Từ $5$ đến dưới $7$ | $15$ | $37.5\%$ |
| Từ $7$ đến dưới $9$ | $16$ | $40.0\%$ |
| Từ $9$ đến $10$ | $8$ | $20.0\%$ |
| **Tổng cộng** | **$42$** | **$105.0\%$** |

Em hãy chỉ ra hai điểm bất hợp lý trong bảng số liệu trên của bạn Minh.

**Lời giải chi tiết:**
1. **Điểm bất hợp lý thứ nhất về tổng số học sinh:** Đề bài nêu rõ lớp 7B có $40$ học sinh, nhưng tổng số học sinh trong bảng lại là $3 + 15 + 16 + 8 = 42$ học sinh (dư $2$ học sinh so với sĩ số thực tế).
2. **Điểm bất hợp lý thứ hai về tổng tỉ lệ phần trăm:** Tổng các tỉ lệ phần trăm của tất cả các nhóm học sinh phải luôn bằng đúng $100\%$. Ở đây tổng tỉ lệ là $7.5\% + 37.5\% + 40.0\% + 20.0\% = 105\% > 100\%$, điều này hoàn toàn sai về mặt toán học.

---

### Dạng 4: Đánh giá tính đại diện của mẫu khảo sát

**Phương pháp giải:**
- Xét xem những người/đối tượng được khảo sát có mang tính chất đặc thù thiên lệch hay không.
- Nếu mẫu khảo sát chỉ tập trung vào một nhóm có sở thích, điều kiện đặc biệt thì mẫu đó **không mang tính đại diện**.

#### Ví dụ 4
Trong các cuộc khảo sát sau đây, mẫu khảo sát nào có tính đại diện cho đối tượng nghiên cứu? Giải thích vì sao:
a) Để khảo sát thời gian sử dụng điện thoại thông minh mỗi ngày của học sinh khối 7, bạn An phát phiếu hỏi cho $50$ bạn đang ngồi trong phòng chơi game điện tử ngoài cổng trường.
b) Để tìm hiểu món ăn ưa thích trong căng tin trường học, ban quản trị chọn ngẫu nhiên $10$ học sinh từ mỗi lớp của tất cả các khối $6, 7, 8, 9$ để phỏng vấn.
c) Để thăm dò ý kiến người dân thành phố về việc xây dựng công viên cây xanh, phóng viên chỉ phỏng vấn những người dân đang tập thể dục buổi sáng trong các công viên hiện có.

**Lời giải chi tiết:**
- Trường hợp a) **Không có tính đại diện:** Vì các học sinh ngồi trong phòng game điện tử có xu hướng sử dụng thiết bị công nghệ nhiều hơn hẳn học sinh bình thường, kết quả thu được sẽ bị thổi phồng quá cao.
- Trường hợp b) **Có tính đại diện cao:** Phương pháp chọn mẫu ngẫu nhiên phân tầng (lấy đều $10$ học sinh từ mỗi lớp thuộc mọi khối) đảm bảo tính đại diện cho toàn thể học sinh trường, không thiên vị một lứa tuổi hay một nhóm nào.
- Trường hợp c) **Không có tính đại diện:** Những người đang tập thể dục trong công viên vốn là những người yêu thích và hưởng lợi nhiều nhất từ công viên cây xanh. Mẫu này bỏ qua những người dân ở xa, người bận rộn hoặc những người có nhu cầu sử dụng đất vào mục đích khác.

---

## III. 5 Chuyên đề Nâng cao & Ứng dụng Khoa học Dữ liệu

### Chuyên đề 1: Nghịch lý Simpson (Simpson's Paradox) — Cạm bẫy của dữ liệu gộp

Trong phân tích thống kê, **Nghịch lý Simpson** là hiện tượng kỳ lạ: Một xu hướng xuất hiện trong từng nhóm dữ liệu nhỏ riêng lẻ, nhưng lại hoàn toàn đảo ngược khi gộp chung tất cả các nhóm lại!

> [!TIP]
> **Ví dụ kinh điển:**
> Một loại thuốc mới $A$ có tỉ lệ chữa khỏi cao hơn thuốc cũ $B$ ở nhóm bệnh nhân thể nhẹ ($90\%$ so với $80\%$), và cũng có tỉ lệ khỏi cao hơn ở nhóm bệnh nhân thể nặng ($50\%$ so với $40\%$).
> Nhưng nếu bác sĩ kê thuốc $A$ chủ yếu cho các ca bệnh nặng, còn thuốc $B$ chủ yếu cho các ca nhẹ, thì khi tính tỉ lệ khỏi bệnh chung trên toàn bộ bệnh nhân, thuốc $A$ lại có tỉ lệ thành công thấp hơn thuốc $B$!
> **Bài học rút ra:** Khi thu thập và xử lý dữ liệu, luôn phải phân tách thành các biến phân loại tiềm ẩn (confounding variables), tránh vội vàng kết luận dựa trên số liệu gộp bề nổi.

---

### Chuyên đề 2: Thiên kiến kẻ sống sót (Survivorship Bias) trong Thế chiến II

Năm 1943, Không quân Mỹ phân tích các vết đạn trên những chiếc máy bay ném bom trở về sau trận chiến để gia cố giáp:
- Các chuyên gia thấy cánh và thân máy bay dính rất nhiều vết đạn, nên đề xuất bọc thêm giáp dày ở cánh và thân.
- Nhà toán học thiên tài **Abraham Wald** phản bác kịch liệt: *"Phải bọc giáp vào động cơ máy bay!"*.
- Wald giải thích: Những chiếc máy bay bị bắn vào cánh và thân vẫn có thể sống sót bay về căn cứ để chúng ta quan sát. Còn những chiếc bị bắn vào động cơ thì đều đã rơi xuống biển và không bao giờ trở về!

**Ý nghĩa trong Toán học dữ liệu:** Dữ liệu thu thập chỉ từ "những đối tượng còn sót lại" sẽ đưa ra phán đoán sai lầm $180^\circ$ nếu ta quên mất những dữ liệu đã bị biến mất trong quá trình chọn mẫu.

---

### Chuyên đề 3: Kỹ thuật chọn mẫu phân tầng (Stratified Random Sampling)

Khi tổng thể gồm nhiều nhóm có quy mô và tính chất khác nhau, ta sử dụng công thức tỉ lệ chọn mẫu:
$$n_i = \frac{N_i}{N} \times n$$
Trong đó:
- $N$: Quy mô toàn bộ tổng thể.
- $N_i$: Quy mô của phân tầng thứ $i$.
- $n$: Tổng số mẫu cần khảo sát.
- $n_i$: Số lượng mẫu cần rút ra từ phân tầng $i$.

**Ứng dụng:** Giúp các cơ quan thống kê quốc gia khảo sát hàng triệu hộ gia đình chỉ với mẫu vài nghìn người mà sai số chỉ dưới $1.5\%$.

---

### Chuyên đề 4: Làm sạch dữ liệu và Giá trị ngoại lai (Outliers)

Trong một tập số liệu thực nghiệm:
$$X = \{x_1, x_2, \dots, x_n\},$$
**Giá trị ngoại lai (Outlier)** là những giá trị dị thường, cách quá xa phần còn lại do lỗi đo đạc hoặc sự kiện hiếm gặp.
Trong khoa học dữ liệu hiện đại, người ta dùng khoảng tứ phân vị $IQR = Q_3 - Q_1$:
- Mọi giá trị nằm ngoài khoảng $[Q_1 - 1.5 \times IQR; Q_3 + 1.5 \times IQR]$ đều bị nghi ngờ là ngoại lai cần được kiểm định làm sạch trước khi phân tích.

---

### Chuyên đề 5: Hiệu ứng Hawthorne và Thiên kiến trong bảng hỏi

Khi người tham gia khảo sát nhận thức được họ đang bị quan sát hoặc mong muốn làm vừa lòng người phỏng vấn, họ có xu hướng trả lời theo cách "được xã hội kỳ vọng" thay vì sự thật. Đây gọi là **Hiệu ứng Hawthorne (Hawthorne Effect)**.
Để triệt tiêu thiên kiến này, các nhà khoa học dữ liệu sử dụng:
- Bảng khảo sát ẩn danh hai chiều (Double-blind survey).
- Câu hỏi bẫy kiểm tra tính nhất quán logic (Consistency check questions).

---

## IV. Bộ 10 câu hỏi Trắc nghiệm tương tác chuyên sâu

```quiz
type: choice
question: 'Dữ liệu nào sau đây là dữ liệu định lượng (số liệu)?'
options:
  - 'Xếp loại hạnh kiểm học sinh (Tốt, Khá, Đạt, Chưa đạt)'
  - 'Số lượng cây xanh trồng trong vườn trường'
  - 'Tên các câu lạc bộ ngoại khóa trong trường'
  - 'Mức độ yêu thích đọc sách (Rất thích, Thích, Không thích)'
answer: 2
hint: 'Dữ liệu định lượng biểu thị bằng các con số có thể tính toán đo đếm được.'
explanation: 'Số lượng cây xanh trồng trong trường là số đếm (con số nguyên không âm như 15, 20 cây), do đó là dữ liệu định lượng. Các phương án còn lại đều là chữ viết (dữ liệu định tính).'
```

```quiz
type: choice
question: 'Dãy dữ liệu nào sau đây là dữ liệu định tính có thể sắp xếp thứ tự?'
options:
  - 'Hà Nội, Hải Phòng, Cần Thơ, Huế'
  - 'Toán, Ngữ văn, Tiếng Anh, Lịch sử'
  - 'Xuất sắc, Giỏi, Khá, Trung bình'
  - 'Đỏ, Xanh lá, Vàng, Cam'
answer: 3
hint: 'Tìm nhóm dữ liệu có thứ bậc, mức độ hơn kém rõ ràng.'
explanation: 'Xếp loại học tập "Xuất sắc, Giỏi, Khá, Trung bình" biểu thị cấp bậc đánh giá rõ ràng từ cao xuống thấp nên là dữ liệu định tính có thể sắp xếp thứ tự.'
```

```quiz
type: choice
question: 'Phương pháp nào sau đây là phương pháp thu thập dữ liệu gián tiếp?'
options:
  - 'Dùng cân đồng hồ để cân khối lượng các bạn học sinh trong lớp'
  - 'Tra cứu niên giám thống kê trên mạng internet về dân số các nước'
  - 'Đếm số lượng xe đạp gửi trong bãi đỗ xe của trường'
  - 'Phát phiếu hỏi thăm dò sở thích đọc sách của các bạn'
answer: 2
hint: 'Thu thập gián tiếp là lấy dữ liệu từ nguồn đã có sẵn, không tự mình trực tiếp làm.'
explanation: 'Tra cứu thông tin dân số trên internet từ các nguồn niên giám có sẵn là thu thập gián tiếp. Các phương án còn lại người thu thập đều tự mình thực hiện (đo, đếm, phát phiếu).'
```

```quiz
type: choice
question: 'Số đo nào sau đây là dữ liệu định lượng nhận giá trị liên tục (số đo)?'
options:
  - 'Số bàn thắng trong một trận đấu bóng đá'
  - 'Số thành viên trong một gia đình'
  - 'Nhiệt độ cơ thể người đo bằng nhiệt kế (°C)'
  - 'Số trang sách của một quyển truyện tranh'
answer: 3
hint: 'Đại lượng liên tục có thể nhận giá trị thập phân bất kỳ trong một khoảng, không bị ngắt quãng.'
explanation: 'Nhiệt độ cơ thể có thể nhận giá trị thập phân bất kỳ như 36.5°C, 36.8°C, 37.2°C nên là số đo liên tục. Các đại lượng còn lại đều là số đếm rời rạc (chỉ nhận số nguyên).'
```

```quiz
type: choice
question: 'Một bảng số liệu ghi nhận tỉ lệ % học sinh tham gia 3 môn thể thao: Bóng đá 45%, Cầu lông 35%, Bóng bàn 25%. Bảng số liệu này có hợp lý không?'
options:
  - 'Hợp lý vì mỗi môn đều có tỉ lệ dương'
  - 'Không hợp lý vì tổng tỉ lệ phần trăm vượt quá 100% (bằng 105%)'
  - 'Không hợp lý vì số học sinh phải là số nguyên'
  - 'Hợp lý nếu mỗi học sinh chỉ chọn đúng một môn'
answer: 2
hint: 'Kiểm tra tổng các tỉ lệ phần trăm của toàn thể.'
explanation: 'Tổng phần trăm là 45% + 35% + 25% = 105% > 100%. Nếu mỗi học sinh chỉ được chọn 1 môn duy nhất thì tổng tỉ lệ phải đúng bằng 100%.'
```

```quiz
type: choice
question: 'Để đánh giá mức độ hài lòng của hành khách đối với dịch vụ xe buýt công cộng trong thành phố, cách chọn mẫu nào sau đây mang tính đại diện tốt nhất?'
options:
  - 'Chỉ phỏng vấn những hành khách đi tuyến xe buýt số 01'
  - 'Chỉ phỏng vấn học sinh, sinh viên sử dụng vé tháng ưu đãi'
  - 'Chọn ngẫu nhiên hành khách thuộc nhiều độ tuổi trên các tuyến xe buýt khác nhau vào các khung giờ sáng, trưa, tối'
  - 'Phỏng vấn các tài xế và nhân viên bán vé xe buýt'
answer: 3
hint: 'Mẫu có tính đại diện phải bao quát được nhiều nhóm đối tượng, nhiều thời điểm và tuyến đường khác nhau.'
explanation: 'Khảo sát ngẫu nhiên trên nhiều tuyến xe buýt, nhiều khung giờ và đa dạng lứa tuổi đảm bảo tính khách quan và bao quát toàn diện nhất.'
```

```quiz
type: choice
question: 'Dữ liệu nào sau đây là dữ liệu định tính không thể sắp xếp thứ tự?'
options:
  - 'Kích cỡ giày dép: 36, 37, 38, 39, 40'
  - 'Nhóm máu của người hiến máu: A, B, AB, O'
  - 'Mức độ hài lòng: Rất hài lòng, Hài lòng, Tạm được'
  - 'Xếp hạng huy chương: Vàng, Bạc, Đồng'
answer: 2
hint: 'Nhóm máu không có nhóm nào "cao hơn" hay "tốt hơn" nhóm nào về thứ bậc phân loại.'
explanation: 'Các nhóm máu A, B, AB, O hoàn toàn bình đẳng về mặt phân loại danh nghĩa, không thể sắp xếp theo thứ tự hơn kém, do đó là dữ liệu định tính không thể sắp xếp thứ tự.'
```

```quiz
type: choice
question: 'Khi đo chiều cao của 5 bạn học sinh lớp 7, một bạn ghi nhầm một số liệu. Dãy số liệu nào dưới đây chắc chắn chứa điểm không hợp lý?'
options:
  - '148 cm; 152 cm; 155 cm; 160 cm; 163 cm'
  - '1.45 m; 1.50 m; 1.55 m; 1.58 m; 1.62 m'
  - '150 cm; 155 cm; 152 cm; 158 cm; 350 cm'
  - '142 cm; 149 cm; 151 cm; 156 cm; 158 cm'
answer: 3
hint: 'Chiều cao 350 cm tương đương 3.5 mét, cao hơn cả trần nhà!'
explanation: 'Con số 350 cm (tương đương 3.5 m) là hoàn toàn không thể có đối với con người trong thực tế. Đây chắc chắn là lỗi ghi nhầm (có thể là 150 cm).'
```

```quiz
type: choice
question: 'Một công ty sản xuất bóng đèn muốn kiểm tra tuổi thọ của lô hàng 100 000 bóng đèn vừa sản xuất. Phương pháp thu thập dữ liệu hợp lý nhất là gì?'
options:
  - 'Thắp sáng toàn bộ 100 000 bóng đèn cho đến khi cháy hỏng để tính trung bình'
  - 'Lấy ngẫu nhiên 500 bóng đèn để thử nghiệm tuổi thọ (điều tra mẫu)'
  - 'Không cần thử nghiệm, đoán tuổi thọ bằng mắt thường'
  - 'Chỉ thử nghiệm 2 bóng đèn đầu tiên trên dây chuyền'
answer: 2
hint: 'Kiểm nghiệm phá hủy (thử cho cháy bóng đèn) thì không thể thử trên toàn bộ sản phẩm vì sẽ hỏng hết hàng để bán.'
explanation: 'Vì việc thử nghiệm tuổi thọ làm hỏng sản phẩm, người ta bắt buộc phải dùng phương pháp điều tra chọn mẫu với kích thước mẫu đủ lớn (500 bóng).'
```

```quiz
type: choice
question: 'Số áo thi đấu của các cầu thủ bóng đá (ví dụ: số 7, số 10) thuộc loại dữ liệu nào?'
options:
  - 'Dữ liệu định lượng rời rạc'
  - 'Dữ liệu định lượng liên tục'
  - 'Dữ liệu định tính không thể xếp thứ tự'
  - 'Dữ liệu định tính có thể xếp thứ tự'
answer: 3
hint: 'Số áo chỉ là "nhãn tên" bằng chữ số, không dùng để đo đếm hay tính toán hơn kém.'
explanation: 'Số áo thi đấu chỉ mang tính chất định danh như một cái tên (để nhận diện cầu thủ trên sân), không biểu thị số lượng hay mức độ hơn kém, nên là dữ liệu định tính không thể xếp thứ tự.'
```

---

## V. Đề kiểm tra 45 phút chuẩn Ma trận Đánh giá Năng lực

### Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết (40%) | Thông hiểu (30%) | Vận dụng (20%) | Vận dụng cao (10%) | Tổng cộng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Thu thập dữ liệu** | Câu 1 (1.0đ) | Câu 3a (1.0đ) | | Câu 6 (1.0đ) | **3.0đ** |
| **Phân loại dữ liệu** | Câu 2 (1.0đ) | Câu 4 (1.5đ) | Câu 5a (1.0đ) | | **3.5đ** |
| **Hợp lý & Đại diện** | | Câu 3b (1.0đ) | Câu 5b (1.5đ) | | **2.5đ** |
| **Tổng điểm** | **2.0đ** | **3.5đ** | **2.5đ** | **2.0đ** | **10.0đ** |

---

### Đề bài chi tiết

**Phần I. Trắc nghiệm khách quan (3.0 điểm)**
*Mỗi câu đúng được 0.5 điểm.*

**Câu 1:** Trong các dãy dữ liệu sau, dãy nào là dữ liệu định lượng?
A. Tên các loài động vật trong sở thú.
B. Điểm thi học kỳ các môn của bạn Mai ($8; 9; 7.5; 10$).
C. Trạng thái thời tiết (Nắng, Mưa, Nhiều mây).
D. Xếp loại hạnh kiểm (Tốt, Khá, Trung bình).

**Câu 2:** Phương pháp nào sau đây là thu thập dữ liệu trực tiếp?
A. Lên mạng tra cứu số dân của thành phố Hà Nội.
B. Xem dự báo thời tiết trên tivi.
C. Đo nhiệt độ cơ thể bằng nhiệt kế điện tử.
D. Đọc sách lịch sử tìm năm sinh của vua Quang Trung.

**Câu 3:** Dữ liệu nào sau đây là số đo liên tục?
A. Số bàn thắng ghi được trong giải đấu.
B. Số cuốn sách trong thư viện trường.
C. Khối lượng của một bao gạo ($49.8\text{ kg}$).
D. Số lượng học sinh tham gia câu lạc bộ bơi lội.

**Câu 4:** Để khảo sát thói quen đọc sách của học sinh lớp 7 trong toàn huyện, mẫu nào sau đây có tính đại diện nhất?
A. $100$ học sinh tại trường chuyên của huyện.
B. $20$ học sinh ngẫu nhiên từ mỗi trường THCS trong toàn huyện.
C. $100$ học sinh đang có mặt tại thư viện huyện vào sáng Chủ nhật.
D. $100$ bạn học sinh thuộc lớp của bạn cán bộ phụ trách Đội.

**Câu 5:** Một bảng khảo sát tỉ lệ phần trăm các phương tiện học sinh đến trường: Xe đạp $40\%$, Xe máy điện $35\%$, Đi bộ $20\%$, Xe buýt $15\%$. Bảng này có điểm bất hợp lý nào?
A. Tỉ lệ xe đạp quá cao.
B. Tổng tỉ lệ phần trăm bằng $110\% > 100\%$.
C. Thiếu phương tiện ô tô.
D. Không có điểm nào bất hợp lý.

**Câu 6:** Khi thu thập thông tin về nhóm máu ($A, B, AB, O$) của các bạn trong lớp, dữ liệu này thuộc loại:
A. Dữ liệu định tính có thể xếp thứ tự.
B. Dữ liệu định tính không thể xếp thứ tự.
C. Dữ liệu định lượng rời rạc.
D. Dữ liệu định lượng liên tục.

---

**Phần II. Tự luận (7.0 điểm)**

**Bài 1 (2.0 điểm):**
Cho các thông tin thu thập được từ $45$ học sinh tham gia Trại hè Khoa học:
a) Tên trường THCS mà học sinh đang học.
b) Điểm bài thi trắc nghiệm tư duy logic (thang điểm $100$).
c) Kích cỡ áo đồng phục trại hè ($S, M, L, XL$).
d) Thời gian hoàn thành thử thách vượt chướng ngại vật (đơn vị: giây).
*Yêu cầu:* Hãy phân loại từng thông tin trên theo cấu trúc: Định tính (có thứ tự hay không thứ tự) hay Định lượng (rời rạc hay liên tục).

**Bài 2 (2.0 điểm):**
Một bạn học sinh lập bảng điều tra về số lượng vật nuôi trong gia đình của $30$ bạn trong lớp như sau:
- Số gia đình không nuôi con nào: $8$ gia đình.
- Số gia đình nuôi $1$ con: $14$ gia đình.
- Số gia đình nuôi $2$ con: $6$ gia đình.
- Số gia đình nuôi $3$ con trở lên: $5$ gia đình.
- Có một bạn ghi số vật nuôi là $-2$ con và một bạn ghi $150$ con gà công nghiệp tại trang trại.
*Yêu cầu:*
a) Em hãy kiểm tra xem tổng số gia đình được thống kê có khớp với sĩ số $30$ bạn không?
b) Chỉ ra những giá trị không hợp lý trong quá trình thu thập số liệu và nêu lý do.

**Bài 3 (2.0 điểm):**
Một nhà xuất bản muốn khảo sát xem thiếu nhi thích đọc truyện tranh hay truyện chữ hơn. Họ dự định đặt bàn khảo sát tại cửa ra vào của một hiệu sách lớn chuyên bán truyện tranh manga vào chiều thứ Bảy.
a) Theo em, kết quả khảo sát từ cách chọn mẫu này có tính đại diện cho sở thích của toàn bộ thiếu nhi trong thành phố không? Vì sao?
b) Hãy đề xuất một phương án chọn mẫu khách quan và công bằng hơn để nhà xuất bản có kết quả tin cậy.

**Bài 4 (1.0 điểm — Vận dụng cao):**
Tại một bệnh viện, bác sĩ thống kê tỉ lệ khỏi bệnh của hai phác đồ điều trị $X$ và $Y$ trên hai nhóm bệnh nhân nhẹ và nặng như sau:
- Nhóm nhẹ: Phác đồ $X$ đạt tỉ lệ khỏi $\frac{36}{40} = 90\%$; Phác đồ $Y$ đạt tỉ lệ khỏi $\frac{160}{200} = 80\%$.
- Nhóm nặng: Phác đồ $X$ đạt tỉ lệ khỏi $\frac{80}{160} = 50\%$; Phác đồ $Y$ đạt tỉ lệ khỏi $\frac{16}{40} = 40\%$.
a) So sánh tỉ lệ khỏi bệnh của phác đồ $X$ và $Y$ trong từng nhóm riêng lẻ.
b) Tính tỉ lệ khỏi bệnh chung trên toàn bộ bệnh nhân của phác đồ $X$ và phác đồ $Y$. Nêu nhận xét về kết quả này và giải thích nguyên nhân (Nghịch lý Simpson).

---

<details>
<summary><b>BẤM XEM ĐÁP ÁN VÀ BIỂU ĐIỂM CHI TIẾT ĐỀ KIỂM TRA</b></summary>

### Đáp án trắc nghiệm (3.0 điểm)
*Mỗi câu đúng: 0.5 điểm.*
1. **B** | 2. **C** | 3. **C** | 4. **B** | 5. **B** | 6. **B**

---

### Hướng dẫn chấm tự luận (7.0 điểm)

**Bài 1 (2.0 điểm):**
- a) Tên trường THCS: Dữ liệu định tính, không thể xếp thứ tự. *(0.5 điểm)*
- b) Điểm bài thi trắc nghiệm (thang 100): Dữ liệu định lượng, số đếm rời rạc. *(0.5 điểm)*
- c) Kích cỡ áo đồng phục: Dữ liệu định tính, có thể xếp thứ tự ($S < M < L < XL$). *(0.5 điểm)*
- d) Thời gian hoàn thành thử thách: Dữ liệu định lượng, số đo liên tục. *(0.5 điểm)*

**Bài 2 (2.0 điểm):**
- a) Tổng số gia đình trong bảng: $8 + 14 + 6 + 5 = 33$ gia đình.
  So với sĩ số $30$ bạn, số liệu này không khớp (thừa $3$ gia đình). *(1.0 điểm)*
- b) Các giá trị không hợp lý:
  + Số vật nuôi là $-2$ con: Vô lý vì số lượng vật nuôi không thể là số âm. *(0.5 điểm)*
  + Số lượng $150$ con gà: Đây là quy mô chăn nuôi trang trại kinh doanh, không phù hợp với phạm vi "vật nuôi gia đình" (thú cưng/vật nuôi hộ gia đình thông thường), làm lệch lạc bản chất thống kê. *(0.5 điểm)*

**Bài 3 (2.0 điểm):**
- a) Mẫu khảo sát này **không có tính đại diện** vì những bạn đến hiệu sách chuyên bán truyện tranh manga vào chiều thứ Bảy phần lớn đều là người đam mê truyện tranh. Kết quả chắc chắn sẽ nghiêng hẳn về truyện tranh, không phản ánh đúng ý kiến của các bạn thích đọc sách chữ, văn học, khoa học. *(1.0 điểm)*
- b) Đề xuất phương án tốt hơn:
  + Chọn ngẫu nhiên học sinh từ các trường tiểu học và THCS khác nhau trong thành phố.
  + Hoặc phát phiếu khảo sát trực tuyến qua các trường học với số lượng đồng đều giữa các quận, huyện. *(1.0 điểm)*

**Bài 4 (1.0 điểm):**
- a) Trong từng nhóm riêng lẻ:
  + Nhóm nhẹ: Phác đồ $X$ ($90\%$) tốt hơn phác đồ $Y$ ($80\%$). *(0.25 điểm)*
  + Nhóm nặng: Phác đồ $X$ ($50\%$) tốt hơn phác đồ $Y$ ($40\%$). *(0.25 điểm)*
- b) Tỉ lệ khỏi bệnh gộp chung:
  + Phác đồ $X$: $\frac{36 + 80}{40 + 160} = \frac{116}{200} = 58\%$. *(0.25 điểm)*
  + Phác đồ $Y$: $\frac{160 + 16}{200 + 40} = \frac{176}{240} \approx 73.3\%$. *(0.25 điểm)*
  - **Nhận xét & giải thích:** Dù phác đồ $X$ tốt hơn phác đồ $Y$ ở cả hai nhóm bệnh nhân, nhưng tỉ lệ khỏi bệnh chung của $X$ ($58\%$) lại thấp hơn $Y$ ($73.3\%$). Nguyên nhân là do phác đồ $X$ bị dùng chủ yếu cho bệnh nhân nặng ($160/200 = 80\%$ bệnh nhân nặng), trong khi phác đồ $Y$ được dùng chủ yếu cho bệnh nhân nhẹ ($200/240 \approx 83.3\%$ bệnh nhân nhẹ). Đây chính là **Nghịch lý Simpson**.
</details>
