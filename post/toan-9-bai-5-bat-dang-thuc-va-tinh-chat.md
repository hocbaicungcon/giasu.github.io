---
title: 'Toán 9 Bài 5: Bất đẳng thức và Tính chất - Quy tắc Vàng Đổi Chiều & Ứng dụng Bất đẳng thức Cô-si'
description: 'Lý thuyết toàn diện và bài tập Bài 5 Toán 9: Khái niệm bất đẳng thức, liên hệ giữa thứ tự với phép cộng và phép nhân, quy tắc đổi chiều khi nhân số âm, widget mô phỏng cân đòn tương tác và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Bất đẳng thức
  - Tính chất bất đẳng thức
  - Bất đẳng thức Cosi
  - Kết nối tri thức
grade: 9
---

# Bài 5. Bất đẳng thức và Tính chất

Trong thế giới thực, sự công bằng tuyệt đối hay các phương trình cân bằng $A = B$ chỉ là một trường hợp đặc biệt. Hầu hết các hiện tượng tự nhiên, kinh tế và kỹ thuật đều vận hành dưới dạng các mối quan hệ bất đối xứng:
- Tải trọng một cây cầu phải **nhỏ hơn** sức chịu tải tối đa của trụ bê tông.
- Tốc độ xe chạy trên cao tốc phải **nằm trong khoảng** từ tốc độ tối thiểu đến tốc độ tối đa.
- Nồng độ oxy trong cabin máy bay phải **lớn hơn hoặc bằng** ngưỡng sinh tồn của con người.

Để mô hình hóa toán học những giới hạn và ràng buộc đó, các nhà toán học sử dụng công cụ mạnh mẽ: **Bất đẳng thức**. 

