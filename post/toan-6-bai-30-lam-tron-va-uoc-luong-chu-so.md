---
title: 'Toán 6 Bài 30: Làm tròn và ước lượng chữ số - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 30 Làm tròn và ước lượng chữ số: quy tắc làm tròn số thập phân và số tự nhiên, bẫy làm tròn liên tiếp, làm tròn lên và xuống trong thực tế, 5 dạng bài trọng tâm và 5 chuyên đề nâng cao HSG độc bản kèm trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Số thập phân
  - Làm tròn số
  - Ước lượng
  - Thực tế
  - Kết nối tri thức
grade: 6
---

# Bài 30. Làm tròn và ước lượng chữ số

Trong kỷ nguyên số, chúng ta liên tục tiếp xúc với những khối lượng dữ liệu khổng lồ: *Dân số Việt Nam năm 2026 đạt khoảng $102$ triệu người*, *Khoảng cách từ Trái Đất đến Mặt Trăng là khoảng $384\,000\text{ km}$*, *Mỗi bạn chia nhau thanh sô-cô-la được khoảng $3{,}33\text{ cm}$*, hay *Hóa đơn mua sắm hết $298\,500$ đồng, ta ước lượng mang theo khoảng $300\,000$ đồng*.

Tại sao chúng ta không dùng luôn con số chính xác đến từng người, từng mét, từng chữ số thập phân vô hạn? Bởi vì trong rất nhiều hoàn cảnh thực tế, con số quá chi tiết không những gây khó nhớ, khó tính toán mà còn không cần thiết. Đó là lý do **kỹ năng làm tròn và ước lượng** ra đời — trở thành một trong những kỹ năng sinh tồn toán học quan trọng nhất của con người hiện đại.

Tuy nhiên, làm tròn thế nào cho đúng quy tắc? Khi nào phải làm tròn theo chuẩn toán học, khi nào bắt buộc phải làm tròn LÊN hoặc làm tròn XUỐNG theo thực tế? Bài học này sẽ giúp các em giải quyết trọn vẹn từ quy tắc nền tảng đến $5$ chuyên đề học sinh giỏi độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KỸ THUẬT LÀM TRÒN VÀ ƯỚC LƯỢNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Quy tắc $\ge 5$ và $&lt; 5$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Gạch chân hàng làm tròn. Nhìn chữ số ngay bên phải: nếu $\ge 5$ thì tăng $1$, nếu $&lt; 5$ thì giữ nguyên.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Xử lý các chữ số sau</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Ở phần thập phân: BỎ HẾT.<br>• Ở phần nguyên: Thay bằng các chữ số $0$ để giữ nguyên giá trị độ lớn.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tuyệt đối không làm tròn 2 bước</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">Luôn nhìn chữ số ngay bên phải của <b>SỐ GỐC BAN ĐẦU</b>. Tuyệt đối không làm tròn qua trung gian ($2{,}46 \to 2{,}5 \to 3$ là SAI!).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Ngữ cảnh thực tế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Cần chứa hết (số xe, thùng hàng, bàn học): <b>Làm tròn LÊN</b>.<br>• May áo, cắt dây, chia quà: <b>Làm tròn XUỐNG</b>.</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Nhận biết thực tiễn (5–7 phút)

Hãy bắt đầu bằng 5 câu hỏi tình huống thực tế sau:

**Câu 1 (Ôn lại Tiểu học):** Làm tròn các số sau:
a) Số $83$ đến hàng chục
b) Số $476$ đến hàng trăm
c) Số $5{,}7$ đến hàng đơn vị
- *Trả lời:*
  - a) $83 \approx 80$ (chữ số hàng đơn vị là $3 < 5$).
  - b) $476 \approx 500$ (chữ số hàng chục là $7 \ge 5$).
  - c) $5{,}7 \approx 6$ (chữ số hàng phần mười là $7 \ge 5$).

**Câu 2 (Ước lượng mua sắm):** Nam vào nhà sách mua một chiếc bút dạ giá $18\,500$ đồng, cuốn sổ tay giá $31\,200$ đồng và một cục tẩy giá $9\,800$ đồng. Nam mang theo tờ $60\,000$ đồng. Không cần tính chi tiết, em hãy ước lượng xem Nam có đủ tiền không?
- *Trả lời:* Làm tròn các món đồ đến hàng nghìn: $18\,500 \approx 19\,000;\; 31\,200 \approx 31\,000;\; 9\,800 \approx 10\,000.$
  Tổng tiền ước lượng: $19\,000 + 31\,000 + 10\,000 = 60\,000$ đồng.
  Vì hai món đầu có số tiền thực tế nhỏ hơn số làm tròn ($18\,500 < 19\,000$ và $9\,800 < 10\,000$), tổng tiền thật chắc chắn nhỏ hơn $60\,000$ đồng. Do đó Nam hoàn toàn đủ tiền mua.

**Câu 3 (Số thập phân vô hạn):** Chia một sợi dây len dài $10\text{ m}$ thành $3$ đoạn bằng nhau. Phép tính $10 : 3 = 3{,}3333\dots\text{ m}$ kéo dài mãi. Em hãy nói độ dài mỗi đoạn xấp xỉ bằng bao nhiêu mét?
- *Trả lời:* Mỗi đoạn dài xấp xỉ khoảng $3{,}3\text{ m}$ (hoặc chính xác hơn là $3{,}33\text{ m}$).

**Câu 4 (Tình huống xếp xe):** Khối 6 của một trường THCS có $215$ học sinh đi dã ngoại bằng ô tô $45$ chỗ. Hỏi nhà trường cần thuê ít nhất bao nhiêu xe để chở hết học sinh?
- *Trả lời:* Ta thực hiện phép chia: $215 : 45 = 4$ dư $35.$
  Nếu chỉ thuê $4$ xe thì $35$ học sinh sẽ không có chỗ ngồi. Do đó, nhà trường phải thuê thêm $1$ xe nữa, tức cần ít nhất $5$ xe.
  *(Đây chính là quy tắc làm tròn LÊN trong thực tế!)*

**Câu 5 (Tình huống may đồ):** Một cuộn vải dài $15\text{ m},$ để may một chiếc váy cần $2{,}2\text{ m}$ vải. Hỏi cuộn vải may được nhiều nhất bao nhiêu chiếc váy?
- *Trả lời:* Ta có $15 : 2{,}2 \approx 6{,}81.$
  Dù số thập phân là $6{,}81$ (lớn hơn $6{,}5$), nhưng phần vải thừa $15 - 6 \cdot 2{,}2 = 1{,}8\text{ m}$ không đủ để may thêm $1$ chiếc váy trọn vẹn. Do đó chỉ may được nhiều nhất $6$ chiếc váy.
  *(Đây chính là quy tắc làm tròn XUỐNG trong thực tế!)*

