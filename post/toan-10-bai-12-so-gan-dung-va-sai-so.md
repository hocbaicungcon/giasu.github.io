---
title: 'Toán 10 Bài 12: Số gần đúng và sai số - Lý thuyết, Widget tương tác & Bài tập có đáp án'
description: 'Làm chủ lý thuyết Số gần đúng và sai số Toán 10: Sai số tuyệt đối, sai số tương đối, quy tắc làm tròn theo độ chính xác d, chữ số chắc, widget tính sai số trực quan và 10 câu hỏi trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Thống kê 10
  - Số gần đúng và sai số
  - Sai số tuyệt đối
  - Sai số tương đối
  - Quy tròn số
  - Kết nối tri thức
grade: 10
---

# Bài 12. Số gần đúng và sai số

Trong mọi lĩnh vực đo đạc vật lí, sản xuất công nghiệp bán dẫn, trắc địa bản đồ đến định lượng y dược, con người hầu như không bao giờ thu được giá trị tuyệt đối chính xác mà luôn làm việc với **số gần đúng**. Hiểu rõ bản chất của sai số và quy tắc quy tròn không chỉ là yêu cầu trọng tâm của chương trình Toán 10 mà còn là tư duy khoa học nền tảng cho mọi ngành kỹ thuật thực nghiệm.

---

## 1. Sơ đồ tư duy (Mindmap) Số gần đúng & Sai số

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Khái niệm cơ bản</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • <strong>Số đúng ($a$):</strong> Giá trị thực tế chính xác tuyệt đối.<br>
      • <strong>Số gần đúng ($\bar{a}$):</strong> Giá trị xấp xỉ dùng thay thế cho $a$.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Sai số tuyệt đối & Độ chính xác</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • <strong>Sai số tuyệt đối:</strong> $\Delta_a = |a - \bar{a}|$.<br>
      • <strong>Độ chính xác $d$:</strong> $\Delta_a \le d \iff \bar{a} - d \le a \le \bar{a} + d$.<br>
      • Kí hiệu: $a = \bar{a} \pm d$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Sai số tương đối</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • <strong>Định nghĩa:</strong> $\delta_a = \frac{\Delta_a}{|\bar{a}|} \le \frac{d}{|\bar{a}|}$.<br>
      • Thể hiện chất lượng của phép đo (càng nhỏ càng chính xác).
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Quy tắc làm tròn số</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Nếu $d$ ở hàng phần nghìn $\to$ quy tròn đến hàng phần trăm.<br>
      • Nguyên tắc: Làm tròn đến hàng liền trước (hàng cao hơn một bậc) của hàng chứa độ chính xác $d$.
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo tính nhẩm

1. **Khối lượng Trái Đất xấp xỉ $5,97 \times 10^{24}\text{ kg}$ là số đúng hay số gần đúng?**  
   *Đáp án:* Số gần đúng, vì không có cân nào đo được chính xác tuyệt đối từng gram của cả hành tinh.
2. **Cho biết chiều dài cây cầu là $L = 350\text{ m} \pm 0,5\text{ m}$. Chiều dài thật nằm trong khoảng nào?**  
   *Đáp án:* Từ $349,5\text{ m}$ đến $350,5\text{ m}$.
3. **Mẹo làm tròn theo độ chính xác $d$:**  
   Nếu độ chính xác $d = 0,03$ (chữ số khác 0 đầu tiên ở hàng phần trăm), ta quy tròn số gần đúng đến hàng nào?  
   *Mẹo:* Hàng của $d$ là hàng phần trăm $\Rightarrow$ Quy tròn đến **hàng phần mười** (cao hơn 1 hàng).
4. **Đo chiều dài cây bút $l = 15\text{ cm} \pm 0,1\text{ cm}$ và đo khoảng cách hai cột điện $S = 50\text{ m} \pm 0,1\text{ m}$. Phép đo nào chuẩn xác hơn?**  
   *Đáp án:* Đo khoảng cách hai cột điện chuẩn xác hơn vì sai số tương đối $\delta = \frac{0,1}{5000} = 0,002\%$ nhỏ hơn nhiều so với $\frac{0,1}{15} \approx 0,67\%$.
