---
title: 'Bài 29: Tính toán với số thập phân - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 29 Tính toán với số thập phân: quy tắc cộng trừ nhân chia số thập phân âm và dương, mẹo nhân chia nhẩm 0,1; 0,01; tính nhanh hợp lý, 5 dạng bài trọng tâm và 5 chuyên đề nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Số thập phân
  - Phép tính số thập phân
  - Tính hợp lý
  - Tìm x
  - Kết nối tri thức
grade: 6
---

# Bài 29. Tính toán với số thập phân

Nếu việc nhận diện và so sánh số thập phân ở Bài 28 là bước "nhận mặt chữ", thì việc **thực hiện thành thạo bốn phép tính cộng, trừ, nhân, chia** với số thập phân chính là chìa khóa để giải quyết mọi bài toán thực tế trong cuộc sống. Từ việc tính tiền đi siêu thị, đo đạc kích thước công trình, tính lượng phân bón trong nông nghiệp đến việc theo dõi biên độ nhiệt độ âm vào mùa đông ở vùng núi cao — tất cả đều đòi hỏi kỹ năng tính toán chuẩn xác với số thập phân.

Điều thú vị nhất ở Toán 6 là: **Quy tắc về dấu** khi thực hiện phép tính với số thập phân (kể cả số âm) **hoàn toàn giống hệt quy tắc dấu của số nguyên** mà các em đã thành thạo ở Chương III!

Bài viết này sẽ hướng dẫn các em nắm vững từng quy tắc đặt tính, mẹo nhân chia nhẩm "thần tốc" chỉ bằng cách dịch dấu phẩy, các cặp số đặc biệt để tính nhanh và $5$ chuyên đề học sinh giỏi độc bản $100\%$ có lời giải chi tiết.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ BỐN PHÉP TÍNH VỚI SỐ THẬP PHÂN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phép cộng & trừ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Cùng âm: $-(a + b)$<br>• Khác dấu: Lấy hiệu hai số đối, mang dấu số lớn hơn.<br>• Trừ là cộng số đối: $a - b = a + (-b)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Phép nhân & chia</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Nhân: Tách số chữ số thập phân bằng tổng số chữ số.<br>• Chia: Dịch dấu phẩy số bị chia và số chia.<br>• Cùng dấu ra $(+)$, khác dấu ra $(-)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dịch dấu phẩy nhẩm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Nhân với $0{,}1;\; 0{,}01;\dots$: Dịch dấu phẩy sang <b>TRÁI</b>.<br>• Chia cho $0{,}1;\; 0{,}01;\dots$: Dịch dấu phẩy sang <b>PHẢI</b>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #ec4899; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #be185d;">4. Tính hợp lý</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.5;">• Các cặp số tròn: $0{,}25 \cdot 4 = 1;\; 0{,}125 \cdot 8 = 1;\; 0{,}5 \cdot 2 = 1$.<br>• Đặt thừa số chung: $a \cdot b + a \cdot c = a \cdot (b + c)$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Nhớ lại kiến thức (5–7 phút)

Hãy kiểm tra nhanh các phép toán cơ bản trước khi bước vào bài học:

**Câu 1 (Cộng trừ ở Tiểu học):** Đặt tính rồi tính:
a) $14{,}6 + 5{,}85$
b) $9{,}2 - 3{,}74$
- *Trả lời:*
  - a) $14{,}60 + 5{,}85 = 20{,}45.$
  - b) $9{,}20 - 3{,}74 = 5{,}46.$

**Câu 2 (Nhân chia ở Tiểu học):** Tính nhanh:
a) $1{,}5 \cdot 6$
b) $8{,}4 : 4$
c) $0{,}25 \cdot 4$
- *Trả lời:*
  - a) $1{,}5 \cdot 6 = 9.$
  - b) $8{,}4 : 4 = 2{,}1.$
  - c) $0{,}25 \cdot 4 = 1.$

**Câu 3 (Nhắc lại quy tắc dấu số nguyên):** Tính:
a) $(-6) + (-9)$
b) $(-15) + 8$
c) $(-4) \cdot (-5)$
d) $18 : (-3)$
- *Trả lời:*
  - a) $-(6 + 9) = -15.$
  - b) $-(15 - 8) = -7.$
  - c) Cùng âm nên tích dương: $4 \cdot 5 = 20.$
  - d) Khác dấu nên thương âm: $-(18 : 3) = -6.$

**Câu 4 (Tình huống thực tế):** Buổi trưa tại đỉnh Mẫu Sơn, nhiệt độ ghi nhận là $-1{,}5^\circ\text{C}.$ Đến nửa đêm, không khí lạnh tăng cường khiến nhiệt độ hạ thêm $2{,}8^\circ\text{C}$ nữa. Hỏi nhiệt độ lúc nửa đêm là bao nhiêu?
- *Trả lời:* "Hạ thêm" nghĩa là trừ đi $2{,}8$ (hoặc cộng với $-2{,}8$):
  $$(-1{,}5) - 2{,}8 = (-1{,}5) + (-2{,}8) = -(1{,}5 + 2{,}8) = -4{,}3^\circ\text{C}.$$

---

## A. Lý thuyết trọng tâm

### 1. Phép cộng và phép trừ số thập phân

#### a) Cộng hai số thập phân cùng dấu
- **Cộng hai số dương:** Đặt tính thẳng cột dấu phẩy rồi cộng như số tự nhiên (kiến thức Tiểu học).
- **Cộng hai số cùng âm:** Cộng hai số đối của chúng rồi đặt dấu trừ `"-"` trước kết quả:
$$(-a) + (-b) = -(a + b)\quad (a, b > 0).$$
Ví dụ:
$$(-2{,}45) + (-3{,}8) = -(2{,}45 + 3{,}8) = -6{,}25.$$

