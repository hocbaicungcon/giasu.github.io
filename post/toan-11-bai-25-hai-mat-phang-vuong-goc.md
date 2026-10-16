---
title: "Toán 11 Bài 25: Hai mặt phẳng vuông góc - Lý thuyết và Bài tập chi tiết"
description: "Chinh phục góc giữa hai mặt phẳng, công thức diện tích hình chiếu, điều kiện và tính chất hai mặt phẳng vuông góc, hình lăng trụ đứng và chóp đều. Kèm mô hình không gian 3D tương tác xoay đa chiều và trắc nghiệm tự chấm."
category: Toán học
type: Bài học
date: "2026-10-16"
tags:
  - Toán học
  - Toán 11
  - Hình học không gian
  - Hai mặt phẳng vuông góc
  - Góc giữa hai mặt phẳng
  - Diện tích hình chiếu
  - Hình chóp đều
---

# Toán 11 Bài 25: Hai mặt phẳng vuông góc

Hãy nhìn vào góc tường của căn phòng em đang ngồi: hai bức tường kề nhau hoặc bức tường và sàn nhà luôn tạo thành một góc $90^\circ$ hoàn hảo. Nếu các mặt phẳng này không vuông góc với nhau, trần nhà sẽ bị vẹo và kết cấu tòa nhà sẽ chịu biến dạng nguy hiểm.

Trong chương trình hình học 11, **Hai mặt phẳng vuông góc** là một trong những chủ đề xuất hiện với tần suất dày đặc nhất trong các bài thi. Đặc biệt, định lí về đường cao nằm trong mặt phẳng bên vuông góc với đáy chính là "chìa khóa vàng" giúp giải quyết nhanh gọn hơn 80% các bài toán thể tích và khoảng cách!

---

## Sơ đồ Tư duy: Góc giữa Hai Mặt phẳng & Quan hệ Vuông góc

```mermaid
flowchart TD
    A["Hai mặt phẳng (P) và (Q)"] --> B["Góc giữa hai mặt phẳng: phi = ((P), (Q))"]
    B --> B1["Quy ước: 0° ≤ phi ≤ 90°"]
    B --> B2["Cách dựng kinh điển:<br/>1. Giao tuyến c = (P) ∩ (Q)<br/>2. Lấy I ∈ c, kẻ a ⊥ c trong (P), b ⊥ c trong (Q)<br/>=> phi = (a, b)"]
    B --> B3["Công thức diện tích hình chiếu:<br/>S' = S . cos(phi)"]
    
    A --> C{"phi = 90°?"}
    C -->|Đúng| D["(P) vuông góc với (Q) - Kí hiệu: (P) ⊥ (Q)"]
    
    D --> E["ĐIỀU KIỆN NHẬN BIẾT:<br/>(P) chứa đường thẳng d ⊥ (Q) => (P) ⊥ (Q)"]
    
    D --> F["TÍNH CHẤT VÀNG TÌM ĐƯỜNG CAO:<br/>(P) ⊥ (Q) cắt nhau theo giao tuyến d<br/>Đường nào nằm trong (P) mà ⊥ d<br/>thì VUÔNG GÓC VỚI (Q)"]
    
    D --> G["GIAO TUYẾN VUÔNG GÓC:<br/>(P) ⊥ (R) và (Q) ⊥ (R) => Giao tuyến d ⊥ (R)"]
    
    style A fill:#eff6ff,stroke:#2563eb,stroke-width:2px;
    style B2 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px;
    style D fill:#ecfdf5,stroke:#10b981,stroke-width:2px;
    style F fill:#fef2f2,stroke:#ef4444,stroke-width:2px;
```

---

## Khởi động Nhanh: 5 Câu Hỏi Trắc nghiệm Đầu Giờ

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Khởi động: Nhận diện Nhanh Góc và Tính chất</h3>

<div class="quiz-item" data-quiz="kd1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Góc giữa hai mặt phẳng có thể nhận giá trị trong khoảng nào?</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd1" value="A"> A. $[0^\circ; 180^\circ]$.</label><br>
    <label><input type="radio" name="kd1" value="B"> B. $[0^\circ; 90^\circ]$.</label><br>
    <label><input type="radio" name="kd1" value="C"> C. $(0^\circ; 90^\circ)$.</label><br>
    <label><input type="radio" name="kd1" value="D"> D. $[0^\circ; 360^\circ]$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Tương tự như góc giữa hai đường thẳng, góc giữa hai mặt phẳng luôn là góc không tù: $0^\circ \le ((P), (Q)) \le 90^\circ$. Khi hai mặt phẳng song song hoặc trùng nhau thì góc bằng $0^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="kd2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Điều kiện để mặt phẳng $(P)$ vuông góc với mặt phẳng $(Q)$ là:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd2" value="A"> A. $(P)$ chứa một đường thẳng vuông góc với $(Q)$.</label><br>
    <label><input type="radio" name="kd2" value="B"> B. Mọi đường thẳng trong $(P)$ đều vuông góc với $(Q)$.</label><br>
    <label><input type="radio" name="kd2" value="C"> C. $(P)$ cắt $(Q)$ theo một góc nhọn.</label><br>
    <label><input type="radio" name="kd2" value="D"> D. Có một đường thẳng trong $(P)$ song song với một đường thẳng trong $(Q)$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Điều kiện đủ để hai mặt phẳng vuông góc là mặt phẳng này chứa một đường thẳng vuông góc với mặt phẳng kia.
  </div>
