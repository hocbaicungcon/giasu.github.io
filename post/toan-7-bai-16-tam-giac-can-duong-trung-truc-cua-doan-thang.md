---
title: 'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng - Lý thuyết, Dạng toán và 5 Chuyên đề Olympic'
description: 'Làm chủ lý thuyết tam giác cân, tam giác đều, tam giác vuông cân, định lý hai chiều đường trung trực, 5 dạng toán trọng tâm, 5 chuyên đề Olympic và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Tam giác cân
  - Tam giác đều
  - Đường trung trực
  - Kết nối tri thức
grade: 7
---

# Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng

Khi quan sát kim tự tháp Giza sừng sững bên bờ sông Nile qua bốn ngàn năm bão cát, tháp Eiffel vươn cao kiêu hãnh giữa bầu trời Paris hay những mái nhà rường truyền thống của người Việt, chúng ta đều nhận thấy một điểm chung kỳ diệu: **hình tam giác cân**.

Vì sao các kiến trúc sư vĩ đại nhất của nhân loại luôn chọn hình tam giác cân làm bộ khung chịu lực chính? Vì trong tất cả các hình đa giác, tam giác cân sở hữu một trục đối xứng hoàn hảo, chia đôi trọng tải đều sang hai phía và tạo nên sự cân bằng cơ học bền vững nhất trong tự nhiên.

Ẩn giấu đằng sau sự vững chãi của tam giác cân chính là một khái niệm cốt lõi của hình học phẳng: **Đường trung trực của đoạn thẳng** — quỹ tích của tất cả các điểm cách đều hai đầu mút, chiếc chìa khóa vạn năng để định vị vị trí trạm phát sóng viễn thông, tâm đường tròn ngoại tiếp và giải quyết vô số bài toán tối ưu trong đời sống hiện đại.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 16: TAM GIÁC CÂN VÀ ĐƯỜNG TRUNG TRỰC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Tam giác cân & Tính chất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Định nghĩa: Hai cạnh bên bằng nhau ($AB = AC$).<br>• Định lý: Hai góc ở đáy bằng nhau ($\widehat{B} = \widehat{C}$).<br>• Dấu hiệu nhận biết: Tam giác có 2 cạnh bằng nhau hoặc 2 góc bằng nhau.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tam giác đều & Vuông cân</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tam giác đều: 3 cạnh bằng nhau $\iff$ 3 góc bằng $60^\circ$.<br>• Tam giác cân có 1 góc $60^\circ$ là tam giác đều.<br>• Tam giác vuông cân: 1 góc vuông và 2 góc nhọn bằng $45^\circ$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đường trung trực của đoạn thẳng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Vuông góc tại trung điểm của đoạn thẳng ($d \perp AB$ tại $I, IA = IB$).<br>• Định lý thuận: $M \in d \implies MA = MB$.<br>• Định lý đảo: $MA = MB \implies M \in d$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Mối liên hệ cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trong tam giác cân, đường phân giác của góc ở đỉnh đồng thời là đường trung trực của cạnh đáy, đường cao và đường trung tuyến!</p>
    </div>
  </div>
</div>

---

## Khởi động — Ôn luyện phản xạ nền tảng (5–7 phút)

Trước khi vào bài học mới, các em hãy cùng kiểm tra nhanh $5$ câu hỏi khởi động sau:

1. **Tổng ba góc trong tam giác:** Cho tam giác $ABC$ có $\widehat{A} = 70^\circ$ và $\widehat{B} = \widehat{C}$. Tính số đo của góc $\widehat{B}$ và góc $\widehat{C}$.
2. **Trung điểm của đoạn thẳng:** Điểm $I$ được gọi là trung điểm của đoạn thẳng $AB$ khi nào?
3. **Đường thẳng vuông góc:** Hai đường thẳng $d$ và $a$ cắt nhau tại điểm $I$. Cần điều kiện gì về góc để $d \perp a$?
4. **Trường hợp bằng nhau c.c.c:** Nếu điểm $M$ có $MA = MB$ và $I$ là trung điểm của $AB$, hai tam giác $\triangle MIA$ và $\triangle MIB$ có bằng nhau không? Vì sao?
5. **Góc phụ nhau:** Trong tam giác vuông $ABC$ vuông tại $A$, nếu $\widehat{B} = 45^\circ$ thì góc $\widehat{C}$ bằng bao nhiêu độ?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:**
   Tổng ba góc trong $\triangle ABC$ bằng $180^\circ$:
   $$\widehat{B} + \widehat{C} = 180^\circ - \widehat{A} = 180^\circ - 70^\circ = 110^\circ.$$
   Vì $\widehat{B} = \widehat{C}$ nên:
   $$\widehat{B} = \widehat{C} = \frac{110^\circ}{2} = 55^\circ.$$
