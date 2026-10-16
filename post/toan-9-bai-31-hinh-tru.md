---
title: 'Toán 9 Bài 31: Hình trụ - Diện tích xung quanh, Thể tích & Ứng dụng Thực tiễn Đột phá'
description: 'Lý thuyết chuẩn mực Bài 31 Toán 9: Định nghĩa hình trụ, đường sinh, chiều cao, công thức diện tích xung quanh Sxq = 2πRh, diện tích toàn phần, thể tích V = πR²h, widget mô phỏng trải mặt xung quanh SVG và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Hình trụ
  - Diện tích xung quanh
  - Thể tích hình trụ
  - Hình khối thực tiễn
  - Kết nối tri thức
grade: 9
---

# Bài 31. Hình trụ

Trong thế giới hiện đại, các đồ vật có dạng **Hình trụ** xuất hiện dày đặc xung quanh cuộc sống của chúng ta:
- Hàng triệu lon nước ngọt bằng nhôm trên kệ siêu thị.
- Những thùng phuy chứa dầu dung tích tiêu chuẩn $200\text{ lít}$.
- Hệ thống đường ống dẫn khí đốt tự nhiên xuyên đại dương.
- Những cột trụ bê tông tròn chịu lực chống đỡ các cây cầu vượt và tòa nhà chọc trời.

*Vì sao các nhà sản xuất và kỹ sư xây dựng lại ưu tiên chọn hình trụ tròn thay vì hình hộp chữ nhật?* 
Bởi vì với cùng một lượng vật liệu vỏ bọc bên ngoài, **hình trụ luôn chứa được thể tích chất lỏng lớn nhất** và có khả năng chịu áp suất thủy tĩnh đồng đều nhất từ mọi hướng!

