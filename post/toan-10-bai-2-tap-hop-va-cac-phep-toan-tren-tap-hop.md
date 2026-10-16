---
title: 'Toán 10 Bài 2: Tập hợp và các phép toán trên tập hợp - Lý thuyết & Bài tập'
description: 'Lý thuyết chuẩn Toán 10 Bài 2: Khái niệm tập hợp, tập con, các khoảng đoạn nửa khoảng trên tập số thực, phép giao, hợp, hiệu, phần bù, biểu đồ Venn, widget trực quan hóa trục số và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Đại số 10
  - Tập hợp
  - Phép toán tập hợp
  - Khoảng đoạn nửa khoảng
  - Biểu đồ Venn
  - Kết nối tri thức
grade: 10
---

# Bài 2. Tập hợp và các phép toán trên tập hợp

Nếu như trong ngôn ngữ lập trình, các cấu trúc dữ liệu như danh sách (`List`), mảng (`Array`) hay tập hợp (`Set`) là xương sống để lưu trữ thông tin, thì trong Toán học, **Tập hợp (Set)** chính là một trong những khái niệm nguyên thủy và quan trọng nhất của toàn bộ nền tảng toán học hiện đại.

Mọi đối tượng toán học quen thuộc — từ các số tự nhiên $0, 1, 2, \dots$, các hình tam giác, đường tròn cho đến các hàm số phức tạp — đều có thể định nghĩa và nghiên cứu thông qua ngôn ngữ của lý thuyết tập hợp do nhà toán học vĩ đại Georg Cantor sáng lập vào cuối thế kỷ XIX.

Lên lớp 10, chúng ta không chỉ dừng lại ở các tập hợp số rời rạc mà sẽ làm quen với các tập hợp con liên tục của tập số thực $\mathbb{R}$ như **đoạn, khoảng, nửa khoảng**, cùng bốn phép toán căn bản: **Giao ($\cap$), Hợp ($\cup$), Hiệu ($\setminus$) và Phần bù ($C_E A$)**.

---

## 1. Sơ đồ tư duy toàn diện: Tập hợp & Các phép toán

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #3730a3;">1. Khái niệm & Ký hiệu</h4>
    <p style="margin: 0; font-size: 0.9em; color: #4338ca;">
      • Phần tử thuộc: $a \in A$, không thuộc: $b \notin A$<br>
      • Biểu diễn: Liệt kê hoặc Nêu tính chất đặc trưng<br>
      • Tập rỗng: $\varnothing$ (không chứa phần tử nào)<br>
      • Tập con: $A \subset B \Leftrightarrow (\forall x \in A \Rightarrow x \in B)$<br>
      • Tập bằng nhau: $A = B \Leftrightarrow A \subset B$ và $B \subset A$<br>
      • Tập hợp có $n$ phần tử thì có đúng $2^n$ tập con.
    </p>
  </div>
  <div style="background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #065f46;">2. Các tập hợp số & Khoảng đoạn</h4>
    <p style="margin: 0; font-size: 0.9em; color: #047857;">
      • $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$<br>
      • Khoảng: $(a; b) = \{x \in \mathbb{R} \mid a < x < b\}$<br>
      • Đoạn: $[a; b] = \{x \in \mathbb{R} \mid a \le x \le b\}$<br>
      • Nửa khoảng: $[a; b), (a; b], (-\infty; b], [a; +\infty)$<br>
      • Ký hiệu vô cực: $-\infty$ (âm vô cực), $+\infty$ (dương vô cực).
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Bốn phép toán tập hợp</h4>
    <p style="margin: 0; font-size: 0.9em; color: #b45309;">
      • <strong>Giao</strong>: $A \cap B = \{x \mid x \in A \text{ va } x \in B\}$<br>
      • <strong>Hợp</strong>: $A \cup B = \{x \mid x \in A \text{ hoac } x \in B\}$<br>
      • <strong>Hiệu</strong>: $A \setminus B = \{x \mid x \in A \text{ va } x \notin B\}$<br>
      • <strong>Phần bù</strong>: Khi $A \subset E$, $C_E A = E \setminus A$<br>
      • Số phần tử: $n(A \cup B) = n(A) + n(B) - n(A \cap B)$.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Kỹ năng biểu diễn trục số</h4>
    <p style="margin: 0; font-size: 0.9em; color: #be185d;">
      • Ngoặc tròn $($ hoặc $)$: không lấy đầu mút<br>
      • Ngoặc vuông $[$ hoặc $]$: lấy đầu mút<br>
      • Tô đậm phần thuộc tập hợp, gạch bỏ phần không thuộc<br>
      • Dùng trục số xử lý nhanh bài toán chứa tham số $m$.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi phản xạ nhanh

Cùng làm nóng tư duy với 5 câu hỏi nhanh sau đây trước khi đi sâu vào lý thuyết:

1. **Tập rỗng $\varnothing$ có phải là tập con của mọi tập hợp không?**  
   *Đáp án:* Có! Với mọi tập hợp $A$, ta luôn có $\varnothing \subset A$ và $A \subset A$.
2. **Một tập hợp gồm 4 phần tử thì có tất cả bao nhiêu tập con?**  
   *Đáp án:* Số tập con là $2^4 = 16$ tập hợp con.
3. **Phép giao của hai tập hợp $A = [1; 5]$ và $B = (3; 7)$ là gì?**  
   *Đáp án:* Giao lấy phần tử chung: $A \cap B = (3; 5]$.
4. **Hiệu của tập số thực $\mathbb{R}$ và khoảng $(-\infty; 2)$ là gì?**  
   *Đáp án:* Bỏ đi các số nhỏ hơn $2$, phần còn lại là nửa khoảng $[2; +\infty)$.
