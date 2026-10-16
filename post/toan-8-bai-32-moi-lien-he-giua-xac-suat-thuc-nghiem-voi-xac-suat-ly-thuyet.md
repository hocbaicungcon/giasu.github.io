---
title: 'Toán 8 Bài 32: Mối liên hệ giữa xác suất thực nghiệm với xác suất lý thuyết'
description: 'Làm chủ lý thuyết Mối liên hệ giữa xác suất thực nghiệm với xác suất lý thuyết Toán 8 Bài 32: Định luật số lớn, tần số tương đối, mô phỏng tung đồng xu hàng ngàn lần, bài toán ước lượng thực tế kèm 4 dạng toán, 5 chuyên đề khoa học và 10 quiz tương tác.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Xác suất thực nghiệm
  - Xác suất lý thuyết
  - Định luật số lớn
  - Tần số tương đối
  - Kết nối tri thức
grade: 8
---

# Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất lý thuyết

Nếu tung một đồng xu cân đối $10$ lần, liệu có phải chắc chắn ta sẽ nhận được đúng $5$ lần mặt Sấp và $5$ lần mặt Ngửa không? Chắc chắn là không! Các em hoàn toàn có thể gặp $6$ lần sấp, $7$ lần sấp, thậm chí cả $10$ lần sấp. Vậy tại sao ở Bài 31, các nhà toán học lại khẳng định xác suất lý thuyết xuất hiện mặt Sấp là $\frac{1}{2} = 50\%$?

Câu trả lời nằm ở bí mật vĩ đại nhất của xác suất học: **Định luật số lớn (Law of Large Numbers)**. Nếu các em không dừng lại ở $10$ lần tung, mà kiên nhẫn tung $1\,000$ lần, $10\,000$ lần hay dùng máy tính mô phỏng $1\,000\,000$ lần, thì tỉ lệ mặt Sấp nhận được trong thực tế sẽ ngày càng tiến sát về con số lý thuyết $0{,}5000\dots$ một cách diệu kỳ!

Mối liên hệ giữa thực nghiệm và lý thuyết không chỉ giải thích quy luật của các trò chơi may rủi, mà còn là chiếc chìa khóa vạn năng cho phép loài người ước lượng số lượng cá voi dưới đáy đại dương sâu thẳm, kiểm định hiệu quả của các loại vắc-xin mới, và vận hành toàn bộ ngành bảo hiểm thế giới. Bài học này sẽ giúp các em tận mắt kiểm chứng quy luật tuyệt đẹp đó!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC BÀI 32: THỰC NGHIỆM VÀ LÝ THUYẾT</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Xác suất Thực nghiệm</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Thực hiện phép thử $N$ lần, biến cố $E$ xảy ra $m$ lần.<br>• Tỉ số $f = \frac{m}{N}$ gọi là <strong>xác suất thực nghiệm</strong> (hay tần số tương đối) của biến cố $E$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Định luật Số lớn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Khi số lần thực nghiệm $N$ càng lớn:<br>  $$f = \frac{m}{N} \approx P(E)$$<br>• Xác suất thực nghiệm dao động và hội tụ quanh giá trị xác suất lý thuyết $P(E)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Dự đoán Tần số</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biết xác suất lý thuyết $P(E)$, dự đoán trong $N$ lần thử, biến cố $E$ sẽ xuất hiện xấp xỉ:<br>  $$m \approx N \cdot P(E)\text{ lần}$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Ứng dụng Thực tế</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Ước lượng xác suất khi không có tính đồng khả năng (tỉ lệ hạt nảy mầm, kiểm tra lỗi sản phẩm).<br>• Phương pháp đánh dấu bắt lại (Capture-recapture) đếm động vật hoang dã.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Thực tế vs Lý thuyết:** Bạn Nam tung một đồng xu $10$ lần và nhận được $7$ lần mặt Sấp. Xác suất thực nghiệm xuất hiện mặt Sấp của Nam là bao nhiêu?
2. **Kỳ vọng:** Khi tung đồng xu $100$ lần, theo lý thuyết ta kỳ vọng nhận được khoảng bao nhiêu lần mặt Sấp?
3. **Thí nghiệm lịch sử:** Nhà toán học Karl Pearson từng tung đồng xu $24\,000$ lần và ghi nhận được $12\,012$ lần mặt Sấp. Tỉ số thực nghiệm bằng bao nhiêu?
4. **Dự đoán hạt giống:** Một lô hạt giống có tỉ lệ nảy mầm là $92\%$. Nếu gieo $500$ hạt giống thì dự kiến có bao nhiêu hạt sẽ nảy mầm?
5. **Điều kiện hội tụ:** Để xác suất thực nghiệm phản ánh sát nhất xác suất lý thuyết, số lần làm thí nghiệm cần phải như thế nào?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. $f = \frac{7}{10} = 0{,}7$ (tức $70\%$).
> 2. Kỳ vọng khoảng $100 \times \frac{1}{2} = 50$ lần.
> 3. $f = \frac{12\,012}{24\,000} = 0{,}5005$ (vô cùng gần với số lý thuyết $0{,}5$).
> 4. Số hạt nảy mầm dự kiến: $500 \times 92\% = 500 \times 0{,}92 = 460$ hạt.
> 5. Số lần làm thí nghiệm $N$ phải **rất lớn** (càng nhiều lần thì sai số càng bé).

