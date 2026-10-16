---
title: 'Toán 9 Bài 6: Bất phương trình bậc nhất một ẩn - Quy tắc Biến đổi, Biểu diễn Trục số & Ứng dụng Thực tế'
description: 'Lý thuyết toàn diện và bài tập Bài 6 Toán 9: Định nghĩa bất phương trình bậc nhất một ẩn, hai quy tắc biến đổi (chuyển vế & nhân số), kỹ thuật biểu diễn tập nghiệm trên trục số, widget vẽ trục số tương tác và 10 quiz trắc nghiệm kèm lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Bất phương trình bậc nhất một ẩn
  - Biểu diễn trục số
  - Quy tắc chuyển vế
  - Kết nối tri thức
grade: 9
---

# Bài 6. Bất phương trình bậc nhất một ẩn

Trong đời sống cũng như trong khoa học - kỹ thuật, chúng ta thường xuyên đối mặt với các bài toán tìm phạm vi giá trị thỏa mãn một điều kiện an toàn hoặc ngân sách:
- Cần đạt điểm tổng kết tối thiểu bao nhiêu để đạt học lực Xuất sắc?
- Một chuyến xe tải chở tối đa bao nhiêu thùng hàng để không vượt quá tải trọng của cây cầu?
- Doanh nghiệp phải bán tối thiểu bao nhiêu sản phẩm để bắt đầu có lãi?

Tất cả các câu hỏi trên đều dẫn đến việc thiết lập và giải một **Bất phương trình bậc nhất một ẩn**.

Trong bài học này, các em sẽ nắm vững định nghĩa, thành thạo hai quy tắc biến đổi tương đương cốt lõi, biết cách biểu diễn tập nghiệm trực quan trên trục số và ứng dụng giải các bài toán thực tiễn phong phú!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">QUY TRÌNH GIẢI BẤT PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Dạng chuẩn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $ax + b < 0$ (hoặc $> 0, \le 0, \ge 0$).<br>• Trong đó $a, b$ là hai số đã cho và $a \ne 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Quy tắc chuyển vế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chuyển một hạng tử sang vế kia và <strong>đổi dấu</strong> hạng tử đó:<br>• $ax + b > 0 \iff ax > -b$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
      <h4 style="margin: 0 0 8px 0; color: #b91c1c;">3. Quy tắc nhân với số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Nếu $a > 0$:</strong> Chia cho $a$ giữ nguyên chiều.<br>• <strong>Nếu $a < 0$:</strong> Chia cho $a$ <strong>BẮT BUỘC ĐỔI CHIỀU</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biểu diễn trên trục số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dấu $<, >$: Dùng ngoặc tròn $($ hoặc $)$.<br>• Dấu $\le, \ge$: Dùng ngoặc vuông $[$ hoặc $]$.<br>• Gạch bỏ phần không thuộc tập nghiệm.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Bất phương trình $2x - 6 \le 0$ có phải là bất phương trình bậc nhất một ẩn không?
