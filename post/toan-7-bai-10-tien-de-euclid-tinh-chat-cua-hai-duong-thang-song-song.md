---
title: 'Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song - Lý thuyết, Dạng toán và 5 Chuyên đề Nâng cao'
description: 'Khám phá Tiên đề Euclid và tính chất hai đường thẳng song song: các cặp góc so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau; quan hệ vuông góc và song song; định lý răng cưa zic-zac và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-11'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Tiên đề Euclid
  - Tính chất hai đường thẳng song song
  - Từ vuông góc đến song song
  - Góc so le trong
  - Kết nối tri thức
grade: 7
---

# Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song

Hơn hai nghìn năm trước tại thành Alexandria cổ đại, nhà toán học Hy Lạp lỗi lạc **Euclid** (khoảng 300 năm TCN) đã viết nên bộ sách vĩ đại mang tên **Cơ sở** (*Elements*). Tác phẩm này đã định hình nền tảng tư duy toán học của toàn nhân loại: xây dựng một hệ thống kiến thức đồ sộ bắt đầu từ những chân lý hiển nhiên ban đầu không cần chứng minh, được gọi là các **tiên đề**.

Trong số các tiên đề của mình, **Tiên đề thứ năm về đường thẳng song song** (sau này được phát biểu ngắn gọn là **Tiên đề Euclid**) đã trở thành một trong những viên ngọc quý giá và gây tranh luận sôi nổi nhất lịch sử khoa học. Từ tiên đề này, toàn bộ các tính chất kỳ diệu về các cặp góc so le trong bằng nhau, góc đồng vị bằng nhau, góc trong cùng phía bù nhau, cùng định lý tổng ba góc của một tam giác bằng $180^\circ$ đều được suy diễn một cách chặt chẽ tuyệt đối!

Bài học hôm nay sẽ giúp các em làm chủ **Tiên đề Euclid**, khai thác trọn vẹn **tính chất của hai đường thẳng song song** để tính toán góc, đồng thời trang bị $5$ chuyên đề bồi dưỡng học sinh giỏi với các kỹ thuật hình học đỉnh cao như chứng minh ba điểm thẳng hàng và định lý răng cưa zic-zac!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 10: TIÊN ĐỀ EUCLID & TÍNH CHẤT HAI ĐƯỜNG THẲNG SONG SONG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Tiên đề Euclid</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Qua một điểm ở ngoài đường thẳng, <b>chỉ có MỘT</b> đường thẳng song song với đường thẳng đó.<br>• Ứng dụng cốt lõi: Chứng minh tính duy nhất, chứng minh $3$ điểm thẳng hàng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tính chất hai đường //</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Khi đã có $a \parallel b$ và cát tuyến $c$ cắt cả hai:<br>• Hai góc <b>so le trong BẰNG NHAU</b>.<br>• Hai góc <b>đồng vị BẰNG NHAU</b>.<br>• Hai góc <b>trong cùng phía BÙ NHAU</b> ($= 180^\circ$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Quan hệ $\perp$ và $\parallel$</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đường thẳng $\perp$ một trong hai đường thẳng song song thì $\perp$ đường thẳng kia:<br>$c \perp a, \; a \parallel b \implies c \perp b$<br>• Hai đường thẳng phân biệt cùng $\parallel$ đường thứ ba thì $\parallel$ nhau (Bắc cầu).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật Olympic</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chứng minh $3$ điểm thẳng hàng bằng Tiên đề Euclid.<br>• Định lý "Răng cưa" (tổng góc rẽ trái $=$ tổng góc rẽ phải).<br>• Xây dựng định lý tổng $3$ góc tam giác $= 180^\circ$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Hãy kiểm tra lại vốn kiến thức nền tảng của mình qua $5$ câu hỏi nhanh sau:

1. **Dấu hiệu nhận biết hai đường thẳng song song (Bài 9):** Muốn chứng minh hai đường thẳng $a$ và $b$ song song, ta cần chỉ ra điều gì về các góc tạo bởi cát tuyến $c$?
2. **Quan hệ kề bù:** Nếu hai góc kề bù nhau và một góc bằng $68^\circ$, hãy tính số đo góc còn lại.
3. **Quan hệ đối đỉnh:** Hai góc đối đỉnh có tính chất gì?
4. **Trực giác hình học:** Lấy một điểm $M$ nằm ngoài đường thẳng $d$. Em có thể vẽ được bao nhiêu đường thẳng đi qua $M$ và song song với $d$?
5. **Cùng vuông góc:** Cho hai đường thẳng phân biệt $x$ và $y$ cùng vuông góc với đường thẳng $z$. Hai đường thẳng $x$ và $y$ có mối quan hệ gì với nhau?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** Cần chỉ ra một trong các điều kiện: một cặp góc so le trong bằng nhau; HOẶC một cặp góc đồng vị bằng nhau; HOẶC một cặp góc trong cùng phía bù nhau; HOẶC cùng vuông góc với một đường thẳng thứ ba.
2. **Trả lời:** Hai góc kề bù có tổng số đo bằng $180^\circ$, do đó góc còn lại có số đo là: $180^\circ - 68^\circ = 112^\circ$.
3. **Trả lời:** Hai góc đối đỉnh thì luôn bằng nhau.
4. **Trả lời:** Theo trực quan vẽ hình bằng thước kẻ và êke, ta chỉ vẽ được **đúng một** đường thẳng duy nhất đi qua $M$ và song song với $d$.
5. **Trả lời:** Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì song song với nhau: $x \parallel y$.
</details>

---

## I. Lý thuyết trọng tâm

### 1. Tiên đề Euclid về đường thẳng song song

Trong toán học, **tiên đề** (axiom/postulate) là một mệnh đề được thừa nhận là đúng mà không thể và không cần phải chứng minh, dùng làm xuất phát điểm để xây dựng nên toàn bộ hệ thống định lý phía sau.

