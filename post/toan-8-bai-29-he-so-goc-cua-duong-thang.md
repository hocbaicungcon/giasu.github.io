---
title: 'Toán 8 Bài 29: Hệ số góc của đường thẳng'
description: 'Làm chủ lý thuyết Hệ số góc của đường thẳng Toán 8 Bài 29: Góc tạo bởi đường thẳng và trục Ox, ý nghĩa hệ số a, vị trí tương đối song song, trùng nhau, cắt nhau và vuông góc kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Hệ số góc
  - Đường thẳng song song
  - Đường thẳng vuông góc
  - Vị trí tương đối
  - Kết nối tri thức
grade: 8
---

# Bài 29. Hệ số góc của đường thẳng

Khi các em đi qua những con đường đèo uốn lượn như đèo Mã Pí Lèng hay đèo Hải Vân, các biển báo giao thông thường ghi: *"Độ dốc $10\%$"* hoặc *"Độ dốc $12\%$"*. Trong xây dựng nhà cửa, các kiến trúc sư luôn tính toán độ dốc của mái ngói để nước mưa thoát nhanh nhất mà không làm tốc mái khi có giông bão.

Trong toán học, đại lượng đo lường độ dốc của một đường thẳng chính là **Hệ số góc (Slope)**. Hệ số $a$ trong phương trình đường thẳng $y = ax + b$ không chỉ quyết định hàm số đồng biến hay nghịch biến, mà còn quyết định góc nghiêng chính xác của đường thẳng đó so với mặt đất nằm ngang (trục hoành $Ox$).

Hơn thế nữa, mối quan hệ giữa các hệ số góc cho phép chúng ta kiểm tra nhanh hai đường thẳng song song, cắt nhau hay vuông góc với nhau mà không cần đặt thước vẽ hình. Đây là kiến thức bản lề dẫn thẳng tới khái niệm Đạo hàm — phát minh vĩ đại nhất của Isaac Newton khai sinh ra nền vật lý hiện đại!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 29: HỆ SỐ GÓC & VỊ TRÍ TƯƠNG ĐỐI</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Góc tạo bởi (d) và Ox</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là góc $\alpha$ tạo bởi tia $Ax$ (chiều dương trục hoành) và phần đường thẳng nằm trên trục $Ox$.<br>• Khi $a > 0$: $\alpha$ là <strong>góc nhọn</strong> ($a = \tan\alpha$).<br>• Khi $a < 0$: $\alpha$ là <strong>góc tù</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Hệ số góc a</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $a$ gọi là <strong>hệ số góc</strong> của đường thẳng $y = ax + b$.<br>• $a > 0$: $a$ càng lớn thì góc $\alpha$ càng lớn ($< 90^\circ$).<br>• $a < 0$: $a$ càng lớn thì góc $\alpha$ càng lớn ($< 180^\circ$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Song song & Trùng nhau</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">Cho $(d): y = ax + b$ và $(d'): y = a'x + b'$:<br>• <strong>Song song:</strong> $a = a'$ và $b \neq b'$.<br>• <strong>Trùng nhau:</strong> $a = a'$ và $b = b'$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Cắt nhau & Vuông góc</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Cắt nhau:</strong> $a \neq a'$.<br>• <strong>Cắt nhau tại trục tung $Oy$:</strong> $a \neq a'$ và $b = b'$.<br>• <strong>Vuông góc:</strong> $a \cdot a' = -1$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Xác định hệ số góc:** Hệ số góc của đường thẳng $y = -3x + 7$ là bao nhiêu?
2. **Nhận dạng góc:** Đường thẳng $y = 2x - 1$ tạo với chiều dương trục $Ox$ một góc nhọn hay góc tù? Vì sao?
3. **Độ dốc bằng nhau:** Hai đường thẳng $y = 4x + 1$ và $y = 4x - 5$ có vị trí tương đối như thế nào với nhau?
4. **Cắt nhau:** Đường thẳng $y = 2x + 3$ và đường thẳng $y = -x + 3$ cắt nhau tại điểm nào trên hệ trục tọa độ?
5. **Vuông góc:** Nếu một đường thẳng có hệ số góc $a = 2$, thì đường thẳng vuông góc với nó có hệ số góc bằng bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Hệ số góc là $a = -3$.
> 2. Góc nhọn, vì hệ số góc $a = 2 > 0$.
> 3. Hai đường thẳng song song với nhau vì cùng có $a = 4$ và tung độ gốc khác nhau ($1 \neq -5$).
> 4. Cắt nhau tại điểm $A(0; 3)$ trên trục tung $Oy$ (vì cùng có tung độ gốc $b = 3$).
> 5. Hệ số góc $a' = -\frac{1}{a} = -\frac{1}{2}$ (vì $a \cdot a' = -1$).