</div>

<div class="quiz-item" data-quiz="kd3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Cho hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau và cắt nhau theo giao tuyến $d$. Nếu đường thẳng $a \subset (P)$ và $a \perp d$ thì:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd3" value="A"> A. $a \parallel (Q)$.</label><br>
    <label><input type="radio" name="kd3" value="B"> B. $a \perp (Q)$.</label><br>
    <label><input type="radio" name="kd3" value="C"> C. $a \subset (Q)$.</label><br>
    <label><input type="radio" name="kd3" value="D"> D. $a$ tạo với $(Q)$ góc $45^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Đây là định lí tính chất cốt lõi: một đường thẳng nằm trong một mặt phẳng và vuông góc với giao tuyến thì vuông góc với mặt phẳng còn lại.
  </div>
</div>

<div class="quiz-item" data-quiz="kd4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Cho đa giác $H$ có diện tích $S$ nằm trong $(P)$ và hình chiếu vuông góc của nó lên $(Q)$ là $H'$ có diện tích $S'$. Gọi $\varphi$ là góc giữa $(P)$ và $(Q)$. Công thức nào sau đây đúng?</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd4" value="A"> A. $S = S' \cdot \cos \varphi$.</label><br>
    <label><input type="radio" name="kd4" value="B"> B. $S' = S \cdot \cos \varphi$.</label><br>
    <label><input type="radio" name="kd4" value="C"> C. $S' = S \cdot \sin \varphi$.</label><br>
    <label><input type="radio" name="kd4" value="D"> D. $S' = \dfrac{S}{\cos \varphi}$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Công thức diện tích hình chiếu là $S' = S \cdot \cos \varphi$ (vì hình chiếu bị co lại theo phương vuông góc với giao tuyến bởi tỉ số $\cos \varphi \le 1$).
  </div>
</div>

<div class="quiz-item" data-quiz="kd5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Hình chóp đều là hình chóp có:</p>
  <div class="quiz-options">
    <label><input type="radio" name="kd5" value="A"> A. Đáy là đa giác đều và tất cả các cạnh bằng nhau.</label><br>
    <label><input type="radio" name="kd5" value="B"> B. Đáy là đa giác đều và chân đường cao trùng với tâm của đáy.</label><br>
    <label><input type="radio" name="kd5" value="C"> C. Các mặt bên là tam giác vuông bằng nhau.</label><br>
    <label><input type="radio" name="kd5" value="D"> D. Các cạnh bên đôi một vuông góc.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Định nghĩa hình chóp đều: có đáy là đa giác đều và chân đường cao hạ từ đỉnh trùng với tâm đường tròn ngoại tiếp của đa giác đáy.
  </div>
</div>

<button id="btnCheckKD" style="background:#2563eb; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:bold; cursor:pointer;">Kiểm tra đáp án Khởi động</button>
</div>

---

## I. Lý thuyết Trọng tâm

### 1. Góc giữa hai mặt phẳng
> **Định nghĩa:** Góc giữa hai mặt phẳng là góc giữa hai đường thẳng lần lượt vuông góc với hai mặt phẳng đó.

#### Cách xác định góc giữa hai mặt phẳng cắt nhau $(P)$ và $(Q)$ (Phương pháp chuẩn 3 bước):
1. **Bước 1 (Tìm giao tuyến):** Xác định giao tuyến $c = (P) \cap (Q)$.
2. **Bước 2 (Dựng hai đường cùng vuông góc giao tuyến):**
   - Lấy một điểm $I \in c$.
   - Trong mặt phẳng $(P)$, kẻ đường thẳng $a \perp c$ tại $I$.
   - Trong mặt phẳng $(Q)$, kẻ đường thẳng $b \perp c$ tại $I$.
3. **Bước 3 (Kết luận góc):**
   $$((P), (Q)) = (a, b) = \varphi \quad (0^\circ \le \varphi \le 90^\circ)$$

---

### 2. Công thức diện tích hình chiếu
> **Định lí:** Cho đa giác $H$ nằm trong mặt phẳng $(P)$ có diện tích $S$. Gọi $H'$ là hình chiếu vuông góc của $H$ lên mặt phẳng $(Q)$ có diện tích $S'$, và $\varphi$ là góc giữa $(P)$ và $(Q)$. Khi đó:
> $$S' = S \cdot \cos \varphi \iff \cos \varphi = \frac{S'}{S}$$

*Ứng dụng:* Thay vì phải dựng hình chiếu và kẻ các đường phụ phức tạp để tìm góc giữa hai mặt phẳng, ta có thể tính diện tích hình gốc $S$ và diện tích hình chiếu phẳng $S'$, sau đó lấy tỉ số $\cos \varphi = \dfrac{S'}{S}$.

