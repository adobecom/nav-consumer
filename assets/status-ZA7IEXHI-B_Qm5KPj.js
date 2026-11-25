import{getDynamicNavState as D,foundDisableValues as E}from"./dynamic-navigation-ONVIW2IM-B3qDFt4E.js";import{b as m,c as r}from"./utils-WAZ6L2UH-B_OSzAPD.js";import"./helpers-PXCK7GSM-BnE9QMyQ.js";import"./index-D2oQlXRC.js";var b="active",N="enabled",v="inactive",C="reset",L={active:"Displayed in green, this status appears when a user is on an entry page or a page with the Dynamic Nav enabled, indicating that the nav is fully functioning.",enabled:'Displayed in yellow, this status indicates that the Dynamic Nav is set to "on," but the user has not yet visited an entry page.',inactive:"Displayed in red, this status indicates that the Dynamic Nav is either not configured or has been disabled.",reset:"Displayed in grey, this status indicates that this page resets the Dynamic Nav."},k={prod:"Shared across adobe.com",stage:"Shared across stage.adobe.com",preview:"Host-only (EDS preview/live)",local:"Host-only (local)"},M=(e,t)=>e.active?e.stored.source:t,$=e=>{const{setting:t,disabled:s,active:c,stored:a,groupMatched:o}=e;return a.consent?t==="entry"?b:t==="reset"?C:s?v:t==="on"?c?b:a.source&&!o?v:N:v:v},A=(e,t,s=!1)=>{if(!e||e.length===0)return;const c=e.split(","),a=r("table"),o=Array.isArray(s)&&s.flat();a.innerHTML=`
      <caption>Disable Values</caption>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th>Match?</th>
        </tr>
      </thead>
      <tbody>
      </tbody>`;const d=a.querySelector("tbody");c.forEach(h=>{const l=r("tr"),[g,y]=h.split(";"),p=r("td"),i=r("td"),u=r("td");p.innerText=g,i.innerText=y,u.innerText=o&&o.includes(y)?"yes":"no",l.append(p,i,u),d.append(l)}),t.append(a)},f=e=>{try{return new URL(e).pathname}catch{return""}},T=()=>{const e=D(),{setting:t,stored:s,groupMatched:c}=e,a=m("gnav-source")||"Metadata not found: site gnav source",o=t||"",d=M(e,a),h=m("dynamic-nav-disable"),l=E(),g=m("dynamic-nav-group")||"Group not set",p=!!s.source&&c?"Yes":"No",i=$(e),u=s.available?"Yes":"No (using authored navigation)",S=k[e.environment?.name]||"Host-only",n=r("div",{class:"dynamic-nav-status"});return n.innerHTML=`
    <span class="title"><span class="dns-badge"></span>Dynamic Nav</span>
    <section class="details hidden">
      <span class="dns-close"></span>
      <div class="message additional-info">
        <p>Additional Info:
          <span>${L[i]}</span>
        </p>
      </div>
      <p class="status">Status: <span>${i}</span></p> 
      <p class="setting">Setting: <span>${o}</span></p>
      <p class="group">Group: <span>${g}</span></p>
      <p class="group-match">Group matches stored group: <span>${p}</span></p>
      <p class="cookies-available">Cookies available: <span>${u}</span></p>
      <p class="functional-consent">Functional cookie consent (C0003): <span>${s.consent?"Yes":"No (using authored navigation)"}</span></p>
      <p class="cookie-scope">Cookie scope: <span>${S}</span></p>
      <div class="nav-source-info">
        <p>Authored and stored source match: <span>${a===d}</span></p>
        <p>Authored Nav Source:
        <span>${f(a)}</span></p>
        <p>Stored Nav Source:
        <span>${f(d)}</span></p>
      </div>
      <div class="disable-values">
      </div>
    </section>
  `,A(h,n.querySelector(".disable-values"),l),n.classList.add(i),n.addEventListener("click",()=>{n.querySelector(".details").classList.toggle("hidden"),n.querySelector(".dns-badge").classList.toggle("dns-open")}),n};async function I(){const e=T(),t=document.querySelector(".global-navigation");e.querySelector(".dns-close").addEventListener("click",()=>{t.removeChild(e)}),t&&t.appendChild(e)}export{b as ACTIVE,N as ENABLED,v as INACTIVE,C as RESET,I as default,L as tooltipInfo};
