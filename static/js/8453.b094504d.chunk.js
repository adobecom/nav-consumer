"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[8453,7405,3203,3524,9786],{7528:(e,t,a)=>{function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}a.d(t,{A:()=>n})},7405:(e,t,a)=>{a.r(t),a.d(t,{getFederatedContentRoot:()=>c,getFederatedUrl:()=>r,getFedsPlaceholderConfig:()=>i});var n,o,l=a(4114),c=()=>{const{allowedOrigins:e=[],origin:t}=(0,l.getConfig)();if(n)return n;const a=t||window.location.origin;return n=[...e,"https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com"].some((e=>a.replace(".stage","")===e))?a:"https://www.adobe.com",(a.includes("localhost")||a.includes(".".concat(l.SLD,".")))&&(n="https://main--federal--adobecom.aem.".concat(a.endsWith(".live")?"live":"page")),n},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e||!e.includes("/federal/"))return e;if(e.startsWith("/"))return"".concat(c()).concat(e);try{const{pathname:t,search:a,hash:n}=new URL(e);return"".concat(c()).concat(t).concat(a).concat(n)}catch(a){var t;null===(t=window.lana)||void 0===t||t.log("getFederatedUrl errored parsing the URL: ".concat(e,": ").concat(a.toString()))}return e},i=function(){let{useCache:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&o)return o;const{locale:t,placeholders:a}=(0,l.getConfig)(),n=c();return o={locale:{...t,contentRoot:"".concat(n).concat(t.prefix,"/federal/globalnav")},placeholders:a}}},3203:(e,t,a)=>{a.r(t),a.d(t,{decoratePlaceholderArea:()=>d,replaceKey:()=>r,replaceKeyArray:()=>i,replaceText:()=>s});var n=a(4114),o={};window.mph={};var l=async e=>{let{config:t,sheet:a,placeholderRequest:l,placeholderPath:c}=e;const r=c||((e,t)=>{const a="".concat(e.locale.contentRoot,"/placeholders.json"),n="default"!==t&&"string"===typeof t&&t.length?"?sheet=".concat(t):"";return"".concat(a).concat(n)})(t,a);return o[r]=o[r]||new Promise((async e=>{const t=await l||await(0,n.customFetch)({resource:r,withCacheRules:!0}).catch((()=>({}))),a=t.ok?await t.json():{data:[]};if(0===a.data.length)return void e({});const o={};a.data.forEach((e=>{window.mph[e.key]=e.value,o[e.key]=e.value})),e(o)})),o[r]};async function c(e,t,a){var o,c;let r=!1;const i="en-US",s=(0,n.getMetadata)("disable-geo-placeholders")||"off",d=()=>{const e=t.locale.contentRoot,a=t.locale.prefix;return a.length?e.endsWith(a)?e.replace(a,""):e.replace("".concat(a,"/"),"/"):e},u=async()=>{const e={locale:{ietf:i,contentRoot:d()}},t=await l({config:e,sheet:a}).catch((()=>({})));return r=!0,t};if(null!==(o=t.placeholders)&&void 0!==o&&o[e])return t.placeholders[e];let f;if(f="on"===s?await u():await l({config:t,sheet:a}),"string"===typeof(null===(c=f)||void 0===c?void 0:c[e]))return f[e];if(!r&&t.locale.ietf!==i){const t=await u();if(null!==t&&void 0!==t&&t[e])return t[e]}return function(e){return e.replaceAll("-"," ")}(e)}async function r(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";if("string"!==typeof e||!e.length)return"";return await c(e,t,a)}async function i(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";if(!Array.isArray(e)||!e.length)return[];const n=[];e.forEach((e=>{n.push(c(e,t,a))}));return await Promise.all(n)}async function s(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default";if("string"!==typeof e||!e.length)return"";const o=[...e.matchAll(new RegExp(a))];if(!o.length)return e;const l=Array.from(o,(e=>e[1]||e[2])),c=await i(l,t,n);let r=0,s=e.replaceAll(a,(()=>c[r++]));return s=s.replace(/&nbsp;/g,"\xa0"),s}async function d(e){let{placeholderPath:t,placeholderRequest:a,nodes:o}=e;if(!o.length)return;const c=(0,n.getConfig)();await l({placeholderPath:t,config:c,placeholderRequest:a});const r=o.map((async e=>{if(e.nodeType===Node.TEXT_NODE)e.nodeValue=await s(e.nodeValue,c);else if(e.nodeType===Node.ELEMENT_NODE){const t=[...e.attributes].map((async e=>{const t=await s(e.value,c);return{name:e.name,value:t}}));(await Promise.all(t)).forEach((t=>{let{name:a,value:n}=t;e.setAttribute(a,n)}))}}));await Promise.all(r)}},3524:(e,t,a)=>{a.r(t),a.d(t,{analyticsDecorateList:()=>h,analyticsGetLabel:()=>g,decorateBlockAnalytics:()=>s,decorateDefaultLinkAnalytics:()=>r,decorateLinkAnalytics:()=>d,decorateSectionAnalytics:()=>i,processTrackingLabels:()=>c});var n=a(4114),o=/[^\u00C0-\u1FFF\u2C00-\uD7FF\w]+/g,l=/^_+|_+$/g;function c(e,t,a){let n=null===e||void 0===e?void 0:e.replace(o," ").replace(l,"").trim();if(t){var c;const{analyticLocalization:e,mep:a}=t,o=null===a||void 0===a||null===(c=a.analyticLocalization)||void 0===c?void 0:c[n];if(o)n=o;else{const t=null===e||void 0===e?void 0:e[n];t&&(n=t)}}return a?n.slice(0,a):n}function r(e,t){if(e.classList.length&&!e.className.includes("metadata")&&!e.classList.contains("link-block")&&!e.classList.contains("section")&&"DIV"===e.nodeName){let o="",l=1;const r=(a=(0,n.getMetadata)("analytics-header-limit"))?"off"!==a&&(Number.isNaN(Number(a))?20:parseInt(a,10)):20,i="h1, h2, h3, h4, h5, h6";let s="".concat(i,", .tracking-header");e.querySelectorAll(s).length||(s="".concat(s,", b, strong")),e.querySelectorAll("".concat(s,", a:not(.video.link-block, .no-track), button:not(.no-track)")).forEach((a=>{if("A"===a.nodeName||"BUTTON"===a.nodeName){if(a.classList.contains("tracking-header"))o=c(a.textContent,t,r);else if(!o){const a=e.closest(".section");if(null!==a&&void 0!==a&&a.className.includes("-up")||null!==a&&void 0!==a&&a.classList.contains("milo-card-section")){var n;const e=null===a||void 0===a||null===(n=a.previousElementSibling)||void 0===n?void 0:n.querySelector(i);e&&(o=c(e.textContent,t,r))}}if(a.hasAttribute("daa-ll")){const e=a.getAttribute("daa-ll").split("-").map((e=>""===e?"":c(e,t,20)));a.setAttribute("daa-ll",e.join("-"))}else{var s;let e=null===(s=a.textContent)||void 0===s?void 0:s.trim();var d;if(""===e)e=a.getAttribute("title")||a.getAttribute("aria-label")||(null===(d=a.querySelector("img"))||void 0===d?void 0:d.getAttribute("alt"))||"no label";e=c(e,t,20),a.setAttribute("daa-ll","".concat(e,"-").concat(l,"--").concat(o))}l+=1}else"STRONG"!==a.nodeName&&"B"!==a.nodeName||a.classList.add("tracking-header"),o=c(a.textContent,t,r)}))}var a}async function i(e,t,a){var n,o;const l=Number.isInteger(t)?"s".concat(t+1):t;null===(n=document.querySelector("main"))||void 0===n||n.setAttribute("daa-im","true"),e.setAttribute("daa-lh",l),e.querySelectorAll("[data-block]:has([data-block])").forEach((e=>{e.removeAttribute("data-block")}));const c=(null===a||void 0===a||null===(o=a.mep)||void 0===o?void 0:o.martech)||"";e.querySelectorAll("[data-block]").forEach(((e,t)=>{const n=e.getAttribute("daa-lh");if(n)e.setAttribute("daa-lh","".concat(n).concat(c));else{const n=e.classList[0]||"";let l=e,i="";for(;l;){var o;l=null===(o=l.parentNode)||void 0===o?void 0:o.closest("[data-nested-lh]"),l&&(i="".concat(l.getAttribute("data-nested-lh"),"--").concat(i))}e.setAttribute("daa-lh","b".concat(t+1,"|").concat(i).concat(n.slice(0,15)).concat(c)),r(e,a)}e.removeAttribute("data-block")}))}function s(){return!1}function d(){return!1}var u=/[^0-9a-z]/gi,f=/^_+|_+$/g,g=e=>e.replaceAll("&","and").replace(u,"_").replace(f,""),h=(e,t)=>{var a;const n="A"===(null===(a=e.firstChild)||void 0===a?void 0:a.nodeName)&&e.firstChild;if(!n)return;const o=n.textContent||n.getAttribute("aria-label");o&&n.setAttribute("daa-ll","".concat(g(o),"-").concat(t+1))}},8453:(e,t,a)=>{a.r(t),a.d(t,{addMepHighlightAndTargetId:()=>v,closeAllDropdowns:()=>B,darkIcons:()=>f,decorateCta:()=>T,federatePictureSources:()=>y,fetchAndProcessPlainHtml:()=>U,getActiveLink:()=>R,getAnalyticsValue:()=>b,getDisableAEDState:()=>I,getExperienceName:()=>A,getUserProfile:()=>V,hasActiveLink:()=>Z,icons:()=>u,isActiveLink:()=>q,isDarkMode:()=>M,isDesktop:()=>E,isTangentToViewport:()=>P,lanaLog:()=>g,loadBaseStyles:()=>x,loadDecorateMenu:()=>C,loadStyles:()=>k,logErrorFor:()=>h,rootPath:()=>L,selectors:()=>d,setActiveDropdown:()=>N,setActiveLink:()=>F,setCurtainState:()=>S,setDisableAEDState:()=>D,setUserProfile:()=>O,toFragment:()=>m,trigger:()=>H,yieldToMain:()=>_});var n,o=a(7528),l=a(3203),c=a(3524),r=a(7405),i=a(4114);(0,i.loadLana)();var s="federal",d={globalNav:".global-navigation",curtain:".feds-curtain",navLink:".feds-navLink",overflowingTopNav:".feds-topnav--overflowing",navItem:".feds-navItem",activeNavItem:".feds-navItem--active",deferredActiveNavItem:".feds-navItem--activeDeferred",activeDropdown:".feds-dropdown--active",menuSection:".feds-menu-section",menuColumn:".feds-menu-column",gnavPromo:".gnav-promo",columnBreak:".column-break",brandImageOnly:".brand-image-only"},u={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.5 118.1"><defs><style>.cls-1 {fill: #eb1000;}</style></defs><g><g><polygon class="cls-1" points="84.1 0 133.5 0 133.5 118.1 84.1 0"/><polygon class="cls-1" points="49.4 0 0 0 0 118.1 49.4 0"/><polygon class="cls-1" points="66.7 43.5 98.2 118.1 77.6 118.1 68.2 94.4 45.2 94.4 66.7 43.5"/></g></g></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'},f={...u,brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #fff;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13h0ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81h0ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72h0ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16h0ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78c0,0,3.79,0,3.79,0Z"/></svg>',company:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.5 118.1"><defs><style>.cls-1 {fill: currentColor;}</style></defs><g><g><polygon class="cls-1" points="84.1 0 133.5 0 133.5 118.1 84.1 0"/><polygon class="cls-1" points="49.4 0 0 0 0 118.1 49.4 0"/><polygon class="cls-1" points="66.7 43.5 98.2 118.1 77.6 118.1 68.2 94.4 45.2 94.4 66.7 43.5"/></g></g></svg>'},g=e=>{let{message:t,e:a="",tags:n="errorType=default"}=e;const o=(0,i.getMetadata)("gnav-source");window.lana.log("".concat(t," | gnav-source: ").concat(o," | href: ").concat(window.location.href," | ").concat(a.reason||a.error||a.message||a),{clientId:"feds-milo",sampleRate:1,tags:n})},h=async(e,t,a)=>{try{await e()}catch(n){g({message:t,e:n,tags:a})}};function v(e,t){var a,n,o,l;let{manifestId:c,targetManifestId:r}=t.dataset;return null!==(a=c)&&void 0!==a||(c=null===t||void 0===t||null===(n=t.closest("[data-manifest-id]"))||void 0===n||null===(n=n.dataset)||void 0===n?void 0:n.manifestId),null!==(o=r)&&void 0!==o||(r=null===t||void 0===t||null===(l=t.closest("[data-adobe-target-testid]"))||void 0===l||null===(l=l.dataset)||void 0===l?void 0:l.adobeTargetTestid),c&&(e.dataset.manifestId=c),r&&(e.dataset.adobeTargetTestid=r),e}function m(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];const o=e.reduce(((e,t,n)=>a[n]instanceof HTMLElement?"".concat(e+t,'<elem ref="').concat(n,'"></elem>'):e+t+(a[n]||"")),""),l=document.createRange().createContextualFragment(o).children[0];return Array.prototype.map.call(l.querySelectorAll("elem"),(e=>{const t=e.getAttribute("ref");e.replaceWith(a[t])})),l}var p,w,y=function(){let{section:e,forceFederate:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=t?"[src], [srcset]":'[src*="/'.concat(s,'/"], [srcset*="/').concat(s,'/"]');null===e||void 0===e||e.querySelectorAll(a).forEach((e=>{const a=e.hasAttribute("src")?"src":"srcset",n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{return new URL(e).pathname}catch(t){return e.replace(/^\.\//,"/")}}(e.getAttribute(a)),[,o,l]=n.split("/");if(t||[o,l].includes(s)){const t=n.includes("/federal/")?"":"/federal";e.setAttribute(a,"".concat((0,r.getFederatedContentRoot)()).concat(t).concat(n))}}))};function b(e,t){if("string"!==typeof e||!e.length)return e;let a=(0,c.processTrackingLabels)(e,(0,i.getConfig)(),30);return a="number"===typeof t?"".concat(a,"-").concat(t):a,a}function A(){var e;const t=(0,i.getMetadata)("gnav-source"),a=null===t||void 0===t||null===(e=t.split("#")[0])||void 0===e?void 0:e.split("/").pop();if(null!==a&&void 0!==a&&a.length&&"gnav"!==a)return a;const{imsClientId:n}=(0,i.getConfig)();return null!==n&&void 0!==n&&n.length?n:""}function L(e){const{miloLibs:t,codeRoot:a}=(0,i.getConfig)();return"".concat(t||a,"/blocks/global-navigation/").concat(e)}function k(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{standaloneGnav:a}=(0,i.getConfig)();a&&!t||(0,i.loadStyle)(e,(t=>{"error"===t&&g({message:"GNAV: Error in loadStyles",e:"error loading style: ".concat(e),tags:"errorType=info,module=utilities"})}))}function M(){const{theme:e}=(0,i.getConfig)();return"dark"===e}async function x(){const{standaloneGnav:e}=(0,i.getConfig)();if(!e)if(M())new Promise((e=>{(0,i.loadStyle)(L("base.css"),e)})).then((()=>k(L("dark-nav.css"))));else{const e=L("base.css");await k(e)}}async function C(){if(p)return p;let e;p=new Promise((t=>{e=t}));const[t]=await Promise.all([a.e(1799).then(a.bind(a,4180)),k(L("utilities/menu/menu.css"))]);return e(t.default),p}function T(){let{elem:e,type:t="primaryCta",index:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const l="secondaryCta"===t?"secondary":"primary",c=e.cloneNode(!0);return c.className="feds-cta feds-cta--".concat(l),c.setAttribute("daa-ll",b(c.textContent,a)),m(n||(n=(0,o.A)(['\n    <div class="feds-cta-wrapper">\n      ',"\n    </div>"])),c)}function S(e){"boolean"===typeof e&&(w=w||document.querySelector(d.curtain))&&w.classList.toggle("feds-curtain--open",e)}var E=window.matchMedia("(min-width: 900px)"),P=window.matchMedia("(min-width: 900px) and (max-width: 1440px)");function N(e){const t=d.activeDropdown.replace(".","");if([...document.querySelectorAll(d.activeDropdown)].forEach((e=>e.classList.remove(t))),!(e instanceof HTMLElement))return;[d.menuSection,d.menuColumn,d.navItem].some((a=>{const n=e.closest(a);return!(!n||!n.querySelector('[aria-expanded = "true"]'))&&(n.classList.add(t),!0)}))}var[D,I]=(()=>{let e=!1;return[()=>{e=!0},()=>e]})(),[Z,F,q,R]=(()=>{let e;const{origin:t,pathname:a}=window.location,n="".concat(t).concat(a);return[()=>e,t=>{e=!!t},e=>e.href===n||e.href.startsWith("".concat(n,"?"))||e.href.startsWith("".concat(n,"#")),e=>{var t;const a=null===(t=e.closest(".link-group"))||void 0===t?void 0:t.classList.contains("mobile-only");if(I()||a||Z()||!(e instanceof HTMLElement))return null;const n=[...e.querySelectorAll("a:not([data-modal-hash])")].find(q);return n?(F(!0),n):null}]})();function B(){let{type:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t="headline"===e?'.feds-menu-headline[aria-expanded="true"]':"".concat(d.globalNav," [aria-expanded='true']"),a=document.querySelectorAll(t);a&&([...a].forEach((e=>{"fedsPreventautoclose"in e.dataset||e.setAttribute("aria-expanded","false")})),N(),E.matches&&S(!1))}function H(){let{element:e,event:t,type:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t&&t.preventDefault();const n="true"===(null===e||void 0===e?void 0:e.getAttribute("aria-expanded"));return B({type:a}),!n&&(e.setAttribute("aria-expanded","true"),!0)}var _=()=>new Promise((e=>{setTimeout(e,0)}));async function U(){var e,t;let{url:n,shouldDecorateLinks:o=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=(0,r.getFederatedUrl)(n);const s=null===(e=(0,i.getConfig)())||void 0===e||null===(e=e.mep)||void 0===e||null===(e=e.inBlock)||void 0===e?void 0:e["global-navigation"],d=null===s||void 0===s||null===(t=s.fragments)||void 0===t?void 0:t[c];d&&"replace"===d.action&&(c=d.content);const u=await fetch(c.replace(/(\.html$|$)/,".plain.html"));if(200!==u.status)return g({message:"Error in fetchAndProcessPlainHtml",e:"".concat(u.statusText," url: ").concat(u.url),tags:"errorType=info,module=utilities"}),null;const f=await u.text(),{body:h}=(new DOMParser).parseFromString(f,"text/html");null!==d&&void 0!==d&&d.manifestId&&(h.dataset.manifestId=d.manifestId),null!==d&&void 0!==d&&d.targetManifestId&&(h.dataset.adobeTargetTestid=d.targetManifestId);const v=null===s||void 0===s?void 0:s.commands;if(null!==v&&void 0!==v&&v.length){const{handleCommands:e}=await Promise.all([a.e(2343),a.e(6441)]).then(a.bind(a,6441));e(v,h,!0,!0)}const m=[...h.querySelectorAll('a[href*="#_inline"]')];if(m.length){const{default:e}=await a.e(1900).then(a.bind(a,1900)),t=m.map((t=>(t.href=(0,r.getFederatedUrl)((0,i.localizeLink)(t.href)),e(t))));await Promise.all(t)}o&&((0,i.decorateLinks)(h),y({section:h,forceFederate:c.includes("/federal/")}));const p=h.querySelectorAll(".martech-metadata");return p.length&&a.e(1178).then(a.bind(a,1178)).then((e=>{let{default:t}=e;return p.forEach((e=>t(e)))})).catch((e=>{g({message:"Error in fetchAndProcessPlainHtml",e:e,tags:"errorType=info,module=utilities"})})),h.innerHTML=await(0,l.replaceText)(h.innerHTML,(0,r.getFedsPlaceholderConfig)()),h}var[O,V]=(()=>{let e,t,a;const n=new Promise((n=>{t=n,a=setTimeout((()=>{e={},n(e)}),5e3)}));return[n=>{n&&!e&&(e=n,clearTimeout(a),t(e))},()=>n]})()}}]);
//# sourceMappingURL=8453.b094504d.chunk.js.map