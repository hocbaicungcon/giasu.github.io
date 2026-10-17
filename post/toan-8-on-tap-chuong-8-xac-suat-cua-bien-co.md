---
title: 'Toán 8 Ôn tập Chương 8: Mở đầu về tính xác suất của biến cố'
description: 'Tổng kết toàn diện Chương 8 Xác suất Toán 8: Sơ đồ tư duy, kết quả có thể và thuận lợi, công thức cổ điển P(E) = k / n, định luật số lớn, tương tác gieo xúc xắc và tung đồng xu, 10 quiz tương tác và đề kiểm tra 45 phút chuẩn ma trận kèm barem điểm.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 8
  - Đại số 8
  - Ôn tập chương 8
  - Xác suất biến cố
  - Xác suất thực nghiệm
  - Xác suất lý thuyết
  - Đề kiểm tra toán 8
  - Kết nối tri thức
grade: 8
---

# Ôn tập Chương 8: Mở đầu về tính xác suất của biến cố

Trong một thế giới đầy biến động, con người không thể sống và phát triển nếu chỉ dựa vào cảm tính may rủi. Từ việc dự báo hướng đi của cơn bão số 5 trên Biển Đông, đánh giá độ an toàn của một cây cầu dây văng, đến việc định giá cổ phiếu trên thị trường chứng khoán — tất cả các quyết định trọng đại nhất của nền văn minh hiện đại đều được dẫn đường bởi **Lý thuyết Xác suất**.

Chương 8 đã trang bị cho các em những viên gạch nền tảng vững chắc nhất của tư duy xác suất:
- Hiểu rõ bản chất của **phép thử ngẫu nhiên** và không gian các **kết quả có thể**.
- Xác định chính xác các **kết quả thuận lợi** làm cho biến cố xảy ra.
- Làm chủ công thức tính xác suất cổ điển bằng tỉ số: $P(E) = \frac{k}{n}$.
- Khám phá **Định luật số lớn**, thấy được sự kỳ diệu khi xác suất thực nghiệm $\frac{m}{N}$ hội tụ về xác suất lý thuyết sau hàng ngàn lần thử.

Bài viết này hệ thống hóa toàn bộ kiến thức Chương 8 qua bảng tra cứu trực quan, các mô phỏng tương tác gieo xúc xắc, tung đồng xu sống động, 4 dạng toán thực tế kinh điển và một đề kiểm tra 45 phút chuẩn ma trận kèm barem chấm điểm chi tiết!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
  <h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TỔNG KẾT TOÀN DIỆN CHƯƠNG 8: XÁC SUẤT CỦA BIẾN CỐ</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
      <h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Phép thử & Kết quả</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Phép thử: Biết trước tập tất cả kết quả có thể $n$.<br>• Biến cố chắc chắn: $P = 1$.<br>• Biến cố không thể: $P = 0$.<br>• Biến cố ngẫu nhiên: $0 < P < 1$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
      <h4 style="margin: 0 0 8px 0; color: #047857;">2. Xác suất Lý thuyết</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Áp dụng khi các kết quả <strong>đồng khả năng</strong>.<br>• Công thức tỉ số:<br>  $$P(E) = \frac{k}{n} = \frac{\text{Số kết quả thuận lợi}}{\text{Tổng số kết quả có thể}}$$</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
      <h4 style="margin: 0 0 8px 0; color: #b45309;">3. Biến cố Đối</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Biến cố đối $\overline{E}$: "Không xảy ra $E$".<br>• Tổng xác suất: $P(E) + P(\overline{E}) = 1$.<br>• Phương pháp tính nhanh bài toán: "Có ít nhất một...": $P(E) = 1 - P(\overline{E})$.</p>
    </div>
    <div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
      <h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Thực nghiệm & Số lớn</h4>
      <p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Xác suất thực nghiệm: $f = \frac{m}{N}$.<br>• Định luật số lớn: Khi $N$ rất lớn thì $f \approx P(E)$.<br>• Dự đoán tần số: $m \approx N \cdot P(E)$.<br>• Ứng dụng: Bắt lại đánh dấu đếm sinh vật.</p>
    </div>
  </div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Xác suất cơ bản:** Khi gieo một con xúc xắc 6 mặt, xác suất xuất hiện mặt chia hết cho 3 là bao nhiêu?
2. **Khoảng giá trị:** Một bạn tính ra xác suất của biến cố là $1{,}2$. Kết quả này đúng hay sai? Vì sao?
3. **Biến cố đối:** Nếu xác suất bắn trúng mục tiêu của một vận động viên là $0{,}85$, thì xác suất bắn trượt là bao nhiêu?
4. **Kỳ vọng thực nghiệm:** Một nhà máy sản xuất $10\,000$ bóng đèn với tỉ lệ lỗi là $0{,}5\%$. Dự kiến có bao nhiêu bóng đèn bị lỗi?
5. **Ý nghĩa Định luật số lớn:** Điều gì sẽ xảy ra với tỉ số mặt Sấp khi số lần tung đồng xu tăng từ 10 lần lên 100 000 lần?