---

## A. Lý thuyết trọng tâm

### 1. Quy tắc làm tròn số thập phân đến một hàng cho trước

Để làm tròn một số thập phân đến một hàng cho trước (gọi là **hàng làm tròn**), ta thực hiện theo hai bước chuẩn sau:

- **Bước 1:** Xác định và gạch chân chữ số ở **hàng làm tròn**.
- **Bước 2:** Nhìn sang chữ số đứng ngay bên phải của hàng làm tròn:
  - Nếu chữ số đó **nhỏ hơn $5$** (tức là $0, 1, 2, 3, 4$): ta **giữ nguyên** chữ số ở hàng làm tròn.
  - Nếu chữ số đó **lớn hơn hoặc bằng $5$** (tức là $5, 6, 7, 8, 9$): ta **cộng thêm $1$ đơn vị** vào chữ số ở hàng làm tròn.
- **Bước 3 (Xử lý các chữ số phía sau hàng làm tròn):**
  - Đối với các chữ số ở **phần thập phân**: Ta **bỏ đi toàn bộ**.
  - Đối với các chữ số ở **phần nguyên**: Ta **thay thế bằng các chữ số $0$** để bảo toàn bậc độ lớn của số.

```
Ví dụ làm tròn số 347,268:
• Đến hàng phần mười (chữ số 2):
  347,2[6]8  --> bên phải là 6 >= 5 --> 2 tăng thành 3 --> kết quả: 347,3.
• Đến hàng phần trăm (chữ số 6):
  347,26[8]  --> bên phải là 8 >= 5 --> 6 tăng thành 7 --> kết quả: 347,27.
• Đến hàng đơn vị (chữ số 7):
  347,[2]68  --> bên phải là 2 < 5  --> giữ nguyên 7  --> kết quả: 347.
• Đến hàng chục (chữ số 4):
  3[4]7,268  --> bên phải là 7 >= 5 --> 4 tăng thành 5, thay 7 bằng 0 --> kết quả: 350.
```

---

### 2. Làm tròn số nguyên lớn (hàng chục, trăm, nghìn, triệu...)

Khi làm tròn các số tự nhiên có nhiều chữ số (như thống kê dân số, diện tích lãnh thổ, khoảng cách thiên văn), người ta quy tròn đến hàng chục, trăm, nghìn, triệu,...

> [!IMPORTANT]
> Khi làm tròn ở phần nguyên, các chữ số sau hàng làm tròn **bắt buộc phải thay bằng chữ số $0$**, tuyệt đối không được bỏ đi!
> Ví dụ: Làm tròn số $45\,820$ đến hàng nghìn:
> Chữ số hàng nghìn là $5,$ chữ số ngay bên phải là $8 \ge 5 \implies 5 \to 6.$
> Kết quả là $46\,000$ (viết $46$ là SAI hoàn toàn vì làm mất đi $1\,000$ lần giá trị).

**Ví dụ 1:**
Dân số của một tỉnh là $1\,847\,632$ người. Hãy làm tròn số dân này đến:
a) Hàng trăm
b) Hàng nghìn
c) Hàng trăm nghìn
d) Hàng triệu

**Lời giải:**
- a) Đến hàng trăm (chữ số $6$): bên phải là $3 < 5 \implies 1\,847\,600$ người.
- b) Đến hàng nghìn (chữ số $7$): bên phải là $6 \ge 5 \implies 1\,848\,000$ người.
- c) Đến hàng trăm nghìn (chữ số $8$): bên phải là $4 < 5 \implies 1\,800\,000$ người.
- d) Đến hàng triệu (chữ số $1$): bên phải là $8 \ge 5 \implies 2\,000\,000$ người (khoảng $2$ triệu người).

---

### 3. Cạm bẫy kinh điển: Không bao giờ làm tròn liên tiếp qua nhiều bước!

> [!WARNING]
> **Lỗi sai phổ biến nhất của học sinh:** Làm tròn qua nhiều bước trung gian.
> **Ví dụ sai lầm:** Muốn làm tròn số $4{,}46$ đến hàng đơn vị:
> - Học sinh làm sai: "Làm tròn $4{,}46$ đến hàng phần mười được $4{,}5,$ rồi làm tròn $4{,}5$ đến hàng đơn vị được $5$."
> - **Sự thật:** Quy tắc làm tròn yêu cầu **nhìn chữ số ngay bên phải của SỐ GỐC BAN ĐẦU**.
>   Số gốc $4{,}46$ có chữ số ngay bên phải hàng đơn vị là $4 < 5,$ vì thế giữ nguyên $4.$
>   Đáp số đúng phải là: $4{,}46 \approx 4.$
>   Cách làm tròn hai bước đã làm sai lệch bản chất toán học vì $4{,}46$ gần với $4$ hơn rất nhiều so với gần $5$ (khoảng cách đến $4$ là $0{,}46,$ còn khoảng cách đến $5$ là $0{,}54$).

---

### 4. Ước lượng kết quả phép tính

**Ước lượng** là việc làm tròn các số trước khi thực hiện phép tính để nhẩm nhanh kết quả xấp xỉ.

**Mục đích của ước lượng:**
1. **Kiểm tra nhanh tính hợp lý của kết quả:** Phát hiện tức thì các lỗi sai do bấm nhầm máy tính hoặc đặt sai vị trí dấu phẩy.
2. **Quyết định nhanh trong thực tế:** Khi đi chợ, siêu thị, dự toán chi phí xây dựng mà chưa cần con số lẻ đến từng đồng.

**Ví dụ 2:** Trong ba kết quả sau: $12{,}35;\; 123{,}5;\; 1\,235,$ kết quả nào là đáp số đúng của phép tính:
$$34{,}8 + 68{,}25 + 20{,}41?$$
- **Lời giải bằng ước lượng:**
  Làm tròn các số hạng đến hàng đơn vị:
  $$34{,}8 \approx 35;\quad 68{,}25 \approx 68;\quad 20{,}41 \approx 20.$$
  Cộng nhẩm:
  $$35 + 68 + 20 = 123.$$
  Kết quả thật phải xấp xỉ $123,$ do đó đáp số hợp lý duy nhất là **$123{,}5$**.

---

### 5. Làm tròn theo ngữ cảnh thực tế (Làm tròn LÊN và Làm tròn XUỐNG)

