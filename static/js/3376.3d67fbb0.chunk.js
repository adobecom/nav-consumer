"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[3376,995],{995:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var a,n,l,o,i,s,c,u=r(7528),d=r(8235),m=(r(233),r(6272)),p=(r(7868),r(8317),r(6238)),g=r(5769),b="breadcrumbs-seo",f="breadcrumb-seo",v="breadcrumbs-show-current-page",h="breadcrumbs-hidden-entries",y="breadcrumbs-page-title",A="breadcrumbs-base",w="breadcrumbs-from-url",F=e=>{if("off"===((0,p.getMetadata)(b)||(0,p.getMetadata)(f))||!e)return;const t={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[]};e.querySelectorAll("ul > li").forEach(((e,r)=>{const a=e.querySelector("a");t.itemListElement.push({"@type":"ListItem",position:r+1,name:a?a.innerText.trim():e.innerText.trim(),item:null===a||void 0===a?void 0:a.href})}));const r=(0,d.toFragment)(c||(c=(0,g.__template)(['<script type="application/ld+json">',"<\/script>"])),JSON.stringify(t));document.head.append(r)},L=e=>{var t,r;if(!e)return null;const l=e.querySelector("ul"),o=(0,p.getMetadata)(y);(o||"on"===(0,p.getMetadata)(v))&&l.append((0,d.toFragment)(a||(a=(0,u.A)(["\n      <li>\n        ","\n      </li>\n    "])),o||document.title));const i=(null===(t=(0,p.getMetadata)(h))||void 0===t?void 0:t.toLowerCase().split(",").map((e=>e.trim())))||[];l.querySelectorAll("li").forEach((e=>{var t;i.includes(null===(t=e.innerText)||void 0===t?void 0:t.toLowerCase().trim())&&e.remove()}));const s=e.classList.contains("no-transform")?" no-transform":"",c=(0,d.toFragment)(n||(n=(0,u.A)(['\n    <div class="feds-breadcrumbs-wrapper">\n      <nav class="feds-breadcrumbs','" aria-label="Breadcrumb">',"</nav>\n    </div>\n  "])),s,l);return null===(r=l.querySelector("li:last-of-type"))||void 0===r||r.setAttribute("aria-current","page"),c},S=async e=>{const t=e||(0,d.toFragment)(l||(l=(0,u.A)(["<div><ul></ul></div>"]))),r=(0,m.getFederatedUrl)((0,p.getMetadata)(A));if(!r)return null;try{var a;const e=await fetch("".concat(r,".plain.html")),n=await e.text(),l=(new DOMParser).parseFromString(n,"text/html").body;return null===(a=t.querySelector("ul"))||void 0===a||a.prepend(...l.querySelectorAll("li")),L(t)}catch(n){return(0,d.lanaLog)({e:n,message:"Breadcrumbs failed fetching base",tags:"errorType=info,module=gnav-breadcrumbs"}),null}},M=()=>{var e;if("on"!==(0,p.getMetadata)(w))return null;const t=(0,d.toFragment)(o||(o=(0,u.A)(["<ul></ul>"]))),r=document.location.pathname.replace((null===(e=(0,p.getConfig)().locale)||void 0===e?void 0:e.prefix)||"","").split("/").filter((e=>e));for(let a=0;a<r.length;a+=1)t.append((0,d.toFragment)(i||(i=(0,u.A)(['\n      <li>\n        <a href="/','">',"</a>\n      </li>\n    "])),r.slice(0,a+1).join("/"),r[a].replaceAll("-"," ")));return L((0,d.toFragment)(s||(s=(0,u.A)(["<div>","</div>"])),t))};async function q(e){try{const t=await S(e)||L(e)||M();return F(t),t}catch(t){return(0,d.lanaLog)({e:t,message:"Breadcrumbs failed rendering",tags:"errorType=error,module=gnav-breadcrumbs"}),null}}}}]);
//# sourceMappingURL=3376.3d67fbb0.chunk.js.map