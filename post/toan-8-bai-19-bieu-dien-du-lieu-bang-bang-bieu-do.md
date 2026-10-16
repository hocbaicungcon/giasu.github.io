---
title: 'Toán 8 Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ'
description: 'Làm chủ kỹ năng Biểu diễn dữ liệu bằng bảng, biểu đồ Toán 8 Bài 19: Lựa chọn dạng biểu đồ thích hợp (biểu đồ cột kép, hình quạt tròn, đoạn thẳng), chuyển đổi qua lại giữa bảng thống kê và biểu đồ, phát hiện bẫy biểu đồ gây hiểu lầm, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Thống kê 8
  - Biểu diễn dữ liệu
  - Bảng thống kê
  - Biểu đồ cột kép
  - Biểu đồ hình quạt tròn
  - Biểu đồ đoạn thẳng
  - Kết nối tri thức
grade: 8
---

# Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ

Người xưa có câu: *"Một bức tranh đáng giá ngàn lời nói"* (A picture is worth a thousand words). Trong kỷ nguyên số, một **biểu đồ trực quan chuẩn xác** có thể truyền tải thông điệp nhanh hơn, mạnh mẽ hơn hàng chục trang báo cáo số liệu khô khan.

Khi ban giám hiệu muốn so sánh kết quả học tập giữa các lớp, doanh nghiệp muốn theo dõi doanh thu qua từng quý, hay đài truyền hình muốn minh họa cơ cấu năng lượng tái tạo — việc lựa chọn đúng hình thức biểu diễn dữ liệu là chìa khóa quyết định sự thành bại.

Chọn sai biểu đồ (ví dụ: dùng biểu đồ tròn để vẽ diễn biến nhiệt độ theo thời gian) sẽ khiến người xem bối rối, thậm chí hiểu sai hoàn toàn bản chất vấn đề.

Bài học này sẽ trang bị cho các em:
1. Quy tắc "vàng" để **lựa chọn dạng biểu đồ thích hợp**: Biểu đồ cột kép, biểu đồ hình quạt tròn hay biểu đồ đoạn thẳng.
2. Kỹ năng **chuyển đổi linh hoạt hai chiều**: Từ bảng số liệu sang biểu đồ và ngược lại.
3. Con mắt phản biện sắc sảo để **phát hiện các biểu đồ "nói dối"** (trục tung bị cắt cụt, khoảng cách thời gian gian lận) thường thấy trên các phương tiện truyền thông quảng cáo.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">CẨM NANG LỰA CHỌN BIỂU ĐỒ THÍCH HỢP</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Biểu đồ cột kép</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Mục đích:</strong> So sánh hai đối tượng (hoặc hai nhóm đối tượng) theo từng danh mục phân loại.<br>• <em>Ví dụ:</em> So sánh số học sinh Nam và Nữ thích các môn thể thao; so sánh doanh thu năm 2024 và 2025 theo từng quý.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Biểu đồ hình quạt tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Mục đích:</strong> Biểu diễn <strong>tỉ lệ phần trăm</strong> của từng thành phần so với toàn thể tổng thể ($100\%$).<br>• <em>Ví dụ:</em> Cơ cấu chi tiêu trong gia đình; tỉ lệ học sinh đạt các mức xếp loại Tốt, Khá, Đạt; thị phần của các hãng điện thoại.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biểu đồ đoạn thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Mục đích:</strong> Biểu diễn <strong>xu hướng thay đổi</strong> (tăng, giảm, biến động) của một đại lượng theo thời gian.<br>• <em>Ví dụ:</em> Nhiệt độ các giờ trong ngày; diễn biến giá vàng qua các tháng; tốc độ tăng trưởng kinh tế qua các năm.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">4. Lưu ý khi vẽ và đọc biểu đồ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Phải có <strong>tiêu đề rõ ràng</strong>, đơn vị đo trên các trục.<br>• Có <strong>chú giải màu sắc</strong> đầy đủ.<br>• Gốc tọa độ trục tung nên bắt đầu từ $0$ để tránh phóng đại sai lệch trực giác.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Chọn biểu đồ:** Để biểu diễn tỉ lệ phần trăm số học sinh đạt các mức học lực trong một lớp, biểu đồ nào là thích hợp nhất?
2. **Chọn biểu đồ:** Để theo dõi nhiệt độ không khí tại một trạm khí tượng đo vào lúc 6h, 9h, 12h, 15h, 18h, 21h, biểu đồ nào là thích hợp nhất?
3. **Chọn biểu đồ:** Để so sánh số huy chương Vàng và số huy chương Bạc của 5 đoàn thể thao tại SEA Games, biểu đồ nào là thích hợp nhất?
4. **Phản xạ góc hình quạt:** Trong biểu đồ hình quạt tròn, hình quạt biểu diễn tỉ lệ $25\%$ ứng với góc ở tâm bằng bao nhiêu độ?
5. **Cạm bẫy trực quan:** Nếu trục tung của biểu đồ cột bắt đầu từ $50$ thay vì từ $0$, điều này có thể gây ra ảo giác gì cho người nhìn?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. **Biểu đồ hình quạt tròn** (vì thể hiện cơ cấu phần trăm so với toàn thể).
> 2. **Biểu đồ đoạn thẳng** (vì thể hiện diễn biến thay đổi theo mốc thời gian liên tục).
> 3. **Biểu đồ cột kép** (vì so sánh 2 đại lượng: Vàng và Bạc trên cùng 5 đối tượng).
> 4. Toàn bộ hình tròn là $360^\circ$, vậy $25\%$ ứng với: $360^\circ \times 25\% = 360^\circ \times \frac{1}{4} = 90^\circ$ (góc vuông).
> 5. Gây ảo giác **phóng đại sự chênh lệch** (cột cao gấp đôi nhưng thực chất số liệu chỉ chênh lệch vài đơn vị).