Trong đời sống thực tế, không phải lúc nào ta cũng tuân theo quy tắc toán học "$\ge 5$ tăng $1$". Tùy thuộc vào yêu cầu của bài toán, ta phải áp dụng linh hoạt:

| Tình huống thực tế | Quy tắc áp dụng | Ví dụ thực tế |
| :--- | :--- | :--- |
| **Cần chứa hết, chở hết, mua đủ** (số xe, số thùng hàng, số phòng, gạch lát sàn, sơn tường) | **Làm tròn LÊN (Ceiling)**<br>*(Bất kể phần dư nhỏ thế nào cũng phải tăng thêm $1$ đơn vị)* | Cần chở $91$ người bằng xe $30$ chỗ: $91 : 30 = 3$ dư $1 \implies$ Cần **$4$ xe**. |
| **Sản phẩm hoàn thiện từ nguyên liệu có hạn** (may quần áo, cắt khúc gỗ, số chuyến đi từ bình xăng) | **Làm tròn XUỐNG (Floor)**<br>*(Bỏ hẳn phần dư vì không đủ để hoàn thành thêm $1$ đơn vị trọn vẹn)* | Cuộn dây $20\text{ m}$ cắt đoạn $3\text{ m}$: $20 : 3 = 6{,}67 \implies$ Chỉ cắt được **$6$ đoạn**. |

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Làm tròn số thập phân đến hàng chỉ định

#### Phương pháp giải:
- Xác định đúng vị trí hàng:
  - Phần nguyên: đơn vị, chục, trăm, nghìn...
  - Phần thập phân: phần mười ($0{,}1$), phần trăm ($0{,}01$), phần nghìn ($0{,}001$)...
- So sánh chữ số ngay bên phải với $5.$

---

**Ví dụ 1:**
Làm tròn các số sau:
a) $18{,}472$ đến hàng phần mười và hàng phần trăm.
b) $0{,}0965$ đến hàng phần trăm và hàng phần nghìn.
c) $399{,}6$ đến hàng đơn vị và hàng chục.

**Lời giải:**
a)
- Đến hàng phần mười (chữ số $4$): chữ số bên phải là $7 \ge 5 \implies 18{,}472 \approx 18{,}5.$
- Đến hàng phần trăm (chữ số $7$): chữ số bên phải là $2 < 5 \implies 18{,}472 \approx 18{,}47.$

b)
- Đến hàng phần trăm (chữ số $9$): chữ số bên phải là $6 \ge 5 \implies 9$ tăng thành $10,$ nhớ sang hàng phần mười: $0{,}0965 \approx 0{,}10.$
- Đến hàng phần nghìn (chữ số $6$): chữ số bên phải là $5 \ge 5 \implies 0{,}0965 \approx 0{,}097.$

c)
- Đến hàng đơn vị (chữ số $9$): chữ số bên phải là $6 \ge 5 \implies 399$ tăng thành $400$: $399{,}6 \approx 400.$
- Đến hàng chục (chữ số $9$): bên phải là $9 \ge 5 \implies 399{,}6 \approx 400.$

---

### Dạng 2: Xác định hàng làm tròn của một số liệu cho trước

#### Phương pháp giải:
- So sánh số đã làm tròn với số gốc ban đầu.
- Tìm vị trí hàng mà từ đó trở về bên phải:
  - Ở phần nguyên: đều biến thành các chữ số $0.$
  - Ở phần thập phân: đã bị xóa bỏ.
- Đó chính là hàng làm tròn.

---

**Ví dụ 2:**
Cho biết các số liệu sau đã được làm tròn đến hàng nào:
a) Bán kính xích đạo của Trái Đất là $6\,378{,}137\text{ km},$ được ghi gọn là $6\,378\text{ km}.$
b) Dân số một thành phố là $8\,435\,210$ người, được ước tính là $8\,400\,000$ người.
c) Số $\pi = 3{,}14159265\dots$ được lấy gần đúng là $3{,}14.$

**Lời giải:**
a) Số $6\,378\text{ km}$ đã bỏ toàn bộ phần thập phân và giữ lại chữ số hàng đơn vị. Vậy số đó đã được làm tròn đến **hàng đơn vị**.
b) Số $8\,400\,000$ có các chữ số từ hàng chục nghìn trở về bên phải đều là $0,$ chữ số hàng trăm nghìn được giữ nguyên (vì chữ số hàng chục nghìn là $3 < 5$). Vậy số đó đã được làm tròn đến **hàng trăm nghìn**.
c) Số $3{,}14$ giữ lại hai chữ số ở phần thập phân. Vậy số đó đã được làm tròn đến **hàng phần trăm**.

---

### Dạng 3: Ước lượng kết quả phép tính và phát hiện lỗi sai

#### Phương pháp giải:
- Làm tròn từng số hạng/thừa số đến hàng thích hợp (thường là hàng đơn vị hoặc số tròn chục).
- Thực hiện phép tính nhẩm thô để tìm khoảng giá trị hợp lý.

---

**Ví dụ 3:**
Không đặt tính chính xác, hãy dùng phương pháp ước lượng để chọn kết quả đúng trong các phương án:
a) $49{,}6 \cdot 3{,}08$
Phương án: A. $15{,}2768$ | B. $152{,}768$ | C. $1\,527{,}68$
b) $512{,}4 : 24{,}8$
Phương án: A. $2{,}066$ | B. $20{,}66$ | C. $206{,}6$

**Lời giải:**
a) Làm tròn: $49{,}6 \approx 50$ và $3{,}08 \approx 3.$
Ước lượng tích: $50 \cdot 3 = 150.$
Kết quả gần với $150$ nhất là **$152{,}768$** (Phương án B).

b) Làm tròn: $512{,}4 \approx 500$ và $24{,}8 \approx 25.$
Ước lượng thương: $500 : 25 = 20.$
Kết quả gần với $20$ nhất là **$20{,}66$** (Phương án B).

---

### Dạng 4: Bài toán thực tế làm tròn theo ngữ cảnh (Lên / Xuống)

#### Phương pháp giải:
- Phân tích ngữ cảnh bài toán:
  - Nếu là bài toán xếp chỗ, đóng gói, chở hàng, mua vật liệu che phủ $\implies$ Phải **làm tròn LÊN** (dù dư ít vẫn phải thêm $1$ đơn vị để đảm bảo không bị thiếu).
  - Nếu là bài toán tạo sản phẩm, số phần quà, số chuyến đi có thể thực hiện $\implies$ Phải **làm tròn XUỐNG** (lấy phần nguyên, bỏ phần dư).

---

