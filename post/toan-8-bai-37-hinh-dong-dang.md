---
title: 'Toán 8 Bài 37: Hình đồng dạng'
description: 'Làm chủ khái niệm Hình đồng dạng Toán 8 Bài 37: Hình đồng dạng phối cảnh, tâm phối cảnh O, tỉ số phối cảnh k, hình học Fractal trong tự nhiên, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Hình học 8
  - Hình đồng dạng
  - Hình đồng dạng phối cảnh
  - Tâm phối cảnh
  - Phép vị tự
  - Kết nối tri thức
grade: 8
---

# Bài 37. Hình đồng dạng

Trong các bài học trước, chúng ta đã nghiên cứu sâu sắc về **tam giác đồng dạng**. Tuy nhiên, thế giới xung quanh chúng ta không chỉ có các tam giác!
- Một chiếc lá bàng non đầu cành có hình dạng giống hệt chiếc lá bàng già to lớn dưới gốc cây.
- Các vòng tròn đồng tâm khi ném một viên sỏi xuống mặt nước hồ phẳng lặng.
- Một bức ảnh được chụp từ máy ảnh kỹ thuật số, sau đó hiển thị trên màn hình đồng hồ thông minh ($1.5\text{ inch}$), màn hình điện thoại ($6.7\text{ inch}$) hay màn hình rạp chiếu phim IMAX khổng lồ ($22\text{ mét}$) mà không hề bị méo mó biến dạng!