Bài học này sẽ giúp các em nắm vững bản chất của bất đẳng thức, quy tắc sống còn khi cộng và nhân hai vế (đặc biệt là quy tắc **đổi chiều khi nhân với số âm**), cùng kỹ thuật ứng dụng bất đẳng thức Cô-si kinh điển để giải các bài toán tối ưu hóa!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TƯ DUY: CÁC TÍNH CHẤT BẤT ĐẲNG THỨC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Liên hệ với phép cộng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi cộng cùng một số vào cả hai vế:<br>• $a < b \implies a + c < b + c$<br>• <strong>Bất đẳng thức không đổi chiều</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Nhân với số dương ($c > 0$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi nhân cả hai vế với số dương:<br>• $a < b \implies a \cdot c < b \cdot c$<br>• <strong>Bất đẳng thức giữ nguyên chiều</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">3. Nhân với số âm ($c < 0$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi nhân cả hai vế với số âm:<br>• $a < b \implies a \cdot c > b \cdot c$<br>• <strong>Bất đẳng thức BẮT BUỘC ĐỔI CHIỀU</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tính chất bắc cầu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Nếu $a < b$ và $b < c$ thì $a < c$.<br>• Cộng từng vế cùng chiều: $a < b$ và $c < d \implies a + c < b + d$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **So sánh:** Cho $a < b$. Hãy so sánh $a + 7$ và $b + 7$.
2. **Nhân số dương:** Cho $x > y$. Hãy so sánh $4x$ và $4y$.
3. **Quy tắc đổi chiều:** Cho $m < n$. Hãy so sánh $-3m$ và $-3n$.
4. **Bắc cầu:** Nếu $u < 5$ và $5 < v$ thì mối liên hệ giữa $u$ và $v$ là gì?
5. **Dấu bằng:** Ký hiệu $a \ge b$ có nghĩa là gì?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $a + 7 < b + 7$ (cộng cùng một số, giữ nguyên chiều).
> 2. $4x > 4y$ (nhân với số dương $4 > 0$, giữ nguyên chiều).
> 3. $-3m > -3n$ (nhân với số âm $-3 < 0$, **đổi chiều** từ $<$ sang $>$).
> 4. $u < v$ (theo tính chất bắc cầu).
> 5. $a$ lớn hơn hoặc bằng $b$ ($a > b$ hoặc $a = b$).

---

## I. Lý thuyết Trọng tâm

### 1. Khái niệm Bất đẳng thức

> [!NOTE]
> **Định nghĩa:**
> Ta gọi hệ thức có dạng $a < b$ (hoặc $a > b$, $a \le b$, $a \ge b$) là một **bất đẳng thức**.
> - $a$ được gọi là **vế trái** (VT).
> - $b$ được gọi là **vế phải** (VP).
> 
> *Ví dụ:* $3 < 7$; $x - 2 \ge 0$; $a^2 + b^2 \ge 2ab$ đều là các bất đẳng thức.

---

### 2. Các Tính chất Cơ bản của Bất đẳng thức

#### a) Liên hệ giữa thứ tự và phép cộng
Khi cộng cùng một số vào cả hai vế của một bất đẳng thức, ta được bất đẳng thức mới **cùng chiều** với bất đẳng thức đã cho:
$$\text{Với mọi } a, b, c: \quad a < b \implies a + c < b + c$$
$$\text{Với mọi } a, b, c: \quad a \le b \implies a + c \le b + c$$

#### b) Liên hệ giữa thứ tự và phép nhân
- **Nhân với số dương:** Khi nhân cả hai vế của một bất đẳng thức với cùng một số **dương**, ta được bất đẳng thức mới **cùng chiều**:
$$\text{Nếu } a < b \text{ và } c > 0 \implies a \cdot c < b \cdot c$$

- **Nhân với số âm (Quy tắc vàng):** Khi nhân cả hai vế của một bất đẳng thức với cùng một số **âm**, ta được bất đẳng thức mới **ngược chiều** (đổi chiều):
$$\text{Nếu } a < b \text{ và } c < 0 \implies a \cdot c > b \cdot c$$

> [!CAUTION]
> Sai lầm kinh điển nhất của học sinh khi biến đổi bất đẳng thức là: **Quên đổi chiều khi nhân hoặc chia hai vế cho một số âm!**
> Ví dụ: $-2x < 6 \implies x > \frac{6}{-2} = -3$ (chứ không phải $x < -3$).

#### c) Tính chất bắc cầu
$$\text{Nếu } a < b \text{ và } b < c \implies a < c$$

#### d) Quy tắc cộng từng vế của hai bất đẳng thức cùng chiều
$$\text{Nếu } a < b \text{ và } c < d \implies a + c < b + d$$

---

### 3. Bất đẳng thức Cô-si (AM-GM) cho hai số không âm

Một trong những bất đẳng thức quan trọng và đẹp đẽ nhất trong toán học phổ thông là **Bất đẳng thức giữa Trung bình cộng và Trung bình nhân** (Arithmetic Mean - Geometric Mean):

> [!IMPORTANT]
> **Định lý (Bất đẳng thức Cô-si cho 2 số):**
> Với hai số không âm $a \ge 0$ và $b \ge 0$, ta luôn có:
> $$\frac{a + b}{2} \ge \sqrt{ab} \quad \text{hay} \quad a + b \ge 2\sqrt{ab}$$
> **Dấu bằng xảy ra** khi và chỉ khi $a = b$.

**Chứng minh ngắn gọn bằng biến đổi tương đương:**
Xét hiệu:
$$a + b - 2\sqrt{ab} = (\sqrt{a})^2 - 2\sqrt{a}\sqrt{b} + (\sqrt{b})^2 = (\sqrt{a} - \sqrt{b})^2$$
Vì bình phương của mọi số thực luôn không âm: $(\sqrt{a} - \sqrt{b})^2 \ge 0$ với mọi $a, b \ge 0$.
Do đó $a + b - 2\sqrt{ab} \ge 0 \iff a + b \ge 2\sqrt{ab}$.
Dấu bằng xảy ra khi $\sqrt{a} - \sqrt{b} = 0 \iff a = b$.

---

## II. Widget Tương tác: Cân Đòn Thăng Bằng & Quy Tắc Đổi Chiều

Hãy trực quan hóa bất đẳng thức $a < b$ qua hình ảnh chiếc cân đòn. Hãy thử cộng thêm khối lượng hoặc nhân hai vế với một số âm để xem chiếc cân nghiêng về phía nào!

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG CÂN ĐÒN BẤT ĐẲNG THỨC</h4>
  
  <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 16px; flex-wrap: wrap;">
    <div style="background: #eff6ff; padding: 10px 16px; border-radius: 8px;">
      <label><strong>Vế Trái (a):</strong> <input type="number" id="val-a" value="2" style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid #cbd5e1;"></label>
    </div>
    <div style="background: #fef2f2; padding: 10px 16px; border-radius: 8px;">
      <label><strong>Vế Phải (b):</strong> <input type="number" id="val-b" value="5" style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid #cbd5e1;"></label>
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
    <button id="btn-add" style="background: #10b981; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">+ Cộng 3 cả hai vế</button>
    <button id="btn-mul-pos" style="background: #3b82f6; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">&times; Nhân 2 cả hai vế</button>
    <button id="btn-mul-neg" style="background: #ef4444; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">&times; Nhân (-1) (ĐỔI CHIỀU!)</button>
    <button id="btn-reset" style="background: #64748b; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">Đặt lại (2 và 5)</button>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center;">
    <svg data-interactive-done="true" id="scale-svg" width="340" height="180" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
      <!-- Scale beam and pans rendered dynamically -->
    </svg>
    <div id="scale-status" style="margin-top: 12px; font-weight: bold; font-size: 1.1em; color: #1e3a8a; text-align: center;">
      <!-- Ineq statement -->
    </div>
  </div>
</div>

<script>
(function() {
  function updateScale() {
    let a = parseFloat(document.getElementById('val-a').value) || 0;
    let b = parseFloat(document.getElementById('val-b').value) || 0;

    const svg = document.getElementById('scale-svg');
    const status = document.getElementById('scale-status');
    const width = 340;
    const height = 180;
    const pivotX = width / 2;
    const pivotY = 130;

    // Calculate beam tilt: angle depends on (b - a)
    let diff = b - a;
    let angle = Math.max(-20, Math.min(20, diff * 3)); // degrees

    const beamLen = 180;
    const rad = (angle * Math.PI) / 180;
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);

    const xLeft = pivotX - (beamLen / 2) * cosA;
    const yLeft = (pivotY - 40) - (beamLen / 2) * sinA;
    const xRight = pivotX + (beamLen / 2) * cosA;
    const yRight = (pivotY - 40) + (beamLen / 2) * sinA;

    let svgHtml = `
      <!-- Base & Pivot -->
      <polygon points="${pivotX},${pivotY - 40} ${pivotX - 25},${pivotY + 20} ${pivotX + 25},${pivotY + 20}" fill="#94a3b8"/>
      <circle cx="${pivotX}" cy="${pivotY - 40}" r="6" fill="#475569"/>
      
      <!-- Beam -->
      <line x1="${xLeft}" y1="${yLeft}" x2="${xRight}" y2="${yRight}" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      
      <!-- Left pan -->
      <line x1="${xLeft}" y1="${yLeft}" x2="${xLeft}" y2="${yLeft + 35}" stroke="#64748b" stroke-width="2"/>
      <rect x="${xLeft - 30}" y="${yLeft + 35}" width="60" height="8" rx="4" fill="#2563eb"/>
      <text x="${xLeft}" y="${yLeft + 30}" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">a = ${a}</text>
      
      <!-- Right pan -->
      <line x1="${xRight}" y1="${yRight}" x2="${xRight}" y2="${yRight + 35}" stroke="#64748b" stroke-width="2"/>
      <rect x="${xRight - 30}" y="${yRight + 35}" width="60" height="8" rx="4" fill="#dc2626"/>
      <text x="${xRight}" y="${yRight + 30}" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">b = ${b}</text>
    `;

    svg.innerHTML = svgHtml;

    if (a < b) {
      status.innerHTML = `<span style="color: #2563eb;">a (${a})</span> &lt; <span style="color: #dc2626;">b (${b})</span> &rarr; Bên phải (b) nặng hơn, cân nghiêng xuống bên phải!`;
    } else if (a > b) {
      status.innerHTML = `<span style="color: #2563eb;">a (${a})</span> &gt; <span style="color: #dc2626;">b (${b})</span> &rarr; Bên trái (a) nặng hơn, cân nghiêng xuống bên trái!`;
    } else {
      status.innerHTML = `<span style="color: #047857;">a (${a}) = b (${b}) &rarr; Cân thăng bằng hoàn hảo!</span>`;
    }
  }

  const __initApp = function() {
    document.getElementById('val-a').addEventListener('input', updateScale);
    document.getElementById('val-b').addEventListener('input', updateScale);

    document.getElementById('btn-add').addEventListener('click', function() {
      document.getElementById('val-a').value = parseFloat(document.getElementById('val-a').value) + 3;
      document.getElementById('val-b').value = parseFloat(document.getElementById('val-b').value) + 3;
      updateScale();
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', __initApp);
    } else {
      __initApp();
    }

    document.getElementById('btn-mul-pos').addEventListener('click', function() {
      document.getElementById('val-a').value = parseFloat(document.getElementById('val-a').value) * 2;
      document.getElementById('val-b').value = parseFloat(document.getElementById('val-b').value) * 2;
      updateScale();
    });

    document.getElementById('btn-mul-neg').addEventListener('click', function() {
      document.getElementById('val-a').value = parseFloat(document.getElementById('val-a').value) * (-1);
      document.getElementById('val-b').value = parseFloat(document.getElementById('val-b').value) * (-1);
      updateScale();
    });

    document.getElementById('btn-reset').addEventListener('click', function() {
      document.getElementById('val-a').value = 2;
      document.getElementById('val-b').value = 5;
      updateScale();
    });

    updateScale();
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Sử dụng tính chất bất đẳng thức để so sánh các số và biểu thức

**Phương pháp giải:**
- Áp dụng các tính chất cộng hoặc nhân cả hai vế với một số thích hợp để đưa về biểu thức cần so sánh.
- Chú ý: Nếu nhân với số âm, nhớ đổi chiều bất đẳng thức.

---

#### Bài toán 1:
Cho $a < b$. Hãy so sánh:
a) $3a + 2$ và $3b + 2$.
b) $-5a - 4$ và $-5b - 4$.
c) $4a - 1$ và $4b + 3$.

**Lời giải:**

a) Ta có:
$$a < b \implies 3a < 3b \quad (\text{vì } 3 > 0)$$
Cộng $2$ vào cả hai vế:
$$3a + 2 < 3b + 2$$

