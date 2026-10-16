---
title: 'Toán 11 Bài 28: Biến cố hợp, biến cố giao, biến cố độc lập - Khái niệm và phương pháp phân biệt'
description: 'Lý thuyết trọng tâm Bài 28 Toán 11 Kết nối tri thức: Biến cố hợp, biến cố giao, biến cố xung khắc và biến cố độc lập. Trực quan hóa bằng biểu đồ Venn tương tác, ví dụ minh họa chi tiết và 10 câu trắc nghiệm tự chấm.'
category: Toán học
type: Bài học
date: '2026-10-17'
tags:
  - Toán học
  - Toán 11
  - Xác suất
  - Biến cố hợp
  - Biến cố giao
  - Biến cố độc lập
  - Biến cố xung khắc
  - Biểu đồ Venn
  - Kết nối tri thức
grade: 11
---

# Bài 28. Biến cố hợp, biến cố giao, biến cố độc lập

Trong chương trình Toán lớp 10, các em đã làm quen với các khái niệm sơ khai về xác suất cổ điển: phép thử ngẫu nhiên, không gian mẫu $\Omega$, biến cố $A$ là tập con của không gian mẫu và công thức xác suất cơ bản:
$$P(A) = \frac{n(A)}{n(\Omega)}$$

Tuy nhiên, trong thực tế đời sống và nghiên cứu khoa học kỹ thuật, các sự kiện không xảy ra đơn lẻ mà thường kết hợp với nhau theo nhiều mối quan hệ phức tạp:
- Trong **y học**: Một bệnh nhân có thể vừa mắc bệnh tim ($A$), vừa mắc bệnh tiểu đường ($B$). Xác suất để bệnh nhân mắc *ít nhất một trong hai bệnh* hoặc *mắc cả hai bệnh* là bao nhiêu?
- Trong **công nghệ thông tin**: Hai máy chủ hoạt động độc lập để sao lưu dữ liệu. Xác suất để *ít nhất một máy chủ hoạt động bình thường* trong giờ cao điểm được xác định ra sao?
- Trong **thị trường tài chính**: Giá vàng tăng và tỉ giá USD biến động có phải là hai biến cố độc lập hay có mối tương quan phụ thuộc lẫn nhau?

