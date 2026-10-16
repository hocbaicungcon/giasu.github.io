---
title: 'Ôn tập Chương 5: Thu thập và biểu diễn dữ liệu - Tổng hợp Lý thuyết, Ma trận Biểu đồ và 5 Chuyên đề Nâng cao'
description: 'Hệ thống hóa toàn bộ kiến thức Chương 5 Toán 7: Phân loại dữ liệu, ma trận so sánh 4 loại biểu đồ (Cột, Quạt tròn, Đoạn thẳng, Tranh), phát hiện ngụy biện thống kê kèm 10 quiz tương tác và đề kiểm tra 45 phút chuẩn ma trận.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Thống kê 7
  - Thu thập dữ liệu
  - Biểu đồ hình quạt tròn
  - Biểu đồ đoạn thẳng
  - Ôn tập chương 5
  - Kết nối tri thức
grade: 7
---

# Ôn tập Chương 5. Thu thập và biểu diễn dữ liệu

Trong kỷ nguyên bùng nổ thông tin và trí tuệ nhân tạo, nhà toán học nổi tiếng người Mỹ W. Edwards Deming từng khẳng định một chân lý kinh điển: *"Không có dữ liệu, bạn chỉ là một người bình thường với một ý kiến cá nhân" (Without data, you're just another person with an opinion)*. Tuy nhiên, chỉ có dữ liệu thô thôi là chưa đủ; điều quyết định sức mạnh của tư duy chính là khả năng **chọn lọc, phân loại chuẩn xác và trực quan hóa dữ liệu** thành những biểu đồ biết nói.

Chương 5 đã trang bị cho chúng ta chiếc kính vạn hoa của ngành Thống kê học: từ việc phân biệt dữ liệu định tính hay định lượng, nhận diện tính hợp lý và tính đại diện của mẫu khảo sát (Bài 17), đến việc phân chia các lát cắt thị phần bằng biểu đồ hình quạt tròn (Bài 18) và bắt nhịp xu hướng biến thiên theo thời gian qua biểu đồ đoạn thẳng (Bài 19). Bài ôn tập tổng hợp này sẽ giúp các em xâu chuỗi toàn bộ kiến thức thành một bức tranh liền mạch, xây dựng bản lĩnh phản biện trước các con số và làm chủ phương pháp lựa chọn biểu đồ tối ưu nhất trong mọi tình huống thực tế!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC TỔNG ÔN CHƯƠNG 5: THỐNG KÊ VÀ TRỰC QUAN HÓA</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Thu thập & Phân loại</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Định tính:</strong> Chữ/kí hiệu (Không thứ tự vs Có thứ tự).<br>• <strong>Định lượng:</strong> Số (Rời rạc vs Liên tục).<br>• Kiểm tra tính <strong>hợp lý</strong> và tính <strong>đại diện</strong> của dữ liệu.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Biểu đồ hình quạt tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu diễn <strong>tỉ lệ phần trăm</strong> so với toàn thể $100\%$.<br>• Góc ở tâm: $\alpha = p \times 3.6^\circ$.<br>• Toàn thể hình tròn $= 360^\circ$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biểu đồ đoạn thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biểu diễn <strong>xu hướng biến thiên theo thời gian</strong>.<br>• Đoạn dốc lên: Tăng; dốc xuống: Giảm; nằm ngang: Ổn định.<br>• Biểu đồ kép: So sánh hai đại lượng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Lựa chọn biểu đồ tối ưu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• So sánh số lượng độc lập $\to$ <strong>Biểu đồ cột</strong>.<br>• So sánh cơ cấu phần trăm $\to$ <strong>Biểu đồ quạt tròn</strong>.<br>• Theo dõi tiến trình thời gian $\to$ <strong>Biểu đồ đoạn thẳng</strong>.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ toàn diện (5–7 phút)

Hãy kiểm tra nhanh khả năng nhận diện dữ liệu và biểu đồ qua $5$ câu hỏi phản xạ:

1. **Phân loại dữ liệu:** "Số lượng huy chương vàng của các đoàn thể thao tại SEA Games" là dữ liệu định tính hay định lượng? Rời rạc hay liên tục?
2. **Chọn loại biểu đồ:** Muốn so sánh lượng xuất khẩu gạo của Việt Nam qua từng năm từ 2018 đến 2026, ta nên chọn loại biểu đồ nào?
3. **Tính góc ở tâm:** Trong biểu đồ hình quạt tròn, một thành phần chiếm $15\%$ tổng thể thì ứng với góc ở tâm bao nhiêu độ?
4. **Nhận xét xu hướng:** Điểm kiểm tra của bạn Bình trong $3$ tháng đầu học kỳ là $6.5$; $8.0$; $7.5$. Đoạn thẳng từ tháng 1 đến tháng 2 dốc lên hay dốc xuống? Từ tháng 2 đến tháng 3 dốc lên hay dốc xuống?
5. **Phát hiện lỗi sai:** Một biểu đồ hình quạt tròn chia thành $3$ phần với tỉ lệ lần lượt là $40\%$, $35\%$, $30\%$. Biểu đồ này có hợp lý không? Vì sao?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** Đây là dữ liệu **định lượng**, dạng **rời rạc** (vì huy chương chỉ nhận giá trị là các số nguyên không âm: $0, 1, 2, 3...$).
2. **Trả lời:** Nên chọn **biểu đồ đoạn thẳng** (hoặc biểu đồ cột) vì dữ liệu theo dõi biến thiên theo thời gian qua các năm.
3. **Trả lời:** Góc ở tâm là: $\alpha = 15 \times 3.6^\circ = 54^\circ$.
4. **Trả lời:**
   - Từ tháng 1 ($6.5$) đến tháng 2 ($8.0$): Dốc lên (xu hướng tăng).
   - Từ tháng 2 ($8.0$) đến tháng 3 ($7.5$): Dốc xuống (xu hướng giảm nhẹ).
5. **Trả lời:** Biểu đồ này **không hợp lý**, vì tổng các tỉ lệ phần trăm là $40\% + 35\% + 30\% = 105\% > 100\%$. Một biểu đồ hình quạt tròn chuẩn mực bắt buộc tổng các thành phần phải bằng đúng $100\%$.
</details>

---

## I. Hệ thống hóa Lý thuyết toàn chương

### 1. Ma trận phân loại dữ liệu thống kê

| Loại dữ liệu | Dạng cụ thể | Đặc điểm nhận biết | Ví dụ minh họa thực tiễn |
| :--- | :--- | :--- | :--- |
| **Dữ liệu định tính** *(Qualitative)* | **Không thể sắp thứ tự** *(Nominal)* | Là chữ, danh từ, nhãn mác; không có thứ bậc hơn kém tự nhiên. | Nơi sinh, nhóm máu ($A, B, AB, O$), màu sắc ưa thích, quốc tịch. |
| | **Có thể sắp thứ tự** *(Ordinal)* | Là chữ/kí hiệu nhưng có thể xếp hạng từ thấp đến cao (hoặc ngược lại). | Xếp loại học lực (Xuất sắc, Giỏi, Khá, Đạt), cỡ áo ($S, M, L, XL$), mức độ hài lòng. |
| **Dữ liệu định lượng** *(Quantitative)* | **Rời rạc** *(Discrete)* | Nhận các giá trị riêng biệt, thường là số nguyên thu được từ việc **đếm**. | Số thành viên trong gia đình, số bàn thắng, số lỗi chính tả trong bài tập làm văn. |
| | **Liên tục** *(Continuous)* | Có thể nhận bất kỳ giá trị thực nào trong một khoảng, thu được từ việc **đo lường**. | Chiều cao ($\text{cm}$), cân nặng ($\text{kg}$), nhiệt độ không khí ($^\circ\text{C}$), thời gian chạy $100\text{m}$ ($\text{giây}$). |

---

### 2. Ma trận đối sánh 4 loại biểu đồ trực quan hóa

Để không bao giờ bị nhầm lẫn khi lựa chọn biểu đồ, hãy ghi nhớ bảng đối sánh toàn diện sau:

| Tiêu chí | Biểu đồ cột *(Bar Chart)* | Biểu đồ hình quạt tròn *(Pie Chart)* | Biểu đồ đoạn thẳng *(Line Graph)* | Biểu đồ tranh *(Pictogram)* |
| :--- | :--- | :--- | :--- | :--- |
| **Mục đích chính** | So sánh quy mô, số lượng giữa các nhóm đối tượng độc lập. | Thể hiện cơ cấu, tỉ lệ phần trăm của các thành phần trong toàn thể $100\%$. | Theo dõi xu hướng tăng/giảm, biến thiên của đại lượng theo chuỗi thời gian. | Trực quan hóa dữ liệu đơn giản, sinh động cho đối tượng đại chúng hoặc thiếu nhi. |
| **Đặc điểm hình học** | Các cột chữ nhật có cùng chiều rộng, chiều cao tỉ lệ với số liệu. | Hình tròn chia thành các hình quạt, góc ở tâm $\alpha = p \times 3.6^\circ$. | Các điểm mốc nối với nhau bằng các đoạn gấp khúc liên tiếp. | Sử dụng các biểu tượng/hình vẽ, mỗi biểu tượng ứng với một số lượng nhất định. |
| **Khi nào NÊN dùng?** | Khi có từ $3$ đến $10$ nhóm đối tượng độc lập; cần so sánh tuyệt đối. | Khi muốn nhấn mạnh sự đóng góp vào tổng thể; số nhóm từ $3$ đến $6$ phần. | Khi dữ liệu có trục thời gian liên tục (giờ, ngày, tháng, năm...). | Khi dữ liệu tròn số, số lượng nhóm ít, cần gây ấn tượng thị giác thân thiện. |
| **Khi nào KHÔNG NÊN dùng?** | Khi muốn biểu diễn tiến trình liên tục theo thời gian dày đặc. | Khi có quá nhiều nhóm ($> 7$ phần); hoặc khi các phần trăm quá vụn vặt ($1\% - 2\%$). | Khi các đối tượng trên trục hoành rời rạc, không có quan hệ thời gian tuần tự. | Khi số liệu lẻ, phức tạp đòi hỏi độ chính xác tuyệt đối. |

---

### 3. Tiêu chí đánh giá tính hợp lý và tính đại diện của dữ liệu

Khi thu thập và phân tích dữ liệu, ta phải kiểm tra qua hai bộ lọc quan trọng:

1. **Tính hợp lý của dữ liệu:**
   - Dữ liệu nằm trong phạm vi thực tế (ví dụ: tuổi học sinh lớp 7 phải khoảng $12 - 14$, không thể âm hoặc lớn hơn $100$; điểm thi từ $0$ đến $10$).
   - Tổng phần trăm các thành phần phải bằng đúng $100\%$.
   - Số liệu đếm phải là số tự nhiên, không thể là phân số hay số thập phân.
2. **Tính đại diện của mẫu khảo sát:**
   - Kích thước mẫu đủ lớn.
   - Không thiên vị (ví dụ: muốn khảo sát môn thể thao yêu thích của học sinh toàn trường mà chỉ đi hỏi các bạn trong câu lạc bộ bóng đá là mẫu không có tính đại diện).

---

## II. Các dạng toán tổng hợp liên chương

### Dạng 1: Phân loại dữ liệu và kiểm tra tính hợp lý của dữ liệu thô

#### Bài toán 1:
Một nhóm học sinh lớp 7A tiến hành khảo sát $35$ bạn trong lớp về:
- Danh sách 1: Quê quán của mỗi bạn.
- Danh sách 2: Thời gian tự học ở nhà mỗi ngày (đơn vị: giờ).
- Danh sách 3: Số lượng sách đã đọc trong học kỳ 1.
- Danh sách 4: Đánh giá chất lượng bữa ăn bán trú (Rất ngon, Ngon, Bình thường, Chưa ngon).

a) Hãy phân loại từng danh sách dữ liệu trên theo bảng phân loại thống kê.
b) Trong danh sách 2, bạn Minh thu được các số liệu sau: $1.5$; $2$; $0.5$; $3$; $-1$; $12$; $2.5$. Hãy chỉ ra những giá trị không hợp lý và giải thích lý do.