2. **Kiểm tra nghiệm:** Số $x = 3$ có phải là nghiệm của bất phương trình $3x - 5 > 2$ không?
3. **Quy tắc chuyển vế:** Chuyển hạng tử $-4$ từ vế trái sang vế phải trong $2x - 4 < 0$ ta được gì?
4. **Quy tắc nhân số âm:** Nghiệm của bất phương trình $-2x < 8$ là gì?
5. **Ký hiệu trục số:** Khi biểu diễn tập nghiệm $x \ge 4$ trên trục số, ta dùng ngoặc tròn hay ngoặc vuông tại điểm $4$?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Phải, vì có dạng $ax + b \le 0$ với $a = 2 \ne 0$ và $b = -6$.
> 2. Có, vì $3(3) - 5 = 4 > 2$ (đúng).
> 3. $2x < 4$.
> 4. $x > -4$ (chia cả hai vế cho $-2 < 0$ nên phải **đổi chiều** từ $<$ thành $>$).
> 5. Dùng **ngoặc vuông $[$** quay bề lõm về phía chiều lớn hơn (bên phải).

---

## I. Lý thuyết Trọng tâm

### 1. Định nghĩa Bất phương trình bậc nhất một ẩn

> [!NOTE]
> **Định nghĩa:**
> Bất phương trình dạng:
> $$ax + b < 0 \quad (\text{hoặc } ax + b > 0; \ ax + b \le 0; \ ax + b \ge 0)$$
> trong đó $a$ và $b$ là hai số đã cho, **$a \ne 0$**, được gọi là **bất phương trình bậc nhất một ẩn**.

*Ví dụ:* 
- $3x - 5 > 0$ là bất phương trình bậc nhất ẩn $x$ (với $a = 3, b = -5$).
- $-2y + 7 \le 0$ là bất phương trình bậc nhất ẩn $y$ (với $a = -2, b = 7$).
- $0x + 4 > 0$ **không phải** là bất phương trình bậc nhất vì $a = 0$.
- $x^2 - 1 \ge 0$ **không phải** là bất phương trình bậc nhất vì ẩn $x$ có bậc 2.

---

### 2. Hai Quy tắc Biến đổi Tương đương

#### a) Quy tắc chuyển vế
Khi chuyển một hạng tử của bất phương trình từ vế này sang vế kia, ta phải **đổi dấu** của hạng tử đó:
$$ax + b > 0 \iff ax > -b$$

#### b) Quy tắc nhân với một số
- Khi nhân (hoặc chia) cả hai vế của bất phương trình với cùng một số **dương**, ta giữ nguyên chiều bất phương trình:
$$\text{Với } a > 0: \quad ax > b \iff x > \frac{b}{a}$$

- Khi nhân (hoặc chia) cả hai vế của bất phương trình với cùng một số **âm**, ta **đổi chiều** bất phương trình:
$$\text{Với } a < 0: \quad ax > b \iff x < \frac{b}{a}$$

> [!CAUTION]
> Luôn luôn kiểm tra dấu của hệ số gắn với biến trước khi chia:
> $$-5x \ge 15 \implies x \le \frac{15}{-5} = -3 \quad (\text{Chiều } \ge \text{ đảo thành } \le)$$

---

### 3. Kỹ thuật Biểu diễn Tập nghiệm trên Trục số

Để biểu diễn tập nghiệm của một bất phương trình trên trục số, ta thực hiện:
1. Xác định điểm giới hạn $x_0$ trên trục số.
2. Vẽ dấu ngoặc tại điểm $x_0$:
   - Dùng ngoặc tròn `(` hoặc `)` nếu là bất đẳng thức nghiêm ngặt ($<, >$).
   - Dùng ngoặc vuông `[` hoặc `]` nếu có dấu bằng ($\le, \ge$).
3. Bề lõm của ngoặc hướng về phía tập nghiệm được chọn.
4. Gạch bỏ phần trục số không thuộc tập nghiệm.

| Bất phương trình | Tập nghiệm $S$ | Cách biểu diễn trên trục số |
| :---: | :---: | :--- |
| $x > a$ | $\{x \mid x > a\}$ | Đặt `(` tại $a$ hướng sang phải; gạch bỏ phần bên trái điểm $a$. |
| $x \ge a$ | $\{x \mid x \ge a\}$ | Đặt `[` tại $a$ hướng sang phải; gạch bỏ phần bên trái điểm $a$. |
| $x < a$ | $\{x \mid x < a\}$ | Đặt `)` tại $a$ hướng sang trái; gạch bỏ phần bên phải điểm $a$. |
| $x \le a$ | $\{x \mid x \le a\}$ | Đặt `]` tại $a$ hướng sang trái; gạch bỏ phần bên phải điểm $a$. |

---

## II. Widget Tương tác: Giải & Biểu diễn Bất Phương Trình trên Trục Số Động

Nhập các hệ số $a, b, c$ và chọn dấu bất đẳng thức để theo dõi các bước giải tự động và quan sát trực quan trục số được vẽ trực tiếp!

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG GIẢI VÀ BIỂU DIỄN TRỤC SỐ $ax + b \text{ [dấu] } c$</h4>
  
  <div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
    <input type="number" id="inp-a" value="-2" style="width: 55px; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: bold; text-align: center;">
    <span>&times; x + </span>
    <input type="number" id="inp-b" value="6" style="width: 55px; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: bold; text-align: center;">
    <select id="inp-sign" style="padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: bold;">
      <option value=">">&gt;</option>
      <option value=">=" selected>&ge;</option>
      <option value="<">&lt;</option>
      <option value="<=">&le;</option>
    </select>
    <input type="number" id="inp-c" value="0" style="width: 55px; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: bold; text-align: center;">
    <button id="btn-solve-ineq" style="background: #2563eb; color: white; border: none; padding: 6px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">Giải BPT</button>
  </div>

  <div id="steps-output" style="background: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-family: monospace; font-size: 1.05em; line-height: 1.7;">
    <!-- Step by step text -->
  </div>

  <div style="display: flex; flex-direction: column; align-items: center;">
    <svg id="numline-svg" width="360" height="100" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
      <!-- Number line rendered dynamically -->
    </svg>
  </div>
</div>

<script>
(function() {
  function solveAndDraw() {
    let a = parseFloat(document.getElementById('inp-a').value) || 0;
    let b = parseFloat(document.getElementById('inp-b').value) || 0;
    let c = parseFloat(document.getElementById('inp-c').value) || 0;
    let sign = document.getElementById('inp-sign').value;

    const steps = document.getElementById('steps-output');
    const svg = document.getElementById('numline-svg');

    if (a === 0) {
      steps.innerHTML = `<span style="color: #dc2626;">Lỗi: Hệ số a phải khác 0 đối với bất phương trình bậc nhất!</span>`;
      svg.innerHTML = '';
      return;
    }

    // Step 1: ax [sign] c - b
    let rhs1 = c - b;
    let finalSign = sign;
    let flipped = false;

    if (a < 0) {
      flipped = true;
      if (sign === '>') finalSign = '<';
      else if (sign === '>=') finalSign = '<=';
      else if (sign === '<') finalSign = '>';
      else if (sign === '<=') finalSign = '>=';
    }

    let root = rhs1 / a;

    let signHtml = sign === '>=' ? '&ge;' : (sign === '<=' ? '&le;' : (sign === '>' ? '&gt;' : '&lt;'));
    let finalSignHtml = finalSign === '>=' ? '&ge;' : (finalSign === '<=' ? '&le;' : (finalSign === '>' ? '&gt;' : '&lt;'));

    let flipNote = flipped ? `<br><span style="color: #b91c1c; font-weight: bold;">&rarr; Vì chia cho số âm a = ${a} nên BPT BẮT BUỘC ĐỔI CHIỀU!</span>` : '';

    steps.innerHTML = `
      <strong>B1 (Chuyển vế):</strong> ${a}x ${signHtml} ${c} - (${b}) &iff; ${a}x ${signHtml} ${rhs1}<br>
      <strong>B2 (Chia cho ${a}):</strong> ${flipNote}<br>
      <strong>Kết quả:</strong> <span style="color: #047857; font-size: 1.1em; font-weight: bold;">x ${finalSignHtml} ${root.toFixed(2)}</span>
    `;

    // Draw SVG Number line
    const width = 360;
    const height = 100;
    const midY = 50;
    const midX = width / 2;

    let bracketChar = '';
    let isGreater = finalSign.startsWith('>');
    let isInclude = finalSign.includes('=');

    if (isGreater) {
      bracketChar = isInclude ? '[' : '(';
    } else {
      bracketChar = isInclude ? ']' : ')';
    }

    let svgHtml = `
      <!-- Axis line -->
      <line x1="20" y1="${midY}" x2="340" y2="${midY}" stroke="#334155" stroke-width="2"/>
      <!-- Arrow -->
      <polygon points="340,${midY} 330,${midY - 5} 330,${midY + 5}" fill="#334155"/>
    `;

    // Shading/Hatching the discarded region
    if (isGreater) {
      // Discard left of midX
      svgHtml += `<rect x="20" y="${midY - 15}" width="${midX - 20}" height="30" fill="#cbd5e1" opacity="0.6"/>`;
      // Draw hatching lines
      for (let x = 25; x < midX; x += 10) {
        svgHtml += `<line x1="${x}" y1="${midY - 15}" x2="${x + 8}" y2="${midY + 15}" stroke="#94a3b8" stroke-width="1.5"/>`;
      }
    } else {
      // Discard right of midX
      svgHtml += `<rect x="${midX}" y="${midY - 15}" width="${330 - midX}" height="30" fill="#cbd5e1" opacity="0.6"/>`;
      for (let x = midX + 5; x < 330; x += 10) {
        svgHtml += `<line x1="${x}" y1="${midY - 15}" x2="${x + 8}" y2="${midY + 15}" stroke="#94a3b8" stroke-width="1.5"/>`;
      }
    }

    // Bracket symbol & root label
    svgHtml += `<text x="${midX}" y="${midY + 8}" font-size="24" font-weight="bold" fill="#2563eb" text-anchor="middle">${bracketChar}</text>`;
    svgHtml += `<text x="${midX}" y="${midY + 32}" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">${root.toFixed(2)}</text>`;

    svg.innerHTML = svgHtml;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-solve-ineq');
    if (btn) btn.addEventListener('click', solveAndDraw);
    solveAndDraw();
  });
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Giải bất phương trình bậc nhất một ẩn cơ bản

**Phương pháp giải:**
1. Áp dụng quy tắc chuyển vế: Chuyển các hạng tử chứa ẩn sang vế trái, các hằng số sang vế phải.
2. Thu gọn hai vế về dạng $ax < b$ (hoặc $> b, \le b, \ge b$).
3. Chia cả hai vế cho $a$:
   - Nếu $a > 0$: Giữ nguyên chiều.
   - Nếu $a < 0$: Đổi chiều.
4. Kết luận tập nghiệm và biểu diễn trên trục số.

---

#### Bài toán 1:
Giải các bất phương trình sau và biểu diễn tập nghiệm trên trục số:
a) $3x - 12 > 0$.
b) $5 - 2x \ge 11$.
c) $4x - 7 < 7x + 8$.