---

## I. Lý thuyết Trọng tâm

### 1. Góc tạo bởi đường thẳng $y = ax + b$ với trục $Ox$

Xét đường thẳng $(d): y = ax + b$ ($a \neq 0$). Gọi $A$ là giao điểm của $(d)$ với trục hoành $Ox$.
- Tia $Ax$ là tia thuộc trục $Ox$ hướng theo chiều dương (sang bên phải).
- Tia $AT$ là phần của đường thẳng $(d)$ nằm ở nửa mặt phẳng phía trên trục hoành.

> [!IMPORTANT]
> **ĐỊNH NGHĨA GÓC TẠO BỞI ĐƯỜNG THẲNG VÀ TRỤC Ox:**
> **Góc tạo bởi đường thẳng $y = ax + b$ và trục $Ox$** là góc $\alpha$ tạo bởi tia $Ax$ và tia $AT$.
>
> 1. Khi $a > 0$: Góc $\alpha$ là **góc nhọn** ($0^\circ < \alpha < 90^\circ$).
>    - Khi hệ số $a$ tăng lên thì góc $\alpha$ cũng tăng lên ($a = \tan\alpha$).
> 2. Khi $a < 0$: Góc $\alpha$ là **góc tù** ($90^\circ < \alpha < 180^\circ$).
>    - Khi hệ số $a$ tăng lên (tiến gần về $0$) thì góc $\alpha$ cũng tăng lên.

Vì có mối liên hệ mật thiết giữa hệ số $a$ và góc $\alpha$ nên $a$ được gọi là **hệ số góc** của đường thẳng $y = ax + b$.

---

### 2. Vị trí tương đối của hai đường thẳng

Cho hai đường thẳng:
$$(d): y = ax + b \quad (a \neq 0)$$
$$(d'): y = a'x + b' \quad (a' \neq 0)$$

