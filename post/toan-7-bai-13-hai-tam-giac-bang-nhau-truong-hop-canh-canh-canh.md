---
title: 'Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất: Cạnh - Cạnh - Cạnh (c.c.c) - Lý thuyết, Dạng toán và 5 Chuyên đề Olympic'
description: 'Làm chủ định nghĩa hai tam giác bằng nhau, quy tắc ghi đúng thứ tự đỉnh, trường hợp bằng nhau cạnh - cạnh - cạnh (c.c.c), 5 chuyên đề bồi dưỡng Olympic và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-12'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Hai tam giác bằng nhau
  - Cạnh cạnh cạnh
  - Trường hợp bằng nhau c.c.c
  - Kết nối tri thức
grade: 7
---

# Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác: Cạnh - Cạnh - Cạnh (c.c.c)

Trong thế giới kiến trúc và kỹ thuật xây dựng, nếu để ý quan sát các cây cầu thép nổi tiếng (như cầu Long Biên, cầu Tràng Tiền), các giàn giáo công trình, tháp truyền hình hay khung vì kèo mái nhà, các em sẽ thấy một đặc điểm chung kỳ lạ: **Chúng đều được cấu tạo từ vô số thanh giằng đan xen thành các hình tam giác!**

Tại sao những người kỹ sư không dùng hình chữ nhật hay tứ giác để thi công giàn đỡ?
- Nếu dùng $4$ thanh gỗ ghép thành một khung tứ giác liên kết bằng các khớp đinh bản lề, chỉ cần đẩy nhẹ một góc, toàn bộ khung sẽ lập tức bị xô lệch, méo mó thành hình bình hành.
- Nhưng nếu ghép $3$ thanh gỗ thành một khung tam giác, dù các khớp nối có thể xoay tự do, chiếc khung tam giác ấy vẫn **hoàn toàn cứng vững và bất biến**, không một lực nào có thể làm méo nó nếu các cạnh không bị bẻ gãy!

Nguyên lý cơ học vĩ đại ấy bắt nguồn từ một chân lý hình học nền tảng: **Khi độ dài ba cạnh của một tam giác đã được xác định, thì hình dạng và tất cả các góc của tam giác đó hoàn toàn được ấn định duy nhất!**

Chân lý này dẫn ta đến một trong những công cụ mạnh mẽ nhất của hình học phẳng: **Hai tam giác bằng nhau và trường hợp bằng nhau Cạnh - Cạnh - Cạnh (c.c.c)**. Khi làm chủ được công cụ này, các em không chỉ so sánh được hai hình tam giác mà còn mở ra chìa khóa vạn năng để chứng minh hai đoạn thẳng bằng nhau, hai góc bằng nhau, chứng minh tia phân giác, đường thẳng song song và đường thẳng vuông góc.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 13: HAI TAM GIÁC BẰNG NHAU (c.c.c)</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa hai tam giác bằng nhau</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Có các <b>cạnh tương ứng bằng nhau</b> và các <b>góc tương ứng bằng nhau</b>.<br>• Bắt buộc ghi đúng <b>thứ tự đỉnh tương ứng</b>: $\triangle ABC = \triangle A'B'C'$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Trường hợp bằng nhau c.c.c</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $3$ cạnh của tam giác này lần lượt bằng $3$ cạnh của tam giác kia thì hai tam giác đó bằng nhau.<br>• <b>Không cần đo góc</b>, chỉ cần $3$ cặp cạnh bằng nhau.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Ứng dụng suy luận</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chứng minh hai đoạn thẳng, hai góc bằng nhau.<br>• Chứng minh tia phân giác, đường trung trực.<br>• Chứng minh hai đường thẳng song song ($2$ góc so le trong bằng nhau) hoặc vuông góc ($2$ góc kề bù bằng nhau).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kỹ thuật Olympic</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dựng hình bằng thước và compa.<br>• Mô hình tứ giác diều (Kite) và tính chất đường trung trực.<br>• Chứng minh thẳng hàng và hoán vị đỉnh tam giác đều.</p>
    </div>
  </div>
</div>

---

## Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

Trước khi bước vào bài học mới, hãy kiểm tra lại các kỹ năng quan sát và hình học nền tảng qua $5$ câu hỏi khởi động:

1. **Khái niệm tam giác:** Một tam giác $MNP$ có bao nhiêu đỉnh, bao nhiêu cạnh và bao nhiêu góc? Hãy kể tên chi tiết các yếu tố đó.
2. **Ký hiệu đoạn thẳng và góc bằng nhau:** Hãy dùng ký hiệu toán học để diễn tả các ý sau:
   - Đoạn thẳng $EF$ dài bằng đoạn thẳng $HK$.
   - Góc đỉnh $M$ có số đo bằng góc đỉnh $P$.
3. **Ký hiệu trên hình vẽ:** Khi hai đoạn thẳng trên một hình vẽ cùng được đánh dấu bởi một nét gạch chéo đơn ($|$) hoặc hai nét gạch chéo song song ($||$), điều đó cho ta biết thông tin gì?
4. **Tổng ba góc trong tam giác:** Cho tam giác $ABC$ có $\widehat{A} = 75^\circ$ và $\widehat{B} = 45^\circ$. Hãy tính số đo của góc $\widehat{C}$.
5. **Giao điểm cung tròn:** Lấy đoạn thẳng $AB = 6\text{ cm}$. Vẽ đường tròn tâm $A$ bán kính $5\text{ cm}$ và đường tròn tâm $B$ bán kính $5\text{ cm}$. Hai đường tròn này cắt nhau tại hai điểm $C$ và $D$. Độ dài các đoạn thẳng $CA, CB, DA, DB$ bằng bao nhiêu?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** Tam giác $MNP$ có:
   - $3$ đỉnh: Đỉnh $M$, đỉnh $N$, đỉnh $P$.
   - $3$ cạnh: Cạnh $MN$, cạnh $NP$, cạnh $PM$.
   - $3$ góc: Góc $\widehat{M}$ (hay $\widehat{NMP}$), góc $\widehat{N}$ (hay $\widehat{MNP}$), góc $\widehat{P}$ (hay $\widehat{MPN}$).
2. **Trả lời:**
   - Ký hiệu hai đoạn thẳng bằng nhau: $EF = HK$.
   - Ký hiệu hai góc bằng nhau: $\widehat{M} = \widehat{P}$.
3. **Trả lời:** Hai đoạn thẳng có cùng ký hiệu đánh dấu nghĩa là chúng có **độ dài bằng nhau**. Tương tự, hai góc có cùng ký hiệu vòng cung đánh dấu thì có **số đo bằng nhau**.
4. **Trả lời:** Áp dụng định lý tổng ba góc trong tam giác:
   $$\widehat{C} = 180^\circ - (\widehat{A} + \widehat{B}) = 180^\circ - (75^\circ + 45^\circ) = 60^\circ.$$
5. **Trả lời:** Vì $C$ và $D$ đều thuộc cả hai đường tròn tâm $A$ và tâm $B$ có cùng bán kính $R = 5\text{ cm}$, nên ta có:
   $$CA = CB = DA = DB = 5\text{ cm}.$$
</details>

---

## I. Lý thuyết trọng tâm

### 1. Định nghĩa hai tam giác bằng nhau

