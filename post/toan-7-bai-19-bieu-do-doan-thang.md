---
title: 'Bài 19: Biểu đồ đoạn thẳng - Lý thuyết, Cách vẽ, Phân tích xu hướng và 5 Chuyên đề Thực tế'
description: 'Làm chủ biểu đồ đoạn thẳng (Line Graph), nhận diện xu hướng biến thiên theo thời gian, cách vẽ chuẩn từng bước, so sánh biểu đồ đoạn thẳng kép và 5 chuyên đề thực tế kèm 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Thống kê 7
  - Biểu đồ đoạn thẳng
  - Phân tích xu hướng
  - Chuỗi thời gian
  - Kết nối tri thức
grade: 7
---

# Bài 19. Biểu đồ đoạn thẳng

Trong thời đại kinh tế số và trí tuệ nhân tạo, khả năng "nhìn thấu tương lai" bắt nguồn từ chính việc theo dõi quá khứ. Khi các bác sĩ theo dõi nhịp tim hay thân nhiệt của bệnh nhân trên màn hình monitor, khi các chuyên gia khí tượng dự báo biến đổi khí hậu qua hàng thập kỷ, hay khi các nhà đầu tư phân tích biểu đồ giá cổ phiếu, họ đều sử dụng một công cụ thống kê trực quan kinh điển: **Biểu đồ đoạn thẳng (Line Graph)**.

Nếu như biểu đồ hình quạt tròn giúp ta so sánh các phần của chiếc bánh trong một lát cắt tĩnh, thì biểu đồ đoạn thẳng lại là cuốn phim sống động ghi lại **sự biến thiên của dữ liệu theo dòng thời gian**. Những đoạn gấp khúc nối liền các điểm mốc cho ta thấy ngay lập tức nhịp đập của dữ liệu: khi nào tăng tốc, khi nào chạm đỉnh, khi nào suy thoái và khi nào tìm lại sự ổn định. Trong bài học này, chúng ta sẽ cùng khám phá toàn diện từ cấu tạo, phương pháp vẽ chuẩn xác bằng thước kẻ, cách đọc hiểu xu hướng và những ứng dụng thực tế sâu sắc của biểu đồ đoạn thẳng!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 19: BIỂU ĐỒ ĐOẠN THẲNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm & Cấu tạo</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu diễn sự thay đổi của một đại lượng theo thời gian.<br>• Trục ngang ($Ox$): Các mốc thời gian (ngày, tháng, năm...).<br>• Trục đứng ($Oy$): Giá trị của đại lượng quan sát.<br>• Các điểm biểu diễn và đường gấp khúc nối liên tiếp.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đọc & Phân tích xu hướng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đoạn đi lên: Đại lượng có xu hướng <strong>tăng</strong>.<br>• Đoạn đi xuống: Đại lượng có xu hướng <strong>giảm</strong>.<br>• Đoạn nằm ngang: Đại lượng <strong>không đổi / ổn định</strong>.<br>• Độ dốc càng lớn biểu thị tốc độ thay đổi càng nhanh.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Kỹ thuật vẽ chuẩn 4 bước</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• B1: Vẽ hai trục vuông góc, chia khoảng tỉ lệ hợp lý.<br>• B2: Xác định tọa độ từng điểm $(t_i, y_i)$.<br>• B3: Nối các điểm liên tiếp bằng đoạn thẳng.<br>• B4: Ghi số liệu, chú giải và tiêu đề biểu đồ.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biểu đồ đoạn thẳng kép</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Vẽ cùng lúc 2 đường (màu sắc/nét khác nhau) trên một hệ trục.<br>• Dùng để <strong>so sánh đối sánh</strong> xu hướng giữa hai đối tượng.<br>• Xác định thời điểm giao nhau (ngang bằng nhau).</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Các em hãy cùng thực hiện nhanh $5$ câu hỏi khởi động sau đây:

1. **Hiệu số và mức tăng giảm:** Giá bán một hộp sữa tăng từ $24$ nghìn đồng lên $30$ nghìn đồng. Số tiền tăng thêm là bao nhiêu và tăng bao nhiêu phần trăm so với giá ban đầu?
2. **Giá trị trung bình:** Nhiệt độ đo được vào các buổi trưa trong $4$ ngày liên tiếp lần lượt là $26^\circ\text{C}$, $28^\circ\text{C}$, $31^\circ\text{C}$, $27^\circ\text{C}$. Nhiệt độ trung bình trong $4$ ngày đó là bao nhiêu?
3. **Quan sát chiều dốc:** Khi đi từ trái sang phải trên đồ thị, một đoạn thẳng dốc lên trên biểu thị giá trị của đại lượng đang tăng lên hay giảm đi?
4. **Trục tọa độ:** Trong mặt phẳng tọa độ, nếu trục ngang biểu diễn mốc thời gian và trục đứng biểu diễn vận tốc, điểm $(3; 45)$ mang ý nghĩa gì?
5. **So sánh:** Tháng trước bạn An đọc được $8$ quyển sách, tháng này bạn đọc được $6$ quyển. Xu hướng đọc sách của bạn An trong tháng này là tăng hay giảm? Giảm đi mấy quyển?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   - Số tiền tăng thêm: $30 - 24 = 6$ nghìn đồng.
   - Tỉ lệ phần trăm tăng: $\frac{6}{24} \times 100\% = 25\%$.
2. **Trả lời:**
   - Nhiệt độ trung bình là: $\frac{26 + 28 + 31 + 27}{4} = \frac{112}{4} = 28^\circ\text{C}$.
3. **Trả lời:** Khi đi từ trái sang phải, đoạn thẳng dốc lên trên biểu thị giá trị của đại lượng đang **tăng lên**.
4. **Trả lời:** Điểm $(3; 45)$ có nghĩa là tại thời điểm $3$ giờ (hoặc mốc thứ $3$), vận tốc đạt $45\text{ km/h}$.
5. **Trả lời:** Xu hướng đọc sách của bạn An là **giảm**, giảm $8 - 6 = 2$ quyển (giảm $\frac{2}{8} \times 100\% = 25\%$).
</details>

