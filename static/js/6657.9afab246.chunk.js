"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[6657],{6657:(o,i,n)=>{n.r(i),n.d(i,{default:()=>c});n(6850);var e="https://accounts.google.com/gsi/client",l="530526366930-l874a90ipfkn26naa71r010u8epp39jt.apps.googleusercontent.com",d="feds-googleLogin",a="feds-profile",t=async(o,i,n)=>{var e,l;let d;const a=n();try{var t;d=null===(t=new URL("function"===typeof a.googleLoginURLCallback?await a.googleLoginURLCallback():o("google-login-redirect")))||void 0===t?void 0:t.href}catch{}await window.adobeIMS.socialHeadlessSignIn({provider_id:"google",idp_token:null===i||void 0===i?void 0:i.credential,client_id:null===(e=window.adobeid)||void 0===e?void 0:e.client_id,scope:null===(l=window.adobeid)||void 0===l?void 0:l.scope}).then((()=>{!0!==window.DISABLE_PAGE_RELOAD&&(d?window.location.assign(d):window.location.reload())})).catch((()=>{window.adobeIMS.signInWithSocialProvider("google",{redirect_uri:d||window.location.href})}))};async function c(o,i,n,c){var r,u,s,g;try{await o()}catch{return}if(null!==(r=window.adobeIMS)&&void 0!==r&&r.isSignedInUser())return;await n(e);const w=document.createElement("div");w.id=d,null===(u=document.querySelector(".".concat(a)))||void 0===u||u.append(w),null===(s=window.google)||void 0===s||null===(s=s.accounts)||void 0===s||null===(s=s.id)||void 0===s||s.initialize({client_id:l,callback:o=>t(i,o,c),prompt_parent_id:d,cancel_on_tap_outside:!1}),null===(g=window.google)||void 0===g||null===(g=g.accounts)||void 0===g||null===(g=g.id)||void 0===g||g.prompt()}}}]);
//# sourceMappingURL=6657.9afab246.chunk.js.map