5. **Nếu lớp 10A có 25 học sinh giỏi Toán, 20 học sinh giỏi Văn, và 10 bạn giỏi cả hai môn, thì có bao nhiêu học sinh giỏi ít nhất một trong hai môn?**  
   *Đáp án:* Áp dụng công thức cộng: $25 + 20 - 10 = 35$ bạn.

---

## 3. Lý thuyết trọng tâm

### 3.1. Khái niệm tập hợp & Cách xác định

Tập hợp là một khái niệm cơ bản không định nghĩa. Các đối tượng tạo nên tập hợp được gọi là các **phần tử** của tập hợp đó.

- $a \in A$: phần tử $a$ thuộc tập hợp $A$.
- $b \notin A$: phần tử $b$ không thuộc tập hợp $A$.
- Tập hợp không chứa phần tử nào được gọi là **tập rỗng**, ký hiệu là $\varnothing$.

> [!WARNING]
> Tuyệt đối không viết $\{\varnothing\}$ khi muốn chỉ tập rỗng, vì $\{\varnothing\}$ là một tập hợp có một phần tử (phần tử đó chính là tập rỗng $\varnothing$).

**Hai phương pháp xác định tập hợp:**
1. **Liệt kê các phần tử:** Viết tất cả các phần tử trong dấu ngoặc nhọn $\{\dots\}$, mỗi phần tử chỉ viết đúng một lần và cách nhau bởi dấu chấm phẩy.  
   *Ví dụ:* $A = \{1; 2; 3; 6\}$.
2. **Nêu tính chất đặc trưng:** Chỉ ra tính chất mà tất cả các phần tử của tập hợp đều thỏa mãn và các đối tượng khác không thỏa mãn.  
   *Ví dụ:* $A = \{x \in \mathbb{N} \mid 6 \ \vdots \ x\}$.

---

### 3.2. Tập con & Hai tập hợp bằng nhau

- **Định nghĩa tập con:** Cho hai tập hợp $A$ và $B$. Nếu mọi phần tử của $A$ đều là phần tử của $B$, ta nói $A$ là tập con của $B$, ký hiệu $A \subset B$ (hoặc $B \supset A$).
  $$A \subset B \iff (\forall x, x \in A \implies x \in B)$$
- **Tính chất của quan hệ bao hàm:**
  - $A \subset A$ với mọi tập hợp $A$.
  - $\varnothing \subset A$ với mọi tập hợp $A$.
  - Tính bắc cầu: Nếu $A \subset B$ và $B \subset C$ thì $A \subset C$.
- **Số lượng tập hợp con:** Nếu tập hợp $S$ có $n$ phần tử ($n \in \mathbb{N}$) thì số tập hợp con của $S$ là $2^n$.
- **Hai tập hợp bằng nhau:**
  $$A = B \iff (A \subset B \text{ va } B \subset A)$$

---

### 3.3. Các tập hợp số & Các tập con của $\mathbb{R}$

Chúng ta có mối quan hệ bao hàm giữa các tập hợp số quen thuộc:
$$\mathbb{N}^* \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

Trên trục số thực $\mathbb{R}$, ta thường làm việc với các tập con liên tục:

| Tên gọi | Ký hiệu | Định nghĩa | Biểu diễn trên trục số |
| :--- | :--- | :--- | :--- |
| **Khoảng** | $(a; b)$ | $\{x \in \mathbb{R} \mid a < x < b\}$ | Bỏ ngoài $(a; b)$, không lấy $a$ và $b$ |
| | $(-\infty; b)$ | $\{x \in \mathbb{R} \mid x < b\}$ | Bỏ phía bên phải $b$, không lấy $b$ |
| | $(a; +\infty)$ | $\{x \in \mathbb{R} \mid x > a\}$ | Bỏ phía bên trái $a$, không lấy $a$ |
| **Đoạn** | $[a; b]$ | $\{x \in \mathbb{R} \mid a \le x \le b\}$ | Bỏ ngoài $[a; b]$, lấy cả $a$ và $b$ |
| **Nửa khoảng** | $[a; b)$ | $\{x \in \mathbb{R} \mid a \le x < b\}$ | Lấy $a$, không lấy $b$ |
| | $(a; b]$ | $\{x \in \mathbb{R} \mid a < x \le b\}$ | Không lấy $a$, lấy $b$ |
| | $(-\infty; b]$ | $\{x \in \mathbb{R} \mid x \le b\}$ | Bỏ phía bên phải $b$, lấy $b$ |
| | $[a; +\infty)$ | $\{x \in \mathbb{R} \mid x \ge a\}$ | Bỏ phía bên trái $a$, lấy $a$ |

> [!NOTE]
> Ký hiệu $+\infty$ đọc là "dương vô cực" (hoặc "dương vô cùng"), $-\infty$ đọc là "âm vô cực". Chúng là các ký hiệu chỉ độ lớn vô hạn, không phải là các số thực, do đó đầu mút vô cực luôn luôn đi kèm dấu ngoặc tròn `)` hoặc `(`.

---

### 3.4. Các phép toán trên tập hợp

#### 1. Phép giao (Intersection $\cap$)
Giao của hai tập hợp $A$ và $B$ là tập hợp gồm tất cả các phần tử vừa thuộc $A$, vừa thuộc $B$:
$$A \cap B = \{x \mid x \in A \text{ va } x \in B\}$$
- $x \in A \cap B \iff (x \in A \text{ va } x \in B)$.
- Nếu $A \cap B = \varnothing$, ta nói hai tập hợp $A$ và $B$ **rời nhau** (disjoint).