---

### 3. Hai mặt phẳng vuông góc

> **Định nghĩa:** Hai mặt phẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng $90^\circ$. Kí hiệu: $(P) \perp (Q)$.

#### Điều kiện để hai mặt phẳng vuông góc (Định lí nhận biết):
> **Định lí 1:** Nếu một mặt phẳng chứa một đường thẳng vuông góc với một mặt phẳng khác thì hai mặt phẳng đó vuông góc với nhau.
> $$\begin{cases} d \subset (P) \\ d \perp (Q) \end{cases} \implies (P) \perp (Q)$$

#### Các tính chất trọng tâm:
> **Tính chất 1 (Hạ đường cao từ mặt phẳng vuông góc):**
> Nếu hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau thì bất kì đường thẳng nào nằm trong $(P)$ mà vuông góc với giao tuyến của chúng thì sẽ vuông góc với $(Q)$.
> $$\begin{cases} (P) \perp (Q) \\ (P) \cap (Q) = d \\ a \subset (P), a \perp d \end{cases} \implies a \perp (Q)$$

> **Tính chất 2 (Giao tuyến của hai mặt phẳng cùng vuông góc):**
> Nếu hai mặt phẳng cắt nhau cùng vuông góc với một mặt phẳng thứ ba thì giao tuyến của chúng cũng vuông góc với mặt phẳng thứ ba đó.
> $$\begin{cases} (P) \perp (R) \\ (Q) \perp (R) \\ (P) \cap (Q) = d \end{cases} \implies d \perp (R)$$

---

### 4. Các khối hình đặc biệt

1. **Hình lăng trụ đứng:** Là hình lăng trụ có các cạnh bên vuông góc với các mặt phẳng đáy.
   - Các mặt bên của lăng trụ đứng là các hình chữ nhật.
   - Các mặt bên luôn vuông góc với mặt phẳng đáy.
2. **Hình lăng trụ đều:** Là hình lăng trụ đứng có đáy là đa giác đều.
3. **Hình hộp chữ nhật & Hình lập phương:**
   - Hình hộp chữ nhật là lăng trụ đứng có đáy là hình chữ nhật (6 mặt là hình chữ nhật).
   - Hình lập phương là hình hộp chữ nhật có tất cả 12 cạnh bằng nhau (6 mặt là hình vuông).
4. **Hình chóp đều:**
   - Đáy là đa giác đều.
   - Chân đường cao trùng với tâm của đáy ($SO \perp (\text{đáy})$ với $O$ là tâm đáy).
   - Các cạnh bên bằng nhau và tạo với đáy các góc bằng nhau.
   - Các mặt bên là các tam giác cân bằng nhau và tạo với đáy các góc bằng nhau.

---

## II. Phòng thí nghiệm 3D Tương tác: Góc giữa Mặt Bên và Mặt Đáy

Khám phá mô hình hình chóp tam giác $S.ABC$ có $SA \perp (ABC)$ đáy tam giác thường.
Giao tuyến giữa mặt bên $(SBC)$ và mặt đáy $(ABC)$ là đường thẳng $BC$. 
- Từ chân đường cao $A$, ta hạ $AH \perp BC$.
- Nối $SH$, theo định lí ba đường vuông góc ta có ngay $SH \perp BC$.
- Góc phẳng nhị diện giữa mặt bên $(SBC)$ và mặt đáy $(ABC)$ chính là góc $\widehat{SHA}$!

<div class="interactive-3d-box" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
  <h3 style="margin-top: 0; color: #2563eb;">PHÒNG THÍ NGHIỆM 3D: DỰNG GÓC GIỮA MẶT BÊN VÀ MẶT ĐÁY</h3>
  <p style="font-size: 0.9em; color: #64748b; margin-bottom: 12px;">
    <em>Kéo rê chuột/ngón tay để xoay quanh khối hình trong không gian 3D.</em>
  </p>

  <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
    <button id="btnShowAnglePlane" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: bold; cursor: pointer;">Hiện góc nhị diện ∠SHA</button>
    <button id="btnShowCutPlane" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: bold; cursor: pointer;">Hiện mặt phẳng cắt (SAH) ⊥ BC</button>
    <button id="btnResetDihedral" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
  </div>

  <div style="position: relative; max-width: 580px; margin: 0 auto; user-select: none;">
    <svg id="svgDihedral3D" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.06); cursor: grab; touch-action: none;">
      <g id="gDihedralFaces"></g>
      <g id="gDihedralCut"></g>
      <g id="gDihedralEdges"></g>
      <g id="gDihedralMarks"></g>
      <g id="gDihedralVertices"></g>
      <g id="gDihedralLabels"></g>
    </svg>
    <div style="margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
      <div>
        <label style="font-weight: bold; color: #334155;">Góc xoay ngang (Yaw): <span id="valDihedralYaw">35°</span></label>
        <input id="sliderDihedralYaw" type="range" min="-180" max="180" value="35" style="width: 100%; margin-top: 4px;">
      </div>
      <div>
        <label style="font-weight: bold; color: #334155;">Góc nghiêng đứng (Pitch): <span id="valDihedralPitch">25°</span></label>
        <input id="sliderDihedralPitch" type="range" min="-60" max="60" value="25" style="width: 100%; margin-top: 4px;">
      </div>
    </div>
  </div>
  <div id="dihedralStatus" style="margin-top: 10px; font-size: 0.9em; font-weight: 500; color: #1e293b;">
    Giao tuyến là $BC$. Kẻ $AH \perp BC$, nối $SH \perp BC \implies$ góc cần tìm là $\widehat{SHA}$!
  </div>
