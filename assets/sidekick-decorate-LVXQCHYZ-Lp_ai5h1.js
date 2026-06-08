var c={},w=async e=>{if(c[e]!==void 0)return c[e];let s=null;const r=await fetch(e);return r.ok&&(s=await r.json()),c[e]=s,c[e]},x=async(e,s=!0)=>{if(!e)return!1;const{live:r,profile:t,webPath:o,origin:n=""}=e;let i=s?r?.permissions?.includes("write"):!0,a="Publishing is currently disabled for this page";const l=await w(`${n}/.milo/publish-permissions-config.json?limit=50000`),p=l?.urls?.data?.find(({url:u})=>u.endsWith("**")?o.includes(u.slice(0,-2)):u===o);if(p){i=!1,p.message&&(a=p.message);const u=l[p.group];if(u&&t?.email){let b;const d=u.data?.find(({allow:m,deny:h})=>h?(b=!0,h===t.email):m===t.email);i=b?!d:!!d}}return{canPublish:i,message:a}},y=x,f=".publish.plugin button",v=".profile-email",P="Are you sure? This will publish to production.",g=!1;function R(e){const s=async(t,o)=>{const{canPublish:n,message:i}=await y(t,!1);n?o.removeAttribute("disabled"):o.setAttribute("disabled",!0);const a=o.querySelector("span"),l=n?P:i;a?a.innerText=l:o.insertAdjacentHTML("beforeend",`<span>${l}</span>`)},r=new CSSStyleSheet;r.replaceSync(`
    :host {
      --bg-color: rgb(129 27 14);
      --text-color: #fff0f0;
      color-scheme: light dark;
    }
    .publish.plugin {
      order: 100;
    }
    .publish.plugin button {
      position: relative;
    }
    .publish.plugin button:not([disabled=true]) {
      background: var(--bg-color);
      border-color: #b46157;
      color: var(--text-color);
    }
    .publish.plugin button:not([disabled=true]):hover {
      background-color: var(--hlx-sk-button-hover-bg);
      border-color: unset;
      color: var(--hlx-sk-button-hover-color);
    }
    .publish.plugin button > span {
      display: none;
      background: #666;
      border-radius: 4px;
      line-height: 1.2rem;
      padding: 8px 12px;
      position: absolute;
      top: 34px;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      white-space: pre-wrap;
    }
    .publish.plugin button:not([disabled=true]) > span {
      background: var(--bg-color);
    }
    .publish.plugin button:hover > span {
      display: block;
      color: var(--text-color);
    }
    .publish.plugin button > span:before {
      content: '';
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #666;
      position: absolute;
      text-align: center;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
    }
    .publish.plugin button:not([disabled=true]) > span:before {
      border-bottom: 6px solid var(--bg-color);
    }
  `),e.shadowRoot.adoptedStyleSheets=[r],e.addEventListener("statusfetched",async t=>{const o=t?.detail?.data,n=t?.target?.shadowRoot?.querySelector(f);o&&n&&s(o,n)}),setTimeout(async()=>{const t=e.shadowRoot.querySelector(f);t?.setAttribute("disabled",!0);const o=t?.querySelector("span");if(t&&!o){const n={webPath:window.location.pathname,profile:{email:e.shadowRoot.querySelector(v)?.innerText}};s(n,t)}},500)}async function S(e,s){const{canPublish:r,message:t}=await y(e,!1);if(r){s.removeAttribute("disabled");return}s.setAttribute("disabled",!0),s.insertAdjacentHTML("beforeend",`<span>${t}</span>`),setTimeout(()=>s.querySelector("span")?.remove(),4e3)}async function k(e){if(g)return;if(g=!0,e.nodeName==="HELIX-SIDEKICK"){R(e);return}const s=new CSSStyleSheet;s.replaceSync(`
    sk-action-button.publish {
      position: relative;
    }
    sk-action-button.publish > span {
      display: none;
      background: #777;
      border-radius: 4px;
      line-height: 1.2rem;
      padding: 8px 12px;
      position: absolute;
      bottom: 34px;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      white-space: pre-wrap;
      color: black;
    }
    sk-action-button.publish[disabled] > span {
      display: block;
    }
    sk-action-button.publish > span:before {
      content: '';
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #777;
      position: absolute;
      text-align: center;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
    }
  `);const r=e.shadowRoot.querySelector("plugin-action-bar").shadowRoot;r.adoptedStyleSheets??=[],r.adoptedStyleSheets.push(s);const t=r.querySelector("action-bar")?.shadowRoot;if(t){const i=new CSSStyleSheet;i.replaceSync(".action-bar { clip-path: none !important; }"),t.adoptedStyleSheets??=[],t.adoptedStyleSheets.push(i)}const o=r.querySelector("sk-action-button.publish");o||e.addEventListener("status-fetched",({target:i,detail:a})=>{setTimeout(async()=>{const l=i.shadowRoot.querySelector("plugin-action-bar").shadowRoot.querySelector("sk-action-button.publish");a&&l&&await S(a,l)},0)});const n={webPath:window.location.pathname,profile:{email:r.querySelector("#user")?.shadowRoot.querySelector('.user [slot="description"]')?.innerText}};n&&o&&await S(n,o)}export{k as default};