> [!IMPORTANT]
> **TIÊN ĐỀ EUCLID:**
> **Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.**

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 520 220" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Đường thẳng a -->
    <line x1="50" y1="160" x2="470" y2="160" stroke="#2563eb" stroke-width="3" />
    <text x="480" y="165" font-family="sans-serif" font-weight="bold" font-size="18" fill="#2563eb">a</text>
    
    <!-- Điểm M -->
    <circle cx="260" cy="70" r="5" fill="#dc2626" />
    <text x="255" y="55" font-family="sans-serif" font-weight="bold" font-size="18" fill="#dc2626">M</text>

    <!-- Đường thẳng b song song với a đi qua M -->
    <line x1="50" y1="70" x2="470" y2="70" stroke="#047857" stroke-width="3" stroke-dasharray="8 4" />
    <text x="480" y="75" font-family="sans-serif" font-weight="bold" font-size="18" fill="#047857">b (duy nhất, b // a)</text>

    <!-- Một đường thẳng d khác đi qua M -->
    <line x1="120" y1="20" x2="400" y2="190" stroke="#94a3b8" stroke-width="2" />
    <text x="410" y="195" font-family="sans-serif" font-size="14" fill="#64748b">d (cắt a)</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><b>Hình 1:</b> Qua điểm $M$ ngoài $a$, đường thẳng $b \parallel a$ là duy nhất. Mọi đường thẳng khác đi qua $M$ đều cắt $a$.</p>
</div>

#### Ý nghĩa hình học sâu sắc của Tiên đề Euclid:
1. **Tính tồn tại:** Luôn vẽ được ít nhất một đường thẳng đi qua $M$ và song song với $a$.
2. **Tính duy nhất:** Không thể tồn tại đường thẳng thứ hai cũng đi qua $M$ mà song song với $a$. Nếu qua $M$ có hai đường thẳng $b$ và $b'$ cùng song song với $a$ thì $b$ và $b'$ phải **trùng nhau** ($b \equiv b'$).

---

### 2. Hai hệ quả trực tiếp từ Tiên đề Euclid

#### Hệ quả 1: Tính chất bắc cầu của quan hệ song song
> [!NOTE]
> **Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.**
> 
> $$\begin{cases} a \parallel c \\ b \parallel c \\ a \neq b \end{cases} \implies a \parallel b.$$

*Chứng minh:* Giả sử ngược lại $a$ không song song với $b$, tức là $a$ cắt $b$ tại một điểm $M$. Khi đó qua điểm $M$ có hai đường thẳng phân biệt $a$ và $b$ cùng song song với đường thẳng $c$. Điều này mâu thuẫn trực tiếp với Tiên đề Euclid! Vậy giả thiết phản chứng là sai, suy ra $a \parallel b$.

#### Hệ quả 2: Cắt một đường thì cắt đường còn lại
> [!NOTE]
> **Nếu một đường thẳng cắt một trong hai đường thẳng song song thì nó cũng cắt đường thẳng kia.**
> 
> Nếu $a \parallel b$ và đường thẳng $d$ cắt $a$ tại điểm $M$, thì $d$ cũng cắt đường thẳng $b$.

*Chứng minh:* Giả sử $d$ không cắt $b$, nghĩa là $d \parallel b$. Nhưng khi đó qua điểm $M$ ngoài đường thẳng $b$ có hai đường thẳng phân biệt là $a$ và $d$ cùng song song với $b$, trái với Tiên đề Euclid! Vậy $d$ bắt buộc phải cắt $b$.

---

### 3. Tính chất của hai đường thẳng song song

Trong khi **dấu hiệu nhận biết** (Bài 9) đi theo chiều: *từ góc bằng nhau suy ra hai đường thẳng song song*, thì **tính chất** của hai đường thẳng song song đi theo chiều ngược lại: *khi đã biết hai đường thẳng song song, ta suy ra được số đo của tất cả các góc!*

> [!IMPORTANT]
> **ĐỊNH LÝ (TÍNH CHẤT HAI ĐƯỜNG THẲNG SONG SONG):**
> Nếu một đường thẳng $c$ cắt hai đường thẳng song song $a$ và $b$ thì:
> 1. **Hai góc so le trong bằng nhau:**
>    $$\widehat{A_3} = \widehat{B_1}, \quad \widehat{A_4} = \widehat{B_2}.$$
> 2. **Hai góc đồng vị bằng nhau:**
>    $$\widehat{A_1} = \widehat{B_1}, \quad \widehat{A_2} = \widehat{B_2}, \quad \widehat{A_3} = \widehat{B_3}, \quad \widehat{A_4} = \widehat{B_4}.$$
> 3. **Hai góc trong cùng phía bù nhau (tổng bằng $180^\circ$):**
>    $$\widehat{A_4} + \widehat{B_1} = 180^\circ, \quad \widehat{A_3} + \widehat{B_2} = 180^\circ.$$

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 520 280" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <line x1="50" y1="80" x2="470" y2="80" stroke="#2563eb" stroke-width="3" />
    <text x="480" y="85" font-family="sans-serif" font-weight="bold" font-size="18" fill="#2563eb">a</text>
    
    <line x1="50" y1="200" x2="470" y2="200" stroke="#2563eb" stroke-width="3" />
    <text x="480" y="205" font-family="sans-serif" font-weight="bold" font-size="18" fill="#2563eb">b</text>
    
    <line x1="130" y1="20" x2="350" y2="260" stroke="#dc2626" stroke-width="3" />
    <text x="360" y="265" font-family="sans-serif" font-weight="bold" font-size="18" fill="#dc2626">c</text>

    <circle cx="185" cy="80" r="5" fill="#1e293b" />
    <text x="160" y="70" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1e293b">A</text>
    
    <circle cx="295" cy="200" r="5" fill="#1e293b" />
    <text x="315" y="220" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1e293b">B</text>

    <!-- Cặp góc so le trong bằng nhau (màu cam nhạt) -->
    <text x="145" y="110" font-family="sans-serif" font-weight="bold" font-size="16" fill="#d97706">A₃ (α)</text>
    <text x="325" y="180" font-family="sans-serif" font-weight="bold" font-size="16" fill="#d97706">B₁ (α)</text>

    <!-- Cặp góc trong cùng phía bù nhau -->
    <text x="215" y="110" font-family="sans-serif" font-weight="bold" font-size="16" fill="#2563eb">A₄ (180°-α)</text>
    <text x="245" y="180" font-family="sans-serif" font-weight="bold" font-size="16" fill="#2563eb">B₂ (180°-α)</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><b>Hình 2:</b> Khi $a \parallel b$, trong $8$ góc tạo thành chỉ có đúng $2$ giá trị số đo góc: $\alpha$ và $180^\circ - \alpha$.</p>
</div>

---

### 4. Quan hệ giữa tính vuông góc và tính song song

> [!NOTE]
> **ĐỊNH LÝ TỪ VUÔNG GÓC ĐẾN SONG SONG (CHIỀU SUY DIỄN THUẬN):**
> Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.
> 
> $$\begin{cases} a \parallel b \\ c \perp a \end{cases} \implies c \perp b.$$

*Chứng minh:* Vì $c \perp a$ tại điểm $A$, nên góc tạo bởi $c$ và $a$ bằng $90^\circ$. Vì $a \parallel b$, góc đồng vị tương ứng tại giao điểm của $c$ với $b$ cũng bằng $90^\circ$. Do đó $c \perp b$.

---

## II. Bảng so sánh mấu chốt & Các cạm bẫy tư duy

### 1. Phân biệt Dấu hiệu nhận biết và Tính chất

Rất nhiều học sinh THCS nhầm lẫn giữa hai khái niệm này khi trình bày bài giải. Hãy xem bảng đối chiếu sau:

| Tiêu chí so sánh | Dấu hiệu nhận biết (Bài 9) | Tính chất (Bài 10) |
| :--- | :--- | :--- |
| **Giả thiết ban đầu** | Đã biết mối quan hệ góc (so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau) | **Đã biết hai đường thẳng song song** ($a \parallel b$) |
| **Kết luận suy ra** | Hai đường thẳng **song song** ($a \parallel b$) | Các góc **bằng nhau** hoặc **bù nhau** ($\widehat{A_3} = \widehat{B_1}$,...) |
| **Mục đích sử dụng** | **Chứng minh song song** | **Tính số đo góc** hoặc tính toán các đoạn thẳng |
| **Ví dụ câu lệnh** | *"Vì $\widehat{A_1} = \widehat{B_1}$ (đồng vị) $\implies a \parallel b$"* | *"Vì $a \parallel b \implies \widehat{A_1} = \widehat{B_1}$ (đồng vị)"* |

---

### 2. Bốn cạm bẫy học sinh cần cảnh giác cao độ

> [!WARNING]
> **CẠM BẪY 1: Nhầm chiều suy diễn giữa Dấu hiệu và Tính chất**
> Bài toán yêu cầu tính góc khi đã cho $a \parallel b$, nhưng học sinh lại ghi: *"Theo dấu hiệu nhận biết hai đường thẳng song song, ta có $\widehat{A_3} = \widehat{B_1}$"*.
> - **Cách viết chuẩn:** Phải ghi *"Vì $a \parallel b$, theo **tính chất** của hai đường thẳng song song, suy ra $\widehat{A_3} = \widehat{B_1}$ (hai góc so le trong)"*.

> [!WARNING]
> **CẠM BẪY 2: Tự cho hai góc bằng nhau khi chưa có song song**
> Khi hình vẽ chưa chứng minh $a \parallel b$, học sinh thấy hai góc nằm ở vị trí so le trong liền tự động suy ra chúng bằng nhau.
> - **Ghi nhớ:** Hai góc ở vị trí so le trong chỉ bằng nhau **KHI VÀ CHỈ KHI** hai đường thẳng đó song song!

> [!WARNING]
> **CẠM BẪY 3: Quên tiên đề Euclid khi chứng minh 3 điểm thẳng hàng**
> Để chứng minh ba điểm $A, M, B$ thẳng hàng, một phương pháp rất kinh điển là chứng minh cả hai đường thẳng $MA$ và $MB$ cùng đi qua $M$ và cùng song song với một đường thẳng $d$. Nhờ Tiên đề Euclid (qua $M$ chỉ có $1$ đường thẳng duy nhất song song với $d$), ta suy ra $MA$ và $MB$ trùng nhau, từ đó $A, M, B$ thẳng hàng.

> [!WARNING]
> **CẠM BẪY 4: Khẳng định sai về số lượng góc trong cùng phía**
> Hai góc trong cùng phía của hai đường thẳng song song chỉ bằng nhau khi và chỉ khi mỗi góc bằng $90^\circ$ (hai đường thẳng vuông góc với cát tuyến). Trong mọi trường hợp khác, chúng **bù nhau** chứ **không bằng nhau**!

---

## III. Các dạng toán điển hình & Lời giải chi tiết

### Dạng 1: Tính số đo các góc khi biết hai đường thẳng song song

**Phương pháp giải:**
1. Từ giả thiết $a \parallel b$, áp dụng tính chất:
   - Các cặp góc so le trong bằng nhau.
   - Các cặp góc đồng vị bằng nhau.
   - Các cặp góc trong cùng phía bù nhau ($= 180^\circ$).
2. Kết hợp với tính chất hai góc kề bù ($= 180^\circ$) hoặc hai góc đối đỉnh (bằng nhau) tại từng đỉnh để tính tất cả các góc còn lại.

#### Ví dụ 1
Cho hai đường thẳng song song $m \parallel n$ bị cắt bởi đường thẳng $d$ tại hai điểm $A$ và $B$. Biết rằng góc $\widehat{A_1} = 65^\circ$ (như hình vẽ bên dưới). Hãy tính số đo của:
a) Góc $\widehat{B_1}$ (góc đồng vị với $\widehat{A_1}$).  
b) Góc $\widehat{B_3}$ (góc so le trong với $\widehat{A_1}$).  
c) Góc $\widehat{B_2}$ (góc trong cùng phía với góc kề bù của $\widehat{A_1}$).  

