---
title: 'Toán 6 Bài 21: Hình có trục đối xứng - Lý thuyết, dạng bài và lời giải chi tiết'
description: 'Toàn bộ lý thuyết Toán 6 Bài 21 Hình có trục đối xứng: định nghĩa trục đối xứng, bảng số trục đối xứng của các hình quen thuộc, chữ cái in hoa, biển báo giao thông, bài toán vẽ hình đối xứng trên lưới ô vuông và nâng cao HSG độc bản có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 6
  - Hình học trực quan
  - Trục đối xứng
  - Tính đối xứng
  - Kết nối tri thức
grade: 6
---

# Bài 21. Hình có trục đối xứng

Chào mừng các em bước sang **Chương V: Tính đối xứng của hình phẳng trong tự nhiên**! Trong thế giới tự nhiên và các công trình nghệ thuật kiến trúc, con người luôn bị cuốn hút bởi vẻ đẹp cân đối và hài hòa: từ đôi cánh rực rỡ của cánh bướm, bông hoa tuyết mùa đông, chiếc lá bàng, cho đến những ngôi chùa cổ kính hay tháp Eiffel sừng sững giữa bầu trời Paris.

Bí mật tạo nên sự cân đối hoàn mỹ ấy chính là **Tính đối xứng**. Hôm nay, chúng ta sẽ bắt đầu tìm hiểu dạng đối xứng phổ biến và trực quan nhất: **Hình có trục đối xứng**. Làm thế nào để kiểm tra một đường thẳng có phải là trục đối xứng hay không? Một hình có thể có bao nhiêu trục đối xứng? Tại sao đường chéo của hình chữ nhật lại không phải là trục đối xứng của nó? Bài học này sẽ giải đáp cặn kẽ mọi thắc mắc đó kèm theo hệ thống bài tập thực tế và bài toán nâng cao độc bản $100\%$ có lời giải chi tiết!

---

## 0. Khởi động — Quan sát vẻ đẹp cân đối quanh ta (5–7 phút)

Hãy kiểm tra khả năng cảm nhận hình học của các em qua 3 câu hỏi trắc nghiệm tương tác sau:

```quiz
type: choice
question: 'Hình tam giác đều có tất cả bao nhiêu trục đối xứng?'
options:
  - '1 trục đối xứng'
  - '2 trục đối xứng'
  - '3 trục đối xứng'
  - 'Không có trục đối xứng'
answer: 3
explanation: 'Tam giác đều có 3 trục đối xứng, mỗi trục là đường thẳng đi qua một đỉnh và trung điểm của cạnh đối diện.'
```

```quiz
type: choice
question: 'Trong các hình dưới đây, hình nào KHÔNG CÓ trục đối xứng?'
options:
  - 'Hình thang cân'
  - 'Hình bình hành (không phải hình chữ nhật hay hình thoi)'
  - 'Hình thoi'
  - 'Hình tròn'
answer: 2
explanation: 'Hình bình hành thông thường không có trục đối xứng nào vì khi gấp theo bất kỳ đường nào thì hai nửa cũng không trùng khít lên nhau.'
```

```quiz
type: choice
question: 'Đường chéo của hình chữ nhật có phải là trục đối xứng của nó không?'
options:
  - 'Có, vì đường chéo chia hình chữ nhật thành hai tam giác vuông bằng nhau'
  - 'Không, vì khi gấp theo đường chéo thì hai nửa không trùng khít lên nhau'
  - 'Chỉ đúng khi chiều dài gấp đôi chiều rộng'
  - 'Luôn luôn đúng'
answer: 2
explanation: 'Dù đường chéo chia hình chữ nhật thành hai tam giác vuông bằng nhau, nhưng khi gấp giấy theo đường chéo thì hai tam giác này lệch nhau chứ không trùng khít. Do đó đường chéo KHÔNG phải là trục đối xứng của hình chữ nhật.'
```

---

## A. Lý thuyết trọng tâm

### 1. Trục đối xứng của một hình

> [!NOTE]
> **Định nghĩa trục đối xứng:**
> Cho hình $(H)$ và một đường thẳng $d$. Nếu gấp hình $(H)$ theo đường thẳng $d$ mà hai phần của hình **trùng khít lên nhau**, thì:
> - Đường thẳng $d$ được gọi là **trục đối xứng** của hình $(H)$.
> - Hình $(H)$ được gọi là **hình có trục đối xứng** (hay hình đối xứng trục).

<div style="text-align: center; margin: 20px 0;">
<svg width="280" height="200" viewBox="0 0 280 200" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
  <!-- Trái tim đối xứng -->
  <path d="M 140 180 C 60 130, 20 80, 50 40 C 75 10, 125 25, 140 60 C 155 25, 205 10, 230 40 C 260 80, 220 130, 140 180 Z" fill="#fee2e2" stroke="#ef4444" stroke-width="2" />
  <!-- Trục đối xứng d -->
  <line x1="140" y1="10" x2="140" y2="195" stroke="#b91c1c" stroke-width="2" stroke-dasharray="6,4" />
  <text x="150" y="25" font-size="14" font-weight="bold" fill="#b91c1c">d</text>
  <text x="140" y="195" text-anchor="middle" font-size="12" fill="#ef4444">Trục đối xứng d</text>
