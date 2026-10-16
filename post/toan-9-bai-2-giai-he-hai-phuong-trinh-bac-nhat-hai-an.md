---
title: 'Toán 9 Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn'
description: 'Làm chủ các phương pháp giải hệ hai phương trình bậc nhất hai ẩn Toán 9 Bài 2: Phương pháp thế, phương pháp cộng đại số, phương pháp đặt ẩn phụ, hệ chứa tham số m, 4 dạng toán trọng tâm và 10 câu trắc nghiệm tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Đại số 9
  - Giải hệ phương trình
  - Phương pháp thế
  - Phương pháp cộng đại số
  - Đặt ẩn phụ
  - Kết nối tri thức
grade: 9
---

# Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn

Ở Bài 1, chúng ta đã hiểu rõ bản chất hình học của hệ hai phương trình bậc nhất hai ẩn: Nghiệm của hệ chính là tọa độ giao điểm của hai đường thẳng trên mặt phẳng tọa độ $Oxy$.

Tuy nhiên, phương pháp vẽ hình đồ thị chỉ mang tính trực quan và rất khó cho kết quả chính xác khi tọa độ giao điểm là các số hữu tỉ lẻ (như $\frac{17}{29}$ hay $-\frac{5}{13}$). Để tìm được nghiệm chính xác tuyệt đối $100\%$, các nhà toán học đã sáng tạo ra hai thuật toán đại số kinh điển:
1. **Phương pháp thế:** Rút một ẩn theo ẩn kia để đưa về phương trình một ẩn quen thuộc.
2. **Phương pháp cộng đại số:** Khử một ẩn bằng cách làm cho các hệ số bằng nhau hoặc đối nhau rồi cộng/trừ từng vế.

Nắm vững hai phương pháp này là điều kiện tiên quyết để đạt điểm tối đa trong câu hỏi đại số cơ bản của đề thi tuyển sinh vào Lớp 10!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 2: GIẢI HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phương pháp thế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bước 1:</strong> Rút ẩn $y$ theo $x$ (hoặc $x$ theo $y$) từ phương trình đơn giản.<br>• <strong>Bước 2:</strong> Thế vào phương trình kia để được phương trình 1 ẩn.<br>• <strong>Bước 3:</strong> Giải tìm 1 ẩn, suy ra ẩn còn lại.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Phương pháp cộng đại số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Bước 1:</strong> Nhân các hệ số thích hợp để hệ số của 1 ẩn <em>bằng nhau hoặc đối nhau</em>.<br>• <strong>Bước 2:</strong> Cộng (nếu đối nhau) hoặc trừ (nếu bằng nhau) từng vế để <strong>khử ẩn</strong>.<br>• <strong>Bước 3:</strong> Giải phương trình 1 ẩn thu được.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phương pháp đặt ẩn phụ</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Áp dụng khi hệ chứa căn, phân thức, trị tuyệt đối phức tạp nhưng có <strong>cụm biến giống nhau</strong>:<br>$$u = \frac{1}{x - 1},\quad v = \sqrt{y + 2}$$<br>• Đưa hệ phức tạp về hệ bậc nhất đơn giản.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hệ chứa tham số m</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Giải hệ tìm nghiệm $(x; y)$ theo tham số $m$.<br>• Thay tọa độ $(x(m); y(m))$ vào điều kiện bài toán:<br>$x + y > 0$, $x, y$ nguyên, hay đạt giá trị nhỏ nhất.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Rút ẩn:** Từ phương trình $x - 2y = 3$, hãy biểu diễn ẩn $x$ theo ẩn $y$.
2. **Cộng khử ẩn:** Cho hệ $\begin{cases} 2x + 3y = 7 \\ 5x - 3y = 14 \end{cases}$. Để khử ẩn $y$, ta nên cộng hay trừ từng vế hai phương trình? Thu được phương trình một ẩn nào?
3. **Trừ khử ẩn:** Cho hệ $\begin{cases} 4x + 5y = 9 \\ 4x - 2y = 2 \end{cases}$. Lấy phương trình trên trừ phương trình dưới theo từng vế, ta được phương trình ẩn $y$ nào?
4. **Nhẩm nghiệm nhanh:** Tổng của hai số bằng 10, hiệu của hai số bằng 4. Hai số đó là bao nhiêu?
5. **Nhận dạng ẩn phụ:** Hệ phương trình $\begin{cases} \frac{2}{x} + \frac{3}{y} = 5 \\ \frac{5}{x} - \frac{1}{y} = 4 \end{cases}$ nên đặt ẩn phụ $u, v$ như thế nào?