#### b) Cộng hai số thập phân khác dấu
Để cộng hai số thập phân khác dấu, ta tìm số đối của chúng rồi lấy số lớn hơn trừ đi số nhỏ hơn, sau đó đặt dấu của số có số đối lớn hơn trước kết quả:
- Nếu $a > b > 0$:
$$a + (-b) = a - b$$
$$(-a) + b = -(a - b)$$
Ví dụ:
$$7{,}6 + (-4{,}25) = 7{,}6 - 4{,}25 = 3{,}35.$$
$$(-9{,}14) + 3{,}5 = -(9{,}14 - 3{,}5) = -5{,}64.$$
- Hai số đối nhau có tổng bằng $0$:
$$a + (-a) = 0.$$
Ví dụ: $(-4{,}18) + 4{,}18 = 0.$

#### c) Phép trừ số thập phân
Muốn trừ số thập phân $a$ cho số thập phân $b,$ ta cộng $a$ với số đối của $b$:
$$a - b = a + (-b).$$
Ví dụ:
$$3{,}4 - 8{,}9 = 3{,}4 + (-8{,}9) = -(8{,}9 - 3{,}4) = -5{,}5.$$
$$(-5{,}2) - (-1{,}8) = (-5{,}2) + 1{,}8 = -(5{,}2 - 1{,}8) = -3{,}4.$$

---

### 2. Phép nhân và phép chia số thập phân

#### a) Quy tắc xác định dấu (Hoàn toàn giống số nguyên)
- **Tích/Thương của hai số cùng dấu là một số dương:**
$$(+) \cdot (+) = (+);\quad (-) \cdot (-) = (+).$$
$$(+) : (+) = (+);\quad (-) : (-) = (+).$$
- **Tích/Thương của hai số khác dấu là một số âm:**
$$(+) \cdot (-) = (-);\quad (-) \cdot (+) = (-).$$
$$(+) : (-) = (-);\quad (-) : (+) = (-).$$

#### b) Quy tắc đặt tính về mặt chữ số
1. **Phép nhân hai số thập phân dương:**
   - Nhân như nhân hai số tự nhiên (bỏ qua dấu phẩy).
   - Đếm xem ở phần thập phân của cả hai thừa số có tất cả bao nhiêu chữ số.
   - Dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số kể từ phải sang trái.
   - Sau đó đặt dấu theo quy tắc dấu ở trên.
   Ví dụ: Tính $(-1{,}5) \cdot (-0{,}4)$:
   - Hai số cùng âm nên tích dương.
   - $15 \cdot 4 = 60.$
   - Cả hai thừa số có tất cả $1 + 1 = 2$ chữ số phần thập phân.
   - Đếm từ phải sang trái $2$ chữ số: $0{,}60 = 0{,}6.$
   - Vậy $(-1{,}5) \cdot (-0{,}4) = 0{,}6.$

2. **Phép chia hai số thập phân dương:**
   - Đếm xem ở phần thập phân của số chia có bao nhiêu chữ số thì dịch dấu phẩy của số bị chia sang bên phải bấy nhiêu chữ số (nếu thiếu thì viết thêm các chữ số $0$).
   - Bỏ dấu phẩy ở số chia.
   - Thực hiện phép chia như chia cho số tự nhiên.
   - Đặt dấu theo quy tắc dấu.
   Ví dụ: Tính $(-8{,}4) : 2{,}4$:
   - Khác dấu nên kết quả mang dấu âm.
   - Dịch dấu phẩy sang phải $1$ chữ số: $84 : 24 = 3{,}5.$
   - Vậy $(-8{,}4) : 2{,}4 = -3{,}5.$

---

### 3. Mẹo nhân và chia nhẩm với $0{,}1;\; 0{,}01;\; 0{,}001;\dots$

Đây là công cụ tính nhẩm siêu tốc mà học sinh không cần đặt bút tính:

| Phép toán | Thao tác dịch dấu phẩy | Ví dụ minh họa |
| :--- | :--- | :--- |
| **Nhân với $0{,}1$** | Dịch dấu phẩy sang **trái $1$ chữ số** | $45{,}6 \cdot 0{,}1 = 4{,}56$ |
| **Nhân với $0{,}01$** | Dịch dấu phẩy sang **trái $2$ chữ số** | $-8{,}3 \cdot 0{,}01 = -0{,}083$ |
| **Nhân với $0{,}001$** | Dịch dấu phẩy sang **trái $3$ chữ số** | $1\,250 \cdot 0{,}001 = 1{,}25$ |
| **Chia cho $0{,}1$** | Dịch dấu phẩy sang **phải $1$ chữ số** (tương đương $\cdot 10$) | $-7{,}2 : 0{,}1 = -72$ |
| **Chia cho $0{,}01$** | Dịch dấu phẩy sang **phải $2$ chữ số** (tương đương $\cdot 100$) | $0{,}48 : 0{,}01 = 48$ |
| **Chia cho $0{,}001$** | Dịch dấu phẩy sang **phải $3$ chữ số** (tương đương $\cdot 1\,000$) | $-3{,}5 : 0{,}001 = -3\,500$ |

> [!TIP]
> **Quy tắc ghi nhớ nhanh:**
> - Nhân làm số nhỏ đi $\to$ Dịch dấu phẩy sang TRÁI.
> - Chia làm số to lên $\to$ Dịch dấu phẩy sang PHẢI.
> - Dấu của kết quả vẫn tuân thủ nghiêm ngặt quy tắc dấu âm/dương.

---

### 4. Tính chất của các phép tính và tính nhanh hợp lý

Phép cộng và phép nhân số thập phân có đầy đủ các tính chất đại số:
1. **Giao hoán:**
   $$a + b = b + a;\quad a \cdot b = b \cdot a.$$
2. **Kết hợp:**
   $$(a + b) + c = a + (b + c);\quad (a \cdot b) \cdot c = a \cdot (b \cdot c).$$