**Lời giải:**

a) Phân loại dữ liệu:
- Danh sách 1 (Quê quán): Dữ liệu **định tính**, **không thể sắp thứ tự** (Nominal).
- Danh sách 2 (Thời gian tự học): Dữ liệu **định lượng**, **liên tục** (Continuous) vì thời gian đo bằng giờ có thể nhận giá trị thập phân.
- Danh sách 3 (Số lượng sách đã đọc): Dữ liệu **định lượng**, **rời rạc** (Discrete) vì số quyển sách thu được từ việc đếm các số nguyên không âm.
- Danh sách 4 (Đánh giá bữa ăn bán trú): Dữ liệu **định tính**, **có thể sắp thứ tự** (Ordinal) theo mức độ hài lòng từ thấp đến cao.

b) Kiểm tra tính hợp lý trong danh sách 2:
- Giá trị **$-1$** không hợp lý vì thời gian tự học không thể nhận giá trị âm.
- Giá trị **$12$** giờ không hợp lý trong hoàn cảnh thực tế của học sinh THCS, vì một ngày học sinh còn phải học ở trường $6 - 8$ tiếng, ăn ngủ và sinh hoạt, không thể tự học ở nhà đến $12$ giờ mỗi ngày.

---

### Dạng 2: Từ bảng số liệu chọn biểu đồ thích hợp và vẽ biểu đồ

