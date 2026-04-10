function u(e,n=300){if(typeof e!="function")return;let t=null;return(...o)=>{clearTimeout(t),t=setTimeout(()=>e(...o),n)}}export{u as d};
