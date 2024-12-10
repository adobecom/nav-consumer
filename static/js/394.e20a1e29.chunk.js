"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[394],{8013:(t,e,i)=>{i.r(e),i.d(e,{AppPrompt:()=>w,DISMISSAL_CONFIG:()=>v,default:()=>A});var s,o,n,a,r,l,c=i(4705),d=i(7528),p=i(8453),m=i(3203),h=(i(3524),i(7405)),u=i(4114),v=(i(5769),{animationCount:2,animationDuration:2500,tooltipMessage:"Use the App Switcher to quickly find apps.",tooltipDuration:5e3}),g={selectors:{prompt:".appPrompt"},delay:7e3,loaderColor:"#EB1000",...v},f=t=>{var e;return null===t||void 0===t||null===(e=t.textContent)||void 0===e?void 0:e.trim()},P=()=>!!document.querySelector(".dialog-modal"),y=t=>{P()?setTimeout((()=>y(t)),200):t()},w=(o=class t{constructor(){var e=this;let{promptPath:i,entName:o,parent:v,getAnchorState:w}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,c.A)(this,"init",(async()=>{if(this.isDismissedPrompt()||!this.parent)return;if(!(new URLSearchParams(window.location.search).get("skipPepEntitlements")||await this.doesEntitlementMatch()))return;const t=await this.fetchContent();t&&(await this.getData(t),this.options["redirect-url"]&&this.options["product-name"]&&(({id:this.anchorId,isOpen:this.isAnchorExpanded}=await this.getAnchorState().catch((t=>((0,p.lanaLog)({message:"Error on getting anchor state",e:t,tags:"errorType=error,module=pep"}),{})))),this.isAnchorExpanded||(this.anchorId&&(this.anchor=document.querySelector("#".concat(this.anchorId))),this.offset=this.anchor?this.parent.offsetWidth-(this.anchor.offsetWidth+this.anchor.offsetLeft):0,this.template=this.decorate(),this.addEventListeners(),this.parent.prepend(this.template),this.elements.closeIcon.focus(),this.redirectFn=this.initRedirect())))})),(0,c.A)(this,"doesEntitlementMatch",(async()=>{const t=(0,u.getConfig)(),e=await t.entitlements(),i=new URLSearchParams(window.location.search).get("mockPepEnts");return null===i||void 0===i||i.split(",").forEach((t=>e.push(t.trim()))),(null===e||void 0===e?void 0:e.length)&&e.includes(this.entName)})),(0,c.A)(this,"fetchContent",(async()=>{const t=await fetch("".concat(this.promptPath,".plain.html"));if(!t.ok)return(0,p.lanaLog)({message:"Error fetching content for prompt: ".concat(this.promptPath,".plain.html"),e:"Status ".concat(t.status," when trying to fetch content for prompt"),tags:"errorType=error,module=pep"}),"";const e=await t.text(),i=await(0,m.replaceText)(e,(0,h.getFedsPlaceholderConfig)());return(new DOMParser).parseFromString(i,"text/html")})),(0,c.A)(this,"getData",(async t=>{var e,i,s,o;this.icon=(t=>{const e=t.querySelector("picture");if(e)return e;const i=t.querySelector('a[href$=".svg"]');return i?(0,u.decorateSVG)(i):p.icons.company})(t);const n={title:"h2",subtitle:"h3",cancel:"em > a"};await Promise.all(Object.keys(n).map((async e=>{const i=t.querySelector(n[e]);if(null!==i&&void 0!==i&&i.innerText)this[e]=i.innerText;else{const t=await(0,m.replaceKey)("pep-prompt-".concat(e),(0,h.getFedsPlaceholderConfig)());this[e]=t==="pep prompt ".concat(e)?"":t}}))),await(0,p.getUserProfile)().then((t=>{["display_name","email","avatar"].every((e=>!!t[e]))&&(this.profile=t)})).catch((t=>{(0,p.lanaLog)({message:"Error fetching user profile",e:t,tags:"errorType=error,module=pep"})}));const a=[...t.querySelector(".section-metadata").childNodes].reduce(((t,e)=>{var i;if(2===(null===(i=e.children)||void 0===i?void 0:i.length)){const i=f(e.children[0]),s=f(e.children[1]);i&&s&&(t[i]=s)}return t}),{});a["loader-duration"]=parseInt(a["loader-duration"]||g.delay,10),a["loader-color"]=a["loader-color"]||g.loaderColor,a["dismissal-animation-count"]=parseInt(null!==(e=a["dismissal-animation-count"])&&void 0!==e?e:g.animationCount,10),a["dismissal-animation-duration"]=parseInt(null!==(i=a["dismissal-animation-duration"])&&void 0!==i?i:g.animationDuration,10),null!==(s=a["dismissal-tooltip-message"])&&void 0!==s||(a["dismissal-tooltip-message"]=g.tooltipMessage),a["dismissal-tooltip-duration"]=parseInt(null!==(o=a["dismissal-tooltip-duration"])&&void 0!==o?o:g.tooltipDuration,10),this.options=a})),(0,c.A)(this,"decorate",(()=>{var t;return this.elements.closeIcon=(0,p.toFragment)(n||(n=(0,d.A)(['<button daa-ll="Close Modal" aria-label="','" class="appPrompt-close"></button>'])),this.cancel),this.elements.cta=(0,p.toFragment)(a||(a=(0,d.A)(['<button daa-ll="Stay on this page" class="appPrompt-cta appPrompt-cta--close">',"</button>"])),this.cancel),this.elements.profile=this.profile?(0,p.toFragment)(r||(r=(0,d.A)(['<div class="appPrompt-profile">\n        <div class="appPrompt-avatar">\n          <img class="appPrompt-avatar-image" src="','" />\n        </div>\n        <div class="appPrompt-user">\n          <div class="appPrompt-name">','</div>\n          <div class="appPrompt-email">',"</div>\n        </div>\n      </div>"])),this.profile.avatar,this.profile.display_name,this.profile.email):"",(0,p.toFragment)(l||(l=(0,d.A)(['<div\n      daa-state="true" daa-im="true" daa-lh="PEP Modal_','"\n      class="appPrompt" style="margin: 0 ','px">\n      ','\n      <div class="appPrompt-icon">\n        ','\n      </div>\n      <div class="appPrompt-title">',"</div>\n      ",'\n      <div class="appPrompt-footer">\n        <div class="appPrompt-text">',"</div>\n        ",'\n      </div>\n      <div class="appPrompt-progressWrapper">\n        <div class="appPrompt-progress" style="background-color: ',"; animation-duration: ",'ms;"></div>\n      </div>\n    </div>'])),null===(t=this.options["product-name"])||void 0===t?void 0:t.toLowerCase(),this.offset,this.elements.closeIcon,this.icon,this.title,this.elements.profile,this.subtitle,this.elements.cta,this.options["loader-color"],this.options["loader-duration"])})),(0,c.A)(this,"addEventListeners",(()=>{var t;null===(t=this.anchor)||void 0===t||t.addEventListener("click",(()=>this.close({dismissalActions:!1}))),document.addEventListener("keydown",this.handleKeyDown),[this.elements.closeIcon,this.elements.cta].forEach((t=>t.addEventListener("click",this.close)))})),(0,c.A)(this,"handleKeyDown",(t=>{"Escape"===t.key&&this.close()})),(0,c.A)(this,"initRedirect",(()=>setTimeout((()=>{this.close({saveDismissal:!1,dismissalActions:!1}),t.redirectTo(this.options["redirect-url"])}),this.options["loader-duration"]))),(0,c.A)(this,"isDismissedPrompt",(()=>t.getDismissedPrompts().includes(this.id))),(0,c.A)(this,"setDismissedPrompt",(()=>{const e=new Set(t.getDismissedPrompts());e.add(this.id),document.cookie="dismissedAppPrompts=".concat(JSON.stringify([...e]),";path=/")})),(0,c.A)(this,"close",(function(){var t,i;let{saveDismissal:o=!0,dismissalActions:n=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=document.querySelector(g.selectors.prompt);null===a||void 0===a||a.remove(),clearTimeout(e.redirectFn),o&&e.setDismissedPrompt(),document.removeEventListener("keydown",e.handleKeyDown),null===(t=e.anchor)||void 0===t||t.focus(),null===(i=e.anchor)||void 0===i||i.removeEventListener("click",e.close),n&&(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.animationCount,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.animationDuration;t.classList.add("coach-indicator"),t.style.setProperty("--animation-duration","".concat(i,"ms"));const o=[];for(let r=0;r<3;r+=1){const i=(0,p.toFragment)(s||(s=(0,d.A)(['\n    <div\n      class="coach-indicator-ring"\n      style="animation-iteration-count: ',';">\n    </div>'])),e);t.insertAdjacentElement("afterbegin",i),o.push(i)}const n=()=>{o.forEach((t=>t.remove())),t.classList.remove("coach-indicator")},a=setTimeout(n,(e+1)*i);t.addEventListener("click",(()=>{n(),clearTimeout(a)}),{once:!0})}(e.anchor,e.options["dismissal-animation-count"],e.options["dismissal-animation-duration"]),function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.tooltipMessage,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.tooltipDuration;t.setAttribute("data-pep-dismissal-tooltip",e);const s=()=>t.removeAttribute("data-pep-dismissal-tooltip"),o=setTimeout(s,i);t.addEventListener("click",(()=>{s(),clearTimeout(o)}),{once:!0})}(e.anchor,e.options["dismissal-tooltip-message"],e.options["dismissal-tooltip-duration"]))})),this.promptPath=i,this.entName=o,this.parent=v,this.getAnchorState=w,this.id=this.promptPath.split("/").pop(),this.elements={},P())return window.addEventListener("milo:modal:closed",(()=>y(this.init)),{once:!0}),void(this.initializationQueued=!0);this.initializationQueued=!1}static redirectTo(t){window.location.assign(t)}},(0,c.A)(o,"getDismissedPrompts",(()=>{var t;const e=null===(t=document.cookie.split(";").find((t=>t.trim().startsWith("dismissedAppPrompts="))))||void 0===t?void 0:t.split("=")[1];return e?JSON.parse(e):[]})),o);async function A(t){try{const e=new w(t);return e.initializationQueued||await e.init(),e}catch(e){return(0,p.lanaLog)({message:"Could not initialize PEP",e:e,tags:"errorType=error,module=pep"}),null}}}}]);
//# sourceMappingURL=394.e20a1e29.chunk.js.map