#### Bài toán 2:
Cho bảng số liệu về số lượng cây xanh được trồng bởi các khối lớp trong phong trào "Tết trồng cây" của một trường THCS:

| Khối lớp | Khối 6 | Khối 7 | Khối 8 | Khối 9 |
| :---: | :---: | :---: | :---: | :---: |
| Số cây trồng được (cây) | $120$ | $150$ | $180$ | $150$ |

a) Để so sánh số cây trồng được giữa các khối lớp, ta nên vẽ loại biểu đồ nào?
b) Nếu muốn thể hiện cơ cấu phần trăm số cây của từng khối so với toàn trường, ta chọn biểu đồ nào? Hãy tính tỉ lệ phần trăm và số đo góc ở tâm tương ứng của mỗi khối lớp trên biểu đồ đó.

**Lời giải:**

a) Để so sánh trực tiếp số lượng cây giữa các khối lớp độc lập, ta nên sử dụng **biểu đồ cột**.

b) Để biểu diễn cơ cấu phần trăm, ta sử dụng **biểu đồ hình quạt tròn**.
- Tổng số cây cả trường trồng được là:
$$N = 120 + 150 + 180 + 150 = 600\text{ (cây)}$$
- Tỉ lệ phần trăm và góc ở tâm tương ứng:
  + Khối 6: $p_6 = \frac{120}{600} \times 100\% = 20\%$. Góc ở tâm: $\alpha_6 = 20 \times 3.6^\circ = 72^\circ$.
  + Khối 7: $p_7 = \frac{150}{600} \times 100\% = 25\%$. Góc ở tâm: $\alpha_7 = 25 \times 3.6^\circ = 90^\circ$.
  + Khối 8: $p_8 = \frac{180}{600} \times 100\% = 30\%$. Góc ở tâm: $\alpha_8 = 30 \times 3.6^\circ = 108^\circ$.
  + Khối 9: $p_9 = \frac{150}{600} \times 100\% = 25\%$. Góc ở tâm: $\alpha_9 = 25 \times 3.6^\circ = 90^\circ$.
- Kiểm tra: $20\% + 25\% + 30\% + 25\% = 100\%$ và $72^\circ + 90^\circ + 108^\circ + 90^\circ = 360^\circ$ (chính xác tuyệt đối).

---

### Dạng 3: Chuyển đổi và liên kết dữ liệu giữa các loại biểu đồ

#### Bài toán 3:
Một biểu đồ hình quạt tròn biểu diễn cơ cấu chi tiêu trong tháng của một sinh viên gồm 4 khoản:
- Tiền nhà: $40\%$
- Tiền ăn: $35\%$
- Học tập & Đi lại: $15\%$
- Tiết kiệm & Dự phòng: $10\%$

Biết rằng tổng thu nhập trong tháng của bạn sinh viên là $6\,000\,000$ đồng.
a) Tính số tiền cụ thể bạn dành cho từng khoản chi tiêu.
b) Tính số đo góc ở tâm của từng hình quạt trên biểu đồ.
c) Nếu sang tháng sau, bạn quyết định giảm tiền nhà xuống còn $35\%$ và tăng tiền tiết kiệm lên, hỏi khoản tiết kiệm mới là bao nhiêu tiền?

**Lời giải:**

