---
title: 'Toán 9 Bài 14: Cung và dây của một đường tròn - Quan hệ vuông góc, Khoảng cách tâm & Góc ở tâm'
description: 'Lý thuyết toàn diện và bài tập Bài 14 Toán 9: So sánh đường kính và dây, quan hệ vuông góc giữa đường kính và dây, liên hệ dây và khoảng cách đến tâm, góc ở tâm và số đo cung, mô phỏng tương tác dây cung và 10 câu trắc nghiệm có giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Dây cung
  - Đường kính
  - Cung tròn
  - Góc ở tâm
  - Kết nối tri thức
grade: 9
---

# Bài 14. Cung và dây của một đường tròn

Trong thế giới kiến trúc và kỹ thuật cơ khí, từ những nhịp vòm cầu đá ngàn năm tuổi bắc qua sông, cánh cung uốn cong của người thợ săn cổ đại, cho đến mặt cắt của ống kính quang học tinh vi, mối quan hệ giữa **cung tròn**, **dây cung** và **tâm đường tròn** luôn là nền tảng hình học bất biến.

Nếu đường kính là "chiếc thước đo chuẩn mực" lớn nhất xuyên qua tâm của vũ trụ tròn, thì mỗi dây cung và khoảng cách từ tâm đến nó lại ẩn chứa những định lý tuyệt đẹp về tính đối xứng và định lượng:
- Tại sao người thợ mộc chỉ cần một nhát cưa vuông góc từ tâm là chia đôi hoàn hảo thanh gỗ cong?
- Tại sao hai dây càng gần tâm lại càng dài ra, và dây dài nhất có độ dài bằng bao nhiêu?

Trong bài học này, chúng ta sẽ cùng khám phá trọn vẹn các định lý trụ cột về **quan hệ vuông góc giữa đường kính và dây**, **khoảng cách từ tâm đến dây**, cũng như khái niệm nền tảng về **góc ở tâm và số đo cung**!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: CUNG VÀ DÂY CỦA ĐƯỜNG TRÒN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đường kính & Dây cung</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đoạn thẳng nối 2 điểm trên đường tròn gọi là <strong>dây</strong>.<br>• Dây đi qua tâm là <strong>đường kính</strong> ($d = 2R$).<br>• Trong các dây, <strong>đường kính là dây có độ dài lớn nhất</strong> ($AB \le 2R$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Quan hệ Vuông góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đường kính $\perp$ dây $\implies$ đi qua <strong>trung điểm</strong> của dây.<br>• Đường kính đi qua trung điểm của một dây <em>không đi qua tâm</em> $\implies \perp$ với dây ấy.<br>• Tam giác $OAB$ cân tại $O$, $OH \perp AB \implies H$ là trung điểm $AB$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dây & Khoảng cách tới tâm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hai dây bằng nhau $\iff$ <strong>cách đều tâm</strong> ($AB = CD \iff OH = OK$).<br>• Dây lớn hơn $\iff$ <strong>gần tâm hơn</strong> ($AB > CD \iff OH < OK$).<br>• Hệ thức Pythagore cốt lõi: $R^2 = d^2 + \left(\frac{AB}{2}\right)^2$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Góc ở tâm & Số đo cung</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Góc ở tâm:</strong> Góc có đỉnh trùng với tâm $O$.<br>• Số đo cung nhỏ $AB$: $\text{sd}(\text{cung } AB) = \widehat{AOB}$.<br>• Số đo cung lớn: $360^\circ - \text{sd}(\text{cung nhỏ } AB)$.<br>• Hai cung bằng nhau $\iff$ hai góc ở tâm bằng nhau $\iff$ hai dây bằng nhau.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Độ dài cực đại:** Cho đường tròn $(O; 6\text{ cm})$. Một dây $CD$ bất kỳ có độ dài lớn nhất bằng bao nhiêu?
2. **Quan hệ vuông góc:** Cho dây $MN = 8\text{ cm}$ của đường tròn $(O; 5\text{ cm})$. Kẻ đường kính $AB \perp MN$ tại $H$. Độ dài đoạn $MH$ bằng bao nhiêu?
3. **Khoảng cách đến tâm:** Hai dây $AB$ và $CD$ của $(O)$ thỏa mãn khoảng cách từ tâm $O$ đến $AB$ là $3\text{ cm}$, đến $CD$ là $4\text{ cm}$. Dây nào dài hơn?
4. **Góc ở tâm:** Cho tam giác $OAB$ đều ($A, B$ thuộc $(O)$). Số đo của cung nhỏ $AB$ bằng bao nhiêu độ?
5. **Số đo cung lớn:** Nếu cung nhỏ $AB$ có số đo là $75^\circ$ thì cung lớn $AB$ có số đo bằng bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Dây lớn nhất chính là đường kính: $2R = 2 \times 6 = 12\text{ cm}$.
> 2. Vì $AB \perp MN$ nên $H$ là trung điểm của $MN \implies MH = \frac{8}{2} = 4\text{ cm}$.
> 3. Dây $AB$ gần tâm hơn ($3 < 4$) nên $AB > CD$ ($AB$ dài hơn).
> 4. $\triangle OAB$ đều nên $\widehat{AOB} = 60^\circ \implies \text{số đo cung nhỏ } AB = 60^\circ$.
> 5. Số đo cung lớn là $360^\circ - 75^\circ = 285^\circ$.

---

## I. Lý thuyết Trọng tâm

### 1. So sánh độ dài của Đường kính và Dây

Cho đường tròn $(O; R)$ và dây $AB$ bất kỳ của đường tròn đó.
- Nếu $AB$ đi qua tâm $O$: $AB$ chính là đường kính, và $AB = OA + OB = R + R = 2R$.
- Nếu $AB$ không đi qua tâm $O$: Xét tam giác $OAB$, theo bất đẳng thức tam giác ta có:
$$AB < OA + OB = R + R = 2R$$

> [!NOTE]
> **Định lý 1 (Độ dài đường kính và dây):**
> Trong các dây của một đường tròn, **đường kính là dây có độ dài lớn nhất**.
> Với mọi dây $AB$ của $(O; R)$, ta luôn có:
> $$AB \le 2R$$
> Dấu đẳng thức xảy ra khi và chỉ khi dây $AB$ đi qua tâm $O$ (tức $AB$ là đường kính).

---

### 2. Quan hệ Vuông góc giữa Đường kính và Dây

Mối quan hệ vuông góc giữa đường kính và dây cung là công cụ căn bản nhất để liên kết hình học đường tròn với định lý Pythagore trong tam giác vuông.

> [!NOTE]
> **Định lý 2 (Đường kính vuông góc với dây):**
> Trong một đường tròn, đường kính vuông góc với một dây thì đi qua **trung điểm** của dây ấy.
> 
> $$\left. \begin{array}{l} AB \text{ là dây của } (O) \\ CD \text{ là đường kính, } CD \perp AB \text{ tại } H \end{array} \right\} \implies HA = HB$$

