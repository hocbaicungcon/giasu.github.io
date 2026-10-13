---
title: 'Toán 7 Bài 15: Các trường hợp bằng nhau của tam giác vuông - Lý thuyết, Dạng toán và 5 Chuyên đề Olympic'
description: 'Làm chủ 4 trường hợp bằng nhau của tam giác vuông: hai cạnh góc vuông, cạnh góc vuông-góc nhọn kề, cạnh huyền-góc nhọn, cạnh huyền-cạnh góc vuông. Bài giảng có hình SVG, 5 chuyên đề Olympic, 10 quiz tương tác và 2 đề kiểm tra.'
category: Toán học
type: Bài học
date: '2026-10-13'
tags:
  - Toán học
  - Toán 7
  - Hình học 7
  - Tam giác vuông
  - Hai tam giác bằng nhau
  - Trường hợp cạnh huyền
  - Tia phân giác
  - Đường trung trực
  - Kết nối tri thức
grade: 7
---

# Bài 15. Các trường hợp bằng nhau của tam giác vuông

Trong thiên văn học cổ đại, từ 2 500 năm trước, nhà khoa học Hy Lạp **Aristarchus xứ Samos** đã đo được khoảng cách từ Trái Đất đến Mặt Trăng và Mặt Trời chỉ bằng... cây gậy và bóng đổ xuống đất! Ông nhận ra rằng: tia sáng Mặt Trời chiếu thẳng đứng tạo ra các **tam giác vuông đồng dạng** — và hơn nữa, bằng cách đo chiều dài cây gậy và chiều dài bóng, ông biết **tam giác vuông nào bằng tam giác vuông nào**, từ đó tính được tỉ lệ khoảng cách!

Ngày nay, kỹ thuật **chiếu sáng và đo bóng** của Aristarchus vẫn được sử dụng trong công nghệ GPS, đo lường địa lý, thiết kế bóng đèn, kiến trúc ánh sáng... Tất cả đều dựa vào một câu hỏi cốt lõi: **Cần những điều kiện tối thiểu nào để hai tam giác vuông bằng nhau?**

Câu trả lời chính là chủ đề của bài học hôm nay: **4 trường hợp bằng nhau đặc trưng của tam giác vuông**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 15: CÁC TRƯỜNG HỢP BẰNG NHAU CỦA TAM GIÁC VUÔNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Hai cạnh góc vuông (cgv–cgv)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Đây chính là trường hợp c.g.c với <b>góc xen giữa là góc vuông 90°</b>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Cạnh góc vuông – Góc nhọn kề (cgv–gn)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Đây chính là trường hợp g.c.g áp dụng cho tam giác vuông — <b>góc nhọn phải kề đúng cạnh góc vuông đó</b>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Cạnh huyền – Góc nhọn (ch–gn)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Vì hai góc nhọn phụ nhau, biết một góc nhọn suy ra góc nhọn còn lại, tức là đủ điều kiện g.c.g.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Cạnh huyền – Cạnh góc vuông (ch–cgv)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Đây là trường hợp <b>riêng của tam giác vuông</b>. Với tam giác thường, biết hai cạnh và một góc không xen giữa thì không đủ!</p>
    </div>
  </div>
</div>

---

## 0. Khởi động — Kiểm tra kiến thức nền tảng (5–7 phút)

1. **Tổng góc tam giác vuông:** Phát biểu định lý tổng ba góc trong một tam giác. Trong một tam giác vuông, hai góc nhọn có quan hệ gì với nhau?
2. **Tính góc nhọn còn lại:** Cho tam giác $ABC$ vuông tại $A$, biết $\widehat{B} = 35^\circ$. Tính số đo $\widehat{C}$.
3. **Trường hợp c.g.c:** Phát biểu trường hợp bằng nhau Cạnh - Góc - Cạnh (c.g.c) của hai tam giác.
4. **Trường hợp g.c.g:** Phát biểu trường hợp bằng nhau Góc - Cạnh - Góc (g.c.g) của hai tam giác.
5. **Nhận dạng cạnh huyền:** Trong tam giác vuông, cạnh nào được gọi là **cạnh huyền**? Hai cạnh còn lại được gọi là gì?

<details>
<summary><b>BẤM XEM LỜI GIẢI KHỞI ĐỘNG</b></summary>

1. **Trả lời:** Tổng ba góc trong một tam giác luôn bằng $180^\circ$. Trong tam giác vuông, hai góc nhọn **phụ nhau** (có tổng bằng $90^\circ$).
2. **Trả lời:**
   $$\widehat{C} = 90^\circ - \widehat{B} = 90^\circ - 35^\circ = 55^\circ.$$
3. **Trả lời:** Nếu hai cạnh và **góc xen giữa** của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau (trường hợp c.g.c).
4. **Trả lời:** Nếu một cạnh và **hai góc kề** cạnh ấy của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau (trường hợp g.c.g).
5. **Trả lời:** Cạnh đối diện với góc vuông là **cạnh huyền** (cạnh dài nhất trong tam giác vuông). Hai cạnh còn lại là **hai cạnh góc vuông**.
</details>

---

## I. Lý thuyết trọng tâm

### Nhắc lại cấu trúc tam giác vuông

Trước khi học 4 trường hợp bằng nhau, chúng ta thống nhất về cách đặt tên trong tam giác vuông:

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 480 220" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác ABC vuông tại A -->
    <polygon points="80,180 80,50 360,180" fill="rgba(37,99,235,0.07)" stroke="#2563eb" stroke-width="2.5" />
    <!-- Ký hiệu góc vuông tại A -->
    <path d="M 80,160 L 100,160 L 100,180" fill="none" stroke="#2563eb" stroke-width="2" />
    <!-- Đỉnh -->
    <circle cx="80" cy="180" r="4" fill="#1e293b"/>
    <text x="60" y="198" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">A</text>
    <circle cx="80" cy="50" r="4" fill="#1e293b"/>
    <text x="60" y="48" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">B</text>
    <circle cx="360" cy="180" r="4" fill="#1e293b"/>
    <text x="368" y="198" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">C</text>
    <!-- Nhãn cạnh -->
    <text x="50" y="118" font-family="sans-serif" font-size="13" fill="#2563eb" transform="rotate(-90,50,118)">AB (cgv)</text>
    <text x="185" y="198" font-family="sans-serif" font-size="13" fill="#2563eb">AC (cgv)</text>
    <text x="195" y="105" font-family="sans-serif" font-size="13" fill="#dc2626" transform="rotate(-22,195,105)">BC (cạnh huyền)</text>
    <!-- Góc nhọn B và C -->
    <path d="M 80,75 A 25 25 0 0 1 105,76" fill="none" stroke="#d97706" stroke-width="2"/>
    <text x="108" y="80" font-family="sans-serif" font-size="12" fill="#d97706">B (nhọn)</text>
    <path d="M 335,180 A 25 25 0 0 0 348,157" fill="none" stroke="#d97706" stroke-width="2"/>
    <text x="290" y="162" font-family="sans-serif" font-size="12" fill="#d97706">C (nhọn)</text>
  </svg>
  <p style="font-size:0.9em; color: var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Tam giác ABC vuông tại A — cạnh huyền BC đối diện góc vuông, hai cạnh góc vuông AB và AC</em></p>
</div>

> [!NOTE]
> **Quy tắc nhận dạng nhanh:**
> - **Cạnh huyền** = cạnh đối diện góc vuông = cạnh **dài nhất**.
> - **Cạnh góc vuông (cgv)** = cạnh tạo thành góc vuông = hai cạnh còn lại.
> - Trong $\triangle ABC$ vuông tại $A$: cạnh huyền $= BC$, hai cgv $= AB$ và $AC$.

---

### 1. Trường hợp thứ nhất: Hai cạnh góc vuông bằng nhau (cgv – cgv)

> [!IMPORTANT]
> **ĐỊNH LÝ (cgv – cgv):**
> Nếu **hai cạnh góc vuông** của tam giác vuông này lần lượt bằng **hai cạnh góc vuông** của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.