a) Số tiền chi tiêu cụ thể cho từng khoản:
- Tiền nhà: $6\,000\,000 \times \frac{40}{100} = 2\,400\,000$ đồng.
- Tiền ăn: $6\,000\,000 \times \frac{35}{100} = 2\,100\,000$ đồng.
- Học tập & Đi lại: $6\,000\,000 \times \frac{15}{100} = 900\,000$ đồng.
- Tiết kiệm: $6\,000\,000 \times \frac{10}{100} = 600\,000$ đồng.

b) Số đo góc ở tâm tương ứng:
- Góc tiền nhà: $40 \times 3.6^\circ = 144^\circ$.
- Góc tiền ăn: $35 \times 3.6^\circ = 126^\circ$.
- Góc học tập: $15 \times 3.6^\circ = 54^\circ$.
- Góc tiết kiệm: $10 \times 3.6^\circ = 36^\circ$.

c) Khi tiền nhà giảm từ $40\%$ xuống $35\%$ (giảm $5\%$), phần giảm này được chuyển sang tiền tiết kiệm:
- Tỉ lệ tiết kiệm mới là: $10\% + 5\% = 15\%$.
- Số tiền tiết kiệm mới là:
$$6\,000\,000 \times \frac{15}{100} = 900\,000\text{ (đồng)}$$

---

### Dạng 4: Phân tích số liệu chuỗi thời gian để ra quyết định chiến lược

#### Bài toán 4:
Bảng số liệu ghi lại lượng sản phẩm bán ra (đơn vị: chiếc) của hai sản phẩm $A$ và $B$ trong $4$ tháng cuối năm tại một siêu thị điện máy:

| Tháng | Tháng 9 | Tháng 10 | Tháng 11 | Tháng 12 |
| :---: | :---: | :---: | :---: | :---: |
| Sản phẩm $A$ | $150$ | $180$ | $210$ | $250$ |
| Sản phẩm $B$ | $240$ | $220$ | $200$ | $190$ |

a) Vẽ biểu đồ đoạn thẳng kép để so sánh xu hướng bán hàng của hai sản phẩm.
b) Mô tả xu hướng biến thiên của từng sản phẩm từ Tháng 9 đến Tháng 12.
c) Tại thời điểm nào thì lượng bán ra của sản phẩm $A$ bắt đầu vượt qua sản phẩm $B$? Nếu là chủ cửa hàng, em sẽ ưu tiên nhập thêm sản phẩm nào cho đợt Tết Nguyên Đán?

**Lời giải:**

a) Vẽ hai đường trên cùng một hệ trục:
- Đường sản phẩm $A$ (nét liền xanh): Nối các điểm $(T9; 150) \to (T10; 180) \to (T11; 210) \to (T12; 250)$.
- Đường sản phẩm $B$ (nét đứt cam): Nối các điểm $(T9; 240) \to (T10; 220) \to (T11; 200) \to (T12; 190)$.

b) Nhận xét xu hướng:
- Sản phẩm $A$: Có xu hướng **tăng liên tục và mạnh mẽ** qua các tháng (từ $150$ lên $250$ chiếc, tăng $66.7\%$).
- Sản phẩm $B$: Có xu hướng **giảm dần đều** qua từng tháng (từ $240$ xuống còn $190$ chiếc).

c) So sánh và ra quyết định:
- Ở Tháng 9 và Tháng 10: Lượng bán $B > A$.
- Ở Tháng 11: Lượng bán của $A$ ($210$ chiếc) đã chính thức **vượt qua** $B$ ($200$ chiếc).
- Đến Tháng 12: Khoảng cách nới rộng khi $A$ bán được $250$ chiếc trong khi $B$ chỉ bán được $190$ chiếc.
- **Quyết định kinh doanh:** Là chủ cửa hàng, em sẽ **ưu tiên nhập thêm sản phẩm $A$** vì sản phẩm $A$ đang có xu hướng tăng trưởng thị trường rất tốt và nhu cầu khách hàng ngày càng cao.

---

## III. 5 Chuyên đề Nâng cao & Mở rộng Tư duy Khoa học Dữ liệu

### Chuyên đề 1: Quy trình Khoa học Dữ liệu 5 bước (OSEMN Framework)

Trong thực tế tại các tập đoàn công nghệ lớn như Google hay Meta, các chuyên gia dữ liệu luôn tuân thủ quy trình chuẩn $5$ bước có tên là **OSEMN**:

1. **Obtain (Thu thập):** Lấy dữ liệu qua khảo sát, cảm biến IoT, file Excel hay cơ sở dữ liệu SQL (Bài 17).
2. **Scrub (Làm sạch):** Loại bỏ các giá trị vô lý, số âm bất thường, xử lý dữ liệu bị khuyết thiếu.
3. **Explore (Khám phá):** Tính toán các chỉ số thống kê cơ bản: giá trị lớn nhất, nhỏ nhất, trung bình cộng.
4. **Model (Mô hình hóa):** Tìm ra quy luật, công thức tương quan hoặc dự báo tương lai.
5. **iNterpret (Trực quan hóa & Diễn giải):** Chuyển kết quả thành biểu đồ cột, biểu đồ quạt (Bài 18) hay biểu đồ đoạn thẳng (Bài 19) để thuyết trình cho mọi người cùng hiểu.

---

### Chuyên đề 2: Luật số lớn (Law of Large Numbers) và Độ tin cậy mẫu

Tại sao khi thăm dò ý kiến, người ta không chỉ hỏi $2$ hay $3$ người mà phải khảo sát hàng trăm, hàng nghìn người?