Đó chính là bức tranh toàn cảnh về **Hình đồng dạng** trong không gian và tự nhiên. Bài học này sẽ mở rộng tư duy hình học của các em từ tam giác lên mọi hình phẳng bất kì thông qua khái niệm tuyệt đẹp: **Hình đồng dạng phối cảnh**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 37: HÌNH ĐỒNG DẠNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Hình đồng dạng</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hai hình gọi là <strong>đồng dạng</strong> nếu chúng có <strong>cùng hình dạng</strong> nhưng kích thước có thể khác nhau.<br>• Mọi hình tròn luôn đồng dạng.<br>• Mọi hình vuông luôn đồng dạng.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đồng dạng phối cảnh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Các đường thẳng nối các cặp điểm tương ứng cùng quy tụ về <strong>tâm phối cảnh $O$</strong>.<br>• Tỉ số phối cảnh: $\frac{OA'}{OA} = \frac{OB'}{OB} = k$.<br>• Đoạn thẳng tỉ lệ: $A'B' = k \cdot AB$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tâm phối cảnh O</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $O$ có thể nằm <em>ngoài</em> hình.<br>• $O$ có thể nằm <em>trong</em> hình.<br>• $O$ có thể <em>trùng với một đỉnh</em> của hình.<br>• Cùng phía đối với $O$ ($k > 0$) hoặc khác phía ($k < 0$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hình học Fractal</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Cấu trúc <strong>tự đồng dạng (Self-similarity)</strong>:<br>Mỗi bộ phận nhỏ khi phóng to lại chứa chính hình dạng của toàn thể.<br>• Vỏ ốc anh vũ, bông tuyết, lá dương xỉ.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Hình tròn:** Hai hình tròn có bán kính lần lượt là $3\text{ cm}$ và $7\text{ cm}$ có đồng dạng với nhau không? Tỉ số đồng dạng bằng mấy?
2. **Hình vuông:** Hai hình vuông có diện tích lần lượt là $16\text{ cm}^2$ và $64\text{ cm}^2$ có đồng dạng với nhau không?
3. **Cảnh giác hình chữ nhật:** Một hình chữ nhật có kích thước $4 \times 6$ và một hình chữ nhật có kích thước $6 \times 8$ có đồng dạng với nhau không?
4. **Tâm phối cảnh:** Cho tam giác $ABC$. Lấy điểm $O$ nằm ngoài tam giác. Trên tia $OA, OB, OC$ lấy các điểm $A', B', C'$ sao cho $OA' = 2 OA, OB' = 2 OB, OC' = 2 OC$. Tam giác $A'B'C'$ đồng dạng phối cảnh với tam giác $ABC$ theo tỉ số bằng bao nhiêu?
5. **Tỉ số diện tích phối cảnh:** Nếu một hình đa giác được phóng to phối cảnh với tỉ số $k = 3$ thì diện tích của hình mới gấp mấy lần diện tích hình ban đầu?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. **Có!** Mọi hình tròn đều đồng dạng với nhau. Tỉ số đồng dạng bằng tỉ số bán kính: $k = \frac{7}{3}$.
> 2. **Có!** Mọi hình vuông đều đồng dạng với nhau. Cạnh hình vuông nhỏ là $4\text{ cm}$, cạnh hình vuông lớn là $8\text{ cm}$, tỉ số đồng dạng $k = 2$.
> 3. **Không đồng dạng!** Tỉ số chiều dài là $\frac{6}{4} = 1.5$, tỉ số chiều rộng là $\frac{8}{6} \approx 1.33$. Vì $1.5 \neq 1.33$ nên hai hình chữ nhật này không đồng dạng.
> 4. Tỉ số phối cảnh $k = \frac{OA'}{OA} = 2$.
> 5. Diện tích hình mới gấp $k^2 = 3^2 = 9$ lần diện tích hình ban đầu.

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Khái niệm Hình đồng dạng

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Hai hình gọi là **đồng dạng** với nhau nếu chúng có **cùng hình dạng** nhưng kích thước có thể khác nhau (hình này bằng hoặc là phóng to, thu nhỏ của hình kia mà không bị bóp méo).

**Một số hình học luôn đồng dạng trong mọi trường hợp:**
- **Hai hình tròn bất kì:** Luôn đồng dạng với nhau (tỉ số đồng dạng bằng tỉ số hai bán kính $\frac{R'}{R}$).
- **Hai hình vuông bất kì:** Luôn đồng dạng với nhau (tỉ số đồng dạng bằng tỉ số hai cạnh $\frac{a'}{a}$).
- **Hai tam giác đều bất kì:** Luôn đồng dạng với nhau.
- **Hai đa giác đều có cùng số cạnh:** (ví dụ hai ngũ giác đều, hai lục giác đều) luôn đồng dạng với nhau.

**Những hình chưa chắc đã đồng dạng:**
- Hai hình chữ nhật (chỉ đồng dạng khi tỉ số $\frac{\text{dài}}{\text{rộng}}$ của chúng bằng nhau).
- Hai hình thoi (chỉ đồng dạng khi có một góc bằng nhau).
- Hai hình bình hành, hai hình thang.

---

### 2. Hình đồng dạng phối cảnh (Phép vị tự)

> [!IMPORTANT]
> **ĐỊNH NGHĨA HÌNH ĐỒNG DẠNG PHỐI CẢNH:**
> Lấy điểm $O$ cố định làm tâm. Hình $\mathcal{H}'$ gọi là **đồng dạng phối cảnh** (hay hình vị tự) của hình $\mathcal{H}$ với tâm phối cảnh $O$ và tỉ số phối cảnh $k$ ($k > 0$) nếu với mỗi điểm $M$ thuộc hình $\mathcal{H}$, ta xác định được điểm $M'$ thuộc hình $\mathcal{H}'$ sao cho:
> 1. Điểm $M'$ nằm trên tia $OM$.
> 2. Đoạn thẳng $OM' = k \cdot OM$ (hay $\frac{OM'}{OM} = k$).

<div style="text-align: center; margin: 24px 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" style="width: 100%; max-width: 560px; height: auto;" class="lesson-diagram" role="img" aria-label="Hình đồng dạng phối cảnh với tâm O">
    <!-- Tâm phối cảnh O -->
    <circle cx="60" cy="110" r="4.5" fill="#ef4444" />
    <text x="45" y="115" font-family="sans-serif" font-weight="bold" font-size="15" fill="#ef4444">O</text>

    <!-- Các tia chiếu từ O -->
    <line x1="60" y1="110" x2="480" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
    <line x1="60" y1="110" x2="420" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
    <line x1="60" y1="110" x2="520" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />

    <!-- Tam giác ban đầu H (nhỏ) -->
    <polygon points="200,87 180,137 215,120" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2" />
    <text x="195" y="80" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">A</text>
    <text x="165" y="145" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">B</text>
    <text x="220" y="125" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">C</text>
    <text x="180" y="165" font-family="sans-serif" font-weight="bold" font-size="12" fill="#2563eb">Hình H</text>

    <!-- Tam giác phóng to H' (lớn) với k = 2.4 -->
    <polygon points="396,54 348,175 432,134" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2.5" />
    <text x="395" y="45" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">A'</text>
    <text x="330" y="185" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">B'</text>
    <text x="440" y="140" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1e293b">C'</text>
    <text x="375" y="205" font-family="sans-serif" font-weight="bold" font-size="13" fill="#047857">Hình H' (k = 2.4)</text>
  </svg>
  <p style="font-size:0.9em; color:var(--text-secondary,#64748b); margin-top:8px;"><em>Hình 1: Hình H' đồng dạng phối cảnh với hình H tâm O tỉ số k = 2.4. Mọi tia OA, OB, OC đều thẳng hàng!</em></p>
</div>

**Các tính chất cơ bản của hình đồng dạng phối cảnh:**
1. Biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm.
2. Biến đường thẳng thành đường thẳng song song hoặc trùng với nó.
3. Biến đoạn thẳng độ dài $a$ thành đoạn thẳng có độ dài $a' = k \cdot a$.
4. Biến một góc thành góc bằng nó.
5. Biến một tam giác thành tam giác đồng dạng với nó theo tỉ số $k$.
6. Biến một hình tròn bán kính $R$ thành hình tròn bán kính $R' = k \cdot R$.
7. Tỉ số diện tích hai hình: $\frac{S'}{S} = k^2$.

---

### 3. Vị trí của Tâm phối cảnh $O$

Tâm phối cảnh $O$ có thể ở nhiều vị trí linh hoạt:
- **Tâm $O$ nằm ngoài hình:** Tia sáng tỏa rộng ra như bóng đèn máy chiếu phóng hình lên tường.
- **Tâm $O$ trùng với một đỉnh của hình:** Giữ nguyên một đỉnh cố định, kéo dài các cạnh xuất phát từ đỉnh đó gấp $k$ lần (như mô hình tam giác đồng dạng $AMN$ và $ABC$ có $MN \parallel BC$).
- **Tâm $O$ nằm bên trong hình:** Hình mới nở rộng đều từ bên trong ra ngoài xung quanh tâm $O$.

---

## Ứng dụng Tương tác Trực quan

### Mô phỏng Phép Đồng dạng Phối cảnh Tâm $O$

Kéo thanh trượt để thay đổi tỉ số phối cảnh $k$. Quan sát trực quan hình mới $\mathcal{H}'$ (đa giác màu xanh lá) phóng to hoặc thu nhỏ từ tâm phối cảnh $O$ (chấm đỏ), các tia chiếu nối các đỉnh tương ứng hiển thị trực quan theo thời gian thực:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: PHÓNG TO / THU NHỎ PHỐI CẢNH TÂM O</h4>

  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin-bottom: 16px;">
    <div style="display: flex; align-items: center; gap: 10px; width: 100%; max-width: 480px;">
      <label for="k-persp-slider" style="font-weight: bold; min-width: 140px; font-size: 0.95em;">Tỉ số phối cảnh k:</label>
      <input type="range" id="k-persp-slider" min="0.6" max="2.2" step="0.1" value="1.6" style="flex: 1;" oninput="updatePerspectiveSim()">
      <span id="k-persp-val" style="font-weight: bold; color: #2563eb; width: 35px; text-align: right;">1.6</span>
    </div>
  </div>

  <div style="text-align: center; margin: 16px 0;">
    <svg id="persp-svg" viewBox="0 0 560 230" style="width: 100%; max-width: 560px; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
      <!-- Tâm O tại (50, 115) -->
      <circle cx="50" cy="115" r="4.5" fill="#ef4444" />
      <text x="35" y="120" font-family="sans-serif" font-weight="bold" font-size="14" fill="#ef4444">O</text>

      <!-- Các tia chiếu dở dang -->
      <line id="ray-a" x1="50" y1="115" x2="520" y2="35" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3" />
      <line id="ray-b" x1="50" y1="115" x2="520" y2="205" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3" />
      <line id="ray-c" x1="50" y1="115" x2="520" y2="120" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3" />

      <!-- Hình gốc cố định H (xanh lam, k=1.0) -->
      <!-- Điểm gốc: A(180, 93), B(170, 140), C(210, 116) -->
      <polygon points="180,93 170,140 210,116" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2" />
      <text x="175" y="85" font-family="sans-serif" font-weight="bold" font-size="11" fill="#1e293b">A</text>
      <text x="155" y="148" font-family="sans-serif" font-weight="bold" font-size="11" fill="#1e293b">B</text>
      <text x="215" y="120" font-family="sans-serif" font-weight="bold" font-size="11" fill="#1e293b">C</text>

      <!-- Hình biến thiên H' (xanh lá) -->
      <polygon id="persp-poly" points="258,80 242,155 306,117" fill="rgba(16,185,129,0.18)" stroke="#10b981" stroke-width="2.5" />
      <circle id="p-dot-a" cx="258" cy="80" r="3.5" fill="#10b981" />
      <text id="p-txt-a" x="255" y="70" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">A'</text>
      <circle id="p-dot-b" cx="242" cy="155" r="3.5" fill="#10b981" />
      <text id="p-txt-b" x="235" y="170" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">B'</text>
      <circle id="p-dot-c" cx="306" cy="117" r="3.5" fill="#10b981" />
      <text id="p-txt-c" x="312" y="122" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">C'</text>
    </svg>
  </div>

  <div id="persp-info-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 0.95em; line-height: 1.8;">
    Đang tải dữ liệu phối cảnh...
  </div>
</div>

<script>
function updatePerspectiveSim() {
  var k = parseFloat(document.getElementById('k-persp-slider').value);
  document.getElementById('k-persp-val').innerText = k.toFixed(1);

  // Tâm O: (50, 115)
  // Điểm gốc H: A(180, 93), B(170, 140), C(210, 116)
  // Vector OA: (130, -22)
  // Vector OB: (120, +25)
  // Vector OC: (160, +1)
  var ox = 50, oy = 115;
  var ax = ox + (130 * k);
  var ay = oy + (-22 * k);
  var bx = ox + (120 * k);
  var by = oy + (25 * k);
  var cx = ox + (160 * k);
  var cy = oy + (1 * k);

  var poly = document.getElementById('persp-poly');
  if (poly) poly.setAttribute('points', ax + ',' + ay + ' ' + bx + ',' + by + ' ' + cx + ',' + cy);

  var dotA = document.getElementById('p-dot-a');
  if (dotA) { dotA.setAttribute('cx', ax); dotA.setAttribute('cy', ay); }
  var txtA = document.getElementById('p-txt-a');
  if (txtA) { txtA.setAttribute('x', ax - 5); txtA.setAttribute('y', ay - 8); }

  var dotB = document.getElementById('p-dot-b');
  if (dotB) { dotB.setAttribute('cx', bx); dotB.setAttribute('cy', by); }
  var txtB = document.getElementById('p-txt-b');
  if (txtB) { txtB.setAttribute('x', bx - 5); txtB.setAttribute('y', by + 16); }

  var dotC = document.getElementById('p-dot-c');
  if (dotC) { dotC.setAttribute('cx', cx); dotC.setAttribute('cy', cy); }
  var txtC = document.getElementById('p-txt-c');
  if (txtC) { txtC.setAttribute('x', cx + 6); txtC.setAttribute('y', cy + 4); }

  var kSquare = (k * k).toFixed(2);
  var infoBox = document.getElementById('persp-info-box');
  if (infoBox) {
    infoBox.innerHTML = 
      '<strong>Đặc điểm của hình phối cảnh tâm O với tỉ số $k = ' + k.toFixed(1) + '$:</strong><br>' +
      '• Khoảng cách từ tâm đến các đỉnh: $OA\\\' = ' + k.toFixed(1) + ' \\cdot OA$, $OB\\\' = ' + k.toFixed(1) + ' \\cdot OB$, $OC\\\' = ' + k.toFixed(1) + ' \\cdot OC$.<br>' +
      '• Độ dài các cạnh tương ứng tăng gấp $' + k.toFixed(1) + '$ lần: $A\\\'B\\\' = ' + k.toFixed(1) + ' \\cdot AB$.<br>' +
      '• Tỉ số diện tích hai hình: $\\frac{S_{\\mathcal{H}\\\'}}{S_{\\mathcal{H}}} = k^2 = (' + k.toFixed(1) + ')^2 = ' + kSquare + '$.<br>' +
      '<em>Nhận xét: Mọi góc của hình $\\mathcal{H}\\\'$ hoàn toàn bằng các góc của hình $\\mathcal{H}$, hình dạng được bảo toàn nguyên vẹn $100\\%$!</em>';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  updatePerspectiveSim();
});
</script>

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Nhận biết hai hình đồng dạng và hai hình đồng dạng phối cảnh

**Phương pháp giải:**
1. Kiểm tra hai hình có cùng hình dạng không (tất cả các góc tương ứng bằng nhau, các cạnh tương ứng tỉ lệ).
2. Kiểm tra tính phối cảnh: các đường thẳng nối các cặp điểm tương ứng có cùng đồng quy tại một điểm tâm $O$ hay không.

---

#### Bài toán 1:
Trong các khẳng định sau, khẳng định nào ĐÚNG, khẳng định nào SAI? Giải thích vì sao:
a) Hai hình tròn có bán kính bất kì luôn là hai hình đồng dạng phối cảnh.
b) Hai hình vuông bất kì luôn là hai hình đồng dạng.
c) Hai hình chữ nhật có diện tích bằng nhau thì đồng dạng với nhau.
d) Hai hình thoi có độ dài cạnh bằng nhau thì đồng dạng với nhau.

**Lời giải:**

a) **ĐÚNG.** Vì hai hình tròn bất kì luôn có thể tịnh tiến về đồng tâm $O$, khi đó với tâm $O$ và tỉ số $k = \frac{R_2}{R_1}$, mọi điểm trên đường tròn này đều là ảnh vị tự của điểm tương ứng trên đường tròn kia.
b) **ĐÚNG.** Mọi hình vuông đều có 4 góc bằng $90^\circ$ và 4 cạnh bằng nhau nên tỉ số các cạnh tương ứng luôn bằng nhau. Do đó hai hình vuông bất kì luôn đồng dạng.
c) **SAI.** Ví dụ hình chữ nhật $A$ có kích thước $2 \times 8$ (diện tích $16$) và hình chữ nhật $B$ có kích thước $4 \times 4$ (hình vuông, diện tích $16$). Hai hình này có hình dạng hoàn toàn khác nhau, tỉ số các cạnh $\frac{4}{2} = 2 \neq \frac{4}{8} = 0.5$ nên không đồng dạng.
d) **SAI.** Hai hình thoi có cùng độ dài cạnh $a$ nhưng một hình thoi có góc nhọn $30^\circ$, hình thoi kia có góc nhọn $60^\circ$ thì các góc tương ứng không bằng nhau, do đó chúng không đồng dạng.

