---
title: 'Toán 9 Bài 15: Độ dài của cung tròn - Diện tích hình quạt tròn và hình vành khuyên'
description: 'Lý thuyết và bài tập toàn diện Bài 15 Toán 9: Chu vi đường tròn, độ dài cung tròn l = pi*R*n/180, diện tích hình tròn, hình quạt tròn, hình vành khuyên, widget tương tác tính toán và 10 quiz trắc nghiệm chi tiết.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Hình học 9
  - Độ dài cung tròn
  - Chu vi đường tròn
  - Hình quạt tròn
  - Hình vành khuyên
  - Kết nối tri thức
grade: 9
---

# Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên

Số $\pi \approx 3{,}14159...$ là một trong những hằng số toán học kỳ diệu và bí ẩn nhất mà nhân loại từng tìm ra. Từ thời cổ đại, nhà bác học Archimedes thành Syracuse đã dùng phương pháp đa giác nội tiếp - ngoại tiếp để kẹp chặt giá trị của $\pi$ nhằm giải bài toán muôn thuở: **Làm sao đo được một đường cong bằng thước đo thẳng?**

Trong thực tế cuộc sống:
- Một bánh xe đạp hay ô tô lăn một vòng sẽ đưa phương tiện đi được quãng đường bằng đúng chu vi bánh xe.
- Chiếc quạt giấy xòe ra hay vòi tưới tự động xoay tròn trên cánh đồng tạo nên **hình quạt tròn**.
- Chiếc đĩa phanh xe máy, vòng bi cơ khí hay mặt cắt ống dẫn dầu tạo nên **hình vành khuyên**.

Làm thế nào để tính chính xác chiều dài mép cong của một chiếc bánh pizza, diện tích phần cỏ được máy tưới phủ kín, hay lượng kim loại cần dùng để đúc một vành bánh đà? Bài học hôm nay sẽ trang bị cho các em toàn bộ công thức và phương pháp tính toán chuẩn xác cho các hình thể hình học cong này!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐỘ DÀI CUNG & DIỆN TÍCH HÌNH PHẲNG CONG</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Chu vi & Độ dài cung tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Chu vi đường tròn: $C = 2\pi R = \pi d$.<br>• Cung $1^\circ$ có độ dài: $\frac{2\pi R}{360} = \frac{\pi R}{180}$.<br>• Cung $n^\circ$ có độ dài: $l = \frac{\pi R n}{180}$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Diện tích Hình tròn & Quạt tròn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Diện tích hình tròn: $S = \pi R^2$.<br>• Diện tích hình quạt $n^\circ$: $S_q = \frac{\pi R^2 n}{360}$.<br>• Mối liên hệ đặc biệt: $S_q = \frac{l \cdot R}{2}$ (tương tự diện tích tam giác!).</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Hình vành khuyên (Annulus)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Giới hạn bởi 2 đường tròn đồng tâm $(O; R_1)$ và $(O; R_2)$ ($R_2 > R_1$).<br>• $S_{vk} = \pi R_2^2 - \pi R_1^2 = \pi (R_2^2 - R_1^2)$.<br>• Bề rộng vành khuyên: $w = R_2 - R_1$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hình viên phân (Segment)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Phần hình tròn giới hạn bởi một cung và dây căng cung ấy.<br>• $S_{\text{viên phân}} = S_{\text{quạt } AOB} - S_{\triangle AOB}$ (với cung nhỏ).<br>• Dùng lượng giác tính $S_{\triangle AOB} = \frac{1}{2} R^2 \sin \alpha$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Chu vi:** Một đường tròn có bán kính $R = 7\text{ cm}$. Chu vi đường tròn đó bằng bao nhiêu (lấy $\pi \approx \frac{22}{7}$)?
2. **Độ dài cung nửa đường tròn:** Cung có số đo $180^\circ$ của đường tròn $(O; R)$ có độ dài bằng bao nhiêu?
3. **Diện tích hình tròn:** Nếu bán kính hình tròn tăng lên gấp đôi thì diện tích của nó tăng lên gấp mấy lần?
4. **Hình quạt tròn:** Một hình quạt tròn bán kính $R = 6\text{ cm}$ có số đo góc ở tâm là $60^\circ$. Diện tích của hình quạt đó bằng bao nhiêu $\pi$?
5. **Hình vành khuyên:** Hai đường tròn đồng tâm có bán kính lần lượt là $5\text{ cm}$ và $3\text{ cm}$. Diện tích hình vành khuyên giữa chúng là bao nhiêu $\pi$?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $C = 2\pi R \approx 2 \times \frac{22}{7} \times 7 = 44\text{ cm}$.
> 2. $l = \frac{\pi R \cdot 180}{180} = \pi R$ (bằng một nửa chu vi).
> 3. Tăng lên **4 lần** (vì diện tích tỉ lệ thuận với bình phương bán kính: $S \propto R^2$).
> 4. $S_q = \frac{\pi \cdot 6^2 \cdot 60}{360} = \frac{36\pi}{6} = 6\pi\text{ cm}^2$.
> 5. $S_{vk} = \pi (5^2 - 3^2) = \pi (25 - 9) = 16\pi\text{ cm}^2$.