**Lời giải:**

a) Ta có:
$$3x - 12 > 0 \iff 3x > 12 \iff x > \frac{12}{3} \iff x > 4$$
Tập nghiệm của bất phương trình là $S = \{x \mid x > 4\}$.
*Biểu diễn trục số:* Đặt ngoặc `(` tại điểm $4$ hướng sang phải, gạch bỏ toàn bộ phần bên trái số $4$.

b) Ta có:
$$5 - 2x \ge 11 \iff -2x \ge 11 - 5 \iff -2x \ge 6$$
Vì chia cho số âm $-2 < 0$ nên bất phương trình đổi chiều:
$$x \le \frac{6}{-2} \iff x \le -3$$
Tập nghiệm của bất phương trình là $S = \{x \mid x \le -3\}$.
*Biểu diễn trục số:* Đặt ngoặc `]` tại điểm $-3$ hướng sang trái, gạch bỏ toàn bộ phần bên phải số $-3$.

c) Chuyển các hạng tử chứa $x$ sang vế trái, hằng số sang vế phải:
$$4x - 7 < 7x + 8 \iff 4x - 7x < 8 + 7 \iff -3x < 15$$
Chia cả hai vế cho $-3 < 0$ (đổi chiều):
$$x > \frac{15}{-3} \iff x > -5$$
Vậy tập nghiệm của bất phương trình là $S = \{x \mid x > -5\}$.

