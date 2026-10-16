---
title: 'Toán 11 Bài 1: Giá trị lượng giác của góc lượng giác - Đường tròn lượng giác & Radian'
description: 'Toàn bộ lý thuyết trọng tâm Bài 1 Toán 11: Khái niệm góc lượng giác, đơn vị radian, đường tròn lượng giác, các giá trị lượng giác sin, cos, tan, cot, công thức lượng giác cơ bản, bảng giá trị đặc biệt, widget tương tác đường tròn lượng giác SVG và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Lượng giác 11
  - Góc lượng giác
  - Đường tròn lượng giác
  - Radian
  - Giá trị lượng giác
  - Kết nối tri thức
grade: 11
---

# Bài 1. Giá trị lượng giác của góc lượng giác

Chào mừng các em học sinh bước vào chương trình **Toán 11**! 

Nếu như ở lớp 9 và lớp 10, chúng ta chỉ mới làm quen với góc hình học bị bó hẹp trong khoảng từ $0^\circ$ đến $180^\circ$ và các tỉ số lượng giác của góc nhọn tam giác vuông, thì lên lớp 11, Toán học sẽ mở tung cánh cửa không gian với khái niệm **Góc lượng giác**:
- Khi một cánh tuabin điện gió quay hàng trăm vòng mỗi phút, góc quay của nó là bao nhiêu?
- Khi chiếc kim đồng hồ quay ngược hay xuôi nhiều vòng, ta biểu diễn góc quay đó như thế nào?
- Làm sao các kỹ sư lập trình đồ họa 3D mô phỏng góc nghiêng của camera bay quanh một tòa lâu đài không giới hạn số vòng xoay?

Khái niệm **Góc lượng giác** cùng công cụ tối thượng **Đường tròn lượng giác** sẽ giúp chúng ta giải quyết tất cả những bài toán chuyển động quay trong vũ trụ, từ sóng âm thanh, dòng điện xoay chiều đến chuyển động của các hành tinh quanh Mặt Trời!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: GÓC & GIÁ TRỊ LƯỢNG GIÁC</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Góc lượng giác & Tia quay</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tia $Ou$ cố định, tia $Ov$ quay quanh $O$.<br>• Chiều dương (+): Ngược chiều kim đồng hồ.<br>• Chiều âm (-): Cùng chiều kim đồng hồ.<br>• Số đo tổng quát: $(Ou, Ov) = \alpha + k \cdot 360^\circ$ hay $\alpha + k2\pi$ ($k \in \mathbb{Z}$).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Đơn vị Radian & Cung tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $180^\circ = \pi \text{ rad} \approx 3,1416 \text{ rad}$.<br>• Đổi độ sang rad: $\alpha = a^\circ \cdot \frac{\pi}{180}$.<br>• Đổi rad sang độ: $a^\circ = \alpha \cdot \frac{180^\circ}{\pi}$.<br>• Độ dài cung tròn bán kính $R$: $l = \alpha \cdot R$ ($\alpha$ tính bằng rad).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đường tròn lượng giác</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tâm $O(0; 0)$, bán kính $R = 1$, điểm gốc $A(1; 0)$.<br>• Điểm biểu diễn $M(x_M; y_M)$ trên đường tròn:<br>&nbsp;&nbsp;$\sin \alpha = y_M$ (Trục tung $Oy$).<br>&nbsp;&nbsp;$\cos \alpha = x_M$ (Trục hoành $Ox$).<br>&nbsp;&nbsp;$\tan \alpha = \frac{\sin \alpha}{\cos \alpha}$, $\cot \alpha = \frac{\cos \alpha}{\sin \alpha}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hệ thức cơ bản & Góc liên kết</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $\sin^2 \alpha + \cos^2 \alpha = 1$.<br>• $1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}$ ($\alpha \ne \frac{\pi}{2} + k\pi$).<br>• $1 + \cot^2 \alpha = \frac{1}{\sin^2 \alpha}$ ($\alpha \ne k\pi$).<br>• Thần chú góc liên kết: <em>"Cos đối, Sin bù, Phụ chéo, Hơn kém pi tan cot"</em>.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Góc hình học vs Góc lượng giác:** Kim phút của đồng hồ quay từ 12 giờ đến 6 giờ theo đúng chiều chuyển động tạo ra một góc lượng giác có số đo bằng bao nhiêu độ?
2. **Chuyển đổi đơn vị:** Đổi góc $60^\circ$ sang đơn vị radian.
3. **Độ dài cung:** Một chiếc đu quay có bán kính $R = 10\text{ m}$. Khi quay một góc lượng giác $\alpha = \frac{\pi}{2}\text{ rad}$, điểm gắn cabin đã đi được quãng đường dài bao nhiêu mét?
4. **Dấu của giá trị lượng giác:** Khi góc lượng giác $\alpha$ nằm trong góc phần tư thứ II ($\frac{\pi}{2} < \alpha < \pi$), đại lượng $\sin \alpha$ và $\cos \alpha$ mang dấu dương hay âm?
5. **Đẳng thức cơ bản:** Tính giá trị biểu thức $P = \sin^2 15^\circ + \sin^2 75^\circ$.

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Kim đồng hồ quay theo **chiều âm** (cùng chiều kim đồng hồ) đúng nửa vòng $\implies$ Số đo là **$-180^\circ$**.
> 2. $60^\circ = 60 \cdot \frac{\pi}{180} = \mathbf{\frac{\pi}{3}\text{ rad}}$.
> 3. Quãng đường $l = \alpha \cdot R = \frac{\pi}{2} \cdot 10 = \mathbf{5\pi \approx 15,7\text{ m}}$.
> 4. Trong góc phần tư thứ II: hoành độ âm nên $\mathbf{\cos \alpha < 0}$, tung độ dương nên $\mathbf{\sin \alpha > 0}$.
> 5. Vì $75^\circ$ và $15^\circ$ phụ nhau nên $\sin 75^\circ = \cos 15^\circ \implies P = \sin^2 15^\circ + \cos^2 15^\circ = \mathbf{1}$.

---

## Lý thuyết trọng tâm

### 1. Góc lượng giác & Số đo của góc lượng giác

#### a) Khái niệm góc lượng giác:
- Trong mặt phẳng, cho hai tia $Ou$ và $Ov$. Nếu tia $Om$ quay quanh gốc $O$ từ vị trí ban đầu trùng với tia $Ou$ đến vị trí kết thúc trùng với tia $Ov$, ta nói tia $Om$ đã quét nên một **góc lượng giác** có tia đầu là $Ou$ và tia cuối là $Ov$.
- Ký hiệu: $(Ou, Ov)$.

#### b) Quy ước chiều quay:
- **Chiều dương (+):** Ngược chiều quay của kim đồng hồ.
- **Chiều âm (-):** Cùng chiều quay của kim đồng hồ.

```
       (+) Chiều dương
         ^   /
        /   / 
       |   O ------> Tia đầu Ou
        \
         v (-) Chiều âm
```

