---
title: 'Toán 9 Bài 10: Căn bậc ba và Căn thức bậc ba - Tính chất, Hằng đẳng thức & Kỹ thuật Khử căn bậc ba'
description: 'Lý thuyết toàn diện và bài tập Bài 10 Toán 9: Khái niệm căn bậc ba, so sánh căn bậc ba, tính chất nhân chia, hằng đẳng thức (sqrt[3]{a})^3 = a, widget tương tác thể tích khối lập phương và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Căn bậc ba
  - Căn thức bậc ba
  - Khối lập phương
  - Hằng đẳng thức lập phương
  - Kết nối tri thức
grade: 9
---

# Bài 10. Căn bậc ba và Căn thức bậc ba

Trong lịch sử toán học cổ đại, một trong ba bài toán hình học hóc búa nhất mọi thời đại của người Hy Lạp là bài toán **"Nhân đôi khối lập phương"** (Delian problem): *Làm thế nào để dựng một bàn thờ thần Apollo hình lập phương có thể tích gấp đôi một khối lập phương ban đầu?*

Nếu khối lập phương ban đầu có cạnh là $1$ (thể tích $V = 1$), thì khối lập phương mới phải có thể tích $V' = 2$, đồng nghĩa với việc cạnh của nó phải bằng một đại lượng bí ẩn: $x^3 = 2 \implies x = \sqrt[3]{2} \approx 1,2599...$ Đại lượng kỳ diệu đó chính là **Căn bậc ba**!

Khác với căn bậc hai chỉ tồn tại với số không âm, căn bậc ba có những tính chất phóng khoáng và tự do hơn rất nhiều: **Mọi số thực âm, dương hay bằng 0 đều luôn có duy nhất một căn bậc ba**.

