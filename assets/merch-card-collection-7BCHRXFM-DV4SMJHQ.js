import{D as ri,S as v,u as B,l as X,R as at}from"./chunk-65CJKWEM-B00goYti.js";import"./utils-EOEXLB4S-DacHn_aW.js";var ii=Object.defineProperty,ai=e=>{throw TypeError(e)},za=(e,t,r)=>t in e?ii(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$a=(e,t)=>{for(var r in t)ii(e,r,{get:t[r],enumerable:!0})},f=(e,t,r)=>za(e,typeof t!="symbol"?t+"":t,r),ir=(e,t,r)=>t.has(e)||ai("Cannot "+r),k=(e,t,r)=>(ir(e,t,"read from private field"),r?r.call(e):t.get(e)),W=(e,t,r)=>t.has(e)?ai("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),K=(e,t,r,i)=>(ir(e,t,"write to private field"),t.set(e,r),r),ni=(e,t,r)=>(ir(e,t,"access private method"),r),ge="(max-width: 767px)",pe="(max-width: 1199px)",Q="(min-width: 768px)",$="(min-width: 1200px)",Ee="(min-width: 1600px)",si={matchMobile:window.matchMedia(ge),matchDesktop:window.matchMedia(`${$} and (not ${Ee})`),matchDesktopOrUp:window.matchMedia($),matchLargeDesktop:window.matchMedia(Ee),get isMobile(){return this.matchMobile.matches},get isDesktop(){return this.matchDesktop.matches},get isDesktopOrUp(){return this.matchDesktopOrUp.matches}},M=si;function je(){return si.isDesktop}var Sr=class{constructor(e,t){this.key=Symbol("match-media-key"),this.matches=!1,this.host=e,this.host.addController(this),this.media=window.matchMedia(t),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),e.addController(this)}hostConnected(){var e;(e=this.media)==null||e.addEventListener("change",this.onChange)}hostDisconnected(){var e;(e=this.media)==null||e.removeEventListener("change",this.onChange)}onChange(e){this.matches!==e.matches&&(this.matches=e.matches,this.host.requestUpdate(this.key,!this.matches))}},Cr="hashchange";function Fa(e=window.location.hash){let t=[],r=e.replace(/^#/,"").split("&");for(let i of r){let[a,n=""]=i.split("=");a&&t.push([a,decodeURIComponent(n.replace(/\+/g," "))])}return Object.fromEntries(t)}function Ve(e){let t=new URLSearchParams(window.location.hash.slice(1));Object.entries(e).forEach(([a,n])=>{n?t.set(a,n):t.delete(a)}),t.sort();let r=t.toString();if(r===window.location.hash)return;let i=window.scrollY||document.documentElement.scrollTop;window.location.hash=r,window.scrollTo(0,i)}function Ga(e){let t=()=>{if(window.location.hash&&!window.location.hash.includes("="))return;let r=Fa(window.location.hash);e(r)};return t(),window.addEventListener(Cr,t),()=>{window.removeEventListener(Cr,t)}}var oi={};$a(oi,{CLASS_NAME_FAILED:()=>xi,CLASS_NAME_HIDDEN:()=>ja,CLASS_NAME_PENDING:()=>yi,CLASS_NAME_RESOLVED:()=>wi,CheckoutWorkflow:()=>on,CheckoutWorkflowStep:()=>ne,Commitment:()=>ze,ERROR_MESSAGE_BAD_REQUEST:()=>Ei,ERROR_MESSAGE_MISSING_LITERALS_URL:()=>an,ERROR_MESSAGE_OFFER_NOT_FOUND:()=>Ai,EVENT_AEM_ERROR:()=>vi,EVENT_AEM_LOAD:()=>fi,EVENT_MAS_ERROR:()=>bi,EVENT_MAS_READY:()=>rn,EVENT_MERCH_ADDON_AND_QUANTITY_UPDATE:()=>en,EVENT_MERCH_CARD_ACTION_MENU_TOGGLE:()=>pi,EVENT_MERCH_CARD_COLLECTION_LITERALS_CHANGED:()=>ue,EVENT_MERCH_CARD_COLLECTION_SHOWMORE:()=>ui,EVENT_MERCH_CARD_COLLECTION_SIDENAV_ATTACHED:()=>nt,EVENT_MERCH_CARD_COLLECTION_SORT:()=>mi,EVENT_MERCH_CARD_QUANTITY_CHANGE:()=>Ja,EVENT_MERCH_OFFER_READY:()=>Wa,EVENT_MERCH_OFFER_SELECT_READY:()=>Ka,EVENT_MERCH_QUANTITY_SELECTOR_CHANGE:()=>$e,EVENT_MERCH_SEARCH_CHANGE:()=>tn,EVENT_MERCH_SIDENAV_SELECT:()=>gi,EVENT_MERCH_STOCK_CHANGE:()=>Qa,EVENT_MERCH_STORAGE_CHANGE:()=>Za,EVENT_OFFER_SELECTED:()=>Xa,EVENT_TYPE_FAILED:()=>Ti,EVENT_TYPE_READY:()=>ci,EVENT_TYPE_RESOLVED:()=>Si,Env:()=>xe,FF_DEFAULTS:()=>_e,HEADER_X_REQUEST_ID:()=>ar,LOG_NAMESPACE:()=>Ci,Landscape:()=>Fe,MARK_DURATION_SUFFIX:()=>Oi,MARK_START_SUFFIX:()=>Ri,MODAL_TYPE_3_IN_1:()=>dt,NAMESPACE:()=>qa,PARAM_AOS_API_KEY:()=>nn,PARAM_ENV:()=>Li,PARAM_LANDSCAPE:()=>Pi,PARAM_MAS_PREVIEW:()=>ki,PARAM_WCS_API_KEY:()=>sn,PROVIDER_ENVIRONMENT:()=>Hi,SELECTOR_MAS_CHECKOUT_LINK:()=>li,SELECTOR_MAS_ELEMENT:()=>hi,SELECTOR_MAS_INLINE_PRICE:()=>me,SELECTOR_MAS_SP_BUTTON:()=>Ya,SELECTOR_MAS_UPT_LINK:()=>di,SORT_ORDER:()=>re,STATE_FAILED:()=>oe,STATE_PENDING:()=>be,STATE_RESOLVED:()=>le,TAG_NAME_SERVICE:()=>Va,TEMPLATE_PRICE:()=>cn,TEMPLATE_PRICE_ANNUAL:()=>dn,TEMPLATE_PRICE_LEGAL:()=>nr,TEMPLATE_PRICE_STRIKETHROUGH:()=>ln,Term:()=>ie,WCS_PROD_URL:()=>_i,WCS_STAGE_URL:()=>Mi});var ze=Object.freeze({MONTH:"MONTH",YEAR:"YEAR",TWO_YEARS:"TWO_YEARS",THREE_YEARS:"THREE_YEARS",PERPETUAL:"PERPETUAL",TERM_LICENSE:"TERM_LICENSE",ACCESS_PASS:"ACCESS_PASS",THREE_MONTHS:"THREE_MONTHS",SIX_MONTHS:"SIX_MONTHS"}),ie=Object.freeze({ANNUAL:"ANNUAL",MONTHLY:"MONTHLY",TWO_YEARS:"TWO_YEARS",THREE_YEARS:"THREE_YEARS",P1D:"P1D",P1Y:"P1Y",P3Y:"P3Y",P10Y:"P10Y",P15Y:"P15Y",P3D:"P3D",P7D:"P7D",P30D:"P30D",HALF_YEARLY:"HALF_YEARLY",QUARTERLY:"QUARTERLY"}),qa="merch",ja="hidden",ci="wcms:commerce:ready",Va="mas-commerce-service",me='span[is="inline-price"][data-wcs-osi]',li='a[is="checkout-link"][data-wcs-osi],button[is="checkout-button"][data-wcs-osi]',Ya="sp-button[data-wcs-osi]",di='a[is="upt-link"]',hi=`${me},${li},${di}`,Wa="merch-offer:ready",Ka="merch-offer-select:ready",pi="merch-card:action-menu-toggle",Xa="merch-offer:selected",Qa="merch-stock:change",Za="merch-storage:change",$e="merch-quantity-selector:change",Ja="merch-card-quantity:change",en="merch-modal:addon-and-quantity-update",tn="merch-search:change",mi="merch-card-collection:sort",ue="merch-card-collection:literals-changed",nt="merch-card-collection:sidenav-attached",ui="merch-card-collection:showmore",gi="merch-sidenav:select",fi="aem:load",vi="aem:error",rn="mas:ready",bi="mas:error",xi="placeholder-failed",yi="placeholder-pending",wi="placeholder-resolved",Ei="Bad WCS request",Ai="Commerce offer not found",an="Literals URL not provided",Ti="mas:failed",Si="mas:resolved",Ci="mas/commerce",ki="mas.preview",Li="commerce.env",Pi="commerce.landscape",nn="commerce.aosKey",sn="commerce.wcsKey",_i="https://www.adobe.com/web_commerce_artifact",Mi="https://www.stage.adobe.com/web_commerce_artifact_stage",oe="failed",be="pending",le="resolved",Fe={DRAFT:"DRAFT",PUBLISHED:"PUBLISHED"},ar="X-Request-Id",ne=Object.freeze({SEGMENTATION:"segmentation",BUNDLE:"bundle",COMMITMENT:"commitment",RECOMMENDATION:"recommendation",EMAIL:"email",PAYMENT:"payment",CHANGE_PLAN_TEAM_PLANS:"change-plan/team-upgrade/plans",CHANGE_PLAN_TEAM_PAYMENT:"change-plan/team-upgrade/payment"}),on="UCv3",xe=Object.freeze({STAGE:"STAGE",PRODUCTION:"PRODUCTION",LOCAL:"LOCAL"}),Hi={PRODUCTION:"PRODUCTION"},dt={TWP:"twp",D2P:"d2p",CRM:"crm"},Ri=":start",Oi=":duration",cn="price",ln="price-strikethrough",dn="annual",nr="legal",_e="mas-ff-defaults",re={alphabetical:"alphabetical",authored:"authored"},hn="mas-commerce-service",Ye=(e,t)=>e?.querySelector(`[slot="${t}"]`)?.textContent?.trim();function st(e,t={},r=null,i=null){let a=i?document.createElement(e,{is:i}):document.createElement(e);r instanceof HTMLElement?a.appendChild(r):a.innerHTML=r;for(let[n,s]of Object.entries(t))a.setAttribute(n,s);return a}function Ni(e){return`startTime:${e.startTime.toFixed(2)}|duration:${e.duration.toFixed(2)}`}function kr(){return window.matchMedia("(max-width: 1024px)").matches}function _t(){return document.getElementsByTagName(hn)?.[0]}function We(e){let t=window.getComputedStyle(e);return e.offsetHeight+parseFloat(t.marginTop)+parseFloat(t.marginBottom)}var Re,Bi=class Mt{constructor(t){f(this,"card"),W(this,Re),this.card=t,this.insertVariantStyle()}getContainer(){return K(this,Re,k(this,Re)??this.card.closest('merch-card-collection, [class*="-merch-cards"]')??this.card.parentElement),k(this,Re)}insertVariantStyle(){if(!Mt.styleMap[this.card.variant]){Mt.styleMap[this.card.variant]=!0;let t=document.createElement("style");t.innerHTML=this.getGlobalCSS(),document.head.appendChild(t)}}updateCardElementMinHeight(t,r){if(!t)return;let i=`--consonant-merch-card-${this.card.variant}-${r}-height`,a=Math.max(0,parseInt(window.getComputedStyle(t).height)||0),n=parseInt(this.getContainer().style.getPropertyValue(i))||0;a>n&&this.getContainer().style.setProperty(i,`${a}px`)}get badge(){let t;if(!(!this.card.badgeBackgroundColor||!this.card.badgeColor||!this.card.badgeText))return this.evergreen&&(t=`border: 1px solid ${this.card.badgeBackgroundColor}; border-right: none;`),v`
            <div
                id="badge"
                class="${this.card.variant}-badge"
                style="background-color: ${this.card.badgeBackgroundColor};
                color: ${this.card.badgeColor};
                ${t}"
            >
                ${this.card.badgeText}
            </div>
        `}get cardImage(){return v` <div class="image">
            <slot name="bg-image"></slot>
            ${this.badge}
        </div>`}getGlobalCSS(){return""}get theme(){return document.querySelector("sp-theme")}get evergreen(){return this.card.classList.contains("intro-pricing")}get promoBottom(){return this.card.classList.contains("promo-bottom")}get headingSelector(){return'[slot="heading-xs"]'}get secureLabel(){return this.card.secureLabel?v`<span class="secure-transaction-label"
                >${this.card.secureLabel}</span
            >`:B}get secureLabelFooter(){return v`<footer>${this.secureLabel}<slot name="footer"></slot></footer>`}async adjustTitleWidth(){let t=this.card.getBoundingClientRect().width,r=this.card.badgeElement?.getBoundingClientRect().width||0;t===0||r===0||this.card.style.setProperty("--consonant-merch-card-heading-xs-max-width",`${Math.round(t-r-16)}px`)}async postCardUpdateHook(){}connectedCallbackHook(){}disconnectedCallbackHook(){}syncHeights(){}renderLayout(){}get aemFragmentMapping(){return zi(this.card.variant)}};Re=new WeakMap,f(Bi,"styleMap",{});var Z=Bi,pn=`
:root {
    --consonant-merch-card-catalog-width: 302px;
    --consonant-merch-card-catalog-icon-size: 40px;
}

.collection-container.catalog {
    --merch-card-collection-card-min-height: 330px;
    --merch-card-collection-card-width: var(--consonant-merch-card-catalog-width);
}

merch-sidenav.catalog {
    --merch-sidenav-title-font-size: 15px;
    --merch-sidenav-title-font-weight: 500;
    --merch-sidenav-title-line-height: 19px;
    --merch-sidenav-title-color: rgba(70, 70, 70, 0.87);
    --merch-sidenav-title-padding: 8px 15px 21px;
    --merch-sidenav-item-height: 40px;
    --merch-sidenav-item-inline-padding: 15px;
    --merch-sidenav-item-font-weight: 700;
    --merch-sidenav-item-font-size: 17px;
    --merch-sidenav-item-line-height: normal;
    --merch-sidenav-item-label-top-margin: 8px;
    --merch-sidenav-item-label-bottom-margin: 11px;
    --merch-sidenav-item-icon-top-margin: 11px;
    --merch-sidenav-item-icon-gap: 13px;
    --merch-sidenav-item-selected-background: var(--spectrum-gray-300, #D5D5D5);
    --merch-sidenav-list-item-gap: 5px;
    --merch-sidenav-checkbox-group-padding: 0 15px;
    --merch-sidenav-modal-border-radius: 0;
}

merch-sidenav.catalog merch-sidenav-checkbox-group {
    border: none;
}

merch-sidenav.catalog merch-sidenav-list:not(:first-of-type) {
    --merch-sidenav-list-gap: 32px;
}

.one-merch-card.catalog,
.two-merch-cards.catalog,
.three-merch-cards.catalog,
.four-merch-cards.catalog {
    --merch-card-collection-card-width: var(--consonant-merch-card-catalog-width);
}

.collection-container.catalog merch-sidenav {
    --merch-sidenav-gap: 10px;
}

merch-card-collection-header.catalog {
    --merch-card-collection-header-row-gap: var(--consonant-merch-spacing-xs);
    --merch-card-collection-header-search-max-width: 244px;
}

@media screen and ${ge} {
    merch-card-collection-header.catalog {
        --merch-card-collection-header-columns: min-content auto;
    }
}

@media screen and ${Q} {
    merch-card-collection-header.catalog {
        --merch-card-collection-header-column-gap: 16px;
    }
}

@media screen and ${$} {
    :root {
        --consonant-merch-card-catalog-width: 276px;
    }

    merch-card-collection-header.catalog {
        --merch-card-collection-header-result-font-size: 17px;
    }
}

merch-card[variant="catalog"] [slot="action-menu-content"] {
  background-color: #000;
  color: var(--color-white, #fff);
  font-size: var(--consonant-merch-card-body-xs-font-size);
  width: fit-content;
  padding: var(--consonant-merch-spacing-xs);
  border-radius: var(--consonant-merch-spacing-xxxs);
  position: absolute;
  top: 55px;
  right: 15px;
  line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul {
  padding-left: 0;
  padding-bottom: var(--consonant-merch-spacing-xss);
  margin-top: 0;
  margin-bottom: 0;
  list-style-position: inside;
  list-style-type: '• ';
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul li {
  padding-left: 0;
  line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul li p {
  display: inline;
}

merch-card[variant="catalog"] [slot="action-menu-content"] ::marker {
  margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] p {
  color: var(--color-white, #fff);
  margin: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] a {
  color: var(--consonant-merch-card-background-color);
  text-decoration: underline;
}

merch-card[variant="catalog"] .payment-details {
  font-size: var(--consonant-merch-card-body-font-size);
  font-style: italic;
  font-weight: 400;
  line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="footer"] .spectrum-Link--primary {
  font-size: 15px;
  font-weight: 700;
}`,mn={badge:!0,ctas:{slot:"footer",size:"m"},description:{tag:"div",slot:"body-xs"},mnemonics:{size:"l"},prices:{tag:"h3",slot:"heading-xs"},shortDescription:{tag:"div",slot:"action-menu-content",attributes:{tabindex:"0"}},size:["wide","super-wide"],title:{tag:"h3",slot:"heading-xs"}},Ht=class extends Z{constructor(e){super(e),f(this,"dispatchActionMenuToggle",()=>{this.card.dispatchEvent(new CustomEvent(pi,{bubbles:!0,composed:!0,detail:{card:this.card.name,type:"action-menu"}}))}),f(this,"toggleActionMenu",t=>{!this.actionMenuContentSlot||!t||t.type!=="click"&&t.code!=="Space"&&t.code!=="Enter"||(t.preventDefault(),t.stopPropagation(),this.setMenuVisibility(!this.isMenuOpen()))}),f(this,"toggleActionMenuFromCard",t=>{t?.type,this.card.blur(),this.setIconVisibility(!1),this.actionMenuContentSlot&&t?.type==="mouseleave"&&this.setMenuVisibility(!1)}),f(this,"showActionMenuOnHover",()=>{this.actionMenu&&this.setIconVisibility(!0)}),f(this,"hideActionMenu",()=>{this.setMenuVisibility(!1),this.setIconVisibility(!1)}),f(this,"hideActionMenuOnBlur",t=>{t.relatedTarget===this.actionMenu||this.actionMenu?.contains(t.relatedTarget)||this.slottedContent?.contains(t.relatedTarget)||(this.isMenuOpen()&&this.setMenuVisibility(!1),this.card.contains(t.relatedTarget)||this.setIconVisibility(!1))}),f(this,"handleCardFocusOut",t=>{t.relatedTarget===this.actionMenu||this.actionMenu?.contains(t.relatedTarget)||t.relatedTarget===this.card||(this.slottedContent&&(t.target===this.slottedContent||this.slottedContent.contains(t.target))&&(this.slottedContent.contains(t.relatedTarget)||this.setMenuVisibility(!1)),!this.card.contains(t.relatedTarget)&&!this.isMenuOpen()&&this.setIconVisibility(!1))}),f(this,"handleKeyDown",t=>{(t.key==="Escape"||t.key==="Esc")&&(t.preventDefault(),this.hideActionMenu(),this.actionMenu?.focus())})}get actionMenu(){return this.card.shadowRoot.querySelector(".action-menu")}get actionMenuContentSlot(){return this.card.shadowRoot.querySelector('slot[name="action-menu-content"]')}get slottedContent(){return this.card.querySelector('[slot="action-menu-content"]')}setIconVisibility(e){kr()&&this.card.actionMenu||(this.actionMenu?.classList.toggle("hidden",!e),this.actionMenu?.classList.toggle("always-visible",e))}setMenuVisibility(e){this.actionMenuContentSlot?.classList.toggle("hidden",!e),this.setAriaExpanded(this.actionMenu,e.toString()),e&&(this.dispatchActionMenuToggle(),setTimeout(()=>{let t=this.slottedContent?.querySelector("a");t&&t.focus()},0))}isMenuOpen(){return!this.actionMenuContentSlot?.classList.contains("hidden")}renderLayout(){return v` <div class="body">
                <div class="top-section">
                    <slot name="icons"></slot> ${this.badge}
                    <div
                        class="action-menu
                ${kr()&&this.card.actionMenu?"always-visible":"hidden"}"
                        @click="${this.toggleActionMenu}"
                        @keypress="${this.toggleActionMenu}"
                        @focus="${this.showActionMenuOnHover}"
                        @blur="${this.hideActionMenuOnBlur}"
                        tabindex="0"
                        aria-expanded="false"
                        role="button"
                    >${this.card.actionMenuLabel} - ${this.card.title}</div>
                </div>
                <slot
                    name="action-menu-content"
                    class="action-menu-content
            ${this.card.actionMenuContent?"":"hidden"}"
                    >${this.card.actionMenuContent}
                </slot>
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                ${this.promoBottom?"":v`<slot name="promo-text"></slot
                          ><slot name="callout-content"></slot>`}
                <slot name="body-xs"></slot>
                ${this.promoBottom?v`<slot name="promo-text"></slot
                          ><slot name="callout-content"></slot>`:""}
            </div>
            ${this.secureLabelFooter}
            <slot></slot>`}getGlobalCSS(){return pn}setAriaExpanded(e,t){e.setAttribute("aria-expanded",t)}connectedCallbackHook(){this.card.addEventListener("mouseenter",this.showActionMenuOnHover),this.card.addEventListener("mouseleave",this.toggleActionMenuFromCard),this.card.addEventListener("focusin",this.showActionMenuOnHover),this.card.addEventListener("focusout",this.handleCardFocusOut),this.card.addEventListener("keydown",this.handleKeyDown)}disconnectedCallbackHook(){this.card.removeEventListener("mouseenter",this.showActionMenuOnHover),this.card.removeEventListener("mouseleave",this.toggleActionMenuFromCard),this.card.removeEventListener("focusin",this.showActionMenuOnHover),this.card.removeEventListener("focusout",this.handleCardFocusOut),this.card.removeEventListener("keydown",this.handleKeyDown)}};f(Ht,"variantStyle",X`
        :host([variant='catalog']) {
            min-height: 330px;
            width: var(--consonant-merch-card-catalog-width);
        }

        .body .catalog-badge {
            display: flex;
            height: fit-content;
            flex-direction: column;
            width: fit-content;
            max-width: 140px;
            border-radius: 5px;
            position: relative;
            top: 0;
            margin-left: var(--consonant-merch-spacing-xxs);
            box-sizing: border-box;
        }
    `);var un=`
:root {
  --consonant-merch-card-image-width: 300px;
}

.one-merch-card.image,
.two-merch-cards.image,
.three-merch-cards.image,
.four-merch-cards.image {
  grid-template-columns: var(--consonant-merch-card-image-width);
}

@media screen and ${Q} {
  .two-merch-cards.image,
  .three-merch-cards.image,
  .four-merch-cards.image {
      grid-template-columns: repeat(2, var(--consonant-merch-card-image-width));
  }
}

@media screen and ${$} {
  :root {
    --consonant-merch-card-image-width: 378px;
    --consonant-merch-card-image-width-4clm: 276px;
  }
    
  .three-merch-cards.image {
      grid-template-columns: repeat(3, var(--consonant-merch-card-image-width));
  }

  .four-merch-cards.image {
      grid-template-columns: repeat(4, var(--consonant-merch-card-image-width-4clm));
  }
}
`,gn=class extends Z{constructor(e){super(e)}getGlobalCSS(){return un}renderLayout(){return v`${this.cardImage}
    <div class="body">
        <slot name="icons"></slot>
        <slot name="heading-xs"></slot>
        <slot name="body-xxs"></slot>
        ${this.promoBottom?v`<slot name="body-xs"></slot><slot name="promo-text"></slot>`:v`<slot name="promo-text"></slot><slot name="body-xs"></slot>`}
    </div>
    ${this.evergreen?v`
              <div
                  class="detail-bg-container"
                  style="background: ${this.card.detailBg}"
              >
                  <slot name="detail-bg"></slot>
              </div>
          `:v`
              <hr />
              ${this.secureLabelFooter}
          `}`}},fn=`
:root {
  --consonant-merch-card-inline-heading-width: 300px;
}

.one-merch-card.inline-heading,
.two-merch-cards.inline-heading,
.three-merch-cards.inline-heading,
.four-merch-cards.inline-heading {
    grid-template-columns: var(--consonant-merch-card-inline-heading-width);
}

@media screen and ${Q} {
  .two-merch-cards.inline-heading,
  .three-merch-cards.inline-heading,
  .four-merch-cards.inline-heading {
      grid-template-columns: repeat(2, var(--consonant-merch-card-inline-heading-width));
  }
}

@media screen and ${$} {
  :root {
    --consonant-merch-card-inline-heading-width: 378px;
  }

  .three-merch-cards.inline-heading,
  .four-merch-cards.inline-heading {
      grid-template-columns: repeat(3, var(--consonant-merch-card-inline-heading-width));
  }
}

@media screen and ${Ee} {
  .four-merch-cards.inline-heading {
      grid-template-columns: repeat(4, var(--consonant-merch-card-inline-heading-width));
  }
}
`,vn=class extends Z{constructor(e){super(e)}getGlobalCSS(){return fn}renderLayout(){return v` ${this.badge}
    <div class="body">
        <div class="top-section">
            <slot name="icons"></slot>
            <slot name="heading-xs"></slot>
        </div>
        <slot name="body-xs"></slot>
    </div>
    ${this.card.customHr?"":v`<hr />`} ${this.secureLabelFooter}`}},bn=`
  :root {
    --consonant-merch-card-mini-compare-chart-icon-size: 32px;
    --consonant-merch-card-mini-compare-border-color: #E9E9E9;
    --consonant-merch-card-mini-compare-mobile-cta-font-size: 16px;
    --consonant-merch-card-mini-compare-mobile-cta-width: 75px;
    --consonant-merch-card-mini-compare-badge-mobile-max-width: 50px;
    --consonant-merch-card-mini-compare-mobile-price-font-size: 32px;
    --consonant-merch-card-card-mini-compare-mobile-background-color: #F8F8F8;
    --consonant-merch-card-card-mini-compare-mobile-spacing-xs: 12px;
  }
  
  merch-card[variant="mini-compare-chart"] [slot="heading-m"] {
    padding: 0 var(--consonant-merch-spacing-s) 0;
  }

  merch-card[variant="mini-compare-chart"] merch-addon {
    box-sizing: border-box;
  }

  merch-card[variant="mini-compare-chart"] merch-addon {
    padding-left: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 8px;
    border-radius: .5rem;
    font-family: var(--merch-body-font-family, 'Adobe Clean');
    margin: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) .5rem;
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"] merch-addon [is="inline-price"] {
    min-height: unset;
    font-weight: bold;
    pointer-events: none;
  }

  merch-card[variant="mini-compare-chart"] merch-addon::part(checkbox) {
      height: 18px;
      width: 18px;
      margin: 14px 12px 0 8px;
  }

  merch-card[variant="mini-compare-chart"] merch-addon::part(label) {
    display: flex;
    flex-direction: column;
    padding: 8px 4px 8px 0;
    width: 100%;
  }

  merch-card[variant="mini-compare-chart"] [is="inline-price"] {
    display: inline-block;
    min-height: 30px;
    min-width: 1px;
  }

  merch-card[variant="mini-compare-chart"] [slot="callout-content"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0px;
  }

  merch-card[variant="mini-compare-chart"] [slot="body-m"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
  }

  merch-card[variant="mini-compare-chart"] [slot="callout-content"] [is="inline-price"] {
    min-height: unset;
  }

  merch-card[variant="mini-compare-chart"] [slot="price-commitment"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    padding: 0 var(--consonant-merch-spacing-s);
    font-style: italic;
  }

  merch-card[variant="mini-compare-chart"] [slot="price-commitment"] a {
    display: inline-block;
    height: 27px;
  }

  merch-card[variant="mini-compare-chart"] [slot="offers"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
  }

  merch-card[variant="mini-compare-chart"] [slot="body-xxs"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0;    
  }

  merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0;
  }

  merch-card[variant="mini-compare-chart"] [slot="promo-text"] a {
    text-decoration: underline;
  }

  merch-card[variant="mini-compare-chart"] .action-area {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    gap: var(--consonant-merch-spacing-xxs);
  }

  merch-card[variant="mini-compare-chart"] [slot="footer-rows"] ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon {
    display: flex;
    place-items: center;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon img {
    max-width: initial;
    width: var(--consonant-merch-card-mini-compare-chart-icon-size);
    height: var(--consonant-merch-card-mini-compare-chart-icon-size);
  }

  merch-card[variant="mini-compare-chart"] .footer-rows-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-color: var(--merch-color-grey-60);
    font-weight: 700;
    line-height: var(--consonant-merch-card-body-xs-line-height);
    font-size: var(--consonant-merch-card-body-s-font-size);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell {
    border-top: 1px solid var(--consonant-merch-card-border-color);
    display: flex;
    gap: var(--consonant-merch-spacing-xs);
    justify-content: start;
    place-items: center;
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
    margin-block: 0px;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon-checkmark img {
    max-width: initial;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon-checkmark {
    display: flex;
    align-items: center;
    height: 20px;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-checkmark {
    display: flex;
    gap: var(--consonant-merch-spacing-xs);
    justify-content: start;
    align-items: flex-start;
    margin-block: var(--consonant-merch-spacing-xxxs);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description-checkmark {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    font-weight: 400;
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
    font-weight: 400;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description p {
    color: var(--merch-color-grey-80);
    vertical-align: bottom;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description a {
    color: var(--color-accent);
  }

  merch-card[variant="mini-compare-chart"] .toggle-icon {
    display: flex;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    text-align: inherit;
    font: inherit;
    border-radius: 0;
  }

  merch-card[variant="mini-compare-chart"] .checkmark-copy-container {
    display: none;
  }

  merch-card[variant="mini-compare-chart"] .checkmark-copy-container.open {
    display: block;
    padding-block-start: var(--consonant-merch-card-card-mini-compare-mobile-spacing-xs);
    padding-block-end: 4px;
  }
  
.one-merch-card.mini-compare-chart {
  grid-template-columns: var(--consonant-merch-card-mini-compare-chart-wide-width);
  gap: var(--consonant-merch-spacing-xs);
}

.two-merch-cards.mini-compare-chart,
.three-merch-cards.mini-compare-chart,
.four-merch-cards.mini-compare-chart {
  grid-template-columns: repeat(2, var(--consonant-merch-card-mini-compare-chart-width));
  gap: var(--consonant-merch-spacing-xs);
}

/* bullet list */
merch-card[variant="mini-compare-chart"].bullet-list {
  border-radius: var(--consonant-merch-spacing-xxs);
}

merch-card[variant="mini-compare-chart"].bullet-list:not(.badge-card):not(.mini-compare-chart-badge) {
  border-color: var(--consonant-merch-card-mini-compare-border-color);
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m"] {
  padding: var(--consonant-merch-spacing-xxs) var(--consonant-merch-spacing-xs);
  font-size: var(--consonant-merch-card-heading-xxs-font-size);
  line-height: var(--consonant-merch-card-heading-xxs-line-height);
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"],
merch-card[variant="mini-compare-chart"].bullet-list [slot="price-commitment"] {
  padding: 0 var(--consonant-merch-spacing-xs);
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"] .starting-at {
  font-size: var(--consonant-merch-card-body-s-font-size);
  line-height: var(--consonant-merch-card-body-s-line-height);
  font-weight: 400;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"] .price {
  font-size: var(--consonant-merch-card-heading-l-font-size);
  line-height: 35px;
  font-weight: 800;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"] .price-alternative:has(+ .price-annual-prefix) {
  margin-bottom: 4px;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"] [data-template="strikethrough"] {
  min-height: 24px;
  margin-bottom: 2px;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"] [data-template="strikethrough"],
merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"] .price-strikethrough {
  font-size: var(--consonant-merch-card-body-s-font-size);
  line-height: var(--consonant-merch-card-body-s-line-height);
  font-weight: 700;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"].annual-price-new-line > span[is="inline-price"] > .price-annual, 
merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"].annual-price-new-line > span[is="inline-price"] > .price-annual-prefix::after, 
merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m-price"].annual-price-new-line > span[is="inline-price"] >.price-annual-suffix {
  font-size: var(--consonant-merch-card-body-s-font-size);
  line-height: var(--consonant-merch-card-body-s-line-height);
  font-weight: 400;
  font-style: italic;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="body-xxs"] {
  padding: var(--consonant-merch-spacing-xxxs) var(--consonant-merch-spacing-xs) 0;
  font-size: var(--consonant-merch-card-body-s-font-size);
  line-height: var(--consonant-merch-card-body-s-line-height);
  font-weight: 400;
  letter-spacing: normal;
  font-style: italic;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="promo-text"] {
  padding: var(--consonant-merch-card-card-mini-compare-mobile-spacing-xs) var(--consonant-merch-spacing-xs) 0;
  font-size: var(--consonant-merch-card-body-s-font-size);
  line-height: var(--consonant-merch-card-body-s-line-height);
  font-weight: 700;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="promo-text"] a {
  font-weight: 400;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="body-m"] {
  padding: var(--consonant-merch-card-card-mini-compare-mobile-spacing-xs) var(--consonant-merch-spacing-xs) 0;
  font-size: var(--consonant-merch-card-body-s-font-size);
  line-height: var(--consonant-merch-card-body-s-line-height);
  font-weight: 400;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="body-m"] p:has(+ p) {
  margin-bottom: 8px;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="callout-content"] {
  padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs) 0px;
  margin: 0;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="callout-content"] > div > div {
  background-color: #D9D9D9;
}

merch-card[variant="mini-compare-chart"].bullet-list merch-addon {
  margin: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xxs);
}

merch-card[variant="mini-compare-chart"].bullet-list merch-addon [is="inline-price"] {
  font-weight: 400;
}

merch-card[variant="mini-compare-chart"].bullet-list footer {
  gap: var(--consonant-merch-spacing-xxs);
}

merch-card[variant="mini-compare-chart"].bullet-list .action-area {
  justify-content: flex-start;
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="footer-rows"] {
  background-color: var(--consonant-merch-card-card-mini-compare-mobile-background-color);
  border-radius: 0 0 var(--consonant-merch-spacing-xxs) var(--consonant-merch-spacing-xxs);
}

merch-card[variant="mini-compare-chart"].bullet-list [slot="price-commitment"] {
  padding: var(--consonant-merch-spacing-xxxs) var(--consonant-merch-spacing-xs) 0 var(--consonant-merch-spacing-xs);
  font-size: var(--consonant-merch-card-body-s-font-size);
  line-height: var(--consonant-merch-card-body-s-line-height);
}

/* mini compare mobile */ 
@media screen and ${ge} {
  :root {
    --consonant-merch-card-mini-compare-chart-width: 302px;
    --consonant-merch-card-mini-compare-chart-wide-width: 302px;
  }

  .two-merch-cards.mini-compare-chart,
  .three-merch-cards.mini-compare-chart,
  .four-merch-cards.mini-compare-chart {
    grid-template-columns: var(--consonant-merch-card-mini-compare-chart-width);
    gap: var(--consonant-merch-spacing-xs);
  }

  merch-card[variant="mini-compare-chart"] [slot="heading-m"] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot="heading-m-price"] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot="body-m"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }
  
  merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"] merch-addon {
    box-sizing: border-box;
  }
}

@media screen and ${pe} {
  merch-card[variant="mini-compare-chart"] [slot="heading-m"] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot="heading-m-price"] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot="body-m"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }
  
  merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"].bullet-list .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }
}
@media screen and ${Q} {
  :root {
    --consonant-merch-card-mini-compare-chart-width: 302px;
    --consonant-merch-card-mini-compare-chart-wide-width: 302px;
  }

  .two-merch-cards.mini-compare-chart {
    grid-template-columns: repeat(2, minmax(var(--consonant-merch-card-mini-compare-chart-width), var(--consonant-merch-card-mini-compare-chart-wide-width)));
    gap: var(--consonant-merch-spacing-m);
  }

  .three-merch-cards.mini-compare-chart,
  .four-merch-cards.mini-compare-chart {
      grid-template-columns: repeat(2, minmax(var(--consonant-merch-card-mini-compare-chart-width), var(--consonant-merch-card-mini-compare-chart-wide-width)));
  }

   merch-card[variant="mini-compare-chart"].bullet-list [slot="price-commitment"] {
    padding: var(--consonant-merch-spacing-xxxs) var(--consonant-merch-spacing-xs) 0 var(--consonant-merch-spacing-xs);
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
    font-weight: 400;
  }

  merch-card[variant="mini-compare-chart"].bullet-list [slot="footer-rows"] {
    padding: var(--consonant-merch-spacing-xs);
  }

  merch-card[variant="mini-compare-chart"].bullet-list .footer-rows-title {
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"].bullet-list .checkmark-copy-container.open {
    padding-block-start: var(--consonant-merch-spacing-xs);
    padding-block-end: 0;
  }

  merch-card[variant="mini-compare-chart"].bullet-list .footer-row-cell-checkmark {
    gap: var(--consonant-merch-spacing-xxs);
  }
}

/* desktop */
@media screen and ${$} {
  :root {
    --consonant-merch-card-mini-compare-chart-width: 378px;
    --consonant-merch-card-mini-compare-chart-wide-width: 484px;  
  }
  .one-merch-card.mini-compare-chart {
    grid-template-columns: var(--consonant-merch-card-mini-compare-chart-wide-width);
  }

  .two-merch-cards.mini-compare-chart {
    grid-template-columns: repeat(2, var(--consonant-merch-card-mini-compare-chart-wide-width));
    gap: var(--consonant-merch-spacing-m);
  }

  .three-merch-cards.mini-compare-chart,
  .four-merch-cards.mini-compare-chart {
    grid-template-columns: repeat(3, var(--consonant-merch-card-mini-compare-chart-width));
    gap: var(--consonant-merch-spacing-m);
  }
}

@media screen and ${Ee} {
  .four-merch-cards.mini-compare-chart {
      grid-template-columns: repeat(4, var(--consonant-merch-card-mini-compare-chart-width));
  }
}

merch-card[variant="mini-compare-chart"].bullet-list div[slot="footer-rows"]  {
  height: 100%;
}

merch-card .footer-row-cell:nth-child(1) {
  min-height: var(--consonant-merch-card-footer-row-1-min-height);
}

merch-card .footer-row-cell:nth-child(2) {
  min-height: var(--consonant-merch-card-footer-row-2-min-height);
}

merch-card .footer-row-cell:nth-child(3) {
  min-height: var(--consonant-merch-card-footer-row-3-min-height);
}

merch-card .footer-row-cell:nth-child(4) {
  min-height: var(--consonant-merch-card-footer-row-4-min-height);
}

merch-card .footer-row-cell:nth-child(5) {
  min-height: var(--consonant-merch-card-footer-row-5-min-height);
}

merch-card .footer-row-cell:nth-child(6) {
  min-height: var(--consonant-merch-card-footer-row-6-min-height);
}

merch-card .footer-row-cell:nth-child(7) {
  min-height: var(--consonant-merch-card-footer-row-7-min-height);
}

merch-card .footer-row-cell:nth-child(8) {
  min-height: var(--consonant-merch-card-footer-row-8-min-height);
}
`,xn=32,Rt=class extends Z{constructor(e){super(e),f(this,"getRowMinHeightPropertyName",t=>`--consonant-merch-card-footer-row-${t}-min-height`),f(this,"getMiniCompareFooter",()=>{let t=this.card.secureLabel?v`<slot name="secure-transaction-label">
              <span class="secure-transaction-label"
                  >${this.card.secureLabel}</span
              ></slot
          >`:v`<slot name="secure-transaction-label"></slot>`;return v`<footer>${t}<slot name="footer"></slot></footer>`}),this.updatePriceQuantity=this.updatePriceQuantity.bind(this)}connectedCallbackHook(){this.card.addEventListener($e,this.updatePriceQuantity)}disconnectedCallbackHook(){this.card.removeEventListener($e,this.updatePriceQuantity)}updatePriceQuantity({detail:e}){!this.mainPrice||!e?.option||(this.mainPrice.dataset.quantity=e.option)}getGlobalCSS(){return bn}adjustMiniCompareBodySlots(){if(this.card.getBoundingClientRect().width<=2)return;this.updateCardElementMinHeight(this.card.shadowRoot.querySelector(".top-section"),"top-section");let e=["heading-m","body-m","heading-m-price","body-xxs","price-commitment","offers","promo-text","callout-content"];this.card.classList.contains("bullet-list")&&e.push("footer-rows"),e.forEach(t=>this.updateCardElementMinHeight(this.card.shadowRoot.querySelector(`slot[name="${t}"]`),t)),this.updateCardElementMinHeight(this.card.shadowRoot.querySelector("footer"),"footer"),this.card.shadowRoot.querySelector(".mini-compare-chart-badge")?.textContent!==""&&this.getContainer().style.setProperty("--consonant-merch-card-mini-compare-chart-top-section-mobile-height","32px")}adjustMiniCompareFooterRows(){if(this.card.getBoundingClientRect().width===0)return;let e=this.card.querySelector('[slot="footer-rows"] ul');!e||!e.children||[...e.children].forEach((t,r)=>{let i=Math.max(xn,parseFloat(window.getComputedStyle(t).height)||0),a=parseFloat(this.getContainer().style.getPropertyValue(this.getRowMinHeightPropertyName(r+1)))||0;i>a&&this.getContainer().style.setProperty(this.getRowMinHeightPropertyName(r+1),`${i}px`)})}removeEmptyRows(){this.card.querySelectorAll(".footer-row-cell").forEach(e=>{let t=e.querySelector(".footer-row-cell-description");t&&!t.textContent.trim()&&e.remove()})}get mainPrice(){return this.card.querySelector(`[slot="heading-m-price"] ${me}[data-template="price"]`)}get headingMPriceSlot(){return this.card.shadowRoot.querySelector('slot[name="heading-m-price"]')?.assignedElements()[0]}toggleAddon(e){let t=this.mainPrice,r=this.headingMPriceSlot;if(!t&&r){let i=e?.getAttribute("plan-type"),a=null;if(e&&i&&(a=e.querySelector(`p[data-plan-type="${i}"]`)?.querySelector('span[is="inline-price"]')),this.card.querySelectorAll('p[slot="heading-m-price"]').forEach(n=>n.remove()),e.checked){if(a){let n=st("p",{class:"addon-heading-m-price-addon",slot:"heading-m-price"},a.innerHTML);this.card.appendChild(n)}}else{let n=st("p",{class:"card-heading",id:"free",slot:"heading-m-price"},"Free");this.card.appendChild(n)}}}async adjustAddon(){await this.card.updateComplete;let e=this.card.addon;if(!e)return;let t=this.mainPrice,r=this.card.planType;t&&(await t.onceSettled(),r=t.value?.[0]?.planType),r&&(e.planType=r,this.card.querySelector("merch-addon[plan-type]")?.updateComplete.then(()=>{this.updateCardElementMinHeight(this.card.shadowRoot.querySelector('slot[name="addon"]'),"addon")}))}renderLayout(){return v` <div class="top-section${this.badge?" badge":""}">
            <slot name="icons"></slot> ${this.badge}
        </div>
        <slot name="heading-m"></slot>
        ${this.card.classList.contains("bullet-list")?v`<slot name="heading-m-price"></slot>
          <slot name="price-commitment"></slot>
          <slot name="body-xxs"></slot>
          <slot name="promo-text"></slot>
          <slot name="body-m"></slot>
          <slot name="offers"></slot>`:v`<slot name="body-m"></slot>
          <slot name="heading-m-price"></slot>
          <slot name="body-xxs"></slot>
          <slot name="price-commitment"></slot>
          <slot name="offers"></slot>
          <slot name="promo-text"></slot>
          `}
        <slot name="callout-content"></slot>
        <slot name="addon"></slot>
        ${this.getMiniCompareFooter()}
        <slot name="footer-rows"><slot name="body-s"></slot></slot>`}async postCardUpdateHook(){await Promise.all(this.card.prices.map(e=>e.onceSettled())),await this.adjustAddon(),M.isMobile?this.removeEmptyRows():(this.adjustMiniCompareBodySlots(),this.adjustMiniCompareFooterRows())}};f(Rt,"variantStyle",X`
    :host([variant='mini-compare-chart']) > slot:not([name='icons']) {
        display: block;
    }

    :host([variant='mini-compare-chart'].bullet-list) > slot[name='heading-m-price'] {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    :host([variant='mini-compare-chart'].bullet-list) .mini-compare-chart-badge {
        padding: 2px 10px 3px 10px;
        font-size: var(--consonant-merch-card-body-xs-font-size);
        line-height: var(--consonant-merch-card-body-xs-line-height);
        border-radius: 7.11px 0 0 7.11px;
        font-weight: 700;
    }

    :host([variant='mini-compare-chart']) footer {
        min-height: var(--consonant-merch-card-mini-compare-chart-footer-height);
        padding: var(--consonant-merch-spacing-s);
    }

    :host([variant='mini-compare-chart'].bullet-list) footer {
        flex-flow: column nowrap;
        min-height: var(--consonant-merch-card-mini-compare-chart-footer-height);
        padding: var(--consonant-merch-spacing-xs);
    }

    /* mini-compare card  */
    :host([variant='mini-compare-chart']) .top-section {
        padding-top: var(--consonant-merch-spacing-s);
        padding-inline-start: var(--consonant-merch-spacing-s);
        height: var(--consonant-merch-card-mini-compare-chart-top-section-height);
    }

    :host([variant='mini-compare-chart'].bullet-list) .top-section {
        padding-top: var(--consonant-merch-spacing-xs);
        padding-inline-start: var(--consonant-merch-spacing-xs);
    }

    :host([variant='mini-compare-chart'].bullet-list) .secure-transaction-label {
      align-self: flex-start;
      flex: none;
      font-size: var(--consonant-merch-card-body-xxs-font-size);
      font-weight: 400;
      color: #505050;
    }

    @media screen and ${at(pe)} {
        [class*'-merch-cards'] :host([variant='mini-compare-chart']) footer {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
        }
    }

    @media screen and ${at($)} {
        :host([variant='mini-compare-chart']) footer {
            padding: var(--consonant-merch-spacing-xs)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s);
        }
    }

    :host([variant='mini-compare-chart']) slot[name='footer-rows'] {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    /* mini-compare card heights for the slots: heading-m, body-m, heading-m-price, price-commitment, offers, promo-text, footer */
    :host([variant='mini-compare-chart']) slot[name='heading-m'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-heading-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='body-m'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-body-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='heading-m-price'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-heading-m-price-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='body-xxs'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-body-xxs-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='price-commitment'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-price-commitment-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='offers'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-offers-height);
    }
    :host([variant='mini-compare-chart']) slot[name='promo-text'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-promo-text-height);
    }
    :host([variant='mini-compare-chart']) slot[name='callout-content'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-callout-content-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='addon'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-addon-height
        );
    }
    :host([variant='mini-compare-chart']:not(.bullet-list)) slot[name='footer-rows'] {
        justify-content: flex-start;
    }
  `);var yn=`
:root {
    --consonant-merch-card-plans-width: 302px;
    --consonant-merch-card-plans-students-width: 302px;
    --consonant-merch-card-plans-icon-size: 40px;
}

merch-card[variant^="plans"] {
    --merch-card-plans-heading-xs-min-height: 23px;
    --consonant-merch-card-callout-icon-size: 18px;
    width: var(--consonant-merch-card-plans-width);
}

merch-card[variant="plans-students"] {
    width: var(--consonant-merch-card-plans-students-width);
}

merch-card[variant^="plans"][size="wide"], merch-card[variant^="plans"][size="super-wide"] {
    width: auto;
}

merch-card[variant^="plans"] [slot="icons"] {
    --img-width: 41.5px;
}

merch-card[variant="plans-education"] [slot="body-xs"] span.price:not(.price-legal) {
    display: inline-block;
    font-size: var(--consonant-merch-card-heading-xs-font-size);
    font-weight: 700;
}

merch-card[variant="plans"] [slot="subtitle"] {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
}

merch-card[variant^="plans"] span.price-unit-type {
    display: block;
}

merch-card[variant^="plans"] .price-unit-type:not(.disabled)::before {
    content: "";
}
merch-card[variant^="plans"] [slot="callout-content"] span.price-unit-type,
merch-card[variant^="plans"] [slot="addon"] span.price-unit-type,
merch-card[variant^="plans"] .price.price-strikethrough span.price-unit-type,
merch-card[variant^="plans"] span.price-unit-type.disabled {
  display: inline; 
}
  
merch-card[variant^="plans"] [slot="heading-xs"] span.price.price-strikethrough,
merch-card[variant^="plans"] [slot="heading-m"] span.price.price-strikethrough,
merch-card[variant="plans-education"] [slot="body-xs"] span.price.price-strikethrough {
    font-size: var(--consonant-merch-card-heading-xxxs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
    font-weight: 700;
}

merch-card[variant^="plans"] [slot='heading-xs'],
merch-card[variant="plans-education"] span.heading-xs,
merch-card[variant="plans-education"] [slot="body-xs"] span.price:not(.price-strikethrough) {
    min-height: var(--merch-card-plans-heading-xs-min-height);
}

merch-card[variant="plans-education"] [slot="body-xs"] p:has(.heading-xs) {
    margin-bottom: 16x;
}

merch-card[variant="plans-education"] [slot="body-xs"] p:has(span[is="inline-price"]) {
    margin-bottom: 16px;
}

merch-card[variant^="plans"] span.text-l {
    display: block;
    font-size: 18px;
    line-height: 23px;
}

merch-card[variant="plans-education"] span.promo-text {
    margin-bottom: 8px;
}

merch-card[variant="plans-education"] p:has(a[href^='tel:']):has(+ p, + div) {
    margin-bottom: 16px;
}

merch-card[variant^="plans"] [slot="promo-text"],
merch-card[variant="plans-education"] span.promo-text {
    line-height: var(--consonant-merch-card-body-xs-line-height);
}

merch-card[variant="plans-education"] [slot="body-xs"] {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

merch-card[variant="plans-education"] .spacer {
    height: calc(var(--merch-card-plans-edu-list-max-offset) - var(--merch-card-plans-edu-list-offset));
}

merch-card[variant="plans-education"] ul + p {
    margin-top: 16px;
}

merch-card-collection.plans merch-card {
    width: auto;
    height: 100%;
}

merch-card-collection.plans merch-card[variant="plans"] aem-fragment + [slot^="heading-"] {
    margin-top: calc(40px + var(--consonant-merch-spacing-xxs));
}

merch-card[variant^='plans'] span[data-template="legal"] {
    display: block;
    color: var(----merch-color-grey-80);
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
}

merch-card[variant^='plans'] span.price-legal::first-letter {
    text-transform: uppercase;
}

merch-card[variant^='plans'] span.price-legal .price-tax-inclusivity::before {
  content: initial;
}

merch-card[variant^="plans"] [slot="description"] {
    min-height: 84px;
}

merch-card[variant^="plans"] [slot="body-xs"] a {
    color: var(--link-color);
}

merch-card[variant^="plans"] [slot="promo-text"] a {
    color: inherit;
}

merch-card[variant^="plans"] [slot="callout-content"] {
    margin: 8px 0 0;
}

merch-card[variant^="plans"][size="super-wide"] [slot="callout-content"] {
    margin: 0;
}

merch-card[variant^="plans"] [slot='callout-content'] > div > div,
merch-card[variant^="plans"] [slot="callout-content"] > p {
    position: relative;
    padding: 2px 10px 3px;
    background: #D9D9D9;
}

merch-card[variant^="plans"] [slot="callout-content"] > p:has(> .icon-button) {
    padding-right: 36px;
}

merch-card[variant^="plans"] [slot='callout-content'] > p,
merch-card[variant^="plans"] [slot='callout-content'] > div > div > div {
    color: #000;
}

merch-card[variant^="plans"] [slot="callout-content"] img,
merch-card[variant^="plans"] [slot="callout-content"] .icon-button {
    margin: 1.5px 0 1.5px 8px;
}

merch-card[variant^="plans"] [slot="whats-included"] [slot="description"] {
  min-height: auto;
}

merch-card[variant^="plans"] [slot="quantity-select"] {
    margin-top: auto;
    padding-top: 8px;
}

merch-card[variant^="plans"]:has([slot="quantity-select"]) merch-addon {
    margin: 0;
}

merch-card[variant^="plans"] merch-addon {
    --merch-addon-gap: 10px;
    --merch-addon-align: center;
    --merch-addon-checkbox-size: 12px;
    --merch-addon-checkbox-border: 2px solid rgb(109, 109, 109);
    --merch-addon-checkbox-radius: 2px;
    --merch-addon-checkbox-checked-bg: var(--checkmark-icon);
    --merch-addon-checkbox-checked-color: var(--color-accent);
    --merch-addon-label-size: 12px;
    --merch-addon-label-color: rgb(34, 34, 34);
    --merch-addon-label-line-height: normal;
}

merch-card[variant^="plans"] [slot="footer"] a {
    line-height: 19px;
    padding: 3px 16px 4px;
}

merch-card[variant^="plans"] [slot="footer"] .con-button > span {
    min-width: unset;
}

merch-card[variant^="plans"] merch-addon span[data-template="price"] {
    display: none;
}

merch-card[variant^="plans"]:not([size]) {
    merch-whats-included merch-mnemonic-list,
    merch-whats-included [slot="heading"] {
        width: 100%;
    }
}

.collection-container.plans {
    --merch-card-collection-card-min-height: 273px;
    --merch-card-collection-card-width: var(--consonant-merch-card-plans-width);
}

merch-sidenav.plans {
    --merch-sidenav-padding: 16px 20px 16px 16px;
}

merch-card-collection-header.plans {
    --merch-card-collection-header-columns: 1fr fit-content(100%);
    --merch-card-collection-header-areas: "result filter";
}

.one-merch-card.plans,
.two-merch-cards.plans,
.three-merch-cards.plans,
.four-merch-cards.plans {
    --merch-card-collection-card-width: var(--consonant-merch-card-plans-width);
}

merch-card-collection:has([slot="subtitle"]) merch-card {
    --merch-card-plans-subtitle-display: block;
}

.columns .text .foreground {
    margin: 0;
}

.columns.checkmark-list ul {
    margin: 0;
    padding-left: 20px;
    list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 18 18" height="18px"><path fill="currentcolor" d="M15.656,3.8625l-.7275-.5665a.5.5,0,0,0-.7.0875L7.411,12.1415,4.0875,8.8355a.5.5,0,0,0-.707,0L2.718,9.5a.5.5,0,0,0,0,.707l4.463,4.45a.5.5,0,0,0,.75-.0465L15.7435,4.564A.5.5,0,0,0,15.656,3.8625Z"></path></svg>');
}

.columns.checkmark-list ul li {
    padding-left: 8px;
}

/* Tabs containers */

#tabs-plan {
    --tabs-active-text-color: #131313;
    --tabs-border-color: #444444;
}
#tabs-plan .tab-list-container button[role="tab"][aria-selected="false"] {
    border-top-color: #EAEAEA;
    border-right-color: #EAEAEA;
}

#tabs-plan .tab-list-container button[role="tab"][aria-selected="false"]:first-of-type {
    border-left-color: #EAEAEA;
}

.plans-team {
    display: grid;
    grid-template-columns: min-content;
    justify-content: center;
}

.plans-team .row-1 {
    grid-template-columns: repeat(2, calc(var(--consonant-merch-card-plans-width) * 2 + 32px));
    justify-content: center;
}

.plans-team .col-2 {
    align-content: center;
}

.plans-team .col-2 h3 {
    font-size: 20px;
    margin: 0 0 16px;
}

.plans-team .col-2 p {
    margin: 0 0 16px;
}

.plans-team .text .foreground,
.plans-edu .text .foreground {
    max-width: unset;
    margin: 0;
}

.plans-edu .columns .row {
    grid-template-columns: repeat(auto-fit, var(--consonant-merch-card-plans-students-width));
    justify-content: center;
    align-items: center;
}

.plans-edu .columns .row-1 {
    grid-template-columns: var(--consonant-merch-card-plans-students-width);
    margin-block: var(--spacing-xs);
}

.plans-edu .columns .row-2 {
    margin-bottom: 40px;
}

.plans-edu .columns .row-3 {
    margin-bottom: 48px;
}

.plans-edu .col-2 h3 {
    margin: 0 0 16px;
    font-size: 20px;
}

.plans-individual .content,
.plans-team .content,
.plans-edu-inst .content {
    padding-bottom: 48px;
}

/* Mobile */
@media screen and ${ge} {
    merch-whats-included merch-mnemonic-list,
    merch-whats-included [slot="heading"] {
        width: 100%;
    }

    merch-card[variant="plans-education"] .spacer {
        height: 0px;
    }
}

/* Tablet */
@media screen and ${Q} {
    :root {
        --consonant-merch-card-plans-students-width: 486px;
    }

    .four-merch-cards.plans .foreground {
        max-width: unset;
    }
}

@media screen and ${pe} {
    .plans-team .row-1 {
        grid-template-columns: min-content;
    }

    .plans-edu-inst {
        display: grid;
        grid-template-columns: min-content;
        justify-content: center;
    }

    .plans-edu-inst .text .foreground {
        max-width: unset;
        margin: 0;
    }
}

/* desktop */
@media screen and ${$} {
    :root {
        --consonant-merch-card-plans-width: 276px;
        --consonant-merch-card-plans-students-width: 484px;
    }

    merch-sidenav.plans {
        --merch-sidenav-collection-gap: 30px;
    }

    .columns .four-merch-cards.plans {
        grid-template-columns: repeat(2, var(--consonant-merch-card-plans-width));
    }

    merch-card-collection-header.plans {
        --merch-card-collection-header-columns: fit-content(100%);
        --merch-card-collection-header-areas: "custom";
    }

    .collection-container.plans:has(merch-sidenav) {
        width: fit-content;
        position: relative;
        left: 50%;
        transform: translateX(-50vw);
        justify-content: start;
        padding-inline: 30px;
    }

    .plans-individual .content {
        padding-top: 24px;
    }

    .plans-edu .columns .row-1 {
        grid-template-columns: calc(var(--consonant-merch-card-plans-students-width) * 2 + var(--spacing-m));
    }

    .plans-edu-inst .text .foreground {
        max-width: 1200px;
        margin: auto;
    }
}

/* Large desktop */
@media screen and ${Ee} {
    .columns .four-merch-cards.plans {
        grid-template-columns: repeat(2, var(--consonant-merch-card-plans-width));
    }

    merch-sidenav.plans {
        --merch-sidenav-collection-gap: 54px;
    }
}
`,sr={cardName:{attribute:"name"},title:{tag:"h3",slot:"heading-xs"},subtitle:{tag:"p",slot:"subtitle"},prices:{tag:"p",slot:"heading-m"},promoText:{tag:"p",slot:"promo-text"},description:{tag:"div",slot:"body-xs"},mnemonics:{size:"l"},callout:{tag:"div",slot:"callout-content"},quantitySelect:{tag:"div",slot:"quantity-select"},addon:!0,secureLabel:!0,planType:!0,badge:{tag:"div",slot:"badge",default:"spectrum-yellow-300-plans"},allowedBadgeColors:["spectrum-yellow-300-plans","spectrum-gray-300-plans","spectrum-gray-700-plans","spectrum-green-900-plans"],allowedBorderColors:["spectrum-yellow-300-plans","spectrum-gray-300-plans","spectrum-green-900-plans"],borderColor:{attribute:"border-color"},size:["wide","super-wide"],whatsIncluded:{tag:"div",slot:"whats-included"},ctas:{slot:"footer",size:"m"},style:"consonant",perUnitLabel:{tag:"span",slot:"per-unit-label"}},wn={...function(){let{whatsIncluded:e,size:t,...r}=sr;return r}(),title:{tag:"h3",slot:"heading-s"},secureLabel:!1},En={...function(){let{subtitle:e,whatsIncluded:t,size:r,quantitySelect:i,...a}=sr;return a}()},ee=class extends Z{constructor(e){super(e),this.adaptForMedia=this.adaptForMedia.bind(this)}priceOptionsProvider(e,t){e.dataset.template===nr&&(t.displayPlanType=this.card?.settings?.displayPlanType??!1)}getGlobalCSS(){return yn}adjustSlotPlacement(e,t,r){let i=this.card.shadowRoot,a=i.querySelector("footer"),n=this.card.getAttribute("size");if(!n)return;let s=i.querySelector(`footer slot[name="${e}"]`),o=i.querySelector(`.body slot[name="${e}"]`),c=i.querySelector(".body");if(n.includes("wide")||(a?.classList.remove("wide-footer"),s&&s.remove()),!!t.includes(n)){if(a?.classList.toggle("wide-footer",M.isDesktopOrUp),!r&&s){if(o)s.remove();else{let l=c.querySelector(`[data-placeholder-for="${e}"]`);l?l.replaceWith(s):c.appendChild(s)}return}if(r&&o){let l=document.createElement("div");if(l.setAttribute("data-placeholder-for",e),l.classList.add("slot-placeholder"),!s){let d=o.cloneNode(!0);a.prepend(d)}o.replaceWith(l)}}}adaptForMedia(){if(!this.card.closest("merch-card-collection,overlay-trigger,.two-merch-cards,.three-merch-cards,.four-merch-cards, .columns")){this.card.removeAttribute("size");return}this.adjustSlotPlacement("addon",["super-wide"],M.isDesktopOrUp),this.adjustSlotPlacement("callout-content",["super-wide"],M.isDesktopOrUp)}adjustCallout(){let e=this.card.querySelector('[slot="callout-content"] .icon-button');e&&e.title&&(e.dataset.tooltip=e.title,e.removeAttribute("title"),e.classList.add("hide-tooltip"),document.addEventListener("touchstart",t=>{t.preventDefault(),t.target!==e?e.classList.add("hide-tooltip"):t.target.classList.toggle("hide-tooltip")}),document.addEventListener("mouseover",t=>{t.preventDefault(),t.target!==e?e.classList.add("hide-tooltip"):t.target.classList.remove("hide-tooltip")}))}async adjustEduLists(){if(this.card.variant!=="plans-education"||this.card.querySelector(".spacer"))return;let e=this.card.querySelector('[slot="body-xs"]');if(!e)return;let t=e.querySelector("ul");if(!t)return;let r=t.previousElementSibling,i=document.createElement("div");i.classList.add("spacer"),e.insertBefore(i,r);let a=new IntersectionObserver(([n])=>{if(n.boundingClientRect.height===0)return;let s=0,o=this.card.querySelector('[slot="heading-s"]');o&&(s+=We(o));let c=this.card.querySelector('[slot="subtitle"]');c&&(s+=We(c));let l=this.card.querySelector('[slot="heading-m"]');l&&(s+=8+We(l));for(let p of e.childNodes){if(p.classList.contains("spacer"))break;s+=We(p)}let d=this.card.parentElement.style.getPropertyValue("--merch-card-plans-edu-list-max-offset");s>(parseFloat(d)||0)&&this.card.parentElement.style.setProperty("--merch-card-plans-edu-list-max-offset",`${s}px`),this.card.style.setProperty("--merch-card-plans-edu-list-offset",`${s}px`),a.disconnect()});a.observe(this.card)}async postCardUpdateHook(){this.adaptForMedia(),this.adjustTitleWidth(),this.adjustAddon(),this.adjustCallout(),this.legalAdjusted||(await this.adjustLegal(),await this.adjustEduLists())}get headingM(){return this.card.querySelector('[slot="heading-m"]')}get mainPrice(){return this.headingM.querySelector(`${me}[data-template="price"]`)}get divider(){return this.card.variant==="plans-education"?v`<div class="divider"></div>`:B}async adjustLegal(){if(!this.legalAdjusted)try{this.legalAdjusted=!0,await this.card.updateComplete,await customElements.whenDefined("inline-price");let e=[],t=this.card.querySelector(`[slot="heading-m"] ${me}[data-template="price"]`);t&&e.push(t);let r=e.map(async i=>{let a=i.cloneNode(!0);await i.onceSettled(),i?.options&&(i.options.displayPerUnit&&(i.dataset.displayPerUnit="false"),i.options.displayTax&&(i.dataset.displayTax="false"),i.options.displayPlanType&&(i.dataset.displayPlanType="false"),a.setAttribute("data-template","legal"),i.parentNode.insertBefore(a,i.nextSibling),await a.onceSettled())});await Promise.all(r)}catch{}}async adjustAddon(){await this.card.updateComplete;let e=this.card.addon;if(!e)return;e.setAttribute("custom-checkbox","");let t=this.mainPrice;if(!t)return;await t.onceSettled();let r=t.value?.[0]?.planType;r&&(e.planType=r)}get stockCheckbox(){return this.card.checkboxLabel?v`<label id="stock-checkbox">
                <input type="checkbox" @change=${this.card.toggleStockOffer}></input>
                <span></span>
                ${this.card.checkboxLabel}
            </label>`:B}get icons(){return!this.card.querySelector('[slot="icons"]')&&!this.card.getAttribute("id")?B:v`<slot name="icons"></slot>`}connectedCallbackHook(){M.matchMobile.addEventListener("change",this.adaptForMedia),M.matchDesktopOrUp.addEventListener("change",this.adaptForMedia)}disconnectedCallbackHook(){M.matchMobile.removeEventListener("change",this.adaptForMedia),M.matchDesktopOrUp.removeEventListener("change",this.adaptForMedia)}renderLayout(){return v` ${this.badge}
            <div class="body">
                ${this.icons}
                <slot name="heading-xs"></slot>
                <slot name="heading-s"></slot>
                <slot name="subtitle"></slot>
                ${this.divider}
                <slot name="heading-m"></slot>
                <slot name="annualPrice"></slot>
                <slot name="priceLabel"></slot>
                <slot name="body-xxs"></slot>
                <slot name="promo-text"></slot>
                <slot name="body-xs"></slot>
                <slot name="whats-included"></slot>
                <slot name="callout-content"></slot>
                <slot name="quantity-select"></slot>
                ${this.stockCheckbox}
                <slot name="addon"></slot>
                <slot name="badge"></slot>
            </div>
            ${this.secureLabelFooter}
            <slot></slot>`}};f(ee,"variantStyle",X`
        :host([variant^='plans']) {
            min-height: 273px;
            border: 1px solid var(--consonant-merch-card-border-color, #dadada);
            --merch-card-plans-min-width: 244px;
            --merch-card-plans-padding: 15px;
            --merch-card-plans-subtitle-display: contents;
            --merch-card-plans-heading-min-height: 23px;
            --merch-color-green-promo: #05834E;
            --secure-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23505050' viewBox='0 0 12 15'%3E%3Cpath d='M11.5 6H11V5A5 5 0 1 0 1 5v1H.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM3 5a3 3 0 1 1 6 0v1H3Zm4 6.111V12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.389a1.5 1.5 0 1 1 2 0Z'/%3E%3C/svg%3E");
            font-weight: 400;
        }

        :host([variant^='plans']) .slot-placeholder {
            display: none;
        }

        :host([variant='plans-education']) {
            min-height: unset;
        }

        :host([variant='plans-education']) ::slotted([slot='subtitle']) {
            font-size: var(--consonant-merch-card-heading-xxxs-font-size);
            line-height: var(--consonant-merch-card-heading-xxxs-line-height);
            font-style: italic;
            font-weight: 400;
        }
        
        :host([variant='plans-education']) .divider {
            border: 0;
            border-top: 1px solid #E8E8E8;
            margin-top: 8px;
            margin-bottom: 8px;
        }

        :host([variant='plans']) slot[name="subtitle"] {
            display: var(--merch-card-plans-subtitle-display);
            min-height: 18px;
            margin-top: 8px;
            margin-bottom: -8px;
        }

        :host([variant='plans']) ::slotted([slot='heading-xs']) {
            min-height: var(--merch-card-plans-heading-min-height);
        }

        :host([variant^='plans']) .body {
            min-width: var(--merch-card-plans-min-width);
            padding: var(--merch-card-plans-padding);
        }

        :host([variant='plans'][size]) .body {
            max-width: none;
        }

        :host([variant^='plans']) ::slotted([slot='addon']) {
            margin-top: auto;
            padding-top: 8px;
        }

        :host([variant^='plans']) footer ::slotted([slot='addon']) {
            margin: 0;
            padding: 0;
        }

        :host([variant='plans']) .wide-footer #stock-checkbox {
            margin-top: 0;
        }

        :host([variant='plans']) #stock-checkbox {
            margin-top: 8px;
            gap: 9px;
            color: rgb(34, 34, 34);
            line-height: var(--consonant-merch-card-detail-xs-line-height);
            padding-top: 4px;
            padding-bottom: 5px;
        }

        :host([variant='plans']) #stock-checkbox > span {
            border: 2px solid rgb(109, 109, 109);
            width: 12px;
            height: 12px;
        }

        :host([variant^='plans']) footer {
            padding: var(--merch-card-plans-padding);
            padding-top: 1px;
        }

        :host([variant='plans']) .secure-transaction-label {
            color: rgb(80, 80, 80);
            line-height: var(--consonant-merch-card-detail-xs-line-height);
        }

        :host([variant='plans']) ::slotted([slot='heading-xs']) {
            max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
        }

        :host([variant='plans']) #badge {
            border-radius: 4px 0 0 4px;
            font-weight: 400;
            line-height: 21px;
            padding: 2px 10px 3px;
        }
    `),f(ee,"collectionOptions",{customHeaderArea:e=>e.sidenav?v`<slot name="resultsText"></slot>`:B,headerVisibility:{search:!1,sort:!1,result:["mobile","tablet"],custom:["desktop"]},onSidenavAttached:e=>{let t=()=>{let r=e.querySelectorAll("merch-card");for(let a of r)a.hasAttribute("data-size")&&(a.setAttribute("size",a.getAttribute("data-size")),a.removeAttribute("data-size"));if(!M.isDesktop)return;let i=0;for(let a of r){if(a.style.display==="none")continue;let n=a.getAttribute("size"),s=n==="wide"?2:n==="super-wide"?3:1;s===2&&i%3===2&&(a.setAttribute("data-size",n),a.removeAttribute("size"),s=1),i+=s}};M.matchDesktop.addEventListener("change",t),e.addEventListener(ue,t),e.onUnmount.push(()=>{M.matchDesktop.removeEventListener("change",t),e.removeEventListener(ue,t)})}});var An=`
:root {
    --consonant-merch-card-plans-v2-width: 385px;
    --consonant-merch-card-plans-v2-height: auto;
    --consonant-merch-card-plans-v2-icon-size: 35px;
    --consonant-merch-card-plans-v2-border-color: #DADADA;
    --consonant-merch-card-plans-v2-border-radius: 8px;
}

merch-card[variant="plans-v2"] {
    width: var(--consonant-merch-card-plans-v2-width);
    height: var(--consonant-merch-card-plans-v2-height);
    border: 1px solid var(--consonant-merch-card-border-color, var(--consonant-merch-card-plans-v2-border-color));
    border-radius: var(--consonant-merch-card-plans-v2-border-radius);
    background-color: var(--spectrum-gray-50, #FFFFFF);
}

merch-card[variant="plans-v2"][size="wide"],
merch-card[variant="plans-v2"][size="super-wide"] {
    width: 100%;
    max-width: 768px;
}

merch-card[variant="plans-v2"] [slot="icons"] {
    --img-width: var(--consonant-merch-card-plans-v2-icon-size);
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}

merch-card[variant="plans-v2"] span.price-unit-type {
    display: inline;
}

merch-card[variant="plans-v2"] .price-unit-type:not(.disabled)::before {
    content: none;
}

merch-card[variant="plans-v2"] [slot="description"] {
    min-height: auto;
}

merch-card[variant="plans-v2"] [slot="whats-included"] [slot="description"] {
    min-height: auto;
}

merch-card[variant="plans-v2"] [slot="quantity-select"] {
    margin-top: 0;
    margin-bottom: 16px;
}

merch-card[variant="plans-v2"] merch-addon {
    --merch-addon-gap: 10px;
    --merch-addon-align: flex-start;
}

merch-card[variant="plans-v2"] merch-addon span[data-template="price"] {
    display: inline;
}

merch-card[variant="plans-v2"] span[data-template="legal"] {
    display: inline;
    color: var(--spectrum-gray-600, #6E6E6E);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375;
}

merch-card[variant="plans-v2"] span.text-l {
    display: inline;
    font-size: inherit;
    line-height: inherit;
}

merch-card[variant="plans-v2"] [slot="callout-content"] {
    margin: 0;
}

merch-card[variant="plans-v2"] [slot='callout-content'] > div > div,
merch-card[variant="plans-v2"] [slot="callout-content"] > p {
    background: transparent;
    padding: 0;
}

merch-card[variant="plans-v2"] [slot="footer"] a {
    line-height: 1.2;
    padding: 9px 11px;
}

merch-card[variant="plans-v2"][border-color="spectrum-red-700-plans"] {
    border-color: var(--spectrum-red-700-plans);
}

merch-card[variant="plans-v2"] [slot="icons"] img {
    width: var(--consonant-merch-card-plans-v2-icon-size);
    height: var(--consonant-merch-card-plans-v2-icon-size);
}

merch-card[variant="plans-v2"] [slot="heading-xs"] {
    font-size: 28px;
    font-weight: 900;
    font-family: 'Adobe Clean Display', sans-serif;
    line-height: 30.8px;
    color: var(--spectrum-gray-800, #2C2C2C);
}

merch-card[variant="plans-v2"][size="wide"] [slot="subtitle"] {
    font-size: 52px;
    font-weight: 900;
    line-height: 57.2px;
}

merch-card[variant="plans-v2"] [slot="heading-m"] {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 8px;
}

merch-card[variant="plans-v2"] [slot="heading-m"] .price-wrapper {
    display: flex;
    align-items: baseline;
    gap: 8px;
}

merch-card[variant="plans-v2"] [slot="heading-m"] span.price {
    font-size: 24px;
    font-weight: 800;
    font-family: 'Adobe Clean', sans-serif;
    color: var(--spectrum-gray-900, #1E1E1E);
    line-height: 1.2;
}

merch-card[variant="plans-v2"] [slot="heading-m"] span.price.price-strikethrough {
    font-size: 18px;
    font-weight: 400;
    color: #6B6B6B;
}

merch-card[variant="plans-v2"] span[is='inline-price'] {
    display: block;
}

merch-card[variant="plans-v2"] [slot="heading-m"]:has(span[is='inline-price'] + span[is='inline-price']) span[is='inline-price'] {
    display: inline;
    text-decoration: none;
}

merch-card[variant="plans-v2"] [slot="heading-m"] .price-legal {
    font-size: 16px;
    font-weight: 400;
    color: var(--spectrum-gray-600, #6E6E6E);
    line-height: 1.375;
}

merch-card[variant="plans-v2"] [slot="heading-m"] .price-recurrence,
merch-card[variant="plans-v2"] [slot="heading-m"] span[data-template="recurrence"] {
    text-transform: lowercase;
    color: #6B6B6B;
}

merch-card[variant="plans-v2"] [slot="heading-m"] .price-plan-type,
merch-card[variant="plans-v2"] [slot="heading-m"] span[data-template="planType"] {
    display: block;
    text-transform: capitalize;
    color: #2C2C2C;
    font-size: 14px;
    font-weight: 400;
}

merch-card[variant="plans-v2"] [slot="promo-text"] {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Adobe Clean', sans-serif;
    color: var(--merch-color-green-promo, #05834E);
    line-height: 1.5;
    margin-bottom: 16px;
}

merch-card[variant="plans-v2"] [slot="promo-text"] a {
    color: inherit;
    text-decoration: underline;
}

merch-card[variant="plans-v2"] [slot="body-xs"] {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Adobe Clean', sans-serif;
    color: var(--spectrum-gray-700, #4B4B4B);
    line-height: 25.2px;
    margin-bottom: 16px;
}

merch-card[variant="plans-v2"] [slot="quantity-select"] {
    margin-bottom: 16px;
}

merch-card[variant="plans-v2"] [slot="quantity-select"] label {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: var(--spectrum-gray-700, #4B4B4B);
    margin-bottom: 8px;
}

merch-card[variant="plans-v2"] [slot="quantity-select"] merch-quantity-select {
    width: 100%;
}

merch-card[variant="plans-v2"] [slot="footer"] {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: auto;
    padding-top: 16px;
}

merch-card[variant="plans-v2"] [slot="footer"] a {
    width: 100%;
    text-align: center;
    padding: 9px 11px;
    border-radius: 20px;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
}

merch-card[variant="plans-v2"] [slot="footer"] a.con-button.blue {
    background-color: #3B63FB;
    color: #FFFFFF;
    border: 2px solid #3B63FB;
    border-radius: 20px;
}

merch-card[variant="plans-v2"] [slot="footer"] a.con-button.blue:hover {
    background-color: #0D66D0;
    border-color: #0D66D0;
}

merch-card[variant="plans-v2"] [slot="footer"] a.con-button.outline {
    background-color: transparent;
    color: #3B63FB;
    border: 2px solid #3B63FB;
}

merch-card[variant="plans-v2"] [slot="footer"] a.con-button.outline:hover {
    background-color: #F5F5F5;
}

merch-card[variant="plans-v2"] [slot="whats-included"] {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #E8E8E8;
}

merch-card[variant="plans-v2"] [slot="whats-included"] h4 {
    font-size: 16px;
    font-weight: 700;
    color: var(--spectrum-gray-800, #2C2C2C);
    margin: 0 0 16px 0;
}

merch-card[variant="plans-v2"] [slot="whats-included"] ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

merch-card[variant="plans-v2"] [slot="whats-included"] ul li {
    font-size: 16px;
    font-weight: 400;
    color: var(--spectrum-gray-700, #4B4B4B);
    line-height: 1.625;
    padding-left: 24px;
    margin-bottom: 12px;
    position: relative;
}

merch-card[variant="plans-v2"] [slot="whats-included"] ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 16px;
    height: 16px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="%231473E6" d="M6.5 11.5l-3-3 1-1 2 2 5-5 1 1-6 6z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
}

merch-card[variant="plans-v2"] .help-text {
    font-size: 12px;
    font-weight: 400;
    color: var(--spectrum-gray-600, #6E6E6E);
    line-height: 1.5;
    margin-top: 8px;
}

@media screen and ${Q}, ${$}, ${Ee} {
    :root {
        --consonant-merch-card-plans-v2-width: 385px;
    }
}

@media screen and ${ge}, ${pe} {
    merch-card[variant="plans-v2"] {
        width: 100%;
        max-width: var(--consonant-merch-card-plans-v2-width);
    }
}

.collection-container.plans-v2 {
    --merch-card-collection-card-width: var(--consonant-merch-card-plans-v2-width);
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--consonant-merch-card-plans-v2-width));
    gap: 32px;
    justify-content: center;
}

merch-card-collection.plans-v2 merch-card {
    width: 100%;
    height: 100%;
}

merch-card[variant="plans-v2"][size="wide"] {
    width: 100%;
    max-width: 768px;
}

merch-card[variant="plans-v2"] .price-divider {
    display: none;
}

merch-card[variant="plans-v2"][size="wide"] .price-divider {
    display: block;
    height: 1px;
    background-color: #E8E8E8;
    margin: 16px 0;
}

merch-card[variant="plans-v2"][size="wide"] .heading-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 0;
}

merch-card[variant="plans-v2"][size="wide"] .heading-wrapper [slot="icons"] {
    margin-bottom: 0;
}

merch-card[variant="plans-v2"][size="wide"] .heading-wrapper [slot="heading-xs"] {
    margin: 0;
}

merch-card[variant="plans-v2"][size="wide"] [slot="body-xs"] {
    margin-bottom: 0;
}

merch-card[variant="plans-v2"][size="wide"] [slot="heading-m"] {
    margin-top: 0;
}

merch-card[variant="plans-v2"][size="wide"] footer {
    align-items: flex-start;
}

merch-card[variant="plans-v2"][size="wide"] footer [slot="heading-m"] {
    order: -1;
    margin-bottom: 16px;
    align-self: flex-start;
}
`,Tn={cardName:{attribute:"name"},title:{tag:"h3",slot:"heading-xs"},subtitle:{tag:"p",slot:"subtitle"},prices:{tag:"p",slot:"heading-m"},shortDescription:{tag:"p",slot:"short-description"},promoText:{tag:"p",slot:"promo-text"},description:{tag:"div",slot:"body-xs"},mnemonics:{size:"l"},callout:{tag:"div",slot:"callout-content"},quantitySelect:{tag:"div",slot:"quantity-select"},addon:!0,secureLabel:!0,planType:!0,badge:{tag:"div",slot:"badge",default:"spectrum-red-700-plans"},allowedBadgeColors:["spectrum-yellow-300-plans","spectrum-gray-300-plans","spectrum-gray-700-plans","spectrum-green-900-plans","spectrum-red-700-plans"],allowedBorderColors:["spectrum-yellow-300-plans","spectrum-gray-300-plans","spectrum-green-900-plans","spectrum-red-700-plans"],borderColor:{attribute:"border-color"},size:["wide","super-wide"],whatsIncluded:{tag:"div",slot:"whats-included"},ctas:{slot:"footer",size:"m"},style:"consonant",perUnitLabel:{tag:"span",slot:"per-unit-label"}},Ie=class extends Z{constructor(e){super(e),this.adaptForMedia=this.adaptForMedia.bind(this),this.toggleShortDescription=this.toggleShortDescription.bind(this),this.shortDescriptionExpanded=!1}priceOptionsProvider(e,t){e.dataset.template===nr&&(t.displayPlanType=this.card?.settings?.displayPlanType??!1)}getGlobalCSS(){return An}adjustSlotPlacement(e,t,r){let{shadowRoot:i}=this.card,a=i.querySelector("footer"),n=i.querySelector(".body"),s=this.card.getAttribute("size");if(!s)return;let o=i.querySelector(`footer slot[name="${e}"]`),c=i.querySelector(`.body slot[name="${e}"]`);if(s.includes("wide")||(a?.classList.remove("wide-footer"),o?.remove()),!!t.includes(s)){if(a?.classList.toggle("wide-footer",M.isDesktopOrUp),!r&&o){if(c)o.remove();else{let l=n.querySelector(`[data-placeholder-for="${e}"]`);l?l.replaceWith(o):n.appendChild(o)}return}if(r&&c){let l=document.createElement("div");l.setAttribute("data-placeholder-for",e),l.classList.add("slot-placeholder"),o||a.prepend(c.cloneNode(!0)),c.replaceWith(l)}}}adaptForMedia(){if(!this.card.closest("merch-card-collection,overlay-trigger,.two-merch-cards,.three-merch-cards,.four-merch-cards,.columns")){this.card.removeAttribute("size");return}this.adjustSlotPlacement("heading-m",["wide"],!0),this.adjustSlotPlacement("addon",["super-wide"],M.isDesktopOrUp),this.adjustSlotPlacement("callout-content",["super-wide"],M.isDesktopOrUp)}adjustCallout(){let e=this.card.querySelector('[slot="callout-content"] .icon-button');if(!e?.title)return;e.dataset.tooltip=e.title,e.removeAttribute("title"),e.classList.add("hide-tooltip");let t=r=>{r===e?e.classList.toggle("hide-tooltip"):e.classList.add("hide-tooltip")};document.addEventListener("touchstart",r=>{r.preventDefault(),t(r.target)}),document.addEventListener("mouseover",r=>{r.preventDefault(),r.target!==e?e.classList.add("hide-tooltip"):e.classList.remove("hide-tooltip")})}async postCardUpdateHook(){this.adaptForMedia(),this.adjustTitleWidth(),this.adjustAddon(),this.adjustCallout(),this.removeShortDescriptionLabel(),this.legalAdjusted||await this.adjustLegal()}get mainPrice(){return this.card.querySelector(`[slot="heading-m"] ${me}[data-template="price"]`)}async adjustLegal(){if(!this.legalAdjusted)try{this.legalAdjusted=!0,await this.card.updateComplete,await customElements.whenDefined("inline-price");let e=this.mainPrice;if(!e)return;let t=e.cloneNode(!0);if(await e.onceSettled(),!e?.options)return;e.options.displayPerUnit&&(e.dataset.displayPerUnit="false"),e.options.displayTax&&(e.dataset.displayTax="false"),e.options.displayPlanType&&(e.dataset.displayPlanType="false"),t.setAttribute("data-template","legal"),e.parentNode.insertBefore(t,e.nextSibling),await t.onceSettled()}catch{}}async adjustAddon(){await this.card.updateComplete;let e=this.card.addon;if(!e)return;e.setAttribute("custom-checkbox","");let t=this.mainPrice;if(!t)return;await t.onceSettled();let r=t.value?.[0]?.planType;r&&(e.planType=r)}get stockCheckbox(){return this.card.checkboxLabel?v`<label id="stock-checkbox">
                <input type="checkbox" @change=${this.card.toggleStockOffer}></input>
                <span></span>
                ${this.card.checkboxLabel}
            </label>`:B}get hasShortDescription(){return!!this.card.querySelector('[slot="short-description"]')}get shortDescriptionLabel(){let e=this.card.querySelector('[slot="short-description"]');if(!e)return"What you get:";let t=e.querySelector("strong, b");if(t?.textContent?.trim())return t.textContent.trim();let r=e.querySelector("h1, h2, h3, h4, h5, h6, p");return r?.textContent?.trim()?r.textContent.trim():e.textContent?.trim().split(`
`)[0].trim()||"What you get:"}removeShortDescriptionLabel(){let e=this.card.querySelector('[slot="short-description"]');e&&e.querySelectorAll("strong, b").forEach(t=>t.remove())}toggleShortDescription(){this.shortDescriptionExpanded=!this.shortDescriptionExpanded,this.card.requestUpdate()}get shortDescriptionToggle(){return this.hasShortDescription?M.isDesktopOrUp?v`
                <div class="short-description-divider"></div>
                <div class="short-description-content desktop">
                    <slot name="short-description"></slot>
                </div>
            `:v`
            <div class="short-description-divider"></div>
            <div class="short-description-toggle" @click=${this.toggleShortDescription}>
                <span class="toggle-label">${this.shortDescriptionLabel}</span>
                <span class="toggle-icon ${this.shortDescriptionExpanded?"expanded":""}">
                    ${this.shortDescriptionExpanded?"−":"+"}
                </span>
            </div>
            <div class="short-description-content ${this.shortDescriptionExpanded?"expanded":""}">
                <slot name="short-description"></slot>
            </div>
        `:B}get icons(){return this.card.querySelector('[slot="icons"]')||this.card.getAttribute("id")?v`<slot name="icons"></slot>`:B}connectedCallbackHook(){let e=()=>{this.adaptForMedia(),this.card.requestUpdate()};M.matchMobile.addEventListener("change",this.adaptForMedia),M.matchDesktopOrUp.addEventListener("change",e)}disconnectedCallbackHook(){M.matchMobile.removeEventListener("change",this.adaptForMedia),M.matchDesktopOrUp.removeEventListener("change",this.adaptForMedia)}renderLayout(){return v` ${this.badge}
            <div class="body">
                <div class="heading-wrapper">
                    ${this.icons}
                    <slot name="heading-xs"></slot>
                </div>
                <slot name="heading-m"></slot>
                <slot name="subtitle"></slot>
                <slot name="body-xs"></slot>
                <div class="price-divider"></div>
                <slot name="annualPrice"></slot>
                <slot name="priceLabel"></slot>
                <slot name="body-xxs"></slot>
                <slot name="promo-text"></slot>
                <slot name="whats-included"></slot>
                <slot name="callout-content"></slot>
                <slot name="quantity-select"></slot>
                ${this.stockCheckbox}
                <slot name="addon"></slot>
                <slot name="badge"></slot>
            </div>
            ${this.secureLabelFooter}
            ${this.shortDescriptionToggle}
            <slot></slot>`}};f(Ie,"variantStyle",X`
        :host([variant='plans-v2']) {
            display: flex;
            flex-direction: column;
            min-height: 273px;
            width: 321px;
            position: relative;
            background-color: var(--spectrum-gray-50, #FFFFFF);
            border-radius: var(--consonant-merch-card-plans-v2-border-radius, 8px);
            overflow: hidden;
            font-weight: 400;
            --merch-card-plans-v2-min-width: 244px;
            --merch-card-plans-v2-padding: 26px 32px;
            --merch-card-plans-v2-subtitle-display: contents;
            --merch-card-plans-v2-heading-min-height: 23px;
            --merch-color-green-promo: #05834E;
            --secure-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23505050' viewBox='0 0 12 15'%3E%3Cpath d='M11.5 6H11V5A5 5 0 1 0 1 5v1H.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM3 5a3 3 0 1 1 6 0v1H3Zm4 6.111V12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.389a1.5 1.5 0 1 1 2 0Z'/%3E%3C/svg%3E");
        }

        :host([variant='plans-v2']) .slot-placeholder {
            display: none;
        }

        :host([variant='plans-v2']) .body {
            display: flex;
            flex-direction: column;
            min-width: var(--merch-card-plans-v2-min-width);
            padding: var(--merch-card-plans-v2-padding);
            padding-bottom: 0;
            flex-grow: 1;
        }

        :host([variant='plans-v2'][size]) .body {
            max-width: none;
        }

        :host([variant='plans-v2']) footer {
            padding: var(--merch-card-plans-v2-padding);
            padding-top: 1px;
            justify-content: flex-start;
        }

        :host([variant='plans-v2']) slot[name="subtitle"] {
            display: var(--merch-card-plans-v2-subtitle-display);
            min-height: 18px;
            margin-top: 8px;
            margin-bottom: -8px;
        }

        :host([variant='plans-v2']) ::slotted([slot='heading-xs']) {
            font-size: 32px;
            font-weight: 900;
            font-family: 'Adobe Clean Display', sans-serif;
            line-height: 1.2;
            color: var(--spectrum-gray-800, #2C2C2C);
            margin: 0 0 16px 0;
            min-height: var(--merch-card-plans-v2-heading-min-height);
            max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
        }

        :host([variant='plans-v2']) slot[name='icons'] {
            gap: 3px;
            mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.6) 37.5%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 62.5%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.03) 87.5%, rgba(0, 0, 0, 0) 100%);
            -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.6) 37.5%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 62.5%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.03) 87.5%, rgba(0, 0, 0, 0) 100%);
        }

        :host([variant='plans-v2']) ::slotted([slot='icons']) {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
        }

        :host([variant='plans-v2']) ::slotted([slot='heading-m']) {
            margin: 0 0 8px 0;
        }

        :host([variant='plans-v2']) ::slotted([slot='promo-text']) {
            font-size: 16px;
            font-weight: 700;
            color: var(--merch-color-green-promo, #05834E);
            line-height: 1.5;
            margin: 0 0 16px 0;
        }

        :host([variant='plans-v2']) ::slotted([slot='body-xs']) {
            font-size: 18px;
            font-weight: 400;
            color: var(--spectrum-gray-700, #4B4B4B);
            line-height: 1.5;
            margin: 0 0 16px 0;
        }

        :host([variant='plans-v2']) ::slotted([slot='quantity-select']) {
            margin: 0 0 16px 0;
        }

        :host([variant='plans-v2']) ::slotted([slot='whats-included']) {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid #E8E8E8;
        }

        :host([variant='plans-v2']) ::slotted([slot='addon']) {
            margin-top: auto;
            padding-top: 8px;
        }

        :host([variant='plans-v2']) footer ::slotted([slot='addon']) {
            margin: 0;
            padding: 0;
        }

        :host([variant='plans-v2']) .wide-footer #stock-checkbox {
            margin-top: 0;
        }

        :host([variant='plans-v2']) #stock-checkbox {
            margin-top: 8px;
            gap: 9px;
            color: rgb(34, 34, 34);
            line-height: var(--consonant-merch-card-detail-xs-line-height);
            padding-top: 4px;
            padding-bottom: 5px;
        }

        :host([variant='plans-v2']) #stock-checkbox > span {
            border: 2px solid rgb(109, 109, 109);
            width: 12px;
            height: 12px;
        }

        :host([variant='plans-v2']) .secure-transaction-label {
            color: rgb(80, 80, 80);
            line-height: var(--consonant-merch-card-detail-xs-line-height);
        }

        :host([variant='plans-v2']) footer ::slotted(a) {
            display: block;
            width: 100%;
            text-align: center;
            margin-bottom: 12px;
        }

        :host([variant='plans-v2']) footer ::slotted(a:last-child) {
            margin-bottom: 0;
        }

        :host([variant='plans-v2']) .short-description-divider {
            height: 1px;
            background-color: #E8E8E8;
            margin: 0;
        }

        :host([variant='plans-v2']) .short-description-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            padding: 16px 32px;
            cursor: pointer;
            background-color: var(--spectrum-gray-50, #FFFFFF);
            transition: background-color 0.2s ease;
        }

        :host([variant='plans-v2']) .short-description-toggle:hover {
            background-color: var(--spectrum-gray-75, #F8F8F8);
        }

        :host([variant='plans-v2']) .short-description-toggle .toggle-label {
            font-size: 16px;
            font-weight: 700;
            color: var(--spectrum-gray-800, #2C2C2C);
            text-align: left;
            flex: 1;
            line-height: 1.5;
        }

        :host([variant='plans-v2']) .short-description-toggle .toggle-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 24px;
            font-weight: 300;
            color: var(--spectrum-gray-700, #4B4B4B);
            flex-shrink: 0;
        }

        :host([variant='plans-v2']) .short-description-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
            padding: 0 32px;
        }

        :host([variant='plans-v2']) .short-description-content.expanded {
            max-height: 500px;
            padding: 24px 32px;
        }

        :host([variant='plans-v2']) .short-description-content.desktop {
            max-height: none;
            overflow: visible;
            padding: 24px 32px;
            transition: none;
        }

        :host([variant='plans-v2']) .short-description-content ::slotted([slot='short-description']) {
            font-size: 16px;
            font-weight: 400;
            color: var(--spectrum-gray-700, #4B4B4B);
            line-height: 1.5;
            margin: 0;
        }

        :host([variant='plans-v2'][border-color='spectrum-yellow-300-plans']) {
            border-color: #FFD947;
        }

        :host([variant='plans-v2'][border-color='spectrum-gray-300-plans']) {
            border-color: #DADADA;
        }

        :host([variant='plans-v2'][border-color='spectrum-green-900-plans']) {
            border-color: #05834E;
        }

        :host([variant='plans-v2'][border-color='spectrum-red-700-plans']) {
            border-color: #EB1000;
        }

        :host([variant='plans-v2']) ::slotted([slot='badge'].spectrum-yellow-300-plans),
        :host([variant='plans-v2']) #badge.spectrum-yellow-300-plans {
            background-color: #FFD947;
            color: #2C2C2C;
        }

        :host([variant='plans-v2']) ::slotted([slot='badge'].spectrum-gray-300-plans),
        :host([variant='plans-v2']) #badge.spectrum-gray-300-plans {
            background-color: #DADADA;
            color: #2C2C2C;
        }

        :host([variant='plans-v2']) ::slotted([slot='badge'].spectrum-gray-700-plans),
        :host([variant='plans-v2']) #badge.spectrum-gray-700-plans {
            background-color: #4B4B4B;
            color: #FFFFFF;
        }

        :host([variant='plans-v2']) ::slotted([slot='badge'].spectrum-green-900-plans),
        :host([variant='plans-v2']) #badge.spectrum-green-900-plans {
            background-color: #05834E;
            color: #FFFFFF;
        }

        :host([variant='plans-v2']) ::slotted([slot='badge'].spectrum-red-700-plans),
        :host([variant='plans-v2']) #badge.spectrum-red-700-plans {
            background-color: #EB1000;
            color: #FFFFFF;
        }

        :host([variant='plans-v2']) .price-divider {
            display: none;
        }

        :host([variant='plans-v2']) .heading-wrapper {
            display: flex;
            flex-direction: column;
        }

        :host([variant='plans-v2'][size='wide']) {
            width: 100%;
            max-width: 768px;
        }

        :host([variant='plans-v2'][size='wide']) .heading-wrapper {
            flex-direction: row;
            align-items: center;
            gap: 12px;
        }

        :host([variant='plans-v2'][size='wide']) .heading-wrapper slot[name='icons'] {
            margin-bottom: 0;
            mask-image: none;
            -webkit-mask-image: none;
        }

        :host([variant='plans-v2'][size='wide']) .heading-wrapper ::slotted([slot='icons']) {
            margin-bottom: 0;
        }

        :host([variant='plans-v2'][size='wide']) .heading-wrapper ::slotted([slot='heading-xs']) {
            margin: 0;
        }

        :host([variant='plans-v2'][size='wide']) .price-divider {
            display: block;
            height: 1px;
            background-color: #E8E8E8;
            margin: 16px 0;
        }

        :host([variant='plans-v2'][size='wide']) ::slotted([slot='body-xs']) {
            margin-bottom: 0;
        }

        :host([variant='plans-v2'][size='wide']) ::slotted([slot='heading-m']) {
            margin-top: 0;
        }

        :host([variant='plans-v2'][size='wide']) footer {
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
        }

        :host([variant='plans-v2'][size='wide']) footer ::slotted([slot='heading-m']) {
            order: -1;
            margin-bottom: 16px;
            align-self: flex-start;
        }

        :host([variant='plans-v2'][size='wide']) footer ::slotted(a) {
            width: auto;
            min-width: 150px;
            margin-right: 12px;
            margin-bottom: 0;
        }

        :host([variant='plans-v2'][size='wide']) footer ::slotted(a:last-child) {
            margin-right: 0;
        }
    `),f(Ie,"collectionOptions",{customHeaderArea:e=>e.sidenav?v`<slot name="resultsText"></slot>`:B,headerVisibility:{search:!1,sort:!1,result:["mobile","tablet"],custom:["desktop"]},onSidenavAttached:e=>{let t=()=>{let r=e.querySelectorAll("merch-card");if(r.forEach(a=>{a.hasAttribute("data-size")&&(a.setAttribute("size",a.getAttribute("data-size")),a.removeAttribute("data-size"))}),!M.isDesktop)return;let i=0;r.forEach(a=>{if(a.style.display==="none")return;let n=a.getAttribute("size"),s=n==="wide"?2:n==="super-wide"?3:1;s===2&&i%3===2&&(a.setAttribute("data-size",n),a.removeAttribute("size"),s=1),i+=s})};M.matchDesktop.addEventListener("change",t),e.addEventListener(ue,t),e.onUnmount.push(()=>{M.matchDesktop.removeEventListener("change",t),e.removeEventListener(ue,t)})}});var Sn=`