</svg>
<div style="font-size:13px; color:#64748b; margin-top:6px;">Hình 1. Hình trái tim nhận đường thẳng $d$ làm trục đối xứng (hai nửa trùng khít khi gấp theo $d$)</div>
</div>

---

### 2. Số trục đối xứng của các hình quen thuộc

Một hình có thể có **một**, có **nhiều**, hoặc **không có** trục đối xứng nào. Bảng dưới đây tổng kết đầy đủ số trục đối xứng của các hình học cơ bản:

| Tên hình học | Số trục đối xứng | Vị trí các trục đối xứng |
| :--- | :---: | :--- |
| **Đoạn thẳng** | $1$ | Đường trung trực của đoạn thẳng (đi qua trung điểm và vuông góc) |
| **Tam giác cân** (không đều) | $1$ | Đường thẳng đi qua đỉnh và trung điểm của cạnh đáy |
| **Tam giác đều** | $3$ | Ba đường thẳng đi qua mỗi đỉnh và trung điểm cạnh đối diện |
| **Hình thang cân** | $1$ | Đường thẳng đi qua trung điểm của hai cạnh đáy |
| **Hình chữ nhật** | $2$ | Hai đường thẳng đi qua trung điểm của các cặp cạnh đối diện |
| **Hình thoi** | $2$ | Hai đường thẳng chứa hai đường chéo của hình thoi |
| **Hình vuông** | $4$ | Hai đường qua trung điểm cặp cạnh đối VÀ hai đường chéo |
| **Hình bình hành** (thường) | **$0$** | **Không có trục đối xứng nào** |
| **Lục giác đều** | $6$ | Ba đường chéo chính VÀ ba đường nối trung điểm các cạnh đối diện |
| **Hình tròn** | **Vô số** | Mọi đường thẳng đi qua tâm (đường thẳng chứa đường kính) |

---

### 3. Minh họa trực quan các trục đối xứng

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 20px 0;">
  <!-- Hình tam giác đều -->
  <div style="text-align: center;">
    <svg width="180" height="170" viewBox="0 0 180 170" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
      <polygon points="90,20 20,140 160,140" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
      <line x1="90" y1="10" x2="90" y2="155" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="15" y1="145" x2="135" y2="75" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="165" y1="145" x2="45" y2="75" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="4,3" />
      <text x="90" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">Tam giác đều (3 trục)</text>
    </svg>
  </div>

  <!-- Hình vuông -->
  <div style="text-align: center;">
    <svg width="180" height="170" viewBox="0 0 180 170" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
      <polygon points="30,25 150,25 150,145 30,145" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
      <line x1="90" y1="15" x2="90" y2="155" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="20" y1="85" x2="160" y2="85" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="20" y1="15" x2="160" y2="155" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="160" y1="15" x2="20" y2="155" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />
      <text x="90" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Hình vuông (4 trục)</text>
    </svg>
  </div>

  <!-- Hình chữ nhật -->
  <div style="text-align: center;">
    <svg width="180" height="170" viewBox="0 0 180 170" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
      <polygon points="20,40 160,40 160,130 20,130" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
      <line x1="90" y1="25" x2="90" y2="145" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="10" y1="85" x2="170" y2="85" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,3" />
      <text x="90" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Hình chữ nhật (2 trục)</text>
    </svg>
  </div>

  <!-- Hình thoi -->
  <div style="text-align: center;">
    <svg width="180" height="170" viewBox="0 0 180 170" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;">
      <polygon points="90,20 165,85 90,150 15,85" fill="#fdf4ff" stroke="#c026d3" stroke-width="2" />
      <line x1="90" y1="10" x2="90" y2="160" stroke="#a21caf" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="5" y1="85" x2="175" y2="85" stroke="#a21caf" stroke-width="1.5" stroke-dasharray="4,3" />
      <text x="90" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#a21caf">Hình thoi (2 trục)</text>
    </svg>
  </div>
</div>

---

### 4. Ba hiểu lầm học sinh rất hay mắc phải