> [!TIP]
> **Gợi ý phản xạ:**
> 1. Chuyển vế: $x = 2y + 3$.
> 2. Hệ số của $y$ là $3$ và $-3$ (đối nhau), ta nên **cộng từng vế**: $(2x + 5x) + (3y - 3y) = 7 + 14 \implies 7x = 21 \implies x = 3$.
> 3. Hệ số của $x$ bằng nhau ($4x$), ta **trừ từng vế**: $(4x - 4x) + [5y - (-2y)] = 9 - 2 \implies 7y = 7 \implies y = 1$.
> 4. Số lớn: $(10 + 4) : 2 = 7$, số bé: $(10 - 4) : 2 = 3$. Cặp số là $(7; 3)$.
> 5. Đặt $u = \frac{1}{x}$ và $v = \frac{1}{y}$ (với điều kiện $x \neq 0, y \neq 0$).

---

## I. Lý thuyết trọng tâm & Bản chất hình học

### 1. Phương pháp Thế (Substitution Method)

Quy tắc thế gồm hai bước biến đổi tương đương:
1. **Bước 1 (Rút ẩn):** Từ một trong hai phương trình của hệ (ưu tiên chọn phương trình có hệ số của một ẩn là $1$ hoặc $-1$), ta biểu diễn ẩn này theo ẩn kia.
2. **Bước 2 (Thế ẩn):** Dùng biểu thức vừa rút được thế vào vị trí của ẩn đó trong phương trình còn lại để thu được một **phương trình bậc nhất một ẩn**.

*Ví dụ minh họa:* Giải hệ phương trình:
$$\begin{cases} x - 2y = 1 \quad (1) \\ 3x + y = 10 \quad (2) \end{cases}$$

- Từ $(1)$ rút $x$ theo $y$: $x = 2y + 1$.
- Thế $x = 2y + 1$ vào phương trình $(2)$:
  $$3(2y + 1) + y = 10 \iff 6y + 3 + y = 10 \iff 7y = 7 \iff y = 1$$
- Thay $y = 1$ vào biểu thức $x = 2y + 1$:
  $$x = 2(1) + 1 = 3$$
- Vậy hệ phương trình có nghiệm duy nhất là $(x; y) = (3; 1)$.

---

### 2. Phương pháp Cộng đại số (Elimination Method)

Quy tắc cộng đại số dùng để biến đổi một hệ phương trình thành hệ phương trình tương đương có một phương trình chỉ chứa một ẩn số:
1. **Trường hợp 1 (Hệ số bằng nhau hoặc đối nhau):**
   - Nếu hệ số của cùng một ẩn trong hai phương trình **bằng nhau**: Ta **trừ** từng vế của hai phương trình.
   - Nếu hệ số của cùng một ẩn trong hai phương trình **đối nhau**: Ta **cộng** từng vế của hai phương trình.
2. **Trường hợp 2 (Hệ số chưa bằng hoặc đối nhau):**
   - Ta nhân hai vế của mỗi phương trình với một số thích hợp (tìm bội chung nhỏ nhất của các hệ số) sao cho hệ số của một ẩn trở nên bằng nhau hoặc đối nhau, rồi áp dụng Trường hợp 1.

*Ví dụ minh họa:* Giải hệ phương trình:
$$\begin{cases} 2x + 3y = 8 \quad (1) \\ 3x - 2y = -1 \quad (2) \end{cases}$$

- Nhân phương trình $(1)$ với $2$ và nhân phương trình $(2)$ với $3$ để hệ số của $y$ đối nhau ($6$ và $-6$):
  $$\begin{cases} 4x + 6y = 16 \\ 9x - 6y = -3 \end{cases}$$
- Cộng từng vế hai phương trình:
  $$(4x + 9x) + (6y - 6y) = 16 + (-3) \iff 13x = 13 \iff x = 1$$
- Thay $x = 1$ vào phương trình $(1)$:
  $$2(1) + 3y = 8 \iff 3y = 6 \iff y = 2$$
- Vậy hệ phương trình có nghiệm duy nhất là $(x; y) = (1; 2)$.

---

### 3. Phương pháp Đặt ẩn phụ