**Lời giải:**
a) Vì $m \parallel n$, nên hai góc đồng vị bằng nhau:
$$\widehat{B_1} = \widehat{A_1} = 65^\circ.$$

b) Tại đỉnh $A$, hai góc $\widehat{A_1}$ và $\widehat{A_3}$ là hai góc đối đỉnh nên:
$$\widehat{A_3} = \widehat{A_1} = 65^\circ.$$
Vì $m \parallel n$, góc $\widehat{B_1}$ và góc $\widehat{A_3}$ là hai góc so le trong:
$$\widehat{B_3} = \widehat{B_1} = 65^\circ.$$
(Ngoài ra cũng có thể lập luận do $\widehat{B_3}$ và $\widehat{B_1}$ là hai góc đối đỉnh).

c) Hai góc $\widehat{B_1}$ và $\widehat{B_2}$ kề bù với nhau nên:
$$\widehat{B_1} + \widehat{B_2} = 180^\circ \implies 65^\circ + \widehat{B_2} = 180^\circ \implies \widehat{B_2} = 180^\circ - 65^\circ = 115^\circ.$$

---

### Dạng 2: Tính góc trong hình zic-zac bằng phương pháp kẻ đường phụ song song

**Phương pháp giải:**
Khi gặp đường gấp khúc nối giữa hai đường thẳng song song (mô hình chữ V, M, W):
1. **Kẻ qua đỉnh góc gấp khúc một đường thẳng song song** với một trong hai đường thẳng ban đầu.
2. Theo tính chất bắc cầu, đường phụ này sẽ song song với cả hai đường thẳng còn lại.
3. Góc tại đỉnh gãy sẽ được tách thành tổng hoặc hiệu của hai góc nhỏ so le trong (hoặc trong cùng phía).

#### Ví dụ 2
Cho hình vẽ: hai tia $Ax$ và $Cy$ song song với nhau ($Ax \parallel Cy$). Một điểm $B$ nằm giữa hai đường thẳng tạo thành góc $\widehat{xAB} = 40^\circ$ và $\widehat{BCy} = 50^\circ$ (hai tia $Ax, Cy$ cùng hướng sang phải). Tính số đo của góc $\widehat{ABC}$.

```
      A ------------------------> x
       \
        \
         B
        /
       /
      C ------------------------> y
```

**Lời giải:**
Qua điểm $B$, kẻ tia $Bz$ song song với tia $Ax$ và cùng hướng sang phải ($Bz \parallel Ax$).  
Vì $Ax \parallel Cy$ và $Bz \parallel Ax$, theo tính chất bắc cầu suy ra $Bz \parallel Cy$.

- Xét $Ax \parallel Bz$ bị cắt bởi cát tuyến $AB$:
  Hai góc $\widehat{xAB}$ và $\widehat{ABz}$ ở vị trí so le trong nên:
  $$\widehat{ABz} = \widehat{xAB} = 40^\circ.$$

- Xét $Bz \parallel Cy$ bị cắt bởi cát tuyến $BC$:
  Hai góc $\widehat{zBC}$ và $\widehat{BCy}$ ở vị trí so le trong nên:
  $$\widehat{zBC} = \widehat{BCy} = 50^\circ.$$

Vì tia $Bz$ nằm giữa hai tia $BA$ và $BC$ nên:
$$\widehat{ABC} = \widehat{ABz} + \widehat{zBC} = 40^\circ + 50^\circ = 90^\circ.$$
Vậy $\widehat{ABC} = 90^\circ$ (góc vuông).

---

### Dạng 3: Chứng minh hai đường thẳng song song dựa vào tính chất bắc cầu