</div>

<script>
(function(){
  var yaw = 35 * Math.PI / 180;
  var pitch = 25 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;
  var showCut = false;

  var V = {
    'S': [-50, 115, -40],
    'A': [-50, -50, -40],
    'B': [-30, -50, 70],
    'C': [80, -50, -10]
  };

  // Calculate H on BC such that AH perp BC
  // B = (-30, -50, 70), C = (80, -50, -10)
  // Vector BC = (110, 0, -80)
  // AH perp BC => (H - A) . BC = 0
  // H = B + t*BC => t = ((A - B) . BC) / |BC|^2
  var dBC = [V['C'][0] - V['B'][0], 0, V['C'][2] - V['B'][2]];
  var lenBC2 = dBC[0]*dBC[0] + dBC[2]*dBC[2];
  var dBA = [V['A'][0] - V['B'][0], 0, V['A'][2] - V['B'][2]];
  var t = (dBA[0]*dBC[0] + dBA[2]*dBC[2]) / lenBC2;
  V['H'] = [V['B'][0] + t*dBC[0], -50, V['B'][2] + t*dBC[2]];

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
    var htmlFaces = '';
    var basePts = pProj['A'].x+','+pProj['A'].y+' '+pProj['B'].x+','+pProj['B'].y+' '+pProj['C'].x+','+pProj['C'].y;
    htmlFaces += '<polygon points="'+basePts+'" fill="#3b82f6" fill-opacity="0.08"/>';
    var faceSBC = pProj['S'].x+','+pProj['S'].y+' '+pProj['B'].x+','+pProj['B'].y+' '+pProj['C'].x+','+pProj['C'].y;
    htmlFaces += '<polygon points="'+faceSBC+'" fill="#f59e0b" fill-opacity="0.1"/>';
    document.getElementById('gDihedralFaces').innerHTML = htmlFaces;

    // Cut plane SAH
    var htmlCut = '';
    if (showCut) {
      var cutPts = pProj['S'].x+','+pProj['S'].y+' '+pProj['A'].x+','+pProj['A'].y+' '+pProj['H'].x+','+pProj['H'].y;
      htmlCut += '<polygon points="'+cutPts+'" fill="#10b981" fill-opacity="0.25" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>';
    }
    document.getElementById('gDihedralCut').innerHTML = htmlCut;

    // Edges
    var edges = [
      { p1: 'S', p2: 'A', col: '#ef4444', w: 2.5 },
      { p1: 'A', p2: 'B', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'A', p2: 'C', col: '#64748b', w: 1.5, dash: '4,4' },
      { p1: 'B', p2: 'C', col: '#2563eb', w: 3 }, // Giao tuyen BC
      { p1: 'S', p2: 'B', col: '#475569', w: 2 },
      { p1: 'S', p2: 'C', col: '#475569', w: 2 },
      { p1: 'A', p2: 'H', col: '#10b981', w: 2.5, dash: '4,4' }, // AH
      { p1: 'S', p2: 'H', col: '#10b981', w: 2.5 } // SH
    ];
    var htmlEdges = '';
    edges.forEach(function(e){
      var p1 = pProj[e.p1], p2 = pProj[e.p2];
      var d = e.dash ? ' stroke-dasharray="'+e.dash+'"' : '';
      htmlEdges += '<line x1="'+p1.x+'" y1="'+p1.y+'" x2="'+p2.x+'" y2="'+p2.y+'" stroke="'+e.col+'" stroke-width="'+e.w+'"'+d+' stroke-linecap="round"/>';
    });
    document.getElementById('gDihedralEdges').innerHTML = htmlEdges;

    // Angle Arc at H
    var pH = pProj['H'];
    var htmlMarks = '';
    htmlMarks += '<circle cx="'+pH.x+'" cy="'+pH.y+'" r="16" fill="none" stroke="#dc2626" stroke-width="2.5"/>';
    htmlMarks += '<text x="'+(pH.x+12)+'" y="'+(pH.y-10)+'" fill="#dc2626" font-size="13" font-weight="bold">∠SHA</text>';
    document.getElementById('gDihedralMarks').innerHTML = htmlMarks;

    // Vertices & labels
    var htmlVert = '';
    var htmlLabels = '';
    for (var k in pProj) {
      var p = pProj[k];
      htmlVert += '<circle cx="'+p.x+'" cy="'+p.y+'" r="4.5" fill="#1e293b"/>';
      htmlLabels += '<text x="'+(p.x+8)+'" y="'+(p.y-6)+'" fill="#0f172a" font-weight="bold" font-size="14">'+k+'</text>';
    }
    document.getElementById('gDihedralVertices').innerHTML = htmlVert;
    document.getElementById('gDihedralLabels').innerHTML = htmlLabels;

    document.getElementById('valDihedralYaw').textContent = Math.round(yaw * 180 / Math.PI) + '°';
    document.getElementById('valDihedralPitch').textContent = Math.round(pitch * 180 / Math.PI) + '°';
    document.getElementById('sliderDihedralYaw').value = Math.round(yaw * 180 / Math.PI);
    document.getElementById('sliderDihedralPitch').value = Math.round(pitch * 180 / Math.PI);
  }

  var svg = document.getElementById('svgDihedral3D');
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

  document.getElementById('sliderDihedralYaw').addEventListener('input', function(e){
    yaw = parseFloat(e.target.value) * Math.PI / 180;
    render();
  });
  document.getElementById('sliderDihedralPitch').addEventListener('input', function(e){
    pitch = parseFloat(e.target.value) * Math.PI / 180;
    render();
  });

  document.getElementById('btnShowAnglePlane').addEventListener('click', function(){
    showCut = false;
    document.getElementById('dihedralStatus').innerHTML = 'Hai đường vuông góc với giao tuyến $BC$: $AH \\perp BC$ và $SH \\perp BC \\implies ((SBC), (ABC)) = \\widehat{SHA}$.';
    render();
  });
  document.getElementById('btnShowCutPlane').addEventListener('click', function(){
    showCut = true;
    document.getElementById('dihedralStatus').innerHTML = 'Mặt phẳng cắt $(SAH)$ vuông góc với giao tuyến $BC$. Góc giữa hai mặt chính là góc cắt trong mặt phẳng này!';
    render();
  });
  document.getElementById('btnResetDihedral').addEventListener('click', function(){
    yaw = 35 * Math.PI / 180;
    pitch = 25 * Math.PI / 180;
    showCut = false;
    render();
  });

  render();
})();
</script>

