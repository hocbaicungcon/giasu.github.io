// Mobile navigation keeps the same grading state across all three screens.
(() => {
  const ua = navigator.userAgent || '';
  const mobile = /Android|iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const appBrowser = /Zalo|FBAN|FBAV|FB_IAB|FBIOS|Messenger|Instagram|Line\/|TikTok|Bytedance|Musical_ly|MicroMessenger/i.test(ua);
  const androidWebView = /Android/i.test(ua) && /;\s*wv\b|Version\/4\.0.*Chrome\//i.test(ua);
  const iosWebView = /AppleWebKit/i.test(ua) && /iPhone|iPad|iPod/i.test(ua) && !/Safari\/|CriOS\/|FxiOS\/|EdgiOS\/|OPiOS\//i.test(ua);
  if (mobile && (appBrowser || androidWebView || iosWebView)) {
    const notice = document.createElement('aside');
    notice.setAttribute('role', 'alert');
    notice.setAttribute('aria-labelledby', 'webview-title');
    notice.style.cssText = 'display:block;margin:12px auto;padding:16px;max-width:1100px;border:2px solid #a04b00;border-radius:12px;background:#fff4df;color:#402400;line-height:1.6;';
    const title = document.createElement('strong');
    title.id = 'webview-title';
    title.textContent = 'Vui lòng mở Chấm thi bằng Chrome hoặc Safari';
    const instructions = document.createElement('p');
    instructions.textContent = 'Bạn đang mở trang trong ứng dụng (như Zalo, Messenger…). Để sử dụng camera, tải tệp và lưu bài ổn định, hãy mở menu ⋯ hoặc nút chia sẻ của ứng dụng, chọn “Mở bằng trình duyệt” / “Mở trong Safari”. Dùng Chrome trên Android hoặc Safari trên iPhone/iPad.';
    const fallback = document.createElement('p');
    fallback.textContent = 'Nếu không thấy lựa chọn này, hãy sao chép liên kết bên dưới rồi dán vào Chrome/Safari:';
    const link = document.createElement('input');
    link.type = 'text';
    link.readOnly = true;
    link.value = window.location.href;
    link.setAttribute('aria-label', 'Liên kết Chấm thi để sao chép');
    link.style.cssText = 'width:100%;box-sizing:border-box;font-size:16px;padding:10px;color:#402400;background:white;border:1px solid #a04b00;';
    link.addEventListener('click', () => { link.focus(); link.select(); link.setSelectionRange(0, link.value.length); });
    notice.append(title, instructions, fallback, link);
    document.getElementById('main').before(notice);
  }
  // Giữ nguyên các nút và listener chấm bài, chỉ gom thao tác ít dùng.
  function disclosure(label, nodes, parent, before = null) {
    const details = document.createElement('details'); details.className = 'workflow-more';
    const summary = document.createElement('summary'); summary.textContent = label;
    details.append(summary); parent.insertBefore(details, before);
    nodes.filter(Boolean).forEach(node => details.append(node));
    return details;
  }
  const keyPanel = document.querySelector('.panel.key');
  const configuration = document.querySelector('.configuration');
  const settings = disclosure('Số câu & thang điểm', [configuration], keyPanel, keyPanel.querySelector('.section-head').nextSibling);
  const summary = document.getElementById('examSummary');
  const updateSummary = () => { settings.querySelector('summary').textContent = 'Số câu & thang điểm · ' + summary.textContent; };
  new MutationObserver(updateSummary).observe(summary, { childList: true, subtree: true, characterData: true }); updateSummary();
  disclosure('QR, phiếu mẫu & hướng dẫn nhập', [...keyPanel.querySelectorAll(':scope > .hint')].filter(node => !node.id), keyPanel, document.getElementById('importStatus'));
  // Các nút QR có id để các luồng nhập cũ tiếp tục hoạt động.
  const qrDetails = keyPanel.querySelectorAll('.workflow-more')[1];
  qrDetails.append(document.getElementById('createAnswerQr'), document.getElementById('openQrImport'));
  disclosure('Nhập trực tiếp / sửa đáp án từng câu', [keyPanel.querySelector('.manual-key-form'), document.getElementById('manualKeyStatus'), ...[1, 2, 3].map(i => document.getElementById('keyWrap' + i))], keyPanel);
  disclosure('Quản lý / xóa đáp án', [keyPanel.querySelector('.key-delete-actions')], keyPanel);
  const scan = document.querySelector('.panel.scan');
  disclosure('Tùy chọn quét & căn góc thủ công', [...scan.querySelectorAll('.preview-setting, .sound-setting, .manual-help, .scan-status, .scan-actions, .scan-utilities')], scan);
  const batch = document.getElementById('batchPanel'), exports = batch.querySelector('.export-actions');
  const extras = [...exports.children].filter(node => !['exportExcel', 'exportAnnotatedPdf'].includes(node.id));
  disclosure('Định dạng tải khác & xóa dữ liệu', [...extras, document.getElementById('exportQuality').parentElement], batch, document.getElementById('exportStatus'));
  const results = document.getElementById('results');
  disclosure('Sửa đáp án bằng bảng', [document.getElementById('answers'), document.getElementById('deleteCurrentRecord')], results);
  document.getElementById('editFullscreen').classList.add('primary', 'button');
  document.getElementById('batchListDisclosure').open = true;
  const thumbnails = document.getElementById('batchThumbnails');
  disclosure('Xem ảnh thu nhỏ', [thumbnails], document.getElementById('batchListDisclosure'), thumbnails);
  disclosure('Hướng dẫn sử dụng & câu hỏi thường gặp', [document.getElementById('huong-dan')], document.getElementById('main'));
  for (const [parent, view, text] of [[keyPanel, 'scan', 'Tiếp tục → Quét bài'], [scan, 'results', 'Xem điểm →']]) {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'button primary workflow-next'; button.dataset.view = view; button.textContent = text; parent.append(button);
  }
  const titles = { scan: '2 · Quét bài', setup: '1 · Nhập đáp án', results: '3 · Nhận điểm' };
  const buttons = [...document.querySelectorAll('button[data-view]')];
  const empty = document.getElementById('mobileEmpty');
  function refresh() {
    empty.hidden = document.body.dataset.mobileView !== 'results' || !document.getElementById('batchPanel').classList.contains('hidden');
  }
  function select(view) {
    document.body.dataset.mobileView = view;
    buttons.forEach(button => {
      if (button.dataset.view === view) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    document.querySelector('.brand small').textContent = matchMedia('(max-width: 600px)').matches ? titles[view] : 'Phiếu trả lời trắc nghiệm';
    refresh();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.view)));
  ['file', 'cameraFile'].forEach(id => document.getElementById(id).addEventListener('change', () => select('scan')));
  new MutationObserver(refresh).observe(document.getElementById('batchPanel'), { attributes: true, attributeFilter: ['class'] });
  matchMedia('(max-width: 600px)').addEventListener('change', () => select(document.body.dataset.mobileView));
  select('setup');
})();
