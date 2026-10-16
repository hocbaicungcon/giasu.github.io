---
title: 'Toán 9 Bài 27: Góc nội tiếp - Định lý, Hệ quả & Góc nhìn Hình học Đột phá'
description: 'Lý thuyết chuẩn xác Bài 27 Toán 9: Khái niệm góc nội tiếp, cung bị chắn, định lý số đo góc nội tiếp bằng nửa số đo cung bị chắn, hệ quả góc vuông chắn nửa đường tròn, widget tương tác kéo đỉnh góc nội tiếp và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Góc nội tiếp
  - Cung bị chắn
  - Góc ở tâm
  - Đường tròn
  - Kết nối tri thức
grade: 9
---

# Bài 27. Góc nội tiếp

Khi bước vào một rạp chiếu phim hiện đại hay một khán đài sân vận động thể thao, bạn có bao giờ thắc mắc:
- *Vì sao các hàng ghế khán giả lại thường được bố trí uốn lượn theo một đường cong hình tròn?*
- *Liệu những khán giả ngồi ở các vị trí khác nhau trên cùng một hàng ghế cong đó có nhận được góc quan sát màn hình bằng nhau hay không?*

Câu trả lời nằm ở một định lý hình học kinh điển nhưng chứa đầy vẻ đẹp quyến rũ: **Định lý Góc nội tiếp**.

Ở lớp 9, đường tròn không chỉ đơn thuần là tập hợp các điểm cách đều tâm, mà còn là "chiếc gương quang học" phản chiếu vô vàn mối quan hệ góc đặc sắc. Trong bài học mở màn cho **Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp**, chúng ta sẽ khám phá trọn vẹn đặc tính của **Góc nội tiếp** — chìa khóa vạn năng để chứng minh tam giác đồng dạng, tứ giác nội tiếp và giải quyết các bài toán thiết kế kiến trúc thực tế!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: GÓC NỘI TIẾP & CÁC HỆ QUẢ VÀNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Góc nội tiếp</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đỉnh nằm trên đường tròn $(O)$.<br>• Hai cạnh chứa hai dây cung của $(O)$.<br>• Cung nằm bên trong góc gọi là <strong>cung bị chắn</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Định lý Số đo Góc nội tiếp</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Trong một đường tròn, số đo góc nội tiếp bằng nửa số đo cung bị chắn:<br>$$\widehat{BAC} = \frac{1}{2} \text{sd}(\text{cung } BC)$$<br>• Bằng một nửa góc ở tâm cùng chắn cung: $\widehat{BAC} = \frac{1}{2}\widehat{BOC}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Các Hệ quả Trọng tâm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Các góc nội tiếp cùng chắn một cung (hoặc các cung bằng nhau) thì <strong>bằng nhau</strong>.<br>• <strong>Góc nội tiếp chắn nửa đường tròn là góc vuông ($90^\circ$)</strong>.<br>• Góc nội tiếp $\le 90^\circ$ bằng nửa góc ở tâm cùng chắn.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng Chứng minh</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chứng minh tam giác vuông (nhận đường kính làm cạnh huyền).<br>• Chứng minh hai tam giác đồng dạng theo trường hợp góc - góc.<br>• Nền tảng chứng minh tứ giác nội tiếp đường tròn.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Một góc có đỉnh nằm ngoài đường tròn có phải là góc nội tiếp không?
2. **Góc vuông kinh điển:** Góc nội tiếp chắn nửa đường tròn có số đo bằng bao nhiêu độ?
3. **Quan hệ với góc ở tâm:** Nếu góc ở tâm $\widehat{BOC} = 100^\circ$ thì góc nội tiếp $\widehat{BAC}$ cùng chắn cung nhỏ $BC$ có số đo bằng bao nhiêu?
4. **Cùng chắn một cung:** Hai góc nội tiếp $\widehat{BAC}$ và $\widehat{BDC}$ cùng nhìn cung $BC$. So sánh số đo của hai góc này.
5. **Số đo cung:** Nếu góc nội tiếp $\widehat{MPN} = 35^\circ$ thì số đo của cung bị chắn $MN$ bằng bao nhiêu độ?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: **Không**, đỉnh của góc nội tiếp bắt buộc phải nằm **trên đường tròn**.
> - Câu 2: Nửa đường tròn có số đo $180^\circ$, nên góc nội tiếp chắn nửa đường tròn bằng $\frac{180^\circ}{2} = 90^\circ$.
> - Câu 3: Góc nội tiếp bằng nửa góc ở tâm: $\frac{100^\circ}{2} = 50^\circ$.
> - Câu 4: Hai góc cùng chắn cung $BC$ nên $\widehat{BAC} = \widehat{BDC}$.
> - Câu 5: Số đo cung bị chắn gấp đôi số đo góc nội tiếp: $35^\circ \times 2 = 70^\circ$.

