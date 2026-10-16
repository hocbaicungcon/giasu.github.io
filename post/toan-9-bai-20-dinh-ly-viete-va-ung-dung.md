---
title: 'Toán 9 Bài 20: Định lý Viète và ứng dụng - Nhẩm nghiệm, Biểu thức đối xứng & Tìm tham số m'
description: 'Lý thuyết toàn diện Bài 20 Toán 9: Định lý Viète (tổng S và tích P), quy tắc nhẩm nghiệm a+b+c=0 và a-b+c=0, tìm hai số biết tổng tích, tính giá trị biểu thức đối xứng, tìm tham số m, widget tương tác và 10 câu trắc nghiệm có giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Định lý Viète
  - Hệ thức Viète
  - Nhẩm nghiệm
  - Biểu thức đối xứng
  - Kết nối tri thức
grade: 9
---

# Bài 20. Định lý Viète và ứng dụng

Vào thế kỷ 16, nhà toán học người Pháp François Viète (1540 – 1603) — một luật sư đồng thời là nhà mật mã học thiên tài phục vụ vua Henry IV — đã tạo nên một cuộc cách mạng vĩ đại trong lịch sử toán học khi lần đầu tiên đưa các chữ cái vào đại số để đại diện cho cả ẩn số và hệ số.