2. **Trả lời:** Điểm $I$ là trung điểm của $AB$ khi $I$ nằm giữa $A, B$ và cách đều hai đầu mút ($IA = IB = \frac{AB}{2}$).
3. **Trả lời:** Hai đường thẳng vuông góc khi góc tạo bởi chúng có số đo bằng $90^\circ$.
4. **Trả lời:** Có $\triangle MIA = \triangle MIB$ (c.c.c) vì có $MA = MB$ (giả thiết), $IA = IB$ ($I$ là trung điểm), cạnh $MI$ chung. Từ đó suy ra $\widehat{MIA} = \widehat{MIB} = 90^\circ$, tức là $MI \perp AB$.
5. **Trả lời:** $\widehat{C} = 90^\circ - \widehat{B} = 90^\circ - 45^\circ = 45^\circ$. Tam giác này vừa vuông vừa có hai góc đáy bằng nhau, đó là tam giác vuông cân!
</details>

---

## I. Lý thuyết trọng tâm

### 1. Tam giác cân và các tính chất đặc trưng

> [!IMPORTANT]
> **ĐỊNH NGHĨA TAM GIÁC CÂN:**
> **Tam giác cân** là tam giác có **hai cạnh bằng nhau**.
> 
> Cho tam giác $ABC$ có $AB = AC$:
> - Tam giác $ABC$ gọi là **cân tại đỉnh $A$**.
> - $AB, AC$ gọi là **hai cạnh bên**.
> - $BC$ gọi là **cạnh đáy**.
> - $\widehat{B}, \widehat{C}$ gọi là **hai góc ở đáy**.
> - $\widehat{A}$ gọi là **góc ở đỉnh**.

```geometry
type: isosceles-triangle
```

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 540 280" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác ABC cân tại A -->
    <polygon points="270,30 110,230 430,230" fill="rgba(37, 99, 235, 0.06)" stroke="#2563eb" stroke-width="2.5" />
    
    <!-- Cạnh bên bằng nhau: vạch chéo đơn -->
    <line x1="185" y1="125" x2="195" y2="135" stroke="#dc2626" stroke-width="2.5" />
    <line x1="345" y1="135" x2="355" y2="125" stroke="#dc2626" stroke-width="2.5" />

    <!-- Cung hai góc đáy bằng nhau -->
    <path d="M 140,230 A 30 30 0 0 0 126,204" fill="none" stroke="#d97706" stroke-width="2" />
    <path d="M 400,230 A 30 30 0 0 1 414,204" fill="none" stroke="#d97706" stroke-width="2" />

    <!-- Đường trung trực/đường cao AH -->
    <line x1="270" y1="30" x2="270" y2="230" stroke="#64748b" stroke-width="2" stroke-dasharray="5,4" />
    <rect x="256" y="216" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5" />
    
    <!-- Vạch bằng nhau ở đáy HB = HC -->
    <line x1="185" y1="225" x2="185" y2="235" stroke="#64748b" stroke-width="2" />
    <line x1="190" y1="225" x2="190" y2="235" stroke="#64748b" stroke-width="2" />
    <line x1="350" y1="225" x2="350" y2="235" stroke="#64748b" stroke-width="2" />
    <line x1="355" y1="225" x2="355" y2="235" stroke="#64748b" stroke-width="2" />

    <!-- Các đỉnh -->
    <circle cx="270" cy="30" r="4.5" fill="#1e293b" /><text x="265" y="18" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <circle cx="110" cy="230" r="4.5" fill="#1e293b" /><text x="90" y="244" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>
    <circle cx="430" cy="230" r="4.5" fill="#1e293b" /><text x="440" y="244" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>
    <circle cx="270" cy="230" r="3.5" fill="#64748b" /><text x="265" y="252" font-family="sans-serif" font-weight="bold" font-size="15" fill="#64748b">H</text>

    <!-- Chú thích -->
    <text x="145" y="115" font-family="sans-serif" font-size="13" fill="#dc2626">Cạnh bên AB</text>
    <text x="350" y="115" font-family="sans-serif" font-size="13" fill="#dc2626">Cạnh bên AC</text>
    <text x="240" y="272" font-family="sans-serif" font-size="13" fill="#2563eb">Cạnh đáy BC</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 1: Mô hình tam giác $ABC$ cân tại đỉnh $A$ với hai góc đáy bằng nhau</em></p>
</div>

> [!NOTE]
> **ĐỊNH LÝ 1 (Tính chất hai góc ở đáy):**
> Trong một tam giác cân, **hai góc ở đáy bằng nhau**.
> $$\triangle ABC \text{ cân tại } A \implies \widehat{B} = \widehat{C}.$$

**Chứng minh định lý 1 bằng trường hợp bằng nhau c.c.c / c.g.c:**
Gọi $H$ là trung điểm của cạnh đáy $BC$ ($HB = HC$). Nối $A$ với $H$.
Xét $\triangle ABH$ và $\triangle ACH$ có:
- $AB = AC$ ($\triangle ABC$ cân tại $A$);
- $HB = HC$ ($H$ là trung điểm $BC$);
- Cạnh $AH$ chung.
$\implies \triangle ABH = \triangle ACH$ (c.c.c).
$\implies \widehat{B} = \widehat{C}$ (hai góc tương ứng).

