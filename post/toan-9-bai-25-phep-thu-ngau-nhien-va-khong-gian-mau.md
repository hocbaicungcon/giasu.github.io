---
title: 'Toán 9 Bài 25: Phép thử ngẫu nhiên và không gian mẫu - Cơ sở Lý thuyết Xác suất & Mô phỏng Tương tác'
description: 'Lý thuyết toàn diện Bài 25 Toán 9: Phép thử ngẫu nhiên, không gian mẫu Ω, biến cố ngẫu nhiên, kết quả thuận lợi, biến cố chắc chắn, biến cố không thể, widget tương tác gieo đồng xu & xúc xắc 3D theo luật số lớn và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Xác suất 9
  - Phép thử ngẫu nhiên
  - Không gian mẫu
  - Biến cố
  - Gieo đồng xu
  - Gieo xúc xắc
  - Kết nối tri thức
grade: 9
---

# Bài 25. Phép thử ngẫu nhiên và không gian mẫu

Trong cuộc sống hàng ngày, chúng ta liên tục đưa ra quyết định dựa trên những hiện tượng chứa đựng yếu tố ngẫu nhiên:
- Trọng tài tung đồng xu để quyết định đội nào được quyền giao bóng trước trong trận chung kết World Cup.
- Một kỹ sư phần mềm tạo thuật toán sinh số ngẫu nhiên (RNG) để chia phần thưởng trong game online.
- Một bác sĩ dự báo tỷ lệ điều trị thành công của một phác đồ y khoa mới.

Điểm chung của các hiện tượng này là gì? Chúng ta **không thể biết chắc chắn 100% kết quả nào sẽ xảy ra**, nhưng lại **hoàn toàn có thể liệt kê được tất cả các khả năng có thể xuất hiện**.

Để nghiên cứu một cách khoa học, chặt chẽ những hiện tượng bất định đó, các nhà toán học vĩ đại như Blaise Pascal, Pierre de Fermat và Andrey Kolmogorov đã xây dựng nên tòa lâu đài **Lý thuyết Xác suất**. Và viên gạch nền móng đầu tiên của bộ môn này chính là: **Phép thử ngẫu nhiên và Không gian mẫu**.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: PHÉP THỬ NGẪU NHIÊN & KHÔNG GIAN MẪU</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phép thử ngẫu nhiên</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là một hành động / thí nghiệm có kết quả không thể đoán trước.<br>• Phải thực hiện được trong cùng điều kiện xác định.<br>• Biết trước tập hợp tất cả các kết quả có thể xảy ra.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Không gian mẫu ($\Omega$)</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tập hợp tất cả các kết quả có thể xảy ra của phép thử, ký hiệu $\Omega$.<br>• Mỗi phần tử gọi là một kết quả có thể.<br>• Số phần tử của không gian mẫu ký hiệu là $n(\Omega)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biến cố ngẫu nhiên</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Một sự kiện liên quan đến phép thử, xảy ra hay không tùy kết quả.<br>• Về mặt tập hợp: Biến cố $E$ là một tập con của $\Omega$ ($E \subseteq \Omega$).<br>• <strong>Biến cố chắc chắn:</strong> $E = \Omega$.<br>• <strong>Biến cố không thể:</strong> $E = \emptyset$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Kết quả thuận lợi</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Các phần tử của $\Omega$ làm cho biến cố $E$ xảy ra gọi là <strong>kết quả thuận lợi</strong>.<br>• Số kết quả thuận lợi ký hiệu là $n(E)$.<br>• Luôn có $0 \le n(E) \le n(\Omega)$.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phép thử gieo đồng xu:** Khi gieo một đồng xu cân đối một lần, có bao nhiêu kết quả có thể xảy ra?
2. **Không gian mẫu xúc xắc:** Gieo một con xúc xắc 6 mặt đồng chất một lần. Hãy viết không gian mẫu $\Omega$ dưới dạng tập hợp.
3. **Phân loại biến cố:** Biến cố *"Gieo một con xúc xắc được mặt 7 chấm"* thuộc loại biến cố nào?
4. **Biến cố chắc chắn:** Biến cố *"Gieo một con xúc xắc được số chấm nhỏ hơn hoặc bằng 6"* có chắc chắn xảy ra không?
5. **Đếm kết quả thuận lợi:** Khi gieo một con xúc xắc 6 mặt, có bao nhiêu kết quả thuận lợi cho biến cố *"Số chấm xuất hiện là số nguyên tố"*?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: Có $2$ kết quả: Sấp ($S$) hoặc Ngửa ($N$).
> - Câu 2: $\Omega = \{1, 2, 3, 4, 5, 6\}$.
> - Câu 3: Là **Biến cố không thể** (tập rỗng $\emptyset$) vì xúc xắc chỉ có từ 1 đến 6 chấm.
> - Câu 4: **Chắc chắn xảy ra** (Biến cố chắc chắn) vì mọi mặt đều có số chấm $\le 6$.
> - Câu 5: Các số nguyên tố từ $1$ đến $6$ là $\{2, 3, 5\} \implies$ Có đúng **$3$ kết quả thuận lợi**.

