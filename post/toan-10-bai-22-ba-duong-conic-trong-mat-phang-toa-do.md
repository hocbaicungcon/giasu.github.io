---
title: 'Toán 10 Bài 22: Ba đường conic trong mặt phẳng tọa độ - Elip, Hypebol, Parabol'
description: 'Khám phá định nghĩa, phương trình chính tắc, tiêu điểm, tâm sai, đường chuẩn và ứng dụng thực tiễn của ba đường conic (Elip, Hypebol, Parabol) trong Toán 10.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Phương pháp tọa độ
  - Ba đường conic
  - Elip
  - Hypebol
  - Parabol
---

# Toán 10 Bài 22: Ba đường conic trong mặt phẳng tọa độ

Ba đường conic gồm **Elip (Ellipse)**, **Hypebol (Hyperbola)** và **Parabol (Parabola)** là những đường cong phẳng kỳ diệu sinh ra khi một mặt phẳng cắt một mặt nón tròn xoay ở các góc độ khác nhau. Từ quỹ đạo chuyển động của các hành tinh trong Hệ Mặt Trời đến cấu tạo ăng-ten parabol và định vị vệ tinh, ba đường conic giữ vai trò nền tảng trong toán học ứng dụng và thiên văn học hiện đại.

---

## 1. Sơ đồ tư duy về Ba đường Conic

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #166534;">1. Đường Elip $(E)$</h4>
    <p style="margin: 0; font-size: 14px; color: #14532d;">
      • Định nghĩa: $MF_1 + MF_2 = 2a$ ($a > c > 0$)<br>
      • PTCT: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($b^2 = a^2 - c^2$)<br>
      • Tiêu điểm: $F_1(-c; 0), F_2(c; 0)$, tiêu cự $2c$<br>
      • Trục lớn $2a$, trục nhỏ $2b$, tâm sai $e = \frac{c}{a} < 1$<br>
      • Bán kính qua tiêu: $MF_1 = a + ex, MF_2 = a - ex$
    </p>
  </div>
  <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">2. Đường Hypebol $(H)$</h4>
    <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
      • Định nghĩa: $|MF_1 - MF_2| = 2a$ ($0 < a < c$)<br>
      • PTCT: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ ($b^2 = c^2 - a^2$)<br>
      • Tiêu điểm: $F_1(-c; 0), F_2(c; 0)$, tiêu cự $2c$<br>
      • Trục thực $2a$, trục ảo $2b$, tâm sai $e = \frac{c}{a} > 1$<br>
      • Hai tiệm cận xiên: $y = \pm \frac{b}{a}x$
    </p>
  </div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9a3412;">3. Đường Parabol $(P)$</h4>
    <p style="margin: 0; font-size: 14px; color: #7c2d12;">
      • Định nghĩa: $d(M, F) = d(M, \Delta)$ ($p > 0$)<br>
      • PTCT: $y^2 = 2px$ ($p > 0$: tham số tiêu)<br>
      • Tiêu điểm: $F\left(\frac{p}{2}; 0\right)$, đỉnh $O(0; 0)$<br>
      • Đường chuẩn: $\Delta: x = -\frac{p}{2}$<br>
      • Tâm sai $e = 1$, bán kính qua tiêu $MF = x + \frac{p}{2}$
    </p>
  </div>
  <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #6b21a8;">4. Tính chất tổng quát & Tâm sai</h4>
    <p style="margin: 0; font-size: 14px; color: #581c87;">
      • Định nghĩa chung: $\frac{MF}{d(M, \Delta)} = e$<br>
      • $0 < e < 1$: Đường Elip<br>
      • $e = 1$: Đường Parabol<br>
      • $e > 1$: Đường Hypebol<br>
      • Đường chuẩn tương ứng với $F(c; 0)$: $x = \frac{a}{e}$
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo tính nhanh

1. **Elip có phương trình $\frac{x^2}{25} + \frac{y^2}{9} = 1$ thì tiêu cự bằng bao nhiêu?**
   *Mẹo:* $a^2 = 25, b^2 = 9 \implies c^2 = a^2 - b^2 = 16 \implies c = 4$. Tiêu cự là $2c = 8$.

2. **Hypebol $\frac{x^2}{16} - \frac{y^2}{9} = 1$ có các đường tiệm cận là gì?**
   *Mẹo:* $a = 4, b = 3$. Phương trình tiệm cận là $y = \pm \frac{b}{a}x = \pm \frac{3}{4}x$.

3. **Parabol $y^2 = 8x$ có tiêu điểm và đường chuẩn là gì?**
   *Mẹo:* $2p = 8 \implies p = 4 \implies \frac{p}{2} = 2$. Tiêu điểm $F(2; 0)$, đường chuẩn $\Delta: x = -2$.

4. **Tâm sai của elip bằng $0$ thì đường cong trở thành hình gì?**
   *Mẹo:* Khi $e = \frac{c}{a} = 0 \implies c = 0 \implies a = b$. Elip suy biến thành **đường tròn** tâm tại gốc tọa độ bán kính $R = a$.

5. **Một đường conic có tâm sai $e = \sqrt{2} \approx 1,414$ thuộc loại nào?**
   *Mẹo:* Vì $e = \sqrt{2} > 1$ nên đây là một **hypebol** (đặc biệt là hypebol vuông).