Từ phát minh mang tính bước ngoặt đó, ông đã tìm ra một định lý tuyệt đẹp mang tên mình: **Định lý Viète** (Viète's formulas). Định lý này thiết lập một mối dây liên kết kỳ diệu giữa **các nghiệm** của phương trình và **các hệ số** của nó:
- Ta có thể biết chính xác tổng và tích của hai nghiệm trong tích tắc mà **không cần giải phương trình**!
- Ta có thể nhẩm ra nghiệm trong vài giây khi các hệ số có tổng bằng $0$.
- Ta có thể tái tạo lại phương trình ban đầu chỉ từ thông tin tổng và tích của hai nghiệm.

Trong các đề thi vào lớp 10 THPT, câu hỏi vận dụng Định lý Viète kết hợp với tham số $m$ chiếm vị trí "bất biến" trong mọi đề thi tuyển sinh trên toàn quốc. Hãy cùng nhau làm chủ viên ngọc quý của đại số này nhé!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐỊNH LÝ VIÈTE VÀ ỨNG DỤNG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định lý Viète</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Nếu $ax^2 + bx + c = 0$ ($a \ne 0$) có 2 nghiệm $x_1, x_2$:<br>• <strong>Tổng:</strong> $S = x_1 + x_2 = -\frac{b}{a}$.<br>• <strong>Tích:</strong> $P = x_1 \cdot x_2 = \frac{c}{a}$.<br>• <em>(Điều kiện tiên quyết: $\Delta \ge 0$).</em></p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Kỹ thuật Nhẩm nghiệm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Nếu $a + b + c = 0$:</strong> $x_1 = 1; \ x_2 = \frac{c}{a}$.<br>• <strong>Nếu $a - b + c = 0$:</strong> $x_1 = -1; \ x_2 = -\frac{c}{a}$.<br>• Nhẩm 2 số có tổng $S$ và tích $P$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Tìm 2 số biết Tổng & Tích</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biết $u + v = S$ và $u \cdot v = P$.<br>• $u, v$ là nghiệm của phương trình:<br>&nbsp;&nbsp;$$X^2 - SX + P = 0$$<br>• Điều kiện tồn tại hai số: $S^2 - 4P \ge 0$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biểu thức đối xứng & Tham số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $x_1^2 + x_2^2 = S^2 - 2P$.<br>• $x_1^3 + x_2^3 = S^3 - 3SP$.<br>• $|x_1 - x_2| = \sqrt{S^2 - 4P}$.<br>• 2 nghiệm trái dấu $\iff P < 0$ ($ac < 0$).</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tổng nghiệm:** Phương trình $x^2 - 7x + 12 = 0$ có tổng hai nghiệm bằng bao nhiêu?
2. **Tích nghiệm:** Phương trình $2x^2 + 5x - 6 = 0$ có tích hai nghiệm bằng bao nhiêu?
3. **Nhẩm nhanh:** Phương trình $2026x^2 - 2027x + 1 = 0$ có hai nghiệm là những số nào?
4. **Nhẩm nhanh âm:** Phương trình $5x^2 + 7x + 2 = 0$ có hai nghiệm là những số nào?
5. **Lập phương trình:** Hai số có tổng $S = 5$ và tích $P = 6$ là nghiệm của phương trình bậc hai nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $x_1 + x_2 = -\frac{b}{a} = -\frac{-7}{1} = 7$.
> 2. $x_1 \cdot x_2 = \frac{c}{a} = \frac{-6}{2} = -3$.
> 3. Vì $a + b + c = 2026 - 2027 + 1 = 0 \implies x_1 = 1; \ x_2 = \frac{1}{2026}$.
> 4. Vì $a - b + c = 5 - 7 + 2 = 0 \implies x_1 = -1; \ x_2 = -\frac{2}{5}$.
> 5. Là nghiệm của phương trình $X^2 - 5X + 6 = 0$ (hai số đó là $2$ và $3$).

---

## I. Lý thuyết Trọng tâm

### 1. Định lý Viète (Thuận)

Cho phương trình bậc hai $ax^2 + bx + c = 0$ ($a \ne 0$).
Nếu $\Delta = b^2 - 4ac \ge 0$, phương trình có hai nghiệm:
$$x_1 = \frac{-b + \sqrt{\Delta}}{2a}; \quad x_2 = \frac{-b - \sqrt{\Delta}}{2a}$$

Khi đó:
- **Tổng hai nghiệm:**
$$x_1 + x_2 = \frac{-b + \sqrt{\Delta}}{2a} + \frac{-b - \sqrt{\Delta}}{2a} = \frac{-2b}{2a} = -\frac{b}{a}$$
- **Tích hai nghiệm:**
$$x_1 \cdot x_2 = \left(\frac{-b + \sqrt{\Delta}}{2a}\right)\left(\frac{-b - \sqrt{\Delta}}{2a}\right) = \frac{(-b)^2 - (\sqrt{\Delta})^2}{4a^2} = \frac{b^2 - (b^2 - 4ac)}{4a^2} = \frac{4ac}{4a^2} = \frac{c}{a}$$

> [!NOTE]
> **Định lý Viète:**
> Nếu phương trình bậc hai $ax^2 + bx + c = 0$ ($a \ne 0$) có hai nghiệm $x_1, x_2$ thì:
> $$\begin{cases} S = x_1 + x_2 = -\frac{b}{a} \\ P = x_1 \cdot x_2 = \frac{c}{a} \end{cases}$$

> [!WARNING]
> **Lưu ý sống còn khi làm bài thi:**
> Trước khi áp dụng Định lý Viète, các em **bắt buộc phải kiểm tra điều kiện phương trình có nghiệm** ($\Delta \ge 0$ hoặc $\Delta' \ge 0$). Nếu phương trình vô nghiệm ($\Delta < 0$) thì không tồn tại $x_1, x_2$, việc viết hệ thức Viète sẽ bị trừ điểm toàn bộ câu hỏi!

---

### 2. Các Quy tắc Nhẩm nghiệm Đặc biệt

Nhờ định lý Viète, ta có hai trường hợp nhẩm nghiệm thần tốc:

#### a) Trường hợp $a + b + c = 0$:
Nếu phương trình $ax^2 + bx + c = 0$ ($a \ne 0$) có $a + b + c = 0$ thì:
- Thay $x = 1$ vào phương trình: $a(1)^2 + b(1) + c = a + b + c = 0$.
- Do đó $x_1 = 1$ luôn là một nghiệm của phương trình.
- Theo Viète: $x_1 \cdot x_2 = \frac{c}{a} \implies 1 \cdot x_2 = \frac{c}{a} \implies x_2 = \frac{c}{a}$.

> [!NOTE]
> **Quy tắc 1:**
> Nếu $a + b + c = 0$ thì phương trình có hai nghiệm:
> $$x_1 = 1; \quad x_2 = \frac{c}{a}$$

#### b) Trường hợp $a - b + c = 0$:
Nếu phương trình $ax^2 + bx + c = 0$ ($a \ne 0$) có $a - b + c = 0$ thì:
- Thay $x = -1$ vào phương trình: $a(-1)^2 + b(-1) + c = a - b + c = 0$.
- Do đó $x_1 = -1$ luôn là một nghiệm của phương trình.
- Theo Viète: $x_1 \cdot x_2 = \frac{c}{a} \implies (-1) \cdot x_2 = \frac{c}{a} \implies x_2 = -\frac{c}{a}$.

> [!NOTE]
> **Quy tắc 2:**
> Nếu $a - b + c = 0$ thì phương trình có hai nghiệm:
> $$x_1 = -1; \quad x_2 = -\frac{c}{a}$$

---

### 3. Định lý Viète Đảo: Tìm Hai Số biết Tổng và Tích

Giả sử có hai số $u$ và $v$ thỏa mãn:
$$\begin{cases} u + v = S \\ u \cdot v = P \end{cases}$$
Từ $u + v = S \implies v = S - u$. Thay vào biểu thức tích:
$$u(S - u) = P \iff uS - u^2 = P \iff u^2 - Su + P = 0$$
Điều này chứng tỏ $u$ là nghiệm của phương trình bậc hai $X^2 - SX + P = 0$. Do vai trò của $u$ và $v$ đối xứng như nhau, nên $v$ cũng là nghiệm của phương trình đó.

> [!NOTE]
> **Định lý Viète đảo:**
> Nếu hai số có tổng bằng $S$ và tích bằng $P$ thì hai số đó là hai nghiệm của phương trình:
> $$X^2 - SX + P = 0$$
> **Điều kiện để tồn tại hai số đó:** Phương trình phải có nghiệm, tức là:
> $$\Delta = S^2 - 4P \ge 0$$

---

### 4. Bảng Chuyển đổi Biểu thức Đối xứng Sang $S$ và $P$

Biểu thức đối xứng giữa hai biến $x_1, x_2$ là biểu thức không thay đổi giá trị khi ta hoán đổi vị trí của $x_1$ và $x_2$. Mọi biểu thức đối xứng đều có thể biểu diễn qua $S = x_1 + x_2$ và $P = x_1 x_2$:

| Biểu thức ban đầu | Biến đổi theo $S$ và $P$ | Công thức gọn |
| :--- | :--- | :---: |
| $x_1^2 + x_2^2$ | $(x_1 + x_2)^2 - 2x_1 x_2$ | $S^2 - 2P$ |
| $x_1^3 + x_2^3$ | $(x_1 + x_2)^3 - 3x_1 x_2(x_1 + x_2)$ | $S^3 - 3SP$ |
| $(x_1 - x_2)^2$ | $(x_1 + x_2)^2 - 4x_1 x_2$ | $S^2 - 4P$ |
| $\|x_1 - x_2\|$ | $\sqrt{(x_1 - x_2)^2}$ | $\sqrt{S^2 - 4P}$ |
| $\frac{1}{x_1} + \frac{1}{x_2}$ | $\frac{x_1 + x_2}{x_1 x_2}$ | $\frac{S}{P}$ ($P \ne 0$) |
| $\frac{x_1}{x_2} + \frac{x_2}{x_1}$ | $\frac{x_1^2 + x_2^2}{x_1 x_2}$ | $\frac{S^2 - 2P}{P}$ |
| $x_1^4 + x_2^4$ | $(x_1^2 + x_2^2)^2 - 2(x_1 x_2)^2$ | $(S^2 - 2P)^2 - 2P^2$ |

---

### 5. Dấu của các Nghiệm của Phương trình Bậc hai

Cho phương trình $ax^2 + bx + c = 0$ ($a \ne 0$). Giả sử phương trình có hai nghiệm $x_1, x_2$:
1. **Hai nghiệm trái dấu:**
   $$\iff x_1 \cdot x_2 < 0 \iff P < 0 \iff \frac{c}{a} < 0 \iff ac < 0$$
   *(Khi $ac < 0$ thì $\Delta$ luôn dương nên không cần xét điều kiện $\Delta$).*
2. **Hai nghiệm cùng dấu:**
   $$\iff \begin{cases} \Delta \ge 0 \\ P > 0 \end{cases}$$
3. **Hai nghiệm cùng dương ($0 < x_1 \le x_2$):**
   $$\iff \begin{cases} \Delta \ge 0 \\ P > 0 \\ S > 0 \end{cases}$$
4. **Hai nghiệm cùng âm ($x_1 \le x_2 < 0$):**
   $$\iff \begin{cases} \Delta \ge 0 \\ P > 0 \\ S < 0 \end{cases}$$

---

## II. Mô phỏng Tương tác: Máy tính & Khám phá Hệ thức Viète

Dưới đây là công cụ phân tích Viète tự động. Các em có thể nhập các hệ số $a, b, c$ bất kỳ để hệ thống tự động kiểm tra điều kiện $\Delta$, tính tổng $S$, tích $P$, nhẩm nghiệm tức thì và tính toán trọn bộ các biểu thức đối xứng!

<div class="interactive-viete-explorer" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÁY TÍNH HỆ THỨC VIÈTE & BIỂU THỨC ĐỐI XỨNG</h4>
  
  <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: flex-start; margin-top: 16px;">
    <!-- Inputs & Quick Inspection -->
    <div style="flex: 1 1 280px; max-width: 320px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 12px;">
        <div>
          <label style="font-size: 0.82em; font-weight: bold; display: block;">Hệ số a:</label>
          <input type="number" id="vA" value="1" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; text-align: center;" />
        </div>
        <div>
          <label style="font-size: 0.82em; font-weight: bold; display: block;">Hệ số b:</label>
          <input type="number" id="vB" value="-5" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; text-align: center;" />
        </div>
        <div>
          <label style="font-size: 0.82em; font-weight: bold; display: block;">Hệ số c:</label>
          <input type="number" id="vC" value="6" step="1" style="width: 100%; padding: 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; text-align: center;" />
        </div>
      </div>

      <div id="vieteNotice" style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 12px; font-size: 0.85em; line-height: 1.6;">
        <strong id="vRule" style="color: #047857; display: block; margin-bottom: 4px;">Nhẩm nghiệm qua S và P</strong>
        <span id="vDetail">Phương trình có 2 nghiệm: x₁ = 2, x₂ = 3</span>
      </div>
    </div>

    <!-- Live Computed Cards -->
    <div style="flex: 1 1 340px; max-width: 440px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.88em;">
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #3b82f6; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">Tổng $S = x_1 + x_2$</div>
          <div id="resS" style="font-size: 1.2em; font-weight: bold; color: #1d4ed8;">5.00</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #10b981; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">Tích $P = x_1 x_2$</div>
          <div id="resP" style="font-size: 1.2em; font-weight: bold; color: #047857;">6.00</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #f59e0b; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">$x_1^2 + x_2^2 = S^2 - 2P$</div>
          <div id="resS2" style="font-size: 1.2em; font-weight: bold; color: #b45309;">13.00</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #8b5cf6; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">$|x_1 - x_2| = \sqrt{S^2 - 4P}$</div>
          <div id="resDiff" style="font-size: 1.2em; font-weight: bold; color: #6d28d9;">1.00</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #ec4899; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">$\frac{1}{x_1} + \frac{1}{x_2} = \frac{S}{P}$</div>
          <div id="resInv" style="font-size: 1.2em; font-weight: bold; color: #db2777;">0.83</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #06b6d4; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">$x_1^3 + x_2^3 = S^3 - 3SP$</div>
          <div id="resS3" style="font-size: 1.2em; font-weight: bold; color: #0891b2;">35.00</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const inA = document.getElementById('vA');
  const inB = document.getElementById('vB');
  const inC = document.getElementById('vC');
  if (!inA || !inB || !inC) return;

  const resS = document.getElementById('resS');
  const resP = document.getElementById('resP');
  const resS2 = document.getElementById('resS2');
  const resDiff = document.getElementById('resDiff');
  const resInv = document.getElementById('resInv');
  const resS3 = document.getElementById('resS3');
  const vRule = document.getElementById('vRule');
  const vDetail = document.getElementById('vDetail');
  const notice = document.getElementById('vieteNotice');

  function update() {
    const a = parseFloat(inA.value);
    const b = parseFloat(inB.value);
    const c = parseFloat(inC.value);

    if (isNaN(a) || a === 0) {
      notice.style.background = '#fef2f2';
      notice.style.borderColor = '#fecaca';
      vRule.style.color = '#dc2626';
      vRule.textContent = 'Hệ số a phải khác 0!';
      vDetail.textContent = 'Vui lòng nhập a ≠ 0.';
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      notice.style.background = '#fef2f2';
      notice.style.borderColor = '#fecaca';
      vRule.style.color = '#dc2626';
      vRule.textContent = 'Phương trình vô nghiệm (Δ = ' + delta.toFixed(2) + ' < 0)';
      vDetail.textContent = 'Không áp dụng được định lý Viète vì không có nghiệm thực!';
      resS.textContent = '---';
      resP.textContent = '---';
      resS2.textContent = '---';
      resDiff.textContent = '---';
      resInv.textContent = '---';
      resS3.textContent = '---';
      return;
    }

    notice.style.background = '#ecfdf5';
    notice.style.borderColor = '#a7f3d0';
    vRule.style.color = '#047857';

    // Check special mental math cases
    if (Math.abs(a + b + c) < 1e-6) {
      vRule.textContent = 'Đặc biệt: a + b + c = 0';
      vDetail.textContent = 'Nghiệm nhẩm ngay: x₁ = 1, x₂ = c/a = ' + (c / a).toFixed(2);
    } else if (Math.abs(a - b + c) < 1e-6) {
      vRule.textContent = 'Đặc biệt: a - b + c = 0';
      vDetail.textContent = 'Nghiệm nhẩm ngay: x₁ = -1, x₂ = -c/a = ' + (-c / a).toFixed(2);
    } else {
      vRule.textContent = 'Phương trình có nghiệm (Δ ≥ 0)';
      vDetail.textContent = 'Định lý Viète được áp dụng chính xác.';
    }

    const S = -b / a;
    const P = c / a;
    const S2 = S * S - 2 * P;
    const diff = Math.sqrt(Math.max(0, S * S - 4 * P));
    const inv = P !== 0 ? (S / P) : null;
    const S3 = S * S * S - 3 * S * P;

    resS.textContent = S.toFixed(2);
    resP.textContent = P.toFixed(2);
    resS2.textContent = S2.toFixed(2);
    resDiff.textContent = diff.toFixed(2);
    resInv.textContent = inv !== null ? inv.toFixed(2) : 'Không xác định (P = 0)';
    resS3.textContent = S3.toFixed(2);
  }

  inA.addEventListener('input', update);
  inB.addEventListener('input', update);
  inC.addEventListener('input', update);
  update();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Nhẩm Nghiệm Phương trình Bậc hai

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. Tính tổng các hệ số:
>    - Nếu $a + b + c = 0 \implies x_1 = 1; \ x_2 = \frac{c}{a}$.
>    - Nếu $a - b + c = 0 \implies x_1 = -1; \ x_2 = -\frac{c}{a}$.
> 2. Nếu không rơi vào 2 trường hợp trên, tính nhẩm $S = -\frac{b}{a}$ và $P = \frac{c}{a}$:
>    Tìm hai số có tích bằng $P$ và tổng bằng $S$ bằng cách phân tích $P$ thành tích các thừa số nguyên.

#### Bài toán mẫu 1.1:
Nhẩm nghiệm các phương trình sau:
a) $7x^2 - 9x + 2 = 0$
b) $12x^2 + 19x + 7 = 0$
c) $x^2 - 8x + 15 = 0$

