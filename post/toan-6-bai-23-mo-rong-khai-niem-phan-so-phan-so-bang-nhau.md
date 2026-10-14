---
title: 'Bài 23: Mở rộng khái niệm phân số. Phân số bằng nhau - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 23 Mở rộng khái niệm phân số và phân số bằng nhau: định nghĩa với tử mẫu nguyên, quy tắc tích chéo, tính chất cơ bản, quy tắc đổi dấu mẫu dương, rút gọn phân số tối giản và 5 chuyên đề nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Phân số
  - Mở rộng phân số
  - Phân số bằng nhau
  - Rút gọn phân số
  - Kết nối tri thức
grade: 6
---

# Bài 23. Mở rộng khái niệm phân số. Phân số bằng nhau

Ở bậc Tiểu học, chúng ta đã từng làm quen với phân số qua những hình ảnh rất trực quan: một chiếc bánh pizza chia làm $4$ phần bằng nhau lấy $3$ phần ta được phân số $\dfrac{3}{4}$, hay một thanh sô-cô-la chia $6$ phần lấy $5$ phần ta được $\dfrac{5}{6}.$ Trong các phân số đó, tử số và mẫu số đều là các **số tự nhiên** (với mẫu số khác $0$).

Tuy nhiên, khi bước vào lớp 6, thế giới số của chúng ta đã mở rộng vượt bậc với sự xuất hiện của **tập hợp số nguyên $\mathbb{Z}$** bao gồm cả số $0$ và các số nguyên âm (như $-1; -2; -15; \dots$). Vậy nếu một khoản nợ $12$ triệu đồng được chia đều cho $4$ người cùng gánh, mỗi người chịu bao nhiêu? Đó là $(-12) : 4 = \dfrac{-12}{4} = -3$ triệu đồng! Phân số có tử số là số nguyên âm xuất hiện tự nhiên như thế.

Bài học hôm nay sẽ giúp các em mở rộng trọn vẹn khái niệm phân số lên tập số nguyên, làm chủ quy tắc tích chéo để nhận biết hai phân số bằng nhau, nắm vững tính chất cơ bản để rút gọn phân số và tự tin giải quyết toàn bộ các dạng toán từ cơ bản đến nâng cao học sinh giỏi với số liệu độc bản $100\%.$

---

## Khởi động — Kết nối tri thức (5–7 phút)

Hãy cùng suy ngẫm và trả lời nhanh 4 câu hỏi khởi động sau đây:

**Câu 1 (Hình học & Tỉ số):** Một dải ruy-băng dài $1\text{ m}$ được chia thành $8$ đoạn bằng nhau. Bạn Mai cắt lấy $5$ đoạn để thắt nơ. Phân số chỉ phần ruy-băng bạn Mai đã lấy là bao nhiêu?
*Trả lời:* Ta lấy $5$ phần trong tổng số $8$ phần bằng nhau, ứng với phân số $\dfrac{5}{8}.$

**Câu 2 (Thực tế số âm):** Tàu ngầm đang lặn ở độ sâu $45\text{ m}$ dưới mực nước biển (được biểu diễn bằng số nguyên $-45$). Nếu tàu chia hành trình nổi lên mặt nước làm $3$ chặng bằng nhau, mỗi chặng tàu dịch chuyển một khoảng bao nhiêu?
*Trả lời:* Khoảng dịch chuyển mỗi chặng là $(-45) : 3 = \dfrac{-45}{3} = -15\text{ m}.$ Biểu thức $\dfrac{-45}{3}$ chính là một phân số có tử số âm!

**Câu 3 (Biểu diễn số nguyên):** Các số nguyên $7; -9; 0$ có thể viết dưới dạng phân số có mẫu bằng $1$ được không?
*Trả lời:* Hoàn toàn được: $7 = \dfrac{7}{1};$ $-9 = \dfrac{-9}{1};$ $0 = \dfrac{0}{1}.$

**Câu 4 (Nhận biết hai phân số bằng nhau):** Hai phân số $\dfrac{2}{3}$ và $\dfrac{6}{9}$ có biểu diễn cùng một lượng giá trị không? Vì sao?
*Trả lời:* Có, vì nếu ta chia một đoạn thẳng làm $3$ phần lấy $2$ phần, cũng chính bằng việc chia đoạn thẳng đó làm $9$ phần nhỏ rồi lấy $6$ phần nhỏ ($2 \times 3 = 6$ và $3 \times 3 = 9$).

---

## 1. Lý thuyết trọng tâm

### 1.1. Mở rộng khái niệm phân số

> [!NOTE]
> **Định nghĩa phân số:**
> Người ta gọi $\dfrac{a}{b}$ với $a, b \in \mathbb{Z}$ và $b \neq 0$ là một **phân số**, trong đó:
> - $a$ được gọi là **tử số** (hay gọi tắt là *tử*).
> - $b$ được gọi là **mẫu số** (hay gọi tắt là *mẫu*).

**Điểm mở rộng cốt lõi so với Tiểu học:**
1. Tử số $a$ và mẫu số $b$ hiện nay là các **số nguyên** (có thể mang dấu âm hoặc bằng $0$).
2. **Điều kiện bắt buộc duy nhất:** Mẫu số $b$ luôn luôn phải **khác $0$** ($b \neq 0$). Phép chia cho $0$ không có nghĩa, nên biểu thức có mẫu bằng $0$ không bao giờ là một phân số.
3. Mọi số nguyên $a$ đều có thể coi là một phân số với mẫu số bằng $1$:
   $$a = \dfrac{a}{1} \quad (a \in \mathbb{Z}).$$

*Bảng nhận diện phân số và cách viết không phải phân số:*

| Cách viết | Có phải phân số? | Giải thích chi tiết |
| :--- | :---: | :--- |
| $\dfrac{-5}{8}$ | **Có** | Tử số là $-5 \in \mathbb{Z},$ mẫu số là $8 \in \mathbb{Z}$ và $8 \neq 0.$ |
| $\dfrac{4}{-11}$ | **Có** | Tử số là $4 \in \mathbb{Z},$ mẫu số là $-11 \in \mathbb{Z}$ và $-11 \neq 0.$ |
| $\dfrac{0}{-7}$ | **Có** | Tử số là $0 \in \mathbb{Z},$ mẫu số là $-7 \neq 0$ (giá trị phân số bằng $0$). |
| $\dfrac{-13}{-6}$ | **Có** | Cả tử và mẫu đều là số nguyên âm, mẫu khác $0.$ |
| $\dfrac{9}{0}$ | **Không** | Mẫu số bằng $0$ (vi phạm điều kiện xác định). |
| $\dfrac{2{,}5}{7}$ | **Không** | Tử số $2{,}5 \notin \mathbb{Z}$ (đây là số thập phân, không phải số nguyên). |
| $\dfrac{\sqrt{3}}{5}$ | **Không** | Tử số không phải là số nguyên. |

---

### 1.2. Hai phân số bằng nhau và Quy tắc tích chéo

Làm thế nào để biết hai phân số bất kỳ $\dfrac{a}{b}$ và $\dfrac{c}{d}$ có bằng nhau hay không mà không cần vẽ hình hay tính ra số thập phân? Hãy sử dụng vũ khí lợi hại nhất: **Quy tắc tích chéo**!

> [!IMPORTANT]
> **Quy tắc hai phân số bằng nhau:**
> Hai phân số $\dfrac{a}{b}$ và $\dfrac{c}{d}$ được gọi là bằng nhau nếu:
> $$\dfrac{a}{b} = \dfrac{c}{d} \iff a \cdot d = b \cdot c.$$
> *(Tích của tử phân số này nhân mẫu phân số kia bằng tích của mẫu phân số này nhân tử phân số kia).*

**Vì sao quy tắc này luôn đúng?**
Khi ta quy đồng mẫu số hai phân số $\dfrac{a}{b}$ và $\dfrac{c}{d}$ về mẫu chung $b \cdot d$:
$$\dfrac{a}{b} = \dfrac{a \cdot d}{b \cdot d} \quad \text{và} \quad \dfrac{c}{d} = \dfrac{c \cdot b}{d \cdot b} = \dfrac{b \cdot c}{b \cdot d}.$$
Hai phân số có cùng mẫu số $b \cdot d$ muốn bằng nhau thì hai tử số phải bằng nhau, tức là $a \cdot d = b \cdot c.$