**Phương pháp giải:**
Để chứng minh $a \parallel b$, nếu không thể trực tiếp so sánh các góc giữa $a$ và $b$, ta tìm một đường thẳng trung gian $c$ rồi chứng minh:
$$\begin{cases} a \parallel c \\ b \parallel c \end{cases} \implies a \parallel b.$$

#### Ví dụ 3
Cho tam giác $ABC$. Qua đỉnh $A$, kẻ đường thẳng $d_1$ song song với cạnh $BC$. Qua một điểm $M$ trên cạnh $AB$, kẻ đường thẳng $d_2$ song song với cạnh $BC$. Chứng minh rằng đường thẳng $d_1$ song song với đường thẳng $d_2$.

**Lời giải:**
Theo giả thiết của bài toán:
- Đường thẳng $d_1 \parallel BC$.
- Đường thẳng $d_2 \parallel BC$.
Vì $d_1$ và $d_2$ là hai đường thẳng phân biệt (đi qua hai điểm khác nhau là $A$ và $M$), và chúng cùng song song với đường thẳng thứ ba là $BC$, nên theo hệ quả của Tiên đề Euclid, ta có:
$$d_1 \parallel d_2.$$

---

### Dạng 4: Chứng minh vuông góc thông qua tính chất song song

**Phương pháp giải:**
Muốn chứng minh đường thẳng $d \perp b$, ta có thể chứng minh:
1. $d \perp a$ tại một giao điểm.
2. $a \parallel b$.
3. Áp dụng định lý: *Đường thẳng vuông góc với một trong hai đường thẳng song song thì vuông góc với đường thẳng còn lại*.

#### Ví dụ 4
Cho hình vẽ: hai đường thẳng $a$ và $b$ song song với nhau. Đường thẳng $c$ vuông góc với đường thẳng $a$ tại điểm $H$. Đường thẳng $c$ cắt đường thẳng $b$ tại điểm $K$.
a) Chứng minh rằng $c \perp b$ tại điểm $K$.  
b) Tính số đo của cả $4$ góc tại đỉnh $K$.

**Lời giải:**
a) Ta có $a \parallel b$ và $c \perp a$ tại điểm $H$.  
Theo định lý về quan hệ giữa tính vuông góc và tính song song, suy ra:
$$c \perp b \text{ (tai K)}.$$

b) Vì $c \perp b$ tại $K$, nên tại đỉnh $K$ tạo thành $4$ góc vuông, mỗi góc đều có số đo bằng $90^\circ$:
$$\widehat{K_1} = \widehat{K_2} = \widehat{K_3} = \widehat{K_4} = 90^\circ.$$

---

### Dạng 5: Bài toán ứng dụng thực tế & Kỹ thuật trắc địa

#### Ví dụ 5 (Đo đạc trắc địa công trình cầu đường)
Hai bờ của một con sông thẳng được coi là hai đường thẳng song song $a$ và $b$.
Một đội kỹ sư trắc địa cắm hai mốc đo đạc $A$ ở bờ bên này và $B$ ở bờ bên kia. Cáp ngắm từ máy toàn đạc tại mốc $A$ tạo với đường bờ sông $a$ một góc nhọn $\alpha = 48^\circ$.
Hỏi tại mốc $B$, góc so le trong $\beta$ tạo bởi đường ngắm $AB$ với đường bờ sông $b$ có số đo bằng bao nhiêu? Nếu một cột mốc đo góc phụ $C$ ở bờ bên kia tạo với đường bờ $b$ một góc trong cùng phía với $\alpha$, thì góc đó bằng bao nhiêu độ?

**Lời giải:**
Vì hai đường bờ sông song song với nhau ($a \parallel b$) và đường ngắm $AB$ là cát tuyến cắt cả hai bờ:
1. Góc $\beta$ và góc $\alpha$ là hai góc so le trong. Theo tính chất hai đường thẳng song song:
   $$\beta = \alpha = 48^\circ.$$
2. Góc trong cùng phía tạo với $\alpha$ phải bù với $\alpha$. Do đó số đo của góc đó là:
   $$180^\circ - \alpha = 180^\circ - 48^\circ = 132^\circ.$$

---

## IV. 10 Câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Tiên đề Euclid khẳng định rằng: Qua một điểm ở ngoài một đường thẳng:'
options:
  - 'A) Có ít nhất hai đường thẳng song song với đường thẳng đó'
  - 'B) Chỉ có một đường thẳng song song với đường thẳng đó'
  - 'C) Có vô số đường thẳng song song với đường thẳng đó'
  - 'D) Không có đường thẳng nào song song với đường thẳng đó'
answer: 2
explanation: 'Tiên đề Euclid: Qua một điểm ở ngoài một đường thẳng, chỉ có duy nhất một đường thẳng song song với đường thẳng đó.'
```

```quiz
type: choice
question: 'Cho a // b, đường thẳng c cắt cả a và b. Nếu một góc so le trong bằng 82^\circ thì góc so le trong còn lại bằng:'
options:
  - 'A) 98^\circ'
  - 'B) 82^\circ'
  - 'C) 164^\circ'
  - 'D) 41^\circ'
answer: 2
explanation: 'Theo tính chất của hai đường thẳng song song, hai góc so le trong luôn bằng nhau. Vì vậy góc còn lại cũng bằng 82^\circ.'
```

```quiz
type: choice
question: 'Cho a // b bị cắt bởi cát tuyến c. Hai góc trong cùng phía có số đo là:'
options:
  - 'A) Luôn luôn bằng nhau'
  - 'B) Luôn luôn đối đỉnh nhau'
  - 'C) Có tổng số đo bằng 180^\circ'
  - 'D) Có tổng số đo bằng 90^\circ'
answer: 3
explanation: 'Theo tính chất của hai đường thẳng song song: Hai góc trong cùng phía bù nhau, tức là tổng số đo của chúng bằng 180^\circ.'
```

```quiz
type: choice
question: 'Nếu đường thẳng c vuông góc với đường thẳng a, và a song song với b thì:'
options:
  - 'A) c song song với b'
  - 'B) c vuông góc với b'
  - 'C) c trùng với b'
  - 'D) c không cắt b'
answer: 2
explanation: 'Định lý từ vuông góc đến song song: Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.'
```

```quiz
type: choice
question: 'Cho ba đường thẳng phân biệt a, b, c. Biết a // c và b // c. Kết luận nào sau đây đúng?'
options:
  - 'A) a cắt b'
  - 'B) a vuông góc với b'
  - 'C) a // b'
  - 'D) a trùng với b'
answer: 3
explanation: 'Tính chất bắc cầu: Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.'
```

```quiz
type: choice
question: 'Cho a // b bị cắt bởi cát tuyến c. Một góc trong cùng phía bằng 3 lần góc trong cùng phía kia. Số đo của góc lớn hơn là:'
options:
  - 'A) 45^\circ'
  - 'B) 90^\circ'
  - 'C) 135^\circ'
  - 'D) 120^\circ'
answer: 3
explanation: 'Gọi góc bé là x thì góc lớn là 3x. Vì hai góc trong cùng phía bù nhau: x + 3x = 180^\circ => 4x = 180^\circ => x = 45^\circ. Góc lớn là 3 * 45^\circ = 135^\circ.'
```

```quiz
type: choice
question: 'Cho hai đường thẳng song song a // b. Đường thẳng d cắt a tại điểm P. Kết luận nào sau đây là ĐÚNG?'
options:
  - 'A) d bắt buộc phải song song với b'
  - 'B) d bắt buộc phải cắt b'
  - 'C) d không bao giờ có điểm chung với b'
  - 'D) d vuông góc với b'