5. **Số $\pi \approx 3,14159265...$ khi làm tròn đến hàng phần nghìn là bao nhiêu?**  
   *Đáp án:* $3,142$ (vì chữ số ngay sau hàng phần nghìn là $5$).

---

## 3. Lý thuyết trọng tâm

### 3.1. Số đúng và số gần đúng

- Trong thực tế, các đại lượng thu được qua đếm số đối tượng nguyên vẹn (như số học sinh trong lớp, số ngày trong tuần) là **số đúng**.
- Các đại lượng đo đạc bằng dụng cụ (độ dài, thời gian, khối lượng, điện áp, nhiệt độ) hoặc các hằng số vô tỉ ($\pi, \sqrt{2}, e$) đều phải dùng **số gần đúng**.

### 3.2. Sai số tuyệt đối và độ chính xác $d$

> [!NOTE]
> Cho $a$ là số đúng và $\bar{a}$ là số gần đúng của $a$.
> 1. Đại lượng $\Delta_a = |a - \bar{a}|$ gọi là **sai số tuyệt đối** của số gần đúng $\bar{a}$.
> 2. Nếu ta biết số thực dương $d$ sao cho $\Delta_a \le d$, ta nói $\bar{a}$ là số gần đúng của $a$ với **độ chính xác $d$**, kí hiệu:
>    $$a = \bar{a} \pm d \quad \text{hay} \quad \bar{a} - d \le a \le \bar{a} + d$$

> [!WARNING]
> Thông thường ta **không biết giá trị số đúng $a$**, nên không thể tính trực tiếp được sai số tuyệt đối $\Delta_a$. Thay vào đó, ta phải **ước lượng chặn trên** của sai số qua độ chính xác $d$ (thường là cấp chính xác của dụng cụ đo hoặc vạch chia nhỏ nhất).

### 3.3. Sai số tương đối

> [!NOTE]
> **Sai số tương đối** của số gần đúng $\bar{a}$ (kí hiệu $\delta_a$) là tỉ số giữa sai số tuyệt đối và giá trị tuyệt đối của $\bar{a}$:
> $$\delta_a = \frac{\Delta_a}{|\bar{a}|}$$
> Do $\Delta_a \le d$, ta có ước lượng:
> $$\delta_a \le \frac{d}{|\bar{a}|}$$
> Sai số tương đối thường được viết dưới dạng **phần trăm (%)**. Giá trị $\delta_a$ càng nhỏ thì chất lượng phép đo hoặc phép tính càng cao.

### 3.4. Quy tròn số gần đúng theo độ chính xác $d$

> [!TIP]
> **Quy tắc làm tròn chuẩn Bộ GD&ĐT:**
> 1. Xác định hàng của chữ số khác không đầu tiên tính từ trái sang phải của độ chính xác $d$.
> 2. Quy tròn số gần đúng $\bar{a}$ đến **hàng liền trước (cao hơn một bậc)** của hàng tìm được ở bước 1.
>
> *Ví dụ:*
> - Cho $\bar{a} = 345,678$ với $d = 0,02$:
>   - $d = 0,02$ có chữ số đầu tiên ở **hàng phần trăm**.
>   - Ta làm tròn $\bar{a}$ đến **hàng phần mười** $\Rightarrow 345,7$.
> - Cho $\bar{a} = 12543$ với $d = 30$:
>   - $d = 30$ có chữ số đầu tiên ở **hàng chục**.
>   - Ta làm tròn $\bar{a}$ đến **hàng trăm** $\Rightarrow 12500$.

---

## 4. Widget tương tác: Máy Tính Sai Số & Quy Tròn Động