**Ví dụ 4:**
a) Một xưởng may nhận được một cây vải dài $45\text{ m}.$ Mỗi bộ ga trải giường cần $3{,}8\text{ m}$ vải. Xưởng có thể may được nhiều nhất bao nhiêu bộ ga trải giường hoàn chỉnh?
b) Cần vận chuyển $185$ tấn xi măng đến công trường. Mỗi chuyến xe tải chở được tối đa $12$ tấn. Hỏi cần ít nhất bao nhiêu chuyến xe để chở hết số xi măng đó?

**Lời giải:**
a) Ta thực hiện phép chia:
$$45 : 3{,}8 \approx 11{,}84.$$
Vì vải thừa không đủ để may thêm một bộ ga hoàn chỉnh, ta phải **làm tròn xuống**.
Xưởng may được nhiều nhất **$11$ bộ ga trải giường** (dùng hết $11 \cdot 3{,}8 = 41{,}8\text{ m}$ vải, còn thừa $3{,}2\text{ m}$).

b) Ta thực hiện phép chia:
$$185 : 12 = 15\text{ (dư } 5).$$
Nếu chở $15$ chuyến thì còn lại $5$ tấn xi măng chưa được chở. Để chở hết toàn bộ, cần thêm $1$ chuyến nữa.
Ta phải **làm tròn lên**: Cần ít nhất $15 + 1 = \mathbf{16\text{ chuyến xe}}.$

---

### Dạng 5: Tìm khoảng giá trị của số gốc khi biết số làm tròn

#### Phương pháp giải:
- Nếu làm tròn số $x$ đến hàng đơn vị được số nguyên $A$:
  $$A - 0{,}5 \le x < A + 0{,}5.$$
- Nếu làm tròn số $x$ đến hàng phần mười được số $A$:
  $$A - 0{,}05 \le x < A + 0{,}05.$$
- Nhớ rằng đầu mút dưới có dấu bằng `"\le"`, còn đầu mút trên là dấu nhỏ hơn `"<"` (vì tại điểm chính giữa $5$ là đã làm tròn lên rồi).

---

**Ví dụ 5:**
Khi làm tròn số thập phân $x$ đến hàng đơn vị, ta được kết quả là $24.$
a) Số $x$ có thể nhận những giá trị nào?
b) Tìm giá trị nhỏ nhất của $x$ và cho biết $x$ phải nhỏ hơn số nào.

**Lời giải:**
a) Để một số $x$ khi làm tròn đến hàng đơn vị được $24,$ số đó phải gần $24$ hơn các số nguyên lân cận ($23$ và $25$), hoặc nằm chính giữa $23$ và $24.$
Do đó, khoảng giá trị của $x$ là:
$$23{,}5 \le x < 24{,}5.$$

b)
- Giá trị nhỏ nhất của $x$ là: **$23{,}5$** (vì $23{,}5$ có chữ số phần mười là $5 \ge 5,$ làm tròn thành $24$).
- Số $x$ phải **nhỏ hơn $24{,}5$** (vì nếu $x = 24{,}5$ thì đã bị làm tròn lên thành $25$).

---

## C. Phiếu bài tập tự luyện toàn diện (Có lời giải chi tiết)

### Đề bài tự luyện

**Bài 1 (Làm tròn số thập phân):** Làm tròn các số sau:
a) $7{,}84$ đến hàng phần mười
b) $12{,}659$ đến hàng phần trăm
c) $0{,}4082$ đến hàng phần nghìn
d) $99{,}7$ đến hàng đơn vị
e) $3{,}14159$ đến hàng phần mười, hàng phần trăm, hàng phần nghìn

**Bài 2 (Làm tròn số nguyên lớn):**
Dân số của một quốc gia là $98\,745\,320$ người. Hãy làm tròn số này đến:
a) Hàng chục nghìn
b) Hàng trăm nghìn
c) Hàng triệu
d) Hàng chục triệu

**Bài 3 (Tìm hàng làm tròn):** Cho biết các trường hợp sau đã làm tròn đến hàng nào:
a) Số $15\,682\text{ m}$ được làm tròn thành $15\,700\text{ m}.$
b) Vận tốc ánh sáng xấp xỉ $299\,792\,458\text{ m/s}$ được ghi là $300\,000\,000\text{ m/s}.$
c) Giá trị của $\frac{10}{3} = 3{,}3333\dots$ được ghi là $3{,}33.$

**Bài 4 (Ước lượng phép tính):** Bằng phương pháp ước lượng, hãy tìm kết quả đúng trong các phương án mà không cần tính chi tiết:
a) $102{,}4 + 298{,}75 + 49{,}8$
Phương án: A. $45{,}095$ | B. $450{,}95$ | C. $4\,509{,}5$
b) $19{,}8 \cdot 4{,}95$
Phương án: A. $9{,}801$ | B. $98{,}01$ | C. $980{,}1$
c) $638{,}4 : 7{,}9$
Phương án: A. $8{,}08$ | B. $80{,}8$ | C. $808$

**Bài 5 (Phân tích lỗi sai):**
Bạn Hoa làm tròn số $15{,}456$ đến hàng đơn vị như sau:
- Bước 1: Làm tròn $15{,}456$ đến hàng phần trăm được $15{,}46.$
- Bước 2: Làm tròn $15{,}46$ đến hàng phần mười được $15{,}5.$
- Bước 3: Làm tròn $15{,}5$ đến hàng đơn vị được $16.$
Em hãy chỉ rõ bạn Hoa làm đúng hay sai và sửa lại cho đúng.

**Bài 6 (Xếp phòng khách sạn — Làm tròn lên):**
Một đoàn khách du lịch gồm $58$ người đến nghỉ tại một khách sạn. Khách sạn chỉ có loại phòng $4$ người. Hỏi đoàn khách cần thuê ít nhất bao nhiêu phòng để tất cả mọi người đều có chỗ ngủ?

**Bài 7 (Gói quà tặng — Làm tròn xuống):**
Để chuẩn bị quà Tết Trung thu cho các em nhỏ, cô giáo có $12\text{ mét}$ ruy băng. Mỗi chiếc nơ trang trí hộp quà cần $0{,}85\text{ mét}$ ruy băng. Hỏi cô giáo làm được nhiều nhất bao nhiêu chiếc nơ?

**Bài 8 (Dự toán chi phí sơn nhà):**
Một gia đình cần sơn lại bức tường có diện tích $68\text{ m}^2.$ Biết mỗi thùng sơn quét được tối đa $15\text{ m}^2$ tường.
a) Gia đình cần mua ít nhất bao nhiêu thùng sơn?
b) Nếu giá mỗi thùng sơn là $420\,000$ đồng, hỏi gia đình phải chi bao nhiêu tiền mua sơn?