#### c) Số đo tổng quát:
Một tia $Om$ khi quay từ $Ou$ đến $Ov$ có thể quay thêm nhiều vòng nguyên ($k \in \mathbb{Z}$, mỗi vòng là $360^\circ$ hoặc $2\pi\text{ rad}$). Do đó:

> [!NOTE]
> **Công thức số đo tổng quát của góc lượng giác:**
> $$\text{sđ}(Ou, Ov) = \alpha^\circ + k \cdot 360^\circ \quad (k \in \mathbb{Z})$$
> hoặc tính theo radian:
> $$\text{sđ}(Ou, Ov) = \alpha + k \cdot 2\pi \quad (k \in \mathbb{Z})$$
> Trong đó $\alpha$ là số đo của một góc quay cụ thể tùy ý từ tia $Ou$ đến tia $Ov$.

---

### 2. Đơn vị Radian & Độ dài cung tròn

#### a) Định nghĩa đơn vị Radian:
- **Radian (ký hiệu: rad)** là số đo của một góc ở tâm chắn một cung tròn có độ dài đúng bằng bán kính của đường tròn đó.
- Vì chu vi đường tròn là $2\pi R$, tương ứng với góc ở tâm $360^\circ$, nên:
  $$360^\circ = 2\pi \text{ rad} \iff 180^\circ = \pi \text{ rad} \approx 3,14159 \text{ rad}$$

#### b) Công thức chuyển đổi giữa độ và radian:
$$1^\circ = \frac{\pi}{180} \text{ rad} \qquad \text{và} \qquad 1 \text{ rad} = \left(\frac{180}{\pi}\right)^\circ \approx 57^\circ 17'45''$$

Bảng chuyển đổi các góc thường gặp:

| Độ ($^\circ$) | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ | $360^\circ$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Radian (rad)** | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\frac{2\pi}{3}$ | $\frac{3\pi}{4}$ | $\frac{5\pi}{6}$ | $\pi$ | $2\pi$ |

#### c) Công thức tính độ dài cung tròn:
Trên đường tròn bán kính $R$, một cung có số đo $\alpha$ radian sẽ có độ dài $l$:
$$l = \alpha \cdot R$$

> [!WARNING]
> Khi sử dụng công thức $l = \alpha \cdot R$, số đo $\alpha$ **bắt buộc phải đổi ra đơn vị radian**. Nếu đề bài cho đơn vị độ ($a^\circ$), phải chuyển đổi:
> $$l = a^\circ \cdot \frac{\pi}{180} \cdot R$$

---

### 3. Đường tròn lượng giác

> [!NOTE]
> **Định nghĩa:**
> Trong mặt phẳng tọa độ $Oxy$, **đường tròn lượng giác** là đường tròn có:
> 1. Tâm trùng với gốc tọa độ $O(0; 0)$.
> 2. Bán kính bằng $1$ ($R = 1$).
> 3. Điểm gốc là điểm $A(1; 0)$ nằm trên trục hoành.
> 4. Chiều dương là chiều ngược chiều kim đồng hồ; chiều âm là chiều cùng chiều kim đồng hồ.

- Điểm $M$ trên đường tròn lượng giác sao cho $\text{sđ}(OA, OM) = \alpha$ được gọi là **điểm biểu diễn của góc lượng giác $\alpha$**.
- Mỗi góc lượng giác $\alpha$ chỉ xác định **duy nhất một điểm biểu diễn $M$** trên đường tròn lượng giác.
- Ngược lại, một điểm $M$ là điểm biểu diễn của vô số góc lượng giác có dạng $\alpha + k2\pi$ ($k \in \mathbb{Z}$).

---

### 4. Giá trị lượng giác của góc lượng giác $\alpha$

Giả sử điểm $M(x_M; y_M)$ là điểm biểu diễn góc lượng giác $\alpha$ trên đường tròn lượng giác:

```
                  Trục Sin (Oy)
                       ^ 
                       | B(0; 1)
                       |      . M(x_M, y_M)
            y_M _______|_____/|
                       |    / |
                       |   /  |
        A'(-1; 0)      |  /α  |      A(1; 0)
       <---------------+--+---+--------> Trục Cos (Ox)
                       |  O  x_M
                       |
                       | B'(0; -1)
                       v
```

1. **Sin của góc $\alpha$:** là tung độ $y_M$ của điểm $M$:
   $$\sin \alpha = y_M$$
   (Trục tung $Oy$ được gọi là **trục sin**).

2. **Cosin của góc $\alpha$:** là hoành độ $x_M$ của điểm $M$:
   $$\cos \alpha = x_M$$
   (Trục hoành $Ox$ được gọi là **trục cos**).

3. **Tang của góc $\alpha$:** (khi $\cos \alpha \ne 0$, tức $\alpha \ne \frac{\pi}{2} + k\pi$):
   $$\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{y_M}{x_M}$$

4. **Cô-tang của góc $\alpha$:** (khi $\sin \alpha \ne 0$, tức $\alpha \ne k\pi$):
   $$\cot \alpha = \frac{\cos \alpha}{\sin \alpha} = \frac{x_M}{y_M}$$

#### Nhận xét quan trọng:
- Vì $M(x_M; y_M)$ nằm trên đường tròn đơn vị $x_M^2 + y_M^2 = 1$ nên:
  $$-1 \le \sin \alpha \le 1 \qquad \text{và} \qquad -1 \le \cos \alpha \le 1$$
- $\tan \alpha$ và $\cot \alpha$ có thể nhận bất kỳ giá trị thực nào từ $-\infty$ đến $+\infty$.
- Tính tuần hoàn cơ bản:
  $$\sin(\alpha + k2\pi) = \sin \alpha, \qquad \cos(\alpha + k2\pi) = \cos \alpha \quad (k \in \mathbb{Z})$$
  $$\tan(\alpha + k\pi) = \tan \alpha, \qquad \cot(\alpha + k\pi) = \cot \alpha \quad (k \in \mathbb{Z})$$

#### Bảng dấu các giá trị lượng giác theo 4 góc phần tư:

| Giá trị | Góc phần tư I ($0 < \alpha < \frac{\pi}{2}$) | Góc phần tư II ($\frac{\pi}{2} < \alpha < \pi$) | Góc phần tư III ($\pi < \alpha < \frac{3\pi}{2}$) | Góc phần tư IV ($\frac{3\pi}{2} < \alpha < 2\pi$) |
| :---: | :---: | :---: | :---: | :---: |
| $\sin \alpha$ | **$+$** | **$+$** | **$-$** | **$-$** |
| $\cos \alpha$ | **$+$** | **$-$** | **$-$** | **$+$** |
| $\tan \alpha$ | **$+$** | **$-$** | **$+$** | **$-$** |
| $\cot \alpha$ | **$+$** | **$-$** | **$+$** | **$-$** |

> [!TIP]
> **Thần chú ghi nhớ dấu nhanh:**
> *"Nhất cả (I: tất cả đều +), Nhị sin (II: chỉ sin +), Tam tang (III: tan & cot +), Tứ cos (IV: chỉ cos +)"*.

