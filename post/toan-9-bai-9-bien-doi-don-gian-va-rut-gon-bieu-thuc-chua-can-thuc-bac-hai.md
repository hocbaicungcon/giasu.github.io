---
title: 'Toán 9 Bài 9: Biến đổi đơn giản và Rút gọn biểu thức chứa căn thức bậc hai - Trục căn thức ở mẫu & Kỹ năng Thi Vào 10'
description: 'Lý thuyết toàn diện và bài tập Bài 9 Toán 9: Kỹ thuật đưa thừa số ra vào căn, khử mẫu, trục căn thức bằng lượng liên hợp, chuyên đề rút gọn biểu thức thi vào lớp 10, widget tương tác trục căn thức và 10 quiz có giải chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Rút gọn căn thức
  - Trục căn thức ở mẫu
  - Lượng liên hợp
  - Ôn thi vào 10
  - Kết nối tri thức
grade: 9
---

# Bài 9. Biến đổi đơn giản và Rút gọn biểu thức chứa căn thức bậc hai

Trong tất cả các đề thi tuyển sinh vào lớp 10 THPT trên toàn quốc hàng năm, bài toán đầu tiên của đề thi luôn là: **"Rút gọn biểu thức chứa căn thức bậc hai và giải quyết các câu hỏi phụ liên quan"**. Đây là dạng toán chiếm từ $1,5$ đến $2,0$ điểm, đóng vai trò quyết định tâm lý và nền tảng điểm số của mọi thí sinh!

Để biến một biểu thức chứa căn cồng kềnh, phức tạp trở nên gọn gàng, trong sáng, chúng ta cần một bộ công cụ tinh xảo gồm:
- **Đưa thừa số ra ngoài / vào trong dấu căn** để nhóm các căn thức đồng dạng.
- **Khử mẫu của biểu thức lấy căn** để đưa mẫu về số nguyên.
- **Trục căn thức ở mẫu bằng phương pháp nhân lượng liên hợp** nhằm triệt tiêu hoàn toàn dấu căn ở mẫu số.

Bài học hôm nay sẽ giúp các em làm chủ toàn bộ các "tuyệt chiêu" biến đổi đại số này, sẵn sàng chinh phục tuyệt đối điểm số của câu rút gọn trong kỳ thi vào 10!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BỘ CÔNG CỤ BIẾN ĐỔI BIỂU THỨC CHỨA CĂN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Đưa thừa số ra ngoài căn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sqrt{A^2 B} = |A|\sqrt{B}$ ($B \ge 0$).<br>• Nếu $A \ge 0$: $\sqrt{A^2 B} = A\sqrt{B}$.<br>• Nếu $A < 0$: $\sqrt{A^2 B} = -A\sqrt{B}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đưa thừa số vào trong căn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $A \ge 0, B \ge 0$: $A\sqrt{B} = \sqrt{A^2 B}$.<br>• <strong>Với $A < 0, B \ge 0$:</strong> $A\sqrt{B} = -\sqrt{A^2 B}$ (giữ dấu trừ bên ngoài!).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Khử mẫu biểu thức lấy căn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Với $AB \ge 0, B \ne 0$:<br>• $\sqrt{\frac{A}{B}} = \sqrt{\frac{AB}{B^2}} = \frac{\sqrt{AB}}{|B|}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Trục căn thức ở mẫu</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Mẫu $\sqrt{B}$: Nhân cả tử và mẫu với $\sqrt{B}$.<br>• Mẫu $\sqrt{A} \pm \sqrt{B}$: <strong>Nhân lượng liên hợp</strong> $\sqrt{A} \mp \sqrt{B}$ để dùng hằng đẳng thức $A - B$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Đưa ra ngoài căn:** Viết $\sqrt{48}$ dưới dạng $a\sqrt{b}$ với $b$ nhỏ nhất.
2. **Đưa vào trong căn:** Biểu thức $-3\sqrt{2}$ khi đưa số $-3$ vào trong căn viết như thế nào?
3. **Căn thức đồng dạng:** Biểu thức $5\sqrt{3} - 2\sqrt{3} + \sqrt{3}$ rút gọn bằng bao nhiêu?
4. **Khử mẫu:** Trục căn thức ở mẫu của phân số $\frac{2}{\sqrt{2}}$.
5. **Lượng liên hợp:** Lượng liên hợp của biểu thức $\sqrt{5} - 2$ là biểu thức nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $\sqrt{48} = \sqrt{16 \cdot 3} = 4\sqrt{3}$.
> 2. Giữ dấu trừ bên ngoài: $-3\sqrt{2} = -\sqrt{3^2 \cdot 2} = -\sqrt{18}$.
> 3. $(5 - 2 + 1)\sqrt{3} = 4\sqrt{3}$.
> 4. $\frac{2\sqrt{2}}{(\sqrt{2})^2} = \frac{2\sqrt{2}}{2} = \sqrt{2}$.
> 5. Lượng liên hợp là $\sqrt{5} + 2$ (đổi dấu giữa hai số hạng).