Để mô hình hóa và giải quyết chính xác các bài toán trên, Chương VIII sẽ trang bị cho các em các công cụ toán học nền tảng: **Biến cố hợp, biến cố giao, biến cố độc lập** và các quy tắc cộng, nhân xác suất.

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ TỔNG QUAN: CÁC MỐI QUAN HỆ GIỮA CÁC BIẾN CỐ</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Biến cố hợp ($A \cup B$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• "Có ít nhất một biến cố xảy ra".<br>• Tập hợp: $A \cup B = \{\omega \in \Omega \mid \omega \in A \text{ hoặc } \omega \in B\}$.<br>• Từ khóa nhận diện: <em>"hoặc", "ít nhất một"</em>.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Biến cố giao ($AB$ hay $A \cap B$)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• "Cả hai biến cố đồng thời xảy ra".<br>• Tập hợp: $A \cap B = \{\omega \in \Omega \mid \omega \in A \text{ và } \omega \in B\}$.<br>• Từ khóa nhận diện: <em>"và", "đồng thời", "cả hai"</em>.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #ef4444;">
<h4 style="margin: 0 0 8px 0; color: #b91c1c;">3. Biến cố xung khắc</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Hai biến cố không thể đồng thời cùng xảy ra.<br>• Tập hợp: $A \cap B = \emptyset$.<br>• Ví dụ: Gieo 1 con xúc xắc, $A$: "ra mặt chẵn", $B$: "ra mặt lẻ" là 2 biến cố xung khắc.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Biến cố độc lập</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Việc xảy ra hay không của $A$ không làm thay đổi xác suất xảy ra của $B$.<br>• Ví dụ: Gieo đồng xu lần 1 và gieo đồng xu lần 2 là 2 biến cố hoàn toàn độc lập.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Gieo một con xúc xắc cân đối 6 mặt:**
   - Biến cố $A$: "Xuất hiện mặt chia hết cho 2". Hỏi $A$ gồm những kết quả nào?
   - Biến cố $B$: "Xuất hiện mặt chia hết cho 3". Hỏi $B$ gồm những kết quả nào?
2. **Hợp và giao:** Từ câu 1, những kết quả nào thuộc $A$ *hoặc* $B$? Những kết quả nào thuộc *cả* $A$ *và* $B$?
3. **Phân biệt từ khóa:** Trong câu: *"Hôm nay trời mưa hoặc mất điện"*, đây là biến cố hợp hay biến cố giao?
4. **Xung khắc:** Khi rút ngẫu nhiên 1 lá bài từ bộ bài tú lơ khơ 52 lá, biến cố "rút được lá Át" và biến cố "rút được lá K" có thể cùng xảy ra không? Chúng có xung khắc không?
5. **Độc lập:** Hai xạ thủ cùng ngắm bắn vào 1 bia độc lập nhau. Phát bắn trúng của xạ thủ thứ nhất có làm thay đổi cơ hội bắn trúng của xạ thủ thứ hai không?

> [!TIP]
> **Đáp án nhanh:**
> 1. $A = \{2, 4, 6\}$, $B = \{3, 6\}$.
> 2. $A \cup B = \{2, 3, 4, 6\}$; $A \cap B = \{6\}$.
> 3. Từ "hoặc" thể hiện biến cố hợp $A \cup B$.
> 4. Không thể rút 1 lá vừa là Át vừa là K. Chúng xung khắc ($A \cap B = \emptyset$).
> 5. Không ảnh hưởng. Hai phát bắn là hai biến cố độc lập.

---

## I. Biến cố hợp

### 1. Định nghĩa
Cho hai biến cố $A$ và $B$ cùng liên quan đến một phép thử ngẫu nhiên với không gian mẫu $\Omega$.

> [!IMPORTANT]
> **Định nghĩa Biến cố hợp:**
> Biến cố *"Biến cố $A$ xảy ra hoặc biến cố $B$ xảy ra"* được gọi là **biến cố hợp** của $A$ và $B$, kí hiệu là:
> $$A \cup B$$
>
> Biến cố $A \cup B$ xảy ra khi và chỉ khi có **ít nhất một** trong hai biến cố $A, B$ xảy ra.

Dưới góc độ lý thuyết tập hợp:
$$A \cup B = \{\omega \in \Omega \mid \omega \in A \text{ hoặc } \omega \in B\}$$

### 2. Mở rộng cho nhiều biến cố
Cho $n$ biến cố $A_1, A_2, \dots, A_n$. Biến cố *"Có ít nhất một trong các biến cố $A_1, A_2, \dots, A_n$ xảy ra"* là biến cố hợp:
$$A_1 \cup A_2 \cup \dots \cup A_n$$

---

## II. Biến cố giao

### 1. Định nghĩa
Cho hai biến cố $A$ và $B$ liên quan đến cùng một phép thử ngẫu nhiên.

> [!IMPORTANT]
> **Định nghĩa Biến cố giao:**
> Biến cố *"Cả hai biến cố $A$ và $B$ đồng thời xảy ra"* được gọi là **biến cố giao** của $A$ và $B$, kí hiệu là:
> $$A \cap B \quad \text{hoặc viết tắt là} \quad AB$$
>
> Biến cố $AB$ xảy ra khi và chỉ khi **cả hai** biến cố $A$ và $B$ cùng xảy ra.

Dưới góc độ lý thuyết tập hợp:
$$A \cap B = \{\omega \in \Omega \mid \omega \in A \text{ và } \omega \in B\}$$

### 2. Mở rộng cho nhiều biến cố
Cho $n$ biến cố $A_1, A_2, \dots, A_n$. Biến cố *"Tất cả các biến cố $A_1, A_2, \dots, A_n$ đều đồng thời xảy ra"* là biến cố giao:
$$A_1 \cap A_2 \cap \dots \cap A_n \quad \text{hoặc} \quad A_1 A_2 \dots A_n$$

---

## III. Biến cố xung khắc và Biến cố đối

### 1. Biến cố xung khắc
> [!WARNING]
> **Định nghĩa Biến cố xung khắc:**
> Hai biến cố $A$ và $B$ được gọi là **xung khắc** nếu chúng không thể đồng thời cùng xảy ra trong bất kỳ kết quả nào của phép thử:
> $$A \cap B = \emptyset$$

**Ví dụ:**
- Khi tung 1 con xúc xắc: Biến cố $A$ = "ra số chấm chẵn" và biến cố $B$ = "ra số chấm lẻ" là hai biến cố xung khắc vì không số nguyên nào vừa chẵn vừa lẻ.
- Khi chọn ngẫu nhiên 1 học sinh trong lớp: $C$ = "học sinh sinh vào tháng 3" và $D$ = "học sinh sinh vào tháng 8" là hai biến cố xung khắc.

### 2. Biến cố đối
Biến cố đối của $A$, kí hiệu là $\overline{A}$, là biến cố *"Biến cố $A$ không xảy ra"*.
Mối quan hệ giữa $A$ và $\overline{A}$:
- Chúng xung khắc: $A \cap \overline{A} = \emptyset$.
- Hợp của chúng phủ kín không gian mẫu: $A \cup \overline{A} = \Omega$.
- Xác suất: $P(\overline{A}) = 1 - P(A)$.

---

## Công cụ trực quan: Biểu đồ Venn tương tác

Hãy bấm vào các nút bên dưới để quan sát trực quan mối quan hệ giữa hai biến cố $A$ và $B$ trong không gian mẫu $\Omega$:

<div id="venn-interactive-app" style="margin: 24px 0; padding: 20px; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center;">
  <h4 style="margin-top: 0; color: var(--primary-color, #2563eb);">MÔ PHỎNG BIỂU ĐỒ VENN TƯƠNG TÁC</h4>
  <p style="font-size: 0.95em; color: var(--text-secondary, #64748b); margin-bottom: 16px;">Chọn quan hệ để tô sáng vùng không gian biến cố tương ứng:</p>
  
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 20px;">
    <button type="button" class="btn-venn" data-mode="A" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #3b82f6; background: #eff6ff; color: #1d4ed8; font-weight: 600; cursor: pointer;">Biến cố A</button>
    <button type="button" class="btn-venn" data-mode="B" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: 600; cursor: pointer;">Biến cố B</button>
    <button type="button" class="btn-venn active" data-mode="union" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #8b5cf6; background: #8b5cf6; color: #ffffff; font-weight: 600; cursor: pointer;">Hợp: A ∪ B</button>
    <button type="button" class="btn-venn" data-mode="intersect" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #f59e0b; background: #fef3c7; color: #b45309; font-weight: 600; cursor: pointer;">Giao: A ∩ B</button>
    <button type="button" class="btn-venn" data-mode="notA" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #64748b; background: #f1f5f9; color: #334155; font-weight: 600; cursor: pointer;">Biến cố đối: A̅</button>
    <button type="button" class="btn-venn" data-mode="disjoint" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #ef4444; background: #fef2f2; color: #b91c1c; font-weight: 600; cursor: pointer;">Xung khắc (A ∩ B = ∅)</button>
  </div>

  <div style="display: flex; justify-content: center;">
    <svg id="venn-svg" viewBox="0 0 460 260" width="100%" style="max-width: 460px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
      <!-- Background Universe Omega -->
      <rect x="10" y="10" width="440" height="240" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" id="venn-bg"/>
      <text x="28" y="36" font-family="sans-serif" font-size="16" font-weight="bold" fill="#64748b">Ω</text>
      
      <!-- Paths/Circles will be updated dynamically -->
      <g id="venn-shapes">
        <!-- Circle A -->
        <circle id="circle-a" cx="175" cy="130" r="75" fill="rgba(59, 130, 246, 0.4)" stroke="#2563eb" stroke-width="2.5"/>
        <!-- Circle B -->
        <circle id="circle-b" cx="285" cy="130" r="75" fill="rgba(16, 185, 129, 0.4)" stroke="#059669" stroke-width="2.5"/>
        <!-- Labels -->
        <text id="label-a" x="140" y="135" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e40af">A</text>
        <text id="label-b" x="310" y="135" font-family="sans-serif" font-size="16" font-weight="bold" fill="#065f46">B</text>
        <text id="label-ab" x="230" y="135" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">A ∩ B</text>
      </g>
    </svg>
  </div>

  <div id="venn-desc" style="margin-top: 16px; padding: 12px; background: #f1f5f9; border-radius: 6px; font-size: 0.95em; color: #1e293b; text-align: left;">
    <strong>Biến cố hợp A ∪ B:</strong> Bao gồm toàn bộ phần thuộc A, phần thuộc B và phần giao giữa A và B. Biến cố này xảy ra khi ít nhất một trong hai biến cố A hoặc B xảy ra.
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-venn');
  const circleA = document.getElementById('circle-a');
  const circleB = document.getElementById('circle-b');
  const labelA = document.getElementById('label-a');
  const labelB = document.getElementById('label-b');
  const labelAB = document.getElementById('label-ab');
  const vennBg = document.getElementById('venn-bg');
  const desc = document.getElementById('venn-desc');

  if (!buttons.length || !circleA || !circleB) return;

  const modes = {
    A: {
      cxA: 175, cxB: 285,
      fillA: 'rgba(59, 130, 246, 0.7)', fillB: 'rgba(203, 213, 225, 0.2)',
      bgFill: '#f8fafc',
      showAB: true,
      text: '<strong>Biến cố A:</strong> Vùng màu xanh dương biểu thị các kết quả thuận lợi cho biến cố A.'
    },
    B: {
      cxA: 175, cxB: 285,
      fillA: 'rgba(203, 213, 225, 0.2)', fillB: 'rgba(16, 185, 129, 0.7)',
      bgFill: '#f8fafc',
      showAB: true,
      text: '<strong>Biến cố B:</strong> Vùng màu xanh lá biểu thị các kết quả thuận lợi cho biến cố B.'
    },
    union: {
      cxA: 175, cxB: 285,
      fillA: 'rgba(139, 92, 246, 0.6)', fillB: 'rgba(139, 92, 246, 0.6)',
      bgFill: '#f8fafc',
      showAB: true,
      text: '<strong>Biến cố hợp A ∪ B:</strong> Vùng màu tím bao gồm toàn bộ phần thuộc A hoặc B (kể cả phần giao). Biến cố xảy ra khi có ít nhất một trong hai biến cố A hoặc B xảy ra.'
    },
    intersect: {
      cxA: 175, cxB: 285,
      fillA: 'rgba(203, 213, 225, 0.2)', fillB: 'rgba(203, 213, 225, 0.2)',
      bgFill: '#f8fafc',
      showAB: true,
      text: '<strong>Biến cố giao A ∩ B:</strong> Vùng giao thoa chính giữa. Biến cố xảy ra khi cả A và B đồng thời cùng xảy ra.'
    },
    notA: {
      cxA: 175, cxB: 285,
      fillA: 'rgba(255, 255, 255, 0.9)', fillB: 'rgba(100, 116, 139, 0.5)',
      bgFill: 'rgba(100, 116, 139, 0.3)',
      showAB: true,
      text: '<strong>Biến cố đối A̅:</strong> Toàn bộ không gian mẫu Ω bên ngoài vòng tròn A. Biến cố xảy ra khi A không xảy ra.'
    },
    disjoint: {
      cxA: 125, cxB: 335,
      fillA: 'rgba(239, 68, 68, 0.5)', fillB: 'rgba(59, 130, 246, 0.5)',
      bgFill: '#f8fafc',
      showAB: false,
      text: '<strong>Hai biến cố xung khắc (A ∩ B = ∅):</strong> Hai vòng tròn hoàn toàn tách rời nhau, không có điểm chung nào. Chúng không thể đồng thời cùng xảy ra.'
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      buttons.forEach(b => {
        b.style.background = '';
        b.style.color = '';
      });
      const mode = this.dataset.mode;
      this.style.background = '#2563eb';
      this.style.color = '#ffffff';

      const cfg = modes[mode];
      circleA.setAttribute('cx', cfg.cxA);
      circleB.setAttribute('cx', cfg.cxB);
      circleA.setAttribute('fill', cfg.fillA);
      circleB.setAttribute('fill', cfg.fillB);
      vennBg.setAttribute('fill', cfg.bgFill);

      if (cfg.showAB) {
        labelA.setAttribute('x', cfg.cxA - 35);
        labelB.setAttribute('x', cfg.cxB + 25);
        labelAB.style.display = 'block';
      } else {
        labelA.setAttribute('x', cfg.cxA);
        labelB.setAttribute('x', cfg.cxB);
        labelAB.style.display = 'none';
      }

      if (mode === 'intersect') {
        circleA.setAttribute('fill', 'rgba(245, 158, 11, 0.3)');
        circleB.setAttribute('fill', 'rgba(245, 158, 11, 0.3)');
        labelAB.textContent = 'A ∩ B (Giao)';
        labelAB.setAttribute('fill', '#b45309');
      } else {
        labelAB.textContent = 'A ∩ B';
        labelAB.setAttribute('fill', '#1e293b');
      }

      desc.innerHTML = cfg.text;
    });
  });
});
</script>