*Chứng minh vắn tắt:*
Xét $\triangle OAB$ có $OA = OB = R \implies \triangle OAB$ cân tại $O$.
Đoạn thẳng $OH \perp AB$, do đó trong tam giác cân $OAB$, đường cao $OH$ đồng thời là đường trung tuyến, suy ra $HA = HB$.

> [!WARNING]
> **Định lý 3 (Đảo - Chú ý điều kiện không qua tâm):**
> Trong một đường tròn, đường kính đi qua trung điểm của một dây **không đi qua tâm** thì vuông góc với dây ấy.
> 
> *Lưu ý quan trọng:* Nếu dây đi qua tâm (dây chính là một đường kính khác), thì hai đường kính cắt nhau tại trung điểm của mỗi đường nhưng **chưa chắc đã vuông góc với nhau**! Do đó mệnh đề đảo bắt buộc phải có điều kiện dây **không đi qua tâm**.

---

### 3. Liên hệ giữa Dây và Khoảng cách từ Tâm đến Dây

Kẻ $OH \perp AB$ ($H \in AB$) và $OK \perp CD$ ($K \in CD$). Khi đó $OH$ và $OK$ lần lượt là khoảng cách từ tâm $O$ đến hai dây $AB$ và $CD$.

Áp dụng định lý Pythagore vào tam giác vuông $OHA$ ($H$ là trung điểm của $AB$ nên $AH = \frac{AB}{2}$):
$$OH^2 + AH^2 = OA^2 \iff OH^2 + \left(\frac{AB}{2}\right)^2 = R^2$$

Tương tự với dây $CD$:
$$OK^2 + \left(\frac{CD}{2}\right)^2 = R^2$$

Từ đẳng thức $OH^2 + \left(\frac{AB}{2}\right)^2 = OK^2 + \left(\frac{CD}{2}\right)^2$, ta rút ra định lý:

> [!NOTE]
> **Định lý 4 (Dây và khoảng cách đến tâm):**
> Trong một đường tròn:
> 1. Hai dây bằng nhau khi và chỉ khi chúng cách đều tâm:
> $$AB = CD \iff OH = OK$$
> 2. Trong hai dây, dây nào lớn hơn thì dây đó gần tâm hơn, và ngược lại:
> $$AB > CD \iff OH < OK$$

---

### 4. Góc ở tâm và Số đo của Cung

> [!NOTE]
> **Định nghĩa:**
> - **Góc ở tâm** là góc có đỉnh trùng với tâm của đường tròn.
> - Mỗi góc ở tâm $\widehat{AOB} < 180^\circ$ chắn một **cung nhỏ** $AmB$ nằm bên trong góc đó, và tạo ra một **cung lớn** $AnB$ nằm bên ngoài.
> - Nếu $\widehat{AOB} = 180^\circ$, mỗi cung là một **nửa đường tròn**.

#### Quy ước về số đo cung:
- Số đo của cung nhỏ bằng số đo của góc ở tâm chắn cung đó:
$$\text{sd}(\text{cung } AmB) = \widehat{AOB}$$
- Số đo của cung lớn bằng hiệu giữa $360^\circ$ và số đo của cung nhỏ:
$$\text{sd}(\text{cung } AnB) = 360^\circ - \text{sd}(\text{cung } AmB)$$
- Số đo của nửa đường tròn bằng $180^\circ$. Cung cả đường tròn có số đo $360^\circ$.

#### So sánh hai cung và liên hệ với dây:
Trong một đường tròn hay trong hai đường tròn bằng nhau:
1. Hai cung được gọi là **bằng nhau** nếu chúng có cùng số đo:
$$\text{cung } AB = \text{cung } CD \iff \text{sd}(\text{cung } AB) = \text{sd}(\text{cung } CD)$$
2. Cung nào có số đo lớn hơn thì cung đó **lớn hơn**:
$$\text{sd}(\text{cung } AB) > \text{sd}(\text{cung } CD) \iff \text{cung } AB > \text{cung } CD$$
3. Với hai cung nhỏ:
- Hai cung bằng nhau căng hai dây bằng nhau: $\text{cung } AB = \text{cung } CD \iff AB = CD$.
- Cung lớn hơn căng dây lớn hơn: $\text{cung } AB > \text{cung } CD \iff AB > CD$.

---

## II. Mô phỏng Tương tác: Dây cung, Khoảng cách đến Tâm & Góc ở tâm