3. **Cộng với số $0$ và nhân với số $1$:**
   $$a + 0 = a;\quad a \cdot 1 = a;\quad a \cdot 0 = 0.$$
4. **Phân phối của phép nhân đối với phép cộng và phép trừ:**
   $$a \cdot (b + c) = a \cdot b + a \cdot c;\quad a \cdot (b - c) = a \cdot b - a \cdot c.$$

**Các cặp tích "kinh điển" tạo ra số nguyên cần thuộc lòng:**
- $0{,}5 \cdot 2 = 1$
- $0{,}25 \cdot 4 = 1$
- $0{,}125 \cdot 8 = 1$
- $0{,}2 \cdot 5 = 1$
- $2{,}5 \cdot 4 = 10$
- $1{,}25 \cdot 8 = 10$

---

## B. Các dạng toán trọng tâm và phương pháp giải

### Dạng 1: Thực hiện phép tính cộng, trừ số thập phân

#### Phương pháp giải:
- Phá ngoặc nếu có dấu trừ đằng trước: $-(-b) = +b.$
- Đưa phép trừ về phép cộng với số đối.
- Nhóm các số đối nhau hoặc các số có tổng là số nguyên để tính nhanh.

---

**Ví dụ 1:** Tính:
a) $A = (-3{,}75) + (-4{,}85)$
b) $B = 8{,}42 + (-11{,}62)$
c) $C = (-6{,}3) - (-2{,}7)$
d) $D = 15{,}4 - 23{,}85$

**Lời giải:**
a) Hai số cùng âm:
$$A = -(3{,}75 + 4{,}85) = -8{,}6.$$
b) Hai số khác dấu:
$$B = -(11{,}62 - 8{,}42) = -3{,}2.$$
c) Phép trừ đưa về phép cộng:
$$C = (-6{,}3) + 2{,}7 = -(6{,}3 - 2{,}7) = -3{,}6.$$
d) $D = 15{,}4 - 23{,}85 = -(23{,}85 - 15{,}4) = -8{,}45.$

---

### Dạng 2: Thực hiện phép tính nhân, chia số thập phân

#### Phương pháp giải:
- Xác định dấu của tích hoặc thương trước (cùng dấu $\to +,$ khác dấu $\to -$).
- Thực hiện nhân hoặc chia phần số như số tự nhiên.

---

**Ví dụ 2:** Tính:
a) $M = (-2{,}4) \cdot 3{,}5$
b) $N = (-0{,}75) \cdot (-8)$
c) $P = (-18{,}72) : 5{,}2$
d) $Q = (-15{,}6) : (-0{,}65)$

**Lời giải:**
a) Khác dấu nên tích mang dấu âm:
$$2{,}4 \cdot 3{,}5 = 8{,}4 \implies M = -8{,}4.$$
b) Cùng dấu nên tích mang dấu dương:
$$0{,}75 \cdot 8 = 6 \implies N = 6.$$
c) Khác dấu nên thương mang dấu âm:
Dịch dấu phẩy: $187{,}2 : 52 = 3{,}6 \implies P = -3{,}6.$
d) Cùng dấu nên thương mang dấu dương:
Dịch dấu phẩy $2$ hàng: $1\,560 : 65 = 24 \implies Q = 24.$

---

### Dạng 3: Nhân, chia nhẩm với $0{,}1;\; 0{,}01;\; 0{,}001$

#### Phương pháp giải:
- Nhân: dịch dấu phẩy sang trái.
- Chia: dịch dấu phẩy sang phải.
- Áp dụng quy tắc dấu.

---

**Ví dụ 3:** Tính nhẩm nhanh:
a) $(-14{,}8) \cdot 0{,}1$
b) $(-0{,}375) \cdot (-0{,}01)$
c) $5{,}6 : 0{,}1$
d) $(-4{,}2) : (-0{,}01)$
e) $0{,}08 : (-0{,}1)$

**Lời giải:**
a) Dịch dấu phẩy sang trái $1$ hàng, giữ dấu âm:
$$(-14{,}8) \cdot 0{,}1 = -1{,}48.$$
b) Hai số âm cho kết quả dương, dịch dấu phẩy sang trái $2$ hàng:
$$(-0{,}375) \cdot (-0{,}01) = 0{,}00375.$$
c) Chia cho $0{,}1$ tương đương nhân với $10$ (dịch sang phải $1$ hàng):
$$5{,}6 : 0{,}1 = 56.$$
d) Cùng dấu ra dương, dịch sang phải $2$ hàng:
$$(-4{,}2) : (-0{,}01) = 420.$$
e) Khác dấu ra âm, dịch sang phải $1$ hàng:
$$0{,}08 : (-0{,}1) = -0{,}8.$$

---

### Dạng 4: Tính giá trị biểu thức bằng cách hợp lý (Tính nhanh)

#### Phương pháp giải:
- Sử dụng tính chất phân phối: $a \cdot b + a \cdot c = a \cdot (b + c).$
- Ghép các cặp số có tích bằng $1$ hoặc $10$ như $(0{,}25 \cdot 4);\; (0{,}125 \cdot 8);\; (2{,}5 \cdot 4).$
- Nhóm các số có phần thập phân bù nhau thành số nguyên tròn.

---

**Ví dụ 4:** Tính giá trị các biểu thức sau một cách hợp lý:
a) $A = 3{,}7 \cdot (-2{,}8) + 3{,}7 \cdot (-7{,}2)$
b) $B = 0{,}25 \cdot 17{,}8 \cdot (-4)$
c) $C = 12{,}5 \cdot 3{,}6 + 12{,}5 \cdot 6{,}4 - 25$
d) $D = (4{,}8 \cdot 13{,}5 - 4{,}8 \cdot 3{,}5) : 0{,}1$