---

## Lý thuyết trọng tâm

### 1. Định nghĩa Góc nội tiếp

> [!NOTE]
> **Định nghĩa Góc nội tiếp:**
> **Góc nội tiếp** là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó.
> - Cung nằm bên trong góc được gọi là **cung bị chắn**.
> - Góc bẹt (chắn cả đường tròn) không được xét là góc nội tiếp.

*Nhận diện hình ảnh:*
- Cho đường tròn $(O)$ và ba điểm phân biệt $A, B, C$ nằm trên đường tròn.
- Góc $\widehat{BAC}$ có đỉnh $A \in (O)$, hai cạnh $AB$ và $AC$ là hai dây cung $\implies \widehat{BAC}$ là góc nội tiếp chắn cung $BC$.

---

### 2. Định lý về Số đo Góc nội tiếp

> [!NOTE]
> **Định lý Số đo Góc nội tiếp:**
> Trong một đường tròn, số đo của góc nội tiếp bằng nửa số đo của cung bị chắn:
> $$\widehat{BAC} = \frac{1}{2} \text{sd}(\text{cung } BC)$$

**Ba trường hợp vị trí của tâm $O$ đối với góc nội tiếp $\widehat{BAC}$:**
1. **Tâm $O$ nằm trên một cạnh của góc** (ví dụ cạnh $AB$ đi qua $O$):
   Tam giác $OAC$ cân tại $O$ (vì $OA = OC = R$) $\implies \widehat{OAC} = \widehat{OCA}$.
   Góc ở tâm $\widehat{BOC}$ là góc ngoài tại đỉnh $O$ của $\Delta OAC$:
   $$\widehat{BOC} = \widehat{OAC} + \widehat{OCA} = 2\widehat{BAC} \implies \widehat{BAC} = \frac{1}{2}\widehat{BOC} = \frac{1}{2}\text{sd}(\text{cung } BC)$$
2. **Tâm $O$ nằm bên trong góc $\widehat{BAC}$:**
   Kẻ đường kính $AD$. Khi đó tia $AD$ nằm giữa hai tia $AB$ và $AC$. Ta đưa về tổng của hai góc nội tiếp có cạnh đi qua tâm $O$.
3. **Tâm $O$ nằm bên ngoài góc $\widehat{BAC}$:**
   Kẻ đường kính $AD$. Ta đưa về hiệu của hai góc nội tiếp có cạnh đi qua tâm $O$.

---

### 3. Các Hệ quả Vàng của Góc nội tiếp

Trong một đường tròn:
1. Các góc nội tiếp **cùng chắn một cung** hoặc **chắn các cung bằng nhau** thì bằng nhau.
2. Các góc nội tiếp chắn các cung bằng nhau thì bằng nhau; ngược lại, các góc nội tiếp bằng nhau thì chắn các cung bằng nhau.
3. Góc nội tiếp (nhỏ hơn hoặc bằng $90^\circ$) có số đo bằng **nửa góc ở tâm** cùng chắn một cung:
   $$\widehat{BAC} = \frac{1}{2} \widehat{BOC}$$
4. **Góc nội tiếp chắn nửa đường tròn là góc vuông ($90^\circ$):**
   Nếu đoạn thẳng $BC$ là đường kính của $(O)$ và điểm $A$ nằm trên đường tròn ($A \ne B, C$) thì:
   $$\widehat{BAC} = 90^\circ$$