#### 2. Phép hợp (Union $\cup$)
Hợp của hai tập hợp $A$ và $B$ là tập hợp gồm tất cả các phần tử thuộc $A$ hoặc thuộc $B$:
$$A \cup B = \{x \mid x \in A \text{ hoac } x \in B\}$$
- $x \in A \cup B \iff (x \in A \text{ hoac } x \in B)$.

#### 3. Phép hiệu (Difference / Relative Complement $\setminus$)
Hiệu của tập hợp $A$ và tập hợp $B$ là tập hợp gồm các phần tử thuộc $A$ nhưng không thuộc $B$:
$$A \setminus B = \{x \mid x \in A \text{ va } x \notin B\}$$
- Lưu ý: Thông thường $A \setminus B \ne B \setminus A$.

#### 4. Phần bù (Absolute Complement $C_E A$)
Khi $A$ là tập con của tập vũ trụ $E$ ($A \subset E$), hiệu $E \setminus A$ được gọi là **phần bù** của $A$ trong $E$, ký hiệu là $C_E A$:
$$C_E A = \{x \in E \mid x \notin A\}$$
- Đặc biệt trên tập số thực, phần bù của $A$ trong $\mathbb{R}$ ký hiệu là $C_{\mathbb{R}} A = \mathbb{R} \setminus A$.

> [!TIP]
> **Công thức cộng số phần tử (Bao hàm - Loại trừ):**
> Cho hai tập hữu hạn $A$ và $B$, ký hiệu $n(X)$ là số phần tử của tập hợp $X$:
> $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
> Nếu $A$ và $B$ rời nhau ($A \cap B = \varnothing$) thì:
> $$n(A \cup B) = n(A) + n(B)$$

---

## 4. Widget tương tác: Khám phá Trực quan Biểu đồ Venn & Trục số Thực

Hãy bấm các nút bên dưới để chuyển đổi giữa các phép toán tập hợp và quan sát trực quan vùng kết quả:

```html
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🔬 Phòng Thí Nghiệm Trực Quan Hóa Tập Hợp</h3>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <button id="btnUnion" onclick="setOp('union')" style="padding: 6px 14px; border-radius: 6px; border: none; background: #3b82f6; color: white; cursor: pointer; font-weight: 600;">Hợp (A ∪ B)</button>
      <button id="btnInter" onclick="setOp('inter')" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; color: #334155; cursor: pointer; font-weight: 600;">Giao (A ∩ B)</button>
      <button id="btnDiffAB" onclick="setOp('diffAB')" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; color: #334155; cursor: pointer; font-weight: 600;">Hiệu (A \ B)</button>
      <button id="btnDiffBA" onclick="setOp('diffBA')" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: white; color: #334155; cursor: pointer; font-weight: 600;">Hiệu (B \ A)</button>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; align-items: center;">
    <!-- Venn Diagram SVG -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-weight: 600; font-size: 0.9rem; color: #475569; margin-bottom: 8px;">Mô hình Biểu đồ Venn</div>
      <svg viewBox="0 0 320 200" style="width: 100%; max-width: 300px; height: auto;">
        <defs>
          <clipPath id="clipA"><circle cx="120" cy="100" r="65" /></clipPath>
          <clipPath id="clipB"><circle cx="200" cy="100" r="65" /></clipPath>
        </defs>
        <!-- Universe Box -->
        <rect x="10" y="10" width="300" height="180" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4" />
        <text x="25" y="32" font-size="14" font-weight="bold" fill="#64748b">E</text>

        <!-- Shaded areas based on op -->
        <path id="vennShadeA" d="M 120,35 A 65,65 0 1,0 120,165 A 65,65 0 0,0 120,35" fill="#60a5fa" opacity="0.4" />
        <path id="vennShadeB" d="M 200,35 A 65,65 0 1,0 200,165 A 65,65 0 0,0 200,35" fill="#34d399" opacity="0.4" />

        <!-- Highlight Overlay -->
        <circle id="vennCircleA" cx="120" cy="100" r="65" fill="none" stroke="#2563eb" stroke-width="2.5" />
        <circle id="vennCircleB" cx="200" cy="100" r="65" fill="none" stroke="#059669" stroke-width="2.5" />

        <!-- Labels -->
        <text x="80" y="105" font-size="14" font-weight="bold" fill="#1e40af">A \ B</text>
        <text x="150" y="105" font-size="14" font-weight="bold" fill="#0f172a">A ∩ B</text>
        <text x="220" y="105" font-size="14" font-weight="bold" fill="#065f46">B \ A</text>

        <text x="120" y="30" font-size="15" font-weight="bold" fill="#1e40af" text-anchor="middle">Tập A</text>
        <text x="200" y="30" font-size="15" font-weight="bold" fill="#065f46" text-anchor="middle">Tập B</text>
      </svg>
    </div>

    <!-- Real line SVG & Description -->
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
      <div style="font-weight: 600; font-size: 0.9rem; color: #475569; margin-bottom: 8px;">Biểu diễn trên trục số thực: $A = [-2; 3)$ và $B = (1; 6]$</div>
      <svg viewBox="0 0 340 90" style="width: 100%; height: auto;">
        <!-- Number Axis -->
        <line x1="20" y1="50" x2="320" y2="50" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" />
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155" />
          </marker>
        </defs>
        <!-- Ticks: -2, 1, 3, 6 -->
        <!-- Scaling: map -4 -> 30, 8 -> 310 => range 12 unit -> 280 px => ~23.3 px/unit -->
        <!-- Center at 0 -> 123 px -->
        <!-- x(-2) = 76, x(1) = 146, x(3) = 193, x(6) = 263 -->
        <g stroke="#94a3b8" stroke-width="1.5">
          <line x1="76" y1="45" x2="76" y2="55" />
          <line x1="146" y1="45" x2="146" y2="55" />
          <line x1="193" y1="45" x2="193" y2="55" />
          <line x1="263" y1="45" x2="263" y2="55" />
        </g>
        <text x="76" y="70" font-size="12" fill="#475569" text-anchor="middle">-2</text>
        <text x="146" y="70" font-size="12" fill="#475569" text-anchor="middle">1</text>
        <text x="193" y="70" font-size="12" fill="#475569" text-anchor="middle">3</text>
        <text x="263" y="70" font-size="12" fill="#475569" text-anchor="middle">6</text>

        <!-- Interval highlighting on axis -->
        <rect id="axisHighlight" x="76" y="44" width="187" height="12" fill="#3b82f6" opacity="0.6" rx="3" />
        <text id="bracketLeft" x="76" y="54" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">[</text>
        <text id="bracketRight" x="263" y="54" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">]</text>
      </svg>
      <div id="opExplanation" style="margin-top: 10px; font-size: 0.95rem; color: #1e293b; background: #f1f5f9; padding: 10px; border-radius: 6px;">
        <strong>Hợp $A \cup B$:</strong> Lấy tất cả các phần tử thuộc ít nhất một trong hai tập hợp.<br>
        Kết quả: $[-2; 6]$.
      </div>
    </div>
  </div>
</div>

<script>
function setOp(op) {
  const btnUnion = document.getElementById('btnUnion');
  const btnInter = document.getElementById('btnInter');
  const btnDiffAB = document.getElementById('btnDiffAB');
  const btnDiffBA = document.getElementById('btnDiffBA');
  
  [btnUnion, btnInter, btnDiffAB, btnDiffBA].forEach(b => {
    b.style.background = 'white';
    b.style.color = '#334155';
    b.style.border = '1px solid #cbd5e1';
  });

  const activeBtn = op === 'union' ? btnUnion : (op === 'inter' ? btnInter : (op === 'diffAB' ? btnDiffAB : btnDiffBA));
  activeBtn.style.background = '#3b82f6';
  activeBtn.style.color = 'white';
  activeBtn.style.border = 'none';

  const shadeA = document.getElementById('vennShadeA');
  const shadeB = document.getElementById('vennShadeB');
  const axisHighlight = document.getElementById('axisHighlight');
  const bracketL = document.getElementById('bracketLeft');
  const bracketR = document.getElementById('bracketRight');
  const explanation = document.getElementById('opExplanation');

  if (op === 'union') {
    shadeA.setAttribute('opacity', '0.45');
    shadeB.setAttribute('opacity', '0.45');
    axisHighlight.setAttribute('x', '76');
    axisHighlight.setAttribute('width', '187');
    bracketL.setAttribute('x', '76');
    bracketL.textContent = '[';
    bracketR.setAttribute('x', '263');
    bracketR.textContent = ']';
    explanation.innerHTML = '<strong>Hợp $A \\cup B$:</strong> $[-2; 3) \\cup (1; 6] = [-2; 6]$. Quét liền mạch từ $-2$ đến $6$.';
  } else if (op === 'inter') {
    shadeA.setAttribute('opacity', '0.0');
    shadeB.setAttribute('opacity', '0.0');
    axisHighlight.setAttribute('x', '146');
    axisHighlight.setAttribute('width', '47');
    bracketL.setAttribute('x', '146');
    bracketL.textContent = '(';
    bracketR.setAttribute('x', '193');
    bracketR.textContent = ')';
    explanation.innerHTML = '<strong>Giao $A \\cap B$:</strong> $[-2; 3) \\cap (1; 6] = (1; 3)$. Phần nằm chung trong cả hai khoảng.';
  } else if (op === 'diffAB') {
    shadeA.setAttribute('opacity', '0.5');
    shadeB.setAttribute('opacity', '0.0');
    axisHighlight.setAttribute('x', '76');
    axisHighlight.setAttribute('width', '70');
    bracketL.setAttribute('x', '76');
    bracketL.textContent = '[';
    bracketR.setAttribute('x', '146');
    bracketR.textContent = ']';
    explanation.innerHTML = '<strong>Hiệu $A \\setminus B$:</strong> $[-2; 3) \\setminus (1; 6] = [-2; 1]$. Lấy phần thuộc $A$ nhưng bị $B$ khoét đi. Chú ý: Vì $1 \\in B$ nên $1$ vẫn thuộc $A \\setminus B$, do đó lấy ngoặc vuông $[1]$.';
  } else if (op === 'diffBA') {
    shadeA.setAttribute('opacity', '0.0');
    shadeB.setAttribute('opacity', '0.5');
    axisHighlight.setAttribute('x', '193');
    axisHighlight.setAttribute('width', '70');
    bracketL.setAttribute('x', '193');
    bracketL.textContent = '[';
    bracketR.setAttribute('x', '263');
    bracketR.textContent = ']';
    explanation.innerHTML = '<strong>Hiệu $B \\setminus A$:</strong> $(1; 6] \\setminus [-2; 3) = [3; 6]$. Vì $3 \\notin A$ nên $3$ không bị trừ bỏ, do đó đầu mút là ngoặc vuông $[3]$.';
  }
}
</script>
```

---

## 5. Bốn dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Viết tập hợp, tìm tất cả các tập con và số lượng tập con