---

### 5. Các hệ thức lượng giác cơ bản

Với mọi góc $\alpha$ làm cho biểu thức có nghĩa, ta luôn có 5 công thức nền tảng:

1. $$\sin^2 \alpha + \cos^2 \alpha = 1$$
2. $$\tan \alpha = \frac{\sin \alpha}{\cos \alpha} \quad \left(\alpha \ne \frac{\pi}{2} + k\pi\right)$$
3. $$\cot \alpha = \frac{\cos \alpha}{\sin \alpha} \quad (\alpha \ne k\pi)$$
4. $$\tan \alpha \cdot \cot \alpha = 1 \quad \left(\alpha \ne \frac{k\pi}{2}, k \in \mathbb{Z}\right)$$
5. $$1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha} \quad \left(\alpha \ne \frac{\pi}{2} + k\pi\right)$$
6. $$1 + \cot^2 \alpha = \frac{1}{\sin^2 \alpha} \quad (\alpha \ne k\pi)$$

---

### 6. Giá trị lượng giác của các góc có liên quan đặc biệt

| Mối quan hệ | Công thức liên hệ | Thần chú |
| :--- | :--- | :--- |
| **Góc đối nhau**<br>($\alpha$ và $-\alpha$) | $\cos(-\alpha) = \cos \alpha$<br>$\sin(-\alpha) = -\sin \alpha$<br>$\tan(-\alpha) = -\tan \alpha$<br>$\cot(-\alpha) = -\cot \alpha$ | **Cos đối**<br>*(Chỉ có Cos giữ nguyên dấu)* |
| **Góc bù nhau**<br>($\alpha$ và $\pi - \alpha$) | $\sin(\pi - \alpha) = \sin \alpha$<br>$\cos(\pi - \alpha) = -\cos \alpha$<br>$\tan(\pi - \alpha) = -\tan \alpha$<br>$\cot(\pi - \alpha) = -\cot \alpha$ | **Sin bù**<br>*(Chỉ có Sin giữ nguyên dấu)* |
| **Góc phụ nhau**<br>($\alpha$ và $\frac{\pi}{2} - \alpha$) | $\sin\left(\frac{\pi}{2} - \alpha\right) = \cos \alpha$<br>$\cos\left(\frac{\pi}{2} - \alpha\right) = \sin \alpha$<br>$\tan\left(\frac{\pi}{2} - \alpha\right) = \cot \alpha$<br>$\cot\left(\frac{\pi}{2} - \alpha\right) = \tan \alpha$ | **Phụ chéo**<br>*(Sin biến thành Cos, Tan biến thành Cot)* |
| **Góc hơn kém $\pi$**<br>($\alpha$ và $\alpha + \pi$) | $\sin(\alpha + \pi) = -\sin \alpha$<br>$\cos(\alpha + \pi) = -\cos \alpha$<br>$\tan(\alpha + \pi) = \tan \alpha$<br>$\cot(\alpha + \pi) = \cot \alpha$ | **Hơn kém $\pi$ tan cot**<br>*(Chỉ Tan và Cot giữ nguyên dấu)* |

---

## Ứng dụng tương tác: Khám phá Đường tròn lượng giác

Kéo thanh trượt bên dưới để xoay góc $\alpha$ từ $0^\circ$ đến $360^\circ$ và quan sát trực tiếp điểm biểu diễn $M(\cos \alpha, \sin \alpha)$ di chuyển trên đường tròn đơn vị cùng các giá trị lượng giác:

<div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; text-align: center; color: #1e293b;">ĐƯỜNG TRÒN LƯỢNG GIÁC TƯƠNG TÁC</h4>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 20px;">
    <!-- SVG Canvas -->
    <svg id="trigSvg" viewBox="0 0 320 320" style="width: 100%; max-width: 320px; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
      <!-- Grid circles and axes -->
      <circle cx="160" cy="160" r="110" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="160" cy="160" r="110" fill="#38bdf8" fill-opacity="0.04" />

      <!-- Coordinate Axes: Ox (Cos) and Oy (Sin) -->
      <line x1="20" y1="160" x2="300" y2="160" stroke="#64748b" stroke-width="1.5" />
      <polygon points="300,157 308,160 300,163" fill="#64748b" />
      <text x="290" y="152" font-size="12" font-weight="bold" fill="#2563eb">Cos (x)</text>

      <line x1="160" y1="300" x2="160" y2="20" stroke="#64748b" stroke-width="1.5" />
      <polygon points="157,20 160,12 163,20" fill="#64748b" />
      <text x="166" y="24" font-size="12" font-weight="bold" fill="#dc2626">Sin (y)</text>

      <text x="146" y="174" font-size="11" font-weight="bold" fill="#64748b">O</text>

      <!-- Key labels: 1, -1 -->
      <text x="272" y="174" font-size="10" fill="#64748b">1</text>
      <text x="42" y="174" font-size="10" fill="#64748b">-1</text>
      <text x="148" y="55" font-size="10" fill="#64748b">1</text>
      <text x="144" y="275" font-size="10" fill="#64748b">-1</text>

      <!-- Angle arc -->
      <path id="angleArc" d="" fill="#fef08a" fill-opacity="0.5" stroke="#ca8a04" stroke-width="1.2" />

      <!-- Projections onto axes -->
      <line id="cosProj" x1="160" y1="160" x2="237" y2="160" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
      <line id="sinProj" x1="160" y1="160" x2="160" y2="82" stroke="#dc2626" stroke-width="3" stroke-linecap="round" />
      <line id="dashX" x1="237" y1="82" x2="237" y2="160" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
      <line id="dashY" x1="237" y1="82" x2="160" y2="82" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />

      <!-- Radius vector OM -->
      <line id="radiusLine" x1="160" y1="160" x2="237" y2="82" stroke="#0f172a" stroke-width="2" />
      <circle id="pointM" cx="237" cy="82" r="5.5" fill="#0284c7" stroke="#ffffff" stroke-width="1.5" />
      <text id="labelM" x="244" y="78" font-size="11" font-weight="bold" fill="#0369a1">M</text>
    </svg>

    <!-- Info & Dashboard Panel -->
    <div style="flex: 1; min-width: 260px; max-width: 380px;">
      <div style="margin-bottom: 16px;">
        <label for="degSlider" style="display: flex; justify-content: space-between; font-weight: bold; color: #334155; font-size: 14px;">
          <span>Góc quay &alpha;:</span>
          <span id="degDisplay" style="color: #2563eb; font-family: monospace; font-size: 16px;">45° (π/4 rad)</span>
        </label>
        <input type="range" id="degSlider" min="0" max="360" value="45" step="1" style="width: 100%; margin-top: 8px; accent-color: #2563eb; cursor: pointer;" />
      </div>

      <div style="background: #f1f5f9; border-radius: 8px; padding: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div style="background: #ffffff; padding: 10px; border-radius: 6px; border-left: 3px solid #2563eb;">
          <div style="font-size: 11px; color: #64748b; font-weight: bold;">COS &alpha; (Hoành độ)</div>
          <div id="valCos" style="font-size: 15px; font-weight: bold; color: #1e293b; font-family: monospace;">+0.7071</div>
        </div>
        <div style="background: #ffffff; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626;">
          <div style="font-size: 11px; color: #64748b; font-weight: bold;">SIN &alpha; (Tung độ)</div>
          <div id="valSin" style="font-size: 15px; font-weight: bold; color: #1e293b; font-family: monospace;">+0.7071</div>
        </div>
        <div style="background: #ffffff; padding: 10px; border-radius: 6px; border-left: 3px solid #0d9488;">
          <div style="font-size: 11px; color: #64748b; font-weight: bold;">TAN &alpha; (Sin/Cos)</div>
          <div id="valTan" style="font-size: 15px; font-weight: bold; color: #1e293b; font-family: monospace;">+1.0000</div>
        </div>
        <div style="background: #ffffff; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6;">
          <div style="font-size: 11px; color: #64748b; font-weight: bold;">COT &alpha; (Cos/Sin)</div>
          <div id="valCot" style="font-size: 15px; font-weight: bold; color: #1e293b; font-family: monospace;">+1.0000</div>
        </div>
      </div>

      <div style="margin-top: 12px; font-size: 12px; color: #475569; background: #e0f2fe; padding: 8px 12px; border-radius: 6px;">
        <span id="quadrantDisplay">Vị trí: <strong>Góc phần tư I</strong> (sin &gt; 0, cos &gt; 0)</span>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var slider = document.getElementById('degSlider');
  if (!slider) return;

  function toFractionPi(deg) {
    if (deg === 0 || deg === 360) return deg === 0 ? '0 rad' : '2π rad';
    if (deg === 180) return 'π rad';
    var gcd = function(a, b) { return b ? gcd(b, a % b) : a; };
    var d = gcd(deg, 180);
    var num = deg / d;
    var den = 180 / d;
    var strNum = num === 1 ? 'π' : (num + 'π');
    return den === 1 ? strNum + ' rad' : (strNum + '/' + den + ' rad');
  }

  function update() {
    var deg = parseFloat(slider.value);
    var rad = deg * Math.PI / 180;
    document.getElementById('degDisplay').textContent = deg + '° (' + toFractionPi(deg) + ')';

    var cosVal = Math.cos(rad);
    var sinVal = Math.sin(rad);

    var r = 110;
    var cx = 160;
    var cy = 160;
    var mx = cx + r * cosVal;
    var my = cy - r * sinVal; // In SVG, y is downward

    // Update lines and point M
    var ptM = document.getElementById('pointM');
    if (ptM) {
      ptM.setAttribute('cx', mx);
      ptM.setAttribute('cy', my);
    }
    var lblM = document.getElementById('labelM');
    if (lblM) {
      lblM.setAttribute('x', mx + (cosVal >= 0 ? 8 : -20));
      lblM.setAttribute('y', my + (sinVal >= 0 ? -8 : 16));
    }
    var radLine = document.getElementById('radiusLine');
    if (radLine) {
      radLine.setAttribute('x2', mx);
      radLine.setAttribute('y2', my);
    }

    // Projections
    var cosP = document.getElementById('cosProj');
    if (cosP) cosP.setAttribute('x2', mx);

    var sinP = document.getElementById('sinProj');
    if (sinP) sinP.setAttribute('y2', my);

    var dx = document.getElementById('dashX');
    if (dx) {
      dx.setAttribute('x1', mx);
      dx.setAttribute('y1', my);
      dx.setAttribute('x2', mx);
      dx.setAttribute('y2', cy);
    }
    var dy = document.getElementById('dashY');
    if (dy) {
      dy.setAttribute('x1', mx);
      dy.setAttribute('y1', my);
      dy.setAttribute('x2', cx);
      dy.setAttribute('y2', my);
    }

    // Angle sector arc
    var arc = document.getElementById('angleArc');
    if (arc) {
      if (deg === 0) {
        arc.setAttribute('d', '');
      } else if (deg >= 360) {
        arc.setAttribute('d', 'M 160 160 L 185 160 A 25 25 0 1 0 184.99 160 Z');
      } else {
        var arcR = 26;
        var ax = cx + arcR * cosVal;
        var ay = cy - arcR * sinVal;
        var largeArc = deg > 180 ? 1 : 0;
        arc.setAttribute('d', 'M 160 160 L 186 160 A 26 26 0 ' + largeArc + ' 0 ' + ax + ' ' + ay + ' Z');
      }
    }

    // Values formatted
    var strCos = (cosVal >= 0 ? '+' : '') + cosVal.toFixed(4);
    var strSin = (sinVal >= 0 ? '+' : '') + sinVal.toFixed(4);
    document.getElementById('valCos').textContent = Math.abs(cosVal) < 0.00005 ? '0.0000' : strCos;
    document.getElementById('valSin').textContent = Math.abs(sinVal) < 0.00005 ? '0.0000' : strSin;

    var valTanElem = document.getElementById('valTan');
    if (Math.abs(cosVal) < 0.001) {
      valTanElem.textContent = 'Không xác định';
    } else {
      var tanVal = sinVal / cosVal;
      valTanElem.textContent = (tanVal >= 0 ? '+' : '') + tanVal.toFixed(4);
    }

    var valCotElem = document.getElementById('valCot');
    if (Math.abs(sinVal) < 0.001) {
      valCotElem.textContent = 'Không xác định';
    } else {
      var cotVal = cosVal / sinVal;
      valCotElem.textContent = (cotVal >= 0 ? '+' : '') + cotVal.toFixed(4);
    }

    // Quadrant label
    var quadElem = document.getElementById('quadrantDisplay');
    if (deg === 0 || deg === 360) quadElem.innerHTML = 'Vị trí: <strong>Tia gốc Ox dương</strong> (Điểm A)';
    else if (deg === 90) quadElem.innerHTML = 'Vị trí: <strong>Trục tung Oy dương</strong> (Điểm B)';
    else if (deg === 180) quadElem.innerHTML = 'Vị trí: <strong>Tia Ox âm</strong> (Điểm A\')';
    else if (deg === 270) quadElem.innerHTML = 'Vị trí: <strong>Trục tung Oy âm</strong> (Điểm B\')';
    else if (deg < 90) quadElem.innerHTML = 'Vị trí: <strong>Góc phần tư I</strong> (sin > 0, cos > 0)';
    else if (deg < 180) quadElem.innerHTML = 'Vị trí: <strong>Góc phần tư II</strong> (sin > 0, cos < 0)';
    else if (deg < 270) quadElem.innerHTML = 'Vị trí: <strong>Góc phần tư III</strong> (sin < 0, cos < 0)';
    else quadElem.innerHTML = 'Vị trí: <strong>Góc phần tư IV</strong> (sin < 0, cos > 0)';
  }

  slider.addEventListener('input', update);
  update();
})();
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Đổi đơn vị đo góc & Tính độ dài cung tròn