---

## I. Lý thuyết Trọng tâm

### 1. Xác suất thực nghiệm của một biến cố

> [!IMPORTANT]
> **ĐỊNH NGHĨA:**
> Khi thực hiện một phép thử ngẫu nhiên $N$ lần liên tiếp trong cùng các điều kiện, nếu biến cố $E$ xảy ra $m$ lần thì tỉ số:
> $$f = \frac{m}{N} = \frac{\text{Số lần biến cố } E \text{ xảy ra}}{\text{Tổng số lần thực hiện phép thử}}$$
> được gọi là **xác suất thực nghiệm** (hay **tần số tương đối**) của biến cố $E$ sau $N$ lần thử đó.

*Bảng các thí nghiệm tung đồng xu kinh điển trong lịch sử:*

| Nhà khoa học | Thời gian | Số lần tung đồng xu ($N$) | Số lần mặt Sấp xuất hiện ($m$) | Xác suất thực nghiệm ($f = \frac{m}{N}$) |
| :--- | :---: | :---: | :---: | :---: |
| **Comte de Buffon** | 1707 – 1788 | $4\,040$ | $2\,048$ | $0{,}5069$ |
| **Augustus De Morgan** | 1806 – 1871 | $4\,092$ | $2\,048$ | $0{,}5005$ |
| **Karl Pearson** | 1857 – 1936 | $12\,000$ | $6\,019$ | $0{,}5016$ |
| **Karl Pearson** | 1857 – 1936 | $24\,000$ | $12\,012$ | $0{,}5005$ |
| **John Kerrich** (khi bị giam trong Thế chiến II) | 1940 | $10\,000$ | $5\,067$ | $0{,}5067$ |

Nhận xét: Mặc dù các nhà khoa học sống ở các thế kỷ khác nhau và tung đồng xu độc lập, tất cả các tỉ số thực nghiệm đều xấp xỉ $0{,}5$!

---

### 2. Định luật số lớn và Mối liên hệ giữa Thực nghiệm & Lý thuyết

> [!IMPORTANT]
> **ĐỊNH LUẬT SỐ LỚN (JACOB BERNOULLI - 1713):**
> Khi số lần thực hiện phép thử $N$ ngày càng lớn, xác suất thực nghiệm của một biến cố sẽ **càng gần với xác suất lý thuyết** của biến cố đó:
> $$\frac{m}{N} \approx P(E) \quad (\text{khi } N \to \infty)$$

Ý nghĩa triết học và thực tiễn:
1. **Kiểm chứng lý thuyết:** Xác suất lý thuyết không phải là lý thuyết viển vông, nó là giá trị trung tâm mà thế giới thực nghiệm hội tụ về sau số lần lặp vô cùng lớn.
2. **Ước lượng thực tế:** Trong cuộc sống, có vô vàn biến cố không đồng khả năng (như tỉ lệ một ca mổ phẫu thuật thành công, tỉ lệ một chip bán dẫn bị lỗi, tỉ lệ khách hàng bấm vào một nút quảng cáo trên website). Ta không thể dùng công thức $P = \frac{k}{n}$ để tính. Nhưng nhờ Định luật số lớn, ta có thể làm thí nghiệm hàng ngàn lần và dùng **xác suất thực nghiệm** $\frac{m}{N}$ để **ước lượng xác suất lý thuyết** của biến cố!

---

### 3. Dùng xác suất lý thuyết để dự đoán tần số xuất hiện