**Bản chất:** Đây chính là trường hợp **c.g.c** áp dụng cho tam giác vuông, với góc xen giữa là **góc vuông $90^\circ$** (góc vuông luôn bằng nhau, nên chỉ cần kiểm tra hai cạnh góc vuông).

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 620 200" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác ABC vuông tại A -->
    <polygon points="80,170 80,50 260,170" fill="rgba(37,99,235,0.07)" stroke="#2563eb" stroke-width="2.5"/>
    <path d="M 80,150 L 100,150 L 100,170" fill="none" stroke="#2563eb" stroke-width="2"/>
    <circle cx="80" cy="170" r="4" fill="#1e293b"/><text x="62" y="186" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">A</text>
    <circle cx="80" cy="50" r="4" fill="#1e293b"/><text x="62" y="46" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">B</text>
    <circle cx="260" cy="170" r="4" fill="#1e293b"/><text x="268" y="186" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">C</text>
    <!-- 1 vạch trên AB -->
    <line x1="73" y1="105" x2="87" y2="115" stroke="#2563eb" stroke-width="2.5"/>
    <!-- 2 vạch trên AC -->
    <line x1="163" y1="165" x2="173" y2="175" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="167" y1="169" x2="177" y2="179" stroke="#2563eb" stroke-width="2.5"/>

    <!-- Tam giác DEF vuông tại D -->
    <polygon points="380,170 380,50 560,170" fill="rgba(16,185,129,0.07)" stroke="#10b981" stroke-width="2.5"/>
    <path d="M 380,150 L 400,150 L 400,170" fill="none" stroke="#10b981" stroke-width="2"/>
    <circle cx="380" cy="170" r="4" fill="#1e293b"/><text x="362" y="186" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">D</text>
    <circle cx="380" cy="50" r="4" fill="#1e293b"/><text x="362" y="46" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">E</text>
    <circle cx="560" cy="170" r="4" fill="#1e293b"/><text x="568" y="186" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">F</text>
    <!-- 1 vạch trên DE -->
    <line x1="373" y1="105" x2="387" y2="115" stroke="#10b981" stroke-width="2.5"/>
    <!-- 2 vạch trên DF -->
    <line x1="463" y1="165" x2="473" y2="175" stroke="#10b981" stroke-width="2.5"/>
    <line x1="467" y1="169" x2="477" y2="179" stroke="#10b981" stroke-width="2.5"/>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 2: cgv–cgv — Hai tam giác vuông tại A và D có AB = DE (1 vạch) và AC = DF (2 vạch) nên bằng nhau</em></p>
</div>

**Ký hiệu trình bày:**
Nếu $\triangle ABC$ (vuông tại $A$) và $\triangle DEF$ (vuông tại $D$) có $AB = DE$ và $AC = DF$, thì:
$$\triangle ABC = \triangle DEF\quad\text{(cgv – cgv)}.$$

---

### 2. Trường hợp thứ hai: Cạnh góc vuông và góc nhọn kề (cgv – gn)

> [!IMPORTANT]
> **ĐỊNH LÝ (cgv – gn):**
> Nếu **một cạnh góc vuông** và **góc nhọn kề cạnh ấy** của tam giác vuông này bằng của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.

**Bản chất:** Đây là trường hợp **g.c.g** cho tam giác vuông: cạnh cgv kề với **góc vuông** ($90^\circ$, luôn bằng nhau) và kề với góc nhọn bằng nhau. Ba điều kiện g.c.g đã thỏa.

> [!WARNING]
> **Lưu ý quan trọng:** Góc nhọn bằng nhau **bắt buộc phải kề** với chính cạnh góc vuông đó. Không được nhầm sang góc nhọn đối diện với cạnh góc vuông đó.

---

### 3. Trường hợp thứ ba: Cạnh huyền và góc nhọn bằng nhau (ch – gn)

> [!IMPORTANT]
> **ĐỊNH LÝ (ch – gn):**
> Nếu **cạnh huyền** và **một góc nhọn** của tam giác vuông này bằng cạnh huyền và một góc nhọn của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.

**Bản chất (tại sao hoạt động được?):**
Trong $\triangle ABC$ vuông tại $A$: $\widehat{B} + \widehat{C} = 90^\circ$.
Trong $\triangle DEF$ vuông tại $D$: $\widehat{E} + \widehat{F} = 90^\circ$.
Nếu $\widehat{B} = \widehat{E}$ thì suy ra ngay $\widehat{C} = \widehat{F}$ (cùng phụ nhau với góc bằng nhau).
Kết hợp $BC = EF$ (cạnh huyền), ta có **cạnh huyền** kề **hai góc nhọn bằng nhau** $\implies$ thỏa mãn điều kiện **g.c.g**.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 620 210" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác ABC vuông tại A -->
    <polygon points="80,180 80,50 320,180" fill="rgba(245,158,11,0.07)" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M 80,160 L 100,160 L 100,180" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="80" cy="180" r="4" fill="#1e293b"/><text x="62" y="196" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">A</text>
    <circle cx="80" cy="50" r="4" fill="#1e293b"/><text x="62" y="46" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">B</text>
    <circle cx="320" cy="180" r="4" fill="#1e293b"/><text x="328" y="196" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">C</text>
    <!-- cạnh huyền 2 gạch -->
    <line x1="191" y1="109" x2="209" y2="117" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="195" y1="117" x2="213" y2="125" stroke="#dc2626" stroke-width="2.5"/>
    <!-- góc nhọn B -->
    <path d="M 80,72 A 22 22 0 0 1 102,74" fill="none" stroke="#d97706" stroke-width="2.5"/>
    <text x="108" y="80" font-family="sans-serif" font-size="12" fill="#d97706">B</text>

    <!-- Tam giác DEF vuông tại D -->
    <polygon points="380,180 380,50 620,180" fill="rgba(139,92,246,0.07)" stroke="#8b5cf6" stroke-width="2.5"/>
    <path d="M 380,160 L 400,160 L 400,180" fill="none" stroke="#8b5cf6" stroke-width="2"/>
    <circle cx="380" cy="180" r="4" fill="#1e293b"/><text x="362" y="196" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">D</text>
    <circle cx="380" cy="50" r="4" fill="#1e293b"/><text x="362" y="46" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">E</text>
    <circle cx="620" cy="180" r="4" fill="#1e293b"/><text x="626" y="196" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">F</text>
    <!-- cạnh huyền 2 gạch -->
    <line x1="491" y1="109" x2="509" y2="117" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="495" y1="117" x2="513" y2="125" stroke="#dc2626" stroke-width="2.5"/>
    <!-- góc nhọn E -->
    <path d="M 380,72 A 22 22 0 0 1 402,74" fill="none" stroke="#d97706" stroke-width="2.5"/>
    <text x="408" y="80" font-family="sans-serif" font-size="12" fill="#d97706">E</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 3: ch–gn — Cạnh huyền BC = EF (2 gạch đỏ) và góc nhọn B = E (vòng cung cam) nên hai tam giác vuông bằng nhau</em></p>
</div>

---

### 4. Trường hợp thứ tư: Cạnh huyền và cạnh góc vuông bằng nhau (ch – cgv)

> [!IMPORTANT]
> **ĐỊNH LÝ (ch – cgv):**
> Nếu **cạnh huyền** và **một cạnh góc vuông** của tam giác vuông này bằng cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.

**Bản chất (tại sao hoạt động được?):**
Giả sử $BC = EF$ và $AC = DF$. Áp dụng **Định lý Pythagoras**:
$$AB^2 = BC^2 - AC^2 = EF^2 - DF^2 = DE^2 \implies AB = DE.$$
Như vậy ba cạnh đôi một bằng nhau $\implies$ hai tam giác vuông bằng nhau theo **c.c.c**.

> [!CAUTION]
> **Chỉ dùng được cho tam giác VUÔNG!** Với tam giác thường, biết "hai cạnh và một góc không xen giữa" (trường hợp SSA) là không đủ để kết luận bằng nhau. Trường hợp ch–cgv hoạt động được đúng là nhờ có góc vuông $90^\circ$.

---

### 5. Bảng tổng hợp và so sánh 4 trường hợp

| Trường hợp | Điều kiện cần kiểm tra | Suy ra từ | Ghi nhớ |
| :--- | :--- | :--- | :--- |
| **cgv–cgv** | Hai cạnh góc vuông bằng nhau | c.g.c | Góc xen giữa là góc vuông |
| **cgv–gn** | 1 cgv + góc nhọn kề cgv đó | g.c.g | Góc nhọn phải **kề** cgv đang xét |
| **ch–gn** | Cạnh huyền + 1 góc nhọn | g.c.g (suy luận qua phụ góc) | Biết 1 góc nhọn $\to$ biết góc nhọn còn lại |
| **ch–cgv** | Cạnh huyền + 1 cgv | c.c.c (suy ra từ Pythagoras) | **Chỉ dùng** cho tam giác vuông! |

---

### 6. Quy trình 4 bước chứng minh hai tam giác vuông bằng nhau

