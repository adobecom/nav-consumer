import{D as c,u as h,S as o,l as u}from"./chunk-65CJKWEM-B00goYti.js";import"./utils-EOEXLB4S-DacHn_aW.js";var D=Object.defineProperty,A=(e,t,i)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l=(e,t,i)=>A(e,typeof t!="symbol"?t+"":t,i),b=class{constructor(e,t){this.key=Symbol("match-media-key"),this.matches=!1,this.host=e,this.host.addController(this),this.media=window.matchMedia(t),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),e.addController(this)}hostConnected(){var e;(e=this.media)==null||e.addEventListener("change",this.onChange)}hostDisconnected(){var e;(e=this.media)==null||e.removeEventListener("change",this.onChange)}onChange(e){this.matches!==e.matches&&(this.matches=e.matches,this.host.requestUpdate(this.key,!this.matches))}},T="merch-search:change",d="merch-sidenav:select";function w(e,t){let i;return function(){let a=this,s=arguments;clearTimeout(i),i=setTimeout(()=>e.apply(a,s),t)}}function L(e,t={},i=null,a=null){let s=a?document.createElement(e,{is:a}):document.createElement(e);i instanceof HTMLElement?s.appendChild(i):s.innerHTML=i;for(let[n,C]of Object.entries(t))s.setAttribute(n,C);return s}function $(e){if(!window.history.pushState)return;let t=new URL(window.location.href);t.search=`?${e}`,window.history.pushState({path:t.href},"",t.href)}function y(e,t){let i=new URLSearchParams(window.location.hash.slice(1));i.set(e,t),window.location.hash=i.toString()}function I(e=[]){e.forEach(t=>{let i=new URLSearchParams(window.location.search),a=i.get(t);a&&(window.location.hash.includes(`${t}=`)?y(t,a):window.location.hash=window.location.hash?`${window.location.hash}&${t}=${a}`:`${t}=${a}`,i.delete(t),$(i.toString()))})}var x="hashchange";function S(e=window.location.hash){let t=[],i=e.replace(/^#/,"").split("&");for(let a of i){let[s,n=""]=a.split("=");s&&t.push([s,decodeURIComponent(n.replace(/\+/g," "))])}return Object.fromEntries(t)}function r(e,t){if(e.deeplink){let i={};i[e.deeplink]=t,M(i)}}function M(e){let t=new URLSearchParams(window.location.hash.slice(1));Object.entries(e).forEach(([s,n])=>{n?t.set(s,n):t.delete(s)}),t.sort();let i=t.toString();if(i===window.location.hash)return;let a=window.scrollY||document.documentElement.scrollTop;window.location.hash=i,window.scrollTo(0,a)}function g(e){let t=()=>{if(window.location.hash&&!window.location.hash.includes("="))return;let i=S(window.location.hash);e(i)};return t(),window.addEventListener(x,t),()=>{window.removeEventListener(x,t)}}var E=class extends c{get search(){return this.querySelector("sp-search")}constructor(){super(),this.handleInput=()=>{r(this,this.search.value),this.search.value&&this.dispatchEvent(new CustomEvent(T,{bubbles:!0,composed:!0,detail:{type:"search",value:this.search.value}}))},this.handleInputDebounced=w(this.handleInput.bind(this))}connectedCallback(){super.connectedCallback(),this.search&&(this.search.addEventListener("input",this.handleInputDebounced),this.search.addEventListener("submit",this.handleInputSubmit),this.updateComplete.then(()=>{this.setStateFromURL()}),this.startDeeplink())}disconnectedCallback(){super.disconnectedCallback(),this.search.removeEventListener("input",this.handleInputDebounced),this.search.removeEventListener("submit",this.handleInputSubmit),this.stopDeeplink?.()}setStateFromURL(){let e=S()[this.deeplink];e&&(this.search.value=e)}startDeeplink(){this.stopDeeplink=g(({search:e})=>{this.search.value=e??""})}handleInputSubmit(e){e.preventDefault()}render(){return o`<slot></slot>`}};l(E,"properties",{deeplink:{type:String}});customElements.define("merch-search",E);var p=class extends c{constructor(){super(),this.toggleIconColor=!1,this.handleClickDebounced=w(this.handleClick.bind(this))}selectElement(e,t=!0){e.selected=t,e.parentNode.tagName==="SP-SIDENAV-ITEM"&&this.selectElement(e.parentNode,!1);let i=e.querySelector(".selection");i?.setAttribute("selected",t);let a=i?.dataset,s=t&&this.toggleIconColor?a?.light:a?.dark;s&&e.querySelector("img")?.setAttribute("src",s),t&&(this.selectedElement=e,this.selectedText=a?.selectedText||e.label,this.selectedValue=e.value,setTimeout(()=>{e.selected=!0},1),this.dispatchEvent(new CustomEvent(d,{bubbles:!0,composed:!0,detail:{type:"sidenav",value:this.selectedValue,elt:this.selectedElement}})))}markCurrentItem(e){let t=e.closest("sp-sidenav");t&&(t.querySelectorAll("sp-sidenav-item[aria-current]").forEach(i=>{i.removeAttribute("aria-current")}),e.setAttribute("aria-current","true"))}handleClick({target:e},t=!0){let{value:i,parentNode:a}=e;this.selectElement(e),this.markCurrentItem(e),a?.tagName==="SP-SIDENAV"?(a.querySelectorAll("sp-sidenav-item[expanded],sp-sidenav-item[selected]").forEach(s=>{s.value!==i&&(s.expanded=!1,s.removeAttribute("aria-expanded"),this.selectElement(s,!1))}),a.querySelectorAll(".selection[selected=true]").forEach(s=>{let n=s.parentElement;n.value!==i&&this.selectElement(n,!1)})):a?.tagName==="SP-SIDENAV-ITEM"&&([...a.closest("sp-sidenav")?.querySelectorAll(":scope > sp-sidenav-item")].filter(s=>s!==a).forEach(s=>{s.expanded=!1,s.removeAttribute("aria-expanded")}),a.closest("sp-sidenav")?.querySelectorAll("sp-sidenav-item[selected]").forEach(s=>{s.value!==i&&this.selectElement(s,!1)})),t&&r(this,i)}selectionChanged(e){let{target:{value:t,parentNode:i}}=e;this.selectElement(this.querySelector(`sp-sidenav-item[value="${t}"]`)),r(this,t)}startDeeplink(){this.stopDeeplink=g(e=>{let t=e[this.deeplink]??"all",i=this.querySelector(`sp-sidenav-item[value="${t}"]`);i||(i=this.querySelector("sp-sidenav-item:first-child"),y(this.deeplink,i.value)),this.updateComplete.then(()=>{i.firstElementChild?.tagName==="SP-SIDENAV-ITEM"&&(i.expanded=!0,i.setAttribute("aria-expanded","true")),i.parentNode?.tagName==="SP-SIDENAV-ITEM"&&(i.parentNode.expanded=!0,i.parentNode.setAttribute("aria-expanded","true")),this.handleClick({target:i},!!window.location.hash.includes("category"))})})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClickDebounced),this.updateComplete.then(()=>{this.deeplink&&(I(["filter","single_app"]),this.startDeeplink())})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClickDebounced),this.stopDeeplink?.()}render(){return o`<div
            aria-label="${this.label}"
            @change="${e=>this.selectionChanged(e)}"
        >
            ${this.sidenavListTitle?o`<h2>${this.sidenavListTitle}</h2>`:h}
            <slot></slot>
        </div>`}};l(p,"properties",{sidenavListTitle:{type:String},label:{type:String},deeplink:{type:String,attribute:"deeplink"},selectedText:{type:String,reflect:!0,attribute:"selected-text"},selectedValue:{type:String,reflect:!0,attribute:"selected-value"},toggleIconColor:{type:Boolean,attribute:"toggle-icon-color"}}),l(p,"styles",u`
        :host {
            display: block;
            contain: content;
            margin-top: var(--merch-sidenav-list-gap);
        }

        :host h2 {
            color: var(--merch-sidenav-list-title-color);
            font-size: var(--merch-sidenav-list-title-font-size);
            font-weight: var(--merch-sidenav-list-title-font-weight);
            padding: var(--merch-sidenav-list-title-padding);
            line-height: var(--merch-sidenav-list-title-line-height);
            margin: 0;
        }

        .right {
            position: absolute;
            right: 0;
        }
    `);customElements.define("merch-sidenav-list",p);var m=class extends c{constructor(){super(),this.selectedValues=[]}selectionChanged({target:e}){let t=e.getAttribute("name");if(t){let i=this.selectedValues.indexOf(t);e.checked&&i===-1?this.selectedValues.push(t):!e.checked&&i>=0&&this.selectedValues.splice(i,1)}r(this,this.selectedValues.join(","))}addGroupTitle(){let e="sidenav-checkbox-group-title",t=L("h3",{id:e});t.textContent=this.sidenavCheckboxTitle,this.prepend(t),this.setAttribute("role","group"),this.setAttribute("aria-labelledby",e)}startDeeplink(){this.stopDeeplink=g(({types:e})=>{if(e){let t=e.split(",");[...new Set([...t,...this.selectedValues])].forEach(i=>{let a=this.querySelector(`sp-checkbox[name=${i}]`);a&&(a.checked=t.includes(i))}),this.selectedValues=t}else this.selectedValues.forEach(t=>{let i=this.querySelector(`sp-checkbox[name=${t}]`);i&&(i.checked=!1)}),this.selectedValues=[]})}connectedCallback(){super.connectedCallback(),this.updateComplete.then(async()=>{this.addGroupTitle(),this.startDeeplink()})}disconnectedCallback(){this.stopDeeplink?.()}render(){return o`<div aria-label="${this.label}">
            <div
                @change="${e=>this.selectionChanged(e)}"
                class="checkbox-group"
            >
                <slot></slot>
            </div>
        </div>`}};l(m,"properties",{sidenavCheckboxTitle:{type:String},label:{type:String},deeplink:{type:String},selectedValues:{type:Array,reflect:!0},value:{type:String}}),l(m,"styles",u`
        :host {
            display: block;
            contain: content;
            border-top: 1px solid var(--color-gray-200);
            padding: var(--merch-sidenav-checkbox-group-padding);
            margin-top: var(--merch-sidenav-checkbox-group-gap);
        }

        .checkbox-group {
            display: flex;
            flex-direction: column;
        }
    `);customElements.define("merch-sidenav-checkbox-group",m);var q="(max-width: 700px)",z="(max-width: 767px)",N="(max-width: 1199px)",f="(min-width: 1200px)",k="(min-width: 1600px)";window.matchMedia(z),window.matchMedia(`${f} and (not ${k})`),window.matchMedia(f),window.matchMedia(k);var V={catalog:"l"},P={catalog:"xl"},v=class extends c{constructor(){super(),l(this,"mobileDevice",new b(this,q)),l(this,"mobileAndTablet",new b(this,N)),this.open=!1,this.autoclose=!1,this.variant=null,this.closeModal=this.closeModal.bind(this),this.handleSelection=this.handleSelection.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(d,this.handleSelection)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(d,this.handleSelection)}firstUpdated(){let e=V[this.variant];if(e){let i=this.querySelector("merch-search sp-search");i&&i?.setAttribute("size",e)}let t=P[this.variant];t&&this.querySelectorAll("merch-sidenav-checkbox-group sp-checkbox").forEach(i=>{i.setAttribute("size",t)})}updated(){this.mobileAndTablet.matches?(this.modal=!0,this.style.padding=0,this.style.margin=0):(this.modal=!1,this.style.removeProperty("padding"),this.style.removeProperty("margin"),this.open&&this.closeModal())}get filters(){return this.querySelector("merch-sidenav-list")}get search(){return this.querySelector("merch-search")}render(){return this.mobileAndTablet.matches?this.asDialog:this.asAside}get asDialog(){if(!this.open)return h;let e=this.autoclose?h:o`<sp-link @click="${this.closeModal}"
                >${this.closeText||"Close"}</sp-link
            >`;return o`
            <sp-theme color="light" scale="medium">
                <sp-overlay type="modal" open @sp-closed=${this.closeModal}>
                    <sp-dialog-base
                        dismissable
                        underlay
                        no-divider
                        @close=${this.closeModal}
                    >
                        <div id="content">
                            <div id="sidenav">
                                <div>
                                    <h2>${this.sidenavTitle}</h2>
                                    <slot></slot>
                                </div>
                                ${e}
                            </div>
                        </div>
                    </sp-dialog-base>
                </sp-overlay>
            </sp-theme>
        `}get asAside(){return o`<sp-theme  color="light" scale="medium"
            ><h2>${this.sidenavTitle}</h2>
            <slot></slot
        ></sp-theme>`}get dialog(){return this.shadowRoot.querySelector("sp-dialog-base")}handleSelection(){this.autoclose&&this.closeModal()}closeModal(){this.open=!1,document.querySelector("body")?.classList.remove("merch-modal")}showModal(){this.open=!0,document.querySelector("body")?.classList.add("merch-modal")}};l(v,"properties",{sidenavTitle:{type:String},closeText:{type:String,attribute:"close-text"},modal:{type:Boolean,reflect:!0},open:{type:Boolean,state:!0,reflect:!0},autoclose:{type:Boolean,attribute:"autoclose",reflect:!0}}),l(v,"styles",u`
        :host {
            --merch-sidenav-padding: 16px;
            --merch-sidenav-collection-gap: 30px;
            /* Title */
            --merch-sidenav-title-font-size: 12px;
            --merch-sidenav-title-font-weight: 400;
            --merch-sidenav-title-line-height: 16px;
            --merch-sidenav-title-color: var(--spectrum-gray-700, #464646);
            --merch-sidenav-title-padding: 6px 12px 16px;
            /* Search */
            --merch-sidenav-search-gap: 10px;
            /* List */
            --merch-sidenav-list-gap: 0;
            --merch-sidenav-list-title-color: var(--spectrum-gray-700, #464646);
            --merch-sidenav-list-title-font-size: 14px;
            --merch-sidenav-list-title-font-weight: 400;
            --merch-sidenav-list-title-padding: 6px 12px 8px;
            --merch-sidenav-list-title-line-height: 18px;
            --merch-sidenav-item-height: unset;
            --merch-sidenav-item-inline-padding: 12px;
            --merch-sidenav-item-font-weight: 400;
            --merch-sidenav-item-font-size: 14px;
            --merch-sidenav-item-line-height: 18px;
            --merch-sidenav-item-label-top-margin: 6px;
            --merch-sidenav-item-label-bottom-margin: 8px;
            --merch-sidenav-item-icon-top-margin: 7px;
            --merch-sidenav-item-icon-gap: 8px;
            --merch-sidenav-item-selected-color: var(--spectrum-gray-800, #222222);
            --merch-sidenav-item-selected-background: var(--spectrum-gray-200, #E6E6E6);
            --merch-sidenav-list-item-gap: 4px;
            /* Checkbox group */
            --merch-sidenav-checkbox-group-title-font-size: 14px;
            --merch-sidenav-checkbox-group-title-font-weight: 400;
            --merch-sidenav-checkbox-group-title-line-height: 18px;
            --merch-sidenav-checkbox-group-title-color: var(--spectrum-gray-700, #464646);
            --merch-sidenav-checkbox-group-title-padding: 6px 0 8px;
            --merch-sidenav-checkbox-group-gap: 32px;
            --merch-sidenav-checkbox-group-padding: 0 12px;
            --merch-sidenav-checkbox-group-label-font-size: 17px;
            --merch-sidenav-checkbox-group-checkbox-spacing: 22px;
            --merch-sidenav-checkbox-group-label-gap: 13px;
            --merch-sidenav-checkbox-group-label-top-margin: 8px;
            --merch-sidenav-checkbox-group-height: 40px;
            /* Modal */
            --merch-sidenav-modal-close-font-size: 15px;
            --merch-sidenav-modal-close-line-height: 19px;
            --merch-sidenav-modal-close-gap: 10px;
            --merch-sidenav-modal-border-radius: 8px;
            --merch-sidenav-modal-padding: var(--merch-sidenav-padding);

            display: block;
            z-index: 2;
            padding: var(--merch-sidenav-padding);
            margin-right: var(--merch-sidenav-collection-gap);
        }

        ::slotted(merch-sidenav-list) {
            --mod-sidenav-min-height: var(--merch-sidenav-item-height);
            --mod-sidenav-inline-padding: var(--merch-sidenav-item-inline-padding);
            --mod-sidenav-top-level-font-weight: var(--merch-sidenav-item-font-weight);
            --mod-sidenav-top-level-font-size: var(--merch-sidenav-item-font-size);
            --mod-sidenav-top-level-line-height: var(--merch-sidenav-item-line-height);
            --mod-sidenav-top-to-label: var(--merch-sidenav-item-label-top-margin);
            --mod-sidenav-bottom-to-label: var(--merch-sidenav-item-label-bottom-margin);
            --mod-sidenav-top-to-icon: var(--merch-sidenav-item-icon-top-margin);
            --mod-sidenav-icon-spacing: var(--merch-sidenav-item-icon-gap);
            --mod-sidenav-content-color-default-selected: var(--merch-sidenav-item-selected-color);
            --mod-sidenav-item-background-default-selected: var(--merch-sidenav-item-selected-background);
            --mod-sidenav-gap: var(--merch-sidenav-list-item-gap);
        }

        ::slotted(merch-sidenav-checkbox-group) {
            --mod-checkbox-font-size: var(--merch-sidenav-checkbox-group-label-font-size);
            --mod-checkbox-spacing: var(--merch-sidenav-checkbox-group-checkbox-spacing);
            --mod-checkbox-text-to-control: var(--merch-sidenav-checkbox-group-label-gap);
            --mod-checkbox-top-to-text: var(--merch-sidenav-checkbox-group-label-top-margin);
            --mod-checkbox-height: var(--merch-sidenav-checkbox-group-height);
        }

        :host h2 {
            color: var(--merch-sidenav-title-color);
            font-size: var(--merch-sidenav-title-font-size);
            font-weight: var(--merch-sidenav-title-font-weight);
            padding: var(--merch-sidenav-title-padding);
            line-height: var(--merch-sidenav-title-line-height);
            margin: 0;
        }

        #content {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: baseline;
        }
        
        ::slotted(merch-search) {
            display: block;
            margin-bottom: var(--merch-sidenav-search-gap);
        }

        :host([modal]) ::slotted(merch-search) {
            display: none;
        }

        #sidenav {
            display: flex;
            flex-direction: column;
            max-width: 248px;
            overflow-y: auto;
            place-items: center;
            position: relative;
            width: 100%;
            border-radius: var(--merch-sidenav-modal-border-radius);
            padding: var(--merch-sidenav-modal-padding);
        }

        sp-dialog-base {
            --mod-modal-confirm-border-radius: var(--merch-sidenav-modal-border-radius);
            --mod-modal-max-height: 100dvh;
        }

        sp-dialog-base #sidenav {
            box-sizing: border-box;
            max-width: 300px;
            max-height: 95dvh;
            background: #ffffff 0% 0% no-repeat padding-box;
            box-shadow: 0px 1px 4px #00000026;
        }

        :host(:not([autoclose])) #sidenav h2 {
            margin-top: calc(var(--merch-sidenav-modal-close-gap) + var(--merch-sidenav-modal-close-line-height));
        }

        sp-link {
            position: absolute;
            top: 16px;
            right: 16px;
            font-size: var(--merch-sidenav-modal-close-font-size);
            line-height: var(--merch-sidenav-modal-close-line-height);
        }
    `);customElements.define("merch-sidenav",v);export{v as MerchSideNav};