Nếu biết xác suất lý thuyết của một biến cố $E$ là $P(E)$, thì khi thực hiện phép thử đó $N$ lần (với $N$ đủ lớn), ta có thể dự đoán biến cố $E$ sẽ xuất hiện khoảng:
$$m \approx N \cdot P(E)\text{ lần}$$

*Ví dụ:* Khi gieo một con xúc xắc 6 mặt cân đối $1\,200$ lần, ta biết xác suất xuất hiện mặt 6 chấm là $P = \frac{1}{6}$.
Do đó, số lần mặt 6 chấm xuất hiện dự kiến vào khoảng:
$$m \approx 1\,200 \times \frac{1}{6} = 200\text{ lần}$$

---

## Ứng dụng Tương tác Trực quan

Dưới đây là cỗ máy mô phỏng **Tung đồng xu thực nghiệm trực tiếp**. Các em có thể bấm tung 1 lần, 10 lần, 100 lần, thậm chí 1000 lần bằng thuật toán máy tính và quan sát biểu đồ cột tần số thực tế tiến sát vạch chuẩn $50\%$ lý thuyết:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC: ĐỊNH LUẬT SỐ LỚN VỚI PHÉP THỬ TUNG ĐỒNG XU</h4>
  <p style="text-align: center; font-size: 0.95em; color: var(--text-secondary, #475569);">
    Xác suất lý thuyết: $P(\text{Sấp}) = P(\text{Ngửa}) = 0{,}5\ (50\%)$. Hãy bấm thử nghiệm với số lần tăng dần!
  </p>
  
  <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin: 16px 0;">
    <button onclick="runCoinExperiment(1)" style="padding: 8px 14px; border-radius: 6px; border: 1px solid #3b82f6; background: #dbeafe; color: #1d4ed8; font-weight: bold; cursor: pointer;">+ 1 lần</button>
    <button onclick="runCoinExperiment(10)" style="padding: 8px 14px; border-radius: 6px; border: 1px solid #3b82f6; background: #dbeafe; color: #1d4ed8; font-weight: bold; cursor: pointer;">+ 10 lần</button>
    <button onclick="runCoinExperiment(100)" style="padding: 8px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: white; font-weight: bold; cursor: pointer;">+ 100 lần</button>
    <button onclick="runCoinExperiment(1000)" style="padding: 8px 14px; border-radius: 6px; border: 1px solid #10b981; background: #10b981; color: white; font-weight: bold; cursor: pointer;">⚡ + 1 000 lần</button>
    <button onclick="resetCoinExperiment()" style="padding: 8px 14px; border-radius: 6px; border: 1px solid #ef4444; background: #fee2e2; color: #b91c1c; font-weight: bold; cursor: pointer;">🔄 Đặt lại từ đầu</button>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; text-align: center;">
    <div style="background:#fef3c7; border:1px solid #fcd34d; border-radius:8px; padding:12px;">
      <div style="font-weight:bold; color:#b45309; font-size:1.1em;">MẶT SẤP (S)</div>
      <div id="stat-heads" style="font-size:1.8em; font-weight:bold; color:#d97706; margin:4px 0;">0</div>
      <div id="pct-heads" style="font-size:0.95em; color:#78350f;">0%</div>
    </div>
    <div style="background:#dbeafe; border:1px solid #93c5fd; border-radius:8px; padding:12px;">
      <div style="font-weight:bold; color:#1d4ed8; font-size:1.1em;">MẶT NGỬA (N)</div>
      <div id="stat-tails" style="font-size:1.8em; font-weight:bold; color:#2563eb; margin:4px 0;">0</div>
      <div id="pct-tails" style="font-size:0.95em; color:#1e3a8a;">0%</div>
    </div>
  </div>

  <div id="total-exp-summary" style="background: var(--bg-secondary, #f8fafc); border-radius: 8px; padding: 14px; border: 1px dashed #cbd5e1; text-align: center; font-size: 1.0em; line-height: 1.7;">
    Tổng số lần tung: <strong>N = 0</strong>. Nhấn các nút trên để bắt đầu thí nghiệm!
  </div>
</div>

<script>
var totalFlips = 0;
var headsCount = 0;
var tailsCount = 0;

function runCoinExperiment(n) {
  for (var i = 0; i < n; i++) {
    if (Math.random() < 0.5) {
      headsCount++;
    } else {
      tailsCount++;
    }
  }
  totalFlips += n;
  updateExpUI();
}