**Lời giải chi tiết:**
a) Xét phương trình $7x^2 - 9x + 2 = 0$:
Các hệ số: $a = 7, b = -9, c = 2$.
Ta có:
$$a + b + c = 7 + (-9) + 2 = 0$$
Do đó phương trình có hai nghiệm:
$$x_1 = 1; \quad x_2 = \frac{c}{a} = \frac{2}{7}$$

b) Xét phương trình $12x^2 + 19x + 7 = 0$:
Các hệ số: $a = 12, b = 19, c = 7$.
Ta có:
$$a - b + c = 12 - 19 + 7 = 0$$
Do đó phương trình có hai nghiệm:
$$x_1 = -1; \quad x_2 = -\frac{c}{a} = -\frac{7}{12}$$

c) Xét phương trình $x^2 - 8x + 15 = 0$:
Các hệ số: $a = 1, b = -8, c = 15$.
Theo Viète, hai nghiệm $x_1, x_2$ (nếu có) thỏa mãn:
$$S = x_1 + x_2 = 8 \quad \text{và} \quad P = x_1 \cdot x_2 = 15$$
Vì $P = 15 = 3 \times 5$ và $3 + 5 = 8 = S$.
Do đó phương trình có hai nghiệm là:
$$x_1 = 3; \quad x_2 = 5$$

