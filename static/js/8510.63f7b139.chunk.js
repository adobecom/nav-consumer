"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[8510],{8510:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});n(5769);var r=!1,a=null,i=async t=>{if(!t)return null;if(!r){const e=await fetch(t);if(e.ok){const t=await e.json();a=t.data}r=!0}return a};async function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;const n=await i(t);if(!n)return;const{origin:r}=window.location;[...e.querySelectorAll('a:not([href^="/"])')].forEach((t=>{n.filter((e=>t.href.startsWith(e.domain)||"off-origin"===e.domain&&!t.href.startsWith(r))).forEach((e=>{e.rel&&t.setAttribute("rel",e.rel),e.window&&!t.getAttribute("target")&&t.setAttribute("target",e.window)}))}))}}}]);
//# sourceMappingURL=8510.63f7b139.chunk.js.map