---
title: 'Toán 10 Bài 13: Các số đặc trưng đo xu thế trung tâm - Số trung bình, Trung vị, Tứ phân vị, Mốt'
description: 'Khám phá trọn bộ các số đặc trưng đo xu thế trung tâm cho mẫu số liệu không ghép nhóm: Số trung bình, trung vị, tứ phân vị Q1, Q2, Q3, mốt, widget tính toán và trực quan hóa số liệu thống kê tự động.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 10
  - Thống kê 10
  - Số trung bình
  - Trung vị
  - Tứ phân vị
  - Mốt
  - Kết nối tri thức
grade: 10
---

# Bài 13. Các số đặc trưng đo xu thế trung tâm

Trong thời đại dữ liệu số, khả năng phân tích và tổng hợp thông tin từ các mẫu dữ liệu là kỹ năng thiết yếu. Để tóm tắt hàng nghìn số liệu về điểm thi, thu nhập, năng suất hay thời tiết thành một vài con số đại diện, các nhà khoa học sử dụng **các số đặc trưng đo xu thế trung tâm**: Số trung bình, Trung vị, Tứ phân vị và Mốt. Bài học này sẽ giúp bạn hiểu sâu bản chất toán học và biết khi nào nên dùng chỉ số nào trong thực tế.

---

## 1. Sơ đồ tư duy (Mindmap) Xu thế trung tâm

```widget
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">1. Số trung bình ($\bar{x}$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Tổng tất cả giá trị chia cho kích thước mẫu $n$.<br>
      • Đại diện tốt khi dữ liệu phân bố đều, nhưng <em>rất nhạy cảm với các giá trị bất thường (outliers)</em>.
    </p>
  </div>
  <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #166534;">2. Trung vị ($M_e$ hoặc $Q_2$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Giá trị nằm chính giữa sau khi xếp thứ tự tăng dần.<br>
      • Chia dữ liệu thành 2 nửa đều nhau (50% nhỏ hơn, 50% lớn hơn).<br>
      • Không bị ảnh hưởng bởi giá trị đột biến cực lớn hay cực nhỏ.
    </p>
  </div>
  <div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #92400e;">3. Tứ phân vị ($Q_1, Q_2, Q_3$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Chia mẫu dữ liệu thành 4 phần bằng nhau (mỗi phần 25%).<br>
      • $Q_1$: Tứ phân vị thứ nhất (trung vị nửa dưới).<br>
      • $Q_3$: Tứ phân vị thứ ba (trung vị nửa trên).
    </p>
  </div>
  <div style="background: #fdf2f8; border-left: 4px solid #ec4899; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h4 style="margin: 0 0 8px 0; color: #9d174d;">4. Mốt ($M_o$)</h4>
    <p style="margin: 0; font-size: 0.9em; color: #475569;">
      • Giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu.<br>
      • Ứng dụng phổ biến trong thương mại, bán lẻ (size giày bán chạy nhất, sản phẩm ưa chuộng nhất).
    </p>
  </div>
</div>
```

---

## 2. Khởi động: 5 câu hỏi nhanh & Tình huống thực tế

1. **Cho mẫu điểm: $7, 8, 8, 9, 10$. Số nào xuất hiện nhiều nhất (Mốt)?**  
   *Đáp án:* $M_o = 8$ (tần số xuất hiện 2 lần).
2. **Thu nhập hàng tháng (triệu VNĐ) của 5 nhân viên là: $8, 9, 9, 10, 150$ (ông giám đốc nhận 150 triệu). Lương trung bình là:**  
   $$\bar{x} = \frac{8 + 9 + 9 + 10 + 150}{5} = \frac{186}{5} = 37,2\text{ triệu VNĐ}$$
   *Câu hỏi:* Con số 37,2 triệu có đại diện đúng cho đa số nhân viên không?  
   *Đáp án:* Không, vì bị con số 150 triệu kéo lệch. Ở đây trung vị $M_e = 9$ triệu phản ánh thực tế chính xác hơn nhiều!
3. **Mẫu số liệu có $n = 7$ phần tử sau khi xếp tăng dần: Trung vị là số thứ mấy?**  
   *Đáp án:* Số thứ $\frac{7 + 1}{2} = 4$.