---

## I. Lý thuyết Trọng tâm

### 1. Đưa thừa số ra ngoài và vào trong dấu căn

> [!NOTE]
> **Quy tắc đưa thừa số ra ngoài dấu căn:**
> Với hai biểu thức $A$ và $B$ ($B \ge 0$), ta có:
> $$\sqrt{A^2 B} = |A|\sqrt{B} = \begin{cases} A\sqrt{B} & \text{khi } A \ge 0 \\ -A\sqrt{B} & \text{khi } A < 0 \end{cases}$$

> [!CAUTION]
> **Quy tắc đưa thừa số vào trong dấu căn (Cảnh báo dấu âm!):**
> - Khi $A \ge 0, B \ge 0$: $A\sqrt{B} = \sqrt{A^2 B}$.
> - Khi $A < 0, B \ge 0$: $A\sqrt{B} = -\sqrt{A^2 B}$ (chỉ đưa phần dương $|A|$ vào trong căn, để lại dấu âm đằng trước!).

*Ví dụ:* 
- Với $x \ge 0$: $2x\sqrt{3} = \sqrt{(2x)^2 \cdot 3} = \sqrt{12x^2}$.
- Với $x < 0$: $x\sqrt{5} = -\sqrt{x^2 \cdot 5} = -\sqrt{5x^2}$.

---

### 2. Khử mẫu của biểu thức lấy căn

Khi trong dấu căn có phân thức $\sqrt{\frac{A}{B}}$, ta nhân cả tử và mẫu với mẫu thức $B$ để tạo thành bình phương $B^2$ ở mẫu, sau đó đưa $B$ ra ngoài căn:
$$\sqrt{\frac{A}{B}} = \sqrt{\frac{A \cdot B}{B^2}} = \frac{\sqrt{AB}}{|B|} \quad (\text{với } AB \ge 0, B \ne 0)$$

*Ví dụ:*
$$\sqrt{\frac{3}{5}} = \sqrt{\frac{3 \cdot 5}{5^2}} = \frac{\sqrt{15}}{5}$$

---

### 3. Trục căn thức ở mẫu (Rationalizing the Denominator)

Trục căn thức ở mẫu là phép biến đổi làm mất dấu căn ở mẫu số của một phân thức đại số, giúp mẫu số trở thành một số hữu tỉ hoặc đa thức không chứa căn.

| Dạng mẫu thức | Thừa số nhân thêm (Lượng liên hợp) | Công thức biến đổi tổng quát |
| :--- | :---: | :--- |
| **Mẫu là căn đơn:** $\sqrt{B}$ | $\sqrt{B}$ | $\frac{A}{\sqrt{B}} = \frac{A\sqrt{B}}{B} \quad (B > 0)$ |
| **Mẫu là tổng căn:** $\sqrt{A} + \sqrt{B}$ | $\sqrt{A} - \sqrt{B}$ | $\frac{C}{\sqrt{A} + \sqrt{B}} = \frac{C(\sqrt{A} - \sqrt{B})}{A - B} \quad (A \ge 0, B \ge 0, A \ne B)$ |
| **Mẫu là hiệu căn:** $\sqrt{A} - \sqrt{B}$ | $\sqrt{A} + \sqrt{B}$ | $\frac{C}{\sqrt{A} - \sqrt{B}} = \frac{C(\sqrt{A} + \sqrt{B})}{A - B} \quad (A \ge 0, B \ge 0, A \ne B)$ |
| **Mẫu hỗn hợp:** $a \pm \sqrt{B}$ | $a \mp \sqrt{B}$ | $\frac{C}{a \pm \sqrt{B}} = \frac{C(a \mp \sqrt{B})}{a^2 - B} \quad (B \ge 0, a^2 \ne B)$ |

