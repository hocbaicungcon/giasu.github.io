/* credit: giasu.ai.vn */
import {escapeHTML} from './interactive.mjs';
export function shareLinks(url,title){
 const u=encodeURIComponent(url),t=encodeURIComponent(title);
 return {facebook:`https://www.facebook.com/sharer/sharer.php?u=${u}`,x:`https://x.com/intent/tweet?url=${u}&text=${t}`,telegram:`https://t.me/share/url?url=${u}&text=${t}`};
}
const icons={
 facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.3 22v-8.7h2.9l.4-3.4h-3.3V7.7c0-1 .3-1.7 1.7-1.7h1.8V3a24 24 0 0 0-2.6-.1c-2.5 0-4.3 1.5-4.3 4.4v2.6H7v3.4h2.9V22z"/></svg>',
 x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L2.8 2h6.5l4.5 6.7L18.9 2zm-1.1 18h1.7L8.3 4H6.5L17.8 20z"/></svg>',
 telegram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m21.5 3.4-3.1 16c-.2 1.1-.8 1.4-1.7.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.8L18 6.6c.4-.4-.1-.6-.6-.3L6.4 13.2l-4.7-1.5c-1-.3-1.1-1 .2-1.5L20.3 3c.9-.3 1.6.2 1.2.4z"/></svg>',
 zalo:'<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#0068ff"/><path d="M5 7h22v13c0 3-3 5-7 5h-6l-6 3 1-5c-3-1-4-3-4-6z" fill="#fff"/><text x="16" y="18.5" text-anchor="middle" font-family="Arial,sans-serif" font-size="9.5" font-weight="700" fill="#0068ff">Zalo</text></svg>',
 native:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3m-4 4 4-4 4 4M5 13v7h14v-7"/></svg>',
 copy:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H4v13h4"/></svg>'
};
export function renderShare(url,title,wrap=false,auto=false){
 const links=shareLinks(url,title);
 const link=(key,label)=>`<a class="share-icon share-${key}" href="${escapeHTML(links[key])}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}">${icons[key]}</a>`;
 return `<section class="site-share" data-share-url="${escapeHTML(url)}" data-share-title="${escapeHTML(title)}" ${auto?' data-share-auto':''} aria-label="Chia sẻ trang"><button class="share-toggle" type="button" data-share-toggle aria-expanded="false" aria-controls="site-share-panel" aria-label="Chia sẻ trang" title="Chia sẻ"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/></svg></button><div class="share-panel" id="site-share-panel" hidden><div class="share-actions">${link('facebook','Chia sẻ lên Facebook')}<button class="share-icon share-zalo" type="button" data-share-zalo aria-label="Chia sẻ qua Zalo" title="Chia sẻ qua Zalo">${icons.zalo}</button>${link('x','Chia sẻ lên X')}${link('telegram','Chia sẻ qua Telegram')}<button class="share-icon" type="button" data-share-native aria-label="Chia sẻ qua ứng dụng khác" title="Chia sẻ qua ứng dụng khác" hidden>${icons.native}</button><button class="share-icon" type="button" data-share-copy aria-label="Sao chép liên kết" title="Sao chép liên kết">${icons.copy}</button></div></div><p data-share-status role="status" aria-live="polite"></p></section>`;
}
