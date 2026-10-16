---
title: 'Toán 8 Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ'
description: 'Làm chủ kỹ năng Phân tích số liệu thống kê dựa vào biểu đồ Toán 8 Bài 20: Đọc và giải thích dữ liệu, nhận xét xu hướng biến động, tính tốc độ tăng trưởng, so sánh và rút ra kết luận thực tiễn, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Thống kê 8
  - Phân tích số liệu
  - Phân tích biểu đồ
  - Xu thế dữ liệu
  - Nhận xét thống kê
  - Kết nối tri thức
grade: 8
---

# Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ

Biểu đồ thống kê sinh ra không phải chỉ để ngắm nhìn hay trang trí báo cáo, mà sứ mệnh tối thượng của nó là **phục vụ việc ra quyết định chính xác**.

Khi nhìn vào biểu đồ doanh thu một quán trà sữa: Tại sao doanh số lại lao dốc vào tháng 5 nhưng lại tăng vọt vào tháng 9? Đâu là mặt hàng bán chạy nhất? Nên nhập thêm bao nhiêu nguyên liệu cho quý tới? Người biết "đọc vị" biểu đồ sẽ tìm thấy câu trả lời chính xác, nhìn thấu các quy luật ẩn giấu đằng sau những đường gấp khúc và cột màu sắc.

Kỹ năng phân tích số liệu thống kê là một trong những năng lực cốt lõi được săn đón nhất trong thế kỷ 21 đối với mọi ngành nghề: từ nhà kinh tế, bác sĩ dịch tễ, kỹ sư trí tuệ nhân tạo đến huấn luyện viên bóng đá đỉnh cao.

Bài học này sẽ trang bị cho các em:
1. Quy trình chuẩn 5 bước để **đọc, bóc tách và phân tích chuyên sâu** một biểu đồ thống kê.
2. Công thức tính **tốc độ tăng trưởng phần trăm** và các chỉ số so sánh tương đối/tuyệt đối.
3. Kỹ năng **rút ra nhận xét xác đáng, dự đoán xu thế tương lai** và đề xuất giải pháp thực tiễn.
4. Rèn luyện tư duy phản biện để tránh rơi vào bẫy ngụy biện: *Hai hiện tượng cùng tăng không có nghĩa là hiện tượng này gây ra hiện tượng kia*.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">QUY TRÌNH 5 BƯỚC PHÂN TÍCH BIỂU ĐỒ THỐNG KÊ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">Bước 1: Đọc thông tin tổng quan</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đọc kỹ <strong>tiêu đề biểu đồ</strong>, thời gian và không gian khảo sát.<br>• Xác định đại lượng trên <strong>trục hoành</strong> (danh mục, mốc thời gian) và <strong>trục tung</strong> (đơn vị đo lường).<br>• Đọc phần <strong>chú giải màu sắc</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">Bước 2: Tìm các điểm đặc biệt</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Giá trị <strong>cao nhất (cực đại)</strong> và thời điểm/đối tượng đạt đỉnh.<br>• Giá trị <strong>thấp nhất (cực tiểu)</strong> và thời điểm/đối tượng chạm đáy.<br>• Những điểm có sự <strong>bước ngoặt đột biến</strong> bất thường.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">Bước 3: Đánh giá xu thế & Tính toán</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Xác định xu hướng chung: <em>Tăng liên tục, giảm liên tục, dao động chu kỳ hay ổn định</em>.<br>• Tính độ chênh lệch tuyệt đối: $A - B$.<br>• Tính tốc độ tăng trưởng: $\frac{A_{sau} - A_{truoc}}{A_{truoc}} \times 100\%$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">Bước 4 & 5: Lý giải & Ra quyết định</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Kết nối với kiến thức thực tế để <strong>lý giải nguyên nhân</strong> cốt lõi.<br>• Đưa ra <strong>dự báo xu hướng</strong> trong tương lai gần.<br>• Đề xuất giải pháp, lời khuyên hành động thực tế.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Đọc điểm đỉnh:** Nhìn vào biểu đồ nhiệt độ trong ngày, đỉnh cao nhất đạt $38^\circ\text{C}$ vào lúc 14 giờ. Ta rút ra nhận xét gì về thời điểm nóng nhất trong ngày?
2. **Tính chênh lệch:** Số lượng học sinh giỏi lớp 8A kỳ I là $15$ bạn, kỳ II là $21$ bạn. Số học sinh giỏi tăng bao nhiêu bạn?
3. **Phản xạ tỉ lệ tăng:** Giá xăng từ $20.000\text{ đ/lít}$ tăng lên $24.000\text{ đ/lít}$. Giá xăng đã tăng bao nhiêu phần trăm?
4. **Đọc biểu đồ quạt:** Biểu đồ quạt tròn cho biết cơ cấu chi tiêu của gia đình: Tiền ăn uống chiếm $50\%$, Tiết kiệm chiếm $20\%$, Học tập chiếm $20\%$, Giải trí chiếm $10\%$. Khoản chi nào chiếm tỉ trọng lớn nhất và bằng tổng hai khoản chi nào gộp lại?
5. **Cạm bẫy tư duy:** Một biểu đồ cho thấy số lượng kem bán ra và số vụ đuối nước cùng tăng cao vào tháng 6, 7. Có phải ăn kem gây ra đuối nước không?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Thời điểm nóng nhất trong ngày rơi vào khoảng đầu giờ chiều (14 giờ) với nhiệt độ đỉnh $38^\circ\text{C}$.
> 2. Tăng $21 - 15 = 6$ học sinh.
> 3. Tỉ lệ tăng: $\frac{24.000 - 20.000}{20.000} \times 100\% = \frac{4.000}{20.000} \times 100\% = 20\%$.
> 4. Chi tiêu ăn uống lớn nhất ($50\%$) và bằng tổng của Tiết kiệm ($20\%$) cộng Học tập ($20\%$) cộng Giải trí ($10\%$).
> 5. **Không hề!** Đây là lỗi ngụy biện kinh điển: Cả hai cùng tăng vì nguyên nhân thứ ba là do **mùa hè nắng nóng** (mùa hè nóng thì người ta ăn kem nhiều hơn và đi bơi lội tắm biển nhiều hơn).