> [!IMPORTANT]
> **Bản chất của lượng liên hợp:**
> Là việc áp dụng hằng đẳng thức hiệu hai bình phương:
> $$(X - Y)(X + Y) = X^2 - Y^2$$
> Nhờ đó: $(\sqrt{A} - \sqrt{B})(\sqrt{A} + \sqrt{B}) = (\sqrt{A})^2 - (\sqrt{B})^2 = A - B$ làm sạch hoàn toàn căn thức ở mẫu số!

---

## II. Widget Tương tác: Trục Căn Thức Ở Mẫu & Nhân Lượng Liên Hợp Tự Động

Khám phá cách nhân lượng liên hợp để triệt tiêu căn thức ở mẫu số. Hãy chọn dạng phân thức và xem từng bước biến đổi đại số chi tiết:

<div class="interactive-container" style="background: var(--card-bg, #ffffff); border: 2px solid var(--primary-color, #2563eb); border-radius: 12px; padding: 20px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #1e40af; text-align: center;">MÔ PHỎNG QUY TRÌNH TRỤC CĂN THỨC Ở MẪU BẰNG LƯỢNG LIÊN HỢP</h4>
  
  <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
    <button class="conj-btn" data-type="1" style="background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">Dạng 1: Mẫu &radic;B</button>
    <button class="conj-btn" data-type="2" style="background: #e2e8f0; color: #1e293b; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">Dạng 2: Mẫu &radic;A - &radic;B</button>
    <button class="conj-btn" data-type="3" style="background: #e2e8f0; color: #1e293b; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500;">Dạng 3: Mẫu a + &radic;B</button>
  </div>

  <div id="conj-box" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 1.05em; line-height: 1.8;">
    <!-- Render steps -->
  </div>
</div>

<script>
(function() {
  const conjData = {
    1: {
      orig: "P = \\frac{6}{\\sqrt{3}}",
      step1: "Nhân cả tử và mẫu với \\sqrt{3}:",
      step2: "P = \\frac{6 \\cdot \\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{6\\sqrt{3}}{3}",
      step3: "Rút gọn hệ số tử và mẫu: 6 / 3 = 2",
      final: "P = 2\\sqrt{3}"
    },
    2: {
      orig: "Q = \\frac{2}{\\sqrt{5} - \\sqrt{3}}",
      step1: "Nhân cả tử và mẫu với lượng liên hợp (\\sqrt{5} + \\sqrt{3}):",
      step2: "Q = \\frac{2(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5} - \\sqrt{3})(\\sqrt{5} + \\sqrt{3})} = \\frac{2(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5})^2 - (\\sqrt{3})^2}",
      step3: "Tính mẫu số: 5 - 3 = 2 &rArr; Q = \\frac{2(\\sqrt{5} + \\sqrt{3})}{2}",
      final: "Q = \\sqrt{5} + \\sqrt{3}"
    },
    3: {
      orig: "R = \\frac{1}{3 + 2\\sqrt{2}}",
      step1: "Nhân cả tử và mẫu với lượng liên hợp (3 - 2\\sqrt{2}):",
      step2: "R = \\frac{1(3 - 2\\sqrt{2})}{(3 + 2\\sqrt{2})(3 - 2\\sqrt{2})} = \\frac{3 - 2\\sqrt{2}}{3^2 - (2\\sqrt{2})^2}",
      step3: "Tính mẫu số: 9 - (4 \\times 2) = 9 - 8 = 1",
      final: "R = 3 - 2\\sqrt{2}"
    }
  };

  function renderConj(type) {
    const d = conjData[type];
    const box = document.getElementById('conj-box');
    if (!box) return;
    box.innerHTML = `
      <div style="color: #1e40af; font-weight: bold; font-size: 1.1em; margin-bottom: 8px;">Biểu thức ban đầu: ${d.orig}</div>
      <div style="color: #b91c1c;"><strong>Bước 1 (Nhân lượng liên hợp):</strong> ${d.step1}</div>
      <div style="color: #4338ca;"><strong>Bước 2 (Triệt tiêu căn ở mẫu):</strong><br>&nbsp;&nbsp;${d.step2}</div>
      <div style="color: #047857;"><strong>Bước 3:</strong> ${d.step3}</div>
      <div style="color: #15803d; font-weight: bold; margin-top: 8px; border-top: 1px dashed #cbd5e1; padding-top: 6px;">&rArr; Kết quả tối giản: ${d.final}</div>
    `;
  }

  const __initApp = function() {
    const btns = document.querySelectorAll('.conj-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        btns.forEach(b => {
          b.style.background = '#e2e8f0';
          b.style.color = '#1e293b';
        });
        this.style.background = '#2563eb';
        this.style.color = 'white';
        renderConj(this.getAttribute('data-type'));
      });
    });
    renderConj(1);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __initApp);
  } else {
    __initApp();
  }
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm và Phương Pháp Giải Chi Tiết