answer: 2
explanation: 'Theo hệ quả của Tiên đề Euclid: Nếu một đường thẳng cắt một trong hai đường thẳng song song thì nó cũng cắt đường thẳng còn lại.'
```

```quiz
type: choice
question: 'Cho tia Ax // By. Điểm O nằm giữa sao cho góc xAO = 30^\circ và góc OBy = 40^\circ (hai tia cùng hướng sang phải). Số đo góc nhọn AOB là:'
options:
  - 'A) 10^\circ'
  - 'B) 70^\circ'
  - 'C) 110^\circ'
  - 'D) 120^\circ'
answer: 2
explanation: 'Kẻ tia Oz // Ax qua O, ta có góc AOz = 30^\circ (so le trong) và góc zOB = 40^\circ (so le trong). Vậy góc AOB = 30^\circ + 40^\circ = 70^\circ.'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là SAI?'
options:
  - 'A) Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau'
  - 'B) Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song với nhau'
  - 'C) Qua một điểm ở ngoài đường thẳng có vô số đường thẳng song song với đường thẳng đó'
  - 'D) Một đường thẳng vuông góc với một trong hai đường thẳng song song thì vuông góc với đường còn lại'
answer: 3
explanation: 'Khẳng định C sai vì theo Tiên đề Euclid, qua một điểm ở ngoài đường thẳng CHỈ CÓ MỘT đường thẳng song song với nó.'
```

```quiz
type: choice
question: 'Cho a // b, một góc đồng vị có số đo bằng (5x - 20)^\circ và góc đồng vị kia có số đo bằng (3x + 10)^\circ. Giá trị của x là:'
options:
  - 'A) x = 10'
  - 'B) x = 15'
  - 'C) x = 20'
  - 'D) x = 25'
answer: 2
explanation: 'Vì a // b nên hai góc đồng vị bằng nhau: 5x - 20 = 3x + 10 => 2x = 30 => x = 15.'
```

---

## V. 5 Chuyên đề Olympic & Học sinh giỏi (HSG) bứt phá

---

### Chuyên đề 1: Phương pháp chứng minh ba điểm thẳng hàng bằng Tiên đề Euclid

> [!TIP]
> **PHƯƠNG PHÁP TIÊN ĐỀ EUCLID:**
> Muốn chứng minh ba điểm $A, B, C$ thẳng hàng:
> 1. Chọn một đường thẳng chuẩn $d$ không đi qua $B$.
> 2. Chứng minh đường thẳng $BA \parallel d$.
> 3. Chứng minh đường thẳng $BC \parallel d$.
> 4. Theo Tiên đề Euclid: Qua điểm $B$ chỉ có duy nhất một đường thẳng song song với $d$. Do đó hai đường thẳng $BA$ và $BC$ phải trùng nhau, suy ra ba điểm $A, B, C$ thẳng hàng!

#### Bài toán 1.1
Cho tam giác $ABC$. Lấy điểm $M$ là trung điểm của cạnh $BC$. Trên tia đối của tia $MA$, lấy điểm $D$ sao cho $MD = MA$.
a) Chứng minh rằng $AB \parallel CD$.  
b) Trên tia đối của tia $AC$, lấy điểm $E$ sao cho $AE = AC$. Lấy điểm $K$ sao cho $AK = AB$ trên tia đối của $AB$. Chứng minh ba điểm $D, C, E$ thẳng hàng nếu $CD \parallel BC'$ trong một hệ đối xứng thích hợp.  
*(Ta xét bài toán kinh điển rút gọn: Qua điểm $C$ kẻ hai tia $Cx \parallel AB$ và $Cy \parallel AB$ $\implies C, x, y$ cùng nằm trên một đường thẳng).*

**Lời giải mẫu:**
Giả sử qua điểm $M$ ta có hai tia $Ma$ và $Mb$ cùng song song với đường thẳng $xy$.  
Theo Tiên đề Euclid: Qua một điểm $M$ nằm ngoài đường thẳng $xy$, chỉ có duy nhất một đường thẳng song song với $xy$.  
Do đó, hai tia $Ma$ và $Mb$ phải cùng thuộc một đường thẳng duy nhất.  
Nếu hai tia này hướng về hai phía đối nhau thì chúng là hai tia đối nhau, và mọi điểm nằm trên hai tia đó cùng với $M$ tạo thành ba điểm thẳng hàng.

---

### Chuyên đề 2: Bài toán gấp khúc nhiều góc zic-zac & Định lý "Răng cưa" (Sawtooth Theorem)

> [!IMPORTANT]
> **ĐỊNH LÝ RĂNG CƯA (SAWTOOTH THEOREM):**
> Cho hai đường thẳng song song $d_1 \parallel d_2$. Giữa hai đường thẳng có một đường gấp khúc gồm nhiều đoạn thẳng liên tiếp $A_0 A_1 A_2 \dots A_n$.
> Khi đó: **Tổng tất cả các góc nhọn "rẽ sang trái" bằng tổng tất cả các góc nhọn "rẽ sang phải"**.
> 
> $$\sum \widehat{A}_{\text{trai}} = \sum \widehat{B}_{\text{phai}}.$$

#### Bài toán 2.1 (Gấp khúc 3 đỉnh zic-zac)
Cho hai tia $Ax \parallel Dy$. Đường gấp khúc $A - B - C - D$ tạo thành các góc nhọn: $\widehat{xAB} = 30^\circ$, $\widehat{ABC} = 75^\circ$, $\widehat{BCD} = 85^\circ$.
Tính số đo góc nhọn $\widehat{CDy}$ (các tia $Ax$ và $Dy$ cùng hướng sang phải).

```
      A ------------------------> x
       \
        \
         B
        /
       /
      C
       \
        \
         D ---------------------> y