Hai hình tam giác bằng nhau khi ta có thể đặt chúng chồng khít lên nhau hoàn toàn. Khi đó, từng đỉnh của tam giác này sẽ trùng khớp với một đỉnh tương ứng của tam giác kia.

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> **Hai tam giác bằng nhau** là hai tam giác có các **cạnh tương ứng bằng nhau** và các **góc tương ứng bằng nhau**.
>
> Khi tam giác $ABC$ và tam giác $A'B'C'$ bằng nhau, ta viết:
> $$\triangle ABC = \triangle A'B'C'.$$
> **Quy ước bắt buộc:** Các đỉnh tương ứng phải được viết theo đúng thứ tự:
> - Đỉnh $A$ ứng với đỉnh $A'$
> - Đỉnh $B$ ứng với đỉnh $B'$
> - Đỉnh $C$ ứng với đỉnh $C'$

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 620 260" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác ABC -->
    <polygon points="120,50 40,210 220,210" fill="rgba(37, 99, 235, 0.08)" stroke="#2563eb" stroke-width="2.5" />
    <!-- Tam giác A'B'C' -->
    <polygon points="480,50 400,210 580,210" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="2.5" />

    <!-- Đỉnh và nhãn tam giác ABC -->
    <circle cx="120" cy="50" r="4" fill="#1e293b" />
    <text x="115" y="38" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <circle cx="40" cy="210" r="4" fill="#1e293b" />
    <text x="22" y="222" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>
    <circle cx="220" cy="210" r="4" fill="#1e293b" />
    <text x="228" y="222" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>

    <!-- Đỉnh và nhãn tam giác A'B'C' -->
    <circle cx="480" cy="50" r="4" fill="#1e293b" />
    <text x="475" y="38" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A'</text>
    <circle cx="400" cy="210" r="4" fill="#1e293b" />
    <text x="382" y="222" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B'</text>
    <circle cx="580" cy="210" r="4" fill="#1e293b" />
    <text x="588" y="222" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C'</text>

    <!-- Ký hiệu cạnh bằng nhau: AB = A'B' (1 gạch), AC = A'C' (2 gạch), BC = B'C' (3 gạch) -->
    <!-- Cạnh 1 gạch: AB và A'B' -->
    <line x1="75" y1="126" x2="85" y2="134" stroke="#2563eb" stroke-width="2" />
    <line x1="435" y1="126" x2="445" y2="134" stroke="#10b981" stroke-width="2" />

    <!-- Cạnh 2 gạch: AC và A'C' -->
    <line x1="165" y1="126" x2="175" y2="134" stroke="#2563eb" stroke-width="2" />
    <line x1="168" y1="130" x2="178" y2="138" stroke="#2563eb" stroke-width="2" />
    <line x1="525" y1="126" x2="535" y2="134" stroke="#10b981" stroke-width="2" />
    <line x1="528" y1="130" x2="538" y2="138" stroke="#10b981" stroke-width="2" />

    <!-- Cạnh 3 gạch: BC và B'C' -->
    <line x1="125" y1="205" x2="125" y2="215" stroke="#2563eb" stroke-width="2" />
    <line x1="130" y1="205" x2="130" y2="215" stroke="#2563eb" stroke-width="2" />
    <line x1="135" y1="205" x2="135" y2="215" stroke="#2563eb" stroke-width="2" />

    <line x1="485" y1="205" x2="485" y2="215" stroke="#10b981" stroke-width="2" />
    <line x1="490" y1="205" x2="490" y2="215" stroke="#10b981" stroke-width="2" />
    <line x1="495" y1="205" x2="495" y2="215" stroke="#10b981" stroke-width="2" />

    <!-- Chú thích ở giữa -->
    <text x="275" y="135" font-family="sans-serif" font-weight="bold" font-size="20" fill="#dc2626">≅</text>
    <text x="250" y="165" font-family="sans-serif" font-size="14" fill="#64748b">Trùng khít</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 1: Hai tam giác bằng nhau có $3$ cặp cạnh tương ứng bằng nhau và $3$ cặp góc tương ứng bằng nhau</em></p>
</div>

Từ ký hiệu $\triangle ABC = \triangle A'B'C'$, ta suy ra hệ thống $6$ yếu tố tương ứng bằng nhau:

| Yếu tố | Các cặp tương ứng bằng nhau trong $\triangle ABC = \triangle A'B'C'$ |
| :--- | :--- |
| **Ba đỉnh tương ứng** | $A \leftrightarrow A'$; $\quad B \leftrightarrow B'$; $\quad C \leftrightarrow C'$ |
| **Ba cặp cạnh tương ứng** | $AB = A'B'$; $\quad BC = B'C'$; $\quad CA = C'A'$ |
| **Ba cặp góc tương ứng** | $\widehat{A} = \widehat{A'}$; $\quad \widehat{B} = \widehat{B'}$; $\quad \widehat{C} = \widehat{C'}$ |

> [!WARNING]
> **CẢNH BÁO "BẪY" THƯỜNG GẶP:**
> Ký hiệu hai tam giác bằng nhau thể hiện chính xác mối quan hệ giữa các đỉnh. Do đó:
> - Ký hiệu $\triangle ABC = \triangle A'B'C'$ hoàn toàn **khác** với $\triangle ABC = \triangle B'A'C'$.
> - Nếu viết $\triangle ABC = \triangle B'A'C'$, điều đó đồng nghĩa với việc $A \leftrightarrow B'$ và $B \leftrightarrow A'$, dẫn đến $AB = B'A'$ nhưng lại kéo theo $BC = A'C'$ (sai lệch với hình vẽ).
> - **Quy tắc vàng:** Chỉ khi viết đúng thứ tự đỉnh tương ứng, ta mới được phép suy ra các cạnh và các góc tương ứng bằng nhau!

---

### 2. Trường hợp bằng nhau thứ nhất của tam giác: Cạnh - Cạnh - Cạnh (c.c.c)

Để kết luận hai tam giác bằng nhau theo định nghĩa, ta cần kiểm tra tới $6$ điều kiện ($3$ cặp cạnh và $3$ cặp góc). Tuy nhiên, các nhà toán học đã chứng minh được một định lý vô cùng kỳ diệu: **Chỉ cần kiểm tra $3$ cặp cạnh là đủ!**

> [!IMPORTANT]
> **ĐỊNH LÝ (Trường hợp bằng nhau c.c.c):**
> **Nếu ba cạnh của tam giác này lần lượt bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.**
>
> Nếu $\triangle ABC$ và $\triangle A'B'C'$ có:
> $$\begin{cases} AB = A'B' \\ BC = B'C' \\ CA = C'A' \end{cases}$$
> Thì ta kết luận:
> $$\triangle ABC = \triangle A'B'C' \quad (\text{c.c.c}).$$

```geometry
type: triangle-sss
```

Nhờ định lý này, một khi đã khẳng định được $\triangle ABC = \triangle A'B'C'$ (c.c.c), ta lập tức được quyền suy ra:
$$\widehat{A} = \widehat{A'}, \quad \widehat{B} = \widehat{B'}, \quad \widehat{C} = \widehat{C'}.$$
Đây chính là cây cầu nối quan trọng nhất giúp ta tính toán số đo góc hoặc chứng minh các góc bằng nhau mà không cần dùng đến thước đo góc!

---

### 3. Kỹ thuật nhận diện "Cạnh chung" — Vũ khí sắc bén nhất

Trong các bài toán hình học thực tế, hai tam giác thường không nằm tách rời nhau mà dính liền vào nhau hoặc ghép chung một bờ cạnh.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 560 280" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tứ giác ABCD có đường chéo AC làm cạnh chung -->
    <polygon points="80,140 280,40 480,140" fill="rgba(37, 99, 235, 0.08)" stroke="#2563eb" stroke-width="2.5" />
    <polygon points="80,140 280,240 480,140" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" stroke-width="2.5" />
    
    <!-- Cạnh chung AC nổi bật -->
    <line x1="80" y1="140" x2="480" y2="140" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="8 4" />

    <!-- Đỉnh -->
    <circle cx="80" cy="140" r="4" fill="#1e293b" />
    <text x="55" y="145" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>

    <circle cx="280" cy="40" r="4" fill="#1e293b" />
    <text x="275" y="28" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>

    <circle cx="480" cy="140" r="4" fill="#1e293b" />
    <text x="492" y="145" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>

    <circle cx="280" cy="240" r="4" fill="#1e293b" />
    <text x="275" y="262" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">D</text>

    <!-- Ký hiệu cạnh bằng nhau -->
    <line x1="175" y1="85" x2="185" y2="95" stroke="#2563eb" stroke-width="2" />
    <line x1="175" y1="185" x2="185" y2="195" stroke="#f59e0b" stroke-width="2" />

    <line x1="375" y1="85" x2="385" y2="95" stroke="#2563eb" stroke-width="2" />
    <line x1="378" y1="89" x2="388" y2="99" stroke="#2563eb" stroke-width="2" />

    <line x1="375" y1="185" x2="385" y2="195" stroke="#f59e0b" stroke-width="2" />
    <line x1="378" y1="189" x2="388" y2="199" stroke="#f59e0b" stroke-width="2" />

    <!-- Chú thích cạnh chung -->
    <rect x="220" y="122" width="120" height="36" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
    <text x="232" y="145" font-family="sans-serif" font-weight="bold" font-size="13" fill="#b91c1c">AC: CẠNH CHUNG</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 2: Cạnh $AC$ là cạnh chung của cả hai tam giác $\triangle ABC$ và $\triangle ADC$</em></p>
</div>

> [!TIP]
> **BÍ QUYẾT TÌM KIẾM CẶP CẠNH THỨ BA:**
> Đề bài thường chỉ cho sẵn $2$ cặp cạnh bằng nhau trong giả thiết ($AB = AD$ và $BC = DC$). Cặp cạnh thứ ba chính là **đoạn thẳng chung** giữa hai hình ($AC$ là cạnh chung). Hãy luôn ghi nhớ: Một đoạn thẳng thì hiển nhiên luôn bằng chính nó!

---

## II. Các dạng toán trọng tâm và Phương pháp giải

### Dạng 1: Viết đúng ký hiệu hai tam giác bằng nhau; suy ra cạnh và góc tương ứng

#### Phương pháp giải
1. **Tìm các cặp đỉnh tương ứng:** Dựa vào các cặp cạnh bằng nhau hoặc cặp góc bằng nhau đã cho:
   - Nếu $AB = DE$ và $AC = DF$, đỉnh chung bên trái là $A$, đỉnh chung bên phải là $D$ $\implies$ Đỉnh $A$ ứng với đỉnh $D$.
   - Từ đó suy ra đỉnh $B$ ứng với đỉnh $E$, đỉnh $C$ ứng với đỉnh $F$.
2. **Viết ký hiệu đẳng thức tam giác:** Viết hai tam giác theo đúng trình tự các đỉnh đã bắt cặp.
3. **Suy ra các hệ thức:** Từ ký hiệu đúng, suy ra các cặp cạnh bằng nhau và các cặp góc bằng nhau. Sử dụng thêm định lý tổng ba góc trong tam giác bằng $180^\circ$ khi cần tính số đo.

---

#### Bài toán mẫu 1 (Xác định đỉnh và viết ký hiệu đẳng thức)
Cho hai tam giác $ABC$ và $HKP$ có $AB = KP$, $BC = PH$, $CA = HK$.
a) Hãy ghép cặp các đỉnh tương ứng của hai tam giác.
b) Viết ký hiệu thể hiện sự bằng nhau của hai tam giác đó theo $3$ cách khác nhau.

