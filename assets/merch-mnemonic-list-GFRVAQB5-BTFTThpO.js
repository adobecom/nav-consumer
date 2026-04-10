import{D as s,S as o,l}from"./chunk-65CJKWEM-B00goYti.js";import"./utils-EOEXLB4S-DacHn_aW.js";var a=Object.defineProperty,p=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,i=(t,e,r)=>p(t,typeof e!="symbol"?e+"":e,r),n=class extends s{constructor(){super()}render(){return o`
            <slot name="icon"></slot>
            <slot name="description">${this.description}</slot>
        `}};i(n,"styles",l`
        :host {
            display: flex;
            flex-wrap: nowrap;
            gap: 8px;
            margin-right: 16px;
            align-items: center;
        }

        ::slotted([slot='icon']) {
            display: flex;
            justify-content: center;
            align-items: center;
            height: max-content;
        }

        ::slotted([slot='description']) {
            font-size: 14px;
            line-height: 21px;
            margin: 0;
        }

        :host .hidden {
            display: none;
        }
    `),i(n,"properties",{description:{type:String,attribute:!0}});customElements.define("merch-mnemonic-list",n);export{n as MerchMnemonicList};