b) Ta có:
$$a < b \implies -5a > -5b \quad (\text{vì nhân với số âm } -5 < 0 \text{ nên đổi chiều})$$
Cộng $-4$ vào cả hai vế:
$$-5a - 4 > -5b - 4$$

c) Ta có $a < b \implies 4a < 4b$ (vì $4 > 0$).
Cộng $-1$ vào cả hai vế:
$$4a - 1 < 4b - 1 \quad (1)$$
Mặt khác, rõ ràng $-1 < 3$ nên:
$$4b - 1 < 4b + 3 \quad (2)$$
Từ $(1)$ và $(2)$, theo tính chất bắc cầu:
$$4a - 1 < 4b + 3$$

---

### Dạng 2: Chứng minh bất đẳng thức bằng biến đổi tương đương (Xét hiệu)

**Phương pháp giải:**
Để chứng minh $A \ge B$, ta xét hiệu $A - B$:
1. Khai triển và thu gọn $A - B$.
2. Biến đổi $A - B$ về dạng tổng các bình phương: $[f(x)]^2 \ge 0$ hoặc tích các đại lượng không âm.
3. Kết luận $A - B \ge 0 \iff A \ge B$. Chỉ rõ điều kiện để dấu bằng xảy ra.

---

#### Bài toán 2:
Chứng minh rằng với mọi số thực $a, b$, ta luôn có:
a) $a^2 + b^2 \ge 2ab$.
b) $(a + b)^2 \ge 4ab$.
c) $a^2 + b^2 + 1 \ge ab + a + b$.