**Lời giải chi tiết:**
a) Xét các cặp cạnh bằng nhau:
- Cạnh $AB$ và $AC$ có chung đỉnh $A$; cạnh tương ứng $KP$ và $HK$ có chung đỉnh $K$. Do đó đỉnh $A$ ứng với đỉnh $K$ ($A \leftrightarrow K$).
- Cạnh $BA$ và $BC$ có chung đỉnh $B$; cạnh tương ứng $PK$ và $PH$ có chung đỉnh $P$. Do đó đỉnh $B$ ứng với đỉnh $P$ ($B \leftrightarrow P$).
- Còn lại đỉnh $C$ ứng với đỉnh $H$ ($C \leftrightarrow H$).

b) Từ sự tương ứng $A \leftrightarrow K$, $B \leftrightarrow P$, $C \leftrightarrow H$, ta có các cách viết đẳng thức tam giác:
- Cách 1: $\triangle ABC = \triangle KPH$.
- Cách 2: $\triangle BAC = \triangle PKH$.
- Cách 3: $\triangle CAB = \triangle HKP$.

---

#### Bài toán mẫu 2 (Tính độ dài cạnh và số đo góc)
Cho $\triangle MNP = \triangle DEG$. Biết rằng $MN = 6\text{ cm}$, $NP = 8\text{ cm}$, $EG = 8\text{ cm}$, $DG = 10\text{ cm}$, $\widehat{M} = 55^\circ$ và $\widehat{E} = 65^\circ$.
a) Tìm độ dài các cạnh $MP$ và $DE$.
b) Tính số đo các góc còn lại của hai tam giác.

**Lời giải chi tiết:**
a) Vì $\triangle MNP = \triangle DEG$ nên các cạnh tương ứng bằng nhau:
- Cạnh $DE = MN = 6\text{ cm}$.
- Cạnh $MP = DG = 10\text{ cm}$.

b) Vì $\triangle MNP = \triangle DEG$ nên các góc tương ứng bằng nhau:
- Đỉnh $M$ ứng với đỉnh $D \implies \widehat{D} = \widehat{M} = 55^\circ$.
- Đỉnh $N$ ứng với đỉnh $E \implies \widehat{N} = \widehat{E} = 65^\circ$.

Xét tam giác $MNP$, tổng ba góc trong tam giác bằng $180^\circ$:
$$\widehat{P} = 180^\circ - (\widehat{M} + \widehat{N}) = 180^\circ - (55^\circ + 65^\circ) = 180^\circ - 120^\circ = 60^\circ.$$
Vì góc $\widehat{G}$ tương ứng với góc $\widehat{P}$ nên:
$$\widehat{G} = \widehat{P} = 60^\circ.$$
Vậy số đo các góc còn lại là: $\widehat{D} = 55^\circ$, $\widehat{N} = 65^\circ$, $\widehat{P} = 60^\circ$ và $\widehat{G} = 60^\circ$.

---

### Dạng 2: Chứng minh hai tam giác bằng nhau theo trường hợp c.c.c

#### Phương pháp giải
Trình bày theo cấu trúc $3$ bước chuẩn mực:
- **Bước 1:** Nêu rõ tên hai tam giác cần xét: *"Xét $\triangle ...$ và $\triangle ...$ có:"*
- **Bước 2:** Liệt kê đầy đủ $3$ cặp cạnh bằng nhau kèm theo căn cứ rõ ràng (giả thiết cho, cùng độ dài, do trung điểm, hoặc là cạnh chung).
- **Bước 3:** Kết luận hai tam giác bằng nhau theo trường hợp (c.c.c): *"Vậy $\triangle ... = \triangle ... \text{ (c.c.c)}$."*

---

#### Bài toán mẫu 3 (Mô hình điểm cách đều hai mút)
Cho tam giác $ABC$ có $AB = AC$. Gọi $M$ là trung điểm của cạnh đáy $BC$.
a) Chứng minh rằng $\triangle ABM = \triangle ACM$.
b) Chứng minh $AM$ là tia phân giác của góc $\widehat{BAC}$.
c) Chứng minh $AM \perp BC$.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 460 280" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác ABC -->
    <polygon points="230,40 90,220 370,220" fill="rgba(37, 99, 235, 0.05)" stroke="#2563eb" stroke-width="2.5" />
    
    <!-- Đoạn trung tuyến AM -->
    <line x1="230" y1="40" x2="230" y2="220" stroke="#dc2626" stroke-width="2.5" />

    <!-- Ký hiệu góc vuông tại M -->
    <path d="M 230 205 L 215 205 L 215 220" fill="none" stroke="#dc2626" stroke-width="1.8" />

    <!-- Ký hiệu AB = AC -->
    <line x1="155" y1="126" x2="165" y2="134" stroke="#2563eb" stroke-width="2" />
    <line x1="295" y1="126" x2="305" y2="134" stroke="#2563eb" stroke-width="2" />

    <!-- Ký hiệu BM = MC -->
    <line x1="157" y1="215" x2="163" y2="225" stroke="#16a34a" stroke-width="2" />
    <line x1="161" y1="215" x2="167" y2="225" stroke="#16a34a" stroke-width="2" />

    <line x1="297" y1="215" x2="303" y2="225" stroke="#16a34a" stroke-width="2" />
    <line x1="301" y1="215" x2="307" y2="225" stroke="#16a34a" stroke-width="2" />

    <!-- Đỉnh -->
    <circle cx="230" cy="40" r="4" fill="#1e293b" />
    <text x="225" y="28" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>

    <circle cx="90" cy="220" r="4" fill="#1e293b" />
    <text x="72" y="235" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>

    <circle cx="370" cy="220" r="4" fill="#1e293b" />
    <text x="378" y="235" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>

    <circle cx="230" cy="220" r="4" fill="#1e293b" />
    <text x="224" y="244" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">M</text>
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 3: Tam giác $ABC$ có $AB=AC$ và $M$ là trung điểm cạnh $BC$</em></p>
</div>

**Lời giải chi tiết:**
a) Xét $\triangle ABM$ và $\triangle ACM$ có:
- $AB = AC$ (theo giả thiết).
- $BM = CM$ (vì $M$ là trung điểm của $BC$).
- $AM$ là cạnh chung.

