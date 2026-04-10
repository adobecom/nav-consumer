import{logErrorFor as p,trigger as r,toFragment as o,closeAllDropdowns as d}from"./utilities-TIE6AT4V-ZCdrCqdx.js";import{replaceKeyArray as m}from"./placeholders-X26VVFJI-DOnNR-HC.js";import"./personalization-LRPWXI42-Dkp6eZ4o.js";import{d as u,g as h}from"./utils-EOEXLB4S-DacHn_aW.js";import"./helpers-6ZAOOXAH-BETqqH4u.js";var f=e=>{if(!e.length)return"en";const t={"no-NO":"nb"};return t[e]?t[e]:e.split("-")[0]},n=(e,t="")=>{const s={adminconsole:"https://adminconsole.adobe.com",account:"https://account.adobe.com"};if(!e.length||!s[e])return"";let a;const{env:l}=h();return l?.[e]?(a=new URL(s[e]),a.hostname=l[e]):a=s[e],`${a}${t}`},c=(e,t)=>o`<li><a class="feds-profile-action" href="${n("adminconsole",t)}">${e}</a></li>`,g=class{constructor({rawElem:e,decoratedElem:t,avatar:s,sections:a,buttonElem:l,openOnInit:i}={}){this.placeholders={},this.profileData={},this.avatar=s,this.buttonElem=l,this.decoratedElem=t,this.sections=a,this.openOnInit=i,this.localMenu=e.querySelector("h5")?.parentElement,p(this.init.bind(this),"ProfileDropdown.init()","gnav-profile","e")}async init(){await this.getData(),this.setButtonLabel(),this.dropdown=this.decorateDropdown(),this.addEventListeners(),this.openOnInit&&r({element:this.buttonElem}),this.decoratedElem.append(this.dropdown)}async getData(){[[this.placeholders.profileButton,this.placeholders.signOut,this.placeholders.viewAccount,this.placeholders.manageTeams,this.placeholders.manageEnterprise,this.placeholders.profileAvatar],{displayName:this.profileData.displayName,email:this.profileData.email}]=await Promise.all([m(["profile-button","sign-out","view-account","manage-teams","manage-enterprise","profile-avatar"],u()),window.adobeIMS.getProfile()])}setButtonLabel(){this.buttonElem&&this.buttonElem.setAttribute("aria-label",this.profileData.displayName)}decorateDropdown(){const{locale:e}=h(),t=f(e.ietf);return this.avatarElem=o`<img
      data-cs-mask
      class="feds-profile-img"
      src="${this.avatar}"
      tabindex="0"
      alt="${this.placeholders.profileAvatar}"
      data-url="${n("account",`profile?lang=${t}`)}"></img>`,o`
      <div id="feds-profile-menu" class="feds-profile-menu">
        <a
          href="${n("account",`?lang=${t}`)}"
          class="feds-profile-header"
          daa-ll="${this.placeholders.viewAccount}"
          aria-label="${this.placeholders.viewAccount}"
        >
          ${this.avatarElem}
          <div class="feds-profile-details">
            <p data-cs-mask class="feds-profile-name">${this.profileData.displayName}</p>
            <p data-cs-mask class="feds-profile-email">${this.decorateEmail(this.profileData.email)}</p>
            <p class="feds-profile-account">${this.placeholders.viewAccount}</p>
          </div>
        </a>
        ${this.localMenu?this.decorateLocalMenu():""}
        <ul class="feds-profile-actions">
          ${this.sections?.manage?.items?.team?.id?c(this.placeholders.manageTeams,"/team"):""}
          ${this.sections?.manage?.items?.enterprise?.id?c(this.placeholders.manageEnterprise):""}
          ${this.decorateSignOut()}
        </ul>
      </div>
    `}decorateEmail(){const t=this.profileData.email.split("@"),s=t[0].length<=12?t[0]:`${t[0].slice(0,12)}…`,a=t[1].split("."),l=a.pop();let i=a.join(".");return i=i.length<=12?i:`${i.slice(0,12)}…`,`${s}@${i}.${l}`}decorateLocalMenu(){return this.localMenu&&this.localMenu.classList.add("feds-local-menu"),this.localMenu}decorateSignOut(){const e=o`
      <li>
        <a href="#" class="feds-profile-action" daa-ll="${this.placeholders.signOut}">${this.placeholders.signOut}</a>
      </li>
    `;return e.addEventListener("click",t=>{t.preventDefault(),window.dispatchEvent(new Event("feds:signOut")),window.adobeIMS.signOut()}),e}addEventListeners(){this.buttonElem.addEventListener("click",e=>r({element:this.buttonElem,event:e})),this.buttonElem.addEventListener("keydown",e=>e.code==="Escape"&&d()),this.dropdown.addEventListener("keydown",e=>e.code==="Escape"&&d()),this.avatarElem.addEventListener("click",e=>{e.preventDefault(),window.location.assign(this.avatarElem.dataset?.url)})}},D=g;export{D as default};
