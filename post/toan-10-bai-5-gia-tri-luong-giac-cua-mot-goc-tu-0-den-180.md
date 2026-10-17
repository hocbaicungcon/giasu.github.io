---
title: 'Toán 10 Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°'
description: 'Lý thuyết chuẩn Toán 10 Bài 5: Nửa đường tròn đơn vị, định nghĩa sin, cos, tan, cot cho góc từ 0° đến 180°, tính chất góc bù nhau, các hệ thức lượng giác cơ bản, widget nửa đường tròn đơn vị tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Hình học 10
  - Lượng giác
  - Nửa đường tròn đơn vị
  - Giá trị lượng giác
  - Kết nối tri thức
grade: 10
---

# Bài 5. Giá trị lượng giác của một góc từ 0° đến 180°

Ở lớp 9, các em đã làm quen với tỉ số lượng giác của góc nhọn ($\sin, \cos, \tan, \cot$) gắn liền với tam giác vuông thông qua các câu khẩu quyết quen thuộc: *"Sao Đi Học, Cứ Khóc Hoài, Thôi Đừng Khóc, Có Kẹo Đây"*.

Tuy nhiên, trong thực tế và trong hình học giải tích:
- Một tam giác có thể có góc tù (lớn hơn $90^\circ$).
- Hướng di chuyển của tàu thủy, máy bay có thể tạo với phương bắc một góc tù bất kỳ.
- Trong vật lý, công cơ học $A = F \cdot s \cdot \cos\alpha$ có thể âm khi góc cản $\alpha > 90^\circ$.

Để giải quyết vấn đề này, các nhà toán học đã mở rộng khái niệm tỉ số lượng giác lên **mọi góc từ $0^\circ$ đến $180^\circ$** bằng một công cụ hình học tuyệt đẹp: **Nửa đường tròn đơn vị**.

---

## 1. Sơ đồ tư duy: Giá trị lượng giác từ 0° đến 180°

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Nửa đường tròn đơn vị</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Bán kính $R = 1$, tâm tại gốc $O(0; 0)$ thuộc nửa mặt phẳng $y \ge 0$.<br>
      • Điểm $M(x_0; y_0)$ trên nửa đường tròn sao cho $\widehat{xOM} = \alpha$:<br>
      &nbsp;&nbsp;+ $\sin\alpha = y_0$ (tung độ)<br>
      &nbsp;&nbsp;+ $\cos\alpha = x_0$ (hoành độ)<br>
      &nbsp;&nbsp;+ $\tan\alpha = \frac{y_0}{x_0}$ ($\alpha \ne 90^\circ$)<br>
      &nbsp;&nbsp;+ $\cot\alpha = \frac{x_0}{y_0}$ ($\alpha \ne 0^\circ, 180^\circ$)
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Dấu của giá trị lượng giác</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • Với mọi $\alpha \in [0^\circ; 180^\circ]$: $\sin\alpha \ge 0$.<br>
      • Khi $\alpha$ nhọn ($0^\circ < \alpha < 90^\circ$):<br>
      &nbsp;&nbsp;$\cos\alpha > 0, \tan\alpha > 0, \cot\alpha > 0$.<br>
      • Khi $\alpha$ tù ($90^\circ < \alpha < 180^\circ$):<br>
      &nbsp;&nbsp;$\cos\alpha < 0, \tan\alpha < 0, \cot\alpha < 0$.<br>
      • Tại $\alpha = 90^\circ$: $\sin 90^\circ = 1, \cos 90^\circ = 0$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Hai góc bù nhau</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • <strong>"Sin bù":</strong><br>
      &nbsp;&nbsp;$\sin(180^\circ - \alpha) = \sin\alpha$<br>
      &nbsp;&nbsp;$\cos(180^\circ - \alpha) = -\cos\alpha$<br>
      &nbsp;&nbsp;$\tan(180^\circ - \alpha) = -\tan\alpha$<br>
      &nbsp;&nbsp;$\cot(180^\circ - \alpha) = -\cot\alpha$
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. 4 hệ thức cơ bản</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • $\sin^2\alpha + \cos^2\alpha = 1$<br>
      • $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}, \cot\alpha = \frac{\cos\alpha}{\sin\alpha}$<br>
      • $1 + \tan^2\alpha = \frac{1}{\cos^2\alpha}$ ($\alpha \ne 90^\circ$)<br>
      • $1 + \cot^2\alpha = \frac{1}{\sin^2\alpha}$ ($\alpha \ne 0^\circ, 180^\circ$)<br>
      • $\tan\alpha \cdot \cot\alpha = 1$.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

1. **Góc $\alpha$ nằm trong khoảng nào thì $\cos\alpha < 0$?**  
   *Đáp án:* Khi $\alpha$ là góc tù ($90^\circ < \alpha \le 180^\circ$).
2. **Giá trị $\sin 150^\circ$ bằng bao nhiêu?**  
   *Đáp án:* Dùng tính chất góc bù: $\sin 150^\circ = \sin(180^\circ - 150^\circ) = \sin 30^\circ = \frac{1}{2}$.