---

## I. Lý thuyết trọng tâm & Tiêu chí lựa chọn biểu đồ

### 1. Bảng thống kê số liệu

Bảng thống kê là hình thức sắp xếp dữ liệu thô vào các hàng và cột có trật tự logic:
- **Tiêu đề bảng:** Nêu rõ nội dung thống kê và thời gian/địa điểm khảo sát.
- **Hàng và cột:** Phân định rõ ràng các danh mục, đơn vị đo lường tương ứng.
- **Dòng tổng cộng:** Giúp kiểm tra tính đầy đủ của dữ liệu.

---

### 2. Tiêu chí lựa chọn biểu đồ thống kê thích hợp

Mỗi dạng biểu đồ sinh ra để phục vụ một mục đích truyền tải riêng biệt:

| Dạng biểu đồ | Dấu hiệu nhận biết & Mục đích sử dụng | Bối cảnh thực tế tiêu biểu |
| :--- | :--- | :--- |
| **Biểu đồ cột (Bar Chart)** | So sánh độ lớn giữa các đối tượng độc lập trong một danh mục | Doanh số bán hàng của 5 nhân viên; dân số của 4 thành phố |
| **Biểu đồ cột kép (Double Bar Chart)** | So sánh đồng thời hai nhóm đối tượng trên cùng một danh mục phân loại | So sánh số học sinh Nam và Nữ thích các môn học; so sánh điểm Toán và Văn của các tổ |
| **Biểu đồ hình quạt tròn (Pie Chart)** | Thể hiện cơ cấu, tỉ lệ phần trăm của các thành phần trong một tổng thể ($100\%$) | Cơ cấu ngân sách nhà nước; tỉ lệ thị phần các nhà mạng; phân loại học lực lớp học |
| **Biểu đồ đoạn thẳng (Line Chart)** | Thể hiện xu hướng diễn biến, tốc độ tăng/giảm của một đại lượng theo thời gian | Nhiệt độ theo giờ; GDP cả nước qua 10 năm; giá cổ phiếu qua các ngày |

---

### 3. Quy đổi góc ở tâm trong biểu đồ hình quạt tròn

Để vẽ hoặc kiểm tra biểu đồ hình quạt tròn:
- Cả hình tròn ứng với góc ở tâm bằng $360^\circ$, tương ứng với $100\%$ dữ liệu.
- Công thức chuyển đổi giữa tỉ lệ phần trăm $p\%$ và góc ở tâm $\alpha$:
  $$\alpha = 360^\circ \times \frac{p}{100}$$
  $$p\% = \frac{\alpha}{360^\circ} \times 100\%$$
- Các mốc đặc biệt cần nhớ:
  - $50\% \iff 180^\circ$ (nửa hình tròn, góc bẹt).
  - $25\% \iff 90^\circ$ (một phần tư hình tròn, góc vuông).
  - $75\% \iff 270^\circ$ (ba phần tư hình tròn).
  - $10\% \iff 36^\circ$.

---

### 4. Nhận diện các bẫy biểu đồ gây hiểu lầm (Misleading Graphs)

Trong đời sống và quảng cáo, biểu đồ đôi khi bị bóp méo để dẫn dắt dư luận:
1. **Trục tung bị cắt cụt (Truncated Graph):** Trục tung không bắt đầu từ số $0$ mà bắt đầu từ một số lớn (ví dụ từ $95$ đến $100$). Khi đó, cột trị giá $99$ nhìn sẽ cao gấp 4 lần cột trị giá $96$, khiến người xem tưởng rằng có sự chênh lệch "khủng khiếp" dù trên thực tế chỉ chênh nhau $3\%$.
2. **Khoảng cách trục thời gian không đều:** Các mốc năm trên trục hoành cách nhau không đều (ví dụ: 2018, 2019, 2024) nhưng khoảng cách vẽ lại bằng nhau, làm sai lệch độ dốc của đường xu hướng.
3. **Diện tích hình 3D đánh lừa thị giác:** Dùng hình khối 3D phóng to cả chiều rộng lẫn chiều cao, khiến thể tích hình ảnh tăng theo lũy thừa 3 lần, thổi phồng sự tăng trưởng gấp nhiều lần con số thực tế.

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Lựa chọn dạng biểu đồ thích hợp nhất

