"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[8666,6285],{6285:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var a,n,l,i,o,s,c,u=r(7528),d=r(5566),m=(r(3016),r(2301)),p=(r(2773),r(8199),r(2899)),g=r(5769),b="breadcrumbs-seo",f="breadcrumb-seo",v="breadcrumbs-show-current-page",h="breadcrumbs-hidden-entries",y="breadcrumbs-page-title",A="breadcrumbs-base",w="breadcrumbs-from-url",L=e=>{if("off"===((0,p.getMetadata)(b)||(0,p.getMetadata)(f))||!e)return;const t={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[]};e.querySelectorAll("ul > li").forEach(((e,r)=>{const a=e.querySelector("a"),n=a?a.innerText.trim():[...e.childNodes].filter((e=>{var t;return!(null!==(t=e.matches)&&void 0!==t&&t.call(e,'span[aria-hidden="true"]'))})).map((e=>e.textContent.trim())).join("");t.itemListElement.push({"@type":"ListItem",position:r+1,name:n,item:null===a||void 0===a?void 0:a.href})}));const r=(0,d.toFragment)(c||(c=(0,g.__template)(['<script type="application/ld+json">',"<\/script>"])),JSON.stringify(t));document.head.append(r)},F=e=>{var t,r;if(!e)return null;const l=e.querySelector("ul"),i=(0,p.getMetadata)(y);(i||"on"===(0,p.getMetadata)(v))&&l.append((0,d.toFragment)(a||(a=(0,u.A)(["\n      <li>\n        ","\n      </li>\n    "])),i||document.title));const o=(null===(t=(0,p.getMetadata)(h))||void 0===t?void 0:t.toLowerCase().split(",").map((e=>e.trim())))||[];l.querySelectorAll("li").forEach(((e,t)=>{var r;o.includes(null===(r=e.innerText)||void 0===r?void 0:r.toLowerCase().trim())&&e.remove(),t>0&&e.insertAdjacentHTML("afterbegin",'<span aria-hidden="true">/</span>')}));const s=e.classList.contains("no-transform")?" no-transform":"",c=(0,d.toFragment)(n||(n=(0,u.A)(['\n    <div class="feds-breadcrumbs-wrapper">\n      <nav class="feds-breadcrumbs','" aria-label="Breadcrumb">',"</nav>\n    </div>\n  "])),s,l);return null===(r=l.querySelector("li:last-of-type"))||void 0===r||r.setAttribute("aria-current","page"),c},M=async e=>{const t=e||(0,d.toFragment)(l||(l=(0,u.A)(["<div><ul></ul></div>"]))),r=(0,m.getFederatedUrl)((0,p.getMetadata)(A));if(!r)return null;try{var a;const e=await fetch("".concat(r,".plain.html")),n=await e.text(),l=(new DOMParser).parseFromString(n,"text/html").body;return null===(a=t.querySelector("ul"))||void 0===a||a.prepend(...l.querySelectorAll("li")),F(t)}catch(n){return(0,d.lanaLog)({e:n,message:"Breadcrumbs failed fetching base",tags:"errorType=info,module=gnav-breadcrumbs"}),null}},S=()=>{var e;if("on"!==(0,p.getMetadata)(w))return null;const t=(0,d.toFragment)(i||(i=(0,u.A)(["<ul></ul>"]))),r=document.location.pathname.replace((null===(e=(0,p.getConfig)().locale)||void 0===e?void 0:e.prefix)||"","").split("/").filter((e=>e));for(let a=0;a<r.length;a+=1)t.append((0,d.toFragment)(o||(o=(0,u.A)(['\n      <li>\n        <a href="/','">',"</a>\n      </li>\n    "])),r.slice(0,a+1).join("/"),r[a].replaceAll("-"," ")));return F((0,d.toFragment)(s||(s=(0,u.A)(["<div>","</div>"])),t))};async function q(e){try{const t=await M(e)||F(e)||S();return L(t),t}catch(t){return(0,d.lanaLog)({e:t,message:"Breadcrumbs failed rendering",tags:"errorType=error,module=gnav-breadcrumbs"}),null}}}}]);
//# sourceMappingURL=8666.0d724369.chunk.js.map