3. **Giá trị $\cos 120^\circ$ bằng bao nhiêu?**  
   *Đáp án:* $\cos 120^\circ = -\cos(180^\circ - 120^\circ) = -\cos 60^\circ = -\frac{1}{2}$.
4. **Tại sao $\tan 90^\circ$ không xác định?**  
   *Đáp án:* Vì tại $90^\circ$, hoành độ $x_0 = \cos 90^\circ = 0$, mà mẫu số của $\tan = \frac{y_0}{x_0}$ bằng 0 nên phép chia không xác định.
5. **Tổng $\sin^2 40^\circ + \sin^2 140^\circ + \cos^2 40^\circ$ rút gọn lại thành gì?**  
   *Đáp án:* Ta có $\sin^2 40^\circ + \cos^2 40^\circ = 1$, và $\sin 140^\circ = \sin 40^\circ$, do đó tổng bằng $1 + \sin^2 40^\circ$.

---

## 3. Lý thuyết trọng tâm

### 3.1. Nửa đường tròn đơn vị & Định nghĩa giá trị lượng giác

Trong mặt phẳng tọa độ $Oxy$, nửa đường tròn tâm $O(0; 0)$ bán kính $R = 1$ nằm phía trên trục hoành ($y \ge 0$) được gọi là **nửa đường tròn đơn vị**.

Với mỗi góc $\alpha$ thỏa mãn $0^\circ \le \alpha \le 180^\circ$, luôn tồn tại duy nhất một điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị sao cho:
$$\widehat{xOM} = \alpha$$

Khi đó, các giá trị lượng giác của góc $\alpha$ được định nghĩa như sau:
- **Sin của $\alpha$:** $\sin\alpha = y_0$ (tung độ của điểm $M$).
- **Côsin của $\alpha$:** $\cos\alpha = x_0$ (hoành độ của điểm $M$).
- **Tang của $\alpha$:** $\tan\alpha = \frac{y_0}{x_0} = \frac{\sin\alpha}{\cos\alpha}$ (xác định với $\alpha \ne 90^\circ$).
- **Côtang của $\alpha$:** $\cot\alpha = \frac{x_0}{y_0} = \frac{\cos\alpha}{\sin\alpha}$ (xác định với $\alpha \ne 0^\circ$ và $\alpha \ne 180^\circ$).

> [!NOTE]
> - Trục tung $Oy$ còn được gọi là **trục Sin**.
> - Trục hoành $Ox$ còn được gọi là **trục Cos**.
> - Vì $M(x_0; y_0)$ nằm trên nửa đường tròn đơn vị ($y \ge 0$ và $x^2 + y^2 = 1$), nên:
>   $$0 \le \sin\alpha \le 1$$
>   $$-1 \le \cos\alpha \le 1$$

---

### 3.2. Mối quan hệ giữa hai góc bù nhau ($180^\circ - \alpha$)

Hai góc bù nhau có tổng số đo bằng $180^\circ$. Trên nửa đường tròn đơn vị, hai điểm $M(\alpha)$ và $M'(180^\circ - \alpha)$ đối xứng nhau qua trục tung $Oy$.  
Do đó chúng có **cùng tung độ** và **hoành độ đối nhau**:

$$\sin(180^\circ - \alpha) = \sin\alpha$$
$$\cos(180^\circ - \alpha) = -\cos\alpha$$
$$\tan(180^\circ - \alpha) = -\tan\alpha \quad (\alpha \ne 90^\circ)$$
$$\cot(180^\circ - \alpha) = -\cot\alpha \quad (0^\circ < \alpha < 180^\circ)$$

> [!TIP]
> **Khẩu quyết nhớ dấu:** *"Sin bù"* — Nghĩa là hai góc bù nhau thì giá trị $\sin$ giữ nguyên, còn $\cos, \tan, \cot$ đều đổi dấu trừ.

---

### 3.3. Bảng giá trị lượng giác của các góc đặc biệt

| $\alpha$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $\sin\alpha$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ |
| $\cos\alpha$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-\frac{1}{2}$ | $-\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{3}}{2}$ | $-1$ |
| $\tan\alpha$ | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | $\parallel$ | $-\sqrt{3}$ | $-1$ | $-\frac{\sqrt{3}}{3}$ | $0$ |
| $\cot\alpha$ | $\parallel$ | $\sqrt{3}$ | $1$ | $\frac{\sqrt{3}}{3}$ | $0$ | $-\frac{\sqrt{3}}{3}$ | $-1$ | $-\sqrt{3}$ | $\parallel$ |

*(Ký hiệu $\parallel$ nghĩa là không xác định)*

---

### 3.4. Các hệ thức lượng giác cơ bản