**Phương pháp giải:**
- Hỏi về tỉ lệ phần trăm, cơ cấu thành phần $\to$ **Biểu đồ hình quạt tròn**.
- Hỏi về diễn biến, xu hướng tăng giảm theo mốc thời gian $\to$ **Biểu đồ đoạn thẳng**.
- So sánh song song hai nhóm số liệu trên cùng danh mục $\to$ **Biểu đồ cột kép**.

---

#### Bài toán 1:
Em hãy chọn dạng biểu đồ thích hợp nhất để biểu diễn mỗi bảng dữ liệu sau:
a) Tỉ lệ phần trăm đóng góp của các ngành: *Nông nghiệp (12%), Công nghiệp (38%), Dịch vụ (42%), Thuế sản phẩm (8%)* vào GDP của một tỉnh.
b) Nhiệt độ trung bình các tháng trong năm tại Sa Pa từ tháng 1 đến tháng 12.
c) Số lượng học sinh Nam và học sinh Nữ đạt học sinh giỏi của 4 khối 6, 7, 8, 9 trong năm học qua.
d) Số lượng cuốn sách đã bán được của 5 nhà văn nổi tiếng trong tháng vừa qua.

**Lời giải:**

a) **Biểu đồ hình quạt tròn** là thích hợp nhất, vì dữ liệu biểu diễn cơ cấu tỉ lệ phần trăm của từng ngành cấu thành nên $100\%$ tổng sản phẩm trên địa bàn (GDP).
b) **Biểu đồ đoạn thẳng** là thích hợp nhất, vì dữ liệu phản ánh xu thế thay đổi nhiệt độ liên tục theo chu kỳ thời gian (từ tháng 1 đến tháng 12).
c) **Biểu đồ cột kép** là thích hợp nhất, vì bài toán yêu cầu so sánh song song hai nhóm đối tượng (học sinh Nam và học sinh Nữ) trên cùng một danh mục phân loại là 4 khối lớp.
d) **Biểu đồ cột (đơn)** là thích hợp nhất, vì cần so sánh độ lớn số lượng sách bán được giữa 5 đối tượng độc lập là 5 nhà văn.

---

### Dạng 2: Hoàn thiện bảng số liệu và chuyển đổi sang biểu đồ

**Phương pháp giải:**
1. Tính toán các giá trị còn thiếu bằng các phép tính tỉ lệ phần trăm.
2. Vẽ biểu đồ chuẩn: Trục, mốc chia đều, tên biểu đồ, chú giải.

---

#### Bài toán 2:
Một câu lạc bộ thể thao trường học có $120$ thành viên tham gia 4 bộ môn: *Cầu lông, Bóng rổ, Bóng đá, Bơi lội*. Số liệu thống kê như sau:
- Bộ môn Cầu lông có $36$ học sinh.
- Bộ môn Bóng rổ chiếm $25\%$ tổng số thành viên.
- Số học sinh tham gia Bóng đá gấp đôi số học sinh tham gia Bơi lội.
a) Tính số học sinh tham gia mỗi bộ môn và lập bảng thống kê tỉ lệ phần trăm tương ứng.
b) Tính góc ở tâm tương ứng của từng bộ môn để biểu diễn trên biểu đồ hình quạt tròn.

**Lời giải:**

a) Tính số lượng học sinh:
- Số học sinh chơi Cầu lông: $36$ bạn.
  Tỉ lệ: $\frac{36}{120} \times 100\% = 30\%$.
- Số học sinh chơi Bóng rổ: $120 \times 25\% = 30$ bạn.
- Tổng số học sinh chơi Bóng đá và Bơi lội là:
  $$120 - (36 + 30) = 120 - 66 = 54\text{ bạn}$$
- Gọi số học sinh Bơi lội là $x$, số học sinh Bóng đá là $2x$:
  $$x + 2x = 54 \iff 3x = 54 \implies x = 18\text{ bạn}$$
  Vậy Bơi lội có $18$ bạn; Bóng đá có $18 \times 2 = 36$ bạn.
- Tỉ lệ phần trăm:
  - Bóng đá: $\frac{36}{120} \times 100\% = 30\%$.
  - Bơi lội: $\frac{18}{120} \times 100\% = 15\%$.

**Bảng thống kê hoàn chỉnh:**

| Môn thể thao | Số học sinh (bạn) | Tỉ lệ phần trăm (%) |
| :--- | :---: | :---: |
| Cầu lông | 36 | 30% |
| Bóng rổ | 30 | 25% |
| Bóng đá | 36 | 30% |
| Bơi lội | 18 | 15% |
| **Tổng cộng** | **120** | **100%** |

