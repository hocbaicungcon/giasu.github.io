---
title: "Toán 11 Bài 26: Khoảng cách trong không gian - Lý thuyết & Tuyệt chiêu giải toán"
description: "Chinh phục khoảng cách từ điểm đến mặt phẳng, kĩ thuật đổi điểm dời chân đường cao, khoảng cách giữa hai đường thẳng chéo nhau. Kèm mô hình 3D tương tác xoay đa chiều và trắc nghiệm tự chấm."
category: Toán học
type: Bài học
date: "2026-10-16"
tags:
  - Toán học
  - Toán 11
  - Hình học không gian
  - Khoảng cách trong không gian
  - Khoảng cách từ điểm đến mặt phẳng
  - Khoảng cách giữa hai đường chéo nhau
  - Kỹ thuật đổi điểm
---

# Toán 11 Bài 26: Khoảng cách trong không gian

Nếu được hỏi chủ đề nào xuất hiện nhiều nhất và thường khiến học sinh "toát mồ hôi" nhất trong các kì thi THPT, câu trả lời chắc chắn là **Khoảng cách trong không gian**.

Khoảng cách thực chất là **độ dài của đoạn vuông góc ngắn nhất**. Bí quyết để biến một bài toán khoảng cách từ "cực khó" thành "cực dễ" gói gọn trong hai tuyệt chiêu: **Phương pháp 2 nét vẽ kẻ từ chân đường vuông góc** và **Kĩ thuật đổi điểm (dời điểm)**. Cùng khám phá mô hình 3D động và các phương pháp giải tối ưu ngay sau đây!

---

## Sơ đồ Tư duy: Hệ thống Khoảng cách trong Không gian

```mermaid
flowchart TD
    A["KHOẢNG CÁCH TRONG KHÔNG GIAN"] --> B["Từ 1 điểm đến đường thẳng: d(M, a) = MH ⊥ a"]
    A --> C["Từ 1 điểm đến mặt phẳng: d(M, (P)) = MK ⊥ (P)"]
    A --> D["Giữa hai đường thẳng chéo nhau: d(a, b)"]
    
    C --> C1["Chân đường cao H: Kẻ 2 nét vẽ<br/>Nét 1: HE ⊥ giao tuyến<br/>Nét 2: HK ⊥ SE => d = HK"]
    C --> C2["Điểm M bất kì: KỸ THUẬT ĐỔI ĐIỂM<br/>- Song song: AB // (P) => d(A) = d(B)<br/>- Cắt nhau: AB ∩ (P) = I => d(A)/d(B) = IA/IB"]
    
    D --> D1["Dựng mặt phẳng chứa b và // a:<br/>d(a, b) = d(a, (beta)) = d(M ∈ a, (beta))"]
    D --> D2["Đoạn vuông góc chung MN:<br/>MN ⊥ a và MN ⊥ b => d(a, b) = MN"]
    
    style A fill:#eff6ff,stroke:#2563eb,stroke-width:2px;
    style C1 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px;
    style C2 fill:#ecfdf5,stroke:#10b981,stroke-width:2px;
    style D1 fill:#fef2f2,stroke:#ef4444,stroke-width:2px;
```

---

## Khởi động Nhanh: 5 Câu Hỏi Trắc nghiệm Đầu Giờ

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Khởi động: Nhận diện Bản chất Khoảng cách</h3>

<div class="quiz-item" data-quiz="kd1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd1" value="A"> A. Độ dài đoạn nối $M$ với một điểm bất kì thuộc $(P)$.</label><br>
    <label><input type="radio" name="kd1" value="B"> B. Độ dài đoạn thẳng $MH$, với $H$ là hình chiếu vuông góc của $M$ lên $(P)$.</label><br>
    <label><input type="radio" name="kd1" value="C"> C. Khoảng cách lớn nhất từ $M$ đến một điểm thuộc $(P)$.</label><br>
    <label><input type="radio" name="kd1" value="D"> D. Bán kính mặt cầu đi qua $M$ và tiếp xúc với $(P)$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Theo định nghĩa, khoảng cách từ $M$ đến $(P)$ là độ dài đoạn vuông góc $MH$ hạ từ $M$ xuống $(P)$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Cho đường thẳng $AB$ song song với mặt phẳng $(P)$. Tỉ số khoảng cách $\dfrac{d(A, (P))}{d(B, (P))}$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd2" value="A"> A. $1$.</label><br>
    <label><input type="radio" name="kd2" value="B"> B. $2$.</label><br>
    <label><input type="radio" name="kd2" value="C"> C. $\dfrac{1}{2}$.</label><br>
    <label><input type="radio" name="kd2" value="D"> D. Tùy thuộc vào độ dài đoạn $AB$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Khi đường thẳng song song với mặt phẳng thì mọi điểm trên đường thẳng đều cách đều mặt phẳng, do đó tỉ số bằng 1.
  </div>
</div>