### Dạng 1: Rút gọn biểu thức số chứa căn bậc hai

**Phương pháp giải:**
1. Đưa các số dưới dấu căn về dạng tích với các số chính phương ($4, 9, 16, 25, 36, 49...$).
2. Đưa các số chính phương ra ngoài dấu căn.
3. Trục căn thức ở mẫu đối với các phân số.
4. Nhóm và cộng trừ các căn thức đồng dạng.

---

#### Bài toán 1:
Rút gọn các biểu thức sau:
a) $A = 3\sqrt{12} - 2\sqrt{27} + \frac{1}{2}\sqrt{48}$.
b) $B = \frac{5}{\sqrt{5}} + \frac{4}{\sqrt{5} + 1} - \sqrt{20}$.
c) $C = (2\sqrt{3} - 3\sqrt{2})^2 + 12\sqrt{6}$.

**Lời giải:**

a) Phân tích các số dưới căn thành tích có số chính phương:
- $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$.
- $\sqrt{27} = \sqrt{9 \cdot 3} = 3\sqrt{3}$.
- $\sqrt{48} = \sqrt{16 \cdot 3} = 4\sqrt{3}$.
Thay vào biểu thức $A$:
$$A = 3(2\sqrt{3}) - 2(3\sqrt{3}) + \frac{1}{2}(4\sqrt{3}) = 6\sqrt{3} - 6\sqrt{3} + 2\sqrt{3} = 2\sqrt{3}$$

b) Trục căn thức ở từng hạng tử:
- $\frac{5}{\sqrt{5}} = \frac{5\sqrt{5}}{5} = \sqrt{5}$.
- $\frac{4}{\sqrt{5} + 1} = \frac{4(\sqrt{5} - 1)}{(\sqrt{5} + 1)(\sqrt{5} - 1)} = \frac{4(\sqrt{5} - 1)}{5 - 1} = \frac{4(\sqrt{5} - 1)}{4} = \sqrt{5} - 1$.
- $\sqrt{20} = \sqrt{4 \cdot 5} = 2\sqrt{5}$.
Khi đó:
$$B = \sqrt{5} + (\sqrt{5} - 1) - 2\sqrt{5} = 2\sqrt{5} - 1 - 2\sqrt{5} = -1$$

c) Khai triển hằng đẳng thức $(A - B)^2 = A^2 - 2AB + B^2$:
$$(2\sqrt{3} - 3\sqrt{2})^2 = (2\sqrt{3})^2 - 2(2\sqrt{3})(3\sqrt{2}) + (3\sqrt{2})^2 = 12 - 12\sqrt{6} + 18 = 30 - 12\sqrt{6}$$
Do đó:
$$C = 30 - 12\sqrt{6} + 12\sqrt{6} = 30$$

---

### Dạng 2: Bài toán Rút gọn biểu thức chứa biến tổng hợp (Dạng kinh điển Thi Vào 10)

**Phương pháp giải:**
1. **Tìm ĐKXĐ** của biểu thức (nếu đề bài chưa cho).
2. Phân tích các mẫu thức thành nhân tử (đặt nhân tử chung, áp dụng hằng đẳng thức $x - 9 = (\sqrt{x} - 3)(\sqrt{x} + 3)$, $x - 4 = (\sqrt{x} - 2)(\sqrt{x} + 2)$).
3. Quy đồng mẫu thức chung của từng ngoặc.
4. Thu gọn tử số, phân tích tử số thành nhân tử để triệt tiêu các thừa số chung với mẫu số.

---

#### Bài toán 2:
Cho hai biểu thức:
$$A = \frac{\sqrt{x} + 2}{\sqrt{x} - 3} \quad \text{và} \quad B = \frac{\sqrt{x}}{\sqrt{x} + 3} + \frac{2\sqrt{x}}{\sqrt{x} - 3} - \frac{3x + 9}{x - 9}$$
với $x \ge 0$ và $x \ne 9$.
a) Tính giá trị của biểu thức $A$ khi $x = 16$.
b) Rút gọn biểu thức $B$.
c) Đặt $P = \frac{B}{A}$. Tìm các giá trị của $x$ để $P < \frac{1}{2}$.

**Lời giải:**

