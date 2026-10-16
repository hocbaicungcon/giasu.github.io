---
title: 'Toán 11 Bài 10: Đường thẳng và mặt phẳng trong không gian - Khái niệm, cách xác định và thiết diện'
description: 'Lý thuyết trọng tâm Bài 10 Toán 11 Kết nối tri thức: Khái niệm mặt phẳng, quy tắc biểu diễn hình không gian, các tiên đề thừa nhận, 4 cách xác định mặt phẳng, hình chóp, hình tứ diện, phương pháp tìm giao tuyến, giao điểm, thiết diện và mô hình 3D tương tác xoay 360 độ.'
category: Toán học
type: Bài học
date: '2026-10-16'
tags:
  - Toán học
  - Toán 11
  - Hình học không gian 11
  - Đường thẳng và mặt phẳng
  - Giao tuyến
  - Thiết diện
  - Hình chóp và tứ diện
  - Hình học 3D tương tác
  - Kết nối tri thức
grade: 11
---

# Bài 10. Đường thẳng và mặt phẳng trong không gian

Chào mừng các em bước vào **Chương IV: Quan hệ song song trong không gian** — thế giới kỳ thú của Hình học không gian 3 chiều (3D)!

Từ trước đến nay, trong hình học phẳng, mọi hình vẽ (tam giác, đường tròn, đường thẳng) đều cùng nằm trọn vẹn trên một mặt phẳng hai chiều (mặt bảng hoặc trang giấy). Nhưng thế giới thực quanh ta là không gian ba chiều:
- Một chiếc kiềng ba chân luôn đứng vững chãi trên mọi mặt sàn gồ ghề (tại sao kiềng 4 chân lại dễ bị khập khiễng?).
- Tia nắng mặt trời xuyên qua khe cửa rọi xuống nền nhà tạo thành những vệt sáng hình học.
- Mái nhà hình chóp tam giác hoặc kim tự tháp với các mặt nghiêng giao nhau theo các gờ sống mái.
- Khi người thợ mộc cưa một khối gỗ qua một mặt phẳng nghiêng, vết cắt phẳng để lại trên khúc gỗ có hình thù gì?

Bài học này sẽ trang bị cho các em các tiên đề nền tảng, quy tắc vẽ hình không gian chuẩn xác và cách tư duy trực quan với mô hình 3D xoay tương tác sinh động!

---

<div class="flowchart-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 24px; margin: 24px 0;">
<h3 style="margin-top: 0; text-align: center; color: var(--primary-color, #2563eb);">BẢN ĐỒ KIẾN THỨC: ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN</h3>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 16px;">
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6;">
<h4 style="margin: 0 0 8px 0; color: #1d4ed8;">1. Quy tắc vẽ hình 3D</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Đường nhìn thấy vẽ bằng <strong>nét liền</strong> (—).<br>• Đường bị che khuất vẽ bằng <strong>nét đứt</strong> (- - -).<br>• Quan hệ song song và tỉ số đoạn thẳng cùng phương được bảo toàn.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981;">
<h4 style="margin: 0 0 8px 0; color: #047857;">2. Các tiên đề thừa nhận</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• 3 điểm không thẳng hàng xác định duy nhất 1 mặt phẳng.<br>• 2 điểm chung $\Rightarrow$ đường thẳng nằm trọn trong mặt phẳng.<br>• 2 mặt phẳng phân biệt có điểm chung $\Rightarrow$ có đường giao tuyến duy nhất.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
<h4 style="margin: 0 0 8px 0; color: #b45309;">3. 4 Cách xác định mặt phẳng</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Qua 3 điểm không thẳng hàng: $(ABC)$.<br>• Qua 1 điểm và 1 đường thẳng: $(A, d)$ với $A \notin d$.<br>• Qua 2 đường thẳng cắt nhau: $(a, b)$.<br>• Qua 2 đường thẳng song song: $(a, b)$ với $a \parallel b$.</p>
</div>
<div style="background: var(--card-bg, #ffffff); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
<h4 style="margin: 0 0 8px 0; color: #6d28d9;">4. Thiết diện (Mặt cắt)</h4>
<p style="margin: 0; font-size: 0.9em; line-height: 1.7;">• Là đa giác phẳng tạo bởi các đoạn giao tuyến của $(\alpha)$ với các mặt của hình đa diện.<br>• Đỉnh là giao điểm với các cạnh; cạnh là giao tuyến với các mặt.</p>
</div>
</div>
</div>

---

## Khởi động — Thử thách phản xạ nhanh 5 câu (5 phút)