1. **Bước 1 (Xác nhận hai tam giác đều vuông):** Phải chỉ rõ đỉnh góc vuông của từng tam giác: "Tam giác $ABC$ vuông tại $A$" và "Tam giác $DEF$ vuông tại $D$".
2. **Bước 2 (Xác định trường hợp cần dùng):** Xem đề bài cho hoặc có thể suy ra điều kiện nào (cạnh chung, cạnh huyền bằng nhau, góc nhọn bằng nhau, tia phân giác, …).
3. **Bước 3 (Trình bày "Xét hai tam giác vuông …"):** Viết đầy đủ các điều kiện đã có kèm giải thích nguồn gốc.
4. **Bước 4 (Kết luận và suy luận):** "Vậy $\triangle ABC = \triangle DEF$ (cgv–cgv / cgv–gn / ch–gn / ch–cgv)." Tiếp theo suy ra cạnh, góc tương ứng cần thiết.

---

## II. Các dạng bài tập điển hình và phương pháp giải

### Dạng 1: Nhận dạng và phân loại trường hợp bằng nhau

**Phương pháp:** Đọc đề bài, liệt kê các yếu tố bằng nhau đã biết, sau đó đối chiếu với bảng 4 trường hợp để xác định đúng trường hợp tương ứng.

#### Ví dụ 1
Mỗi trường hợp sau tương ứng với trường hợp bằng nhau nào của hai tam giác vuông?
a) Hai cạnh góc vuông của tam giác này bằng hai cạnh góc vuông của tam giác kia.
b) Cạnh huyền và một góc nhọn bằng nhau.
c) Một cạnh góc vuông và góc nhọn kề bằng nhau.
d) Cạnh huyền và một cạnh góc vuông bằng nhau.

**Lời giải:**
- a) **cgv – cgv** (Suy ra từ c.g.c, góc xen giữa là góc vuông)
- b) **ch – gn** (Suy ra từ g.c.g thông qua hai góc nhọn phụ nhau)
- c) **cgv – gn** (Suy ra từ g.c.g, cạnh góc vuông kề góc vuông $90^\circ$ và góc nhọn)
- d) **ch – cgv** (Trường hợp riêng của tam giác vuông, suy ra từ định lý Pythagoras)

---

### Dạng 2: Chứng minh hai tam giác vuông bằng nhau bằng cgv – cgv hoặc cgv – gn

#### Ví dụ 2 (Mô hình con diều với đường chéo vuông góc)
Cho tứ giác $ACBD$ có hai đường chéo $AB$ và $CD$ vuông góc với nhau tại $E$, và $E$ là trung điểm của cả $AB$ lẫn $CD$.
Chứng minh $\triangle AEC = \triangle AED$ và suy ra $AC = AD$ và $BC = BD$.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 440 300" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Điểm E trung tâm -->
    <circle cx="220" cy="150" r="4.5" fill="#1e293b"/>
    <text x="230" y="145" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">E</text>
    <!-- Đường chéo AB dọc -->
    <line x1="220" y1="30" x2="220" y2="270" stroke="#2563eb" stroke-width="2.5"/>
    <!-- Đường chéo CD ngang -->
    <line x1="60" y1="150" x2="380" y2="150" stroke="#10b981" stroke-width="2.5"/>
    <!-- Ký hiệu vuông góc -->
    <path d="M 220,135 L 235,135 L 235,150" fill="none" stroke="#dc2626" stroke-width="2"/>
    <!-- Đỉnh -->
    <circle cx="220" cy="30" r="4" fill="#1e293b"/><text x="225" y="28" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">A</text>
    <circle cx="220" cy="270" r="4" fill="#1e293b"/><text x="225" y="285" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">B</text>
    <circle cx="60" cy="150" r="4" fill="#1e293b"/><text x="40" y="158" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">C</text>
    <circle cx="380" cy="150" r="4" fill="#1e293b"/><text x="388" y="158" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">D</text>
    <!-- Cạnh AC và AD -->
    <line x1="220" y1="30" x2="60" y2="150" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="220" y1="30" x2="380" y2="150" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- Ký hiệu bằng nhau EC=ED -->
    <line x1="134" y1="145" x2="144" y2="155" stroke="#10b981" stroke-width="2.5"/>
    <line x1="296" y1="145" x2="306" y2="155" stroke="#10b981" stroke-width="2.5"/>
    <!-- Ký hiệu bằng nhau EA=EB -->
    <line x1="215" y1="88" x2="225" y2="98" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="219" y1="92" x2="229" y2="102" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="215" y1="200" x2="225" y2="210" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="219" y1="204" x2="229" y2="214" stroke="#2563eb" stroke-width="2.5"/>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 4: Mô hình con diều — đường chéo AB và CD vuông góc nhau tại trung điểm E</em></p>
</div>

**Lời giải chi tiết:**
Vì $AB \perp CD$ tại $E$ nên $\widehat{AEC} = \widehat{AED} = 90^\circ$.
Vì $E$ là trung điểm của $CD$ nên $EC = ED$.
Xét hai tam giác vuông $\triangle AEC$ (vuông tại $E$) và $\triangle AED$ (vuông tại $E$) có:
- $EA$ là cạnh góc vuông chung;
- $EC = ED$ (cạnh góc vuông, vì $E$ là trung điểm $CD$).
Do đó:
$$\triangle AEC = \triangle AED\quad\text{(cgv – cgv)}.$$
Suy ra $AC = AD$ (hai cạnh huyền tương ứng bằng nhau).

Tương tự, xét $\triangle BEC$ và $\triangle BED$ có:
- $EB$ là cạnh góc vuông chung;
- $EC = ED$.
Do đó $\triangle BEC = \triangle BED$ (cgv–cgv) $\implies BC = BD$.

---

### Dạng 3: Chứng minh theo trường hợp cạnh huyền – góc nhọn hoặc cạnh huyền – cạnh góc vuông

#### Ví dụ 3
Cho tam giác $ABC$ cân tại $A$ ($AB = AC$). Kẻ $AM \perp BC$ tại $M$. Chứng minh $\triangle ABM = \triangle ACM$.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 440 250" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <polygon points="220,30 80,210 360,210" fill="rgba(37,99,235,0.05)" stroke="#2563eb" stroke-width="2"/>
    <!-- Đường cao AM -->
    <line x1="220" y1="30" x2="220" y2="210" stroke="#dc2626" stroke-width="2.5"/>
    <path d="M 220,193 L 237,193 L 237,210" fill="none" stroke="#dc2626" stroke-width="2"/>
    <circle cx="220" cy="30" r="4" fill="#1e293b"/><text x="215" y="18" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">A</text>
    <circle cx="80" cy="210" r="4" fill="#1e293b"/><text x="62" y="228" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">B</text>
    <circle cx="360" cy="210" r="4" fill="#1e293b"/><text x="368" y="228" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">C</text>
    <circle cx="220" cy="210" r="4" fill="#dc2626"/><text x="225" y="228" font-family="sans-serif" font-weight="bold" font-size="15" fill="#dc2626">M</text>
    <!-- AB = AC (2 vạch) -->
    <line x1="143" y1="112" x2="157" y2="122" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="147" y1="118" x2="161" y2="128" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="283" y1="112" x2="297" y2="122" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="287" y1="118" x2="301" y2="128" stroke="#2563eb" stroke-width="2.5"/>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 5: Tam giác cân tại A với đường cao AM từ A xuống BC</em></p>
</div>

**Lời giải chi tiết:**
Vì $AM \perp BC$ tại $M$ nên $\widehat{AMB} = \widehat{AMC} = 90^\circ$.

Xét hai tam giác vuông $\triangle ABM$ (vuông tại $M$) và $\triangle ACM$ (vuông tại $M$) có:
- Cạnh huyền $AB = AC$ (vì tam giác $ABC$ cân tại $A$);
- Cạnh góc vuông $AM$ chung.
Do đó:
$$\triangle ABM = \triangle ACM\quad\text{(ch – cgv)}.$$
Suy ra $BM = CM$ (hai cạnh tương ứng), tức $M$ là **trung điểm** của $BC$.

---

### Dạng 4: Chứng minh điểm nằm trên tia phân giác của một góc

Có một kết quả quan trọng:

> [!IMPORTANT]
> **Tính chất của tia phân giác:**
> Một điểm nằm trên **tia phân giác** của một góc thì **cách đều hai cạnh** của góc đó.
> **Đảo lại:** Một điểm nằm bên trong một góc mà cách đều hai cạnh thì nằm trên **tia phân giác** của góc đó.