Bạn hãy nhập số gần đúng $\bar{a}$ và độ chính xác $d$ để máy tính tự động phân tích khoảng giá trị thực, sai số tương đối và kết quả quy tròn chuẩn xác:

```html
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🔬 Công Cụ Phân Tích Sai Số & Quy Tròn Chuẩn</h3>
    <span style="font-size: 0.85rem; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Tương tác trực tiếp</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
    <div>
      <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 4px;">Số gần đúng $\bar{a}$:</label>
      <input type="number" id="inputA" value="384.267" step="any" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 1rem; box-sizing: border-box;" />
    </div>
    <div>
      <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 4px;">Độ chính xác $d$:</label>
      <input type="number" id="inputD" value="0.05" step="any" min="0.000001" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 1rem; box-sizing: border-box;" />
    </div>
  </div>

  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
    <table style="width: 100%; font-size: 0.95rem; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Khoảng giá trị đúng $a$:</td>
        <td style="padding: 8px 0; font-weight: bold; text-align: right; color: #2563eb;" id="rangeVal">[384.217; 384.317]</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Sai số tương đối $\delta_a \le$:</td>
        <td style="padding: 8px 0; font-weight: bold; text-align: right; color: #16a34a;" id="relErrVal">0.0130%</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Hàng quy tròn:</td>
        <td style="padding: 8px 0; font-weight: bold; text-align: right; color: #d97706;" id="roundUnit">Hàng phần mười</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Kết quả quy tròn:</td>
        <td style="padding: 8px 0; font-weight: 800; font-size: 1.15rem; text-align: right; color: #dc2626;" id="roundResult">384.3</td>
      </tr>
    </table>
  </div>
</div>

<script>
(() => {
  const inputA = document.getElementById('inputA');
  const inputD = document.getElementById('inputD');
  const rangeVal = document.getElementById('rangeVal');
  const relErrVal = document.getElementById('relErrVal');
  const roundUnit = document.getElementById('roundUnit');
  const roundResult = document.getElementById('roundResult');

  function analyze() {
    const a = parseFloat(inputA.value);
    const d = Math.abs(parseFloat(inputD.value));

    if (isNaN(a) || isNaN(d) || d === 0) return;

    // Range
    const low = (a - d).toFixed(5).replace(/\.?0+$/, '');
    const high = (a + d).toFixed(5).replace(/\.?0+$/, '');
    rangeVal.textContent = `[${low}; ${high}]`;

    // Relative error
    const rel = (d / Math.abs(a)) * 100;
    relErrVal.textContent = `${rel.toFixed(4)}%`;

    // Determine unit of d
    const logD = Math.floor(Math.log10(d));
    const roundPower = logD + 1; // Round to unit 10^(logD + 1)
    
    let unitName = '';
    if (roundPower === -3) unitName = 'Hàng phần nghìn';
    else if (roundPower === -2) unitName = 'Hàng phần trăm';
    else if (roundPower === -1) unitName = 'Hàng phần mười';
    else if (roundPower === 0) unitName = 'Hàng đơn vị';
    else if (roundPower === 1) unitName = 'Hàng chục';
    else if (roundPower === 2) unitName = 'Hàng trăm';
    else if (roundPower === 3) unitName = 'Hàng nghìn';
    else unitName = '10^' + roundPower;

    roundUnit.textContent = unitName + ' (bậc 10^' + roundPower + ')';

    // Rounding computation
    const factor = Math.pow(10, -roundPower);
    let res = Math.round(a * factor) / factor;
    if (roundPower < 0) {
      res = res.toFixed(-roundPower);
    }
    roundResult.textContent = res;
  }

  inputA.addEventListener('input', analyze);
  inputD.addEventListener('input', analyze);
  analyze();
})();
</script>
```

---

## 5. Bốn dạng toán thực chiến thường gặp

### Dạng 1: Xác định khoảng giá trị đúng và sai số tương đối