#### Phương pháp giải:
1. **Đổi độ sang radian:** $\alpha = a^\circ \cdot \frac{\pi}{180}$
2. **Đổi radian sang độ:** $a^\circ = \alpha \cdot \frac{180^\circ}{\pi}$
3. **Độ dài cung tròn:** $l = \alpha \cdot R$ (với $\alpha$ tính bằng radian).

---

#### Bài toán 1
Cho đường tròn có bán kính $R = 20\text{ cm}$.
1. Đổi các góc sau sang radian: $a = 72^\circ$, $b = -225^\circ$.
2. Đổi các góc sau sang độ: $\alpha = \frac{7\pi}{12}\text{ rad}$, $\beta = -3\text{ rad}$ (lấy đến phút).
3. Tính độ dài cung tròn có số đo $135^\circ$ trên đường tròn đã cho.

**Lời giải chi tiết:**

1. **Đổi từ độ sang radian:**
   - Với $a = 72^\circ$:  
     $$a = 72 \cdot \frac{\pi}{180} = \frac{2\pi}{5} \approx 1,2566 \text{ rad}$$
   - Với $b = -225^\circ$:  
     $$b = -225 \cdot \frac{\pi}{180} = -\frac{5\pi}{4} \approx -3,9270 \text{ rad}$$

2. **Đổi từ radian sang độ:**
   - Với $\alpha = \frac{7\pi}{12}\text{ rad}$:  
     $$\alpha = \frac{7\pi}{12} \cdot \frac{180^\circ}{\pi} = 7 \cdot 15^\circ = 105^\circ$$
   - Với $\beta = -3\text{ rad}$:  
     $$\beta = -3 \cdot \left(\frac{180^\circ}{\pi}\right) \approx -171,887^\circ \approx -171^\circ 53'$$

3. **Tính độ dài cung tròn:**
   - Đổi $135^\circ$ sang radian:  
     $$\alpha = 135 \cdot \frac{\pi}{180} = \frac{3\pi}{4} \text{ rad}$$
   - Áp dụng công thức $l = \alpha \cdot R$:  
     $$l = \frac{3\pi}{4} \cdot 20 = 15\pi \approx 47,12 \text{ cm}$$

---

### Dạng 2: Biểu diễn góc lượng giác trên đường tròn lượng giác

#### Phương pháp giải:
1. Góc lượng giác $\alpha$ được biểu diễn bởi duy nhất một điểm $M$ trên đường tròn lượng giác thỏa mãn $\text{sđ}(OA, OM) = \alpha$.
2. Với góc lượng giác có dạng $\alpha = \alpha_0 + k \cdot \frac{2\pi}{n}$ ($k \in \mathbb{Z}$):
   - Để tìm số điểm biểu diễn, cho $k$ nhận $n$ giá trị nguyên liên tiếp $k \in \{0, 1, 2, \dots, n-1\}$.
   - Hệ thống gồm đúng $n$ điểm biểu diễn phân bố đều tạo thành các đỉnh của một đa giác đều $n$ cạnh nội tiếp đường tròn.

---

#### Bài toán 2
Biểu diễn các họ góc lượng giác sau trên đường tròn lượng giác và xác định số điểm biểu diễn của mỗi họ:
1. $\alpha = \frac{\pi}{3} + k\pi \quad (k \in \mathbb{Z})$
2. $\beta = \frac{\pi}{4} + k \cdot \frac{\pi}{2} \quad (k \in \mathbb{Z})$

**Lời giải chi tiết:**

1. **Xét họ góc $\alpha = \frac{\pi}{3} + k\pi$:**
   Ta viết lại dưới dạng: $\alpha = \frac{\pi}{3} + k \cdot \frac{2\pi}{2}$. Mẫu số bằng $2$ nên họ nghiệm có đúng **2 điểm biểu diễn**:
   - Khi $k = 0 \implies \alpha_1 = \frac{\pi}{3} = 60^\circ$ (Điểm $M_1$).
   - Khi $k = 1 \implies \alpha_2 = \frac{\pi}{3} + \pi = \frac{4\pi}{3} = 240^\circ$ (Điểm $M_2$).
   - Khi $k = 2 \implies \alpha_3 = \frac{\pi}{3} + 2\pi$, điểm này quay lại trùng với điểm $M_1$.
   Hai điểm $M_1$ và $M_2$ đối xứng nhau qua gốc tọa độ $O$.

2. **Xét họ góc $\beta = \frac{\pi}{4} + k \frac{\pi}{2}$:**
   Ta viết lại: $\beta = \frac{\pi}{4} + k \cdot \frac{2\pi}{4}$. Do đó có đúng **4 điểm biểu diễn**:
   - $k = 0 \implies \beta_0 = \frac{\pi}{4} = 45^\circ$ (Điểm $P_1$ thuộc góc phần tư I).
   - $k = 1 \implies \beta_1 = \frac{\pi}{4} + \frac{\pi}{2} = \frac{3\pi}{4} = 135^\circ$ (Điểm $P_2$ thuộc góc phần tư II).
   - $k = 2 \implies \beta_2 = \frac{\pi}{4} + \pi = \frac{5\pi}{4} = 225^\circ$ (Điểm $P_3$ thuộc góc phần tư III).
   - $k = 3 \implies \beta_3 = \frac{\pi}{4} + \frac{3\pi}{2} = \frac{7\pi}{4} = 315^\circ$ (Điểm $P_4$ thuộc góc phần tư IV).
   Bốn điểm $P_1, P_2, P_3, P_4$ nối lại tạo thành một hình vuông nội tiếp đường tròn lượng giác.