#### Ví dụ 4
Cho góc nhọn $\widehat{xOy}$. Gọi $Oz$ là tia phân giác. Lấy điểm $M$ trên $Oz$. Kẻ $MA \perp Ox$ tại $A$, $MB \perp Oy$ tại $B$. Chứng minh $MA = MB$ và $OA = OB$.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 460 280" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tia Ox, Oy, Oz -->
    <line x1="80" y1="230" x2="420" y2="230" stroke="#2563eb" stroke-width="2"/><text x="425" y="235" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2563eb">x</text>
    <line x1="80" y1="230" x2="320" y2="50" stroke="#10b981" stroke-width="2"/><text x="326" y="48" font-family="sans-serif" font-weight="bold" font-size="14" fill="#10b981">y</text>
    <line x1="80" y1="230" x2="370" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/><text x="376" y="128" font-family="sans-serif" font-weight="bold" font-size="14" fill="#dc2626">z (phân giác)</text>
    <!-- O -->
    <circle cx="80" cy="230" r="4" fill="#1e293b"/><text x="60" y="248" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">O</text>
    <!-- Điểm M trên Oz -->
    <circle cx="270" cy="163" r="4.5" fill="#dc2626"/><text x="278" y="160" font-family="sans-serif" font-weight="bold" font-size="15" fill="#dc2626">M</text>
    <!-- MA vuông góc Ox -->
    <line x1="270" y1="163" x2="270" y2="230" stroke="#d97706" stroke-width="2.5"/>
    <path d="M 270,215 L 255,215 L 255,230" fill="none" stroke="#d97706" stroke-width="2"/>
    <circle cx="270" cy="230" r="3" fill="#d97706"/><text x="275" y="248" font-family="sans-serif" font-weight="bold" font-size="14" fill="#d97706">A</text>
    <!-- MB vuông góc Oy -->
    <line x1="270" y1="163" x2="208" y2="122" stroke="#8b5cf6" stroke-width="2.5"/>
    <circle cx="208" cy="122" r="3" fill="#8b5cf6"/><text x="192" y="118" font-family="sans-serif" font-weight="bold" font-size="14" fill="#8b5cf6">B</text>
    <!-- ký hiệu góc vuông -->
    <rect x="206" y="119" width="9" height="9" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 6: Điểm M trên tia phân giác Oz — kẻ đường vuông góc đến hai cạnh Ox, Oy</em></p>
</div>

**Lời giải chi tiết:**
Vì $MA \perp Ox$ và $MB \perp Oy$, nên $\triangle OAM$ vuông tại $A$ và $\triangle OBM$ vuông tại $B$.

Xét hai tam giác vuông $\triangle OAM$ và $\triangle OBM$ có:
- Cạnh huyền $OM$ chung;
- $\widehat{AOM} = \widehat{BOM}$ (vì $Oz$ là tia phân giác $\widehat{xOy}$).
Do đó:
$$\triangle OAM = \triangle OBM\quad\text{(ch – gn)}.$$
Suy ra:
- $MA = MB$ (hai cạnh tương ứng);
- $OA = OB$ (hai cạnh tương ứng).

---

### Dạng 5: Chứng minh ba điểm thẳng hàng nhờ hai tam giác vuông bằng nhau

#### Ví dụ 5
Cho tam giác $ABC$ có $AB = AC$. Lấy điểm $E$ thuộc tia phân giác của $\widehat{BAC}$ (E nằm ngoài tam giác). Kẻ $EN \perp AB$ tại $N$, $EP \perp AC$ tại $P$.
Gọi $M$ là trung điểm $BC$. Chứng minh ba điểm $A, M, E$ thẳng hàng.

**Lời giải chi tiết (bản phác thảo):**
- Vì $E$ nằm trên tia phân giác $\widehat{BAC}$ và $EN \perp AB, EP \perp AC$, theo Dạng 4 ta có:
  $$\triangle AEN = \triangle AEP\quad\text{(ch–gn)}\implies EN = EP,\ AN = AP.$$
- Xét $\triangle ABE$ và $\triangle ACE$: $AB = AC$ (gt), $\widehat{BAE} = \widehat{CAE}$ (phân giác), $AE$ chung
  $\implies \triangle ABE = \triangle ACE$ (c.g.c) $\implies BE = CE$.
- Xét $\triangle BNE$ và $\triangle CPE$: cạnh huyền $BE = CE$ và cgv $EN = EP$ (chứng minh trên)
  $\implies \triangle BNE = \triangle CPE$ (ch–cgv).
- Xét $\triangle ABM$ và $\triangle ACM$: $AB = AC, BM = CM, AM$ chung
  $\implies \triangle ABM = \triangle ACM$ (c.c.c) $\implies \widehat{BAM} = \widehat{CAM}$.
  Vậy $AM$ cũng là tia phân giác $\widehat{BAC}$.
- Nhưng $AE$ cũng là tia phân giác $\widehat{BAC}$. Theo tiên đề Euclid, qua điểm $A$ chỉ có một tia là tia phân giác của một góc, nên tia $AM$ và tia $AE$ trùng nhau.
- Vậy $A, M, E$ thẳng hàng.

---

## III. 5 Chuyên đề bồi dưỡng học sinh giỏi & Olympic

### Chuyên đề 1: Bẫy "Hai tam giác vuông có một góc nhọn bằng nhau" — Phân tích điều kiện tối thiểu

> **Câu hỏi nhanh:** Hai tam giác vuông có **một góc nhọn bằng nhau** thì hai tam giác đó có bằng nhau không?

**Phân tích:** KHÔNG. Hai tam giác vuông có một góc nhọn bằng nhau chỉ khiến chúng **đồng dạng** (cùng hình dạng) — nhưng kích thước có thể hoàn toàn khác nhau!

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 560 200" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác nhỏ vuông (góc nhọn 30°) -->
    <polygon points="60,180 60,100 180,180" fill="rgba(239,68,68,0.08)" stroke="#dc2626" stroke-width="2.5"/>
    <path d="M 60,165 L 75,165 L 75,180" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="30" y="198" font-family="sans-serif" font-size="13" fill="#dc2626">Tam giác nhỏ</text>
    <text x="30" y="215" font-family="sans-serif" font-size="13" fill="#dc2626">góc 30°</text>
    <path d="M 60,122 A 22 22 0 0 1 80,128" fill="none" stroke="#d97706" stroke-width="2"/>
    <text x="85" y="132" font-family="sans-serif" font-size="11" fill="#d97706">30°</text>

    <!-- Tam giác to vuông (góc nhọn 30°) -->
    <polygon points="300,180 300,30 560,180" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2.5"/>
    <path d="M 300,160 L 320,160 L 320,180" fill="none" stroke="#10b981" stroke-width="2"/>
    <text x="305" y="198" font-family="sans-serif" font-size="13" fill="#10b981">Tam giác to</text>
    <text x="305" y="215" font-family="sans-serif" font-size="13" fill="#10b981">góc 30°</text>
    <path d="M 300,55 A 25 25 0 0 1 322,62" fill="none" stroke="#d97706" stroke-width="2"/>
    <text x="330" y="66" font-family="sans-serif" font-size="11" fill="#d97706">30°</text>

    <!-- Nhãn giải thích -->
    <text x="230" y="100" font-family="sans-serif" font-size="22" fill="#64748b">≠</text>
    <text x="205" y="130" font-family="sans-serif" font-size="12" fill="#64748b">Không</text>
    <text x="205" y="145" font-family="sans-serif" font-size="12" fill="#64748b">bằng nhau!</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 7: Hai tam giác vuông cùng có góc nhọn 30° nhưng kích thước khác nhau — KHÔNG bằng nhau</em></p>
</div>

**Ví dụ minh hoạ:** Hai chiếc ê-ke đều có góc $30^\circ - 60^\circ - 90^\circ$: một chiếc lớn (học sinh dùng trên bảng) và một chiếc nhỏ (học sinh dùng trên vở). Hai chiếc đó **không bằng nhau** dù có cùng ba góc.

> [!IMPORTANT]
> **Kết luận Olympic:** Để hai tam giác vuông bằng nhau bằng cách so sánh góc nhọn, **bắt buộc phải thêm** một điều kiện về cạnh: hoặc thêm **cạnh huyền** (trường hợp ch–gn), hoặc thêm **cạnh góc vuông kề** (trường hợp cgv–gn).

---

### Chuyên đề 2: Định lý khoảng cách từ điểm nằm trên tia phân giác của góc đến hai cạnh

