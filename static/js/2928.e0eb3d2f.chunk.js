"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[2928],{2928:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p,getTargetPersonalization:()=>c});var o=n(4114),a=(n(5769),"alloy_sendEvent"),r=new URL(window.location.href).searchParams,i=parseInt(r.get("target-timeout"),10)||parseInt((0,o.getMetadata)("target-timeout"),10)||4e3,s=(e,t,n)=>{const o=t.split(".");let a=e;for(const r of o.slice(0,-1))a[r]&&"object"===typeof a[r]||(a[r]={}),a=a[r];a[o[o.length-1]]=n},l=(e,t,n)=>new Promise((o=>{const a=e=>{clearTimeout(r),o(e.detail)},r=setTimeout((()=>{window.removeEventListener(e,a),o(void 0!==n?n:{timeout:!0})}),t);window.addEventListener(e,a,{once:!0}),window.addEventListener("alloy_sendEvent_error",(()=>{clearTimeout(r),o({error:!0})}),{once:!0})}));function d(e){const t=Date.now()-e;return n=t,Math.ceil(n/250)/4;var n}var c=async e=>{let{handleAlloyResponse:t,sendTargetResponseAnalytics:n}=e;const o=Date.now();window.addEventListener(a,(()=>{const e=d(o);try{window.lana.log("target response time: ".concat(e),{tags:"martech",errorType:"i"})}catch(t){console.error("Error logging target response time:",t)}}),{once:!0});let r=[],s=[];const c=await l(a,i);if(c.error){try{window.lana.log("target response time: ad blocker",{tags:"martech",errorType:"i"})}catch(m){console.error("Error logging target response time for ad blocker:",m)}return{targetManifests:r,targetPropositions:s}}var g;c.timeout?l(a,5100-i).then((()=>n(!0,o,i))):(n(!1,o,i),r=t(c.result),s=(null===(g=c.result)||void 0===g?void 0:g.propositions)||[]);return{targetManifests:r,targetPropositions:s}},g=()=>{const{miloLibs:e,codeRoot:t,entitlements:r}=(0,o.getConfig)();var i;i=r,l(a,3e3,[]).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.result)&&void 0!==t&&null!==(t=t.destinations)&&void 0!==t&&t.length?i((async e=>{const{getEntitlements:t}=await Promise.all([n.e(2343),n.e(8822)]).then(n.bind(n,6441));return t(e)})(e.result.destinations)):i([])})).catch((()=>i([]))),(0,o.loadLink)("".concat(e||t,"/features/personalization/personalization.js"),{as:"script",rel:"modulepreload"})};function m(){return/^(www|milo|business|blog|news)(\.stage)?\.adobe\.com$/.test(window.location.hostname)}var w=!1,u=async e=>w||(w=async()=>{var t,n;"loggedout"===(0,o.getMepEnablement)("xlg")?g():(0,o.loadIms)().then((()=>{window.adobeIMS.isSignedInUser()&&g()})).catch((()=>{})),s(window,"alloy_all.data._adobe_corpnew.digitalData.page.pageInfo.language",{locale:e.locale.prefix.replace("/",""),langCode:e.locale.ietf}),s(window,"digitalData.diagnostic.franklin.implementation","milo");const a=(null===(t=e.env.consumer)||void 0===t?void 0:t.marTechUrl)||(m()?"/marketingtech":"https://assets.adobedtm.com")+("prod"===e.env.name?"/d4d114c60e50/a0e989131fd5/launch-5dd5dd2177e6.min.js":"/d4d114c60e50/a0e989131fd5/launch-2c94beadc94f-development.min.js");(0,o.loadLink)(a,{as:"script",rel:"preload"}),window.marketingtech={adobe:{launch:{url:a,controlPageLoad:!0},alloy:{edgeConfigId:(null===(n=e.env.consumer)||void 0===n?void 0:n.edgeConfigId)||e.env.edgeConfigId,edgeDomain:m()?window.location.hostname:"sstats.adobe.com",edgeBasePath:m()?"experienceedge":"ee"},target:!1},milo:!0},window.edgeConfigId=e.env.edgeConfigId,await(0,o.loadScript)((m()?"":"https://www.adobe.com")+("prod"===e.env.name?"/marketingtech/main.standard.min.js":"/marketingtech/main.standard.qa.min.js")),window._satellite.track("pageload")},await w(),w);async function p(){const e=(0,o.getConfig)();return u(e)}}}]);
//# sourceMappingURL=2928.e0eb3d2f.chunk.js.map