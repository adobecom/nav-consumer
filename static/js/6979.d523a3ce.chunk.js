(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[6979],{1625:t=>{function e(t){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=1625,t.exports=e},6979:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>x,getCookie:()=>p});var n,a,i,c,l,r,s=o(2861),d=(o(6850),"oldgeorouting"),u=t=>{const e=a("ol");t.forEach((t=>{const o=a("li",null,t);e.appendChild(o)}));const o=a("div",null,e),n=a("div",null,o),i=a("div",{class:"tabs quiet"},n);return a("div",{class:"section tabs-background-transparent"},i)},g=(t,e)=>{const o=a("div",null,"tab"),n=a("div",null,e),i=a("div");i.appendChild(o),i.appendChild(n);const c=a("div",{class:"section-metadata"},i),l=a("div",{class:"section"});return l.append(t),l.append(c),l},p=t=>{var e;return null===(e=document.cookie.split("; ").find((e=>e.startsWith("".concat(t,"=")))))||void 0===e?void 0:e.split("=")[1]},h=()=>new Promise(((t,e)=>{const o=new URLSearchParams(window.location.search).get("akamaiLocale")||sessionStorage.getItem("akamai");null!==o?t(o.toLowerCase()):fetch("https://geo2.adobe.com/json/",{cache:"no-cache"}).then((o=>{o.ok?o.json().then((e=>{const o=e.country.toLowerCase();sessionStorage.setItem("akamai",o),t(o)})):e(new Error("Something went wrong getting the akamai Code. Response status text: ".concat(o.statusText)))})).catch((t=>{e(new Error("Something went wrong getting the akamai Code. ".concat(t.message)))}))}));function f(t,e,o){const n=o||"us",a=e||"us",i="".concat(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Switch",":").concat(a.split("_")[0],"-").concat(n.split("_")[0],"|Geo_Routing_Modal");t.setAttribute("daa-ll",i),t.addEventListener("click",(()=>{const e="adobe.com"===window.location.host||window.location.host.endsWith(".adobe.com")?"domain=adobe.com":"";document.cookie="international=".concat(a,";path=/;").concat(e),t.closest(".dialog-modal").dispatchEvent(new Event("closeModal"))}))}function m(t){return t.akamaiCodes.split(",").map((t=>t.toLowerCase().trim()))}function v(t,e,o,i,c,l){if(document.querySelector(".locale-modal-v2 .picker"))return;const r=a("ul",{class:"picker",dir:c});e.forEach((t=>{var e,i;const c=null!==(e=null===(i=n.locales[t.prefix])||void 0===i?void 0:i.ietf)&&void 0!==e?e:"",s=a("a",{lang:c,href:t.url},"".concat(o," - ").concat(t.language));f(s,t.prefix,l.prefix);const d=a("li",{},s);r.appendChild(d)})),t.parentNode.insertBefore(r,t.nextSibling);const s=t.getBoundingClientRect();window.innerHeight-s.bottom<=r.offsetHeight&&r.classList.add("top"),t.setAttribute("aria-expanded",!0),function(t,e,o){const n=a=>{if(e===a)return;let i=a.target;for(;i;){if(i===t)return;i=i.parentNode}t.remove(),o.setAttribute("aria-expanded",!1),document.removeEventListener("click",n)};document.addEventListener("click",n)}(r,i,t)}function w(t,e,o,i){var c,l,r,s,d;const u=new DocumentFragment,g=null!==(c=null===(l=n.locales[e.prefix])||void 0===l?void 0:l.ietf)&&void 0!==c?c:"",p=null!==(r=null===(s=n.locales[e.prefix])||void 0===s?void 0:s.dir)&&void 0!==r?r:"ltr",h=o.filter((t=>t.prefix===e.prefix)),m=h.length?h[0][t.geo]:"",w=a("h3",{lang:g,dir:p},e.title.replace("{{geo}}",m)),b=a("p",{class:"locale-text",lang:g,dir:p},e.text),k="on"===(null===(d=e.globeGrid)||void 0===d?void 0:d.toLowerCase().trim())?"globe-grid.png":"flag-".concat(e.geo.replace("_","-"),".svg"),x=a("img",{class:"icon-milo",width:15,height:15,alt:e.button});x.addEventListener("error",(()=>x.src="".concat(n.miloLibs||n.codeRoot,"/features/georoutingv2/img/globe-grid.png")),{once:!0}),x.src="".concat(n.miloLibs||n.codeRoot,"/img/georouting/").concat(k);const C=a("span",{class:"icon margin-inline-end"},x),L=a("a",{class:"con-button blue button-l",lang:g,role:"button","aria-haspopup":!!i,"aria-expanded":!1,href:"#"},C);if(L.append(e.button),i){const o=a("img",{class:"icon-milo down-arrow",src:"".concat(n.miloLibs||n.codeRoot,"/ui/img/chevron.svg"),role:"presentation",width:15,height:15});C.appendChild(o),L.addEventListener("click",(o=>{o.preventDefault(),v(L,i,e.button,o,p,t)}))}else L.href=e.url,f(L,e.prefix,t.prefix);const E=a("a",{lang:g,href:t.url},t.button);f(E,t.prefix,e.prefix,"Stay");const R=a("div",{class:"link-wrapper"},L);return R.appendChild(E),u.append(w,b,R),u}async function b(t,e,o){const c=await async function(t){const e=i("fallbackrouting")||n.fallbackRouting,{prefix:o}=n.locale;let a=window.location.href.replace("".concat(window.location.origin),"");a.startsWith(o)&&(a=a.replace(o,""));const c=[],l=[];return t.forEach(((t,o)=>{const n=t.prefix?"/".concat(t.prefix):"",i="".concat(n).concat(a),r=fetch(i,{method:"HEAD"}).then((a=>{a.ok?(t.url=i,c[o]=t):"off"!==e&&(t.url="".concat(n),c[o]=t)}));l.push(r)})),l.length>0&&await Promise.all(l),c.filter((t=>!!t))}(e);if(!c.length)return null;const l=a("div",{class:"georouting-wrapper fragment"});if(t.url=window.location.hash?document.location.href:"#",1===c.length){const e=w(t,c[0],o);return l.appendChild(e),l}const r=c.sort(((t,e)=>t.languageOrder-e.languageOrder)),s=u(r.map((t=>t.language)));return l.appendChild(s),r.forEach((e=>{const n=w(t,e,o,r),a=g(n,e.language);l.appendChild(a)})),l}async function k(t){const{miloLibs:e,codeRoot:a}=n,i=t.querySelector(".tabs"),s="".concat(e||a,"/blocks/section-metadata/section-metadata.css"),d="".concat(e||a,"/features/georoutingv2/georoutingv2.css"),u=[i?c(i):null,i?new Promise((t=>{l(s,t)})):null,new Promise((t=>{l(d,t)})),o.e(9139).then(o.bind(o,1520))],g=await Promise.all(u),{getModal:p,sendAnalytics:h}=g[3];return r=h,p(null,{class:"locale-modal-v2",id:"locale-modal-v2",content:t,closeEvent:"closeModal"})}async function x(t,e,u,g,f){var v,w,x;let C=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if(function(){const t=new URLSearchParams(window.location.search).get("georouting"),e=t||p("georouting");if("off"===t){const t=window.location.host.endsWith(".adobe.com")?"domain=adobe.com":"",o=new Date;o.setTime(o.getTime()+31536e6);const n="expires=".concat(o.toUTCString());document.cookie="georouting=".concat(e,";").concat(n,";path=/;").concat(t)}else"on"===t&&(document.cookie="georouting=; expires= Thu, 01 Jan 1970 00:00:00 GMT");return"off"===e}())return;n=t,a=e,i=u,c=g,l=f;const L=(null!==C&&void 0!==C?C:o(1625)("".concat(null!==(v=t.contentRoot)&&void 0!==v?v:"","/georoutingv2.json"))).then((t=>t.json())).catch((()=>null)),E=async t=>{const{default:e}=await o.e(9010).then(o.bind(o,9010));return await e(n,a,i,t),d},R=null!==(w=null!==(x=await L)&&void 0!==x?x:await(()=>{var t;return fetch("".concat(null!==(t=n.contentRoot)&&void 0!==t?t:"","/georouting.json")).then((t=>t.json())).then(E).catch((()=>null))})())&&void 0!==w?w:await fetch("".concat((0,s.getFederatedContentRoot)(),"/federal/georouting/georoutingv2.json")).then((t=>t.json())).catch((()=>null));if(R===d)return;const{locale:_}=n,y=_.prefix.replace("/",""),S=p("international"),j="us"===S?"":S,M=R.georouting.data.find((t=>t.prefix===y));if(M)if(j||""===j){const t=y.split("_")[0],e=j.split("_")[0];if(t!==e){const o=R.georouting.data.filter((t=>t.prefix===j)),n=await b(M,o,R.geos.data);n&&(await k(n),r(new Event("Load:".concat(e||"us","-").concat(t||"us","|Geo_Routing_Modal"))))}}else{try{let t=await h();if(t&&!m(M).includes(t)){const e=(T=R.georouting.data,D=t,T.reduce(((t,e)=>(m(e).some((t=>t===D))&&t.push(e),t)),[])),o=await b(M,e,R.geos.data);o&&(await k(o),"gb"===t&&(t="uk"),r(new Event("Load:".concat(y||"us","-").concat(t||"us","|Geo_Routing_Modal"))))}}catch(A){var P;null===(P=window.lana)||void 0===P||P.log(A.message)}var T,D}}}}]);
//# sourceMappingURL=6979.d523a3ce.chunk.js.map