> [!NOTE]
> **LUẬT SỐ LỚN (JAKOB BERNOULLI, 1713):**
> Khi kích thước mẫu khảo sát $n$ càng lớn, giá trị trung bình mẫu sẽ càng tiến gần đến giá trị trung bình thực sự của toàn thể dân số.
> Nếu chỉ khảo sát $5$ bạn học sinh, kết quả rất dễ bị lệch do tính ngẫu nhiên cá nhân. Nhưng khi khảo sát $500$ học sinh ngẫu nhiên từ nhiều lớp, sai số ngẫu nhiên sẽ triệt tiêu lẫn nhau, bức tranh thống kê sẽ trở nên vô cùng chân thực và vững chắc.

---

### Chuyên đề 3: Cạm bẫy tỉ lệ phần trăm trên cơ số khác nhau

Một lỗi suy luận rất phổ biến là cộng gộp các tỉ lệ phần trăm khi chưa cùng cơ số (tổng thể).

**Ví dụ:**
- Lớp 7A có $20$ học sinh, tỉ lệ học sinh xuất sắc là $50\%$ (tức có $10$ bạn).
- Lớp 7B có $40$ học sinh, tỉ lệ học sinh xuất sắc là $25\%$ (tức có $10$ bạn).
- Nếu vội vàng lấy trung bình: $\frac{50\% + 25\%}{2} = 37.5\%$ là **sai lầm**!
- Thực tế tổng cả hai lớp là $20 + 40 = 60$ học sinh, tổng số học sinh xuất sắc là $10 + 10 = 20$ bạn.
- Tỉ lệ học sinh xuất sắc chung của cả hai lớp là:
$$\frac{20}{60} \times 100\% = 33.33\% \neq 37.5\%$$

---

### Chuyên đề 4: Trực quan hóa dữ liệu có đạo đức (Ethical Data Visualization)

Một biểu đồ đẹp không chỉ cần tính thẩm mỹ mà bắt buộc phải có **đạo đức truyền thông**:
- **Không cắt xén trục tung mập mờ:** Không tự ý bỏ gốc số $0$ để thổi phồng mức độ biến động.
- **Không dùng hiệu ứng 3D bóp méo:** Không dùng biểu đồ tròn 3D nghiêng để phóng to múi ở gần người xem.
- **Ghi rõ nguồn gốc dữ liệu:** Luôn đính kèm thời gian khảo sát, cơ quan thực hiện và kích thước mẫu dưới chân biểu đồ.

---

### Chuyên đề 5: Lộ trình trở thành Chuyên gia Khoa học Dữ liệu (Data Scientist)

Từ những kiến thức toán thống kê lớp 7 hôm nay, con đường để các em trở thành một Kỹ sư Dữ liệu / Nhà khoa học Dữ liệu trong tương lai gồm các nấc thang:
1. **Lớp 7 - 9:** Thành thạo phân loại dữ liệu, tính giá trị trung bình, trung vị, vẽ và đọc hiểu các loại biểu đồ cơ bản.
2. **Lớp 10 - 12:** Làm chủ xác suất, phương sai, độ lệch chuẩn, phân bố chuẩn và hàm số tương quan.
3. **Đại học:** Học ngôn ngữ lập trình Python/R, thư viện xử lý dữ liệu Pandas/NumPy, các thuật toán Học máy (Machine Learning) và Trí tuệ nhân tạo (AI).

---

## IV. Bài tập Trắc nghiệm Tương tác Tổng ôn (10 câu hỏi)

Hãy tự đánh giá mức độ thấu hiểu toàn bộ Chương 5 qua $10$ câu hỏi trắc nghiệm dưới đây:

````quiz
title: Kiểm tra Tổng ôn Chương 5 (Thu thập và Biểu diễn Dữ liệu)
questions:
  - question: Dãy dữ liệu nào sau đây thuộc loại dữ liệu định lượng rời rạc?
    options:
      - Cân nặng của các bạn học sinh trong lớp (kg).
      - Xếp loại hạnh kiểm học kỳ 1 (Tốt, Khá, Đạt, Chưa đạt).
      - Số anh chị em ruột trong gia đình mỗi học sinh.
      - Tên các thủ đô của các quốc gia Đông Nam Á.
    answer: 2
    hint: Dữ liệu định lượng là số, rời rạc là số thu được qua việc đếm và nhận giá trị nguyên.
    explanation: Số anh chị em ruột là số nguyên không âm (0, 1, 2, 3...) thu được từ việc đếm, do đó là dữ liệu định lượng rời rạc.

  - question: Khi muốn biểu diễn tỉ lệ phần trăm các loại chi phí trong dự án xây dựng trường học, loại biểu đồ nào sau đây là lựa chọn tối ưu nhất?
    options:
      - Biểu đồ đoạn thẳng.
      - Biểu đồ hình quạt tròn.
      - Biểu đồ tranh.
      - Biểu đồ đường cong parabol.
    answer: 1
    hint: Tỉ lệ phần trăm các thành phần so với tổng thể 100% là thế mạnh tuyệt đối của biểu đồ hình quạt tròn.
    explanation: Biểu đồ hình quạt tròn chuyên dùng để trực quan hóa cơ cấu phần trăm các thành phần trong tổng thể 100%.

  - question: Trong một biểu đồ hình quạt tròn, góc ở tâm của một hình quạt bằng 126°. Hình quạt đó biểu diễn tỉ lệ bao nhiêu phần trăm?
    options:
      - 25%
      - 30%
      - 35%
      - 40%
    answer: 2
    hint: Áp dụng công thức ngược: p = (alpha / 360) * 100%.
    explanation: Ta có p = (126 / 360) * 100% = 0.35 * 100% = 35%.

  - question: Để theo dõi sự biến động giá vàng SJC trong từng ngày của một tuần lễ, loại biểu đồ nào thích hợp nhất?
    options:
      - Biểu đồ đoạn thẳng.
      - Biểu đồ hình quạt tròn.
      - Biểu đồ tranh.
      - Biểu đồ Venn.
    answer: 0
    hint: Biến động của một đại lượng theo trục thời gian liên tục.
    explanation: Biểu đồ đoạn thẳng là công cụ tốt nhất để theo dõi sự thay đổi của dữ liệu theo thời gian.

  - question: Điều kiện nào sau đây bắt buộc đối với một biểu đồ hình quạt tròn hợp lý?
    options:
      - Tổng các số đo góc ở tâm của các hình quạt phải bằng 180°.
      - Tổng các tỉ lệ phần trăm của tất cả các thành phần phải bằng đúng 100%.
      - Số lượng thành phần phải luôn lớn hơn 10.
      - Phải có ít nhất hai hình quạt có diện tích bằng nhau.
    answer: 1
    hint: Toàn bộ hình tròn tượng trưng cho toàn thể tổng thể.
    explanation: Toàn bộ hình tròn biểu diễn 100% tổng thể, nên tổng tỉ lệ phần trăm của các thành phần bắt buộc phải bằng 100%.

  - question: Một cửa hàng khảo sát 5 khách hàng quen và kết luận "100% người dân thành phố thích sản phẩm của chúng tôi". Kết luận này vi phạm tiêu chuẩn nào của thống kê?
    options:
      - Tính thẩm mỹ của biểu đồ.
      - Tính đại diện của mẫu khảo sát (mẫu quá nhỏ và bị thiên vị).
      - Tính chính xác của phép cộng.
      - Không có công thức toán học nào bị vi phạm.
    answer: 1
    hint: Mẫu chỉ có 5 người quen thì không thể đại diện cho toàn bộ cư dân thành phố.
    explanation: Kết luận này không có tính đại diện vì quy mô mẫu quá nhỏ (chỉ 5 người) và phạm vi đối tượng bị thiên vị (khách hàng quen).

  - question: Trên biểu đồ đoạn thẳng thể hiện số ca sốt xuất huyết qua các tuần, đoạn thẳng nối tuần 3 và tuần 4 dốc xuống. Điều đó chứng tỏ:
    options:
      - Số ca sốt xuất huyết ở tuần 4 nhiều hơn tuần 3.
      - Số ca sốt xuất huyết ở tuần 4 ít hơn tuần 3 (dịch bệnh có dấu hiệu giảm).
      - Số ca sốt xuất huyết ở tuần 4 bằng 0.
      - Dữ liệu tuần 4 bị ghi chép sai.
    answer: 1
    hint: Đoạn dốc xuống từ trái qua phải thể hiện giá trị sau nhỏ hơn giá trị trước.
    explanation: Đoạn thẳng dốc xuống biểu thị giá trị đại lượng giảm đi, tức số ca nhiễm ở tuần 4 ít hơn tuần 3.

  - question: Giá trị nào sau đây là KHÔNG HỢP LÝ trong danh sách dữ liệu về "Điểm thi kết thúc học kỳ môn Toán (thang điểm 10)" của học sinh?
    options:
      - 0
      - 7.5
      - 10
      - 10.5
    answer: 3
    hint: Thang điểm chuẩn của bài thi kết thúc học kỳ ở trường phổ thông là từ 0 đến 10.
    explanation: Điểm thi theo thang điểm 10 chỉ có thể nhận giá trị từ 0 đến 10, do đó giá trị 10.5 là không hợp lý.

  - question: Cho biểu đồ đoạn thẳng kép về doanh thu hai cơ sở. Nếu tại mốc Quý 2 hai đường cắt nhau tại tung độ 300 triệu đồng, điều đó có nghĩa là:
    options:
      - Tổng doanh thu hai cơ sở trong Quý 2 là 300 triệu đồng.
      - Tại Quý 2, cả hai cơ sở đều có doanh thu bằng nhau và bằng 300 triệu đồng.
      - Cơ sở 1 có doanh thu cao hơn cơ sở 2 là 300 triệu đồng.
      - Doanh thu hai cơ sở không thể so sánh được.
    answer: 1
    hint: Giao điểm của hai đường trên cùng một mốc thời gian.
    explanation: Giao điểm tại (Quý 2; 300) biểu thị ở Quý 2, doanh thu của cả hai cơ sở đều bằng nhau và đạt 300 triệu đồng.

  - question: Khi nào thì biểu đồ cột được ưu tiên sử dụng hơn biểu đồ đoạn thẳng?
    options:
      - Khi muốn so sánh quy mô giữa các nhóm đối tượng độc lập không có thứ tự thời gian.
      - Khi muốn biểu diễn nhiệt độ biến đổi liên tục trong ngày.
      - Khi muốn tính đạo hàm của hàm số.
      - Khi muốn dự báo xu hướng tương lai qua 10 năm.
    answer: 0
    hint: Biểu đồ cột xuất sắc khi so sánh các đối tượng rời rạc, độc lập (ví dụ: các khối lớp, các tỉnh thành).
    explanation: Khi các đối tượng khảo sát độc lập và không liên kết với nhau theo trục thời gian, ta ưu tiên dùng biểu đồ cột.
````

---

## V. Đề kiểm tra tổng ôn 45 phút chuẩn ma trận và Barem chấm điểm

### 1. Ma trận đề kiểm tra

