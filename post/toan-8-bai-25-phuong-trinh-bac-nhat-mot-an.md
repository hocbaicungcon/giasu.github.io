---
title: 'Toán 8 Bài 25: Phương trình bậc nhất một ẩn'
description: 'Làm chủ lý thuyết Phương trình bậc nhất một ẩn Toán 8 Bài 25: Định nghĩa phương trình, nghiệm và tập nghiệm, hai quy tắc biến đổi chuyển vế và nhân chia, kỹ thuật giải phương trình đưa về ax + b = 0 kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Phương trình bậc nhất
  - Quy tắc chuyển vế
  - Giải phương trình
  - Kết nối tri thức
grade: 8
---

# Bài 25. Phương trình bậc nhất một ẩn

Trong lịch sử văn minh nhân loại, sự ra đời của **Phương trình (Equation)** đánh dấu bước chuyển mình vĩ đại của tư duy toán học: từ chỗ chỉ biết làm các phép tính thuận số học, con người đã biết đặt ẩn số đại diện cho đại lượng chưa biết và thiết lập sự cân bằng giữa các vế để tìm ra sự thật.

Phương trình đơn giản và căn bản nhất chính là **Phương trình bậc nhất một ẩn** có dạng $ax + b = 0$. Dù cấu trúc giản dị, phương trình này là chìa khóa mở ra mọi phương pháp giải quyết vấn đề trong vật lý (tính thời gian gặp nhau của hai vật chuyển động), hóa học (tìm lượng chất tham gia phản ứng), kinh tế học (điểm hòa vốn kinh doanh) và lập trình máy tính.

Bài học mở đầu Chương 7 sẽ giúp các em hiểu sâu sắc bản chất cán cân thăng bằng của phương trình, làm chủ hai quy tắc biến đổi tương đương thần thánh: **quy tắc chuyển vế** và **quy tắc nhân chia**, từ đó giải quyết chính xác mọi bài toán phương trình tuyến tính!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 25: PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Khái niệm Phương trình</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Có dạng $A(x) = B(x)$ với $x$ là ẩn số.<br>• Nghiệm: Giá trị $x_0$ làm cho hai vế bằng nhau: $A(x_0) = B(x_0)$.<br>• Tập hợp tất cả các nghiệm ký hiệu là $S$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Phương trình Bậc nhất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Dạng chuẩn: $ax + b = 0$ ($a \neq 0$).<br>• $a$ là hệ số của ẩn $x$, $b$ là hệ số tự do.<br>• Luôn có đúng một nghiệm duy nhất: $x = -\frac{b}{a}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hai Quy tắc Biến đổi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Quy tắc chuyển vế:</strong> Đổi vế thì phải đổi dấu ($+ \to -$, $- \to +$).<br>• <strong>Quy tắc nhân chia:</strong> Nhân hoặc chia cả hai vế với cùng một số khác 0.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Quy trình Giải</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bước 1: Bỏ dấu ngoặc (nếu có).<br>• Bước 2: Quy đồng khử mẫu số học (nếu có).<br>• Bước 3: Chuyển các hạng tử chứa $x$ về vế trái, hằng số về vế phải: $ax = -b$.<br>• Bước 4: Kết luận nghiệm $S = \{-\frac{b}{a}\}$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Tìm ẩn số:** Trong đẳng thức $3x = 12$, ẩn số $x$ bằng bao nhiêu?
2. **Quy tắc chuyển vế:** Khi chuyển số $+5$ từ vế trái sang vế phải của dấu bằng "$=$", số đó chuyển thành số nào?
3. **Thử nghiệm:** Số $x = 2$ có phải là nghiệm của phương trình $2x - 4 = 0$ không? Vì sao?
4. **Nhận dạng bậc:** Phương trình $x^2 - 4 = 0$ có phải là phương trình bậc nhất một ẩn không? Vì sao?
5. **Chia hai vế:** Để tìm $x$ từ đẳng thức $-2x = 8$, em sẽ chia cả hai vế cho số nào và kết quả $x$ bằng bao nhiêu?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $x = 12 : 3 = 4$.
> 2. Đổi dấu thành $-5$.
> 3. Có, vì khi thay $x = 2$ thì $2(2) - 4 = 4 - 4 = 0$ (hai vế bằng nhau).
> 4. Không, vì bậc của ẩn $x$ là bậc 2 (không phải bậc 1).
> 5. Chia cả hai vế cho $-2$, được $x = 8 : (-2) = -4$.