Bước sang **Chương X: Một số hình khối trong thực tiễn**, chúng ta sẽ rời trang giấy phẳng hai chiều để bước vào không gian 3 chiều sống động, mở đầu với mô hình hình học tròn xoay cơ bản nhất: **Hình trụ**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HÌNH TRỤ & HỆ THỐNG CÔNG THỨC VÀNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Sự hình thành Hình trụ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Quay hình chữ nhật $ABCD$ một vòng quanh cạnh $AB$ cố định.<br>• $AB$: Trục và đường cao ($h$).<br>• $CD$: Quét nên mặt xung quanh, gọi là <strong>đường sinh</strong> ($l = h$).<br>• $AD$ và $BC$: Quét nên hai đáy hình tròn bằng nhau bán kính $R$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Diện tích Xung quanh ($S_{xq}$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi trải mặt xung quanh ra mặt phẳng, ta được một <strong>hình chữ nhật</strong> kích thước $2\pi R \times h$:<br>$$S_{xq} = 2\pi R h$$
      • Chu vi đáy nhân với chiều cao.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Diện tích Toàn phần ($S_{tp}$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bằng diện tích xung quanh cộng diện tích hai đáy:<br>$$S_{tp} = S_{xq} + 2S_{\text{đáy}}$$
      $$S_{tp} = 2\pi Rh + 2\pi R^2 = 2\pi R(h + R)$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Thể tích Khối trụ ($V$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Diện tích đáy nhân với chiều cao:<br>$$V = S_{\text{đáy}} \cdot h = \pi R^2 h$$
      • Tỉ lệ thuận với chiều cao và bình phương bán kính đáy.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Khi quay một hình chữ nhật một vòng quanh một cạnh cố định của nó, ta thu được hình khối nào?
2. **Đường sinh:** Trong hình trụ tròn xoay, độ dài đường sinh $l$ có bằng chiều cao $h$ của hình trụ không?
3. **Diện tích đáy:** Một hình trụ có bán kính đáy $R = 3\text{ cm}$. Diện tích của một mặt đáy bằng bao nhiêu $\text{cm}^2$ (theo $\pi$)?
4. **Diện tích xung quanh:** Hình trụ có $R = 2\text{ cm}$ và $h = 5\text{ cm}$. Diện tích xung quanh của nó bằng bao nhiêu?
5. **Thể tích nhẩm nhanh:** Nếu giữ nguyên chiều cao $h$ của hình trụ và tăng bán kính đáy $R$ lên gấp đôi, thì thể tích khối trụ sẽ tăng lên gấp mấy lần?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: Thu được **Hình trụ tròn xoay**.
> - Câu 2: **Có**, trong hình trụ luôn có $l = h$.
> - Câu 3: $S_{\text{đáy}} = \pi R^2 = \pi \times 3^2 = 9\pi\text{ cm}^2$.
> - Câu 4: $S_{xq} = 2\pi R h = 2\pi \times 2 \times 5 = 20\pi\text{ cm}^2$.
> - Câu 5: Vì $V = \pi R^2 h$, bán kính $R$ nằm dưới bậc hai nên khi $R$ tăng gấp $2$, thể tích $V$ sẽ tăng $2^2 = \mathbf{4}$ **lần**!

---

## Lý thuyết trọng tâm

### 1. Sự hình thành và Các yếu tố của Hình trụ

> [!NOTE]
> **Định nghĩa Hình trụ tròn xoay:**
> Khi quay một hình chữ nhật $ABCD$ một vòng xung quanh cạnh $AB$ cố định, ta thu được một **hình trụ**.
> - Cạnh $AB$ được gọi là **trục** của hình trụ; độ dài $AB$ là **chiều cao** của hình trụ, ký hiệu là $h$.
> - Cạnh $CD$ song song với trục quét nên **mặt xung quanh** của hình trụ; mỗi vị trí của $CD$ được gọi là một **đường sinh**, ký hiệu là $l$. Trong hình trụ:
>   $$l = h$$
> - Hai cạnh $AD$ và $BC$ quét nên hai hình tròn bằng nhau nằm trong hai mặt phẳng song song, gọi là **hai đáy** của hình trụ; độ dài $AD = BC = R$ là **bán kính đáy**.

---

### 2. Mặt cắt của Hình trụ bởi Mặt phẳng

1. **Cắt bởi mặt phẳng song song với hai đáy:**
   Mặt cắt là một **hình tròn** bằng các hình tròn đáy (có cùng bán kính $R$).
2. **Cắt bởi mặt phẳng song song với trục (hoặc chứa trục):**
   Mặt cắt là một **hình chữ nhật**.
   - Nếu mặt phẳng đi qua trục (mặt cắt qua trục): Một cạnh của hình chữ nhật bằng đường kính đáy $2R$, cạnh kia bằng chiều cao $h$.
   - Nếu mặt cắt qua trục là một hình vuông thì hình trụ có: $h = 2R$.

---

### 3. Công thức Diện tích Xung quanh và Toàn phần

Khi cắt rời một mặt đáy và cắt dọc theo một đường sinh rồi trải phẳng mặt xung quanh của hình trụ, ta thu được:
- Một **hình chữ nhật** có một cạnh bằng chiều cao hình trụ $h$, cạnh kia bằng chu vi đáy $C = 2\pi R$.

> [!NOTE]
> **Công thức Diện tích Xung quanh:**
> $$S_{xq} = 2\pi R h$$
> *(Chu vi đáy nhân với chiều cao).*

> [!NOTE]
> **Công thức Diện tích Toàn phần:**
> Diện tích toàn phần bằng diện tích xung quanh cộng với diện tích của hai hình tròn đáy:
> $$S_{tp} = S_{xq} + 2S_{\text{đáy}} = 2\pi R h + 2\pi R^2 = 2\pi R(h + R)$$

---

### 4. Công thức Thể tích Khối trụ

> [!NOTE]
> **Công thức Thể tích:**
> Thể tích của khối trụ bằng tích của diện tích đáy với chiều cao:
> $$V = S_{\text{đáy}} \cdot h = \pi R^2 h$$

---

## Phòng thí nghiệm Tương tác: Khám phá Hình Trụ 3D & Trải Mặt Xung Quanh

Hãy di chuyển thanh trượt bán kính $R$ và chiều cao $h$ để quan sát hình trụ 3D biến đổi, đồng thời bấm nút **"Trải mặt xung quanh"** để thấy mặt xung quanh mở phẳng thành một hình chữ nhật kích thước $2\pi R \times h$!

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: HÌNH TRỤ 3D & TRẢI MẶT XUNG QUANH THÀNH HÌNH CHỮ NHẬT</h3>

  <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 16px; flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: bold; color: #334155; font-size: 0.9em;">Bán kính R:</label>
      <input type="range" id="slCylR" min="20" max="60" value="40" oninput="renderCylinderDemo()">
      <span id="txtCylR" style="font-weight: bold; color: #2563eb; min-width: 35px;">40</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: bold; color: #334155; font-size: 0.9em;">Chiều cao h:</label>
      <input type="range" id="slCylH" min="50" max="140" value="90" oninput="renderCylinderDemo()">
      <span id="txtCylH" style="font-weight: bold; color: #059669; min-width: 35px;">90</span>
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
    <button onclick="toggleUnfold()" id="btnUnfold" style="padding: 6px 16px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9em; font-weight: 500;">Mở trải mặt xung quanh</button>
    <button onclick="presetCan()" style="padding: 6px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9em;">Lon nước ngọt (h ≈ 2R)</button>
  </div>

  <div style="display: flex; justify-content: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
    <svg id="svgCylinder" width="460" height="280" viewBox="0 0 460 280" style="max-width: 100%; height: auto;"></svg>
  </div>

  <div id="cylCalcStats" style="margin-top: 14px; padding: 12px; background: #eff6ff; border-radius: 8px; text-align: center; font-size: 0.9em; border: 1px solid #bfdbfe;"></div>
</div>

<script>
let isUnfolded = false;

function toggleUnfold() {
  isUnfolded = !isUnfolded;
  document.getElementById('btnUnfold').textContent = isUnfolded ? 'Thu lại thành hình trụ' : 'Mở trải mặt xung quanh';
  document.getElementById('btnUnfold').style.background = isUnfolded ? '#059669' : '#2563eb';
  renderCylinderDemo();
}

function presetCan() {
  document.getElementById('slCylR').value = 40;
  document.getElementById('slCylH').value = 80;
  renderCylinderDemo();
}

function renderCylinderDemo() {
  const R = parseInt(document.getElementById('slCylR').value);
  const H = parseInt(document.getElementById('slCylH').value);
  document.getElementById('txtCylR').textContent = R;
  document.getElementById('txtCylH').textContent = H;

  const svg = document.getElementById('svgCylinder');
  svg.innerHTML = '';

  const cx = 130;
  const topY = 140 - H / 2;
  const botY = 140 + H / 2;
  const ry = R * 0.35; // perspective ellipse

  // Left side: 3D Cylinder
  // Bottom ellipse background (dashed)
  const botEllipseBack = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  botEllipseBack.setAttribute('d', `M ${cx - R} ${botY} A ${R} ${ry} 0 0 1 ${cx + R} ${botY}`);
  botEllipseBack.setAttribute('fill', 'none');
  botEllipseBack.setAttribute('stroke', '#94a3b8');
  botEllipseBack.setAttribute('stroke-dasharray', '3,3');
  svg.appendChild(botEllipseBack);

  // Bottom ellipse front
  const botEllipseFront = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  botEllipseFront.setAttribute('d', `M ${cx - R} ${botY} A ${R} ${ry} 0 0 0 ${cx + R} ${botY}`);
  botEllipseFront.setAttribute('fill', 'none');
  botEllipseFront.setAttribute('stroke', '#2563eb');
  botEllipseFront.setAttribute('stroke-width', '2');
  svg.appendChild(botEllipseFront);

  // Body fill
  const body = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  body.setAttribute('d', `M ${cx - R} ${topY} L ${cx - R} ${botY} A ${R} ${ry} 0 0 0 ${cx + R} ${botY} L ${cx + R} ${topY} Z`);
  body.setAttribute('fill', 'rgba(37, 99, 235, 0.12)');
  svg.appendChild(body);

  // Side generators (lines)
  const lineL = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineL.setAttribute('x1', cx - R); lineL.setAttribute('y1', topY);
  lineL.setAttribute('x2', cx - R); lineL.setAttribute('y2', botY);
  lineL.setAttribute('stroke', '#2563eb'); lineL.setAttribute('stroke-width', '2');
  svg.appendChild(lineL);

  const lineR = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineR.setAttribute('x1', cx + R); lineR.setAttribute('y1', topY);
  lineR.setAttribute('x2', cx + R); lineR.setAttribute('y2', botY);
  lineR.setAttribute('stroke', '#2563eb'); lineR.setAttribute('stroke-width', '2');
  svg.appendChild(lineR);

  // Axis OO'
  const axis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axis.setAttribute('x1', cx); axis.setAttribute('y1', topY);
  axis.setAttribute('x2', cx); axis.setAttribute('y2', botY);
  axis.setAttribute('stroke', '#64748b'); axis.setAttribute('stroke-dasharray', '4,3');
  svg.appendChild(axis);

  // Top ellipse
  const topEllipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  topEllipse.setAttribute('cx', cx); topEllipse.setAttribute('cy', topY);
  topEllipse.setAttribute('rx', R); topEllipse.setAttribute('ry', ry);
  topEllipse.setAttribute('fill', 'rgba(59, 130, 246, 0.25)');
  topEllipse.setAttribute('stroke', '#2563eb'); topEllipse.setAttribute('stroke-width', '2');
  svg.appendChild(topEllipse);

  // Dimension Labels
  const drawTxt = (x, y, txt, col) => {
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', x); t.setAttribute('y', y);
    t.setAttribute('font-size', '11'); t.setAttribute('fill', col || '#1e293b');
    t.setAttribute('text-anchor', 'middle'); t.setAttribute('font-weight', 'bold');
    t.textContent = txt;
    svg.appendChild(t);
  };
  drawTxt(cx - R - 14, 140, `h=${H}`, '#059669');
  drawTxt(cx + R / 2, topY - 8, `R=${R}`, '#2563eb');

  // Right side: Unfolded Net
  if (isUnfolded) {
    const netX = 260;
    const netW = Math.min(180, (2 * Math.PI * R) * 0.45); // scaled
    const netH = H;
    const netY = topY;

    // Rectangle
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', netX); rect.setAttribute('y', netY);
    rect.setAttribute('width', netW); rect.setAttribute('height', netH);
    rect.setAttribute('fill', 'rgba(5, 150, 105, 0.15)');
    rect.setAttribute('stroke', '#059669'); rect.setAttribute('stroke-width', '2');
    svg.appendChild(rect);

    // Top Circle
    const circleTop = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleTop.setAttribute('cx', netX + netW / 2);
    circleTop.setAttribute('cy', netY - (R * 0.45));
    circleTop.setAttribute('r', R * 0.45);
    circleTop.setAttribute('fill', 'rgba(37, 99, 235, 0.2)');
    circleTop.setAttribute('stroke', '#2563eb');
    svg.appendChild(circleTop);

    // Bottom Circle
    const circleBot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleBot.setAttribute('cx', netX + netW / 2);
    circleBot.setAttribute('cy', netY + netH + (R * 0.45));
    circleBot.setAttribute('r', R * 0.45);
    circleBot.setAttribute('fill', 'rgba(37, 99, 235, 0.2)');
    circleBot.setAttribute('stroke', '#2563eb');
    svg.appendChild(circleBot);

    drawTxt(netX + netW / 2, netY + netH / 2 + 4, `S_xq = 2πRh`, '#059669');
    drawTxt(netX + netW / 2, netY - 2, `C = 2πR`, '#1d4ed8');
  }

  const sxq = (2 * Math.PI * R * H).toFixed(0);
  const stp = (2 * Math.PI * R * (H + R)).toFixed(0);
  const v = (Math.PI * R * R * H).toFixed(0);

  document.getElementById('cylCalcStats').innerHTML = `
    Bán kính đáy <strong>R = ${R}</strong>, Chiều cao <strong>h = ${H}</strong>:<br>
    Diện tích xung quanh: <strong>S_xq = 2πRh ≈ ${sxq}</strong> | Diện tích toàn phần: <strong>S_tp ≈ ${stp}</strong> | Thể tích: <strong>V = πR²h ≈ ${v}</strong>
  `;
}

window.addEventListener('DOMContentLoaded', renderCylinderDemo);
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính Diện tích Xung quanh, Toàn phần và Thể tích cơ bản

**Phương pháp giải:**
1. Xác định bán kính đáy $R$ (nếu biết đường kính $d \implies R = \frac{d}{2}$).
2. Xác định chiều cao $h$ (hoặc đường sinh $l = h$).
3. Áp dụng chuẩn xác 3 công thức:
   $$S_{xq} = 2\pi R h$$
   $$S_{tp} = 2\pi R(h + R)$$
   $$V = \pi R^2 h$$

---

#### Ví dụ 1
Một lon sữa đặc hình trụ có đường kính đáy bằng $7\text{ cm}$ và chiều cao bằng $8\text{ cm}$. Lấy $\pi \approx 3,14$.
a) Tính diện tích giấy dán nhãn bao quanh thân lon sữa (coi mép dán không đáng kể).  
b) Tính thể tích sữa đặc chứa đầy trong lon (theo đơn vị $\text{cm}^3$ và mililít).

**Lời giải chi tiết:**
a) Bán kính đáy của lon sữa là:
$$R = \frac{7}{2} = 3,5\text{ (cm)}$$
Chiều cao $h = 8\text{ cm}$.
Diện tích giấy dán bao quanh thân lon chính là diện tích xung quanh của hình trụ:
$$S_{xq} = 2\pi R h \approx 2 \times 3,14 \times 3,5 \times 8 = 175,84\text{ (cm}^2\text{)}$$