---

## I. Lý thuyết trọng tâm

### 1. Khái niệm và Cấu tạo của Biểu đồ đoạn thẳng

> [!IMPORTANT]
> **ĐỊNH NGHĨA BIỂU ĐỒ ĐOẠN THẲNG:**
> **Biểu đồ đoạn thẳng** (Line Graph) là dạng biểu đồ sử dụng các đoạn thẳng nối liên tiếp các điểm mốc để biểu diễn **sự thay đổi của một đại lượng theo thời gian** (hoặc theo một tiêu chí có thứ tự liên tục).
>
> Cấu tạo chuẩn của một biểu đồ đoạn thẳng gồm:
> 1. **Trục ngang (trục hoành):** Biểu diễn các mốc thời gian (như ngày, tuần, tháng, quý, năm, giờ...).
> 2. **Trục đứng (trục tung):** Biểu diễn độ lớn (giá trị) của đại lượng cần khảo sát, kèm theo đơn vị đo thích hợp. Gốc tọa độ thường bắt đầu từ số $0$ (trừ trường hợp ghi chú ngắt quãng đặc biệt).
> 3. **Các điểm dữ liệu:** Mỗi điểm có tọa độ $(t_i; y_i)$, với $t_i$ là mốc thời gian và $y_i$ là số liệu đo được tại thời điểm đó.
> 4. **Đường gấp khúc:** Các đoạn thẳng nối liền các điểm dữ liệu liên tiếp theo trình tự thời gian từ trái sang phải.
> 5. **Tiêu đề và chú giải:** Tên gọi khái quát nội dung biểu đồ và giải thích ý nghĩa các đường biểu diễn (nếu có từ 2 đường trở lên).

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320" style="width: 100%; max-width: 600px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình 1: Cấu tạo biểu đồ đoạn thẳng chuẩn">
    <!-- Grid ngang -->
    <line x1="80" y1="240" x2="550" y2="240" stroke="#cbd5e1" stroke-width="1" />
    <line x1="80" y1="190" x2="550" y2="190" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
    <line x1="80" y1="140" x2="550" y2="140" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
    <line x1="80" y1="90" x2="550" y2="90" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
    <line x1="80" y1="40" x2="550" y2="40" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
    <!-- Trục Oy và Ox -->
    <line x1="80" y1="240" x2="80" y2="25" stroke="#334155" stroke-width="2" />
    <polygon points="80,20 76,32 84,32" fill="#334155" />
    <line x1="80" y1="240" x2="565" y2="240" stroke="#334155" stroke-width="2" />
    <polygon points="570,240 558,236 558,244" fill="#334155" />
    <!-- Nhãn trục -->
    <text x="565" y="260" font-size="12" font-weight="600" fill="#334155" text-anchor="end">Thời gian (Tháng)</text>
    <text x="75" y="18" font-size="12" font-weight="600" fill="#334155">Sản lượng (Tấn)</text>
    <!-- Số liệu trục Oy -->
    <text x="68" y="244" font-size="11" fill="#64748b" text-anchor="end">0</text>
    <text x="68" y="194" font-size="11" fill="#64748b" text-anchor="end">20</text>
    <text x="68" y="144" font-size="11" fill="#64748b" text-anchor="end">40</text>
    <text x="68" y="94" font-size="11" fill="#64748b" text-anchor="end">60</text>
    <text x="68" y="44" font-size="11" fill="#64748b" text-anchor="end">80</text>
    <!-- Mốc trục Ox: T1 (140), T2 (230), T3 (320), T4 (410), T5 (500) -->
    <!-- Giá trị: T1=25 (177.5), T2=45 (127.5), T3=40 (140), T4=70 (65), T5=60 (90) -->
    <line x1="140" y1="240" x2="140" y2="245" stroke="#334155" stroke-width="1.5" />
    <text x="140" y="260" font-size="12" fill="#475569" text-anchor="middle">T1</text>
    <line x1="230" y1="240" x2="230" y2="245" stroke="#334155" stroke-width="1.5" />
    <text x="230" y="260" font-size="12" fill="#475569" text-anchor="middle">T2</text>
    <line x1="320" y1="240" x2="320" y2="245" stroke="#334155" stroke-width="1.5" />
    <text x="320" y="260" font-size="12" fill="#475569" text-anchor="middle">T3</text>
    <line x1="410" y1="240" x2="410" y2="245" stroke="#334155" stroke-width="1.5" />
    <text x="410" y="260" font-size="12" fill="#475569" text-anchor="middle">T4</text>
    <line x1="500" y1="240" x2="500" y2="245" stroke="#334155" stroke-width="1.5" />
    <text x="500" y="260" font-size="12" fill="#475569" text-anchor="middle">T5</text>
    <!-- Đường biểu diễn -->
    <path d="M 140 177.5 L 230 127.5 L 320 140 L 410 65 L 500 90" fill="none" stroke="#2563eb" stroke-width="3" />
    <!-- Vùng phủ mờ dưới đường -->
    <path d="M 140 177.5 L 230 127.5 L 320 140 L 410 65 L 500 90 L 500 240 L 140 240 Z" fill="#3b82f6" fill-opacity="0.08" />
    <!-- Các điểm tròn & số liệu -->
    <circle cx="140" cy="177.5" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
    <text x="140" y="168" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">25</text>
    <circle cx="230" cy="127.5" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
    <text x="230" y="118" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">45</text>
    <circle cx="320" cy="140" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
    <text x="320" y="156" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">40</text>
    <circle cx="410" cy="65" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
    <text x="410" y="55" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">70</text>
    <circle cx="500" cy="90" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
    <text x="500" y="80" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">60</text>
    <text x="300" y="300" font-size="13" font-style="italic" fill="#475569" text-anchor="middle">Hình 1. Biểu đồ đoạn thẳng thể hiện sản lượng từ Tháng 1 đến Tháng 5</text>
  </svg>
</div>

---

### 2. Cách đọc hiểu và phân tích xu hướng trên biểu đồ đoạn thẳng

