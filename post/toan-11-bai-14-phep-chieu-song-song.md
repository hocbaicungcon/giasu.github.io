---
title: 'Toán 11 Bài 14: Phép chiếu song song - Khái niệm, tính chất và hình biểu diễn của hình không gian'
description: 'Lý thuyết trọng tâm Bài 14 Toán 11 Kết nối tri thức: Định nghĩa phép chiếu song song, phương chiếu, mặt phẳng chiếu, các tính chất bảo toàn hình học, quy tắc vẽ hình biểu diễn của các hình 3D và mô hình 3D tương tác đổ bóng trực quan.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hình học không gian 11
  - Phép chiếu song song
  - Hình biểu diễn
  - Bóng chiếu song song
  - Hình học 3D tương tác
  - Kết nối tri thức
grade: 11
---

# Bài 14. Phép chiếu song song

Chào mừng các em đến với bài học khép lại toàn bộ lý thuyết của **Chương IV: Quan hệ song song trong không gian**: **Phép chiếu song song**!

Hãy quan sát bóng của các vật thể dưới ánh nắng mặt trời:
- Vì Mặt Trời ở khoảng cách vô cùng xa Trái Đất, các tia sáng chiếu tới mặt đất được coi là các đường thẳng song song với nhau.
- Bóng của một cây cọc thẳng in trên sân là một đoạn thẳng; bóng của hai hàng rào song song in trên mặt đường cũng là hai vạch song song.
- Bóng của một chiếc đĩa tròn nghiêng đổ xuống nền nhà vẹt thành một hình elip mềm mại.
- Khi một họa sĩ hay kỹ sư kiến trúc vẽ một ngôi nhà 3D lên mặt giấy 2D, họ đang sử dụng chính xác các quy tắc của **Phép chiếu song song**.

Bài học này sẽ làm sáng tỏ bản chất toán học của quá trình biến đổi từ thế giới 3 chiều sang mặt phẳng 2 chiều!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: PHÉP CHIẾU SONG SONG</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Định nghĩa Phép chiếu</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Mặt phẳng chiếu $(\alpha)$, phương chiếu $\Delta$ ($\Delta \not\parallel (\alpha)$).<br>• Điểm $M \mapsto M'$ sao cho $MM' \parallel \Delta$ và $M' \in (\alpha)$.<br>• $M'$ gọi là <strong>hình chiếu song song</strong> của $M$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Các tính chất Bảo toàn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Bảo toàn tính thẳng hàng và thứ tự 3 điểm.<br>• Biến 2 đường thẳng song song thành 2 đường song song (hoặc trùng nhau).<br>• Bảo toàn <strong>tỉ số đoạn thẳng cùng phương</strong>.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. Đại lượng KHÔNG bảo toàn</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• <strong>Độ lớn góc:</strong> Góc vuông có thể biến thành góc nhọn hoặc góc tù.<br>• <strong>Độ dài tuyệt đối:</strong> Đoạn thẳng có thể co ngắn hoặc kéo dài tùy góc chiếu.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Hình biểu diễn của hình phẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Tam giác $\mapsto$ Tam giác bất kỳ.<br>• Hình vuông, chữ nhật, thoi $\mapsto$ Hình bình hành.<br>• Hình tròn $\mapsto$ Đường Elip.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Phương chiếu:** Nếu phương chiếu $\Delta$ song song với mặt phẳng chiếu $(\alpha)$ thì có thực hiện phép chiếu song song được không?
2. **Hình chiếu của trung điểm:** Phép chiếu song song có biến trung điểm của một đoạn thẳng thành trung điểm của đoạn thẳng hình chiếu không?
3. **Hình chiếu của góc vuông:** Hình chiếu song song của một tam giác vuông có nhất thiết phải là tam giác vuông không?
4. **Hình biểu diễn:** Một hình vuông trong không gian thường được vẽ thành hình gì trên mặt phẳng trang giấy?
5. **Điểm trùng:** Khi nào thì hình chiếu của hai điểm phân biệt lại trùng nhau?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Không thể! Phương chiếu $\Delta$ bắt buộc phải cắt mặt phẳng chiếu $(\alpha)$ ($\Delta \not\parallel (\alpha)$) thì đường thẳng chiếu mới cắt được mặt phẳng tại một điểm duy nhất.
> 2. Có! Vì phép chiếu song song bảo toàn tỉ số của các đoạn thẳng nằm trên cùng một đường thẳng (tỉ số $1:1$ được giữ nguyên).
> 3. Không nhất thiết! Độ lớn góc không được bảo toàn, nên tam giác vuông có thể biến thành tam giác nhọn hoặc tam giác tù.
> 4. Thường được vẽ thành một **hình bình hành**.
> 5. Khi đường thẳng nối hai điểm đó song song (hoặc trùng) với phương chiếu $\Delta$.