> [!IMPORTANT]
> **ĐIỀU KIỆN VỊ TRÍ TƯƠNG ĐỐI:**
> 1. **Song song:** $(d) \parallel (d') \iff a = a' \quad\text{và}\quad b \neq b'$
> 2. **Trùng nhau:** $(d) \equiv (d') \iff a = a' \quad\text{và}\quad b = b'$
> 3. **Cắt nhau:** $(d) \text{ cắt } (d') \iff a \neq a'$
>    - *Đặc biệt:* Cắt nhau tại một điểm trên trục tung $Oy \iff a \neq a'$ và $b = b'$.
> 4. **Vuông góc:** $(d) \perp (d') \iff a \cdot a' = -1$

*Ví dụ minh họa:*
- $(d_1): y = 2x + 3$ và $(d_2): y = 2x - 1$ có $a = a' = 2$ và $3 \neq -1 \implies (d_1) \parallel (d_2)$.
- $(d_3): y = 3x + 4$ và $(d_4): y = -x + 4$ có $a \neq a'$ ($3 \neq -1$) và $b = b' = 4 \implies (d_3)$ cắt $(d_4)$ tại điểm $(0; 4)$ trên trục tung.
- $(d_5): y = 2x - 5$ và $(d_6): y = -\frac{1}{2}x + 1$ có $a \cdot a' = 2 \cdot \left(-\frac{1}{2}\right) = -1 \implies (d_5) \perp (d_6)$.

---

## Ứng dụng Tương tác Trực quan

Dưới đây là mô phỏng tương tác giúp các em quan sát góc tạo bởi đường thẳng với trục hoành và so sánh hai đường thẳng:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: HỆ SỐ GÓC & VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG THẲNG</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Đường thẳng $(d_1): y = ax + 1$ (màu đỏ) và $(d_2): y = a'x - 2$ (màu xanh). Chọn trường hợp để kiểm tra:
  </p>
  <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 16px;">
    <button onclick="setRelationCase(1)" id="btn-rel-1" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: white; cursor: pointer; font-weight: bold;">Hai đường thẳng Song song</button>
    <button onclick="setRelationCase(2)" id="btn-rel-2" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">Hai đường thẳng Cắt nhau</button>
    <button onclick="setRelationCase(3)" id="btn-rel-3" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">Hai đường thẳng Vuông góc</button>
  </div>
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg data-interactive-done="true" id="slope-svg" width="320" height="260" viewBox="-160 -130 320 260" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
      <!-- Trục Ox và Oy -->
      <line x1="-150" y1="0" x2="150" y2="0" stroke="#64748b" stroke-width="2" />
      <polygon points="150,0 142,-4 142,4" fill="#64748b" />
      <text x="140" y="-8" font-size="12" font-weight="bold" fill="#64748b">x</text>
      <line x1="0" y1="120" x2="0" y2="-120" stroke="#64748b" stroke-width="2" />
      <polygon points="0,-120 -4,-112 4,-112" fill="#64748b" />
      <text x="8" y="-110" font-size="12" font-weight="bold" fill="#64748b">y</text>
      <text x="-12" y="14" font-size="12" font-weight="bold" fill="#64748b">O</text>
      <!-- Đường thẳng d1 (đỏ) -->
      <line id="svg-line-1" x1="-140" y1="70" x2="140" y2="-70" stroke="#ef4444" stroke-width="2.5" />
      <!-- Đường thẳng d2 (xanh) -->
      <line id="svg-line-2" x1="-140" y1="130" x2="140" y2="-10" stroke="#2563eb" stroke-width="2.5" />
    </svg>
  </div>
  <div id="relation-desc-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; font-size: 1.0em; line-height: 1.8; text-align: center;">
    Đang tải tương quan...
  </div>
</div>

<script>
function setRelationCase(c) {
  var l1 = document.getElementById('svg-line-1');
  var l2 = document.getElementById('svg-line-2');
  var desc = document.getElementById('relation-desc-box');
  for (var i = 1; i <= 3; i++) {
    var b = document.getElementById('btn-rel-' + i);
    if (i === c) {
      b.style.background = '#2563eb';
      b.style.color = '#ffffff';
      b.style.borderColor = '#2563eb';
      b.style.fontWeight = 'bold';
    } else {
      b.style.background = '#f8fafc';
      b.style.color = '#334155';
      b.style.borderColor = '#cbd5e1';
      b.style.fontWeight = 'normal';
    }
  }
  var scale = 25;
  if (c === 1) {
    // Song song: a = 1, a' = 1; b = 1, b' = -2
    l1.setAttribute('x1', -140); l1.setAttribute('y1', -(-140/scale * 1 + 1) * scale);
    l1.setAttribute('x2', 140);  l1.setAttribute('y2', -(140/scale * 1 + 1) * scale);
    l2.setAttribute('x1', -140); l2.setAttribute('y1', -(-140/scale * 1 - 2) * scale);
    l2.setAttribute('x2', 140);  l2.setAttribute('y2', -(140/scale * 1 - 2) * scale);
    desc.innerHTML = '<span style="color:#15803d; font-weight:bold; font-size:1.15em;">HAI ĐƯỜNG THẲNG SONG SONG (a = a\', b ≠ b\')</span><br>' +
      '• (d₁): y = <strong>1x</strong> + 1 (màu đỏ) | (d₂): y = <strong>1x</strong> - 2 (màu xanh)<br>' +
      '• Vì hệ số góc a = a\' = 1, hai đường thẳng có cùng độ nghiêng với trục Ox (cùng tạo góc 45°). Do b ≠ b\' nên chúng không bao giờ cắt nhau!';
  } else if (c === 2) {
    // Cắt nhau: a = 1.5, a' = -0.5
    l1.setAttribute('x1', -80);  l1.setAttribute('y1', -(-80/scale * 1.5 + 1) * scale);
    l1.setAttribute('x2', 80);   l1.setAttribute('y2', -(80/scale * 1.5 + 1) * scale);
    l2.setAttribute('x1', -140); l2.setAttribute('y1', -(-140/scale * (-0.5) - 2) * scale);
    l2.setAttribute('x2', 140);  l2.setAttribute('y2', -(140/scale * (-0.5) - 2) * scale);
    desc.innerHTML = '<span style="color:#b91c1c; font-weight:bold; font-size:1.15em;">HAI ĐƯỜNG THẲNG CẮT NHAU (a ≠ a\')</span><br>' +
      '• (d₁): y = <strong>1.5x</strong> + 1 (dốc lên, góc nhọn) | (d₂): y = <strong>-0.5x</strong> - 2 (dốc xuống, góc tù)<br>' +
      '• Vì a ≠ a\' (1.5 ≠ -0.5), hai đường thẳng có độ dốc khác nhau nên chắc chắn cắt nhau tại đúng một điểm duy nhất!';
  } else if (c === 3) {
    // Vuông góc: a = 1, a' = -1 (a * a' = -1)
    l1.setAttribute('x1', -100); l1.setAttribute('y1', -(-100/scale * 1 + 1) * scale);
    l1.setAttribute('x2', 100);  l1.setAttribute('y2', -(100/scale * 1 + 1) * scale);
    l2.setAttribute('x1', -100); l2.setAttribute('y1', -(-100/scale * (-1) + 1) * scale);
    l2.setAttribute('x2', 100);  l2.setAttribute('y2', -(100/scale * (-1) + 1) * scale);
    desc.innerHTML = '<span style="color:#6d28d9; font-weight:bold; font-size:1.15em;">HAI ĐƯỜNG THẲNG VUÔNG GÓC (a · a\' = -1)</span><br>' +
      '• (d₁): y = <strong>1x</strong> + 1 | (d₂): y = <strong>-1x</strong> + 1<br>' +
      '• Tích hai hệ số góc: a · a\' = 1 · (-1) = <strong>-1</strong>. Hai đường thẳng cắt nhau tạo thành một góc vuông 90° ngay tại điểm (0; 1) trên trục Oy!';
  }
}
setTimeout(function() { setRelationCase(1); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Xác định hệ số góc và góc tạo bởi đường thẳng với trục Ox

**Phương pháp giải:**
1. Đưa phương trình đường thẳng về dạng chuẩn: $y = ax + b$. Hệ số đứng trước $x$ chính là hệ số góc $a$.
2. Nhận xét góc $\alpha$:
   - Nếu $a > 0 \implies \alpha$ là góc nhọn.
   - Nếu $a < 0 \implies \alpha$ là góc tù.
3. Khi cần tính số đo góc: dùng máy tính bấm $\tan\alpha = a$ (khi $a > 0$) hoặc $\tan(180^\circ - \alpha) = |a|$ (khi $a < 0$).

---

#### Bài toán 1:
a) Xác định hệ số góc của các đường thẳng sau:
$$(d_1): y = 3x - 5; \quad (d_2): y = 4 - 2x; \quad (d_3): 2x - 3y = 6$$
b) Cho biết góc tạo bởi mỗi đường thẳng trên với chiều dương của trục $Ox$ là góc nhọn hay góc tù?
c) Tính số đo góc tạo bởi đường thẳng $y = x + 3$ với trục $Ox$.

**Lời giải:**

a) Xác định hệ số góc:
- Đường thẳng $(d_1): y = 3x - 5$ có hệ số góc là $a = 3$.
- Đường thẳng $(d_2): y = -2x + 4$ có hệ số góc là $a = -2$.
- Đường thẳng $(d_3)$: Chuyển vế:
  $$2x - 3y = 6 \iff 3y = 2x - 6 \iff y = \frac{2}{3}x - 2$$
  Vậy hệ số góc của $(d_3)$ là $a = \frac{2}{3}$.

b) Xét tính chất góc:
- $(d_1)$ có $a = 3 > 0 \implies$ Góc tạo với trục $Ox$ là **góc nhọn**.
- $(d_2)$ có $a = -2 < 0 \implies$ Góc tạo với trục $Ox$ là **góc tù**.
- $(d_3)$ có $a = \frac{2}{3} > 0 \implies$ Góc tạo với trục $Ox$ là **góc nhọn**.

c) Đường thẳng $y = x + 3$ có $a = 1 > 0$.
Góc $\alpha$ thỏa mãn:
$$\tan\alpha = a = 1 \implies \alpha = 45^\circ$$
Vậy góc tạo bởi đường thẳng $y = x + 3$ với trục $Ox$ bằng $45^\circ$.