Do đó, $\triangle ABM = \triangle ACM$ (c.c.c).

b) Vì $\triangle ABM = \triangle ACM$ (chứng minh trên) nên:
$$\widehat{BAM} = \widehat{CAM} \quad (\text{hai góc tương ứng}).$$
Mặt khác, tia $AM$ nằm giữa hai tia $AB$ và $AC$.
Vậy $AM$ là tia phân giác của góc $\widehat{BAC}$.

c) Cũng từ $\triangle ABM = \triangle ACM$, ta suy ra:
$$\widehat{AMB} = \widehat{AMC} \quad (\text{hai góc tương ứng}).$$
Mà hai góc $\widehat{AMB}$ và $\widehat{AMC}$ là hai góc kề bù (vì $B, M, C$ thẳng hàng), nên:
$$\widehat{AMB} + \widehat{AMC} = 180^\circ.$$
Do hai góc bằng nhau nên:
$$\widehat{AMB} = \widehat{AMC} = \frac{180^\circ}{2} = 90^\circ.$$
Điều này chứng tỏ $AM \perp BC$.

---

### Dạng 3: Sử dụng c.c.c để chứng minh hai đường thẳng song song

#### Phương pháp giải
Để chứng minh hai đường thẳng $a$ và $b$ song song với nhau:
1. Nối một đoạn thẳng thích hợp để tạo thành hai tam giác có cạnh chung.
2. Chứng minh hai tam giác đó bằng nhau theo trường hợp (c.c.c).
3. Suy ra một cặp **góc so le trong** bằng nhau (hoặc cặp **góc đồng vị** bằng nhau).
4. Áp dụng dấu hiệu nhận biết hai đường thẳng song song để kết luận $a \parallel b$.

---

#### Bài toán mẫu 4 (Tứ giác có các cạnh đối bằng nhau)
Cho hình vẽ tứ giác $ABCD$ có $AB = CD$ và $AD = BC$.
a) Chứng minh rằng $\triangle ABC = \triangle CDA$.
b) Chứng minh $AB \parallel CD$ và $AD \parallel BC$.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 520 260" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Hình bình hành ABCD -->
    <polygon points="120,60 420,60 360,200 60,200" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="2.5" />
    
    <!-- Đường chéo AC nối hai đỉnh -->
    <line x1="120" y1="60" x2="360" y2="200" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 3" />

    <!-- Đỉnh -->
    <circle cx="120" cy="60" r="4" fill="#1e293b" />
    <text x="110" y="48" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>

    <circle cx="420" cy="60" r="4" fill="#1e293b" />
    <text x="428" y="52" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>

    <circle cx="360" cy="200" r="4" fill="#1e293b" />
    <text x="368" y="215" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>

    <circle cx="60" cy="200" r="4" fill="#1e293b" />
    <text x="42" y="215" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">D</text>

    <!-- Ký hiệu cạnh bằng nhau -->
    <line x1="265" y1="55" x2="275" y2="65" stroke="#10b981" stroke-width="2" />
    <line x1="205" y1="195" x2="215" y2="205" stroke="#10b981" stroke-width="2" />

    <line x1="85" y1="126" x2="95" y2="134" stroke="#10b981" stroke-width="2" />
    <line x1="88" y1="130" x2="98" y2="138" stroke="#10b981" stroke-width="2" />

    <line x1="385" y1="126" x2="395" y2="134" stroke="#10b981" stroke-width="2" />
    <line x1="388" y1="130" x2="398" y2="138" stroke="#10b981" stroke-width="2" />

    <!-- Cặp góc so le trong BAC và DCA -->
    <path d="M 150 78 A 30 30 0 0 1 155 60" fill="none" stroke="#2563eb" stroke-width="2" />
    <path d="M 330 182 A 30 30 0 0 1 325 200" fill="none" stroke="#2563eb" stroke-width="2" />
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 4: Tứ giác $ABCD$ có các cạnh đối bằng nhau thì tạo nên các cặp cạnh đối song song</em></p>
</div>

**Lời giải chi tiết:**
a) Nối đoạn thẳng $AC$. Xét $\triangle ABC$ và $\triangle CDA$ có:
- $AB = CD$ (theo giả thiết).
- $BC = DA$ (vì $AD = BC$ theo giả thiết).
- $AC$ là cạnh chung.

Do đó, $\triangle ABC = \triangle CDA$ (c.c.c).

b) Vì $\triangle ABC = \triangle CDA$ nên ta có các cặp góc tương ứng bằng nhau:
- $\widehat{BAC} = \widehat{DCA}$ (hai góc tương ứng).
  Mà hai góc này nằm ở vị trí **so le trong** đối với hai đường thẳng $AB$ và $CD$ bị cắt bởi cát tuyến $AC$.
  Suy ra $AB \parallel CD$.
- Tương tự, ta có $\widehat{BCA} = \widehat{DAC}$ (hai góc tương ứng).
  Mà hai góc này cũng nằm ở vị trí **so le trong** đối với hai đường thẳng $AD$ và $BC$ bị cắt bởi cát tuyến $AC$.
  Suy ra $AD \parallel BC$.

*(Kết quả này sau này ở Lớp 8 các em sẽ biết chính là dấu hiệu nhận biết một tứ giác là hình bình hành).*

---

### Dạng 4: Bài toán giao điểm hai cung tròn (Mô hình compa)

#### Phương pháp giải
Khi một điểm $M$ được xác định bằng giao điểm của hai cung tròn:
- Cung tròn tâm $A$ bán kính $R_1 \implies MA = R_1$.
- Cung tròn tâm $B$ bán kính $R_2 \implies MB = R_2$.
Nếu vẽ hai điểm ở hai phía khác nhau của một đoạn thẳng có cùng bán kính, ta sẽ thu được các cặp tam giác bằng nhau theo trường hợp (c.c.c).

---

#### Bài toán mẫu 5 (Tính các góc dựa vào mô hình hai điểm đối xứng)
Cho đoạn thẳng $AB$. Lấy điểm $C$ và điểm $D$ nằm ở hai phía khác nhau của đường thẳng $AB$ sao cho $AC = AD$ và $BC = BD$.
Biết $\widehat{CAB} = 30^\circ$ và $\widehat{ABC} = 40^\circ$.
a) Chứng minh rằng $\triangle CAB = \triangle DAB$.
b) Tính số đo góc $\widehat{ACB}$ và số đo góc $\widehat{ADB}$.
c) Chứng minh $AB$ là tia phân giác của góc $\widehat{CAD}$.

**Lời giải chi tiết:**
a) Xét $\triangle CAB$ và $\triangle DAB$ có:
- $AC = AD$ (theo giả thiết).
- $BC = BD$ (theo giả thiết).
- $AB$ là cạnh chung.

Do đó, $\triangle CAB = \triangle DAB$ (c.c.c).

b) Trong tam giác $CAB$, tổng ba góc bằng $180^\circ$:
$$\widehat{ACB} = 180^\circ - (\widehat{CAB} + \widehat{ABC}) = 180^\circ - (30^\circ + 40^\circ) = 110^\circ.$$
Vì $\triangle CAB = \triangle DAB$ nên:
$$\widehat{ADB} = \widehat{ACB} = 110^\circ \quad (\text{hai góc tương ứng}).$$

c) Vì $\triangle CAB = \triangle DAB$, ta suy ra:
$$\widehat{DAB} = \widehat{CAB} = 30^\circ \quad (\text{hai góc tương ứng}).$$
Mặt khác, điểm $C$ và điểm $D$ nằm ở hai nửa mặt phẳng đối nhau bờ chứa đường thẳng $AB$, nên tia $AB$ nằm giữa hai tia $AC$ và $AD$.
Kết hợp với $\widehat{CAB} = \widehat{DAB}$, suy ra $AB$ là tia phân giác của góc $\widehat{CAD}$.

---

## III. 5 Chuyên đề Bồi dưỡng Học sinh giỏi & Olympic Toán

### Chuyên đề 1: Tính duy nhất của tam giác và bài toán dựng hình bằng Thước kẻ và Compa

Trong hình học cổ điển Hy Lạp, bài toán dựng một tam giác biết độ dài ba cạnh $a, b, c$ (thỏa mãn bất đẳng thức tam giác) chỉ bằng thước thẳng và compa là một trong những bài toán nền tảng nhất:
1. Dựng đoạn thẳng $BC = a$.
2. Dựng cung tròn tâm $B$, bán kính $c$.
3. Dựng cung tròn tâm $C$, bán kính $b$.
4. Giao điểm của hai cung tròn là đỉnh $A$. Nối $AB, AC$ ta được tam giác $ABC$.