Từ đó ta có công thức tính nhanh số đo các góc trong tam giác cân:
- Biết góc ở đỉnh $\widehat{A}$: $\widehat{B} = \widehat{C} = \frac{180^\circ - \widehat{A}}{2}$.
- Biết một góc ở đáy $\widehat{B}$: $\widehat{A} = 180^\circ - 2\widehat{B}$.

> [!TIP]
> **ĐỊNH LÝ 2 (Dấu hiệu nhận biết tam giác cân):**
> Nếu một tam giác có **hai góc bằng nhau** thì tam giác đó là **tam giác cân**.
> $$\triangle ABC \text{ có } \widehat{B} = \widehat{C} \implies \triangle ABC \text{ cân tại } A.$$

---

### 2. Tam giác đều và Tam giác vuông cân

#### 2.1. Tam giác đều

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Tam giác đều** là tam giác có **ba cạnh bằng nhau**.
> 
> **HỆ QUẢ CỐT LÕI:**
> - Trong một tam giác đều, **ba góc bằng nhau và mỗi góc bằng $60^\circ$**:
>   $$\widehat{A} = \widehat{B} = \widehat{C} = \frac{180^\circ}{3} = 60^\circ.$$
> - **Dấu hiệu nhận biết tam giác đều:**
>   1. Tam giác có $3$ cạnh bằng nhau là tam giác đều.
>   2. Tam giác có $3$ góc bằng nhau là tam giác đều.
>   3. **Tam giác cân có một góc bằng $60^\circ$ là tam giác đều.**

#### 2.2. Tam giác vuông cân

> [!NOTE]
> **ĐỊNH NGHĨA:**
> **Tam giác vuông cân** là tam giác **vừa vuông vừa cân** (có một góc vuông và hai cạnh góc vuông bằng nhau).
> 
> **TÍNH CHẤT GÓC:**
> Trong tam giác vuông cân, hai góc nhọn ở đáy phụ nhau và bằng nhau:
> $$\widehat{B} = \widehat{C} = \frac{90^\circ}{2} = 45^\circ.$$

---

### 3. Đường trung trực của đoạn thẳng

```geometry
type: perpendicular-bisector
```

> [!IMPORTANT]
> **ĐỊNH NGHĨA ĐƯỜNG TRUNG TRỰC:**
> Đường thẳng **vuông góc với một đoạn thẳng tại trung điểm** của nó được gọi là **đường trung trực** của đoạn thẳng đó.
> 
> Đường thẳng $d$ là đường trung trực của đoạn thẳng $AB \iff \begin{cases} d \perp AB \text{ tại } I \\ IA = IB \end{cases}.$

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 520 280" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0);" xmlns="http://www.w3.org/2000/svg">
    <!-- Đoạn thẳng AB -->
    <line x1="80" y1="180" x2="440" y2="180" stroke="#1e293b" stroke-width="3" />
    
    <!-- Đường thẳng d vuông góc tại trung điểm I -->
    <line x1="260" y1="20" x2="260" y2="260" stroke="#2563eb" stroke-width="2.5" />
    <text x="272" y="35" font-family="sans-serif" font-weight="bold" font-size="16" fill="#2563eb">d</text>

    <!-- Điểm I và ký hiệu góc vuông -->
    <circle cx="260" cy="180" r="4" fill="#64748b" />
    <text x="268" y="202" font-family="sans-serif" font-weight="bold" font-size="15" fill="#64748b">I</text>
    <rect x="260" y="166" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5" />

    <!-- Vạch bằng nhau IA = IB -->
    <line x1="168" y1="174" x2="168" y2="186" stroke="#64748b" stroke-width="2" />
    <line x1="172" y1="174" x2="172" y2="186" stroke="#64748b" stroke-width="2" />
    <line x1="348" y1="174" x2="348" y2="186" stroke="#64748b" stroke-width="2" />
    <line x1="352" y1="174" x2="352" y2="186" stroke="#64748b" stroke-width="2" />

    <!-- Điểm M trên d -->
    <circle cx="260" cy="70" r="5" fill="#dc2626" />
    <text x="275" y="65" font-family="sans-serif" font-weight="bold" font-size="16" fill="#dc2626">M</text>

    <!-- Các đoạn MA, MB nối từ M -->
    <line x1="260" y1="70" x2="80" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" />
    <line x1="260" y1="70" x2="440" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" />

    <!-- Đỉnh A và B -->
    <circle cx="80" cy="180" r="4.5" fill="#1e293b" /><text x="60" y="185" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <circle cx="440" cy="180" r="4.5" fill="#1e293b" /><text x="450" y="185" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>

    <!-- Nhãn bằng nhau MA = MB -->
    <text x="150" y="115" font-family="sans-serif" font-size="13" fill="#dc2626">MA</text>
    <text x="360" y="115" font-family="sans-serif" font-size="13" fill="#dc2626">MB</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 2: Đường trung trực $d$ của đoạn thẳng $AB$ và điểm $M$ luôn có $MA = MB$</em></p>