---

## I. Lý thuyết Trọng tâm

### 1. Công thức tính Độ dài Đường tròn (Chu vi) và Độ dài Cung tròn

#### a) Độ dài đường tròn
Độ dài $C$ của một đường tròn bán kính $R$ (đường kính $d = 2R$) được tính theo công thức:
$$C = 2\pi R = \pi d$$
*(Trong các phép tính thực tế, ta thường lấy số thập phân xấp xỉ $\pi \approx 3{,}14$ hoặc phân số $\pi \approx \frac{22}{7}$).*

#### b) Độ dài cung tròn
Một đường tròn ứng với cung cả vòng tròn có số đo $360^\circ$ và độ dài là $2\pi R$.
- Cung $1^\circ$ trên đường tròn bán kính $R$ có độ dài là:
$$\frac{2\pi R}{360} = \frac{\pi R}{180}$$
- Cung $n^\circ$ trên đường tròn bán kính $R$ có độ dài $l$ là:
$$l = \frac{\pi R n}{180}$$

> [!NOTE]
> **Ý nghĩa của công thức độ dài cung:**
> Độ dài cung $l$ tỉ lệ thuận với bán kính $R$ và số đo độ $n^\circ$ của cung.
> Từ công thức $l = \frac{\pi R n}{180}$, ta có thể biến đổi để tìm:
> - Bán kính đường tròn: $R = \frac{180l}{\pi n}$
> - Số đo độ của cung: $n = \frac{180l}{\pi R}$

---

### 2. Công thức tính Diện tích Hình tròn và Hình quạt tròn

#### a) Diện tích hình tròn
Diện tích $S$ của một hình tròn bán kính $R$ (đường kính $d = 2R$) là:
$$S = \pi R^2 = \frac{\pi d^2}{4}$$

#### b) Diện tích hình quạt tròn
**Hình quạt tròn** là một phần hình tròn giới hạn bởi một cung tròn và hai bán kính đi qua hai đầu mút của cung đó.

- Toàn bộ hình tròn có góc ở tâm $360^\circ$ và diện tích là $\pi R^2$.
- Hình quạt tròn có số đo $1^\circ$ có diện tích là: $\frac{\pi R^2}{360}$.
- Hình quạt tròn bán kính $R$, cung $n^\circ$ có diện tích $S_q$:
$$S_q = \frac{\pi R^2 n}{360}$$

> [!NOTE]
> **Mối liên hệ tương đương tuyệt đẹp giữa $S_q$ và $l$:**
> Ta có thể viết lại:
> $$S_q = \frac{\pi R^2 n}{360} = \frac{\pi R n}{180} \cdot \frac{R}{2} = \frac{l \cdot R}{2}$$
> Công thức này có cấu trúc giống hệt công thức tính **diện tích tam giác**:
> $$\text{Diện tích quạt} = \frac{\text{đáy (độ dài cung } l) \times \text{chiều cao (bán kính } R)}{2}$$

---

### 3. Diện tích Hình vành khuyên (Annulus)

> [!NOTE]
> **Định nghĩa:**
> Hình vành khuyên (hay hình xuyến phẳng) là phần mặt phẳng nằm giữa hai đường tròn đồng tâm.
> 
> Cho hai đường tròn đồng tâm $(O; R_1)$ và $(O; R_2)$ với $R_2 > R_1$:
> - $R_1$: Bán kính đường tròn trong (bán kính nhỏ).
> - $R_2$: Bán kính đường tròn ngoài (bán kính lớn).
> - Chiều rộng của vành: $w = R_2 - R_1$.
> 
> **Công thức tính diện tích hình vành khuyên:**
> $$S_{vk} = S_{(O; R_2)} - S_{(O; R_1)} = \pi R_2^2 - \pi R_1^2 = \pi (R_2^2 - R_1^2)$$
> Hay:
> $$S_{vk} = \pi (R_2 - R_1)(R_2 + R_1)$$

---

## II. Mô phỏng Tương tác: Tính Toán Hình Quạt & Vành Khuyên

Thực nghiệm trực tiếp với bộ tính toán động dưới đây. Hãy điều chỉnh góc quét $n^\circ$ và hai bán kính $R_1, R_2$ để quan sát diện tích và độ dài cung được cập nhật tức thì theo thời gian thực!

