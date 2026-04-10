import{p as h}from"./utils-EOEXLB4S-DacHn_aW.js";function a(l,i){if(!l||!i)return i;const e=h("button",{style:"background: none; border: none; padding: 0; cursor: pointer;",title:"Copy"},`<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
        <defs>
          <style>
            .fill {
              fill: #464646;
            }
          </style>
        </defs>
        <title>Copy</title>
        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18"/><rect class="fill" height="1" rx="0.25" width="1" x="16" y="11"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="16" y="9"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="16" y="7"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="16" y="5"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="16" y="3"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="16" y="1"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="14" y="1"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="12" y="1"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="10" y="1"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="8" y="1"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="6" y="1"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="6" y="3"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="6" y="5"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="6" y="7"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="6" y="9"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="6" y="11"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="8" y="11"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="10" y="11"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="12" y="11"/>
        <rect class="fill" height="1" rx="0.25" width="1" x="14" y="11"/>
        <path class="fill" d="M5,6H1.5a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5V13H5.5a.5.5,0,0,1-.5-.5Z"/>
      </svg>`);e.addEventListener("click",()=>{const r=new URL(l),s=`<a href="${l}" title="Special Link">CTA {{${r.searchParams.get("text")}}}</a>`,c=new ClipboardItem({"text/html":new Blob([s],{type:"text/html"})});navigator.clipboard.write([c])});const t=h("div",{class:"copy-cta-wrapper"});return t.appendChild(e),t.appendChild(i),t.style.display="flex",t.style.gap="14px",t}var x=a;export{x as default};