---

## Lý thuyết trọng tâm

### 1. Phép thử ngẫu nhiên

> [!NOTE]
> **Định nghĩa Phép thử ngẫu nhiên:**
> Một hành động hay thực nghiệm được gọi là **phép thử ngẫu nhiên** (gọi tắt là **phép thử**) nếu thỏa mãn 3 điều kiện:
> 1. Có thể lặp đi lặp lại nhiều lần trong các điều kiện hoàn toàn giống nhau.
> 2. Không thể biết trước kết quả cụ thể nào sẽ xảy ra trong mỗi lần thử.
> 3. Biết trước tập hợp tất cả các kết quả có thể xảy ra của phép thử đó.

*Quy ước:* Trong chương trình Toán 9, ta chỉ xét các phép thử có **hữu hạn** kết quả và các kết quả có khả năng xuất hiện như nhau (đồng khả năng).

---

### 2. Không gian mẫu

> [!NOTE]
> **Định nghĩa Không gian mẫu:**
> Tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên được gọi là **không gian mẫu** của phép thử đó, ký hiệu là $\Omega$ (đọc là Ô-mê-ga).
> - Số phần tử của không gian mẫu được ký hiệu là $n(\Omega)$ hoặc $|\Omega|$.

**Một số mô hình không gian mẫu kinh điển:**
1. **Gieo một đồng xu:**
   $$\Omega = \{S; N\} \implies n(\Omega) = 2$$
   *(S: Sấp, N: Ngửa).*
2. **Gieo một con xúc xắc 6 mặt:**
   $$\Omega = \{1; 2; 3; 4; 5; 6\} \implies n(\Omega) = 6$$
3. **Gieo hai đồng xu phân biệt (hoặc gieo một đồng xu 2 lần liên tiếp):**
   $$\Omega = \{SS; SN; NS; NN\} \implies n(\Omega) = 4$$
4. **Gieo hai con xúc xắc:**
   Không gian mẫu gồm các cặp số $(i; j)$ trong đó $i$ là số chấm ở xúc xắc thứ nhất, $j$ là số chấm ở xúc xắc thứ hai ($1 \le i, j \le 6$):
   $$n(\Omega) = 6 \times 6 = 36$$

---

### 3. Biến cố và Kết quả thuận lợi

Một **biến cố ngẫu nhiên** (gọi tắt là **biến cố**) là một sự kiện có thể xảy ra hoặc không xảy ra trong một lần thực hiện phép thử.

- Về bản chất tập hợp: Mỗi biến cố $E$ chính là một **tập con** của không gian mẫu $\Omega$:
  $$E \subseteq \Omega$$
- Một kết quả của phép thử được gọi là **thuận lợi cho biến cố $E$** nếu kết quả đó thuộc tập hợp $E$.
- Số kết quả thuận lợi cho biến cố $E$ được ký hiệu là $n(E)$.

> [!IMPORTANT]
> **Phân loại 3 loại biến cố đặc biệt:**
> 1. **Biến cố ngẫu nhiên:** Có thể xảy ra hoặc không xảy ra tùy thuộc vào kết quả cụ thể ($0 < n(E) < n(\Omega)$).
> 2. **Biến cố chắc chắn:** Luôn luôn xảy ra trong mọi lần thử, ký hiệu chính là $\Omega$. Ta có $n(\Omega) = n(\Omega)$.
> 3. **Biến cố không thể:** Không bao giờ xảy ra trong bất kỳ lần thử nào, ký hiệu là $\emptyset$ (tập rỗng). Ta có $n(\emptyset) = 0$.

---

## Phòng thí nghiệm Tương tác: Gieo Đồng xu & Tung Xúc xắc Ngẫu nhiên