<div class="interactive-circle-calc" style="background: var(--bg-secondary, #f8fafc); border: 2px solid #10b981; border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h4 style="margin-top: 0; color: #047857; text-align: center;">MÔ PHỎNG TRỰC QUAN: HÌNH QUẠT TRÒN & HÌNH VÀNH KHUYÊN</h4>
  
  <div style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; align-items: center; margin-top: 16px;">
    <!-- Visual Canvas -->
    <div style="flex: 1 1 300px; max-width: 340px; text-align: center;">
      <svg data-interactive-done="true" id="calcSvg" viewBox="0 0 320 320" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Annulus outer -->
        <circle cx="160" cy="160" r="130" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <!-- Annulus fill ring -->
        <path id="annulusPath" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
        <!-- Sector path -->
        <path id="sectorPath" fill="rgba(59, 130, 246, 0.35)" stroke="#2563eb" stroke-width="2" />
        <!-- Arc outline -->
        <path id="arcOutline" fill="none" stroke="#ef4444" stroke-width="3" />
        <!-- Center O -->
        <circle cx="160" cy="160" r="4.5" fill="#1e293b" />
        <text x="165" y="176" font-size="14" font-weight="bold" fill="#1e293b">O</text>
        <!-- Radius line OA -->
        <line id="lineOA" x1="160" y1="160" x2="280" y2="160" stroke="#1d4ed8" stroke-width="1.8" />
        <!-- Radius line OB -->
        <line id="lineOB" x1="160" y1="160" x2="160" y2="40" stroke="#1d4ed8" stroke-width="1.8" />
      </svg>
    </div>

    <!-- Sliders and Results -->
    <div style="flex: 1 1 320px; max-width: 400px;">
      <div style="margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.9em; display: flex; justify-content: space-between;">
          <span>Góc ở tâm $n^\circ$:</span>
          <span id="txtAngle" style="color: #2563eb; font-weight: bold;">90°</span>
        </label>
        <input type="range" id="sliderAngle" min="10" max="350" step="5" value="90" style="width: 100%; cursor: pointer;" />
      </div>

      <div style="margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.9em; display: flex; justify-content: space-between;">
          <span>Bán kính ngoài $R_2$ (hoặc $R$ của quạt):</span>
          <span id="txtR2" style="color: #047857; font-weight: bold;">10 cm</span>
        </label>
        <input type="range" id="sliderR2" min="6" max="13" step="0.5" value="10" style="width: 100%; cursor: pointer;" />
      </div>

      <div style="margin-bottom: 16px;">
        <label style="font-weight: 600; font-size: 0.9em; display: flex; justify-content: space-between;">
          <span>Bán kính trong $R_1$ (vành khuyên):</span>
          <span id="txtR1" style="color: #b45309; font-weight: bold;">6 cm</span>
        </label>
        <input type="range" id="sliderR1" min="2" max="10" step="0.5" value="6" style="width: 100%; cursor: pointer;" />
      </div>

      <!-- Result Cards -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.88em;">
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #ef4444; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">Độ dài cung $l$</div>
          <div id="resArc" style="font-size: 1.15em; font-weight: bold; color: #ef4444;">15.71 cm</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #2563eb; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">Diện tích quạt $S_q$</div>
          <div id="resSector" style="font-size: 1.15em; font-weight: bold; color: #2563eb;">78.54 cm²</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #047857; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">Chu vi tròn ngoài</div>
          <div id="resCirc" style="font-size: 1.15em; font-weight: bold; color: #047857;">62.83 cm</div>
        </div>
        <div style="background: var(--card-bg, #ffffff); border-left: 4px solid #f59e0b; padding: 10px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="color: #64748b; font-size: 0.8em;">Diện tích vành $S_{vk}$</div>
          <div id="resAnnulus" style="font-size: 1.15em; font-weight: bold; color: #b45309;">201.06 cm²</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  const sAngle = document.getElementById('sliderAngle');
  const sR2 = document.getElementById('sliderR2');
  const sR1 = document.getElementById('sliderR1');
  if (!sAngle || !sR2 || !sR1) return;

  const txtAngle = document.getElementById('txtAngle');
  const txtR2 = document.getElementById('txtR2');
  const txtR1 = document.getElementById('txtR1');
  const resArc = document.getElementById('resArc');
  const resSector = document.getElementById('resSector');
  const resCirc = document.getElementById('resCirc');
  const resAnnulus = document.getElementById('resAnnulus');

  const sectorPath = document.getElementById('sectorPath');
  const arcOutline = document.getElementById('arcOutline');
  const annulusPath = document.getElementById('annulusPath');
  const lineOA = document.getElementById('lineOA');
  const lineOB = document.getElementById('lineOB');

  const cx = 160, cy = 160, scale = 10; // 1cm = 10px

  function update() {
    let deg = parseFloat(sAngle.value);
    let r2 = parseFloat(sR2.value);
    let r1 = parseFloat(sR1.value);

    // Ensure r1 < r2
    if (r1 >= r2) {
      r1 = r2 - 0.5;
      sR1.value = r1;
    }

    txtAngle.textContent = deg + '°';
    txtR2.textContent = r2.toFixed(1) + ' cm';
    txtR1.textContent = r1.toFixed(1) + ' cm';

    // Math
    const l = (Math.PI * r2 * deg) / 180;
    const sq = (Math.PI * r2 * r2 * deg) / 360;
    const circ = 2 * Math.PI * r2;
    const svk = Math.PI * (r2 * r2 - r1 * r1);

    resArc.textContent = l.toFixed(2) + ' cm';
    resSector.textContent = sq.toFixed(2) + ' cm²';
    resCirc.textContent = circ.toFixed(2) + ' cm';
    resAnnulus.textContent = svk.toFixed(2) + ' cm²';

    // SVG Drawing
    const pxR2 = r2 * scale;
    const pxR1 = r1 * scale;
    const rad = (deg * Math.PI) / 180;

    // Point A at 0 deg (to the right: cx + pxR2, cy)
    const xA = cx + pxR2;
    const yA = cy;

    // Point B at deg (clockwise)
    const xB = cx + pxR2 * Math.cos(rad);
    const yB = cy - pxR2 * Math.sin(rad); // negative for SVG upward y

    const largeArcFlag = deg > 180 ? 1 : 0;

    // Sector path: M cx cy L xA yA A pxR2 pxR2 0 largeArcFlag 0 xB yB Z
    const secD = `M ${cx} ${cy} L ${xA} ${yA} A ${pxR2} ${pxR2} 0 ${largeArcFlag} 0 ${xB} ${yB} Z`;
    sectorPath.setAttribute('d', secD);

    // Arc path
    const arcD = `M ${xA} ${yA} A ${pxR2} ${pxR2} 0 ${largeArcFlag} 0 ${xB} ${yB}`;
    arcOutline.setAttribute('d', arcD);

    // Radii lines
    lineOA.setAttribute('x2', xA);
    lineOA.setAttribute('y2', yA);
    lineOB.setAttribute('x2', xB);
    lineOB.setAttribute('y2', yB);

    // Annulus path (two circles with evenodd fill)
    const annD = `M ${cx - pxR2} ${cy} a ${pxR2} ${pxR2} 0 1 0 ${2*pxR2} 0 a ${pxR2} ${pxR2} 0 1 0 ${-2*pxR2} 0 M ${cx - pxR1} ${cy} a ${pxR1} ${pxR1} 0 1 1 ${2*pxR1} 0 a ${pxR1} ${pxR1} 0 1 1 ${-2*pxR1} 0`;
    annulusPath.setAttribute('d', annD);
  }

  sAngle.addEventListener('input', update);
  sR2.addEventListener('input', update);
  sR1.addEventListener('input', update);
  update();
})();
</script>