:root {
  --consonant-merch-card-product-width: 300px;
}

  merch-card[variant="product"] merch-addon {
    padding-left: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 8px;
    border-radius: .5rem;
    font-family: var(--merch-body-font-family, 'Adobe Clean');
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="product"] merch-addon [is="inline-price"] {
    font-weight: bold;
    pointer-events: none;
  }

  merch-card[variant="product"] merch-addon::part(checkbox) {
      height: 18px;
      width: 18px;
      margin: 14px 12px 0 8px;
  }

  merch-card[variant="product"] merch-addon::part(label) {
    display: flex;
    flex-direction: column;
    padding: 8px 4px 8px 0;
    width: 100%;
  }

/* grid style for product */
.one-merch-card.product,
.two-merch-cards.product,
.three-merch-cards.product,
.four-merch-cards.product {
    grid-template-columns: var(--consonant-merch-card-product-width);
}

/* Tablet */
@media screen and ${Q} {
    .two-merch-cards.product,
    .three-merch-cards.product,
    .four-merch-cards.product {
        grid-template-columns: repeat(2, var(--consonant-merch-card-product-width));
    }
}

/* desktop */
@media screen and ${$} {
  :root {
    --consonant-merch-card-product-width: 378px;
    --consonant-merch-card-product-width-4clm: 276px;
  }
    
  .three-merch-cards.product {
      grid-template-columns: repeat(3, var(--consonant-merch-card-product-width));
  }

  .four-merch-cards.product {
      grid-template-columns: repeat(4, var(--consonant-merch-card-product-width-4clm));
  }
}
`,Ot=class extends Z{constructor(e){super(e),this.postCardUpdateHook=this.postCardUpdateHook.bind(this),this.updatePriceQuantity=this.updatePriceQuantity.bind(this)}getGlobalCSS(){return Sn}adjustProductBodySlots(){this.card.getBoundingClientRect().width!==0&&["heading-xs","body-xxs","body-xs","promo-text","callout-content","addon","body-lower"].forEach(e=>this.updateCardElementMinHeight(this.card.shadowRoot.querySelector(`slot[name="${e}"]`),e))}renderLayout(){return v` ${this.badge}
            <div class="body" aria-live="polite">
                <slot name="icons"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xxs"></slot>
                ${this.promoBottom?"":v`<slot name="promo-text"></slot>`}
                <slot name="body-xs"></slot>
                ${this.promoBottom?v`<slot name="promo-text"></slot>`:""}
                <slot name="callout-content"></slot>
                <slot name="addon"></slot>
                <slot name="body-lower"></slot>
            </div>
            ${this.secureLabelFooter}`}connectedCallbackHook(){window.addEventListener("resize",this.postCardUpdateHook),this.card.addEventListener($e,this.updatePriceQuantity)}disconnectedCallbackHook(){window.removeEventListener("resize",this.postCardUpdateHook),this.card.removeEventListener($e,this.updatePriceQuantity)}postCardUpdateHook(){this.card.isConnected&&(this.adjustAddon(),M.isMobile||this.adjustProductBodySlots(),this.adjustTitleWidth())}get headingXSSlot(){return this.card.shadowRoot.querySelector('slot[name="heading-xs"]').assignedElements()[0]}get mainPrice(){return this.card.querySelector(`[slot="heading-xs"] ${me}[data-template="price"]`)}updatePriceQuantity({detail:e}){!this.mainPrice||!e?.option||(this.mainPrice.dataset.quantity=e.option)}toggleAddon(e){let t=this.mainPrice,r=this.headingXSSlot;if(!t&&r){let i=e?.getAttribute("plan-type"),a=null;if(e&&i&&(a=e.querySelector(`p[data-plan-type="${i}"]`)?.querySelector('span[is="inline-price"]')),this.card.querySelectorAll('p[slot="heading-xs"]').forEach(n=>n.remove()),e.checked){if(a){let n=st("p",{class:"addon-heading-xs-price-addon",slot:"heading-xs"},a.innerHTML);this.card.appendChild(n)}}else{let n=st("p",{class:"card-heading",id:"free",slot:"heading-xs"},"Free");this.card.appendChild(n)}}}async adjustAddon(){await this.card.updateComplete;let e=this.card.addon;if(!e)return;let t=this.mainPrice,r=this.card.planType;t&&(await t.onceSettled(),r=t.value?.[0]?.planType),r&&(e.planType=r)}};f(Ot,"variantStyle",X`
        :host([variant='product']) > slot:not([name='icons']) {
            display: block;
        }
        :host([variant='product']) slot[name='body-xs'] {
            min-height: var(--consonant-merch-card-product-body-xs-height);
            display: block;
        }
        :host([variant='product']) slot[name='heading-xs'] {
            min-height: var(--consonant-merch-card-product-heading-xs-height);
            display: block;
        }
        :host([variant='product']) slot[name='body-xxs'] {
            min-height: var(--consonant-merch-card-product-body-xxs-height);
            display: block;
        }
        :host([variant='product']) slot[name='promo-text'] {
            min-height: var(--consonant-merch-card-product-promo-text-height);
            display: block;
        }
        :host([variant='product']) slot[name='callout-content'] {
            min-height: var(
                --consonant-merch-card-product-callout-content-height
            );
            display: block;
        }
        :host([variant='product']) slot[name='addon'] {
            min-height: var(
                --consonant-merch-card-product-addon-height
            );
        }

        :host([variant='product']) ::slotted([slot='heading-xs']) {
            max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
        }
    `);var Cn=`