```

**Lời giải:**
- Kẻ qua $B$ tia $B m \parallel Ax$ (hướng sang phải).
  Vì $Ax \parallel Bm \implies \widehat{ABm} = \widehat{xAB} = 30^\circ$ (so le trong).
  Tia $Bm$ nằm trong góc $\widehat{ABC}$, do đó:
  $$\widehat{mBC} = \widehat{ABC} - \widehat{ABm} = 75^\circ - 30^\circ = 45^\circ.$$

- Kẻ qua $C$ tia $Cn \parallel Bm$ (hướng sang phải).
  Vì $Bm \parallel Cn \implies \widehat{BCn} = \widehat{mBC} = 45^\circ$ (so le trong).
  Tia $Cn$ nằm trong góc $\widehat{BCD}$, do đó:
  $$\widehat{nCD} = \widehat{BCD} - \widehat{BCn} = 85^\circ - 45^\circ = 40^\circ.$$

- Vì $Ax \parallel Dy$ và $Cn \parallel Ax \implies Cn \parallel Dy$.
  Hai góc $\widehat{nCD}$ và $\widehat{CDy}$ ở vị trí so le trong, suy ra:
  $$\widehat{CDy} = \widehat{nCD} = 40^\circ.$$
*Kiểm tra theo định lý răng cưa:*  
Góc quay trái: $\widehat{xAB} + \widehat{BCn} = 30^\circ + 45^\circ = 75^\circ = \widehat{ABC}$.  
Tương tự: $\widehat{ABC} + \widehat{CDy} = 75^\circ + 40^\circ = 115^\circ$; $\widehat{xAB} + \widehat{BCD} = 30^\circ + 85^\circ = 115^\circ$ (khớp hoàn toàn!).

---

### Chuyên đề 3: Tiền đề xây dựng định lý tổng ba góc của tam giác

Tại sao tổng ba góc của một tam giác luôn bằng $180^\circ$? Tiên đề Euclid và tính chất hai đường thẳng song song chính là chìa khóa chứng minh đẹp đẽ nhất cho chân lý này!

#### Bài toán 3.1
Cho tam giác $ABC$. Chứng minh rằng:
$$\widehat{A} + \widehat{B} + \widehat{C} = 180^\circ.$$

**Lời giải:**
Qua đỉnh $A$, kẻ đường thẳng $xy$ song song với cạnh đáy $BC$ (với tia $Ax$ và $Ay$ là hai tia đối nhau, $Ax$ nằm về phía điểm $B$, $Ay$ nằm về phía điểm $C$).

```
         x <--------- A ---------> y
                     / \
                    /   \
                   /     \
                  B-------C