b) Thể tích sữa đặc chứa trong lon là:
$$V = \pi R^2 h \approx 3,14 \times (3,5)^2 \times 8 = 3,14 \times 12,25 \times 8 = 307,72\text{ (cm}^3\text{)}$$
Vì $1\text{ cm}^3 = 1\text{ ml}$ nên thể tích lon sữa xấp xỉ $307,72\text{ ml}$.

---

### Dạng 2: Tính các Kích thước Hình học từ Dữ kiện Diện tích hoặc Thể tích

**Phương pháp giải:**
1. Thiết lập phương trình theo ẩn chưa biết ($R$ hoặc $h$).
2. Rút ẩn từ công thức:
   $$h = \frac{S_{xq}}{2\pi R} = \frac{V}{\pi R^2}$$
   $$R = \sqrt{\frac{V}{\pi h}}$$

---

#### Ví dụ 2
Một bể nước ngầm hình trụ có thể tích chứa được $12\text{ m}^3$ nước. Biết chiều sâu (chiều cao) của bể là $2,4\text{ m}$.
a) Tính bán kính đáy của bể nước (lấy $\pi \approx 3,14$, làm tròn đến hàng phần mười).  
b) Người ta muốn ốp gạch xung quanh thành bể và đáy bể. Tính diện tích cần ốp gạch.