Bài học này sẽ giúp các em khám phá toàn bộ vẻ đẹp của căn bậc ba, nắm vững hằng đẳng thức $(\sqrt[3]{a})^3 = a$ và làm chủ các kỹ thuật giải phương trình lập phương đỉnh cao!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: CĂN BẬC BA VÀ CĂN THỨC BẬC BA</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm & Ký hiệu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $x = \sqrt[3]{a} \iff x^3 = a$.<br>• Mọi số thực $a \in \mathbb{R}$ đều có <strong>duy nhất 1 căn bậc ba</strong>.<br>• Số dương có căn dương, số âm có căn âm: $\sqrt[3]{-a} = -\sqrt[3]{a}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hằng đẳng thức cốt lõi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(\sqrt[3]{a})^3 = \sqrt[3]{a^3} = a$ (với mọi $a \in \mathbb{R}$).<br>• <strong>Không cần dấu giá trị tuyệt đối</strong> như căn bậc hai!</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tính chất căn bậc ba</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• So sánh: $a < b \iff \sqrt[3]{a} < \sqrt[3]{b}$.<br>• Nhân: $\sqrt[3]{a \cdot b} = \sqrt[3]{a} \cdot \sqrt[3]{b}$.<br>• Chia: $\sqrt[3]{\frac{a}{b}} = \frac{\sqrt[3]{a}}{\sqrt[3]{b}}$ ($b \ne 0$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Căn thức bậc ba & Lượng liên hợp</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sqrt[3]{A}$ xác định với mọi biểu thức $A$.<br>• Khử căn ở mẫu bằng liên hợp lập phương:<br>• $u \pm v = \frac{u^3 \pm v^3}{u^2 \mp uv + v^2}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Số học:** Căn bậc ba của $8$ bằng bao nhiêu?
2. **Số âm:** Căn bậc ba của $-27$ bằng bao nhiêu?
3. **Số không:** Căn bậc ba của $0$ bằng bao nhiêu?
4. **Hằng đẳng thức:** Tính giá trị của biểu thức $\sqrt[3]{(-5)^3}$.
5. **Điều kiện xác định:** Căn thức bậc ba $\sqrt[3]{x - 5}$ xác định với những giá trị nào của $x$?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $\sqrt[3]{8} = 2$ (vì $2^3 = 8$).
> 2. $\sqrt[3]{-27} = -3$ (vì $(-3)^3 = -27$).
> 3. $\sqrt[3]{0} = 0$.
> 4. $\sqrt[3]{(-5)^3} = -5$ (giữ nguyên dấu, không cần dấu giá trị tuyệt đối).
> 5. Xác định với **mọi $x \in \mathbb{R}$** (vì căn bậc ba không có điều kiện không âm).

---

## I. Lý thuyết Trọng tâm

### 1. Khái niệm Căn bậc ba

> [!NOTE]
> **Định nghĩa:**
> Căn bậc ba của một số $a$ là số $x$ sao cho $x^3 = a$.
> Căn bậc ba của số $a$ được ký hiệu là $\sqrt[3]{a}$.
> 
> $$x = \sqrt[3]{a} \iff x^3 = a$$

#### Nhận xét mang tính nguyên lý:
- Mỗi số thực $a$ đều có **duy nhất** một căn bậc ba:
  - Nếu $a > 0 \implies \sqrt[3]{a} > 0$.
  - Nếu $a = 0 \implies \sqrt[3]{0} = 0$.
  - Nếu $a < 0 \implies \sqrt[3]{a} < 0$.
- Đặc biệt với số âm:
  $$\sqrt[3]{-a} = -\sqrt[3]{a}$$
  *(Ví dụ: $\sqrt[3]{-64} = -\sqrt[3]{64} = -4$).*

---

### 2. So sánh Căn bậc hai và Căn bậc ba

| Tiêu chí | Căn bậc hai ($\sqrt{a}$) | Căn bậc ba ($\sqrt[3]{a}$) |
| :--- | :--- | :--- |
| **Điều kiện của số $a$** | Bắt buộc $a \ge 0$ (số âm không có căn) | **Mọi số thực $a \in \mathbb{R}$** (kể cả số âm) |
| **Số lượng căn** | Số dương có **2 căn** đối nhau ($\pm\sqrt{a}$) | Luôn có **duy nhất 1 căn** cùng dấu |
| **Hằng đẳng thức** | $\sqrt{A^2} = |A|$ (cần dấu giá trị tuyệt đối) | **$(\sqrt[3]{A})^3 = \sqrt[3]{A^3} = A$** (không có $|A|$) |
| **Điều kiện xác định** | $\sqrt{A}$ có nghĩa $\iff A \ge 0$ | $\sqrt[3]{A}$ **có nghĩa với mọi $A$** |

---

### 3. Các Tính chất của Căn bậc ba

> [!IMPORTANT]
> **Các định lý tương đương:**
> 1. **So sánh:** Với mọi $a, b \in \mathbb{R}$:
>    $$a < b \iff \sqrt[3]{a} < \sqrt[3]{b}$$
> 2. **Khai phương một tích:** Với mọi $a, b \in \mathbb{R}$:
>    $$\sqrt[3]{a \cdot b} = \sqrt[3]{a} \cdot \sqrt[3]{b}$$
> 3. **Khai phương một thương:** Với mọi $a \in \mathbb{R}$ và $b \ne 0$:
>    $$\sqrt[3]{\frac{a}{b}} = \frac{\sqrt[3]{a}}{\sqrt[3]{b}}$$

---

### 4. Đưa thừa số ra ngoài và vào trong dấu căn bậc ba

- **Đưa ra ngoài căn:** $\sqrt[3]{A^3 \cdot B} = A\sqrt[3]{B}$ (với mọi $A, B \in \mathbb{R}$, không phân biệt dấu của $A$).
- **Đưa vào trong căn:** $A\sqrt[3]{B} = \sqrt[3]{A^3 \cdot B}$ (với mọi $A \in \mathbb{R}$, dấu của $A$ đi thẳng vào trong căn vì $(-A)^3 = -A^3$).

*Ví dụ:* 
- $\sqrt[3]{40} = \sqrt[3]{8 \cdot 5} = \sqrt[3]{2^3 \cdot 5} = 2\sqrt[3]{5}$.
- $-3\sqrt[3]{2} = \sqrt[3]{(-3)^3 \cdot 2} = \sqrt[3]{-27 \cdot 2} = \sqrt[3]{-54}$.

---

## II. Widget Tương tác: Thể Tích Khối Lập Phương & Cạnh $\sqrt[3]{V}$

Về mặt hình học không gian, căn bậc ba số học $\sqrt[3]{V}$ chính là **độ dài cạnh của khối lập phương** có thể tích bằng $V$. Hãy kéo thanh trượt thể tích để quan sát sự thay đổi kích thước của khối lập phương:

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG HÌNH HỌC: THỂ TÍCH KHỐI LẬP PHƯƠNG & CẠNH a = &radic;[3]{V}</h4>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
    <label><strong>Thể tích V:</strong> <input type="range" id="cube-vol" min="1" max="216" value="64" style="width: 200px;"></label>
    <span id="cube-vol-label" style="font-weight: bold; color: #1e3a8a; min-width: 80px;">V = 64</span>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center;">
    <svg id="cube-svg" width="300" height="200" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
      <!-- Isometric 3D Cube SVG -->
    </svg>
    <div id="cube-res" style="margin-top: 12px; font-weight: bold; font-size: 1.1em; color: #047857; text-align: center;">
      <!-- Result text -->
    </div>
  </div>
</div>

<script>
(function() {
  function drawCube() {
    let V = parseFloat(document.getElementById('cube-vol').value);
    document.getElementById('cube-vol-label').innerText = 'V = ' + V;

    let side = Math.cbrt(V);
    const svg = document.getElementById('cube-svg');
    const res = document.getElementById('cube-res');

    // Isometric projection scale
    // Max side is cbrt(216) = 6 -> scale = 14 px per unit
    let s = side * 14;
    let cx = 150;
    let cy = 120;

    let dx = s * Math.cos(Math.PI / 6);
    let dy = s * Math.sin(Math.PI / 6);

    // Front face
    let p0 = {x: cx, y: cy};
    let p1 = {x: cx - dx, y: cy - dy};
    let p2 = {x: cx, y: cy - 2 * dy};
    let p3 = {x: cx + dx, y: cy - dy};

    // Bottom points
    let b0 = {x: cx, y: cy + s};
    let b1 = {x: cx - dx, y: cy - dy + s};
    let b3 = {x: cx + dx, y: cy - dy + s};

    let svgHtml = `
      <!-- Top Face -->
      <polygon points="${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
      <!-- Left Face -->
      <polygon points="${p0.x},${p0.y} ${p1.x},${p1.y} ${b1.x},${b1.y} ${b0.x},${b0.y}" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
      <!-- Right Face -->
      <polygon points="${p0.x},${p0.y} ${p3.x},${p3.y} ${b3.x},${b3.y} ${b0.x},${b0.y}" fill="#1d4ed8" stroke="#1e40af" stroke-width="1.5"/>
      
      <!-- Label on top face -->
      <text x="${cx}" y="${cy - dy}" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">V = ${V}</text>
    `;

    svg.innerHTML = svgHtml;
    res.innerHTML = `Độ dài cạnh: a = &radic;[3]{${V}} = <span style="color: #b91c1c;">${side.toFixed(3)}</span> &hArr; (${side.toFixed(3)})&sup3; = ${V}`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cube-vol').addEventListener('input', drawCube);
    drawCube();
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Tính giá trị biểu thức và so sánh các căn bậc ba

**Phương pháp giải:**
- Phân tích các số dưới dấu căn thành lũy thừa bậc ba của các số nguyên ($1, 8, 27, 64, 125, 216...$).
- Áp dụng hằng đẳng thức $\sqrt[3]{a^3} = a$.
- Để so sánh $a$ và $\sqrt[3]{b}$, ta so sánh $a^3$ với $b$.

---

#### Bài toán 1:
Tính giá trị các biểu thức:
a) $A = \sqrt[3]{125} - \sqrt[3]{-216} + \sqrt[3]{0,001}$.
b) $B = \sqrt[3]{2} \cdot \sqrt[3]{32} - \frac{\sqrt[3]{135}}{\sqrt[3]{5}}$.
c) So sánh $3$ và $\sqrt[3]{26}$.

**Lời giải:**

a) Ta có:
- $125 = 5^3 \implies \sqrt[3]{125} = 5$.
- $-216 = (-6)^3 \implies \sqrt[3]{-216} = -6$.
- $0,001 = 0,1^3 \implies \sqrt[3]{0,001} = 0,1$.
Khi đó:
$$A = 5 - (-6) + 0,1 = 5 + 6 + 0,1 = 11,1$$