**Ví dụ minh họa:**
- Xét cặp $\dfrac{-3}{7}$ và $\dfrac{9}{-21}$:
  Ta có tích chéo thứ nhất: $(-3) \cdot (-21) = 63.$
  Tích chéo thứ hai: $7 \cdot 9 = 63.$
  Vì $(-3) \cdot (-21) = 7 \cdot 9 = 63$ nên $\dfrac{-3}{7} = \dfrac{9}{-21}.$
- Xét cặp $\dfrac{-4}{5}$ và $\dfrac{8}{10}$:
  Tích chéo thứ nhất: $(-4) \cdot 10 = -40.$
  Tích chéo thứ hai: $5 \cdot 8 = 40.$
  Vì $-40 \neq 40$ nên $\dfrac{-4}{5} \neq \dfrac{8}{10}.$

---

### 1.3. Tính chất cơ bản của phân số

Phân số có hai tính chất nền tảng cho phép biến đổi linh hoạt mà không làm thay đổi giá trị:

> [!NOTE]
> **Hai tính chất cơ bản:**
> 1. **Tính chất nhân:** Nếu nhân cả tử và mẫu của một phân số với cùng một số nguyên $m \neq 0$ thì ta được một phân số bằng phân số đã cho:
>    $$\dfrac{a}{b} = \dfrac{a \cdot m}{b \cdot m} \quad (m \in \mathbb{Z}, m \neq 0).$$
> 2. **Tính chất chia:** Nếu chia cả tử và mẫu của một phân số cho cùng một ước chung $n$ của chúng thì ta được một phân số bằng phân số đã cho:
>    $$\dfrac{a}{b} = \dfrac{a : n}{b : n} \quad (n \in \text{ƯC}(a, b)).$$

**Quy tắc đổi dấu — Chuẩn mực đưa về mẫu dương:**
Trong toán học, chúng ta luôn ưu tiên viết phân số dưới dạng **mẫu số dương** để thuận tiện cho việc so sánh, cộng trừ và biểu diễn trên trục số.
Áp dụng tính chất nhân với $m = -1$:
$$\dfrac{a}{-b} = \dfrac{a \cdot (-1)}{(-b) \cdot (-1)} = \dfrac{-a}{b}; \qquad \dfrac{-a}{-b} = \dfrac{(-a) \cdot (-1)}{(-b) \cdot (-1)} = \dfrac{a}{b}.$$

*Ví dụ:*
- $\dfrac{5}{-9} = \dfrac{-5}{9}.$
- $\dfrac{-7}{-12} = \dfrac{7}{12}.$
- $-\dfrac{2}{3} = \dfrac{-2}{3} = \dfrac{2}{-3}.$

---

### 1.4. Rút gọn phân số và Phân số tối giản

> [!TIP]
> **Rút gọn phân số:** là thao tác chia cả tử và mẫu của phân số cho một ước chung lớn hơn $1$ (hoặc khác $1$ và $-1$) của chúng để nhận được phân số đơn giản hơn nhưng có giá trị bằng phân số ban đầu.
>
> **Phân số tối giản:** Phân số $\dfrac{a}{b}$ được gọi là tối giản nếu tử và mẫu chỉ có ước chung là $1$ và $-1,$ nghĩa là:
> $$\text{ƯCLN}(|a|, |b|) = 1.$$

**Kỹ thuật rút gọn nhanh nhất chỉ trong 1 bước:**
Để đưa ngay phân số $\dfrac{a}{b}$ về phân số tối giản có mẫu dương:
1. Đưa dấu âm lên tử số nếu mẫu âm.
2. Tìm $\text{ƯCLN}(|a|, |b|).$
3. Chia cả tử và mẫu cho $\text{ƯCLN}$ vừa tìm được.

*Ví dụ:* Rút gọn phân số $\dfrac{36}{-84}$:
- Bước 1: Đưa về mẫu dương: $\dfrac{36}{-84} = \dfrac{-36}{84}.$
- Bước 2: Tìm $\text{ƯCLN}(36, 84)$:
  $36 = 2^2 \cdot 3^2;$ $84 = 2^2 \cdot 3 \cdot 7 \implies \text{ƯCLN}(36, 84) = 2^2 \cdot 3 = 12.$
- Bước 3: Chia cả tử và mẫu cho $12$:
  $$\dfrac{-36}{84} = \dfrac{(-36) : 12}{84 : 12} = \dfrac{-3}{7}.$$
  Phân số $\dfrac{-3}{7}$ là phân số tối giản.

---

### 1.5. Sơ đồ tư duy tổng hợp kiến thức Bài 23

Dưới đây là sơ đồ cấu trúc toàn bộ nội dung Bài 23 giúp các em nắm trọn mạch logic:

<div class="flowchart-container">
  <div class="flowchart-group" style="background: #eef2ff; border: 2px solid #6366f1; border-radius: 12px; padding: 18px; margin-bottom: 16px;">
    <h3 style="margin-top: 0; color: #4338ca; text-align: center; font-size: 1.15rem;">CẤU TRÚC BÀI HỌC: MỞ RỘNG PHÂN SỐ & PHÂN SỐ BẰNG NHAU</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 14px;">
      
      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #818cf8; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #4f46e5; font-size: 1rem;">1. Khái niệm phân số</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • Dạng tổng quát: $\dfrac{a}{b}$ với $a, b \in \mathbb{Z}$<br>
          • Điều kiện sống còn: $b \neq 0$<br>
          • Mọi số nguyên: $a = \dfrac{a}{1}$
        </p>
      </div>

      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #818cf8; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #4f46e5; font-size: 1rem;">2. Hai phân số bằng nhau</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • Quy tắc tích chéo:<br>
          $\dfrac{a}{b} = \dfrac{c}{d} \iff a \cdot d = b \cdot c$<br>
          • Ứng dụng: Kiểm tra bằng nhau, tìm ẩn số $x$
        </p>
      </div>

      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #818cf8; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #4f46e5; font-size: 1rem;">3. Tính chất cơ bản</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • Nhân cùng số $m \neq 0$: $\dfrac{a}{b} = \dfrac{a \cdot m}{b \cdot m}$<br>
          • Chia cùng ước $n$: $\dfrac{a}{b} = \dfrac{a : n}{b : n}$<br>
          • Đổi dấu mẫu âm: $\dfrac{a}{-b} = \dfrac{-a}{b}$
        </p>
      </div>

      <div class="flowchart-node" style="flex: 1 1 220px; background: #ffffff; border: 1.5px solid #818cf8; border-radius: 10px; padding: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 8px 0; color: #4f46e5; font-size: 1rem;">4. Rút gọn phân số</h4>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
          • Chia cả tử và mẫu cho $\text{ƯCLN}(|a|, |b|)$<br>
          • Đạt phân số tối giản khi tử và mẫu nguyên tố cùng nhau<br>
          • Luôn để mẫu dương
        </p>
      </div>

    </div>
  </div>
</div>

---

## 2. Các dạng toán thường gặp và phương pháp giải

### Dạng 1: Nhận biết phân số — Điều kiện để một biểu thức là phân số

**Phương pháp giải:**
1. Một biểu thức $\dfrac{A}{B}$ là phân số khi và chỉ khi cả tử số $A$ và mẫu số $B$ đều là các số nguyên và mẫu số $B$ khác $0$ ($B \neq 0$).
2. Với bài toán chứa biến $n$: Tìm $n \in \mathbb{Z}$ để mẫu số khác $0$ (tức giải điều kiện $B(n) \neq 0$).

---

**Ví dụ 1:** Trong các cách viết sau, cách viết nào cho ta một phân số?
$$\dfrac{-7}{15}; \quad \dfrac{0}{11}; \quad \dfrac{-8}{0}; \quad \dfrac{4{,}2}{-9}; \quad \dfrac{16}{-5}; \quad \dfrac{-3}{-4}.$$

