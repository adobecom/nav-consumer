"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[4194,42],{42:(e,t,o)=>{function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;if("function"!==typeof e)return;let o=null;return function(){for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];clearTimeout(o),o=setTimeout((()=>e(...i)),t)}}o.r(t),o.d(t,{debounce:()=>n})},4194:(e,t,o)=>{o.r(t),o.d(t,{MOBILE_MAX:()=>i,TABLET_MAX:()=>c,adjustModalHeight:()=>d,adjustStyles:()=>r,default:()=>u,sendViewportDimensionsOnRequest:()=>a,sendViewportDimensionsToIframe:()=>l});var n=o(42),i=(o(5769),599),c=1199;function d(e){if(!window.location.hash&&!document.getElementById("checkout-link-modal"))return;let t="#checkout-link-modal";/=/.test(window.location.hash)||(t="".concat(t,",div.dialog-modal.commerce-frame").concat(window.location.hash,",div.dialog-modal.dynamic-height").concat(window.location.hash));const o=document.querySelector(t),n=null===o||void 0===o?void 0:o.querySelector("iframe"),i=null===o||void 0===o?void 0:o.querySelector(".milo-iframe");if(e&&n&&i)if("100%"===e)n.style.height="100%",i.style.removeProperty("height"),o.style.removeProperty("height");else{const t=20,c=document.documentElement.clientHeight-t;if(c<=0)return;const d=e>c?c:e;n.style.height="100%",i.style.height="".concat(d,"px"),o.style.height="".concat(d,"px")}}function l(e){const t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);e.postMessage({mobileMax:i,tabletMax:c,viewportWidth:t},"*")}function a(e){l(e),window.addEventListener("resize",(0,n.debounce)((()=>l(e)),10))}function s(e){let{data:t,source:o}=e;"viewportWidth"===t&&o&&a(o),null!==t&&void 0!==t&&t.contentHeight&&d(null===t||void 0===t?void 0:t.contentHeight)}function r(e){let{dialog:t,iframe:o}=e;/\/mini-plans\/.*mid=ft.*web=1/.test(o.src)||/\/creativecloud\/whats-included\/plans\//.test(o.src)?(t.classList.add("height-fit-content"),setTimeout((()=>{const{height:e}=window.getComputedStyle(o);"0px"===e&&(o.style.height="100%")}),2e3)):o.style.height="100%"}async function u(e){let{dialog:t,iframe:o}=e;t&&o&&(r({dialog:t,iframe:o}),window.addEventListener("message",s))}window.addEventListener("pageshow",(e=>{e.persisted&&document.querySelector(".dialog-modal.commerce-frame iframe")&&window.location.reload()}))}}]);
//# sourceMappingURL=4194.7c86ba19.chunk.js.map