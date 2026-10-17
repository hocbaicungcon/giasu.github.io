---
title: 'Toán 10 Bài 27: Thực hành tính xác suất trong một số bài toán đơn giản - Kỹ thuật & Bài tập'
description: 'Luyện tập kỹ năng tính xác suất bằng tổ hợp, sơ đồ cây, quy tắc cộng và biến cố đối trong Toán 10. Kèm widget bốc thăm may mắn mô phỏng thực tế và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Xác suất thống kê
  - Tính xác suất
  - Bài toán chọn bi
  - Sơ đồ cây xác suất
  - Biến cố đối
  - Kết nối tri thức
---

# Toán 10 Bài 27: Thực hành tính xác suất trong một số bài toán đơn giản

Nếu Bài 26 đã xây dựng nền móng lý thuyết về không gian mẫu và định nghĩa cổ điển, thì Bài 27 là bước chuyển mình thực chiến: vận dụng toàn bộ sức mạnh của Đại số tổ hợp (quy tắc cộng, quy tắc nhân, hoán vị, chỉnh hợp, tổ hợp) và biến cố đối để giải quyết các bài toán xác suất đa dạng trong đời sống: từ bốc thăm may mắn, xếp chỗ ngồi, kiểm tra chất lượng sản phẩm đến xác suất trúng thưởng.

---

## 1. Sơ đồ tư duy về Kỹ thuật tính xác suất

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #166534;">1. Phương pháp Tổ hợp (Chọn mẫu)</h4>
    <p style="margin: 0; font-size: 14px; color: #14532d;">
      • Chọn ngẫu nhiên $k$ phần tử từ $n$ phần tử:<br>
      $$n(\Omega) = C_n^k$$<br>
      • Phân tích biến cố $A$ theo các nhóm con độc lập và dùng quy tắc nhân: $n(A) = C_{n_1}^{k_1} \times C_{n_2}^{k_2}$.<br>
      • Xác suất: $P(A) = \frac{n(A)}{n(\Omega)}$.
    </p>
  </div>
  <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">2. Phương pháp Biến cố đối</h4>
    <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
      • Dấu hiệu nhận biết: Yêu cầu tính xác suất có từ khóa <em>"ít nhất một"</em>.<br>
      • Biến cố đối $\overline{A}$: "Không có phần tử nào thỏa mãn".<br>
      • Công thức tính ngược:<br>
      $$P(A) = 1 - P(\overline{A})$$
    </p>
  </div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9a3412;">3. Phương pháp Sơ đồ cây</h4>
    <p style="margin: 0; font-size: 14px; color: #7c2d12;">
      • Áp dụng cho các phép thử gồm nhiều bước nối tiếp nhau.<br>
      • Gốc là thời điểm bắt đầu.<br>
      • Ghi các xác suất tương ứng lên từng nhánh cây.<br>
      • Xác suất của mỗi kết quả ở ngọn bằng tích các xác suất dọc theo nhánh đi tới ngọn đó.
    </p>
  </div>
  <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #6b21a8;">4. Quy tắc cộng xác suất</h4>
    <p style="margin: 0; font-size: 14px; color: #581c87;">
      • Hai biến cố $A$ và $B$ <strong>xung khắc</strong> khi chúng không thể đồng thời xảy ra ($A \cap B = \emptyset$).<br>
      • Khi đó:<br>
      $$P(A \cup B) = P(A) + P(B)$$<br>
      • Mở rộng: Nếu $A_1, A_2, \dots, A_k$ đôi một xung khắc thì $P(\bigcup A_i) = \sum P(A_i)$.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi nhanh

1. **Một hộp có 4 quả bóng xanh và 6 quả bóng đỏ. Lấy ngẫu nhiên 2 quả bóng. Số phần tử của không gian mẫu $n(\Omega)$ là bao nhiêu?**
   *Mẹo:* $n(\Omega) = C_{10}^2 = \frac{10 \times 9}{2} = 45$.

2. **Rút ngẫu nhiên một lá bài từ bộ bài 52 lá. Xác suất để rút được lá bài màu đỏ hoặc lá bài Át (Ace) là bao nhiêu?**
   *Mẹo:* Bộ bài có 26 lá đỏ và 4 lá Át (trong đó có 2 lá Át đỏ). Số lá thỏa mãn là $26 + 4 - 2 = 28$. Xác suất $P = \frac{28}{52} = \frac{7}{13}$.