4. **Mẫu số liệu có $n = 8$ phần tử sau khi xếp tăng dần: Trung vị được tính thế nào?**  
   *Đáp án:* Trung bình cộng của hai số chính giữa ở vị trí thứ 4 và thứ 5.
5. **Một mẫu dữ liệu có thể có nhiều hơn 1 mốt không?**  
   *Đáp án:* Có, nếu có từ hai giá trị trở lên cùng đạt tần số xuất hiện cao nhất bằng nhau (mẫu đa mốt).

---

## 3. Lý thuyết trọng tâm

### 3.1. Số trung bình (Mean)

Cho mẫu số liệu không ghép nhóm kích thước $n$: $\{x_1, x_2, \dots, x_n\}$.

> [!NOTE]
> 1. **Công thức số trung bình:**
>    $$\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}$$
> 2. Nếu số liệu được cho dưới dạng bảng phân bố tần số (giá trị $x_k$ có tần số tương ứng $m_k$ với $\sum m_k = n$):
>    $$\bar{x} = \frac{m_1 x_1 + m_2 x_2 + \dots + m_k x_k}{n}$$

### 3.2. Trung vị (Median - $M_e$ hay $Q_2$)

Để tìm trung vị, bước bắt buộc đầu tiên là **sắp xếp mẫu số liệu theo thứ tự không giảm** (từ nhỏ đến lớn): $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$.

> [!NOTE]
> - Nếu $n$ là số **lẻ** ($n = 2k + 1$): Trung vị là giá trị chính giữa:
>   $$M_e = x_{(k+1)}$$
> - Nếu $n$ là số **chẵn** ($n = 2k$): Trung vị là trung bình cộng của hai giá trị chính giữa:
>   $$M_e = \frac{x_{(k)} + x_{(k+1)}}{2}$$

### 3.3. Tứ phân vị (Quartiles - $Q_1, Q_2, Q_3$)

Tứ phân vị gồm ba giá trị $Q_1, Q_2, Q_3$ chia mẫu số liệu đã sắp xếp thành 4 phần có số lượng phần tử gần như bằng nhau:

> [!TIP]
> **Quy trình tìm Tứ phân vị chuẩn:**
> 1. Sắp xếp mẫu số liệu theo thứ tự không giảm.
> 2. Tìm trung vị của cả mẫu: đó chính là tứ phân vị thứ hai **$Q_2 = M_e$**.
> 3. Tách mẫu thành hai nửa:
>    - **Nửa dưới:** gồm các giá trị nằm bên trái $Q_2$.
>    - **Nửa trên:** gồm các giá trị nằm bên phải $Q_2$.
>    *(Lưu ý: Nếu $n$ lẻ, không tính giá trị $Q_2$ vào cả hai nửa).*
> 4. **$Q_1$ (Tứ phân vị thứ nhất / Tứ phân vị dưới):** là trung vị của nửa dưới.
> 5. **$Q_3$ (Tứ phân vị thứ ba / Tứ phân vị trên):** là trung vị của nửa trên.

### 3.4. Mốt (Mode - $M_o$)

> [!NOTE]
> **Mốt** của mẫu số liệu là giá trị có tần số xuất hiện lớn nhất trong mẫu.
> - Kí hiệu: $M_o$.
> - Một mẫu có thể có một mốt, nhiều mốt, hoặc không có mốt (nếu tất cả giá trị đều có tần số xuất hiện bằng nhau).

---

## 4. Widget tương tác: Bộ Phân Tích Thống Kê & Tứ Phân Vị Động

Nhập các số liệu phân cách bằng dấu phẩy để hệ thống tự động sắp xếp, vẽ biểu đồ chấm và tính toán ngay lập tức $\bar{x}, M_e, Q_1, Q_3, M_o$:

```widget
<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; margin: 24px 0; font-family: system-ui, sans-serif;">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
    <h3 style="margin: 0; font-size: 1.15rem; color: #1e293b;">📊 Máy Tính Thống Kê Tức Thời</h3>
    <span style="font-size: 0.85rem; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 999px; font-weight: 500;">Tự động sắp xếp</span>
  </div>

  <div style="margin-bottom: 16px;">
    <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 6px;">Nhập mẫu số liệu (cách nhau bởi dấu phẩy hoặc khoảng trắng):</label>
    <input type="text" id="statInput" value="3, 5, 7, 8, 9, 11, 14, 15, 18" style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 1rem; box-sizing: border-box;" />
  </div>

  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
    <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 8px;">Dãy số đã sắp xếp tăng dần ($n =$ <span id="sampleSize">9</span>):</div>
    <div id="sortedList" style="font-family: monospace; font-size: 1.05rem; font-weight: bold; color: #1e293b; background: #f1f5f9; padding: 8px 12px; border-radius: 6px; overflow-x: auto;">3, 5, 7, 8, 9, 11, 14, 15, 18</div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px;">
    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #1e40af; font-weight: 600;">Số trung bình ($\bar{x}$)</div>
      <div id="valMean" style="font-size: 1.3rem; font-weight: 800; color: #2563eb; margin-top: 4px;">10.0</div>
    </div>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #166534; font-weight: 600;">Trung vị ($M_e / Q_2$)</div>
      <div id="valMedian" style="font-size: 1.3rem; font-weight: 800; color: #16a34a; margin-top: 4px;">9.0</div>
    </div>
    <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #92400e; font-weight: 600;">Tứ phân vị dưới ($Q_1$)</div>
      <div id="valQ1" style="font-size: 1.3rem; font-weight: 800; color: #d97706; margin-top: 4px;">6.0</div>
    </div>
    <div style="background: #fdf2f8; border: 1px solid #fbcfe8; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #9d174d; font-weight: 600;">Tứ phân vị trên ($Q_3$)</div>
      <div id="valQ3" style="font-size: 1.3rem; font-weight: 800; color: #db2777; margin-top: 4px;">14.5</div>
    </div>
    <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 12px; text-align: center;">
      <div style="font-size: 0.8rem; color: #6b21a8; font-weight: 600;">Mốt ($M_o$)</div>
      <div id="valMode" style="font-size: 1.3rem; font-weight: 800; color: #9333ea; margin-top: 4px;">Không có</div>
    </div>
  </div>
</div>

<script>
(() => {
  const statInput = document.getElementById('statInput');
  const sampleSize = document.getElementById('sampleSize');
  const sortedList = document.getElementById('sortedList');
  const valMean = document.getElementById('valMean');
  const valMedian = document.getElementById('valMedian');
  const valQ1 = document.getElementById('valQ1');
  const valQ3 = document.getElementById('valQ3');
  const valMode = document.getElementById('valMode');

  function getMedian(arr) {
    const len = arr.length;
    if (len === 0) return 0;
    if (len % 2 === 1) return arr[Math.floor(len / 2)];
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }

  function recalculate() {
    const raw = statInput.value;
    const nums = raw.split(/[\s,]+/)
                    .map(s => parseFloat(s.trim()))
                    .filter(n => !isNaN(n))
                    .sort((a, b) => a - b);

    const n = nums.length;
    if (n === 0) {
      sortedList.textContent = 'Chưa có dữ liệu';
      return;
    }

    sampleSize.textContent = n;
    sortedList.textContent = nums.join(', ');

    // Mean
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    const mean = sum / n;
    valMean.textContent = mean.toFixed(2).replace(/\.00$/, '');

    // Q2 / Median
    const q2 = getMedian(nums);
    valMedian.textContent = q2.toFixed(2).replace(/\.00$/, '');

    // Q1 & Q3
    let leftHalf = [], rightHalf = [];
    if (n % 2 === 1) {
      const mid = Math.floor(n / 2);
      leftHalf = nums.slice(0, mid);
      rightHalf = nums.slice(mid + 1);
    } else {
      leftHalf = nums.slice(0, n / 2);
      rightHalf = nums.slice(n / 2);
    }

    const q1 = getMedian(leftHalf);
    const q3 = getMedian(rightHalf);
    valQ1.textContent = q1.toFixed(2).replace(/\.00$/, '');
    valQ3.textContent = q3.toFixed(2).replace(/\.00$/, '');

    // Mode
    const freq = {};
    let maxF = 0;
    nums.forEach(x => {
      freq[x] = (freq[x] || 0) + 1;
      if (freq[x] > maxF) maxF = freq[x];
    });

    if (maxF === 1 && n > 1) {
      valMode.textContent = 'Không có';
    } else {
      const modes = Object.keys(freq).filter(k => freq[k] === maxF);
      valMode.textContent = modes.join(', ');
    }
  }

  statInput.addEventListener('input', recalculate);
  recalculate();
})();
</script>
```

