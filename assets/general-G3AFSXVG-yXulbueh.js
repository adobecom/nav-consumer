import{Q as T,R as r,S as p,r as A}from"./draft-status-DCHYX3K6-BdvVELg1.js";import{b as S}from"./chunk-KR5Q5YBZ--GYMwtlx.js";import{p as I}from"./chunk-3YYLU4G5-CzDGgZOG.js";import{S as h,r as O,a as C}from"./chunk-GTDIBUQC-BHYaPzRb.js";import"./utils-WAZ6L2UH-B_OSzAPD.js";import"./index-D2oQlXRC.js";import"./chunk-RXU5ICMJ-BRo5-QH-.js";import"./chunk-UNXAQXCU-D_hGlAPf.js";var f="Not found",g="Never",F={preview:{lastModified:f},live:{lastModified:f}},E="da.live",v="Non AEM EDS Content",M=["/tools/caas","/libs/"],j=["statusfetched","status-fetched"],a=p({});function oe(){a.value={}}var P=p({icon:"purple",title:h.navigation,description:"Checking..."}),U=p({icon:"purple",title:h.footer,description:"Checking..."}),y=p({icon:"purple",title:h.regionSelector,description:"Checking..."}),D=p({icon:"purple",title:h.georouting,description:"Checking..."}),_=p({icon:"purple",title:h.breadcrumbs,description:"Checking..."}),b=p({icon:"purple",title:"Links",description:"Checking..."}),L=p([]),m=p(!1);async function x(){const e=[P,U,y,D,_],t=O({area:document});await Promise.all(t.map((i,s)=>Promise.resolve(i).then(n=>{const c=C[n.status]||"orange";e[s].value={icon:c,title:n.title,description:n.description}}).catch(n=>{e[s].value={icon:"red",title:"Error",description:`Error: ${n.message}`}})))}async function z(){try{const[e]=await A({area:document});b.value={icon:C[e.status]||"orange",title:e.title,description:e.description},L.value=e.details?.violations||[]}catch(e){b.value={icon:"red",title:"Links",description:`Error: ${e.message}`}}}async function V(e){const t=S(e,"status");if(!t)return{url:e,edit:null,preview:v,live:v,publish:v,externalUrl:e};const i=await fetch(t);if(!i.ok)return{};const s=await i.json(),n=s.preview.lastModified||g,c=s.live.lastModified||g,l=await I(s,!1),{sourceLocation:o}=s.preview,$=s.edit?.url||o?.includes(E)&&o?.replace("markup:https://content.da.live","https://da.live/edit#")||"";return{url:e,edit:$,preview:n,live:c,publish:l}}async function w(){Object.keys(a.value).forEach(async e=>{a.value[e].items.forEach(async(t,i)=>{const s=await V(t.url);a.value[e].items[i]=s,a.value={...a.value}})})}function G(e){const{modalPath:t,modalHash:i,path:s}=e.dataset,n=t?`${t}${i}`:s;try{return new URL(n)}catch{const c=e.src&&e.nodeName==="IFRAME"&&e.parentElement?.dataset.pdfSrc,l=e.href||(c?e.parentElement.dataset.pdfSrc:e.src),o=n?`${window.location.origin}${n}`:l;return new URL(o)}}function d(e){const t=new Set;return[...document.body.querySelectorAll(e)].reduce((i,s)=>{const n=G(s),c=`${n.origin}${n.pathname}`;return M.some(l=>n.pathname.includes(l))||t.has(c)||(t.add(c),i.push({url:n,edit:null,preview:"Fetching",live:"Fetching"})),i},[])}function q(){return{page:{items:[{url:new URL(window.location.href),edit:null,preview:"Fetching",live:"Fetching"}]},fragments:{items:d("main .fragment, a[data-modal-path], [data-path]")},links:{items:d('main a[href^="/"')},svgs:{items:d('img[src$=".svg"')},pdfs:{items:d("main iframe")},nav:{items:d('header a[href^="/"'),closed:!0}}}async function H(){if(a.value.page)return;a.value=q(),w();const e=document.querySelector("aem-sidekick, helix-sidekick");j.forEach(t=>e?.addEventListener(t,w))}async function k(e){Object.keys(a.value).map(async t=>{a.value[t].items.forEach(async(i,s)=>{const n=e==="live"?i.publish&&!i.publish.canPublish:!1;if(!i.checked||n)return;a.value[t].items[s].action=e,a.value={...a.value};const c=S(i.url,e),l=await fetch(c,{method:"POST"}),o=l.ok?await l.json():F;a.value[t].items[s]={...i,action:null,preview:o.preview?.lastModified||i.preview,live:o.live?.lastModified||i.live},a.value={...a.value}})})}function K(e){const t={...a.value};Object.keys(t).forEach(i=>{t[i].closed||t[i].items.forEach(s=>{s.checked=!e})}),a.value=t}function Q(e,t,i){e.nodeName!=="A"&&(a.value[t].items[i].checked=!a.value[t].items[i].checked,a.value={...a.value})}function X(e){a.value[e].closed=!a.value[e].closed,a.value={...a.value}}function Y(e,t){return e.preview===g&&e.live===g||e.preview===f&&e.live===f?" not-found":t}function N(e){if(Number.isNaN(Date.parse(e)))return e;const s=new Date(e).toLocaleString().split(", ");return r`
    <span class=preflight-date>${s[0]}</span>
    <span class=preflight-time>${s[1]}</span>
  `}function B(e){return e?e.pathname===window.location.pathname?e.pathname:e.hash?`${e.pathname} (${e.hash})`:e.pathname:""}function J(e){let t;return e.publish&&!e.publish.canPublish&&(t=r`${e.publish.message}`),{publishText:r`${e.action==="live"?"Publishing":N(e.live)}`,disablePublish:t}}function W({name:e,item:t,idx:i}){const{publishText:s,disablePublish:n}=J(t),c=t.checked?" is-checked":"",l=t.edit||t.preview===v?"":" is-fetching",o=t.edit&&t.edit.includes(E)?"da-icon":"sharepoint-icon",$=t.externalUrl?t.externalUrl.href:B(t.url);if(t.url)return r`
    <div class="preflight-group-row preflight-group-detail${c}${Y(t,l)}"
      onClick=${R=>Q(R.target,e,i)}>
      <p><a href=${t.externalUrl||t.url.pathname} target=_blank>${$}</a></p>
      <p>${t.edit&&r`<a href=${t.edit} class="preflight-edit ${o}" target=_blank>EDIT</a>`}</p>
      <p class=preflight-date-wrapper>${t.action==="preview"?"Previewing":N(t.preview)}</p>
      <p class="preflight-date-wrapper">
        ${c&&n?r`<span class=disabled-publish>${n}</span>`:s}
      </p>
    </div>`}function Z({name:e,group:t}){if(t.items.length===0)return null;const i=t.closed?" is-closed":"";return r`
    <div class="preflight-content-group${i}">
      <div class="preflight-group-row preflight-group-heading" onClick=${()=>X(e)}>
        <div class="preflight-group-expand"></div>
        <p class=preflight-content-heading>${e}</p>
        ${e==="page"&&r`
          <p class="preflight-content-heading preflight-content-heading-edit">Edit</p>
          <p class=preflight-content-heading>Previewed</p>
          <p class=preflight-content-heading>Published</p>
        `}
      </div>
      <div class=preflight-group-items>
      ${t.items.map((s,n)=>r`<${W} name=${e} idx=${n} item=${s} />`)}
      </div>
    </div>`}function u({icon:e,title:t,description:i}){return r`
    <div class="preflight-item">
      <div class="result-icon ${e}"></div>
      <div class="preflight-item-text">
        <p class="preflight-item-title">${t}</p>
        <p class="preflight-item-description">${i}</p>
      </div>
    </div>`}function ee({issues:e}){return r`
    ${e.length>0&&r`
      <div class="preflight-content-group${m.value?" is-closed":""}">
        <div class="preflight-group-row preflight-group-heading" onClick=${()=>{m.value=!m.value}}>
          <div class="preflight-group-expand"></div>
          <p class=preflight-content-heading>Faulty links</p>
          <p class="preflight-content-heading">Loc</p>
          <p class="preflight-content-heading">US status</p>
          <p class="preflight-content-heading">Loc status</p>
        </div>
        <div class=preflight-group-items>
          ${e.map(t=>r`
            <div class="preflight-group-row preflight-group-detail">
              <p><a href=${t.url} target=_blank>${t.url}</a></p>
              <p>${t.isLocalized?"Yes":"No"}</p>
              <p>${t.usStatus}</p>
              <p>${t.localizedStatus}</p>
            </div>
          `)}
        </div>
      </div>
    `}
  `}function pe(){T(()=>{H(),x(),z()},[]);const e=Object.values(a.value).flatMap(l=>l.items).filter(l=>l.checked),t=!!e.length,i=e.filter(l=>l.checked&&!!l.publish?.canPublish).length,s=a.value.page,n=t?"Select none":"Select all",c=e.length!==i&&"Puplishing disabled pages will be ignored";return r`
    <div class=preflight-general-content>
    <p class="preflight-structure-title">Structure</p>
       <div class=preflight-structure-columns>
        <div class=preflight-column>
          <${u} ...${P.value} />
          <${u} ...${U.value} />
          <${u} ...${y.value} />
        </div>
        <div class=preflight-column>
          <${u} ...${D.value} />
          <${u} ...${_.value} />
        </div>
      </div>
      <p class="preflight-structure-title">Localization</p>
      <div class=preflight-structure-columns>
        <div class=preflight-column>
          <${u} ...${b.value} />
        </div>
      </div>
      <${ee} issues=${L.value} />
      <p class="preflight-structure-title">Content</p>
      ${Object.keys(a.value).map(l=>r`<${Z} name=${l} group=${a.value[l]} />`)}
    </div>

    <div class=preflight-actions>
      ${s&&r`
        <div id=select-action class=preflight-action-wrapper>
          <button class=preflight-action onClick=${()=>K(t)}>${n}</button>
        </div>
      `}
      ${t&&r`
        <div id=preview-action class=preflight-action-wrapper>
          <button class=preflight-action onClick=${()=>k("preview")}>Preview</button>
        </div>
        ${!!i&&r`
          <div id=publish-action class="preflight-action-wrapper${c?" tooltip":""}" data-tooltip=${c}>
            <button class="preflight-action" onClick=${()=>k("live")}>
              Publish
            </button>
          </div>
        `}
      `}
    </div>
  `}export{pe as default,V as getStatus,oe as resetContent,q as runGeneralChecks};