3. **Một gia đình sinh 2 người con. Giả sử xác suất sinh con trai và con gái là như nhau ($50\%$). Xác suất để gia đình có ít nhất 1 con gái là bao nhiêu?**
   *Mẹo:* Biến cố đối là sinh cả 2 con trai ($P = \frac{1}{4}$). Xác suất có ít nhất 1 gái: $1 - \frac{1}{4} = \frac{3}{4} = 75\%$.

4. **Chọn ngẫu nhiên một số tự nhiên có 2 chữ số (từ 10 đến 99). Xác suất để số đó chia hết cho 9 là bao nhiêu?**
   *Mẹo:* Có $99 - 10 + 1 = 90$ số. Các số chia hết cho 9: $18, 27, \dots, 99$ gồm $\frac{99 - 18}{9} + 1 = 10$ số. Xác suất $P = \frac{10}{90} = \frac{1}{9}$.

5. **Xếp 3 bạn Nam và 2 bạn Nữ vào một hàng ngang. Xác suất để 2 bạn Nữ luôn đứng cạnh nhau là bao nhiêu?**
   *Mẹo:* Buộc 2 nữ thành 1 khối $\implies 4! \times 2! = 48$ cách. Tổng số cách xếp là $5! = 120$. Xác suất $P = \frac{48}{120} = \frac{2}{5} = 40\%$.

---

## 3. Kiến thức trọng tâm & Kỹ thuật giải toán

### 3.1. Quy trình chuẩn 4 bước giải bài toán xác suất

> [!NOTE]
> Để giải chính xác mọi bài toán tính xác suất, hãy tuân thủ quy trình 4 bước sau:
> 1. **Bước 1 (Xác định phép thử & Không gian mẫu):**
>    Đọc kỹ đề bài để nhận diện hành động ngẫu nhiên, tính $n(\Omega)$ bằng quy tắc đếm hoặc tổ hợp $C_n^k$.
> 2. **Bước 2 (Xác định biến cố cần tính $A$):**
>    Mô tả rõ ràng điều kiện xảy ra của biến cố $A$. Xem xét có nên dùng biến cố đối $\overline{A}$ hay không.
> 3. **Bước 3 (Tính số kết quả thuận lợi $n(A)$):**
>    Sử dụng quy tắc nhân (các công đoạn), quy tắc cộng (chia trường hợp rời nhau) hoặc tổ hợp để tính $n(A)$.
> 4. **Bước 4 (Áp dụng công thức và kết luận):**
>    $$P(A) = \frac{n(A)}{n(\Omega)}$$
>    Rút gọn phân số về dạng tối giản hoặc số thập phân.

### 3.2. Biến cố xung khắc và Quy tắc cộng xác suất

> [!IMPORTANT]
> Hai biến cố $A$ và $B$ được gọi là **xung khắc** nếu chúng không thể cùng xảy ra trong một lần thử:
> $$A \cap B = \emptyset$$
> Khi $A$ và $B$ xung khắc, xác suất để $A$ hoặc $B$ xảy ra bằng tổng xác suất của chúng:
> $$P(A \cup B) = P(A) + P(B)$$

Nếu hai biến cố $A$ và $B$ tùy ý (có thể cùng xảy ra), ta có công thức tổng quát:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

---

## 4. Widget tương tác: Hộp Bốc Thăm May Mắn Ảo (Lucky Draw Simulator)

Mô phỏng phép thử bốc thăm các viên bi trong hộp kín. Bạn có thể tự đặt số lượng bi đỏ, xanh, vàng và số viên bi bốc ra để xem xác suất lý thuyết cũng như thực hiện bốc thăm ngẫu nhiên trực tiếp:

```widget
<div style="max-width: 760px; margin: 20px auto; font-family: system-ui, -apple-system, sans-serif; border: 1px solid #cbd5e1; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden;">
  <div style="background: linear-gradient(135deg, #059669, #047857); padding: 16px 20px; color: #ffffff;">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 700; color: #f8fafc;">Hộp Bốc Thăm May Mắn (Lucky Draw)</h3>
    <p style="margin: 0; font-size: 13px; color: #a7f3d0;">Thiết lập số bi trong hộp, rút ngẫu nhiên k viên và theo dõi kết quả thực nghiệm</p>
  </div>

  <div style="padding: 14px 16px; background: #f0fdf4; border-bottom: 1px solid #bbf7d0; display: flex; flex-wrap: wrap; gap: 14px; align-items: center; justify-content: space-around;">
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #dc2626;"></span>
      <label style="font-size: 13px; font-weight: 600; color: #334155;">Bi Đỏ:</label>
      <input type="number" id="inp-red" min="1" max="10" value="5" style="width: 48px; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px; text-align: center; font-weight: bold;">
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #2563eb;"></span>
      <label style="font-size: 13px; font-weight: 600; color: #334155;">Bi Xanh:</label>
      <input type="number" id="inp-blue" min="1" max="10" value="4" style="width: 48px; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px; text-align: center; font-weight: bold;">
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #eab308;"></span>
      <label style="font-size: 13px; font-weight: 600; color: #334155;">Bi Vàng:</label>
      <input type="number" id="inp-yellow" min="1" max="10" value="3" style="width: 48px; padding: 4px; border: 1px solid #cbd5e1; border-radius: 4px; text-align: center; font-weight: bold;">
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <label style="font-size: 13px; font-weight: 600; color: #047857;">Số rút (k):</label>
      <input type="number" id="inp-draw" min="1" max="5" value="3" style="width: 48px; padding: 4px; border: 1px solid #059669; border-radius: 4px; text-align: center; font-weight: bold; color: #047857;">
    </div>
  </div>

  <div style="padding: 16px; display: grid; grid-template-columns: 1fr 240px; gap: 16px; align-items: center;">
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; min-height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <div style="font-size: 12px; color: #64748b; margin-bottom: 10px;">KẾT QUẢ LƯỢT RÚT VỪA QUA:</div>
      <div id="drawn-balls-display" style="display: flex; gap: 10px; margin-bottom: 16px; min-height: 40px; align-items: center;">
        <span style="font-size: 13px; color: #94a3b8;">Bấm "Bốc thăm" để rút bi</span>
      </div>
      <div style="display: flex; gap: 10px;">
        <button id="btn-draw-1" style="padding: 8px 16px; background: #059669; color: #fff; border: none; border-radius: 6px; font-weight: bold; font-size: 13px; cursor: pointer;">Bốc thăm 1 lần</button>
        <button id="btn-draw-50" style="padding: 8px 14px; background: #fff; color: #059669; border: 1px solid #059669; border-radius: 6px; font-weight: bold; font-size: 13px; cursor: pointer;">Bốc 50 lần</button>
      </div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-size: 13px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Xác suất lý thuyết:</div>
      <div style="font-size: 12px; color: #475569; line-height: 1.8;">
        <div>Tổng số bi trong hộp: <b id="lbl-total-balls">12</b> viên</div>
        <div>Không gian mẫu: C_<span id="lbl-n">12</span>^<span id="lbl-k">3</span> = <b id="lbl-omega">220</b></div>
        <div style="margin-top: 6px; padding-top: 6px; border-top: 1px solid #e2e8f0;">
          <div><b>P(Toàn đỏ):</b> <span id="p-all-red" style="color: #dc2626; font-weight: bold;">4.5%</span></div>
          <div><b>P(Đủ 3 màu):</b> <span id="p-all-diff" style="color: #059669; font-weight: bold;">27.3%</span></div>
          <div><b>P(Ít nhất 1 đỏ):</b> <span id="p-at-least-red" style="color: #2563eb; font-weight: bold;">84.1%</span></div>
        </div>
      </div>
      <div id="sim-stats-log" style="margin-top: 10px; font-size: 11px; color: #64748b; border-top: 1px dashed #cbd5e1; padding-top: 6px;">
        Đã thử: 0 lần
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var inpR = document.getElementById('inp-red');
  var inpB = document.getElementById('inp-blue');
  var inpY = document.getElementById('inp-yellow');
  var inpK = document.getElementById('inp-draw');

  var btn1 = document.getElementById('btn-draw-1');
  var btn50 = document.getElementById('btn-draw-50');
  var disp = document.getElementById('drawn-balls-display');
  var simLog = document.getElementById('sim-stats-log');

  var lblTotal = document.getElementById('lbl-total-balls');
  var lblN = document.getElementById('lbl-n');
  var lblK = document.getElementById('lbl-k');
  var lblOmega = document.getElementById('lbl-omega');
  var pRed = document.getElementById('p-all-red');
  var pDiff = document.getElementById('p-all-diff');
  var pAtLeast = document.getElementById('p-at-least-red');

  var totalSims = 0;
  var simCounts = { allRed: 0, allDiff: 0, atLeastRed: 0 };

  // Typed values can ignore min/max, so clamp them before any counting.
  function clampInput(el) {
    var lo = parseInt(el.min, 10) || 1, hi = parseInt(el.max, 10) || 99, v = parseInt(el.value, 10);
    if (isNaN(v)) v = lo;
    return Math.max(lo, Math.min(hi, v));
  }

  function comb(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    var res = 1;
    for (var i = 1; i <= k; i++) res = (res * (n - i + 1)) / i;
    return Math.round(res);
  }

  function updateTheory() {
    var r = clampInput(inpR);
    var b = clampInput(inpB);
    var y = clampInput(inpY);
    var k = clampInput(inpK);

    var n = r + b + y;
    if (k > n) { k = n; inpK.value = k; }

    lblTotal.textContent = n;
    lblN.textContent = n;
    lblK.textContent = k;

    var omega = comb(n, k);
    lblOmega.textContent = omega;

    // Toàn đỏ
    var probRed = (comb(r, k) / omega) * 100;
    pRed.textContent = probRed.toFixed(1) + '%';

    // Đủ 3 màu (chỉ khả thi nếu k >= 3)
    var probDiff = 0;
    if (k === 3) {
      probDiff = ((comb(r, 1) * comb(b, 1) * comb(y, 1)) / omega) * 100;
    } else {
      probDiff = 0;
    }
    pDiff.textContent = k === 3 ? (probDiff.toFixed(1) + '%') : 'Chỉ áp dụng khi k = 3';

    // Ít nhất 1 đỏ: 1 - P(không có đỏ nào)
    var probNoRed = comb(n - r, k) / omega;
    var probAtLeast = (1 - probNoRed) * 100;
    pAtLeast.textContent = probAtLeast.toFixed(1) + '%';
  }

  function drawOnce() {
    var r = clampInput(inpR);
    var b = clampInput(inpB);
    var y = clampInput(inpY);
    var k = clampInput(inpK);

    var urn = [];
    for (var i = 0; i < r; i++) urn.push('red');
    for (var i = 0; i < b; i++) urn.push('blue');
    for (var i = 0; i < y; i++) urn.push('yellow');

    // Shuffle & pick k
    var chosen = [];
    var tempUrn = urn.slice();
    for (var i = 0; i < k; i++) {
      var idx = Math.floor(Math.random() * tempUrn.length);
      chosen.push(tempUrn.splice(idx, 1)[0]);
    }

    totalSims++;
    var cRed = chosen.filter(function(c) { return c === 'red'; }).length;
    var cBlue = chosen.filter(function(c) { return c === 'blue'; }).length;
    var cYellow = chosen.filter(function(c) { return c === 'yellow'; }).length;

    if (cRed === k) simCounts.allRed++;
    if (cRed > 0 && cBlue > 0 && cYellow > 0) simCounts.allDiff++;
    if (cRed > 0) simCounts.atLeastRed++;

    // Hiển thị bóng
    var colorMap = { red: '#dc2626', blue: '#2563eb', yellow: '#eab308' };
    var nameMap = { red: 'Đỏ', blue: 'Xanh', yellow: 'Vàng' };
    var html = '';
    chosen.forEach(function(c) {
      html += '<div style="display: flex; flex-direction: column; align-items: center;">' +
        '<div style="width: 32px; height: 32px; border-radius: 50%; background: ' + colorMap[c] + '; box-shadow: 0 2px 6px rgba(0,0,0,0.2);"></div>' +
        '<span style="font-size: 11px; color: #475569; margin-top: 4px;">' + nameMap[c] + '</span>' +
      '</div>';
    });
    disp.innerHTML = html;

    simLog.textContent = 'Đã thử ' + totalSims + ' lần | Thực tế: Ít nhất 1 đỏ ' + ((simCounts.atLeastRed / totalSims) * 100).toFixed(1) + '%';
  }

  inpR.addEventListener('input', function() { totalSims = 0; updateTheory(); });
  inpB.addEventListener('input', function() { totalSims = 0; updateTheory(); });
  inpY.addEventListener('input', function() { totalSims = 0; updateTheory(); });
  inpK.addEventListener('input', function() { totalSims = 0; updateTheory(); });

  btn1.addEventListener('click', drawOnce);
  btn50.addEventListener('click', function() {
    for (var i = 0; i < 50; i++) drawOnce();
  });

  updateTheory();
})();
</script>
```

