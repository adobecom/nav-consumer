"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[7154],{7154:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v,getTargetAjoPersonalization:()=>g});var n=o(2861),a=(o(6850),"alloy_propositionFetch"),i="alloy_sendEvent",r=new URL(window.location.href).searchParams,s=parseInt(r.get("target-timeout"),10)||parseInt((0,n.getMetadata)("target-timeout"),10)||4e3,l=(e,t,o)=>{const n=t.split(".");let a=e;for(const i of n.slice(0,-1))a[i]&&"object"===typeof a[i]||(a[i]={}),a=a[i];a[n[n.length-1]]=o},d=(e,t,o)=>new Promise((n=>{const r=e=>{clearTimeout(s),n(e.detail)},s=setTimeout((()=>{window.removeEventListener(e,r),n(void 0!==o?o:{timeout:!0})}),t),l=e===i?"alloy_sendEvent_error":a;window.addEventListener(e,r,{once:!0}),window.addEventListener(l,(()=>{clearTimeout(s),n({error:!0})}),{once:!0})}));function c(e){const t=Date.now()-e;return o=t,Math.ceil(o/250)/4;var o}var g=async e=>{let{handleAlloyResponse:t,config:o,sendTargetResponseAnalytics:n}=e;const r=Date.now(),l=o.mep.ajoEnabled,g=l?a:i,m=l?"ajo":"target";window.addEventListener(g,(()=>{const e=c(r);try{window.lana.log("target response time: ".concat(e),{tags:"martech",errorType:"e",sampleRate:.5})}catch(t){console.error("Error logging target response time:",t)}}),{once:!0});let w=[],p=[];const u=await d(g,s);if(u.error){try{window.lana.log("".concat(m," response time: ad blocker"),{tags:"martech",errorType:"e",sampleRate:.5})}catch(h){console.error("Error logging ".concat(m," response time for ad blocker:"),h)}return{targetAjoManifests:w,targetAjoPropositions:p}}var v;u.timeout?d(g,5100-s).then((()=>n(!0,r,s))):(n(!1,r,s),w=t(u.result),p=(null===(v=u.result)||void 0===v?void 0:v.propositions)||[]);return{targetAjoManifests:w,targetAjoPropositions:p}},m=()=>{const{miloLibs:e,codeRoot:t,entitlements:a}=(0,n.getConfig)();var r;r=a,d(i,3e3,[]).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.result)&&void 0!==t&&null!==(t=t.destinations)&&void 0!==t&&t.length?r((async e=>{const{getEntitlements:t}=await Promise.all([o.e(9644),o.e(8744)]).then(o.bind(o,8744));return t(e)})(e.result.destinations)):r([])})).catch((()=>r([]))),(0,n.loadLink)("".concat(e||t,"/features/personalization/personalization.js"),{as:"script",rel:"modulepreload"})};function w(){return/^(www|milo|business|blog|news)(\.stage)?\.adobe\.com$/.test(window.location.hostname)}var p=!1,u=async e=>p||(p=async()=>{var t,o;"loggedout"===(0,n.getMepEnablement)("xlg")?m():(0,n.loadIms)().then((()=>{window.adobeIMS.isSignedInUser()&&m()})).catch((()=>{})),l(window,"alloy_all.data._adobe_corpnew.digitalData.page.pageInfo.language",{locale:e.locale.prefix.replace("/",""),langCode:e.locale.ietf}),l(window,"digitalData.diagnostic.franklin.implementation","milo");const a=(null===(t=e.env.consumer)||void 0===t?void 0:t.marTechUrl)||(w()?"/marketingtech":"https://assets.adobedtm.com")+("prod"===e.env.name?"/d4d114c60e50/a0e989131fd5/launch-5dd5dd2177e6.min.js":"/d4d114c60e50/a0e989131fd5/launch-2c94beadc94f-development.min.js");(0,n.loadLink)(a,{as:"script",rel:"preload"}),window.marketingtech={adobe:{launch:{url:a,controlPageLoad:!0},alloy:{edgeConfigId:(null===(o=e.env.consumer)||void 0===o?void 0:o.edgeConfigId)||e.env.edgeConfigId,edgeDomain:w()?window.location.hostname:"sstats.adobe.com",edgeBasePath:w()?"experienceedge":"ee"},target:!1},milo:!0},window.edgeConfigId=e.env.edgeConfigId,await(0,n.loadScript)((w()?"":"https://www.adobe.com")+("prod"===e.env.name?"/marketingtech/main.standard.min.js":"/marketingtech/main.standard.qa.min.js")),window._satellite.track("pageload")},await p(),p);async function v(){const e=(0,n.getConfig)();return u(e)}}}]);
//# sourceMappingURL=7154.502a2c61.chunk.js.map