Khi quan sát một biểu đồ đoạn thẳng theo chiều thời gian từ trái sang phải, ta cần chú ý đến $4$ trạng thái động học chính:

1. **Xu hướng tăng (Đoạn dốc lên):** Điểm sau cao hơn điểm trước ($y_{i+1} > y_i$).
   - Mức tăng tuyệt đối: $\Delta y = y_{i+1} - y_i$.
   - Tốc độ tăng trưởng phần trăm: $\text{Tốc độ tăng} = \frac{y_{i+1} - y_i}{y_i} \times 100\%$.
2. **Xu hướng giảm (Đoạn dốc xuống):** Điểm sau thấp hơn điểm trước ($y_{i+1} < y_i$).
   - Mức giảm tuyệt đối: $\Delta y = y_i - y_{i+1}$.
   - Tỉ lệ phần trăm giảm: $\text{Tỉ lệ giảm} = \frac{y_i - y_{i+1}}{y_i} \times 100\%$.
3. **Xu hướng đi ngang / Ổn định (Đoạn nằm ngang):** Điểm sau bằng điểm trước ($y_{i+1} = y_i$). Đại lượng không có sự biến động trong khoảng thời gian này.
4. **Độ dốc (Độ nghiêng của đoạn thẳng):**
   - Đoạn thẳng càng dốc đứng thì đại lượng biến thiên **càng nhanh**.
   - Đoạn thẳng càng thoai thoải thì đại lượng biến thiên **càng chậm**.

---

### 3. Quy trình 4 bước vẽ biểu đồ đoạn thẳng chuẩn xác

Để vẽ biểu đồ đoạn thẳng chính xác từ bảng số liệu thống kê, ta thực hiện theo các bước sau:

> [!TIP]
> **4 BƯỚC THIẾT LẬP BIỂU ĐỒ ĐOẠN THẲNG:**
> - **Bước 1: Vẽ hệ trục tọa độ vuông góc.**
>   + Trục ngang $Ox$: Chia khoảng cách đều nhau cho các mốc thời gian.
>   + Trục đứng $Oy$: Chọn giá trị lớn nhất sao cho bao quát được dữ liệu lớn nhất trong bảng, chia các vạch tỉ lệ đều đặn (bội số của $5, 10, 20, 50, 100$...).
> - **Bước 2: Chấm các điểm dữ liệu.**
>   + Với mỗi mốc thời gian $t_i$, dóng thẳng đứng lên gặp giá trị $y_i$ tương ứng trên trục tung và đánh dấu chấm tròn rõ ràng.
> - **Bước 3: Nối các đoạn thẳng.**
>   + Dùng thước thẳng nối liên tiếp các điểm mốc từ điểm đầu tiên đến điểm cuối cùng theo thứ tự thời gian.
> - **Bước 4: Hoàn thiện biểu đồ.**
>   + Ghi giá trị số liệu cụ thể ngay phía trên (hoặc bên cạnh) từng điểm.
>   + Ghi rõ tên trục, đơn vị đo, chú giải (nếu có) và tiêu đề biểu đồ.

---

### 4. Biểu đồ đoạn thẳng kép (So sánh đối kháng)

Khi muốn khảo sát và so sánh sự thay đổi của **hai đại lượng cùng loại** (hoặc hai đối tượng khác nhau) trên cùng một giai đoạn thời gian (ví dụ: so sánh doanh số hai chi nhánh, lượng mưa hai miền, điểm số hai môn học), ta vẽ **biểu đồ đoạn thẳng kép**.

- Mỗi đối tượng được vẽ bằng một đường có **màu sắc** hoặc **kiểu nét** khác nhau (ví dụ: nét liền màu xanh vs nét đứt màu đỏ).
- Phải có bảng **Chú giải (Legend)** rõ ràng ở góc biểu đồ.
- Điểm giao nhau giữa hai đường biểu thị thời điểm mà hai đối tượng đạt giá trị ngang bằng nhau.

---

## II. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Đọc và khai thác thông tin cơ bản từ biểu đồ đoạn thẳng

**Phương pháp giải:**
1. Đọc kỹ tiêu đề và đơn vị trên hai trục để hiểu rõ đối tượng khảo sát.
2. Tìm giá trị lớn nhất (đỉnh cao nhất), giá trị nhỏ nhất (đáy thấp nhất) của biểu đồ.
3. Tìm thời điểm bắt đầu, thời điểm kết thúc và giá trị tại các mốc cụ thể theo yêu cầu.

---

#### Bài toán 1 (Thực tế): Giám sát điện năng tiêu thụ hộ gia đình
Biểu đồ đoạn thẳng dưới đây ghi lại lượng điện năng tiêu thụ (đơn vị: $\text{kWh}$) của gia đình bác Hùng trong $6$ tháng đầu năm 2026:

| Tháng | Tháng 1 | Tháng 2 | Tháng 3 | Tháng 4 | Tháng 5 | Tháng 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Điện năng ($\text{kWh}$) | $180$ | $160$ | $210$ | $250$ | $340$ | $390$ |

a) Tháng nào gia đình bác Hùng tiêu thụ điện ít nhất? Tháng nào tiêu thụ nhiều nhất?
b) Tính tổng lượng điện năng gia đình tiêu thụ trong cả $6$ tháng.
c) Lượng điện năng tiêu thụ trung bình mỗi tháng là bao nhiêu $\text{kWh}$?

**Lời giải:**

a) Quan sát bảng số liệu và các mốc trên biểu đồ:
- Giá trị thấp nhất là $160\text{ kWh}$, đạt được vào **Tháng 2**.
- Giá trị cao nhất là $390\text{ kWh}$, đạt được vào **Tháng 6**.

b) Tổng lượng điện năng tiêu thụ trong $6$ tháng là:
$$S = 180 + 160 + 210 + 250 + 340 + 390 = 1530\text{ (kWh)}$$

c) Lượng điện tiêu thụ trung bình mỗi tháng trong nửa đầu năm là:
$$\bar{X} = \frac{1530}{6} = 255\text{ (kWh/tháng)}$$