Dưới đây là công cụ mô phỏng trực quan giúp các em thay đổi khoảng cách $d$ từ tâm đến dây cung để quan sát biến thiên độ dài của dây $AB$, số đo góc ở tâm và kiểm chứng định lý Pythagore trong đường tròn.

<div class="interactive-chord-sim" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TRỰC QUAN: ĐƯỜNG KÍNH, DÂY CUNG VÀ KHOẢNG CÁCH TỚI TÂM</h4>
  <p style="font-size: 0.9em; text-align: center; color: var(--text-secondary, #64748b);">Kéo thanh trượt điều chỉnh khoảng cách $d = OH$ từ tâm đến dây để kiểm tra độ dài dây $AB$ và góc ở tâm $\widehat{AOB}$.</p>
  
  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: center; margin-top: 16px;">
    <div style="flex: 1 1 300px; max-width: 380px; text-align: center;">
      <svg data-interactive-done="true" id="chordSvg" viewBox="0 0 320 320" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Circle -->
        <circle cx="160" cy="160" r="120" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" />
        <!-- Diameter (dotted reference) -->
        <line x1="40" y1="160" x2="280" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" />
        <line x1="160" y1="40" x2="160" y2="280" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" />
        <!-- Dynamic Chord Line -->
        <line id="chordLine" x1="60" y1="90" x2="260" y2="90" stroke="#ef4444" stroke-width="3" />
        <!-- OH perpendicular -->
        <line id="distLine" x1="160" y1="160" x2="160" y2="90" stroke="#10b981" stroke-width="2.5" />
        <!-- Radii OA, OB -->
        <line id="radiusA" x1="160" y1="160" x2="60" y2="90" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="3" />
        <line id="radiusB" x1="160" y1="160" x2="260" y2="90" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="3" />
        <!-- Right angle symbol -->
        <path id="rightAngleMark" d="M 160 100 L 170 100 L 170 90" fill="none" stroke="#10b981" stroke-width="1.5" />
        <!-- Center O -->
        <circle cx="160" cy="160" r="4.5" fill="#1e293b" />
        <text x="165" y="178" font-size="14" font-weight="bold" fill="#1e293b">O</text>
        <!-- Endpoints A, B and Foot H -->
        <circle id="ptA" cx="60" cy="90" r="4.5" fill="#ef4444" />
        <text id="lblA" x="42" y="94" font-size="14" font-weight="bold" fill="#ef4444">A</text>
        <circle id="ptB" cx="260" cy="90" r="4.5" fill="#ef4444" />
        <text id="lblB" x="268" y="94" font-size="14" font-weight="bold" fill="#ef4444">B</text>
        <circle id="ptH" cx="160" cy="90" r="3.5" fill="#10b981" />
        <text id="lblH" x="165" y="85" font-size="13" font-weight="bold" fill="#10b981">H</text>
      </svg>
    </div>

    <div style="flex: 1 1 280px; max-width: 360px;">
      <div style="margin-bottom: 16px;">
        <label for="distRange" style="font-weight: 600; font-size: 0.95em; display: block; margin-bottom: 6px;">
          Khoảng cách từ tâm $d = OH$: <span id="distVal" style="color: #10b981; font-weight: bold;">6.0</span> cm
        </label>
        <input type="range" id="distRange" min="0" max="9.8" step="0.2" value="6.0" style="width: 100%; cursor: pointer;" />
        <div style="display: flex; justify-content: space-between; font-size: 0.8em; color: #64748b;">
          <span>0 (Trùng tâm)</span>
          <span>Bán kính $R = 10\text{ cm}$</span>
        </div>
      </div>

      <div style="background: var(--card-bg, #ffffff); border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 0.9em; line-height: 1.8;">
        <div>• Bán kính $R = OA = OB = 10.0\text{ cm}$</div>
        <div>• Nửa dây $AH = \sqrt{R^2 - d^2} = $ <strong id="halfChordVal" style="color: #3b82f6;">8.00</strong> cm</div>
        <div>• Độ dài dây $AB = 2AH = $ <strong id="chordLenVal" style="color: #ef4444;">16.00</strong> cm</div>
        <div>• Góc ở tâm $\widehat{AOB} = $ <strong id="angleVal" style="color: #8b5cf6;">106.3°</strong></div>
        <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #e2e8f0; font-style: italic; color: #475569;" id="statusNote">
          Khi $d$ càng nhỏ (càng gần tâm), dây $AB$ càng dài!
        </div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const slider = document.getElementById('distRange');
  if (!slider) return;
  const distVal = document.getElementById('distVal');
  const halfChordVal = document.getElementById('halfChordVal');
  const chordLenVal = document.getElementById('chordLenVal');
  const angleVal = document.getElementById('angleVal');
  const statusNote = document.getElementById('statusNote');

  const chordLine = document.getElementById('chordLine');
  const distLine = document.getElementById('distLine');
  const radiusA = document.getElementById('radiusA');
  const radiusB = document.getElementById('radiusB');
  const ptA = document.getElementById('ptA');
  const ptB = document.getElementById('ptB');
  const ptH = document.getElementById('ptH');
  const lblA = document.getElementById('lblA');
  const lblB = document.getElementById('lblB');
  const lblH = document.getElementById('lblH');
  const rightAngleMark = document.getElementById('rightAngleMark');

  const cx = 160, cy = 160, visualR = 120; // 120px corresponds to 10cm (scale 12px = 1cm)

  function update() {
    const dCm = parseFloat(slider.value);
    distVal.textContent = dCm.toFixed(1);
    
    // Math calculation with R = 10
    const R = 10;
    const halfCm = Math.sqrt(Math.max(0, R*R - dCm*dCm));
    const chordCm = 2 * halfCm;
    const rad = 2 * Math.asin(Math.min(1, halfCm / R));
    const deg = (rad * 180 / Math.PI);

    halfChordVal.textContent = halfCm.toFixed(2);
    chordLenVal.textContent = chordCm.toFixed(2);
    angleVal.textContent = deg.toFixed(1) + '°';

    if (dCm === 0) {
      statusNote.innerHTML = '<span style="color: #dc2626; font-weight: bold;">Đặc biệt:</span> $d = 0$, dây $AB$ đi qua tâm $O$ và trở thành <strong>đường kính</strong> cực đại ($AB = 2R = 20\text{ cm}$)!';
    } else if (dCm > 8.5) {
      statusNote.innerHTML = 'Dây ở rất xa tâm: $AB$ co ngắn lại, góc ở tâm thu hẹp.';
    } else {
      statusNote.innerHTML = 'Hệ thức Pythagore nghiệm đúng: $OH^2 + AH^2 = ' + (dCm*dCm).toFixed(1) + ' + ' + (halfCm*halfCm).toFixed(1) + ' = 100 = R^2$.';
    }

    // SVG update
    const dPx = (dCm / 10) * visualR;
    const halfPx = (halfCm / 10) * visualR;
    const yChord = cy - dPx;
    const xA = cx - halfPx;
    const xB = cx + halfPx;

    chordLine.setAttribute('x1', xA);
    chordLine.setAttribute('y1', yChord);
    chordLine.setAttribute('x2', xB);
    chordLine.setAttribute('y2', yChord);

    distLine.setAttribute('x2', cx);
    distLine.setAttribute('y2', yChord);

    radiusA.setAttribute('x2', xA);
    radiusA.setAttribute('y2', yChord);

    radiusB.setAttribute('x2', xB);
    radiusB.setAttribute('y2', yChord);

    ptA.setAttribute('cx', xA);
    ptA.setAttribute('cy', yChord);
    lblA.setAttribute('x', xA - 18);
    lblA.setAttribute('y', yChord + 4);

    ptB.setAttribute('cx', xB);
    ptB.setAttribute('cy', yChord);
    lblB.setAttribute('x', xB + 8);
    lblB.setAttribute('y', yChord + 4);

    ptH.setAttribute('cx', cx);
    ptH.setAttribute('cy', yChord);
    lblH.setAttribute('x', cx + 6);
    lblH.setAttribute('y', yChord - 6);

    if (dPx > 10) {
      rightAngleMark.style.display = 'inline';
      rightAngleMark.setAttribute('d', `M ${cx} ${yChord + 10} L ${cx + 10} ${yChord + 10} L ${cx + 10} ${yChord}`);
    } else {
      rightAngleMark.style.display = 'none';
    }
  }

  slider.addEventListener('input', update);
  update();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Tính Độ dài Dây, Bán kính và Khoảng cách từ Tâm đến Dây

