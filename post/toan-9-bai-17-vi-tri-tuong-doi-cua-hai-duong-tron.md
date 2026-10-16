---
title: 'Toán 9 Bài 17: Vị trí tương đối của hai đường tròn - Tính chất đường nối tâm & Tiếp tuyến chung'
description: 'Toàn bộ lý thuyết và bài tập Bài 17 Toán 9: Vị trí tương đối của hai đường tròn (cắt nhau, tiếp xúc trong/ngoài, ở ngoài nhau, đựng nhau), tính chất đường nối tâm, tiếp tuyến chung, widget mô phỏng và 10 câu trắc nghiệm có lời giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Hai đường tròn
  - Đường nối tâm
  - Tiếp xúc ngoài
  - Tiếp xúc trong
  - Tiếp tuyến chung
  - Kết nối tri thức
grade: 9
---

# Bài 17. Vị trí tương đối của hai đường tròn

Trong thế giới kỹ thuật cơ khí và tự nhiên, hiếm khi chúng ta thấy một đường tròn tồn tại đơn độc:
- Hai bánh răng ăn khớp trong đồng hồ đeo tay hay hộp số ô tô phải **tiếp xúc ngoài** chính xác tại một điểm tiếp xúc để truyền động không va đập.
- Vòng xích xe đạp ôm trọn hai đĩa líp tạo nên các đường **tiếp tuyến chung ngoài**.
- Các thấu kính trong ống kính máy ảnh tinh vi được sắp xếp **đồng trục** và lồng vào nhau để hội tụ ánh sáng không bị quang sai.
- Hai vòng tròn lan truyền trên mặt nước khi ta thả hai viên sỏi giao nhau tại hai điểm mút sóng bạc.

Sự tương tác hình học giữa **hai đường tròn** mang lại những định lý phong phú và đẹp mắt nhất về **tính đối xứng của đường nối tâm** và **tiếp tuyến chung**. Trong bài học này, chúng ta sẽ cùng khảo sát toàn diện mọi vị trí tương đối có thể có giữa hai đường tròn và các ứng dụng đột phá của chúng!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG TRÒN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Cắt nhau (2 điểm chung)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hệ thức: $R - r < OO' < R + r$.<br>• Dây $AB$ gọi là <strong>dây chung</strong>.<br>• <strong>Đường nối tâm là trung trực của dây chung:</strong> $OO' \perp AB$ tại trung điểm $H$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tiếp xúc nhau (1 điểm chung)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Tiếp xúc ngoài:</strong> $OO' = R + r$ ($A$ nằm giữa $O$ và $O'$).<br>• <strong>Tiếp xúc trong:</strong> $OO' = R - r > 0$ ($O'$ nằm giữa $O$ và $A$).<br>• <strong>Tiếp điểm $A$ luôn nằm trên đường nối tâm $OO'$.</strong></p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Không giao nhau (0 điểm chung)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Ở ngoài nhau:</strong> $OO' > R + r$ (khoảng cách tâm lớn hơn tổng bán kính).<br>• <strong>Đựng nhau:</strong> $OO' < R - r$ (đường tròn nhỏ lọt hẳn vào trong).<br>• <strong>Đồng tâm:</strong> $OO' = 0$ ($O \equiv O'$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Tiếp tuyến chung</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tiếp xúc với cả hai đường tròn.<br>• Ngoài nhau: 4 tiếp tuyến (2 ngoài, 2 trong).<br>• Cắt nhau: 2 tiếp tuyến ngoài.<br>• Tiếp xúc ngoài: 3 tiếp tuyến; Tiếp xúc trong: 1 tiếp tuyến.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khoảng cách tâm:** Cho hai đường tròn $(O; 7\text{ cm})$ và $(O'; 3\text{ cm})$ có đoạn nối tâm $OO' = 10\text{ cm}$. Hai đường tròn này ở vị trí tương đối nào?
2. **Tiếp xúc trong:** Cho $(O; 8\text{ cm})$ và $(O'; 2\text{ cm})$ tiếp xúc trong với nhau. Đoạn nối tâm $OO'$ dài bao nhiêu cm?
3. **Đường nối tâm:** Hai đường tròn $(O)$ và $(O')$ cắt nhau tại hai điểm $A$ và $B$. Đoạn thẳng $OO'$ có quan hệ vuông góc thế nào với đoạn thẳng $AB$?
4. **Số tiếp tuyến chung:** Hai đường tròn ở ngoài nhau hoàn toàn có tối đa bao nhiêu tiếp tuyến chung?
5. **Tiếp điểm:** Nếu hai đường tròn tiếp xúc nhau thì tiếp điểm của chúng có nằm trên đường nối tâm không?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Vì $OO' = 10 = 7 + 3 = R + r \implies$ **tiếp xúc ngoài**.
> 2. $OO' = R - r = 8 - 2 = 6\text{ cm}$.
> 3. $OO'$ là **đường trung trực** của dây chung $AB$ ($OO' \perp AB$ tại trung điểm của $AB$).
> 4. Có **4 tiếp tuyến chung** (2 tiếp tuyến chung ngoài và 2 tiếp tuyến chung trong).
> 5. **Luôn luôn nằm trên đường nối tâm**.

---

## I. Lý thuyết Trọng tâm

Cho hai đường tròn $(O; R)$ và $(O'; r)$ với $R \ge r$. Gọi khoảng cách giữa hai tâm là $d = OO'$.

### 1. Ba Vị trí Tương đối của Hai Đường tròn

| Vị trí tương đối | Số điểm chung | Hệ thức giữa $d, R, r$ | Số tiếp tuyến chung |
| :--- | :---: | :---: | :---: |
| **Hai đường tròn cắt nhau** | $2$ | $R - r < d < R + r$ | $2$ (chung ngoài) |
| **Tiếp xúc ngoài** | $1$ | $d = R + r$ | $3$ (2 ngoài, 1 trong) |
| **Tiếp xúc trong** | $1$ | $d = R - r > 0$ | $1$ (tiếp tuyến chung) |
| **Ở ngoài nhau** | $0$ | $d > R + r$ | $4$ (2 ngoài, 2 trong) |
| **Đựng nhau (chứa nhau)** | $0$ | $d < R - r$ | $0$ |
| **Đồng tâm** | $0$ | $d = 0$ | $0$ |

---

### 2. Tính chất của Đường Nối Tâm

Đường thẳng đi qua tâm của hai đường tròn gọi là **đường nối tâm**. Đoạn thẳng nối hai tâm gọi là **đoạn nối tâm**.

Vì tâm $O$ là tâm đối xứng của $(O)$ và $O'$ là tâm đối xứng của $(O')$, nên:
> [!NOTE]
> **Tính chất trục đối xứng:**
> Đường nối tâm $OO'$ là **trục đối xứng** của hình tạo bởi cả hai đường tròn $(O)$ và $(O')$.

