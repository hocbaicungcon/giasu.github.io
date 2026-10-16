---
title: 'Toán 9 Bài 33: Hình cầu - Diện tích mặt cầu, Thể tích & Tuyệt tác Archimedes'
description: 'Lý thuyết chuẩn mực Bài 33 Toán 9: Định nghĩa hình cầu, mặt cầu, công thức diện tích mặt cầu S = 4πR², thể tích khối cầu V = (4/3)πR³, mặt cắt hình tròn r = √(R² - d²), widget tương tác 3D và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Hình cầu
  - Mặt cầu
  - Diện tích mặt cầu
  - Thể tích hình cầu
  - Archimedes
  - Kết nối tri thức
grade: 9
---

# Bài 33. Hình cầu

Trong toàn bộ thế giới hình học ba chiều, **Hình cầu** là thực thể đối xứng, hoàn hảo và kỳ diệu nhất:
- Mọi hành tinh, ngôi sao trong vũ trụ (kể cả Trái Đất và Mặt Trời) đều tự động co cụm về dạng hình cầu dưới tác dụng của lực hấp dẫn đẳng hướng.
- Những giọt sương mai đọng trên phiến lá, những quả bong bóng xà phòng bay trong không trung luôn tự vo tròn thành hình cầu để diện tích bề mặt căng là **nhỏ nhất** với cùng một thể tích khí bên trong.
- Những viên bi thép siêu chính xác trong các ổ bạc đạn (ball bearings) giúp bánh xe ô tô, turbine máy bay quay hàng vạn vòng mỗi phút mà gần như không có ma sát.

Nhà bác học thiên tài cổ đại Archimedes tự hào về phát minh tính diện tích và thể tích hình cầu đến mức ông đã yêu cầu khắc hình ảnh: *Một khối cầu nội tiếp khít khao trong một khối trụ* lên tấm bia mộ của chính mình!

