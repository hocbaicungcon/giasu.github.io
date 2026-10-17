---
title: 'Toán 10 Bài 14: Các số đặc trưng đo độ phân tán - Khoảng biến thiên, Khoảng tứ phân vị, Phương sai, Độ lệch chuẩn'
description: 'Khám phá toàn diện các số đặc trưng đo độ phân tán Toán 10: Khoảng biến thiên R, khoảng tứ phân vị IQR, phương sai, độ lệch chuẩn, nhận diện giá trị bất thường (outlier) và widget tương tác thống kê sinh động.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Thống kê 10
  - Độ phân tán
  - Khoảng biến thiên
  - Khoảng tứ phân vị
  - Phương sai
  - Độ lệch chuẩn
  - Giá trị bất thường
  - Kết nối tri thức
grade: 10
---

# Bài 14. Các số đặc trưng đo độ phân tán

Hai xạ thủ có cùng điểm bắn trung bình là $8,5$ điểm, nhưng xạ thủ A luôn bắn từ $8$ đến $9$ điểm, trong khi xạ thủ B lúc bắn $10$ điểm lúc lại chỉ được $4$ điểm. Nếu chỉ nhìn vào số trung bình, ta không thể phân biệt được ai có phong độ ổn định hơn. Đó là lí do ta cần **các số đặc trưng đo độ phân tán**: Khoảng biến thiên, Khoảng tứ phân vị, Phương sai và Độ lệch chuẩn.

---