**Lời giải:**
- $\dfrac{-7}{15}$ là phân số vì $-7 \in \mathbb{Z},$ $15 \in \mathbb{Z}$ và $15 \neq 0.$
- $\dfrac{0}{11}$ là phân số vì $0 \in \mathbb{Z},$ $11 \in \mathbb{Z}$ và $11 \neq 0.$
- $\dfrac{-8}{0}$ **không phải** là phân số vì mẫu số bằng $0.$
- $\dfrac{4{,}2}{-9}$ **không phải** là phân số vì tử số $4{,}2$ không phải số nguyên.
- $\dfrac{16}{-5}$ là phân số vì $16 \in \mathbb{Z},$ $-5 \in \mathbb{Z}$ và $-5 \neq 0.$
- $\dfrac{-3}{-4}$ là phân số vì $-3, -4 \in \mathbb{Z}$ và $-4 \neq 0.$

---

**Ví dụ 2:** Cho biểu thức $A = \dfrac{7}{n - 3}$ với $n \in \mathbb{Z}.$
a) Tìm điều kiện của số nguyên $n$ để $A$ là một phân số.
b) Tính giá trị của $A$ khi $n = 10;$ $n = -4;$ $n = 3.$

**Lời giải:**
a) Để biểu thức $A = \dfrac{7}{n - 3}$ là một phân số thì mẫu số phải khác $0$:
$$n - 3 \neq 0 \iff n \neq 3.$$
Vậy với mọi số nguyên $n \neq 3$ thì $A$ là một phân số.

b) Thay các giá trị của $n$:
- Với $n = 10$: Mẫu số là $10 - 3 = 7 \neq 0,$ ta có $A = \dfrac{7}{7} = 1.$
- Với $n = -4$: Mẫu số là $-4 - 3 = -7 \neq 0,$ ta có $A = \dfrac{7}{-7} = -1.$
- Với $n = 3$: Mẫu số bằng $3 - 3 = 0,$ do đó tại $n = 3$ biểu thức $A$ không xác định (không có giá trị).

---

### Dạng 2: Kiểm tra hai phân số bằng nhau — Lập phân số bằng nhau

**Phương pháp giải:**
1. Để kiểm tra $\dfrac{a}{b}$ và $\dfrac{c}{d}$ có bằng nhau không:
   - Tính tích $a \cdot d$ và tích $b \cdot c.$
   - Nếu $a \cdot d = b \cdot c$ thì $\dfrac{a}{b} = \dfrac{c}{d}.$
   - Nếu $a \cdot d \neq b \cdot c$ thì $\dfrac{a}{b} \neq \dfrac{c}{d}.$
2. Từ đẳng thức tích $a \cdot d = b \cdot c$ ($a, b, c, d \neq 0$), ta có thể lập được $4$ cặp phân số bằng nhau:
   $$\dfrac{a}{b} = \dfrac{c}{d}; \qquad \dfrac{a}{c} = \dfrac{b}{d}; \qquad \dfrac{d}{b} = \dfrac{c}{a}; \qquad \dfrac{d}{c} = \dfrac{b}{a}.$$

---

**Ví dụ 3:** Các cặp phân số sau có bằng nhau không? Vì sao?
a) $\dfrac{-4}{9}$ và $\dfrac{12}{-27}.$
b) $\dfrac{-5}{8}$ và $\dfrac{15}{24}.$
c) $\dfrac{-7}{-10}$ và $\dfrac{21}{30}.$

**Lời giải:**
a) Xét tích chéo:
$(-4) \cdot (-27) = 108;$
$9 \cdot 12 = 108.$
Vì $(-4) \cdot (-27) = 9 \cdot 12 = 108$ nên $\dfrac{-4}{9} = \dfrac{12}{-27}.$

b) Xét tích chéo:
$(-5) \cdot 24 = -120;$
$8 \cdot 15 = 120.$
Vì $-120 \neq 120$ nên $\dfrac{-5}{8} \neq \dfrac{15}{24}.$

c) Xét tích chéo:
$(-7) \cdot 30 = -210;$
$(-10) \cdot 21 = -210.$
Vì $(-7) \cdot 30 = (-10) \cdot 21 = -210$ nên $\dfrac{-7}{-10} = \dfrac{21}{30}.$

---

**Ví dụ 4:** Từ đẳng thức $(-6) \cdot 20 = 15 \cdot (-8)$ (cùng bằng $-120$), hãy viết ra $4$ cặp phân số bằng nhau.

**Lời giải:**
Bốn cặp phân số bằng nhau được tạo thành là:
1. $\dfrac{-6}{15} = \dfrac{-8}{20}.$
2. $\dfrac{-6}{-8} = \dfrac{15}{20}.$
3. $\dfrac{20}{15} = \dfrac{-8}{-6}.$
4. $\dfrac{20}{-8} = \dfrac{15}{-6}.$

---

### Dạng 3: Tìm số nguyên $x$ chưa biết trong đẳng thức phân số

**Phương pháp giải:**
1. Áp dụng quy tắc tích chéo: $\dfrac{a}{b} = \dfrac{c}{d} \implies a \cdot d = b \cdot c.$
2. Tìm thừa số chưa biết: $x = \dfrac{b \cdot c}{a}$ hoặc giải phương trình bậc nhất tìm $x.$
3. Lưu ý nhân chia số nguyên đúng dấu. Nếu xuất hiện $x^2 = k^2$ thì $x = k$ hoặc $x = -k.$

---

**Ví dụ 5:** Tìm số nguyên $x,$ biết:
a) $\dfrac{x}{15} = \dfrac{-8}{20}.$
b) $\dfrac{-14}{x} = \dfrac{21}{-6}.$
c) $\dfrac{x - 2}{18} = \dfrac{-5}{30}.$
d) $\dfrac{x}{4} = \dfrac{25}{x}.$

**Lời giải:**
a) Áp dụng quy tắc tích chéo:
$$x \cdot 20 = 15 \cdot (-8)$$
$$x \cdot 20 = -120$$
$$x = (-120) : 20 = -6.$$
Vậy $x = -6.$

b) Điều kiện: $x \neq 0.$ Áp dụng quy tắc tích chéo:
$$x \cdot 21 = (-14) \cdot (-6)$$
$$x \cdot 21 = 84$$
$$x = 84 : 21 = 4.$$
Vậy $x = 4.$

c) Áp dụng quy tắc tích chéo:
$$(x - 2) \cdot 30 = 18 \cdot (-5)$$
$$(x - 2) \cdot 30 = -90$$
$$x - 2 = (-90) : 30$$
$$x - 2 = -3$$
$$x = -3 + 2 = -1.$$
Vậy $x = -1.$

d) Điều kiện: $x \neq 0.$ Áp dụng tích chéo:
$$x \cdot x = 4 \cdot 25$$
$$x^2 = 100.$$
Vì $100 = 10^2 = (-10)^2$ nên $x = 10$ hoặc $x = -10.$
Vậy $x \in \{10; -10\}.$

---

### Dạng 4: Rút gọn phân số về phân số tối giản có mẫu dương

**Phương pháp giải:**
1. Đưa dấu âm về tử số nếu mẫu âm: $\dfrac{a}{-b} = \dfrac{-a}{b}.$
2. Tìm $\text{ƯCLN}(|a|, |b|).$
3. Chia cả tử và mẫu cho ước chung lớn nhất đó.
4. Với phân số chứa phép tính lũy thừa hoặc nhân tử: Phân tích tử và mẫu thành nhân tử chung rồi triệt tiêu.

---

**Ví dụ 6:** Rút gọn các phân số sau về phân số tối giản có mẫu dương:
a) $\dfrac{-42}{70}.$
b) $\dfrac{54}{-90}.$
c) $\dfrac{-48}{-108}.$
d) $\dfrac{2^3 \cdot 5^2 - 2^3 \cdot 5}{2^4 \cdot 15}.$

**Lời giải:**
a) Ta có $\text{ƯCLN}(42, 70) = 14.$ Chia cả tử và mẫu cho $14$:
$$\dfrac{-42}{70} = \dfrac{(-42) : 14}{70 : 14} = \dfrac{-3}{5}.$$