> [!IMPORTANT]
> **Quy tắc vàng nhận biết tam giác vuông:**
> Mọi tam giác nội tiếp đường tròn có một cạnh là đường kính thì tam giác đó **chắc chắn là tam giác vuông** (nhận đường kính làm cạnh huyền).
> Ngược lại, trung điểm cạnh huyền của một tam giác vuông chính là tâm đường tròn ngoại tiếp tam giác đó!

---

## Phòng thí nghiệm Tương tác: Thao tác Kéo Đỉnh Góc Nội Tiếp

Hãy kéo thanh trượt góc của đỉnh $A$ di chuyển dọc trên đường tròn để thấy số đo góc nội tiếp $\widehat{BAC}$ luôn giữ nguyên không đổi và đúng bằng $1/2$ góc ở tâm $\widehat{BOC}$!

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG HÌNH HỌC: ĐẶC TÍNH BẢO TOÀN SỐ ĐO GÓC NỘI TIẾP</h3>
  <p style="text-align: center; color: #64748b; font-size: 0.95em;">Di chuyển đỉnh A trên cung tròn lớn để kiểm nghiệm: Góc nội tiếp luôn bằng 1/2 góc ở tâm!</p>

  <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: 600; font-size: 0.9em; color: #334155;">Góc ở tâm $\widehat{BOC}$:</label>
      <input type="range" id="sliderBOC" min="40" max="180" value="100" step="5" style="width: 140px;" oninput="updateInscribedDemo()">
      <span id="txtBOC" style="font-weight: bold; color: #2563eb; min-width: 45px;">100°</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: 600; font-size: 0.9em; color: #334155;">Vị trí đỉnh A:</label>
      <input type="range" id="sliderPosA" min="120" max="240" value="180" step="2" style="width: 140px;" oninput="updateInscribedDemo()">
      <span id="txtPosA" style="font-weight: bold; color: #dc2626; min-width: 45px;">Đỉnh</span>
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
    <button onclick="setSemiCirclePreset()" style="padding: 6px 14px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.85em;">Thử ngay: Góc chắn nửa đường tròn (90°)</button>
    <button onclick="resetInscribedDemo()" style="padding: 6px 14px; background: #64748b; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.85em;">Mặc định (100°)</button>
  </div>

  <div style="display: flex; justify-content: center; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
    <svg id="svgInscribed" width="360" height="340" viewBox="-180 -170 360 340" style="max-width: 100%; height: auto;"></svg>
  </div>

  <div id="inscribedStats" style="margin-top: 16px; padding: 12px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; text-align: center; font-size: 0.95em;"></div>
</div>