**Lời giải chi tiết:**
a) Ta có thể tích khối trụ $V = \pi R^2 h \implies R^2 = \frac{V}{\pi h}$.
Thay số:
$$R^2 = \frac{12}{3,14 \times 2,4} = \frac{12}{7,536} \approx 1,592 \implies R \approx \sqrt{1,592} \approx 1,3\text{ (m)}$$
Vậy bán kính đáy của bể nước là khoảng $1,3\text{ m}$.

b) Diện tích cần ốp gạch gồm diện tích xung quanh và diện tích của một đáy (đáy dưới, không nắp):
$$S_{\text{ốp}} = S_{xq} + S_{\text{đáy}} = 2\pi R h + \pi R^2 = \pi R(2h + R)$$
$$S_{\text{ốp}} \approx 3,14 \times 1,26 \times (2 \times 2,4 + 1,26) \approx 3,96 \times 6,06 \approx 24\text{ (m}^2\text{)}$$

---

### Dạng 3: Bài toán Mặt cắt của Hình trụ

**Phương pháp giải:**
1. **Mặt cắt chứa trục:** Là hình chữ nhật có kích thước $2R \times h$.
   - Diện tích thiết diện qua trục: $S_{\text{trục}} = 2R \cdot h$.
2. **Mặt cắt song song với trục:** Cách trục một khoảng $d$ ($0 < d < R$).
   - Dây cung mặt cắt có độ dài $2\sqrt{R^2 - d^2}$.
   - Diện tích thiết diện: $S = 2\sqrt{R^2 - d^2} \cdot h$.