</div>

#### Hai định lý vàng của đường trung trực

> [!IMPORTANT]
> **ĐỊNH LÝ THUẬN (Tính chất của điểm thuộc đường trung trực):**
> Điểm nằm trên đường trung trực của một đoạn thẳng thì **cách đều hai mút** của đoạn thẳng đó.
> $$M \in d \implies MA = MB.$$
> 
> **ĐỊNH LÝ ĐẢO (Dấu hiệu nhận biết điểm thuộc đường trung trực):**
> Điểm cách đều hai mút của một đoạn thẳng thì **nằm trên đường trung trực** của đoạn thẳng đó.
> $$MA = MB \implies M \text{ nằm trên đường trung trực của } AB.$$

**Ý nghĩa hình học to lớn:**
Tập hợp tất cả các điểm trong mặt phẳng cách đều hai điểm cố định $A$ và $B$ chính là **đường trung trực của đoạn thẳng $AB$**.
Nếu ta tìm được hai điểm phân biệt $M$ và $N$ cùng cách đều $A$ và $B$ ($MA = MB$ và $NA = NB$), thì đường thẳng $MN$ chính là **đường trung trực của đoạn thẳng $AB$**!

---

### 4. Mối liên hệ mật thiết giữa Tam giác cân và Đường trung trực

Trong tam giác $ABC$ cân tại $A$:
- Vì $AB = AC$, theo định lý đảo, đỉnh $A$ **thuộc đường trung trực** của cạnh đáy $BC$.
- Gọi $H$ là trung điểm của cạnh đáy $BC$, đoạn thẳng $AH$ thỏa mãn:
  1. $AH$ là **đường trung trực** của đoạn thẳng $BC$.
  2. $AH$ là **đường cao** kẻ từ đỉnh $A$ ($AH \perp BC$).
  3. $AH$ là **đường trung tuyến** ứng với cạnh đáy $BC$.
  4. $AH$ là **tia phân giác** của góc ở đỉnh $\widehat{BAC}$ ($\widehat{BAH} = \widehat{CAH}$).

> [!NOTE]
> Trong một tam giác cân, **bốn đường xuất phát từ đỉnh đối diện với cạnh đáy** (đường cao, đường trung tuyến, đường phân giác, đường trung trực) **trùng nhau hoàn toàn thành một đường thẳng duy nhất**.

---

## II. Các dạng bài tập điển hình và phương pháp giải

### Dạng 1: Tính số đo các góc trong tam giác cân và tam giác đều

#### Ví dụ 1
Cho tam giác $ABC$ cân tại $A$.
a) Biết $\widehat{A} = 50^\circ$, tính số đo góc $\widehat{B}$ và $\widehat{C}$.
b) Biết $\widehat{B} = 72^\circ$, tính số đo góc $\widehat{A}$.
c) Góc ngoài tại đỉnh $A$ của tam giác $ABC$ có mối liên hệ gì với hai góc ở đáy $\widehat{B}$ và $\widehat{C}$?

**Lời giải:**
a) Vì tam giác $ABC$ cân tại $A$ nên $\widehat{B} = \widehat{C}$. Áp dụng định lý tổng ba góc trong tam giác:
$$\widehat{B} = \widehat{C} = \frac{180^\circ - \widehat{A}}{2} = \frac{180^\circ - 50^\circ}{2} = \frac{130^\circ}{2} = 65^\circ.$$

b) Vì $\widehat{B} = 72^\circ \implies \widehat{C} = 72^\circ$. Góc ở đỉnh $A$ là:
$$\widehat{A} = 180^\circ - (\widehat{B} + \widehat{C}) = 180^\circ - (72^\circ + 72^\circ) = 180^\circ - 144^\circ = 36^\circ.$$

c) Gọi góc ngoài tại đỉnh $A$ là $\widehat{A_{\text{ngoài}}}$. Theo tính chất góc ngoài của tam giác:
$$\widehat{A_{\text{ngoài}}} = \widehat{B} + \widehat{C}.$$
Vì $\widehat{B} = \widehat{C}$ nên:
$$\widehat{A_{\text{ngoài}}} = 2\widehat{B} = 2\widehat{C}.$$
*Ghi nhớ:* Góc ngoài tại đỉnh của tam giác cân bằng hai lần một góc ở đáy.

---

### Dạng 2: Chứng minh một tam giác là tam giác cân, tam giác đều

#### Phương pháp giải
Để chứng minh tam giác $ABC$ cân tại $A$, ta có thể dùng một trong hai cách:
1. **Cách 1 (Về cạnh):** Chứng minh $AB = AC$ (thường gắn vào hai tam giác bằng nhau chứa hai cạnh này).
2. **Cách 2 (Về góc):** Chứng minh $\widehat{B} = \widehat{C}$ (dùng định lý tổng ba góc, góc so le trong, góc đối đỉnh...).