---

## I. Lý thuyết Trọng tâm

### 1. Khái niệm Phương trình một ẩn

Một phương trình với ẩn $x$ có dạng:
$$A(x) = B(x)$$
- $A(x)$ gọi là **vế trái** (VT).
- $B(x)$ gọi là **vế phải** (VP).

*Ví dụ:* $3x + 1 = x - 5$ là một phương trình với ẩn số là $x$. Vế trái là đa thức $3x + 1$, vế phải là đa thức $x - 5$.

#### Nghiệm của phương trình:
- Giá trị $x_0$ thỏa mãn $A(x_0) = B(x_0)$ được gọi là một **nghiệm** của phương trình.
- Tập hợp tất cả các nghiệm của phương trình gọi là **tập nghiệm** của phương trình đó, thường ký hiệu là $S$.
- Khi một phương trình không có nghiệm nào, ta nói phương trình **vô nghiệm** và viết tập nghiệm $S = \emptyset$.
- Giải phương trình là tìm tất cả các nghiệm (tìm tập nghiệm) của phương trình đó.

---

### 2. Phương trình bậc nhất một ẩn

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Phương trình có dạng:
> $$ax + b = 0$$
> trong đó $a$ và $b$ là hai số đã cho và $a \neq 0$, được gọi là **phương trình bậc nhất một ẩn** $x$.

*Ví dụ:*
- $2x - 6 = 0$ (bậc nhất với $a = 2$, $b = -6$).
- $-\frac{3}{4}x + 9 = 0$ (bậc nhất với $a = -\frac{3}{4}$, $b = 9$).
- $5x = 0$ (bậc nhất với $a = 5$, $b = 0$).
- $0x + 7 = 0$ **không phải** là phương trình bậc nhất vì hệ số $a = 0$.
- $x^2 - 1 = 0$ **không phải** là phương trình bậc nhất vì chứa $x^2$ (bậc 2).

---

### 3. Hai quy tắc biến đổi phương trình

Để giải phương trình, ta biến đổi phương trình đã cho thành những phương trình tương đương đơn giản hơn nhờ hai quy tắc sau:

> [!IMPORTANT]
> **1. QUY TẮC CHUYỂN VẾ:**
> Trong một phương trình, ta có thể chuyển một hạng tử từ vế này sang vế kia của phương trình, đồng thời **phải đổi dấu** hạng tử đó:
> - Dấu cộng ($+$) đổi thành dấu trừ ($-$).
> - Dấu trừ ($-$) đổi thành dấu cộng ($+$).

*Ví dụ:*
$$x + 7 = 12 \iff x = 12 - 7 \iff x = 5$$
$$3x - 8 = x \iff 3x - x = 8 \iff 2x = 8$$

> [!IMPORTANT]
> **2. QUY TẮC NHÂN VỚI MỘT SỐ:**
> Trong một phương trình, ta có thể:
> - Nhân cả hai vế với cùng một số khác $0$.
> - Hoặc chia cả hai vế cho cùng một số khác $0$.

*Ví dụ:*
$$\frac{1}{3}x = 4 \iff x = 4 \cdot 3 \iff x = 12 \quad\text{(nhân hai vế với 3)}$$
$$-5x = 15 \iff x = 15 : (-5) \iff x = -3 \quad\text{(chia hai vế cho -5)}$$