1. **Thực tế:** Tại sao chiếc kiềng 3 chân luôn đứng vững trên mặt đất, trong khi chiếc bàn 4 chân thường bị khập khiễng nếu nền nhà không bằng phẳng?
2. **Quy tắc nét vẽ:** Khi vẽ một hình tứ diện trong không gian, có mấy cạnh nhìn thấy vẽ bằng nét liền và mấy cạnh bị khuất vẽ bằng nét đứt?
3. **Độ thẳng hàng:** Qua 3 điểm thẳng hàng, ta có thể dựng được bao nhiêu mặt phẳng phân biệt?
4. **Giao tuyến:** Nếu hai mặt phẳng có một điểm chung $M$, chúng sẽ có thêm bao nhiêu điểm chung nữa?
5. **Hình biểu diễn:** Hình vuông trong không gian thường được biểu diễn trên giấy thành hình gì?

> [!TIP]
> **Giải đáp khởi động:**
> 1. Vì theo tiên đề hình học không gian: **Có một và chỉ một mặt phẳng đi qua 3 điểm không thẳng hàng**. Ba chân của chiếc kiềng luôn xác định một mặt phẳng duy nhất dù mặt đất có lồi lõm ra sao. Còn 4 chân có thể không cùng nằm trên một mặt phẳng (không đồng phẳng) dẫn đến hiện tượng bập bênh!
> 2. Có 5 cạnh nhìn thấy vẽ bằng nét liền và 1 cạnh đáy/khuất bên trong vẽ bằng nét đứt (hoặc 4 cạnh liền, 2 cạnh đứt tùy góc nhìn).
> 3. Vô số mặt phẳng phân biệt (giống như các trang sách cùng mở ra từ một gáy sách là đường thẳng đi qua 3 điểm đó).
> 4. Có vô số điểm chung, tất cả cùng nằm trên một đường thẳng duy nhất gọi là giao tuyến đi qua $M$.
> 5. Thường được vẽ thành một **hình bình hành**.

---

## I. Khái niệm Mặt phẳng và Quy tắc vẽ hình biểu diễn

### 1. Mặt phẳng trong không gian

- Mặt phẳng là một đối tượng cơ bản của hình học không gian, không có bề dày và mở rộng vô hạn về mọi phía.
- Ký hiệu: Mặt phẳng thường được đặt tên bằng chữ cái in hoa đặt trong dấu ngoặc đơn như $(P), (Q), (\alpha), (\beta)$ hoặc bằng 3 điểm không thẳng hàng xác định nó $(ABC)$.
- Biểu diễn trực quan: Ta thường vẽ mặt phẳng bằng một hình bình hành hoặc một miền kín có góc nhọn.

### 2. Quy tắc vẽ hình biểu diễn của một hình không gian

Để người nhìn cảm nhận được độ sâu không gian 3 chiều trên mặt phẳng giấy 2 chiều, ta phải tuân thủ nghiêm ngặt các quy tắc sau:

> [!IMPORTANT]
> **4 Quy tắc vàng khi vẽ hình không gian:**
> 1. **Quy tắc nhìn thấy:** 
>    - Đường nhìn thấy (nằm ở phía trước, không bị các mặt khác che lấp) được vẽ bằng **nét liền** (—).
>    - Đường bị che khuất (nằm phía sau hoặc đi xuyên bên trong lòng khối) bắt buộc phải vẽ bằng **nét đứt** (- - -).
> 2. **Bảo toàn quan hệ thẳng hàng và thứ tự điểm:** Nếu 3 điểm thẳng hàng trong không gian thì hình biểu diễn của chúng cũng phải thẳng hàng và bảo toàn thứ tự giữa các điểm.
> 3. **Bảo toàn quan hệ song song:** Hai đường thẳng song song (hoặc cắt nhau) trong không gian thì hình biểu diễn cũng phải song song (hoặc cắt nhau).
> 4. **Bảo toàn tỉ số độ dài đoạn thẳng cùng phương:** Nếu hai đoạn thẳng nằm trên cùng một đường thẳng hoặc trên hai đường thẳng song song thì tỉ số độ dài của chúng được giữ nguyên trên hình biểu diễn.  
>    *(Lưu ý: Độ lớn góc và độ dài của hai đoạn thẳng không cùng phương nói chung KHÔNG được bảo toàn — góc vuông có thể vẽ thành góc nhọn hoặc góc tù)*.

---

## II. Mô hình Hình học 3D Tương tác (Interactive 3D Geometry)

Hãy dùng chuột (hoặc ngón tay trên điện thoại) để **kéo và xoay mô hình không gian 3D** dưới đây. Em cũng có thể sử dụng các thanh trượt điều chỉnh góc xoay ngang (Yaw) và góc nghiêng (Pitch) để quan sát sự chuyển đổi phối cảnh từ các góc độ khác nhau!