Khi gặp các hệ phương trình chứa ẩn ở mẫu thức, chứa căn thức hoặc biểu thức phức tạp nhưng có các **cụm đại số giống nhau lặp lại ở cả hai phương trình**:
1. Đặt điều kiện xác định cho các ẩn ban đầu.
2. Đặt các cụm lặp lại bằng các ẩn phụ mới $u$ và $v$ (kèm điều kiện của ẩn phụ nếu có, ví dụ $v \ge 0$ nếu chứa căn hoặc trị tuyệt đối).
3. Đưa hệ phức tạp ban đầu về hệ phương trình bậc nhất hai ẩn $u, v$ đơn giản.
4. Giải tìm $u, v$, sau đó thế ngược lại để tìm nghiệm $(x; y)$ ban đầu và đối chiếu điều kiện xác định.

---

## Ứng dụng Tương tác Trực quan

### Cỗ máy Giải Hệ Phương trình Từng bước (Step-by-Step Solver)

Nhập các hệ số $a_1, b_1, c_1$ và $a_2, b_2, c_2$ của hệ phương trình $\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$, sau đó chọn phương pháp giải (Phương pháp Thế hoặc Cộng đại số) để quan sát từng bước biến đổi đại số chi tiết:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: GIẢI HỆ PHƯƠNG TRÌNH TỪNG BƯỚC</h4>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-bottom: 16px;">
    <div style="background: var(--bg-secondary, #f8fafc); padding: 12px; border-radius: 8px; border-left: 4px solid #2563eb;">
      <h5 style="margin: 0 0 8px 0; color: #2563eb;">Phương trình (1): a₁x + b₁y = c₁</h5>
      <div style="display: flex; gap: 6px; align-items: center;">
        <input type="number" id="sol-a1" value="2" style="width: 45px; padding: 4px;" oninput="solveStepByStep()"> x + 
        <input type="number" id="sol-b1" value="3" style="width: 45px; padding: 4px;" oninput="solveStepByStep()"> y = 
        <input type="number" id="sol-c1" value="7" style="width: 45px; padding: 4px;" oninput="solveStepByStep()">
      </div>
    </div>
    <div style="background: var(--bg-secondary, #f8fafc); padding: 12px; border-radius: 8px; border-left: 4px solid #10b981;">
      <h5 style="margin: 0 0 8px 0; color: #047857;">Phương trình (2): a₂x + b₂y = c₂</h5>
      <div style="display: flex; gap: 6px; align-items: center;">
        <input type="number" id="sol-a2" value="3" style="width: 45px; padding: 4px;" oninput="solveStepByStep()"> x - 
        <input type="number" id="sol-b2" value="2" style="width: 45px; padding: 4px;" oninput="solveStepByStep()"> y = 
        <input type="number" id="sol-c2" value="4" style="width: 45px; padding: 4px;" oninput="solveStepByStep()">
      </div>
    </div>
  </div>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 16px;">
    <button id="btn-method-sub" onclick="setSolveMethod('sub')" style="padding: 8px 16px; border-radius: 6px; border: none; background: #2563eb; color: white; font-weight: bold; cursor: pointer;">
      🔄 Phương pháp Thế
    </button>
    <button id="btn-method-add" onclick="setSolveMethod('add')" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; font-weight: bold; cursor: pointer;">
      ➕ Phương pháp Cộng đại số
    </button>
  </div>

  <div id="step-by-step-box" style="background: var(--card-bg, #ffffff); border-radius: 8px; padding: 16px; border: 1px dashed #2563eb; font-size: 0.95em; line-height: 1.9;">
    Đang tải lời giải từng bước...
  </div>
</div>

<script>
var currentMethod = 'sub';

function setSolveMethod(m) {
  currentMethod = m;
  var bSub = document.getElementById('btn-method-sub');
  var bAdd = document.getElementById('btn-method-add');
  if (m === 'sub') {
    if (bSub) { bSub.style.background = '#2563eb'; bSub.style.color = 'white'; bSub.style.border = 'none'; }
    if (bAdd) { bAdd.style.background = '#f8fafc'; bAdd.style.color = '#334155'; bAdd.style.border = '1px solid #cbd5e1'; }
  } else {
    if (bAdd) { bAdd.style.background = '#2563eb'; bAdd.style.color = 'white'; bAdd.style.border = 'none'; }
    if (bSub) { bSub.style.background = '#f8fafc'; bSub.style.color = '#334155'; bSub.style.border = '1px solid #cbd5e1'; }
  }
  solveStepByStep();
}