---

### Dạng 2: Xét vị trí tương đối và tìm tham số $m$

**Phương pháp giải:**
Cho $(d_1): y = a_1 x + b_1$ và $(d_2): y = a_2 x + b_2$ ($a_1, a_2 \neq 0$):
- Song song $\iff a_1 = a_2$ và $b_1 \neq b_2$.
- Cắt nhau $\iff a_1 \neq a_2$.
- Cắt nhau tại trục tung $\iff a_1 \neq a_2$ và $b_1 = b_2$.
- Trùng nhau $\iff a_1 = a_2$ và $b_1 = b_2$.
- Vuông góc $\iff a_1 \cdot a_2 = -1$.

---

#### Bài toán 2:
Cho hai hàm số bậc nhất:
$$(d_1): y = (m - 1)x + 2m \quad (m \neq 1)$$
$$(d_2): y = 2x + 4$$
Tìm giá trị của tham số $m$ để:
a) $(d_1)$ song song với $(d_2)$.
b) $(d_1)$ cắt $(d_2)$.
c) $(d_1)$ trùng với $(d_2)$.
d) $(d_1)$ vuông góc với $(d_2)$.

**Lời giải:**

Xác định các hệ số:
- $(d_1)$ có $a_1 = m - 1$, $b_1 = 2m$.
- $(d_2)$ có $a_2 = 2$, $b_2 = 4$.