#### Phương pháp giải:
Khi biết $a = \bar{a} \pm d$:
- Khoảng giá trị của số đúng $a$ là $[\bar{a} - d; \bar{a} + d]$.
- Đánh giá sai số tương đối: $\delta_a \le \frac{d}{|\bar{a}|} \times 100\%$.

#### Bài toán 1
Một nhà máy dập tấm thép đo được độ dày $h = 2,45\text{ mm} \pm 0,02\text{ mm}$.
1. Tìm khoảng giá trị thực tế của độ dày tấm thép.
2. Đánh giá sai số tương đối của phép đo độ dày này.

#### Lời giải:
1. Độ dày thực tế $h$ thỏa mãn:
   $$2,45 - 0,02 \le h \le 2,45 + 0,02 \iff 2,43\text{ mm} \le h \le 2,47\text{ mm}$$
   Vậy khoảng giá trị thực tế là $[2,43; 2,47]\text{ mm}$.
2. Sai số tương đối của phép đo:
   $$\delta_h \le \frac{d}{|\bar{h}|} = \frac{0,02}{2,45} \approx 0,00816 = 0,816\%$$

---

### Dạng 2: Quy tròn số gần đúng theo độ chính xác cho trước

#### Phương pháp giải:
1. Tìm chữ số khác 0 đầu tiên bên trái của $d$ thuộc hàng nào.
2. Quy tròn số gần đúng $\bar{a}$ đến hàng liền trước hàng đó theo quy tắc làm tròn số thông thường (nếu chữ số ngay sau $\ge 5$ thì tăng 1, $< 5$ thì giữ nguyên).

#### Bài toán 2
Hãy quy tròn các số gần đúng sau theo độ chính xác $d$ tương ứng:
1. $x = 182574$ với $d = 200$.
2. $y = 3,14159265$ với $d = 0,003$.
3. $z = 0,08426$ với $d = 0,0004$.

#### Lời giải:
1. Xét $d = 200$: Chữ số 2 thuộc hàng trăm. Do đó ta quy tròn số $x = 182574$ đến **hàng nghìn** (liền trước hàng trăm).
   Chữ số hàng nghìn là 2, theo sau là chữ số 5 $\ge 5$, do đó ta làm tròn lên:
   $$x \approx 183000$$
2. Xét $d = 0,003$: Chữ số 3 thuộc hàng phần nghìn ($10^{-3}$). Do đó ta quy tròn $y$ đến **hàng phần trăm** ($10^{-2}$).
   Chữ số hàng phần trăm là 4, theo sau là chữ số 1 $< 5$, do đó ta giữ nguyên:
   $$y \approx 3,14$$
3. Xét $d = 0,0004$: Chữ số 4 thuộc hàng phần chục nghìn ($10^{-4}$). Do đó ta quy tròn $z$ đến **hàng phần nghìn** ($10^{-3}$).
   Chữ số hàng phần nghìn là 4, theo sau là 2 $< 5$:
   $$z \approx 0,084$$

---

### Dạng 3: Xác định chữ số chắc (đáng tin cậy)

#### Phương pháp giải:
Trong số gần đúng $\bar{a}$ được viết dưới dạng thập phân, chữ số ở một hàng được gọi là **chữ số chắc** (hay chữ số đáng tin cậy) nếu sai số tuyệt đối $\Delta_a$ không vượt quá nửa đơn vị của hàng đó:
$$\Delta_a \le d \le \frac{1}{2} \cdot 10^k \quad \text{(với } 10^k \text{ là đơn vị của hàng đang xét)}$$

#### Bài toán 3
Cho số gần đúng $\bar{a} = 17,346$ với độ chính xác $d = 0,03$. Hỏi những chữ số nào là chữ số chắc?