a) Thay $x = 16$ (thỏa mãn ĐKXĐ) vào biểu thức $A$:
$$\sqrt{x} = \sqrt{16} = 4$$
$$A = \frac{4 + 2}{4 - 3} = \frac{6}{1} = 6$$

b) Rút gọn biểu thức $B$:
Nhận thấy $x - 9 = (\sqrt{x} - 3)(\sqrt{x} + 3)$.
MTC là $(\sqrt{x} - 3)(\sqrt{x} + 3)$.
$$B = \frac{\sqrt{x}(\sqrt{x} - 3)}{(\sqrt{x} - 3)(\sqrt{x} + 3)} + \frac{2\sqrt{x}(\sqrt{x} + 3)}{(\sqrt{x} - 3)(\sqrt{x} + 3)} - \frac{3x + 9}{(\sqrt{x} - 3)(\sqrt{x} + 3)}$$
$$B = \frac{x - 3\sqrt{x} + 2x + 6\sqrt{x} - 3x - 9}{(\sqrt{x} - 3)(\sqrt{x} + 3)}$$
Thu gọn tử số:
$$(x + 2x - 3x) + (-3\sqrt{x} + 6\sqrt{x}) - 9 = 3\sqrt{x} - 9 = 3(\sqrt{x} - 3)$$
Khi đó:
$$B = \frac{3(\sqrt{x} - 3)}{(\sqrt{x} - 3)(\sqrt{x} + 3)} = \frac{3}{\sqrt{x} + 3}$$

c) Biểu thức $P$:
$$P = \frac{B}{A} = \frac{3}{\sqrt{x} + 3} : \frac{\sqrt{x} + 2}{\sqrt{x} - 3} = \frac{3(\sqrt{x} - 3)}{(\sqrt{x} + 3)(\sqrt{x} + 2)}$$
Để giải $P < \frac{1}{2}$:
Xét hiệu $P - \frac{1}{2} < 0$:
$$\frac{3\sqrt{x} - 9}{(\sqrt{x} + 3)(\sqrt{x} + 2)} - \frac{1}{2} < 0$$
$$\frac{2(3\sqrt{x} - 9) - (\sqrt{x} + 3)(\sqrt{x} + 2)}{2(\sqrt{x} + 3)(\sqrt{x} + 2)} < 0$$
Tử số:
$$6\sqrt{x} - 18 - (x + 5\sqrt{x} + 6) = -x + \sqrt{x} - 24 = -\left(x - \sqrt{x} + \frac{1}{4}\right) - \frac{95}{4} = -\left(\sqrt{x} - \frac{1}{2}\right)^2 - \frac{95}{4} < 0$$
Vì tử số luôn âm với mọi $x$, và mẫu số $2(\sqrt{x} + 3)(\sqrt{x} + 2) > 0$ với mọi $x \ge 0$.
Do đó phân thức luôn mang dấu âm với mọi $x \ge 0, x \ne 9$.
Vậy $P < \frac{1}{2}$ luôn đúng với mọi $x \ge 0$ và $x \ne 9$.

---

### Dạng 3: Tìm $x$ để biểu thức nhận giá trị nguyên ($P \in \mathbb{Z}$)

#### Bài toán 3:
Cho biểu thức $M = \frac{2\sqrt{x} + 5}{\sqrt{x} + 1}$ với $x \ge 0$. Tìm các giá trị nguyên của $x$ để $M$ nhận giá trị nguyên.

**Lời giải:**

Tách phần nguyên của tử số theo mẫu số:
$$M = \frac{2(\sqrt{x} + 1) + 3}{\sqrt{x} + 1} = 2 + \frac{3}{\sqrt{x} + 1}$$
Vì $x \in \mathbb{Z}$ và $x \ge 0$ nên $2$ là một số nguyên.
Do đó $M \in \mathbb{Z} \iff \frac{3}{\sqrt{x} + 1} \in \mathbb{Z} \implies (\sqrt{x} + 1)$ là ước của $3$.
Vì $x \ge 0 \implies \sqrt{x} \ge 0 \implies \sqrt{x} + 1 \ge 1$.
Do đó $\sqrt{x} + 1 \in \text{Ư}_+(3) = \{1; 3\}$.

- **Trường hợp 1:** $\sqrt{x} + 1 = 1 \iff \sqrt{x} = 0 \implies x = 0$ (thỏa mãn $x \in \mathbb{Z}, x \ge 0$).
- **Trường hợp 2:** $\sqrt{x} + 1 = 3 \iff \sqrt{x} = 2 \implies x = 4$ (thỏa mãn $x \in \mathbb{Z}, x \ge 0$).