---

## 5. Bốn dạng toán điển hình kèm lời giải chi tiết

### Dạng 1: Tính số trung bình của mẫu số liệu và bảng tần số

#### Phương pháp giải:
- Nếu là dãy số rời rạc: $\bar{x} = \frac{\sum x_i}{n}$.
- Nếu là bảng tần số: $\bar{x} = \frac{\sum m_i x_i}{n}$ với $n = \sum m_i$.

#### Bài toán 1
Điểm kiểm tra giữa kì môn Toán của một nhóm 10 bạn học sinh được ghi lại như sau:
$$7,5; \quad 8,0; \quad 6,5; \quad 9,0; \quad 8,5; \quad 7,0; \quad 8,0; \quad 9,5; \quad 8,0; \quad 7,0$$
Hãy tính điểm kiểm tra trung bình của nhóm học sinh này.

#### Lời giải:
Tổng số học sinh là $n = 10$.
Ta có bảng phân bố tần số:
- Điểm $6,5$: tần số $1$.
- Điểm $7,0$: tần số $2$.
- Điểm $7,5$: tần số $1$.
- Điểm $8,0$: tần số $3$.
- Điểm $8,5$: tần số $1$.
- Điểm $9,0$: tần số $1$.
- Điểm $9,5$: tần số $1$.

Điểm trung bình của nhóm:
$$\bar{x} = \frac{6,5(1) + 7,0(2) + 7,5(1) + 8,0(3) + 8,5(1) + 9,0(1) + 9,5(1)}{10}$$
$$\bar{x} = \frac{6,5 + 14,0 + 7,5 + 24,0 + 8,5 + 9,0 + 9,5}{10} = \frac{79,0}{10} = 7,9$$

---

### Dạng 2: Tìm trung vị ($M_e$) và ý nghĩa so sánh với số trung bình

#### Phương pháp giải:
1. Sắp xếp các số liệu tăng dần.
2. Dựa vào $n$ chẵn hay lẻ để xác định $M_e$.
3. Khi mẫu có giá trị đột biến cực lớn hoặc cực nhỏ, dùng $M_e$ thay thế $\bar{x}$ để mô tả dữ liệu trung tâm một cách khách quan.

#### Bài toán 2
Thời gian chờ xe buýt (tính bằng phút) của một sinh viên trong 8 ngày liên tiếp được ghi nhận:
$$5, \quad 7, \quad 6, \quad 8, \quad 4, \quad 9, \quad 6, \quad 45$$
1. Tính thời gian chờ trung bình $\bar{x}$ và trung vị $M_e$.
2. Hãy giải thích tại sao trong trường hợp này, trung vị $M_e$ phản ánh thực tế tốt hơn số trung bình $\bar{x}$.

#### Lời giải:
1. Sắp xếp mẫu dữ liệu tăng dần ($n = 8$):
   $$4, \quad 5, \quad 6, \quad 6, \quad 7, \quad 8, \quad 9, \quad 45$$
   - Số trung bình:
     $$\bar{x} = \frac{4 + 5 + 6 + 6 + 7 + 8 + 9 + 45}{8} = \frac{90}{8} = 11,25\text{ phút}$$
   - Vì $n = 8$ (chẵn), trung vị là trung bình cộng của số thứ 4 và thứ 5:
     $$M_e = \frac{x_{(4)} + x_{(5)}}{2} = \frac{6 + 7}{2} = 6,5\text{ phút}$$