<div class="quiz-item" data-quiz="kd3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Cho đường thẳng $AB$ cắt mặt phẳng $(P)$ tại điểm $I$, sao cho $IA = 2IB$ ($I$ không nằm giữa $A$ và $B$). Khi đó:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd3" value="A"> A. $d(A, (P)) = d(B, (P))$.</label><br>
    <label><input type="radio" name="kd3" value="B"> B. $d(A, (P)) = 2 d(B, (P))$.</label><br>
    <label><input type="radio" name="kd3" value="C"> C. $d(A, (P)) = \dfrac{1}{2} d(B, (P))$.</label><br>
    <label><input type="radio" name="kd3" value="D"> D. $d(A, (P)) = 4 d(B, (P))$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Theo định lí Ta-lét trong không gian: $\dfrac{d(A, (P))}{d(B, (P))} = \dfrac{IA}{IB} = 2 \implies d(A, (P)) = 2d(B, (P))$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$. Độ dài đoạn vuông góc $OH$ kẻ từ $O$ đến mặt phẳng $(ABC)$ thỏa mãn hệ thức:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd4" value="A"> A. $\dfrac{1}{OH^2} = \dfrac{1}{OA^2} + \dfrac{1}{OB^2} + \dfrac{1}{OC^2}$.</label><br>
    <label><input type="radio" name="kd4" value="B"> B. $OH = OA + OB + OC$.</label><br>
    <label><input type="radio" name="kd4" value="C"> C. $OH^2 = OA^2 + OB^2 + OC^2$.</label><br>
    <label><input type="radio" name="kd4" value="D"> D. $\dfrac{1}{OH} = \dfrac{1}{OA} + \dfrac{1}{OB} + \dfrac{1}{OC}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Đây là hệ thức lượng kinh điển trong tứ diện vuông tại $O$: $\dfrac{1}{OH^2} = \dfrac{1}{OA^2} + \dfrac{1}{OB^2} + \dfrac{1}{OC^2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd5" value="A"> A. Khoảng cách giữa hai điểm bất kì trên $a$ và $b$.</label><br>
    <label><input type="radio" name="kd5" value="B"> B. Độ dài đoạn vuông góc chung của $a$ và $b$.</label><br>
    <label><input type="radio" name="kd5" value="C"> C. Khoảng cách giữa hình chiếu của $a$ và $b$ lên mặt đất.</label><br>
    <label><input type="radio" name="kd5" value="D"> D. Nửa tổng độ dài của hai đoạn thẳng $a$ và $b$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Đoạn vuông góc chung có hai đầu mút nằm trên hai đường thẳng và vuông góc với cả hai đường; độ dài đoạn này chính là khoảng cách giữa hai đường chéo nhau.
  </div>
</div>

<button id="btnCheckKD" style="background:#2563eb; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:bold; cursor:pointer;">Kiểm tra đáp án Khởi động</button>
</div>

---

## I. Lý thuyết Trọng tâm

### 1. Khoảng cách từ một điểm đến đường thẳng và mặt phẳng
- **Khoảng cách từ điểm $M$ đến đường thẳng $\Delta$:** Là độ dài đoạn thẳng $MH$, với $H$ là hình chiếu vuông góc của $M$ lên $\Delta$. Kí hiệu: $d(M, \Delta) = MH$.
- **Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$:** Là độ dài đoạn thẳng $MK$, với $K$ là hình chiếu vuông góc của $M$ lên $(P)$. Kí hiệu: $d(M, (P)) = MK$.

> **Tính chất:** $MK \le MA$ với mọi điểm $A \in (P)$. Dấu bằng xảy ra khi và chỉ khi $A \equiv K$. (Hình chiếu vuông góc luôn là đoạn thẳng ngắn nhất).

---

### 2. Kỹ thuật "2 Nét Vẽ Vàng" tính khoảng cách từ chân đường cao

Khi tính khoảng cách từ chân đường cao $A$ ($SA \perp (\text{đáy})$) đến một mặt phẳng bên $(SBC)$ có giao tuyến $BC$ với đáy:
- **Nét 1:** Từ $A$, kẻ $AH \perp BC$ tại $H$ ($H \in BC$).
- **Nét 2:** Nối $SH$. Từ $A$, kẻ $AK \perp SH$ tại $K$ ($K \in SH$).

> **Chứng minh:** 
> Ta có $BC \perp AH$ và $BC \perp SA \implies BC \perp (SAH) \implies BC \perp AK$.
> Lại có $AK \perp SH$. Do đó $AK \perp (SBC)$.
> Vậy **$d(A, (SBC)) = AK$**!
> 
> Công thức tính nhanh độ dài $AK$:
> $$\frac{1}{AK^2} = \frac{1}{SA^2} + \frac{1}{AH^2} \implies AK = \frac{SA \cdot AH}{\sqrt{SA^2 + AH^2}}$$

---

### 3. Kỹ thuật Đổi Điểm (Dời điểm về Chân đường cao)

Trong thực tế thi cử, điểm cần tính khoảng cách thường là điểm bất kì $M$ chứ không phải chân đường cao $A$. Ta dùng 2 quy tắc đổi điểm sau:

#### Trường hợp 1: Đường thẳng nối hai điểm song song với mặt phẳng
Nếu $MN \parallel (P)$ thì:
$$d(M, (P)) = d(N, (P))$$

#### Trường hợp 2: Đường thẳng nối hai điểm cắt mặt phẳng
Nếu đường thẳng $MN$ cắt mặt phẳng $(P)$ tại điểm $I$ thì:
$$\frac{d(M, (P))}{d(N, (P))} = \frac{IM}{IN}$$
*(Khoảng cách tỉ lệ thuận với độ dài từ điểm đến giao điểm).*

---

### 4. Khoảng cách giữa các đối tượng song song
- **Giữa hai đường thẳng song song $a$ và $b$:** $d(a, b) = d(M, b)$ với $M$ là một điểm bất kì trên $a$.
- **Giữa đường thẳng $a$ và mặt phẳng $(P)$ song song với nhau:** $d(a, (P)) = d(M, (P))$ với $M \in a$.
- **Giữa hai mặt phẳng song song $(P)$ và $(Q)$:** $d((P), (Q)) = d(M, (Q))$ với $M \in (P)$.

---

### 5. Khoảng cách giữa hai đường thẳng chéo nhau

Cho hai đường thẳng chéo nhau $a$ và $b$:
> **Đoạn vuông góc chung:** Là đoạn thẳng $MN$ có hai đầu mút $M \in a, N \in b$ và $MN \perp a, MN \perp b$.
> Độ dài $MN$ chính là khoảng cách giữa $a$ và $b$: $d(a, b) = MN$.

#### Phương pháp đưa về khoảng cách từ điểm đến mặt phẳng (Phổ biến nhất):
1. Dựng mặt phẳng $(P)$ chứa đường thẳng $b$ và song song với đường thẳng $a$.
2. Khi đó:
   $$d(a, b) = d(a, (P)) = d(M, (P)) \quad (\text{với } M \text{ là điểm thuận lợi trên } a)$$

---

## II. Phòng thí nghiệm 3D Tương tác: 2 Nét Vẽ & Đoạn Vuông Góc $AK$

Quan sát khối chóp $S.ABC$ có $SA \perp (ABC)$. Bài toán yêu cầu tính khoảng cách từ chân đường cao $A$ đến mặt bên $(SBC)$.
- Nhấp nút **"Nét 1"** để kẻ $AH \perp BC$.
- Nhấp nút **"Nét 2"** để kẻ $AK \perp SH$.
- Hãy xoay 3D để thấy rõ $AK$ vuông góc với toàn bộ mặt phẳng $(SBC)$!

<div class="interactive-3d-box" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
  <h3 style="margin-top: 0; color: #2563eb;">PHÒNG THÍ NGHIỆM 3D: QUY TẮC 2 NÉT VẼ TÌM ĐOẠN VUÔNG GÓC AK</h3>
  <p style="font-size: 0.9em; color: #64748b; margin-bottom: 12px;">
    <em>Rê chuột/vuốt màn hình để xoay quanh khối hình 3D.</em>
  </p>

  <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
    <button id="btnStep1" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: bold; cursor: pointer;">Nét 1: AH ⊥ BC</button>
    <button id="btnStep2" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: bold; cursor: pointer;">Nét 2: AK ⊥ SH (Khoảng cách d)</button>
    <button id="btnResetDist3D" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
  </div>

  <div style="position: relative; max-width: 580px; margin: 0 auto; user-select: none;">
    <svg id="svgDist3D" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.06); cursor: grab; touch-action: none;">
      <g id="gDistFaces"></g>
      <g id="gDistEdges"></g>
      <g id="gDistSteps"></g>
      <g id="gDistVertices"></g>
      <g id="gDistLabels"></g>
    </svg>
    <div style="margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
      <div>
        <label style="font-weight: bold; color: #334155;">Góc xoay ngang (Yaw): <span id="valDistYaw">38°</span></label>
        <input id="sliderDistYaw" type="range" min="-180" max="180" value="38" style="width: 100%; margin-top: 4px;">
      </div>
      <div>
        <label style="font-weight: bold; color: #334155;">Góc nghiêng đứng (Pitch): <span id="valDistPitch">20°</span></label>
        <input id="sliderDistPitch" type="range" min="-60" max="60" value="20" style="width: 100%; margin-top: 4px;">
      </div>
    </div>
  </div>
  <div id="distStatus" style="margin-top: 10px; font-size: 0.9em; font-weight: 500; color: #1e293b;">
    Nét 1: Từ chân đường cao $A$, kẻ $AH \perp BC$ (giao tuyến với mặt đáy).
  </div>