function resetCoinExperiment() {
  totalFlips = 0;
  headsCount = 0;
  tailsCount = 0;
  updateExpUI();
}

function updateExpUI() {
  document.getElementById('stat-heads').innerText = headsCount;
  document.getElementById('stat-tails').innerText = tailsCount;

  if (totalFlips === 0) {
    document.getElementById('pct-heads').innerText = '0%';
    document.getElementById('pct-tails').innerText = '0%';
    document.getElementById('total-exp-summary').innerHTML = 'Tổng số lần tung: <strong>N = 0</strong>. Nhấn các nút trên để bắt đầu thí nghiệm!';
    return;
  }

  var pH = (headsCount / totalFlips * 100).toFixed(2);
  var pT = (tailsCount / totalFlips * 100).toFixed(2);
  document.getElementById('pct-heads').innerText = pH + '%';
  document.getElementById('pct-tails').innerText = pT + '%';

  var diff = Math.abs(pH - 50.0).toFixed(2);
  var html = 'Tổng số lần tung: <strong>N = ' + totalFlips + ' lần</strong>.<br>' +
    '• Xác suất thực nghiệm mặt Sấp: f(S) = ' + headsCount + '/' + totalFlips + ' = <strong>' + pH + '%</strong>.<br>' +
    '• Sai lệch so với lý thuyết (50%): <strong style="color:' + (diff < 1 ? '#15803d' : '#b91c1c') + ';">' + diff + '%</strong>.<br>' +
    '<span style="font-size:0.9em; color:#64748b;">(Quan sát: Khi N tăng từ 10 lên 1 000, độ lệch càng co hẹp về gần 0% - chứng minh Định luật số lớn!)</span>';
  document.getElementById('total-exp-summary').innerHTML = html;
}
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính xác suất thực nghiệm của biến cố từ bảng số liệu

**Phương pháp giải:**
1. Xác định tổng số lần làm thí nghiệm $N$.
2. Đếm số lần biến cố $E$ xảy ra là $m$.
3. Tính xác suất thực nghiệm: $f(E) = \frac{m}{N}$.

---

#### Bài toán 1:
Một xạ thủ bắn $150$ viên đạn vào bia bia ngắm, kết quả ghi nhận có $123$ viên trúng vòng 10 điểm.
a) Tính xác suất thực nghiệm của biến cố "Xạ thủ bắn trúng vòng 10 điểm".
b) Tính xác suất thực nghiệm của biến cố "Xạ thủ bắn trượt vòng 10 điểm".

**Lời giải:**

a) Tổng số lần bắn là $N = 150$. Số lần bắn trúng vòng 10 điểm là $m = 123$.
Xác suất thực nghiệm của biến cố bắn trúng vòng 10 điểm là:
$$f = \frac{123}{150} = \frac{41}{50} = 0{,}82 = 82\%$$

b) Số viên đạn bắn trượt vòng 10 điểm là:
$$150 - 123 = 27\text{ viên}$$
Xác suất thực nghiệm của biến cố bắn trượt vòng 10 điểm là:
$$f_{\text{trượt}} = \frac{27}{150} = \frac{9}{50} = 0{,}18 = 18\%$$
*(Hoặc tính qua biến cố đối: $1 - 0{,}82 = 0{,}18$)*

---

### Dạng 2: So sánh xác suất thực nghiệm và xác suất lý thuyết

**Phương pháp giải:**
1. Tính xác suất lý thuyết $P(E) = \frac{k}{n}$.
2. Tính xác suất thực nghiệm $f(E) = \frac{m}{N}$.
3. So sánh hiệu số chênh lệch $|f(E) - P(E)|$.

---

#### Bài toán 2:
Gieo một con xúc xắc 6 mặt cân đối $100$ lần liên tiếp, bạn Bình ghi nhận được mặt 4 chấm xuất hiện $18$ lần.
a) Tính xác suất lý thuyết của biến cố $E$: "Xuất hiện mặt 4 chấm".
b) Tính xác suất thực nghiệm của biến cố $E$ sau 100 lần gieo của Bình.
c) Tính độ lệch giữa xác suất thực nghiệm và xác suất lý thuyết. Có thể kết luận con xúc xắc của Bình không cân đối không?

**Lời giải:**

