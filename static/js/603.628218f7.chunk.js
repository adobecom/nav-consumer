"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[603,2984],{2984:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n,i,l,s,o=a(7528),r=a(9338),c=(a(9644),a(4512)),d=(a(5922),a(2861)),h=(a(6850),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const a={adminconsole:"https://adminconsole.adobe.com",account:"https://account.adobe.com"};if(!e.length||!a[e])return"";let n;const{env:i}=(0,d.getConfig)();return null!==i&&void 0!==i&&i[e]?(n=new URL(a[e]),n.hostname=i[e]):n=a[e],"".concat(n).concat(t)}),p=(e,t)=>(0,r.toFragment)(n||(n=(0,o.A)(['<li><a class="feds-profile-action" href="','">',"</a></li>"])),h("adminconsole",t),e),u=class{constructor(){var e;let{rawElem:t,decoratedElem:a,avatar:n,sections:i,buttonElem:l,openOnInit:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.placeholders={},this.profileData={},this.avatar=n,this.buttonElem=l,this.decoratedElem=a,this.sections=i,this.openOnInit=s,this.localMenu=null===(e=t.querySelector("h5"))||void 0===e?void 0:e.parentElement,(0,r.logErrorFor)(this.init.bind(this),"ProfileDropdown.init()","gnav-profile","error")}async init(){await this.getData(),this.setButtonLabel(),this.dropdown=this.decorateDropdown(),this.addEventListeners(),this.openOnInit&&(0,r.trigger)({element:this.buttonElem}),this.decoratedElem.append(this.dropdown)}async getData(){[[this.placeholders.profileButton,this.placeholders.signOut,this.placeholders.viewAccount,this.placeholders.manageTeams,this.placeholders.manageEnterprise,this.placeholders.profileAvatar],{displayName:this.profileData.displayName,email:this.profileData.email}]=await Promise.all([(0,c.replaceKeyArray)(["profile-button","sign-out","view-account","manage-teams","manage-enterprise","profile-avatar"],(0,d.getFedsPlaceholderConfig)()),window.adobeIMS.getProfile()])}setButtonLabel(){this.buttonElem&&this.buttonElem.setAttribute("aria-label",this.profileData.displayName)}decorateDropdown(){var e,t;const{locale:a}=(0,d.getConfig)(),n=(e=>{if(!e.length)return"en";const t={"no-NO":"nb"};return t[e]?t[e]:e.split("-")[0]})(a.ietf);return this.avatarElem=(0,r.toFragment)(i||(i=(0,o.A)(['<img\n      data-cs-mask\n      class="feds-profile-img"\n      src="','"\n      tabindex="0"\n      alt="','"\n      data-url="','"></img>'])),this.avatar,this.placeholders.profileAvatar,h("account","profile?lang=".concat(n))),(0,r.toFragment)(l||(l=(0,o.A)(['\n      <div id="feds-profile-menu" class="feds-profile-menu">\n        <a\n          href="','"\n          class="feds-profile-header"\n          daa-ll="','"\n          aria-label="','"\n        >\n          ','\n          <div class="feds-profile-details">\n            <p data-cs-mask class="feds-profile-name">','</p>\n            <p data-cs-mask class="feds-profile-email">','</p>\n            <p class="feds-profile-account">',"</p>\n          </div>\n        </a>\n        ",'\n        <ul class="feds-profile-actions">\n          ',"\n          ","\n          ","\n        </ul>\n      </div>\n    "])),h("account","?lang=".concat(n)),this.placeholders.viewAccount,this.placeholders.viewAccount,this.avatarElem,this.profileData.displayName,this.decorateEmail(this.profileData.email),this.placeholders.viewAccount,this.localMenu?this.decorateLocalMenu():"",null!==(e=this.sections)&&void 0!==e&&null!==(e=e.manage)&&void 0!==e&&null!==(e=e.items)&&void 0!==e&&null!==(e=e.team)&&void 0!==e&&e.id?p(this.placeholders.manageTeams,"/team"):"",null!==(t=this.sections)&&void 0!==t&&null!==(t=t.manage)&&void 0!==t&&null!==(t=t.items)&&void 0!==t&&null!==(t=t.enterprise)&&void 0!==t&&t.id?p(this.placeholders.manageEnterprise):"",this.decorateSignOut())}decorateEmail(){const e=this.profileData.email.split("@"),t=e[0].length<=12?e[0]:"".concat(e[0].slice(0,12),"\u2026"),a=e[1].split("."),n=a.pop();let i=a.join(".");return i=i.length<=12?i:"".concat(i.slice(0,12),"\u2026"),"".concat(t,"@").concat(i,".").concat(n)}decorateLocalMenu(){return this.localMenu&&this.localMenu.classList.add("feds-local-menu"),this.localMenu}decorateSignOut(){const e=(0,r.toFragment)(s||(s=(0,o.A)(['\n      <li>\n        <a href="#" class="feds-profile-action" daa-ll="','">',"</a>\n      </li>\n    "])),this.placeholders.signOut,this.placeholders.signOut);return e.addEventListener("click",(e=>{e.preventDefault(),window.dispatchEvent(new Event("feds:signOut")),window.adobeIMS.signOut()})),e}addEventListeners(){this.buttonElem.addEventListener("click",(e=>(0,r.trigger)({element:this.buttonElem,event:e}))),this.buttonElem.addEventListener("keydown",(e=>"Escape"===e.code&&(0,r.closeAllDropdowns)())),this.dropdown.addEventListener("keydown",(e=>"Escape"===e.code&&(0,r.closeAllDropdowns)())),this.avatarElem.addEventListener("click",(e=>{var t;e.preventDefault(),window.location.assign(null===(t=this.avatarElem.dataset)||void 0===t?void 0:t.url)}))}}}}]);
//# sourceMappingURL=603.628218f7.chunk.js.map