<div class="interactive-3d-container" style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
<h3 style="margin-top: 0; color: #2563eb;">PHÒNG THÍ NGHIỆM HÌNH HỌC 3D TƯƠNG TÁC</h3>
<p style="font-size: 0.9em; color: #64748b; margin-bottom: 16px;"><em>Giữ chuột trái và rê trên khung hình hoặc kéo thanh trượt để xoay khối hình 3D trong không gian.</em></p>
<div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
<button id="btnModelTetra" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #2563eb; background: #2563eb; color: #fff; font-weight: bold; cursor: pointer;">Hình Tứ diện S.ABC</button>
<button id="btnModelPyramid" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; color: #334155; font-weight: bold; cursor: pointer;">Hình Chóp đáy tứ giác S.ABCD</button>
<button id="btnToggleSection" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #10b981; background: #ecfdf5; color: #047857; font-weight: bold; cursor: pointer;">Hiện / Ẩn Thiết diện (Mặt cắt)</button>
<button id="btnReset3D" style="padding: 6px 14px; border-radius: 6px; border: 1px solid #94a3b8; background: #f1f5f9; color: #475569; cursor: pointer;">Đặt lại góc nhìn</button>
</div>
<div style="position: relative; max-width: 600px; margin: 0 auto; user-select: none;">
<svg id="svg3DSpace" data-interactive-done="true" viewBox="0 0 540 380" style="width: 100%; height: auto; background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); cursor: grab; touch-action: none; font-family: system-ui, sans-serif;">
<defs>
<filter id="shadow3d" x="-10%" y="-10%" width="120%" height="120%">
<feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.15"/>
</filter>
</defs>
<g id="g3DFaces"></g>
<g id="g3DEdges"></g>
<g id="g3DSection"></g>
<g id="g3DVertices"></g>
<g id="g3DLabels"></g>
</svg>
<div style="margin-top: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.85em; text-align: left; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div>
<label style="font-weight: bold; color: #334155;">Góc xoay ngang (Yaw): <span id="valYaw">35°</span></label>
<input id="sliderYaw" type="range" min="-180" max="180" value="35" style="width: 100%; margin-top: 4px;">
</div>
<div>
<label style="font-weight: bold; color: #334155;">Góc nghiêng đứng (Pitch): <span id="valPitch">20°</span></label>
<input id="sliderPitch" type="range" min="-60" max="60" value="20" style="width: 100%; margin-top: 4px;">
</div>
</div>
</div>
</div>