<script>
function updateInscribedDemo() {
  const bocDeg = parseInt(document.getElementById('sliderBOC').value);
  const posADeg = parseInt(document.getElementById('sliderPosA').value);

  document.getElementById('txtBOC').textContent = `${bocDeg}°`;
  document.getElementById('txtPosA').textContent = `${posADeg}°`;

  const svg = document.getElementById('svgInscribed');
  svg.innerHTML = '';
  const R = 120;

  // Circle
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', 0);
  circle.setAttribute('cy', 0);
  circle.setAttribute('r', R);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', '#94a3b8');
  circle.setAttribute('stroke-width', '2');
  svg.appendChild(circle);

  // Points B and C symmetric relative to bottom (angle around 90 deg down, i.e., +Y)
  // Let bottom be 90 deg. B = 90 - boc/2, C = 90 + boc/2
  const radB = ((90 - bocDeg / 2) * Math.PI) / 180;
  const radC = ((90 + bocDeg / 2) * Math.PI) / 180;
  const bx = R * Math.cos(radB);
  const by = R * Math.sin(radB);
  const cx = R * Math.cos(radC);
  const cy = R * Math.sin(radC);

  // Point A on top arc
  const radA = ((posADeg + 90) * Math.PI) / 180;
  const ax = R * Math.cos(radA);
  const ay = R * Math.sin(radA);

  // Highlight arc BC (minor arc)
  const largeArcBC = bocDeg > 180 ? 1 : 0;
  const arcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  arcPath.setAttribute('d', `M ${bx} ${by} A ${R} ${R} 0 ${largeArcBC} 1 ${cx} ${cy}`);
  arcPath.setAttribute('fill', 'none');
  arcPath.setAttribute('stroke', '#3b82f6');
  arcPath.setAttribute('stroke-width', '4');
  svg.appendChild(arcPath);

  // Lines OB and OC (central angle)
  const lineOB = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineOB.setAttribute('x1', 0); lineOB.setAttribute('y1', 0);
  lineOB.setAttribute('x2', bx); lineOB.setAttribute('y2', by);
  lineOB.setAttribute('stroke', '#3b82f6'); lineOB.setAttribute('stroke-width', '1.5');
  lineOB.setAttribute('stroke-dasharray', '4,4');
  svg.appendChild(lineOB);

  const lineOC = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineOC.setAttribute('x1', 0); lineOC.setAttribute('y1', 0);
  lineOC.setAttribute('x2', cx); lineOC.setAttribute('y2', cy);
  lineOC.setAttribute('stroke', '#3b82f6'); lineOC.setAttribute('stroke-width', '1.5');
  lineOC.setAttribute('stroke-dasharray', '4,4');
  svg.appendChild(lineOC);

  // Lines AB and AC (inscribed angle)
  const lineAB = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineAB.setAttribute('x1', ax); lineAB.setAttribute('y1', ay);
  lineAB.setAttribute('x2', bx); lineAB.setAttribute('y2', by);
  lineAB.setAttribute('stroke', '#dc2626'); lineAB.setAttribute('stroke-width', '2.5');
  svg.appendChild(lineAB);

  const lineAC = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineAC.setAttribute('x1', ax); lineAC.setAttribute('y1', ay);
  lineAC.setAttribute('x2', cx); lineAC.setAttribute('y2', cy);
  lineAC.setAttribute('stroke', '#dc2626'); lineAC.setAttribute('stroke-width', '2.5');
  svg.appendChild(lineAC);

  // Points (A, B, C, O)
  const drawPt = (x, y, col, label, lx, ly) => {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', '5');
    c.setAttribute('fill', col);
    svg.appendChild(c);

    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', x + lx); t.setAttribute('y', y + ly);
    t.setAttribute('font-size', '13'); t.setAttribute('font-weight', 'bold');
    t.setAttribute('fill', col);
    t.textContent = label;
    svg.appendChild(t);
  };

  drawPt(0, 0, '#64748b', 'O', 8, -4);
  drawPt(bx, by, '#2563eb', 'B', 8, 12);
  drawPt(cx, cy, '#2563eb', 'C', -18, 12);
  drawPt(ax, ay, '#dc2626', 'A', 0, -10);

  const bacDeg = (bocDeg / 2).toFixed(1);
  document.getElementById('inscribedStats').innerHTML = `Góc ở tâm: <strong>∠BOC = ${bocDeg}°</strong> | Cung bị chắn: <strong>sđ(BC) = ${bocDeg}°</strong><br>Góc nội tiếp: <strong>∠BAC = ${bacDeg}°</strong> (Luôn bằng đúng <strong>1/2 ∠BOC</strong> khi A di chuyển)`;
}

function setSemiCirclePreset() {
  document.getElementById('sliderBOC').value = 180;
  updateInscribedDemo();
}

function resetInscribedDemo() {
  document.getElementById('sliderBOC').value = 100;
  document.getElementById('sliderPosA').value = 180;
  updateInscribedDemo();
}

window.addEventListener('DOMContentLoaded', updateInscribedDemo);
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính số đo Góc nội tiếp và Cung bị chắn

**Phương pháp giải:**
1. Xác định góc nội tiếp và cung tương ứng bị chắn bởi góc đó.
2. Áp dụng công thức:
   $$\widehat{\text{Nội tiếp}} = \frac{1}{2} \text{sd}(\text{cung bị chắn}) = \frac{1}{2} \widehat{\text{Góc ở tâm}}$$
   $$\text{sd}(\text{cung bị chắn}) = 2 \times \widehat{\text{Nội tiếp}}$$
3. Sử dụng tính chất tổng các góc trong tam giác để tính các góc phụ liên quan.