---

### 4. Cách giải tổng quát phương trình $ax + b = 0$ ($a \neq 0$)

Áp dụng hai quy tắc biến đổi trên:
$$ax + b = 0 \iff ax = -b \iff x = -\frac{b}{a}$$

> [!NOTE]
> **KẾT LUẬN TỔNG QUÁT:**
> Phương trình bậc nhất một ẩn $ax + b = 0$ ($a \neq 0$) luôn có **duy nhất một nghiệm**:
> $$x = -\frac{b}{a}$$
> Tập nghiệm: $S = \left\{ -\frac{b}{a} \right\}$.

---

## Ứng dụng Tương tác Trực quan

Dưới đây là mô phỏng cán cân đại số, giúp các em quan sát trực quan việc chuyển vế và chia hai vế để tìm nghiệm của phương trình $ax + b = c$:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: CÁN CÂN ĐẠI SỐ GIẢI PHƯƠNG TRÌNH</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Xét phương trình: <span style="font-family:monospace; font-weight:bold; color:#2563eb; font-size:1.1em;">2x + 6 = 14</span>. Hãy nhấn từng bước để cân bằng hai đĩa cân!
  </p>
  <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
    <button onclick="setBalanceStep(1)" id="bal-btn-1" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: white; cursor: pointer; font-weight: bold;">Trạng thái ban đầu</button>
    <button onclick="setBalanceStep(2)" id="bal-btn-2" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">Bước 1: Bớt 6 ở cả hai vế (Chuyển vế)</button>
    <button onclick="setBalanceStep(3)" id="bal-btn-3" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #334155; cursor: pointer;">Bước 2: Chia đôi hai vế</button>
  </div>
  <div id="balance-display-box" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 18px; border: 1px dashed #cbd5e1; line-height: 1.8; font-size: 1.05em; text-align: center;">
    Đang tải mô phỏng...
  </div>
</div>

<script>
function setBalanceStep(step) {
  var box = document.getElementById('balance-display-box');
  for (var i = 1; i <= 3; i++) {
    var b = document.getElementById('bal-btn-' + i);
    if (i === step) {
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
  if (step === 1) {
    box.innerHTML = '<span style="font-size:1.2em; font-weight:bold; color:#1e293b;">⚖️ ĐĨA TRÁI: [ 2x + 6 ]  ==== CÂN BẰNG ====  ĐĨA PHẢI: [ 14 ]</span><br><br>' +
      '• Đĩa bên trái đang chứa 2 gói bí ẩn x và 6 quả cân 1kg.<br>' +
      '• Đĩa bên phải chứa 14 quả cân 1kg.<br>' +
      '• Cán cân hoàn toàn thăng bằng: 2x + 6 = 14.';
  } else if (step === 2) {
    box.innerHTML = '<span style="font-size:1.2em; font-weight:bold; color:#b91c1c;">⚖️ BỚT 6 QUẢ CÂN Ở CẢ HAI ĐĨA (QUY TẮC CHUYỂN VẾ):</span><br><br>' +
      '• Đĩa trái: (2x + 6) - 6 = <strong>2x</strong><br>' +
      '• Đĩa phải: 14 - 6 = <strong>8</strong><br>' +
      '⇒ Cán cân vẫn thăng bằng: <span style="color:#2563eb; font-weight:bold; font-size:1.15em;">2x = 8</span>';
  } else if (step === 3) {
    box.innerHTML = '<span style="font-size:1.2em; font-weight:bold; color:#15803d;">⚖️ CHIA ĐÔI SỐ LƯỢNG Ở CẢ HAI ĐĨA (QUY TẮC CHIA):</span><br><br>' +
      '• Đĩa trái: 2x : 2 = <strong>x</strong> (còn lại 1 gói bí ẩn)<br>' +
      '• Đĩa phải: 8 : 2 = <strong>4</strong> (còn lại 4 quả cân)<br>' +
      '⇒ Kết quả cuối cùng: <span style="color:#15803d; font-weight:bold; font-size:1.3em;">x = 4</span>.<br>' +
      'Vậy nghiệm duy nhất của phương trình là S = {4}.';
  }
}
setTimeout(function() { setBalanceStep(1); }, 300);
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Nhận diện phương trình bậc nhất một ẩn và kiểm tra nghiệm

**Phương pháp giải:**
1. Phương trình bậc nhất một ẩn phải thỏa mãn: ẩn số có bậc cao nhất là 1, hệ số của ẩn $a \neq 0$.
2. Muốn kiểm tra $x = x_0$ có phải là nghiệm hay không: thay $x = x_0$ vào hai vế. Nếu $\text{VT} = \text{VP}$ thì $x_0$ là nghiệm.

---

#### Bài toán 1:
a) Trong các phương trình sau, phương trình nào là phương trình bậc nhất một ẩn? Hãy chỉ rõ hệ số $a$ và $b$:
$$3x - 9 = 0; \quad 0x + 5 = 0; \quad 2x^2 - 8 = 0; \quad -\frac{1}{2}y + 4 = 0; \quad \frac{3}{x} - 1 = 0$$
b) Cho phương trình $2(x - 3) = 3x - 8$. Trong các số $\{-2; 0; 2\}$, số nào là nghiệm của phương trình?

