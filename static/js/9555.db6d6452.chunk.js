"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[9555,9818,1936],{9818:(t,e,n)=>{n.r(e),n.d(e,{getCustomConfig:()=>i,getImsToken:()=>o});var a={},o=async t=>{var e;return window.adobeid={client_id:"milo_ims",environment:"prod",scope:"AdobeID,openid"},window.adobeIMS||await t("https://auth.services.adobe.com/imslib/imslib.min.js"),null===(e=window.adobeIMS)||void 0===e||null===(e=e.getAccessToken())||void 0===e?void 0:e.token},i=async t=>{if(void 0!==a[t])return a[t];let e=null;const n=await fetch(t);return n.ok&&(e=await n.json()),a[t]=e,a[t]}},1936:(t,e,n)=>{n.r(e),n.d(e,{loadTingleModalFiles:()=>R,sendToCaaS:()=>K,showAlert:()=>A,showConfirm:()=>q});var a=n(9818),o=n(6628),i=(n(5769),"0123456789abcdef".split("")),r=t=>{const e=t>>4,n=t-(e<<4);return i[e]+i[n]},c=t=>[...t].map((t=>r(t))).join(""),l=async t=>{const e=await(async t=>{const e=(new TextEncoder).encode(t);return await crypto.subtle.digest("SHA-1",e)})(t);return(t=>[c(t.slice(0,4)),"-",c(t.slice(4,6)),"-",r(15&t[6]|parseInt(50,16)),r(t[7]),"-",r(63&t[8]|128),r(t[9]),"-",c(t.slice(10,16))].join(""))(new Uint8Array(e))},s={ar:{ietf:"es-AR"},br:{ietf:"pt-BR"},ca:{ietf:"en-CA"},ca_fr:{ietf:"fr-CA"},cl:{ietf:"es-CL"},co:{ietf:"es-CO"},cr:{ietf:"es-CR"},ec:{ietf:"es-EC"},el:{ietf:"es-EL"},gt:{ietf:"es-GT"},la:{ietf:"es-LA"},mx:{ietf:"es-MX"},pe:{ietf:"es-PE"},pr:{ietf:"es-PR"},"":{ietf:"en-US"},langstore:{ietf:"en-US"},africa:{ietf:"en-africa"},be_fr:{ietf:"fr-BE"},be_en:{ietf:"en-BE"},be_nl:{ietf:"nl-BE"},cy_en:{ietf:"en-CY"},dk:{ietf:"da-DK"},de:{ietf:"de-DE"},ee:{ietf:"et-EE"},eg_ar:{ietf:"ar-EG"},eg_en:{ietf:"en-GB"},es:{ietf:"es-ES"},fr:{ietf:"fr-FR"},gr_en:{ietf:"en-GR"},gr_el:{ietf:"el-GR"},ie:{ietf:"en-IE"},il_en:{ietf:"en-IL"},il_he:{ietf:"he-il"},it:{ietf:"it-IT"},kw_ar:{ietf:"ar-KW"},kw_en:{ietf:"en-GB"},lv:{ietf:"lv-LV"},lt:{ietf:"lt-LT"},lu_de:{ietf:"de-LU"},lu_en:{ietf:"en-LU"},lu_fr:{ietf:"fr-LU"},hu:{ietf:"hu-HU"},mt:{ietf:"en-MT"},mena_en:{ietf:"en-mena"},mena_ar:{ietf:"ar-mena"},ng:{ietf:"en-NG"},nl:{ietf:"nl-NL"},no:{ietf:"no-NO"},pl:{ietf:"pl-PL"},pt:{ietf:"pt-PT"},qa_ar:{ietf:"ar-QA"},qa_en:{ietf:"en-GB"},ro:{ietf:"ro-RO"},sa_en:{ietf:"en-sa"},ch_fr:{ietf:"fr-CH"},ch_de:{ietf:"de-CH"},ch_it:{ietf:"it-CH"},si:{ietf:"sl-SI"},sk:{ietf:"sk-SK"},fi:{ietf:"fi-FI"},se:{ietf:"sv-SE"},tr:{ietf:"tr-TR"},ae_en:{ietf:"en-ae"},uk:{ietf:"en-GB"},at:{ietf:"de-AT"},cz:{ietf:"cs-CZ"},bg:{ietf:"bg-BG"},ru:{ietf:"ru-RU"},ua:{ietf:"uk-UA"},ae_ar:{ietf:"ar-ae"},sa_ar:{ietf:"ar-sa"},za:{ietf:"en-ZA"},au:{ietf:"en-AU"},hk_en:{ietf:"en-HK"},in:{ietf:"en-in"},id_id:{ietf:"id-id"},id_en:{ietf:"en-id"},my_ms:{ietf:"ms-my"},my_en:{ietf:"en-my"},nz:{ietf:"en-nz"},ph_en:{ietf:"en-ph"},ph_fil:{ietf:"fil-PH"},sg:{ietf:"en-SG"},th_en:{ietf:"en-th"},in_hi:{ietf:"hi-in"},th_th:{ietf:"th-th"},cn:{ietf:"zh-CN"},hk_zh:{ietf:"zh-HK"},tw:{ietf:"zh-TW"},jp:{ietf:"ja-JP"},kr:{ietf:"ko-KR"},vn_en:{ietf:"en-vn"},vn_vi:{ietf:"vi-VN"}},d=(0,o.getConfig)(),u=(Object.keys(d.locales||{}),/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),f=/fragments(.*)#[a-zA-Z0-9_-]+$/,p=/(\s*\S+\s*:\s*\S+\s*)/,g=t=>f.test(t),[h,v]=(()=>{let t={isInjectedDoc:()=>(void 0).doc!==document,doc:document};return[e=>(t={...t,...e},t),()=>t]})(),m=t=>{if(t.startsWith("http"))return t;const{host:e}=v();return"https://".concat(e).concat(t.startsWith("/")?"":"/").concat(t)},w=(t,e)=>{const n=v().doc.querySelector("meta[".concat(t,"='").concat(e,"']"));if(n)return n.content},b=(t,e)=>{if(void 0===t||g(t))return t;const n=t.includes("href=")?(t=>{const e=document.createElement("div");return e.innerHTML=t,e.querySelector("a").getAttribute("href")})(t):t;return g(n)?n:(a=n,u.test(a)?(t=>null!==t&&void 0!==t&&t.startsWith("https://")||null!==t&&void 0!==t&&t.startsWith("http://")?t:"https://".concat(t))(n):{error:e});var a},y=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const a=[];let o=Object.values(t).find((t=>{if(n.includes(t.title)||n.includes(t.name)||n.includes(t.path)||n.includes(t.tagID))return!1;t.tags&&Object.keys(t.tags).length&&a.push(t.tags);return!![t.title.toLowerCase(),t.name,t.path,t.path.replace("/content/cq:tags/",""),t.tagID.toLowerCase()].includes(e.toLowerCase())}));return o||a.some((t=>(o=y(t,e,n),o))),o},[C,k]=(()=>{let t;return[()=>t,async()=>{try{const e=await fetch("https://www.adobe.com/chimera-api/tags");if(e.ok){const n=await e.json();return void(t=n.namespaces.caas.tags)}}catch(a){}const{default:e}=await n.e(633).then(n.bind(n,633));t=e.namespaces.caas.tags}]})(),S=(t,e)=>{if(!t)return;const n=C(),a=y(n,t,["Events"])||y(n.events.tags,t,[]);return a||e.push(t),a},T=(t,e)=>{if(t)try{const n=new Date(t);return n.getFullYear()<2e3?{error:"".concat(e," - Date is before the year 2000")}:n.toISOString()}catch(n){return{error:e}}},I=(t,e)=>t&&e&&"default"!==e?t.slice(0,t.lastIndexOf("-".concat(e))):t,E=t=>{const e=v().doc.querySelector(".card-metadata");if(!e)return null;let n="";return[...e.children].some((e=>{var a;if((null===(a=e.firstElementChild.textContent)||void 0===a?void 0:a.trim().toLowerCase())!==t)return!1;const o=e.lastElementChild.querySelector("img");if(o){var i;let t=o.src;if(v().bulkPublish){const e=o.attributes.src.value;if(e.startsWith("./")){const n=(t=>"".concat(t.split("/").slice(0,-1).join("/"),"/"))(v().pageUrl);t="".concat(n).concat(e)}else t=e.startsWith("/")?"".concat(new URL(v.pageUrl.origin)).concat(e):e}n=null===(i=new URL(t))||void 0===i?void 0:i.pathname}else{var r;n=null===(r=e.lastElementChild.textContent)||void 0===r?void 0:r.trim()}return!0})),n},_=()=>{var t,e;const{doc:n}=v(),a=E("image")||E("cardimage")||E("cardimagepath")||(null===(t=n.querySelector("main"))||void 0===t||null===(t=t.querySelector("img"))||void 0===t?void 0:t.src.replace(/\?.*/,""))||(null===(e=n.querySelector('meta[property="og:image"]'))||void 0===e?void 0:e.content);return a?m(a):null},x=t=>{const e=[];return t.badgeimage&&e.push({type:"image",value:m(t.badgeimage)}),t.badgetext&&e.push({type:"text",value:t.badgetext}),e},L=async t=>{const e=window.location.pathname.includes("/tools/send-to-caas/bulkpublisher")?await(async t=>{let{getLocale:e}=v();if(!e){const{getLocale:t}=await n.e(1094).then(n.bind(n,1094));e=t,h({getLocale:e})}return e(s,t.prodUrl).ietf})(t):(s[window.location.pathname.split("/")[1]]||s[""]).ietf,a=(null===e||void 0===e?void 0:e.toLowerCase().split("-"))||[],[o="en",i="us"]=a;return{country:i,lang:o}},M=()=>{const t={},e=v().doc.querySelector(".caas-marquee-metadata"),n=v().doc.querySelector(".card-metadata")||e,a=["description"];return n&&n.childNodes.forEach((n=>{var o,i;const r=null===(o=n.children)||void 0===o||null===(o=o[0])||void 0===o||null===(o=o.textContent)||void 0===o?void 0:o.toLowerCase();let c=null===(i=n.children)||void 0===i||null===(i=i[1])||void 0===i?void 0:i.textContent;var l;e&&a.includes(r)&&(c=null===(l=n.children)||void 0===l||null===(l=l[1])||void 0===l?void 0:l.innerHTML);r&&(t[r]=c)})),t};function B(t,e,n){if(""===(null===t||void 0===t?void 0:t.trim()))return"";const a=t||e.prodUrl||window.location.origin+window.location.pathname;return b(a,"Invalid Cta".concat(n,"Url: ").concat(a))}var U={arbitrary:t=>(t=>t?t.split(",").filter((t=>t.length)).filter((t=>p.test(t))).map((t=>{const[e,...n]=t.split(":");return{[e.trim()]:n.join(":").trim()}})):[])(t).map((t=>t)),badgeimage:()=>E("badgeimage"),badgetext:0,bookmarkaction:0,bookmarkenabled:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(t){const e=t.toLowerCase();if("true"===e||"on"===e||"yes"===e)return!0}},bookmarkicon:0,carddescription:0,cardtitle:0,cardimage:()=>_(),cardimagealttext:t=>t||(()=>{if(M().cardimage)return"";const t=_(),e=new URL(t).pathname.split("/").pop(),n=v().doc.querySelector('img[src*="'.concat(e,'"]'));return null===n||void 0===n?void 0:n.alt})(),contentid:(t,e)=>l(e.prodUrl),contenttype:t=>t||w("property","og:type")||v().contentType,country:async(t,e)=>{if(t)return t;const{country:n}=await L(e);return n},created:t=>{var e;if(t)return T(t,"Invalid Created Date: ".concat(t));const n=null===(e=M())||void 0===e?void 0:e.carddate;if(n)return T(n,"Invalid Date: ".concat(n));const a=w("name","publishdate")||w("name","publication-date"),{doc:o,lastModified:i}=v();return a?T(a,"publication-date metadata is not a valid date: ".concat(a)):T(i||o.lastModified,"document.lastModified is not a valid date: ".concat(o.lastModified))},cta1icon:t=>b(t,"Invalid Cta1Icon url: ".concat(t)),cta1style:0,cta1target:0,cta1text:0,cta1url:(t,e)=>B(t,e,1),cta2icon:t=>b(t,"Invalid Cta2Icon url: ".concat(t)),cta2style:0,cta2target:0,cta2text:0,cta2url:t=>B(t,{},2),description:t=>t||w("name","description")||"",details:0,entityid:(t,e)=>{const n=e.floodgatecolor||(0,o.getMetadata)("floodgatecolor")||"",a="default"===n||""===n?"":n;return l("".concat(e.prodUrl).concat(a))},env:t=>t||"",eventduration:0,eventend:t=>T(t,"Invalid Event End Date: ".concat(t)),eventstart:t=>T(t,"Invalid Event Start Date: ".concat(t)),floodgatecolor:(t,e)=>t||e.floodgatecolor||(0,o.getMetadata)("floodgatecolor")||"default",lang:async(t,e)=>{if(t)return t;const{lang:n}=await L(e);return n},modified:t=>{const{doc:e,lastModified:n}=v();return t?T(t,"Invalid Modified Date: ".concat(t)):T(n||e.lastModified,"document.lastModified is not a valid date: ".concat(e.lastModified))},origin:(t,e)=>{if(t)return t;return(t=>{const{project:e,repo:n}=v(),a=e||I(n,t),o={cc:"hawks",dc:"doccloud"}[a.toLowerCase()]||a;if(o)return o;if(window.location.hostname.endsWith(".page")){const[,e]=window.location.hostname.split(".")[0].split("--");return I(e,t)}throw new Error("No Project or Repo defined in config")})(e.floodgatecolor||(0,o.getMetadata)("floodgatecolor"))},playurl:t=>b(t,"Invalid PlayURL: ".concat(t)),primarytag:t=>{const e=S(t);return e?{id:e.tagID}:{}},style:t=>t||"default",tags:t=>(t=>{let e=[];t&&(e=t.toLowerCase().split(/,|(\s+)|(\\n)|;/g).filter((t=>t&&t.trim()&&"\n"!==t)));const n=[],a=e.map((t=>S(t,n))).filter((t=>void 0!==t)).map((t=>t.tagID)),o=[...new Set(a)].map((t=>({id:t})));return{tagErrors:n,tags:o}})(t),title:t=>t||w("property","og:title")||"",uci:(t,e)=>t||e.prodUrl||window.location.pathname,url:(t,e)=>{const n=t||e.prodUrl||window.location.origin+window.location.pathname;return b(n,"Invalid URL: ".concat(n))}},j=async t=>(async(t,e)=>{const n={},a=[];let o=[],i=[];for(const[r,c]of Object.entries(U)){const l=c?await c(t[r],e):t[r];null!==l&&void 0!==l&&l.error?a.push(l.error):void 0!==(null===l||void 0===l?void 0:l.tagErrors)?(o=l.tagErrors,n[r]=l.tags,i=l.tags.map((t=>t.id))):void 0!==l&&(n[r]=l)}return!n.contenttype&&i.length&&(n.contenttype=i.find((t=>t.startsWith("caas:content-type")))),{caasMetadata:n,errors:a,tags:i,tagErrors:o}})(M(),t),[P,O,D]=(()=>{let t=!1;return[()=>{t=!0},()=>{t=!1},()=>t]})(),R=async(t,e)=>{var n;null!==(n=window.tingle)&&void 0!==n&&n.modal||await Promise.all([t("https://milo.adobe.com/libs/deps/tingle.js"),e("https://milo.adobe.com/libs/deps/tingle.css")])},A=function(t){let{error:e=!1,onClose:n,showBtn:a=!0,btnText:o="OK"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=new tingle.modal({footer:!0,closeMethods:["overlay","escape"],onClose(){n&&n(),this.destroy()}});let r=t;return e&&(r='<div class="modal-error"><div class="modal-alert"></div><div>'.concat(t,"</div></div>")),i.setContent(r),a&&i.addFooterBtn(o,"tingle-btn tingle-btn--primary tingle-btn--pull-right",(()=>i.close())),i.open(),i},q=function(t){let{onClose:e,cssClass:n=[],ctaBtnType:a="primary",ctaText:o="OK",cancelBtnType:i="default",cancelText:r="Cancel",footerContent:c="",initCode:l,leftButton:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((d=>{let u=!1;const f=new tingle.modal({cssClass:n,footer:!0,closeMethods:["escape"],onClose(){e&&e(this),this.destroy(),d(u)}});f.setContent(t),c&&f.setFooterContent(c),o&&f.addFooterBtn(o,"tingle-btn tingle-btn--".concat(a," tingle-btn--pull-right"),(()=>{u=!0,f.close()})),f.addFooterBtn(r,"tingle-btn tingle-btn--".concat(i," tingle-btn--pull-right"),(()=>{u=!1,f.close()})),s&&f.addFooterBtn(s.text,"tingle-btn tingle-btn--default tingle-btn--pull-left",(()=>{var t;null===(t=s.callback)||void 0===t||t.call(s)})),l&&l(f.modal),f.open()}))},z=()=>{const t=new tingle.modal({closeMethods:[],cssClass:["modal-text-align-center"],onClose(){this.destroy()}});return t.setContent("Publishing to CaaS..."),t.open(),t},N=()=>{var t;return null===(t=document.getElementById("usehtml"))||void 0===t?void 0:t.checked},G=async(t,e)=>{const{caasMetadata:n,errors:a,tags:o,tagErrors:i}=await j({prodUrl:"".concat(t).concat(window.location.pathname)}),{draftOnly:r,caasEnv:c,okToContinue:l,useHtml:s}=await(async(t,e,n)=>{let a,o=!1,i=!1,r=!1;const c={text:"See all properties",callback:n},l='\n    <div class="verify-info-footer">\n      <div class="caas-env">\n        <label for="caas-env-select">CaaS Env</label>\n        <select name="1A" id="caas-env-select">\n          <option>Prod</option>\n          <option>Stage</option>\n          <option>Dev</option>\n        </select>\n      </div>\n      <div id="caas-draft-cb">\n        <input type="checkbox" id="draftcb" name="draftcb">\n        <label for="draftcb">Publish to Draft only</label>\n      </div>\n      <div id="caas-use-html-cb" class="field checkbox">\n        <input type="checkbox" id="usehtml" name="usehtml">\n        <label for="usehtml">Use .html extension</label>\n      </div>\n    </div>',s=()=>{var t,e,n;a=null===(t=document.getElementById("caas-env-select"))||void 0===t||null===(t=t.value)||void 0===t?void 0:t.toLowerCase(),i=null===(e=document.getElementById("draftcb"))||void 0===e?void 0:e.checked,r=null===(n=document.getElementById("usehtml"))||void 0===n?void 0:n.checked},d=t=>{var e;const n=t.querySelector("#caas-env-select"),a=null===(e=n.value)||void 0===e?void 0:e.toLowerCase(),o=t.querySelector("#usehtml");"prod"===a&&(o.checked=!0),n.addEventListener("change",(t=>{var e;o.checked="prod"===(null===(e=t.target.value)||void 0===e?void 0:e.toLowerCase())}))};if(t.length)if(e.length){const n=['<div class="">',"<p><b>The following tags were not found:</b></p>",e.join("<br>"),"<p><b>Ok to publish without those tags defined?</b></p>","<p>The following tags will be used:</p>",t.join("<br>"),"</div>"].join("");o=await q(n,{cssClass:["verify-info-modal"],ctaText:"Publish with missing tags",cancelBtnType:"grey",cancelText:"Cancel Registration",ctaBtnType:"danger",footerContent:l,initCode:d,leftButton:c,onClose:s})}else{const e=["<div><p><b>The following tags will be used:</b></p>",t.join("<br>"),"<p><b>Please verify that these are correct.</b></p></div>"].join("");o=await q(e,{cssClass:["verify-info-modal"],cancelBtnType:"grey",cancelText:"Cancel Registration",ctaText:"Continue with these tags",footerContent:l,initCode:d,leftButton:c,onClose:s})}else{const t="<div><p><b>No Tags found on page</b></p><p>Please add at least one tag to the Card Metadata</p></div>";o=await q(t,{cssClass:["verify-info-modal"],ctaText:"",cancelBtnType:"danger",cancelText:"Cancel Registration",footerContent:l,leftButton:c,onClose:s})}return{caasEnv:a,draftOnly:i,okToContinue:o,useHtml:r}})(o,i,(async()=>{const{caasMetadata:e}=await j({prodUrl:"".concat(t).concat(window.location.pathname).concat(N()?".html":"")}),n=JSON.stringify((a=e,Object.keys(a).sort().reduce(((t,e)=>(t[e]=a[e],t)),{})),void 0,4);var a;A('<h3>All CaaS Properties</h3><pre id="json" style="white-space:pre-wrap;font-size:14px;">'.concat(n,"</pre>"))}));if(!l)return O(),e.close(),!1;if(a.length){e.close();const t=["<p>There were problems with the following:</p>",a.join("<br>"),"<p>Publishing to CaaS aborted, please fix errors and try again.</p>"].join("");return A(t,{error:!0,onClose:O}),!1}let d;return s&&({caasMetadata:d}=await j({prodUrl:"".concat(t).concat(window.location.pathname,".html")})),{caasEnv:c,caasMetadata:d||n,draftOnly:r}},H=async t=>!!await(async()=>{let{branch:t,repo:e,owner:n}=v();if(t||e||n||!window.location.hostname.endsWith(".page")||([t,e,n]=window.location.hostname.split(".")[0].split("--")),!(t||e||n))throw new Error("Branch, Repo or Owner is not set - branch: ".concat(t,", repo: ").concat(e,", owner: ").concat(n));const a=await fetch("".concat("https://admin.hlx.page/status","/").concat(n,"/").concat(e,"/").concat(t).concat(window.location.pathname));if(a.ok)return 200===(await a.json()).live.status;return!1})()||(t.close(),A("Page must be published before it can be registered with CaaS.<br>Please publish the page and try again.",{error:!0}),O(),!1),W=async t=>{let{accessToken:e,caasEnv:n,caasProps:a,draftOnly:o,publishingModal:i}=t;try{var r;const t=await(async t=>{let{accessToken:e,caasEnv:n,caasProps:a,draftOnly:o}=t;const i={method:"POST",body:JSON.stringify(a),headers:{Authorization:"Bearer ".concat(e),draft:!!o,"caas-env":n}};let r;const c=await fetch("https://14257-milocaasproxy.adobeio-static.net/api/v1/web/milocaas/postXDM",i);if(void 0!==c){const t=await c.text();try{r=JSON.parse(t)}catch{r=t}}return r})({accessToken:e,caasEnv:n,caasProps:a,draftOnly:o});if(i.close(),t.success)A("<p>Successfully published page to CaaS!<p><p>Card ID: ".concat(a.entityId,"</p>"),{onClose:O});else if(null!==(r=t.error)&&void 0!==r&&r.startsWith("Invalid User: Not an Adobe employee")){const t="Please login with your Adobe company account.  Do you want to try logging in again?",e=await q(t,{cancelBtnType:"grey",cancelText:"Cancel",ctaText:"Login"});if(O(),e){const{signInContext:t}=v();window.adobeIMS.signIn(t)}}else A(t.message||t.error||JSON.stringify(t),{error:!0,onClose:O})}catch(c){i.close(),O(),A("Error posting to CaaS:<br>".concat(c.message),{error:!0})}},F=()=>{},K=async function(){var t;let{host:e="",project:n="",branch:o="",repo:i="",owner:r=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F;if(D())return;if(await R(c,l),"prod"!==(null===(t=window.adobeid)||void 0===t?void 0:t.environment))return void A("Send to CaaS needs to reload the page with prod IMS setup.  Please try again after reload.",{onClose:()=>{const t=new URL(window.location);t.searchParams.append("env","prod"),window.location.assign(t)}});h({host:e||window.location.host,project:n,branch:o,repo:i,owner:r,doc:document}),l("https://milo.adobe.com/tools/send-to-caas/send-to-caas.css"),P();const s=z();try{if(!e)throw new Error("host must be specified");await k();const{caasEnv:t,caasMetadata:n,draftOnly:o}=await G(e,s);if(!n)return;if(!await H(s))return;const i=await(async(t,e)=>{const n=await(0,a.getImsToken)(e);if(!n){if(t.close(),await q("You must be logged in with an Adobe ID in order to publish to CaaS.\nDo you want to log in?")){const{signInContext:t}=v();window.adobeIMS.signIn(t)}return O(),!1}return n})(s,c);if(!i)return;const r=(t=>{var e;return{entityId:t.entityid,contentId:t.contentid,contentType:t.contenttype,environment:t.env,url:t.url,floodGateColor:t.floodgatecolor,universalContentIdentifier:t.uci,title:t.cardtitle||t.title,description:t.carddescription||t.description,createdDate:t.created,modifiedDate:t.modified,tags:t.tags,primaryTag:t.primarytag,...t.cardimage&&{thumbnail:{altText:t.cardimagealttext,url:t.cardimage}},country:t.country,language:t.lang,cardData:{style:t.style,headline:t.cardtitle||t.title,...t.details&&{details:t.details},...(t.bookmarkenabled||t.bookmarkicon||t.bookmarkaction)&&{bookmark:{enabled:t.bookmarkenabled,bookmarkIcon:t.bookmarkicon,action:t.bookmarkaction}},badges:x(t),...t.playurl&&{playUrl:t.playurl},...(t.cta1url||t.cta2url)&&{cta:{...t.cta1url&&{primaryCta:{text:t.cta1text,url:t.cta1url,style:t.cta1style,icon:t.cta1icon,target:t.cta1target}},...t.cta2url&&{secondaryCta:{text:t.cta2text,url:t.cta2url,style:t.cta2style,icon:t.cta2icon,target:t.cta2target}}}},...(t.eventduration||t.eventstart||t.eventend)&&{event:{duration:t.eventduration,startDate:t.eventstart,endDate:t.eventend}}},origin:t.origin,...(null===(e=t.arbitrary)||void 0===e?void 0:e.length)&&{arbitrary:t.arbitrary}}})(n);W({accessToken:i,caasEnv:t,caasProps:r,draftOnly:o,publishingModal:s})}catch(d){O(),s.close(),A("ERROR: ".concat(d.message),{error:!0})}}}}]);
//# sourceMappingURL=9555.db6d6452.chunk.js.map