b) Đưa dấu âm lên tử: $\dfrac{54}{-90} = \dfrac{-54}{90}.$
Ta có $\text{ƯCLN}(54, 90) = 18.$ Chia cả tử và mẫu cho $18$:
$$\dfrac{-54}{90} = \dfrac{(-54) : 18}{90 : 18} = \dfrac{-3}{5}.$$

c) Chia cả tử và mẫu cho $-1$ để đưa về số dương: $\dfrac{-48}{-108} = \dfrac{48}{108}.$
Ta có $\text{ƯCLN}(48, 108) = 12.$ Chia cả tử và mẫu cho $12$:
$$\dfrac{48}{108} = \dfrac{48 : 12}{108 : 12} = \dfrac{4}{9}.$$

d) Phân tích tử và mẫu thành tích các thừa số:
- Tử số: $2^3 \cdot 5^2 - 2^3 \cdot 5 = 2^3 \cdot 5 \cdot (5 - 1) = 8 \cdot 5 \cdot 4 = 160.$
- Mẫu số: $2^4 \cdot 15 = 16 \cdot 15 = 240.$
Rút gọn bằng cách triệt tiêu nhân tử chung:
$$\dfrac{2^3 \cdot 5 \cdot 4}{2^4 \cdot 3 \cdot 5} = \dfrac{2^5 \cdot 5}{2^4 \cdot 3 \cdot 5} = \dfrac{2}{3}.$$

---

### Dạng 5: Bài toán thực tế — Thiết lập phân số phần/toàn thể và rút gọn

**Phương pháp giải:**
1. **Bước 1:** Xác định đại lượng "toàn thể" (làm mẫu số) và "bộ phận được xét" (làm tử số).
2. **Bước 2:** Đưa cả hai đại lượng về cùng một đơn vị đo lường.
3. **Bước 3:** Lập phân số $\dfrac{\text{Bộ phận}}{\text{Toàn thể}}$ rồi rút gọn về phân số tối giản.

---

**Ví dụ 7 (Thời gian):** Một tiết học kéo dài $45$ phút. Thầy giáo giảng bài mới trong $20$ phút, thời gian còn lại dành cho học sinh thảo luận nhóm và làm bài tập.
a) Thời gian giảng bài mới chiếm mấy phần của một tiết học?
b) Thời gian học sinh thảo luận nhóm chiếm mấy phần của một giờ ($60$ phút)?

**Lời giải:**
a) Toàn bộ tiết học là $45$ phút. Thời gian giảng bài mới là $20$ phút.
Phân số chỉ thời gian giảng bài mới so với một tiết học là:
$$\dfrac{20}{45} = \dfrac{20 : 5}{45 : 5} = \dfrac{4}{9}.$$
Như vậy, thời gian giảng bài mới chiếm $\dfrac{4}{9}$ tiết học.

b) Thời gian học sinh thảo luận nhóm là:
$$45 - 20 = 25 \text{ (phút)}.$$
Một giờ có $60$ phút. Phân số chỉ thời gian thảo luận so với một giờ là:
$$\dfrac{25}{60} = \dfrac{25 : 5}{60 : 5} = \dfrac{5}{12}.$$
Như vậy, thời gian thảo luận chiếm $\dfrac{5}{12}$ giờ.

---

**Ví dụ 8 (Kinh tế gia đình):** Thu nhập hằng tháng của gia đình bác Hưng là $24\,000\,000$ đồng. Trong tháng vừa qua, gia đình chi tiêu $9\,600\,000$ đồng cho tiền ăn uống, $4\,800\,000$ đồng cho tiền học phí của hai con, phần còn lại dành cho các chi phí khác và tiết kiệm.
a) Số tiền ăn uống chiếm bao nhiêu phần tổng thu nhập?
b) Số tiền dành cho chi phí khác và tiết kiệm chiếm bao nhiêu phần tổng thu nhập?

**Lời giải:**
a) Số tiền ăn uống chiếm số phần tổng thu nhập là:
$$\dfrac{9\,600\,000}{24\,000\,000} = \dfrac{96}{240} = \dfrac{96 : 48}{240 : 48} = \dfrac{2}{5}.$$
Như vậy, tiền ăn uống chiếm $\dfrac{2}{5}$ tổng thu nhập.

b) Tổng số tiền ăn uống và học phí là:
$$9\,600\,000 + 4\,800\,000 = 14\,400\,000 \text{ (đồng)}.$$
Số tiền dành cho chi phí khác và tiết kiệm là:
$$24\,000\,000 - 14\,400\,000 = 9\,600\,000 \text{ (đồng)}.$$
Phần tiền tiết kiệm và chi phí khác chiếm số phần tổng thu nhập là:
$$\dfrac{9\,600\,000}{24\,000\,000} = \dfrac{2}{5}.$$
Như vậy, chi phí khác và tiết kiệm chiếm $\dfrac{2}{5}$ tổng thu nhập.

---

## 3. Chuyên đề nâng cao & Bồi dưỡng Học sinh giỏi

### Chuyên đề 1: Tìm số nguyên $n$ để phân số nhận giá trị nguyên

> [!TIP]
> **Phương pháp cốt lõi:**
> Để phân số $\dfrac{A(n)}{B(n)}$ nhận giá trị nguyên với $n \in \mathbb{Z}$:
> 1. Tách tử số theo mẫu số: $A(n) = k \cdot B(n) + r,$ trong đó $r$ là một số nguyên không chứa $n.$
> 2. Khi đó: $\dfrac{A(n)}{B(n)} = k + \dfrac{r}{B(n)}.$
> 3. Để biểu thức nguyên thì $\dfrac{r}{B(n)} \in \mathbb{Z} \iff B(n) \in \text{Ư}(r).$
> 4. Lập bảng xét từng ước số nguyên của $r$ để tìm $n.$

**Bài toán HSG 1:** Tìm tất cả các số nguyên $n$ để phân số sau nhận giá trị nguyên:
$$P = \dfrac{3n + 8}{n + 1}.$$

**Lời giải chi tiết:**
Điều kiện xác định: $n + 1 \neq 0 \iff n \neq -1.$
Biến đổi tử số xuất hiện mẫu số $n + 1$:
$$3n + 8 = 3(n + 1) - 3 + 8 = 3(n + 1) + 5.$$
Do đó:
$$P = \dfrac{3(n + 1) + 5}{n + 1} = \dfrac{3(n + 1)}{n + 1} + \dfrac{5}{n + 1} = 3 + \dfrac{5}{n + 1}.$$
Để $P$ nhận giá trị nguyên thì $\dfrac{5}{n + 1}$ phải là số nguyên, tức là $n + 1$ là ước của $5$:
$$n + 1 \in \text{Ư}(5) = \{1; -1; 5; -5\}.$$
Ta lập bảng giá trị:

| $n + 1$ | $1$ | $-1$ | $5$ | $-5$ |
| :---: | :---: | :---: | :---: | :---: |
| $n$ | $0$ | $-2$ | $4$ | $-6$ |
| Thỏa mãn ĐK? | Nhận | Nhận | Nhận | Nhận |

Vậy các số nguyên $n$ thỏa mãn yêu cầu là $n \in \{-6; -2; 0; 4\}.$

---

### Chuyên đề 2: Chứng minh phân số tối giản với mọi số tự nhiên $n$

> [!TIP]
> **Phương pháp chứng minh phân số $\dfrac{A(n)}{B(n)}$ tối giản:**
> 1. Gọi $d = \text{ƯCLN}(A(n), B(n))$ ($d \in \mathbb{N}^*$).
> 2. Suy ra $A(n) \;\vdots\; d$ và $B(n) \;\vdots\; d.$
> 3. Nhân hệ số thích hợp vào hai biểu thức rồi trừ đi để triệt tiêu biến $n$:
>    Tìm $p, q$ sao cho $p \cdot A(n) - q \cdot B(n) = C$ ($C$ là hằng số nguyên).
> 4. Suy ra $C \;\vdots\; d \implies d \in \text{Ư}(C).$
> 5. Nếu $C = 1$ hoặc $C = -1$ thì $d = 1,$ kết luận phân số luôn tối giản.

