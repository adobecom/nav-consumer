"use strict";(self.webpackChunknav_consumer=self.webpackChunknav_consumer||[]).push([[1624],{1624:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o,isDisabled:()=>c});var a,i,l=t(4114),r=(t(5769),e=>new Date("".concat(e,"+00:00"))),s={APAC:["au","cn","hk_en","hk_zh","id_en","id_id","in","in_hi","kr","my_en","my_ms","nz","ph_en","ph_fil","sg","th_en","th_th","tw","vn_en","vn_vi"],EMEA:["ae_en","ae_ar","africa","at","be_en","be_fr","be_nl","bg","ch_de","ch_fr","ch_it","cis_en","cis_ru","cz","de","dk","ee","eg_ar","eg_en","es","fi","fr","gr_el","gr_en","hu","ie","il_en","il_he","iq","is","it","kw_ar","kw_en","lt","lu_de","lu_en","lu_fr","lv","mena_ar","mena_en","ng","nl","no","pl","pt","qa_ar","qa_en","ro","ru","sa_en","sa_ar","se","si","sk","tr","ua","uk","za"],AMERICAS:["us","ar","br","ca","ca_fr","cl","co","cr","ec","gt","la","mx","pe","pr"],JP:["jp"]},u=(null===(a=(0,l.getConfig)())||void 0===a||null===(a=a.locale)||void 0===a||null===(a=a.prefix)||void 0===a?void 0:a.substring(1))||"us",_=(null===(i=Object.keys(s).find((e=>{var n;return null===(n=s[e])||void 0===n?void 0:n.includes(u)})))||void 0===i?void 0:i.toLowerCase())||null,c=(e,n)=>{if(!e)return!1;if(e.locales&&!e.locales.includes(u))return!0;const t=null!==n&&void 0!==n&&n.get("instant")?new Date(n.get("instant")):new Date;return!!(!e.start&&e.end||!e.end&&e.start)||Boolean(e.start&&e.end&&(t<e.start||t>e.end))},d=(e,n,t)=>{var a;const i=e?null===(a=e.split(","))||void 0===a?void 0:a.map((e=>null===e||void 0===e?void 0:e.trim())):[],s=(0,l.getMetadata)(n?"".concat(n,"_schedule"):"schedule");return s?s.split(",").map((e=>{const[n,a,l,s,_,d,o]=e.trim().split("|").map((e=>e.trim()));if(i.includes(n)&&(e=>!e||e.split(";").map((e=>e.trim())).includes(u))(_)){const e={name:n,start:r(a),end:r(l),cdtStart:d,cdtEnd:o};return{manifestPath:s,disabled:c(e,t),event:e}}return null})).filter((e=>null!=e)):[]};function o(e,n){return[...null!=_?d(e["".concat(_,"_manifestnames")],_,n):[],...d(e.manifestnames,null,n)]}}}]);
//# sourceMappingURL=1624.157cbe4a.chunk.js.map