**Lời giải:**

a) Nhận diện phương trình bậc nhất:
- $3x - 9 = 0$: Là phương trình bậc nhất một ẩn $x$ với $a = 3$, $b = -9$.
- $0x + 5 = 0$: **Không phải**, vì hệ số của ẩn bằng $0$.
- $2x^2 - 8 = 0$: **Không phải**, vì ẩn $x$ có bậc 2.
- $-\frac{1}{2}y + 4 = 0$: Là phương trình bậc nhất một ẩn $y$ với $a = -\frac{1}{2}$, $b = 4$.
- $\frac{3}{x} - 1 = 0$: **Không phải**, vì chứa ẩn ở mẫu số (phương trình phân thức).

b) Kiểm tra nghiệm:
- Với $x = -2$:
  $$\text{VT} = 2(-2 - 3) = 2(-5) = -10$$
  $$\text{VP} = 3(-2) - 8 = -6 - 8 = -14$$
  Vì $\text{VT} \neq \text{VP}$ ($-10 \neq -14$), nên $x = -2$ không phải là nghiệm.
- With $x = 0$:
  $$\text{VT} = 2(0 - 3) = -6$$
  $$\text{VP} = 3(0) - 8 = -8$$
  Vì $-6 \neq -8$, nên $x = 0$ không phải là nghiệm.
- With $x = 2$:
  $$\text{VT} = 2(2 - 3) = 2(-1) = -2$$
  $$\text{VP} = 3(2) - 8 = 6 - 8 = -2$$
  Vì $\text{VT} = \text{VP} = -2$, nên $x = 2$ là nghiệm của phương trình.

---

### Dạng 2: Giải phương trình bậc nhất một ẩn cơ bản

**Phương pháp giải:**
1. Chuyển hạng tử tự do sang vế phải và đổi dấu: $ax = -b$.
2. Chia cả hai vế cho hệ số $a$: $x = -\frac{b}{a}$.
3. Kết luận tập nghiệm $S$.

---

#### Bài toán 2:
Giải các phương trình sau:
a) $4x - 20 = 0$
b) $5 - 2x = 11$
c) $3x + 7 = x - 5$
d) $\frac{2}{3}x - 4 = -\frac{1}{2}x + 3$

**Lời giải:**

a) Chuyển vế:
$$4x - 20 = 0 \iff 4x = 20 \iff x = \frac{20}{4} \iff x = 5$$
Vậy tập nghiệm của phương trình là $S = \{5\}$.