**Bài toán HSG 2:** Chứng minh rằng với mọi số tự nhiên $n,$ phân số sau luôn là phân số tối giản:
$$Q = \dfrac{3n + 2}{5n + 3}.$$

**Lời giải chi tiết:**
Gọi $d = \text{ƯCLN}(3n + 2, 5n + 3)$ với $d \in \mathbb{N}^*.$
Theo định nghĩa ước chung lớn nhất, ta có:
$$\begin{cases} 3n + 2 \;\vdots\; d \\ 5n + 3 \;\vdots\; d \end{cases}$$
Suy ra:
$$\begin{cases} 5 \cdot (3n + 2) \;\vdots\; d \\ 3 \cdot (5n + 3) \;\vdots\; d \end{cases} \implies \begin{cases} 15n + 10 \;\vdots\; d \\ 15n + 9 \;\vdots\; d \end{cases}$$
Do đó, hiệu của hai số cũng phải chia hết cho $d$:
$$(15n + 10) - (15n + 9) \;\vdots\; d$$
$$1 \;\vdots\; d.$$
Vì $d \in \mathbb{N}^*$ và $1 \;\vdots\; d$ nên bắt buộc $d = 1.$
Vì tử và mẫu có ước chung lớn nhất bằng $1$ nên phân số $Q = \dfrac{3n + 2}{5n + 3}$ luôn là phân số tối giản với mọi số tự nhiên $n.$ (Đpcm).

---

### Chuyên đề 3: Bài toán tìm phân số khi thay đổi tử và mẫu

**Bài toán HSG 3:** Cho phân số $\dfrac{23}{38}.$ Tìm số tự nhiên $k$ sao cho khi thêm $k$ vào cả tử số và mẫu số của phân số đã cho thì ta được một phân số mới bằng $\dfrac{3}{4}.$

**Lời giải chi tiết:**
Khi thêm số tự nhiên $k$ vào cả tử và mẫu, phân số mới là:
$$\dfrac{23 + k}{38 + k}.$$
Theo đề bài, phân số mới bằng $\dfrac{3}{4},$ do đó ta có đẳng thức:
$$\dfrac{23 + k}{38 + k} = \dfrac{3}{4}.$$
Áp dụng quy tắc tích chéo:
$$4 \cdot (23 + k) = 3 \cdot (38 + k)$$
$$92 + 4k = 114 + 3k$$
Chuyển vế đổi dấu:
$$4k - 3k = 114 - 92$$
$$k = 22.$$
*Thử lại:* $\dfrac{23 + 22}{38 + 22} = \dfrac{45}{60} = \dfrac{3}{4}$ (đúng hoàn toàn).
Vậy số tự nhiên cần tìm là $k = 22.$

---

### Chuyên đề 4: Tìm phân số tối giản thỏa mãn điều kiện lũy thừa / tích số

**Bài toán HSG 4:** Tìm phân số tối giản $\dfrac{a}{b}$ ($a, b \in \mathbb{N}^*, b \neq 0$), biết rằng phân số này có giá trị bằng $\dfrac{4}{7}$ và tích của tử số và mẫu số là $700.$

**Lời giải chi tiết:**
Vì phân số bằng $\dfrac{4}{7}$ nên ta có thể biểu diễn $a$ và $b$ theo cùng một tham số $k \in \mathbb{N}^*$:
$$a = 4k \quad \text{và} \quad b = 7k.$$
Mặt khác, tích của tử số và mẫu số bằng $700$:
$$a \cdot b = 700$$
$$(4k) \cdot (7k) = 700$$
$$28 \cdot k^2 = 700$$
$$k^2 = 700 : 28 = 25.$$
Vì $k \in \mathbb{N}^*$ nên $k = 5.$
Từ đó ta tính được:
$$a = 4 \cdot 5 = 20; \qquad b = 7 \cdot 5 = 35.$$
Phân số cần tìm ban đầu có tử và mẫu là $20$ và $35.$
Đề bài yêu cầu tìm **phân số tối giản**, mà $\dfrac{20}{35}$ rút gọn chính là $\dfrac{4}{7}.$
Vậy phân số tối giản cần tìm là $\dfrac{4}{7}.$

---

### Chuyên đề 5: Dãy phân số quy luật Fibonacci và tính nguyên tố cùng nhau

**Bài toán HSG 5:** Xét dãy các phân số sau:
$$u_1 = \dfrac{1}{2}; \quad u_2 = \dfrac{2}{3}; \quad u_3 = \dfrac{3}{5}; \quad u_4 = \dfrac{5}{8}; \quad u_5 = \dfrac{8}{13}; \quad \dots$$
a) Hãy phát hiện quy luật và viết tiếp hai phân số kế tiếp $u_6$ và $u_7.$
b) Chứng minh rằng tất cả các phân số trong dãy trên đều là phân số tối giản.

**Lời giải chi tiết:**
a) Quan sát các số hạng của dãy:
- Tử số của $u_1, u_2, u_3, u_4, u_5$ lần lượt là: $1; 2; 3; 5; 8.$
- Mẫu số tương ứng là: $2; 3; 5; 8; 13.$
Nhận xét: Mẫu số của phân số đứng trước chính là tử số của phân số liền sau. Đồng thời, mẫu số của mỗi phân số bằng tổng của tử số và mẫu số của phân số liền trước nó (hoặc dãy các số $1, 2, 3, 5, 8, 13, \dots$ chính là dãy số Fibonacci bắt đầu từ $F_2 = 1, F_3 = 2$).
Cụ thể:
- Phân số $u_6$ có tử số là $13,$ mẫu số là $8 + 13 = 21,$ tức là $u_6 = \dfrac{13}{21}.$
- Phân số $u_7$ có tử số là $21,$ mẫu số là $13 + 21 = 34,$ tức là $u_7 = \dfrac{21}{34}.$

b) Ta chứng minh tổng quát: Nếu hai số liên tiếp trong dãy Fibonacci là $F_n$ và $F_{n+1}$ thì phân số $\dfrac{F_n}{F_{n+1}}$ luôn tối giản.
Thật vậy, giả sử $d = \text{ƯCLN}(F_n, F_{n+1}).$
Vì theo quy luật hình thành dãy Fibonacci: $F_{n+1} = F_n + F_{n-1} \implies F_{n-1} = F_{n+1} - F_n.$
Do $F_{n+1} \;\vdots\; d$ và $F_n \;\vdots\; d$ nên hiệu của chúng cũng chia hết cho $d$:
$$F_{n-1} \;\vdots\; d.$$
Lặp lại liên tiếp quá trình này lùi về đầu dãy, ta suy ra:
$$d \text{ chia hết cho } F_2 \text{ và } F_1.$$
Mà $F_1 = 1,$ do đó $1 \;\vdots\; d \implies d = 1.$
Vì $\text{ƯCLN}(F_n, F_{n+1}) = 1$ nên mọi phân số trong dãy đều là phân số tối giản.

---

## 4. Trắc nghiệm tương tác kiểm tra độ hiểu bài

```quiz
type: choice
question: 'Trong các cách viết sau, cách viết nào KHÔNG PHẢI là một phân số?'
options:
  - '$\dfrac{-3}{8}$'
  - '$\dfrac{0}{-5}$'
  - '$\dfrac{17}{0}$'
  - '$\dfrac{-9}{-14}$'
answer: 3
explanation: 'Phân số có dạng $\dfrac{a}{b}$ với $a, b \in \mathbb{Z}$ và $b \neq 0$. Biểu thức $\dfrac{17}{0}$ có mẫu số bằng $0$ nên không phải là phân số.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là ĐÚNG về điều kiện để hai phân số $\dfrac{a}{b}$ và $\dfrac{c}{d}$ bằng nhau?'
options:
  - '$a \cdot c = b \cdot d$'
  - '$a \cdot d = b \cdot c$'
  - '$a + d = b + c$'
  - '$a - d = b - c$'
answer: 2
explanation: 'Theo quy tắc tích chéo, hai phân số $\dfrac{a}{b}$ và $\dfrac{c}{d}$ bằng nhau khi và chỉ khi tích chéo bằng nhau: $a \cdot d = b \cdot c$.'
```