**Bài 9 (Khoảng giá trị của số gốc):**
a) Khi làm tròn một số thập phân $y$ đến hàng đơn vị được kết quả là $10.$ Hãy viết khoảng giá trị của $y.$
b) Có bao nhiêu số thập phân có đúng một chữ số ở phần thập phân mà khi làm tròn đến hàng đơn vị thì được kết quả là $8$?

**Bài 10 (Ước lượng sai số diện tích):**
Một sân bóng mini hình chữ nhật có chiều dài đo được là $38{,}4\text{ m}$ và chiều rộng là $19{,}6\text{ m}.$
a) Hãy ước lượng diện tích sân bóng bằng cách làm tròn các kích thước đến hàng chục.
b) Tính diện tích thực tế của sân bóng và so sánh với giá trị ước lượng ở câu a.

---

### Lời giải chi tiết bài tập tự luyện

**Bài 1:**
a) $7{,}84 \approx 7{,}8$ (bên phải là $4 < 5$).
b) $12{,}659 \approx 12{,}66$ (bên phải là $9 \ge 5$).
c) $0{,}4082 \approx 0{,}408$ (bên phải là $2 < 5$).
d) $99{,}7 \approx 100$ (bên phải là $7 \ge 5 \implies 99 \to 100$).
e) $3{,}14159$:
- Đến hàng phần mười: $3{,}1$ (bên phải là $4 < 5$).
- Đến hàng phần trăm: $3{,}14$ (bên phải là $1 < 5$).
- Đến hàng phần nghìn: $3{,}142$ (bên phải là $5 \ge 5$).

**Bài 2:**
a) Hàng chục nghìn (chữ số $4$): bên phải là $5 \ge 5 \implies 98\,750\,000$ người.
b) Hàng trăm nghìn (chữ số $7$): bên phải là $4 < 5 \implies 98\,700\,000$ người.
c) Hàng triệu (chữ số $8$): bên phải là $7 \ge 5 \implies 99\,000\,000$ người.
d) Hàng chục triệu (chữ số $9$): bên phải là $8 \ge 5 \implies 100\,000\,000$ người.

**Bài 3:**
a) Chữ số hàng trăm là $6,$ tăng lên $7,$ các chữ số sau biến thành $0 \implies$ Làm tròn đến **hàng trăm**.
b) Các chữ số từ hàng chục triệu trở về sau thành $0,$ chữ số hàng trăm triệu tăng lên $3 \implies$ Làm tròn đến **hàng trăm triệu**.
c) Giữ lại $2$ chữ số phần thập phân $\implies$ Làm tròn đến **hàng phần trăm**.

**Bài 4:**
a) Ước lượng: $102 + 299 + 50 = 451 \implies$ Đáp án đúng là **$450{,}95$** (Phương án B).
b) Ước lượng: $20 \cdot 5 = 100 \implies$ Đáp án đúng là **$98{,}01$** (Phương án B).
c) Ước lượng: $640 : 8 = 80 \implies$ Đáp án đúng là **$80{,}8$** (Phương án B).

**Bài 5:**
- Bạn Hoa làm **sai hoàn toàn**.
- *Lý do:* Hoa đã mắc lỗi làm tròn liên tiếp qua nhiều bước. Việc làm tròn $15{,}456 \to 15{,}46 \to 15{,}5$ đã nhân tạo đẩy chữ số $4$ lên $5,$ dẫn đến kết quả sai lệch.
- *Làm lại đúng:* Nhìn chữ số ngay bên phải của số gốc $15{,}456$ tại hàng đơn vị là $4 < 5.$
  Do đó:
  $$15{,}456 \approx 15.$$

**Bài 6:**
Thực hiện phép chia:
$$58 : 4 = 14\text{ (dư } 2).$$
Nếu thuê $14$ phòng thì còn dư $2$ khách chưa có chỗ ngủ. Để tất cả mọi người đều có phòng, đoàn cần thuê thêm $1$ phòng.
Áp dụng làm tròn lên: Cần ít nhất $14 + 1 = \mathbf{15\text{ phòng}}.$

**Bài 7:**
Thực hiện phép chia:
$$12 : 0{,}85 \approx 14{,}11.$$
Phần ruy băng dư không đủ để làm một chiếc nơ hoàn chỉnh.
Áp dụng làm tròn xuống: Cô giáo làm được nhiều nhất **$14$ chiếc nơ** (dùng $14 \cdot 0{,}85 = 11{,}9\text{ m},$ còn thừa $0{,}1\text{ m}$).

**Bài 8:**
a) Số thùng sơn cần dùng:
$$68 : 15 = 4\text{ (dư } 8).$$
Vì diện tích còn thừa $8\text{ m}^2$ vẫn phải sơn kín, gia đình phải mua thêm $1$ thùng.
Làm tròn lên: Cần mua ít nhất $4 + 1 = \mathbf{5\text{ thùng sơn}}.$
b) Chi phí mua sơn:
$$5 \cdot 420\,000 = 2\,100\,000\text{ đồng}.$$

**Bài 9:**
a) Số $y$ thỏa mãn:
$$9{,}5 \le y < 10{,}5.$$
b) Các số thập phân có một chữ số ở phần thập phân thỏa mãn $7{,}5 \le y < 8{,}5$ là:
$$7{,}5;\; 7{,}6;\; 7{,}7;\; 7{,}8;\; 7{,}9;\; 8{,}0;\; 8{,}1;\; 8{,}2;\; 8{,}3;\; 8{,}4.$$
Tổng cộng có **$10$ số**.

**Bài 10:**
a) Làm tròn đến hàng chục:
$$38{,}4 \approx 40\text{ m};\quad 19{,}6 \approx 20\text{ m}.$$
Ước lượng diện tích:
$$S_{\text{ước lượng}} \approx 40 \cdot 20 = 800\text{ m}^2.$$
b) Diện tích thực tế:
$$S_{\text{thực tế}} = 38{,}4 \cdot 19{,}6 = 752{,}64\text{ m}^2.$$
Độ chênh lệch:
$$800 - 752{,}64 = 47{,}36\text{ m}^2.$$
Ước lượng cho ta hình dung nhanh sân bóng rộng khoảng $800\text{ m}^2.$

---

## D. 5 Chuyên đề nâng cao học sinh giỏi (Độc bản 100%)

### Chuyên đề 1: Bất đẳng thức xác định miền giá trị của số gốc

> [!NOTE]
> **Định lý miền giá trị làm tròn:**
> Nếu số thập phân $x$ khi làm tròn đến hàng $10^{-k}$ ($k \in \mathbb{Z}$) được số $A,$ thì:
> $$A - \frac{1}{2} \cdot 10^{-k} \le x < A + \frac{1}{2} \cdot 10^{-k}.$$
> Bán kính sai số tối đa là $\Delta = \frac{1}{2} \cdot 10^{-k}.$