---

## 5. Các dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Bài toán chọn mẫu (Bi, quả cầu, học sinh)

**Phương pháp giải:**
1. Tính số cách chọn $k$ vật từ $n$ vật: $n(\Omega) = C_n^k$.
2. Phân loại đối tượng thành các nhóm: $n_1$ vật nhóm $1$, $n_2$ vật nhóm $2$,...
3. Dùng tổ hợp chọn số vật tương ứng cho từng nhóm rồi nhân lại: $n(A) = C_{n_1}^{k_1} \times C_{n_2}^{k_2} \times \dots$

#### Bài toán 1
Một hộp đựng $7$ viên bi xanh, $5$ viên bi đỏ và $3$ viên bi vàng. Lấy ngẫu nhiên đồng thời $3$ viên bi. Tính xác suất để:
a) Cả $3$ viên bi lấy ra có đủ ba màu khác nhau.
b) Cả $3$ viên bi lấy ra có cùng một màu.

**Lời giải:**
Tổng số viên bi trong hộp là $7 + 5 + 3 = 15$ viên bi.
Số phần tử của không gian mẫu khi lấy ngẫu nhiên 3 viên bi:
$$n(\Omega) = C_{15}^3 = \frac{15 \times 14 \times 13}{6} = 455$$

a) Gọi $A$ là biến cố: "Lấy được $3$ viên bi đủ cả ba màu".
Để có đủ 3 màu, ta cần lấy đúng 1 viên bi xanh, 1 viên bi đỏ và 1 viên bi vàng:
- Chọn 1 bi xanh từ 7 bi xanh có $C_7^1 = 7$ cách.
- Chọn 1 bi đỏ từ 5 bi đỏ có $C_5^1 = 5$ cách.
- Chọn 1 bi vàng từ 3 bi vàng có $C_3^1 = 3$ cách.
Theo quy tắc nhân, số kết quả thuận lợi cho $A$ là:
$$n(A) = C_7^1 \times C_5^1 \times C_3^1 = 7 \times 5 \times 3 = 105$$
Xác suất của biến cố $A$ là:
$$P(A) = \frac{n(A)}{n(\Omega)} = \frac{105}{455} = \frac{3}{13}$$