---

## I. Lý thuyết trọng tâm & Quy trình phân tích số liệu

### 1. Phân tích biểu đồ cột kép

Biểu đồ cột kép so sánh hai nhóm đối tượng song song. Khi phân tích cần chú ý:
- **So sánh nội bộ từng nhóm:** Đối tượng nào có số lượng lớn nhất, nhỏ nhất?
- **So sánh đối đầu giữa hai nhóm:** Tại danh mục nào nhóm 1 áp đảo nhóm 2? Danh mục nào nhóm 2 vượt lên? Có danh mục nào hai nhóm bằng nhau không?
- **Tính tổng hợp:** Tổng thể nhóm 1 hơn nhóm 2 bao nhiêu phần trăm?

---

### 2. Phân tích biểu đồ hình quạt tròn

Biểu đồ hình quạt tròn phản ánh cơ cấu thành phần của tổng thể ($100\%$):
- Xác định thành phần chiếm tỉ trọng **chủ đạo / áp đảo** (quạt lớn nhất, thường $> 50\%$).
- Xác định thành phần chiếm tỉ trọng **thứ yếu / nhỏ nhất** (quạt hẹp nhất).
- Tính toán số lượng tuyệt đối tương ứng khi biết tổng số:
  $$\text{Số lượng của thành phần } A = \text{Tổng số} \times \frac{p_A\%}{100}$$

---

### 3. Phân tích biểu đồ đoạn thẳng

Biểu đồ đoạn thẳng phản ánh diễn biến theo dòng thời gian:
- **Độ dốc của đoạn thẳng:**
  - Đoạn thẳng dốc lên càng dựng đứng $\to$ Tốc độ tăng trưởng càng nhanh.
  - Đoạn thẳng dốc xuống $\to$ Đại lượng đang bị sụt giảm.
  - Đoạn thẳng nằm ngang $\to$ Đại lượng đi ngang, giữ nguyên ổn định.
- **Công thức tính tốc độ tăng trưởng phần trăm:**
  $$\text{Tốc độ tăng trưởng} = \frac{\text{Giá trị sau} - \text{Giá trị trước}}{\text{Giá trị trước}} \times 100\%$$
  *(Nếu kết quả ra số âm, nghĩa là tăng trưởng âm, tức sụt giảm)*.

---

### 4. Phân biệt Tương quan (Correlation) và Nhân quả (Causation)

Trong phân tích dữ liệu chuyên nghiệp, đây là quy tắc đạo đức số 1:
- **Tương quan (Correlation):** Hai đại lượng cùng có xu hướng tăng lên hoặc cùng giảm đi theo thời gian.
- **Nhân quả (Causation):** Đại lượng $A$ thay đổi trực tiếp là nguyên nhân sinh ra sự thay đổi của đại lượng $B$.
- *Bài học cuộc sống:* Không được vội vã quy kết quan hệ nhân quả chỉ vì hai đường đồ thị trên biểu đồ cùng đi lên! Cần phải có thực nghiệm khoa học chứng minh cơ chế tác động.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Phân tích số liệu từ biểu đồ cột kép

**Phương pháp giải:**
Đọc giá trị ở đỉnh cột, tính hiệu hai cột cùng danh mục, tính tổng từng nhóm đối tượng và so sánh tỉ lệ.

---

#### Bài toán 1:
Biểu đồ cột kép thống kê số lượng học sinh Nam và Nữ tham gia 4 câu lạc bộ năng khiếu của khối 8 như sau:
- CLB Bóng rổ: Nam $28$ bạn, Nữ $12$ bạn.
- CLB Cầu lông: Nam $20$ bạn, Nữ $25$ bạn.
- CLB Cờ vua: Nam $15$ bạn, Nữ $15$ bạn.
- CLB Nhiếp ảnh: Nam $10$ bạn, Nữ $20$ bạn.
a) CLB nào có tổng số thành viên đông nhất? CLB nào có số thành viên ít nhất?
b) So sánh số lượng học sinh Nam và Nữ trong từng CLB.
c) Tính tỉ số phần trăm giữa tổng số học sinh Nữ và tổng số học sinh Nam tham gia các CLB năng khiếu của khối 8.