---

### Dạng 2: Tính Giá trị Biểu thức Đối xứng giữa Hai Nghiệm

> [!TIP]
> **Phương pháp cốt lõi:**
> **Bước 1:** Kiểm tra điều kiện phương trình có hai nghiệm: $\Delta \ge 0$ (hoặc $\Delta' \ge 0$).
> **Bước 2:** Viết hệ thức Viète: $S = x_1 + x_2 = -\frac{b}{a}$ và $P = x_1 x_2 = \frac{c}{a}$.
> **Bước 3:** Biến đổi biểu thức cần tính sao cho xuất hiện $x_1 + x_2$ và $x_1 x_2$.
> **Bước 4:** Thay $S$ và $P$ vào biểu thức rồi tính toán kết quả.

#### Bài toán mẫu 2.1:
Không giải phương trình, hãy tính giá trị của các biểu thức sau biết $x_1, x_2$ là hai nghiệm của phương trình $2x^2 - 6x - 1 = 0$:
a) $A = x_1^2 + x_2^2$
b) $B = \frac{x_1}{x_2} + \frac{x_2}{x_1}$
c) $C = |x_1 - x_2|$

**Lời giải chi tiết:**
Xét phương trình $2x^2 - 6x - 1 = 0$:
Ta có: $a = 2, c = -1 \implies ac = 2 \times (-1) = -2 < 0$.
Vì $a$ và $c$ trái dấu nên phương trình luôn có hai nghiệm phân biệt $x_1, x_2$.