---

### Dạng 2: Xác định tâm phối cảnh và tỉ số đồng dạng phối cảnh

**Phương pháp giải:**
1. Nối ít nhất hai đường thẳng qua hai cặp điểm tương ứng: $A$ với $A'$, $B$ với $B'$.
2. Giao điểm của hai đường thẳng này chính là **tâm phối cảnh $O$**.
3. Tính tỉ số $k = \frac{OA'}{OA}$ hoặc $k = \frac{A'B'}{AB}$.

---

#### Bài toán 2:
Cho hình bình hành $ABCD$. Lấy điểm $O$ tùy ý trong mặt phẳng.
a) Vẽ hình bình hành $A'B'C'D'$ là hình đồng dạng phối cảnh của hình bình hành $ABCD$ với tâm phối cảnh $O$ và tỉ số $k = 2$.
b) Biết chu vi hình bình hành $ABCD$ là $24\text{ cm}$. Tính chu vi của hình bình hành $A'B'C'D'$.
c) Biết diện tích hình bình hành $ABCD$ là $30\text{ cm}^2$. Tính diện tích hình bình hành $A'B'C'D'$.

**Lời giải:**

a) Cách dựng:
- Từ điểm $O$, kẻ các tia $OA, OB, OC, OD$.
- Trên tia $OA$ lấy điểm $A'$ sao cho $OA' = 2 \cdot OA$.
- Trên tia $OB$ lấy điểm $B'$ sao cho $OB' = 2 \cdot OB$.
- Trên tia $OC$ lấy điểm $C'$ sao cho $OC' = 2 \cdot OC$.
- Trên tia $OD$ lấy điểm $D'$ sao cho $OD' = 2 \cdot OD$.
- Nối các đoạn thẳng $A'B', B'C', C'D', D'A'$. Ta được hình bình hành $A'B'C'D'$ là hình đồng dạng phối cảnh cần dựng.