> [!TIP]
> **Phương pháp cốt lõi:**
> Kẻ đường vuông góc $OH$ từ tâm $O$ xuống dây $AB$ ($H \in AB$).
> Khi đó:
> 1. $H$ là trung điểm của $AB \implies AH = HB = \frac{AB}{2}$.
> 2. Áp dụng định lý Pythagore trong tam giác vuông $OAH$ tại $H$:
> $$OA^2 = OH^2 + AH^2 \iff R^2 = d^2 + \left(\frac{AB}{2}\right)^2$$
> Biết 2 trong 3 đại lượng ($R$, $d = OH$, $AB$), ta luôn tính được đại lượng còn lại.

#### Bài toán mẫu 1.1:
Cho đường tròn $(O; 13\text{ cm})$ và dây $AB = 24\text{ cm}$.
a) Tính khoảng cách từ tâm $O$ đến dây $AB$.
b) Gọi $I$ là một điểm thuộc dây $AB$ sao cho $AI = 7\text{ cm}$. Kẻ dây $CD$ đi qua $I$ và vuông góc với $AB$. Tính độ dài dây $CD$.

**Lời giải chi tiết:**

```
          C
          |
    A-----I---H-----B
          |
          D
```

a) Kẻ $OH \perp AB$ tại $H$.
Theo định lý về quan hệ vuông góc giữa đường kính và dây:
$H$ là trung điểm của $AB \implies AH = \frac{AB}{2} = \frac{24}{2} = 12\text{ cm}$.

Áp dụng định lý Pythagore trong $\triangle OAH$ vuông tại $H$:
$$OH^2 = OA^2 - AH^2 = 13^2 - 12^2 = 169 - 144 = 25 \implies OH = 5\text{ cm}$$
Vậy khoảng cách từ tâm $O$ đến dây $AB$ là $5\text{ cm}$.

b) Tính độ dài dây $CD$:
Ta có: $IH = AH - AI = 12 - 7 = 5\text{ cm}$.
Kẻ $OK \perp CD$ tại $K$.
Tứ giác $OHIK$ có 3 góc vuông: $\widehat{OHI} = 90^\circ$, $\widehat{HIK} = 90^\circ$ (do $CD \perp AB$), $\widehat{OKI} = 90^\circ$.
Do đó $OHIK$ là hình chữ nhật.
Suy ra khoảng cách từ tâm $O$ đến dây $CD$ là:
$$OK = IH = 5\text{ cm}$$

Nhận thấy $OK = OH = 5\text{ cm}$, theo định lý về liên hệ giữa dây và khoảng cách đến tâm:
Hai dây cách đều tâm thì bằng nhau, suy ra:
$$CD = AB = 24\text{ cm}$$

---

### Dạng 2: Chứng minh Quan hệ Vuông góc và Đoạn thẳng Bằng nhau