**Lời giải:**

a) Tổng số thành viên trong từng CLB:
- CLB Bóng rổ: $28 + 12 = 40\text{ bạn}$.
- CLB Cầu lông: $20 + 25 = 45\text{ bạn}$.
- CLB Cờ vua: $15 + 15 = 30\text{ bạn}$.
- CLB Nhiếp ảnh: $10 + 20 = 30\text{ bạn}$.
**Kết luận:** CLB có tổng số thành viên đông nhất là **CLB Cầu lông** ($45$ bạn). Hai CLB có số thành viên ít nhất là **CLB Cờ vua** và **CLB Nhiếp ảnh** (cùng có $30$ bạn).

b) So sánh theo từng CLB:
- Ở CLB Bóng rổ: Học sinh Nam nhiều hơn học sinh Nữ ($28 > 12$, nhiều hơn $16$ bạn).
- Ở CLB Cầu lông: Học sinh Nữ nhiều hơn học sinh Nam ($25 > 20$, nhiều hơn $5$ bạn).
- Ở CLB Cờ vua: Số lượng học sinh Nam và Nữ bằng nhau ($15 = 15$).
- Ở CLB Nhiếp ảnh: Học sinh Nữ gấp đôi học sinh Nam ($20$ so với $10$).

c) Tính tổng số học sinh:
- Tổng số học sinh Nam: $28 + 20 + 15 + 10 = 73\text{ bạn}$.
- Tổng số học sinh Nữ: $12 + 25 + 15 + 20 = 72\text{ bạn}$.
Tỉ số phần trăm giữa tổng số học sinh Nữ và Nam là:
$$\frac{72}{73} \times 100\% \approx 98,63\%$$
Số lượng Nam và Nữ tham gia các câu lạc bộ gần như cân bằng tuyệt đối.

---

### Dạng 2: Phân tích cơ cấu và tính toán từ biểu đồ hình quạt tròn

**Phương pháp giải:**
1. Lấy tổng số lượng nhân với tỉ lệ phần trăm của từng quạt để ra số lượng cụ thể.
2. So sánh tỉ trọng giữa các phần để đưa ra nhận xét cơ cấu.

---

#### Bài toán 2:
Một công ty xuất khẩu nông sản có tổng doanh thu năm 2025 đạt $500$ tỷ đồng. Biểu đồ hình quạt tròn thể hiện cơ cấu doanh thu từ các mặt hàng như sau:
- Hạt điều: $35\%$.
- Cà phê: $30\%$.
- Gạo: $25\%$.
- Hồ tiêu: $10\%$.
a) Mặt hàng nào mang lại doanh thu cao nhất? Doanh thu của mặt hàng đó là bao nhiêu tỷ đồng?
b) Doanh thu từ mặt hàng Gạo hơn doanh thu từ Hồ tiêu bao nhiêu tỷ đồng?
c) Ban giám đốc đặt mục tiêu năm 2026 tổng doanh thu tăng $20\%$, trong đó tỉ trọng của mặt hàng Cà phê nâng lên thành $35\%$. Tính số doanh thu dự kiến thu được từ Cà phê trong năm 2026.

**Lời giải:**

a) Mặt hàng mang lại doanh thu cao nhất là **Hạt điều** chiếm tỉ trọng lớn nhất ($35\%$).
Doanh thu từ Hạt điều năm 2025 là:
$$500 \times 35\% = 500 \times 0,35 = 175\text{ tỷ đồng}$$

b) Doanh thu từ Gạo:
$$500 \times 25\% = 125\text{ tỷ đồng}$$
Doanh thu từ Hồ tiêu:
$$500 \times 10\% = 50\text{ tỷ đồng}$$
Doanh thu từ Gạo hơn Hồ tiêu là:
$$125 - 50 = 75\text{ tỷ đồng}$$

c) Doanh thu dự kiến toàn công ty năm 2026:
$$500 \times (100\% + 20\%) = 500 \times 1,2 = 600\text{ tỷ đồng}$$
Doanh thu dự kiến thu được từ mặt hàng Cà phê năm 2026 (với tỉ trọng $35\%$):
$$600 \times 35\% = 600 \times 0,35 = 210\text{ tỷ đồng}$$

---

### Dạng 3: Phân tích xu hướng biến động và tốc độ tăng trưởng

**Phương pháp giải:**
Tính tỉ lệ tăng trưởng theo công thức: $\frac{A_{sau} - A_{truoc}}{A_{truoc}} \times 100\%$. Quan sát các đoạn dốc để phát hiện giai đoạn bứt phá hoặc suy thoái.

---

#### Bài toán 3:
Biểu đồ đoạn thẳng ghi lại sản lượng lắp ráp điện thoại thông minh (đơn vị: triệu chiếc) của một nhà máy công nghệ qua các năm từ 2021 đến 2025:
- Năm 2021: $10\text{ triệu chiếc}$.
- Năm 2022: $15\text{ triệu chiếc}$.
- Năm 2023: $18\text{ triệu chiếc}$.
- Năm 2024: $24\text{ triệu chiếc}$.
- Năm 2025: $30\text{ triệu chiếc}$.
a) Nhận xét xu thế phát triển sản lượng lắp ráp của nhà máy qua giai đoạn 2021 – 2025.
b) Tính tốc độ tăng trưởng sản lượng của năm 2022 so với năm 2021.
c) Giai đoạn nào nhà máy có tốc độ tăng trưởng sản lượng tính theo phần trăm cao nhất?