a) Khi gieo xúc xắc 6 mặt cân đối:
Tập kết quả có thể $n = 6$. Mặt 4 chấm chỉ có 1 kết quả thuận lợi $k = 1$.
Xác suất lý thuyết là:
$$P(E) = \frac{1}{6} \approx 0{,}1667 = 16{,}67\%$$

b) Bình gieo $N = 100$ lần, mặt 4 chấm xuất hiện $m = 18$ lần.
Xác suất thực nghiệm là:
$$f(E) = \frac{18}{100} = 0{,}18 = 18\%$$

c) Độ chênh lệch giữa thực nghiệm và lý thuyết là:
$$|f(E) - P(E)| = |0{,}18 - 0{,}1667| = 0{,}0133 \approx 1{,}33\%$$
Độ chênh lệch này rất nhỏ ($1{,}33\%$). Theo Định luật số lớn, sau 100 lần gieo, xác suất thực nghiệm luôn dao động xung quanh giá trị lý thuyết. Do đó **hoàn toàn không thể kết luận con xúc xắc bị lệch**, con xúc xắc vẫn hoàn toàn cân đối và bình thường.

---

### Dạng 3: Dùng xác suất lý thuyết để dự đoán số lần xuất hiện của biến cố

**Phương pháp giải:**
1. Tính xác suất lý thuyết $P(E)$.
2. Áp dụng công thức kỳ vọng thực nghiệm:
   $$\text{Số lần dự kiến} = N \cdot P(E)$$

---

#### Bài toán 3:
Một xưởng sản xuất bóng đèn LED kiểm định chất lượng thấy rằng xác suất để một bóng đèn đạt tiêu chuẩn xuất khẩu là $0{,}96$.
a) Nếu xưởng sản xuất được $15\,000$ bóng đèn trong một tuần thì dự kiến có bao nhiêu bóng đèn đạt chuẩn xuất khẩu?
b) Dự kiến có bao nhiêu bóng đèn không đạt tiêu chuẩn xuất khẩu?

**Lời giải:**

a) Với xác suất đạt chuẩn là $P = 0{,}96$, trong $N = 15\,000$ bóng đèn, số bóng đèn đạt chuẩn dự kiến là:
$$m \approx N \cdot P = 15\,000 \times 0{,}96 = 14\,400\text{ (bóng đèn)}$$

b) Số bóng đèn không đạt chuẩn xuất khẩu dự kiến là:
$$15\,000 - 14\,400 = 600\text{ (bóng đèn)}$$
*(Hoặc tính: $15\,000 \times (1 - 0{,}96) = 15\,000 \times 0{,}04 = 600$ bóng)*

---

### Dạng 4: Ứng dụng xác suất thực nghiệm trong phương pháp Bắt lại đánh dấu (Capture-Recapture)

**Phương pháp giải:**
Để ước lượng kích thước quần thể $N$ (số cá thể động vật trong tự nhiên):
1. Bắt $M$ cá thể, đánh dấu rồi thả lại vào tự nhiên.
2. Sau một thời gian, bắt ngẫu nhiên $n$ cá thể, thấy có $m$ cá thể có dấu.
3. Vì tỉ lệ có dấu trong mẫu thực nghiệm xấp xỉ tỉ lệ có dấu trong toàn bộ quần thể:
   $$\frac{m}{n} \approx \frac{M}{N} \implies N \approx \frac{M \cdot n}{m}$$

---

#### Bài toán 4:
Để ước lượng số lượng cá trắm cỏ trong một hồ nước sinh thái rộng lớn, các nhà sinh vật học tiến hành như sau:
- Họ đánh bắt $200$ con cá trắm cỏ, bấm một chiếc vòng nhỏ bằng nhựa vào vây lưng để đánh dấu rồi thả trở lại hồ.
- Hai tuần sau, khi đàn cá đã bơi hòa lẫn hoàn toàn vào quần thể, họ tiến hành đánh bắt ngẫu nhiên đợt hai được $150$ con cá trắm cỏ, trong đó phát hiện có $6$ con mang dấu vây lưng.
Hãy ước lượng tổng số cá trắm cỏ đang sinh sống trong hồ nước đó.

**Lời giải:**

- Số cá được đánh dấu ban đầu: $M = 200$ con.
- Số cá bắt được ở đợt hai: $n = 150$ con.
- Số cá mang dấu tìm thấy ở đợt hai: $m = 6$ con.