```quiz
type: choice
question: 'Cặp phân số nào sau đây bằng nhau?'
options:
  - '$\dfrac{-3}{5}$ và $\dfrac{9}{15}$'
  - '$\dfrac{4}{-7}$ và $\dfrac{-12}{21}$'
  - '$\dfrac{-2}{-3}$ và $\dfrac{-6}{9}$'
  - '$\dfrac{5}{6}$ và $\dfrac{6}{7}$'
answer: 2
explanation: 'Xét cặp $\dfrac{4}{-7}$ và $\dfrac{-12}{21}$: Tích chéo $4 \cdot 21 = 84$ và $(-7) \cdot (-12) = 84$. Hai tích bằng nhau nên hai phân số này bằng nhau.'
```

```quiz
type: choice
question: 'Tìm số nguyên $x$ biết $\dfrac{x}{12} = \dfrac{-5}{15}$.'
options:
  - '$x = -4$'
  - '$x = 4$'
  - '$x = -6$'
  - '$x = -3$'
answer: 1
explanation: 'Ta có tích chéo $x \cdot 15 = 12 \cdot (-5) = -60$, suy ra $x = (-60) : 15 = -4$.'
```

```quiz
type: choice
question: 'Rút gọn phân số $\dfrac{-36}{48}$ về phân số tối giản có mẫu dương, ta được kết quả là:'
options:
  - '$\dfrac{-6}{8}$'
  - '$\dfrac{3}{-4}$'
  - '$\dfrac{-3}{4}$'
  - '$\dfrac{-9}{12}$'
answer: 3
explanation: 'ƯCLN của $36$ và $48$ là $12$. Chia cả tử và mẫu cho $12$, ta được $\dfrac{-36 : 12}{48 : 12} = \dfrac{-3}{4}$. Phân số này tối giản và có mẫu dương.'
```

```quiz
type: choice
question: 'Cho phân số $P = \dfrac{5}{n - 2}$ với $n \in \mathbb{Z}$. Điều kiện của $n$ để $P$ là một phân số là:'
options:
  - '$n = 2$'
  - '$n \neq 2$'
  - '$n > 2$'
  - '$n \neq 0$'
answer: 2
explanation: 'Để $P$ là phân số thì mẫu số phải khác $0$, tức là $n - 2 \neq 0 \iff n \neq 2$.'
```

```quiz
type: choice
question: 'Viết số đo thời gian $24$ phút dưới dạng phân số tối giản của giờ:'
options:
  - '$\dfrac{2}{5}$ giờ'
  - '$\dfrac{4}{10}$ giờ'
  - '$\dfrac{1}{3}$ giờ'
  - '$\dfrac{3}{5}$ giờ'
answer: 1
explanation: 'Một giờ có $60$ phút, vậy $24$ phút ứng với $\dfrac{24}{60} = \dfrac{24 : 12}{60 : 12} = \dfrac{2}{5}$ giờ.'
```

```quiz
type: choice
question: 'Tìm số nguyên âm $x$ thỏa mãn $\dfrac{x}{3} = \dfrac{27}{x}$.'
options:
  - '$x = 9$'
  - '$x = -9$'
  - '$x = -3$'
  - '$x = -81$'
answer: 2
explanation: 'Áp dụng tích chéo: $x^2 = 3 \cdot 27 = 81 \implies x = 9$ hoặc $x = -9$. Vì đề bài yêu cầu số nguyên âm nên ta chọn $x = -9$.'
```

```quiz
type: choice
question: 'Phân số nào sau đây đã là phân số tối giản?'
options:
  - '$\dfrac{15}{25}$'
  - '$\dfrac{-14}{35}$'
  - '$\dfrac{-8}{21}$'
  - '$\dfrac{27}{51}$'
answer: 3
explanation: 'Xét $\dfrac{-8}{21}$: Tử số có các ước nguyên tố là $2$, mẫu số có ước nguyên tố là $3$ và $7$. $\text{ƯCLN}(8, 21) = 1$ nên phân số này tối giản.'
```

```quiz
type: choice
question: 'Có bao nhiêu số nguyên $n$ để phân số $\dfrac{6}{n + 1}$ nhận giá trị nguyên?'
options:
  - '$4$'
  - '$6$'
  - '$8$'
  - '$12$'
answer: 3
explanation: 'Để phân số nguyên thì $n + 1 \in \text{Ư}(6) = \{1; -1; 2; -2; 3; -3; 6; -6\}$. Có tất cả $8$ ước số nguyên, mỗi ước cho một giá trị $n$ phân biệt. Vậy có $8$ số nguyên $n$.'
```

---

## 5. Phiếu bài tập tự luyện và lời giải chi tiết

### Phần 1: Mức độ Nhận biết — Thông hiểu

**Bài 1:** Trong các cách viết sau, cách viết nào là phân số? Chỉ rõ tử số và mẫu số của mỗi phân số:
$$\dfrac{8}{-13}; \quad \dfrac{-5}{0}; \quad \dfrac{0}{-9}; \quad \dfrac{3{,}8}{7}; \quad \dfrac{-11}{-17}; \quad \dfrac{15}{1}.$$

**Bài 2:** Viết các số nguyên sau dưới dạng phân số có mẫu số bằng $1$:
$$18; \quad -25; \quad 0; \quad -1; \quad 2026.$$

**Bài 3:** Kiểm tra xem mỗi cặp phân số sau có bằng nhau hay không bằng quy tắc tích chéo:
a) $\dfrac{5}{8}$ và $\dfrac{20}{32}.$
b) $\dfrac{-3}{7}$ và $\dfrac{9}{-21}.$
c) $\dfrac{-6}{11}$ và $\dfrac{18}{33}.$
d) $\dfrac{-8}{-10}$ và $\dfrac{12}{15}.$

**Bài 4:** Đưa các phân số sau về dạng phân số có mẫu dương:
$$\dfrac{3}{-7}; \quad \dfrac{-5}{-11}; \quad \dfrac{14}{-25}; \quad \dfrac{-1}{-4}.$$

---

### Phần 2: Mức độ Vận dụng

**Bài 5:** Tìm số nguyên $x,$ biết:
a) $\dfrac{x}{8} = \dfrac{-15}{24}.$
b) $\dfrac{12}{x} = \dfrac{-18}{27}.$
c) $\dfrac{x - 3}{20} = \dfrac{-2}{5}.$
d) $\dfrac{4}{x - 1} = \dfrac{x - 1}{9}.$

**Bài 6:** Rút gọn các phân số sau về phân số tối giản có mẫu dương:
a) $\dfrac{-45}{105}.$
b) $\dfrac{72}{-120}.$
c) $\dfrac{-56}{-84}.$
d) $\dfrac{3^3 \cdot 7^2 - 3^3 \cdot 7}{3^4 \cdot 14}.$

**Bài 7:** Đổi các đại lượng sau ra đơn vị giờ dưới dạng phân số tối giản:
a) $15$ phút.
b) $36$ phút.
c) $48$ phút.
d) $1$ giờ $20$ phút.

**Bài 8:** Một mảnh đất hình chữ nhật có chiều dài $24\text{ m},$ chiều rộng $15\text{ m}.$ Người ta dành $90\text{ m}^2$ để xây nhà, phần diện tích còn lại làm sân vườn trồng cây.
a) Diện tích làm nhà chiếm mấy phần tổng diện tích mảnh đất?
b) Diện tích làm sân vườn chiếm mấy phần tổng diện tích mảnh đất?

---

### Phần 3: Mức độ Vận dụng cao & Học sinh giỏi

**Bài 9:** Cho biểu thức $B = \dfrac{n + 7}{n - 2}$ với $n \in \mathbb{Z}.$
a) Tìm điều kiện của $n$ để $B$ là một phân số.
b) Tìm các số nguyên $n$ để $B$ nhận giá trị nguyên.

**Bài 10:** Chứng minh rằng với mọi số tự nhiên $n,$ phân số sau luôn là phân số tối giản:
$$P = \dfrac{2n + 5}{3n + 7}.$$

**Bài 11:** Cho phân số $\dfrac{17}{35}.$ Tìm số nguyên $m$ sao cho khi lấy tử số trừ đi $m$ và mẫu số cộng thêm $m$ thì được một phân số mới có giá trị bằng $\dfrac{1}{3}.$

