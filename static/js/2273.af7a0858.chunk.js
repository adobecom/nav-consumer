"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[2273,8331,9818],{8331:(n,t,e)=>{e.r(t),e.d(t,{stylePublish:()=>u});var o=e(9818),i=async function(n){var t,e;let i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!n)return!1;const{live:s,profile:l,webPath:r}=n;let a=!i||(null===s||void 0===s||null===(t=s.permissions)||void 0===t?void 0:t.includes("write")),d="Publishing is currently disabled for this page";const u=await(0,o.getCustomConfig)("/.milo/publish-permissions-config.json"),c=null===u||void 0===u||null===(e=u.urls)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.find((n=>{let{url:t}=n;return t.endsWith("**")?r.includes(t.slice(0,-2)):t===r}));if(c){a=!1,c.message&&(d=c.message);const n=u[c.group];if(n&&null!==l&&void 0!==l&&l.email){var p;let t;const e=null===(p=n.data)||void 0===p?void 0:p.find((n=>{let{allow:e,deny:o}=n;return o?(t=!0,o===l.email):e===l.email}));a=t?!e:!!e}}return{canPublish:a,message:d}},s=".publish.plugin button",l=".profile-email",r="Are you sure? This will publish to production.",a=!1;async function d(n,t){const{canPublish:e,message:o}=await i(n,!1);e?t.removeAttribute("disabled"):(t.setAttribute("disabled",!0),t.insertAdjacentHTML("beforeend","<span>".concat(o,"</span>")),setTimeout((()=>t.querySelector("span").remove()),4e3))}async function u(n){var t,e;if(a)return;if(a=!0,"HELIX-SIDEKICK"===n.nodeName)return void function(n){const t=async(n,t)=>{const{canPublish:e,message:o}=await i(n,!1);e?t.removeAttribute("disabled"):t.setAttribute("disabled",!0);const s=t.querySelector("span"),l=e?r:o;s?s.innerText=l:t.insertAdjacentHTML("beforeend","<span>".concat(l,"</span>"))},e=new CSSStyleSheet;e.replaceSync("\n    :host {\n      --bg-color: rgb(129 27 14);\n      --text-color: #fff0f0;\n      color-scheme: light dark;\n    }\n    .publish.plugin {\n      order: 100;\n    }\n    .publish.plugin button {\n      position: relative;\n    }\n    .publish.plugin button:not([disabled=true]) {\n      background: var(--bg-color);\n      border-color: #b46157;\n      color: var(--text-color);\n    }\n    .publish.plugin button:not([disabled=true]):hover {\n      background-color: var(--hlx-sk-button-hover-bg);\n      border-color: unset;\n      color: var(--hlx-sk-button-hover-color);\n    }\n    .publish.plugin button > span {\n      display: none;\n      background: #666;\n      border-radius: 4px;\n      line-height: 1.2rem;\n      padding: 8px 12px;\n      position: absolute;\n      top: 34px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 150px;\n      white-space: pre-wrap;\n    }\n    .publish.plugin button:not([disabled=true]) > span {\n      background: var(--bg-color);\n    }\n    .publish.plugin button:hover > span {\n      display: block;\n      color: var(--text-color);\n    }\n    .publish.plugin button > span:before {\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-bottom: 6px solid #666;\n      position: absolute;\n      text-align: center;\n      top: -6px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    .publish.plugin button:not([disabled=true]) > span:before {\n      border-bottom: 6px solid var(--bg-color);\n    }\n  "),n.shadowRoot.adoptedStyleSheets=[e],n.addEventListener("statusfetched",(async n=>{var e,o;const i=null===n||void 0===n||null===(e=n.detail)||void 0===e?void 0:e.data,l=null===n||void 0===n||null===(o=n.target)||void 0===o||null===(o=o.shadowRoot)||void 0===o?void 0:o.querySelector(s);i&&l&&t(i,l)})),setTimeout((async()=>{const e=n.shadowRoot.querySelector(s);null===e||void 0===e||e.setAttribute("disabled",!0);const o=null===e||void 0===e?void 0:e.querySelector("span");if(e&&!o){var i;const o={webPath:window.location.pathname,profile:{email:null===(i=n.shadowRoot.querySelector(l))||void 0===i?void 0:i.innerText}};t(o,e)}}),500)}(n);const o=new CSSStyleSheet;o.replaceSync("\n    sk-action-button.publish {\n      position: relative;\n    }\n    sk-action-button.publish > span {\n      display: none;\n      background: #777;\n      border-radius: 4px;\n      line-height: 1.2rem;\n      padding: 8px 12px;\n      position: absolute;\n      bottom: 34px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 150px;\n      white-space: pre-wrap;\n      color: black;\n    }\n    sk-action-button.publish[disabled] > span {\n      display: block;\n    }\n    sk-action-button.publish > span:before {\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-top: 6px solid #777;\n      position: absolute;\n      text-align: center;\n      bottom: -6px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  ");const u=n.shadowRoot.querySelector("plugin-action-bar").shadowRoot;null!==(t=u.adoptedStyleSheets)&&void 0!==t||(u.adoptedStyleSheets=[]),u.adoptedStyleSheets.push(o);const c=u.querySelector("sk-action-button.publish");c||n.addEventListener("status-fetched",(n=>{let{target:t,detail:e}=n;setTimeout((async()=>{const n=t.shadowRoot.querySelector("plugin-action-bar").shadowRoot.querySelector("sk-action-button.publish");e&&n&&await d(e,n)}),0)}));const p={webPath:window.location.pathname,profile:{email:null===(e=u.querySelector("#user").shadowRoot.querySelector('.user [slot="description"]'))||void 0===e?void 0:e.innerText}};p&&c&&await d(p,c)}},9818:(n,t,e)=>{e.r(t),e.d(t,{getCustomConfig:()=>s,getImsToken:()=>i});var o={},i=async n=>{var t;return window.adobeid={client_id:"milo_ims",environment:"prod",scope:"AdobeID,openid"},window.adobeIMS||await n("https://auth.services.adobe.com/imslib/imslib.min.js"),null===(t=window.adobeIMS)||void 0===t||null===(t=t.getAccessToken())||void 0===t?void 0:t.token},s=async n=>{if(void 0!==o[n])return o[n];let t=null;const e=await fetch(n);return e.ok&&(t=await e.json()),o[n]=t,o[n]}},2273:(n,t,e)=>{e.r(t),e.d(t,{default:()=>o.stylePublish});var o=e(8331);e(9818),e(5769)}}]);
//# sourceMappingURL=2273.af7a0858.chunk.js.map