b) Tính góc ở tâm tương ứng trong biểu đồ hình quạt tròn:
- Cầu lông ($30\%$): $360^\circ \times 30\% = 108^\circ$.
- Bóng rổ ($25\%$): $360^\circ \times 25\% = 90^\circ$ (góc vuông).
- Bóng đá ($30\%$): $360^\circ \times 30\% = 108^\circ$.
- Bơi lội ($15\%$): $360^\circ \times 15\% = 54^\circ$.
Kiểm tra lại: $108^\circ + 90^\circ + 108^\circ + 54^\circ = 360^\circ$ (chuẩn xác).

---

### Dạng 3: Đọc và khai thác số liệu từ biểu đồ

**Phương pháp giải:**
Đọc giá trị trên trục tung/đoạn đỉnh, tính mức chênh lệch tuyệt đối và phần trăm tăng trưởng:
$$\text{Tỉ lệ tăng trưởng} = \frac{\text{Giá trị sau} - \text{Giá trị trước}}{\text{Giá trị trước}} \times 100\%$$

---

#### Bài toán 3:
Một biểu đồ đoạn thẳng ghi lại số lượng xe đạp điện bán được của một cửa hàng qua 4 quý năm 2025:
- Quý I: $80$ chiếc.
- Quý II: $100$ chiếc.
- Quý III: $150$ chiếc.
- Quý IV: $120$ chiếc.
a) Lập bảng thống kê tương ứng với biểu đồ.
b) Tổng số xe đạp điện bán được trong cả năm là bao nhiêu chiếc? Quý nào có lượng tiêu thụ cao nhất?
c) Lượng xe bán ra ở Quý III tăng bao nhiêu phần trăm so với Quý II?
d) Quý IV lượng xe bán ra giảm bao nhiêu phần trăm so với Quý III?

**Lời giải:**

a) Bảng thống kê số lượng xe đạp điện bán được năm 2025:

| Quý | Quý I | Quý II | Quý III | Quý IV | Cả năm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Số lượng xe bán được (chiếc) | 80 | 100 | 150 | 120 | 450 |

b) Tổng số xe đạp điện bán được trong cả năm là:
$$80 + 100 + 150 + 120 = 450\text{ chiếc}$$
Quý có lượng tiêu thụ cao nhất là **Quý III** với $150$ chiếc (đây là mùa tựu trường học sinh mua xe nhiều nhất).

c) Mức tăng trưởng từ Quý II lên Quý III:
$$\text{Tỉ lệ tăng} = \frac{150 - 100}{100} \times 100\% = \frac{50}{100} \times 100\% = 50\%$$
Vậy lượng xe bán ra ở Quý III tăng $50\%$ so với Quý II.

d) Mức giảm từ Quý III xuống Quý IV:
$$\text{Tỉ lệ giảm} = \frac{150 - 120}{150} \times 100\% = \frac{30}{150} \times 100\% = 20\%$$
Vậy lượng xe bán ra ở Quý IV giảm $20\%$ so với Quý III.

---

### Dạng 4: Phát hiện lỗi sai và chi tiết gây hiểu lầm trong biểu đồ

**Phương pháp giải:**
Kiểm tra tính thống nhất của các trục tọa độ, tỉ lệ phần trăm tổng bằng $100\%$ và sự trung thực của độ dài các cột.

---

#### Bài toán 4:
Trong một chương trình quảng cáo nước ngọt, nhãn hàng đưa ra biểu đồ cột so sánh điểm đánh giá hương vị của hai loại nước giải khát:
- Nhãn hàng A: $98$ điểm.
- Nhãn hàng B: $92$ điểm.
Tuy nhiên, trên biểu đồ, cột của nhãn hàng A được vẽ cao **gấp 4 lần** cột của nhãn hàng B.
a) Em hãy giải thích vì sao người vẽ lại tạo ra được hình ảnh cột của A cao gấp 4 lần cột của B dù số điểm thực tế chỉ chênh lệch $6$ điểm ($98$ so với $92$)?
b) Biểu đồ như vậy có khách quan không và gây ra tác động tâm lý gì cho người tiêu dùng?

**Lời giải:**

a) Người vẽ biểu đồ đã cố tình áp dụng kỹ thuật **cắt cụt trục tung (Truncated Axis)**:
- Thay vì bắt đầu trục tung từ số $0$, họ đã cho trục tung bắt đầu từ số $90$.
- Chiều cao thực vẽ của cột B tương ứng với đoạn: $92 - 90 = 2\text{ đơn vị}$.
- Chiều cao thực vẽ của cột A tương ứng với đoạn: $98 - 90 = 8\text{ đơn vị}$.
- Vì $\frac{8}{2} = 4$ nên trên hình vẽ, cột của nhãn hàng A cao gấp 4 lần cột của nhãn hàng B!