#### Lời giải:
Xét các hàng từ trái sang phải:
- Hàng chục ($10^1$): nửa đơn vị là $5$. Vì $d = 0,03 \le 5$, chữ số 1 là chữ số chắc.
- Hàng đơn vị ($10^0$): nửa đơn vị là $0,5$. Vì $d = 0,03 \le 0,5$, chữ số 7 là chữ số chắc.
- Hàng phần mười ($10^{-1}$): nửa đơn vị là $0,05$. Vì $d = 0,03 \le 0,05$, chữ số 3 là chữ số chắc.
- Hàng phần trăm ($10^{-2}$): nửa đơn vị là $0,005$. Vì $d = 0,03 > 0,005$, chữ số 4 **không** phải là chữ số chắc.
- Tương tự, chữ số 6 ở hàng phần nghìn không phải là chữ số chắc.

**Kết luận:** Các chữ số chắc là $1; 7$ và $3$.

---

### Dạng 4: Sai số trong tính toán gián tiếp (Chu vi, diện tích, thể tích)

#### Phương pháp giải:
Khi đo đạc các kích thước thực tế $x = \bar{x} \pm d_x$ và $y = \bar{y} \pm d_y$:
- Chu vi hình chữ nhật: $P = 2(x + y)$ có $P_{min} = 2(x_{min} + y_{min})$ và $P_{max} = 2(x_{max} + y_{max})$.
- Diện tích hình chữ nhật: $S = x \cdot y$ có $S_{min} = x_{min} \cdot y_{min}$ và $S_{max} = x_{max} \cdot y_{max}$.
- Sai số tuyệt đối của diện tích: $\Delta_S \approx \bar{y}d_x + \bar{x}d_y$.

#### Bài toán 4
Một thửa đất hình chữ nhật có chiều dài $a = 25,4\text{ m} \pm 0,1\text{ m}$ và chiều rộng $b = 12,2\text{ m} \pm 0,1\text{ m}$.
1. Tính diện tích gần đúng của thửa đất.
2. Ước lượng sai số tuyệt đối của diện tích và viết kết quả diện tích dưới dạng $S = \bar{S} \pm d_S$.

#### Lời giải:
1. Diện tích gần đúng:
   $$\bar{S} = \bar{a} \cdot \bar{b} = 25,4 \cdot 12,2 = 309,88\text{ m}^2$$
2. Khoảng giá trị thực:
   - $a \in [25,3; 25,5]$
   - $b \in [12,1; 12,3]$
   - Diện tích nhỏ nhất: $S_{min} = 25,3 \cdot 12,1 = 306,13\text{ m}^2$.
   - Diện tích lớn nhất: $S_{max} = 25,5 \cdot 12,3 = 313,65\text{ m}^2$.
   - Sai số tuyệt đối:
     $$\Delta_S = \max(|\bar{S} - S_{min}|, |S_{max} - \bar{S}|) = \max(|309,88 - 306,13|, |313,65 - 309,88|) = \max(3,75; 3,77) = 3,77\text{ m}^2$$
   - Làm tròn độ chính xác lên $d_S = 3,8\text{ m}^2$ (hàng phần mười) $\Rightarrow$ Làm tròn $\bar{S}$ đến hàng đơn vị: $\bar{S} \approx 310\text{ m}^2$ với độ chính xác $4\text{ m}^2$.
   - Viết chuẩn: $S = 310\text{ m}^2 \pm 4\text{ m}^2$.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Định vị vệ tinh toàn cầu GPS:** Đồng hồ nguyên tử trên vệ tinh GPS có sai số chỉ khoảng 1 nano giây ($10^{-9}\text{ s}$) mỗi ngày. Nếu sai số đồng hồ chỉ lệch $1\mu\text{s}$, vị trí xác định trên mặt đất sẽ sai lệch tới $300\text{ m}$ (vì tín hiệu truyền với vận tốc ánh sáng $c \approx 3 \times 10^8\text{ m/s}$).