<script>
(function(){
  var curModel = 'tetra';
  var showSection = false;
  var yaw = 35 * Math.PI / 180;
  var pitch = 20 * Math.PI / 180;
  var isDragging = false;
  var startX, startY;

  var models = {
    tetra: {
      vertices: {
        'S': [0, 110, 0],
        'A': [-75, -50, -60],
        'B': [80, -50, -50],
        'C': [0, -60, 85]
      },
      edges: [
        ['S', 'A'], ['S', 'B'], ['S', 'C'],
        ['A', 'B'], ['B', 'C'], ['C', 'A']
      ],
      faces: [
        ['S', 'A', 'B'], ['S', 'B', 'C'], ['S', 'C', 'A'], ['A', 'B', 'C']
      ],
      section: [
        [-37.5, 30, -30], [40, 30, -25], [0, 25, 42.5]
      ]
    },
    pyramid: {
      vertices: {
        'S': [0, 120, 0],
        'A': [-80, -50, -70],
        'B': [80, -50, -70],
        'C': [90, -50, 70],
        'D': [-70, -50, 70]
      },
      edges: [
        ['S', 'A'], ['S', 'B'], ['S', 'C'], ['S', 'D'],
        ['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'A']
      ],
      faces: [
        ['S', 'A', 'B'], ['S', 'B', 'C'], ['S', 'C', 'D'], ['S', 'D', 'A'],
        ['A', 'B', 'C', 'D']
      ],
      section: [
        [-40, 35, -35], [40, 35, -35], [45, 35, 35], [-35, 35, 35]
      ]
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
    var svg = document.getElementById('svg3DSpace');
    if(!svg) return;
    var w = 540, h = 380;
    var m = models[curModel];
    var proj = {};
    for(var k in m.vertices){
      proj[k] = project(m.vertices[k], w, h);
    }

    var gFaces = document.getElementById('g3DFaces');
    var gEdges = document.getElementById('g3DEdges');
    var gSection = document.getElementById('g3DSection');
    var gVerts = document.getElementById('g3DVertices');
    var gLabels = document.getElementById('g3DLabels');

    var faceMarkup = '';
    m.faces.forEach(function(f, idx){
      var pts = f.map(function(v){ return proj[v].x.toFixed(1) + ',' + proj[v].y.toFixed(1); }).join(' ');
      var col = idx % 2 === 0 ? 'rgba(37,99,235,0.08)' : 'rgba(16,185,129,0.08)';
      faceMarkup += '<polygon points="' + pts + '" fill="' + col + '" stroke="none"/>';
    });
    gFaces.innerHTML = faceMarkup;

    var edgeMarkup = '';
    m.edges.forEach(function(e){
      var p1 = proj[e[0]], p2 = proj[e[1]];
      var isHidden = (e[0] === 'A' && e[1] === 'B') || (e[0] === 'S' && e[1] === 'A' && p1.depth < 0 && p2.depth < 0);
      var dash = isHidden ? 'stroke-dasharray="5,4" stroke="#94a3b8" stroke-width="1.8"' : 'stroke="#2563eb" stroke-width="2.2"';
      edgeMarkup += '<line x1="' + p1.x.toFixed(1) + '" y1="' + p1.y.toFixed(1) + '" x2="' + p2.x.toFixed(1) + '" y2="' + p2.y.toFixed(1) + '" ' + dash + ' stroke-linecap="round"/>';
    });
    gEdges.innerHTML = edgeMarkup;

    var secMarkup = '';
    if(showSection && m.section){
      var secPts = m.section.map(function(pt){
        var pr = project(pt, w, h);
        return pr.x.toFixed(1) + ',' + pr.y.toFixed(1);
      }).join(' ');
      secMarkup += '<polygon points="' + secPts + '" fill="rgba(245,158,11,0.35)" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4,3"/>';
    }
    gSection.innerHTML = secMarkup;

    var vertMarkup = '';
    var labelMarkup = '';
    for(var name in proj){
      var p = proj[name];
      var col = name === 'S' ? '#dc2626' : '#1d4ed8';
      vertMarkup += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="5.5" fill="' + col + '" stroke="#ffffff" stroke-width="2"/>';
      var offX = p.x > w/2 ? 8 : -18;
      var offY = p.y < h/2 ? -8 : 16;
      labelMarkup += '<text x="' + (p.x + offX).toFixed(1) + '" y="' + (p.y + offY).toFixed(1) + '" font-size="14" font-weight="bold" fill="#0f172a">' + name + '</text>';
    }
    gVerts.innerHTML = vertMarkup;
    gLabels.innerHTML = labelMarkup;

    var lblY = document.getElementById('valYaw');
    var lblP = document.getElementById('valPitch');
    var sY = document.getElementById('sliderYaw');
    var sP = document.getElementById('sliderPitch');
    if(lblY) lblY.textContent = Math.round(yaw * 180 / Math.PI) + '°';
    if(lblP) lblP.textContent = Math.round(pitch * 180 / Math.PI) + '°';
    if(sY) sY.value = Math.round(yaw * 180 / Math.PI);
    if(sP) sP.value = Math.round(pitch * 180 / Math.PI);
  }

  function setupEvents(){
    var svg = document.getElementById('svg3DSpace');
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

    var sY = document.getElementById('sliderYaw');
    var sP = document.getElementById('sliderPitch');
    if(sY) sY.addEventListener('input', function(e){ yaw = e.target.value * Math.PI / 180; render(); });
    if(sP) sP.addEventListener('input', function(e){ pitch = e.target.value * Math.PI / 180; render(); });

    var bTetra = document.getElementById('btnModelTetra');
    var bPyra = document.getElementById('btnModelPyramid');
    var bSec = document.getElementById('btnToggleSection');
    var bReset = document.getElementById('btnReset3D');

    if(bTetra) bTetra.addEventListener('click', function(){
      curModel = 'tetra';
      bTetra.style.background = '#2563eb'; bTetra.style.color = '#fff';
      if(bPyra){ bPyra.style.background = '#fff'; bPyra.style.color = '#334155'; }
      render();
    });

    if(bPyra) bPyra.addEventListener('click', function(){
      curModel = 'pyramid';
      bPyra.style.background = '#2563eb'; bPyra.style.color = '#fff';
      if(bTetra){ bTetra.style.background = '#fff'; bTetra.style.color = '#334155'; }
      render();
    });

    if(bSec) bSec.addEventListener('click', function(){
      showSection = !showSection;
      bSec.style.background = showSection ? '#10b981' : '#ecfdf5';
      bSec.style.color = showSection ? '#ffffff' : '#047857';
      render();
    });

    if(bReset) bReset.addEventListener('click', function(){
      yaw = 35 * Math.PI / 180;
      pitch = 20 * Math.PI / 180;
      render();
    });

    render();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupEvents);
  } else {
    setupEvents();
  }
})();
</script>

---

## III. Các Tiên đề thừa nhận của Hình học không gian

Toàn bộ hệ thống định lý của hình học không gian được xây dựng chặt chẽ từ 6 tính chất thừa nhận (tiên đề) cơ bản sau:

> [!NOTE]
> **Hệ thống 6 Tiên đề nền tảng:**
> 1. **Tiên đề 1:** Có một và chỉ một đường thẳng đi qua hai điểm phân biệt cho trước.
> 2. **Tiên đề 2:** Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng cho trước.
> 3. **Tiên đề 3:** Nếu một đường thẳng có hai điểm phân biệt cùng thuộc một mặt phẳng thì mọi điểm của đường thẳng đó đều thuộc mặt phẳng đó (đường thẳng nằm hoàn toàn trong mặt phẳng).
> 4. **Tiên đề 4:** Tồn tại bốn điểm không cùng thuộc một mặt phẳng (các điểm không đồng phẳng).
> 5. **Tiên đề 5:** Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm chung đó (gọi là **giao tuyến** của hai mặt phẳng).
> 6. **Tiên đề 6:** Trên mỗi mặt phẳng, mọi kết quả và định lý đã biết của hình học phẳng đều hoàn toàn đúng đắn.

---

## IV. Bốn cách xác định một Mặt phẳng

Một mặt phẳng hoàn toàn được xác định (duy nhất) khi biết một trong bốn yếu tố sau:

1. **Ba điểm không thẳng hàng:** Mặt phẳng đi qua ba điểm $A, B, C$ không thẳng hàng, ký hiệu là $(ABC)$.
2. **Một điểm và một đường thẳng không đi qua điểm đó:** Cho đường thẳng $d$ và điểm $A \notin d$. Có duy nhất một mặt phẳng chứa cả $A$ và $d$, ký hiệu là $(A, d)$.
3. **Hai đường thẳng cắt nhau:** Cho hai đường thẳng $a$ và $b$ cắt nhau tại điểm $I$. Có duy nhất một mặt phẳng chứa cả $a$ và $b$, ký hiệu là $(a, b)$.
4. **Hai đường thẳng song song:** Cho hai đường thẳng phân biệt $a$ và $b$ song song với nhau. Có duy nhất một mặt phẳng chứa cả $a$ và $b$, ký hiệu là $(a, b)$.

---

## V. Hình chóp và Hình tứ diện

### 1. Hình chóp

- Cho đa giác lồi $A_1 A_2 \dots A_n$ nằm trong mặt phẳng $(\alpha)$ và một điểm $S$ nằm ngoài $(\alpha)$.
- Nối đỉnh $S$ với các đỉnh của đa giác, ta được **hình chóp $S.A_1 A_2 \dots A_n$**.
  - $S$ gọi là **đỉnh** của hình chóp.
  - Đa giác $A_1 A_2 \dots A_n$ gọi là **mặt đáy** (gọi tắt là đáy).
  - Các tam giác $S A_1 A_2, S A_2 A_3, \dots, S A_n A_1$ gọi là các **mặt bên**.
  - Các đoạn thẳng $S A_1, S A_2, \dots, S A_n$ gọi là các **cạnh bên**.
  - Các đoạn thẳng $A_1 A_2, A_2 A_3, \dots, A_n A_1$ gọi là các **cạnh đáy**.

### 2. Hình tứ diện

- Khi mặt đáy của hình chóp là một tam giác ($n = 3$), ta được hình chóp tam giác $S.ABC$. Khối hình này có $4$ mặt đều là các tam giác, nên được gọi là **hình tứ diện $SABC$** (hoặc $ABCD$).
- Trong tứ diện $ABCD$:
  - Bất kỳ đỉnh nào cũng có thể coi là đỉnh của tứ diện, và mặt tam giác đối diện là mặt đáy tương ứng.
  - Hai cạnh không có điểm chung gọi là **hai cạnh đối diện** (chẳng hạn $AB$ đối diện $CD$, $AC$ đối diện $BD$, $AD$ đối diện $BC$).

---

## VI. Các dạng toán trọng tâm và Phương pháp giải chi tiết

### Dạng 1: Tìm giao tuyến của hai mặt phẳng cắt nhau

> [!NOTE]
> **Phương pháp 2 điểm chung:**
> Để tìm giao tuyến của hai mặt phẳng phân biệt $(P)$ và $(Q)$:
> 1. Tìm điểm chung thứ nhất $A$: $A \in (P) \cap (Q)$.
> 2. Tìm điểm chung thứ hai $B$: $B \in (P) \cap (Q)$ (thường là giao điểm của hai đường thẳng $a \subset (P)$ và $b \subset (Q)$ cùng nằm trong một mặt phẳng trung gian thứ ba).
> 3. Đường thẳng nối $AB$ chính là giao tuyến cần tìm: $(P) \cap (Q) = AB$.

#### Ví dụ 1:
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$.
a) Tìm giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$.  
b) Gọi $M$ là một điểm thuộc miền trong tam giác $SCD$. Tìm giao tuyến của mặt phẳng $(SBM)$ và mặt phẳng $(SAC)$.