a) Để $(d_1) \parallel (d_2)$, điều kiện là:
$$\begin{cases} a_1 = a_2 \\ b_1 \neq b_2 \end{cases} \iff \begin{cases} m - 1 = 2 \\ 2m \neq 4 \end{cases} \iff \begin{cases} m = 3 \\ m \neq 2 \end{cases} \implies m = 3\text{ (thỏa mãn } m \neq 1)$$
Vậy $m = 3$.

b) Để $(d_1)$ cắt $(d_2)$, điều kiện là:
$$a_1 \neq a_2 \iff m - 1 \neq 2 \iff m \neq 3$$
Kết hợp điều kiện hàm số bậc nhất: $m \neq 1$ và $m \neq 3$.

c) Để $(d_1) \equiv (d_2)$, điều kiện là:
$$\begin{cases} a_1 = a_2 \\ b_1 = b_2 \end{cases} \iff \begin{cases} m - 1 = 2 \\ 2m = 4 \end{cases} \iff \begin{cases} m = 3 \\ m = 2 \end{cases} \implies \text{Không tồn tại } m$$
Vậy không có giá trị nào của $m$ để hai đường thẳng trùng nhau.

d) Để $(d_1) \perp (d_2)$, điều kiện là:
$$a_1 \cdot a_2 = -1 \iff (m - 1) \cdot 2 = -1 \iff 2m - 2 = -1 \iff 2m = 1 \iff m = \frac{1}{2}\text{ (thỏa mãn } m \neq 1)$$
Vậy $m = \frac{1}{2}$.

---

### Dạng 3: Viết phương trình đường thẳng $y = ax + b$

**Phương pháp giải:**
1. Gọi phương trình đường thẳng cần tìm là $(d): y = ax + b$ ($a \neq 0$).
2. Dùng dữ kiện về hệ số góc (song song thì $a = a'$, vuông góc thì $a \cdot a' = -1$) để tìm $a$.
3. Dùng tọa độ điểm đường thẳng đi qua để lập phương trình tìm $b$.
4. Kiểm tra điều kiện (chú ý kiểm tra $b \neq b'$ khi song song).

---

#### Bài toán 3:
Viết phương trình đường thẳng $(d): y = ax + b$ trong mỗi trường hợp sau:
a) $(d)$ có hệ số góc bằng $3$ và đi qua điểm $A(-1; 2)$.
b) $(d)$ song song với đường thẳng $(d'): y = -2x + 5$ và đi qua điểm $B(2; -1)$.
c) $(d)$ đi qua điểm $C(1; 4)$ và vuông góc với đường thẳng $(d''): y = \frac{1}{2}x - 3$.

**Lời giải:**

a) Vì hệ số góc bằng $3$ nên $a = 3$. Phương trình $(d)$ có dạng: $y = 3x + b$.
Vì $(d)$ đi qua điểm $A(-1; 2)$, thay $x = -1, y = 2$ vào phương trình:
$$2 = 3(-1) + b \iff 2 = -3 + b \iff b = 5$$
Vậy phương trình đường thẳng là: $(d): y = 3x + 5$.