Với mọi góc $\alpha$ ($0^\circ \le \alpha \le 180^\circ$) thỏa mãn điều kiện xác định:
1. $\sin^2\alpha + \cos^2\alpha = 1$
2. $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$ ($\alpha \ne 90^\circ$)
3. $\cot\alpha = \frac{\cos\alpha}{\sin\alpha}$ ($\alpha \ne 0^\circ, 180^\circ$)
4. $\tan\alpha \cdot \cot\alpha = 1$ ($\alpha \ne 0^\circ, 90^\circ, 180^\circ$)
5. $1 + \tan^2\alpha = \frac{1}{\cos^2\alpha}$ ($\alpha \ne 90^\circ$)
6. $1 + \cot^2\alpha = \frac{1}{\sin^2\alpha}$ ($\alpha \ne 0^\circ, 180^\circ$)

---

## 4. Widget tương tác: Nửa đường tròn đơn vị động

Kéo thanh trượt góc $\alpha$ từ $0^\circ$ đến $180^\circ$ để quan sát tọa độ điểm $M(x_0, y_0)$, hình chiếu lên trục $\sin$ (tung độ) và trục $\cos$ (hoành độ):

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">⭕ Phòng Khám Phá Nửa Đường Tròn Đơn Vị</h3>
    <div style="font-weight: 700; font-size: 1.2rem; color: #6366f1;">
      Góc α = <span id="degDisplay">120</span>°
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; align-items: center;">
    <!-- Interactive Unit Circle SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; text-align: center;">
      <svg data-interactive-done="true" id="trigSvg" viewBox="-140 -140 280 160" style="width: 100%; max-width: 340px; height: auto;">
        <!-- Axes -->
        <g stroke="#94a3b8" stroke-width="1.5">
          <line x1="-130" y1="0" x2="130" y2="0" />
          <line x1="0" y1="10" x2="0" y2="-130" />
        </g>
        <text x="136" y="16" text-anchor="end" font-size="11" fill="#475569" font-weight="bold">x (Cos)</text>
        <text x="6" y="-120" font-size="11" fill="#475569" font-weight="bold">y (Sin)</text>
        <text x="-12" y="14" font-size="10" fill="#64748b">O</text>

        <!-- Unit semicircle (radius = 100px) -->
        <path d="M 100,0 A 100,100 0 0,0 -100,0" fill="none" stroke="#cbd5e1" stroke-width="2" />

        <!-- Angle Sector fill -->
        <path id="sectorArc" d="M 0,0 L 100,0 A 100,100 0 0,0 -50,-86.6 Z" fill="#6366f1" fill-opacity="0.15" />

        <!-- Terminal side OM -->
        <line id="lineOM" x1="0" y1="0" x2="-50" y2="-86.6" stroke="#4f46e5" stroke-width="2.5" />

        <!-- Projections -->
        <!-- Projection to Ox (Cos) -->
        <line id="projX" x1="-50" y1="0" x2="-50" y2="-86.6" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
        <!-- Projection to Oy (Sin) -->
        <line id="projY" x1="0" y1="-86.6" x2="-50" y2="-86.6" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />

        <!-- Segments on axes -->
        <!-- Cos segment on Ox -->
        <line id="cosSeg" x1="0" y1="0" x2="-50" y2="0" stroke="#ef4444" stroke-width="3" />
        <!-- Sin segment on Oy -->
        <line id="sinSeg" x1="0" y1="0" x2="0" y2="-86.6" stroke="#10b981" stroke-width="3" />

        <!-- Point M -->
        <circle id="pointM" cx="-50" cy="-86.6" r="5" fill="#4f46e5" />
        <text id="labelM" x="-85" y="-95" font-size="11" font-weight="bold" fill="#312e81">M(-0.5; 0.87)</text>

        <!-- Angle Arc small -->
        <path id="angleArc" d="M 25,0 A 25,25 0 0,0 -12.5,-21.6" fill="none" stroke="#f59e0b" stroke-width="2" />
        <text id="labelAlpha" x="8" y="-30" font-size="10" font-weight="bold" fill="#b45309">120°</text>
      </svg>
    </div>

    <!-- Live Values & Controls -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
      <div style="margin-bottom: 14px;">
        <label style="font-size: 0.9rem; font-weight: 600; color: #334155;">Điều chỉnh góc α:</label>
        <input type="range" id="angleSlider" min="0" max="180" step="1" value="120" oninput="updateTrig()" style="width: 100%; margin-top: 6px;" />
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #94a3b8;">
          <span>0°</span><span>30°</span><span>45°</span><span>60°</span><span>90°</span><span>120°</span><span>150°</span><span>180°</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.85rem;">
        <div style="background: #f0fdf4; border-left: 3px solid #10b981; padding: 8px; border-radius: 4px;">
          <strong style="color: #065f46;">sin α (Tung độ):</strong><br>
          <span id="valSin" style="font-size: 1.1rem; font-weight: bold; color: #047857;">0.8660</span>
        </div>
        <div style="background: #fef2f2; border-left: 3px solid #ef4444; padding: 8px; border-radius: 4px;">
          <strong style="color: #991b1b;">cos α (Hoành độ):</strong><br>
          <span id="valCos" style="font-size: 1.1rem; font-weight: bold; color: #dc2626;">-0.5000</span>
        </div>
        <div style="background: #f8fafc; border-left: 3px solid #64748b; padding: 8px; border-radius: 4px;">
          <strong style="color: #334155;">tan α:</strong><br>
          <span id="valTan" style="font-size: 1rem; font-weight: bold; color: #1e293b;">-1.7321</span>
        </div>
        <div style="background: #f8fafc; border-left: 3px solid #64748b; padding: 8px; border-radius: 4px;">
          <strong style="color: #334155;">cot α:</strong><br>
          <span id="valCot" style="font-size: 1rem; font-weight: bold; color: #1e293b;">-0.5774</span>
        </div>
      </div>

      <div id="natureNotice" style="margin-top: 12px; font-size: 0.85rem; color: #4338ca; background: #eef2ff; padding: 8px; border-radius: 6px;">
        • Góc 120° là góc tù ($90^\circ < \alpha < 180^\circ$): Hoành độ âm ($\cos < 0$), tung độ dương ($\sin > 0$).
      </div>
    </div>
  </div>