---

#### Ví dụ 1
Cho đường tròn $(O; R)$ và dây cung $BC$ sao cho tam giác $OBC$ đều. Điểm $A$ thuộc cung lớn $BC$.
a) Tính số đo cung nhỏ $BC$ và số đo cung lớn $BC$.  
b) Tính số đo góc nội tiếp $\widehat{BAC}$.

**Lời giải chi tiết:**
a) Vì $\Delta OBC$ đều nên $OB = OC = BC = R$.
Do đó góc ở tâm:
$$\widehat{BOC} = 60^\circ$$
- Số đo cung nhỏ $BC$ bằng số đo góc ở tâm chắn cung đó:
  $$\text{sd}(\text{cung nhỏ } BC) = \widehat{BOC} = 60^\circ$$
- Số đo cung lớn $BC$ là:
  $$\text{sd}(\text{cung lớn } BC) = 360^\circ - 60^\circ = 300^\circ$$

b) Điểm $A$ thuộc cung lớn $BC$, nên góc nội tiếp $\widehat{BAC}$ chắn cung nhỏ $BC$.
Áp dụng định lý số đo góc nội tiếp:
$$\widehat{BAC} = \frac{1}{2}\text{sd}(\text{cung nhỏ } BC) = \frac{1}{2} \times 60^\circ = 30^\circ$$

---

### Dạng 2: Ứng dụng Góc nội tiếp chắn nửa đường tròn chứng minh Vuông góc

**Phương pháp giải:**
Để chứng minh tam giác $ABC$ vuông tại $A$ hoặc hai đoạn thẳng $AB \perp AC$:
1. Chỉ ra điểm $A$ nằm trên đường tròn $(O)$ có đường kính là $BC$.
2. Suy ra góc nội tiếp $\widehat{BAC}$ chắn nửa đường tròn $\implies \widehat{BAC} = 90^\circ \implies AB \perp AC$.

---

#### Ví dụ 2
Cho nửa đường tròn tâm $O$ đường kính $AB$. Lấy điểm $C$ trên nửa đường tròn ($C$ khác $A$ và $B$). Gọi $H$ là hình chiếu vuông góc của $C$ trên đường kính $AB$.
a) Chứng minh tam giác $ABC$ vuông tại $C$.  
b) Cho $AB = 10\text{ cm}$ và $AC = 6\text{ cm}$. Tính độ dài cạnh $BC$ và đoạn thẳng $CH$.

**Lời giải chi tiết:**
a) Điểm $C$ nằm trên đường tròn đường kính $AB$.
Do đó góc $\widehat{ACB}$ là góc nội tiếp chắn nửa đường tròn:
$$\widehat{ACB} = 90^\circ$$
Vậy tam giác $ABC$ vuông tại $C$.

b) Áp dụng định lý Pythagore trong tam giác vuông $ABC$:
$$BC = \sqrt{AB^2 - AC^2} = \sqrt{10^2 - 6^2} = \sqrt{64} = 8\text{ (cm)}$$
Áp dụng hệ thức lượng trong tam giác vuông $ABC$ với đường cao $CH$:
$$CH \cdot AB = AC \cdot BC \implies CH = \frac{AC \cdot BC}{AB} = \frac{6 \times 8}{10} = 4,8\text{ (cm)}$$

---

### Dạng 3: Chứng minh Hai góc bằng nhau & Hai tam giác đồng dạng

**Phương pháp giải:**
1. Trong một đường tròn, hai góc nội tiếp cùng chắn một cung thì bằng nhau.
2. Thiết lập cặp góc bằng nhau để chứng minh hai tam giác đồng dạng theo trường hợp **Góc - Góc (g.g)**.
3. Từ tỉ số đồng dạng, suy ra các hệ thức tích độ dài quen thuộc như:
   $$MA \cdot MB = MC \cdot MD$$

---

#### Ví dụ 3
Cho đường tròn $(O)$ và hai dây cung $AB, CD$ cắt nhau tại điểm $M$ nằm bên trong đường tròn.
a) Chứng minh tam giác $MAC$ đồng dạng với tam giác $MDB$.  
b) Chứng minh hệ thức: $MA \cdot MB = MC \cdot MD$.