b) Áp dụng quy tắc nhân và chia căn bậc ba:
$$\sqrt[3]{2} \cdot \sqrt[3]{32} = \sqrt[3]{2 \cdot 32} = \sqrt[3]{64} = \sqrt[3]{4^3} = 4$$
$$\frac{\sqrt[3]{135}}{\sqrt[3]{5}} = \sqrt[3]{\frac{135}{5}} = \sqrt[3]{27} = \sqrt[3]{3^3} = 3$$
Do đó:
$$B = 4 - 3 = 1$$

c) Ta có: $3 = \sqrt[3]{3^3} = \sqrt[3]{27}$.
Vì $27 > 26 \implies \sqrt[3]{27} > \sqrt[3]{26}$.
Vậy $3 > \sqrt[3]{26}$.

---

### Dạng 2: Rút gọn biểu thức chứa căn thức bậc ba

**Phương pháp giải:**
- Đưa thừa số ra ngoài dấu căn: $\sqrt[3]{A^3 B} = A\sqrt[3]{B}$.
- Nhóm các căn thức đồng dạng (cùng phần căn bậc ba).

---

#### Bài toán 2:
Rút gọn các biểu thức:
a) $M = \sqrt[3]{54} - 2\sqrt[3]{16} + \sqrt[3]{128}$.
b) $N = \sqrt[3]{x^3 - 3x^2 + 3x - 1} - 2x$ với $x \in \mathbb{R}$.