**Lời giải:**
a) Đặt thừa số chung $3{,}7$:
$$A = 3{,}7 \cdot [(-2{,}8) + (-7{,}2)] = 3{,}7 \cdot (-10) = -37.$$
b) Đổi chỗ và kết hợp cặp $(0{,}25 \cdot (-4))$:
$$B = [0{,}25 \cdot (-4)] \cdot 17{,}8 = (-1) \cdot 17{,}8 = -17{,}8.$$
c) Đặt thừa số chung $12{,}5$:
$$C = 12{,}5 \cdot (3{,}6 + 6{,}4) - 25 = 12{,}5 \cdot 10 - 25 = 125 - 25 = 100.$$
d) Tính trong ngoặc trước bằng cách đặt thừa số chung:
$$4{,}8 \cdot (13{,}5 - 3{,}5) = 4{,}8 \cdot 10 = 48.$$
Sau đó chia cho $0{,}1$:
$$D = 48 : 0{,}1 = 480.$$

---

### Dạng 5: Tìm số chưa biết $x$ trong đẳng thức số thập phân

#### Phương pháp giải:
- Thu gọn vế không chứa $x$ trước.
- Áp dụng các quy tắc tìm thành phần phép tính:
  - Muốn tìm số hạng chưa biết: Lấy tổng trừ đi số hạng đã biết.
  - Muốn tìm số bị trừ: Lấy hiệu cộng với số trừ.
  - Muốn tìm số trừ: Lấy số bị trừ trừ đi hiệu.
  - Muốn tìm thừa số: Lấy tích chia cho thừa số kia.
  - Muốn tìm số bị chia: Lấy thương nhân với số chia.
  - Muốn tìm số chia: Lấy số bị chia chia cho thương.

---

**Ví dụ 5:** Tìm số thập phân $x,$ biết:
a) $x + 4{,}75 = 10 - 3 \cdot 1{,}5$
b) $x - 6{,}8 = -2{,}4$
c) $3{,}6 \cdot x = -10{,}8$
d) $(x : 2{,}5) + 1{,}4 = 5$

**Lời giải:**
a) Thu gọn vế phải:
$$10 - 3 \cdot 1{,}5 = 10 - 4{,}5 = 5{,}5.$$
Ta có:
$$x + 4{,}75 = 5{,}5 \implies x = 5{,}5 - 4{,}75 = 0{,}75.$$

b) Áp dụng quy tắc tìm số bị trừ:
$$x = -2{,}4 + 6{,}8 = 4{,}4.$$

c) Áp dụng quy tắc tìm thừa số:
$$x = (-10{,}8) : 3{,}6 = -3.$$

d) Coi $(x : 2{,}5)$ là số hạng chưa biết:
$$x : 2{,}5 = 5 - 1{,}4 = 3{,}6.$$
Tìm số bị chia $x$:
$$x = 3{,}6 \cdot 2{,}5 = 9.$$

---

## C. Phiếu bài tập tự luyện toàn diện (Có lời giải chi tiết)

### Đề bài tự luyện

**Bài 1 (Cộng trừ cơ bản):** Thực hiện phép tính:
a) $5{,}42 + 7{,}89$
b) $(-8{,}15) + (-6{,}85)$
c) $(-12{,}4) + 7{,}9$
d) $18{,}3 - 25{,}7$
e) $(-4{,}6) - (-9{,}8)$
f) $0 - (-14{,}35)$

**Bài 2 (Nhân chia cơ bản):** Tính:
a) $(-4{,}5) \cdot 6$
b) $(-1{,}25) \cdot (-0{,}8)$
c) $3{,}6 \cdot (-2{,}5)$
d) $(-28{,}8) : (-3{,}6)$
e) $15{,}75 : (-4{,}5)$
f) $(-0{,}84) : 0{,}12$

**Bài 3 (Nhân chia nhẩm với $0{,}1;\; 0{,}01$):** Tính nhẩm:
a) $(-38{,}5) \cdot 0{,}1$
b) $(-0{,}45) \cdot (-0{,}01)$
c) $12{,}6 : 0{,}1$
d) $(-7{,}5) : (-0{,}01)$
e) $0{,}09 : (-0{,}001)$

**Bài 4 (Tính hợp lý):** Tính giá trị các biểu thức sau một cách thuận tiện nhất:
a) $A = (-4{,}35) + 18{,}2 + (-5{,}65) + 1{,}8$
b) $B = 7{,}2 \cdot 14{,}8 + 7{,}2 \cdot (-4{,}8)$
c) $C = 0{,}125 \cdot (-8) \cdot 23{,}5$
d) $D = 13{,}5 \cdot 4{,}7 + 13{,}5 \cdot 6{,}3 - 13{,}5$

**Bài 5 (Thứ tự thực hiện phép tính):** Tính giá trị của biểu thức:
a) $M = (3^2 - 2 \cdot 1{,}5) : 0{,}2 + 4 \cdot (-1{,}25)$
b) $N = 100 - [15{,}5 + (3{,}8 - 1{,}2)^2 : 0{,}4]$

**Bài 6 (Tìm $x$):** Tìm $x,$ biết:
a) $x - 5{,}4 = -3{,}15$
b) $2{,}5 \cdot x + 3{,}7 = 11{,}2$
c) $x : (-0{,}4) = 15{,}5 - 8 \cdot 2$
d) $6{,}8 - 2 \cdot x = 1{,}4$

**Bài 7 (Bài toán thực tế nhiệt độ):**
Một buồng đông lạnh thực phẩm đang ở nhiệt độ $-4{,}5^\circ\text{C}.$ Người kỹ thuật viên bấm nút làm lạnh sâu, khiến nhiệt độ buồng đông giảm thêm $0{,}8^\circ\text{C}$ mỗi giờ.
a) Viết biểu thức tính nhiệt độ của buồng sau $5$ giờ làm lạnh sâu.
b) Tính nhiệt độ buồng đông lúc đó.