---

### Dạng 2: Giải bất phương trình quy về bậc nhất (chứa dấu ngoặc và mẫu số)

**Phương pháp giải:**
1. Khai triển các dấu ngoặc (hoặc quy đồng mẫu số chung nếu có mẫu là các hằng số dương).
2. Chuyển vế, thu gọn về dạng $ax > b$ hoặc $ax < b$.
3. Chia cho hệ số $a$ (chú ý đổi chiều nếu $a < 0$).

---

#### Bài toán 2:
Giải các bất phương trình sau:
a) $2(x - 3) - 3(x + 1) \le 4x - 5$.
b) $\frac{2x - 1}{3} - \frac{x - 2}{4} > \frac{x + 3}{6}$.

**Lời giải:**

a) Khai triển dấu ngoặc:
$$2x - 6 - 3x - 3 \le 4x - 5 \iff -x - 9 \le 4x - 5$$
Chuyển vế:
$$-x - 4x \le -5 + 9 \iff -5x \le 4$$
Chia cho $-5 < 0$ (đổi chiều):
$$x \ge -\frac{4}{5}$$
Vậy tập nghiệm là $S = \left\{x \mathrel{}\middle|\mathrel{} x \ge -\frac{4}{5}\right\}$.

b) Mẫu số chung của $3, 4, 6$ là $12 > 0$.
Quy đồng mẫu số cả hai vế:
$$\frac{4(2x - 1)}{12} - \frac{3(x - 2)}{12} > \frac{2(x + 3)}{12}$$
Vì mẫu số $12 > 0$ nên khi khử mẫu ta **giữ nguyên chiều**:
$$4(2x - 1) - 3(x - 2) > 2(x + 3)$$
Khai triển:
$$8x - 4 - 3x + 6 > 2x + 6 \iff 5x + 2 > 2x + 6$$
Chuyển vế:
$$5x - 2x > 6 - 2 \iff 3x > 4 \iff x > \frac{4}{3}$$
Vậy tập nghiệm của bất phương trình là $S = \left\{x \mathrel{}\middle|\mathrel{} x > \frac{4}{3}\right\}$.