**Lời giải:**

a) **Nhận xét xu thế:** Sản lượng lắp ráp điện thoại của nhà máy liên tục tăng trưởng qua từng năm trong suốt giai đoạn 2021 – 2025, từ $10\text{ triệu chiếc}$ (năm 2021) lên tới $30\text{ triệu chiếc}$ (năm 2025), tăng gấp $3$ lần sau 4 năm.

b) Tốc độ tăng trưởng năm 2022 so với năm 2021:
$$\text{Tốc độ tăng} = \frac{15 - 10}{10} \times 100\% = \frac{5}{10} \times 100\% = 50\%$$

c) Tính tốc độ tăng trưởng của các giai đoạn tiếp theo:
- Giai đoạn 2022 – 2023:
  $$\frac{18 - 15}{15} \times 100\% = \frac{3}{15} \times 100\% = 20\%$$
- Giai đoạn 2023 – 2024:
  $$\frac{24 - 18}{18} \times 100\% = \frac{6}{18} \times 100\% \approx 33,33\%$$
- Giai đoạn 2024 – 2025:
  $$\frac{30 - 24}{24} \times 100\% = \frac{6}{24} \times 100\% = 25\%$$
**Kết luận:** Giai đoạn nhà máy có tốc độ tăng trưởng sản lượng tính theo phần trăm cao nhất là **giai đoạn 2021 – 2022** (đạt mức tăng trưởng kỷ lục $50\%$).

---

### Dạng 4: Đánh giá tính hợp lý của các kết luận rút ra từ biểu đồ

**Phương pháp giải:**
Xem xét xem kết luận có thực sự được chứng minh bởi dữ liệu trong biểu đồ hay chỉ là suy diễn vô căn cứ, nhầm lẫn giữa tương quan và nhân quả.

---

#### Bài toán 4:
Một nhóm nghiên cứu học đường theo dõi điểm thi môn Toán của học sinh và thời gian các bạn tự học ở nhà mỗi ngày, thu được biểu đồ phân tán cho thấy: Những bạn tự học từ $2 - 3\text{ giờ/ngày}$ thường có điểm thi cao hơn những bạn tự học dưới $30\text{ phút/ngày}$.
Từ đó, bạn Hùng đưa ra kết luận: *"Cứ dành càng nhiều thời gian ngồi vào bàn học thì chắc chắn điểm thi sẽ đạt điểm 10 tuyệt đối, kể cả học liên tục 15 giờ mỗi ngày không ngủ"*.
Theo em, kết luận của bạn Hùng có hợp lý không? Hãy phân tích các yếu tố thực tế để phản biện kết luận trên.

**Lời giải:**

Kết luận của bạn Hùng là **hoàn toàn không hợp lý** vì:
1. **Quy luật hiệu suất giảm dần và giới hạn sinh học:** Con người không phải là cỗ máy. Nếu ngồi học liên tục $15\text{ giờ/ngày}$ không ngủ, não bộ sẽ rơi vào trạng thái kiệt quệ, mệt mỏi quá tải thần kinh, khả năng tập trung và ghi nhớ giảm mạnh, dẫn đến kết quả làm bài thi kém đi chứ không thể đạt điểm 10.
2. **Nhầm lẫn giữa "thời gian" và "chất lượng":** Điểm số cao phụ thuộc vào phương pháp học thông minh, sự tập trung sâu và tư duy hiểu bản chất, chứ không đơn thuần chỉ phụ thuộc vào số giờ ngồi lì ở bàn học.
3. **Phạm vi của dữ liệu khảo sát:** Dữ liệu biểu đồ chỉ ghi nhận trong khoảng thời gian hợp lý từ $0,5$ đến $3\text{ giờ/ngày}$. Bạn Hùng đã suy diễn ngoại suy (Extrapolation) vượt quá phạm vi cho phép của số liệu thống kê.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Trí tuệ doanh nghiệp (Business Intelligence) & Tối ưu hóa chuỗi cung ứng
Các hệ thống siêu thị lớn (như Co.opmart, WinMart) sử dụng hệ thống BI tự động phân tích biểu đồ:
- Biểu đồ nhiệt theo giờ cho biết khung giờ nào khách hàng đi chợ đông nhất $\to$ Điều động nhân viên thu ngân mở thêm quầy thanh toán.
- Biểu đồ tồn kho theo tuần cảnh báo các mặt hàng sắp hết hạn sử dụng $\to$ Kích hoạt chương trình khuyến mãi giảm giá $30\%$ giải phóng hàng tồn.