**Bài 8 (Bài toán mua sắm thực tế):**
Bạn Mai đi siêu thị mua các mặt hàng sau:
- $2{,}5\text{ kg}$ gạo ST25 với giá $32\,000$ đồng/kg.
- $1{,}2\text{ kg}$ thịt ba chỉ với giá $140\,000$ đồng/kg.
- $0{,}8\text{ kg}$ nho Mỹ với giá $150\,000$ đồng/kg.
Bạn Mai đưa cho thu ngân $400\,000$ đồng. Hỏi thu ngân phải thối lại bạn Mai bao nhiêu tiền?

**Bài 9 (Bài toán chuyển động thực tế):**
Một xe tải đi từ kho A đến kho B. Trong $1{,}5$ giờ đầu xe chạy trên đường cao tốc với vận tốc $68{,}4\text{ km/h}.$ Trong $0{,}75$ giờ sau xe chạy trên đường quốc lộ với vận tốc $45{,}2\text{ km/h}.$ Hỏi xe tải đã đi được tổng cộng bao nhiêu kilômét?

**Bài 10 (Kiểm tra và sửa lỗi sai):**
Không tính cụ thể toàn bộ phép tính, hãy dùng phương pháp ước lượng số nguyên để phát hiện vị trí dấu phẩy bị ghi sai trong các kết quả sau và sửa lại cho đúng:
a) $3{,}2 \cdot 4{,}5 = 144$
b) $75{,}6 : 0{,}9 = 8{,}4$
c) $12{,}8 + 3{,}45 = 47{,}3$

---

### Lời giải chi tiết bài tập tự luyện

**Bài 1:**
a) $5{,}42 + 7{,}89 = 13{,}31.$
b) $(-8{,}15) + (-6{,}85) = -(8{,}15 + 6{,}85) = -15.$
c) $(-12{,}4) + 7{,}9 = -(12{,}4 - 7{,}9) = -4{,}5.$
d) $18{,}3 - 25{,}7 = -(25{,}7 - 18{,}3) = -7{,}4.$
e) $(-4{,}6) - (-9{,}8) = -4{,}6 + 9{,}8 = 5{,}2.$
f) $0 - (-14{,}35) = 0 + 14{,}35 = 14{,}35.$

**Bài 2:**
a) $(-4{,}5) \cdot 6 = -27.$
b) $(-1{,}25) \cdot (-0{,}8) = +(1{,}25 \cdot 0{,}8) = 1.$
c) $3{,}6 \cdot (-2{,}5) = -9.$
d) $(-28{,}8) : (-3{,}6) = +(28{,}8 : 3{,}6) = 8.$
e) $15{,}75 : (-4{,}5) = -(157{,}5 : 45) = -3{,}5.$
f) $(-0{,}84) : 0{,}12 = -(84 : 12) = -7.$

**Bài 3:**
a) $(-38{,}5) \cdot 0{,}1 = -3{,}85.$
b) $(-0{,}45) \cdot (-0{,}01) = 0{,}0045.$
c) $12{,}6 : 0{,}1 = 126.$
d) $(-7{,}5) : (-0{,}01) = 750.$
e) $0{,}09 : (-0{,}001) = -90.$

**Bài 4:**
a) Nhóm các số thích hợp:
$$A = [(-4{,}35) + (-5{,}65)] + (18{,}2 + 1{,}8) = -10 + 20 = 10.$$
b) Đặt nhân tử chung $7{,}2$:
$$B = 7{,}2 \cdot [14{,}8 + (-4{,}8)] = 7{,}2 \cdot 10 = 72.$$
c) Kết hợp cặp số tròn:
$$C = [0{,}125 \cdot (-8)] \cdot 23{,}5 = (-1) \cdot 23{,}5 = -23{,}5.$$
d) Viết $13{,}5 = 13{,}5 \cdot 1$:
$$D = 13{,}5 \cdot (4{,}7 + 6{,}3 - 1) = 13{,}5 \cdot 10 = 135.$$

**Bài 5:**
a) Tính trong ngoặc: $3^2 - 2 \cdot 1{,}5 = 9 - 3 = 6.$
$$6 : 0{,}2 + 4 \cdot (-1{,}25) = 30 + (-5) = 25.$$
b) Tính trong ngoặc tròn: $3{,}8 - 1{,}2 = 2{,}6.$
Lũy thừa: $(2{,}6)^2 = 6{,}76.$
Chia: $6{,}76 : 0{,}4 = 16{,}9.$
Tính trong ngoặc vuông: $15{,}5 + 16{,}9 = 32{,}4.$
Vậy: $N = 100 - 32{,}4 = 67{,}6.$

**Bài 6:**
a) $x = -3{,}15 + 5{,}4 = 2{,}25.$
b) $2{,}5 \cdot x = 11{,}2 - 3{,}7 = 7{,}5 \implies x = 7{,}5 : 2{,}5 = 3.$
c) Vế phải: $15{,}5 - 16 = -0{,}5.$
$$x : (-0{,}4) = -0{,}5 \implies x = (-0{,}5) \cdot (-0{,}4) = 0{,}2.$$
d) $2 \cdot x = 6{,}8 - 1{,}4 = 5{,}4 \implies x = 5{,}4 : 2 = 2{,}7.$

**Bài 7:**
a) Biểu thức nhiệt độ sau $5$ giờ:
$$T = -4{,}5 - 5 \cdot 0{,}8\quad (^\circ\text{C}).$$
b) Tính nhiệt độ:
$$T = -4{,}5 - 4 = -8{,}5^\circ\text{C}.$$

**Bài 8:**
Tổng số tiền mua hàng:
- Tiền gạo: $2{,}5 \cdot 32\,000 = 80\,000$ đồng.
- Tiền thịt: $1{,}2 \cdot 140\,000 = 168\,000$ đồng.
- Tiền nho: $0{,}8 \cdot 150\,000 = 120\,000$ đồng.
Tổng cộng:
$$80\,000 + 168\,000 + 120\,000 = 368\,000\text{ đồng}.$$
Số tiền thối lại cho Mai:
$$400\,000 - 368\,000 = 32\,000\text{ đồng}.$$