> [!NOTE]
> **Ý NGHĨA OLYMPIC:**
> Nếu một người khác cũng thực hiện chính xác các thao tác trên ở một nơi khác, thì tam giác họ dựng được chắc chắn sẽ **bằng khít** với tam giác của em theo trường hợp (c.c.c).
> Điều này khẳng định: **Ba cạnh của một tam giác quyết định duy nhất hình dạng và kích thước của tam giác đó!** Đây là cơ sở toán học lý giải vì sao tam giác là hình bất biến hình học duy nhất trong không gian phẳng.

---

### Chuyên đề 2: Tính chất đường trung trực của đoạn thẳng bằng phương pháp c.c.c

**Bài toán:** Cho đoạn thẳng $AB$. Điểm $M$ cách đều hai đầu mút $A$ và $B$ ($MA = MB$). Chứng minh rằng $M$ luôn nằm trên đường trung trực của đoạn thẳng $AB$.

**Phân tích & Chứng minh:**
- Gọi $I$ là trung điểm của đoạn thẳng $AB$ ($IA = IB$). Nối $MI$.
- Nếu $M$ trùng với $I$, thì $M$ chính là trung điểm của $AB$, hiển nhiên thuộc đường trung trực.
- Nếu $M$ không trùng với $I$, ta xét hai tam giác $\triangle AMI$ và $\triangle BMI$ có:
  + $MA = MB$ (theo giả thiết).
  + $IA = IB$ (vì $I$ là trung điểm của $AB$).
  + $MI$ là cạnh chung.
- Suy ra $\triangle AMI = \triangle BMI$ (c.c.c).
- Từ đó ta có $\widehat{MIA} = \widehat{MIB}$ (hai góc tương ứng).
- Mà hai góc này là hai góc kề bù: $\widehat{MIA} + \widehat{MIB} = 180^\circ$.
- Do đó:
  $$\widehat{MIA} = \widehat{MIB} = \frac{180^\circ}{2} = 90^\circ \implies MI \perp AB.$$
- Vì đường thẳng $MI$ vừa đi qua trung điểm $I$ của $AB$, vừa vuông góc với $AB$ tại $I$, nên đường thẳng $MI$ chính là **đường trung trực** của đoạn thẳng $AB$.
- Vậy điểm $M$ nằm trên đường trung trực của đoạn thẳng $AB$.

> [!IMPORTANT]
> **ĐỊNH LÝ ĐẢO ĐƯỜNG TRUNG TRỰC:**
> Bất kỳ điểm nào cách đều hai đầu mút của một đoạn thẳng thì đều nằm trên đường trung trực của đoạn thẳng đó.

---

### Chuyên đề 3: Mô hình "Con diều" (Kite) và tính chất vuông góc của hai đường chéo

Một tứ giác $ABCD$ có hai cặp cạnh kề bằng nhau ($AB = AD$ và $CB = CD$) được các nhà toán học quốc tế gọi là **Tứ giác hình con diều** (Kite).

**Bài toán:** Cho tứ giác $ABCD$ có $AB = AD$ và $CB = CD$. Chứng minh rằng:
a) $AC$ là đường trung trực của đoạn thẳng $BD$.
b) $AC \perp BD$.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 460 300" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tứ giác diều ABCD -->
    <polygon points="230,30 110,130 230,270 350,130" fill="rgba(139, 92, 246, 0.08)" stroke="#8b5cf6" stroke-width="2.5" />

    <!-- Đường chéo AC và BD -->
    <line x1="230" y1="30" x2="230" y2="270" stroke="#dc2626" stroke-width="2.5" />
    <line x1="110" y1="130" x2="350" y2="130" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 3" />

    <!-- Giao điểm H và góc vuông -->
    <circle cx="230" cy="130" r="3.5" fill="#dc2626" />
    <text x="238" y="125" font-family="sans-serif" font-weight="bold" font-size="14" fill="#dc2626">H</text>
    <path d="M 230 115 L 215 115 L 215 130" fill="none" stroke="#dc2626" stroke-width="1.8" />

    <!-- Đỉnh -->
    <circle cx="230" cy="30" r="4" fill="#1e293b" />
    <text x="225" y="18" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>

    <circle cx="110" cy="130" r="4" fill="#1e293b" />
    <text x="92" y="135" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>

    <circle cx="230" cy="270" r="4" fill="#1e293b" />
    <text x="225" y="290" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>

    <circle cx="350" cy="130" r="4" fill="#1e293b" />
    <text x="360" y="135" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">D</text>

    <!-- Ký hiệu cạnh bằng nhau -->
    <line x1="165" y1="75" x2="175" y2="85" stroke="#8b5cf6" stroke-width="2" />
    <line x1="285" y1="75" x2="295" y2="85" stroke="#8b5cf6" stroke-width="2" />

    <line x1="165" y1="195" x2="175" y2="205" stroke="#8b5cf6" stroke-width="2" />
    <line x1="168" y1="199" x2="178" y2="209" stroke="#8b5cf6" stroke-width="2" />
    <line x1="285" y1="195" x2="295" y2="205" stroke="#8b5cf6" stroke-width="2" />
    <line x1="288" y1="199" x2="298" y2="209" stroke="#8b5cf6" stroke-width="2" />
  </svg>
  <p style="font-size: 0.9em; color: var(--text-secondary, #64748b); margin-top: 8px;"><em>Hình 5: Mô hình tứ giác cánh diều với hai đường chéo vuông góc tại trung điểm $H$ của $BD$</em></p>
</div>

**Lời giải chi tiết:**
a) Áp dụng kết quả Chuyên đề 2 về đường trung trực:
- Vì $AB = AD$ nên điểm $A$ cách đều hai đầu mút $B$ và $D$. Suy ra $A$ thuộc đường trung trực của đoạn thẳng $BD$.
- Vì $CB = CD$ nên điểm $C$ cách đều hai đầu mút $B$ và $D$. Suy ra $C$ thuộc đường trung trực của đoạn thẳng $BD$.
Do đó, đường thẳng nối hai điểm phân biệt $A$ và $C$ (tức đường thẳng $AC$) chính là **đường trung trực** của đoạn thẳng $BD$.

b) Theo định nghĩa của đường trung trực:
Đường trung trực của một đoạn thẳng thì vuông góc với đoạn thẳng đó tại trung điểm.
Vì $AC$ là đường trung trực của $BD$, nên ta suy ra ngay $AC \perp BD$ (tại giao điểm $H$ và $H$ là trung điểm của $BD$).

---

### Chuyên đề 4: Phương pháp tam giác phụ và bài toán chứng minh Ba điểm thẳng hàng

Để chứng minh ba điểm $A, O, B$ thẳng hàng, phương pháp kinh điển trong hình học là chứng minh góc $\widehat{AOB} = 180^\circ$ (góc bẹt) hoặc chứng minh tia $OA$ và tia $OB$ là hai tia đối nhau.

**Bài toán:** Cho tam giác $ABC$ có $AB = AC$. Lấy điểm $D$ trên cạnh $BC$ sao cho $BD = CD$ (nghĩa là $D$ là trung điểm $BC$). Lấy điểm $E$ nằm đối diện đỉnh $A$ qua điểm $D$ sao cho $EB = EC$ và $EA = ED + DA$. Chứng minh rằng ba điểm $A, D, E$ thẳng hàng.

**Lời giải chi tiết:**
- Xét $\triangle ABD$ và $\triangle ACD$ có:
  + $AB = AC$ (theo giả thiết).
  + $BD = CD$ (theo giả thiết).
  + $AD$ là cạnh chung.
  $\implies \triangle ABD = \triangle ACD$ (c.c.c).
  Suy ra $\widehat{ADB} = \widehat{ADC}$ (hai góc tương ứng).
  Vì hai góc kề bù nên: $\widehat{ADB} = \widehat{ADC} = 90^\circ$.
- Tương tự, xét $\triangle EBD$ và $\triangle ECD$ có:
  + $EB = EC$ (theo giả thiết).
  + $BD = CD$ (theo giả thiết).
  + $ED$ là cạnh chung.
  $\implies \triangle EBD = \triangle ECD$ (c.c.c).
  Suy ra $\widehat{EDB} = \widehat{EDC} = 90^\circ$.