---

### Dạng 3: Bất phương trình chứa tham số $m$

#### Bài toán 3:
Cho bất phương trình ẩn $x$:
$$(m^2 - 4)x + m - 2 \ge 0$$
a) Giải bất phương trình khi $m = 3$.
b) Tìm $m$ để bất phương trình nghiệm đúng với mọi $x \in \mathbb{R}$.

**Lời giải:**

Bất phương trình tương đương:
$$(m^2 - 4)x \ge 2 - m \quad (*)$$

a) Khi $m = 3$:
$$(3^2 - 4)x \ge 2 - 3 \iff 5x \ge -1 \iff x \ge -\frac{1}{5}$$
Vậy khi $m = 3$, tập nghiệm là $S = \left\{x \mathrel{}\middle|\mathrel{} x \ge -\frac{1}{5}\right\}$.

b) Để phương trình $(*)$ nghiệm đúng với mọi $x \in \mathbb{R}$, ta phải có:
$$\begin{cases} m^2 - 4 = 0 \\ 2 - m \le 0 \end{cases}$$
- $m^2 - 4 = 0 \iff m = 2$ hoặc $m = -2$.
- $2 - m \le 0 \iff m \ge 2$.
Kết hợp lại ta được $m = 2$.
*Thử lại:* Khi $m = 2$, $(*)$ trở thành $0x \ge 0$, luôn đúng với mọi $x \in \mathbb{R}$.
Vậy $m = 2$ là giá trị cần tìm.

---

### Dạng 4: Ứng dụng lập bất phương trình giải bài toán thực tế

#### Bài toán 4:
Một hãng taxi áp dụng biểu giá cước như sau:
- Giá mở cửa cho $1\text{ km}$ đầu tiên là $15\ 000\text{ đồng}$.
- Từ kilômét thứ hai trở đi, mỗi kilômét tiếp theo có giá cước là $12\ 000\text{ đồng}$.
Bạn An có trong ví đúng $100\ 000\text{ đồng}$. Hỏi bạn An có thể đi taxi của hãng đó được quãng đường tối đa là bao nhiêu kilômét (làm tròn đến hàng phần mười)?