Cùng bước vào bài học cuối cùng của chương trình Hình học 9 để làm chủ toàn bộ bí mật toán học của **Hình cầu và Mặt cầu** nhé!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HÌNH CẦU & MẶT CẦU</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Sự hình thành Hình cầu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Quay một nửa hình tròn tâm $O$ bán kính $R$ một vòng quanh đường kính cố định.<br>• Nửa đường tròn quét nên <strong>Mặt cầu</strong> $(O; R)$.<br>• Tất cả các điểm trên mặt cầu đều cách tâm $O$ một khoảng đúng bằng $R$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Mặt cắt của Hình cầu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Mặt phẳng cắt hình cầu luôn tạo ra <strong>hình tròn</strong>.<br>• Qua tâm $O$: Đường tròn lớn nhất bán kính $R$.<br>• Cách tâm khoảng $d < R$: Đường tròn nhỏ bán kính $$r = \sqrt{R^2 - d^2}$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Diện tích Mặt cầu ($S$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bằng 4 lần diện tích hình tròn lớn:<br>$$S = 4\pi R^2 = \pi d^2$$<br>• Bằng đúng diện tích xung quanh của hình trụ ngoại tiếp ($2\pi R \cdot 2R$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Thể tích Khối cầu ($V$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Công thức Archimedes vĩ đại:<br>$$V = \frac{4}{3}\pi R^3 = \frac{1}{6}\pi d^3$$<br>• Bằng $\frac{2}{3}$ thể tích hình trụ ngoại tiếp ($V_{\text{trụ}} = 2\pi R^3$).</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Khi quay nửa hình tròn quanh đường kính của nó một vòng, ta thu được hình khối nào?
2. **Diện tích mặt cầu:** Cho hình cầu có bán kính $R = 2\text{ cm}$. Diện tích mặt cầu bằng bao nhiêu $\text{cm}^2$ (theo $\pi$)?
3. **Thể tích khối cầu:** Cho hình cầu có bán kính $R = 3\text{ cm}$. Thể tích khối cầu bằng bao nhiêu $\text{cm}^3$ (theo $\pi$)?
4. **Mặt cắt:** Một mặt phẳng cắt hình cầu tâm $O$ bán kính $R = 5\text{ cm}$ và cách tâm một khoảng $d = 3\text{ cm}$. Bán kính của đường tròn mặt cắt bằng bao nhiêu?
5. **Định lý Archimedes:** Một khối cầu được đặt khít khao bên trong một khối trụ (tiếp xúc cả hai đáy và mặt xung quanh). Thể tích khối cầu bằng bao nhiêu phần thể tích khối trụ?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: Thu được **Hình cầu**.
> - Câu 2: $S = 4\pi R^2 = 4\pi \times 2^2 = 16\pi\text{ cm}^2$.
> - Câu 3: $V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi \times 3^3 = \frac{4}{3}\pi \times 27 = 36\pi\text{ cm}^3$.
> - Câu 4: Bán kính mặt cắt: $r = \sqrt{R^2 - d^2} = \sqrt{5^2 - 3^2} = 4\text{ cm}$.
> - Câu 5: Bằng đúng **$\frac{2}{3}$** thể tích khối trụ ($V_{\text{cầu}} = \frac{2}{3} V_{\text{trụ}}$).

---

## Lý thuyết trọng tâm

### 1. Sự hình thành Hình cầu và Mặt cầu

> [!NOTE]
> **Định nghĩa Hình cầu và Mặt cầu:**
> Khi quay nửa hình tròn tâm $O$ bán kính $R$ một vòng quanh đường kính $AB$ cố định:
> - Nửa đường tròn quét nên **mặt cầu** tâm $O$ bán kính $R$.
> - Nửa hình tròn quét nên **hình cầu** (khối cầu) tâm $O$ bán kính $R$.
> - Điểm $O$ là **tâm**, độ dài $R$ là **bán kính**, đoạn thẳng $AB = 2R = d$ là **đường kính**.

**Vị trí tương đối của một điểm $M$ đối với mặt cầu $(O; R)$:**
- $OM < R \iff$ Điểm $M$ nằm **bên trong** hình cầu.
- $OM = R \iff$ Điểm $M$ nằm **trên** mặt cầu.
- $OM > R \iff$ Điểm $M$ nằm **bên ngoài** hình cầu.

---

### 2. Mặt cắt của Hình cầu bởi Mặt phẳng

Khi cắt một hình cầu bán kính $R$ bởi một mặt phẳng $(P)$ cách tâm $O$ một khoảng là $d = OH$ ($H$ là hình chiếu của $O$ lên $(P)$):

1. **Nếu $d = 0$ (mặt phẳng đi qua tâm $O$):**
   Mặt cắt là một hình tròn có tâm $O$ và bán kính bằng $R$, được gọi là **hình tròn lớn** (hoặc đường tròn lớn).
   *(Ví dụ: Đường Xích đạo là đường tròn lớn của Trái Đất).*
2. **Nếu $0 < d < R$:**
   Mặt cắt là một hình tròn có tâm $H$ và bán kính $r$ thỏa mãn định lý Pythagore:
   $$r = \sqrt{R^2 - d^2}$$
3. **Nếu $d = R$:**
   Mặt phẳng tiếp xúc với mặt cầu tại điểm $H$ (mặt phẳng tiếp diện).
4. **Nếu $d > R$:**
   Mặt phẳng không cắt mặt cầu.

---

### 3. Công thức Diện tích Mặt cầu

> [!NOTE]
> **Công thức Diện tích Mặt cầu:**
> $$S = 4\pi R^2 = \pi d^2$$
> *(trong đó $R$ là bán kính, $d = 2R$ là đường kính của mặt cầu).*

*Nhận xét:* Diện tích mặt cầu gấp đúng $4$ lần diện tích của hình tròn lớn ($S_{\text{tròn lớn}} = \pi R^2$).

---

### 4. Công thức Thể tích Khối cầu

> [!NOTE]
> **Công thức Thể tích Khối cầu:**
> $$V = \frac{4}{3}\pi R^3 = \frac{1}{6}\pi d^3$$

> [!IMPORTANT]
> **Mối liên hệ Archimedes giữa Khối cầu và Khối trụ ngoại tiếp:**
> Xét một hình trụ có bán kính đáy $R$ và chiều cao $h = 2R$ bao bọc khít khao khối cầu bán kính $R$:
> - Thể tích hình trụ: $V_{\text{trụ}} = \pi R^2 h = \pi R^2 (2R) = 2\pi R^3$.
> - Thể tích khối cầu: $V_{\text{cầu}} = \frac{4}{3}\pi R^3$.
> - Tỉ số thể tích:
>   $$\frac{V_{\text{cầu}}}{V_{\text{trụ}}} = \frac{\frac{4}{3}\pi R^3}{2\pi R^3} = \frac{2}{3}$$
> - Diện tích xung quanh hình trụ: $S_{xq,\text{trụ}} = 2\pi R h = 2\pi R (2R) = 4\pi R^2 = S_{\text{mặt cầu}}$!
> Thể tích khối cầu bằng $\frac{2}{3}$ thể tích khối trụ ngoại tiếp và diện tích mặt cầu bằng đúng diện tích xung quanh của khối trụ ngoại tiếp đó!

---

## Phòng thí nghiệm Tương tác: Khám phá Hình Cầu 3D & Mặt Cắt Phẳng

Hãy điều chỉnh bán kính $R$ và kéo thanh trượt khoảng cách mặt cắt $d$ để thấy đường tròn mặt cắt co giãn với bán kính $r = \sqrt{R^2 - d^2}$, đồng thời hệ thống tự động tính diện tích mặt cầu và thể tích khối cầu theo thời gian thực:

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: HÌNH CẦU 3D & THIẾT DIỆN MẶT CẮT PHẲNG</h3>

  <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 16px; flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: bold; color: #334155; font-size: 0.9em;">Bán kính R:</label>
      <input type="range" id="slSphereR" min="60" max="110" value="90" oninput="renderSphereDemo()">
      <span id="txtSphereR" style="font-weight: bold; color: #2563eb; min-width: 35px;">90</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: bold; color: #334155; font-size: 0.9em;">Khoảng cách cắt d:</label>
      <input type="range" id="slCutD" min="0" max="80" value="45" oninput="renderSphereDemo()">
      <span id="txtCutD" style="font-weight: bold; color: #dc2626; min-width: 35px;">45</span>
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
    <button onclick="setCutCenter()" style="padding: 6px 14px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85em;">Cắt qua tâm (d = 0, Đường tròn lớn)</button>
    <button onclick="setCutTangent()" style="padding: 6px 14px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85em;">Mặt cắt nhỏ (d = 0.8 R)</button>
  </div>

  <div style="display: flex; justify-content: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
    <svg id="svgSphere" width="380" height="280" viewBox="-190 -140 380 280" style="max-width: 100%; height: auto;"></svg>
  </div>

  <div id="sphereCalcStats" style="margin-top: 14px; padding: 12px; background: #eff6ff; border-radius: 8px; text-align: center; font-size: 0.9em; border: 1px solid #bfdbfe;"></div>
</div>

<script>
function setCutCenter() {
  document.getElementById('slCutD').value = 0;
  renderSphereDemo();
}

function setCutTangent() {
  const R = parseInt(document.getElementById('slSphereR').value);
  document.getElementById('slCutD').value = Math.round(R * 0.7);
  renderSphereDemo();
}

function renderSphereDemo() {
  const R = parseInt(document.getElementById('slSphereR').value);
  const d = Math.min(R - 5, parseInt(document.getElementById('slCutD').value));
  document.getElementById('txtSphereR').textContent = R;
  document.getElementById('txtCutD').textContent = d;

  const svg = document.getElementById('svgSphere');
  svg.innerHTML = '';

  // Sphere outer circle
  const sphereCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  sphereCircle.setAttribute('cx', 0); sphereCircle.setAttribute('cy', 0); sphereCircle.setAttribute('r', R);
  sphereCircle.setAttribute('fill', 'url(#sphereGrad)');
  sphereCircle.setAttribute('stroke', '#2563eb'); sphereCircle.setAttribute('stroke-width', '2');

  // Gradient for 3D look
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <radialGradient id="sphereGrad" cx="35%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#eff6ff" />
      <stop offset="60%" stop-color="#bfdbfe" />
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.8" />
    </radialGradient>
  `;
  svg.appendChild(defs);
  svg.appendChild(sphereCircle);

  // Equator ellipse (perspective)
  const eqRy = R * 0.28;
  const equatorBack = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  equatorBack.setAttribute('d', `M ${-R} 0 A ${R} ${eqRy} 0 0 1 ${R} 0`);
  equatorBack.setAttribute('fill', 'none'); equatorBack.setAttribute('stroke', '#94a3b8');
  equatorBack.setAttribute('stroke-dasharray', '3,3');
  svg.appendChild(equatorBack);

  const equatorFront = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  equatorFront.setAttribute('d', `M ${-R} 0 A ${R} ${eqRy} 0 0 0 ${R} 0`);
  equatorFront.setAttribute('fill', 'none'); equatorFront.setAttribute('stroke', '#64748b');
  equatorFront.setAttribute('stroke-width', '1.2');
  svg.appendChild(equatorFront);

  // Cross section plane at distance d (above center)
  // Section radius: r = sqrt(R^2 - d^2)
  const rSec = Math.sqrt(Math.max(0, R * R - d * d));
  const cutY = -d;
  const cutRy = rSec * 0.28;

  // Draw slice plane outline (horizontal rect)
  const plane = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  const pw = rSec + 35;
  plane.setAttribute('points', `${-pw},${cutY - 14} ${pw},${cutY - 14} ${pw - 18},${cutY + 14} ${-pw - 18},${cutY + 14}`);
  plane.setAttribute('fill', 'rgba(239, 68, 68, 0.12)');
  plane.setAttribute('stroke', '#ef4444'); plane.setAttribute('stroke-dasharray', '4,3');
  svg.appendChild(plane);

  // Section circle (ellipse)
  const secEllipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  secEllipse.setAttribute('cx', 0); secEllipse.setAttribute('cy', cutY);
  secEllipse.setAttribute('rx', rSec); secEllipse.setAttribute('ry', cutRy);
  secEllipse.setAttribute('fill', 'rgba(239, 68, 68, 0.35)');
  secEllipse.setAttribute('stroke', '#dc2626'); secEllipse.setAttribute('stroke-width', '2');
  svg.appendChild(secEllipse);

  // Center point O
  const ptO = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  ptO.setAttribute('cx', 0); ptO.setAttribute('cy', 0); ptO.setAttribute('r', '4');
  ptO.setAttribute('fill', '#0f172a');
  svg.appendChild(ptO);

  // Section center H
  const ptH = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  ptH.setAttribute('cx', 0); ptH.setAttribute('cy', cutY); ptH.setAttribute('r', '4');
  ptH.setAttribute('fill', '#dc2626');
  svg.appendChild(ptH);

  // Distance line OH = d
  const lineOH = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineOH.setAttribute('x1', 0); lineOH.setAttribute('y1', 0);
  lineOH.setAttribute('x2', 0); lineOH.setAttribute('y2', cutY);
  lineOH.setAttribute('stroke', '#0f172a'); lineOH.setAttribute('stroke-width', '1.5');
  svg.appendChild(lineOH);

  // Section radius HM = r
  const lineHM = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineHM.setAttribute('x1', 0); lineHM.setAttribute('y1', cutY);
  lineHM.setAttribute('x2', rSec); lineHM.setAttribute('y2', cutY);
  lineHM.setAttribute('stroke', '#dc2626'); lineHM.setAttribute('stroke-width', '1.5');
  svg.appendChild(lineHM);

  // Radius OM = R (hypotenuse)
  const lineOM = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineOM.setAttribute('x1', 0); lineOM.setAttribute('y1', 0);
  lineOM.setAttribute('x2', rSec); lineOM.setAttribute('y2', cutY);
  lineOM.setAttribute('stroke', '#2563eb'); lineOM.setAttribute('stroke-width', '1.5');
  lineOM.setAttribute('stroke-dasharray', '3,2');
  svg.appendChild(lineOM);

  const drawTxt = (x, y, txt, col) => {
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', x); t.setAttribute('y', y);
    t.setAttribute('font-size', '11'); t.setAttribute('fill', col || '#1e293b');
    t.setAttribute('font-weight', 'bold');
    t.textContent = txt;
    svg.appendChild(t);
  };

  drawTxt(6, 4, 'O', '#0f172a');
  drawTxt(6, cutY - 4, 'H', '#dc2626');
  drawTxt(rSec + 4, cutY + 4, 'M', '#2563eb');
  drawTxt(-18, cutY / 2, `d=${d}`, '#0f172a');
  drawTxt(rSec / 2, cutY - 4, `r=${rSec.toFixed(1)}`, '#dc2626');

  const sArea = (4 * Math.PI * R * R).toFixed(0);
  const vVol = ((4 / 3) * Math.PI * R * R * R).toFixed(0);

  document.getElementById('sphereCalcStats').innerHTML = `
    Bán kính cầu <strong>R = ${R}</strong> | Khoảng cách cắt <strong>d = ${d}</strong> ⟹ Bán kính mặt cắt: <strong>r = √(R² - d²) = ${rSec.toFixed(1)}</strong><br>
    Diện tích mặt cầu: <strong>S = 4πR² ≈ ${sArea}</strong> | Thể tích khối cầu: <strong>V = (4/3)πR³ ≈ ${vVol}</strong>
  `;
}

window.addEventListener('DOMContentLoaded', renderSphereDemo);
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính Diện tích Mặt cầu và Thể tích Khối cầu cơ bản

**Phương pháp giải:**
1. Xác định bán kính $R$ (nếu đề cho đường kính $d \implies R = \frac{d}{2}$).
2. Áp dụng công thức:
   $$S = 4\pi R^2 = \pi d^2$$
   $$V = \frac{4}{3}\pi R^3 = \frac{1}{6}\pi d^3$$
3. Đổi đơn vị thể tích phù hợp: $1\text{ dm}^3 = 1\text{ lít} = 1\,000\text{ cm}^3 = 10^{-3}\text{ m}^3$.

---

#### Ví dụ 1
Một quả bóng đá tiêu chuẩn FIFA có chu vi đường tròn lớn là $68\text{ cm}$. Lấy $\pi \approx 3,14$.
a) Tính bán kính của quả bóng (làm tròn đến chữ số thập phân thứ hai).  
b) Tính diện tích bề mặt da của quả bóng.  
c) Tính thể tích không khí chứa đầy bên trong quả bóng.

**Lời giải chi tiết:**
a) Chu vi đường tròn lớn của quả bóng là:
$$C = 2\pi R = 68\text{ cm} \implies R = \frac{68}{2\pi} \approx \frac{68}{2 \times 3,14} \approx 10,83\text{ (cm)}$$

b) Diện tích bề mặt da của quả bóng là diện tích mặt cầu:
$$S = 4\pi R^2 \approx 4 \times 3,14 \times (10,83)^2 \approx 12,56 \times 117,29 \approx 1\,473,15\text{ (cm}^2\text{)}$$

c) Thể tích không khí chứa trong quả bóng là:
$$V = \frac{4}{3}\pi R^3 \approx \frac{4}{3} \times 3,14 \times (10,83)^3 \approx 4,187 \times 1\,270,24 \approx 5\,318,17\text{ (cm}^3\text{)}$$
Đổi ra lít: $V \approx 5,32\text{ lít}$.

---

### Dạng 2: Tính Bán kính từ Diện tích hoặc Thể tích

**Phương pháp giải:**
1. Rút $R$ từ công thức diện tích:
   $$S = 4\pi R^2 \implies R = \sqrt{\frac{S}{4\pi}}$$
2. Rút $R$ từ công thức thể tích:
   $$V = \frac{4}{3}\pi R^3 \implies R = \sqrt[3]{\frac{3V}{4\pi}}$$

---

#### Ví dụ 2
Một quả cầu kim loại đặc có thể tích $V = 288\pi\text{ cm}^3$.
a) Tính bán kính và diện tích mặt cầu của quả cầu kim loại đó.  
b) Người ta nung chảy quả cầu này rồi đúc lại thành một hình trụ có chiều cao $h = 24\text{ cm}$. Tính bán kính đáy của hình trụ tạo thành (coi hao hụt vật liệu không đáng kể).

**Lời giải chi tiết:**
a) Ta có thể tích khối cầu:
$$V = \frac{4}{3}\pi R^3 \implies 288\pi = \frac{4}{3}\pi R^3$$
$$R^3 = \frac{288 \times 3}{4} = 216 \implies R = \sqrt[3]{216} = 6\text{ (cm)}$$
Bán kính quả cầu là $R = 6\text{ cm}$.
Diện tích mặt cầu là:
$$S = 4\pi R^2 = 4\pi \times 6^2 = 144\pi \approx 452,39\text{ (cm}^2\text{)}$$

b) Vì đúc lại từ quả cầu nên thể tích khối trụ bằng thể tích khối cầu:
$$V_{\text{trụ}} = \pi R_{\text{trụ}}^2 h = 288\pi$$
Thay $h = 24\text{ cm}$:
$$\pi R_{\text{trụ}}^2 \times 24 = 288\pi \implies R_{\text{trụ}}^2 = \frac{288}{24} = 12 \implies R_{\text{trụ}} = \sqrt{12} = 2\sqrt{3} \approx 3,46\text{ (cm)}$$
Vậy bán kính đáy của hình trụ là $2\sqrt{3}\text{ cm}$.

---

### Dạng 3: Bài toán Mặt cắt của Hình cầu

**Phương pháp giải:**
Áp dụng tam giác vuông $OHM$ ($O$: tâm cầu, $H$: hình chiếu của $O$ lên mặt phẳng cắt, $M$: điểm thuộc đường viền mặt cắt):
- Cạnh huyền $OM = R$ (bán kính hình cầu).
- Cạnh góc vuông $OH = d$ (khoảng cách từ tâm đến mặt phẳng).
- Cạnh góc vuông $HM = r$ (bán kính đường tròn mặt cắt).
- Hệ thức:
  $$r = \sqrt{R^2 - d^2}$$

---

#### Ví dụ 3
Một hình cầu có bán kính $R = 10\text{ cm}$. Cắt hình cầu bởi một mặt phẳng $(P)$ cách tâm $O$ một khoảng $d = 6\text{ cm}$.
a) Tính bán kính $r$ và diện tích của hình tròn thiết diện.  
b) Tính chu vi của hình tròn thiết diện.

**Lời giải chi tiết:**
a) Bán kính của hình tròn thiết diện là:
$$r = \sqrt{R^2 - d^2} = \sqrt{10^2 - 6^2} = \sqrt{100 - 36} = \sqrt{64} = 8\text{ (cm)}$$
Diện tích của hình tròn thiết diện:
$$S_{\text{thiết diện}} = \pi r^2 = \pi \times 8^2 = 64\pi \approx 201,06\text{ (cm}^2\text{)}$$

b) Chu vi của hình tròn thiết diện:
$$C = 2\pi r = 2\pi \times 8 = 16\pi \approx 50,27\text{ (cm)}$$

---

### Dạng 4: Bài toán Thả Vật Chìm trong Nước (Định luật Ác-si-mét)

**Phương pháp giải:**
Khi thả chìm hoàn toàn một vật thể rắn (khối cầu) vào một bình chứa nước (thường là hình trụ):
- **Thể tích nước dâng lên bằng đúng thể tích của vật chìm vào:**
  $$V_{\text{dâng}} = V_{\text{vật}} = \frac{4}{3}\pi R_{\text{cầu}}^3$$
- Chiều cao mực nước dâng thêm trong bình trụ bán kính $R_{\text{trụ}}$:
  $$\Delta h = \frac{V_{\text{dâng}}}{S_{\text{đáy trụ}}} = \frac{\frac{4}{3}\pi R_{\text{cầu}}^3}{\pi R_{\text{trụ}}^2} = \frac{4 R_{\text{cầu}}^3}{3 R_{\text{trụ}}^2}$$

---

#### Ví dụ 4
Một cốc nước hình trụ có bán kính đáy $R_{\text{trụ}} = 6\text{ cm}$ chứa một lượng nước nhất định. Người ta thả chìm hoàn toàn một viên bi sắt hình cầu có bán kính $R_{\text{cầu}} = 3\text{ cm}$ vào trong cốc. Hỏi mực nước trong cốc dâng lên thêm bao nhiêu xentimét? (Giả sử nước không bị tràn ra ngoài).

**Lời giải chi tiết:**
- Thể tích của viên bi sắt hình cầu là:
  $$V_{\text{bi}} = \frac{4}{3}\pi R_{\text{cầu}}^3 = \frac{4}{3}\pi \times 3^3 = 36\pi\text{ (cm}^3\text{)}$$
- Khi thả chìm viên bi, thể tích phần nước dâng lên bằng thể tích của viên bi sắt:
  $$V_{\text{dâng}} = V_{\text{bi}} = 36\pi\text{ (cm}^3\text{)}$$
- Mặt khác, phần nước dâng lên có dạng một khối trụ có đáy là đáy của cốc ($R_{\text{trụ}} = 6\text{ cm}$) và chiều cao là $\Delta h$:
  $$V_{\text{dâng}} = \pi R_{\text{trụ}}^2 \Delta h = \pi \times 6^2 \times \Delta h = 36\pi \Delta h$$
- Ta có phương trình:
  $$36\pi \Delta h = 36\pi \implies \Delta h = 1\text{ (cm)}$$
Vậy mực nước trong cốc dâng lên thêm đúng $1\text{ cm}$.

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Khí Cầu Dự Báo Thời Tiết & Tàu Vũ Trụ:** Khí cầu thám không (Weather Balloon) bơm khí helium nở thành khối cầu hoàn hảo ở tầng bình lưu ($30\,000\text{ m}$), giúp mang thiết bị quan trắc khí quyển ghi nhận áp suất và nhiệt độ toàn cầu.
2. **Kính Thiên Văn Vô Tuyến FAST Lớn Nhất Thế Giới:** Kính viễn vọng FAST (đường kính $500\text{ mét}$ tại Quý Châu, Trung Quốc) có dạng mặt cầu khổng lồ giúp hội tụ sóng vô tuyến từ các pulsar và dải ngân hà xa xôi hàng tỷ năm ánh sáng.
3. **Bồn Chứa Khí Hóa Lỏng Dạng Cầu (Hortonsphere):** Tại các nhà máy lọc dầu Dung Quất và Nghi Sơn, các bồn chứa khí propane/butane luôn có dạng hình cầu vì hình cầu chịu được áp suất nén lớn nhất trên mỗi đơn vị diện tích và có diện tích bề mặt tối thiểu, chống hấp thụ nhiệt từ ánh nắng mặt trời tốt nhất.
4. **Ổ Bi Bạc Đạn Siêu Tốc Độ (Ceramic Ball Bearings):** Các viên bi gốm hình cầu silicon nitride ($Si_3N_4$) trong động cơ xe đua F1 và máy bay phản lực có độ tròn sai lệch dưới $0,0001\text{ mm}$, quay ổn định ở $100\,000$ vòng/phút.
5. **Hạt Nano Bọc Thuốc Trong Y Học (Liposome Nanospheres):** Trong điều trị ung thư đích hiện đại, các nhà công nghệ sinh học chế tạo các túi phân tử hình cầu nano kích thước vài chục nanomet để bọc phân tử thuốc hóa trị, vận chuyển an toàn qua mạch máu đến đúng tế bào ung thư mà không gây hại cho mô lành.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hình cầu được tạo thành khi quay hình nào sau đây một vòng quanh đường kính của nó?",
  "options": [
    "A. Hình tròn",
    "B. Nửa hình tròn",
    "C. Tam giác vuông",
    "D. Hình quạt tròn"
  ],
  "answer": "B. Nửa hình tròn",
  "explanation": "Khi quay một nửa hình tròn một vòng quanh đường kính cố định, ta thu được một hình cầu."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Công thức tính diện tích mặt cầu có bán kính R là:",
  "options": [
    "A. S = 2πR²",
    "B. S = πR²",
    "C. S = 4πR²",
    "D. S = (4/3)πR²"
  ],
  "answer": "C. S = 4πR²",
  "explanation": "Diện tích mặt cầu có bán kính R là S = 4πR²."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Công thức tính thể tích của khối cầu có bán kính R là:",
  "options": [
    "A. V = 4πR³",
    "B. V = (4/3)πR³",
    "C. V = (1/3)πR³",
    "D. V = (4/3)πR²"
  ],
  "answer": "B. V = (4/3)πR³",
  "explanation": "Thể tích khối cầu có bán kính R là V = (4/3)πR³."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một mặt cầu có đường kính d = 10 cm. Diện tích của mặt cầu đó bằng:",
  "options": [
    "A. 100π cm²",
    "B. 400π cm²",
    "C. 25π cm²",
    "D. 50π cm²"
  ],
  "answer": "A. 100π cm²",
  "explanation": "S = π * d² = π * 10² = 100π cm² (hoặc R = 5 cm => S = 4π * 5² = 100π cm²)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Một khối cầu có thể tích V = (32/3)π cm³. Bán kính R của khối cầu đó bằng:",
  "options": [
    "A. 2 cm",
    "B. 4 cm",
    "C. 8 cm",
    "D. 3 cm"
  ],
  "answer": "A. 2 cm",
  "explanation": "(4/3)πR³ = (32/3)π => 4R³ = 32 => R³ = 8 => R = 2 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cắt một hình cầu bán kính R = 13 cm bởi một mặt phẳng cách tâm một khoảng d = 5 cm. Bán kính r của hình tròn mặt cắt bằng:",
  "options": [
    "A. 8 cm",
    "B. 12 cm",
    "C. 10 cm",
    "D. 18 cm"
  ],
  "answer": "B. 12 cm",
  "explanation": "r = căn(R² - d²) = căn(13² - 5²) = căn(169 - 25) = căn(144) = 12 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Nếu bán kính của một hình cầu tăng lên gấp 3 lần thì diện tích mặt cầu tăng lên gấp mấy lần?",
  "options": [
    "A. 3 lần",
    "B. 6 lần",
    "C. 9 lần",
    "D. 27 lần"
  ],
  "answer": "C. 9 lần",
  "explanation": "S = 4πR² tỉ lệ với R². Khi R tăng 3 lần thì diện tích tăng 3² = 9 lần."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Nếu bán kính của một hình cầu tăng lên gấp 2 lần thì thể tích của khối cầu tăng lên gấp mấy lần?",
  "options": [
    "A. 2 lần",
    "B. 4 lần",
    "C. 6 lần",
    "D. 8 lần"
  ],
  "answer": "D. 8 lần",
  "explanation": "V = (4/3)πR³ tỉ lệ với R³. Khi R tăng 2 lần thì thể tích tăng 2³ = 8 lần."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Mặt cắt của một hình cầu bởi một mặt phẳng bất kỳ luôn là hình gì?",
  "options": [
    "A. Hình elip",
    "B. Hình tròn",
    "C. Hình chữ nhật",
    "D. Hình parabol"
  ],
  "answer": "B. Hình tròn",
  "explanation": "Mặt cắt của hình cầu bởi bất kỳ mặt phẳng nào cắt nó luôn là một hình tròn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Theo phát minh nổi tiếng của Archimedes, tỉ số thể tích giữa một khối cầu và khối trụ ngoại tiếp khối cầu đó bằng:",
  "options": [
    "A. 1/2",
    "B. 2/3",
    "C. 3/4",
    "D. 1/3"
  ],
  "answer": "B. 2/3",
  "explanation": "V_cầu / V_trụ = ((4/3)πR³) / (2πR³) = 2/3."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Tính toán cơ bản:** Một hình cầu có diện tích mặt cầu bằng $36\pi\text{ cm}^2$.
   a) Tính bán kính và đường kính của hình cầu.  
   b) Tính thể tích của khối cầu tương ứng.

2. **Bài toán mặt cắt:** Cho hình cầu $(O; 15\text{ cm})$. Một mặt phẳng $(P)$ cắt hình cầu theo một hình tròn có chu vi là $18\pi\text{ cm}$.
   a) Tính bán kính của hình tròn mặt cắt.  
   b) Tính khoảng cách từ tâm $O$ của hình cầu đến mặt phẳng $(P)$.

---

### Thử thách Thực tế: Tính Dung Tích Bồn Khí Cầu Lưu Trữ Khí Hóa Lỏng LNG

**Bối cảnh:** Một trạm cảng năng lượng quốc tế lắp đặt bồn chứa khí hóa lỏng dạng hình cầu khổng lồ bằng thép chịu lạnh Niken:
- Đường kính ngoài của bồn cầu: $d = 20\text{ m}$.
- Vỏ thép dày $0,1\text{ m}$ (nên bán kính trong $R_{\text{trong}} = 10 - 0,1 = 9,9\text{ m}$).

**Yêu cầu:**
1. Tính diện tích bề mặt sơn chống ăn mòn bên ngoài bồn cầu (lấy $\pi \approx 3,14$).
2. Tính dung tích tối đa (thể tích chứa khí bên trong) của bồn cầu theo mét khối và đổi ra lít.
3. Nếu mỗi mét khối khí hóa lỏng có thể sinh ra $600\text{ m}^3$ khí đốt tự nhiên tiêu chuẩn, hỏi bồn khí này khi đầy chứa được bao nhiêu mét khối khí đốt tiêu chuẩn?