b) Gọi $B$ là biến cố: "Lấy được $3$ viên bi có cùng một màu".
Ba viên cùng màu có thể là: cùng xanh, cùng đỏ hoặc cùng vàng:
- Cùng xanh: $C_7^3 = 35$ cách.
- Cùng đỏ: $C_5^3 = 10$ cách.
- Cùng vàng: $C_3^3 = 1$ cách.
Theo quy tắc cộng:
$$n(B) = C_7^3 + C_5^3 + C_3^3 = 35 + 10 + 1 = 46$$
Xác suất của biến cố $B$ là:
$$P(B) = \frac{n(B)}{n(\Omega)} = \frac{46}{455}$$

---

### Dạng 2: Bài toán sắp xếp vị trí ngẫu nhiên

**Phương pháp giải:**
1. Xếp ngẫu nhiên $n$ đối tượng vào $n$ vị trí $\implies n(\Omega) = P_n = n!$.
2. Nếu có yêu cầu một số đối tượng phải đứng cạnh nhau: dùng **phương pháp buộc phần tử**.
3. Nếu yêu cầu không đứng cạnh nhau: dùng **phương pháp vách ngăn**.

#### Bài toán 2
Xếp ngẫu nhiên $4$ học sinh nam và $2$ học sinh nữ ngồi vào một dãy ghế gồm $6$ chỗ ngồi. Tính xác suất để $2$ học sinh nữ ngồi cạnh nhau.

**Lời giải:**
1. Số phần tử của không gian mẫu khi xếp 6 học sinh vào 6 ghế:
   $$n(\Omega) = 6! = 720$$
2. Gọi $A$ là biến cố: "Hai bạn nữ ngồi cạnh nhau".
   Áp dụng phương pháp buộc:
   - Xem 2 bạn nữ là một khối $U$.
   - Sắp xếp khối $U$ cùng 4 bạn nam (tổng cộng 5 đối tượng) vào hàng ghế: có $5! = 120$ cách.
   - Hoán vị nội bộ 2 bạn nữ trong khối $U$: có $2! = 2$ cách.
   Số kết quả thuận lợi cho biến cố $A$ là:
   $$n(A) = 5! \times 2! = 120 \times 2 = 240$$
3. Xác suất của biến cố $A$ là:
   $$P(A) = \frac{n(A)}{n(\Omega)} = \frac{240}{720} = \frac{1}{3}$$

---

### Dạng 3: Bài toán lập số tự nhiên ngẫu nhiên