b) Chuyển vế:
$$5 - 2x = 11 \iff -2x = 11 - 5 \iff -2x = 6 \iff x = \frac{6}{-2} \iff x = -3$$
Vậy tập nghiệm của phương trình là $S = \{-3\}$.

c) Chuyển các hạng tử chứa $x$ sang vế trái, hằng số sang vế phải:
$$3x + 7 = x - 5 \iff 3x - x = -5 - 7 \iff 2x = -12 \iff x = -6$$
Vậy tập nghiệm của phương trình là $S = \{-6\}$.

d) Chuyển vế:
$$\frac{2}{3}x + \frac{1}{2}x = 3 + 4 \iff \left(\frac{2}{3} + \frac{1}{2}\right)x = 7 \iff \frac{7}{6}x = 7 \iff x = 7 : \frac{7}{6} = 6$$
Vậy tập nghiệm của phương trình là $S = \{6\}$.

---

### Dạng 3: Phương trình đưa được về dạng $ax + b = 0$ (Chứa ngoặc và mẫu số)

**Phương pháp giải:**
1. **Bước 1 (Bỏ ngoặc):** Dùng quy tắc nhân đơn thức với đa thức, chú ý đổi dấu nếu trước ngoặc có dấu trừ.
2. **Bước 2 (Quy đồng và khử mẫu):** Nếu phương trình chứa mẫu số là các hằng số, tìm BCNN của các mẫu số rồi nhân cả hai vế với BCNN đó để khử mẫu.
3. **Bước 3 (Thu gọn):** Chuyển các hạng tử chứa ẩn sang vế trái, hằng số sang vế phải: $ax = c$.
4. **Bước 4 (Tìm nghiệm):** Nếu $a \neq 0 \implies x = \frac{c}{a}$.

---

#### Bài toán 3:
Giải các phương trình sau:
a) $3(2x - 1) - 2(x + 5) = 3$
b) $\frac{x - 3}{4} + \frac{2x - 1}{3} = \frac{x + 5}{6}$

**Lời giải:**

a) Khai triển phá dấu ngoặc:
$$3(2x - 1) - 2(x + 5) = 3 \iff 6x - 3 - 2x - 10 = 3$$
Thu gọn vế trái:
$$(6x - 2x) + (-3 - 10) = 3 \iff 4x - 13 = 3$$
Chuyển vế:
$$4x = 3 + 13 \iff 4x = 16 \iff x = 4$$
Vậy tập nghiệm là $S = \{4\}$.

b) Các mẫu số là $4, 3, 6$. Ta có $\text{BCNN}(4, 3, 6) = 12$.
Nhân cả hai vế của phương trình với $12$ để khử mẫu:
$$12 \cdot \left( \frac{x - 3}{4} + \frac{2x - 1}{3} \right) = 12 \cdot \frac{x + 5}{6}$$
$$3(x - 3) + 4(2x - 1) = 2(x + 5)$$
Khai triển phá ngoặc:
$$3x - 9 + 8x - 4 = 2x + 10$$
Thu gọn hai vế:
$$11x - 13 = 2x + 10$$
Chuyển vế:
$$11x - 2x = 10 + 13 \iff 9x = 23 \iff x = \frac{23}{9}$$
Vậy tập nghiệm là $S = \left\{ \frac{23}{9} \right\}$.

---

### Dạng 4: Biện luận số nghiệm của phương trình chứa tham số $m$

Phương trình dạng $ax = b$:
- Nếu $a \neq 0$: Phương trình có **nghiệm duy nhất** $x = \frac{b}{a}$.
- Nếu $a = 0$ và $b \neq 0$: Phương trình trở thành $0x = b \implies$ Phương trình **vô nghiệm**.
- Nếu $a = 0$ và $b = 0$: Phương trình trở thành $0x = 0 \implies$ Phương trình **vô số nghiệm** (nghiệm đúng với mọi $x \in \mathbb{R}$).