> [!TIP]
> **Đáp án nhẩm nhanh:**
> 1. Mặt chia hết cho 3 là $\{3; 6\} \implies P = \frac{2}{6} = \frac{1}{3}$.
> 2. Chắc chắn sai, vì xác suất không bao giờ vượt quá 1 ($0 \le P \le 1$).
> 3. $P(\text{Trượt}) = 1 - 0{,}85 = 0{,}15$ (tức $15\%$).
> 4. Số bóng đèn lỗi dự kiến: $10\,000 \times 0{,}5\% = 10\,000 \times 0{,}005 = 50$ chiếc.
> 5. Tỉ số mặt Sấp sẽ dao động ngày càng hẹp và tiến sát về con số lý thuyết $0{,}5000\dots$.

---

## I. Bảng Tổng hợp Toàn diện Quy tắc và Công thức Chương 8

| Khái niệm | Ký hiệu / Công thức | Ý nghĩa toán học | Ví dụ thực tế |
| :--- | :--- | :--- | :--- |
| **Không gian kết quả có thể** | $n$ hay $n(\Omega)$ | Tổng số khả năng xảy ra của phép thử | Gieo xúc xắc 1 lần: $n = 6$; tung đồng xu: $n = 2$ |
| **Kết quả thuận lợi** | $k$ hay $n(E)$ | Số kết quả làm cho biến cố $E$ xảy ra | Số chấm là số chẵn: $k = 3$ ($2, 4, 6$) |
| **Xác suất cổ điển** | $P(E) = \frac{k}{n}$ | Tỉ số đo lường cơ hội xảy ra của $E$ | $P(\text{Chẵn}) = \frac{3}{6} = \frac{1}{2}$ |
| **Biến cố đối** | $P(\overline{E}) = 1 - P(E)$ | Xác suất biến cố $E$ không xảy ra | $P(\text{Lẻ}) = 1 - P(\text{Chẵn}) = \frac{1}{2}$ |
| **Xác suất thực nghiệm** | $f = \frac{m}{N}$ | Tần số tương đối sau $N$ lần thử | Bắn 100 viên trúng 82 viên: $f = \frac{82}{100} = 0{,}82$ |
| **Định luật số lớn** | $\frac{m}{N} \approx P(E)$ | Thực nghiệm hội tụ về lý thuyết khi $N \to \infty$ | Pearson tung 24 000 lần đồng xu được tỉ lệ $0{,}5005$ |
| **Dự đoán số lần xuất hiện** | $m \approx N \cdot P(E)$ | Ước lượng số lần xuất hiện trong tương lai | Tung đồng xu 500 lần $\implies$ khoảng 250 lần ngửa |
| **Bắt lại đánh dấu** | $N \approx \frac{M \cdot n}{m}$ | Ước lượng kích thước quần thể sinh vật | Đánh dấu 100 con, bắt lại 50 con có 5 con dấu $\implies N = 1000$ |

---

## Ứng dụng Tương tác Trực quan

Dưới đây là cỗ máy tích hợp mô phỏng kép: **Gieo xúc xắc 6 mặt** và **Tung đồng xu ngẫu nhiên** kết hợp thống kê tần số thực tế:

<div style="background: var(--card-bg, #ffffff); border: 2px solid #2563eb; border-radius: 12px; padding: 20px; margin: 24px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h4 style="margin-top: 0; color: #1d4ed8; text-align: center;">MÔ PHỎNG TƯƠNG TÁC TỔNG HỢP: XÚC XẮC & ĐỒNG XU</h4>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;">
    <!-- Khối Xúc xắc -->
    <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:14px; text-align:center;">
      <h5 style="margin:0 0 10px 0; color:#1e293b;">GIEO XÚC XẮC 6 MẶT</h5>
      <div id="dice-combo-box" style="display:inline-flex; justify-content:center; align-items:center; width:64px; height:64px; background:white; border:2px solid #334155; border-radius:12px; box-shadow:0 4px 6px rgba(0,0,0,0.1); margin-bottom:10px;">
        <svg data-interactive-done="true" id="dice-combo-svg" width="50" height="50" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="7" fill="#dc2626" />
        </svg>
      </div>
      <div>
        <button onclick="rollComboDice()" style="padding:6px 14px; background:#2563eb; color:white; border:none; border-radius:6px; font-weight:bold; cursor:pointer;">Gieo xúc xắc</button>
      </div>
      <div id="dice-combo-status" style="margin-top:8px; font-size:0.9em; color:#334155;">Mặt: 1 chấm</div>
    </div>

    <!-- Khối Đồng xu -->
    <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:14px; text-align:center;">
      <h5 style="margin:0 0 10px 0; color:#1e293b;">TUNG ĐỒNG XU</h5>
      <div id="coin-combo-el" style="display:inline-flex; justify-content:center; align-items:center; width:64px; height:64px; background:#f59e0b; border:3px solid #d97706; border-radius:50%; font-size:1.5em; font-weight:bold; color:white; box-shadow:0 4px 6px rgba(0,0,0,0.1); margin-bottom:10px;">
        S
      </div>
      <div>
        <button onclick="flipComboCoin()" style="padding:6px 14px; background:#10b981; color:white; border:none; border-radius:6px; font-weight:bold; cursor:pointer;">Tung đồng xu</button>
      </div>
      <div id="coin-combo-status" style="margin-top:8px; font-size:0.9em; color:#334155;">Mặt: Sấp (50%)</div>
    </div>
  </div>

  <div style="text-align:center;">
    <button onclick="runAutoExperiment100()" style="padding:8px 18px; background:#6366f1; color:white; border:none; border-radius:6px; font-weight:bold; cursor:pointer;">
      ⚡ Mô phỏng gieo 100 lần đồng thời cả xúc xắc & đồng xu
    </button>
  </div>
  <div id="auto-combo-result" style="margin-top:12px; font-size:0.95em; line-height:1.7; background:#f1f5f9; padding:10px; border-radius:6px; text-align:center;">
    Nhấn nút mô phỏng 100 lần để quan sát thống kê hội tụ về xác suất lý thuyết!
  </div>
</div>

<script>
var diceSVGDots = {
  1: '<circle cx="35" cy="35" r="7" fill="#dc2626" />',
  2: '<circle cx="20" cy="20" r="5" fill="#1e293b" /><circle cx="50" cy="50" r="5" fill="#1e293b" />',
  3: '<circle cx="18" cy="18" r="5" fill="#1e293b" /><circle cx="35" cy="35" r="5" fill="#dc2626" /><circle cx="52" cy="52" r="5" fill="#1e293b" />',
  4: '<circle cx="20" cy="20" r="5" fill="#1e293b" /><circle cx="50" cy="20" r="5" fill="#1e293b" /><circle cx="20" cy="50" r="5" fill="#1e293b" /><circle cx="50" cy="50" r="5" fill="#1e293b" />',
  5: '<circle cx="18" cy="18" r="5" fill="#1e293b" /><circle cx="52" cy="18" r="5" fill="#1e293b" /><circle cx="35" cy="35" r="5" fill="#dc2626" /><circle cx="18" cy="52" r="5" fill="#1e293b" /><circle cx="52" cy="52" r="5" fill="#1e293b" />',
  6: '<circle cx="20" cy="16" r="5" fill="#1e293b" /><circle cx="50" cy="16" r="5" fill="#1e293b" /><circle cx="20" cy="35" r="5" fill="#1e293b" /><circle cx="50" cy="35" r="5" fill="#1e293b" /><circle cx="20" cy="54" r="5" fill="#1e293b" /><circle cx="50" cy="54" r="5" fill="#1e293b" />'
};

function rollComboDice() {
  var v = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-combo-svg').innerHTML = diceSVGDots[v];
  var desc = (v % 2 === 0 ? 'Mặt chẵn (' + v + ')' : 'Mặt lẻ (' + v + ')');
  document.getElementById('dice-combo-status').innerHTML = '<strong>' + desc + '</strong>';
}

function flipComboCoin() {
  var isH = Math.random() < 0.5;
  var el = document.getElementById('coin-combo-el');
  el.innerText = isH ? 'S' : 'N';
  el.style.background = isH ? '#f59e0b' : '#3b82f6';
  document.getElementById('coin-combo-status').innerHTML = '<strong>Mặt ' + (isH ? 'Sấp' : 'Ngửa') + '</strong>';
}

function runAutoExperiment100() {
  var heads = 0, diceEvens = 0;
  for (var i = 0; i < 100; i++) {
    if (Math.random() < 0.5) heads++;
    var d = Math.floor(Math.random() * 6) + 1;
    if (d % 2 === 0) diceEvens++;
  }
  document.getElementById('auto-combo-result').innerHTML = '<strong>KẾT QUẢ SAU 100 LẦN THỰC NGHIỆM LIÊN TIẾP:</strong><br>' +
    '• Đồng xu: Mặt Sấp xuất hiện <strong>' + heads + '/100 lần (' + heads + '%)</strong> | Mặt Ngửa: <strong>' + (100 - heads) + '%</strong> (Lý thuyết: 50%)<br>' +
    '• Xúc xắc: Mặt chẵn xuất hiện <strong>' + diceEvens + '/100 lần (' + diceEvens + '%)</strong> | Mặt lẻ: <strong>' + (100 - diceEvens) + '%</strong> (Lý thuyết: 50%)<br>' +
    '<span style="color:#15803d; font-weight:bold;">Định luật số lớn: Cả hai tần số thực nghiệm đều dao động rất sát mốc 50%!</span>';
}
</script>