b) Chu vi hình bình hành $A'B'C'D'$ gấp $k = 2$ lần chu vi hình bình hành $ABCD$:
$$P_{A'B'C'D'} = k \cdot P_{ABCD} = 2 \cdot 24 = 48\text{ cm}$$

c) Tỉ số diện tích hai hình đồng dạng phối cảnh bằng $k^2 = 2^2 = 4$:
$$S_{A'B'C'D'} = k^2 \cdot S_{ABCD} = 4 \cdot 30 = 120\text{ cm}^2$$

---

### Dạng 3: Dựng hình đồng dạng phối cảnh với tâm $O$ trùng một đỉnh

**Phương pháp giải:**
Khi tâm $O$ trùng với một đỉnh của hình (ví dụ đỉnh $A$):
- Đỉnh $A$ giữ nguyên ($A' \equiv A$).
- Các đỉnh còn lại được lấy trên các tia xuất phát từ $A$ theo tỉ số $k$.

---

#### Bài toán 3:
Cho tam giác $ABC$ có diện tích bằng $40\text{ cm}^2$. Gọi $A$ là tâm phối cảnh. Dựng tam giác $AB'C'$ đồng dạng phối cảnh với tam giác $ABC$ tâm $A$, tỉ số $k = \frac{1}{2}$ sao cho $B'$ nằm giữa $A$ và $B$, $C'$ nằm giữa $A$ và $C$.
a) Nêu vị trí của điểm $B'$ và $C'$ trên các cạnh $AB$ và $AC$.
b) Chứng minh $B'C' \parallel BC$.
c) Tính diện tích tam giác $AB'C'$ và diện tích tứ giác $B'BCC'$.