---

## IV. Biến cố độc lập

### 1. Định nghĩa
Trong thực nghiệm xác suất, có những cặp biến cố mà việc xảy ra hay không xảy ra của biến cố này **không hề tác động** đến cơ hội xảy ra của biến cố kia.

> [!IMPORTANT]
> **Định nghĩa Biến cố độc lập:**
> Hai biến cố $A$ và $B$ được gọi là **độc lập** nếu sự xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng đến xác suất xảy ra của biến cố kia:
> - Xác suất của $A$ khi $B$ xảy ra hay không xảy ra vẫn bằng $P(A)$.
> - Xác suất của $B$ khi $A$ xảy ra hay không xảy ra vẫn bằng $P(B)$.

### 2. Định lý tính chất của các biến cố độc lập
Nếu hai biến cố $A$ và $B$ độc lập với nhau thì các cặp biến cố sau đây cũng độc lập với nhau:
1. $A$ và $\overline{B}$ (biến cố đối của $B$).
2. $\overline{A}$ và $B$.
3. $\overline{A}$ và $\overline{B}$.

> [!NOTE]
> **Chứng minh trực giác:**
> Giả sử việc bạn tung đồng xu lần 1 ra mặt Ngửa không hề ảnh hưởng đến việc lần 2 ra Ngửa. Khi đó, lần 1 ra Ngửa chắc chắn cũng không ảnh hưởng đến việc lần 2 ra Sấp ($\overline{B}$). Tương tự cho các cặp còn lại!