**Bài 9:**
- Quãng đường cao tốc: $68{,}4 \cdot 1{,}5 = 102{,}6\text{ km}.$
- Quãng đường quốc lộ: $45{,}2 \cdot 0{,}75 = 33{,}9\text{ km}.$
Tổng quãng đường:
$$102{,}6 + 33{,}9 = 136{,}5\text{ km}.$$

**Bài 10:**
a) Ước lượng: $3 \cdot 4 = 12,$ tích khoảng $14$ đến $15,$ không thể là $144.$
Kết quả đúng: $3{,}2 \cdot 4{,}5 = 14{,}4.$
b) Ước lượng: $75 : 1 \approx 75,$ khi chia cho $0{,}9 < 1$ thương phải lớn hơn $75,$ không thể là $8{,}4.$
Kết quả đúng: $75{,}6 : 0{,}9 = 84.$
c) Ước lượng: $12 + 3 = 15,$ kết quả khoảng hơn $16,$ không thể là $47{,}3$ (do đặt lệch cột $12{,}8$ với $34{,}5$).
Kết quả đúng: $12{,}8 + 3{,}45 = 16{,}25.$

---

## D. 5 Chuyên đề nâng cao học sinh giỏi (Độc bản 100%)

### Chuyên đề 1: Tính nhanh biểu thức chứa quy luật và phân phối nâng cao

**Bài toán 1:** Tính giá trị biểu thức:
$$P = \dfrac{0{,}4 \cdot 19{,}5 \cdot 2{,}5 + 0{,}2 \cdot 80{,}5 \cdot 5}{0{,}125 \cdot 4 \cdot 78{,}4 \cdot 2}.$$

**Lời giải chi tiết:**
- Xét tử số:
  - Tích thứ nhất: $(0{,}4 \cdot 2{,}5) \cdot 19{,}5 = 1 \cdot 19{,}5 = 19{,}5.$
  - Tích thứ hai: $(0{,}2 \cdot 5) \cdot 80{,}5 = 1 \cdot 80{,}5 = 80{,}5.$
  - Do đó tử số bằng: $19{,}5 + 80{,}5 = 100.$
- Xét mẫu số:
  - Ta nhóm: $(0{,}125 \cdot 4 \cdot 2) \cdot 78{,}4 = (0{,}125 \cdot 8) \cdot 78{,}4 = 1 \cdot 78{,}4 = 78{,}4.$
- Phép chia:
$$P = \dfrac{100}{78{,}4} = \dfrac{1\,000}{784} = \dfrac{125}{98}.$$

---

### Chuyên đề 2: Bài toán thay đổi số hạng — Hiệu và tổng mới

**Bài toán 2:** Cho hai số thập phân có tổng bằng $46{,}8.$ Nếu gấp số thứ nhất lên $4$ lần và giữ nguyên số thứ hai thì được tổng mới bằng $117{,}6.$ Tìm hai số thập phân ban đầu.

**Lời giải chi tiết:**
- Gọi hai số thập phân ban đầu lần lượt là $A$ và $B.$
Theo đề bài:
$$A + B = 46{,}8.$$
- Khi gấp số thứ nhất lên $4$ lần, tổng mới là:
$$4 \cdot A + B = 117{,}6.$$
- Lấy tổng mới trừ đi tổng cũ:
$$(4 \cdot A + B) - (A + B) = 117{,}6 - 46{,}8$$
$$3 \cdot A = 70{,}8.$$
- Suy ra số thứ nhất $A$ là:
$$A = 70{,}8 : 3 = 23{,}6.$$
- Số thứ hai $B$ là:
$$B = 46{,}8 - 23{,}6 = 23{,}2.$$
Kiểm tra lại: $4 \cdot 23{,}6 + 23{,}2 = 94{,}4 + 23{,}2 = 117{,}6$ (Chính xác).
Vậy hai số cần tìm là $23{,}6$ và $23{,}2.$

---

### Chuyên đề 3: Bài toán dịch dấu phẩy số thập phân

**Bài toán 3:** Khi thực hiện phép cộng một số tự nhiên với một số thập phân có một chữ số ở phần thập phân, bạn Nam sơ ý quên viết dấu phẩy của số thập phân nên thực hiện cộng như hai số tự nhiên và được kết quả là $2\,211.$ Biết rằng tổng đúng phải là $425{,}4.$ Tìm số tự nhiên và số thập phân đã cho.

**Lời giải chi tiết:**
- Gọi số tự nhiên là $N$ và số thập phân là $A.$
- Vì $A$ có một chữ số ở phần thập phân nên khi quên viết dấu phẩy, giá trị của số đó được gấp lên $10$ lần (trở thành $10 \cdot A$).
- Theo bài ra:
  - Tổng đúng: $N + A = 425{,}4$
  - Tổng sai: $N + 10 \cdot A = 2\,211$
- Lấy tổng sai trừ đi tổng đúng:
$$(N + 10 \cdot A) - (N + A) = 2\,211 - 425{,}4 \implies 9 \cdot A = 1\,785{,}6.$$
- Suy ra số thập phân $A$ là:
$$A = 1\,785{,}6 : 9 = 198{,}4.$$
- Số tự nhiên $N$ là:
$$N = 425{,}4 - 198{,}4 = 227.$$
Thử lại: $227 + 1\,984 = 2\,211$ (đúng).
Vậy số tự nhiên là $227$ và số thập phân là $198{,}4.$

---

### Chuyên đề 4: Hệ phương trình liên hoàn ba đại lượng đối xứng