---

## III. Các Dạng Toán Điển Hình và Phương Pháp Giải

### Dạng 1: Xác định và tính góc giữa mặt bên và mặt đáy

**Phương pháp giải:**
Cho hình chóp $S.ABC...$ có đường cao $SA \perp (\text{đáy})$. Cần tính góc giữa mặt bên $(SBC)$ và mặt đáy:
1. Xác định giao tuyến: $(SBC) \cap (\text{đáy}) = BC$.
2. Từ chân đường cao $A$, kẻ $AH \perp BC$ tại $H$.
3. Nối $S$ với $H$, ta có ngay $SH \perp BC$ (theo định lí ba đường vuông góc).
4. Góc cần tìm là $\varphi = \widehat{SHA}$.
5. Tính độ dài $AH$ (đường cao trong tam giác đáy) và tính $\tan \varphi = \dfrac{SA}{AH}$.

---

#### Ví dụ 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Cạnh bên $SA \perp (ABCD)$ và $SA = \dfrac{a\sqrt{6}}{3}$. Tính góc giữa mặt phẳng $(SBD)$ và mặt phẳng đáy $(ABCD)$.

**Lời giải chi tiết:**
1. Giao tuyến của mặt phẳng $(SBD)$ và đáy $(ABCD)$ là đường thẳng $BD$.
2. Chân đường cao của hình chóp là đỉnh $A$.
3. Gọi $O$ là tâm hình vuông $ABCD$, ta có $AO \perp BD$ (vì hai đường chéo hình vuông vuông góc).
4. Lại có $SA \perp (ABCD) \implies SA \perp BD$.
   - Do đó $BD \perp (SAO) \implies BD \perp SO$.
5. Hai đường thẳng cùng vuông góc với giao tuyến $BD$ tại $O$ lần lượt là $SO \subset (SBD)$ và $AO \subset (ABCD)$.
6. Vậy góc giữa $(SBD)$ và $(ABCD)$ chính là góc $\widehat{SOA}$.
7. Tính toán:
   - Trong hình vuông cạnh $a$: $AC = a\sqrt{2} \implies AO = \dfrac{a\sqrt{2}}{2}$.
   - Tam giác $SAO$ vuông tại $A$:
     $$\tan \widehat{SOA} = \frac{SA}{AO} = \frac{\frac{a\sqrt{6}}{3}}{\frac{a\sqrt{2}}{2}} = \frac{a\sqrt{6}}{3} \cdot \frac{2}{a\sqrt{2}} = \frac{2\sqrt{3}}{3} = \frac{2}{\sqrt{3}}$$
   - Suy ra góc cần tìm là $\varphi = \arctan\left(\dfrac{2\sqrt{3}}{3}\right) \approx 49^\circ 6'$.

---

### Dạng 2: Chứng minh hai mặt phẳng vuông góc

**Phương pháp giải:**
Muốn chứng minh $(P) \perp (Q)$, cách đơn giản và phổ biến nhất là:
1. Tìm một đường thẳng $d$ nằm trong $(P)$ (hoặc trong $(Q)$).
2. Chứng minh đường thẳng $d$ vuông góc với mặt phẳng còn lại.
3. Kết luận hai mặt phẳng vuông góc.