| Mức độ nhận thức | Nhận biết ($40\%$) | Thông hiểu ($30\%$) | Vận dụng ($20\%$) | Vận dụng cao ($10\%$) | Tổng điểm |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Thu thập & Phân loại** | $2$ câu TN ($1.0\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL1a ($1.0\text{ đ}$) | | **$2.5$ điểm** |
| **Biểu đồ hình quạt tròn** | $1$ câu TN ($0.5\text{ đ}$) | $1$ câu TN ($0.5\text{ đ}$) | TL2 ($2.5\text{ đ}$) | | **$3.5$ điểm** |
| **Biểu đồ đoạn thẳng** | $1$ câu TN ($0.5\text{ đ}$) | | TL1b ($1.0\text{ đ}$) | TL3 ($1.5\text{ đ}$) | **$3.0$ điểm** |
| **Lựa chọn biểu đồ & Phân tích** | | | TL1c ($1.0\text{ đ}$) | | **$1.0$ điểm** |
| **Tổng điểm toàn bài** | **$2.0$ điểm** | **$1.0$ điểm** | **$5.5$ điểm** | **$1.5$ điểm** | **$10.0$ điểm** |

---

### 2. Đề bài chi tiết

#### Phần I. Trắc nghiệm khách quan ($3.0$ điểm)
*(Gồm $6$ câu hỏi, mỗi câu đúng được $0.5$ điểm)*

**Câu 1:** Dữ liệu nào sau đây là dữ liệu định tính có thể sắp thứ tự?
- A. Biển số xe máy các tỉnh thành.
- B. Xếp loại thi đua các lớp trong tuần (Hạng Nhất, Nhì, Ba, Tư).
- C. Chiều cao của các vận động viên bóng chuyền.
- D. Số lượng sách giáo khoa trong thư viện.

**Câu 2:** Một hình quạt tròn trên biểu đồ có góc ở tâm là $72^\circ$. Tỉ lệ phần trăm mà hình quạt đó biểu diễn là:
- A. $15\%$
- B. $20\%$
- C. $25\%$
- D. $30\%$

**Câu 3:** Trên biểu đồ đoạn thẳng, nếu đoạn thẳng nối giữa hai thời điểm nằm ngang, điều đó có nghĩa là:
- A. Đại lượng đạt giá trị bằng $0$.
- B. Đại lượng tăng mạnh.
- C. Đại lượng không thay đổi trong khoảng thời gian đó.
- D. Biểu đồ bị thiếu số liệu.

**Câu 4:** Để biểu diễn số lượng học sinh của $4$ khối lớp $6, 7, 8, 9$ trong một trường, biểu đồ nào sau đây là KHÔNG PHÙ HỢP?
- A. Biểu đồ cột.
- B. Biểu đồ đoạn thẳng.
- C. Biểu đồ tranh.
- D. Bảng thống kê.

**Câu 5:** Một cuộc khảo sát về sự hài lòng của cư dân trong một tòa chung cư thu được các mức đánh giá: $45\%$ Rất hài lòng, $35\%$ Hài lòng, $15\%$ Bình thường, $10\%$ Chưa hài lòng. Dữ liệu này có hợp lý không?
- A. Hợp lý vì có đủ $4$ mức đánh giá.
- B. Không hợp lý vì tổng phần trăm bằng $105\% > 100\%$.
- C. Hợp lý vì số người hài lòng chiếm đa số.
- D. Không thể xác định.

**Câu 6:** Khi thu thập dữ liệu bằng bảng hỏi khảo sát, điều nào sau đây giúp đảm bảo tính đại diện của mẫu?
- A. Chỉ phát phiếu hỏi cho bạn bè thân thiết.
- B. Chỉ khảo sát những người đồng ý với quan điểm của mình.
- C. Chọn mẫu ngẫu nhiên từ nhiều đối tượng khác nhau với kích thước mẫu đủ lớn.
- D. Giảm số lượng phiếu khảo sát xuống mức ít nhất có thể.

---

#### Phần II. Tự luận ($7.0$ điểm)

**Bài 1 ($3.0$ điểm):**
Bảng số liệu sau ghi lại nhiệt độ đo được tại một trạm quan trắc vào lúc $12$ giờ trưa trong $5$ ngày đầu tháng 3:

| Ngày | Ngày 1 | Ngày 2 | Ngày 3 | Ngày 4 | Ngày 5 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Nhiệt độ ($^\circ\text{C}$) | $22$ | $25$ | $28$ | $24$ | $21$ |

a) ($1.0$ điểm) Dữ liệu nhiệt độ trên thuộc loại dữ liệu nào (định tính hay định lượng; rời rạc hay liên tục)?
b) ($1.0$ điểm) Vẽ biểu đồ đoạn thẳng biểu diễn số liệu nhiệt độ trong $5$ ngày trên.
c) ($1.0$ điểm) Nhận xét về xu hướng thay đổi nhiệt độ từ Ngày 1 đến Ngày 3 và từ Ngày 3 đến Ngày 5. Ngày nào có nhiệt độ cao nhất? Tính nhiệt độ trung bình trong $5$ ngày đó.

**Bài 2 ($2.5$ điểm):**
Một câu lạc bộ thể thao trường học có $120$ thành viên đăng ký tham gia $4$ bộ môn: Cầu lông ($48$ bạn), Bóng rổ ($36$ bạn), Bơi lội ($24$ bạn), Cờ vua ($12$ bạn).
a) ($1.0$ điểm) Tính tỉ lệ phần trăm số thành viên tham gia mỗi bộ môn thể thao.
b) ($1.5$ điểm) Tính số đo góc ở tâm tương ứng của từng bộ môn trên biểu đồ hình quạt tròn và nêu các bước vẽ biểu đồ hình quạt tròn cho bảng số liệu này.