### 2. Cuộc cách mạng phân tích số liệu thể thao (Moneyball)
Đội bóng đá Liverpool và các câu lạc bộ giải Ngoại hạng Anh sở hữu đội ngũ chuyên gia phân tích dữ liệu hàng đầu:
- Họ phân tích biểu đồ bàn thắng kỳ vọng (Expected Goals - xG) và biểu đồ chuyền bóng mạng lưới:
- Thay vì mua các ngôi sao đắt đỏ dựa vào cảm tính, họ dùng số liệu thống kê để săn tìm những cầu thủ ít tên tuổi nhưng có chỉ số tạo cơ hội vượt trội, giúp đội bóng đoạt chức vô địch với chi phí chuyển nhượng tiết kiệm hàng chục triệu Euro.

### 3. Khí tượng học & Bản đồ cảnh báo bão sớm
Trung tâm Dự báo Khí tượng Thủy văn Quốc gia phân tích chuỗi biểu đồ áp suất khí quyển và hải lưu:
- Khi đường biểu đồ khí áp tụt dốc thẳng đứng ở vùng biển Đông, kết hợp biểu đồ nhiệt độ mặt nước biển $> 26,5^\circ\text{C}$, các chuyên gia biết chắc chắn một cơn bão nhiệt đới dữ dội đang hình thành.
- Nhờ đó lệnh cấm biển và sơ tán dân được ban hành trước $48 - 72\text{ giờ}$, giảm thiểu tối đa thiệt hại về tính mạng cho ngư dân.

### 4. Thuật toán phân tích xu hướng tìm kiếm Google Trends
Google Trends phân tích hàng tỷ lượt tìm kiếm mỗi ngày:
- Trong mùa dịch cúm mùa, biểu đồ số lượt tìm kiếm các từ khóa như "thuốc hạ sốt", "ho khan", "đau họng" tăng vọt trước khi các bệnh viện ghi nhận bệnh nhân từ $1 - 2\text{ tuần}$.
- Tổ chức Y tế Thế giới (WHO) sử dụng biểu đồ xu hướng này làm hệ thống cảnh báo sớm dịch bệnh bùng phát trên toàn cầu.