**Lời giải:**

a) Vì tỉ số phối cảnh là $k = \frac{1}{2}$ với tâm $A$:
$$AB' = \frac{1}{2}AB \implies B'\text{ là trung điểm của cạnh } AB$$
$$AC' = \frac{1}{2}AC \implies C'\text{ là trung điểm của cạnh } AC$$

b) Vì $B'$ và $C'$ lần lượt là trung điểm của $AB$ và $AC$, nên $B'C'$ là **đường trung bình** của tam giác $ABC$.
Do đó:
$$B'C' \parallel BC\quad (\text{đpcm})$$

c)
- Tỉ số diện tích của hai tam giác đồng dạng phối cảnh bằng $k^2$:
  $$\frac{S_{AB'C'}}{S_{ABC}} = k^2 = \left(\frac{1}{2}\right)^2 = \frac{1}{4}$$
  Suy ra diện tích tam giác $AB'C'$ là:
  $$S_{AB'C'} = \frac{1}{4} \cdot 40 = 10\text{ cm}^2$$
- Diện tích tứ giác $B'BCC'$ là:
  $$S_{B'BCC'} = S_{ABC} - S_{AB'C'} = 40 - 10 = 30\text{ cm}^2$$

---

### Dạng 4: Bài toán thực tế về phóng to, thu nhỏ và tỉ lệ xích