**Bài 3 ($1.5$ điểm - Vận dụng cao):**
Một công ty khởi nghiệp có hai chi nhánh $X$ và $Y$. Tỉ lệ tăng trưởng doanh thu quý 2 so với quý 1 của chi nhánh $X$ là $50\%$ (từ $200$ triệu lên $300$ triệu đồng). Chi nhánh $Y$ có tỉ lệ tăng trưởng là $20\%$ (từ $1\,000$ triệu lên $1\,200$ triệu đồng).
a) ($0.75$ điểm) Giám đốc chi nhánh $X$ tuyên bố: *"Chi nhánh X làm ăn hiệu quả hơn chi nhánh Y vì có mức tăng trưởng doanh thu gấp 2.5 lần"*. Em có đồng ý với nhận định này không? Vì sao?
b) ($0.75$ điểm) Tính tỉ lệ tăng trưởng doanh thu chung của toàn công ty (cả hai chi nhánh gộp lại) trong quý 2 so với quý 1. So sánh con số này với trung bình cộng của hai tỉ lệ tăng trưởng riêng lẻ ($\frac{50\% + 20\%}{2} = 35\%$) và rút ra bài học khi phân tích số liệu phần trăm.

---

### 3. Hướng dẫn chấm và Thang điểm (Barem)

| Phần / Câu | Đáp án / Hướng dẫn giải | Điểm |
| :--- | :--- | :---: |
| **Phần I** | **1. B \| 2. B \| 3. C \| 4. B \| 5. B \| 6. C** (mỗi câu đúng $0.5$ điểm) | **$3.0$ đ** |
| **Bài 1a** | Nhiệt độ là dữ liệu **định lượng**, dạng **liên tục** (Continuous) vì nhiệt độ thu được từ việc đo đạc và có thể nhận các giá trị số thập phân. | $1.0$ đ |
| **Bài 1b** | - Vẽ hệ trục vuông góc đúng chuẩn, trục hoành ghi Ngày 1..5, trục tung chia vạch tỉ lệ nhiệt độ ($^\circ\text{C}$).<br>- Xác định đúng $5$ điểm: $(1; 22), (2; 25), (3; 28), (4; 24), (5; 21)$ và nối thành đường gấp khúc liền mạch.<br>- Ghi đầy đủ số liệu trên các điểm và tiêu đề biểu đồ. | $0.5$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 1c** | - Từ Ngày 1 đến Ngày 3: Nhiệt độ có xu hướng **tăng liên tục** (từ $22^\circ\text{C} \to 28^\circ\text{C}$).<br>- Từ Ngày 3 đến Ngày 5: Nhiệt độ có xu hướng **giảm liên tục** (từ $28^\circ\text{C} \to 21^\circ\text{C}$).<br>- Nhiệt độ cao nhất là **$28^\circ\text{C}$** vào **Ngày 3**.<br>- Nhiệt độ trung bình trong 5 ngày: $\frac{22 + 25 + 28 + 24 + 21}{5} = \frac{120}{5} = 24^\circ\text{C}$. | $0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 2a** | Tổng số thành viên là $120$ bạn. Tỉ lệ phần trăm:<br>- Cầu lông: $\frac{48}{120} \times 100\% = 40\%$.<br>- Bóng rổ: $\frac{36}{120} \times 100\% = 30\%$.<br>- Bơi lội: $\frac{24}{120} \times 100\% = 20\%$.<br>- Cờ vua: $\frac{12}{120} \times 100\% = 10\%$. | $0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br>$0.25$ đ |
| **Bài 2b** | Số đo góc ở tâm tương ứng ($\alpha = p \times 3.6^\circ$):<br>- Cầu lông: $40 \times 3.6^\circ = 144^\circ$.<br>- Bóng rổ: $30 \times 3.6^\circ = 108^\circ$.<br>- Bơi lội: $20 \times 3.6^\circ = 72^\circ$.<br>- Cờ vua: $10 \times 3.6^\circ = 36^\circ$.<br>- Nêu đủ 4 bước vẽ: Vẽ đường tròn tâm $O \to$ Dùng thước đo độ vẽ liên tiếp các góc ở tâm $\to$ Tô màu phân biệt $\to$ Ghi nhãn chú giải và tiêu đề. | $0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br>$0.25$ đ<br><br>$0.5$ đ |
| **Bài 3a** | - Không hoàn toàn đồng ý.<br>- Giải thích: Mặc dù tỉ lệ phần trăm tăng trưởng của chi nhánh $X$ cao hơn ($50\% > 20\%$), nhưng xét về **giá trị tuyệt đối**, chi nhánh $Y$ tăng $1\,200 - 1\,000 = 200$ triệu đồng, gấp đôi mức tăng của chi nhánh $X$ ($300 - 200 = 100$ triệu đồng). Hơn nữa, quy mô doanh thu của $Y$ lớn gấp nhiều lần $X$. Nhận xét chỉ dựa vào phần trăm mà bỏ qua quy mô tuyệt đối là cái nhìn phiến diện. | $0.25$ đ<br><br>$0.5$ đ |
| **Bài 3b** | - Tổng doanh thu Quý 1 toàn công ty: $200 + 1\,000 = 1\,200$ triệu đồng.<br>- Tổng doanh thu Quý 2 toàn công ty: $300 + 1\,200 = 1\,500$ triệu đồng.<br>- Mức tăng doanh thu chung: $1\,500 - 1\,200 = 300$ triệu đồng.<br>- Tỉ lệ tăng trưởng chung: $\frac{300}{1\,200} \times 100\% = 25\%$.<br>- So sánh: $25\% \neq 35\%$.<br>- Bài học: Tuyệt đối không được lấy trung bình cộng các tỉ lệ phần trăm khi các cơ số tổng thể khác nhau. Phải tính trên tổng số liệu gộp thực tế. | $0.25$ đ<br><br>$0.25$ đ<br><br>$0.25$ đ |