---

## I. Khái niệm Phép chiếu song song

### 1. Định nghĩa

Cho mặt phẳng $(\alpha)$ và một đường thẳng $\Delta$ cắt $(\alpha)$.
- Với mỗi điểm $M$ trong không gian, đường thẳng đi qua $M$ và song song (hoặc trùng) với $\Delta$ sẽ cắt mặt phẳng $(\alpha)$ tại một điểm $M'$ duy nhất.
- Điểm $M'$ được gọi là **hình chiếu song song của điểm $M$** lên mặt phẳng $(\alpha)$ theo phương $\Delta$.
- Phép đặt tương ứng mỗi điểm $M$ với hình chiếu $M'$ của nó được gọi là **phép chiếu song song lên mặt phẳng $(\alpha)$ theo phương $\Delta$**.
  - $(\alpha)$ gọi là **mặt phẳng chiếu**.
  - $\Delta$ gọi là **phương chiếu**.
  - Tập hợp tất cả các hình chiếu $M'$ của các điểm $M$ thuộc hình $\mathcal{H}$ tạo thành hình $\mathcal{H}'$, gọi là **hình chiếu song song của hình $\mathcal{H}$** lên mặt phẳng $(\alpha)$.

---

## II. Mô hình 3D Tương tác: Thí nghiệm Đổ bóng Phép chiếu song song

Mô hình 3D dưới đây mô phỏng một **tam giác $ABC$ trong không gian**, các tia nắng mặt trời màu vàng theo phương chiếu song song $\Delta$ rọi xuống và tạo thành **hình chiếu bóng $A'B'C'$ trên mặt phẳng sàn $(\alpha)$**. Các em hãy xoay mô hình để quan sát sự tương ứng giữa vật thể thực và hình chiếu phẳng của nó!

<div class="interactive-3d-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
<h3 style="margin-top: 0; color: #2563eb;">MÔ HÌNH 3D: PHÉP CHIẾU SONG SONG VÀ ĐỔ BÓNG KHÔNG GIAN</h3>
<p style="font-size: 0.9em; color: #64748b; margin-bottom: 16px;"><em>Xoay khối 3D để thấy tia chiếu song song (đường vàng) tạo bóng A'B'C' trên mặt sàn xanh.</em></p>
<div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
<button id="btnToggleRays" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #f59e0b; background: #fef3c7; color: #b45309; font-weight: bold; cursor: pointer;">Hiện / Ẩn Tia chiếu vàng</button>
<button id="btnReset3D_14" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
</div>
<div style="position: relative; max-width: 600px; margin: 0 auto; user-select: none;">
<svg id="svg3DSpace14" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); cursor: grab; touch-action: none; font-family: system-ui, sans-serif;">
<g id="g14Floor"></g>
<g id="g14Shadow"></g>
<g id="g14Rays"></g>
<g id="g14Triangle"></g>
<g id="g14Vertices"></g>
<g id="g14Labels"></g>
</svg>
<div style="margin-top: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div>
<label style="font-weight: bold; color: #334155;">Góc xoay ngang: <span id="valYaw14">35°</span></label>
<input id="sliderYaw14" type="range" min="-180" max="180" value="35" style="width: 100%; margin-top: 4px;">
</div>
<div>
<label style="font-weight: bold; color: #334155;">Góc nghiêng đứng: <span id="valPitch14">22°</span></label>
<input id="sliderPitch14" type="range" min="-60" max="60" value="22" style="width: 100%; margin-top: 4px;">
</div>
</div>
</div>
</div>

