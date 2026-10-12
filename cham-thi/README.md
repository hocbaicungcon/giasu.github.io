# Chấm Thi Trắc Nghiệm

Ứng dụng tĩnh tại https://giasu.ai.vn/cham-thi/, được xuất nguyên thư mục vào dist/cham-thi bởi scripts/build.mjs. Tiếp tục phát triển tính năng tại thư mục này.

Nguồn ban đầu: hocbaicungcon/CHAM_THI (3c96898), với footer phiếu tăng từ 16px lên 32px. Không kèm bài làm riêng trong data. Các thư viện nhận dạng, PDF, Excel và QR nằm cục bộ trong vendor; giữ các giấy phép đi kèm. Service worker chỉ có phạm vi /cham-thi/.

Sau khi thay đổi JS/CSS, tăng phiên bản URL trong index.html và CACHE trong sw.js, đồng thời cập nhật offline-assets.json tương ứng. Dữ liệu cũ tại hocbaicungcon.github.io không tự chuyển sang giasu.ai.vn vì trình duyệt lưu riêng theo tên miền.