**Lời giải:**

a) Xét hiệu:
$$a^2 + b^2 - 2ab = (a - b)^2$$
Vì $(a - b)^2 \ge 0$ với mọi số thực $a, b$, nên:
$$a^2 + b^2 - 2ab \ge 0 \implies a^2 + b^2 \ge 2ab$$
Dấu bằng xảy ra khi $a - b = 0 \iff a = b$.

b) Xét hiệu:
$$(a + b)^2 - 4ab = a^2 + 2ab + b^2 - 4ab = a^2 - 2ab + b^2 = (a - b)^2 \ge 0$$
$$\implies (a + b)^2 \ge 4ab$$
Dấu bằng xảy ra khi $a = b$.

c) Nhân cả hai vế với $2$:
$$2(a^2 + b^2 + 1) \ge 2(ab + a + b) \iff 2a^2 + 2b^2 + 2 - 2ab - 2a - 2b \ge 0$$
Tách và nhóm thành các bình phương:
$$(a^2 - 2ab + b^2) + (a^2 - 2a + 1) + (b^2 - 2b + 1) \ge 0$$
$$\iff (a - b)^2 + (a - 1)^2 + (b - 1)^2 \ge 0$$
Bất đẳng thức cuối cùng luôn đúng vì tổng các bình phương luôn $\ge 0$.
Dấu bằng xảy ra khi:
$$\begin{cases} a - b = 0 \\ a - 1 = 0 \\ b - 1 = 0 \end{cases} \iff a = b = 1$$