#### Lời giải chi tiết:
**a) Tìm $(SAC) \cap (SBD)$:**
- Ta có $S \in (SAC)$ và $S \in (SBD) \Rightarrow S$ là điểm chung thứ nhất.
- Trong mặt phẳng đáy $(ABCD)$: $AC \cap BD = O$.  
  Vì $O \in AC \subset (SAC) \Rightarrow O \in (SAC)$.  
  Vì $O \in BD \subset (SBD) \Rightarrow O \in (SBD)$.  
  Do đó $O$ là điểm chung thứ hai.  
Vậy giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng **$SO$**.

**b) Tìm $(SBM) \cap (SAC)$:**
- Điểm $S$ hiển nhiên là điểm chung thứ nhất.
- Trong mặt phẳng $(SCD)$: tia $SM$ cắt cạnh đáy $CD$ tại điểm $N$ ($N \in CD$).  
  Khi đó mặt phẳng $(SBM)$ chính là mặt phẳng $(SBN)$.
- Trong mặt phẳng đáy $(ABCD)$: đoạn thẳng $BN$ cắt đường chéo $AC$ tại điểm $I$ ($I = BN \cap AC$).  
  Vì $I \in AC \subset (SAC) \Rightarrow I \in (SAC)$.  
  Vì $I \in BN \subset (SBN) = (SBM) \Rightarrow I \in (SBM)$.  
  Do đó $I$ là điểm chung thứ hai.  