<script>
(function(){
  var showRays = true;
  var yaw = 35 * Math.PI / 180;
  var pitch = 22 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;

  var floorHeight = -70;
  var rayDir = [-0.35, -1, 0.2];

  var origVerts = {
    'A': [-60, 60, -40],
    'B': [60, 40, -50],
    'C': [10, 80, 50]
  };

  function getShadow(pt){
    var t = (floorHeight - pt[1]) / rayDir[1];
    return [
      pt[0] + t * rayDir[0],
      floorHeight,
      pt[2] + t * rayDir[2]
    ];
  }

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
    var svg = document.getElementById('svg3DSpace14');
    if(!svg) return;
    var w = 540, h = 380;

    var pA = project(origVerts['A'], w, h);
    var pB = project(origVerts['B'], w, h);
    var pC = project(origVerts['C'], w, h);

    var sA = project(getShadow(origVerts['A']), w, h);
    var sB = project(getShadow(origVerts['B']), w, h);
    var sC = project(getShadow(origVerts['C']), w, h);

    var fl1 = project([-140, floorHeight, -100], w, h);
    var fl2 = project([140, floorHeight, -100], w, h);
    var fl3 = project([140, floorHeight, 100], w, h);
    var fl4 = project([-140, floorHeight, 100], w, h);

    var gFloor = document.getElementById('g14Floor');
    var gShadow = document.getElementById('g14Shadow');
    var gRays = document.getElementById('g14Rays');
    var gTri = document.getElementById('g14Triangle');
    var gVerts = document.getElementById('g14Vertices');
    var gLabels = document.getElementById('g14Labels');

    var flPts = [fl1, fl2, fl3, fl4].map(function(p){ return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
    gFloor.innerHTML = '<polygon points="' + flPts + '" fill="rgba(241,245,249,0.9)" stroke="#cbd5e1" stroke-width="1.8"/>' +
                       '<text x="' + (fl4.x + 10).toFixed(1) + '" y="' + (fl4.y - 10).toFixed(1) + '" font-size="12" font-weight="bold" fill="#64748b">Mặt phẳng chiếu (α)</text>';

    var shPts = [sA, sB, sC].map(function(p){ return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
    gShadow.innerHTML = '<polygon points="' + shPts + '" fill="rgba(100,116,139,0.35)" stroke="#475569" stroke-width="2" stroke-dasharray="4,3"/>';

    var rayMarkup = '';
    if(showRays){
      rayMarkup += '<line x1="' + pA.x.toFixed(1) + '" y1="' + pA.y.toFixed(1) + '" x2="' + sA.x.toFixed(1) + '" y2="' + sA.y.toFixed(1) + '" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,4"/>';
      rayMarkup += '<line x1="' + pB.x.toFixed(1) + '" y1="' + pB.y.toFixed(1) + '" x2="' + sB.x.toFixed(1) + '" y2="' + sB.y.toFixed(1) + '" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,4"/>';
      rayMarkup += '<line x1="' + pC.x.toFixed(1) + '" y1="' + pC.y.toFixed(1) + '" x2="' + sC.x.toFixed(1) + '" y2="' + sC.y.toFixed(1) + '" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,4"/>';
    }
    gRays.innerHTML = rayMarkup;

    var triPts = [pA, pB, pC].map(function(p){ return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
    gTri.innerHTML = '<polygon points="' + triPts + '" fill="rgba(37,99,235,0.25)" stroke="#2563eb" stroke-width="2.5"/>';

    var vertMarkup = '';
    var labelMarkup = '';
    var pts = [
      {p: pA, name: 'A', col: '#2563eb', offY: -8},
      {p: pB, name: 'B', col: '#2563eb', offY: -8},
      {p: pC, name: 'C', col: '#2563eb', offY: -8},
      {p: sA, name: "A'", col: '#475569', offY: 16},
      {p: sB, name: "B'", col: '#475569', offY: 16},
      {p: sC, name: "C'", col: '#475569', offY: 16}
    ];

    pts.forEach(function(item){
      vertMarkup += '<circle cx="' + item.p.x.toFixed(1) + '" cy="' + item.p.y.toFixed(1) + '" r="5" fill="' + item.col + '" stroke="#fff" stroke-width="1.8"/>';
      var offX = item.p.x > w/2 ? 8 : -16;
      labelMarkup += '<text x="' + (item.p.x + offX).toFixed(1) + '" y="' + (item.p.y + item.offY).toFixed(1) + '" font-size="13" font-weight="bold" fill="#0f172a">' + item.name + '</text>';
    });
    gVerts.innerHTML = vertMarkup;
    gLabels.innerHTML = labelMarkup;

    var lblY = document.getElementById('valYaw14');
    var lblP = document.getElementById('valPitch14');
    var sY = document.getElementById('sliderYaw14');
    var sP = document.getElementById('sliderPitch14');
    if(lblY) lblY.textContent = Math.round(yaw * 180 / Math.PI) + '°';
    if(lblP) lblP.textContent = Math.round(pitch * 180 / Math.PI) + '°';
    if(sY) sY.value = Math.round(yaw * 180 / Math.PI);
    if(sP) sP.value = Math.round(pitch * 180 / Math.PI);
  }

  function setupEvents14(){
    var svg = document.getElementById('svg3DSpace14');
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

    var sY = document.getElementById('sliderYaw14');
    var sP = document.getElementById('sliderPitch14');
    if(sY) sY.addEventListener('input', function(e){ yaw = e.target.value * Math.PI / 180; render(); });
    if(sP) sP.addEventListener('input', function(e){ pitch = e.target.value * Math.PI / 180; render(); });

    var bRays = document.getElementById('btnToggleRays');
    var bReset = document.getElementById('btnReset3D_14');

    if(bRays) bRays.addEventListener('click', function(){
      showRays = !showRays;
      bRays.style.background = showRays ? '#fef3c7' : '#f1f5f9';
      render();
    });

    if(bReset) bReset.addEventListener('click', function(){
      yaw = 35 * Math.PI / 180;
      pitch = 22 * Math.PI / 180;
      render();
    });

    render();
  }

  if(document.readyState === 'loading'){
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', setupEvents14); } else { setupEvents14(); }
  } else {
    setupEvents14();
  }
})();
</script>

---

## III. Các Tính chất của Phép chiếu song song

> [!IMPORTANT]
> **Định lý 1 (Các tính chất bảo toàn hình học):**
> 1. Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và **bảo toàn thứ tự giữa ba điểm đó**.
> 2. Biến đường thẳng không song song với phương chiếu thành đường thẳng; biến tia thành tia; biến đoạn thẳng thành đoạn thẳng.
> 3. Biến hai đường thẳng song song thành hai đường thẳng **song song hoặc trùng nhau**.
> 4. Phép chiếu song song **bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song**:
>    $$\frac{A' B'}{C' D'} = \frac{AB}{CD}$$

---

## IV. Hình biểu diễn của một số hình phẳng quen thuộc

Dưới tác động của phép chiếu song song:

| Hình phẳng trong không gian ($\mathcal{H}$) | Hình biểu diễn trên bản vẽ phẳng ($\mathcal{H}'$) |
| :--- | :--- |
| **Tam giác bất kỳ (đều, cân, vuông)** | **Tam giác thường** bất kỳ |
| **Hình bình hành, hình thoi, hình chữ nhật, hình vuông** | **Hình bình hành** |
| **Hình thang có tỉ số hai đáy $\frac{a}{b} = k$** | **Hình thang** có cùng tỉ số hai đáy $k$ |
| **Hình tròn** | **Đường Elip** (hoặc đường tròn trong trường hợp đặc biệt) |

---

## V. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Xác định hình chiếu của một điểm, một đoạn thẳng

#### Ví dụ 1:
Cho hình hộp $ABCD.A'B'C'D'$. Tìm hình chiếu song song của:
a) Điểm $B'$ lên mặt phẳng $(ABCD)$ theo phương chiếu $A'A$.  
b) Đoạn thẳng $A'C$ lên mặt phẳng $(ABCD)$ theo phương chiếu $CC'$.  
c) Tam giác $A'BD$ lên mặt phẳng $(A'B'C'D')$ theo phương chiếu $BB'$.

#### Lời giải chi tiết:
**a)** Vì $B'B \parallel A'A$ nên đường thẳng chiếu qua $B'$ song song với phương chiếu $A'A$ chính là đường thẳng $B'B$. Đường thẳng này cắt mặt đáy $(ABCD)$ tại điểm $B$.  
Vậy hình chiếu của điểm $B'$ là điểm **$B$**.

**b)** Theo phương chiếu $CC'$:
- Hình chiếu của điểm $C$ (nằm sẵn trên mặt đáy $(ABCD)$) là chính nó: $C \mapsto C$.
- Hình chiếu của điểm $A'$ là điểm $A$ (do $A'A \parallel CC'$).  
Vậy hình chiếu song song của đoạn thẳng $A'C$ lên mặt phẳng $(ABCD)$ là đoạn thẳng **$AC$**.

**c)** Theo phương chiếu $BB'$:
- $A'$ nằm trên $(A'B'C'D')$ nên hình chiếu của $A'$ là chính nó: $A' \mapsto A'$.
- $B \mapsto B'$ (vì $BB' \parallel BB'$).
- $D \mapsto D'$ (vì $DD' \parallel BB'$).  
Vậy hình chiếu của tam giác $A'BD$ lên $(A'B'C'D')$ là tam giác **$A'B'D'$**.