---

### Dạng 3: Ứng dụng Bất đẳng thức Cô-si tìm Giá trị Lớn nhất và Nhỏ nhất

**Phương pháp giải:**
1. Kiểm tra điều kiện không âm ($a \ge 0, b \ge 0$).
2. Chọn điểm rơi thích hợp để tích $a \cdot b$ hoặc tổng $a + b$ là một hằng số.
3. Áp dụng $a + b \ge 2\sqrt{ab}$.
4. Kiểm tra điều kiện xảy ra dấu bằng ($a = b$).

---

#### Bài toán 3:
a) Cho $x > 0$. Tìm giá trị nhỏ nhất của biểu thức $P = x + \frac{9}{x}$.
b) Cho $a, b > 0$ thỏa mãn $a + b = 6$. Tìm giá trị lớn nhất của tích $Q = a \cdot b$.

**Lời giải:**

a) Vì $x > 0$ nên $\frac{9}{x} > 0$. Áp dụng bất đẳng thức Cô-si cho hai số dương $x$ và $\frac{9}{x}$:
$$P = x + \frac{9}{x} \ge 2\sqrt{x \cdot \frac{9}{x}} = 2\sqrt{9} = 2 \cdot 3 = 6$$
Dấu bằng xảy ra khi:
$$x = \frac{9}{x} \iff x^2 = 9 \implies x = 3\text{ (do } x > 0\text{)}$$
Vậy giá trị nhỏ nhất của $P$ là $6$, đạt được khi $x = 3$.

b) Áp dụng bất đẳng thức Cô-si cho hai số dương $a$ và $b$:
$$a + b \ge 2\sqrt{ab} \implies 6 \ge 2\sqrt{ab} \implies \sqrt{ab} \le 3 \implies ab \le 9$$
Dấu bằng xảy ra khi:
$$a = b = \frac{6}{2} = 3$$
Vậy giá trị lớn nhất của $Q = a \cdot b$ là $9$, đạt được khi $a = b = 3$.

---

### Dạng 4: Bất đẳng thức dạng phân thức cộng mẫu số (BĐT Cauchy-Schwarz dạng Engel)

#### Bài toán 4:
Cho hai số dương $a, b > 0$. Chứng minh rằng:
$$\frac{1}{a} + \frac{1}{b} \ge \frac{4}{a + b}$$

**Lời giải:**

Áp dụng bất đẳng thức Cô-si cho hai số dương:
- Với $a, b > 0$: $a + b \ge 2\sqrt{ab} \quad (1)$.
- Với $\frac{1}{a}, \frac{1}{b} > 0$: $\frac{1}{a} + \frac{1}{b} \ge 2\sqrt{\frac{1}{a} \cdot \frac{1}{b}} = \frac{2}{\sqrt{ab}} \quad (2)$.