2. **Nhận xét & Ý nghĩa:**
   - Giá trị $45$ phút ở ngày cuối cùng là một giá trị đột biến (có thể do kẹt xe nghiêm trọng hoặc tai nạn trên tuyến đường).
   - Số trung bình $\bar{x} = 11,25$ phút cao hơn hẳn 7 trong tổng số 8 ngày chờ đợi, không phản ánh đúng thói quen chờ xe thông thường.
   - Trung vị $M_e = 6,5$ phút không bị tác động bởi con số 45, thể hiện chính xác thời gian chờ xe điển hình của sinh viên là khoảng 6 đến 7 phút.

---

### Dạng 3: Xác định bộ tứ phân vị ($Q_1, Q_2, Q_3$)

#### Phương pháp giải:
- $Q_2 = M_e$.
- $Q_1$ là trung vị của nửa dưới.
- $Q_3$ là trung vị của nửa trên.

#### Bài toán 3
Tìm các tứ phân vị cho hai mẫu số liệu sau:
- **Mẫu A ($n = 9$ phần tử):** $12, 15, 11, 18, 20, 16, 14, 19, 25$.
- **Mẫu B ($n = 10$ phần tử):** $2, 4, 5, 7, 8, 10, 12, 15, 16, 19$.

#### Lời giải:
1. **Xét mẫu A ($n = 9$):**
   - Sắp xếp tăng dần: $11, 12, 14, 15, 16, 18, 19, 20, 25$.
   - $n = 9$ là số lẻ, giá trị chính giữa ở vị trí thứ $5$ $\Rightarrow Q_2 = 16$.
   - Nửa dưới (không tính $16$): $11, 12, 14, 15$ ($4$ phần tử) $\Rightarrow Q_1 = \frac{12 + 14}{2} = 13$.
   - Nửa trên (không tính $16$): $18, 19, 20, 25$ ($4$ phần tử) $\Rightarrow Q_3 = \frac{19 + 20}{2} = 19,5$.
   - Vậy bộ tứ phân vị của mẫu A là: $Q_1 = 13; Q_2 = 16; Q_3 = 19,5$.

2. **Xét mẫu B ($n = 10$):**
   - Đã sắp xếp: $2, 4, 5, 7, 8, 10, 12, 15, 16, 19$.
   - $n = 10$ là số chẵn, trung vị ở giữa vị trí thứ 5 và thứ 6:
     $$Q_2 = \frac{8 + 10}{2} = 9$$
   - Tách làm hai nửa đều nhau ($5$ phần tử mỗi nửa):
     - Nửa dưới: $2, 4, 5, 7, 8 \Rightarrow Q_1 = 5$ (vị trí chính giữa).
     - Nửa trên: $10, 12, 15, 16, 19 \Rightarrow Q_3 = 15$ (vị trí chính giữa).
   - Vậy bộ tứ phân vị của mẫu B là: $Q_1 = 5; Q_2 = 9; Q_3 = 15$.

---

### Dạng 4: Tìm mốt và ứng dụng trong tối ưu hóa kinh doanh

#### Phương pháp giải:
Đếm tần số xuất hiện của từng giá trị; giá trị nào có tần số lớn nhất là mốt $M_o$.

#### Bài toán 4
Một cửa hàng giày thể thao thống kê kích cỡ (size) giày bán được trong một tuần của một mẫu giày chạy bộ như sau:
$$\begin{array}{|c|c|c|c|c|c|c|}
\hline
\text{Size giày} & 38 & 39 & 40 & 41 & 42 & 43 \\
\hline
\text{Số đôi bán được} & 5 & 12 & 32 & 28 & 15 & 4 \\
\hline
\end{array}$$
1. Tìm mốt của mẫu số liệu trên.
2. Cửa hàng nên nhập thêm size giày nào nhiều nhất cho đợt hàng tới? Giải thích vì sao tính số trung bình của size giày trong trường hợp này ít có giá trị thực tế hơn mốt.