#### Ví dụ 2
Cho tam giác $ABC$ cân tại $A$. Trên cạnh $AB$ lấy điểm $D$, trên cạnh $AC$ lấy điểm $E$ sao cho $AD = AE$.
a) Chứng minh rằng $BE = CD$.
b) Gọi $K$ là giao điểm của $BE$ và $CD$. Chứng minh rằng tam giác $KBC$ là tam giác cân.

**Lời giải:**
a) Xét $\triangle ABE$ và $\triangle ACD$ có:
- $AB = AC$ ($\triangle ABC$ cân tại $A$);
- $\widehat{A}$ là góc chung;
- $AE = AD$ (theo giả thiết).
Suy ra $\triangle ABE = \triangle ACD$ (c.g.c).
$\implies BE = CD$ (hai cạnh tương ứng).

b) Từ $\triangle ABE = \triangle ACD \implies \widehat{ABE} = \widehat{ACD}$ (hai góc tương ứng).
Mặt khác, vì $\triangle ABC$ cân tại $A$ nên $\widehat{ABC} = \widehat{ACB}$.
Ta có:
$$\widehat{KBC} = \widehat{ABC} - \widehat{ABE}$$
$$\widehat{KCB} = \widehat{ACB} - \widehat{ACD}$$
Do đó $\widehat{KBC} = \widehat{KCB}$.
Tam giác $KBC$ có hai góc ở đáy bằng nhau nên $\triangle KBC$ là tam giác cân tại $K$.

---

### Dạng 3: Vận dụng tính chất đường trung trực để chứng minh đoạn thẳng bằng nhau

#### Ví dụ 3
Cho tam giác nhọn $ABC$. Đường trung trực của cạnh $AB$ cắt cạnh $BC$ tại điểm $M$.
a) Biết $AC = 7\text{ cm}$ và $BC = 11\text{ cm}$, tính chu vi tam giác $AMC$.
b) Biết $\widehat{B} = 35^\circ$, tính số đo góc $\widehat{BAM}$ và góc $\widehat{AMC}$.

**Lời giải:**
a) Vì điểm $M$ thuộc đường trung trực của đoạn thẳng $AB$, theo định lý thuận của đường trung trực:
$$MA = MB.$$
Chu vi của tam giác $AMC$ là:
$$C_{\triangle AMC} = AM + MC + AC = MB + MC + AC = BC + AC = 11 + 7 = 18\text{ cm}.$$

b) Vì $MA = MB$, tam giác $MAB$ cân tại $M$.
Suy ra $\widehat{BAM} = \widehat{B} = 35^\circ$.
Góc $\widehat{AMC}$ là góc ngoài tại đỉnh $M$ của $\triangle MAB$ nên:
$$\widehat{AMC} = \widehat{B} + \widehat{BAM} = 35^\circ + 35^\circ = 70^\circ.$$

---

### Dạng 4: Chứng minh một đường thẳng là đường trung trực của đoạn thẳng

#### Phương pháp giải
Để chứng minh đường thẳng $d$ là đường trung trực của đoạn thẳng $AB$, có 2 cách chính:
1. **Theo định nghĩa:** Chứng minh $d$ đi qua trung điểm của $AB$ và $d \perp AB$.
2. **Theo định lý đảo:** Tìm hai điểm $M$ và $N$ phân biệt thuộc đường thẳng $d$ sao cho $MA = MB$ và $NA = NB$. Khi đó $MN$ chính là đường trung trực của $AB$.

#### Ví dụ 4 (Mô hình hình con diều - Kite)
Cho đoạn thẳng $AB$. Lấy điểm $C$ và điểm $D$ nằm về hai phía đối nhau so với đường thẳng $AB$ sao cho $CA = CB$ và $DA = DB$. Chứng minh rằng đường thẳng $CD$ là đường trung trực của đoạn thẳng $AB$.

**Lời giải:**
- Vì $CA = CB$, điểm $C$ cách đều hai đầu mút $A$ và $B$. Theo định lý đảo về đường trung trực, điểm $C$ thuộc đường trung trực của đoạn thẳng $AB$.
- Vì $DA = DB$, điểm $D$ cách đều hai đầu mút $A$ và $B$. Theo định lý đảo về đường trung trực, điểm $D$ thuộc đường trung trực của đoạn thẳng $AB$.
Vì $C$ và $D$ là hai điểm phân biệt cùng nằm trên đường trung trực của $AB$, nên đường thẳng nối hai điểm $C$ và $D$ chính là đường trung trực của đoạn thẳng $AB$.
Do đó $CD$ vuông góc với $AB$ tại trung điểm của $AB$.

---

## III. 5 Chuyên đề bồi dưỡng học sinh giỏi Olympic

### Chuyên đề 1: Kỹ thuật dựng tam giác đều phụ để tính góc kinh điển ($20^\circ - 80^\circ - 80^\circ$)