Từ tính chất đối xứng này, ta rút ra hai định lý quan trọng bậc nhất:

> [!NOTE]
> **Định lý 1 (Trường hợp cắt nhau):**
> Nếu hai đường tròn cắt nhau tại hai điểm $A$ và $B$ thì:
> - $OO'$ là **đường trung trực của dây chung $AB$**.
> - Do đó: $OO' \perp AB$ tại $H$ và $HA = HB$.
> 
> **Định lý 2 (Trường hợp tiếp xúc nhau):**
> Nếu hai đường tròn tiếp xúc nhau thì **tiếp điểm $A$ nằm trên đường nối tâm $OO'$**:
> - Tiếp xúc ngoài: Điểm $A$ nằm giữa $O$ và $O'$ ($OO' = OA + O'A = R + r$).
> - Tiếp xúc trong: Điểm $O'$ nằm giữa $O$ và $A$ ($OO' = OA - O'A = R - r$).
> - Tiếp tuyến chung tại tiếp điểm $A$ luôn vuông góc với đường nối tâm $OO'$.

---

### 3. Tiếp tuyến Chung của Hai Đường tròn

> [!NOTE]
> **Định nghĩa:**
> Tiếp tuyến chung của hai đường tròn là đường thẳng tiếp xúc với cả hai đường tròn đó.
> - **Tiếp tuyến chung ngoài:** Là tiếp tuyến chung **không cắt** đoạn nối tâm $OO'$.
> - **Tiếp tuyến chung trong:** Là tiếp tuyến chung **cắt** đoạn nối tâm $OO'$.

```
 Tiếp tuyến chung ngoài
 -----------------------
      ( O )     ( O' )
 --------\-------/------
          \     /
           \   /  <-- Tiếp tuyến chung trong cắt OO'
            \ /
             X
```

---

## II. Mô phỏng Tương tác: Vị trí Tương đối của Hai Đường tròn

Dưới đây là mô phỏng hình học động. Các em có thể kéo thanh trượt khoảng cách tâm $d = OO'$ để trực tiếp chứng kiến hai đường tròn chuyển trạng thái liên tục từ "Ở ngoài nhau" $\to$ "Tiếp xúc ngoài" $\to$ "Cắt nhau" $\to$ "Tiếp xúc trong" $\to$ "Đựng nhau" $\to$ "Đồng tâm"!