#### Bài toán 3
Từ các chữ số thuộc tập hợp $X = \{1; 2; 3; 4; 5; 6\}$, người ta lập ngẫu nhiên một số tự nhiên gồm $4$ chữ số đôi một khác nhau. Tính xác suất để số được lập là một **số tự nhiên chẵn**.

**Lời giải:**
1. Mỗi số tự nhiên gồm 4 chữ số khác nhau lấy từ tập $X$ (gồm 6 phần tử) là một chỉnh hợp chập 4 của 6:
   $$n(\Omega) = A_6^4 = 6 \times 5 \times 4 \times 3 = 360$$
2. Gọi $E$ là biến cố: "Số tự nhiên được lập là số chẵn".
   Số chẵn có dạng $\overline{abcd}$ với $a, b, c, d \in X$ đôi một khác nhau:
   - Chữ số tận cùng $d$ phải là chữ số chẵn: $d \in \{2; 4; 6\} \implies$ có $3$ cách chọn cho $d$.
   - Ba chữ số $a, b, c$ được chọn từ $5$ chữ số còn lại của $X$ và sắp xếp thứ tự: có $A_5^3 = 5 \times 4 \times 3 = 60$ cách.
   Số kết quả thuận lợi cho biến cố $E$ là:
   $$n(E) = 3 \times A_5^3 = 3 \times 60 = 180$$
3. Xác suất để số được chọn là số chẵn:
   $$P(E) = \frac{n(E)}{n(\Omega)} = \frac{180}{360} = \frac{1}{2}$$

---

### Dạng 4: Tính xác suất bằng Biến cố đối

#### Bài toán 4
Một lô hàng có $20$ sản phẩm điện tử, trong đó có $3$ sản phẩm bị lỗi phế phẩm. Nhân viên kiểm định chất lượng bốc ngẫu nhiên $4$ sản phẩm từ lô hàng để kiểm tra. Tính xác suất để trong $4$ sản phẩm bốc ra có **ít nhất một sản phẩm bị lỗi**.

**Lời giải:**
1. Không gian mẫu là số cách chọn 4 sản phẩm từ 20 sản phẩm:
   $$n(\Omega) = C_{20}^4 = \frac{20 \times 19 \times 18 \times 17}{24} = 4.845$$
2. Gọi $A$ là biến cố: "Trong 4 sản phẩm lấy ra có ít nhất một sản phẩm bị lỗi".
   Biến cố đối $\overline{A}$: "Cả 4 sản phẩm lấy ra đều là sản phẩm đạt chuẩn (không có sản phẩm nào bị lỗi)".
   Số sản phẩm đạt chuẩn là $20 - 3 = 17$ sản phẩm.
   Số cách chọn 4 sản phẩm đạt chuẩn:
   $$n(\overline{A}) = C_{17}^4 = \frac{17 \times 16 \times 15 \times 14}{24} = 2.380$$
3. Xác suất của biến cố đối:
   $$P(\overline{A}) = \frac{n(\overline{A})}{n(\Omega)} = \frac{2.380}{4.845} = \frac{28}{57}$$
4. Xác suất để có ít nhất một sản phẩm bị lỗi là:
   $$P(A) = 1 - P(\overline{A}) = 1 - \frac{28}{57} = \frac{29}{57} \approx 50,88\%$$

---

## 6. Ứng dụng thực tiễn của Kỹ thuật tính xác suất

1. **Kiểm tra chất lượng mẫu trong nhà máy sản xuất (AQL Testing):** Thay vì kiểm tra từng con chip vi xử lý (tốn kém thời gian và chi phí), các kỹ sư chỉ rút ngẫu nhiên mẫu $k = 50$ con chip từ lô hàng $10.000$ con. Nếu xác suất gặp phế phẩm vượt quá ngưỡng cho phép, toàn bộ lô hàng sẽ bị từ chối xuất xưởng.
2. **Khảo sát xã hội học & Thăm dò ý kiến bầu cử:** Bằng cách chọn ngẫu nhiên có trọng số mẫu $1.000$ cử tri đại diện cho $100$ triệu dân, các nhà khoa học dữ liệu có thể dự đoán kết quả bầu cử với độ tin cậy $95\%$ và biên độ sai số dưới $3\%$.
3. **Mã xác thực một lần OTP (One-Time Password):** Một mã OTP gồm 6 chữ số gửi về điện thoại có $10^6 = 1.000.000$ tổ hợp. Nếu ngân hàng giới hạn tối đa 5 lần nhập sai, xác suất để kẻ gian đoán mò trúng mã OTP chỉ là $\frac{5}{1.000.000} = 0,0005\%$.
4. **Phân tích gen di truyền bệnh lý:** Bác sĩ tư vấn di truyền tính xác suất một đứa trẻ sinh ra mắc bệnh tan máu bẩm sinh Thalassemia khi cả bố và mẹ đều mang gen lặn $Aa$: xác suất sinh con mang kiểu gen đồng hợp lặn $aa$ là $25\%$.
5. **Cơ chế chống gian lận trong thi cử trắc nghiệm:** Bộ GD&ĐT sử dụng giải thuật xáo trộn thứ tự câu hỏi và thứ tự 4 đáp án A, B, C, D để tạo ra 24 mã đề thi khác nhau trong một phòng thi, khiến xác suất hai thí sinh ngồi cạnh nhau có chung đáp án ngẫu nhiên giảm xuống gần bằng $0$.

