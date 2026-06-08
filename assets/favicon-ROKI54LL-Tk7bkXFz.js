function r(f,o,a){const{codeRoot:c}=o,t=a("favicon")||"favicon",e=`${c}/img/favicons/${t}`,n=document.head.querySelector('link[rel="icon"]'),i=`<link rel="apple-touch-icon" href="${e}-180.png">
                <link rel="manifest" href="${e}.webmanifest">`;n.insertAdjacentHTML("afterend",i),n.href=`${e}.ico`}export{r as default};
