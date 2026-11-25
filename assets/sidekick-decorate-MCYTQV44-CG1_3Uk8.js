import{p as b}from"./chunk-3YYLU4G5-CzDGgZOG.js";var p=".publish.plugin button",d=".profile-email",h="Are you sure? This will publish to production.",u=!1;function f(o){const r=async(t,e)=>{const{canPublish:s,message:n}=await b(t,!1);s?e.removeAttribute("disabled"):e.setAttribute("disabled",!0);const i=e.querySelector("span"),l=s?h:n;i?i.innerText=l:e.insertAdjacentHTML("beforeend",`<span>${l}</span>`)},a=new CSSStyleSheet;a.replaceSync(`
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
  `),o.shadowRoot.adoptedStyleSheets=[a],o.addEventListener("statusfetched",async t=>{const e=t?.detail?.data,s=t?.target?.shadowRoot?.querySelector(p);e&&s&&r(e,s)}),setTimeout(async()=>{const t=o.shadowRoot.querySelector(p);t?.setAttribute("disabled",!0);const e=t?.querySelector("span");if(t&&!e){const s={webPath:window.location.pathname,profile:{email:o.shadowRoot.querySelector(d)?.innerText}};r(s,t)}},500)}async function c(o,r){const{canPublish:a,message:t}=await b(o,!1);if(a){r.removeAttribute("disabled");return}r.setAttribute("disabled",!0),r.insertAdjacentHTML("beforeend",`<span>${t}</span>`),setTimeout(()=>r.querySelector("span")?.remove(),4e3)}async function g(o){if(u)return;if(u=!0,o.nodeName==="HELIX-SIDEKICK"){f(o);return}const r=new CSSStyleSheet;r.replaceSync(`
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
  `);const a=o.shadowRoot.querySelector("plugin-action-bar").shadowRoot;a.adoptedStyleSheets??=[],a.adoptedStyleSheets.push(r);const t=a.querySelector("action-bar")?.shadowRoot;if(t){const n=new CSSStyleSheet;n.replaceSync(".action-bar { clip-path: none !important; }"),t.adoptedStyleSheets??=[],t.adoptedStyleSheets.push(n)}const e=a.querySelector("sk-action-button.publish");e||o.addEventListener("status-fetched",({target:n,detail:i})=>{setTimeout(async()=>{const l=n.shadowRoot.querySelector("plugin-action-bar").shadowRoot.querySelector("sk-action-button.publish");i&&l&&await c(i,l)},0)});const s={webPath:window.location.pathname,profile:{email:a.querySelector("#user")?.shadowRoot.querySelector('.user [slot="description"]')?.innerText}};s&&e&&await c(s,e)}export{g as default};