**Bài toán:** Cho góc nhọn $\widehat{xOy}$. Lấy $A \in Ox, B \in Oy$ sao cho $OA = OB$. Kẻ $AE \perp Oy$ tại $E$ và $BF \perp Ox$ tại $F$. Gọi $I$ là giao điểm của $AE$ và $BF$.
a) Chứng minh $OE = OF$.
b) Chứng minh $OI$ là tia phân giác của $\widehat{xOy}$.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 460 290" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Tia Ox, Oy -->
    <line x1="60" y1="250" x2="430" y2="250" stroke="#2563eb" stroke-width="2"/><text x="435" y="255" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2563eb">x</text>
    <line x1="60" y1="250" x2="280" y2="40" stroke="#10b981" stroke-width="2"/><text x="286" y="38" font-family="sans-serif" font-weight="bold" font-size="14" fill="#10b981">y</text>
    <!-- O -->
    <circle cx="60" cy="250" r="4" fill="#1e293b"/><text x="40" y="268" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">O</text>
    <!-- A trên Ox, B trên Oy, OA = OB -->
    <circle cx="260" cy="250" r="4" fill="#2563eb"/><text x="258" y="268" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2563eb">A</text>
    <circle cx="175" cy="107" r="4" fill="#10b981"/><text x="158" y="104" font-family="sans-serif" font-weight="bold" font-size="14" fill="#10b981">B</text>
    <!-- AE vuông góc Oy -->
    <line x1="260" y1="250" x2="200" y2="148" stroke="#d97706" stroke-width="2.5"/>
    <circle cx="200" cy="148" r="3" fill="#d97706"/><text x="205" y="145" font-family="sans-serif" font-weight="bold" font-size="13" fill="#d97706">E</text>
    <!-- BF vuông góc Ox -->
    <line x1="175" y1="107" x2="175" y2="250" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="175" cy="250" r="3" fill="#dc2626"/><text x="165" y="268" font-family="sans-serif" font-weight="bold" font-size="13" fill="#dc2626">F</text>
    <!-- Giao điểm I -->
    <circle cx="207" cy="204" r="4.5" fill="#8b5cf6"/><text x="215" y="200" font-family="sans-serif" font-weight="bold" font-size="14" fill="#8b5cf6">I</text>
    <!-- Ký hiệu vuông góc -->
    <path d="M 200,162 L 187,162 L 187,148" fill="none" stroke="#d97706" stroke-width="1.5"/>
    <path d="M 175,237 L 189,237 L 189,250" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <!-- OA = OB (1 vạch mỗi cái) -->
    <line x1="157" y1="245" x2="163" y2="255" stroke="#1e293b" stroke-width="2"/>
    <line x1="113" y1="178" x2="120" y2="170" stroke="#1e293b" stroke-width="2"/>
    <!-- Đường OI (phân giác) -->
    <line x1="60" y1="250" x2="260" y2="140" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5 3"/>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 8: Bài toán phân giác — giao điểm I của AE và BF nằm trên tia phân giác OI</em></p>
</div>

**Lời giải chi tiết:**
a) Xét hai tam giác vuông $\triangle OAE$ (vuông tại $E$) và $\triangle OBF$ (vuông tại $F$) có:
- Cạnh huyền $OA = OB$ (theo giả thiết);
- $\widehat{AOE} = \widehat{BOF}$ cùng bằng $\widehat{O}$ (hai tam giác chung góc tại $O$).
Do đó:
$$\triangle OAE = \triangle OBF\quad\text{(ch – gn)}.$$
Suy ra $OE = OF$ (hai cạnh tương ứng bằng nhau).

b) Xét hai tam giác vuông $\triangle OEI$ (vuông tại $E$) và $\triangle OFI$ (vuông tại $F$) có:
- Cạnh huyền $OI$ chung;
- Cạnh góc vuông $OE = OF$ (câu a).
Do đó:
$$\triangle OEI = \triangle OFI\quad\text{(ch – cgv)}.$$
Suy ra $\widehat{EOI} = \widehat{FOI}$ (hai góc tương ứng).
Vì tia $OI$ chia $\widehat{xOy}$ thành hai góc bằng nhau, nên $OI$ là **tia phân giác** của $\widehat{xOy}$.

---

### Chuyên đề 3: Đường trung trực và định lý tập hợp điểm

Trong Chuyên đề này, chúng ta sẽ chứng minh một trong những kết quả đẹp nhất của hình học phẳng lớp 7:

**Bài toán:** Cho đoạn thẳng $AB$. Gọi $d$ là đường trung trực của $AB$ (đường thẳng vuông góc với $AB$ tại trung điểm $O$ của $AB$). Lấy điểm $M$ bất kỳ trên $d$. Chứng minh $MA = MB$.

**Lời giải chi tiết:**
Vì $d \perp AB$ tại $O$ nên $\widehat{MOA} = \widehat{MOB} = 90^\circ$.
Xét hai tam giác vuông $\triangle MOA$ (vuông tại $O$) và $\triangle MOB$ (vuông tại $O$) có:
- Cạnh góc vuông $OA = OB$ (vì $O$ là trung điểm $AB$);
- Cạnh góc vuông $MO$ chung.
Do đó:
$$\triangle MOA = \triangle MOB\quad\text{(cgv – cgv)}.$$
Suy ra $MA = MB$ (hai cạnh huyền tương ứng bằng nhau).

> [!IMPORTANT]
> **KẾT QUẢ TỔNG QUÁT:**
> Mọi điểm nằm trên đường trung trực của một đoạn thẳng đều **cách đều** hai đầu mút của đoạn thẳng đó.
>
> **Đảo lại:** Nếu $MA = MB$ thì $M$ nằm trên đường trung trực của $AB$.

---

### Chuyên đề 4: Phương pháp đo bóng của Aristarchus — Ứng dụng thực tế của ch–gn

Để xác định chiều cao của một cột đèn cao áp mà không cần leo lên đo trực tiếp, người ta dùng phương pháp bóng nắng: đo chiều dài bóng của cột và đặt thêm một cây thước ngay bên cạnh, rồi đo chiều dài bóng của cây thước.

<div style="text-align: center; margin: 24px 0;">
  <svg viewBox="0 0 560 260" style="max-width: 100%; height: auto; background: var(--card-bg, #ffffff); border-radius: 12px; border: 1px solid var(--border-color, #e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" xmlns="http://www.w3.org/2000/svg">
    <!-- Mặt đất -->
    <line x1="40" y1="220" x2="520" y2="220" stroke="#92400e" stroke-width="3"/>
    <!-- Cột đèn cao áp 1 (lớn) -->
    <line x1="100" y1="220" x2="100" y2="50" stroke="#1e293b" stroke-width="6"/>
    <circle cx="100" cy="45" r="8" fill="#fbbf24"/>
    <path d="M 100,220 L 100,205 L 115,205" fill="none" stroke="#1e293b" stroke-width="2"/>
    <text x="38" y="215" font-family="sans-serif" font-size="12" fill="#1e293b">A (đáy)</text>
    <text x="35" y="45" font-family="sans-serif" font-size="12" fill="#1e293b">B (đỉnh)</text>
    <!-- Bóng cột đèn -->
    <line x1="100" y1="220" x2="320" y2="220" stroke="#64748b" stroke-width="4"/>
    <text x="195" y="215" font-family="sans-serif" font-size="12" fill="#64748b">Bóng C</text>
    <!-- Tia sáng -->
    <line x1="100" y1="50" x2="320" y2="220" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- Góc nghiêng ánh sáng -->
    <path d="M 300,220 A 18 18 0 0 0 315,207" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="322" y="210" font-family="sans-serif" font-size="11" fill="#dc2626">α</text>

    <!-- Cây thước nhỏ -->
    <line x1="400" y1="220" x2="400" y2="170" stroke="#2563eb" stroke-width="4"/>
    <text x="405" y="195" font-family="sans-serif" font-size="11" fill="#2563eb">D (thước)</text>
    <!-- Bóng thước -->
    <line x1="400" y1="220" x2="460" y2="220" stroke="#64748b" stroke-width="4"/>
    <text x="420" y="215" font-family="sans-serif" font-size="11" fill="#64748b">Bóng E</text>
    <!-- Tia sáng thước -->
    <line x1="400" y1="170" x2="460" y2="220" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- Góc nghiêng ánh sáng (cùng α) -->
    <path d="M 445,220 A 14 14 0 0 0 456,210" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="462" y="210" font-family="sans-serif" font-size="11" fill="#dc2626">α</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 9: Hai tam giác vuông ABC (cột đèn) và DAE (cây thước) có góc nhọn α bằng nhau — ứng dụng ch–gn và cgv–gn</em></p>
</div>

**Bài toán:** Đặt cây thước thẳng đứng dài $DE = 1{,}5\text{ m}$ bên cạnh cột đèn cao áp $AB$. Bóng cây thước là $AE = 2\text{ m}$, bóng cột đèn là $BC = 16\text{ m}$. Tính chiều cao cột đèn $AB$.

**Lời giải (dùng tam giác vuông đồng dạng — hệ quả của ch–gn):**
Do Mặt Trời ở rất xa, các tia sáng xem như song song, tạo với mặt đất **cùng một góc nghiêng $\alpha$**. Do đó:
- $\triangle ABC$ (cột đèn) vuông tại $A$: $\widehat{BCA} = \alpha$.
- $\triangle DEA$ (cây thước) vuông tại $D$: $\widehat{DAE} = \alpha$ (cùng góc).