</div>

<script>
function updateTrig() {
  const deg = parseInt(document.getElementById('angleSlider').value);
  document.getElementById('degDisplay').textContent = deg;

  const rad = deg * Math.PI / 180;
  const cosV = Math.cos(rad);
  const sinV = Math.sin(rad);

  // SVG coordinates: R = 100. (0,0) in SVG is center. x goes right, y goes DOWN!
  // So svgX = 100 * cosV, svgY = -100 * sinV
  const mx = 100 * cosV;
  const my = -100 * sinV;

  document.getElementById('lineOM').setAttribute('x2', mx);
  document.getElementById('lineOM').setAttribute('y2', my);

  document.getElementById('projX').setAttribute('x1', mx);
  document.getElementById('projX').setAttribute('y1', 0);
  document.getElementById('projX').setAttribute('x2', mx);
  document.getElementById('projX').setAttribute('y2', my);

  document.getElementById('projY').setAttribute('x1', 0);
  document.getElementById('projY').setAttribute('y1', my);
  document.getElementById('projY').setAttribute('x2', mx);
  document.getElementById('projY').setAttribute('y2', my);

  document.getElementById('cosSeg').setAttribute('x2', mx);
  document.getElementById('sinSeg').setAttribute('y2', my);

  document.getElementById('pointM').setAttribute('cx', mx);
  document.getElementById('pointM').setAttribute('cy', my);

  const labelM = document.getElementById('labelM');
  labelM.setAttribute('x', mx > 0 ? mx + 8 : mx - 80);
  labelM.setAttribute('y', my - 8);
  labelM.textContent = `M(${cosV.toFixed(2)}; ${sinV.toFixed(2)})`;

  // Sector path
  const sector = document.getElementById('sectorArc');
  sector.setAttribute('d', `M 0,0 L 100,0 A 100,100 0 0,0 ${mx},${my} Z`);

  // Small angle arc (R=25)
  const ax = 25 * cosV;
  const ay = -25 * sinV;
  document.getElementById('angleArc').setAttribute('d', `M 25,0 A 25,25 0 0,0 ${ax},${ay}`);
  document.getElementById('labelAlpha').textContent = `${deg}°`;

  // Values display
  document.getElementById('valSin').textContent = sinV.toFixed(4);
  document.getElementById('valCos').textContent = cosV.toFixed(4);

  if (deg === 90) {
    document.getElementById('valTan').textContent = 'Không xđ';
    document.getElementById('valCot').textContent = '0.0000';
  } else if (deg === 0 || deg === 180) {
    document.getElementById('valTan').textContent = '0.0000';
    document.getElementById('valCot').textContent = 'Không xđ';
  } else {
    document.getElementById('valTan').textContent = (sinV / cosV).toFixed(4);
    document.getElementById('valCot').textContent = (cosV / sinV).toFixed(4);
  }

  const notice = document.getElementById('natureNotice');
  if (deg === 0) {
    notice.innerHTML = '• Góc 0°: Điểm M trùng A(1; 0). cos = 1, sin = 0.';
  } else if (deg === 90) {
    notice.innerHTML = '• Góc 90°: Điểm M trùng (0; 1). sin = 1, cos = 0, tan không xác định.';
  } else if (deg === 180) {
    notice.innerHTML = '• Góc 180°: Điểm M trùng (-1; 0). cos = -1, sin = 0.';
  } else if (deg < 90) {
    notice.innerHTML = `• Góc nhọn (${deg}° < 90°): Điểm M thuộc phần tư I $\\implies$ sin, cos, tan, cot đều mang dấu DƯƠNG (+).`;
  } else {
    notice.innerHTML = `• Góc tù (${deg}° > 90°): Điểm M thuộc phần tư II $\\implies$ sin > 0, cos < 0, tan < 0, cot < 0.`;
  }
}
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Tính giá trị lượng giác bằng góc phụ, góc bù

#### Phương pháp:
- Sử dụng tính chất góc bù nhau:
  $\sin(180^\circ - \alpha) = \sin\alpha$
  $\cos(180^\circ - \alpha) = -\cos\alpha$
  $\tan(180^\circ - \alpha) = -\tan\alpha$