---

### Dạng 2: Phân tích xu hướng và tính tốc độ tăng trưởng qua các giai đoạn

**Phương pháp giải:**
1. Xác định giai đoạn tăng (đoạn dốc lên) và giai đoạn giảm (đoạn dốc xuống).
2. Tính độ biến thiên tuyệt đối: $\Delta y = y_{\text{sau}} - y_{\text{trước}}$.
3. Tính tỉ lệ tăng trưởng phần trăm: $\frac{y_{\text{sau}} - y_{\text{trước}}}{y_{\text{trước}}} \times 100\%$.
4. So sánh các đoạn thẳng để xác định thời kỳ tăng tốc mạnh nhất hoặc giảm sâu nhất.

---

#### Bài toán 2: Phân tích tăng trưởng của một gian hàng sách trực tuyến
Bảng số liệu thống kê doanh thu (đơn vị: triệu đồng) của một gian hàng sách thiếu nhi trực tuyến trong $5$ quý liên tiếp:

| Quý | Quý 1/2025 | Quý 2/2025 | Quý 3/2025 | Quý 4/2025 | Quý 1/2026 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Doanh thu (triệu đồng) | $80$ | $120$ | $105$ | $168$ | $180$ |

a) Doanh thu của gian hàng tăng trong những khoảng thời gian nào? Giảm trong khoảng thời gian nào?
b) Trong khoảng thời gian từ Quý 3/2025 đến Quý 4/2025, doanh thu tăng thêm bao nhiêu triệu đồng và tăng bao nhiêu phần trăm?
c) Giai đoạn nào có mức tăng doanh thu tuyệt đối lớn nhất?

**Lời giải:**

a) Nhận xét xu hướng:
- Từ Quý 1/2025 đến Quý 2/2025: Doanh thu tăng từ $80$ lên $120$ triệu đồng.
- Từ Quý 2/2025 đến Quý 3/2025: Doanh thu giảm từ $120$ xuống $105$ triệu đồng.
- Từ Quý 3/2025 đến Quý 4/2025: Doanh thu tăng từ $105$ lên $168$ triệu đồng.
- Từ Quý 4/2025 đến Quý 1/2026: Doanh thu tăng từ $168$ lên $180$ triệu đồng.
- **Kết luận:** Doanh thu tăng trong các khoảng: (Quý 1 $\to$ Quý 2/2025), (Quý 3 $\to$ Quý 4/2025) và (Quý 4/2025 $\to$ Quý 1/2026). Doanh thu giảm trong khoảng (Quý 2 $\to$ Quý 3/2025).

b) Từ Quý 3/2025 đến Quý 4/2025:
- Mức tăng tuyệt đối là: $168 - 105 = 63\text{ (triệu đồng)}$.
- Tỉ lệ phần trăm tăng trưởng là:
$$\frac{63}{105} \times 100\% = 60\%$$

c) So sánh mức tăng doanh thu tuyệt đối giữa các quý tăng:
- Quý 1 $\to$ Quý 2/2025: Tăng $120 - 80 = 40$ triệu đồng.
- Quý 3 $\to$ Quý 4/2025: Tăng $168 - 105 = 63$ triệu đồng.
- Quý 4/2025 $\to$ Quý 1/2026: Tăng $180 - 168 = 12$ triệu đồng.
- **Kết luận:** Giai đoạn từ **Quý 3/2025 đến Quý 4/2025** có mức tăng doanh thu tuyệt đối lớn nhất ($63$ triệu đồng).

---

### Dạng 3: So sánh dữ liệu trên biểu đồ đoạn thẳng kép

**Phương pháp giải:**
1. Phân biệt rõ hai đường tương ứng với hai đối tượng qua màu sắc hoặc nét vẽ.
2. Tại mỗi mốc thời gian, so sánh tung độ hai điểm: điểm nào ở trên thì đối tượng đó có giá trị lớn hơn.
3. Xác định độ chênh lệch: $\text{Chênh lệch} = y_A - y_B$.
4. Tìm giao điểm (nếu có): tại đó giá trị hai đối tượng bằng nhau.

---

#### Bài toán 3: So sánh nhiệt độ ngày và đêm tại thị xã Sa Pa
Biểu đồ đoạn thẳng kép ghi lại nhiệt độ cao nhất vào ban ngày và nhiệt độ thấp nhất vào ban đêm (đơn vị: $^\circ\text{C}$) tại Sa Pa trong $5$ ngày đầu tháng 1:

| Ngày | Ngày 1 | Ngày 2 | Ngày 3 | Ngày 4 | Ngày 5 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Ngày ($^\circ\text{C}$) | $14$ | $16$ | $13$ | $11$ | $15$ |
| Đêm ($^\circ\text{C}$) | $6$ | $7$ | $4$ | $2$ | $5$ |

a) Ngày nào có nhiệt độ ban ngày cao nhất? Ngày nào có nhiệt độ ban đêm thấp nhất?
b) Tính biên độ nhiệt (chênh lệch giữa nhiệt độ ngày và đêm) trong từng ngày. Ngày nào biên độ nhiệt lớn nhất?
c) Xu hướng nhiệt độ từ Ngày 2 đến Ngày 4 là tăng hay giảm ở cả ngày và đêm?

**Lời giải:**

a) Quan sát bảng số liệu:
- Nhiệt độ ban ngày cao nhất là $16^\circ\text{C}$ vào **Ngày 2**.
- Nhiệt độ ban đêm thấp nhất là $2^\circ\text{C}$ vào **Ngày 4**.

b) Biên độ nhiệt (Nhiệt độ ngày trừ nhiệt độ đêm) của từng ngày:
- Ngày 1: $14 - 6 = 8^\circ\text{C}$.
- Ngày 2: $16 - 7 = 9^\circ\text{C}$.
- Ngày 3: $13 - 4 = 9^\circ\text{C}$.
- Ngày 4: $11 - 2 = 9^\circ\text{C}$.
- Ngày 5: $15 - 5 = 10^\circ\text{C}$.
- **Kết luận:** Ngày 5 có biên độ nhiệt ngày - đêm lớn nhất ($10^\circ\text{C}$).

