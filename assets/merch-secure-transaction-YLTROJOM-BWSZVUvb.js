import{D as c,S as r,l as p}from"./chunk-65CJKWEM-B00goYti.js";import"./utils-EOEXLB4S-DacHn_aW.js";var d=Object.defineProperty,h=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e,o)=>h(t,typeof e!="symbol"?e+"":e,o),m="(max-width: 767px)",l="(min-width: 1200px)",s="(min-width: 1600px)";window.matchMedia(m),window.matchMedia(`${l} and (not ${s})`),window.matchMedia(l),window.matchMedia(s);var b=p`
    #label {
        align-items: center;
        cursor: pointer;
        display: inline-flex;
        gap: var(--consonant-merch-spacing-xxxs);
        white-space: nowrap;
        font-size: 12px;
        line-height: 15px;
    }

    #label.icon::before {
        background-position: center;
        background-size: contain;
        background: var(--secure-icon) no-repeat;
        content: '';
        display: inline-block;
        height: 1em;
        width: 1em;
    }
`,u="merch-secure-transaction",i=class extends c{constructor(){super(),this.labelText="",this.showIcon=!0,this.tooltipText=""}render(){let{labelText:t,showIcon:e,tooltipText:o}=this,a=r`
            <div class="${e?"icon":""}" id="label" slot="trigger">
                ${t}
            </div>
        `;return o?r`
            <overlay-trigger placement="top-start" offset="4">
                ${a}
                <sp-tooltip id="tooltip" slot="hover-content" delayed
                    >${o}</sp-tooltip
                >
            </overlay-trigger>
        `:a}};n(i,"properties",{labelText:{attribute:"label",type:String},showIcon:{attribute:"icon",type:Boolean},tooltipText:{attribute:"tooltip",type:String}}),n(i,"styles",[b]);window.customElements.define(u,i);export{i as default};
