"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[2714,2313,333],{2313:(t,e,a)=>{a.r(e),a.d(e,{analyticsDecorateList:()=>v,analyticsGetLabel:()=>m,decorateBlockAnalytics:()=>s,decorateDefaultLinkAnalytics:()=>c,decorateLinkAnalytics:()=>r,decorateSectionAnalytics:()=>d,processTrackingLabels:()=>i});var n=a(4941),o=/[^\u00C0-\u1FFF\u2C00-\uD7FF\w]+/g,l=/^_+|_+$/g;function i(t,e,a){let n=null===t||void 0===t?void 0:t.replace(o," ").replace(l,"").trim();if(e){var i;const{analyticLocalization:t,mep:a}=e,o=null===a||void 0===a||null===(i=a.analyticLocalization)||void 0===i?void 0:i[n];if(o)n=o;else{const e=null===t||void 0===t?void 0:t[n];e&&(n=e)}}return a?n.slice(0,a):n}function c(t,e){if(t.classList.length&&!t.className.includes("metadata")&&!t.classList.contains("link-block")&&!t.classList.contains("section")&&"DIV"===t.nodeName){let o="",l=1;const c=(a=(0,n.getMetadata)("analytics-header-limit"))?"off"!==a&&(Number.isNaN(Number(a))?20:parseInt(a,10)):20,d="h1, h2, h3, h4, h5, h6";let s="".concat(d,", .tracking-header");t.querySelectorAll(s).length||(s="".concat(s,", b, strong")),t.querySelectorAll("".concat(s,", a:not(.video.link-block, .no-track), button:not(.no-track)")).forEach((a=>{if("A"===a.nodeName||"BUTTON"===a.nodeName){if(a.classList.contains("tracking-header"))o=i(a.textContent,e,c);else if(!o){const a=t.closest(".section");if(null!==a&&void 0!==a&&a.className.includes("-up")||null!==a&&void 0!==a&&a.classList.contains("milo-card-section")){var n;const t=null===a||void 0===a||null===(n=a.previousElementSibling)||void 0===n?void 0:n.querySelector(d);t&&(o=i(t.textContent,e,c))}}if(a.hasAttribute("daa-ll")){const t=a.getAttribute("daa-ll").split("-").map((t=>""===t?"":i(t,e,20)));a.setAttribute("daa-ll",t.join("-"))}else{var s;let t=null===(s=a.textContent)||void 0===s?void 0:s.trim();var r;if(""===t)t=a.getAttribute("title")||a.getAttribute("aria-label")||(null===(r=a.querySelector("img"))||void 0===r?void 0:r.getAttribute("alt"))||"no label";t=i(t,e,20),a.setAttribute("daa-ll","".concat(t,"-").concat(l,"--").concat(o))}l+=1}else"STRONG"!==a.nodeName&&"B"!==a.nodeName||a.classList.add("tracking-header"),o=i(a.textContent,e,c)}))}var a}async function d(t,e,a){var n,o;const l=Number.isInteger(e)?"s".concat(e+1):e;null===(n=document.querySelector("main"))||void 0===n||n.setAttribute("daa-im","true"),t.setAttribute("daa-lh",l),t.querySelectorAll("[data-block] [data-block]").forEach((t=>{t.removeAttribute("data-block")}));const i=(null===a||void 0===a||null===(o=a.mep)||void 0===o?void 0:o.martech)||"";t.querySelectorAll("[data-block]").forEach(((t,e)=>{const n=t.getAttribute("daa-lh");if(n)t.setAttribute("daa-lh","".concat(n).concat(i));else{const n=t.classList[0]||"";t.setAttribute("daa-lh","b".concat(e+1,"|").concat(n.slice(0,15)).concat(i)),c(t,a)}t.removeAttribute("data-block")}))}function s(){return!1}function r(){return!1}var u=/[^0-9a-z]/gi,h=/^_+|_+$/g,m=t=>t.replaceAll("&","and").replace(u,"_").replace(h,""),v=(t,e)=>{var a;const n="A"===(null===(a=t.firstChild)||void 0===a?void 0:a.nodeName)&&t.firstChild;if(!n)return;const o=n.textContent||n.getAttribute("aria-label");o&&n.setAttribute("daa-ll","".concat(m(o),"-").concat(e+1))}},2714:(t,e,a)=>{a.r(e),a.d(e,{closeModal:()=>m,default:()=>b,delayedModal:()=>w,findDetails:()=>r,getHashParams:()=>f,getModal:()=>v,sendAnalytics:()=>h});var n=a(2313),o=a(4941),l=(a(5769),'a:not(.hide-video), button, input, textarea, select, details, [tabindex]:not([tabindex="-1"]'),i='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n  <g transform="translate(-10500 3403)">\n    <circle cx="10" cy="10" r="10" transform="translate(10500 -3403)" fill="#707070"/>\n    <line y1="8" x2="8" transform="translate(10506 -3397)" fill="none" stroke="#fff" stroke-width="2"/>\n    <line x1="8" y1="8" transform="translate(10506 -3397)" fill="none" stroke="#fff" stroke-width="2"/>\n  </g>\n</svg>',c=!1,d="",s=new Set;function r(t,e){const a=t.replace("#",""),n=e||document.querySelector('a[data-modal-hash="'.concat(t,'"]'));return{id:a,path:(null===n||void 0===n?void 0:n.dataset.modalPath)||(0,o.localizeLink)((0,o.getMetadata)("-".concat(a))),isHash:t===window.location.hash}}function u(t){var e;const a={xdm:{},data:{web:{webInteraction:{name:null===t||void 0===t?void 0:t.type}}}};null!==t&&void 0!==t&&t.data&&(a.data._adobe_corpnew={digitalData:t.data}),null===(e=window._satellite)||void 0===e||e.track("event",a)}function h(t){var e;null!==(e=window._satellite)&&void 0!==e&&e.track?u(t):window.addEventListener("alloy_sendEvent",(()=>{u(t)}),{once:!0})}function m(t){const{id:e}=t,a=new Event("milo:modal:closed");window.dispatchEvent(a),document.querySelectorAll("#".concat(e)).forEach((t=>{var a;if(t.classList.contains("dialog-modal")){const a=document.querySelector("#".concat(e,"~.modal-curtain"));a&&a.remove(),t.remove()}null===(a=document.querySelector('[data-modal-hash="#'.concat(t.id,'"]')))||void 0===a||a.focus()})),document.querySelectorAll(".modal-curtain").length||document.body.classList.remove("disable-scroll"),[...document.querySelectorAll("header, main, footer")].forEach((t=>t.removeAttribute("aria-disabled")));window.location.hash.replace("#","")===t.id&&window.history.pushState("",document.title,"".concat(window.location.pathname).concat(window.location.search)),c=!1,d&&(window.location.hash=d,d="")}async function v(t,e){if(!(null!==t&&void 0!==t&&t.path||e))return null;const{id:d}=t||e;s.add(d);const r=(0,o.createTag)("div",{class:"dialog-modal",id:d}),u=new Event("milo:modal:loaded");if(e&&function(t,e){const{miloLibs:a,codeRoot:n}=(0,o.getConfig)();(0,o.loadStyle)("".concat(a||n,"/blocks/modal/modal.css")),t.id&&(e.id=t.id),t.class&&e.classList.add(t.class),t.closeEvent&&e.addEventListener(t.closeEvent,(()=>{m(e)})),e.append(t.content)}(e,r),t&&await async function(t,e){let n=t;if(t.includes("/federal/")){const{getFederatedUrl:e}=await a.e(1162).then(a.bind(a,1162));n=e(t)}const l=(0,o.createTag)("a",{href:n});e.append(l);const{default:i}=await a.e(6385).then(a.bind(a,6385));await i(l)}(t.path,r),c){r.classList.add("delayed-modal");const t=r.querySelector("div.media");if(t){t.classList.add("in-modal");const{miloLibs:e,codeRoot:a}=(0,o.getConfig)(),n=e||a;(0,o.loadStyle)("".concat(n,"/styles/rounded-corners.css"))}}const h=null!==d&&void 0!==d&&d.includes("locale-modal")?"localeModal":"milo",v=window.location.hash?window.location.hash.replace("#",""):h,f=(0,o.createTag)("button",{class:"dialog-close","aria-label":"Close","daa-ll":"".concat(v,":modalClose:buttonClose")},i),w={focusVisible:!0},b=[...r.querySelectorAll(l)],g=r.querySelector("h1, h2, h3, h4, h5");let y;if(b.length&&function(t){const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}(b[0])?y=b[0]:g?(g.setAttribute("tabIndex",0),y=g):y=f,r.addEventListener("keydown",(t=>{const e=t.shiftKey,a="Tab"===t.key,n=document.activeElement===f;!e&&a&&n&&(t.preventDefault(),y.focus(w)),a&&e&&document.activeElement===y&&(t.preventDefault(),f.focus(w))})),f.addEventListener("click",(t=>{m(r),t.preventDefault()})),r.addEventListener("keydown",(t=>{"Escape"===t.key&&m(r)})),(0,n.decorateSectionAnalytics)(r,"".concat(d,"-modal"),(0,o.getConfig)()),r.append(f),document.body.append(r),s.delete(d),y.focus({preventScroll:!0,...w}),window.dispatchEvent(u),!r.classList.contains("curtain-off")){document.body.classList.add("disable-scroll");const t=(0,o.createTag)("div",{class:"modal-curtain is-open","daa-ll":"".concat(v,":modalClose:curtainClose")});t.addEventListener("click",(e=>{e.target===t&&m(r)})),r.insertAdjacentElement("afterend",t),[...document.querySelectorAll("header, main, footer")].forEach((t=>t.setAttribute("aria-disabled","true")))}const p=r.querySelector("iframe");if(p)if(r.classList.contains("commerce-frame")||r.classList.contains("dynamic-height")){const{default:t}=await a.e(4194).then(a.bind(a,4194));await t({dialog:r,iframe:p})}else p.style.height="100%";return r}function f(t){return t?t.split(":").reduce(((t,e)=>{if(e.startsWith("#"))t.hash=e;else{const[a,n]=e.split("=");"delay"===a&&(t.delay=1e3*parseInt(n,10))}return t}),{}):{}}function w(t){const{hash:e,delay:a}=f(null===t||void 0===t?void 0:t.dataset.modalHash);if(void 0===a||!e)return!1;c=!0;const n=new Event("".concat(e,":modalOpen")),o=window.sessionStorage.getItem("shown:".concat(e));return t.dataset.modalHash=e,t.href=e,null!==o&&void 0!==o&&o.includes(window.location.pathname)||setTimeout((()=>{window.location.replace(e),h(n),window.sessionStorage.setItem("shown:".concat(e),"".concat(o||""," ").concat(window.location.pathname))}),a),!0}function b(t){var e;const{modalHash:a,modalPath:n}=t.dataset;if("remove"===(null===(e=(0,o.getConfig)().mep)||void 0===e||null===(e=e.fragments)||void 0===e||null===(e=e[n])||void 0===e?void 0:e.action))return null;if(w(t)||window.location.hash!==a||document.querySelector("div.dialog-modal".concat(a)))return null;if(s.has(null===a||void 0===a?void 0:a.replace("#","")))return null;const l=r(window.location.hash,t);return l?v(l):null}window.addEventListener("hashchange",(t=>{if(window.location.hash){var e;const a=r(window.location.hash,null);a&&v(a),null!==(e=t.oldURL)&&void 0!==e&&e.includes("#")&&(d=new URL(t.oldURL).hash)}else try{const e=new URL(t.oldURL),a=document.querySelector(".dialog-modal".concat(e.hash));a&&m(a)}catch(a){}}))}}]);
//# sourceMappingURL=2714.2e19778b.chunk.js.map