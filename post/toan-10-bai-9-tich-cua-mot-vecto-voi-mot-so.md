---
title: 'Toán 10 Bài 9: Tích của một vectơ với một số - Phân tích vectơ & Thẳng hàng'
description: 'Lý thuyết chuẩn Toán 10 Bài 9: Định nghĩa tích của vectơ với một số, tính chất, điều kiện hai vectơ cùng phương, điều kiện ba điểm thẳng hàng, phân tích vectơ theo hai vectơ không cùng phương, widget tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Vectơ
  - Tích vectơ với một số
  - Phân tích vectơ
  - Ba điểm thẳng hàng
  - Kết nối tri thức
grade: 10
---

# Bài 9. Tích của một vectơ với một số

Ở Bài 8, chúng ta đã biết cách cộng hai vectơ để tìm hợp lực hoặc tổng độ dịch chuyển. Vậy nếu ta tăng gấp đôi, gấp ba độ lớn của lực kéo mà vẫn giữ nguyên phương hướng, hoặc đảo ngược hoàn toàn chiều tác dụng thì biểu diễn toán học như thế nào?

Câu trả lời chính là phép toán **Tích của một vectơ với một số thực** ($k\vec{a}$).

Không dừng lại ở việc co giãn độ dài, phép toán này mang trong mình một sức mạnh phi thường:
- Cho phép kiểm tra chính xác điều kiện **ba điểm thẳng hàng** hoặc **hai đường thẳng song song**.
- Cung cấp định lí phân tích vectơ nền tảng: Mọi vectơ trong mặt phẳng đều có thể biểu diễn qua hai vectơ cơ sở — tiền đề trực tiếp để xây dựng hệ trục tọa độ giải tích của Descartes sau này!

---

## 1. Sơ đồ tư duy toàn diện: Tích của một vectơ với một số

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Định nghĩa chuẩn</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Ký hiệu: $k\vec{a}$ ($k \in \mathbb{R}$).<br>
      • Độ lớn: $|k\vec{a}| = |k| \cdot |\vec{a}|$.<br>
      • Hướng: <strong>Cùng hướng</strong> với $\vec{a}$ nếu $k > 0$, <strong>ngược hướng</strong> với $\vec{a}$ nếu $k < 0$.<br>
      • Quy ước: $0\vec{a} = \vec{0}$ và $k\vec{0} = \vec{0}$.
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Tính chất đại số</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • $k(m\vec{a}) = (km)\vec{a}$<br>
      • $(k + m)\vec{a} = k\vec{a} + m\vec{a}$<br>
      • $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$<br>
      • $k\vec{a} = \vec{0} \iff k = 0$ hoặc $\vec{a} = \vec{0}$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Cùng phương & Thẳng hàng</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • $\vec{b}$ cùng phương với $\vec{a} \ne \vec{0} \iff \exists k \in \mathbb{R}: \vec{b} = k\vec{a}$.<br>
      • Ba điểm phân biệt $A, B, C$ thẳng hàng $\iff \exists k \ne 0: \vec{AB} = k\vec{AC}$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Định lí phân tích vectơ</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • Cho hai vectơ $\vec{a}, \vec{b}$ không cùng phương.<br>
      • Với mọi vectơ $\vec{x}$, luôn tồn tại <strong>duy nhất</strong> cặp số $(m; n)$ sao cho:<br>
      &nbsp;&nbsp;$\vec{x} = m\vec{a} + n\vec{b}$.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Vectơ $-3\vec{a}$ có hướng và độ dài như thế nào so với vectơ $\vec{a} \ne \vec{0}$?**  
   *Đáp án:* Ngược hướng với $\vec{a}$ và có độ dài gấp 3 lần độ dài của $\vec{a}$ (vì $|-3| = 3$).
2. **Nếu điểm $M$ là trung điểm của $AB$, biểu diễn vectơ $\vec{AM}$ theo $\vec{AB}$ như thế nào?**  
   *Đáp án:* $\vec{AM} = \frac{1}{2}\vec{AB}$.
3. **Nếu $\vec{AB} = -2\vec{AC}$, thì điểm $A$ nằm ở đâu so với đoạn thẳng $BC$?**  
   *Đáp án:* Điểm $A$ nằm giữa hai điểm $B$ và $C$, và khoảng cách $AB = 2AC$.
4. **Nếu $G$ là trọng tâm của tam giác $ABC$ và $M$ là trung điểm của cạnh $BC$, hệ thức giữa $\vec{AG}$ và $\vec{AM}$ là gì?**  
   *Đáp án:* $\vec{AG} = \frac{2}{3}\vec{AM}$.
