import{foundDisableValues as b}from"./dynamic-navigation-IDV6VNW6-Bm-S5npC.js";import{g as S,b as h,p as r}from"./utils-EOEXLB4S-DacHn_aW.js";var y="active",D="enabled",m="inactive",N="reset",E={active:"Displayed in green, this status appears when a user is on an entry page or a page with the Dynamic Nav enabled, indicating that the nav is fully functioning.",enabled:'Displayed in yellow, this status indicates that the Dynamic Nav is set to "on," but the user has not yet visited an entry page.',inactive:"Displayed in red, this status indicates that the Dynamic Nav is either not configured or has been disabled.",reset:"Displayed in grey, this status indicates that this page resets the Dynamic Nav."},L=(e,s,t)=>e==="on"&&s||t,w=(e,s,t)=>e==="entry"?y:e==="reset"?N:s?m:e==="on"&&t?y:e==="on"&&!t?D:m,C=(e,s,t=!1)=>{if(!e||e.length===0)return;const n=e.split(","),i=r("table"),p=Array.isArray(t)&&t.flat();i.innerHTML=`
      <caption>Disable Values</caption>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th>Match?</th>
        </tr>
      </thead>
      <tbody>
      </tbody>`;const l=i.querySelector("tbody");n.forEach(c=>{const d=r("tr"),[u,v]=c.split(";"),g=r("td"),o=r("td"),a=r("td");g.innerText=u,o.innerText=v,a.innerText=p&&p.includes(v)?"yes":"no",d.append(g,o,a),l.append(d)}),s.append(i)},f=e=>e.startsWith("https://")?new URL(e).pathname:"",M=e=>{const s=window.sessionStorage.getItem("gnavSource"),t=h("gnav-source")||"Metadata not found: site gnav source",n=h("dynamic-nav"),i=L(n,s,t),p=h("dynamic-nav-disable"),l=b(),c=h("dynamic-nav-group")||"Group not set",d=window.sessionStorage.getItem("dynamicNavGroup"),u=d&&c.toLowerCase()===d.toLowerCase(),v=u?"Yes":"No",g=l.length>=1||!u&&c!=="Group not set",o=w(n,g,s),a=r("div",{class:"dynamic-nav-status"});return a.innerHTML=`
    <span class="title"><span class="dns-badge"></span>Dynamic Nav</span>
    <section class="details hidden">
      <span class="dns-close"></span>
      <div class="message additional-info">
        <p>Additional Info:
          <span>${E[o]}</span>
        </p>
      </div>
      <p class="status">Status: <span>${o}</span></p> 
      <p class="setting">Setting: <span>${n}</span></p>
      <p class="group">Group: <span>${c}</span></p>
      <p class="group-match">Group matches stored group: <span>${v}</span></p>
      <p class="consumer-key">Consumer key: <span>${e}</span></p>
      <div class="nav-source-info">
        <p>Authored and stored source match: <span>${t===i}</span></p>
        <p>Authored Nav Source:
        <span>${f(t)}</span></p>
        <p>Stored Nav Source:
        <span>${f(i)}</span></p>
      </div>
      <div class="disable-values">
      </div>
    </section>
  `,C(p,a.querySelector(".disable-values"),l),a.classList.add(o),a.addEventListener("click",()=>{a.querySelector(".details").classList.toggle("hidden"),a.querySelector(".dns-badge").classList.toggle("dns-open")}),a};async function $(){const{dynamicNavKey:e}=S(),s=M(e),t=document.querySelector(".global-navigation");s.querySelector(".dns-close").addEventListener("click",()=>{t.removeChild(s)}),t&&t.appendChild(s)}export{y as ACTIVE,D as ENABLED,m as INACTIVE,N as RESET,$ as default,E as tooltipInfo};