> [!WARNING]
> Hãy khắc sâu 3 lưu ý sau để không bị trừ điểm trong bài kiểm tra:
> 1. **Đường chéo hình chữ nhật:** Đường chéo hình chữ nhật chia nó thành hai tam giác vuông có diện tích bằng nhau, nhưng khi gấp nếp theo đường chéo thì hai nửa bị **lệch chéo nhau**, không trùng khít. Do đó, hình chữ nhật chỉ có $2$ trục đối xứng (nối trung điểm cạnh đối), đường chéo **không phải** là trục đối xứng!
> 2. **Hình bình hành thông thường:** Hình bình hành có hai cặp cạnh đối song song và bằng nhau, nhưng các góc của nó bị nghiêng. Khi gấp theo bất kỳ đường nào (dọc, ngang hay đường chéo) thì hai phần cũng không bao giờ khít nhau. Vì vậy, hình bình hành thường **không có trục đối xứng nào**!
> 3. **Đường chéo hình thoi:** Ngược lại với hình chữ nhật, hai đường chéo của hình thoi **chính là hai trục đối xứng** của nó!

---

## B. Các dạng toán thường gặp và phương pháp giải chi tiết

### Dạng 1. Nhận biết hình có trục đối xứng và kiểm tra một đường thẳng

**Phương pháp giải:**
- Tưởng tượng thao tác gấp hình theo đường thẳng $d$:
  - Nếu hai nửa khớp khít hoàn toàn vào nhau $\implies d$ là trục đối xứng.
  - Nếu có bất kỳ phần nào bị thò ra ngoài hoặc lệch nhau $\implies d$ không phải là trục đối xứng.
- Sử dụng bảng số trục đối xứng của các hình quen thuộc đã học ở phần Lý thuyết.

#### Bài toán 1.1
Trong các hình dưới đây, hình nào có trục đối xứng? Hãy chỉ ra trục đối xứng của các hình đó:
1. Chiếc lá bàng cân đối;
2. Biển báo giao thông hình tròn cấm đi ngược chiều;
3. Chiếc ê-ke tam giác vuông có hai góc $30^\circ$ và $60^\circ$;
4. Mặt trăng lưỡi liềm cân đối.

**Lời giải:**
1. **Chiếc lá bàng cân đối:** Có trục đối xứng, chính là đường gân chính chạy dọc từ cuống lá đến đỉnh lá.
2. **Biển báo hình tròn:** Có trục đối xứng. Đường thẳng nằm ngang đi dọc theo vạch trắng ở giữa biển báo là một trục đối xứng (đồng thời đường thẳng đứng vuông góc với vạch trắng cũng là trục đối xứng).
3. **Chiếc ê-ke tam giác vuông có góc $30^\circ$ và $60^\circ$:** Ba cạnh có độ dài khác nhau nên không có trục đối xứng nào.
4. **Mặt trăng lưỡi liềm cân đối:** Có trục đối xứng, là đường thẳng đi qua chính giữa chia vầng trăng thành hai nửa trên và dưới trùng khít nhau.

---

### Dạng 2. Đếm số trục đối xứng của một hình

**Phương pháp giải:**
- Vẽ hoặc tưởng tượng các đường thẳng khả dĩ (đường nối trung điểm, đường chéo, đường phân giác góc).
- Với các đa giác đều $n$ cạnh:
  - Nếu $n$ lẻ (tam giác đều $n = 3$, ngũ giác đều $n = 5$): Các trục đối xứng đi qua một đỉnh và trung điểm cạnh đối diện (có đúng $n$ trục).
  - Nếu $n$ chẵn (hình vuông $n = 4$, lục giác đều $n = 6$): Gồm $\frac{n}{2}$ trục nối hai đỉnh đối diện và $\frac{n}{2}$ trục nối trung điểm các cặp cạnh đối diện (tổng cộng có đúng $n$ trục).

#### Bài toán 2.1
Hãy cho biết mỗi hình sau có bao nhiêu trục đối xứng:
1. Biển báo nguy hiểm hình tam giác đều;
2. Viên gạch bông hình vuông;
3. Cánh diều hình thoi;
4. Khung cửa sổ hình chữ nhật;
5. Mặt cắt tổ ong hình lục giác đều.

**Lời giải:**
1. Biển báo hình tam giác đều: Có **$3$ trục đối xứng**.
2. Viên gạch bông hình vuông: Có **$4$ trục đối xứng**.
3. Cánh diều hình thoi: Có **$2$ trục đối xứng** (hai đường chéo).
4. Khung cửa sổ hình chữ nhật: Có **$2$ trục đối xứng** (hai đường qua trung điểm cạnh đối).
5. Mặt cắt tổ ong hình lục giác đều: Có **$6$ trục đối xứng**.

---

### Dạng 3. Trục đối xứng của các chữ cái in hoa, chữ số và từ ngữ

**Phương pháp giải:**
- Xem xét chữ cái in hoa theo phông chữ in hoa chuẩn, không chân:
  - **Trục dọc (thẳng đứng):** Gấp trái qua phải trùng khít (ví dụ: A, M, T, U, V, W, Y).
  - **Trục ngang (nằm ngang):** Gấp trên xuống dưới trùng khít (ví dụ: B, C, D, E, K).
  - **Cả hai trục (vừa dọc vừa ngang):** H, I, O, X.
  - **Không có trục đối xứng:** F, G, J, L, N, P, Q, R, S, Z.