---

#### Ví dụ 3
Một hình trụ có bán kính đáy $R = 5\text{ cm}$ và chiều cao $h = 8\text{ cm}$.
a) Tính diện tích của thiết diện qua trục của hình trụ.  
b) Cắt hình trụ bởi một mặt phẳng song song với trục và cách trục một khoảng $d = 3\text{ cm}$. Tính diện tích của thiết diện thu được.

**Lời giải chi tiết:**
a) Thiết diện qua trục của hình trụ là một hình chữ nhật có một cạnh là đường kính đáy $2R = 2 \times 5 = 10\text{ cm}$ và một cạnh là chiều cao $h = 8\text{ cm}$.
Diện tích thiết diện qua trục là:
$$S_1 = 2R \cdot h = 10 \times 8 = 80\text{ (cm}^2\text{)}$$

b) Mặt phẳng song song với trục cắt hai đáy theo hai dây cung bằng nhau.
Khoảng cách từ tâm đáy đến dây cung là $d = 3\text{ cm}$.
Độ dài dây cung mặt cắt là:
$$AB = 2\sqrt{R^2 - d^2} = 2\sqrt{5^2 - 3^2} = 2\sqrt{16} = 2 \times 4 = 8\text{ (cm)}$$
Thiết diện thu được là hình chữ nhật có kích thước $8\text{ cm} \times 8\text{ cm}$ (chính là một hình vuông).
Diện tích của thiết diện là:
$$S_2 = 8 \times 8 = 64\text{ (cm}^2\text{)}$$