**Lời giải:**

- Gọi quãng đường bạn An đi taxi là $x\text{ (km, } x > 1\text{)}$.
- Quãng đường từ kilômét thứ hai trở đi là $x - 1\text{ (km)}$.
- Số tiền phải trả cho quãng đường này là:
$$T = 15\ 000 + 12\ 000(x - 1)\text{ (đồng)}$$
- Vì bạn An chỉ có tối đa $100\ 000\text{ đồng}$ nên số tiền đi taxi phải thỏa mãn bất phương trình:
$$15\ 000 + 12\ 000(x - 1) \le 100\ 000$$
Chia cả hai vế cho $1\ 000$:
$$15 + 12(x - 1) \le 100 \iff 15 + 12x - 12 \le 100$$
$$\iff 12x + 3 \le 100 \iff 12x \le 97 \iff x \le \frac{97}{12} \approx 8,08\text{ km}$$

**Kết luận:** Bạn An có thể đi được quãng đường tối đa khoảng $8,0\text{ km}$ để không bị thiếu tiền.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Phân Tích Điểm Hòa Vốn Doanh Nghiệp (Break-Even Point)
Mọi startup công nghệ trước khi ra mắt sản phẩm đều phải giải bài toán bất phương trình lợi nhuận:
$$\text{Lợi nhuận} = \text{Doanh thu} - \text{Chi phí} \ge 0$$
$$\iff P \cdot x - (F + V \cdot x) \ge 0 \iff (P - V)x \ge F$$
Trong đó $F$ là định phí (tiền thuê văn phòng, lương cứng), $V$ là biến phí mỗi sản phẩm và $P$ là giá bán. Bất phương trình này chỉ ra số lượng sản phẩm tối thiểu $x$ mà công ty phải bán để bắt đầu sinh lời.

---

### Chuyên đề 2: Tải Trọng Cầu Cảng & An Toàn Logistics
Khi một đoàn xe container xếp hàng lên phà hoặc cầu vượt, hệ thống cảm biến cân tự động tại trạm thu phí kiểm tra bất phương trình tổng tải trọng:
$$W_{\text{xe}} + \sum_{i=1}^n w_i \le W_{\text{max}}$$
Nếu bất phương trình này bị vi phạm (dù chỉ $1\%$), rào chắn tự động sẽ hạ xuống để ngăn chặn nguy cơ gãy sập kết cấu hạ tầng giao thông.

---

### Chuyên đề 3: Cửa Sổ Trị Liệu trong Dược Lý Lâm Sàng (Therapeutic Window)
Trong y học, nồng độ của kháng sinh hoặc thuốc trợ tim trong huyết tương của bệnh nhân phải nằm trong một khoảng nghiêm ngặt biểu diễn bằng hệ bất phương trình:
$$C_{\text{toi thieu}} \le C(t) \le C_{\text{ngo doc}}$$
Nếu nồng độ thấp hơn ngưỡng tối thiểu, thuốc không có tác dụng diệt khuẩn; nếu vượt quá ngưỡng ngộ độc, thuốc sẽ gây suy gan thận cấp tính. Bác sĩ dùng bất phương trình để tính toán chính xác khoảng thời gian giữa hai lần uống thuốc.

---

### Chuyên đề 4: Tự Động Hóa Nhiệt Độ Data Center
Các trung tâm dữ liệu khổng lồ (chứa hàng triệu máy chủ AI) sử dụng hệ thống điều hòa thông minh được lập trình bằng bất phương trình:
$$20^\circ\text{C} \le T_{\text{server}} \le 25^\circ\text{C}$$
Khi nhiệt độ $T > 25^\circ\text{C}$, hệ thống làm mát bằng chất lỏng tuần hoàn sẽ tự động nâng công suất bơm để tản nhiệt tức thì.

