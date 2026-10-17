---
title: 'Toán 9 Bài 26: Xác suất của biến cố liên quan tới phép thử - Công thức Cổ điển & Sơ đồ Cây'
description: 'Lý thuyết chuẩn xác Bài 26 Toán 9: Định nghĩa xác suất cổ điển P(A) = n(A)/n(Ω), biến cố đối, phương pháp bảng hai chiều, sơ đồ hình cây, widget mô phỏng tương tác rút quả cầu từ hộp và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 9
  - Xác suất 9
  - Xác suất cổ điển
  - Sơ đồ hình cây
  - Bảng hai chiều
  - Biến cố đối
  - Kết nối tri thức
grade: 9
---

# Bài 26. Xác suất của biến cố liên quan tới phép thử

Nếu ở Bài 25, chúng ta đã xây dựng nền móng về **Không gian mẫu $\Omega$** và **Biến cố $E$**, thì câu hỏi quan trọng nhất mà mọi người đều quan tâm khi đối diện với tương lai bất định là:
- *Khả năng xảy ra biến cố đó cao hay thấp?*
- *Nó xảy ra với cơ hội bao nhiêu phần trăm?*

Để định lượng chính xác "mức độ khả thi" hay "cơ hội xuất hiện" của một biến cố, các nhà toán học đã định nghĩa đại lượng **Xác suất (Probability)**.

Từ những tính toán chia tiền cược ban đầu giữa Pascal và Fermat trong trò chơi xúc xắc thế kỷ XVII, ngày nay lý thuyết xác suất đã trở thành trái tim vận hành của:
- Ngành bảo hiểm toàn cầu (tính toán phí rủi ro theo tuổi thọ và dịch bệnh).
- Các thuật toán Trí tuệ nhân tạo (học máy Machine Learning, mạng Bayes).
- Thị trường tài chính, chứng khoán và quản trị rủi ro chuỗi cung ứng.

Trong bài học này, chúng ta sẽ chinh phục **Công thức tính xác suất cổ điển**, làm chủ kỹ thuật vẽ **Bảng hai chiều** và **Sơ đồ hình cây** để xử lý mượt mà mọi bài toán xác suất từ cơ bản đến nâng cao!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: XÁC SUẤT CỔ ĐIỂN & PHƯƠNG PHÁP TÍNH</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Công thức Xác suất Cổ điển</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tỉ số giữa kết quả thuận lợi và tổng số kết quả:<br>$$P(A) = \frac{n(A)}{n(\Omega)}$$
      • Áp dụng khi các kết quả đơn lẻ là <strong>đồng khả năng</strong>.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Tính chất cơ bản của Xác suất</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $0 \le P(A) \le 1$ (hoặc $0\% \le P(A) \le 100\%$).<br>• Biến cố chắc chắn: $P(\Omega) = 1$.<br>• Biến cố không thể: $P(\emptyset) = 0$.<br>• <strong>Biến cố đối:</strong> $P(\bar{A}) = 1 - P(A)$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Phương pháp Bảng hai chiều</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Áp dụng cho phép thử gồm 2 giai đoạn (gieo 2 xúc xắc, chọn 2 thẻ).<br>• Hàng biểu thị kết quả của giai đoạn 1.<br>• Cột biểu thị kết quả của giai đoạn 2.<br>• Mỗi ô trong bảng là một kết quả của phép thử.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Phương pháp Sơ đồ hình cây</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Rất trực quan cho phép thử nhiều giai đoạn liên tiếp.<br>• Từ gốc rẽ các nhánh ở giai đoạn 1, rồi rẽ tiếp ở giai đoạn 2...<br>• Mỗi đường đi từ gốc tới ngọn là một kết quả đơn lẻ.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Gieo đồng xu:** Xác suất xuất hiện mặt Sấp khi gieo một đồng xu cân đối bằng bao nhiêu?
2. **Gieo xúc xắc:** Gieo một con xúc xắc 6 mặt đồng chất. Xác suất xuất hiện mặt $5$ chấm là bao nhiêu?
3. **Biến cố đối:** Nếu xác suất ngày mai trời mưa là $0,35$, thì xác suất ngày mai trời không mưa là bao nhiêu?
4. **Biến cố chắc chắn:** Một hộp chỉ chứa toàn bi màu đỏ. Rút ngẫu nhiên một viên bi, xác suất lấy được viên bi màu đỏ là bao nhiêu?
5. **Rút thăm:** Một lớp học có $20$ bạn nam và $25$ bạn nữ. Chọn ngẫu nhiên một bạn làm lớp trưởng. Xác suất chọn được bạn nữ là bao nhiêu?