**Bài 12:** Tìm tất cả các cặp số nguyên $(x; y)$ thỏa mãn đẳng thức:
$$\dfrac{x}{3} - \dfrac{1}{y} = \dfrac{1}{6}.$$

---

### Lời giải chi tiết phiếu bài tập tự luyện

#### Lời giải Bài 1:
- Các cách viết là phân số:
  + $\dfrac{8}{-13}$: tử số $8,$ mẫu số $-13.$
  + $\dfrac{0}{-9}$: tử số $0,$ mẫu số $-9.$
  + $\dfrac{-11}{-17}$: tử số $-11,$ mẫu số $-17.$
  + $\dfrac{15}{1}$: tử số $15,$ mẫu số $1.$
- Các cách viết không phải phân số:
  + $\dfrac{-5}{0}$ vì mẫu số bằng $0.$
  + $\dfrac{3{,}8}{7}$ vì tử số $3{,}8$ không phải là số nguyên.

#### Lời giải Bài 2:
$$18 = \dfrac{18}{1}; \quad -25 = \dfrac{-25}{1}; \quad 0 = \dfrac{0}{1}; \quad -1 = \dfrac{-1}{1}; \quad 2026 = \dfrac{2026}{1}.$$

#### Lời giải Bài 3:
a) $5 \cdot 32 = 160 = 8 \cdot 20 \implies \dfrac{5}{8} = \dfrac{20}{32}.$
b) $(-3) \cdot (-21) = 63 = 7 \cdot 9 \implies \dfrac{-3}{7} = \dfrac{9}{-21}.$
c) $(-6) \cdot 33 = -198$ còn $11 \cdot 18 = 198 \neq -198 \implies \dfrac{-6}{11} \neq \dfrac{18}{33}.$
d) $(-8) \cdot 15 = -120$ và $(-10) \cdot 12 = -120 \implies \dfrac{-8}{-10} = \dfrac{12}{15}.$

#### Lời giải Bài 4:
$$\dfrac{3}{-7} = \dfrac{-3}{7}; \quad \dfrac{-5}{-11} = \dfrac{5}{11}; \quad \dfrac{14}{-25} = \dfrac{-14}{25}; \quad \dfrac{-1}{-4} = \dfrac{1}{4}.$$

#### Lời giải Bài 5:
a) $x \cdot 24 = 8 \cdot (-15) = -120 \implies x = -120 : 24 = -5.$
b) $x \cdot (-18) = 12 \cdot 27 = 324 \implies x = 324 : (-18) = -18.$
c) $(x - 3) \cdot 5 = 20 \cdot (-2) = -40 \implies x - 3 = -40 : 5 = -8 \implies x = -8 + 3 = -5.$
d) Điều kiện $x \neq 1.$
$(x - 1) \cdot (x - 1) = 4 \cdot 9 \implies (x - 1)^2 = 36.$
Trường hợp 1: $x - 1 = 6 \implies x = 7.$
Trường hợp 2: $x - 1 = -6 \implies x = -5.$
Vậy $x \in \{7; -5\}.$

#### Lời giải Bài 6:
a) $\text{ƯCLN}(45, 105) = 15 \implies \dfrac{-45}{105} = \dfrac{-45 : 15}{105 : 15} = \dfrac{-3}{7}.$
b) $\dfrac{72}{-120} = \dfrac{-72}{120}.$ Ta có $\text{ƯCLN}(72, 120) = 24 \implies \dfrac{-72 : 24}{120 : 24} = \dfrac{-3}{5}.$
c) $\dfrac{-56}{-84} = \dfrac{56}{84}.$ Ta có $\text{ƯCLN}(56, 84) = 28 \implies \dfrac{56 : 28}{84 : 28} = \dfrac{2}{3}.$
d) Tử số: $3^3 \cdot 7 \cdot (7 - 1) = 27 \cdot 7 \cdot 6 = 1134.$
Mẫu số: $3^4 \cdot 14 = 81 \cdot 14 = 1134.$
Vậy $\dfrac{3^3 \cdot 7 \cdot 6}{3^4 \cdot 14} = \dfrac{3^3 \cdot 7 \cdot 6}{3^3 \cdot 3 \cdot 2 \cdot 7} = \dfrac{6}{6} = 1.$

#### Lời giải Bài 7:
a) $15$ phút $= \dfrac{15}{60} = \dfrac{1}{4}$ giờ.
b) $36$ phút $= \dfrac{36}{60} = \dfrac{3}{5}$ giờ.
c) $48$ phút $= \dfrac{48}{60} = \dfrac{4}{5}$ giờ.
d) $1$ giờ $20$ phút $= 80$ phút $= \dfrac{80}{60} = \dfrac{4}{3}$ giờ.

#### Lời giải Bài 8:
Tổng diện tích mảnh đất là:
$$S = 24 \cdot 15 = 360\text{ m}^2.$$
a) Diện tích làm nhà chiếm số phần tổng diện tích là:
$$\dfrac{90}{360} = \dfrac{90 : 90}{360 : 90} = \dfrac{1}{4}.$$
b) Diện tích làm sân vườn là:
$$360 - 90 = 270\text{ m}^2.$$
Diện tích sân vườn chiếm số phần tổng diện tích là:
$$\dfrac{270}{360} = \dfrac{270 : 90}{360 : 90} = \dfrac{3}{4}.$$

#### Lời giải Bài 9:
a) Để $B$ là phân số thì $n - 2 \neq 0 \iff n \neq 2.$
b) Ta biến đổi:
$$B = \dfrac{n + 7}{n - 2} = \dfrac{(n - 2) + 9}{n - 2} = 1 + \dfrac{9}{n - 2}.$$
Để $B$ nhận giá trị nguyên thì $n - 2 \in \text{Ư}(9) = \{1; -1; 3; -3; 9; -9\}.$
Ta lập bảng:

| $n - 2$ | $1$ | $-1$ | $3$ | $-3$ | $9$ | $-9$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $n$ | $3$ | $1$ | $5$ | $-1$ | $11$ | $-7$ |

Tất cả các giá trị trên đều khác $2$ nên đều thỏa mãn.
Vậy $n \in \{-7; -1; 1; 3; 5; 11\}.$

#### Lời giải Bài 10:
Gọi $d = \text{ƯCLN}(2n + 5, 3n + 7)$ ($d \in \mathbb{N}^*$).
Khi đó:
$$\begin{cases} 2n + 5 \;\vdots\; d \\ 3n + 7 \;\vdots\; d \end{cases} \implies \begin{cases} 3 \cdot (2n + 5) \;\vdots\; d \\ 2 \cdot (3n + 7) \;\vdots\; d \end{cases} \implies \begin{cases} 6n + 15 \;\vdots\; d \\ 6n + 14 \;\vdots\; d \end{cases}$$
Lấy hiệu hai biểu thức:
$$(6n + 15) - (6n + 14) \;\vdots\; d \implies 1 \;\vdots\; d.$$
Vì $d \in \mathbb{N}^*$ nên $d = 1.$
Vậy phân số $P = \dfrac{2n + 5}{3n + 7}$ luôn là phân số tối giản với mọi $n \in \mathbb{N}.$

#### Lời giải Bài 11:
Theo bài ra, ta có đẳng thức:
$$\dfrac{17 - m}{35 + m} = \dfrac{1}{3}.$$
Điều kiện: $m \neq -35.$
Áp dụng quy tắc tích chéo:
$$3 \cdot (17 - m) = 1 \cdot (35 + m)$$
$$51 - 3m = 35 + m$$
$$51 - 35 = 3m + m$$
$$16 = 4m$$
$$m = 4.$$
*Thử lại:* $\dfrac{17 - 4}{35 + 4} = \dfrac{13}{39} = \dfrac{1}{3}$ (đúng).
Vậy số nguyên $m = 4.$