**Kết luận:** Các giá trị nguyên của $x$ để $M \in \mathbb{Z}$ là $x \in \{0; 4\}$.

---

## IV. 5 Chuyên đề Khoa học & Ứng dụng Thực tiễn Hiện đại

### Chuyên đề 1: Trục Căn Thức Chuẩn Hóa Vector 3D Trong Thiết Kế Đồ Họa Máy Tính
Khi dựng mô hình nhân vật hoạt hình 3D (Pixar, Disney), các lập trình viên đồ họa phải liên tục chuẩn hóa các vector pháp tuyến bề mặt để tính phản xạ ánh sáng:
$$\mathbf{n} = \frac{\mathbf{v}}{\|\mathbf{v}\|} = \frac{\mathbf{v}}{\sqrt{x^2 + y^2 + z^2}}$$
Phép trục căn thức ở mẫu giúp giải phóng GPU khỏi các phép chia cho số vô tỉ dưới mẫu, biến các phép tính thành phép nhân song song cực nhanh, tăng tốc độ khung hình (FPS) của game.

---

### Chuyên đề 2: Tối Ưu Hóa Tổng Trở Kháng Mạch Điện RLC Xoay Chiều
Trong kỹ thuật vô tuyến viễn thông: Tổng trở kháng của mạch RLC nối tiếp có dạng $Z = \sqrt{R^2 + (Z_L - Z_C)^2}$.
Khi tính toán dòng điện phức $I = \frac{U}{R + j(Z_L - Z_C)}$, các kỹ sư điện sử dụng kỹ thuật nhân lượng liên hợp phức $(R - j\Delta Z)$ — hoàn toàn tương tự như phép trục căn thức ở mẫu lớp 9 — để tách phần thực và phần ảo, tối ưu hóa công suất phát sóng trạm BTS.

---

### Chuyên đề 3: Khử Nhiễu Hình Ảnh Chụp Cộng Hưởng Từ (MRI Denoising)
Trong chẩn đoán hình ảnh y khoa hiện đại: Ảnh chụp não bộ MRI thường bị nhiễu hạt Rician do từ trường. Thuật toán lọc sóng non-local means áp dụng căn bậc hai rút gọn của hàm khoảng cách Euclidean để làm mịn hình ảnh tổn thương mà không làm mờ các ranh giới tế bào ung thư siêu nhỏ.

---

### Chuyên đề 4: Tỷ Lệ Phân Kỳ Hình Học Fractal Trong Tự Nhiên
Tập hợp Mandelbrot và hình học Fractal mô tả cấu trúc của bông tuyết, bờ biển và tia sét. Việc lặp vô hạn biểu thức $z_{n+1} = z_n^2 + c$ đòi hỏi liên tục rút gọn môđun $|z| = \sqrt{x^2 + y^2}$. Khử mẫu và rút gọn căn thức giúp máy tính xác định chính xác điểm hội tụ mà không bị tràn số bộ nhớ.

---

### Chuyên đề 5: Khử Độ Trễ Tín Hiệu Radar Vệ Tinh Viễn Thám
Vệ tinh viễn thám radar mặt đất (SAR) đo độ lún của các tòa nhà cao tầng hoặc vết nứt đập thủy điện từ quỹ đạo cách $500\text{ km}$. Bằng cách trục căn thức trong công thức giao thoa pha sóng phản xạ, hệ thống có thể đo đạc dịch chuyển mặt đất với độ chính xác đến từng milimét!

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