Hãy trực tiếp trải nghiệm cơ chế ngẫu nhiên chân thực với hiệu ứng chuyển động và bộ đếm số liệu theo thời gian thực (Luật số lớn):

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 20px;">
    <button id="tabCoinBtn" onclick="switchSimTab('coin')" style="padding: 8px 18px; background: #2563eb; color: #ffffff; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9em;">Mô hình 1: Gieo Đồng xu (Coin Flip)</button>
    <button id="tabDiceBtn" onclick="switchSimTab('dice')" style="padding: 8px 18px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9em;">Mô hình 2: Tung Xúc xắc 6 mặt (Dice Roll)</button>
  </div>

  <!-- PHẦN 1: ĐỒNG XU -->
  <div id="coinSimArea">
    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;">
      <div id="coinVisual" style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, #fbbf24, #d97706); border: 4px solid #b45309; display: flex; align-items: center; justify-content: center; font-size: 2.2em; font-weight: bold; color: #78350f; box-shadow: 0 6px 12px rgba(0,0,0,0.15); transition: transform 0.4s ease-out;">S</div>
      <p id="coinLastResult" style="margin-top: 10px; font-weight: bold; color: #334155; font-size: 1.1em;">Kết quả: Mặt Sấp (S)</p>
    </div>

    <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
      <button onclick="flipCoin(1)" style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Gieo 1 lần</button>
      <button onclick="flipCoin(10)" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Gieo 10 lần</button>
      <button onclick="flipCoin(100)" style="padding: 8px 16px; background: #8b5cf6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Gieo 100 lần</button>
      <button onclick="resetCoinSim()" style="padding: 8px 16px; background: #64748b; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Làm mới</button>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 500px; margin: 0 auto; text-align: center;">
      <div style="background: #fef3c7; padding: 14px; border-radius: 8px; border: 1px solid #fde68a;">
        <span style="font-size: 0.9em; color: #92400e; font-weight: 600;">Mặt Sấp (S)</span>
        <div id="coinCountS" style="font-size: 1.8em; font-weight: bold; color: #b45309; margin: 4px 0;">0</div>
        <div id="coinPctS" style="font-size: 0.9em; color: #b45309;">0.0%</div>
      </div>
      <div style="background: #e0e7ff; padding: 14px; border-radius: 8px; border: 1px solid #c7d2fe;">
        <span style="font-size: 0.9em; color: #3730a3; font-weight: 600;">Mặt Ngửa (N)</span>
        <div id="coinCountN" style="font-size: 1.8em; font-weight: bold; color: #4338ca; margin: 4px 0;">0</div>
        <div id="coinPctN" style="font-size: 0.9em; color: #4338ca;">0.0%</div>
      </div>
    </div>
    <p id="coinTotalNote" style="text-align: center; color: #64748b; margin-top: 12px; font-size: 0.9em;">Tổng số lần gieo: <strong>0</strong> | Không gian mẫu: <strong>Ω = {S, N}</strong> (n(Ω) = 2)</p>
  </div>

  <!-- PHẦN 2: XÚC XẮC -->
  <div id="diceSimArea" style="display: none;">
    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;">
      <div id="diceVisual" style="width: 80px; height: 80px; background: #ffffff; border: 3px solid #0f172a; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2.5em; font-weight: bold; color: #0f172a; box-shadow: 0 8px 16px rgba(0,0,0,0.15); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">1</div>
      <p id="diceLastResult" style="margin-top: 10px; font-weight: bold; color: #334155; font-size: 1.1em;">Kết quả: Mặt 1 chấm</p>
    </div>

    <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
      <button onclick="rollDice(1)" style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Tung 1 lần</button>
      <button onclick="rollDice(10)" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Tung 10 lần</button>
      <button onclick="rollDice(100)" style="padding: 8px 16px; background: #8b5cf6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Tung 100 lần</button>
      <button onclick="resetDiceSim()" style="padding: 8px 16px; background: #64748b; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Làm mới</button>
    </div>

    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; max-width: 580px; margin: 0 auto; text-align: center;">
      <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 6px;">
        <div style="font-weight: bold; color: #334155;">1 chấm</div>
        <div id="dCnt1" style="font-size: 1.3em; font-weight: bold; color: #0f172a; margin: 2px 0;">0</div>
        <div id="dPct1" style="font-size: 0.75em; color: #64748b;">0%</div>
      </div>
      <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 6px;">
        <div style="font-weight: bold; color: #334155;">2 chấm</div>
        <div id="dCnt2" style="font-size: 1.3em; font-weight: bold; color: #0f172a; margin: 2px 0;">0</div>
        <div id="dPct2" style="font-size: 0.75em; color: #64748b;">0%</div>
      </div>
      <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 6px;">
        <div style="font-weight: bold; color: #334155;">3 chấm</div>
        <div id="dCnt3" style="font-size: 1.3em; font-weight: bold; color: #0f172a; margin: 2px 0;">0</div>
        <div id="dPct3" style="font-size: 0.75em; color: #64748b;">0%</div>
      </div>
      <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 6px;">
        <div style="font-weight: bold; color: #334155;">4 chấm</div>
        <div id="dCnt4" style="font-size: 1.3em; font-weight: bold; color: #0f172a; margin: 2px 0;">0</div>
        <div id="dPct4" style="font-size: 0.75em; color: #64748b;">0%</div>
      </div>
      <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 6px;">
        <div style="font-weight: bold; color: #334155;">5 chấm</div>
        <div id="dCnt5" style="font-size: 1.3em; font-weight: bold; color: #0f172a; margin: 2px 0;">0</div>
        <div id="dPct5" style="font-size: 0.75em; color: #64748b;">0%</div>
      </div>
      <div style="background: #f1f5f9; padding: 10px 4px; border-radius: 6px;">
        <div style="font-weight: bold; color: #334155;">6 chấm</div>
        <div id="dCnt6" style="font-size: 1.3em; font-weight: bold; color: #0f172a; margin: 2px 0;">0</div>
        <div id="dPct6" style="font-size: 0.75em; color: #64748b;">0%</div>
      </div>
    </div>
    <p id="diceTotalNote" style="text-align: center; color: #64748b; margin-top: 12px; font-size: 0.9em;">Tổng số lần tung: <strong>0</strong> | Không gian mẫu: <strong>Ω = {1, 2, 3, 4, 5, 6}</strong> (n(Ω) = 6)</p>
  </div>