**Lời giải:**

a) Tách các số dưới căn thành tích có số lập phương ($8, 27, 64$):
- $\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = 3\sqrt[3]{2}$.
- $\sqrt[3]{16} = \sqrt[3]{8 \cdot 2} = 2\sqrt[3]{2}$.
- $\sqrt[3]{128} = \sqrt[3]{64 \cdot 2} = 4\sqrt[3]{2}$.
Thay vào biểu thức $M$:
$$M = 3\sqrt[3]{2} - 2(2\sqrt[3]{2}) + 4\sqrt[3]{2} = (3 - 4 + 4)\sqrt[3]{2} = 3\sqrt[3]{2}$$

b) Nhận diện hằng đẳng thức lập phương của một hiệu:
$$x^3 - 3x^2 + 3x - 1 = (x - 1)^3$$
Khi đó:
$$N = \sqrt[3]{(x - 1)^3} - 2x = (x - 1) - 2x = -x - 1$$
*(Lưu ý: Khác với căn bậc hai, căn bậc ba của $(x - 1)^3$ chính bằng $x - 1$ với mọi $x$, không cần xét khoảng dấu!)*

---

### Dạng 3: Giải phương trình chứa căn bậc ba

**Phương pháp giải:**
- Phương trình dạng $\sqrt[3]{f(x)} = c \iff f(x) = c^3$.
- Phương trình dạng $\sqrt[3]{f(x)} = \sqrt[3]{g(x)} \iff f(x) = g(x)$.
- **Không cần đặt điều kiện xác định** cho biểu thức dưới dấu căn bậc ba!

---

#### Bài toán 3:
Giải các phương trình sau:
a) $\sqrt[3]{2x - 1} = 3$.
b) $\sqrt[3]{x + 1} + \sqrt[3]{x - 1} = 0$.
c) $\sqrt[3]{x^3 + 9x^2} = x + 3$.

**Lời giải:**

a) Lập phương hai vế của phương trình:
$$2x - 1 = 3^3 \iff 2x - 1 = 27 \iff 2x = 28 \implies x = 14$$
Vậy phương trình có nghiệm duy nhất $x = 14$.

b) Chuyển vế:
$$\sqrt[3]{x + 1} = -\sqrt[3]{x - 1} \iff \sqrt[3]{x + 1} = \sqrt[3]{-(x - 1)} \iff \sqrt[3]{x + 1} = \sqrt[3]{1 - x}$$
Lập phương hai vế:
$$x + 1 = 1 - x \iff 2x = 0 \implies x = 0$$
Vậy nghiệm của phương trình là $x = 0$.