Xác suất thực nghiệm bắt được một con cá mang dấu ở đợt hai là:
$$f = \frac{m}{n} = \frac{6}{150} = \frac{1}{25} = 0{,}04$$
Vì đàn cá đã phân bố ngẫu nhiên đều khắp hồ, tỉ lệ cá mang dấu trong hồ xấp xỉ tỉ lệ này:
$$\frac{M}{N} \approx \frac{m}{n} \iff \frac{200}{N} \approx \frac{6}{150}$$
Suy ra số lượng cá trắm cỏ trong hồ ước lượng là:
$$N \approx \frac{200 \times 150}{6} = \frac{30\,000}{6} = 5\,000\text{ (con cá)}$$
Vậy ước lượng trong hồ có khoảng $5\,000$ con cá trắm cỏ.

---

## III. 5 Chuyên đề Thực tế và Nâng cao Tư duy Khoa học

### Chuyên đề 1: Jacob Bernoulli và Công trình Ars Conjectandi (1713)

Năm 1713, tác phẩm toán học vĩ đại *Ars Conjectandi* (Nghệ thuật phỏng đoán) của Jacob Bernoulli được xuất bản sau khi ông qua đời:
- Ông đã mất hơn $20$ năm ròng rã để chứng minh chặt chẽ bằng toán học: Xác suất thực nghiệm $\frac{m}{N}$ hội tụ theo xác suất về giá trị lý thuyết $p$.
- Định luật số lớn khẳng định rằng: Thế giới tự nhiên dẫu có vẻ hỗn loạn và ngẫu nhiên ở quy mô cá thể, nhưng lại tuân theo quy luật trật tự tuyệt đối ở quy mô số đông — nguyên lý nền tảng của toàn bộ nền Thống kê học hiện đại!

---

### Chuyên đề 2: Bảng Tỷ lệ Tử vong (Actuarial Life Table) trong Ngành Bảo hiểm

Làm thế nào các tập đoàn bảo hiểm như Prudential hay Manulife có thể định giá hợp đồng bảo hiểm nhân thọ cho một người 35 tuổi mà không bị phá sản?
- Họ thống kê dữ liệu thực nghiệm hàng triệu người dân trong suốt $50$ năm qua: Xác suất một người 35 tuổi tử vong trong năm tới là $f = 0{,}0015$ ($0{,}15\%$).
- Nhờ số lượng khách hàng tham gia $N$ lên tới hàng triệu người (số lớn), số tiền bồi thường thực tế hàng năm luôn sát sạt với dự báo toán học, đảm bảo công ty bảo hiểm luôn hoạt động an toàn và chi trả đầy đủ quyền lợi cho khách hàng.

---

### Chuyên đề 3: Tiêu chuẩn Quản lý Chất lượng 6 Sigma ($6\sigma$) tại TSMC và Samsung

Trong các nhà máy sản xuất chip bán dẫn vi xử lý 3nm (như chip Apple A17 Pro):
- Một tấm wafer silicon chứa hàng tỷ bóng bán dẫn vi mô.
- Tiêu chuẩn Six Sigma quy định: Tỉ lệ sản phẩm lỗi thực nghiệm phải nhỏ hơn $3{,}4$ sản phẩm trên $1$ triệu sản phẩm ($0{,}00034\%$).
Nhờ các thuật toán kiểm soát chất lượng bằng thống kê thực nghiệm liên tục, các nhà máy duy trì được năng suất sản xuất hàng trăm triệu vi xử lý điện thoại mỗi năm mà tỷ lệ lỗi gần như bằng không.

---

### Chuyên đề 4: Thử nghiệm Lâm sàng Thuốc và Vắc-xin giai đoạn 3 (FDA & WHO)

Khi phát minh ra một loại vắc-xin mới, các nhà khoa học không thể suy đoán lý thuyết mà bắt buộc phải tiến hành thử nghiệm lâm sàng mù đôi (Double-blind Trial) trên $N = 40\,000$ tình nguyện viên:
- Một nửa tiêm vắc-xin, một nửa tiêm giả dược (placebo).
- Thống kê xác suất thực nghiệm nhiễm bệnh giữa hai nhóm để tính toán Hiệu lực vắc-xin (Vaccine Efficacy):
  $$\text{VE} = 1 - \frac{f_{\text{vắc-xin}}}{f_{\text{giả dược}}}$$