---

### Dạng 4: Bài toán Tối ưu hóa Thực tế (Kinh tế & Kỹ thuật)

**Phương pháp giải:**
Bài toán tìm kích thước lon đồ hộp hình trụ thể tích $V_0$ cố định sao cho tốn ít nguyên liệu vỏ bọc nhất ($S_{tp}$ nhỏ nhất):
1. Biểu diễn $h$ theo $R$: $h = \frac{V_0}{\pi R^2}$.
2. Thay vào $S_{tp}$:
   $$S_{tp} = 2\pi R h + 2\pi R^2 = \frac{2V_0}{R} + 2\pi R^2 = \frac{V_0}{R} + \frac{V_0}{R} + 2\pi R^2$$
3. Áp dụng bất đẳng thức Cauchy (AM-GM) cho 3 số dương:
   $$S_{tp} \ge 3 \sqrt[3]{\frac{V_0}{R} \cdot \frac{V_0}{R} \cdot 2\pi R^2} = 3 \sqrt[3]{2\pi V_0^2}$$
4. Dấu "=" xảy ra khi:
   $$\frac{V_0}{R} = 2\pi R^2 \implies \frac{\pi R^2 h}{R} = 2\pi R^2 \implies \mathbf{h = 2R}$$
   *(Chiều cao bằng đúng đường kính đáy - Lon sữa đặc hoặc lon nước ngọt đạt tỷ lệ vàng tối ưu nguyên liệu).*

---

#### Ví dụ 4
Một công ty bao bì cần sản xuất vỏ lon nước ngọt hình trụ có thể tích $V = 500\text{ cm}^3$. Hãy chứng minh rằng để lượng kim loại dùng làm vỏ lon (diện tích toàn phần) là nhỏ nhất thì chiều cao của lon nước phải bằng đúng đường kính đáy ($h = 2R$).

**Lời giải chi tiết:**
- Gọi $R$ là bán kính đáy, $h$ là chiều cao của lon nước ngọt ($R, h > 0$).
- Ta có thể tích: $V = \pi R^2 h \implies h = \frac{V}{\pi R^2}$.
- Diện tích toàn phần (lượng kim loại sử dụng):
  $$S_{tp} = 2\pi R h + 2\pi R^2 = 2\pi R \left(\frac{V}{\pi R^2}\right) + 2\pi R^2 = \frac{2V}{R} + 2\pi R^2$$
  Tách thành 3 hạng tử dương:
  $$S_{tp} = \frac{V}{R} + \frac{V}{R} + 2\pi R^2$$
- Áp dụng bất đẳng thức Cauchy cho 3 số dương $\frac{V}{R}, \frac{V}{R}, 2\pi R^2$:
  $$S_{tp} \ge 3 \sqrt[3]{\frac{V}{R} \times \frac{V}{R} \times 2\pi R^2} = 3 \sqrt[3]{2\pi V^2}$$
  Vì $V = 500\text{ cm}^3$ là hằng số nên giá trị nhỏ nhất của $S_{tp}$ đạt được khi và chỉ khi 3 số hạng bằng nhau:
  $$\frac{V}{R} = 2\pi R^2 \iff V = 2\pi R^3 \iff \pi R^2 h = 2\pi R^3 \iff h = 2R$$