**Phương pháp giải:**
Áp dụng công thức tỉ lệ xích $k = \frac{\text{Kích thước trên bản đồ}}{\text{Kích thước thực tế}}$:
- Kích thước dài: $L_{\text{thực}} = \frac{L_{\text{bản đồ}}}{k}$.
- Diện tích thực: $S_{\text{thực}} = \frac{S_{\text{bản đồ}}}{k^2}$.

---

#### Bài toán 4:
Một kiến trúc sư thiết kế một công viên xanh hình chữ nhật trên bản vẽ sa bàn với tỉ lệ xích $1 : 500$ ($k = \frac{1}{500}$).
a) Trên bản vẽ sa bàn, khu công viên có chiều dài $40\text{ cm}$ và chiều rộng $25\text{ cm}$. Tính chiều dài và chiều rộng thực tế của công viên theo đơn vị mét.
b) Tính diện tích thực tế của công viên theo đơn vị héc-ta ($1\text{ ha} = 10\,000\text{ m}^2$).
c) Giữa công viên thực tế có một hồ nước hình tròn với diện tích $314\text{ m}^2$. Hỏi diện tích của hồ nước đó trên bản vẽ sa bàn bằng bao nhiêu xăng-ti-mét vuông?

**Lời giải:**

a) Chiều dài thực tế của công viên là:
$$L_{\text{thực}} = 40\text{ cm} \cdot 500 = 20\,000\text{ cm} = 200\text{ m}$$
Chiều rộng thực tế của công viên là:
$$W_{\text{thực}} = 25\text{ cm} \cdot 500 = 12\,500\text{ cm} = 125\text{ m}$$

b) Diện tích thực tế của công viên là:
$$S_{\text{thực}} = 200 \cdot 125 = 25\,000\text{ m}^2$$
Đổi sang héc-ta:
$$S_{\text{thực}} = \frac{25\,000}{10\,000} = 2.5\text{ ha}$$

c) Tỉ số diện tích trên sa bàn so với thực tế là:
$$\frac{S_{\text{sa bàn}}}{S_{\text{thực}}} = k^2 = \left(\frac{1}{500}\right)^2 = \frac{1}{250\,000}$$
Đổi diện tích hồ nước thực tế sang $\text{cm}^2$:
$$314\text{ m}^2 = 314 \cdot 10\,000 = 3\,140\,000\text{ cm}^2$$
Diện tích hồ nước trên bản vẽ sa bàn là:
$$S_{\text{hồ sa bàn}} = \frac{3\,140\,000}{250\,000} = 12.56\text{ cm}^2$$

---

## III. 5 Chuyên đề Khoa học Thực tiễn & Ứng dụng Công nghệ

### 1. Hình học Fractal: Bí mật của Bông tuyết Koch & Cây Dương xỉ
Năm 1975, nhà toán học Benoit Mandelbrot khai sinh ra hình học **Fractal (Hình học Phân đoạn)**:
- Những hình thể có tính chất **tự đồng dạng (Self-similarity)**: Khi phóng to một chi tiết nhỏ bất kì của lá dương xỉ hay bờ biển Na Uy, ta lại nhìn thấy chính hình dáng của toàn bộ chiếc lá hay toàn bộ đường bờ biển đó!
- Công nghệ này được ứng dụng để tạo ra các cảnh rừng núi tuyết hùng vĩ siêu chân thực trong các bộ phim Hollywood như Avatar và Chúa tể những chiếc nhẫn.

### 2. Công nghệ Cảm biến Thu phóng Quang học (Optical Zoom) trên Máy ảnh
Khi bạn bấm nút $Zoom\ 5\times$ hay $Zoom\ 10\times$ trên điện thoại thông minh:
- Một cụm thấu kính tiềm vọng di chuyển bên trong thân máy, dịch chuyển tâm phối cảnh quang học $O$.
- Chùm tia sáng khúc xạ phóng to hình ảnh đồng dạng phối cảnh lên bề mặt cảm biến CMOS mà không hề làm suy giảm độ phân giải hay vỡ hạt điểm ảnh như phóng to kỹ thuật số thông thường.