- Đối với các chữ số:
  - Số $0$ và số $8$ (chuẩn đối xứng) có cả trục dọc và trục ngang.
  - Số $1, 2, 3, 4, 5, 6, 7, 9$ (nói chung) không có hoặc chỉ có trục ngang (số $3$).

#### Bài toán 3.1
1. Trong các chữ cái in hoa của từ "**HỌC TẬP**" (gồm các chữ cái: H, O, C, T, P), chữ nào có trục đối xứng? Trục đó là đường dọc hay đường ngang?
2. Có từ tiếng Anh nào gồm các chữ cái in hoa mà khi nhìn qua gương đặt nằm ngang vẫn giữ nguyên không đổi?

**Lời giải:**
1. Xét từng chữ cái:
   - Chữ **H**: Có $2$ trục đối xứng (cả trục dọc và trục ngang).
   - Chữ **O**: Có vô số trục đối xứng (nếu là hình tròn) hoặc $2$ trục đối xứng (nếu là hình elip dọc/ngang).
   - Chữ **C**: Có $1$ trục đối xứng nằm ngang.
   - Chữ **T**: Có $1$ trục đối xứng thẳng đứng.
   - Chữ **P**: Không có trục đối xứng nào.
2. Để nhìn qua gương nằm ngang vẫn giữ nguyên, tất cả các chữ cái trong từ đó phải có trục đối xứng nằm ngang.
   Ví dụ các từ tiếng Anh:
   - Từ "**BED**" (các chữ B, E, D đều có trục ngang).
   - Từ "**BOOK**" (B, O, O, K đều có trục ngang).
   - Từ "**CHOICE**" (C, H, O, I, C, E đều có trục ngang).

---

### Dạng 4. Vẽ thêm điểm hoặc hình để hoàn thiện hình có trục đối xứng

**Phương pháp giải:**
- Với trục đối xứng $d$: Điểm $A'$ đối xứng với điểm $A$ qua $d$ khi và chỉ khi đoạn thẳng $AA'$ vuông góc với $d$ và khoảng cách từ $A$ đến $d$ bằng khoảng cách từ $A'$ đến $d$.
- Trên lưới ô vuông: Đếm số ô vuông từ mỗi điểm đến trục $d$, rồi lấy sang phía đối diện cùng số ô vuông tương ứng trên cùng một hàng (hoặc cột) vuông góc với $d$.

#### Bài toán 4.1
Cho đoạn thẳng $AB = 6\text{ cm}$.
1. Hãy nêu cách vẽ trục đối xứng của đoạn thẳng $AB$.
2. Trục đối xứng của đoạn thẳng có tên gọi đặc biệt là gì?

**Lời giải:**
1. Cách vẽ trục đối xứng của đoạn thẳng $AB$:
   - **Bước 1:** Dùng thước thẳng đo và xác định trung điểm $I$ của đoạn thẳng $AB$ ($IA = IB = 3\text{ cm}$).
   - **Bước 2:** Đặt ê-ke vuông góc với đoạn thẳng $AB$ tại điểm $I$, vẽ đường thẳng $d$ đi qua $I$ và vuông góc với $AB$.
   - Đường thẳng $d$ vừa vẽ chính là trục đối xứng của đoạn thẳng $AB$.
2. Trục đối xứng của một đoạn thẳng chính là **đường trung trực** của đoạn thẳng đó.

---

### Dạng 5. Tính đối xứng trong tự nhiên, kiến trúc và nghệ thuật

#### Bài toán 5.1
1. Kể tên 4 công trình kiến trúc nổi tiếng ở Việt Nam và trên thế giới có thiết kế đối xứng trục.
2. Vì sao trong tự nhiên, đa số các loài động vật có khả năng di chuyển nhanh (chim bồ câu, cá heo, hổ, báo, con người) đều có cơ thể đối xứng trục hai bên?

**Lời giải:**
1. Bốn công trình kiến trúc tiêu biểu có tính đối xứng trục:
   - **Chùa Một Cột** (Hà Nội, Việt Nam);
   - **Khuê Văn Các** — Văn Miếu Quốc Tử Giám (Hà Nội);
   - **Lăng Taj Mahal** (Ấn Độ);
   - **Khải Hoàn Môn** (Paris, Pháp).
2. *Ý nghĩa sinh học:* Sự đối xứng hai bên (đối xứng trục dọc cơ thể) giúp các loài động vật phân bố đều trọng lượng sang hai bên trục xương sống, tạo sự cân bằng trọng tâm hoàn hảo khi di chuyển thẳng, bơi lội hoặc bay lượn với tốc độ cao, đồng thời hai mắt, hai tai ở hai bên giúp quan sát và định vị con mồi chính xác trong không gian 3 chiều.

---