---

## III. Các Dạng Toán Trọng Tâm & Phương Pháp Giải

### Dạng 1: Tính Độ dài Cung tròn và các Đại lượng Liên quan

> [!TIP]
> **Phương pháp cốt lõi:**
> Xuất phát từ công thức:
> $$l = \frac{\pi R n}{180}$$
> - Nếu tìm $l$: Thay trực tiếp $R$ và $n$.
> - Nếu tìm $R$: $R = \frac{180l}{\pi n}$.
> - Nếu tìm số đo cung $n^\circ$: $n = \frac{180l}{\pi R}$.

#### Bài toán mẫu 1.1:
Một cung tròn có số đo $72^\circ$ trên một đường tròn có độ dài là $4\pi\text{ cm}$.
a) Tính bán kính $R$ và chu vi của đường tròn đó.
b) Tính độ dài của cung $120^\circ$ trên cùng đường tròn này.

**Lời giải chi tiết:**
a) Từ công thức độ dài cung: $l = \frac{\pi R n}{180}$, thay $l = 4\pi$ và $n = 72$:
$$4\pi = \frac{\pi R \cdot 72}{180} \iff 4 = \frac{2}{5} R \iff R = \frac{4 \times 5}{2} = 10\text{ cm}$$
Chu vi của đường tròn là:
$$C = 2\pi R = 2\pi \times 10 = 20\pi \approx 62{,}83\text{ cm}$$

b) Độ dài của cung có số đo $n' = 120^\circ$ là:
$$l' = \frac{\pi R n'}{180} = \frac{\pi \times 10 \times 120}{180} = \frac{20\pi}{3} \approx 20{,}94\text{ cm}$$

---

### Dạng 2: Tính Diện tích Hình quạt tròn

> [!TIP]
> **Phương pháp cốt lõi:**
> - Sử dụng một trong hai công thức:
> $$S_q = \frac{\pi R^2 n}{360} \quad \text{hoặc} \quad S_q = \frac{l \cdot R}{2}$$
> - Nếu đề bài cho độ dài cung $l$ và bán kính $R$, ưu tiên dùng ngay $S_q = \frac{l \cdot R}{2}$ mà không cần qua bước trung gian tính góc $n^\circ$.

#### Bài toán mẫu 2.1:
Cho hình quạt tròn $(O; R)$ có độ dài cung tròn bằng $8\pi\text{ cm}$ và diện tích hình quạt bằng $48\pi\text{ cm}^2$.
a) Tính bán kính $R$ của đường tròn.
b) Tính số đo độ của cung tròn ứng với hình quạt đó.