b) Nhận xét:
- Biểu đồ này **hoàn toàn không khách quan và mang tính chất đánh lừa thị giác**.
- Tác động tâm lý: Người tiêu dùng nhìn lướt qua sẽ tưởng rằng chất lượng hương vị của nhãn hàng A vượt trội áp đảo gấp $4$ lần nhãn hàng B, trong khi thực tế mức chênh lệch chỉ là $\frac{98 - 92}{92} \approx 6,5\%$ — một sự chênh lệch rất nhỏ trong thử nghiệm cảm quan.

---

## III. 5 Chuyên đề ứng dụng thực tế & Mở rộng chuyên sâu

### 1. Bảng điều khiển kinh doanh thông minh (Business Dashboard)
Các giám đốc điều hành tập đoàn đa quốc gia không có thời gian đọc hàng nghìn trang tài liệu excel:
- Họ sử dụng **Dashboard (Bảng điều khiển trực quan)**: Kết hợp biểu đồ cột kép (so sánh doanh số theo khu vực), biểu đồ quạt tròn (thị phần sản phẩm) và biểu đồ đường (dòng tiền theo ngày).
- Chỉ trong $30\text{ giây}$ nhìn vào màn hình, các nhà quản lý đã nắm trọn "sức khỏe tài chính" của doanh nghiệp để đưa ra quyết định kịp thời.

### 2. Theo dõi sức khỏe cá nhân trên đồng hồ thông minh (Apple Watch, Garmin)
Chiếc đồng hồ thông minh trên cổ tay liên tục biểu diễn dữ liệu cơ thể:
- **Biểu đồ đoạn thẳng:** Theo dõi biến thiên nhịp tim qua từng phút trong buổi tập chạy bộ (phát hiện nhịp tim đập quá nhanh cảnh báo nguy cơ đột quỵ).
- **Vòng tròn hoạt động (Activity Rings):** Biểu đồ hình cung thể hiện tỉ lệ hoàn thành mục tiêu calo, số phút tập luyện và số giờ đứng dậy vận động trong ngày.

### 3. Thị trường tài chính: Biểu đồ nến Nhật (Candlestick Chart)
Do thương nhân người Nhật Munehisa Homma sáng tạo ra từ thế kỷ 18 để buôn bán gạo, ngày nay biểu đồ nến là chuẩn mực toàn cầu trên thị trường chứng khoán:
- Mỗi "cây nến" biểu diễn đồng thời $4$ mức giá trong ngày: Giá mở cửa, Giá đóng cửa, Giá cao nhất và Giá thấp nhất.
- Màu nến (Xanh/Đỏ) thể hiện tâm lý lạc quan hay bi quan của hàng triệu nhà đầu tư trên toàn thế giới.

### 4. Báo cáo biến đổi khí hậu: Dải sọc nhiệt độ (Warming Stripes)
Giáo sư khí hậu Ed Hawkins (Đại học Reading) đã tạo nên biểu đồ nổi tiếng nhất về môi trường:
- Không dùng trục số phức tạp, ông chỉ dùng các vạch màu xếp liền nhau từ năm 1850 đến nay: Màu xanh biển (năm lạnh) chuyển dần sang màu đỏ rực và đỏ thẫm (những năm gần đây).
- Biểu đồ tối giản này ngay lập tức truyền đi thông điệp báo động toàn cầu về hiện tượng Trái Đất nóng lên mà bất kì ai cũng có thể hiểu ngay tức khắc.