### 3. Máy chiếu Phim Cinema 4K & Máy chiếu Hologram 3D
Từ một cuộn phim nhỏ bề ngang $35\text{ mm}$ hay một con chip DLP kích thước chỉ bằng ngón tay cái:
- Bóng đèn laser cực mạnh đặt tại tâm phối cảnh $O$ phóng các chùm tia sáng qua ống kính.
- Hình ảnh được phóng to đồng dạng phối cảnh hàng ngàn lần lên màn hình rạp chiếu phim rộng $300\text{ m}^2$ mà các nhân vật, màu sắc và tỉ lệ cơ thể diễn viên vẫn sắc nét đến từng sợi tóc.

### 4. Thiết kế Chip Bán dẫn Siêu nhỏ (Photolithography trong Nhà máy TSMC)
Để chế tạo các con chip vi xử lý $3\text{ nanomet}$ trên iPhone hay card đồ họa AI Nvidia:
- Các kỹ sư vẽ sơ đồ mạch điện khổng lồ trên máy tính.
- Sau đó, một cỗ máy quang khắc sử dụng tia cực tím bước sóng ngắn (EUV) chiếu qua hệ thấu kính thu nhỏ phối cảnh với tỉ số $k = \frac{1}{4}$ hoặc $\frac{1}{10}$, khắc hàng chục tỷ bóng bán dẫn tí hon lên bề mặt tấm bán dẫn silicon với độ chính xác đến từng nguyên tử!

### 5. In $3D$ Mô hình Giải phẫu Tim mạch trong Y khoa
Trước khi tiến hành các ca mổ tim bẩm sinh phức tạp ở trẻ sơ sinh:
- Máy quét CT chụp cắt lớp quả tim bị dị tật.
- Máy in $3D$ phóng to mô hình quả tim lên gấp $3$ lần theo phép đồng dạng phối cảnh.
- Các bác sĩ phẫu thuật có thể cầm trên tay quả tim mô hình phóng to để mổ thử nghiệm và lên phương án can thiệp tối ưu nhất trước khi mổ thật cho em bé.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hai hình bất kì được gọi là đồng dạng với nhau nếu chúng:",
  "options": [
    "Có cùng chu vi",
    "Có cùng diện tích",
    "Có cùng hình dạng nhưng kích thước có thể khác nhau",
    "Có cùng số cạnh và cùng số đo góc"
  ],
  "answer": 2,
  "explanation": "Định nghĩa hình đồng dạng: hai hình có cùng hình dạng nhưng kích thước có thể khác nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cặp hình nào sau đây LUÔN ĐỒNG DẠNG với nhau trong mọi trường hợp?",
  "options": [
    "Hai hình chữ nhật",
    "Hai hình thoi",
    "Hai hình tròn",
    "Hai hình bình hành"
  ],
  "answer": 2,
  "explanation": "Mọi hình tròn bất kì đều luôn đồng dạng với nhau theo tỉ số bằng tỉ số hai bán kính."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Cho đoạn thẳng AB và điểm O. Điểm A prime, B prime thỏa mãn OA prime = 3 OA và OB prime = 3 OB (A prime trên tia OA, B prime trên tia OB). Đoạn thẳng A prime B prime bằng:",
  "options": [
    "AB",
    "2 AB",
    "3 AB",
    "9 AB"
  ],
  "answer": 2,
  "explanation": "Phép đồng dạng phối cảnh tâm O tỉ số k = 3 biến đoạn thẳng AB thành đoạn thẳng A prime B prime có độ dài bằng k · AB = 3 AB."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Một hình tam giác có diện tích 15 cm^2. Hình đồng dạng phối cảnh của nó với tỉ số k = 4 có diện tích là:",
  "options": [
    "60 cm^2",
    "120 cm^2",
    "240 cm^2",
    "16 cm^2"
  ],
  "answer": 2,
  "explanation": "Tỉ số diện tích bằng k^2 = 4^2 = 16. Diện tích hình mới là 16 * 15 = 240 cm^2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Trong phép đồng dạng phối cảnh tâm O tỉ số k, một góc có số đo 50° sẽ biến thành một góc có số đo là:",
  "options": [
    "50°",
    "50° · k",
    "50° / k",
    "180° - 50°"
  ],
  "answer": 0,
  "explanation": "Phép đồng dạng phối cảnh bảo toàn số đo của mọi góc, do đó góc 50° vẫn biến thành góc 50°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho hình vuông có cạnh bằng 5 cm. Một hình vuông khác đồng dạng phối cảnh với nó có chu vi bằng 40 cm. Tỉ số phối cảnh k giữa hình vuông thứ hai và hình vuông thứ nhất là:",
  "options": [
    "2",
    "4",
    "8",
    "1/2"
  ],
  "answer": 0,
  "explanation": "Chu vi hình vuông thứ nhất là 5 * 4 = 20 cm. Chu vi hình vuông thứ hai là 40 cm. Tỉ số phối cảnh k = 40 / 20 = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Khẳng định nào sau đây là SAI?",
  "options": [
    "Hai hình vuông bất kì luôn đồng dạng",
    "Hai tam giác đều bất kì luôn đồng dạng",
    "Hai hình lục giác đều bất kì luôn đồng dạng",
    "Hai hình tam giác cân bất kì luôn đồng dạng"
  ],
  "answer": 3,
  "explanation": "Hai tam giác cân bất kì có thể có góc ở đỉnh khác nhau nên không nhất thiết đồng dạng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một bản đồ có tỉ lệ xích 1 : 20 000. Khoảng cách đo được trên bản đồ giữa hai điểm là 5 cm. Khoảng cách thực tế giữa hai điểm đó là:",
  "options": [
    "1 km",
    "10 km",
    "100 m",
    "1000 cm"
  ],
  "answer": 0,
  "explanation": "Khoảng cách thực tế là 5 cm * 20 000 = 100 000 cm = 1 000 m = 1 km."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Khi tâm phối cảnh O trùng với trọng tâm G của tam giác ABC, phép phóng to phối cảnh với tỉ số k = 2 sẽ:",
  "options": [
    "Giữ nguyên đỉnh A",
    "Phóng to tam giác ABC đều về ba phía xung quanh trọng tâm G",
    "Thu nhỏ tam giác ABC về tâm G",
    "Biến tam giác thành hình vuông"
  ],
  "answer": 1,
  "explanation": "Khi tâm O nằm bên trong tam giác (trùng trọng tâm G), phép vị tự tỉ số k = 2 > 1 sẽ phóng to tam giác nở đều ra ba phía xung quanh điểm G."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Khái niệm Fractal trong toán học dùng để chỉ những hình học có tính chất:",
  "options": [
    "Hoàn toàn ngẫu nhiên không có quy luật",
    "Tự đồng dạng (Self-similarity) ở nhiều cấp độ phóng đại",
    "Chỉ gồm các đường thẳng song song",
    "Luôn có diện tích bằng 0"
  ],
  "answer": 1,
  "explanation": "Hình học Fractal đặc trưng bởi tính tự đồng dạng: khi phóng to một phần nhỏ ta lại thấy hình dạng tương tự như toàn thể."
}'></div>