c) Từ Ngày 2 đến Ngày 4:
- Ban ngày: giảm từ $16^\circ\text{C} \to 13^\circ\text{C} \to 11^\circ\text{C}$.
- Ban đêm: giảm từ $7^\circ\text{C} \to 4^\circ\text{C} \to 2^\circ\text{C}$.
- **Kết luận:** Cả nhiệt độ ngày và đêm đều có **xu hướng giảm liên tục** từ Ngày 2 đến Ngày 4 (dấu hiệu của một đợt không khí lạnh tăng cường).

---

### Dạng 4: Lựa chọn loại biểu đồ phù hợp và phát hiện biểu đồ không hợp lý

**Phương pháp giải:**
- **Khi nào chọn biểu đồ đoạn thẳng?** Khi dữ liệu biểu diễn sự thay đổi, phát triển hoặc diễn biến của một đại lượng **liên tục theo thời gian**.
- **Khi nào chọn biểu đồ quạt tròn?** Khi muốn so sánh tỉ lệ phần trăm các thành phần trong một tổng thể cố định ($100\%$).
- **Khi nào chọn biểu đồ cột?** Khi muốn so sánh quy mô, số lượng của các nhóm đối tượng độc lập không phụ thuộc thời gian tuần tự.
- **Biểu đồ đoạn thẳng không hợp lý khi:**
  + Dữ liệu trục hoành không có tính thứ tự liên tục (ví dụ: các món ăn yêu thích, các tỉnh thành độc lập).
  + Trục tung bị ngắt quãng hoặc tỉ lệ không đều gây bóp méo cảm nhận thị giác.

---

## III. 5 Chuyên đề Thực tế và Mở rộng Tư duy Khoa học

### Chuyên đề 1: Hiện tượng "Trục tung đứt gãy" (Truncated Graph) và Cạm bẫy ngụy biện thị giác

Trong truyền thông và báo chí tài chính, một chiêu trò trực quan hóa thường gặp là **cắt xén trục tung** (không bắt đầu từ số $0$).

> [!WARNING]
> **BẪY TRỤC TUNG BỊ CẮT XÉN:**
> Giả sử doanh thu một công ty trong 2 năm lần lượt là $100$ tỉ và $105$ tỉ đồng (chỉ tăng $5\%$).
> - Nếu trục đứng bắt đầu từ $0$ đến $120$ tỉ: Đường đoạn thẳng chỉ hơi nhích lên một chút, phản ánh đúng mức tăng nhẹ.
> - Nếu người vẽ cố tình bắt đầu trục đứng từ $98$ tỉ đến $106$ tỉ: Khoảng cách từ $100$ lên $105$ sẽ kéo dài gần trọn chiều cao biểu đồ! Người xem nhìn vào có cảm giác doanh thu "tăng vọt gấp nhiều lần", dẫn đến nhận định sai lầm nghiêm trọng.

Khi phân tích biểu đồ đoạn thẳng trong thực tế, các em luôn phải kiểm tra vạch số $0$ trên trục tung và xem xét tỉ lệ xích để không bị đánh lừa bởi cảm giác thị giác!

---

### Chuyên đề 2: Đường Trung bình động (Moving Average) — Khử nhiễu dữ liệu trong Khoa học Dữ liệu

Trong thực tế, số liệu hàng ngày (như giá vàng, số ca nhiễm bệnh, lượng người truy cập website) thường dao động lên xuống thất thường từng ngày do các yếu tố ngẫu nhiên (nhiễu - noise). Để tìm ra **xu hướng thực sự (Trend)**, các nhà khoa học dữ liệu sử dụng kỹ thuật **Đường trung bình động (Moving Average - MA)**.

Ví dụ, trung bình động $3$ ngày (MA3) tại ngày thứ $t$ là trung bình cộng của số liệu $3$ ngày liên tiếp:
$$\text{MA3}_t = \frac{y_{t-2} + y_{t-1} + y_t}{3}$$

Đường trung bình động sẽ mượt mà hơn, triệt tiêu các đợt giật cục ngắn hạn và làm lộ rõ xu hướng chủ đạo dài hạn (tăng, giảm hay đi ngang).

---

### Chuyên đề 3: Tốc độ thay đổi và Khái niệm Đạo hàm sơ khai

Trong toán học cao cấp, tốc độ thay đổi tức thời của một đại lượng chính là **Đạo hàm**. Biểu đồ đoạn thẳng ở lớp 7 chính là hình ảnh trực quan đầu tiên về đạo hàm!

Xét một đoạn thẳng nối điểm $A(t_1, y_1)$ và $B(t_2, y_2)$:
- Lượng thời gian trôi qua: $\Delta t = t_2 - t_1$.
- Độ biến thiên giá trị: $\Delta y = y_2 - y_1$.
- **Hệ số góc (độ dốc) của đoạn thẳng:**
$$m = \frac{\Delta y}{\Delta t} = \frac{y_2 - y_1}{t_2 - t_1}$$

- Nếu $m > 0$: Đại lượng tăng (hàm đồng biến). Giá trị $m$ càng lớn thì tốc độ tăng càng thần tốc.
- Nếu $m < 0$: Đại lượng giảm (hàm nghịch biến).
- Nếu $m = 0$: Đại lượng đứng yên.

---

### Chuyên đề 4: Tương quan giả (Spurious Correlation) trong biểu đồ chuỗi thời gian

Một lỗi tư duy phổ biến khi quan sát biểu đồ đoạn thẳng kép là ngộ nhận: **"Hai đường đi cùng chiều thì cái này gây ra cái kia" (Correlation does not imply Causation)**.

Nhà thống kê Tyler Vigen đã đưa ra nhiều ví dụ hài hước nhưng sâu sắc: Biểu đồ số lượng phim Nicolas Cage đóng mỗi năm và biểu đồ số người chết đuối trong bể bơi ở Mỹ từ năm 1999 đến 2009 có hình dạng trùng khít nhau gần như hoàn hảo! Tuy nhiên, rõ ràng việc Nicolas Cage đóng phim hoàn toàn không liên quan gì đến việc đuối nước. Cả hai đường cùng tăng có thể do sự trùng hợp ngẫu nhiên hoặc do một yếu tố thứ ba (như dân số tăng).