---

## 7. Bài tập trắc nghiệm tự luyện

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q1",
  "question": "Một hộp đựng 6 viên bi đỏ và 4 viên bi xanh. Lấy ngẫu nhiên 2 viên bi. Xác suất để lấy được 2 viên bi màu đỏ là:",
  "options": [
    "\\frac{1}{3}",
    "\\frac{1}{2}",
    "\\frac{2}{5}",
    "\\frac{1}{5}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = C_{10}^2 = 45$. Số cách chọn 2 bi đỏ là $C_6^2 = 15$. Xác suất $P = \\frac{15}{45} = \\frac{1}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q2",
  "question": "Một tổ học sinh gồm 5 bạn nam và 3 bạn nữ. Chọn ngẫu nhiên 2 bạn đi làm nhiệm vụ. Xác suất để chọn được 1 nam và 1 nữ là:",
  "options": [
    "\\frac{15}{28}",
    "\\frac{5}{14}",
    "\\frac{3}{14}",
    "\\frac{1}{2}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = C_8^2 = 28$. Số cách chọn 1 nam 1 nữ là $C_5^1 \\times C_3^1 = 15$. Xác suất $P = \\frac{15}{28}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q3",
  "question": "Gieo đồng thời hai con xúc xắc 6 mặt. Xác suất để tích số chấm trên hai con xúc xắc là một số lẻ bằng:",
  "options": [
    "\\frac{1}{4}",
    "\\frac{1}{2}",
    "\\frac{3}{4}",
    "\\frac{1}{8}"
  ],
  "answer": 0,
  "explanation": "Tích là số lẻ khi và chỉ khi cả hai xúc xắc đều ra mặt lẻ. Mỗi con xúc xắc có 3 mặt lẻ $\\{1; 3; 5\\} \\implies 3 \\times 3 = 9$ kết quả. Xác suất $P = \\frac{9}{36} = \\frac{1}{4}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q4",
  "question": "Một hộp có 8 viên bi trắng và 4 viên bi đen. Lấy ngẫu nhiên 3 viên bi. Xác suất để lấy được ít nhất một viên bi màu đen là:",
  "options": [
    "\\frac{41}{55}",
    "\\frac{14}{55}",
    "\\frac{3}{11}",
    "\\frac{8}{11}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = C_{12}^3 = 220$. Biến cố đối: cả 3 viên toàn trắng $\\implies C_8^3 = 56$. Xác suất: $1 - \\frac{56}{220} = 1 - \\frac{14}{55} = \\frac{41}{55}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q5",
  "question": "Xếp ngẫu nhiên 4 bạn An, Bình, Cường, Dũng ngồi vào một bàn dài gồm 4 ghế. Xác suất để An và Bình ngồi cạnh nhau là:",
  "options": [
    "\\frac{1}{2}",
    "\\frac{1}{3}",
    "\\frac{1}{4}",
    "\\frac{2}{3}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = 4! = 24$. Buộc An và Bình thành 1 khối $\\implies 3! \\times 2! = 12$ cách. Xác suất $P = \\frac{12}{24} = \\frac{1}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q6",
  "question": "Từ các chữ số 1, 2, 3, 4, 5, lập một số tự nhiên có 3 chữ số đôi một khác nhau. Xác suất để số đó chia hết cho 5 là:",
  "options": [
    "\\frac{1}{5}",
    "\\frac{1}{10}",
    "\\frac{2}{5}",
    "\\frac{1}{3}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = A_5^3 = 60$. Số chia hết cho 5 tận cùng bằng 5 $\\implies c = 5$, chọn $a, b$ có $A_4^2 = 12$ cách. Xác suất $P = \\frac{12}{60} = \\frac{1}{5}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q7",
  "question": "Một bài thi trắc nghiệm gồm 4 câu hỏi độc lập, mỗi câu có 4 phương án trả lời và chỉ có 1 phương án đúng. Một học sinh đánh bừa ngẫu nhiên cả 4 câu. Xác suất để học sinh đó trả lời ĐÚNG CẢ 4 CÂU là:",
  "options": [
    "\\frac{1}{256}",
    "\\frac{1}{16}",
    "\\frac{1}{64}",
    "\\frac{4}{256}"
  ],
  "answer": 0,
  "explanation": "Mỗi câu xác suất đúng là $\\frac{1}{4}$. Vì 4 câu độc lập: $P = \\left(\\frac{1}{4}\\right)^4 = \\frac{1}{256}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q8",
  "question": "Một lớp có 20 học sinh nam và 20 học sinh nữ. Chọn ngẫu nhiên 2 bạn. Xác suất để 2 bạn được chọn có cùng giới tính là:",
  "options": [
    "\\frac{19}{39}",
    "\\frac{20}{39}",
    "\\frac{1}{2}",
    "\\frac{18}{39}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = C_{40}^2 = 780$. Cùng giới tính: cùng nam ($C_{20}^2 = 190$) hoặc cùng nữ ($C_{20}^2 = 190$) $\\implies 190 + 190 = 380$. Xác suất $P = \\frac{380}{780} = \\frac{19}{39}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q9",
  "question": "Cho hai biến cố xung khắc $A$ và $B$ với $P(A) = 0,2$ và $P(B) = 0,5$. Xác suất $P(A \\cup B)$ bằng:",
  "options": [
    "0,7",
    "0,1",
    "0,3",
    "0,25"
  ],
  "answer": 0,
  "explanation": "Vì $A$ và $B$ xung khắc nên $P(A \\cup B) = P(A) + P(B) = 0,2 + 0,5 = 0,7$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b27_q10",
  "question": "Một hộp có 5 bóng đèn, trong đó có 2 bóng bị hỏng. Lấy ngẫu nhiên 2 bóng để lắp vào phòng học. Xác suất để cả 2 bóng đèn đều hoạt động tốt là:",
  "options": [
    "\\frac{3}{10}",
    "\\frac{1}{10}",
    "\\frac{3}{5}",
    "\\frac{2}{5}"
  ],
  "answer": 0,
  "explanation": "Số bóng tốt là $5 - 2 = 3$ bóng. $n(\\Omega) = C_5^2 = 10$. Chọn 2 bóng tốt: $C_3^2 = 3$. Xác suất $P = \\frac{3}{10}$."
}'></div>

---

## 8. Dự án thử thách thực tế: Kiểm định chất lượng linh kiện điện tử

**Bài toán thực tế:**
Một công ty công nghệ nhập khẩu một lô hàng gồm $100$ cảm biến vi mạch. Theo hợp đồng, nếu trong lô hàng có từ $5$ cảm biến bị lỗi trở lên thì công ty có quyền trả lại toàn bộ lô hàng cho nhà sản xuất.
Do chi phí kiểm tra từng cảm biến rất cao, bộ phận KCS quyết định lấy mẫu ngẫu nhiên $5$ cảm biến để thử nghiệm. Nếu phát hiện **ít nhất một cảm biến bị lỗi**, toàn bộ lô hàng sẽ bị từ chối nhận.

**Nhiệm vụ:**
1. Giả sử lô hàng thực tế có đúng $5$ cảm biến bị lỗi. Tính xác suất để bộ phận KCS phát hiện ra lỗi và trả lại lô hàng thành công.
2. Nếu muốn nâng xác suất phát hiện lỗi lên trên $50\%$, bộ phận KCS cần tăng kích thước mẫu thử ngẫu nhiên từ $5$ lên bao nhiêu cảm biến?

*Gợi ý:*
- $n(\Omega) = C_{100}^5 = 75.287.520$.
- Số cách chọn 5 cảm biến toàn tốt: $C_{95}^5 = 57.940.584$.
- Xác suất phát hiện ít nhất 1 lỗi: $1 - \frac{C_{95}^5}{C_{100}^5} = 1 - 0,7696 \approx 23,04\%$.
- Để xác suất vượt $50\%$, ta cần $(0,95)^k < 0,5 \implies k \ge 14$ cảm biến.