### 5. Khoa học thần kinh & Giấc ngủ sâu (Sleep Architecture)
Các ứng dụng theo dõi giấc ngủ phân tích biểu đồ chu kỳ giấc ngủ (Hypnogram):
- Biểu diễn diễn biến các giai đoạn: Ngủ nông, Ngủ sâu (Deep Sleep) và Ngủ mơ (REM) qua từng giờ trong đêm.
- Đồng hồ báo thức thông minh sẽ phân tích biểu đồ và chọn đúng thời điểm cơ thể ở chu kỳ ngủ nông để đánh thức người dùng, giúp bạn thức dậy sảng khoái tràn đầy năng lượng mà không bị váng đầu mệt mỏi.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Nhìn vào biểu đồ đoạn thẳng thể hiện doanh thu qua các năm, đoạn thẳng nào dốc lên càng dựng đứng chứng tỏ:",
  "options": [
    "Doanh thu bị giảm sút nghiêm trọng",
    "Tốc độ tăng trưởng doanh thu diễn ra càng nhanh",
    "Doanh thu đi ngang không đổi",
    "Doanh thu bị lỗ"
  ],
  "answer": 1,
  "explanation": "Độ dốc của đoạn thẳng trong biểu đồ thời gian phản ánh tốc độ biến thiên. Đoạn dốc lên càng cao chứng tỏ tốc độ tăng trưởng càng nhanh."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Một cửa hàng có doanh thu tháng 1 là 50 triệu đồng, tháng 2 đạt 65 triệu đồng. Tốc độ tăng trưởng doanh thu của tháng 2 so với tháng 1 là:",
  "options": [
    "15%",
    "30%",
    "25%",
    "20%"
  ],
  "answer": 1,
  "explanation": "Tốc độ tăng trưởng = [(65 - 50) / 50] · 100% = (15 / 50) · 100% = 30%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Biểu đồ hình quạt tròn cho biết cơ cấu phương tiện đến trường của 500 học sinh: Xe đạp chiếm 40%, Xe đạp điện chiếm 35%, Đi bộ chiếm 15%, Xe buýt chiếm 10%. Số học sinh đi bộ đến trường là:",
  "options": [
    "75 học sinh",
    "50 học sinh",
    "150 học sinh",
    "100 học sinh"
  ],
  "answer": 0,
  "explanation": "Số học sinh đi bộ = 500 · 15% = 500 · 0.15 = 75 học sinh."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Khi phân tích biểu đồ cột kép so sánh điểm trung bình môn Toán và môn Ngữ văn của 4 tổ trong lớp, tại Tổ 3 có cột Toán cao hơn hẳn cột Văn. Ta rút ra nhận xét gì về Tổ 3?",
  "options": [
    "Tổ 3 học kém môn Văn nhất lớp",
    "Điểm trung bình môn Toán của Tổ 3 cao hơn điểm trung bình môn Văn của tổ đó",
    "Tất cả học sinh Tổ 3 đều giỏi Toán",
    "Tổ 3 là tổ dẫn đầu cả lớp về điểm số"
  ],
  "answer": 1,
  "explanation": "Cột Toán cao hơn cột Văn phản ánh điểm trung bình môn Toán của Tổ 3 cao hơn điểm trung bình môn Văn của chính tổ đó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Dân số một thị trấn qua 3 năm: Năm 2023 có 20000 người, năm 2024 có 22000 người, năm 2025 có 20900 người. Tốc độ tăng trưởng dân số năm 2025 so với năm 2024 là:",
  "options": [
    "Tăng 5%",
    "Giảm 5%",
    "Giảm 1100 người (tăng trưởng -5%)",
    "Tăng 4.5%"
  ],
  "answer": 2,
  "explanation": "Tốc độ tăng trưởng = [(20900 - 22000) / 22000] · 100% = (-1100 / 22000) · 100% = -5% (dân số giảm 5%)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một biểu đồ hình quạt tròn chia thành 3 phần: Phần A chiếm 50%, Phần B chiếm 30%, Phần C chiếm 20%. Nếu Phần C có giá trị là 40 đơn vị thì tổng thể toàn bộ biểu đồ có giá trị là:",
  "options": [
    "100 đơn vị",
    "200 đơn vị",
    "150 đơn vị",
    "250 đơn vị"
  ],
  "answer": 1,
  "explanation": "Tổng thể = 40 / 20% = 40 / 0.2 = 200 đơn vị."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Biểu đồ đường của giá vàng đi ngang (đoạn thẳng nằm ngang) trong suốt một tuần. Điều đó chứng tỏ:",
  "options": [
    "Giá vàng liên tục tăng",
    "Giá vàng ổn định không biến động trong tuần đó",
    "Thị trường ngừng giao dịch",
    "Giá vàng đang giảm"
  ],
  "answer": 1,
  "explanation": "Đoạn thẳng nằm ngang thể hiện giá trị dữ liệu giữ nguyên không đổi theo thời gian."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Nhận định nào sau đây là ngụy biện thống kê khi phân tích biểu đồ?",
  "options": [
    "Chỉ ra giá trị lớn nhất và nhỏ nhất trên biểu đồ",
    "Khẳng định hai hiện tượng cùng tăng chắc chắn là nguyên nhân của nhau",
    "Tính tốc độ tăng trưởng phần trăm theo công thức chuẩn",
    "So sánh tỉ số giữa các cột số liệu"
  ],
  "answer": 1,
  "explanation": "Hai đại lượng cùng tăng chỉ thể hiện mối tương quan chứ không khẳng định quan hệ nhân quả. Khẳng định chắc chắn nguyên nhân là ngụy biện."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Trong biểu đồ cột kép so sánh xuất khẩu và nhập khẩu của một quốc gia, nếu cột xuất khẩu luôn cao hơn cột nhập khẩu qua tất cả các năm, ta kết luận quốc gia đó:",
  "options": [
    "Luôn nhập siêu qua các năm",
    "Luôn xuất siêu (cán cân thương mại thặng dư) qua các năm",
    "Nền kinh tế bị suy thoái",
    "Không có hoạt động thương mại quốc tế"
  ],
  "answer": 1,
  "explanation": "Xuất khẩu lớn hơn nhập khẩu đồng nghĩa với việc cán cân thương mại thặng dư (xuất siêu)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Để đánh giá chính xác một xu hướng từ biểu đồ đoạn thẳng, người phân tích KHÔNG NÊN làm điều gì?",
  "options": [
    "Đọc kỹ đơn vị đo trên các trục tọa độ",
    "Quan sát tổng thể chuỗi số liệu qua nhiều mốc thời gian",
    "Chỉ nhìn vào 2 điểm liền kề nhau rồi vội vàng kết luận xu hướng dài hạn",
    "Tìm kiếm nguyên nhân thực tế giải thích cho các điểm biến động bất thường"
  ],
  "answer": 2,
  "explanation": "Chỉ dựa vào 2 điểm liền kề ngắn hạn sẽ dẫn tới cái nhìn phiến diện, không phản ánh đúng xu thế dài hạn của đại lượng."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### 1. Ma trận đề kiểm tra 45 phút — Phân tích số liệu thống kê dựa vào biểu đồ

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

**Câu 1:** Quan sát biểu đồ đoạn thẳng, thời điểm có giá trị thấp nhất được nhận biết qua:
- A. Điểm uốn trên biểu đồ
- B. Điểm nằm ở vị trí trũng thấp nhất trên đồ thị
- C. Điểm nằm ở vị trí cao nhất trên đồ thị
- D. Điểm bắt đầu của đồ thị

**Câu 2:** Biểu đồ hình quạt tròn cho biết học sinh đạt giải quốc tế của trường gồm: Huy chương Vàng ($20\%$), Bạc ($30\%$), Đồng ($50\%$). Nếu trường đạt tổng cộng $40$ giải thì số Huy chương Vàng là:
- A. $8$ giải
- B. $12$ giải
- C. $20$ giải
- D. $10$ giải

**Câu 3:** Giá vé máy bay chặng Hà Nội – Đà Nẵng từ $1.200.000\text{ đ}$ vào ngày thường tăng lên $1.800.000\text{ đ}$ vào dịp nghỉ lễ Quốc khánh. Tốc độ tăng giá vé là:
- A. $33,33\%$
- B. $50\%$
- C. $60\%$
- D. $40\%$

