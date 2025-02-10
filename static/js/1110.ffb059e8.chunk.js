"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[1110,42],{42:(e,t,s)=>{function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;if("function"!==typeof e)return;let s=null;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];clearTimeout(s),s=setTimeout((()=>e(...a)),t)}}s.r(t),s.d(t,{debounce:()=>r})},8729:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var r,a,i,n,l,c,o=s(7528),h=s(4705),u=s(5566),d=s(42),p=(s(3016),s(2301)),g=s(2773),f=(s(8199),s(2899)),m=(s(5769),{scope:"adobecom",apiKey:"adobedotcom2"}),v={hasResults:"has-results",inputIsPopulated:"feds-search-input--isPopulated"},{locale:L}=(0,f.getConfig)(),[,b="US"]=L.ietf.split("-"),y=class e{constructor(e){(0,h.A)(this,"onSearchInput",(0,d.debounce)((()=>{const e=this.getQuery();if(!e.length)return this.resultsList.replaceChildren(),void delete this.query;e!==this.query&&(this.query=e,this.getSuggestions().then((e=>{const t=null===e||void 0===e?void 0:e.suggested_completions;if(!Array.isArray(t)||!t.length)return this.resultsList.replaceChildren(this.getNoResultsTemplate()),void(this.parent instanceof HTMLElement&&this.parent.classList.remove(v.hasResults));this.resultsList.replaceChildren(this.getResultsTemplate(t)),this.parent instanceof HTMLElement&&this.parent.classList.add(v.hasResults)})).catch((()=>{this.resultsList.replaceChildren(this.getNoResultsTemplate()),this.parent instanceof HTMLElement&&this.parent.classList.remove(v.hasResults)})))}),150)),this.icon=e.icon,this.trigger=e.trigger,this.parent=this.trigger.closest(".feds-nav-wrapper");new MutationObserver((()=>{this.clearSearchForm()})).observe(this.trigger,{attributeFilter:["aria-expanded"]}),(0,u.logErrorFor)(this.init.bind(this),"Search init has failed","errorType=error,module=gnav-search")}async init(){await this.getLabels(),this.decorate(),this.addEventListeners(),this.toggleDropdown()}async getLabels(){this.labels={},[this.labels.search,this.labels.clearResults,this.labels.tryAdvancedSearch]=await(0,g.replaceKeyArray)(["search","clear-results","try-advanced-search"],(0,p.getFedsPlaceholderConfig)())}decorate(){this.input=(0,u.toFragment)(r||(r=(0,o.A)(['<input placeholder="','" aria-label="','" class="feds-search-input" autocomplete="off" aria-autocomplete="list" aria-controls="feds-search-results" daa-ll="search-results:standard search" />'])),this.labels.search,this.labels.search),this.resultsList=(0,u.toFragment)(a||(a=(0,o.A)(['<ul class="feds-search-results" id="feds-search-results" role="region" daa-ll="search-results:suggested-search:click"></ul>']))),this.clearButton=(0,u.toFragment)(i||(i=(0,o.A)(['<button tabindex="0" class="feds-search-clear" aria-label="','"></button>'])),this.labels.clearResults),this.searchBar=(0,u.toFragment)(n||(n=(0,o.A)(['\n      <aside class="feds-search-dropdown">\n        <div class="feds-search-bar">\n          <div class="feds-search-field">\n            ','\n            <div class="feds-search-icons">\n              ',"\n              ","\n            </div>\n          </div>\n          ","\n        </div>\n      </aside>"])),this.input,this.icon,this.clearButton,this.resultsList),this.trigger.after(this.searchBar)}clearSearchForm(){this.input.value="",this.onSearchInput()}addEventListeners(){this.trigger.addEventListener("click",(()=>{this.toggleDropdown()})),this.input.addEventListener("input",(()=>{this.onSearchInput()})),this.input.addEventListener("keydown",(t=>{if("Escape"===t.code&&(this.input.value.length?this.clearSearchForm():u.isDesktop.matches&&((0,u.closeAllDropdowns)(),this.trigger.focus())),"Enter"===t.code){if(!this.query)return;window.location.href=e.getHelpxLink(this.query)}})),this.resultsList.addEventListener("keydown",(e=>{"Escape"===e.code&&this.input.focus()})),this.clearButton.addEventListener("click",(()=>{this.clearSearchForm(),this.input.focus()})),u.isDesktop.addEventListener("change",(()=>{(0,u.closeAllDropdowns)()}))}getSuggestions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query;const{env:t}=(0,f.getConfig)(),s="https://".concat("prod"===t?"adobesearch":"adobesearch-stage",".adobe.io/autocomplete/completions?q[locale]=").concat(L.ietf,"&scope=").concat(m.scope,"&q[text]=").concat(encodeURIComponent(e));return fetch(s,{headers:{"x-api-key":m.apiKey}}).then((e=>e.json())).catch((()=>{}))}getQuery(){const e=this.input.value.trim();return e.length?(this.input.classList.add(v.inputIsPopulated),e):(this.input.classList.remove(v.inputIsPopulated),this.resultsList.replaceChildren(),this.parent instanceof HTMLElement&&this.parent.classList.remove(v.hasResults),"")}getResultsTemplate(t){const s=document.createDocumentFragment();return t.map((t=>{const r=t.name;if(!r.length)return;const a=(()=>{let e=0;const t=this.query.length;for(;e<t&&this.query[e].toLowerCase()===r[e].toLowerCase();)e+=1;return this.query.substring(0,e).trim()})(),i=new RegExp("(".concat(a,")"),"i");let n;const c=r.replace(i,(e=>(n=e,""))),h=(0,u.toFragment)(l||(l=(0,o.A)(['<li>\n          <a href="','" class="feds-search-result" aria-label="','">\n            <span>',"</span>","\n          </a>\n        </li>"])),e.getHelpxLink(r),r,n,c);s.appendChild(h)})),s}getNoResultsTemplate(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query;return(0,u.toFragment)(c||(c=(0,o.A)(['<li>\n      <a href="','" class="feds-search-result"><span>',"</span></a>\n    </li>"])),e.getHelpxLink(t),this.labels.tryAdvancedSearch)}focusInput(){u.isDesktop.matches&&this.input.focus()}toggleDropdown(){if(!u.isDesktop.matches)return;(0,u.trigger)({element:this.trigger})?((0,u.setCurtainState)(!0),this.focusInput()):this.clearSearchForm()}static getHelpxLink(e){return"https://helpx.adobe.com".concat(L.prefix,"/globalsearch.html?q=").concat(encodeURIComponent((e||"").trim()),"&start_index=0&country=").concat(b)}}}}]);
//# sourceMappingURL=1110.ffb059e8.chunk.js.map