````quiz
{
  "title": "Kiểm tra Năng lực: Rút gọn biểu thức chứa căn thức bậc hai (Toán 9 Bài 9)",
  "questions": [
    {
      "question": "Trục căn thức ở mẫu của biểu thức 4/căn(2) ta được kết quả là:",
      "options": [
        "2*căn(2)",
        "căn(2)",
        "4*căn(2)",
        "2"
      ],
      "answer": 0,
      "hint": "4/sqrt(2) = (4*sqrt(2))/2 = 2*sqrt(2).",
      "explanation": "Nhân cả tử và mẫu với $\\sqrt{2}$: $\\frac{4}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{(\\sqrt{2})^2} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$."
    },
    {
      "question": "Trục căn thức ở mẫu của biểu thức 1/(căn(3) - 1) ta được:",
      "options": [
        "(căn(3) + 1)/2",
        "căn(3) + 1",
        "(căn(3) - 1)/2",
        "căn(3) - 1"
      ],
      "answer": 0,
      "hint": "Nhân với liên hợp sqrt(3) + 1. Mẫu thành (sqrt(3))^2 - 1^2 = 3 - 1 = 2.",
      "explanation": "Nhân cả tử và mẫu với lượng liên hợp $\\sqrt{3} + 1$: $\\frac{1(\\sqrt{3} + 1)}{(\\sqrt{3} - 1)(\\sqrt{3} + 1)} = \\frac{\\sqrt{3} + 1}{3 - 1} = \\frac{\\sqrt{3} + 1}{2}$."
    },
    {
      "question": "Rút gọn biểu thức A = căn(18) - căn(8) + căn(50):",
      "options": [
        "6*căn(2)",
        "4*căn(2)",
        "8*căn(2)",
        "2*căn(2)"
      ],
      "answer": 0,
      "hint": "sqrt(18) = 3*sqrt(2); sqrt(8) = 2*sqrt(2); sqrt(50) = 5*sqrt(2) => 3 - 2 + 5 = 6.",
      "explanation": "$A = 3\\sqrt{2} - 2\\sqrt{2} + 5\\sqrt{2} = (3 - 2 + 5)\\sqrt{2} = 6\\sqrt{2}$."
    },
    {
      "question": "Đưa thừa số vào trong dấu căn của biểu thức -2*căn(5) ta được:",
      "options": [
        "-căn(20)",
        "căn(20)",
        "-căn(10)",
        "căn(-20)"
      ],
      "answer": 0,
      "hint": "Để dấu trừ bên ngoài: -sqrt(2^2 * 5) = -sqrt(20).",
      "explanation": "Vì $-2 < 0$, ta giữ dấu âm bên ngoài dấu căn: $-2\\sqrt{5} = -\\sqrt{2^2 \\cdot 5} = -\\sqrt{20}$."
    },
    {
      "question": "Khử mẫu của biểu thức lấy căn căn(3/8) ta được:",
      "options": [
        "căn(6)/4",
        "căn(3)/4",
        "căn(24)/8",
        "căn(6)/8"
      ],
      "answer": 0,
      "hint": "sqrt(3/8) = sqrt((3*2)/(8*2)) = sqrt(6/16) = sqrt(6)/4.",
      "explanation": "Nhân tử và mẫu với 2 để mẫu thành 16: $\\sqrt{\\frac{3}{8}} = \\sqrt{\\frac{6}{16}} = \\frac{\\sqrt{6}}{4}$."
    },
    {
      "question": "Giá trị của biểu thức P = 1/(3 - căn(8)) - 1/(3 + căn(8)) là:",
      "options": [
        "4*căn(2)",
        "6",
        "2*căn(8)",
        "0"
      ],
      "answer": 0,
      "hint": "1/(3 - sqrt(8)) = 3 + sqrt(8); 1/(3 + sqrt(8)) = 3 - sqrt(8). Trừ cho nhau: (3 + sqrt(8)) - (3 - sqrt(8)) = 2*sqrt(8) = 4*sqrt(2).",
      "explanation": "Trục căn thức ở mẫu: $\\frac{1}{3 - \\sqrt{8}} = \\frac{3 + \\sqrt{8}}{9 - 8} = 3 + \\sqrt{8}$. $\\frac{1}{3 + \\sqrt{8}} = 3 - \\sqrt{8}$. Hiệu bằng $(3 + \\sqrt{8}) - (3 - \\sqrt{8}) = 2\\sqrt{8} = 4\\sqrt{2}$."
    },
    {
      "question": "Rút gọn biểu thức M = (x - 4)/(căn(x) - 2) với x >= 0 và x khác 4 ta được:",
      "options": [
        "căn(x) + 2",
        "căn(x) - 2",
        "x + 2",
        "x - 2"
      ],
      "answer": 0,
      "hint": "x - 4 = (sqrt(x) - 2)(sqrt(x) + 2).",
      "explanation": "Phân tích tử thành hằng đẳng thức: $x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$. Khi đó $M = \\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{\\sqrt{x} - 2} = \\sqrt{x} + 2$."
    },
    {
      "question": "Cho P = (căn(x) - 1)/(căn(x) + 2). Tìm x để P = 0:",
      "options": [
        "x = 1",
        "x = -2",
        "x = 4",
        "x = 0"
      ],
      "answer": 0,
      "hint": "Tử số bằng 0: sqrt(x) - 1 = 0 => sqrt(x) = 1 => x = 1.",
      "explanation": "$P = 0 \\iff \\sqrt{x} - 1 = 0 \\iff \\sqrt{x} = 1 \\implies x = 1$ (thỏa mãn ĐKXĐ)."
    },
    {
      "question": "Biểu thức A = (căn(x) / (căn(x) + 1)) - (căn(x) / (căn(x) - 1)) với x >= 0, x khác 1 sau khi rút gọn là:",
      "options": [
        "-2*căn(x)/(x - 1)",
        "2*căn(x)/(x - 1)",
        "2x/(x - 1)",
        "-2x/(x - 1)"
      ],
      "answer": 0,
      "hint": "MTC = x - 1. Tử số = sqrt(x)(sqrt(x) - 1) - sqrt(x)(sqrt(x) + 1) = x - sqrt(x) - x - sqrt(x) = -2*sqrt(x).",
      "explanation": "Quy đồng mẫu $x - 1$: $A = \\frac{\\sqrt{x}(\\sqrt{x} - 1) - \\sqrt{x}(\\sqrt{x} + 1)}{x - 1} = \\frac{x - \\sqrt{x} - x - \\sqrt{x}}{x - 1} = \\frac{-2\\sqrt{x}}{x - 1}$."
    },
    {
      "question": "Tìm các giá trị nguyên của x để biểu thức B = 4/(căn(x) + 1) nhận giá trị nguyên:",
      "options": [
        "x thuộc {0; 1; 9}",
        "x thuộc {1; 3}",
        "x thuộc {0; 4; 9}",
        "x thuộc {0; 1; 4}"
      ],
      "answer": 0,
      "hint": "căn(x) + 1 >= 1 và là ước dương của 4: {1; 2; 4} => căn(x) thuộc {0; 1; 3} => x thuộc {0; 1; 9}.",
      "explanation": "Vì $\\sqrt{x} \\ge 0 \\implies \\sqrt{x} + 1 \\ge 1$. Ước nguyên dương của 4 là $\\{1; 2; 4\\}$. Suy ra $\\sqrt{x} \\in \\{0; 1; 3\\} \\implies x \\in \\{0; 1; 9\\}$."
    }
  ]
}
````