2. **Gia công cơ khí siêu chính xác CNC:** Các chi tiết động cơ phản lực và trục khuỷu xe hơi đòi hỏi dung sai kích thước (độ chính xác $d$) dưới $5\mu\text{m}$ ($0,005\text{ mm}$) để đảm bảo không bị quá nhiệt và kẹt ma sát ở tốc độ cao.
3. **Pha chế dược phẩm & Y tế:** Định lượng các hoạt chất gây mê hoặc thuốc kháng sinh điều trị ung thư đòi hỏi sai số tương đối $\delta < 0,5\%$. Chỉ một sai số nhỏ cũng có thể chuyển liều điều trị thành liều độc hại.
4. **Trắc địa và Bản đồ số viễn thám:** Công nghệ quét laser mặt đất LiDAR cung cấp bản đồ độ cao địa hình với độ chính xác theo phương đứng đạt $\pm 5\text{ cm}$, phục vụ dự báo ngập lụt đô thị và sạt lở đê điều.
5. **Vật lí hạt nhân & Máy gia tốc hạt lớn LHC:** Để chùm hạt proton va chạm tại tâm điểm máy dò kích thước vài micromét, nam châm siêu dẫn phải điều khiển quỹ đạo với sai số góc nhỏ hơn $10^{-6}\text{ rad}$.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q1",
  "question": "Trong các số liệu sau, số nào là SỐ ĐÚNG?",
  "options": [
    "Khoảng cách từ Trái Đất đến Mặt Trăng là 384400 km",
    "Một tuần lễ có đúng 7 ngày",
    "Vận tốc ánh sáng là 300000 km/s",
    "Chiều cao của đỉnh Fansipan là 3143 m"
  ],
  "answer": 1,
  "explanation": "Số ngày trong tuần là đại lượng đếm nguyên vẹn tuyệt đối (7 ngày). Các đại lượng đo khoảng cách, vận tốc, độ cao đều là số gần đúng."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q2",
  "question": "Cho số gần đúng $a = 154,6$ với độ chính xác $d = 0,2$. Khoảng chứa giá trị đúng của $a$ là:",
  "options": [
    "[154,4; 154,8]",
    "[154,6; 154,8]",
    "[154,0; 155,0]",
    "[154,2; 155,0]"
  ],
  "answer": 0,
  "explanation": "Khoảng giá trị đúng là $[\\bar{a} - d; \\bar{a} + d] = [154,6 - 0,2; 154,6 + 0,2] = [154,4; 154,8]$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q3",
  "question": "Sai số tương đối $\\delta_a$ của số gần đúng $\\bar{a} = 400$ với độ chính xác $d = 0,8$ không vượt quá:",
  "options": [
    "0,2%",
    "0,02%",
    "2%",
    "0,002%"
  ],
  "answer": 0,
  "explanation": "Ta có $\\delta_a \\le \\frac{d}{|\\bar{a}|} = \\frac{0,8}{400} = 0,002$, tương ứng $0,2\\%$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q4",
  "question": "Quy tròn số $a = 3,74529$ đến hàng phần nghìn, ta được số gần đúng là:",
  "options": [
    "3,745",
    "3,746",
    "3,75",
    "3,7453"
  ],
  "answer": 0,
  "explanation": "Hàng phần nghìn là chữ số 5, chữ số ngay sau nó là 2 (< 5) nên ta giữ nguyên là 3,745."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q5",
  "question": "Cho số gần đúng $\\bar{a} = 2851275$ với độ chính xác $d = 300$. Số quy tròn của $\\bar{a}$ là:",
  "options": [
    "2851000",
    "2851300",
    "2852000",
    "2850000"
  ],
  "answer": 0,
  "explanation": "Độ chính xác $d = 300$ có hàng lớn nhất là hàng trăm. Do đó ta quy tròn đến hàng liền trước là hàng nghìn. Chữ số hàng nghìn là 1, theo sau là chữ số 2 (< 5), nên giữ nguyên: 2851000."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q6",
  "question": "Cho số gần đúng $\\bar{x} = 0,0428$ với độ chính xác $d = 0,0005$. Số quy tròn của $\\bar{x}$ là:",
  "options": [
    "0,043",
    "0,04",
    "0,042",
    "0,0428"
  ],
  "answer": 0,
  "explanation": "Độ chính xác $d = 0,0005$ ở hàng phần chục nghìn. Ta quy tròn $\\bar{x}$ đến hàng phần nghìn. Chữ số hàng phần nghìn là 2, theo sau là chữ số 8 (>= 5), nên tăng 1 đơn vị thành 0,043."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q7",
  "question": "Hai bạn An và Bình cùng đo chiều dài bàn học. An đo được $1,2\\text{ m} \\pm 0,01\\text{ m}$, Bình đo được $1,25\\text{ m} \\pm 0,005\\text{ m}$. Kết luận nào đúng?",
  "options": [
    "Phép đo của Bình có độ chính xác cao hơn và sai số tương đối nhỏ hơn",
    "Phép đo của An có độ chính xác cao hơn",
    "Hai phép đo có chất lượng như nhau",
    "Không thể so sánh được vì hai người cho hai số đo khác nhau"
  ],
  "answer": 0,
  "explanation": "Độ chính xác của Bình ($0,005\\text{ m}$) nhỏ hơn của An ($0,01\\text{ m}$), và sai số tương đối của Bình $\\frac{0,005}{1,25} = 0,4\\%$ nhỏ hơn của An $\\frac{0,01}{1,2} \\approx 0,83\\%$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q8",
  "question": "Cho số gần đúng $\\bar{a} = 24,56$ với $d = 0,04$. Trong các chữ số $2, 4, 5, 6$, chữ số nào KHÔNG PHẢI là chữ số chắc?",
  "options": [
    "6",
    "5",
    "4",
    "Cả 5 và 6"
  ],
  "answer": 0,
  "explanation": "Nửa đơn vị của hàng phần trăm là $0,005$. Vì $d = 0,04 > 0,005$, chữ số 6 không phải chữ số chắc. Hàng phần mười có nửa đơn vị $0,05 > 0,04$ nên chữ số 5 là chữ số chắc."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q9",
  "question": "Khi quy tròn số $\\sqrt{7} \\approx 2,645751...$ đến hàng phần trăm, sai số tuyệt đối không vượt quá:",
  "options": [
    "0,005",
    "0,01",
    "0,001",
    "0,05"
  ],
  "answer": 0,
  "explanation": "Khi làm tròn đến một hàng nào đó, sai số tuyệt đối mắc phải không bao giờ vượt quá nửa đơn vị của hàng làm tròn. Nửa đơn vị hàng phần trăm là $0,005$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b12_q10",
  "question": "Một thửa ruộng hình vuông có cạnh đo được là $a = 20\\text{ m} \\pm 0,2\\text{ m}$. Sai số tương đối của phép tính diện tích thửa ruộng này xấp xỉ bằng:",
  "options": [
    "2%",
    "1%",
    "4%",
    "0,2%"
  ],
  "answer": 0,
  "explanation": "Ta có $\\delta_a = \\frac{0,2}{20} = 1\\%$. Khi tính diện tích $S = a^2$, sai số tương đối của $S$ xấp xỉ bằng $2\\delta_a = 2 \\times 1\\% = 2\\%$."
}'></div>

---

## 8. Thử thách thực tế: Dự án đo đạc chu vi sân trường

Hãy mượn một thước cuộn có vạch chia nhỏ nhất $1\text{ cm}$ ($0,01\text{ m}$) và tiến hành đo chiều dài và chiều rộng sân trường:
1. Ghi lại kết quả dưới dạng số gần đúng kèm độ chính xác $d$.
2. Tính diện tích sân trường và ước lượng sai số tương đối $\delta_S$.
3. Nếu muốn sai số tương đối của diện tích nhỏ hơn $0,1\%$, em cần dùng dụng cụ có độ chính xác tối thiểu là bao nhiêu?