---

## 3. Kiến thức trọng tâm

### 3.1. Đường Elip

> [!NOTE]
> Cho hai điểm cố định $F_1, F_2$ với $F_1F_2 = 2c$ ($c > 0$).
> Đường **elip** $(E)$ là tập hợp các điểm $M$ sao cho:
> $$MF_1 + MF_2 = 2a \quad (a > c > 0)$$
> - $F_1, F_2$ gọi là **tiêu điểm** của elip.
> - $F_1F_2 = 2c$ gọi là **tiêu cự**.

Phương trình chính tắc của elip:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad (a > b > 0, b^2 = a^2 - c^2)$$

Các yếu tố hình học của elip $(E)$:
- **Tọa độ các đỉnh:** $A_1(-a; 0), A_2(a; 0), B_1(0; -b), B_2(0; b)$.
- **Trục đối xứng:** Trục $Ox$ (chứa trục lớn $A_1A_2 = 2a$) và trục $Oy$ (chứa trục nhỏ $B_1B_2 = 2b$).
- **Tâm đối xứng:** Gốc tọa độ $O(0; 0)$.
- **Tâm sai:** $e = \frac{c}{a} = \frac{\sqrt{a^2 - b^2}}{a} < 1$.
- **Bán kính qua tiêu của điểm $M(x; y) \in (E)$:**
  $$MF_1 = a + ex = a + \frac{c}{a}x, \quad MF_2 = a - ex = a - \frac{c}{a}x$$

### 3.2. Đường Hypebol

> [!NOTE]
> Cho hai điểm cố định $F_1, F_2$ với $F_1F_2 = 2c$ ($c > 0$).
> Đường **hypebol** $(H)$ là tập hợp các điểm $M$ sao cho:
> $$|MF_1 - MF_2| = 2a \quad (0 < a < c)$$
> - $F_1, F_2$ gọi là **tiêu điểm** của hypebol.
> - $F_1F_2 = 2c$ gọi là **tiêu cự**.

Phương trình chính tắc của hypebol:
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad (a > 0, b > 0, b^2 = c^2 - a^2)$$

Các yếu tố hình học của hypebol $(H)$:
- **Tọa độ các đỉnh:** $A_1(-a; 0), A_2(a; 0)$.
- **Độ dài các trục:** Trục thực $A_1A_2 = 2a$, trục ảo $2b$.
- **Tâm đối xứng:** Gốc tọa độ $O(0; 0)$.
- **Tâm sai:** $e = \frac{c}{a} = \frac{\sqrt{a^2 + b^2}}{a} > 1$.
- **Hai đường tiệm cận:**
  $$y = \pm \frac{b}{a}x \iff \frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$$
- **Bán kính qua tiêu của điểm $M(x; y) \in (H)$:**
  $$MF_1 = |a + ex|, \quad MF_2 = |a - ex|$$

### 3.3. Đường Parabol

> [!NOTE]
> Cho điểm cố định $F$ và đường thẳng cố định $\Delta$ không đi qua $F$.
> Đường **parabol** $(P)$ là tập hợp các điểm $M$ cách đều $F$ và $\Delta$:
> $$d(M, F) = d(M, \Delta)$$
> - $F$ gọi là **tiêu điểm**, $\Delta$ gọi là **đường chuẩn**.
> - Khoảng cách $p = d(F, \Delta)$ gọi là **tham số tiêu** ($p > 0$).

Phương trình chính tắc của parabol:
$$y^2 = 2px \quad (p > 0)$$

Các yếu tố hình học của parabol $(P)$:
- **Tiêu điểm:** $F\left(\frac{p}{2}; 0\right)$.
- **Phương trình đường chuẩn:** $\Delta: x = -\frac{p}{2}$.
- **Đỉnh:** Gốc tọa độ $O(0; 0)$.
- **Trục đối xứng:** Trục hoành $Ox$.
- **Tâm sai:** $e = 1$.
- **Bán kính qua tiêu của điểm $M(x; y) \in (P)$:**
  $$MF = x + \frac{p}{2}$$

### 3.4. Định nghĩa chung của ba đường conic

> [!IMPORTANT]
> Cho một điểm $F$ (gọi là tiêu điểm), đường thẳng $\Delta$ không đi qua $F$ (gọi là đường chuẩn) và một số thực dương $e$ (gọi là tâm sai).
> Tập hợp các điểm $M$ thỏa mãn:
> $$\frac{MF}{d(M, \Delta)} = e$$
> là một đường conic:
> 1. Nếu $0 < e < 1$: Đường conic là một **Elip**.
> 2. Nếu $e = 1$: Đường conic là một **Parabol**.
> 3. Nếu $e > 1$: Đường conic là một **Hypebol**.

---

## 4. Widget tương tác: Conic Studio - Khám Phá Ba Đường Conic

Tương tác trực quan với các tham số của ba đường conic để quan sát hình dạng, tiêu điểm, đường chuẩn và tâm sai:

```html
<div style="max-width: 760px; margin: 20px auto; font-family: system-ui, -apple-system, sans-serif; border: 1px solid #cbd5e1; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1e293b, #0f172a); padding: 16px 20px; color: #ffffff;">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 700; color: #f8fafc;">Phòng Thí Nghiệm Conic 2D</h3>
    <p style="margin: 0; font-size: 13px; color: #94a3b8;">Chọn loại đường conic và điều chỉnh các tham số đặc trưng để xem quỹ tích và tiêu điểm</p>
  </div>

  <div style="padding: 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between;">
    <div style="display: flex; gap: 8px;">
      <button id="btn-elip" style="padding: 6px 14px; font-weight: 600; font-size: 13px; border-radius: 6px; border: none; cursor: pointer; background: #2563eb; color: #fff;">Elip</button>
      <button id="btn-hyp" style="padding: 6px 14px; font-weight: 600; font-size: 13px; border-radius: 6px; border: 1px solid #cbd5e1; cursor: pointer; background: #fff; color: #334155;">Hypebol</button>
      <button id="btn-par" style="padding: 6px 14px; font-weight: 600; font-size: 13px; border-radius: 6px; border: 1px solid #cbd5e1; cursor: pointer; background: #fff; color: #334155;">Parabol</button>
    </div>
    <div id="conic-math-badge" style="font-family: monospace; font-size: 14px; font-weight: bold; color: #1e293b; background: #e2e8f0; padding: 4px 10px; border-radius: 6px;">
      x²/25 + y²/9 = 1
    </div>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 240px; gap: 16px; padding: 16px;">
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; justify-content: center; align-items: center; min-height: 320px;">
      <svg id="conic-canvas" viewBox="-120 -120 240 240" style="width: 100%; max-width: 380px; height: 320px; touch-action: none; background: #fdfdfd;"></svg>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px; justify-content: center;">
      <div id="ctrl-param-1">
        <label id="lbl-param-1" style="display: block; font-size: 13px; font-weight: 600; color: #475569; margin-bottom: 4px;">Bán trục lớn a = 5</label>
        <input type="range" id="slider-param-1" min="3" max="8" step="0.5" value="5" style="width: 100%; cursor: pointer;">
      </div>
      <div id="ctrl-param-2">
        <label id="lbl-param-2" style="display: block; font-size: 13px; font-weight: 600; color: #475569; margin-bottom: 4px;">Bán trục nhỏ b = 3</label>
        <input type="range" id="slider-param-2" min="1" max="6" step="0.5" value="3" style="width: 100%; cursor: pointer;">
      </div>
      <div style="background: #f1f5f9; padding: 10px; border-radius: 8px; font-size: 12px; color: #334155; line-height: 1.6;">
        <div><b>Tiêu cự:</b> <span id="val-c">2c = 8.0</span></div>
        <div><b>Tâm sai:</b> <span id="val-e">e = 0.800</span></div>
        <div id="extra-info"><b>Đỉnh:</b> (±5; 0), (0; ±3)</div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var mode = 'elip';
  var p1 = 5;
  var p2 = 3;

  var btnE = document.getElementById('btn-elip');
  var btnH = document.getElementById('btn-hyp');
  var btnP = document.getElementById('btn-par');
  var svg = document.getElementById('conic-canvas');
  var s1 = document.getElementById('slider-param-1');
  var s2 = document.getElementById('slider-param-2');
  var l1 = document.getElementById('lbl-param-1');
  var l2 = document.getElementById('lbl-param-2');
  var c1 = document.getElementById('ctrl-param-1');
  var c2 = document.getElementById('ctrl-param-2');
  var badge = document.getElementById('conic-math-badge');
  var valC = document.getElementById('val-c');
  var valE = document.getElementById('val-e');
  var extra = document.getElementById('extra-info');

  function updateMode(newMode) {
    mode = newMode;
    btnE.style.background = mode === 'elip' ? '#2563eb' : '#fff';
    btnE.style.color = mode === 'elip' ? '#fff' : '#334155';
    btnH.style.background = mode === 'hyp' ? '#2563eb' : '#fff';
    btnH.style.color = mode === 'hyp' ? '#fff' : '#334155';
    btnP.style.background = mode === 'par' ? '#2563eb' : '#fff';
    btnP.style.color = mode === 'par' ? '#fff' : '#334155';

    if (mode === 'elip') {
      c2.style.display = 'block';
      s1.min = '3'; s1.max = '8'; s1.step = '0.5'; s1.value = '5';
      s2.min = '1'; s2.max = '4.5'; s2.step = '0.5'; s2.value = '3';
      l1.textContent = 'Bán trục lớn a = 5';
      l2.textContent = 'Bán trục nhỏ b = 3';
    } else if (mode === 'hyp') {
      c2.style.display = 'block';
      s1.min = '2'; s1.max = '6'; s1.step = '0.5'; s1.value = '4';
      s2.min = '1.5'; s2.max = '6'; s2.step = '0.5'; s2.value = '3';
      l1.textContent = 'Bán trục thực a = 4';
      l2.textContent = 'Bán trục ảo b = 3';
    } else {
      c2.style.display = 'none';
      s1.min = '1'; s1.max = '10'; s1.step = '1'; s1.value = '4';
      l1.textContent = 'Tham số tiêu p = 4';
    }
    draw();
  }

  btnE.addEventListener('click', function() { updateMode('elip'); });
  btnH.addEventListener('click', function() { updateMode('hyp'); });
  btnP.addEventListener('click', function() { updateMode('par'); });

  s1.addEventListener('input', function() {
    p1 = parseFloat(s1.value);
    if (mode === 'elip') {
      l1.textContent = 'Bán trục lớn a = ' + p1;
      if (parseFloat(s2.value) >= p1) {
        s2.value = (p1 - 0.5).toString();
      }
      s2.max = (p1 - 0.5).toString();
      l2.textContent = 'Bán trục nhỏ b = ' + s2.value;
    } else if (mode === 'hyp') {
      l1.textContent = 'Bán trục thực a = ' + p1;
    } else {
      l1.textContent = 'Tham số tiêu p = ' + p1;
    }
    draw();
  });

  s2.addEventListener('input', function() {
    p2 = parseFloat(s2.value);
    if (mode === 'elip') {
      l2.textContent = 'Bán trục nhỏ b = ' + p2;
    } else {
      l2.textContent = 'Bán trục ảo b = ' + p2;
    }
    draw();
  });

  function draw() {
    p1 = parseFloat(s1.value);
    p2 = parseFloat(s2.value);
    var scale = 14;
    var html = '';

    // Trục tọa độ
    html += '<line x1="-115" y1="0" x2="115" y2="0" stroke="#cbd5e1" stroke-width="1.5"/>';
    html += '<line x1="0" y1="-115" x2="0" y2="115" stroke="#cbd5e1" stroke-width="1.5"/>';
    html += '<text x="108" y="14" font-size="10" fill="#94a3b8">x</text>';
    html += '<text x="6" y="-105" font-size="10" fill="#94a3b8">y</text>';

    if (mode === 'elip') {
      var a = p1;
      var b = p2;
      var c = Math.sqrt(Math.max(0, a * a - b * b));
      var e = c / a;

      badge.textContent = 'x²/' + (a * a).toFixed(0) + ' + y²/' + (b * b).toFixed(0) + ' = 1';
      valC.textContent = '2c = ' + (2 * c).toFixed(2);
      valE.textContent = 'e = ' + e.toFixed(3);
      extra.textContent = 'Đỉnh: (±' + a + '; 0), (0; ±' + b + ')';

      var rx = a * scale;
      var ry = b * scale;
      var cx = c * scale;

      html += '<ellipse cx="0" cy="0" rx="' + rx + '" ry="' + ry + '" fill="rgba(37,99,235,0.06)" stroke="#2563eb" stroke-width="2.5"/>';

      // Tiêu điểm F1, F2
      html += '<circle cx="' + (-cx) + '" cy="0" r="3.5" fill="#dc2626"/>';
      html += '<text x="' + (-cx - 8) + '" y="-8" font-size="9" font-weight="bold" fill="#dc2626">F₁</text>';
      html += '<circle cx="' + cx + '" cy="0" r="3.5" fill="#dc2626"/>';
      html += '<text x="' + (cx + 4) + '" y="-8" font-size="9" font-weight="bold" fill="#dc2626">F₂</text>';

    } else if (mode === 'hyp') {
      var a = p1;
      var b = p2;
      var c = Math.sqrt(a * a + b * b);
      var e = c / a;

      badge.textContent = 'x²/' + (a * a).toFixed(0) + ' - y²/' + (b * b).toFixed(0) + ' = 1';
      valC.textContent = '2c = ' + (2 * c).toFixed(2);
      valE.textContent = 'e = ' + e.toFixed(3);
      extra.textContent = 'Tiệm cận: y = ±' + (b / a).toFixed(2) + 'x';

      var cx = c * scale;

      // Tiệm cận
      var m = b / a;
      html += '<line x1="-110" y1="' + (110 * m) + '" x2="110" y2="' + (-110 * m) + '" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.2"/>';
      html += '<line x1="-110" y1="' + (-110 * m) + '" x2="110" y2="' + (110 * m) + '" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.2"/>';

      // Nhánh phải và nhánh trái của hypebol
      var dRight = '';
      var dLeft = '';
      for (var y = -8; y <= 8; y += 0.2) {
        var x = a * Math.sqrt(1 + (y * y) / (b * b));
        var sx = x * scale;
        var sy = -y * scale;
        if (dRight === '') dRight = 'M ' + sx + ' ' + sy;
        else dRight += ' L ' + sx + ' ' + sy;

        var sxL = -x * scale;
        if (dLeft === '') dLeft = 'M ' + sxL + ' ' + sy;
        else dLeft += ' L ' + sxL + ' ' + sy;
      }
      html += '<path d="' + dRight + '" fill="none" stroke="#2563eb" stroke-width="2.5"/>';
      html += '<path d="' + dLeft + '" fill="none" stroke="#2563eb" stroke-width="2.5"/>';

      // Tiêu điểm
      html += '<circle cx="' + (-cx) + '" cy="0" r="3.5" fill="#dc2626"/>';
      html += '<text x="' + (-cx - 8) + '" y="-8" font-size="9" font-weight="bold" fill="#dc2626">F₁</text>';
      html += '<circle cx="' + cx + '" cy="0" r="3.5" fill="#dc2626"/>';
      html += '<text x="' + (cx + 4) + '" y="-8" font-size="9" font-weight="bold" fill="#dc2626">F₂</text>';

    } else {
      var p = p1;
      var fX = (p / 2) * scale;
      var dirX = -(p / 2) * scale;

      badge.textContent = 'y² = ' + (2 * p).toFixed(0) + 'x';
      valC.textContent = 'p = ' + p.toFixed(1);
      valE.textContent = 'e = 1.000';
      extra.textContent = 'Chuẩn: x = -' + (p / 2).toFixed(1);

      // Đường chuẩn
      html += '<line x1="' + dirX + '" y1="-115" x2="' + dirX + '" y2="115" stroke="#f97316" stroke-dasharray="4,3" stroke-width="1.8"/>';
      html += '<text x="' + (dirX - 16) + '" y="-95" font-size="9" fill="#ea580c">Δ</text>';

      // Tiêu điểm F
      html += '<circle cx="' + fX + '" cy="0" r="3.5" fill="#dc2626"/>';
      html += '<text x="' + (fX + 4) + '" y="-8" font-size="9" font-weight="bold" fill="#dc2626">F</text>';

      // Vẽ Parabol y^2 = 2px -> x = y^2 / (2p)
      var dPar = '';
      for (var y = -8; y <= 8; y += 0.2) {
        var x = (y * y) / (2 * p);
        var sx = x * scale;
        var sy = -y * scale;
        if (dPar === '') dPar = 'M ' + sx + ' ' + sy;
        else dPar += ' L ' + sx + ' ' + sy;
      }
      html += '<path d="' + dPar + '" fill="none" stroke="#2563eb" stroke-width="2.5"/>';
    }

    svg.innerHTML = html;
  }

  draw();
})();
</script>

---

## 5. Các dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Xác định các yếu tố đặc trưng của đường conic

**Phương pháp giải:**
1. Đưa phương trình đã cho về dạng chính tắc:
   - Elip: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \implies c = \sqrt{a^2 - b^2}$.
   - Hypebol: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \implies c = \sqrt{a^2 + b^2}$.
   - Parabol: $y^2 = 2px \implies$ tham số tiêu $p$.
2. Tính các đại lượng:
   - Tiêu cự $2c$, độ dài các trục, tâm sai $e = \frac{c}{a}$, phương trình các đường tiệm cận $y = \pm \frac{b}{a}x$, đường chuẩn $x = -\frac{p}{2}$.

#### Bài toán 1
Cho phương trình đường cong $(C): 9x^2 + 25y^2 = 225$.
a) Chứng minh $(C)$ là một elip và viết phương trình chính tắc.
b) Tìm tọa độ các tiêu điểm, các đỉnh, độ dài trục lớn, trục nhỏ và tâm sai của $(C)$.

**Lời giải:**
a) Chia cả hai vế của phương trình cho $225$:
$$\frac{9x^2}{225} + \frac{25y^2}{225} = 1 \iff \frac{x^2}{25} + \frac{y^2}{9} = 1$$
Đây là phương trình chính tắc của elip với $a^2 = 25 \implies a = 5$ và $b^2 = 9 \implies b = 3$.

b) Ta có:
- $c = \sqrt{a^2 - b^2} = \sqrt{25 - 9} = \sqrt{16} = 4$.
- Tọa độ các tiêu điểm: $F_1(-4; 0)$ và $F_2(4; 0)$.
- Tiêu cự: $F_1F_2 = 2c = 8$.
- Tọa độ các đỉnh: $A_1(-5; 0), A_2(5; 0), B_1(0; -3), B_2(0; 3)$.
- Độ dài trục lớn: $2a = 10$; độ dài trục nhỏ: $2b = 6$.
- Tâm sai: $e = \frac{c}{a} = \frac{4}{5} = 0,8$.

---

### Dạng 2: Lập phương trình chính tắc của đường conic

**Phương pháp giải:**
1. Gọi phương trình chính tắc theo dạng chuẩn:
   - $(E): \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($a > b > 0$)
   - $(H): \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ ($a > 0, b > 0$)
   - $(P): y^2 = 2px$ ($p > 0$)
2. Thiết lập hệ phương trình để tìm $a, b$ hoặc $p$ từ các giả thiết hình học (đi qua điểm, tiêu cự, đỉnh, tâm sai, v.v.).

#### Bài toán 2
Lập phương trình chính tắc của:
a) Elip $(E)$ có tiêu cự bằng $6$ và đi qua điểm $M\left(\sqrt{5}; 2\right)$.
b) Hypebol $(H)$ có một tiêu điểm $F_2(5; 0)$ và độ dài trục thực bằng $8$.
c) Parabol $(P)$ đi qua điểm $A(2; 4)$.

**Lời giải:**
a) Gọi PTCT của elip là $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($a > b > 0$).
- Tiêu cự $2c = 6 \implies c = 3 \implies a^2 - b^2 = 9 \implies a^2 = b^2 + 9$.
- $M\left(\sqrt{5}; 2\right) \in (E) \implies \frac{5}{a^2} + \frac{4}{b^2} = 1$.
Thay $a^2 = b^2 + 9$ vào:
$$\frac{5}{b^2 + 9} + \frac{4}{b^2} = 1 \iff 5b^2 + 4(b^2 + 9) = b^2(b^2 + 9)$$
$$\iff 9b^2 + 36 = b^4 + 9b^2 \iff b^4 = 36 \implies b^2 = 6$$
Suy ra $a^2 = 6 + 9 = 15$.
Vậy phương trình chính tắc của $(E)$ là:
$$\frac{x^2}{15} + \frac{y^2}{6} = 1$$

b) Gọi PTCT của hypebol là $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ ($a > 0, b > 0$).
- Tiêu điểm $F_2(5; 0) \implies c = 5$.
- Trục thực $2a = 8 \implies a = 4$.
- Khi đó $b^2 = c^2 - a^2 = 5^2 - 4^2 = 25 - 16 = 9$.
Vậy phương trình chính tắc của $(H)$ là:
$$\frac{x^2}{16} - \frac{y^2}{9} = 1$$

c) Gọi PTCT của parabol là $y^2 = 2px$ ($p > 0$).
Điểm $A(2; 4) \in (P) \implies 4^2 = 2p(2) \iff 16 = 4p \implies p = 4$.
Vậy phương trình chính tắc của $(P)$ là:
$$y^2 = 8x$$

---

### Dạng 3: Điểm thuộc conic & Bán kính qua tiêu

**Phương pháp giải:**
Sử dụng công thức bán kính qua tiêu của điểm $M(x_M; y_M)$:
- Elip: $MF_1 = a + ex_M, MF_2 = a - ex_M$ (với $-a \le x_M \le a$).
- Hypebol: $MF_1 = |a + ex_M|, MF_2 = |a - ex_M|$.
- Parabol: $MF = x_M + \frac{p}{2}$.

#### Bài toán 3
Cho elip $(E): \frac{x^2}{100} + \frac{y^2}{36} = 1$.
a) Tìm tọa độ hai tiêu điểm $F_1, F_2$ và tâm sai $e$.
b) Tìm tọa độ điểm $M \in (E)$ sao cho bán kính qua tiêu $MF_1 = 2MF_2$.

**Lời giải:**
a) Từ phương trình $(E)$ ta có: $a^2 = 100 \implies a = 10$, $b^2 = 36 \implies b = 6$.
- $c = \sqrt{a^2 - b^2} = \sqrt{100 - 36} = \sqrt{64} = 8$.
- Tiêu điểm: $F_1(-8; 0), F_2(8; 0)$.
- Tâm sai: $e = \frac{c}{a} = \frac{8}{10} = 0,8$.

b) Với điểm $M(x; y) \in (E)$, ta có:
$$MF_1 = a + ex = 10 + 0,8x, \quad MF_2 = a - ex = 10 - 0,8x$$
Theo giả thiết:
$$MF_1 = 2MF_2 \iff 10 + 0,8x = 2(10 - 0,8x)$$
$$\iff 10 + 0,8x = 20 - 1,6x \iff 2,4x = 10 \iff x = \frac{10}{2,4} = \frac{25}{6}$$
Vì $M \in (E)$, thay $x = \frac{25}{6}$ vào phương trình elip:
$$\frac{\left(\frac{25}{6}\right)^2}{100} + \frac{y^2}{36} = 1 \iff \frac{625}{3600} + \frac{y^2}{36} = 1 \iff \frac{25}{144} + \frac{y^2}{36} = 1$$
$$\iff \frac{y^2}{36} = 1 - \frac{25}{144} = \frac{119}{144} \implies y^2 = \frac{119 \cdot 36}{144} = \frac{119}{4} \implies y = \pm \frac{\sqrt{119}}{2}$$
Vậy có hai điểm thỏa mãn là $M_1\left(\frac{25}{6}; \frac{\sqrt{119}}{2}\right)$ và $M_2\left(\frac{25}{6}; -\frac{\sqrt{119}}{2}\right)$.

---

### Dạng 4: Ứng dụng thực tế của ba đường conic

#### Bài toán 4
Một cổng chào hình bán elip có chiều rộng ở chân cổng là $16\text{ m}$ và chiều cao đỉnh cổng là $6\text{ m}$. Một chiếc xe tải chở hàng hình khối hộp chữ nhật có chiều rộng thùng xe là $8\text{ m}$. Hỏi chiều cao tối đa của xe tải bằng bao nhiêu để xe có thể đi qua lọt cổng (giả sử xe đi đúng chính giữa tim đường)?

**Lời giải:**
1. Chọn hệ trục tọa độ $Oxy$ sao cho:
   - Gốc $O$ là trung điểm chân cổng chào (nằm trên mặt đất).
   - Trục $Ox$ dọc theo mặt đường, trục $Oy$ hướng thẳng đứng qua đỉnh cổng.
2. Khi đó hình dáng cổng chào là nửa trên của elip:
   - Chiều rộng chân cổng là $2a = 16 \implies a = 8$.
   - Chiều cao cổng là $b = 6$.
   - Phương trình elip:
     $$\frac{x^2}{8^2} + \frac{y^2}{6^2} = 1 \iff \frac{x^2}{64} + \frac{y^2}{36} = 1 \quad (y \ge 0)$$
3. Xe tải có chiều rộng $8\text{ m}$ và chạy ở chính giữa đường, nghĩa là thùng xe chiếm đoạn hoành độ từ $x = -4$ đến $x = 4$.
   Điểm thấp nhất của vòm cổng nằm ngay phía trên mép ngoài của thùng xe ứng với $x = 4$.
4. Thay $x = 4$ vào phương trình elip:
   $$\frac{4^2}{64} + \frac{y^2}{36} = 1 \iff \frac{16}{64} + \frac{y^2}{36} = 1 \iff \frac{1}{4} + \frac{y^2}{36} = 1$$
   $$\iff \frac{y^2}{36} = \frac{3}{4} \implies y^2 = 27 \implies y = \sqrt{27} = 3\sqrt{3} \approx 5,196\text{ m}$$

**Kết luận:** Chiều cao tối đa của xe tải để đi qua lọt cổng chào là $3\sqrt{3}\text{ m} \approx 5,2\text{ m}$.

---

## 6. Ứng dụng thực tiễn của Ba đường Conic

1. **Quỹ đạo thiên thể & Định luật Kepler:** Định luật 1 của Johannes Kepler khẳng định mọi hành tinh trong Hệ Mặt Trời đều chuyển động theo quỹ đạo elip với Mặt Trời nằm tại một trong hai tiêu điểm. Trái Đất có tâm sai rất nhỏ ($e \approx 0,0167$), gần như đường tròn.
2. **Gương cầu & Ăng-ten Parabol:** Theo tính chất quang học kỳ diệu của parabol, mọi tia sáng hoặc sóng điện từ đi tới song song với trục đối xứng đều phản xạ và hội tụ chính xác tại tiêu điểm $F$. Ứng dụng để chế tạo kính thiên văn phản xạ, ăng-ten chảo thu sóng vệ tinh và bếp năng lượng mặt trời.
3. **Phòng thì thầm & Y học tán sỏi thận:** Mọi tia sóng xuất phát từ một tiêu điểm của elip sau khi va đập vào thành cong đều phản xạ hội tụ tại tiêu điểm thứ hai. Trong y học, máy tán sỏi ngoài cơ thể dùng buồng phản xạ elip: nguồn phát sóng xung kích đặt tại tiêu điểm $F_1$, và viên sỏi thận của bệnh nhân được định vị trùng với tiêu điểm $F_2$ để tán nhỏ sỏi mà không cần mổ.
4. **Hệ thống dẫn đường hàng hải LORAN:** Tàu biển xác định khoảng cách tới hai trạm phát sóng vô tuyến cố định. Hiệu khoảng cách $|d_1 - d_2| = \text{const}$ định vị tàu nằm trên một nhánh của hypebol. Giao điểm của hai đường hypebol từ hai cặp trạm sẽ cho tọa độ chính xác của tàu.
5. **Tháp giải nhiệt Hypeboloid:** Các tháp tản nhiệt khổng lồ tại nhà máy nhiệt điện và điện hạt nhân có bề mặt là khối tròn xoay hyperboloid một tầng. Cấu trúc này tối ưu đối lưu luồng khí mát, tiết kiệm bê tông cốt thép và chịu được gió bão giật cấp cao.

---

## 7. Bài tập trắc nghiệm tự luyện

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q1",
  "question": "Phương trình chính tắc của elip có độ dài trục lớn bằng 10 và độ dài trục nhỏ bằng 8 là:",
  "options": [
    "\\frac{x^2}{25} + \\frac{y^2}{16} = 1",
    "\\frac{x^2}{100} + \\frac{y^2}{64} = 1",
    "\\frac{x^2}{16} + \\frac{y^2}{25} = 1",
    "\\frac{x^2}{25} - \\frac{y^2}{16} = 1"
  ],
  "answer": 0,
  "explanation": "Trục lớn $2a = 10 \\implies a = 5 \\implies a^2 = 25$. Trục nhỏ $2b = 8 \\implies b = 4 \\implies b^2 = 16$. Phương trình chính tắc là $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q2",
  "question": "Cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{7} = 1$. Tiêu cự của elip bằng:",
  "options": [
    "6",
    "3",
    "9",
    "2\\sqrt{23}"
  ],
  "answer": 0,
  "explanation": "$a^2 = 16, b^2 = 7 \\implies c^2 = a^2 - b^2 = 16 - 7 = 9 \\implies c = 3$. Tiêu cự $2c = 6$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q3",
  "question": "Tâm sai $e$ của elip $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ là:",
  "options": [
    "\\frac{4}{5}",
    "\\frac{3}{5}",
    "\\frac{5}{4}",
    "\\frac{4}{3}"
  ],
  "answer": 0,
  "explanation": "$a = 5, b = 3 \\implies c = \\sqrt{25 - 9} = 4$. Tâm sai $e = \\frac{c}{a} = \\frac{4}{5}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q4",
  "question": "Cho hypebol $(H): \\frac{x^2}{9} - \\frac{y^2}{16} = 1$. Độ dài tiêu cự của hypebol là:",
  "options": [
    "10",
    "5",
    "7",
    "14"
  ],
  "answer": 0,
  "explanation": "$a^2 = 9, b^2 = 16 \\implies c^2 = a^2 + b^2 = 9 + 16 = 25 \\implies c = 5$. Tiêu cự $2c = 10$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q5",
  "question": "Phương trình các đường tiệm cận của hypebol $\\frac{x^2}{25} - \\frac{y^2}{4} = 1$ là:",
  "options": [
    "y = \\pm \\frac{2}{5}x",
    "y = \\pm \\frac{5}{2}x",
    "y = \\pm \\frac{4}{25}x",
    "y = \\pm \\frac{25}{4}x"
  ],
  "answer": 0,
  "explanation": "$a^2 = 25 \\implies a = 5; b^2 = 4 \\implies b = 2$. Các đường tiệm cận có phương trình $y = \\pm \\frac{b}{a}x = \\pm \\frac{2}{5}x$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q6",
  "question": "Phương trình chính tắc của parabol có tiêu điểm $F(3; 0)$ là:",
  "options": [
    "y^2 = 12x",
    "y^2 = 6x",
    "y^2 = 3x",
    "x^2 = 12y"
  ],
  "answer": 0,
  "explanation": "Tiêu điểm $F\\left(\\frac{p}{2}; 0\\right) = (3; 0) \\implies \\frac{p}{2} = 3 \\implies p = 6$. Phương trình chính tắc $y^2 = 2px = 12x$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q7",
  "question": "Cho parabol $(P): y^2 = 16x$. Phương trình đường chuẩn của $(P)$ là:",
  "options": [
    "x = -4",
    "x = 4",
    "x = -8",
    "y = -4"
  ],
  "answer": 0,
  "explanation": "$2p = 16 \\implies p = 8 \\implies \\frac{p}{2} = 4$. Đường chuẩn có phương trình $x = -\\frac{p}{2} = -4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q8",
  "question": "Một đường conic có tâm sai $e = 1$ là đường cong nào?",
  "options": [
    "Parabol",
    "Elip",
    "Hypebol",
    "Đường tròn"
  ],
  "answer": 0,
  "explanation": "Theo định nghĩa tổng quát: $0 < e < 1$ là elip, $e = 1$ là parabol, $e > 1$ là hypebol."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q9",
  "question": "Điểm $M$ thuộc parabol $y^2 = 4x$ có tung độ $y = 4$. Bán kính qua tiêu $MF$ bằng:",
  "options": [
    "5",
    "4",
    "6",
    "3"
  ],
  "answer": 0,
  "explanation": "$2p = 4 \\implies p = 2 \\implies \\frac{p}{2} = 1$. Tung độ $y = 4 \\implies 4^2 = 4x \\implies x = 4$. Bán kính qua tiêu $MF = x + \\frac{p}{2} = 4 + 1 = 5$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c7_b22_q10",
  "question": "Phương trình chính tắc của hypebol đi qua điểm $A(4; 0)$ và có tiêu cự $2c = 10$ là:",
  "options": [
    "\\frac{x^2}{16} - \\frac{y^2}{9} = 1",
    "\\frac{x^2}{16} + \\frac{y^2}{9} = 1",
    "\\frac{x^2}{25} - \\frac{y^2}{16} = 1",
    "\\frac{x^2}{9} - \\frac{y^2}{16} = 1"
  ],
  "answer": 0,
  "explanation": "Hypebol có đỉnh $A(4; 0) \\implies a = 4$. Tiêu cự $2c = 10 \\implies c = 5$. Ta có $b^2 = c^2 - a^2 = 25 - 16 = 9$. Phương trình: $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$."
}'></div>

---

## 8. Dự án thử thách thực tế: Chế tạo chảo hội tụ năng lượng mặt trời

**Tình huống kỹ thuật:**
Một nhóm học sinh muốn tự chế tạo bếp năng lượng mặt trời để đun sôi $1$ lít nước phục vụ cắm trại ngoài trời bằng một chảo parabol tráng gương nhôm phản xạ.
- Chiều sâu đáy chảo đo được từ đỉnh là $h = 20\text{ cm} = 0,2\text{ m}$.
- Đường kính miệng chảo là $D = 80\text{ cm} = 0,8\text{ m}$.

**Nhiệm vụ:**
1. Thiết lập hệ trục tọa độ và tìm phương trình chính tắc của mặt cắt chảo parabol.
2. Xác định vị trí cần đặt giá đỡ đáy ấm đun nước (tiêu điểm $F$) cách đáy chảo bao nhiêu centimét để toàn bộ năng lượng ánh sáng mặt trời hội tụ mạnh nhất?
3. Nếu bức xạ mặt trời trực tiếp trung bình là $800\text{ W/m}^2$, tính tổng công suất nhiệt lý thuyết mà bề mặt miệng chảo thu được.

*Gợi ý:*
- Miệng chảo có bán kính $R = 40\text{ cm}$. Điểm mép chảo có tọa độ $(x; y) = (20; 40)$.
- Thay vào $y^2 = 2px \implies 40^2 = 2p(20) \iff 1600 = 40p \implies p = 40\text{ cm}$.
- Vị trí tiêu điểm $F\left(\frac{p}{2}; 0\right) = (20; 0)$, nghĩa là đặt ấm ngay tại mặt phẳng miệng chảo, cách đáy $20\text{ cm}$.
