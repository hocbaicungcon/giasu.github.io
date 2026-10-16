---
title: 'Toán 11 Bài 13: Hai mặt phẳng song song - Điều kiện, tính chất, hình lăng trụ và hình hộp'
description: 'Lý thuyết toàn diện Bài 13 Toán 11 Kết nối tri thức: Điều kiện hai mặt phẳng song song, định lý Ta-lét trong không gian, cấu tạo hình lăng trụ và hình hộp, phương pháp chứng minh (α) ∥ (β) và mô hình 3D tương tác xoay đa chiều.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hình học không gian 11
  - Hai mặt phẳng song song
  - Định lý Ta-lét không gian
  - Hình lăng trụ
  - Hình hộp
  - Hình học 3D tương tác
  - Kết nối tri thức
grade: 11
---

# Bài 13. Hai mặt phẳng song song

Chào mừng các em đến với cấu trúc không gian đa tầng quen thuộc và ấn tượng nhất: **Hai mặt phẳng song song**!

Hãy nhìn vào các công trình kiến trúc hiện đại:
- Các tầng sàn của một tòa nhà chọc trời vươn cao trong không trung: tầng 1, tầng 2, tầng 3,... là các mặt phẳng song song cách đều nhau.
- Hai mặt bìa của một cuốn sách đóng kín hoặc các trang sách khi xếp gọn.
- Một chiếc bánh kem sinh nhật nhiều tầng hình lăng trụ.

Trong bài học trước, chúng ta đã biết cách dựng một đường thẳng song song với một mặt phẳng. Bây giờ, nếu cả một mặt phẳng bay lơ lửng song song hoàn hảo với một mặt phẳng khác thì điều kiện cần và đủ là gì? Chúng ta sẽ khám phá ngay sau đây!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: HAI MẶT PHẲNG SONG SONG</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Song song</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(\alpha) \parallel (\beta) \Leftrightarrow (\alpha) \cap (\beta) = \emptyset$.<br>• Không có bất kỳ điểm chung nào trong không gian.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Dấu hiệu nhận biết (Định lý 1)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• $(\alpha)$ chứa hai đường thẳng cắt nhau $a, b$.<br>• $a \parallel (\beta)$ và $b \parallel (\beta)$.<br>• $\implies (\alpha) \parallel (\beta)$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Định lý Ta-lét trong không gian</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Ba mặt phẳng song song chắn trên hai cát tuyến bất kỳ các đoạn thẳng tương ứng tỉ lệ:<br>$\frac{A B}{A' B'} = \frac{B C}{B' C'} = \frac{A C}{A' C'}$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hình Lăng trụ & Hình Hộp</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Lăng trụ:</strong> Hai đáy song song và bằng nhau; các mặt bên là hình bình hành.<br>• <strong>Hình hộp:</strong> Lăng trụ có đáy là hình bình hành (cả 6 mặt đều là hình bình hành).</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Khái niệm:** Hai mặt phẳng phân biệt không cắt nhau thì có vị trí tương đối là gì?
2. **Dấu hiệu:** Nếu $(\alpha)$ chứa một đường thẳng $a \parallel (\beta)$ thì $(\alpha)$ đã song song với $(\beta)$ chưa?
3. **Hình lập phương:** Trong hình lập phương $ABCD.A'B'C'D'$, mặt phẳng đáy trên $(A'B'C'D')$ và mặt phẳng đáy dưới $(ABCD)$ có song song không?
4. **Mặt bên lăng trụ:** Các mặt bên của một hình lăng trụ bất kỳ luôn là hình gì?
5. **Số mặt phẳng:** Qua một điểm $M$ nằm ngoài mặt phẳng $(P)$, có bao nhiêu mặt phẳng song song với $(P)$?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Chắc chắn là **song song với nhau**! (Trong không gian, hai mặt phẳng phân biệt chỉ có 2 vị trí: cắt nhau hoặc song song).
> 2. Chưa đủ! Cần $(\alpha)$ chứa **hai đường thẳng cắt nhau** cùng song song với $(\beta)$ thì mới kết luận được.
> 3. Song song hoàn hảo với nhau.
> 4. Luôn luôn là **các hình bình hành**.
> 5. Duy nhất **1 mặt phẳng**.

---

## I. Định nghĩa và Dấu hiệu nhận biết hai mặt phẳng song song

### 1. Định nghĩa