</div>

<script>
// Tab Switching
function switchSimTab(tab) {
  const coinArea = document.getElementById('coinSimArea');
  const diceArea = document.getElementById('diceSimArea');
  const btnCoin = document.getElementById('tabCoinBtn');
  const btnDice = document.getElementById('tabDiceBtn');

  if (tab === 'coin') {
    coinArea.style.display = 'block';
    diceArea.style.display = 'none';
    btnCoin.style.background = '#2563eb';
    btnCoin.style.color = '#ffffff';
    btnDice.style.background = '#e2e8f0';
    btnDice.style.color = '#1e293b';
  } else {
    coinArea.style.display = 'none';
    diceArea.style.display = 'block';
    btnDice.style.background = '#2563eb';
    btnDice.style.color = '#ffffff';
    btnCoin.style.background = '#e2e8f0';
    btnCoin.style.color = '#1e293b';
  }
}

// Coin Simulator Logic
let coinStats = { S: 0, N: 0, total: 0 };
let coinRot = 0;

function flipCoin(times) {
  for (let i = 0; i < times; i++) {
    const res = Math.random() < 0.5 ? 'S' : 'N';
    coinStats[res]++;
    coinStats.total++;
    if (i === times - 1) {
      const visual = document.getElementById('coinVisual');
      coinRot += 360 * 2;
      visual.style.transform = `rotateY(${coinRot}deg)`;
      visual.textContent = res;
      document.getElementById('coinLastResult').textContent = `Kết quả lần cuối: Mặt ${res === 'S' ? 'Sấp (S)' : 'Ngửa (N)'}`;
    }
  }

  document.getElementById('coinCountS').textContent = coinStats.S;
  document.getElementById('coinCountN').textContent = coinStats.N;

  const pctS = coinStats.total > 0 ? ((coinStats.S / coinStats.total) * 100).toFixed(1) : 0;
  const pctN = coinStats.total > 0 ? ((coinStats.N / coinStats.total) * 100).toFixed(1) : 0;

  document.getElementById('coinPctS').textContent = `${pctS}%`;
  document.getElementById('coinPctN').textContent = `${pctN}%`;
  document.getElementById('coinTotalNote').innerHTML = `Tổng số lần gieo: <strong>${coinStats.total}</strong> | Tỉ lệ S/N tiệm cận lý thuyết <strong>50% / 50%</strong>`;
}

function resetCoinSim() {
  coinStats = { S: 0, N: 0, total: 0 };
  document.getElementById('coinCountS').textContent = '0';
  document.getElementById('coinCountN').textContent = '0';
  document.getElementById('coinPctS').textContent = '0.0%';
  document.getElementById('coinPctN').textContent = '0.0%';
  document.getElementById('coinVisual').textContent = 'S';
  document.getElementById('coinLastResult').textContent = 'Kết quả: Mặt Sấp (S)';
  document.getElementById('coinTotalNote').innerHTML = 'Tổng số lần gieo: <strong>0</strong> | Không gian mẫu: <strong>Ω = {S, N}</strong> (n(Ω) = 2)';
}

// Dice Simulator Logic
let diceStats = [0, 0, 0, 0, 0, 0];
let diceTotal = 0;
let diceRot = 0;

function rollDice(times) {
  for (let i = 0; i < times; i++) {
    const val = Math.floor(Math.random() * 6) + 1; // 1 to 6
    diceStats[val - 1]++;
    diceTotal++;
    if (i === times - 1) {
      const visual = document.getElementById('diceVisual');
      diceRot += 360;
      visual.style.transform = `rotate(${diceRot}deg) scale(1.1)`;
      setTimeout(() => { visual.style.transform = `rotate(${diceRot}deg) scale(1)`; }, 200);
      visual.textContent = val;
      document.getElementById('diceLastResult').textContent = `Kết quả lần cuối: Mặt ${val} chấm`;
    }
  }

  for (let k = 1; k <= 6; k++) {
    document.getElementById(`dCnt${k}`).textContent = diceStats[k - 1];
    const pct = diceTotal > 0 ? ((diceStats[k - 1] / diceTotal) * 100).toFixed(1) : 0;
    document.getElementById(`dPct${k}`).textContent = `${pct}%`;
  }
  document.getElementById('diceTotalNote').innerHTML = `Tổng số lần tung: <strong>${diceTotal}</strong> | Tỉ lệ mỗi mặt tiệm cận lý thuyết <strong>16.7%</strong> (1/6)`;
}