Vậy chiều cao của lon phải bằng đường kính đáy thì lượng nguyên liệu vỏ hộp là tiết kiệm nhất.

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Ống Dẫn Dầu Khí Chịu Áp Suất Cao:** Theo định luật Laplace trong thủy lực học, ứng suất căng thành ống của hình trụ tròn chịu áp suất bên trong $P$ chỉ bằng $\sigma = \frac{P \cdot R}{t}$ (giảm một nửa so với hình chữ nhật), giúp ống không bị bục vỡ dưới áp suất hàng trăm atmosphere.
2. **Xi lanh Piston Động cơ Đốt Trong:** Buồng đốt động cơ xe máy và ô tô luôn có dạng hình trụ tròn, cho phép các xéc-măng (piston ring) quét kín khít $360^\circ$ giữ áp suất nén cực đại mà không bị rò rỉ khí đốt.
3. **Cột Trụ Cầu Vượt Giao Thông & Khí Động Học:** Các trụ cầu tròn hạn chế tối đa lực cản của dòng nước lũ chảy xiết và xoáy ngầm, ngăn ngừa xói lở móng mố cầu hiệu quả hơn nhiều so với trụ vuông.
4. **Trạm Lưu Trữ Khí Hóa Lỏng LNG & Thùng Xăng Dầu:** Bồn chứa hình trụ nằm ngang với hai đầu chỏm cầu là thiết kế kinh điển giúp phân bổ áp suất hơi hóa lỏng đồng đều, phòng chống nguy cơ nổ áp suất.
5. **Cáp Quang Biển Xuyên Lục Địa:** Lớp vỏ bảo vệ sợi cáp quang Internet dưới đáy biển Thái Bình Dương là các lớp thép bện hình trụ đồng tâm, chịu được sức nén khổng lồ ở độ sâu $4\,000\text{ mét}$ dưới đáy biển.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hình trụ tròn xoay được tạo thành khi quay hình nào sau đây một vòng quanh một cạnh cố định?",
  "options": [
    "A. Tam giác vuông",
    "B. Hình chữ nhật",
    "C. Nửa hình tròn",
    "D. Hình thang cân"
  ],
  "answer": "B. Hình chữ nhật",
  "explanation": "Quay hình chữ nhật một vòng quanh một cạnh cố định sẽ tạo thành một hình trụ tròn xoay."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Công thức tính diện tích xung quanh của hình trụ có bán kính đáy R và chiều cao h là:",
  "options": [
    "A. S_xq = πRh",
    "B. S_xq = 2πRh",
    "C. S_xq = πR²h",
    "D. S_xq = 2πR(R + h)"
  ],
  "answer": "B. S_xq = 2πRh",
  "explanation": "Diện tích xung quanh của hình trụ bằng chu vi đáy nhân với chiều cao: S_xq = 2πRh."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Công thức tính thể tích của khối trụ có bán kính đáy R và chiều cao h là:",
  "options": [
    "A. V = 2πRh",
    "B. V = πRh²",
    "C. V = πR²h",
    "D. V = (1/3)πR²h"
  ],
  "answer": "C. V = πR²h",
  "explanation": "Thể tích hình trụ bằng diện tích đáy nhân với chiều cao: V = πR²h."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một hình trụ có bán kính đáy R = 3 cm và chiều cao h = 4 cm. Diện tích toàn phần của hình trụ bằng:",
  "options": [
    "A. 24π cm²",
    "B. 36π cm²",
    "C. 42π cm²",
    "D. 21π cm²"
  ],
  "answer": "C. 42π cm²",
  "explanation": "S_tp = 2πR(h + R) = 2π * 3 * (4 + 3) = 6π * 7 = 42π cm²."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Một hình trụ có thể tích V = 45π cm³ và bán kính đáy R = 3 cm. Chiều cao h của hình trụ là:",
  "options": [
    "A. 5 cm",
    "B. 15 cm",
    "C. 9 cm",
    "D. 3 cm"
  ],
  "answer": "A. 5 cm",
  "explanation": "h = V / (π * R²) = 45π / (π * 3²) = 45 / 9 = 5 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Mặt cắt của một hình trụ bởi mặt phẳng song song với trục của hình trụ là hình gì?",
  "options": [
    "A. Hình tròn",
    "B. Hình tam giác",
    "C. Hình chữ nhật",
    "D. Hình elip"
  ],
  "answer": "C. Hình chữ nhật",
  "explanation": "Mặt cắt của hình trụ bởi mặt phẳng song song với trục (hoặc đi qua trục) luôn là một hình chữ nhật."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Thiết diện qua trục của một hình trụ là một hình vuông có cạnh bằng 6 cm. Thể tích của hình trụ đó bằng:",
  "options": [
    "A. 54π cm³",
    "B. 36π cm³",
    "C. 108π cm³",
    "D. 27π cm³"
  ],
  "answer": "A. 54π cm³",
  "explanation": "Hình vuông cạnh 6 cm => Đường kính 2R = 6 cm => R = 3 cm; Chiều cao h = 6 cm. Thể tích V = π * R² * h = π * 3² * 6 = 54π cm³."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Nếu tăng gấp đôi chiều cao h và giảm một nửa bán kính đáy R của hình trụ thì thể tích hình trụ thay đổi thế nào?",
  "options": [
    "A. Không đổi",
    "B. Tăng gấp 2 lần",
    "C. Giảm một nửa (chia 2)",
    "D. Giảm 4 lần"
  ],
  "answer": "C. Giảm một nửa (chia 2)",
  "explanation": "V_mới = π * (R/2)² * (2h) = π * (R²/4) * 2h = (1/2) * πR²h = V / 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Khi mở trải mặt xung quanh của một hình trụ, ta nhận được một hình chữ nhật có kích thước 10 cm x 6 cm. Biết 6 cm là chiều cao hình trụ. Bán kính đáy R xấp xỉ bằng:",
  "options": [
    "A. 1,59 cm",
    "B. 3,18 cm",
    "C. 0,95 cm",
    "D. 2,00 cm"
  ],
  "answer": "A. 1,59 cm",
  "explanation": "Chu vi đáy C = 2πR = 10 cm => R = 10 / (2π) = 5 / π ≈ 5 / 3,1416 ≈ 1,59 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tỉ lệ tối ưu giữa chiều cao h và bán kính đáy R để lon đồ hộp hình trụ thể tích V tốn ít kim loại làm vỏ hộp nhất là:",
  "options": [
    "A. h = R",
    "B. h = 2R",
    "C. h = 3R",
    "D. h = 4R"
  ],
  "answer": "B. h = 2R",
  "explanation": "Theo bất đẳng thức Cauchy, diện tích toàn phần S_tp nhỏ nhất khi h = 2R (chiều cao bằng đường kính đáy)."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Tính toán cơ bản:** Một hình trụ có diện tích xung quanh là $60\pi\text{ cm}^2$ và chiều cao là $6\text{ cm}$.
   a) Tính bán kính đáy và diện tích toàn phần của hình trụ.  
   b) Tính thể tích của khối trụ tương ứng.