#### Lời giải:
1. Size $40$ có số lượng bán được lớn nhất là $32$ đôi $\Rightarrow$ Mốt $M_o = 40$.
2. **Ý nghĩa thực tế:**
   - Cửa hàng cần ưu tiên nhập size $40$ (và size $41$) nhiều nhất vì đây là kích cỡ bàn chân phổ biến nhất của tập khách hàng.
   - Nếu tính size giày trung bình:
     $$\bar{x} = \frac{38(5) + 39(12) + 40(32) + 41(28) + 42(15) + 43(4)}{96} = \frac{3889}{96} \approx 40,51$$
     Trên thị trường thực tế không tồn tại cỡ giày $40,51$, do đó con số trung bình không thể dùng trực tiếp để đặt hàng nhà máy, trong khi mốt $M_o = 40$ chỉ ra ngay phương án kinh doanh tối ưu.

---

## 6. Năm ứng dụng thực tế khoa học & đời sống

1. **Báo cáo Thu nhập Quốc dân & Bất bình đẳng (Kinh tế học):** Tổng cục Thống kê các nước thường công bố **Thu nhập trung vị (Median Income)** thay vì Thu nhập bình quân đầu người, vì thu nhập của một vài tỉ phú có thể làm sai lệch hoàn toàn bức tranh đời sống của 90% dân cư còn lại.
2. **Định chuẩn bài thi chuẩn hóa SAT / IELTS:** Các tổ chức khảo thí quốc tế sử dụng phân vị và tứ phân vị (Percentiles & Quartiles) để xếp hạng thí sinh: Đạt $Q_3$ (Top 25%) tức là điểm số của bạn cao hơn $75\%$ thí sinh dự thi toàn cầu.
3. **Quản trị chuỗi cung ứng & Bán lẻ:** Các chuỗi siêu thị và thời trang dùng Mốt ($M_o$) để quản trị tồn kho: Nhập số lượng lớn mặt hàng có mốt cao nhất để giảm thiểu chi phí lưu kho và đáp ứng đúng thị hiếu người tiêu dùng.
4. **Phân tích hiệu năng máy chủ (Cloud Computing):** Trong ngành CNTT, kỹ sư đo độ trễ mạng bằng trung vị ($p50$) và phân vị $99$ ($p99$) để đảm bảo $99\%$ các yêu cầu của người dùng trên toàn cầu được phản hồi dưới $200\text{ ms}$.
5. **Y học cộng đồng & Biểu đồ tăng trưởng:** Tổ chức Y tế Thế giới (WHO) xây dựng biểu đồ chiều cao, cân nặng theo độ tuổi dựa trên các đường phân vị ($Q_1, Q_2, Q_3$). Trẻ em có các chỉ số nằm giữa $Q_1$ và $Q_3$ được xem là phát triển hoàn toàn chuẩn mực.

---

