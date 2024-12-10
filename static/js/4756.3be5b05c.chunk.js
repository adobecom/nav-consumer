"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[4756,7405,9786],{7405:(t,e,o)=>{o.r(e),o.d(e,{getFederatedContentRoot:()=>i,getFederatedUrl:()=>r,getFedsPlaceholderConfig:()=>l});var n,a,c=o(4114),i=()=>{const{allowedOrigins:t=[],origin:e}=(0,c.getConfig)();if(n)return n;const o=e||window.location.origin;return n=[...t,"https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com"].some((t=>o.replace(".stage","")===t))?o:"https://www.adobe.com",(o.includes("localhost")||o.includes(".".concat(c.SLD,".")))&&(n="https://main--federal--adobecom.aem.".concat(o.endsWith(".live")?"live":"page")),n},r=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof t||!t.includes("/federal/"))return t;if(t.startsWith("/"))return"".concat(i()).concat(t);try{const{pathname:e,search:o,hash:n}=new URL(t);return"".concat(i()).concat(e).concat(o).concat(n)}catch(o){var e;null===(e=window.lana)||void 0===e||e.log("getFederatedUrl errored parsing the URL: ".concat(t,": ").concat(o.toString()))}return t},l=function(){let{useCache:t=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t&&a)return a;const{locale:e,placeholders:o}=(0,c.getConfig)(),n=i();return a={locale:{...e,contentRoot:"".concat(n).concat(e.prefix,"/federal/globalnav")},placeholders:o}}},4756:(t,e,o)=>{o.r(e),o.d(e,{default:()=>k,getCookie:()=>g});var n,a,c,i,r,l,s=o(7405),d=(o(4114),o(5769),t=>{const e=a("ol");t.forEach((t=>{const o=a("li",null,t);e.appendChild(o)}));const o=a("div",null,e),n=a("div",null,o),c=a("div",{class:"tabs quiet"},n);return a("div",{class:"section tabs-background-transparent"},c)}),u=(t,e)=>{const o=a("div",null,"tab"),n=a("div",null,e),c=a("div");c.appendChild(o),c.appendChild(n);const i=a("div",{class:"section-metadata"},c),r=a("div",{class:"section"});return r.append(t),r.append(i),r},g=t=>{var e;return null===(e=document.cookie.split("; ").find((e=>e.startsWith("".concat(t,"=")))))||void 0===e?void 0:e.split("=")[1]},p=()=>new Promise(((t,e)=>{const o=new URLSearchParams(window.location.search).get("akamaiLocale")||sessionStorage.getItem("akamai");null!==o?t(o.toLowerCase()):fetch("https://geo2.adobe.com/json/",{cache:"no-cache"}).then((o=>{o.ok?o.json().then((e=>{const o=e.country.toLowerCase();sessionStorage.setItem("akamai",o),t(o)})):e(new Error("Something went wrong getting the akamai Code. Response status text: ".concat(o.statusText)))})).catch((t=>{e(new Error("Something went wrong getting the akamai Code. ".concat(t.message)))}))}));function f(t,e,o){const n=o||"us",a=e||"us",c="".concat(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Switch",":").concat(a.split("_")[0],"-").concat(n.split("_")[0],"|Geo_Routing_Modal");t.setAttribute("daa-ll",c),t.addEventListener("click",(()=>{const e="adobe.com"===window.location.host||window.location.host.endsWith(".adobe.com")?"domain=adobe.com":"";document.cookie="international=".concat(a,";path=/;").concat(e),t.closest(".dialog-modal").dispatchEvent(new Event("closeModal"))}))}function h(t){return t.akamaiCodes.split(",").map((t=>t.toLowerCase().trim()))}function m(t,e,o,c,i,r){if(document.querySelector(".locale-modal-v2 .picker"))return;const l=a("ul",{class:"picker",dir:i});e.forEach((t=>{var e,c;const i=null!==(e=null===(c=n.locales[t.prefix])||void 0===c?void 0:c.ietf)&&void 0!==e?e:"",s=a("a",{lang:i,href:t.url},"".concat(o," - ").concat(t.language));f(s,t.prefix,r.prefix);const d=a("li",{},s);l.appendChild(d)})),t.parentNode.insertBefore(l,t.nextSibling);const s=t.getBoundingClientRect();window.innerHeight-s.bottom<=l.offsetHeight&&l.classList.add("top"),t.setAttribute("aria-expanded",!0),function(t,e,o){const n=a=>{if(e===a)return;let c=a.target;for(;c;){if(c===t)return;c=c.parentNode}t.remove(),o.setAttribute("aria-expanded",!1),document.removeEventListener("click",n)};document.addEventListener("click",n)}(l,c,t)}function w(t,e,o,c){var i,r,l,s,d;const u=new DocumentFragment,g=null!==(i=null===(r=n.locales[e.prefix])||void 0===r?void 0:r.ietf)&&void 0!==i?i:"",p=null!==(l=null===(s=n.locales[e.prefix])||void 0===s?void 0:s.dir)&&void 0!==l?l:"ltr",h=o.filter((t=>t.prefix===e.prefix)),w=h.length?h[0][t.geo]:"",v=a("h3",{lang:g,dir:p},e.title.replace("{{geo}}",w)),b=a("p",{class:"locale-text",lang:g,dir:p},e.text),k="on"===(null===(d=e.globeGrid)||void 0===d?void 0:d.toLowerCase().trim())?"globe-grid.png":"flag-".concat(e.geo.replace("_","-"),".svg"),x=a("img",{class:"icon-milo",width:15,height:15,alt:e.button});x.addEventListener("error",(()=>x.src="".concat(n.miloLibs||n.codeRoot,"/features/georoutingv2/img/globe-grid.png")),{once:!0}),x.src="".concat(n.miloLibs||n.codeRoot,"/img/georouting/").concat(k);const C=a("span",{class:"icon node-index-first"},x),L=a("a",{class:"con-button blue button-l",lang:g,role:"button","aria-haspopup":!!c,"aria-expanded":!1,href:"#"},C);if(L.append(e.button),c){const o=a("img",{class:"icon-milo down-arrow",src:"".concat(n.miloLibs||n.codeRoot,"/ui/img/chevron.svg"),role:"presentation",width:15,height:15});C.appendChild(o),L.addEventListener("click",(o=>{o.preventDefault(),m(L,c,e.button,o,p,t)}))}else L.href=e.url,f(L,e.prefix,t.prefix);const R=a("a",{lang:g,href:t.url},t.button);f(R,t.prefix,e.prefix,"Stay");const E=a("div",{class:"link-wrapper"},L);return E.appendChild(R),u.append(v,b,E),u}async function v(t,e,o){const i=await async function(t){const e=c("fallbackrouting")||n.fallbackRouting,{prefix:o}=n.locale;let a=window.location.href.replace("".concat(window.location.origin),"");a.startsWith(o)&&(a=a.replace(o,""));const i=[],r=[];return t.forEach(((t,o)=>{const n=t.prefix?"/".concat(t.prefix):"",c="".concat(n).concat(a),l=fetch(c,{method:"HEAD"}).then((a=>{a.ok?(t.url=c,i[o]=t):"off"!==e&&(t.url="".concat(n),i[o]=t)}));r.push(l)})),r.length>0&&await Promise.all(r),i.filter((t=>!!t))}(e);if(!i.length)return null;const r=a("div",{class:"georouting-wrapper fragment"});if(t.url=window.location.hash?document.location.href:"#",1===i.length){const e=w(t,i[0],o);return r.appendChild(e),r}const l=i.sort(((t,e)=>t.languageOrder-e.languageOrder)),s=d(l.map((t=>t.language)));return r.appendChild(s),l.forEach((e=>{const n=w(t,e,o,l),a=u(n,e.language);r.appendChild(a)})),r}async function b(t){const{miloLibs:e,codeRoot:a}=n,c=t.querySelector(".tabs"),s="".concat(e||a,"/blocks/section-metadata/section-metadata.css"),d="".concat(e||a,"/features/georoutingv2/georoutingv2.css"),u=[c?i(c):null,c?new Promise((t=>{r(s,t)})):null,new Promise((t=>{r(d,t)})),o.e(4984).then(o.bind(o,4984))],g=await Promise.all(u),{getModal:p,sendAnalytics:f}=g[3];return l=f,p(null,{class:"locale-modal-v2",id:"locale-modal-v2",content:t,closeEvent:"closeModal"})}async function k(t,e,d,u,f){var m,w;if(function(){const t=new URLSearchParams(window.location.search).get("georouting"),e=t||g("georouting");if("off"===t){const t=window.location.host.endsWith(".adobe.com")?"domain=adobe.com":"",o=new Date;o.setTime(o.getTime()+31536e6);const n="expires=".concat(o.toUTCString());document.cookie="georouting=".concat(e,";").concat(n,";path=/;").concat(t)}else"on"===t&&(document.cookie="georouting=; expires= Thu, 01 Jan 1970 00:00:00 GMT");return"off"===e}())return;a=e,c=d,i=u,r=f;const k=["".concat(null!==(m=(n=t).contentRoot)&&void 0!==m?m:"","/georoutingv2.json"),"".concat(null!==(w=n.contentRoot)&&void 0!==w?w:"","/georouting.json"),"".concat((0,s.getFederatedContentRoot)(),"/federal/georouting/georoutingv2.json")];let x;for(const i of k)if(x=await fetch(i),x.ok){if(i.includes("georouting.json")){const t=await x.json(),{default:e}=await o.e(797).then(o.bind(o,797));e(n,a,c,t)}break}const C=await x.json(),{locale:L}=n,R=L.prefix.replace("/",""),E=g("international"),S="us"===E?"":E,_=C.georouting.data.find((t=>t.prefix===R));if(_)if(S||""===S){const t=R.split("_")[0],e=S.split("_")[0];if(t!==e){const o=C.georouting.data.filter((t=>t.prefix===S)),n=await v(_,o,C.geos.data);n&&(await b(n),l(new Event("Load:".concat(e||"us","-").concat(t||"us","|Geo_Routing_Modal"))))}}else{try{let t=await p();if(t&&!h(_).includes(t)){const e=(j=C.georouting.data,P=t,j.reduce(((t,e)=>(h(e).some((t=>t===P))&&t.push(e),t)),[])),o=await v(_,e,C.geos.data);o&&(await b(o),"gb"===t&&(t="uk"),l(new Event("Load:".concat(R||"us","-").concat(t||"us","|Geo_Routing_Modal"))))}}catch(M){var y;null===(y=window.lana)||void 0===y||y.log(M.message)}var j,P}}}}]);
//# sourceMappingURL=4756.3be5b05c.chunk.js.map