---

## V. So sánh then chốt: Biến cố xung khắc vs Biến cố độc lập

Đây là một trong những điểm học sinh hay nhầm lẫn nhất khi học xác suất lớp 11:

| Tiêu chí so sánh | Biến cố xung khắc ($A \cap B = \emptyset$) | Biến cố độc lập |
| :--- | :--- | :--- |
| **Bản chất** | Quan hệ về **kết quả** (tập hợp không giao nhau). | Quan hệ về **thông tin & xác suất** (không ảnh hưởng cơ hội của nhau). |
| **Khả năng cùng xảy ra** | **Không bao giờ** cùng xảy ra: nếu $A$ xảy ra thì $B$ chắc chắn KHÔNG xảy ra. | **Có thể** cùng xảy ra hoặc không cùng xảy ra. |
| **Phép thử** | Thường xét trong **cùng 1 phép thử đơn** (ví dụ: rút 1 lá bài, tung 1 con xúc xắc). | Thường xét trong các **phép thử thành phần độc lập** (ví dụ: gieo 2 lần, bắn 2 phát, 2 người độc lập). |
| **Mối quan hệ đặc biệt** | Nếu $A$ và $B$ xung khắc và có xác suất dương ($P(A)>0, P(B)>0$), chúng **không bao giờ độc lập** (vì nếu $A$ xảy ra thì xác suất $B$ xảy ra ngay lập tức tụt về $0$!). | Hai biến cố độc lập (với xác suất dương) thì **không bao giờ xung khắc**. |