<div style="margin: 20px 0; text-align: center;">
  <svg viewBox="0 0 320 220" style="max-width: 480px; width: 100%; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
    <!-- Two circles side by side -->
    <!-- Left Circle: alpha = pi/3 + k*pi -->
    <g transform="translate(80, 110)">
      <circle cx="0" cy="0" r="65" fill="#e0f2fe" fill-opacity="0.25" stroke="#94a3b8" stroke-width="1.2" />
      <line x1="-75" y1="0" x2="75" y2="0" stroke="#64748b" stroke-width="1" />
      <line x1="0" y1="75" x2="0" y2="-75" stroke="#64748b" stroke-width="1" />
      <!-- Line M1 M2 through O -->
      <line x1="-32.5" y1="56.3" x2="32.5" y2="-56.3" stroke="#2563eb" stroke-width="1.8" />
      <circle cx="32.5" cy="-56.3" r="4.5" fill="#2563eb" />
      <text x="36" y="-58" font-size="10" font-weight="bold" fill="#2563eb">M₁(π/3)</text>
      <circle cx="-32.5" cy="56.3" r="4.5" fill="#2563eb" />
      <text x="-76" y="66" font-size="10" font-weight="bold" fill="#2563eb">M₂(4π/3)</text>
      <text x="-50" y="-85" font-size="11" font-weight="bold" fill="#0f172a">1. Họ góc α (2 điểm)</text>
    </g>

    <!-- Right Circle: beta = pi/4 + k*pi/2 -->
    <g transform="translate(240, 110)">
      <circle cx="0" cy="0" r="65" fill="#fef3c7" fill-opacity="0.25" stroke="#94a3b8" stroke-width="1.2" />
      <line x1="-75" y1="0" x2="75" y2="0" stroke="#64748b" stroke-width="1" />
      <line x1="0" y1="75" x2="0" y2="-75" stroke="#64748b" stroke-width="1" />
      <!-- Square P1 P2 P3 P4 -->
      <polygon points="46,-46 -46,-46 -46,46 46,46" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,3" />
      <circle cx="46" cy="-46" r="4" fill="#d97706" />
      <text x="49" y="-48" font-size="9" font-weight="bold" fill="#d97706">P₁</text>
      <circle cx="-46" cy="-46" r="4" fill="#d97706" />
      <text x="-62" y="-48" font-size="9" font-weight="bold" fill="#d97706">P₂</text>
      <circle cx="-46" cy="46" r="4" fill="#d97706" />
      <text x="-62" y="55" font-size="9" font-weight="bold" fill="#d97706">P₃</text>
      <circle cx="46" cy="46" r="4" fill="#d97706" />
      <text x="49" y="55" font-size="9" font-weight="bold" fill="#d97706">P₄</text>
      <text x="-50" y="-85" font-size="11" font-weight="bold" fill="#0f172a">2. Họ góc β (4 điểm)</text>
    </g>
  </svg>
  <div style="font-size: 12px; color: #64748b; margin-top: 6px;"><em>Hình 1.1: Điểm biểu diễn của các họ nghiệm góc lượng giác tạo nên cấu trúc hình học đối xứng</em></div>
</div>

---

### Dạng 3: Cho một giá trị lượng giác, tính các giá trị lượng giác còn lại

#### Phương pháp giải:
1. Dựa vào giả thiết về khoảng giá trị của $\alpha$ để xác định dấu ($+$ hoặc $-$) của các đại lượng $\sin \alpha, \cos \alpha, \tan \alpha, \cot \alpha$.
2. Áp dụng các công thức liên hệ cơ bản:
   - Biết $\sin \alpha \implies \cos^2 \alpha = 1 - \sin^2 \alpha \implies \cos \alpha = \pm \sqrt{1 - \sin^2 \alpha}$.
   - Biết $\cos \alpha \implies \sin^2 \alpha = 1 - \cos^2 \alpha \implies \sin \alpha = \pm \sqrt{1 - \cos^2 \alpha}$.
   - Tính $\tan \alpha = \frac{\sin \alpha}{\cos \alpha}$ và $\cot \alpha = \frac{1}{\tan \alpha}$.
   - Nếu biết $\tan \alpha$, dùng $1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}$ để tìm $\cos \alpha$.

---

#### Bài toán 3
1. Cho $\cos \alpha = -\frac{3}{5}$ với $\frac{\pi}{2} < \alpha < \pi$. Tính $\sin \alpha, \tan \alpha, \cot \alpha$.
2. Cho $\tan \alpha = 2$ với $\pi < \alpha < \frac{3\pi}{2}$. Tính $\sin \alpha, \cos \alpha$.

**Lời giải chi tiết:**

1. **Xét câu 1:**
   - Vì $\frac{\pi}{2} < \alpha < \pi$ ($\alpha$ thuộc góc phần tư thứ II), nên $\sin \alpha > 0$.
   - Áp dụng công thức $\sin^2 \alpha + \cos^2 \alpha = 1$:
     $$\sin^2 \alpha = 1 - \cos^2 \alpha = 1 - \left(-\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$$
   - Vì $\sin \alpha > 0$ nên:
     $$\sin \alpha = \sqrt{\frac{16}{25}} = \frac{4}{5}$$
   - Tính $\tan \alpha$ và $\cot \alpha$:
     $$\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{\frac{4}{5}}{-\frac{3}{5}} = -\frac{4}{3}$$
     $$\cot \alpha = \frac{1}{\tan \alpha} = -\frac{3}{4}$$

2. **Xét câu 2:**
   - Vì $\pi < \alpha < \frac{3\pi}{2}$ ($\alpha$ thuộc góc phần tư thứ III), nên $\sin \alpha < 0$ và $\cos \alpha < 0$.
   - Áp dụng công thức:
     $$1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha} \iff 1 + 2^2 = \frac{1}{\cos^2 \alpha} \iff \cos^2 \alpha = \frac{1}{5}$$
   - Vì $\cos \alpha < 0$ nên:
     $$\cos \alpha = -\frac{1}{\sqrt{5}} = -\frac{\sqrt{5}}{5}$$
   - Áp dụng $\sin \alpha = \tan \alpha \cdot \cos \alpha$:
     $$\sin \alpha = 2 \cdot \left(-\frac{\sqrt{5}}{5}\right) = -\frac{2\sqrt{5}}{5}$$

---

### Dạng 4: Rút gọn biểu thức lượng giác & Chứng minh đẳng thức

#### Phương pháp giải:
1. Sử dụng tính tuần hoàn: $\sin(\alpha + k2\pi) = \sin \alpha$, $\tan(\alpha + k\pi) = \tan \alpha$.
2. Áp dụng quy tắc góc liên kết: "Cos đối, Sin bù, Phụ chéo, Hơn kém $\pi$".
3. Tách các hằng số góc đặc biệt như $\frac{\pi}{2}, \pi, 2\pi$ để đưa về góc đơn giản $\alpha$.
4. Đưa các hàm số về cùng một loại hoặc tận dụng các hằng đẳng thức đáng nhớ.

---

#### Bài toán 4
Rút gọn các biểu thức sau:
1. $A = \sin(\pi - \alpha) + \cos\left(\frac{\pi}{2} - \alpha\right) + \cos(-\alpha) - \sin\left(\frac{\pi}{2} + \alpha\right)$
2. $B = \frac{\sin^2 \alpha - \cos^2 \alpha}{\sin \alpha + \cos \alpha} + \frac{2\cos^2 \alpha - 1}{\cos \alpha - \sin \alpha}$

**Lời giải chi tiết:**

1. **Rút gọn biểu thức $A$:**
   Ta áp dụng từng công thức góc liên kết:
   - $\sin(\pi - \alpha) = \sin \alpha$ (góc bù)
   - $\cos\left(\frac{\pi}{2} - \alpha\right) = \sin \alpha$ (góc phụ)
   - $\cos(-\alpha) = \cos \alpha$ (góc đối)
   - $\sin\left(\frac{\pi}{2} + \alpha\right) = \sin\left[\frac{\pi}{2} - (-\alpha)\right] = \cos(-\alpha) = \cos \alpha$

   Thay toàn bộ vào biểu thức $A$:
   $$A = \sin \alpha + \sin \alpha + \cos \alpha - \cos \alpha = 2\sin \alpha$$