- Điểm $A$ và điểm $E$ nằm ở hai phía đối nhau đối với đường thẳng $BC$. Do đó:
  $$\widehat{ADE} = \widehat{ADB} + \widehat{EDB} = 90^\circ + 90^\circ = 180^\circ.$$
  Góc $\widehat{ADE} = 180^\circ$ là một góc bẹt, chứng tỏ ba điểm $A, D, E$ thẳng hàng.

---

### Chuyên đề 5: Khám phá định lý Tam giác đều qua phép hoán vị đỉnh c.c.c

**Bài toán Olympic:** Một tam giác đều $ABC$ có ba cạnh bằng nhau: $AB = BC = CA$. Không sử dụng khái niệm tam giác cân, chỉ dùng duy nhất trường hợp bằng nhau (c.c.c), hãy chứng minh rằng ba góc của tam giác đó bằng nhau và mỗi góc bằng đúng $60^\circ$.

**Lời giải đỉnh cao bằng hoán vị đỉnh:**
- Xét tam giác $ABC$ và tam giác $BCA$:
  + Cạnh $AB$ của tam giác thứ nhất bằng cạnh $BC$ của tam giác thứ hai (vì $AB = BC$).
  + Cạnh $BC$ của tam giác thứ nhất bằng cạnh $CA$ của tam giác thứ hai (vì $BC = CA$).
  + Cạnh $CA$ của tam giác thứ nhất bằng cạnh $AB$ của tam giác thứ hai (vì $CA = AB$).
  Do đó: $\triangle ABC = \triangle BCA$ (c.c.c).
  Từ hai tam giác bằng nhau này, suy ra cặp góc tương ứng bằng nhau:
  $$\widehat{A} = \widehat{B} \quad (1).$$

- Tiếp tục xét tam giác $ABC$ và tam giác $CAB$:
  + Cạnh $AB = CA$.
  + Cạnh $BC = AB$.
  + Cạnh $CA = BC$.
  Do đó: $\triangle ABC = \triangle CAB$ (c.c.c).
  Từ hai tam giác bằng nhau này, suy ra cặp góc tương ứng bằng nhau:
  $$\widehat{A} = \widehat{C} \quad (2).$$

- Từ $(1)$ và $(2)$ ta có:
  $$\widehat{A} = \widehat{B} = \widehat{C}.$$
- Áp dụng định lý tổng ba góc trong tam giác:
  $$\widehat{A} + \widehat{B} + \widehat{C} = 180^\circ \implies 3\widehat{A} = 180^\circ \implies \widehat{A} = \widehat{B} = \widehat{C} = \frac{180^\circ}{3} = 60^\circ.$$
$\implies$ Một kết quả tuyệt mỹ được chứng minh chỉ bằng công cụ thuần túy c.c.c!

---

## IV. 10 Câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Cho hai tam giác bằng nhau: $\triangle MNP = \triangle DEF$. Cặp cạnh tương ứng nào sau đây bằng nhau?'
options:
  - '$MN = DF$'
  - '$NP = EF$'
  - '$MP = DE$'
  - '$NP = DE$'
answer: 2
explanation: 'Theo thứ tự các đỉnh tương ứng: $M \leftrightarrow D$, $N \leftrightarrow E$, $P \leftrightarrow F$. Cạnh $NP$ gồm đỉnh thứ hai và thứ ba, tương ứng với cạnh $EF$. Do đó $NP = EF$.'
```

```quiz
type: choice
question: 'Biết $\triangle ABC = \triangle HIK$. Nếu góc $\widehat{B} = 48^\circ$, thì góc nào của tam giác $HIK$ có số đo bằng $48^\circ$?'
options:
  - '$\widehat{H}$'
  - '$\widehat{I}$'
  - '$\widehat{K}$'
  - 'Không xác định được'
answer: 2
explanation: 'Đỉnh $B$ đứng ở vị trí thứ hai trong $\triangle ABC$, tương ứng với đỉnh $I$ đứng ở vị trí thứ hai trong $\triangle HIK$. Vì vậy $\widehat{I} = \widehat{B} = 48^\circ$.'
```

```quiz
type: choice
question: 'Điều kiện nào dưới đây là ĐỦ để kết luận $\triangle ABC = \triangle A''B''C''$ theo trường hợp Cạnh - Cạnh - Cạnh (c.c.c)?'
options:
  - '$AB = A''B''$ và $BC = B''C''$'
  - '$\widehat{A} = \widehat{A''}$, $\widehat{B} = \widehat{B''}$ và $\widehat{C} = \widehat{C''}$'
  - '$AB = A''B''$, $BC = B''C''$ và $AC = A''C''$'
  - '$AB = A''B''$ và $\widehat{B} = \widehat{B''}$'
answer: 3
explanation: 'Trường hợp bằng nhau thứ nhất (c.c.c) đòi hỏi cả ba cặp cạnh của hai tam giác phải lần lượt bằng nhau: $AB = A''B''$, $BC = B''C''$, $AC = A''C''$.'
```

```quiz
type: choice
question: 'Cho $\triangle ABC = \triangle MNP$ có chu vi tam giác $ABC$ bằng $28\text{ cm}$. Chu vi của tam giác $MNP$ bằng bao nhiêu?'
options:
  - '$14\text{ cm}$'
  - '$28\text{ cm}$'
  - '$56\text{ cm}$'
  - 'Chưa đủ dữ kiện để tính'
answer: 2
explanation: 'Hai tam giác bằng nhau có các cạnh tương ứng bằng nhau: $MN = AB$, $NP = BC$, $MP = AC$. Do đó tổng độ dài ba cạnh (chu vi) của chúng bằng nhau và cùng bằng $28\text{ cm}$.'
```

```quiz
type: choice
question: 'Cho hai tam giác $ABC$ và $DEF$ có $AB = DE$, $BC = EF$ và $AC = DF$. Cách viết nào sau đây là SAI?'
options:
  - '$\triangle ABC = \triangle DEF$'
  - '$\triangle BCA = \triangle EFD$'
  - '$\triangle CAB = \triangle FDE$'
  - '$\triangle ABC = \triangle DFE$'
answer: 4
explanation: 'Các đỉnh tương ứng là $A \leftrightarrow D$, $B \leftrightarrow E$, $C \leftrightarrow F$. Cách viết $\triangle ABC = \triangle DFE$ ghép $B \leftrightarrow F$ và $C \leftrightarrow E$ là sai thứ tự đỉnh tương ứng.'
```

```quiz
type: choice
question: 'Cho tam giác $ABC$ có $AB = AC$. Lấy điểm $D$ sao cho $DB = DC$ ($D$ khác $A$). Khẳng định nào sau đây là ĐÚNG?'
options:
  - '$\triangle ABD = \triangle ACD\text{ (c.c.c)}$'
  - '$\triangle ABD = \triangle ADC\text{ (c.c.c)}$'
  - '$AD$ không thể là phân giác của $\widehat{BAC}$'
  - '$AB = BD$'
answer: 1
explanation: 'Xét hai tam giác $ABD$ và $ACD$ có: $AB = AC$ (gt), $DB = DC$ (gt) và $AD$ là cạnh chung. Suy ra $\triangle ABD = \triangle ACD$ (c.c.c).'
```

```quiz
type: choice
question: 'Cho $\triangle DEF = \triangle GHK$ có $\widehat{D} = 70^\circ$ và $\widehat{E} = 50^\circ$. Số đo góc $\widehat{K}$ bằng bao nhiêu?'
options:
  - '$70^\circ$'
  - '$50^\circ$'
  - '$60^\circ$'
  - '$120^\circ$'
answer: 3
explanation: 'Trong tam giác $DEF$, góc $\widehat{F} = 180^\circ - (70^\circ + 50^\circ) = 60^\circ$. Vì $\triangle DEF = \triangle GHK$ nên đỉnh $F$ tương ứng với đỉnh $K \implies \widehat{K} = \widehat{F} = 60^\circ$.'
```

```quiz
type: choice
question: 'Nếu hai tam giác có ba cặp góc tương ứng bằng nhau ($\widehat{A}=\widehat{D}, \widehat{B}=\widehat{E}, \widehat{C}=\widehat{F}$), ta có thể kết luận hai tam giác đó bằng nhau không?'
options:
  - 'Có, luôn luôn bằng nhau theo trường hợp g.g.g'
  - 'Không thể kết luận, vì hai tam giác có thể có kích thước to nhỏ khác nhau'
  - 'Có, nếu chúng là tam giác nhọn'
  - 'Có, nếu chu vi của chúng đều lớn hơn $10\text{ cm}$'