### 5. Dịch tễ học: Đường cong dịch bệnh và chiến dịch "Làm phẳng đường cong"
Trong đại dịch COVID-19, biểu đồ đoạn thẳng về số ca nhiễm mỗi ngày là tâm điểm của truyền thông quốc tế:
- Mục tiêu y tế công cộng là **"Làm phẳng đường cong" (Flatten the curve)**: Kéo đỉnh biểu đồ đường nằm dưới năng lực tối đa của hệ thống giường bệnh điều trị tích cực, ngăn ngừa sụp đổ hệ thống y tế quốc gia.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Để biểu diễn tỉ lệ phần trăm số học sinh đạt các loại học lực (Tốt, Khá, Đạt, Chưa đạt) của khối 8, loại biểu đồ nào sau đây là phù hợp nhất?",
  "options": [
    "Biểu đồ đoạn thẳng",
    "Biểu đồ hình quạt tròn",
    "Biểu đồ cột kép",
    "Biểu đồ phân tán"
  ],
  "answer": 1,
  "explanation": "Biểu đồ hình quạt tròn là lựa chọn tối ưu nhất khi muốn biểu diễn cơ cấu tỉ lệ phần trăm của từng thành phần so với tổng thể 100%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Để theo dõi nhiệt độ không khí tại một địa phương qua các giờ trong ngày, loại biểu đồ nào sau đây là thích hợp nhất?",
  "options": [
    "Biểu đồ đoạn thẳng",
    "Biểu đồ hình quạt tròn",
    "Biểu đồ tranh",
    "Biểu đồ hình tròn phân đoạn"
  ],
  "answer": 0,
  "explanation": "Biểu đồ đoạn thẳng dùng để thể hiện diễn biến, xu hướng thay đổi liên tục của một đại lượng theo thời gian."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Để so sánh số lượng học sinh Nam và học sinh Nữ của 4 lớp khối 8 tham gia câu lạc bộ bơi lội, loại biểu đồ nào sau đây là phù hợp nhất?",
  "options": [
    "Biểu đồ cột đơn",
    "Biểu đồ cột kép",
    "Biểu đồ hình quạt tròn",
    "Biểu đồ đoạn thẳng"
  ],
  "answer": 1,
  "explanation": "Biểu đồ cột kép là lựa chọn tốt nhất để so sánh song song hai nhóm đối tượng (Nam và Nữ) trên cùng các danh mục phân loại (4 lớp)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Trong biểu đồ hình quạt tròn, phần quạt biểu diễn tỉ lệ 20% ứng với góc ở tâm bằng bao nhiêu độ?",
  "options": [
    "20°",
    "36°",
    "72°",
    "90°"
  ],
  "answer": 2,
  "explanation": "Góc ở tâm tương ứng là: 360° · 20% = 360° · 0.2 = 72°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong biểu đồ hình quạt tròn, một hình quạt có góc ở tâm bằng 135° biểu diễn tỉ lệ phần trăm bằng bao nhiêu?",
  "options": [
    "35%",
    "37.5%",
    "40%",
    "25%"
  ],
  "answer": 1,
  "explanation": "Tỉ lệ phần trăm = (135° / 360°) · 100% = (3/8) · 100% = 37.5%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Doanh thu của một cửa hàng trong 4 quý năm 2025 lần lượt là 200 triệu, 250 triệu, 300 triệu, 450 triệu đồng. Tỉ lệ tăng trưởng doanh thu từ Quý I lên Quý IV là:",
  "options": [
    "125%",
    "225%",
    "250%",
    "150%"
  ],
  "answer": 0,
  "explanation": "Tỉ lệ tăng trưởng = [(450 - 200) / 200] · 100% = (250 / 200) · 100% = 125%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một biểu đồ hình quạt tròn thể hiện tỉ lệ các loại sách trong thư viện: Sách giáo khoa (40%), Truyện tranh (30%), Sách tham khảo (20%), Báo tạp chí (20%). Biểu đồ này có hợp lý không?",
  "options": [
    "Hợp lý vì tỉ lệ sách giáo khoa lớn nhất",
    "Hợp lý vì tất cả đều là số phần trăm dương",
    "Không hợp lý vì tổng các tỉ lệ phần trăm bằng 110% (vượt quá 100%)",
    "Chưa thể xác định"
  ],
  "answer": 2,
  "explanation": "Tổng các thành phần: 40% + 30% + 20% + 20% = 110% > 100%, do đó biểu đồ không hợp lý."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Biểu đồ cột có trục tung không bắt đầu từ số 0 mà bắt đầu từ số 90 có thể gây ra hiện tượng gì?",
  "options": [
    "Biểu đồ vẽ đẹp hơn",
    "Gây ảo giác phóng đại sự chênh lệch giữa các cột",
    "Làm số liệu bị giảm đi một nửa",
    "Không ảnh hưởng gì đến cảm nhận của người xem"
  ],
  "answer": 1,
  "explanation": "Khi cắt cụt trục tung, chiều cao của cột không còn tỉ lệ thuận với giá trị dữ liệu, tạo ra ảo giác chênh lệch gấp nhiều lần so với thực tế."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho bảng thống kê số cây trồng được của 4 lớp khối 8: Lớp 8A (35 cây), Lớp 8B (40 cây), Lớp 8C (30 cây), Lớp 8D (45 cây). Dạng biểu đồ nào thích hợp nhất để so sánh số cây trồng của các lớp?",
  "options": [
    "Biểu đồ đoạn thẳng",
    "Biểu đồ cột",
    "Biểu đồ hình quạt tròn",
    "Biểu đồ phân tán"
  ],
  "answer": 1,
  "explanation": "Biểu đồ cột là lựa chọn chuẩn mực nhất để so sánh giá trị số lượng giữa các đối tượng phân loại độc lập."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Nếu muốn biểu diễn số ca khỏi bệnh COVID-19 và số ca nhiễm mới ghi nhận mỗi ngày trong một tháng, người ta nên dùng:",
  "options": [
    "Biểu đồ hình quạt tròn",
    "Biểu đồ đoạn thẳng kép (hoặc biểu đồ cột kép)",
    "Biểu đồ tranh",
    "Bảng chữ cái"
  ],
  "answer": 1,
  "explanation": "Biểu đồ đoạn thẳng kép (hoặc cột kép) cho phép so sánh sự biến động của hai đại lượng theo chuỗi thời gian liên tục."
}'></div>

---

## V. Đề kiểm tra 45 phút chuẩn ma trận & Barem điểm chi tiết

### 1. Ma trận đề kiểm tra 45 phút — Biểu diễn dữ liệu bằng bảng, biểu đồ

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