**Câu 4:** Biểu đồ cột kép so sánh số lượng máy tính xách tay và máy tính bảng bán được của một siêu thị điện máy trong 3 tháng. Để biết tháng nào siêu thị bán được nhiều thiết bị công nghệ nhất, ta phải:
- A. So sánh chiều cao của các cột máy tính xách tay
- B. So sánh chiều cao của các cột máy tính bảng
- C. Tính tổng chiều cao của cả hai cột (xách tay + bảng) trong từng tháng rồi so sánh
- D. Lấy tháng cuối cùng

**Câu 5:** Một cửa hàng thời trang ghi nhận số áo phông bán được giảm từ $200$ chiếc (tháng 8) xuống còn $150$ chiếc (tháng 9). Tốc độ tăng trưởng là:
- A. $-25\%$ (tức giảm $25\%$)
- B. $25\%$
- C. $-33,33\%$
- D. $-50\%$

**Câu 6:** Trong phân tích biểu đồ, nhận định nào sau đây thể hiện tư duy phản biện đúng đắn?
- A. Cứ thấy doanh số tăng thì nguyên nhân duy nhất là do giám đốc giỏi
- B. Kết hợp số liệu biểu đồ với bối cảnh kinh tế vĩ mô để đánh giá toàn diện
- C. Bỏ qua các điểm giảm bất thường trên đồ thị
- D. Luôn tin tưởng $100\%$ vào mọi biểu đồ quảng cáo trên mạng xã hội

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
Một biểu đồ hình quạt tròn thể hiện cơ cấu chi tiêu hàng tháng của một gia đình có tổng thu nhập $30\text{ triệu đồng}$ như sau:
- Chi ăn uống và sinh hoạt thiết yếu: $45\%$.
- Tiền học tập cho con: $25\%$.
- Tiết kiệm và tích lũy: $20\%$.
- Chi giải trí, du lịch: $10\%$.
a) Khoản chi tiêu nào chiếm tỉ trọng lớn nhất và bằng bao nhiêu tiền?
b) Tính số tiền gia đình đó dành cho mục Tiết kiệm và tích lũy trong tháng.
c) Nếu tháng tới thu nhập gia đình tăng thêm $10\%$ và số tiền chi cho Học tập tăng thêm $1,5\text{ triệu đồng}$, thì tỉ lệ phần trăm chi cho Học tập trong tổng thu nhập mới là bao nhiêu?

**Bài 2 (2,0 điểm):**
Biểu đồ đoạn thẳng ghi lại số lượng xe ô tô điện bán ra của một hãng xe trong 4 quý năm 2025 như sau:
- Quý I: $12.000\text{ xe}$.
- Quý II: $15.000\text{ xe}$.
- Quý III: $18.000\text{ xe}$.
- Quý IV: $22.500\text{ xe}$.
a) Tính tốc độ tăng trưởng doanh số xe bán ra của Quý II so với Quý I, và của Quý IV so với Quý III.
b) Nhận xét về xu hướng chuyển dịch tiêu dùng xe điện qua 4 quý và đưa ra dự báo số lượng xe có thể bán được trong Quý I năm 2026 nếu giữ nguyên đà tăng trưởng $20\%$.

**Bài 3 (2,0 điểm):**
Biểu đồ cột kép so sánh điểm trung bình kiểm tra môn Toán và môn Khoa học tự nhiên (KHTN) của 4 tổ học tập trong lớp 8A như sau:
- Tổ 1: Toán $7,5$ điểm; KHTN $8,0$ điểm.
- Tổ 2: Toán $8,5$ điểm; KHTN $8,5$ điểm.
- Tổ 3: Toán $9,0$ điểm; KHTN $7,5$ điểm.
- Tổ 4: Toán $8,0$ điểm; KHTN $8,5$ điểm.
a) Lập bảng thống kê tương ứng với biểu đồ cột kép trên.
b) Tổ nào có điểm trung bình cộng cả hai môn cao nhất? Tổ nào có sự chênh lệch lớn nhất giữa hai môn?
c) Đưa ra lời khuyên học tập phù hợp cho các bạn học sinh Tổ 3.

**Bài 4 (1,0 điểm — Vận dụng cao):**
Một công ty khởi nghiệp ứng dụng gọi xe công nghệ theo dõi số lượng chuyến xe hoàn thành mỗi ngày trong tuần:
- Từ thứ Hai đến thứ Sáu: Trung bình đạt $20.000\text{ chuyến/ngày}$.
- Vào hai ngày cuối tuần (thứ Bảy và Chủ nhật): Số chuyến xe tăng vọt lên mức $35.000\text{ chuyến/ngày}$.
a) Tính tổng số chuyến xe mà ứng dụng phục vụ trong cả tuần và tính số chuyến xe trung bình mỗi ngày trong tuần.
b) Là chuyên viên phân tích dữ liệu, em hãy giải thích nguyên nhân vì sao lượng khách tăng mạnh vào cuối tuần và đề xuất 2 giải pháp điều phối tài xế để tối ưu hóa doanh thu.

---

### 3. Đáp án & Barem chấm điểm chi tiết

