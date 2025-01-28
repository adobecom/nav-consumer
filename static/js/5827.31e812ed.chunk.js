"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[5827,8208],{4705:(t,e,i)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var s=i.call(t,e||"default");if("object"!=o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:e+""}function n(t,e,i){return(e=s(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{A:()=>n})},5827:(t,e,i)=>{i.r(e),i.d(e,{AppPrompt:()=>w,DISMISSAL_CONFIG:()=>v,default:()=>A});var o,s,n,a,r,l,c=i(4705),d=i(7528),p=i(8235),m=(i(233),i(6272)),h=i(7868),u=(i(8317),i(6238)),v=(i(5769),{animationCount:2,animationDuration:2500,tooltipMessage:"Use the App Switcher to quickly find apps.",tooltipDuration:5e3}),f={selectors:{prompt:".appPrompt"},delay:7e3,loaderColor:"#EB1000",pauseOnHover:"off",...v},g=t=>{var e;return null===t||void 0===t||null===(e=t.textContent)||void 0===e?void 0:e.trim()},y=()=>!!document.querySelector(".dialog-modal"),P=t=>{y()?setTimeout((()=>P(t)),200):t()},w=(s=class t{constructor(){var e=this;let{promptPath:i,entName:s,parent:v,getAnchorState:w}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,c.A)(this,"init",(async()=>{if(this.isDismissedPrompt()||!this.parent)return;if(!(new URLSearchParams(window.location.search).get("skipPepEntitlements")||await this.doesEntitlementMatch()))return;const t=await this.fetchContent();t&&(await this.getData(t),this.options["redirect-url"]&&this.options["product-name"]&&(({id:this.anchorId,isOpen:this.isAnchorExpanded}=await this.getAnchorState().catch((t=>((0,p.lanaLog)({message:"Error on getting anchor state",e:t,tags:"errorType=error,module=pep"}),{})))),this.isAnchorExpanded||(this.anchorId&&(this.anchor=document.querySelector("#".concat(this.anchorId))),this.offset=this.anchor?this.parent.offsetWidth-(this.anchor.offsetWidth+this.anchor.offsetLeft):0,this.template=this.decorate(),this.addEventListeners(),this.parent.prepend(this.template),this.elements.closeIcon.focus(),this.redirectFn=this.initRedirect("on"===this.options["pause-on-hover"]))))})),(0,c.A)(this,"doesEntitlementMatch",(async()=>{const t=(0,u.getConfig)(),e=await t.entitlements(),i=new URLSearchParams(window.location.search).get("mockPepEnts");return null===i||void 0===i||i.split(",").forEach((t=>e.push(t.trim()))),(null===e||void 0===e?void 0:e.length)&&e.includes(this.entName)})),(0,c.A)(this,"fetchContent",(async()=>{const t=await fetch("".concat(this.promptPath,".plain.html"));if(!t.ok)return(0,p.lanaLog)({message:"Error fetching content for prompt: ".concat(this.promptPath,".plain.html"),e:"Status ".concat(t.status," when trying to fetch content for prompt"),tags:"errorType=error,module=pep"}),"";const e=await t.text(),i=await(0,h.replaceText)(e,(0,m.getFedsPlaceholderConfig)());return(new DOMParser).parseFromString(i,"text/html")})),(0,c.A)(this,"getData",(async t=>{var e,i,o,s,n;this.icon=(t=>{const e=t.querySelector("picture");if(e)return e;const i=t.querySelector('a[href$=".svg"]');return i?(0,u.decorateSVG)(i):p.icons.company})(t);const a={title:"h2",subtitle:"h3",cancel:"em > a"};await Promise.all(Object.keys(a).map((async e=>{const i=t.querySelector(a[e]);if(null!==i&&void 0!==i&&i.innerText)this[e]=i.innerText;else{const t=await(0,h.replaceKey)("pep-prompt-".concat(e),(0,m.getFedsPlaceholderConfig)());this[e]=t==="pep prompt ".concat(e)?"":t}}))),await(0,p.getUserProfile)().then((t=>{["display_name","email","avatar"].every((e=>!!t[e]))&&(this.profile=t)})).catch((t=>{(0,p.lanaLog)({message:"Error fetching user profile",e:t,tags:"errorType=error,module=pep"})}));const r=[...t.querySelector(".section-metadata").childNodes].reduce(((t,e)=>{var i;if(2===(null===(i=e.children)||void 0===i?void 0:i.length)){const i=g(e.children[0]),o=g(e.children[1]);i&&o&&(t[i]=o)}return t}),{});r["loader-duration"]=parseInt(r["loader-duration"]||f.delay,10),r["loader-color"]=r["loader-color"]||f.loaderColor,r["dismissal-animation-count"]=parseInt(null!==(e=r["dismissal-animation-count"])&&void 0!==e?e:f.animationCount,10),r["dismissal-animation-duration"]=parseInt(null!==(i=r["dismissal-animation-duration"])&&void 0!==i?i:f.animationDuration,10),null!==(o=r["dismissal-tooltip-message"])&&void 0!==o||(r["dismissal-tooltip-message"]=f.tooltipMessage),r["dismissal-tooltip-duration"]=parseInt(null!==(s=r["dismissal-tooltip-duration"])&&void 0!==s?s:f.tooltipDuration,10),null!==(n=r["pause-on-hover"])&&void 0!==n||(r["pause-on-hover"]=f.pauseOnHover),this.options=r})),(0,c.A)(this,"decorate",(()=>{var t;const e="on"===this.options["pause-on-hover"];return this.elements.closeIcon=(0,p.toFragment)(n||(n=(0,d.A)(['<button daa-ll="Close Modal" aria-label="','" class="appPrompt-close"></button>'])),this.cancel),this.elements.cta=(0,p.toFragment)(a||(a=(0,d.A)(['<button daa-ll="Stay on this page" class="appPrompt-cta appPrompt-cta--close">',"</button>"])),this.cancel),this.elements.profile=this.profile?(0,p.toFragment)(r||(r=(0,d.A)(['<div class="appPrompt-profile">\n        <div class="appPrompt-avatar">\n          <img class="appPrompt-avatar-image" src="','" />\n        </div>\n        <div class="appPrompt-user">\n          <div class="appPrompt-name">','</div>\n          <div class="appPrompt-email">',"</div>\n        </div>\n      </div>"])),this.profile.avatar,this.profile.display_name,this.profile.email):"",(0,p.toFragment)(l||(l=(0,d.A)(['<div\n      daa-state="true" daa-im="true" daa-lh="PEP Modal_','"\n      class="appPrompt" style="margin: 0 ','px">\n      ','\n      <div class="appPrompt-icon">\n        ','\n      </div>\n      <div class="appPrompt-title">',"</div>\n      ",'\n      <div class="appPrompt-footer">\n        <div class="appPrompt-text">',"</div>\n        ",'\n      </div>\n      <div class="appPrompt-progressWrapper">\n        <div class="appPrompt-progress ','" style="background-color: ',"; animation-duration: ",'ms;"></div>\n      </div>\n    </div>'])),null===(t=this.options["product-name"])||void 0===t?void 0:t.toLowerCase(),this.offset,this.elements.closeIcon,this.icon,this.title,this.elements.profile,this.subtitle,this.elements.cta,e&&"appPrompt-progressPauseOnHover",this.options["loader-color"],this.options["loader-duration"])})),(0,c.A)(this,"addEventListeners",(()=>{var t;null===(t=this.anchor)||void 0===t||t.addEventListener("click",(()=>this.close({dismissalActions:!1}))),document.addEventListener("keydown",this.handleKeyDown),[this.elements.closeIcon,this.elements.cta].forEach((t=>t.addEventListener("click",this.close)))})),(0,c.A)(this,"handleKeyDown",(t=>{"Escape"===t.key&&this.close()})),(0,c.A)(this,"initRedirect",(function(){let i,o,s=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=e.options["loader-duration"];const a=()=>{o=performance.now(),i=setTimeout((()=>{e.close({saveDismissal:!1,dismissalActions:!1}),t.redirectTo(e.options["redirect-url"])}),n)},r=()=>{clearTimeout(i),n-=performance.now()-o};if(s){const t=document.querySelector(f.selectors.prompt);t&&(t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",a))}a()})),(0,c.A)(this,"isDismissedPrompt",(()=>t.getDismissedPrompts().includes(this.id))),(0,c.A)(this,"setDismissedPrompt",(()=>{const e=new Set(t.getDismissedPrompts());e.add(this.id),document.cookie="dismissedAppPrompts=".concat(JSON.stringify([...e]),";path=/")})),(0,c.A)(this,"close",(function(){var t,i;let{saveDismissal:s=!0,dismissalActions:n=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=document.querySelector(f.selectors.prompt);null===a||void 0===a||a.remove(),clearTimeout(e.redirectFn),s&&e.setDismissedPrompt(),document.removeEventListener("keydown",e.handleKeyDown),null===(t=e.anchor)||void 0===t||t.focus(),null===(i=e.anchor)||void 0===i||i.removeEventListener("click",e.close),n&&(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.animationCount,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.animationDuration;t.classList.add("coach-indicator"),t.style.setProperty("--animation-duration","".concat(i,"ms"));const s=[];for(let r=0;r<3;r+=1){const i=(0,p.toFragment)(o||(o=(0,d.A)(['\n    <div\n      class="coach-indicator-ring"\n      style="animation-iteration-count: ',';">\n    </div>'])),e);t.insertAdjacentElement("afterbegin",i),s.push(i)}const n=()=>{s.forEach((t=>t.remove())),t.classList.remove("coach-indicator")},a=setTimeout(n,(e+1)*i);t.addEventListener("click",(()=>{n(),clearTimeout(a)}),{once:!0})}(e.anchor,e.options["dismissal-animation-count"],e.options["dismissal-animation-duration"]),function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.tooltipMessage,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.tooltipDuration;t.setAttribute("data-pep-dismissal-tooltip",e);const o=()=>t.removeAttribute("data-pep-dismissal-tooltip"),s=setTimeout(o,i);t.addEventListener("click",(()=>{o(),clearTimeout(s)}),{once:!0})}(e.anchor,e.options["dismissal-tooltip-message"],e.options["dismissal-tooltip-duration"]))})),this.promptPath=i,this.entName=s,this.parent=v,this.getAnchorState=w,this.id=this.promptPath.split("/").pop(),this.elements={},y())return window.addEventListener("milo:modal:closed",(()=>P(this.init)),{once:!0}),void(this.initializationQueued=!0);this.initializationQueued=!1}static redirectTo(t){window.location.assign(t)}},(0,c.A)(s,"getDismissedPrompts",(()=>{var t;const e=null===(t=document.cookie.split(";").find((t=>t.trim().startsWith("dismissedAppPrompts="))))||void 0===t?void 0:t.split("=")[1];return e?JSON.parse(e):[]})),s);async function A(t){try{const e=new w(t);return e.initializationQueued||await e.init(),e}catch(e){return(0,p.lanaLog)({message:"Could not initialize PEP",e:e,tags:"errorType=error,module=pep"}),null}}}}]);
//# sourceMappingURL=5827.31e812ed.chunk.js.map