```

1. Vì $xy \parallel BC$ bị cắt bởi cát tuyến $AB$:
   Hai góc $\widehat{xAB}$ và $\widehat{ABC}$ ở vị trí so le trong, do đó:
   $$\widehat{xAB} = \widehat{ABC} = \widehat{B}.$$

2. Vì $xy \parallel BC$ bị cắt bởi cát tuyến $AC$:
   Hai góc $\widehat{yAC}$ và $\widehat{ACB}$ ở vị trí so le trong, do đó:
   $$\widehat{yAC} = \widehat{ACB} = \widehat{C}.$$

3. Vì ba điểm $x, A, y$ thẳng hàng nên góc $\widehat{xAy}$ là góc bẹt:
   $$\widehat{xAy} = 180^\circ.$$
Mặt khác:
$$\widehat{xAy} = \widehat{xAB} + \widehat{BAC} + \widehat{yAC}.$$
Thay các góc tương ứng vào:
$$\widehat{B} + \widehat{BAC} + \widehat{C} = 180^\circ \implies \widehat{A} + \widehat{B} + \widehat{C} = 180^\circ.$$
*(Điều phải chứng minh).*

---

### Chuyên đề 4: Tính chất phân giác của các góc ngoài

> [!NOTE]
> Cho $a \parallel b$ bị cắt bởi cát tuyến $c$.
> 1. Hai tia phân giác của **hai góc so le ngoài** thì **song song với nhau**.
> 2. Hai tia phân giác của **hai góc ngoài cùng phía** thì **vuông góc với nhau**.

#### Bài toán 4.1
Cho $a \parallel b$ bị cắt bởi cát tuyến $c$ tại $A$ và $B$. Gọi góc $\widehat{A_1}$ và $\widehat{B_3}$ là hai góc so le ngoài có số đo bằng $70^\circ$. Kẻ tia phân giác $Ax$ của góc $\widehat{A_1}$ và tia phân giác $By$ của góc $\widehat{B_3}$. Chứng minh $Ax \parallel By$.

**Lời giải:**
Vì $a \parallel b$ nên góc ngoài $\widehat{A_1} = \widehat{B_3} = 70^\circ$ (hai góc so le ngoài).
- Vì $Ax$ là tia phân giác của góc $\widehat{A_1}$ nên:
  $$\widehat{xAc} = \frac{1}{2}\widehat{A_1} = \frac{1}{2} \cdot 70^\circ = 35^\circ.$$
- Vì $By$ là tia phân giác của góc $\widehat{B_3}$ nên:
  $$\widehat{yBc} = \frac{1}{2}\widehat{B_3} = \frac{1}{2} \cdot 70^\circ = 35^\circ.$$
Ta có hai góc này nằm ở vị trí so le đối với cát tuyến $c$ và bằng nhau ($= 35^\circ$).
Theo dấu hiệu nhận biết hai đường thẳng song song, suy ra:
$$Ax \parallel By.$$

---

### Chuyên đề 5: Phương pháp cực trị góc & Vị trí tương đối biến thiên

Trong bài toán thực tế, khi một thanh dầm xoay quanh một trục cố định, góc của nó thay đổi liên tục.

#### Bài toán 5.1
Cho hai đường thẳng song song $a \parallel b$. Một thanh truyền động thẳng $MN$ có đầu $M$ chạy trên $a$ và đầu $N$ chạy trên $b$. Một góc cảm biến $\theta$ tại $M$ thỏa mãn điều kiện:
$$30^\circ \le \theta \le 80^\circ.$$
Tìm miền giá trị của góc trong cùng phía tương ứng $\varphi$ tại đỉnh $N$.

**Lời giải:**
Vì $a \parallel b$, hai góc trong cùng phía $\theta$ và $\varphi$ luôn có tổng số đo bằng $180^\circ$:
$$\theta + \varphi = 180^\circ \implies \varphi = 180^\circ - \theta.$$
Vì $30^\circ \le \theta \le 80^\circ$, ta nhân cả ba vế với $-1$ (đổi chiều bất đẳng thức):
$$-80^\circ \le -\theta \le -30^\circ.$$
Cộng thêm $180^\circ$ vào cả ba vế:
$$180^\circ - 80^\circ \le 180^\circ - \theta \le 180^\circ - 30^\circ \implies 100^\circ \le \varphi \le 150^\circ.$$
Vậy góc trong cùng phía $\varphi$ luôn dao động trong đoạn $[100^\circ; 150^\circ]$.

---

## VI. Bộ đề kiểm tra chuẩn hóa

### ĐỀ 1: KIỂM TRA 15 PHÚT (Mức độ Nhận biết & Thông hiểu)

#### A. Trắc nghiệm (6 điểm — Mỗi câu 1 điểm)

**Câu 1.** Tiên đề Euclid bàn về điều gì?  
A. Hai đường thẳng vuông góc.  
B. Đường thẳng song song đi qua một điểm ngoài đường thẳng.  
C. Tổng ba góc của một tam giác.  
D. Số đo của góc bẹt.  

**Câu 2.** Cho $a \parallel b$ bị cắt bởi đường thẳng $c$. Nếu góc $\widehat{A_1} = 50^\circ$ thì góc so le trong với nó có số đo bằng:  
A. $40^\circ$.  
B. $50^\circ$.  
C. $130^\circ$.  
D. $140^\circ$.  

**Câu 3.** Cho $x \parallel y$ bị cắt bởi cát tuyến $z$. Một góc trong cùng phía bằng $105^\circ$, góc trong cùng phía còn lại bằng:  
A. $105^\circ$.  
B. $95^\circ$.  
C. $75^\circ$.  
D. $85^\circ$.  

**Câu 4.** Cho $d_1 \parallel d_2$ và $d_3 \perp d_1$. Khi đó:  
A. $d_3 \parallel d_2$.  
B. $d_3 \perp d_2$.  
C. $d_3 \equiv d_2$.  
D. $d_3$ không cắt $d_2$.  

**Câu 5.** Cho ba đường thẳng phân biệt $p, q, r$. Biết $p \parallel r$ và $q \parallel r$. Kết luận nào sau đây đúng?  
A. $p \perp q$.  
B. $p$ cắt $q$.  
C. $p \parallel q$.  
D. $p \equiv q$.  

**Câu 6.** Phát biểu nào sau đây là SAI?  
A. Qua điểm $A$ ở ngoài đường thẳng $d$ có duy nhất một đường thẳng song song với $d$.  
B. Hai góc đồng vị tạo bởi hai đường thẳng song song thì bằng nhau.  
C. Hai góc trong cùng phía tạo bởi hai đường thẳng song song thì bằng nhau.  
D. Hai góc so le trong tạo bởi hai đường thẳng song song thì bằng nhau.  

#### B. Tự luận (4 điểm)

**Bài 1 (2,0 điểm).** Cho hình vẽ sau: biết $a \parallel b$ và góc $\widehat{A_2} = 120^\circ$. Hãy tính số đo của:  
a) Góc $\widehat{B_2}$ (góc đồng vị với $\widehat{A_2}$).  
b) Góc $\widehat{B_1}$ (góc trong cùng phía với $\widehat{A_4}$).  

**Bài 2 (2,0 điểm).** Cho hai tia song song $Ax \parallel By$. Điểm $M$ nằm giữa hai đường thẳng sao cho $\widehat{xAM} = 35^\circ$ và $\widehat{AMB} = 80^\circ$ (hai tia $Ax, By$ cùng hướng sang phải). Tính số đo của góc $\widehat{MBy}$.

---

#### HƯỚNG DẪN CHẤM & ĐÁP ÁN ĐỀ 15 PHÚT

##### Bảng đáp án trắc nghiệm

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **B** | **B** | **C** | **B** | **C** | **C** |

##### Hướng dẫn tự luận

- **Bài 1 (2,0 điểm):**
  - a) Vì $a \parallel b$ nên hai góc đồng vị bằng nhau: $\widehat{B_2} = \widehat{A_2} = 120^\circ$ *(1,0 điểm)*.
  - b) Vì $\widehat{A_4}$ đối đỉnh với $\widehat{A_2}$ nên $\widehat{A_4} = 120^\circ$ *(0,5 điểm)*.
    Vì $a \parallel b$ nên hai góc trong cùng phía bù nhau:
    $\widehat{B_1} = 180^\circ - \widehat{A_4} = 180^\circ - 120^\circ = 60^\circ$ *(0,5 điểm)*.

- **Bài 2 (2,0 điểm):**
  - Qua $M$ kẻ tia $Mz \parallel Ax$ (hướng sang phải) *(0,5 điểm)*.
  - Vì $Ax \parallel Mz$ nên $\widehat{AMz} = \widehat{xAM} = 35^\circ$ (so le trong) *(0,5 điểm)*.
  - Tia $Mz$ nằm giữa hai tia $MA$ và $MB$ nên:
    $\widehat{zMB} = \widehat{AMB} - \widehat{AMz} = 80^\circ - 35^\circ = 45^\circ$ *(0,5 điểm)*.
  - Vì $Ax \parallel By$ và $Mz \parallel Ax \implies Mz \parallel By$.
    Hai góc $\widehat{zMB}$ và $\widehat{MBy}$ ở vị trí so le trong nên:
    $\widehat{MBy} = \widehat{zMB} = 45^\circ$ *(0,5 điểm)*.

---

### ĐỀ 2: KIỂM TRA 45 PHÚT (Đề định kỳ phân hóa chuẩn mực)

#### MA TRẬN ĐỀ THI

| Mức độ nhận thức | Trắc nghiệm (4,0 đ) | Tự luận (6,0 đ) | Tổng điểm |
| :--- | :---: | :---: | :---: |
| **Nhận biết** | 4 câu (2,0 đ) | Bài 1a (1,5 đ) | **3,5 điểm (35%)** |
| **Thông hiểu** | 2 câu (1,0 đ) | Bài 1b (1,5 đ) | **2,5 điểm (25%)** |
| **Vận dụng** | 2 câu (1,0 đ) | Bài 2 (2,0 đ) | **3,0 điểm (30%)** |
| **Vận dụng cao** | 0 | Bài 3 (1,0 đ) | **1,0 điểm (10%)** |
| **Tổng cộng** | **8 câu (4,0 đ)** | **3 bài (6,0 đ)** | **10,0 điểm (100%)** |

---

#### PHẦN I. TRẮC NGHIỆM KHÁCH QUAN (4,0 điểm — 8 câu, mỗi câu 0,5 điểm)

**Câu 1.** Qua một điểm $A$ nằm ngoài đường thẳng $xy$, có thể vẽ được bao nhiêu đường thẳng song song với $xy$?  
A. Đúng $1$ đường thẳng.  
B. Đúng $2$ đường thẳng.  
C. Vô số đường thẳng.  
D. Không vẽ được đường thẳng nào.  

**Câu 2.** Cho $a \parallel b$. Đường thẳng $c$ cắt $a$ tại $M$ và cắt $b$ tại $N$. Nếu $\widehat{M_1} = 72^\circ$ thì góc đồng vị $\widehat{N_1}$ bằng:  
A. $108^\circ$.  
B. $72^\circ$.  
C. $18^\circ$.  
D. $90^\circ$.  

**Câu 3.** Cho $u \parallel v$ bị cắt bởi đường thẳng $w$. Tổng số đo của hai góc trong cùng phía bằng:  
A. $90^\circ$.  
B. $120^\circ$.  
C. $180^\circ$.  
D. $360^\circ$.  

**Câu 4.** Cho ba đường thẳng phân biệt $a, b, c$. Biết $a \perp b$ và $b \perp c$. Kết luận nào sau đây ĐÚNG?  
A. $a \perp c$.  
B. $a \parallel c$.  
C. $a$ cắt $c$.  
D. $a \equiv c$.  

**Câu 5.** Cho $a \parallel b$ và $c \perp a$. Khẳng định nào sau đây là ĐÚNG?  
A. $c \parallel b$.  
B. $c \perp b$.  
C. $c$ trùng với $b$.  
D. $c$ không cắt $b$.  

**Câu 6.** Cho hai góc trong cùng phía của hai đường thẳng song song có tỉ số số đo là $2 : 3$. Số đo của góc nhỏ là:  
A. $36^\circ$.  
B. $54^\circ$.  
C. $72^\circ$.  
D. $108^\circ$.  

**Câu 7.** Cho hình vẽ hai tia $Ax \parallel By$. Điểm $O$ nằm giữa sao cho $\widehat{xAO} = 40^\circ$ và $\widehat{AOB} = 90^\circ$ (hai tia $Ax, By$ cùng hướng sang phải). Số đo góc $\widehat{OBy}$ là:  
A. $40^\circ$.  
B. $50^\circ$.  
C. $60^\circ$.  
D. $130^\circ$.  

**Câu 8.** Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì:  
A. Trùng nhau.  
B. Vuông góc với nhau.  
C. Cắt nhau.  
D. Song song với nhau.  

---

#### PHẦN II. TỰ LUẬN (6,0 điểm — 3 bài)

**Bài 1 (3,0 điểm).** Cho hình vẽ bên dưới: biết đường thẳng $a \parallel b$. Cát tuyến $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$ sao cho góc $\widehat{A_4} = 110^\circ$.
Cát tuyến $d$ vuông góc với $a$ tại $C$ và cắt $b$ tại $D$.

```
         c             d
         |             |
   a ----A-------------C----
         |             |
   b ----B-------------D----