#### Phương pháp:
- Nếu tập hợp cho dưới dạng tính chất đặc trưng, giải phương trình hoặc bất phương trình tìm nghiệm và chọn nghiệm thuộc tập số đã cho ($\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$).
- Để liệt kê các tập con, lần lượt viết:
  1. Tập hợp rỗng $\varnothing$.
  2. Các tập con có $1$ phần tử.
  3. Các tập con có $2$ phần tử, $3$ phần tử,...
  4. Chính tập hợp đó.
- Sử dụng công thức: Tập hợp có $n$ phần tử thì có $2^n$ tập hợp con.

---

#### Bài toán 1
Cho tập hợp $X = \{x \in \mathbb{Z} \mid (2x^2 - 5x + 2)(x^2 - 4) = 0\}$.
1. Viết tập hợp $X$ bằng phương pháp liệt kê các phần tử.
2. Tìm số tập con của $X$ và liệt kê tất cả các tập con có đúng 2 phần tử của $X$.

**Lời giải chi tiết:**

1. Ta giải phương trình:
   $$(2x^2 - 5x + 2)(x^2 - 4) = 0 \iff \left[\begin{array}{l} 2x^2 - 5x + 2 = 0 \\ x^2 - 4 = 0 \end{array}\right.$$
   - Phương trình $2x^2 - 5x + 2 = 0$ có hai nghiệm là $x_1 = 2$ và $x_2 = \frac{1}{2}$.
   - Phương trình $x^2 - 4 = 0 \iff x = 2$ hoặc $x = -2$.

   Vì điều kiện $x \in \mathbb{Z}$ (số nguyên), ta chỉ nhận các giá trị $x \in \{-2; 2\}$. Giá trị $x = \frac{1}{2} \notin \mathbb{Z}$ bị loại.  
   Vậy tập hợp $X$ gồm 2 phần tử:
   $$X = \{-2; 2\}$$

2. Số phần tử của $X$ là $n = 2$, do đó số tập con của $X$ là $2^2 = 4$ tập con.  
   Tập hợp $X$ có đúng một tập con có 2 phần tử, đó chính là:
   $$\{-2; 2\} = X$$

---

### Dạng 2: Các phép toán giao, hợp, hiệu trên tập rời rạc

#### Phương pháp:
- **Giao ($A \cap B$):** Chọn những phần tử có mặt ở cả hai tập hợp.
- **Hợp ($A \cup B$):** Viết tất cả các phần tử của $A$ và bổ sung thêm các phần tử của $B$ chưa có trong $A$.
- **Hiệu ($A \setminus B$):** Bắt đầu từ tập $A$, gạch bỏ đi những phần tử nào nằm trong $B$.

---

#### Bài toán 2
Cho ba tập hợp:
$$A = \{x \in \mathbb{N} \mid x \text{ la uoc cua } 12\}$$
$$B = \{x \in \mathbb{N} \mid x \text{ la uoc cua } 18\}$$
$$C = \{2; 3; 5; 7\}$$
1. Xác định các tập hợp $A, B$ bằng cách liệt kê phần tử.
2. Tìm $A \cap B$, $A \cup B$, $A \setminus B$ và $(A \cap B) \setminus C$.

**Lời giải chi tiết:**

1. Các ước tự nhiên của 12:
   $$A = \{1; 2; 3; 4; 6; 12\}$$
   Các ước tự nhiên của 18:
   $$B = \{1; 2; 3; 6; 9; 18\}$$

2. Thực hiện các phép toán:
   - **Giao:** Phần tử chung của $A$ và $B$ là các ước chung của 12 và 18:
     $$A \cap B = \{1; 2; 3; 6\}$$
   - **Hợp:** Gom tất cả các phần tử:
     $$A \cup B = \{1; 2; 3; 4; 6; 9; 12; 18\}$$
   - **Hiệu:** Lấy các phần tử thuộc $A$ nhưng không thuộc $B$:
     $$A \setminus B = \{4; 12\}$$
   - Biểu thức kết hợp $(A \cap B) \setminus C$:
     Ta có $A \cap B = \{1; 2; 3; 6\}$ và $C = \{2; 3; 5; 7\}$.  
     Loại bỏ các phần tử $2, 3$ (có mặt trong $C$):
     $$(A \cap B) \setminus C = \{1; 6\}$$

---

### Dạng 3: Các phép toán trên khoảng, đoạn của tập số thực $\mathbb{R}$

#### Phương pháp:
1. Vẽ một trục số chung, điền tất cả các giá trị đầu mút theo thứ tự tăng dần từ trái sang phải.
2. Biểu diễn tập hợp thứ nhất lên trục (tô đậm hoặc dùng ký hiệu ngoặc), gạch bỏ phần không thuộc nếu cần.
3. Biểu diễn tập hợp thứ hai và thực hiện phép toán tương ứng:
   - $A \cap B$: Vùng trục số được cả hai tập hợp phủ.
   - $A \cup B$: Vùng trục số được ít nhất một tập hợp phủ.
   - $A \setminus B$: Vùng thuộc $A$ loại bỏ đi vùng bị $B$ che lấp. Chú ý tính chất đầu mút (nếu mút thuộc $B$ thì bị trừ mất $\Rightarrow$ ngoặc tròn; nếu mút không thuộc $B$ thì giữ lại $\Rightarrow$ ngoặc vuông).

---

#### Bài toán 3
Cho các tập hợp:
$$A = [-3; 4), \quad B = (0; +\infty), \quad C = (-\infty; 1]$$
Tìm các tập hợp sau và biểu diễn trên trục số:
1. $A \cap B$ và $A \cup B$.
2. $A \setminus C$ và $C_{\mathbb{R}} A$.

**Lời giải chi tiết:**

1. Tìm $A \cap B$ và $A \cup B$:
   - Trên trục số, các mút theo thứ tự: $-3 < 0 < 4$.
   - $A = [-3; 4)$ và $B = (0; +\infty)$.
   - Giao $A \cap B$ là phần các số vừa lớn hơn hoặc bằng $-3$, vừa nhỏ hơn $4$, và đồng thời phải lớn hơn $0$:
     $$A \cap B = (0; 4)$$
   - Hợp $A \cup B$ gom từ $-3$ qua $4$ đến $+\infty$:
     $$A \cup B = [-3; +\infty)$$

2. Tìm $A \setminus C$ và $C_{\mathbb{R}} A$:
   - $A = [-3; 4)$, $C = (-\infty; 1]$.
   - $A \setminus C$: Bỏ đi các số thuộc $C$, tức là bỏ đi các số $\le 1$. Điểm $1 \in C$ nên bị loại bỏ, phần còn lại bắt đầu lớn hơn $1$:
     $$A \setminus C = (1; 4)$$
   - $C_{\mathbb{R}} A = \mathbb{R} \setminus [-3; 4)$: Phần bù lấy tất cả các số không thuộc $[-3; 4]$, tức là nhỏ hơn $-3$ hoặc lớn hơn hay bằng $4$:
     $$C_{\mathbb{R}} A = (-\infty; -3) \cup [4; +\infty)$$

---

### Dạng 4: Bài toán tìm tham số $m$ để tập hợp thỏa mãn điều kiện

#### Phương pháp:
- Xác định điều kiện tồn tại tập hợp (nếu khoảng $(a; b)$ thì $a < b$; nếu đoạn $[a; b]$ thì $a \le b$).
- Lập luận điều kiện về vị trí của các mút trên trục số:
  - Để hai khoảng/đoạn rời nhau: các mút của khoảng này nằm hoàn toàn bên trái khoảng kia.
  - Để $A \subset B$: các mút của $A$ nằm bên trong khoảng/đoạn của $B$.
  - Cực kỳ cẩn trọng kiểm tra dấu bằng "$=$" tại các đầu mút: thay thử giá trị vào xem tính chất bao hàm có còn đúng hay không.

---

#### Bài toán 4
Cho hai tập hợp $A = [m - 1; m + 3]$ và $B = (-2; 5)$.
1. Tìm $m$ để $A \subset B$.
2. Tìm $m$ để $A \cap B = \varnothing$.

**Lời giải chi tiết:**

1. **Tìm $m$ để $A \subset B$:**
   Ta có $A = [m - 1; m + 3]$ và $B = (-2; 5)$.
   Để $A \subset B$, toàn bộ đoạn $A$ phải lọt vào bên trong khoảng $B$:
   $$\left\{\begin{array}{l} m - 1 > -2 \\ m + 3 < 5 \end{array}\right.$$
   *Xét dấu bằng:*
   - Nếu $m - 1 = -2$, khi đó $-2 \in A$ (do $A$ có ngoặc vuông), nhưng $-2 \notin B$ (do $B$ có ngoặc tròn), điều này dẫn tới $A \not\subset B$. Do đó không lấy dấu bằng tại mút trái, ta bắt buộc $m - 1 > -2$.
   - Tương tự, nếu $m + 3 = 5$, thì $5 \in A$ nhưng $5 \notin B \Rightarrow A \not\subset B$. Do đó $m + 3 < 5$.

   Giải hệ bất phương trình:
   $$\left\{\begin{array}{l} m > -1 \\ m < 2 \end{array}\right. \iff -1 < m < 2$$
   Vậy với $m \in (-1; 2)$ thì $A \subset B$.

2. **Tìm $m$ để $A \cap B = \varnothing$:**
   Hai tập hợp rời nhau khi đoạn $A$ nằm hoàn toàn về phía bên trái của khoảng $B$, hoặc nằm hoàn toàn về phía bên phải của khoảng $B$:
   $$\left[\begin{array}{l} m + 3 \le -2 \\ m - 1 \ge 5 \end{array}\right.$$
   *Xét dấu bằng:*
   - Nếu $m + 3 = -2$, điểm chung duy nhất có thể có là $-2$. Nhưng $-2 \notin B$, nên $A \cap B$ vẫn bằng $\varnothing$. Vậy lấy được dấu bằng!
   - Nếu $m - 1 = 5$, điểm chung duy nhất có thể có là $5$. Nhưng $5 \notin B$, nên $A \cap B$ vẫn bằng $\varnothing$. Vậy lấy được dấu bằng!

   Giải tuyển hai bất phương trình:
   $$\left[\begin{array}{l} m \le -5 \\ m \ge 6 \end{array}\right.$$
   Vậy $m \in (-\infty; -5] \cup [6; +\infty)$ thì $A \cap B = \varnothing$.

---

## 6. Ứng dụng thực tế & Khoa học máy tính

| Lĩnh vực | Ứng dụng thực tế của Lý thuyết Tập hợp |
| :--- | :--- |
| **Cơ sở dữ liệu (SQL)** | Các lệnh truy vấn SQL kinh điển phản ánh trực tiếp phép toán tập hợp: `INNER JOIN` chính là giao $A \cap B$, `FULL OUTER JOIN` là hợp $A \cup B$, `LEFT JOIN WHERE b.id IS NULL` là phép hiệu $A \setminus B$. |
| **Phân khúc người dùng (Marketing)** | Các nền tảng quảng cáo (Facebook/Google Ads) cho phép tạo tệp đối tượng: "Những người thích Công nghệ" $\cap$ "Độ tuổi từ 18 đến 25" $\setminus$ "Đã mua hàng". |
| **Hệ thống tệp & Phân quyền (Linux/OS)** | Quyền truy cập tập tin được quản lý theo tập hợp người dùng: Phép hợp các nhóm (Group Union) quyết định quyền đọc (`r`), ghi (`w`), và thực thi (`x`). |
| **Xử lý đồ họa & Game (CSG)** | Kỹ thuật Constructive Solid Geometry trong dựng hình 3D tạo ra các vật thể phức tạp bằng cách lấy Giao, Hợp hoặc Hiệu của các khối hình học cơ bản (hộp, trụ, cầu). |
| **Lập lịch tài nguyên (CPU Scheduling)** | Thuật toán kiểm tra xung đột thời gian (Interval Collision): Hai tiến trình xung đột khi và chỉ khi khoảng thời gian chiếm dụng tài nguyên có giao khác rỗng: $[t_1; t_2] \cap [t_3; t_4] \ne \varnothing$. |

---

## 7. Trắc nghiệm tương tác kiểm tra năng lực (10 câu)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q1",
  "question": "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid 2x^2 - 7x + 3 = 0\\}$. Khẳng định nào sau đây là đúng?",
  "options": [
    "$A = \\{1; 3\\}$",
    "$A = \\{3\\}$",
    "$A = \\{\\frac{1}{2}; 3\\}$",
    "$A = \\varnothing$"
  ],
  "answer": 2,
  "explanation": "Phương trình $2x^2 - 7x + 3 = 0$ có $\\Delta = 49 - 24 = 25 > 0$, hai nghiệm thực phân biệt là $x = \\frac{7 \\pm 5}{4}$, tức $x = 3$ và $x = \\frac{1}{2}$. Vì $x \\in \\mathbb{R}$ nên cả hai nghiệm đều thỏa mãn. Vậy $A = \\{\\frac{1}{2}; 3\\}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q2",
  "question": "Số tập hợp con của tập hợp $S = \\{a; b; c\\}$ gồm 3 phần tử là:",
  "options": [
    "3",
    "6",
    "8",
    "9"
  ],
  "answer": 2,
  "explanation": "Tập hợp có $n$ phần tử thì có $2^n$ tập con. Với $n = 3$, số tập con là $2^3 = 8$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q3",
  "question": "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Hiệu $A \\setminus B$ là tập hợp:",
  "options": [
    "$\\{1; 2\\}$",
    "$\\{5; 6\\}$",
    "$\\{3; 4\\}$",
    "$\\{1; 2; 5; 6\\}$"
  ],
  "answer": 0,
  "explanation": "$A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Bỏ các phần tử 3, 4 khỏi $A$, ta thu được $\\{1; 2\\}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q4",
  "question": "Cho hai khoảng $A = (-3; 2)$ và $B = [0; 5]$. Giao của hai tập hợp $A \\cap B$ là:",
  "options": [
    "$(-3; 5]$",
    "$[0; 2)$",
    "$(0; 2)$",
    "$[0; 2]$"
  ],
  "answer": 1,
  "explanation": "Phần tử chung của $A$ và $B$ là các số $x$ vừa thỏa mãn $-3 < x < 2$ vừa thỏa mãn $0 \\le x \\le 5$. Suy ra $0 \\le x < 2$, tức là nửa khoảng $[0; 2)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q5",
  "question": "Hợp của hai tập hợp $M = (-\\\\infty; 3]$ và $N = (1; +\\\\infty)$ là:",
  "options": [
    "$(1; 3]$",
    "$\\\\mathbb{R}$",
    "$\\\\varnothing$",
    "$(-\\\\infty; 1] \\\\cup (3; +\\\\infty)$"
  ],
  "answer": 1,
  "explanation": "Tập $M$ phủ từ $-\\\\infty$ đến $3$, tập $N$ phủ từ $1$ đến $+\\\\infty$. Hai tập hợp có vùng chồng lấn $(1; 3]$, do đó hợp của chúng phủ kín toàn bộ trục số thực $\\\\mathbb{R}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q6",
  "question": "Cho tập hợp $A = [-2; 4)$. Phần bù của $A$ trong $\\mathbb{R}$, ký hiệu $C_{\\mathbb{R}} A$, là:",
  "options": [
    "$(-\\infty; -2) \\cup [4; +\\infty)$",
    "$(-\\infty; -2] \\cup (4; +\\infty)$",
    "$(-\\infty; -2) \\cup (4; +\\infty)$",
    "$(-2; 4]$"
  ],
  "answer": 0,
  "explanation": "$C_{\\mathbb{R}} A = \\mathbb{R} \\setminus [-2; 4)$. Các số không thuộc $[-2; 4)$ là các số $x < -2$ hoặc $x \\ge 4$. Vậy kết quả là $(-\\infty; -2) \\cup [4; +\\infty)$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q7",
  "question": "Lớp 10B có 40 học sinh. Trong đó có 24 bạn thích môn Bóng đá, 18 bạn thích môn Cầu lông, và 8 bạn không thích cả hai môn này. Số bạn thích cả hai môn Bóng đá và Cầu lông là:",
  "options": [
    "10",
    "12",
    "8",
    "14"
  ],
  "answer": 0,
  "explanation": "Số bạn thích ít nhất một trong hai môn là: $40 - 8 = 32$ bạn. Áp dụng công thức số phần tử: $n(Bóng đá \\cup Cầu lông) = n(Bóng đá) + n(Cầu lông) - n(Bóng đá \\cap Cầu lông) \\implies 32 = 24 + 18 - x \\implies x = 42 - 32 = 10$ bạn."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q8",
  "question": "Cho hai tập hợp $A = [m; m + 2]$ và $B = [1; 6]$. Điều kiện cần và đủ của tham số $m$ để $A \\subset B$ là:",
  "options": [
    "$1 \\le m \\le 4$",
    "$1 < m < 4$",
    "$m \\ge 1$",
    "$m \\le 4$"
  ],
  "answer": 0,
  "explanation": "Để $[m; m + 2] \\subset [1; 6]$, ta cần mút trái $m \\ge 1$ và mút phải $m + 2 \\le 6 \\iff m \\le 4$. Kết hợp lại ta được $1 \\le m \\le 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q9",
  "question": "Cho $A = (-\\\\infty; m)$ và $B = [3; +\\\\infty)$. Để $A \\cap B = \\\\varnothing$ thì:",
  "options": [
    "$m \\le 3$",
    "$m < 3$",
    "$m > 3$",
    "$m \\ge 3$"
  ],
  "answer": 0,
  "explanation": "Tập $A$ gồm các số nhỏ hơn $m$. Tập $B$ gồm các số lớn hơn hoặc bằng 3. Để hai tập không có điểm chung, $m$ phải nhỏ hơn hoặc bằng 3. Khi $m = 3$, $A = (-\\\\infty; 3)$ không chứa số 3, còn $B$ có chứa số 3 nên giao vẫn rỗng. Vậy $m \\le 3$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c1_b2_q10",
  "question": "Ký hiệu nào sau đây thể hiện đúng mệnh đề: \"Tập hợp số tự nhiên là tập con của tập hợp số nguyên\"?",
  "options": [
    "$\\mathbb{N} \\in \\mathbb{Z}$",
    "$\\mathbb{N} \\subset \\mathbb{Z}$",
    "$\\mathbb{Z} \\subset \\mathbb{N}$",
    "$\\mathbb{N} \\subseteq \\mathbb{Q}$"
  ],
  "answer": 1,
  "explanation": "Mối quan hệ giữa hai tập hợp phải dùng ký hiệu tập con $\\subset$. Mọi số tự nhiên đều là số nguyên, do đó $\\mathbb{N} \\subset \\mathbb{Z}$."
}'></div>

---

## 8. Luyện tập tự do & Thử thách thực tế

### Bài tập 1 (Phân tích tập hợp chứa ẩn số)
Cho tập hợp $A = \{x \in \mathbb{R} \mid |x - 2| \le 3\}$ và $B = \{x \in \mathbb{R} \mid x^2 - 4x > 0\}$.
1. Hãy biểu diễn $A$ và $B$ dưới dạng các khoảng, đoạn hoặc hợp của các khoảng.
2. Tìm các tập hợp $A \cap B$, $A \cup B$, $A \setminus B$.

*Hướng dẫn giải:*
- Bất phương trình $|x - 2| \le 3 \iff -3 \le x - 2 \le 3 \iff -1 \le x \le 5$. Vậy $A = [-1; 5]$.
- Bất phương trình $x^2 - 4x > 0 \iff x(x - 4) > 0 \iff x < 0$ hoặc $x > 4$. Vậy $B = (-\infty; 0) \cup (4; +\infty)$.
- Giao $A \cap B$: Ta lấy phần chung giữa $[-1; 5]$ và $(-\infty; 0) \cup (4; +\infty) \implies A \cap B = [-1; 0) \cup (4; 5]$.
- Hiệu $A \setminus B$: Lấy phần thuộc $A$ nhưng loại bỏ các phần tử của $B$ (tức bỏ vùng $< 0$ và vùng $> 4$) $\implies A \setminus B = [0; 4]$.

---

### Bài tập 2 (Thử thách tối ưu hóa bài toán thực tế)
Tại một cuộc khảo sát dành cho 100 học sinh khối 10 về sở thích thể thao, kết quả thu được như sau:
- Có 55 bạn thích Bóng rổ.
- Có 48 bạn thích Bơi lội.
- Có 42 bạn thích Cầu lông.
- Có 22 bạn thích cả Bóng rổ và Bơi lội.
- Có 18 bạn thích cả Bơi lội và Cầu lông.
- Có 20 bạn thích cả Bóng rổ và Cầu lông.
- Có 10 bạn thích cả ba môn thể thao trên.

Hỏi:
1. Có bao nhiêu học sinh thích ít nhất một trong ba môn thể thao?
2. Có bao nhiêu học sinh không thích môn nào trong ba môn trên?
3. Có bao nhiêu học sinh chỉ thích duy nhất một môn thể thao?

*Hướng dẫn giải:*
1. Áp dụng công thức nguyên lý bao hàm - loại trừ cho 3 tập hợp:
   $$n(A \cup B \cup C) = n(A) + n(B) + n(C) - [n(A \cap B) + n(B \cap C) + n(C \cap A)] + n(A \cap B \cap C)$$
   Thay số:
   $$n(A \cup B \cup C) = 55 + 48 + 42 - (22 + 18 + 20) + 10 = 145 - 60 + 10 = 95 \text{ (học sinh)}$$
2. Số học sinh không thích môn nào:
   $$100 - 95 = 5 \text{ (học sinh)}$$
3. Để tìm số học sinh chỉ thích duy nhất một môn:
   - Chỉ thích Bóng rổ: $55 - (22 - 10) - (20 - 10) - 10 = 55 - 12 - 10 - 10 = 23$.
   - Chỉ thích Bơi lội: $48 - (22 - 10) - (18 - 10) - 10 = 48 - 12 - 8 - 10 = 18$.
   - Chỉ thích Cầu lông: $42 - (20 - 10) - (18 - 10) - 10 = 42 - 10 - 8 - 10 = 14$.
   Tổng số học sinh chỉ thích đúng một môn là: $23 + 18 + 14 = 55$ bạn.