---

## II. 4 Dạng toán Trọng tâm & Phương pháp giải chi tiết

### Dạng 1: Tính xác suất của biến cố trong các trò chơi may rủi

**Phương pháp giải:**
1. Đếm tổng số kết quả có thể xảy ra của phép thử: $n$.
2. Liệt kê các kết quả thuận lợi cho biến cố $E$ và đếm số lượng: $k = n(E)$.
3. Tính xác suất cổ điển: $P(E) = \frac{k}{n}$.

---

#### Bài toán 1:
Một túi kín đựng $16$ quả cầu có kích thước và khối lượng như nhau, gồm $6$ quả cầu màu đỏ, $4$ quả cầu màu xanh và $6$ quả cầu màu vàng. Lấy ngẫu nhiên ra $1$ quả cầu từ túi. Tính xác suất để:
a) Lấy được quả cầu màu xanh.
b) Lấy được quả cầu không phải màu vàng.
c) Lấy được quả cầu màu đỏ hoặc màu vàng.

**Lời giải:**

Tổng số quả cầu trong túi là $n = 16$ quả cầu (có $16$ kết quả có thể và đồng khả năng).

a) Gọi $A$ là biến cố "Lấy được quả cầu màu xanh".
Trong túi có 4 quả cầu màu xanh $\implies$ Có $k = 4$ kết quả thuận lợi cho $A$.
Xác suất của biến cố $A$ là:
$$P(A) = \frac{4}{16} = \frac{1}{4} = 0{,}25$$

b) Gọi $B$ là biến cố "Lấy được quả cầu không phải màu vàng".
Các quả cầu không phải màu vàng gồm quả đỏ và quả xanh: $6 + 4 = 10$ quả cầu.
Do đó có $k = 10$ kết quả thuận lợi cho $B$.
Xác suất của biến cố $B$ là:
$$P(B) = \frac{10}{16} = \frac{5}{8} = 0{,}625$$
*(Hoặc tính bằng biến cố đối: $P(B) = 1 - P(\text{Vàng}) = 1 - \frac{6}{16} = \frac{10}{16} = \frac{5}{8}$)*

c) Gọi $C$ là biến cố "Lấy được quả cầu màu đỏ hoặc màu vàng".
Số quả cầu đỏ hoặc vàng là: $6 + 6 = 12$ quả cầu $\implies k = 12$.
Xác suất của biến cố $C$ là:
$$P(C) = \frac{12}{16} = \frac{3}{4} = 0{,}75$$

---

### Dạng 2: Tính xác suất bằng sơ đồ cây và bảng hai chiều

**Phương pháp giải:**
1. Dùng bảng hai chiều khi gieo 2 con xúc xắc hoặc chọn 2 phần tử từ 2 nhóm.
2. Lập danh sách các cặp kết quả thỏa mãn điều kiện bài toán để tìm số kết quả thuận lợi $k$.
3. Tính xác suất $P = \frac{k}{n}$.

---

#### Bài toán 2:
Gieo đồng thời hai con xúc xắc 6 mặt cân đối. Tính xác suất của các biến cố sau:
a) $E_1$: "Tổng số chấm xuất hiện trên hai con xúc xắc lớn hơn 9".
b) $E_2$: "Hiệu số chấm giữa hai con xúc xắc bằng 0 (hai mặt giống nhau)".
c) $E_3$: "Có ít nhất một con xúc xắc xuất hiện mặt 6 chấm".

**Lời giải:**

Tổng số kết quả có thể xảy ra khi gieo 2 con xúc xắc là:
$$n = 6 \times 6 = 36$$

a) Biến cố $E_1$: Tổng số chấm $a + b > 9$:
Tổng số chấm lớn hơn 9 có thể là $10, 11, 12$:
- Tổng bằng 10: $(4; 6), (5; 5), (6; 4)$ (3 kết quả).
- Tổng bằng 11: $(5; 6), (6; 5)$ (2 kết quả).
- Tổng bằng 12: $(6; 6)$ (1 kết quả).
Tổng số kết quả thuận lợi là: $k = 3 + 2 + 1 = 6$.
$$P(E_1) = \frac{6}{36} = \frac{1}{6}$$

b) Biến cố $E_2$: Hiệu bằng 0, tức hai mặt giống nhau:
Các kết quả thuận lợi là: $(1; 1), (2; 2), (3; 3), (4; 4), (5; 5), (6; 6) \implies k = 6$.
$$P(E_2) = \frac{6}{36} = \frac{1}{6}$$