function solveStepByStep() {
  var a1 = parseFloat(document.getElementById('sol-a1').value) || 0;
  var b1 = parseFloat(document.getElementById('sol-b1').value) || 0;
  var c1 = parseFloat(document.getElementById('sol-c1').value) || 0;
  var a2 = parseFloat(document.getElementById('sol-a2').value) || 0;
  var b2 = parseFloat(document.getElementById('sol-b2').value) || 0;
  var c2 = parseFloat(document.getElementById('sol-c2').value) || 0;

  var box = document.getElementById('step-by-step-box');
  if (!box) return;

  var D = a1 * b2 - a2 * b1;
  var Dx = c1 * b2 - c2 * b1;
  var Dy = a1 * c2 - a2 * c1;

  if (D === 0) {
    if (Dx === 0 && Dy === 0) {
      box.innerHTML = '<strong>Kết luận:</strong> Hệ phương trình có <strong>vô số nghiệm</strong> (hai đường thẳng biểu diễn trùng nhau).';
    } else {
      box.innerHTML = '<strong>Kết luận:</strong> Hệ phương trình <strong>vô nghiệm</strong> (hai đường thẳng biểu diễn song song nhau).';
    }
    return;
  }

  var x0 = Dx / D;
  var y0 = Dy / D;

  var html = '<strong>Hệ phương trình đã cho:</strong><br>';
  html += '$$\\begin{cases} ' + a1 + 'x + ' + b1 + 'y = ' + c1 + ' \\quad (1) \\\\ ' + a2 + 'x + ' + b2 + 'y = ' + c2 + ' \\quad (2) \\end{cases}$$<br>';

  if (currentMethod === 'sub') {
    html += '<strong>LỜI GIẢI CHI TIẾT THEO PHƯƠNG PHÁP THẾ:</strong><br>';
    if (b1 !== 0) {
      html += '• <em>Bước 1 (Rút y theo x từ pt 1):</em> $' + b1 + 'y = ' + c1 + ' - ' + a1 + 'x \\implies y = \\frac{' + c1 + ' - ' + a1 + 'x}{' + b1 + '}\\quad (*)$<br>';
      html += '• <em>Bước 2 (Thế vào pt 2):</em> $' + a2 + 'x + ' + b2 + '\\left(\\frac{' + c1 + ' - ' + a1 + 'x}{' + b1 + '}\\right) = ' + c2 + '$<br>';
      html += '• <em>Bước 3 (Giải tìm x):</em> Quy đồng và thu gọn ta được: $' + D + 'x = ' + Dx + ' \\implies x = ' + x0.toFixed(2) + '$<br>';
      html += '• <em>Bước 4 (Tìm y):</em> Thay $x = ' + x0.toFixed(2) + '$ vào $(*)$: $y = ' + y0.toFixed(2) + '$<br>';
    } else {
      html += '• <em>Bước 1:</em> Từ (1) có ngay: $x = \\frac{' + c1 + '}{' + a1 + '} = ' + x0.toFixed(2) + '$<br>';
      html += '• <em>Bước 2:</em> Thế vào (2) tìm được: $y = ' + y0.toFixed(2) + '$<br>';
    }
  } else {
    html += '<strong>LỜI GIẢI CHI TIẾT THEO PHƯƠNG PHÁP CỘNG ĐẠI SỐ:</strong><br>';
    var m1 = b2, m2 = b1;
    html += '• <em>Bước 1:</em> Nhân (1) với $' + m1 + '$ và nhân (2) với $' + m2 + '$ để cân bằng hệ số của $y$:<br>';
    html += '$$\\begin{cases} ' + (a1*m1) + 'x + ' + (b1*m1) + 'y = ' + (c1*m1) + ' \\\\ ' + (a2*m2) + 'x + ' + (b2*m2) + 'y = ' + (c2*m2) + ' \\end{cases}$$<br>';
    html += '• <em>Bước 2:</em> Trừ từng vế hai phương trình trên để khử ẩn $y$:<br>';
    html += '$[(' + (a1*m1) + ') - (' + (a2*m2) + ')]x = (' + (c1*m1) + ') - (' + (c2*m2) + ') \\implies ' + D + 'x = ' + Dx + ' \\implies x = ' + x0.toFixed(2) + '$<br>';
    html += '• <em>Bước 3:</em> Thay $x = ' + x0.toFixed(2) + '$ vào phương trình (1) ban đầu: $' + a1 + '(' + x0.toFixed(2) + ') + ' + b1 + 'y = ' + c1 + ' \\implies y = ' + y0.toFixed(2) + '$<br>';
  }

  html += '🎉 <strong>KẾT LUẬN:</strong> Hệ phương trình có nghiệm duy nhất là: $\\mathbf{(x; y) = (' + x0.toFixed(2) + '; ' + y0.toFixed(2) + ')}$.';
  box.innerHTML = html;
}
document.addEventListener('DOMContentLoaded', function() {
  solveStepByStep();
});
</script>

