import{Q as m,R as s,S as f}from"./draft-status-DCHYX3K6-BdvVELg1.js";import{c as p}from"./utils-WAZ6L2UH-B_OSzAPD.js";import"./index-D2oQlXRC.js";import"./chunk-GTDIBUQC-BHYaPzRb.js";import"./chunk-UNXAQXCU-D_hGlAPf.js";import"./chunk-RXU5ICMJ-BRo5-QH-.js";var h="Checking...",d=f([]),u=f([]),n=f({title:"Audit Image Alt value",description:h});function G(){d.value=[],u.value=[],n.value={title:"Audit Image Alt value",description:h}}var $=[{title:"Images with alt text",imgArray:u},{title:"Decorative images (empty alt text)",imgArray:d,closed:!0}],g=[{value:"",content:"All"},{value:"show-main",content:"Main content",selected:!0},{value:"show-gnav",content:"Gnav"},{value:"show-footer",content:"Footer"}];function A(t){const i=t.target.parentElement.parentElement;g.forEach(l=>{i.classList.contains(l.value)&&i.classList.remove(l.value)}),t.target.value&&i.classList.add(t.target.value)}function y(t){t.preventDefault(),(t.target.nodeName==="SPAN"?t.target.parentElement.parentElement:t.target.parentElement).classList.toggle("is-closed")}function k(t){const i=t.option.selected===!0;return s`
      <option value="${t.option.value}" selected="${i}">${t.option.content}</option>
  `}async function b(){if(n.value.checked)return;const t=document.querySelectorAll(":is(header, main, footer) img:not(.accessibility-control)"),i={...n.value};if(!t)return;const l=e=>typeof e.checkVisibility=="function"?e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0}):!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);return t.forEach(e=>{if(!l(e))return;const a=e.getAttribute("alt");let c="";e.closest("header")&&(c="gnav"),e.closest("main")&&(c="main-content"),e.closest("footer")&&(c="footer");let r;const o=e.closest("picture");o?(r=o.querySelector(".asset-meta"),r||(r=p("div",{class:"asset-meta preflight-decoration"}),e.nextSibling&&e.nextSibling.parentNode===o?o.insertBefore(r,e.nextSibling):o.appendChild(r))):(r=p("div",{class:"asset-meta preflight-decoration no-picture-tag"}),e.parentNode.insertBefore(r,e.nextSibling));let v;a===""&&(e.dataset.altCheck="Decorative",v=p("div",{class:"asset-meta-entry preflight-decoration needs-attention"},e.dataset.altCheck),d.value=[...d.value,{src:e.getAttribute("src"),altCheck:e.dataset.altCheck,parent:c}]),a&&(v=p("div",{class:"asset-meta-entry preflight-decoration is-valid"},`Alt: ${a}`),u.value=[...u.value,{src:e.getAttribute("src"),alt:a,parent:c}]),r.append(v),e.dataset.pageLocation=c}),i.description="All images from the page are listed below. Please ensure each image has appropriate alt text. Decorative images are highlighted in yellow on the page",n.value={...i,checked:!0},{decorativeImages:d.value,altTextImages:u.value}}function x({title:t,description:i}){return s`
    <div class="preflight-content-group">
      <div class="preflight-item preflight-accessibility-item ">
        <div class="result-icon alt-text"></div>
        <div class="preflight-item-text">
          <p class="preflight-item-title">${t}</p>
          <p class="preflight-item-description">${i}</p>
        </div>
      </div>
    </div>`}function C({group:t}){const i=g.find(a=>a.selected===!0),{imgArray:l,closed:e}=t;return s`
    <div class='grid-heading ${e===!0?"is-closed":""}'>
      <a href='#' onClick=${a=>y(a)} class='grid-toggle'>
        <span class="preflight-group-expand"></span>
        ${t.title}
      </a>
    </div>

    ${l.value.length>0&&s`
    <div class="access-image-grid ${i.value}">
      <div class="access-image-grid-item filter">
        Filter images by:
        <select onChange=${a=>A(a)} class="image-filter">
        ${g.map(a=>s`<${k} option=${a} />`)}
        </select>
      </div>

      ${l.value.map(a=>s`
      <div class="access-image-grid-item in-${a.parent}">
        <img src="${a.src}" />
        <span>${a.altCheck?`Marked as ${a.altCheck}`:`Alt=${a.alt}`}</span>
        <span>Located in ${a.parent}</span>
      </div>`)}
    </div>`}

    ${!l.value.length&&s`
      <div class="access-image-grid">
        <div class="access-image-grid-item full-width">No images found</div>
      </div>
    `}
  `}function N(){return m(()=>{b()},[]),s`
  <div class="access-columns">
    <${x} title=${n.value.title} description=${n.value.description} />
    ${$.map(t=>s`<${C} group=${t} />`)}
  </div>`}export{b as checkAlt,N as default,G as resetAltAudit};
