"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[3016,2301],{3016:(e,t,n)=>{n.r(t),n.d(t,{DATA_TYPE:()=>P,PERSONALIZATION_TAGS:()=>s,TRACKED_MANIFEST_TYPE:()=>b,US_GEO:()=>l,addMepAnalytics:()=>se,applyPers:()=>he,buildVariantInfo:()=>ae,categorizeActions:()=>ue,cleanAndSortManifestList:()=>pe,combineMepSources:()=>we,createContent:()=>N,createMartechMetadata:()=>Q,deleteMarkedEls:()=>$,fetchData:()=>V,getEntitlementMap:()=>ie,getEntitlements:()=>re,getFileName:()=>L,getManifestConfig:()=>ce,handleCommands:()=>X,handleFragmentCommand:()=>ve,init:()=>Le,matchGlob:()=>R,modifyNonFragmentSelector:()=>J,normalizePath:()=>M,parseManifestVariants:()=>K,parseNestedPlaceholders:()=>ge,parsePlaceholders:()=>ee,replaceInner:()=>_,replacePlaceholders:()=>S,updateFragDataProps:()=>Z});var a=n(2301),o=n(2899),i=window.screen.width<550||window.screen.height<550,r=navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints>1,l="en-us",s={all:()=>!0,chrome:()=>navigator.userAgent.includes("Chrome")&&!navigator.userAgent.includes("Edg"),firefox:()=>navigator.userAgent.includes("Firefox"),safari:()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),edge:()=>navigator.userAgent.includes("Edg"),android:()=>navigator.userAgent.includes("Android"),ios:()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||r,windows:()=>navigator.userAgent.includes("Windows"),mac:()=>navigator.userAgent.includes("Macintosh")&&!r,"mobile-device":()=>r||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Touch/i.test(navigator.userAgent),phone:()=>s["mobile-device"]()&&i,tablet:()=>s["mobile-device"]()&&!i,desktop:()=>!s["mobile-device"](),loggedout:()=>{var e;return!(null!==(e=window.adobeIMS)&&void 0!==e&&e.isSignedInUser())},loggedin:()=>{var e;return!(null===(e=window.adobeIMS)||void 0===e||!e.isSignedInUser())}},c=Object.keys(s),d="p13n-deleted",u="p13n-replaced",m="not ",f="target-",p="_inline",v="martechReturned",g=new URL(window.location.href),h={all:"all",includeFragments:"include-fragments"},w=!1,b="personalization",y=/[^a-z0-9\- _,&=:]/g,E=["action","selector","pagefilter","page filter","page filter optional"],P={JSON:"json",TEXT:"text"},C="in-block:",M=function(e){var t;let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e;if(null===(t=i)||void 0===t||!t.includes("/"))return i;const r=(0,o.getConfig)();if(i.startsWith("https://www.adobe.com/federal/"))return(0,a.getFederatedUrl)(i);if(i.startsWith(r.codeRoot)||i.includes(".hlx.")||i.includes(".aem.")||i.includes(".adobe."))try{const e=new URL(i),t=e.pathname.split("/")[1];i=!n||"en-US"===r.locale.ietf||e.hash.includes("#_dnt")||t in r.locales||i.includes(".json")?e.pathname:"".concat(r.locale.prefix).concat(e.pathname)}catch(l){}else i.startsWith("http")||i.startsWith("/")||(i="/".concat(i));return i},L=e=>null===e||void 0===e?void 0:e.split("/").pop(),k=["insertscript","replacepage","updatemetadata","useblockcode"],T={insertafter:"afterend",insertbefore:"beforebegin",prepend:"afterbegin",append:"beforeend"},I={remove:"remove",replace:"replace"};function x(e,t,n){t&&(e.dataset.manifestId=t),n&&(e.dataset.adobeTargetTestid=n)}function A(e){const t=e.toLowerCase().trim();return t.startsWith("/")||t.startsWith("http")?"fragment":"other"}function S(e,t){const n=t||(0,o.getConfig)().placeholders;if(!n)return e;let a=e;const i=a.match(/{{(.*?)}}/g);return i?(i.forEach((e=>{const t=e.replace(/{{|}}/g,"").trim();n[t]&&(a=a.replace(e,n[t]))})),a):a}var O=(e,t,n,a,i)=>{"replace"===t&&e.classList.add(d,u);let r=n;try{const{pathname:e,search:t,hash:a}=new URL(n);r="".concat(e).concat(t).concat(a)}catch{}const l=(0,o.createTag)("a",{href:r},n);x(l,a,i);const s=(0,o.createTag)("p",void 0,l);return/#.*delay=/.test(r)&&s.classList.add("hide-block"),(e=>{const t=document.querySelector("body > main > div");return t===e||(null===t||void 0===t?void 0:t.contains(e))})(e)&&(0,o.loadLink)("".concat((0,o.localizeLink)(l.href),".plain.html"),{as:"fetch",crossorigin:"anonymous",rel:"preload"}),s},N=(e,t)=>{let{content:n,manifestId:a,targetManifestId:i,action:r,modifiers:l}=t;if("replace"===r&&x(e,a,i),"A"===(null===e||void 0===e?void 0:e.nodeName)&&null!==l&&void 0!==l&&l.includes("href"))return e.setAttribute("href",((e,t,n)=>{const a=e.getAttribute("href"),o=S(t);return"insertafter"===n||"append"===n?"".concat(a).concat(o):"insertbefore"===n||"prepend"===n?"".concat(o).concat(a):o})(e,n,r)),x(e,a,i),e;if("fragment"!==A(n)){const t=S(n);if("replace"===r)return e.innerHTML=t,e;const l=(0,o.createTag)("div",{},t);return x(l,a,i),l}const s=O(e,r,n,a,i);return x(s,a,i),"MAIN"!==(null===e||void 0===e?void 0:e.parentElement.nodeName)?s:(0,o.createTag)("div",void 0,s)},j={[I.remove]:(e,t)=>{var n;let{content:a,manifestId:o}=t;"false"!==a&&(!o||null!==(n=e.href)&&void 0!==n&&n.includes("/tools/ost")?e.classList.add(d):e.dataset.removedManifestId=o)},[I.replace]:(e,t)=>{e&&!e.classList.contains(u)&&e.insertAdjacentElement("beforebegin",N(e,t))}},U=function(){var e;null!==(e=(0,o.getConfig)().mep)&&void 0!==e&&e.preview&&console.log(...arguments)},V=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P.JSON;try{const n=await fetch(M(e));if(!n.ok){if(404===n.status)throw new Error("File not found");throw new Error("Invalid response: ".concat(n.status," ").concat(n.statusText))}return await n[t]()}catch(n){U("Error loading content: ".concat(e),n.message||n)}return null},W=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.reduce(((e,n)=>[...e,...n[t]||[]]),n)},F=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.reduce(((e,a)=>{var o;return null===(o=a[t])||void 0===o||o.forEach((n=>{const{selector:o,val:i}=n;if("blocks"===t)return void(e[o]=i);if(o in e)return;const r={action:n.action,fragment:i,selector:o,manifestPath:a.manifestPath,manifestId:n.manifestId,targetManifestId:n.targetManifestId};for(const t in e)e[t].fragment===o&&(e[t]=r);e[o]=r})),{...n,...e}}),{})},R=(e,t)=>{const n=e.replace(/\*\*/g,".*");return new RegExp("^".concat(n,"(\\.html)?$"),"i").test(t)};async function _(e,t){if(!e||!t)return!1;let n=e.endsWith("/")?"".concat(e,"index"):e;n=n.endsWith(".plain.html")?n:"".concat(n,".plain.html");const a=await V(n,P.TEXT);if(!a)return!1;t.innerHTML=a;const{decorateArea:i}=(0,o.getConfig)();return i&&i(t),!0}var z=e=>{const{selector:t,val:n}=e;if(!t||!n)return;const a=t.startsWith("og:")?"property":"name";let i=document.querySelector("meta[".concat(a,'="').concat(t,'"]'));i||(i=(0,o.createTag)("meta",{[a]:t}),document.head.append(i)),i.setAttribute("content",n)};function D(e){return Object.keys(e).reduce(((t,n)=>{var a;return t[(a=n,a.toLowerCase().replace(y,""))]=e[n],t}),{})}var B=(e,t)=>e?t.replace(e,":nth-child(".concat(e,")")):t;function q(e){let t=e;const n={section:"main > div","primary-cta":"strong a","secondary-cta":"em a","action-area":"*:has(> em a, > strong a)","any-marquee-section":'main > div:has([class*="marquee"])',"any-marquee":'[class*="marquee"]',"any-header":":is(h1, h2, h3, h4, h5, h6)"},a=t.match(/^[a-zA-Z/./-]*/),o=a?a[0].toLowerCase():"",i=o.split(/\.|:/)[0],r=t.match(/[0-9]*$/),l=r&&o.match(/^[a-zA-Z]/)?r[0]:"";return!o||["html","body","header","footer","main","div","a","p","strong","em","picture","source","img","h","ul","ol","li"].includes(o)?t:["row","col"].includes(o)?(t=t.replace(o,"> div"),t=B(l,t),t):Object.keys(n).includes(i)?(t=t.replace(i,n[i]),t=B(l,t),t):(o.startsWith(".")||(t=".".concat(t)),l&&(t=t.replace(l,""),t="".concat(t,":nth-child(").concat(l," of ").concat(t,")")),t)}function J(e){const{sel:t,modifiers:n}=function(e){let t=e;const n=[],a=t.split(/\s+#_/);return a.length&&(t=a.shift(),a.forEach((e=>{e.split(/_|#_/).forEach((e=>n.push(e.toLowerCase().trim())))}))),{sel:t,modifiers:n}}(e);return{modifiedSelector:t.split(">").join(" > ").split(",").join(" , ").replaceAll(/main\s*>?\s*(section\d*)/gi,"$1").split(/\s+/).map(q).join(" ").trim(),modifiers:n}}var G=(e,t)=>{if(!t)return e;try{const{origin:n,pathname:a,search:o}=new URL(e);return"".concat(n).concat(a).concat(o,"#").concat(t)}catch(n){return"".concat(e,"#").concat(t)}},H=(e,t,n)=>{[...e[0].children].forEach((e=>e.dataset[t]=n))},Z=(e,t,n,a)=>{const{manifestId:o,adobeTargetTestid:i}=e.dataset;t?(o&&H(n,"manifestId",o),i&&H(n,"adobeTargetTestid",i)):x(a,o,i)},$=function(){[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(".".concat(d))].forEach((e=>e.remove()))};function X(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=document.querySelector("main > div");return e.forEach((e=>{const{action:l,content:s,selector:c}=e;if(e.content=n&&"fragment"===A(s)?G(s,p):s,c.startsWith(C))return function(e){var t,n,i,r,l,s;const c=e.selector.substring(C.length).trim().split(/\s+/),[d]=c,u=(0,o.getConfig)();let m;if(null!==(n=(t=u.mep).inBlock)&&void 0!==n||(t.inBlock={}),null!==(r=(i=u.mep.inBlock)[d])&&void 0!==r||(i[d]={}),1===c.length&&delete e.selector,c.length>1&&(m=c.slice(1).join(" "),e.selector=m,"fragment"===A(m))){var f,p;m.includes("/federal/")&&(m=(0,a.getFederatedUrl)(m)),e.content.includes("/federal/")&&(e.content=(0,a.getFederatedUrl)(e.content)),null!==(p=(f=u.mep.inBlock[d]).fragments)&&void 0!==p||(f.fragments={});const{fragments:t}=u.mep.inBlock[d];if(delete e.selector,m in t)return;for(const n in t)t[n].content===m&&(t[n]=e);t[m]=e,m=M(m);for(const n in t)t[n].content===m&&(t[n]=e);t[m]=e}else null!==(s=(l=u.mep.inBlock[d]).commands)&&void 0!==s||(l.commands=[]),u.mep.inBlock[d].commands.push(e)}(e),void(e.selectorType=C);const{els:d,modifiers:u}=function(e,t,n){const a=n?t:document,o=e.trim();if(!o)return{};if("fragment"===A(o))try{return{els:a.querySelectorAll('a[href*="'.concat(M(o,!1),'"], a[href*="').concat(M(o,!0),'"]')),modifiers:[h.all,h.includeFragments]}}catch(s){return{els:[],modifiers:[]}}const{modifiedSelector:i,modifiers:r}=J(o);let l;try{l=a.querySelectorAll(i)}catch(s){return U("Invalid selector: ",o),null}return r.includes(h.all)||!l.length||(l=[l[0]]),{els:l,modifiers:r}}(c,t,i);e.modifiers=u,null===d||void 0===d||d.forEach((n=>{if(!n||!(l in j)&&!(l in T)||t&&!t.contains(n)||w&&null!==r&&void 0!==r&&r.contains(n))return;if(l in j)return void j[l](n,e);const a="fragment"===A(c)?n.parentElement:n;null===a||void 0===a||a.insertAdjacentElement(T[l],N(n,e))})),(d.length&&!e.modifiers.includes(h.all)||!e.modifiers.includes(h.includeFragments))&&(e.completed=!0)})),$(t),e.filter((e=>!e.completed&&e.selectorType!==C))}var Y=(e,t,n,a,i)=>{var r,l,s;const c=(0,o.getConfig)();let d=L(a),u=d.replace(".json","");i&&(u=i),null!==(r=c.mep)&&void 0!==r&&r.preview||(d=!1);const m=null===(l=e.action)||void 0===l?void 0:l.toLowerCase().replace("content","").replace("fragment","").replace("tosection","");if(!m)return void U("Row found with empty action field: ",e);const p=e["page filter"]||e["page filter optional"],{selector:v}=e;if(p&&!R(p,new URL(window.location).pathname))return;null!==(s=c.mep)&&void 0!==s&&s.preview||(d=!1);const{origin:h}=g;t.forEach((t=>{const a=!!t.includes(f)&&u;if(!e[t]||"false"===e[t].toLowerCase())return;const o={action:m,selector:v,pageFilter:p,content:e[t],selectorType:A(v),manifestId:d,targetManifestId:a};if(m in j&&"fragment"===o.selectorType)n[t].fragments.push({selector:M(o.selector.split(" #_")[0]),val:M(e[t]),action:m,manifestId:d,targetManifestId:a});else if(k.includes(m))if(n[t][m]=n[t][m]||[],"useblockcode"===m){const{blockSelector:o,blockTarget:i}=((e,t,n)=>{var a,o,i,r;let l=e;null!==(a=l)&&void 0!==a&&a.includes("\\")&&(l=null===(o=l)||void 0===o?void 0:o.split("\\").join("/")),null!==(i=l)&&void 0!==i&&i.startsWith("/")||(l="/".concat(l));const s=null===(r=l)||void 0===r?void 0:r.split("/").pop();return l=l.startsWith("/libs/")?"".concat(t.miloLibs||t.codeRoot).concat(l.replace("/libs","")):"".concat(n).concat(l),{blockSelector:s,blockTarget:l}})(e[t],c,h);n[t][m].push({selector:o,val:i,pageFilter:p,manifestId:d,targetManifestId:a})}else n[t][m].push({selector:M(v),val:M(e[t]),pageFilter:p,manifestId:d,targetManifestId:a});else(m in j||m in T)&&n[t].commands.push(o)}))};function K(e,t,n){if(null===e||void 0===e||!e.length)return null;const a={},i=e.map((e=>D(e)));try{var r;const e={},l=Object.keys(i[0]).filter((e=>!E.includes(e)));l.forEach((t=>{e[t]={commands:[],fragments:[]}})),i.forEach((a=>{Y(a,l,e,t,n)})),a.variants=e,a.variantNames=l;return null!==(r=(0,o.getConfig)().mep)&&void 0!==r&&r.preview||(a.manifestId=!1),a}catch(l){U("error parsing personalization manifestConfig:",l,i)}return null}async function Q(e,t,a){"en-US"!==t.locale.ietf&&await n.e(6931).then(n.bind(n,6931)).then((n=>{var o,i;let{processTrackingLabels:r}=n;null!==(i=(o=t.mep).analyticLocalization)&&void 0!==i||(o.analyticLocalization={}),e.forEach(((n,o)=>{const i=e[o];let s=i[l]||i.us||i.en||i.key;if(!s)return;s=r(s);const c=r(n[a]);t.mep.analyticLocalization[c]=s}))}))}function ee(e,t){var n;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(null===e||void 0===e||!e.length||"default"===a)return t;const o=[a.toLowerCase(),null===(n=t.mep)||void 0===n?void 0:n.prefix,t.locale.region.toLowerCase(),t.locale.ietf.toLowerCase(),...t.locale.ietf.toLowerCase().split("-"),"value","other"],i=(null!==e&&void 0!==e&&e.length?Object.entries(e[0]):[]).find((e=>{let[t]=e;return o.includes(t.toLowerCase())})),r=null===i||void 0===i?void 0:i[0];if(r){const n=e.reduce(((e,t)=>(e[t.key]=t[r],e)),{});t.placeholders={...t.placeholders||{},...n}}return Q(e,t,r),t}var te=e=>{const[t,n]=e.split("param-")[1].split("=");if(!t)return!1;const a=new URLSearchParams(Array.from(g.searchParams,(e=>{let[t,n]=e;return[t.toLowerCase(),null===n||void 0===n?void 0:n.toLowerCase()]}))).get(t.toLowerCase());return null!==a&&(!n||n===a)};function ne(e){return e.map((e=>e.trim())).filter(Boolean)}function ae(e){return e.reduce(((e,t)=>{let n=[t];return t.startsWith(f)||(n=t.split(",")),e[t]=ne(n),e.allNames=[...e.allNames,...ne(t.split(/[,&]|\bnot\b/))],e}),{allNames:[]})}var oe=e=>{var t;const n="prod"===(null===(t=e.env)||void 0===t?void 0:t.name)?"prod":"stage";return"https://www.adobe.com/federal/assets/data/mep-xlg-tags.json?sheet=".concat(n)},ie=async()=>{var e,t,n;const a=(0,o.getConfig)();if(null!==(e=a.mep)&&void 0!==e&&e.entitlementMap)return a.mep.entitlementMap;const i=oe(a),r=await V(i,P.JSON);if(!r)return a.consumerEntitlements||{};const l={};return null===r||void 0===r||null===(t=r.data)||void 0===t||t.forEach((e=>{const{id:t,tagname:n}=e;l[t]=n})),null!==(n=a.mep)&&void 0!==n||(a.mep={}),a.mep.entitlementMap={...a.consumerEntitlements,...l},a.mep.entitlementMap},re=async e=>{const t=await ie();return e.flatMap((e=>{var n;return(null===(n=e.segments)||void 0===n?void 0:n.flatMap((e=>{const n=t[e.id];return n?[n]:[]})))||[]}))};var le=e=>({disabled:e.disabled,event:e.event,manifest:e.manifestPath,executionOrder:"1-1",selectedVariant:{commands:[],fragments:[]},selectedVariantName:"default",variantNames:["all"],variants:{},source:["promo"]}),se=(e,t)=>{var n;null===(n=e.mep)||void 0===n||null===(n=n.experiments)||void 0===n||n.forEach((e=>{var n,a;(null===e||void 0===e||null===(n=e.selectedVariant)||void 0===n||null===(n=n.useblockcode)||void 0===n||n.forEach((e=>{let{selector:t,targetManifestId:n}=e;t&&n&&document.querySelectorAll(".".concat(t)).forEach((e=>e.dataset.adobeTargetTestid=n))})),t)&&(null===e||void 0===e||null===(a=e.selectedVariant)||void 0===a||null===(a=a.updatemetadata)||void 0===a||a.forEach((e=>{"gnav-source"===(null===e||void 0===e?void 0:e.selector)&&e.targetManifestId&&(t.dataset.adobeTargetTestid=e.targetManifestId)})))}))};async function ce(){var e,t,n,a,i;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{name:d,manifestData:u,manifestPath:p,manifestUrl:v,manifestPlaceholders:g,manifestInfo:h,variantLabel:w,disabled:y,event:E,source:C}=r;if(y&&(!l||!Object.keys(l).length))return le(r);let k=u;if(!k){const e=await V(p,P.JSON);V&&(k=e)}const T=(null===(e=k)||void 0===e||null===(e=e.experiences)||void 0===e?void 0:e.data)||(null===(t=k)||void 0===t?void 0:t.data)||k;if(!T)return null;const I=h||(null===(n=k)||void 0===n||null===(n=n.info)||void 0===n?void 0:n.data),x=null===I||void 0===I?void 0:I.reduce(((e,t)=>(e[t.key]=t.value,e)),{}),A=null===x||void 0===x||null===(a=x["manifest-override-name"])||void 0===a?void 0:a.toLowerCase(),S=K(T,p,d||A);if(!S)return U("Error loading personalization manifestConfig: ",d||p),null;const O={"manifest-type":["Personalization","Promo","Test"],"manifest-execution-order":["First","Normal","Last"]};if(I){var N;if(S.manifestType=null===x||void 0===x||null===(N=x["manifest-type"])||void 0===N?void 0:N.toLowerCase(),S.manifestType===b){S.manifestOverrideName=A;const e=A||L(p).replace(".json","");S.analyticsTitle=e.trim().slice(0,15)}const e={"manifest-type":1,"manifest-execution-order":1};Object.keys(x).forEach((t=>{if(!O[t])return;const n=O[t].indexOf(x[t]);e[t]=n>-1?n:1})),S.executionOrder="".concat(e["manifest-execution-order"],"-").concat(e["manifest-type"])}else S.manifestType=O["manifest-type"][1],S.executionOrder="1-1";return S.manifestPath=M(p),S.selectedVariantName=await async function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const i=(0,o.getConfig)();if(null!==(t=i.mep)&&void 0!==t&&null!==(t=t.variantOverride)&&void 0!==t&&t[e])return i.mep.variantOverride[e];const r=ae(n),l=Object.values(await ie()).some((e=>r.allNames.includes(e)));let d=[];var u;l&&(d=null!==i&&void 0!==i&&null!==(u=i.mep)&&void 0!==u&&u.enablePersV2?[]:await i.entitlements());const p=e=>{var t;return!e||e===(null===a||void 0===a?void 0:a.toLowerCase())||(e.startsWith("param-")?te(e):!(null===(t=d)||void 0===t||!t.includes(e))||c.includes(e)&&s[e]())},v=e=>{const t=e.includes(":")?e.split(":")[1]:e;return t.startsWith(f)?p(t):!t.split("&").map((e=>{const t=e.trim().startsWith(m),n=p(e.replace(m,"").trim());return t?!n:n})).includes(!1)};return n.find((e=>r[e].some(v)))}(S.manifestPath,S.variantNames,w),S.placeholderData=g||(null===(i=k)||void 0===i||null===(i=i.placeholders)||void 0===i?void 0:i.data),S.name=d,S.manifest=p,S.manifestUrl=v,S.disabled=y,S.event=E,null!==C&&void 0!==C&&C.length&&(S.source=C),S}var de=e=>{let{selector:t,val:n,action:a,manifestId:o,targetManifestId:i}=e;return{selector:M(t),val:M(n),action:a,manifestId:o,targetManifestId:i}};async function ue(e,t){var n,a,i;if(!e)return null;const{manifestPath:r,selectedVariant:l}=e;if(!l||"default"===l)return{experiment:e};const{replacepage:s}=l;return null!==(n=l.replacepage)&&void 0!==n&&n.length&&(t.mep.replacepage=s[0]),null===(a=l.insertscript)||void 0===a||a.map((e=>(0,o.loadScript)(e.val))),null===(i=l.updatemetadata)||void 0===i||i.map((e=>z(e))),l.fragments&&(l.fragments=l.fragments.map(de)),{manifestPath:r,experiment:e,blocks:l.useblockcode,fragments:l.fragments,commands:l.commands}}function me(e){if(!e)return!1;const t=Object.create(null);return decodeURIComponent(e).split("---").forEach((e=>{const n=e.trim().split("--");if(n.length>1){const[e,a]=n;t[e]=a}})),t}function fe(e,t){return e.executionOrder===t.executionOrder?0:e.executionOrder>t.executionOrder?1:-1}function pe(e,t){var n;const a=null!==t&&void 0!==t?t:(0,o.getConfig)(),i={};let r=e,l=!1;return null!==(n=a.mep)&&void 0!==n&&n.experiments&&(r=[...e,...a.mep.experiments]),r.forEach((e=>{try{if(null===e||void 0===e||!e.manifest)return;if(e.manifestPath||(e.manifestPath=M(e.manifest)),e.manifestPath in i){var t;let n=i[e.manifestPath],o=e;e.name&&(n=e,o=i[e.manifestPath]),o.source=o.source.concat(n.source),o.name=n.name,o.selectedVariantName=n.selectedVariantName,l="prod"===(null===a||void 0===a||null===(t=a.env)||void 0===t?void 0:t.name)&&n.selectedVariantName.startsWith("target-"),o.variants=l?n.variants:o.variants,o.selectedVariant=o.variants[o.selectedVariantName],i[e.manifestPath]=o}else i[e.manifestPath]=e;const n=i[e.manifestPath],{selectedVariantName:r,variantNames:s,placeholderData:c}=n;r&&s.includes(r)?n.selectedVariant=n.variants[r]:(n.selectedVariantName="default",n.selectedVariant="default"),ee(c,(0,o.getConfig)(),n.selectedVariantName)}catch(r){var n;U("MEP Error parsing manifests: ".concat(r.toString())),null===(n=window.lana)||void 0===n||n.log("MEP Error parsing manifests: ".concat(r.toString()))}})),Object.keys(i).forEach((e=>{delete i[e].variants})),Object.values(i).sort(fe)}function ve(e,t){const{action:n,fragment:a,manifestId:o,targetManifestId:i}=e;return n===I.replace?(t.href=a,x(t,o,i),a):(n===I.remove&&(o?t.parentElement.dataset.removedManifestId=o:t.parentElement.remove()),!1)}function ge(e){let{placeholders:t}=e;t&&Object.entries(t).forEach((e=>{let[n,a]=e;t[n]=S(a,t)}))}async function he(e){let{manifests:t}=e;if(null===t||void 0===t||!t.length)return;let n=t;const a=(0,o.getConfig)();for(let o=0;o<n.length;o+=1){var i;n[o]=await ce(n[o],null===(i=a.mep)||void 0===i?void 0:i.variantOverride)}n=pe(n),ge(a);let r=[];for(const o of n){const e=await ue(o,a);e&&r.push(e)}r=r.filter(Boolean),a.mep.experiments=[...a.mep.experiments,...n],a.mep.blocks=F(r,"blocks",a.mep.blocks),a.mep.fragments=F(r,"fragments",a.mep.fragments),a.mep.commands=W(r,"commands",a.mep.commands);const l=document.querySelector("main");if(a.mep.replacepage&&!w&&l){await _(a.mep.replacepage.val,l);const{manifestId:e,targetManifestId:t}=a.mep.replacepage;x(l,e,t)}a.mep.commands=X(a.mep.commands);const s=r.filter((e=>{var t;return(null===(t=e.experiment)||void 0===t?void 0:t.manifestType)===b}));if(!s.length)return;const c=s.map((e=>{var t,n;const a=e.experiment.selectedVariantName.replace(f,"").trim().slice(0,15),o=a.split(":");return(o.length>2||""===(null===(t=o[0])||void 0===t?void 0:t.trim())||""===(null===(n=o[1])||void 0===n?void 0:n.trim()))&&U('MEP Error: When using (optional) column nicknames, please use the following syntax: "<nickname>: <original audience>"'),!a.includes(":")||a.startsWith(":")?"default"===a?"nopzn":a:o[0].trim()})),d=s.map((e=>e.experiment.analyticsTitle));a.mep.martech="|".concat(c.join("--"),"|").concat(d.join("--"))}var we=async(e,t,a)=>{let o=[];if(e&&(o=e.toLowerCase().split(/,|(\s+)|(\\n)/g).filter((e=>null===e||void 0===e?void 0:e.trim())).map((e=>({manifestPath:e,source:["pzn"]})))),t){const{default:e}=await n.e(9882).then(n.bind(n,9882));o=o.concat(e(t,g.searchParams))}if(a&&"off"!==a){const e=o.map((e=>{const{manifestPath:t}=e;if(t.startsWith("/"))return t;try{return new URL(t).pathname}catch(n){return t}}));a.split("---").forEach((t=>{const n=t.trim().toLowerCase().split("--")[0];e.includes(n)||o.push({manifestPath:n,source:["mep param"]})}))}return o};async function be(e){var t;let{config:n,targetManifests:a,targetPropositions:o}=e;if(a.forEach((e=>{e.source=["target"]})),n.mep.targetManifests=a,null!==n&&void 0!==n&&null!==(t=n.mep)&&void 0!==t&&t.enablePersV2?window.addEventListener("alloy_sendEvent",(()=>{null!==o&&void 0!==o&&o.length&&window._satellite&&window._satellite.track("propositionDisplay",o)}),{once:!0}):null!==o&&void 0!==o&&o.length&&window._satellite&&window._satellite.track("propositionDisplay",o),"postlcp"===n.mep.targetEnabled){const e=new CustomEvent(v,{detail:"Martech returned"});window.dispatchEvent(e)}return a}function ye(e){return Math.ceil(e/250)/4}function Ee(e,t,n,a){var o,i;const r=function(e){return ye(Date.now()-e)}(t),l=ye(n);let s="target response time ".concat(r,":timed out ").concat(e,":timeout ").concat(l);a&&(s+=":".concat(a)),null===(o=window._satellite)||void 0===o||null===(i=o.track)||void 0===i||i.call(o,"event",{documentUnloading:!0,xdm:{eventType:"web.webinteraction.linkClicks",web:{webInteraction:{linkClicks:{value:1},type:"other",name:s}}},data:{_adobe_corpnew:{digitalData:{primaryEvent:{eventInfo:{eventName:s}}}}}})}var Pe=e=>{var t,n;return null!==(t=null===(n=e.propositions||e.decisions)||void 0===n||null===(n=n.map((e=>e.items)))||void 0===n||null===(n=n.flat())||void 0===n||null===(n=n.map((e=>{var t,n,a,o,i;const r=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.content;return r&&(r.manifestLocation||r.manifestContent)?{manifestPath:r.manifestLocation||r.manifestPath,manifestUrl:r.manifestLocation,manifestData:(null===(n=r.manifestContent)||void 0===n||null===(n=n.experiences)||void 0===n?void 0:n.data)||(null===(a=r.manifestContent)||void 0===a?void 0:a.data),manifestPlaceholders:null===(o=r.manifestContent)||void 0===o||null===(o=o.placeholders)||void 0===o?void 0:o.data,manifestInfo:null===(i=r.manifestContent)||void 0===i?void 0:i.info.data,name:e.meta["activity.name"],variantLabel:e.meta["experience.name"]&&"target-".concat(e.meta["experience.name"]),meta:e.meta}:null})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]};async function Ce(e){const{getTargetPersonalization:t}=await n.e(259).then(n.bind(n,259)),{targetManifests:a,targetPropositions:o}=await t({handleAlloyResponse:Pe,sendTargetResponseAnalytics:Ee});return be({config:e,targetManifests:a,targetPropositions:o})}var Me=()=>new Promise((e=>{window.addEventListener(v,(t=>e(t.detail)),{once:!0})}));async function Le(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];const{mepParam:a,mepHighlight:i,mepButton:r,pzn:s,promo:c,enablePersV2:d,target:u,targetInteractionPromise:m,calculatedTimeout:f,postLCP:p}=e,v=(0,o.getConfig)();var g,h,b;p?w=!0:(v.mep={updateFragDataProps:Z,preview:"off"!==r&&("prod"!==(null===(g=v.env)||void 0===g?void 0:g.name)||a||""===a||r),variantOverride:me(a),highlight:void 0!==i&&"false"!==i,targetEnabled:u,experiments:[],prefix:(null===(h=v.locale)||void 0===h||null===(h=h.prefix.split("/")[1])||void 0===h?void 0:h.toLowerCase())||l,enablePersV2:d},t=t.concat(await we(s,c,a)),null===(b=t)||void 0===b||b.forEach((e=>{if(e.disabled)return;const t=M(e.manifestPath);(0,o.loadLink)(t,{as:"fetch",crossorigin:"anonymous",rel:"preload"})})),s&&(0,o.loadLink)(oe(v),{as:"fetch",crossorigin:"anonymous",rel:"preload"}));d&&!0===u?t=t.concat(await async function(e){var t;let{config:n,targetInteractionPromise:a,calculatedTimeout:o}=e,i=[],r=[];if(null!==n&&void 0!==n&&null!==(t=n.mep)&&void 0!==t&&t.enablePersV2&&a){const{targetInteractionData:e,respTime:t,respStartTime:n}=await a;if(Ee(!1,n,o),e.result){var l;const n=ye(t);performance.clearMarks(),performance.clearMeasures();try{window.lana.log("target response time: ".concat(n),{tags:"martech",errorType:"e",sampleRate:.5})}catch(s){console.error("Error logging target response time:",s)}i=Pe(e.result),r=(null===(l=e.result)||void 0===l?void 0:l.propositions)||[]}}return be({config:n,targetManifests:i,targetPropositions:r})}({config:v,targetInteractionPromise:m,calculatedTimeout:f})):(!0===u&&(t=t.concat(await Ce(v))),"postlcp"===u&&Ce(v)),p&&(v.mep.targetManifests||await Me(),t=v.mep.targetManifests);try{var y,E;null!==(y=t)&&void 0!==y&&y.length&&await he({manifests:t}),null!==(E=v.mep)&&void 0!==E&&E.preview&&await n.e(5239).then(n.bind(n,7620)).then((e=>{let{saveToMmm:t}=e;return t()}))}catch(C){var P;U("MEP Error: ".concat(C.toString())),null===(P=window.lana)||void 0===P||P.log("MEP Error: ".concat(C.toString()))}}},2301:(e,t,n)=>{n.r(t),n.d(t,{getFederatedContentRoot:()=>r,getFederatedUrl:()=>l,getFedsPlaceholderConfig:()=>s});var a,o,i=n(2899),r=()=>{const{allowedOrigins:e=[],origin:t}=(0,i.getConfig)();if(a)return a;const n=t||window.location.origin;return a=[...e,"https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com"].some((e=>n.replace(".stage","")===e))?n:"https://www.adobe.com",(n.includes("localhost")||n.includes(".".concat(i.SLD,".")))&&(a="https://main--federal--adobecom.aem.".concat(n.endsWith(".live")?"live":"page")),a},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e||!e.includes("/federal/"))return e;if(e.startsWith("/"))return"".concat(r()).concat(e);try{const{pathname:t,search:n,hash:a}=new URL(e);return"".concat(r()).concat(t).concat(n).concat(a)}catch(n){var t;null===(t=window.lana)||void 0===t||t.log("getFederatedUrl errored parsing the URL: ".concat(e,": ").concat(n.toString()))}return e},s=function(){let{useCache:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&o)return o;const{locale:t,placeholders:n}=(0,i.getConfig)(),a=r();return o={locale:{...t,contentRoot:"".concat(a).concat(t.prefix,"/federal/globalnav")},placeholders:n}}}}]);
//# sourceMappingURL=3016.485a5df0.chunk.js.map