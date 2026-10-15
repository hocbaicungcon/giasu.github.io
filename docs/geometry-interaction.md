# Thư viện hình học tương tác

`assets/geometry-interaction.js` là thư viện SVG thuần, không phụ thuộc framework. Một scene quản lý tọa độ điểm và vẽ lại các đối tượng liên kết khi điểm đổi vị trí.

```js
import {GeometryScene, measureAngle} from '../assets/geometry-interaction.js';

const scene = new GeometryScene(svg, {
  onChange(points) {
    const angle = measureAngle([points.A.x, points.A.y], [100, 280], [470, 280]);
    readout.textContent = `${angle.degrees.toFixed(1)}°`;
  }
});

scene.point('A', 280, 95, {label: 'A', minX: 100, maxX: 470, minY: 65, maxY: 220})
  .point('B', 100, 280, {label: 'B', draggable: false})
  .point('C', 470, 280, {label: 'C', draggable: false})
  .polygon('triangle', ['A', 'B', 'C'], {fill: '#2563eb', fillOpacity: .05})
  .angle('at-a', 'A', 'C', 'B', {label: degrees => `${degrees.toFixed(1)}°`})
  .render();

// Update related points and draw once.
scene.setPoints({A: [300, 110], B: [110, 280]});
```

Điểm kéo được hỗ trợ chuột, cảm ứng qua Pointer Events và phím mũi tên. `step` đặt bước bàn phím; `constrain([x, y], snapshot)` chiếu tọa độ về một quỹ tích hoặc ràng buộc hình học. Các phương thức `point`, `segment`, `polygon`, `circle`, `angle` và `text` có thể nối chuỗi; `setVisible` bật/tắt đối tượng; `snapshot` trả tọa độ hiện tại; `destroy` gỡ listener và SVG scene.

`setPoints({id: [x, y], ...})` kiểm tra và giới hạn toàn bộ cập nhật trước khi áp dụng, sau đó gọi `onChange` và vẽ đúng một lần. `setPoint` là dạng một điểm. `transaction(scene => ...)` gom nhiều cập nhật thành một lần vẽ và khôi phục trạng thái nếu callback lỗi. `measureAngle(vertex, first, second)` trả về góc nhỏ hơn theo độ cùng góc quét có dấu để vẽ cung; dữ liệu suy biến được báo lỗi thay vì tạo số đo sai.

Toàn bộ nội dung hình cần xây bằng các đối tượng của scene. Không gắn sự kiện riêng trực tiếp vào điểm SVG do scene tái tạo các node khi render.