c) Biến cố $E_3$: Có ít nhất một con xúc xắc xuất hiện mặt 6:
- Cách tính qua biến cố đối $\overline{E_3}$: "Cả hai con xúc xắc đều không xuất hiện mặt 6".
  Mỗi con xúc xắc có 5 mặt khác 6 (từ 1 đến 5). Số kết quả của biến cố đối là:
  $$n(\overline{E_3}) = 5 \times 5 = 25\text{ kết quả}$$
  Xác suất của biến cố đối là: $P(\overline{E_3}) = \frac{25}{36}$.
- Do đó xác suất của biến cố $E_3$ là:
  $$P(E_3) = 1 - P(\overline{E_3}) = 1 - \frac{25}{36} = \frac{11}{36}$$

---

### Dạng 3: Bài toán ứng dụng Định luật số lớn và Dự đoán thực nghiệm

**Phương pháp giải:**
1. Tính xác suất lý thuyết $P(E)$.
2. Dự đoán số lần biến cố xuất hiện trong $N$ phép thử:
   $$m \approx N \cdot P(E)$$
3. So sánh tần số thực tế với số lần dự đoán.

---

#### Bài toán 3:
Một trường trung học cơ sở có $800$ học sinh. Theo thống kê y tế quốc gia, xác suất một học sinh THCS bị tật khúc xạ cận thị ở độ tuổi này là $0{,}35$.
a) Dự kiến trong trường có khoảng bao nhiêu học sinh bị cận thị?
b) Ban giám hiệu nhà trường tổ chức khám mắt ngẫu nhiên cho $200$ học sinh thì phát hiện có $74$ học sinh bị cận thị. Tính xác suất thực nghiệm học sinh bị cận thị qua đợt khám này và so sánh với con số thống kê quốc gia.

**Lời giải:**

a) Với xác suất cận thị lý thuyết là $P = 0{,}35$, trong tổng số $N = 800$ học sinh toàn trường, số học sinh bị cận thị dự kiến là:
$$m \approx 800 \times 0{,}35 = 280\text{ (học sinh)}$$

b) Trong đợt khám ngẫu nhiên $N' = 200$ học sinh, số học sinh bị cận thị là $m' = 74$.
Xác suất thực nghiệm bị cận thị là:
$$f = \frac{74}{200} = \frac{37}{100} = 0{,}37 = 37\%$$
So sánh với thống kê quốc gia ($35\%$):
Xác suất thực nghiệm ($37\%$) chênh lệch rất ít so với tỷ lệ quốc gia ($35\%$) (độ lệch chỉ $2\%$). Điều này hoàn toàn phù hợp với Định luật số lớn.

---

### Dạng 4: Bài toán Bắt lại đánh dấu ước lượng quần thể thực tế

**Phương pháp giải:**
1. Áp dụng công thức bảo toàn tỉ số:
   $$\frac{\text{Số cá thể đánh dấu tìm lại } m}{\text{Số cá thể bắt lần 2 } n} \approx \frac{\text{Số cá thể đánh dấu lần 1 } M}{\text{Tổng số cá thể toàn bộ } N}$$
2. Suy ra công thức ước lượng:
   $$N \approx \frac{M \cdot n}{m}$$

---

#### Bài toán 4:
Để ước lượng số chim bồ câu hoang dã sinh sống tại một công viên quốc gia:
- Lần thứ nhất, các kiểm lâm viên bắt được $120$ con chim bồ câu, gắn vòng kim loại siêu nhẹ vào chân rồi thả chúng bay về tự nhiên.
- Một tuần sau, họ tiến hành giăng lưới bắt ngẫu nhiên lần thứ hai được $100$ con chim bồ câu, trong đó có $8$ con có đeo vòng kim loại ở chân.
Hãy ước lượng xem có khoảng bao nhiêu con chim bồ câu đang sinh sống tại công viên quốc gia đó.

**Lời giải:**

Gọi tổng số chim bồ câu trong công viên quốc gia là $N$ con.
- Số chim được gắn vòng lần 1: $M = 120$ con.
- Số chim bắt được lần 2: $n = 100$ con.
- Số chim mang vòng tìm thấy ở lần 2: $m = 8$ con.

Tỉ số chim mang vòng ở lần bắt thứ hai xấp xỉ tỉ lệ chim mang vòng trong toàn bộ đàn chim:
$$\frac{m}{n} \approx \frac{M}{N} \iff \frac{8}{100} \approx \frac{120}{N}$$
Suy ra tổng số chim bồ câu ước lượng là:
$$N \approx \frac{120 \times 100}{8} = \frac{12\,000}{8} = 1\,500\text{ (con chim)}$$
Vậy ước lượng có khoảng $1\,500$ con chim bồ câu đang sinh sống tại công viên quốc gia.

---