## 7. Trắc nghiệm kiểm tra hiểu bài (10 câu có chấm điểm & giải thích chi tiết)

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q1",
  "question": "Cho mẫu số liệu: $2, 5, 8, 9, 11$. Số trung bình của mẫu là:",
  "options": [
    "7",
    "8",
    "7,5",
    "8,5"
  ],
  "answer": 0,
  "explanation": "$\\bar{x} = \\frac{2 + 5 + 8 + 9 + 11}{5} = \\frac{35}{5} = 7$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q2",
  "question": "Cho mẫu số liệu đã sắp xếp: $3, 4, 6, 8, 10, 14$. Trung vị của mẫu số liệu là:",
  "options": [
    "7",
    "6",
    "8",
    "7,5"
  ],
  "answer": 0,
  "explanation": "Mẫu có $n = 6$ (chẵn), trung vị là trung bình cộng của số thứ 3 và thứ 4: $M_e = \\frac{6 + 8}{2} = 7$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q3",
  "question": "Cho mẫu số liệu: $10, 12, 15, 12, 14, 18, 12, 15$. Mốt của mẫu số liệu là:",
  "options": [
    "12",
    "15",
    "14",
    "10"
  ],
  "answer": 0,
  "explanation": "Giá trị 12 xuất hiện 3 lần (nhiều nhất) nên $M_o = 12$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q4",
  "question": "Cho mẫu số liệu: $4, 7, 9, 12, 15, 18, 22$. Tứ phân vị thứ nhất $Q_1$ bằng:",
  "options": [
    "7",
    "9",
    "4",
    "8"
  ],
  "answer": 0,
  "explanation": "Mẫu đã sắp xếp có $n = 7$. $Q_2 = 12$. Nửa dưới là $4, 7, 9$ có trung vị là $7$. Vậy $Q_1 = 7$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q5",
  "question": "Cho mẫu số liệu: $1, 3, 5, 7, 9, 11, 13, 15$. Tứ phân vị thứ ba $Q_3$ bằng:",
  "options": [
    "12",
    "11",
    "13",
    "12,5"
  ],
  "answer": 0,
  "explanation": "Mẫu có $n = 8$, nửa trên gồm 4 số: $9, 11, 13, 15$. Trung vị của nửa trên là $Q_3 = \\frac{11 + 13}{2} = 12$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q6",
  "question": "Khi mẫu số liệu có chứa giá trị đột biến cực lớn, đại lượng nào phản ánh xu thế trung tâm của mẫu tốt nhất?",
  "options": [
    "Trung vị",
    "Số trung bình",
    "Độ dài khoảng biến thiên",
    "Phương sai"
  ],
  "answer": 0,
  "explanation": "Trung vị không phụ thuộc vào độ lớn của các giá trị ở hai đầu mút nên là chỉ số bền vững nhất trước các giá trị ngoại lai đột biến."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q7",
  "question": "Cho mẫu số liệu điểm kiểm tra: $6, 7, 7, 8, 8, 8, 9, 9, 9, 10$. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "Mẫu số liệu có hai mốt là 8 và 9",
    "Mẫu số liệu có duy nhất một mốt là 8",
    "Mẫu số liệu không có mốt",
    "Mốt của mẫu số liệu là 10"
  ],
  "answer": 0,
  "explanation": "Cả hai giá trị 8 và 9 đều có tần số xuất hiện cao nhất là 3 lần. Đây là mẫu có hai mốt (bimodal)."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q8",
  "question": "Cho dãy số: $3, 5, 8, x, 14$ đã được sắp xếp theo thứ tự tăng dần. Biết trung vị của dãy bằng 9. Giá trị của $x$ là:",
  "options": [
    "9",
    "8",
    "10",
    "11"
  ],
  "answer": 0,
  "explanation": "Dãy có 5 số (lẻ), trung vị chính là số ở vị trí thứ 3 là $x$. Vậy $x = 9$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q9",
  "question": "Một lớp có 40 học sinh, trong đó có 15 học sinh được 8 điểm, 10 học sinh được 9 điểm, 15 học sinh được 10 điểm. Điểm trung bình của lớp là:",
  "options": [
    "9,0",
    "8,8",
    "9,2",
    "8,5"
  ],
  "answer": 0,
  "explanation": "$\\bar{x} = \\frac{15(8) + 10(9) + 15(10)}{40} = \\frac{120 + 90 + 150}{40} = \\frac{360}{40} = 9,0$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c5_b13_q10",
  "question": "Tứ phân vị $Q_2$ của bất kì mẫu số liệu nào luôn luôn bằng:",
  "options": [
    "Trung vị của mẫu",
    "Số trung bình của mẫu",
    "Trung bình cộng của Q1 và Q3",
    "Mốt của mẫu"
  ],
  "answer": 0,
  "explanation": "Theo định nghĩa, tứ phân vị thứ hai $Q_2$ chính là trung vị của toàn bộ mẫu số liệu."
}'></div>

---

## 8. Thử thách thực tế: Dự án phân tích thời gian dùng mạng xã hội

Hãy khảo sát ngẫu nhiên 15 bạn trong lớp về thời gian lướt mạng xã hội mỗi ngày (tính bằng phút):
1. Lập bảng thống kê số liệu và sắp xếp theo thứ tự tăng dần.
2. Tìm bộ ba tứ phân vị $Q_1, Q_2, Q_3$ và diễn giải ý nghĩa: Có bao nhiêu bạn dùng dưới $Q_1$ phút và bao nhiêu bạn dùng trên $Q_3$ phút mỗi ngày?
3. Tính số trung bình và trung vị, so sánh hai con số này để xem thói quen dùng mạng của lớp có bị kéo lệch bởi một vài "thánh cày mạng" hay không!