---

## VI. Các dạng toán điển hình có lời giải chi tiết

### Dạng 1: Viết biến cố hợp, biến cố giao dưới dạng tập hợp

**Bài toán 1:** Gieo một con xúc xắc cân đối và đồng chất 6 mặt một lần. Xét các biến cố:
- $A$: "Số chấm xuất hiện là số lẻ".
- $B$: "Số chấm xuất hiện là số chia hết cho 3".
- $C$: "Số chấm xuất hiện lớn hơn hoặc bằng 4".

Hãy xác định không gian mẫu $\Omega$ và viết các tập hợp mô tả các biến cố sau:
a) $A, B, C$ và các biến cố đối $\overline{A}, \overline{B}$.  
b) Biến cố hợp $A \cup B$ và biến cố giao $AB$.  
c) Biến cố $B \cap C$ và biến cố $A \cap C$. Cặp biến cố nào là xung khắc?

**Lời giải:**
Không gian mẫu: $\Omega = \{1, 2, 3, 4, 5, 6\}$.
a)
- $A = \{1, 3, 5\}$.
- $B = \{3, 6\}$.
- $C = \{4, 5, 6\}$.
- $\overline{A} = \Omega \setminus A = \{2, 4, 6\}$ (số chấm là số chẵn).
- $\overline{B} = \Omega \setminus B = \{1, 2, 4, 5\}$ (số chấm không chia hết cho 3).

b)
- $A \cup B = \{1, 3, 5\} \cup \{3, 6\} = \{1, 3, 5, 6\}$ (số chấm là số lẻ hoặc chia hết cho 3).
- $AB = A \cap B = \{1, 3, 5\} \cap \{3, 6\} = \{3\}$ (số chấm vừa là số lẻ, vừa chia hết cho 3).

c)
- $B \cap C = \{3, 6\} \cap \{4, 5, 6\} = \{6\}$ (số chấm vừa chia hết cho 3 vừa $\ge 4$).
- $A \cap C = \{1, 3, 5\} \cap \{4, 5, 6\} = \{5\}$.
Cặp biến cố xung khắc trong bài này: xét $D$: "Số chấm là số chẵn" = $\{2, 4, 6\}$ thì $A$ và $D$ là cặp xung khắc ($A \cap D = \emptyset$).

