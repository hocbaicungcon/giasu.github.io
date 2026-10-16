---
title: 'Toán 10 Bài 25: Nhị thức Newton - Khai triển bậc 4, bậc 5 & Tam giác Pascal'
description: 'Khám phá công thức Nhị thức Newton bậc 4 và bậc 5, tam giác Pascal, kỹ thuật tìm hệ số của x^k trong khai triển. Kèm widget tam giác Pascal tương tác và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-16'
grade: 10
tags:
  - Toán học
  - Toán 10
  - Đại số tổ hợp
  - Nhị thức Newton
  - Tam giác Pascal
  - Khai triển nhị thức
  - Kết nối tri thức
---

# Toán 10 Bài 25: Nhị thức Newton - Khai triển bậc 4, bậc 5 & Tam giác Pascal

Ở các lớp dưới, chúng ta đã quen thuộc với các hằng đẳng thức đáng nhớ bậc 2 và bậc 3 như $(a + b)^2 = a^2 + 2ab + b^2$ và $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$. Nhưng điều gì sẽ xảy ra khi bậc lũy thừa tăng lên $4, 5$ hoặc thậm chí $100$? Nhà bác học vĩ đại Isaac Newton đã khám phá ra quy luật kỳ diệu chi phối toàn bộ các hệ số này: **Công thức Nhị thức Newton**.

---

