import{getFileName as B,US_GEO as U,normalizePath as A}from"./personalization-LRPWXI42-Dkp6eZ4o.js";import{g as q,i as R,p as u,b as T}from"./utils-EOEXLB4S-DacHn_aW.js";import"./helpers-6ZAOOXAH-BETqqH4u.js";var P="https://jvdtssh5lkvwwi4y3kbletjmvu0qctxj.lambda-url.us-west-2.on.aws",O={pageList:`${P}/get-pages`,pageDetails:`${P}/get-page`,pageDataByURL:`${P}/get-page?url=`,save:`${P}/save-mep-call`,report:`${P}/get-report`};function S(t,i){const e=t.querySelectorAll('option:checked, input[type="text"]'),a=[];e.forEach(r=>{const d=r.closest("select")?.disabled;if(!r.value||d)return;let{value:l}=r;if(r.classList.contains("new-manifest")&&l)try{l=new URL(l).pathname||l}catch{}else l=`${r.dataset.manifest}--${l}`;a.push(l)});const o=i.length?t.closest("[data-url]").dataset.url:window.location.href,n=new URL(o);n.searchParams.set("mep",a.join("---"));const p=t.querySelector(`input[type="checkbox"]#mepHighlightCheckbox${i}`);document.body.dataset.mepHighlight=p.checked,p.checked?n.searchParams.set("mepHighlight",!0):n.searchParams.delete("mepHighlight"),t.querySelector(`input[type="checkbox"]#mepPreviewButtonCheckbox${i}`).checked?n.searchParams.set("mepButton","off"):n.searchParams.delete("mepButton"),t.querySelector("a.con-button").setAttribute("href",n.href)}function I(t,i){t.querySelectorAll(i).forEach(e=>{const a=u("div",{class:"mep-divider"});e.insertAdjacentElement("afterend",a)})}function _(t){t.querySelector(".mep-manifest.mep-badge").addEventListener("click",()=>{t.classList.toggle("mep-hidden")}),t.querySelector(".mep-close").addEventListener("click",()=>{document.body.removeChild(document.querySelector(".mep-preview-overlay"))})}function z(t,i,e){const{stageDomainsMap:a,env:s}=t,{pathname:o,origin:n}=i,p=["business.stage.adobe.com","www.stage.adobe.com","milo.stage.adobe.com"];if(s?.name==="prod"||!a||p.includes(n.replace("https://",""))){const l=n.replace("stage.adobe.com","adobe.com");return{page:o.replace(`/${e}/`,"/"),url:`${l}${o}`}}let c=o,r=n;const d=Object.keys(a).find(l=>{try{const{host:m}=new URL(`https://${l}`);return p.includes(m)}catch{return!1}});return d&&(r=`https://${d}`),c=c.replace("/homepage/index-loggedout","/"),!c.endsWith("/")&&!c.endsWith(".html")&&!r.includes("milo")&&(c+=".html"),r=r.replace("stage.adobe.com","adobe.com"),{page:c.replace(`/${e}/`,"/"),url:`${r}${c}`}}function D(){const t=q(),{mep:i,locale:e}=t,{experiments:a,prefix:s,highlight:o}=i,n=a.map(r=>{const{name:d,event:l,manifest:m,variantNames:b,selectedVariantName:k,disabled:f,analyticsTitle:w,source:C,geoRestriction:y,mktgAction:x}=r;let h=m;try{h=new URL(m).pathname}catch{}return{targetActivityName:d,variantNames:b,selectedVariantName:k,url:m,disabled:f,source:C,eventStart:l?.start,eventEnd:l?.end,pathname:h,analyticsTitle:w,geoRestriction:y,mktgAction:x}}),{page:p,url:c}=z(t,window.location,s);return{page:{url:c,page:p,target:T("target")||"off",personalization:T("personalization")?"on":"off",geo:s===U?"":s,locale:e.ietf,region:e.region,highlight:o},activities:n}}function E(t,i="local"){if(!t)return"";let e=t;if(typeof e=="string"&&(e=new Date(e)),i==="iso")return e.toISOString();const a=e.toLocaleDateString(!1,{year:"numeric",month:"short",day:"numeric"}),s=e.toLocaleTimeString(!1,{timeStyle:"short"});return`${a} ${s}`}function j(t){const{activities:i,page:e}=t,{pageId:a=0}=e;let s="";const o=[];return i?.forEach((n,p)=>{const{variantNames:c,manifestPath:r=n.url,selectedVariantName:d=n.selectedVariantName||"default",manifestUrl:l,targetActivityName:m,source:b,analyticsTitle:k,eventStart:f,eventEnd:w,disabled:C,geoRestriction:y,mktgAction:x}=n,h=l||r,v=A(h),H=typeof c=="string"?c.split("||"):c;let L="",g="";!c.includes(d)&&a===0&&(g="selected",o.push(`${h}--default`)),L+=`<option name="${v}${a}" value="" title="none">None (Don't add manifest)</option>`,L+=`<option name="${v}${a}" value="default" 
    id="${v}${a}--default" data-manifest="${v}" ${g} title="Default (control)">Default (control)</option>`,g="",H.forEach($=>{g="",$===d&&(g="selected",o.push(`${r}--${$}`)),L+=`<option name="${v}${a}" value="${$}" 
      id="${v}${a}--${$}" data-manifest="${v}" ${g} title="${$}">${$}</option>`}),s+=`<div class="mep-section" title="Manifest location: ${h}&#013;Analytics manifest name: ${k||"N/A for this manifest type"}">
      <div class="mep-manifest-info">  
          <a class="mep-edit-manifest" href="${h}" target="_blank" title="Open manifest">
          ${p+1}. ${B(r)}
          </a>
          ${m?`<div class="target-activity-name">${m||""}</div>`:""}
          <div class="mep-columns">
            <div class="mep-column">
              <div class="mep-active">Experience</div>
              <div>Source</div>
              <div>Mktg action</div>
              ${y?"<div>Geos</div>":""}
              ${f&&w||C?"<div>Active?</div>":""}
              ${n.lastSeen?"<div>Last seen</div>":""}
            </div>
            <div class="mep-column">
              ${c.includes(d)?`<div class='mep-selected-variant mep-active'>${d}</div>`:'<div class="mep-active">default (control)</div>'}
              <div>${b}</div>
              <div>${x}</div>
              ${y?`<div>${y?.toUpperCase()}</div>`:""}
              ${f&&w||C?`<div>${C?"inactive":"active"}</div>`:""}
              ${n.lastSeen?`<div>${E(new Date(n.lastSeen))}</div>`:""}
            </div>
          </div>
          ${f&&w?`<div class="mep-columns">
            <div class="mep-column">
              <div>On</div>
              <div>Off</div>
            </div>
            <div class="mep-column">
              <div>${E(f)} <a target= "_blank" href="?instant=${E(f,"iso")}">Instant</a></div>
              <div>${E(w)}</div>
            </div>
          </div>
        </div>`:""}
        <div class="mep-experience-dropdown">
          <label for="experiences">Experience</label>
          <select name="experiences" class="mep-manifest-variants">${L}</select>
        </div>
      </div>
    </div>`}),{manifestList:s,manifestParameter:o}}function F(t){return t>1?"Manifests":"Manifest"}function N(t){return`
    <span class="mep-open"></span>
    <div class="mep-manifest-count">${t||0} ${F(t)} found</div>
  `}var M;async function G(t,i,e){const a=D(),s=document.querySelector(".mep-manifest-list.mmm-list");if(!M)try{const n=`${O.pageDataByURL}${a.page.url}&lastSeen=week`,p=await fetch(n);if(!p.ok)throw new Error("Network error");const c=await p.json();c&&(M=c,M.activities=M.activities.filter(r=>!a.activities.some(d=>A(d.url)===A(r.url))).map(r=>(r.source="MMM",r)),s.innerHTML=`<h6>MMM data for last 7 days</h6> ${j(c).manifestList}`,s.querySelectorAll("select").forEach(r=>{r.querySelector('option[title="none"]').selected=!0,r.addEventListener("change",S.bind(null,i,e))}),I(s,".mep-section"))}catch(n){console.error("Error fetching 7-day page data:",n)}const o=document.querySelector(".mep-manifest.mep-badge");t.target.checked&&M?(s.classList.add("mep-show"),s.querySelectorAll("select").forEach(n=>{n.disabled=!1}),o.innerHTML=N(M.activities.length+a.activities.length)):(s.classList.remove("mep-show"),s.querySelectorAll("select").forEach(n=>{n.disabled=!0}),o.innerHTML=N(a.activities?.length))}function V(t,i){t.querySelectorAll('select, input[type="checkbox"]').forEach(e=>{e.addEventListener("change",S.bind(null,t,i))}),t.querySelectorAll('input[type="text"]').forEach(e=>{e.addEventListener("keyup",S.bind(null,t,i)),e.addEventListener("change",S.bind(null,t,i))}),t.querySelectorAll("#mepManifestsCheckbox").forEach(e=>{e.addEventListener("change",a=>G.bind(null,a,t,i)()),e.addEventListener("change",S.bind(null,t,i))})}function W(t,i){return t===void 0?i.target:t==="postlcp"?"on post LCP":t}function Z(t,i=!1){const{page:e}=t,a=e?.pageId?`-${e.pageId}`:"",{manifestList:s}=j(t);let o="";e?.highlight&&(o='checked="checked"',document.body.dataset.mepHighlight=!0);const n="preview-button",p=i?e.url:new URL(window.location.href).href,c=u("div",{class:`mep-popup${i?"":" in-page"}`,"data-url":p}),r=u("div",{class:"mep-popup-header"}),d=u("div",{class:"mep-section"}),l=u("div",{class:"mep-section"}),m=u("div",{class:"mep-popup-body"}),b=u("div",{class:"mep-manifest-list"}),k=u("div",{class:"mep-manifest-list mmm-list"}),f=q(),C={postlcp:"postlcp",true:"on",false:"off"}[f.mep?.targetEnabled],y=i?e.target:C,x=W(y,e),{akamaiCode:h,consentState:v}=f.mep;d.innerHTML=`
    <h6 class="mep-manifest-page-info-title">Page Info</h6>
    <div class="mep-columns">
      <div class="mep-column">
        <div>Target Integration</div>
        <div>Personalization</div>
        <div>Geo Folder</div>
        <div>Locale</div>
        ${e.lastSeen?"<div>Last Seen</div>":""}
      </div>
      <div class="mep-column">
        <div>${x}</div>
        <div>${e.personalization}</div>
        <div>${e.geo||"Nothing (US)"}</div>
        <div>${e.locale?.toLowerCase()}</div>
        ${e.lastSeen?`<div>${E(new Date(e.lastSeen))}</div>`:""}
      </div>
    </div>
    <h6 class="mep-manifest-page-info-title">User Info</h6>
    <div class="mep-columns">
      <div class="mep-column">
        <div>Country</div>
        <div>Functional consent</div>
        <div>Advertising consent</div>
      </div>
      <div class="mep-column">
        <div>${h}</div>
        <div>${v.performance?"on":"off"}</div>
        <div>${v.advertising?"on":"off"}</div>
      </div>
    </div>
    `;const H=f.env?.name==="prod"&&!i?`<div>
        <input type="checkbox" name="mepHighlight${a}"
        id="mepManifestsCheckbox" value="false">
        <label for="mepManifestsCheckbox">MMM data for last 7 days</label>
      </div>`:"";l.innerHTML=`
    <h6 class="mep-manifest-page-info-title">Options</h6>
    <div class="mep-manifest-variants">
      <div>
        <input type="checkbox" name="mepHighlight${a}"
        id="mepHighlightCheckbox${a}" ${o} value="true">
        <label for="mepHighlightCheckbox${a}">Highlight changes</label>
      </div>
      ${H}
      <div>
        <input type="checkbox" name="mepPreviewButtonCheckbox${a}"
        id="mepPreviewButtonCheckbox${a}" value="off">
        <label for="mepPreviewButtonCheckbox${a}">Add mepButton=off to preview link</label>
      </div>
    </div>
    <div>New manifest location or path*</div>
    <input type="text" name="new-manifest${a}" class="new-manifest">`;const L=u("div",{class:`mep-popup-footer${i?"":" dark"}`});L.innerHTML+=`
    <a class="con-button outline button-l" data-id="${n}" title="Preview above choices" ${i?' target="_blank"':""}>Preview</a>`;const g=`<svg width="33" height="21" viewBox="0 0 33 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.8359 20.9998H18.0635C17.8561 21.0036 17.6523 20.9458 17.478 20.8338C17.3037 20.7219 17.1669 20.5607 17.0849 20.371L11.9039 8.30626C11.8958 8.27747 11.8821 8.25055 11.8636 8.22704C11.845 8.20353 11.822 8.18389 11.7958 8.16924C11.7696 8.1546 11.7408 8.14523 11.711 8.14167C11.6812 8.13812 11.651 8.14044 11.6221 8.14852L11.617 8.15001C11.5806 8.1604 11.5475 8.17958 11.5204 8.20585C11.4934 8.23212 11.4733 8.26466 11.462 8.30055L8.23347 15.9607C8.20525 16.0273 8.20475 16.1023 8.23207 16.1692C8.25939 16.2362 8.31229 16.2896 8.37914 16.3177L8.37983 16.318C8.41348 16.3319 8.44957 16.339 8.486 16.3389H12.035C12.1425 16.3389 12.2477 16.3704 12.3373 16.4295C12.427 16.4887 12.4972 16.5728 12.5391 16.6715L14.0926 20.1157C14.1588 20.2708 14.1603 20.4457 14.097 20.602C14.0336 20.7583 13.9105 20.8831 13.7548 20.949L13.754 20.9493C13.6753 20.9826 13.5907 20.9998 13.5053 20.9998H0.58545C0.488275 20.9993 0.392732 20.9749 0.307356 20.9287C0.22198 20.8824 0.149429 20.8159 0.0961835 20.7349C0.0429379 20.6539 0.0106559 20.5611 0.00222085 20.4647C-0.00621415 20.3683 0.00946049 20.2713 0.0478448 20.1824L8.26598 0.690892C8.35033 0.483823 8.49562 0.307024 8.68274 0.183739C8.86987 0.0604533 9.09007 -0.00354744 9.31441 0.000151769H14.0543C14.2779 -0.0028459 14.4972 0.0615004 14.6834 0.184758C14.8697 0.308015 15.0142 0.484433 15.098 0.690892L23.3726 20.1824C23.4107 20.2712 23.4263 20.3681 23.4178 20.4644C23.4094 20.5606 23.3771 20.6533 23.324 20.7342C23.2709 20.8151 23.1986 20.8817 23.1134 20.928C23.0283 20.9744 22.933 20.999 22.8359 20.9998Z" fill="white"/>
    <path d="M27.6434 20.9998H32.4159C32.5129 20.999 32.6082 20.9744 32.6934 20.928C32.7785 20.8817 32.8509 20.8151 32.904 20.7342C32.9571 20.6533 32.9893 20.5606 32.9978 20.4644C33.0062 20.3681 32.9907 20.2712 32.9525 20.1824L24.6779 0.690892C24.5941 0.484433 24.4496 0.308015 24.2634 0.184758C24.0771 0.0615004 23.8579 -0.0028459 23.6343 0.000151769H18.8943C18.67 -0.00354743 18.4498 0.0604533 18.2627 0.183739C18.0756 0.307024 17.38 1.16222 17.2956 1.36928L20.4916 8.97894C20.503 8.94305 21.0733 8.23212 21.1004 8.20585C21.1274 8.17958 21.1606 8.1604 21.1969 8.15001L21.202 8.14852C21.2309 8.14044 21.2611 8.13812 21.2909 8.14167C21.3207 8.14523 21.3496 8.1546 21.3757 8.16924C21.4019 8.18389 21.4249 8.20353 21.4435 8.22704C21.462 8.25055 21.4758 8.27747 21.4839 8.30626L26.6648 20.371C26.7468 20.5607 26.8837 20.7219 27.058 20.8338C27.2322 20.9458 27.436 21.0036 27.6434 20.9998Z" fill="white"/>
    </svg>`,$=i?g:`<a href="https://main--milo--adobecom.aem.page/docs/authoring/features/mmm" title="Open Mep Manifest Manager" target="_blank" >${g}</a>`;return r.innerHTML=`
    ${$}
    <span class="mep-close"></span>`,b.innerHTML=`<h6>Page Manifests</h6>${s}`,d&&m.append(d),b&&m.append(b),k&&f.env?.name==="prod"&&m.append(k),l&&m.append(l),c.append(r),c.append(m),c.append(L),I(c,".mep-popup-body > .mep-section:not(:last-child), .mep-manifest-list > .mep-section"),c.querySelector(`a[data-id="${n}"]`)&&S(c,a),V(c,a),c}function J(){const t=D(),{activities:i}=t,e=u("div",{class:"mep-preview-overlay static-links",style:"display: none;"}),a=document.createElement("div");a.classList.add("mep-hidden");const s=u("div",{class:"mep-manifest mep-badge"});s.innerHTML=N(i?.length),a.append(s),a.append(Z(t)),e.append(a),document.body.append(e),_(a)}function K(t){t.forEach(({selectedVariant:i,manifest:e})=>{const a=B(e),s=(o,n="manifestId")=>{document.querySelectorAll(o).forEach(p=>p.dataset[n]=a)};i?.replacefragment?.forEach(({val:o})=>s(`[data-path*="${o}"]`)),i?.useblockcode?.forEach(({selector:o})=>{o&&s(`.${o}`,"codeManifestId")}),i?.updatemetadata?.forEach(({selector:o})=>{o==="gnav-source"&&s("header, footer")}),document.querySelectorAll(`.section[class*="merch-cards"] .fragment[data-manifest-id="${a}"] merch-card`).forEach(o=>o.dataset.manifestId=a)})}async function te(){const t=D();return["/drafts/",".stage.",".page/",".live/","/fragments/","/nala/"].some(e=>t.page.url.includes(e))?!1:(t.activities=t.activities.filter(e=>{const{url:a,source:s}=e;return e.source=s.filter(o=>o!=="mep param"),!!(e.source?.length&&!a.includes("/drafts/"))}),t.activities=t.activities.map(e=>(e.variantNames=e.variantNames?.join("||")||"",e.source=e.source?.join(",")||"",delete e.selectedVariantName,e)),t.page.prefix===U&&(t.page.prefix=""),t.page.target=T("target")||"off",delete t.page.highlight,fetch(O.save,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(async e=>{const a=await e.json();if(e.ok)return a;throw new Error(a.message||"Network response failed")}))}async function ae(){const{miloLibs:t,codeRoot:i,mep:e}=q();R(`${t||i}/features/personalization/preview.css`),J(),e?.experiments&&K(e.experiments)}export{O as API_URLS,ae as default,Z as getMepPopup,z as parsePageAndUrl,te as saveToMmm};