---

#### Bài toán 4:
Tìm giá trị của tham số $m$ để phương trình sau:
$$(m - 2)x + 3m - 6 = 0$$
a) Có nghiệm duy nhất.
b) Vô số nghiệm.
c) Tìm $m$ để phương trình có nghiệm $x = 3$.

**Lời giải:**

Phương trình viết lại dưới dạng:
$$(m - 2)x = 6 - 3m$$

a) Phương trình có nghiệm duy nhất khi và chỉ khi hệ số của $x$ khác $0$:
$$m - 2 \neq 0 \iff m \neq 2$$
Khi đó nghiệm duy nhất là $x = \frac{6 - 3m}{m - 2} = \frac{-3(m - 2)}{m - 2} = -3$.

b) Phương trình vô số nghiệm khi và chỉ khi:
$$m - 2 = 0 \quad\text{và}\quad 6 - 3m = 0 \iff m = 2$$
Khi $m = 2$, phương trình trở thành $0x = 0$, nghiệm đúng với mọi số thực $x$.

c) Thay $x = 3$ vào phương trình ban đầu:
$$(m - 2) \cdot 3 + 3m - 6 = 0 \iff 3m - 6 + 3m - 6 = 0 \iff 6m - 12 = 0 \iff 6m = 12 \iff m = 2$$
Nhưng khi $m = 2$, phương trình có vô số nghiệm (chứa cả $x = 3$), vậy $m = 2$ thỏa mãn yêu cầu đề bài.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Tác phẩm Al-Jabr của Al-Khwarizmi (Thế kỷ IX)

Thuật ngữ "Đại số" trong tiếng Anh (*Algebra*) bắt nguồn từ tên cuốn sách toán học kinh điển *Al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wal-muqābala* được viết vào năm 820 bởi nhà toán học Ba Tư Muhammad ibn Musa al-Khwarizmi.
- **Al-Jabr (Phục hồi/Chuyển vế):** Thao tác chuyển một số âm từ vế này sang vế kia thành số dương.
- **Al-Muqabala (Cân bằng/Thu gọn):** Thao tác triệt tiêu các đại lượng giống nhau ở hai vế của phương trình.
Nhờ hệ thống hóa phương trình bậc nhất một ẩn, Al-Khwarizmi đã đặt nền móng cho nền toán học hiện đại suốt hơn một thiên niên kỷ qua!

---

### Chuyên đề 2: Cân bằng Phương trình Phản ứng Hóa học bằng Phương pháp Đại số

Trong hóa học vô cơ, để cân bằng phản ứng đốt cháy quặng pirit sắt:
$$x \cdot \text{FeS}_2 + y \cdot \text{O}_2 \to z \cdot \text{Fe}_2\text{O}_3 + t \cdot \text{SO}_2$$
Các nhà hóa học lập phương trình bảo toàn nguyên tố:
- Bảo toàn Fe: $x = 2z$
- Bảo toàn S: $2x = t$
- Bảo toàn O: $2y = 3z + 2t$
Chọn $z = 1 \implies x = 2 \implies t = 4 \implies 2y = 3(1) + 2(4) = 11 \implies y = \frac{11}{2}$.
Nhân đôi cả hệ số: $(4, 11, 2, 8)$. Đây chính là việc giải hệ phương trình bậc nhất để tìm tỉ lệ phản ứng chính xác nhất mà không cần đoán mò!

---

### Chuyên đề 3: Điểm Cân bằng Cung — Cầu (Market Equilibrium) trong Kinh tế