Chỉ khi kết quả thực nghiệm vượt ngưỡng $50\%$ với độ tin cậy thống kê $95\%$, vắc-xin mới được Tổ chức Y tế Thế giới (WHO) cấp phép tiêm chủng cho toàn nhân loại.

---

### Chuyên đề 5: Học Tăng Cường (Reinforcement Learning) của AlphaGo

Năm 2016, siêu máy tính AlphaGo của DeepMind đánh bại nhà vô địch cờ vây Lee Sedol:
- Trò chơi cờ vây có $10^{170}$ thế cờ có thể, nhiều hơn số nguyên tử trong toàn bộ vũ trụ quan sát được.
- AlphaGo không thể tính hết các khả năng, nên nó đã tự đấu với chính mình hơn $30$ triệu ván cờ. Dựa vào xác suất thực nghiệm chiến thắng của từng nước đi tích lũy qua hàng triệu ván thử nghiệm số lớn, AI đã tìm ra những nước đi thần thánh vượt qua cả trực giác của con người!

---

## IV. 10 Câu hỏi Trắc nghiệm Tương tác kiểm tra Năng lực (Có chấm điểm tức thì)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Xác suất thực nghiệm của biến cố E được tính theo công thức nào?",
  "options": [
    "f = m / N (với m là số lần E xảy ra, N là tổng số lần thử)",
    "f = N / m",
    "f = m * N",
    "f = N - m"
  ],
  "answer": 0,
  "explanation": "Xác suất thực nghiệm bằng tỉ số giữa số lần biến cố xảy ra m và tổng số lần thực hiện phép thử N: f = m/N."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Khi tung một đồng xu 50 lần thấy có 28 lần xuất hiện mặt Sấp. Xác suất thực nghiệm xuất hiện mặt Sấp là:",
  "options": [
    "28/50 = 0.56 (56%)",
    "22/50 = 0.44",
    "0.5 (50%)",
    "28/22"
  ],
  "answer": 0,
  "explanation": "f = m/N = 28/50 = 0.56 = 56%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Theo Định luật số lớn, khi số lần thực hiện phép thử N càng lớn thì:",
  "options": [
    "Xác suất thực nghiệm càng gần với xác suất lý thuyết",
    "Xác suất thực nghiệm luôn luôn bằng chính xác xác suất lý thuyết",
    "Xác suất thực nghiệm càng ngày càng tăng",
    "Xác suất thực nghiệm giảm dần về 0"
  ],
  "answer": 0,
  "explanation": "Khi N càng lớn, xác suất thực nghiệm f = m/N càng dao động quanh giá trị lý thuyết và ngày càng tiến gần sát tới giá trị lý thuyết."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Gieo một con xúc xắc 6 mặt cân đối 600 lần. Số lần mặt 1 chấm dự kiến xuất hiện vào khoảng:",
  "options": [
    "100 lần",
    "60 lần",
    "200 lần",
    "150 lần"
  ],
  "answer": 0,
  "explanation": "Xác suất lý thuyết là P = 1/6. Số lần xuất hiện dự kiến: m ≈ 600 · (1/6) = 100 lần."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Kiểm tra ngẫu nhiên 500 sản phẩm của một dây chuyền may thì thấy có 15 sản phẩm lỗi. Xác suất thực nghiệm của biến cố \"Sản phẩm đạt chất lượng\" là:",
  "options": [
    "485/500 = 0.97 (97%)",
    "15/500 = 0.03",
    "0.95",
    "485/15"
  ],
  "answer": 0,
  "explanation": "Số sản phẩm đạt chất lượng là 500 - 15 = 485. Tỉ số: f = 485/500 = 0.97 = 97%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Tung một đồng xu 10 lần mà cả 10 lần đều xuất hiện mặt Ngửa. Điều này có thể xảy ra không?",
  "options": [
    "Có thể xảy ra vì đây là phép thử ngẫu nhiên",
    "Không thể xảy ra vì xác suất lý thuyết là 50%",
    "Chắc chắn xảy ra",
    "Không bao giờ xảy ra"
  ],
  "answer": 0,
  "explanation": "Mặc dù xác suất xảy ra 10 lần ngửa liên tiếp là nhỏ (1/1024), nhưng đây là phép thử ngẫu nhiên nên hoàn toàn CÓ THỂ xảy ra."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một túi hạt giống có tỉ lệ nảy mầm là 85%. Gieo 400 hạt giống thì số hạt dự kiến nảy mầm là:",
  "options": [
    "340 hạt",
    "300 hạt",
    "360 hạt",
    "380 hạt"
  ],
  "answer": 0,
  "explanation": "Số hạt nảy mầm dự kiến: 400 · 85% = 400 · 0.85 = 340 hạt."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Bắt 100 con cá trong ao đem đánh dấu rồi thả lại. Sau đó bắt 80 con cá thấy có 4 con có dấu. Ước lượng số cá trong ao là:",
  "options": [
    "2 000 con",
    "1 600 con",
    "800 con",
    "4 000 con"
  ],
  "answer": 0,
  "explanation": "Tỉ lệ: 4 / 80 = 100 / N <=> N = (100 · 80) / 4 = 8 000 / 4 = 2 000 con cá."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Khi gieo xúc xắc 6 mặt nhiều lần, tần số tương đối xuất hiện mặt có số chấm là số chẵn sẽ dao động quanh giá trị nào?",
  "options": [
    "0.5 (1/2)",
    "0.33 (1/3)",
    "0.167 (1/6)",
    "0.25 (1/4)"
  ],
  "answer": 0,
  "explanation": "Xác suất lý thuyết xuất hiện số chẵn là 3/6 = 0.5. Do đó tần số tương đối sẽ hội tụ quanh giá trị 0.5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Nhận xét nào sau đây là ĐÚNG nhất về mối liên hệ giữa xác suất thực nghiệm và xác suất lý thuyết?",
  "options": [
    "Khi số phép thử N rất lớn, xác suất thực nghiệm xấp xỉ xác suất lý thuyết",
    "Xác suất thực nghiệm luôn luôn bằng xác suất lý thuyết",
    "Xác suất lý thuyết chỉ đúng khi số phép thử N nhỏ hơn 10",
    "Xác suất thực nghiệm không liên quan gì đến xác suất lý thuyết"
  ],
  "answer": 0,
  "explanation": "Theo Định luật số lớn, khi N rất lớn thì xác suất thực nghiệm xấp xỉ bằng xác suất lý thuyết."
}'></div>