---

#### Ví dụ 2:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA \perp (ABCD)$. Chứng minh rằng:
1. $(SAB) \perp (SBC)$.
2. $(SAD) \perp (SCD)$.

**Lời giải chi tiết:**
1. **Chứng minh $(SAB) \perp (SBC)$:**
   - Ta có $BC \perp AB$ (do $ABCD$ là hình chữ nhật).
   - $BC \perp SA$ (vì $SA \perp (ABCD)$).
   - Suy ra $BC \perp (SAB)$.
   - Mặt khác, đường thẳng $BC \subset (SBC)$.
   - Mặt phẳng $(SBC)$ chứa đường thẳng $BC \perp (SAB)$, nên $(SBC) \perp (SAB)$.

2. **Chứng minh $(SAD) \perp (SCD)$:**
   - Hoàn toàn tương tự: $CD \perp AD$ và $CD \perp SA \implies CD \perp (SAD)$.
   - Mà $CD \subset (SCD)$, do đó $(SCD) \perp (SAD)$.

---

### Dạng 3: Tính góc bằng công thức diện tích hình chiếu

---

#### Ví dụ 3:
Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$. Cạnh bên bằng $\dfrac{a\sqrt{21}}{6}$. Tính góc giữa mặt bên và mặt đáy của hình chóp.

**Lời giải chi tiết:**
1. Gọi $H$ là tâm của tam giác đều đáy $ABC$. Vì $S.ABC$ là chóp đều nên $SH \perp (ABC)$.
2. Xét mặt bên $(SBC)$:
   - Hình chiếu vuông góc của đỉnh $S$ lên mặt đáy $(ABC)$ là điểm $H$.
   - Hình chiếu của $B$ và $C$ lên đáy là chính chúng.
   - Do đó, hình chiếu vuông góc của tam giác $SBC$ lên mặt phẳng đáy $(ABC)$ là tam giác $HBC$.
3. Tính diện tích tam giác đáy $ABC$:
   $$S_{\triangle ABC} = \frac{a^2\sqrt{3}}{4}$$
4. Vì $H$ là trọng tâm của tam giác đều $ABC$, diện tích tam giác $HBC$ bằng một phần ba diện tích tam giác $ABC$:
   $$S' = S_{\triangle HBC} = \frac{1}{3} S_{\triangle ABC} = \frac{a^2\sqrt{3}}{12}$$
5. Tính diện tích mặt bên $SBC$:
   - Tam giác $SBC$ cân tại $S$ có $BC = a, SB = SC = \dfrac{a\sqrt{21}}{6}$.
   - Gọi $M$ là trung điểm của $BC \implies BM = \dfrac{a}{2}$.
   - Đường cao $SM = \sqrt{SB^2 - BM^2} = \sqrt{\frac{21a^2}{36} - \frac{a^2}{4}} = \sqrt{\frac{21a^2 - 9a^2}{36}} = \sqrt{\frac{12a^2}{36}} = \frac{a\sqrt{3}}{3}$.
   - Diện tích tam giác $SBC$ là:
     $$S = S_{\triangle SBC} = \frac{1}{2} \cdot BC \cdot SM = \frac{1}{2} \cdot a \cdot \frac{a\sqrt{3}}{3} = \frac{a^2\sqrt{3}}{6}$$