Hai mặt phẳng $(\alpha)$ và $(\beta)$ được gọi là **song song với nhau** nếu chúng không có điểm chung:
$$(\alpha) \parallel (\beta) \iff (\alpha) \cap (\beta) = \emptyset$$

### 2. Dấu hiệu nhận biết hai mặt phẳng song song (Định lý 1)

> [!IMPORTANT]
> **Định lý 1 (Điều kiện để hai mặt phẳng song song):**  
> Nếu mặt phẳng $(\alpha)$ chứa hai đường thẳng cắt nhau $a$ và $b$, và hai đường thẳng này cùng song song với mặt phẳng $(\beta)$ thì $(\alpha)$ song song với $(\beta)$:
> $$\begin{cases} a \subset (\alpha), \; b \subset (\alpha) \\ a \cap b = \{I\} \\ a \parallel (\beta), \; b \parallel (\beta) \end{cases} \implies (\alpha) \parallel (\beta)$$

---

## II. Mô hình 3D Tương tác: Hình Lăng trụ và Hai mặt phẳng song song

Khối hình 3D dưới đây mô phỏng một **Hình lăng trụ tam giác $ABC.A'B'C'$** với hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ song song với nhau. Các em hãy xoay mô hình để thấy rõ các mặt bên là những hình bình hành đứng nối hai đáy!

<div class="interactive-3d-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
<h3 style="margin-top: 0; color: #2563eb;">MÔ HÌNH 3D: HÌNH LĂNG TRỤ VÀ MẶT PHẲNG ĐÁY SONG SONG</h3>
<p style="font-size: 0.9em; color: #64748b; margin-bottom: 16px;"><em>Xoay khối 3D để quan sát hai đáy (ABC) và (A'B'C') song song với nhau.</em></p>
<div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
<button id="btnModelPrism" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: bold; cursor: pointer;">Lăng trụ tam giác ABC.A'B'C'</button>
<button id="btnModelBox" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; color: #334155; font-weight: bold; cursor: pointer;">Hình hộp ABCD.A'B'C'D'</button>
<button id="btnReset3D_13" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
</div>
<div style="position: relative; max-width: 600px; margin: 0 auto; user-select: none;">
<svg id="svg3DSpace13" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); cursor: grab; touch-action: none; font-family: system-ui, sans-serif;">
<g id="g13Faces"></g>
<g id="g13Edges"></g>
<g id="g13Vertices"></g>
<g id="g13Labels"></g>
</svg>
<div style="margin-top: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div>
<label style="font-weight: bold; color: #334155;">Góc xoay ngang: <span id="valYaw13">30°</span></label>
<input id="sliderYaw13" type="range" min="-180" max="180" value="30" style="width: 100%; margin-top: 4px;">
</div>
<div>
<label style="font-weight: bold; color: #334155;">Góc nghiêng đứng: <span id="valPitch13">18°</span></label>
<input id="sliderPitch13" type="range" min="-60" max="60" value="18" style="width: 100%; margin-top: 4px;">
</div>
</div>
</div>
</div>