Hai tam giác vuông $\triangle ABC$ và $\triangle DEA$ có góc nhọn bằng nhau ($\alpha$) nên chúng **đồng dạng** (cùng tỉ lệ). Do đó:
$$\frac{AB}{BC} = \frac{DE}{AE} \implies AB = BC \times \frac{DE}{AE} = 16 \times \frac{1{,}5}{2} = \mathbf{12}\text{ m}.$$
Cột đèn cao $12\text{ m}$.

---

### Chuyên đề 5: Bài toán hai đường phân giác góc B và góc C cắt nhau — Điểm nội tâm

**Bài toán (Olympic chuẩn lớp 7–8):** Cho tam giác nhọn $ABC$ với $AB < AC$. Gọi $I$ là giao điểm của tia phân giác góc $B$ và tia phân giác góc $C$. Từ $I$ kẻ $IM \perp BC$, $IN \perp AC$, $IP \perp AB$ ($M \in BC, N \in AC, P \in AB$). Chứng minh:
a) $BM = BP$ (điểm $I$ cách đều hai cạnh $BC$ và $AB$).
b) $IM = IN$ (điểm $I$ cách đều $BC$ và $AC$).
c) $BP + CN = BC$.
d) $AI$ là tia phân giác của $\widehat{BAC}$.

**Lời giải chi tiết:**
a) Xét hai tam giác vuông $\triangle BIP$ (vuông tại $P$) và $\triangle BIM$ (vuông tại $M$) có:
- Cạnh huyền $BI$ chung;
- $\widehat{PBI} = \widehat{MBI}$ (vì $BI$ là tia phân giác $\widehat{B}$).
Do đó: $\triangle BIP = \triangle BIM$ (ch–gn) $\implies BP = BM$ và $IP = IM$.

b) Tương tự, xét hai tam giác vuông $\triangle CIN$ (vuông tại $N$) và $\triangle CIM$ (vuông tại $M$) có: cạnh huyền $CI$ chung, $\widehat{NCI} = \widehat{MCI}$ (phân giác $\widehat{C}$).
Do đó: $\triangle CIN = \triangle CIM$ (ch–gn) $\implies CN = CM$ và $IN = IM$.

c) Từ câu a $\implies BM = BP$; từ câu b $\implies CM = CN$.
Vì $M \in BC$ nên $BM + CM = BC$.
Thay vào: $BP + CN = BM + CM = BC$.

d) Từ câu a $\implies IP = IM$ và từ câu b $\implies IN = IM$, suy ra $IP = IN$.
Xét hai tam giác vuông $\triangle AIP$ (vuông tại $P$) và $\triangle AIN$ (vuông tại $N$):
- Cạnh huyền $AI$ chung;
- Cạnh góc vuông $IP = IN$ (chứng minh trên).
Do đó: $\triangle AIP = \triangle AIN$ (ch–cgv) $\implies \widehat{PAI} = \widehat{NAI}$.
Tức là $AI$ chia góc $\widehat{BAC}$ thành hai góc bằng nhau, nên $AI$ là **tia phân giác** của $\widehat{BAC}$.

> [!NOTE]
> **Kết quả nổi tiếng:** Điểm $I$ — giao điểm của ba tia phân giác trong một tam giác — gọi là **Tâm nội tiếp** (Incenter) của tam giác. Nó cách đều ba cạnh và là tâm của đường tròn nội tiếp tam giác.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác (Quiz)

```quiz
type: choice
question: 'Hai tam giác vuông chắc chắn bằng nhau nếu có thêm điều kiện nào dưới đây?'
options:
  - 'Một cạnh góc vuông bằng nhau'
  - 'Hai góc nhọn bằng nhau'
  - 'Cạnh huyền và một góc nhọn bằng nhau'
  - 'Chỉ một góc nhọn bằng nhau'
answer: 3
explanation: 'Trường hợp cạnh huyền – góc nhọn (ch–gn) là đủ để hai tam giác vuông bằng nhau. Chỉ một cạnh hoặc chỉ một góc nhọn thì không đủ.'
```

```quiz
type: choice
question: 'Cho $\triangle ABC$ vuông tại $A$ và $\triangle MNP$ vuông tại $M$, biết $AB = MN$ và $AC = MP$. Hai tam giác bằng nhau theo trường hợp nào?'
options:
  - 'Hai cạnh góc vuông (cgv–cgv)'
  - 'Cạnh huyền – góc nhọn (ch–gn)'
  - 'Cạnh huyền – cạnh góc vuông (ch–cgv)'
  - 'Cạnh góc vuông – góc nhọn kề (cgv–gn)'
answer: 1
explanation: 'AB, AC là hai cạnh góc vuông của tam giác ABC; MN, MP là hai cạnh góc vuông của tam giác MNP. AB = MN và AC = MP nên bằng nhau theo trường hợp hai cạnh góc vuông (cgv–cgv), đây chính là c.g.c với góc xen giữa là góc vuông.'
```

```quiz
type: choice
question: 'Cho $\triangle ABC$ vuông tại $A$ và $\triangle DEF$ vuông tại $D$, biết $BC = EF$ và $\widehat{B} = \widehat{E}$. Hai tam giác bằng nhau theo trường hợp nào?'
options:
  - 'Hai cạnh góc vuông (cgv–cgv)'
  - 'Cạnh huyền – góc nhọn (ch–gn)'
  - 'Cạnh huyền – cạnh góc vuông (ch–cgv)'
  - 'Cạnh góc vuông – góc nhọn kề (cgv–gn)'
answer: 2
explanation: 'BC và EF là hai cạnh huyền (đối diện góc vuông). Góc B và góc E là hai góc nhọn bằng nhau. Vậy đây là trường hợp cạnh huyền – góc nhọn (ch–gn).'
```

```quiz
type: choice
question: 'Để $\triangle ABC$ (vuông tại $A$) $= \triangle DEF$ (vuông tại $D$) theo trường hợp cạnh huyền – cạnh góc vuông, điều kiện nào sau đây là đúng?'
options:
  - '$BC = EF$ và $AB = DE$'
  - '$AB = DE$ và $AC = DF$'
  - '$\widehat{B} = \widehat{E}$ và $AB = DE$'
  - '$BC = EF$ và $\widehat{C} = \widehat{F}$'
answer: 1
explanation: 'Trường hợp ch–cgv cần: cạnh huyền bằng nhau (BC = EF) và một cạnh góc vuông bằng nhau (AB = DE hoặc AC = DF). Đáp án A đúng: BC = EF (cạnh huyền) và AB = DE (cạnh góc vuông).'
```

```quiz
type: choice
question: 'Khẳng định nào sau đây là SAI?'
options:
  - 'Hai tam giác vuông có hai cạnh góc vuông tương ứng bằng nhau thì bằng nhau'
  - 'Hai tam giác vuông có một góc nhọn bằng nhau thì bằng nhau'
  - 'Hai tam giác vuông có cạnh huyền bằng nhau và một góc nhọn bằng nhau thì bằng nhau'
  - 'Trong một tam giác vuông, hai góc nhọn phụ nhau'
answer: 2
explanation: 'Khẳng định "hai tam giác vuông có một góc nhọn bằng nhau thì bằng nhau" là SAI. Chỉ có một góc nhọn bằng nhau mà không có điều kiện về cạnh thì chỉ cho hai tam giác đồng dạng (cùng hình dạng nhưng kích thước khác nhau).'
```

```quiz
type: choice
question: 'Cho tam giác $ABC$ cân tại $A$ ($AB = AC$), kẻ $AH \perp BC$ tại $H$. Khẳng định nào sau đây SAI?'
options:
  - '$\triangle ABH = \triangle ACH$'
  - '$HB = HC$'
  - '$AH$ là tia phân giác của $\widehat{BAC}$'
  - '$AB = AH$'
answer: 4
explanation: 'Trong tam giác vuông ABH, AH là cạnh góc vuông còn AB là cạnh huyền. Cạnh huyền luôn lớn hơn cạnh góc vuông, nên AB > AH. Khẳng định AB = AH là SAI.'
```

```quiz
type: choice
question: 'Cho $\triangle ABC$ vuông tại $A$ có $AB = AC$. Kẻ $AH \perp BC$ tại $H$. Số đo $\widehat{HAB}$ bằng bao nhiêu?'
options:
  - '$30^\circ$'
  - '$60^\circ$'
  - '$45^\circ$'
  - '$90^\circ$'
answer: 3
explanation: 'Vì AB = AC nên tam giác ABC vuông cân tại A, suy ra góc B = góc C = 45°. Trong tam giác vuông AHB (vuông tại H): góc HAB = 90° – góc B = 90° – 45° = 45°.'
```