> [!TIP]
> **Phương pháp cốt lõi:**
> - Để chứng minh $OH \perp AB$: Nối $OA, OB$, chứng minh $\triangle OAB$ cân tại $O$, rồi chỉ ra $H$ là trung điểm của $AB$ để kết luận đường trung tuyến $OH$ đồng thời là đường cao.
> - Để chứng minh $H$ là trung điểm của $AB$: Chứng minh $OH \perp AB$ và áp dụng định lý đường kính vuông góc với dây.
> - Sử dụng tam giác bằng nhau hoặc hình thang cân để liên hệ các đoạn thẳng ngoài đường tròn.

#### Bài toán mẫu 2.1:
Cho đường tròn $(O)$, đường kính $AB$. Từ điểm $C$ trên đường tròn ($C$ khác $A$ và $B$), kẻ $CH \perp AB$ tại $H$. Gọi $D$ là điểm đối xứng với $C$ qua $AB$.
a) Chứng minh điểm $D$ cũng thuộc đường tròn $(O)$.
b) Tứ giác $ACBD$ là hình gì? Vì sao?

**Lời giải chi tiết:**

```
          C
         /|\
        / | \
       A--H--O--B
        \ | /
         \|/
          D
```

a) Vì $D$ đối xứng với $C$ qua $AB$ nên $AB$ là đường trung trực của đoạn thẳng $CD$.
Điểm $O$ nằm trên $AB$, do đó $O$ thuộc đường trung trực của $CD \implies OD = OC$.
Mà điểm $C \in (O) \implies OC = R$.
Suy ra $OD = R$, do đó điểm $D$ cũng thuộc đường tròn $(O)$.

b) Xác định hình dạng của tứ giác $ACBD$:
- Theo giả thiết $D$ đối xứng với $C$ qua $AB$ tại $H$, suy ra $CD \perp AB$ tại $H$ và $H$ là trung điểm của $CD$.
- Vì $AB$ là đường kính và $CD$ là dây vuông góc với $AB$ tại $H$, nên theo định lý đường kính vuông góc với dây, $H$ là trung điểm của $CD$ (phù hợp với phép đối xứng).
- Mặt khác, trong $\triangle ABC$ nội tiếp đường tròn đường kính $AB$, ta có $\widehat{ACB} = 90^\circ$.
- Tương tự, $\triangle ABD$ nội tiếp đường tròn đường kính $AB \implies \widehat{ADB} = 90^\circ$.
- Do $AB$ là trục đối xứng biến $C$ thành $D$ và giữ nguyên $A, B$, nên $\triangle ABC = \triangle ABD$.
- Suy ra $AC = AD$ và $BC = BD$.
- Tứ giác $ACBD$ có hai đường chéo vuông góc với nhau tại trung điểm của một đường ($CD$), và có các cặp cạnh kề đối xứng bằng nhau, đây là hình cánh diều nội tiếp đường tròn.

---

### Dạng 3: So sánh Dây cung và Khoảng cách tới Tâm

> [!TIP]
> **Phương pháp cốt lõi:**
> Sử dụng mối liên hệ tỷ lệ nghịch: Dây càng lớn thì khoảng cách từ tâm đến dây càng nhỏ và ngược lại.
> $$AB > CD \iff OH < OK$$
> Nếu cần so sánh hai dây $AB$ và $CD$, ta có thể quy về so sánh hai đoạn vuông góc $OH$ và $OK$ bằng cách xét tam giác vuông chứa $OH, OK$.

#### Bài toán mẫu 3.1:
Cho đường tròn $(O; R)$ và điểm $M$ nằm bên trong đường tròn ($M \ne O$).
a) Dây đi qua $M$ và vuông góc với $OM$ có tính chất gì về độ dài so với các dây khác cùng đi qua $M$?
b) Dây đi qua $M$ có độ dài lớn nhất là dây nào?

**Lời giải chi tiết:**

```
         (O)
        /   \
       /  M  \
      |   *   |
       \  O  /
        \   /
```

Gọi $AB$ là một dây bất kỳ đi qua $M$. Kẻ $OH \perp AB$ tại $H$.
Khi đó $OH$ là khoảng cách từ tâm $O$ đến dây $AB$.

a) Xét $\triangle OHM$ vuông tại $H$:
Cạnh huyền $OM \ge$ cạnh góc vuông $OH$.
Dấu đẳng thức $OH = OM$ xảy ra khi và chỉ khi $H$ trùng với $M$, tức là $OM \perp AB$.
- Vì $OH \le OM$ với mọi dây $AB$ qua $M$, nên khoảng cách $OH$ đạt giá trị **lớn nhất** bằng $OM$ khi $AB \perp OM$.
- Theo định lý liên hệ giữa dây và khoảng cách đến tâm: Khoảng cách từ tâm đến dây càng lớn thì dây càng nhỏ.
- Do đó, khoảng cách $OH$ lớn nhất đồng nghĩa với độ dài dây $AB$ **ngắn nhất**.
$\implies$ **Kết luận:** Trong tất cả các dây đi qua điểm $M$ ở trong đường tròn, **dây vuông góc với $OM$ tại $M$ là dây có độ dài nhỏ nhất (ngắn nhất)**.

b) Dây đi qua $M$ có độ dài lớn nhất:
Độ dài một dây bất kỳ luôn thỏa mãn $AB \le 2R$.
Dấu đẳng thức xảy ra khi dây $AB$ đi qua tâm $O$.
Vì $M$ là điểm bên trong đường tròn, đường thẳng $OM$ cắt đường tròn tại hai điểm tạo thành một đường kính.
$\implies$ **Kết luận:** Trong tất cả các dây đi qua $M$, **đường kính đi qua $M$ là dây có độ dài lớn nhất (bằng $2R$)**.

---