</div>

<script>
(function(){
  var yaw = 38 * Math.PI / 180;
  var pitch = 20 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;
  var step = 1;

  var V = {
    'S': [-55, 115, -35],
    'A': [-55, -50, -35],
    'B': [-30, -50, 75],
    'C': [80, -50, -10]
  };

  // AH perp BC
  var dBC = [V['C'][0] - V['B'][0], 0, V['C'][2] - V['B'][2]];
  var lenBC2 = dBC[0]*dBC[0] + dBC[2]*dBC[2];
  var dBA = [V['A'][0] - V['B'][0], 0, V['A'][2] - V['B'][2]];
  var t = (dBA[0]*dBC[0] + dBA[2]*dBC[2]) / lenBC2;
  V['H'] = [V['B'][0] + t*dBC[0], -50, V['B'][2] + t*dBC[2]];

  // AK perp SH in triangle SAH (right at A)
  // K is on SH: AK = (SA * AH) / SH
  var dSH = [V['H'][0] - V['S'][0], V['H'][1] - V['S'][1], V['H'][2] - V['S'][2]];
  var lenSH2 = dSH[0]*dSH[0] + dSH[1]*dSH[1] + dSH[2]*dSH[2];
  var dSA = [V['A'][0] - V['S'][0], V['A'][1] - V['S'][1], V['A'][2] - V['S'][2]];
  var u = (dSA[0]*dSH[0] + dSA[1]*dSH[1] + dSA[2]*dSH[2]) / lenSH2;
  V['K'] = [V['S'][0] + u*dSH[0], V['S'][1] + u*dSH[1], V['S'][2] + u*dSH[2]];

  function project(p) {
    var x = p[0], y = p[1], z = p[2];
    var x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
    var z1 = -x * Math.sin(yaw) + z * Math.cos(yaw);
    var y2 = y * Math.cos(pitch) - z1 * Math.sin(pitch);
    var z2 = y * Math.sin(pitch) + z1 * Math.cos(pitch);
    return {
      x: 270 + x1 * 1.5,
      y: 190 - y2 * 1.5,
      z: z2
    };
  }

  function render() {
    var pProj = {};
    for (var k in V) pProj[k] = project(V[k]);

    // Faces
    var basePts = pProj['A'].x+','+pProj['A'].y+' '+pProj['B'].x+','+pProj['B'].y+' '+pProj['C'].x+','+pProj['C'].y;
    var faceSBC = pProj['S'].x+','+pProj['S'].y+' '+pProj['B'].x+','+pProj['B'].y+' '+pProj['C'].x+','+pProj['C'].y;
    var htmlFaces = '<polygon points="'+basePts+'" fill="#3b82f6" fill-opacity="0.08"/>' +
                    '<polygon points="'+faceSBC+'" fill="#f59e0b" fill-opacity="0.12"/>';
    document.getElementById('gDistFaces').innerHTML = htmlFaces;

    // Edges
    var edges = [
      { p1: 'S', p2: 'A', col: '#ef4444', w: 2 },
      { p1: 'A', p2: 'B', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'A', p2: 'C', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'B', p2: 'C', col: '#2563eb', w: 2.5 },
      { p1: 'S', p2: 'B', col: '#475569', w: 2 },
      { p1: 'S', p2: 'C', col: '#475569', w: 2 }
    ];
    var htmlEdges = '';
    edges.forEach(function(e){
      var p1 = pProj[e.p1], p2 = pProj[e.p2];
      var d = e.dash ? ' stroke-dasharray="'+e.dash+'"' : '';
      htmlEdges += '<line x1="'+p1.x+'" y1="'+p1.y+'" x2="'+p2.x+'" y2="'+p2.y+'" stroke="'+e.col+'" stroke-width="'+e.w+'"'+d+' stroke-linecap="round"/>';
    });
    document.getElementById('gDistEdges').innerHTML = htmlEdges;

    // Steps
    var htmlSteps = '';
    // Net 1: AH and SH
    var pA = pProj['A'], pH = pProj['H'], pS = pProj['S'], pK = pProj['K'];
    htmlSteps += '<line x1="'+pA.x+'" y1="'+pA.y+'" x2="'+pH.x+'" y2="'+pH.y+'" stroke="#059669" stroke-width="2.5" stroke-dasharray="4,3"/>';
    htmlSteps += '<line x1="'+pS.x+'" y1="'+pS.y+'" x2="'+pH.x+'" y2="'+pH.y+'" stroke="#059669" stroke-width="2"/>';

    if (step >= 2) {
      // Net 2: AK
      htmlSteps += '<line x1="'+pA.x+'" y1="'+pA.y+'" x2="'+pK.x+'" y2="'+pK.y+'" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="5,3"/>';
      htmlSteps += '<text x="'+((pA.x+pK.x)/2 - 14)+'" y="'+((pA.y+pK.y)/2)+'" fill="#dc2626" font-weight="bold" font-size="13">d = AK</text>';
    }
    document.getElementById('gDistSteps').innerHTML = htmlSteps;

    // Vertices & labels
    var htmlVert = '';
    var htmlLabels = '';
    var showVerts = ['S', 'A', 'B', 'C', 'H'];
    if (step >= 2) showVerts.push('K');
    showVerts.forEach(function(k){
      var p = pProj[k];
      var col = (k === 'K' || k === 'A') ? '#dc2626' : '#1e293b';
      htmlVert += '<circle cx="'+p.x+'" cy="'+p.y+'" r="4.5" fill="'+col+'"/>';
      htmlLabels += '<text x="'+(p.x+8)+'" y="'+(p.y-6)+'" fill="#0f172a" font-weight="bold" font-size="14">'+k+'</text>';
    });
    document.getElementById('gDistVertices').innerHTML = htmlVert;
    document.getElementById('gDistLabels').innerHTML = htmlLabels;

    document.getElementById('valDistYaw').textContent = Math.round(yaw * 180 / Math.PI) + '°';
    document.getElementById('valDistPitch').textContent = Math.round(pitch * 180 / Math.PI) + '°';
    document.getElementById('sliderDistYaw').value = Math.round(yaw * 180 / Math.PI);
    document.getElementById('sliderDistPitch').value = Math.round(pitch * 180 / Math.PI);
  }

  var svg = document.getElementById('svgDist3D');
  svg.addEventListener('pointerdown', function(e){
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener('pointermove', function(e){
    if (!isDragging) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    yaw += dx * 0.01;
    pitch -= dy * 0.01;
    pitch = Math.max(-Math.PI/3, Math.min(Math.PI/3, pitch));
    startX = e.clientX;
    startY = e.clientY;
    render();
  });
  function stopDrag(){ isDragging = false; }
  svg.addEventListener('pointerup', stopDrag);
  svg.addEventListener('pointercancel', stopDrag);

  document.getElementById('sliderDistYaw').addEventListener('input', function(e){
    yaw = parseFloat(e.target.value) * Math.PI / 180;
    render();
  });
  document.getElementById('sliderDistPitch').addEventListener('input', function(e){
    pitch = parseFloat(e.target.value) * Math.PI / 180;
    render();
  });

  document.getElementById('btnStep1').addEventListener('click', function(){
    step = 1;
    this.style.background = '#2563eb'; this.style.color = '#fff';
    document.getElementById('btnStep2').style.background = '#ecfdf5';
    document.getElementById('btnStep2').style.color = '#047857';
    document.getElementById('distStatus').innerHTML = 'Nét 1: Từ chân đường cao $A$, kẻ $AH \\perp BC$ (giao tuyến với mặt đáy).';
    render();
  });

  document.getElementById('btnStep2').addEventListener('click', function(){
    step = 2;
    this.style.background = '#10b981'; this.style.color = '#fff';
    document.getElementById('btnStep1').style.background = '#f1f5f9';
    document.getElementById('btnStep1').style.color = '#334155';
    document.getElementById('distStatus').innerHTML = 'Nét 2: Nối $SH$, kẻ $AK \\perp SH$. Khi đó $AK \\perp (SBC) \\implies d(A, (SBC)) = AK$!';
    render();
  });

  document.getElementById('btnResetDist3D').addEventListener('click', function(){
    yaw = 38 * Math.PI / 180;
    pitch = 20 * Math.PI / 180;
    step = 1;
    document.getElementById('btnStep1').style.background = '#2563eb';
    document.getElementById('btnStep1').style.color = '#fff';
    document.getElementById('btnStep2').style.background = '#ecfdf5';
    document.getElementById('btnStep2').style.color = '#047857';
    render();
  });

  render();
})();
</script>

---

## III. Các Dạng Toán Điển Hình và Tuyệt Chiêu Giải Nhanh

### Dạng 1: Khoảng cách từ chân đường vuông góc đến mặt phẳng bên

---

#### Ví dụ 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Cạnh bên $SA \perp (ABCD)$ và $SA = a\sqrt{2}$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$.

**Lời giải chi tiết:**
1. **Tìm giao tuyến:** Mặt phẳng $(SBD)$ cắt mặt phẳng đáy $(ABCD)$ theo giao tuyến $BD$.
2. **Nét 1:** Từ chân đường vuông góc $A$, hạ vuông góc xuống giao tuyến $BD$:
   - Do $ABCD$ là hình vuông tâm $O$ nên $AC \perp BD$ tại $O$.
   - Do đó $AO \perp BD$ (chính là nét 1, với $H \equiv O$).
3. **Nét 2:** Nối $SO$. Trong tam giác vuông $SAO$ (vuông tại $A$), kẻ $AK \perp SO$ tại $K$.
4. **Chứng minh $AK \perp (SBD)$:**
   - Ta có $BD \perp AO$ và $BD \perp SA \implies BD \perp (SAO) \implies BD \perp AK$.
   - Mặt khác $AK \perp SO$.
   - Vậy $AK \perp (SBD) \implies d(A, (SBD)) = AK$.
5. **Tính độ dài $AK$:**
   - Vì $ABCD$ là hình vuông cạnh $a$ nên $AC = a\sqrt{2} \implies AO = \dfrac{a\sqrt{2}}{2}$.
   - Áp dụng hệ thức lượng trong tam giác vuông $SAO$:
     $$\frac{1}{AK^2} = \frac{1}{SA^2} + \frac{1}{AO^2} = \frac{1}{(a\sqrt{2})^2} + \frac{1}{\left(\frac{a\sqrt{2}}{2}\right)^2} = \frac{1}{2a^2} + \frac{2}{a^2} = \frac{5}{2a^2}$$
     $$\implies AK = \sqrt{\frac{2a^2}{5}} = \frac{a\sqrt{10}}{5}$$
6. Vậy khoảng cách cần tìm là $d(A, (SBD)) = \dfrac{a\sqrt{10}}{5}$.

---

### Dạng 2: Khoảng cách từ một điểm bất kì (Kỹ thuật đổi điểm)

---

#### Ví dụ 2:
Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $AB = a, BC = a\sqrt{3}$. Cạnh bên $SA \perp (ABC)$ và $SA = 2a$. Gọi $M$ là trung điểm của cạnh $AC$. Tính khoảng cách từ điểm $M$ đến mặt phẳng $(SBC)$.

**Lời giải chi tiết:**
1. **Bước 1: Tính khoảng cách từ chân đường cao $A$ đến $(SBC)$:**
   - Ta có $BC \perp AB$ và $BC \perp SA \implies BC \perp (SAB)$.
   - Do đó $(SBC) \perp (SAB)$ theo giao tuyến $SB$.
   - Trong tam giác vuông $SAB$, kẻ $AH \perp SB$ tại $H$.
   - Khi đó $AH \perp (SBC) \implies d(A, (SBC)) = AH$.
   - Tính $AH$:
     $$\frac{1}{AH^2} = \frac{1}{SA^2} + \frac{1}{AB^2} = \frac{1}{(2a)^2} + \frac{1}{a^2} = \frac{1}{4a^2} + \frac{1}{a^2} = \frac{5}{4a^2} \implies AH = \frac{2a}{\sqrt{5}} = \frac{2a\sqrt{5}}{5}$$

2. **Bước 2: Dùng kĩ thuật đổi điểm từ $M$ về $A$:**
   - Nối $M$ với $A$, đường thẳng $MA$ chính là đường thẳng $AC$.
   - Đường thẳng $AC$ cắt mặt phẳng $(SBC)$ tại điểm $C$.
   - Tỉ số khoảng cách:
     $$\frac{d(M, (SBC))}{d(A, (SBC))} = \frac{MC}{AC}$$
   - Vì $M$ là trung điểm của $AC$ nên $\dfrac{MC}{AC} = \dfrac{1}{2}$.
   - Do đó:
     $$d(M, (SBC)) = \frac{1}{2} d(A, (SBC)) = \frac{1}{2} \cdot \frac{2a\sqrt{5}}{5} = \frac{a\sqrt{5}}{5} .$$

---

### Dạng 3: Khoảng cách giữa hai đường thẳng chéo nhau

---

#### Ví dụ 3:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \perp (ABCD)$ và $SA = a$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SC$ và $BD$.

**Lời giải chi tiết:**
1. **Dựng mặt phẳng chứa $BD$ và song song với $SC$:**
   - Gọi $O$ là tâm hình vuông $ABCD$. Trong $\triangle SAC$, gọi $O$ là trung điểm $AC$.
   - Lấy $I$ là trung điểm của $SA$. Khi đó $OI$ là đường trung bình của $\triangle SAC \implies OI \parallel SC$.
   - Mặt phẳng $(IBD)$ chứa $BD$ và $OI \parallel SC$, do đó $SC \parallel (IBD)$.
2. **Chuyển khoảng cách hai đường về khoảng cách từ điểm đến mặt phẳng:**
   $$d(SC, BD) = d(SC, (IBD)) = d(C, (IBD))$$
3. **Đổi điểm từ $C$ về $A$:**
   - Đường thẳng $CA$ cắt mặt phẳng $(IBD)$ tại tâm $O$.
   - Vì $O$ là trung điểm của $AC$ nên $d(C, (IBD)) = d(A, (IBD))$.
4. **Tính $d(A, (IBD))$:**
   - Tứ diện $A.IBD$ có $AB, AD, AI$ đôi một vuông góc tại $A$!
   - Thật vậy: $AB \perp AD$, $AI \perp AB$ và $AI \perp AD$ (do $I \in SA \perp (ABCD)$).
   - Độ dài: $AB = AD = a$, $AI = \dfrac{SA}{2} = \dfrac{a}{2}$.
   - Áp dụng hệ thức lượng tứ diện vuông cho đường cao $h = d(A, (IBD))$:
     $$\frac{1}{h^2} = \frac{1}{AI^2} + \frac{1}{AB^2} + \frac{1}{AD^2} = \frac{1}{\left(\frac{a}{2}\right)^2} + \frac{1}{a^2} + \frac{1}{a^2} = \frac{4}{a^2} + \frac{1}{a^2} + \frac{1}{a^2} = \frac{6}{a^2}$$
     $$\implies h = \frac{a}{\sqrt{6}} = \frac{a\sqrt{6}}{6}$$
5. Vậy khoảng cách giữa $SC$ và $BD$ bằng $\dfrac{a\sqrt{6}}{6}$.

---

## IV. Bài tập Trắc nghiệm Tự luyện (Chấm điểm Tức thì)

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Luyện tập Trắc nghiệm Toàn diện Bài 26</h3>

<div class="quiz-item" data-quiz="tn1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách từ điểm $A$ đến mặt phẳng $(A'B'C'D')$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn1" value="A"> A. $a\sqrt{2}$.</label><br>
    <label><input type="radio" name="tn1" value="B"> B. $a$.</label><br>
    <label><input type="radio" name="tn1" value="C"> C. $a\sqrt{3}$.</label><br>
    <label><input type="radio" name="tn1" value="D"> D. $\dfrac{a}{2}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Vì $AA' \perp (A'B'C'D')$ nên $d(A, (A'B'C'D')) = AA' = a$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Cho hình chóp $S.ABC$ có $SA \perp (ABC)$, đáy $ABC$ vuông tại $B$. Cạnh $SA = a, AB = a$. Khoảng cách từ $A$ đến mặt phẳng $(SBC)$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn2" value="A"> A. $\dfrac{a\sqrt{2}}{2}$.</label><br>
    <label><input type="radio" name="tn2" value="B"> B. $a\sqrt{2}$.</label><br>
    <label><input type="radio" name="tn2" value="C"> C. $a$.</label><br>
    <label><input type="radio" name="tn2" value="D"> D. $\dfrac{a}{2}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Vì $BC \perp (SAB)$ nên kẻ $AH \perp SB \implies AH \perp (SBC)$. Tam giác $SAB$ vuông cân tại $A$ cạnh $a \implies AH = \dfrac{a\sqrt{2}}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai mặt phẳng $(ABCD)$ và $(A'B'C'D')$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn3" value="A"> A. $a$.</label><br>
    <label><input type="radio" name="tn3" value="B"> B. $a\sqrt{2}$.</label><br>
    <label><input type="radio" name="tn3" value="C"> C. $a\sqrt{3}$.</label><br>
    <label><input type="radio" name="tn3" value="D"> D. $2a$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Đoạn vuông góc chung nối hai đáy chính là cạnh bên $AA' = a$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \perp (ABCD)$. Gọi $M$ là trung điểm của $CD$. Khoảng cách từ $M$ đến mặt phẳng $(SAB)$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn4" value="A"> A. $a$.</label><br>
    <label><input type="radio" name="tn4" value="B"> B. $\dfrac{a}{2}$.</label><br>
    <label><input type="radio" name="tn4" value="C"> C. $a\sqrt{2}$.</label><br>
    <label><input type="radio" name="tn4" value="D"> D. $\dfrac{a\sqrt{2}}{2}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Vì $CD \parallel AB \subset (SAB) \implies CD \parallel (SAB)$. Do đó $d(M, (SAB)) = d(D, (SAB)) = DA = a$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Cho hình chóp $S.ABC$ có $SA \perp (ABC)$, tam giác $ABC$ đều cạnh $a$, $SA = a$. Khoảng cách từ $A$ đến đường thẳng $BC$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn5" value="A"> A. $\dfrac{a\sqrt{3}}{2}$.</label><br>
    <label><input type="radio" name="tn5" value="B"> B. $\dfrac{a}{2}$.</label><br>
    <label><input type="radio" name="tn5" value="C"> C. $a$.</label><br>
    <label><input type="radio" name="tn5" value="D"> D. $a\sqrt{3}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Vì $A, B, C$ cùng nằm trong mặt phẳng $(ABC)$, khoảng cách từ $A$ đến $BC$ chính là độ dài đường cao trong tam giác đều cạnh $a$, bằng $\dfrac{a\sqrt{3}}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn6" style="margin-bottom: 16px;">
  <p><strong>Câu 6:</strong> Cho tam giác $ABC$ có diện tích bằng $S$ và nằm trong mặt phẳng $(P)$. Điểm $S$ không thuộc $(P)$ có khoảng cách đến $(P)$ là $h$. Thể tích khối chóp $S.ABC$ tính theo $S$ và $h$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn6" value="A"> A. $V = S \cdot h$.</label><br>
    <label><input type="radio" name="tn6" value="B"> B. $V = \dfrac{1}{3} S \cdot h$.</label><br>
    <label><input type="radio" name="tn6" value="C"> C. $V = \dfrac{1}{2} S \cdot h$.</label><br>
    <label><input type="radio" name="tn6" value="D"> D. $V = \dfrac{1}{6} S \cdot h$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Thể tích hình chóp bằng một phần ba diện tích đáy nhân chiều cao (chiều cao chính là khoảng cách từ đỉnh đến đáy).
  </div>
</div>

<div class="quiz-item" data-quiz="tn7" style="margin-bottom: 16px;">
  <p><strong>Câu 7:</strong> Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Khoảng cách giữa hai đường thẳng $AB$ và $C'D'$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn7" value="A"> A. $5$.</label><br>
    <label><input type="radio" name="tn7" value="B"> B. $\sqrt{41}$.</label><br>
    <label><input type="radio" name="tn7" value="C"> C. $4$.</label><br>
    <label><input type="radio" name="tn7" value="D"> D. $3$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Vì $AB \parallel CD \parallel C'D'$, ta xét mặt phẳng $(ABC'D')$ chứa cả $AB$ và $C'D'$. Khoảng cách giữa hai đường thẳng song song này bằng độ dài $AD' = \sqrt{AD^2 + DD'^2} = \sqrt{4^2 + 5^2} = \sqrt{41}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn8" style="margin-bottom: 16px;">
  <p><strong>Câu 8:</strong> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai đường thẳng $AA'$ và $BD$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn8" value="A"> A. $a$.</label><br>
    <label><input type="radio" name="tn8" value="B"> B. $\dfrac{a\sqrt{2}}{2}$.</label><br>
    <label><input type="radio" name="tn8" value="C"> C. $a\sqrt{2}$.</label><br>
    <label><input type="radio" name="tn8" value="D"> D. $\dfrac{a}{2}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Ta có $AA' \perp (ABCD)$. Kẻ từ tâm $O$ của hình vuông $ABCD$: $AO \perp BD$ và $AO \subset (ABCD) \implies AO \perp AA'$. Vậy $AO$ chính là đoạn vuông góc chung, có độ dài bằng $\dfrac{a\sqrt{2}}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn9" style="margin-bottom: 16px;">
  <p><strong>Câu 9:</strong> Cho tứ diện đều $ABCD$ cạnh $a$. Khoảng cách giữa hai cạnh đối diện bất kì (ví dụ $AB$ và $CD$) bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn9" value="A"> A. $\dfrac{a\sqrt{2}}{2}$.</label><br>
    <label><input type="radio" name="tn9" value="B"> B. $\dfrac{a\sqrt{3}}{2}$.</label><br>
    <label><input type="radio" name="tn9" value="C"> C. $\dfrac{a\sqrt{6}}{3}$.</label><br>
    <label><input type="radio" name="tn9" value="D"> D. $\dfrac{a}{2}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Đoạn $MN$ là đoạn vuông góc chung. Ta có $AN = \dfrac{a\sqrt{3}}{2}, AM = \dfrac{a}{2} \implies MN = \sqrt{AN^2 - AM^2} = \sqrt{\frac{3a^2}{4} - \frac{a^2}{4}} = \frac{a\sqrt{2}}{2}$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn10" style="margin-bottom: 16px;">
  <p><strong>Câu 10:</strong> Cho điểm $M$ cách mặt phẳng $(P)$ một khoảng bằng $4$. Điểm $A \in (P)$. Độ dài đoạn thẳng $MA$ không thể nhận giá trị nào sau đây?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn10" value="A"> A. $3$.</label><br>
    <label><input type="radio" name="tn10" value="B"> B. $4$.</label><br>
    <label><input type="radio" name="tn10" value="C"> C. $5$.</label><br>
    <label><input type="radio" name="tn10" value="D"> D. $10$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Khoảng cách là độ dài đoạn vuông góc ngắn nhất ($MA \ge d(M, (P)) = 4$), do đó $MA$ không thể bằng 3.
  </div>
</div>

<button id="btnCheckTN" style="background:#2563eb; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:bold; cursor:pointer;">Nộp bài & Xem điểm</button>
<span id="tnScore" style="margin-left: 15px; font-weight: bold; color: #1e293b;"></span>
</div>

<script>
document.getElementById('btnCheckKD').addEventListener('click', function(){
  var items = document.querySelectorAll('.quiz-item[data-quiz^="kd"]');
  items.forEach(function(item){
    var expl = item.querySelector('.quiz-explanation');
    if (expl) expl.style.display = 'block';
  });
});

document.getElementById('btnCheckTN').addEventListener('click', function(){
  var correct = {
    tn1: 'B', tn2: 'A', tn3: 'A', tn4: 'A', tn5: 'A',
    tn6: 'B', tn7: 'B', tn8: 'B', tn9: 'A', tn10: 'A'
  };
  var score = 0;
  var total = Object.keys(correct).length;
  for (var q in correct) {
    var sel = document.querySelector('input[name="'+q+'"]:checked');
    var item = document.querySelector('.quiz-item[data-quiz="'+q+'"]');
    var expl = item.querySelector('.quiz-explanation');
    if (sel && sel.value === correct[q]) {
      score++;
      item.style.borderLeft = '4px solid #10b981';
    } else {
      item.style.borderLeft = '4px solid #ef4444';
    }
    if (expl) expl.style.display = 'block';
  }
  var res = document.getElementById('tnScore');
  res.textContent = 'Kết quả: ' + score + '/' + total + ' câu đúng (' + Math.round(score/total*100) + '%)';
  res.style.color = score >= 8 ? '#15803d' : (score >= 5 ? '#b45309' : '#b91c1c');
});
</script>

---

## V. Ứng dụng Thực tiễn: Hành lang An toàn Lưới điện Cao thế 500kV

Trong ngành điện lực, đường dây tải điện 500kV Bắc - Nam chạy qua nhiều đồi núi hiểm trở và khu dân cư. Hiện tượng phóng điện đánh thủng không khí có thể xảy ra ngay cả khi không chạm trực tiếp vào dây điện nếu khoảng cách nhỏ hơn ngưỡng an toàn.

Nghị định quy định nghiêm ngặt: khoảng cách tối thiểu từ điểm võng thấp nhất của dây dẫn cao thế đến mặt đất hoặc ngọn cây cao nhất trong hành lang an toàn không được nhỏ hơn $6\text{ m}$ (đối với cấp điện áp 500kV). Các kỹ sư truyền tải điện sử dụng máy bay không người lái (drone) trang bị cảm biến LiDAR 3D để quét đám mây điểm (Point Cloud), liên tục đo khoảng cách từ đường dây cong trên không đến các vật cản bên dưới nhằm kịp thời chặt tỉa cây cối và phòng ngừa sự cố chập điện.
