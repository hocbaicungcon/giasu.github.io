---
title: 'Toán 10 Bài 26: Biến cố và định nghĩa cổ điển của xác suất - Không gian mẫu & Tính toán'
description: 'Làm chủ lý thuyết phép thử, không gian mẫu, biến cố và định nghĩa cổ điển của xác suất Toán 10. Kèm widget gieo đồng xu, gieo xúc xắc trực quan và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Xác suất thống kê
  - Biến cố
  - Không gian mẫu
  - Định nghĩa cổ điển của xác suất
  - Biến cố đối
  - Kết nối tri thức
---

# Toán 10 Bài 26: Biến cố và định nghĩa cổ điển của xác suất

Bạn tung một đồng xu để chọn sân trước trận bóng đá, gieo một con xúc xắc trong trò chơi cờ cá ngựa, hay chờ đợi kết quả dự báo thời tiết ngày mai có mưa hay không. Tất cả những hiện tượng không thể đoán trước chính xác kết quả nhưng biết trước toàn bộ các khả năng có thể xảy ra đều là đối tượng nghiên cứu của **Lý thuyết xác suất**.

---

## 1. Sơ đồ tư duy về Biến cố và Xác suất cổ điển

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #166534;">1. Phép thử & Không gian mẫu ($\Omega$)</h4>
    <p style="margin: 0; font-size: 14px; color: #14532d;">
      • <strong>Phép thử ngẫu nhiên:</strong> Hành động không biết trước kết quả dù lặp lại trong điều kiện giống nhau.<br>
      • <strong>Không gian mẫu $\Omega$:</strong> Tập hợp tất cả các kết quả có thể xảy ra của phép thử.<br>
      • Số phần tử không gian mẫu ký hiệu là $n(\Omega)$ hoặc $|\Omega|$.
    </p>
  </div>
  <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">2. Biến cố ($A \subset \Omega$)</h4>
    <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
      • <strong>Biến cố $A$:</strong> Là một tập con của không gian mẫu $\Omega$.<br>
      • Biến cố chắc chắn: $\Omega$ (luôn luôn xảy ra).<br>
      • Biến cố không thể: $\emptyset$ (không bao giờ xảy ra).<br>
      • Biến cố đối $\overline{A}$: "Biến cố $A$ không xảy ra", $\overline{A} = \Omega \setminus A$.
    </p>
  </div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9a3412;">3. Định nghĩa cổ điển của xác suất</h4>
    <p style="margin: 0; font-size: 14px; color: #7c2d12;">
      • Giả sử các kết quả của $\Omega$ là <strong>đồng khả năng</strong>:<br>
      $$P(A) = \frac{n(A)}{n(\Omega)} = \frac{|A|}{|\Omega|}$$<br>
      • $n(A)$: Số kết quả thuận lợi cho biến cố $A$.<br>
      • $n(\Omega)$: Tổng số kết quả có thể của phép thử.
    </p>
  </div>
  <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #6b21a8;">4. Các tính chất nền tảng</h4>
    <p style="margin: 0; font-size: 14px; color: #581c87;">
      • $0 \le P(A) \le 1$ với mọi biến cố $A$.<br>
      • $P(\Omega) = 1$ và $P(\emptyset) = 0$.<br>
      • <strong>Xác suất biến cố đối:</strong><br>
      $$P(\overline{A}) = 1 - P(A) \iff P(A) = 1 - P(\overline{A})$$<br>
      • Cực kỳ hữu hiệu cho bài toán <em>"ít nhất một"</em>.
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi nhanh

1. **Gieo một đồng xu cân đối 1 lần. Xác suất để đồng xu xuất hiện mặt Sấp (S) là bao nhiêu?**
   *Mẹo:* Không gian mẫu $\Omega = \{S; N\} \implies n(\Omega) = 2$. Biến cố $A = \{S\} \implies n(A) = 1$. Vậy $P(A) = \frac{1}{2} = 50\%$.