```quiz
type: choice
question: 'Điểm $M$ nằm trên đường trung trực của đoạn thẳng $AB$ thì:'
options:
  - '$MA > MB$'
  - '$MA < MB$'
  - '$MA = MB$'
  - 'Không xác định được quan hệ giữa MA và MB'
answer: 3
explanation: 'Theo tính chất đường trung trực: mọi điểm trên đường trung trực của đoạn thẳng đều cách đều hai đầu mút. Vậy MA = MB.'
```

```quiz
type: choice
question: 'Điểm $M$ nằm bên trong góc $\widehat{xOy}$, cách đều hai cạnh $Ox$ và $Oy$ (khoảng cách bằng nhau khi kẻ đường vuông góc đến mỗi cạnh). Điều này chứng tỏ $M$ nằm ở đâu?'
options:
  - 'Trên cạnh $Ox$'
  - 'Trên cạnh $Oy$'
  - 'Trên tia phân giác của $\widehat{xOy}$'
  - 'Trên đường trung trực của $OA$'
answer: 3
explanation: 'Điểm nằm bên trong một góc mà cách đều hai cạnh thì nằm trên tia phân giác của góc đó (đây là chiều đảo của tính chất tia phân giác).'
```

```quiz
type: choice
question: 'Giao điểm $I$ của ba tia phân giác trong một tam giác được gọi là gì và có tính chất đặc biệt gì?'
options:
  - 'Trọng tâm — cách đều ba đỉnh'
  - 'Trực tâm — là chân ba đường cao'
  - 'Tâm nội tiếp — cách đều ba cạnh'
  - 'Tâm ngoại tiếp — nằm trên ba đường trung trực'
answer: 3
explanation: 'Giao điểm của ba tia phân giác trong tam giác là Tâm nội tiếp (Incenter). Điểm này cách đều ba cạnh của tam giác và là tâm của đường tròn nội tiếp tam giác.'
```

---

## V. Đề kiểm tra đánh giá năng lực

### Đề 1: Kiểm tra 15 phút

#### Ma trận đề 15 phút
- **Trắc nghiệm (4 câu × 1 điểm = 4 điểm):** Nhận biết và thông hiểu 4 trường hợp bằng nhau của tam giác vuông.
- **Tự luận (1 bài × 6 điểm):** Chứng minh hai tam giác vuông bằng nhau và suy ra hệ quả.

---

#### Phần 1: Trắc nghiệm (4 câu — 4 điểm)

**Câu 1 (1 điểm):** Hai tam giác vuông nhất định bằng nhau khi có:
- A. Một cạnh góc vuông bằng nhau
- B. Hai góc nhọn bằng nhau
- C. Cạnh huyền và một góc nhọn bằng nhau
- D. Chỉ có cạnh huyền bằng nhau

**Câu 2 (1 điểm):** Cho $\triangle ABC$ vuông tại $A$ và $\triangle MNP$ vuông tại $M$, biết $AB = MN, AC = MP$. Hai tam giác bằng nhau theo:
- A. Hai cạnh góc vuông (c.g.c)
- B. Cạnh huyền – góc nhọn
- C. Cạnh huyền – cạnh góc vuông
- D. Cạnh góc vuông – góc nhọn kề

**Câu 3 (1 điểm):** Cho $\triangle ABC$ vuông tại $A$ và $\triangle DEF$ vuông tại $D$, biết $BC = EF$ và $\widehat{B} = \widehat{E}$. Hai tam giác bằng nhau theo:
- A. Hai cạnh góc vuông
- B. Cạnh huyền – góc nhọn
- C. Cạnh huyền – cạnh góc vuông
- D. Góc – Cạnh – Góc thường

**Câu 4 (1 điểm):** Để $\triangle ABC$ (vuông tại $A$) $= \triangle DEF$ (vuông tại $D$) theo trường hợp ch–cgv, cần có:
- A. $BC = EF$ và $AB = DE$
- B. $AB = DE$ và $AC = DF$
- C. $\widehat{B} = \widehat{E}$ và $AB = DE$
- D. $BC = EF$ và $\widehat{C} = \widehat{F}$

---

#### Phần 2: Tự luận (1 bài — 6 điểm)

**Bài toán:** Cho tam giác $ABC$ cân tại $A$. Kẻ $AH \perp BC$ tại $H$.
a) (3,0 điểm) Chứng minh $\triangle ABH = \triangle ACH$.
b) (2,0 điểm) Chứng minh $H$ là trung điểm của $BC$ và $AH$ là tia phân giác của $\widehat{BAC}$.
c) (1,0 điểm) Biết $AB = 13\text{ cm}$ và $BC = 10\text{ cm}$. Tính $AH$ (đơn vị: cm).

---

#### Hướng dẫn chấm & Barem điểm Đề 15 phút

| Câu | Nội dung đáp án | Điểm |
| :--- | :--- | :--- |
| **TN 1** | Đáp án **C** (ch–gn đủ để kết luận bằng nhau) | 1,0 đ |
| **TN 2** | Đáp án **A** (Hai cạnh góc vuông AB = MN và AC = MP) | 1,0 đ |
| **TN 3** | Đáp án **B** (BC, EF là cạnh huyền; kèm góc nhọn B = E) | 1,0 đ |
| **TN 4** | Đáp án **A** (BC = EF cạnh huyền; AB = DE cạnh góc vuông) | 1,0 đ |
| **TL a** | • Nêu $\widehat{AHB} = \widehat{AHC} = 90^\circ$ (do $AH \perp BC$) $(0,5\text{ đ})$.<br>• Xét $\triangle ABH$ và $\triangle ACH$ vuông: cạnh huyền $AB = AC$ (tam giác cân); cgv $AH$ chung $(1,0\text{ đ})$.<br>• Kết luận: $\triangle ABH = \triangle ACH$ (ch–cgv) $(1,5\text{ đ})$. | 3,0 đ |
| **TL b** | • Từ câu a $\implies BH = CH$ nên $H$ là trung điểm $BC$ $(1,0\text{ đ})$.<br>• Từ câu a $\implies \widehat{BAH} = \widehat{CAH}$, tia $AH$ nằm giữa $AB, AC$ nên $AH$ là tia phân giác $\widehat{BAC}$ $(1,0\text{ đ})$. | 2,0 đ |
| **TL c** | • $BH = BC/2 = 5\text{ cm}$, $AB = 13\text{ cm}$.<br>• Áp dụng Pythagoras: $AH = \sqrt{AB^2 - BH^2} = \sqrt{169 - 25} = \sqrt{144} = 12\text{ cm}$ $(1,0\text{ đ})$. | 1,0 đ |

---

### Đề 2: Kiểm tra 45 phút (Đánh giá định kỳ toàn diện)

#### Ma trận đề thi 45 phút

| Cấp độ tư duy | Trắc nghiệm (3,0 đ) | Tự luận (7,0 đ) | Tổng |
| :--- | :---: | :---: | :---: |
| **Nhận biết** | 3 câu (1,5 đ) | Bài 1a (2,0 đ) | **3,5 đ (35%)** |
| **Thông hiểu** | 2 câu (1,0 đ) | Bài 1b, Bài 2a (2,5 đ) | **3,5 đ (35%)** |
| **Vận dụng** | 1 câu (0,5 đ) | Bài 2b, 2c (1,5 đ) | **2,0 đ (20%)** |
| **Vận dụng cao** | — | Bài 3 (1,0 đ) | **1,0 đ (10%)** |
| **Tổng** | **6 câu (3,0 đ)** | **3 bài (7,0 đ)** | **10,0 đ** |

---

#### Phần 1: Trắc nghiệm (6 câu — 3 điểm)

**Câu 1:** Trong một tam giác vuông, hai góc nhọn có tổng bằng:
- A. $180^\circ$
- B. $120^\circ$
- C. $90^\circ$
- D. $45^\circ$

**Câu 2:** Cho $\triangle ABC$ vuông tại $A$ và $\triangle HIK$ vuông tại $H$, biết $BC = IK$ và $\widehat{C} = \widehat{K}$. Hai tam giác bằng nhau theo:
- A. cgv–cgv
- B. cgv–gn
- C. ch–gn
- D. ch–cgv

**Câu 3:** Trong trường hợp cgv–gn, góc nhọn bằng nhau phải:
- A. Là góc nhọn lớn hơn
- B. Là góc nhọn đối diện cạnh góc vuông đó
- C. Kề với chính cạnh góc vuông đó
- D. Bất kỳ góc nhọn nào trong tam giác