Trong các kỳ thi học sinh giỏi toán cấp tỉnh và Olympic quốc tế, bài toán tam giác cân $ABC$ có $\widehat{A} = 20^\circ$ và $\widehat{B} = \widehat{C} = 80^\circ$ là một bài toán huyền thoại. Các phương pháp chứng minh thông thường bằng cộng trừ góc thuần túy đều dẫn tới bế tắc. Chìa khóa vàng giải quyết bài toán này là: **Dựng thêm một tam giác đều phụ**.

**Bài toán:** Cho tam giác $ABC$ cân tại $A$ có $\widehat{A} = 20^\circ$. Trên nửa mặt phẳng bờ $BC$ chứa điểm $A$, dựng tam giác đều $BCM$. Chứng minh rằng tia $AM$ là tia phân giác của góc $\widehat{BAC}$ và tính số đo góc $\widehat{MAC}$.

**Phân tích & Lời giải:**
1. Vì $\triangle BCM$ đều nên $BM = CM = BC$ và $\widehat{MBC} = \widehat{MCB} = 60^\circ$.
2. Tam giác $ABC$ cân tại $A$ có $\widehat{A} = 20^\circ \implies \widehat{ABC} = \widehat{ACB} = \frac{180^\circ - 20^\circ}{2} = 80^\circ$.
3. Do đó:
   $$\widehat{ABM} = \widehat{ABC} - \widehat{MBC} = 80^\circ - 60^\circ = 20^\circ.$$
   $$\widehat{ACM} = \widehat{ACB} - \widehat{MCB} = 80^\circ - 60^\circ = 20^\circ.$$
4. Xét $\triangle ABM$ và $\triangle ACM$ có:
   - $AB = AC$ ($\triangle ABC$ cân tại $A$);
   - $BM = CM$ ($\triangle BCM$ đều);
   - Cạnh $AM$ chung.
   $\implies \triangle ABM = \triangle ACM$ (c.c.c).
   $\implies \widehat{BAM} = \widehat{CAM} = \frac{\widehat{A}}{2} = \frac{20^\circ}{2} = 10^\circ$.
   Vậy tia $AM$ là tia phân giác của góc $\widehat{A}$ và góc $\widehat{MAC} = 10^\circ$.

---

### Chuyên đề 2: Điểm Fermat và Bài toán vị trí đặt trạm trung tâm viễn thông

**Bài toán thực tế:** Ba khu dân cư $A, B, C$ nằm tại ba đỉnh của một tam giác có các góc đều nhỏ hơn $120^\circ$. Một công ty viễn thông cần đặt một trạm chuyển tiếp $F$ sao cho **tổng độ dài đường dây cáp nối từ trạm tới cả ba khu dân cư là ngắn nhất**:
$$S = FA + FB + FC \to \min.$$

Điểm $F$ tối ưu này được nhà toán học Pierre de Fermat tìm ra vào thế kỷ XVII. Bằng cách dựng ra phía ngoài tam giác ba tam giác đều $ABC', BCA', CAB'$, các đoạn thẳng $AA', BB', CC'$ đồng quy tại đúng điểm $F$ (gọi là **Điểm Fermat**). Tại điểm này, các góc nhìn nối tới ba đỉnh đều bằng nhau:
$$\widehat{AFB} = \widehat{BFC} = \widehat{CFA} = 120^\circ.$$
Đây là nền tảng của mạng lưới đường truyền mạng trục viễn thông và thiết kế mạng lưới đường ống cấp thoát nước đô thị hiện đại.

---

### Chuyên đề 3: Bất đẳng thức đường trung trực và Bài toán tìm đường ngắn nhất của Heron

**Bài toán người cưỡi ngựa bên bờ sông (Heron xứ Alexandria):**
Một người cưỡi ngựa từ vị trí trang trại $A$ cần đi ra bờ sông thẳng $d$ để cho ngựa uống nước tại điểm $M$, sau đó trở về trang trại $B$ nằm cùng phía với bờ sông. Hãy tìm vị trí điểm $M$ trên bờ sông $d$ sao cho tổng quãng đường $AM + MB$ là ngắn nhất.

**Phương pháp giải bằng đường trung trực:**
1. Lấy điểm $A'$ đối xứng với $A$ qua đường thẳng $d$ (tức là $d$ là đường trung trực của đoạn thẳng $AA'$).
2. Khi đó với mọi điểm $M$ trên bờ sông $d$, ta luôn có:
   $$MA = MA'.$$
3. Do đó tổng quãng đường đi là:
   $$AM + MB = MA' + MB.$$
4. Theo bất đẳng thức tam giác, đối với ba điểm $A', M, B$:
   $$MA' + MB \ge A'B.$$
   Dấu bằng xảy ra khi và chỉ khi ba điểm $A', M, B$ thẳng hàng, tức là điểm $M$ chính là giao điểm của đường thẳng nối $A'B$ với bờ sông $d$!
Nguyên lý này giải thích định luật phản xạ ánh sáng (tia sáng truyền theo đường ngắn nhất) và là cơ sở thiết kế thấu kính quang học, gương chiếu hậu ô tô.

---

