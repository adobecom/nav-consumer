"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[1041],{1041:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,loadAnalyticsAndInteractionData:()=>p});n(5769);var o="AMCV_9E1005A551ED61CA0A490D45@AdobeOrg",i=["kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity","kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_cluster"];function a(){var e;return(null===(e=window)||void 0===e||null===(e=e.location)||void 0===e?void 0:e.hostname).replace(/^www\./,"")}function r(){const e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=e[6]%16+64,e[8]=e[8]%16+128;let t="";return e.forEach(((e,n)=>{const o=e.toString(16).padStart(2,"0");4!==n&&6!==n&&8!==n&&10!==n||(t+="-"),t+=o})),t}function c(e){const t=document.cookie.split(";").map((e=>decodeURIComponent(e.trim()).split(/=(.*)/s))).find((t=>{let[n]=t;return n===e}));return t?t[1]:null}function d(e,t){const n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).expires||730,o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);const i="expires=".concat(o.toUTCString());document.cookie="".concat(e,"=").concat(t,"; ").concat(i,"; path=/ ; domain=.").concat(a(),";")}function l(){var e;const t=c(o);if(!t||-1===t.indexOf("MCMID|")){return{FPID:[{id:r(),authenticatedState:"ambiguous",primary:!0}]}}return{ECID:[{id:null===(e=t.match(/MCMID\|([^|]+)/))||void 0===e?void 0:e[1],authenticatedState:"ambiguous",primary:!0}]}}function s(e){let{updatedContext:t,pageName:n,locale:o,env:r}=e;const d=c("gpv"),s="prod"===r?["adbadobenonacdcprod"]:["adbadobenonacdcqa"],p=function(e){const{pathname:t}=window.location;return"prod"!==e?"bc8dfa27-29cc-625c-22ea-f7ccebfc6231":-1!==t.search(/(\/africa\/|\/be_en\/|\/be_fr\/|\/be_nl\/|\/cis_en\/|\/cy_en\/|\/dk\/|\/de\/|\/ee\/|\/es\/|\/fr\/|\/gr_en\/|\/ie\/|\/il_en\/|\/it\/|\/lv\/|\/lu_de\/|\/lu_en\/|\/lu_fr\/|\/hu\/|\/mt\/|\/mena_en\/|\/nl\/|\/no\/|\/pl\/|\/pt\/|\/ro\/|\/ch_de\/|\/si\/|\/sk\/|\/ch_fr\/|\/fi\/|\/se\/|\/ch_it\/|\/tr\/|\/uk\/|\/at\/|\/cz\/|\/bg\/|\/ru\/|\/cis_ru\/|\/ua\/|\/il_he\/|\/mena_ar\/|\/lt\/|\/sa_en\/|\/ae_en\/|\/ae_ar\/|\/sa_ar\/|\/ng\/|\/za\/|\/qa_ar\/|\/eg_en\/|\/eg_ar\/|\/kw_ar\/|\/eg_ar\/|\/qa_en\/|\/kw_en\/|\/gr_el\/|\/br\/|\/cl\/|\/la\/|\/mx\/|\/co\/|\/ar\/|\/pe\/|\/gt\/|\/pr\/|\/ec\/|\/cr\/)/)?"488edf5f-3cbe-f410-0953-8c0c5c323772":-1!==t.search(/(\/au\/|\/hk_en\/|\/in\/|\/nz\/|\/sea\/|\/cn\/|\/hk_zh\/|\/tw\/|\/kr\/|\/sg\/|\/th_en\/|\/th_th\/|\/my_en\/|\/my_ms\/|\/ph_en\/|\/ph_fil\/|\/vn_en\/|\/vn_vi\/|\/in_hi\/|\/id_id\/|\/id_en\/)/)?"3de509ee-bbc7-58a3-0851-600d1c2e2918":-1!==t.indexOf("/jp/")?"ba5bc9e8-8fb4-037a-12c8-682384720007":"4db35ee5-63ad-59f6-cec6-82ef8863b22d"}(r);return{event:{xdm:{...t,identityMap:l(),web:{webPageDetails:{URL:window.location.href,siteSection:"www.adobe.com",server:"www.adobe.com",isErrorPage:!1,isHomePage:!1,name:n,pageViews:{value:0}},webInteraction:{name:"Martech-API",type:"other",linkClicks:{value:1}},webReferrer:{URL:document.referrer}},timestamp:(new Date).toISOString(),eventType:"decisioning.propositionFetch"},data:{__adobe:{target:{is404:!1,authState:"loggedOut",hitType:"propositionFetch",isMilo:!0,adobeLocale:o.ietf,hasGnav:!0}},_adobe_corpnew:{marketingtech:{adobe:{alloy:{approach:"martech-API"}}},digitalData:{page:{pageInfo:{language:o.ietf}},diagnostic:{franklin:{implementation:"milo"}},previousPage:{pageInfo:{pageName:d}},primaryUser:{primaryProfile:{profileInfo:{authState:"loggedOut",returningStatus:"Repeat"}}}}}}},query:{identity:{fetch:["ECID"]},personalization:{schemas:["https://ns.adobe.com/personalization/default-content-item","https://ns.adobe.com/personalization/html-content-item","https://ns.adobe.com/personalization/json-content-item","https://ns.adobe.com/personalization/redirect-item","https://ns.adobe.com/personalization/dom-action"],decisionScopes:["__view__"]}},meta:{target:{migration:!0},configOverrides:{com_adobe_analytics:{reportSuites:s},com_adobe_target:{propertyToken:p}},state:{domain:a(),cookiesEnabled:!0,entries:document.cookie.split(";").map((e=>e.trim().split("="))).filter((e=>{let[t]=e;return i.includes(t)})).map((e=>{let[t,n]=e;return{key:t,value:n}}))}}}}var p=async e=>{let{locale:t,env:n,calculatedTimeout:a}=e;if("general=out"===c("kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_consent"))return{};const l="prod"===n?"913eac4d-900b-45e8-9ee7-306216765cd2":"e065836d-be57-47ef-b8d1-999e1657e8fd",p=function(){const e=new URL(window.location.href),{host:t}=window.location;if(e.searchParams.get("env")||t.includes("localhost")||t.includes(".page")||t.includes(".live"))return"https://edge.adobedc.net/ee/v2/interact";if(t.includes("stage.adobe")||t.includes("corp.adobe")||t.includes("graybox.adobe"))return"https://www.stage.adobe.com/experienceedge/v2/interact";const{origin:n}=window.location;return"".concat(n,"/experienceedge/v2/interact")}(),{screenWidth:u,screenHeight:h,screenOrientation:m,viewportWidth:w,viewportHeight:f}={screenWidth:window.screen.width,screenHeight:window.screen.height,screenOrientation:window.innerWidth>window.innerHeight?"landscape":"portrait",viewportWidth:window.innerWidth,viewportHeight:window.innerHeight},g=new Date,v=g.toISOString(),_=g.getTimezoneOffset(),b=function(e){let{locale:t}=e;const{host:n,pathname:o}=new URL(window.location.href),[i]=o.split("/").filter((e=>e!==t.prefix)).join(":").split(".");return"".concat(n.replace("www.",""),":").concat(i)}({locale:t}),y=function(e){let{screenWidth:t,screenHeight:n,screenOrientation:o,viewportWidth:i,viewportHeight:a,localTime:r,timezoneOffset:c}=e;return{device:{screenHeight:n,screenWidth:t,screenOrientation:o},environment:{type:"browser",browserDetails:{viewportWidth:i,viewportHeight:a}},placeContext:{localTime:r,localTimezoneOffset:c}}}({screenWidth:u,screenHeight:h,screenOrientation:m,viewportWidth:w,viewportHeight:f,LOCAL_TIME:v,LOCAL_TIMEZONE_OFFSET:_}),k=s({updatedContext:y,pageName:b,locale:t,env:n});try{var I,A,C;const e=await Promise.race([fetch("".concat(p,"?dataStreamId=").concat(l,"&requestId=").concat(r()),{method:"POST",body:JSON.stringify(k)}),new Promise(((e,t)=>{setTimeout((()=>t(new Error("Request timed out"))),a)}))]);if(!e.ok)throw new Error("Failed to fetch interact call");const t=await e.json();!function(e){const t=c(o);t?-1===t.indexOf("MCMID|")&&d(encodeURIComponent(o),"".concat(t,"|MCMID|").concat(e)):d(encodeURIComponent(o),"MCMID|".concat(e))}((null===(I=t.handle.flatMap((e=>e.payload)).find((e=>{var t;return"ECID"===(null===(t=e.namespace)||void 0===t?void 0:t.code)})))||void 0===I?void 0:I.id)||null);const n=[];null===t||void 0===t||null===(A=t.handle)||void 0===A||A.forEach((e=>{var t;"state:store"===(null===e||void 0===e?void 0:e.type)&&(null===e||void 0===e||null===(t=e.payload)||void 0===t||t.forEach((e=>{(null===e||void 0===e?void 0:e.key)!==i[0]&&(null===e||void 0===e?void 0:e.key)!==i[1]||n.push({...e})})))})),null===(O=n)||void 0===O||O.forEach((e=>{let{key:t,value:n}=e;c(t)||d(encodeURIComponent(t),n)}));const s=null===t||void 0===t||null===(C=t.handle)||void 0===C||null===(C=C.find((e=>"personalization:decisions"===e.type)))||void 0===C?void 0:C.payload;if(0===s.length)throw new Error("No propositions found");return{type:"propositionFetch",result:{propositions:s}}}catch(D){return{}}var O},u={loadAnalyticsAndInteractionData:p}}}]);
//# sourceMappingURL=1041.a3761263.chunk.js.map