2. **Rút gọn biểu thức $B$:**
   Phân tích từng phân thức:
   - Phân thức thứ nhất có tử số là hằng đẳng thức hiệu hai bình phương:
     $$\frac{\sin^2 \alpha - \cos^2 \alpha}{\sin \alpha + \cos \alpha} = \frac{(\sin \alpha - \cos \alpha)(\sin \alpha + \cos \alpha)}{\sin \alpha + \cos \alpha} = \sin \alpha - \cos \alpha$$
   - Phân thức thứ hai biến đổi tử số bằng cách thay $1 = \sin^2 \alpha + \cos^2 \alpha$:
     $$2\cos^2 \alpha - 1 = 2\cos^2 \alpha - (\sin^2 \alpha + \cos^2 \alpha) = \cos^2 \alpha - \sin^2 \alpha = (\cos \alpha - \sin \alpha)(\cos \alpha + \sin \alpha)$$
     Do đó:
     $$\frac{2\cos^2 \alpha - 1}{\cos \alpha - \sin \alpha} = \frac{(\cos \alpha - \sin \alpha)(\cos \alpha + \sin \alpha)}{\cos \alpha - \sin \alpha} = \cos \alpha + \sin \alpha$$
   - Cộng hai kết quả lại:
     $$B = (\sin \alpha - \cos \alpha) + (\cos \alpha + \sin \alpha) = 2\sin \alpha$$

---

## 5. Ứng dụng khoa học & Kỹ thuật hiện đại

| Lĩnh vực ứng dụng | Đóng góp từ Góc & Hàm Lượng giác |
| :--- | :--- |
| **Kỹ thuật Điện tử & Viễn thông** | Dòng điện xoay chiều AC ($i(t) = I_0 \cos(\omega t + \varphi)$) và sóng điện từ vô tuyến truyền tín hiệu Wi-Fi, 5G được mô tả hoàn toàn bằng các hàm lượng giác điều hòa. |
| **Đồ họa Máy tính 3D & Game Engine** | Thuật toán quay vật thể quanh trục trong không gian (sử dụng ma trận xoay rotation matrices và Quaternion) đều dựa trên việc chiếu vector lên đường tròn lượng giác. |
| **Âm học Kỹ thuật số & Xử lý Âm thanh** | Định lý phân tích chuỗi Fourier: Mọi sóng âm phức tạp (tiếng đàn guitar, giọng nói con người) đều là tổng của vô hạn các sóng hình sin và cosin cơ bản. |
| **Robot học & Cơ điện tử (Robotics)** | Bài toán động học cánh tay robot (Inverse Kinematics): Tính toán chính xác góc quay của các khớp nối động cơ servo để đầu gắp chạm đúng tọa độ mục tiêu. |

---

## 10 Câu hỏi trắc nghiệm tự chấm (Interactive Quiz)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Góc lượng giác có số đo 240° khi đổi sang đơn vị radian bằng:",
  "options": [
    "A. 4π/3 rad",
    "B. 3π/4 rad",
    "C. 2π/3 rad",
    "D. 5π/3 rad"
  ],
  "answer": "A. 4π/3 rad",
  "explanation": "Ta có α = 240 * (π / 180) = 4π / 3 rad."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Một cung tròn trên đường tròn bán kính R = 15 cm có số đo 2π/5 rad. Độ dài l của cung tròn đó là:",
  "options": [
    "A. 6π cm",
    "B. 3π cm",
    "C. 5π cm",
    "D. 7,5π cm"
  ],
  "answer": "A. 6π cm",
  "explanation": "Độ dài cung tròn là l = α * R = (2π / 5) * 15 = 6π cm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Khẳng định nào sau đây là ĐÚNG về dấu của giá trị lượng giác khi góc α thỏa mãn π/2 < α < π?",
  "options": [
    "A. sin α > 0, cos α < 0",
    "B. sin α < 0, cos α > 0",
    "C. sin α > 0, cos α > 0",
    "D. sin α < 0, cos α < 0"
  ],
  "answer": "A. sin α > 0, cos α < 0",
  "explanation": "Khi π/2 < α < π, góc α nằm ở góc phần tư thứ II. Điểm biểu diễn M có tung độ dương (sin α > 0) và hoành độ âm (cos α < 0)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Số điểm biểu diễn của họ góc lượng giác α = π/6 + k(π/2) (k ∈ ℤ) trên đường tròn lượng giác là:",
  "options": [
    "A. 4",
    "B. 2",
    "C. 3",
    "D. 6"
  ],
  "answer": "A. 4",
  "explanation": "Ta viết lại α = π/6 + k*(2π/4). Mẫu số bằng 4 nên có đúng 4 điểm biểu diễn trên đường tròn lượng giác."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Cho góc α thỏa mãn sin α = 3/5 và 0 < α < π/2. Giá trị của cos α là:",
  "options": [
    "A. 4/5",
    "B. -4/5",
    "C. 16/25",
    "D. 3/4"
  ],
  "answer": "A. 4/5",
  "explanation": "Vì 0 < α < π/2 (góc phần tư I) nên cos α > 0. Ta có cos α = √(1 - sin²α) = √(1 - 9/25) = 4/5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đẳng thức nào sau đây là SAI?",
  "options": [
    "A. sin(π - α) = -sin α",
    "B. cos(-α) = cos α",
    "C. tan(π + α) = tan α",
    "D. cos(π/2 - α) = sin α"
  ],
  "answer": "A. sin(π - α) = -sin α",
  "explanation": "Theo quy tắc góc bù: sin(π - α) = sin α (chỉ có sin giữ nguyên dấu dương). Do đó khẳng định A là sai."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Biểu thức P = sin²α + cos²α + tan²α bằng biểu thức nào sau đây (với điều kiện biểu thức xác định)?",
  "options": [
    "A. 1/cos²α",
    "B. 1/sin²α",
    "C. 1 + cot²α",
    "D. 2"
  ],
  "answer": "A. 1/cos²α",
  "explanation": "Ta có sin²α + cos²α = 1. Do đó P = 1 + tan²α = 1/cos²α."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tan α = 3. Giá trị của biểu thức M = (sin α + cos α)/(sin α - cos α) là:",
  "options": [
    "A. 2",
    "B. 4",
    "C. 1/2",
    "D. -2"
  ],
  "answer": "A. 2",
  "explanation": "Chia cả tử và mẫu cho cos α ≠ 0, ta được: M = (tan α + 1)/(tan α - 1) = (3 + 1)/(3 - 1) = 4/2 = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho cot α = -2 với 3π/2 < α < 2π. Giá trị của sin α là:",
  "options": [
    "A. -1/√5",
    "B. 1/√5",
    "C. -2/√5",
    "D. 2/√5"
  ],
  "answer": "A. -1/√5",
  "explanation": "Ta có 1 + cot²α = 1/sin²α ⇔ 1 + (-2)² = 1/sin²α ⇔ sin²α = 1/5. Vì 3π/2 < α < 2π (góc phần tư IV) nên sin α < 0 ⇒ sin α = -1/√5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Rút gọn biểu thức N = cos(α + 2026π) + sin(α - 3π/2) ta được:",
  "options": [
    "A. 2cos α",
    "B. 0",
    "C. 2sin α",
    "D. -2cos α"
  ],
  "answer": "A. 2cos α",
  "explanation": "Ta có cos(α + 2026π) = cos(α + 1013*2π) = cos α. Mặt khác sin(α - 3π/2) = sin(α + π/2 - 2π) = sin(α + π/2) = cos α. Do đó N = cos α + cos α = 2cos α."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Biểu diễn góc & Đổi đơn vị:**
   Cho góc lượng giác $\alpha = -\frac{19\pi}{6}$.
   a) Đổi góc $\alpha$ sang đơn vị độ.  
   b) Viết $\alpha$ dưới dạng $\alpha_0 + k2\pi$ với $0 \le \alpha_0 < 2\pi$.  
   c) Xác định điểm biểu diễn của góc $\alpha$ trên đường tròn lượng giác thuộc góc phần tư nào và tính các giá trị $\sin \alpha, \cos \alpha, \tan \alpha$.