Vì cả hai vế của $(1)$ và $(2)$ đều là các số dương, nhân từng vế của $(1)$ với $(2)$:
$$(a + b)\left(\frac{1}{a} + \frac{1}{b}\right) \ge 2\sqrt{ab} \cdot \frac{2}{\sqrt{ab}} = 4$$
Chia cả hai vế cho $(a + b) > 0$:
$$\frac{1}{a} + \frac{1}{b} \ge \frac{4}{a + b}$$
Dấu bằng xảy ra khi $a = b$.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Hệ Số An Toàn Kết Cấu Cầu Treo & Nhà Chọc Trời
Trong kỹ thuật xây dựng dân dụng: Khi thiết kế cầu treo như cầu Cần Thơ hay cầu Nhật Tân, ứng suất kéo tối đa của cáp thép $T_{\max}$ khi chịu tải trọng xe cộ và bão gió cấp 12 phải luôn thỏa mãn bất đẳng thức an toàn:
$$T_{\max} \le \frac{T_{\text{gioi han}}}{n}$$
Trong đó $n \ge 2,5$ là hệ số an toàn tối thiểu quy định bởi Luật Xây dựng quốc tế.

---

### Chuyên đề 2: Ngưỡng Tiêu Thụ Điện Năng Chip Vi Xử Lý (TDP Limit)
Mọi bộ vi xử lý máy tính (Intel Core Ultra, Apple M-Series) đều có một bất đẳng thức công suất nhiệt $P_{\text{chip}} \le \text{TDP}_{\max}$ (Thermal Design Power). Nếu nhiệt độ $T \ge 100^\circ\text{C}$, mạch cảm biến nhiệt sẽ tự động kích hoạt bất đẳng thức điều khiển xung nhịp (Thermal Throttling) để hạ tần số, bảo vệ CPU không bị cháy hỏng.

---

### Chuyên đề 3: Định Lý Giới Hạn Băng Thông Shannon trong Viễn Thông 5G
Nhà toán học Claude Shannon đã chứng minh bất đẳng thức định lượng kinh điển về dung lượng truyền thông tin tối đa $C$ (bits/giây) qua một kênh truyền có băng thông $B$ và tỉ số tín hiệu trên nhiễu $\text{SNR}$:
$$C \le B \log_2(1 + \text{SNR})$$
Bất đẳng thức này khẳng định không một thuật toán nén hay phần cứng nào có thể vượt qua giới hạn vật lý này, định hướng toàn bộ sự phát triển của công nghệ 4G, 5G và vệ tinh Starlink.

---

### Chuyên đề 4: Quản Trị Rủi Ro Danh Mục Đầu Tư Tài Chính (Value at Risk - VaR)
Các quỹ đầu tư tài chính sử dụng bất đẳng thức Chebyshev và Markov để kiểm soát xác suất thua lỗ của danh mục:
$$P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}$$
Bất đẳng thức này bảo đảm rằng rủi ro sụt giảm tài sản vượt quá ngưỡng an toàn luôn bị chặn trên bởi một tỷ lệ cực nhỏ, bảo vệ đồng vốn của nhà đầu tư trước khủng hoảng kinh tế.

---