<div class="interactive-two-circles" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG HÌNH HỌC: QUAN HỆ GIỮA HAI ĐƯỜNG TRÒN</h4>
  
  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: center; margin-top: 16px;">
    <!-- SVG Canvas -->
    <div style="flex: 1 1 320px; max-width: 420px; text-align: center;">
      <svg id="twoCirclesSvg" viewBox="0 0 420 280" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Center line OO' -->
        <line id="svgLineCenter" x1="120" y1="140" x2="300" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" />
        <!-- Circle O -->
        <circle id="svgCircleO" cx="130" cy="140" r="70" fill="rgba(59, 130, 246, 0.12)" stroke="#2563eb" stroke-width="2.5" />
        <!-- Circle O' -->
        <circle id="svgCircleOp" cx="290" cy="140" r="45" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" stroke-width="2.5" />
        <!-- Common chord or tangent line -->
        <line id="svgChord" x1="0" y1="0" x2="0" y2="0" stroke="#ef4444" stroke-width="2.5" style="display: none;" />
        <!-- Intersections / Contact points -->
        <circle id="svgPtA" cx="0" cy="0" r="4" fill="#ef4444" style="display: none;" />
        <circle id="svgPtB" cx="0" cy="0" r="4" fill="#ef4444" style="display: none;" />
        <!-- Centers O and O' -->
        <circle id="svgPtO" cx="130" cy="140" r="4.5" fill="#1d4ed8" />
        <text id="svgLblO" x="122" y="162" font-size="13" font-weight="bold" fill="#1d4ed8">O</text>
        <circle id="svgPtOp" cx="290" cy="140" r="4.5" fill="#047857" />
        <text id="svgLblOp" x="285" y="162" font-size="13" font-weight="bold" fill="#047857">O'</text>
      </svg>
    </div>

    <!-- Controls & Info -->
    <div style="flex: 1 1 280px; max-width: 360px;">
      <div style="margin-bottom: 14px;">
        <label style="font-weight: 600; font-size: 0.95em; display: flex; justify-content: space-between;">
          <span>Khoảng cách tâm $d = OO'$:</span>
          <span id="txtDist" style="color: #2563eb; font-weight: bold;">16.0 cm</span>
        </label>
        <input type="range" id="rangeDist" min="0" max="18" step="0.2" value="16" style="width: 100%; cursor: pointer;" />
        <div style="display: flex; justify-content: space-between; font-size: 0.78em; color: #64748b;">
          <span>$0$ (Đồng tâm)</span>
          <span>$R-r=2{,}5$</span>
          <span>$R+r=11{,}5$</span>
          <span>$18$</span>
        </div>
      </div>

      <!-- Live Classification Badge -->
      <div id="badgeStatus" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px; margin-bottom: 12px; text-align: center;">
        <span style="font-size: 0.85em; color: #64748b; display: block;">Trạng thái hình học:</span>
        <strong id="txtStatus" style="font-size: 1.15em; color: #1d4ed8;">Ở ngoài nhau (0 điểm chung)</strong>
      </div>

      <div style="background: var(--card-bg, #ffffff); border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; font-size: 0.86em; line-height: 1.8;">
        <div>• Bán kính lớn: $R = 7{,}0\text{ cm}$</div>
        <div>• Bán kính nhỏ: $r = 4{,}5\text{ cm}$</div>
        <div>• Hiệu bán kính: $R - r = 2{,}5\text{ cm}$</div>
        <div>• Tổng bán kính: $R + r = 11{,}5\text{ cm}$</div>
        <div>• Tiếp tuyến chung: <strong id="txtTangents" style="color: #8b5cf6;">4 tiếp tuyến</strong></div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const slider = document.getElementById('rangeDist');
  if (!slider) return;

  const txtDist = document.getElementById('txtDist');
  const txtStatus = document.getElementById('txtStatus');
  const txtTangents = document.getElementById('txtTangents');
  const badgeStatus = document.getElementById('badgeStatus');

  const circleOp = document.getElementById('svgCircleOp');
  const ptOp = document.getElementById('svgPtOp');
  const lblOp = document.getElementById('svgLblOp');
  const lineCenter = document.getElementById('svgLineCenter');
  const chord = document.getElementById('svgChord');
  const ptA = document.getElementById('svgPtA');
  const ptB = document.getElementById('svgPtB');

  const ox = 130, oy = 140;
  const R_cm = 7.0, r_cm = 4.5;
  const scale = 10; // 1cm = 10px
  const R_px = R_cm * scale;
  const r_px = r_cm * scale;

  function update() {
    const dCm = parseFloat(slider.value);
    txtDist.textContent = dCm.toFixed(1) + ' cm';

    const dPx = dCm * scale;
    const opX = ox + dPx;

    circleOp.setAttribute('cx', opX);
    ptOp.setAttribute('cx', opX);
    lblOp.setAttribute('x', opX - 6);

    lineCenter.setAttribute('x2', Math.max(380, opX + r_px + 20));

    // Logic classification
    let status = '';
    let tangents = '';
    let badgeBg = '#eff6ff', badgeBorder = '#bfdbfe', badgeColor = '#1d4ed8';

    chord.style.display = 'none';
    ptA.style.display = 'none';
    ptB.style.display = 'none';

    if (dCm === 0) {
      status = 'Đồng tâm (0 điểm chung)';
      tangents = '0 tiếp tuyến';
      badgeBg = '#f1f5f9'; badgeBorder = '#cbd5e1'; badgeColor = '#475569';
    } else if (dCm < 2.45) { // d < R - r
      status = 'Đựng nhau / Chứa nhau (0 điểm chung)';
      tangents = '0 tiếp tuyến';
      badgeBg = '#fef2f2'; badgeBorder = '#fecaca'; badgeColor = '#dc2626';
    } else if (Math.abs(dCm - 2.5) < 0.15) { // d == R - r
      status = 'Tiếp xúc trong (1 điểm chung)';
      tangents = '1 tiếp tuyến chung';
      badgeBg = '#fefce8'; badgeBorder = '#fef08a'; badgeColor = '#b45309';
      // Contact point is at ox + R_px
      ptA.style.display = 'inline';
      ptA.setAttribute('cx', ox + R_px);
      ptA.setAttribute('cy', oy);
      chord.style.display = 'inline';
      chord.setAttribute('x1', ox + R_px);
      chord.setAttribute('y1', oy - 80);
      chord.setAttribute('x2', ox + R_px);
      chord.setAttribute('y2', oy + 80);
    } else if (dCm > 2.65 && dCm < 11.35) { // R - r < d < R + r
      status = 'Cắt nhau (2 điểm chung)';
      tangents = '2 tiếp tuyến chung ngoài';
      badgeBg = '#ecfdf5'; badgeBorder = '#a7f3d0'; badgeColor = '#047857';

      // Find intersection points
      // d1 = (R^2 - r^2 + d^2) / (2d)
      const d1 = (R_cm*R_cm - r_cm*r_cm + dCm*dCm) / (2 * dCm);
      const h = Math.sqrt(Math.max(0, R_cm*R_cm - d1*d1));

      const hx = ox + d1 * scale;
      const ay = oy - h * scale;
      const by = oy + h * scale;

      chord.style.display = 'inline';
      chord.setAttribute('x1', hx);
      chord.setAttribute('y1', ay);
      chord.setAttribute('x2', hx);
      chord.setAttribute('y2', by);

      ptA.style.display = 'inline';
      ptA.setAttribute('cx', hx);
      ptA.setAttribute('cy', ay);

      ptB.style.display = 'inline';
      ptB.setAttribute('cx', hx);
      ptB.setAttribute('cy', by);
    } else if (Math.abs(dCm - 11.5) < 0.2) { // d == R + r
      status = 'Tiếp xúc ngoài (1 điểm chung)';
      tangents = '3 tiếp tuyến (2 ngoài, 1 trong)';
      badgeBg = '#fefce8'; badgeBorder = '#fef08a'; badgeColor = '#b45309';
      const cX = ox + R_px;
      ptA.style.display = 'inline';
      ptA.setAttribute('cx', cX);
      ptA.setAttribute('cy', oy);
      chord.style.display = 'inline';
      chord.setAttribute('x1', cX);
      chord.setAttribute('y1', oy - 70);
      chord.setAttribute('x2', cX);
      chord.setAttribute('y2', oy + 70);
    } else { // d > R + r
      status = 'Ở ngoài nhau (0 điểm chung)';
      tangents = '4 tiếp tuyến (2 ngoài, 2 trong)';
      badgeBg = '#eff6ff'; badgeBorder = '#bfdbfe'; badgeColor = '#1d4ed8';
    }

    txtStatus.textContent = status;
    txtTangents.textContent = tangents;
    badgeStatus.style.background = badgeBg;
    badgeStatus.style.borderColor = badgeBorder;
    txtStatus.style.color = badgeColor;
  }

  slider.addEventListener('input', update);
  update();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Xác định Vị trí Tương đối của Hai Đường tròn