**Bài toán 4:** Ba bạn An, Bình và Cường cùng cân sức khỏe:
- Cân nặng của An và Bình cộng lại là $78{,}5\text{ kg}.$
- Cân nặng của Bình và Cường cộng lại là $81{,}2\text{ kg}.$
- Cân nặng của Cường và An cộng lại là $79{,}7\text{ kg}.$
Hỏi mỗi bạn cân nặng bao nhiêu kilôgam?

**Lời giải chi tiết:**
- Kí hiệu cân nặng của An, Bình, Cường lần lượt là $A, B, C.$
Theo đề bài:
$$A + B = 78{,}5\quad (1)$$
$$B + C = 81{,}2\quad (2)$$
$$C + A = 79{,}7\quad (3)$$
- Cộng vế với vế của cả ba đẳng thức trên, mỗi bạn được tính đúng hai lần:
$$2 \cdot (A + B + C) = 78{,}5 + 81{,}2 + 79{,}7 = 239{,}4\text{ kg}.$$
- Tổng cân nặng của cả ba bạn là:
$$A + B + C = 239{,}4 : 2 = 119{,}7\text{ kg}.$$
- Từ đó tìm cân nặng của từng bạn:
  - Cân nặng của Cường là:
    $$C = (A + B + C) - (A + B) = 119{,}7 - 78{,}5 = 41{,}2\text{ kg}.$$
  - Cân nặng của An là:
    $$A = (A + B + C) - (B + C) = 119{,}7 - 81{,}2 = 38{,}5\text{ kg}.$$
  - Cân nặng của Bình là:
    $$B = (A + B + C) - (C + A) = 119{,}7 - 79{,}7 = 40\text{ kg}.$$
Thử lại:
$A + B = 38{,}5 + 40 = 78{,}5$ (Đúng).
$B + C = 40 + 41{,}2 = 81{,}2$ (Đúng).
$C + A = 41{,}2 + 38{,}5 = 79{,}7$ (Đúng).
Vậy: An nặng $38{,}5\text{ kg},$ Bình nặng $40\text{ kg}$ và Cường nặng $41{,}2\text{ kg}.$

---

### Chuyên đề 5: Phương trình tích và giá trị tuyệt đối với số thập phân

**Bài toán 5:** Tìm số thập phân $x,$ biết:
a) $(2{,}5 \cdot x - 5) \cdot (0{,}4 \cdot x + 1{,}6) = 0$
b) $|x - 1{,}75| = 3{,}25$

**Lời giải chi tiết:**
a) Một tích bằng $0$ khi và chỉ khi ít nhất một trong các thừa số bằng $0$:
- **Trường hợp 1:**
$$2{,}5 \cdot x - 5 = 0 \iff 2{,}5 \cdot x = 5 \iff x = 5 : 2{,}5 = 2.$$
- **Trường hợp 2:**
$$0{,}4 \cdot x + 1{,}6 = 0 \iff 0{,}4 \cdot x = -1{,}6 \iff x = (-1{,}6) : 0{,}4 = -4.$$
Vậy $x \in \{2;\; -4\}.$

b) Ta có $|x - 1{,}75| = 3{,}25.$
- **Trường hợp 1:**
$$x - 1{,}75 = 3{,}25 \iff x = 3{,}25 + 1{,}75 = 5.$$
- **Trường hợp 2:**
$$x - 1{,}75 = -3{,}25 \iff x = -3{,}25 + 1{,}75 = -(3{,}25 - 1{,}75) = -1{,}5.$$
Vậy $x \in \{5;\; -1{,}5\}.$

---

## E. Bộ câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Kết quả của phép tính $(-3,4) + (-5,8)$ là:'
options:
  - '-2,4'
  - '-9,2'
  - '9,2'
  - '-8,2'
answer: 2
explanation: 'Cộng hai số cùng âm: -(3,4 + 5,8) = -9,2.'
```

```quiz
type: choice
question: 'Kết quả của phép tính $4,5 - 10,2$ là:'
options:
  - '-5,7'
  - '5,7'
  - '-6,7'
  - '-14,7'
answer: 1
explanation: '4,5 - 10,2 = -(10,2 - 4,5) = -5,7.'
```

```quiz
type: choice
question: 'Kết quả của phép nhân $(-2,5) \cdot (-0,4)$ là:'
options:
  - '-1'
  - '1'
  - '-0,1'
  - '10'
answer: 2
explanation: 'Cùng âm cho tích dương: 2,5 * 0,4 = 1.'
```

```quiz
type: choice
question: 'Kết quả của phép chia $(-7,2) : 0,9$ là:'
options:
  - '8'
  - '-8'
  - '-0,8'
  - '0,8'
answer: 2
explanation: 'Khác dấu cho thương âm: -(7,2 : 0,9) = -8.'
```

```quiz
type: choice
question: 'Tính nhẩm nhanh: $(-12,5) : (-0,01)$ được kết quả là:'
options:
  - '-1250'
  - '1250'
  - '0,125'
  - '-0,125'
answer: 2
explanation: 'Cùng âm cho kết quả dương. Chia cho 0,01 là dịch dấu phẩy sang phải 2 hàng: 12,5 -> 1250.'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $0,25 \cdot 7,4 \cdot 4$ là:'
options:
  - '7,4'
  - '74'
  - '0,74'
  - '29,6'
answer: 1
explanation: 'Nhóm (0,25 * 4) * 7,4 = 1 * 7,4 = 7,4.'
```

```quiz
type: choice
question: 'Tìm $x$, biết $x + 3,5 = -2,1$:'
options:
  - '5,6'
  - '-1,4'
  - '-5,6'
  - '1,4'
answer: 3
explanation: 'x = -2,1 - 3,5 = -(2,1 + 3,5) = -5,6.'
```

```quiz
type: choice
question: 'Giá trị của biểu thức $5,6 \cdot 3,8 + 5,6 \cdot 6,2$ là:'
options:
  - '56'
  - '560'
  - '5,6'
  - '56,2'