Trong kinh tế học vĩ mô:
- Hàm cung của thị trường: $P = 2Q + 10$ ($P$ là giá, $Q$ là lượng hàng hóa).
- Hàm cầu của thị trường: $P = -3Q + 60$.
Tại điểm cân bằng thị trường, lượng cung bằng lượng cầu:
$$2Q + 10 = -3Q + 60 \iff 5Q = 50 \iff Q = 10\text{ (sản phẩm)}$$
Thay $Q = 10 \implies P = 30\text{ (USD)}$. Phương trình bậc nhất một ẩn giúp các ngân hàng trung ương và sàn giao dịch chứng khoán xác định mức giá thanh toán thị trường tự động trong một phần nghìn giây.

---

### Chuyên đề 4: Điểm Dừng Vòng lặp và Thuật toán Tìm kiếm Nhị phân (Binary Search)

Trong khoa học máy tính, thuật toán tìm kiếm nhị phân chia đôi danh sách dữ liệu sau mỗi bước lặp. Số phần tử còn lại sau $k$ bước tuân theo phương trình:
$$\frac{N}{2^k} = 1 \iff 2^k = N \iff k = \log_2 N$$
Bằng cách chuyển đổi các điều kiện dừng của vòng lặp thành các phương trình bậc nhất theo chỉ số mảng $i$: $\text{mid} = \frac{\text{left} + \text{right}}{2}$, máy tính tìm kiếm được một từ vựng trong cơ sở dữ liệu $1$ tỷ từ chỉ sau tối đa $30$ phép so sánh!

---

### Chuyên đề 5: Định luật I Newton và Cân bằng Lực trong Kỹ thuật Xây dựng Cầu treo