### Chuyên đề 5: Nguyên Lý Bất Định Heisenberg trong Vật Lý Lượng Tử
Tại thang nguyên tử, Werner Heisenberg đã khám phá ra một bất đẳng thức tự nhiên vĩ đại chi phối toàn bộ cơ học lượng tử:
$$\Delta x \cdot \Delta p \ge \frac{\hbar}{2}$$
Tích của độ bất định về vị trí $\Delta x$ và độ bất định về động lượng $\Delta p$ của một hạt hạ nguyên tử (như electron) luôn lớn hơn hoặc bằng hằng số Planck rút gọn $\frac{\hbar}{2}$. Bạn càng biết chính xác vị trí của electron thì bạn càng mù tịt về vận tốc của nó!

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Bất đẳng thức và Tính chất (Toán 9 Bài 5)",
  "questions": [
    {
      "question": "Cho a < b. Khẳng định nào sau đây là ĐÚNG?",
      "options": [
        "a + 5 < b + 5",
        "a - 3 > b - 3",
        "-2a < -2b",
        "3a > 3b"
      ],
      "answer": 0,
      "hint": "Cộng cùng một số vào hai vế bất đẳng thức giữ nguyên chiều.",
      "explanation": "Khi cộng cùng số 5 vào hai vế của $a < b$, ta được $a + 5 < b + 5$ (đúng)."
    },
    {
      "question": "Cho x > y. Bất đẳng thức nào sau đây bị ĐỔI CHIỀU?",
      "options": [
        "-4x < -4y",
        "5x > 5y",
        "x + 2 > y + 2",
        "x - 7 > y - 7"
      ],
      "answer": 0,
      "hint": "Nhân với số âm sẽ làm đổi chiều bất đẳng thức.",
      "explanation": "Vì $-4 < 0$ nên khi nhân $-4$ vào hai vế của $x > y$, ta phải đổi chiều: $-4x < -4y$."
    },
    {
      "question": "Cho m <= n. So sánh -3m + 1 và -3n + 1:",
      "options": [
        "-3m + 1 >= -3n + 1",
        "-3m + 1 <= -3n + 1",
        "-3m + 1 < -3n + 1",
        "-3m + 1 > -3n + 1"
      ],
      "answer": 0,
      "hint": "Nhân (-3) đổi chiều: -3m >= -3n. Sau đó cộng 1: -3m + 1 >= -3n + 1.",
      "explanation": "Ta có $m \\le n \\implies -3m \\ge -3n$ (đổi chiều). Cộng 1 vào cả hai vế: $-3m + 1 \\ge -3n + 1$."
    },
    {
      "question": "Với hai số dương a, b, bất đẳng thức Cô-si khẳng định rằng:",
      "options": [
        "a + b >= 2*sqrt(ab)",
        "a + b <= 2*sqrt(ab)",
        "a + b >= sqrt(ab)",
        "ab >= (a + b)/2"
      ],
      "answer": 0,
      "hint": "Trung bình cộng luôn lớn hơn hoặc bằng trung bình nhân: (a + b)/2 >= sqrt(ab).",
      "explanation": "Bất đẳng thức Cô-si cho hai số không âm là: $\\frac{a + b}{2} \\ge \\sqrt{ab} \\iff a + b \\ge 2\\sqrt{ab}$."
    },
    {
      "question": "Giá trị nhỏ nhất của biểu thức P = x + 4/x với x > 0 là:",
      "options": [
        "4",
        "2",
        "8",
        "16"
      ],
      "answer": 0,
      "hint": "Áp dụng Cô-si: x + 4/x >= 2*sqrt(x * 4/x) = 2*2 = 4.",
      "explanation": "Áp dụng BĐT Cô-si cho $x > 0$ và $\\frac{4}{x} > 0$: $P = x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 2 \\cdot 2 = 4$. Dấu bằng xảy ra khi $x = 2$."
    },
    {
      "question": "Cho a < b < 0. Khẳng định nào sau đây là SAI?",
      "options": [
        "a^2 < b^2",
        "ab > 0",
        "1/a > 1/b",
        "a + b < 0"
      ],
      "answer": 0,
      "hint": "Lấy ví dụ: a = -3, b = -2. Khi đó a^2 = 9, b^2 = 4 => a^2 > b^2.",
      "explanation": "Với $a < b < 0$, ví dụ $a = -3, b = -2$. Khi đó $a^2 = 9 > b^2 = 4$. Do đó khẳng định $a^2 < b^2$ là SAI."
    },
    {
      "question": "Cho x là một số thực tùy ý. Khẳng định nào sau đây luôn ĐÚNG với mọi x?",
      "options": [
        "x^2 - 2x + 2 > 0",
        "x^2 - 2x + 1 > 0",
        "x^2 > 0",
        "x + 1 > x"
      ],
      "answer": 0,
      "hint": "x^2 - 2x + 2 = (x - 1)^2 + 1 >= 1 > 0.",
      "explanation": "Biến đổi: $x^2 - 2x + 2 = (x - 1)^2 + 1$. Vì $(x - 1)^2 \\ge 0$ nên $(x - 1)^2 + 1 \\ge 1 > 0$ với mọi $x$."
    },
    {
      "question": "Cho hai số thực a, b thỏa mãn a + b = 10. Giá trị lớn nhất của tích P = a*b là:",
      "options": [
        "25",
        "20",
        "100",
        "50"
      ],
      "answer": 0,
      "hint": "Áp dụng a*b <= [(a + b)/2]^2 = (10/2)^2 = 25.",
      "explanation": "Ta có $ab \\le \\left(\\frac{a + b}{2}\\right)^2 = \\left(\\frac{10}{2}\\right)^2 = 25$. Dấu bằng xảy ra khi $a = b = 5$."
    },
    {
      "question": "Biết a < b. So sánh 2a - 3 và 2b + 1:",
      "options": [
        "2a - 3 < 2b + 1",
        "2a - 3 > 2b + 1",
        "2a - 3 = 2b + 1",
        "Không so sánh được"
      ],
      "answer": 0,
      "hint": "2a < 2b => 2a - 3 < 2b - 3 < 2b + 1.",
      "explanation": "Vì $a < b \\implies 2a < 2b \\implies 2a - 3 < 2b - 3$. Lại có $-3 < 1 \\implies 2b - 3 < 2b + 1$. Theo tính chất bắc cầu: $2a - 3 < 2b + 1$."
    },
    {
      "question": "Cho a, b > 0. Bất đẳng thức nào sau đây luôn đúng?",
      "options": [
        "(a + b)(1/a + 1/b) >= 4",
        "(a + b)(1/a + 1/b) <= 4",
        "(a + b)(1/a + 1/b) = 2",
        "1/a + 1/b <= 2/(a + b)"
      ],
      "answer": 0,
      "hint": "(a + b)(1/a + 1/b) = 1 + a/b + b/a + 1 = 2 + (a/b + b/a) >= 2 + 2 = 4.",
      "explanation": "Khai triển: $(a + b)\\left(\\frac{1}{a} + \\frac{1}{b}\\right) = 1 + \\frac{a}{b} + \\frac{b}{a} + 1 = 2 + \\left(\\frac{a}{b} + \\frac{b}{a}\\right)$. Áp dụng Cô-si: $\\frac{a}{b} + \\frac{b}{a} \\ge 2\\sqrt{\\frac{a}{b} \\cdot \\frac{b}{a}} = 2$. Do đó biểu thức $\\ge 2 + 2 = 4$."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Sử dụng tính chất bất đẳng thức
Cho $x < y$. So sánh:
a) $2x - 5$ và $2y - 5$.
b) $-3x + 7$ và $-3y + 7$.
c) $5 - 4x$ và $5 - 4y$.
d) $3x - 2$ và $3y + 1$.

### Bài 2: Chứng minh các bất đẳng thức sau với mọi số thực
a) $a^2 + 4 \ge 4a$.
b) $x^2 + y^2 + z^2 \ge xy + yz + zx$.
c) $\frac{a^2 + b^2}{2} \ge \left(\frac{a + b}{2}\right)^2$.
d) $(a^2 + 1)(b^2 + 1) \ge (ab + 1)^2$.

### Bài 3: Ứng dụng Bất đẳng thức Cô-si
a) Cho $x > 0$. Tìm giá trị nhỏ nhất của biểu thức $A = 2x + \frac{18}{x}$.
b) Cho $x > 1$. Tìm giá trị nhỏ nhất của biểu thức $B = x + \frac{1}{x - 1}$.
*(Gợi ý: Tách $x = (x - 1) + 1$ rồi áp dụng Cô-si).*
c) Một người nông dân có $40\text{ m}$ lưới rào muốn rào một khu vườn hình chữ nhật tựa vào một bức tường đá có sẵn (chỉ cần rào $3$ cạnh: $1$ chiều dài và $2$ chiều rộng). Hỏi diện tích lớn nhất của mảnh vườn rào được là bao nhiêu mét vuông?
