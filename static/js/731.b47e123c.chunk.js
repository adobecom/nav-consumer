"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[731,3112],{731:(t,e,o)=>{o.r(e),o.d(e,{getFederatedContentRoot:()=>c,getFederatedUrl:()=>r});var n,a=o(4941),c=()=>{const{allowedOrigins:t=[],origin:e}=(0,a.getConfig)();if(n)return n;const o=e||window.location.origin;return n=[...t,"https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com"].some((t=>o.replace(".stage","")===t))?o:"https://www.adobe.com",(o.includes("localhost")||o.includes(".".concat(a.SLD,".")))&&(n="https://main--federal--adobecom.aem.".concat(o.endsWith(".live")?"live":"page")),n},r=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof t||!t.includes("/federal/"))return t;if(t.startsWith("/"))return"".concat(c()).concat(t);try{const{pathname:e,search:o,hash:n}=new URL(t);return"".concat(c()).concat(e).concat(o).concat(n)}catch(o){var e;null===(e=window.lana)||void 0===e||e.log("getFederatedUrl errored parsing the URL: ".concat(t,": ").concat(o.toString()))}return t}}}]);
//# sourceMappingURL=731.b47e123c.chunk.js.map