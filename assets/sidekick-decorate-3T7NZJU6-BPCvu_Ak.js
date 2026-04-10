var c={},w=async e=>{if(c[e]!==void 0)return c[e];let o=null;const r=await fetch(e);return r.ok&&(o=await r.json()),c[e]=o,c[e]},x=async(e,o=!0)=>{if(!e)return!1;const{live:r,profile:t,webPath:s,origin:n=""}=e;let i=o?r?.permissions?.includes("write"):!0,a="Publishing is currently disabled for this page";const u=await w(`${n}/.milo/publish-permissions-config.json?limit=50000`),p=u?.urls?.data?.find(({url:l})=>l.endsWith("**")?s.includes(l.slice(0,-2)):l===s);if(p){i=!1,p.message&&(a=p.message);const l=u[p.group];if(l&&t?.email){let b;const d=l.data?.find(({allow:S,deny:h})=>h?(b=!0,h===t.email):S===t.email);i=b?!d:!!d}}return{canPublish:i,message:a}},y=x,f=".publish.plugin button",v=".profile-email",P="Are you sure? This will publish to production.",g=!1;function k(e){const o=async(t,s)=>{const{canPublish:n,message:i}=await y(t,!1);n?s.removeAttribute("disabled"):s.setAttribute("disabled",!0);const a=s.querySelector("span"),u=n?P:i;a?a.innerText=u:s.insertAdjacentHTML("beforeend",`<span>${u}</span>`)},r=new CSSStyleSheet;r.replaceSync(`
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
  `),e.shadowRoot.adoptedStyleSheets=[r],e.addEventListener("statusfetched",async t=>{const s=t?.detail?.data,n=t?.target?.shadowRoot?.querySelector(f);s&&n&&o(s,n)}),setTimeout(async()=>{const t=e.shadowRoot.querySelector(f);t?.setAttribute("disabled",!0);const s=t?.querySelector("span");if(t&&!s){const n={webPath:window.location.pathname,profile:{email:e.shadowRoot.querySelector(v)?.innerText}};o(n,t)}},500)}async function m(e,o){const{canPublish:r,message:t}=await y(e,!1);if(r){o.removeAttribute("disabled");return}o.setAttribute("disabled",!0),o.insertAdjacentHTML("beforeend",`<span>${t}</span>`),setTimeout(()=>o.querySelector("span").remove(),4e3)}async function q(e){if(g)return;if(g=!0,e.nodeName==="HELIX-SIDEKICK"){k(e);return}const o=new CSSStyleSheet;o.replaceSync(`
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
  `);const r=e.shadowRoot.querySelector("plugin-action-bar").shadowRoot;r.adoptedStyleSheets??=[],r.adoptedStyleSheets.push(o);const t=r.querySelector("sk-action-button.publish");t||e.addEventListener("status-fetched",({target:n,detail:i})=>{setTimeout(async()=>{const a=n.shadowRoot.querySelector("plugin-action-bar").shadowRoot.querySelector("sk-action-button.publish");i&&a&&await m(i,a)},0)});const s={webPath:window.location.pathname,profile:{email:r.querySelector("#user")?.shadowRoot.querySelector('.user [slot="description"]')?.innerText}};s&&t&&await m(s,t)}export{q as default};