**Câu 4:** Điểm $M$ cách đều hai đầu mút $A$ và $B$ ($MA = MB$) thì điểm $M$ nằm trên:
- A. Đường phân giác của $\widehat{AMB}$
- B. Đường trung trực của đoạn $AB$
- C. Đường thẳng $AB$
- D. Đường tròn tâm $A$ bán kính $AB$

**Câu 5:** Cho $\triangle ABC$ (vuông tại $A$) $= \triangle DEF$ (vuông tại $D$), $AB = 3\text{ cm}, EF = 5\text{ cm}, DF = 4\text{ cm}$. Chu vi $\triangle ABC$ là:
- A. $10\text{ cm}$
- B. $12\text{ cm}$
- C. $14\text{ cm}$
- D. $16\text{ cm}$

**Câu 6:** Trường hợp bằng nhau ch–cgv (cạnh huyền – cạnh góc vuông) áp dụng được cho:
- A. Mọi loại tam giác
- B. Chỉ tam giác đều
- C. Chỉ tam giác cân
- D. Chỉ tam giác vuông

---

#### Phần 2: Tự luận (3 bài — 7 điểm)

**Bài 1 (3,0 điểm):**
Cho góc nhọn $\widehat{xOy}$. Lấy $A \in Ox$, $B \in Oy$ sao cho $OA = OB$. Kẻ $AE \perp Oy$ tại $E$, $BF \perp Ox$ tại $F$. Gọi $I$ là giao điểm của $AE$ và $BF$.
a) (2,0 điểm) Chứng minh $\triangle OAE = \triangle OBF$ và suy ra $OE = OF$.
b) (1,0 điểm) Chứng minh $OI$ là tia phân giác của $\widehat{xOy}$.

**Bài 2 (3,0 điểm):**
Cho tam giác $ABC$ có $AB = AC$. Kẻ $BM \perp AC$ tại $M$ và $CN \perp AB$ tại $N$.
a) (1,5 điểm) Chứng minh $\triangle ABM = \triangle ACN$.
b) (1,0 điểm) Chứng minh $BM = CN$.
c) (0,5 điểm) Biết $AB = 10\text{ cm}$ và $BC = 12\text{ cm}$. Tính $BM$ (đơn vị: cm).

**Bài 3 (1,0 điểm — Vận dụng cao Olympic):**
Cho tam giác $ABC$ có $AB = AC$. Gọi $d$ là một đường thẳng bất kỳ đi qua $A$ và cắt $BC$ tại điểm $M$. Kẻ $BH \perp d$ tại $H$, $CK \perp d$ tại $K$. Chứng minh $\triangle BHA = \triangle AKC$.

---

#### Hướng dẫn chấm & Barem điểm Đề 45 phút

##### Phần 1: Trắc nghiệm (3,0 điểm — mỗi câu 0,5 điểm)
- Câu 1: **C** ($90^\circ$ — hai góc nhọn phụ nhau)
- Câu 2: **C** (BC, IK là cạnh huyền; góc C = góc K là góc nhọn → ch–gn)
- Câu 3: **C** (Góc nhọn phải kề với cạnh góc vuông đang xét)
- Câu 4: **B** (Điểm cách đều hai đầu mút nằm trên đường trung trực)
- Câu 5: **B** (Vì $\triangle ABC = \triangle DEF$ nên $BC = EF = 5$, $CA = FD = 4$, $AB = 3$. Chu vi $= 3 + 5 + 4 = 12\text{ cm}$)
- Câu 6: **D** (Trường hợp ch–cgv chỉ áp dụng cho tam giác vuông)

##### Phần 2: Tự luận (7,0 điểm)

**Bài 1 (3,0 điểm):**
- **a) (2,0 điểm):**
  + Nêu $\triangle OAE$ vuông tại $E$ và $\triangle OBF$ vuông tại $F$ $(0,5\text{ đ})$.
  + Xét hai tam giác vuông: cạnh huyền $OA = OB$ (gt) $(0,5\text{ đ})$; $\widehat{AOE} = \widehat{BOF}$ (cùng góc $\widehat{O}$) $(0,5\text{ đ})$.
  + Kết luận $\triangle OAE = \triangle OBF$ (ch–gn) $\implies OE = OF$ $(0,5\text{ đ})$.
- **b) (1,0 điểm):**
  + Xét $\triangle OEI$ (vuông tại $E$) và $\triangle OFI$ (vuông tại $F$): cạnh huyền $OI$ chung; cgv $OE = OF$ (câu a) $(0,5\text{ đ})$.
  + Kết luận $\triangle OEI = \triangle OFI$ (ch–cgv) $\implies \widehat{EOI} = \widehat{FOI}$ nên $OI$ là tia phân giác $\widehat{xOy}$ $(0,5\text{ đ})$.

**Bài 2 (3,0 điểm):**
- **a) (1,5 điểm):**
  + $\triangle ABM$ vuông tại $M$, $\triangle ACN$ vuông tại $N$ $(0,5\text{ đ})$.
  + Cạnh huyền $AB = AC$ (gt) $(0,5\text{ đ})$; $\widehat{A}$ chung $(0,25\text{ đ})$.
  + Kết luận $\triangle ABM = \triangle ACN$ (ch–gn) $(0,25\text{ đ})$.
- **b) (1,0 điểm):**
  + Từ câu a suy ra $BM = CN$ (hai cạnh tương ứng bằng nhau) $(1,0\text{ đ})$.
- **c) (0,5 điểm):**
  + Gọi $D$ là chân đường cao từ $A$ xuống $BC$, $BD = 6\text{ cm}$ (nửa $BC$).
  + Trong $\triangle ABN$ (vuông tại $N$): $\sin(\widehat{A}/2) = BN/AB$; nhưng tiện hơn ta dùng: $\triangle ABM$ vuông tại $M$, $AB = 10, BM = ?$.
  + Gọi $\widehat{B} = \beta$; trong $\triangle ABM$: $BM = AB \cos\beta = 10\cos\beta$.
  + Trong $\triangle ABC$: $\cos\beta = BD/AB = 6/10$ (vì tam giác cân nên đường cao từ $A$ chia $BC$ thành $BD = 6$).
  + Vậy $BM = 10 \times \frac{6}{10} = \mathbf{6}\text{ cm}$.
  Hoặc: áp dụng $S_{\triangle ABC} = \frac{1}{2}BC \cdot AH = \frac{1}{2}AB \cdot BM \implies BM = \frac{BC \cdot AH}{AB}$.

**Bài 3 (1,0 điểm):**
- Trong $\triangle ABH$ vuông tại $H$: $\widehat{ABH} + \widehat{BAH} = 90^\circ$ $(0,2\text{ đ})$.
- Vì $\widehat{BAC} = 90^\circ$ (đã biết $AB=AC$ và góc BAC tạo với đường thẳng $d$): $\widehat{BAH} + \widehat{CAK} = 90^\circ$ $(0,2\text{ đ})$.
- So sánh: $\widehat{ABH} = \widehat{CAK}$ $(0,2\text{ đ})$.
- Xét $\triangle BHA$ (vuông tại $H$) và $\triangle AKC$ (vuông tại $K$): cạnh huyền $AB = AC$ (gt); góc nhọn $\widehat{ABH} = \widehat{CAK}$ (cmt) $(0,2\text{ đ})$.
- Kết luận $\triangle BHA = \triangle AKC$ (ch–gn) $(0,2\text{ đ})$.

---

## VI. Bảng tổng kết ghi nhớ vàng

| Trường hợp bằng nhau | Viết tắt | Điều kiện đủ | Bản chất là | Bẫy thường gặp |
| :--- | :--- | :--- | :--- | :--- |
| Hai cạnh góc vuông | **cgv–cgv** | 2 cgv tương ứng bằng nhau | c.g.c (góc xen giữa = $90^\circ$) | Nhầm sang cạnh huyền |
| cgv và góc nhọn kề | **cgv–gn** | 1 cgv + góc nhọn kề cgv đó | g.c.g | Góc nhọn không kề cgv đó |
| Cạnh huyền và góc nhọn | **ch–gn** | Ch + 1 góc nhọn | g.c.g (qua phụ góc) | Quên cạnh huyền là cạnh đối góc vuông |
| Cạnh huyền và cgv | **ch–cgv** | Ch + 1 cgv | c.c.c (qua Pythagoras) | **Chỉ dùng cho tam giác vuông!** |
| **Tính chất tia phân giác** | — | $M \in$ phân giác $\widehat{xOy}$ | $M$ cách đều hai cạnh $Ox, Oy$ | Nhầm chiều trực tiếp và đảo |
| **Tính chất đường trung trực** | — | $M \in$ trung trực $AB$ | $MA = MB$ | Nhầm trung điểm với điểm cách đều |