## 1. Sơ đồ tư duy về Nhị thức Newton

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #166534;">1. Khai triển bậc 4 ($(a + b)^4$)</h4>
    <p style="margin: 0; font-size: 14px; color: #14532d;">
      • Hệ số tổ hợp: $C_4^0, C_4^1, C_4^2, C_4^3, C_4^4$<br>
      • Dãy hệ số: $1 - 4 - 6 - 4 - 1$<br>
      • Công thức chi tiết:<br>
      $$(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$
      • Gồm $4 + 1 = 5$ số hạng.
    </p>
  </div>
  <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #1e40af;">2. Khai triển bậc 5 ($(a + b)^5$)</h4>
    <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
      • Hệ số tổ hợp: $C_5^0, C_5^1, C_5^2, C_5^3, C_5^4, C_5^5$<br>
      • Dãy hệ số: $1 - 5 - 10 - 10 - 5 - 1$<br>
      • Công thức chi tiết:<br>
      $$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$
      • Gồm $5 + 1 = 6$ số hạng.
    </p>
  </div>
  <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #9a3412;">3. Tam giác Pascal (Pascal's Triangle)</h4>
    <p style="margin: 0; font-size: 14px; color: #7c2d12;">
      • Dòng 0: 1<br>
      • Dòng 1: 1 &nbsp; 1<br>
      • Dòng 2: 1 &nbsp; 2 &nbsp; 1<br>
      • Dòng 3: 1 &nbsp; 3 &nbsp; 3 &nbsp; 1<br>
      • Dòng 4: 1 &nbsp; 4 &nbsp; 6 &nbsp; 4 &nbsp; 1<br>
      • Dòng 5: 1 &nbsp; 5 &nbsp; 10 &nbsp; 10 &nbsp; 5 &nbsp; 1<br>
      • Quy luật: Mỗi số bằng tổng 2 số ngay phía trên nó!
    </p>
  </div>
  <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 16px;">
    <h4 style="margin: 0 0 8px 0; color: #6b21a8;">4. Quy luật lũy thừa & Dấu</h4>
    <p style="margin: 0; font-size: 14px; color: #581c87;">
      • Số mũ của $a$ giảm dần từ $n$ về $0$.<br>
      • Số mũ của $b$ tăng dần từ $0$ lên $n$.<br>
      • Tổng số mũ của $a$ và $b$ trong mỗi số hạng luôn bằng $n$.<br>
      • Khi có dấu trừ $(a - b)^n$: <strong>Dấu đan xen kẽ nhau</strong> ($+ - + - \dots$).
    </p>
  </div>
</div>

---

## 2. Khởi động: 5 câu hỏi nhanh

1. **Khai triển $(a + b)^4$ có tất cả bao nhiêu số hạng?**
   *Mẹo:* Lũy thừa bậc $n$ thì khai triển luôn có $n + 1$ số hạng $\implies 4 + 1 = 5$ số hạng.

2. **Dãy hệ số của khai triển $(a + b)^5$ là những số nào?**
   *Mẹo:* Dòng 5 của tam giác Pascal: $1, 5, 10, 10, 5, 1$.

3. **Số hạng chính giữa của khai triển $(a + b)^4$ có hệ số bằng bao nhiêu?**
   *Mẹo:* Có 5 số hạng nên số hạng thứ 3 nằm chính giữa, hệ số là $C_4^2 = 6$.

4. **Khai triển $(x - 1)^4$ có dấu các số hạng như thế nào?**
   *Mẹo:* Dấu đan xen: $+x^4 - 4x^3 + 6x^2 - 4x + 1$.

5. **Tổng tất cả các hệ số trong khai triển $(2x - 1)^5$ bằng bao nhiêu?**
   *Mẹo:* Thay $x = 1$ vào biểu thức: $(2(1) - 1)^5 = 1^5 = 1$.

---

## 3. Kiến thức trọng tâm

### 3.1. Khai triển Nhị thức Newton cho $(a + b)^4$

> [!NOTE]
> Công thức khai triển nhị thức Newton với số mũ $n = 4$:
> $$(a + b)^4 = C_4^0 a^4 + C_4^1 a^3 b + C_4^2 a^2 b^2 + C_4^3 a b^3 + C_4^4 b^4$$
> Thay các giá trị tổ hợp $C_4^0 = 1, C_4^1 = 4, C_4^2 = 6, C_4^3 = 4, C_4^4 = 1$:
> $$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$

Trường hợp mang dấu trừ, thay $b$ bằng $(-b)$:
$$(a - b)^4 = a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4$$

### 3.2. Khai triển Nhị thức Newton cho $(a + b)^5$

> [!NOTE]
> Công thức khai triển nhị thức Newton với số mũ $n = 5$:
> $$(a + b)^5 = C_5^0 a^5 + C_5^1 a^4 b + C_5^2 a^3 b^2 + C_5^3 a^2 b^3 + C_5^4 a b^4 + C_5^5 b^5$$
> Thay các giá trị tổ hợp $C_5^0 = 1, C_5^1 = 5, C_5^2 = 10, C_5^3 = 10, C_5^4 = 5, C_5^5 = 1$:
> $$(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$

Trường hợp mang dấu trừ, thay $b$ bằng $(-b)$:
$$(a - b)^5 = a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$$

### 3.3. Tam giác Pascal và quy tắc tạo hệ số

Tam giác Pascal là bảng số hình tam giác được tạo lập bởi nhà toán học Blaise Pascal:
- Dòng đầu tiên (dòng $0$) chỉ có một số $1$.
- Mỗi dòng đều bắt đầu bằng số $1$ và kết thúc bằng số $1$.
- Mỗi số ở bên trong là tổng của hai số nằm ngay phía trên nó:
  $$C_n^k = C_{n - 1}^{k - 1} + C_{n - 1}^k$$

```txt
Dòng 0:               1
Dòng 1:             1   1
Dòng 2:           1   2   1
Dòng 3:         1   3   3   1
Dòng 4:       1   4   6   4   1
Dòng 5:     1   5  10  10   5   1
```

> [!TIP]
> **Quy luật tổng hệ số:**
> - Tổng các số trên dòng $n$ của tam giác Pascal luôn bằng $2^n$:
>   $$C_n^0 + C_n^1 + \dots + C_n^n = 2^n$$
> - Ví dụ dòng 4: $1 + 4 + 6 + 4 + 1 = 16 = 2^4$.
> - Ví dụ dòng 5: $1 + 5 + 10 + 10 + 5 + 1 = 32 = 2^5$.

---

## 4. Widget tương tác: Tam Giác Pascal & Bộ Khai Triển Tự Động

Khám phá trực quan cấu trúc của Tam giác Pascal và theo dõi từng bước khai triển lũy thừa bậc 4, bậc 5:

```html
<div style="max-width: 760px; margin: 20px auto; font-family: system-ui, -apple-system, sans-serif; border: 1px solid #cbd5e1; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden;">
  <div style="background: linear-gradient(135deg, #4f46e5, #3730a3); padding: 16px 20px; color: #ffffff;">
    <h3 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 700; color: #f8fafc;">Phòng Thí Nghiệm Tam Giác Pascal & Nhị Thức Newton</h3>
    <p style="margin: 0; font-size: 13px; color: #c7d2fe;">Chọn số mũ n (từ 0 đến 6) để xem dòng tương ứng và khai triển biểu thức</p>
  </div>

  <div style="padding: 16px; background: #f5f3ff; border-bottom: 1px solid #ddd6fe; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <label style="font-size: 14px; font-weight: 600; color: #3730a3;">Số mũ n =</label>
      <div style="display: flex; gap: 6px;" id="btn-group-n">
        <button class="btn-n" data-n="2" style="padding: 4px 10px; font-size: 13px; border-radius: 6px; border: 1px solid #c7d2fe; cursor: pointer; background: #fff; color: #3730a3;">2</button>
        <button class="btn-n" data-n="3" style="padding: 4px 10px; font-size: 13px; border-radius: 6px; border: 1px solid #c7d2fe; cursor: pointer; background: #fff; color: #3730a3;">3</button>
        <button class="btn-n" data-n="4" style="padding: 4px 10px; font-size: 13px; border-radius: 6px; border: none; cursor: pointer; background: #4f46e5; color: #fff; font-weight: bold;">4</button>
        <button class="btn-n" data-n="5" style="padding: 4px 10px; font-size: 13px; border-radius: 6px; border: 1px solid #c7d2fe; cursor: pointer; background: #fff; color: #3730a3;">5</button>
        <button class="btn-n" data-n="6" style="padding: 4px 10px; font-size: 13px; border-radius: 6px; border: 1px solid #c7d2fe; cursor: pointer; background: #fff; color: #3730a3;">6</button>
      </div>
    </div>
    <div style="font-family: monospace; font-size: 13px; color: #4338ca; background: #ede9fe; padding: 4px 10px; border-radius: 6px;">
      Tổng hệ số: 2^n = <span id="lbl-sum-coef">16</span>
    </div>
  </div>

  <div style="padding: 16px; display: grid; grid-template-columns: 1fr; gap: 16px;">
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; text-align: center; overflow-x: auto;">
      <div style="font-size: 12px; font-weight: 600; color: #64748b; margin-bottom: 8px;">CẤU TRÚC TAM GIÁC PASCAL:</div>
      <div id="pascal-triangle" style="font-family: monospace; font-size: 14px; line-height: 1.9; color: #334155;"></div>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
      <div style="font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px;">Khai triển đại số chuẩn:</div>
      <div id="newton-expansion" style="font-family: monospace; font-size: 14px; color: #4f46e5; line-height: 1.6; word-break: break-word; font-weight: 600;">
        (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴
      </div>
      <div id="newton-minus-expansion" style="font-family: monospace; font-size: 14px; color: #dc2626; line-height: 1.6; word-break: break-word; font-weight: 600; margin-top: 6px;">
        (a - b)⁴ = a⁴ - 4a³b + 6a²b² - 4ab³ + b⁴
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var selectedN = 4;
  var container = document.getElementById('pascal-triangle');
  var expPlus = document.getElementById('newton-expansion');
  var expMinus = document.getElementById('newton-minus-expansion');
  var sumLbl = document.getElementById('lbl-sum-coef');
  var buttons = document.querySelectorAll('.btn-n');

  function comb(n, k) {
    if (k === 0 || k === n) return 1;
    var res = 1;
    for (var i = 1; i <= k; i++) {
      res = (res * (n - i + 1)) / i;
    }
    return Math.round(res);
  }

  function supers(num) {
    var map = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶'};
    return map[num.toString()] || ('^' + num);
  }

  function buildExpansion(n, isMinus) {
    var terms = [];
    for (var k = 0; k <= n; k++) {
      var c = comb(n, k);
      var sign = (isMinus && k % 2 === 1) ? '-' : '+';
      var cStr = (c === 1 && (n - k > 0 || k > 0)) ? '' : c.toString();

      var aPart = '';
      if (n - k > 1) aPart = 'a' + supers(n - k);
      else if (n - k === 1) aPart = 'a';

      var bPart = '';
      if (k > 1) bPart = 'b' + supers(k);
      else if (k === 1) bPart = 'b';

      var termStr = cStr + aPart + bPart;
      if (termStr === '') termStr = '1';

      if (k === 0) {
        terms.push(termStr);
      } else {
        terms.push(sign + ' ' + termStr);
      }
    }
    var op = isMinus ? '-' : '+';
    return '(a ' + op + ' b)' + supers(n) + ' = ' + terms.join(' ');
  }

  function render() {
    sumLbl.textContent = Math.pow(2, selectedN);

    // Render Pascal triangle up to row 6
    var html = '';
    for (var row = 0; row <= 6; row++) {
      var rowNums = [];
      for (var col = 0; col <= row; col++) {
        var val = comb(row, col);
        var isTarget = (row === selectedN);
        var cellStyle = isTarget 
          ? 'display: inline-block; min-width: 34px; padding: 2px 4px; margin: 2px 4px; background: #4f46e5; color: #fff; border-radius: 4px; font-weight: bold;'
          : 'display: inline-block; min-width: 34px; padding: 2px 4px; margin: 2px 4px; color: #475569;';
        rowNums.push('<span style="' + cellStyle + '">' + val + '</span>');
      }
      html += '<div style="margin: 2px 0;">' + rowNums.join('') + '</div>';
    }
    container.innerHTML = html;

    expPlus.textContent = buildExpansion(selectedN, false);
    expMinus.textContent = buildExpansion(selectedN, true);

    buttons.forEach(function(btn) {
      var n = parseInt(btn.getAttribute('data-n'), 10);
      if (n === selectedN) {
        btn.style.background = '#4f46e5';
        btn.style.color = '#fff';
        btn.style.fontWeight = 'bold';
        btn.style.border = 'none';
      } else {
        btn.style.background = '#fff';
        btn.style.color = '#3730a3';
        btn.style.fontWeight = 'normal';
        btn.style.border = '1px solid #c7d2fe';
      }
    });
  }

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectedN = parseInt(btn.getAttribute('data-n'), 10);
      render();
    });
  });

  render();
})();
</script>

---

## 5. Các dạng toán điển hình & Phương pháp giải chi tiết

### Dạng 1: Khai triển biểu thức lũy thừa bậc 4, bậc 5

**Phương pháp giải:**
1. Xác định số hạng $A$ và $B$ trong biểu thức dạng $(A + B)^n$ hoặc $(A - B)^n$ với $n \in \{4; 5\}$.
2. Viết công thức nhị thức Newton chuẩn.
3. Thay thế $a = A$ và $b = B$ (hoặc $(-B)$) rồi rút gọn từng đơn thức một cách cẩn thận.

#### Bài toán 1
Khai triển các biểu thức sau thành đa thức theo lũy thừa giảm dần của $x$:
a) $P(x) = (x + 2)^4$
b) $Q(x) = (2x - 1)^5$

**Lời giải:**
a) Áp dụng công thức $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$ với $a = x, b = 2$:
$$P(x) = (x + 2)^4 = x^4 + 4 \cdot x^3 \cdot 2 + 6 \cdot x^2 \cdot 2^2 + 4 \cdot x \cdot 2^3 + 2^4$$
$$= x^4 + 8x^3 + 6 \cdot 4 x^2 + 4 \cdot 8 x + 16$$
$$= x^4 + 8x^3 + 24x^2 + 32x + 16$$

b) Áp dụng công thức $(a - b)^5 = a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$ với $a = 2x, b = 1$:
$$Q(x) = (2x - 1)^5 = (2x)^5 - 5(2x)^4(1) + 10(2x)^3(1)^2 - 10(2x)^2(1)^3 + 5(2x)(1)^4 - 1^5$$
$$= 32x^5 - 5(16x^4) + 10(8x^3) - 10(4x^2) + 10x - 1$$
$$= 32x^5 - 80x^4 + 80x^3 - 40x^2 + 10x - 1$$

---

### Dạng 2: Tìm hệ số của số hạng chứa $x^k$ trong khai triển

**Phương pháp giải:**
1. Viết số hạng tổng quát của khai triển:
   $$T_{k+1} = C_n^k a^{n-k} b^k$$
2. Tách riêng phần hệ số và phần biến chứa $x$.
3. Cho số mũ của $x$ bằng số mũ yêu cầu ($k$) để tìm chỉ số thích hợp.
4. Tính hệ số tương ứng.

#### Bài toán 2
Tìm hệ số của số hạng chứa $x^3$ trong khai triển của:
a) $(x + 3)^5$
b) $(3x - 2)^4$

**Lời giải:**
a) Khai triển $(x + 3)^5$ có các số hạng:
$$(x + 3)^5 = x^5 + 5x^4(3) + 10x^3(3^2) + 10x^2(3^3) + 5x(3^4) + 3^5$$
Số hạng chứa $x^3$ là:
$$10x^3 \cdot 3^2 = 10 \cdot 9 \cdot x^3 = 90x^3$$
Vậy hệ số của số hạng chứa $x^3$ là $90$.

b) Khai triển $(3x - 2)^4$ có các số hạng:
$$(3x - 2)^4 = (3x)^4 - 4(3x)^3(2) + 6(3x)^2(2^2) - 4(3x)(2^3) + 2^4$$
Số hạng chứa $x^3$ là:
$$-4(3x)^3(2) = -4 \cdot (27x^3) \cdot 2 = -216x^3$$
Vậy hệ số của số hạng chứa $x^3$ là $-216$.

---

### Dạng 3: Tính tổng các hệ số bằng phương pháp gán giá trị

> [!TIP]
> Cho đa thức $P(x) = (ax + b)^n = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$.
> - Tổng tất cả các hệ số của đa thức chính là giá trị của đa thức khi cho $x = 1$:
>   $$S = P(1) = (a + b)^n = a_n + a_{n-1} + \dots + a_1 + a_0$$
> - Hệ số tự do (không chứa $x$) là giá trị của đa thức khi cho $x = 0$:
>   $$a_0 = P(0) = b^n$$

#### Bài toán 3
Cho khai triển $(3x - 2)^5 = a_5 x^5 + a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0$.
a) Tính tổng tất cả các hệ số $S = a_5 + a_4 + a_3 + a_2 + a_1 + a_0$.
b) Tìm hệ số tự do $a_0$.

**Lời giải:**
a) Để tính tổng tất cả các hệ số, ta cho $x = 1$:
$$S = a_5(1)^5 + a_4(1)^4 + a_3(1)^3 + a_2(1)^2 + a_1(1) + a_0 = (3 \cdot 1 - 2)^5 = 1^5 = 1$$
Vậy tổng các hệ số của khai triển là $1$.

b) Hệ số tự do $a_0$ nhận được khi ta cho $x = 0$:
$$a_0 = (3 \cdot 0 - 2)^5 = (-2)^5 = -32$$

---

### Dạng 4: Ứng dụng nhị thức Newton tính giá trị gần đúng

#### Bài toán 4
Không dùng máy tính cầm tay, hãy sử dụng khai triển nhị thức Newton $(1 + x)^4$ để tính giá trị gần đúng của $1,02^4$.

**Lời giải:**
1. Ta viết $1,02 = 1 + 0,02$. Khi đó:
   $$1,02^4 = (1 + 0,02)^4$$
2. Áp dụng công thức nhị thức Newton với $a = 1, b = 0,02$:
   $$(1 + 0,02)^4 = 1^4 + 4(1)^3(0,02) + 6(1)^2(0,02)^2 + 4(1)(0,02)^3 + (0,02)^4$$
3. Tính cụ thể các số hạng:
   - $1^4 = 1$
   - $4 \times 0,02 = 0,08$
   - $6 \times 0,0004 = 0,0024$
   - $4 \times (0,02)^3 = 4 \times 0,000008 = 0,000032$
   - $(0,02)^4 = 0,00000016$
4. Vì $(0,02)^3$ và $(0,02)^4$ rất nhỏ, lấy xấp xỉ đến 4 chữ số thập phân:
   $$1,02^4 \approx 1 + 0,08 + 0,0024 = 1,0824$$

*(Kiểm tra lại bằng máy tính: $1,02^4 = 1,08243216$, độ chính xác vượt trội).*

---

## 6. Ứng dụng thực tiễn của Nhị thức Newton

1. **Phân phối nhị thức trong thống kê:** Trong y tế hoặc sản xuất, thử nghiệm một loại vắc-xin trên $n = 5$ bệnh nhân với xác suất thành công $p$ và thất bại $q = 1 - p$. Xác suất có đúng $k$ người khỏi bệnh được cho bởi số hạng $C_n^k p^k q^{n-k}$ của nhị thức Newton.
2. **Kinh tế học & Tính lãi kép tích lũy:** Công thức lãi kép $S_n = P(1 + r)^n$. Khi lãi suất $r$ nhỏ (ví dụ $r = 6\% = 0,06$), ta có thể ước lượng nhanh sau 4 năm bằng nhị thức Newton: $(1 + r)^4 \approx 1 + 4r + 6r^2$.
3. **Đồ họa máy tính & Đường cong Bézier:** Trong thiết kế đồ họa vector (như Adobe Illustrator, AutoCAD, font chữ TrueType), các đường cong mượt mà uốn lượn được định nghĩa dựa trên các đa thức Bernstein, bản chất chính là các số hạng của nhị thức Newton.
4. **Di truyền học Mendel:** Khi lai hai cá thể dị hợp $Aa \times Aa$, xác suất xuất hiện các kiểu gen của 4 đứa con tuân theo sự khai triển nhị thức Newton $(3/4 + 1/4)^4$.
5. **Vật lý xấp xỉ & Thuyết tương đối:** Trong vật lý hiện đại, khi vận tốc $v \ll c$ (vận tốc ánh sáng), các nhà vật lý dùng khai triển nhị thức để xấp xỉ hệ số Lorentz: $\gamma = (1 - v^2/c^2)^{-1/2} \approx 1 + \frac{1}{2}\frac{v^2}{c^2}$, từ đó dẫn về động năng cổ điển của Newton $E_k = \frac{1}{2}mv^2$.

---

## 7. Bài tập trắc nghiệm tự luyện

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q1",
  "question": "Khai triển $(a + b)^4$ có bao nhiêu số hạng?",
  "options": [
    "5",
    "4",
    "6",
    "16"
  ],
  "answer": 0,
  "explanation": "Khai triển $(a + b)^n$ có $n + 1$ số hạng. Với $n = 4$ có $4 + 1 = 5$ số hạng."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q2",
  "question": "Hệ số của số hạng chứa $a^2b^2$ trong khai triển $(a + b)^4$ là:",
  "options": [
    "6",
    "4",
    "1",
    "12"
  ],
  "answer": 0,
  "explanation": "Hệ số là $C_4^2 = 6$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q3",
  "question": "Khai triển $(x - 2)^4$ bằng đa thức nào sau đây?",
  "options": [
    "x^4 - 8x^3 + 24x^2 - 32x + 16",
    "x^4 + 8x^3 + 24x^2 + 32x + 16",
    "x^4 - 4x^3 + 6x^2 - 4x + 16",
    "x^4 - 8x^3 + 12x^2 - 16x + 16"
  ],
  "answer": 0,
  "explanation": "$(x - 2)^4 = x^4 - 4x^3(2) + 6x^2(4) - 4x(8) + 16 = x^4 - 8x^3 + 24x^2 - 32x + 16$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q4",
  "question": "Hệ số của $x^4$ trong khai triển $(2x + 1)^5$ là:",
  "options": [
    "80",
    "32",
    "10",
    "40"
  ],
  "answer": 0,
  "explanation": "Số hạng chứa $x^4$ là $C_5^1 (2x)^4 (1) = 5 \\times 16x^4 = 80x^4$. Hệ số là 80."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q5",
  "question": "Tổng các hệ số của khai triển $(x + 1)^5$ bằng:",
  "options": [
    "32",
    "64",
    "16",
    "10"
  ],
  "answer": 0,
  "explanation": "Thay $x = 1$ ta được $(1 + 1)^5 = 2^5 = 32$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q6",
  "question": "Số hạng không chứa $x$ (hệ số tự do) trong khai triển $(3x - 1)^4$ là:",
  "options": [
    "1",
    "-1",
    "4",
    "81"
  ],
  "answer": 0,
  "explanation": "Hệ số tự do là $(-1)^4 = 1$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q7",
  "question": "Biết khai triển $(x + 2)^5 = x^5 + a x^4 + b x^3 + c x^2 + d x + e$. Giá trị của $b$ bằng:",
  "options": [
    "40",
    "80",
    "20",
    "10"
  ],
  "answer": 0,
  "explanation": "Số hạng chứa $x^3$ là $C_5^2 x^3 (2^2) = 10 \\times 4 x^3 = 40x^3 \\implies b = 40$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q8",
  "question": "Dòng 5 của tam giác Pascal có các phần tử là:",
  "options": [
    "1, 5, 10, 10, 5, 1",
    "1, 4, 6, 4, 1",
    "1, 5, 15, 15, 5, 1",
    "1, 6, 15, 20, 15, 6, 1"
  ],
  "answer": 0,
  "explanation": "Dòng 5 tương ứng với $C_5^k$ ($k = 0, ..., 5$): 1, 5, 10, 10, 5, 1."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q9",
  "question": "Tổng $C_4^0 + C_4^1 + C_4^2 + C_4^3 + C_4^4$ có giá trị bằng:",
  "options": [
    "16",
    "15",
    "32",
    "8"
  ],
  "answer": 0,
  "explanation": "Tổng các tổ hợp từ $k=0$ đến $n$ bằng $2^n = 2^4 = 16$."
}'></div>

<div class="quiz-item" data-quiz='{
  "id": "toan10_c8_b25_q10",
  "question": "Cho khai triển $(x - 1)^5 = a_5 x^5 + a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0$. Tổng các hệ số $a_5 + a_4 + a_3 + a_2 + a_1 + a_0$ bằng:",
  "options": [
    "0",
    "32",
    "-1",
    "1"
  ],
  "answer": 0,
  "explanation": "Thay $x = 1$ vào khai triển: $(1 - 1)^5 = 0^5 = 0$."
}'></div>

---

## 8. Dự án thử thách thực tế: Dự báo dung lượng pin hao mòn theo thời gian

**Bài toán kỹ thuật:**
Một chiếc điện thoại thông minh sau mỗi năm sử dụng thì dung lượng pin tối đa giảm khoảng $4\%$ so với năm trước đó (nghĩa là dung lượng còn lại sau 1 năm bằng $1 - 0,04 = 0,96$ ban đầu).
Dung lượng pin còn lại sau $n = 4$ năm bằng:
$$S_4 = S_0 \times (1 - 0,04)^4$$
trong đó $S_0 = 5000\text{ mAh}$ là dung lượng pin khi mới mua máy.

**Nhiệm vụ:**
1. Áp dụng khai triển nhị thức Newton bậc 4 để tính giá trị chính xác và giá trị xấp xỉ của $(1 - 0,04)^4$ (lấy đến 3 số hạng đầu tiên).
2. Tính dung lượng pin còn lại của điện thoại sau 4 năm sử dụng.

*Gợi ý:*
- $(1 - 0,04)^4 = 1 - 4(0,04) + 6(0,04)^2 - 4(0,04)^3 + (0,04)^4$.
- Lấy 3 số hạng đầu: $1 - 0,16 + 6(0,0016) = 1 - 0,16 + 0,0096 = 0,8496 \approx 85\%$.
- Dung lượng pin còn lại: $5000 \times 0,8496 \approx 4248\text{ mAh}$.