---

### Chuyên đề 5: Chịu Tải Gió Động của Tuabin Điện Gió Ngoài Khơi
Các cánh quạt tuabin gió khổng lồ ở vùng biển Bạc Liêu hay Bình Thuận có hệ thống phanh thủy lực tự động kích hoạt khi tốc độ gió $v$ thỏa mãn:
$$v \ge 25\text{ m/s (khoảng cấp 10)}$$
Bất phương trình này giúp xoay cánh quạt song song với hướng gió để triệt tiêu lực cản, bảo vệ động cơ máy phát hàng triệu USD khỏi bị bão phá hủy.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Bất phương trình bậc nhất một ẩn (Toán 9 Bài 6)",
  "questions": [
    {
      "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
      "options": [
        "2x - 5 > 0",
        "0x + 3 <= 0",
        "x^2 - 4 >= 0",
        "2x - y < 1"
      ],
      "answer": 0,
      "hint": "Dạng chuẩn ax + b > 0 với a khác 0.",
      "explanation": "$2x - 5 > 0$ có dạng $ax + b > 0$ với $a = 2 \\ne 0$, là bất phương trình bậc nhất một ẩn."
    },
    {
      "question": "Nghiệm của bất phương trình 3x - 9 > 0 là:",
      "options": [
        "x > 3",
        "x < 3",
        "x > -3",
        "x >= 3"
      ],
      "answer": 0,
      "hint": "3x > 9 => x > 9/3 = 3.",
      "explanation": "$3x - 9 > 0 \\iff 3x > 9 \\iff x > 3$."
    },
    {
      "question": "Nghiệm của bất phương trình -4x <= 12 là:",
      "options": [
        "x >= -3",
        "x <= -3",
        "x >= 3",
        "x <= 3"
      ],
      "answer": 0,
      "hint": "Chia cho số âm -4 phải đổi chiều từ <= thành >=.",
      "explanation": "Chia cả hai vế cho $-4 < 0$ (đổi chiều): $x \\ge \\frac{12}{-4} = -3$."
    },
    {
      "question": "Hình vẽ trên trục số biểu diễn tập nghiệm x <= 2 gồm:",
      "options": [
        "Ngoặc vuông ] tại 2 quay sang trái, gạch bỏ bên phải",
        "Ngoặc tròn ) tại 2 quay sang trái, gạch bỏ bên phải",
        "Ngoặc vuông [ tại 2 quay sang phải, gạch bỏ bên trái",
        "Ngoặc tròn ( tại 2 quay sang phải, gạch bỏ bên trái"
      ],
      "answer": 0,
      "hint": "Dấu <= dùng ngoặc vuông ], chiều nhỏ hơn nằm về phía bên trái.",
      "explanation": "Vì có dấu bằng nên dùng ngoặc vuông `]`, quay bề lõm sang bên trái và gạch bỏ toàn bộ phần bên phải điểm 2."
    },
    {
      "question": "Giải bất phương trình 5x - 3 < 2x + 6. Tập nghiệm là:",
      "options": [
        "x < 3",
        "x > 3",
        "x < 1",
        "x > 1"
      ],
      "answer": 0,
      "hint": "5x - 2x < 6 + 3 => 3x < 9 => x < 3.",
      "explanation": "$5x - 2x < 6 + 3 \\iff 3x < 9 \\iff x < 3$."
    },
    {
      "question": "Số nguyên dương x lớn nhất thỏa mãn bất phương trình 4x - 7 < 5 là:",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "answer": 0,
      "hint": "4x < 12 => x < 3. Số nguyên dương lớn nhất nhỏ hơn 3 là 2.",
      "explanation": "$4x - 7 < 5 \\iff 4x < 12 \\iff x < 3$. Số nguyên dương lớn nhất thỏa mãn $x < 3$ là $x = 2$."
    },
    {
      "question": "Giải bất phương trình (x - 1)/2 - (x - 2)/3 >= 1. Tập nghiệm là:",
      "options": [
        "x >= 5",
        "x <= 5",
        "x >= 7",
        "x <= 7"
      ],
      "answer": 0,
      "hint": "Nhân cả hai vế với 6: 3(x - 1) - 2(x - 2) >= 6 => 3x - 3 - 2x + 4 >= 6 => x + 1 >= 6.",
      "explanation": "Quy đồng mẫu 6: $3(x - 1) - 2(x - 2) \\ge 6 \\iff 3x - 3 - 2x + 4 \\ge 6 \\iff x + 1 \\ge 6 \\iff x \\ge 5$."
    },
    {
      "question": "Giá trị của x thỏa mãn cả hai bất phương trình 2x - 4 > 0 và 3x - 15 <= 0 là:",
      "options": [
        "2 < x <= 5",
        "x > 2",
        "x <= 5",
        "2 <= x < 5"
      ],
      "answer": 0,
      "hint": "2x > 4 => x > 2; 3x <= 15 => x <= 5. Kết hợp lại: 2 < x <= 5.",
      "explanation": "Từ $2x - 4 > 0 \\implies x > 2$. Từ $3x - 15 \\le 0 \\implies x \\le 5$. Kết hợp: $2 < x \\le 5$."
    },
    {
      "question": "Tìm m để bất phương trình (m - 1)x + 2 > 0 là bất phương trình bậc nhất một ẩn:",
      "options": [
        "m khác 1",
        "m = 1",
        "m > 1",
        "m tùy ý"
      ],
      "answer": 0,
      "hint": "Hệ số a phải khác 0: m - 1 khác 0.",
      "explanation": "Để là bất phương trình bậc nhất một ẩn thì hệ số $a \\ne 0 \\iff m - 1 \\ne 0 \\iff m \\ne 1$."
    },
    {
      "question": "Một thang máy có tải trọng tối đa là 600 kg. Có 4 người nặng tổng cộng 260 kg đang ở trong thang máy. Người ta muốn chuyển thêm các thùng hàng, mỗi thùng nặng 25 kg. Số thùng hàng tối đa có thể xếp thêm vào thang máy là:",
      "options": [
        "13 thùng",
        "14 thùng",
        "12 thùng",
        "15 thùng"
      ],
      "answer": 0,
      "hint": "260 + 25x <= 600 => 25x <= 340 => x <= 13,6 => Tối đa 13 thùng.",
      "explanation": "Ta có: $260 + 25x \\le 600 \\iff 25x \\le 340 \\iff x \\le 13,6$. Vì số thùng hàng phải là số nguyên nên tối đa là 13 thùng."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Giải các bất phương trình và biểu diễn tập nghiệm trên trục số
a) $4x - 8 > 0$.
b) $7 - 3x \ge -2$.
c) $2(3x - 1) - 4 < 5(x + 2)$.
d) $\frac{x + 2}{4} - \frac{2x - 1}{3} \le 1$.

### Bài 2: Tìm nghiệm nguyên
a) Tìm tất cả các số nguyên dương $x$ thỏa mãn: $\frac{3x - 2}{5} < \frac{2x + 1}{3}$.
b) Tìm tất cả các số nguyên $x$ thỏa mãn đồng thời cả hai bất phương trình:
$$\begin{cases} 2x - 3 \le 5 \\ 3x + 4 > -5 \end{cases}$$

### Bài 3 (Thử thách thực tế):
Một cửa hàng kinh doanh đồ gia dụng nhập về một lô gồm $100$ chiếc nồi chiên không dầu với giá vốn $1\ 200\ 000\text{ đồng/chiếc}$. Chi phí vận chuyển và mặt bằng cho toàn bộ lô hàng là $10\ 000\ 000\text{ đồng}$. Cửa hàng dự định bán với giá niêm yết $1\ 800\ 000\text{ đồng/chiếc}$. Hỏi cửa hàng cần bán tối thiểu bao nhiêu chiếc nồi chiên để bắt đầu có lãi?