**Câu 1:** Dạng biểu đồ nào sau đây thích hợp nhất để biểu diễn tỉ lệ phần trăm số học sinh yêu thích các thể loại âm nhạc?
- A. Biểu đồ đoạn thẳng
- B. Biểu đồ cột kép
- C. Biểu đồ hình quạt tròn
- D. Biểu đồ đám mây

**Câu 2:** Biểu đồ nào thích hợp nhất để thể hiện sự thay đổi dân số Việt Nam qua các cuộc tổng điều tra dân số các năm 1979, 1989, 1999, 2009, 2019?
- A. Biểu đồ đoạn thẳng
- B. Biểu đồ hình quạt tròn
- C. Biểu đồ tròn lồng nhau
- D. Biểu đồ thanh ngang

**Câu 3:** Trong biểu đồ hình quạt tròn, góc ở tâm ứng với tỉ lệ $15\%$ là:
- A. $15^\circ$
- B. $54^\circ$
- C. $36^\circ$
- D. $60^\circ$

**Câu 4:** Để so sánh sản lượng xuất khẩu cà phê và xuất khẩu hồ tiêu của Việt Nam qua 5 năm gần đây, người ta nên dùng biểu đồ:
- A. Cột đơn
- B. Cột kép
- C. Hình quạt tròn
- D. Tranh vẽ

**Câu 5:** Một cửa hàng bán được $120$ chiếc áo trong tuần. Biểu đồ hình quạt tròn cho biết áo size M chiếm $45\%$. Số áo size M đã bán là:
- A. $45$ chiếc
- B. $54$ chiếc
- C. $60$ chiếc
- D. $48$ chiếc

**Câu 6:** Điểm kiểm tra học kỳ của một lớp được ghi lại bởi biểu đồ cột có trục tung bắt đầu từ $7$ điểm thay vì $0$ điểm. Biểu đồ này có nguy cơ:
- A. Làm học sinh tưởng rằng không ai bị dưới 7 điểm
- B. Thổi phồng sự chênh lệch điểm số giữa các nhóm học sinh
- C. Làm cho số lượng học sinh bị giảm đi
- D. Giúp biểu đồ chính xác hơn

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
Em hãy lựa chọn dạng biểu đồ thích hợp nhất để biểu diễn các tập dữ liệu sau và giải thích ngắn gọn lý do:
a) Tỉ lệ phần trăm thị phần của các trình duyệt web tại Việt Nam: *Google Chrome (68%), Cốc Cốc (15%), Safari (12%), Khác (5%)*.
b) Số lượng học sinh Nam và Nữ của các khối 6, 7, 8, 9 đạt danh hiệu "Cháu ngoan Bác Hồ".
c) Giá vàng SJC bán ra vào các ngày thứ Hai, thứ Tư, thứ Sáu trong tuần qua.
d) Doanh số bán trà sữa của một quán trong 4 tuần của tháng 10.

**Bài 2 (2,0 điểm):**
Một trường THCS có $400$ học sinh khối 8. Kết quả khảo sát phương tiện đi học hàng ngày của học sinh được cho trong bảng sau:

| Phương tiện | Xe đạp | Xe đạp điện | Được bố mẹ đưa đón | Đi bộ |
| :--- | :---: | :---: | :---: | :---: |
| Số học sinh (bạn) | 160 | 120 | 80 | 40 |

a) Tính tỉ lệ phần trăm học sinh sử dụng mỗi loại phương tiện đi học.
b) Tính số đo góc ở tâm tương ứng với từng phương tiện để biểu diễn trên biểu đồ hình quạt tròn.

**Bài 3 (2,0 điểm):**
Một biểu đồ cột kép biểu diễn số học sinh Giỏi môn Toán và môn Ngữ văn của 4 lớp 8A, 8B, 8C, 8D như sau:
- Lớp 8A: Toán $12$ bạn, Ngữ văn $10$ bạn.
- Lớp 8B: Toán $15$ bạn, Ngữ văn $14$ bạn.
- Lớp 8C: Toán $8$ bạn, Ngữ văn $16$ bạn.
- Lớp 8D: Toán $14$ bạn, Ngữ văn $12$ bạn.
a) Lập bảng thống kê tương ứng với biểu đồ cột kép trên.
b) Lớp nào có tổng số học sinh giỏi cả hai môn nhiều nhất? Lớp nào có số học sinh giỏi môn Ngữ văn vượt trội so với môn Toán?
c) Tính tỉ số phần trăm giữa tổng số học sinh giỏi môn Toán và tổng số học sinh giỏi môn Ngữ văn của cả 4 lớp.

