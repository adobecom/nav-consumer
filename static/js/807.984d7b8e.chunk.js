"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[807],{807:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var r=o(4705),n=o(8453),s=(o(3203),o(3524),o(7405),o(4114),o(5769),{...n.selectors,globalFooter:".global-footer",mainNavItems:".feds-navItem > a, .feds-navItem > button, .feds-navItem > .feds-cta-wrapper > .feds-cta",brand:".feds-brand",mainNavToggle:".feds-toggle",searchTrigger:".feds-search-trigger",searchField:".feds-search-input",signIn:".feds-signIn",signInDropdown:".feds-signIn-dropdown",profileButton:".feds-profile-button, .feds-signIn",logo:".feds-logo",profileMenu:".feds-profile-menu",profile:".feds-profile",breadCrumbItems:".feds-breadcrumbs li > a",expandedPopupTrigger:'.feds-navLink[aria-expanded = "true"]',promoLink:".feds-promo-link",imagePromo:"a.feds-promo-image",fedsNav:".feds-nav",popup:".feds-popup",headline:".feds-menu-headline",section:".feds-menu-section",column:".feds-menu-column:not(.feds-menu-column--group)",cta:".feds-cta",openSearch:'.feds-search-trigger[aria-expanded = "true"]',regionPicker:".feds-regionPicker",socialLink:".feds-social-link",privacyLink:".feds-footer-privacyLink",menuContent:".feds-menu-content"});s.profileDropdown="\n  ".concat(s.signInDropdown," a[href],\n  ").concat(s.signInDropdown," button:not([disabled]),\n  ").concat(s.profileMenu," a[href],\n  ").concat(s.profileMenu," button:not([disabled])\n"),s.popupItems="\n  ".concat(s.navLink,",\n  ").concat(s.promoLink,",\n  ").concat(s.imagePromo,",\n  ").concat(s.cta,",\n  ").concat(s.regionPicker,",\n  ").concat(s.socialLink,",\n  ").concat(s.privacyLink,"\n");var i=e=>!!(e&&e instanceof HTMLElement&&e.offsetWidth&&e.offsetHeight&&"hidden"!==window.getComputedStyle(e).getPropertyValue("visibility")),a=(e,t)=>{for(let o=e+1;o<t.length;o+=1)if(i(t[o]))return o;return-1},c=(e,t)=>{for(let o=e-1;o>=0;o-=1)if(i(t[o]))return o;return-1},l=()=>{var e;return null===(e=document.querySelector(s.expandedPopupTrigger))||void 0===e?void 0:e.parentElement.querySelector(s.popup)},u=class{constructor(e){let{mainNav:t}=e;(0,r.A)(this,"focusMainNav",(e=>{e||this.mainNav.focusCurr()})),(0,r.A)(this,"focusMainNavNext",(e=>{if(e)return;const{next:t}=this.mainNav.getState();if(t>=0)return this.mainNav.focusNext(),void this.mainNav.open();(0,n.closeAllDropdowns)(),this.mainNav.focusCurr()})),(0,r.A)(this,"handleKeyDown",(e=>{let{e:t,element:o,isFooter:r}=e;const{popupItems:i,prev:l,next:u,prevColumn:d,nextColumn:p}=function(){let{e:e,element:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!t)return{};const o=[...t.querySelectorAll(s.popupItems)],r=o.findIndex((t=>t===e.target)),n=document.activeElement.closest(s.column),i=[...t.querySelectorAll(s.column)],l=i.findIndex((e=>e.isEqualNode(n)));return{popupItems:o,curr:r,prev:c(r,o),next:a(r,o),prevColumn:i[l-1],nextColumn:i[l+1]}}({e:t,element:o}),f=r&&"Tab"===t.code&&t.shiftKey&&-1===l;if(!(r&&"Tab"===t.code&&!t.shiftKey&&-1===u)&&!f)switch(t.preventDefault(),t.stopPropagation(),t.code){case"Tab":if(t.shiftKey){if(-1===l){this.focusMainNav(r);break}i[l].focus()}else{if(-1===u){this.focusMainNavNext(r);break}i[u].focus()}break;case"Escape":(0,n.closeAllDropdowns)(),this.focusMainNav(r);break;case"ArrowLeft":{const e="rtl"!==document.dir&&!(null!==d&&void 0!==d&&d.querySelector(s.popupItems)),t="rtl"===document.dir&&!(null!==p&&void 0!==p&&p.querySelector(s.popupItems));if(e||t){this.focusMainNav(r);break}"rtl"!==document.dir?d.querySelector(s.popupItems).focus():p.querySelector(s.popupItems).focus();break}case"ArrowUp":if(-1===l){this.focusMainNav(r);break}i[l].focus();break;case"ArrowRight":{const e="rtl"!==document.dir&&!(null!==p&&void 0!==p&&p.querySelector(s.popupItems)),t="rtl"===document.dir&&!(null!==d&&void 0!==d&&d.querySelector(s.popupItems));if(e||t){this.focusMainNav(r);break}"rtl"!==document.dir?p.querySelector(s.popupItems).focus():d.querySelector(s.popupItems).focus();break}case"ArrowDown":if(-1===u){this.focusMainNavNext(r);break}i[u].focus()}})),(0,r.A)(this,"addEventListeners",(()=>{var e,t;null===(e=document.querySelector(s.globalNav))||void 0===e||e.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{const t=l();e.target.closest(s.popup)&&t&&this.desktop.matches&&this.handleKeyDown({e:e,element:t,isFooter:!1})}),"popup key failed ".concat(e.code),"errorType=error,module=gnav-keyboard"))),null===(t=document.querySelector(s.globalFooter))||void 0===t||t.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{if(!this.desktop.matches)return;const t=e.target.closest(s.globalFooter);this.handleKeyDown({e:e,element:t,isFooter:!0})}),"footer key failed ".concat(e.code),"errorType=error,module=gnav-keyboard")))})),this.mainNav=t,this.addEventListeners(),this.desktop=window.matchMedia("(min-width: 900px)")}open(){var e;let{focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=[...(null===(e=l())||void 0===e?void 0:e.querySelectorAll(s.popupItems))||[]];if(!o.length)return;const r=a(-1,o),n=c(o.length,o);"first"===t&&o[r].focus(),"last"===t&&o[n].focus()}},d=()=>{const e=[...document.querySelectorAll("".concat(s.headline,'[aria-expanded="true"]'))];e.forEach((e=>e.setAttribute("aria-expanded","false"))),(0,n.setActiveDropdown)(e[0])},p=function(){let{headline:e,focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(d(),"true"===e.getAttribute("aria-haspopup")){e.setAttribute("aria-expanded","true"),(0,n.setActiveDropdown)(e);const o=[...(e.closest(s.section)||e.closest(s.column)).querySelectorAll(s.popupItems)].filter((e=>i(e)));"first"===t&&o[0].focus(),"last"===t&&o[o.length-1].focus()}},f=function(){var e,t,o,r;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l();if(!n)return{popupItems:[]};const a=[...n.querySelectorAll(s.popupItems)],c=document.activeElement.closest(s.section)||document.activeElement.closest(s.column);let u=[...n.querySelectorAll(s.section)];u.length||(u=[...n.querySelectorAll(s.column)]);const d=u.filter((e=>i(e))),p=d.findIndex((e=>e.isEqualNode(c)));return{visibleSections:d,currentSection:p,firstHeadline:null===(e=d[0])||void 0===e?void 0:e.querySelector(s.headline),lastHeadline:null===(t=d[d.length-1])||void 0===t?void 0:t.querySelector(s.headline),prevHeadline:null===(o=d[p-1])||void 0===o?void 0:o.querySelector(s.headline),nextHeadline:null===(r=d[p+1])||void 0===r?void 0:r.querySelector(s.headline),popupItems:a}},m=class{constructor(e){let{mainNav:t}=e;(0,r.A)(this,"mobileArrowUp",(e=>{let{prev:t,curr:o,element:r,isFooter:n}=e;if(-1!==t&&o-1===t){const{currentSection:e,popupItems:o}=f(r);return o[t].focus(),void(e!==f(r).currentSection&&d())}const{prevHeadline:s}=f(r);s?p({headline:s,focus:"last"}):this.focusMainNav(n)})),(0,r.A)(this,"mobileArrowDown",(e=>{let{next:t,element:o,isFooter:r}=e;if(-1!==t){const{currentSection:e,popupItems:r}=f(o);return r[t].focus(),void(e!==f(o).currentSection&&d())}const{nextHeadline:n}=f(o);if(!n)return d(),void this.focusMainNavNext(r);p({headline:n,focus:"first"})})),(0,r.A)(this,"focusMainNav",(e=>{e||this.mainNav.focusCurr()})),(0,r.A)(this,"focusMainNavNext",(e=>{e||(this.mainNav.focusNext(),this.mainNav.open())})),(0,r.A)(this,"handleKeyDown",(e=>{let{e:t,element:o,isFooter:r}=e;const i=[...o.querySelectorAll(s.popupItems)],l=i.findIndex((e=>e===t.target)),u=c(l,i),m=a(l,i);switch(t.preventDefault(),t.stopPropagation(),t.code){case"Tab":t.shiftKey?this.mobileArrowUp({prev:u,curr:l,element:o,isFooter:r}):this.mobileArrowDown({curr:l,next:m,element:o,isFooter:r});break;case"Escape":(0,n.closeAllDropdowns)(),this.focusMainNav(r);break;case"ArrowLeft":{const{prevHeadline:e,nextHeadline:t}=f(o),n="rtl"!==document.dir?e:t;if(!n){r||d(),"rtl"!==document.dir?this.focusMainNav(r):this.focusMainNavNext(r);break}p({headline:n,focus:"first"});break}case"ArrowUp":this.mobileArrowUp({prev:u,curr:l,element:o,isFooter:r});break;case"ArrowRight":{const{prevHeadline:e,nextHeadline:t}=f(o),n="rtl"!==document.dir?t:e;if(!n){r||d(),"rtl"!==document.dir?this.focusMainNavNext(r):this.focusMainNav(r);break}p({headline:n,focus:"first"});break}case"ArrowDown":this.mobileArrowDown({next:m,element:o,isFooter:r})}})),(0,r.A)(this,"addEventListeners",(()=>{var e,t;null===(e=document.querySelector(s.globalNav))||void 0===e||e.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{const t=l();e.target.closest(s.popup)&&t&&!this.desktop.matches&&this.handleKeyDown({e:e,element:t,popupEl:t,isFooter:!1})}),"popup key failed ".concat(e.code),"errorType=error,module=gnav-keyboard"))),null===(t=document.querySelector(s.globalFooter))||void 0===t||t.addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{const t=e.target.closest(s.menuContent);if(!t||this.desktop.matches)return;const o=t.querySelector(s.popupItems),r=t.querySelector(s.headline),n=e.target===o,i=e.target===r;return e.shiftKey&&(n||i)?void 0:e.target.closest(s.headline)?(p({headline:e.target.closest(s.headline),focus:"first"}),e.preventDefault(),void e.stopPropagation()):void this.handleKeyDown({e:e,element:t,isFooter:!0})}),"footer key failed ".concat(e.code),"errorType=error,module=gnav-keyboard")))})),this.mainNav=t,this.addEventListeners(),this.desktop=window.matchMedia("(min-width: 900px)")}open(){let{focus:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{firstHeadline:t,lastHeadline:o,popupItems:r}=f();if(!r.length)return;const s="last"===e?o:t;s&&"true"===s.getAttribute("aria-haspopup")&&(d(),s.setAttribute("aria-expanded","true"));const i=a(-1,r),l=c(r.length,r);"first"===e&&r[i].focus(),"last"===e&&r[l].focus(),(0,n.setActiveDropdown)("first"===e?r[i]:r[l])}},h=class{constructor(){var e=this;(0,r.A)(this,"getState",(()=>{var e;const t=[...document.querySelectorAll(s.mainNavItems)],o=document.querySelector(s.expandedPopupTrigger),r=null===(e=document.activeElement.closest(s.navItem))||void 0===e?void 0:e.querySelector(s.mainNavItems),n=t.findIndex((e=>e===r));return{items:t,curr:n,prev:c(n,t),next:a(n,t),openTrigger:o}})),(0,r.A)(this,"focusCurr",(()=>{const{items:e,curr:t}=this.getState();e[t].focus()})),(0,r.A)(this,"focusPrev",(function(){let{focus:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{items:o,prev:r}=e.getState(),i=document.querySelector(s.expandedPopupTrigger);(0,n.closeAllDropdowns)(),-1!==r&&(o[r].focus(),i&&e.open({focus:t}))})),(0,r.A)(this,"focusNext",(()=>{const{items:e,next:t}=this.getState();-1!==t&&((0,n.closeAllDropdowns)(),e[t].focus())})),(0,r.A)(this,"open",(function(){let{focus:t,triggerEl:o,e:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{items:i,curr:a}=e.getState(),c=o||i[a];if(!c||!c.hasAttribute("aria-haspopup"))return;r&&r.preventDefault(),"false"===c.getAttribute("aria-expanded")&&(0,n.trigger)({element:c});const l=c.parentElement;if(l.querySelector(s.popup))return void(e.desktop.matches?e.popup.open({focus:t}):e.mobilePopup.open({focus:t}));const u=new MutationObserver((()=>{u.disconnect(),e.desktop.matches?e.popup.open({focus:t}):e.mobilePopup.open({focus:t})}));u.observe(l,{childList:!0})})),this.desktop=window.matchMedia("(min-width: 900px)"),this.popup=new u({mainNav:this}),this.mobilePopup=new m({mainNav:this}),this.addEventListeners()}addEventListeners(){document.querySelector(s.globalNav).addEventListener("keydown",(e=>(0,n.logErrorFor)((()=>{if(e.target.closest(s.fedsNav)&&!e.target.closest(s.popup))switch(e.code){case"Tab":if(e.shiftKey){const{prev:t,openTrigger:o}=this.getState();o&&(-1===t?(0,n.closeAllDropdowns)():(e.preventDefault(),this.focusPrev({focus:"last"})))}break;case"Escape":(0,n.closeAllDropdowns)();break;case"ArrowLeft":{const{next:e,prev:t}=this.getState();if("rtl"!==document.dir){if(-1===t)break;this.focusPrev({focus:null})}else{if(-1===e)break;this.focusNext({focus:null})}break}case"ArrowUp":e.preventDefault(),e.stopPropagation(),this.focusPrev({focus:"last"});break;case"ArrowRight":{const{next:e,prev:t,openTrigger:o}=this.getState();if("rtl"!==document.dir){if(-1===e)break;this.focusNext()}else{if(-1===t)break;this.focusPrev({focus:null})}o&&this.open();break}case"ArrowDown":{e.stopPropagation(),e.preventDefault();const{items:t,curr:o}=this.getState();if(t[o]&&t[o].hasAttribute("aria-haspopup"))return void this.open({focus:"first"});this.focusNext();break}}}),"mainNav key failed ".concat(e.code),"errorType=error,module=gnav-keyboard")))}},v=e=>{let{e:t}=e;const o=document.querySelectorAll(s.profileDropdown);if(!o.length)return{next:-1,prev:-1,items:[]};const r=[...o],n=r.findIndex((e=>e===t.target));return{next:n+1,prev:n-1,curr:n,items:r}},g=()=>{var e;(0,n.closeAllDropdowns)(),null===(e=document.querySelector("".concat(s.profileButton,", ").concat(s.signIn)))||void 0===e||e.focus()},b=class{constructor(){(0,r.A)(this,"addEventListeners",(()=>{[...document.querySelectorAll("".concat(s.globalNav,", ").concat(s.globalFooter))].forEach((e=>{e.addEventListener("keydown",(t=>(0,n.logErrorFor)((()=>{switch(t.code){case"Tab":{(e=>{let{e:t,isDesktop:o}=e;const r=[...document.querySelectorAll("\n      ".concat(s.brand,",\n      ").concat(s.mainNavToggle,",\n      ").concat(s.mainNavItems,",\n      ").concat(s.searchTrigger,",\n      ").concat(s.searchField,",\n      ").concat(s.signIn,",\n      ").concat(s.profileButton,",\n      ").concat(s.logo,"\n  "))],n=a(-1,r),i=c(r.length,r);o&&document.querySelector(s.openSearch)&&document.activeElement===r[t.shiftKey?n:i]&&(t.preventDefault(),r[t.shiftKey?i:n].focus())})({e:t,isDesktop:this.desktop.matches});const{items:e}=v({e:t}),o=t.target.closest("".concat(s.signIn,", ").concat(s.profileButton));t.shiftKey&&t.target===o&&g(),e[e.length-1]===t.target&&(t.preventDefault(),t.stopPropagation(),g());break}case"Enter":case"Space":if(t.target.closest(s.searchField)||t.target.closest(".feds-client-search"))return;t.stopPropagation(),t.preventDefault(),t.target.click();break;case"ArrowDown":if(t.target.closest(s.profile)){if((e=>{let{e:t,el:o}=e;const r=t.target.closest("".concat(s.signIn,", ").concat(s.profileButton));var n;return"false"===(null===r||void 0===r?void 0:r.getAttribute("aria-expanded"))&&(t.target.click(),null===(n=o.querySelector(s.profileDropdown))||void 0===n||n.focus(),!0)})({e:t,el:e}))break;(e=>{let{e:t}=e;const{items:o,next:r}=v({e:t});o[r]?o[r].focus():(t.preventDefault(),t.stopPropagation(),g())})({e:t})}break;case"ArrowUp":t.target.closest(s.profile)&&(e=>{let{e:t}=e;const{items:o,prev:r}=v({e:t});o[r]?o[r].focus():(t.preventDefault(),t.stopPropagation(),g())})({e:t})}}),"KeyboardNavigation index failed. ".concat(t.code),"errorType=error,module=gnav-keyboard")))}))}));try{this.addEventListeners(),this.mainNav=new h,this.desktop=window.matchMedia("(min-width: 900px)")}catch(e){(0,n.lanaLog)({message:"Keyboard Navigation failed to load",e:e,tags:"errorType=error,module=gnav-keyboard"})}}}}}]);
//# sourceMappingURL=807.984d7b8e.chunk.js.map