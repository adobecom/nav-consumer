"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[1520],{1520:(e,t,n)=>{n.r(t),n.d(t,{closeModal:()=>m,default:()=>g,delayedModal:()=>v,findDetails:()=>r,getHashParams:()=>f,getModal:()=>w,sendAnalytics:()=>h});var a=n(5922),o=n(2861),l=(n(6850),'a:not(.hide-video), button:not([disabled], .locale-modal-v2 .paddle), input, textarea, select, details, [tabindex]:not([tabindex="-1"])'),d='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n  <g transform="translate(-10500 3403)">\n    <circle cx="10" cy="10" r="10" transform="translate(10500 -3403)" fill="#707070"/>\n    <line y1="8" x2="8" transform="translate(10506 -3397)" fill="none" stroke="#fff" stroke-width="2"/>\n    <line x1="8" y1="8" transform="translate(10506 -3397)" fill="none" stroke="#fff" stroke-width="2"/>\n  </g>\n</svg>',i=!1,c="",s=new Set;function r(e,t){const n=e.replace("#",""),a=t||document.querySelector('a[data-modal-hash="'.concat(e,'"]'));return{id:n,path:(null===a||void 0===a?void 0:a.dataset.modalPath)||(0,o.localizeLink)((0,o.getMetadata)("-".concat(n))),isHash:e===window.location.hash}}function u(e){var t;const n={xdm:{},data:{web:{webInteraction:{name:null===e||void 0===e?void 0:e.type}}}};null!==e&&void 0!==e&&e.data&&(n.data._adobe_corpnew={digitalData:e.data}),null===(t=window._satellite)||void 0===t||t.track("event",n)}function h(e){var t;null!==(t=window._satellite)&&void 0!==t&&t.track?u(e):window.addEventListener("alloy_sendEvent",(()=>{u(e)}),{once:!0})}function m(e){const{id:t}=e,n=new Event("milo:modal:closed");window.dispatchEvent(n),document.querySelectorAll("#".concat(t)).forEach((e=>{var n;if(e.classList.contains("dialog-modal")){const n=document.querySelector("#".concat(t,"~.modal-curtain"));n&&n.remove(),e.remove()}null===(n=document.querySelector('[data-modal-hash="#'.concat(e.id,'"]')))||void 0===n||n.focus()})),document.querySelectorAll(".modal-curtain").length||document.body.classList.remove("disable-scroll"),[...document.querySelectorAll("header, main, footer")].forEach((e=>e.removeAttribute("aria-disabled")));window.location.hash.replace("#","")===e.id&&window.history.pushState("",document.title,"".concat(window.location.pathname).concat(window.location.search)),i=!1,c&&(window.location.hash=c,c="")}async function w(e,t){if(!(null!==e&&void 0!==e&&e.path&&null!==e&&void 0!==e&&e.id||t))return null;const{id:c}=e||t;s.add(c);const r=(0,o.createTag)("div",{class:"dialog-modal",id:c}),u=new Event("milo:modal:loaded");if(t&&function(e,t){const{miloLibs:n,codeRoot:a}=(0,o.getConfig)();(0,o.loadStyle)("".concat(n||a,"/blocks/modal/modal.css")),e.id&&(t.id=e.id),e.class&&t.classList.add(e.class),e.closeEvent&&t.addEventListener(e.closeEvent,(()=>{m(t)})),t.append(e.content)}(t,r),e&&await async function(e,t){let a=e;if(e.includes("/federal/")){const{getFederatedUrl:t}=await n.e(1601).then(n.bind(n,3982));a=t(e)}const l=(0,o.createTag)("a",{href:a});t.append(l);const{default:d}=await n.e(5815).then(n.bind(n,5815));await d(l)}(e.path,r),i){r.classList.add("delayed-modal");const e=r.querySelector("div.media");if(e){e.classList.add("in-modal");const{miloLibs:t,codeRoot:n}=(0,o.getConfig)(),a=t||n;(0,o.loadStyle)("".concat(a,"/styles/rounded-corners.css"))}}const h=null!==c&&void 0!==c&&c.includes("locale-modal")?"localeModal":"milo",w=window.location.hash?window.location.hash.replace("#",""):h,f=(0,o.createTag)("button",{class:"dialog-close","aria-label":"Close","daa-ll":"".concat(w,":modalClose:buttonClose")},d),v=(0,o.createTag)("div",{class:"dialog-focus-placeholder",tabindex:0}),g={focusVisible:!0},p=[...r.querySelectorAll(l)],y=r.querySelector("h1, h2, h3, h4, h5");let b;p.length&&function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(p[0])?b=p[0]:y?(y.setAttribute("tabIndex",0),b=y):b=f;let L=!1;if(f.addEventListener("keydown",(e=>{"Tab"===e.key&&e.shiftKey&&(L=!0,v.focus(g))})),v.addEventListener("focus",(()=>{L||f.focus(g),L=!1})),f.addEventListener("click",(e=>{m(r),e.preventDefault()})),r.addEventListener("keydown",(e=>{"Escape"===e.key&&m(r)})),(0,a.decorateSectionAnalytics)(r,"".concat(c,"-modal"),(0,o.getConfig)()),r.prepend(f),r.append(v),document.body.append(r),s.delete(c),b.focus({preventScroll:!0,...g}),window.dispatchEvent(u),!r.classList.contains("curtain-off")){document.body.classList.add("disable-scroll");const e=(0,o.createTag)("div",{class:"modal-curtain is-open","daa-ll":"".concat(w,":modalClose:curtainClose")});e.addEventListener("click",(t=>{t.target===e&&m(r)})),r.insertAdjacentElement("afterend",e),[...document.querySelectorAll("header, main, footer")].forEach((e=>e.setAttribute("aria-disabled","true")))}const E=r.querySelector("iframe");if(E){if(r.classList.contains("commerce-frame")||r.classList.contains("dynamic-height")){const{default:e}=await n.e(2342).then(n.bind(n,2342));await e({dialog:r,iframe:E})}else E.style.height="100%";null!==t&&void 0!==t&&t.closeEvent||r.addEventListener("iframe:modal:closed",(()=>m(r)))}return r}function f(e){return e?e.split(":").reduce(((e,t)=>{if(t.startsWith("#"))e.hash=t;else{const[n,a]=t.split("=");"delay"===n&&(e.delay=1e3*parseInt(a,10))}return e}),{}):{}}function v(e){const{hash:t,delay:n}=f(null===e||void 0===e?void 0:e.dataset.modalHash);if(void 0===n||!t)return!1;i=!0;const a=new Event("".concat(t,":modalOpen")),o=window.sessionStorage.getItem("shown:".concat(t));return e.dataset.modalHash=t,e.href=t,null!==o&&void 0!==o&&o.includes(window.location.pathname)||setTimeout((()=>{window.location.replace(t),h(a),window.sessionStorage.setItem("shown:".concat(t),"".concat(o||""," ").concat(window.location.pathname))}),n),!0}function g(e){var t;const{modalHash:n,modalPath:a}=e.dataset;if("remove"===(null===(t=(0,o.getConfig)().mep)||void 0===t||null===(t=t.fragments)||void 0===t||null===(t=t[a])||void 0===t?void 0:t.action))return null;if(v(e)||window.location.hash!==n||document.querySelector("div.dialog-modal".concat(n)))return null;if(s.has(null===n||void 0===n?void 0:n.replace("#","")))return null;const l=r(window.location.hash,e);return l?w(l):null}window.addEventListener("hashchange",(e=>{if(window.location.hash){var t;const n=r(window.location.hash,null);n&&w(n),null!==(t=e.oldURL)&&void 0!==t&&t.includes("#")&&(c=new URL(e.oldURL).hash)}else try{const t=new URL(e.oldURL),n=document.querySelector(".dialog-modal".concat(t.hash));n&&m(n)}catch(n){}}))}}]);
//# sourceMappingURL=1520.5c9ad0d3.chunk.js.map