---

## II. 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Giải hệ phương trình bằng phương pháp thế

**Phương pháp giải:**
Ưu tiên rút ẩn có hệ số bằng $1$ hoặc $-1$ để tránh việc phải quy đồng phân số phức tạp.

---

#### Bài toán 1:
Giải hệ phương trình sau bằng phương pháp thế:
$$\begin{cases} x - 3y = 5 \quad (1) \\ 2x + 5y = -1 \quad (2) \end{cases}$$

**Lời giải:**

Từ phương trình $(1)$, ta rút $x$ theo $y$:
$$x = 3y + 5 \quad (3)$$
Thế $x = 3y + 5$ vào phương trình $(2)$, ta được:
$$2(3y + 5) + 5y = -1$$
$$6y + 10 + 5y = -1$$
$$11y = -1 - 10$$
$$11y = -11 \implies y = -1$$
Thay $y = -1$ vào biểu thức $(3)$:
$$x = 3(-1) + 5 = -3 + 5 = 2$$
Vậy hệ phương trình có nghiệm duy nhất là $(x; y) = (2; -1)$.

---

### Dạng 2: Giải hệ phương trình bằng phương pháp cộng đại số

**Phương pháp giải:**
1. Quan sát hệ số của $x$ và $y$ ở hai phương trình.
2. Nếu chưa bằng hoặc đối nhau, nhân chéo hệ số để triệt tiêu ẩn thuận tiện nhất.

---

#### Bài toán 2:
Giải hệ phương trình sau bằng phương pháp cộng đại số:
$$\begin{cases} 3x + 2y = 13 \quad (1) \\ 4x - 3y = 6 \quad (2) \end{cases}$$

**Lời giải:**

Nhân cả hai vế của phương trình $(1)$ với $3$ và nhân cả hai vế của phương trình $(2)$ với $2$ để làm cho hệ số của $y$ đối nhau:
$$\begin{cases} 9x + 6y = 39 \\ 8x - 6y = 12 \end{cases}$$
Cộng từng vế hai phương trình của hệ:
$$(9x + 8x) + (6y - 6y) = 39 + 12$$
$$17x = 51 \implies x = \frac{51}{17} = 3$$
Thay $x = 3$ vào phương trình $(1)$:
$$3(3) + 2y = 13 \implies 9 + 2y = 13 \implies 2y = 4 \implies y = 2$$
Vậy hệ phương trình có nghiệm duy nhất là $(x; y) = (3; 2)$.

---

### Dạng 3: Giải hệ phương trình bằng phương pháp đặt ẩn phụ

**Phương pháp giải:**
1. Tìm điều kiện xác định của bài toán (mẫu khác 0, biểu thức dưới căn $\ge 0$).
2. Nhận diện cụm biểu thức lặp lại, đặt $u, v$.
3. Giải hệ tìm $u, v$, rồi giải tìm $x, y$ và đối chiếu điều kiện.

---

#### Bài toán 3:
Giải hệ phương trình sau:
$$\begin{cases} \frac{4}{x - 1} + \frac{1}{y + 2} = 5 \\ \frac{2}{x - 1} - \frac{3}{y + 2} = -1 \end{cases}$$

**Lời giải:**

Điều kiện xác định: $x \neq 1$ và $y \neq -2$.

Đặt $u = \frac{1}{x - 1}$ và $v = \frac{1}{y + 2}$. Hệ phương trình trở thành:
$$\begin{cases} 4u + v = 5 \quad (1) \\ 2u - 3v = -1 \quad (2) \end{cases}$$
Từ $(1) \implies v = 5 - 4u$. Thế vào $(2)$:
$$2u - 3(5 - 4u) = -1 \iff 2u - 15 + 12u = -1 \iff 14u = 14 \implies u = 1$$
Suy ra:
$$v = 5 - 4(1) = 1$$
Trở lại các ẩn ban đầu $x, y$:
$$\begin{cases} \frac{1}{x - 1} = 1 \\ \frac{1}{y + 2} = 1 \end{cases} \iff \begin{cases} x - 1 = 1 \\ y + 2 = 1 \end{cases} \iff \begin{cases} x = 2 \\ y = -1 \end{cases}$$
Cả hai giá trị đều thỏa mãn điều kiện $x \neq 1, y \neq -2$.
Vậy hệ phương trình có nghiệm duy nhất là $(x; y) = (2; -1)$.

---