Theo định lý Viète:
$$\begin{cases} S = x_1 + x_2 = -\frac{b}{a} = -\frac{-6}{2} = 3 \\ P = x_1 x_2 = \frac{c}{a} = -\frac{1}{2} \end{cases}$$

a) Tính $A = x_1^2 + x_2^2$:
$$A = (x_1 + x_2)^2 - 2x_1 x_2 = S^2 - 2P = 3^2 - 2\left(-\frac{1}{2}\right) = 9 + 1 = 10$$

b) Tính $B = \frac{x_1}{x_2} + \frac{x_2}{x_1}$:
$$B = \frac{x_1^2 + x_2^2}{x_1 x_2} = \frac{A}{P} = \frac{10}{-\frac{1}{2}} = -20$$

c) Tính $C = |x_1 - x_2|$:
Ta có:
$$C^2 = (x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2 = S^2 - 4P = 3^2 - 4\left(-\frac{1}{2}\right) = 9 + 2 = 11$$
Vì $C = |x_1 - x_2| \ge 0$ nên:
$$C = \sqrt{11}$$

---

### Dạng 3: Tìm Hai Số biết Tổng và Tích

> [!TIP]
> **Phương pháp cốt lõi:**
> Muốn tìm hai số $u$ và $v$ biết $u + v = S$ và $u \cdot v = P$:
> 1. Kiểm tra điều kiện: $S^2 - 4P \ge 0$.
> 2. Nếu thỏa mãn, lập phương trình bậc hai: $X^2 - SX + P = 0$.
> 3. Giải phương trình tìm được hai nghiệm $X_1, X_2$.
> 4. Kết luận: $(u; v) = (X_1; X_2)$ hoặc $(u; v) = (X_2; X_1)$.

#### Bài toán mẫu 3.1:
Tìm hai số $u$ và $v$ trong mỗi trường hợp sau:
a) $u + v = 11$ và $u \cdot v = 28$.
b) $u - v = 3$ và $u \cdot v = 40$.

**Lời giải chi tiết:**
a) Ta có $S = u + v = 11$ và $P = u \cdot v = 28$.
Kiểm tra điều kiện:
$$S^2 - 4P = 11^2 - 4 \times 28 = 121 - 112 = 9 > 0$$
Điều kiện thỏa mãn, $u$ và $v$ là hai nghiệm của phương trình:
$$X^2 - 11X + 28 = 0$$
Giải phương trình: $\Delta = (-11)^2 - 4 \times 28 = 9 \implies \sqrt{\Delta} = 3$.
$$X_1 = \frac{11 + 3}{2} = 7; \quad X_2 = \frac{11 - 3}{2} = 4$$
Vậy hai số cần tìm là: $(u = 7; v = 4)$ hoặc $(u = 4; v = 7)$.

b) Đặt $v' = -v$, ta có:
$$\begin{cases} u + v' = u - v = 3 \\ u \cdot v' = u(-v) = -u \cdot v = -40 \end{cases}$$
Như vậy $u$ và $v'$ có tổng $S = 3$ và tích $P = -40$.
Kiểm tra điều kiện: $S^2 - 4P = 3^2 - 4(-40) = 9 + 160 = 169 = 13^2 > 0$.
$u$ và $v'$ là nghiệm của phương trình:
$$X^2 - 3X - 40 = 0$$
Phương trình có hai nghiệm:
$$X_1 = \frac{3 + 13}{2} = 8; \quad X_2 = \frac{3 - 13}{2} = -5$$
- Nếu $u = 8 \implies v' = -5 \implies v = -v' = 5$.
- Nếu $u = -5 \implies v' = 8 \implies v = -v' = -8$.
Vậy hai số $(u; v)$ cần tìm là $(8; 5)$ hoặc $(-5; -8)$.

---

### Dạng 4: Tìm Tham số $m$ để Hai Nghiệm Thỏa mãn Hệ thức Cho trước

> [!TIP]
> **Phương pháp cốt lõi (Bài toán 9+ trong đề thi vào 10):**
> **Bước 1:** Tìm điều kiện để phương trình có hai nghiệm: $a \ne 0$ và $\Delta \ge 0$ (hoặc $\Delta > 0$ nếu đề bài yêu cầu "hai nghiệm phân biệt"). Ký hiệu điều kiện này là $(1)$.
> **Bước 2:** Áp dụng hệ thức Viète:
> $$\begin{cases} x_1 + x_2 = -\frac{b}{a} \quad (2) \\ x_1 x_2 = \frac{c}{a} \quad (3) \end{cases}$$
> **Bước 3:** Kết hợp hệ thức đề bài cho với hệ thức $(2)$ và $(3)$ để tìm $m$.
> - Nếu hệ thức đối xứng: Đưa về $S$ và $P$ rồi thay vào giải $m$.
> - Nếu hệ thức không đối xứng (ví dụ: $x_1 = 2x_2$ hoặc $2x_1 + 3x_2 = 5$): Kết hợp hệ thức này với $x_1 + x_2 = S$ thành hệ hai phương trình bậc nhất, giải tìm $x_1, x_2$ theo $m$, rồi thế vào phương trình tích $x_1 x_2 = P$.
> **Bước 4:** **So sánh giá trị $m$ vừa tìm được với điều kiện $(1)$** để kết luận.