<script>
(function(){
  var curMode = 'prism';
  var yaw = 30 * Math.PI / 180;
  var pitch = 18 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;

  var models = {
    prism: {
      verts: {
        'A': [-70, -70, -50], 'B': [70, -70, -50], 'C': [0, -70, 70],
        "A'": [-70, 70, -50], "B'": [70, 70, -50], "C'": [0, 70, 70]
      },
      edges: [
        ['A', 'B'], ['B', 'C'], ['C', 'A'],
        ["A'", "B'"], ["B'", "C'"], ["C'", "A'"],
        ['A', "A'"], ['B', "B'"], ['C', "C'"]
      ],
      bottomFace: ['A', 'B', 'C'],
      topFace: ["A'", "B'", "C'"]
    },
    box: {
      verts: {
        'A': [-65, -60, -60], 'B': [65, -60, -60], 'C': [75, -60, 60], 'D': [-55, -60, 60],
        "A'": [-65, 60, -60], "B'": [65, 60, -60], "C'": [75, 60, 60], "D'": [-55, 60, 60]
      },
      edges: [
        ['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'A'],
        ["A'", "B'"], ["B'", "C'"], ["C'", "D'"], ["D'", "A'"],
        ['A', "A'"], ['B', "B'"], ['C', "C'"], ['D', "D'"]
      ],
      bottomFace: ['A', 'B', 'C', 'D'],
      topFace: ["A'", "B'", "C'", "D'"]
    }
  };

  function project(pt, w, h){
    var x = pt[0], y = pt[1], z = pt[2];
    var x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
    var y1 = y;
    var z1 = -x * Math.sin(yaw) + z * Math.cos(yaw);
    var x2 = x1;
    var y2 = y1 * Math.cos(pitch) - z1 * Math.sin(pitch);
    var z2 = y1 * Math.sin(pitch) + z1 * Math.cos(pitch);
    var scale = 1.35;
    return {
      x: w/2 + x2 * scale,
      y: h/2 - y2 * scale,
      depth: z2
    };
  }

  function render(){
    var svg = document.getElementById('svg3DSpace13');
    if(!svg) return;
    var w = 540, h = 380;
    var m = models[curMode];
    var proj = {};
    for(var k in m.verts){
      proj[k] = project(m.verts[k], w, h);
    }

    var gFaces = document.getElementById('g13Faces');
    var gEdges = document.getElementById('g13Edges');
    var gVerts = document.getElementById('g13Vertices');
    var gLabels = document.getElementById('g13Labels');

    var botPts = m.bottomFace.map(function(v){ return proj[v].x.toFixed(1) + ',' + proj[v].y.toFixed(1); }).join(' ');
    var topPts = m.topFace.map(function(v){ return proj[v].x.toFixed(1) + ',' + proj[v].y.toFixed(1); }).join(' ');
    var faceMarkup = '<polygon points="' + botPts + '" fill="rgba(37,99,235,0.18)" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>' +
                     '<polygon points="' + topPts + '" fill="rgba(16,185,129,0.22)" stroke="#10b981" stroke-width="2"/>';
    gFaces.innerHTML = faceMarkup;

    var edgeMarkup = '';
    m.edges.forEach(function(e){
      var p1 = proj[e[0]], p2 = proj[e[1]];
      var isHidden = (e[0] === 'A' && e[1] === 'B') || (e[0] === 'A' && e[1] === "A'");
      var dash = isHidden ? 'stroke-dasharray="5,4" stroke="#94a3b8" stroke-width="1.8"' : 'stroke="#334155" stroke-width="2.2"';
      edgeMarkup += '<line x1="' + p1.x.toFixed(1) + '" y1="' + p1.y.toFixed(1) + '" x2="' + p2.x.toFixed(1) + '" y2="' + p2.y.toFixed(1) + '" ' + dash + '/>';
    });
    gEdges.innerHTML = edgeMarkup;

    var vertMarkup = '';
    var labelMarkup = '';
    for(var name in proj){
      var p = proj[name];
      var isTop = name.indexOf("'") !== -1;
      var c = isTop ? '#10b981' : '#2563eb';
      vertMarkup += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="5" fill="' + c + '" stroke="#ffffff" stroke-width="2"/>';
      var offX = p.x > w/2 ? 8 : -18;
      var offY = isTop ? -8 : 16;
      labelMarkup += '<text x="' + (p.x + offX).toFixed(1) + '" y="' + (p.y + offY).toFixed(1) + '" font-size="13" font-weight="bold" fill="#0f172a">' + name + '</text>';
    }
    gVerts.innerHTML = vertMarkup;
    gLabels.innerHTML = labelMarkup;

    var lblY = document.getElementById('valYaw13');
    var lblP = document.getElementById('valPitch13');
    var sY = document.getElementById('sliderYaw13');
    var sP = document.getElementById('sliderPitch13');
    if(lblY) lblY.textContent = Math.round(yaw * 180 / Math.PI) + '°';
    if(lblP) lblP.textContent = Math.round(pitch * 180 / Math.PI) + '°';
    if(sY) sY.value = Math.round(yaw * 180 / Math.PI);
    if(sP) sP.value = Math.round(pitch * 180 / Math.PI);
  }

  function setupEvents13(){
    var svg = document.getElementById('svg3DSpace13');
    if(!svg) return;

    svg.addEventListener('pointerdown', function(e){
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      svg.style.cursor = 'grabbing';
      if(svg.setPointerCapture) svg.setPointerCapture(e.pointerId);
    });

    window.addEventListener('pointermove', function(e){
      if(!isDragging) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;
      yaw += dx * 0.012;
      pitch += dy * 0.012;
      pitch = Math.max(-Math.PI/3, Math.min(Math.PI/3, pitch));
      render();
    });

    window.addEventListener('pointerup', function(){
      if(isDragging){
        isDragging = false;
        svg.style.cursor = 'grab';
      }
    });

    var sY = document.getElementById('sliderYaw13');
    var sP = document.getElementById('sliderPitch13');
    if(sY) sY.addEventListener('input', function(e){ yaw = e.target.value * Math.PI / 180; render(); });
    if(sP) sP.addEventListener('input', function(e){ pitch = e.target.value * Math.PI / 180; render(); });

    var bPrism = document.getElementById('btnModelPrism');
    var bBox = document.getElementById('btnModelBox');
    var bReset = document.getElementById('btnReset3D_13');

    if(bPrism) bPrism.addEventListener('click', function(){
      curMode = 'prism';
      bPrism.style.background = '#2563eb'; bPrism.style.color = '#fff';
      if(bBox){ bBox.style.background = '#fff'; bBox.style.color = '#334155'; }
      render();
    });

    if(bBox) bBox.addEventListener('click', function(){
      curMode = 'box';
      bBox.style.background = '#2563eb'; bBox.style.color = '#fff';
      if(bPrism){ bPrism.style.background = '#fff'; bPrism.style.color = '#334155'; }
      render();
    });

    if(bReset) bReset.addEventListener('click', function(){
      yaw = 30 * Math.PI / 180;
      pitch = 18 * Math.PI / 180;
      render();
    });

    render();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupEvents13);
  } else {
    setupEvents13();
  }
})();
</script>