Người làm toán có tư duy phản biện sắc bén sẽ luôn phân biệt giữa **mối liên hệ tương quan về hình vẽ** và **quan hệ nhân quả thực tế**.

---

### Chuyên đề 5: Biểu đồ đoạn thẳng trong Hệ thống Giám sát Real-time & Dashboard

Khi các em truy cập Task Manager trên máy tính Windows hoặc Activity Monitor trên máy Mac, các em sẽ thấy biểu đồ mức sử dụng CPU và RAM chạy liên tục theo từng giây. Đó chính là biểu đồ đoạn thẳng thời gian thực (Real-time Line Chart).

Trong thời đại Internet of Things (IoT) và Điện toán đám mây:
- Hàng triệu cảm biến nhiệt độ trong các nhà máy thông minh truyền dữ liệu về máy chủ mỗi giây.
- Biểu đồ đoạn thẳng được lập trình tự động vẽ lại. Nếu đường biểu diễn vượt qua một ngưỡng an toàn (Threshold Line), hệ thống sẽ lập tức kích hoạt chuông báo động hoặc tự động ngắt điện để phòng ngừa hỏa hoạn.

---

## IV. Bài tập Trắc nghiệm Tương tác (10 câu hỏi)

Hãy kiểm tra năng lực đọc hiểu và phân tích biểu đồ đoạn thẳng qua $10$ câu hỏi trắc nghiệm dưới đây:

````quiz
title: Kiểm tra kiến thức Biểu đồ đoạn thẳng (Toán 7 - Bài 19)
questions:
  - question: Biểu đồ đoạn thẳng là công cụ trực quan thích hợp nhất để biểu diễn nội dung nào sau đây?
    options:
      - Cơ cấu các loại quả trong một vườn cây ăn trái.
      - Sự thay đổi nhiệt độ của một bệnh nhân theo từng giờ trong ngày.
      - So sánh số lượng học sinh giỏi giữa các khối 6, 7, 8, 9.
      - Tỉ lệ phần trăm thị phần của các hãng điện thoại trong năm 2026.
    answer: 1
    hint: Biểu đồ đoạn thẳng chuyên dùng để theo dõi sự biến thiên của dữ liệu theo chuỗi thời gian.
    explanation: Biểu đồ đoạn thẳng thích hợp nhất để biểu diễn sự thay đổi của một đại lượng theo thời gian (ở đây là nhiệt độ bệnh nhân theo từng giờ).

  - question: Trong biểu đồ đoạn thẳng chuẩn, trục nằm ngang thường dùng để biểu diễn yếu tố nào?
    options:
      - Giá trị số liệu đo được.
      - Tỉ lệ phần trăm.
      - Các mốc thời gian.
      - Tên của biểu đồ.
    answer: 2
    hint: Trục hoành là trục chạy từ quá khứ đến hiện tại/tương lai.
    explanation: Trục ngang (trục hoành) luôn biểu diễn các mốc thời gian (ngày, tháng, năm, giờ...).

  - question: Trên biểu đồ đoạn thẳng, nếu đoạn thẳng nối giữa hai thời điểm dốc xuống từ trái sang phải, điều đó biểu thị xu hướng gì?
    options:
      - Đại lượng tăng lên.
      - Đại lượng giảm đi.
      - Đại lượng không thay đổi.
      - Dữ liệu bị ghi chép sai.
    answer: 1
    hint: Khi đi từ trái sang phải, chiều dốc đi xuống tương ứng giá trị sau nhỏ hơn giá trị trước.
    explanation: Đoạn dốc xuống biểu thị giá trị của đại lượng có xu hướng giảm đi trong khoảng thời gian đó.

  - question: Lượng mưa tại một trạm đo trong 4 tháng lần lượt là 50 mm, 80 mm, 120 mm, 90 mm. Trong giai đoạn nào lượng mưa tăng nhanh nhất?
    options:
      - Từ tháng 1 đến tháng 2.
      - Từ tháng 2 đến tháng 3.
      - Từ tháng 3 đến tháng 4.
      - Tăng đều nhau ở tất cả các giai đoạn.
    answer: 1
    hint: So sánh mức tăng tuyệt đối: tháng 1 -> 2 tăng 30 mm; tháng 2 -> 3 tăng 40 mm.
    explanation: Từ tháng 1 đến tháng 2 tăng 80 - 50 = 30 mm. Từ tháng 2 đến tháng 3 tăng 120 - 80 = 40 mm. Vậy từ tháng 2 đến tháng 3 lượng mưa tăng nhanh nhất.

  - question: Trên biểu đồ đoạn thẳng, một đoạn thẳng nằm ngang song song với trục hoành có ý nghĩa gì?
    options:
      - Đại lượng đạt giá trị bằng 0.
      - Đại lượng tăng đột biến.
      - Đại lượng không thay đổi (ổn định) trong giai đoạn đó.
      - Không đủ dữ liệu để kết luận.
    answer: 2
    hint: Nằm ngang nghĩa là giá trị tại thời điểm sau bằng thời điểm trước.
    explanation: Đoạn thẳng nằm ngang biểu thị giá trị của đại lượng giữ nguyên, không đổi trong khoảng thời gian đó.

  - question: Doanh thu một cửa hàng trong 2 tháng liên tiếp là 40 triệu đồng và 50 triệu đồng. Tốc độ tăng trưởng doanh thu trong tháng thứ hai là bao nhiêu?
    options:
      - 10%
      - 20%
      - 25%
      - 125%
    answer: 2
    hint: Tính tỉ số giữa mức tăng thêm và giá trị ban đầu nhân 100%.
    explanation: Mức tăng thêm là 50 - 40 = 10 triệu. Tốc độ tăng trưởng là (10 / 40) * 100% = 25%.

  - question: Hiện tượng "cắt xén trục tung" (không bắt đầu từ số 0) trong biểu đồ đoạn thẳng thường dẫn đến hậu quả gì?
    options:
      - Làm cho biểu đồ trở nên chính xác hơn.
      - Tạo ảo giác thị giác phóng đại mức độ biến động của dữ liệu.
      - Làm giảm kích thước file hình ảnh.
      - Khiến các đường biểu diễn không thể nối với nhau.
    answer: 1
    hint: Xem lại Chuyên đề 1 về Truncated Graph.
    explanation: Cắt xén trục tung khiến cho những biến động rất nhỏ trông như những cú tăng/giảm vọt khổng lồ, đánh lừa thị giác người đọc.

  - question: Biểu đồ đoạn thẳng kép thường được sử dụng nhằm mục đích chính nào?
    options:
      - Biểu diễn tổng số của 100 đối tượng khác nhau.
      - So sánh xu hướng phát triển theo thời gian giữa hai đối tượng cùng loại.
      - Thay thế hoàn toàn cho biểu đồ hình quạt tròn.
      - Tính diện tích của hình phẳng dưới đường cong.
    answer: 1
    hint: Đoạn thẳng kép có 2 đường vẽ chung trên một hệ trục.
    explanation: Biểu đồ đoạn thẳng kép dùng để đối chiếu, so sánh sự biến thiên theo thời gian giữa hai đối tượng (như doanh thu 2 chi nhánh, nhiệt độ 2 thành phố).

  - question: Dãy số liệu nhiệt độ trong 3 ngày là 20°C, 24°C, 28°C. Giá trị trung bình động 3 ngày (MA3) tại ngày thứ 3 là bao nhiêu?
    options:
      - 22°C
      - 24°C
      - 26°C
      - 28°C
    answer: 1
    hint: Trung bình động 3 ngày là trung bình cộng của 3 giá trị liên tiếp.
    explanation: MA3 = (20 + 24 + 28) / 3 = 72 / 3 = 24°C.

  - question: Trường hợp nào sau đây KHÔNG NÊN dùng biểu đồ đoạn thẳng để biểu diễn?
    options:
      - Giá vàng biến động qua các ngày trong tuần.
      - Chiều cao của một học sinh đo vào mỗi dịp sinh nhật từ 1 đến 12 tuổi.
      - Số lượng vé xem phim bán được của các rạp chiếu phim khác nhau tại TP.HCM trong ngày hôm nay.
      - Lượng điện tiêu thụ hàng tháng của một nhà máy sản xuất.
    answer: 2
    hint: Kiểm tra xem các đối tượng khảo sát có mang tính thời gian liên tục hay là các địa điểm độc lập.
    explanation: Danh sách các rạp chiếu phim khác nhau là các đối tượng độc lập, không có tính thứ tự liên tục theo thời gian, do đó nên dùng biểu đồ cột chứ không được dùng biểu đồ đoạn thẳng.