2. **Bài toán bồn chứa:** Một téc nước hình trụ bằng inox có đường kính đáy $1,2\text{ m}$ và chiều dài thân téc (chiều cao) là $2\text{ m}$.
   a) Téc nước này có thể chứa được tối đa bao nhiêu lít nước? (Lấy $\pi \approx 3,14$).  
   b) Tính diện tích inox cần dùng để làm vỏ téc nước (coi mép hàn không đáng kể).

---

### Thử thách Thực tế: Thiết Kế Vỏ Thùng Phuy Tiêu Chuẩn Quốc Tế

**Bối cảnh:** Một nhà máy cơ khí nhận hợp đồng sản xuất $1\,000$ thùng phuy hình trụ bằng thép mạ kẽm tiêu chuẩn:
- Thể tích quy định: $200\text{ lít} = 0,2\text{ m}^3$.
- Chiều cao thân thùng: $h = 0,8\text{ m}$.

**Yêu cầu:**
1. Tính bán kính đáy $R$ của thùng phuy (lấy $\pi \approx 3,14$, làm tròn đến cm).
2. Tính diện tích tôn thép cần dùng để sản xuất $1$ thùng phuy hoàn chỉnh có nắp.
3. Nếu giá thành mỗi mét vuông thép mạ kẽm là $150\,000$ đồng, hãy tính tổng chi phí mua thép để sản xuất đủ lô $1\,000$ thùng phuy (bỏ qua hao hụt gia công).