answer: 2
explanation: 'Ba cặp góc bằng nhau chỉ chứng minh hai tam giác đồng dạng (cùng hình dạng), chưa đủ để bằng nhau vì kích thước các cạnh có thể bị phóng to hoặc thu nhỏ.'
```

```quiz
type: choice
question: 'Trong kỹ thuật xây dựng, người ta ghép thêm một thanh giằng chéo vào khung cửa hình chữ nhật để làm gì?'
options:
  - 'Để khung cửa nhẹ hơn'
  - 'Để chia khung chữ nhật thành hai hình tam giác, làm cho khung trở nên cứng vững và không bị xô lệch'
  - 'Để trang trí cho khung cửa đẹp hơn'
  - 'Để khung cửa dễ dàng uốn cong khi gặp nhiệt độ cao'
answer: 2
explanation: 'Dựa vào tính chất trường hợp bằng nhau c.c.c, tam giác có ba cạnh cố định thì góc không thay đổi, giữ cho toàn bộ kết cấu cứng vững, chống méo xệch.'
```

```quiz
type: choice
question: 'Cho đoạn thẳng $AB$. Vẽ cung tròn tâm $A$ bán kính $4\text{ cm}$ và cung tròn tâm $B$ bán kính $4\text{ cm}$, chúng cắt nhau tại hai điểm $M$ và $N$. Đường thẳng $MN$ có quan hệ gì với đoạn thẳng $AB$?'
options:
  - '$MN$ song song với $AB$'
  - '$MN$ là đường trung trực của đoạn thẳng $AB$'
  - '$MN$ trùng với $AB$'
  - '$MN$ đi qua đầu mút $A$'