:root {
  --consonant-merch-card-segment-width: 378px;
}

/* grid style for segment */
.one-merch-card.segment,
.two-merch-cards.segment,
.three-merch-cards.segment,
.four-merch-cards.segment {
  grid-template-columns: minmax(276px, var(--consonant-merch-card-segment-width));
}

/* Mobile */
@media screen and ${ge} {
  :root {
    --consonant-merch-card-segment-width: 276px;
  }
}

@media screen and ${Q} {
  :root {
    --consonant-merch-card-segment-width: 276px;
  }
    
  .two-merch-cards.segment,
  .three-merch-cards.segment,
  .four-merch-cards.segment {
      grid-template-columns: repeat(2, minmax(276px, var(--consonant-merch-card-segment-width)));
  }
}

/* desktop */
@media screen and ${$} {
  :root {
    --consonant-merch-card-segment-width: 302px;
  }
    
  .three-merch-cards.segment {
      grid-template-columns: repeat(3, minmax(276px, var(--consonant-merch-card-segment-width)));
  }

  .four-merch-cards.segment {
      grid-template-columns: repeat(4, minmax(276px, var(--consonant-merch-card-segment-width)));
  }
}
`,Nt=class extends Z{constructor(e){super(e)}getGlobalCSS(){return Cn}postCardUpdateHook(){this.adjustTitleWidth()}renderLayout(){return v` ${this.badge}
    <div class="body">
        <slot name="heading-xs"></slot>
        <slot name="body-xxs"></slot>
        ${this.promoBottom?"":v`<slot name="promo-text"></slot><slot name="callout-content"></slot>`}
        <slot name="body-xs"></slot>
        ${this.promoBottom?v`<slot name="promo-text"></slot><slot name="callout-content"></slot>`:""}
    </div>
    <hr />
    ${this.secureLabelFooter}`}};f(Nt,"variantStyle",X`
    :host([variant='segment']) {
      min-height: 214px;
    }
    :host([variant='segment']) ::slotted([slot='heading-xs']) {
      max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
    }
  `);var kn=`