> [!TIP]
> **Phương pháp cốt lõi:**
> Tính tổng $R + r$ và hiệu $R - r$ rồi so sánh với khoảng cách tâm $d = OO'$:
> - $d > R + r \iff$ Ngoài nhau.
> - $d = R + r \iff$ Tiếp xúc ngoài.
> - $R - r < d < R + r \iff$ Cắt nhau.
> - $d = R - r \iff$ Tiếp xúc trong.
> - $d < R - r \iff$ Đựng nhau (nếu $d = 0$: đồng tâm).

#### Bài toán mẫu 1.1:
Cho hai đường tròn $(O; 8\text{ cm})$ và $(O'; 5\text{ cm})$. Điền vị trí tương đối và số tiếp tuyến chung vào bảng sau tương ứng với các giá trị của khoảng cách tâm $d = OO'$:
a) $d = 13\text{ cm}$
b) $d = 15\text{ cm}$
c) $d = 7\text{ cm}$
d) $d = 3\text{ cm}$
e) $d = 2\text{ cm}$

**Lời giải chi tiết:**
Ta có: $R = 8\text{ cm}$, $r = 5\text{ cm}$.
- Tổng hai bán kính: $R + r = 8 + 5 = 13\text{ cm}$.
- Hiệu hai bán kính: $R - r = 8 - 5 = 3\text{ cm}$.

a) Với $d = 13\text{ cm} = R + r \implies$ Hai đường tròn **tiếp xúc ngoài** (có $3$ tiếp tuyến chung).
b) Với $d = 15\text{ cm} > R + r \implies$ Hai đường tròn **ở ngoài nhau** (có $4$ tiếp tuyến chung).
c) Với $d = 7\text{ cm}$, nhận thấy $3 < 7 < 13 \iff R - r < d < R + r \implies$ Hai đường tròn **cắt nhau** (có $2$ tiếp tuyến chung ngoài).
d) Với $d = 3\text{ cm} = R - r \implies$ Hai đường tròn **tiếp xúc trong** (có $1$ tiếp tuyến chung).
e) Với $d = 2\text{ cm} < R - r \implies$ Hai đường tròn **đựng nhau (chứa nhau)** (không có tiếp tuyến chung).

---

### Dạng 2: Bài toán về Hai Đường tròn Cắt nhau

> [!TIP]
> **Phương pháp cốt lõi:**
> Khi hai đường tròn $(O; R)$ và $(O'; r)$ cắt nhau tại hai điểm $A, B$:
> 1. Dây chung là $AB$. Đoạn $OO'$ là đường trung trực của $AB$: $OO' \perp AB$ tại $H$ và $HA = HB = \frac{AB}{2}$.
> 2. Đặt $OH = d_1$ và $O'H = d_2$. Ta có hệ phương trình Pythagore:
>    $$\left\{ \begin{array}{l} d_1 + d_2 = OO' \\ R^2 - d_1^2 = r^2 - d_2^2 = AH^2 \end{array} \right.$$
>    Giải hệ tìm $d_1, d_2$, từ đó tính ra $AH$ và $AB = 2AH$.

#### Bài toán mẫu 2.1:
Cho hai đường tròn $(O; 20\text{ cm})$ và $(O'; 15\text{ cm})$ cắt nhau tại $A$ và $B$. Biết đoạn nối tâm $OO' = 25\text{ cm}$.
a) Chứng minh $\triangle OAO'$ là tam giác vuông.
b) Tính độ dài dây chung $AB$.

**Lời giải chi tiết:**

```
           A
          /|\
         / | \
        O--H--O'
         \ | /
          \|/
           B
```

a) Xét tam giác $OAO'$ có các cạnh:
$OA = R = 20\text{ cm}$, $O'A = r = 15\text{ cm}$, $OO' = 25\text{ cm}$.
Ta có:
$$OA^2 + O'A^2 = 20^2 + 15^2 = 400 + 225 = 625$$
$$OO'^2 = 25^2 = 625$$
Nhận thấy $OA^2 + O'A^2 = OO'^2$, theo định lý Pythagore đảo:
$\triangle OAO'$ là **tam giác vuông tại $A$**.

