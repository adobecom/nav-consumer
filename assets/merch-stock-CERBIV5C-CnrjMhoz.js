import{D as l,S as d,l as p}from"./chunk-65CJKWEM-B00goYti.js";import"./utils-EOEXLB4S-DacHn_aW.js";var m=Object.defineProperty,r=e=>{throw TypeError(e)},y=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t,a)=>y(e,typeof t!="symbol"?t+"":t,a),u=(e,t,a)=>t.has(e)||r("Cannot "+a),k=(e,t,a)=>(u(e,t,"read from private field"),a?a.call(e):t.get(e)),v=(e,t,a)=>t.has(e)?r("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),b="merch-stock:change",w=class{constructor(e,t){this.key=Symbol("match-media-key"),this.matches=!1,this.host=e,this.host.addController(this),this.media=window.matchMedia(t),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),e.addController(this)}hostConnected(){var e;(e=this.media)==null||e.addEventListener("change",this.onChange)}hostDisconnected(){var e;(e=this.media)==null||e.removeEventListener("change",this.onChange)}onChange(e){this.matches!==e.matches&&(this.matches=e.matches,this.host.requestUpdate(this.key,!this.matches))}},o="(max-width: 767px)",i="(min-width: 1200px)",c="(min-width: 1600px)";window.matchMedia(o),window.matchMedia(`${i} and (not ${c})`),window.matchMedia(i),window.matchMedia(c);var s,h=class extends l{constructor(){super(),v(this,s,new w(this,o)),this.checked=!1}handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent(b,{detail:{checked:e.target.checked,planType:this.planType},bubbles:!0}))}connectedCallback(){this.style.setProperty("--mod-checkbox-font-size","12px"),super.connectedCallback(),this.updateComplete.then(()=>{this.querySelectorAll('[is="inline-price"]').forEach(async e=>{await e.onceSettled(),e.parentElement.setAttribute("data-plan-type",e.value[0].planType)})})}render(){if(this.planType&&!k(this,s).matches)return d`
            <sp-checkbox
                size="s"
                @change=${this.handleChange}
                ?checked=${this.checked}
            >
                <slot></slot>
            </sp-checkbox>
        `}get osi(){if(this.checked)return this.querySelector(`div[data-plan-type="${this.planType}"] [is="inline-price"]`)?.value?.[0].offerSelectorIds[0]}};s=new WeakMap,n(h,"styles",[p`
            ::slotted(div) {
                display: none;
            }

            :host(:not([plan-type])) {
                display: none;
            }

            :host([plan-type='ABM']) ::slotted([data-plan-type='ABM']),
            :host([plan-type='M2M']) ::slotted([data-plan-type='M2M']),
            :host([plan-type='PUF']) ::slotted([data-plan-type='PUF']) {
                display: block;
            }

            sp-checkbox {
                margin: 0;
                font-size: 12px;
                line-height: 15px;
            }
        `]),n(h,"properties",{checked:{type:Boolean,attribute:"checked",reflect:!0},planType:{type:String,attribute:"plan-type",reflect:!0}});window.customElements.define("merch-stock",h);export{h as MerchStock};
