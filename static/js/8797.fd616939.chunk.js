"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[8797,3524,1178],{3524:(t,e,a)=>{a.r(e),a.d(e,{analyticsDecorateList:()=>h,analyticsGetLabel:()=>b,decorateBlockAnalytics:()=>s,decorateDefaultLinkAnalytics:()=>i,decorateLinkAnalytics:()=>d,decorateSectionAnalytics:()=>r,processTrackingLabels:()=>o});var n=a(4114),l=/[^\u00C0-\u1FFF\u2C00-\uD7FF\w]+/g,c=/^_+|_+$/g;function o(t,e,a){let n=null===t||void 0===t?void 0:t.replace(l," ").replace(c,"").trim();if(e){var o;const{analyticLocalization:t,mep:a}=e,l=null===a||void 0===a||null===(o=a.analyticLocalization)||void 0===o?void 0:o[n];if(l)n=l;else{const e=null===t||void 0===t?void 0:t[n];e&&(n=e)}}return a?n.slice(0,a):n}function i(t,e){if(t.classList.length&&!t.className.includes("metadata")&&!t.classList.contains("link-block")&&!t.classList.contains("section")&&"DIV"===t.nodeName){let l="",c=1;const i=(a=(0,n.getMetadata)("analytics-header-limit"))?"off"!==a&&(Number.isNaN(Number(a))?20:parseInt(a,10)):20,r="h1, h2, h3, h4, h5, h6";let s="".concat(r,", .tracking-header");t.querySelectorAll(s).length||(s="".concat(s,", b, strong")),t.querySelectorAll("".concat(s,", a:not(.video.link-block, .no-track), button:not(.no-track)")).forEach((a=>{if("A"===a.nodeName||"BUTTON"===a.nodeName){if(a.classList.contains("tracking-header"))l=o(a.textContent,e,i);else if(!l){const a=t.closest(".section");if(null!==a&&void 0!==a&&a.className.includes("-up")||null!==a&&void 0!==a&&a.classList.contains("milo-card-section")){var n;const t=null===a||void 0===a||null===(n=a.previousElementSibling)||void 0===n?void 0:n.querySelector(r);t&&(l=o(t.textContent,e,i))}}if(a.hasAttribute("daa-ll")){const t=a.getAttribute("daa-ll").split("-").map((t=>""===t?"":o(t,e,20)));a.setAttribute("daa-ll",t.join("-"))}else{var s;let t=null===(s=a.textContent)||void 0===s?void 0:s.trim();var d;if(""===t)t=a.getAttribute("title")||a.getAttribute("aria-label")||(null===(d=a.querySelector("img"))||void 0===d?void 0:d.getAttribute("alt"))||"no label";t=o(t,e,20),a.setAttribute("daa-ll","".concat(t,"-").concat(c,"--").concat(l))}c+=1}else"STRONG"!==a.nodeName&&"B"!==a.nodeName||a.classList.add("tracking-header"),l=o(a.textContent,e,i)}))}var a}async function r(t,e,a){var n,l;const c=Number.isInteger(e)?"s".concat(e+1):e;null===(n=document.querySelector("main"))||void 0===n||n.setAttribute("daa-im","true"),t.setAttribute("daa-lh",c),t.querySelectorAll("[data-block]:has([data-block])").forEach((t=>{t.removeAttribute("data-block")}));const o=(null===a||void 0===a||null===(l=a.mep)||void 0===l?void 0:l.martech)||"";t.querySelectorAll("[data-block]").forEach(((t,e)=>{const n=t.getAttribute("daa-lh");if(n)t.setAttribute("daa-lh","".concat(n).concat(o));else{const n=t.classList[0]||"";let c=t,r="";for(;c;){var l;c=null===(l=c.parentNode)||void 0===l?void 0:l.closest("[data-nested-lh]"),c&&(r="".concat(c.getAttribute("data-nested-lh"),"--").concat(r))}t.setAttribute("daa-lh","b".concat(e+1,"|").concat(r).concat(n.slice(0,15)).concat(o)),i(t,a)}t.removeAttribute("data-block")}))}function s(){return!1}function d(){return!1}var u=/[^0-9a-z]/gi,v=/^_+|_+$/g,b=t=>t.replaceAll("&","and").replace(u,"_").replace(v,""),h=(t,e)=>{var a;const n="A"===(null===(a=t.firstChild)||void 0===a?void 0:a.nodeName)&&t.firstChild;if(!n)return;const l=n.textContent||n.getAttribute("aria-label");l&&n.setAttribute("daa-ll","".concat(b(l),"-").concat(e+1))}},1178:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o,getMetadata:()=>c});var n=a(3524),l=a(4114),c=(a(5769),(t,e)=>[...t.childNodes].reduce(((t,a)=>{var l;if((null===(l=a.children)||void 0===l?void 0:l.length)>1){const l=(0,n.processTrackingLabels)(a.children[0].textContent,e),c=(0,n.processTrackingLabels)(a.children[1].textContent,e);l&&c&&(t[l]=c)}return t}),{}));function o(t){const e=(0,l.getConfig)(),{analyticLocalization:a}=e;return e.analyticLocalization={...a,...c(t,e)},t.remove(),e}}}]);
//# sourceMappingURL=8797.fd616939.chunk.js.map