### Dạng 4: Giải và biện luận hệ phương trình chứa tham số $m$

**Phương pháp giải:**
1. Sử dụng phương pháp thế hoặc cộng đại số để tìm nghiệm duy nhất $(x; y)$ theo tham số $m$.
2. Thay biểu thức nghiệm vào điều kiện đề bài yêu cầu (bất phương trình, đẳng thức, số nguyên).

---

#### Bài toán 4:
Cho hệ phương trình:
$$\begin{cases} x + my = 2 \\ mx - 2y = 1 \end{cases}$$
a) Giải hệ phương trình khi $m = 2$.
b) Tìm $m$ để hệ phương trình có nghiệm duy nhất $(x; y)$ thỏa mãn $x > 0$ và $y < 0$.

**Lời giải:**

a) Khi $m = 2$, hệ phương trình trở thành:
$$\begin{cases} x + 2y = 2 \quad (1) \\ 2x - 2y = 1 \quad (2) \end{cases}$$
Cộng từng vế hai phương trình $(1)$ và $(2)$:
$$3x = 3 \implies x = 1$$
Thay $x = 1$ vào $(1)$:
$$1 + 2y = 2 \implies 2y = 1 \implies y = \frac{1}{2}$$
Vậy với $m = 2$, hệ phương trình có nghiệm duy nhất là $(x; y) = \left(1;\ \frac{1}{2}\right)$.

b)
Từ phương trình thứ nhất: $x = 2 - my$. Thế vào phương trình thứ hai:
$$m(2 - my) - 2y = 1 \iff 2m - m^2y - 2y = 1 \iff (m^2 + 2)y = 2m - 1$$
Vì $m^2 \ge 0 \implies m^2 + 2 \ge 2 > 0$ với mọi $m \in \mathbb{R}$, nên phương trình luôn có nghiệm duy nhất:
$$y = \frac{2m - 1}{m^2 + 2}$$
Suy ra:
$$x = 2 - my = 2 - m \cdot \frac{2m - 1}{m^2 + 2} = \frac{2(m^2 + 2) - 2m^2 + m}{m^2 + 2} = \frac{m + 4}{m^2 + 2}$$
Để $x > 0$ và $y < 0$:
$$\begin{cases} \frac{m + 4}{m^2 + 2} > 0 \\ \frac{2m - 1}{m^2 + 2} < 0 \end{cases}$$
Vì $m^2 + 2 > 0$ với mọi $m$, nên hệ bất phương trình tương đương:
$$\begin{cases} m + 4 > 0 \\ 2m - 1 < 0 \end{cases} \iff \begin{cases} m > -4 \\ m < \frac{1}{2} \end{cases} \iff -4 < m < \frac{1}{2}$$
Vậy giá trị cần tìm của $m$ là $-4 < m < \frac{1}{2}$.

---

## III. 5 Chuyên đề Khoa học Thực tiễn & Ứng dụng Công nghệ

### 1. Thuật toán Khử Gauss trong Trí tuệ Nhân tạo & Học máy (Machine Learning)
Phương pháp cộng đại số chính là nền móng của **Thuật toán Khử Gauss (Gaussian Elimination)**:
- Trong huấn luyện mạng nơ-ron sâu (Deep Neural Networks) và mô hình ngôn ngữ lớn như Gemini hay ChatGPT:
- Hàng triệu nơ-ron liên kết tạo thành các hệ phương trình tuyến tính khổng lồ với hàng tỷ tham số trọng số (Weights). Card đồ họa GPU thực hiện hàng nghìn tỷ phép cộng đại số ma trận mỗi giây để tối ưu hóa trọng số học của AI.

### 2. Định luật Dòng điện Kirchhoff trong Thiết kế Vi mạch Điện tử
Khi thiết kế bảng mạch điện thoại hay laptop:
- Dòng điện tại các nút giao phân nhánh tuân theo định luật Kirchhoff: tổng dòng điện đi vào bằng tổng dòng điện đi ra.
- Sự sụt áp trên các vòng mạch tạo thành một hệ phương trình bậc nhất hai ẩn $I_1, I_2$.
- Giải hệ phương trình giúp kỹ sư chọn đúng điện trở và tụ điện, ngăn ngừa tình trạng quá nhiệt gây cháy nổ pin vi mạch.