- Sử dụng tính chất hai góc phụ nhau ($\alpha + \beta = 90^\circ$):
  $\sin(90^\circ - \alpha) = \cos\alpha$
  $\cos(90^\circ - \alpha) = \sin\alpha$

---

#### Bài toán 1
Tính giá trị của các biểu thức sau không dùng máy tính cầm tay:
1. $A = \sin 135^\circ \cdot \cos 150^\circ + \cos 45^\circ \cdot \sin 30^\circ$
2. $B = \cos 20^\circ + \cos 40^\circ + \cos 140^\circ + \cos 160^\circ$

**Lời giải chi tiết:**

1. Tính biểu thức $A$:
   - $\sin 135^\circ = \sin(180^\circ - 135^\circ) = \sin 45^\circ = \frac{\sqrt{2}}{2}$.
   - $\cos 150^\circ = -\cos(180^\circ - 150^\circ) = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$.
   - $\cos 45^\circ = \frac{\sqrt{2}}{2}$ và $\sin 30^\circ = \frac{1}{2}$.

   Thay vào biểu thức $A$:
   $$A = \left(\frac{\sqrt{2}}{2}\right) \cdot \left(-\frac{\sqrt{3}}{2}\right) + \left(\frac{\sqrt{2}}{2}\right) \cdot \left(\frac{1}{2}\right) = -\frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \frac{\sqrt{2} - \sqrt{6}}{4}$$

2. Tính biểu thức $B$:
   Nhận xét quan hệ giữa các góc bù nhau:
   - $160^\circ = 180^\circ - 20^\circ \Rightarrow \cos 160^\circ = -\cos 20^\circ$.
   - $140^\circ = 180^\circ - 40^\circ \Rightarrow \cos 140^\circ = -\cos 40^\circ$.

   Gom nhóm các số hạng:
   $$B = (\cos 20^\circ + \cos 160^\circ) + (\cos 40^\circ + \cos 140^\circ)$$
   $$B = (\cos 20^\circ - \cos 20^\circ) + (\cos 40^\circ - \cos 40^\circ) = 0 + 0 = 0$$

---

### Dạng 2: Cho một giá trị lượng giác, tính các giá trị còn lại

#### Phương pháp:
1. Áp dụng hệ thức $\sin^2\alpha + \cos^2\alpha = 1$ để tính $\sin\alpha$ hoặc $\cos\alpha$.
2. Căn cứ vào điều kiện của góc $\alpha$ (nhọn hay tù) để lấy dấu thích hợp:
   - $\sin\alpha > 0$ với mọi góc $0^\circ < \alpha < 180^\circ$.
   - $\cos\alpha > 0$ nếu $\alpha$ nhọn; $\cos\alpha < 0$ nếu $\alpha$ tù.
3. Tính $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$ và $\cot\alpha = \frac{1}{\tan\alpha}$.

---

#### Bài toán 2
Cho biết $\sin\alpha = \frac{3}{5}$ với $90^\circ < \alpha < 180^\circ$.
1. Tính $\cos\alpha, \tan\alpha$ và $\cot\alpha$.
2. Tính giá trị của biểu thức $P = \frac{2\sin\alpha + 3\cos\alpha}{\cos\alpha - \sin\alpha}$.

**Lời giải chi tiết:**

1. Ta có:
   $$\cos^2\alpha = 1 - \sin^2\alpha = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$$
   Vì $90^\circ < \alpha < 180^\circ$ ($\alpha$ là góc tù) nên $\cos\alpha < 0$.  
   Do đó:
   $$\cos\alpha = -\sqrt{\frac{16}{25}} = -\frac{4}{5}$$
   Từ đó suy ra:
   $$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{3}{5}}{-\frac{4}{5}} = -\frac{3}{4}$$
   $$\cot\alpha = \frac{1}{\tan\alpha} = -\frac{4}{3}$$

2. Thay $\sin\alpha = \frac{3}{5}$ và $\cos\alpha = -\frac{4}{5}$ vào biểu thức $P$:
   $$P = \frac{2\left(\frac{3}{5}\right) + 3\left(-\frac{4}{5}\right)}{-\frac{4}{5} - \frac{3}{5}} = \frac{\frac{6}{5} - \frac{12}{5}}{-\frac{7}{5}} = \frac{-\frac{6}{5}}{-\frac{7}{5}} = \frac{6}{7}$$

---

### Dạng 3: Rút gọn biểu thức lượng giác & Chứng minh đẳng thức

#### Phương pháp:
- Sử dụng các hằng đẳng thức cơ bản: $\sin^2\alpha + \cos^2\alpha = 1, \tan\alpha \cot\alpha = 1, 1 + \tan^2\alpha = \frac{1}{\cos^2\alpha}$.
- Đưa tất cả về $\sin$ và $\cos$ khi biểu thức chứa $\tan, \cot$.
- Áp dụng các hằng đẳng thức đáng nhớ đại số: $a^2 - b^2, (a \pm b)^2, a^3 \pm b^3$.