2. **Tính giá trị biểu thức:**
   a) Cho $\sin \alpha = \frac{1}{3}$ với $0 < \alpha < \frac{\pi}{2}$. Tính giá trị biểu thức $A = \frac{\tan \alpha + 3\cot \alpha}{\sin \alpha + \cos \alpha}$.  
   b) Rút gọn biểu thức $B = \frac{\sin^4 x - \cos^4 x + \cos^2 x}{2(1 - \cos x)}$.

---

### Thử thách Thực tế: Chuyển động Vòng quay Mặt Trời (Ferris Wheel)

**Bối cảnh:** Tại một công viên giải trí, vòng quay Mặt Trời khổng lồ có bán kính $R = 30\text{ m}$. Tâm của vòng quay nằm ở độ cao $35\text{ m}$ so với mặt đất (do đó điểm thấp nhất của cabin cách mặt đất $5\text{ m}$ và điểm cao nhất cách mặt đất $65\text{ m}$).

Vòng quay quay đều theo chiều ngược chiều kim đồng hồ với tốc độ góc không đổi, hoàn thành một vòng quay trong thời gian $T = 60\text{ giây}$.

Tại thời điểm $t = 0$, một du khách bước vào cabin ở vị trí thấp nhất (điểm $C_0$).

<div style="margin: 20px 0; text-align: center;">
  <svg viewBox="0 0 340 260" style="max-width: 440px; width: 100%; height: auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
    <!-- Ground -->
    <line x1="20" y1="235" x2="320" y2="235" stroke="#475569" stroke-width="2" />
    <text x="270" y="250" font-size="11" font-weight="bold" fill="#475569">Mặt đất</text>

    <!-- Support structure -->
    <polygon points="170,115 130,235 210,235" fill="none" stroke="#94a3b8" stroke-width="2" />

    <!-- Wheel Circle: Center (170, 115), R = 85 (Scale: 1m = 2.83px, so R=30m -> 85px) -->
    <circle cx="170" cy="115" r="85" fill="none" stroke="#0284c7" stroke-width="2" />
    <circle cx="170" cy="115" r="4" fill="#0369a1" />
    <text x="175" y="112" font-size="10" font-weight="bold" fill="#0369a1">Tâm O (35m)</text>

    <!-- Cabin C0 at lowest position (170, 200) -> 5m from ground -->
    <circle cx="170" cy="200" r="5" fill="#dc2626" />
    <text x="178" y="204" font-size="10" font-weight="bold" fill="#dc2626">C₀ (t=0, 5m)</text>

    <!-- Cabin at t = 10s -> angle = -90 + 60 = -30 deg -> (170 + 85*cos(-30), 115 - 85*sin(-30)) = (170 + 73.6, 115 + 42.5) = (243.6, 157.5) -->
    <line x1="170" y1="115" x2="243.6" y2="157.5" stroke="#d97706" stroke-width="1.5" />
    <circle cx="243.6" cy="157.5" r="5" fill="#d97706" />
    <text x="249" y="161" font-size="10" font-weight="bold" fill="#d97706">C(t)</text>

    <!-- Height dimension line -->
    <line x1="290" y1="235" x2="290" y2="157.5" stroke="#059669" stroke-width="1.2" stroke-dasharray="3,3" />
    <text x="295" y="200" font-size="10" font-weight="bold" fill="#059669">h(t)</text>
  </svg>
  <div style="font-size: 12px; color: #64748b; margin-top: 6px;"><em>Hình 1.2: Mô hình chuyển động tròn đều của cabin vòng quay mặt trời trên hệ trục tọa độ</em></div>
</div>

**Nhiệm vụ của em:**
1. Tính tốc độ góc $\omega$ (đơn vị: $\text{rad/s}$) của vòng quay.
2. Tìm góc lượng giác $\alpha(t)$ biểu diễn vị trí của cabin tại thời điểm $t$ giây (chọn tia gốc là tia nằm ngang $Ox$ hướng sang phải).
3. Thiết lập công thức hàm số tính độ cao $h(t)$ (mét) của du khách so với mặt đất tại thời điểm $t$ giây ($0 \le t \le 60$).
4. Tính độ cao của du khách sau khi vòng quay xuất phát được $10\text{ giây}$, $15\text{ giây}$ và $30\text{ giây}$.

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Tốc độ góc: $\omega = \frac{2\pi}{T} = \frac{2\pi}{60} = \frac{\pi}{30}\text{ (rad/s)}$.
> 2. Vị trí ban đầu ở điểm thấp nhất ứng với góc $-\frac{\pi}{2}$ (hoặc $\frac{3\pi}{2}$). Sau thời gian $t$, góc quay tăng thêm $\omega t = \frac{\pi}{30}t$.  
>    Vậy $\alpha(t) = -\frac{\pi}{2} + \frac{\pi}{30}t\text{ (rad)}$.
> 3. Tọa độ tung độ của cabin so với tâm $O$: $y(t) = R \sin\left(\alpha(t)\right) = 30 \sin\left(-\frac{\pi}{2} + \frac{\pi}{30}t\right) = -30 \cos\left(\frac{\pi}{30}t\right)$.  
>    Độ cao so với mặt đất:  
>    $$h(t) = 35 + y(t) = 35 - 30\cos\left(\frac{\pi}{30}t\right) \text{ (mét)}$$
> 4. Kiểm tra tại các mốc thời gian:
>    - $t = 10\text{s} \implies h(10) = 35 - 30\cos\left(\frac{\pi}{3}\right) = 35 - 30(0,5) = 20\text{ m}$.
>    - $t = 15\text{s} \implies h(15) = 35 - 30\cos\left(\frac{\pi}{2}\right) = 35 - 0 = 35\text{ m}$ (ngang tâm trục quay).
>    - $t = 30\text{s} \implies h(30) = 35 - 30\cos(\pi) = 35 - 30(-1) = 65\text{ m}$ (đạt đỉnh cao nhất của vòng quay!).