## III. 10 Câu hỏi Trắc nghiệm Tương tác Kiểm tra Năng lực

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Một hộp có 5 viên bi xanh, 3 viên bi đỏ và 2 viên bi vàng. Rút ngẫu nhiên 1 viên bi. Xác suất rút được viên bi xanh là:",
  "options": [
    "5/10 = 1/2",
    "3/10",
    "2/10 = 1/5",
    "1/5"
  ],
  "answer": 0,
  "explanation": "Tổng số bi n = 5 + 3 + 2 = 10. Số bi xanh k = 5 => P = 5/10 = 1/2 = 0.5."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Gieo một con xúc xắc 6 mặt cân đối. Biến cố nào sau đây có xác suất bằng 1/2?",
  "options": [
    "Số chấm xuất hiện là số lẻ",
    "Số chấm xuất hiện chia hết cho 3",
    "Số chấm xuất hiện lớn hơn 4",
    "Số chấm xuất hiện bằng 6"
  ],
  "answer": 0,
  "explanation": "Mặt lẻ gồm {1, 3, 5} có 3 kết quả => P = 3/6 = 1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Tung một đồng xu 100 lần thấy có 54 lần xuất hiện mặt Sấp. Xác suất thực nghiệm xuất hiện mặt Ngửa là:",
  "options": [
    "46/100 = 0.46 (46%)",
    "54/100 = 0.54",
    "0.5 (50%)",
    "46/54"
  ],
  "answer": 0,
  "explanation": "Số lần xuất hiện mặt Ngửa là 100 - 54 = 46 lần => f = 46/100 = 0.46 = 46%."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Tung 2 đồng xu cân đối đồng thời. Xác suất để cả hai đồng xu xuất hiện mặt giống nhau là:",
  "options": [
    "1/2",
    "1/4",
    "3/4",
    "1"
  ],
  "answer": 0,
  "explanation": "Có 4 kết quả {SS, SN, NS, NN}. Kết quả giống nhau là {SS, NN} (2 kết quả) => P = 2/4 = 1/2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nếu xác suất của biến cố E là P(E) = 0.28 thì xác suất của biến cố đối P(E ngang) là:",
  "options": [
    "0.72",
    "0.28",
    "0.82",
    "1.28"
  ],
  "answer": 0,
  "explanation": "P(E ngang) = 1 - P(E) = 1 - 0.28 = 0.72."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Đánh dấu 50 con sóc rồi thả về rừng. Sau đó bắt lại 60 con sóc thấy có 3 con có dấu. Ước lượng số sóc trong khu rừng là:",
  "options": [
    "1 000 con",
    "800 con",
    "1 200 con",
    "1 500 con"
  ],
  "answer": 0,
  "explanation": "N ≈ (50 · 60) / 3 = 3000 / 3 = 1000 con sóc."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Gieo 2 con xúc xắc 6 mặt cân đối. Xác suất để tổng số chấm bằng 11 là:",
  "options": [
    "2/36 = 1/18",
    "1/36",
    "3/36 = 1/12",
    "4/36 = 1/9"
  ],
  "answer": 0,
  "explanation": "Các cặp có tổng bằng 11 là (5; 6) và (6; 5) (2 kết quả). P = 2/36 = 1/18."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Khẳng định nào sau đây là ĐÚNG về Định luật số lớn?",
  "options": [
    "Khi số phép thử rất lớn, xác suất thực nghiệm ngày càng tiến sát xác suất lý thuyết",
    "Xác suất thực nghiệm luôn luôn bằng xác suất lý thuyết trong mọi lần thử",
    "Chỉ cần làm thí nghiệm 5 lần là xác suất thực nghiệm bằng xác suất lý thuyết",
    "Xác suất lý thuyết sẽ thay đổi theo kết quả thực nghiệm"
  ],
  "answer": 0,
  "explanation": "Định luật số lớn khẳng định: Khi số phép thử N rất lớn thì xác suất thực nghiệm tiến gần sát tới xác suất lý thuyết."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Một lớp có 45 học sinh, trong đó có 27 bạn thích môn Toán. Chọn ngẫu nhiên một bạn. Xác suất để chọn được bạn thích môn Toán là:",
  "options": [
    "27/45 = 3/5",
    "18/45 = 2/5",
    "1/2",
    "27/18"
  ],
  "answer": 0,
  "explanation": "P = 27/45 = (27:9) / (45:9) = 3/5 = 0.6."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Gieo một con xúc xắc 6 mặt cân đối 300 lần. Số lần mặt 6 chấm dự kiến xuất hiện là:",
  "options": [
    "50 lần",
    "60 lần",
    "100 lần",
    "30 lần"
  ],
  "answer": 0,
  "explanation": "Số lần xuất hiện dự kiến: 300 · (1/6) = 50 lần."
}'></div>

---

## IV. Đề kiểm tra 45 phút Tổng kết Chương 8 Chuẩn Ma trận & Barem điểm