### Dạng 4: Bài toán Góc ở tâm và Số đo Cung tròn

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. Tính góc ở tâm $\widehat{AOB}$ bằng các tính chất góc của tam giác (tam giác cân $OAB$ vì $OA = OB = R$, tổng ba góc trong tam giác, tỉ số lượng giác sin, cos, tan).
> 2. Suy ra số đo cung nhỏ: $\text{sd}(\text{cung } AB) = \widehat{AOB}$.
> 3. Suy ra số đo cung lớn: $\text{sd}(\text{cung lớn } AB) = 360^\circ - \text{sd}(\text{cung nhỏ } AB)$.

#### Bài toán mẫu 4.1:
Cho đường tròn $(O; R)$ và dây $AB = R\sqrt{3}$.
a) Tính khoảng cách từ tâm $O$ đến dây $AB$.
b) Tính số đo của góc ở tâm $\widehat{AOB}$, từ đó suy ra số đo cung nhỏ $AB$ và cung lớn $AB$.

**Lời giải chi tiết:**
a) Kẻ $OH \perp AB$ tại $H \implies H$ là trung điểm của $AB$:
$$AH = \frac{AB}{2} = \frac{R\sqrt{3}}{2}$$

Áp dụng định lý Pythagore trong $\triangle OAH$ vuông tại $H$:
$$OH = \sqrt{OA^2 - AH^2} = \sqrt{R^2 - \left(\frac{R\sqrt{3}}{2}\right)^2} = \sqrt{R^2 - \frac{3R^2}{4}} = \sqrt{\frac{R^2}{4}} = \frac{R}{2}$$
Vậy khoảng cách từ tâm $O$ đến dây $AB$ bằng $\frac{R}{2}$.

b) Xét tam giác vuông $OAH$ tại $H$:
$$\sin \widehat{AOH} = \frac{AH}{OA} = \frac{\frac{R\sqrt{3}}{2}}{R} = \frac{\sqrt{3}}{2} \implies \widehat{AOH} = 60^\circ$$
Vì $\triangle OAB$ cân tại $O$ có $OH$ là đường cao nên $OH$ cũng là tia phân giác của $\widehat{AOB}$:
$$\widehat{AOB} = 2 \times \widehat{AOH} = 2 \times 60^\circ = 120^\circ$$

Từ đó suy ra:
- Số đo cung nhỏ $AB$: $\text{sd}(\text{cung } AB) = \widehat{AOB} = 120^\circ$.
- Số đo cung lớn $AB$: $360^\circ - 120^\circ = 240^\circ$.

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG THỰC TẾ CỦA CUNG & DÂY CUNG TRÒN
 ┌─────────────────────────────────────────────────────────┐
 │ 1. Kiến trúc vòm đá & cầu nhịp lớn (Sagitta & Span)    │
 │ 2. Cơ khí: Xác định tâm đĩa gia công bị gãy khuyết     │
 │ 3. Radar & Sonar hàng hải: Quét góc ở tâm mục tiêu      │
 │ 4. Thiên văn: Dây che khuất khi Mặt Trăng che Mặt Trời │
 │ 5. Thể thao: Cung tròn vòng cấm 16m50 sân bóng đá      │
 └─────────────────────────────────────────────────────────┘