**Bài 4 (1,0 điểm — Vận dụng cao):**
Một công ty công nghệ quảng cáo rằng: *"Doanh thu quý này của chúng tôi tăng trưởng bùng nổ, gấp 3 lần so với quý trước!"*. Kèm theo đó là một biểu đồ cột minh họa: Cột Quý I cao $2\text{ cm}$, cột Quý II cao $6\text{ cm}$.
Nhìn kỹ vào số liệu trên biểu đồ, người ta thấy: Doanh thu Quý I là $100$ tỷ đồng, Doanh thu Quý II là $120$ tỷ đồng.
a) Hãy vạch trần thủ thuật vẽ biểu đồ mà công ty này đã sử dụng để "thổi phồng" cột doanh thu gấp 3 lần.
b) Tính mức tăng trưởng doanh thu thực tế của công ty từ Quý I sang Quý II.

---

### 3. Đáp án & Barem chấm điểm chi tiết

#### PHẦN I: TRẮC NGHIỆM (3,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **C** | **A** | **B** | **B** | **B** | **B** |
| **Điểm** | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ | 0,5 đ |

---

#### PHẦN II: TỰ LUẬN (7,0 điểm)

**Bài 1 (2,0 điểm):**
- a) Biểu đồ hình quạt tròn (vì thể hiện cơ cấu phần trăm thị phần so với toàn thể $100\%$) *(0,5 đ)*.
- b) Biểu đồ cột kép (vì so sánh đồng thời hai nhóm đối tượng Nam và Nữ trên 4 khối lớp) *(0,5 đ)*.
- c) Biểu đồ đoạn thẳng (vì phản ánh sự biến động của giá vàng theo dòng thời gian các ngày trong tuần) *(0,5 đ)*.
- d) Biểu đồ cột đơn (hoặc biểu đồ đoạn thẳng) để so sánh lượng tiêu thụ giữa 4 tuần *(0,5 đ)*.

**Bài 2 (2,0 điểm):**
- a) (1,0 điểm)
  - Xe đạp: $\frac{160}{400} \times 100\% = 40\%$ *(0,25 đ)*.
  - Xe đạp điện: $\frac{120}{400} \times 100\% = 30\%$ *(0,25 đ)*.
  - Bố mẹ đưa đón: $\frac{80}{400} \times 100\% = 20\%$ *(0,25 đ)*.
  - Đi bộ: $\frac{40}{400} \times 100\% = 10\%$ *(0,25 đ)*.
- b) (1,0 điểm)
  - Góc cho Xe đạp: $360^\circ \times 40\% = 144^\circ$ *(0,25 đ)*.
  - Góc cho Xe đạp điện: $360^\circ \times 30\% = 108^\circ$ *(0,25 đ)*.
  - Góc cho Bố mẹ đưa đón: $360^\circ \times 20\% = 72^\circ$ *(0,25 đ)*.
  - Góc cho Đi bộ: $360^\circ \times 10\% = 36^\circ$ *(0,25 đ)*.

**Bài 3 (2,0 điểm):**
- a) (1,0 điểm) Bảng thống kê số học sinh giỏi môn Toán và Ngữ văn:

| Lớp | 8A | 8B | 8C | 8D | Tổng cộng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Học sinh giỏi Toán (bạn) | 12 | 15 | 8 | 14 | **49** |
| Học sinh giỏi Ngữ văn (bạn) | 10 | 14 | 16 | 12 | **52** |
| **Tổng cộng** | **22** | **29** | **24** | **26** | **101** |

*(Ghi đúng và đủ mỗi lớp 0,25 đ)*.
- b) (0,5 điểm)
  - Lớp có tổng số học sinh giỏi nhiều nhất là lớp **8B** ($29$ bạn) *(0,25 đ)*.
  - Lớp có học sinh giỏi Ngữ văn vượt trội so với Toán là lớp **8C** ($16$ bạn so với $8$ bạn, gấp đôi) *(0,25 đ)*.
- c) (0,5 điểm)
  - Tỉ số phần trăm: $\frac{49}{52} \times 100\% \approx 94,23\%$ *(0,5 đ)*.

**Bài 4 (1,0 điểm):**
- a) (0,5 điểm)
  - Công ty đã sử dụng thủ thuật **cắt cụt trục tung**: Cho gốc trục tung bắt đầu từ $90$ tỷ đồng thay vì $0$ tỷ đồng.
  - Khi đó:
    - Cột Quý I tương ứng với: $100 - 90 = 10$ đơn vị (vẽ cao $2\text{ cm}$).
    - Cột Quý II tương ứng với: $120 - 90 = 30$ đơn vị (vẽ cao $6\text{ cm}$).
    Do $30 : 10 = 3$ nên cột Quý II cao gấp 3 lần cột Quý I, đánh lừa mắt người xem *(0,5 đ)*.
- b) (0,5 điểm)
  - Mức tăng trưởng doanh thu thực tế:
    $$\text{Tỉ lệ tăng trưởng} = \frac{120 - 100}{100} \times 100\% = 20\%$$
    Thực tế doanh thu chỉ tăng $20\%$ chứ hoàn toàn không phải tăng gấp 3 lần ($200\%$) như hình vẽ gây hiểu lầm *(0,5 đ)*.