> [!TIP]
> **Mẹo nhẩm siêu tốc:**
> - Câu 1: $P = \frac{1}{2} = 50\%$.
> - Câu 2: Có 1 mặt 5 chấm trên 6 mặt $\implies P = \frac{1}{6}$.
> - Câu 3: Dùng biến cố đối: $P = 1 - 0,35 = 0,65$ ($65\%$).
> - Câu 4: Đây là biến cố chắc chắn nên $P = 1$ ($100\%$).
> - Câu 5: Tổng số học sinh là $20 + 25 = 45$. Xác suất là $P = \frac{25}{45} = \frac{5}{9}$.

---

## Lý thuyết trọng tâm

### 1. Định nghĩa Cổ điển của Xác suất

Giả sử một phép thử có không gian mẫu $\Omega$ gồm hữu hạn phần tử và **các kết quả có thể của phép thử là đồng khả năng** (có cơ hội xảy ra ngang nhau).

> [!NOTE]
> **Công thức Xác suất Cổ điển:**
> Xác suất của một biến cố $A$, ký hiệu là $P(A)$, là tỉ số giữa số kết quả thuận lợi cho biến cố $A$ và số phần tử của không gian mẫu $\Omega$:
> $$P(A) = \frac{n(A)}{n(\Omega)}$$
> trong đó:
> - $n(A)$ là số phần tử của tập hợp $A$ (số kết quả thuận lợi cho $A$).
> - $n(\Omega)$ là số phần tử của không gian mẫu $\Omega$.

**Các tính chất nền tảng:**
1. Vì $0 \le n(A) \le n(\Omega)$ nên với mọi biến cố $A$, ta luôn có:
   $$0 \le P(A) \le 1 \quad \text{hay} \quad 0\% \le P(A) \le 100\%$$
2. Xác suất của biến cố không thể là $0$:
   $$P(\emptyset) = \frac{0}{n(\Omega)} = 0$$
3. Xác suất của biến cố chắc chắn là $1$:
   $$P(\Omega) = \frac{n(\Omega)}{n(\Omega)} = 1$$

---

### 2. Biến cố đối và Quy tắc phần bù

Cho biến cố $A$. Biến cố *"Không xảy ra biến cố $A$"* được gọi là **biến cố đối** của $A$, ký hiệu là $\bar{A}$.

- Về bản chất tập hợp: $\bar{A}$ là phần bù của tập hợp $A$ trong không gian mẫu $\Omega$:
  $$\bar{A} = \Omega \setminus A \implies n(\bar{A}) = n(\Omega) - n(A)$$
- **Công thức xác suất của biến cố đối:**
  $$P(\bar{A}) = 1 - P(A) \quad \text{hay} \quad P(A) = 1 - P(\bar{A})$$

> [!TIP]
> **Khi nào nên dùng biến cố đối?**
> Khi đề bài yêu cầu tính xác suất của các biến cố chứa cụm từ *"có ít nhất một..."*, việc tính trực tiếp sẽ phải chia thành nhiều trường hợp phức tạp. Sử dụng biến cố đối *"không có cái nào..."* thường chỉ có duy nhất $1$ trường hợp, giúp lời giải ngắn gọn và chuẩn xác!

---

### 3. Phương pháp Bảng hai chiều và Sơ đồ hình cây

Để đếm chính xác $n(\Omega)$ và $n(A)$ trong các bài toán gồm hai giai đoạn liên tiếp:

#### a) Bảng hai chiều (Two-Way Table)
Thường áp dụng khi gieo $2$ xúc xắc hoặc thực hiện $2$ phép chọn độc lập:
- Hàng: Biểu diễn các kết quả của lần 1 ($1, 2, 3, 4, 5, 6$).
- Cột: Biểu diễn các kết quả của lần 2 ($1, 2, 3, 4, 5, 6$).
- Giao của hàng và cột tạo thành $6 \times 6 = 36$ ô kết quả. Ta chỉ việc rà soát và đánh dấu các ô thỏa mãn điều kiện biến cố.

#### b) Sơ đồ hình cây (Tree Diagram)
Thường áp dụng khi thứ tự thời gian rõ ràng (gieo đồng xu liên tiếp 3 lần, rút thẻ không hoàn lại):
- Mỗi bước là một tầng nhánh cây.
- Kết quả cuối cùng là một đường đi xuyên suốt từ gốc tới ngọn.

---

## Phòng thí nghiệm Tương tác: Hộp Bi Ma thuật (Marble Draw Simulator)