## C. Phiếu bài tập tự luyện (10 bài độc bản kèm lời giải)

### Đề bài phiếu tự luyện

**Bài 1.** Điền từ hoặc số thích hợp vào chỗ trống:
1. Đường thẳng $d$ chia hình thành hai phần mà khi gấp theo $d$ hai phần trùng khít lên nhau gọi là $\dots$ của hình.
2. Hình tam giác đều có $\dots$ trục đối xứng.
3. Hình tròn có $\dots$ trục đối xứng, đó là các đường thẳng đi qua $\dots$ của hình tròn.

**Bài 2.** Trong các hình sau: hình vuông, hình chữ nhật, hình bình hành, hình thang cân, hình thoi:
1. Hình nào có đúng $1$ trục đối xứng?
2. Hình nào có đúng $2$ trục đối xứng?
3. Hình nào có đúng $4$ trục đối xứng?
4. Hình nào không có trục đối xứng nào?

**Bài 3.** Bạn An nói: *"Tam giác nào cũng có ít nhất một trục đối xứng."* Bạn Bình nói: *"Chỉ có tam giác cân hoặc tam giác đều mới có trục đối xứng."* Theo em, bạn nào nói đúng? Vì sao?

**Bài 4.** Nêu số trục đối xứng của:
1. Hình chữ thập đỏ (chữ thập đều);
2. Ngôi sao vàng năm cánh đều trên Quốc kỳ Việt Nam;
3. Hình lục giác đều.

**Bài 5.** Cho đoạn thẳng $CD = 8\text{ cm}$. Vẽ trục đối xứng $d$ của đoạn thẳng $CD$ và tính khoảng cách từ điểm $C$ đến đường thẳng $d$.

**Bài 6.** Trong các chữ cái in hoa sau: M, N, E, H, K, W, chữ nào có:
1. Đúng một trục đối xứng thẳng đứng?
2. Đúng một trục đối xứng nằm ngang?
3. Hai trục đối xứng?
4. Không có trục đối xứng?

**Bài 7.** Trong các chữ số từ $0$ đến $9$, chữ số nào có trục đối xứng thẳng đứng? Chữ số nào có trục đối xứng nằm ngang?

**Bài 8.** Bạn Cường cắt một mảnh bìa hình vuông cạnh $10\text{ cm}$ theo một đường chéo. Hỏi hai mảnh bìa thu được là hình gì và mỗi mảnh có mấy trục đối xứng?

**Bài 9.** Một biển báo giao thông hình tròn có bán kính $30\text{ cm}$, trên mặt có vẽ một mũi tên thẳng đứng chỉ hướng đi thẳng. Hỏi biển báo đó (kể cả hình vẽ mũi tên bên trong) có mấy trục đối xứng?

**Bài 10.** Vẽ một hình chữ nhật có kích thước $6\text{ cm} \times 4\text{ cm}$, sau đó vẽ tất cả các trục đối xứng của hình chữ nhật đó.

---

### Lời giải chi tiết phiếu tự luyện

**Bài 1.**
1. ... gọi là **trục đối xứng** của hình.
2. Hình tam giác đều có **$3$** trục đối xứng.
3. Hình tròn có **vô số** trục đối xứng, đó là các đường thẳng đi qua **tâm** của hình tròn.

**Bài 2.**
1. Có đúng $1$ trục đối xứng: **Hình thang cân**.
2. Có đúng $2$ trục đối xứng: **Hình chữ nhật** và **Hình thoi**.
3. Có đúng $4$ trục đối xứng: **Hình vuông**.
4. Không có trục đối xứng nào: **Hình bình hành** (không đặc biệt).

**Bài 3.**
Bạn **Bình nói đúng**.
*Giải thích:* Một tam giác thường (có ba cạnh và ba góc không bằng nhau) không thể gấp lại để hai nửa trùng khít, do đó nó không có trục đối xứng nào. Chỉ có tam giác cân (có $1$ trục đối xứng) hoặc tam giác đều (có $3$ trục đối xứng) mới là hình có trục đối xứng.

**Bài 4.**
1. Hình chữ thập đỏ đều: Có **$4$ trục đối xứng** (hai đường trục dọc/ngang và hai đường chéo).
2. Ngôi sao năm cánh đều: Có **$5$ trục đối xứng** (mỗi trục nối từ một đỉnh cánh sao đến đáy lõm đối diện).
3. Hình lục giác đều: Có **$6$ trục đối xứng**.

**Bài 5.**
- Trục đối xứng $d$ của đoạn thẳng $CD$ là đường trung trực của $CD$, đi qua trung điểm $I$ của $CD$ và vuông góc với $CD$.
- Khoảng cách từ điểm $C$ đến đường thẳng $d$ đúng bằng độ dài đoạn thẳng $CI$:
  $$CI = \frac{CD}{2} = \frac{8}{2} = 4\text{ (cm)}.$$