Vậy giao tuyến của $(SBM)$ và $(SAC)$ là đường thẳng **$SI$**.

---

### Dạng 2: Tìm giao điểm của đường thẳng và mặt phẳng

> [!NOTE]
> **Phương pháp dùng mặt phẳng phụ:**
> Để tìm giao điểm của đường thẳng $d$ với mặt phẳng $(\alpha)$:
> - **Bước 1:** Tìm một mặt phẳng phụ $(\beta)$ chứa đường thẳng $d$.
> - **Bước 2:** Xác định giao tuyến $a = (\alpha) \cap (\beta)$.
> - **Bước 3:** Trong mặt phẳng $(\beta)$, tìm giao điểm $I = d \cap a$. Điểm $I$ chính là giao điểm cần tìm: $I = d \cap (\alpha)$.

#### Ví dụ 2:
Cho tứ diện $ABCD$. Trên cạnh $AB$ lấy điểm $M$, trên cạnh $AC$ lấy điểm $N$ sao cho $MN$ không song song với $BC$. Lấy điểm $P$ nằm trong miền tam giác $BCD$. Tìm giao điểm của đường thẳng $MN$ với mặt phẳng $(ADP)$.

#### Lời giải chi tiết:
- Ta chọn mặt phẳng phụ chứa đường thẳng $MN$: Đó chính là mặt phẳng **$(ABC)$**.
- Tìm giao tuyến của mặt phẳng phụ $(ABC)$ và mặt phẳng $(ADP)$:
  + Điểm $A$ hiển nhiên là điểm chung thứ nhất: $A \in (ABC) \cap (ADP)$.
  + Trong mặt phẳng đáy $(BCD)$: tia $DP$ kéo dài cắt cạnh $BC$ tại điểm $E$ ($E = DP \cap BC$).  
    Vì $E \in BC \subset (ABC) \Rightarrow E \in (ABC)$.  
    Vì $E \in DP \subset (ADP) \Rightarrow E \in (ADP)$.  
    Do đó $E$ là điểm chung thứ hai.  
  Vậy $(ABC) \cap (ADP) = AE$.
- Trong mặt phẳng $(ABC)$: hai đường thẳng $MN$ và $AE$ cùng nằm trong mặt phẳng này và không song song, nên chúng cắt nhau tại điểm $K$ ($K = MN \cap AE$).
- Kết luận: Vì $K \in AE \subset (ADP)$ nên $K \in (ADP)$. Do đó điểm **$K$ chính là giao điểm của $MN$ với mặt phẳng $(ADP)$**.

---

### Dạng 3: Xác định thiết diện (mặt cắt) của hình chóp

> [!NOTE]
> **Định nghĩa và Phương pháp tìm Thiết diện:**
> Thiết diện của hình đa diện cắt bởi mặt phẳng $(\alpha)$ là một đa giác phẳng có:
> - Các cạnh là các đoạn giao tuyến của $(\alpha)$ với các mặt của hình đa diện.
> - Các đỉnh là giao điểm của $(\alpha)$ với các cạnh của hình đa diện.  
> *Quy trình:* Kéo dài các đoạn giao tuyến đã có trên từng mặt để tìm giao điểm với các cạnh bao quanh, từ đó mở rộng dần mặt phẳng cho đến khi khép kín thành một đa giác phẳng.

#### Ví dụ 3:
Cho hình chóp $S.ABCD$ có đáy là hình thang, đáy lớn $AB$. Trên đoạn $SA$ lấy điểm $M$ ($M \neq S, A$). Mặt phẳng $(\alpha)$ đi qua $M$ và song song với hai đường thẳng $AB$ và $CD$. Xác định hình dạng thiết diện của hình chóp cắt bởi mặt phẳng $(\alpha)$.