## 1. Sơ đồ tư duy (Mindmap) Độ phân tán

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Khoảng biến thiên ($R$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $R = x_{max} - x_{min}$.<br>
      • Đo độ chênh lệch giữa giá trị lớn nhất và nhỏ nhất.<br>
      • Dễ tính nhưng rất nhạy cảm với giá trị ngoại lệ.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Khoảng tứ phân vị ($\Delta_Q$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $\Delta_Q = Q_3 - Q_1$.<br>
      • Đo độ phân tán của 50% số liệu ở trung tâm.<br>
      • Dùng để xác định <em>giá trị bất thường (outlier)</em>: $x < Q_1 - 1,5\Delta_Q$ hoặc $x > Q_3 + 1,5\Delta_Q$.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Phương sai ($s^2$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $s^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2$.<br>
      • Trung bình cộng của bình phương các độ lệch so với số trung bình.<br>
      • Đơn vị là bình phương đơn vị đo gốc.
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Độ lệch chuẩn ($s$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • $s = \sqrt{s^2}$.<br>
      • Cùng đơn vị đo với đại lượng gốc.<br>
      • Càng nhỏ $\Rightarrow$ số liệu càng tập trung gần số trung bình (độ ổn định cao).
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Mẹo tính nhẩm

1. **Cho mẫu số liệu: $3, 5, 7, 12$. Khoảng biến thiên $R$ bằng bao nhiêu?**  
   *Đáp án:* $R = 12 - 3 = 9$.
2. **Nếu tất cả các số liệu trong một mẫu đều bằng nhau (ví dụ: $5, 5, 5, 5$), phương sai và độ lệch chuẩn bằng bao nhiêu?**  
   *Đáp án:* Bằng $0$, vì không có bất kì sự phân tán nào quanh số trung bình.
3. **Mẹo tính phương sai $s^2$ không cần tính từng độ lệch $(x_i - \bar{x})$:**  
   $$s^2 = \frac{x_1^2 + x_2^2 + \dots + x_n^2}{n} - (\bar{x})^2$$
   *Ý nghĩa:* Trung bình của bình phương trừ đi bình phương của trung bình!
4. **Tại sao người ta thường dùng Độ lệch chuẩn $s$ thay vì Phương sai $s^2$ khi báo cáo kết quả?**  
   *Đáp án:* Vì độ lệch chuẩn có cùng đơn vị đo với dữ liệu ban đầu (ví dụ: mét, kg, điểm), trong khi phương sai mang đơn vị bình phương ($\text{m}^2, \text{kg}^2, \text{điểm}^2$) khó hình dung trực quan.
5. **Khoảng tứ phân vị $\Delta_Q = Q_3 - Q_1$ mô tả mức độ biến thiên của bao nhiêu phần trăm số liệu?**  
   *Đáp án:* $50\%$ số liệu nằm ở chính giữa mẫu.

---

## 3. Lý thuyết trọng tâm

### 3.1. Khoảng biến thiên (Range - $R$)

> [!NOTE]
> Cho mẫu số liệu $\{x_1, x_2, \dots, x_n\}$.
> **Khoảng biến thiên** (kí hiệu là $R$) là hiệu số giữa giá trị lớn nhất và giá trị nhỏ nhất của mẫu:
> $$R = x_{max} - x_{min}$$
> - **Ý nghĩa:** Cho biết độ rộng bao quát của toàn bộ dải dữ liệu.
> - **Hạn chế:** Chỉ phụ thuộc vào hai giá trị cực biên, không phản ánh sự phân bố của các số liệu bên trong và rất dễ bị bóp méo bởi các giá trị bất thường.

### 3.2. Khoảng tứ phân vị (Interquartile Range - $\Delta_Q$)

> [!NOTE]
> **Khoảng tứ phân vị** (kí hiệu là $\Delta_Q$ hoặc $IQR$) là hiệu giữa tứ phân vị trên $Q_3$ và tứ phân vị dưới $Q_1$:
> $$\Delta_Q = Q_3 - Q_1$$
> - **Ý nghĩa:** Đo mức độ phân tán của $50\%$ số liệu thuộc phần trung tâm. $\Delta_Q$ càng nhỏ thì dữ liệu ở giữa càng tập trung đồng đều.

### 3.3. Nhận diện giá trị bất thường (Outliers)

> [!WARNING]
> Trong phân tích số liệu thực tế, các quan sát sai lệch do lỗi thiết bị đo hoặc ghi chép nhầm được gọi là **giá trị bất thường**. Một giá trị $x$ trong mẫu được coi là bất thường nếu:
> $$x < Q_1 - 1,5\Delta_Q \quad \text{hoặc} \quad x > Q_3 + 1,5\Delta_Q$$

### 3.4. Phương sai và Độ lệch chuẩn

Cho mẫu số liệu $\{x_1, x_2, \dots, x_n\}$ có số trung bình là $\bar{x}$.

> [!NOTE]
> 1. **Phương sai (Variance):**
>    $$s^2 = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2 = \frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + \dots + (x_n - \bar{x})^2}{n}$$
>    Hoặc dùng công thức khai triển:
>    $$s^2 = \frac{1}{n}\left(\sum_{i=1}^n x_i^2\right) - (\bar{x})^2$$
> 2. Nếu số liệu cho dưới dạng bảng tần số ($x_k$ có tần số $m_k$, với $\sum m_k = n$):
>    $$s^2 = \frac{1}{n}\sum_{k} m_k (x_k - \bar{x})^2 = \frac{1}{n}\left(\sum_k m_k x_k^2\right) - (\bar{x})^2$$
> 3. **Độ lệch chuẩn (Standard Deviation):**
>    $$s = \sqrt{s^2}$$

> [!TIP]
> - Phương sai và độ lệch chuẩn dùng để đánh giá **mức độ phân tán của các số liệu quanh số trung bình**.
> - Giá trị $s$ càng nhỏ $\implies$ các số liệu càng gần với số trung bình $\implies$ độ đồng đều, mức độ tin cậy và tính ổn định càng cao.

---

## 4. Widget tương tác: Máy Tính Độ Phân Tán & Phát Hiện Outlier

Nhập mẫu số liệu để xem tự động đồ thị phân bố, khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn và cảnh báo giá trị bất thường:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">🎯 Thống Kê Độ Phân Tán & Điểm Ngoại Lai</h3>
    <span style="font-size: 0.85rem; background: #fef3c7; color: #b45309; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Phát hiện Outlier tự động</span>
  </div>

  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 6px;">Nhập số liệu (cách nhau bởi dấu phẩy):</label>
    <input type="text" id="dispInput" value="5, 7, 8, 8, 9, 10, 11, 12, 28" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 1rem; box-sizing: border-box;" />
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 16px;">
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Khoảng biến thiên ($R$)</div>
      <div id="statR" style="font-size: 1.25rem; font-weight: 800; color: #2563eb; margin-top: 4px;">23</div>
    </div>
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Khoảng tứ phân vị ($\Delta_Q$)</div>
      <div id="statIQR" style="font-size: 1.25rem; font-weight: 800; color: #16a34a; margin-top: 4px;">4.0</div>
    </div>
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Phương sai ($s^2$)</div>
      <div id="statVar" style="font-size: 1.25rem; font-weight: 800; color: #d97706; margin-top: 4px;">38.91</div>
    </div>
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Độ lệch chuẩn ($s$)</div>
      <div id="statSD" style="font-size: 1.25rem; font-weight: 800; color: #dc2626; margin-top: 4px;">6.24</div>
    </div>
  </div>

  <div id="outlierBox" style="background: #fff1f2; border: 1px solid #fecdd3; border-radius: 8px; padding: 12px; font-size: 0.9rem; color: #9f1239;">
    ⚠️ <strong>Phát hiện giá trị bất thường:</strong> <span id="outlierText">28 (vượt ngưỡng trên Q3 + 1.5ΔQ = 17.5)</span>
  </div>
</div>

<script>
(() => {
  const dispInput = document.getElementById('dispInput');
  const statR = document.getElementById('statR');
  const statIQR = document.getElementById('statIQR');
  const statVar = document.getElementById('statVar');
  const statSD = document.getElementById('statSD');
  const outlierBox = document.getElementById('outlierBox');
  const outlierText = document.getElementById('outlierText');

  function getMedian(arr) {
    const len = arr.length;
    if (len === 0) return 0;
    if (len % 2 === 1) return arr[Math.floor(len / 2)];
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }

  function update() {
    const raw = dispInput.value;
    const nums = raw.split(/[\s,]+/)
                    .map(s => parseFloat(s.trim()))
                    .filter(n => !isNaN(n))
                    .sort((a, b) => a - b);

    const n = nums.length;
    if (n < 2) return;

    // Range R
    const r = nums[n - 1] - nums[0];
    statR.textContent = r;

    // Quartiles
    let left = [], right = [];
    if (n % 2 === 1) {
      const mid = Math.floor(n / 2);
      left = nums.slice(0, mid);
      right = nums.slice(mid + 1);
    } else {
      left = nums.slice(0, n / 2);
      right = nums.slice(n / 2);
    }
    const q1 = getMedian(left);
    const q3 = getMedian(right);
    const iqr = q3 - q1;
    statIQR.textContent = iqr.toFixed(2).replace(/\.00$/, '');

    // Mean & Variance
    const mean = nums.reduce((a, b) => a + b, 0) / n;
    const variance = nums.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / n;
    const sd = Math.sqrt(variance);

    statVar.textContent = variance.toFixed(2);
    statSD.textContent = sd.toFixed(2);

    // Outliers check: x < Q1 - 1.5*IQR or x > Q3 + 1.5*IQR
    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;
    const outliers = nums.filter(x => x < lowerBound || x > upperBound);

    if (outliers.length > 0) {
      outlierBox.style.display = 'block';
      outlierText.textContent = `${outliers.join(', ')} (Ngưỡng an toàn: [${lowerBound.toFixed(1)}; ${upperBound.toFixed(1)}])`;
    } else {
      outlierBox.style.display = 'block';
      outlierBox.style.background = '#f0fdf4';
      outlierBox.style.borderColor = '#bbf7d0';
      outlierBox.style.color = '#166534';
      outlierText.innerHTML = `✅ <em>Không có giá trị bất thường nào. Toàn bộ số liệu nằm trong khoảng chuẩn [${lowerBound.toFixed(1)}; ${upperBound.toFixed(1)}].</em>`;
    }
  }

  dispInput.addEventListener('input', update);
  update();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Tính khoảng biến thiên $R$ và khoảng tứ phân vị $\Delta_Q$

#### Phương pháp giải:
1. Sắp xếp mẫu số liệu tăng dần.
2. Tìm $x_{min}, x_{max} \implies R = x_{max} - x_{min}$.
3. Tìm $Q_1, Q_3 \implies \Delta_Q = Q_3 - Q_1$.

#### Bài toán 1
Nhiệt độ cao nhất trong ngày (đơn vị $^\circ\text{C}$) tại một trạm quan trắc trong 10 ngày đầu tháng 6 được ghi nhận:
$$28, \quad 30, \quad 29, \quad 35, \quad 32, \quad 31, \quad 33, \quad 38, \quad 30, \quad 34$$
Hãy tìm khoảng biến thiên $R$ và khoảng tứ phân vị $\Delta_Q$ của mẫu nhiệt độ trên.

#### Lời giải:
Sắp xếp dãy số liệu tăng dần ($n = 10$):
$$28, \quad 29, \quad 30, \quad 30, \quad 31, \quad 32, \quad 33, \quad 34, \quad 35, \quad 38$$
- Giá trị nhỏ nhất $x_{min} = 28$, giá trị lớn nhất $x_{max} = 38$.
  Khoảng biến thiên:
  $$R = 38 - 28 = 10^\circ\text{C}$$
- Tìm các tứ phân vị:
  - $n = 10$ (chẵn), trung vị $Q_2 = \frac{31 + 32}{2} = 31,5$.
  - Nửa dưới gồm 5 số: $28, 29, 30, 30, 31 \implies Q_1 = 30$.
  - Nửa trên gồm 5 số: $32, 33, 34, 35, 38 \implies Q_3 = 34$.
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = 34 - 30 = 4^\circ\text{C}$$

---

### Dạng 2: Phát hiện giá trị bất thường (Outliers)

#### Phương pháp giải:
1. Tính $Q_1, Q_3$ và $\Delta_Q = Q_3 - Q_1$.
2. Tính hai rào cản:
   - Rào dưới: $L = Q_1 - 1,5\Delta_Q$.
   - Rào trên: $U = Q_3 + 1,5\Delta_Q$.
3. Các phần tử $x$ thỏa mãn $x < L$ hoặc $x > U$ là giá trị bất thường.

#### Bài toán 2
Thời gian giải một bài toán trắc nghiệm (tính bằng giây) của một nhóm học sinh được ghi lại như sau:
$$25, \quad 28, \quad 30, \quad 32, \quad 33, \quad 35, \quad 36, \quad 40, \quad 85$$
Trong các giá trị trên, có giá trị nào là bất thường không?

#### Lời giải:
Mẫu đã sắp xếp có $n = 9$ phần tử:
- Trung vị $Q_2 = 33$ (vị trí thứ 5).
- Nửa dưới: $25, 28, 30, 32 \implies Q_1 = \frac{28 + 30}{2} = 29$.
- Nửa trên: $35, 36, 40, 85 \implies Q_3 = \frac{36 + 40}{2} = 38$.
- Khoảng tứ phân vị:
  $$\Delta_Q = Q_3 - Q_1 = 38 - 29 = 9$$
- Xác định khoảng an toàn:
  - Rào dưới: $Q_1 - 1,5\Delta_Q = 29 - 1,5(9) = 29 - 13,5 = 15,5$.
  - Rào trên: $Q_3 + 1,5\Delta_Q = 38 + 1,5(9) = 38 + 13,5 = 51,5$.
- So sánh: Giá trị $85 > 51,5$.

**Kết luận:** Giá trị $85$ giây là giá trị bất thường (outlier) của mẫu số liệu.

---

### Dạng 3: Tính phương sai và độ lệch chuẩn của mẫu rời rạc

#### Phương pháp giải:
1. Tính số trung bình $\bar{x} = \frac{\sum x_i}{n}$.
2. Tính $s^2 = \frac{\sum (x_i - \bar{x})^2}{n}$ hoặc $s^2 = \frac{\sum x_i^2}{n} - (\bar{x})^2$.
3. Tính $s = \sqrt{s^2}$.

#### Bài toán 3
Điểm kiểm tra của bạn Bình trong 5 bài kiểm tra ngắn là: $6, 7, 8, 9, 10$.
Hãy tính phương sai và độ lệch chuẩn điểm của Bình.

#### Lời giải:
1. Số trung bình:
   $$\bar{x} = \frac{6 + 7 + 8 + 9 + 10}{5} = \frac{40}{5} = 8$$
2. Tính tổng các độ lệch bình phương:
   $$(6 - 8)^2 = 4, \quad (7 - 8)^2 = 1, \quad (8 - 8)^2 = 0, \quad (9 - 8)^2 = 1, \quad (10 - 8)^2 = 4$$
   Tổng độ lệch bình phương: $4 + 1 + 0 + 1 + 4 = 10$.
3. Phương sai:
   $$s^2 = \frac{10}{5} = 2$$
4. Độ lệch chuẩn:
   $$s = \sqrt{2} \approx 1,414$$

---

### Dạng 4: So sánh độ phân tán để đánh giá tính ổn định trong thực tế

#### Phương pháp giải:
- Khi so sánh hai đối tượng có số trung bình tương đương nhau, đối tượng nào có **độ lệch chuẩn $s$ nhỏ hơn** sẽ có tính ổn định, đồng đều và ít rủi ro hơn.

#### Bài toán 4
Năng suất lúa (tạ/ha) của hai giống lúa mới ĐB1 và ĐB2 được trồng khảo nghiệm trên 6 cánh đồng tương đương cho kết quả:
- **Giống ĐB1:** $65, \quad 66, \quad 67, \quad 68, \quad 69, \quad 71$
- **Giống ĐB2:** $60, \quad 63, \quad 67, \quad 68, \quad 72, \quad 76$
1. Tính năng suất trung bình của hai giống lúa.
2. Tính phương sai và độ lệch chuẩn của từng giống. Giống lúa nào có năng suất ổn định hơn?

#### Lời giải:
1. **Năng suất trung bình:**
   - Giống ĐB1: $\bar{x}_1 = \frac{65 + 66 + 67 + 68 + 69 + 71}{6} = \frac{406}{6} \approx 67,67\text{ tạ/ha}$.
   - Giống ĐB2: $\bar{x}_2 = \frac{60 + 63 + 67 + 68 + 72 + 76}{6} = \frac{406}{6} \approx 67,67\text{ tạ/ha}$.
   Cả hai giống đều có năng suất trung bình như nhau.
2. **Phương sai và độ lệch chuẩn:**
   - **Với giống ĐB1:**
     Các độ lệch so với $67,67$:
     $$s_1^2 = \frac{(65-67,67)^2 + (66-67,67)^2 + (67-67,67)^2 + (68-67,67)^2 + (69-67,67)^2 + (71-67,67)^2}{6}$$
     $$s_1^2 \approx \frac{7,13 + 2,79 + 0,45 + 0,11 + 1,77 + 11,09}{6} = \frac{23,34}{6} \approx 3,89 \implies s_1 \approx 1,97\text{ tạ/ha}$$
   - **Với giống ĐB2:**
     $$s_2^2 = \frac{(60-67,67)^2 + (63-67,67)^2 + (67-67,67)^2 + (68-67,67)^2 + (72-67,67)^2 + (76-67,67)^2}{6}$$
     $$s_2^2 \approx \frac{58,83 + 21,81 + 0,45 + 0,11 + 18,75 + 69,39}{6} = \frac{169,34}{6} \approx 28,22 \implies s_2 \approx 5,31\text{ tạ/ha}$$
3. **Kết luận:**
   Vì $s_1 \approx 1,97 < s_2 \approx 5,31$, giống lúa ĐB1 có độ biến động thấp hơn nhiều so với giống ĐB2. Do đó giống ĐB1 cho **năng suất ổn định và ít rủi ro hơn**.

---

## 6. Năm ứng dụng thực tế khoa học & công nghệ

1. **Quản trị rủi ro đầu tư tài chính:** Trong thị trường chứng khoán, độ lệch chuẩn $s$ của tỉ suất sinh lời chính là thước đo biến động (Volatility). Cổ phiếu có độ lệch chuẩn cao mang lại lợi nhuận tiềm năng lớn nhưng rủi ro cháy tài khoản cũng cao hơn.
2. **Kiểm soát chất lượng sản xuất công nghiệp (Six Sigma):** Các nhà máy Intel và Samsung dùng độ lệch chuẩn để đo độ chính xác kích thước chân vi xử lí. Chuẩn Six Sigma đòi hỏi tỷ lệ sai sót nhỏ hơn 3,4 lỗi trên 1 triệu sản phẩm.
3. **Phát hiện gian lận ngân hàng & An ninh mạng:** Thuật toán AI phân tích lịch sử chi tiêu bằng rào cản tứ phân vị ($1,5IQR$). Bất kì giao dịch nào vượt ngưỡng trên bất thường (ví dụ: một thẻ tín dụng bình thường chi tiêu dưới 1 triệu bỗng dưng quẹt 100 triệu vào lúc 3 giờ sáng) sẽ tự động bị khóa để kiểm tra.
4. **Khí tượng thủy văn & Dự báo biến đổi khí hậu:** Khoảng biến thiên nhiệt độ $R$ và độ lệch chuẩn của lượng mưa hàng năm giúp các nhà khoa học nhận diện các hiện tượng thời tiết cực đoan như El Nino hay La Nina.
5. **Thể thao đỉnh cao & Đánh giá vận động viên:** Trong môn bắn súng Olympic hay bóng rổ NBA, huấn luyện viên sử dụng độ lệch chuẩn điểm số để đánh giá "bản lĩnh thi đấu" và độ ổn định tâm lí của vận động viên trong các trận chung kết căng thẳng.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q1",
  "question": "Cho mẫu số liệu: $4, 6, 9, 15, 21$. Khoảng biến thiên $R$ của mẫu bằng:",
  "options": [
    "17",
    "15",
    "11",
    "21"
  ],
  "answer": 0,
  "explanation": "$R = x_{max} - x_{min} = 21 - 4 = 17$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q2",
  "question": "Cho mẫu số liệu có $Q_1 = 14$ và $Q_3 = 26$. Khoảng tứ phân vị $\\Delta_Q$ của mẫu là:",
  "options": [
    "12",
    "20",
    "40",
    "6"
  ],
  "answer": 0,
  "explanation": "$\\Delta_Q = Q_3 - Q_1 = 26 - 14 = 12$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q3",
  "question": "Cho mẫu số liệu: $2, 2, 2, 2, 2$. Phương sai của mẫu số liệu này bằng:",
  "options": [
    "0",
    "2",
    "4",
    "1"
  ],
  "answer": 0,
  "explanation": "Tất cả các giá trị đều bằng nhau và bằng số trung bình nên độ lệch của từng giá trị bằng 0, do đó phương sai bằng 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q4",
  "question": "Mẫu số liệu có phương sai $s^2 = 16$. Độ lệch chuẩn $s$ của mẫu số liệu là:",
  "options": [
    "4",
    "256",
    "8",
    "2"
  ],
  "answer": 0,
  "explanation": "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{16} = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q5",
  "question": "Một mẫu số liệu có $Q_1 = 20$ và $Q_3 = 30$. Giá trị nào sau đây là GIÁ TRỊ BẤT THƯỜNG?",
  "options": [
    "48",
    "35",
    "15",
    "25"
  ],
  "answer": 0,
  "explanation": "Ta có $\\Delta_Q = 30 - 20 = 10$. Ngưỡng trên là $Q_3 + 1,5\\Delta_Q = 30 + 1,5(10) = 45$. Vì $48 > 45$ nên 48 là giá trị bất thường."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q6",
  "question": "Cho mẫu số liệu: $1, 3, 5$. Phương sai $s^2$ của mẫu bằng:",
  "options": [
    "$\\frac{8}{3}$",
    "$\\frac{4}{3}$",
    "2",
    "3"
  ],
  "answer": 0,
  "explanation": "Số trung bình $\\bar{x} = \\frac{1 + 3 + 5}{3} = 3$. Phương sai $s^2 = \\frac{(1-3)^2 + (3-3)^2 + (5-3)^2}{3} = \\frac{4 + 0 + 4}{3} = \\frac{8}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q7",
  "question": "Đại lượng đo độ phân tán nào KHÔNG bị ảnh hưởng bởi các giá trị ngoại lai cực lớn hoặc cực nhỏ?",
  "options": [
    "Khoảng tứ phân vị",
    "Khoảng biến thiên",
    "Phương sai",
    "Độ lệch chuẩn"
  ],
  "answer": 0,
  "explanation": "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ chỉ đo sự phân tán của 50% số liệu ở trung tâm nên không bị ảnh hưởng bởi các giá trị cực biên."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q8",
  "question": "Điểm kiểm tra của hai tổ học sinh có cùng điểm trung bình là 7,5. Độ lệch chuẩn của tổ 1 là $s_1 = 0,8$ và của tổ 2 là $s_2 = 1,6$. Nhận xét nào đúng?",
  "options": [
    "Điểm của tổ 1 đồng đều hơn tổ 2",
    "Điểm của tổ 2 đồng đều hơn tổ 1",
    "Hai tổ có học lực hoàn toàn như nhau",
    "Tổ 2 có nhiều bạn điểm cao hơn tổ 1"
  ],
  "answer": 0,
  "explanation": "Độ lệch chuẩn $s_1 < s_2$ cho thấy độ phân tán của tổ 1 nhỏ hơn, tức là điểm số của tổ 1 tập trung quanh điểm trung bình hơn, đồng đều hơn tổ 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q9",
  "question": "Nếu cộng thêm vào mỗi giá trị của mẫu số liệu một hằng số $c = 5$ thì phương sai của mẫu mới sẽ:",
  "options": [
    "Không thay đổi",
    "Tăng thêm 5",
    "Tăng thêm 25",
    "Nhân lên 5 lần"
  ],
  "answer": 0,
  "explanation": "Khi tịnh tiến tất cả các giá trị thêm một hằng số $c$, số trung bình cũng tăng thêm $c$, do đó độ lệch $(x_i + c) - (\\bar{x} + c) = x_i - \\bar{x}$ không đổi, dẫn đến phương sai không đổi."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b14_q10",
  "question": "Nếu nhân mỗi giá trị của mẫu số liệu với một số dương $k = 3$ thì độ lệch chuẩn của mẫu mới sẽ:",
  "options": [
    "Tăng gấp 3 lần",
    "Tăng gấp 9 lần",
    "Không thay đổi",
    "Tăng thêm 3 đơn vị"
  ],
  "answer": 0,
  "explanation": "Khi nhân tất cả các giá trị với $k$, phương sai tăng $k^2$ lần, do đó độ lệch chuẩn $s$ tăng $k$ lần (ở đây là gấp 3 lần)."
}'></div>

---

## 8. Thử thách thực tế: Dự án phân tích độ biến động giá cổ phiếu

Chọn hai mã cổ phiếu trên sàn chứng khoán (hoặc hai mặt hàng nông sản như giá cà phê và giá hồ tiêu) trong 10 ngày giao dịch gần nhất:
1. Thu thập giá đóng cửa mỗi ngày và tính giá trung bình $\bar{x}$.
2. Tính khoảng biến thiên $R$ và độ lệch chuẩn $s$ của mỗi mã.
3. Mã cổ phiếu nào có rủi ro biến động cao hơn? Hãy viết một đoạn báo cáo ngắn 5 dòng tư vấn cho nhà đầu tư thích an toàn nên chọn mã nào!