answer: 1
explanation: 'Đặt nhân tử chung: 5,6 * (3,8 + 6,2) = 5,6 * 10 = 56.'
```

```quiz
type: choice
question: 'Tìm $x$, biết $x : (-0,5) = 4,8$:'
options:
  - '-2,4'
  - '2,4'
  - '-9,6'
  - '9,6'
answer: 1
explanation: 'x = 4,8 * (-0,5) = -2,4.'
```

```quiz
type: choice
question: 'Nhiệt độ lúc 7 giờ sáng là $-1,8^\circ\text{C}$, đến 12 giờ trưa tăng thêm $4,5^\circ\text{C}$. Nhiệt độ lúc 12 giờ trưa là:'
options:
  - '-6,3 độ C'
  - '2,7 độ C'
  - '-2,7 độ C'
  - '6,3 độ C'
answer: 2
explanation: 'Nhiệt độ = -1,8 + 4,5 = 4,5 - 1,8 = 2,7 độ C.'
```

---

## F. Đề kiểm tra 15 phút đánh giá năng lực (Có ma trận & lời giải)

### Đề kiểm tra 15 phút

**Phần I: Trắc nghiệm (3.0 điểm — Mỗi câu 0.75 điểm)**

**Câu 1:** Kết quả của phép tính $(-6{,}25) + 3{,}75$ là:
A. $-10$
B. $-2{,}5$
C. $2{,}5$
D. $-3$

**Câu 2:** Kết quả của phép tính $(-1{,}5) \cdot (-4)$ là:
A. $-6$
B. $6$
C. $-0{,}6$
D. $0{,}6$

**Câu 3:** Tính nhẩm: $3{,}45 : 0{,}1$ bằng:
A. $0{,}345$
B. $34{,}5$
C. $345$
D. $-34{,}5$

**Câu 4:** Tìm $x,$ biết $x - 2{,}8 = -4{,}5$:
A. $1{,}7$
B. $-7{,}3$
C. $-1{,}7$
D. $7{,}3$

---

**Phần II: Tự luận (7.0 điểm)**

**Bài 1 (2.5 điểm):** Thực hiện phép tính (tính hợp lý nếu có thể):
a) $(-4{,}8) + (-7{,}35) + 4{,}8$
b) $8{,}5 \cdot 3{,}7 + 8{,}5 \cdot 6{,}3 - 25$

**Bài 2 (2.0 điểm):** Tìm số thập phân $x,$ biết:
a) $x : 1{,}2 = -3{,}5$
b) $3{,}4 - 2 \cdot x = 1{,}8$

**Bài 3 (1.5 điểm — Thực tế):**
Một người thợ may dùng một khúc vải dài $18{,}5\text{ m}$ để may các bộ đồng phục học sinh. Mỗi bộ đồng phục cần $2{,}2\text{ m}$ vải.
a) Người thợ may được nhiều nhất bao nhiêu bộ đồng phục như thế?
b) Còn thừa lại bao nhiêu mét vải?

**Bài 4 (1.0 điểm — Nâng cao):**
Tính giá trị của biểu thức:
$$S = 1{,}2 + 2{,}3 + 3{,}4 + \dots + 8{,}9.$$

---

### Đáp án và biểu điểm chi tiết

**Phần I: Trắc nghiệm (3.0 điểm)**
- Câu 1: **B** ($-2{,}5$). *(0.75 điểm)*
- Câu 2: **B** ($6$). *(0.75 điểm)*
- Câu 3: **B** ($34{,}5$). *(0.75 điểm)*
- Câu 4: **C** ($-1{,}7$). *(0.75 điểm)*

**Phần II: Tự luận (7.0 điểm)**
- **Bài 1 (2.5 điểm):**
  - a) Nhóm hai số đối:
    $$[(-4{,}8) + 4{,}8] + (-7{,}35) = 0 + (-7{,}35) = -7{,}35.\quad (1.0\text{ điểm})$$
  - b) Đặt nhân tử chung $8{,}5$:
    $$8{,}5 \cdot (3{,}7 + 6{,}3) - 25 = 8{,}5 \cdot 10 - 25 = 85 - 25 = 60.\quad (1.5\text{ điểm})$$
- **Bài 2 (2.0 điểm):**
  - a) $x = (-3{,}5) \cdot 1{,}2 = -4{,}2.$ *(1.0 điểm)*
  - b) $2 \cdot x = 3{,}4 - 1{,}8 = 1{,}6 \implies x = 1{,}6 : 2 = 0{,}8.$ *(1.0 điểm)*
- **Bài 3 (1.5 điểm):**
  - Thực hiện phép chia có dư:
    $$18{,}5 : 2{,}2 = 8\text{ (dư } 0{,}9).$$ *(1.0 điểm)*
  - Trả lời:
    - a) May được nhiều nhất $8$ bộ đồng phục. *(0.25 điểm)*
    - b) Còn thừa lại $0{,}9\text{ m}$ vải. *(0.25 điểm)*
- **Bài 4 (1.0 điểm):**
  - Dãy số gồm $8$ số hạng: $1{,}2;\; 2{,}3;\; 3{,}4;\; 4{,}5;\; 5{,}6;\; 6{,}7;\; 7{,}8;\; 8{,}9.$
  - Tách phần nguyên và phần thập phân:
    - Tổng phần nguyên: $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = \dfrac{(1 + 8) \cdot 8}{2} = 36.$
    - Tổng phần thập phân: $0{,}2 + 0{,}3 + \dots + 0{,}9 = 0{,}1 \cdot (2 + 3 + \dots + 9) = 0{,}1 \cdot \dfrac{(2 + 9) \cdot 8}{2} = 0{,}1 \cdot 44 = 4{,}4.$
  - Vậy tổng $S = 36 + 4{,}4 = 40{,}4.$ *(1.0 điểm)*
