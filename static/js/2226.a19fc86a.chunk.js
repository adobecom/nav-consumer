"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[2226],{2226:(e,t,n)=>{n.r(t),n.d(t,{PERSONALIZATION_TAGS:()=>l,TRACKED_MANIFEST_TYPE:()=>w,addMepAnalytics:()=>le,applyPers:()=>ge,buildVariantInfo:()=>ne,categorizeActions:()=>de,cleanAndSortManifestList:()=>fe,combineMepSources:()=>he,createContent:()=>N,createMartechMetadata:()=>Y,deleteMarkedEls:()=>$,getEntitlementMap:()=>re,getEntitlements:()=>ie,getFileName:()=>L,getManifestConfig:()=>se,handleCommands:()=>G,handleFragmentCommand:()=>pe,init:()=>ye,matchGlob:()=>U,modifyNonFragmentSelector:()=>D,normalizePath:()=>M,parseManifestVariants:()=>K,parseNestedPlaceholders:()=>ve,parsePlaceholders:()=>Q,replaceInner:()=>z,replacePlaceholders:()=>x,updateFragDataProps:()=>Z});var a=n(731),r=n(4941),i=window.screen.width<550||window.screen.height<550,o=navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints>1,l={all:()=>!0,chrome:()=>navigator.userAgent.includes("Chrome")&&!navigator.userAgent.includes("Edg"),firefox:()=>navigator.userAgent.includes("Firefox"),safari:()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),edge:()=>navigator.userAgent.includes("Edg"),android:()=>navigator.userAgent.includes("Android"),ios:()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||o,windows:()=>navigator.userAgent.includes("Windows"),mac:()=>navigator.userAgent.includes("Macintosh")&&!o,"mobile-device":()=>o||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Touch/i.test(navigator.userAgent),phone:()=>l["mobile-device"]()&&i,tablet:()=>l["mobile-device"]()&&!i,desktop:()=>!l["mobile-device"](),loggedout:()=>{var e;return!(null!==(e=window.adobeIMS)&&void 0!==e&&e.isSignedInUser())},loggedin:()=>{var e;return!(null===(e=window.adobeIMS)||void 0===e||!e.isSignedInUser())}},s=Object.keys(l),c="p13n-deleted",d="p13n-replaced",u="not ",m="target-",f="_inline",p="martechReturned",v=new URL(window.location.href),g={all:"all",includeFragments:"include-fragments"},h=!1,w="personalization",b=/[^a-z0-9\- _,&=]/g,y=["action","selector","pagefilter","page filter","page filter optional"],E={JSON:"json",TEXT:"text"},P="in-block:",M=function(e){var t;let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e;if(null===(t=i)||void 0===t||!t.includes("/"))return i;const o=(0,r.getConfig)();if(i.startsWith("https://www.adobe.com/federal/"))return(0,a.getFederatedUrl)(i);if(i.startsWith(o.codeRoot)||i.includes(".hlx.")||i.includes(".aem.")||i.includes(".adobe."))try{const e=new URL(i),t=e.pathname.split("/")[1];i=!n||"en-US"===o.locale.ietf||e.hash.includes("#_dnt")||t in o.locales||i.includes(".json")?e.pathname:"".concat(o.locale.prefix).concat(e.pathname)}catch(l){}else i.startsWith("http")||i.startsWith("/")||(i="/".concat(i));return i},L=e=>null===e||void 0===e?void 0:e.split("/").pop(),C=["insertscript","replacepage","updatemetadata","useblockcode"],I={insertafter:"afterend",insertbefore:"beforebegin",prepend:"afterbegin",append:"beforeend"},k={remove:"remove",replace:"replace"};function T(e,t,n){t&&(e.dataset.manifestId=t),n&&(e.dataset.adobeTargetTestid=n)}function A(e){const t=e.toLowerCase().trim();return t.startsWith("/")||t.startsWith("http")?"fragment":"other"}function x(e,t){const n=t||(0,r.getConfig)().placeholders;if(!n)return e;let a=e;const i=a.match(/{{(.*?)}}/g);return i?(i.forEach((e=>{const t=e.replace(/{{|}}/g,"").trim();n[t]&&(a=a.replace(e,n[t]))})),a):a}var S=(e,t,n,a,i)=>{"replace"===t&&e.classList.add(c,d);let o=n;try{const{pathname:e,search:t,hash:a}=new URL(n);o="".concat(e).concat(t).concat(a)}catch{}const l=(0,r.createTag)("a",{href:o},n);T(l,a,i);const s=(0,r.createTag)("p",void 0,l);return/#.*delay=/.test(o)&&s.classList.add("hide-block"),(e=>{const t=document.querySelector("body > main > div");return t===e||(null===t||void 0===t?void 0:t.contains(e))})(e)&&(0,r.loadLink)("".concat((0,r.localizeLink)(l.href),".plain.html"),{as:"fetch",crossorigin:"anonymous",rel:"preload"}),s},N=(e,t)=>{let{content:n,manifestId:a,targetManifestId:i,action:o,modifiers:l}=t;if("replace"===o&&T(e,a,i),"A"===(null===e||void 0===e?void 0:e.nodeName)&&null!==l&&void 0!==l&&l.includes("href"))return e.setAttribute("href",((e,t,n)=>{const a=e.getAttribute("href"),r=x(t);return"insertafter"===n||"append"===n?"".concat(a).concat(r):"insertbefore"===n||"prepend"===n?"".concat(r).concat(a):r})(e,n,o)),T(e,a,i),e;if("fragment"!==A(n)){const t=x(n);if("replace"===o)return e.innerHTML=t,e;const l=(0,r.createTag)("div",{},t);return T(l,a,i),l}const s=S(e,o,n,a,i);return T(s,a,i),"MAIN"!==(null===e||void 0===e?void 0:e.parentElement.nodeName)?s:(0,r.createTag)("div",void 0,s)},O={[k.remove]:(e,t)=>{let{content:n,manifestId:a}=t;"false"!==n&&(a?e.dataset.removedManifestId=a:e.classList.add(c))},[k.replace]:(e,t)=>{e&&!e.classList.contains(d)&&e.insertAdjacentElement("beforebegin",N(e,t))}},j=function(){var e;null!==(e=(0,r.getConfig)().mep)&&void 0!==e&&e.preview&&console.log(...arguments)},W=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.JSON;try{const n=await fetch(M(e));if(!n.ok){if(404===n.status)throw new Error("File not found");throw new Error("Invalid response: ".concat(n.status," ").concat(n.statusText))}return await n[t]()}catch(n){j("Error loading content: ".concat(e),n.message||n)}return null},V=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.reduce(((e,n)=>[...e,...n[t]||[]]),n)},F=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.reduce(((e,a)=>{var r;return null===(r=a[t])||void 0===r||r.forEach((n=>{const{selector:r,val:i}=n;if("blocks"===t)return void(e[r]=i);if(r in e)return;const o={action:n.action,fragment:i,selector:r,manifestPath:a.manifestPath,manifestId:n.manifestId,targetManifestId:n.targetManifestId};for(const t in e)e[t].fragment===r&&(e[t]=o);e[r]=o})),{...n,...e}}),{})},U=(e,t)=>{const n=e.replace(/\*\*/g,".*");return new RegExp("^".concat(n,"(\\.html)?$"),"i").test(t)};async function z(e,t){if(!e||!t)return!1;let n=e.endsWith("/")?"".concat(e,"index"):e;n=n.endsWith(".plain.html")?n:"".concat(n,".plain.html");const a=await W(n,E.TEXT);if(!a)return!1;t.innerHTML=a;const{decorateArea:i}=(0,r.getConfig)();return i&&i(t),!0}var R=e=>{const{selector:t,val:n}=e;if(!t||!n)return;const a=t.startsWith("og:")?"property":"name";let i=document.querySelector("meta[".concat(a,'="').concat(t,'"]'));i||(i=(0,r.createTag)("meta",{[a]:t}),document.head.append(i)),i.setAttribute("content",n)};function _(e){return Object.keys(e).reduce(((t,n)=>{var a;return t[(a=n,a.toLowerCase().replace(b,""))]=e[n],t}),{})}var q=(e,t)=>e?t.replace(e,":nth-child(".concat(e,")")):t;function B(e){let t=e;const n={section:"main > div","primary-cta":"strong a","secondary-cta":"em a","action-area":"*:has(> em a, > strong a)","any-marquee-section":'main > div:has([class*="marquee"])',"any-marquee":'[class*="marquee"]',"any-header":":is(h1, h2, h3, h4, h5, h6)"},a=t.match(/^[a-zA-Z/./-]*/),r=a?a[0].toLowerCase():"",i=r.split(/\.|:/)[0],o=t.match(/[0-9]*$/),l=o&&r.match(/^[a-zA-Z]/)?o[0]:"";return!r||["html","body","header","footer","main","div","a","p","strong","em","picture","source","img","h","ul","ol","li"].includes(r)?t:["row","col"].includes(r)?(t=t.replace(r,"> div"),t=q(l,t),t):Object.keys(n).includes(i)?(t=t.replace(i,n[i]),t=q(l,t),t):(r.startsWith(".")||(t=".".concat(t)),l&&(t=t.replace(l,""),t="".concat(t,":nth-child(").concat(l," of ").concat(t,")")),t)}function D(e){const{sel:t,modifiers:n}=function(e){let t=e;const n=[],a=t.split(/\s+#_/);return a.length&&(t=a.shift(),a.forEach((e=>{e.split(/_|#_/).forEach((e=>n.push(e.toLowerCase().trim())))}))),{sel:t,modifiers:n}}(e);return{modifiedSelector:t.split(">").join(" > ").split(",").join(" , ").replaceAll(/main\s*>?\s*(section\d*)/gi,"$1").split(/\s+/).map(B).join(" ").trim(),modifiers:n}}var J=(e,t)=>{if(!t)return e;try{const{origin:n,pathname:a,search:r}=new URL(e);return"".concat(n).concat(a).concat(r,"#").concat(t)}catch(n){return"".concat(e,"#").concat(t)}},H=(e,t,n)=>{[...e[0].children].forEach((e=>e.dataset[t]=n))},Z=(e,t,n,a)=>{const{manifestId:r,adobeTargetTestid:i}=e.dataset;t?(r&&H(n,"manifestId",r),i&&H(n,"adobeTargetTestid",i)):T(a,r,i)},$=function(){[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(".".concat(c))].forEach((e=>e.remove()))};function G(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=document.querySelector("main > div");return e.forEach((e=>{const{action:l,content:s,selector:c}=e;if(e.content=n?J(s,f):s,c.startsWith(P))return function(e){var t,n,i,o,l,s;const c=e.selector.substring(P.length).trim().split(/\s+/),[d]=c,u=(0,r.getConfig)();let m;if(null!==(n=(t=u.mep).inBlock)&&void 0!==n||(t.inBlock={}),null!==(o=(i=u.mep.inBlock)[d])&&void 0!==o||(i[d]={}),1===c.length&&delete e.selector,c.length>1&&(m=c.slice(1).join(" "),e.selector=m,"fragment"===A(m))){var f,p;m.includes("/federal/")&&(m=(0,a.getFederatedUrl)(m)),e.content.includes("/federal/")&&(e.content=(0,a.getFederatedUrl)(e.content)),null!==(p=(f=u.mep.inBlock[d]).fragments)&&void 0!==p||(f.fragments={});const{fragments:t}=u.mep.inBlock[d];if(delete e.selector,m in t)return;for(const n in t)t[n].content===m&&(t[n]=e);t[m]=e,m=M(m);for(const n in t)t[n].content===m&&(t[n]=e);t[m]=e}else null!==(s=(l=u.mep.inBlock[d]).commands)&&void 0!==s||(l.commands=[]),u.mep.inBlock[d].commands.push(e)}(e),void(e.selectorType=P);const{els:d,modifiers:u}=function(e,t,n){const a=n?t:document,r=e.trim();if(!r)return{};if("fragment"===A(r))try{return{els:a.querySelectorAll('a[href*="'.concat(M(r,!1),'"], a[href*="').concat(M(r,!0),'"]')),modifiers:[g.all,g.includeFragments]}}catch(s){return{els:[],modifiers:[]}}const{modifiedSelector:i,modifiers:o}=D(r);let l;try{l=a.querySelectorAll(i)}catch(s){return j("Invalid selector: ",r),null}return o.includes(g.all)||!l.length||(l=[l[0]]),{els:l,modifiers:o}}(c,t,i);e.modifiers=u,null===d||void 0===d||d.forEach((n=>{if(!n||!(l in O)&&!(l in I)||t&&!t.contains(n)||h&&null!==o&&void 0!==o&&o.contains(n))return;if(l in O)return void O[l](n,e);const a="fragment"===A(c)?n.parentElement:n;null===a||void 0===a||a.insertAdjacentElement(I[l],N(n,e))})),(d.length&&!e.modifiers.includes(g.all)||!e.modifiers.includes(g.includeFragments))&&(e.completed=!0)})),$(t),e.filter((e=>!e.completed&&e.selectorType!==P))}var X=(e,t,n,a,i)=>{var o,l,s;const c=(0,r.getConfig)();let d=L(a),u=d.replace(".json","");i&&(u=i),null!==(o=c.mep)&&void 0!==o&&o.preview||(d=!1);const f=null===(l=e.action)||void 0===l?void 0:l.toLowerCase().replace("content","").replace("fragment","").replace("tosection","");if(!f)return void j("Row found with empty action field: ",e);const p=e["page filter"]||e["page filter optional"],{selector:g}=e;if(p&&!U(p,new URL(window.location).pathname))return;null!==(s=c.mep)&&void 0!==s&&s.preview||(d=!1);const{origin:h}=v;t.forEach((t=>{const a=!!t.startsWith(m)&&u;if(!e[t]||"false"===e[t].toLowerCase())return;const r={action:f,selector:g,pageFilter:p,content:e[t],selectorType:A(g),manifestId:d,targetManifestId:a};if(f in O&&"fragment"===r.selectorType)n[t].fragments.push({selector:M(r.selector.split(" #_")[0]),val:M(e[t]),action:f,manifestId:d,targetManifestId:a});else if(C.includes(f))if(n[t][f]=n[t][f]||[],"useblockcode"===f){const{blockSelector:r,blockTarget:i}=((e,t,n)=>{var a,r,i,o;let l=e;null!==(a=l)&&void 0!==a&&a.includes("\\")&&(l=null===(r=l)||void 0===r?void 0:r.split("\\").join("/")),null!==(i=l)&&void 0!==i&&i.startsWith("/")||(l="/".concat(l));const s=null===(o=l)||void 0===o?void 0:o.split("/").pop();return l=l.startsWith("/libs/")?"".concat(t.miloLibs||t.codeRoot).concat(l.replace("/libs","")):"".concat(n).concat(l),{blockSelector:s,blockTarget:l}})(e[t],c,h);n[t][f].push({selector:r,val:i,pageFilter:p,manifestId:d,targetManifestId:a})}else n[t][f].push({selector:M(g),val:M(e[t]),pageFilter:p,manifestId:d,targetManifestId:a});else(f in O||f in I)&&n[t].commands.push(r)}))};function K(e,t,n){if(null===e||void 0===e||!e.length)return null;const a={},i=e.map((e=>_(e)));try{var o;const e={},l=Object.keys(i[0]).filter((e=>!y.includes(e)));l.forEach((t=>{e[t]={commands:[],fragments:[]}})),i.forEach((a=>{X(a,l,e,t,n)})),a.variants=e,a.variantNames=l;return null!==(o=(0,r.getConfig)().mep)&&void 0!==o&&o.preview||(a.manifestId=!1),a}catch(l){j("error parsing personalization manifestConfig:",l,i)}return null}async function Y(e,t,a){"en-US"!==t.locale.ietf&&await n.e(7240).then(n.bind(n,7240)).then((n=>{var r,i;let{processTrackingLabels:o}=n;null!==(i=(r=t.mep).analyticLocalization)&&void 0!==i||(r.analyticLocalization={}),e.forEach(((n,r)=>{const i=e[r];let l=i["en-us"]||i.us||i.en||i.key;if(!l)return;l=o(l);const s=o(n[a]);t.mep.analyticLocalization[s]=l}))}))}function Q(e,t){var n;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(null===e||void 0===e||!e.length||"default"===a)return t;const r=[a.toLowerCase(),null===(n=t.mep)||void 0===n?void 0:n.geoPrefix,t.locale.region.toLowerCase(),t.locale.ietf.toLowerCase(),...t.locale.ietf.toLowerCase().split("-"),"value","other"],i=(null!==e&&void 0!==e&&e.length?Object.entries(e[0]):[]).find((e=>{let[t]=e;return r.includes(t.toLowerCase())})),o=null===i||void 0===i?void 0:i[0];if(o){const n=e.reduce(((e,t)=>(e[t.key]=t[o],e)),{});t.placeholders={...t.placeholders||{},...n}}return Y(e,t,o),t}var ee=e=>{const[t,n]=e.split("param-")[1].split("=");if(!t)return!1;const a=new URLSearchParams(Array.from(v.searchParams,(e=>{let[t,n]=e;return[t.toLowerCase(),null===n||void 0===n?void 0:n.toLowerCase()]}))).get(t.toLowerCase());return null!==a&&(!n||n===a)};function te(e){return e.map((e=>e.trim())).filter(Boolean)}function ne(e){return e.reduce(((e,t)=>{let n=[t];return t.startsWith(m)||(n=t.split(",")),e[t]=te(n),e.allNames=[...e.allNames,...te(t.split(/[,&]|\bnot\b/))],e}),{allNames:[]})}var ae=e=>{var t;const n="prod"===(null===(t=e.env)||void 0===t?void 0:t.name)?"prod":"stage";return"https://www.adobe.com/federal/assets/data/mep-xlg-tags.json?sheet=".concat(n)},re=async()=>{var e,t,n;const a=(0,r.getConfig)();if(null!==(e=a.mep)&&void 0!==e&&e.entitlementMap)return a.mep.entitlementMap;const i=ae(a),o=await W(i,E.JSON);if(!o)return a.consumerEntitlements||{};const l={};return null===o||void 0===o||null===(t=o.data)||void 0===t||t.forEach((e=>{const{id:t,tagname:n}=e;l[t]=n})),null!==(n=a.mep)&&void 0!==n||(a.mep={}),a.mep.entitlementMap={...a.consumerEntitlements,...l},a.mep.entitlementMap},ie=async e=>{const t=await re();return e.flatMap((e=>{var n;return(null===(n=e.segments)||void 0===n?void 0:n.flatMap((e=>{const n=t[e.id];return n?[n]:[]})))||[]}))};var oe=e=>({disabled:e.disabled,event:e.event,manifest:e.manifestPath,executionOrder:"1-1",selectedVariant:{commands:[],fragments:[]},selectedVariantName:"default",variantNames:["all"],variants:{}}),le=(e,t)=>{var n;null===(n=e.mep)||void 0===n||null===(n=n.experiments)||void 0===n||n.forEach((e=>{var n,a;(null===e||void 0===e||null===(n=e.selectedVariant)||void 0===n||null===(n=n.useblockcode)||void 0===n||n.forEach((e=>{let{selector:t,targetManifestId:n}=e;t&&n&&document.querySelectorAll(".".concat(t)).forEach((e=>e.dataset.adobeTargetTestid=n))})),t)&&(null===e||void 0===e||null===(a=e.selectedVariant)||void 0===a||null===(a=a.updatemetadata)||void 0===a||a.forEach((e=>{"gnav-source"===(null===e||void 0===e?void 0:e.selector)&&e.targetManifestId&&(t.dataset.adobeTargetTestid=e.targetManifestId)})))}))};async function se(){var e,t,n,a,i;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{name:d,manifestData:f,manifestPath:p,manifestUrl:v,manifestPlaceholders:g,manifestInfo:h,variantLabel:b,disabled:y,event:P}=o;if(y&&(!c||!Object.keys(c).length))return oe(o);let L=f;if(!L){const e=await W(p,E.JSON);W&&(L=e)}const C=(null===(e=L)||void 0===e||null===(e=e.experiences)||void 0===e?void 0:e.data)||(null===(t=L)||void 0===t?void 0:t.data)||L;if(!C)return null;const I=h||(null===(n=L)||void 0===n||null===(n=n.info)||void 0===n?void 0:n.data),k=null===I||void 0===I?void 0:I.reduce(((e,t)=>(e[t.key]=t.value,e)),{}),T=null===k||void 0===k||null===(a=k["manifest-override-name"])||void 0===a?void 0:a.toLowerCase(),A=K(C,p,d||T);if(!A)return j("Error loading personalization manifestConfig: ",d||p),null;const x={"manifest-type":["Personalization","Promo","Test"],"manifest-execution-order":["First","Normal","Last"]};if(I){var S;A.manifestType=null===k||void 0===k||null===(S=k["manifest-type"])||void 0===S?void 0:S.toLowerCase(),T&&A.manifestType===w&&(A.manifestOverrideName=T);const e={"manifest-type":1,"manifest-execution-order":1};Object.keys(k).forEach((t=>{if(!x[t])return;const n=x[t].indexOf(k[t]);e[t]=n>-1?n:1})),A.executionOrder="".concat(e["manifest-execution-order"],"-").concat(e["manifest-type"])}else A.manifestType=x["manifest-type"][1],A.executionOrder="1-1";return A.manifestPath=M(p),A.selectedVariantName=await async function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const i=(0,r.getConfig)();if(null!==(t=i.mep)&&void 0!==t&&null!==(t=t.variantOverride)&&void 0!==t&&t[e])return i.mep.variantOverride[e];const o=ne(n),c=Object.values(await re()).some((e=>o.allNames.includes(e)));let d=[];c&&(d=await i.entitlements());const f=e=>{var t;return""===e||e===(null===a||void 0===a?void 0:a.toLowerCase())||(e.startsWith("param-")?ee(e):!(null===(t=d)||void 0===t||!t.includes(e))||s.includes(e)&&l[e]())},p=e=>e.startsWith(m)?f(e):!e.split("&").map((e=>{const t=e.trim().startsWith(u),n=f(e.replace(u,"").trim());return t?!n:n})).includes(!1);return n.find((e=>o[e].some(p)))}(A.manifestPath,A.variantNames,b),A.placeholderData=g||(null===(i=L)||void 0===i||null===(i=i.placeholders)||void 0===i?void 0:i.data),A.name=d,A.manifest=p,A.manifestUrl=v,A.disabled=y,A.event=P,A}var ce=e=>{let{selector:t,val:n,action:a,manifestId:r,targetManifestId:i}=e;return{selector:M(t),val:M(n),action:a,manifestId:r,targetManifestId:i}};async function de(e,t){var n,a,i;if(!e)return null;const{manifestPath:o,selectedVariant:l}=e;if(!l||"default"===l)return{experiment:e};const{replacepage:s}=l;return null!==(n=l.replacepage)&&void 0!==n&&n.length&&(t.mep.replacepage=s[0]),null===(a=l.insertscript)||void 0===a||a.map((e=>(0,r.loadScript)(e.val))),null===(i=l.updatemetadata)||void 0===i||i.map((e=>R(e))),l.fragments&&(l.fragments=l.fragments.map(ce)),{manifestPath:o,experiment:e,blocks:l.useblockcode,fragments:l.fragments,commands:l.commands}}function ue(e){if(!e)return!1;const t=Object.create(null);return decodeURIComponent(e).split("---").forEach((e=>{const n=e.trim().split("--");if(n.length>1){const[e,a]=n;t[e]=a}})),t}function me(e,t){return e.executionOrder===t.executionOrder?0:e.executionOrder>t.executionOrder?1:-1}function fe(e){var t;const n=(0,r.getConfig)(),a={};let i=e;return null!==(t=n.mep)&&void 0!==t&&t.experiments&&(i=[...e,...n.mep.experiments]),i.forEach((e=>{try{if(null===e||void 0===e||!e.manifest)return;if(e.manifestPath||(e.manifestPath=M(e.manifest)),e.manifestPath in a){let t=a[e.manifestPath],n=e;e.name&&(t=e,n=a[e.manifestPath]),n.name=t.name,n.selectedVariantName=t.selectedVariantName,n.selectedVariant=n.variants[n.selectedVariantName],a[e.manifestPath]=n}else a[e.manifestPath]=e;const t=a[e.manifestPath],{selectedVariantName:n,variantNames:i,placeholderData:o}=t;n&&i.includes(n)?(t.run=!0,t.selectedVariantName=n,t.selectedVariant=t.variants[n]):(t.selectedVariantName="default",t.selectedVariant="default"),Q(o,(0,r.getConfig)(),t.selectedVariantName)}catch(n){var t;j("MEP Error parsing manifests: ".concat(n.toString())),null===(t=window.lana)||void 0===t||t.log("MEP Error parsing manifests: ".concat(n.toString()))}})),Object.keys(a).forEach((e=>{delete a[e].variants})),Object.values(a).sort(me)}function pe(e,t){const{action:n,fragment:a,manifestId:r,targetManifestId:i}=e;return n===k.replace?(t.href=a,T(t,r,i),a):(n===k.remove&&(r?t.parentElement.dataset.removedManifestId=r:t.parentElement.remove()),!1)}function ve(e){let{placeholders:t}=e;t&&Object.entries(t).forEach((e=>{let[n,a]=e;t[n]=x(a,t)}))}async function ge(e){if(null===e||void 0===e||!e.length)return;let t=e;const n=(0,r.getConfig)();for(let r=0;r<t.length;r+=1){var a;t[r]=await se(t[r],null===(a=n.mep)||void 0===a?void 0:a.variantOverride)}t=fe(t),ve(n);let i=[];for(const r of t){const e=await de(r,n);e&&i.push(e)}i=i.filter(Boolean),n.mep.experiments=[...n.mep.experiments,...t],n.mep.blocks=F(i,"blocks",n.mep.blocks),n.mep.fragments=F(i,"fragments",n.mep.fragments),n.mep.commands=V(i,"commands",n.mep.commands);const o=document.querySelector("main");if(n.mep.replacepage&&!h&&o){await z(n.mep.replacepage.val,o);const{manifestId:e,targetManifestId:t}=n.mep.replacepage;T(o,e,t)}n.mep.commands=G(n.mep.commands);const l=i.filter((e=>{var t;return(null===(t=e.experiment)||void 0===t?void 0:t.manifestType)===w}));if(!l.length)return;const s=l.map((e=>{const t=e.experiment.selectedVariantName.replace(m,"").trim().slice(0,15);return"default"===t?"nopzn":t})),c=l.map((e=>{var t,n;const a=(null===(t=e.experiment)||void 0===t?void 0:t.manifestOverrideName)||(null===(n=e.experiment)||void 0===n?void 0:n.manifest);return L(a).replace(".json","").trim().slice(0,15)}));n.mep.martech="|".concat(s.join("--"),"|").concat(c.join("--"))}var he=async(e,t,a)=>{let r=[];if(e&&(r=e.toLowerCase().split(/,|(\s+)|(\\n)/g).filter((e=>null===e||void 0===e?void 0:e.trim())).map((e=>({manifestPath:e})))),t){const{default:e}=await n.e(9907).then(n.bind(n,9907));r=r.concat(e(t,v.searchParams))}if(a&&"off"!==a){const e=r.map((e=>{const{manifestPath:t}=e;if(t.startsWith("/"))return t;try{return new URL(t).pathname}catch(n){return t}}));a.split("---").forEach((t=>{const n=t.trim().toLowerCase().split("--")[0];e.includes(n)||r.push({manifestPath:n})}))}return r};async function we(e){const{getTargetPersonalization:t}=await n.e(9550).then(n.bind(n,9550)),{targetManifests:a,targetPropositions:r}=await t();if(e.mep.targetManifests=a,null!==r&&void 0!==r&&r.length&&window._satellite&&window._satellite.track("propositionDisplay",r),"postlcp"===e.mep.targetEnabled){const e=new CustomEvent(p,{detail:"Martech returned"});window.dispatchEvent(e)}return a}var be=()=>new Promise((e=>{window.addEventListener(p,(t=>e(t.detail)),{once:!0})}));async function ye(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];const{mepParam:n,mepHighlight:a,mepButton:i,pzn:o,promo:l,target:s,postLCP:c}=e,d=(0,r.getConfig)();var u,m,f;c?h=!0:(d.mep={updateFragDataProps:Z,preview:"off"!==i&&("prod"!==(null===(u=d.env)||void 0===u?void 0:u.name)||n||""===n||i),variantOverride:ue(n),highlight:void 0!==a&&"false"!==a,targetEnabled:s,experiments:[],geoPrefix:(null===(m=d.locale)||void 0===m||null===(m=m.prefix.split("/")[1])||void 0===m?void 0:m.toLowerCase())||"en-us"},t=t.concat(await he(o,l,n)),null===(f=t)||void 0===f||f.forEach((e=>{if(e.disabled)return;const t=M(e.manifestPath);(0,r.loadLink)(t,{as:"fetch",crossorigin:"anonymous",rel:"preload"})})),o&&(0,r.loadLink)(ae(d),{as:"fetch",crossorigin:"anonymous",rel:"preload"}));if(!0===s&&(t=t.concat(await we(d))),"postlcp"===s&&we(d),c&&(d.mep.targetManifests||await be(),t=d.mep.targetManifests),t&&t.length)try{await ge(t)}catch(v){var p;j("MEP Error: ".concat(v.toString())),null===(p=window.lana)||void 0===p||p.log("MEP Error: ".concat(v.toString()))}}}}]);
//# sourceMappingURL=2226.a19fc86a.chunk.js.map