b) Vì $(d) \parallel (d'): y = -2x + 5$ nên:
$$a = -2 \quad\text{và}\quad b \neq 5$$
Phương trình $(d)$ có dạng: $y = -2x + b$.
Vì $(d)$ đi qua điểm $B(2; -1)$, thay $x = 2, y = -1$:
$$-1 = -2(2) + b \iff -1 = -4 + b \iff b = 3\text{ (thỏa mãn } b \neq 5)$$
Vậy phương trình đường thẳng là: $(d): y = -2x + 3$.

c) Vì $(d) \perp (d''): y = \frac{1}{2}x - 3$ nên:
$$a \cdot \frac{1}{2} = -1 \iff a = -2$$
Phương trình $(d)$ có dạng: $y = -2x + b$.
Vì $(d)$ đi qua điểm $C(1; 4)$, thay $x = 1, y = 4$:
$$4 = -2(1) + b \iff 4 = -2 + b \iff b = 6$$
Vậy phương trình đường thẳng là: $(d): y = -2x + 6$.

---

### Dạng 4: Bài toán thực tế về độ dốc công trình xây dựng

**Phương pháp giải:**
1. Độ dốc phần trăm: $i\% = \frac{h}{L} \cdot 100\%$ ($h$ là chiều cao nâng lên, $L$ là chiều dài nằm ngang).
2. Hệ số góc chính là tỉ số $a = \frac{h}{L} = \tan\alpha$.

---

#### Bài toán 4:
Theo tiêu chuẩn thiết kế cầu thang bộ trong nhà ở dân dụng:
- Chiều cao mỗi bậc thang là $h = 16\text{ cm}$.
- Chiều rộng mặt bậc thang là $b = 25\text{ cm}$.
a) Tính hệ số góc $a$ của đường dốc cầu thang bộ đó.
b) Đường dốc cầu thang tạo với mặt sàn nằm ngang một góc $\alpha$ xấp xỉ bằng bao nhiêu độ?
c) Nếu chiều cao từ sàn tầng 1 lên sàn tầng 2 là $3{,}2\text{ m}$ thì cầu thang đó cần bao nhiêu bậc và chiều dài hình chiếu nằm ngang của toàn bộ cầu thang là bao nhiêu mét?

**Lời giải:**

a) Hệ số góc của đường dốc cầu thang là tỉ số giữa chiều cao bậc và chiều rộng bậc:
$$a = \frac{h}{b} = \frac{16}{25} = 0{,}64$$

b) Góc nghiêng $\alpha$ thỏa mãn:
$$\tan\alpha = a = 0{,}64 \implies \alpha \approx 32{,}6^\circ$$
Vậy cầu thang tạo với mặt sàn một góc dốc khoảng $32{,}6^\circ$ (góc dốc tiêu chuẩn rất thoải mái khi đi lại).

c) Đổi $3{,}2\text{ m} = 320\text{ cm}$.
- Số bậc cầu thang cần xây dựng là:
  $$N = \frac{320}{16} = 20\text{ (bậc)}$$
- Chiều dài hình chiếu nằm ngang của toàn bộ cầu thang là:
  $$L = 20 \times 25\text{ cm} = 500\text{ cm} = 5\text{ m}$$

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Đạo hàm Newton và Hệ số góc Tiếp tuyến Đường cong

Năm 1666, Isaac Newton muốn tìm vận tốc tức thời của quả táo rơi. Ông phóng to đường cong quãng đường đến vô cùng nhỏ cho tới khi nó biến thành một đường thẳng:
$$f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} = k$$
Hệ số góc $k$ của tiếp tuyến đó chính là **Đạo hàm (Derivative)** — công cụ toán học vĩ đại nhất nhân loại, cho phép tính toán quỹ đạo phóng tàu Apollo 11 lên Mặt Trăng và thiết kế kính thiên văn vũ trụ!

---

### Chuyên đề 2: Tiêu chuẩn Độ dốc Đường sắt Cao tốc Shinkansen Nhật Bản