### Chuyên đề 4: Ba đường trung trực đồng quy trong tam giác

> [!IMPORTANT]
> **ĐỊNH LÝ ĐỒNG QUY CỦA BA ĐƯỜNG TRUNG TRỰC:**
> Trong một tam giác, **ba đường trung trực của ba cạnh đồng quy tại một điểm duy nhất**. Điểm này **cách đều ba đỉnh** của tam giác và là **tâm của đường tròn ngoại tiếp tam giác đó**.

**Chứng minh ngắn gọn:**
Gọi $O$ là giao điểm của hai đường trung trực của cạnh $AB$ và cạnh $AC$.
- Vì $O$ thuộc trung trực của $AB \implies OA = OB$.
- Vì $O$ thuộc trung trực của $AC \implies OA = OC$.
Từ đó suy ra $OB = OC$. Theo định lý đảo của đường trung trực, điểm $O$ bắt buộc phải nằm trên đường trung trực của cạnh còn lại $BC$.
Vậy ba đường trung trực của tam giác cùng đi qua điểm $O$, và ta có:
$$OA = OB = OC = R.$$

---

### Chuyên đề 5: Khám phá kiến trúc truyền thống vì kèo mái nhà Việt Nam

Trong kiến trúc nhà gỗ cổ truyền Việt Nam (nhà rường Huế, nhà kẻ truyền Bắc Bộ), bộ vì kèo mái nhà luôn có dạng một **tam giác cân lớn**:
- Hai thanh kèo đóng vai trò hai cạnh bên $AB, AC$.
- Câu đầu (thanh xà ngang) đóng vai trò cạnh đáy $BC$.
- Thanh trụ tim (cột trốn dựng đứng từ trung điểm câu đầu lên đỉnh nóc) nằm trên **đường trung trực của cạnh đáy**, đảm bảo giữ đỉnh nóc không bị lệch tâm, triệt tiêu hoàn toàn lực xô ngang do gió bão nhiệt đới gây ra.

---

## IV. Luyện tập tương tác — 10 Quiz kiểm tra năng lực

```quiz
type: choice
question: 'Tam giác cân ABC có AB = AC = 8 cm và góc ở đỉnh A = 40°. Số đo của mỗi góc ở đáy là bao nhiêu?'
options:
  - '70°'
  - '65°'
  - '60°'
  - '140°'
answer: 1
hint: 'Hai góc ở đáy bằng nhau và tổng ba góc trong một tam giác bằng 180°.'
explanation: 'Hai góc ở đáy B = C = (180° - 40°) / 2 = 140° / 2 = 70°.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây về tam giác đều là SAI?'
options:
  - 'Tam giác đều có ba cạnh bằng nhau'
  - 'Tam giác đều có ba góc bằng nhau và mỗi góc bằng 60°'
  - 'Tam giác cân có một góc bằng 60° là tam giác đều'
  - 'Tam giác vuông có thể là tam giác đều'
answer: 4
hint: 'Tam giác đều có cả ba góc bằng 60°, trong khi tam giác vuông có một góc bằng 90°.'
explanation: 'Tam giác vuông có một góc 90° nên không thể có ba góc cùng bằng 60°. Do đó tam giác vuông không thể là tam giác đều.'
```

```quiz
type: choice
question: 'Đường thẳng d là đường trung trực của đoạn thẳng AB khi và chỉ khi thỏa mãn điều kiện nào?'
options:
  - 'd đi qua trung điểm của đoạn thẳng AB'
  - 'd vuông góc với đoạn thẳng AB'
  - 'd vuông góc với đoạn thẳng AB tại trung điểm của AB'
  - 'd song song với đoạn thẳng AB'
answer: 3
hint: 'Đường trung trực phải vừa vuông góc vừa đi qua trung điểm.'
explanation: 'Theo định nghĩa, đường trung trực của một đoạn thẳng là đường thẳng vuông góc với đoạn thẳng đó tại trung điểm của nó.'
```

```quiz
type: choice
question: 'Cho điểm M nằm trên đường trung trực của đoạn thẳng AB. Biết MA = 9.5 cm. Độ dài đoạn thẳng MB là:'
options:
  - '9.5 cm'
  - '4.75 cm'
  - '19 cm'
  - 'Không xác định được'
answer: 1
hint: 'Điểm nằm trên đường trung trực của đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.'
explanation: 'Theo tính chất đường trung trực, vì M thuộc đường trung trực của AB nên MB = MA = 9.5 cm.'
```

```quiz
type: choice
question: 'Tam giác ABC có góc B = 45° và góc C = 45°. Tam giác ABC là tam giác gì?'
options:
  - 'Tam giác nhọn'
  - 'Tam giác vuông cân tại A'
  - 'Tam giác đều'
  - 'Tam giác tù'
answer: 2
hint: 'Tính số đo góc A trước khi kết luận.'
explanation: 'Góc A = 180° - (45° + 45°) = 90°. Tam giác có góc A = 90° và hai góc đáy B = C = 45° nên là tam giác vuông cân tại A.'
```