**Bài 6.**
1. Đúng một trục đối xứng thẳng đứng: **M, W**.
2. Đúng một trục đối xứng nằm ngang: **E, K**.
3. Hai trục đối xứng (cả dọc và ngang): **H**.
4. Không có trục đối xứng: **N**.

**Bài 7.**
- Chữ số có trục đối xứng thẳng đứng: Số **$0$** và số **$8$**.
- Chữ số có trục đối xứng nằm ngang: Số **$0$**, số **$3$** (chuẩn phông cân đối) và số **$8$**.

**Bài 8.**
- Khi cắt hình vuông theo đường chéo, ta thu được hai mảnh bìa là hai **tam giác vuông cân**.
- Mỗi tam giác vuông cân có **đúng $1$ trục đối xứng**, chính là đường thẳng đi qua đỉnh góc vuông và trung điểm của cạnh huyền.

**Bài 9.**
- Mặc dù đường viền hình tròn bên ngoài có vô số trục đối xứng, nhưng mũi tên thẳng đứng vẽ ở bên trong chỉ có một trục đối xứng duy nhất là trục dọc theo thân mũi tên.
- Do đó, cả biển báo hoàn chỉnh có **đúng $1$ trục đối xứng** (đường thẳng đứng đi qua tâm hình tròn và dọc theo mũi tên).

**Bài 10.**
*Cách vẽ:*
- Vẽ hình chữ nhật $ABCD$ có $AB = 6\text{ cm}$ và $BC = 4\text{ cm}$.
- Lấy $M, N$ là trung điểm của hai cạnh $AB, CD$; nối đường thẳng qua $M, N$ ta được trục đối xứng thứ nhất.
- Lấy $P, Q$ là trung điểm của hai cạnh $AD, BC$; nối đường thẳng qua $P, Q$ ta được trục đối xứng thứ hai.
- Hai trục đối xứng này vuông góc với nhau tại tâm đối xứng $O$ của hình chữ nhật.

---

## D. Đề kiểm tra 15 phút — Đánh giá năng lực chuẩn

### Đề bài

**Phần I. Trắc nghiệm (4 câu — 4 điểm)**

```quiz
type: choice
question: 'Hình nào sau đây có vô số trục đối xứng?'
options:
  - 'Hình vuông'
  - 'Hình lục giác đều'
  - 'Hình tròn'
  - 'Tam giác đều'
answer: 3
explanation: 'Hình tròn có vô số trục đối xứng, mọi đường thẳng đi qua tâm đều là trục đối xứng của hình tròn.'
```

```quiz
type: choice
question: 'Hình thoi có bao nhiêu trục đối xứng?'
options:
  - '1 trục'
  - '2 trục'
  - '4 trục'
  - '0 trục'
answer: 2
explanation: 'Hình thoi có 2 trục đối xứng, chính là hai đường thẳng chứa hai đường chéo của nó.'
```

```quiz
type: choice
question: 'Trong các chữ cái in hoa sau, chữ cái nào CÓ CẢ trục đối xứng dọc và trục đối xứng ngang?'
options:
  - 'A'
  - 'B'
  - 'H'
  - 'M'
answer: 3
explanation: 'Chữ H vừa có trục đối xứng thẳng đứng, vừa có trục đối xứng nằm ngang.'
```

```quiz
type: choice
question: 'Hình thang cân có số trục đối xứng là:'
options:
  - '1'
  - '2'
  - '3'
  - '4'
answer: 1
explanation: 'Hình thang cân có đúng 1 trục đối xứng nối trung điểm của hai cạnh đáy.'
```

**Phần II. Tự luận (3 câu — 6 điểm)**

**Câu 1 (2.0 điểm).** Nêu số trục đối xứng của mỗi hình sau: tam giác đều, hình vuông, hình chữ nhật, hình bình hành (không đặc biệt).

**Câu 2 (2.0 điểm).** Cho đoạn thẳng $AB = 10\text{ cm}$. Hãy vẽ trục đối xứng $d$ của đoạn thẳng $AB$ và giải thích vì sao $d$ là trục đối xứng.

**Câu 3 (2.0 điểm).** Bạn Minh có một mảnh giấy hình vuông. Bạn gấp đôi tờ giấy lại theo một trục đối xứng, sau đó dùng kéo cắt một hình tam giác nhỏ ở mép nếp gấp rồi mở tờ giấy ra.
1. Hình lỗ thủng xuất hiện trên tờ giấy có trục đối xứng không?
2. Trục đối xứng của lỗ thủng đó là đường nào?

---

### Đáp án và thang điểm phần tự luận

**Câu 1 (2.0 điểm):**
- Tam giác đều: $3$ trục đối xứng *(0.5 điểm)*.
- Hình vuông: $4$ trục đối xứng *(0.5 điểm)*.
- Hình chữ nhật: $2$ trục đối xứng *(0.5 điểm)*.
- Hình bình hành thường: $0$ trục đối xứng *(0.5 điểm)*.