```

### 1. Kiến trúc Cầu vòm đá & Đại lượng "Sagitta" (Độ võng)
Trong xây dựng cầu vòm đá và đường hầm mái vòm cổ điển, nhịp cầu nằm ngang đóng vai trò là một **dây cung** $AB$ (gọi là *span* $2L$), còn chiều cao từ điểm giữa nhịp cầu lên đỉnh vòm đá chính là đoạn $HM$ trên đường kính vuông góc với dây (trong hình học cổ gọi là *Sagitta* hay độ võng $h$).
Theo định lý dây cung:
$$R^2 = (R - h)^2 + L^2 \iff R = \frac{L^2 + h^2}{2h}$$
Chỉ cần đo nhịp cầu $2L$ và chiều cao đỉnh vòm $h$, các kỹ sư xây dựng lập tức xác định chính xác bán kính $R$ của khung đà đỡ vòm mà không cần phải tiếp cận tâm vòm nằm sâu dưới lòng sông hay lòng đất!

### 2. Cơ khí chế tạo: Phục hồi chi tiết đĩa tròn bị nứt vỡ
Khi một bánh răng công nghiệp hoặc một cổ vật gốm sứ hình tròn bị vỡ chỉ còn lại một mảnh cong nhỏ, làm thế nào để người thợ tiện biết được kích thước đường kính ban đầu để chế tạo bản sao?
- Người thợ vạch hai dây cung bất kỳ $AB$ và $CD$ trên cạnh cong của mảnh vỡ.
- Dựng hai đường trung trực của $AB$ và $CD$.
- Giao điểm của hai đường trung trực chính là tâm $O$ của phôi tròn ban đầu, và khoảng cách từ $O$ đến mép cong chính là bán kính chuẩn $R$!

### 3. Màn hình Radar dẫn đường Hàng không & Sonar Thủy quân
Máy quét radar quay tròn xung quanh đài chỉ huy với chu kỳ đều đặn. Khi phát hiện một mục tiêu di động, chùm tia quét quét qua một **góc ở tâm** $\alpha$. Dựa vào thời gian chùm sóng phản xạ quét qua hai mút của vật thể và góc ở tâm $\alpha$, máy tính trên đài kiểm soát không lưu tính toán chính xác bề rộng (dây cung tương đối) và diện tích phản xạ hiệu dụng của máy bay đối phương.

### 4. Thiên văn học: Hiện tượng Nguyệt thực và Dây che khuất
Khi Mặt Trăng đi vào vùng bóng tối của Trái Đất, bóng đen của Trái Đất in lên bề mặt Mặt Trăng tạo thành một cung tròn. Đoạn nối hai giao điểm của đường viền bóng đen với rìa đĩa sáng Mặt Trăng chính là một dây cung chung. Bằng cách đo độ dài dây cung này và tốc độ di chuyển tương đối, các nhà thiên văn học cổ đại thời Ptolemy và Copernicus đã đo đạc được tỉ lệ đường kính giữa Trái Đất và Mặt Trăng với độ chính xác đáng kinh ngạc.

### 5. Vòng tròn 16m50 và Vòng cung giữ khoảng cách sân Bóng đá
Tại sao trước vòng cấm địa (khu vực 16m50) của sân bóng đá tiêu chuẩn FIFA lại có một cung tròn?
- Điểm đặt bóng phạt đền (penalty spot) cách khung thành đúng $11\text{ m}$.
- Theo luật bóng đá quốc tế, khi thực hiện quả phạt đền, mọi cầu thủ (trừ người sút và thủ môn) đều phải đứng cách bóng tối thiểu $9{,}15\text{ m}$.
- Cung tròn ngoài khu phạt đền chính là một phần của đường tròn tâm là chấm phạt đền, bán kính $R = 9{,}15\text{ m}$, giới hạn phần dây cung bị cắt bởi đường 16m50, giúp trọng tài dễ dàng phát hiện bất kỳ cầu thủ nào đứng lấn cự ly quy định!

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

Dưới đây là 10 câu trắc nghiệm bao quát toàn bộ lý thuyết và các dạng bài tập của Bài 14. Chọn đáp án đúng và nhấn để kiểm tra kết quả ngay lập tức:

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Khẳng định nào sau đây là ĐÚNG khi nói về dây của một đường tròn?",
  "options": [
    "A. Mọi dây cung đều có độ dài bằng nhau",
    "B. Dây cung đi qua tâm là dây có độ dài lớn nhất",
    "C. Dây càng xa tâm thì độ dài của dây càng lớn",
    "D. Dây cung luôn có độ dài lớn hơn đường kính"
  ],
  "correct": 1,
  "explanation": "Theo Định lý 1, trong tất cả các dây của một đường tròn, đường kính (dây đi qua tâm) là dây có độ dài lớn nhất ($AB \\le 2R$)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Cho đường tròn $(O; 10\\text{ cm})$ và một dây $AB$ có khoảng cách đến tâm $OH = 6\\text{ cm}$. Độ dài của dây $AB$ là:",
  "options": [
    "A. 8 cm",
    "B. 12 cm",
    "C. 16 cm",
    "D. 20 cm"
  ],
  "correct": 2,
  "explanation": "Vì $OH \\perp AB$ nên $H$ là trung điểm $AB$. Trong tam giác vuông $OAH$, ta có $AH = \\sqrt{OA^2 - OH^2} = \\sqrt{10^2 - 6^2} = 8\\text{ cm}$. Do đó $AB = 2AH = 2 \\times 8 = 16\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đường kính $AB$ vuông góc với dây $CD$ tại điểm $M$. Khẳng định nào sau đây luôn đúng?",
  "options": [
    "A. $M$ là trung điểm của đoạn thẳng $AB$",
    "B. $M$ là trung điểm của đoạn thẳng $CD$",
    "C. $MC = MD = MO$",
    "D. $CD = AB$"
  ],
  "correct": 1,
  "explanation": "Theo Định lý 2, đường kính vuông góc với một dây thì đi qua trung điểm của dây ấy. Vì $AB \\perp CD$ nên $M$ là trung điểm của dây $CD$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Cho đường tròn $(O)$ có hai dây $AB = 12\\text{ cm}$ và $CD = 16\\text{ cm}$. Gọi $d_1$ và $d_2$ lần lượt là khoảng cách từ tâm $O$ đến dây $AB$ và $CD$. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. $d_1 < d_2$",
    "B. $d_1 = d_2$",
    "C. $d_1 > d_2$",
    "D. $d_1 + d_2 = 28\\text{ cm}$"
  ],
  "correct": 2,
  "explanation": "Theo Định lý về liên hệ giữa dây và khoảng cách đến tâm: Dây nào lớn hơn thì dây đó gần tâm hơn. Vì $AB < CD$ ($12 < 16$) nên khoảng cách đến dây $AB$ phải lớn hơn khoảng cách đến dây $CD$, tức là $d_1 > d_2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Góc ở tâm chắn một cung có số đo bằng 80°. Số đo của góc ở tâm đó là:",
  "options": [
    "A. 40°",
    "B. 80°",
    "C. 160°",
    "D. 100°"
  ],
  "correct": 1,
  "explanation": "Theo định nghĩa về số đo cung tròn: Số đo của cung nhỏ bằng số đo của góc ở tâm chắn cung đó. Do đó số đo góc ở tâm bằng đúng 80°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Nếu một cung nhỏ $AB$ có số đo bằng 110° thì cung lớn $AB$ tương ứng có số đo bằng:",
  "options": [
    "A. 70°",
    "B. 250°",
    "C. 180°",
    "D. 220°"
  ],
  "correct": 1,
  "explanation": "Số đo cung lớn bằng 360° - 110° = 250°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho tam giác đều $ABC$ nội tiếp đường tròn $(O)$. Số đo của cung nhỏ $BC$ là:",
  "options": [
    "A. 60°",
    "B. 90°",
    "C. 120°",
    "D. 180°"
  ],
  "correct": 2,
  "explanation": "Tam giác đều $ABC$ chia đường tròn thành 3 cung bằng nhau: $\\text{cung } AB = \\text{cung } BC = \\text{cung } CA$. Do đó số đo mỗi cung nhỏ bằng 360° : 3 = 120°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho đường tròn $(O; 5\\text{ cm})$ và dây $MN = 6\\text{ cm}$. Khoảng cách từ tâm $O$ đến dây $MN$ bằng:",
  "options": [
    "A. 3 cm",
    "B. 4 cm",
    "C. $\\sqrt{34}$ cm",
    "D. 2 cm"
  ],
  "correct": 1,
  "explanation": "Kẻ $OH \\perp MN$ tại $H \\implies H$ là trung điểm $MN \\implies HN = \\frac{6}{2} = 3\\text{ cm}$. Trong $\\triangle OHN$ vuông tại $H$: $OH = \\sqrt{ON^2 - HN^2} = \\sqrt{5^2 - 3^2} = 4\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho đường tròn $(O; R)$ có hai dây $AB$ và $CD$ bằng nhau và vuông góc với nhau tại $I$. Tứ giác có đỉnh là tâm $O$, hình chiếu của $O$ lên $AB$, điểm $I$ và hình chiếu của $O$ lên $CD$ là hình gì?",
  "options": [
    "A. Hình chữ nhật không phải hình vuông",
    "B. Hình vuông",
    "C. Hình thoi",
    "D. Hình thang cân"
  ],
  "correct": 1,
  "explanation": "Gọi $H, K$ lần lượt là hình chiếu của $O$ lên $AB$ và $CD$. Tứ giác $OHIK$ có 3 góc vuông tại $H, I, K$ nên là hình chữ nhật. Lại có $AB = CD$ nên hai dây cách đều tâm $\\implies OH = OK$. Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Điểm $P$ nằm bên trong đường tròn $(O; R)$ sao cho $OP = d < R$. Trong tất cả các dây đi qua $P$, dây ngắn nhất có độ dài bằng:",
  "options": [
    "A. $2R$",
    "B. $R - d$",
    "C. $2\\sqrt{R^2 - d^2}$",
    "D. $\\sqrt{R^2 - d^2}$"
  ],
  "correct": 2,
  "explanation": "Dây ngắn nhất qua $P$ là dây vuông góc với $OP$ tại $P$. Khi đó khoảng cách từ tâm đến dây bằng $OP = d$. Nửa dây bằng $\\sqrt{R^2 - d^2}$, suy ra độ dài dây ngắn nhất là $2\\sqrt{R^2 - d^2}$."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Khảo sát Vòm đá Cầu Cổ
Một nhóm khảo sát di sản văn hóa cần đo bán kính của một vòm cầu đá hình cung tròn cổ kính. Nhịp thông thủy dưới cầu (khoảng cách giữa hai chân vòm tiếp giáp mặt nước) đo được là $AB = 16\text{ m}$. Điểm cao nhất của vòm đá cách mặt nước một khoảng là $h = 4\text{ m}$.
1. Hãy tính bán kính cong $R$ của vòm cầu đá đó.
2. Khi nước sông dâng cao thêm $1\text{ m}$ (mặt nước dâng lên làm khoảng cách từ mặt nước mới đến đỉnh vòm chỉ còn $3\text{ m}$), bề rộng mặt nước thông qua vòm cầu lúc này là bao nhiêu mét?

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Gọi tâm của cung tròn vòm cầu là $O$, bán kính $R$.
> Dây $AB = 16\text{ m} \implies$ nửa dây $AH = 8\text{ m}$.
> Đoạn đỉnh vòm $M$ nằm trên bán kính qua $H$, nên khoảng cách từ tâm $O$ đến mặt nước là $OH = R - h = R - 4$.
> Áp dụng định lý Pythagore trong $\triangle OAH$:
> $$OA^2 = OH^2 + AH^2 \iff R^2 = (R - 4)^2 + 8^2 \iff R^2 = R^2 - 8R + 16 + 64$$
> $$\iff 8R = 80 \iff R = 10\text{ m}$$
> Vậy bán kính cung tròn vòm cầu đá là $10\text{ m}$.
> 
> 2. Khi nước dâng lên $1\text{ m}$, khoảng cách từ đỉnh vòm đến mặt nước mới là $h' = 3\text{ m}$.
> Khoảng cách từ tâm $O$ đến mặt nước mới là $OH' = R - h' = 10 - 3 = 7\text{ m}$.
> Nửa bề rộng mặt nước mới là:
> $$A'H' = \sqrt{R^2 - OH'^2} = \sqrt{10^2 - 7^2} = \sqrt{100 - 49} = \sqrt{51} \approx 7{,}14\text{ m}$$
> Bề rộng thông thủy mặt nước lúc này là:
> $$A'B' = 2 \times \sqrt{51} \approx 14{,}28\text{ m}$$

---

### Bài tập Tự luyện

**Bài 1:** Cho đường tròn $(O; 15\text{ cm})$, dây $AB = 24\text{ cm}$.
a) Tính khoảng cách từ tâm $O$ đến dây $AB$.
b) Gọi $I$ là điểm trên dây $AB$ sao cho $AI = 6\text{ cm}$. Kẻ dây $CD$ qua $I$ vuông góc với $AB$. So sánh độ dài hai dây $AB$ và $CD$.

**Bài 2:** Cho đường tròn $(O)$, hai dây $AB$ và $CD$ bằng nhau và cắt nhau tại điểm $M$ nằm bên trong đường tròn.
a) Chứng minh khoảng cách từ $O$ đến hai dây $AB$ và $CD$ bằng nhau.
b) Chứng minh $MA = MC$ và $MB = MD$ (với quy ước thứ tự các điểm trên dây).

**Bài 3:** Cho đường tròn $(O; R)$ đường kính $AB$. Kẻ hai dây $AC$ và $BD$ song song với nhau.
a) Chứng minh tứ giác $ABDC$ là hình thang cân.
b) Chứng minh $AC = BD$ và $\text{cung } AC = \text{cung } BD$.
c) Tính số đo góc $\widehat{COD}$ biết số đo cung $AC$ bằng $50^\circ$.