:root {
  --consonant-merch-card-special-offers-width: 378px;
}

merch-card[variant="special-offers"] span[is="inline-price"][data-template="strikethrough"] {
  font-size: var(--consonant-merch-card-body-xs-font-size);
}

/* grid style for special-offers */
.one-merch-card.special-offers,
.two-merch-cards.special-offers,
.three-merch-cards.special-offers,
.four-merch-cards.special-offers {
  grid-template-columns: minmax(300px, var(--consonant-merch-card-special-offers-width));
}

@media screen and ${ge} {
  :root {
    --consonant-merch-card-special-offers-width: 302px;
  }
} 
  
@media screen and ${Q} {
  :root {
    --consonant-merch-card-special-offers-width: 302px;
  }
    
  .two-merch-cards.special-offers,
  .three-merch-cards.special-offers,
  .four-merch-cards.special-offers {
      grid-template-columns: repeat(2, minmax(300px, var(--consonant-merch-card-special-offers-width)));
  }
}

/* desktop */
@media screen and ${$} {
  .three-merch-cards.special-offers,
  .four-merch-cards.special-offers {
    grid-template-columns: repeat(3, minmax(300px, var(--consonant-merch-card-special-offers-width)));
  }
}

@media screen and ${Ee} {
  .four-merch-cards.special-offers {
    grid-template-columns: repeat(4, minmax(300px, var(--consonant-merch-card-special-offers-width)));
  }
}
`,Ln={name:{tag:"h4",slot:"detail-m"},title:{tag:"h4",slot:"detail-m"},backgroundImage:{tag:"div",slot:"bg-image"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{slot:"footer",size:"l"}},Bt=class extends Z{constructor(e){super(e)}getGlobalCSS(){return kn}get headingSelector(){return'[slot="detail-m"]'}renderLayout(){return v`${this.cardImage}
            <div class="body">
                <slot name="detail-m"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?v`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.card.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:v`
                      <hr />
                      ${this.secureLabelFooter}
                  `}
            <slot></slot>`}};f(Bt,"variantStyle",X`
        :host([variant='special-offers']) {
            min-height: 439px;
        }

        :host([variant='special-offers']) {
            width: var(--consonant-merch-card-special-offers-width);
        }

        :host([variant='special-offers'].center) {
            text-align: center;
        }
    `);var Pn=`
:root {
    --merch-card-simplified-pricing-express-width: 311px;
}

merch-card[variant="simplified-pricing-express"] merch-badge {
    white-space: nowrap;
    color: var(--spectrum-white);
    font-size: var(--consonant-merch-card-detail-m-font-size);
    line-height: var(--consonant-merch-card-detail-m-line-height);
}

/* Grid layout for simplified-pricing-express cards */
merch-card-collection.simplified-pricing-express {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: stretch;
    gap: 16px;
    /* Default to 1 column on mobile */
    grid-template-columns: 1fr;
}

/* Also support direct merch-card children and wrapped in p tags */
merch-card-collection.simplified-pricing-express p {
    margin: 0;
    font-size: inherit;
}

/* Desktop - 3 columns */
@media screen and ${$} {
    merch-card-collection.simplified-pricing-express {
        grid-template-columns: repeat(3, 1fr);
        max-width: calc(3 * var(--merch-card-simplified-pricing-express-width) + 32px);
        margin: 0 auto;
    }

    /* Apply synchronized heights to slots using CSS variables */
    merch-card[variant="simplified-pricing-express"] [slot="body-xs"] {
        min-height: var(--consonant-merch-card-simplified-pricing-express-description-height);
        display: flex;
        flex-direction: column;
    }

    /* Push paragraph with mnemonics to the bottom using :has() */
    merch-card[variant="simplified-pricing-express"] [slot="body-xs"] p:has(mas-mnemonic) {
        margin-top: auto;
        padding-top: 16px;
    }

    /* Fallback for browsers without :has() support - target last paragraph */
    @supports not selector(:has(*)) {
        merch-card[variant="simplified-pricing-express"] [slot="body-xs"] p:last-child {
            margin-top: auto;
            padding-top: 16px;
        }
    }

    /* Additional fallback - if second paragraph exists, assume it has mnemonics */
    merch-card[variant="simplified-pricing-express"] [slot="body-xs"] p:nth-child(2) {
        margin-top: auto;
        padding-top: 16px;
    }

    merch-card[variant="simplified-pricing-express"] [slot="price"] {
        min-height: var(--consonant-merch-card-simplified-pricing-express-price-height);
    }
}

merch-card[variant="simplified-pricing-express"] p {
    margin: 0 !important; /* needed to override express-milo default margin to all <p> */
    font-size: inherit;
}

merch-card[variant="simplified-pricing-express"] [slot="heading-xs"] {
    font-size: 18px;
    font-weight: 700;
    line-height: 23.4px;
    color: var(--spectrum-gray-800);
}

merch-card[variant="simplified-pricing-express"] [slot="body-xs"] {
    font-size: var(--merch-card-simplified-pricing-express-body-xs-font-size, 14px);
    line-height: var(--merch-card-simplified-pricing-express-body-xs-line-height, 18.2px);
    color: var(--spectrum-gray-700);
    margin-bottom: 32px;
    justify-content: space-between;
}

merch-card[variant="simplified-pricing-express"] [slot="cta"] {
    display: block;
    width: 100%;
}

merch-card[variant="simplified-pricing-express"] [slot="cta"] sp-button,
merch-card[variant="simplified-pricing-express"] [slot="cta"] button,
merch-card[variant="simplified-pricing-express"] [slot="cta"] a.button {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: var(--merch-card-simplified-pricing-express-cta-font-weight);
    line-height: var(--merch-card-simplified-pricing-express-cta-line-height);
    font-size: var(--merch-card-simplified-pricing-express-cta-font-size);
    margin: 0;
    padding: 12px 24px 13px 24px;
    border-radius: 26px;
}

merch-card[variant="simplified-pricing-express"] [slot="price"] {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--merch-card-simplified-pricing-express-padding);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"]:first-child {
  margin-inline-end: 8px;
}

merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child {
  display: flex;
  align-items: baseline;
  margin: 0;
}

merch-card[variant="simplified-pricing-express"] [slot="price"] span[is="inline-price"] {
  font-size: var(--merch-card-simplified-pricing-express-price-p-font-size);
  line-height: var(--merch-card-simplified-pricing-express-price-p-line-height);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"] {
  font-size: var(--merch-card-simplified-pricing-express-price-font-size);
  line-height: var(--merch-card-simplified-pricing-express-price-line-height);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] span[is="inline-price"][data-template="optical"] {
  font-size: var(--merch-card-simplified-pricing-express-price-font-size);
  color: var(--spectrum-gray-800);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] p {
  font-size: var(--merch-card-simplified-pricing-express-price-p-font-size);
  font-weight: var(--merch-card-simplified-pricing-express-price-p-font-weight);
  line-height: var(--merch-card-simplified-pricing-express-price-p-line-height);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] p:empty {
  min-height: var(--merch-card-simplified-pricing-express-price-p-line-height);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child .price-currency-symbol {
  font-size: var(--merch-card-simplified-pricing-express-price-font-size);
  font-weight: var(--merch-card-simplified-pricing-express-price-font-weight);
  line-height: var(--merch-card-simplified-pricing-express-price-line-height);
  width: 100%;
}

merch-card[variant="simplified-pricing-express"] [slot="price"] .price-currency-symbol {
  font-size: var(--merch-card-simplified-pricing-express-price-p-font-size);
  font-weight: var(--merch-card-simplified-pricing-express-price-p-font-weight);
  line-height: var(--merch-card-simplified-pricing-express-price-p-line-height);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] span[is="inline-price"] .price-recurrence {
  font-size: var(--merch-card-simplified-pricing-express-price-recurrence-font-size);
  font-weight: var(--merch-card-simplified-pricing-express-price-recurrence-font-weight);
  line-height: var(--merch-card-simplified-pricing-express-price-recurrence-line-height);
}

/* Strikethrough price styling */
merch-card[variant="simplified-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price,
merch-card[variant="simplified-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price-strikethrough,
merch-card[variant="simplified-pricing-express"] span.placeholder-resolved[data-template='strikethrough'] {
  text-decoration: none;
  font-size: var(--merch-card-simplified-pricing-express-price-p-font-size);
  line-height: var(--merch-card-simplified-pricing-express-price-p-line-height);
}

merch-card[variant="simplified-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price {
  color: var(--spectrum-gray-500);
}

merch-card[variant="simplified-pricing-express"] [slot="price"] p a {
  color: var(--spectrum-indigo-900);
  font-weight: 500;
  text-decoration: underline;
  white-space: nowrap;
}

merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"] .price-integer,
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"] .price-decimals-delimiter,
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"] .price-decimals {
  font-size: 28px;
  font-weight: 700;
  line-height: 36.4px;
  text-decoration-thickness: 2px;
}

merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"][data-template='strikethrough'] .price-integer,
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"][data-template='strikethrough'] .price-decimals-delimiter,
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"][data-template='strikethrough'] .price-decimals {
  text-decoration: line-through;
}

/* Apply indigo-800 color to optical price when preceded by strikethrough */
merch-card[variant="simplified-pricing-express"] span[is="inline-price"][data-template='strikethrough'] + span[is="inline-price"][data-template='optical'],
merch-card[variant="simplified-pricing-express"] span[is="inline-price"][data-template='strikethrough'] + span[is="inline-price"][data-template='optical'] .price-currency-symbol {
  color: var(--spectrum-indigo-900);
}

/* Ensure non-first paragraph prices have normal font weight */
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-integer,
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-decimals-delimiter,
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-decimals,
merch-card[variant="simplified-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-recurrence {
  font-size: var(--merch-card-simplified-pricing-express-price-p-font-size);
  font-weight: var(--merch-card-simplified-pricing-express-price-p-font-weight);
  line-height: var(--merch-card-simplified-pricing-express-price-p-line-height);
}

/* Hide screen reader only text */
merch-card[variant="simplified-pricing-express"] sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* mas-mnemonic inline styles for simplified-pricing-express */
merch-card[variant="simplified-pricing-express"] mas-mnemonic {
    display: inline-block;
    align-items: center;
    vertical-align: baseline;
    margin-inline-end: 8px;
    overflow: visible;
    padding-top: 16px;
}

/* Tooltip containers - overflow handled by Shadow DOM */

/* Mobile styles */
@media screen and ${ge} {
  merch-card-collection.simplified-pricing-express {
    gap: 8px;
  }
  
  merch-card[variant="simplified-pricing-express"] {
    width: 311px;
    max-width: 311px;
  }

  /* Badge alignment on mobile */
  merch-card[variant="simplified-pricing-express"] [slot="badge"] {
    font-size: 16px;
    font-weight: 400;
  }

  /* Trial badge alignment on mobile */
  merch-card[variant="simplified-pricing-express"] [slot="trial-badge"] {
    margin-left: 0;
    align-self: flex-start;
  }
  
  merch-card[variant="simplified-pricing-express"] [slot="trial-badge"] merch-badge {
    font-size: 12px;
    line-height: 20.8px;
  }

  /* Fix spacing between cards on mobile */
  main merch-card-collection.simplified-pricing-express p:has(merch-card[variant="simplified-pricing-express"]),
  main .section p:has(merch-card[variant="simplified-pricing-express"]) {
    margin: 0;
  }
}

/* Collapse/expand styles for all tablet and mobile viewports */
@media screen and ${pe} {
  /* Collapsed state - hide content sections */
  merch-card[variant="simplified-pricing-express"]:not([data-expanded="true"]) [slot="body-xs"],
  merch-card[variant="simplified-pricing-express"]:not([data-expanded="true"]) [slot="price"],
  merch-card[variant="simplified-pricing-express"]:not([data-expanded="true"]) [slot="cta"],
  merch-card[variant="simplified-pricing-express"][data-expanded="false"] [slot="body-xs"],
  merch-card[variant="simplified-pricing-express"][data-expanded="false"] [slot="price"],
  merch-card[variant="simplified-pricing-express"][data-expanded="false"] [slot="cta"] {
    display: none;
    visibility: hidden;
    height: 0;
    margin: 0;
    padding: 0;
  }

  /* Expanded state - explicitly show content */
  merch-card[variant="simplified-pricing-express"][data-expanded="true"] [slot="body-xs"],
  merch-card[variant="simplified-pricing-express"][data-expanded="true"] [slot="price"],
  merch-card[variant="simplified-pricing-express"][data-expanded="true"] [slot="cta"] {
    display: block;
    visibility: visible;
    height: auto;
  }

  /* Collapsed card should have fixed height and padding */
  merch-card[variant="simplified-pricing-express"][data-expanded="false"],
  merch-card[variant="simplified-pricing-express"]:not([data-expanded="true"]) {
    max-height: 57px;
    padding: 0;
    overflow: hidden;
    border-radius: 8px;
  }

  merch-card[variant="simplified-pricing-express"][gradient-border="true"][data-expanded="false"],
  merch-card[variant="simplified-pricing-express"][gradient-border="true"]:not([data-expanded="true"]) {
    max-height: 85px;
  }
}

/* Tablet styles - extending mobile styles with specific adjustments */
@media screen and ${Q} and ${pe} {
  merch-card-collection.simplified-pricing-express {
    padding: var(--spacing-m) 32px;
    grid-template-columns: 1fr;
    gap: 24px;
    width: var(--merch-card-simplified-pricing-express-tablet-width);
    margin: 0 auto;
  }
  
  merch-card[variant="simplified-pricing-express"] {
      min-width: var(--merch-card-simplified-pricing-express-tablet-width);
  }
}

merch-card[variant="simplified-pricing-express"] [slot="cta"] sp-button[variant="accent"],
merch-card[variant="simplified-pricing-express"] [slot="cta"] button.spectrum-Button--accent,
merch-card[variant="simplified-pricing-express"] [slot="cta"] a.spectrum-Button.spectrum-Button--accent {
    background-color: var(--spectrum-indigo-900);
    color: var(--spectrum-white, #ffffff);
    width: 100%;
}

/* Ensure text color is applied to the label span element for accessibility */
merch-card[variant="simplified-pricing-express"] [slot="cta"] sp-button[variant="accent"] .spectrum-Button-label,
merch-card[variant="simplified-pricing-express"] [slot="cta"] button.spectrum-Button--accent .spectrum-Button-label,
merch-card[variant="simplified-pricing-express"] [slot="cta"] a.spectrum-Button.spectrum-Button--accent .spectrum-Button-label {
    color: var(--spectrum-white, #ffffff);
}
`,Ii={title:{tag:"h3",slot:"heading-xs",maxCount:250,withSuffix:!0},badge:{tag:"div",slot:"badge",default:"spectrum-blue-400"},allowedBadgeColors:["spectrum-blue-400","spectrum-gray-300","spectrum-yellow-300","gradient-purple-blue","gradient-firefly-spectrum"],description:{tag:"div",slot:"body-xs",maxCount:2e3,withSuffix:!1},prices:{tag:"div",slot:"price"},ctas:{slot:"cta",size:"XL"},borderColor:{attribute:"border-color",specialValues:{gray:"var(--spectrum-gray-300)",blue:"var(--spectrum-blue-400)","gradient-purple-blue":"linear-gradient(96deg, #B539C8 0%, #7155FA 66%, #3B63FB 100%)","gradient-firefly-spectrum":"linear-gradient(96deg, #D73220 0%, #D92361 33%, #7155FA 100%)"}},disabledAttributes:["badgeColor","badgeBorderColor","trialBadgeColor","trialBadgeBorderColor"],supportsDefaultChild:!0},It=class extends Z{getGlobalCSS(){return Pn}get aemFragmentMapping(){return Ii}get headingSelector(){return'[slot="heading-xs"]'}syncHeights(){if(this.card.getBoundingClientRect().width===0)return;let e=this.card.querySelector('[slot="body-xs"]');e&&this.updateCardElementMinHeight(e,"description");let t=this.card.querySelector('[slot="price"]');t&&this.updateCardElementMinHeight(t,"price")}async postCardUpdateHook(){if(this.card.isConnected&&(await this.card.updateComplete,this.card.prices?.length&&await Promise.all(this.card.prices.map(e=>e.onceSettled?.())),je())){let e=this.getContainer();if(!e)return;let t=`--consonant-merch-card-${this.card.variant}`,r=e.style.getPropertyValue(`${t}-description-height`);requestAnimationFrame(r?()=>{this.syncHeights()}:()=>{e.querySelectorAll(`merch-card[variant="${this.card.variant}"]`).forEach(i=>i.variantLayout?.syncHeights?.())})}}connectedCallbackHook(){!this.card||this.card.failed||(this.setupAccordion(),this.card?.hasAttribute("data-default-card")&&!je()&&this.card.setAttribute("data-expanded","true"))}setupAccordion(){let e=this.card;if(!e)return;let t=()=>{if(je())e.removeAttribute("data-expanded");else{let i=e.hasAttribute("data-default-card");e.setAttribute("data-expanded",i?"true":"false")}};t();let r=window.matchMedia(pe);this.mediaQueryListener=()=>{t()},r.addEventListener("change",this.mediaQueryListener)}disconnectedCallbackHook(){this.mediaQueryListener&&window.matchMedia(pe).removeEventListener("change",this.mediaQueryListener)}handleChevronClick(e){e.preventDefault(),e.stopPropagation();let t=this.card;if(!t||je())return;let r=t.getAttribute("data-expanded")==="true"?"false":"true";t.setAttribute("data-expanded",r)}renderLayout(){return v`
            <div class="badge-wrapper">
                <slot name="badge"></slot>
            </div>
            <div class="card-content">
                <div class="header">
                    <slot name="heading-xs"></slot>
                    <slot name="trial-badge"></slot>
                    <button class="chevron-button" @click=${e=>this.handleChevronClick(e)}>
                        <svg class="chevron-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.5L5 8.5L6.4 7.1L12 12.7L17.6 7.1L19 8.5L12 15.5Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div class="description">
                    <slot name="body-xs"></slot>
                </div>
                <div class="price">
                    <slot name="price"></slot>
                </div>
                <div class="cta">
                    <slot name="cta"></slot>
                </div>
            </div>
            <slot></slot>
        `}};f(It,"variantStyle",X`
        :host([variant='simplified-pricing-express']) {
            --merch-card-simplified-pricing-express-width: 365px;
            --merch-card-simplified-pricing-express-padding: 24px;
            --merch-card-simplified-pricing-express-padding-mobile: 16px;
            --merch-card-simplified-pricing-express-price-font-size: 28px;
            --merch-card-simplified-pricing-express-price-font-weight: 700;
            --merch-card-simplified-pricing-express-price-line-height: 36.4px;
            --merch-card-simplified-pricing-express-price-currency-font-size: 22px;
            --merch-card-simplified-pricing-express-price-currency-font-weight: 700;
            --merch-card-simplified-pricing-express-price-currency-line-height: 28.6px;
            --merch-card-simplified-pricing-express-price-currency-symbol-font-size: 22px;
            --merch-card-simplified-pricing-express-price-currency-symbol-font-weight: 700;
            --merch-card-simplified-pricing-express-price-currency-symbol-line-height: 28.6px;
            --merch-card-simplified-pricing-express-price-recurrence-font-size: 12px;
            --merch-card-simplified-pricing-express-price-recurrence-font-weight: 700;
            --merch-card-simplified-pricing-express-price-recurrence-line-height: 15.6px;
            --merch-card-simplified-pricing-express-body-xs-font-size: 14px;
            --merch-card-simplified-pricing-express-body-xs-line-height: 18.2px;
            --merch-card-simplified-pricing-express-price-p-font-size: 12px;
            --merch-card-simplified-pricing-express-price-p-font-weight: 400;
            --merch-card-simplified-pricing-express-price-p-line-height: 15.6px;
            --merch-card-simplified-pricing-express-cta-font-size: 18px;
            --merch-card-simplified-pricing-express-cta-font-weight: 700;
            --merch-card-simplified-pricing-express-cta-line-height: 23.4px;
            
            /* Gradient definitions */
            --gradient-purple-blue: linear-gradient(96deg, #B539C8 0%, #7155FA 66%, #3B63FB 100%);
            --gradient-firefly-spectrum: linear-gradient(96deg, #D73220 0%, #D92361 33%, #7155FA 100%);
            width: var(--merch-card-simplified-pricing-express-width);
            max-width: var(--merch-card-simplified-pricing-express-width);
            background: transparent;
            border: none;
            display: flex;
            flex-direction: column;
            overflow: visible;
            box-sizing: border-box;
            position: relative;
        }

        :host([variant='simplified-pricing-express']) .badge-wrapper {
            padding: 4px 12px;
            border-radius: 8px 8px 0 0;
            text-align: center;
            font-size: 12px;
            font-weight: 500;
            line-height: 15.6px;
            color: var(--spectrum-gray-800);
            position: relative;
            min-height: 23px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        :host([variant='simplified-pricing-express']:not(:has([slot="badge"]:not(:empty)))) .badge-wrapper {
            display: none;
        }

        :host([variant='simplified-pricing-express']) .card-content {
            border-radius: 8px;
            padding: var(--merch-card-simplified-pricing-express-padding);
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: var(--consonant-merch-spacing-xxs);
            position: relative;
        }
        
        :host([variant='simplified-pricing-express']) .card-content > * {
            position: relative;
        }
        
        :host([variant='simplified-pricing-express']:not([gradient-border='true'])) .card-content {
            background: var(--spectrum-gray-50);
            border: 1px solid var(--consonant-merch-card-border-color, var(--spectrum-gray-100));
        }
        
        :host([variant='simplified-pricing-express']:not([gradient-border='true'])[data-expanded='false']) .card-content {
            overflow: hidden;
        }
        
        :host([variant='simplified-pricing-express']:has([slot="badge"]:not(:empty))) .card-content {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        
        :host([variant='simplified-pricing-express']:not([gradient-border='true']):has([slot="badge"]:not(:empty))) .card-content {
            border-top: 1px solid var(--consonant-merch-card-border-color, var(--spectrum-gray-100));
        }
        
        :host([variant='simplified-pricing-express']:has([slot="badge"]:not(:empty))) .badge-wrapper {
            margin-bottom: -2px;
        }

        :host([variant='simplified-pricing-express'][gradient-border='true']) .badge-wrapper {
            border: none;
            margin-bottom: -6px;
            padding-bottom: 6px;
        }
        
        :host([variant='simplified-pricing-express'][gradient-border='true']) .badge-wrapper ::slotted(*) {
            color: white !important;
        }

        :host([variant='simplified-pricing-express'][gradient-border='true']) .card-content {
            border: none;
            padding: calc(var(--merch-card-simplified-pricing-express-padding) + 2px);
            border-radius: 8px;
        }
        
        :host([variant='simplified-pricing-express'][gradient-border='true']) .card-content::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            bottom: 1px;
            background: var(--spectrum-gray-50);
            border-radius: 7px;
            z-index: 0;
            pointer-events: none;
        }
        
        :host([variant='simplified-pricing-express'][border-color='gradient-purple-blue']) .badge-wrapper,
        :host([variant='simplified-pricing-express'][border-color='gradient-purple-blue']) .card-content {
            background: var(--gradient-purple-blue);
        }
        
        :host([variant='simplified-pricing-express'][border-color='gradient-firefly-spectrum']) .badge-wrapper,
        :host([variant='simplified-pricing-express'][border-color='gradient-firefly-spectrum']) .card-content {
            background: var(--gradient-firefly-spectrum);
        }
        
        :host([variant='simplified-pricing-express'][gradient-border='true']:has([slot="badge"]:not(:empty))) .card-content {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        
        :host([variant='simplified-pricing-express'][gradient-border='true']:has([slot="badge"]:not(:empty))) .card-content::before {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }
        
        :host([variant='simplified-pricing-express']) .header {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 8px;
        }

        :host([variant='simplified-pricing-express']) [slot="heading-xs"] {
            font-size: 18px;
            font-weight: 700;
            line-height: 23.4px;
            color: var(--spectrum-gray-800);
        }

        :host([variant='simplified-pricing-express']) .description {
            gap: 16px;
            display: flex;
            flex-direction: column;
        }

        :host([variant='simplified-pricing-express']) .price {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top: auto;
        }

        /* Desktop only - Fixed heights for alignment */
        @media (min-width: 1200px) {
            :host([variant='simplified-pricing-express']) .card-content {
                height: 100%;
            }

            :host([variant='simplified-pricing-express']) .description {
                flex: 1;
            }

            :host([variant='simplified-pricing-express']) .cta {
                flex-shrink: 0;
            }
        }

        :host([variant='simplified-pricing-express']) .cta,
        :host([variant='simplified-pricing-express']) .cta ::slotted(*) {
            width: 100%;
            display: block;
        }

        /* Mobile accordion styles */
        :host([variant='simplified-pricing-express']) .chevron-button {
            display: none;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        :host([variant='simplified-pricing-express']) .chevron-icon {
            width: 24px;
            height: 24px;
            color: var(--spectrum-gray-800);
            transition: transform 0.3s ease;
        }

        /* Chevron rotation based on parent card's data-expanded attribute */
        :host-context(merch-card[data-expanded='false']) .chevron-icon {
            transform: rotate(0deg);
        }
        :host-context(merch-card[data-expanded='true']) .chevron-icon {
            transform: rotate(180deg);
        }

        /* Mobile and Tablet styles */
        @media (max-width: 1199px) {
            :host([variant='simplified-pricing-express']) {
                width: 311px;
                max-width: 311px;
                min-height: auto;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            :host([variant='simplified-pricing-express']) .header {
                position: relative;
                justify-content: space-between;
                align-items: center;
                gap: 8px;
            }

            :host([variant='simplified-pricing-express']) .chevron-button {
                display: block;
                flex-shrink: 0;
                margin-left: auto;
            }
            
            :host([variant='simplified-pricing-express'][gradient-border='true']) .card-content,
            :host([variant='simplified-pricing-express']:not([gradient-border='true'])) .card-content {
                padding: calc(var(--merch-card-simplified-pricing-express-padding-mobile) + 2px);
            }
            
            /* Hide badge-wrapper on mobile/tablet except for gradient borders */
            :host([variant='simplified-pricing-express']:not([gradient-border='true'])) .badge-wrapper {
                display: none;
            }
            
            /* Gradient border collapsed state - limit badge-wrapper height */
            :host([variant='simplified-pricing-express'][gradient-border='true'][data-expanded='false']) .card-content {
                overflow: hidden;
                padding: 16px 16px 35px 16px;
            }
        }
    `);var _n=`
:root {
    --merch-card-full-pricing-express-width: 378px;
    --merch-card-full-pricing-express-mobile-width: 365px;
}

/* Collection grid layout */
merch-card-collection.full-pricing-express {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: stretch;
    gap: 16px;
}

/* Mobile - 1 column */
merch-card-collection.full-pricing-express {
    grid-template-columns: 1fr;
    max-width: var(--merch-card-full-pricing-express-mobile-width);
    margin: 0 auto;
    padding: 0 16px;
}

/* Tablet - 2 columns */
@media screen and (min-width: 1025px) and (max-width: 1199px) {
    merch-card-collection.full-pricing-express {
        grid-template-columns: repeat(2, 1fr);
        max-width: calc(2 * var(--merch-card-full-pricing-express-width) + 16px);
    }
}

/* Desktop small - 2 columns */
@media screen and ${$} and (max-width: 1399px) {
    merch-card-collection.full-pricing-express {
        grid-template-columns: repeat(2, 1fr);
        max-width: calc(2 * var(--merch-card-full-pricing-express-width) + 16px);
    }
}

/* Desktop large - 3 columns */
@media screen and (min-width: 1400px) {
    merch-card-collection.full-pricing-express {
        grid-template-columns: repeat(3, 1fr);
        max-width: calc(3 * var(--merch-card-full-pricing-express-width) + 32px);
    }
}

/* Remove default paragraph margins */
merch-card[variant="full-pricing-express"] p {
    margin: 0 !important;
    font-size: inherit;
}

/* Slot-specific styles */
merch-card[variant="full-pricing-express"] [slot="heading-xs"] {
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: var(--spectrum-gray-800);
    margin-bottom: 8px;
}

/* Inline mnemonics inside heading */
merch-card[variant="full-pricing-express"] [slot="heading-xs"] mas-mnemonic {
    display: inline-flex;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 8px;
    align-items: flex-end;
}

merch-card[variant="full-pricing-express"] [slot="heading-xs"] mas-mnemonic img {
    width: 14px;
    height: 14px;
    object-fit: contain;
}

/* Icons slot styling */
merch-card[variant="full-pricing-express"] [slot="icons"] {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-shrink: 0;
}

merch-card[variant="full-pricing-express"] [slot="icons"] merch-icon {
    --img-width: 20px;
    --img-height: 20px;
}

merch-card[variant="full-pricing-express"] [slot="trial-badge"] {
    position: absolute;
    top: -8px;
    right: 16px;
    background: var(--spectrum-indigo-300);
    border-radius: 4px;
    font-size: var(--merch-card-full-pricing-express-trial-badge-font-size);
    font-weight: var(--merch-card-full-pricing-express-trial-badge-font-weight);
    line-height: var(--merch-card-full-pricing-express-trial-badge-line-height);
    white-space: nowrap;
    z-index: 0;
    max-width: calc(100% - 24px);
    text-align: right;
}

merch-card[variant="full-pricing-express"] [slot="trial-badge"] merch-badge {
    font-size: var(--merch-card-full-pricing-express-trial-badge-font-size);
    font-weight: var(--merch-card-full-pricing-express-trial-badge-font-weight);
    line-height: var(--merch-card-full-pricing-express-trial-badge-line-height);
    color: var(--spectrum-indigo-900);
}

merch-card[variant="full-pricing-express"] [slot="trial-badge"]:empty {
    display: none;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] {
    font-size: 16px;
    line-height: 20.8px;
    color: var(--spectrum-gray-900);
}

merch-card[variant="full-pricing-express"] [slot="body-s"] hr {
    margin-top: 16px;
    margin-bottom: 24px;
}

merch-card[variant="full-pricing-express"] [slot="shortDescription"] {
    font-size: 16px;
    line-height: 20.8px;
    color: var(--spectrum-gray-700);
    margin-bottom: var(--merch-card-full-pricing-express-section-gap);
}

merch-card[variant="full-pricing-express"] [slot="body-s"] ul {
    margin: 0;
    padding-left: 20px;
    list-style: disc;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] li {
    margin-bottom: 8px;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] li:last-child {
    margin-bottom: 0;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] p {
    padding: 8px;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] p a {
    color: var(--spectrum-indigo-900);
    font-weight: 700;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] .button-container {
    margin: 0;
    padding: 0;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] p:last-child a {
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    color: var(--spectrum-indigo-900);
    background: transparent;
    border: none;
    margin: 0;
    font-size: 16px;
}

merch-card[variant="full-pricing-express"] [slot="body-s"] p:last-child a:hover {
    background-color: initial;
    border: none;
}

/* Price styling */
merch-card[variant="full-pricing-express"] [slot="price"] {
    display: flex;
    flex-direction: column;
    width: 100%;
}

merch-card[variant="full-pricing-express"] [slot="price"] > p:first-child {
    display: flex;
    align-items: baseline;
    margin: 0;
}

merch-card[variant="full-pricing-express"] [slot="price"] > p span[is="inline-price"]:first-child {
    margin-right: 8px;
}

merch-card[variant="full-pricing-express"] [slot="price"] span[is="inline-price"] {
    font-size: var(--merch-card-full-pricing-express-price-font-size);
    line-height: var(--merch-card-full-pricing-express-price-line-height);
}

merch-card[variant="full-pricing-express"] [slot="price"] span[is="inline-price"][data-template="optical"] {
    font-size: var(--merch-card-full-pricing-express-price-font-size);
    color: var(--spectrum-gray-800);
}

merch-card[variant="full-pricing-express"] [slot="price"] .price-integer,
merch-card[variant="full-pricing-express"] [slot="price"] .price-decimals-delimiter,
merch-card[variant="full-pricing-express"] [slot="price"] .price-decimals {
    font-size: 28px;
    font-weight: 700;
    line-height: 36.4px;
}

merch-card[variant="full-pricing-express"] [slot="price"] .price-currency-symbol {
    font-size: var(--merch-card-full-pricing-express-price-font-size);
    font-weight: var(--merch-card-full-pricing-express-price-font-weight);
    line-height: var(--merch-card-full-pricing-express-price-line-height);
}

merch-card[variant="full-pricing-express"] [slot="price"] span[is="inline-price"] .price-recurrence {
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
}

merch-card[variant="full-pricing-express"] [slot="price"] p {
    font-size: 12px;
    font-weight: 400;
    line-height: 15.6px;
    color: var(--spectrum-gray-700);
}

merch-card[variant="full-pricing-express"] [slot="price"] > p span[is="inline-price"]:only-child {
    color: var(--spectrum-gray-700);
}

merch-card[variant="full-pricing-express"] [slot="price"] > p:first-child span[is="inline-price"][data-template="strikethrough"] + span[is="inline-price"] {
    color: var(--spectrum-indigo-900);
}

/* Target inline prices in paragraphs that are not the first paragraph */
merch-card[variant="full-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] {
    font-size: 12px;
    font-weight: 500;
    line-height: 15.6px;
    margin-right: 0;
}

merch-card[variant="full-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-integer,
merch-card[variant="full-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-decimals-delimiter,
merch-card[variant="full-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-decimals,
merch-card[variant="full-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-currency-symbol,
merch-card[variant="full-pricing-express"] [slot="price"] > p:not(:first-child) span[is="inline-price"] .price-recurrence {
    font-size: 12px;
    font-weight: 500;
    line-height: 15.6px;
}


merch-card[variant="full-pricing-express"] [slot="price"] strong {
    color: var(--spectrum-indigo-900);
}
merch-card[variant="full-pricing-express"] [slot="price"] p a {
    color: var(--spectrum-indigo-900);
    font-weight: 700;
    text-decoration: none;
}

/* Strikethrough price styling */
merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price,
merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price-strikethrough,
merch-card[variant="full-pricing-express"] span.placeholder-resolved[data-template='strikethrough'] {
    text-decoration: none;
    font-size: 12px;
    line-height: 15.6px;
}

merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price {
    color: var(--spectrum-gray-700);
}

merch-card[variant="full-pricing-express"] [slot="price"] p .heading-xs,
merch-card[variant="full-pricing-express"] [slot="price"] p .heading-s,
merch-card[variant="full-pricing-express"] [slot="price"] p .heading-m,
merch-card[variant="full-pricing-express"] [slot="price"] p .heading-l {
    font-size: 22px;
    line-height: 28.6px;
    text-align: center;
    width: 100%;
}

merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price-integer,
merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price-decimals-delimiter,
merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] .price-decimals {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
}

/* Apply indigo-800 color to optical price when preceded by strikethrough */
merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] + span[is="inline-price"][data-template='optical'],
merch-card[variant="full-pricing-express"] span[is="inline-price"][data-template='strikethrough'] + span[is="inline-price"][data-template='optical'] .price-currency-symbol {
    color: var(--spectrum-indigo-900);
}

/* CTA button styling */
merch-card[variant="full-pricing-express"] [slot="cta"] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

merch-card[variant="full-pricing-express"] [slot="cta"] sp-button,
merch-card[variant="full-pricing-express"] [slot="cta"] button,
merch-card[variant="full-pricing-express"] [slot="cta"] a.button {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 18px;
    line-height: 23.4px;
    margin: 0;
    padding: 12px 24px 13px 24px;
    border-radius: 26px;
}

merch-card[variant="full-pricing-express"] [slot="cta"] sp-button[variant="accent"],
merch-card[variant="full-pricing-express"] [slot="cta"] button.spectrum-Button--accent,
merch-card[variant="full-pricing-express"] [slot="cta"] a.spectrum-Button.spectrum-Button--accent {
    background-color: var(--spectrum-indigo-900);
    color: var(--spectrum-white, #ffffff);
    width: 100%;
}

/* Ensure text color is applied to the label span element for accessibility */
merch-card[variant="full-pricing-express"] [slot="cta"] sp-button[variant="accent"] .spectrum-Button-label,
merch-card[variant="full-pricing-express"] [slot="cta"] button.spectrum-Button--accent .spectrum-Button-label,
merch-card[variant="full-pricing-express"] [slot="cta"] a.spectrum-Button.spectrum-Button--accent .spectrum-Button-label {
    color: var(--spectrum-white, #ffffff);
}

/* Badge styling */
merch-card[variant="full-pricing-express"] merch-badge {
    white-space: nowrap;
    color: var(--spectrum-white);
    font-size: 16px;
    font-weight: bold;
    line-height: 20.8px;
}

/* Mobile-specific selective display of body-s */
@media (max-width: 1024px) {
    /* Show body-s container */
    merch-card[variant="full-pricing-express"] [slot="body-s"] {
        display: block;
    }

    /* Hide all direct children by default */
    merch-card[variant="full-pricing-express"] [slot="body-s"] > * {
        display: none;
    }

    /* Show only the last hr (2nd one) */
    merch-card[variant="full-pricing-express"] [slot="body-s"] > hr:last-of-type {
        display: block;
        margin: 24px 0;
    }

    /* Show only the button container (last p tag) */
    merch-card[variant="full-pricing-express"] [slot="body-s"] > p:last-child {
        display: block;
    }
    
    merch-card[variant="full-pricing-express"] {
        max-width: 365px;
    }
    
    /* Price font size on mobile */
    merch-card[variant="full-pricing-express"] [slot="price"] .price-currency-symbol,
    merch-card[variant="full-pricing-express"] [slot="price"] .price-integer,
    merch-card[variant="full-pricing-express"] [slot="price"] .price-decimals-delimiter,
    merch-card[variant="full-pricing-express"] [slot="price"] .price-decimals,
    merch-card[variant="full-pricing-express"] [slot="price"] .price-recurrence,
    merch-card[variant="full-pricing-express"] [slot="price"] .price-strikethrough,
    merch-card[variant="full-pricing-express"] [slot="price"] .price-unit-type,
    merch-card[variant="full-pricing-express"] [slot="price"] .price-tax-inclusivity {
        font-size: 22px;
    }
    
    /* Badge alignment on mobile */
    merch-card[variant="full-pricing-express"] [slot="badge"] {
        font-size: 16px;
        font-weight: 400;
    }
    
    /* Trial badge alignment on mobile */
    merch-card[variant="full-pricing-express"] [slot="trial-badge"] {
        margin-left: 0;
        align-self: flex-start;
    }
    
    merch-card[variant="full-pricing-express"] [slot="trial-badge"] merch-badge {
        font-size: 12px;
        line-height: 20.8px;
    }
}

/* Hide screen reader only text */
merch-card[variant="full-pricing-express"] sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* mas-tooltip inline styles for full-pricing-express */
merch-card[variant="full-pricing-express"] mas-tooltip {
    display: inline-block;
    align-items: center;
    vertical-align: baseline;
    margin-right: 8px;
    overflow: visible;
    padding-top: 16px;
}

/* Responsive rules for desktop/tablet */
@media (min-width: 1025px) {
    merch-card[variant="full-pricing-express"] [slot="body-s"] {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
    }

    merch-card[variant="full-pricing-express"] [slot="body-s"] p:first-child {
        padding: 16px 8px;
    }

    /* Ensure the second divider wrapper stays at bottom with proper spacing */
    merch-card[variant="full-pricing-express"] [slot="body-s"] > hr:last-of-type {
        margin-top: auto;
        padding-top: 24px;
        margin-bottom: 16px;
        border: none;
        border-bottom: 1px solid #E9E9E9;
        height: 0;
        background: transparent;
    }

    /* Ensure the button container stays at the bottom */
    merch-card[variant="full-pricing-express"] [slot="body-s"] > p.button-container,
    merch-card[variant="full-pricing-express"] [slot="body-s"] > p:last-child {
        margin-top: 0;
        margin-bottom: 0;
    }
}
`,Di={title:{tag:"h3",slot:"heading-xs",maxCount:250,withSuffix:!0},badge:{tag:"div",slot:"badge",default:"spectrum-blue-400"},allowedBadgeColors:["spectrum-blue-400","spectrum-gray-300","spectrum-yellow-300","gradient-purple-blue","gradient-firefly-spectrum"],description:{tag:"div",slot:"body-s",maxCount:2e3,withSuffix:!1},shortDescription:{tag:"div",slot:"short-description",maxCount:3e3,withSuffix:!1},prices:{tag:"div",slot:"price"},trialBadge:{tag:"div",slot:"trial-badge"},ctas:{slot:"cta",size:"XL"},mnemonics:{size:"l"},borderColor:{attribute:"border-color",specialValues:{gray:"var(--spectrum-gray-300)",blue:"var(--spectrum-blue-400)","gradient-purple-blue":"linear-gradient(96deg, #B539C8 0%, #7155FA 66%, #3B63FB 100%)","gradient-firefly-spectrum":"linear-gradient(96deg, #D73220 0%, #D92361 33%, #7155FA 100%)"}},disabledAttributes:[]},Dt=class extends Z{getGlobalCSS(){return _n}get aemFragmentMapping(){return Di}get headingSelector(){return'[slot="heading-xs"]'}syncHeights(){if(this.card.getBoundingClientRect().width<=2)return;let e=this.card.querySelector('[slot="short-description"]');e&&this.updateCardElementMinHeight(e,"short-description");let t=this.card.querySelector('[slot="price"]');t&&this.updateCardElementMinHeight(t,"price");let r=this.card.querySelector('[slot="cta"]');r&&this.updateCardElementMinHeight(r,"cta")}async postCardUpdateHook(){if(this.card.isConnected&&(await this.card.updateComplete,await Promise.all(this.card.prices.map(e=>e.onceSettled())),window.matchMedia("(min-width: 1025px)").matches)){let e=this.getContainer();if(!e)return;let t=`--consonant-merch-card-${this.card.variant}`,r=e.style.getPropertyValue(`${t}-price-height`);requestAnimationFrame(r?()=>{this.syncHeights()}:()=>{e.querySelectorAll(`merch-card[variant="${this.card.variant}"]`).forEach(i=>i.variantLayout?.syncHeights?.())})}}renderLayout(){return v`
            <div class="badge-wrapper">
                <slot name="badge"></slot>
            </div>
            <div class="card-content">
                <div class="header">
                    <slot name="heading-xs"></slot>
                    <slot name="icons"></slot>
                </div>
                <div class="short-description">
                    <slot name="short-description"></slot>
                </div>
                <div class="price-container">
                    <slot name="trial-badge"></slot>
                    <slot name="price"></slot>
                </div>
                <div class="cta">
                    <slot name="cta"></slot>
                </div>
                <div class="description">
                    <slot name="body-s"></slot>
                </div>
            </div>
            <slot></slot>
        `}};f(Dt,"variantStyle",X`
        :host([variant='full-pricing-express']) {
            /* CSS Variables */
            --merch-card-full-pricing-express-width: 437px;
            --merch-card-full-pricing-express-mobile-width: 303px;
            --merch-card-full-pricing-express-padding: 24px;
            --merch-card-full-pricing-express-padding-mobile: 20px;
            --merch-card-full-pricing-express-section-gap: 24px;
            
            /* Price container specific */
            --merch-card-full-pricing-express-price-bg: #F8F8F8;
            --merch-card-full-pricing-express-price-radius: 8px;

            /* Typography - matching simplified-pricing-express */
            --merch-card-full-pricing-express-trial-badge-font-size: 12px;
            --merch-card-full-pricing-express-trial-badge-font-weight: 700;
            --merch-card-full-pricing-express-trial-badge-line-height: 15.6px;
            --merch-card-full-pricing-express-price-font-size: 28px;
            --merch-card-full-pricing-express-price-line-height: 36.4px;
            --merch-card-full-pricing-express-price-font-weight: 700;
            --merch-card-full-pricing-express-cta-font-size: 18px;
            --merch-card-full-pricing-express-cta-font-weight: 700;
            --merch-card-full-pricing-express-cta-line-height: 23.4px;
            
            /* Gradient definitions (reused) */
            --gradient-purple-blue: linear-gradient(96deg, #B539C8 0%, #7155FA 66%, #3B63FB 100%);
            --gradient-firefly-spectrum: linear-gradient(96deg, #D73220 0%, #D92361 33%, #7155FA 100%);
            
            width: var(--merch-card-full-pricing-express-width);
            max-width: var(--merch-card-full-pricing-express-width);
            background: transparent;
            border: none;
            display: flex;
            flex-direction: column;
            overflow: visible;
            box-sizing: border-box;
            position: relative;
        }

        /* Badge wrapper styling (same as simplified) */
        :host([variant='full-pricing-express']) .badge-wrapper {
            padding: 4px 12px;
            border-radius: 8px 8px 0 0;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            line-height: 20.8px;
            color: var(--spectrum-gray-800);
            position: relative;
            min-height: 23px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Card content styling */
        :host([variant='full-pricing-express']) .card-content {
            border-radius: 8px;
            padding: var(--merch-card-full-pricing-express-padding);
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        :host([variant='full-pricing-express']) .card-content > * {
            position: relative;
        }
        
        /* Regular border styling */
        :host([variant='full-pricing-express']:not([gradient-border='true'])) .card-content {
            background: var(--spectrum-gray-50);
            border: 1px solid var(--consonant-merch-card-border-color, var(--spectrum-gray-100));
        }
        
        /* When badge exists, adjust card content border radius */
        :host([variant='full-pricing-express']:has([slot="badge"]:not(:empty))) .card-content {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        
        /* When badge exists with regular border, ensure top border */
        :host([variant='full-pricing-express']:not([gradient-border='true']):has([slot="badge"]:not(:empty))) .card-content {
            border-top: 1px solid var(--consonant-merch-card-border-color, var(--spectrum-gray-100));
        }
        
        /* When badge has content, ensure seamless connection */
        :host([variant='full-pricing-express']:has([slot="badge"]:not(:empty))) .badge-wrapper {
            margin-bottom: -2px;
        }
        
        /* Gradient border styling (reused from simplified) */
        :host([variant='full-pricing-express'][gradient-border='true']) .badge-wrapper {
            border: none;
            margin-bottom: -6px;
            padding-bottom: 6px;
        }
        
        :host([variant='full-pricing-express'][gradient-border='true']) .badge-wrapper ::slotted(*) {
            color: white;
        }

        :host([variant='full-pricing-express'][gradient-border='true']) .card-content {
            border: none;
            padding: calc(var(--merch-card-full-pricing-express-padding) + 2px);
            border-radius: 8px;
        }
        
        :host([variant='full-pricing-express'][gradient-border='true']) .card-content::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            bottom: 1px;
            background: var(--spectrum-gray-50);
            border-radius: 7px;
            z-index: 0;
            pointer-events: none;
        }
        
        /* Gradient backgrounds */
        :host([variant='full-pricing-express'][border-color='gradient-purple-blue']) .badge-wrapper,
        :host([variant='full-pricing-express'][border-color='gradient-purple-blue']) .card-content {
            background: var(--gradient-purple-blue);
        }
        
        :host([variant='full-pricing-express'][border-color='gradient-firefly-spectrum']) .badge-wrapper,
        :host([variant='full-pricing-express'][border-color='gradient-firefly-spectrum']) .card-content {
            background: var(--gradient-firefly-spectrum);
        }
        
        :host([variant='full-pricing-express'][gradient-border='true']:has([slot="badge"]:not(:empty))) .card-content::before {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }

        /* Header styling */
        :host([variant='full-pricing-express']) .header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }

        :host([variant='full-pricing-express']) [slot="heading-xs"] {
            font-size: 18px;
            font-weight: 700;
            line-height: 23.4px;
            color: var(--spectrum-gray-800);
        }

        /* Icons/Mnemonics styling */
        :host([variant='full-pricing-express']) [slot="icons"] {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-shrink: 0;
        }

        :host([variant='full-pricing-express']) [slot="icons"] merch-icon {
            --img-width: 20px;
            --img-height: 20px;
        }

        /* Description sections */
        :host([variant='full-pricing-express']) .description {
            display: flex;
            flex-direction: column;
        }

        /* Price container with background */
        :host([variant='full-pricing-express']) .price-container {
            background: var(--merch-card-full-pricing-express-price-bg);
            padding: 24px 16px;
            border-radius: var(--merch-card-full-pricing-express-price-radius);
            border: 1px solid #E0E2FF;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: visible;
            margin-bottom: var(--merch-card-full-pricing-express-section-gap);
            justify-content: center;
            align-items: flex-start;
        }

        /* CTA styling */
        :host([variant='full-pricing-express']) .cta,
        :host([variant='full-pricing-express']) .cta ::slotted(*) {
            width: 100%;
            display: block;
        }

        /* Mobile styles */
        @media (max-width: 1024px) {
            :host([variant='full-pricing-express']) {
                width: var(--merch-card-full-pricing-express-mobile-width);
                max-width: var(--merch-card-full-pricing-express-mobile-width);
            }

            :host([variant='full-pricing-express']) .card-content {
                padding: var(--merch-card-full-pricing-express-padding-mobile);
            }

            :host([variant='full-pricing-express'][gradient-border='true']) .card-content {
                padding: calc(var(--merch-card-full-pricing-express-padding-mobile) + 2px);
            }

            :host([variant='full-pricing-express']) .short-description {
                padding: 24px 0;
            }
        }

        /* Desktop - fixed heights for alignment */
        @media (min-width: 1025px) {
            :host([variant='full-pricing-express']) .card-content {
                height: 100%;
            }

            :host([variant='full-pricing-express']) .description {
                flex: 1;
            }

            :host([variant='full-pricing-express']) .price-container {
                height: var(--consonant-merch-card-full-pricing-express-price-height);
            }

            :host([variant='full-pricing-express']) .cta {
                height: var(--consonant-merch-card-full-pricing-express-cta-height);
                margin-bottom: 24px;
            }

            :host([variant='full-pricing-express']) .short-description {
                height: var(--consonant-merch-card-full-pricing-express-short-description-height);
                margin-bottom: 24px;
            }
        }
    `);var Mn=`
merch-card[variant="mini"] {
  color: var(--spectrum-body-color);
  width: 400px;
  height: 250px;
}

merch-card[variant="mini"] .price-tax-inclusivity::before {
  content: initial;
}

merch-card[variant="mini"] [slot="title"] {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
}

merch-card[variant="mini"] [slot="legal"] {
    min-height: 17px;
}

merch-card[variant="mini"] [slot="ctas"] {
  display: flex;
  flex: 1;
  gap: 16px;
  align-items: end;
  justify-content: end;
}

merch-card[variant="mini"] span.promo-duration-text,
merch-card[variant="mini"] span.renewal-text {
    display: block;
}
`,Hn={title:{tag:"p",slot:"title"},prices:{tag:"p",slot:"prices"},description:{tag:"p",slot:"description"},planType:!0,ctas:{slot:"ctas",size:"S"}},Ut=class extends Z{constructor(){super(...arguments),f(this,"legal")}async postCardUpdateHook(){await this.card.updateComplete,this.adjustLegal()}getGlobalCSS(){return Mn}get headingSelector(){return'[slot="title"]'}priceOptionsProvider(e,t){t.literals={...t.literals,strikethroughAriaLabel:"",alternativePriceAriaLabel:""},t.space=!0,t.displayAnnual=this.card.settings?.displayAnnual??!1}adjustLegal(){if(this.legal!==void 0)return;let e=this.card.querySelector(`${me}[data-template="price"]`);if(!e)return;let t=e.cloneNode(!0);this.legal=t,e.dataset.displayTax="false",t.dataset.template="legal",t.dataset.displayPlanType=this.card?.settings?.displayPlanType??!0,t.setAttribute("slot","legal"),this.card.appendChild(t)}renderLayout(){return v`
            ${this.badge}
            <div class="body">
                <slot name="title"></slot>
                <slot name="prices"></slot>
                <slot name="legal"></slot>
                <slot name="description"></slot>
                <slot name="ctas"></slot>
            </div>
        `}};f(Ut,"variantStyle",X`
        :host([variant='mini']) {
            min-width: 209px;
            min-height: 103px;
            background-color: var(--spectrum-background-base-color);
            border: 1px solid var(--consonant-merch-card-border-color, #dadada);
        }
    `);var Ui=new Map,V=(e,t,r=null,i=null,a)=>{Ui.set(e,{class:t,fragmentMapping:r,style:i,collectionOptions:a})};V("catalog",Ht,mn,Ht.variantStyle);V("image",gn);V("inline-heading",vn);V("mini-compare-chart",Rt,null,Rt.variantStyle);V("plans",ee,sr,ee.variantStyle,ee.collectionOptions);V("plans-students",ee,En,ee.variantStyle,ee.collectionOptions);V("plans-education",ee,wn,ee.variantStyle,ee.collectionOptions);V("plans-v2",Ie,Tn,Ie.variantStyle,Ie.collectionOptions);V("product",Ot,null,Ot.variantStyle);V("segment",Nt,null,Nt.variantStyle);V("special-offers",Bt,Ln,Bt.variantStyle);V("simplified-pricing-express",It,Ii,It.variantStyle);V("full-pricing-express",Dt,Di,Dt.variantStyle);V("mini",Ut,Hn,Ut.variantStyle);function zi(e){return Ui.get(e)?.fragmentMapping}var Rn="tacocat.js",$i=(e,t)=>String(e??"").toLowerCase()==String(t??"").toLowerCase(),On=e=>`${e??""}`.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)??"";function D(e,t={},{metadata:r=!0,search:i=!0,storage:a=!0}={}){let n;if(i&&n==null){let s=new URLSearchParams(window.location.search),o=De(i)?i:e;n=s.get(o)}if(a&&n==null){let s=De(a)?a:e;n=window.sessionStorage.getItem(s)??window.localStorage.getItem(s)}if(r&&n==null){let s=Dn(De(r)?r:e);n=document.documentElement.querySelector(`meta[name="${s}"]`)?.content}return n??t[e]}var Nn=e=>typeof e=="boolean",zt=e=>typeof e=="function",or=e=>typeof e=="number",Bn=e=>e!=null&&typeof e=="object",De=e=>typeof e=="string",In=e=>De(e)&&e,$t=e=>or(e)&&Number.isFinite(e)&&e>0;function Fi(e,t=r=>r==null||r===""){return e!=null&&Object.entries(e).forEach(([r,i])=>{t(i)&&delete e[r]}),e}function L(e,t){if(Nn(e))return e;let r=String(e);return r==="1"||r==="true"?!0:r==="0"||r==="false"?!1:t}function Ft(e,t,r){let i=Object.values(t);return i.find(a=>$i(a,e))??r??i[0]}function Dn(e=""){return String(e).replace(/(\p{Lowercase_Letter})(\p{Uppercase_Letter})/gu,(t,r,i)=>`${r}-${i}`).replace(/\W+/gu,"-").toLowerCase()}function Un(e,t=1){return or(e)||(e=Number.parseInt(e,10)),!Number.isNaN(e)&&e>0&&Number.isFinite(e)?e:t}var zn=Date.now(),Gt=()=>`(+${Date.now()-zn}ms)`,ot=new Set,$n=L(D("tacocat.debug",{},{metadata:!1}),!1);function Fn(e){let t=`[${Rn}/${e}]`,r=(n,s,...o)=>n?!0:(a(s,...o),!1),i=$n?(n,...s)=>{console.debug(`${t} ${n}`,...s,Gt())}:()=>{},a=(n,...s)=>{let o=`${t} ${n}`;ot.forEach(([c])=>c(o,...s))};return{assert:r,debug:i,error:a,warn:(n,...s)=>{let o=`${t} ${n}`;ot.forEach(([,c])=>c(o,...s))}}}function Gn(e,t){let r=[e,t];return ot.add(r),()=>{ot.delete(r)}}Gn((e,...t)=>{console.error(e,...t,Gt())},(e,...t)=>{console.warn(e,...t,Gt())});var qn="no promo",Lr="promo-tag",jn="yellow",Vn="neutral",Yn=(e,t,r)=>{let i=n=>n||qn,a=r?` (was "${i(t)}")`:"";return`${i(e)}${a}`},Wn="cancel-context",Gi=(e,t)=>{let r=e===Wn,i=!r&&e?.length>0,a=(i||r)&&!r,n=a&&i||!a&&!1,s=n?e||t:void 0;return{effectivePromoCode:s,overridenPromoCode:e,className:n?Lr:`${Lr} no-promo`,text:Yn(s,t,a),variant:n?jn:Vn,isOverriden:a}},Pr;(function(e){e.BASE="BASE",e.TRIAL="TRIAL",e.PROMOTION="PROMOTION"})(Pr||(Pr={}));var J;(function(e){e.MONTH="MONTH",e.YEAR="YEAR",e.TWO_YEARS="TWO_YEARS",e.THREE_YEARS="THREE_YEARS",e.PERPETUAL="PERPETUAL",e.TERM_LICENSE="TERM_LICENSE",e.ACCESS_PASS="ACCESS_PASS",e.THREE_MONTHS="THREE_MONTHS",e.SIX_MONTHS="SIX_MONTHS"})(J||(J={}));var ae;(function(e){e.ANNUAL="ANNUAL",e.MONTHLY="MONTHLY",e.TWO_YEARS="TWO_YEARS",e.THREE_YEARS="THREE_YEARS",e.P1D="P1D",e.P1Y="P1Y",e.P3Y="P3Y",e.P10Y="P10Y",e.P15Y="P15Y",e.P3D="P3D",e.P7D="P7D",e.P30D="P30D",e.HALF_YEARLY="HALF_YEARLY",e.QUARTERLY="QUARTERLY"})(ae||(ae={}));var _r;(function(e){e.INDIVIDUAL="INDIVIDUAL",e.TEAM="TEAM",e.ENTERPRISE="ENTERPRISE"})(_r||(_r={}));var Mr;(function(e){e.COM="COM",e.EDU="EDU",e.GOV="GOV"})(Mr||(Mr={}));var Hr;(function(e){e.DIRECT="DIRECT",e.INDIRECT="INDIRECT"})(Hr||(Hr={}));var Rr;(function(e){e.ENTERPRISE_PRODUCT="ENTERPRISE_PRODUCT",e.ETLA="ETLA",e.RETAIL="RETAIL",e.VIP="VIP",e.VIPMP="VIPMP",e.FREE="FREE"})(Rr||(Rr={}));var cr="ABM",lr="PUF",dr="M2M",hr="PERPETUAL",pr="P3Y",Kn="TAX_INCLUSIVE_DETAILS",Xn="TAX_EXCLUSIVE",Qn={ABM:cr,PUF:lr,M2M:dr,PERPETUAL:hr,P3Y:pr};cr+"",J.YEAR,ae.MONTHLY,lr+"",J.YEAR,ae.ANNUAL,dr+"",J.MONTH,ae.MONTHLY,hr+"",J.PERPETUAL,pr+"",J.THREE_MONTHS,ae.P3Y;var qi="Value is not an offer",vt=e=>{if(typeof e!="object")return qi;let{commitment:t,term:r}=e,i=Zn(t,r);return{...e,planType:i}},Zn=(e,t)=>{switch(e){case void 0:return qi;case"":return"";case J.YEAR:return t===ae.MONTHLY?cr:t===ae.ANNUAL?lr:"";case J.MONTH:return t===ae.MONTHLY?dr:"";case J.PERPETUAL:return hr;case J.TERM_LICENSE:return t===ae.P3Y?pr:"";default:return""}};function Jn(e){let{priceDetails:t}=e,{price:r,priceWithoutDiscount:i,priceWithoutTax:a,priceWithoutDiscountAndTax:n,taxDisplay:s}=t;if(s!==Kn)return e;let o={...e,priceDetails:{...t,price:a??r,priceWithoutDiscount:n??i,taxDisplay:Xn}};return o.offerType==="TRIAL"&&o.priceDetails.price===0&&(o.priceDetails.price=o.priceDetails.priceWithoutDiscount),o}var es="mas-commerce-service",ts={requestId:ar,etag:"Etag",lastModified:"Last-Modified",serverTiming:"server-timing"};function qt(e,{country:t,forceTaxExclusive:r}){let i;if(e.length<2)i=e;else{let a=t==="GB"?"EN":"MULT";e.sort((n,s)=>n.language===a?-1:s.language===a?1:0),e.sort((n,s)=>!n.term&&s.term?-1:n.term&&!s.term?1:0),i=[e[0]]}return r&&(i=i.map(Jn)),i}var bt=e=>window.setTimeout(e);function mr(e,t=1){if(e==null)return[t];let r=(Array.isArray(e)?e:String(e).split(",")).map(Un).filter($t);return r.length||(r=[t]),r}function ji(e){return e==null?[]:(Array.isArray(e)?e:String(e).split(",")).filter(In)}function se(){return document.getElementsByTagName(es)?.[0]}function rs(e){let t={};if(!e?.headers)return t;let r=e.headers;for(let[i,a]of Object.entries(ts)){let n=r.get(a);n&&(n=n.replace(/[,;]/g,"|"),n=n.replace(/[| ]+/g,"|"),t[i]=n)}return t}var ye={clientId:"merch-at-scale",delimiter:"¶",ignoredProperties:["analytics","literals","element"],serializableTypes:["Array","Object"],sampleRate:1,tags:"acom",isProdDomain:!1},Or=1e3;function is(e){return e instanceof Error||typeof e?.originatingRequest=="string"}function Vi(e){if(e==null)return;let t=typeof e;if(t==="function")return e.name?`function ${e.name}`:"function";if(t==="object"){if(e instanceof Error)return e.message;if(typeof e.originatingRequest=="string"){let{message:i,originatingRequest:a,status:n}=e;return[i,n,a].filter(Boolean).join(" ")}let r=e[Symbol.toStringTag]??Object.getPrototypeOf(e).constructor.name;if(!ye.serializableTypes.includes(r))return r}return e}function as(e,t){if(!ye.ignoredProperties.includes(e))return Vi(t)}var Yi={append(e){if(e.level!=="error")return;let{message:t,params:r}=e,i=[],a=[],n=t;r.forEach(l=>{l!=null&&(is(l)?i:a).push(l)}),i.length&&(n+=" "+i.map(Vi).join(" "));let{pathname:s,search:o}=window.location,c=`${ye.delimiter}page=${s}${o}`;c.length>Or&&(c=`${c.slice(0,Or)}<trunc>`),n+=c,a.length&&(n+=`${ye.delimiter}facts=`,n+=JSON.stringify(a,as)),window.lana?.log(n,ye)}};function Wi(e){Object.assign(ye,Object.fromEntries(Object.entries(e).filter(([t,r])=>t in ye&&r!==""&&r!==null&&r!==void 0&&!Number.isNaN(r))))}var Nr={LOCAL:"local",PROD:"prod"},ur={DEBUG:"debug",ERROR:"error",INFO:"info",WARN:"warn"},gr=new Set,fr=new Set,Br=new Map,Ki={append({level:e,message:t,params:r,timestamp:i,source:a}){console[e](`${i}ms [${a}] %c${t}`,"font-weight: bold;",...r)}},Xi={filter:({level:e})=>e!==ur.DEBUG},ns={filter:()=>!1};function ss(e,t,r,i,a){return{level:e,message:t,namespace:r,get params(){return i.length===1&&zt(i[0])&&(i=i[0](),Array.isArray(i)||(i=[i])),i},source:a,timestamp:performance.now().toFixed(3)}}function os(e){[...fr].every(t=>t(e))&&gr.forEach(t=>t(e))}function Qi(e){let t=(Br.get(e)??0)+1;Br.set(e,t);let r=`${e} #${t}`,i={id:r,namespace:e,module:a=>Qi(`${i.namespace}/${a}`),updateConfig:Wi};return Object.values(ur).forEach(a=>{i[a]=(n,...s)=>os(ss(a,n,e,s,r))}),Object.seal(i)}function jt(...e){e.forEach(t=>{let{append:r,filter:i}=t;zt(i)&&fr.add(i),zt(r)&&gr.add(r)})}function cs(e={}){let{name:t}=e,r=L(D("commerce.debug",{search:!0,storage:!0}),t===Nr.LOCAL);return jt(r?Ki:Xi),t===Nr.PROD&&jt(Yi),he}function ls(){gr.clear(),fr.clear()}var he={...Qi(Ci),Level:ur,Plugins:{consoleAppender:Ki,debugFilter:Xi,quietFilter:ns,lanaAppender:Yi},init:cs,reset:ls,use:jt},Zi=class Ji extends Error{constructor(t,r,i){if(super(t,{cause:i}),this.name="MasError",r.response){let a=r.response.headers?.get(ar);a&&(r.requestId=a),r.response.status&&(r.status=r.response.status,r.statusText=r.response.statusText),r.response.url&&(r.url=r.response.url)}delete r.response,this.context=r,Error.captureStackTrace&&Error.captureStackTrace(this,Ji)}toString(){let t=Object.entries(this.context||{}).map(([i,a])=>`${i}: ${JSON.stringify(a)}`).join(", "),r=`${this.name}: ${this.message}`;return t&&(r+=` (${t})`),this.cause&&(r+=`
Caused by: ${this.cause}`),r}},ds={[oe]:xi,[be]:yi,[le]:wi},hs={[oe]:Ti,[le]:Si},Ze,vr=class{constructor(e){W(this,Ze),f(this,"changes",new Map),f(this,"connected",!1),f(this,"error"),f(this,"log"),f(this,"options"),f(this,"promises",[]),f(this,"state",be),f(this,"timer",null),f(this,"value"),f(this,"version",0),f(this,"wrapperElement"),this.wrapperElement=e,this.log=he.module("mas-element")}update(){[oe,be,le].forEach(e=>{this.wrapperElement.classList.toggle(ds[e],e===this.state)})}notify(){(this.state===le||this.state===oe)&&(this.state===le?this.promises.forEach(({resolve:t})=>t(this.wrapperElement)):this.state===oe&&this.promises.forEach(({reject:t})=>t(this.error)),this.promises=[]);let e=this.error;this.error instanceof Zi&&(e={message:this.error.message,...this.error.context}),this.wrapperElement.dispatchEvent(new CustomEvent(hs[this.state],{bubbles:!0,detail:e}))}attributeChangedCallback(e,t,r){this.changes.set(e,r),this.requestUpdate()}connectedCallback(){K(this,Ze,se()),this.requestUpdate(!0)}disconnectedCallback(){this.connected&&(this.connected=!1,this.log?.debug("Disconnected:",{element:this.wrapperElement}))}onceSettled(){let{error:e,promises:t,state:r}=this;return le===r?Promise.resolve(this.wrapperElement):oe===r?Promise.reject(e):new Promise((i,a)=>{t.push({resolve:i,reject:a})})}toggleResolved(e,t,r){return e!==this.version?!1:(r!==void 0&&(this.options=r),this.state=le,this.value=t,this.update(),this.log?.debug("Resolved:",{element:this.wrapperElement,value:t}),bt(()=>this.notify()),!0)}toggleFailed(e,t,r){if(e!==this.version)return!1;r!==void 0&&(this.options=r),this.error=t,this.state=oe,this.update();let i=this.wrapperElement.getAttribute("is");return this.log?.error(`${i}: Failed to render: ${t.message}`,{element:this.wrapperElement,...t.context,...k(this,Ze)?.duration}),bt(()=>this.notify()),!0}togglePending(e){return this.version++,e&&(this.options=e),this.state=be,this.update(),this.log?.debug("Pending:",{osi:this.wrapperElement?.options?.wcsOsi}),this.version}requestUpdate(e=!1){if(!this.wrapperElement.isConnected||!se()||this.timer)return;let{error:t,options:r,state:i,value:a,version:n}=this;this.state=be,this.timer=bt(async()=>{this.timer=null;let s=null;if(this.changes.size&&(s=Object.fromEntries(this.changes.entries()),this.changes.clear()),this.connected?this.log?.debug("Updated:",{element:this.wrapperElement,changes:s}):(this.connected=!0,this.log?.debug("Connected:",{element:this.wrapperElement,changes:s})),s||e)try{await this.wrapperElement.render?.()===!1&&this.state===be&&this.version===n&&(this.state=i,this.error=t,this.value=a,this.update(),this.notify())}catch(o){this.toggleFailed(this.version,o,r)}})}};Ze=new WeakMap;function ea(e={}){return Object.entries(e).forEach(([t,r])=>{(r==null||r===""||r?.length===0)&&delete e[t]}),e}function ta(e,t={}){let{tag:r,is:i}=e,a=document.createElement(r,{is:i});return a.setAttribute("is",i),Object.assign(a.dataset,ea(t)),a}function ps(e,t={}){return e instanceof HTMLElement?(Object.assign(e.dataset,ea(t)),e):null}function ms(e){return`https://${e==="PRODUCTION"?"www.adobe.com":"www.stage.adobe.com"}/offers/promo-terms.html`}var Ce,Je=class Vt extends HTMLAnchorElement{constructor(){super(),f(this,"masElement",new vr(this)),W(this,Ce),this.setAttribute("is",Vt.is)}get isUptLink(){return!0}initializeWcsData(t,r){this.setAttribute("data-wcs-osi",t),r&&this.setAttribute("data-promotion-code",r)}attributeChangedCallback(t,r,i){this.masElement.attributeChangedCallback(t,r,i)}connectedCallback(){this.masElement.connectedCallback(),K(this,Ce,_t()),k(this,Ce)&&(this.log=k(this,Ce).log.module("upt-link"))}disconnectedCallback(){this.masElement.disconnectedCallback(),K(this,Ce,void 0)}requestUpdate(t=!1){this.masElement.requestUpdate(t)}onceSettled(){return this.masElement.onceSettled()}async render(){let t=_t();if(!t)return!1;this.dataset.imsCountry||t.imsCountryPromise.then(n=>{n&&(this.dataset.imsCountry=n)});let r=t.collectCheckoutOptions({},this);if(!r.wcsOsi)return this.log.error("Missing 'data-wcs-osi' attribute on upt-link."),!1;let i=this.masElement.togglePending(r),a=t.resolveOfferSelectors(r);try{let[[n]]=await Promise.all(a),{country:s,language:o,env:c}=r,l=`locale=${o}_${s}&country=${s}&offer_id=${n.offerId}`,d=this.getAttribute("data-promotion-code");d&&(l+=`&promotion_code=${encodeURIComponent(d)}`),this.href=`${ms(c)}?${l}`,this.masElement.toggleResolved(i,n,r)}catch(n){let s=new Error(`Could not resolve offer selectors for id: ${r.wcsOsi}.`,n.message);return this.masElement.toggleFailed(i,s,r),!1}}static createFrom(t){let r=new Vt;for(let i of t.attributes)i.name!=="is"&&(i.name==="class"&&i.value.includes("upt-link")?r.setAttribute("class",i.value.replace("upt-link","").trim()):r.setAttribute(i.name,i.value));return r.innerHTML=t.innerHTML,r.setAttribute("tabindex",0),r}};Ce=new WeakMap,f(Je,"is","upt-link"),f(Je,"tag","a"),f(Je,"observedAttributes",["data-wcs-osi","data-promotion-code","data-ims-country"]);var Ke=Je;window.customElements.get(Ke.is)||window.customElements.define(Ke.is,Ke,{extends:Ke.tag});function us(e){return e&&(e.startsWith("plans")?"plans":e)}var gs=/[0-9\-+#]/,fs=/[^\d\-+#]/g;function Ir(e){return e.search(gs)}function vs(e="#.##"){let t={},r=e.length,i=Ir(e);t.prefix=i>0?e.substring(0,i):"";let a=Ir(e.split("").reverse().join("")),n=r-a,s=e.substring(n,n+1),o=n+(s==="."||s===","?1:0);t.suffix=a>0?e.substring(o,r):"",t.mask=e.substring(i,o),t.maskHasNegativeSign=t.mask.charAt(0)==="-",t.maskHasPositiveSign=t.mask.charAt(0)==="+";let c=t.mask.match(fs);return t.decimal=c&&c[c.length-1]||".",t.separator=c&&c[1]&&c[0]||",",c=t.mask.split(t.decimal),t.integer=c[0],t.fraction=c[1],t}function bs(e,t,r){let i=!1,a={value:e};e<0&&(i=!0,a.value=-a.value),a.sign=i?"-":"",a.value=Number(a.value).toFixed(t.fraction&&t.fraction.length),a.value=Number(a.value).toString();let n=t.fraction&&t.fraction.lastIndexOf("0"),[s="0",o=""]=a.value.split(".");return(!o||o&&o.length<=n)&&(o=n<0?"":(+("0."+o)).toFixed(n+1).replace("0.","")),a.integer=s,a.fraction=o,xs(a,t),(a.result==="0"||a.result==="")&&(i=!1,a.sign=""),!i&&t.maskHasPositiveSign?a.sign="+":i&&t.maskHasPositiveSign?a.sign="-":i&&(a.sign=r&&r.enforceMaskSign&&!t.maskHasNegativeSign?"":"-"),a}function xs(e,t){e.result="";let r=t.integer.split(t.separator),i=r.join(""),a=i&&i.indexOf("0");if(a>-1)for(;e.integer.length<i.length-a;)e.integer="0"+e.integer;else Number(e.integer)===0&&(e.integer="");let n=r[1]&&r[r.length-1].length;if(n){let s=e.integer.length,o=s%n;for(let c=0;c<s;c++)e.result+=e.integer.charAt(c),!((c-o+1)%n)&&c<s-n&&(e.result+=t.separator)}else e.result=e.integer;return e.result+=t.fraction&&e.fraction?t.decimal+e.fraction:"",e}function ys(e,t,r={}){if(!e||isNaN(Number(t)))return t;let i=vs(e),a=bs(t,i,r);return i.prefix+a.sign+a.result+i.suffix}var ws=ys,Dr=".",Es=",",ra=/^\s+/,ia=/\s+$/,Ur="&nbsp;",xt=e=>e*12,ht=(e,t,r=1)=>{if(!e)return!1;let{start:i,end:a,displaySummary:{amount:n,duration:s,minProductQuantity:o=1,outcomeType:c}={}}=e;if(!(n&&s&&c)||r<o)return!1;let l=t?new Date(t):new Date;if(!i||!a)return!1;let d=new Date(i),p=new Date(a);return l>=d&&l<=p},we={MONTH:"MONTH",YEAR:"YEAR"},As={[ie.ANNUAL]:12,[ie.MONTHLY]:1,[ie.THREE_YEARS]:36,[ie.TWO_YEARS]:24},yt=(e,t)=>({accept:e,round:t}),Ts=[yt(({divisor:e,price:t})=>t%e==0,({divisor:e,price:t})=>t/e),yt(({usePrecision:e})=>e,({divisor:e,price:t})=>Math.round(t/e*100)/100),yt(()=>!0,({divisor:e,price:t})=>Math.ceil(Math.floor(t*100/e)/100))],br={[ze.YEAR]:{[ie.MONTHLY]:we.MONTH,[ie.ANNUAL]:we.YEAR},[ze.MONTH]:{[ie.MONTHLY]:we.MONTH}},Ss=(e,t)=>e.indexOf(`'${t}'`)===0,Cs=(e,t=!0)=>{let r=e.replace(/'.*?'/,"").trim(),i=aa(r);return i?t||(r=r.replace(/[,\.]0+/,i)):r=r.replace(/\s?(#.*0)(?!\s)?/,"$&"+Ps(e)),r},ks=e=>{let t=_s(e),r=Ss(e,t),i=e.replace(/'.*?'/,""),a=ra.test(i)||ia.test(i);return{currencySymbol:t,isCurrencyFirst:r,hasCurrencySpace:a}},Ls=e=>e.replace(ra,Ur).replace(ia,Ur),Ps=e=>e.match(/#(.?)#/)?.[1]===Dr?Es:Dr,_s=e=>e.match(/'(.*?)'/)?.[1]??"",aa=e=>e.match(/0(.?)0/)?.[1]??"";function ke({formatString:e,price:t,usePrecision:r,isIndianPrice:i=!1},a,n=s=>s){let{currencySymbol:s,isCurrencyFirst:o,hasCurrencySpace:c}=ks(e),l=r?aa(e):"",d=Cs(e,r),p=r?2:0,m=n(t,{currencySymbol:s}),h=i?m.toLocaleString("hi-IN",{minimumFractionDigits:p,maximumFractionDigits:p}):ws(d,m),u=r?h.lastIndexOf(l):h.length,g=h.substring(0,u),x=h.substring(u+1);return{accessiblePrice:e.replace(/'.*?'/,"SYMBOL").replace(/#.*0/,h).replace(/SYMBOL/,s),currencySymbol:s,decimals:x,decimalsDelimiter:l,hasCurrencySpace:c,integer:g,isCurrencyFirst:o,recurrenceTerm:a}}var Ms=e=>{let{commitment:t,term:r,usePrecision:i}=e,a=As[r]??1;return ke(e,a>1?we.MONTH:br[t]?.[r],n=>{let s={divisor:a,price:n,usePrecision:i},{round:o}=Ts.find(({accept:c})=>c(s));if(!o)throw new Error(`Missing rounding rule for: ${JSON.stringify(s)}`);return o(s)})},Hs=({commitment:e,term:t,...r})=>ke(r,br[e]?.[t]),Rs=e=>{let{commitment:t,instant:r,price:i,originalPrice:a,priceWithoutDiscount:n,promotion:s,quantity:o=1,term:c}=e;if(t===ze.YEAR&&c===ie.MONTHLY){if(!s)return ke(e,we.YEAR,xt);let{displaySummary:{outcomeType:l,duration:d}={}}=s;switch(l){case"PERCENTAGE_DISCOUNT":if(ht(s,r,o)){let p=parseInt(d.replace("P","").replace("M",""));if(isNaN(p))return xt(i);let m=a*p,h=n*(12-p),u=Math.round((m+h)*100)/100;return ke({...e,price:u},we.YEAR)}default:return ke(e,we.YEAR,()=>xt(n??i))}}return ke(e,br[t]?.[c])},zr="download",$r="upgrade",Fr={e:"EDU",t:"TEAM"};function Os(e,t={},r=""){let i=se();if(!i)return null;let{checkoutMarketSegment:a,checkoutWorkflow:n,checkoutWorkflowStep:s,entitlement:o,upgrade:c,modal:l,perpetual:d,promotionCode:p,quantity:m,wcsOsi:h,extraOptions:u,analyticsId:g}=i.collectCheckoutOptions(t),x=ta(e,{checkoutMarketSegment:a,checkoutWorkflow:n,checkoutWorkflowStep:s,entitlement:o,upgrade:c,modal:l,perpetual:d,promotionCode:p,quantity:m,wcsOsi:h,extraOptions:u,analyticsId:g});return r&&(x.innerHTML=`<span style="pointer-events: none;">${r}</span>`),x}function Ns(e){return class extends e{constructor(){super(...arguments),f(this,"checkoutActionHandler"),f(this,"masElement",new vr(this))}attributeChangedCallback(t,r,i){this.masElement.attributeChangedCallback(t,r,i)}connectedCallback(){this.masElement.connectedCallback(),this.addEventListener("click",this.clickHandler)}disconnectedCallback(){this.masElement.disconnectedCallback(),this.removeEventListener("click",this.clickHandler)}onceSettled(){return this.masElement.onceSettled()}get value(){return this.masElement.value}get options(){return this.masElement.options}get marketSegment(){let t=this.options?.ms??this.value?.[0].marketSegments?.[0];return Fr[t]??t}get customerSegment(){let t=this.options?.cs??this.value?.[0]?.customerSegment;return Fr[t]??t}get is3in1Modal(){return Object.values(dt).includes(this.getAttribute("data-modal"))}get isOpen3in1Modal(){let t=document.querySelector("meta[name=mas-ff-3in1]");return this.is3in1Modal&&(!t||t.content!=="off")}requestUpdate(t=!1){return this.masElement.requestUpdate(t)}static get observedAttributes(){return["data-checkout-workflow","data-checkout-workflow-step","data-extra-options","data-ims-country","data-perpetual","data-promotion-code","data-quantity","data-template","data-wcs-osi","data-entitlement","data-upgrade","data-modal"]}async render(t={}){let r=se();if(!r)return!1;this.dataset.imsCountry||r.imsCountryPromise.then(d=>{d&&(this.dataset.imsCountry=d)}),t.imsCountry=null;let i=r.collectCheckoutOptions(t,this);if(!i.wcsOsi.length)return!1;let a;try{a=JSON.parse(i.extraOptions??"{}")}catch(d){this.masElement.log?.error("cannot parse exta checkout options",d)}let n=this.masElement.togglePending(i);this.setCheckoutUrl("");let s=r.resolveOfferSelectors(i),o=await Promise.all(s);o=o.map(d=>qt(d,i));let c=o.flat().find(d=>d.promotion);!ht(c?.promotion,c?.promotion?.displaySummary?.instant,i.quantity[0])&&i.promotionCode&&delete i.promotionCode,i.country=this.dataset.imsCountry||i.country;let l=await r.buildCheckoutAction?.(o.flat(),{...a,...i},this);return this.renderOffers(o.flat(),i,{},l,n)}renderOffers(t,r,i={},a=void 0,n=void 0){let s=se();if(!s)return!1;if(r={...JSON.parse(this.dataset.extraOptions??"{}"),...r,...i},n??(n=this.masElement.togglePending(r)),this.checkoutActionHandler&&(this.checkoutActionHandler=void 0),a){this.classList.remove(zr,$r),this.masElement.toggleResolved(n,t,r);let{url:o,text:c,className:l,handler:d}=a;o&&this.setCheckoutUrl(o),c&&(this.firstElementChild.innerHTML=c),l&&this.classList.add(...l.split(" ")),d&&(this.setCheckoutUrl("#"),this.checkoutActionHandler=d.bind(this))}if(t.length){if(this.masElement.toggleResolved(n,t,r)){if(!this.classList.contains(zr)&&!this.classList.contains($r)){let o=s.buildCheckoutURL(t,r);this.setCheckoutUrl(r.modal==="true"?"#":o)}return!0}}else{let o=new Error(`Not provided: ${r?.wcsOsi??"-"}`);if(this.masElement.toggleFailed(n,o,r))return this.setCheckoutUrl("#"),!0}}setCheckoutUrl(){}clickHandler(t){}updateOptions(t={}){let r=se();if(!r)return!1;let{checkoutMarketSegment:i,checkoutWorkflow:a,checkoutWorkflowStep:n,entitlement:s,upgrade:o,modal:c,perpetual:l,promotionCode:d,quantity:p,wcsOsi:m}=r.collectCheckoutOptions(t);return ps(this,{checkoutMarketSegment:i,checkoutWorkflow:a,checkoutWorkflowStep:n,entitlement:s,upgrade:o,modal:c,perpetual:l,promotionCode:d,quantity:p,wcsOsi:m}),!0}}}var Yt=class na extends Ns(HTMLAnchorElement){static createCheckoutLink(t={},r=""){return Os(na,t,r)}setCheckoutUrl(t){this.setAttribute("href",t)}get isCheckoutLink(){return!0}clickHandler(t){if(this.checkoutActionHandler){this.checkoutActionHandler?.(t);return}}};f(Yt,"is","checkout-link"),f(Yt,"tag","a");var Le=Yt;window.customElements.get(Le.is)||window.customElements.define(Le.is,Le,{extends:Le.tag});var Bs="p_draft_landscape",Is="/store/",Ds=new Map([["countrySpecific","cs"],["customerSegment","cs"],["quantity","q"],["authCode","code"],["checkoutPromoCode","apc"],["rurl","rUrl"],["curl","cUrl"],["ctxrturl","ctxRtUrl"],["country","co"],["language","lang"],["clientId","cli"],["context","ctx"],["productArrangementCode","pa"],["addonProductArrangementCode","ao"],["offerType","ot"],["marketSegment","ms"]]),wt=new Set(["af","ai","ao","apc","appctxid","cli","co","cs","csm","ctx","ctxRtUrl","DCWATC","dp","fr","gsp","ijt","lang","lo","mal","ms","mv","mv2","nglwfdata","ot","otac","pa","pcid","promoid","q","rf","sc","scl","sdid","sid","spint","svar","th","thm","trackingid","usid","workflowid","context.guid","so.ca","so.su","so.tr","so.va"]),Us=["env","workflowStep","clientId","country"],sa=e=>Ds.get(e)??e;function Et(e,t,r){for(let[i,a]of Object.entries(e)){let n=sa(i);a!=null&&r.has(n)&&t.set(n,a)}}function zs(e){switch(e){case Hi.PRODUCTION:return"https://commerce.adobe.com";default:return"https://commerce-stg.adobe.com"}}function $s(e,t){for(let r in e){let i=e[r];for(let[a,n]of Object.entries(i)){if(n==null)continue;let s=sa(a);t.set(`items[${r}][${s}]`,n)}}}function Fs({url:e,modal:t,is3in1:r}){if(!r||!e?.searchParams)return e;e.searchParams.set("rtc","t"),e.searchParams.set("lo","sl");let i=e.searchParams.get("af");return e.searchParams.set("af",[i,"uc_new_user_iframe","uc_new_system_close"].filter(Boolean).join(",")),e.searchParams.get("cli")!=="doc_cloud"&&e.searchParams.set("cli",t===dt.CRM?"creative":"mini_plans"),e}function Gs(e){qs(e);let{env:t,items:r,workflowStep:i,marketSegment:a,customerSegment:n,offerType:s,productArrangementCode:o,landscape:c,modal:l,is3in1:d,preselectPlan:p,...m}=e,h=new URL(zs(t));if(h.pathname=`${Is}${i}`,i!==ne.SEGMENTATION&&i!==ne.CHANGE_PLAN_TEAM_PLANS&&$s(r,h.searchParams),Et({...m},h.searchParams,wt),c===Fe.DRAFT&&Et({af:Bs},h.searchParams,wt),i===ne.SEGMENTATION){let u={marketSegment:a,offerType:s,customerSegment:n,productArrangementCode:o,quantity:r?.[0]?.quantity,addonProductArrangementCode:o?r?.find(g=>g.productArrangementCode!==o)?.productArrangementCode:r?.[1]?.productArrangementCode};p?.toLowerCase()==="edu"?h.searchParams.set("ms","EDU"):p?.toLowerCase()==="team"&&h.searchParams.set("cs","TEAM"),Et(u,h.searchParams,wt),h.searchParams.get("ot")==="PROMOTION"&&h.searchParams.delete("ot"),h=Fs({url:h,modal:l,is3in1:d})}return h.toString()}function qs(e){for(let t of Us)if(!e[t])throw new Error('Argument "checkoutData" is not valid, missing: '+t);if(e.workflowStep!==ne.SEGMENTATION&&e.workflowStep!==ne.CHANGE_PLAN_TEAM_PLANS&&!e.items)throw new Error('Argument "checkoutData" is not valid, missing: items');return!0}var P=Object.freeze({checkoutClientId:"adobe_com",checkoutWorkflowStep:ne.EMAIL,country:"US",displayOldPrice:!1,displayPerUnit:!1,displayRecurrence:!0,displayTax:!1,displayPlanType:!1,env:xe.PRODUCTION,forceTaxExclusive:!1,language:"en",entitlement:!1,extraOptions:{},modal:!1,promotionCode:"",quantity:1,alternativePrice:!1,wcsApiKey:"wcms-commerce-ims-ro-user-milo",wcsURL:"https://www.adobe.com/web_commerce_artifact",landscape:Fe.PUBLISHED});function js({settings:e,providers:t}){function r(n,s){let{checkoutClientId:o,checkoutWorkflowStep:c,country:l,language:d,promotionCode:p,quantity:m,preselectPlan:h,env:u}=e,g={checkoutClientId:o,checkoutWorkflowStep:c,country:l,language:d,promotionCode:p,quantity:m,preselectPlan:h,env:u};if(s)for(let Ae of t.checkout)Ae(s,g);let{checkoutMarketSegment:x,checkoutWorkflowStep:A=c,imsCountry:y,country:b=y??l,language:S=d,quantity:C=m,entitlement:R,upgrade:U,modal:q,perpetual:z,promotionCode:H=p,wcsOsi:N,extraOptions:j,...te}=Object.assign(g,s?.dataset??{},n??{}),ce=Ft(A,ne,P.checkoutWorkflowStep);return g=Fi({...te,extraOptions:j,checkoutClientId:o,checkoutMarketSegment:x,country:b,quantity:mr(C,P.quantity),checkoutWorkflowStep:ce,language:S,entitlement:L(R),upgrade:L(U),modal:q,perpetual:L(z),promotionCode:Gi(H).effectivePromoCode,wcsOsi:ji(N),preselectPlan:h}),g}function i(n,s){if(!Array.isArray(n)||!n.length||!s)return"";let{env:o,landscape:c}=e,{checkoutClientId:l,checkoutMarketSegment:d,checkoutWorkflowStep:p,country:m,promotionCode:h,quantity:u,preselectPlan:g,ms:x,cs:A,...y}=r(s),b=document.querySelector("meta[name=mas-ff-3in1]"),S=Object.values(dt).includes(s.modal)&&(!b||b.content!=="off"),C=window.frameElement||S?"if":"fp",[{productArrangementCode:R,marketSegments:[U],customerSegment:q,offerType:z}]=n,H=x??U??d,N=A??q;g?.toLowerCase()==="edu"?H="EDU":g?.toLowerCase()==="team"&&(N="TEAM");let j={is3in1:S,checkoutPromoCode:h,clientId:l,context:C,country:m,env:o,items:[],marketSegment:H,customerSegment:N,offerType:z,productArrangementCode:R,workflowStep:p,landscape:c,...y},te=u[0]>1?u[0]:void 0;if(n.length===1){let{offerId:ce}=n[0];j.items.push({id:ce,quantity:te})}else j.items.push(...n.map(({offerId:ce,productArrangementCode:Ae})=>({id:ce,quantity:te,...S?{productArrangementCode:Ae}:{}})));return Gs(j)}let{createCheckoutLink:a}=Le;return{CheckoutLink:Le,CheckoutWorkflowStep:ne,buildCheckoutURL:i,collectCheckoutOptions:r,createCheckoutLink:a}}function Vs({interval:e=200,maxAttempts:t=25}={}){let r=he.module("ims");return new Promise(i=>{r.debug("Waing for IMS to be ready");let a=0;function n(){window.adobeIMS?.initialized?i():++a>t?(r.debug("Timeout"),i()):setTimeout(n,e)}n()})}function Ys(e){return e.then(()=>window.adobeIMS?.isSignedInUser()??!1)}function Ws(e){let t=he.module("ims");return e.then(r=>r?window.adobeIMS.getProfile().then(({countryCode:i})=>(t.debug("Got user country:",i),i),i=>{t.error("Unable to get user country:",i)}):null)}function Ks({}){let e=Vs(),t=Ys(e),r=Ws(t);return{imsReadyPromise:e,imsSignedInPromise:t,imsCountryPromise:r}}var Gr=window.masPriceLiterals;function Xs(e){if(Array.isArray(Gr)){let t=i=>Gr.find(a=>$i(a.lang,i)),r=t(e.language)??t(P.language);if(r)return Object.freeze(r)}return{}}var Wt=function(e,t){return Wt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},Wt(e,t)};function pt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Wt(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var T=function(){return T=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},T.apply(this,arguments)};function At(e,t,r){if(arguments.length===2)for(var i=0,a=t.length,n;i<a;i++)(n||!(i in t))&&(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var w;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(w||(w={}));var _;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(_||(_={}));var Me;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Me||(Me={}));function qr(e){return e.type===_.literal}function Qs(e){return e.type===_.argument}function oa(e){return e.type===_.number}function ca(e){return e.type===_.date}function la(e){return e.type===_.time}function da(e){return e.type===_.select}function ha(e){return e.type===_.plural}function Zs(e){return e.type===_.pound}function pa(e){return e.type===_.tag}function ma(e){return!!(e&&typeof e=="object"&&e.type===Me.number)}function Kt(e){return!!(e&&typeof e=="object"&&e.type===Me.dateTime)}var ua=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Js=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function eo(e){var t={};return e.replace(Js,function(r){var i=r.length;switch(r[0]){case"G":t.era=i===4?"long":i===5?"narrow":"short";break;case"y":t.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=i===4?"short":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][i-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][i-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][i-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][i-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][i-1];break;case"s":t.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var to=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function ro(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(to).filter(function(m){return m.length>0}),r=[],i=0,a=t;i<a.length;i++){var n=a[i],s=n.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var o=s[0],c=s.slice(1),l=0,d=c;l<d.length;l++){var p=d[l];if(p.length===0)throw new Error("Invalid number skeleton")}r.push({stem:o,options:c})}return r}function io(e){return e.replace(/^(.*?)-/,"")}var jr=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ga=/^(@+)?(\+|#+)?[rs]?$/g,ao=/(\*)(0+)|(#+)(0+)|(0+)/g,fa=/^(0+)$/;function Vr(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(ga,function(r,i,a){return typeof a!="string"?(t.minimumSignificantDigits=i.length,t.maximumSignificantDigits=i.length):a==="+"?t.minimumSignificantDigits=i.length:i[0]==="#"?t.maximumSignificantDigits=i.length:(t.minimumSignificantDigits=i.length,t.maximumSignificantDigits=i.length+(typeof a=="string"?a.length:0)),""}),t}function va(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function no(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!fa.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Yr(e){var t={},r=va(e);return r||t}function so(e){for(var t={},r=0,i=e;r<i.length;r++){var a=i[r];switch(a.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=a.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=io(a.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=T(T(T({},t),{notation:"scientific"}),a.options.reduce(function(c,l){return T(T({},c),Yr(l))},{}));continue;case"engineering":t=T(T(T({},t),{notation:"engineering"}),a.options.reduce(function(c,l){return T(T({},c),Yr(l))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(a.options[0]);continue;case"integer-width":if(a.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");a.options[0].replace(ao,function(c,l,d,p,m,h){if(l)t.minimumIntegerDigits=d.length;else{if(p&&m)throw new Error("We currently do not support maximum integer digits");if(h)throw new Error("We currently do not support exact integer digits")}return""});continue}if(fa.test(a.stem)){t.minimumIntegerDigits=a.stem.length;continue}if(jr.test(a.stem)){if(a.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");a.stem.replace(jr,function(c,l,d,p,m,h){return d==="*"?t.minimumFractionDigits=l.length:p&&p[0]==="#"?t.maximumFractionDigits=p.length:m&&h?(t.minimumFractionDigits=m.length,t.maximumFractionDigits=m.length+h.length):(t.minimumFractionDigits=l.length,t.maximumFractionDigits=l.length),""});var n=a.options[0];n==="w"?t=T(T({},t),{trailingZeroDisplay:"stripIfInteger"}):n&&(t=T(T({},t),Vr(n)));continue}if(ga.test(a.stem)){t=T(T({},t),Vr(a.stem));continue}var s=va(a.stem);s&&(t=T(T({},t),s));var o=no(a.stem);o&&(t=T(T({},t),o))}return t}var Xe={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]};function oo(e,t){for(var r="",i=0;i<e.length;i++){var a=e.charAt(i);if(a==="j"){for(var n=0;i+1<e.length&&e.charAt(i+1)===a;)n++,i++;var s=1+(n&1),o=n<2?1:3+(n>>1),c="a",l=co(t);for((l=="H"||l=="k")&&(o=0);o-- >0;)r+=c;for(;s-- >0;)r=l+r}else a==="J"?r+="H":r+=a}return r}function co(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,i;r!=="root"&&(i=e.maximize().region);var a=Xe[i||""]||Xe[r||""]||Xe["".concat(r,"-001")]||Xe["001"];return a[0]}var Tt,lo=new RegExp("^".concat(ua.source,"*")),ho=new RegExp("".concat(ua.source,"*$"));function E(e,t){return{start:e,end:t}}var po=!!String.prototype.startsWith,mo=!!String.fromCodePoint,uo=!!Object.fromEntries,go=!!String.prototype.codePointAt,fo=!!String.prototype.trimStart,vo=!!String.prototype.trimEnd,bo=!!Number.isSafeInteger,xo=bo?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Xt=!0;try{Wr=xa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Xt=((Tt=Wr.exec("a"))===null||Tt===void 0?void 0:Tt[0])==="a"}catch{Xt=!1}var Wr,Kr=po?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},Qt=mo?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r="",i=e.length,a=0,n;i>a;){if(n=e[a++],n>1114111)throw RangeError(n+" is not a valid code point");r+=n<65536?String.fromCharCode(n):String.fromCharCode(((n-=65536)>>10)+55296,n%1024+56320)}return r},Xr=uo?Object.fromEntries:function(e){for(var t={},r=0,i=e;r<i.length;r++){var a=i[r],n=a[0],s=a[1];t[n]=s}return t},ba=go?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length;if(!(t<0||t>=r)){var i=e.charCodeAt(t),a;return i<55296||i>56319||t+1===r||(a=e.charCodeAt(t+1))<56320||a>57343?i:(i-55296<<10)+(a-56320)+65536}},yo=fo?function(e){return e.trimStart()}:function(e){return e.replace(lo,"")},wo=vo?function(e){return e.trimEnd()}:function(e){return e.replace(ho,"")};function xa(e,t){return new RegExp(e,t)}var Zt;Xt?(St=xa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Zt=function(e,t){var r;St.lastIndex=t;var i=St.exec(e);return(r=i[1])!==null&&r!==void 0?r:""}):Zt=function(e,t){for(var r=[];;){var i=ba(e,t);if(i===void 0||ya(i)||So(i))break;r.push(i),t+=i>=65536?2:1}return Qt.apply(void 0,r)};var St,Eo=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,i){for(var a=[];!this.isEOF();){var n=this.char();if(n===123){var s=this.parseArgument(t,i);if(s.err)return s;a.push(s.val)}else{if(n===125&&t>0)break;if(n===35&&(r==="plural"||r==="selectordinal")){var o=this.clonePosition();this.bump(),a.push({type:_.pound,location:E(o,this.clonePosition())})}else if(n===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(w.UNMATCHED_CLOSING_TAG,E(this.clonePosition(),this.clonePosition()))}else if(n===60&&!this.ignoreTag&&Jt(this.peek()||0)){var s=this.parseTag(t,r);if(s.err)return s;a.push(s.val)}else{var s=this.parseLiteral(t,r);if(s.err)return s;a.push(s.val)}}}return{val:a,err:null}},e.prototype.parseTag=function(t,r){var i=this.clonePosition();this.bump();var a=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:_.literal,value:"<".concat(a,"/>"),location:E(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var n=this.parseMessage(t+1,r,!0);if(n.err)return n;var s=n.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Jt(this.char()))return this.error(w.INVALID_TAG,E(o,this.clonePosition()));var c=this.clonePosition(),l=this.parseTagName();return a!==l?this.error(w.UNMATCHED_CLOSING_TAG,E(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:_.tag,value:a,children:s,location:E(i,this.clonePosition())},err:null}:this.error(w.INVALID_TAG,E(o,this.clonePosition())))}else return this.error(w.UNCLOSED_TAG,E(i,this.clonePosition()))}else return this.error(w.INVALID_TAG,E(i,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&To(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var i=this.clonePosition(),a="";;){var n=this.tryParseQuote(r);if(n){a+=n;continue}var s=this.tryParseUnquoted(t,r);if(s){a+=s;continue}var o=this.tryParseLeftAngleBracket();if(o){a+=o;continue}break}var c=E(i,this.clonePosition());return{val:{type:_.literal,value:a,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Ao(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(i);this.bump()}return Qt.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(r==="plural"||r==="selectordinal")||i===125&&t>0?null:(this.bump(),Qt(i))},e.prototype.parseArgument=function(t,r){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE,E(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(w.EMPTY_ARGUMENT,E(i,this.clonePosition()));var a=this.parseIdentifierIfPossible().value;if(!a)return this.error(w.MALFORMED_ARGUMENT,E(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE,E(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:_.argument,value:a,location:E(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE,E(i,this.clonePosition())):this.parseArgumentOptions(t,r,a,i);default:return this.error(w.MALFORMED_ARGUMENT,E(i,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),i=Zt(this.message,r),a=r+i.length;this.bumpTo(a);var n=this.clonePosition(),s=E(t,n);return{value:i,location:s}},e.prototype.parseArgumentOptions=function(t,r,i,a){var n,s=this.clonePosition(),o=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(o){case"":return this.error(w.EXPECT_ARGUMENT_TYPE,E(s,c));case"number":case"date":case"time":{this.bumpSpace();var l=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var m=wo(p.val);if(m.length===0)return this.error(w.EXPECT_ARGUMENT_STYLE,E(this.clonePosition(),this.clonePosition()));var h=E(d,this.clonePosition());l={style:m,styleLocation:h}}var u=this.tryParseArgumentClose(a);if(u.err)return u;var g=E(a,this.clonePosition());if(l&&Kr(l?.style,"::",0)){var x=yo(l.style.slice(2));if(o==="number"){var p=this.parseNumberSkeletonFromString(x,l.styleLocation);return p.err?p:{val:{type:_.number,value:i,location:g,style:p.val},err:null}}else{if(x.length===0)return this.error(w.EXPECT_DATE_TIME_SKELETON,g);var A=x;this.locale&&(A=oo(x,this.locale));var m={type:Me.dateTime,pattern:A,location:l.styleLocation,parsedOptions:this.shouldParseSkeletons?eo(A):{}},y=o==="date"?_.date:_.time;return{val:{type:y,value:i,location:g,style:m},err:null}}}return{val:{type:o==="number"?_.number:o==="date"?_.date:_.time,value:i,location:g,style:(n=l?.style)!==null&&n!==void 0?n:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(w.EXPECT_SELECT_ARGUMENT_OPTIONS,E(b,T({},b)));this.bumpSpace();var S=this.parseIdentifierIfPossible(),C=0;if(o!=="select"&&S.value==="offset"){if(!this.bumpIf(":"))return this.error(w.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,E(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(w.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,w.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),S=this.parseIdentifierIfPossible(),C=p.val}var R=this.tryParsePluralOrSelectOptions(t,o,r,S);if(R.err)return R;var u=this.tryParseArgumentClose(a);if(u.err)return u;var U=E(a,this.clonePosition());return o==="select"?{val:{type:_.select,value:i,options:Xr(R.val),location:U},err:null}:{val:{type:_.plural,value:i,options:Xr(R.val),offset:C,pluralType:o==="plural"?"cardinal":"ordinal",location:U},err:null}}default:return this.error(w.INVALID_ARGUMENT_TYPE,E(s,c))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(w.EXPECT_ARGUMENT_CLOSING_BRACE,E(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(w.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,E(a,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var i=[];try{i=ro(t)}catch{return this.error(w.INVALID_NUMBER_SKELETON,r)}return{val:{type:Me.number,tokens:i,location:r,parsedOptions:this.shouldParseSkeletons?so(i):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,i,a){for(var n,s=!1,o=[],c=new Set,l=a.value,d=a.location;;){if(l.length===0){var p=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var m=this.tryParseDecimalInteger(w.EXPECT_PLURAL_ARGUMENT_SELECTOR,w.INVALID_PLURAL_ARGUMENT_SELECTOR);if(m.err)return m;d=E(p,this.clonePosition()),l=this.message.slice(p.offset,this.offset())}else break}if(c.has(l))return this.error(r==="select"?w.DUPLICATE_SELECT_ARGUMENT_SELECTOR:w.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);l==="other"&&(s=!0),this.bumpSpace();var h=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?w.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:w.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,E(this.clonePosition(),this.clonePosition()));var u=this.parseMessage(t+1,r,i);if(u.err)return u;var g=this.tryParseArgumentClose(h);if(g.err)return g;o.push([l,{value:u.val,location:E(h,this.clonePosition())}]),c.add(l),this.bumpSpace(),n=this.parseIdentifierIfPossible(),l=n.value,d=n.location}return o.length===0?this.error(r==="select"?w.EXPECT_SELECT_ARGUMENT_SELECTOR:w.EXPECT_PLURAL_ARGUMENT_SELECTOR,E(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(w.MISSING_OTHER_CLAUSE,E(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var i=1,a=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var n=!1,s=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)n=!0,s=s*10+(o-48),this.bump();else break}var c=E(a,this.clonePosition());return n?(s*=i,xo(s)?{val:s,err:null}:this.error(r,c)):this.error(t,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=ba(this.message,t);if(r===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(Kr(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),i=this.message.indexOf(t,r);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ya(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),i=this.message.charCodeAt(r+(t>=65536?2:1));return i??null},e}();function Jt(e){return e>=97&&e<=122||e>=65&&e<=90}function Ao(e){return Jt(e)||e===47}function To(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function ya(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function So(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function er(e){e.forEach(function(t){if(delete t.location,da(t)||ha(t))for(var r in t.options)delete t.options[r].location,er(t.options[r].value);else oa(t)&&ma(t.style)||(ca(t)||la(t))&&Kt(t.style)?delete t.style.location:pa(t)&&er(t.children)})}function Co(e,t){t===void 0&&(t={}),t=T({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new Eo(e,t).parse();if(r.err){var i=SyntaxError(w[r.err.kind]);throw i.location=r.err.location,i.originalMessage=r.err.message,i}return t?.captureLocation||er(r.val),r.val}function Ct(e,t){var r=t&&t.cache?t.cache:Ho,i=t&&t.serializer?t.serializer:Mo,a=t&&t.strategy?t.strategy:Po;return a(e,{cache:r,serializer:i})}function ko(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Lo(e,t,r,i){var a=ko(i)?i:r(i),n=t.get(a);return typeof n>"u"&&(n=e.call(this,i),t.set(a,n)),n}function wa(e,t,r){var i=Array.prototype.slice.call(arguments,3),a=r(i),n=t.get(a);return typeof n>"u"&&(n=e.apply(this,i),t.set(a,n)),n}function Ea(e,t,r,i,a){return r.bind(t,e,i,a)}function Po(e,t){var r=e.length===1?Lo:wa;return Ea(e,this,r,t.cache.create(),t.serializer)}function _o(e,t){return Ea(e,this,wa,t.cache.create(),t.serializer)}var Mo=function(){return JSON.stringify(arguments)};function xr(){this.cache=Object.create(null)}xr.prototype.get=function(e){return this.cache[e]};xr.prototype.set=function(e,t){this.cache[e]=t};var Ho={create:function(){return new xr}},kt={variadic:_o},He;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(He||(He={}));var mt=function(e){pt(t,e);function t(r,i,a){var n=e.call(this,r)||this;return n.code=i,n.originalMessage=a,n}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),Qr=function(e){pt(t,e);function t(r,i,a,n){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(i,'". Options are "').concat(Object.keys(a).join('", "'),'"'),He.INVALID_VALUE,n)||this}return t}(mt),Ro=function(e){pt(t,e);function t(r,i,a){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(i),He.INVALID_VALUE,a)||this}return t}(mt),Oo=function(e){pt(t,e);function t(r,i){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(i,'"'),He.MISSING_VALUE,i)||this}return t}(mt),F;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(F||(F={}));function No(e){return e.length<2?e:e.reduce(function(t,r){var i=t[t.length-1];return!i||i.type!==F.literal||r.type!==F.literal?t.push(r):i.value+=r.value,t},[])}function Bo(e){return typeof e=="function"}function et(e,t,r,i,a,n,s){if(e.length===1&&qr(e[0]))return[{type:F.literal,value:e[0].value}];for(var o=[],c=0,l=e;c<l.length;c++){var d=l[c];if(qr(d)){o.push({type:F.literal,value:d.value});continue}if(Zs(d)){typeof n=="number"&&o.push({type:F.literal,value:r.getNumberFormat(t).format(n)});continue}var p=d.value;if(!(a&&p in a))throw new Oo(p,s);var m=a[p];if(Qs(d)){(!m||typeof m=="string"||typeof m=="number")&&(m=typeof m=="string"||typeof m=="number"?String(m):""),o.push({type:typeof m=="string"?F.literal:F.object,value:m});continue}if(ca(d)){var h=typeof d.style=="string"?i.date[d.style]:Kt(d.style)?d.style.parsedOptions:void 0;o.push({type:F.literal,value:r.getDateTimeFormat(t,h).format(m)});continue}if(la(d)){var h=typeof d.style=="string"?i.time[d.style]:Kt(d.style)?d.style.parsedOptions:i.time.medium;o.push({type:F.literal,value:r.getDateTimeFormat(t,h).format(m)});continue}if(oa(d)){var h=typeof d.style=="string"?i.number[d.style]:ma(d.style)?d.style.parsedOptions:void 0;h&&h.scale&&(m=m*(h.scale||1)),o.push({type:F.literal,value:r.getNumberFormat(t,h).format(m)});continue}if(pa(d)){var u=d.children,g=d.value,x=a[g];if(!Bo(x))throw new Ro(g,"function",s);var A=et(u,t,r,i,a,n),y=x(A.map(function(C){return C.value}));Array.isArray(y)||(y=[y]),o.push.apply(o,y.map(function(C){return{type:typeof C=="string"?F.literal:F.object,value:C}}))}if(da(d)){var b=d.options[m]||d.options.other;if(!b)throw new Qr(d.value,m,Object.keys(d.options),s);o.push.apply(o,et(b.value,t,r,i,a));continue}if(ha(d)){var b=d.options["=".concat(m)];if(!b){if(!Intl.PluralRules)throw new mt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,He.MISSING_INTL_API,s);var S=r.getPluralRules(t,{type:d.pluralType}).select(m-(d.offset||0));b=d.options[S]||d.options.other}if(!b)throw new Qr(d.value,m,Object.keys(d.options),s);o.push.apply(o,et(b.value,t,r,i,a,m-(d.offset||0)));continue}}return No(o)}function Io(e,t){return t?T(T(T({},e||{}),t||{}),Object.keys(e).reduce(function(r,i){return r[i]=T(T({},e[i]),t[i]||{}),r},{})):e}function Do(e,t){return t?Object.keys(e).reduce(function(r,i){return r[i]=Io(e[i],t[i]),r},T({},e)):e}function Lt(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function Uo(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ct(function(){for(var t,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return new((t=Intl.NumberFormat).bind.apply(t,At([void 0],r,!1)))},{cache:Lt(e.number),strategy:kt.variadic}),getDateTimeFormat:Ct(function(){for(var t,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return new((t=Intl.DateTimeFormat).bind.apply(t,At([void 0],r,!1)))},{cache:Lt(e.dateTime),strategy:kt.variadic}),getPluralRules:Ct(function(){for(var t,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return new((t=Intl.PluralRules).bind.apply(t,At([void 0],r,!1)))},{cache:Lt(e.pluralRules),strategy:kt.variadic})}}var zo=function(){function e(t,r,i,a){var n=this;if(r===void 0&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(s){var o=n.formatToParts(s);if(o.length===1)return o[0].value;var c=o.reduce(function(l,d){return!l.length||d.type!==F.literal||typeof l[l.length-1]!="string"?l.push(d.value):l[l.length-1]+=d.value,l},[]);return c.length<=1?c[0]||"":c},this.formatToParts=function(s){return et(n.ast,n.locales,n.formatters,n.formats,s,void 0,n.message)},this.resolvedOptions=function(){return{locale:n.resolvedLocale.toString()}},this.getAst=function(){return n.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{ignoreTag:a?.ignoreTag,locale:this.resolvedLocale})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Do(e.formats,i),this.formatters=a&&a.formatters||Uo(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){var r=Intl.NumberFormat.supportedLocalesOf(t);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof t=="string"?t:t[0])},e.__parse=Co,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),$o=zo,Aa={recurrenceLabel:"{recurrenceTerm, select, MONTH {/mo} YEAR {/yr} other {}}",recurrenceAriaLabel:"{recurrenceTerm, select, MONTH {per month} YEAR {per year} other {}}",perUnitLabel:"{perUnit, select, LICENSE {per license} other {}}",perUnitAriaLabel:"{perUnit, select, LICENSE {per license} other {}}",freeLabel:"Free",freeAriaLabel:"Free",taxExclusiveLabel:"{taxTerm, select, GST {excl. GST} VAT {excl. VAT} TAX {excl. tax} IVA {excl. IVA} SST {excl. SST} KDV {excl. KDV} other {}}",taxInclusiveLabel:"{taxTerm, select, GST {incl. GST} VAT {incl. VAT} TAX {incl. tax} IVA {incl. IVA} SST {incl. SST} KDV {incl. KDV} other {}}",alternativePriceAriaLabel:"Alternatively at",strikethroughAriaLabel:"Regularly at",planTypeLabel:"{planType, select, ABM {Annual, billed monthly} other {}}"},Fo=Fn("ConsonantTemplates/price"),Go=/<\/?[^>]+(>|$)/g,O={container:"price",containerOptical:"price-optical",containerStrikethrough:"price-strikethrough",containerAlternative:"price-alternative",containerAnnual:"price-annual",containerAnnualPrefix:"price-annual-prefix",containerAnnualSuffix:"price-annual-suffix",disabled:"disabled",currencySpace:"price-currency-space",currencySymbol:"price-currency-symbol",decimals:"price-decimals",decimalsDelimiter:"price-decimals-delimiter",integer:"price-integer",recurrence:"price-recurrence",taxInclusivity:"price-tax-inclusivity",unitType:"price-unit-type"},fe={perUnitLabel:"perUnitLabel",perUnitAriaLabel:"perUnitAriaLabel",recurrenceLabel:"recurrenceLabel",recurrenceAriaLabel:"recurrenceAriaLabel",taxExclusiveLabel:"taxExclusiveLabel",taxInclusiveLabel:"taxInclusiveLabel",strikethroughAriaLabel:"strikethroughAriaLabel",alternativePriceAriaLabel:"alternativePriceAriaLabel"},Ta="TAX_EXCLUSIVE",qo=e=>Bn(e)?Object.entries(e).filter(([,t])=>De(t)||or(t)||t===!0).reduce((t,[r,i])=>t+` ${r}${i===!0?"":'="'+On(i)+'"'}`,""):"",I=(e,t,r,i=!1)=>`<span class="${e}${t?"":" "+O.disabled}"${qo(r)}>${i?Ls(t):t??""}</span>`;function jo(e){e=e.replaceAll("</a>","&lt;/a&gt;");let t=/<a [^>]+(>|$)/g;return e.match(t)?.forEach(r=>{let i=r.replace("<a ","&lt;a ").replace(">","&gt;");e=e.replaceAll(r,i)}),e}function Vo(e){e=e.replaceAll("&lt;/a&gt;","</a>");let t=/&lt;a (?!&gt;)(.*?)(&gt;|$)/g;return e.match(t)?.forEach(r=>{let i=r.replace("&lt;a ","<a ").replace("&gt;",">");e=e.replaceAll(r,i)}),e}function de(e,t,r,i){let a=e[r];if(a==null)return"";let n=a.includes("<"),s=a.includes("<a ");try{a=s?jo(a):a,a=n?a.replace(Go,""):a;let o=new $o(a,t).format(i);return s?Vo(o):o}catch{return Fo.error("Failed to format literal:",a),""}}function Yo(e,{accessibleLabel:t,altAccessibleLabel:r,currencySymbol:i,decimals:a,decimalsDelimiter:n,hasCurrencySpace:s,integer:o,isCurrencyFirst:c,recurrenceLabel:l,perUnitLabel:d,taxInclusivityLabel:p},m={}){let h=I(O.currencySymbol,i),u=I(O.currencySpace,s?"&nbsp;":""),g="";return t?g=`<sr-only class="strikethrough-aria-label">${t}</sr-only>`:r&&(g=`<sr-only class="alt-aria-label">${r}</sr-only>`),c&&(g+=h+u),g+=I(O.integer,o),g+=I(O.decimalsDelimiter,n),g+=I(O.decimals,a),c||(g+=u+h),g+=I(O.recurrence,l,null,!0),g+=I(O.unitType,d,null,!0),g+=I(O.taxInclusivity,p,!0),I(e,g,{...m})}var G=({isAlternativePrice:e=!1,displayOptical:t=!1,displayStrikethrough:r=!1,displayAnnual:i=!1,instant:a=void 0}={})=>({country:n,displayFormatted:s=!0,displayRecurrence:o=!0,displayPerUnit:c=!1,displayTax:l=!1,language:d,literals:p={},quantity:m=1,space:h=!1,isPromoApplied:u=!1}={},{commitment:g,offerSelectorIds:x,formatString:A,price:y,priceWithoutDiscount:b,taxDisplay:S,taxTerm:C,term:R,usePrecision:U,promotion:q}={},z={})=>{Object.entries({country:n,formatString:A,language:d,price:y}).forEach(([Da,Ua])=>{if(Ua==null)throw new Error(`Argument "${Da}" is missing for osi ${x?.toString()}, country ${n}, language ${d}`)});let H={...Aa,...p},N=`${d.toLowerCase()}-${n.toUpperCase()}`,j;q&&!u&&b?j=e?y:b:r&&b?j=b:j=y;let te=t?Ms:Hs;i&&(te=Rs);let{accessiblePrice:ce,recurrenceTerm:Ae,...Er}=te({commitment:g,formatString:A,instant:a,isIndianPrice:n==="IN",originalPrice:y,priceWithoutDiscount:b,price:t?y:j,promotion:q,quantity:m,term:R,usePrecision:U}),ut="",gt="",ft="";L(o)&&Ae&&(ft=de(H,N,fe.recurrenceLabel,{recurrenceTerm:Ae}));let Ge="";L(c)&&(h&&(Ge+=" "),Ge+=de(H,N,fe.perUnitLabel,{perUnit:"LICENSE"}));let qe="";L(l)&&C&&(h&&(qe+=" "),qe+=de(H,N,S===Ta?fe.taxExclusiveLabel:fe.taxInclusiveLabel,{taxTerm:C})),r&&(ut=de(H,N,fe.strikethroughAriaLabel,{strikethroughPrice:ut})),e&&(gt=de(H,N,fe.alternativePriceAriaLabel,{alternativePrice:gt}));let Te=O.container;if(t&&(Te+=" "+O.containerOptical),r&&(Te+=" "+O.containerStrikethrough),e&&(Te+=" "+O.containerAlternative),i&&(Te+=" "+O.containerAnnual),L(s))return Yo(Te,{...Er,accessibleLabel:ut,altAccessibleLabel:gt,recurrenceLabel:ft,perUnitLabel:Ge,taxInclusivityLabel:qe},z);let{currencySymbol:Ar,decimals:Ra,decimalsDelimiter:Oa,hasCurrencySpace:Tr,integer:Na,isCurrencyFirst:Ba}=Er,Se=[Na,Oa,Ra];Ba?(Se.unshift(Tr?" ":""),Se.unshift(Ar)):(Se.push(Tr?" ":""),Se.push(Ar)),Se.push(ft,Ge,qe);let Ia=Se.join("");return I(Te,Ia,z)},Wo=()=>(e,t,r)=>{let i=ht(t.promotion,t.promotion?.displaySummary?.instant,Array.isArray(e.quantity)?e.quantity[0]:e.quantity),a=(e.displayOldPrice===void 0||L(e.displayOldPrice))&&t.priceWithoutDiscount&&t.priceWithoutDiscount!=t.price&&(!t.promotion||i);return`${a?G({displayStrikethrough:!0})({isPromoApplied:i,...e},t,r)+"&nbsp;":""}${G({isAlternativePrice:a})({isPromoApplied:i,...e},t,r)}`},Ko=()=>(e,t,r)=>{let{instant:i}=e;try{i||(i=new URLSearchParams(document.location.search).get("instant")),i&&(i=new Date(i))}catch{i=void 0}let a=ht(t.promotion,i,Array.isArray(e.quantity)?e.quantity[0]:e.quantity),n={...e,displayTax:!1,displayPerUnit:!1,isPromoApplied:a};if(!a)return G()(e,{...t,price:t.priceWithoutDiscount},r)+I(O.containerAnnualPrefix,"&nbsp;(")+G({displayAnnual:!0,instant:i})(n,{...t,price:t.priceWithoutDiscount},r)+I(O.containerAnnualSuffix,")");let s=(e.displayOldPrice===void 0||L(e.displayOldPrice))&&t.priceWithoutDiscount&&t.priceWithoutDiscount!=t.price;return`${s?G({displayStrikethrough:!0})(n,t,r)+"&nbsp;":""}${G({isAlternativePrice:s})({isPromoApplied:a,...e},t,r)}${I(O.containerAnnualPrefix,"&nbsp;(")}${G({displayAnnual:!0,instant:i})(n,t,r)}${I(O.containerAnnualSuffix,")")}`},Xo=()=>(e,t,r)=>{let i={...e,displayTax:!1,displayPerUnit:!1};return`${G({isAlternativePrice:e.displayOldPrice})(e,t,r)}${I(O.containerAnnualPrefix,"&nbsp;(")}${G({displayAnnual:!0})(i,t,r)}${I(O.containerAnnualSuffix,")")}`},Ue={...O,containerLegal:"price-legal",planType:"price-plan-type"},Qe={...fe,planTypeLabel:"planTypeLabel"};function Qo(e,{perUnitLabel:t,taxInclusivityLabel:r,planTypeLabel:i},a={}){let n="";return n+=I(Ue.unitType,t,null,!0),r&&i&&(r+=". "),n+=I(Ue.taxInclusivity,r,!0),n+=I(Ue.planType,i,null),I(e,n,{...a})}var Zo=({country:e,displayPerUnit:t=!1,displayTax:r=!1,displayPlanType:i=!1,language:a,literals:n={}}={},{taxDisplay:s,taxTerm:o,planType:c}={},l={})=>{let d={...Aa,...n},p=`${a.toLowerCase()}-${e.toUpperCase()}`,m="";L(t)&&(m=de(d,p,Qe.perUnitLabel,{perUnit:"LICENSE"}));let h="";e==="US"&&a==="en"&&(r=!1),L(r)&&o&&(h=de(d,p,s===Ta?Qe.taxExclusiveLabel:Qe.taxInclusiveLabel,{taxTerm:o}));let u="";L(i)&&c&&(u=de(d,p,Qe.planTypeLabel,{planType:c}));let g=Ue.container;return g+=" "+Ue.containerLegal,Qo(g,{perUnitLabel:m,taxInclusivityLabel:h,planTypeLabel:u},l)},Jo=G(),ec=Wo(),tc=G({displayOptical:!0}),rc=G({displayStrikethrough:!0}),ic=G({displayAnnual:!0}),ac=G({displayOptical:!0,isAlternativePrice:!0}),nc=G({isAlternativePrice:!0}),sc=Xo(),oc=Ko(),cc=Zo,lc=(e,t)=>{if(!(!$t(e)||!$t(t)))return Math.floor((t-e)/t*100)},dc=()=>(e,t)=>{let{price:r,priceWithoutDiscount:i}=t,a=lc(r,i);return a===void 0?'<span class="no-discount"></span>':`<span class="discount">${a}%</span>`},hc=dc(),Sa="INDIVIDUAL_COM",yr="TEAM_COM",Ca="INDIVIDUAL_EDU",wr="TEAM_EDU",Zr=["GB_en","AU_en","FR_fr","AT_de","BE_en","BE_fr","BE_nl","BG_bg","CH_de","CH_fr","CH_it","CZ_cs","DE_de","DK_da","EE_et","EG_ar","EG_en","ES_es","FI_fi","GR_el","GR_en","HU_hu","IE_en","IT_it","LU_de","LU_en","LU_fr","NL_nl","NO_nb","PL_pl","PT_pt","RO_ro","SE_sv","SI_sl","SK_sk","TR_tr","UA_uk","ID_en","ID_in","IN_en","IN_hi","JP_ja","MY_en","MY_ms","NZ_en","TH_en","TH_th"],pc={[Sa]:["MU_en","LT_lt","LV_lv","NG_en","SA_ar","SA_en","SG_en","KR_ko"],[yr]:["MU_en","LT_lt","LV_lv","NG_en","CO_es","KR_ko"],[Ca]:["LT_lt","LV_lv","SA_en","SG_en"],[wr]:["SG_en","KR_ko"]},mc={MU_en:[!1,!1,!1,!1],NG_en:[!1,!1,!1,!1],AU_en:[!1,!1,!1,!1],JP_ja:[!1,!1,!1,!1],NZ_en:[!1,!1,!1,!1],TH_en:[!1,!1,!1,!1],TH_th:[!1,!1,!1,!1],CO_es:[!1,!0,!1,!1],AT_de:[!1,!1,!1,!0],SG_en:[!1,!1,!1,!0]},uc=[Sa,yr,Ca,wr],gc=e=>[yr,wr].includes(e),fc=(e,t,r,i)=>{let a=`${e}_${t}`,n=`${r}_${i}`,s=mc[a];if(s){let o=uc.indexOf(n);return s[o]}return gc(n)},vc=(e,t,r,i)=>{let a=`${e}_${t}`;if(Zr.includes(e)||Zr.includes(a))return!0;let n=pc[`${r}_${i}`];return n&&(n.includes(e)||n.includes(a))?!0:P.displayTax},bc=async(e,t,r,i)=>{let a=vc(e,t,r,i);return{displayTax:a,forceTaxExclusive:a?fc(e,t,r,i):P.forceTaxExclusive}},tr=class ka extends HTMLSpanElement{constructor(){super(),f(this,"masElement",new vr(this)),this.handleClick=this.handleClick.bind(this)}static get observedAttributes(){return["data-display-old-price","data-display-per-unit","data-display-recurrence","data-display-tax","data-display-plan-type","data-display-annual","data-perpetual","data-promotion-code","data-force-tax-exclusive","data-template","data-wcs-osi","data-quantity"]}static createInlinePrice(t){let r=se();if(!r)return null;let{displayOldPrice:i,displayPerUnit:a,displayRecurrence:n,displayTax:s,displayPlanType:o,displayAnnual:c,forceTaxExclusive:l,perpetual:d,promotionCode:p,quantity:m,alternativePrice:h,template:u,wcsOsi:g}=r.collectPriceOptions(t);return ta(ka,{displayOldPrice:i,displayPerUnit:a,displayRecurrence:n,displayTax:s,displayPlanType:o,displayAnnual:c,forceTaxExclusive:l,perpetual:d,promotionCode:p,quantity:m,alternativePrice:h,template:u,wcsOsi:g})}get isInlinePrice(){return!0}attributeChangedCallback(t,r,i){this.masElement.attributeChangedCallback(t,r,i)}connectedCallback(){this.masElement.connectedCallback(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){this.masElement.disconnectedCallback(),this.removeEventListener("click",this.handleClick)}handleClick(t){t.target!==this&&(t.stopImmediatePropagation(),this.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})))}onceSettled(){return this.masElement.onceSettled()}get value(){return this.masElement.value}get options(){return this.masElement.options}get isFailed(){return this.masElement.state===oe}requestUpdate(t=!1){return this.masElement.requestUpdate(t)}async render(t={}){if(!this.isConnected)return!1;let r=se();if(!r)return!1;let i=r.collectPriceOptions(t,this),a={...r.settings,...i};if(!a.wcsOsi.length)return!1;try{let n=this.masElement.togglePending({});this.innerHTML="";let[s]=await r.resolveOfferSelectors(a),o=qt(await s,a),[c]=o;if(r.featureFlags[_e]||a[_e]){if(i.displayPerUnit===void 0&&(a.displayPerUnit=c.customerSegment!=="INDIVIDUAL"),i.displayTax===void 0||i.forceTaxExclusive===void 0){let{country:l,language:d}=a,[p=""]=c.marketSegments,m=await bc(l,d,c.customerSegment,p);i.displayTax===void 0&&(a.displayTax=m?.displayTax||a.displayTax),i.forceTaxExclusive===void 0&&(a.forceTaxExclusive=m?.forceTaxExclusive||a.forceTaxExclusive),a.forceTaxExclusive&&(o=qt(o,a))}}else i.displayOldPrice===void 0&&(a.displayOldPrice=!0);return this.renderOffers(o,a,n)}catch(n){throw this.innerHTML="",n}}renderOffers(t,r,i=void 0){if(!this.isConnected)return;let a=se();if(!a)return!1;if(i??(i=this.masElement.togglePending()),t.length){if(this.masElement.toggleResolved(i,t,r)){this.innerHTML=a.buildPriceHTML(t,this.options);let n=this.closest("p, h3, div");if(!n||!n.querySelector('span[data-template="strikethrough"]')||n.querySelector(".alt-aria-label"))return!0;let s=n?.querySelectorAll('span[is="inline-price"]');return s.length>1&&s.length===n.querySelectorAll('span[data-template="strikethrough"]').length*2&&s.forEach(o=>{o.dataset.template!=="strikethrough"&&o.options&&!o.options.alternativePrice&&!o.isFailed&&(o.options.alternativePrice=!0,o.innerHTML=a.buildPriceHTML(t,o.options))}),!0}}else{let n=new Error(`Not provided: ${this.options?.wcsOsi??"-"}`);if(this.masElement.toggleFailed(i,n,this.options))return this.innerHTML="",!0}return!1}};f(tr,"is","inline-price"),f(tr,"tag","span");var Pe=tr;window.customElements.get(Pe.is)||window.customElements.define(Pe.is,Pe,{extends:Pe.tag});function xc({literals:e,providers:t,settings:r}){function i(s,o=null){let c={country:r.country,language:r.language,locale:r.locale,literals:{...e.price}};if(o&&t?.price)for(let R of t.price)R(o,c);let{displayOldPrice:l,displayPerUnit:d,displayRecurrence:p,displayTax:m,displayPlanType:h,forceTaxExclusive:u,perpetual:g,displayAnnual:x,promotionCode:A,quantity:y,alternativePrice:b,wcsOsi:S,...C}=Object.assign(c,o?.dataset??{},s??{});return c=Fi(Object.assign({...c,...C,displayOldPrice:L(l),displayPerUnit:L(d),displayRecurrence:L(p),displayTax:L(m),displayPlanType:L(h),forceTaxExclusive:L(u),perpetual:L(g),displayAnnual:L(x),promotionCode:Gi(A).effectivePromoCode,quantity:mr(y,P.quantity),alternativePrice:L(b),wcsOsi:ji(S)})),c}function a(s,o){if(!Array.isArray(s)||!s.length||!o)return"";let{template:c}=o,l;switch(c){case"discount":l=hc;break;case"strikethrough":l=rc;break;case"annual":l=ic;break;case"legal":l=cc;break;default:o.template==="optical"&&o.alternativePrice?l=ac:o.template==="optical"?l=tc:o.displayAnnual&&s[0].planType==="ABM"?l=o.promotionCode?oc:sc:o.alternativePrice?l=nc:l=o.promotionCode?ec:Jo}let[d]=s;return d={...d,...d.priceDetails},l({...r,...o},d)}let n=Pe.createInlinePrice;return{InlinePrice:Pe,buildPriceHTML:a,collectPriceOptions:i,createInlinePrice:n}}function yc({locale:e=void 0,country:t=void 0,language:r=void 0}={}){return r??(r=e?.split("_")?.[0]||P.language),t??(t=e?.split("_")?.[1]||P.country),e??(e=`${r}_${t}`),{locale:e,country:t,language:r}}function wc(e={},t){t.featureFlags[_e];let{commerce:r={}}=e,i=xe.PRODUCTION,a=_i,n=D("checkoutClientId",r)??P.checkoutClientId,s=Ft(D("checkoutWorkflowStep",r),ne,P.checkoutWorkflowStep),o=P.displayOldPrice,c=P.displayPerUnit,l=L(D("displayRecurrence",r),P.displayRecurrence),d=L(D("displayTax",r),P.displayTax),p=L(D("displayPlanType",r),P.displayPlanType),m=L(D("entitlement",r),P.entitlement),h=L(D("modal",r),P.modal),u=L(D("forceTaxExclusive",r),P.forceTaxExclusive),g=D("promotionCode",r)??P.promotionCode,x=mr(D("quantity",r)),A=D("wcsApiKey",r)??P.wcsApiKey,y=r?.env==="stage",b=Fe.PUBLISHED;["true",""].includes(r.allowOverride)&&(y=(D(Li,r,{metadata:!1})?.toLowerCase()??r?.env)==="stage",b=Ft(D(Pi,r),Fe,b)),y&&(i=xe.STAGE,a=Mi);let S=D(ki)??e.preview,C=typeof S<"u"&&S!=="off"&&S!=="false",R={};C&&(R={preview:C});let U=D("mas-io-url")??e.masIOUrl??`https://www${i===xe.STAGE?".stage":""}.adobe.com/mas/io`,q=D("preselect-plan")??void 0;return{...yc(e),...R,displayOldPrice:o,checkoutClientId:n,checkoutWorkflowStep:s,displayPerUnit:c,displayRecurrence:l,displayTax:d,displayPlanType:p,entitlement:m,extraOptions:P.extraOptions,modal:h,env:i,forceTaxExclusive:u,promotionCode:g,quantity:x,alternativePrice:P.alternativePrice,wcsApiKey:A,wcsURL:a,landscape:b,masIOUrl:U,...q&&{preselectPlan:q}}}async function Ec(e,t={},r=2,i=100){let a;for(let n=0;n<=r;n++)try{let s=await fetch(e,t);return s.retryCount=n,s}catch(s){if(a=s,a.retryCount=n,n>r)break;await new Promise(o=>setTimeout(o,i*(n+1)))}throw a}var Pt="wcs";function Ac({settings:e}){let t=he.module(Pt),{env:r,wcsApiKey:i}=e,a=new Map,n=new Map,s,o=new Map;async function c(h,u,g=!0){let x=se(),A=Ai;t.debug("Fetching:",h);let y="",b;if(h.offerSelectorIds.length>1)throw new Error("Multiple OSIs are not supported anymore");let S=new Map(u),[C]=h.offerSelectorIds,R=Date.now()+Math.random().toString(36).substring(2,7),U=`${Pt}:${C}:${R}${Ri}`,q=`${Pt}:${C}:${R}${Oi}`,z;try{if(performance.mark(U),y=new URL(e.wcsURL),y.searchParams.set("offer_selector_ids",C),y.searchParams.set("country",h.country),y.searchParams.set("locale",h.locale),y.searchParams.set("landscape",r===xe.STAGE?"ALL":e.landscape),y.searchParams.set("api_key",i),h.language&&y.searchParams.set("language",h.language),h.promotionCode&&y.searchParams.set("promotion_code",h.promotionCode),h.currency&&y.searchParams.set("currency",h.currency),b=await Ec(y.toString(),{credentials:"omit"}),b.ok){let H=[];try{let N=await b.json();t.debug("Fetched:",h,N),H=N.resolvedOffers??[]}catch(N){t.error(`Error parsing JSON: ${N.message}`,{...N.context,...x?.duration})}H=H.map(vt),u.forEach(({resolve:N},j)=>{let te=H.filter(({offerSelectorIds:ce})=>ce.includes(j)).flat();te.length&&(S.delete(j),u.delete(j),N(te))})}else A=Ei}catch(H){A=`Network error: ${H.message}`}finally{z=performance.measure(q,U),performance.clearMarks(U),performance.clearMeasures(q)}if(g&&u.size){t.debug("Missing:",{offerSelectorIds:[...u.keys()]});let H=rs(b);u.forEach(N=>{N.reject(new Zi(A,{...h,...H,response:b,measure:Ni(z),...x?.duration}))})}}function l(){clearTimeout(s);let h=[...n.values()];n.clear(),h.forEach(({options:u,promises:g})=>c(u,g))}function d(h){if(!h||typeof h!="object")throw new TypeError("Cache must be a Map or similar object");let u=r===xe.STAGE?"stage":"prod",g=h[u];if(!g||typeof g!="object"){t.warn(`No cache found for environment: ${r}`);return}for(let[x,A]of Object.entries(g))a.set(x,Promise.resolve(A.map(vt)));t.debug(`Prefilled WCS cache with ${g.size} entries`)}function p(){let h=a.size;o=new Map(a),a.clear(),t.debug(`Moved ${h} cache entries to stale cache`)}function m({country:h,language:u,perpetual:g=!1,promotionCode:x="",wcsOsi:A=[]}){let y=`${u}_${h}`;h!=="GB"&&!g&&(u="MULT");let b=[h,u,x].filter(S=>S).join("-").toLowerCase();return A.map(S=>{let C=`${S}-${b}`;if(a.has(C))return a.get(C);let R=new Promise((U,q)=>{let z=n.get(b);if(!z){let H={country:h,locale:y,offerSelectorIds:[]};h!=="GB"&&!g&&(H.language=u),z={options:H,promises:new Map},n.set(b,z)}x&&(z.options.promotionCode=x),z.options.offerSelectorIds.push(S),z.promises.set(S,{resolve:U,reject:q}),l()}).catch(U=>{if(o.has(C))return o.get(C);throw U});return a.set(C,R),R})}return{Commitment:ze,PlanType:Qn,Term:ie,applyPlanType:vt,resolveOfferSelectors:m,flushWcsCacheInternal:p,prefillWcsCache:d}}var Jr="mas-commerce-service",ei="mas-commerce-service:start",ti="mas-commerce-service:ready",tt,Oe,rt,La,Pa,Tc=class extends HTMLElement{constructor(){super(...arguments),W(this,rt),W(this,tt),W(this,Oe),f(this,"lastLoggingTime",0)}async registerCheckoutAction(e){typeof e=="function"&&(this.buildCheckoutAction=async(t,r,i)=>await e?.(t,r,this.imsSignedInPromise,i)||null)}get featureFlags(){return k(this,Oe)||K(this,Oe,{[_e]:ni(this,rt,Pa).call(this,_e)}),k(this,Oe)}activate(){let e=k(this,rt,La),t=wc(e,this);Wi(e.lana);let r=he.init(e.hostEnv).module("service");r.debug("Activating:",e);let i={price:Xs(t)},a={checkout:new Set,price:new Set},n={literals:i,providers:a,settings:t};Object.defineProperties(this,Object.getOwnPropertyDescriptors({...js(n),...Ks(n),...xc(n),...Ac(n),...oi,Log:he,get defaults(){return P},get log(){return he},get providers(){return{checkout(o){return a.checkout.add(o),()=>a.checkout.delete(o)},price(o){return a.price.add(o),()=>a.price.delete(o)},has:o=>a.price.has(o)||a.checkout.has(o)}},get settings(){return t}})),r.debug("Activated:",{literals:i,settings:t});let s=new CustomEvent(ci,{bubbles:!0,cancelable:!1,detail:this});performance.mark(ti),K(this,tt,performance.measure(ti,ei)),this.dispatchEvent(s),setTimeout(()=>{this.logFailedRequests()},1e4)}connectedCallback(){performance.mark(ei),this.activate()}flushWcsCache(){this.flushWcsCacheInternal(),this.log.debug("Flushed WCS cache")}refreshOffers(){this.flushWcsCacheInternal(),document.querySelectorAll(hi).forEach(e=>e.requestUpdate(!0)),this.log.debug("Refreshed WCS offers"),this.logFailedRequests()}refreshFragments(){this.flushWcsCacheInternal(),customElements.get("aem-fragment")?.cache.clear(),document.querySelectorAll("aem-fragment").forEach(e=>e.refresh(!1)),this.log.debug("Refreshed AEM fragments"),this.logFailedRequests()}get duration(){return{"mas-commerce-service:measure":Ni(k(this,tt))}}logFailedRequests(){let e=[...performance.getEntriesByType("resource")].filter(({startTime:r})=>r>this.lastLoggingTime).filter(({transferSize:r,duration:i,responseStatus:a})=>r===0&&i===0&&a<200||a>=400),t=Array.from(new Map(e.map(r=>[r.name,r])).values());if(t.some(({name:r})=>/(\/fragment\?|web_commerce_artifact)/.test(r))){let r=t.map(({name:i})=>i);this.log.error("Failed requests:",{failedUrls:r,...this.duration})}this.lastLoggingTime=performance.now().toFixed(3)}};tt=new WeakMap,Oe=new WeakMap,rt=new WeakSet,La=function(){let e=this.getAttribute("env")??"prod",t={commerce:{env:e},hostEnv:{name:e},lana:{tags:this.getAttribute("lana-tags"),sampleRate:parseInt(this.getAttribute("lana-sample-rate")??1,10),isProdDomain:e==="prod"},masIOUrl:this.getAttribute("mas-io-url")};return["locale","country","language","preview"].forEach(r=>{let i=this.getAttribute(r);i&&(t[r]=i)}),["checkout-workflow-step","force-tax-exclusive","checkout-client-id","allow-override","wcs-api-key"].forEach(r=>{let i=this.getAttribute(r);if(i!=null){let a=r.replace(/-([a-z])/g,n=>n[1].toUpperCase());t.commerce[a]=i}}),t},Pa=function(e){return["on","true",!0].includes(this.getAttribute(`data-${e}`)||D(e))};window.customElements.get(Jr)||window.customElements.define(Jr,Tc);var _a="merch-card-collection",Sc=2e4,Cc={catalog:["four-merch-cards"],plans:["four-merch-cards"],plansThreeColumns:["three-merch-cards"]},kc={plans:!0},Lc=(e,{filter:t})=>e.filter(r=>r?.filters&&r?.filters.hasOwnProperty(t)),Pc=(e,{types:t})=>t?(t=t.split(","),e.filter(r=>t.some(i=>r.types.includes(i)))):e,_c=e=>e.sort((t,r)=>(t.title??"").localeCompare(r.title??"","en",{sensitivity:"base"})),Mc=(e,{filter:t})=>e.sort((r,i)=>i.filters[t]?.order==null||isNaN(i.filters[t]?.order)?-1:r.filters[t]?.order==null||isNaN(r.filters[t]?.order)?1:r.filters[t].order-i.filters[t].order),Hc=(e,{search:t})=>t?.length?(t=t.toLowerCase(),e.filter(r=>(r.title??"").toLowerCase().includes(t))):e,ve,Ne,ct,it,rr,Ma,lt=class extends ri{constructor(){super(),W(this,rr),W(this,ve,{}),W(this,Ne),W(this,ct),W(this,it),this.id=null,this.filter="all",this.hasMore=!1,this.resultCount=void 0,this.displayResult=!1,this.data=null,this.variant=null,this.hydrating=!1,this.hydrationReady=null,this.literalsHandlerAttached=!1,this.onUnmount=[]}render(){return v`
            <slot></slot>
            ${this.footer}`}checkReady(){if(!this.querySelector("aem-fragment"))return Promise.resolve(!0);let e=new Promise(t=>setTimeout(()=>t(!1),Sc));return Promise.race([this.hydrationReady,e])}updated(e){if(!this.querySelector("merch-card"))return;let t=window.scrollY||document.documentElement.scrollTop,r=[...this.children].filter(s=>s.tagName==="MERCH-CARD");if(r.length===0)return;e.has("singleApp")&&this.singleApp&&r.forEach(s=>{s.updateFilters(s.name===this.singleApp)});let i=this.sort===re.alphabetical?_c:Mc,a=[Lc,Pc,Hc,i].reduce((s,o)=>o(s,this),r).map((s,o)=>[s,o]);if(this.resultCount=a.length,this.page&&this.limit){let s=this.page*this.limit;this.hasMore=a.length>s,a=a.filter(([,o])=>o<s)}let n=new Map(a.reverse());for(let s of n.keys())this.prepend(s);r.forEach(s=>{n.has(s)?(s.size=s.filters[this.filter]?.size,s.style.removeProperty("display"),s.requestUpdate()):(s.style.display="none",s.size=void 0)}),window.scrollTo(0,t),this.updateComplete.then(()=>{this.dispatchLiteralsChanged(),this.sidenav&&!this.literalsHandlerAttached&&(this.sidenav.addEventListener(gi,()=>{this.dispatchLiteralsChanged()}),this.literalsHandlerAttached=!0)})}dispatchLiteralsChanged(){this.dispatchEvent(new CustomEvent(ue,{detail:{resultCount:this.resultCount,searchTerm:this.search,filter:this.sidenav?.filters?.selectedText}}))}buildOverrideMap(){K(this,ve,{}),this.overrides?.split(",").forEach(e=>{let[t,r]=e?.split(":");t&&r&&(k(this,ve)[t]=r)})}connectedCallback(){super.connectedCallback(),K(this,Ne,_t()),k(this,Ne)&&K(this,ct,k(this,Ne).Log.module(_a)),K(this,it,customElements.get("merch-card")),this.buildOverrideMap(),this.init()}async init(){await this.hydrate(),this.sidenav=this.parentElement.querySelector("merch-sidenav"),this.filtered?(this.filter=this.filtered,this.page=1):this.startDeeplink(),this.initializePlaceholders()}disconnectedCallback(){super.disconnectedCallback(),this.stopDeeplink?.();for(let e of this.onUnmount)e()}initializeHeader(){let e=document.createElement("merch-card-collection-header");e.collection=this,e.classList.add(this.variant),this.parentElement.insertBefore(e,this),this.header=e,this.querySelectorAll("[placeholder]").forEach(t=>{let r=t.getAttribute("slot");this.header.placeholderKeys.includes(r)&&this.header.append(t)})}initializePlaceholders(){let e=this.data?.placeholders||{};!e.searchText&&this.data?.sidenavSettings?.searchText&&(e.searchText=this.data.sidenavSettings.searchText);for(let t of Object.keys(e)){let r=e[t],i=r.includes("<p>")?"div":"p",a=document.createElement(i);a.setAttribute("slot",t),a.setAttribute("placeholder",""),a.innerHTML=r,this.append(a)}}attachSidenav(e,t=!0){if(!e)return;t&&this.parentElement.prepend(e),this.sidenav=e,this.sidenav.variant=this.variant,this.sidenav.classList.add(this.variant),kc[this.variant]&&this.sidenav.setAttribute("autoclose",""),this.initializeHeader(),this.dispatchEvent(new CustomEvent(nt));let r=k(this,it)?.getCollectionOptions(this.variant)?.onSidenavAttached;r&&r(this)}async hydrate(){if(this.hydrating)return!1;let e=this.querySelector("aem-fragment");if(!e)return;this.id=e.getAttribute("fragment"),this.hydrating=!0;let t;this.hydrationReady=new Promise(a=>{t=a});let r=this;function i(a,n){let s;a.fields?.checkboxGroups?s=a.fields.checkboxGroups:a.fields?.tagFilters&&(s=[{title:a.fields?.tagFiltersTitle,label:"types",deeplink:"types",checkboxes:a.fields.tagFilters.map(d=>{let p=d.split("/").pop(),m=a.settings?.tagLabels?.[p]||p;return m=m.startsWith("coll-tag-filter")?p.charAt(0).toUpperCase()+p.slice(1):m,{name:p,label:m}})}]);let o={searchText:a.fields?.searchText,tagFilters:s,linksTitle:a.fields?.linksTitle,link:a.fields?.link,linkText:a.fields?.linkText,linkIcon:a.fields?.linkIcon},c={cards:[],hierarchy:[],placeholders:a.placeholders,sidenavSettings:o};function l(d,p){for(let m of p){if(m.fieldName==="cards"){if(c.cards.findIndex(x=>x.id===m.identifier)!==-1)continue;c.cards.push(a.references[m.identifier].value);continue}let h=a.references[m.identifier]?.value;if(!h?.fields)continue;let{fields:u}=h,g={label:u.label||"",icon:u.icon,iconLight:u.iconLight,queryLabel:u.queryLabel,cards:u.cards?u.cards.map(x=>n[x]||x):[],collections:[]};u.defaultchild&&(g.defaultchild=n[u.defaultchild]||u.defaultchild),d.push(g),l(g.collections,m.referencesTree)}}return l(c.hierarchy,a.referencesTree),c.hierarchy.length===0&&(r.filtered="all"),c}e.addEventListener(vi,a=>{ni(this,rr,Ma).call(this,"Error loading AEM fragment",a.detail),this.hydrating=!1,e.remove()}),e.addEventListener(fi,async a=>{this.limit=27,this.data=i(a.detail,k(this,ve));let{cards:n,hierarchy:s}=this.data,o=s.length===0&&a.detail.fields?.defaultchild?k(this,ve)[a.detail.fields.defaultchild]||a.detail.fields.defaultchild:null;e.cache.add(...n);let c=(p,m)=>{for(let h of p)if(h.defaultchild===m||h.collections&&c(h.collections,m))return!0;return!1};for(let p of n){let m=function(A){for(let y of A){let b=y.cards.indexOf(u);if(b===-1)continue;let S=y.queryLabel??y?.label?.toLowerCase()??"";h.filters[S]={order:b+1,size:p.fields.size},m(y.collections)}},h=document.createElement("merch-card"),u=k(this,ve)[p.id]||p.id;h.setAttribute("consonant",""),h.setAttribute("style","");let g=p.fields.tags?.filter(A=>A.startsWith("mas:types/")).map(A=>A.split("/")[1]).join(",");g&&h.setAttribute("types",g),zi(p.fields.variant)?.supportsDefaultChild&&(o?u===o:c(s,u))&&h.setAttribute("data-default-card","true"),m(s);let x=document.createElement("aem-fragment");x.setAttribute("fragment",u),h.append(x),Object.keys(h.filters).length===0&&(h.filters={all:{order:n.indexOf(p)+1,size:p.fields.size}}),this.append(h)}let l="",d=us(n[0]?.fields?.variant);this.variant=d,d==="plans"&&n.length===3&&!n.some(p=>p.fields?.size?.includes("wide"))&&(l="ThreeColumns"),d&&this.classList.add("merch-card-collection",d,...Cc[`${d}${l}`]||[]),this.displayResult=!0,this.hydrating=!1,e.remove(),t(!0)}),await this.hydrationReady}get footer(){if(!this.filtered)return v`<div id="footer">
            <sp-theme  color="light" scale="medium">
                ${this.showMoreButton}
            </sp-theme>
        </div>`}get showMoreButton(){if(this.hasMore)return v`<sp-button
            variant="secondary"
            treatment="outline"
            style="order: 1000;"
            @click="${this.showMore}"
        >
            <slot name="showMoreText"></slot>
        </sp-button>`}sortChanged(e){e.target.value===re.authored?Ve({sort:void 0}):Ve({sort:e.target.value}),this.dispatchEvent(new CustomEvent(mi,{bubbles:!0,composed:!0,detail:{value:e.target.value}}))}async showMore(){this.dispatchEvent(new CustomEvent(ui,{bubbles:!0,composed:!0}));let e=this.page+1;Ve({page:e}),this.page=e,await this.updateComplete}startDeeplink(){this.stopDeeplink=Ga(({category:e,filter:t,types:r,sort:i,search:a,single_app:n,page:s})=>{t=t||e,!this.filtered&&t&&t!==this.filter&&setTimeout(()=>{Ve({page:void 0}),this.page=1},1),this.filtered||(this.filter=t??this.filter),this.types=r??"",this.search=a??"",this.singleApp=n,this.sort=i,this.page=Number(s)||1})}openFilters(e){this.sidenav?.showModal(e)}};ve=new WeakMap,Ne=new WeakMap,ct=new WeakMap,it=new WeakMap,rr=new WeakSet,Ma=function(e,t={},r=!0){k(this,ct).error(`merch-card-collection: ${e}`,t),this.failed=!0,r&&this.dispatchEvent(new CustomEvent(bi,{detail:{...t,message:e},bubbles:!0,composed:!0}))},f(lt,"properties",{id:{type:String,attribute:"id",reflect:!0},displayResult:{type:Boolean,attribute:"display-result"},filter:{type:String,attribute:"filter",reflect:!0},filtered:{type:String,attribute:"filtered",reflect:!0},hasMore:{type:Boolean},limit:{type:Number,attribute:"limit"},overrides:{type:String},page:{type:Number,attribute:"page",reflect:!0},resultCount:{type:Number},search:{type:String,attribute:"search",reflect:!0},sidenav:{type:Object},singleApp:{type:String,attribute:"single-app",reflect:!0},sort:{type:String,attribute:"sort",default:re.authored,reflect:!0},types:{type:String,attribute:"types",reflect:!0}}),f(lt,"styles",X`
        #footer {
            grid-column: 1 / -1;
            justify-self: stretch;
            color: var(--merch-color-grey-80);
            order: 1000;
        }

        sp-theme {
            display: contents;
        }
    `);lt.SortOrder=re;customElements.define(_a,lt);var Rc={filters:["noResultText","resultText","resultsText"],filtersMobile:["noResultText","resultMobileText","resultsMobileText"],search:["noSearchResultsText","searchResultText","searchResultsText"],searchMobile:["noSearchResultsMobileText","searchResultMobileText","searchResultsMobileText"]},Oc=(e,t,r)=>{e.querySelectorAll(`[data-placeholder="${t}"]`).forEach(i=>{i.innerText=r||""})},Nc={search:["mobile","tablet"],filter:["mobile","tablet"],sort:!0,result:!0,custom:!1},Bc={catalog:"l"},Y,Be,Ha=class extends ri{constructor(){super(),W(this,Y),W(this,Be),f(this,"tablet",new Sr(this,Q)),f(this,"desktop",new Sr(this,$)),this.collection=null,K(this,Y,{search:!1,filter:!1,sort:!1,result:!1,custom:!1}),this.updateLiterals=this.updateLiterals.bind(this),this.handleSidenavAttached=this.handleSidenavAttached.bind(this)}connectedCallback(){super.connectedCallback(),this.collection?.addEventListener(ue,this.updateLiterals),this.collection?.addEventListener(nt,this.handleSidenavAttached),K(this,Be,customElements.get("merch-card"))}disconnectedCallback(){super.disconnectedCallback(),this.collection?.removeEventListener(ue,this.updateLiterals),this.collection?.removeEventListener(nt,this.handleSidenavAttached)}willUpdate(){k(this,Y).search=this.getVisibility("search"),k(this,Y).filter=this.getVisibility("filter"),k(this,Y).sort=this.getVisibility("sort"),k(this,Y).result=this.getVisibility("result"),k(this,Y).custom=this.getVisibility("custom")}parseVisibilityOptions(e,t){if(!e||!Object.hasOwn(e,t))return null;let r=e[t];return r===!1?!1:r===!0?!0:r.includes(this.currentMedia)}getVisibility(e){let t=k(this,Be)?.getCollectionOptions(this.collection?.variant)?.headerVisibility,r=this.parseVisibilityOptions(t,e);return r!==null?r:this.parseVisibilityOptions(Nc,e)}get sidenav(){return this.collection?.sidenav}get search(){return this.collection?.search}get resultCount(){return this.collection?.resultCount}get variant(){return this.collection?.variant}get isMobile(){return!this.isTablet&&!this.isDesktop}get isTablet(){return this.tablet.matches&&!this.desktop.matches}get isDesktop(){return this.desktop.matches}get currentMedia(){return this.isDesktop?"desktop":this.isTablet?"tablet":"mobile"}get searchAction(){if(!k(this,Y).search)return B;let e=Ye(this,"searchText");return e?v`
              <merch-search deeplink="search" id="search">
                  <sp-search
                      id="search-bar"
                      placeholder="${e}"
                      .size=${Bc[this.variant]}
                      aria-label="${e}"
                  ></sp-search>
              </merch-search>
          `:B}get filterAction(){return k(this,Y).filter?this.sidenav?v`
              <sp-action-button
                id="filter"
                variant="secondary"
                treatment="outline"
                @click="${this.openFilters}"
                ><slot name="filtersText"></slot
              ></sp-action-button>
          `:B:B}get sortAction(){if(!k(this,Y).sort)return B;let e=Ye(this,"sortText");if(!e)return;let t=Ye(this,"popularityText"),r=Ye(this,"alphabeticallyText");if(!(t&&r))return;let i=this.collection?.sort===re.alphabetical;return v`
              <sp-action-menu
                  id="sort"
                  size="m"
                  @change="${this.collection?.sortChanged}"
                  selects="single"
                  value="${i?re.alphabetical:re.authored}"
              >
                  <span slot="label-only"
                      >${e}:
                      ${i?r:t}</span
                  >
                  <sp-menu-item value="${re.authored}"
                      >${t}</sp-menu-item
                  >
                  <sp-menu-item value="${re.alphabetical}"
                      >${r}</sp-menu-item
                  >
              </sp-action-menu>
          `}get resultSlotName(){let e=`${this.search?"search":"filters"}${this.isMobile||this.isTablet?"Mobile":""}`;return Rc[e][Math.min(this.resultCount,2)]}get resultLabel(){if(!k(this,Y).result)return B;if(!this.sidenav)return B;let e=this.search?"search":"filter",t=this.resultCount?this.resultCount===1?"single":"multiple":"none";return v`
            <div id="result" aria-live="polite" type=${e} quantity=${t}>
                <slot name="${this.resultSlotName}"></slot>
            </div>`}get customArea(){if(!k(this,Y).custom)return B;let e=k(this,Be)?.getCollectionOptions(this.collection?.variant)?.customHeaderArea;if(!e)return B;let t=e(this.collection);return!t||t===B?B:v`<div id="custom" role="heading" aria-level="2">${t}</div>`}openFilters(e){this.sidenav.showModal(e)}updateLiterals(e){Object.keys(e.detail).forEach(t=>{Oc(this,t,e.detail[t])}),this.requestUpdate()}handleSidenavAttached(){this.requestUpdate()}render(){return v`
            <sp-theme color="light" scale="medium">
              <div id="header">${this.searchAction}${this.filterAction}${this.sortAction}${this.resultLabel}${this.customArea}</div>
            </sp-theme>
          `}get placeholderKeys(){return["searchText","filtersText","sortText","popularityText","alphabeticallyText","noResultText","resultText","resultsText","resultMobileText","resultsMobileText","noSearchResultsText","searchResultText","searchResultsText","noSearchResultsMobileText","searchResultMobileText","searchResultsMobileText"]}};Y=new WeakMap,Be=new WeakMap,f(Ha,"styles",X`
          :host {
              --merch-card-collection-header-max-width: var(--merch-card-collection-card-width);
              --merch-card-collection-header-margin-bottom: 32px;
              --merch-card-collection-header-column-gap: 8px;
              --merch-card-collection-header-row-gap: 16px;
              --merch-card-collection-header-columns: auto auto;
              --merch-card-collection-header-areas: "search search"
                                                    "filter sort"
                                                    "result result";
              --merch-card-collection-header-search-max-width: unset;
              --merch-card-collection-header-search-min-height: 44px;
              --merch-card-collection-header-filter-height: 44px;
              --merch-card-collection-header-filter-font-size: 16px;
              --merch-card-collection-header-filter-padding: 15px;
              --merch-card-collection-header-sort-height: var(--merch-card-collection-header-filter-height);
              --merch-card-collection-header-sort-font-size: var(--merch-card-collection-header-filter-font-size);
              --merch-card-collection-header-sort-padding: var(--merch-card-collection-header-filter-padding);
              --merch-card-collection-header-result-font-size: 14px;
          }

          sp-theme {
              font-size: inherit;
          }

          #header {
              display: grid;
              column-gap: var(--merch-card-collection-header-column-gap);
              row-gap: var(--merch-card-collection-header-row-gap);
              align-items: center;
              grid-template-columns: var(--merch-card-collection-header-columns);
              grid-template-areas: var(--merch-card-collection-header-areas);
              margin-bottom: var(--merch-card-collection-header-margin-bottom);
              max-width: var(--merch-card-collection-header-max-width);
          }

          #header:empty {
              margin-bottom: 0;
          }

          #search {
              grid-area: search;
          }

          #search sp-search {
              max-width: var(--merch-card-collection-header-search-max-width);
              width: 100%;
              min-height: var(--merch-card-collection-header-search-min-height);
          }

          #filter {
              grid-area: filter;
              --mod-actionbutton-edge-to-text: var(--merch-card-collection-header-filter-padding);
              --mod-actionbutton-height: var(--merch-card-collection-header-filter-height);
          }

          #filter slot[name="filtersText"] {
              font-size: var(--merch-card-collection-header-filter-font-size);
          }

          #sort {
              grid-area: sort;
              --mod-actionbutton-edge-to-text: var(--merch-card-collection-header-sort-padding);
              --mod-actionbutton-height: var(--merch-card-collection-header-sort-height);
          }

          #sort [slot="label-only"] {
              font-size: var(--merch-card-collection-header-sort-font-size);
          }

          #result {
              grid-area: result;
              font-size: var(--merch-card-collection-header-result-font-size);
          }

          #result[type="search"][quantity="none"] {
              font-size: inherit;
          }

          #custom {
              grid-area: custom;
          }

          /* tablets */
          @media screen and ${at(Q)} {
              :host {
                  --merch-card-collection-header-max-width: auto;
                  --merch-card-collection-header-columns: 1fr fit-content(100%) fit-content(100%);
                  --merch-card-collection-header-areas: "search filter sort"
                                                        "result result result";
              }
          }

          /* Laptop */
          @media screen and ${at($)} {
              :host {
                  --merch-card-collection-header-columns: 1fr fit-content(100%);
                  --merch-card-collection-header-areas: "result sort";
                  --merch-card-collection-header-result-font-size: inherit;
              }
          }
      `);customElements.define("merch-card-collection-header",Ha);export{lt as MerchCardCollection,Ha as default};