### 3. Tối ưu hóa Tuyến đường Xe buýt & Logistics Hàng hải
Các công ty giao vận thông minh như Grab, ShopeeFood hay Viettel Post:
- Lập hệ phương trình bậc nhất hai ẩn về chi phí xăng dầu và thời gian vận chuyển trên các cung đường giao thoa.
- Giải hệ phương trình trong thời gian thực để phân bổ tài xế gần nhất đón khách, giảm thiểu tối đa tình trạng kẹt xe giờ cao điểm.

### 4. Công nghệ Định vị Vệ tinh GPS & Galileo
Máy thu GPS trên điện thoại thu tín hiệu vô tuyến từ các vệ tinh bay quanh quỹ đạo Trái Đất:
- Mỗi khoảng cách từ vệ tinh đến máy thu lập thành một phương trình toán học.
- Bằng cách tuyến tính hóa vi phân thành hệ hai phương trình bậc nhất, chip GPS giải ra tọa độ kinh độ và vĩ độ chính xác tới từng bước chân người đi bộ.

### 5. Y học hạt nhân & Chụp cắt lớp vi tính (CT Scanner)
Khi máy chụp CT quét quanh cơ thể bệnh nhân:
- Các chùm tia X chiếu xuyên qua cơ thể bị hấp thụ với các hệ số suy giảm khác nhau của xương và mô mềm.
- Máy tính giải hệ hàng trăm ngàn phương trình bậc nhất hai ẩn để tái tạo hình ảnh cắt lớp cơ thể $3D$ siêu nét, giúp bác sĩ phát hiện sớm các khối u tế bào kích thước chỉ vài milimét.

---

## IV. 10 Câu hỏi trắc nghiệm tương tác tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Nghiệm của hệ phương trình { x + y = 5 ; x - y = 1 } là:",
  "options": [
    "(x; y) = (3; 2)",
    "(x; y) = (2; 3)",
    "(x; y) = (4; 1)",
    "(x; y) = (1; 4)"
  ],
  "answer": 0,
  "explanation": "Cộng hai phương trình: 2x = 6 ⇒ x = 3. Thay vào: y = 5 - 3 = 2. Nghiệm là (3; 2)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Để giải hệ phương trình { 3x + 2y = 8 ; 5x - 2y = 8 } bằng phương pháp cộng đại số, ta nên:",
  "options": [
    "Cộng từng vế hai phương trình để khử ẩn y",
    "Trừ từng vế hai phương trình để khử ẩn y",
    "Nhân phương trình 1 với 5",
    "Nhân phương trình 2 với 3"
  ],
  "answer": 0,
  "explanation": "Vì hệ số của y là 2 và -2 (hai số đối nhau) nên ta cộng từng vế hai phương trình để triệt tiêu y: 8x = 16."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Giải hệ phương trình { 2x - y = 3 ; x + 2y = 4 }. Giá trị của x là:",
  "options": [
    "x = 2",
    "x = 1",
    "x = 3",
    "x = -1"
  ],
  "answer": 0,
  "explanation": "Từ pt 1: y = 2x - 3. Thế vào pt 2: x + 2(2x - 3) = 4 ⇒ 5x - 6 = 4 ⇒ 5x = 10 ⇒ x = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Khi đặt ẩn phụ u = 1/x và v = 1/y, hệ phương trình { 3/x + 2/y = 7 ; 1/x - 4/y = -7 } trở thành:",
  "options": [
    "Hệ { 3u + 2v = 7 ; u - 4v = -7 }",
    "Hệ { 3u - 2v = 7 ; u + 4v = -7 }",
    "Hệ { 2u + 3v = 7 ; -4u + v = -7 }",
    "Hệ { 3/u + 2/v = 7 ; 1/u - 4/v = -7 }"
  ],
  "answer": 0,
  "explanation": "Thay trực tiếp u = 1/x và v = 1/y vào hệ ta thu được hệ bậc nhất: { 3u + 2v = 7 ; u - 4v = -7 }."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nghiệm của hệ phương trình { 2x + 3y = 12 ; 3x - y = 7 } là:",
  "options": [
    "(x; y) = (3; 2)",
    "(x; y) = (2; 3)",
    "(x; y) = (1; 4)",
    "(x; y) = (4; 1)"
  ],
  "answer": 0,
  "explanation": "Từ pt 2: y = 3x - 7. Thế vào pt 1: 2x + 3(3x - 7) = 12 ⇒ 11x - 21 = 12 ⇒ 11x = 33 ⇒ x = 3 ⇒ y = 3(3) - 7 = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Hệ phương trình { x - y = 2 ; 2x - 2y = 5 } có:",
  "options": [
    "1 nghiệm duy nhất",
    "Vô nghiệm",
    "Vô số nghiệm",
    "2 nghiệm"
  ],
  "answer": 1,
  "explanation": "Ta có 1/2 = (-1)/(-2) khác 2/5 (1/2 = 1/2 khác 2/5) nên hệ vô nghiệm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tìm giá trị của m để hệ phương trình { x + y = 3 ; 2x + my = 6 } có vô số nghiệm.",
  "options": [
    "m = 2",
    "m = 1",
    "m = 3",
    "m = -2"
  ],
  "answer": 0,
  "explanation": "Để hệ có vô số nghiệm thì 1/2 = 1/m = 3/6 ⇒ 1/m = 1/2 ⇒ m = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho hệ phương trình { mx - y = 1 ; x + my = 3 }. Khi m = 1, nghiệm của hệ là:",
  "options": [
    "(x; y) = (2; 1)",
    "(x; y) = (1; 2)",
    "(x; y) = (3; 0)",
    "(x; y) = (0; 3)"
  ],
  "answer": 0,
  "explanation": "Khi m = 1: { x - y = 1 ; x + y = 3 }. Cộng hai pt: 2x = 4 ⇒ x = 2 ⇒ y = 1. Nghiệm là (2; 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Nghiệm của hệ phương trình { |x| + y = 3 ; 2|x| - y = 3 } là:",
  "options": [
    "Chỉ có (2; 1)",
    "(2; 1) và (-2; 1)",
    "(1; 2) và (-1; 2)",
    "Hệ vô nghiệm"
  ],
  "answer": 1,
  "explanation": "Cộng hai pt: 3|x| = 6 ⇒ |x| = 2 ⇒ x = 2 hoặc x = -2. Thay vào: y = 3 - 2 = 1. Hệ có 2 nghiệm: (2; 1) và (-2; 1)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hai vòi nước cùng chảy vào một bể cạn thì sau 6 giờ đầy bể. Nếu gọi x, y lần lượt là thời gian vòi 1 và vòi 2 chảy một mình đầy bể (x, y > 6) thì phương trình liên hệ là:",
  "options": [
    "x + y = 6",
    "1/x + 1/y = 6",
    "1/x + 1/y = 1/6",
    "6x + 6y = 1"
  ],
  "answer": 2,
  "explanation": "Trong 1 giờ, vòi 1 chảy được 1/x bể, vòi 2 chảy được 1/y bể. Cả hai vòi cùng chảy 1 giờ được 1/6 bể ⇒ 1/x + 1/y = 1/6."
}'></div>