**Bài toán 1:**
Một phép đo khối lượng cho kết quả sau khi làm tròn đến hàng phần trăm là $4{,}28\text{ kg}.$
a) Khối lượng thực tế $m$ nằm trong khoảng nào?
b) Tìm giá trị nhỏ nhất của $m$ và khối lượng $m$ không thể đạt tới giá trị nào?

**Lời giải chi tiết:**
a) Hàng phần trăm ứng với $10^{-2} = 0{,}01.$
Độ lệch tối đa trước khi nhảy số là $\frac{0{,}01}{2} = 0{,}005.$
Do đó khoảng giá trị của $m$ là:
$$4{,}28 - 0{,}005 \le m < 4{,}28 + 0{,}005$$
$$4{,}275 \le m < 4{,}285.$$

b)
- Khối lượng thực tế nhỏ nhất có thể là: **$4{,}275\text{ kg}$** (vì số này có chữ số hàng phần nghìn là $5 \ge 5,$ được làm tròn lên $4{,}28$).
- Khối lượng $m$ không thể đạt tới **$4{,}285\text{ kg}$** (vì tại $4{,}285,$ theo quy tắc làm tròn sẽ nhảy lên thành $4{,}29$).

---

### Chuyên đề 2: Đánh giá sai số tích lũy và biên độ của ước lượng

**Bài toán 2:**
Một mảnh vườn hình chữ nhật có các kích thước sau khi làm tròn đến hàng đơn vị lần lượt là chiều dài $a = 15\text{ m}$ và chiều rộng $b = 8\text{ m}.$
a) Ước lượng diện tích mảnh vườn theo các số đo đã làm tròn.
b) Diện tích thực tế $S$ của mảnh vườn có thể nhận giá trị nhỏ nhất và lớn nhất là bao nhiêu? Sai số diện tích lớn nhất là bao nhiêu?

**Lời giải chi tiết:**
a) Diện tích ước lượng:
$$S_0 = a \cdot b = 15 \cdot 8 = 120\text{ m}^2.$$

b)
- Vì các kích thước được làm tròn đến hàng đơn vị nên:
  $$14{,}5 \le a < 15{,}5$$
  $$7{,}5 \le b < 8{,}5$$
- Diện tích thực tế nhỏ nhất $S_{\min}$ đạt được khi cả hai kích thước đều nhỏ nhất:
  $$S_{\min} = 14{,}5 \cdot 7{,}5 = 108{,}75\text{ m}^2.$$
- Diện tích thực tế lớn nhất $S_{\max}$ tiến sát tới:
  $$S_{\max} < 15{,}5 \cdot 8{,}5 = 131{,}75\text{ m}^2.$$
- Sai số diện tích lớn nhất so với ước lượng $120\text{ m}^2$:
  - Phía dưới: $120 - 108{,}75 = 11{,}25\text{ m}^2.$
  - Phía trên: $131{,}75 - 120 = 11{,}75\text{ m}^2.$
  Vậy diện tích thực tế có thể dao động từ $108{,}75\text{ m}^2$ đến sát $131{,}75\text{ m}^2,$ với độ lệch tối đa lên tới gần $12\text{ m}^2.$

---

### Chuyên đề 3: Phân tích sai lầm tích tụ qua làm tròn nhiều bước

**Bài toán 3:**
Cho số thập phân $A = 7{,}4449.$
a) Hãy làm tròn $A$ trực tiếp đến hàng đơn vị.
b) Một học sinh thực hiện làm tròn tuần tự:
   $7{,}4449 \to 7{,}445 \to 7{,}45 \to 7{,}5 \to 8.$
   Hãy chỉ rõ học sinh đó sai ở những bước nào và giải thích tại sao hiệu ứng "quân cờ domino" lại dẫn tới sai lầm nghiêm trọng này.

**Lời giải chi tiết:**
a) Làm tròn trực tiếp số gốc $A = 7{,}4449$ đến hàng đơn vị:
- Hàng làm tròn là hàng đơn vị (chữ số $7$).
- Chữ số ngay bên phải là hàng phần mười ($4 < 5$).
- Do đó giữ nguyên $7$:
  $$7{,}4449 \approx 7.$$

b) Phân tích sai lầm:
- Học sinh đã làm tròn qua $4$ bước trung gian.
- **Bản chất sai lầm:** Số $7{,}4449$ cách số $7$ một khoảng là $0{,}4449,$ nhưng cách số $8$ một khoảng là $8 - 7{,}4449 = 0{,}5551.$ Rõ ràng số $7{,}4449$ **gần số $7$ hơn nhiều so với gần số $8$**!
- Hiệu ứng "domino" xảy ra vì mỗi bước làm tròn đã tích lũy một sai số nhỏ, làm méo mó bản chất của chữ số ở hàng liền kề:
  - $9$ đẩy $4$ lên $5.$
  - $5$ lại đẩy $4$ tiếp theo lên $5.$
  - Cứ thế đẩy chữ số phần mười từ $4$ lên $5,$ biến một số vốn gần $7$ trở thành một số bị làm tròn lên $8.$
- **Bài học cốt lõi:** Trong toán học và khoa học, **chỉ được phép làm tròn một lần duy nhất từ số liệu gốc**!

---

### Chuyên đề 4: Tối ưu hóa chi phí vận chuyển kết hợp làm tròn lên và phân loại xe

**Bài toán 4:**
Một công ty cần chuyển $142$ công nhân đi dự hội nghị. Công ty có thể thuê hai loại xe:
- Xe loại A: $29$ chỗ, giá thuê $1\,800\,000$ đồng/chuyến.
- Xe loại B: $16$ chỗ, giá thuê $1\,100\,000$ đồng/chuyến.
Hỏi công ty nên thuê bao nhiêu xe mỗi loại để tất cả công nhân đều có chỗ ngồi và tổng chi phí thuê xe là ít nhất?

**Lời giải chi tiết:**
- Gọi số xe loại A là $x$ và số xe loại B là $y$ ($x, y \in \mathbb{N}$).
- Điều kiện chở hết $142$ người:
  $$29 \cdot x + 16 \cdot y \ge 142.$$
- Đơn giá cho mỗi chỗ ngồi:
  - Loại A: $1\,800\,000 : 29 \approx 62\,069$ đồng/chỗ.
  - Loại B: $1\,100\,000 : 16 \approx 68\,750$ đồng/chỗ.
  $\implies$ Xe loại A có chi phí trên mỗi chỗ ngồi rẻ hơn. Ta nên ưu tiên thuê tối đa xe loại A.