---

### Dạng 2: Phát biểu biến cố bằng ngôn ngữ thực tế

**Bài toán 2:** Một hộp đựng 10 tấm thẻ cùng loại được đánh số từ 1 đến 10. Rút ngẫu nhiên một tấm thẻ. Gọi:
- $A$: "Tấm thẻ rút được mang số chẵn".
- $B$: "Tấm thẻ rút được mang số nguyên tố".

Hãy dùng ngôn ngữ biến cố để diễn đạt các mệnh đề sau:
a) Tấm thẻ rút được mang số 2.  
b) Tấm thẻ rút được mang số chẵn hoặc số nguyên tố.  
c) Tấm thẻ rút được mang số lẻ và là hợp số.

**Lời giải:**
Tập hợp các thẻ: $\Omega = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.
- $A = \{2, 4, 6, 8, 10\}$.
- $B = \{2, 3, 5, 7\}$.

a) Số 2 vừa là số chẵn, vừa là số nguyên tố duy nhất.
Do đó biến cố "Tấm thẻ rút được mang số 2" chính là biến cố giao: $A \cap B$ (hay $AB$).

b) Biến cố "Tấm thẻ rút được mang số chẵn hoặc số nguyên tố" chính là biến cố hợp: $A \cup B$.
Cụ thể: $A \cup B = \{2, 3, 4, 5, 6, 7, 8, 10\}$.

c)
- Thẻ mang số lẻ là biến cố đối của số chẵn: $\overline{A}$.
- Thẻ mang hợp số (và không phải nguyên tố): trong tập $\{1, \dots, 10\}$, các hợp số là $\{4, 6, 8, 9, 10\}$.
Để là số lẻ và hợp số, thẻ đó phải mang số 9. Biến cố này là $\overline{A} \cap \overline{B}$ (không phải chẵn và không phải nguyên tố, loại trừ thẻ 1 nếu quy ước cụ thể).

---

### Dạng 3: Nhận biết biến cố độc lập

**Bài toán 3:** Trong các cặp biến cố sau đây, cặp biến cố nào là **độc lập**? Cặp nào **phụ thuộc**?
1. Một hộp chứa 3 bi xanh và 2 bi đỏ.
   - Phép thử 1: Rút ngẫu nhiên bi thứ nhất, *không trả lại vào hộp*, sau đó rút bi thứ hai.
   - Gọi $A$: "Bi thứ nhất màu xanh", $B$: "Bi thứ hai màu đỏ".
2. Phép thử 2: Rút ngẫu nhiên bi thứ nhất, *ghi lại màu rồi trả lại vào hộp*, xóc đều rồi rút bi thứ hai.
   - Gọi $C$: "Bi thứ nhất màu xanh", $D$: "Bi thứ hai màu đỏ".
3. Gieo hai con xúc xắc cân đối đồng chất riêng biệt.
   - Gọi $E$: "Con xúc xắc thứ nhất ra mặt 6 chấm".
   - Gọi $F$: "Con xúc xắc thứ hai ra mặt 1 chấm".

**Lời giải:**
1. **Cặp biến cố $A$ và $B$ là PHỤ THUỘC (không độc lập):**
   Vì khi rút không hoàn lại, màu sắc của bi thứ nhất sẽ làm thay đổi số lượng bi còn lại trong hộp:
   - Nếu $A$ xảy ra (bi 1 xanh), trong hộp còn 2 bi xanh và 2 bi đỏ $\Rightarrow P(B) = \frac{2}{4} = \frac{1}{2}$.
   - Nếu $A$ không xảy ra (bi 1 đỏ), trong hộp còn 3 bi xanh và 1 bi đỏ $\Rightarrow P(B) = \frac{1}{4}$.
   Xác suất của $B$ bị thay đổi tùy thuộc vào $A$ có xảy ra hay không!

2. **Cặp biến cố $C$ và $D$ là ĐỘC LẬP:**
   Vì có hoàn lại, số lượng bi trong hộp ở lần rút thứ hai vẫn nguyên vẹn như ban đầu (3 xanh, 2 đỏ). Kết quả lần 1 không hề làm ảnh hưởng đến xác suất lần 2.

3. **Cặp biến cố $E$ và $F$ là ĐỘC LẬP:**
   Hai con xúc xắc được gieo hoàn toàn riêng biệt, mặt xuất hiện của xúc xắc thứ nhất không có bất kỳ lực tác động vật lý nào lên con xúc xắc thứ hai.

---