#### Bài toán mẫu 4.1:
Cho phương trình: $x^2 - 2(m + 1)x + m^2 + 2 = 0$ ($m$ là tham số).
Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn:
$$x_1^2 + x_2^2 - x_1 x_2 = 7$$

**Lời giải chi tiết:**
Phương trình có $a = 1 \ne 0, b = -2(m + 1) \implies b' = -(m + 1), c = m^2 + 2$.

**Bước 1:** Điều kiện để phương trình có hai nghiệm phân biệt:
$$\Delta' > 0 \iff [-(m + 1)]^2 - 1 \cdot (m^2 + 2) > 0$$
$$\iff m^2 + 2m + 1 - m^2 - 2 > 0 \iff 2m - 1 > 0 \iff m > \frac{1}{2} \quad (*)$$

**Bước 2:** Theo định lý Viète:
$$\begin{cases} S = x_1 + x_2 = 2(m + 1) \\ P = x_1 x_2 = m^2 + 2 \end{cases}$$

**Bước 3:** Biến đổi hệ thức đề bài:
$$x_1^2 + x_2^2 - x_1 x_2 = 7 \iff (x_1 + x_2)^2 - 3x_1 x_2 = 7$$
Thay $S$ và $P$ vào:
$$[2(m + 1)]^2 - 3(m^2 + 2) = 7$$
$$\iff 4(m^2 + 2m + 1) - 3m^2 - 6 = 7$$
$$\iff 4m^2 + 8m + 4 - 3m^2 - 6 - 7 = 0$$
$$\iff m^2 + 8m - 9 = 0$$

Nhận thấy phương trình ẩn $m$ có $a + b + c = 1 + 8 + (-9) = 0$, do đó:
$$m_1 = 1; \quad m_2 = -9$$

**Bước 4:** Đối chiếu với điều kiện $(*)$ ($m > \frac{1}{2}$):
- $m_1 = 1 > \frac{1}{2}$ (Thỏa mãn).
- $m_2 = -9 < \frac{1}{2}$ (Loại).
Vậy giá trị cần tìm là $m = 1$.

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
    ỨNG DỤNG CỦA ĐỊNH LÝ VIÈTE TRONG KỸ THUẬT & ĐỜI SỐNG
 ┌────────────────────────────────────────────────────────┐
 │ 1. Mật mã học RSA: Phân tích số nguyên tố lớn          │
 │ 2. Lý thuyết Ma trận & Cơ học Lượng tử (Trace & Det)   │
 │ 3. Kiến trúc & Nghệ thuật: Tỉ lệ Vàng (Golden Ratio)   │
 │ 4. Kỹ thuật Điều khiển Tự động: Đặt cực hệ thống       │
 │ 5. Tài chính Định lượng: Cân đối Rủi ro & Lợi nhuận    │
 └────────────────────────────────────────────────────────┘
