"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[22,8331,9818],{8331:(n,e,t)=>{t.r(e),t.d(e,{stylePublish:()=>c});var o=t(9818),i=async function(n){var e,t;let i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!n)return!1;const{live:s,profile:a,webPath:r}=n;let l=!i||(null===s||void 0===s||null===(e=s.permissions)||void 0===e?void 0:e.includes("write")),d="Publishing is currently disabled for this page";const c=await(0,o.getCustomConfig)("/.milo/publish-permissions-config.json"),u=null===c||void 0===c||null===(t=c.urls)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.find((n=>{let{url:e}=n;return e.endsWith("**")?r.includes(e.slice(0,-2)):e===r}));if(u){l=!1,u.message&&(d=u.message);const n=c[u.group];if(n&&null!==a&&void 0!==a&&a.email){var p;let e;const t=null===(p=n.data)||void 0===p?void 0:p.find((n=>{let{allow:t,deny:o}=n;return o?(e=!0,o===a.email):t===a.email}));l=e?!t:!!t}}return{canPublish:l,message:d}},s=".publish.plugin button",a=".profile-email",r="Are you sure? This will publish to production.",l=!1;async function d(n,e){const{canPublish:t,message:o}=await i(n,!1);t?e.removeAttribute("disabled"):(e.setAttribute("disabled",!0),e.insertAdjacentHTML("beforeend","<span>".concat(o,"</span>")),setTimeout((()=>e.querySelector("span").remove()),4e3))}async function c(n){var e,t;if(l)return;if(l=!0,"HELIX-SIDEKICK"===n.nodeName)return void function(n){const e=async(n,e)=>{const{canPublish:t,message:o}=await i(n,!1);t?e.removeAttribute("disabled"):e.setAttribute("disabled",!0);const s=e.querySelector("span"),a=t?r:o;s?s.innerText=a:e.insertAdjacentHTML("beforeend","<span>".concat(a,"</span>"))},t=new CSSStyleSheet;t.replaceSync("\n    :host {\n      --bg-color: rgb(129 27 14);\n      --text-color: #fff0f0;\n      color-scheme: light dark;\n    }\n    .publish.plugin {\n      order: 100;\n    }\n    .publish.plugin button {\n      position: relative;\n    }\n    .publish.plugin button:not([disabled=true]) {\n      background: var(--bg-color);\n      border-color: #b46157;\n      color: var(--text-color);\n    }\n    .publish.plugin button:not([disabled=true]):hover {\n      background-color: var(--hlx-sk-button-hover-bg);\n      border-color: unset;\n      color: var(--hlx-sk-button-hover-color);\n    }\n    .publish.plugin button > span {\n      display: none;\n      background: #666;\n      border-radius: 4px;\n      line-height: 1.2rem;\n      padding: 8px 12px;\n      position: absolute;\n      top: 34px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 150px;\n      white-space: pre-wrap;\n    }\n    .publish.plugin button:not([disabled=true]) > span {\n      background: var(--bg-color);\n    }\n    .publish.plugin button:hover > span {\n      display: block;\n      color: var(--text-color);\n    }\n    .publish.plugin button > span:before {\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-bottom: 6px solid #666;\n      position: absolute;\n      text-align: center;\n      top: -6px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    .publish.plugin button:not([disabled=true]) > span:before {\n      border-bottom: 6px solid var(--bg-color);\n    }\n  "),n.shadowRoot.adoptedStyleSheets=[t],n.addEventListener("statusfetched",(async n=>{var t,o;const i=null===n||void 0===n||null===(t=n.detail)||void 0===t?void 0:t.data,a=null===n||void 0===n||null===(o=n.target)||void 0===o||null===(o=o.shadowRoot)||void 0===o?void 0:o.querySelector(s);i&&a&&e(i,a)})),setTimeout((async()=>{const t=n.shadowRoot.querySelector(s);null===t||void 0===t||t.setAttribute("disabled",!0);const o=null===t||void 0===t?void 0:t.querySelector("span");if(t&&!o){var i;const o={webPath:window.location.pathname,profile:{email:null===(i=n.shadowRoot.querySelector(a))||void 0===i?void 0:i.innerText}};e(o,t)}}),500)}(n);const o=new CSSStyleSheet;o.replaceSync("\n    sk-action-button.publish {\n      position: relative;\n    }\n    sk-action-button.publish > span {\n      display: none;\n      background: #777;\n      border-radius: 4px;\n      line-height: 1.2rem;\n      padding: 8px 12px;\n      position: absolute;\n      bottom: 34px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 150px;\n      white-space: pre-wrap;\n      color: black;\n    }\n    sk-action-button.publish[disabled] > span {\n      display: block;\n    }\n    sk-action-button.publish > span:before {\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-top: 6px solid #777;\n      position: absolute;\n      text-align: center;\n      bottom: -6px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  ");const c=n.shadowRoot.querySelector("plugin-action-bar").shadowRoot;null!==(e=c.adoptedStyleSheets)&&void 0!==e||(c.adoptedStyleSheets=[]),c.adoptedStyleSheets.push(o);const u=c.querySelector("sk-action-button.publish");u||n.addEventListener("status-fetched",(n=>{let{target:e,detail:t}=n;setTimeout((async()=>{const n=e.shadowRoot.querySelector("plugin-action-bar").shadowRoot.querySelector("sk-action-button.publish");t&&n&&await d(t,n)}),0)}));const p={webPath:window.location.pathname,profile:{email:null===(t=c.querySelector("#user").shadowRoot.querySelector('.user [slot="description"]'))||void 0===t?void 0:t.innerText}};p&&u&&await d(p,u)}},9818:(n,e,t)=>{t.r(e),t.d(e,{getCustomConfig:()=>s,getImsToken:()=>i});var o={},i=async n=>{var e;return window.adobeid={client_id:"milo_ims",environment:"prod",scope:"AdobeID,openid"},window.adobeIMS||await n("https://auth.services.adobe.com/imslib/imslib.min.js"),null===(e=window.adobeIMS)||void 0===e||null===(e=e.getAccessToken())||void 0===e?void 0:e.token},s=async n=>{if(void 0!==o[n])return o[n];let e=null;const t=await fetch(n);return t.ok&&(e=await t.json()),o[n]=e,o[n]}},22:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});var o=t(8331);t(9818),t(5769);function i(n){let{createTag:e,loadBlock:i,loadScript:s,loadStyle:a}=n;document.addEventListener("send-to-caas",(async n=>{const{host:e,project:o,branch:i,repo:r,owner:l}=n.detail,{sendToCaaS:d}=await t.e(6520).then(t.bind(t,6520));d({host:e,project:o,branch:i,repo:r,owner:l},s,a)}));const r=document.querySelector("aem-sidekick, helix-sidekick");r.addEventListener("custom:send-to-caas",(async n=>{const{host:e,project:o,ref:i,repo:r,owner:l}=n.detail.data.config,{sendToCaaS:d}=await Promise.resolve().then(t.bind(t,1009));d({host:e,project:o,branch:i,repo:r,owner:l},s,a)})),r.addEventListener("custom:check-schema",(async()=>{if(null===document.querySelector('script[type="application/ld+json"]'))return;window.open("".concat("https://search.google.com/test/rich-results?url=").concat(encodeURIComponent(window.location.href)),"check-schema")})),r.addEventListener("custom:preflight",(async()=>{const n=e("div",{class:"preflight"}),o=await i(n),{getModal:s}=await t.e(4984).then(t.bind(t,4984));s(null,{id:"preflight",content:o,closeEvent:"closeModal"})})),(0,o.stylePublish)(r)}}}]);
//# sourceMappingURL=22.67db84fb.chunk.js.map