function resetDiceSim() {
  diceStats = [0, 0, 0, 0, 0, 0];
  diceTotal = 0;
  for (let k = 1; k <= 6; k++) {
    document.getElementById(`dCnt${k}`).textContent = '0';
    document.getElementById(`dPct${k}`).textContent = '0%';
  }
  document.getElementById('diceVisual').textContent = '1';
  document.getElementById('diceLastResult').textContent = 'Kết quả: Mặt 1 chấm';
  document.getElementById('diceTotalNote').innerHTML = 'Tổng số lần tung: <strong>0</strong> | Không gian mẫu: <strong>Ω = {1, 2, 3, 4, 5, 6}</strong> (n(Ω) = 6)';
}
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Xác định không gian mẫu $\Omega$ và số phần tử $n(\Omega)$

**Phương pháp giải:**
1. Đọc kỹ đề bài để nắm rõ: Phép thử gồm bao nhiêu giai đoạn / hành động? Vật thực hiện phép thử là gì (đồng xu, xúc xắc, thẻ bài, quả bóng)?
2. Liệt kê tuần tự tất cả các kết quả có thể xảy ra dưới dạng tập hợp:
   $$\Omega = \{e_1, e_2, \dots, e_k\}$$
3. Đếm số lượng phần tử của tập hợp $\Omega$ để tìm $n(\Omega)$.
4. Áp dụng quy tắc nhân (nếu phép thử gồm nhiều giai đoạn độc lập):
   Nếu giai đoạn 1 có $a$ kết quả, giai đoạn 2 có $b$ kết quả thì tổng số kết quả của phép thử là:
   $$n(\Omega) = a \times b$$

---

#### Ví dụ 1
Một hộp chứa $4$ thẻ bài cùng loại được đánh số thứ tự từ $1$ đến $4$. Rút ngẫu nhiên lần lượt $2$ thẻ bài không hoàn lại.

a) Viết không gian mẫu $\Omega$ dưới dạng tập hợp các cặp số $(x; y)$, trong đó $x$ là số trên thẻ rút lần thứ nhất, $y$ là số trên thẻ rút lần thứ hai.  
b) Tính số phần tử của không gian mẫu $n(\Omega)$.

**Lời giải chi tiết:**
a) Vì rút lần lượt không hoàn lại nên $x$ và $y$ phải là hai số khác nhau ($x \ne y$):
- Nếu lần 1 rút được số $1$: Lần 2 có thể là $2, 3, 4 \implies (1; 2), (1; 3), (1; 4)$.
- Nếu lần 1 rút được số $2$: Lần 2 có thể là $1, 3, 4 \implies (2; 1), (2; 3), (2; 4)$.
- Nếu lần 1 rút được số $3$: Lần 2 có thể là $1, 2, 4 \implies (3; 1), (3; 2), (3; 4)$.
- Nếu lần 1 rút được số $4$: Lần 2 có thể là $1, 2, 3 \implies (4; 1), (4; 2), (4; 3)$.

Vậy không gian mẫu là:
$$\Omega = \left\{ \begin{array}{l} (1; 2), (1; 3), (1; 4), \\ (2; 1), (2; 3), (2; 4), \\ (3; 1), (3; 2), (3; 4), \\ (4; 1), (4; 2), (4; 3) \end{array} \right\}$$

b) Số phần tử của không gian mẫu:
$$n(\Omega) = 4 \times 3 = 12$$

---

### Dạng 2: Liệt kê các kết quả thuận lợi cho biến cố

**Phương pháp giải:**
1. Đã có không gian mẫu $\Omega$.
2. Kiểm tra từng phần tử $e \in \Omega$ xem phần tử đó có thỏa mãn điều kiện mô tả của biến cố $A$ hay không.
3. Tập hợp các phần tử thỏa mãn chính là tập các kết quả thuận lợi cho $A$:
   $$A = \{e \in \Omega \mid e \text{ thỏa mãn } A\}$$
4. Đếm số phần tử để tìm $n(A)$.

---

#### Ví dụ 2
Gieo đồng thời hai con xúc xắc 6 mặt cân đối và đồng chất. Hãy liệt kê các kết quả thuận lợi và tính số kết quả thuận lợi cho các biến cố sau:
a) Biến cố $A$: *"Tổng số chấm xuất hiện trên hai con xúc xắc bằng 9"*.  
b) Biến cố $B$: *"Hai con xúc xắc xuất hiện số chấm giống nhau"*.  
c) Biến cố $C$: *"Tích số chấm xuất hiện trên hai con xúc xắc là một số lẻ"*.

**Lời giải chi tiết:**
Không gian mẫu gồm các cặp số $(i; j)$ với $1 \le i, j \le 6 \implies n(\Omega) = 36$.

a) Với biến cố $A$: Tổng $i + j = 9$.
Vì $1 \le i, j \le 6$ nên các cặp thỏa mãn là:
$$A = \{(3; 6), (4; 5), (5; 4), (6; 3)\}$$
Vậy số kết quả thuận lợi cho $A$ là $n(A) = 4$.