c) Lập phương hai vế:
$$x^3 + 9x^2 = (x + 3)^3$$
Khai triển hằng đẳng thức $(x + 3)^3 = x^3 + 3 \cdot x^2 \cdot 3 + 3 \cdot x \cdot 3^2 + 3^3 = x^3 + 9x^2 + 27x + 27$:
$$x^3 + 9x^2 = x^3 + 9x^2 + 27x + 27$$
Triệt tiêu $x^3 + 9x^2$ ở cả hai vế:
$$0 = 27x + 27 \iff 27x = -27 \implies x = -1$$
Vậy phương trình có nghiệm duy nhất $x = -1$.

---

### Dạng 4: Trục căn thức ở mẫu bằng lượng liên hợp bậc ba

**Phương pháp giải:**
Áp dụng hai hằng đẳng thức hiệu và tổng hai lập phương:
$$(u - v)(u^2 + uv + v^2) = u^3 - v^3$$
$$(u + v)(u^2 - uv + v^2) = u^3 + v^3$$
- Lượng liên hợp của $(\sqrt[3]{a} - \sqrt[3]{b})$ là $(\sqrt[3]{a^2} + \sqrt[3]{ab} + \sqrt[3]{b^2})$.
- Lượng liên hợp của $(\sqrt[3]{a} + \sqrt[3]{b})$ là $(\sqrt[3]{a^2} - \sqrt[3]{ab} + \sqrt[3]{b^2})$.

---

#### Bài toán 4:
Trục căn thức ở mẫu của biểu thức sau:
$$P = \frac{1}{\sqrt[3]{3} - 1}$$

**Lời giải:**

Áp dụng hằng đẳng thức $(u - v)(u^2 + uv + v^2) = u^3 - v^3$ với $u = \sqrt[3]{3}$ và $v = 1$:
Lượng liên hợp là: $(\sqrt[3]{3})^2 + \sqrt[3]{3} \cdot 1 + 1^2 = \sqrt[3]{9} + \sqrt[3]{3} + 1$.
Nhân cả tử và mẫu với lượng liên hợp:
$$P = \frac{1 \cdot (\sqrt[3]{9} + \sqrt[3]{3} + 1)}{(\sqrt[3]{3} - 1)(\sqrt[3]{9} + \sqrt[3]{3} + 1)} = \frac{\sqrt[3]{9} + \sqrt[3]{3} + 1}{(\sqrt[3]{3})^3 - 1^3} = \frac{\sqrt[3]{9} + \sqrt[3]{3} + 1}{3 - 1} = \frac{\sqrt[3]{9} + \sqrt[3]{3} + 1}{2}$$

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Bán Kính Thiên Thể Khối Cầu Trong Vật Lý Thiên Văn
Mọi ngôi sao và hành tinh (như Trái Đất hay Sao Hỏa) dưới tác dụng của lực hấp dẫn tự thân đều co cụm lại thành hình cầu có thể tích $V = \frac{4}{3}\pi R^3$.
Để tính bán kính của một ngoại hành tinh mới phát hiện ngoài hệ Mặt Trời qua thể tích khí quyển, các nhà thiên văn học dùng căn bậc ba:
$$R = \sqrt[3]{\frac{3V}{4\pi}}$$

---

### Chuyên đề 2: Định Luật 3 Kepler Về Quỹ Đạo Chuyển Động Vệ Tinh
Nhà thiên văn học Johannes Kepler đã tìm ra mối quan hệ hài hòa vĩ đại giữa chu kỳ quay quanh Mặt Trời $T$ và bán trục lớn quỹ đạo $a$ của các hành tinh:
$$T^2 = a^3 \implies a = \sqrt[3]{T^2}$$
Nhờ công thức căn bậc ba này, chỉ cần đo được thời gian chu kỳ quay $T = 365,25\text{ ngày}$ của Trái Đất, con người đã tính được chính xác khoảng cách từ Trái Đất đến Mặt Trời là $149,6\text{ triệu km}$ mà không cần phải bay tới đó!

---

### Chuyên đề 3: Thiết Kế Vỏ Thân Tàu Ngầm Thám Hiểm Biển Sâu
Ở rãnh vực Mariana sâu $11\text{ km}$, áp suất nước biển lên tới hơn $1\ 000\text{ atm}$. Khoang lái chở người của tàu ngầm thám hiểm bắt buộc phải thiết kế dưới dạng khối cầu hoặc khối lập phương bo tròn có độ dày vỏ thép titan tính toán dựa trên ứng suất chịu nén thể tích 3 chiều tỷ lệ nghịch với căn bậc ba của diện tích bề mặt.