### Ma trận đề kiểm tra 45 phút

| Cấp độ tư duy | Nhận biết (30%) | Thông hiểu (40%) | Vận dụng (20%) | Vận dụng cao (10%) | Tổng cộng |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Kết quả có thể & thuận lợi** | 1 TN (0,5đ) | 1 TL (1,0đ) | — | — | **1,5 điểm** |
| **2. Xác suất cổ điển P(E) = k/n** | 1 TN (0,5đ) | 1 TN (0,5đ) | 1 TL (1,5đ) | — | **2,5 điểm** |
| **3. Phép thử hai bước (Xúc xắc/Đồng xu)** | 1 TN (0,5đ) | — | 1 TL (1,5đ) | — | **2,0 điểm** |
| **4. Xác suất thực nghiệm & Định luật số lớn** | 1 TN (0,5đ) | 1 TL (1,5đ) | — | — | **2,0 điểm** |
| **5. Toán thực tế bắt lại đánh dấu** | — | — | — | 1 TL (1,0đ) | **1,0 điểm** |
| **6. Biến cố đối** | 1 TN (0,5đ) | 1 TN (0,5đ) | — | — | **1,0 điểm** |
| **Tổng điểm** | **3,0 điểm** | **4,0 điểm** | **2,0 điểm** | **1,0 điểm** | **10,0 điểm** |

---

### Đề bài Kiểm tra 45 phút

#### Phần I: Trắc nghiệm khách quan (3,0 điểm — mỗi câu 0,5 điểm)
**Câu 1:** Khi gieo một con xúc xắc 6 mặt cân đối, số kết quả có thể xảy ra là:
A. $6$
B. $12$
C. $36$
D. $1$

**Câu 2:** Tung một đồng xu cân đối một lần. Xác suất xuất hiện mặt Ngửa là:
A. $0{,}5$
B. $1$
C. $0$
D. $0{,}25$

**Câu 3:** Một hộp có $8$ quả bóng đỏ và $12$ quả bóng xanh cùng kích thước. Rút ngẫu nhiên 1 quả bóng. Xác suất rút được bóng đỏ là:
A. $\frac{2}{5}$
B. $\frac{3}{5}$
C. $\frac{1}{2}$
D. $\frac{2}{3}$

**Câu 4:** Nếu biến cố $A$ có xác suất $P(A) = 0{,}72$ thì xác suất của biến cố đối $\overline{A}$ là:
A. $0{,}28$
B. $0{,}72$
C. $0{,}18$
D. $1{,}28$

**Câu 5:** Gieo một con xúc xắc 6 mặt $150$ lần thì thấy mặt 2 chấm xuất hiện $27$ lần. Xác suất thực nghiệm xuất hiện mặt 2 chấm là:
A. $0{,}18$
B. $0{,}27$
C. $0{,}167$
D. $0{,}25$

**Câu 6:** Gieo đồng thời 2 con xúc xắc 6 mặt cân đối. Tổng số kết quả có thể là:
A. $36$
B. $12$
C. $6$
D. $18$

---

#### Phần II: Tự luận (7,0 điểm)

**Bài 1 (1,5 điểm):**
Một hộp chứa $20$ tấm thẻ có kích thước như nhau được đánh số từ $1$ đến $20$. Rút ngẫu nhiên một tấm thẻ trong hộp.
a) Có bao nhiêu kết quả có thể xảy ra?
b) Tính xác suất của biến cố $A$: "Rút được tấm thẻ ghi số nguyên tố".
c) Tính xác suất của biến cố $B$: "Rút được tấm thẻ ghi số chia hết cho cả 2 và 5".

**Bài 2 (1,5 điểm):**
Gieo đồng thời hai con xúc xắc 6 mặt cân đối một lần.
a) Liệt kê các kết quả thuận lợi cho biến cố $M$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng 9". Tính xác suất của biến cố $M$.
b) Tính xác suất của biến cố $N$: "Tích số chấm xuất hiện trên hai con xúc xắc là một số chẵn".

**Bài 3 (2,5 điểm):**
Một phân xưởng dệt sản xuất $5\,000$ mét vải. Để kiểm tra chất lượng, người ta lấy ngẫu nhiên $400$ mét vải để kiểm tra thì phát hiện có $12$ mét vải có lỗi sợi.
a) Tính xác suất thực nghiệm của biến cố "Một mét vải được kiểm tra có lỗi sợi".
b) Tính xác suất thực nghiệm của biến cố "Một mét vải được kiểm tra đạt tiêu chuẩn chất lượng (không lỗi)".
c) Dự kiến trong toàn bộ lô $5\,000$ mét vải của phân xưởng có khoảng bao nhiêu mét vải có lỗi sợi?