b) Với biến cố $B$: Hai số chấm bằng nhau $i = j$.
Các cặp thỏa mãn là:
$$B = \{(1; 1), (2; 2), (3; 3), (4; 4), (5; 5), (6; 6)\}$$
Vậy số kết quả thuận lợi cho $B$ là $n(B) = 6$.

c) Với biến cố $C$: Tích $i \times j$ là số lẻ.
Tích của hai số là số lẻ khi và chỉ khi **cả hai số đều là số lẻ**.
Các số lẻ trên xúc xắc là $\{1; 3; 5\}$.
Do đó các cặp $(i; j)$ với $i, j \in \{1; 3; 5\}$ là:
$$C = \left\{ \begin{array}{l} (1; 1), (1; 3), (1; 5), \\ (3; 1), (3; 3), (3; 5), \\ (5; 1), (5; 3), (5; 5) \end{array} \right\}$$
Vậy số kết quả thuận lợi cho $C$ là $n(C) = 3 \times 3 = 9$.

---

### Dạng 3: Nhận biết Biến cố ngẫu nhiên, Biến cố chắc chắn & Biến cố không thể

**Phương pháp giải:**
- Biến cố $E$ xảy ra với mọi kết quả có thể của phép thử ($E = \Omega$) $\implies$ **Biến cố chắc chắn** ($n(E) = n(\Omega)$).
- Biến cố $E$ không bao giờ xảy ra với bất kỳ kết quả nào ($E = \emptyset$) $\implies$ **Biến cố không thể** ($n(E) = 0$).
- Biến cố $E$ có thể xảy ra hoặc không xảy ra tùy thuộc vào kết quả cụ thể ($0 < n(E) < n(\Omega)$) $\implies$ **Biến cố ngẫu nhiên**.

---

#### Ví dụ 3
Trong một chiếc hộp có $5$ viên bi xanh, $4$ viên bi đỏ và $3$ viên bi vàng có cùng kích thước và khối lượng. Lấy ngẫu nhiên cùng lúc $3$ viên bi từ hộp. Trong các biến cố sau, biến cố nào là biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên?
- $A$: *"Lấy được 3 viên bi cùng màu đỏ"*.
- $B$: *"Lấy được ít nhất một viên bi có màu xanh, đỏ hoặc vàng"*.
- $C$: *"Lấy được 4 viên bi màu xanh"*.
- $D$: *"Lấy được 3 viên bi có màu khác nhau"*.

**Lời giải chi tiết:**
- Biến cố $A$: Có thể xảy ra (nếu cả 3 viên rút ra đều màu đỏ) hoặc không xảy ra (nếu có bi xanh hoặc vàng). Do đó $A$ là **biến cố ngẫu nhiên**.
- Biến cố $B$: Trong hộp chỉ có đúng 3 màu: xanh, đỏ, vàng. Bất kỳ viên bi nào lấy ra cũng thuộc vào một trong ba màu này. Do đó biến cố $B$ luôn luôn xảy ra với mọi lần rút. Vậy $B$ là **biến cố chắc chắn**.
- Biến cố $C$: Phép thử chỉ lấy ra đúng $3$ viên bi, không thể lấy ra được $4$ viên bi. Do đó biến cố $C$ không bao giờ xảy ra. Vậy $C$ là **biến cố không thể**.
- Biến cố $D$: Có thể xảy ra (nếu lấy được 1 xanh, 1 đỏ, 1 vàng) hoặc không xảy ra (nếu lấy được 2 viên cùng màu). Do đó $D$ là **biến cố ngẫu nhiên**.

---

### Dạng 4: Mô hình hoá phép thử nhiều giai đoạn bằng Sơ đồ hình cây (Tree Diagram)

**Phương pháp giải:**
Khi phép thử diễn ra qua nhiều bước (ví dụ: gieo đồng xu 3 lần, thi đấu 2 vòng loại...):
1. Vẽ điểm gốc.
2. Từ điểm gốc vẽ các nhánh tương ứng với các kết quả của bước 1.
3. Từ đầu mút mỗi nhánh bước 1, vẽ tiếp các nhánh tương ứng với kết quả của bước 2.
4. Mỗi con đường đi từ gốc đến ngọn của sơ đồ cây chính là một kết quả có thể của phép thử.
5. Tổng số ngọn cây chính là số phần tử $n(\Omega)$ của không gian mẫu.

---

#### Ví dụ 4
Một cặp vợ chồng dự định sinh $2$ người con. Giả sử xác suất sinh con trai ($T$) và con gái ($G$) ở mỗi lần sinh là như nhau.

a) Vẽ sơ đồ hình cây biểu diễn các kết quả có thể về giới tính của hai người con theo thứ tự sinh.  
b) Xác định không gian mẫu $\Omega$ và tính số phần tử $n(\Omega)$.  
c) Liệt kê các kết quả thuận lợi cho biến cố: *"Gia đình có ít nhất một người con gái"*.