**Lời giải chi tiết:**
a) Áp dụng công thức liên hệ giữa diện tích hình quạt và độ dài cung:
$$S_q = \frac{l \cdot R}{2} \iff 48\pi = \frac{8\pi \cdot R}{2} \iff 48\pi = 4\pi R \implies R = \frac{48\pi}{4\pi} = 12\text{ cm}$$
Vậy bán kính của đường tròn là $12\text{ cm}$.

b) Tính số đo độ $n^\circ$ của cung:
Thay $R = 12$ và $l = 8\pi$ vào công thức $l = \frac{\pi R n}{180}$:
$$8\pi = \frac{\pi \times 12 \times n}{180} \iff 8 = \frac{n}{15} \implies n = 8 \times 15 = 120^\circ$$
Vậy số đo của cung hình quạt tròn là $120^\circ$.

---

### Dạng 3: Tính Diện tích Hình vành khuyên và Hình viên phân

> [!TIP]
> **Phương pháp cốt lõi:**
> 1. **Hình vành khuyên:** $S_{vk} = \pi (R_2^2 - R_1^2)$.
>    - *Chú ý bài toán dây tiếp tuyến:* Nếu một dây $AB$ của đường tròn lớn tiếp xúc với đường tròn nhỏ tại $H$, thì $AB \perp OH$ tại $H \implies AH = \frac{AB}{2}$.
>    Trong tam giác vuông $OHA$: $OA^2 - OH^2 = AH^2 \implies R_2^2 - R_1^2 = \left(\frac{AB}{2}\right)^2$.
>    Khi đó diện tích hình vành khuyên được tính cực kỳ bất ngờ:
>    $$S_{vk} = \pi \left(\frac{AB}{2}\right)^2$$
>    *(Chỉ phụ thuộc vào độ dài dây tiếp xúc $AB$, không cần biết riêng lẻ $R_1$ và $R_2$!)*
> 2. **Hình viên phân (cung nhỏ $AB$):**
>    $$S_{\text{viên phân}} = S_{\text{quạt } AOB} - S_{\triangle AOB}$$

#### Bài toán mẫu 3.1:
Cho đường tròn $(O; R = 6\text{ cm})$ và dây $AB = 6\text{ cm}$.
Tính diện tích hình viên phân giới hạn bởi dây $AB$ và cung nhỏ $AB$.

**Lời giải chi tiết:**

```
          O
         / \
        /   \
       A-----B
        \___/  <-- Hình viên phân
```

1. Tính số đo góc ở tâm $\widehat{AOB}$:
Tam giác $OAB$ có $OA = OB = AB = 6\text{ cm} \implies \triangle OAB$ là tam giác đều.
Do đó $\widehat{AOB} = 60^\circ \implies \text{số đo cung } AB = 60^\circ$.

2. Tính diện tích hình quạt tròn $OAB$:
$$S_{\text{quạt}} = \frac{\pi R^2 n}{360} = \frac{\pi \times 6^2 \times 60}{360} = \frac{36\pi}{6} = 6\pi\text{ cm}^2$$

3. Tính diện tích tam giác đều $OAB$:
Diện tích tam giác đều cạnh $a = 6\text{ cm}$ là:
$$S_{\triangle OAB} = \frac{a^2 \sqrt{3}}{4} = \frac{6^2 \sqrt{3}}{4} = 9\sqrt{3}\text{ cm}^2$$

4. Tính diện tích hình viên phân:
$$S_{\text{viên phân}} = S_{\text{quạt}} - S_{\triangle OAB} = 6\pi - 9\sqrt{3} \approx 6 \times 3{,}1416 - 9 \times 1{,}732 \approx 18{,}85 - 15{,}59 = 3{,}26\text{ cm}^2$$

---

### Dạng 4: Bài toán Thực tế và Tối ưu Hóa Diện tích

> [!TIP]
> **Phương pháp cốt lõi:**
> - Chuyển đổi linh hoạt giữa vòng quay bánh xe, quãng đường ($S = N \times C = N \times 2\pi R$) và vận tốc ($v = \frac{S}{t}$).
> - Thiết kế cắt ghép vật liệu: Diện tích hình tròn nội tiếp, diện tích phôi thừa bị cắt bỏ khi đục khoét hình tròn từ tấm tôn hình vuông ($S_{\text{thừa}} = S_{\text{vuông}} - S_{\text{tròn}} = 4R^2 - \pi R^2 = (4 - \pi)R^2$).

#### Bài toán mẫu 4.1:
Một vòi phun nước xoay tròn tự động đặt trên một bãi cỏ công viên có tầm phun xa tối đa là $8\text{ m}$.
a) Nếu vòi phun quay liên tục cả vòng tròn $360^\circ$, hãy tính diện tích mặt cỏ được tưới nước.
b) Do góc sân có một bức tường chắn gạch vuông góc, người quản lý điều chỉnh để vòi chỉ quét một góc $135^\circ$. Tính diện tích mặt cỏ được tưới trong chế độ này (lấy $\pi \approx 3{,}14$).