````

---

## V. Đề kiểm tra 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Biểu đồ đoạn thẳng** | $4$ câu TN ($2.0\text{ đ}$) | $2$ câu TN ($1.0\text{ đ}$) + TL1 ($2.0\text{ đ}$) | TL2 ($3.0\text{ đ}$) | TL3 ($2.0\text{ đ}$) | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm. Học sinh chọn đáp án đúng nhất)*

**Câu 1:** Để biểu diễn sự thay đổi dân số Việt Nam qua các cuộc tổng điều tra dân số các năm 1989, 1999, 2009, 2019, biểu đồ nào sau đây là phù hợp nhất?
- A. Biểu đồ hình quạt tròn.
- B. Biểu đồ đoạn thẳng.
- C. Biểu đồ tranh.
- D. Biểu đồ Venn.

**Câu 2:** Trên biểu đồ đoạn thẳng, tọa độ $(2024; 85)$ có nghĩa là:
- A. Năm 2024 tăng $85$ đơn vị so với năm trước.
- B. Tại năm 2024, giá trị của đại lượng đạt $85$ đơn vị.
- C. Đại lượng đạt giá trị cao nhất tại mốc $2024$.
- D. Tỉ lệ tăng trưởng của năm 2024 là $85\%$.

**Câu 3:** Khi quan sát một đoạn thẳng trên biểu đồ, nếu đoạn thẳng nối giữa tháng 3 và tháng 4 dốc đứng hơn đoạn nối giữa tháng 4 và tháng 5, ta kết luận:
- A. Tháng 3 có số liệu cao hơn tháng 4.
- B. Tốc độ biến thiên trong giai đoạn (tháng 3 $\to$ tháng 4) nhanh hơn giai đoạn (tháng 4 $\to$ tháng 5).
- C. Tháng 5 có số liệu thấp nhất.
- D. Không thể so sánh được tốc độ.

**Câu 4:** Giá trị một mặt hàng trong 3 quý liên tiếp là $50$, $60$, $45$ (triệu đồng). Xu hướng từ Quý 1 đến Quý 3 là:
- A. Tăng liên tục.
- B. Giảm liên tục.
- C. Tăng trong quý 2 rồi giảm trong quý 3.
- D. Không đổi.

**Câu 5:** Một cửa hàng bán được $120$ chiếc xe máy trong năm 2024 và $150$ chiếc trong năm 2025. Tỉ lệ phần trăm tăng trưởng số xe bán được là:
- A. $20\%$
- B. $25\%$
- C. $30\%$
- D. $125\%$

**Câu 6:** Khi hai đường trên biểu đồ đoạn thẳng kép cắt nhau tại điểm $M(T_3; 80)$, điều đó chứng tỏ:
- A. Tại thời điểm $T_3$, cả hai đối tượng đều đạt giá trị bằng nhau và bằng $80$.
- B. Cả hai đối tượng đều đạt đỉnh cao nhất tại $T_3$.
- C. Đối tượng 1 tăng, đối tượng 2 giảm.
- D. Tổng giá trị của hai đối tượng tại $T_3$ bằng $80$.

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($2.0$ điểm):**
Bảng số liệu ghi lại số lượng xe đạp điện một đại lý bán được trong $4$ quý năm 2025:

| Quý | Quý 1 | Quý 2 | Quý 3 | Quý 4 |
| :---: | :---: | :---: | :---: | :---: |
| Số lượng xe (chiếc) | $45$ | $60$ | $90$ | $75$ |

a) ($1.0$ điểm) Tính tổng số xe đạp điện đại lý bán được trong cả năm 2025 và số xe bán trung bình mỗi quý.
b) ($1.0$ điểm) Trong quý nào số lượng xe bán được tăng nhiều nhất so với quý liền trước? Tính tỉ lệ phần trăm tăng của quý đó.

**Bài 2 ($3.0$ điểm):**
Cho bảng số liệu về điểm kiểm tra định kỳ môn Toán của hai bạn Minh và Hoàng trong $5$ bài kiểm tra liên tiếp:

| Bài kiểm tra | Bài 1 | Bài 2 | Bài 3 | Bài 4 | Bài 5 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Điểm của Minh | $6.5$ | $7.0$ | $8.0$ | $8.5$ | $9.0$ |
| Điểm của Hoàng | $9.0$ | $8.5$ | $8.0$ | $7.5$ | $8.0$ |

a) ($1.5$ điểm) Nhận xét về xu hướng học tập (tiến bộ hay giảm sút) của mỗi bạn qua $5$ bài kiểm tra.
b) ($1.0$ điểm) Ở bài kiểm tra số mấy thì điểm của hai bạn bằng nhau?
c) ($0.5$ điểm) Tính điểm trung bình môn Toán qua $5$ bài kiểm tra của mỗi bạn và cho biết bạn nào có kết quả bình quân cao hơn.

**Bài 3 ($2.0$ điểm - Vận dụng cao):**
Một công ty khởi nghiệp công nghệ theo dõi lượng người dùng mới (đơn vị: nghìn người) trong $5$ tháng đầu năm: Tháng 1 ($10$), Tháng 2 ($15$), Tháng 3 ($20$), Tháng 4 ($25$), Tháng 5 ($30$).
a) ($1.0$ điểm) Dự đoán xu hướng lượng người dùng mới trong tháng 6 nếu tốc độ tăng trưởng ổn định như các tháng trước.
b) ($1.0$ điểm) Tính chuỗi trung bình động $3$ tháng (MA3) cho Tháng 3, Tháng 4 và Tháng 5. Nêu ý nghĩa của việc so sánh giá trị thực tế với đường trung bình động.

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B \| 2. B \| 3. B \| 4. C \| 5. B \| 6. A** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | - Tổng số xe bán được: $45 + 60 + 90 + 75 = 270$ (chiếc).<br>- Số xe bán trung bình mỗi quý: $\frac{270}{4} = 67.5$ (chiếc/quý). | $0.5$ đ<br>$0.5$ đ |
| **Bài 1b** | - Mức tăng Quý 1 $\to$ Quý 2: $60 - 45 = 15$ chiếc.<br>- Mức tăng Quý 2 $\to$ Quý 3: $90 - 60 = 30$ chiếc.<br>- Quý 3 $\to$ Quý 4 giảm $15$ chiếc.<br>$\implies$ **Quý 3** tăng nhiều nhất ($30$ chiếc).<br>- Tỉ lệ tăng của Quý 3 so với Quý 2: $\frac{30}{60} \times 100\% = 50\%$. | $0.5$ đ<br><br>$0.5$ đ |
| **Bài 2a** | - Bạn Minh: Điểm số tăng liên tục từ $6.5 \to 7.0 \to 8.0 \to 8.5 \to 9.0$. Xu hướng học tập ngày càng **tiến bộ vững chắc**.<br>- Bạn Hoàng: Điểm số giảm dần từ bài 1 đến bài 4 ($9.0 \to 8.5 \to 8.0 \to 7.5$), sau đó hồi phục nhẹ ở bài 5 ($8.0$). Xu hướng có phần **chững lại và biến động**. | $0.75$ đ<br><br>$0.75$ đ |
| **Bài 2b** | Ở **Bài kiểm tra số 3**, điểm của hai bạn bằng nhau (cùng đạt $8.0$ điểm). Đây chính là giao điểm của hai đường trên biểu đồ đoạn thẳng kép. | $1.0$ đ |
| **Bài 2c** | - Điểm trung bình của Minh: $\frac{6.5 + 7.0 + 8.0 + 8.5 + 9.0}{5} = \frac{39.0}{5} = 7.8$.<br>- Điểm trung bình của Hoàng: $\frac{9.0 + 8.5 + 8.0 + 7.5 + 8.0}{5} = \frac{41.0}{5} = 8.2$.<br>- Kết luận: Bạn Hoàng có điểm trung bình cao hơn Minh ($8.2 > 7.8$). | $0.25$ đ<br>$0.25$ đ |
| **Bài 3a** | - Nhận xét: Mỗi tháng lượng người dùng tăng thêm đúng: $15 - 10 = 20 - 15 = 25 - 20 = 30 - 25 = 5$ nghìn người.<br>- Dự đoán lượng người dùng mới trong Tháng 6 là: $30 + 5 = 35$ nghìn người. | $0.5$ đ<br>$0.5$ đ |
| **Bài 3b** | - $\text{MA3}(\text{Tháng 3}) = \frac{10 + 15 + 20}{3} = \frac{45}{3} = 15$ nghìn người.<br>- $\text{MA3}(\text{Tháng 4}) = \frac{15 + 20 + 25}{3} = \frac{60}{3} = 20$ nghìn người.<br>- $\text{MA3}(\text{Tháng 5}) = \frac{20 + 25 + 30}{3} = \frac{75}{3} = 25$ nghìn người.<br>- Ý nghĩa: Đường trung bình động giúp làm phẳng các nhiễu ngẫu nhiên, cho thấy rõ xu hướng tăng trưởng tuyến tính vững chắc của doanh nghiệp. | $0.5$ đ<br><br><br>$0.5$ đ |