**Lời giải chi tiết:**
a) Sơ đồ hình cây:
- Con thứ nhất có 2 nhánh: $T$ hoặc $G$.
- Từ $T$ (con thứ nhất) rẽ ra 2 nhánh cho con thứ hai: $T$ (cho kết quả $TT$) hoặc $G$ (cho kết quả $TG$).
- Từ $G$ (con thứ nhất) rẽ ra 2 nhánh cho con thứ hai: $T$ (cho kết quả $GT$) hoặc $G$ (cho kết quả $GG$).

b) Không gian mẫu theo thứ tự sinh:
$$\Omega = \{TT; TG; GT; GG\} \implies n(\Omega) = 4$$

c) Gọi $E$ là biến cố: *"Gia đình có ít nhất một con gái"*.
Các kết quả chứa ít nhất một chữ $G$ là:
$$E = \{TG; GT; GG\}$$
Số kết quả thuận lợi là $n(E) = 3$.

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Thuật toán Sinh số Ngẫu nhiên (Pseudorandom Number Generators - PRNG):** Trong mật mã học và bảo mật máy tính, không gian mẫu của các khóa mã hóa đối xứng (AES-256) lên tới $2^{256}$ khả năng. Không gian mẫu khổng lồ này khiến ngay cả siêu máy tính lượng tử cũng mất hàng tỷ năm mới có thể thử hết mọi trường hợp (Brute-force).
2. **Phương pháp Mô phỏng Monte Carlo trong AI & Tài chính:** Để định giá chứng khoán phái sinh hoặc dự báo đường đi của bão, các nhà khoa học máy tính thực hiện hàng triệu phép thử ngẫu nhiên giả lập (Monte Carlo Simulation) để xấp xỉ không gian mẫu phức tạp mà giải tích truyền thống không giải được.
3. **Thiết kế Thử nghiệm A/B Testing trong Công nghệ:** Các tập đoàn như Google, Meta, TikTok chia ngẫu nhiên người dùng vào hai nhóm (nhóm xem giao diện A và nhóm xem giao diện B) để đánh giá tính hiệu quả của tính năng mới dựa trên lý thuyết phép thử ngẫu nhiên.
4. **Di truyền học Mendel:** Các định luật di truyền học cổ điển của Gregor Mendel (tỷ lệ phân ly tính trạng $3 : 1$ hay $1 : 2 : 1$) được xây dựng trực tiếp trên mô hình không gian mẫu kết hợp các giao tử đực và cái.
5. **Cơ học Lượng tử & Máy tính Lượng tử (Quantum Computing):** Trong thế giới hạt hạ nguyên tử, nguyên lý bất định Heisenberg chỉ ra rằng trạng thái của một electron là một hàm sóng xác suất. Qubit trong máy tính lượng tử có thể ở trạng thái chồng chập của cả $0$ và $1$ cùng lúc trước khi thực hiện phép đo (phép thử).

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên được gọi là:",
  "options": [
    "A. Biến cố chắc chắn",
    "B. Không gian mẫu",
    "C. Biến cố không thể",
    "D. Tần số tương đối"
  ],
  "answer": "B. Không gian mẫu",
  "explanation": "Theo định nghĩa, không gian mẫu (ký hiệu là Ω) là tập hợp tất cả các kết quả có thể xảy ra của phép thử ngẫu nhiên."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Gieo một con xúc xắc 6 mặt đồng chất. Số phần tử của không gian mẫu n(Ω) bằng:",
  "options": [
    "A. 2",
    "B. 4",
    "C. 6",
    "D. 12"
  ],
  "answer": "C. 6",
  "explanation": "Xúc xắc 6 mặt có 6 kết quả có thể xuất hiện: {1, 2, 3, 4, 5, 6}, do đó n(Ω) = 6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Gieo đồng thời hai đồng xu cân đối. Số phần tử của không gian mẫu n(Ω) là:",
  "options": [
    "A. 2",
    "B. 4",
    "C. 6",
    "D. 8"
  ],
  "answer": "B. 4",
  "explanation": "Không gian mẫu gồm 4 kết quả: Ω = {SS, SN, NS, NN}, do đó n(Ω) = 4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Biến cố không thể là biến cố có đặc điểm nào dưới đây?",
  "options": [
    "A. Luôn luôn xảy ra trong mọi lần thử",
    "B. Là tập con có số phần tử bằng n(Ω)",
    "C. Không bao giờ xảy ra trong bất kỳ lần thử nào (tập rỗng ∅)",
    "D. Có số kết quả thuận lợi bằng 1"
  ],
  "answer": "C. Không bao giờ xảy ra trong bất kỳ lần thử nào (tập rỗng ∅)",
  "explanation": "Biến cố không thể là biến cố chắc chắn không xảy ra khi thực hiện phép thử, tập kết quả thuận lợi là tập rỗng ∅, n(∅) = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Gieo một con xúc xắc 6 mặt một lần. Biến cố nào dưới đây là biến cố chắc chắn?",
  "options": [
    "A. Số chấm xuất hiện là số chẵn",
    "B. Số chấm xuất hiện lớn hơn 3",
    "C. Số chấm xuất hiện nhỏ hơn 7",
    "D. Số chấm xuất hiện chia hết cho 5"
  ],
  "answer": "C. Số chấm xuất hiện nhỏ hơn 7",
  "explanation": "Tất cả các mặt xúc xắc đều có số chấm từ 1 đến 6, đều nhỏ hơn 7. Do đó biến cố này luôn luôn xảy ra với mọi kết quả."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo một con xúc xắc 6 mặt. Số kết quả thuận lợi cho biến cố A: \"Số chấm xuất hiện là số chia hết cho 3\" là:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 4"
  ],
  "answer": "B. 2",
  "explanation": "Các số từ 1 đến 6 chia hết cho 3 là {3, 6}. Do đó có đúng 2 kết quả thuận lợi: n(A) = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một hộp có 10 tấm thẻ đánh số từ 1 đến 10. Rút ngẫu nhiên một thẻ. Số kết quả thuận lợi cho biến cố \"Số ghi trên thẻ là số nguyên tố\" là:",
  "options": [
    "A. 3",
    "B. 4",
    "C. 5",
    "D. 6"
  ],
  "answer": "B. 4",
  "explanation": "Các số nguyên tố từ 1 đến 10 là {2, 3, 5, 7}. Có tất cả 4 kết quả thuận lợi."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Gieo 3 đồng xu phân biệt. Số phần tử của không gian mẫu n(Ω) là:",
  "options": [
    "A. 6",
    "B. 8",
    "C. 9",
    "D. 12"
  ],
  "answer": "B. 8",
  "explanation": "Mỗi đồng xu có 2 kết quả có thể. Với 3 đồng xu, số phần tử là n(Ω) = 2 * 2 * 2 = 8."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Gieo hai con xúc xắc 6 mặt. Số kết quả thuận lợi cho biến cố \"Tổng số chấm trên hai con xúc xắc bằng 11\" là:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 4"
  ],
  "answer": "B. 2",
  "explanation": "Tổng bằng 11 chỉ có hai cặp thỏa mãn: (5; 6) và (6; 5). Do đó n = 2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Chọn ngẫu nhiên một bạn học sinh trong một lớp có 22 nam và 18 nữ. Biến cố \"Học sinh được chọn có ngày sinh trong năm\" là:",
  "options": [
    "A. Biến cố ngẫu nhiên",
    "B. Biến cố không thể",
    "C. Biến cố chắc chắn",
    "D. Phép thử ngẫu nhiên"
  ],
  "answer": "C. Biến cố chắc chắn",
  "explanation": "Bất kỳ ai sinh ra cũng đều có ngày sinh trong năm (từ 1/1 đến 31/12). Biến cố này luôn luôn xảy ra với mọi học sinh được chọn."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Liệt kê không gian mẫu:** Một túi chứa $3$ viên bi gồm $1$ bi đỏ ($Đ$), $1$ bi xanh ($X$), $1$ bi vàng ($V$). Lấy ngẫu nhiên ra $2$ viên bi cùng một lúc.
   a) Viết không gian mẫu $\Omega$ dưới dạng tập hợp các cặp không kể thứ tự.  
   b) Tính số phần tử $n(\Omega)$.  
   c) Liệt kê các kết quả thuận lợi cho biến cố $A$: *"Trong hai viên bi lấy ra có viên bi màu đỏ"*.