---

## V. Bài tập Tự luyện và Đề rèn luyện Tư duy

### Bài tập 1:
Một người thực hiện thí nghiệm gieo một con xúc xắc 6 mặt $120$ lần và ghi lại số lần xuất hiện của các mặt như sau:

| Số chấm trên mặt | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Số lần xuất hiện ($m$) | $22$ | $19$ | $18$ | $21$ | $23$ | $17$ |

a) Tính xác suất thực nghiệm của biến cố "Xuất hiện mặt có số chấm là số chẵn".
b) Tính xác suất thực nghiệm của biến cố "Xuất hiện mặt có số chấm là số nguyên tố".
c) So sánh các xác suất thực nghiệm trên với các xác suất lý thuyết tương ứng.

### Bài tập 2:
Tung một đồng xu $200$ lần thấy có $108$ lần xuất hiện mặt Sấp.
a) Tính xác suất thực nghiệm xuất hiện mặt Sấp; mặt Ngửa.
b) Tính độ chênh lệch giữa xác suất thực nghiệm và xác suất lý thuyết của mặt Sấp.

### Bài tập 3:
Một nhà máy sản xuất linh kiện điện tử kiểm tra $2\,000$ sản phẩm thì thấy có $16$ sản phẩm bị lỗi mạch.
a) Tính xác suất thực nghiệm của biến cố "Một sản phẩm xuất xưởng bị lỗi mạch".
b) Nếu nhà máy sản xuất được $150\,000$ linh kiện trong một tháng thì dự kiến có khoảng bao nhiêu linh kiện bị lỗi mạch?

### Bài tập 4 (Toán thực tế sinh thái học):
Để ước lượng số lượng rùa biển đang sinh sống tại một khu bảo tồn vịnh biển:
- Các nhà khoa học đã bắt $80$ cá thể rùa biển, gắn thẻ định vị điện tử lên mai rùa rồi thả lại về biển.
- Một tháng sau, họ bắt ngẫu nhiên $120$ cá thể rùa biển tại cùng khu vực thì ghi nhận được có $4$ cá thể mang thẻ định vị.
a) Tính xác suất thực nghiệm bắt được một cá thể rùa mang thẻ định vị trong đợt bắt thứ hai.
b) Hãy ước lượng tổng số rùa biển đang sinh sống tại khu bảo tồn vịnh biển đó.