- Xét các trường hợp:
  - **Phương án 1 (Chỉ dùng xe A):**
    $$142 : 29 = 4\text{ dư } 26 \implies \text{Cần } 5\text{ xe A}.$$
    Chi phí: $5 \cdot 1\,800\,000 = 9\,000\,000$ đồng. (Thừa $5 \cdot 29 - 142 = 3$ chỗ).
  - **Phương án 2 (Dùng 4 xe A):**
    $4$ xe A chở được $4 \cdot 29 = 116$ người.
    Số người còn lại: $142 - 116 = 26$ người.
    Số xe B cần thuê để chở $26$ người: $26 : 16 = 1$ dư $10 \implies$ Cần $2$ xe B.
    Tổng chi phí: $4 \cdot 1\,800\,000 + 2 \cdot 1\,100\,000 = 7\,200\,000 + 2\,200\,000 = 9\,400\,000$ đồng.
  - **Phương án 3 (Dùng 3 xe A):**
    $3$ xe A chở được $3 \cdot 29 = 87$ người.
    Số người còn lại: $142 - 87 = 55$ người.
    Số xe B cần: $55 : 16 = 3$ dư $7 \implies 4$ xe B.
    Chi phí: $3 \cdot 1\,800\,000 + 4 \cdot 1\,100\,000 = 5\,400\,000 + 4\,400\,000 = 9\,800\,000$ đồng.
- So sánh các chi phí:
  Chi phí rẻ nhất là **$9\,000\,000$ đồng** khi thuê **$5$ xe loại A**.

---

### Chuyên đề 5: Phương pháp kẹp ước lượng thương của hai số thập phân

**Bài toán 5:**
Không thực hiện phép chia chi tiết, hãy chứng minh rằng thương $Q = \frac{719{,}85}{23{,}12}$ thỏa mãn bất đẳng thức:
$$31 < Q < 32.$$

**Lời giải chi tiết:**
- Để chứng minh $31 < Q < 32,$ ta dùng phương pháp kẹp tử số và mẫu số bằng các số nguyên đẹp:
- **Chứng minh $Q > 31$:**
  Ta có:
  $$719{,}85 > 719{,}18 = 31 \cdot 23{,}12.$$
  *(Kiểm tra nhẩm: $31 \cdot 23{,}12 = 31 \cdot (23 + 0{,}12) = 713 + 3{,}72 = 716{,}72 < 719{,}85$).*
  Vì tử số $719{,}85 > 716{,}72 = 31 \cdot 23{,}12$ nên:
  $$Q = \frac{719{,}85}{23{,}12} > \frac{716{,}72}{23{,}12} = 31.$$

- **Chứng minh $Q < 32$:**
  Ta tính tích:
  $$32 \cdot 23{,}12 = 32 \cdot 23 + 32 \cdot 0{,}12 = 736 + 3{,}84 = 739{,}84.$$
  Vì tử số $719{,}85 < 739{,}84 = 32 \cdot 23{,}12$ nên:
  $$Q = \frac{719{,}85}{23{,}12} < \frac{739{,}84}{23{,}12} = 32.$$

- Kết hợp hai bất đẳng thức trên:
  $$31 < Q < 32\quad \text{(Đpcm)}.$$

---

## E. Bộ câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Làm tròn số $4,736$ đến hàng phần mười ta được kết quả là:'
options:
  - '4,7'
  - '4,74'
  - '4,8'
  - '5,0'
answer: 1
explanation: 'Chữ số hàng phần mười là 7, chữ số ngay bên phải là 3 < 5 nên giữ nguyên 7: 4,736 ≈ 4,7.'
```

```quiz
type: choice
question: 'Làm tròn số $19,85$ đến hàng đơn vị ta được kết quả là:'
options:
  - '19'
  - '20'
  - '19,9'
  - '20,0'
answer: 2
explanation: 'Chữ số hàng đơn vị là 9, chữ số ngay bên phải là 8 ≥ 5 nên 19 tăng thành 20.'
```

```quiz
type: choice
question: 'Làm tròn số $45\,823$ đến hàng trăm ta được kết quả là:'
options:
  - '45 800'
  - '45 900'
  - '46 000'
  - '45 820'
answer: 1
explanation: 'Chữ số hàng trăm là 8, chữ số hàng chục bên phải là 2 < 5 nên giữ nguyên 8 và thay 2 chữ số cuối bằng 0: 45 800.'
```

```quiz
type: choice
question: 'Số $3\,245\,670$ sau khi làm tròn thành $3\,200\,000$ là đã được làm tròn đến hàng nào?'
options:
  - 'Hàng triệu'
  - 'Hàng trăm nghìn'
  - 'Hàng chục nghìn'
  - 'Hàng nghìn'
answer: 2
explanation: 'Từ hàng chục nghìn trở về bên phải đều là 0, chữ số hàng trăm nghìn giữ nguyên vì chữ số bên phải là 4 < 5. Vậy đã làm tròn đến hàng trăm nghìn.'
```

```quiz
type: choice
question: 'Bằng ước lượng, kết quả hợp lý nhất của phép nhân $29,8 \cdot 4,1$ là:'
options:
  - '12,218'
  - '122,18'
  - '1221,8'
  - '12 218'
answer: 2
explanation: 'Ước lượng nhẩm: 30 * 4 = 120. Số gần 120 nhất là 122,18.'
```

```quiz
type: choice
question: 'Cần chuyển 125 học sinh bằng các xe 30 chỗ. Số xe ít nhất cần thuê là:'
options:
  - '4 xe'
  - '5 xe'
  - '6 xe'
  - '4,16 xe'
answer: 2
explanation: '125 : 30 = 4 dư 5. Cần chở hết học sinh nên phải làm tròn lên thành 5 xe.'
```

```quiz
type: choice
question: 'Một cuộn dây dài 25 m, mỗi đoạn nơ cần 1,8 m dây. Hỏi cắt được nhiều nhất bao nhiêu đoạn nơ?'
options:
  - '13 đoạn'
  - '14 đoạn'
  - '15 đoạn'
  - '13,8 đoạn'
answer: 1
explanation: '25 : 1,8 ≈ 13,88. Vì phần dây thừa không đủ một đoạn nơ nên phải làm tròn xuống thành 13 đoạn.'
```

```quiz
type: choice
question: 'Khi làm tròn số thập phân $a$ đến hàng đơn vị được kết quả là 12. Khẳng định nào sau đây là ĐÚNG?'
options:
  - '11,5 < a < 12,5'
  - '11,5 ≤ a < 12,5'
  - '11,5 ≤ a ≤ 12,5'
  - '12,0 ≤ a < 12,5'