#### PHẦN I: TRẮC NGHIỆM (3,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **B** | **A** | **B** | **C** | **A** | **B** |
| **Điểm** | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ |

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) (0,75 điểm)
  - Khoản chi chiếm tỉ trọng lớn nhất là **Ăn uống và sinh hoạt thiết yếu** ($45\%$) *(0,25 đ)*.
  - Số tiền chi là: $30 \times 45\% = 30 \times 0,45 = 13,5\text{ triệu đồng}$ *(0,5 đ)*.
- b) (0,5 điểm)
  - Số tiền tiết kiệm và tích lũy trong tháng:
    $$30 \times 20\% = 30 \times 0,2 = 6\text{ triệu đồng}\quad (0,5\text{ đ})$$
- c) (0,75 điểm)
  - Số tiền học tập ban đầu: $30 \times 25\% = 7,5\text{ triệu đồng}$.
  - Số tiền học tập mới: $7,5 + 1,5 = 9\text{ triệu đồng}$ *(0,25 đ)*.
  - Thu nhập mới của gia đình: $30 \times (100\% + 10\%) = 33\text{ triệu đồng}$ *(0,25 đ)*.
  - Tỉ lệ phần trăm mới: $\frac{9}{33} \times 100\% \approx 27,27\%$ *(0,25 đ)*.

**Bài 2 (2,0 điểm):**
- a) (1,0 điểm)
  - Tốc độ tăng trưởng Quý II so với Quý I:
    $$\frac{15.000 - 12.000}{12.000} \times 100\% = \frac{3.000}{12.000} \times 100\% = 25\%\quad (0,5\text{ đ})$$
  - Tốc độ tăng trưởng Quý IV so với Quý III:
    $$\frac{22.500 - 18.000}{18.000} \times 100\% = \frac{4.500}{18.000} \times 100\% = 25\%\quad (0,5\text{ đ})$$
- b) (1,0 điểm)
  - Nhận xét: Doanh số bán xe điện tăng trưởng liên tục và rất ổn định qua cả 4 quý, cho thấy xu hướng người dân chuyển đổi từ xe xăng sang xe điện thân thiện với môi trường đang diễn ra mạnh mẽ *(0,5 đ)*.
  - Dự báo Quý I năm 2026:
    $$22.500 \times (100\% + 20\%) = 22.500 \times 1,2 = 27.000\text{ xe}\quad (0,5\text{ đ})$$

**Bài 3 (2,0 điểm):**
- a) (0,75 điểm) Bảng thống kê điểm số:

| Tổ | Tổ 1 | Tổ 2 | Tổ 3 | Tổ 4 |
| :--- | :---: | :---: | :---: | :---: |
| Điểm Toán | 7,5 | 8,5 | 9,0 | 8,0 |
| Điểm KHTN | 8,0 | 8,5 | 7,5 | 8,5 |
| **Điểm trung bình cộng** | **7,75** | **8,5** | **8,25** | **8,25** |

*(Ghi đúng bảng và điểm TB 0,75 đ)*.
- b) (0,75 điểm)
  - Tổ có điểm trung bình cộng hai môn cao nhất là **Tổ 2** ($8,5$ điểm) *(0,25 đ)*.
  - Tổ có độ chênh lệch lớn nhất giữa hai môn là **Tổ 3** (chênh lệch $9,0 - 7,5 = 1,5$ điểm) *(0,5 đ)*.
- c) (0,5 điểm)
  - Lời khuyên: Các bạn Tổ 3 học rất xuất sắc môn Toán ($9,0$ điểm) nhưng môn KHTN còn thấp hơn ($7,5$ điểm). Các bạn nên tận dụng tư duy logic và kỹ năng tính toán toán học để củng cố các bài tập định lượng môn Vật lý, Hóa học trong KHTN, đồng thời tăng cường ôn luyện phần lý thuyết Sinh học để điểm số đồng đều và bứt phá hơn *(0,5 đ)*.

**Bài 4 (1,0 điểm):**
- a) (0,5 điểm)
  - Tổng số chuyến xe trong cả tuần:
    $$(20.000 \times 5) + (35.000 \times 2) = 100.000 + 70.000 = 170.000\text{ chuyến}\quad (0,25\text{ đ})$$
  - Trung bình mỗi ngày trong tuần:
    $$\frac{170.000}{7} \approx 24.285,7\text{ chuyến/ngày}\quad (0,25\text{ đ})$$
- b) (0,5 điểm)
  - Giải thích nguyên nhân: Vào cuối tuần, người dân được nghỉ làm và nghỉ học nên nhu cầu đi chơi, gặp gỡ bạn bè, mua sắm và du lịch tăng cao đột biến *(0,25 đ)*.
  - Hai giải pháp điều phối:
    1. Áp dụng chính sách thưởng doanh số giờ cao điểm cuối tuần để khuyến khích nhiều tài xế bật ứng dụng đón khách.
    2. Cảnh báo các khu vực tập trung đông người (trung tâm thương mại, phố đi bộ) trên bản đồ nhiệt ứng dụng để tài xế chủ động di chuyển đến gần đón khách nhanh nhất *(0,25 đ)*.