#### Lời giải Bài 12:
Biến đổi phương trình ban đầu:
$$\dfrac{x}{3} - \dfrac{1}{y} = \dfrac{1}{6} \iff \dfrac{x}{3} - \dfrac{1}{6} = \dfrac{1}{y} \iff \dfrac{2x - 1}{6} = \dfrac{1}{y}.$$
Áp dụng tích chéo:
$$(2x - 1) \cdot y = 6.$$
Vì $x, y \in \mathbb{Z}$ nên $2x - 1$ và $y$ là các ước số của $6.$
Đặc biệt, $2x - 1$ luôn là một **số nguyên lẻ**.
Các ước số lẻ của $6$ là: $\{1; -1; 3; -3\}.$
Ta xét từng trường hợp:
1. $2x - 1 = 1 \implies 2x = 2 \implies x = 1.$ Khi đó $y = 6 : 1 = 6.$
2. $2x - 1 = -1 \implies 2x = 0 \implies x = 0.$ Khi đó $y = 6 : (-1) = -6.$
3. $2x - 1 = 3 \implies 2x = 4 \implies x = 2.$ Khi đó $y = 6 : 3 = 2.$
4. $2x - 1 = -3 \implies 2x = -2 \implies x = -1.$ Khi đó $y = 6 : (-3) = -2.$

Vậy các cặp số nguyên $(x; y)$ thỏa mãn là:
$$(1; 6), \quad (0; -6), \quad (2; 2), \quad (-1; -2).$$

---

## 6. Đề kiểm tra 15 phút (Đề A & Đề B)

### Đề A (Thời gian: 15 phút)

**Phần 1: Trắc nghiệm (4 điểm)**
**Câu 1:** Trong các cách viết sau, cách viết nào là phân số?
A. $\dfrac{7}{0}$
B. $\dfrac{-4}{9}$
C. $\dfrac{2{,}3}{5}$
D. $\dfrac{\sqrt{5}}{2}$

**Câu 2:** Cho $\dfrac{x}{6} = \dfrac{-10}{15}.$ Giá trị của số nguyên $x$ là:
A. $-4$
B. $4$
C. $-5$
D. $6$

**Phần 2: Tự luận (6 điểm)**
**Câu 3 (3 điểm):** Rút gọn các phân số sau về phân số tối giản có mẫu dương:
a) $\dfrac{-24}{36}$
b) $\dfrac{35}{-60}$

**Câu 4 (3 điểm):** Một lớp học có $40$ học sinh, trong đó có $24$ bạn học sinh nữ.
a) Số học sinh nữ chiếm bao nhiêu phần của cả lớp?
b) Số học sinh nam chiếm bao nhiêu phần của cả lớp?

---

### Đáp án và Biểu điểm Đề A

- **Câu 1 (2 điểm):** Chọn **B** (vì tử và mẫu là số nguyên, mẫu khác $0$).
- **Câu 2 (2 điểm):** Chọn **A** (vì $x \cdot 15 = 6 \cdot (-10) = -60 \implies x = -4$).
- **Câu 3 (3 điểm):**
  a) $\text{ƯCLN}(24, 36) = 12 \implies \dfrac{-24}{36} = \dfrac{-24 : 12}{36 : 12} = \dfrac{-2}{3}.$ (1,5 điểm)
  b) $\dfrac{35}{-60} = \dfrac{-35}{60}.$ $\text{ƯCLN}(35, 60) = 5 \implies \dfrac{-35 : 5}{60 : 5} = \dfrac{-7}{12}.$ (1,5 điểm)
- **Câu 4 (3 điểm):**
  a) Số bạn nữ chiếm: $\dfrac{24}{40} = \dfrac{24 : 8}{40 : 8} = \dfrac{3}{5}$ (học sinh cả lớp). (1,5 điểm)
  b) Số bạn nam là: $40 - 24 = 16$ bạn.
  Số bạn nam chiếm: $\dfrac{16}{40} = \dfrac{16 : 8}{40 : 8} = \dfrac{2}{5}$ (học sinh cả lớp). (1,5 điểm)

---

### Đề B (Thời gian: 15 phút)

**Phần 1: Trắc nghiệm (4 điểm)**
**Câu 1:** Cặp phân số nào sau đây bằng nhau?
A. $\dfrac{-2}{3}$ và $\dfrac{6}{9}$
B. $\dfrac{5}{-8}$ và $\dfrac{-15}{24}$
C. $\dfrac{-4}{-7}$ và $\dfrac{-8}{14}$
D. $\dfrac{3}{4}$ và $\dfrac{4}{5}$

**Câu 2:** Phân số nào sau đây là phân số tối giản?
A. $\dfrac{6}{9}$
B. $\dfrac{-12}{20}$
C. $\dfrac{-7}{16}$
D. $\dfrac{15}{21}$

**Phần 2: Tự luận (6 điểm)**
**Câu 3 (3 điểm):** Tìm số nguyên $x,$ biết:
a) $\dfrac{x}{14} = \dfrac{-9}{21}$
b) $\dfrac{x + 1}{6} = \dfrac{-10}{15}$

**Câu 4 (3 điểm):** Tìm số nguyên $n$ để phân số $A = \dfrac{5}{n - 3}$ nhận giá trị nguyên.

---

### Đáp án và Biểu điểm Đề B

- **Câu 1 (2 điểm):** Chọn **B** (vì tích chéo $5 \cdot 24 = 120$ và $(-8) \cdot (-15) = 120$).
- **Câu 2 (2 điểm):** Chọn **C** (vì $\text{ƯCLN}(7, 16) = 1$).
- **Câu 3 (3 điểm):**
  a) $x \cdot 21 = 14 \cdot (-9) = -126 \implies x = -126 : 21 = -6.$ (1,5 điểm)
  b) $(x + 1) \cdot 15 = 6 \cdot (-10) = -60 \implies x + 1 = -60 : 15 = -4 \implies x = -5.$ (1,5 điểm)
- **Câu 4 (3 điểm):**
  Điều kiện: $n \neq 3.$ (0,5 điểm)
  Để $A$ nhận giá trị nguyên thì $n - 3 \in \text{Ư}(5) = \{1; -1; 5; -5\}.$ (1,0 điểm)
  - $n - 3 = 1 \implies n = 4$
  - $n - 3 = -1 \implies n = 2$
  - $n - 3 = 5 \implies n = 8$
  - $n - 3 = -5 \implies n = -2$
  Vậy $n \in \{-2; 2; 4; 8\}.$ (1,5 điểm)

---

## 7. Cạm bẫy học sinh thường gặp & Bí quyết ghi nhớ

> [!WARNING]
> **Các cạm bẫy chết người cần tránh:**
> 1. **Quên điều kiện mẫu khác $0$:** Rất nhiều bạn viết $\dfrac{a}{0}$ hoặc quên đặt điều kiện cho biểu thức chứa biến ở mẫu mẫu phải khác $0.$ Hãy nhớ: Không bao giờ có phép chia cho số $0$!
> 2. **Sai dấu khi thực hiện quy tắc tích chéo:** Khi tính tích của các số nguyên âm, cần nhớ rõ quy tắc dấu: $(-a) \cdot (-b) = a \cdot b$ và $(-a) \cdot b = -(a \cdot b).$ Quên dấu âm ở một vế sẽ làm kết quả sai lệch hoàn toàn.
> 3. **Chỉ nhân/chia một trong hai đại lượng:** Khi mở rộng hay rút gọn phân số, bắt buộc phải nhân (hoặc chia) **cả tử và mẫu** cho cùng một số. Nhân tử mà quên nhân mẫu sẽ làm giá trị phân số bị thay đổi.
> 4. **Để mẫu âm ở kết quả cuối cùng:** Dù phân số có mẫu âm vẫn là phân số hợp lệ, nhưng trong quy ước trình bày chuẩn của sách giáo khoa và các kỳ thi, các em luôn phải chuyển dấu âm lên tử số (hoặc đặt phía trước dấu gạch ngang phân số).

> [!TIP]
> **Thần chú ghi nhớ:**
> *"Tử trên mẫu dưới đàng hoàng,*
> *Mẫu luôn khác số không tròn chớ quên!*
> *Muốn xem bằng hoặc lớn hèn,*
> *Nhân chéo hai tích, ta liền biết ngay!*
> *Rút gọn thì nhớ chia tay,*
> *Cả tử lẫn mẫu cho thầy ước chung!"*