**Lời giải chi tiết:**
a) Khi vòi quay cả vòng tròn $360^\circ$, phần cỏ được tưới tạo thành một hình tròn bán kính $R = 8\text{ m}$.
Diện tích mặt cỏ được tưới là:
$$S = \pi R^2 = \pi \times 8^2 = 64\pi \approx 64 \times 3{,}14 = 200{,}96\text{ m}^2$$

b) Khi vòi chỉ quét một góc $n = 135^\circ$, phần mặt cỏ được tưới là một hình quạt tròn bán kính $R = 8\text{ m}$ và góc ở tâm $135^\circ$.
Diện tích mặt cỏ được tưới lúc này là:
$$S_q = \frac{\pi R^2 n}{360} = \frac{\pi \times 8^2 \times 135}{360} = \frac{64\pi \times 3}{8} = 24\pi \approx 24 \times 3{,}14 = 75{,}36\text{ m}^2$$

---

## IV. 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

```
      ỨNG DỤNG HÌNH HỌC TRÒN TRONG ĐỜI SỐNG
 ┌────────────────────────────────────────────────────────┐
 │ 1. Odometer xe máy & Hệ thống chống bó cứng phanh ABS  │
 │ 2. Cánh quạt năng lượng mặt trời vệ tinh không gian   │
 │ 3. Hệ thống tưới tự động nông nghiệp Center-Pivot      │
 │ 4. Thiết kế đĩa phanh xe tản nhiệt & Vành khuyên ma sát│
 │ 5. Vòng tròn đồng hồ thiên văn & Vận tốc kim giây      │
 └────────────────────────────────────────────────────────┘
```

### 1. Đồng hồ đo quãng đường Odometer & Cảm biến phanh ABS
Cảm biến tốc độ xe máy và ô tô gắn trên vành bánh xe đếm số vòng quay của bánh xe trong một đơn vị thời gian.
- Nếu đường kính lốp xe là $d = 60\text{ cm}$, chu vi một vòng lăn là $C = \pi d \approx 1{,}885\text{ m}$.
- Cứ mỗi 1000 vòng quay, xe đã di chuyển được quãng đường $S = 1000 \times 1{,}885 = 1885\text{ m} = 1{,}885\text{ km}$.
Hệ thống phanh điện tử ABS dựa chính xác vào công thức này để nhận diện bánh xe có bị trượt lết trên đường hay không khi phanh gấp.

### 2. Tấm pin mặt trời dạng nan quạt trên trạm vũ trụ
Các tàu thăm dò không gian như tàu *Lucy* của NASA (thăm dò các tiểu hành tinh Trojan của Sao Mộc) sử dụng hai tấm pin năng lượng mặt trời hình tròn khổng lồ đường kính $7{,}3\text{ m}$. Khi phóng lên bằng tên lửa đẩy, các tấm pin được gập lại như những chiếc quạt giấy, và khi vào quỹ đạo, chúng xòe ra từng cung hình quạt tròn $360^\circ$ để tối đa hóa diện tích thu nhận bức xạ Mặt Trời trong không gian sâu thẳm.

### 3. Nông nghiệp thông minh: Cánh đồng tròn Center-Pivot
Khi bay qua các vùng đất nông nghiệp tại Mỹ, Ả Rập Xê Út hay Tây Nguyên (Việt Nam), hành khách trên máy bay thường ngạc nhiên thấy những cánh đồng hình tròn xanh mướt giữa sa mạc. Đó là hệ thống tưới tự động xoay quanh một giếng nước trung tâm (Center-Pivot Irrigation). Cánh tay đòn bằng thép dài hàng trăm mét di chuyển quét thành các **hình quạt tròn**, bảo đảm mỗi mét vuông cây trồng đều nhận đủ lượng nước theo đúng diện tích quạt tròn đã tính toán.

### 4. Đĩa phanh xe máy & Hình vành khuyên ma sát
Mặt tiếp xúc của má phanh với đĩa phanh xe máy chính là một **hình vành khuyên**. Các kỹ sư cơ khí tính toán diện tích hình vành khuyên này ($S = \pi(R_2^2 - R_1^2)$) để cân bằng giữa hai yếu tố: diện tích ma sát đủ lớn để hãm xe an toàn, và diện tích vành đủ thông thoáng để tản nhiệt nhanh chóng, chống sôi dầu phanh và cong vênh đĩa.

### 5. Đồng hồ Tháp Big Ben và Vận tốc đầu mút kim
Kim phút của tháp đồng hồ Big Ben (London) dài $4{,}2\text{ m}$. Trong một giờ ($60$ phút), đầu mút kim phút quét qua một góc $360^\circ$, đi hết quãng đường bằng đúng chu vi đường tròn:
$$C = 2\pi R = 2\pi \times 4{,}2 \approx 26{,}39\text{ m}$$
Như vậy mỗi phút, đầu kim phút di chuyển một cung dài khoảng $44\text{ cm}$ — mắt thường hoàn toàn có thể nhìn thấy đầu kim chuyển động!

---