6. Áp dụng công thức diện tích hình chiếu:
   $$\cos \varphi = \frac{S'}{S} = \frac{\frac{a^2\sqrt{3}}{12}}{\frac{a^2\sqrt{3}}{6}} = \frac{1}{2}$$
7. Vì $\cos \varphi = \dfrac{1}{2}$ nên góc giữa mặt bên và mặt đáy bằng $60^\circ$.

---

## IV. Bài tập Trắc nghiệm Tự luyện (Chấm điểm Tức thì)

<div class="quiz-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0;">
<h3 style="margin-top: 0; color: #2563eb;">Luyện tập Trắc nghiệm Toàn diện Bài 25</h3>

<div class="quiz-item" data-quiz="tn1" style="margin-bottom: 16px;">
  <p><strong>Câu 1:</strong> Trong các mệnh đề sau, mệnh đề nào <strong>đúng</strong>?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn1" value="A"> A. Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thì vuông góc với nhau.</label><br>
    <label><input type="radio" name="tn1" value="B"> B. Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thì song song với nhau.</label><br>
    <label><input type="radio" name="tn1" value="C"> C. Hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba đó.</label><br>
    <label><input type="radio" name="tn1" value="D"> D. Nếu hai mặt phẳng vuông góc với nhau thì mọi đường thẳng nằm trong mặt phẳng này đều vuông góc với mặt phẳng kia.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: C</strong>. Đây là định lí giao tuyến: hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến vuông góc với mặt phẳng đó.
  </div>
</div>

<div class="quiz-item" data-quiz="tn2" style="margin-bottom: 16px;">
  <p><strong>Câu 2:</strong> Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều, $(SAB) \perp (ABC)$ và tam giác $SAB$ đều. Gọi $H$ là trung điểm của $AB$. Khẳng định nào sau đây đúng?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn2" value="A"> A. $SH \perp (ABC)$.</label><br>
    <label><input type="radio" name="tn2" value="B"> B. $SC \perp (ABC)$.</label><br>
    <label><input type="radio" name="tn2" value="C"> C. $SA \perp (ABC)$.</label><br>
    <label><input type="radio" name="tn2" value="D"> D. $SB \perp (ABC)$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Do $\triangle SAB$ đều nên $SH \perp AB$. Vì $(SAB) \perp (ABC)$ và giao tuyến là $AB$, đường thẳng $SH \subset (SAB)$ vuông góc với giao tuyến nên $SH \perp (ABC)$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn3" style="margin-bottom: 16px;">
  <p><strong>Câu 3:</strong> Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai mặt phẳng $(ABCD)$ và $(A'B'C'D')$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn3" value="A"> A. $90^\circ$.</label><br>
    <label><input type="radio" name="tn3" value="B"> B. $0^\circ$.</label><br>
    <label><input type="radio" name="tn3" value="C"> C. $45^\circ$.</label><br>
    <label><input type="radio" name="tn3" value="D"> D. $180^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Hai mặt phẳng đối diện của hình lập phương song song với nhau, theo định nghĩa góc giữa hai mặt phẳng song song bằng $0^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn4" style="margin-bottom: 16px;">
  <p><strong>Câu 4:</strong> Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \perp (ABCD)$ và $SA = a$. Góc giữa mặt phẳng $(SBC)$ và mặt phẳng đáy $(ABCD)$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn4" value="A"> A. $30^\circ$.</label><br>
    <label><input type="radio" name="tn4" value="B"> B. $45^\circ$.</label><br>
    <label><input type="radio" name="tn4" value="C"> C. $60^\circ$.</label><br>
    <label><input type="radio" name="tn4" value="D"> D. $90^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Giao tuyến là $BC$. Ta có $AB \perp BC$ và $SB \perp BC$ (định lí ba đường vuông góc) $\implies$ góc là $\widehat{SBA}$. Vì $\triangle SAB$ vuông cân tại $A$ ($SA = AB = a$) nên $\widehat{SBA} = 45^\circ$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn5" style="margin-bottom: 16px;">
  <p><strong>Câu 5:</strong> Cho hình lăng trụ đứng $ABC.A'B'C'$. Mặt phẳng $(ABC)$ vuông góc với mặt phẳng nào sau đây?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn5" value="A"> A. Mặt phẳng $(A'B'C')$.</label><br>
    <label><input type="radio" name="tn5" value="B"> B. Mặt phẳng $(ABB'A')$.</label><br>
    <label><input type="radio" name="tn5" value="C"> C. Mặt phẳng $(A'BC)$.</label><br>
    <label><input type="radio" name="tn5" value="D"> D. Mặt phẳng $(AB'C')$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: B</strong>. Lăng trụ đứng có cạnh bên $AA' \perp (ABC)$. Mặt phẳng $(ABB'A')$ chứa cạnh bên $AA'$ nên $(ABB'A') \perp (ABC)$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn6" style="margin-bottom: 16px;">
  <p><strong>Câu 6:</strong> Một tam giác đều $ABC$ cạnh $a$ có hình chiếu vuông góc lên mặt phẳng $(P)$ là tam giác $A'B'C'$ vuông cân tại $A'$ có cạnh huyền bằng $a$. Góc giữa $(ABC)$ và $(P)$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn6" value="A"> A. $30^\circ$.</label><br>
    <label><input type="radio" name="tn6" value="B"> B. $45^\circ$.</label><br>
    <label><input type="radio" name="tn6" value="C"> C. $\arccos\left(\dfrac{1}{\sqrt{3}}\right)$.</label><br>
    <label><input type="radio" name="tn6" value="D"> D. $60^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: C</strong>. $S_{\triangle ABC} = \dfrac{a^2\sqrt{3}}{4}$. Tam giác $A'B'C'$ vuông cân cạnh huyền $a$ có diện tích $S' = \dfrac{1}{4} a^2$. Khi đó $\cos \varphi = \dfrac{S'}{S} = \dfrac{a^2/4}{a^2\sqrt{3}/4} = \dfrac{1}{\sqrt{3}} \implies \varphi = \arccos\left(\dfrac{1}{\sqrt{3}}\right)$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn7" style="margin-bottom: 16px;">
  <p><strong>Câu 7:</strong> Khẳng định nào sau đây là <strong>sai</strong> khi nói về hình chóp tứ giác đều $S.ABCD$?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn7" value="A"> A. Đáy $ABCD$ là hình vuông.</label><br>
    <label><input type="radio" name="tn7" value="B"> B. Các mặt bên là các tam giác cân bằng nhau.</label><br>
    <label><input type="radio" name="tn7" value="C"> C. Góc giữa các mặt bên với mặt đáy bằng nhau.</label><br>
    <label><input type="radio" name="tn7" value="D"> D. Các mặt bên vuông góc với mặt phẳng đáy.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: D</strong>. Các mặt bên của hình chóp đều nghiêng đều trên đáy một góc nhọn $\varphi < 90^\circ$, không bao giờ vuông góc với đáy.
  </div>
</div>

<div class="quiz-item" data-quiz="tn8" style="margin-bottom: 16px;">
  <p><strong>Câu 8:</strong> Cho hình lập phương $ABCD.A'B'C'D'$. Mặt phẳng $(ACC'A')$ vuông góc với mặt phẳng nào sau đây?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn8" value="A"> A. $(BDD'B')$.</label><br>
    <label><input type="radio" name="tn8" value="B"> B. $(A'B'C'D')$.</label><br>
    <label><input type="radio" name="tn8" value="C"> C. Cả A và B đều đúng.</label><br>
    <label><input type="radio" name="tn8" value="D"> D. Chỉ duy nhất mặt phẳng $(ABCD)$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: C</strong>. Vì $AA' \perp (A'B'C'D') \implies (ACC'A') \perp (A'B'C'D')$. Ngoài ra $BD \perp AC$ và $BD \perp AA' \implies BD \perp (ACC'A') \implies (BDD'B') \perp (ACC'A')$. Vậy C đúng.
  </div>
</div>

<div class="quiz-item" data-quiz="tn9" style="margin-bottom: 16px;">
  <p><strong>Câu 9:</strong> Cho tứ diện $ABCD$ có $(ABC) \perp (DBC)$. Trong tam giác $DBC$, kẻ đường cao $DH \perp BC$. Khẳng định nào sau đây đúng?</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn9" value="A"> A. $DH \perp (ABC)$.</label><br>
    <label><input type="radio" name="tn9" value="B"> B. $DH \parallel (ABC)$.</label><br>
    <label><input type="radio" name="tn9" value="C"> C. $DH \subset (ABC)$.</label><br>
    <label><input type="radio" name="tn9" value="D"> D. Góc giữa $DH$ và $(ABC)$ bằng $45^\circ$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Giao tuyến của $(DBC)$ và $(ABC)$ là $BC$. Do hai mặt phẳng vuông góc và $DH \perp BC$ nên $DH \perp (ABC)$.
  </div>
</div>

<div class="quiz-item" data-quiz="tn10" style="margin-bottom: 16px;">
  <p><strong>Câu 10:</strong> Cho hình lăng trụ đứng tam giác đều $ABC.A'B'C'$ có tất cả các cạnh bằng $a$. Góc giữa mặt phẳng $(A'BC)$ và mặt phẳng $(ABC)$ có $\tan$ bằng:</p>
  <div class="quiz-options">
    <label><input type="radio" name="tn10" value="A"> A. $\dfrac{2\sqrt{3}}{3}$.</label><br>
    <label><input type="radio" name="tn10" value="B"> B. $\sqrt{3}$.</label><br>
    <label><input type="radio" name="tn10" value="C"> C. $\dfrac{\sqrt{3}}{2}$.</label><br>
    <label><input type="radio" name="tn10" value="D"> D. $2$.</label>
  </div>
  <div class="quiz-explanation" style="display:none; margin-top:8px; padding:8px 12px; background:#ecfdf5; border-radius:6px; color:#047857;">
    ✓ <strong>Đáp án đúng: A</strong>. Gọi $M$ là trung điểm $BC \implies AM \perp BC \implies A'M \perp BC$. Góc là $\widehat{A'MA}$. Ta có $AA' = a$, $AM = \dfrac{a\sqrt{3}}{2} \implies \tan \widehat{A'MA} = \dfrac{AA'}{AM} = \dfrac{a}{a\sqrt{3}/2} = \dfrac{2}{\sqrt{3}} = \dfrac{2\sqrt{3}}{3}$.
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
    tn1: 'C', tn2: 'A', tn3: 'B', tn4: 'B', tn5: 'B',
    tn6: 'C', tn7: 'D', tn8: 'C', tn9: 'A', tn10: 'A'
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

## V. Ứng dụng Thực tiễn: Kết cấu Mái Dốc Thoát Nước và Chống Bão

Trong kiến trúc truyền thống và hiện đại ở vùng nhiệt đới gió mùa như Việt Nam, góc giữa hai mái nhà dốc (mặt phẳng mái) đóng vai trò quyết định đến độ bền của ngôi nhà.

Nếu góc dốc của mái so với mặt phẳng trần nằm ngang quá nhỏ ($\varphi < 15^\circ$), nước mưa lớn sẽ không thoát kịp, dễ gây thấm dột và đọng rác. Ngược lại, nếu góc dốc quá lớn ($\varphi > 60^\circ$), diện tích hứng gió của mái sẽ tăng vọt, tạo ra lực nâng khí động học cực mạnh có thể bốc tung mái nhà trong các cơn bão mạnh cấp 12. 

Góc mái tiêu chuẩn được các kiến trúc sư tối ưu ở mức **$25^\circ - 35^\circ$**: vừa đủ dốc để thoát nước mưa với tốc độ $2\text{ m/s}$, vừa hạn chế tối đa tiết diện cản gió!