#### Lời giải chi tiết:
- Vì $(\alpha) \parallel AB$ và $M \in (\alpha) \cap (SAB)$, nên giao tuyến của $(\alpha)$ với mặt bên $(SAB)$ là đường thẳng đi qua $M$ và song song với $AB$. Đường thẳng này cắt cạnh $SB$ tại điểm $N$ $\Rightarrow$ có đoạn giao tuyến **$MN$** (với $MN \parallel AB$).
- Vì $(\alpha) \parallel AB \parallel CD$:
  - Trong mặt phẳng $(SBC)$: qua $N$ kẻ đường thẳng song song với $BC$ cắt $SC$ tại $P$ $\Rightarrow$ có đoạn giao tuyến **$NP$**.
  - Trong mặt phẳng $(SAD)$: qua $M$ kẻ đường thẳng song song với $AD$ cắt $SD$ tại $Q$ $\Rightarrow$ có đoạn giao tuyến **$MQ$**.
  - Trong mặt phẳng $(SCD)$: nối $P$ và $Q$, ta có đoạn giao tuyến **$PQ$** (với $PQ \parallel CD$).
- Ghép các đoạn giao tuyến lại: $MN, NP, PQ, QM$ tạo thành tứ giác khép kín $MNPQ$.
- Vì $MN \parallel AB$, $PQ \parallel CD$ mà $AB \parallel CD \Rightarrow MN \parallel PQ$.  
Vậy thiết diện của hình chóp cắt bởi mặt phẳng $(\alpha)$ là **hình thang $MNPQ$**.

---

## VII. Trắc nghiệm Tự chấm Ôn luyện Kiến thức (10 câu)

<div class="quiz-item" data-quiz='{
  "question": "Câu 1: Có bao nhiêu mặt phẳng đi qua ba điểm phân biệt thẳng hàng?",
  "options": [
    "A. 1",
    "B. 2",
    "C. Vô số",
    "D. Không có mặt phẳng nào"
  ],
  "answer": "C. Vô số",
  "explanation": "Qua 3 điểm thẳng hàng có vô số mặt phẳng phân biệt cùng chứa đường thẳng đi qua 3 điểm đó (giống các trang sách mở ra từ một gáy sách)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 2: Trong các mệnh đề sau, mệnh đề nào SAI?",
  "options": [
    "A. Hai đường thẳng phân biệt có một điểm chung thì cùng thuộc một mặt phẳng",
    "B. Ba điểm phân biệt bất kỳ luôn xác định duy nhất một mặt phẳng",
    "C. Một điểm và một đường thẳng không đi qua điểm đó xác định duy nhất một mặt phẳng",
    "D. Hai đường thẳng song song xác định duy nhất một mặt phẳng"
  ],
  "answer": "B. Ba điểm phân biệt bất kỳ luôn xác định duy nhất một mặt phẳng",
  "explanation": "Mệnh đề B sai vì nếu ba điểm đó thẳng hàng thì có vô số mặt phẳng đi qua chúng. Phải là 3 điểm KHÔNG thẳng hàng mới xác định duy nhất một mặt phẳng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 3: Một hình tứ diện có bao nhiêu đỉnh, bao nhiêu cạnh và bao nhiêu mặt?",
  "options": [
    "A. 4 đỉnh, 6 cạnh, 4 mặt",
    "B. 4 đỉnh, 4 cạnh, 6 mặt",
    "C. 5 đỉnh, 8 cạnh, 5 mặt",
    "D. 4 đỉnh, 6 cạnh, 6 mặt"
  ],
  "answer": "A. 4 đỉnh, 6 cạnh, 4 mặt",
  "explanation": "Hình tứ diện gồm 4 đỉnh, 6 cạnh (3 cạnh bên + 3 cạnh đáy) và 4 mặt đều là tam giác."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 4: Hình chóp ngũ giác S.ABCDE có tất cả bao nhiêu cạnh?",
  "options": [
    "A. 5",
    "B. 8",
    "C. 10",
    "D. 12"
  ],
  "answer": "C. 10",
  "explanation": "Hình chóp n-giác có n cạnh bên và n cạnh đáy, tổng cộng là 2n cạnh. Với ngũ giác (n = 5), tổng số cạnh là 2 * 5 = 10."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 5: Giao tuyến của hai mặt phẳng phân biệt nếu có là một:",
  "options": [
    "A. Điểm duy nhất",
    "B. Đoạn thẳng",
    "C. Đường thẳng duy nhất",
    "D. Mặt phẳng"
  ],
  "answer": "C. Đường thẳng duy nhất",
  "explanation": "Theo Tiên đề 5: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm đó."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 6: Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và CD. Số đoạn thẳng nối hai điểm trong số 6 điểm A, B, C, D, M, N là:",
  "options": [
    "A. 6",
    "B. 10",
    "C. 15",
    "D. 12"
  ],
  "answer": "C. 15",
  "explanation": "Số đoạn thẳng nối 2 điểm phân biệt từ tập hợp 6 điểm là tổ hợp chập 2 của 6: C(6, 2) = (6 * 5) / 2 = 15 đoạn thẳng."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 7: Thiết diện của hình chóp tứ giác cắt bởi một mặt phẳng có thể là đa giác có tối đa bao nhiêu cạnh?",
  "options": [
    "A. 3 cạnh",
    "B. 4 cạnh",
    "C. 5 cạnh",
    "D. 6 cạnh"
  ],
  "answer": "C. 5 cạnh",
  "explanation": "Hình chóp tứ giác có 5 mặt (4 mặt bên + 1 mặt đáy). Mặt phẳng cắt có thể giao với tối đa 5 mặt này tạo thành thiết diện có tối đa 5 cạnh (ngũ giác)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 8: Trong quy tắc vẽ hình không gian, hình tròn thường được biểu diễn thành hình gì?",
  "options": [
    "A. Hình cầu",
    "B. Hình elip",
    "C. Hình đa giác đều",
    "D. Hình thoi"
  ],
  "answer": "B. Hình elip",
  "explanation": "Hình chiếu song song của một đường tròn lên mặt phẳng nói chung là một đường elip."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 9: Cho bốn điểm A, B, C, D không đồng phẳng. Có thể xác định được bao nhiêu mặt phẳng phân biệt từ 4 điểm này?",
  "options": [
    "A. 3",
    "B. 4",
    "C. 6",
    "D. Vô số"
  ],
  "answer": "B. 4",
  "explanation": "Mỗi tập hợp 3 điểm không thẳng hàng tạo thành 1 mặt phẳng. Số mặt phẳng tạo thành là C(4, 3) = 4 mặt phẳng: (ABC), (ABD), (ACD), (BCD)."
}'></div>