## VII. Trắc nghiệm Tự chấm: Luyện phản xạ (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Cho hai biến cố A và B. Biến cố \"Có ít nhất một trong hai biến cố A hoặc B xảy ra\" là biến cố:",
  "options": [
    "A. A ∪ B",
    "B. A ∩ B",
    "C. A̅",
    "D. A \\ B"
  ],
  "answer": "A. A ∪ B",
  "explanation": "Theo định nghĩa, biến cố hợp A ∪ B xảy ra khi có ít nhất một trong hai biến cố A hoặc B xảy ra."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hai biến cố A và B được gọi là xung khắc khi và chỉ khi:",
  "options": [
    "A. A ∩ B = ∅",
    "B. A ∪ B = Ω",
    "C. P(A) = P(B)",
    "D. A ⊂ B"
  ],
  "answer": "A. A ∩ B = ∅",
  "explanation": "Hai biến cố xung khắc là hai biến cố không thể đồng thời cùng xảy ra, tức tập hợp giao giữa chúng là tập rỗng: A ∩ B = ∅."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Gieo một đồng xu cân đối đồng chất 2 lần liên tiếp. Gọi A là biến cố \"Lần thứ nhất xuất hiện mặt Sấp\", B là biến cố \"Lần thứ hai xuất hiện mặt Ngửa\". Mệnh đề nào sau đây đúng?",
  "options": [
    "A. A và B là hai biến cố độc lập",
    "B. A và B là hai biến cố xung khắc",
    "C. A là biến cố đối của B",
    "D. A ∩ B = ∅"
  ],
  "answer": "A. A và B là hai biến cố độc lập",
  "explanation": "Kết quả gieo lần 1 không làm ảnh hưởng đến kết quả gieo lần 2, do đó A và B là hai biến cố độc lập. Kết quả (Sấp, Ngửa) hoàn toàn có thể xảy ra nên chúng không xung khắc."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá. Gọi A là biến cố \"Rút được lá bài màu đỏ\", B là biến cố \"Rút được lá Át (A)\". Biến cố giao AB là:",
  "options": [
    "A. Rút được lá Át Cơ hoặc Át Rô",
    "B. Rút được một lá bài màu đỏ bất kỳ",
    "C. Rút được một lá bài màu đen",
    "D. Rút được lá Át Bích hoặc Át Tép"
  ],
  "answer": "A. Rút được lá Át Cơ hoặc Át Rô",
  "explanation": "Biến cố giao AB xảy ra khi lá bài vừa có màu đỏ vừa là lá Át. Trong bộ bài có 2 lá Át màu đỏ là Át Cơ và Át Rô."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Nếu hai biến cố A và B độc lập với nhau thì cặp biến cố nào sau đây CŨNG độc lập với nhau?",
  "options": [
    "A. A và B̅",
    "B. A và A̅",
    "C. B và B̅",
    "D. A ∪ B và A ∩ B"
  ],
  "answer": "A. A và B̅",
  "explanation": "Theo định lý về biến cố độc lập: Nếu A và B độc lập thì A và B̅, A̅ và B, A̅ và B̅ cũng đều là các cặp biến cố độc lập."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Gieo một con xúc xắc 6 mặt cân đối. Gọi A: \"Mặt xuất hiện có số chấm là số nguyên tố\", B: \"Mặt xuất hiện có số chấm là hợp số\". Khẳng định nào sau đây là SAI?",
  "options": [
    "A. A và B là hai biến cố đối nhau",
    "B. A và B là hai biến cố xung khắc",
    "C. A = {2, 3, 5}",
    "D. B = {4, 6}"
  ],
  "answer": "A. A và B là hai biến cố đối nhau",
  "explanation": "Trên xúc xắc có các số {1, 2, 3, 4, 5, 6}. Số nguyên tố là {2, 3, 5}, hợp số là {4, 6}. Số 1 không phải là số nguyên tố cũng không phải là hợp số, do đó A ∪ B = {2, 3, 4, 5, 6} ≠ Ω. Vậy A và B xung khắc nhưng KHÔNG đối nhau."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho hai biến cố A và B sao cho P(A) = 0.4; P(B) = 0.5 và A, B xung khắc. Khi đó biến cố giao AB có xác suất là:",
  "options": [
    "A. P(AB) = 0",
    "B. P(AB) = 0.2",
    "C. P(AB) = 0.9",
    "D. P(AB) = 0.1"
  ],
  "answer": "A. P(AB) = 0",
  "explanation": "Vì A và B xung khắc nên AB = A ∩ B = ∅, suy ra P(AB) = P(∅) = 0."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Một xạ thủ bắn 2 viên đạn vào một tấm bia một cách độc lập. Gọi A_1 là biến cố \"Viên đạn thứ 1 trúng bia\", A_2 là biến cố \"Viên đạn thứ 2 trúng bia\". Biến cố \"Có ít nhất một viên đạn trúng bia\" được biểu diễn là:",
  "options": [
    "A. A_1 ∪ A_2",
    "B. A_1 ∩ A_2",
    "C. A_1 A_2",
    "D. A̅_1 ∩ A̅_2"
  ],
  "answer": "A. A_1 ∪ A_2",
  "explanation": "\"Ít nhất một trong hai\" chính là định nghĩa của biến cố hợp A_1 ∪ A_2."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho phép thử có không gian mẫu Ω = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. Cho A = {1, 2, 3, 4, 5} và B = {4, 5, 6, 7}. Biến cố đối của biến cố hợp A ∪ B là tập hợp:",
  "options": [
    "A. {8, 9, 10}",
    "B. {4, 5}",
    "C. {1, 2, 3}",
    "D. {6, 7, 8, 9, 10}"
  ],
  "answer": "A. {8, 9, 10}",
  "explanation": "Ta có A ∪ B = {1, 2, 3, 4, 5, 6, 7}. Do đó biến cố đối là phần bù trong Ω: Ω \\ (A ∪ B) = {8, 9, 10}."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hai biến cố A và B bất kỳ được gọi là không độc lập (phụ thuộc) khi nào?",
  "options": [
    "A. Sự xảy ra của A làm thay đổi xác suất xảy ra của B",
    "B. A và B có giao bằng rỗng",
    "C. P(A) khác P(B)",
    "D. A và B cùng xảy ra trong mọi phép thử"
  ],
  "answer": "A. Sự xảy ra của A làm thay đổi xác suất xảy ra của B",
  "explanation": "Theo định nghĩa, hai biến cố phụ thuộc nhau khi việc xảy ra hay không xảy ra của biến cố này làm thay đổi xác suất xảy ra của biến cố kia."
}'></div>