Trong thiết kế đường sắt cao tốc, tàu chạy với vận tốc trên $300\text{ km/h}$ có động năng khổng lồ:
- Độ dốc tối đa cho phép chỉ là $15‰$ (tức $1{,}5\%$, tương ứng hệ số góc $a = 0{,}015$).
- Nếu hệ số góc lớn hơn, lực ma sát giữa bánh thép và đường ray sẽ bị trượt, tàu không thể leo dốc an toàn.
Các kỹ sư Nhật Bản đã phải đào hàng trăm kilômét hầm xuyên qua dãy núi Alps để giữ hệ số góc của tuyến đường ray gần như bằng phẳng tuyệt đối!

---

### Chuyên đề 3: Gradient Descent trong Huấn luyện Trí tuệ Nhân tạo (ChatGPT, Gemini)

Khi huấn luyện các mô hình AI ngôn ngữ lớn với hàng ngàn tỷ tham số:
$$\theta_{\text{mới}} = \theta_{\text{cũ}} - \eta \cdot \frac{\partial L}{\partial \theta}$$
Đại lượng $\frac{\partial L}{\partial \theta}$ chính là hệ số góc (độ dốc) của hàm mất mát. Bằng cách bước từng bước ngược chiều hệ số góc, mô hình AI tự sửa lỗi và học cách trò chuyện, viết văn bản thông minh hệt như bộ não con người.

---

### Chuyên đề 4: Định luật Khúc xạ Ánh sáng Snell trong Sợi Cáp quang Internet

Khi một tia sáng truyền qua mặt phân cách giữa hai môi trường (thủy tinh và không khí):
$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$
Hệ số góc của tia sáng bị bẻ gãy đột ngột tại ranh giới. Bằng cách thiết kế lớp vỏ có chiết suất phù hợp, hệ số góc của tia sáng luôn tạo góc phản xạ toàn phần bên trong lõi cáp quang, truyền tải toàn bộ dữ liệu Internet xuyên đại dương với tốc độ ánh sáng!

---

### Chuyên đề 5: Bản đồ Địa hình Số (DEM) và Dự báo Sạt lở Đất trong GIS