---

## III. Các Tính chất cơ bản của Hai mặt phẳng song song

> [!IMPORTANT]
> **Định lý 2 (Sự tồn tại và duy nhất):**  
> Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đã cho.

> [!IMPORTANT]
> **Định lý 3 (Giao tuyến của mặt phẳng thứ ba):**  
> Nếu hai mặt phẳng song song cùng bị cắt bởi một mặt phẳng thứ ba thì hai giao tuyến tạo thành **song song với nhau**:
> $$\begin{cases} (\alpha) \parallel (\beta) \\ (\gamma) \cap (\alpha) = a \\ (\gamma) \cap (\beta) = b \end{cases} \implies a \parallel b$$

> [!IMPORTANT]
> **Định lý 4 (Định lý Ta-lét trong không gian):**  
> Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kỳ các đoạn thẳng tương ứng tỉ lệ:
> $$\frac{A_1 B_1}{A_2 B_2} = \frac{B_1 C_1}{B_2 C_2} = \frac{A_1 C_1}{A_2 C_2}$$

---

## IV. Hình lăng trụ và Hình hộp

### 1. Hình lăng trụ

- **Định nghĩa:** Hình gồm hai đáy là hai đa giác bằng nhau nằm trên hai mặt phẳng song song $(A_1 A_2 \dots A_n)$ và $(A'_1 A'_2 \dots A'_n)$, cùng với các mặt bên là những hình bình hành $A_i A_{i+1} A'_{i+1} A'_i$ được gọi là **hình lăng trụ $A_1 A_2 \dots A_n.A'_1 A'_2 \dots A'_n$**.
- **Tính chất đặc trưng:**
  - Các cạnh bên song song và bằng nhau từng đôi một: $A_1 A'_1 \parallel A_2 A'_2 \parallel \dots$ và $A_1 A'_1 = A_2 A'_2 = \dots$
  - Hai đáy là hai đa giác bằng nhau và nằm trên hai mặt phẳng song song.
  - Các mặt bên đều là hình bình hành.

### 2. Hình hộp

- **Hình lăng trụ có đáy là hình bình hành** được gọi là **hình hộp**.
- Trong hình hộp, tất cả $6$ mặt đều là các hình bình hành.
- Bốn đường chéo của hình hộp cắt nhau tại trung điểm của mỗi đường (gọi là tâm của hình hộp).

---

## V. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Chứng minh hai mặt phẳng song song

> [!NOTE]
> **Phương pháp:**
> Để chứng minh $(\alpha) \parallel (\beta)$:
> 1. Tìm trong $(\alpha)$ hai đường thẳng $a$ và $b$ cắt nhau tại điểm $I$.
> 2. Chứng minh $a \parallel (\beta)$ và $b \parallel (\beta)$ (bằng cách chỉ ra $a \parallel a'$ và $b \parallel b'$ với $a', b' \subset (\beta)$).
> 3. Kết luận $(\alpha) \parallel (\beta)$.

#### Ví dụ 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $CD$. Chứng minh rằng mặt phẳng $(OMN)$ song song với mặt phẳng $(SBC)$.

#### Lời giải chi tiết:
- Trong tam giác $SAC$: $O$ là trung điểm của $AC$ (tâm hình bình hành), $M$ là trung điểm của $SA$.  
  Suy ra $OM$ là đường trung bình của $\Delta SAC \Rightarrow OM \parallel SC$.  
  Vì $SC \subset (SBC)$ và $OM \not\subset (SBC) \Rightarrow OM \parallel (SBC)$ (1).
- Trong hình bình hành $ABCD$: $O$ là trung điểm của $BD$, $N$ là trung điểm của $CD$.  
  Suy ra $ON$ là đường trung bình của $\Delta BCD \Rightarrow ON \parallel BC$.  
  Vì $BC \subset (SBC)$ và $ON \not\subset (SBC) \Rightarrow ON \parallel (SBC)$ (2).
- Xét mặt phẳng $(OMN)$:
  - Chứa hai đường thẳng $OM$ và $ON$ cắt nhau tại $O$.
  - $OM \parallel (SBC)$ và $ON \parallel (SBC)$.  
Từ (1) và (2) suy ra **$(OMN) \parallel (SBC)$**.

---

### Dạng 2: Dựng thiết diện song song với một mặt phẳng

#### Ví dụ 2:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Lấy điểm $M$ trên cạnh $SC$. Mặt phẳng $(\alpha)$ đi qua $M$ và song song với mặt phẳng $(SAB)$. Tìm thiết diện của hình chóp cắt bởi $(\alpha)$.

#### Lời giải chi tiết:
- Vì $(\alpha) \parallel (SAB)$ nên $(\alpha)$ song song với mọi đường thẳng nằm trong $(SAB)$, cụ thể là $(\alpha) \parallel SA$ và $(\alpha) \parallel AB$.
- Trong mặt phẳng $(SAC)$: qua $M$ kẻ đường thẳng song song với $SA$ cắt $AC$ tại $P$. Ta có đoạn giao tuyến **$MP \parallel SA$**.
- Trong mặt phẳng đáy $(ABCD)$: qua $P$ kẻ đường thẳng song song với $AB$ (và $CD$) cắt $BC$ tại $Q$ và cắt $AD$ tại $R$. Ta có đoạn giao tuyến **$QR \parallel AB$**.
- Trong mặt phẳng $(SBC)$: nối $M$ với $Q$, ta có đoạn giao tuyến **$MQ$** (với $MQ \parallel SB$).
- Trong mặt phẳng $(SAD)$: qua $R$ kẻ đường thẳng song song với $SA$ cắt $SD$ tại $N$. Ta có đoạn giao tuyến **$RN \parallel SA$**.
- Trong mặt phẳng $(SCD)$: nối $M$ với $N$, ta có đoạn giao tuyến **$MN \parallel CD$**.
- Khép kín các đoạn giao tuyến: $MQ, QR, RN, NM$ tạo thành hình thang $MQRN$.  
Vậy thiết diện của hình chóp cắt bởi mặt phẳng $(\alpha)$ là **hình thang $MQRN$**.

---

## VI. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Hai mặt phẳng (α) và (β) song song với nhau khi và chỉ khi:",
  "options": [
    "A. Chúng không có điểm chung",
    "B. Chúng cùng song song với một đường thẳng",
    "C. Có một đường thẳng trong (α) song song với (β)",
    "D. Cả A và B đều đúng"
  ],
  "answer": "A. Chúng không có điểm chung",
  "explanation": "Theo định nghĩa: Hai mặt phẳng song song nếu chúng không có điểm chung nào."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Điều kiện để mặt phẳng (α) song song với mặt phẳng (β) là:",
  "options": [
    "A. (α) chứa hai đường thẳng song song với (β)",
    "B. (α) chứa hai đường thẳng cắt nhau cùng song song với (β)",
    "C. (α) chứa vô số đường thẳng song song với (β)",
    "D. (α) và (β) cùng vuông góc với một đường thẳng"
  ],
  "answer": "B. (α) chứa hai đường thẳng cắt nhau cùng song song với (β)",
  "explanation": "Định lý 1 yêu cầu hai đường thẳng đó phải CẮT NHAU thì mới xác định duy nhất mặt phẳng (α)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Qua một điểm nằm ngoài một mặt phẳng cho trước, có bao nhiêu mặt phẳng song song với mặt phẳng đó?",
  "options": [
    "A. 0",
    "B. 1",
    "C. 2",
    "D. Vô số"
  ],
  "answer": "B. 1",
  "explanation": "Định lý 2 khẳng định: Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với nó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Các mặt bên của một hình lăng trụ bất kỳ luôn là:",
  "options": [
    "A. Hình chữ nhật",
    "B. Hình bình hành",
    "C. Hình thang",
    "D. Hình thoi"
  ],
  "answer": "B. Hình bình hành",
  "explanation": "Theo định nghĩa hình lăng trụ, các mặt bên luôn là các hình bình hành nối hai đáy."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Một hình hộp có tất cả bao nhiêu đỉnh, bao nhiêu cạnh và bao nhiêu mặt?",
  "options": [
    "A. 8 đỉnh, 12 cạnh, 6 mặt",
    "B. 6 đỉnh, 12 cạnh, 8 mặt",
    "C. 8 đỉnh, 10 cạnh, 6 mặt",
    "D. 12 đỉnh, 8 cạnh, 6 mặt"
  ],
  "answer": "A. 8 đỉnh, 12 cạnh, 6 mặt",
  "explanation": "Hình hộp gồm 8 đỉnh (4 đỉnh đáy trên + 4 đỉnh đáy dưới), 12 cạnh (4 cạnh đáy trên + 4 cạnh đáy dưới + 4 cạnh bên) và 6 mặt hình bình hành."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Nếu hai mặt phẳng song song cùng cắt mặt phẳng thứ ba thì hai giao tuyến tạo thành sẽ:",
  "options": [
    "A. Cắt nhau",
    "B. Song song với nhau",
    "C. Chéo nhau",
    "D. Vuông góc"
  ],
  "answer": "B. Song song với nhau",
  "explanation": "Định lý 3: Hai mặt phẳng song song chắn trên mặt phẳng thứ ba hai giao tuyến song song."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Bốn đường chéo của một hình hộp cùng cắt nhau tại:",
  "options": [
    "A. Một đỉnh của hình hộp",
    "B. Trung điểm của mỗi đường",
    "C. Trọng tâm của một mặt",
    "D. Điểm bất kỳ"
  ],
  "answer": "B. Trung điểm của mỗi đường",
  "explanation": "Các đường chéo của hình hộp đồng quy tại một điểm và điểm đó là trung điểm của mỗi đường chéo (gọi là tâm hình hộp)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tứ diện ABCD. Gọi G_1, G_2 lần lượt là trọng tâm tam giác ABC và ABD. Khẳng định nào sau đây ĐÚNG?",
  "options": [
    "A. G_1 G_2 ∥ (BCD)",
    "B. G_1 G_2 ∥ (ACD)",
    "C. G_1 G_2 cắt (BCD)",
    "D. G_1 G_2 ⊂ (BCD)"
  ],
  "answer": "A. G_1 G_2 ∥ (BCD)",
  "explanation": "Gọi M là trung điểm AB. Ta có MG_1 / MC = MG_2 / MD = 1/3 ⇒ G_1 G_2 ∥ CD. Vì CD ⊂ (BCD) nên G_1 G_2 ∥ (BCD)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho ba mặt phẳng đôi một song song cắt hai cát tuyến tại A, B, C và A', B', C'. Biết AB = 4, BC = 6, A'B' = 6. Độ dài B'C' bằng:",
  "options": [
    "A. 8",
    "B. 9",
    "C. 10",
    "D. 12"
  ],
  "answer": "B. 9",
  "explanation": "Theo Định lý Ta-lét không gian: AB / BC = A'B' / B'C' ⇔ 4/6 = 6 / B'C' ⇒ B'C' = (6 * 6)/4 = 9."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Phần hình chóp nằm giữa đáy và một thiết diện song song với đáy được gọi là:",
  "options": [
    "A. Hình chóp đều",
    "B. Hình lăng trụ",
    "C. Hình chóp cụt",
    "D. Hình hộp chữ nhật"
  ],
  "answer": "C. Hình chóp cụt",
  "explanation": "Theo định nghĩa, khối đa diện giới hạn bởi đáy và thiết diện song song với đáy của hình chóp gọi là hình chóp cụt."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$.**  
   Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SC$.  
   a) Chứng minh rằng mặt phẳng $(BMD)$ cắt hình chóp theo một thiết diện là hình gì?  
   b) Mặt phẳng qua $M$ song song với $(SBD)$ cắt hình chóp theo thiết diện là hình gì?

2. **Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $I, J, K$ lần lượt là trọng tâm của các tam giác $ABC, ACC', A'B'C'$.**  
   Chứng minh rằng mặt phẳng $(IJK)$ song song với mặt phẳng $(BB'C'C)$.