Hãy thử nghiệm rút bi ngẫu nhiên từ hộp kín! Bạn có thể tùy chỉnh số lượng bi Đỏ, bi Xanh và bi Vàng để quan sát xác suất lý thuyết $P(A) = \frac{n(A)}{N}$ và so sánh với tần số tương đối thực nghiệm sau nhiều lần rút:

<div class="interactive-card" style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top: 0; color: var(--primary-color, #2563eb); text-align: center;">MÔ PHỎNG: RÚT QUẢ CẦU NGẪU NHIÊN TỪ HỘP KÍN</h3>
  <p style="text-align: center; color: #64748b; font-size: 0.95em;">Cấu hình số lượng bi trong hộp để kiểm tra xác suất lý thuyết và thực nghiệm:</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 20px;">
    <div style="background: #fef2f2; padding: 10px; border-radius: 8px; border: 1px solid #fecaca; text-align: center;">
      <span style="font-weight: bold; color: #dc2626; font-size: 0.9em;">Bi Đỏ (Red)</span>
      <input type="number" id="ballRedInput" value="5" min="1" max="50" style="width: 80%; padding: 4px; border: 1px solid #f87171; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="updateMarbleSetup()">
    </div>
    <div style="background: #eff6ff; padding: 10px; border-radius: 8px; border: 1px solid #bfdbfe; text-align: center;">
      <span style="font-weight: bold; color: #2563eb; font-size: 0.9em;">Bi Xanh (Blue)</span>
      <input type="number" id="ballBlueInput" value="3" min="1" max="50" style="width: 80%; padding: 4px; border: 1px solid #60a5fa; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="updateMarbleSetup()">
    </div>
    <div style="background: #fefce8; padding: 10px; border-radius: 8px; border: 1px solid #fef08a; text-align: center;">
      <span style="font-weight: bold; color: #ca8a04; font-size: 0.9em;">Bi Vàng (Yellow)</span>
      <input type="number" id="ballYellowInput" value="2" min="1" max="50" style="width: 80%; padding: 4px; border: 1px solid #facc15; border-radius: 4px; text-align: center; margin-top: 4px;" oninput="updateMarbleSetup()">
    </div>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;">
    <div id="marbleJarVisual" style="width: 140px; height: 140px; border: 4px dashed #94a3b8; border-radius: 16px; background: #f8fafc; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: inset 0 2px 6px rgba(0,0,0,0.05);">
      <div id="drawnBallAnim" style="width: 60px; height: 60px; border-radius: 50%; background: #dc2626; box-shadow: 0 4px 10px rgba(0,0,0,0.25); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2em; transition: transform 0.3s ease-in-out;">?</div>
    </div>
    <p id="marbleDrawResult" style="margin-top: 10px; font-weight: bold; color: #1e293b; font-size: 1.05em;">Chưa rút lần nào</p>
  </div>

  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
    <button onclick="drawMarble(1)" style="padding: 8px 18px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Rút 1 lần</button>
    <button onclick="drawMarble(10)" style="padding: 8px 18px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Rút 10 lần</button>
    <button onclick="drawMarble(100)" style="padding: 8px 18px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Rút 100 lần</button>
    <button onclick="resetMarbleSim()" style="padding: 8px 18px; background: #64748b; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Làm mới</button>
  </div>

  <div style="overflow-x: auto;">
    <table id="marbleTable" style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em;">
      <thead>
        <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
          <th style="padding: 8px;">Màu sắc</th>
          <th style="padding: 8px;">Số lượng trong hộp</th>
          <th style="padding: 8px;">Xác suất lý thuyết $P$</th>
          <th style="padding: 8px;">Số lần rút thực nghiệm</th>
          <th style="padding: 8px;">Tần số tương đối thực nghiệm</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
  <p id="marbleSummary" style="text-align: center; color: #475569; margin-top: 12px; font-size: 0.9em;"></p>
</div>

<script>
let marbleExp = { red: 0, blue: 0, yellow: 0, total: 0 };

function getMarbleCounts() {
  const r = Math.max(1, parseInt(document.getElementById('ballRedInput').value) || 1);
  const b = Math.max(1, parseInt(document.getElementById('ballBlueInput').value) || 1);
  const y = Math.max(1, parseInt(document.getElementById('ballYellowInput').value) || 1);
  return { r, b, y, total: r + b + y };
}

function updateMarbleSetup() {
  const { r, b, y, total } = getMarbleCounts();
  const tbody = document.querySelector('#marbleTable tbody');
  tbody.innerHTML = '';

  const rows = [
    { name: 'Đỏ', count: r, exp: marbleExp.red, color: '#dc2626' },
    { name: 'Xanh', count: b, exp: marbleExp.blue, color: '#2563eb' },
    { name: 'Vàng', count: y, exp: marbleExp.yellow, color: '#ca8a04' }
  ];

  rows.forEach(item => {
    const theoPct = ((item.count / total) * 100).toFixed(1);
    const expPct = marbleExp.total > 0 ? ((item.exp / marbleExp.total) * 100).toFixed(1) : '0.0';

    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid #e2e8f0';
    tr.innerHTML = `
      <td style="padding: 8px; font-weight: bold; color: ${item.color};">${item.name}</td>
      <td style="padding: 8px;">${item.count}</td>
      <td style="padding: 8px; font-weight: bold;">${item.count}/${total} (${theoPct}%)</td>
      <td style="padding: 8px;">${item.exp}</td>
      <td style="padding: 8px; font-weight: bold; color: ${item.color};">${expPct}%</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('marbleSummary').innerHTML = `Không gian mẫu trong hộp: <strong>N = ${total}</strong> quả cầu | Tổng số lần rút: <strong>${marbleExp.total}</strong>`;
}

function drawMarble(times) {
  const { r, b, y, total } = getMarbleCounts();
  let lastPick = '';

  for (let i = 0; i < times; i++) {
    const rnd = Math.random() * total;
    if (rnd < r) {
      marbleExp.red++;
      lastPick = 'red';
    } else if (rnd < r + b) {
      marbleExp.blue++;
      lastPick = 'blue';
    } else {
      marbleExp.yellow++;
      lastPick = 'yellow';
    }
    marbleExp.total++;
  }

  const anim = document.getElementById('drawnBallAnim');
  anim.style.transform = 'scale(0.3)';
  setTimeout(() => {
    if (lastPick === 'red') {
      anim.style.background = '#dc2626';
      anim.textContent = 'Đỏ';
      document.getElementById('marbleDrawResult').innerHTML = 'Vừa rút được: <span style="color:#dc2626;">Bi Đỏ</span>';
    } else if (lastPick === 'blue') {
      anim.style.background = '#2563eb';
      anim.textContent = 'Xanh';
      document.getElementById('marbleDrawResult').innerHTML = 'Vừa rút được: <span style="color:#2563eb;">Bi Xanh</span>';
    } else {
      anim.style.background = '#ca8a04';
      anim.textContent = 'Vàng';
      document.getElementById('marbleDrawResult').innerHTML = 'Vừa rút được: <span style="color:#ca8a04;">Bi Vàng</span>';
    }
    anim.style.transform = 'scale(1)';
  }, 150);

  updateMarbleSetup();
}

function resetMarbleSim() {
  marbleExp = { red: 0, blue: 0, yellow: 0, total: 0 };
  const anim = document.getElementById('drawnBallAnim');
  anim.style.background = '#94a3b8';
  anim.textContent = '?';
  document.getElementById('marbleDrawResult').textContent = 'Chưa rút lần nào';
  updateMarbleSetup();
}

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', updateMarbleSetup); } else { updateMarbleSetup(); }
</script>

---

## 4 Dạng toán trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính xác suất bằng Công thức Cổ điển trong Phép thử 1 giai đoạn

**Phương pháp giải:**
1. Xác định không gian mẫu $\Omega$ và tính số phần tử $n(\Omega)$.
2. Xác định các kết quả thuận lợi cho biến cố $A$ và tính $n(A)$.
3. Áp dụng công thức:
   $$P(A) = \frac{n(A)}{n(\Omega)}$$
4. Rút gọn phân số về dạng tối giản hoặc đổi ra số thập phân / phần trăm.

---

#### Ví dụ 1
Một hộp đựng $25$ tấm thẻ giống nhau được đánh số từ $1$ đến $25$. Rút ngẫu nhiên một tấm thẻ trong hộp. Tính xác suất của các biến cố sau:
a) Biến cố $A$: *"Số ghi trên thẻ là số chia hết cho 4"*.  
b) Biến cố $B$: *"Số ghi trên thẻ là số chính phương"*.  
c) Biến cố $C$: *"Số ghi trên thẻ là số có hai chữ số"*.

**Lời giải chi tiết:**
Không gian mẫu gồm các số nguyên từ $1$ đến $25$:
$$\Omega = \{1; 2; 3; \dots; 25\} \implies n(\Omega) = 25$$

a) Các số từ $1$ đến $25$ chia hết cho $4$ là:
$$A = \{4; 8; 12; 16; 20; 24\} \implies n(A) = 6$$
Xác suất của biến cố $A$ là:
$$P(A) = \frac{n(A)}{n(\Omega)} = \frac{6}{25} = 0,24 = 24\%$$

b) Các số chính phương từ $1$ đến $25$ là:
$$B = \{1; 4; 9; 16; 25\} \implies n(B) = 5$$
Xác suất của biến cố $B$ là:
$$P(B) = \frac{n(B)}{n(\Omega)} = \frac{5}{25} = \frac{1}{5} = 0,2 = 20\%$$

c) Các số có hai chữ số từ $1$ đến $25$ bắt đầu từ $10$ đến $25$:
$$n(C) = 25 - 10 + 1 = 16$$
Xác suất của biến cố $C$ là:
$$P(C) = \frac{n(C)}{n(\Omega)} = \frac{16}{25} = 0,64 = 64\%$$

---

### Dạng 2: Tính xác suất bằng Phương pháp Bảng hai chiều

**Phương pháp giải:**
Thích hợp cho phép thử gồm 2 giai đoạn độc lập (gieo 2 con xúc xắc, chọn 2 thẻ bài...):
1. Lập bảng gồm các hàng và cột biểu diễn kết quả từng giai đoạn.
2. Tổng số ô của bảng chính là số phần tử không gian mẫu: $n(\Omega) = \text{số hàng} \times \text{số cột}$.
3. Điền giá trị đại lượng cần xét (tổng số chấm, hiệu số chấm, tích...) vào từng ô.
4. Đếm số ô thỏa mãn biến cố $\implies n(A)$.
5. Tính $P(A) = \frac{n(A)}{n(\Omega)}$.

---

#### Ví dụ 2
Gieo đồng thời hai con xúc xắc 6 mặt đồng chất. Tính xác suất của các biến cố sau:
a) $E$: *"Tổng số chấm trên hai con xúc xắc bằng 7"*.  
b) $F$: *"Tổng số chấm trên hai con xúc xắc lớn hơn 9"*.  
c) $G$: *"Ít nhất một con xúc xắc xuất hiện mặt 6 chấm"*.

**Lời giải chi tiết:**
Lập bảng hai chiều tính tổng số chấm $i + j$ của hai con xúc xắc ($1 \le i, j \le 6$):
Không gian mẫu gồm $6 \times 6 = 36$ ô kết quả đồng khả năng $\implies n(\Omega) = 36$.

| Xúc xắc 1 \ 2 | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | 2 | 3 | 4 | 5 | 6 | **7** |
| **2** | 3 | 4 | 5 | 6 | **7** | 8 |
| **3** | 4 | 5 | 6 | **7** | 8 | 9 |
| **4** | 5 | 6 | **7** | 8 | 9 | 10 |
| **5** | 6 | **7** | 8 | 9 | 10 | 11 |
| **6** | **7** | 8 | 9 | 10 | 11 | 12 |

a) Biến cố $E$: Tổng bằng $7$.
Quan sát đường chéo phụ của bảng, có $6$ ô có tổng bằng $7$:
$$(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1) \implies n(E) = 6$$
$$P(E) = \frac{6}{36} = \frac{1}{6}$$

b) Biến cố $F$: Tổng lớn hơn $9$ (tức tổng bằng $10, 11$ hoặc $12$).
Các cặp thỏa mãn là:
- Tổng = 10: $(4; 6), (5; 5), (6; 4)$ (3 ô).
- Tổng = 11: $(5; 6), (6; 5)$ (2 ô).
- Tổng = 12: $(6; 6)$ (1 ô).
$\implies n(F) = 3 + 2 + 1 = 6$ ô.
$$P(F) = \frac{6}{36} = \frac{1}{6}$$

c) Biến cố $G$: Có ít nhất một mặt 6 chấm.
Các kết quả gồm:
- Hàng 6 (xúc xắc 1 ra 6): $(6; 1), (6; 2), (6; 3), (6; 4), (6; 5), (6; 6)$ (6 cặp).
- Cột 6 (xúc xắc 2 ra 6): $(1; 6), (2; 6), (3; 6), (4; 6), (5; 6)$ (5 cặp, không tính lại cặp $(6; 6)$).
$\implies n(G) = 6 + 5 = 11$.
$$P(G) = \frac{11}{36}$$

---

### Dạng 3: Tính xác suất bằng Phương pháp Sơ đồ hình cây

**Phương pháp giải:**
1. Phân tích phép thử thành chuỗi các bước kế tiếp.
2. Vẽ sơ đồ hình cây phân nhánh từng bước.
3. Liệt kê tập hợp các kết quả ở mỗi ngọn cây $\implies n(\Omega)$.
4. Lọc các ngọn cây thỏa mãn biến cố $\implies n(A)$.
5. Áp dụng công thức $P(A) = \frac{n(A)}{n(\Omega)}$.

---

#### Ví dụ 3
Một người tham gia trò chơi gieo một đồng xu cân đối $3$ lần liên tiếp. Tính xác suất của các biến cố:
a) $A$: *"Cả ba lần gieo đều xuất hiện mặt Sấp"*.  
b) $B$: *"Có đúng hai lần xuất hiện mặt Ngửa"*.  
c) $C$: *"Lần gieo thứ hai xuất hiện mặt Sấp"*.

**Lời giải chi tiết:**
Xây dựng sơ đồ hình cây 3 bước:
- Lần 1: Rẽ 2 nhánh $S$ hoặc $N$.
- Lần 2: Mỗi nhánh rẽ tiếp 2 nhánh $S$ hoặc $N$ (tạo ra $4$ nhánh).
- Lần 3: Mỗi nhánh rẽ tiếp 2 nhánh $S$ hoặc $N$ (tạo ra $8$ ngọn cây).

Không gian mẫu gồm $8$ phần tử:
$$\Omega = \{SSS; SSN; SNS; SNN; NSS; NSN; NNS; NNN\} \implies n(\Omega) = 8$$

a) Biến cố $A$: Cả 3 lần đều Sấp:
$$A = \{SSS\} \implies n(A) = 1 \implies P(A) = \frac{1}{8} = 12,5\%$$

b) Biến cố $B$: Có đúng hai lần Ngửa (chứa đúng $2$ chữ $N$):
$$B = \{SNN; NSN; NNS\} \implies n(B) = 3 \implies P(B) = \frac{3}{8} = 37,5\%$$

c) Biến cố $C$: Lần gieo thứ hai là $S$ (chữ cái ở giữa là $S$):
$$C = \{SSS; SSN; NSS; NSN\} \implies n(C) = 4 \implies P(C) = \frac{4}{8} = \frac{1}{2} = 50\%$$

---

### Dạng 4: Sử dụng Quy tắc Biến cố đối $P(A) = 1 - P(\bar{A})$

**Phương pháp giải:**
Khi biến cố $A$ có từ khóa *"ít nhất một"*, ta xét biến cố đối $\bar{A}$: *"không có cái nào"*:
1. Xác định không gian mẫu và $n(\Omega)$.
2. Xác định biến cố đối $\bar{A}$ và đếm $n(\bar{A})$.
3. Tính xác suất biến cố đối: $P(\bar{A}) = \frac{n(\bar{A})}{n(\Omega)}$.
4. Suy ra xác suất cần tìm: $P(A) = 1 - P(\bar{A})$.

---

#### Ví dụ 4
Trong một lớp học có $15$ học sinh Giỏi và $25$ học sinh Khá. Thầy giáo chọn ngẫu nhiên $2$ học sinh lên bảng giải bài tập. Tính xác suất để:
a) Cả hai học sinh được chọn đều là học sinh Khá.  
b) Có ít nhất một học sinh Giỏi được chọn.

**Lời giải chi tiết:**
Tổng số học sinh của lớp là $15 + 25 = 40$ học sinh.
Phép thử: Chọn $2$ học sinh từ $40$ học sinh:
$$n(\Omega) = \frac{40 \times 39}{2} = 780$$

a) Gọi $E$ là biến cố: *"Cả hai học sinh được chọn đều là học sinh Khá"*.
Số cách chọn $2$ bạn từ $25$ bạn học sinh Khá là:
$$n(E) = \frac{25 \times 24}{2} = 300$$
Xác suất để cả hai bạn đều là học sinh Khá là:
$$P(E) = \frac{300}{780} = \frac{5}{13}$$

b) Gọi $A$ là biến cố: *"Có ít nhất một học sinh Giỏi được chọn"*.
Biến cố đối của $A$ là $\bar{A}$: *"Không có học sinh Giỏi nào được chọn"* (tức là cả hai học sinh được chọn đều là học sinh Khá).
Như vậy $\bar{A}$ chính là biến cố $E$ ở câu a!
Ta có $P(\bar{A}) = P(E) = \frac{5}{13}$.
Áp dụng công thức biến cố đối:
$$P(A) = 1 - P(\bar{A}) = 1 - \frac{5}{13} = \frac{8}{13} \approx 61,5\%$$

---

## 5 Ứng dụng Khoa học Thực tiễn & Công nghệ Hiện đại

1. **Thuật toán Định tuyến Mạng Internet (Randomized Routing):** Để giải quyết tắc nghẽn lưu lượng trên hệ thống cáp quang toàn cầu, các router mạng sử dụng thuật toán ngẫu nhiên (chọn đường truyền dựa trên phân phối xác suất độ trễ) để tối ưu hóa băng thông.
2. **Khoa học Tính toán Bảo hiểm (Actuarial Science):** Các chuyên gia định phí bảo hiểm (Actuary) sử dụng bảng tỷ lệ tử vong và xác suất xảy ra tai nạn để tính toán mức phí đóng và dự phòng bồi thường hàng nghìn tỷ đồng cho khách hàng.
3. **Mã hóa & Nén Dữ liệu (Huffman Coding):** Thuật toán nén dữ liệu nổi tiếng của David Huffman gán các chuỗi bit nhị phân ngắn nhất cho những ký tự có xác suất xuất hiện cao nhất trong văn bản, giúp giảm kích thước file ZIP, MP3 hay JPEG tới $50\% - 80\%$.
4. **Kiểm thử Phần mềm Tự động (Fuzz Testing):** Các kỹ sư tại Microsoft và Apple sử dụng công cụ sinh dữ liệu ngẫu nhiên với hàng triệu đầu vào dị biệt để kiểm tra xem hệ điều hành có bị lỗi tràn bộ đệm (Buffer Overflow) hay sập hệ thống không.
5. **Dự báo Khí tượng & Thảm họa Thiên nhiên:** Bản tin thời tiết dự báo "Xác suất có mưa ngày mai là $70\%$" (PoP - Probability of Precipitation) là kết quả tích hợp từ hàng trăm mô hình khí động học chạy trên siêu máy tính.

---

## 10 Câu hỏi Trắc nghiệm Tương tác Tự chấm (100% Đề mới)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho biến cố A trong một phép thử có không gian mẫu Ω. Khẳng định nào sau đây là ĐÚNG?",
  "options": [
    "A. P(A) luôn lớn hơn 1",
    "B. 0 <= P(A) <= 1",
    "C. P(A) có thể nhận giá trị âm",
    "D. P(A) = n(Ω) / n(A)"
  ],
  "answer": "B. 0 <= P(A) <= 1",
  "explanation": "Theo tính chất cơ bản của xác suất, với mọi biến cố A thì 0 <= P(A) <= 1 (tức từ 0% đến 100%)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Gieo một con xúc xắc 6 mặt đồng chất. Xác suất xuất hiện mặt có số chấm là số chẵn bằng:",
  "options": [
    "A. 1/6",
    "B. 1/3",
    "C. 1/2",
    "D. 2/3"
  ],
  "answer": "C. 1/2",
  "explanation": "Các mặt số chẵn là {2, 4, 6} (có 3 mặt). Xác suất P = 3/6 = 1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Một hộp có 12 viên bi đỏ và 8 viên bi xanh có cùng kích thước. Lấy ngẫu nhiên 1 viên bi. Xác suất lấy được viên bi màu đỏ là:",
  "options": [
    "A. 3/5",
    "B. 2/5",
    "C. 3/8",
    "D. 1/2"
  ],
  "answer": "A. 3/5",
  "explanation": "Tổng số bi là 12 + 8 = 20. Xác suất lấy bi đỏ là P = 12 / 20 = 3/5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Nếu biến cố A có xác suất P(A) = 0,72 thì xác suất của biến cố đối P(A_ngang) bằng:",
  "options": [
    "A. 0,72",
    "B. 0,28",
    "C. 0,18",
    "D. 0,38"
  ],
  "answer": "B. 0,28",
  "explanation": "P(A_ngang) = 1 - P(A) = 1 - 0,72 = 0,28."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Gieo đồng thời hai đồng xu cân đối. Xác suất để cả hai đồng xu đều xuất hiện mặt Ngửa là:",
  "options": [
    "A. 1/2",
    "B. 1/4",
    "C. 3/4",
    "D. 1/8"
  ],
  "answer": "B. 1/4",
  "explanation": "Không gian mẫu có 4 phần tử {SS, SN, NS, NN}. Kết quả cả hai mặt Ngửa là {NN} (1 phần tử). Xác suất P = 1/4."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo hai con xúc xắc 6 mặt. Xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng 2 là:",
  "options": [
    "A. 1/36",
    "B. 1/18",
    "C. 1/12",
    "D. 2/36"
  ],
  "answer": "A. 1/36",
  "explanation": "Tổng bằng 2 chỉ có duy nhất một kết quả là (1; 1). Số phần tử không gian mẫu là 36. Do đó P = 1/36."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Một túi có 5 quả bóng màu trắng và một số quả bóng màu đen. Biết xác suất lấy ngẫu nhiên một quả bóng màu trắng là 1/4. Số quả bóng màu đen trong túi là:",
  "options": [
    "A. 15",
    "B. 20",
    "C. 10",
    "D. 25"
  ],
  "answer": "A. 15",
  "explanation": "Gọi tổng số bóng là N. Ta có 5 / N = 1/4 => N = 20 quả. Số bóng đen là: 20 - 5 = 15 quả."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Rút ngẫu nhiên một tấm thẻ từ tập hợp 50 tấm thẻ đánh số từ 1 đến 50. Xác suất rút được tấm thẻ ghi số chia hết cho cả 2 và 5 là:",
  "options": [
    "A. 1/10",
    "B. 1/5",
    "C. 1/2",
    "D. 1/25"
  ],
  "answer": "A. 1/10",
  "explanation": "Số chia hết cho cả 2 và 5 là số chia hết cho 10. Từ 1 đến 50 có các số {10, 20, 30, 40, 50} (5 số). Xác suất P = 5 / 50 = 1/10."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Gieo một con xúc xắc 6 mặt 2 lần liên tiếp. Xác suất để ít nhất một lần xuất hiện mặt 6 chấm là:",
  "options": [
    "A. 11/36",
    "B. 1/36",
    "C. 1/6",
    "D. 25/36"
  ],
  "answer": "A. 11/36",
  "explanation": "Dùng biến cố đối: Cả hai lần đều không xuất hiện mặt 6 chấm. Mỗi lần có 5 kết quả (1 đến 5). Số kết quả của biến cố đối là 5 * 5 = 25. Xác suất biến cố đối là 25/36. Xác suất cần tìm là P = 1 - 25/36 = 11/36."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Xác suất để số được chọn có hai chữ số giống nhau là:",
  "options": [
    "A. 1/10",
    "B. 1/9",
    "C. 9/100",
    "D. 11/90"
  ],
  "answer": "A. 1/10",
  "explanation": "Số có hai chữ số gồm từ 10 đến 99, tổng cộng 99 - 10 + 1 = 90 số (n(Ω) = 90). Các số có hai chữ số giống nhau là {11, 22, 33, 44, 55, 66, 77, 88, 99} (9 số). Xác suất P = 9 / 90 = 1/10."
}'></div>

---

## Bài tập Tự luyện & Thử thách Thực tế

### Bài tập Tự luyện

1. **Rút thăm ngẫu nhiên:** Một hộp có $40$ chiếc thẻ đánh số từ $1$ đến $40$. Rút ngẫu nhiên một thẻ. Tính xác suất để:
   a) Số trên thẻ là số lẻ.  
   b) Số trên thẻ là bội của $6$.  
   c) Số trên thẻ chứa chữ số $3$.

2. **Gieo hai con xúc xắc:** Gieo đồng thời hai con xúc xắc 6 mặt đồng chất. Dùng bảng hai chiều tính xác suất để:
   a) Tích số chấm trên hai con xúc xắc bằng $12$.  
   b) Số chấm trên con xúc xắc thứ nhất lớn hơn số chấm trên con xúc xắc thứ hai ít nhất $2$ đơn vị.

---

### Thử thách Thực tế: Phân tích Xác suất Thắng trong Trò chơi Bốc Thăm Hội Chợ

**Bối cảnh:** Tại hội chợ xuân của trường, chi đoàn lớp 9A tổ chức gian hàng trò chơi *"Vòng Quay May Mắn"*. Mỗi người chơi nạp $10\,000$ đồng để tung đồng thời $2$ con xúc xắc 6 mặt:
- Nếu tổng số chấm bằng $12$: Nhận gấu bông đặc biệt trị giá $80\,000$ đồng.
- Nếu tổng số chấm bằng $7$ hoặc $11$: Nhận móc khóa lưu niệm trị giá $20\,000$ đồng.
- Các trường hợp còn lại: Nhận kẹo an ủi trị giá $2\,000$ đồng.

**Yêu cầu:**
1. Tính xác suất để một người chơi trúng được gấu bông đặc biệt.
2. Tính xác suất để một người chơi nhận được móc khóa lưu niệm.
3. Nếu có $360$ lượt người tham gia chơi, hãy ước tính số tiền lãi (hoặc lỗ) mà chi đoàn lớp 9A thu được sau hội chợ dựa trên xác suất lý thuyết.