## V. 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Công thức nào sau đây tính độ dài cung tròn có số đo n° trên đường tròn bán kính $R$?",
  "options": [
    "A. $l = \\frac{\\pi R n}{360}$",
    "B. $l = \\frac{\\pi R n}{180}$",
    "C. $l = \\frac{\\pi R^2 n}{180}$",
    "D. $l = \\frac{2\\pi R}{n}$"
  ],
  "correct": 1,
  "explanation": "Độ dài cung n° được tính theo công thức $l = \\frac{\\pi R n}{180}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Một đường tròn có chu vi bằng $16\\pi\\text{ cm}$. Bán kính của đường tròn đó là:",
  "options": [
    "A. 4 cm",
    "B. 8 cm",
    "C. 16 cm",
    "D. 32 cm"
  ],
  "correct": 1,
  "explanation": "Ta có $C = 2\\pi R = 16\\pi \\implies R = \\frac{16\\pi}{2\\pi} = 8\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Độ dài cung 60° của đường tròn có bán kính $R = 9\\text{ cm}$ là:",
  "options": [
    "A. $3\\pi\\text{ cm}$",
    "B. $6\\pi\\text{ cm}$",
    "C. $18\\pi\\text{ cm}$",
    "D. $1{,}5\\pi\\text{ cm}$"
  ],
  "correct": 0,
  "explanation": "Áp dụng công thức $l = \\frac{\\pi R n}{180} = \\frac{\\pi \\times 9 \\times 60}{180} = 3\\pi\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Diện tích hình tròn thay đổi thế nào nếu đường kính của nó giảm đi một nửa?",
  "options": [
    "A. Giảm đi 2 lần",
    "B. Giảm đi 4 lần",
    "C. Giảm đi 8 lần",
    "D. Không đổi"
  ],
  "correct": 1,
  "explanation": "Diện tích hình tròn là $S = \\frac{\\pi d^2}{4}$. Khi đường kính giảm một nửa ($d\\prime = \\frac{d}{2}$) thì $S\\prime = \\frac{\\pi (d/2)^2}{4} = \\frac{S}{4}$, tức là diện tích giảm đi 4 lần."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Diện tích của một hình quạt tròn bán kính $R = 6\\text{ cm}$, góc ở tâm 120° là:",
  "options": [
    "A. $6\\pi\\text{ cm}^2$",
    "B. $12\\pi\\text{ cm}^2$",
    "C. $18\\pi\\text{ cm}^2$",
    "D. $24\\pi\\text{ cm}^2$"
  ],
  "correct": 1,
  "explanation": "Diện tích hình quạt tròn: $S_q = \\frac{\\pi R^2 n}{360} = \\frac{\\pi \\times 6^2 \\times 120}{360} = \\frac{36\\pi}{3} = 12\\pi\\text{ cm}^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Một hình quạt tròn có diện tích $30\\pi\\text{ cm}^2$ và độ dài cung tròn bằng $5\\pi\\text{ cm}$. Bán kính của hình quạt đó là:",
  "options": [
    "A. 6 cm",
    "B. 10 cm",
    "C. 12 cm",
    "D. 15 cm"
  ],
  "correct": 2,
  "explanation": "Sử dụng công thức liên hệ $S_q = \\frac{l \\cdot R}{2} \\implies 30\\pi = \\frac{5\\pi \\cdot R}{2} \\implies 5R = 60 \\implies R = 12\\text{ cm}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Diện tích hình vành khuyên giới hạn bởi hai đường tròn đồng tâm có bán kính $R_1 = 4\\text{ cm}$ và $R_2 = 5\\text{ cm}$ bằng:",
  "options": [
    "A. $9\\pi\\text{ cm}^2$",
    "B. $\\pi\\text{ cm}^2$",
    "C. $41\\pi\\text{ cm}^2$",
    "D. $20\\pi\\text{ cm}^2$"
  ],
  "correct": 0,
  "explanation": "Diện tích hình vành khuyên là $S_{vk} = \\pi (R_2^2 - R_1^2) = \\pi (5^2 - 4^2) = \\pi (25 - 16) = 9\\pi\\text{ cm}^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một bánh xe đạp có bán kính $35\\text{ cm}$. Khi bánh xe lăn được 100 vòng thì chiếc xe đã đi được quãng đường xấp xỉ bằng bao nhiêu (lấy $\\pi \\approx \\frac{22}{7}$)?",
  "options": [
    "A. 110 m",
    "B. 220 m",
    "C. 440 m",
    "D. 770 m"
  ],
  "correct": 1,
  "explanation": "Chu vi bánh xe: $C = 2\\pi R = 2 \\times \\frac{22}{7} \\times 35 = 220\\text{ cm} = 2{,}2\\text{ m}$. Khi lăn 100 vòng, quãng đường đi được là $S = 100 \\times 2{,}2 = 220\\text{ m}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho hai đường tròn đồng tâm. Một dây $AB = 10\\text{ cm}$ của đường tròn lớn tiếp xúc với đường tròn nhỏ. Diện tích hình vành khuyên nằm giữa hai đường tròn đó bằng:",
  "options": [
    "A. $100\\pi\\text{ cm}^2$",
    "B. $50\\pi\\text{ cm}^2$",
    "C. $25\\pi\\text{ cm}^2$",
    "D. $10\\pi\\text{ cm}^2$"
  ],
  "correct": 2,
  "explanation": "Gọi $H$ là tiếp điểm của $AB$ với đường tròn nhỏ $\\implies OH \\perp AB$ tại trung điểm $H \\implies AH = 5\\text{ cm}$. Trong $\\triangle OAH$: $R_2^2 - R_1^2 = AH^2 = 5^2 = 25$. Do đó diện tích hình vành khuyên là $S_{vk} = \\pi (R_2^2 - R_1^2) = 25\\pi\\text{ cm}^2$."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Một cung tròn có bán kính $R = 4\\text{ cm}$ và độ dài cung $l = 2\\pi\\text{ cm}$. Số đo độ của cung tròn đó là:",
  "options": [
    "A. 45°",
    "B. 90°",
    "C. 120°",
    "D. 180°"
  ],
  "correct": 1,
  "explanation": "Từ $l = \\frac{\\pi R n}{180}$, thay số: $2\\pi = \\frac{\\pi \\times 4 \\times n}{180} \\iff 2 = \\frac{n}{45} \\implies n = 90°$."
}'></div>