---

## V. Bài tập tự luyện & Thử thách thực tế

### Bài tập cơ bản
1. Giải các hệ phương trình sau bằng phương pháp thế:
   a) $\begin{cases} 2x - y = 5 \\ x + 3y = 6 \end{cases}$
   b) $\begin{cases} 3x + y = 8 \\ 2x - 3y = 9 \end{cases}$
2. Giải các hệ phương trình sau bằng phương pháp cộng đại số:
   a) $\begin{cases} 4x + 3y = 18 \\ 5x - 3y = 9 \end{cases}$
   b) $\begin{cases} 3x + 5y = 1 \\ 2x - 3y = 7 \end{cases}$
3. Giải các hệ phương trình sau bằng cách đặt ẩn phụ:
   a) $\begin{cases} \frac{1}{x} + \frac{1}{y} = \frac{5}{6} \\ \frac{2}{x} - \frac{3}{y} = 0 \end{cases}$
   b) $\begin{cases} \frac{3}{x + y} + \frac{2}{x - y} = 5 \\ \frac{2}{x + y} - \frac{1}{x - y} = 1 \end{cases}$

### Bài tập nâng cao & Vận dụng thực tế
4. **Bài toán pha trộn dung dịch hóa học:** Người ta cần pha trộn dung dịch cồn $70\%$ và dung dịch cồn $90\%$ để thu được $100\text{ lít}$ dung dịch cồn y tế nồng độ $78\%$ sát khuẩn.
   a) Gọi $x, y$ lần lượt là số lít cồn $70\%$ và $90\%$ cần dùng. Lập hệ phương trình bậc nhất hai ẩn.
   b) Giải hệ phương trình tìm $x$ và $y$.
5. Cho hệ phương trình $\begin{cases} mx + 4y = 10 - m \\ x + my = 4 \end{cases}$.
   a) Tìm $m$ để hệ có nghiệm duy nhất.
   b) Với điều kiện hệ có nghiệm duy nhất, tìm $m$ để $x$ và $y$ là hai số đối nhau ($x + y = 0$).