Trong thiết kế kết cấu cầu dây văng (như cầu Nhật Tân hay cầu Mỹ Thuận), để nhịp cầu đứng yên an toàn dưới tải trọng gió bão, tổng các lực tác dụng lên dầm cầu theo phương thẳng đứng phải triệt tiêu hoàn toàn:
$$\sum F_y = 0 \iff 2 \cdot T \cdot \sin(\theta) - P_{\text{cầu}} = 0$$
Phương trình bậc nhất này cho phép các kỹ sư tính toán chính xác lực căng $T = \frac{P_{\text{cầu}}}{2\sin\theta}$ của từng sợi cáp thép chịu lực, ngăn ngừa thảm họa sập cầu và bảo vệ tính mạng của hàng triệu người tham gia giao thông mỗi ngày.

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Phương trình nào sau đây là phương trình bậc nhất một ẩn?",
  "options": [
    "2x - 5 = 0",
    "x^2 - 4 = 0",
    "0x + 3 = 0",
    "1/x + 2 = 0"
  ],
  "answer": 0,
  "explanation": "Phương trình bậc nhất một ẩn có dạng ax + b = 0 với a ≠ 0. Ở đây 2x - 5 = 0 có a = 2 ≠ 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Nghiệm của phương trình 3x - 12 = 0 là:",
  "options": [
    "x = 4",
    "x = -4",
    "x = 36",
    "x = 9"
  ],
  "answer": 0,
  "explanation": "3x = 12 ⇔ x = 12 / 3 = 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Quy tắc chuyển vế khẳng định rằng:",
  "options": [
    "Chuyển một hạng tử sang vế kia thì giữ nguyên dấu",
    "Chuyển một hạng tử sang vế kia thì phải đổi dấu hạng tử đó",
    "Chuyển một hạng tử sang vế kia thì nhân thêm với -1 cả hai vế",
    "Chuyển một hạng tử sang vế kia thì đổi dấu cả hai vế"
  ],
  "answer": 1,
  "explanation": "Khi chuyển một hạng tử từ vế này sang vế kia của phương trình, ta phải đổi dấu hạng tử đó (+ đổi thành -, - đổi thành +)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Nghiệm của phương trình 5 - 2x = 1 là:",
  "options": [
    "x = 2",
    "x = -2",
    "x = 3",
    "x = -3"
  ],
  "answer": 0,
  "explanation": "-2x = 1 - 5 ⇔ -2x = -4 ⇔ x = -4 / (-2) = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Số x = -1 là nghiệm của phương trình nào sau đây?",
  "options": [
    "2x + 2 = 0",
    "2x - 2 = 0",
    "x + 3 = 1",
    "3x - 1 = 2"
  ],
  "answer": 0,
  "explanation": "Thay x = -1 vào phương trình 2x + 2 = 0 ta có: 2(-1) + 2 = -2 + 2 = 0 (thỏa mãn)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Phương trình 2(x - 1) = 2x - 2 có tập nghiệm là:",
  "options": [
    "S = R (Vô số nghiệm)",
    "S = ∅ (Vô nghiệm)",
    "S = {1}",
    "S = {0}"
  ],
  "answer": 0,
  "explanation": "2x - 2 = 2x - 2 ⇔ 0x = 0. Phương trình nghiệm đúng với mọi số thực x ∈ R."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Phương trình 0x = 5 có tập nghiệm là:",
  "options": [
    "S = ∅ (Vô nghiệm)",
    "S = R",
    "S = {5}",
    "S = {0}"
  ],
  "answer": 0,
  "explanation": "Không có số thực nào nhân với 0 bằng 5, do đó phương trình vô nghiệm S = ∅."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Giải phương trình (x - 1) / 2 = (x + 1) / 3 ta được nghiệm x bằng:",
  "options": [
    "x = 5",
    "x = -5",
    "x = 1",
    "x = 6"
  ],
  "answer": 0,
  "explanation": "Nhân chéo: 3(x - 1) = 2(x + 1) ⇔ 3x - 3 = 2x + 2 ⇔ 3x - 2x = 2 + 3 ⇔ x = 5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Tìm m để phương trình (m - 1)x = 3 vô nghiệm:",
  "options": [
    "m = 1",
    "m ≠ 1",
    "m = 3",
    "m = 0"
  ],
  "answer": 0,
  "explanation": "Phương trình ax = b vô nghiệm khi a = 0 và b ≠ 0. Ở đây b = 3 ≠ 0 sẵn, nên cần a = m - 1 = 0 ⇔ m = 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hai xe ô tô cùng xuất phát từ A đến B dài 120 km. Xe thứ nhất đi với vận tốc 40 km/h, xe thứ hai đi với vận tốc 60 km/h. Thời gian xe thứ hai đến B trước xe thứ nhất là:",
  "options": [
    "1 giờ",
    "2 giờ",
    "0.5 giờ",
    "1.5 giờ"
  ],
  "answer": 0,
  "explanation": "Thời gian xe 1: 120 / 40 = 3 giờ. Thời gian xe 2: 120 / 60 = 2 giờ. Chênh lệch: 3 - 2 = 1 giờ."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Giải các phương trình bậc nhất sau:
a) $7x - 21 = 0$
b) $4 - 3x = 19$
c) $5x + 3 = 2x - 12$
d) $-\frac{3}{5}x + 6 = \frac{1}{2}x - 5$

### Bài tập 2:
Giải các phương trình đưa được về dạng $ax + b = 0$:
a) $4(x - 2) - 3(2x + 1) = 5$
b) $2(3x - 1) + 4 = 3(x + 2) - 1$
c) $\frac{2x - 1}{3} - \frac{x + 2}{4} = \frac{5x - 4}{12}$
d) $\frac{x + 1}{6} + \frac{2x - 3}{4} = 1 - \frac{x}{3}$

### Bài tập 3:
Cho hai phương trình:
- Phương trình (1): $2x - 5 = 3$
- Phương trình (2): $3x + 2m = 8$
Tìm $m$ để hai phương trình trên có cùng một nghiệm.

### Bài tập 4:
Tìm điều kiện của tham số $m$ để phương trình sau:
$$(m^2 - 4)x + m - 2 = 0$$
a) Có nghiệm duy nhất.
b) Vô nghiệm.
c) Có vô số nghiệm.