---

## VI. Thử thách Thực tế & Bài tập Tự luyện

### Thử thách Thực tế: Thiết kế Bồn Hoa Vành Khuyên Công Viên
Ban quản lý một công viên trung tâm dự định xây dựng một bồn hoa hình vành khuyên bao quanh một đài phun nước hình tròn ở chính giữa:
- Bán kính của hồ phun nước ở trung tâm là $R_1 = 3\text{ m}$.
- Lối trồng hoa là một hình vành khuyên có chiều rộng đúng $w = 2\text{ m}$.
- Chi phí trồng thảm hoa mười giờ là $150.000\text{ đồng/m}^2$.
- Viền đá trang trí bao quanh cả mép trong và mép ngoài của bồn hoa có chi phí hoàn thiện là $80.000\text{ đồng/m}$.
Hãy tính tổng kinh phí để hoàn thiện công trình bồn hoa trên (lấy $\pi \approx 3{,}14$).

> [!TIP]
> **Hướng dẫn giải thử thách:**
> 1. Bán kính ngoài của bồn hoa: $R_2 = R_1 + w = 3 + 2 = 5\text{ m}$.
> 2. Diện tích trồng hoa (diện tích hình vành khuyên):
>    $$S_{vk} = \pi (R_2^2 - R_1^2) = \pi (5^2 - 3^2) = 16\pi \approx 16 \times 3{,}14 = 50{,}24\text{ m}^2$$
>    Chi phí trồng hoa: $50{,}24 \times 150.000 = 7.536.000\text{ đồng}$.
> 3. Tổng chiều dài viền đá (chu vi mép ngoài + chu vi mép trong):
>    $$L = C_1 + C_2 = 2\pi R_1 + 2\pi R_2 = 2\pi (R_1 + R_2) = 2\pi (3 + 5) = 16\pi \approx 50{,}24\text{ m}$$
>    Chi phí làm viền đá: $50{,}24 \times 80.000 = 4.019.200\text{ đồng}$.
> 4. Tổng kinh phí hoàn thiện:
>    $$\text{Tổng} = 7.536.000 + 4.019.200 = 11.555.200\text{ đồng}$$

---

### Bài tập Tự luyện

**Bài 1:** Cho tam giác $ABC$ vuông cân tại $A$ có $AB = AC = 4\text{ cm}$. Vẽ cung tròn tâm $A$ bán kính $AB$ nằm trong tam giác.
a) Tính độ dài cung tròn đó.
b) Tính diện tích hình quạt tròn tạo bởi hai cạnh $AB, AC$ và cung tròn ấy.
c) Tính diện tích phần còn lại của tam giác nằm bên ngoài hình quạt.

**Bài 2:** Cho đường tròn $(O; 10\text{ cm})$ và điểm $M$ sao cho $OM = 6\text{ cm}$. Kẻ dây $AB$ đi qua $M$ và vuông góc với $OM$.
a) Tính độ dài dây $AB$.
b) Tính số đo của góc ở tâm $\widehat{AOB}$.
c) Tính diện tích hình viên phân giới hạn bởi dây $AB$ và cung nhỏ $AB$.

**Bài 3:** Một chiếc quạt giấy xòe ra tạo thành một hình quạt tròn có góc ở tâm là $150^\circ$. Phần nan quạt tre lộ ra (không dán giấy) dài $10\text{ cm}$, phần dán giấy kéo dài đến hết mép quạt dài $25\text{ cm}$ (tính từ trục đinh tâm quạt).
a) Tính diện tích phần giấy dán trên hai mặt của chiếc quạt.
b) Tính độ dài đường viền mép trên cùng của quạt.