2. **Gieo xúc xắc:** Gieo đồng thời hai con xúc xắc 6 mặt. Tính số kết quả thuận lợi cho các biến cố:
   a) $E$: *"Tổng số chấm trên hai con xúc xắc nhỏ hơn hoặc bằng 4"*.  
   b) $F$: *"Hiệu số chấm giữa hai con xúc xắc (lấy số lớn trừ số bé) bằng 3"*.

---

### Thử thách Thực tế: Phân tích Không gian Mẫu của Thuật toán Bốc thăm Giải đấu (Esports Tournament)

**Bối cảnh:** Trong vòng tứ kết giải đấu thể thao điện tử, có $4$ đội tuyển mạnh nhất lọt vào vòng chung kết gồm: Đội $A$, Đội $B$, Đội $C$, Đội $D$. Ban tổ chức tiến hành bốc thăm ngẫu nhiên để chia thành $2$ cặp đấu bán kết.

**Yêu cầu:**
1. Hãy liệt kê tất cả các khả năng ghép cặp thi đấu có thể xảy ra (Không gian mẫu $\Omega$).
2. Có bao nhiêu kết quả có thể của phép thử bốc thăm này?
3. Xác định số kết quả thuận lợi cho biến cố: *"Đội A và Đội B gặp nhau ngay tại trận Bán kết"*.