---

#### Bài toán 3
Rút gọn biểu thức lượng giác sau:
$$M = \frac{1 - \cos^2\alpha}{\sin\alpha \cdot \cos\alpha} - \tan\alpha \quad (0^\circ < \alpha < 180^\circ, \alpha \ne 90^\circ)$$
và chứng minh đẳng thức:
$$\sin^4\alpha + \cos^4\alpha = 1 - 2\sin^2\alpha \cos^2\alpha$$

**Lời giải chi tiết:**

1. **Rút gọn biểu thức $M$:**
   Ta biết $1 - \cos^2\alpha = \sin^2\alpha$. Thay vào:
   $$M = \frac{\sin^2\alpha}{\sin\alpha \cdot \cos\alpha} - \tan\alpha = \frac{\sin\alpha}{\cos\alpha} - \tan\alpha = \tan\alpha - \tan\alpha = 0$$

2. **Chứng minh đẳng thức:**
   Biến đổi vế trái bằng cách thêm bớt:
   $$\text{VT} = \sin^4\alpha + \cos^4\alpha = (\sin^2\alpha)^2 + (\cos^2\alpha)^2$$
   $$= (\sin^2\alpha + \cos^2\alpha)^2 - 2\sin^2\alpha \cos^2\alpha$$
   Vì $\sin^2\alpha + \cos^2\alpha = 1$, ta có:
   $$\text{VT} = 1^2 - 2\sin^2\alpha \cos^2\alpha = 1 - 2\sin^2\alpha \cos^2\alpha = \text{VP (đpcm)}$$

---

### Dạng 4: Cho $\tan\alpha$ hoặc $\sin\alpha + \cos\alpha$, tính giá trị biểu thức phân thức

#### Phương pháp:
- Nếu đề bài cho $\tan\alpha = k$: Chia cả tử và mẫu của biểu thức cho $\cos\alpha$ (nếu biểu thức bậc 1) hoặc $\cos^2\alpha$ (nếu biểu thức bậc 2 thuần nhất) để chuyển toàn bộ về $\tan\alpha$.
- Nếu đề bài cho $\sin\alpha + \cos\alpha = m$: Bình phương hai vế $(\sin\alpha + \cos\alpha)^2 = m^2 \iff 1 + 2\sin\alpha\cos\alpha = m^2 \Rightarrow \sin\alpha\cos\alpha = \frac{m^2 - 1}{2}$.

---

#### Bài toán 4
Cho $\tan\alpha = 3$. Tính giá trị của biểu thức:
$$Q = \frac{\sin^2\alpha - 2\sin\alpha\cos\alpha + 3\cos^2\alpha}{2\sin^2\alpha + \cos^2\alpha}$$

**Lời giải chi tiết:**

Vì $\tan\alpha = 3$ xác định nên $\cos\alpha \ne 0$.  
Chia cả tử và mẫu của phân thức $Q$ cho $\cos^2\alpha \ne 0$:
$$Q = \frac{\frac{\sin^2\alpha}{\cos^2\alpha} - 2\frac{\sin\alpha\cos\alpha}{\cos^2\alpha} + 3\frac{\cos^2\alpha}{\cos^2\alpha}}{2\frac{\sin^2\alpha}{\cos^2\alpha} + \frac{\cos^2\alpha}{\cos^2\alpha}}$$
$$Q = \frac{\tan^2\alpha - 2\tan\alpha + 3}{2\tan^2\alpha + 1}$$

Thay $\tan\alpha = 3$ vào biểu thức:
$$Q = \frac{3^2 - 2(3) + 3}{2(3^2) + 1} = \frac{9 - 6 + 3}{2(9) + 1} = \frac{6}{19}$$

---

## 6. Ứng dụng thực tế & Khoa học kỹ thuật