2. **Gieo một con xúc xắc 6 mặt cân đối. Xác suất để xuất hiện mặt chấm chẵn là bao nhiêu?**
   *Mẹo:* Mặt chẵn là $\{2; 4; 6\}$ gồm 3 khả năng. Tổng số khả năng là 6. Xác suất $P = \frac{3}{6} = \frac{1}{2}$.

3. **Gieo đồng thời hai con xúc xắc. Không gian mẫu có tất cả bao nhiêu phần tử?**
   *Mẹo:* Theo quy tắc nhân, mỗi con xúc xắc có 6 mặt: $n(\Omega) = 6 \times 6 = 36$ phần tử.

4. **Biến cố đối của biến cố $A$: "Trong 3 phát bắn có ít nhất một phát trúng bia" là gì?**
   *Mẹo:* Biến cố đối $\overline{A}$ là phủ định hoàn toàn: "Cả 3 phát bắn đều không trúng bia (trượt hết)".

5. **Nếu xác suất một vận động viên ném bóng rổ trúng rổ là $0,75$ thì xác suất ném trượt là bao nhiêu?**
   *Mẹo:* Áp dụng công thức biến cố đối: $P = 1 - 0,75 = 0,25$.

---

## 3. Kiến thức trọng tâm

### 3.1. Phép thử ngẫu nhiên và Không gian mẫu

> [!NOTE]
> - **Phép thử ngẫu nhiên** (gọi tắt là **phép thử**) là một hành động hay thực nghiệm mà kết quả của nó không thể biết trước, nhưng ta có thể liệt kê được tất cả các kết quả có thể xảy ra.
> - Ký hiệu phép thử là $T$.
> - **Không gian mẫu** của phép thử là tập hợp tất cả các kết quả có thể xảy ra của phép thử đó, ký hiệu là $\Omega$ (chữ cái Hy Lạp Omega).
> - Số phần tử của không gian mẫu được ký hiệu là $n(\Omega)$ hoặc $|\Omega|$.

**Ví dụ:**
- Phép thử $T_1$: "Gieo một đồng xu 2 lần liên tiếp".
  Không gian mẫu:
  $$\Omega = \{SS, SN, NS, NN\} \implies n(\Omega) = 4$$
- Phép thử $T_2$: "Gieo một con xúc xắc 6 mặt".
  Không gian mẫu:
  $$\Omega = \{1; 2; 3; 4; 5; 6\} \implies n(\Omega) = 6$$

### 3.2. Biến cố và Biến cố đối

> [!NOTE]
> - Một **biến cố** $A$ liên quan đến phép thử $T$ là một tập con của không gian mẫu $\Omega$ ($A \subset \Omega$).
> - Ta nói biến cố $A$ **xảy ra** trong một lần thực hiện phép thử nếu kết quả của phép thử đó là một phần tử thuộc tập hợp $A$.
> - Mỗi phần tử của $A$ được gọi là một **kết quả thuận lợi** cho biến cố $A$.

Các biến cố đặc biệt:
- **Biến cố chắc chắn:** Tập $\Omega$ luôn luôn xảy ra trong mọi lần thử.
- **Biến cố không thể:** Tập rỗng $\emptyset$ không bao giờ xảy ra.
- **Biến cố đối:** Cho biến cố $A$. Biến cố "Không xảy ra $A$" được gọi là **biến cố đối** của $A$, ký hiệu là $\overline{A}$.
  $$\overline{A} = \Omega \setminus A$$

### 3.3. Định nghĩa cổ điển của xác suất

> [!IMPORTANT]
> Giả thiết rằng tất cả các kết quả của phép thử trong không gian mẫu $\Omega$ là **đồng khả năng** xuất hiện.
> Khi đó, xác suất của biến cố $A$, ký hiệu là $P(A)$, được định nghĩa bởi công thức:
> $$P(A) = \frac{n(A)}{n(\Omega)}$$
> trong đó:
> - $n(A)$ là số phần tử của tập hợp $A$ (số kết quả thuận lợi cho $A$).
> - $n(\Omega)$ là số phần tử của không gian mẫu $\Omega$ (tổng số kết quả có thể xảy ra).