5. **Điều kiện cần và đủ để tích $k\vec{a} = \vec{0}$ là gì?**  
   *Đáp án:* Số $k = 0$ hoặc vectơ $\vec{a} = \vec{0}$.

---

## 3. Lý thuyết trọng tâm

### 3.1. Định nghĩa tích của một vectơ với một số

Cho số thực $k \ne 0$ và vectơ $\vec{a} \ne \vec{0}$.  
Tích của vectơ $\vec{a}$ với số $k$ là một vectơ, ký hiệu là $k\vec{a}$, được xác định như sau:
1. **Về hướng:**
   - $k\vec{a}$ **cùng hướng** với $\vec{a}$ khi $k > 0$.
   - $k\vec{a}$ **ngược hướng** với $\vec{a}$ khi $k < 0$.
2. **Về độ dài:**
   $$|k\vec{a}| = |k| \cdot |\vec{a}|$$

#### Quy ước đặc biệt:
$$0\vec{a} = \vec{0} \quad \text{và} \quad k\vec{0} = \vec{0}$$

---

### 3.2. Các tính chất của phép nhân vectơ với số

Với hai vectơ $\vec{a}, \vec{b}$ bất kỳ và hai số thực $k, m$:
1. $k(m\vec{a}) = (km)\vec{a}$
2. $(k + m)\vec{a} = k\vec{a} + m\vec{a}$
3. $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$ và $k(\vec{a} - \vec{b}) = k\vec{a} - k\vec{b}$
4. $1\vec{a} = \vec{a}$ và $(-1)\vec{a} = -\vec{a}$
5. $k\vec{a} = \vec{0} \iff k = 0$ hoặc $\vec{a} = \vec{0}$.

---

### 3.3. Điều kiện hai vectơ cùng phương & Ba điểm thẳng hàng

> [!NOTE]
> **ĐIỀU KIỆN HAI VECTƠ CÙNG PHƯƠNG:**  
> Cho vectơ $\vec{a} \ne \vec{0}$. Vectơ $\vec{b}$ cùng phương với vectơ $\vec{a}$ khi và chỉ khi tồn tại một số thực $k$ sao cho:
> $$\vec{b} = k\vec{a}$$

#### Ứng dụng chứng minh ba điểm thẳng hàng:
Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\vec{AB}$ và $\vec{AC}$ cùng phương, tức là tồn tại số thực $k \ne 0$ sao cho:
$$\vec{AB} = k\vec{AC}$$

---

### 3.4. Định lí phân tích một vectơ theo hai vectơ không cùng phương

> [!NOTE]
> **ĐỊNH LÍ CƠ BẢN VỀ PHÂN TÍCH VECTƠ:**  
> Cho hai vectơ $\vec{a}$ và $\vec{b}$ không cùng phương. Với mọi vectơ $\vec{x}$ tùy ý trong mặt phẳng, luôn luôn tìm được **duy nhất** một cặp số thực $(m; n)$ sao cho:
> $$\vec{x} = m\vec{a} + n\vec{b}$$

Cặp số $(m; n)$ này được gọi là tọa độ của vectơ $\vec{x}$ đối với cơ sở $(\vec{a}, \vec{b})$. Đây chính là nền tảng để thiết lập hệ tọa độ giải tích trong mặt phẳng!

---

## 4. Widget tương tác: Phân tích Vectơ theo Cơ sở

Điều chỉnh hai hệ số $m$ và $n$ bằng thanh trượt để quan sát sự tổng hợp của hai vectơ thành phần $m\vec{a} + n\vec{b}$ tạo nên vectơ mục tiêu $\vec{x}$:

```html
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🧩 Mô Phỏng Phân Tích Vectơ x = m a + n b</h3>
    <div style="font-weight: 700; font-size: 1.1rem; color: #4f46e5;">
      x = <span id="dspM">2.0</span> a + <span id="dspN">1.5</span> b
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Vector Canvas SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center;">
      <svg data-interactive-done="true" id="decompSvg" viewBox="0 0 320 220" style="width: 100%; max-width: 340px; height: auto; background: #ffffff;">
        <defs>
          <marker id="arrBaseA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
          </marker>
          <marker id="arrBaseB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
          </marker>
          <marker id="arrResX" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
          </marker>
        </defs>

        <!-- Origin at (50, 170) -->
        <!-- Parallelogram guideline -->
        <polygon id="guidelinePoly" points="50,170 150,170 210,80 110,80" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />

        <!-- Component vectors ma and nb -->
        <line id="lineMA" x1="50" y1="170" x2="150" y2="170" stroke="#93c5fd" stroke-width="3" />
        <line id="lineNB" x1="50" y1="170" x2="110" y2="80" stroke="#fca5a5" stroke-width="3" />

        <!-- Base vectors a and b (fixed reference, unit length) -->
        <line x1="50" y1="170" x2="100" y2="170" stroke="#2563eb" stroke-width="3.5" marker-end="url(#arrBaseA)" />
        <text x="75" y="190" font-size="12" font-weight="bold" fill="#2563eb">a</text>

        <line x1="50" y1="170" x2="90" y2="110" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arrBaseB)" />
        <text x="60" y="130" font-size="12" font-weight="bold" fill="#dc2626">b</text>

        <!-- Resulting vector x = ma + nb -->
        <line id="lineResX" x1="50" y1="170" x2="210" y2="80" stroke="#16a34a" stroke-width="3.5" marker-end="url(#arrResX)" />

        <!-- Origin O -->
        <circle cx="50" cy="170" r="5" fill="#0f172a" />
        <text x="34" y="185" font-size="12" font-weight="bold" fill="#0f172a">O</text>

        <!-- Endpoint of x -->
        <circle id="dotX" cx="210" cy="80" r="5" fill="#16a34a" />
        <text id="lblX" x="218" y="76" font-size="13" font-weight="bold" fill="#16a34a">x</text>
      </svg>
    </div>

    <!-- Sliders and Information -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="margin-bottom: 14px;">
        <label style="font-size: 0.85rem; font-weight: 600; color: #2563eb;">
          Hệ số m (theo vectơ a): <span id="valMText" style="font-size: 1rem;">2.0</span>
        </label>
        <input type="range" id="sliderM" min="-2" max="4" step="0.5" value="2" oninput="updateDecomp()" style="width: 100%; margin-top: 4px;" />
      </div>

      <div style="margin-bottom: 14px;">
        <label style="font-size: 0.85rem; font-weight: 600; color: #dc2626;">
          Hệ số n (theo vectơ b): <span id="valNText" style="font-size: 1rem;">1.5</span>
        </label>
        <input type="range" id="sliderN" min="-1" max="3" step="0.5" value="1.5" oninput="updateDecomp()" style="width: 100%; margin-top: 4px;" />
      </div>

      <div style="background: #f1f5f9; padding: 10px; border-radius: 6px; font-size: 0.82rem; color: #334155; line-height: 1.4;">
        • Vectơ cơ sở $\vec{a}$ (màu xanh dương) và $\vec{b}$ (màu đỏ) không cùng phương.<br>
        • Vectơ kết quả $\vec{x}$ (màu xanh lá) luôn được mở rộng quét khắp mọi vị trí trong mặt phẳng khi $m, n$ biến thiên.
      </div>
    </div>
  </div>
</div>

<script>
function updateDecomp() {
  const m = parseFloat(document.getElementById('sliderM').value);
  const n = parseFloat(document.getElementById('sliderN').value);

  document.getElementById('valMText').textContent = m.toFixed(1);
  document.getElementById('valNText').textContent = n.toFixed(1);
  document.getElementById('dspM').textContent = m.toFixed(1);
  document.getElementById('dspN').textContent = n.toFixed(1);

  // Origin at (50, 170)
  // Vector a = (50, 0) in px. Vector b = (40, -60) in px.
  const ox = 50, oy = 170;
  const ax = 50, ay = 0;
  const bx = 40, by = -60;

  const max = m * ax, may = m * ay;
  const nbx = n * bx, nby = n * by;

  const pMA = { x: ox + max, y: oy + may };
  const pNB = { x: ox + nbx, y: oy + nby };
  const pX = { x: ox + max + nbx, y: oy + may + nby };

  document.getElementById('lineMA').setAttribute('x2', pMA.x);
  document.getElementById('lineMA').setAttribute('y2', pMA.y);

  document.getElementById('lineNB').setAttribute('x2', pNB.x);
  document.getElementById('lineNB').setAttribute('y2', pNB.y);

  document.getElementById('guidelinePoly').setAttribute('points', `${ox},${oy} ${pMA.x},${pMA.y} ${pX.x},${pX.y} ${pNB.x},${pNB.y}`);

  document.getElementById('lineResX').setAttribute('x2', pX.x);
  document.getElementById('lineResX').setAttribute('y2', pX.y);

  document.getElementById('dotX').setAttribute('cx', pX.x);
  document.getElementById('dotX').setAttribute('cy', pX.y);

  document.getElementById('lblX').setAttribute('x', pX.x + 8);
  document.getElementById('lblX').setAttribute('y', pX.y - 4);
}
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Rút gọn và biến đổi biểu thức chứa phép nhân vectơ với số

#### Phương pháp:
- Áp dụng các tính chất phân phối, kết hợp tương tự như đa thức trong đại số.
- Đưa các vectơ cùng loại về chung một nhóm để rút gọn hệ số.

---

#### Bài toán 1
Rút gọn các biểu thức vectơ sau:
1. $\vec{u} = 2(\vec{a} + 3\vec{b}) - 3(2\vec{a} - \vec{b})$
2. $\vec{v} = \frac{1}{2}(2\vec{x} - 4\vec{y}) + 3\left(\vec{x} + \frac{2}{3}\vec{y}\right)$

**Lời giải chi tiết:**

1. Áp dụng tính chất phân phối:
   $$\vec{u} = 2\vec{a} + 6\vec{b} - 6\vec{a} + 3\vec{b}$$
   Gom các số hạng cùng vectơ:
   $$\vec{u} = (2 - 6)\vec{a} + (6 + 3)\vec{b} = -4\vec{a} + 9\vec{b}$$

2. Phân phối và nhân hệ số:
   $$\vec{v} = \left(\frac{1}{2} \cdot 2\vec{x} - \frac{1}{2} \cdot 4\vec{y}\right) + \left(3\vec{x} + 3 \cdot \frac{2}{3}\vec{y}\right)$$
   $$\vec{v} = (\vec{x} - 2\vec{y}) + (3\vec{x} + 2\vec{y})$$
   $$\vec{v} = (\vec{x} + 3\vec{x}) + (-2\vec{y} + 2\vec{y}) = 4\vec{x} + \vec{0} = 4\vec{x}$$

---

### Dạng 2: Phân tích một vectơ theo hai vectơ không cùng phương

#### Phương pháp:
1. Chèn điểm thích hợp bằng quy tắc ba điểm hoặc quy tắc hình bình hành để đưa vectơ cần phân tích về tổng các vectơ trung gian.
2. Dùng tỉ số đoạn thẳng hoặc tính chất trung điểm, trọng tâm để chuyển các vectơ trung gian về hai vectơ cơ sở $\vec{a}$ và $\vec{b}$.

---

#### Bài toán 2
Cho tam giác $ABC$. Gọi $M$ là trung điểm của cạnh $AB$, và $N$ là điểm trên cạnh $AC$ sao cho $AN = \frac{1}{3}AC$. Gọi $K$ là trung điểm của đoạn thẳng $MN$.
Hãy phân tích vectơ $\vec{AK}$ theo hai vectơ $\vec{AB}$ và $\vec{AC}$.

**Lời giải chi tiết:**

- Vì $K$ là trung điểm của đoạn thẳng $MN$, theo tính chất trung điểm với gốc $A$:
  $$\vec{AK} = \frac{1}{2}(\vec{AM} + \vec{AN})$$
- Mặt khác:
  - $M$ là trung điểm của $AB$ nên $\vec{AM} = \frac{1}{2}\vec{AB}$.
  - Điểm $N$ nằm trên cạnh $AC$ và $AN = \frac{1}{3}AC$ nên $\vec{AN} = \frac{1}{3}\vec{AC}$.
- Thay vào biểu thức của $\vec{AK}$:
  $$\vec{AK} = \frac{1}{2}\left(\frac{1}{2}\vec{AB} + \frac{1}{3}\vec{AC}\right) = \frac{1}{4}\vec{AB} + \frac{1}{6}\vec{AC}$$
- **Kết luận:** $\vec{AK} = \frac{1}{4}\vec{AB} + \frac{1}{6}\vec{AC}$.

---

### Dạng 3: Chứng minh ba điểm thẳng hàng bằng vectơ

#### Phương pháp:
Để chứng minh ba điểm phân biệt $A, B, C$ thẳng hàng:
1. Chọn hai vectơ cơ sở thích hợp (thường xuất phát từ một tam giác có sẵn).
2. Phân tích cả hai vectơ $\vec{AB}$ và $\vec{AC}$ (hoặc $\vec{AB}$ và $\vec{BC}$) theo hai vectơ cơ sở đó.
3. Chỉ ra tỉ lệ bằng nhau giữa các hệ số để suy ra $\vec{AB} = k\vec{AC}$. Kết luận ba điểm thẳng hàng.

---

#### Bài toán 3
Cho tam giác $ABC$. Lấy điểm $I$ trên cạnh $AC$ sao cho $\vec{CI} = \frac{1}{4}\vec{CA}$, điểm $J$ thỏa mãn $\vec{BJ} = \frac{1}{2}\vec{AC} - \frac{2}{3}\vec{AB}$.  
Chứng minh rằng ba điểm $B, I, J$ thẳng hàng.

**Lời giải chi tiết:**

Chọn cơ sở là hai vectơ $\vec{AB}$ và $\vec{AC}$.
- **Phân tích vectơ $\vec{BI}$:**
  Ta có $\vec{CI} = \frac{1}{4}\vec{CA} \iff \vec{AC} - \vec{AI} = \frac{1}{4}(-\vec{AC}) \iff \vec{AI} = \frac{3}{4}\vec{AC}$.  
  Chèn điểm $A$ vào $\vec{BI}$:
  $$\vec{BI} = \vec{AI} - \vec{AB} = \frac{3}{4}\vec{AC} - \vec{AB}$$

- **Xem xét vectơ $\vec{BJ}$ đề bài đã cho:**
  $$\vec{BJ} = \frac{1}{2}\vec{AC} - \frac{2}{3}\vec{AB}$$

- **So sánh tỉ lệ hai vectơ:**
  Nhận xét:
  $$\frac{2}{3} \cdot \vec{BI} = \frac{2}{3}\left(\frac{3}{4}\vec{AC} - \vec{AB}\right) = \frac{1}{2}\vec{AC} - \frac{2}{3}\vec{AB} = \vec{BJ}$$
  Do đó:
  $$\vec{BJ} = \frac{2}{3}\vec{BI}$$
  Đẳng thức này chứng tỏ hai vectơ $\vec{BJ}$ và $\vec{BI}$ cùng phương, lại có chung điểm $B$.  
  Vậy ba điểm $B, I, J$ **thẳng hàng (đpcm)**.

---

### Dạng 4: Chứng minh hai đường thẳng song song hoặc trùng nhau

#### Phương pháp:
- Để chứng minh hai đường thẳng $AB \parallel CD$:
  1. Phân tích $\vec{AB}$ và $\vec{CD}$ theo cùng một cặp vectơ cơ sở.
  2. Chứng minh tồn tại số $k$ sao cho $\vec{AB} = k\vec{CD}$.
  3. Kiểm tra các điểm $A, B$ không thuộc đường thẳng $CD$ để kết luận hai đường thẳng song song.

---

#### Bài toán 4
Cho tam giác $ABC$. Các điểm $M, N$ xác định bởi $\vec{AM} = \frac{1}{3}\vec{AB}$ và $\vec{AN} = \frac{1}{3}\vec{AC}$.  
Chứng minh rằng đường thẳng $MN$ song song với đường thẳng $BC$.

**Lời giải chi tiết:**

- Phân tích vectơ $\vec{MN}$ theo $\vec{AB}$ và $\vec{AC}$:
  $$\vec{MN} = \vec{AN} - \vec{AM} = \frac{1}{3}\vec{AC} - \frac{1}{3}\vec{AB} = \frac{1}{3}(\vec{AC} - \vec{AB}) = \frac{1}{3}\vec{BC}$$
- Đẳng thức $\vec{MN} = \frac{1}{3}\vec{BC}$ chứng tỏ:
  - Hai vectơ $\vec{MN}$ và $\vec{BC}$ cùng phương, cùng hướng.
  - Do đó giá của chúng song song hoặc trùng nhau.
- Vì điểm $M$ nằm trên cạnh $AB$ ($M \ne B$) nên điểm $M$ không thuộc đường thẳng $BC$.  
  Vậy đường thẳng $MN$ **song song** với đường thẳng $BC$ ($MN \parallel BC$).

---

## 6. Ứng dụng thực tế & Khoa học máy tính

| Lĩnh vực ứng dụng | Đóng góp mang tính nền tảng của Phép nhân Vectơ với Số |
| :--- | :--- |
| **Xử lý đồ họa & Game (Scaling Transform)** | Phóng to / thu nhỏ vật thể: Thuật toán nhân ma trận tỷ lệ (Scale matrix) chính là nhân vector vị trí của từng đỉnh lưới $3D$ với một hệ số $k$. |
| **Nén ảnh & Học sâu (Principal Component Analysis - PCA)** | Mọi bức ảnh khuôn mặt có thể phân tích thành tổng trọng số của các "Eigenfaces": $\vec{Face} = c_1 \vec{v}_1 + c_2 \vec{v}_2 + \dots$ |
| **Vật lý thiên văn & Cơ học quỹ đạo** | Định luật vạn vật hấp dẫn: Vectơ gia tốc trọng trường $\vec{g} = -\frac{GM}{r^2} \hat{r}$ (tích của độ lớn lực với vectơ đơn vị hướng tâm). |
| **Hệ thống nhúng & Động cơ bước (Stepper Motor)** | Bộ điều khiển vi bước (Microstepping): Điều chỉnh biên độ dòng điện $k \cdot \vec{I}$ để rô-to quay các góc siêu mịn $0,05^\circ$. |
| **Xử lý ngôn ngữ tự nhiên (NLP Word2Vec)** | Phép toán tương đồng ngữ nghĩa kinh điển: $\vec{King} - \vec{Man} + \vec{Woman} \approx \vec{Queen}$. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q1",
  "question": "Cho vectơ $\\vec{a} \\ne \\vec{0}$. Khẳng định nào sau đây là SAI về vectơ $-2\\vec{a}$?",
  "options": [
    "Vectơ $-2\\vec{a}$ ngược hướng với $\\vec{a}$.",
    "Độ dài $|-2\\vec{a}| = 2|\\vec{a}|$.",
    "Vectơ $-2\\vec{a}$ cùng phương với $\\vec{a}$.",
    "Độ dài $|-2\\vec{a}| = -2|\\vec{a}|$"
  ],
  "answer": 3,
  "explanation": "Độ dài của một vectơ luôn là một số không âm: $|-2\\vec{a}| = |-2| \\cdot |\\vec{a}| = 2|\\vec{a}|$. Do đó khẳng định độ dài bằng số âm $-2|\\vec{a}|$ là SAI."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q2",
  "question": "Cho $I$ là trung điểm của đoạn thẳng $AB$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
  "options": [
    "$\\vec{AB} = 2\\vec{IA}$",
    "$\\vec{AB} = 2\\vec{IB}$",
    "$\\vec{AB} = 2\\vec{AI}$",
    "$\\vec{AB} = -2\\vec{IB}$"
  ],
  "answer": 2,
  "explanation": "Vectơ $\\vec{AB}$ và vectơ $\\vec{AI}$ cùng hướng từ $A$ sang $B$, và đoạn $AB = 2AI$. Do đó $\\vec{AB} = 2\\vec{AI}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q3",
  "question": "Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là trung điểm cạnh $BC$. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "$\\vec{AG} = 2\\vec{GM}$",
    "$\\vec{AG} = \\frac{1}{3}\\vec{AM}$",
    "$\\vec{AM} = 3\\vec{GM}$",
    "Cả hai khẳng định A và C đều đúng"
  ],
  "answer": 3,
  "explanation": "Theo tính chất trọng tâm: $AG = 2GM$ và $\\vec{AG}, \\vec{GM}$ cùng hướng nên $\\vec{AG} = 2\\vec{GM}$. Lại có $AM = 3GM$ và cùng hướng nên $\\vec{AM} = 3\\vec{GM}$. Cả hai đều đúng."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q4",
  "question": "Điều kiện cần và đủ để ba điểm phân biệt $A, B, C$ thẳng hàng là:",
  "options": [
    "$\\vec{AB} = \\vec{AC}$",
    "Tồn tại số $k \\ne 0$ sao cho $\\vec{AB} = k\\vec{AC}$",
    "$|\\vec{AB}| = |\\vec{AC}|$",
    "$\\vec{AB} + \\vec{AC} = \\vec{0}$"
  ],
  "answer": 1,
  "explanation": "Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương, tức là tồn tại $k \\ne 0$ để $\\vec{AB} = k\\vec{AC}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q5",
  "question": "Cho tam giác $ABC$. Gọi $M$ là điểm trên cạnh $BC$ sao cho $BM = 2MC$. Biểu diễn vectơ $\\vec{AM}$ theo $\\vec{AB}$ và $\\vec{AC}$ là:",
  "options": [
    "$\\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$",
    "$\\vec{AM} = \\frac{2}{3}\\vec{AB} + \\frac{1}{3}\\vec{AC}$",
    "$\\vec{AM} = \\frac{1}{2}\\vec{AB} + \\frac{1}{2}\\vec{AC}$",
    "$\\vec{AM} = 2\\vec{AB} + \\vec{AC}$"
  ],
  "answer": 0,
  "explanation": "Ta có $\\vec{BM} = \\frac{2}{3}\\vec{BC} = \\frac{2}{3}(\\vec{AC} - \\vec{AB})$. Do đó $\\vec{AM} = \\vec{AB} + \\vec{BM} = \\vec{AB} + \\frac{2}{3}\\vec{AC} - \\frac{2}{3}\\vec{AB} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q6",
  "question": "Rút gọn biểu thức vectơ $\\vec{P} = 3(\\vec{a} - 2\\vec{b}) + 2(3\\vec{b} - \\vec{a})$ ta được:",
  "options": [
    "$\\vec{a}$",
    "$\\vec{a} - 12\\vec{b}$",
    "$\\vec{0}$",
    "$5\\vec{a}$"
  ],
  "answer": 0,
  "explanation": "Khai triển: $\\vec{P} = 3\\vec{a} - 6\\vec{b} + 6\\vec{b} - 2\\vec{a} = (3 - 2)\\vec{a} + (-6 + 6)\\vec{b} = \\vec{a}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q7",
  "question": "Cho hình bình hành $ABCD$. Điểm $M$ thỏa mãn $\\vec{AM} = \\vec{AB} + 2\\vec{AD}$. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "$M$ là trung điểm của $CD$",
    "$D$ là trung điểm của $AM$",
    "$\\vec{AM} = \\vec{AC} + \\vec{AD}$",
    "$M$ trùng với đỉnh $C$"
  ],
  "answer": 2,
  "explanation": "Ta tách $2\\vec{AD} = \\vec{AD} + \\vec{AD}$. Khi đó $\\vec{AM} = (\\vec{AB} + \\vec{AD}) + \\vec{AD}$. Vì $ABCD$ là hình bình hành nên $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Suy ra $\\vec{AM} = \\vec{AC} + \\vec{AD}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q8",
  "question": "Cho tam giác $ABC$. Có bao nhiêu cặp số thực $(m; n)$ thỏa mãn $\\vec{BC} = m\\vec{AB} + n\\vec{AC}$?",
  "options": [
    "Vô số",
    "Không có",
    "Duy nhất 1 cặp",
    "2 cặp"
  ],
  "answer": 2,
  "explanation": "Vì $\\vec{AB}$ và $\\vec{AC}$ là hai vectơ không cùng phương nên theo định lí phân tích vectơ, luôn tồn tại DUY NHẤT một cặp số thực $(m; n)$. Cụ thể $\\vec{BC} = \\vec{AC} - \\vec{AB} = -1\\vec{AB} + 1\\vec{AC}$, tức $(m; n) = (-1; 1)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q9",
  "question": "Biết rằng $\\vec{u} = 2\\vec{a} - 3\\vec{b}$ và $\\vec{v} = -4\\vec{a} + 6\\vec{b}$ (với $\\vec{a}, \\vec{b}$ không cùng phương). Mối quan hệ giữa $\\vec{u}$ và $\\vec{v}$ là:",
  "options": [
    "$\\vec{v} = 2\\vec{u}$",
    "$\\vec{v} = -2\\vec{u}$ (ngược hướng nhau)",
    "$\\vec{u}$ và $\\vec{v}$ không cùng phương",
    "$\\vec{u} = \\vec{v}$"
  ],
  "answer": 1,
  "explanation": "Ta thấy $\\vec{v} = -4\\vec{a} + 6\\vec{b} = -2(2\\vec{a} - 3\\vec{b}) = -2\\vec{u}$. Vì hệ số $-2 < 0$, hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương và ngược hướng nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c4_b9_q10",
  "question": "Cho tam giác đều $ABC$ cạnh $a$. Độ dài của vectơ $\\vec{v} = \\frac{1}{2}\\vec{AB} + \\frac{1}{2}\\vec{AC}$ bằng:",
  "options": [
    "$a$",
    "$\\frac{a\\sqrt{3}}{2}$",
    "$\\frac{a}{2}$",
    "$a\\sqrt{3}$"
  ],
  "answer": 1,
  "explanation": "Gọi $M$ là trung điểm của $BC$. Theo tính chất trung điểm, $\\vec{AB} + \\vec{AC} = 2\\vec{AM} \\Rightarrow \\frac{1}{2}(\\vec{AB} + \\vec{AC}) = \\vec{AM}$. Độ dài của $\\vec{v}$ chính là độ dài đường cao của tam giác đều: $AM = \\frac{a\\sqrt{3}}{2}$."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Phân tích vectơ và tỉ số thẳng hàng)
Cho hình bình hành $ABCD$. Gọi $M$ là trung điểm cạnh $BC$, và $N$ là điểm trên cạnh $CD$ sao cho $CD = 3CN$.
1. Phân tích các vectơ $\vec{AM}$ và $\vec{AN}$ theo hai vectơ cơ sở $\vec{AB}$ và $\vec{AD}$.
2. Gọi $G$ là trọng tâm của tam giác $AMN$. Hãy phân tích $\vec{AG}$ theo $\vec{AB}$ và $\vec{AD}$.

*Hướng dẫn giải:*
1. Phân tích $\vec{AM}$ và $\vec{AN}$:
   - Vì $M$ là trung điểm $BC$ nên $\vec{BM} = \frac{1}{2}\vec{BC} = \frac{1}{2}\vec{AD}$.  
     Do đó: $\vec{AM} = \vec{AB} + \vec{BM} = \vec{AB} + \frac{1}{2}\vec{AD}$.
   - Vì $N \in CD$ và $CD = 3CN \Rightarrow DN = \frac{2}{3}DC = \frac{2}{3}AB \Rightarrow \vec{DN} = \frac{2}{3}\vec{AB}$.  
     Do đó: $\vec{AN} = \vec{AD} + \vec{DN} = \frac{2}{3}\vec{AB} + \vec{AD}$.
2. Vì $G$ là trọng tâm của tam giác $AMN$ nên:
   $$\vec{AG} = \frac{1}{3}(\vec{AA} + \vec{AM} + \vec{AN}) = \frac{1}{3}\left(\vec{AB} + \frac{1}{2}\vec{AD} + \frac{2}{3}\vec{AB} + \vec{AD}\right)$$
   $$\vec{AG} = \frac{1}{3}\left(\frac{5}{3}\vec{AB} + \frac{3}{2}\vec{AD}\right) = \frac{5}{9}\vec{AB} + \frac{1}{2}\vec{AD}$$

---

### Bài tập 2 (Vật lý - Tâm khối và phân bổ tải trọng)
Một thanh dầm thép xây dựng $AB$ có chiều dài $L = 6$ m được đặt nằm ngang. Người ta đặt hai khối bê tông chịu tải: khối thứ nhất khối lượng $m_1 = 300$ kg tại điểm $A$, khối thứ hai khối lượng $m_2 = 600$ kg tại điểm $B$.
1. Theo nguyên lí đòn bẩy và định nghĩa tâm khối (Center of Mass) $C$, vị trí điểm đặt giá đỡ cân bằng $C$ thỏa mãn hệ thức vectơ:
   $$m_1 \vec{CA} + m_2 \vec{CB} = \vec{0}$$
   Hãy biểu diễn vectơ $\vec{AC}$ theo vectơ $\vec{AB}$ và tính khoảng cách từ đầu $A$ đến điểm cân bằng $C$.
2. Nếu đặt thêm một tải trọng thứ ba $m_3 = 300$ kg tại trung điểm $M$ của thanh $AB$, hãy xác định vị trí tâm khối mới $G$ của hệ ba vật nặng.

*Hướng dẫn giải:*
1. Thay số: $300\vec{CA} + 600\vec{CB} = \vec{0} \iff \vec{CA} + 2\vec{CB} = \vec{0}$.  
   Chèn điểm $A$ vào $\vec{CB}$: $\vec{CA} + 2(\vec{CA} + \vec{AB}) = \vec{0} \iff 3\vec{CA} + 2\vec{AB} = \vec{0} \iff 3\vec{AC} = 2\vec{AB} \iff \vec{AC} = \frac{2}{3}\vec{AB}$.  
   Khoảng cách từ $A$ đến $C$ là:
   $$AC = \frac{2}{3}AB = \frac{2}{3} \times 6 = 4 \text{ (m)}$$
2. Khi có thêm tải trọng $m_3$ tại $M$, vị trí tâm khối mới $G$ thỏa mãn:
   $$300\vec{GA} + 600\vec{GB} + 300\vec{GM} = \vec{0} \iff \vec{GA} + 2\vec{GB} + \vec{GM} = \vec{0}$$
   Chèn điểm $A$:
   $$\vec{GA} + 2(\vec{GA} + \vec{AB}) + (\vec{GA} + \vec{AM}) = \vec{0} \iff 4\vec{GA} + 2\vec{AB} + \vec{AM} = \vec{0}$$
   Vì $M$ là trung điểm của $AB$ nên $\vec{AM} = \frac{1}{2}\vec{AB}$.  
   Thay vào: $4\vec{GA} + 2\vec{AB} + \frac{1}{2}\vec{AB} = \vec{0} \iff 4\vec{AG} = \frac{5}{2}\vec{AB} \iff \vec{AG} = \frac{5}{8}\vec{AB}$.  
   Khoảng cách từ đầu $A$ đến tâm khối mới là:
   $$AG = \frac{5}{8} \times 6 = 3,75 \text{ (m)}$$