| Lĩnh vực | Ứng dụng cụ thể của Lượng giác góc tù ($0^\circ - 180^\circ$) |
| :--- | :--- |
| **Vật lý cơ học (Công cơ học)** | Công cơ học $A = F \cdot s \cdot \cos\alpha$. Khi kéo vật cùng chiều di chuyển ($\alpha < 90^\circ$), $\cos\alpha > 0 \Rightarrow$ công phát động. Khi phanh xe lực ma sát ngược chiều ($\alpha = 180^\circ$), $\cos 180^\circ = -1 \Rightarrow$ công cản $A = -F \cdot s < 0$. |
| **Đồ họa máy tính & Chiếu sáng (Shading)** | Mô hình chiếu sáng Lambert: Cường độ ánh sáng phản xạ trên bề mặt $I = I_0 \cdot \cos\theta$. Khi góc giữa pháp tuyến và tia sáng $\theta > 90^\circ$, bề mặt nằm trong bóng tối ($I = 0$). |
| **Hàng hải & Định vị GPS** | Xác định góc lệch hướng gió (Drift angle) và góc dạt của tàu biển khi gặp các luồng hải lưu xiên góc tù. |
| **Thiết kế mái dốc & Tấm pin mặt trời** | Tính hiệu suất hấp thụ quang năng theo góc nghiêng mặt trời: Góc tới của tia sáng có thể biến thiên từ góc nhọn sang góc tù theo thời gian trong ngày. |
| **Kỹ thuật robot & Cánh tay máy** | Tính toán động học ngược (Inverse Kinematics): Khớp nối khuỷu tay robot xoay trong phạm vi từ $0^\circ$ đến $180^\circ$ để định vị đầu gắp vật thể. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q1",
  "question": "Cho góc $\\alpha$ thỏa mãn $90° < \\alpha < 180°$. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "$\\sin\\alpha < 0$",
    "$\\cos\\alpha < 0$",
    "$\\tan\\alpha > 0$",
    "$\\cot\\alpha > 0$"
  ],
  "answer": 1,
  "explanation": "Khi $\\alpha$ là góc tù ($90° < \\alpha < 180°$), điểm $M$ biểu diễn nằm trong góc phần tư thứ II có hoành độ âm nên $\\cos\\alpha < 0$. Tung độ dương nên $\\sin\\alpha > 0$, do đó $\\tan\\alpha < 0$ và $\\cot\\alpha < 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q2",
  "question": "Giá trị của $\\cos 120°$ bằng:",
  "options": [
    "$\\frac{1}{2}$",
    "$-\\frac{1}{2}$",
    "$\\frac{\\sqrt{3}}{2}$",
    "$-\\frac{\\sqrt{3}}{2}$"
  ],
  "answer": 1,
  "explanation": "Áp dụng công thức góc bù: $\\cos 120° = -\\cos(180° - 120°) = -\\cos 60° = -\\frac{1}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q3",
  "question": "Giá trị của $\\sin 135°$ bằng:",
  "options": [
    "$\\frac{\\sqrt{2}}{2}$",
    "$-\\frac{\\sqrt{2}}{2}$",
    "$\\frac{1}{2}$",
    "$-\\frac{1}{2}$"
  ],
  "answer": 0,
  "explanation": "Áp dụng tính chất sin bù: $\\sin 135° = \\sin(180° - 135°) = \\sin 45° = \\frac{\\sqrt{2}}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q4",
  "question": "Tính giá trị của biểu thức $P = \\sin 30° + \\cos 60° - \\cos 180°$:",
  "options": [
    "1",
    "0",
    "2",
    "-1"
  ],
  "answer": 2,
  "explanation": "Ta có: $\\sin 30° = \\frac{1}{2}$, $\\cos 60° = \\frac{1}{2}$, $\\cos 180° = -1$. Thay vào: $P = \\frac{1}{2} + \\frac{1}{2} - (-1) = 1 + 1 = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q5",
  "question": "Cho hai góc bù nhau $\\alpha$ và $\\beta$ (tức $\\alpha + \\beta = 180°$). Khẳng định nào sau đây là SAI?",
  "options": [
    "$\\sin\\alpha = \\sin\\beta$",
    "$\\cos\\alpha = -\\cos\\beta$",
    "$\\tan\\alpha = -\\tan\\beta$ (với $\\alpha, \\beta \\ne 90°$)",
    "$\\cot\\alpha = \\cot\\beta$ (với $\\alpha, \\beta \\ne 0°, 180°$)"
  ],
  "answer": 3,
  "explanation": "Hai góc bù nhau thì $\\cot\\alpha = -\\cot\\beta$. Do đó khẳng định $\\cot\\alpha = \\cot\\beta$ là SAI."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q6",
  "question": "Cho $\\cos\\alpha = -\\frac{5}{13}$ với $0° < \\alpha < 180°$. Giá trị của $\\sin\\alpha$ là:",
  "options": [
    "$\\frac{12}{13}$",
    "$-\\frac{12}{13}$",
    "$\\frac{8}{13}$",
    "$\\pm \\frac{12}{13}$"
  ],
  "answer": 0,
  "explanation": "Ta có $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\frac{25}{169} = \\frac{144}{169}$. Vì với mọi $\\alpha \\in (0°; 180°)$ thì $\\sin\\alpha > 0$, nên $\\sin\\alpha = \\frac{12}{13}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q7",
  "question": "Đẳng thức nào sau đây là ĐÚNG với mọi góc $\\alpha$ ($0° \\le \\alpha \\le 180°$, điều kiện xác định thỏa mãn)?",
  "options": [
    "$\\sin^2\\alpha - \\cos^2\\alpha = 1$",
    "$\\tan\\alpha \\cdot \\cot\\alpha = -1$",
    "$1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}$",
    "$1 + \\cot^2\\alpha = \\frac{1}{\\cos^2\\alpha}$"
  ],
  "answer": 2,
  "explanation": "Hệ thức đúng là $1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}$. Các phương án còn lại đều sai (phải là $\\sin^2 + \\cos^2 = 1, \\tan \\cdot \\cot = 1, 1 + \\cot^2 = \\frac{1}{\\sin^2}$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q8",
  "question": "Giá trị của biểu thức $T = \\tan 20° \\cdot \\tan 70° + \\cos^2 50° + \\cos^2 40°$ là:",
  "options": [
    "1",
    "2",
    "0",
    "3"
  ],
  "answer": 1,
  "explanation": "Vì $20° + 70° = 90° \\Rightarrow \\tan 70° = \\cot 20° \\Rightarrow \\tan 20° \\cot 20° = 1$. Lại có $40° + 50° = 90° \\Rightarrow \\cos 40° = \\sin 50° \\Rightarrow \\cos^2 50° + \\sin^2 50° = 1$. Do đó $T = 1 + 1 = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q9",
  "question": "Cho $\\tan\\alpha = -2$. Giá trị của biểu thức $M = \\frac{\\sin\\alpha + \\cos\\alpha}{\\sin\\alpha - \\cos\\alpha}$ bằng:",
  "options": [
    "$\\frac{1}{3}$",
    "$-\\frac{1}{3}$",
    "$3$",
    "$-3$"
  ],
  "answer": 0,
  "explanation": "Chia cả tử và mẫu cho $\\cos\\alpha \\ne 0$: $M = \\frac{\\tan\\alpha + 1}{\\tan\\alpha - 1} = \\frac{-2 + 1}{-2 - 1} = \\frac{-1}{-3} = \\frac{1}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c3_b5_q10",
  "question": "Điểm $M$ trên nửa đường tròn đơn vị có tọa độ là $\\left(-\\frac{\\sqrt{3}}{2}; \\frac{1}{2}\\right)$. Góc $\\alpha = \\widehat{xOM}$ có số đo bằng:",
  "options": [
    "30°",
    "60°",
    "120°",
    "150°"
  ],
  "answer": 3,
  "explanation": "Ta có $\\cos\\alpha = -\\frac{\\sqrt{3}}{2}$ và $\\sin\\alpha = \\frac{1}{2}$. Vì hoành độ âm và tung độ bằng $\\frac{1}{2}$ nên $\\alpha = 180° - 30° = 150°$."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Chứng minh biểu thức độc lập với góc $\alpha$)