**Câu 2 (2.0 điểm):**
- Vẽ đúng đoạn thẳng $AB = 10\text{ cm}$, xác định trung điểm $M$ ($AM = MB = 5\text{ cm}$) *(0.5 điểm)*.
- Dựng đường thẳng $d$ đi qua $M$ và vuông góc với $AB$ *(0.75 điểm)*.
- Giải thích: Khi gấp đoạn thẳng $AB$ theo đường thẳng $d$, điểm $A$ trùng khít với điểm $B$ (vì $MA = MB$ và $d \perp AB$), do đó $d$ là trục đối xứng của đoạn thẳng $AB$ *(0.75 điểm)*.

**Câu 3 (2.0 điểm):**
1. Lỗ thủng trên tờ giấy **chắc chắn có trục đối xứng** *(1.0 điểm)*.
2. Trục đối xứng của lỗ thủng **chính là đường nếp gấp** ban đầu của tờ giấy *(1.0 điểm)*.

---

## E. Bài toán bồi dưỡng học sinh giỏi & Nâng cao

### Bài toán nâng cao 1 (Đếm trục đối xứng của hoa văn phức hợp)
Hãy xác định số trục đối xứng của các hoa văn sau:
1. Bông hoa bốn cánh đều (nhận các trục đối xứng của hình vuông).
2. Hình bông tuyết sáu cánh đều.
3. Hình logo cỏ ba lá đối xứng.

**Lời giải:**
1. **Bông hoa bốn cánh đều:** Có hình dạng tương thích với cấu trúc của hình vuông, gồm $2$ trục dọc/ngang và $2$ trục chéo. Do đó có **$4$ trục đối xứng**.
2. **Hình bông tuyết sáu cánh đều:** Cấu tạo dựa trên mạng tinh thể lục giác đều, có **$6$ trục đối xứng** (ba trục đi qua các cánh đối diện và ba trục đi qua khe giữa các cánh).
3. **Hình cỏ ba lá đối xứng:** Ba lá xếp đều nhau quanh tâm góc $120^\circ$, có **$3$ trục đối xứng** (mỗi trục chạy dọc từ cuống lá qua chính giữa một lá).

---

### Bài toán nâng cao 2 (Bài toán gấp giấy nhiều lần tạo hoa văn)
Một tờ giấy hình vuông được gấp đôi lần thứ nhất theo một trục đối xứng (đường dọc), rồi gấp đôi tiếp lần thứ hai theo trục đối xứng thứ hai (đường ngang vuông góc với trục thứ nhất).
1. Sau hai lần gấp, phần giấy thu được có dạng hình gì và diện tích bằng bao nhiêu phần hình ban đầu?
2. Người ta dùng kéo bấm một lỗ tròn ở góc chung của nếp gấp rồi mở phẳng tờ giấy ra. Trên tờ giấy có tất cả bao nhiêu lỗ thủng và chúng có tính chất gì?

**Lời giải:**
1. Sau hai lần gấp vuông góc nhau:
   - Tờ giấy thu được là một **hình vuông nhỏ** có cạnh bằng một nửa cạnh hình vuông ban đầu.
   - Diện tích hình vuông nhỏ bằng:
     $$\left(\frac{1}{2}\right) \times \left(\frac{1}{2}\right) = \frac{1}{4}\text{ (diện tích tờ giấy ban đầu)}.$$
2. Góc chung của nếp gấp chính là **tâm của hình vuông ban đầu**.
   Khi bấm một lỗ ở góc đó rồi mở ra, chỉ có duy nhất **$1$ lỗ thủng tròn** nằm ở chính giữa tâm của tờ giấy hình vuông ban đầu. Lỗ tròn này nhận cả $4$ trục đối xứng của hình vuông ban đầu làm trục đối xứng của nó.

---

### Bài toán nâng cao 3 (Tô màu ô vuông đối xứng trục)
Trên lưới ô vuông kích thước $4 \times 4$ gồm $16$ ô vuông nhỏ:
1. Hãy tìm số ô vuông tối đa có thể tô màu sao cho hình thu được có đúng $4$ trục đối xứng.
2. Nếu đã tô màu $4$ ô ở $4$ góc ngoài cùng, cần tô thêm ít nhất bao nhiêu ô ở các vị trí khác để hình vừa có trục đối xứng thẳng đứng vừa có trục đối xứng nằm ngang?

