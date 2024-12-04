"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[1021,2313,731,5886,3112],{7528:(e,t,n)=>{function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{A:()=>a})},2313:(e,t,n)=>{n.r(t),n.d(t,{analyticsDecorateList:()=>v,analyticsGetLabel:()=>g,decorateBlockAnalytics:()=>s,decorateDefaultLinkAnalytics:()=>r,decorateLinkAnalytics:()=>d,decorateSectionAnalytics:()=>i,processTrackingLabels:()=>c});var a=n(4941),o=/[^\u00C0-\u1FFF\u2C00-\uD7FF\w]+/g,l=/^_+|_+$/g;function c(e,t,n){let a=null===e||void 0===e?void 0:e.replace(o," ").replace(l,"").trim();if(t){var c;const{analyticLocalization:e,mep:n}=t,o=null===n||void 0===n||null===(c=n.analyticLocalization)||void 0===c?void 0:c[a];if(o)a=o;else{const t=null===e||void 0===e?void 0:e[a];t&&(a=t)}}return n?a.slice(0,n):a}function r(e,t){if(e.classList.length&&!e.className.includes("metadata")&&!e.classList.contains("link-block")&&!e.classList.contains("section")&&"DIV"===e.nodeName){let o="",l=1;const r=(n=(0,a.getMetadata)("analytics-header-limit"))?"off"!==n&&(Number.isNaN(Number(n))?20:parseInt(n,10)):20,i="h1, h2, h3, h4, h5, h6";let s="".concat(i,", .tracking-header");e.querySelectorAll(s).length||(s="".concat(s,", b, strong")),e.querySelectorAll("".concat(s,", a:not(.video.link-block, .no-track), button:not(.no-track)")).forEach((n=>{if("A"===n.nodeName||"BUTTON"===n.nodeName){if(n.classList.contains("tracking-header"))o=c(n.textContent,t,r);else if(!o){const n=e.closest(".section");if(null!==n&&void 0!==n&&n.className.includes("-up")||null!==n&&void 0!==n&&n.classList.contains("milo-card-section")){var a;const e=null===n||void 0===n||null===(a=n.previousElementSibling)||void 0===a?void 0:a.querySelector(i);e&&(o=c(e.textContent,t,r))}}if(n.hasAttribute("daa-ll")){const e=n.getAttribute("daa-ll").split("-").map((e=>""===e?"":c(e,t,20)));n.setAttribute("daa-ll",e.join("-"))}else{var s;let e=null===(s=n.textContent)||void 0===s?void 0:s.trim();var d;if(""===e)e=n.getAttribute("title")||n.getAttribute("aria-label")||(null===(d=n.querySelector("img"))||void 0===d?void 0:d.getAttribute("alt"))||"no label";e=c(e,t,20),n.setAttribute("daa-ll","".concat(e,"-").concat(l,"--").concat(o))}l+=1}else"STRONG"!==n.nodeName&&"B"!==n.nodeName||n.classList.add("tracking-header"),o=c(n.textContent,t,r)}))}var n}async function i(e,t,n){var a,o;const l=Number.isInteger(t)?"s".concat(t+1):t;null===(a=document.querySelector("main"))||void 0===a||a.setAttribute("daa-im","true"),e.setAttribute("daa-lh",l),e.querySelectorAll("[data-block] [data-block]").forEach((e=>{e.removeAttribute("data-block")}));const c=(null===n||void 0===n||null===(o=n.mep)||void 0===o?void 0:o.martech)||"";e.querySelectorAll("[data-block]").forEach(((e,t)=>{const a=e.getAttribute("daa-lh");if(a)e.setAttribute("daa-lh","".concat(a).concat(c));else{const a=e.classList[0]||"";e.setAttribute("daa-lh","b".concat(t+1,"|").concat(a.slice(0,15)).concat(c)),r(e,n)}e.removeAttribute("data-block")}))}function s(){return!1}function d(){return!1}var u=/[^0-9a-z]/gi,f=/^_+|_+$/g,g=e=>e.replaceAll("&","and").replace(u,"_").replace(f,""),v=(e,t)=>{var n;const a="A"===(null===(n=e.firstChild)||void 0===n?void 0:n.nodeName)&&e.firstChild;if(!a)return;const o=a.textContent||a.getAttribute("aria-label");o&&a.setAttribute("daa-ll","".concat(g(o),"-").concat(t+1))}},5886:(e,t,n)=>{n.r(t),n.d(t,{decoratePlaceholderArea:()=>d,replaceKey:()=>r,replaceKeyArray:()=>i,replaceText:()=>s});var a=n(4941),o={};window.mph={};var l=async e=>{let{config:t,sheet:n,placeholderRequest:l,placeholderPath:c}=e;const r=c||((e,t)=>{const n="".concat(e.locale.contentRoot,"/placeholders.json"),a="default"!==t&&"string"===typeof t&&t.length?"?sheet=".concat(t):"";return"".concat(n).concat(a)})(t,n);return o[r]=o[r]||new Promise((async e=>{const t=await l||await(0,a.customFetch)({resource:r,withCacheRules:!0}).catch((()=>({}))),n=t.ok?await t.json():{data:[]};if(0===n.data.length)return void e({});const o={};n.data.forEach((e=>{window.mph[e.key]=e.value,o[e.key]=e.value})),e(o)})),o[r]};async function c(e,t,n){var a;let o=!1;const c="en-US",r=()=>{const e=t.locale.contentRoot,n=t.locale.prefix;return n.length?e.endsWith(n)?e.replace(n,""):e.replace("".concat(n,"/"),"/"):e},i=async()=>{const e={locale:{ietf:c,contentRoot:r()}},t=await l({config:e,sheet:n}).catch((()=>({})));return o=!0,t};if(null!==(a=t.placeholders)&&void 0!==a&&a[e])return t.placeholders[e];const s=await l({config:t,sheet:n}).catch((async()=>await i()));if("string"===typeof(null===s||void 0===s?void 0:s[e]))return s[e];if(!o&&t.locale.ietf!==c){const t=await i();if(null!==t&&void 0!==t&&t[e])return t[e]}return function(e){return e.replaceAll("-"," ")}(e)}async function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";if("string"!==typeof e||!e.length)return"";return await c(e,t,n)}async function i(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";if(!Array.isArray(e)||!e.length)return[];const a=[];e.forEach((e=>{a.push(c(e,t,n))}));return await Promise.all(a)}async function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default";if("string"!==typeof e||!e.length)return"";const o=[...e.matchAll(new RegExp(n))];if(!o.length)return e;const l=Array.from(o,(e=>e[1]||e[2])),c=await i(l,t,a);let r=0,s=e.replaceAll(n,(()=>c[r++]));return s=s.replace(/&nbsp;/g,"\xa0"),s}async function d(e){let{placeholderPath:t,placeholderRequest:n,nodes:o}=e;if(!o.length)return;const c=(0,a.getConfig)();await l({placeholderPath:t,config:c,placeholderRequest:n});const r=o.map((async e=>{if(e.nodeType===Node.TEXT_NODE)e.nodeValue=await s(e.nodeValue,c);else if(e.nodeType===Node.ELEMENT_NODE){const t=[...e.attributes].map((async e=>{const t=await s(e.value,c);return{name:e.name,value:t}}));(await Promise.all(t)).forEach((t=>{let{name:n,value:a}=t;e.setAttribute(n,a)}))}}));await Promise.all(r)}},731:(e,t,n)=>{n.r(t),n.d(t,{getFederatedContentRoot:()=>l,getFederatedUrl:()=>c});var a,o=n(4941),l=()=>{const{allowedOrigins:e=[],origin:t}=(0,o.getConfig)();if(a)return a;const n=t||window.location.origin;return a=[...e,"https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com"].some((e=>n.replace(".stage","")===e))?n:"https://www.adobe.com",(n.includes("localhost")||n.includes(".".concat(o.SLD,".")))&&(a="https://main--federal--adobecom.aem.".concat(n.endsWith(".live")?"live":"page")),a},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e||!e.includes("/federal/"))return e;if(e.startsWith("/"))return"".concat(l()).concat(e);try{const{pathname:t,search:n,hash:a}=new URL(e);return"".concat(l()).concat(t).concat(n).concat(a)}catch(n){var t;null===(t=window.lana)||void 0===t||t.log("getFederatedUrl errored parsing the URL: ".concat(e,": ").concat(n.toString()))}return e}},1021:(e,t,n)=>{n.r(t),n.d(t,{addMepHighlightAndTargetId:()=>h,closeAllDropdowns:()=>_,darkIcons:()=>f,decorateCta:()=>E,federatePictureSources:()=>b,fetchAndProcessPlainHtml:()=>V,getActiveLink:()=>H,getAnalyticsValue:()=>L,getDisableAEDState:()=>F,getExperienceName:()=>k,getFedsPlaceholderConfig:()=>A,getUserProfile:()=>z,hasActiveLink:()=>q,icons:()=>u,isActiveLink:()=>B,isDarkMode:()=>C,isDesktop:()=>N,isTangentToViewport:()=>D,lanaLog:()=>g,loadBaseStyles:()=>T,loadDecorateMenu:()=>S,loadStyles:()=>M,logErrorFor:()=>v,rootPath:()=>x,selectors:()=>d,setActiveDropdown:()=>I,setActiveLink:()=>R,setCurtainState:()=>P,setDisableAEDState:()=>Z,setUserProfile:()=>j,toFragment:()=>m,trigger:()=>U,yieldToMain:()=>O});var a,o=n(7528),l=n(5886),c=n(2313),r=n(731),i=n(4941);(0,i.loadLana)();var s="federal",d={globalNav:".global-navigation",curtain:".feds-curtain",navLink:".feds-navLink",overflowingTopNav:".feds-topnav--overflowing",navItem:".feds-navItem",activeNavItem:".feds-navItem--active",deferredActiveNavItem:".feds-navItem--activeDeferred",activeDropdown:".feds-dropdown--active",menuSection:".feds-menu-section",menuColumn:".feds-menu-column",gnavPromo:".gnav-promo",columnBreak:".column-break",brandImageOnly:".brand-image-only"},u={brand:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.5 118.1"><defs><style>.cls-1 {fill: #eb1000;}</style></defs><g><g><polygon class="cls-1" points="84.1 0 133.5 0 133.5 118.1 84.1 0"/><polygon class="cls-1" points="49.4 0 0 0 0 118.1 49.4 0"/><polygon class="cls-1" points="66.7 43.5 98.2 118.1 77.6 118.1 68.2 94.4 45.2 94.4 66.7 43.5"/></g></g></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'},f={...u,brand:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #fff;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13h0ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81h0ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72h0ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16h0ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78c0,0,3.79,0,3.79,0Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.5 118.1"><defs><style>.cls-1 {fill: currentColor;}</style></defs><g><g><polygon class="cls-1" points="84.1 0 133.5 0 133.5 118.1 84.1 0"/><polygon class="cls-1" points="49.4 0 0 0 0 118.1 49.4 0"/><polygon class="cls-1" points="66.7 43.5 98.2 118.1 77.6 118.1 68.2 94.4 45.2 94.4 66.7 43.5"/></g></g></svg>'},g=e=>{let{message:t,e:n="",tags:a="errorType=default"}=e;const o=(0,i.getMetadata)("gnav-source");window.lana.log("".concat(t," | gnav-source: ").concat(o," | href: ").concat(window.location.href," | ").concat(n.reason||n.error||n.message||n),{clientId:"feds-milo",sampleRate:1,tags:a})},v=async(e,t,n)=>{try{await e()}catch(a){g({message:t,e:a,tags:n})}};function h(e,t){var n,a,o,l;let{manifestId:c,targetManifestId:r}=t.dataset;return null!==(n=c)&&void 0!==n||(c=null===t||void 0===t||null===(a=t.closest("[data-manifest-id]"))||void 0===a||null===(a=a.dataset)||void 0===a?void 0:a.manifestId),null!==(o=r)&&void 0!==o||(r=null===t||void 0===t||null===(l=t.closest("[data-adobe-target-testid]"))||void 0===l||null===(l=l.dataset)||void 0===l?void 0:l.adobeTargetTestid),c&&(e.dataset.manifestId=c),r&&(e.dataset.adobeTargetTestid=r),e}function m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];const o=e.reduce(((e,t,a)=>n[a]instanceof HTMLElement?"".concat(e+t,'<elem ref="').concat(a,'"></elem>'):e+t+(n[a]||"")),""),l=document.createRange().createContextualFragment(o).children[0];return Array.prototype.map.call(l.querySelectorAll("elem"),(e=>{const t=e.getAttribute("ref");e.replaceWith(n[t])})),l}var p,w,y,b=function(){let{section:e,forceFederate:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=t?"[src], [srcset]":'[src*="/'.concat(s,'/"], [srcset*="/').concat(s,'/"]');null===e||void 0===e||e.querySelectorAll(n).forEach((e=>{const n=e.hasAttribute("src")?"src":"srcset",a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{return new URL(e).pathname}catch(t){return e.replace(/^\.\//,"/")}}(e.getAttribute(n)),[,o,l]=a.split("/");if(t||[o,l].includes(s)){const t=a.includes("/federal/")?"":"/federal";e.setAttribute(n,"".concat((0,r.getFederatedContentRoot)()).concat(t).concat(a))}}))},A=function(){let{useCache:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&p)return p;const{locale:t,placeholders:n}=(0,i.getConfig)(),a=(0,r.getFederatedContentRoot)();return p={locale:{...t,contentRoot:"".concat(a).concat(t.prefix,"/federal/globalnav")},placeholders:n}};function L(e,t){if("string"!==typeof e||!e.length)return e;let n=(0,c.processTrackingLabels)(e,(0,i.getConfig)(),30);return n="number"===typeof t?"".concat(n,"-").concat(t):n,n}function k(){var e;const t=(0,i.getMetadata)("gnav-source"),n=null===t||void 0===t||null===(e=t.split("#")[0])||void 0===e?void 0:e.split("/").pop();if(null!==n&&void 0!==n&&n.length&&"gnav"!==n)return n;const{imsClientId:a}=(0,i.getConfig)();return null!==a&&void 0!==a&&a.length?a:""}function x(e){const{miloLibs:t,codeRoot:n}=(0,i.getConfig)();return"".concat(t||n,"/blocks/global-navigation/").concat(e)}function M(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{standaloneGnav:n}=(0,i.getConfig)();n&&!t||(0,i.loadStyle)(e,(t=>{"error"===t&&g({message:"GNAV: Error in loadStyles",e:"error loading style: ".concat(e),tags:"errorType=info,module=utilities"})}))}function C(){const{theme:e}=(0,i.getConfig)();return"dark"===e}async function T(){const{standaloneGnav:e}=(0,i.getConfig)();if(!e)if(C())new Promise((e=>{(0,i.loadStyle)(x("base.css"),e)})).then((()=>M(x("dark-nav.css"))));else{const e=x("base.css");await M(e)}}async function S(){if(w)return w;let e;w=new Promise((t=>{e=t}));const[t]=await Promise.all([n.e(329).then(n.bind(n,2710)),M(x("utilities/menu/menu.css"))]);return e(t.default),w}function E(){let{elem:e,type:t="primaryCta",index:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const l="secondaryCta"===t?"secondary":"primary",c=e.cloneNode(!0);return c.className="feds-cta feds-cta--".concat(l),c.setAttribute("daa-ll",L(c.textContent,n)),m(a||(a=(0,o.A)(['\n    <div class="feds-cta-wrapper">\n      ',"\n    </div>"])),c)}function P(e){"boolean"===typeof e&&(y=y||document.querySelector(d.curtain))&&y.classList.toggle("feds-curtain--open",e)}var N=window.matchMedia("(min-width: 900px)"),D=window.matchMedia("(min-width: 900px) and (max-width: 1440px)");function I(e){const t=d.activeDropdown.replace(".","");if([...document.querySelectorAll(d.activeDropdown)].forEach((e=>e.classList.remove(t))),!(e instanceof HTMLElement))return;[d.menuSection,d.menuColumn,d.navItem].some((n=>{const a=e.closest(n);return!(!a||!a.querySelector('[aria-expanded = "true"]'))&&(a.classList.add(t),!0)}))}var[Z,F]=(()=>{let e=!1;return[()=>{e=!0},()=>e]})(),[q,R,B,H]=(()=>{let e;const{origin:t,pathname:n}=window.location,a="".concat(t).concat(n);return[()=>e,t=>{e=!!t},e=>e.href===a||e.href.startsWith("".concat(a,"?"))||e.href.startsWith("".concat(a,"#")),e=>{var t;const n=null===(t=e.closest(".link-group"))||void 0===t?void 0:t.classList.contains("mobile-only");if(F()||n||q()||!(e instanceof HTMLElement))return null;const a=[...e.querySelectorAll("a:not([data-modal-hash])")].find(B);return a?(R(!0),a):null}]})();function _(){let{type:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t="headline"===e?'.feds-menu-headline[aria-expanded="true"]':"".concat(d.globalNav," [aria-expanded='true']"),n=document.querySelectorAll(t);n&&([...n].forEach((e=>{"fedsPreventautoclose"in e.dataset||e.setAttribute("aria-expanded","false")})),I(),N.matches&&P(!1))}function U(){let{element:e,event:t,type:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t&&t.preventDefault();const a="true"===(null===e||void 0===e?void 0:e.getAttribute("aria-expanded"));return _({type:n}),!a&&(e.setAttribute("aria-expanded","true"),!0)}var O=()=>new Promise((e=>{setTimeout(e,0)}));async function V(){var e,t;let{url:a,shouldDecorateLinks:o=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=(0,r.getFederatedUrl)(a);const s=null===(e=(0,i.getConfig)())||void 0===e||null===(e=e.mep)||void 0===e||null===(e=e.inBlock)||void 0===e?void 0:e["global-navigation"],d=null===s||void 0===s||null===(t=s.fragments)||void 0===t?void 0:t[c];d&&"replace"===d.action&&(c=d.content);const u=await fetch(c.replace(/(\.html$|$)/,".plain.html"));if(200!==u.status)return g({message:"Error in fetchAndProcessPlainHtml",e:"".concat(u.statusText," url: ").concat(u.url),tags:"errorType=info,module=utilities"}),null;const f=await u.text(),{body:v}=(new DOMParser).parseFromString(f,"text/html");null!==d&&void 0!==d&&d.manifestId&&(v.dataset.manifestId=d.manifestId),null!==d&&void 0!==d&&d.targetManifestId&&(v.dataset.adobeTargetTestid=d.targetManifestId);const h=null===s||void 0===s?void 0:s.commands;if(null!==h&&void 0!==h&&h.length){const{handleCommands:e}=await Promise.all([n.e(2226),n.e(2324)]).then(n.bind(n,9943));e(h,v,!0,!0)}const m=[...v.querySelectorAll('a[href*="#_inline"]')];if(m.length){const{default:e}=await n.e(6385).then(n.bind(n,6385)),t=m.map((t=>(t.href=(0,r.getFederatedUrl)((0,i.localizeLink)(t.href)),e(t))));await Promise.all(t)}o&&((0,i.decorateLinks)(v),b({section:v,forceFederate:c.includes("/federal/")}));const p=v.querySelectorAll(".martech-metadata");return p.length&&n.e(1076).then(n.bind(n,8695)).then((e=>{let{default:t}=e;return p.forEach((e=>t(e)))})).catch((e=>{g({message:"Error in fetchAndProcessPlainHtml",e:e,tags:"errorType=info,module=utilities"})})),v.innerHTML=await(0,l.replaceText)(v.innerHTML,A()),v}var[j,z]=(()=>{let e,t,n;const a=new Promise((a=>{t=a,n=setTimeout((()=>{e={},a(e)}),5e3)}));return[a=>{a&&!e&&(e=a,clearTimeout(n),t(e))},()=>a]})()}}]);
//# sourceMappingURL=1021.8bdb3d35.chunk.js.map