<div class="quiz-item" data-quiz='{
  "question": "Câu 10: Hai đường thẳng không cùng nằm trong bất kỳ một mặt phẳng nào được gọi là:",
  "options": [
    "A. Hai đường thẳng cắt nhau",
    "B. Hai đường thẳng song song",
    "C. Hai đường thẳng chéo nhau",
    "D. Hai đường thẳng trùng nhau"
  ],
  "answer": "C. Hai đường thẳng chéo nhau",
  "explanation": "Theo định nghĩa, hai đường thẳng chéo nhau là hai đường thẳng không đồng phẳng (không có mặt phẳng nào chứa cả hai đường thẳng đó)."
}'></div>

---

## VIII. Bài tập Tự luyện & Thử thách Mở rộng

### Bài tập Tự luyện

1. **Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AD$.**
   a) Tìm giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.  
   b) Tìm giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$.  
   c) Lấy điểm $M$ trên cạnh $SB$. Tìm giao điểm của đường thẳng $DM$ với mặt phẳng $(SAC)$.

2. **Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $AC$ và $BC$. Trên cạnh $BD$ lấy điểm $K$ sao cho $BK = 2KD$.**
   a) Tìm giao điểm của đường thẳng $CD$ với mặt phẳng $(IJK)$.  
   b) Tìm giao điểm của đường thẳng $AD$ với mặt phẳng $(IJK)$.  
   c) Xác định thiết diện của tứ diện $ABCD$ cắt bởi mặt phẳng $(IJK)$.

---

### Thử thách Thực tế: Cắt khối Pha lê Kim Cương Origami
Một nghệ nhân kim hoàn dùng máy cắt laser để cắt một viên đá pha lê hình chóp tứ giác đều $S.ABCD$. Mặt phẳng laser đi qua trung điểm của các cạnh $SA, SB, SC$.

<div style="margin: 20px 0; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 8px; border-left: 4px solid #10b981;">
<strong>Nhiệm vụ:</strong><br>
1. Hãy chứng minh rằng vết cắt laser sẽ tự động đi qua trung điểm của cạnh còn lại $SD$.<br>
2. Hình dạng mặt cắt phẳng (thiết diện) của viên pha lê là hình gì?<br>
3. Diện tích của mặt cắt này bằng bao nhiêu phần trăm diện tích đáy $ABCD$?
</div>

> [!TIP]
> **Hướng dẫn:**
> 1. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$.  
>    Trong $\Delta SAB$, $MN$ là đường trung bình $\Rightarrow MN \parallel AB$ và $MN = \frac{1}{2}AB$.  
>    Trong $\Delta SBC$, $NP$ là đường trung bình $\Rightarrow NP \parallel BC$ và $NP = \frac{1}{2}BC$.  
>    Mặt phẳng $(MNP)$ chứa $MN \parallel AB$ và $NP \parallel BC$ nên mặt phẳng này song song với mặt phẳng đáy $(ABCD)$.  
>    Do đó giao tuyến của nó với mặt bên $(SAD)$ phải song song với $AD$, suy ra nó cắt $SD$ tại đúng trung điểm $Q$ của $SD$.
> 2. Vì đáy $ABCD$ là hình vuông, nên tứ giác $MNPQ$ có $MN \parallel PQ, MQ \parallel NP$ và các cạnh bằng nhau $\frac{1}{2}AB$, góc vuông $\Rightarrow$ Thiết diện là một **hình vuông**.
> 3. Tỉ số đồng dạng bằng $\frac{1}{2}$ nên tỉ số diện tích bằng:
>    $$\frac{S_{MNPQ}}{S_{ABCD}} = \left(\frac{1}{2}\right)^2 = \frac{1}{4} = 25\%!$$