---

### Dạng 2: Vẽ hình biểu diễn và Dựng điểm thỏa mãn tỉ số

#### Ví dụ 2:
Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M$ là trung điểm của $A'B'$. Hãy xác định hình chiếu song song của điểm $M$ lên mặt phẳng $(ABC)$ theo phương chiếu $A'C$.

#### Lời giải chi tiết:
- Trong mặt phẳng $(A'B'C')$, qua $M$ kẻ đường thẳng song song với $A'C'$ cắt $B'C'$ tại điểm $N$. Vì $M$ là trung điểm $A'B'$ nên $N$ là trung điểm của $B'C'$ và $MN = \frac{1}{2}A'C'$.
- Mặt phẳng phụ chứa đường thẳng chiếu qua $M$ song song với $A'C$: đó chính là mặt phẳng chứa $MN \parallel A'C \parallel AC$.
- Đường thẳng qua $M$ song song với $A'C$ cắt cạnh đáy tương ứng $BC$ tại điểm $M'$.  
Khi đó điểm $M'$ chính là hình chiếu song song cần tìm.

---

## VI. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Phép chiếu song song biến ba điểm thẳng hàng thành:",
  "options": [
    "A. Ba điểm không thẳng hàng",
    "B. Ba điểm thẳng hàng và bảo toàn thứ tự giữa chúng",
    "C. Một tam giác",
    "D. Ba điểm trùng nhau"
  ],
  "answer": "B. Ba điểm thẳng hàng và bảo toàn thứ tự giữa chúng",
  "explanation": "Theo Định lý 1: Phép chiếu song song bảo toàn tính thẳng hàng và thứ tự giữa các điểm."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Hình chiếu song song của hai đường thẳng cắt nhau có thể là:",
  "options": [
    "A. Hai đường thẳng cắt nhau",
    "B. Hai đường thẳng song song",
    "C. Hai đường thẳng chéo nhau",
    "D. Một đường tròn"
  ],
  "answer": "A. Hai đường thẳng cắt nhau",
  "explanation": "Giao điểm của hai đường thẳng sẽ có hình chiếu là giao điểm của hai đường thẳng hình chiếu, do đó hình chiếu của chúng cắt nhau (hoặc trùng nhau nếu mặt phẳng chứa chúng song song phương chiếu)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Đại lượng nào sau đây được BẢO TOÀN qua phép chiếu song song?",
  "options": [
    "A. Độ lớn của góc",
    "B. Độ dài đoạn thẳng bất kỳ",
    "C. Tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng",
    "D. Diện tích hình phẳng"
  ],
  "answer": "C. Tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng",
  "explanation": "Phép chiếu song song bảo toàn tỉ số độ dài của hai đoạn thẳng cùng phương."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hình biểu diễn của một hình vuông trên bản vẽ không gian thường là:",
  "options": [
    "A. Hình vuông",
    "B. Hình chữ nhật",
    "C. Hình thoi",
    "D. Hình bình hành"
  ],
  "answer": "D. Hình bình hành",
  "explanation": "Góc vuông không được bảo toàn nhưng tính song song được bảo toàn, nên hình vuông được vẽ thành hình bình hành."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Hình biểu diễn của một đường tròn qua phép chiếu song song nói chung là:",
  "options": [
    "A. Hình đa giác đều",
    "B. Đường Elip",
    "C. Đường Parabol",
    "D. Đoạn thẳng"
  ],
  "answer": "B. Đường Elip",
  "explanation": "Hình chiếu song song của một đường tròn lên mặt phẳng nói chung là một đường Elip."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Phép chiếu song song biến trung điểm M của đoạn thẳng AB thành điểm M'. Khi đó M' là:",
  "options": [
    "A. Điểm bất kỳ trên đoạn A'B'",
    "B. Trung điểm của đoạn thẳng A'B'",
    "C. Trùng với điểm A'",
    "D. Nằm ngoài đoạn thẳng A'B'"
  ],
  "answer": "B. Trung điểm của đoạn thẳng A'B'",
  "explanation": "Do bảo toàn tỉ số đoạn thẳng cùng phương: MA / MB = 1 ⇒ M'A' / M'B' = 1, nên M' là trung điểm A'B'."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Cho hình hộp ABCD.A'B'C'D'. Hình chiếu song song của điểm C' lên mặt phẳng (ABCD) theo phương chiếu A'A là điểm:",
  "options": [
    "A. Điểm A",
    "B. Điểm B",
    "C. Điểm C",
    "D. Điểm D"
  ],
  "answer": "C. Điểm C",
  "explanation": "Vì C'C ∥ A'A nên đường chiếu qua C' chính là C'C cắt (ABCD) tại điểm C."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Cho tam giác ABC có trọng tâm G. Gọi A', B', C', G' lần lượt là hình chiếu song song của A, B, C, G lên mặt phẳng (α). Khi đó G' là:",
  "options": [
    "A. Trực tâm của tam giác A'B'C'",
    "B. Trọng tâm của tam giác A'B'C'",
    "C. Tâm đường tròn ngoại tiếp tam giác A'B'C'",
    "D. Điểm bất kỳ"
  ],
  "answer": "B. Trọng tâm của tam giác A'B'C'",
  "explanation": "Do tính chất bảo toàn tỉ số đoạn thẳng, trung điểm biến thành trung điểm và tỉ số trọng tâm 2/3 được bảo toàn nên G' chính là trọng tâm tam giác A'B'C'."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Khi nào thì hình chiếu song song của một đoạn thẳng thu nhỏ thành một điểm duy nhất?",
  "options": [
    "A. Khi đoạn thẳng song song với mặt phẳng chiếu",
    "B. Khi đoạn thẳng song song (hoặc nằm trên) đường thẳng có phương chiếu",
    "C. Khi đoạn thẳng vuông góc với mặt phẳng chiếu",
    "D. Không bao giờ xảy ra"
  ],
  "answer": "B. Khi đoạn thẳng song song (hoặc nằm trên) đường thẳng có phương chiếu",
  "explanation": "Khi đường thẳng chứa đoạn thẳng song song với phương chiếu, mọi điểm trên đoạn thẳng đều có tia chiếu trùng nhau và cắt mặt phẳng chiếu tại đúng 1 điểm duy nhất."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hai hình tam giác trong không gian bằng nhau thì hình biểu diễn của chúng có nhất thiết phải bằng nhau không?",
  "options": [
    "A. Luôn luôn bằng nhau",
    "B. Không nhất thiết bằng nhau",
    "C. Chỉ bằng nhau khi chúng cùng là tam giác đều",
    "D. Chỉ bằng nhau khi chúng cùng nằm trong một mặt phẳng"
  ],
  "answer": "B. Không nhất thiết bằng nhau",
  "explanation": "Vì độ dài và góc phụ thuộc vào góc nghiêng đối với phương chiếu nên hai tam giác bằng nhau có thể có hình chiếu có kích thước khác nhau."
}'></div>

---

## VII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Cho hình lăng trụ $ABC.A'B'C'$. Gọi $I$ là trung điểm của cạnh bên $BB'$.**  
   Xác định hình chiếu song song của tam giác $AB'C$ lên mặt phẳng đáy $(ABC)$ theo phương chiếu $AI$.

2. **Dựng hình biểu diễn của một hình lục giác đều $ABCDEF$ trong không gian.**  
   *(Gợi ý: Dựa vào tính chất các đường chéo chính cắt nhau tại trung điểm và tạo thành 6 tam giác đều)*.