```quiz
type: choice
question: 'Cho tam giác ABC cân tại A có một góc bằng 60°. Chu vi của tam giác ABC biết cạnh AB = 5 cm là:'
options:
  - '10 cm'
  - '12 cm'
  - '15 cm'
  - '20 cm'
answer: 3
hint: 'Tam giác cân có một góc bằng 60° thì trở thành tam giác gì?'
explanation: 'Tam giác cân có một góc bằng 60° là tam giác đều. Khi đó ba cạnh bằng nhau: AB = BC = CA = 5 cm. Chu vi là 5 + 5 + 5 = 15 cm.'
```

```quiz
type: choice
question: 'Nếu hai điểm phân biệt M và N cùng cách đều hai mút của đoạn thẳng AB (MA = MB và NA = NB) thì đường thẳng MN là:'
options:
  - 'Đường thẳng song song với AB'
  - 'Đường trung trực của đoạn thẳng AB'
  - 'Đường thẳng trùng với AB'
  - 'Tia phân giác của góc tạo bởi AB'
answer: 2
hint: 'Điểm cách đều hai mút của đoạn thẳng thì nằm trên đường trung trực.'
explanation: 'Theo định lý đảo về đường trung trực, cả hai điểm M và N đều nằm trên đường trung trực của đoạn thẳng AB. Do đó đường thẳng MN chính là đường trung trực của AB.'
```

```quiz
type: choice
question: 'Tam giác ABC cân tại A có góc ở đáy B = 75°. Góc ngoài tại đỉnh A có số đo bằng bao nhiêu?'
options:
  - '30°'
  - '75°'
  - '150°'
  - '105°'
answer: 3
hint: 'Góc ngoài tại một đỉnh của tam giác cân bằng hai lần số đo góc ở đáy.'
explanation: 'Góc ngoài tại đỉnh A bằng tổng hai góc trong không kề với nó: A_ngoài = B + C = 75° + 75° = 150°.'
```

```quiz
type: choice
question: 'Trong tam giác cân ABC (AB = AC), đường thẳng nào sau đây đi qua đỉnh A KHÔNG trùng với các đường còn lại?'
options:
  - 'Đường cao kẻ từ đỉnh A'
  - 'Đường trung tuyến kẻ từ đỉnh A'
  - 'Đường phân giác của góc A'
  - 'Đường trung trực của cạnh bên AB'
answer: 4
hint: 'Các đường trùng nhau xuất phát từ đỉnh A xuống cạnh đáy BC.'
explanation: 'Trong tam giác cân tại A, đường cao, trung tuyến, phân giác kẻ từ A và đường trung trực của cạnh đáy BC trùng nhau. Đường trung trực của cạnh bên AB không đi qua đỉnh A.'
```

```quiz
type: choice
question: 'Ba điểm dân cư A, B, C không thẳng hàng cần xây dựng một trường học liên cấp M sao cho học sinh từ cả ba khu dân cư đi tới trường có quãng đường bằng nhau (MA = MB = MC). Điểm M là:'
options:
  - 'Trung điểm của cạnh lớn nhất'
  - 'Giao điểm của ba đường trung trực của tam giác ABC'
  - 'Giao điểm của ba đường phân giác'
  - 'Trọng tâm của tam giác ABC'
answer: 2
hint: 'Điểm cách đều ba đỉnh của tam giác là giao điểm của các đường trung trực.'
explanation: 'Vì MA = MB nên M nằm trên trung trực của AB; MA = MC nên M nằm trên trung trực của AC. Vậy M là giao điểm của các đường trung trực của tam giác ABC.'
```

---

## V. Tóm tắt và ghi nhớ cốt lõi

<div style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="color: #1d4ed8; margin-top: 0;">✦ BẢNG TỔNG KẾT GHI NHỚ BÀI 16</h4>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
    <li><b>Tam giác cân:</b> Có $2$ cạnh bên bằng nhau $\iff 2$ góc ở đáy bằng nhau.</li>
    <li><b>Tam giác đều:</b> Có $3$ cạnh bằng nhau $\iff 3$ góc bằng nhau $= 60^\circ$. Tam giác cân có $1$ góc $60^\circ$ là tam giác đều.</li>
    <li><b>Tam giác vuông cân:</b> Có $1$ góc $90^\circ$ và $2$ cạnh góc vuông bằng nhau $\implies 2$ góc đáy bằng $45^\circ$.</li>
    <li><b>Đường trung trực của đoạn thẳng:</b> Vuông góc tại trung điểm của đoạn thẳng.</li>
    <li><b>Tính chất 2 chiều:</b> Điểm thuộc đường trung trực $\iff$ cách đều hai đầu mút của đoạn thẳng ($M \in d \iff MA = MB$).</li>
    <li><b>Sự trùng phùng đặc biệt:</b> Trong tam giác cân, đường cao, trung tuyến, phân giác kẻ từ đỉnh và trung trực của đáy là một!</li>
  </ul>
</div>