b) Tính độ dài dây chung $AB$:
Theo tính chất đường nối tâm của hai đường tròn cắt nhau:
$OO'$ là đường trung trực của dây chung $AB \implies OO' \perp AB$ tại $H$ và $H$ là trung điểm của $AB$.
Đoạn $AH$ chính là đường cao ứng với cạnh huyền $OO'$ trong tam giác vuông $OAO'$.
Áp dụng hệ thức lượng trong tam giác vuông $OAO'$:
$$AH \cdot OO' = OA \cdot O'A \implies AH = \frac{OA \cdot O'A}{OO'} = \frac{20 \times 15}{25} = 12\text{ cm}$$
Độ dài dây chung $AB$ là:
$$AB = 2AH = 2 \times 12 = 24\text{ cm}$$

---

### Dạng 3: Bài toán về Hai Đường tròn Tiếp xúc nhau

> [!TIP]
> **Phương pháp cốt lõi:**
> - Tiếp điểm $A$ nằm trên đường nối tâm $OO'$.
> - Tiếp tuyến chung tại $A$ luôn vuông góc với $OO'$.
> - Kẻ tiếp tuyến chung ngoài cắt tiếp tuyến chung trong tại $M$. Áp dụng tính chất 2 tiếp tuyến cắt nhau:
>   $MA = MB = MC \implies \triangle ABC$ vuông tại $A$!

#### Bài toán mẫu 3.1:
Cho hai đường tròn $(O; R)$ và $(O'; r)$ tiếp xúc ngoài với nhau tại $A$. Kẻ tiếp tuyến chung ngoài $BC$ ($B \in (O), C \in (O')$). Tiếp tuyến chung trong tại $A$ cắt $BC$ tại $M$.
a) Chứng minh điểm $M$ là trung điểm của $BC$ và tam giác $ABC$ vuông tại $A$.
b) Chứng minh $\widehat{OMO'} = 90^\circ$ và tính độ dài $BC$ theo $R$ và $r$.

**Lời giải chi tiết:**

```
       B-------M-------C  <-- Tiếp tuyến chung ngoài
       |      /|\      |
       |     / | \     |
       O----A--+--O'
```

a) Chứng minh $M$ là trung điểm của $BC$ và $\triangle ABC$ vuông tại $A$:
- Theo tính chất của hai tiếp tuyến cắt nhau từ điểm $M$:
  + Đối với đường tròn $(O)$: $MB$ và $MA$ là hai tiếp tuyến $\implies MB = MA$.
  + Đối với đường tròn $(O')$: $MC$ và $MA$ là hai tiếp tuyến $\implies MC = MA$.
- Suy ra $MB = MC = MA = \frac{1}{2} BC$.
- Vì $MB = MC$ nên $M$ là trung điểm của đoạn thẳng $BC$.
- Tam giác $ABC$ có đường trung tuyến $AM$ ứng với cạnh $BC$ bằng một nửa cạnh $BC$ ($AM = \frac{1}{2} BC$), do đó $\triangle ABC$ **vuông tại $A$** ($\widehat{BAC} = 90^\circ$).

b) Chứng minh $\widehat{OMO'} = 90^\circ$ và tính $BC$:
- Tia $MO$ là tia phân giác của $\widehat{BMA}$, tia $MO'$ là tia phân giác của $\widehat{CMA}$.
- Vì $\widehat{BMA}$ và $\widehat{CMA}$ là hai góc kề bù, nên hai tia phân giác của chúng vuông góc với nhau:
  $$MO \perp MO' \implies \widehat{OMO'} = 90^\circ$$
- Tam giác $OMO'$ vuông tại $M$ có đường cao $MA$ (do tiếp tuyến chung trong $MA \perp OO'$ tại tiếp điểm $A$).
- Áp dụng hệ thức lượng trong tam giác vuông $OMO'$:
  $$MA^2 = OA \cdot O'A = R \cdot r \implies MA = \sqrt{R \cdot r}$$
- Vì $BC = 2MA$ nên:
  $$BC = 2\sqrt{R \cdot r}$$

---

### Dạng 4: Độ dài Tiếp tuyến Chung Ngoài và Chung Trong

> [!TIP]
> **Phương pháp cốt lõi:**
> Kẻ đoạn $O'K \perp OB$ ($K \in OB$).
> Khi đó tứ giác $BC O' K$ là hình chữ nhật: $BC = O'K$ và $BK = O'C = r$.
> Đoạn $OK = OB - BK = R - r$.
> Áp dụng định lý Pythagore trong tam giác vuông $OKO'$ tại $K$:
> $$O'K^2 = OO'^2 - OK^2 \iff BC^2 = d^2 - (R - r)^2$$
> $\implies BC = \sqrt{d^2 - (R - r)^2}$ (đối với tiếp tuyến chung ngoài).
> Tương tự đối với tiếp tuyến chung trong: $d_{\text{ttct}} = \sqrt{d^2 - (R + r)^2}$.