---

## VI. Bài tập Tự luyện & Thử thách Phát triển Năng lực

### Bài 1: Rút gọn biểu thức số
a) $A = \sqrt{75} + \sqrt{48} - \sqrt{300}$.
b) $B = \frac{3}{\sqrt{7} - 2} - \frac{3}{\sqrt{7} + 2}$.
c) $C = \left(\frac{1}{\sqrt{5} - \sqrt{2}} - \frac{1}{\sqrt{5} + \sqrt{2}}\right) \cdot \frac{1}{\sqrt{2}}$.
d) $D = \sqrt{(2\sqrt{5} - 5)^2} + \sqrt{20}$.

### Bài 2: Rút gọn biểu thức chứa biến
Cho biểu thức:
$$P = \left(\frac{1}{\sqrt{x} - 1} - \frac{1}{\sqrt{x}}\right) : \left(\frac{\sqrt{x} + 1}{\sqrt{x} - 2} - \frac{\sqrt{x} + 2}{\sqrt{x} - 1}\right)$$
với $x > 0, x \ne 1, x \ne 4$.
a) Rút gọn biểu thức $P$.
b) Tìm giá trị của $x$ để $P = \frac{1}{3}$.
c) So sánh $P$ với $1$.

### Bài 3 (Thử thách thực tế):
Một kỹ sư âm học thiết kế một phòng thu âm thanh có tỉ lệ giảm chấn âm thanh $R$ tuân theo công thức:
$$R = \frac{1}{\sqrt{k + 1} - \sqrt{k}}$$
Trong đó $k$ là chỉ số cách âm của lớp mút xốp.
a) Trục căn thức ở mẫu để viết biểu thức $R$ dưới dạng không còn phân số.
b) Tính tổng độ giảm chấn khi ghép nối tiếp $99$ lớp xốp với chỉ số $k$ chạy từ $1$ đến $99$:
$$S = R_1 + R_2 + \dots + R_{99} = \frac{1}{\sqrt{2} - 1} + \frac{1}{\sqrt{3} - \sqrt{2}} + \dots + \frac{1}{\sqrt{100} - \sqrt{99}}$$
*(Gợi ý: Áp dụng kết quả câu a để tạo thành chuỗi triệt tiêu liên tiếp).*