answer: 2
explanation: 'Điểm mút dưới có dấu bằng (11,5 làm tròn thành 12), điểm mút trên là dấu nhỏ hơn (12,5 làm tròn thành 13).'
```

```quiz
type: choice
question: 'Làm tròn số $0,0649$ đến hàng phần trăm ta được:'
options:
  - '0,06'
  - '0,07'
  - '0,065'
  - '0,1'
answer: 1
explanation: 'Chữ số hàng phần trăm là 6, bên phải là chữ số 4 < 5 nên giữ nguyên: 0,06.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là SAI?'
options:
  - '3,45 làm tròn đến hàng đơn vị được 3'
  - 'Số 0,098 làm tròn đến hàng phần mười được 0,1'
  - 'Có thể làm tròn một số qua 2 bước liên tiếp mà không thay đổi bản chất'
  - '15 : 4 = 3 dư 3 thì khi xếp người lên xe phải làm tròn lên thành 4'
answer: 3
explanation: 'Làm tròn qua 2 bước liên tiếp là lỗi sai kinh điển, dẫn đến kết quả sai lệch.'
```

---

## F. Đề kiểm tra 15 phút đánh giá năng lực (Có ma trận & lời giải)

### Đề kiểm tra 15 phút

**Phần I: Trắc nghiệm (3.0 điểm — Mỗi câu 0.75 điểm)**

**Câu 1:** Làm tròn số $8{,}54$ đến hàng phần mười được:
A. $8{,}5$
B. $8{,}6$
C. $8{,}50$
D. $9{,}0$

**Câu 2:** Làm tròn số $64\,521$ đến hàng nghìn được:
A. $64\,000$
B. $65\,000$
C. $64\,500$
D. $60\,000$

**Câu 3:** Ước lượng kết quả của phép tính $198{,}5 + 301{,}2$ gần với số nào nhất?
A. $400$
B. $500$
C. $600$
D. $5\,000$

**Câu 4:** Một lớp học có $43$ học sinh, mỗi bàn có $2$ chỗ ngồi. Cần ít nhất bao nhiêu bàn để đủ chỗ cho cả lớp?
A. $21$ bàn
B. $21{,}5$ bàn
C. $22$ bàn
D. $23$ bàn

---

**Phần II: Tự luận (7.0 điểm)**

**Bài 1 (2.0 điểm):**
a) Làm tròn số $35{,}746$ đến hàng phần mười và hàng đơn vị.
b) Làm tròn số $1\,495\,800$ đến hàng trăm nghìn và hàng triệu.

**Bài 2 (2.0 điểm):**
Bằng phương pháp ước lượng, hãy chỉ ra kết quả đúng của phép tính $4{,}85 \cdot 19{,}2$ trong ba số sau mà không đặt tính nhân:
$$9{,}312;\quad 93{,}12;\quad 931{,}2.$$
Giải thích rõ cách suy luận của em.

**Bài 3 (2.0 điểm — Thực tế):**
Một người thợ xây có $150\text{ kg}$ vữa. Để trát mỗi mét vuông tường cần $6{,}8\text{ kg}$ vữa.
a) Người thợ có thể trát được nhiều nhất bao nhiêu mét vuông tường hoàn chỉnh?
b) Nếu người đó cần trát một bức tường diện tích $25\text{ m}^2,$ hỏi $150\text{ kg}$ vữa có đủ không? Cần ít nhất bao nhiêu kilôgam vữa?

**Bài 4 (1.0 điểm — Nâng cao):**
Khi làm tròn một số thập phân $x$ đến hàng phần mười thì được $5{,}6.$ Tìm giá trị nhỏ nhất và lớn nhất của $x$ biết $x$ có ba chữ số ở phần thập phân.

---

### Đáp án và biểu điểm chi tiết

**Phần I: Trắc nghiệm (3.0 điểm)**
- Câu 1: **A** ($8{,}5$). *(0.75 điểm)*
- Câu 2: **B** ($65\,000$). *(0.75 điểm)*
- Câu 3: **B** ($500$). *(0.75 điểm)*
- Câu 4: **C** ($22$ bàn). *(0.75 điểm)*

**Phần II: Tự luận (7.0 điểm)**
- **Bài 1 (2.0 điểm):**
  - a) Đến hàng phần mười: $35{,}746 \approx 35{,}7$ (vì $4 < 5$). *(0.5 điểm)*
       Đến hàng đơn vị: $35{,}746 \approx 36$ (vì $7 \ge 5$). *(0.5 điểm)*
  - b) Đến hàng trăm nghìn: $1\,495\,800 \approx 1\,500\,000$ (chữ số hàng chục nghìn là $9 \ge 5$). *(0.5 điểm)*
       Đến hàng triệu: $1\,495\,800 \approx 1\,000\,000$ (chữ số hàng trăm nghìn là $4 < 5$). *(0.5 điểm)*
- **Bài 2 (2.0 điểm):**
  - Ước lượng: Làm tròn $4{,}85 \approx 5$ và $19{,}2 \approx 20.$ *(0.5 điểm)*
  - Tích ước lượng: $5 \cdot 20 = 100.$ *(0.5 điểm)*
  - Kết quả thật phải xấp xỉ $100,$ do đó chỉ có số **$93{,}12$** là hợp lý. *(1.0 điểm)*
- **Bài 3 (2.0 điểm):**
  - a) Ta có: $150 : 6{,}8 \approx 22{,}058.$
       Vì phần vữa dư không đủ trát thêm $1\text{ m}^2$ trọn vẹn, làm tròn xuống:
       Người thợ trát được nhiều nhất **$22\text{ m}^2$ tường**. *(1.0 điểm)*
  - b) Để trát $25\text{ m}^2$ tường cần:
       $$25 \cdot 6{,}8 = 170\text{ kg vữa}.$$
       Vì $150 < 170$ nên $150\text{ kg}$ vữa **không đủ**. Cần ít nhất $170\text{ kg}$ vữa. *(1.0 điểm)*
- **Bài 4 (1.0 điểm):**
  - Vì làm tròn $x$ đến hàng phần mười được $5{,}6$ nên:
    $$5{,}55 \le x < 5{,}65.$$ *(0.5 điểm)*
  - Số $x$ có ba chữ số ở phần thập phân:
    - Giá trị nhỏ nhất là: **$5{,}550$** (hoặc $5{,}55$).
    - Giá trị lớn nhất là: **$5{,}649$**. *(0.5 điểm)*
