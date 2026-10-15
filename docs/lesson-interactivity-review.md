# Rà soát tương tác bài học

- Phạm vi: 394 bài học trong bản build hiện tại.
- Có 6 bài được gắn phần khám phá theo chủ đề; ngoài ra có các thí nghiệm geometry nhúng trong nội dung. Không dùng riêng số phần khám phá để kết luận bài thiếu tương tác.
- Có 84 SVG được chuẩn hóa trong 20 bài học. Hình SVG thuần giữ trạng thái minh họa. Các hoạt động học tương tác dùng đối tượng hình học có thể kéo và cập nhật đại lượng trực tiếp.
- Bổ sung mô-đun dự đoán và kéo đỉnh tam giác cho bài phù hợp chưa có thí nghiệm; bài tổng góc hiện có giữ thí nghiệm gốc, không chèn trùng.
- Thư viện `assets/geometry-interaction.js` cung cấp scene SVG tái sử dụng: điểm kéo được, đoạn thẳng, đa giác, đường tròn, cung góc, nhãn và callback cập nhật phép đo. Các điểm dùng được bằng cảm ứng, chuột và phím mũi tên.
- Chỉ chuỗi đẳng thức đủ dài mới tự ngắt tại dấu bằng hoặc mũi tên suy luận; các công thức ngắn giữ nguyên. Phân số, căn và biểu thức nhóm được giữ liền; MathML và TeX nguồn vẫn nguyên vẹn.
- Kiểm chứng: kiểm thử mô hình toán, bộ render, build toàn bộ bài; Chrome headless ở 320, 360, 390, 430 và 768 px, kiểm tra tràn trang và thao tác hình học bằng chuột/phím. Chưa xác nhận trên thiết bị cảm ứng thật.
- Các hình ảnh raster và tài liệu PDF nhúng chưa được chuyển thành mô hình hình học tương tác; cần biên soạn riêng theo nội dung để giữ đúng tính chất toán học.
