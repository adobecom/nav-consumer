import{D as c,S as r,l as m}from"./chunk-65CJKWEM-B00goYti.js";import"./utils-EOEXLB4S-DacHn_aW.js";var h=Object.defineProperty,g=(t,e,o)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,d=(t,e)=>()=>(t&&(e=t(t=0)),e),u=(t,e)=>{for(var o in e)h(t,o,{get:e[o],enumerable:!0})},s=(t,e,o)=>g(t,typeof e!="symbol"?e+"":e,o),f={};u(f,{default:()=>a});function b(){return customElements.get("sp-tooltip")!==void 0&&customElements.get("overlay-trigger")!==void 0&&document.querySelector("sp-theme")!==null}var a,v=d(()=>{a=class extends c{constructor(){super(),this.content="",this.placement="top",this.variant="info",this.size="xs"}get effectiveContent(){return this.tooltipText||this.mnemonicText||this.content||""}get effectivePlacement(){return this.tooltipPlacement||this.mnemonicPlacement||this.placement||"top"}renderIcon(){return this.src?r`<merch-icon 
            src="${this.src}" 
            size="${this.size}"
        ></merch-icon>`:r`<slot></slot>`}render(){let t=this.effectiveContent,e=this.effectivePlacement;return t?b()?r`
                <overlay-trigger placement="${e}">
                    <span slot="trigger">${this.renderIcon()}</span>
                    <sp-tooltip 
                        placement="${e}"
                        variant="${this.variant}">
                        ${t}
                    </sp-tooltip>
                </overlay-trigger>
            `:r`
                <span 
                    class="css-tooltip ${e}"
                    data-tooltip="${t}"
                    tabindex="0"
                    role="img"
                    aria-label="${t}">
                    ${this.renderIcon()}
                </span>
            `:this.renderIcon()}},s(a,"properties",{content:{type:String},placement:{type:String},variant:{type:String},src:{type:String},size:{type:String},tooltipText:{type:String,attribute:"tooltip-text"},tooltipPlacement:{type:String,attribute:"tooltip-placement"},mnemonicText:{type:String,attribute:"mnemonic-text"},mnemonicPlacement:{type:String,attribute:"mnemonic-placement"}}),s(a,"styles",m`
        :host {
            display: contents;
            overflow: visible;
        }
        
        /* CSS tooltip styles - these are local fallbacks, main styles in global.css.js */
        .css-tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
        
        .css-tooltip[data-tooltip]::before {
            content: attr(data-tooltip);
            position: absolute;
            z-index: 999;
            background: var(--spectrum-gray-800, #323232);
            color: #fff;
            padding: 8px 12px;
            border-radius: 4px;
            white-space: normal;
            width: max-content;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
            font-size: 12px;
            line-height: 1.4;
            text-align: center;
        }
        
        .css-tooltip[data-tooltip]::after {
            content: '';
            position: absolute;
            z-index: 999;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
        }
        
        .css-tooltip:hover[data-tooltip]::before,
        .css-tooltip:hover[data-tooltip]::after,
        .css-tooltip:focus[data-tooltip]::before,
        .css-tooltip:focus[data-tooltip]::after {
            opacity: 1;
        }
        
        /* Position variants */
        .css-tooltip.top[data-tooltip]::before {
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 16px;
        }
        
        .css-tooltip.top[data-tooltip]::after {
            top: -80%;
            left: 50%;
            transform: translateX(-50%);
            border-color: var(--spectrum-gray-800, #323232) transparent transparent transparent;
        }
        
        .css-tooltip.bottom[data-tooltip]::before {
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 10px;
        }
        
        .css-tooltip.bottom[data-tooltip]::after {
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 5px;
            border-bottom-color: var(--spectrum-gray-800, #323232);
        }
        
        .css-tooltip.left[data-tooltip]::before {
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 10px;
        }
        
        .css-tooltip.left[data-tooltip]::after {
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 5px;
            border-left-color: var(--spectrum-gray-800, #323232);
        }
        
        .css-tooltip.right[data-tooltip]::before {
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 10px;
        }
        
        .css-tooltip.right[data-tooltip]::after {
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 5px;
            border-right-color: var(--spectrum-gray-800, #323232);
        }
    `),customElements.define("mas-mnemonic",a)});function x(){return customElements.get("sp-tooltip")!==void 0||document.querySelector("sp-theme")!==null}var p=class extends c{constructor(){super(),this.size="m",this.alt="",this.loading="lazy"}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.handleTooltips(),0)}handleTooltips(){x()||this.querySelectorAll("sp-tooltip, overlay-trigger").forEach(t=>{let e="",o="top";if(t.tagName==="SP-TOOLTIP")e=t.textContent,o=t.getAttribute("placement")||"top";else if(t.tagName==="OVERLAY-TRIGGER"){let i=t.querySelector("sp-tooltip");i&&(e=i.textContent,o=i.getAttribute("placement")||t.getAttribute("placement")||"top")}if(e){let i=document.createElement("mas-mnemonic");i.setAttribute("content",e),i.setAttribute("placement",o);let n=this.querySelector("img"),l=this.querySelector("a");l&&l.contains(n)?i.appendChild(l):n&&i.appendChild(n),this.innerHTML="",this.appendChild(i),Promise.resolve().then(()=>v())}t.remove()})}render(){let{href:t}=this;return t?r`<a href="${t}">
                  <img src="${this.src}" alt="${this.alt}" loading="${this.loading}" />
              </a>`:r` <img src="${this.src}" alt="${this.alt}" loading="${this.loading}" />`}};s(p,"properties",{size:{type:String,attribute:!0},src:{type:String,attribute:!0},alt:{type:String,attribute:!0},href:{type:String,attribute:!0},loading:{type:String,attribute:!0}}),s(p,"styles",m`
        :host {
            --img-width: 32px;
            --img-height: 32px;
            display: block;
            width: var(--mod-img-width, var(--img-width));
            height: var(--mod-img-height, var(--img-height));
        }

        :host([size='xxs']) {
            --img-width: 13px;
            --img-height: 13px;
        }

        :host([size='xs']) {
            --img-width: 20px;
            --img-height: 20px;
        }

        :host([size='s']) {
            --img-width: 24px;
            --img-height: 24px;
        }

        :host([size='m']) {
            --img-width: 30px;
            --img-height: 30px;
        }

        :host([size='l']) {
            --img-width: 40px;
            --img-height: 40px;
        }

        img {
            width: var(--mod-img-width, var(--img-width));
            height: var(--mod-img-height, var(--img-height));
        }
    `);customElements.define("merch-icon",p);export{p as default};