**Lời giải chi tiết:**
a) Xét đường tròn $(O)$:
- Góc $\widehat{MCA}$ và góc $\widehat{MBD}$ là hai góc nội tiếp cùng chắn cung $AD$:
  $$\widehat{MCA} = \widehat{MBD} \quad (\text{hay } \widehat{MCA} = \widehat{DBM})$$
- Mặt khác, $\widehat{AMC} = \widehat{DMB}$ (hai góc đối đỉnh).
Do đó, $\Delta MAC \backsim \Delta MDB$ (trường hợp g.g).

b) Từ hai tam giác đồng dạng ở câu a, ta lập tỉ số đồng dạng giữa các cạnh tương ứng:
$$\frac{MA}{MD} = \frac{MC}{MB}$$
Nhân chéo hai vế, ta thu được hệ thức:
$$MA \cdot MB = MC \cdot MD$$
*(Đây chính là Định lý Phương tích của một điểm đối với đường tròn nổi tiếng).*

---

### Dạng 4: Bài toán quỹ tích & Tìm vị trí điểm để góc đạt giá trị đặc biệt

**Phương pháp giải:**
1. Điểm $M$ luôn nhìn đoạn thẳng cố định $AB$ dưới một góc vuông $90^\circ \iff M$ chuyển động trên đường tròn đường kính $AB$.
2. Điểm $M$ nhìn đoạn cố định $AB$ dưới góc không đổi $\alpha \iff M$ nằm trên cung chứa góc $\alpha$ dựng trên đoạn $AB$.

---

#### Ví dụ 4
Cho đoạn thẳng $BC$ cố định có độ dài $8\text{ cm}$. Điểm $A$ thay đổi sao cho tam giác $ABC$ có góc $\widehat{BAC} = 90^\circ$.
a) Điểm $A$ chuyển động trên đường nào?  
b) Tìm giá trị lớn nhất của diện tích tam giác $ABC$.

**Lời giải chi tiết:**
a) Vì $\widehat{BAC} = 90^\circ$ nên tam giác $ABC$ vuông tại $A$.
Gọi $O$ là trung điểm của $BC \implies OB = OC = \frac{8}{2} = 4\text{ cm}$.
Theo tính chất trung tuyến ứng với cạnh huyền:
$$OA = \frac{BC}{2} = 4\text{ cm}$$
Do $O$ cố định và khoảng cách $OA = 4\text{ cm}$ không đổi nên điểm $A$ luôn chuyển động trên **đường tròn đường kính $BC$** (bán kính $R = 4\text{ cm}$, trừ hai điểm $B$ và $C$).