**Lời giải:**
1. Lưới $4 \times 4$ có $4$ trục đối xứng (dọc, ngang và hai chéo) đi qua tâm lưới:
   - $4$ ô vuông ở trung tâm (kề tâm) đối xứng nhau qua cả $4$ trục (tạo thành $1$ nhóm $4$ ô).
   - $4$ ô vuông ở $4$ góc ngoài cùng đối xứng nhau qua cả $4$ trục (tạo thành $1$ nhóm $4$ ô).
   - $8$ ô vuông còn lại ở mép biên đối xứng nhau qua các trục (tạo thành $1$ nhóm $8$ ô).
   Để hình có đủ $4$ trục đối xứng, ta có thể tô màu toàn bộ $16$ ô vuông, hoặc chỉ tô các nhóm đối xứng (ví dụ tô nhóm $4$ ô trung tâm, hoặc nhóm $4$ ô góc). Số ô vuông tối đa có thể tô là **$16$ ô vuông** (tô kín cả lưới).
2. Khi đã tô $4$ ô ở $4$ góc:
   Tập hợp $4$ ô ở $4$ góc bản thân nó đã hoàn toàn đối xứng qua cả trục thẳng đứng, trục nằm ngang và hai đường chéo!
   Do đó, **không cần tô thêm ô nào nữa** (cần tô thêm ít nhất **$0$ ô**), hình đã có sẵn cả hai trục đối xứng dọc và ngang!

---

### Bài toán nâng cao 4 (Số trục đối xứng của đa giác đều $n$ cạnh)
Chứng minh rằng một đa giác đều có $n$ cạnh ($n \ge 3$) luôn có đúng $n$ trục đối xứng.

**Lời giải:**
Ta phân tích thành hai trường hợp:
1. **Trường hợp $n$ là số lẻ (ví dụ: tam giác đều $n = 3$, ngũ giác đều $n = 5$):**
   - Mỗi đỉnh luôn đối diện với một cạnh.
   - Trục đối xứng là đường thẳng đi qua một đỉnh và trung điểm của cạnh đối diện.
   - Vì có $n$ đỉnh nên có đúng **$n$ trục đối xứng**.
2. **Trường hợp $n$ là số chẵn (ví dụ: hình vuông $n = 4$, lục giác đều $n = 6$, bát giác đều $n = 8$):**
   - Mỗi đỉnh đối diện với một đỉnh khác qua tâm: có $\frac{n}{2}$ cặp đỉnh đối diện, cho $\frac{n}{2}$ trục đối xứng nối hai đỉnh đối diện.
   - Mỗi cạnh đối diện với một cạnh song song: có $\frac{n}{2}$ cặp cạnh đối diện, cho $\frac{n}{2}$ trục đối xứng nối trung điểm hai cạnh đối diện.
   - Tổng số trục đối xứng là:
     $$\frac{n}{2} + \frac{n}{2} = n\text{ (trục đối xứng)}.$$

*Kết luận:* Mọi đa giác đều có $n$ cạnh luôn có đúng **$n$ trục đối xứng**. $\blacksquare$

---

### Bài toán nâng cao 5 (Trục đối xứng của các hình ghép)
Một hình phẳng được ghép bởi một hình vuông cạnh $6\text{ cm}$ và một tam giác đều cạnh $6\text{ cm}$ chung một cạnh (tam giác đều nằm phía ngoài hình vuông).
Hỏi hình ghép thu được có bao nhiêu trục đối xứng? Đó là đường thẳng nào?

**Lời giải:**
Gọi hình vuông là $ABCD$ và tam giác đều ghép ngoài là $ABE$ (chung cạnh $AB$).
- Hình vuông $ABCD$ có trục đối xứng thẳng đứng là đường trung trực của cạnh $AB$ (và cạnh $CD$).
- Tam giác đều $ABE$ cũng có trục đối xứng là đường trung trực của cạnh $AB$ đi qua đỉnh $E$.
- Do đó, đường trung trực chung của đoạn thẳng $AB$ chia cả hình ghép thành hai phần đối xứng và trùng khít hoàn toàn lên nhau.
- Các trục đối xứng khác của hình vuông (như đường ngang hay đường chéo) không bảo toàn tam giác $ABE$.

*Kết luận:* Hình ghép có **đúng $1$ trục đối xứng**, đó là đường trung trực chung của cạnh ghép $AB$.

---

## F. Lời kết và tóm tắt bài học

Bài 21 giúp các em nhận diện thế giới đối xứng quanh mình qua lăng kính toán học:
1. **Trục đối xứng:** Đường thẳng chia hình thành hai nửa trùng khít nhau khi gấp nếp.
2. **Số trục quen thuộc:** Tam giác đều ($3$), Hình vuông ($4$), Hình chữ nhật ($2$), Hình thoi ($2$), Hình thang cân ($1$), Hình bình hành ($0$), Hình tròn (vô số).
3. **Đa giác đều $n$ cạnh:** Luôn có đúng $n$ trục đối xứng.
4. Ở bài học tiếp theo — **Bài 22**, chúng ta sẽ tìm hiểu dạng đối xứng thứ hai cũng kỳ diệu không kém: **Hình có tâm đối xứng** (đối xứng qua một phép quay $180^\circ$)!
