---
title: Công cụ Corner Tool của Affinity Designer
description: Trong bài trước, chúng tôi đã giới thiệu cách sử dụng công cụ Pen Tool
  trong Affinity Designer. Bài này chúng tôi tiếp tục giới thiệu Công cụ Corner Tool
  của
category: CNTT
type: Bài học
date: '2024-10-02'
tags:
- Tin học
- Affinity Designer
- Corner Tool
- Thiết kế đồ họa
grade: 10
---

Trong bài trước, chúng tôi đã giới thiệu [cách sử dụng công cụ Pen Tool trong Affinity Designer](/bai-viet/cach-su-dung-cong-cu-pen-tool-trong-affinity-designer.html). Bài này chúng tôi tiếp tục giới thiệu Công cụ **Corner Tool** của Affinity Designer.

## Corner Tool của Affinity Designer là gì?

**Corner Tool** (công cụ góc) dùng để điều chỉnh góc, bo góc của các hình dạng (shape) hoặc các nét vẽ bằng [Pen Tool](/bai-viet/cach-su-dung-cong-cu-pen-tool-trong-affinity-designer.html).

## Cách sử dụng Corner Tool của Affinity Designer

Công cụ **Corner Tool** có thể được tìm thấy trong bảng điều khiển **Tools** bên trái của không gian làm việc hoặc bạn có thể chọn nó bằng phím tắt **C**.

![Công cụ Corner Tool của Affinity Designer](assets/images/cong-cu-corner-tool-cua-affinity-designer-cong-cu-goc.jpg)

Ngay khi công cụ đó được chọn, phần mềm sẽ kích hoạt **Context Toolbar** tùy chỉnh, nằm trong phía trên của giao diện làm việc, nơi bạn có thể thực hiện những việc như điều chỉnh **Corner Type**(kiểu góc) và **Radius** (bán kính) của một góc của hình dạng đó. Theo mặc định, các tùy chọn chuyển sang màu xám (không thể chọn), vì bạn cần phải chọn một hình dạng thực tế được chọn để thực hiện bất kỳ điều chỉnh nào.

![Cài đặt của Công cụ Corner Tool trong Affinity Designer](assets/images/cong-cu-corner-tool-cua-affinity-designer-cai-dat-cong-cu-goc.webp)

Vì vậy, giả sử chúng ta có một hình elip hình quả bơ, và chúng ta muốn điều chỉnh đầu nhọn của nó bằng cách làm cho nó tròn hơn.

![Công cụ Corner Tool của Affinity Designer 1](assets/images/cong-cu-corner-tool-cua-affinity-designer-example-of-shape.png)

Để thực hiện điều này, bạn có thể làm theo một trong hai cách sau:

- Cách đầu tiên, bạn click chọn nút (node) của phần đầu nhọn, sau đó giữ và kéo về phía bên trong cho đến khi bạn hài lòng. Ngay sau khi bạn nhả chuột, phần mềm sẽ thực hiện các điều chỉnh được chỉ định và thay đổi **Corner type** từ **None** thành **Rounded**. Tuy nhiên, làm cách này bạn không có nhiều sự kiểm soát giá trị **Radius** như bạn muốn, vì có thể bạn sẽ kéo chuột được bán kính là số thập phân thay vì số nguyên.

- Cách thứ hai, bạn có thể chọn nút mà bạn muốn điều chỉnh và sau đó chỉ cần nhập giá trị mong muốn bằng vào hộp nhập **Radius** với các con số nguyên mong muốn.

![Công cụ Corner Tool của Affinity Designer 2](assets/images/cong-cu-corner-tool-cua-affinity-designer-adjusting-a-shape-corner.png)

- Bạn cũng có thể lựa chọn các **Corner types** khác, như **Concave** (Lõm), **Straight** (Thẳng) và **Cutout** (Cắt bỏ).

- Nếu bạn cần phải chuyển đổi góc của bạn trở lại thành đường cong, bạn có thể dễ dàng làm như vậy bằng cách sử dụng tùy chọn **Bake Corners**.

![Công cụ Corner Tool của Affinity Designer 3](assets/images/cong-cu-corner-tool-cua-affinity-designer-baking-a-shape-corner.png)

Khi bạn sử dụng Bake Corners, bạn có thể chọn bất kỳ nút nào trong số hai nút tạo thành của nó bằng **Node Tool (A)** và sau đó điều chỉnh thêm hình dạng đó bằng cách định vị lại chúng hoặc các điểm cuối của tay xoay.

![Công cụ Corner Tool của Affinity Designer 4](assets/images/cong-cu-corner-tool-cua-affinity-designer-adjusting-the-node-of-a-baked-corner.png)

Theo mặc định, khi bạn tạo một **Shape** (hình dạng) mới bằng cách sử dụng**Rectangle Tool (M), Context Toolbar** cũng có các tùy chọn về bo góc **Single radius** (bật nó sẽ điều chỉnh cả 4 góc) và **Corner** (chọn kiểu **Rounded, Straight, Concave, Cutout** cho góc).

## Sử dụng Công cụ Corner Tool với Phông chữ

Bạn có biết rằng công cụ góc **Corner Tool** cũng có thể được sử dụng với các phông chữ? Để làm điều này, trước tiên bạn cần chuyển văn bản thành các đường nét (Convert Text to Path) bằng cách: Chọn văn bản của bạn và đi tới menu **Layer**> **Convert to Curves** hoặc bấm chuột phải vào văn bản và chọn **Convert to Curves**.

![Công cụ Corner Tool của Affinity Designer 5](assets/images/cong-cu-corner-tool-cua-affinity-designer-chuyen-van-ban-thanh-duong-net.jpeg)

Sau khi chuyển đổi, mỗi chữ cái sẽ được đặt vào các layer riêng lẻ và được group (nhóm) lại. Chúng ta cần tách chúng thành các lớp riêng lẻ. Nhấp chuột phải vào nhóm trong **Layer Panel** và chọn **Ungroup** (Bỏ nhóm).

Trong **Layer Panel**, bạn bấm chọn layer chữ cái mà bạn muốn điều chỉnh. Tiếp theo, chọn **Corner Tool** và bạn có thể điều chỉnh các góc theo ý muốn như phần trước.