b) Kẻ đường cao $AH \perp BC$. Diện tích tam giác $ABC$ là:
$$S_{ABC} = \frac{1}{2} BC \cdot AH = \frac{1}{2} \times 8 \times AH = 4 AH$$
Độ dài đường cao $AH$ chính là khoảng cách từ $A$ đến đường kính $BC$. Vì $A$ nằm trên đường tròn tâm $O$ nên:
$$AH \le R = 4\text{ cm}$$
Dấu "=" xảy ra khi $A$ là điểm chính giữa của cung $BC$ (tức $\Delta ABC$ vuông cân tại $A$).
Khi đó diện tích lớn nhất là:
$$S_{\max} = 4 \times 4 = 16\text{ (cm}^2\text{)}$$

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Góc Nguy hiểm Ngang trong Hàng hải (Horizontal Danger Angle):** Các thuyền trưởng sử dụng góc nội tiếp để giữ tàu luôn đi trong luồng nước sâu an toàn. Bằng cách ngắm hai ngọn hải đăng $A, B$ trên bờ, nếu góc ngắm $\widehat{APB}$ luôn nhỏ hơn một góc an toàn $\alpha$ quy định, tàu chắc chắn nằm ngoài bãi đá ngầm nguy hiểm.
2. **Thiết kế Khán đài và Sân khấu (Auditorium Sightlines):** Khi thiết kế rạp hát hay phòng chiếu IMAX, các kiến trúc sư bố trí hàng ghế uốn theo cung tròn nhận màn hình làm dây cung chắn. Nhờ định lý góc nội tiếp, mọi khán giả trên cùng hàng ghế đều nhìn trọn vẹn màn hình dưới góc quan sát lý tưởng như nhau.
3. **Nhiếp ảnh & Trường nhìn Ống kính (Field of View):** Khi chụp ảnh góc rộng kiến trúc, các nhiếp ảnh gia dựa vào cung chứa góc để xác định quỹ đạo di chuyển sao cho đối tượng chụp luôn chiếm trọn vẹn khung hình mà không bị méo viền.
4. **Vệ tinh Định vị GPS & Vùng Phủ sóng:** Vùng phủ sóng vô tuyến của vệ tinh địa tĩnh tạo thành một hình nón cắt bề mặt Trái Đất theo một đường tròn, trong đó các trạm thu phát trên mặt đất thu nhận tín hiệu dưới góc nâng tối ưu.
5. **Cơ học Máy & Bánh răng Hành tinh:** Trong các hộp số tự động ô tô, các bánh răng hành tinh ăn khớp và quay quanh bánh răng mặt trời tuân theo quy luật tiếp xúc góc nội tiếp, giúp triệt tiêu rung chấn và phân bổ mô-men xoắn hoàn hảo.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Góc nội tiếp là góc có đặc điểm nào dưới đây?",
  "options": [
    "A. Đỉnh trùng với tâm của đường tròn",
    "B. Đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn",
    "C. Đỉnh nằm bên ngoài đường tròn",
    "D. Đỉnh nằm bên trong đường tròn nhưng khác tâm"
  ],
  "answer": "B. Đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn",
  "explanation": "Theo định nghĩa SGK, góc nội tiếp có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Trong một đường tròn, số đo của góc nội tiếp bằng:",
  "options": [
    "A. Số đo của cung bị chắn",
    "B. Nửa số đo của cung bị chắn",
    "C. Hai lần số đo của cung bị chắn",
    "D. Bằng số đo của góc ở tâm cùng chắn cung đó"
  ],
  "answer": "B. Nửa số đo của cung bị chắn",
  "explanation": "Định lý: Số đo của góc nội tiếp bằng nửa số đo của cung bị chắn."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Góc nội tiếp chắn nửa đường tròn luôn có số đo bằng:",
  "options": [
    "A. 45°",
    "B. 60°",
    "C. 90°",
    "D. 180°"
  ],
  "answer": "C. 90°",
  "explanation": "Nửa đường tròn có số đo 180°, do đó góc nội tiếp chắn nửa đường tròn bằng 180° / 2 = 90° (góc vuông)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho đường tròn (O) có góc ở tâm BOC = 80°. Số đo góc nội tiếp BAC cùng chắn cung nhỏ BC là:",
  "options": [
    "A. 160°",
    "B. 80°",
    "C. 40°",
    "D. 20°"
  ],
  "answer": "C. 40°",
  "explanation": "Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung: BAC = 80° / 2 = 40°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho góc nội tiếp MPN = 50° trong đường tròn (O). Số đo của cung bị chắn MN là:",
  "options": [
    "A. 25°",
    "B. 50°",
    "C. 100°",
    "D. 200°"
  ],
  "answer": "C. 100°",
  "explanation": "Số đo cung bị chắn gấp đôi số đo góc nội tiếp: sd(MN) = 2 * 50° = 100°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho tam giác ABC nội tiếp đường tròn (O) có cạnh BC là đường kính. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "A. Tam giác ABC là tam giác đều",
    "B. Tam giác ABC vuông tại A",
    "C. Tam giác ABC vuông tại B",
    "D. Tam giác ABC cân tại A"
  ],
  "answer": "B. Tam giác ABC vuông tại A",
  "explanation": "Góc BAC là góc nội tiếp chắn nửa đường tròn đường kính BC nên góc BAC = 90°, vậy tam giác ABC vuông tại A."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Trên một đường tròn, hai góc nội tiếp cùng chắn một dây cung nhưng nằm về hai phía đối diện của dây cung đó có mối quan hệ gì?",
  "options": [
    "A. Bằng nhau",
    "B. Có tổng số đo bằng 90°",
    "C. Có tổng số đo bằng 180°",
    "D. Có hiệu số đo bằng 90°"
  ],
  "answer": "C. Có tổng số đo bằng 180°",
  "explanation": "Hai góc này chắn hai cung bù nhau tạo thành cả đường tròn (360°), nên tổng hai góc nội tiếp bằng 360° / 2 = 180°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tứ giác ABCD nội tiếp đường tròn (O). Cặp góc nào sau đây chắc chắn BẰNG NHAU?",
  "options": [
    "A. Góc BAC và góc BDC",
    "B. Góc ABC và góc ADC",
    "C. Góc BAD và góc BCD",
    "D. Góc ABD và góc ACD nhưng khác nhau"
  ],
  "answer": "A. Góc BAC và góc BDC",
  "explanation": "Hai góc BAC và BDC là hai góc nội tiếp cùng chắn cung BC của đường tròn, do đó chúng bằng nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho đường tròn (O; 5 cm) và tam giác ABC vuông tại A nội tiếp (O). Độ dài cạnh huyền BC bằng:",
  "options": [
    "A. 5 cm",
    "B. 10 cm",
    "C. 2,5 cm",
    "D. 7,5 cm"
  ],
  "answer": "B. 10 cm",
  "explanation": "Tam giác vuông nội tiếp đường tròn thì cạnh huyền chính là đường kính: BC = 2R = 2 * 5 = 10 cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Cho hình thoi ABCD. Có tồn tại đường tròn đi qua cả 4 đỉnh của hình thoi ABCD không (khi ABCD không phải là hình vuông)?",
  "options": [
    "A. Luôn luôn tồn tại",
    "B. Không bao giờ tồn tại",
    "C. Tồn tại khi góc A = 60°",
    "D. Tồn tại khi AC = BD"
  ],
  "answer": "B. Không bao giờ tồn tại",
  "explanation": "Hình thoi không phải hình vuông có hai góc đối bằng nhau nhưng không vuông, tổng hai góc đối không bằng 180°, do đó 4 đỉnh của nó không thể cùng nằm trên một đường tròn."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Tính góc nội tiếp:** Cho đường tròn $(O)$ và tam giác cân $ABC$ ($AB = AC$) nội tiếp đường tròn. Biết góc $\widehat{BAC} = 50^\circ$.
   a) Tính số đo cung nhỏ $BC$ và cung nhỏ $AB$.  
   b) Tính số đo góc $\widehat{ABC}$ và góc ở tâm $\widehat{BOC}$.

