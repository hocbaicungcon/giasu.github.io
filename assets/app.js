/* credit: giasu.ai.vn */
import {sorting,compareItems} from './sort.js';
import {matchesSubject} from './subject-groups.js';

(async()=>{
  const $=s=>document.querySelector(s), cards=[...document.querySelectorAll('.card')];
  let posts;
  try {
    const r=await fetch('./assets/posts.json');
    if(!r.ok)throw Error(r.status);
    posts=await r.json();
  } catch {
    $('#result-count').textContent='Không tải được bộ lọc. Bạn vẫn có thể mở các bài bên dưới.';
    return;
  }

  const PAGE_SIZE = 24;
  const cleanTag=s=>{if(!s)return '';try{s=decodeURIComponent(s);}catch{}return s.replace(/^#+/,'').replace(/\+/g,' ').replace(/\s+/g,' ').trim();};
  const getCanonicalTag=t=>{const c=cleanTag(t);if(!c)return '';const lower=c.toLowerCase();for(const p of posts){const found=(p.tags||[]).find(x=>cleanTag(x).toLowerCase()===lower);if(found)return cleanTag(found);}return c;};

  const params=new URLSearchParams(location.search);
  let category=params.get('category')||'', tag=getCanonicalTag(params.get('tag'));
  let page=Math.max(1, parseInt(params.get('page')||'1', 10) || 1);
  let visibleLimit = PAGE_SIZE;

  $('#search').value=params.get('q')||'';
  $('#grade').value=params.get('grade')||'';
  $('#type').value=params.get('type')||'';
  if($('#category-select')) $('#category-select').value=category;

  const sortControl=sorting(apply);
  const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();

  const searchClearBtn=$('#search-clear');
  const updateSearchClear=()=>{
    if(searchClearBtn) searchClearBtn.hidden=!$('#search').value.trim();
  };
  if(searchClearBtn){
    searchClearBtn.onclick=()=>{
      $('#search').value='';
      updateSearchClear();
      page=1;
      apply();
      $('#search').focus();
    };
  }

  function renderPagination(totalItems, currentPage, totalPages) {
    const pagContainer = $('#pagination');
    const loadMoreBtn = $('#load-more');
    const pagWrap = $('#pagination-wrap');
    if(!pagContainer) return;

    if(totalItems <= PAGE_SIZE) {
      if(pagWrap) pagWrap.hidden = true;
      return;
    }
    if(pagWrap) pagWrap.hidden = false;

    const displayedCount = Math.min(totalItems, (currentPage - 1) * PAGE_SIZE + visibleLimit);
    if(loadMoreBtn) {
      if(displayedCount < totalItems && currentPage * PAGE_SIZE >= displayedCount) {
        loadMoreBtn.hidden = false;
        loadMoreBtn.textContent = `Xem thêm (${Math.min(PAGE_SIZE, totalItems - displayedCount)} bài tiếp theo) ↓`;
        loadMoreBtn.onclick = () => {
          visibleLimit += PAGE_SIZE;
          apply(false, false);
        };
      } else {
        loadMoreBtn.hidden = true;
      }
    }

    pagContainer.replaceChildren();

    // Nút Trang trước
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn page-nav';
    prevBtn.textContent = '← Trước';
    prevBtn.disabled = currentPage <= 1;
    prevBtn.setAttribute('aria-label', 'Trang trước');
    prevBtn.onclick = () => {
      if(page > 1) {
        page--;
        visibleLimit = PAGE_SIZE;
        apply(false, true);
      }
    };
    pagContainer.append(prevBtn);

    // Dãy số trang với dấu ...
    const range = [];
    const delta = 2;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    let lastNum;
    for (const num of range) {
      if (lastNum) {
        if (num - lastNum === 2) {
          pagContainer.append(createPageBtn(lastNum + 1, currentPage));
        } else if (num - lastNum !== 1) {
          const span = document.createElement('span');
          span.className = 'page-ellipsis';
          span.textContent = '…';
          pagContainer.append(span);
        }
      }
      pagContainer.append(createPageBtn(num, currentPage));
      lastNum = num;
    }

    // Nút Trang sau
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn page-nav';
    nextBtn.textContent = 'Sau →';
    nextBtn.disabled = currentPage >= totalPages;
    nextBtn.setAttribute('aria-label', 'Trang sau');
    nextBtn.onclick = () => {
      if(page < totalPages) {
        page++;
        visibleLimit = PAGE_SIZE;
        apply(false, true);
      }
    };
    pagContainer.append(nextBtn);
  }

  function createPageBtn(num, cur) {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (num === cur ? ' active' : '');
    btn.textContent = num;
    btn.setAttribute('aria-label', `Trang ${num}`);
    if (num === cur) btn.setAttribute('aria-current', 'page');
    btn.onclick = () => {
      if (page !== num) {
        page = num;
        visibleLimit = PAGE_SIZE;
        apply(false, true);
      }
    };
    return btn;
  }

  function apply(resetPage = true, scrollToTop = false) {
    updateSearchClear();
    if(resetPage) {
      page = 1;
      visibleLimit = PAGE_SIZE;
    }

    const q=normalize($('#search').value.trim()), grade=$('#grade').value, type=$('#type').value, sort=sortControl.value, tagNorm=cleanTag(tag).toLowerCase();
    const list=posts.filter(p=>matchesSubject(p.category,category)&&(!tagNorm||p.tags.some(t=>cleanTag(t).toLowerCase()===tagNorm))&&(!grade||String(p.grade)===grade)&&(!type||p.type===type)&&(!q||normalize([p.title,p.description,p.category,...p.tags].join(' ')).includes(q))).sort((a,b)=>compareItems(a,b,sort));

    const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if(page > totalPages) page = totalPages;

    const startIndex = (page - 1) * PAGE_SIZE;
    const countToShow = Math.min(list.length - startIndex, visibleLimit);
    const endIndex = startIndex + countToShow;
    const pageItems = list.slice(startIndex, endIndex);

    const ids=new Set(pageItems.map(p=>p.slug));
    cards.forEach(c=>c.hidden=!ids.has(c.dataset.slug));
    pageItems.forEach(p=>{
      const cardEl = cards.find(c=>c.dataset.slug===p.slug);
      if(cardEl) $('#cards').append(cardEl);
    });

    if(list.length === 0) {
      $('#result-count').textContent='Chưa tìm thấy bài phù hợp';
      $('#empty').hidden=false;
    } else {
      $('#empty').hidden=true;
      if(list.length <= PAGE_SIZE) {
        $('#result-count').textContent=`${list.length} bài viết để khám phá`;
      } else {
        $('#result-count').textContent=`Hiển thị ${startIndex + 1}–${endIndex} trong ${list.length} bài viết (Trang ${page}/${totalPages})`;
      }
    }

    renderPagination(list.length, page, totalPages);

    // Đồng bộ sidebar danh mục và select mobile
    document.querySelectorAll('[data-category]').forEach(b=>{
      const active=b.dataset.category===category;
      b.classList.toggle('active',active);
      b.setAttribute('aria-pressed',active);
    });
    if($('#category-select')) $('#category-select').value=category;

    // Hiển thị thẻ bộ lọc đang kích hoạt
    $('#active-filters').replaceChildren();
    const filters = [];
    if(category) filters.push({label: `Môn: ${category}`, clear: ()=>{category=''; if($('#category-select'))$('#category-select').value='';}});
    if(grade) filters.push({label: `Lớp ${grade}`, clear: ()=>$('#grade').value=''});
    if(type) filters.push({label: `Loại: ${type}`, clear: ()=>$('#type').value=''});
    if(tag) filters.push({label: `#${tag}`, clear: ()=>tag=''});
    if($('#search').value.trim()) filters.push({label: `Tìm: "${$('#search').value.trim()}"`, clear: ()=>$('#search').value=''});

    filters.forEach(({label, clear})=>{
      const b=document.createElement('button');
      b.textContent=label+' ×';
      b.setAttribute('aria-label','Bỏ lọc '+label);
      b.onclick=()=>{clear();apply(true, false);};
      $('#active-filters').append(b);
    });

    if(filters.length >= 2) {
      const resetBtn=document.createElement('button');
      resetBtn.className='reset-all-filters';
      resetBtn.textContent='Xóa tất cả bộ lọc ↺';
      resetBtn.onclick=()=>{
        category='';tag='';
        $('#search').value='';$('#grade').value='';$('#type').value='';
        if($('#category-select'))$('#category-select').value='';
        sortControl.reset();
        apply(true, false);
      };
      $('#active-filters').append(resetBtn);
    }

    // Cập nhật URLSearchParams
    const url=new URL(location.href);
    url.search='';
    for(const [key,value] of Object.entries({
      category,
      tag,
      q:$('#search').value.trim(),
      grade,
      type,
      sort:sort==='new'?'':sort,
      page:page>1?page:''
    })) {
      if(value) url.searchParams.set(key,value);
    }
    history.replaceState(null,'',url);

    if(scrollToTop) {
      const target = $('#thu-vien') || $('#main');
      if(target) {
        target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start'});
      }
    }
  }

  // Lắng nghe sự kiện
  document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{
    category=b.dataset.category;
    tag='';
    apply(true, false);
  });
  document.querySelectorAll('[data-subject]').forEach(b=>b.onclick=()=>{
    category=b.dataset.subject;
    tag='';
    apply(true, false);
    $('#thu-vien')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  });
  document.querySelectorAll('[data-tag]').forEach(b=>b.onclick=()=>{
    tag=getCanonicalTag(b.dataset.tag);
    apply(true, false);
  });

  if($('#category-select')) {
    $('#category-select').addEventListener('change', ()=>{
      category = $('#category-select').value;
      tag = '';
      apply(true, false);
    });
  }

  $('#search').addEventListener('input', ()=>{
    updateSearchClear();
    apply(true, false);
  });

  for(const id of ['grade','type']){
    $('#'+id).addEventListener('change', ()=>apply(true, false));
  }

  $('#reset').onclick=()=>{
    category='';tag='';
    $('#search').value='';$('#grade').value='';$('#type').value='';
    if($('#category-select'))$('#category-select').value='';
    sortControl.reset();
    apply(true, false);
  };

  apply(false, false);
})();