---

## VIII. Ứng dụng Thực tế: Độ tin cậy của Hệ thống Mạng máy tính & Vệ tinh

Trong kỹ thuật truyền thông và mạng máy tính, các kỹ sư thường thiết kế hệ thống có tính **dự phòng (redundancy)** để đảm bảo an toàn tuyệt đối.

<div style="margin: 20px 0; padding: 18px; background: var(--bg-secondary, #f8fafc); border-radius: 10px; border-left: 4px solid #3b82f6;">
<strong>Bài toán Kỹ thuật Mạng viễn thông:</strong><br>
Một trạm tiếp sóng mặt đất giao tiếp với một vệ tinh địa tĩnh bằng 2 đường truyền vô tuyến hoạt động hoàn toàn độc lập với nhau (kênh băng tần Ku và kênh băng tần Ka).<br>
Gọi $A$ là biến cố: "Kênh Ku hoạt động thông suốt".<br>
Gọi $B$ là biến cố: "Kênh Ka hoạt động thông suốt".<br><br>
Hệ thống liên lạc của trạm được coi là hoạt động nếu có <strong>ít nhất một kênh</strong> hoạt động bình thường.<br>
1. Biến cố hệ thống liên lạc hoạt động được biểu diễn qua $A$ và $B$ như thế nào?<br>
2. Biến cố cả hai kênh đều bị mất tín hiệu (hệ thống sụp đổ hoàn toàn) được biểu diễn như thế nào?<br>
3. Mối liên hệ giữa hai biến cố ở câu 1 và câu 2 là gì?
</div>

> [!TIP]
> **Phân tích kỹ thuật:**
> 1. Hệ thống hoạt động khi có ít nhất một kênh hoạt động $\Rightarrow$ Biến cố hợp: $H = A \cup B$.
> 2. Cả hai kênh đều bị mất tín hiệu tức là kênh Ku mất ($\overline{A}$) **VÀ** kênh Ka mất ($\overline{B}$) $\Rightarrow$ Biến cố giao: $M = \overline{A} \cap \overline{B}$.
> 3. Rõ ràng hệ thống chỉ có 2 trạng thái: hoặc là hoạt động, hoặc là sụp đổ hoàn toàn. Do đó $H$ và $M$ là hai **biến cố đối nhau**:
>    $$M = \overline{H} \iff \overline{A \cup B} = \overline{A} \cap \overline{B}$$
>    Đây chính là **Công thức De Morgan** nổi tiếng trong lý thuyết xác suất và đại số Boole máy tính!