---

## V. Bài tập tự luyện & Thử thách thực tế

### Bài tập cơ bản
1. Cho hình chữ nhật $ABCD$ có chiều dài $12\text{ cm}$, chiều rộng $8\text{ cm}$. Một hình chữ nhật $A'B'C'D'$ đồng dạng với nó có chiều rộng bằng $12\text{ cm}$. Tính chiều dài và diện tích của hình chữ nhật $A'B'C'D'$.
2. Cho tam giác $ABC$. Lấy điểm $O$ nằm ngoài tam giác. Hãy nêu cách dựng tam giác $A'B'C'$ đồng dạng phối cảnh với $\triangle ABC$ tâm $O$ tỉ số $k = 3$.
3. Một hình tròn có bán kính $4\text{ cm}$. Hình tròn đồng dạng phối cảnh với nó có diện tích gấp $9$ lần diện tích hình tròn ban đầu. Tính bán kính của hình tròn mới.

### Bài tập nâng cao & Vận dụng thực tế
4. **Mô hình sa bàn kiến trúc:** Một tòa chung cư cao $120\text{ m}$ ngoài đời thực được thu nhỏ trên sa bàn dự án bất động sản thành mô hình cao $40\text{ cm}$.
   a) Xác định tỉ lệ xích $k$ của sa bàn kiến trúc đó.
   b) Sân bơi vô cực trên nóc tòa chung cư sa bàn có diện tích $60\text{ cm}^2$. Tính diện tích thực tế của sân bơi vô cực đó theo mét vuông.
5. Cho hình ngũ giác đều $ABCDE$ có tâm $O$. Gọi $M, N, P, Q, R$ lần lượt là trung điểm của $OA, OB, OC, OD, OE$.
   a) Chứng minh rằng ngũ giác $MNPQR$ đồng dạng phối cảnh với ngũ giác $ABCDE$. Xác định tâm và tỉ số phối cảnh.
   b) Tính tỉ số diện tích của ngũ giác $MNPQR$ so với ngũ giác $ABCDE$.