2. **Góc vuông chắn nửa đường tròn:** Cho nửa đường tròn đường kính $AB = 2R$. Lấy điểm $C$ trên nửa đường tròn sao cho cung $AC$ có số đo $60^\circ$. Kẻ $CH \perp AB$ ($H \in AB$).
   a) Chứng minh tam giác $ABC$ là nửa tam giác đều.  
   b) Tính độ dài các cạnh $AC, BC$ và đoạn thẳng $CH$ theo $R$.

---

### Thử thách Thực tế: Thiết kế Góc Nhìn Tối Ưu cho Khán Đài Nhà Hát (Acoustic & Vision Design)

**Bối cảnh:** Một nhà hát hiện đại thiết kế sân khấu biểu diễn dạng cung tròn có bề rộng $AB = 16\text{ m}$. Hàng ghế VIP phía trước được bố trí uốn cong theo một cung tròn đi qua $A$ và $B$ sao cho mọi khán giả ngồi trên hàng ghế này đều nhìn sân khấu $AB$ dưới góc quan sát không đổi là $\widehat{APB} = 60^\circ$.

**Yêu cầu:**
1. Tính bán kính $R$ của đường tròn chứa hàng ghế VIP.
2. Tính khoảng cách từ khán giả ngồi ở vị trí chính giữa hàng ghế VIP đến tâm sân khấu.
3. Giải thích tại sao việc bố trí ghế theo cung tròn lại tạo ra sự công bằng tuyệt đối về trường nhìn cho tất cả khán giả ngồi trên hàng ghế đó.