answer: 2
explanation: 'Vì $MA = MB = 4\text{ cm}$ và $NA = NB = 4\text{ cm}$, hai điểm $M$ và $N$ đều cách đều hai đầu mút $A$ và $B$. Do đó đường thẳng $MN$ là đường trung trực của đoạn thẳng $AB$.'
```

---

## V. Đề kiểm tra đánh giá năng lực học sinh

### Đề 1: Kiểm tra 15 phút (Đánh giá nhanh mức độ tiếp thu)

#### Phần 1: Trắc nghiệm khách quan (4 câu - 4 điểm)

**Câu 1 (1 điểm):** Cho $\triangle ABC = \triangle PQR$. Biết $BC = 7\text{ cm}$. Cạnh nào của tam giác $PQR$ có độ dài bằng $7\text{ cm}$?
- A. $PQ$
- B. $QR$
- C. $PR$
- D. Không xác định được

**Câu 2 (1 điểm):** Cho hai tam giác $MNP$ và $XYZ$ có $MN = XY$, $NP = YZ$, $MP = XZ$. Khẳng định nào sau đây viết ĐÚNG?
- A. $\triangle MNP = \triangle XYZ$
- B. $\triangle MNP = \triangle YXZ$
- C. $\triangle MNP = \triangle ZYX$
- D. $\triangle NPM = \triangle XYZ$

**Câu 3 (1 điểm):** Cho $\triangle ABC = \triangle DEG$ có $\widehat{A} = 40^\circ, \widehat{E} = 60^\circ$. Số đo của góc $\widehat{C}$ là:
- A. $40^\circ$
- B. $60^\circ$
- C. $80^\circ$
- D. $100^\circ$

**Câu 4 (1 điểm):** Để chứng minh $\triangle OAB = \triangle OCD$ theo trường hợp c.c.c, ta cần chỉ ra:
- A. Ba cặp góc tương ứng bằng nhau
- B. Hai cặp cạnh và một cặp góc bằng nhau
- C. Ba cặp cạnh tương ứng bằng nhau: $OA = OC, OB = OD, AB = CD$
- D. Một cặp cạnh bằng nhau

---

#### Phần 2: Tự luận (1 bài - 6 điểm)

**Bài toán:** Cho hình vẽ có $AB = AD$ và $CB = CD$.
a) (3,0 điểm) Chứng minh rằng $\triangle ABC = \triangle ADC$.
b) (2,0 điểm) Chứng minh rằng $AC$ là tia phân giác của góc $\widehat{BAD}$.
c) (1,0 điểm) Biết góc $\widehat{B} = 105^\circ$. Hãy tính số đo của góc $\widehat{D}$.

---

#### Hướng dẫn chấm & Barem điểm Đề 15 phút

| Câu | Nội dung đáp án | Điểm |
| :--- | :--- | :--- |
| **TN 1** | Đáp án **B** ($QR = BC = 7\text{ cm}$) | 1,0 đ |
| **TN 2** | Đáp án **A** ($\triangle MNP = \triangle XYZ$) | 1,0 đ |
| **TN 3** | Đáp án **C** ($\widehat{B} = \widehat{E} = 60^\circ \implies \widehat{C} = 180^\circ - (40^\circ + 60^\circ) = 80^\circ$) | 1,0 đ |
| **TN 4** | Đáp án **C** (Ba cặp cạnh tương ứng bằng nhau) | 1,0 đ |
| **TL a** | Xét $\triangle ABC$ và $\triangle ADC$ có: $AB = AD$ (gt); $CB = CD$ (gt); $AC$ là cạnh chung.<br>Kết luận: $\triangle ABC = \triangle ADC$ (c.c.c). | 3,0 đ |
| **TL b** | Từ câu a $\implies \widehat{BAC} = \widehat{DAC}$ (hai góc tương ứng).<br>Vì tia $AC$ nằm giữa hai tia $AB, AD$ nên $AC$ là tia phân giác của $\widehat{BAD}$. | 2,0 đ |
| **TL c** | Vì $\triangle ABC = \triangle ADC \implies \widehat{D} = \widehat{B}$ (hai góc tương ứng).<br>Mà $\widehat{B} = 105^\circ \implies \widehat{D} = 105^\circ$. | 1,0 đ |

---

### Đề 2: Kiểm tra 45 phút (Đánh giá định kỳ toàn diện)

#### Ma trận đề thi 45 phút

| Cấp độ tư duy | Trắc nghiệm (3 điểm) | Tự luận (7 điểm) | Tổng điểm |
| :--- | :---: | :---: | :---: |
| **Nhận biết** | 3 câu (1,5 đ) | Bài 1a (2,0 đ) | **3,5 điểm (35%)** |
| **Thông hiểu** | 2 câu (1,0 đ) | Bài 1b, Bài 2a (2,5 đ) | **3,5 điểm (35%)** |
| **Vận dụng** | 1 câu (0,5 đ) | Bài 2b (1,5 đ) | **2,0 điểm (20%)** |
| **Vận dụng cao** | - | Bài 3 (1,0 đ) | **1,0 điểm (10%)** |
| **Tổng cộng** | **6 câu (3,0 đ)** | **3 bài (7,0 đ)** | **10,0 điểm (100%)** |

---

#### Phần 1: Trắc nghiệm khách quan (6 câu - 3 điểm)

**Câu 1:** Cho $\triangle ABC = \triangle MNP$. Khẳng định nào sau đây là SAI?
- A. $AB = MN$
- B. $AC = MP$
- C. $\widehat{A} = \widehat{M}$
- D. $\widehat{C} = \widehat{N}$

**Câu 2:** Cho $\triangle HIK = \triangle DEG$ có $HI = 5\text{ cm}, IK = 7\text{ cm}, EG = 7\text{ cm}, DG = 9\text{ cm}$. Chu vi tam giác $HIK$ là:
- A. $19\text{ cm}$
- B. $21\text{ cm}$
- C. $23\text{ cm}$
- D. $25\text{ cm}$

**Câu 3:** Cho hình vẽ có hai tam giác $OAB$ và $OAB'$ với $OA$ là cạnh chung, $OB = OB'$, $AB = AB'$. Ta có $\triangle OAB = \triangle OAB'$ theo trường hợp nào?
- A. Cạnh - Cạnh - Cạnh (c.c.c)
- B. Cạnh - Góc - Cạnh (c.g.c)
- C. Góc - Cạnh - Góc (g.c.g)
- D. Góc - Góc - Cạnh

**Câu 4:** Biết $\triangle ABC = \triangle DEF$ có $\widehat{A} = 55^\circ, \widehat{B} = 65^\circ$. Số đo của góc $\widehat{F}$ bằng:
- A. $55^\circ$
- B. $65^\circ$
- C. $60^\circ$
- D. $120^\circ$

**Câu 5:** Hai tam giác có ba cặp cạnh tương ứng bằng nhau thì:
- A. Chu vi bằng nhau nhưng các góc có thể khác nhau
- B. Bằng nhau và các cặp góc tương ứng cũng bằng nhau
- C. Chỉ bằng nhau khi đó là tam giác đều
- D. Không thể xác định được các đỉnh tương ứng

**Câu 6:** Cho tam giác $ABC$ có $AB = AC$. Gọi $M$ là trung điểm của cạnh $BC$. Khẳng định nào sau đây SAI?
- A. $\triangle ABM = \triangle ACM$
- B. $AM \perp BC$
- C. $\widehat{B} = \widehat{C}$
- D. $AB = BC$

---

#### Phần 2: Tự luận (3 bài - 7 điểm)

**Bài 1 (3,0 điểm):**
Cho tứ giác $MNPQ$ có $MN = PQ$ và $MQ = PN$.
a) (2,0 điểm) Chứng minh rằng $\triangle MNQ = \triangle PQN$.
b) (1,0 điểm) Chứng minh rằng $MN \parallel PQ$ và $MQ \parallel PN$.

**Bài 2 (3,0 điểm):**
Cho tam giác $ABC$ có $AB = AC$. Lấy điểm $D$ trên cạnh $BC$ sao cho $BD = CD$.
a) (1,5 điểm) Chứng minh $\triangle ABD = \triangle ACD$.
b) (1,0 điểm) Chứng minh $AD \perp BC$.
c) (0,5 điểm) Biết $AB = 10\text{ cm}, AD = 8\text{ cm}, BD = 6\text{ cm}$. Tính chu vi tam giác $ABC$.

**Bài 3 (1,0 điểm - Vận dụng cao Olympic):**
Cho đoạn thẳng $AB$. Lấy điểm $C$ và điểm $D$ ở hai phía đối nhau của đường thẳng $AB$ sao cho $AC = BC$ và $AD = BD$. Nối $CD$ cắt $AB$ tại điểm $H$. Chứng minh rằng $H$ là trung điểm của đoạn thẳng $AB$ và $CD \perp AB$.

---

#### Hướng dẫn chấm & Barem điểm chi tiết Đề 45 phút

##### Phần 1: Trắc nghiệm (3,0 điểm - mỗi câu đúng 0,5 điểm)
- Câu 1: **D** ($\widehat{C}$ phải tương ứng với $\widehat{P}$, không phải $\widehat{N}$)
- Câu 2: **B** ($HK = DG = 9\text{ cm} \implies$ Chu vi $= 5 + 7 + 9 = 21\text{ cm}$)
- Câu 3: **A** (c.c.c vì có $3$ cặp cạnh bằng nhau)
- Câu 4: **C** ($\widehat{C} = 180^\circ - (55^\circ + 65^\circ) = 60^\circ \implies \widehat{F} = \widehat{C} = 60^\circ$)
- Câu 5: **B** (Hai tam giác bằng nhau và các góc tương ứng bằng nhau)
- Câu 6: **D** (Giả thiết chỉ cho $AB = AC$, không có điều kiện $AB = BC$)

##### Phần 2: Tự luận (7,0 điểm)

**Bài 1 (3,0 điểm):**
- **a) (2,0 điểm):**
  + Nêu xét $\triangle MNQ$ và $\triangle PQN$: $MN = PQ$ (gt) $(0,5\text{ đ})$.
  + $MQ = PN$ (gt) $(0,5\text{ đ})$.
  + $NQ$ là cạnh chung $(0,5\text{ đ})$.
  + Kết luận $\triangle MNQ = \triangle PQN$ (c.c.c) $(0,5\text{ đ})$.
- **b) (1,0 điểm):**
  + Từ câu a suy ra $\widehat{MNQ} = \widehat{PQN}$ (hai góc tương ứng). Mà hai góc này ở vị trí so le trong $\implies MN \parallel PQ$ $(0,5\text{ đ})$.
  + Tương tự $\widehat{MQN} = \widehat{PNQ}$ (so le trong) $\implies MQ \parallel PN$ $(0,5\text{ đ})$.

**Bài 2 (3,0 điểm):**
- **a) (1,5 điểm):**
  + Xét $\triangle ABD$ và $\triangle ACD$ có: $AB = AC$ (gt); $BD = CD$ (gt); $AD$ là cạnh chung $(1,0\text{ đ})$.
  + Kết luận $\triangle ABD = \triangle ACD$ (c.c.c) $(0,5\text{ đ})$.
- **b) (1,0 điểm):**
  + Suy ra $\widehat{ADB} = \widehat{ADC}$ (hai góc tương ứng) $(0,5\text{ đ})$.
  + Mà $\widehat{ADB} + \widehat{ADC} = 180^\circ$ (kề bù) $\implies \widehat{ADB} = \widehat{ADC} = 90^\circ \implies AD \perp BC$ $(0,5\text{ đ})$.
- **c) (0,5 điểm):**
  + Vì $D$ là trung điểm $BC$ và $BD = 6\text{ cm} \implies CD = 6\text{ cm} \implies BC = 12\text{ cm}$.
  + Vì $AC = AB = 10\text{ cm} \implies$ Chu vi $\triangle ABC = AB + AC + BC = 10 + 10 + 12 = 32\text{ cm}$ $(0,5\text{ đ})$.

**Bài 3 (1,0 điểm):**
- Xét $\triangle ACD$ và $\triangle BCD$ có: $AC = BC$ (gt); $AD = BD$ (gt); $CD$ là cạnh chung $\implies \triangle ACD = \triangle BCD$ (c.c.c) $(0,25\text{ đ})$.
- Suy ra $\widehat{ACD} = \widehat{BCD}$ hay $\widehat{ACH} = \widehat{BCH}$ $(0,25\text{ đ})$.
- Nối $AH, BH$. Do điểm $C$ và $D$ cùng nằm trên đường trung trực của đoạn thẳng $AB$ (theo Chuyên đề 2, vì $CA = CB$ và $DA = DB$), nên đường thẳng nối $C$ và $D$ chính là đường trung trực của đoạn thẳng $AB$ $(0,25\text{ đ})$.
- Vì đường trung trực cắt đoạn thẳng tại trung điểm và vuông góc với đoạn thẳng đó, nên giao điểm $H$ chính là trung điểm của $AB$ và $CD \perp AB$ $(0,25\text{ đ})$.

---

## VI. Bảng tổng kết ghi nhớ vàng

| Nội dung cốt lõi | Công thức / Ký hiệu | Ý nghĩa & Ứng dụng |
| :--- | :--- | :--- |
| **Hai tam giác bằng nhau** | $\triangle ABC = \triangle A'B'C'$ | $3$ cặp cạnh bằng nhau và $3$ cặp góc tương ứng bằng nhau. |
| **Quy tắc thứ tự đỉnh** | $A \leftrightarrow A', B \leftrightarrow B', C \leftrightarrow C'$ | Bắt buộc ghi chuẩn xác để suy luận cạnh và góc tương ứng. |
| **Trường hợp c.c.c** | Ba cạnh bằng nhau $\implies$ Hai tam giác bằng nhau | Không cần đo góc, chỉ cần $3$ cặp cạnh bằng nhau. |
| **Cạnh chung** | Đoạn thẳng chung của hai tam giác | Đóng vai trò là một cặp cạnh bằng nhau hiển nhiên. |
| **Chứng minh song song** | Góc so le trong bằng nhau | Suy ra từ hai góc tương ứng của hai tam giác bằng nhau. |
| **Chứng minh vuông góc** | Hai góc kề bù bằng nhau | $\widehat{M_1} = \widehat{M_2}$ và $\widehat{M_1} + \widehat{M_2} = 180^\circ \implies \widehat{M_1} = 90^\circ$. |
| **Tính cứng vững của tam giác** | Cấu trúc hình học bất biến | Ứng dụng chế tạo giàn giáo, giàn cầu, vì kèo mái nhà. |