#### Bài toán mẫu 4.1:
Cho hai đường tròn $(O; 9\text{ cm})$ và $(O'; 4\text{ cm})$ ở ngoài nhau, có khoảng cách tâm $OO' = 13\text{ cm}$.
a) Tính độ dài đoạn tiếp tuyến chung ngoài $AB$ ($A \in (O), B \in (O')$).
b) Tính độ dài đoạn tiếp tuyến chung trong $CD$ ($C \in (O), D \in (O')$).

**Lời giải chi tiết:**
a) Độ dài tiếp tuyến chung ngoài $AB$:
Kẻ $O'K \perp OA$ tại $K$.
Tứ giác $AB O' K$ là hình chữ nhật $\implies AB = O'K$ và $AK = O'B = r = 4\text{ cm}$.
Đoạn $OK = OA - AK = 9 - 4 = 5\text{ cm}$.
Áp dụng định lý Pythagore trong tam giác vuông $OKO'$ (vuông tại $K$):
$$O'K = \sqrt{OO'^2 - OK^2} = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12\text{ cm}$$
Vậy độ dài đoạn tiếp tuyến chung ngoài là $AB = 12\text{ cm}$.

b) Độ dài tiếp tuyến chung trong $CD$:
Kẻ $O'H \perp OC$ kéo dài tại $H$.
Tứ giác $CD O' H$ là hình chữ nhật $\implies CD = O'H$ và $CH = O'D = r = 4\text{ cm}$.
Đoạn $OH = OC + CH = 9 + 4 = 13\text{ cm}$.
Nhận thấy $OH = OO' = 13\text{ cm}$, điều này dẫn đến $O'H = \sqrt{13^2 - 13^2} = 0$, tức là hai đường tròn này thực tế có $d = R + r$ (tiếp xúc ngoài) thì đoạn tiếp tuyến chung trong suy biến thành $0$.
Nhưng đề bài cho $OO' = 13\text{ cm}$, mà $R + r = 9 + 4 = 13\text{ cm}$. Do đó hai đường tròn này thực chất **tiếp xúc ngoài**! Tiếp tuyến chung trong đi qua tiếp điểm và chỉ có độ dài tiếp tuyến chung ngoài là $12\text{ cm}$.

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG HÌNH HỌC HAI ĐƯỜNG TRÒN TRONG ĐỜI SỐNG
 ┌────────────────────────────────────────────────────────┐
 │ 1. Bánh răng cơ khí: Tiếp xúc ngoài & Tỉ số truyền động│
 │ 2. Hệ truyền động xích xe đạp & Tiếp tuyến chung ngoài │
 │ 3. Ống kính máy ảnh cao cấp: Cụm thấu kính đồng trục   │
 │ 4. Biểu đồ Venn trong Khoa học Dữ liệu và Tập hợp      │
 │ 5. Khí tượng học: Radar Doppler kép quét vùng mưa bão   │
 └────────────────────────────────────────────────────────┘