### 3.4. Các tính chất cơ bản của xác suất

1. Với mọi biến cố $A$, ta luôn có:
   $$0 \le P(A) \le 1$$
2. Xác suất của biến cố chắc chắn và biến cố không thể:
   $$P(\Omega) = 1, \quad P(\emptyset) = 0$$
3. Xác suất của biến cố đối:
   $$P(\overline{A}) = 1 - P(A) \iff P(A) = 1 - P(\overline{A})$$

---

## 4. Widget tương tác: Phòng Thí Nghiệm Xác Suất - Gieo Xúc Xắc & Gieo Đồng Xu

Tự mình thực nghiệm phép thử ngẫu nhiên gieo đồng xu hoặc gieo xúc xắc ảo với hàng trăm lượt thử để chứng kiến sự hội tụ kỳ diệu của tần suất thực nghiệm về xác suất lý thuyết (Luật số lớn):

```html
<div style="max-width: 760px; margin: 20px auto; font-family: system-ui, -apple-system, sans-serif; border: 1px solid #cbd5e1; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden;">
  <div style="background: linear-gradient(135deg, #0284c7, #0369a1); padding: 16px 20px; color: #ffffff;">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 700; color: #f8fafc;">Phòng Thí Nghiệm Xác Suất Ảo</h3>
    <p style="margin: 0; font-size: 13px; color: #bae6fd;">Thực hiện phép thử gieo đồng xu và xúc xắc để kiểm chứng xác suất cổ điển</p>
  </div>

  <div style="padding: 14px 16px; background: #f0f9ff; border-bottom: 1px solid #bae6fd; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between;">
    <div style="display: flex; gap: 8px;">
      <button id="mode-coin" style="padding: 6px 14px; font-weight: 600; font-size: 13px; border-radius: 6px; border: none; cursor: pointer; background: #0284c7; color: #fff;">Gieo Đồng Xu</button>
      <button id="mode-dice" style="padding: 6px 14px; font-weight: 600; font-size: 13px; border-radius: 6px; border: 1px solid #cbd5e1; cursor: pointer; background: #fff; color: #334155;">Gieo Xúc Xắc</button>
    </div>
    <div style="display: flex; gap: 8px;">
      <button id="btn-roll-1" style="padding: 6px 12px; font-size: 13px; font-weight: 600; border-radius: 6px; border: 1px solid #0284c7; background: #fff; color: #0284c7; cursor: pointer;">Thử 1 lần</button>
      <button id="btn-roll-100" style="padding: 6px 12px; font-size: 13px; font-weight: 600; border-radius: 6px; border: none; background: #0284c7; color: #fff; cursor: pointer;">Thử 100 lần</button>
      <button id="btn-reset-sim" style="padding: 6px 10px; font-size: 13px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f1f5f9; color: #64748b; cursor: pointer;">Làm mới</button>
    </div>
  </div>

  <div style="padding: 16px; display: grid; grid-template-columns: 240px 1fr; gap: 16px; align-items: center;">
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 220px;">
      <div id="visual-display" style="margin-bottom: 12px; font-size: 54px;">
        🪙
      </div>
      <div id="visual-label" style="font-size: 15px; font-weight: 700; color: #0f172a;">Chưa gieo</div>
      <div id="sim-counter" style="font-size: 12px; color: #64748b; margin-top: 6px;">Tổng số lần thử: 0</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
      <div style="font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 10px;">Thống kê tần suất & Xác suất:</div>
      <div id="stats-bars" style="display: flex; flex-direction: column; gap: 10px;">
        <!-- Thanh tần suất sẽ được render bằng JS -->
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var mode = 'coin'; // 'coin' hoặc 'dice'
  var totalTrials = 0;
  var coinStats = { S: 0, N: 0 };
  var diceStats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  var btnCoin = document.getElementById('mode-coin');
  var btnDice = document.getElementById('mode-dice');
  var btn1 = document.getElementById('btn-roll-1');
  var btn100 = document.getElementById('btn-roll-100');
  var btnReset = document.getElementById('btn-reset-sim');
  var vDisp = document.getElementById('visual-display');
  var vLbl = document.getElementById('visual-label');
  var vCount = document.getElementById('sim-counter');
  var statsContainer = document.getElementById('stats-bars');

  var diceEmojis = { 1: '⚀', 2: '⚁', 3: '⚂', 4: '⚃', 5: '⚄', 6: '⚅' };

  function setMode(newMode) {
    mode = newMode;
    btnCoin.style.background = mode === 'coin' ? '#0284c7' : '#fff';
    btnCoin.style.color = mode === 'coin' ? '#fff' : '#334155';
    btnDice.style.background = mode === 'dice' ? '#0284c7' : '#fff';
    btnDice.style.color = mode === 'dice' ? '#fff' : '#334155';
    resetSim();
  }

  function resetSim() {
    totalTrials = 0;
    coinStats = { S: 0, N: 0 };
    diceStats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    vDisp.textContent = mode === 'coin' ? '🪙' : '🎲';
    vLbl.textContent = 'Chưa gieo';
    vCount.textContent = 'Tổng số lần thử: 0';
    renderStats();
  }

  function rollOnce() {
    totalTrials++;
    if (mode === 'coin') {
      var isS = Math.random() < 0.5;
      var outcome = isS ? 'S' : 'N';
      coinStats[outcome]++;
      vDisp.textContent = isS ? '🟡' : '⚪';
      vLbl.textContent = isS ? 'Mặt SẤP (S)' : 'Mặt NGỬA (N)';
    } else {
      var d = Math.floor(Math.random() * 6) + 1;
      diceStats[d]++;
      vDisp.textContent = diceEmojis[d];
      vLbl.textContent = 'Mặt ' + d + ' chấm';
    }
    vCount.textContent = 'Tổng số lần thử: ' + totalTrials;
    renderStats();
  }

  function rollMultiple(count) {
    for (var i = 0; i < count; i++) {
      totalTrials++;
      if (mode === 'coin') {
        var isS = Math.random() < 0.5;
        coinStats[isS ? 'S' : 'N']++;
      } else {
        var d = Math.floor(Math.random() * 6) + 1;
        diceStats[d]++;
      }
    }
    vLbl.textContent = 'Đã hoàn thành ' + totalTrials + ' lượt thử';
    vCount.textContent = 'Tổng số lần thử: ' + totalTrials;
    renderStats();
  }

  function renderStats() {
    var html = '';
    if (mode === 'coin') {
      var pS = totalTrials > 0 ? (coinStats.S / totalTrials * 100).toFixed(1) : '50.0';
      var pN = totalTrials > 0 ? (coinStats.N / totalTrials * 100).toFixed(1) : '50.0';

      html += createBar('Mặt Sấp (S) - LT: 50%', coinStats.S, pS, '#3b82f6');
      html += createBar('Mặt Ngửa (N) - LT: 50%', coinStats.N, pN, '#10b981');
    } else {
      for (var k = 1; k <= 6; k++) {
        var pct = totalTrials > 0 ? (diceStats[k] / totalTrials * 100).toFixed(1) : '16.7';
        html += createBar('Mặt ' + k + ' chấm (LT: 16.7%)', diceStats[k], pct, '#0284c7');
      }
    }
    statsContainer.innerHTML = html;
  }

  function createBar(label, count, pct, color) {
    return '<div style="margin-bottom: 6px;">' +
      '<div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 3px;">' +
        '<span style="font-weight: 600; color: #475569;">' + label + '</span>' +
        '<span style="color: #0f172a; font-weight: bold;">' + count + ' lần (' + pct + '%)</span>' +
      '</div>' +
      '<div style="width: 100%; height: 10px; background: #e2e8f0; border-radius: 5px; overflow: hidden;">' +
        '<div style="width: ' + pct + '%; height: 100%; background: ' + color + '; border-radius: 5px; transition: width 0.2s ease;"></div>' +
      '</div>' +
    '</div>';
  }

  btnCoin.addEventListener('click', function() { setMode('coin'); });
  btnDice.addEventListener('click', function() { setMode('dice'); });
  btn1.addEventListener('click', rollOnce);
  btn100.addEventListener('click', function() { rollMultiple(100); });
  btnReset.addEventListener('click', resetSim);

  resetSim();
})();
</script>

---

## 5. Các dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Xác định Không gian mẫu & Liệt kê phần tử

**Phương pháp giải:**
1. Đọc kỹ mô tả phép thử ngẫu nhiên.
2. Liệt kê hoặc tính toán số lượng phần tử của không gian mẫu $\Omega$.
3. Biểu diễn các phần tử theo bộ có thứ tự hoặc cặp $(x; y)$.

#### Bài toán 1
Gieo đồng thời hai con xúc xắc 6 mặt cân đối và đồng chất.
a) Mô tả không gian mẫu $\Omega$ và tính số phần tử $n(\Omega)$.
b) Xác định tập hợp các kết quả thuận lợi cho biến cố $A$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng $7$".

**Lời giải:**
a) Mỗi kết quả có thể biểu diễn bằng cặp số $(i; j)$ trong đó $i$ là số chấm con xúc xắc thứ nhất, $j$ là số chấm con xúc xắc thứ hai ($1 \le i, j \le 6$):
$$\Omega = \{(i; j) \mid 1 \le i, j \le 6\}$$
Theo quy tắc nhân, số phần tử của không gian mẫu là:
$$n(\Omega) = 6 \times 6 = 36$$

b) Tổng số chấm bằng $7$, tức là $i + j = 7$. Các cặp số thỏa mãn là:
$$A = \{(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)\}$$
Số kết quả thuận lợi là $n(A) = 6$.
Xác suất của biến cố $A$ là:
$$P(A) = \frac{n(A)}{n(\Omega)} = \frac{6}{36} = \frac{1}{6}$$

---

### Dạng 2: Tính xác suất bằng định nghĩa cổ điển

#### Bài toán 2
Một hộp kín chứa $5$ quả cầu màu đỏ, $4$ quả cầu màu xanh và $3$ quả cầu màu vàng (các quả cầu có kích thước và khối lượng giống hệt nhau). Lấy ngẫu nhiên ra $2$ quả cầu. Tính xác suất để:
a) Cả hai quả cầu lấy ra đều màu đỏ.
b) Hai quả cầu lấy ra có cùng màu.

**Lời giải:**
Tổng số quả cầu trong hộp là $5 + 4 + 3 = 12$ quả cầu.
Phép thử là lấy ngẫu nhiên $2$ quả cầu từ $12$ quả.
Số phần tử của không gian mẫu:
$$n(\Omega) = C_{12}^2 = \frac{12 \times 11}{2} = 66$$

a) Gọi biến cố $A$: "Hai quả cầu lấy ra đều màu đỏ".
Số cách chọn $2$ quả cầu đỏ từ $5$ quả cầu đỏ là:
$$n(A) = C_5^2 = 10$$
Xác suất để lấy được hai quả cầu màu đỏ là:
$$P(A) = \frac{n(A)}{n(\Omega)} = \frac{10}{66} = \frac{5}{33}$$

b) Gọi biến cố $B$: "Hai quả cầu lấy ra có cùng màu".
Hai quả cùng màu có thể cùng đỏ, cùng xanh hoặc cùng vàng:
- Cùng đỏ: $C_5^2 = 10$ cách.
- Cùng xanh: $C_4^2 = 6$ cách.
- Cùng vàng: $C_3^2 = 3$ cách.
Theo quy tắc cộng, số kết quả thuận lợi cho $B$ là:
$$n(B) = C_5^2 + C_4^2 + C_3^2 = 10 + 6 + 3 = 19$$
Xác suất của biến cố $B$ là:
$$P(B) = \frac{n(B)}{n(\Omega)} = \frac{19}{66}$$

---

### Dạng 3: Sử dụng Biến cố đối để tính xác suất

> [!TIP]
> Khi đề bài yêu cầu tính xác suất của biến cố có chứa cụm từ **"ít nhất một"**, việc đếm trực tiếp thường phải chia nhiều trường hợp phức tạp. Hãy chuyển ngay sang tính xác suất của **biến cố đối** $\overline{A}$ ("không có cái nào"), sau đó dùng công thức:
> $$P(A) = 1 - P(\overline{A})$$

#### Bài toán 3
Một nhóm gồm $5$ học sinh nam và $4$ học sinh nữ. Chọn ngẫu nhiên $3$ bạn tham gia ban chấp hành đoàn trường. Tính xác suất để trong $3$ bạn được chọn có **ít nhất một bạn nữ**.

**Lời giải:**
Tổng số học sinh là $5 + 4 = 9$ bạn.
Số phần tử của không gian mẫu:
$$n(\Omega) = C_9^3 = \frac{9 \times 8 \times 7}{6} = 84$$
Gọi biến cố $E$: "Trong $3$ bạn được chọn có ít nhất một bạn nữ".
Biến cố đối $\overline{E}$: "Trong $3$ bạn được chọn không có bạn nữ nào" (nghĩa là cả 3 bạn đều là nam).
Số kết quả thuận lợi cho $\overline{E}$ là chọn 3 bạn nam từ 5 bạn nam:
$$n(\overline{E}) = C_5^3 = 10$$
Xác suất của biến cố đối $\overline{E}$ là:
$$P(\overline{E}) = \frac{n(\overline{E})}{n(\Omega)} = \frac{10}{84} = \frac{5}{42}$$
Áp dụng công thức xác suất biến cố đối:
$$P(E) = 1 - P(\overline{E}) = 1 - \frac{5}{42} = \frac{37}{42}$$

---

### Dạng 4: Bài toán gieo xúc xắc và đồng xu nhiều lần

#### Bài toán 4
Gieo một đồng xu cân đối và đồng chất liên tiếp $3$ lần.
a) Mô tả không gian mẫu.
b) Tính xác suất để mặt Sấp xuất hiện đúng $2$ lần.
c) Tính xác suất để mặt Sấp xuất hiện ít nhất $1$ lần.

**Lời giải:**
a) Mỗi lần gieo có $2$ khả năng (S hoặc N). Không gian mẫu gồm:
$$\Omega = \{SSS, SSN, SNS, SNN, NSS, NSN, NNS, NNN\} \implies n(\Omega) = 2^3 = 8$$

b) Gọi $A$ là biến cố: "Mặt Sấp xuất hiện đúng 2 lần".
Các kết quả thuận lợi cho $A$ là:
$$A = \{SSN, SNS, NSS\} \implies n(A) = 3$$
Xác suất là:
$$P(A) = \frac{n(A)}{n(\Omega)} = \frac{3}{8}$$

c) Gọi $B$ là biến cố: "Mặt Sấp xuất hiện ít nhất 1 lần".
Biến cố đối $\overline{B}$: "Mặt Sấp không xuất hiện lần nào" (tức cả 3 lần đều xuất hiện mặt Ngửa):
$$\overline{B} = \{NNN\} \implies n(\overline{B}) = 1$$
Do đó:
$$P(\overline{B}) = \frac{1}{8} \implies P(B) = 1 - P(\overline{B}) = 1 - \frac{1}{8} = \frac{7}{8}$$

---

## 6. Ứng dụng thực tiễn của Xác suất

1. **Định phí bảo hiểm nhân thọ (Actuarial Science):** Các công ty bảo hiểm thu thập dữ liệu xác suất tử vong theo độ tuổi để tính toán phí bảo hiểm hàng năm đảm bảo công ty chi trả bồi thường đầy đủ và duy trì lợi nhuận ổn định.
2. **Quản trị rủi ro tài chính & Danh mục đầu tư:** Các ngân hàng và quỹ đầu tư dùng lý thuyết xác suất để tính chỉ số VaR (Value at Risk) - số tiền tối đa có thể thua lỗ trong một ngày với xác suất $95\%$ hoặc $99\%$.
3. **Dự báo thời tiết & Khí tượng:** Khi bản tin thời tiết dự báo "Khả năng mưa ngày mai là $80\%$", nghĩa là trong các điều kiện khí quyển tương tự trong lịch sử, cứ 100 ngày thì có 80 ngày xuất hiện mưa tại khu vực đó.
4. **Cân bằng tỷ lệ rơi đồ trong trò chơi điện tử (Gacha Drop Rate):** Các tựa game mobile cài đặt xác suất quay trúng nhân vật hiếm SSR là $0,6\%$. Cơ chế bảo hiểm (pity system) đảm bảo sau 90 lần quay chắc chắn nhận nhân vật thông qua tính toán xác suất biến cố đối: $1 - (1 - 0,006)^{90}$.
5. **Độ nhạy và độ đặc hiệu xét nghiệm y tế:** Trong xét nghiệm phát hiện virus, xác suất âm tính giả hoặc dương tính giả được kiểm soát chặt chẽ bằng định lý xác suất Bayes để tránh chẩn đoán nhầm cho bệnh nhân.

---

## 7. Bài tập trắc nghiệm tự luyện

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q1",
  "question": "Gieo một con xúc xắc cân đối và đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
  "options": [
    "\\frac{1}{2}",
    "\\frac{1}{3}",
    "\\frac{2}{3}",
    "\\frac{1}{6}"
  ],
  "answer": 0,
  "explanation": "Không gian mẫu $\\Omega = \\{1; 2; 3; 4; 5; 6\\}$. Các số nguyên tố là $\\{2; 3; 5\\}$ (3 kết quả). Xác suất $P = \\frac{3}{6} = \\frac{1}{2}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q2",
  "question": "Gieo đồng thời hai đồng xu cân đối và đồng chất. Số phần tử của không gian mẫu là:",
  "options": [
    "4",
    "2",
    "6",
    "8"
  ],
  "answer": 0,
  "explanation": "Mỗi đồng xu có 2 khả năng $\\implies n(\\Omega) = 2 \\times 2 = 4$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q3",
  "question": "Gieo đồng thời hai con xúc xắc cân đối. Xác suất để tổng số chấm trên hai con xúc xắc bằng 11 là:",
  "options": [
    "\\frac{1}{18}",
    "\\frac{1}{12}",
    "\\frac{1}{36}",
    "\\frac{1}{9}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = 36$. Tổng bằng 11 có các cặp: $(5; 6), (6; 5) \\implies 2$ kết quả. Xác suất $P = \\frac{2}{36} = \\frac{1}{18}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q4",
  "question": "Một biến cố $A$ có xác suất $P(A) = 0,35$. Xác suất của biến cố đối $\\overline{A}$ là:",
  "options": [
    "0,65",
    "0,35",
    "0,75",
    "1"
  ],
  "answer": 0,
  "explanation": "$P(\\overline{A}) = 1 - P(A) = 1 - 0,35 = 0,65$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q5",
  "question": "Một tổ có 6 nam và 4 nữ. Chọn ngẫu nhiên 1 người làm tổ trưởng. Xác suất chọn được bạn nữ là:",
  "options": [
    "\\frac{2}{5}",
    "\\frac{3}{5}",
    "\\frac{1}{4}",
    "\\frac{1}{10}"
  ],
  "answer": 0,
  "explanation": "Tổng số là 10 bạn. Xác suất chọn bạn nữ là $\\frac{4}{10} = \\frac{2}{5}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q6",
  "question": "Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá tiêu chuẩn. Xác suất rút được một lá bài Át (Ace) là:",
  "options": [
    "\\frac{1}{13}",
    "\\frac{1}{52}",
    "\\frac{1}{4}",
    "\\frac{4}{13}"
  ],
  "answer": 0,
  "explanation": "Bộ bài có 4 lá Át. Xác suất $P = \\frac{4}{52} = \\frac{1}{13}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q7",
  "question": "Gieo một đồng xu 3 lần liên tiếp. Xác suất để cả 3 lần đều xuất hiện mặt Sấp là:",
  "options": [
    "\\frac{1}{8}",
    "\\frac{3}{8}",
    "\\frac{1}{2}",
    "\\frac{1}{4}"
  ],
  "answer": 0,
  "explanation": "$n(\\Omega) = 2^3 = 8$. Biến cố cả 3 sấp là $\\{SSS\\} \\implies P = \\frac{1}{8}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q8",
  "question": "Một hộp có 10 viên bi xanh và 5 viên bi đỏ. Lấy ngẫu nhiên 1 viên bi. Xác suất để lấy được viên bi màu đỏ là:",
  "options": [
    "\\frac{1}{3}",
    "\\frac{2}{3}",
    "\\frac{1}{2}",
    "\\frac{1}{15}"
  ],
  "answer": 0,
  "explanation": "Tổng số bi là 15 viên. Xác suất lấy bi đỏ là $\\frac{5}{15} = \\frac{1}{3}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q9",
  "question": "Gieo đồng thời hai con xúc xắc. Xác suất để hai mặt xuất hiện có cùng số chấm là:",
  "options": [
    "\\frac{1}{6}",
    "\\frac{1}{36}",
    "\\frac{1}{12}",
    "\\frac{1}{4}"
  ],
  "answer": 0,
  "explanation": "Các kết quả có cùng số chấm: $(1;1), (2;2), (3;3), (4;4), (5;5), (6;6)$ gồm 6 khả năng. Xác suất $P = \\frac{6}{36} = \\frac{1}{6}$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c9_b26_q10",
  "question": "Khẳng định nào sau đây là SAI?",
  "options": [
    "Xác suất của biến cố không thể bằng 1",
    "0 \\le P(A) \\le 1 với mọi biến cố A",
    "P(\\Omega) = 1",
    "P(\\overline{A}) = 1 - P(A)"
  ],
  "answer": 0,
  "explanation": "Biến cố không thể $\\emptyset$ có xác suất bằng 0: $P(\\emptyset) = 0$."
}'></div>

---

## 8. Dự án thử thách thực tế: Kiểm nghiệm Luật số lớn của Buffon

**Bối cảnh lịch sử:**
Vào thế kỷ 18, nhà tự nhiên học người Pháp Georges-Louis Leclerc (Bá tước Buffon) đã tự mình gieo một đồng xu $4.040$ lần và ghi nhận được $2.048$ lần xuất hiện mặt Sấp (tỉ lệ $\approx 50,69\%$). Sau này, nhà thống kê Karl Pearson đã gieo tới $24.000$ lần và thu được $12.012$ lần mặt Sấp (tỉ lệ $50,05\%$).

**Nhiệm vụ:**
1. Hãy dùng widget tương tác trong bài học để thực hiện $10$ lần thử, $100$ lần thử và ghi lại tỉ lệ mặt Sấp.
2. Nhận xét về độ lệch giữa tần suất thực tế và xác suất lý thuyết $50\%$ khi số lần thử tăng dần.
3. Giải thích tại sao các sòng bạc quốc tế luôn có doanh thu siêu lợi nhuận ổn định mặc dù mỗi lượt chơi của khách đều mang tính may rủi ngẫu nhiên.