**Bài 4 (1,5 điểm - Vận dụng cao):**
Để ước lượng số lượng cá chép trong một hồ thủy điện sinh thái:
- Các chuyên gia thủy sản bắt lên $300$ con cá chép, gắn thẻ định vị vi điện tử vào vây rồi thả lại về hồ.
- Hai tuần sau, họ giăng lưới bắt ngẫu nhiên lần hai được $250$ con cá chép, trong đó phát hiện có $5$ con mang thẻ định vị.
a) Hãy ước lượng tổng số cá chép đang sinh sống trong hồ thủy điện.
b) Nếu hồ nước có diện tích mặt nước là $15\text{ ha}$ thì mật độ cá chép ước tính trung bình là bao nhiêu con/ha?

---

### Đáp án Chi tiết & Barem Điểm Chuẩn

#### Phần I: Trắc nghiệm (3,0 điểm)
| Câu 1 | Câu 2 | Câu 3 | Câu 4 | Câu 5 | Câu 6 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | **A** | **A** | **A** | **A** | **A** |

*(Mỗi câu trả lời đúng được 0,5 điểm)*

---

#### Phần II: Tự luận (7,0 điểm)

**Bài 1 (1,5 điểm):**
a) (0,5 điểm)
Có $20$ kết quả có thể xảy ra: $n = 20$. *(0,50 điểm)*

b) (0,5 điểm)
Các số nguyên tố từ 1 đến 20 là: $\{2; 3; 5; 7; 11; 13; 17; 19\}$ (gồm 8 số) $\implies k_A = 8$. *(0,25 điểm)*
Xác suất của biến cố $A$ là:
$$P(A) = \frac{8}{20} = \frac{2}{5} = 0{,}4$$ *(0,25 điểm)*

c) (0,5 điểm)
Số chia hết cho cả 2 và 5 là số chia hết cho 10: $\{10; 20\}$ (gồm 2 số) $\implies k_B = 2$. *(0,25 điểm)*
Xác suất của biến cố $B$ là:
$$P(B) = \frac{2}{20} = \frac{1}{10} = 0{,}1$$ *(0,25 điểm)*

---

**Bài 2 (1,5 điểm):**
Tổng số kết quả có thể khi gieo 2 con xúc xắc là: $n = 6 \times 6 = 36$.
a) (0,75 điểm)
Các kết quả có tổng bằng 9 là: $(3; 6), (4; 5), (5; 4), (6; 3) \implies k_M = 4$. *(0,50 điểm)*
$$P(M) = \frac{4}{36} = \frac{1}{9}$$ *(0,25 điểm)*

b) (0,75 điểm)
Xét biến cố đối $\overline{N}$: "Tích hai số chấm là số lẻ".
Tích là số lẻ khi cả hai con xúc xắc đều ra số lẻ ($1, 3, 5$).
Số kết quả của biến cố đối: $n(\overline{N}) = 3 \times 3 = 9$. *(0,25 điểm)*
Xác suất của biến cố đối: $P(\overline{N}) = \frac{9}{36} = \frac{1}{4}$. *(0,25 điểm)*
Xác suất của biến cố $N$ là:
$$P(N) = 1 - P(\overline{N}) = 1 - \frac{1}{4} = \frac{3}{4} = 0{,}75$$ *(0,25 điểm)*

---

**Bài 3 (2,5 điểm):**
a) (1,0 điểm)
Số lần kiểm tra $N = 400$, số mét vải lỗi $m = 12$.
Xác suất thực nghiệm vải có lỗi là:
$$f_{\text{lỗi}} = \frac{12}{400} = \frac{3}{100} = 0{,}03 = 3\%$$ *(1,0 điểm)*

b) (0,75 điểm)
Xác suất thực nghiệm vải đạt tiêu chuẩn là:
$$f_{\text{đạt}} = 1 - 0{,}03 = 0{,}97 = 97\%$$ *(0,75 điểm)*

c) (0,75 điểm)
Trong lô $5\,000$ mét vải, số mét vải có lỗi sợi dự kiến là:
$$5\,000 \times 0{,}03 = 150\text{ (mét vải)}$$ *(0,75 điểm)*

---

**Bài 4 (1,5 điểm):**
a) (1,0 điểm)
- Số cá đánh dấu ban đầu: $M = 300$ con.
- Số cá bắt lần hai: $n = 250$ con.
- Số cá mang thẻ ở lần hai: $m = 5$ con.
Ước lượng tổng số cá chép trong hồ là:
$$N \approx \frac{M \cdot n}{m} = \frac{300 \times 250}{5} = \frac{75\,000}{5} = 15\,000\text{ (con cá)}$$ *(1,0 điểm)*

b) (0,5 điểm)
Mật độ cá chép trung bình là:
$$\frac{15\,000}{15} = 1\,000\text{ (con/ha)}$$ *(0,50 điểm)*
