"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[334,7953],{334:(e,t,a)=>{a.r(t),a.d(t,{API_URLS:()=>o,default:()=>v,getMepPopup:()=>p,parsePageAndUrl:()=>l,saveToMmm:()=>u});var n=a(233),c=(a(6272),a(6238)),i=(a(5769),"https://jvdtssh5lkvwwi4y3kbletjmvu0qctxj.lambda-url.us-west-2.on.aws"),o={pageList:"".concat(i,"/get-pages"),pageDetails:"".concat(i,"/get-page?id="),save:"".concat(i,"/save-mep-call")};function s(e,t){const a=e.querySelectorAll('input[type="radio"]:checked, input[type="text"]'),n=[];a.forEach((e=>{let{value:t}=e;if(e.classList.contains("new-manifest")){if(""!==e.value){try{const e=new URL(t);e&&(t=e.pathname)}catch(a){}n.push(t)}}else t="".concat(e.dataset.manifest,"--").concat(t),n.push(t)}));const c=t.length?e.closest("[data-url]").dataset.url:window.location.href,i=new URL(c);i.searchParams.set("mep",n.join("---"));const o=e.querySelector('input[type="checkbox"]#mepHighlightCheckbox'.concat(t));document.body.dataset.mepHighlight=o.checked,o.checked?i.searchParams.set("mepHighlight",!0):i.searchParams.delete("mepHighlight");e.querySelector('input[type="checkbox"]#mepPreviewButtonCheckbox'.concat(t)).checked?i.searchParams.set("mepButton","off"):i.searchParams.delete("mepButton"),e.querySelector("a.con-button").setAttribute("href",i.href)}function l(e,t,a){const{stageDomainsMap:n,env:c}=e,{pathname:i,origin:o}=t,s=["business.stage.adobe.com","www.stage.adobe.com","milo.stage.adobe.com"];if("prod"===(null===c||void 0===c?void 0:c.name)||!n||s.includes(o.replace("https://",""))){const e=o.replace("stage.adobe.com","adobe.com");return{page:i.replace("/".concat(a,"/"),"/"),url:"".concat(e).concat(i)}}let l=i,r=o;const d=Object.keys(n).find((e=>{try{const{host:t}=new URL("https://".concat(e));return s.includes(t)}catch(t){return!1}}));return d&&(r="https://".concat(d)),l=l.replace("/homepage/index-loggedout","/"),l.endsWith("/")||l.endsWith(".html")||r.includes("milo")||(l+=".html"),r=r.replace("stage.adobe.com","adobe.com"),{page:l.replace("/".concat(a,"/"),"/"),url:"".concat(r).concat(l)}}function r(){const e=(0,c.getConfig)(),{mep:t,locale:a}=e,{experiments:i,targetEnabled:o,prefix:s,highlight:r}=t,d=i.map((e=>{const{name:t,event:a,manifest:n,variantNames:c,selectedVariantName:i,disabled:o,analyticsTitle:s,source:l}=e;let r=n;try{r=new URL(n).pathname}catch(d){}return{targetActivityName:t,variantNames:c,selectedVariantName:i,url:n,disabled:o,source:l,eventStart:null===a||void 0===a?void 0:a.start,eventEnd:null===a||void 0===a?void 0:a.end,pathname:r,analyticsTitle:s}})),{page:p,url:m}=l(e,window.location,s);return{page:{url:m,page:p,target:o?"on":"off",personalization:(0,c.getMetadata)("personalization")?"on":"off",geo:s===n.US_GEO?"":s,locale:a.ietf,region:a.region,highlight:r},activities:d}}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";if(!e)return"";let a=e;if("string"===typeof a&&(a=new Date(a)),"iso"===t)return a.toISOString();const n=a.toLocaleDateString(!1,{year:"numeric",month:"short",day:"numeric"}),c=a.toLocaleTimeString(!1,{timeStyle:"short"});return"".concat(n," ").concat(c)}function p(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{activities:i,page:o}=e,l=null!==o&&void 0!==o&&o.pageId?"-".concat(o.pageId):"",{manifestList:r}=function(e){const{activities:t,page:a}=e,{pageId:c=1}=a;let i="";const o=[];return null===t||void 0===t||t.forEach(((e,t)=>{const{variantNames:a,manifestPath:s=e.url,selectedVariantName:l=e.selectedVariantName||"default",manifestUrl:r,targetActivityName:p,source:m,analyticsTitle:u,eventStart:v,eventEnd:h,disabled:f}=e,g=r||s,b=(0,n.normalizePath)(g);let y="";("string"===typeof a?a.split("||"):a).forEach((e=>{const t={attribute:"",class:""};e===l&&(t.attribute='checked="checked"',t.class='class="mep-manifest-selected-variant"',o.push("".concat(s,"--").concat(e))),y+='<div>\n        <input type="radio" name="'.concat(b).concat(c,'" value="').concat(e,'" \n        id="').concat(b).concat(c,"--").concat(e,'" data-manifest="').concat(b,'" ').concat(t.attribute,'>\n        <label for="').concat(b).concat(c,"--").concat(e,'" ').concat(t.class,">").concat(e,"</label>\n      </div>")}));const w={attribute:"",class:""};a.includes(l)||(w.attribute='checked="checked"',w.class='class="mep-manifest-selected-variant"',o.push("".concat(g,"--default"))),y+='<div>\n      <input type="radio" name="'.concat(b).concat(c,'" value="default" \n      id="').concat(b).concat(c,'--default" data-manifest="').concat(b,'" ').concat(w.attribute,'>\n      <label for="').concat(b).concat(c,'--default" ').concat(w.class,">Default (control)</label>\n    </div>");const k=v&&h?'<p class="promo-schedule-info">Scheduled - '.concat(f?"inactive":"active","</p>\n         <p>On: ").concat(d(v),' - <a target= "_blank" href="?instant=').concat(d(v,"iso"),'">instant</a></p>\n         <p>Off: ').concat(d(h),"</p>"):"";i+='<div class="mep-manifest-info" title="Manifest location: '.concat(g,"&#013;Analytics manifest name: ").concat(u||"N/A for this manifest type",'">\n      <div class="mep-manifest-title">\n        ').concat(t+1,". ").concat((0,n.getFileName)(s),'\n        <a class="mep-edit-manifest" href="').concat(g,'" target="_blank" title="Open manifest">\n          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="16px" height="16px" fill-rule="nonzero"><g transform=""><g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M22.82813,3c-0.51175,0 -1.02356,0.19544 -1.41406,0.58594l-2.41406,2.41406l5,5l2.41406,-2.41406c0.781,-0.781 0.781,-2.04713 0,-2.82812l-2.17187,-2.17187c-0.3905,-0.3905 -0.90231,-0.58594 -1.41406,-0.58594zM17,8l-11.74023,11.74023c0,0 0.91777,-0.08223 1.25977,0.25977c0.342,0.342 0.06047,2.58 0.48047,3c0.42,0.42 2.64389,0.12436 2.96289,0.44336c0.319,0.319 0.29688,1.29688 0.29688,1.29688l11.74023,-11.74023zM4,23l-0.94336,2.67188c-0.03709,0.10544 -0.05623,0.21635 -0.05664,0.32813c0,0.55228 0.44772,1 1,1c0.11177,-0.00041 0.22268,-0.01956 0.32813,-0.05664c0.00326,-0.00128 0.00652,-0.00259 0.00977,-0.00391l0.02539,-0.00781c0.00196,-0.0013 0.00391,-0.0026 0.00586,-0.00391l2.63086,-0.92773l-1.5,-1.5z"></path></g></g></g></svg>\n        </a>\n        <div class="target-activity-name">').concat(p||"","</div>\n        <div>Source: ").concat(m,"</div>\n        ").concat(e.lastSeen?"<div>Last seen: ".concat(d(new Date(e.lastSeen)),"</div>"):"","\n        ").concat(k,'\n      </div>\n      <div class="mep-manifest-variants">').concat(y,"</div>\n    </div>")})),{manifestList:i,manifestParameter:o}}(e);let p="";null!==o&&void 0!==o&&o.highlight&&(p='checked="checked"',document.body.dataset.mepHighlight=!0);const m="preview-button",u=a?o.url:new URL(window.location.href).href,v=(0,c.createTag)("div",{class:"mep-popup".concat(a?"":" in-page"),"data-url":u}),h=(0,c.createTag)("div",{class:"mep-popup-header"}),f=(0,c.createTag)("div",{class:"mep-manifest-info"}),g=(0,c.createTag)("div",{class:"mep-advanced-container"}),b=(0,c.createTag)("div",{class:"mep-manifest-list"});f.innerHTML='\n    <div class="mep-manifest-variants">\n      <input type="checkbox" name="mepHighlight'.concat(l,'"\n        id="mepHighlightCheckbox').concat(l,'" ').concat(p,' value="true">\n        <label for="mepHighlightCheckbox').concat(l,'">Highlight changes</label>\n    </div>'),g.innerHTML='\n    <div class="mep-toggle-advanced">Advanced options</div>\n      <div class="mep-manifest-info mep-advanced-options">\n        <div>Optional: new manifest location or path</div>\n            <div class="mep-manifest-variants">\n              <div>\n                <input type="text" name="new-manifest'.concat(l,'" class="new-manifest">\n              </div>\n            </div>\n          </div>\n          <div class="mep-manifest-info">\n            <div class="mep-manifest-variants mep-advanced-options">\n              <input type="checkbox" name="mepPreviewButtonCheckbox').concat(l,'"\n                id="mepPreviewButtonCheckbox').concat(l,'" value="off">\n                <label for="mepPreviewButtonCheckbox').concat(l,'">add mepButton=off to preview link</label>\n            </div>\n          </div>\n        </div>');const y=(0,c.createTag)("div",{class:"advanced-options".concat(a?"":" dark")});y.innerHTML='\n    <a class="con-button outline button-l" data-id="'.concat(m,'" title="Preview above choices" ').concat(a?' target="_blank"':"",">Preview</a>");const w="postlcp"===o.target?"on post LCP":o.target;h.innerHTML="\n    <div>\n      <h4>".concat((null===i||void 0===i?void 0:i.length)||0,' Manifest(s) found</h4>\n        <span class="mep-close"></span>\n        <div class="mep-manifest-page-info-title">Page Info:</div>\n        <div>Target integration feature is ').concat(w,"</div>\n        <div>Personalization feature is ").concat(o.personalization,"</div>\n        <div>Page's Geo Folder is ").concat(o.geo||"nothing (US)","</div>\n        <div>Page's Locale is ").concat(null===(t=o.locale)||void 0===t?void 0:t.toLowerCase(),"</div>\n        ").concat(o.lastSeen?"<div>Last seen: ".concat(d(new Date(o.lastSeen)),"</div>"):"","\n    </div>"),b.innerHTML=r,f&&b.prepend(f),g&&b.append(g),v.append(h),v.append(b),v.append(y);return v.querySelector('a[data-id="'.concat(m,'"]'))&&s(v,l),function(e,t){e.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach((a=>{a.addEventListener("change",s.bind(null,e,t))})),e.querySelectorAll('input[type="text"]').forEach((a=>{a.addEventListener("keyup",s.bind(null,e,t)),a.addEventListener("change",s.bind(null,e,t))})),e.querySelector(".mep-toggle-advanced").addEventListener("click",(e=>{var t;null===(t=e.target.closest(".mep-popup"))||void 0===t||null===(t=t.querySelector(".mep-advanced-container"))||void 0===t||t.classList.toggle("mep-advanced-open")}))}(v,l),v}function m(){const e=r(),{activities:t}=e,a=(0,c.createTag)("div",{class:"mep-preview-overlay static-links",style:"display: none;"}),n=document.createElement("div");n.classList.add("mep-hidden");const i=(0,c.createTag)("div",{class:"mep-manifest mep-badge"});var o;i.innerHTML='\n   <span class="mep-open"></span>\n      <div class="mep-manifest-count">'.concat((null===t||void 0===t?void 0:t.length)||0," Manifest(s) found</div>"),n.append(i),n.append(p(e)),a.append(n),document.body.append(a),(o=n).querySelector(".mep-manifest.mep-badge").addEventListener("click",(()=>{o.classList.toggle("mep-hidden")})),o.querySelector(".mep-close").addEventListener("click",(()=>{document.body.removeChild(document.querySelector(".mep-preview-overlay"))}))}async function u(){const e=r();return!["/drafts/",".stage.",".page/",".live/","/fragments/","/nala/"].some((t=>e.page.url.includes(t)))&&(e.activities=e.activities.filter((e=>{var t;const{url:a,source:n}=e;return e.source=n.filter((e=>"mep param"!==e)),!(null===(t=e.source)||void 0===t||!t.length||a.includes("/drafts/"))})),e.activities=e.activities.map((e=>{var t,a;return e.variantNames=(null===(t=e.variantNames)||void 0===t?void 0:t.join("||"))||"",e.source=(null===(a=e.source)||void 0===a?void 0:a.join(","))||"",delete e.selectedVariantName,e})),e.page.prefix===n.US_GEO&&(e.page.prefix=""),e.page.target=(0,c.getMetadata)("target")||"off",delete e.page.highlight,fetch(o.save,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((async e=>{const t=await e.json();if(e.ok)return t;throw new Error(t.message||"Network response failed")})))}async function v(){const{miloLibs:e,codeRoot:t,mep:a}=(0,c.getConfig)();(0,c.loadStyle)("".concat(e||t,"/features/personalization/preview.css")),m(),null!==a&&void 0!==a&&a.experiments&&a.experiments.forEach((e=>{var t,a,c;let{selectedVariant:i,manifest:o}=e;const s=(0,n.getFileName)(o),l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"manifestId";document.querySelectorAll(e).forEach((e=>e.dataset[t]=s))};null===i||void 0===i||null===(t=i.replacefragment)||void 0===t||t.forEach((e=>{let{val:t}=e;return l('[data-path*="'.concat(t,'"]'))})),null===i||void 0===i||null===(a=i.useblockcode)||void 0===a||a.forEach((e=>{let{selector:t}=e;t&&l(".".concat(t),"codeManifestId")})),null===i||void 0===i||null===(c=i.updatemetadata)||void 0===c||c.forEach((e=>{let{selector:t}=e;"gnav-source"===t&&l("header, footer")})),document.querySelectorAll('.section[class*="merch-cards"] .fragment[data-manifest-id="'.concat(s,'"] merch-card')).forEach((e=>e.dataset.manifestId=s))}))}}}]);
//# sourceMappingURL=334.9033a661.chunk.js.map