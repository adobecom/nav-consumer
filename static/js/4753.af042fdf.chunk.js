"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[4753],{4753:(e,n,r)=>{r.r(n),r.d(n,{sampleRUM:()=>o});r(5769);function o(e,n){const r=()=>window.performance?window.performance.now():Date.now()-window.hlx.rum.firstReadTime;try{if(window.hlx=window.hlx||{},o.enhance=()=>{},!window.hlx.rum){const e=new URLSearchParams(window.location.search).get("rum"),n=("high"===window.SAMPLE_PAGEVIEWS_AT_RATE?10:"low"===window.SAMPLE_PAGEVIEWS_AT_RATE&&1e3)||"on"===e&&1||100,t=Math.random().toString(36).slice(-4),i="off"!==e&&Math.random()*n<1;if(window.hlx.rum={weight:n,id:t,isSelected:i,firstReadTime:window.performance?window.performance.timeOrigin:Date.now(),sampleRUM:o,queue:[],collector:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return window.hlx.rum.queue.push(n)}},i){const e=e=>{const n={source:"undefined error"};try{n.target=e.toString(),n.source=e.stack.split("\n").filter((e=>e.match(/https?:\/\//))).shift().replace(/at ([^ ]+) \((.+)\)/,"$1@$2").replace(/ at /,"@").trim()}catch(r){}return n};window.addEventListener("error",(n=>{let{error:r}=n;o("error",e(r))})),window.addEventListener("unhandledrejection",(n=>{let{reason:r}=n,t={source:"Unhandled Rejection",target:r||"Unknown"};r instanceof Error&&(t=e(r)),o("error",t)})),o.baseURL=o.baseURL||new URL(window.RUM_BASE||"/",new URL("https://rum.hlx.page")),o.collectBaseURL=o.collectBaseURL||o.baseURL,o.sendPing=function(e,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const c=JSON.stringify({weight:n,id:t,referer:window.location.href,checkpoint:e,t:r,...i}),a=window.RUM_PARAMS?"?".concat(new URLSearchParams(window.RUM_PARAMS).toString()):"",{href:w,origin:d}=new URL(".rum/".concat(n).concat(a),o.collectBaseURL),s=d===window.location.origin?new Blob([c],{type:"application/json"}):c;navigator.sendBeacon(w,s),console.debug("ping:".concat(e),i)},o.sendPing("top",r()),o.enhance=()=>{if(document.querySelector('script[src*="rum-enhancer"]'))return;const e=document.createElement("script");e.src=new URL(".rum/@adobe/helix-rum-enhancer@^2/src/index.js",o.baseURL).href,document.head.appendChild(e)},window.hlx.RUM_MANUAL_ENHANCE||o.enhance()}}window.hlx.rum&&window.hlx.rum.isSelected&&e&&window.hlx.rum.collector(e,n,r()),document.dispatchEvent(new CustomEvent("rum",{detail:{checkpoint:e,data:n}}))}catch(t){}}}}]);
//# sourceMappingURL=4753.af042fdf.chunk.js.map