Chứng minh rằng giá trị của biểu thức sau không phụ thuộc vào góc $\alpha$:
$$A = 2(\sin^6\alpha + \cos^6\alpha) - 3(\sin^4\alpha + \cos^4\alpha)$$

*Hướng dẫn giải:*
- Ta có:
  $$\sin^4\alpha + \cos^4\alpha = (\sin^2\alpha + \cos^2\alpha)^2 - 2\sin^2\alpha \cos^2\alpha = 1 - 2\sin^2\alpha \cos^2\alpha$$
- Khai triển bậc 6 bằng hằng đẳng thức $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$:
  $$\sin^6\alpha + \cos^6\alpha = (\sin^2\alpha + \cos^2\alpha)(\sin^4\alpha - \sin^2\alpha \cos^2\alpha + \cos^4\alpha)$$
  $$= 1 \cdot (1 - 2\sin^2\alpha \cos^2\alpha - \sin^2\alpha \cos^2\alpha) = 1 - 3\sin^2\alpha \cos^2\alpha$$
- Thay vào biểu thức $A$:
  $$A = 2(1 - 3\sin^2\alpha \cos^2\alpha) - 3(1 - 2\sin^2\alpha \cos^2\alpha)$$
  $$= 2 - 6\sin^2\alpha \cos^2\alpha - 3 + 6\sin^2\alpha \cos^2\alpha = -1$$
  Biểu thức $A$ luôn bằng $-1$ với mọi góc $\alpha$, do đó độc lập với $\alpha$.

---

### Bài tập 2 (Vật lý - Lực kéo và góc tù)
Một chiếc xe chở hàng khối lượng $m = 500$ kg được kéo trượt trên một mặt sàn phẳng nằm ngang một quãng đường $s = 20$ m. Người ta tác dụng một lực hãm $F = 400$ N tạo với phương chuyển động của xe một góc $\alpha = 150^\circ$.
1. Tính công của lực hãm thực hiện lên chiếc xe. Cho biết đây là công phát động hay công cản?
2. Nếu muốn lực hãm triệt tiêu hoàn toàn công (tức $A = 0$) thì góc kéo $\alpha$ phải bằng bao nhiêu?

*Hướng dẫn giải:*
1. Công cơ học được tính bởi công thức:
   $$A = F \cdot s \cdot \cos\alpha = 400 \cdot 20 \cdot \cos 150^\circ$$
   Ta có $\cos 150^\circ = -\frac{\sqrt{3}}{2}$, do đó:
   $$A = 8000 \cdot \left(-\frac{\sqrt{3}}{2}\right) = -4000\sqrt{3} \approx -6928,2 \text{ (J)}$$
   Vì $A < 0$, đây là **công cản**, có tác dụng làm giảm động năng của xe.
2. Để công $A = 0$, ta cần $\cos\alpha = 0$.  
   Trong khoảng $0^\circ \le \alpha \le 180^\circ$, điều này xảy ra khi $\alpha = 90^\circ$ (lực tác dụng vuông góc với phương chuyển động).