---

### Chuyên đề 4: Tốc Độ Thuật Toán Siêu Máy Tính Lượng Tử (Quantum Scaling)
Trong khoa học máy tính: Khi giải các bài toán tối ưu hóa tổ hợp khổng lồ (như bẻ khóa mật mã RSA), máy tính cổ điển mất thời gian theo cấp số nhân, nhưng thuật toán lượng tử Grover có thể tăng tốc độ tìm kiếm theo tỉ lệ căn bậc hai, và các bài toán phân rã tensor đa chiều đạt độ phức tạp giảm xuống $O(\sqrt[3]{N})$.

---

### Chuyên đề 5: Công Suất Động Cơ & Lực Cản Khí Động Học Ô Tô (Aerodynamic Drag)
Khi một chiếc ô tô chạy trên đường cao tốc, công suất động cơ $P$ cần thiết để thắng lực cản của không khí tăng tỷ lệ với **lập phương vận tốc**:
$$P = \frac{1}{2}\rho C_d A \cdot v^3 \implies v = \sqrt[3]{\frac{2P}{\rho C_d A}}$$
Điều này giải thích vì sao muốn tăng tốc độ tối đa của siêu xe từ $200\text{ km/h}$ lên $400\text{ km/h}$ (gấp đôi), người ta phải tăng công suất động cơ lên gấp $2^3 = 8\text{ lần}$!

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Căn bậc ba và Căn thức bậc ba (Toán 9 Bài 10)",
  "questions": [
    {
      "question": "Căn bậc ba của -125 là:",
      "options": [
        "-5",
        "5",
        "25",
        "Không tồn tại"
      ],
      "answer": 0,
      "hint": "(-5)^3 = -125 => sqrt[3]{-125} = -5.",
      "explanation": "Vì $(-5)^3 = -125$ nên căn bậc ba của $-125$ là $-5$."
    },
    {
      "question": "Khẳng định nào sau đây là ĐÚNG về căn bậc ba?",
      "options": [
        "Mọi số thực đều có duy nhất một căn bậc ba",
        "Số âm không có căn bậc ba",
        "Số dương có hai căn bậc ba đối nhau",
        "Căn bậc ba của một số luôn là số dương"
      ],
      "answer": 0,
      "hint": "Mỗi số thực a luôn có duy nhất một căn bậc ba cùng dấu với a.",
      "explanation": "Định lý: Mọi số thực $a$ (dương, âm, bằng 0) đều có duy nhất một căn bậc ba."
    },
    {
      "question": "Tính giá trị của biểu thức P = căn[3](64) - căn[3](-27):",
      "options": [
        "7",
        "1",
        "-1",
        "11"
      ],
      "answer": 0,
      "hint": "sqrt[3]{64} = 4; sqrt[3]{-27} = -3 => 4 - (-3) = 7.",
      "explanation": "$P = 4 - (-3) = 4 + 3 = 7$."
    },
    {
      "question": "Tính kết quả của phép tính căn[3](3) * căn[3](9):",
      "options": [
        "3",
        "9",
        "27",
        "căn[3](12)"
      ],
      "answer": 0,
      "hint": "sqrt[3]{3 * 9} = sqrt[3]{27} = 3.",
      "explanation": "Áp dụng quy tắc nhân căn bậc ba: $\\sqrt[3]{3} \\cdot \\sqrt[3]{9} = \\sqrt[3]{3 \\cdot 9} = \\sqrt[3]{27} = 3$."
    },
    {
      "question": "So sánh 4 và căn[3](63):",
      "options": [
        "4 > căn[3](63)",
        "4 < căn[3](63)",
        "4 = căn[3](63)",
        "Không thể so sánh"
      ],
      "answer": 0,
      "hint": "4 = sqrt[3]{4^3} = sqrt[3]{64} > sqrt[3]{63}.",
      "explanation": "Vì $4 = \\sqrt[3]{64}$ và $64 > 63 \\implies \\sqrt[3]{64} > \\sqrt[3]{63} \\implies 4 > \\sqrt[3]{63}$."
    },
    {
      "question": "Biểu thức căn[3](x - 2) xác định khi nào?",
      "options": [
        "Với mọi x thuộc R",
        "x >= 2",
        "x > 2",
        "x khác 2"
      ],
      "answer": 0,
      "hint": "Căn bậc ba xác định với mọi số thực, không cần điều kiện không âm.",
      "explanation": "Khác với căn bậc hai, căn thức bậc ba $\\sqrt[3]{A}$ luôn xác định với mọi giá trị của biểu thức $A$ trên $\\mathbb{R}$."
    },
    {
      "question": "Rút gọn biểu thức căn[3]((-8)*x^3) ta được:",
      "options": [
        "-2x",
        "2x",
        "|-2x|",
        "-8x"
      ],
      "answer": 0,
      "hint": "sqrt[3]{(-2x)^3} = -2x (không có dấu giá trị tuyệt đối).",
      "explanation": "Ta có $(-8)x^3 = (-2x)^3$. Áp dụng hằng đẳng thức căn bậc ba: $\\sqrt[3]{(-2x)^3} = -2x$."
    },
    {
      "question": "Nghiệm của phương trình căn[3](3x - 2) = -2 là:",
      "options": [
        "x = -2",
        "x = 2",
        "x = -10/3",
        "Vô nghiệm"
      ],
      "answer": 0,
      "hint": "3x - 2 = (-2)^3 = -8 => 3x = -6 => x = -2.",
      "explanation": "Lập phương hai vế: $3x - 2 = (-2)^3 \\iff 3x - 2 = -8 \\iff 3x = -6 \\implies x = -2$."
    },
    {
      "question": "Tính giá trị của thương căn[3](250) / căn[3](2):",
      "options": [
        "5",
        "25",
        "125",
        "5*căn[3](2)"
      ],
      "answer": 0,
      "hint": "sqrt[3]{250 / 2} = sqrt[3]{125} = 5.",
      "explanation": "Áp dụng quy tắc chia căn bậc ba: $\\frac{\\sqrt[3]{250}}{\\sqrt[3]{2}} = \\sqrt[3]{\\frac{250}{2}} = \\sqrt[3]{125} = 5$."
    },
    {
      "question": "Một khối rubik hình lập phương có thể tích bằng 216 cm^3. Độ dài mỗi cạnh của khối rubik đó là:",
      "options": [
        "6 cm",
        "8 cm",
        "4 cm",
        "12 cm"
      ],
      "answer": 0,
      "hint": "Cạnh a = sqrt[3]{216} = 6 cm.",
      "explanation": "Độ dài cạnh hình lập phương là $a = \\sqrt[3]{V} = \\sqrt[3]{216} = 6\\text{ cm}$."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Tính giá trị các biểu thức
a) $A = \sqrt[3]{-64} + 2\sqrt[3]{27} - \sqrt[3]{125}$.
b) $B = \sqrt[3]{4} \cdot \sqrt[3]{16} - \frac{\sqrt[3]{54}}{\sqrt[3]{2}}$.
c) $C = \sqrt[3]{(2 - \sqrt{5})^3} + \sqrt{5}$.

### Bài 2: Giải các phương trình
a) $\sqrt[3]{2x + 5} = -3$.
b) $\sqrt[3]{x^2 - 1} = 2$.
c) $\sqrt[3]{x^3 - 6x^2 + 12x} = x - 2$.

### Bài 3: Trục căn thức ở mẫu
a) $\frac{2}{\sqrt[3]{2}}$.
b) $\frac{1}{\sqrt[3]{5} + 1}$.
c) $\frac{6}{\sqrt[3]{7} - \sqrt[3]{4}}$.

### Bài 4 (Thử thách thực tế):
Một bể chứa nước hình lập phương có dung tích $V = 3,375\text{ m}^3$.
a) Tính độ dài cạnh bên trong của bể nước đó.
b) Người ta muốn sơn chống thấm toàn bộ các mặt xung quanh và mặt đáy của bể nước (không sơn nắp trên). Biết chi phí sơn chống thấm là $80\ 000\text{ đồng/m}^2$. Hỏi tổng chi phí sơn chống thấm cho bể nước là bao nhiêu tiền?