```

a) Chứng minh rằng đường thẳng $d$ vuông góc với đường thẳng $b$ tại $D$.  
b) Tính số đo của các góc tại đỉnh $B$: góc so le trong $\widehat{B_2}$, góc đồng vị $\widehat{B_4}$ và góc trong cùng phía $\widehat{B_1}$ với $\widehat{A_4}$.

**Bài 2 (2,0 điểm).** Cho hai tia song song $Ax \parallel Cy$. Một điểm $B$ nằm giữa hai tia sao cho góc $\widehat{xAB} = 130^\circ$ và góc $\widehat{BCy} = 140^\circ$ (hai tia $Ax$ và $Cy$ cùng hướng sang phải).
a) Qua điểm $B$, kẻ tia $Bz$ song song với tia $Ax$ (hướng sang phải). Chứng minh rằng $Bz \parallel Cy$.  
b) Tính số đo của góc $\widehat{ABC}$.

**Bài 3 (1,0 điểm — Câu phân hóa học sinh giỏi).**  
Cho góc nhọn $\widehat{xOy}$. Lấy điểm $A$ thuộc tia $Ox$, điểm $B$ thuộc tia $Oy$. Qua $A$ kẻ đường thẳng $d_1 \parallel Oy$. Qua $B$ kẻ đường thẳng $d_2 \parallel Ox$. Hai đường thẳng $d_1$ và $d_2$ cắt nhau tại điểm $C$.  
Gọi $Om$ là tia phân giác của góc $\widehat{xOy}$ và $Cn$ là tia phân giác của góc $\widehat{ACB}$.  
Chứng minh rằng tia $Om$ song song với đường thẳng chứa tia $Cn$.

---

#### HƯỚNG DẪN CHẤM & ĐÁP ÁN ĐỀ 45 PHÚT

##### Bảng đáp án trắc nghiệm (4,0 điểm)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **A** | **B** | **C** | **B** | **B** | **C** | **B** | **D** |

##### Lời giải chi tiết phần tự luận (6,0 điểm)

- **Bài 1 (3,0 điểm):**
  - **a) Chứng minh $d \perp b$ (1,5 điểm):**
    - Theo đề bài: $a \parallel b$ và $d \perp a$ tại $C$ *(0,75 điểm)*.
    - Theo định lý từ vuông góc đến song song: một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó vuông góc với đường thẳng kia *(0,5 điểm)*.
    - Suy ra $d \perp b$ tại $D$ *(0,25 điểm)*.
  - **b) Tính các góc tại đỉnh $B$ (1,5 điểm):**
    - Vì $a \parallel b$, góc so le trong $\widehat{B_2} = \widehat{A_4} = 110^\circ$ *(0,5 điểm)*.
    - Vì $a \parallel b$, góc đồng vị $\widehat{B_4} = \widehat{A_4} = 110^\circ$ *(0,5 điểm)*.
    - Vì $a \parallel b$, góc trong cùng phía bù nhau:
      $\widehat{B_1} = 180^\circ - \widehat{A_4} = 180^\circ - 110^\circ = 70^\circ$ *(0,5 điểm)*.

- **Bài 2 (2,0 điểm):**
  - **a) Chứng minh $Bz \parallel Cy$ (0,75 điểm):**
    - Ta có $Ax \parallel Cy$ (giả thiết) và $Bz \parallel Ax$ (cách dựng) *(0,25 điểm)*.
    - Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau *(0,25 điểm)*.
    - Suy ra $Bz \parallel Cy$ *(0,25 điểm)*.
  - **b) Tính góc $\widehat{ABC}$ (1,25 điểm):**
    - Xét $Ax \parallel Bz$, hai góc $\widehat{xAB}$ và $\widehat{ABz}$ ở vị trí trong cùng phía:
      $\widehat{ABz} = 180^\circ - \widehat{xAB} = 180^\circ - 130^\circ = 50^\circ$ *(0,5 điểm)*.
    - Xét $Bz \parallel Cy$, hai góc $\widehat{zBC}$ và $\widehat{BCy}$ ở vị trí trong cùng phía:
      $\widehat{zBC} = 180^\circ - \widehat{BCy} = 180^\circ - 140^\circ = 40^\circ$ *(0,5 điểm)*.
    - Tia $Bz$ nằm giữa hai tia $BA$ và $BC$ nên:
      $\widehat{ABC} = \widehat{ABz} + \widehat{zBC} = 50^\circ + 40^\circ = 90^\circ$ *(0,25 điểm)*.

- **Bài 3 (1,0 điểm):**
  - Kéo dài tia $AC$ cắt tia $Oy$ tại $B'$ ($AC$ chính là đường thẳng $d_1$).  
    Vì $d_1 \parallel Oy$ và $d_2 \parallel Ox$, theo tính chất góc có cạnh tương ứng song song:
    $\widehat{ACB} = \widehat{xOy}$ *(0,25 điểm)*.
  - Vì $Om$ là phân giác của góc $\widehat{xOy}$ nên:
    $\widehat{xOm} = \frac{1}{2}\widehat{xOy}$ *(0,25 điểm)*.
  - Vì $Cn$ là phân giác của góc $\widehat{ACB}$ nên góc tạo bởi $Cn$ với cạnh tương ứng song song bằng:
    $\frac{1}{2}\widehat{ACB} = \frac{1}{2}\widehat{xOy} = \widehat{xOm}$ *(0,25 điểm)*.
  - Hai góc này nằm ở vị trí đồng vị đối với hai đường thẳng chứa $Om$ và $Cn$ bị cắt bởi đường thẳng tương ứng. Do đó $Om \parallel Cn$ *(0,25 điểm)*.

---

## VII. Tổng kết & Lời khuyên ôn tập

<div style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">BỘ QUY TẮC VÀNG CẦN KHẮC CỐT GHI TÂM:</h4>
  <ul style="margin-bottom: 0; line-height: 1.85;">
    <li><b>Tiên đề Euclid:</b> Qua $1$ điểm ngoài đường thẳng $\implies$ vẽ được <b>duy nhất $1$</b> đường thẳng song song.</li>
    <li><b>Tính chất hai đường song song:</b> Có song song $\implies$ So le trong bằng nhau, Đồng vị bằng nhau, Trong cùng phía bù nhau ($180^\circ$).</li>
    <li><b>Chuyển đổi vuông góc - song song:</b>
      $$\begin{cases} a \parallel b \\ c \perp a \end{cases} \implies c \perp b$$
    </li>
    <li><b>Kỹ thuật gãy khúc:</b> Gặp góc nhọn/tù ở đỉnh gấp khúc giữa hai đường thẳng song song $\implies$ <b>kẻ ngay đường phụ song song</b> qua đỉnh gãy!</li>
  </ul>
</div>