```

### 1. Mật mã học RSA: Bài toán bảo mật Internet toàn cầu
Thuật toán mã hóa khóa công khai RSA bảo vệ mọi giao dịch ngân hàng và tin nhắn bảo mật trên Internet hoạt động dựa trên việc nhân hai số nguyên tố rất lớn $p$ và $q$:
$$N = p \cdot q \quad \text{và} \quad \phi(N) = (p - 1)(q - 1) = pq - (p + q) + 1 = N - (p + q) + 1$$
Từ đó suy ra:
$$S = p + q = N - \phi(N) + 1 \quad \text{và} \quad P = p \cdot q = N$$
Như vậy, $p$ và $q$ chính là nghiệm của phương trình Viète:
$$X^2 - SX + P = 0$$
Nếu ai đó giải được phương trình này với các số hàng trăm chữ số, toàn bộ hệ thống mật mã ngân hàng sẽ bị giải mã!

### 2. Lý thuyết Ma trận & Cơ học Lượng tử: Vết và Định thức
Trong đại số tuyến tính của cơ học lượng tử, đối với một ma trận Hamiltonian $2 \times 2$, hai mức năng lượng khả dĩ (các giá trị riêng $\lambda_1, \lambda_2$) tuân theo đúng định lý Viète:
- Tổng hai mức năng lượng bằng **Vết của ma trận** (Trace): $\lambda_1 + \lambda_2 = \text{Tr}(A)$.
- Tích hai mức năng lượng bằng **Định thức của ma trận** (Determinant): $\lambda_1 \cdot \lambda_2 = \det(A)$.
Các nhà vật lý lượng tử tính toán ngay được phổ năng lượng của nguyên tử mà không cần giải phương trình sóng phức tạp!

### 3. Tỉ lệ Vàng $\Phi$ trong Nghệ thuật và Kiến trúc
Tỉ lệ vàng $\Phi \approx 1{,}618$ xuất hiện trong các tác phẩm của Leonardo da Vinci, tháp Eiffel và logo của hãng Apple, được định nghĩa bởi phương trình:
$$\frac{x}{1} = \frac{1}{x - 1} \iff x^2 - x - 1 = 0$$
Theo định lý Viète:
$$x_1 + x_2 = 1 \quad \text{và} \quad x_1 \cdot x_2 = -1$$
Hai nghiệm của phương trình này là $\Phi = \frac{1 + \sqrt{5}}{2} \approx 1{,}618$ và $-\frac{1}{\Phi} = \frac{1 - \sqrt{5}}{2} \approx -0{,}618$. Hai đại lượng này có mối liên hệ bất biến: $\Phi - \frac{1}{\Phi} = 1$ và $\Phi \times \left(-\frac{1}{\Phi}\right) = -1$!

### 4. Kỹ thuật Điều khiển Tự động: Ổn định Hệ thống Phản hồi
Khi lập trình bộ điều khiển cân bằng cho máy bay không người lái (drone) hay robot tự hành hai bánh Segway:
Kỹ sư cần đưa hệ thống về hai vị trí điểm cực mong muốn $s_1$ và $s_2$.
Bằng Định lý Viète đảo, họ lập phương trình đặc tính $s^2 - (s_1 + s_2)s + s_1 s_2 = 0$, từ đó tính toán chính xác các hệ số khuếch đại $K_p, K_d$ trong mạch điều khiển phản hồi PID để robot đứng vững cân bằng không bị lật.

### 5. Tài chính Định lượng: Danh mục Đầu tư Tối ưu
Khi phân bổ dòng tiền vào hai tài sản tài chính (cổ phiếu và trái phiếu), nhà đầu tư cần tìm tỉ trọng phân bổ sao cho đạt mức lợi nhuận kỳ vọng $S$ đồng thời triệt tiêu độ biến động rủi ro $P$. Định lý Viète đảo cung cấp lời giải trực tiếp để tìm cặp tỉ trọng tối ưu trên đường biên hiệu quả (Markowitz Efficient Frontier).

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Phương trình $x^2 - 9x + 14 = 0$ có tổng hai nghiệm $S$ và tích hai nghiệm $P$ lần lượt là:",
  "options": [
    "A. $S = -9, P = 14$",
    "B. $S = 9, P = 14$",
    "C. $S = 9, P = -14$",
    "D. $S = 14, P = 9$"
  ],
  "correct": 1,
  "explanation": "Theo hệ thức Viète: $S = -\\frac{b}{a} = -\\frac{-9}{1} = 9$ và $P = \\frac{c}{a} = \\frac{14}{1} = 14$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Phương trình $3x^2 - 4x + 1 = 0$ có các nghiệm là:",
  "options": [
    "A. $x_1 = 1, x_2 = \\frac{1}{3}$",
    "B. $x_1 = -1, x_2 = -\\frac{1}{3}$",
    "C. $x_1 = 1, x_2 = -\\frac{1}{3}$",
    "D. $x_1 = -1, x_2 = \\frac{1}{3}$"
  ],
  "correct": 0,
  "explanation": "Ta có $a + b + c = 3 + (-4) + 1 = 0 \\implies x_1 = 1$ và $x_2 = \\frac{c}{a} = \\frac{1}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Phương trình $5x^2 + 8x + 3 = 0$ có các nghiệm là:",
  "options": [
    "A. $x_1 = 1, x_2 = \\frac{3}{5}$",
    "B. $x_1 = -1, x_2 = -\\frac{3}{5}$",
    "C. $x_1 = -1, x_2 = \\frac{3}{5}$",
    "D. $x_1 = 1, x_2 = -\\frac{3}{5}$"
  ],
  "correct": 1,
  "explanation": "Ta có $a - b + c = 5 - 8 + 3 = 0 \\implies x_1 = -1$ và $x_2 = -\\frac{c}{a} = -\\frac{3}{5}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hai số có tổng bằng 7 và tích bằng 10 là hai nghiệm của phương trình nào?",
  "options": [
    "A. $x^2 + 7x + 10 = 0$",
    "B. $x^2 - 7x + 10 = 0$",
    "C. $x^2 - 10x + 7 = 0$",
    "D. $x^2 - 7x - 10 = 0$"
  ],
  "correct": 1,
  "explanation": "Hai số có tổng $S = 7$ và tích $P = 10$ là nghiệm của phương trình $X^2 - SX + P = 0 \\iff X^2 - 7X + 10 = 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho phương trình $x^2 - 4x - 3 = 0$ có 2 nghiệm $x_1, x_2$. Giá trị của biểu thức $x_1^2 + x_2^2$ bằng:",
  "options": [
    "A. 10",
    "B. 16",
    "C. 22",
    "D. 25"
  ],
  "correct": 2,
  "explanation": "Ta có $S = 4, P = -3$. Khi đó $x_1^2 + x_2^2 = S^2 - 2P = 4^2 - 2(-3) = 16 + 6 = 22$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Phương trình $ax^2 + bx + c = 0$ ($a \\ne 0$) có hai nghiệm trái dấu khi và chỉ khi:",
  "options": [
    "A. $ac > 0$",
    "B. $ac < 0$",
    "C. $b^2 - 4ac > 0$",
    "D. $b < 0$"
  ],
  "correct": 1,
  "explanation": "Hai nghiệm trái dấu $\\iff P = \\frac{c}{a} < 0 \\iff ac < 0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho phương trình $x^2 - 5x + 2 = 0$. Giá trị của biểu thức $\\frac{1}{x_1} + \\frac{1}{x_2}$ bằng:",
  "options": [
    "A. $\\frac{5}{2}$",
    "B. $-\\frac{5}{2}$",
    "C. $\\frac{2}{5}$",
    "D. $\\frac{21}{4}$"
  ],
  "correct": 0,
  "explanation": "Ta có $S = 5, P = 2$. Do đó $\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{S}{P} = \\frac{5}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho phương trình $x^2 - 2mx + m^2 - 1 = 0$. Giá trị của $|x_1 - x_2|$ bằng:",
  "options": [
    "A. $2m$",
    "B. 2",
    "C. 4",
    "D. 1"
  ],
  "correct": 1,
  "explanation": "$|x_1 - x_2| = \\sqrt{S^2 - 4P} = \\sqrt{(2m)^2 - 4(m^2 - 1)} = \\sqrt{4m^2 - 4m^2 + 4} = \\sqrt{4} = 2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Để phương trình $x^2 - 2x + m = 0$ có hai nghiệm phân biệt cùng dương thì giá trị của $m$ là:",
  "options": [
    "A. $m < 1$",
    "B. $0 < m < 1$",
    "C. $m > 0$",
    "D. $m \\le 1$"
  ],
  "correct": 1,
  "explanation": "Điều kiện có 2 nghiệm phân biệt cùng dương: $\\Delta\\prime = 1 - m > 0 \\iff m < 1$; $P = m > 0$; $S = 2 > 0$ (luôn đúng). Kết hợp lại: $0 < m < 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Nếu hai số có tổng bằng $S$ và tích bằng $P$ thì điều kiện cần và đủ để tồn tại hai số đó là:",
  "options": [
    "A. $S^2 - P \\ge 0$",
    "B. $S^2 - 4P > 0$",
    "C. $S^2 - 4P \\ge 0$",
    "D. $S > 0, P > 0$"
  ],
  "correct": 2,
  "explanation": "Phương trình $X^2 - SX + P = 0$ có nghiệm khi và chỉ khi biệt thức $\\Delta = S^2 - 4P \\ge 0$."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Phục hồi Kích thước Khu Đất Quy hoạch
Một kiến trúc sư nhận được bản thiết kế sơ bộ của một công viên hình chữ nhật nhưng tài liệu bị ố mờ một phần:
- Bản vẽ chỉ còn đọc được thông tin: *"Chu vi công viên bằng $140\text{ m}$, và diện tích công viên đo đạc là $1200\text{ m}^2$"*.
- Chiều dài và chiều rộng cụ thể đã bị nhòe mất chữ số.
1. Hãy thiết lập phương trình bậc hai theo Định lý Viète đảo để tìm kích thước chiều dài và chiều rộng của công viên.
2. Ban quản lý muốn mở rộng công viên bằng cách tăng mỗi chiều thêm $x$ (mét) sao cho diện tích mới tăng thêm $325\text{ m}^2$. Hãy tính độ dài $x$ cần mở rộng.

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Gọi chiều dài là $a$ và chiều rộng là $b$ ($a > b > 0$):
> - Nửa chu vi: $S = a + b = \frac{140}{2} = 70\text{ m}$.
> - Diện tích: $P = a \cdot b = 1200\text{ m}^2$.
> Kiểm tra điều kiện: $S^2 - 4P = 70^2 - 4 \times 1200 = 4900 - 4800 = 100 > 0$.
> Theo Định lý Viète đảo, $a$ và $b$ là hai nghiệm của phương trình:
> $$X^2 - 70X + 1200 = 0$$
> Giải phương trình: $\Delta' = (-35)^2 - 1200 = 1225 - 1200 = 25 \implies \sqrt{\Delta'} = 5$.
> $$X_1 = 35 + 5 = 40; \quad X_2 = 35 - 5 = 30$$
> Vậy chiều dài công viên là $40\text{ m}$ và chiều rộng là $30\text{ m}$.
> 
> 2. Khi tăng mỗi chiều thêm $x$ mét:
> Kích thước mới là $40 + x$ và $30 + x$.
> Diện tích mới:
> $$(40 + x)(30 + x) = 1200 + 325 = 1525$$
> $$\iff x^2 + 70x + 1200 = 1525 \iff x^2 + 70x - 325 = 0$$
> Nhận thấy: $(x - 5)(x + 75) = 0 \implies x = 5$ (vì $x > 0$).
> Vậy cần mở rộng mỗi chiều thêm đúng $5\text{ m}$.

---

### Bài tập Tự luyện

**Bài 1:** Nhẩm nghiệm các phương trình sau:
a) $15x^2 - 23x + 8 = 0$
b) $2025x^2 + 2026x + 1 = 0$
c) $x^2 - 12x + 35 = 0$

**Bài 2:** Cho phương trình $x^2 - 2x - 4 = 0$ có hai nghiệm $x_1, x_2$. Không giải phương trình, hãy tính giá trị các biểu thức:
a) $M = x_1^2 + x_2^2$
b) $N = x_1^3 + x_2^3$
c) $P = \frac{x_1 - 1}{x_2} + \frac{x_2 - 1}{x_1}$

**Bài 3:** Cho phương trình $x^2 - 2(m - 1)x + m^2 - 2m = 0$ ($m$ là tham số).
a) Chứng minh rằng phương trình luôn có hai nghiệm phân biệt với mọi giá trị của $m$.
b) Tìm $m$ để hai nghiệm thỏa mãn hệ thức: $x_1^2 + x_2^2 = 6$.
c) Tìm hệ thức liên hệ giữa hai nghiệm $x_1, x_2$ không phụ thuộc vào tham số $m$.
