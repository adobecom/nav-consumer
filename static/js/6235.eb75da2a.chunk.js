"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[6235],{6235:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var c=n(4114);n(5769);function o(){let{prefix:e,link:t,callback:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"function"===typeof n&&fetch(t.href,{method:"HEAD"}).then((e=>{if(!e.ok)throw new Error("request failed");n(t.href)})).catch((()=>{const t=e?"/".concat(e):"";n("".concat(t,"/"))}))}function a(e,t){let n,c=e.getAttribute("href");if(c.startsWith("http"))try{c=new URL(c).pathname}catch(r){}const a=c.split("/")[1]||"us";let{href:i}=e;i.endsWith("/")&&(i=i.slice(0,-1)),e.href="".concat(i).concat(t),e.addEventListener("mouseover",(()=>{setTimeout((()=>{e.matches(":hover")&&!n&&o({prefix:a,link:e,callback:t=>{e.href=t,n=!0}})}),100)})),e.addEventListener("click",(t=>{!function(e){const t=window.location.host.endsWith(".adobe.com")?"domain=adobe.com":"";document.cookie="international=".concat(e,";max-age=").concat(31536e3,";path=/;").concat(t),sessionStorage.setItem("international",e)}(a),n||(t.preventDefault(),o({prefix:a,link:e,callback:e=>{window.open(e,t.ctrlKey||t.metaKey?"_blank":"_self")}}))}))}function i(e){const t=(0,c.getConfig)(),n=e.querySelectorAll(":scope > div");if(n.length<2)return;const o=n[1].querySelectorAll("a");if(!o.length)return;const{prefix:i}=t.locale,r=window.location.href.replace("".concat(window.location.origin).concat(i),"").replace("#langnav","");o.forEach((e=>a(e,r)))}}}]);
//# sourceMappingURL=6235.eb75da2a.chunk.js.map