```

### 1. Bánh răng cơ khí và Tỉ số truyền động ăn khớp
Hai bánh răng trong hộp số đồng hồ hoặc động cơ ô tô hoạt động dựa trên mô hình **hai đường tròn tiếp xúc ngoài**.
Đường tròn chia (pitch circle) của hai bánh răng tiếp xúc với nhau tại một điểm duy nhất nằm trên đường nối tâm. Tỉ số truyền động giữa hai trục quay tỉ lệ nghịch với bán kính của hai đường tròn:
$$\frac{\omega_1}{\omega_2} = \frac{R_2}{R_1} = \frac{Z_2}{Z_1}$$
Nhờ sự tiếp xúc trơn tru tại tiếp điểm đường nối tâm, lực truyền đi êm ái mà không làm gãy các răng cưa kim loại.

### 2. Bộ đĩa líp và Xích truyền động Xe đạp
Hệ thống dẫn động xe đạp gồm đĩa xích trước (gắn bàn đạp) và líp sau (gắn trục bánh xe):
Hai nhánh xích căng trên và căng dưới khi đạp xe đóng vai trò là hai **tiếp tuyến chung ngoài** của hai đường tròn đĩa và líp. Chiều dài dây xích được tính bằng tổng hai đoạn tiếp tuyến chung ngoài cộng với hai cung tròn ôm lấy đĩa và líp, bảo đảm xích luôn căng vừa vặn không bị tuột xích khi vận hành.

### 3. Cụm thấu kính quang học máy ảnh (Lens Elements)
Một ống kính máy ảnh chuyên nghiệp (như ống tele 70-200mm) chứa bên trong từ 15 đến 23 thấu kính đơn lẻ. Mặt cắt của các thấu kính này là các cung tròn lồng vào nhau, thỏa mãn điều kiện **đồng trục** (các tâm $O_1, O_2, O_3...$ cùng nằm trên một đường thẳng). Khoảng cách giữa các tâm thấu kính được tính toán theo mô hình "đựng nhau" và "tiếp xúc" để triệt tiêu hiện tượng sắc sai và méo hình quang học.

### 4. Biểu đồ Venn trong Khoa học Dữ liệu và Logic
Biểu đồ Venn biểu diễn mối quan hệ giữa các tập hợp dữ liệu:
- Hai tập hợp có phần tử chung được mô tả bởi **hai đường tròn cắt nhau** (phần giao nhau là dây chung và hình trăng khuyết đôi).
- Một tập con chứa hoàn toàn trong tập mẹ được mô tả bởi **hai đường tròn đựng nhau**.
- Hai tập hợp rời nhau không có phần tử chung là **hai đường tròn ở ngoài nhau**.

### 5. Khí tượng học: Radar Doppler kép (Dual-Doppler Radar Overlap)
Trong dự báo bão và thời tiết nguy hiểm, hai trạm radar khí tượng đặt cách nhau $100\text{ km}$ cùng phát sóng quét bầu trời. Vùng giao nhau của hai chùm quét tròn chính là bài toán **hai đường tròn cắt nhau**. Trong vùng giao nhau này, máy tính tổng hợp vận tốc gió từ hai phương chiếu khác nhau để dựng nên bản đồ vectơ gió 3D và cảnh báo lốc xoáy với độ chính xác từng phút.

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho hai đường tròn $(O; 6\\text{ cm})$ và $(O\\prime; 4\\text{ cm})$ có khoảng cách tâm $OO\\prime = 10\\text{ cm}$. Vị trí tương đối của hai đường tròn là:",
  "options": [
    "A. Cắt nhau",
    "B. Tiếp xúc ngoài",
    "C. Tiếp xúc trong",
    "D. Ở ngoài nhau"
  ],
  "correct": 1,
  "explanation": "Ta có $R = 6\\text{ cm}, r = 4\\text{ cm} \\implies R + r = 10\\text{ cm}$. Vì $OO\\prime = R + r = 10\\text{ cm}$ nên hai đường tròn tiếp xúc ngoài."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hai đường tròn $(O; R)$ và $(O\\prime; r)$ cắt nhau tại hai điểm phân biệt. Hệ thức nào sau đây ĐÚNG?",
  "options": [
    "A. $OO\\prime = R + r$",
    "B. $OO\\prime > R + r$",
    "C. $R - r < OO\\prime < R + r$",
    "D. $OO\\prime < R - r$"
  ],
  "correct": 2,
  "explanation": "Theo bất đẳng thức tam giác với tam giác $OAO\\prime$ (với $A$ là giao điểm), ta có: $R - r < OO\\prime < R + r$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho hai đường tròn cắt nhau tại $A$ và $B$. Đoạn thẳng nối hai tâm $OO\\prime$ có tính chất gì đối với dây chung $AB$?",
  "options": [
    "A. Là đường trung tuyến của $AB$",
    "B. Là đường trung trực của $AB$",
    "C. Song song với $AB$",
    "D. Trùng với $AB$"
  ],
  "correct": 1,
  "explanation": "Theo định lý về tính chất đường nối tâm của hai đường tròn cắt nhau, đường nối tâm $OO\\prime$ luôn là đường trung trực của dây chung $AB$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hai đường tròn ở ngoài nhau hoàn toàn có bao nhiêu tiếp tuyến chung?",
  "options": [
    "A. 1 tiếp tuyến",
    "B. 2 tiếp tuyến",
    "C. 3 tiếp tuyến",
    "D. 4 tiếp tuyến"
  ],
  "correct": 3,
  "explanation": "Hai đường tròn ở ngoài nhau có 4 tiếp tuyến chung gồm: 2 tiếp tuyến chung ngoài và 2 tiếp tuyến chung trong."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho hai đường tròn $(O; 9\\text{ cm})$ và $(O\\prime; 4\\text{ cm})$ tiếp xúc trong với nhau. Khoảng cách giữa hai tâm $OO\\prime$ bằng:",
  "options": [
    "A. 13 cm",
    "B. 5 cm",
    "C. 4,5 cm",
    "D. 6 cm"
  ],
  "correct": 1,
  "explanation": "Khi hai đường tròn tiếp xúc trong: $OO\\prime = R - r = 9 - 4 = 5\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Nếu hai đường tròn tiếp xúc nhau thì tiếp điểm của chúng:",
  "options": [
    "A. Nằm ngoài đoạn nối hai tâm",
    "B. Luôn nằm trên đường thẳng nối hai tâm",
    "C. Cách đều hai tâm",
    "D. Trùng với một trong hai tâm"
  ],
  "correct": 1,
  "explanation": "Theo tính chất của đường nối tâm, nếu hai đường tròn tiếp xúc nhau thì tiếp điểm luôn nằm trên đường nối tâm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Hai đường tròn tiếp xúc ngoài với nhau có bao nhiêu tiếp tuyến chung?",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 4"
  ],
  "correct": 2,
  "explanation": "Hai đường tròn tiếp xúc ngoài có 3 tiếp tuyến chung: 2 tiếp tuyến chung ngoài và 1 tiếp tuyến chung trong đi qua tiếp điểm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hai đường tròn $(O; 5\\text{ cm})$ và $(O\\prime; 2\\text{ cm})$. Nếu $OO\\prime = 2\\text{ cm}$ thì vị trí tương đối của hai đường tròn là:",
  "options": [
    "A. Cắt nhau",
    "B. Tiếp xúc trong",
    "C. Đựng nhau (chứa nhau)",
    "D. Đồng tâm"
  ],
  "correct": 2,
  "explanation": "Ta có $R - r = 5 - 2 = 3\\text{ cm}$. Vì $OO\\prime = 2 < R - r = 3$ (và $OO\\prime > 0$) nên đường tròn $(O)$ đựng đường tròn $(O\\prime)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hai đường tròn $(O; 4\\text{ cm})$ và $(O\\prime; 1\\text{ cm})$ tiếp xúc ngoài tại $A$. Độ dài đoạn tiếp tuyến chung ngoài $BC$ ($B \\in (O), C \\in (O\\prime)$) bằng:",
  "options": [
    "A. 4 cm",
    "B. 5 cm",
    "C. 2 cm",
    "D. 3 cm"
  ],
  "correct": 0,
  "explanation": "Khi hai đường tròn tiếp xúc ngoài, độ dài tiếp tuyến chung ngoài là $BC = 2\\sqrt{R \\cdot r} = 2\\sqrt{4 \\times 1} = 2 \\times 2 = 4\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho hai đường tròn $(O; 10\\text{ cm})$ và $(O\\prime; 10\\text{ cm})$ cắt nhau tại $A$ và $B$ sao cho tứ giác $OAO\\prime B$ là hình thoi. Biết $OO\\prime = 12\\text{ cm}$. Độ dài dây chung $AB$ là:",
  "options": [
    "A. 12 cm",
    "B. 16 cm",
    "C. 8 cm",
    "D. 20 cm"
  ],
  "correct": 1,
  "explanation": "Hai đường tròn bằng nhau cắt nhau thì $OO\\prime$ và $AB$ cắt nhau tại trung điểm $H$ của mỗi đường và vuông góc với nhau. Ta có $OH = \\frac{OO\\prime}{2} = 6\\text{ cm}$. Trong $\\triangle OHA$ vuông tại $H$: $AH = \\sqrt{OA^2 - OH^2} = \\sqrt{10^2 - 6^2} = 8\\text{ cm}$. Dây chung $AB = 2AH = 16\\text{ cm}$."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Cơ cấu Truyền động Bánh Răng Đồng Hồ
Trong một cơ cấu đồng hồ cổ:
- Bánh răng chủ động $(O_1)$ có bán kính $R_1 = 36\text{ mm}$ tiếp xúc ngoài với bánh răng truyền động $(O_2)$ có bán kính $R_2 = 12\text{ mm}$.
- Bánh răng $(O_2)$ lại tiếp xúc ngoài với bánh răng kim phút $(O_3)$ có bán kính $R_3 = 24\text{ mm}$.
- Cả ba tâm $O_1, O_2, O_3$ thẳng hàng theo đúng thứ tự đó.
1. Hãy tính khoảng cách giữa tâm bánh răng đầu tiên $O_1$ và bánh răng cuối cùng $O_3$.
2. Nếu bánh răng $O_1$ quay đúng 1 vòng theo chiều kim đồng hồ, hỏi bánh răng $O_3$ quay bao nhiêu vòng và quay theo chiều nào?

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Vì các bánh răng tiếp xúc ngoài lần lượt và ba tâm thẳng hàng:
>    $$O_1 O_2 = R_1 + R_2 = 36 + 12 = 48\text{ mm}$$
>    $$O_2 O_3 = R_2 + R_3 = 12 + 24 = 36\text{ mm}$$
>    Khoảng cách giữa hai tâm $O_1$ và $O_3$ là:
>    $$O_1 O_3 = O_1 O_2 + O_2 O_3 = 48 + 36 = 84\text{ mm}$$
> 
> 2. Về số vòng quay và chiều quay:
>    - Khi $O_1$ quay 1 vòng (thuận chiều kim đồng hồ):
>      Bánh răng trung gian $O_2$ quay ngược chiều kim đồng hồ với số vòng là $\frac{R_1}{R_2} = \frac{36}{12} = 3$ vòng.
>    - Khi $O_2$ quay 3 vòng (ngược chiều kim đồng hồ):
>      Bánh răng $O_3$ quay **cùng chiều kim đồng hồ** (thuận chiều) với số vòng là:
>      $$N_3 = N_2 \times \frac{R_2}{R_3} = 3 \times \frac{12}{24} = 1{,}5\text{ vòng}$$
>    Vậy bánh răng $O_3$ quay $1{,}5$ vòng và quay theo **chiều kim đồng hồ**.

---

### Bài tập Tự luyện

**Bài 1:** Cho hai đường tròn $(O; 15\text{ cm})$ và $(O'; 13\text{ cm})$ cắt nhau tại hai điểm $A$ và $B$. Biết độ dài dây chung $AB = 24\text{ cm}$ và hai tâm $O, O'$ nằm về hai phía đối với dây chung $AB$.
a) Tính khoảng cách từ mỗi tâm đến dây chung $AB$.
b) Tính độ dài đoạn nối tâm $OO'$.

**Bài 2:** Cho hai đường tròn $(O; R)$ và $(O'; r)$ tiếp xúc ngoài tại $A$ ($R > r$). Kẻ tiếp tuyến chung ngoài $BC$ ($B \in (O), C \in (O')$). Tiếp tuyến chung trong tại $A$ cắt $BC$ tại $M$.
a) Gọi $I$ là trung điểm của $OO'$. Chứng minh rằng đường tròn tâm $I$ đường kính $OO'$ tiếp xúc với đường thẳng $BC$ tại $M$.
b) Cho $R = 9\text{ cm}, r = 4\text{ cm}$. Tính diện tích tứ giác $BCO'O$.

**Bài 3:** Cho hai đường tròn $(O)$ và $(O')$ ở ngoài nhau. Kẻ hai tiếp tuyến chung ngoài $AB$ và $CD$ ($A, C \in (O); B, D \in (O')$). Chứng minh rằng:
a) Đoạn thẳng $AB = CD$.
b) Đường thẳng $AB$ và đường thẳng $CD$ cắt nhau tại một điểm nằm trên đường nối tâm $OO'$.