Trong hệ thống thông tin địa lý (GIS), các nhà địa chất mô hình hóa bề mặt sườn núi thành các đa giác tọa độ $Oxy$:
- Bằng cách tính hệ số góc $a = \sqrt{a_x^2 + a_y^2}$ tại từng điểm, phần mềm tạo ra bản đồ nhiệt độ dốc sườn dốc.
- Những khu vực có hệ số góc $a > \tan(35^\circ) \approx 0{,}7$ có nguy cơ sạt lở đất nghiêm trọng khi có mưa bão lớn, giúp chính quyền kịp thời sơ tán người dân vùng cao an toàn.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hệ số góc của đường thẳng y = -5x + 3 là:",
  "options": [
    "-5",
    "3",
    "5",
    "-3"
  ],
  "answer": 0,
  "explanation": "Đường thẳng y = ax + b có hệ số góc là a. Ở đây a = -5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hai đường thẳng y = ax + 1 và y = 3x - 5 song song với nhau khi:",
  "options": [
    "a = 3",
    "a ≠ 3",
    "a = -3",
    "a = 1"
  ],
  "answer": 0,
  "explanation": "Hai đường thẳng song song khi có cùng hệ số góc: a = a\' = 3 (và b ≠ b\' vì 1 ≠ -5)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đường thẳng nào sau đây VUÔNG GÓC với đường thẳng y = 2x + 1?",
  "options": [
    "y = -1/2 x + 3",
    "y = 2x - 4",
    "y = -2x + 1",
    "y = 1/2 x - 1"
  ],
  "answer": 0,
  "explanation": "Hai đường thẳng vuông góc khi tích hệ số góc bằng -1: a · a\' = -1 <=> 2 · a\' = -1 <=> a\' = -1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Góc tạo bởi đường thẳng y = -x + 2 với chiều dương trục Ox là:",
  "options": [
    "Góc tù (lớn hơn 90°)",
    "Góc nhọn (bé hơn 90°)",
    "Góc vuông (90°)",
    "Góc bẹt (180°)"
  ],
  "answer": 0,
  "explanation": "Vì hệ số góc a = -1 < 0 nên góc tạo với chiều dương trục Ox là góc tù (cụ thể là 135°)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Hai đường thẳng y = 2x + 3 và y = -x + 3 có vị trí tương đối là:",
  "options": [
    "Cắt nhau tại một điểm trên trục tung Oy",
    "Song song với nhau",
    "Trùng nhau",
    "Vuông góc với nhau"
  ],
  "answer": 0,
  "explanation": "Vì a ≠ a\' (2 ≠ -1) và b = b\' = 3 nên hai đường thẳng cắt nhau tại điểm (0; 3) trên trục tung Oy."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đường thẳng y = ax + b đi qua điểm A(0; 4) và có hệ số góc bằng -2 là:",
  "options": [
    "y = -2x + 4",
    "y = 4x - 2",
    "y = -2x - 4",
    "y = 2x + 4"
  ],
  "answer": 0,
  "explanation": "Hệ số góc a = -2. Đi qua A(0; 4) => b = 4. Phương trình: y = -2x + 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Tìm m để đường thẳng y = (m - 2)x + 1 song song với đường thẳng y = 3x - 2:",
  "options": [
    "m = 5",
    "m = -1",
    "m = 3",
    "m ≠ 5"
  ],
  "answer": 0,
  "explanation": "Để hai đường thẳng song song: m - 2 = 3 <=> m = 5 (và 1 ≠ -2 thỏa mãn)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Đường thẳng y = x - 3 tạo với chiều dương trục Ox một góc bằng:",
  "options": [
    "45°",
    "30°",
    "60°",
    "135°"
  ],
  "answer": 0,
  "explanation": "Hệ số góc a = 1 > 0 => tan(α) = 1 => α = 45°."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho (d1): y = 3x - 1 và (d2): y = mx + 2. Tìm m để (d1) và (d2) cắt nhau:",
  "options": [
    "m ≠ 3 và m ≠ 0",
    "m = 3",
    "m = -3",
    "Mọi giá trị của m"
  ],
  "answer": 0,
  "explanation": "Để (d1) cắt (d2) thì a ≠ a\' <=> m ≠ 3 và kết hợp điều kiện hàm số bậc nhất m ≠ 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Tích hai hệ số góc của hai đường thẳng vuông góc với nhau luôn bằng:",
  "options": [
    "-1",
    "1",
    "0",
    "Không xác định"
  ],
  "answer": 0,
  "explanation": "Định lí: Hai đường thẳng y = ax + b và y = a\'x + b\' vuông góc với nhau khi và chỉ khi a · a\' = -1."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Cho hai hàm số bậc nhất:
$$(d_1): y = (2m - 3)x + 1 \quad (m \neq 1{,}5)$$
$$(d_2): y = (m + 1)x - 3 \quad (m \neq -1)$$
Tìm giá trị của $m$ để:
a) $(d_1) \parallel (d_2)$.
b) $(d_1)$ cắt $(d_2)$.
c) $(d_1) \perp (d_2)$.

### Bài tập 2:
Viết phương trình đường thẳng $(d): y = ax + b$ biết:
a) $(d)$ song song với đường thẳng $y = -3x + 1$ và cắt trục hoành tại điểm có hoành độ bằng $2$.
b) $(d)$ vuông góc với đường thẳng $y = 2x - 3$ và đi qua điểm $M(4; 1)$.
c) $(d)$ đi qua điểm $A(1; 3)$ và điểm $B(-2; -3)$.

### Bài tập 3:
Cho đường thẳng $(d): y = (m - 2)x + m + 1$ ($m \neq 2$).
a) Tìm $m$ để $(d)$ tạo với trục $Ox$ một góc nhọn; một góc tù.
b) Chứng minh rằng khi $m$ thay đổi, đường thẳng $(d)$ luôn đi qua một điểm cố định. Tìm tọa độ điểm cố định đó.

### Bài tập 4 (Toán thực tế):
Một đoạn đường dốc lên cầu vượt có chiều dài nằm ngang là $150\text{ m}$ và độ cao của cầu là $7{,}5\text{ m}$.
a) Tính hệ số góc $a$ của đoạn đường dốc đó.
b) Tính góc dốc của mặt cầu vượt so với mặt đường nằm ngang.
c) Người ta muốn giảm độ dốc của cầu vượt xuống còn hệ số góc $a' = 0{,}03$ mà vẫn giữ nguyên chiều cao $7{,}5\text{ m}$. Hỏi chiều dài nằm ngang của đoạn đường dốc mới phải là bao nhiêu mét?
