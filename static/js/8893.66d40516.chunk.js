"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[8893,4424,1274],{4705:(e,t,o)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var s=o.call(e,t||"default");if("object"!=r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}function n(e,t,o){return(t=s(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,{A:()=>n})},4424:(e,t,o)=>{o.r(t),o.d(t,{getNextVisibleItemPosition:()=>n,getOpenPopup:()=>a,getPreviousVisibleItemPosition:()=>i,isElementVisible:()=>s,selectors:()=>r});var r={...o(486).selectors,globalFooter:".global-footer",mainNavItems:".feds-navItem > a, .feds-navItem > button, .feds-navItem > .feds-cta-wrapper > .feds-cta",brand:".feds-brand",mainNavToggle:".feds-toggle",searchTrigger:".feds-search-trigger",navWrapper:".feds-nav-wrapper",navWrapperExpanded:".feds-nav-wrapper--expanded",searchField:".feds-search-input",signIn:".feds-signIn",signInDropdown:".feds-signIn-dropdown",profileButton:".feds-profile-button, .feds-signIn",logo:".feds-logo",profileMenu:".feds-profile-menu",profile:".feds-profile",breadCrumbItems:".feds-breadcrumbs li > a",expandedPopupTrigger:'.feds-navLink[aria-expanded = "true"]',promoLink:".feds-promo-link",imagePromo:"a.feds-promo-image",fedsNav:".feds-nav",popup:".feds-popup",headline:".feds-menu-headline",section:".feds-menu-section",column:".feds-menu-column:not(.feds-menu-column--group)",cta:".feds-cta",openSearch:'.feds-search-trigger[aria-expanded = "true"]',regionPicker:".feds-regionPicker",socialLink:".feds-social-link",privacyLink:".feds-footer-privacyLink",menuContent:".feds-menu-content",mainMenuItems:"header.new-nav section.feds-navItem > button",mainMenuLinks:"header.new-nav .feds-navItem > a[href]",activePopup:"header.new-nav section.feds-dropdown--active > .feds-popup",tab:'button[role="tab"]',activeTabpanel:'.tab-content [role="tabpanel"]',activeLinks:'.tab-content [role="tabpanel"]:not([hidden="true"]) a',stickyCta:"header.new-nav .feds-popup .sticky-cta a",topBarLinks:"header.new-nav .feds-popup .top-bar a, header.new-nav .feds-popup .top-bar button",closeLink:"header.new-nav .feds-popup .top-bar .close-icon",localNav:".feds-localnav",localNavActive:".feds-localnav--active",localNavTitle:".feds-localnav-title",localNavExit:".feds-localnav-exit"};r.profileDropdown="\n  ".concat(r.signInDropdown," a[href],\n  ").concat(r.signInDropdown," button:not([disabled]),\n  ").concat(r.profileMenu," a[href],\n  ").concat(r.profileMenu," button:not([disabled])\n"),r.popupItems="\n  ".concat(r.navLink,",\n  ").concat(r.promoLink,",\n  ").concat(r.imagePromo,",\n  ").concat(r.cta,",\n  ").concat(r.regionPicker,",\n  ").concat(r.socialLink,",\n  ").concat(r.privacyLink,"\n");var s=e=>!!(e&&e instanceof HTMLElement&&e.offsetWidth&&e.offsetHeight&&"hidden"!==window.getComputedStyle(e).getPropertyValue("visibility")),n=(e,t)=>{for(let o=e+1;o<t.length;o+=1)if(s(t[o]))return o;return-1},i=(e,t)=>{for(let o=e-1;o>=0;o-=1)if(s(t[o]))return o;return-1},a=()=>{var e;return null===(e=document.querySelector(r.expandedPopupTrigger))||void 0===e?void 0:e.parentElement.querySelector(r.popup)}},1274:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(4705),s=o(4424),n=o(486),i=(o(7212),o(1900),o(9167),o(8348),o(6628),o(5769),class{constructor(e){let{mainNav:t}=e;(0,r.A)(this,"focusMainNav",(e=>{e||this.mainNav.focusCurr()})),(0,r.A)(this,"focusMainNavNext",(e=>{if(e)return;const{next:t}=this.mainNav.getState();if(t>=0)return this.mainNav.focusNext(),void this.mainNav.open();(0,n.closeAllDropdowns)(),this.mainNav.focusCurr()})),(0,r.A)(this,"handleKeyDown",(e=>{let{e:t,element:o,isFooter:r}=e;const{popupItems:i,prev:a,next:c,prevColumn:l,nextColumn:u}=function(){let{e:e,element:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!t)return{};const o=[...t.querySelectorAll(s.selectors.popupItems)],r=o.findIndex((t=>t===e.target)),n=document.activeElement.closest(s.selectors.column),i=[...t.querySelectorAll(s.selectors.column)],a=i.findIndex((e=>e.isEqualNode(n)));return{popupItems:o,curr:r,prev:(0,s.getPreviousVisibleItemPosition)(r,o),next:(0,s.getNextVisibleItemPosition)(r,o),prevColumn:i[a-1],nextColumn:i[a+1]}}({e:t,element:o}),d=r&&"Tab"===t.code&&t.shiftKey&&-1===a;if(!(r&&"Tab"===t.code&&!t.shiftKey&&-1===c)&&!d)switch(t.preventDefault(),t.stopPropagation(),t.code){case"Tab":if(t.shiftKey){if(-1===a){this.focusMainNav(r);break}i[a].focus()}else{if(-1===c){this.focusMainNavNext(r);break}i[c].focus()}break;case"Escape":(0,n.closeAllDropdowns)(),this.focusMainNav(r);break;case"ArrowLeft":{const e="rtl"!==document.dir&&!(null!==l&&void 0!==l&&l.querySelector(s.selectors.popupItems)),t="rtl"===document.dir&&!(null!==u&&void 0!==u&&u.querySelector(s.selectors.popupItems));if(e||t){this.focusMainNav(r);break}"rtl"!==document.dir?l.querySelector(s.selectors.popupItems).focus():u.querySelector(s.selectors.popupItems).focus();break}case"ArrowUp":if(-1===a){this.focusMainNav(r);break}i[a].focus();break;case"ArrowRight":{const e="rtl"!==document.dir&&!(null!==u&&void 0!==u&&u.querySelector(s.selectors.popupItems)),t="rtl"===document.dir&&!(null!==l&&void 0!==l&&l.querySelector(s.selectors.popupItems));if(e||t){this.focusMainNav(r);break}"rtl"!==document.dir?u.querySelector(s.selectors.popupItems).focus():l.querySelector(s.selectors.popupItems).focus();break}case"ArrowDown":if(-1===c){this.focusMainNavNext(r);break}i[c].focus()}})),(0,r.A)(this,"addEventListeners",(()=>{var e,t;null===(e=document.querySelector(s.selectors.globalNav))||void 0===e||e.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{const t=(0,s.getOpenPopup)();e.target.closest(s.selectors.popup)&&t&&this.desktop.matches&&this.handleKeyDown({e:e,element:t,isFooter:!1})}),"popup key failed ".concat(e.code),"errorType=error,module=gnav-keyboard"))),null===(t=document.querySelector(s.selectors.globalFooter))||void 0===t||t.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{if(!this.desktop.matches)return;const t=e.target.closest(s.selectors.globalFooter);this.handleKeyDown({e:e,element:t,isFooter:!0})}),"footer key failed ".concat(e.code),"errorType=error,module=gnav-keyboard")))})),this.mainNav=t,this.addEventListeners(),this.desktop=window.matchMedia("(min-width: 900px)")}open(){var e;let{focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=[...(null===(e=(0,s.getOpenPopup)())||void 0===e?void 0:e.querySelectorAll(s.selectors.popupItems))||[]];if(!o.length)return;const r=(0,s.getNextVisibleItemPosition)(-1,o),n=(0,s.getPreviousVisibleItemPosition)(o.length,o);"first"===t&&o[r].focus(),"last"===t&&o[n].focus()}}),a=()=>{const e=[...document.querySelectorAll("".concat(s.selectors.headline,'[aria-expanded="true"]'))];e.forEach((e=>e.setAttribute("aria-expanded","false"))),(0,n.setActiveDropdown)(e[0])},c=function(){let{headline:e,focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(a(),"true"===e.getAttribute("aria-haspopup")){e.setAttribute("aria-expanded","true"),(0,n.setActiveDropdown)(e);const o=[...(e.closest(s.selectors.section)||e.closest(s.selectors.column)).querySelectorAll(s.selectors.popupItems)].filter((e=>(0,s.isElementVisible)(e)));"first"===t&&o[0].focus(),"last"===t&&o[o.length-1].focus()}},l=function(){var e,t,o,r;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,s.getOpenPopup)();if(!n)return{popupItems:[]};const i=[...n.querySelectorAll(s.selectors.popupItems)],a=document.activeElement.closest(s.selectors.section)||document.activeElement.closest(s.selectors.column);let c=[...n.querySelectorAll(s.selectors.section)];c.length||(c=[...n.querySelectorAll(s.selectors.column)]);const l=c.filter((e=>(0,s.isElementVisible)(e))),u=l.findIndex((e=>e.isEqualNode(a)));return{visibleSections:l,currentSection:u,firstHeadline:null===(e=l[0])||void 0===e?void 0:e.querySelector(s.selectors.headline),lastHeadline:null===(t=l[l.length-1])||void 0===t?void 0:t.querySelector(s.selectors.headline),prevHeadline:null===(o=l[u-1])||void 0===o?void 0:o.querySelector(s.selectors.headline),nextHeadline:null===(r=l[u+1])||void 0===r?void 0:r.querySelector(s.selectors.headline),popupItems:i}},u=class{constructor(e){let{mainNav:t}=e;(0,r.A)(this,"mobileArrowUp",(e=>{var t;let{prev:o,curr:r,element:s,isFooter:n,newNav:i}=e;const u=l(s),{currentSection:d}=u,p=i&&!n?this.popupItems():u.popupItems;if(-1!==o&&r-1===o)return p[o].focus(),void(d!==l(s).currentSection&&a());const{prevHeadline:f}=l(s);f||i?i&&!n?null===p||void 0===p||null===(t=p[p.length-1])||void 0===t||t.focus():c({headline:f,focus:"last"}):this.focusMainNav(n)})),(0,r.A)(this,"mobileArrowDown",(e=>{var t;let{next:o,element:r,isFooter:s,newNav:n}=e;const i=l(r),{currentSection:u}=i,d=n&&!s?this.popupItems():i.popupItems;if(-1!==o)return d[o].focus(),void(u!==l(r).currentSection&&a());const{nextHeadline:p}=l(r);if(!p&&!n)return a(),void this.focusMainNavNext(s);n&&!s?null===d||void 0===d||null===(t=d[0])||void 0===t||t.focus():c({headline:p,focus:"first"})})),(0,r.A)(this,"focusMainNav",(e=>{e||this.mainNav.focusCurr()})),(0,r.A)(this,"focusMainNavNext",(e=>{e||(this.mainNav.focusNext(),this.mainNav.open())})),(0,r.A)(this,"popupItems",(()=>{const e=document.querySelector(s.selectors.activePopup);if(!e)return[];const t=[...e.querySelectorAll(s.selectors.tab)],o=t.find((e=>"true"===e.getAttribute("aria-selected"))),r=(0,n.takeWhile)(t,(e=>e!==o)),i=(0,n.dropWhile)(t,(e=>e!==o)).slice(1),a=[...e.querySelectorAll(s.selectors.activeLinks)],c=e.querySelector(s.selectors.stickyCta),l=e.querySelectorAll(s.selectors.topBarLinks),u=e.querySelectorAll(s.selectors.breadCrumbItems);return[...r,o,...a,c,...i,...l,...u].filter(Boolean)})),(0,r.A)(this,"handleKeyDown",(e=>{let{e:t,element:o,isFooter:r}=e;const i=!!document.querySelector("header.new-nav"),u=!!document.querySelector("header.local-nav"),d=i&&!r?this.popupItems():[...o.querySelectorAll(s.selectors.popupItems)],p=d.findIndex((e=>e===t.target)),f=(0,s.getPreviousVisibleItemPosition)(p,d),v=(0,s.getNextVisibleItemPosition)(p,d);switch(t.preventDefault(),t.stopPropagation(),t.code){case"Tab":t.shiftKey?this.mobileArrowUp({prev:f,curr:p,element:o,isFooter:r,newNav:i}):this.mobileArrowDown({curr:p,next:v,element:o,isFooter:r,newNav:i});break;case"Escape":if((0,n.closeAllDropdowns)(),this.focusMainNav(r),i&&u&&!r){const e=document.querySelector("header.new-nav .feds-toggle");null===e||void 0===e||e.click(),null===e||void 0===e||e.focus()}break;case"ArrowLeft":{if(i)break;const{prevHeadline:e,nextHeadline:t}=l(o),s="rtl"!==document.dir?e:t;if(!s){r||a(),"rtl"!==document.dir?this.focusMainNav(r):this.focusMainNavNext(r);break}c({headline:s,focus:"first"});break}case"ArrowUp":if(i)break;this.mobileArrowUp({prev:f,curr:p,element:o,isFooter:r});break;case"ArrowRight":{if(i)break;const{prevHeadline:e,nextHeadline:t}=l(o),s="rtl"!==document.dir?t:e;if(!s){r||a(),"rtl"!==document.dir?this.focusMainNavNext(r):this.focusMainNav(r);break}c({headline:s,focus:"first"});break}case"ArrowDown":if(i)break;this.mobileArrowDown({next:v,element:o,isFooter:r})}})),(0,r.A)(this,"addEventListeners",(()=>{var e,t;null===(e=document.querySelector(s.selectors.globalNav))||void 0===e||e.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{const t=(0,s.getOpenPopup)();e.target.closest(s.selectors.popup)&&t&&!this.desktop.matches&&this.handleKeyDown({e:e,element:t,popupEl:t,isFooter:!1})}),"popup key failed ".concat(e.code),"errorType=error,module=gnav-keyboard"))),null===(t=document.querySelector(s.selectors.globalFooter))||void 0===t||t.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{const t=e.target.closest(s.selectors.menuContent);if(!t||this.desktop.matches)return;const o=t.querySelector(s.selectors.popupItems),r=t.querySelector(s.selectors.headline),n=e.target===o,i=e.target===r;return e.shiftKey&&(n||i)?void 0:e.target.closest(s.selectors.headline)?(c({headline:e.target.closest(s.selectors.headline),focus:"first"}),e.preventDefault(),void e.stopPropagation()):void this.handleKeyDown({e:e,element:t,isFooter:!0})}),"footer key failed ".concat(e.code),"errorType=error,module=gnav-keyboard")))})),this.mainNav=t,this.addEventListeners(),this.desktop=window.matchMedia("(min-width: 900px)")}open(){let{focus:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{firstHeadline:t,lastHeadline:o,popupItems:r}=l();if(!r.length)return;const i="last"===e?o:t;i&&"true"===i.getAttribute("aria-haspopup")&&(a(),i.setAttribute("aria-expanded","true"));const c=(0,s.getNextVisibleItemPosition)(-1,r),u=(0,s.getPreviousVisibleItemPosition)(r.length,r);"first"===e&&r[c].focus(),"last"===e&&r[u].focus(),(0,n.setActiveDropdown)("first"===e?r[c]:r[u])}},d=class{constructor(){var e=this;(0,r.A)(this,"getState",(()=>{var e;const t=[...document.querySelectorAll(s.selectors.mainNavItems)],o=document.querySelector(s.selectors.expandedPopupTrigger),r=null===(e=document.activeElement.closest(s.selectors.navItem))||void 0===e?void 0:e.querySelector(s.selectors.mainNavItems),n=t.findIndex((e=>e===r));return{items:t,curr:n,prev:(0,s.getPreviousVisibleItemPosition)(n,t),next:(0,s.getNextVisibleItemPosition)(n,t),openTrigger:o}})),(0,r.A)(this,"focusCurr",(()=>{const{items:e,curr:t}=this.getState();e[t].focus()})),(0,r.A)(this,"focusPrev",(function(){let{focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{items:o,prev:r}=e.getState(),i=document.querySelector(s.selectors.expandedPopupTrigger);(0,n.closeAllDropdowns)(),-1!==r&&(o[r].focus(),i&&e.open({focus:t}))})),(0,r.A)(this,"focusNext",(()=>{const{items:e,next:t}=this.getState();-1!==t&&((0,n.closeAllDropdowns)(),e[t].focus())})),(0,r.A)(this,"open",(function(){let{focus:t,triggerEl:o,e:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{items:i,curr:a}=e.getState(),c=o||i[a];if(!c||!c.hasAttribute("aria-haspopup"))return;r&&r.preventDefault(),"false"===c.getAttribute("aria-expanded")&&(0,n.trigger)({element:c});const l=c.parentElement;if(l.querySelector(s.selectors.popup))return void(e.desktop.matches?e.popup.open({focus:t}):e.mobilePopup.open({focus:t}));const u=new MutationObserver((()=>{u.disconnect(),e.desktop.matches?e.popup.open({focus:t}):e.mobilePopup.open({focus:t})}));u.observe(l,{childList:!0})})),this.desktop=window.matchMedia("(min-width: 900px)"),this.popup=new i({mainNav:this}),this.mobilePopup=new u({mainNav:this}),this.addEventListeners()}addEventListeners(){document.querySelector(s.selectors.globalNav).addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{if(!e.target.closest(s.selectors.fedsNav)||e.target.closest(s.selectors.popup))return;const t=!!document.querySelector("header.new-nav");switch(e.code){case"Tab":if(t){var o;document.querySelector(s.selectors.activePopup)||e.preventDefault();const t=[...document.querySelectorAll("".concat(s.selectors.mainMenuItems,", ").concat(s.selectors.mainMenuLinks,", ").concat(s.selectors.mainNavToggle))],r=t.findIndex((t=>t===e.target));if(r>-1){const o=r<t.length-1?r+1:0,s=r>0?r-1:t.length-1;e.shiftKey?t[s].focus():t[o].focus()}else null===t||void 0===t||null===(o=t[0])||void 0===o||o.focus();break}if(e.shiftKey){const{prev:t,openTrigger:o}=this.getState();o&&(-1===t?(0,n.closeAllDropdowns)():(e.preventDefault(),this.focusPrev({focus:"last"})))}break;case"Escape":{(0,n.closeAllDropdowns)();const e=document.querySelector(s.selectors.activePopup);if(t&&!e){const e=document.querySelector("header.new-nav .feds-toggle");null===e||void 0===e||e.click(),null===e||void 0===e||e.focus()}break}case"ArrowLeft":{if(t)break;const{next:e,prev:o}=this.getState();if("rtl"!==document.dir){if(-1===o)break;this.focusPrev({focus:null})}else{if(-1===e)break;this.focusNext({focus:null})}break}case"ArrowUp":if(t)break;e.preventDefault(),e.stopPropagation(),this.focusPrev({focus:"last"});break;case"ArrowRight":{if(t)break;const{next:e,prev:o,openTrigger:r}=this.getState();if("rtl"!==document.dir){if(-1===e)break;this.focusNext()}else{if(-1===o)break;this.focusPrev({focus:null})}r&&this.open();break}case"ArrowDown":{if(t)break;e.stopPropagation(),e.preventDefault();const{items:o,curr:r}=this.getState();if(o[r]&&o[r].hasAttribute("aria-haspopup"))return void this.open({focus:"first"});this.focusNext();break}}}),"mainNav key failed ".concat(e.code),"errorType=error,module=gnav-keyboard")))}},p=e=>{let{e:t}=e;const o=document.querySelectorAll(s.selectors.profileDropdown);if(!o.length)return{next:-1,prev:-1,items:[]};const r=[...o],n=r.findIndex((e=>e===t.target));return{next:n+1,prev:n-1,curr:n,items:r}},f=()=>{var e;(0,n.closeAllDropdowns)(),null===(e=document.querySelector("".concat(s.selectors.profileButton,", ").concat(s.selectors.signIn)))||void 0===e||e.focus()},v=class{constructor(e){(0,r.A)(this,"loadLnavNavigation",(async()=>(this.localNav||(this.localNav=(async()=>{try{const{default:e}=await o.e(136).then(o.bind(o,136));return new e}catch(e){return(0,n.lanaLog)({message:"Keyboard Navigation failed to load for LNAV",e:e,tags:"errorType=info,module=gnav-keyboard"}),null}})()),this.localNav))),(0,r.A)(this,"addEventListeners",(()=>{[...document.querySelectorAll("".concat(s.selectors.globalNav,", ").concat(s.selectors.globalFooter))].forEach((e=>{e.addEventListener("keydown",(t=>(0,n.logErrorFor)((()=>{switch(t.code){case"Tab":{const e=!!document.querySelector("header.new-nav"),o=document.querySelector(s.selectors.navWrapper).classList.contains(s.selectors.navWrapperExpanded.slice(1));if(e&&o)t.target.classList.contains(s.selectors.mainNavToggle.slice(1))&&(t.preventDefault(),document.querySelector("".concat(s.selectors.mainMenuItems,", ").concat(s.selectors.mainMenuLinks)).focus());else{(e=>{let{e:t,isDesktop:o}=e;const r=[...document.querySelectorAll("\n      ".concat(s.selectors.brand,",\n      ").concat(s.selectors.mainNavToggle,",\n      ").concat(s.selectors.mainNavItems,",\n      ").concat(s.selectors.searchTrigger,",\n      ").concat(s.selectors.searchField,",\n      ").concat(s.selectors.signIn,",\n      ").concat(s.selectors.profileButton,",\n      ").concat(s.selectors.logo,"\n  "))],n=(0,s.getNextVisibleItemPosition)(-1,r),i=(0,s.getPreviousVisibleItemPosition)(r.length,r);o&&document.querySelector(s.selectors.openSearch)&&document.activeElement===r[t.shiftKey?n:i]&&(t.preventDefault(),r[t.shiftKey?i:n].focus())})({e:t,isDesktop:this.desktop.matches});const{items:e}=p({e:t}),o=t.target.closest("".concat(s.selectors.signIn,", ").concat(s.selectors.profileButton));t.shiftKey&&t.target===o&&f(),e[e.length-1]===t.target&&(t.preventDefault(),t.stopPropagation(),f())}break}case"Enter":case"Space":if(t.target.closest(s.selectors.searchField)||t.target.closest(".feds-client-search"))return;t.stopPropagation(),t.preventDefault(),t.target.click();break;case"ArrowDown":if(t.target.closest(s.selectors.profile)){if((e=>{let{e:t,el:o}=e;const r=t.target.closest("".concat(s.selectors.signIn,", ").concat(s.selectors.profileButton));var n;return"false"===(null===r||void 0===r?void 0:r.getAttribute("aria-expanded"))&&(t.target.click(),null===(n=o.querySelector(s.selectors.profileDropdown))||void 0===n||n.focus(),!0)})({e:t,el:e}))break;(e=>{let{e:t}=e;const{items:o,next:r}=p({e:t});o[r]?o[r].focus():(t.preventDefault(),t.stopPropagation(),f())})({e:t})}break;case"ArrowUp":t.target.closest(s.selectors.profile)&&(e=>{let{e:t}=e;const{items:o,prev:r}=p({e:t});o[r]?o[r].focus():(t.preventDefault(),t.stopPropagation(),f())})({e:t})}}),"KeyboardNavigation index failed. ".concat(t.code),"errorType=error,module=gnav-keyboard")))}))}));try{this.addEventListeners(),this.mainNav=new d,e&&this.loadLnavNavigation(),this.desktop=window.matchMedia("(min-width: 900px)")}catch(t){(0,n.lanaLog)({message:"Keyboard Navigation failed to load",e:t,tags:"errorType=error,module=gnav-keyboard"})}}}}}]);
//# sourceMappingURL=8893.66d40516.chunk.js.map